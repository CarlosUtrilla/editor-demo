import {
  DATA_SCENA_ELEMENT_ID,
  TYPE_SCENA_LAYERS,
  Viewport,
  __decorateClass,
  __toESM,
  checkImageLoaded,
  checkInput,
  connectEditorProps,
  getContentElement,
  getId,
  getIds,
  getParnetScenaElement,
  getScenaAttrs,
  makeScenaFunctionComponent,
  prefix,
  require_react
} from "./chunk-G72FDOR7.mjs";

// src/Editor/Editor.tsx
var React35 = __toESM(require_react());
import InfiniteViewer from "react-infinite-viewer";
import Guides from "@scena/react-guides";
import Selecto from "react-selecto";

// src/Editor/Menu/Menu.tsx
var React32 = __toESM(require_react());

// src/Editor/Menu/Divider.tsx
var React2 = __toESM(require_react());

// src/Editor/Menu/Icon.tsx
var React = __toESM(require_react());
import { camelize } from "@daybrush/utils";
var Icon = class extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.keys = [];
    this.subContainer = React.createRef();
    this.state = {
      selected: false
    };
    this.onClick = () => {
      const onSelect = this.props.onSelect;
      let iconId = this.constructor.id;
      if (Array.isArray(iconId)) {
        const lastShape = this.memory.get("lastShape");
        const find = iconId.find((s) => s === this.props.selectedId || s === lastShape);
        if (!find)
          iconId = iconId[0];
        else
          iconId = find;
      }
      if (onSelect) {
        onSelect(iconId);
        this.focusSub();
      }
    };
    this.onSubClick = (e) => {
      e.stopPropagation();
    };
    this.blur = () => {
      const subContainer = this.subContainer.current;
      if (!subContainer) {
        return;
      }
      subContainer.style.display = "none";
    };
  }
  render() {
    const iconId = this.constructor.id;
    const selected = this.props.selected || this.state.selected;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        className: prefix("icon", selected ? "selected" : "", iconId === "Divider" ? "divider" : ""),
        onClick: this.onClick
      },
      this.renderIcon(),
      this.renderSubContainer()
    );
  }
  renderSubContainer() {
    const subIcons = this.renderSubIcons();
    if (!subIcons.length) {
      return;
    }
    return [
      /* @__PURE__ */ React.createElement("div", { key: "extends-icon", className: prefix("extends-icon") }),
      this.props.selected && /* @__PURE__ */ React.createElement(
        "div",
        {
          key: "extends-container",
          className: prefix("extends-container"),
          ref: this.subContainer,
          onClick: this.onSubClick
        },
        subIcons
      )
    ];
  }
  renderSubIcons() {
    return [];
  }
  renderSubIcon(IconClass, id, isSelect) {
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: id,
        className: prefix("icon", "sub-icon", isSelect ? "selected" : ""),
        onClick: () => {
          this.props.onSelect(id);
          this.onSubSelect(id);
        }
      },
      /* @__PURE__ */ React.createElement(IconClass, { editor: this.props.editor, selected: false }),
      /* @__PURE__ */ React.createElement("div", { className: prefix("sub-icon-label") }, camelize(` ${id}`))
    );
  }
  focusSub() {
    const subContainer = this.subContainer.current;
    if (!subContainer) {
      return;
    }
    if (subContainer.style.display === "block") {
      subContainer.style.display = "none";
    } else {
      subContainer.style.display = "block";
    }
  }
  onSubSelect(id) {
  }
  componentDidMount() {
    const keys = this.keys;
    if (keys.length) {
      this.keyManager.add([
        {
          shortcut: keys.join("+"),
          handler: (e) => {
            this.onClick();
          }
        }
      ]);
    }
  }
};
Icon.makeThen = () => {
};
Icon = __decorateClass([
  connectEditorProps
], Icon);

// src/Editor/Menu/Divider.tsx
var Divider = class extends Icon {
  renderIcon() {
    return /* @__PURE__ */ React2.createElement("i", { className: "fa-light fa-pipe divider" });
  }
};
Divider.id = "Divider";

// src/Editor/Menu/ImageIcon.tsx
var React3 = __toESM(require_react());
var ImageIcon = class extends Icon {
  render() {
    return /* @__PURE__ */ React3.createElement(
      "label",
      {
        htmlFor: "image",
        className: prefix("icon", this.props.selected ? "selected" : ""),
        onClick: this.onClick
      },
      /* @__PURE__ */ React3.createElement(
        "input",
        {
          type: "file",
          id: "image",
          style: { display: "none" },
          name: "image",
          accept: "image/*",
          value: "",
          onChange: (e) => this.uploadImage(e, this.editor)
        }
      ),
      /* @__PURE__ */ React3.createElement("i", { className: "fa-solid fa-image" })
    );
  }
  renderIcon() {
  }
  async uploadImage(e, editor) {
    const file = e.target.files ? e.target.files[0] : void 0;
    editor.addImage(file);
  }
};
ImageIcon.id = "Image";
ImageIcon.maker = (memory) => ({
  tag: "img",
  attrs: {
    src: memory.get("imageUrl") || ""
  },
  style: {}
});

// src/Editor/Menu/MoveToolIcon.tsx
var React4 = __toESM(require_react());
var MoveToolIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.keys = ["v"];
  }
  renderIcon() {
    return /* @__PURE__ */ React4.createElement("i", { className: "fa-solid fa-arrow-pointer" });
  }
};
MoveToolIcon.id = "MoveTool";

// src/Editor/Menu/PrintAreaIcon.tsx
var React5 = __toESM(require_react());
var PrintAreaIcon = class extends Icon {
  renderIcon() {
    return /* @__PURE__ */ React5.createElement("i", { className: "fa-solid fa-square-dashed" });
  }
};
PrintAreaIcon.id = "PrintArea";
PrintAreaIcon.maker = (memory) => ({
  tag: "div",
  attrs: {},
  style: {
    "background-color": "transparent",
    "border-width": "2px",
    "border-style": "dashed",
    "border-color": memory.get("border-color") || "#000"
  }
});

// src/Editor/Menu/ShapeIcons/ShapesIcon.tsx
var React9 = __toESM(require_react());

// src/Editor/Menu/ShapeIcons/RectIcon.tsx
var React6 = __toESM(require_react());
var RectIcon = class extends Icon {
  renderIcon() {
    return /* @__PURE__ */ React6.createElement("i", { className: "fa-sharp fa-regular fa-square" });
  }
};
RectIcon.id = "Rect";
RectIcon.maker = (memory) => ({
  tag: "div",
  attrs: {},
  style: {
    "background-color": memory.get("background-color"),
    "border-color": memory.get("border-color"),
    "border-style": memory.get("border-style"),
    "border-width": memory.get("border-width")
  }
});

// src/Editor/Menu/ShapeIcons/RoundRectIcon.tsx
var React7 = __toESM(require_react());
var RoundRectIcon = class extends Icon {
  renderIcon() {
    return /* @__PURE__ */ React7.createElement("i", { className: "fa-regular fa-square" });
  }
};
RoundRectIcon.id = "RoundRect";
RoundRectIcon.maker = (memory) => ({
  tag: "div",
  attrs: {},
  style: {
    "background-color": memory.get("background-color"),
    "border-radius": "10px",
    "border-color": memory.get("border-color"),
    "border-style": memory.get("border-style"),
    "border-width": memory.get("border-width")
  }
});

// src/Editor/Menu/ShapeIcons/CircleIcon.tsx
var React8 = __toESM(require_react());
var CircleIcon = class extends Icon {
  renderIcon() {
    return /* @__PURE__ */ React8.createElement("i", { className: "fa-regular fa-circle" });
  }
};
CircleIcon.id = "Circle";
CircleIcon.maker = (memory) => ({
  tag: "div",
  attrs: {},
  style: {
    "background-color": memory.get("background-color"),
    "border-radius": "50%",
    "border-color": memory.get("border-color"),
    "border-style": memory.get("border-style"),
    "border-width": memory.get("border-width")
  }
});

// src/Editor/Menu/ShapeIcons/ShapesIcon.tsx
var subMenu = [
  { children: RectIcon, id: "Rect" },
  { children: RoundRectIcon, id: "RoundRect" },
  { children: CircleIcon, id: "Circle" }
];
var ShapesIcon = class extends Icon {
  renderIcon() {
    const lastShape = this.memory.get("lastShape");
    const selected = subMenu.find((s) => this.props.selectedId === s.id || lastShape === s.id);
    if (selected) {
      const { children: IconSelected } = selected;
      return /* @__PURE__ */ React9.createElement(IconSelected, { editor: this.editor });
    }
    return /* @__PURE__ */ React9.createElement("i", { className: "fa-sharp fa-regular fa-square" });
  }
  renderSubIcons() {
    return subMenu.map((s) => {
      return this.renderSubIcon(s.children, s.id, this.props.selectedId === s.id);
    });
  }
  onSubSelect(id) {
    this.memory.set("lastShape", id);
    this.eventBus.requestTrigger("update");
    this.forceUpdate();
  }
};
ShapesIcon.id = subMenu.map((s) => s.id);

// src/Editor/Menu/TextIcons/TextIcon.tsx
var React10 = __toESM(require_react());
var TextIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.keys = ["t"];
  }
  renderIcon() {
    return /* @__PURE__ */ React10.createElement("i", { className: "fa-solid fa-text" });
  }
};
TextIcon.id = "Text";
TextIcon.maker = (memory) => ({
  tag: "div",
  attrs: {
    contenteditable: true
  },
  style: {
    color: memory.get("color"),
    "font-weight": memory.get("font-weight"),
    "font-style": memory.get("font-style"),
    "text-decoration": memory.get("text-decoration"),
    "font-family": memory.get("font-family")
  }
});
TextIcon.makeThen = (target, id, menu) => {
  target.focus();
  menu.select(id);
};

// src/Editor/Menu/CropIcon.tsx
var React13 = __toESM(require_react());
import { splitBracket } from "@daybrush/utils";

