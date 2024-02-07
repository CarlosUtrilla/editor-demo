import * as React from "react";
import Moveable, { Able, MoveableManagerInterface, Renderer } from "react-moveable";
import { connectEditorProps, getId } from "../utils/utils";
import Editor from "../Editor";
import { EditorInterface } from "../types";
import { IObject } from "@daybrush/utils";
import { diff } from "@egjs/list-differ";

function restoreRender(id: string, state: IObject<any>, prevState: IObject<any>, orders: any, editor: Editor) {
    const el = editor.viewport.current!.getElement(id);

    if (!el) {
        console.error("No Element");
        return false;
    }
    const moveableData = editor.moveableData;
    const frame = moveableData.getFrame(el);;

    frame.clear();
    frame.set(state);
    frame.setOrderObject(orders);

    const result = diff(Object.keys(prevState), Object.keys(state));
    const { removed, prevList } = result;

    removed.forEach(index => {
        el.style.removeProperty(prevList[index]);
    });
    moveableData.render(el);
    return true;
}
function undoRender({ id, prev, next, prevOrders }: IObject<any>, editor: Editor) {
    if (!restoreRender(id, prev, next, prevOrders, editor)) {
        return;
    }
    editor.moveableManager.current!.updateRect();
    editor.eventBus.trigger("render");
}
function redoRender({ id, prev, next, nextOrders }: IObject<any>, editor: Editor) {
    if (!restoreRender(id, next, prev, nextOrders, editor)) {
        return;
    }
    editor.moveableManager.current!.updateRect();
    editor.eventBus.trigger("render");
}
function undoRenders({ infos }: IObject<any>, editor: Editor) {
    infos.forEach(({ id, prev, next, prevOrders }: IObject<any>) => {
        restoreRender(id, prev, next, prevOrders, editor);
    });
    editor.moveableManager.current!.updateRect();
    editor.eventBus.trigger("render");
}
function redoRenders({ infos }: IObject<any>, editor: Editor) {
    infos.forEach(({ id, next, prev, nextOrders }: IObject<any>) => {
        restoreRender(id, next, prev, nextOrders, editor);
    });
    editor.moveableManager.current!.updateRect();
    editor.eventBus.trigger("render");
}

export interface DimensionViewableProps {
    dimensionViewable?: boolean;
}
const DimensionViewable = (editor: Editor): Able =>  ({
    name: "dimensionViewable",
    props: [
       "dimensionViewable"
    ],
    render(moveable: MoveableManagerInterface) {
        const { left, top } = moveable.state;

        const rect = moveable.getRect();
        let transform = "translate(-50%)"

        const zoom = editor.state.zoom;
        if (zoom > 1) {
            transform += `scale(${1/zoom})`
        }

        return <div key={"dimension-viewer"} className={"moveable-dimension"} style={{
            left: `${rect.left + rect.width / 2 - left}px`,
            top: `${rect.top + rect.height + 20 - top}px`,
            transform
        }}>
            {Math.round(rect.offsetWidth)} x {Math.round(rect.offsetHeight)}
        </div>
    }
})

