var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// src/Editor/Viewport/Viewport.tsx
import * as React from "react";
import { isString, isArray } from "@daybrush/utils";

// src/Editor/utils/utils.ts
import { prefixNames } from "framework-utils";

// src/Editor/consts.ts
var EDITOR_PROPERTIES = ["memory", "eventBus", "keyManager", "moveableData", "moveableManager", "historyManager", "console"];
var PREFIX = "scena-";
var DATA_SCENA_ELEMENT_ID = "data-scena-element-id";
var userAgent = (typeof navigator !== "undefined" && navigator || {}).userAgent || "";
var isMacintosh = userAgent.indexOf("Macintosh") >= 0 || userAgent.indexOf("iPad") >= 0 || userAgent.indexOf("iPhone") >= 0;
var TYPE_SCENA_LAYERS = "application/x-scena-layers";

// src/Editor/utils/utils.ts
function prefix(...classNames) {
  return prefixNames(PREFIX, ...classNames);
}
function connectEditorProps(component) {
  const prototype = component.prototype;
  Object.defineProperty(prototype, "editor", {
    get: function() {
      return this.props.editor;
    }
  });
  EDITOR_PROPERTIES.forEach((name) => {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.props.editor[name];
      }
    });
  });
}
function getId(el) {
  return el.getAttribute(DATA_SCENA_ELEMENT_ID) || el.dataset.scenaElementId;
}
function getIds(els) {
  return els.map((el) => getId(el));
}
function checkInput(target) {
  const tagName = target.tagName.toLowerCase();
  return target.isText || tagName === "input" || tagName === "textarea";
}
function checkImageLoaded(el) {
  if (el.tagName.toLowerCase() !== "img") {
    return Promise.all([].slice.call(el.querySelectorAll("img")).map((el2) => checkImageLoaded(el2)));
  }
  return new Promise((resolve) => {
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
  const attributes = el.attributes;
  const length = attributes.length;
  const attrs = {};
  for (let i = 0; i < length; ++i) {
    const { name, value } = attributes[i];
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
  str = str[0].toLowerCase() + str.slice(1, str.length).replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  str = str.replaceAll(" _", "-");
  return str.replaceAll(" ", "-").replace(/(^-*|-*$)/g, "");
  ;
}

// src/Editor/Viewport/Viewport.tsx
import { cloneDeep } from "lodash";
var Viewport = class extends React.PureComponent {
  constructor() {
    super(...arguments);
    this.components = {};
    this.jsxs = {};
    this.viewport = {
      jsx: /* @__PURE__ */ React.createElement("div", null),
      name: "Viewport",
      id: "viewport",
      children: []
    };
    this.ids = {
      viewport: this.viewport
    };
    this.state = {};
    this.viewportRef = React.createRef();
  }
  render() {
    const style = this.props.style;
    const { background } = this.props;
    const { editor } = this.props;
    const isScreenshot = editor.state.isScreenshot;
    const previewMode = editor.props.previewMode;
    return /* @__PURE__ */ React.createElement("div", { className: prefix("viewport-container"), onBlur: this.props.onBlur, style }, this.props.children, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: prefix("viewport"),
        id: "scene-viewport",
        ...{ [DATA_SCENA_ELEMENT_ID]: "viewport" },
        ref: this.viewportRef,
        style: {
          ...background && { backgroundImage: `url(${background})` },
          ...(isScreenshot || previewMode) && { borderColor: "transparent" }
        }
      },
      this.renderChildren(this.getViewportInfos())
    ));
  }
  componentDidMount() {
    this.ids.viewport.el = this.viewportRef.current;
  }
  renderChildren(children) {
    let areErrors = false;
    const renders = children.map((info, _, allInfos) => {
      const editor = this.props.editor;
      const jsx = info.jsx;
      const nextChildren = info.children;
      const renderedChildren = this.renderChildren(nextChildren);
      const id = info.id;
      const isScreenshot = editor.state.isScreenshot;
      if (isScreenshot && info.name === "(PrintArea)") {
        return /* @__PURE__ */ React.createElement("div", null);
      }
      if (info.name === "(PrintArea)" && editor.props.printAreaSize) {
        info.innerHTML = `<div class="print-area-size"><span>${editor.props.printAreaSize}</span></div>`;
      }
      const props = {
        key: id
      };
      props.className = "";
      if (editor.props.isAdmin || !editor.props.isAdmin && info.name !== "(PrintArea)") {
        props.className = `selectable ${info.name === "(Text)" ? "Text" : ""}`;
      }
      if (info.name === "(PrintArea)") {
        props.className = `PrintArea ${props.className}`;
      }
      if (info.name !== "(PrintArea)" && info.el && !editor.props.previewMode) {
        const printAreas = allInfos.filter((e) => e.name === "(PrintArea)");
        const isOnArea = printAreas.some((p) => {
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
      if (!editor.props.isAdmin && info.name === "(PrintArea)" && typeof info.attrs.class === "string" && info.attrs.class.includes("selectable")) {
        info.attrs.class = info.attrs.class.replace("selectable", "");
      }
      if (isString(jsx)) {
        props[DATA_SCENA_ELEMENT_ID] = id;
        return React.createElement(jsx, props, ...renderedChildren);
      } else if (isScenaFunction(jsx)) {
        props.scenaElementId = id;
        props.scenaAttrs = info.attrs || {};
        props.scenaText = info.innerText;
        props.scenaHTML = info.innerHTML;
        return React.createElement(jsx, props);
      } else if (isString(jsx.type)) {
        props[DATA_SCENA_ELEMENT_ID] = id;
      } else {
        props.scenaElementId = id;
        props.scenaAttrs = info.attrs || {};
        props.scenaText = info.innerText;
        props.scenaHTML = info.innerHTML;
      }
      const jsxChildren = jsx?.props?.children || [];
      return React.cloneElement(
        jsx,
        { ...jsx.props, ...props },
        ...isArray(jsxChildren) ? jsxChildren : [jsxChildren],
        ...this.renderChildren(nextChildren)
      );
    });
    const onValidate = this.props.editor.props.onValidate;
    onValidate && onValidate(areErrors);
    return renders;
  }
  getJSX(id) {
    return this.jsxs[id];
  }
  getComponent(id) {
    return this.components[id];
  }
  makeId(ids = this.ids) {
    while (true) {
      const id = `scena${Math.floor(Math.random() * 1e8)}`;
      if (ids[id]) {
        continue;
      }
      return id;
    }
  }
  setInfo(id, info) {
    const ids = this.ids;
    ids[id] = info;
  }
  getInfo(id) {
    return this.ids[id];
  }
  getLastChildInfo(id) {
    const info = this.getInfo(id);
    const children = info ? info.children : [];
    return children[children.length - 1];
  }
  getNextInfo(id) {
    const info = this.getInfo(id);
    if (info.scopeId) {
      const parentInfo = this.getInfo(info.scopeId);
      const parentChildren = parentInfo.children;
      const index = parentChildren.indexOf(info);
      return parentChildren[index + 1];
    }
    return;
  }
  getPrevInfo(id) {
    const info = this.getInfo(id);
    const parentInfo = this.getInfo(info.scopeId);
    const parentChildren = parentInfo.children;
    const index = parentChildren.indexOf(info);
    return parentChildren[index - 1];
  }
  getInfoByElement(el) {
    return this.ids[getId(el)];
  }
  getInfoByIndexes(indexes) {
    return indexes.reduce((info, index) => {
      return info.children[index];
    }, this.viewport);
  }
  getElement(id) {
    const info = this.getInfo(id);
    return info ? info.el : null;
  }
  getViewportInfos() {
    return this.viewport.children;
  }
  getIndexes(target) {
    const info = isString(target) ? this.getInfo(target) : this.getInfoByElement(target);
    if (!info.scopeId) {
      return [];
    }
    const parentInfo = this.getInfo(info.scopeId);
    return [...this.getIndexes(info.scopeId), parentInfo.children.indexOf(info)];
  }
  registerChildren(jsxs, parentScopeId) {
    return jsxs.map((info) => {
      const id = info.id || this.makeId();
      const jsx = info.jsx;
      const children = info.children || [];
      const scopeId = parentScopeId || info.scopeId || "viewport";
      let componentId = "";
      let jsxId = "";
      if (isScenaElement(jsx)) {
        jsxId = this.makeId(this.jsxs);
        this.jsxs[jsxId] = jsx;
      }
      const elementInfo = {
        ...info,
        jsx,
        children: this.registerChildren(children, id),
        scopeId,
        componentId,
        jsxId,
        frame: info.frame || {},
        el: null,
        id
      };
      this.setInfo(id, elementInfo);
      return elementInfo;
    });
  }
  appendJSXs(jsxs, appendIndex, scopeId) {
    const jsxInfos = this.registerChildren(jsxs, scopeId);
    jsxInfos.forEach((info, i) => {
      console.log("index", info.index);
      const scopeInfo = this.getInfo(scopeId || info.scopeId);
      const children = scopeInfo.children;
      console.log("children", cloneDeep(children));
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
    return new Promise((resolve) => {
      this.forceUpdate(() => {
        const infos = jsxInfos.map(function registerElement(info) {
          const id = info.id;
          const target = document.querySelector(`[${DATA_SCENA_ELEMENT_ID}="${id}"]`);
          const attrs = info.attrs || {};
          info.el = target;
          for (const name in attrs) {
            target.setAttribute(name, attrs[name]);
          }
          info.attrs = getScenaAttrs(target);
          const children = info.children || [];
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
          return { ...info };
        });
        resolve({
          added: infos
        });
      });
    });
  }
  getIndex(id) {
    const indexes = this.getIndexes(id);
    const length = indexes.length;
    return length ? indexes[length - 1] : -1;
  }
  getElements(ids) {
    return ids.map((id) => this.getElement(id)).filter((el) => el);
  }
  unregisterChildren(children, isChild) {
    const ids = this.ids;
    return children.slice(0).map((info) => {
      const target = info.el;
      let innerText = "";
      let innerHTML = "";
      if (info.attrs.isText) {
        innerText = target.innerText;
      } else {
        innerHTML = target.innerHTML;
      }
      if (!isChild) {
        const parentInfo = this.getInfo(info.scopeId);
        const parentChildren = parentInfo.children;
        const index = parentChildren.indexOf(info);
        parentInfo.children.splice(index, 1);
      }
      const nextChildren = this.unregisterChildren(info.children, true);
      delete ids[info.id];
      delete info.el;
      return {
        ...info,
        innerText,
        innerHTML,
        attrs: getScenaAttrs(target),
        children: nextChildren
      };
    });
  }
  removeTargets(targets) {
    const removedChildren = this.getSortedTargets(targets).map((target) => {
      return this.getInfoByElement(target);
    }).filter((info) => info);
    const indexes = removedChildren.map((info) => this.getIndex(info.id));
    const removed = this.unregisterChildren(removedChildren);
    removed.forEach((info, i) => {
      info.index = indexes[i];
    });
    const childrens = this.getViewportInfos();
    this.appendJSXs(childrens, 0);
    return new Promise((resolve) => {
      this.forceUpdate(() => {
        resolve({
          removed
        });
      });
    });
  }
  getSortedIndexesList(targets) {
    const indexesList = targets.map((target) => {
      if (Array.isArray(target)) {
        return target;
      }
      return this.getIndexes(target);
    });
    indexesList.sort((a, b) => {
      const aLength = a.length;
      const bLength = b.length;
      const length = Math.min(aLength, bLength);
      for (let i = 0; i < length; ++i) {
        if (a[i] === b[i]) {
          continue;
        }
        return a[i] - b[i];
      }
      return aLength - bLength;
    });
    return indexesList;
  }
  getSortedTargets(targets) {
    return this.getSortedInfos(targets).map((info) => info.el);
  }
  getSortedInfos(targets) {
    const indexesList = this.getSortedIndexesList(targets);
    return indexesList.map((indexes) => this.getInfoByIndexes(indexes));
  }
  moveInside(target) {
    const info = isString(target) ? this.getInfo(target) : this.getInfoByElement(target);
    const prevInfo = this.getPrevInfo(info.id);
    let moved;
    if (!prevInfo || isScenaFunction(prevInfo.jsx) || isScenaFunctionElement(prevInfo.jsx)) {
      moved = [];
    } else {
      moved = [info];
    }
    const lastInfo = prevInfo && this.getLastChildInfo(prevInfo.id);
    return this.move(moved, prevInfo, lastInfo);
  }
  moveOutside(target) {
    const info = isString(target) ? this.getInfo(target) : this.getInfoByElement(target);
    const parentInfo = this.getInfo(info.scopeId);
    const rootInfo = this.getInfo(parentInfo.scopeId);
    const moved = rootInfo ? [info] : [];
    return this.move(moved, rootInfo, parentInfo);
  }
  moves(nextInfos) {
    const prevInfos = nextInfos.map(({ info }) => {
      return {
        info,
        parentInfo: this.getInfo(info.scopeId),
        prevInfo: this.getPrevInfo(info.id)
      };
    });
    nextInfos.forEach(({ info, parentInfo, prevInfo }) => {
      const children = this.getInfo(info.scopeId).children;
      children.splice(children.indexOf(info), 1);
      const parnetChildren = parentInfo.children;
      parnetChildren.splice(prevInfo ? parnetChildren.indexOf(prevInfo) + 1 : 0, 0, info);
      info.scopeId = parentInfo.id;
    });
    const infos = nextInfos.map(({ info }) => info);
    return new Promise((resolve) => {
      this.forceUpdate(() => {
        infos.forEach(function moveInfo(info) {
          const id = info.id;
          const target = document.querySelector(`[${DATA_SCENA_ELEMENT_ID}="${id}"]`);
          info.el = target;
          info.children.forEach(moveInfo);
        });
        resolve({
          moved: infos,
          prevInfos,
          nextInfos
        });
      });
    });
  }
  move(infos, parentInfo, prevInfo) {
    const sortedInfos = this.getSortedInfos(infos.map((info) => info.el));
    return this.moves(sortedInfos.map((info, i) => {
      return {
        info,
        parentInfo,
        prevInfo: i === 0 ? prevInfo : sortedInfos[i - 1]
      };
    }));
  }
};

export {
  __decorateClass,
  DATA_SCENA_ELEMENT_ID,
  TYPE_SCENA_LAYERS,
  prefix,
  connectEditorProps,
  getId,
  getIds,
  checkInput,
  checkImageLoaded,
  getParnetScenaElement,
  makeScenaFunctionComponent,
  getScenaAttrs,
  convertToSnakeCase,
  Viewport
};
