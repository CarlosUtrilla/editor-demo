import * as React from "react";
import Icon from "./Icon";
import Memory from "../utils/Memory";

export default class PrintAreaIcon extends Icon {
    public static id = "PrintArea";
    public static maker = (memory: Memory) => ({
        tag: "div",
        attrs: {},
        style: {
            "background-color": "transparent",
            "border-width": "1px",
            "border-style": "dashed",
            "border-color": memory.get("border-color") || "#000"
        },
    });
    public renderIcon() {
        return (
			<i className="fa-solid fa-square-dashed"></i>
        );
    }
}