// src/Editor/Menu/ShapeIcons/OvalIcon.tsx
var React11 = __toESM(require_react());
var OvalIcon = class extends Icon {
  renderIcon() {
    return /* @__PURE__ */ React11.createElement("i", { className: "fa-regular fa-circle" });
  }
};
OvalIcon.id = "Oval";
OvalIcon.maker = (memory) => ({
  tag: "div",
  attrs: {},
  style: {
    "background-color": memory.get("background-color"),
    "border-radius": "50%",
    "border-color": memory.get("border-color"),
    "border-style": memory.get("border-style"),
    "border-width": memory.get("border-width")
  }
});

// src/Editor/Menu/ShapeIcons/PolygonIcon.tsx
var React12 = __toESM(require_react());
var PolygonIcon = class extends Icon {
  renderIcon() {
    return /* @__PURE__ */ React12.createElement("svg", { viewBox: "0 0 73 73" }, /* @__PURE__ */ React12.createElement(
      "path",
      {
        d: "M 20,15 L 10,35 L 20,55 L 35,45 L 40, 50 L 55,31 L 41,15 L 30, 25 Z",
        fill: "#555",
        strokeLinejoin: "round",
        strokeWidth: "3",
        stroke: "#fff"
      }
    ));
  }
};
PolygonIcon.id = "Polygon";

// src/Editor/Menu/CropIcon.tsx
var CropIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.keys = ["c"];
  }
  renderIcon() {
    return /* @__PURE__ */ React13.createElement("svg", { viewBox: "0 0 80 80" }, /* @__PURE__ */ React13.createElement(
      "path",
      {
        d: "M25,10L25,50L65,50   M10,25L50,25L50,65",
        style: { stroke: "white", strokeWidth: 5, fill: "none" }
      }
    ));
  }
  renderSubIcons() {
    const frame = this.moveableData.getSelectedFrames()[0];
    let cropType = this.memory.get("crop") || "inset";
    if (frame) {
      const clipPath = frame.get("clip-path") || frame.get("clip");
      if (clipPath) {
        cropType = splitBracket(clipPath).prefix;
      }
    }
    return [
      this.renderSubIcon(RectIcon, "inset", cropType === "inset"),
      this.renderSubIcon(RectIcon, "rect", cropType === "rect"),
      this.renderSubIcon(CircleIcon, "circle", cropType === "circle"),
      this.renderSubIcon(OvalIcon, "ellipse", cropType === "ellipse"),
      this.renderSubIcon(PolygonIcon, "polygon", cropType === "polygon")
    ];
  }
  onSubSelect(id) {
    const moveableData = this.moveableData;
    const frame = moveableData.getSelectedFrames()[0];
    if (frame) {
      const clipPath = frame.get("clip-path") || frame.get("clip");
      if (clipPath) {
        const cropType = splitBracket(clipPath).prefix;
        if (id !== cropType) {
          const infos = moveableData.removeProperties("clip-path", "clip");
          this.historyManager.addAction("renders", { infos });
        }
      }
    }
    this.memory.set("crop", id);
    this.eventBus.requestTrigger("update");
    this.forceUpdate();
  }
};
CropIcon.id = "Crop";

// src/Editor/Menu/RedoUndo/UndoIcon.tsx
var React14 = __toESM(require_react());
var UndoIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.onClick = () => {
      this.editor.historyManager.undo();
    };
  }
  renderIcon() {
    return /* @__PURE__ */ React14.createElement("i", { className: "fa-solid fa-rotate-left" });
  }
};
UndoIcon.id = "Undo";

// src/Editor/Menu/RedoUndo/RedoIcon.tsx
var React15 = __toESM(require_react());
var RedoIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.onClick = () => {
      this.editor.historyManager.redo();
    };
  }
  renderIcon() {
    return /* @__PURE__ */ React15.createElement("i", { className: "fa-solid fa-rotate-right" });
  }
};
RedoIcon.id = "Redo";

// src/Editor/Menu/TextIcons/TextColorIcon.tsx
var React19 = __toESM(require_react());

// src/Editor/Inputs/ColorIconPicker.tsx
var React18 = __toESM(require_react());

// src/Editor/Inputs/Input.tsx
var React16 = __toESM(require_react());
var Input = class extends React16.PureComponent {
  constructor() {
    super(...arguments);
    this.input = React16.createRef();
  }
  getValue() {
    return;
  }
  setValue(value) {
  }
  componentDidMount() {
    const props = this.props;
    props.updateValue && this.setValue(props.value);
  }
  componentDidUpdate() {
    const props = this.props;
    props.updateValue && this.setValue(props.value);
  }
};

// src/Editor/Inputs/ColorPicker.tsx
var React17 = __toESM(require_react());
import { SketchPicker } from "react-color";
var presetColors = ["transparent", "#D0021B", "#F5A623", "#F8E71C", "#8B572A", "#7ED321", "#417505", "#BD10E0", "#9013FE", "#4A90E2", "#50E3C2", "#B8E986", "#000000", "#4A4A4A", "#9B9B9B", "#FFFFFF"];
var ColorPicker = class extends Input {
  constructor() {
    super(...arguments);
    this.inputAttributes = {};
    this.state = {
      color: "rgba(255, 255, 255, 255)"
    };
    this.onChange = (e) => {
      const { r, g, b, a } = e.rgb;
      this.setState({
        color: `rgba(${r}, ${g}, ${b}, ${a})`
      });
    };
    this.onChangeComplete = (e) => {
      const { r, g, b, a } = e.rgb;
      this.props.onChange(`rgba(${r}, ${g}, ${b}, ${a})`);
    };
  }
  render() {
    const color = this.state.color;
    return /* @__PURE__ */ React17.createElement(
      SketchPicker,
      {
        width: "200px",
        color,
        onChange: this.onChange,
        onChangeComplete: this.onChangeComplete,
        presetColors
      }
    );
  }
  componentDidUpdate() {
  }
  setValue(v) {
    this.setState({
      color: v
    });
  }
  getValue() {
    return this.state.color;
  }
};

// src/Editor/Inputs/ColorIconPicker.tsx
var ColorIconPicker = class extends Input {
  constructor() {
    super(...arguments);
    this.inputAttributes = {};
    this.colorInput = React18.createRef();
    this.textInput = React18.createRef();
    this.state = {
      display: "none",
      color: this.props.value || "#fff"
    };
    this.onFocus = () => {
      this.setState({
        display: "block"
      });
    };
    this.onBlur = (e) => {
      const relatedTarget = e.nativeEvent.relatedTarget;
      if (this.input.current.contains(relatedTarget)) {
        return;
      }
      this.setState({
        display: "none"
      });
    };
    this.onChange = (v) => {
      this.props.onChange(v);
    };
    this.onDragStart = (e) => {
      if (e.target.tagName === "INPUT") {
        return;
      }
      e.preventDefault();
    };
    this.onClick = () => {
      this.textInput.current.focus();
    };
  }
  render() {
    return /* @__PURE__ */ React18.createElement(
      "div",
      {
        className: "color-picker",
        onClick: this.onClick,
        onBlur: this.onBlur,
        ref: this.input
      },
      /* @__PURE__ */ React18.createElement("input", { style: { opacity: 0 }, ref: this.textInput, onFocus: this.onFocus }),
      this.props.icon,
      /* @__PURE__ */ React18.createElement("div", { className: "color-preview", style: { background: this.props.value } }),
      this.renderPicker()
    );
  }
  renderPicker() {
    const {
      display
    } = this.state;
    if (display === "none") {
      return;
    }
    return /* @__PURE__ */ React18.createElement(
      "div",
      {
        className: prefix("color-picker"),
        onMouseDown: this.onDragStart,
        onTouchStart: this.onDragStart,
        style: {
          display
        }
      },
      /* @__PURE__ */ React18.createElement(
        ColorPicker,
        {
          ref: this.colorInput,
          onChange: this.onChange
        }
      )
    );
  }
  getValue() {
    return this.props.value;
  }
};

// src/Editor/Menu/TextIcons/TextColorIcon.tsx
var TextColorIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.colorInput = React19.createRef();
    this.propertyName = "color";
    this.propertyValue = "#000";
    this.onChangeTextColor = (v) => {
      this.memory.set("color", v);
      this.editor.setProperty(["color"], v, true);
      this.forceUpdate();
    };
    this.onClick = () => {
      this.colorInput.current?.onClick();
    };
    this.setTargets = () => {
      this.forceUpdate();
    };
  }
  renderIcon() {
    const color = this.getOldValue() || "#000";
    return /* @__PURE__ */ React19.createElement(
      ColorIconPicker,
      {
        icon: /* @__PURE__ */ React19.createElement("i", { className: "fa-solid fa-a" }),
        onChange: this.onChangeTextColor,
        value: color,
        ref: this.colorInput
      }
    );
  }
  getOldValue() {
    const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["none"]);
    return oldValue;
  }
  componentDidMount() {
    this.onChangeTextColor(this.getOldValue());
    this.editor.eventBus.on("setSelectedTargets", this.setTargets);
  }
  componentWillUnmount() {
    this.editor.eventBus.off("setSelectedTargets", this.setTargets);
  }
};
TextColorIcon.id = "TextColor";

// src/Editor/Menu/TextIcons/BoldIcon.tsx
var React20 = __toESM(require_react());
var BoldIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.propertyName = "font-weight";
    this.propertyValue = "bold";
    this.onClick = () => {
      let v = this.propertyValue;
      if (this.getOldValue() === this.propertyValue) {
        v = "normal";
      }
      this.memory.set(this.propertyName, v);
      this.editor.setProperty([this.propertyName], v, true);
      this.forceUpdate();
    };
    this.setTargets = () => {
      this.forceUpdate();
    };
  }
  renderIcon() {
    return /* @__PURE__ */ React20.createElement("i", { className: "fa-solid fa-bold" });
  }
  getOldValue() {
    const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["normal"]);
    return oldValue;
  }
  loadFirtData() {
    if (this.getOldValue() === this.propertyValue) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  }
  componentDidUpdate() {
    this.loadFirtData();
  }
  componentDidMount() {
    this.loadFirtData();
    this.editor.eventBus.on("setSelectedTargets", this.setTargets);
  }
  componentWillUnmount() {
    this.editor.eventBus.off("setSelectedTargets", this.setTargets);
  }
};
BoldIcon.id = "TextBold";