@connectEditorProps
export default class MoveableManager extends React.PureComponent<{
    editor: Editor,
    selectedTargets: Array<HTMLElement | SVGElement>;
    selectedMenu: string,
    verticalGuidelines: number[],
    horizontalGuidelines: number[],
}> {
    public moveable = React.createRef<Moveable>();
    public getMoveable() {
        return this.moveable.current!;
    }
    public render() {
        const {
            editor,
            verticalGuidelines,
            horizontalGuidelines,
            selectedTargets,
            selectedMenu,
        } = this.props;
        // const

        if (!selectedTargets.length) {
            return this.renderViewportMoveable();
        }
        const {
            moveableData,
            eventBus,
            selecto,
        } = editor;
        const { zoom } = editor.state
        const elementGuidelines = [...moveableData.getTargets()].filter(el => {
            return selectedTargets.indexOf(el) === -1;
        });
        const isShift = editor.state.isShift;
        const isAdmin = editor.props.isAdmin;
        const targetIsImage = selectedTargets.every(el => el.tagName === 'IMG');
        const targetIsText = selectedTargets.some(el => el.className.includes('Text'));
        const keepRatio = targetIsText ||
            (targetIsImage && !isShift) ||
            (!targetIsImage && isShift) ||
            selectedTargets.length > 1
        return <Moveable<DimensionViewableProps>
            ables={[DimensionViewable(editor)]}
            ref={this.moveable}
            targets={selectedTargets}
            dimensionViewable={true}
            draggable={true}
            resizable={!targetIsText}
            throttleResize={1}
            clippable={selectedMenu === "Crop"}
            dragArea={selectedTargets.length > 1 || selectedMenu !== "Text"}
            throttleDragRotate={isShift ? 45 : 0}
            keepRatio={keepRatio}
            rotatable={true}
            snappable={true}
            snapGap={false}
            zoom={1/zoom}
            snapDirections={{
                bottom: true,
                top: true,
                left: true,
                right: true,
                center: true,
                middle: true,
            }}
            elementSnapDirections={{
                bottom: true,
                top: true,
                left: true,
                right: true,
                center: true,
                middle: true,
            }}
            origin={false}
            verticalGuidelines={isAdmin ? verticalGuidelines: []}
            horizontalGuidelines={isAdmin ? horizontalGuidelines: []}
            elementGuidelines={elementGuidelines}
            clipArea={true}
            bounds={{"left":0,"top":0,"right":0,"bottom":0,"position":"css"}}
            snapThreshold={3}

            onBeforeRenderStart={moveableData.onBeforeRenderStart}
            onBeforeRenderGroupStart={moveableData.onBeforeRenderGroupStart}
            onDragStart={moveableData.onDragStart}
            onDrag={moveableData.onDrag}
            onDragGroupStart={moveableData.onDragGroupStart}
            onDragGroup={moveableData.onDragGroup}

            onScaleStart={moveableData.onScaleStart}
            onScale={moveableData.onScale}
            onScaleGroupStart={moveableData.onScaleGroupStart}
            onScaleGroup={moveableData.onScaleGroup}

            onResizeStart={moveableData.onResizeStart}
            onResize={(e) => {
                moveableData.onResize(e)
                this.rescaleHandleResizers()
            }}
            onResizeGroupStart={moveableData.onResizeGroupStart}
            onResizeGroup={moveableData.onResizeGroup}

            onRotateStart={moveableData.onRotateStart}
            onRotate={(e) => {
                moveableData.onRotate(e)
                this.rescaleHandleResizers()
            }}
            onRotateGroupStart={moveableData.onRotateGroupStart}
            onRotateGroup={moveableData.onRotateGroup}


            onDragOriginStart={moveableData.onDragOriginStart}
            onDragOrigin={e => {
                moveableData.onDragOrigin(e);
            }}

            onRound={moveableData.onRound}

            onClick={e => {
                const target = e.inputTarget as any;
                if (e.isDouble && target.getAttribute("istext")) {
                    editor.selectMenu("Text");
                    const info = this.editor.viewport.current?.getInfoByElement(target)
                    if (info && info.frame) {
                        this.loadTextStylesOnMemory(info.frame)
                    }
                }
            }}
            onClickGroup={e => {
                selecto.current!.clickTarget(e.inputEvent, e.inputTarget);
            }}
            onRenderStart={e => {
                e.datas.prevData = moveableData.getFrame(e.target).get();
            }}
            onRender={async(e) => {
                e.datas.isRender = true;
                eventBus.requestTrigger("render");
                this.updateRender(e.target)
            }}
            onRenderEnd={async (e) => {
                eventBus.requestTrigger("render");

                if (!e.datas.isRender) {
                    return;
                }
                this.historyManager.addAction("render", {
                    id:getId(e.target),
                    prev: e.datas.prevData,
                    next: moveableData.getFrame(e.target).get(),
                });
                this.updateRender(e.target)
            }}
            onRenderGroupStart={e => {
                e.datas.prevDatas = e.targets.map(target => moveableData.getFrame(target).get());
            }}
            onRenderGroup={e => {
                eventBus.requestTrigger("renderGroup", e);
                e.datas.isRender = true;
            }}
            onRenderGroupEnd={e => {
                eventBus.requestTrigger("renderGroup", e);

                if (!e.datas.isRender) {
                    return;
                }
                const prevDatas = e.datas.prevDatas;
                const infos = e.targets.map((target, i) => {
                    return {
                        id: getId(target),
                        prev: prevDatas[i],
                        next: moveableData.getFrame(target).get(),
                    }
                });
                this.historyManager.addAction("renders", {
                    infos,
                });
            }}
        ></Moveable>
    }
    public renderViewportMoveable() {
        const viewport = this.editor.getViewport();
        const target = viewport ? viewport.viewportRef.current! : null;

        return <Moveable
            ref={this.moveable}
            rotatable={false}
            target={target}
            origin={false}
        ></Moveable>
    }
    public componentDidMount() {
        this.historyManager.registerType("render", undoRender, redoRender);
        this.historyManager.registerType("renders", undoRenders, redoRenders);
    }
    public updateRect() {
        this.getMoveable().updateRect();
    }
    public async updateRender(e: HTMLElement | SVGElement) {
        const { moveableData} = this.editor
        const viewport = this.editor.getViewport()
        const element = viewport.getInfoByElement(e)
        // update the element adding transform css
        element.frame = moveableData.getFrame(e).get()
        this.console.log("updateRender")
        await viewport.appendJSXs([element], -1)
        this.editor.forceUpdate()
    }
    public loadTextStylesOnMemory(styles: IObject<any>) {
        const memory = this.editor.memory
        Object.entries(styles).forEach(([key, value]) => {
            memory.set(key, value)
        })
    }
    public rescaleHandleResizers() {
        /* // Redimenciona los puntos para rezice dependiendo del zoom
        const moveableControls = document.querySelectorAll<HTMLDivElement>(".moveable-control")
        if (moveableControls.length > 0) {
            const { zoom } = this.editor.state
            const scale = 1 / zoom;
            moveableControls.forEach((e) => {
                const oldTransform = e.style.transform;
                if (oldTransform && oldTransform.includes("scale")) {
                    e.style.transform = oldTransform.replace(/scale\((.+)\)/, `scale(${scale})`)
                } else {
                    e.style.transform = (oldTransform || "") + ` scale(${scale})`
                }
            })
        } */
    }
}
export default interface MoveableManager extends EditorInterface { }
