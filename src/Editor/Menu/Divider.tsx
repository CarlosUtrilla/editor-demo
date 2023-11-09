import * as React from "react";
import Icon from "./Icon";

export default class Divider extends Icon {
    public static id = "Divider";
    public renderIcon() {
        return (
            <i className="fa-light fa-pipe divider"></i>
        );
    }
}