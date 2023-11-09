import * as React from "react";
import Icon from "./Icon";
import Memory from "../utils/Memory";

export default class RectIcon extends Icon {
    public static id = "Rect";
    public static maker = (memory: Memory) => ({
        tag: "div",
        attrs: {},
        style: {
            "background-color": memory.get("background-color"),
        },
    });
    public renderIcon() {
        return (
            <i className="fa-sharp fa-regular fa-square"></i>
        );
    }
}
