import * as React from "react";
import InfiniteViewer from "react-infinite-viewer";
import Guides from "@scena/react-guides";
import Selecto, { Rect } from "react-selecto";
import "./Editor.css";
import Menu from "./Menu/Menu";
import Viewport, {
  ElementInfo,
  MovedInfo,
  MovedResult
} from "./Viewport/Viewport";
import {
  prefix,
  getIds,
  checkImageLoaded,
  checkInput,
  getParnetScenaElement,
  getScenaAttrs
} from "./utils/utils";
import Tabs from "./Tabs/Tabs";
import EventBus from "./utils/EventBus";
import { IObject } from "@daybrush/utils";
import Memory from "./utils/Memory";
import MoveableManager from "./Viewport/MoveableMananger";
import MoveableData from "./utils/MoveableData";
import Shortcuts from 'shortcuts';
import { ScenaEditorState, SavedScenaData, ScenaJSXElement } from "./types";
import HistoryManager from "./utils/HistoryManager";
import Debugger from "./utils/Debugger";
import { DATA_SCENA_ELEMENT_ID } from "./consts";
import ClipboardManager from "./utils/ClipboardManager";
import { NameType } from "scenejs";
import domtoimage from "dom-to-image";
import TextEditor from "./TextEditor";
import Icon from "./Menu/Icon";
import FontsManager from "./utils/FontsManager";
import { unionBy } from "lodash";

function undoCreateElements(
  { infos, prevSelected }: IObject<any>,
  editor: Editor
) {
  const res = editor.removeByIds(
    infos.map((info: ElementInfo) => info.id),
    true
  );

  if (prevSelected) {
    res.then(() => {
      editor.setSelectedTargets(
        editor.getViewport().getElements(prevSelected),
        true
      );
    });
  }
}
function restoreElements({ infos }: IObject<any>, editor: Editor) {
  editor.appendJSXs(
    infos.map((info: ElementInfo) => ({
      ...info
    })),
    true
  );
}
function undoSelectTargets({ prevs, nexts }: IObject<any>, editor: Editor) {
  editor.setSelectedTargets(editor.viewport.current!.getElements(prevs), true);
}
function redoSelectTargets({ prevs, nexts }: IObject<any>, editor: Editor) {
  editor.setSelectedTargets(editor.viewport.current!.getElements(nexts), true);
}
function undoChangeText({ prev, next, id }: IObject<any>, editor: Editor) {
  const info = editor.getViewport().getInfo(id)!;
  info.innerText = prev;
  info.el!.innerText = prev;
}
function redoChangeText({ prev, next, id }: IObject<any>, editor: Editor) {
  const info = editor.getViewport().getInfo(id)!;
  info.innerText = next;
  info.el!.innerText = next;
}
function undoMove({ prevInfos }: MovedResult, editor: Editor) {
  editor.moves(prevInfos, true);
}
function redoMove({ nextInfos }: MovedResult, editor: Editor) {
  editor.moves(nextInfos, true);
}
export default class Editor extends React.PureComponent<
  {
    debug?: boolean;
    initialJSX?: ElementInfo[];
    backgroundImg?: string;
    onChange?: (evt: ElementInfo[]) => void;
    onUploadImage?: (img: File) => Promise<{ url: string, options?: any }>,
    isAdmin?: boolean;
    fontFamily?: string[];
    onValidate?: (errors: boolean) => void;
    previewMode?: boolean;
    printAreaSize?: string
  },
  Partial<ScenaEditorState>
