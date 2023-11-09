import * as React from "react";
import Icon from "./Icon";
import RectIcon from "./RectIcon";
import RoundRectIcon from "./RoundRectIcon";
import CircleIcon from "./CircleIcon";

const subMenu = [
	{ children: RectIcon, id: "Rect" },
	{ children: RoundRectIcon, id: "RoundRect" },
	{ children: CircleIcon, id: "Circle"},
]
export default class ShapesIcon extends Icon {
  	public static id = subMenu.map(s=> s.id);
		public renderIcon() {
			const lastShape = this.memory.get("lastShape");
			const selected = subMenu.find(s => this.props.selectedId === s.id || lastShape === s.id);
			if (selected) {
				const { children: IconSelected } = selected
				return <IconSelected editor={this.editor} />
			}
			return (
					<i className="fa-sharp fa-regular fa-square"></i>
			);
    }
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
