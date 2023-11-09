import * as React from "react";
import Icon from "./Icon";
import Memory from "../utils/Memory";

export default class ImageIcon extends Icon {
		public static id = "Image";
    public static maker = (memory: Memory) => ({
        tag: "img",
				attrs: {
					src: memory.get("imageUrl") || "",
				},
        style: {},
		});
    public renderIcon() {
			return (
						<i className="fa-solid fa-image"></i>
        );
    }
}
