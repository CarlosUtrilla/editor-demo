import * as React from "react";
import Icon from "../Icon";
import AlignLeftIcon from "./Aligns/AlignLeftIcon";

const subMenu = [
	{ children: AlignLeftIcon, id: "AlignLeftIcon" },
]
export default class AlignText extends Icon {
  	public static id = subMenu.map(s=> s.id);
		public renderIcon() {
			const lastShape = this.memory.get("lastShape");
			const selected = subMenu.find(s => this.props.selectedId === s.id || lastShape === s.id);
			if (selected) {
				const { children: IconSelected } = selected
				return <IconSelected editor={this.editor} />
			}
			return (
					<i className="fa-solid fa-align-left"></i>
			);
		}
	public onClick= () => {};
    public renderSubIcons() {
			return subMenu.map((s) => {
				return this.renderSubIcon(s.children, s.id, this.props.selectedId === s.id)
			})
    }
    public onSubSelect(id: string) {
        this.memory.set("lastShape", id);
        this.eventBus.requestTrigger("update");

        this.forceUpdate();
    }
}