// src/Editor/Menu/TextIcons/ItalicIcon.tsx
var React21 = __toESM(require_react());
var ItalicIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.propertyName = "font-style";
    this.propertyValue = "italic";
    this.onClick = () => {
      let v = this.propertyValue;
      if (this.getOldValue() === this.propertyValue) {
        v = "normal";
      }
      this.memory.set(this.propertyName, v);
      this.editor.setProperty([this.propertyName], v, true);
      this.forceUpdate();
    };
    this.setTargets = () => {
      this.forceUpdate();
    };
  }
  renderIcon() {
    return /* @__PURE__ */ React21.createElement("i", { className: "fa-solid fa-italic" });
  }
  getOldValue() {
    const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["normal"]);
    return oldValue;
  }
  loadFirtData() {
    if (this.getOldValue() === this.propertyValue) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  }
  componentDidUpdate() {
    this.loadFirtData();
  }
  componentDidMount() {
    this.loadFirtData();
    this.editor.eventBus.on("setSelectedTargets", this.setTargets);
  }
  componentWillUnmount() {
    this.editor.eventBus.off("setSelectedTargets", this.setTargets);
  }
};
ItalicIcon.id = "TextItalic";

// src/Editor/Menu/TextIcons/UnderlinedIcon.tsx
var React22 = __toESM(require_react());
var UnderlineIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.propertyName = "text-decoration";
    this.propertyValue = "underline";
    this.onClick = () => {
      let v = this.propertyValue;
      if (this.getOldValue() === this.propertyValue) {
        v = "none";
      }
      this.memory.set(this.propertyName, v);
      this.editor.setProperty([this.propertyName], v, true);
      this.forceUpdate();
    };
    this.setTargets = () => {
      this.forceUpdate();
    };
  }
  renderIcon() {
    return /* @__PURE__ */ React22.createElement("i", { className: "fa-solid fa-underline" });
  }
  getOldValue() {
    const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["none"]);
    return oldValue;
  }
  loadFirtData() {
    if (this.getOldValue() === this.propertyValue) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  }
  componentDidUpdate() {
    this.loadFirtData();
  }
  componentDidMount() {
    this.loadFirtData();
    this.editor.eventBus.on("setSelectedTargets", this.setTargets);
  }
  componentWillUnmount() {
    this.editor.eventBus.off("setSelectedTargets", this.setTargets);
  }
};
UnderlineIcon.id = "TextUnderline";

// src/Editor/Menu/TextIcons/FontFamily.tsx
var React24 = __toESM(require_react());

// src/Editor/Inputs/SelectBox.tsx
var React23 = __toESM(require_react());
import { isUndefined } from "@daybrush/utils";
var SelectBox = class extends Input {
  constructor() {
    super(...arguments);
    this.inputAttributes = {};
    this.onInput = (e) => {
      const ev = e.nativeEvent || e;
      if (!isUndefined(ev.data)) {
        return;
      }
      this.props.onChange(this.input.current.value);
    };
  }
  render() {
    const options = this.props.options || [];
    return /* @__PURE__ */ React23.createElement(
      "select",
      {
        ref: this.input,
        className: prefix("select"),
        ...this.inputAttributes,
        ...this.props.inputProps,
        value: this.props.value,
        defaultValue: this.props.value,
        onInput: this.onInput
      },
      options.map((value) => /* @__PURE__ */ React23.createElement("option", { key: value, value }, value))
    );
  }
  getValue() {
    return this.input.current.value;
  }
  setValue(value) {
    this.input.current.value = `${isUndefined(value) ? "" : value}`;
  }
};

// src/Editor/Menu/TextIcons/FontFamily.tsx
var fontFamily = [
  "Avenir",
  "sans-serif"
];
var FontFamily = class extends Icon {
  constructor() {
    super(...arguments);
    this.propertyName = "font-family";
    this.propertyValue = "Avenir";
    this.onClick = () => {
    };
    this.onChange = (v) => {
      this.memory.set(this.propertyName, v);
      this.editor.setProperty([this.propertyName], v, true);
      this.forceUpdate();
    };
    this.setTargets = () => {
      this.forceUpdate();
    };
  }
  render() {
    const value = this.getOldValue();
    const fontFamilyList = this.editor.props.fontFamily || fontFamily;
    return /* @__PURE__ */ React24.createElement("div", { className: "scene-font-family" }, /* @__PURE__ */ React24.createElement(
      SelectBox,
      {
        onChange: this.onChange,
        options: fontFamilyList.sort((a, b) => a.localeCompare(b, void 0, { sensitivity: "base" })),
        value
      }
    ));
  }
  renderIcon() {
  }
  getOldValue() {
    const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["Avenir"]);
    return oldValue;
  }
  componentDidMount() {
    this.editor.eventBus.on("setSelectedTargets", this.setTargets);
  }
  componentWillUnmount() {
    this.editor.eventBus.off("setSelectedTargets", this.setTargets);
  }
};
FontFamily.id = "FontFamily";

// src/Editor/Menu/TextIcons/FontSize.tsx
var React25 = __toESM(require_react());
var sizes = [
  "10px",
  "11px",
  "12px",
  "14px",
  "18px",
  "24px"
];
var FontSize = class extends Icon {
  constructor() {
    super(...arguments);
    this.propertyName = "font-size";
    this.propertyValue = "16px";
    this.onClick = () => {
    };
    this.onChange = (v) => {
      this.memory.set(this.propertyName, v);
      this.editor.setProperty([this.propertyName], v, true);
      this.forceUpdate();
    };
    this.setTargets = () => {
      this.forceUpdate();
    };
  }
  render() {
    const value = this.getOldValue();
    const parsedValue = parseInt((value || "").replace("px", ""));
    const sizesList = JSON.parse(JSON.stringify(sizes));
    if (!sizesList.includes(value)) {
      sizesList.push(value);
    }
    return /* @__PURE__ */ React25.createElement("div", { className: "scene-font-size" }, /* @__PURE__ */ React25.createElement(
      "button",
      {
        onClick: () => {
          this.onChange(`${parsedValue - 1}px`);
        }
      },
      /* @__PURE__ */ React25.createElement("i", { className: "fa-solid fa-minus" })
    ), /* @__PURE__ */ React25.createElement(
      SelectBox,
      {
        onChange: this.onChange,
        options: sizesList.sort((a, b) => parseInt(a) - parseInt(b)),
        value
      }
    ), /* @__PURE__ */ React25.createElement(
      "button",
      {
        onClick: () => {
          this.onChange(`${parsedValue + 1}px`);
        }
      },
      /* @__PURE__ */ React25.createElement("i", { className: "fa-solid fa-plus" })
    ));
  }
  renderIcon() {
  }
  getOldValue() {
    const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["16px"]);
    return oldValue;
  }
  componentDidMount() {
    this.editor.eventBus.on("setSelectedTargets", this.setTargets);
  }
  componentWillUnmount() {
    this.editor.eventBus.off("setSelectedTargets", this.setTargets);
  }
};
FontSize.id = "FontSize";

// src/Editor/Menu/TextIcons/Aligns/AlignLeftIcon.tsx
var React26 = __toESM(require_react());
var AlignLeftIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.propertyName = "text-align";
    this.propertyValue = "left";
    this.onClick = () => {
      let v = this.propertyValue;
      this.memory.set(this.propertyName, v);
      this.editor.setProperty([this.propertyName], v, true);
      this.eventBus.trigger("setSelectedTargets");
    };
    this.setTargets = () => {
      this.forceUpdate();
    };
  }
  renderIcon() {
    return /* @__PURE__ */ React26.createElement("i", { className: "fa-solid fa-align-right fa-rotate-180" });
  }
  getOldValue() {
    const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["left"]);
    return oldValue;
  }
  loadFirtData() {
    if (this.getOldValue() === this.propertyValue) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  }
  componentDidUpdate() {
    this.loadFirtData();
  }
  componentDidMount() {
    this.loadFirtData();
    this.editor.eventBus.on("setSelectedTargets", this.setTargets);
    this.editor.eventBus.on("alignUpdate", this.setTargets);
  }
  componentWillUnmount() {
    this.editor.eventBus.off("setSelectedTargets", this.setTargets);
    this.editor.eventBus.off("alignUpdate", this.setTargets);
  }
};
AlignLeftIcon.id = "AlignLeftIcon";

// src/Editor/Menu/TextIcons/Aligns/AlignRightIcon.tsx
var React27 = __toESM(require_react());
var AlignRightIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.propertyName = "text-align";
    this.propertyValue = "right";
    this.onClick = () => {
      let v = this.propertyValue;
      this.memory.set(this.propertyName, v);
      this.editor.setProperty([this.propertyName], v, true);
      this.eventBus.trigger("setSelectedTargets");
    };
    this.setTargets = () => {
      this.forceUpdate();
    };
  }
  renderIcon() {
    return /* @__PURE__ */ React27.createElement("i", { className: "fa-solid fa-align-left fa-rotate-180" });
  }
  getOldValue() {
    const [oldValue] = this.moveableData.getProperties([[this.propertyName]], [""]);
    return oldValue;
  }
  loadFirtData() {
    if (this.getOldValue() === this.propertyValue) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  }
  componentDidUpdate() {
    this.loadFirtData();
  }
  componentDidMount() {
    this.loadFirtData();
    this.editor.eventBus.on("setSelectedTargets", this.setTargets);
    this.editor.eventBus.on("alignUpdate", this.setTargets);
  }
  componentWillUnmount() {
    this.editor.eventBus.off("setSelectedTargets", this.setTargets);
    this.editor.eventBus.off("alignUpdate", this.setTargets);
  }
};
AlignRightIcon.id = "AlignRightIcon";

