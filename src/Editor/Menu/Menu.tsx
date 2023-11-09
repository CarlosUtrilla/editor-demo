import * as React from "react";
import { prefix } from "../utils/utils";
import MoveToolIcon from "./MoveToolIcon";
import "./Menu.css";
import TextIcon from "./TextIcon";
import Icon from "./Icon";
import Editor from "../Editor";
import KeyboardIcon from "./KeyboardIcon";
import PrintAreaIcon from "./PrintAreaIcon";
import ImageIcon from "./ImageIcon";
import Divider from "./Divider";
import ShapesIcon from "./ShapesIcon";
import { CompleteMenu, HomeMenu } from "./MenusList";

const MENUS: Array<typeof Icon> = [
    MoveToolIcon,
    Divider,
    PrintAreaIcon,
    ShapesIcon,
    TextIcon,
    ImageIcon,
    Divider,
];
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
                <div className={prefix("menu-bottom")}>
                    <KeyboardIcon editor={this.props.editor} />
                </div>
            </div>
        );
    }
    public renderMenus() {
        const selected = this.state.selected;
        const menuRefs = this.menuRefs;
        const editor = this.props.editor;
        const menu =  HomeMenu
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
