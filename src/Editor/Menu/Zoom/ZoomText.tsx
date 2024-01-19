import * as React from "react";
import Icon from "../Icon";

export default class ZoomTextIcon extends Icon {
    public static id = "ZoomText";
    public renderIcon() {
        return (
					<span style={{
						fontSize: "0.8rem",
					}}
					>
						Zoom
					</span>
        );
		}
		public onClick = () => {
		};
}
