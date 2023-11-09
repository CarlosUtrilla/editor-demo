import * as React from "react";
import Icon from "../Icon";
import ColorIconPicker from "../../Inputs/ColorIconPicker";
export default class TextColorIcon extends Icon {
	public static id = "TextColor";
	protected colorInput = React.createRef<ColorIconPicker>();
	public renderIcon() {
		const color = this.memory.get("color") || "#000"
		return (
			<ColorIconPicker
				icon={<i className="fa-solid fa-a"></i>}
				onChange={this.onChangeTextColor}
				value={color}
				ref={this.colorInput}
			/>
		);
	}
	public onClick = () => {
		this.colorInput.current?.onClick()
	};
	public onChangeTextColor = (v: string) => {
        this.memory.set("color", v);
        this.editor.setProperty(["color"], v);
				this.forceUpdate()
  }
}
