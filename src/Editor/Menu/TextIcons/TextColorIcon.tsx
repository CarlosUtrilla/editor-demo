
import * as React from "react";
import Icon from "../Icon";
import ColorIconPicker from "../../Inputs/ColorIconPicker";

export default class TextColorIcon extends Icon {
	public static id = "TextColor";
	protected colorInput = React.createRef<ColorIconPicker>();
	public propertyName = "color"
	public propertyValue = "#fff"
	public renderIcon() {
		const color = this.getOldValue() || "#fff"
		return (
			<ColorIconPicker
				icon={<i className="fa-solid fa-a"></i>}
				onChange={this.onChangeTextColor}
				value={color}
				ref={this.colorInput}
			/>
		);
	}
	public onChangeTextColor = (v: string) => {
        this.memory.set("color", v);
        this.editor.setProperty(["color"], v, true);
				this.editor.forceUpdate()
	}
	public getOldValue(){
		const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["none"])
		return oldValue as string
	}
	public onClick = () => {
		this.colorInput.current?.onClick()
	};
	private setTargets = () => {
    this.forceUpdate();
  }
	componentDidMount(): void {
		this.onChangeTextColor(this.getOldValue())
		this.editor.eventBus.on("setSelectedTargets", this.setTargets);
	}
	componentWillUnmount(): void {
		this.editor.eventBus.off("setSelectedTargets", this.setTargets);
	}
}
