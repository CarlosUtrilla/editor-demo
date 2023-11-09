import * as React from "react";
import Icon from "./Icon";

export default class RedoIcon extends Icon {
    public static id = "Redo";
    public renderIcon() {
        return (
            <i className="fa-solid fa-rotate-right"></i>
        );
		}
		public onClick = () => {
			this.editor.historyManager.redo()
		};
}
