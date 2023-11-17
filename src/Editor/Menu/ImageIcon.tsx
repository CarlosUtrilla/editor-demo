import * as React from "react";
import Icon from "./Icon";
import Memory from "../utils/Memory";
import { prefix } from "../utils/utils";
import Editor from "../Editor";

export default class ImageIcon extends Icon {
	public static id = "Image";
	public static maker = (memory: Memory) => ({
			tag: "img",
			attrs: {
				src: memory.get("imageUrl") || "",
			},
			style: {},
	});
	public render() {
		return (
			<label
					htmlFor='image'
					className={prefix("icon", this.props.selected  ? "selected" : "")}
					onClick={this.onClick}
			>
				<input
					type='file'
					id='image'
					style={{ display: "none" }}
					name='image'
					accept="image/*"
					value=""
					onChange={(e)=>this.uploadImage(e, this.editor)}
				/>
				<i className="fa-solid fa-image"></i>
			</label>
		);
	}
	public renderIcon() {	}
	private async uploadImage(e: React.ChangeEvent<HTMLInputElement>, editor: Editor) {
		const file = e.target.files ? e.target.files[0] : undefined
		editor.addImage(file)
  }
}
