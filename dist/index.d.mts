import * as Moveable from 'react-moveable';
import Moveable__default from 'react-moveable';
import * as React$1 from 'react';
import React__default from 'react';
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

declare function prefix(...classNames: string[]): string;
declare function getContentElement(el: HTMLElement): HTMLElement | null;
declare function connectEditorProps(component: any): void;
declare function between(val: number, min: number, max: number): number;
declare function getId(el: HTMLElement | SVGElement): string;
declare function getIds(els: Array<HTMLElement | SVGElement>): string[];
declare function checkInput(target: HTMLElement | SVGElement): boolean;
declare function checkImageLoaded(el: HTMLElement | SVGElement): Promise<any>;
declare function getParnetScenaElement(el: HTMLElement | SVGElement): HTMLElement | SVGElement | null;
declare function makeScenaFunctionComponent<T = IObject<any>>(id: string, component: (props: ScenaProps & T) => React.ReactElement<any, any>): ScenaFunctionComponent<T>;
declare function getScenaAttrs(el: HTMLElement | SVGElement): IObject<any>;
declare function isScenaFunction(value: any): value is ScenaComponent;
declare function isScenaElement(value: any): value is ScenaJSXElement;
declare function isScenaFunctionElement(value: any): value is ScenaFunctionJSXElement;
declare function isNumber(value: any): value is number;
declare function inRange(number: number, start: number, end?: number): boolean;
declare function isDivInsideAnother(div1: any, div2: any): boolean;

declare class Input<T = {}, U = {}, I extends HTMLElement = HTMLElement> extends React$1.PureComponent<{
    value?: any;
    updateValue?: boolean;
    inputProps?: IObject<any>;
    onChange: (v: any) => any;
} & T, U> {
    input: React$1.RefObject<I>;
    getValue(): any;
    setValue(value: any): void;
    componentDidMount(): void;
    componentDidUpdate(): void;
}

declare class Anchor extends Input {
    protected inputAttributes: IObject<any>;
    state: {
        origin: number[];
    };
    render(): React$1.JSX.Element;
    onClick: (e: any) => void;
    setValue(v: string): void;
    getValue(): number[];
}

declare class ColorPicker extends Input {
    protected inputAttributes: IObject<any>;
    state: {
        color: string;
    };
    render(): React$1.JSX.Element;
    componentDidUpdate(): void;
    setValue(v: string): void;
    getValue(): string;
    private onChange;
    private onChangeComplete;
}

declare class TextBox extends Input<{}, {}, HTMLInputElement> {
    protected inputAttributes: IObject<any>;
    render(): React$1.JSX.Element;
    getValue(): any;
    setValue(value: any): void;
    protected onInput: (e: any) => void;
    protected onKeyDown: (e: any) => void;
    protected onKeyUp: (e: any) => void;
}

declare class ColorBox extends Input<{}, {}, HTMLDivElement> {
    protected inputAttributes: IObject<any>;
    protected colorInput: React$1.RefObject<ColorPicker>;
    protected textInput: React$1.RefObject<TextBox>;
    state: {
        display: string;
        color: string;
    };
    render(): React$1.JSX.Element;
    renderPicker(): React$1.JSX.Element | undefined;
    setValue(v: string): void;
    getValue(): any;
    onFocus: () => void;
    onBlur: (e: any) => void;
    private onChange;
    private onDragStart;
    private onClick;
}

declare class ColorIconPicker extends Input<{
    icon: React$1.ReactElement;
}, {}, HTMLDivElement> {
    protected inputAttributes: IObject<any>;
    protected colorInput: React$1.RefObject<ColorPicker>;
    protected textInput: React$1.RefObject<HTMLInputElement>;
    state: {
        display: string;
        color: any;
    };
    render(): React$1.JSX.Element;
    renderPicker(): React$1.JSX.Element | undefined;
    getValue(): any;
    onFocus: () => void;
    onBlur: (e: any) => void;
    private onChange;
    private onDragStart;
    onClick: () => void;
}

declare class LabelBox extends React$1.PureComponent<{
    type: "half" | "full" | "third";
    label: string;
}> {
    render(): React$1.JSX.Element;
}

declare class NumberBox extends TextBox {
    protected inputAttributes: {
        type: string;
        min: number;
        step: number;
        pattern: string;
    };
}

declare class SelectBox extends Input<{
    options: string[];
}, {}, HTMLSelectElement> {
    protected inputAttributes: IObject<any>;
    render(): React$1.JSX.Element;
    getValue(): any;
    setValue(value: any): void;
    protected onInput: (e: any) => void;
}

declare class TabInputBox extends React$1.PureComponent<{
    type: "half" | "full" | "third" | "twothird";
    onChange: (v: any) => any;
    input: typeof Input;
    label?: string;
    props?: IObject<any>;
    inputProps?: IObject<any>;
    value?: any;
    updateValue?: boolean;
}> {
    input: React$1.RefObject<Input<{}, {}, HTMLElement>>;
    render(): React$1.JSX.Element;
    setValue(v: any): void;
    getValue(): any;
}

