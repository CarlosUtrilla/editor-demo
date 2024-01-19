import * as React from "react";
import Icon from "../Icon";

export default class BoldIcon extends Icon {
	public static id = "TextBold";
	public propertyName = "font-weight"
	public propertyValue = "bold"
	public renderIcon() {
			return (
					<i className="fa-solid fa-bold"></i>
			);
	}
	public getOldValue(){
		const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["normal"])
		return oldValue as string
	}
	public onClick = () => {
		let v = this.propertyValue
		if (this.getOldValue() === this.propertyValue) {
			v = "normal"
		}
		this.memory.set(this.propertyName, v);
		this.editor.setProperty([this.propertyName], v, true);
		this.editor.forceUpdate()
		this.loadFirtData()
	};
	public loadFirtData() {
		if (this.getOldValue()  === this.propertyValue) {
			this.setState({selected: true})
		} else {
			this.setState({selected: false})
		}
	}
	private setTargets = () => {
		this.forceUpdate();
		this.editor.forceUpdate()
  }
	componentDidMount(): void {
		this.loadFirtData()
		this.editor.eventBus.on("setSelectedTargets", this.setTargets);
	}
	componentWillUnmount(): void {
		this.editor.eventBus.off("setSelectedTargets", this.setTargets);
	}
}
