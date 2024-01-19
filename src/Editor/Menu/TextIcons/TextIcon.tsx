import * as React from "react";
import Icon from '../Icon';
import Memory from "../../utils/Memory";
import Menu from "../Menu";

export default class TextIcon extends Icon {
    public static id = "Text";
    public keys = ["t"];
    public static maker = (memory: Memory) => ({
        tag: "div",
        attrs: {
            contenteditable: true,
        },
        style: {
            color: memory.get("color"),
            "font-weight": memory.get("font-weight"),
            "font-style": memory.get("font-style"),
            "text-decoration": memory.get("text-decoration"),
            "font-family": memory.get("font-family"),
            width: "auto",
            height: "auto",
        },
    });
    public static makeThen = (target: HTMLElement | SVGElement, id: string, menu: Menu) => {
        target.focus();
        menu.select("Text");
    };
    public renderIcon() {
        return (
            <i className="fa-solid fa-text"></i>
        );
    }
    public onClick = () => {
        this.editor.setState({
        selectedMenu: "Text"
        }, () => {
            const bounds = this.editor.infiniteViewer.current!.getContainer().getBoundingClientRect();
            const width = 10;
            const height = 20;
            this.editor.selectEndMaker({
                top: bounds.y + 250 - (height / 2),
                left: bounds.x + 250 - (width / 2),
                bottom: 0,
                right: 0,
                width: "auto",
                height: "auto",
            },{}, TextIcon)
        })
    }
}
