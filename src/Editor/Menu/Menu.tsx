import * as React from "react";
import { prefix } from "../utils/utils";
import Icon from "./Icon";
import Editor from "../Editor";
import { CompleteMenu, HomeMenu, ShapesMenu, TextMenu } from "./MenusList";
import "./Menu.css";


export default class Menu extends React.PureComponent<{
    editor: Editor,
    onSelect: (id: string) => any
}> {
    public state = {
        selected: "MoveTool",
    };
    public menuRefs: Array<React.RefObject<Icon>> = [];
    public render() {
        return (
            <div className={prefix("menu")}>
                {this.renderMenus()}
                {/* <div className={prefix("menu-bottom")}>
                    <KeyboardIcon editor={this.props.editor} />
                </div> */}
            </div>
        );
    }
    public renderMenus() {
        let selected = this.state.selected;
        const menuRefs = this.menuRefs;
        const editor = this.props.editor;
        const viewport = editor.getViewport()
        let menu = HomeMenu
        const targets = editor.getSelectedTargets().map(target => viewport.getInfoByElement(target))
        if (targets.length <= 0) {
            const resetProperties = [
                ["font-weight","normal"],
                ["font-size", "16px"],
                ["font-style", "normal"],
                ["text-decoration", "none"],
                ["font-family", "Avenir"],
                ["text-align", "left"]
            ]
            resetProperties.forEach(p => {
                editor.memory.set(p[0], p[1])
            })
        }
        const isTargetsSame = targets.every(t => t.name === targets[0].name)
        if ((isTargetsSame && targets.length > 0 )|| selected !== "MoveTool") {
            const target = selected !== "MoveTool" ? selected: targets[0].name.replaceAll(/\(|\)/g, '')
            selected = target
            if (["Text"].includes(target)) {
                menu = TextMenu
            }
            if (["Circle","Oval","Rect","RoundRect"].includes(target)) {
                menu = ShapesMenu
            }
        }
        return menu
            .filter(m => !editor.props.isAdmin ? m.id !== "PrintArea" : true)
            .map((MenuClass, i) => {
                const id = MenuClass.id;
                if (!menuRefs[i]) {
                    menuRefs[i] = React.createRef();
                }
                if (id === "Divider") {
                    return (
                        <MenuClass key={i} editor={editor}/>
                    )
                }
                return (
                    <MenuClass
                        ref={menuRefs[i]}
                        key={i}
                        editor={editor}
                        selected={Array.isArray(id) ? id.includes(selected): selected === id}
                        selectedId={selected}
                        onSelect={this.select}
                    />
                );
        });
    }
    public select = (id: string) => {
        this.setState({
            selected: id,
        });
        this.props.onSelect(id);
    }
    public getSelected(): typeof Icon | undefined {
        const selected = this.state.selected;
        return CompleteMenu.filter(m => m.id === selected)[0];
    }
    public blur() {
        this.menuRefs.forEach(ref => {
            if (!ref.current) {
                return;
            }
            ref.current.blur();
        });
    }
}
