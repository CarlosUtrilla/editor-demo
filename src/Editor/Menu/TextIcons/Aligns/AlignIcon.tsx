import * as React from "react";
import Icon from "../../Icon";
import AlignCenterIcon from "./AlignCenter";
import AlignLeftIcon from "./AlignLeftIcon";
import AlignRightIcon from "./AlignRightIcon";
import AlignJustifyIcon from "./AlignJustify";
import { prefix } from "../../../utils/utils";

const subMenu = [
	{ children: AlignLeftIcon, id: "AlignLeftIcon", value: "left" },
	{ children: AlignCenterIcon, id: "AlignCenterIcon", value: "center" },
	{ children: AlignRightIcon, id: "AlignRightIcon", value: "right" },
	{ children: AlignJustifyIcon, id: "AlignJustifyIcon", value: "justify"},
]
export default class AlignIcon extends Icon {
	public static id = "AlignIcon";
	public propertyName = "text-align"
	public renderIcon() {
		const value = this.memory.get("text-align");
		const selected = subMenu.find(s => value === s.value);
		if (selected) {
			const { children: IconSelected } = selected
			return <IconSelected editor={this.editor} hideSelected/>
		}
		return (
				<i className="fa-solid fa-align-right fa-rotate-180"></i>
		);
	}
	public renderSubIcons() {
		const value = this.memory.get("text-align");
		return subMenu.map((s) => {
			return this.renderSubIcon(s.children, s.id, value === s.value)
		})
	}
	public onSubSelect(id: string) {
		this.forceUpdate()
	}
	public onClick = () => {
		this.focusSub()
	}
	 public renderSubIcon(IconClass: typeof Icon, id: string, isSelect: boolean) {
			return (
					<div
							key={id}
							className={prefix("icon", "sub-icon", isSelect ? "selected" : "")}
							onClick={() => {
								this.focusSub()
								this.forceUpdate()
							}}
					>
							<IconClass editor={this.props.editor} selected={isSelect}/>
					</div>
			);
	 }

	 public componentDidMount() {
		 const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["left"])
		 this.editor.memory.set(this.propertyName, oldValue)
		 this.forceUpdate()
	 }
}
