import * as React from "react";
import Icon from "../Icon";
import SelectBox from "../../Inputs/SelectBox";


const sizes = [
	"10px",
	"11px",
	"12px",
	"14px",
	"18px",
	"24px"
]
export default class FontSize extends Icon {
	public static id = "FontSize";
	public propertyName = "font-size";
	public propertyValue = "14px"
	public render() {
		const value = this.getOldValue()
		const parsedValue = parseInt((value || "").replace("px", ""))
		const sizesList:string[] = JSON.parse(JSON.stringify(sizes))
		if (!sizesList.includes(value)) { 
			sizesList.push(value)
		}
			return (
				<div className="scene-font-size">
					<button
						onClick={() => { this.onChange(`${parsedValue-1}px`)}}
					>
						<i className="fa-solid fa-minus"></i>
					</button>
					<SelectBox
						onChange={this.onChange}
						options={sizesList.sort((a, b) => parseInt(a) - parseInt(b))}
						value={value}
					/>
					<button
						onClick={() => { this.onChange(`${parsedValue+1}px`)}}
					>
						<i className="fa-solid fa-plus"></i>
					</button>
				</div>
			);
	}
	public renderIcon() {	}
	public onClick = () => { };
	public getOldValue(){
		const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["14px"])
		return oldValue as string
	}
	public onChange = (v: string) => {
		this.console.log(v)
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
