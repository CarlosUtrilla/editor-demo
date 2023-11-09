import * as React from "react";
import Icon from "./Icon";
import Memory from "../utils/Memory";

export default class RoundRectIcon extends Icon {
    public static id = "RoundRect";
    public static maker = (memory: Memory) => ({
        tag: "div",
        attrs: {},
        style: {
            "background-color": memory.get("background-color"),
            "border-radius": "10px",
        },
    });
    public renderIcon() {
        return (
            <i className="fa-regular fa-square"></i>
        );
    }
}
