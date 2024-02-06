import * as React from "react";
import Icon from "../Icon";
import { Autocomplete, TextField } from "@mui/material";


const sizes = [
	"6px",
	"7px",
	"8px",
	"9px",
	"10px",
	"11px",
	"12px",
	"14px",
	"16px",
	"18px",
	"24px"
]
export default class FontSize extends Icon {
	public static id = "FontSize";
	public static width = 98;
	public propertyName = "font-size";
	public propertyValue = "16px"
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
					<Autocomplete
						options={sizes}
						value={value}
						onChange={(_,v)=> this.onChange(v)}
						renderInput={(params) => (
							<TextField
								{...params}
								variant="standard"
								onFocus={()=> this.editor.keyManager.stop()}
							/>
						)}
						size="small"
						freeSolo
						disableClearable
						fullWidth
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
		const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["16px"])
		return oldValue as string
	}
	public onChange = (v: string) => {
		let parsedValue:any = parseInt(v)
		parsedValue = parsedValue+"px"
		this.memory.set(this.propertyName, parsedValue);
		this.editor.setProperty([this.propertyName], parsedValue, true);
		this.forceUpdate()
		this.editor.forceUpdate()
	};
	private setTargets = () => {
		this.forceUpdate();
		this.editor.forceUpdate()
  }
	componentDidMount(): void {
		this.editor.eventBus.on("setSelectedTargets", this.setTargets);
	}
	componentWillUnmount(): void {
		this.editor.eventBus.off("setSelectedTargets", this.setTargets);
	}
}
