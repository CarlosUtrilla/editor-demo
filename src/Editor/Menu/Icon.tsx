import * as React from "react";
import { prefix, connectEditorProps } from "../utils/utils";
import { IObject, camelize } from "@daybrush/utils";
import Memory from "../utils/Memory";
import Editor from "../Editor";
import { EditorInterface } from "../types";
import Menu from "./Menu";


export interface Maker {
    tag: string,
    attrs: IObject<any>,
    style: IObject<any>,
}

@connectEditorProps
export default abstract class Icon extends React.PureComponent<{
    editor: Editor,
    selected?: boolean,
    onSelect?: (id: string) => any;
    selectedId?: string
}> {
    public static id: string | string[];
    public static maker?: (memory: Memory) => Maker;
    public static makeThen: (target: HTMLElement | SVGElement, id: string, menu: Menu) => any = () => { };
    public keys: string[] = [];
    public abstract renderIcon(): any;
    private subContainer = React.createRef<HTMLDivElement>();
    public state = {
        selected: false
    }
    public render() {
        const iconId = (this.constructor as any).id
        const selected = this.props.selected || this.state.selected
        return (
            <div className={prefix("icon", selected ? "selected" : "", iconId === "Divider" ? "divider": "")}
                onClick={this.onClick}>
                {this.renderIcon()}
                {this.renderSubContainer()}
            </div>
        );
    }
    public renderSubContainer() {
        const subIcons = this.renderSubIcons();

        if (!subIcons.length) {
            return;
        }
        return [
            <div key={"extends-icon"} className={prefix("extends-icon")}></div>,
            this.props.selected && <div key={"extends-container"}
                className={prefix("extends-container")} ref={this.subContainer}
                onClick={this.onSubClick}
            >
                {subIcons}
            </div>,
        ];
    }
    public renderSubIcons(): any[] {
        return [];
    }
    public renderSubIcon(IconClass: typeof Icon, id: string, isSelect: boolean) {
        return (
            <div
                key={id}
                className={prefix("icon", "sub-icon", isSelect ? "selected" : "")}
                onClick={() => {
                    this.props.onSelect!(id);
                    this.onSubSelect(id)
                }}
            >
                <IconClass editor={this.props.editor} selected={false} />
                <div className={prefix("sub-icon-label")}>
                    {camelize(` ${id}`)}
                </div>
            </div>
        );
    }
    public onClick = () => {
        const onSelect = this.props.onSelect;
        let iconId = (this.constructor as any).id as string | string[];

        if (Array.isArray(iconId)) {
            const lastShape = this.memory.get("lastShape");
            const find = iconId.find(s => s === this.props.selectedId || s === lastShape)
            if (!find) iconId = iconId[0]
            else iconId = find
        }
        if (onSelect) {
            onSelect(iconId);
            this.focusSub();
        }
    }
    public onSubClick = (e: any) => {
        e.stopPropagation();
    }
    public focusSub() {
        const subContainer = this.subContainer.current;
        if (!subContainer) {
            return;
        }

        if (subContainer.style.display === "block") {
            subContainer.style.display = "none";
        } else {
            subContainer.style.display = "block";
        }
    }
    public blur = () => {
        const subContainer = this.subContainer.current;
        if (!subContainer) {
            return;
        }

        subContainer.style.display = "none";
    }
    public onSubSelect(id: string) { }
    public componentDidMount() {
        const keys = this.keys;
        if (keys.length) {
            this.keyManager.keydown(keys, e => {
                if (e.ctrlKey || e.metaKey) {
                    return false;
                }
                this.onClick();
            }, (this.constructor as any).id);
        }
    }
}

export default interface Icon extends EditorInterface {}
