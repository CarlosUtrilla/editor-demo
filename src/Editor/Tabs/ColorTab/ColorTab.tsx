import * as React from "react";
import Tab from "../Tab";
import { prefix } from "../../utils/utils";
import ColorBox from "../../Inputs/ColorBox";
import TabInputBox from "../../Inputs/TabInputBox";


export default class ColorTab extends Tab {
    public static id = "Colors";
    public title = "Colors";

    public renderTab() {
        const frames = this.moveableData.getSelectedFrames();
        let backgroundColor = this.memory.get("background-color");
        let color = this.memory.get("color");
        let borderColor = this.memory.get("border-color");

        if (frames.length) {
            const backgroundColors = frames.map(frame => frame.get("background-color"));
            const colors = frames.map(frame => frame.get("color"));
            const borderColors = frames.map(frame => frame.get("border-color"));

            backgroundColor = backgroundColors.filter(color => color)[0] || "transparent";
            color = colors.filter(color => color)[0] || "#333";
            borderColor = borderColors.filter(color => color)[0] || "#000"
        }

        return <div className={prefix("current-tab")}>
            <TabInputBox type={"full"}
                label="Background Color"
                input={ColorBox}
                value={backgroundColor}
                updateValue={true}
                onChange={this.onChangeBackgroundColor} />
            <TabInputBox type={"full"}
                label="Text Color"
                input={ColorBox}
                value={color}
                updateValue={true}
                onChange={this.onChangeTextColor} />
            <TabInputBox type={"full"}
                label="Border Color"
                input={ColorBox}
                value={borderColor}
                updateValue={true}
                onChange={this.onChangeBorderColor} />
        </div>;
    }
    public componentDidMount() {
        this.addEvent("render", this.onRender as any);
        this.addEvent("setSelectedTargets", this.onRender as any);
    }
    public onChangeBackgroundColor = (v: string) => {
        this.memory.set("background-color", v);
        this.editor.setProperty(["background-color"], v);
    }
    public onChangeTextColor = (v: string) => {
        this.memory.set("color", v);
        this.editor.setProperty(["color"], v);
    }
     public onChangeBorderColor = (v: string) => {
        this.memory.set("border-color", v);
        this.editor.setProperty(["border-color"], v);
    }
    private onRender = () => {
        this.forceUpdate();
    }
}
