import * as React from "react";
import Icon from "../Icon";
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
            "font-family": memory.get("font-family")
        },
    });
    public static makeThen = (target: HTMLElement | SVGElement, id: string, menu: Menu) => {
        target.focus();
        menu.select(id);
    };
    public renderIcon() {
        return (
            <i className="fa-solid fa-text"></i>
        );
    }
}
