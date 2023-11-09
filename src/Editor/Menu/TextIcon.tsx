import * as React from "react";
import Icon from "./Icon";
import Memory from "../utils/Memory";

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
        },
    });
    public static makeThen = (target: HTMLElement | SVGElement) => {
        target.focus();
    };
    public renderIcon() {
        return (
            <i className="fa-solid fa-text"></i>
        );
    }
}
