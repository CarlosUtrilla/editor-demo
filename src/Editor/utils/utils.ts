import { prefixNames } from "framework-utils";
import { PREFIX, DATA_SCENA_ELEMENT_ID } from "../consts";
import { EDITOR_PROPERTIES } from "../consts";
import { ScenaFunctionComponent, ScenaProps, ScenaComponent, ScenaJSXElement, ScenaFunctionJSXElement } from "../types";
import { IObject } from "@daybrush/utils";
import { ElementInfo } from "../Viewport/Viewport";

export function prefix(...classNames: string[]) {
    return prefixNames(PREFIX, ...classNames);
}
export function getContentElement(el: HTMLElement): HTMLElement | null {
    if (el.contentEditable === "inherit") {
        return getContentElement(el.parentElement!);
    }
    if (el.contentEditable === "true") {
        return el;
    }
    return null;
}

export function connectEditorProps(component: any) {
    const prototype = component.prototype;
    Object.defineProperty(prototype, "editor", {
        get: function () {
            return this.props.editor;
        },
    });
    EDITOR_PROPERTIES.forEach(name => {
        Object.defineProperty(prototype, name, {
            get: function () {
                return this.props.editor[name];
            },
        });
    })
};
export function between(val: number, min: number, max: number) {
    return Math.min(Math.max(min, val), max);
}

export function getId(el: HTMLElement | SVGElement) {
    return el.getAttribute(DATA_SCENA_ELEMENT_ID)! || el.dataset.scenaElementId!;
}
export function getIds(els: Array<HTMLElement | SVGElement>): string[] {
    return els.map(el => getId(el));
}

export function checkInput(target: HTMLElement | SVGElement) {
    const tagName = target.tagName.toLowerCase();

    return (target as HTMLElement).isContentEditable || tagName === "input" || tagName === "textarea";
}
export function checkImageLoaded(el: HTMLElement | SVGElement): Promise<any> {
    if (el.tagName.toLowerCase() !== "img") {
        return Promise.all([].slice.call(el.querySelectorAll("img")).map(el => checkImageLoaded(el)));
    }
    return new Promise(resolve => {
        if ((el as HTMLImageElement).complete) {
            resolve("");
        } else {
            el.addEventListener("load", function loaded() {
                resolve("");

                el.removeEventListener("load", loaded);
            })
        }
    });
}

export function getParnetScenaElement(el: HTMLElement | SVGElement): HTMLElement | SVGElement | null {
    if (!el) {
        return null;
    }
    if (el.hasAttribute(DATA_SCENA_ELEMENT_ID)) {
        return el;
    }
    return getParnetScenaElement(el.parentElement as HTMLElement | SVGElement);
}

export function makeScenaFunctionComponent<T = IObject<any>>(id: string, component: (props: ScenaProps & T) => React.ReactElement<any, any>): ScenaFunctionComponent<T> {
    (component as ScenaFunctionComponent<T>).scenaComponentId = id;

    return component as ScenaFunctionComponent<T>;
}

export function getScenaAttrs(el: HTMLElement | SVGElement) {
    const attributes = el.attributes;
    const length = attributes.length;
    const attrs: IObject<any> = {};

    for (let i = 0; i < length; ++i) {
        const { name, value } = attributes[i];

        if (name === DATA_SCENA_ELEMENT_ID || name === "style") {
            continue;
        }
        attrs[name] = value;
    }

    return attrs;
}

export function isScenaFunction(value: any): value is ScenaComponent {
    return typeof value === 'function' && "scenaComponentId" in value;
}

export function isScenaElement(value: any): value is ScenaJSXElement {
    return value !== null && typeof value === 'object' && !isScenaFunction(value);
}
export function isScenaFunctionElement(value: any): value is ScenaFunctionJSXElement {
    return isScenaElement(value) && typeof value === 'function';
}

export function isNumber(value: any): value is number {
    return typeof value === "number";
}

export function inRange(number: number, start: number, end?: number) {
    if (end === undefined) {
        end = start;
        start = 0;
    }

    if (start > end) {
        const temp = start;
        start = end;
        end = temp;
    }

    return number >= start && number < end;
}

export function isDivInsideAnother(div1: any, div2: any) {
    // Obtener las coordenadas y dimensiones del primer div
    var rect1 = div1.getBoundingClientRect();

    // Obtener las coordenadas y dimensiones del segundo div
    var rect2 = div2.getBoundingClientRect();
    // Verificar si el primer div está dentro del área del segundo div
    return (
        rect1.left >= rect2.left &&
        rect1.right <= rect2.right &&
        rect1.top >= rect2.top &&
        rect1.bottom <= rect2.bottom
    );
}