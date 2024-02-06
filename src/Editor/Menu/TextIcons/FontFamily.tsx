import * as React from "react";
import Icon from "../Icon";
import { Autocomplete, TextField } from "@mui/material";


export default class FontFamily extends Icon {
	public static id = "FontFamily";
	public static width = 93;
	public propertyName = "font-family";
	public propertyValue = "Roboto"
	public state = {
		selected: false,
		inputValue: this.propertyValue
	}
	public render() {
		const value = this.getOldValue()
		const fonts = this.editor.fontsManager.fonts;
			return (
				<div className="scene-font-family">
					<Autocomplete
						loading={fonts.length <= 0}
						options={fonts.map(f => ({ label: f.family, ...f }))}
						renderInput={(params) => (
							<TextField
								{...params}
								variant="standard"
								onFocus={()=> this.editor.keyManager.stop()}
							/>
						)}
						size="small"
						inputValue={this.state.inputValue}
						onInputChange={(_, value) => this.setState({ inputValue: value })}
						value={value as any}
						isOptionEqualToValue={(opt) => opt.family === value}
						onChange={(event: any, newValue) => {
							this.onChange(newValue?.family || this.propertyValue);
							this.editor.fontsManager.loadFonts([newValue?.family || this.propertyValue])
						}}
						fullWidth
						disableClearable
					/>
				</div>
			);
	}
	public renderIcon() {	}
	public onClick= () => {};
	public getOldValue(){
		const [oldValue] = this.moveableData.getProperties([[this.propertyName]], [this.propertyValue])
		return oldValue as string
	}
	public onChange = (v: string) => {
		this.memory.set(this.propertyName, v);
		this.editor.setProperty([this.propertyName], v, true);
		this.forceUpdate()
		this.editor.forceUpdate()
	};
	private setTargets = () => {
		this.forceUpdate();
		this.editor.forceUpdate()
  }
	componentDidMount() {
		this.editor.eventBus.on("setSelectedTargets", this.setTargets);
		this.setState({ inputValue: this.getOldValue()})
	}
	componentWillUnmount(): void {
		this.editor.eventBus.off("setSelectedTargets", this.setTargets);
	}
}
