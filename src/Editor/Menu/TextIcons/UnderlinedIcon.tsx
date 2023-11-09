import * as React from "react";
import Icon from "../Icon";

export default class UnderlineIcon extends Icon {
	public static id = "TextUnderline";
	public propertyName = "text-decoration"
	public propertyValue = "underline"
	public renderIcon() {
			return (
					<i className="fa-solid fa-underline"></i>
			);
	}
	public getOldValue(){
		const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["none"])
		return oldValue as string
	}
	public onClick = () => {
		let v = this.propertyValue
		if (this.getOldValue() === this.propertyValue) {
			v = "none"
		}
		this.memory.set(this.propertyName, v);
		this.editor.setProperty([this.propertyName], v, true);
		this.forceUpdate()
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
