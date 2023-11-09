import * as React from "react";
import Icon from "../Icon";
import Memory from "../../utils/Memory";

export default class CircleIcon extends Icon {
    public static id = "Circle";
    public static maker = (memory: Memory) => ({
        tag: "div",
        attrs: {},
        style: {
            "background-color": memory.get("background-color"),
            "border-radius": "50%",
        },
    });
    public renderIcon() {
        return (
            <i className="fa-regular fa-circle"></i>
        );
    }
}
