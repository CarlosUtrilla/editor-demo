import * as Moveable from 'react-moveable';
import Moveable__default from 'react-moveable';
import * as React from 'react';
import InfiniteViewer from 'react-infinite-viewer';
import Guides from '@scena/react-guides';
import Selecto, { Rect } from 'react-selecto';
import { IObject } from '@daybrush/utils';
import Component from '@egjs/component';
import MoveableHelper from 'moveable-helper';
import { Frame, NameType } from 'scenejs';
import Shortcuts from 'shortcuts';

declare class Memory {
    map: Map<any, any>;
    get(key: any): any;
    set(key: any, value: any): Map<any, any>;
    clear(): void;
}

declare class EventBus extends Component {
    private eventMap;
    requestTrigger(name: string, params?: IObject<any>): void;
}

declare class MoveableData extends MoveableHelper {
    private memory;
    selectedTargets: Array<HTMLElement | SVGElement>;
    constructor(memory: Memory);
    setSelectedTargets(targets: Array<HTMLElement | SVGElement>): void;
    getSelectedTargets(): (HTMLElement | SVGElement)[];
    getSelectedFrames(): Frame[];
    renderFrames(): void;
    setOrders(scope: string[], orders: NameType[]): {
        id: string;
        prev: any;
        prevOrders: Record<string, (string | number)[]>;
        next: any;
        nextOrders: Record<string, (string | number)[]>;
    }[];
    setProperty(names: string[], value: any): {
        id: string;
        prev: any;
        prevOrders: Record<string, (string | number)[]>;
        next: any;
        nextOrders: Record<string, (string | number)[]>;
    }[];
    removeProperties(...names: string[]): {
        id: string;
        prev: any;
        prevOrders: Record<string, (string | number)[]>;
        next: any;
        nextOrders: Record<string, (string | number)[]>;
    }[];
    getProperties(properties: string[][], defaultValues: any[]): any[];
    private setValue;
}

declare class MoveableManager extends React.PureComponent<{
    editor: Editor;
    selectedTargets: Array<HTMLElement | SVGElement>;
    selectedMenu: string;
    verticalGuidelines: number[];
    horizontalGuidelines: number[];
}> {
    moveable: React.RefObject<Moveable__default<{}>>;
    getMoveable(): Moveable__default<{}>;
    render(): React.JSX.Element;
    renderViewportMoveable(): React.JSX.Element;
    componentDidMount(): void;
    updateRect(): void;
    updateRender(e: HTMLElement | SVGElement): Promise<void>;
    loadTextStylesOnMemory(styles: IObject<any>): void;
}
interface MoveableManager extends EditorInterface {
}

type RestoreCallback = (props: any, editor: Editor) => any;
declare class HistoryManager {
    private editor;
    private undoStack;
    private redoStack;
    private types;
    constructor(editor: Editor);
    registerType(type: string, undo: RestoreCallback, redo: RestoreCallback): void;
    addAction(type: string, props: IObject<any>): void;
    undo(): void;
    redo(): void;
    private propageChanges;
}

declare class Debugger {
    private isDebug?;
    constructor(isDebug?: boolean | undefined);
    log(...args: any[]): void;
}

interface ScenaEditorState {
    selectedTargets: Array<SVGElement | HTMLElement>;
    horizontalGuides: number[];
    verticalGuides: number[];
    selectedMenu: string;
    zoom: number;
    minZoom: number;
    showGuides: boolean;
    width: number;
    height: number;
    loadedViewer: boolean;
    isShift: boolean;
    isScreenshot: boolean;
}
interface EditorInterface {
    editor: Editor;
    memory: Memory;
    eventBus: EventBus;
    moveableData: MoveableData;
    keyManager: Shortcuts;
    historyManager: HistoryManager;
    console: Debugger;
    moveableManager: React.RefObject<MoveableManager>;
}
interface SavedScenaData {
    name: string;
    jsxId: string;
    componentId: string;
    tagName: string;
    innerHTML?: string;
    innerText?: string;
    attrs: IObject<any>;
    frame: IObject<any>;
    children: SavedScenaData[];
}
interface ScenaProps {
    scenaElementId?: string;
    scenaAttrs?: IObject<any>;
    scenaText?: string;
    scneaHTML?: string;
}
type ScenaFunctionComponent<T> = ((props: T & ScenaProps) => React.ReactElement<any, any>) & {
    scenaComponentId: string;
};
type ScenaComponent = React.JSXElementConstructor<ScenaProps> & {
    scenaComponentId: string;
};
type ScenaJSXElement = React.ReactElement<any, string> | ScenaFunctionJSXElement;
type ScenaFunctionJSXElement = React.ReactElement<any, ScenaComponent>;
type ScenaJSXType = ScenaJSXElement | string | ScenaComponent;

