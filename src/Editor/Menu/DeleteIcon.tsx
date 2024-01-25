import * as React from "react";
import Icon from "./Icon";

export default class DeleteIcon extends Icon {
    public static id = "DeleteTool";
    public renderIcon() {
        return (
          <i className="fa-regular fa-trash red-icon"></i>
        );
		}
		public onClick =  () => {
			const targets = this.editor.getSelectedTargets()
			this.editor.removeElements(targets);
		};
}
