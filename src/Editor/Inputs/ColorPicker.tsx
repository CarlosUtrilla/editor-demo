import * as React from "react";
import Input from "./Input";
import { IObject } from "@daybrush/utils";
import { ColorResult, SketchPicker } from "react-color";
const presetColors = ['transparent','#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
export default class ColorPicker extends Input {
    protected inputAttributes: IObject<any> = {};
    public state = {
        color: "rgba(255, 255, 255, 255)",
    }
    public render() {
        const color = this.state.color;

        return (
            <SketchPicker
                width={"200px"}
                color={color}
                onChange={this.onChange}
                onChangeComplete={this.onChangeComplete}
                presetColors={presetColors}
            />
        );
    }
    public componentDidUpdate() { }
    public setValue(v: string) {
        this.setState({
            color: v,
        });
    }
    public getValue() {
        return this.state.color;
    }
    private onChange = (e: ColorResult) => {
        const { r, g, b, a } = e.rgb;

        this.setState({
            color: `rgba(${r}, ${g}, ${b}, ${a})`,
        });
    }
    private onChangeComplete = (e: ColorResult) => {
        const { r, g, b, a } = e.rgb;

        this.props.onChange(`rgba(${r}, ${g}, ${b}, ${a})`);
    }
}
