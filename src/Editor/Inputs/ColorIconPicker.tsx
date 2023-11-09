import * as React from "react";
import Input from "./Input";
import { IObject, } from "@daybrush/utils";
import { prefix } from "../utils/utils";
import ColorPicker from "./ColorPicker";
import "./ColorBox.css";

export default class ColorIconPicker extends Input<{
	icon: React.ReactElement,
}, {}, HTMLDivElement> {
    protected inputAttributes: IObject<any> = {};
    protected colorInput = React.createRef<ColorPicker>();
    protected textInput = React.createRef<HTMLInputElement>();
    public state = {
        display: "none",
        color: this.props.value || "#fff",
    };
    public render() {
        return (
            <div
                className="color-picker"
                onClick={this.onClick}
                onBlur={this.onBlur}
                ref={this.input}
            >
                <input style={{ opacity: 0}} ref={this.textInput} onFocus={this.onFocus}/>
                {this.props.icon}
                <div className="color-preview" style={{ background: this.props.value }}></div>
                {this.renderPicker()}
            </div>
        );
    }
    public renderPicker() {
        const {
            display,
        } = this.state;

        if (display === "none") {
            return;
        }
        return <div className={prefix("color-picker")}
            onMouseDown={this.onDragStart} onTouchStart={this.onDragStart}
            style={{
                display,
            }}>
            <ColorPicker
                ref={this.colorInput}
                onChange={this.onChange} />
        </div>;
    }
    public getValue() {
        return this.props.value
    }
    public onFocus = () => {
        this.setState({
            display: "block",
        });
    }
    public onBlur = (e: any) => {
        const relatedTarget = e.nativeEvent.relatedTarget;

        if (this.input.current!.contains(relatedTarget)) {
            return;
        }
        this.setState({
            display: "none",
        });
    }
    private onChange = (v: string) => {
        this.props.onChange(v);
    }
    private onDragStart = (e: any) => {
        if (e.target.tagName === "INPUT") {
            return;
        }
        e.preventDefault();
    }
    public onClick = () => {
        this.textInput.current!.focus();
    }
}
