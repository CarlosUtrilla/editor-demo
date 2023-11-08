import { IObject } from "@daybrush/utils";
import Editor from "../Editor";
import { ElementInfo } from "../Viewport/Viewport";

export type RestoreCallback = (props: any, editor: Editor) => any;
export interface HistoryAction {
    type: string;
    props: IObject<any>;
}
export default class HistoryManager {
    private undoStack: HistoryAction[] = [];
    private redoStack: HistoryAction[] = [];
    private types: IObject<{ redo: RestoreCallback, undo: RestoreCallback }> = {};
    constructor(private editor: Editor) { }
    public registerType(type: string, undo: RestoreCallback, redo: RestoreCallback) {
        this.types[type] = { undo, redo };
    }
    public addAction(type: string, props: IObject<any>) {
        this.editor.console.log(`Add History:`, type, props);
        this.undoStack.push({
            type,
            props,
        });
        this.redoStack = [];
        if (this.editor.props.onChange && this.editor.viewport.current) {
            const elements = this.editor.viewport.current.getViewportInfos()
            let stringElements = JSON.stringify(elements, (key, value) => {
                if (key.includes('__reactInternalInstance') || value instanceof HTMLDivElement) {
                    return undefined;
                }
                return value;
            });
            const parsedElements = JSON.parse(stringElements) as ElementInfo[]
            this.editor.props.onChange(
                parsedElements.map(e => {
                    delete e.el
                    if (e.name === "(PrintArea)" && e.attrs && e.attrs.class) {
                        e.attrs.class = undefined
                    }
                    return e
                })
            )
        }
    }
    public undo() {
        const undoAction = this.undoStack.pop();

        if (!undoAction) {
            return;
        }
        this.editor.console.log(`Undo History: ${undoAction.type}`, undoAction.props);
        this.types[undoAction.type].undo(undoAction.props, this.editor);
        this.redoStack.push(undoAction);
    }
    public redo() {
        const redoAction = this.redoStack.pop();

        if (!redoAction) {
            return;
        }
        this.editor.console.log(`Redo History: ${redoAction.type}`, redoAction.props);
        this.types[redoAction.type].redo(redoAction.props, this.editor);
        this.undoStack.push(redoAction);
    }
}
