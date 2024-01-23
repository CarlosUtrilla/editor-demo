import * as React from "react";
import { prefix } from "../utils/utils";
import Icon from "./Icon";
import Editor from "../Editor";
import { CompleteMenu, HomeMenu, PrintAreaMenu, TextMenu } from "./MenusList";
import "./Menu.css";
import DropdownIcon from "./DropdownIcon";


export default class Menu extends React.PureComponent<{
    editor: Editor,
    onSelect: (id: string) => any
}> {
    public state = {
        selected: "MoveTool",
        width: 0
    };
    public menuRefs: Array<React.RefObject<Icon>> = [];
    public menuContainerRef = React.createRef<HTMLDivElement>();
    public render() {
        return (
            <div className={prefix("menu")} ref={this.menuContainerRef}>
                {this.renderMenus()}
                {/* <div className={prefix("menu-bottom")}>
                    <KeyboardIcon editor={this.props.editor} />
                </div> */}
            </div>
        );
    }
    public renderMenus() {
        let selected = this.state.selected;
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
            if (["PrintArea"].includes(target)) {
                menu = PrintAreaMenu
            }
        }

        menu = menu
            .filter(m => !editor.props.isAdmin ? m.id !== "PrintArea" : true)
        const maxWidth = this.state.width
        let currentWidth = 0;

        const filteredMenu: (typeof Icon)[] = []
        const dropedMenu: (typeof Icon)[] = []
        menu.forEach((menuItem, i) => {
            if (maxWidth > (currentWidth + (i + 1 < menu.length ? menuItem.width : 0)))  {
                filteredMenu.push(menuItem)
                currentWidth += menuItem.width
            } else {
                currentWidth += menuItem.width
                dropedMenu.push(menuItem)
            }
        })

        return <>
            {filteredMenu.map((MenuClass, i) => {
                return this.renderIcon(MenuClass, i, selected)
            })}
            {
                dropedMenu.length > 0 &&
                <DropdownIcon>
                    {dropedMenu.map((MenuClass, i) => {
                        return this.renderIcon(MenuClass, i, selected)
                    })}
                </DropdownIcon>
            }
        </>
    }

    public renderIcon(MenuClass: typeof Icon, i: number, selected: string) {
        const menuRefs = this.menuRefs;
        const editor = this.props.editor;
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
    updateDimensions = () => {
        const container = this.menuContainerRef.current!
        let width = container.clientWidth || 0
        width = width - (parseFloat(window.getComputedStyle(container).paddingLeft) + parseFloat(window.getComputedStyle(container).paddingRight));
        this.setState({ width });
    };
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
    componentDidMount(): void {
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions()
        this.forceUpdate()
    }
}
