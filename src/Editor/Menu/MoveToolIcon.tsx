import * as React from "react";
import Icon from "./Icon";

export default class MoveToolIcon extends Icon {
    public static id = "MoveTool";
    public keys = ["v"];
    public renderIcon() {
        return (
            <i className="fa-solid fa-arrow-pointer"></i>
        );
    }
}
