import * as Moveable from 'react-moveable';
import Moveable__default from 'react-moveable';
import * as React$1 from 'react';
import InfiniteViewer from 'react-infinite-viewer';
import Guides from '@scena/react-guides';
import Selecto, { Rect } from 'react-selecto';
import { IObject } from '@daybrush/utils';
import Component from '@egjs/component';
import MoveableHelper from 'moveable-helper';
import { Frame, NameType } from 'scenejs';
import KeyController from 'keycon';

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

declare class MoveableManager extends React$1.PureComponent<{
    editor: Editor;
    selectedTargets: Array<HTMLElement | SVGElement>;
    selectedMenu: string;
    verticalGuidelines: number[];
    horizontalGuidelines: number[];
}> {
    moveable: React$1.RefObject<Moveable__default<{}>>;
    getMoveable(): Moveable__default<{}>;
    render(): React$1.JSX.Element;
    renderViewportMoveable(): React$1.JSX.Element;
    componentDidMount(): void;
    updateRect(): void;
    private updateRender;
}
interface MoveableManager extends EditorInterface {
}

declare class Debugger {
    private isDebug?;
    constructor(isDebug?: boolean | undefined);
    log(...args: any[]): void;
}

declare class KeyManager {
    private console;
    constructor(console: Debugger);
    keycon: KeyController;
    keylist: Array<[string[], string]>;
    isEnable: boolean;
    enable(): void;
    disable(): void;
    keydown(keys: string[], callback: (e: any) => any, description?: any): void;
    keyup(keys: string[], callback: (e: any) => any, description?: any): void;
    get altKey(): boolean;
    get shiftKey(): boolean;
    get metaKey(): boolean;
    get ctrlKey(): boolean;
    destroy(): void;
    private addCallback;
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
}
interface EditorInterface {
    editor: Editor;
    memory: Memory;
    eventBus: EventBus;
    moveableData: MoveableData;
    keyManager: KeyManager;
    historyManager: HistoryManager;
    console: Debugger;
    moveableManager: React$1.RefObject<MoveableManager>;
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
type ScenaFunctionComponent<T> = ((props: T & ScenaProps) => React$1.ReactElement<any, any>) & {
    scenaComponentId: string;
};
type ScenaComponent = React$1.JSXElementConstructor<ScenaProps> & {
    scenaComponentId: string;
};
type ScenaJSXElement = React$1.ReactElement<any, string> | ScenaFunctionJSXElement;
type ScenaFunctionJSXElement = React$1.ReactElement<any, ScenaComponent>;
type ScenaJSXType = ScenaJSXElement | string | ScenaComponent;

interface Maker {
    tag: string;
    attrs: IObject<any>;
    style: IObject<any>;
}
declare abstract class Icon extends React$1.PureComponent<{
    editor: Editor;
    selected?: boolean;
    onSelect?: (id: string) => any;
    selectedId?: string;
}> {
    static id: string | string[];
    static maker?: (memory: Memory) => Maker;
    static makeThen: (target: HTMLElement | SVGElement, id: string, menu: Menu) => any;
    keys: string[];
    abstract renderIcon(): any;
    private subContainer;
    state: {
        selected: boolean;
    };
    render(): React$1.JSX.Element;
    renderSubContainer(): (false | React$1.JSX.Element | undefined)[] | undefined;
    renderSubIcons(): any[];
    renderSubIcon(IconClass: typeof Icon, id: string, isSelect: boolean): React$1.JSX.Element;
    onClick: () => void;
    onSubClick: (e: any) => void;
    focusSub(): void;
    blur: () => void;
    onSubSelect(id: string): void;
    componentDidMount(): void;
}
interface Icon extends EditorInterface {
}

declare class Menu extends React$1.PureComponent<{
    editor: Editor;
    onSelect: (id: string) => any;
}> {
    state: {
        selected: string;
    };
    menuRefs: Array<React$1.RefObject<Icon>>;
    render(): React$1.JSX.Element;
    renderMenus(): React$1.JSX.Element[];
    select: (id: string) => void;
    getSelected(): typeof Icon | undefined;
    blur(): void;
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
}
declare class Viewport extends React$1.PureComponent<{
    editor: Editor;
    style: IObject<any>;
    onBlur: (e: any) => any;
    children: React$1.ReactNode;
}> {
    components: IObject<ScenaComponent>;
    jsxs: IObject<ScenaJSXElement>;
    viewport: ElementInfo;
    ids: IObject<ElementInfo>;
    state: {};
    viewportRef: React$1.RefObject<HTMLDivElement>;
    render(): React$1.JSX.Element;
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

declare class Tabs extends React$1.PureComponent<{
    editor: Editor;
}> {
    tabs: React$1.RefObject<HTMLDivElement>;
    state: {
        selected: string;
    };
    render(): React$1.JSX.Element;
    renderTabs(): React$1.JSX.Element[];
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

declare class Editor extends React$1.PureComponent<{
    debug?: boolean;
    initialJSX?: ElementInfo[];
    backgroundImg?: string;
    onChange?: (evt: ElementInfo[]) => void;
    onUploadImage?: (img: File) => Promise<string>;
    isAdmin?: boolean;
    fontFamily?: string[];
    onValidate?: (errors: boolean) => void;
}, Partial<ScenaEditorState>> {
    state: ScenaEditorState;
    historyManager: HistoryManager;
    console: Debugger;
    eventBus: EventBus;
    memory: Memory;
    moveableData: MoveableData;
    keyManager: KeyManager;
    clipboardManager: ClipboardManager;
    horizontalGuides: React$1.RefObject<Guides>;
    verticalGuides: React$1.RefObject<Guides>;
    infiniteViewer: React$1.RefObject<InfiniteViewer>;
    selecto: React$1.RefObject<Selecto>;
    menu: React$1.RefObject<Menu>;
    moveableManager: React$1.RefObject<MoveableManager>;
    viewport: React$1.RefObject<Viewport>;
    tabs: React$1.RefObject<Tabs>;
    editorElement: React$1.RefObject<HTMLDivElement>;
    render(): React$1.JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    promiseState(state: Partial<ScenaEditorState>): Promise<unknown>;
    getSelectedTargets(): (HTMLElement | SVGElement)[];
    setSelectedTargets(targets: Array<HTMLElement | SVGElement>, isRestore?: boolean): Promise<(HTMLElement | SVGElement)[]>;
    appendJSX(info: ElementInfo): Promise<HTMLElement | SVGElement>;
    appendJSXs(jsxs: ElementInfo[], isRestore?: boolean): Promise<Array<HTMLElement | SVGElement>>;
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
    private onMenuChange;
    selectEndMaker(rect: Rect): boolean;
    private move;
    private checkBlur;
    private onResize;
    private onBlur;
    resetToolbar(): void;
    private moveInside;
    private moveOutside;
    private moveComplete;
    saveEditor(): ElementInfo[];
}

declare function makeScenaFunctionComponent<T = IObject<any>>(id: string, component: (props: ScenaProps & T) => React.ReactElement<any, any>): ScenaFunctionComponent<T>;

export { Editor as default, makeScenaFunctionComponent };
