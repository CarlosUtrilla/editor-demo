import * as React from "react";
import Icon from "../Icon";

export default class MoreZoomIcon extends Icon {
    public static id = "MoreZoom";
    public renderIcon() {
        return (
            <i className="fa-solid fa-plus"></i>
        );
		}
		public onClick = () => {
			const editor = this.editor
			editor.setZoom({zoom: editor.state.zoom + 0.1});
	};
}
