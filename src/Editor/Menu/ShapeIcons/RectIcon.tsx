import * as React from "react";
import Icon from "../Icon";
import Memory from "../../utils/Memory";

export default class RectIcon extends Icon {
    public static id = "Rect";
    public static maker = (memory: Memory) => ({
        tag: "div",
        attrs: {},
        style: {
            "background-color": memory.get("background-color"),
            "border-color": memory.get("border-color"),
            "border-style": memory.get("border-style"),
            "border-width": memory.get("border-width")
        },
    });
    public renderIcon() {
        return (
            <i className="fa-sharp fa-regular fa-square"></i>
        );
    }
}