> {
  public state: ScenaEditorState = {
    selectedTargets: [],
    horizontalGuides: [],
    verticalGuides: [],
    zoom: 1,
    minZoom: 1,
    selectedMenu: "MoveTool",
    showGuides: false,
    width: 500,
    height: 500,
    loadedViewer: false,
    isShift: false,
    isScreenshot: false,
    isMobile: false
  };
  public historyManager = new HistoryManager(this);
  public console = new Debugger(this.props.debug);
  public eventBus = new EventBus();
  public memory = new Memory();
  public moveableData = new MoveableData(this.memory);
  public keyManager = new Shortcuts({
    capture: true,
    target: window,
    shouldHandleEvent(event) {
      return true; // Handle all possible events
    }
  })
  public clipboardManager = new ClipboardManager(this);
  public fontsManager = new FontsManager(this)

  public horizontalGuides = React.createRef<Guides>();
  public verticalGuides = React.createRef<Guides>();
  public infiniteViewer = React.createRef<InfiniteViewer>();
  public selecto = React.createRef<Selecto>();
  public menu = React.createRef<Menu>();
  public moveableManager = React.createRef<MoveableManager>();
  public viewport = React.createRef<Viewport>();
  public tabs = React.createRef<Tabs>();
  public editorElement = React.createRef<HTMLDivElement>();

  public render() {
    const {
      horizontalGuides,
      verticalGuides,
      infiniteViewer,
      moveableManager,
      viewport,
      menu,
      selecto,
      state
    } = this;

    const previewMode = this.props.previewMode;

    const { selectedMenu, selectedTargets, zoom, showGuides, width, height } = state;
    const horizontalSnapGuides = [
      0,
      height,
      height / 2,
      ...state.horizontalGuides
    ];
    const verticalSnapGuides = [0, width, width / 2, ...state.verticalGuides];
    let unit = 50;
    return (
      <div
        className={prefix("editor")}
        ref={this.editorElement}
      >
        <Menu ref={menu} editor={this} onSelect={this.onMenuChange} isPreviewMode={!!previewMode}>
          {
            showGuides && !previewMode &&
            <React.Fragment>
              <div
                className={prefix("reset")}
                onClick={(e) => {
                  infiniteViewer.current!.scrollCenter();
                }}
              ></div>
              <Guides
                ref={horizontalGuides}
                type="horizontal"
                className={prefix("guides", "horizontal")}
                snapThreshold={5}
                snaps={horizontalSnapGuides}
                displayDragPos={true}
                dragPosFormat={(v) => `${v}px`}
                zoom={zoom}
                unit={unit}
                onChangeGuides={(e) => {
                  this.setState({
                    horizontalGuides: e.guides
                  });
                }}
              ></Guides>
              <Guides
                ref={verticalGuides}
                type="vertical"
                className={prefix("guides", "vertical")}
                snapThreshold={5}
                snaps={verticalSnapGuides}
                displayDragPos={true}
                dragPosFormat={(v) => `${v}px`}
                zoom={zoom}
                unit={unit}
                onChangeGuides={(e) => {
                  this.setState({
                    verticalGuides: e.guides
                  });
                }}
              ></Guides>
            </React.Fragment>
          }
          <div className="scena-editor-container">
            {
              selectedMenu === "Text" && selectedTargets.length === 1
              &&
              <TextEditor
                element={this.viewport.current?.getInfoByElement(selectedTargets[0])!}
                memory={this.memory}
                editor={this}
              />
            }
            <InfiniteViewer
              ref={infiniteViewer}
              className={prefix("viewer")}
              pinchThreshold={5}
              wheelScale={0.001}
              zoom={zoom}
              zoomRange={[0, 4]}
              threshold={0}
              rangeX={[0, 0]}
              rangeY={[0, 0]}
              onDragStart={(e) => {
                const target = e.inputEvent.target;
                this.checkBlur();
                if (
                  target.nodeName === "A" ||
                  moveableManager
                    .current!.getMoveable()
                    .isMoveableElement(target) ||
                  selectedTargets.some((t) => t === target || t.contains(target))
                ) {
                  e.stop();
                }
              }}
              onDragEnd={(e) => {
                if (!e.isDrag) {
                  selecto.current!.clickTarget(e.inputEvent);
                }
              }}
              onAbortPinch={(e) => {
                selecto.current!.triggerDragStart(e.inputEvent);
              }}
              onPinch={(e)=>this.setZoom(e)}
            >
              <Viewport
                ref={viewport}
                onBlur={this.onBlur}
                style={{
                  width: `${width}px`,
                  height: `${height}px`,
                }}
                editor={this}
                background={this.props.backgroundImg}
              >
                {
                  !previewMode &&
                  <MoveableManager
                    ref={moveableManager}
                    selectedTargets={selectedTargets}
                    selectedMenu={selectedMenu}
                    verticalGuidelines={verticalSnapGuides}
                    horizontalGuidelines={horizontalSnapGuides}
                    editor={this}
                  ></MoveableManager>
                }
              </Viewport>
            </InfiniteViewer>
            {!previewMode &&
              <Selecto
                ref={selecto}
                hitRate={0}
                dragContainer={".scena-viewer"}
                rootContainer={infiniteViewer.current && infiniteViewer.current.getContainer()}
                container={infiniteViewer.current && infiniteViewer.current.getContainer()}
                selectableTargets={selectedMenu === "MoveTool" ? [`.scena-viewport [${DATA_SCENA_ELEMENT_ID}].selectable`] : []}
                selectByClick={true}
                selectFromInside={false}
                toggleContinueSelect={["shift"]}
                preventDefault={true}
                scrollOptions={
                  infiniteViewer.current
                    ? {
                      container: infiniteViewer.current.getContainer(),
                      threshold: 30,
                      throttleTime: 30,
                      getScrollPosition: () => {
                        const current = infiniteViewer.current!;
                        return [current.getScrollLeft(), current.getScrollTop()];
                      }
                    }
                    : undefined
                }
                onDragStart={(e) => {
                  const inputEvent = e.inputEvent;
                  const target = inputEvent.target;
                  this.checkBlur();
                  if (selectedMenu === "Text") {
                    e.stop()
                  }
                  if (
                    moveableManager
                      .current!.getMoveable()
                      .isMoveableElement(target) ||
                    state.selectedTargets.some(
                      (t) => t === target || t.contains(target)
                    )
                  ) {
                    e.stop();
                  }
                }}
                onScroll={({ direction }) => {
                  infiniteViewer.current!.scrollBy(
                    direction[0] * 10,
                    direction[1] * 10
                  );
                }}
                onSelectEnd={({ isDragStart, selected, inputEvent, rect }) => {
                  if (isDragStart) {
                    inputEvent.preventDefault();
                  }
                  if (this.selectEndMaker(rect)) {
                    return;
                  }
                  this.setSelectedTargets(selected).then(() => {
                    if (!isDragStart) {
                      return;
                    }
                    moveableManager.current!.getMoveable().dragStart(inputEvent);
                  });
                }}
              ></Selecto>
            }
          </div>
        </Menu>
      </div>
    );
  }
  public componentDidMount() {
    const { infiniteViewer, memory, eventBus } = this;
    memory.set("background-color", "#4af");
    memory.set("color", "#fff");
    memory.set("border-color", "#000");


    requestAnimationFrame(() => {
      infiniteViewer.current!.scrollCenter();
    });
    window.addEventListener("resize", this.onResize);
    this.onResize()
    const viewport = this.getViewport();

    eventBus.on("blur", () => {
      this.menu.current!.blur();
      /* this.tabs.current!.blur(); */
    });
    eventBus.on("selectLayers", (e: any) => {
      const selected = e.selected as string[];

      this.setSelectedTargets(
        selected.map((key) => viewport.getInfo(key)!.el!)
      );
    });
    eventBus.on("update", () => {
      this.forceUpdate();
    });

    this.keyManager.add([
      {
        shortcut: "Left",
        handler: (e) => {
          this.move(-1, 0);
          e && e.preventDefault();
        }
      },
      {
        shortcut: "Up",
        handler: (e) => {
          this.move(0, -1);
          e && e.preventDefault();
        }
      },
      {
        shortcut: "Right",
        handler: (e) => {
          this.move(1, 0);
          e && e.preventDefault();
        }
      },
      {
        shortcut: "Down",
        handler: (e) => {
          this.move(0, 1);
          e && e.preventDefault();
        }
      },
      {
        shortcut: "Backspace",
        handler: () => {
          this.removeElements(this.getSelectedTargets());
        }
      },
      {
        shortcut: "CmdOrCtrl+x",
        handler: () => { }
      },
      {
        shortcut: "CmdOrCtrl+c",
        handler: () => { }
      },
      {
        shortcut: "CmdOrCtrl+v",
        handler: () => { }
      },
      {
        shortcut: "CmdOrCtrl+z",
        handler: () => {
          this.historyManager.undo();
        }
      },
      {
        shortcut: "CmdOrCtrl+Shift+z",
        handler: () => {
          this.historyManager.redo();
        }
      },
      {
        shortcut: "CmdOrCtrl+a",
        handler: (e) => {
          this.setSelectedTargets(
            this.getViewportInfos().map((info) => info.el!)
          );
          e && e.preventDefault();
        }
      }
    ])
    this.keyManager.start();

    document.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        this.setState({ isShift: true })
      }
    })
    document.addEventListener("keyup", (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        this.setState({ isShift: false })
      }
    })
    // this.keyManager.keydown(
    //   [isMacintosh ? "meta" : "ctrl", "alt", "g"],
    //   (e) => {
    //     e.inputEvent.preventDefault();
    //     this.moveInside();
    //   }
    // );
    // this.keyManager.keydown(
    //   [isMacintosh ? "meta" : "ctrl", "shift", "alt", "g"],
    //   (e) => {
    //     e.inputEvent.preventDefault();
    //     this.moveOutside();
    //   }
    // );
    this.historyManager.registerType(
      "createElements",
      undoCreateElements,
      restoreElements
    );
    this.historyManager.registerType(
      "removeElements",
      restoreElements,
      undoCreateElements
    );

    this.historyManager.registerType(
      "changeText",
      undoChangeText,
      redoChangeText
    );
    this.historyManager.registerType("move", undoMove, redoMove);

    if (this.props.initialJSX && this.props.initialJSX.length > 0) {
      let initialJSX = this.props.initialJSX
        .filter(jsx => this.props.previewMode ? jsx.name !== "(PrintArea)" : true)
        .map(jsx => {
          if (jsx.name === "(PrintArea)") {
            if (!jsx.attrs) {
              jsx.attrs = {}
            }
            const newFrame = Object.entries(jsx.frame as any).map(([key, value]) => {
              return [key.replace(/border/g, "outline"), value]
            })
            jsx.frame = Object.fromEntries(newFrame)
          }
          return jsx
        })
      this.appendJSXs(initialJSX, true)
    }

    if (!this.state.loadedViewer) {
      this.forceUpdate()
    }
  }
  public componentDidUpdate() {
    const { selectedMenu, selectedTargets, } = this.state;
    if (selectedMenu === "Text" && selectedTargets.length === 1) {
      this.keyManager.stop()
    } else {
      this.keyManager.start()
    }
  }
  public componentWillUnmount() {
    this.eventBus.off();
    this.memory.clear();
    this.moveableData.clear();
    this.keyManager.stop();
    this.keyManager.reset();
    this.clipboardManager.destroy();
    window.removeEventListener("resize", this.onResize);
    document.removeEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        this.setState({ isShift: true })
      }
    })
    document.removeEventListener("keyup", (e: KeyboardEvent) => {
      if (e.key === "Shift") {
        this.setState({ isShift: false })
      }
    })

  }

  public promiseState(state: Partial<ScenaEditorState>) {
    return new Promise((resolve) => {
      this.setState(state, () => {
        resolve("");
      });
    });
  }
  public getSelectedTargets() {
    return this.state.selectedTargets;
  }
  public setSelectedTargets(
    targets: Array<HTMLElement | SVGElement>,
    isRestore?: boolean
  ) {
    this.console.log("set selected target")
    targets = targets.filter((target) => {
      return targets.every((parnetTarget) => {
        return parnetTarget === target || !parnetTarget.contains(target);
      });
    });
    return this.promiseState({
      selectedTargets: targets
    }).then(() => {
      this.selecto.current!.setSelectedTargets(targets);
      this.moveableData.setSelectedTargets(targets);
      this.eventBus.trigger("setSelectedTargets");
      this.menu.current?.forceUpdate()
      return targets;
    });
  }
  public appendJSX(info: ElementInfo, isRestore?: boolean) {
    return this.appendJSXs([info], isRestore).then((targets) => targets[0]);
  }

  public appendJSXs(
    jsxs: ElementInfo[],
    isRestore?: boolean,
    isNewText?: boolean
  ): Promise<Array<HTMLElement | SVGElement>> {
    const viewport = this.getViewport();
    const indexesList = viewport.getSortedIndexesList(
      this.getSelectedTargets()
    );
    const indexesListLength = indexesList.length;
    let appendIndex = -1;
    let scopeId: string = "";

    if (!isRestore && indexesListLength) {
      const indexes = indexesList[indexesListLength - 1];

      const info = viewport.getInfoByIndexes(indexes);

      scopeId = info.scopeId!;
      appendIndex = indexes[indexes.length - 1] + 1;
    }

    return this.getViewport()
      .appendJSXs(jsxs, appendIndex, scopeId)
      .then(({ added }) => {
        const areTexts = added.filter(e => e.name === "(Text)")
        if (areTexts.length) {
          const fonts = unionBy(areTexts.map(e => {
            if (e.frame && e.frame["font-family"]) {
              return e.frame["font-family"] as string;
            }
            return "";
          })).filter(e => e)
          this.fontsManager.loadFonts(fonts)
        }
        return this.appendComplete(added, isNewText ? false : isRestore);
      });
  }
  public appendComplete(infos: ElementInfo[], isRestore?: boolean) {
    if (!isRestore) {
      this.historyManager.addAction("createElements", {
        infos,
        prevSelected: getIds(this.getSelectedTargets())
      });
      this.menu.current?.select("MoveTool")
    }
    const data = this.moveableData;
    const targets = infos
      .map(function registerFrame(info) {
        data.createFrame(info.el!, info.frame);
        data.render(info.el!);

        info.children!.forEach(registerFrame);
        return info.el!;
      })
      .filter((el) => el);

    return Promise.all(targets.map((target) => checkImageLoaded(target))).then(
      () => {
        return targets;
      }
    );
  }
  public setZoom(e: { zoom: number }) {
    const minZoom = this?.state?.minZoom || 1;
    const zoom = e.zoom >= minZoom ? e.zoom : minZoom
    this.setState({
      zoom
    });
  }
  public removeByIds(ids: string[], isRestore?: boolean) {
    return this.removeElements(this.getViewport().getElements(ids), isRestore);
  }
  public getMoveable() {
    return this.moveableManager.current!.getMoveable();
  }
  public removeFrames(targets: Array<HTMLElement | SVGElement>) {
    const frameMap: IObject<any> = {};
    const moveableData = this.moveableData;
    const viewport = this.getViewport();

    targets.forEach(function removeFrame(target) {
      const info = viewport.getInfoByElement(target)!;
      if (info && info.attrs && info.attrs.class as string === "moveable") {
        console.log("deleting " + info)
        frameMap[info.id!] = moveableData.getFrame(target).get();
        moveableData.removeFrame(target);
        info.children!.forEach((childInfo) => {
          removeFrame(childInfo.el!);
        });
      }
    });

    return frameMap;
  }
  public restoreFrames(infos: ElementInfo[], frameMap: IObject<any>) {
    const viewport = this.getViewport();
    const moveableData = this.moveableData;

    infos.forEach(function registerFrame(info) {
      info.frame = frameMap[info.id!];
      delete frameMap[info.id!];

      info.children!.forEach(registerFrame);
    });
    for (const id in frameMap) {
      moveableData.createFrame(viewport.getInfo(id).el!, frameMap[id]);
    }
  }
  public removeElements(
    targets: Array<HTMLElement | SVGElement>,
    isRestore?: boolean
  ) {
    const viewport = this.getViewport();
    const frameMap = this.removeFrames(targets);
    const indexesList = viewport.getSortedIndexesList(targets);
    const indexesListLength = indexesList.length;
    let scopeId = "";
    let selectedInfo: ElementInfo | null = null;

    if (indexesListLength) {
      const lastInfo = viewport.getInfoByIndexes(
        indexesList[indexesListLength - 1]
      );
      const nextInfo = viewport.getNextInfo(lastInfo.id!);
      if (nextInfo) {
        scopeId = lastInfo.scopeId!;
        selectedInfo = nextInfo;
      }
    }
    // return;
    return viewport.removeTargets(targets).then(({ removed }) => {
      let selectedTarget =
        selectedInfo ||
        viewport.getLastChildInfo(scopeId)! ||
        viewport.getInfo(scopeId);

      this.setSelectedTargets(
        selectedTarget && selectedTarget.el ? [selectedTarget.el!] : [],
        true
      );

      this.console.log("removeTargets", removed);
      !isRestore &&
        this.historyManager.addAction("removeElements", {
          infos: removed.map(function removeTarget(
            info: ElementInfo
          ): ElementInfo {
            return {
              ...info,
              children: info.children!.map(removeTarget),
              frame: frameMap[info.id!] || info.frame
            };
          })
        });
      return targets;
    });
  }
  public setProperty(scope: string[], value: any, isUpdate?: boolean) {
    const infos = this.moveableData.setProperty(scope, value);

    if (isUpdate) {
      this.moveableManager.current!.updateRect();
    }
    this.eventBus.requestTrigger("render");

    const targets = this.getSelectedTargets()
    if (targets.length && this.moveableManager.current) {
      targets.forEach(target => this.moveableManager.current!.updateRender(target))
    }
    this.historyManager.addAction("renders", { infos });
  }
  public setOrders(scope: string[], orders: NameType[], isUpdate?: boolean) {
    const infos = this.moveableData.setOrders(scope, orders);

    this.historyManager.addAction("renders", { infos });

    if (isUpdate) {
      this.moveableManager.current!.updateRect();
    }
    this.eventBus.requestTrigger("render");
  }
  public selectMenu(menu: string) {
    this.menu.current!.select(menu);
  }
  public loadDatas(datas: SavedScenaData[]) {
    const viewport = this.getViewport();
    return this.appendJSXs(
      datas
        .map(function loadData(data): any {
          const { componentId, jsxId, children } = data;

          let jsx!: ScenaJSXElement;

          if (jsxId) {
            jsx = viewport.getJSX(jsxId);
          }
          if (!jsx && componentId) {
            const Component = viewport.getComponent(componentId);

            jsx = <Component />;
          }
          if (!jsx) {
            jsx = React.createElement(data.tagName);
          }
          return {
            ...data,
            children: children.map(loadData),
            jsx
          };
        })
        .filter((info) => info) as ElementInfo[]
    );
  }
  public saveTargets(
    targets: Array<HTMLElement | SVGElement>
  ): SavedScenaData[] {
    const viewport = this.getViewport();
    const moveableData = this.moveableData;
    this.console.log("save targets", targets);
    return targets
      .map((target) => viewport.getInfoByElement(target))
      .map(function saveTarget(info): SavedScenaData {
        const target = info.el!;
        const isText = info.attrs!.isText;

        return {
          name: info.name,
          attrs: getScenaAttrs(target),
          jsxId: info.jsxId || "",
          componentId: info.componentId!,
          innerHTML: isText ? "" : target.innerHTML,
          innerText: isText ? (target as HTMLElement).innerText : "",
          tagName: target.tagName.toLowerCase(),
          frame: moveableData.getFrame(target).get(),
          children: info.children!.map(saveTarget)
        };
      });
  }
  public getViewport() {
    return this.viewport.current!;
  }
  public getViewportInfos() {
    return this.getViewport().getViewportInfos();
  }
  public appendBlob(blob: Blob) {
    const url = URL.createObjectURL(blob);

    return this.appendJSX({
      jsx: <img src={url} alt="appended blob" />,
      name: "(Image)"
    });
  }
  public moves(movedInfos: MovedInfo[], isRestore?: boolean) {
    const frameMap = this.removeFrames(movedInfos.map(({ info }) => info.el!));

    return this.getViewport()
      .moves(movedInfos)
      .then((result) => this.moveComplete(result, frameMap, isRestore));
  }

  public onMenuChange = (id: string) => {
    this.setState({
      selectedMenu: id
    });
  };
  public selectEndMaker(rect: Rect, extraProps?: any, icon?: typeof Icon, isNewText?: boolean) {
    const infiniteViewer = this.infiniteViewer.current!;
    const selectIcon = icon || this.menu.current!.getSelected();
    const width = rect.width;
    const height = rect.height;
    if (!selectIcon || !selectIcon.maker || !width || !height) {
      return false;
    }
    const maker = selectIcon.maker(this.memory);
    const viwerPosition = infiniteViewer.getContainer().getBoundingClientRect()
    const scrollTop = viwerPosition.y
    const scrollLeft = viwerPosition.x
    const top = rect.top - scrollTop;
    const left = rect.left - scrollLeft;
    this.console.log(top, left, viwerPosition)
    const style = {
      top: `${top}px`,
      left: `${left}px`,
      position: "absolute",
      width: `${width}px`,
      height: `${height}px`,
      ...maker.style
    } as any;
    this.appendJSX({
      jsx: maker.tag,
      attrs: maker.attrs,
      name: `(${selectIcon.id})`,
      frame: style,
      ...("Text" === selectIcon.id && { colors: [style.color] }),
      ...(extraProps && { ...extraProps })
    }, isNewText).then((el) => {
      selectIcon.makeThen(el, selectIcon.id as string, this.menu.current!)
      this.menu.current?.forceUpdate()
      if (selectIcon.id === "Text") {
        this.setSelectedTargets([el])
        this.menu.current?.select("Text")
      }
    });
    return true;
  }
  private move(deltaX: number, deltaY: number) {
    this.getMoveable().request("draggable", { deltaX, deltaY }, true);
  }
  private checkBlur() {
    const activeElement = document.activeElement;
    if (activeElement) {
      (activeElement as HTMLElement).blur();
    }
    const selection = document.getSelection()!;

    if (selection) {
      selection.removeAllRanges();
    }
    this.eventBus.trigger("blur");
  }
  public onResize = () => {
    const width = window.innerWidth
    if (width > 768) {
      this.setState({ isMobile: false });
    } else {
      this.setState({ isMobile: true });
    }

    if (this.horizontalGuides.current && this.verticalGuides.current) {
      this.horizontalGuides.current!.resize();
      this.verticalGuides.current!.resize();
    }
    if (this.editorElement.current && this.infiniteViewer.current) {
      const width = this.editorElement.current.clientWidth;
      const viewer = this.infiniteViewer.current.getElement();
      if (width < 500) {
        const newZoom = width / 500;
        viewer.style.width = `${500 * newZoom}px`;
        viewer.style.height = `${500 * newZoom}px`;
        this.setState({ minZoom: newZoom, zoom: newZoom });
      } else {
        viewer.style.width = `${500}px`;
        viewer.style.height = `${500}px`;
        this.setState({ minZoom: 1, zoom: 1 })
      }
    }
  };
  private onBlur = (e: any) => {
    const target = e.target as HTMLElement | SVGElement;
    //this.resetToolbar()


    if (!checkInput(target)) {
      return;
    }
    const parentTarget = getParnetScenaElement(target);

    if (!parentTarget) {
      return;
    }
  };
  public resetToolbar() {
    this.menu.current?.select("MoveTool")
  }
  private moveInside() {
    let targets = this.getSelectedTargets();

    const length = targets.length;
    if (length !== 1) {
      return;
    }
    targets = [targets[0]];

    const viewport = this.getViewport();
    const frameMap = this.removeFrames(targets);

    return viewport
      .moveInside(targets[0])
      .then((result) => this.moveComplete(result, frameMap));
  }
  private moveOutside() {
    let targets = this.getSelectedTargets();

    const length = targets.length;
    if (length !== 1) {
      return;
    }
    targets = [targets[0]];

    const frameMap = this.removeFrames(targets);
    this.getViewport()
      .moveOutside(targets[0])
      .then((result) => this.moveComplete(result, frameMap));
  }
  private moveComplete(
    result: MovedResult,
    frameMap: IObject<any>,
    isRestore?: boolean
  ) {
    this.console.log("Move", result);

    const { moved, prevInfos, nextInfos } = result;
    this.restoreFrames(moved, frameMap);

    if (moved.length) {
      if (!isRestore) {
        this.historyManager.addAction("move", {
          prevInfos,
          nextInfos
        });
      }
      // move complete
      this.appendComplete(moved, true);
    }

    return result;
  }
  public saveEditor() {
    const elements = this.getViewport().getViewportInfos()
    let stringElements = JSON.stringify(elements, (key, value) => {
      if (key.includes('__reactInternalInstance') || key.includes('__reactFiber') || value instanceof HTMLDivElement) {
        return undefined;
      }
      return value;
    });
    const parsedElements = JSON.parse(stringElements) as ElementInfo[]
    return parsedElements.map(e => {
      delete e.el
      if (e.name === "(PrintArea)" && e.attrs && e.attrs.class) {
        delete e.attrs.class
      }
      return e
    })
  }
  public async addImage(file: File | undefined) {
    const upload = this.props.onUploadImage;
    if (this.state.selectedMenu !== "Image") {
      this.menu.current?.select("Image")
    }
    if (upload && file) {
      const image = await upload(file)
      const imageLoad = new Image();
      this.memory.set("imageUrl", image.url)

      imageLoad.onload = () => {
        let width = imageLoad.width;
        let height = imageLoad.height
        const MAX_SIZE = 150;
        if (width >= height) {
          height = (MAX_SIZE / width) * height;
          width = MAX_SIZE;
        } else {
          width = (MAX_SIZE / height) * width;
          height = MAX_SIZE;
        }
        const bounds = this.infiniteViewer.current!.getContainer().getBoundingClientRect();
        this.selectEndMaker({
          top: bounds.y + 250 - (height / 2),
          left: bounds.x + 250 - (width / 2),
          bottom: 0,
          right: 0,
          width,
          height
        }, {
          url: image.url,
          ...(image.options)
        })
      };

      imageLoad.src = image.url;
    }
  }

  public async getScreenshot(fileName: string) {
    return new Promise<Blob>((resolve) => {
      const zoom = this.state.zoom
      this.setState({ isScreenshot: true, zoom: 1 }, async () => {
        const viewer = document.getElementById("scene-viewport")!;

        resolve(await domtoimage.toBlob(viewer, { cacheBust: true, quality: 100 }));
        this.setState({ isScreenshot: false, zoom })
      })
    })
  }
  public async getDesignSize() {
    // Se selecciona todo el diseño del usuario para posteriormente sacar la medida en pixeles
    const viewport = this.getViewport()
    const elements = viewport.getViewportInfos()
    const elementsId = elements.filter(e => e.name !== "(PrintArea)").map(e => e.id!)
    const elementsNodes = viewport.getElements(elementsId);
    await this.setSelectedTargets(elementsNodes)

    //Se obtiene la medida en pixeles del diseño final del usuario
    const selectedArea = document.getElementsByClassName("moveable-area")
    if (selectedArea.length > 0) {
      const design = selectedArea[0];
      const bound = design.getBoundingClientRect()
      await this.setSelectedTargets([])
      return {
        width: bound.width,
        height: bound.height
      }
    }
    await this.setSelectedTargets([])
    return undefined;
  }

  public getSelectableTargets() {
    const viewport = this.getViewport()
    const elements = viewport.getViewportInfos()
    const selectables = elements.filter(e => e.name !== "(PrintArea)")
    return selectables
  }

  public getColorList() {
    const targets = this.getSelectableTargets();
    const colors = targets.map(t => t.colors || []).flat().filter((element, index, self) => {
      return self.indexOf(element) === index;
    })
    return colors
  }
}