// src/Editor/Menu/TextIcons/Aligns/AlignCenter.tsx
var React28 = __toESM(require_react());
var AlignCenterIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.propertyName = "text-align";
    this.propertyValue = "center";
    this.onClick = () => {
      let v = this.propertyValue;
      this.memory.set(this.propertyName, v);
      this.editor.setProperty([this.propertyName], v, true);
      this.eventBus.trigger("setSelectedTargets");
    };
    this.setTargets = () => {
      this.forceUpdate();
    };
  }
  renderIcon() {
    return /* @__PURE__ */ React28.createElement("i", { className: "fa-solid fa-align-center fa-rotate-180" });
  }
  getOldValue() {
    const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["left"]);
    return oldValue;
  }
  loadFirtData() {
    if (this.getOldValue() === this.propertyValue) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  }
  componentDidUpdate() {
    this.loadFirtData();
  }
  componentDidMount() {
    this.loadFirtData();
    this.editor.eventBus.on("setSelectedTargets", this.setTargets);
    this.editor.eventBus.on("alignUpdate", this.setTargets);
  }
  componentWillUnmount() {
    this.editor.eventBus.off("setSelectedTargets", this.setTargets);
    this.editor.eventBus.off("alignUpdate", this.setTargets);
  }
};
AlignCenterIcon.id = "AlignCenterIcon";

// src/Editor/Menu/TextIcons/Aligns/AlignJustify.tsx
var React29 = __toESM(require_react());
var AlignJustifyIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.propertyName = "text-align";
    this.propertyValue = "justify";
    this.onClick = () => {
      let v = this.propertyValue;
      this.memory.set(this.propertyName, v);
      this.editor.setProperty([this.propertyName], v, true);
      this.eventBus.trigger("setSelectedTargets");
    };
    this.setTargets = () => {
      this.forceUpdate();
    };
  }
  renderIcon() {
    return /* @__PURE__ */ React29.createElement("i", { className: "fa-solid fa-align-justify fa-rotate-180" });
  }
  getOldValue() {
    const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["left"]);
    return oldValue;
  }
  loadFirtData() {
    if (this.getOldValue() === this.propertyValue) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  }
  componentDidUpdate() {
    this.loadFirtData();
  }
  componentDidMount() {
    this.loadFirtData();
    this.editor.eventBus.on("setSelectedTargets", this.setTargets);
    this.editor.eventBus.on("alignUpdate", this.setTargets);
  }
  componentWillUnmount() {
    this.editor.eventBus.off("setSelectedTargets", this.setTargets);
    this.editor.eventBus.off("alignUpdate", this.setTargets);
  }
};
AlignJustifyIcon.id = "AlignJustifyIcon";

// src/Editor/Menu/ShapeIcons/FillIcon.tsx
var React30 = __toESM(require_react());
var FillIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.colorInput = React30.createRef();
    this.propertyName = "background-color";
    this.propertyValue = "#4af";
    this.onChangeTextColor = (v) => {
      this.memory.set(this.propertyName, v);
      this.editor.setProperty([this.propertyName], v, true);
      this.forceUpdate();
    };
    this.onClick = () => {
      this.colorInput.current?.onClick();
    };
    this.setTargets = () => {
      this.forceUpdate();
    };
  }
  renderIcon() {
    const color = this.getOldValue() || "#4af";
    return /* @__PURE__ */ React30.createElement(
      ColorIconPicker,
      {
        icon: /* @__PURE__ */ React30.createElement("i", { className: "fa-solid fa-fill-drip" }),
        onChange: this.onChangeTextColor,
        value: color,
        ref: this.colorInput
      }
    );
  }
  getOldValue() {
    const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["#4af"]);
    return oldValue;
  }
  componentDidMount() {
    this.onChangeTextColor(this.getOldValue());
    this.editor.eventBus.on("setSelectedTargets", this.setTargets);
  }
  componentWillUnmount() {
    this.editor.eventBus.off("setSelectedTargets", this.setTargets);
  }
};
FillIcon.id = "FillIcon";

// src/Editor/Menu/ShapeIcons/BorderColorIcon.tsx
var React31 = __toESM(require_react());
var BorderColorIcon = class extends Icon {
  constructor() {
    super(...arguments);
    this.colorInput = React31.createRef();
    this.propertyName = "border-color";
    this.propertyValue = "transparent";
    this.onChangeTextColor = (v) => {
      this.memory.set(this.propertyName, v);
      this.editor.setProperty([this.propertyName], v, true);
      this.forceUpdate();
    };
    this.onClick = () => {
      this.colorInput.current?.onClick();
    };
    this.setTargets = () => {
      this.forceUpdate();
    };
  }
  renderIcon() {
    const color = this.getOldValue() || "transparent";
    return /* @__PURE__ */ React31.createElement(
      ColorIconPicker,
      {
        icon: /* @__PURE__ */ React31.createElement("i", { className: "fa-solid fa-pen" }),
        onChange: this.onChangeTextColor,
        value: color,
        ref: this.colorInput
      }
    );
  }
  getOldValue() {
    const [oldValue] = this.moveableData.getProperties([[this.propertyName]], ["transparent"]);
    return oldValue;
  }
  componentDidMount() {
    this.onChangeTextColor(this.getOldValue());
    this.editor.eventBus.on("setSelectedTargets", this.setTargets);
  }
  componentWillUnmount() {
    this.editor.eventBus.off("setSelectedTargets", this.setTargets);
  }
};
BorderColorIcon.id = "BorderColorIcon";

// src/Editor/Menu/MenusList.ts
var HomeMenu = [
  MoveToolIcon,
  Divider,
  PrintAreaIcon,
  TextIcon,
  ImageIcon,
  Divider,
  UndoIcon,
  RedoIcon
];
var TextMenu = [
  MoveToolIcon,
  Divider,
  TextIcon,
  Divider,
  FontFamily,
  Divider,
  FontSize,
  Divider,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  TextColorIcon,
  Divider,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
  AlignJustifyIcon
];
var PrintAreaMenu = [
  MoveToolIcon,
  Divider,
  PrintAreaIcon,
  Divider,
  BorderColorIcon
];
var CompleteMenu = [
  MoveToolIcon,
  PrintAreaIcon,
  TextIcon,
  ImageIcon,
  CropIcon,
  RectIcon,
  OvalIcon,
  CircleIcon,
  RoundRectIcon,
  UndoIcon,
  RedoIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  FontFamily
];

// src/Editor/Menu/Menu.tsx
var Menu = class extends React32.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      selected: "MoveTool"
    };
    this.menuRefs = [];
    this.select = (id) => {
      this.setState({
        selected: id
      });
      this.props.onSelect(id);
    };
  }
  render() {
    return /* @__PURE__ */ React32.createElement("div", { className: prefix("menu") }, this.renderMenus());
  }
  renderMenus() {
    let selected = this.state.selected;
    const menuRefs = this.menuRefs;
    const editor = this.props.editor;
    const viewport = editor.getViewport();
    let menu = HomeMenu;
    const targets = editor.getSelectedTargets().map((target) => viewport.getInfoByElement(target));
    if (targets.length <= 0) {
      const resetProperties = [
        ["font-weight", "normal"],
        ["font-size", "16px"],
        ["font-style", "normal"],
        ["text-decoration", "none"],
        ["font-family", "Avenir"],
        ["text-align", "left"]
      ];
      resetProperties.forEach((p) => {
        editor.memory.set(p[0], p[1]);
      });
    }
    const isTargetsSame = targets.every((t) => t.name === targets[0].name);
    if (isTargetsSame && targets.length > 0 || selected !== "MoveTool") {
      const target = selected !== "MoveTool" ? selected : targets[0].name.replaceAll(/\(|\)/g, "");
      selected = target;
      if (["Text"].includes(target)) {
        menu = TextMenu;
      }
      if (["PrintArea"].includes(target)) {
        menu = PrintAreaMenu;
      }
    }
    return menu.filter((m) => !editor.props.isAdmin ? m.id !== "PrintArea" : true).map((MenuClass, i) => {
      const id = MenuClass.id;
      if (!menuRefs[i]) {
        menuRefs[i] = React32.createRef();
      }
      if (id === "Divider") {
        return /* @__PURE__ */ React32.createElement(MenuClass, { key: i, editor });
      }
      return /* @__PURE__ */ React32.createElement(
        MenuClass,
        {
          ref: menuRefs[i],
          key: i,
          editor,
          selected: Array.isArray(id) ? id.includes(selected) : selected === id,
          selectedId: selected,
          onSelect: this.select
        }
      );
    });
  }
  getSelected() {
    const selected = this.state.selected;
    return CompleteMenu.filter((m) => m.id === selected)[0];
  }
  blur() {
    this.menuRefs.forEach((ref) => {
      if (!ref.current) {
        return;
      }
      ref.current.blur();
    });
  }
};

// src/Editor/utils/EventBus.ts
import Component from "@egjs/component";
var EventBus = class extends Component {
  constructor() {
    super(...arguments);
    this.eventMap = {};
  }
  requestTrigger(name, params = {}) {
    const eventMap = this.eventMap;
    cancelAnimationFrame(eventMap[name] || 0);
    eventMap[name] = requestAnimationFrame(() => {
      this.trigger(name, params);
    });
  }
};
var EventBus_default = EventBus;

// src/Editor/utils/Memory.ts
var Memory = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  get(key) {
    return this.map.get(key);
  }
  set(key, value) {
    return this.map.set(key, value);
  }
  clear() {
    this.map.clear();
  }
};

