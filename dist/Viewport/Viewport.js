"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
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
// src/Editor/Viewport/Viewport.tsx
var Viewport_exports = {};
__export(Viewport_exports, {
    default: function() {
        return Viewport;
    }
});
module.exports = __toCommonJS(Viewport_exports);
var React = __toESM(require("react"));
var import_utils = require("@daybrush/utils");
// src/Editor/utils/utils.ts
var import_framework_utils = require("framework-utils");
// src/Editor/consts.ts
var PREFIX = "scena-";
var DATA_SCENA_ELEMENT_ID = "data-scena-element-id";
var userAgent = (typeof navigator !== "undefined" && navigator || {}).userAgent || "";
var isMacintosh = userAgent.indexOf("Macintosh") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("iPhone") >= 0;
// src/Editor/utils/utils.ts
function prefix() {
    for(var _len = arguments.length, classNames = new Array(_len), _key = 0; _key < _len; _key++){
        classNames[_key] = arguments[_key];
    }
    return (0, import_framework_utils.prefixNames).apply(this, [
        PREFIX
    ].concat(_to_consumable_array(classNames)));
}
function getId(el) {
    return el.getAttribute(DATA_SCENA_ELEMENT_ID) || el.dataset.scenaElementId;
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
// src/Editor/Viewport/Viewport.tsx
var Viewport = /*#__PURE__*/ function(_React_PureComponent) {
    _inherits(Viewport, _React_PureComponent);
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
            jsx: /* @__PURE__ */ React.createElement("div", null),
            name: "Viewport",
            id: "viewport",
            children: []
        };
        _this.ids = {
            viewport: _this.viewport
        };
        _this.state = {};
        _this.viewportRef = React.createRef();
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
                return /* @__PURE__ */ React.createElement("div", {
                    className: prefix("viewport-container"),
                    onBlur: this.props.onBlur,
                    style: style
                }, this.props.children, /* @__PURE__ */ React.createElement("div", _object_spread_props(_object_spread({
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
                    var _React;
                    var _jsx_props;
                    var editor = _this.props.editor;
                    var jsx = info.jsx;
                    var nextChildren = info.children;
                    var renderedChildren = _this.renderChildren(nextChildren);
                    var id = info.id;
                    var isScreenshot = editor.state.isScreenshot;
                    if (isScreenshot && info.name === "(PrintArea)") {
                        return /* @__PURE__ */ React.createElement("div", null);
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
                    if ((0, import_utils.isString)(jsx)) {
                        var _React1;
                        props[DATA_SCENA_ELEMENT_ID] = id;
                        return (_React1 = React).createElement.apply(_React1, [
                            jsx,
                            props
                        ].concat(_to_consumable_array(renderedChildren)));
                    } else if (isScenaFunction(jsx)) {
                        props.scenaElementId = id;
                        props.scenaAttrs = info.attrs || {};
                        props.scenaText = info.innerText;
                        props.scenaHTML = info.innerHTML;
                        return React.createElement(jsx, props);
                    } else if ((0, import_utils.isString)(jsx.type)) {
                        props[DATA_SCENA_ELEMENT_ID] = id;
                    } else {
                        props.scenaElementId = id;
                        props.scenaAttrs = info.attrs || {};
                        props.scenaText = info.innerText;
                        props.scenaHTML = info.innerHTML;
                    }
                    var jsxChildren = (jsx === null || jsx === void 0 ? void 0 : (_jsx_props = jsx.props) === null || _jsx_props === void 0 ? void 0 : _jsx_props.children) || [];
                    return (_React = React).cloneElement.apply(_React, [
                        jsx,
                        _object_spread({}, jsx.props, props)
                    ].concat(_to_consumable_array((0, import_utils.isArray)(jsxChildren) ? jsxChildren : [
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
                var info = (0, import_utils.isString)(target) ? this.getInfo(target) : this.getInfoByElement(target);
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
                var info = (0, import_utils.isString)(target) ? this.getInfo(target) : this.getInfoByElement(target);
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
                var info = (0, import_utils.isString)(target) ? this.getInfo(target) : this.getInfoByElement(target);
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
}(React.PureComponent);