interface Maker {
    tag: string;
    attrs: IObject<any>;
    style: IObject<any>;
}
declare abstract class Icon extends React.PureComponent<{
    editor: Editor;
    selected?: boolean;
    onSelect?: (id: string) => any;
    selectedId?: string;
}> {
    static id: string | string[];
    static maker?: (memory: Memory) => Maker;
    static makeThen: (target: HTMLElement | SVGElement, id: string, menu: Menu) => any;
    static width: number;
    keys: string[];
    abstract renderIcon(): any;
    private subContainer;
    state: {
        selected: boolean;
    };
    render(): React.JSX.Element;
    renderSubContainer(): (false | React.JSX.Element | undefined)[] | undefined;
    renderSubIcons(): any[];
    renderSubIcon(IconClass: typeof Icon, id: string, isSelect: boolean): React.JSX.Element;
    onClick: () => void;
    onSubClick: (e: any) => void;
    focusSub(): void;
    blur: () => void;
    onSubSelect(id: string): void;
    componentDidMount(): void;
}
interface Icon extends EditorInterface {
}

declare class Menu extends React.PureComponent<{
    editor: Editor;
    onSelect: (id: string) => any;
}> {
    state: {
        selected: string;
        width: number;
    };
    menuRefs: Array<React.RefObject<Icon>>;
    menuContainerRef: React.RefObject<HTMLDivElement>;
    render(): React.JSX.Element;
    renderMenus(): React.JSX.Element;
    renderIcon(MenuClass: typeof Icon, i: number, selected: string): React.JSX.Element;
    select: (id: string) => void;
    getSelected(): typeof Icon | undefined;
    blur(): void;
    updateDimensions: () => void;
    componentWillUnmount(): void;
    componentDidMount(): void;
}

interface AddedInfo {
    added: ElementInfo[];
}
interface RemovedInfo {
    removed: ElementInfo[];
}
interface MovedInfo {
    info: ElementInfo;
    parentInfo: ElementInfo;
    prevInfo?: ElementInfo;
}
interface MovedResult {
    moved: ElementInfo[];
    prevInfos: MovedInfo[];
    nextInfos: MovedInfo[];
}
interface ElementInfo {
    jsx: ScenaJSXType;
    name: string;
    frame?: IObject<any>;
    scopeId?: string;
    children?: ElementInfo[];
    attrs?: IObject<any>;
    componentId?: string;
    jsxId?: string;
    el?: HTMLElement | null;
    id?: string;
    index?: number;
    innerText?: string;
    innerHTML?: string;
    colors?: string[];
}
declare class Viewport extends React.PureComponent<{
    editor: Editor;
    style: IObject<any>;
    onBlur: (e: any) => any;
    children: React.ReactNode;
    background?: string;
}> {
    components: IObject<ScenaComponent>;
    jsxs: IObject<ScenaJSXElement>;
    viewport: ElementInfo;
    ids: IObject<ElementInfo>;
    state: {};
    viewportRef: React.RefObject<HTMLDivElement>;
    render(): React.JSX.Element;
    componentDidMount(): void;
    renderChildren(children: ElementInfo[]): ScenaJSXElement[];
    getJSX(id: string): ScenaJSXElement;
    getComponent(id: string): ScenaComponent;
    makeId(ids?: IObject<any>): string;
    setInfo(id: string, info: ElementInfo): void;
    getInfo(id: string): ElementInfo;
    getLastChildInfo(id: string): ElementInfo;
    getNextInfo(id: string): ElementInfo | undefined;
    getPrevInfo(id: string): ElementInfo;
    getInfoByElement(el: HTMLElement | SVGElement): ElementInfo;
    getInfoByIndexes(indexes: number[]): ElementInfo;
    getElement(id: string): HTMLElement | null | undefined;
    getViewportInfos(): ElementInfo[];
    getIndexes(target: HTMLElement | SVGElement | string): number[];
    registerChildren(jsxs: ElementInfo[], parentScopeId?: string): ElementInfo[];
    appendJSXs(jsxs: ElementInfo[], appendIndex: number, scopeId?: string): Promise<AddedInfo>;
    getIndex(id: string | HTMLElement | SVGElement): number;
    getElements(ids: string[]): (HTMLElement | SVGElement)[];
    unregisterChildren(children: ElementInfo[], isChild?: boolean): ElementInfo[];
    removeTargets(targets: Array<HTMLElement | SVGElement>): Promise<RemovedInfo>;
    getSortedIndexesList(targets: Array<string | HTMLElement | SVGElement | number[]>): number[][];
    getSortedTargets(targets: Array<string | HTMLElement | SVGElement>): HTMLElement[];
    getSortedInfos(targets: Array<string | HTMLElement | SVGElement>): ElementInfo[];
    moveInside(target: HTMLElement | SVGElement | string): Promise<MovedResult>;
    moveOutside(target: HTMLElement | SVGElement | string): Promise<MovedResult>;
    moves(nextInfos: Array<{
        info: ElementInfo;
        parentInfo: ElementInfo;
        prevInfo?: ElementInfo;
    }>): Promise<MovedResult>;
    move(infos: ElementInfo[], parentInfo: ElementInfo, prevInfo?: ElementInfo): Promise<MovedResult>;
}