// src/Editor/Viewport/MoveableMananger.tsx
var React33 = __toESM(require_react());
import Moveable from "react-moveable";
import { diff } from "@egjs/list-differ";
function restoreRender(id, state, prevState, orders, editor) {
  const el = editor.viewport.current.getElement(id);
  if (!el) {
    console.error("No Element");
    return false;
  }
  const moveableData = editor.moveableData;
  const frame = moveableData.getFrame(el);
  ;
  frame.clear();
  frame.set(state);
  frame.setOrderObject(orders);
  const result = diff(Object.keys(prevState), Object.keys(state));
  const { removed, prevList } = result;
  removed.forEach((index) => {
    el.style.removeProperty(prevList[index]);
  });
  moveableData.render(el);
  return true;
}
function undoRender({ id, prev, next, prevOrders }, editor) {
  if (!restoreRender(id, prev, next, prevOrders, editor)) {
    return;
  }
  editor.moveableManager.current.updateRect();
  editor.eventBus.trigger("render");
}
function redoRender({ id, prev, next, nextOrders }, editor) {
  if (!restoreRender(id, next, prev, nextOrders, editor)) {
    return;
  }
  editor.moveableManager.current.updateRect();
  editor.eventBus.trigger("render");
}
function undoRenders({ infos }, editor) {
  infos.forEach(({ id, prev, next, prevOrders }) => {
    restoreRender(id, prev, next, prevOrders, editor);
  });
  editor.moveableManager.current.updateRect();
  editor.eventBus.trigger("render");
}
function redoRenders({ infos }, editor) {
  infos.forEach(({ id, next, prev, nextOrders }) => {
    restoreRender(id, next, prev, nextOrders, editor);
  });
  editor.moveableManager.current.updateRect();
  editor.eventBus.trigger("render");
}
var DimensionViewable = {
  name: "dimensionViewable",
  props: [
    "dimensionViewable"
  ],
  render(moveable) {
    const { left, top } = moveable.state;
    const rect = moveable.getRect();
    return /* @__PURE__ */ React33.createElement("div", { key: "dimension-viewer", className: "moveable-dimension", style: {
      left: `${rect.left + rect.width / 2 - left}px`,
      top: `${rect.top + rect.height + 20 - top}px`
    } }, Math.round(rect.offsetWidth), " x ", Math.round(rect.offsetHeight));
  }
};
var MoveableManager = class extends React33.PureComponent {
  constructor() {
    super(...arguments);
    this.moveable = React33.createRef();
  }
  getMoveable() {
    return this.moveable.current;
  }
  render() {
    const {
      editor,
      verticalGuidelines,
      horizontalGuidelines,
      selectedTargets,
      selectedMenu
    } = this.props;
    if (!selectedTargets.length) {
      return this.renderViewportMoveable();
    }
    const {
      moveableData,
      eventBus,
      selecto,
      memory
    } = editor;
    const elementGuidelines = [...moveableData.getTargets()].filter((el) => {
      return selectedTargets.indexOf(el) === -1;
    });
    const isShift = editor.state.isShift;
    const targetIsImage = selectedTargets.every((el) => el.tagName === "IMG");
    return /* @__PURE__ */ React33.createElement(
      Moveable,
      {
        ables: [DimensionViewable],
        ref: this.moveable,
        targets: selectedTargets,
        dimensionViewable: true,
        draggable: true,
        resizable: true,
        throttleResize: 1,
        clippable: selectedMenu === "Crop",
        dragArea: selectedTargets.length > 1 || selectedMenu !== "Text",
        checkInput: selectedMenu === "Text",
        throttleDragRotate: isShift ? 45 : 0,
        keepRatio: targetIsImage && !isShift || !targetIsImage && isShift,
        rotatable: true,
        snappable: true,
        snapGap: false,
        roundable: true,
        verticalGuidelines,
        horizontalGuidelines,
        elementGuidelines,
        clipArea: true,
        onBeforeRenderStart: moveableData.onBeforeRenderStart,
        onBeforeRenderGroupStart: moveableData.onBeforeRenderGroupStart,
        onDragStart: moveableData.onDragStart,
        onDrag: moveableData.onDrag,
        onDragGroupStart: moveableData.onDragGroupStart,
        onDragGroup: moveableData.onDragGroup,
        onScaleStart: moveableData.onScaleStart,
        onScale: moveableData.onScale,
        onScaleGroupStart: moveableData.onScaleGroupStart,
        onScaleGroup: moveableData.onScaleGroup,
        onResizeStart: moveableData.onResizeStart,
        onResize: moveableData.onResize,
        onResizeGroupStart: moveableData.onResizeGroupStart,
        onResizeGroup: moveableData.onResizeGroup,
        onRotateStart: moveableData.onRotateStart,
        onRotate: moveableData.onRotate,
        onRotateGroupStart: moveableData.onRotateGroupStart,
        onRotateGroup: moveableData.onRotateGroup,
        defaultClipPath: memory.get("crop") || "inset",
        onClip: moveableData.onClip,
        onDragOriginStart: moveableData.onDragOriginStart,
        onDragOrigin: (e) => {
          moveableData.onDragOrigin(e);
        },
        onRound: moveableData.onRound,
        onClick: (e) => {
          const target = e.inputTarget;
          if (e.isDouble && target.isContentEditable) {
            editor.selectMenu("Text");
            const el = getContentElement(target);
            if (el) {
              el.focus();
            }
          }
        },
        onClickGroup: (e) => {
          selecto.current.clickTarget(e.inputEvent, e.inputTarget);
        },
        onRenderStart: (e) => {
          e.datas.prevData = moveableData.getFrame(e.target).get();
        },
        onRender: async (e) => {
          e.datas.isRender = true;
          eventBus.requestTrigger("render");
          this.updateRender(e.target);
        },
        onRenderEnd: async (e) => {
          eventBus.requestTrigger("render");
          if (!e.datas.isRender) {
            return;
          }
          this.historyManager.addAction("render", {
            id: getId(e.target),
            prev: e.datas.prevData,
            next: moveableData.getFrame(e.target).get()
          });
          this.updateRender(e.target);
        },
        onRenderGroupStart: (e) => {
          e.datas.prevDatas = e.targets.map((target) => moveableData.getFrame(target).get());
        },
        onRenderGroup: (e) => {
          eventBus.requestTrigger("renderGroup", e);
          e.datas.isRender = true;
        },
        onRenderGroupEnd: (e) => {
          eventBus.requestTrigger("renderGroup", e);
          if (!e.datas.isRender) {
            return;
          }
          const prevDatas = e.datas.prevDatas;
          const infos = e.targets.map((target, i) => {
            return {
              id: getId(target),
              prev: prevDatas[i],
              next: moveableData.getFrame(target).get()
            };
          });
          this.historyManager.addAction("renders", {
            infos
          });
        }
      }
    );
  }
  renderViewportMoveable() {
    const viewport = this.editor.getViewport();
    const target = viewport ? viewport.viewportRef.current : null;
    return /* @__PURE__ */ React33.createElement(
      Moveable,
      {
        ref: this.moveable,
        rotatable: false,
        target,
        origin: false
      }
    );
  }
  componentDidMount() {
    this.historyManager.registerType("render", undoRender, redoRender);
    this.historyManager.registerType("renders", undoRenders, redoRenders);
  }
  updateRect() {
    this.getMoveable().updateRect();
  }
  async updateRender(e) {
    const { moveableData } = this.editor;
    const viewport = this.editor.getViewport();
    const element = viewport.getInfoByElement(e);
    element.frame = moveableData.getFrame(e).get();
    await viewport.appendJSXs([element], -1);
    this.editor.forceUpdate();
  }
};
MoveableManager = __decorateClass([
  connectEditorProps
], MoveableManager);

// src/Editor/utils/MoveableData.ts
import MoveableHelper from "moveable-helper";
var MoveableData = class extends MoveableHelper {
  constructor(memory) {
    super({
      createAuto: true,
      useBeforeRender: true
    });
    this.memory = memory;
    this.selectedTargets = [];
  }
  setSelectedTargets(targets) {
    this.selectedTargets = targets;
  }
  getSelectedTargets() {
    return this.selectedTargets;
  }
  getSelectedFrames() {
    return this.getSelectedTargets().map((target) => this.getFrame(target));
  }
  renderFrames() {
    this.getSelectedTargets().forEach((target) => {
      this.render(target);
    });
  }
  setOrders(scope, orders) {
    return this.setValue((frame) => {
      frame.setOrders(scope, orders);
    });
  }
  setProperty(names, value) {
    return this.setValue((frame) => {
      frame.set(...names, value);
    });
  }
  removeProperties(...names) {
    return this.setValue((frame, target) => {
      names.forEach((name) => {
        frame.remove(name);
        target.style.removeProperty(name);
      });
    });
  }
  getProperties(properties, defaultValues) {
    const frames = this.getSelectedFrames();
    const memory = this.memory;
    if (!frames.length) {
      return properties.map((property, i) => memory.get(property.join("///")) || defaultValues[i]);
    }
    return properties.map((property, i) => {
      const frameValues = frames.map((frame) => frame.get(...property));
      return frameValues.filter((color) => color)[0] || defaultValues[i];
    });
  }
  setValue(callback) {
    const targets = this.getSelectedTargets();
    const infos = targets.map((target) => {
      const frame = this.getFrame(target);
      const prevOrders = frame.getOrderObject();
      const prev = frame.get();
      callback(frame, target);
      const next = frame.get();
      const nextOrders = frame.getOrderObject();
      return { id: getId(target), prev, prevOrders, next, nextOrders };
    });
    this.renderFrames();
    return infos;
  }
};

// src/Editor/Editor.tsx
import Shortcuts from "shortcuts";

// src/Editor/utils/HistoryManager.ts
var HistoryManager = class {
  constructor(editor) {
    this.editor = editor;
    this.undoStack = [];
    this.redoStack = [];
    this.types = {};
  }
  registerType(type, undo, redo) {
    this.types[type] = { undo, redo };
  }
  addAction(type, props) {
    this.editor.console.log(`Add History:`, type, props);
    this.undoStack.push({
      type,
      props
    });
    this.redoStack = [];
    if (this.editor.props.onChange && this.editor.viewport.current) {
      this.editor.props.onChange(this.editor.saveEditor());
    }
  }
  undo() {
    const undoAction = this.undoStack.pop();
    if (!undoAction) {
      return;
    }
    this.editor.console.log(`Undo History: ${undoAction.type}`, undoAction.props);
    this.types[undoAction.type].undo(undoAction.props, this.editor);
    this.redoStack.push(undoAction);
  }
  redo() {
    const redoAction = this.redoStack.pop();
    if (!redoAction) {
      return;
    }
    this.editor.console.log(`Redo History: ${redoAction.type}`, redoAction.props);
    this.types[redoAction.type].redo(redoAction.props, this.editor);
    this.undoStack.push(redoAction);
  }
};

// src/Editor/utils/Debugger.ts
var Debugger = class {
  constructor(isDebug) {
    this.isDebug = isDebug;
  }
  log(...args) {
    if (!this.isDebug) {
      return;
    }
    console.log("%c Scena Debugger:", "padding: 1px; background: #4af; color: #fff;", ...args);
  }
};

