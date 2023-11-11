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
					onChange={(e)=>this.uploadImage(e, this.editor)}
				/>
				<i className="fa-solid fa-image"></i>
			</label>
		);
	}
	public renderIcon() {	}
	private async uploadImage(e: React.ChangeEvent<HTMLInputElement>, editor: Editor) {
        const upload = editor.props.onUploadImage;
        const file = e.target.files ? e.target.files[0] : undefined
        if (upload && file) { 
					const image = await upload(file)
					const imageLoad = new Image();
					editor.memory.set("imageUrl", image)

					imageLoad.onload = () => {
						let width = imageLoad.width;
						let height = imageLoad.height
						const MAX_SIZE = 150;
						if (width >= height) {
							height = (MAX_SIZE / width) * height;
							width = MAX_SIZE;
						} else {
							width = (MAX_SIZE / height) * width;
							height = MAX_SIZE;
						}

						this.editor.selectEndMaker({
							top: 250 - (height / 2) + 45,
							left: 250 - (width / 2),
							bottom: 0,
							right: 0,
							width,
							height
						})
					};

					imageLoad.src = image;
        }
    }
}