declare class Tabs extends React.PureComponent<{
    editor: Editor;
}> {
    tabs: React.RefObject<HTMLDivElement>;
    state: {
        selected: string;
    };
    render(): React.JSX.Element;
    renderTabs(): React.JSX.Element[];
    blur: () => void;
    private onClick;
    private onMouseOver;
}

declare class ClipboardManager {
    private editor;
    constructor(editor: Editor);
    destroy(): void;
    copy(): void;
    cut(): void;
    paste(): void;
    copyImage(): Promise<unknown>;
    private onCut;
    private onCopy;
    private onPaste;
    private readDataTransfter;
    private read;
}

declare class Editor extends React.PureComponent<{
    debug?: boolean;
    initialJSX?: ElementInfo[];
    backgroundImg?: string;
    onChange?: (evt: ElementInfo[]) => void;
    onUploadImage?: (img: File) => Promise<{
        url: string;
        options?: any;
    }>;
    isAdmin?: boolean;
    fontFamily?: string[];
    onValidate?: (errors: boolean) => void;
    previewMode?: boolean;
    printAreaSize?: string;
}, Partial<ScenaEditorState>> {
    state: ScenaEditorState;
    historyManager: HistoryManager;
    console: Debugger;
    eventBus: EventBus;
    memory: Memory;
    moveableData: MoveableData;
    keyManager: Shortcuts;
    clipboardManager: ClipboardManager;
    horizontalGuides: React.RefObject<Guides>;
    verticalGuides: React.RefObject<Guides>;
    infiniteViewer: React.RefObject<InfiniteViewer>;
    selecto: React.RefObject<Selecto>;
    menu: React.RefObject<Menu>;
    moveableManager: React.RefObject<MoveableManager>;
    viewport: React.RefObject<Viewport>;
    tabs: React.RefObject<Tabs>;
    editorElement: React.RefObject<HTMLDivElement>;
    render(): React.JSX.Element;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    promiseState(state: Partial<ScenaEditorState>): Promise<unknown>;
    getSelectedTargets(): (HTMLElement | SVGElement)[];
    setSelectedTargets(targets: Array<HTMLElement | SVGElement>, isRestore?: boolean): Promise<(HTMLElement | SVGElement)[]>;
    appendJSX(info: ElementInfo, isRestore?: boolean): Promise<HTMLElement | SVGElement>;
    appendJSXs(jsxs: ElementInfo[], isRestore?: boolean, isNewText?: boolean): Promise<Array<HTMLElement | SVGElement>>;
    appendComplete(infos: ElementInfo[], isRestore?: boolean): Promise<HTMLElement[]>;
    removeByIds(ids: string[], isRestore?: boolean): Promise<(HTMLElement | SVGElement)[]>;
    getMoveable(): Moveable.default<{}>;
    removeFrames(targets: Array<HTMLElement | SVGElement>): IObject<any>;
    restoreFrames(infos: ElementInfo[], frameMap: IObject<any>): void;
    removeElements(targets: Array<HTMLElement | SVGElement>, isRestore?: boolean): Promise<(HTMLElement | SVGElement)[]>;
    setProperty(scope: string[], value: any, isUpdate?: boolean): void;
    setOrders(scope: string[], orders: NameType[], isUpdate?: boolean): void;
    selectMenu(menu: string): void;
    loadDatas(datas: SavedScenaData[]): Promise<(HTMLElement | SVGElement)[]>;
    saveTargets(targets: Array<HTMLElement | SVGElement>): SavedScenaData[];
    getViewport(): Viewport;
    getViewportInfos(): ElementInfo[];
    appendBlob(blob: Blob): Promise<HTMLElement | SVGElement>;
    moves(movedInfos: MovedInfo[], isRestore?: boolean): Promise<MovedResult>;
    onMenuChange: (id: string) => void;
    selectEndMaker(rect: Rect, extraProps?: any, icon?: typeof Icon, isNewText?: boolean): boolean;
    private move;
    private checkBlur;
    onResize: () => void;
    private onBlur;
    resetToolbar(): void;
    private moveInside;
    private moveOutside;
    private moveComplete;
    saveEditor(): ElementInfo[];
    addImage(file: File | undefined): Promise<void>;
    getScreenshot(fileName: string): Promise<Blob>;
    getDesignSize(): Promise<{
        width: number;
        height: number;
    } | undefined>;
    getSelectableTargets(): ElementInfo[];
    getColorList(): string[];
}

export { AddedInfo as A, Editor as E, MovedInfo as M, RemovedInfo as R, ScenaProps as S, Viewport as V, ScenaFunctionComponent as a, MovedResult as b, ElementInfo as c };
