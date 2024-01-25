import * as React from "react";
import Icon from "../../Icon";

export default class AlignRightIcon extends Icon {
	public static id = "AlignRightIcon";
	public propertyName = "text-align"
	public propertyValue = "right";
	public renderIcon() {
			return (
				<i className="fa-solid fa-align-left fa-rotate-180"></i>
			);
	}
	public onClick = () => {
		let v = this.propertyValue
		this.memory.set(this.propertyName, v);
		this.editor.setProperty([this.propertyName], v, true);
		this.eventBus.trigger("setSelectedTargets");
	};

	private setTargets = () => {
    this.forceUpdate();
  }

	componentDidMount(): void {
		this.editor.eventBus.on("setSelectedTargets", this.setTargets);
		this.editor.eventBus.on("alignUpdate", this.setTargets);
	}
	componentWillUnmount(): void {
		this.editor.eventBus.off("setSelectedTargets", this.setTargets);
		this.editor.eventBus.off("alignUpdate", this.setTargets);
	}
}
