
import * as React from "react";
import Icon from "../Icon";
import ColorIconPicker from "../../Inputs/ColorIconPicker";

export default class FillIcon extends Icon {
	public static id = "FillIcon";
	protected colorInput = React.createRef<ColorIconPicker>();
	public propertyName = "background-color"
	public propertyValue = "#4af"
	public renderIcon() {
		const color = this.getOldValue() || "#4af"
		return (
			<ColorIconPicker
				icon={<i className="fa-solid fa-fill-drip"></i>}
				onChange={this.onChangeTextColor}
				value={color}
				ref={this.colorInput}
			/>
		);
	}
	public onChangeTextColor = (v: string) => {
        this.memory.set(this.propertyName, v);
        this.editor.setProperty([this.propertyName], v, true);
				this.forceUpdate()
	}
	public getOldValue(){
		const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["#4af"])
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