// src/Editor/utils/ClipboardManager.tsx
var React34 = __toESM(require_react());
import html2canvas from "html2canvas";
var ClipboardManager = class {
  constructor(editor) {
    this.editor = editor;
    this.onCut = (e) => {
      const copied = this.onCopy(e);
      if (!copied) {
        return;
      }
      this.editor.console.log("cut scena data");
      this.editor.removeElements(this.editor.getSelectedTargets());
    };
    this.onCopy = async (e) => {
      if (checkInput(e.target)) {
        return false;
      }
      e.preventDefault();
      const clipboardData = e.clipboardData;
      const moveableData = this.editor.moveableData;
      const targets = moveableData.getSelectedTargets();
      const SavedScenaData = this.editor.saveTargets(targets);
      this.editor.console.log("copy scena data", SavedScenaData);
      clipboardData.setData(TYPE_SCENA_LAYERS, JSON.stringify(SavedScenaData));
      return true;
    };
    this.onPaste = (e) => {
      if (checkInput(e.target)) {
        return;
      }
      this.read(e.clipboardData);
      e.preventDefault();
    };
    document.addEventListener("cut", this.onCut);
    document.addEventListener("copy", this.onCopy);
    document.addEventListener("paste", this.onPaste);
  }
  destroy() {
    document.removeEventListener("cut", this.onCut);
    document.removeEventListener("copy", this.onCopy);
    document.removeEventListener("paste", this.onPaste);
  }
  copy() {
    document.execCommand("copy");
  }
  cut() {
    document.execCommand("cut");
  }
  paste() {
    document.execCommand("paste");
  }
  copyImage() {
    const moveableData = this.editor.moveableData;
    const targets = moveableData.getSelectedTargets();
    const moveable = this.editor.getMoveable();
    const length = targets.length;
    const moveables = length > 1 ? moveable.moveable.moveables : [];
    return new Promise((resolve) => {
      Promise.all(targets.map((target) => html2canvas(target))).then((images) => {
        let imageCanvas;
        if (length > 1) {
          const parentRect = moveable.getRect();
          const canvas = document.createElement("canvas");
          canvas.width = parentRect.width;
          canvas.height = parentRect.height;
          const context = canvas.getContext("2d");
          const rects = moveables.map((m) => m.getRect());
          rects.forEach((rect, i) => {
            context.drawImage(images[i], rect.left - parentRect.left, rect.top - parentRect.top);
          });
          imageCanvas = canvas;
        } else {
          imageCanvas = images[0];
        }
        imageCanvas.toBlob((blob) => {
          navigator.clipboard.write([
            new window.ClipboardItem({
              "image/png": blob
            })
          ]);
          resolve("");
        });
      });
    });
  }
  readDataTransfter(data) {
    const types = data.types;
    const hasScena = types.indexOf(TYPE_SCENA_LAYERS) > -1;
    if (hasScena) {
      const scenaDatas = JSON.parse(data.getData(TYPE_SCENA_LAYERS));
      this.editor.console.log("paste scena data", scenaDatas);
      this.editor.loadDatas(scenaDatas);
      return true;
    }
    return false;
  }
  async read(data) {
    if (this.readDataTransfter(data)) {
      return true;
    }
    const clipboardItems = await navigator.clipboard.read();
    let hasText = false;
    const isPaste = clipboardItems.filter((item) => {
      const types = item.types;
      const hasImage = types.indexOf("image/png") > -1;
      hasText = hasText || types.indexOf("text/plain") > -1;
      if (hasImage) {
        item.getType("image/png").then((blob) => {
          this.editor.appendBlob(blob);
        });
        return true;
      }
      return false;
    }).length > 0;
    if (!isPaste && hasText) {
      const text = await navigator.clipboard.readText();
      this.editor.appendJSXs([{
        jsx: /* @__PURE__ */ React34.createElement("div", { contentEditable: "true" }),
        name: "(Text)",
        innerText: text
      }]);
    }
  }
};

