import * as React from "react";
import Icon from "../Icon";
import SelectBox from "../../Inputs/SelectBox";


const fontFamily = [
	"Avenir",
	"sans-serif",
]

export default class FontFamily extends Icon {
	public static id = "FontFamily";
	public static width = 92;
	public propertyName = "font-family";
	public propertyValue = "Avenir"
	public render() {
		const value = this.getOldValue()

		const fontFamilyList = this.editor.props.fontFamily ||fontFamily;
			return (
				<div className="scene-font-family">
					<SelectBox
						onChange={this.onChange}
						options={fontFamilyList.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))}
						value={value}
					/>
				</div>
			);
	}
	public renderIcon() {	}
	public onClick= () => {};
	public getOldValue(){
		const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["Avenir"])
		return oldValue as string
	}
	public onChange = (v: string) => {
		this.memory.set(this.propertyName, v);
		this.editor.setProperty([this.propertyName], v, true);
		this.forceUpdate()
	};
	private setTargets = () => {
    this.forceUpdate();
  }
	componentDidMount(): void {
		this.editor.eventBus.on("setSelectedTargets", this.setTargets);
	}
	componentWillUnmount(): void {
		this.editor.eventBus.off("setSelectedTargets", this.setTargets);
	}
}
