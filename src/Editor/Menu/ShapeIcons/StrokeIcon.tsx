import * as React from "react";
import Icon from "../Icon";
import RectIcon from "./RectIcon";
import RoundRectIcon from "./RoundRectIcon";
import CircleIcon from "./CircleIcon";

const subMenu = [
	{ children: <span>1px</span>, id: "1px" },
	{ children: <span>2px</span>, id: "2px" },
	{ children: <span>3px</span>, id: "24px" },
]
export default class StrokeIcon extends Icon {
  	public static id = subMenu.map(s=> s.id);
		public renderIcon() {
			return (
					<svg className="fa-rotate-180" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12"><path fill="#000" fill-opacity="1" fill-rule="nonzero" stroke="none" d="M0 0h12v1H0V0zm0 4h12v2H0V4zm12 5H0v3h12V9z"></path></svg>

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