// src/Editor/Editor.tsx
import domtoimage from "dom-to-image";
function undoCreateElements({ infos, prevSelected }, editor) {
  const res = editor.removeByIds(
    infos.map((info) => info.id),
    true
  );
  if (prevSelected) {
    res.then(() => {
      editor.setSelectedTargets(
        editor.getViewport().getElements(prevSelected),
        true
      );
    });
  }
}
function restoreElements({ infos }, editor) {
  editor.appendJSXs(
    infos.map((info) => ({
      ...info
    })),
    true
  );
}
function undoSelectTargets({ prevs, nexts }, editor) {
  editor.setSelectedTargets(editor.viewport.current.getElements(prevs), true);
}
function redoSelectTargets({ prevs, nexts }, editor) {
  editor.setSelectedTargets(editor.viewport.current.getElements(nexts), true);
}
function undoChangeText({ prev, next, id }, editor) {
  const info = editor.getViewport().getInfo(id);
  info.innerText = prev;
  info.el.innerText = prev;
}
function redoChangeText({ prev, next, id }, editor) {
  const info = editor.getViewport().getInfo(id);
  info.innerText = next;
  info.el.innerText = next;
}
function undoMove({ prevInfos }, editor) {
  editor.moves(prevInfos, true);
}
function redoMove({ nextInfos }, editor) {
  editor.moves(nextInfos, true);
}
var Editor = class extends React35.PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      selectedTargets: [],
      horizontalGuides: [],
      verticalGuides: [],
      zoom: 1,
      minZoom: 1,
      selectedMenu: "MoveTool",
      showGuides: false,
      width: 500,
      height: 500,
      loadedViewer: false,
      isShift: false,
      isScreenshot: false
    };
    this.historyManager = new HistoryManager(this);
    this.console = new Debugger(this.props.debug);
    this.eventBus = new EventBus_default();
    this.memory = new Memory();
    this.moveableData = new MoveableData(this.memory);
    this.keyManager = new Shortcuts({
      capture: true,
      target: window,
      shouldHandleEvent(event) {
        return true;
      }
    });
    this.clipboardManager = new ClipboardManager(this);
    this.horizontalGuides = React35.createRef();
    this.verticalGuides = React35.createRef();
    this.infiniteViewer = React35.createRef();
    this.selecto = React35.createRef();
    this.menu = React35.createRef();
    this.moveableManager = React35.createRef();
    this.viewport = React35.createRef();
    this.tabs = React35.createRef();
    this.editorElement = React35.createRef();
    this.onMenuChange = (id) => {
      this.setState({
        selectedMenu: id
      });
    };
    this.onResize = () => {
      if (this.horizontalGuides.current && this.verticalGuides.current) {
        this.horizontalGuides.current.resize();
        this.verticalGuides.current.resize();
      }
      if (this.editorElement.current && this.infiniteViewer.current) {
        const width = this.editorElement.current.clientWidth;
        const viewer = this.infiniteViewer.current.getElement();
        if (width < 500) {
          const newZoom = width / 500;
          viewer.style.width = `${500 * newZoom}px`;
          viewer.style.height = `${500 * newZoom}px`;
          this.setState({ minZoom: newZoom, zoom: newZoom });
        } else {
          viewer.style.width = `${500}px`;
          viewer.style.height = `${500}px`;
          this.setState({ minZoom: 1, zoom: 1 });
        }
      }
    };
    this.onBlur = (e) => {
      const target = e.target;
      this.resetToolbar();
      if (!checkInput(target)) {
        return;
      }
      const parentTarget = getParnetScenaElement(target);
      if (!parentTarget) {
        return;
      }
      const info = this.getViewport().getInfoByElement(parentTarget);
      if (!info.attrs.contenteditable) {
        return;
      }
      const nextText = parentTarget.innerText;
      if (info.innerText === nextText) {
        return;
      }
      this.historyManager.addAction("changeText", {
        id: info.id,
        prev: info.innerText,
        next: nextText
      });
      info.innerText = nextText;
    };
  }
  render() {
    const {
      horizontalGuides,
      verticalGuides,
      infiniteViewer,
      moveableManager,
      viewport,
      menu,
      tabs,
      selecto,
      state
    } = this;
    const { selectedMenu, selectedTargets, zoom, showGuides, minZoom, width, height } = state;
    const horizontalSnapGuides = [
      0,
      height,
      height / 2,
      ...state.horizontalGuides
    ];
    const verticalSnapGuides = [0, width, width / 2, ...state.verticalGuides];
    let unit = 50;
    return /* @__PURE__ */ React35.createElement("div", { className: prefix("editor"), ref: this.editorElement }, /* @__PURE__ */ React35.createElement(Menu, { ref: menu, editor: this, onSelect: this.onMenuChange }), showGuides && /* @__PURE__ */ React35.createElement(React35.Fragment, null, /* @__PURE__ */ React35.createElement(
      "div",
      {
        className: prefix("reset"),
        onClick: (e) => {
          infiniteViewer.current.scrollCenter();
        }
      }
    ), /* @__PURE__ */ React35.createElement(
      Guides,
      {
        ref: horizontalGuides,
        type: "horizontal",
        className: prefix("guides", "horizontal"),
        snapThreshold: 5,
        snaps: horizontalSnapGuides,
        displayDragPos: true,
        dragPosFormat: (v) => `${v}px`,
        zoom,
        unit,
        onChangeGuides: (e) => {
          this.setState({
            horizontalGuides: e.guides
          });
        }
      }
    ), /* @__PURE__ */ React35.createElement(
      Guides,
      {
        ref: verticalGuides,
        type: "vertical",
        className: prefix("guides", "vertical"),
        snapThreshold: 5,
        snaps: verticalSnapGuides,
        displayDragPos: true,
        dragPosFormat: (v) => `${v}px`,
        zoom,
        unit,
        onChangeGuides: (e) => {
          this.setState({
            verticalGuides: e.guides
          });
        }
      }
    )), /* @__PURE__ */ React35.createElement(
      InfiniteViewer,
      {
        ref: infiniteViewer,
        className: prefix("viewer"),
        pinchThreshold: 5,
        wheelScale: 1e-3,
        zoom,
        zoomRange: [0, 4],
        threshold: 0,
        rangeX: [0, 0],
        rangeY: [0, 0],
        onDragStart: (e) => {
          const target = e.inputEvent.target;
          this.checkBlur();
          if (target.nodeName === "A" || moveableManager.current.getMoveable().isMoveableElement(target) || selectedTargets.some((t) => t === target || t.contains(target))) {
            e.stop();
          }
        },
        onDragEnd: (e) => {
          if (!e.isDrag) {
            selecto.current.clickTarget(e.inputEvent);
          }
        },
        onAbortPinch: (e) => {
          selecto.current.triggerDragStart(e.inputEvent);
        },
        onPinch: (e) => {
          const zoom2 = e.zoom >= minZoom ? e.zoom : minZoom;
          this.setState({
            zoom: zoom2
          });
        }
      },
      /* @__PURE__ */ React35.createElement(
        Viewport,
        {
          ref: viewport,
          onBlur: this.onBlur,
          style: {
            width: `${width}px`,
            height: `${height}px`
          },
          editor: this,
          background: this.props.backgroundImg
        },
        /* @__PURE__ */ React35.createElement(
          MoveableManager,
          {
            ref: moveableManager,
            selectedTargets,
            selectedMenu,
            verticalGuidelines: verticalSnapGuides,
            horizontalGuidelines: horizontalSnapGuides,
            editor: this
          }
        )
      )
    ), /* @__PURE__ */ React35.createElement(
      Selecto,
      {
        ref: selecto,
        hitRate: 0,
        dragContainer: ".scena-viewer",
        rootContainer: infiniteViewer.current && infiniteViewer.current.getContainer(),
        container: infiniteViewer.current && infiniteViewer.current.getContainer(),
        selectableTargets: selectedMenu === "MoveTool" ? [`.scena-viewport [${DATA_SCENA_ELEMENT_ID}].selectable`] : [],
        selectByClick: true,
        selectFromInside: false,
        toggleContinueSelect: ["shift"],
        preventDefault: true,
        scrollOptions: infiniteViewer.current ? {
          container: infiniteViewer.current.getContainer(),
          threshold: 30,
          throttleTime: 30,
          getScrollPosition: () => {
            const current = infiniteViewer.current;
            return [current.getScrollLeft(), current.getScrollTop()];
          }
        } : void 0,
        onDragStart: (e) => {
          const inputEvent = e.inputEvent;
          const target = inputEvent.target;
          this.checkBlur();
          if (selectedMenu === "Text" && target.isContentEditable) {
            const contentElement = getContentElement(target);
            if (contentElement && contentElement.hasAttribute(DATA_SCENA_ELEMENT_ID)) {
              e.stop();
              this.setSelectedTargets([contentElement]);
            }
          }
          if (moveableManager.current.getMoveable().isMoveableElement(target) || state.selectedTargets.some(
            (t) => t === target || t.contains(target)
          )) {
            e.stop();
          }
        },
        onScroll: ({ direction }) => {
          infiniteViewer.current.scrollBy(
            direction[0] * 10,
            direction[1] * 10
          );
        },
        onSelectEnd: ({ isDragStart, selected, inputEvent, rect }) => {
          if (isDragStart) {
            inputEvent.preventDefault();
          }
          if (this.selectEndMaker(rect)) {
            return;
          }
          this.setSelectedTargets(selected).then(() => {
            if (!isDragStart) {
              return;
            }
            moveableManager.current.getMoveable().dragStart(inputEvent);
          });
        }
      }
    ));
  }
  componentDidMount() {
    const { infiniteViewer, memory, eventBus } = this;
    memory.set("background-color", "#4af");
    memory.set("color", "#333");
    memory.set("border-color", "#000");
    requestAnimationFrame(() => {
      infiniteViewer.current.scrollCenter();
    });
    window.addEventListener("resize", this.onResize);
    this.onResize();
    const viewport = this.getViewport();
    eventBus.on("blur", () => {
      this.menu.current.blur();
    });
    eventBus.on("selectLayers", (e) => {
      const selected = e.selected;
      this.setSelectedTargets(
        selected.map((key) => viewport.getInfo(key).el)
      );
    });
    eventBus.on("update", () => {
      this.forceUpdate();
    });
    this.keyManager.add([
      {
        shortcut: "Left",
        handler: (e) => {
          this.move(-10, 0);
          e && e.preventDefault();
        }
      },
      {
        shortcut: "Up",
        handler: (e) => {
          this.move(0, -10);
          e && e.preventDefault();
        }
      },
      {
        shortcut: "Right",
        handler: (e) => {
          this.move(10, 0);
          e && e.preventDefault();
        }
      },
      {
        shortcut: "Down",
        handler: (e) => {
          this.move(0, 10);
          e && e.preventDefault();
        }
      },
      {
        shortcut: "Backspace",
        handler: () => {
          this.removeElements(this.getSelectedTargets());
        }
      },
      {
        shortcut: "CmdOrCtrl+x",
        handler: () => {
        }
      },
      {
        shortcut: "CmdOrCtrl+c",
        handler: () => {
        }
      },
      {
        shortcut: "CmdOrCtrl+v",
        handler: () => {
        }
      },
      {
        shortcut: "CmdOrCtrl+z",
        handler: () => {
          this.historyManager.undo();
        }
      },
      {
        shortcut: "CmdOrCtrl+Shift+z",
        handler: () => {
          this.historyManager.redo();
        }
      },
      {
        shortcut: "CmdOrCtrl+a",
        handler: (e) => {
          this.setSelectedTargets(
            this.getViewportInfos().map((info) => info.el)
          );
          e && e.preventDefault();
        }
      }
    ]);
    this.keyManager.start();
    document.addEventListener("keydown", (e) => {
      if (e.key === "Shift") {
        this.setState({ isShift: true });
      }
    });
    document.addEventListener("keyup", (e) => {
      if (e.key === "Shift") {
        this.setState({ isShift: false });
      }
    });
    this.historyManager.registerType(
      "createElements",
      undoCreateElements,
      restoreElements
    );
    this.historyManager.registerType(
      "removeElements",
      restoreElements,
      undoCreateElements
    );
    this.historyManager.registerType(
      "selectTargets",
      undoSelectTargets,
      redoSelectTargets
    );
    this.historyManager.registerType(
      "changeText",
      undoChangeText,
      redoChangeText
    );
    this.historyManager.registerType("move", undoMove, redoMove);
    if (this.props.initialJSX && this.props.initialJSX.length > 0) {
      let initialJSX = this.props.initialJSX.map((jsx) => {
        if (jsx.name === "(PrintArea)") {
          if (!jsx.attrs) {
            jsx.attrs = {};
          }
          if (this.props.isAdmin) {
            jsx.attrs.class = "selectable";
          } else {
            jsx.attrs.class = void 0;
          }
        }
        return jsx;
      });
      this.appendJSXs(initialJSX, true);
    }
    if (!this.state.loadedViewer) {
      this.forceUpdate();
    }
  }
  componentWillUnmount() {
    this.eventBus.off();
    this.memory.clear();
    this.moveableData.clear();
    this.keyManager.stop();
    this.keyManager.reset();
    this.clipboardManager.destroy();
    window.removeEventListener("resize", this.onResize);
    document.removeEventListener("keydown", (e) => {
      if (e.key === "Shift") {
        this.setState({ isShift: true });
      }
    });
    document.removeEventListener("keyup", (e) => {
      if (e.key === "Shift") {
        this.setState({ isShift: false });
      }
    });
  }
  promiseState(state) {
    return new Promise((resolve) => {
      this.setState(state, () => {
        resolve("");
      });
    });
  }
  getSelectedTargets() {
    return this.state.selectedTargets;
  }
  setSelectedTargets(targets, isRestore) {
    this.console.log("set selected target");
    targets = targets.filter((target) => {
      return targets.every((parnetTarget) => {
        return parnetTarget === target || !parnetTarget.contains(target);
      });
    });
    return this.promiseState({
      selectedTargets: targets
    }).then(() => {
      if (!isRestore) {
        const prevs = getIds(this.moveableData.getSelectedTargets());
        const nexts = getIds(targets);
        if (prevs.length !== nexts.length || !prevs.every((prev, i) => nexts[i] === prev)) {
          this.historyManager.addAction("selectTargets", { prevs, nexts });
        }
      }
      this.selecto.current.setSelectedTargets(targets);
      this.moveableData.setSelectedTargets(targets);
      this.eventBus.trigger("setSelectedTargets");
      this.menu.current?.forceUpdate();
      return targets;
    });
  }
  appendJSX(info) {
    return this.appendJSXs([info]).then((targets) => targets[0]);
  }
  appendJSXs(jsxs, isRestore) {
    const viewport = this.getViewport();
    const indexesList = viewport.getSortedIndexesList(
      this.getSelectedTargets()
    );
    const indexesListLength = indexesList.length;
    let appendIndex = -1;
    let scopeId = "";
    if (!isRestore && indexesListLength) {
      const indexes = indexesList[indexesListLength - 1];
      const info = viewport.getInfoByIndexes(indexes);
      scopeId = info.scopeId;
      appendIndex = indexes[indexes.length - 1] + 1;
    }
    return this.getViewport().appendJSXs(jsxs, appendIndex, scopeId).then(({ added }) => {
      return this.appendComplete(added, isRestore);
    });
  }
  appendComplete(infos, isRestore) {
    if (!isRestore) {
      this.historyManager.addAction("createElements", {
        infos,
        prevSelected: getIds(this.getSelectedTargets())
      });
      this.menu.current?.select("MoveTool");
    }
    const data = this.moveableData;
    const targets = infos.map(function registerFrame(info) {
      data.createFrame(info.el, info.frame);
      data.render(info.el);
      info.children.forEach(registerFrame);
      return info.el;
    }).filter((el) => el);
    return Promise.all(targets.map((target) => checkImageLoaded(target))).then(
      () => {
        return targets;
      }
    );
  }
  removeByIds(ids, isRestore) {
    return this.removeElements(this.getViewport().getElements(ids), isRestore);
  }
  getMoveable() {
    return this.moveableManager.current.getMoveable();
  }
  removeFrames(targets) {
    const frameMap = {};
    const moveableData = this.moveableData;
    const viewport = this.getViewport();
    targets.forEach(function removeFrame(target) {
      const info = viewport.getInfoByElement(target);
      if (info && info.attrs && info.attrs.class === "moveable") {
        console.log("deleting " + info);
        frameMap[info.id] = moveableData.getFrame(target).get();
        moveableData.removeFrame(target);
        info.children.forEach((childInfo) => {
          removeFrame(childInfo.el);
        });
      }
    });
    return frameMap;
  }
  restoreFrames(infos, frameMap) {
    const viewport = this.getViewport();
    const moveableData = this.moveableData;
    infos.forEach(function registerFrame(info) {
      info.frame = frameMap[info.id];
      delete frameMap[info.id];
      info.children.forEach(registerFrame);
    });
    for (const id in frameMap) {
      moveableData.createFrame(viewport.getInfo(id).el, frameMap[id]);
    }
  }
  removeElements(targets, isRestore) {
    const viewport = this.getViewport();
    const frameMap = this.removeFrames(targets);
    const indexesList = viewport.getSortedIndexesList(targets);
    const indexesListLength = indexesList.length;
    let scopeId = "";
    let selectedInfo = null;
    if (indexesListLength) {
      const lastInfo = viewport.getInfoByIndexes(
        indexesList[indexesListLength - 1]
      );
      const nextInfo = viewport.getNextInfo(lastInfo.id);
      if (nextInfo) {
        scopeId = lastInfo.scopeId;
        selectedInfo = nextInfo;
      }
    }
    return viewport.removeTargets(targets).then(({ removed }) => {
      let selectedTarget = selectedInfo || viewport.getLastChildInfo(scopeId) || viewport.getInfo(scopeId);
      this.setSelectedTargets(
        selectedTarget && selectedTarget.el ? [selectedTarget.el] : [],
        true
      );
      this.console.log("removeTargets", removed);
      !isRestore && this.historyManager.addAction("removeElements", {
        infos: removed.map(function removeTarget(info) {
          return {
            ...info,
            children: info.children.map(removeTarget),
            frame: frameMap[info.id] || info.frame
          };
        })
      });
      return targets;
    });
  }
  setProperty(scope, value, isUpdate) {
    const infos = this.moveableData.setProperty(scope, value);
    this.historyManager.addAction("renders", { infos });
    if (isUpdate) {
      this.moveableManager.current.updateRect();
    }
    this.eventBus.requestTrigger("render");
  }
  setOrders(scope, orders, isUpdate) {
    const infos = this.moveableData.setOrders(scope, orders);
    this.historyManager.addAction("renders", { infos });
    if (isUpdate) {
      this.moveableManager.current.updateRect();
    }
    this.eventBus.requestTrigger("render");
  }
  selectMenu(menu) {
    this.menu.current.select(menu);
  }
  loadDatas(datas) {
    const viewport = this.getViewport();
    return this.appendJSXs(
      datas.map(function loadData(data) {
        const { componentId, jsxId, children } = data;
        let jsx;
        if (jsxId) {
          jsx = viewport.getJSX(jsxId);
        }
        if (!jsx && componentId) {
          const Component2 = viewport.getComponent(componentId);
          jsx = /* @__PURE__ */ React35.createElement(Component2, null);
        }
        if (!jsx) {
          jsx = React35.createElement(data.tagName);
        }
        return {
          ...data,
          children: children.map(loadData),
          jsx
        };
      }).filter((info) => info)
    );
  }
  saveTargets(targets) {
    const viewport = this.getViewport();
    const moveableData = this.moveableData;
    this.console.log("save targets", targets);
    return targets.map((target) => viewport.getInfoByElement(target)).map(function saveTarget(info) {
      const target = info.el;
      const isContentEditable = info.attrs.contenteditable;
      return {
        name: info.name,
        attrs: getScenaAttrs(target),
        jsxId: info.jsxId || "",
        componentId: info.componentId,
        innerHTML: isContentEditable ? "" : target.innerHTML,
        innerText: isContentEditable ? target.innerText : "",
        tagName: target.tagName.toLowerCase(),
        frame: moveableData.getFrame(target).get(),
        children: info.children.map(saveTarget)
      };
    });
  }
  getViewport() {
    return this.viewport.current;
  }
  getViewportInfos() {
    return this.getViewport().getViewportInfos();
  }
  appendBlob(blob) {
    const url = URL.createObjectURL(blob);
    return this.appendJSX({
      jsx: /* @__PURE__ */ React35.createElement("img", { src: url, alt: "appended blob" }),
      name: "(Image)"
    });
  }
  moves(movedInfos, isRestore) {
    const frameMap = this.removeFrames(movedInfos.map(({ info }) => info.el));
    return this.getViewport().moves(movedInfos).then((result) => this.moveComplete(result, frameMap, isRestore));
  }
  selectEndMaker(rect, extraProps) {
    const infiniteViewer = this.infiniteViewer.current;
    const selectIcon = this.menu.current.getSelected();
    const width = rect.width;
    const height = rect.height;
    if (!selectIcon || !selectIcon.maker || !width || !height) {
      return false;
    }
    const maker = selectIcon.maker(this.memory);
    const viwerPosition = infiniteViewer.getContainer().getBoundingClientRect();
    const scrollTop = viwerPosition.y;
    const scrollLeft = viwerPosition.x;
    const top = rect.top - scrollTop;
    const left = rect.left - scrollLeft;
    this.console.log(top, left, viwerPosition);
    const style = {
      top: `${top}px`,
      left: `${left}px`,
      position: "absolute",
      width: `${width}px`,
      height: `${height}px`,
      ...maker.style
    };
    this.appendJSX({
      jsx: maker.tag,
      attrs: maker.attrs,
      name: `(${selectIcon.id})`,
      frame: style,
      ..."Text" === selectIcon.id && { colors: [style.color] },
      ...extraProps && { ...extraProps }
    }).then((el) => {
      selectIcon.makeThen(el, selectIcon.id, this.menu.current);
      this.menu.current?.forceUpdate();
    });
    return true;
  }
  move(deltaX, deltaY) {
    this.getMoveable().request("draggable", { deltaX, deltaY }, true);
  }
  checkBlur() {
    const activeElement = document.activeElement;
    if (activeElement) {
      activeElement.blur();
    }
    const selection = document.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
    this.eventBus.trigger("blur");
  }
  resetToolbar() {
    this.menu.current?.select("MoveTool");
  }
  moveInside() {
    let targets = this.getSelectedTargets();
    const length = targets.length;
    if (length !== 1) {
      return;
    }
    targets = [targets[0]];
    const viewport = this.getViewport();
    const frameMap = this.removeFrames(targets);
    return viewport.moveInside(targets[0]).then((result) => this.moveComplete(result, frameMap));
  }
  moveOutside() {
    let targets = this.getSelectedTargets();
    const length = targets.length;
    if (length !== 1) {
      return;
    }
    targets = [targets[0]];
    const frameMap = this.removeFrames(targets);
    this.getViewport().moveOutside(targets[0]).then((result) => this.moveComplete(result, frameMap));
  }
  moveComplete(result, frameMap, isRestore) {
    this.console.log("Move", result);
    const { moved, prevInfos, nextInfos } = result;
    this.restoreFrames(moved, frameMap);
    if (moved.length) {
      if (!isRestore) {
        this.historyManager.addAction("move", {
          prevInfos,
          nextInfos
        });
      }
      this.appendComplete(moved, true);
    }
    return result;
  }
  saveEditor() {
    const elements = this.getViewport().getViewportInfos();
    let stringElements = JSON.stringify(elements, (key, value) => {
      if (key.includes("__reactInternalInstance") || key.includes("__reactFiber") || value instanceof HTMLDivElement) {
        return void 0;
      }
      return value;
    });
    const parsedElements = JSON.parse(stringElements);
    return parsedElements.map((e) => {
      delete e.el;
      if (e.name === "(PrintArea)" && e.attrs && e.attrs.class) {
        e.attrs.class = void 0;
      }
      return e;
    });
  }
  async addImage(file) {
    const upload = this.props.onUploadImage;
    if (this.state.selectedMenu !== "Image") {
      this.menu.current?.select("Image");
    }
    if (upload && file) {
      const image = await upload(file);
      const imageLoad = new Image();
      this.memory.set("imageUrl", image.url);
      imageLoad.onload = () => {
        let width = imageLoad.width;
        let height = imageLoad.height;
        const MAX_SIZE = 150;
        if (width >= height) {
          height = MAX_SIZE / width * height;
          width = MAX_SIZE;
        } else {
          width = MAX_SIZE / height * width;
          height = MAX_SIZE;
        }
        const bounds = this.infiniteViewer.current.getContainer().getBoundingClientRect();
        this.selectEndMaker({
          top: bounds.y + 250 - height / 2,
          left: bounds.x + 250 - width / 2,
          bottom: 0,
          right: 0,
          width,
          height
        }, {
          url: image.url,
          ...image.options
        });
      };
      imageLoad.src = image.url;
    }
  }
  async getScreenshot(fileName) {
    return new Promise((resolve) => {
      const zoom = this.state.zoom;
      this.setState({ isScreenshot: true, zoom: 1 }, async () => {
        const viewer = document.getElementById("scene-viewport");
        resolve(await domtoimage.toBlob(viewer, { cacheBust: true }));
        this.setState({ isScreenshot: false, zoom });
      });
    });
  }
  async getDesignSize() {
    const viewport = this.getViewport();
    const elements = viewport.getViewportInfos();
    const elementsId = elements.filter((e) => e.name !== "(PrintArea)").map((e) => e.id);
    const elementsNodes = viewport.getElements(elementsId);
    await this.setSelectedTargets(elementsNodes);
    const selectedArea = document.getElementsByClassName("moveable-area");
    if (selectedArea.length > 0) {
      const design = selectedArea[0];
      const bound = design.getBoundingClientRect();
      await this.setSelectedTargets([]);
      return {
        width: bound.width,
        height: bound.height
      };
    }
    await this.setSelectedTargets([]);
    return void 0;
  }
  getSelectableTargets() {
    const viewport = this.getViewport();
    const elements = viewport.getViewportInfos();
    const selectables = elements.filter((e) => e.name !== "(PrintArea)");
    return selectables;
  }
  getColorList() {
    const targets = this.getSelectableTargets();
    const colors = targets.map((t) => t.colors || []).flat().filter((element, index, self) => {
      return self.indexOf(element) === index;
    });
    return colors;
  }
};

// src/Editor/index.ts
var Editor_default = Editor;
export {
  Editor_default as default,
  makeScenaFunctionComponent
};