declare class CropIcon extends Icon {
    static id: string;
    keys: string[];
    renderIcon(): React$1.JSX.Element;
    renderSubIcons(): React$1.JSX.Element[];
    onSubSelect(id: string): void;
}

declare class Divider extends Icon {
    static id: string;
    renderIcon(): React$1.JSX.Element;
}

declare class ImageIcon extends Icon {
    static id: string;
    static maker: (memory: Memory) => {
        tag: string;
        attrs: {
            src: any;
        };
        style: {};
    };
    render(): React$1.JSX.Element;
    renderIcon(): void;
    private uploadImage;
}

declare class KeyboardIcon extends Icon {
    static id: string;
    keys: string[];
    state: {
        selected: boolean;
        renderPopup: boolean;
    };
    renderIcon(): React$1.JSX.Element;
    renderPopup(): React$1.ReactPortal;
    onClick: () => void;
    onClose: () => void;
}

declare const HomeMenu: Array<typeof Icon>;
declare const TextMenu: Array<typeof Icon>;
declare const ShapesMenu: Array<typeof Icon>;
declare const PrintAreaMenu: Array<typeof Icon>;
declare const CompleteMenu: Array<typeof Icon>;

declare class MoveToolIcon extends Icon {
    static id: string;
    keys: string[];
    renderIcon(): React$1.JSX.Element;
}

declare class PrintAreaIcon extends Icon {
    static id: string;
    static maker: (memory: Memory) => {
        tag: string;
        attrs: {};
        style: {
            "background-color": string;
            "border-width": string;
            "border-style": string;
            "border-color": any;
        };
    };
    renderIcon(): React$1.JSX.Element;
}

declare class RedoIcon extends Icon {
    static id: string;
    renderIcon(): React$1.JSX.Element;
    onClick: () => void;
}

declare class UndoIcon extends Icon {
    static id: string;
    renderIcon(): React$1.JSX.Element;
    onClick: () => void;
}

