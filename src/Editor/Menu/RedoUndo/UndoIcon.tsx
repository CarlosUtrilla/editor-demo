import * as React from "react";
import Icon from "../Icon";

export default class UndoIcon extends Icon {
    public static id = "Undo";
    public renderIcon() {
        return (
            <i className="fa-solid fa-rotate-left"></i>
        );
		}
		public onClick = () => {
            this.editor.historyManager.undo()
		};
}
