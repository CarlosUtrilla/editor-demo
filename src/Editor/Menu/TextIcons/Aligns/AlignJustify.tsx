import * as React from "react";
import Icon from "../../Icon";

export default class AlignJustifyIcon extends Icon {
	public static id = "AlignJustifyIcon";
	public propertyName = "text-align"
	public propertyValue = "justify"
	public renderIcon() {
			return (
					<i className="fa-solid fa-align-justify fa-rotate-180"></i>
			);
	}

	public getOldValue(){
		const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["left"])
		return oldValue as string
	}
	public onClick = () => {
		let v = this.propertyValue
		this.memory.set(this.propertyName, v);
		this.editor.setProperty([this.propertyName], v, true);
		this.eventBus.trigger("setSelectedTargets");
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
		this.editor.eventBus.on("alignUpdate", this.setTargets);
	}
	componentWillUnmount(): void {
		this.editor.eventBus.off("setSelectedTargets", this.setTargets);
		this.editor.eventBus.off("alignUpdate", this.setTargets);
	}
}
