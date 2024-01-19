import * as React from "react";
import Icon from "../Icon";

export default class LessZoomIcon extends Icon {
    public static id = "LessZoom";
    public renderIcon() {
        return (
            <i className="fa-solid fa-minus"></i>
        );
		}
		public onClick = () => {
			const newZoom = this.editor.state.zoom - 0.1;
			this.editor.setState({ zoom: newZoom <= 1 ? 1 : newZoom})
		};
}