declare class BorderColorIcon extends Icon {
    static id: string;
    protected colorInput: React$1.RefObject<ColorIconPicker>;
    propertyName: string;
    propertyValue: string;
    renderIcon(): React$1.JSX.Element;
    onChangeTextColor: (v: string) => void;
    getOldValue(): string;
    onClick: () => void;
    private setTargets;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

declare class CircleIcon extends Icon {
    static id: string;
    static maker: (memory: Memory) => {
        tag: string;
        attrs: {};
        style: {
            "background-color": any;
            "border-radius": string;
            "border-color": any;
            "border-style": any;
            "border-width": any;
        };
    };
    renderIcon(): React$1.JSX.Element;
}

declare class FillIcon extends Icon {
    static id: string;
    protected colorInput: React$1.RefObject<ColorIconPicker>;
    propertyName: string;
    propertyValue: string;
    renderIcon(): React$1.JSX.Element;
    onChangeTextColor: (v: string) => void;
    getOldValue(): string;
    onClick: () => void;
    private setTargets;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

declare class OvalIcon extends Icon {
    static id: string;
    static maker: (memory: Memory) => {
        tag: string;
        attrs: {};
        style: {
            "background-color": any;
            "border-radius": string;
            "border-color": any;
            "border-style": any;
            "border-width": any;
        };
    };
    renderIcon(): React$1.JSX.Element;
}

declare class PolygonIcon extends Icon {
    static id: string;
    renderIcon(): React$1.JSX.Element;
}

declare class RectIcon extends Icon {
    static id: string;
    static maker: (memory: Memory) => {
        tag: string;
        attrs: {};
        style: {
            "background-color": any;
            "border-color": any;
            "border-style": any;
            "border-width": any;
        };
    };
    renderIcon(): React$1.JSX.Element;
}

declare class RoundRectIcon extends Icon {
    static id: string;
    static maker: (memory: Memory) => {
        tag: string;
        attrs: {};
        style: {
            "background-color": any;
            "border-radius": string;
            "border-color": any;
            "border-style": any;
            "border-width": any;
        };
    };
    renderIcon(): React$1.JSX.Element;
}

declare class ShapesIcon extends Icon {
    static id: string[];
    renderIcon(): React$1.JSX.Element;
    renderSubIcons(): React$1.JSX.Element[];
    onSubSelect(id: string): void;
}

declare class AlignText extends Icon {
    static id: string[];
    renderIcon(): React$1.JSX.Element;
    onClick: () => void;
    renderSubIcons(): React$1.JSX.Element[];
    onSubSelect(id: string): void;
}

declare class AlignCenterIcon extends Icon {
    static id: string;
    propertyName: string;
    propertyValue: string;
    renderIcon(): React$1.JSX.Element;
    getOldValue(): string;
    onClick: () => void;
    loadFirtData(): void;
    private setTargets;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

declare class AlignJustifyIcon extends Icon {
    static id: string;
    propertyName: string;
    propertyValue: string;
    renderIcon(): React$1.JSX.Element;
    getOldValue(): string;
    onClick: () => void;
    loadFirtData(): void;
    private setTargets;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

declare class AlignLeftIcon extends Icon {
    static id: string;
    propertyName: string;
    propertyValue: string;
    renderIcon(): React$1.JSX.Element;
    getOldValue(): string;
    onClick: () => void;
    loadFirtData(): void;
    private setTargets;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

declare class AlignRightIcon extends Icon {
    static id: string;
    propertyName: string;
    propertyValue: string;
    renderIcon(): React$1.JSX.Element;
    getOldValue(): string;
    onClick: () => void;
    loadFirtData(): void;
    private setTargets;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

declare class BoldIcon extends Icon {
    static id: string;
    propertyName: string;
    propertyValue: string;
    renderIcon(): React$1.JSX.Element;
    getOldValue(): string;
    onClick: () => void;
    loadFirtData(): void;
    private setTargets;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

declare class FontFamily extends Icon {
    static id: string;
    propertyName: string;
    propertyValue: string;
    render(): React$1.JSX.Element;
    renderIcon(): void;
    onClick: () => void;
    getOldValue(): string;
    onChange: (v: string) => void;
    private setTargets;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

declare class FontSize extends Icon {
    static id: string;
    propertyName: string;
    propertyValue: string;
    render(): React$1.JSX.Element;
    renderIcon(): void;
    onClick: () => void;
    getOldValue(): string;
    onChange: (v: string) => void;
    private setTargets;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

declare class ItalicIcon extends Icon {
    static id: string;
    propertyName: string;
    propertyValue: string;
    renderIcon(): React$1.JSX.Element;
    getOldValue(): any;
    onClick: () => void;
    loadFirtData(): void;
    private setTargets;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

declare class TextColorIcon extends Icon {
    static id: string;
    protected colorInput: React$1.RefObject<ColorIconPicker>;
    propertyName: string;
    propertyValue: string;
    renderIcon(): React$1.JSX.Element;
    onChangeTextColor: (v: string) => void;
    getOldValue(): string;
    onClick: () => void;
    private setTargets;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

declare class TextIcon extends Icon {
    static id: string;
    keys: string[];
    static maker: (memory: Memory) => {
        tag: string;
        attrs: {
            contenteditable: boolean;
        };
        style: {
            color: any;
            "font-weight": any;
            "font-style": any;
            "text-decoration": any;
            "font-family": any;
        };
    };
    static makeThen: (target: HTMLElement | SVGElement, id: string, menu: Menu) => void;
    renderIcon(): React$1.JSX.Element;
}

declare class UnderlineIcon extends Icon {
    static id: string;
    propertyName: string;
    propertyValue: string;
    renderIcon(): React$1.JSX.Element;
    getOldValue(): string;
    onClick: () => void;
    loadFirtData(): void;
    private setTargets;
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}

declare class Popup extends React$1.PureComponent<{
    editor: Editor;
    onClose: () => any;
}> {
    overlayElement: React$1.RefObject<HTMLDivElement>;
    popupKeyManager: KeyManager;
    render(): React$1.JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onClick: (e: any) => void;
}
interface Popup extends EditorInterface {
}

declare class MoveablePrintArea extends React__default.PureComponent<{
    printAreas: ElementInfo[];
}> {
    render(): React__default.JSX.Element;
}

export { AlignCenterIcon as AlignCenter, AlignJustifyIcon as AlignJustify, AlignLeftIcon, AlignRightIcon, AlignText, Anchor, BoldIcon, BorderColorIcon, CircleIcon, ClipboardManager, ColorBox, ColorIconPicker, ColorPicker, CompleteMenu, CropIcon, Debugger, Divider, Editor, EventBus, FillIcon, FontFamily, FontSize, HistoryManager, HomeMenu, Icon, ImageIcon, Input, ItalicIcon, KeyManager, KeyboardIcon, LabelBox, Memory, Menu, MoveToolIcon, MoveableData, MoveableManager as MoveableMananger, MoveablePrintArea, NumberBox, OvalIcon, PolygonIcon, Popup, PrintAreaIcon, PrintAreaMenu, RectIcon, RedoIcon, RoundRectIcon, SelectBox, ShapesIcon, ShapesMenu, TabInputBox, TextBox, TextColorIcon, TextIcon, TextMenu, UnderlineIcon as UnderlinedIcon, UndoIcon, Viewport, between, checkImageLoaded, checkInput, connectEditorProps, Editor as default, getContentElement, getId, getIds, getParnetScenaElement, getScenaAttrs, inRange, isDivInsideAnother, isNumber, isScenaElement, isScenaFunction, isScenaFunctionElement, makeScenaFunctionComponent, prefix };
