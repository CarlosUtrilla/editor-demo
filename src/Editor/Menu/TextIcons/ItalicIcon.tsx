import * as React from "react";
import Icon from "../Icon";

export default class ItalicIcon extends Icon {
	public static id = "TextItalic";
	public propertyName = "font-style"
	public propertyValue = "italic"
	public renderIcon() {
			return (
					<i className="fa-solid fa-italic"></i>
			);
	}
	public getOldValue(){
		const [oldValue] = this.moveableData.getProperties([[this.propertyName]],["normal"])
		return oldValue
	}
	public onClick = () => {
		let v = this.propertyValue
		if (this.getOldValue() === this.propertyValue) {
			v = "normal"
		}
		this.memory.set(this.propertyName, v);
		this.editor.setProperty([this.propertyName], v, true);
		this.forceUpdate()
		this.editor.forceUpdate()
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
	componentDidUpdate(): void {
		this.loadFirtData()
	}
	componentDidMount(): void {
		this.loadFirtData()
		this.editor.eventBus.on("setSelectedTargets", this.setTargets);
	}
	componentWillUnmount(): void {
		this.editor.eventBus.off("setSelectedTargets", this.setTargets);
	}
}
