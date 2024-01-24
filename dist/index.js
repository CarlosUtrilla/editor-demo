"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = function(target, all) {
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = function(to, from, except, desc) {
    if (from && typeof from === "object" || typeof from === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var key = _step.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: function() {
                        return from[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return to;
};
var __toESM = function(mod, isNodeMode, target) {
    return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
        value: mod,
        enumerable: true
    }) : target, mod);
};
var __toCommonJS = function(mod) {
    return __copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
};
var __decorateClass = function(decorators, target, key, kind) {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for(var i = decorators.length - 1, decorator; i >= 0; i--)if (decorator = decorators[i]) result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
};
// src/Editor/index.ts
var Editor_exports = {};
__export(Editor_exports, {
    default: function() {
        return Editor_default;
    },
    makeScenaFunctionComponent: function() {
        return makeScenaFunctionComponent;
    }
});
module.exports = __toCommonJS(Editor_exports);
// src/Editor/Editor.tsx
var React41 = __toESM(require("react"));
var import_react_infinite_viewer = __toESM(require("react-infinite-viewer"));
var import_react_guides = __toESM(require("@scena/react-guides"));
var import_react_selecto = __toESM(require("react-selecto"));
// src/Editor/Menu/Menu.tsx
var React36 = __toESM(require("react"));
// src/Editor/utils/utils.ts
var import_framework_utils = require("framework-utils");
// src/Editor/consts.ts
var EDITOR_PROPERTIES = [
    "memory",
    "eventBus",
    "keyManager",
    "moveableData",
    "moveableManager",
    "historyManager",
    "console"
];
var PREFIX = "scena-";
var DATA_SCENA_ELEMENT_ID = "data-scena-element-id";
var userAgent = (typeof navigator !== "undefined" && navigator || {}).userAgent || "";
var isMacintosh = userAgent.indexOf("Macintosh") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("iPhone") >= 0;
var TYPE_SCENA_LAYERS = "application/x-scena-layers";
// src/Editor/utils/utils.ts
function prefix() {
    for(var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++){
        classNames[_key] = arguments[_key];
    }
    return (0, import_framework_utils.prefixNames).apply(this, [
        PREFIX
    ].concat(_to_consumable_array(classNames)));
}
function connectEditorProps(component) {
    var prototype = component.prototype;
    Object.defineProperty(prototype, "editor", {
        get: function get() {
            return this.props.editor;
        }
    });
    EDITOR_PROPERTIES.forEach(function(name) {
        Object.defineProperty(prototype, name, {
            get: function get() {
                return this.props.editor[name];
            }
        });
    });
}
function getId(el) {
    return el.getAttribute(DATA_SCENA_ELEMENT_ID) || el.dataset.scenaElementId;
}
function getIds(els) {
    return els.map(function(el) {
        return getId(el);
    });
}
function checkInput(target) {
    var tagName = target.tagName.toLowerCase();
    return target.isText || tagName === "input" || tagName === "textarea";
}
function checkImageLoaded(el) {
    if (el.tagName.toLowerCase() !== "img") {
        return Promise.all([].slice.call(el.querySelectorAll("img")).map(function(el2) {
            return checkImageLoaded(el2);
        }));
    }
    return new Promise(function(resolve) {
        if (el.complete) {
            resolve("");
        } else {
            el.addEventListener("load", function loaded() {
                resolve("");
                el.removeEventListener("load", loaded);
            });
        }
    });
}
function getParnetScenaElement(el) {
    if (!el) {
        return null;
    }
    if (el.hasAttribute(DATA_SCENA_ELEMENT_ID)) {
        return el;
    }
    return getParnetScenaElement(el.parentElement);
}
function makeScenaFunctionComponent(id, component) {
    component.scenaComponentId = id;
    return component;
}
function getScenaAttrs(el) {
    var attributes = el.attributes;
    var length = attributes.length;
    var attrs = {};
    for(var i = 0; i < length; ++i){
        var _attributes_i = attributes[i], name = _attributes_i.name, value = _attributes_i.value;
        if (name === DATA_SCENA_ELEMENT_ID || name === "style") {
            continue;
        }
        attrs[name] = value;
    }
    return attrs;
}
function isScenaFunction(value) {
    return typeof value === "function" && "scenaComponentId" in value;
}
function isScenaElement(value) {
    return value !== null && typeof value === "object" && !isScenaFunction(value);
}
function isScenaFunctionElement(value) {
    return isScenaElement(value) && typeof value === "function";
}
function isNumber(value) {
    return typeof value === "number";
}
function isDivInsideAnother(div1, parentDiv) {
    var rect1 = div1.getBoundingClientRect();
    var rect2 = parentDiv.getBoundingClientRect();
    return rect1.left >= rect2.left - 3 && rect1.right <= rect2.right + 1 && rect1.top >= rect2.top - 3 && rect1.bottom <= rect2.bottom + 1;
}
function convertToSnakeCase(str) {
    str = str[0].toLowerCase() + str.slice(1, str.length).replace(/[A-Z]/g, function(letter) {
        return "-".concat(letter.toLowerCase());
    });
    str = str.replaceAll(" _", "-");
    return str.replaceAll(" ", "-").replace(/(^-*|-*$)/g, "");
    ;
}
// src/Editor/Menu/Divider.tsx
var React2 = __toESM(require("react"));
// src/Editor/Menu/Icon.tsx
var React = __toESM(require("react"));
var import_utils2 = require("@daybrush/utils");
var Icon = /*#__PURE__*/ function(_React_PureComponent) {
    _inherits(Icon, _React_PureComponent);
    var _super = _create_super(Icon);
    function Icon() {
        _class_call_check(this, Icon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.keys = [];
        _this.subContainer = React.createRef();
        _this.state = {
            selected: false
        };
        _this.onClick = function() {
            var onSelect = _this.props.onSelect;
            var iconId = _this.constructor.id;
            if (Array.isArray(iconId)) {
                var lastShape = _this.memory.get("lastShape");
                var find = iconId.find(function(s) {
                    return s === _this.props.selectedId || s === lastShape;
                });
                if (!find) iconId = iconId[0];
                else iconId = find;
            }
            if (onSelect) {
                onSelect(iconId);
                _this.focusSub();
            }
        };
        _this.onSubClick = function(e) {
            e.stopPropagation();
        };
        _this.blur = function() {
            var subContainer = _this.subContainer.current;
            if (!subContainer) {
                return;
            }
            subContainer.style.display = "none";
        };
        return _this;
    }
    _create_class(Icon, [
        {
            key: "render",
            value: function render() {
                var iconId = this.constructor.id;
                var selected = this.props.selected || this.state.selected;
                return /* @__PURE__ */ React.createElement("div", {
                    className: prefix("icon", selected ? "selected" : "", iconId === "Divider" ? "divider" : ""),
                    onClick: this.onClick
                }, this.renderIcon(), this.renderSubContainer());
            }
        },
        {
            key: "renderSubContainer",
            value: function renderSubContainer() {
                var subIcons = this.renderSubIcons();
                if (!subIcons.length) {
                    return;
                }
                return [
                    /* @__PURE__ */ React.createElement("div", {
                        key: "extends-icon",
                        className: prefix("extends-icon")
                    }),
                    this.props.selected && /* @__PURE__ */ React.createElement("div", {
                        key: "extends-container",
                        className: prefix("extends-container"),
                        ref: this.subContainer,
                        onClick: this.onSubClick
                    }, subIcons)
                ];
            }
        },
        {
            key: "renderSubIcons",
            value: function renderSubIcons() {
                return [];
            }
        },
        {
            key: "renderSubIcon",
            value: function renderSubIcon(IconClass, id, isSelect) {
                var _this = this;
                return /* @__PURE__ */ React.createElement("div", {
                    key: id,
                    className: prefix("icon", "sub-icon", isSelect ? "selected" : ""),
                    onClick: function() {
                        _this.props.onSelect(id);
                        _this.onSubSelect(id);
                    }
                }, /* @__PURE__ */ React.createElement(IconClass, {
                    editor: this.props.editor,
                    selected: false
                }), /* @__PURE__ */ React.createElement("div", {
                    className: prefix("sub-icon-label")
                }, (0, import_utils2.camelize)(" ".concat(id))));
            }
        },
        {
            key: "focusSub",
            value: function focusSub() {
                var subContainer = this.subContainer.current;
                if (!subContainer) {
                    return;
                }
                if (subContainer.style.display === "block") {
                    subContainer.style.display = "none";
                } else {
                    subContainer.style.display = "block";
                }
            }
        },
        {
            key: "onSubSelect",
            value: function onSubSelect(id) {}
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                var keys = this.keys;
                if (keys.length) {
                    this.keyManager.add([
                        {
                            shortcut: keys.join("+"),
                            handler: function(e) {
                                _this.onClick();
                            }
                        }
                    ]);
                }
            }
        }
    ]);
    return Icon;
}(React.PureComponent);
Icon.makeThen = function() {};
Icon.width = 45;
Icon = __decorateClass([
    connectEditorProps
], Icon);
// src/Editor/Menu/Divider.tsx
var Divider = /*#__PURE__*/ function(Icon) {
    _inherits(Divider, Icon);
    var _super = _create_super(Divider);
    function Divider() {
        _class_call_check(this, Divider);
        return _super.apply(this, arguments);
    }
    _create_class(Divider, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React2.createElement("i", {
                    className: "fa-light fa-pipe divider"
                });
            }
        }
    ]);
    return Divider;
}(Icon);
Divider.id = "Divider";
Divider.width = 18;
// src/Editor/Menu/ImageIcon.tsx
var React3 = __toESM(require("react"));
var ImageIcon = /*#__PURE__*/ function(Icon) {
    _inherits(ImageIcon, Icon);
    var _super = _create_super(ImageIcon);
    function ImageIcon() {
        _class_call_check(this, ImageIcon);
        return _super.apply(this, arguments);
    }
    _create_class(ImageIcon, [
        {
            key: "render",
            value: function render() {
                var _this = this;
                return /* @__PURE__ */ React3.createElement("label", {
                    htmlFor: "image",
                    className: prefix("icon", this.props.selected ? "selected" : ""),
                    onClick: this.onClick
                }, /* @__PURE__ */ React3.createElement("input", {
                    type: "file",
                    id: "image",
                    style: {
                        display: "none"
                    },
                    name: "image",
                    accept: "image/*",
                    value: "",
                    onChange: function(e) {
                        return _this.uploadImage(e, _this.editor);
                    }
                }), /* @__PURE__ */ React3.createElement("i", {
                    className: "fa-solid fa-image"
                }));
            }
        },
        {
            key: "renderIcon",
            value: function renderIcon() {}
        },
        {
            key: "uploadImage",
            value: function uploadImage(e, editor) {
                return _async_to_generator(function() {
                    var file;
                    return _ts_generator(this, function(_state) {
                        file = e.target.files ? e.target.files[0] : void 0;
                        editor.addImage(file);
                        return [
                            2
                        ];
                    });
                })();
            }
        }
    ]);
    return ImageIcon;
}(Icon);
ImageIcon.id = "Image";
ImageIcon.maker = function(memory) {
    return {
        tag: "img",
        attrs: {
            src: memory.get("imageUrl") || ""
        },
        style: {}
    };
};
// src/Editor/Menu/MoveToolIcon.tsx
var React4 = __toESM(require("react"));
var MoveToolIcon = /*#__PURE__*/ function(Icon) {
    _inherits(MoveToolIcon, Icon);
    var _super = _create_super(MoveToolIcon);
    function MoveToolIcon() {
        _class_call_check(this, MoveToolIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.keys = [
            "v"
        ];
        return _this;
    }
    _create_class(MoveToolIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React4.createElement("i", {
                    className: "fa-solid fa-arrow-pointer"
                });
            }
        }
    ]);
    return MoveToolIcon;
}(Icon);
MoveToolIcon.id = "MoveTool";
// src/Editor/Menu/PrintAreaIcon.tsx
var React5 = __toESM(require("react"));
var PrintAreaIcon = /*#__PURE__*/ function(Icon) {
    _inherits(PrintAreaIcon, Icon);
    var _super = _create_super(PrintAreaIcon);
    function PrintAreaIcon() {
        _class_call_check(this, PrintAreaIcon);
        return _super.apply(this, arguments);
    }
    _create_class(PrintAreaIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React5.createElement("i", {
                    className: "fa-solid fa-square-dashed"
                });
            }
        }
    ]);
    return PrintAreaIcon;
}(Icon);
PrintAreaIcon.id = "PrintArea";
PrintAreaIcon.maker = function(memory) {
    return {
        tag: "div",
        attrs: {},
        style: {
            "background-color": "transparent",
            "outline-width": "2px",
            "outline-style": "dashed",
            "outline-color": memory.get("border-color") || "#000",
            "box-sizing": "content-box"
        }
    };
};
// src/Editor/Menu/ShapeIcons/ShapesIcon.tsx
var React9 = __toESM(require("react"));
// src/Editor/Menu/ShapeIcons/RectIcon.tsx
var React6 = __toESM(require("react"));
var RectIcon = /*#__PURE__*/ function(Icon) {
    _inherits(RectIcon, Icon);
    var _super = _create_super(RectIcon);
    function RectIcon() {
        _class_call_check(this, RectIcon);
        return _super.apply(this, arguments);
    }
    _create_class(RectIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React6.createElement("i", {
                    className: "fa-sharp fa-regular fa-square"
                });
            }
        }
    ]);
    return RectIcon;
}(Icon);
RectIcon.id = "Rect";
RectIcon.maker = function(memory) {
    return {
        tag: "div",
        attrs: {},
        style: {
            "background-color": memory.get("background-color"),
            "border-color": memory.get("border-color"),
            "border-style": memory.get("border-style"),
            "border-width": memory.get("border-width")
        }
    };
};
// src/Editor/Menu/ShapeIcons/RoundRectIcon.tsx
var React7 = __toESM(require("react"));
var RoundRectIcon = /*#__PURE__*/ function(Icon) {
    _inherits(RoundRectIcon, Icon);
    var _super = _create_super(RoundRectIcon);
    function RoundRectIcon() {
        _class_call_check(this, RoundRectIcon);
        return _super.apply(this, arguments);
    }
    _create_class(RoundRectIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React7.createElement("i", {
                    className: "fa-regular fa-square"
                });
            }
        }
    ]);
    return RoundRectIcon;
}(Icon);
RoundRectIcon.id = "RoundRect";
RoundRectIcon.maker = function(memory) {
    return {
        tag: "div",
        attrs: {},
        style: {
            "background-color": memory.get("background-color"),
            "border-radius": "10px",
            "border-color": memory.get("border-color"),
            "border-style": memory.get("border-style"),
            "border-width": memory.get("border-width")
        }
    };
};
// src/Editor/Menu/ShapeIcons/CircleIcon.tsx
var React8 = __toESM(require("react"));
var CircleIcon = /*#__PURE__*/ function(Icon) {
    _inherits(CircleIcon, Icon);
    var _super = _create_super(CircleIcon);
    function CircleIcon() {
        _class_call_check(this, CircleIcon);
        return _super.apply(this, arguments);
    }
    _create_class(CircleIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React8.createElement("i", {
                    className: "fa-regular fa-circle"
                });
            }
        }
    ]);
    return CircleIcon;
}(Icon);
CircleIcon.id = "Circle";
CircleIcon.maker = function(memory) {
    return {
        tag: "div",
        attrs: {},
        style: {
            "background-color": memory.get("background-color"),
            "border-radius": "50%",
            "border-color": memory.get("border-color"),
            "border-style": memory.get("border-style"),
            "border-width": memory.get("border-width")
        }
    };
};
// src/Editor/Menu/ShapeIcons/ShapesIcon.tsx
var subMenu = [
    {
        children: RectIcon,
        id: "Rect"
    },
    {
        children: RoundRectIcon,
        id: "RoundRect"
    },
    {
        children: CircleIcon,
        id: "Circle"
    }
];
var ShapesIcon = /*#__PURE__*/ function(Icon) {
    _inherits(ShapesIcon, Icon);
    var _super = _create_super(ShapesIcon);
    function ShapesIcon() {
        _class_call_check(this, ShapesIcon);
        return _super.apply(this, arguments);
    }
    _create_class(ShapesIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                var _this = this;
                var lastShape = this.memory.get("lastShape");
                var selected = subMenu.find(function(s) {
                    return _this.props.selectedId === s.id || lastShape === s.id;
                });
                if (selected) {
                    var IconSelected = selected.children;
                    return /* @__PURE__ */ React9.createElement(IconSelected, {
                        editor: this.editor
                    });
                }
                return /* @__PURE__ */ React9.createElement("i", {
                    className: "fa-sharp fa-regular fa-square"
                });
            }
        },
        {
            key: "renderSubIcons",
            value: function renderSubIcons() {
                var _this = this;
                return subMenu.map(function(s) {
                    return _this.renderSubIcon(s.children, s.id, _this.props.selectedId === s.id);
                });
            }
        },
        {
            key: "onSubSelect",
            value: function onSubSelect(id) {
                this.memory.set("lastShape", id);
                this.eventBus.requestTrigger("update");
                this.forceUpdate();
            }
        }
    ]);
    return ShapesIcon;
}(Icon);
ShapesIcon.id = subMenu.map(function(s) {
    return s.id;
});
// src/Editor/Menu/TextIcons/TextIcon.tsx
var React10 = __toESM(require("react"));
var _TextIcon = /*#__PURE__*/ function(Icon) {
    _inherits(_TextIcon, Icon);
    var _super = _create_super(_TextIcon);
    function _TextIcon() {
        _class_call_check(this, _TextIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.keys = [
            "t"
        ];
        _this.onClick = function() {
            _this.editor.setState({
                selectedMenu: "Text"
            }, function() {
                var bounds = _this.editor.infiniteViewer.current.getContainer().getBoundingClientRect();
                var width = 10;
                var height = 20;
                _this.editor.selectEndMaker({
                    top: bounds.y + 250 - height / 2,
                    left: bounds.x + 250 - width / 2,
                    bottom: 0,
                    right: 0,
                    width: "auto",
                    height: "auto"
                }, {}, _TextIcon, true);
            });
        };
        return _this;
    }
    _create_class(_TextIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React10.createElement("i", {
                    className: "fa-solid fa-text"
                });
            }
        }
    ]);
    return _TextIcon;
}(Icon);
_TextIcon.id = "Text";
_TextIcon.maker = function(memory) {
    return {
        tag: "div",
        attrs: {
            isText: true
        },
        style: {
            color: memory.get("color"),
            "font-weight": memory.get("font-weight"),
            "font-style": memory.get("font-style"),
            "text-decoration": memory.get("text-decoration"),
            "font-family": memory.get("font-family"),
            width: "auto",
            height: "auto"
        }
    };
};
_TextIcon.makeThen = function(target, id, menu) {
    menu.select("Text");
};
var TextIcon = _TextIcon;
// src/Editor/Menu/CropIcon.tsx
var React13 = __toESM(require("react"));
var import_utils4 = require("@daybrush/utils");
// src/Editor/Menu/ShapeIcons/OvalIcon.tsx
var React11 = __toESM(require("react"));
var OvalIcon = /*#__PURE__*/ function(Icon) {
    _inherits(OvalIcon, Icon);
    var _super = _create_super(OvalIcon);
    function OvalIcon() {
        _class_call_check(this, OvalIcon);
        return _super.apply(this, arguments);
    }
    _create_class(OvalIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React11.createElement("i", {
                    className: "fa-regular fa-circle"
                });
            }
        }
    ]);
    return OvalIcon;
}(Icon);
OvalIcon.id = "Oval";
OvalIcon.maker = function(memory) {
    return {
        tag: "div",
        attrs: {},
        style: {
            "background-color": memory.get("background-color"),
            "border-radius": "50%",
            "border-color": memory.get("border-color"),
            "border-style": memory.get("border-style"),
            "border-width": memory.get("border-width")
        }
    };
};
// src/Editor/Menu/ShapeIcons/PolygonIcon.tsx
var React12 = __toESM(require("react"));
var PolygonIcon = /*#__PURE__*/ function(Icon) {
    _inherits(PolygonIcon, Icon);
    var _super = _create_super(PolygonIcon);
    function PolygonIcon() {
        _class_call_check(this, PolygonIcon);
        return _super.apply(this, arguments);
    }
    _create_class(PolygonIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React12.createElement("svg", {
                    viewBox: "0 0 73 73"
                }, /* @__PURE__ */ React12.createElement("path", {
                    d: "M 20,15 L 10,35 L 20,55 L 35,45 L 40, 50 L 55,31 L 41,15 L 30, 25 Z",
                    fill: "#555",
                    strokeLinejoin: "round",
                    strokeWidth: "3",
                    stroke: "#fff"
                }));
            }
        }
    ]);
    return PolygonIcon;
}(Icon);
PolygonIcon.id = "Polygon";
// src/Editor/Menu/CropIcon.tsx
var CropIcon = /*#__PURE__*/ function(Icon) {
    _inherits(CropIcon, Icon);
    var _super = _create_super(CropIcon);
    function CropIcon() {
        _class_call_check(this, CropIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.keys = [
            "c"
        ];
        return _this;
    }
    _create_class(CropIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React13.createElement("svg", {
                    viewBox: "0 0 80 80"
                }, /* @__PURE__ */ React13.createElement("path", {
                    d: "M25,10L25,50L65,50   M10,25L50,25L50,65",
                    style: {
                        stroke: "white",
                        strokeWidth: 5,
                        fill: "none"
                    }
                }));
            }
        },
        {
            key: "renderSubIcons",
            value: function renderSubIcons() {
                var frame = this.moveableData.getSelectedFrames()[0];
                var cropType = this.memory.get("crop") || "inset";
                if (frame) {
                    var clipPath = frame.get("clip-path") || frame.get("clip");
                    if (clipPath) {
                        cropType = (0, import_utils4.splitBracket)(clipPath).prefix;
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
        },
        {
            key: "onSubSelect",
            value: function onSubSelect(id) {
                var moveableData = this.moveableData;
                var frame = moveableData.getSelectedFrames()[0];
                if (frame) {
                    var clipPath = frame.get("clip-path") || frame.get("clip");
                    if (clipPath) {
                        var cropType = (0, import_utils4.splitBracket)(clipPath).prefix;
                        if (id !== cropType) {
                            var infos = moveableData.removeProperties("clip-path", "clip");
                            this.historyManager.addAction("renders", {
                                infos: infos
                            });
                        }
                    }
                }
                this.memory.set("crop", id);
                this.eventBus.requestTrigger("update");
                this.forceUpdate();
            }
        }
    ]);
    return CropIcon;
}(Icon);
CropIcon.id = "Crop";
// src/Editor/Menu/RedoUndo/UndoIcon.tsx
var React14 = __toESM(require("react"));
var UndoIcon = /*#__PURE__*/ function(Icon) {
    _inherits(UndoIcon, Icon);
    var _super = _create_super(UndoIcon);
    function UndoIcon() {
        _class_call_check(this, UndoIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.onClick = function() {
            _this.editor.historyManager.undo();
        };
        return _this;
    }
    _create_class(UndoIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React14.createElement("i", {
                    className: "fa-solid fa-rotate-left"
                });
            }
        }
    ]);
    return UndoIcon;
}(Icon);
UndoIcon.id = "Undo";
// src/Editor/Menu/RedoUndo/RedoIcon.tsx
var React15 = __toESM(require("react"));
var RedoIcon = /*#__PURE__*/ function(Icon) {
    _inherits(RedoIcon, Icon);
    var _super = _create_super(RedoIcon);
    function RedoIcon() {
        _class_call_check(this, RedoIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.onClick = function() {
            _this.editor.historyManager.redo();
        };
        return _this;
    }
    _create_class(RedoIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React15.createElement("i", {
                    className: "fa-solid fa-rotate-right"
                });
            }
        }
    ]);
    return RedoIcon;
}(Icon);
RedoIcon.id = "Redo";
// src/Editor/Menu/TextIcons/TextColorIcon.tsx
var React19 = __toESM(require("react"));
// src/Editor/Inputs/ColorIconPicker.tsx
var React18 = __toESM(require("react"));
// src/Editor/Inputs/Input.tsx
var React16 = __toESM(require("react"));
var Input = /*#__PURE__*/ function(_React16_PureComponent) {
    _inherits(Input, _React16_PureComponent);
    var _super = _create_super(Input);
    function Input() {
        _class_call_check(this, Input);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.input = React16.createRef();
        return _this;
    }
    _create_class(Input, [
        {
            key: "getValue",
            value: function getValue() {
                return;
            }
        },
        {
            key: "setValue",
            value: function setValue(value) {}
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var props = this.props;
                props.updateValue && this.setValue(props.value);
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                var props = this.props;
                props.updateValue && this.setValue(props.value);
            }
        }
    ]);
    return Input;
}(React16.PureComponent);
// src/Editor/Inputs/ColorPicker.tsx
var React17 = __toESM(require("react"));
var import_react_color = require("react-color");
var presetColors = [
    "transparent",
    "#D0021B",
    "#F5A623",
    "#F8E71C",
    "#8B572A",
    "#7ED321",
    "#417505",
    "#BD10E0",
    "#9013FE",
    "#4A90E2",
    "#50E3C2",
    "#B8E986",
    "#000000",
    "#4A4A4A",
    "#9B9B9B",
    "#FFFFFF"
];
var ColorPicker = /*#__PURE__*/ function(Input) {
    _inherits(ColorPicker, Input);
    var _super = _create_super(ColorPicker);
    function ColorPicker() {
        _class_call_check(this, ColorPicker);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.inputAttributes = {};
        _this.state = {
            color: "rgba(255, 255, 255, 255)"
        };
        _this.onChange = function(e) {
            var _e_rgb = e.rgb, r = _e_rgb.r, g = _e_rgb.g, b = _e_rgb.b, a = _e_rgb.a;
            _this.setState({
                color: "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")")
            });
        };
        _this.onChangeComplete = function(e) {
            var _e_rgb = e.rgb, r = _e_rgb.r, g = _e_rgb.g, b = _e_rgb.b, a = _e_rgb.a;
            _this.props.onChange("rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(a, ")"));
        };
        return _this;
    }
    _create_class(ColorPicker, [
        {
            key: "render",
            value: function render() {
                var color = this.state.color;
                return /* @__PURE__ */ React17.createElement(import_react_color.SketchPicker, {
                    width: "200px",
                    color: color,
                    onChange: this.onChange,
                    onChangeComplete: this.onChangeComplete,
                    presetColors: presetColors
                });
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {}
        },
        {
            key: "setValue",
            value: function setValue(v) {
                this.setState({
                    color: v
                });
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.state.color;
            }
        }
    ]);
    return ColorPicker;
}(Input);
// src/Editor/Inputs/ColorIconPicker.tsx
var ColorIconPicker = /*#__PURE__*/ function(Input) {
    _inherits(ColorIconPicker, Input);
    var _super = _create_super(ColorIconPicker);
    function ColorIconPicker() {
        _class_call_check(this, ColorIconPicker);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.inputAttributes = {};
        _this.colorInput = React18.createRef();
        _this.textInput = React18.createRef();
        _this.state = {
            display: "none",
            color: _this.props.value || "#fff"
        };
        _this.onFocus = function() {
            _this.setState({
                display: "block"
            });
        };
        _this.onBlur = function(e) {
            var relatedTarget = e.nativeEvent.relatedTarget;
            if (_this.input.current.contains(relatedTarget)) {
                return;
            }
            _this.setState({
                display: "none"
            });
        };
        _this.onChange = function(v) {
            _this.props.onChange(v);
        };
        _this.onDragStart = function(e) {
            if (e.target.tagName === "INPUT") {
                return;
            }
            e.preventDefault();
        };
        _this.onClick = function() {
            _this.textInput.current.focus();
        };
        return _this;
    }
    _create_class(ColorIconPicker, [
        {
            key: "render",
            value: function render() {
                return /* @__PURE__ */ React18.createElement("div", {
                    className: "color-picker",
                    onClick: this.onClick,
                    onBlur: this.onBlur,
                    ref: this.input
                }, /* @__PURE__ */ React18.createElement("input", {
                    style: {
                        opacity: 0
                    },
                    ref: this.textInput,
                    onFocus: this.onFocus
                }), !this.props.isTextIcon ? /* @__PURE__ */ React18.createElement(React18.Fragment, null, this.props.icon, /* @__PURE__ */ React18.createElement("div", {
                    className: "color-preview",
                    style: {
                        background: this.props.value
                    }
                })) : /* @__PURE__ */ React18.createElement("span", {
                    className: "color-preview-circle",
                    style: {
                        background: this.props.value
                    }
                }), this.renderPicker());
            }
        },
        {
            key: "renderPicker",
            value: function renderPicker() {
                var display = this.state.display;
                if (display === "none") {
                    return;
                }
                return /* @__PURE__ */ React18.createElement("div", {
                    className: prefix("color-picker"),
                    onMouseDown: this.onDragStart,
                    onTouchStart: this.onDragStart,
                    style: {
                        display: display
                    }
                }, /* @__PURE__ */ React18.createElement(ColorPicker, {
                    ref: this.colorInput,
                    onChange: this.onChange
                }));
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.props.value;
            }
        }
    ]);
    return ColorIconPicker;
}(Input);
// src/Editor/Menu/TextIcons/TextColorIcon.tsx
var TextColorIcon = /*#__PURE__*/ function(Icon) {
    _inherits(TextColorIcon, Icon);
    var _super = _create_super(TextColorIcon);
    function TextColorIcon() {
        _class_call_check(this, TextColorIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.colorInput = React19.createRef();
        _this.propertyName = "color";
        _this.propertyValue = "#fff";
        _this.onChangeTextColor = function(v) {
            _this.memory.set("color", v);
            _this.editor.setProperty([
                "color"
            ], v, true);
            _this.editor.forceUpdate();
        };
        _this.onClick = function() {
            var _this_colorInput_current;
            (_this_colorInput_current = _this.colorInput.current) === null || _this_colorInput_current === void 0 ? void 0 : _this_colorInput_current.onClick();
        };
        _this.setTargets = function() {
            _this.forceUpdate();
        };
        return _this;
    }
    _create_class(TextColorIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                var color = this.getOldValue() || "#fff";
                return /* @__PURE__ */ React19.createElement(ColorIconPicker, {
                    icon: /* @__PURE__ */ React19.createElement("i", {
                        className: "fa-solid fa-a"
                    }),
                    onChange: this.onChangeTextColor,
                    value: color,
                    ref: this.colorInput,
                    isTextIcon: true
                });
            }
        },
        {
            key: "getOldValue",
            value: function getOldValue() {
                var _this_moveableData_getProperties = _sliced_to_array(this.moveableData.getProperties([
                    [
                        this.propertyName
                    ]
                ], [
                    "none"
                ]), 1), oldValue = _this_moveableData_getProperties[0];
                return oldValue;
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.onChangeTextColor(this.getOldValue());
                this.editor.eventBus.on("setSelectedTargets", this.setTargets);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.editor.eventBus.off("setSelectedTargets", this.setTargets);
            }
        }
    ]);
    return TextColorIcon;
}(Icon);
TextColorIcon.id = "TextColor";
// src/Editor/Menu/TextIcons/BoldIcon.tsx
var React20 = __toESM(require("react"));
var BoldIcon = /*#__PURE__*/ function(Icon) {
    _inherits(BoldIcon, Icon);
    var _super = _create_super(BoldIcon);
    function BoldIcon() {
        _class_call_check(this, BoldIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.propertyName = "font-weight";
        _this.propertyValue = "bold";
        _this.onClick = function() {
            var v = _this.propertyValue;
            if (_this.getOldValue() === _this.propertyValue) {
                v = "normal";
            }
            _this.memory.set(_this.propertyName, v);
            _this.editor.setProperty([
                _this.propertyName
            ], v, true);
            _this.editor.forceUpdate();
            _this.loadFirtData();
        };
        _this.setTargets = function() {
            _this.forceUpdate();
            _this.editor.forceUpdate();
        };
        return _this;
    }
    _create_class(BoldIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React20.createElement("i", {
                    className: "fa-solid fa-bold"
                });
            }
        },
        {
            key: "getOldValue",
            value: function getOldValue() {
                var _this_moveableData_getProperties = _sliced_to_array(this.moveableData.getProperties([
                    [
                        this.propertyName
                    ]
                ], [
                    "normal"
                ]), 1), oldValue = _this_moveableData_getProperties[0];
                return oldValue;
            }
        },
        {
            key: "loadFirtData",
            value: function loadFirtData() {
                if (this.getOldValue() === this.propertyValue) {
                    this.setState({
                        selected: true
                    });
                } else {
                    this.setState({
                        selected: false
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadFirtData();
                this.editor.eventBus.on("setSelectedTargets", this.setTargets);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.editor.eventBus.off("setSelectedTargets", this.setTargets);
            }
        }
    ]);
    return BoldIcon;
}(Icon);
BoldIcon.id = "TextBold";
// src/Editor/Menu/TextIcons/ItalicIcon.tsx
var React21 = __toESM(require("react"));
var ItalicIcon = /*#__PURE__*/ function(Icon) {
    _inherits(ItalicIcon, Icon);
    var _super = _create_super(ItalicIcon);
    function ItalicIcon() {
        _class_call_check(this, ItalicIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.propertyName = "font-style";
        _this.propertyValue = "italic";
        _this.onClick = function() {
            var v = _this.propertyValue;
            if (_this.getOldValue() === _this.propertyValue) {
                v = "normal";
            }
            _this.memory.set(_this.propertyName, v);
            _this.editor.setProperty([
                _this.propertyName
            ], v, true);
            _this.editor.forceUpdate();
            _this.loadFirtData();
        };
        _this.setTargets = function() {
            _this.forceUpdate();
            _this.editor.forceUpdate();
        };
        return _this;
    }
    _create_class(ItalicIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React21.createElement("i", {
                    className: "fa-solid fa-italic"
                });
            }
        },
        {
            key: "getOldValue",
            value: function getOldValue() {
                var _this_moveableData_getProperties = _sliced_to_array(this.moveableData.getProperties([
                    [
                        this.propertyName
                    ]
                ], [
                    "normal"
                ]), 1), oldValue = _this_moveableData_getProperties[0];
                return oldValue;
            }
        },
        {
            key: "loadFirtData",
            value: function loadFirtData() {
                if (this.getOldValue() === this.propertyValue) {
                    this.setState({
                        selected: true
                    });
                } else {
                    this.setState({
                        selected: false
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadFirtData();
                this.editor.eventBus.on("setSelectedTargets", this.setTargets);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.editor.eventBus.off("setSelectedTargets", this.setTargets);
            }
        }
    ]);
    return ItalicIcon;
}(Icon);
ItalicIcon.id = "TextItalic";
// src/Editor/Menu/TextIcons/UnderlinedIcon.tsx
var React22 = __toESM(require("react"));
var UnderlineIcon = /*#__PURE__*/ function(Icon) {
    _inherits(UnderlineIcon, Icon);
    var _super = _create_super(UnderlineIcon);
    function UnderlineIcon() {
        _class_call_check(this, UnderlineIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.propertyName = "text-decoration";
        _this.propertyValue = "underline";
        _this.onClick = function() {
            var v = _this.propertyValue;
            if (_this.getOldValue() === _this.propertyValue) {
                v = "none";
            }
            _this.memory.set(_this.propertyName, v);
            _this.editor.setProperty([
                _this.propertyName
            ], v, true);
            _this.loadFirtData();
            _this.editor.forceUpdate();
        };
        _this.setTargets = function() {
            _this.forceUpdate();
            _this.editor.forceUpdate();
        };
        return _this;
    }
    _create_class(UnderlineIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React22.createElement("i", {
                    className: "fa-solid fa-underline"
                });
            }
        },
        {
            key: "getOldValue",
            value: function getOldValue() {
                var _this_moveableData_getProperties = _sliced_to_array(this.moveableData.getProperties([
                    [
                        this.propertyName
                    ]
                ], [
                    "none"
                ]), 1), oldValue = _this_moveableData_getProperties[0];
                return oldValue;
            }
        },
        {
            key: "loadFirtData",
            value: function loadFirtData() {
                if (this.getOldValue() === this.propertyValue) {
                    this.setState({
                        selected: true
                    });
                } else {
                    this.setState({
                        selected: false
                    });
                }
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadFirtData();
                this.editor.eventBus.on("setSelectedTargets", this.setTargets);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.editor.eventBus.off("setSelectedTargets", this.setTargets);
            }
        }
    ]);
    return UnderlineIcon;
}(Icon);
UnderlineIcon.id = "TextUnderline";
// src/Editor/Menu/TextIcons/FontFamily.tsx
var React24 = __toESM(require("react"));
// src/Editor/Inputs/SelectBox.tsx
var React23 = __toESM(require("react"));
var import_utils6 = require("@daybrush/utils");
var SelectBox = /*#__PURE__*/ function(Input) {
    _inherits(SelectBox, Input);
    var _super = _create_super(SelectBox);
    function SelectBox() {
        _class_call_check(this, SelectBox);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.inputAttributes = {};
        _this.onInput = function(e) {
            var ev = e.nativeEvent || e;
            if (!(0, import_utils6.isUndefined)(ev.data)) {
                return;
            }
            _this.props.onChange(_this.input.current.value);
        };
        return _this;
    }
    _create_class(SelectBox, [
        {
            key: "render",
            value: function render() {
                var options = this.props.options || [];
                return /* @__PURE__ */ React23.createElement("select", _object_spread_props(_object_spread({
                    ref: this.input,
                    className: prefix("select")
                }, this.inputAttributes, this.props.inputProps), {
                    value: this.props.value,
                    defaultValue: this.props.value,
                    onInput: this.onInput
                }), options.map(function(value) {
                    return /* @__PURE__ */ React23.createElement("option", {
                        key: value,
                        value: value
                    }, value);
                }));
            }
        },
        {
            key: "getValue",
            value: function getValue() {
                return this.input.current.value;
            }
        },
        {
            key: "setValue",
            value: function setValue(value) {
                this.input.current.value = "".concat((0, import_utils6.isUndefined)(value) ? "" : value);
            }
        }
    ]);
    return SelectBox;
}(Input);
// src/Editor/Menu/TextIcons/FontFamily.tsx
var fontFamily = [
    "Avenir",
    "sans-serif"
];
var FontFamily = /*#__PURE__*/ function(Icon) {
    _inherits(FontFamily, Icon);
    var _super = _create_super(FontFamily);
    function FontFamily() {
        _class_call_check(this, FontFamily);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.propertyName = "font-family";
        _this.propertyValue = "Avenir";
        _this.onClick = function() {};
        _this.onChange = function(v) {
            _this.memory.set(_this.propertyName, v);
            _this.editor.setProperty([
                _this.propertyName
            ], v, true);
            _this.forceUpdate();
            _this.editor.forceUpdate();
        };
        _this.setTargets = function() {
            _this.forceUpdate();
            _this.editor.forceUpdate();
        };
        return _this;
    }
    _create_class(FontFamily, [
        {
            key: "render",
            value: function render() {
                var value = this.getOldValue();
                var fontFamilyList = this.editor.props.fontFamily || fontFamily;
                return /* @__PURE__ */ React24.createElement("div", {
                    className: "scene-font-family"
                }, /* @__PURE__ */ React24.createElement(SelectBox, {
                    onChange: this.onChange,
                    options: fontFamilyList.sort(function(a, b) {
                        return a.localeCompare(b, void 0, {
                            sensitivity: "base"
                        });
                    }),
                    value: value
                }));
            }
        },
        {
            key: "renderIcon",
            value: function renderIcon() {}
        },
        {
            key: "getOldValue",
            value: function getOldValue() {
                var _this_moveableData_getProperties = _sliced_to_array(this.moveableData.getProperties([
                    [
                        this.propertyName
                    ]
                ], [
                    "Avenir"
                ]), 1), oldValue = _this_moveableData_getProperties[0];
                return oldValue;
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.editor.eventBus.on("setSelectedTargets", this.setTargets);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.editor.eventBus.off("setSelectedTargets", this.setTargets);
            }
        }
    ]);
    return FontFamily;
}(Icon);
FontFamily.id = "FontFamily";
FontFamily.width = 93;
// src/Editor/Menu/TextIcons/FontSize.tsx
var React25 = __toESM(require("react"));
var sizes = [
    "10px",
    "11px",
    "12px",
    "14px",
    "18px",
    "24px"
];
var FontSize = /*#__PURE__*/ function(Icon) {
    _inherits(FontSize, Icon);
    var _super = _create_super(FontSize);
    function FontSize() {
        _class_call_check(this, FontSize);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.propertyName = "font-size";
        _this.propertyValue = "16px";
        _this.onClick = function() {};
        _this.onChange = function(v) {
            _this.memory.set(_this.propertyName, v);
            _this.editor.setProperty([
                _this.propertyName
            ], v, true);
            _this.forceUpdate();
            _this.editor.forceUpdate();
        };
        _this.setTargets = function() {
            _this.forceUpdate();
            _this.editor.forceUpdate();
        };
        return _this;
    }
    _create_class(FontSize, [
        {
            key: "render",
            value: function render() {
                var _this = this;
                var value = this.getOldValue();
                var parsedValue = parseInt((value || "").replace("px", ""));
                var sizesList = JSON.parse(JSON.stringify(sizes));
                if (!sizesList.includes(value)) {
                    sizesList.push(value);
                }
                return /* @__PURE__ */ React25.createElement("div", {
                    className: "scene-font-size"
                }, /* @__PURE__ */ React25.createElement("button", {
                    onClick: function() {
                        _this.onChange("".concat(parsedValue - 1, "px"));
                    }
                }, /* @__PURE__ */ React25.createElement("i", {
                    className: "fa-solid fa-minus"
                })), /* @__PURE__ */ React25.createElement(SelectBox, {
                    onChange: this.onChange,
                    options: sizesList.sort(function(a, b) {
                        return parseInt(a) - parseInt(b);
                    }),
                    value: value
                }), /* @__PURE__ */ React25.createElement("button", {
                    onClick: function() {
                        _this.onChange("".concat(parsedValue + 1, "px"));
                    }
                }, /* @__PURE__ */ React25.createElement("i", {
                    className: "fa-solid fa-plus"
                })));
            }
        },
        {
            key: "renderIcon",
            value: function renderIcon() {}
        },
        {
            key: "getOldValue",
            value: function getOldValue() {
                var _this_moveableData_getProperties = _sliced_to_array(this.moveableData.getProperties([
                    [
                        this.propertyName
                    ]
                ], [
                    "16px"
                ]), 1), oldValue = _this_moveableData_getProperties[0];
                return oldValue;
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.editor.eventBus.on("setSelectedTargets", this.setTargets);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.editor.eventBus.off("setSelectedTargets", this.setTargets);
            }
        }
    ]);
    return FontSize;
}(Icon);
FontSize.id = "FontSize";
FontSize.width = 98;
// src/Editor/Menu/TextIcons/Aligns/AlignLeftIcon.tsx
var React26 = __toESM(require("react"));
var AlignLeftIcon = /*#__PURE__*/ function(Icon) {
    _inherits(AlignLeftIcon, Icon);
    var _super = _create_super(AlignLeftIcon);
    function AlignLeftIcon() {
        _class_call_check(this, AlignLeftIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.propertyName = "text-align";
        _this.propertyValue = "left";
        _this.onClick = function() {
            var v = _this.propertyValue;
            _this.memory.set(_this.propertyName, v);
            _this.editor.setProperty([
                _this.propertyName
            ], v, true);
            _this.eventBus.trigger("setSelectedTargets");
        };
        _this.setTargets = function() {
            _this.forceUpdate();
        };
        return _this;
    }
    _create_class(AlignLeftIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React26.createElement("i", {
                    className: "fa-solid fa-align-right fa-rotate-180"
                });
            }
        },
        {
            key: "getOldValue",
            value: function getOldValue() {
                var _this_moveableData_getProperties = _sliced_to_array(this.moveableData.getProperties([
                    [
                        this.propertyName
                    ]
                ], [
                    "left"
                ]), 1), oldValue = _this_moveableData_getProperties[0];
                return oldValue;
            }
        },
        {
            key: "loadFirtData",
            value: function loadFirtData() {
                if (this.getOldValue() === this.propertyValue) {
                    this.setState({
                        selected: true
                    });
                } else {
                    this.setState({
                        selected: false
                    });
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.loadFirtData();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadFirtData();
                this.editor.eventBus.on("setSelectedTargets", this.setTargets);
                this.editor.eventBus.on("alignUpdate", this.setTargets);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.editor.eventBus.off("setSelectedTargets", this.setTargets);
                this.editor.eventBus.off("alignUpdate", this.setTargets);
            }
        }
    ]);
    return AlignLeftIcon;
}(Icon);
AlignLeftIcon.id = "AlignLeftIcon";
// src/Editor/Menu/TextIcons/Aligns/AlignRightIcon.tsx
var React27 = __toESM(require("react"));
var AlignRightIcon = /*#__PURE__*/ function(Icon) {
    _inherits(AlignRightIcon, Icon);
    var _super = _create_super(AlignRightIcon);
    function AlignRightIcon() {
        _class_call_check(this, AlignRightIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.propertyName = "text-align";
        _this.propertyValue = "right";
        _this.onClick = function() {
            var v = _this.propertyValue;
            _this.memory.set(_this.propertyName, v);
            _this.editor.setProperty([
                _this.propertyName
            ], v, true);
            _this.eventBus.trigger("setSelectedTargets");
        };
        _this.setTargets = function() {
            _this.forceUpdate();
        };
        return _this;
    }
    _create_class(AlignRightIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React27.createElement("i", {
                    className: "fa-solid fa-align-left fa-rotate-180"
                });
            }
        },
        {
            key: "getOldValue",
            value: function getOldValue() {
                var _this_moveableData_getProperties = _sliced_to_array(this.moveableData.getProperties([
                    [
                        this.propertyName
                    ]
                ], [
                    ""
                ]), 1), oldValue = _this_moveableData_getProperties[0];
                return oldValue;
            }
        },
        {
            key: "loadFirtData",
            value: function loadFirtData() {
                if (this.getOldValue() === this.propertyValue) {
                    this.setState({
                        selected: true
                    });
                } else {
                    this.setState({
                        selected: false
                    });
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.loadFirtData();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadFirtData();
                this.editor.eventBus.on("setSelectedTargets", this.setTargets);
                this.editor.eventBus.on("alignUpdate", this.setTargets);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.editor.eventBus.off("setSelectedTargets", this.setTargets);
                this.editor.eventBus.off("alignUpdate", this.setTargets);
            }
        }
    ]);
    return AlignRightIcon;
}(Icon);
AlignRightIcon.id = "AlignRightIcon";
// src/Editor/Menu/TextIcons/Aligns/AlignCenter.tsx
var React28 = __toESM(require("react"));
var AlignCenterIcon = /*#__PURE__*/ function(Icon) {
    _inherits(AlignCenterIcon, Icon);
    var _super = _create_super(AlignCenterIcon);
    function AlignCenterIcon() {
        _class_call_check(this, AlignCenterIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.propertyName = "text-align";
        _this.propertyValue = "center";
        _this.onClick = function() {
            var v = _this.propertyValue;
            _this.memory.set(_this.propertyName, v);
            _this.editor.setProperty([
                _this.propertyName
            ], v, true);
            _this.eventBus.trigger("setSelectedTargets");
        };
        _this.setTargets = function() {
            _this.forceUpdate();
            _this.editor.forceUpdate();
        };
        return _this;
    }
    _create_class(AlignCenterIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React28.createElement("i", {
                    className: "fa-solid fa-align-center fa-rotate-180"
                });
            }
        },
        {
            key: "getOldValue",
            value: function getOldValue() {
                var _this_moveableData_getProperties = _sliced_to_array(this.moveableData.getProperties([
                    [
                        this.propertyName
                    ]
                ], [
                    "left"
                ]), 1), oldValue = _this_moveableData_getProperties[0];
                return oldValue;
            }
        },
        {
            key: "loadFirtData",
            value: function loadFirtData() {
                if (this.getOldValue() === this.propertyValue) {
                    this.setState({
                        selected: true
                    });
                } else {
                    this.setState({
                        selected: false
                    });
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.loadFirtData();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadFirtData();
                this.editor.eventBus.on("setSelectedTargets", this.setTargets);
                this.editor.eventBus.on("alignUpdate", this.setTargets);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.editor.eventBus.off("setSelectedTargets", this.setTargets);
                this.editor.eventBus.off("alignUpdate", this.setTargets);
            }
        }
    ]);
    return AlignCenterIcon;
}(Icon);
AlignCenterIcon.id = "AlignCenterIcon";
// src/Editor/Menu/TextIcons/Aligns/AlignJustify.tsx
var React29 = __toESM(require("react"));
var AlignJustifyIcon = /*#__PURE__*/ function(Icon) {
    _inherits(AlignJustifyIcon, Icon);
    var _super = _create_super(AlignJustifyIcon);
    function AlignJustifyIcon() {
        _class_call_check(this, AlignJustifyIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.propertyName = "text-align";
        _this.propertyValue = "justify";
        _this.onClick = function() {
            var v = _this.propertyValue;
            _this.memory.set(_this.propertyName, v);
            _this.editor.setProperty([
                _this.propertyName
            ], v, true);
            _this.eventBus.trigger("setSelectedTargets");
        };
        _this.setTargets = function() {
            _this.forceUpdate();
        };
        return _this;
    }
    _create_class(AlignJustifyIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React29.createElement("i", {
                    className: "fa-solid fa-align-justify fa-rotate-180"
                });
            }
        },
        {
            key: "getOldValue",
            value: function getOldValue() {
                var _this_moveableData_getProperties = _sliced_to_array(this.moveableData.getProperties([
                    [
                        this.propertyName
                    ]
                ], [
                    "left"
                ]), 1), oldValue = _this_moveableData_getProperties[0];
                return oldValue;
            }
        },
        {
            key: "loadFirtData",
            value: function loadFirtData() {
                if (this.getOldValue() === this.propertyValue) {
                    this.setState({
                        selected: true
                    });
                } else {
                    this.setState({
                        selected: false
                    });
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                this.loadFirtData();
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.loadFirtData();
                this.editor.eventBus.on("setSelectedTargets", this.setTargets);
                this.editor.eventBus.on("alignUpdate", this.setTargets);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.editor.eventBus.off("setSelectedTargets", this.setTargets);
                this.editor.eventBus.off("alignUpdate", this.setTargets);
            }
        }
    ]);
    return AlignJustifyIcon;
}(Icon);
AlignJustifyIcon.id = "AlignJustifyIcon";
// src/Editor/Menu/ShapeIcons/FillIcon.tsx
var React30 = __toESM(require("react"));
var FillIcon = /*#__PURE__*/ function(Icon) {
    _inherits(FillIcon, Icon);
    var _super = _create_super(FillIcon);
    function FillIcon() {
        _class_call_check(this, FillIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.colorInput = React30.createRef();
        _this.propertyName = "background-color";
        _this.propertyValue = "#4af";
        _this.onChangeTextColor = function(v) {
            _this.memory.set(_this.propertyName, v);
            _this.editor.setProperty([
                _this.propertyName
            ], v, true);
            _this.forceUpdate();
        };
        _this.onClick = function() {
            var _this_colorInput_current;
            (_this_colorInput_current = _this.colorInput.current) === null || _this_colorInput_current === void 0 ? void 0 : _this_colorInput_current.onClick();
        };
        _this.setTargets = function() {
            _this.forceUpdate();
        };
        return _this;
    }
    _create_class(FillIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                var color = this.getOldValue() || "#4af";
                return /* @__PURE__ */ React30.createElement(ColorIconPicker, {
                    icon: /* @__PURE__ */ React30.createElement("i", {
                        className: "fa-solid fa-fill-drip"
                    }),
                    onChange: this.onChangeTextColor,
                    value: color,
                    ref: this.colorInput
                });
            }
        },
        {
            key: "getOldValue",
            value: function getOldValue() {
                var _this_moveableData_getProperties = _sliced_to_array(this.moveableData.getProperties([
                    [
                        this.propertyName
                    ]
                ], [
                    "#4af"
                ]), 1), oldValue = _this_moveableData_getProperties[0];
                return oldValue;
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.onChangeTextColor(this.getOldValue());
                this.editor.eventBus.on("setSelectedTargets", this.setTargets);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.editor.eventBus.off("setSelectedTargets", this.setTargets);
            }
        }
    ]);
    return FillIcon;
}(Icon);
FillIcon.id = "FillIcon";
// src/Editor/Menu/ShapeIcons/BorderColorIcon.tsx
var React31 = __toESM(require("react"));
var BorderColorIcon = /*#__PURE__*/ function(Icon) {
    _inherits(BorderColorIcon, Icon);
    var _super = _create_super(BorderColorIcon);
    function BorderColorIcon() {
        _class_call_check(this, BorderColorIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.colorInput = React31.createRef();
        _this.propertyName = "outline-color";
        _this.propertyValue = "transparent";
        _this.onChangeTextColor = function(v) {
            _this.memory.set(_this.propertyName, v);
            _this.editor.setProperty([
                _this.propertyName
            ], v, true);
            _this.forceUpdate();
        };
        _this.onClick = function() {
            var _this_colorInput_current;
            (_this_colorInput_current = _this.colorInput.current) === null || _this_colorInput_current === void 0 ? void 0 : _this_colorInput_current.onClick();
        };
        _this.setTargets = function() {
            _this.forceUpdate();
        };
        return _this;
    }
    _create_class(BorderColorIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                var color = this.getOldValue() || "transparent";
                return /* @__PURE__ */ React31.createElement(ColorIconPicker, {
                    icon: /* @__PURE__ */ React31.createElement("i", {
                        className: "fa-solid fa-pen"
                    }),
                    onChange: this.onChangeTextColor,
                    value: color,
                    ref: this.colorInput
                });
            }
        },
        {
            key: "getOldValue",
            value: function getOldValue() {
                var _this_moveableData_getProperties = _sliced_to_array(this.moveableData.getProperties([
                    [
                        this.propertyName
                    ]
                ], [
                    "transparent"
                ]), 1), oldValue = _this_moveableData_getProperties[0];
                return oldValue;
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.onChangeTextColor(this.getOldValue());
                this.editor.eventBus.on("setSelectedTargets", this.setTargets);
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.editor.eventBus.off("setSelectedTargets", this.setTargets);
            }
        }
    ]);
    return BorderColorIcon;
}(Icon);
BorderColorIcon.id = "BorderColorIcon";
// src/Editor/Menu/Zoom/MoreZoom.tsx
var React32 = __toESM(require("react"));
var MoreZoomIcon = /*#__PURE__*/ function(Icon) {
    _inherits(MoreZoomIcon, Icon);
    var _super = _create_super(MoreZoomIcon);
    function MoreZoomIcon() {
        _class_call_check(this, MoreZoomIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.onClick = function() {
            var newZoom = _this.editor.state.zoom + 0.1;
            _this.editor.setState({
                zoom: newZoom
            });
        };
        return _this;
    }
    _create_class(MoreZoomIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React32.createElement("i", {
                    className: "fa-solid fa-plus"
                });
            }
        }
    ]);
    return MoreZoomIcon;
}(Icon);
MoreZoomIcon.id = "MoreZoom";
// src/Editor/Menu/Zoom/LessZoom.tsx
var React33 = __toESM(require("react"));
var LessZoomIcon = /*#__PURE__*/ function(Icon) {
    _inherits(LessZoomIcon, Icon);
    var _super = _create_super(LessZoomIcon);
    function LessZoomIcon() {
        _class_call_check(this, LessZoomIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.onClick = function() {
            var newZoom = _this.editor.state.zoom - 0.1;
            _this.editor.setState({
                zoom: newZoom <= 1 ? 1 : newZoom
            });
        };
        return _this;
    }
    _create_class(LessZoomIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React33.createElement("i", {
                    className: "fa-solid fa-minus"
                });
            }
        }
    ]);
    return LessZoomIcon;
}(Icon);
LessZoomIcon.id = "LessZoom";
// src/Editor/Menu/Zoom/ZoomText.tsx
var React34 = __toESM(require("react"));
var ZoomTextIcon = /*#__PURE__*/ function(Icon) {
    _inherits(ZoomTextIcon, Icon);
    var _super = _create_super(ZoomTextIcon);
    function ZoomTextIcon() {
        _class_call_check(this, ZoomTextIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.onClick = function() {};
        return _this;
    }
    _create_class(ZoomTextIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React34.createElement("span", {
                    style: {
                        fontSize: "0.8rem"
                    }
                }, "Zoom");
            }
        }
    ]);
    return ZoomTextIcon;
}(Icon);
ZoomTextIcon.id = "ZoomText";
// src/Editor/Menu/MenusList.ts
var HomeMenu = [
    MoveToolIcon,
    Divider,
    PrintAreaIcon,
    TextIcon,
    ImageIcon,
    Divider,
    LessZoomIcon,
    ZoomTextIcon,
    MoreZoomIcon,
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
// src/Editor/Menu/DropdownIcon.tsx
var React35 = __toESM(require("react"));
var import_Menu = __toESM(require("@mui/material/Menu"));
function DropdownIcon(param) {
    var children = param.children;
    var _React35_useState = _sliced_to_array(React35.useState(null), 2), anchorEl = _React35_useState[0], setAnchorEl = _React35_useState[1];
    var open = Boolean(anchorEl);
    var handleClick = function(event) {
        setAnchorEl(event.currentTarget);
    };
    var handleClose = function() {
        setAnchorEl(null);
    };
    return /* @__PURE__ */ React35.createElement(React35.Fragment, null, /* @__PURE__ */ React35.createElement("div", {
        className: "scena-icon",
        onClick: handleClick
    }, /* @__PURE__ */ React35.createElement("i", {
        className: "fa-solid fa-ellipsis-vertical"
    })), /* @__PURE__ */ React35.createElement(import_Menu.default, {
        anchorEl: anchorEl,
        open: open,
        onClose: handleClose,
        className: "scena-menu-dropdown"
    }, children));
}
// src/Editor/Menu/Menu.tsx
var Menu2 = /*#__PURE__*/ function(_React36_PureComponent) {
    _inherits(Menu2, _React36_PureComponent);
    var _super = _create_super(Menu2);
    function Menu2() {
        _class_call_check(this, Menu2);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.state = {
            selected: "MoveTool",
            width: 0
        };
        _this.menuRefs = [];
        _this.menuContainerRef = React36.createRef();
        _this.select = function(id) {
            _this.setState({
                selected: id
            });
            _this.props.onSelect(id);
        };
        _this.updateDimensions = function() {
            var container = _this.menuContainerRef.current;
            var width = container.clientWidth || 0;
            width = width - (parseFloat(window.getComputedStyle(container).paddingLeft) + parseFloat(window.getComputedStyle(container).paddingRight));
            _this.setState({
                width: width
            });
        };
        return _this;
    }
    _create_class(Menu2, [
        {
            key: "render",
            value: function render() {
                return /* @__PURE__ */ React36.createElement("div", {
                    className: prefix("menu"),
                    ref: this.menuContainerRef
                }, this.renderMenus());
            }
        },
        {
            key: "renderMenus",
            value: function renderMenus() {
                var _this = this;
                var selected = this.state.selected;
                var editor = this.props.editor;
                var viewport = editor.getViewport();
                var menu = HomeMenu;
                var targets = editor.getSelectedTargets().map(function(target) {
                    return viewport.getInfoByElement(target);
                });
                if (targets.length <= 0) {
                    var resetProperties = [
                        [
                            "font-weight",
                            "normal"
                        ],
                        [
                            "font-size",
                            "16px"
                        ],
                        [
                            "font-style",
                            "normal"
                        ],
                        [
                            "text-decoration",
                            "none"
                        ],
                        [
                            "font-family",
                            "Avenir"
                        ],
                        [
                            "text-align",
                            "left"
                        ]
                    ];
                    resetProperties.forEach(function(p) {
                        editor.memory.set(p[0], p[1]);
                    });
                }
                var isTargetsSame = targets.every(function(t) {
                    return t.name === targets[0].name;
                });
                if (isTargetsSame && targets.length > 0 || selected !== "MoveTool") {
                    var target = selected !== "MoveTool" ? selected : targets[0].name.replaceAll(/\(|\)/g, "");
                    selected = target;
                    if ([
                        "Text"
                    ].includes(target)) {
                        menu = TextMenu;
                    }
                    if ([
                        "PrintArea"
                    ].includes(target)) {
                        menu = PrintAreaMenu;
                    }
                }
                menu = menu.filter(function(m) {
                    return !editor.props.isAdmin ? m.id !== "PrintArea" : true;
                });
                var maxWidth = this.state.width;
                var currentWidth = 0;
                var filteredMenu = [];
                var dropedMenu = [];
                menu.forEach(function(menuItem, i) {
                    if (maxWidth > currentWidth + (i + 1 < menu.length ? menuItem.width : 0)) {
                        filteredMenu.push(menuItem);
                        currentWidth += menuItem.width;
                    } else {
                        currentWidth += menuItem.width;
                        dropedMenu.push(menuItem);
                    }
                });
                return /* @__PURE__ */ React36.createElement(React36.Fragment, null, filteredMenu.map(function(MenuClass, i) {
                    return _this.renderIcon(MenuClass, i, selected);
                }), dropedMenu.length > 0 && /* @__PURE__ */ React36.createElement(DropdownIcon, null, dropedMenu.map(function(MenuClass, i) {
                    return _this.renderIcon(MenuClass, i, selected);
                })));
            }
        },
        {
            key: "renderIcon",
            value: function renderIcon(MenuClass, i, selected) {
                var menuRefs = this.menuRefs;
                var editor = this.props.editor;
                var id = MenuClass.id;
                if (!menuRefs[i]) {
                    menuRefs[i] = React36.createRef();
                }
                if (id === "Divider") {
                    return /* @__PURE__ */ React36.createElement(MenuClass, {
                        key: i,
                        editor: editor
                    });
                }
                return /* @__PURE__ */ React36.createElement(MenuClass, {
                    ref: menuRefs[i],
                    key: i,
                    editor: editor,
                    selected: Array.isArray(id) ? id.includes(selected) : selected === id,
                    selectedId: selected,
                    onSelect: this.select
                });
            }
        },
        {
            key: "getSelected",
            value: function getSelected() {
                var selected = this.state.selected;
                return CompleteMenu.filter(function(m) {
                    return m.id === selected;
                })[0];
            }
        },
        {
            key: "blur",
            value: function blur() {
                this.menuRefs.forEach(function(ref) {
                    if (!ref.current) {
                        return;
                    }
                    ref.current.blur();
                });
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                window.removeEventListener("resize", this.updateDimensions);
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                window.addEventListener("resize", this.updateDimensions);
                this.updateDimensions();
                this.forceUpdate();
            }
        }
    ]);
    return Menu2;
}(React36.PureComponent);
// src/Editor/Viewport/Viewport.tsx
var React37 = __toESM(require("react"));
var import_utils9 = require("@daybrush/utils");
var Viewport = /*#__PURE__*/ function(_React37_PureComponent) {
    _inherits(Viewport, _React37_PureComponent);
    var _super = _create_super(Viewport);
    function Viewport() {
        _class_call_check(this, Viewport);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.components = {};
        _this.jsxs = {};
        _this.viewport = {
            jsx: /* @__PURE__ */ React37.createElement("div", null),
            name: "Viewport",
            id: "viewport",
            children: []
        };
        _this.ids = {
            viewport: _this.viewport
        };
        _this.state = {};
        _this.viewportRef = React37.createRef();
        return _this;
    }
    _create_class(Viewport, [
        {
            key: "render",
            value: function render() {
                var style = this.props.style;
                var background = this.props.background;
                var editor = this.props.editor;
                var isScreenshot = editor.state.isScreenshot;
                var previewMode = editor.props.previewMode;
                return /* @__PURE__ */ React37.createElement("div", {
                    className: prefix("viewport-container"),
                    onBlur: this.props.onBlur,
                    style: style
                }, this.props.children, /* @__PURE__ */ React37.createElement("div", _object_spread_props(_object_spread({
                    className: prefix("viewport"),
                    id: "scene-viewport"
                }, _define_property({}, DATA_SCENA_ELEMENT_ID, "viewport")), {
                    ref: this.viewportRef,
                    style: _object_spread({}, background && {
                        backgroundImage: "url(".concat(background, ")")
                    }, (isScreenshot || previewMode) && {
                        borderColor: "transparent"
                    })
                }), this.renderChildren(this.getViewportInfos())));
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.ids.viewport.el = this.viewportRef.current;
            }
        },
        {
            key: "renderChildren",
            value: function renderChildren(children) {
                var _this = this;
                var areErrors = false;
                var renders = children.map(function(info, _, allInfos) {
                    var _React37;
                    var _jsx_props;
                    var editor = _this.props.editor;
                    var jsx = info.jsx;
                    var nextChildren = info.children;
                    var renderedChildren = _this.renderChildren(nextChildren);
                    var id = info.id;
                    var isScreenshot = editor.state.isScreenshot;
                    if (isScreenshot && info.name === "(PrintArea)") {
                        return /* @__PURE__ */ React37.createElement("div", null);
                    }
                    if (info.name === "(PrintArea)" && editor.props.printAreaSize) {
                        info.innerHTML = '<div class="print-area-size"><span>'.concat(editor.props.printAreaSize, "</span></div>");
                    }
                    var props = {
                        key: id
                    };
                    props.className = "";
                    if (editor.props.isAdmin || !editor.props.isAdmin && info.name !== "(PrintArea)") {
                        props.className = "selectable ".concat(info.name === "(Text)" ? "Text" : "");
                    }
                    if (info.name === "(PrintArea)") {
                        props.className = "PrintArea ".concat(props.className);
                    }
                    if (info.name !== "(PrintArea)" && info.el && !editor.props.previewMode) {
                        var printAreas = allInfos.filter(function(e) {
                            return e.name === "(PrintArea)";
                        });
                        var isOnArea = printAreas.some(function(p) {
                            return p.el && isDivInsideAnother(info.el, p.el);
                        });
                        if (!props.style) {
                            props.style = {};
                        }
                        if (!isOnArea && !isScreenshot) {
                            props.style.border = "1px dashed #f00";
                            areErrors = true;
                        } else {
                            props.style.border = void 0;
                        }
                    }
                    if (!info.attrs) {
                        info.attrs = {};
                    }
                    if ((0, import_utils9.isString)(jsx)) {
                        var _React371;
                        props[DATA_SCENA_ELEMENT_ID] = id;
                        return (_React371 = React37).createElement.apply(_React371, [
                            jsx,
                            props
                        ].concat(_to_consumable_array(renderedChildren)));
                    } else if (isScenaFunction(jsx)) {
                        props.scenaElementId = id;
                        props.scenaAttrs = info.attrs || {};
                        props.scenaText = info.innerText;
                        props.scenaHTML = info.innerHTML;
                        return React37.createElement(jsx, props);
                    } else if ((0, import_utils9.isString)(jsx.type)) {
                        props[DATA_SCENA_ELEMENT_ID] = id;
                    } else {
                        props.scenaElementId = id;
                        props.scenaAttrs = info.attrs || {};
                        props.scenaText = info.innerText;
                        props.scenaHTML = info.innerHTML;
                    }
                    var jsxChildren = (jsx === null || jsx === void 0 ? void 0 : (_jsx_props = jsx.props) === null || _jsx_props === void 0 ? void 0 : _jsx_props.children) || [];
                    return (_React37 = React37).cloneElement.apply(_React37, [
                        jsx,
                        _object_spread({}, jsx.props, props)
                    ].concat(_to_consumable_array((0, import_utils9.isArray)(jsxChildren) ? jsxChildren : [
                        jsxChildren
                    ]), _to_consumable_array(_this.renderChildren(nextChildren))));
                });
                var onValidate = this.props.editor.props.onValidate;
                onValidate && onValidate(areErrors);
                return renders;
            }
        },
        {
            key: "getJSX",
            value: function getJSX(id) {
                return this.jsxs[id];
            }
        },
        {
            key: "getComponent",
            value: function getComponent(id) {
                return this.components[id];
            }
        },
        {
            key: "makeId",
            value: function makeId() {
                var ids = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.ids;
                while(true){
                    var id = "scena".concat(Math.floor(Math.random() * 1e8));
                    if (ids[id]) {
                        continue;
                    }
                    return id;
                }
            }
        },
        {
            key: "setInfo",
            value: function setInfo(id, info) {
                var ids = this.ids;
                ids[id] = info;
            }
        },
        {
            key: "getInfo",
            value: function getInfo(id) {
                return this.ids[id];
            }
        },
        {
            key: "getLastChildInfo",
            value: function getLastChildInfo(id) {
                var info = this.getInfo(id);
                var children = info ? info.children : [];
                return children[children.length - 1];
            }
        },
        {
            key: "getNextInfo",
            value: function getNextInfo(id) {
                var info = this.getInfo(id);
                if (info.scopeId) {
                    var parentInfo = this.getInfo(info.scopeId);
                    var parentChildren = parentInfo.children;
                    var index = parentChildren.indexOf(info);
                    return parentChildren[index + 1];
                }
                return;
            }
        },
        {
            key: "getPrevInfo",
            value: function getPrevInfo(id) {
                var info = this.getInfo(id);
                var parentInfo = this.getInfo(info.scopeId);
                var parentChildren = parentInfo.children;
                var index = parentChildren.indexOf(info);
                return parentChildren[index - 1];
            }
        },
        {
            key: "getInfoByElement",
            value: function getInfoByElement(el) {
                return this.ids[getId(el)];
            }
        },
        {
            key: "getInfoByIndexes",
            value: function getInfoByIndexes(indexes) {
                return indexes.reduce(function(info, index) {
                    return info.children[index];
                }, this.viewport);
            }
        },
        {
            key: "getElement",
            value: function getElement(id) {
                var info = this.getInfo(id);
                return info ? info.el : null;
            }
        },
        {
            key: "getViewportInfos",
            value: function getViewportInfos() {
                return this.viewport.children;
            }
        },
        {
            key: "getIndexes",
            value: function getIndexes(target) {
                var info = (0, import_utils9.isString)(target) ? this.getInfo(target) : this.getInfoByElement(target);
                if (!info.scopeId) {
                    return [];
                }
                var parentInfo = this.getInfo(info.scopeId);
                return _to_consumable_array(this.getIndexes(info.scopeId)).concat([
                    parentInfo.children.indexOf(info)
                ]);
            }
        },
        {
            key: "registerChildren",
            value: function registerChildren(jsxs, parentScopeId) {
                var _this = this;
                return jsxs.map(function(info) {
                    var id = info.id || _this.makeId();
                    var jsx = info.jsx;
                    var children = info.children || [];
                    var scopeId = parentScopeId || info.scopeId || "viewport";
                    var componentId = "";
                    var jsxId = "";
                    if (isScenaElement(jsx)) {
                        jsxId = _this.makeId(_this.jsxs);
                        _this.jsxs[jsxId] = jsx;
                    }
                    var elementInfo = _object_spread_props(_object_spread({}, info), {
                        jsx: jsx,
                        children: _this.registerChildren(children, id),
                        scopeId: scopeId,
                        componentId: componentId,
                        jsxId: jsxId,
                        frame: info.frame || {},
                        el: null,
                        id: id
                    });
                    _this.setInfo(id, elementInfo);
                    return elementInfo;
                });
            }
        },
        {
            key: "appendJSXs",
            value: function appendJSXs(jsxs, appendIndex, scopeId) {
                var _this = this;
                var jsxInfos = this.registerChildren(jsxs, scopeId);
                jsxInfos.forEach(function(info, i) {
                    var scopeInfo = _this.getInfo(scopeId || info.scopeId);
                    var children = scopeInfo.children;
                    if (appendIndex > -1) {
                        children.splice(appendIndex + i, 1, info);
                        info.index = appendIndex + i;
                    } else if (isNumber(info.index)) {
                        children.splice(info.index, 1, info);
                    } else {
                        info.index = children.length;
                        children.push(info);
                    }
                });
                return new Promise(function(resolve) {
                    _this.forceUpdate(function() {
                        var infos = jsxInfos.map(function registerElement(info) {
                            var id = info.id;
                            var target = document.querySelector("[".concat(DATA_SCENA_ELEMENT_ID, '="').concat(id, '"]'));
                            var attrs = info.attrs || {};
                            info.el = target;
                            for(var name in attrs){
                                target.setAttribute(name, attrs[name]);
                            }
                            info.attrs = getScenaAttrs(target);
                            var children = info.children || [];
                            if (children.length) {
                                children.forEach(registerElement);
                            } else if (info.attrs.istext) {
                                if ("innerText" in info) {
                                    target.innerText = info.innerText || "";
                                } else {
                                    info.innerText = target.innerText || "";
                                }
                            } else if (!info.componentId) {
                                if ("innerHTML" in info) {
                                    target.innerHTML = info.innerHTML || "";
                                } else {
                                    info.innerHTML = target.innerHTML || "";
                                }
                            }
                            return _object_spread({}, info);
                        });
                        resolve({
                            added: infos
                        });
                    });
                });
            }
        },
        {
            key: "getIndex",
            value: function getIndex(id) {
                var indexes = this.getIndexes(id);
                var length = indexes.length;
                return length ? indexes[length - 1] : -1;
            }
        },
        {
            key: "getElements",
            value: function getElements(ids) {
                var _this = this;
                return ids.map(function(id) {
                    return _this.getElement(id);
                }).filter(function(el) {
                    return el;
                });
            }
        },
        {
            key: "unregisterChildren",
            value: function unregisterChildren(children, isChild) {
                var _this = this;
                var ids = this.ids;
                return children.slice(0).map(function(info) {
                    var target = info.el;
                    var innerText = "";
                    var innerHTML = "";
                    if (info.attrs.isText) {
                        innerText = target.innerText;
                    } else {
                        innerHTML = target.innerHTML;
                    }
                    if (!isChild) {
                        var parentInfo = _this.getInfo(info.scopeId);
                        var parentChildren = parentInfo.children;
                        var index = parentChildren.indexOf(info);
                        parentInfo.children.splice(index, 1);
                    }
                    var nextChildren = _this.unregisterChildren(info.children, true);
                    delete ids[info.id];
                    delete info.el;
                    return _object_spread_props(_object_spread({}, info), {
                        innerText: innerText,
                        innerHTML: innerHTML,
                        attrs: getScenaAttrs(target),
                        children: nextChildren
                    });
                });
            }
        },
        {
            key: "removeTargets",
            value: function removeTargets(targets) {
                var _this = this;
                var removedChildren = this.getSortedTargets(targets).map(function(target) {
                    return _this.getInfoByElement(target);
                }).filter(function(info) {
                    return info;
                });
                var indexes = removedChildren.map(function(info) {
                    return _this.getIndex(info.id);
                });
                var removed = this.unregisterChildren(removedChildren);
                removed.forEach(function(info, i) {
                    info.index = indexes[i];
                });
                return new Promise(function(resolve) {
                    _this.forceUpdate(function() {
                        resolve({
                            removed: removed
                        });
                    });
                });
            }
        },
        {
            key: "getSortedIndexesList",
            value: function getSortedIndexesList(targets) {
                var _this = this;
                var indexesList = targets.map(function(target) {
                    if (Array.isArray(target)) {
                        return target;
                    }
                    return _this.getIndexes(target);
                });
                indexesList.sort(function(a, b) {
                    var aLength = a.length;
                    var bLength = b.length;
                    var length = Math.min(aLength, bLength);
                    for(var i = 0; i < length; ++i){
                        if (a[i] === b[i]) {
                            continue;
                        }
                        return a[i] - b[i];
                    }
                    return aLength - bLength;
                });
                return indexesList;
            }
        },
        {
            key: "getSortedTargets",
            value: function getSortedTargets(targets) {
                return this.getSortedInfos(targets).map(function(info) {
                    return info.el;
                });
            }
        },
        {
            key: "getSortedInfos",
            value: function getSortedInfos(targets) {
                var _this = this;
                var indexesList = this.getSortedIndexesList(targets);
                return indexesList.map(function(indexes) {
                    return _this.getInfoByIndexes(indexes);
                });
            }
        },
        {
            key: "moveInside",
            value: function moveInside(target) {
                var info = (0, import_utils9.isString)(target) ? this.getInfo(target) : this.getInfoByElement(target);
                var prevInfo = this.getPrevInfo(info.id);
                var moved;
                if (!prevInfo || isScenaFunction(prevInfo.jsx) || isScenaFunctionElement(prevInfo.jsx)) {
                    moved = [];
                } else {
                    moved = [
                        info
                    ];
                }
                var lastInfo = prevInfo && this.getLastChildInfo(prevInfo.id);
                return this.move(moved, prevInfo, lastInfo);
            }
        },
        {
            key: "moveOutside",
            value: function moveOutside(target) {
                var info = (0, import_utils9.isString)(target) ? this.getInfo(target) : this.getInfoByElement(target);
                var parentInfo = this.getInfo(info.scopeId);
                var rootInfo = this.getInfo(parentInfo.scopeId);
                var moved = rootInfo ? [
                    info
                ] : [];
                return this.move(moved, rootInfo, parentInfo);
            }
        },
        {
            key: "moves",
            value: function moves(nextInfos) {
                var _this = this;
                var prevInfos = nextInfos.map(function(param) {
                    var info = param.info;
                    return {
                        info: info,
                        parentInfo: _this.getInfo(info.scopeId),
                        prevInfo: _this.getPrevInfo(info.id)
                    };
                });
                nextInfos.forEach(function(param) {
                    var info = param.info, parentInfo = param.parentInfo, prevInfo = param.prevInfo;
                    var children = _this.getInfo(info.scopeId).children;
                    children.splice(children.indexOf(info), 1);
                    var parnetChildren = parentInfo.children;
                    parnetChildren.splice(prevInfo ? parnetChildren.indexOf(prevInfo) + 1 : 0, 0, info);
                    info.scopeId = parentInfo.id;
                });
                var infos = nextInfos.map(function(param) {
                    var info = param.info;
                    return info;
                });
                return new Promise(function(resolve) {
                    _this.forceUpdate(function() {
                        infos.forEach(function moveInfo(info) {
                            var id = info.id;
                            var target = document.querySelector("[".concat(DATA_SCENA_ELEMENT_ID, '="').concat(id, '"]'));
                            info.el = target;
                            info.children.forEach(moveInfo);
                        });
                        resolve({
                            moved: infos,
                            prevInfos: prevInfos,
                            nextInfos: nextInfos
                        });
                    });
                });
            }
        },
        {
            key: "move",
            value: function move(infos, parentInfo, prevInfo) {
                var sortedInfos = this.getSortedInfos(infos.map(function(info) {
                    return info.el;
                }));
                return this.moves(sortedInfos.map(function(info, i) {
                    return {
                        info: info,
                        parentInfo: parentInfo,
                        prevInfo: i === 0 ? prevInfo : sortedInfos[i - 1]
                    };
                }));
            }
        }
    ]);
    return Viewport;
}(React37.PureComponent);
// src/Editor/utils/EventBus.ts
var import_component = __toESM(require("@egjs/component"));
var EventBus = /*#__PURE__*/ function(_import_component_default) {
    _inherits(EventBus, _import_component_default);
    var _super = _create_super(EventBus);
    function EventBus() {
        _class_call_check(this, EventBus);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.eventMap = {};
        return _this;
    }
    _create_class(EventBus, [
        {
            key: "requestTrigger",
            value: function requestTrigger(name) {
                var params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var _this = this;
                var eventMap = this.eventMap;
                cancelAnimationFrame(eventMap[name] || 0);
                eventMap[name] = requestAnimationFrame(function() {
                    _this.trigger(name, params);
                });
            }
        }
    ]);
    return EventBus;
}(import_component.default);
var EventBus_default = EventBus;
// src/Editor/utils/Memory.ts
var Memory = /*#__PURE__*/ function() {
    function Memory() {
        _class_call_check(this, Memory);
        this.map = /* @__PURE__ */ new Map();
    }
    _create_class(Memory, [
        {
            key: "get",
            value: function get(key) {
                return this.map.get(key);
            }
        },
        {
            key: "set",
            value: function set(key, value) {
                return this.map.set(key, value);
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.map.clear();
            }
        }
    ]);
    return Memory;
}();
// src/Editor/Viewport/MoveableMananger.tsx
var React38 = __toESM(require("react"));
var import_react_moveable = __toESM(require("react-moveable"));
var import_list_differ = require("@egjs/list-differ");
function restoreRender(id, state, prevState, orders, editor) {
    var el = editor.viewport.current.getElement(id);
    if (!el) {
        console.error("No Element");
        return false;
    }
    var moveableData = editor.moveableData;
    var frame = moveableData.getFrame(el);
    ;
    frame.clear();
    frame.set(state);
    frame.setOrderObject(orders);
    var result = (0, import_list_differ.diff)(Object.keys(prevState), Object.keys(state));
    var removed = result.removed, prevList = result.prevList;
    removed.forEach(function(index) {
        el.style.removeProperty(prevList[index]);
    });
    moveableData.render(el);
    return true;
}
function undoRender(param, editor) {
    var id = param.id, prev = param.prev, next = param.next, prevOrders = param.prevOrders;
    if (!restoreRender(id, prev, next, prevOrders, editor)) {
        return;
    }
    editor.moveableManager.current.updateRect();
    editor.eventBus.trigger("render");
}
function redoRender(param, editor) {
    var id = param.id, prev = param.prev, next = param.next, nextOrders = param.nextOrders;
    if (!restoreRender(id, next, prev, nextOrders, editor)) {
        return;
    }
    editor.moveableManager.current.updateRect();
    editor.eventBus.trigger("render");
}
function undoRenders(param, editor) {
    var infos = param.infos;
    infos.forEach(function(param) {
        var id = param.id, prev = param.prev, next = param.next, prevOrders = param.prevOrders;
        restoreRender(id, prev, next, prevOrders, editor);
    });
    editor.moveableManager.current.updateRect();
    editor.eventBus.trigger("render");
}
function redoRenders(param, editor) {
    var infos = param.infos;
    infos.forEach(function(param) {
        var id = param.id, next = param.next, prev = param.prev, nextOrders = param.nextOrders;
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
    render: function render(moveable) {
        var _moveable_state = moveable.state, left = _moveable_state.left, top = _moveable_state.top;
        var rect = moveable.getRect();
        return /* @__PURE__ */ React38.createElement("div", {
            key: "dimension-viewer",
            className: "moveable-dimension",
            style: {
                left: "".concat(rect.left + rect.width / 2 - left, "px"),
                top: "".concat(rect.top + rect.height + 20 - top, "px")
            }
        }, Math.round(rect.offsetWidth), " x ", Math.round(rect.offsetHeight));
    }
};
var MoveableManager = /*#__PURE__*/ function(_React38_PureComponent) {
    _inherits(MoveableManager, _React38_PureComponent);
    var _super = _create_super(MoveableManager);
    function MoveableManager() {
        _class_call_check(this, MoveableManager);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.moveable = React38.createRef();
        return _this;
    }
    _create_class(MoveableManager, [
        {
            key: "getMoveable",
            value: function getMoveable() {
                return this.moveable.current;
            }
        },
        {
            key: "render",
            value: function render() {
                var _this = this;
                var _this_props = this.props, editor = _this_props.editor, verticalGuidelines = _this_props.verticalGuidelines, horizontalGuidelines = _this_props.horizontalGuidelines, selectedTargets = _this_props.selectedTargets, selectedMenu = _this_props.selectedMenu;
                if (!selectedTargets.length) {
                    return this.renderViewportMoveable();
                }
                var moveableData = editor.moveableData, eventBus = editor.eventBus, selecto = editor.selecto, memory = editor.memory;
                var elementGuidelines = _to_consumable_array(moveableData.getTargets()).filter(function(el) {
                    return selectedTargets.indexOf(el) === -1;
                });
                var isShift = editor.state.isShift;
                var isAdmin = editor.props.isAdmin;
                var targetIsImage = selectedTargets.every(function(el) {
                    return el.tagName === "IMG";
                });
                var targetIsText = selectedTargets.some(function(el) {
                    return el.className.includes("Text");
                });
                var keepRatio = targetIsText || targetIsImage && !isShift || !targetIsImage && isShift || selectedTargets.length > 1;
                var _this1 = this;
                var _this2 = this;
                return /* @__PURE__ */ React38.createElement(import_react_moveable.default, {
                    ables: [
                        DimensionViewable
                    ],
                    ref: this.moveable,
                    targets: selectedTargets,
                    dimensionViewable: true,
                    draggable: true,
                    resizable: !targetIsText,
                    throttleResize: 1,
                    clippable: selectedMenu === "Crop",
                    dragArea: selectedTargets.length > 1 || selectedMenu !== "Text",
                    throttleDragRotate: isShift ? 45 : 0,
                    keepRatio: keepRatio,
                    rotatable: true,
                    snappable: true,
                    snapGap: false,
                    roundable: true,
                    snapDirections: {
                        bottom: true,
                        top: true,
                        left: true,
                        right: true,
                        center: true,
                        middle: true
                    },
                    elementSnapDirections: {
                        bottom: true,
                        top: true,
                        left: true,
                        right: true,
                        center: true,
                        middle: true
                    },
                    verticalGuidelines: isAdmin ? verticalGuidelines : [],
                    horizontalGuidelines: isAdmin ? horizontalGuidelines : [],
                    elementGuidelines: elementGuidelines,
                    clipArea: true,
                    bounds: {
                        "left": 0,
                        "top": 0,
                        "right": 0,
                        "bottom": 0,
                        "position": "css"
                    },
                    snapThreshold: 3,
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
                    onResize: function(e) {
                        moveableData.onResize(e);
                    },
                    onResizeGroupStart: moveableData.onResizeGroupStart,
                    onResizeGroup: moveableData.onResizeGroup,
                    onRotateStart: moveableData.onRotateStart,
                    onRotate: moveableData.onRotate,
                    onRotateGroupStart: moveableData.onRotateGroupStart,
                    onRotateGroup: moveableData.onRotateGroup,
                    defaultClipPath: memory.get("crop") || "inset",
                    onClip: moveableData.onClip,
                    onDragOriginStart: moveableData.onDragOriginStart,
                    onDragOrigin: function(e) {
                        moveableData.onDragOrigin(e);
                    },
                    onRound: moveableData.onRound,
                    onClick: function(e) {
                        var target = e.inputTarget;
                        if (e.isDouble && target.getAttribute("istext")) {
                            var _this_editor_viewport_current;
                            editor.selectMenu("Text");
                            var info = (_this_editor_viewport_current = _this.editor.viewport.current) === null || _this_editor_viewport_current === void 0 ? void 0 : _this_editor_viewport_current.getInfoByElement(target);
                            if (info && info.frame) {
                                _this.loadTextStylesOnMemory(info.frame);
                            }
                        }
                    },
                    onClickGroup: function(e) {
                        selecto.current.clickTarget(e.inputEvent, e.inputTarget);
                    },
                    onRenderStart: function(e) {
                        e.datas.prevData = moveableData.getFrame(e.target).get();
                    },
                    onRender: function() {
                        var _ref = _async_to_generator(function(e) {
                            return _ts_generator(this, function(_state) {
                                e.datas.isRender = true;
                                eventBus.requestTrigger("render");
                                _this1.updateRender(e.target);
                                return [
                                    2
                                ];
                            });
                        });
                        return function(e) {
                            return _ref.apply(this, arguments);
                        };
                    }(),
                    onRenderEnd: function() {
                        var _ref = _async_to_generator(function(e) {
                            return _ts_generator(this, function(_state) {
                                eventBus.requestTrigger("render");
                                if (!e.datas.isRender) {
                                    return [
                                        2
                                    ];
                                }
                                _this2.historyManager.addAction("render", {
                                    id: getId(e.target),
                                    prev: e.datas.prevData,
                                    next: moveableData.getFrame(e.target).get()
                                });
                                _this2.updateRender(e.target);
                                return [
                                    2
                                ];
                            });
                        });
                        return function(e) {
                            return _ref.apply(this, arguments);
                        };
                    }(),
                    onRenderGroupStart: function(e) {
                        e.datas.prevDatas = e.targets.map(function(target) {
                            return moveableData.getFrame(target).get();
                        });
                    },
                    onRenderGroup: function(e) {
                        eventBus.requestTrigger("renderGroup", e);
                        e.datas.isRender = true;
                    },
                    onRenderGroupEnd: function(e) {
                        eventBus.requestTrigger("renderGroup", e);
                        if (!e.datas.isRender) {
                            return;
                        }
                        var prevDatas = e.datas.prevDatas;
                        var infos = e.targets.map(function(target, i) {
                            return {
                                id: getId(target),
                                prev: prevDatas[i],
                                next: moveableData.getFrame(target).get()
                            };
                        });
                        _this.historyManager.addAction("renders", {
                            infos: infos
                        });
                    }
                });
            }
        },
        {
            key: "renderViewportMoveable",
            value: function renderViewportMoveable() {
                var viewport = this.editor.getViewport();
                var target = viewport ? viewport.viewportRef.current : null;
                return /* @__PURE__ */ React38.createElement(import_react_moveable.default, {
                    ref: this.moveable,
                    rotatable: false,
                    target: target,
                    origin: false
                });
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                this.historyManager.registerType("render", undoRender, redoRender);
                this.historyManager.registerType("renders", undoRenders, redoRenders);
            }
        },
        {
            key: "updateRect",
            value: function updateRect() {
                this.getMoveable().updateRect();
            }
        },
        {
            key: "updateRender",
            value: function updateRender(e) {
                var _this = this;
                return _async_to_generator(function() {
                    var moveableData, viewport, element;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                moveableData = _this.editor.moveableData;
                                viewport = _this.editor.getViewport();
                                element = viewport.getInfoByElement(e);
                                element.frame = moveableData.getFrame(e).get();
                                return [
                                    4,
                                    viewport.appendJSXs([
                                        element
                                    ], -1)
                                ];
                            case 1:
                                _state.sent();
                                _this.editor.forceUpdate();
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "loadTextStylesOnMemory",
            value: function loadTextStylesOnMemory(styles) {
                var memory = this.editor.memory;
                Object.entries(styles).forEach(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                    memory.set(key, value);
                });
            }
        }
    ]);
    return MoveableManager;
}(React38.PureComponent);
MoveableManager = __decorateClass([
    connectEditorProps
], MoveableManager);
// src/Editor/utils/MoveableData.ts
var import_moveable_helper = __toESM(require("moveable-helper"));
var MoveableData = /*#__PURE__*/ function(_import_moveable_helper_default) {
    _inherits(MoveableData, _import_moveable_helper_default);
    var _super = _create_super(MoveableData);
    function MoveableData(memory) {
        _class_call_check(this, MoveableData);
        var _this;
        _this = _super.call(this, {
            createAuto: true,
            useBeforeRender: true
        });
        _this.memory = memory;
        _this.selectedTargets = [];
        return _this;
    }
    _create_class(MoveableData, [
        {
            key: "setSelectedTargets",
            value: function setSelectedTargets(targets) {
                this.selectedTargets = targets;
            }
        },
        {
            key: "getSelectedTargets",
            value: function getSelectedTargets() {
                return this.selectedTargets;
            }
        },
        {
            key: "getSelectedFrames",
            value: function getSelectedFrames() {
                var _this = this;
                return this.getSelectedTargets().map(function(target) {
                    return _this.getFrame(target);
                });
            }
        },
        {
            key: "renderFrames",
            value: function renderFrames() {
                var _this = this;
                this.getSelectedTargets().forEach(function(target) {
                    _this.render(target);
                });
            }
        },
        {
            key: "setOrders",
            value: function setOrders(scope, orders) {
                return this.setValue(function(frame) {
                    frame.setOrders(scope, orders);
                });
            }
        },
        {
            key: "setProperty",
            value: function setProperty(names, value) {
                return this.setValue(function(frame) {
                    var _frame;
                    (_frame = frame).set.apply(_frame, _to_consumable_array(names).concat([
                        value
                    ]));
                });
            }
        },
        {
            key: "removeProperties",
            value: function removeProperties() {
                for(var _len = arguments.length, names = new Array(_len), _key = 0; _key < _len; _key++){
                    names[_key] = arguments[_key];
                }
                return this.setValue(function(frame, target) {
                    names.forEach(function(name) {
                        frame.remove(name);
                        target.style.removeProperty(name);
                    });
                });
            }
        },
        {
            key: "getProperties",
            value: function getProperties(properties, defaultValues) {
                var frames = this.getSelectedFrames();
                var memory = this.memory;
                if (!frames.length) {
                    return properties.map(function(property, i) {
                        return memory.get(property.join("///")) || defaultValues[i];
                    });
                }
                return properties.map(function(property, i) {
                    var _frame;
                    var frameValues = frames.map(function(frame) {
                        return (_frame = frame).get.apply(_frame, _to_consumable_array(property));
                    });
                    return frameValues.filter(function(color) {
                        return color;
                    })[0] || defaultValues[i];
                });
            }
        },
        {
            key: "setValue",
            value: function setValue(callback) {
                var _this = this;
                var targets = this.getSelectedTargets();
                var infos = targets.map(function(target) {
                    var frame = _this.getFrame(target);
                    var prevOrders = frame.getOrderObject();
                    var prev = frame.get();
                    callback(frame, target);
                    var next = frame.get();
                    var nextOrders = frame.getOrderObject();
                    return {
                        id: getId(target),
                        prev: prev,
                        prevOrders: prevOrders,
                        next: next,
                        nextOrders: nextOrders
                    };
                });
                this.renderFrames();
                return infos;
            }
        }
    ]);
    return MoveableData;
}(import_moveable_helper.default);
// src/Editor/Editor.tsx
var import_shortcuts = __toESM(require("shortcuts"));
// src/Editor/utils/HistoryManager.ts
var HistoryManager = /*#__PURE__*/ function() {
    function HistoryManager(editor) {
        _class_call_check(this, HistoryManager);
        this.editor = editor;
        this.undoStack = [];
        this.redoStack = [];
        this.types = {};
    }
    _create_class(HistoryManager, [
        {
            key: "registerType",
            value: function registerType(type, undo, redo) {
                this.types[type] = {
                    undo: undo,
                    redo: redo
                };
            }
        },
        {
            key: "addAction",
            value: function addAction(type, props) {
                this.editor.console.log("Add History:", type, props);
                this.undoStack.push({
                    type: type,
                    props: props
                });
                this.redoStack = [];
                this.propageChanges();
            }
        },
        {
            key: "undo",
            value: function undo() {
                var _this_types_undoAction_type;
                var undoAction = this.undoStack.pop();
                if (!undoAction) {
                    return;
                }
                this.editor.console.log("Undo History: ".concat(undoAction.type), undoAction.props);
                (_this_types_undoAction_type = this.types[undoAction.type]) === null || _this_types_undoAction_type === void 0 ? void 0 : _this_types_undoAction_type.undo(undoAction.props, this.editor);
                this.redoStack.push(undoAction);
                this.propageChanges();
            }
        },
        {
            key: "redo",
            value: function redo() {
                var _this_types_redoAction_type;
                var redoAction = this.redoStack.pop();
                if (!redoAction) {
                    return;
                }
                this.editor.console.log("Redo History: ".concat(redoAction.type), redoAction.props);
                (_this_types_redoAction_type = this.types[redoAction.type]) === null || _this_types_redoAction_type === void 0 ? void 0 : _this_types_redoAction_type.redo(redoAction.props, this.editor);
                this.undoStack.push(redoAction);
                this.propageChanges();
            }
        },
        {
            key: "propageChanges",
            value: function propageChanges() {
                if (this.editor.props.onChange && this.editor.viewport.current) {
                    this.editor.props.onChange(this.editor.saveEditor());
                }
            }
        }
    ]);
    return HistoryManager;
}();
// src/Editor/utils/Debugger.ts
var Debugger = /*#__PURE__*/ function() {
    function Debugger(isDebug) {
        _class_call_check(this, Debugger);
        this.isDebug = isDebug;
    }
    _create_class(Debugger, [
        {
            key: "log",
            value: function log() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (!this.isDebug) {
                    return;
                }
                (_console = console).log.apply(_console, [
                    "%c Scena Debugger:",
                    "padding: 1px; background: #4af; color: #fff;"
                ].concat(_to_consumable_array(args)));
            }
        }
    ]);
    return Debugger;
}();
// src/Editor/utils/ClipboardManager.tsx
var React39 = __toESM(require("react"));
var import_html2canvas = __toESM(require("html2canvas"));
var ClipboardManager = /*#__PURE__*/ function() {
    function ClipboardManager(editor) {
        var _this = this;
        _class_call_check(this, ClipboardManager);
        this.editor = editor;
        this.onCut = function(e) {
            var copied = _this.onCopy(e);
            if (!copied) {
                return;
            }
            _this.editor.console.log("cut scena data");
            _this.editor.removeElements(_this.editor.getSelectedTargets());
        };
        var _this1 = this;
        this.onCopy = function() {
            var _ref = _async_to_generator(function(e) {
                var clipboardData, moveableData, targets, SavedScenaData;
                return _ts_generator(this, function(_state) {
                    if (checkInput(e.target)) {
                        return [
                            2,
                            false
                        ];
                    }
                    e.preventDefault();
                    clipboardData = e.clipboardData;
                    moveableData = _this1.editor.moveableData;
                    targets = moveableData.getSelectedTargets();
                    SavedScenaData = _this1.editor.saveTargets(targets);
                    _this1.editor.console.log("copy scena data", SavedScenaData);
                    clipboardData.setData(TYPE_SCENA_LAYERS, JSON.stringify(SavedScenaData));
                    return [
                        2,
                        true
                    ];
                });
            });
            return function(e) {
                return _ref.apply(this, arguments);
            };
        }();
        this.onPaste = function(e) {
            if (checkInput(e.target)) {
                return;
            }
            _this.read(e.clipboardData);
            e.preventDefault();
        };
        document.addEventListener("cut", this.onCut);
        document.addEventListener("copy", this.onCopy);
        document.addEventListener("paste", this.onPaste);
    }
    _create_class(ClipboardManager, [
        {
            key: "destroy",
            value: function destroy() {
                document.removeEventListener("cut", this.onCut);
                document.removeEventListener("copy", this.onCopy);
                document.removeEventListener("paste", this.onPaste);
            }
        },
        {
            key: "copy",
            value: function copy() {
                document.execCommand("copy");
            }
        },
        {
            key: "cut",
            value: function cut() {
                document.execCommand("cut");
            }
        },
        {
            key: "paste",
            value: function paste() {
                document.execCommand("paste");
            }
        },
        {
            key: "copyImage",
            value: function copyImage() {
                var moveableData = this.editor.moveableData;
                var targets = moveableData.getSelectedTargets();
                var moveable = this.editor.getMoveable();
                var length = targets.length;
                var moveables = length > 1 ? moveable.moveable.moveables : [];
                return new Promise(function(resolve) {
                    Promise.all(targets.map(function(target) {
                        return (0, import_html2canvas.default)(target);
                    })).then(function(images) {
                        var imageCanvas;
                        if (length > 1) {
                            var parentRect = moveable.getRect();
                            var canvas = document.createElement("canvas");
                            canvas.width = parentRect.width;
                            canvas.height = parentRect.height;
                            var context = canvas.getContext("2d");
                            var rects = moveables.map(function(m) {
                                return m.getRect();
                            });
                            rects.forEach(function(rect, i) {
                                context.drawImage(images[i], rect.left - parentRect.left, rect.top - parentRect.top);
                            });
                            imageCanvas = canvas;
                        } else {
                            imageCanvas = images[0];
                        }
                        imageCanvas.toBlob(function(blob) {
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
        },
        {
            key: "readDataTransfter",
            value: function readDataTransfter(data) {
                var types = data.types;
                var hasScena = types.indexOf(TYPE_SCENA_LAYERS) > -1;
                if (hasScena) {
                    var scenaDatas = JSON.parse(data.getData(TYPE_SCENA_LAYERS));
                    this.editor.console.log("paste scena data", scenaDatas);
                    this.editor.loadDatas(scenaDatas);
                    return true;
                }
                return false;
            }
        },
        {
            key: "read",
            value: function read(data) {
                var _this = this;
                return _async_to_generator(function() {
                    var clipboardItems, hasText, isPaste, text;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.readDataTransfter(data)) {
                                    return [
                                        2,
                                        true
                                    ];
                                }
                                return [
                                    4,
                                    navigator.clipboard.read()
                                ];
                            case 1:
                                clipboardItems = _state.sent();
                                hasText = false;
                                isPaste = clipboardItems.filter(function(item) {
                                    var types = item.types;
                                    var hasImage = types.indexOf("image/png") > -1;
                                    hasText = hasText || types.indexOf("text/plain") > -1;
                                    if (hasImage) {
                                        item.getType("image/png").then(function(blob) {
                                            _this.editor.appendBlob(blob);
                                        });
                                        return true;
                                    }
                                    return false;
                                }).length > 0;
                                if (!(!isPaste && hasText)) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    navigator.clipboard.readText()
                                ];
                            case 2:
                                text = _state.sent();
                                _this.editor.appendJSXs([
                                    {
                                        jsx: /* @__PURE__ */ React39.createElement("div", {
                                            contentEditable: "true"
                                        }),
                                        name: "(Text)",
                                        innerText: text
                                    }
                                ]);
                                _state.label = 3;
                            case 3:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ClipboardManager;
}();
// src/Editor/Editor.tsx
var import_dom_to_image = __toESM(require("dom-to-image"));
// src/Editor/TextEditor.tsx
var import_react = __toESM(require("react"));
function TextEditor(param) {
    var element = param.element, memory = param.memory, editor = param.editor;
    var textareaRef = (0, import_react.useRef)(null);
    var _ref = _sliced_to_array((0, import_react.useState)(element.innerText || ""), 2), text = _ref[0], setText = _ref[1];
    (0, import_react.useEffect)(function() {
        adjustTextareaSize();
    });
    (0, import_react.useLayoutEffect)(function() {
        var timer = window.setTimeout(function() {
            if (textareaRef.current) {
                textareaRef.current.focus();
            }
        }, 200);
        return function() {
            window.clearTimeout(timer);
        };
    }, []);
    var handleTextareaChange = function(event) {
        setText(event.target.value);
        adjustTextareaSize();
    };
    var adjustTextareaSize = function() {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.width = "10px";
            textareaRef.current.style.height = "".concat(textareaRef.current.scrollHeight, "px");
            textareaRef.current.style.width = "".concat(textareaRef.current.scrollWidth, "px");
        }
    };
    var styles = {
        color: memory.get("color"),
        fontFamily: memory.get("font-family"),
        fontSize: memory.get("font-size"),
        textAlign: memory.get("text-align"),
        fontWeight: memory.get("font-weight"),
        fontStyle: memory.get("font-style"),
        textDecoration: memory.get("text-decoration")
    };
    var handleSave = function() {
        var _editor_menu_current;
        var el = element;
        var isNew = el.innerText === "" || !el.innerText;
        if (text.trim().length > 0) {
            var oldText = el.innerText;
            el.innerText = text.trim();
            var newFrame = Object.fromEntries(Object.entries(styles).map(function(style) {
                var _style = _sliced_to_array(style, 2), key = _style[0], value = _style[1];
                return [
                    convertToSnakeCase(key),
                    value
                ];
            }));
            el.frame = _object_spread({}, el.frame, newFrame);
            if (el.el) {
                el.el.textContent = text;
                Object.entries(styles).forEach(function(style) {
                    var _style = _sliced_to_array(style, 2), key = _style[0], value = _style[1];
                    el.el.style[key] = value;
                });
            }
            editor.appendJSXs([
                el
            ], true, isNew);
            if (!isNew) {
                editor.historyManager.addAction("changeText", {
                    id: el.id,
                    prev: oldText,
                    next: el.innerText
                });
            }
        } else {
            editor.removeByIds([
                el.id
            ], isNew);
        }
        (_editor_menu_current = editor.menu.current) === null || _editor_menu_current === void 0 ? void 0 : _editor_menu_current.select("MoveTool");
        editor.setSelectedTargets([]);
    };
    return /* @__PURE__ */ import_react.default.createElement("div", {
        className: "text-editor",
        onClick: handleSave
    }, /* @__PURE__ */ import_react.default.createElement("textarea", {
        ref: textareaRef,
        autoFocus: true,
        value: text,
        onChange: handleTextareaChange,
        wrap: "off",
        style: styles,
        placeholder: "Agregar texto",
        onClick: function(e) {
            return e.stopPropagation();
        },
        onFocus: function(e) {
            var val = e.target.value;
            e.target.value = "";
            e.target.value = val;
        }
    }));
}
// src/Editor/Editor.tsx
function undoCreateElements(param, editor) {
    var infos = param.infos, prevSelected = param.prevSelected;
    var res = editor.removeByIds(infos.map(function(info) {
        return info.id;
    }), true);
    if (prevSelected) {
        res.then(function() {
            editor.setSelectedTargets(editor.getViewport().getElements(prevSelected), true);
        });
    }
}
function restoreElements(param, editor) {
    var infos = param.infos;
    editor.appendJSXs(infos.map(function(info) {
        return _object_spread({}, info);
    }), true);
}
function undoChangeText(param, editor) {
    var prev = param.prev, next = param.next, id = param.id;
    var info = editor.getViewport().getInfo(id);
    info.innerText = prev;
    info.el.innerText = prev;
}
function redoChangeText(param, editor) {
    var prev = param.prev, next = param.next, id = param.id;
    var info = editor.getViewport().getInfo(id);
    info.innerText = next;
    info.el.innerText = next;
}
function undoMove(param, editor) {
    var prevInfos = param.prevInfos;
    editor.moves(prevInfos, true);
}
function redoMove(param, editor) {
    var nextInfos = param.nextInfos;
    editor.moves(nextInfos, true);
}
var Editor = /*#__PURE__*/ function(_React41_PureComponent) {
    _inherits(Editor, _React41_PureComponent);
    var _super = _create_super(Editor);
    function Editor() {
        _class_call_check(this, Editor);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.state = {
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
        _this.historyManager = new HistoryManager(_assert_this_initialized(_this));
        _this.console = new Debugger(_this.props.debug);
        _this.eventBus = new EventBus_default();
        _this.memory = new Memory();
        _this.moveableData = new MoveableData(_this.memory);
        _this.keyManager = new import_shortcuts.default({
            capture: true,
            target: window,
            shouldHandleEvent: function shouldHandleEvent(event) {
                return true;
            }
        });
        _this.clipboardManager = new ClipboardManager(_assert_this_initialized(_this));
        _this.horizontalGuides = React41.createRef();
        _this.verticalGuides = React41.createRef();
        _this.infiniteViewer = React41.createRef();
        _this.selecto = React41.createRef();
        _this.menu = React41.createRef();
        _this.moveableManager = React41.createRef();
        _this.viewport = React41.createRef();
        _this.tabs = React41.createRef();
        _this.editorElement = React41.createRef();
        _this.onMenuChange = function(id) {
            _this.setState({
                selectedMenu: id
            });
        };
        _this.onResize = function() {
            if (_this.horizontalGuides.current && _this.verticalGuides.current) {
                _this.horizontalGuides.current.resize();
                _this.verticalGuides.current.resize();
            }
            if (_this.editorElement.current && _this.infiniteViewer.current) {
                var width = _this.editorElement.current.clientWidth;
                var viewer = _this.infiniteViewer.current.getElement();
                if (width < 500) {
                    var newZoom = width / 500;
                    viewer.style.width = "".concat(500 * newZoom, "px");
                    viewer.style.height = "".concat(500 * newZoom, "px");
                    _this.setState({
                        minZoom: newZoom,
                        zoom: newZoom
                    });
                } else {
                    viewer.style.width = "".concat(500, "px");
                    viewer.style.height = "".concat(500, "px");
                    _this.setState({
                        minZoom: 1,
                        zoom: 1
                    });
                }
            }
        };
        _this.onBlur = function(e) {
            var target = e.target;
            if (!checkInput(target)) {
                return;
            }
            var parentTarget = getParnetScenaElement(target);
            if (!parentTarget) {
                return;
            }
        };
        return _this;
    }
    _create_class(Editor, [
        {
            key: "render",
            value: function render() {
                var _this = this;
                var _this_viewport_current;
                var _this1 = this, horizontalGuides = _this1.horizontalGuides, verticalGuides = _this1.verticalGuides, infiniteViewer = _this1.infiniteViewer, moveableManager = _this1.moveableManager, viewport = _this1.viewport, menu = _this1.menu, selecto = _this1.selecto, state = _this1.state;
                var previewMode = this.props.previewMode;
                var selectedMenu = state.selectedMenu, selectedTargets = state.selectedTargets, zoom = state.zoom, showGuides = state.showGuides, minZoom = state.minZoom, width = state.width, height = state.height;
                var horizontalSnapGuides = [
                    0,
                    height,
                    height / 2
                ].concat(_to_consumable_array(state.horizontalGuides));
                var verticalSnapGuides = [
                    0,
                    width,
                    width / 2
                ].concat(_to_consumable_array(state.verticalGuides));
                var unit = 50;
                return /* @__PURE__ */ React41.createElement("div", {
                    className: prefix("editor"),
                    ref: this.editorElement,
                    style: {
                        maxWidth: "".concat(width, "px")
                    }
                }, !previewMode && /* @__PURE__ */ React41.createElement(Menu2, {
                    ref: menu,
                    editor: this,
                    onSelect: this.onMenuChange
                }), showGuides && !previewMode && /* @__PURE__ */ React41.createElement(React41.Fragment, null, /* @__PURE__ */ React41.createElement("div", {
                    className: prefix("reset"),
                    onClick: function(e) {
                        infiniteViewer.current.scrollCenter();
                    }
                }), /* @__PURE__ */ React41.createElement(import_react_guides.default, {
                    ref: horizontalGuides,
                    type: "horizontal",
                    className: prefix("guides", "horizontal"),
                    snapThreshold: 5,
                    snaps: horizontalSnapGuides,
                    displayDragPos: true,
                    dragPosFormat: function(v) {
                        return "".concat(v, "px");
                    },
                    zoom: zoom,
                    unit: unit,
                    onChangeGuides: function(e) {
                        _this.setState({
                            horizontalGuides: e.guides
                        });
                    }
                }), /* @__PURE__ */ React41.createElement(import_react_guides.default, {
                    ref: verticalGuides,
                    type: "vertical",
                    className: prefix("guides", "vertical"),
                    snapThreshold: 5,
                    snaps: verticalSnapGuides,
                    displayDragPos: true,
                    dragPosFormat: function(v) {
                        return "".concat(v, "px");
                    },
                    zoom: zoom,
                    unit: unit,
                    onChangeGuides: function(e) {
                        _this.setState({
                            verticalGuides: e.guides
                        });
                    }
                })), /* @__PURE__ */ React41.createElement("div", {
                    className: "scena-editor-container"
                }, selectedMenu === "Text" && selectedTargets.length === 1 && /* @__PURE__ */ React41.createElement(TextEditor, {
                    element: (_this_viewport_current = this.viewport.current) === null || _this_viewport_current === void 0 ? void 0 : _this_viewport_current.getInfoByElement(selectedTargets[0]),
                    memory: this.memory,
                    editor: this
                }), /* @__PURE__ */ React41.createElement(import_react_infinite_viewer.default, {
                    ref: infiniteViewer,
                    className: prefix("viewer"),
                    pinchThreshold: 5,
                    wheelScale: 1e-3,
                    zoom: zoom,
                    zoomRange: [
                        0,
                        4
                    ],
                    threshold: 0,
                    rangeX: [
                        0,
                        0
                    ],
                    rangeY: [
                        0,
                        0
                    ],
                    onDragStart: function(e) {
                        var target = e.inputEvent.target;
                        _this.checkBlur();
                        if (target.nodeName === "A" || moveableManager.current.getMoveable().isMoveableElement(target) || selectedTargets.some(function(t) {
                            return t === target || t.contains(target);
                        })) {
                            e.stop();
                        }
                    },
                    onDragEnd: function(e) {
                        if (!e.isDrag) {
                            selecto.current.clickTarget(e.inputEvent);
                        }
                    },
                    onAbortPinch: function(e) {
                        selecto.current.triggerDragStart(e.inputEvent);
                    },
                    onPinch: function(e) {
                        var zoom2 = e.zoom >= minZoom ? e.zoom : minZoom;
                        _this.setState({
                            zoom: zoom2
                        });
                    }
                }, /* @__PURE__ */ React41.createElement(Viewport, {
                    ref: viewport,
                    onBlur: this.onBlur,
                    style: {
                        width: "".concat(width, "px"),
                        height: "".concat(height, "px")
                    },
                    editor: this,
                    background: this.props.backgroundImg
                }, !previewMode && /* @__PURE__ */ React41.createElement(MoveableManager, {
                    ref: moveableManager,
                    selectedTargets: selectedTargets,
                    selectedMenu: selectedMenu,
                    verticalGuidelines: verticalSnapGuides,
                    horizontalGuidelines: horizontalSnapGuides,
                    editor: this
                }))), !previewMode && /* @__PURE__ */ React41.createElement(import_react_selecto.default, {
                    ref: selecto,
                    hitRate: 0,
                    dragContainer: ".scena-viewer",
                    rootContainer: infiniteViewer.current && infiniteViewer.current.getContainer(),
                    container: infiniteViewer.current && infiniteViewer.current.getContainer(),
                    selectableTargets: selectedMenu === "MoveTool" ? [
                        ".scena-viewport [".concat(DATA_SCENA_ELEMENT_ID, "].selectable")
                    ] : [],
                    selectByClick: true,
                    selectFromInside: false,
                    toggleContinueSelect: [
                        "shift"
                    ],
                    preventDefault: true,
                    scrollOptions: infiniteViewer.current ? {
                        container: infiniteViewer.current.getContainer(),
                        threshold: 30,
                        throttleTime: 30,
                        getScrollPosition: function() {
                            var current = infiniteViewer.current;
                            return [
                                current.getScrollLeft(),
                                current.getScrollTop()
                            ];
                        }
                    } : void 0,
                    onDragStart: function(e) {
                        var inputEvent = e.inputEvent;
                        var target = inputEvent.target;
                        _this.checkBlur();
                        if (selectedMenu === "Text") {
                            e.stop();
                        }
                        if (moveableManager.current.getMoveable().isMoveableElement(target) || state.selectedTargets.some(function(t) {
                            return t === target || t.contains(target);
                        })) {
                            e.stop();
                        }
                    },
                    onScroll: function(param) {
                        var direction = param.direction;
                        infiniteViewer.current.scrollBy(direction[0] * 10, direction[1] * 10);
                    },
                    onSelectEnd: function(param) {
                        var isDragStart = param.isDragStart, selected = param.selected, inputEvent = param.inputEvent, rect = param.rect;
                        if (isDragStart) {
                            inputEvent.preventDefault();
                        }
                        if (_this.selectEndMaker(rect)) {
                            return;
                        }
                        _this.setSelectedTargets(selected).then(function() {
                            if (!isDragStart) {
                                return;
                            }
                            moveableManager.current.getMoveable().dragStart(inputEvent);
                        });
                    }
                })));
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                var _this1 = this, infiniteViewer = _this1.infiniteViewer, memory = _this1.memory, eventBus = _this1.eventBus;
                memory.set("background-color", "#4af");
                memory.set("color", "#fff");
                memory.set("border-color", "#000");
                requestAnimationFrame(function() {
                    infiniteViewer.current.scrollCenter();
                });
                window.addEventListener("resize", this.onResize);
                this.onResize();
                var viewport = this.getViewport();
                eventBus.on("blur", function() {
                    _this.menu.current.blur();
                });
                eventBus.on("selectLayers", function(e) {
                    var selected = e.selected;
                    _this.setSelectedTargets(selected.map(function(key) {
                        return viewport.getInfo(key).el;
                    }));
                });
                eventBus.on("update", function() {
                    _this.forceUpdate();
                });
                this.keyManager.add([
                    {
                        shortcut: "Left",
                        handler: function(e) {
                            _this.move(-1, 0);
                            e && e.preventDefault();
                        }
                    },
                    {
                        shortcut: "Up",
                        handler: function(e) {
                            _this.move(0, -1);
                            e && e.preventDefault();
                        }
                    },
                    {
                        shortcut: "Right",
                        handler: function(e) {
                            _this.move(1, 0);
                            e && e.preventDefault();
                        }
                    },
                    {
                        shortcut: "Down",
                        handler: function(e) {
                            _this.move(0, 1);
                            e && e.preventDefault();
                        }
                    },
                    {
                        shortcut: "Backspace",
                        handler: function() {
                            _this.removeElements(_this.getSelectedTargets());
                        }
                    },
                    {
                        shortcut: "CmdOrCtrl+x",
                        handler: function() {}
                    },
                    {
                        shortcut: "CmdOrCtrl+c",
                        handler: function() {}
                    },
                    {
                        shortcut: "CmdOrCtrl+v",
                        handler: function() {}
                    },
                    {
                        shortcut: "CmdOrCtrl+z",
                        handler: function() {
                            _this.historyManager.undo();
                        }
                    },
                    {
                        shortcut: "CmdOrCtrl+Shift+z",
                        handler: function() {
                            _this.historyManager.redo();
                        }
                    },
                    {
                        shortcut: "CmdOrCtrl+a",
                        handler: function(e) {
                            _this.setSelectedTargets(_this.getViewportInfos().map(function(info) {
                                return info.el;
                            }));
                            e && e.preventDefault();
                        }
                    }
                ]);
                this.keyManager.start();
                document.addEventListener("keydown", function(e) {
                    if (e.key === "Shift") {
                        _this.setState({
                            isShift: true
                        });
                    }
                });
                document.addEventListener("keyup", function(e) {
                    if (e.key === "Shift") {
                        _this.setState({
                            isShift: false
                        });
                    }
                });
                this.historyManager.registerType("createElements", undoCreateElements, restoreElements);
                this.historyManager.registerType("removeElements", restoreElements, undoCreateElements);
                this.historyManager.registerType("changeText", undoChangeText, redoChangeText);
                this.historyManager.registerType("move", undoMove, redoMove);
                if (this.props.initialJSX && this.props.initialJSX.length > 0) {
                    var initialJSX = this.props.initialJSX.filter(function(jsx) {
                        return _this.props.previewMode ? jsx.name !== "(PrintArea)" : true;
                    }).map(function(jsx) {
                        if (jsx.name === "(PrintArea)") {
                            if (!jsx.attrs) {
                                jsx.attrs = {};
                            }
                            var newFrame = Object.entries(jsx.frame).map(function(param) {
                                var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                                return [
                                    key.replace(/border/g, "outline"),
                                    value
                                ];
                            });
                            jsx.frame = Object.fromEntries(newFrame);
                        }
                        return jsx;
                    });
                    this.appendJSXs(initialJSX, true);
                }
                if (!this.state.loadedViewer) {
                    this.forceUpdate();
                }
            }
        },
        {
            key: "componentDidUpdate",
            value: function componentDidUpdate() {
                var _this_state = this.state, selectedMenu = _this_state.selectedMenu, selectedTargets = _this_state.selectedTargets;
                if (selectedMenu === "Text" && selectedTargets.length === 1) {
                    this.keyManager.stop();
                } else {
                    this.keyManager.start();
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                var _this = this;
                this.eventBus.off();
                this.memory.clear();
                this.moveableData.clear();
                this.keyManager.stop();
                this.keyManager.reset();
                this.clipboardManager.destroy();
                window.removeEventListener("resize", this.onResize);
                document.removeEventListener("keydown", function(e) {
                    if (e.key === "Shift") {
                        _this.setState({
                            isShift: true
                        });
                    }
                });
                document.removeEventListener("keyup", function(e) {
                    if (e.key === "Shift") {
                        _this.setState({
                            isShift: false
                        });
                    }
                });
            }
        },
        {
            key: "promiseState",
            value: function promiseState(state) {
                var _this = this;
                return new Promise(function(resolve) {
                    _this.setState(state, function() {
                        resolve("");
                    });
                });
            }
        },
        {
            key: "getSelectedTargets",
            value: function getSelectedTargets() {
                return this.state.selectedTargets;
            }
        },
        {
            key: "setSelectedTargets",
            value: function setSelectedTargets(targets, isRestore) {
                var _this = this;
                this.console.log("set selected target");
                targets = targets.filter(function(target) {
                    return targets.every(function(parnetTarget) {
                        return parnetTarget === target || !parnetTarget.contains(target);
                    });
                });
                return this.promiseState({
                    selectedTargets: targets
                }).then(function() {
                    var _this_menu_current;
                    _this.selecto.current.setSelectedTargets(targets);
                    _this.moveableData.setSelectedTargets(targets);
                    _this.eventBus.trigger("setSelectedTargets");
                    (_this_menu_current = _this.menu.current) === null || _this_menu_current === void 0 ? void 0 : _this_menu_current.forceUpdate();
                    return targets;
                });
            }
        },
        {
            key: "appendJSX",
            value: function appendJSX(info, isRestore) {
                return this.appendJSXs([
                    info
                ], isRestore).then(function(targets) {
                    return targets[0];
                });
            }
        },
        {
            key: "appendJSXs",
            value: function appendJSXs(jsxs, isRestore, isNewText) {
                var _this = this;
                var viewport = this.getViewport();
                var indexesList = viewport.getSortedIndexesList(this.getSelectedTargets());
                var indexesListLength = indexesList.length;
                var appendIndex = -1;
                var scopeId = "";
                if (!isRestore && indexesListLength) {
                    var indexes = indexesList[indexesListLength - 1];
                    var info = viewport.getInfoByIndexes(indexes);
                    scopeId = info.scopeId;
                    appendIndex = indexes[indexes.length - 1] + 1;
                }
                return this.getViewport().appendJSXs(jsxs, appendIndex, scopeId).then(function(param) {
                    var added = param.added;
                    return _this.appendComplete(added, isNewText ? false : isRestore);
                });
            }
        },
        {
            key: "appendComplete",
            value: function appendComplete(infos, isRestore) {
                if (!isRestore) {
                    var _this_menu_current;
                    this.historyManager.addAction("createElements", {
                        infos: infos,
                        prevSelected: getIds(this.getSelectedTargets())
                    });
                    (_this_menu_current = this.menu.current) === null || _this_menu_current === void 0 ? void 0 : _this_menu_current.select("MoveTool");
                }
                var data = this.moveableData;
                var targets = infos.map(function registerFrame(info) {
                    data.createFrame(info.el, info.frame);
                    data.render(info.el);
                    info.children.forEach(registerFrame);
                    return info.el;
                }).filter(function(el) {
                    return el;
                });
                return Promise.all(targets.map(function(target) {
                    return checkImageLoaded(target);
                })).then(function() {
                    return targets;
                });
            }
        },
        {
            key: "removeByIds",
            value: function removeByIds(ids, isRestore) {
                return this.removeElements(this.getViewport().getElements(ids), isRestore);
            }
        },
        {
            key: "getMoveable",
            value: function getMoveable() {
                return this.moveableManager.current.getMoveable();
            }
        },
        {
            key: "removeFrames",
            value: function removeFrames(targets) {
                var frameMap = {};
                var moveableData = this.moveableData;
                var viewport = this.getViewport();
                targets.forEach(function removeFrame(target) {
                    var info = viewport.getInfoByElement(target);
                    if (info && info.attrs && info.attrs.class === "moveable") {
                        console.log("deleting " + info);
                        frameMap[info.id] = moveableData.getFrame(target).get();
                        moveableData.removeFrame(target);
                        info.children.forEach(function(childInfo) {
                            removeFrame(childInfo.el);
                        });
                    }
                });
                return frameMap;
            }
        },
        {
            key: "restoreFrames",
            value: function restoreFrames(infos, frameMap) {
                var viewport = this.getViewport();
                var moveableData = this.moveableData;
                infos.forEach(function registerFrame(info) {
                    info.frame = frameMap[info.id];
                    delete frameMap[info.id];
                    info.children.forEach(registerFrame);
                });
                for(var id in frameMap){
                    moveableData.createFrame(viewport.getInfo(id).el, frameMap[id]);
                }
            }
        },
        {
            key: "removeElements",
            value: function removeElements(targets, isRestore) {
                var _this = this;
                var viewport = this.getViewport();
                var frameMap = this.removeFrames(targets);
                var indexesList = viewport.getSortedIndexesList(targets);
                var indexesListLength = indexesList.length;
                var scopeId = "";
                var selectedInfo = null;
                if (indexesListLength) {
                    var lastInfo = viewport.getInfoByIndexes(indexesList[indexesListLength - 1]);
                    var nextInfo = viewport.getNextInfo(lastInfo.id);
                    if (nextInfo) {
                        scopeId = lastInfo.scopeId;
                        selectedInfo = nextInfo;
                    }
                }
                return viewport.removeTargets(targets).then(function(param) {
                    var removed = param.removed;
                    var selectedTarget = selectedInfo || viewport.getLastChildInfo(scopeId) || viewport.getInfo(scopeId);
                    _this.setSelectedTargets(selectedTarget && selectedTarget.el ? [
                        selectedTarget.el
                    ] : [], true);
                    _this.console.log("removeTargets", removed);
                    !isRestore && _this.historyManager.addAction("removeElements", {
                        infos: removed.map(function removeTarget(info) {
                            return _object_spread_props(_object_spread({}, info), {
                                children: info.children.map(removeTarget),
                                frame: frameMap[info.id] || info.frame
                            });
                        })
                    });
                    return targets;
                });
            }
        },
        {
            key: "setProperty",
            value: function setProperty(scope, value, isUpdate) {
                var _this = this;
                var infos = this.moveableData.setProperty(scope, value);
                if (isUpdate) {
                    this.moveableManager.current.updateRect();
                }
                this.eventBus.requestTrigger("render");
                var targets = this.getSelectedTargets();
                if (targets.length && this.moveableManager.current) {
                    targets.forEach(function(target) {
                        return _this.moveableManager.current.updateRender(target);
                    });
                }
                this.historyManager.addAction("renders", {
                    infos: infos
                });
            }
        },
        {
            key: "setOrders",
            value: function setOrders(scope, orders, isUpdate) {
                var infos = this.moveableData.setOrders(scope, orders);
                this.historyManager.addAction("renders", {
                    infos: infos
                });
                if (isUpdate) {
                    this.moveableManager.current.updateRect();
                }
                this.eventBus.requestTrigger("render");
            }
        },
        {
            key: "selectMenu",
            value: function selectMenu(menu) {
                this.menu.current.select(menu);
            }
        },
        {
            key: "loadDatas",
            value: function loadDatas(datas) {
                var viewport = this.getViewport();
                return this.appendJSXs(datas.map(function loadData(data) {
                    var componentId = data.componentId, jsxId = data.jsxId, children = data.children;
                    var jsx;
                    if (jsxId) {
                        jsx = viewport.getJSX(jsxId);
                    }
                    if (!jsx && componentId) {
                        var Component2 = viewport.getComponent(componentId);
                        jsx = /* @__PURE__ */ React41.createElement(Component2, null);
                    }
                    if (!jsx) {
                        jsx = React41.createElement(data.tagName);
                    }
                    return _object_spread_props(_object_spread({}, data), {
                        children: children.map(loadData),
                        jsx: jsx
                    });
                }).filter(function(info) {
                    return info;
                }));
            }
        },
        {
            key: "saveTargets",
            value: function saveTargets(targets) {
                var viewport = this.getViewport();
                var moveableData = this.moveableData;
                this.console.log("save targets", targets);
                return targets.map(function(target) {
                    return viewport.getInfoByElement(target);
                }).map(function saveTarget(info) {
                    var target = info.el;
                    var isText = info.attrs.isText;
                    return {
                        name: info.name,
                        attrs: getScenaAttrs(target),
                        jsxId: info.jsxId || "",
                        componentId: info.componentId,
                        innerHTML: isText ? "" : target.innerHTML,
                        innerText: isText ? target.innerText : "",
                        tagName: target.tagName.toLowerCase(),
                        frame: moveableData.getFrame(target).get(),
                        children: info.children.map(saveTarget)
                    };
                });
            }
        },
        {
            key: "getViewport",
            value: function getViewport() {
                return this.viewport.current;
            }
        },
        {
            key: "getViewportInfos",
            value: function getViewportInfos() {
                return this.getViewport().getViewportInfos();
            }
        },
        {
            key: "appendBlob",
            value: function appendBlob(blob) {
                var url = URL.createObjectURL(blob);
                return this.appendJSX({
                    jsx: /* @__PURE__ */ React41.createElement("img", {
                        src: url,
                        alt: "appended blob"
                    }),
                    name: "(Image)"
                });
            }
        },
        {
            key: "moves",
            value: function moves(movedInfos, isRestore) {
                var _this = this;
                var frameMap = this.removeFrames(movedInfos.map(function(param) {
                    var info = param.info;
                    return info.el;
                }));
                return this.getViewport().moves(movedInfos).then(function(result) {
                    return _this.moveComplete(result, frameMap, isRestore);
                });
            }
        },
        {
            key: "selectEndMaker",
            value: function selectEndMaker(rect, extraProps, icon, isNewText) {
                var _this = this;
                var infiniteViewer = this.infiniteViewer.current;
                var selectIcon = icon || this.menu.current.getSelected();
                var width = rect.width;
                var height = rect.height;
                if (!selectIcon || !selectIcon.maker || !width || !height) {
                    return false;
                }
                var maker = selectIcon.maker(this.memory);
                var viwerPosition = infiniteViewer.getContainer().getBoundingClientRect();
                var scrollTop = viwerPosition.y;
                var scrollLeft = viwerPosition.x;
                var top = rect.top - scrollTop;
                var left = rect.left - scrollLeft;
                this.console.log(top, left, viwerPosition);
                var style = _object_spread({
                    top: "".concat(top, "px"),
                    left: "".concat(left, "px"),
                    position: "absolute",
                    width: "".concat(width, "px"),
                    height: "".concat(height, "px")
                }, maker.style);
                this.appendJSX(_object_spread({
                    jsx: maker.tag,
                    attrs: maker.attrs,
                    name: "(".concat(selectIcon.id, ")"),
                    frame: style
                }, "Text" === selectIcon.id && {
                    colors: [
                        style.color
                    ]
                }, extraProps && _object_spread({}, extraProps)), isNewText).then(function(el) {
                    var _this_menu_current;
                    selectIcon.makeThen(el, selectIcon.id, _this.menu.current);
                    (_this_menu_current = _this.menu.current) === null || _this_menu_current === void 0 ? void 0 : _this_menu_current.forceUpdate();
                    if (selectIcon.id === "Text") {
                        var _this_menu_current1;
                        _this.setSelectedTargets([
                            el
                        ]);
                        (_this_menu_current1 = _this.menu.current) === null || _this_menu_current1 === void 0 ? void 0 : _this_menu_current1.select("Text");
                    }
                });
                return true;
            }
        },
        {
            key: "move",
            value: function move(deltaX, deltaY) {
                this.getMoveable().request("draggable", {
                    deltaX: deltaX,
                    deltaY: deltaY
                }, true);
            }
        },
        {
            key: "checkBlur",
            value: function checkBlur() {
                var activeElement = document.activeElement;
                if (activeElement) {
                    activeElement.blur();
                }
                var selection = document.getSelection();
                if (selection) {
                    selection.removeAllRanges();
                }
                this.eventBus.trigger("blur");
            }
        },
        {
            key: "resetToolbar",
            value: function resetToolbar() {
                var _this_menu_current;
                (_this_menu_current = this.menu.current) === null || _this_menu_current === void 0 ? void 0 : _this_menu_current.select("MoveTool");
            }
        },
        {
            key: "moveInside",
            value: function moveInside() {
                var _this = this;
                var targets = this.getSelectedTargets();
                var length = targets.length;
                if (length !== 1) {
                    return;
                }
                targets = [
                    targets[0]
                ];
                var viewport = this.getViewport();
                var frameMap = this.removeFrames(targets);
                return viewport.moveInside(targets[0]).then(function(result) {
                    return _this.moveComplete(result, frameMap);
                });
            }
        },
        {
            key: "moveOutside",
            value: function moveOutside() {
                var _this = this;
                var targets = this.getSelectedTargets();
                var length = targets.length;
                if (length !== 1) {
                    return;
                }
                targets = [
                    targets[0]
                ];
                var frameMap = this.removeFrames(targets);
                this.getViewport().moveOutside(targets[0]).then(function(result) {
                    return _this.moveComplete(result, frameMap);
                });
            }
        },
        {
            key: "moveComplete",
            value: function moveComplete(result, frameMap, isRestore) {
                this.console.log("Move", result);
                var moved = result.moved, prevInfos = result.prevInfos, nextInfos = result.nextInfos;
                this.restoreFrames(moved, frameMap);
                if (moved.length) {
                    if (!isRestore) {
                        this.historyManager.addAction("move", {
                            prevInfos: prevInfos,
                            nextInfos: nextInfos
                        });
                    }
                    this.appendComplete(moved, true);
                }
                return result;
            }
        },
        {
            key: "saveEditor",
            value: function saveEditor() {
                var elements = this.getViewport().getViewportInfos();
                var stringElements = JSON.stringify(elements, function(key, value) {
                    if (key.includes("__reactInternalInstance") || key.includes("__reactFiber") || _instanceof(value, HTMLDivElement)) {
                        return void 0;
                    }
                    return value;
                });
                var parsedElements = JSON.parse(stringElements);
                return parsedElements.map(function(e) {
                    delete e.el;
                    if (e.name === "(PrintArea)" && e.attrs && e.attrs.class) {
                        e.attrs.class = void 0;
                    }
                    return e;
                });
            }
        },
        {
            key: "addImage",
            value: function addImage(file) {
                var _this = this;
                return _async_to_generator(function() {
                    var upload, _this_menu_current, image, imageLoad;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                upload = _this.props.onUploadImage;
                                if (_this.state.selectedMenu !== "Image") {
                                    ;
                                    (_this_menu_current = _this.menu.current) === null || _this_menu_current === void 0 ? void 0 : _this_menu_current.select("Image");
                                }
                                if (!(upload && file)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    upload(file)
                                ];
                            case 1:
                                image = _state.sent();
                                imageLoad = new Image();
                                _this.memory.set("imageUrl", image.url);
                                imageLoad.onload = function() {
                                    var width = imageLoad.width;
                                    var height = imageLoad.height;
                                    var MAX_SIZE = 150;
                                    if (width >= height) {
                                        height = MAX_SIZE / width * height;
                                        width = MAX_SIZE;
                                    } else {
                                        width = MAX_SIZE / height * width;
                                        height = MAX_SIZE;
                                    }
                                    var bounds = _this.infiniteViewer.current.getContainer().getBoundingClientRect();
                                    _this.selectEndMaker({
                                        top: bounds.y + 250 - height / 2,
                                        left: bounds.x + 250 - width / 2,
                                        bottom: 0,
                                        right: 0,
                                        width: width,
                                        height: height
                                    }, _object_spread({
                                        url: image.url
                                    }, image.options));
                                };
                                imageLoad.src = image.url;
                                _state.label = 2;
                            case 2:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getScreenshot",
            value: function getScreenshot(fileName) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            new Promise(function(resolve) {
                                var zoom = _this.state.zoom;
                                _this.setState({
                                    isScreenshot: true,
                                    zoom: 1
                                }, /*#__PURE__*/ _async_to_generator(function() {
                                    var viewer;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                viewer = document.getElementById("scene-viewport");
                                                return [
                                                    4,
                                                    import_dom_to_image.default.toBlob(viewer, {
                                                        cacheBust: true,
                                                        quality: 100
                                                    })
                                                ];
                                            case 1:
                                                resolve.apply(void 0, [
                                                    _state.sent()
                                                ]);
                                                _this.setState({
                                                    isScreenshot: false,
                                                    zoom: zoom
                                                });
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                }));
                            })
                        ];
                    });
                })();
            }
        },
        {
            key: "getDesignSize",
            value: function getDesignSize() {
                var _this = this;
                return _async_to_generator(function() {
                    var viewport, elements, elementsId, elementsNodes, selectedArea, design, bound;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                viewport = _this.getViewport();
                                elements = viewport.getViewportInfos();
                                elementsId = elements.filter(function(e) {
                                    return e.name !== "(PrintArea)";
                                }).map(function(e) {
                                    return e.id;
                                });
                                elementsNodes = viewport.getElements(elementsId);
                                return [
                                    4,
                                    _this.setSelectedTargets(elementsNodes)
                                ];
                            case 1:
                                _state.sent();
                                selectedArea = document.getElementsByClassName("moveable-area");
                                if (!(selectedArea.length > 0)) return [
                                    3,
                                    3
                                ];
                                design = selectedArea[0];
                                bound = design.getBoundingClientRect();
                                return [
                                    4,
                                    _this.setSelectedTargets([])
                                ];
                            case 2:
                                _state.sent();
                                return [
                                    2,
                                    {
                                        width: bound.width,
                                        height: bound.height
                                    }
                                ];
                            case 3:
                                return [
                                    4,
                                    _this.setSelectedTargets([])
                                ];
                            case 4:
                                _state.sent();
                                return [
                                    2,
                                    void 0
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getSelectableTargets",
            value: function getSelectableTargets() {
                var viewport = this.getViewport();
                var elements = viewport.getViewportInfos();
                var selectables = elements.filter(function(e) {
                    return e.name !== "(PrintArea)";
                });
                return selectables;
            }
        },
        {
            key: "getColorList",
            value: function getColorList() {
                var targets = this.getSelectableTargets();
                var colors = targets.map(function(t) {
                    return t.colors || [];
                }).flat().filter(function(element, index, self) {
                    return self.indexOf(element) === index;
                });
                return colors;
            }
        }
    ]);
    return Editor;
}(React41.PureComponent);
// src/Editor/index.ts
var Editor_default = Editor;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    makeScenaFunctionComponent: makeScenaFunctionComponent
});
