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
var __commonJS = function(cb, mod) {
    return function __require() {
        return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
            exports: {}
        }).exports, mod), mod.exports;
    };
};
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
// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js": function(exports) {
        "use strict";
        var l = Symbol.for("react.element");
        var n = Symbol.for("react.portal");
        var p = Symbol.for("react.fragment");
        var q = Symbol.for("react.strict_mode");
        var r = Symbol.for("react.profiler");
        var t = Symbol.for("react.provider");
        var u = Symbol.for("react.context");
        var v = Symbol.for("react.forward_ref");
        var w = Symbol.for("react.suspense");
        var x = Symbol.for("react.memo");
        var y = Symbol.for("react.lazy");
        var z = Symbol.iterator;
        function A(a) {
            if (null === a || "object" !== typeof a) return null;
            a = z && a[z] || a["@@iterator"];
            return "function" === typeof a ? a : null;
        }
        var B = {
            isMounted: function isMounted() {
                return false;
            },
            enqueueForceUpdate: function enqueueForceUpdate() {},
            enqueueReplaceState: function enqueueReplaceState() {},
            enqueueSetState: function enqueueSetState() {}
        };
        var C = Object.assign;
        var D = {};
        function E(a, b, e) {
            this.props = a;
            this.context = b;
            this.refs = D;
            this.updater = e || B;
        }
        E.prototype.isReactComponent = {};
        E.prototype.setState = function(a, b) {
            if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, a, b, "setState");
        };
        E.prototype.forceUpdate = function(a) {
            this.updater.enqueueForceUpdate(this, a, "forceUpdate");
        };
        function F() {}
        F.prototype = E.prototype;
        function G(a, b, e) {
            this.props = a;
            this.context = b;
            this.refs = D;
            this.updater = e || B;
        }
        var H = G.prototype = new F();
        H.constructor = G;
        C(H, E.prototype);
        H.isPureReactComponent = true;
        var I = Array.isArray;
        var J = Object.prototype.hasOwnProperty;
        var K = {
            current: null
        };
        var L = {
            key: true,
            ref: true,
            __self: true,
            __source: true
        };
        function M(a, b, e) {
            var d, c = {}, k = null, h = null;
            if (null != b) for(d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
            var g = arguments.length - 2;
            if (1 === g) c.children = e;
            else if (1 < g) {
                for(var f = Array(g), m = 0; m < g; m++)f[m] = arguments[m + 2];
                c.children = f;
            }
            if (a && a.defaultProps) for(d in g = a.defaultProps, g)void 0 === c[d] && (c[d] = g[d]);
            return {
                $$typeof: l,
                type: a,
                key: k,
                ref: h,
                props: c,
                _owner: K.current
            };
        }
        function N(a, b) {
            return {
                $$typeof: l,
                type: a.type,
                key: b,
                ref: a.ref,
                props: a.props,
                _owner: a._owner
            };
        }
        function O(a) {
            return "object" === typeof a && null !== a && a.$$typeof === l;
        }
        function escape(a) {
            var b = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + a.replace(/[=:]/g, function(a2) {
                return b[a2];
            });
        }
        var P = /\/+/g;
        function Q(a, b) {
            return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
        }
        function R(a, b, e, d, c) {
            var k = typeof a === "undefined" ? "undefined" : _type_of(a);
            if ("undefined" === k || "boolean" === k) a = null;
            var h = false;
            if (null === a) h = true;
            else switch(k){
                case "string":
                case "number":
                    h = true;
                    break;
                case "object":
                    switch(a.$$typeof){
                        case l:
                        case n:
                            h = true;
                    }
            }
            if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
                return a2;
            })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
            h = 0;
            d = "" === d ? "." : d + ":";
            if (I(a)) for(var g = 0; g < a.length; g++){
                k = a[g];
                var f = d + Q(k, g);
                h += R(k, b, e, f, c);
            }
            else if (f = A(a), "function" === typeof f) for(a = f.call(a), g = 0; !(k = a.next()).done;)k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
            else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
            return h;
        }
        function S(a, b, e) {
            if (null == a) return a;
            var d = [], c = 0;
            R(a, d, "", "", function(a2) {
                return b.call(e, a2, c++);
            });
            return d;
        }
        function T(a) {
            if (-1 === a._status) {
                var b = a._result;
                b = b();
                b.then(function(b2) {
                    if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
                }, function(b2) {
                    if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
                });
                -1 === a._status && (a._status = 0, a._result = b);
            }
            if (1 === a._status) return a._result.default;
            throw a._result;
        }
        var U = {
            current: null
        };
        var V = {
            transition: null
        };
        var W = {
            ReactCurrentDispatcher: U,
            ReactCurrentBatchConfig: V,
            ReactCurrentOwner: K
        };
        exports.Children = {
            map: S,
            forEach: function forEach(a, b, e) {
                S(a, function() {
                    b.apply(this, arguments);
                }, e);
            },
            count: function count(a) {
                var b = 0;
                S(a, function() {
                    b++;
                });
                return b;
            },
            toArray: function toArray(a) {
                return S(a, function(a2) {
                    return a2;
                }) || [];
            },
            only: function only(a) {
                if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
                return a;
            }
        };
        exports.Component = E;
        exports.Fragment = p;
        exports.Profiler = r;
        exports.PureComponent = G;
        exports.StrictMode = q;
        exports.Suspense = w;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
        exports.cloneElement = function(a, b, e) {
            if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
            var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
            if (null != b) {
                void 0 !== b.ref && (k = b.ref, h = K.current);
                void 0 !== b.key && (c = "" + b.key);
                if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
                for(f in b)J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
            }
            var f = arguments.length - 2;
            if (1 === f) d.children = e;
            else if (1 < f) {
                g = Array(f);
                for(var m = 0; m < f; m++)g[m] = arguments[m + 2];
                d.children = g;
            }
            return {
                $$typeof: l,
                type: a.type,
                key: c,
                ref: k,
                props: d,
                _owner: h
            };
        };
        exports.createContext = function(a) {
            a = {
                $$typeof: u,
                _currentValue: a,
                _currentValue2: a,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null
            };
            a.Provider = {
                $$typeof: t,
                _context: a
            };
            return a.Consumer = a;
        };
        exports.createElement = M;
        exports.createFactory = function(a) {
            var b = M.bind(null, a);
            b.type = a;
            return b;
        };
        exports.createRef = function() {
            return {
                current: null
            };
        };
        exports.forwardRef = function(a) {
            return {
                $$typeof: v,
                render: a
            };
        };
        exports.isValidElement = O;
        exports.lazy = function(a) {
            return {
                $$typeof: y,
                _payload: {
                    _status: -1,
                    _result: a
                },
                _init: T
            };
        };
        exports.memo = function(a, b) {
            return {
                $$typeof: x,
                type: a,
                compare: void 0 === b ? null : b
            };
        };
        exports.startTransition = function(a) {
            var b = V.transition;
            V.transition = {};
            try {
                a();
            } finally{
                V.transition = b;
            }
        };
        exports.unstable_act = function() {
            throw Error("act(...) is not supported in production builds of React.");
        };
        exports.useCallback = function(a, b) {
            return U.current.useCallback(a, b);
        };
        exports.useContext = function(a) {
            return U.current.useContext(a);
        };
        exports.useDebugValue = function() {};
        exports.useDeferredValue = function(a) {
            return U.current.useDeferredValue(a);
        };
        exports.useEffect = function(a, b) {
            return U.current.useEffect(a, b);
        };
        exports.useId = function() {
            return U.current.useId();
        };
        exports.useImperativeHandle = function(a, b, e) {
            return U.current.useImperativeHandle(a, b, e);
        };
        exports.useInsertionEffect = function(a, b) {
            return U.current.useInsertionEffect(a, b);
        };
        exports.useLayoutEffect = function(a, b) {
            return U.current.useLayoutEffect(a, b);
        };
        exports.useMemo = function(a, b) {
            return U.current.useMemo(a, b);
        };
        exports.useReducer = function(a, b, e) {
            return U.current.useReducer(a, b, e);
        };
        exports.useRef = function(a) {
            return U.current.useRef(a);
        };
        exports.useState = function(a) {
            return U.current.useState(a);
        };
        exports.useSyncExternalStore = function(a, b, e) {
            return U.current.useSyncExternalStore(a, b, e);
        };
        exports.useTransition = function() {
            return U.current.useTransition();
        };
        exports.version = "18.2.0";
    }
});
// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
    "node_modules/react/cjs/react.development.js": function(exports, module2) {
        "use strict";
        if (process.env.NODE_ENV !== "production") {
            (function() {
                "use strict";
                if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
                }
                var ReactVersion = "18.2.0";
                var REACT_ELEMENT_TYPE = Symbol.for("react.element");
                var REACT_PORTAL_TYPE = Symbol.for("react.portal");
                var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
                var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
                var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
                var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
                var REACT_CONTEXT_TYPE = Symbol.for("react.context");
                var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
                var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
                var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
                var REACT_MEMO_TYPE = Symbol.for("react.memo");
                var REACT_LAZY_TYPE = Symbol.for("react.lazy");
                var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
                var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
                var FAUX_ITERATOR_SYMBOL = "@@iterator";
                function getIteratorFn(maybeIterable) {
                    if (maybeIterable === null || typeof maybeIterable !== "object") {
                        return null;
                    }
                    var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
                    if (typeof maybeIterator === "function") {
                        return maybeIterator;
                    }
                    return null;
                }
                var ReactCurrentDispatcher = {
                    /**
           * @internal
           * @type {ReactComponent}
           */ current: null
                };
                var ReactCurrentBatchConfig = {
                    transition: null
                };
                var ReactCurrentActQueue = {
                    current: null,
                    // Used to reproduce behavior of `batchedUpdates` in legacy mode.
                    isBatchingLegacy: false,
                    didScheduleLegacyUpdate: false
                };
                var ReactCurrentOwner = {
                    /**
           * @internal
           * @type {ReactComponent}
           */ current: null
                };
                var ReactDebugCurrentFrame = {};
                var currentExtraStackFrame = null;
                function setExtraStackFrame(stack) {
                    {
                        currentExtraStackFrame = stack;
                    }
                }
                {
                    ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
                        {
                            currentExtraStackFrame = stack;
                        }
                    };
                    ReactDebugCurrentFrame.getCurrentStack = null;
                    ReactDebugCurrentFrame.getStackAddendum = function() {
                        var stack = "";
                        if (currentExtraStackFrame) {
                            stack += currentExtraStackFrame;
                        }
                        var impl = ReactDebugCurrentFrame.getCurrentStack;
                        if (impl) {
                            stack += impl() || "";
                        }
                        return stack;
                    };
                }
                var enableScopeAPI = false;
                var enableCacheElement = false;
                var enableTransitionTracing = false;
                var enableLegacyHidden = false;
                var enableDebugTracing = false;
                var ReactSharedInternals = {
                    ReactCurrentDispatcher: ReactCurrentDispatcher,
                    ReactCurrentBatchConfig: ReactCurrentBatchConfig,
                    ReactCurrentOwner: ReactCurrentOwner
                };
                {
                    ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
                    ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
                }
                function warn(format) {
                    {
                        {
                            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                args[_key - 1] = arguments[_key];
                            }
                            printWarning("warn", format, args);
                        }
                    }
                }
                function error(format) {
                    {
                        {
                            for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                                args[_key2 - 1] = arguments[_key2];
                            }
                            printWarning("error", format, args);
                        }
                    }
                }
                function printWarning(level, format, args) {
                    {
                        var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
                        var stack = ReactDebugCurrentFrame2.getStackAddendum();
                        if (stack !== "") {
                            format += "%s";
                            args = args.concat([
                                stack
                            ]);
                        }
                        var argsWithFormat = args.map(function(item) {
                            return String(item);
                        });
                        argsWithFormat.unshift("Warning: " + format);
                        Function.prototype.apply.call(console[level], console, argsWithFormat);
                    }
                }
                var didWarnStateUpdateForUnmountedComponent = {};
                function warnNoop(publicInstance, callerName) {
                    {
                        var _constructor = publicInstance.constructor;
                        var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
                        var warningKey = componentName + "." + callerName;
                        if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                            return;
                        }
                        error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
                        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
                    }
                }
                var ReactNoopUpdateQueue = {
                    /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */ isMounted: function isMounted(publicInstance) {
                        return false;
                    },
                    /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */ enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
                        warnNoop(publicInstance, "forceUpdate");
                    },
                    /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */ enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
                        warnNoop(publicInstance, "replaceState");
                    },
                    /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */ enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
                        warnNoop(publicInstance, "setState");
                    }
                };
                var assign = Object.assign;
                var emptyObject = {};
                {
                    Object.freeze(emptyObject);
                }
                function Component2(props, context, updater) {
                    this.props = props;
                    this.context = context;
                    this.refs = emptyObject;
                    this.updater = updater || ReactNoopUpdateQueue;
                }
                Component2.prototype.isReactComponent = {};
                Component2.prototype.setState = function(partialState, callback) {
                    if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
                        throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    }
                    this.updater.enqueueSetState(this, partialState, callback, "setState");
                };
                Component2.prototype.forceUpdate = function(callback) {
                    this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
                };
                {
                    var deprecatedAPIs = {
                        isMounted: [
                            "isMounted",
                            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
                        ],
                        replaceState: [
                            "replaceState",
                            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
                        ]
                    };
                    var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
                        Object.defineProperty(Component2.prototype, methodName, {
                            get: function get() {
                                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                                return void 0;
                            }
                        });
                    };
                    for(var fnName in deprecatedAPIs){
                        if (deprecatedAPIs.hasOwnProperty(fnName)) {
                            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
                        }
                    }
                }
                function ComponentDummy() {}
                ComponentDummy.prototype = Component2.prototype;
                function PureComponent7(props, context, updater) {
                    this.props = props;
                    this.context = context;
                    this.refs = emptyObject;
                    this.updater = updater || ReactNoopUpdateQueue;
                }
                var pureComponentPrototype = PureComponent7.prototype = new ComponentDummy();
                pureComponentPrototype.constructor = PureComponent7;
                assign(pureComponentPrototype, Component2.prototype);
                pureComponentPrototype.isPureReactComponent = true;
                function createRef11() {
                    var refObject = {
                        current: null
                    };
                    {
                        Object.seal(refObject);
                    }
                    return refObject;
                }
                var isArrayImpl = Array.isArray;
                function isArray2(a) {
                    return isArrayImpl(a);
                }
                function typeName(value) {
                    {
                        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
                        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
                        return type;
                    }
                }
                function willCoercionThrow(value) {
                    {
                        try {
                            testStringCoercion(value);
                            return false;
                        } catch (e) {
                            return true;
                        }
                    }
                }
                function testStringCoercion(value) {
                    return "" + value;
                }
                function checkKeyStringCoercion(value) {
                    {
                        if (willCoercionThrow(value)) {
                            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
                            return testStringCoercion(value);
                        }
                    }
                }
                function getWrappedName(outerType, innerType, wrapperName) {
                    var displayName = outerType.displayName;
                    if (displayName) {
                        return displayName;
                    }
                    var functionName = innerType.displayName || innerType.name || "";
                    return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
                }
                function getContextName(type) {
                    return type.displayName || "Context";
                }
                function getComponentNameFromType(type) {
                    if (type == null) {
                        return null;
                    }
                    {
                        if (typeof type.tag === "number") {
                            error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
                        }
                    }
                    if (typeof type === "function") {
                        return type.displayName || type.name || null;
                    }
                    if (typeof type === "string") {
                        return type;
                    }
                    switch(type){
                        case REACT_FRAGMENT_TYPE:
                            return "Fragment";
                        case REACT_PORTAL_TYPE:
                            return "Portal";
                        case REACT_PROFILER_TYPE:
                            return "Profiler";
                        case REACT_STRICT_MODE_TYPE:
                            return "StrictMode";
                        case REACT_SUSPENSE_TYPE:
                            return "Suspense";
                        case REACT_SUSPENSE_LIST_TYPE:
                            return "SuspenseList";
                    }
                    if (typeof type === "object") {
                        switch(type.$$typeof){
                            case REACT_CONTEXT_TYPE:
                                var context = type;
                                return getContextName(context) + ".Consumer";
                            case REACT_PROVIDER_TYPE:
                                var provider = type;
                                return getContextName(provider._context) + ".Provider";
                            case REACT_FORWARD_REF_TYPE:
                                return getWrappedName(type, type.render, "ForwardRef");
                            case REACT_MEMO_TYPE:
                                var outerName = type.displayName || null;
                                if (outerName !== null) {
                                    return outerName;
                                }
                                return getComponentNameFromType(type.type) || "Memo";
                            case REACT_LAZY_TYPE:
                                {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return getComponentNameFromType(init(payload));
                                    } catch (x) {
                                        return null;
                                    }
                                }
                        }
                    }
                    return null;
                }
                var hasOwnProperty = Object.prototype.hasOwnProperty;
                var RESERVED_PROPS = {
                    key: true,
                    ref: true,
                    __self: true,
                    __source: true
                };
                var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
                {
                    didWarnAboutStringRefs = {};
                }
                function hasValidRef(config) {
                    {
                        if (hasOwnProperty.call(config, "ref")) {
                            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
                            if (getter && getter.isReactWarning) {
                                return false;
                            }
                        }
                    }
                    return config.ref !== void 0;
                }
                function hasValidKey(config) {
                    {
                        if (hasOwnProperty.call(config, "key")) {
                            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
                            if (getter && getter.isReactWarning) {
                                return false;
                            }
                        }
                    }
                    return config.key !== void 0;
                }
                function defineKeyPropWarningGetter(props, displayName) {
                    var warnAboutAccessingKey = function warnAboutAccessingKey() {
                        {
                            if (!specialPropKeyWarningShown) {
                                specialPropKeyWarningShown = true;
                                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                            }
                        }
                    };
                    warnAboutAccessingKey.isReactWarning = true;
                    Object.defineProperty(props, "key", {
                        get: warnAboutAccessingKey,
                        configurable: true
                    });
                }
                function defineRefPropWarningGetter(props, displayName) {
                    var warnAboutAccessingRef = function warnAboutAccessingRef() {
                        {
                            if (!specialPropRefWarningShown) {
                                specialPropRefWarningShown = true;
                                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
                            }
                        }
                    };
                    warnAboutAccessingRef.isReactWarning = true;
                    Object.defineProperty(props, "ref", {
                        get: warnAboutAccessingRef,
                        configurable: true
                    });
                }
                function warnIfStringRefCannotBeAutoConverted(config) {
                    {
                        if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
                            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
                            if (!didWarnAboutStringRefs[componentName]) {
                                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                                didWarnAboutStringRefs[componentName] = true;
                            }
                        }
                    }
                }
                var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
                    var element = {
                        // This tag allows us to uniquely identify this as a React Element
                        $$typeof: REACT_ELEMENT_TYPE,
                        // Built-in properties that belong on the element
                        type: type,
                        key: key,
                        ref: ref,
                        props: props,
                        // Record the component responsible for creating this element.
                        _owner: owner
                    };
                    {
                        element._store = {};
                        Object.defineProperty(element._store, "validated", {
                            configurable: false,
                            enumerable: false,
                            writable: true,
                            value: false
                        });
                        Object.defineProperty(element, "_self", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: self
                        });
                        Object.defineProperty(element, "_source", {
                            configurable: false,
                            enumerable: false,
                            writable: false,
                            value: source
                        });
                        if (Object.freeze) {
                            Object.freeze(element.props);
                            Object.freeze(element);
                        }
                    }
                    return element;
                };
                function createElement36(type, config, children) {
                    var propName;
                    var props = {};
                    var key = null;
                    var ref = null;
                    var self = null;
                    var source = null;
                    if (config != null) {
                        if (hasValidRef(config)) {
                            ref = config.ref;
                            {
                                warnIfStringRefCannotBeAutoConverted(config);
                            }
                        }
                        if (hasValidKey(config)) {
                            {
                                checkKeyStringCoercion(config.key);
                            }
                            key = "" + config.key;
                        }
                        self = config.__self === void 0 ? null : config.__self;
                        source = config.__source === void 0 ? null : config.__source;
                        for(propName in config){
                            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                props[propName] = config[propName];
                            }
                        }
                    }
                    var childrenLength = arguments.length - 2;
                    if (childrenLength === 1) {
                        props.children = children;
                    } else if (childrenLength > 1) {
                        var childArray = Array(childrenLength);
                        for(var i = 0; i < childrenLength; i++){
                            childArray[i] = arguments[i + 2];
                        }
                        {
                            if (Object.freeze) {
                                Object.freeze(childArray);
                            }
                        }
                        props.children = childArray;
                    }
                    if (type && type.defaultProps) {
                        var defaultProps = type.defaultProps;
                        for(propName in defaultProps){
                            if (props[propName] === void 0) {
                                props[propName] = defaultProps[propName];
                            }
                        }
                    }
                    {
                        if (key || ref) {
                            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
                            if (key) {
                                defineKeyPropWarningGetter(props, displayName);
                            }
                            if (ref) {
                                defineRefPropWarningGetter(props, displayName);
                            }
                        }
                    }
                    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
                }
                function cloneAndReplaceKey(oldElement, newKey) {
                    var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
                    return newElement;
                }
                function cloneElement2(element, config, children) {
                    if (element === null || element === void 0) {
                        throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
                    }
                    var propName;
                    var props = assign({}, element.props);
                    var key = element.key;
                    var ref = element.ref;
                    var self = element._self;
                    var source = element._source;
                    var owner = element._owner;
                    if (config != null) {
                        if (hasValidRef(config)) {
                            ref = config.ref;
                            owner = ReactCurrentOwner.current;
                        }
                        if (hasValidKey(config)) {
                            {
                                checkKeyStringCoercion(config.key);
                            }
                            key = "" + config.key;
                        }
                        var defaultProps;
                        if (element.type && element.type.defaultProps) {
                            defaultProps = element.type.defaultProps;
                        }
                        for(propName in config){
                            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                                if (config[propName] === void 0 && defaultProps !== void 0) {
                                    props[propName] = defaultProps[propName];
                                } else {
                                    props[propName] = config[propName];
                                }
                            }
                        }
                    }
                    var childrenLength = arguments.length - 2;
                    if (childrenLength === 1) {
                        props.children = children;
                    } else if (childrenLength > 1) {
                        var childArray = Array(childrenLength);
                        for(var i = 0; i < childrenLength; i++){
                            childArray[i] = arguments[i + 2];
                        }
                        props.children = childArray;
                    }
                    return ReactElement(element.type, key, ref, self, source, owner, props);
                }
                function isValidElement(object) {
                    return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
                }
                var SEPARATOR = ".";
                var SUBSEPARATOR = ":";
                function escape(key) {
                    var escapeRegex = /[=:]/g;
                    var escaperLookup = {
                        "=": "=0",
                        ":": "=2"
                    };
                    var escapedString = key.replace(escapeRegex, function(match) {
                        return escaperLookup[match];
                    });
                    return "$" + escapedString;
                }
                var didWarnAboutMaps = false;
                var userProvidedKeyEscapeRegex = /\/+/g;
                function escapeUserProvidedKey(text) {
                    return text.replace(userProvidedKeyEscapeRegex, "$&/");
                }
                function getElementKey(element, index) {
                    if (typeof element === "object" && element !== null && element.key != null) {
                        {
                            checkKeyStringCoercion(element.key);
                        }
                        return escape("" + element.key);
                    }
                    return index.toString(36);
                }
                function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
                    var type = typeof children === "undefined" ? "undefined" : _type_of(children);
                    if (type === "undefined" || type === "boolean") {
                        children = null;
                    }
                    var invokeCallback = false;
                    if (children === null) {
                        invokeCallback = true;
                    } else {
                        switch(type){
                            case "string":
                            case "number":
                                invokeCallback = true;
                                break;
                            case "object":
                                switch(children.$$typeof){
                                    case REACT_ELEMENT_TYPE:
                                    case REACT_PORTAL_TYPE:
                                        invokeCallback = true;
                                }
                        }
                    }
                    if (invokeCallback) {
                        var _child = children;
                        var mappedChild = callback(_child);
                        var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
                        if (isArray2(mappedChild)) {
                            var escapedChildKey = "";
                            if (childKey != null) {
                                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                            }
                            mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                                return c;
                            });
                        } else if (mappedChild != null) {
                            if (isValidElement(mappedChild)) {
                                {
                                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                                        checkKeyStringCoercion(mappedChild.key);
                                    }
                                }
                                mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
                                // traverseAllChildren used to do for objects as children
                                escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                                (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                                // eslint-disable-next-line react-internal/safe-string-coercion
                                escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                            }
                            array.push(mappedChild);
                        }
                        return 1;
                    }
                    var child;
                    var nextName;
                    var subtreeCount = 0;
                    var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
                    if (isArray2(children)) {
                        for(var i = 0; i < children.length; i++){
                            child = children[i];
                            nextName = nextNamePrefix + getElementKey(child, i);
                            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                        }
                    } else {
                        var iteratorFn = getIteratorFn(children);
                        if (typeof iteratorFn === "function") {
                            var iterableChildren = children;
                            {
                                if (iteratorFn === iterableChildren.entries) {
                                    if (!didWarnAboutMaps) {
                                        warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                                    }
                                    didWarnAboutMaps = true;
                                }
                            }
                            var iterator = iteratorFn.call(iterableChildren);
                            var step;
                            var ii = 0;
                            while(!(step = iterator.next()).done){
                                child = step.value;
                                nextName = nextNamePrefix + getElementKey(child, ii++);
                                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                            }
                        } else if (type === "object") {
                            var childrenString = String(children);
                            throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                        }
                    }
                    return subtreeCount;
                }
                function mapChildren(children, func, context) {
                    if (children == null) {
                        return children;
                    }
                    var result = [];
                    var count = 0;
                    mapIntoArray(children, result, "", "", function(child) {
                        return func.call(context, child, count++);
                    });
                    return result;
                }
                function countChildren(children) {
                    var n = 0;
                    mapChildren(children, function() {
                        n++;
                    });
                    return n;
                }
                function forEachChildren(children, forEachFunc, forEachContext) {
                    mapChildren(children, function() {
                        forEachFunc.apply(this, arguments);
                    }, forEachContext);
                }
                function toArray(children) {
                    return mapChildren(children, function(child) {
                        return child;
                    }) || [];
                }
                function onlyChild(children) {
                    if (!isValidElement(children)) {
                        throw new Error("React.Children.only expected to receive a single React element child.");
                    }
                    return children;
                }
                function createContext(defaultValue) {
                    var context = {
                        $$typeof: REACT_CONTEXT_TYPE,
                        // As a workaround to support multiple concurrent renderers, we categorize
                        // some renderers as primary and others as secondary. We only expect
                        // there to be two concurrent renderers at most: React Native (primary) and
                        // Fabric (secondary); React DOM (primary) and React ART (secondary).
                        // Secondary renderers store their context values on separate fields.
                        _currentValue: defaultValue,
                        _currentValue2: defaultValue,
                        // Used to track how many concurrent renderers this context currently
                        // supports within in a single renderer. Such as parallel server rendering.
                        _threadCount: 0,
                        // These are circular
                        Provider: null,
                        Consumer: null,
                        // Add these to use same hidden class in VM as ServerContext
                        _defaultValue: null,
                        _globalName: null
                    };
                    context.Provider = {
                        $$typeof: REACT_PROVIDER_TYPE,
                        _context: context
                    };
                    var hasWarnedAboutUsingNestedContextConsumers = false;
                    var hasWarnedAboutUsingConsumerProvider = false;
                    var hasWarnedAboutDisplayNameOnConsumer = false;
                    {
                        var Consumer = {
                            $$typeof: REACT_CONTEXT_TYPE,
                            _context: context
                        };
                        Object.defineProperties(Consumer, {
                            Provider: {
                                get: function get() {
                                    if (!hasWarnedAboutUsingConsumerProvider) {
                                        hasWarnedAboutUsingConsumerProvider = true;
                                        error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                                    }
                                    return context.Provider;
                                },
                                set: function set(_Provider) {
                                    context.Provider = _Provider;
                                }
                            },
                            _currentValue: {
                                get: function get() {
                                    return context._currentValue;
                                },
                                set: function set(_currentValue) {
                                    context._currentValue = _currentValue;
                                }
                            },
                            _currentValue2: {
                                get: function get() {
                                    return context._currentValue2;
                                },
                                set: function set(_currentValue2) {
                                    context._currentValue2 = _currentValue2;
                                }
                            },
                            _threadCount: {
                                get: function get() {
                                    return context._threadCount;
                                },
                                set: function set(_threadCount) {
                                    context._threadCount = _threadCount;
                                }
                            },
                            Consumer: {
                                get: function get() {
                                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                                        hasWarnedAboutUsingNestedContextConsumers = true;
                                        error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                                    }
                                    return context.Consumer;
                                }
                            },
                            displayName: {
                                get: function get() {
                                    return context.displayName;
                                },
                                set: function set(displayName) {
                                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                                        warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                                        hasWarnedAboutDisplayNameOnConsumer = true;
                                    }
                                }
                            }
                        });
                        context.Consumer = Consumer;
                    }
                    {
                        context._currentRenderer = null;
                        context._currentRenderer2 = null;
                    }
                    return context;
                }
                var Uninitialized = -1;
                var Pending = 0;
                var Resolved = 1;
                var Rejected = 2;
                function lazyInitializer(payload) {
                    if (payload._status === Uninitialized) {
                        var ctor = payload._result;
                        var thenable = ctor();
                        thenable.then(function(moduleObject2) {
                            if (payload._status === Pending || payload._status === Uninitialized) {
                                var resolved = payload;
                                resolved._status = Resolved;
                                resolved._result = moduleObject2;
                            }
                        }, function(error2) {
                            if (payload._status === Pending || payload._status === Uninitialized) {
                                var rejected = payload;
                                rejected._status = Rejected;
                                rejected._result = error2;
                            }
                        });
                        if (payload._status === Uninitialized) {
                            var pending = payload;
                            pending._status = Pending;
                            pending._result = thenable;
                        }
                    }
                    if (payload._status === Resolved) {
                        var moduleObject = payload._result;
                        {
                            if (moduleObject === void 0) {
                                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
                            }
                        }
                        {
                            if (!("default" in moduleObject)) {
                                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                            }
                        }
                        return moduleObject.default;
                    } else {
                        throw payload._result;
                    }
                }
                function lazy(ctor) {
                    var payload = {
                        // We use these fields to store the result.
                        _status: Uninitialized,
                        _result: ctor
                    };
                    var lazyType = {
                        $$typeof: REACT_LAZY_TYPE,
                        _payload: payload,
                        _init: lazyInitializer
                    };
                    {
                        var defaultProps;
                        var propTypes;
                        Object.defineProperties(lazyType, {
                            defaultProps: {
                                configurable: true,
                                get: function get() {
                                    return defaultProps;
                                },
                                set: function set(newDefaultProps) {
                                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                                    defaultProps = newDefaultProps;
                                    Object.defineProperty(lazyType, "defaultProps", {
                                        enumerable: true
                                    });
                                }
                            },
                            propTypes: {
                                configurable: true,
                                get: function get() {
                                    return propTypes;
                                },
                                set: function set(newPropTypes) {
                                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                                    propTypes = newPropTypes;
                                    Object.defineProperty(lazyType, "propTypes", {
                                        enumerable: true
                                    });
                                }
                            }
                        });
                    }
                    return lazyType;
                }
                function forwardRef(render) {
                    {
                        if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                            error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
                        } else if (typeof render !== "function") {
                            error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render === "undefined" ? "undefined" : _type_of(render));
                        } else {
                            if (render.length !== 0 && render.length !== 2) {
                                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
                            }
                        }
                        if (render != null) {
                            if (render.defaultProps != null || render.propTypes != null) {
                                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
                            }
                        }
                    }
                    var elementType = {
                        $$typeof: REACT_FORWARD_REF_TYPE,
                        render: render
                    };
                    {
                        var ownName;
                        Object.defineProperty(elementType, "displayName", {
                            enumerable: false,
                            configurable: true,
                            get: function get() {
                                return ownName;
                            },
                            set: function set(name) {
                                ownName = name;
                                if (!render.name && !render.displayName) {
                                    render.displayName = name;
                                }
                            }
                        });
                    }
                    return elementType;
                }
                var REACT_MODULE_REFERENCE;
                {
                    REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
                }
                function isValidElementType(type) {
                    if (typeof type === "string" || typeof type === "function") {
                        return true;
                    }
                    if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
                        return true;
                    }
                    if (typeof type === "object" && type !== null) {
                        if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                        // types supported by any Flight configuration anywhere since
                        // we don't know which Flight build this will end up being used
                        // with.
                        type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
                            return true;
                        }
                    }
                    return false;
                }
                function memo(type, compare) {
                    {
                        if (!isValidElementType(type)) {
                            error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type === "undefined" ? "undefined" : _type_of(type));
                        }
                    }
                    var elementType = {
                        $$typeof: REACT_MEMO_TYPE,
                        type: type,
                        compare: compare === void 0 ? null : compare
                    };
                    {
                        var ownName;
                        Object.defineProperty(elementType, "displayName", {
                            enumerable: false,
                            configurable: true,
                            get: function get() {
                                return ownName;
                            },
                            set: function set(name) {
                                ownName = name;
                                if (!type.name && !type.displayName) {
                                    type.displayName = name;
                                }
                            }
                        });
                    }
                    return elementType;
                }
                function resolveDispatcher() {
                    var dispatcher = ReactCurrentDispatcher.current;
                    {
                        if (dispatcher === null) {
                            error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
                        }
                    }
                    return dispatcher;
                }
                function useContext(Context) {
                    var dispatcher = resolveDispatcher();
                    {
                        if (Context._context !== void 0) {
                            var realContext = Context._context;
                            if (realContext.Consumer === Context) {
                                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
                            } else if (realContext.Provider === Context) {
                                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
                            }
                        }
                    }
                    return dispatcher.useContext(Context);
                }
                function useState(initialState) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useState(initialState);
                }
                function useReducer(reducer, initialArg, init) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useReducer(reducer, initialArg, init);
                }
                function useRef(initialValue) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useRef(initialValue);
                }
                function useEffect(create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useEffect(create, deps);
                }
                function useInsertionEffect(create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useInsertionEffect(create, deps);
                }
                function useLayoutEffect(create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useLayoutEffect(create, deps);
                }
                function useCallback(callback, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useCallback(callback, deps);
                }
                function useMemo(create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useMemo(create, deps);
                }
                function useImperativeHandle(ref, create, deps) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useImperativeHandle(ref, create, deps);
                }
                function useDebugValue(value, formatterFn) {
                    {
                        var dispatcher = resolveDispatcher();
                        return dispatcher.useDebugValue(value, formatterFn);
                    }
                }
                function useTransition() {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useTransition();
                }
                function useDeferredValue(value) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useDeferredValue(value);
                }
                function useId() {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useId();
                }
                function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
                    var dispatcher = resolveDispatcher();
                    return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
                }
                var disabledDepth = 0;
                var prevLog;
                var prevInfo;
                var prevWarn;
                var prevError;
                var prevGroup;
                var prevGroupCollapsed;
                var prevGroupEnd;
                function disabledLog() {}
                disabledLog.__reactDisabledLog = true;
                function disableLogs() {
                    {
                        if (disabledDepth === 0) {
                            prevLog = console.log;
                            prevInfo = console.info;
                            prevWarn = console.warn;
                            prevError = console.error;
                            prevGroup = console.group;
                            prevGroupCollapsed = console.groupCollapsed;
                            prevGroupEnd = console.groupEnd;
                            var props = {
                                configurable: true,
                                enumerable: true,
                                value: disabledLog,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                info: props,
                                log: props,
                                warn: props,
                                error: props,
                                group: props,
                                groupCollapsed: props,
                                groupEnd: props
                            });
                        }
                        disabledDepth++;
                    }
                }
                function reenableLogs() {
                    {
                        disabledDepth--;
                        if (disabledDepth === 0) {
                            var props = {
                                configurable: true,
                                enumerable: true,
                                writable: true
                            };
                            Object.defineProperties(console, {
                                log: assign({}, props, {
                                    value: prevLog
                                }),
                                info: assign({}, props, {
                                    value: prevInfo
                                }),
                                warn: assign({}, props, {
                                    value: prevWarn
                                }),
                                error: assign({}, props, {
                                    value: prevError
                                }),
                                group: assign({}, props, {
                                    value: prevGroup
                                }),
                                groupCollapsed: assign({}, props, {
                                    value: prevGroupCollapsed
                                }),
                                groupEnd: assign({}, props, {
                                    value: prevGroupEnd
                                })
                            });
                        }
                        if (disabledDepth < 0) {
                            error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
                        }
                    }
                }
                var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
                var prefix2;
                function describeBuiltInComponentFrame(name, source, ownerFn) {
                    {
                        if (prefix2 === void 0) {
                            try {
                                throw Error();
                            } catch (x) {
                                var match = x.stack.trim().match(/\n( *(at )?)/);
                                prefix2 = match && match[1] || "";
                            }
                        }
                        return "\n" + prefix2 + name;
                    }
                }
                var reentry = false;
                var componentFrameCache;
                {
                    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
                    componentFrameCache = new PossiblyWeakMap();
                }
                function describeNativeComponentFrame(fn, construct) {
                    if (!fn || reentry) {
                        return "";
                    }
                    {
                        var frame = componentFrameCache.get(fn);
                        if (frame !== void 0) {
                            return frame;
                        }
                    }
                    var control;
                    reentry = true;
                    var previousPrepareStackTrace = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    var previousDispatcher;
                    {
                        previousDispatcher = ReactCurrentDispatcher$1.current;
                        ReactCurrentDispatcher$1.current = null;
                        disableLogs();
                    }
                    try {
                        if (construct) {
                            var Fake = function Fake() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function set() {
                                    throw Error();
                                }
                            });
                            if (typeof Reflect === "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x) {
                                    control = x;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x) {
                                control = x;
                            }
                            fn();
                        }
                    } catch (sample) {
                        if (sample && control && typeof sample.stack === "string") {
                            var sampleLines = sample.stack.split("\n");
                            var controlLines = control.stack.split("\n");
                            var s = sampleLines.length - 1;
                            var c = controlLines.length - 1;
                            while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]){
                                c--;
                            }
                            for(; s >= 1 && c >= 0; s--, c--){
                                if (sampleLines[s] !== controlLines[c]) {
                                    if (s !== 1 || c !== 1) {
                                        do {
                                            s--;
                                            c--;
                                            if (c < 0 || sampleLines[s] !== controlLines[c]) {
                                                var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                                                if (fn.displayName && _frame.includes("<anonymous>")) {
                                                    _frame = _frame.replace("<anonymous>", fn.displayName);
                                                }
                                                {
                                                    if (typeof fn === "function") {
                                                        componentFrameCache.set(fn, _frame);
                                                    }
                                                }
                                                return _frame;
                                            }
                                        }while (s >= 1 && c >= 0);
                                    }
                                    break;
                                }
                            }
                        }
                    } finally{
                        reentry = false;
                        {
                            ReactCurrentDispatcher$1.current = previousDispatcher;
                            reenableLogs();
                        }
                        Error.prepareStackTrace = previousPrepareStackTrace;
                    }
                    var name = fn ? fn.displayName || fn.name : "";
                    var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
                    {
                        if (typeof fn === "function") {
                            componentFrameCache.set(fn, syntheticFrame);
                        }
                    }
                    return syntheticFrame;
                }
                function describeFunctionComponentFrame(fn, source, ownerFn) {
                    {
                        return describeNativeComponentFrame(fn, false);
                    }
                }
                function shouldConstruct(Component3) {
                    var prototype = Component3.prototype;
                    return !!(prototype && prototype.isReactComponent);
                }
                function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
                    if (type == null) {
                        return "";
                    }
                    if (typeof type === "function") {
                        {
                            return describeNativeComponentFrame(type, shouldConstruct(type));
                        }
                    }
                    if (typeof type === "string") {
                        return describeBuiltInComponentFrame(type);
                    }
                    switch(type){
                        case REACT_SUSPENSE_TYPE:
                            return describeBuiltInComponentFrame("Suspense");
                        case REACT_SUSPENSE_LIST_TYPE:
                            return describeBuiltInComponentFrame("SuspenseList");
                    }
                    if (typeof type === "object") {
                        switch(type.$$typeof){
                            case REACT_FORWARD_REF_TYPE:
                                return describeFunctionComponentFrame(type.render);
                            case REACT_MEMO_TYPE:
                                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
                            case REACT_LAZY_TYPE:
                                {
                                    var lazyComponent = type;
                                    var payload = lazyComponent._payload;
                                    var init = lazyComponent._init;
                                    try {
                                        return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                                    } catch (x) {}
                                }
                        }
                    }
                    return "";
                }
                var loggedTypeFailures = {};
                var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
                function setCurrentlyValidatingElement(element) {
                    {
                        if (element) {
                            var owner = element._owner;
                            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
                        } else {
                            ReactDebugCurrentFrame$1.setExtraStackFrame(null);
                        }
                    }
                }
                function checkPropTypes(typeSpecs, values, location, componentName, element) {
                    {
                        var has = Function.call.bind(hasOwnProperty);
                        for(var typeSpecName in typeSpecs){
                            if (has(typeSpecs, typeSpecName)) {
                                var error$1 = void 0;
                                try {
                                    if (typeof typeSpecs[typeSpecName] !== "function") {
                                        var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + _type_of(typeSpecs[typeSpecName]) + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                                        err.name = "Invariant Violation";
                                        throw err;
                                    }
                                    error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                                } catch (ex) {
                                    error$1 = ex;
                                }
                                if (error$1 && !_instanceof(error$1, Error)) {
                                    setCurrentlyValidatingElement(element);
                                    error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1 === "undefined" ? "undefined" : _type_of(error$1));
                                    setCurrentlyValidatingElement(null);
                                }
                                if (_instanceof(error$1, Error) && !(error$1.message in loggedTypeFailures)) {
                                    loggedTypeFailures[error$1.message] = true;
                                    setCurrentlyValidatingElement(element);
                                    error("Failed %s type: %s", location, error$1.message);
                                    setCurrentlyValidatingElement(null);
                                }
                            }
                        }
                    }
                }
                function setCurrentlyValidatingElement$1(element) {
                    {
                        if (element) {
                            var owner = element._owner;
                            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
                            setExtraStackFrame(stack);
                        } else {
                            setExtraStackFrame(null);
                        }
                    }
                }
                var propTypesMisspellWarningShown;
                {
                    propTypesMisspellWarningShown = false;
                }
                function getDeclarationErrorAddendum() {
                    if (ReactCurrentOwner.current) {
                        var name = getComponentNameFromType(ReactCurrentOwner.current.type);
                        if (name) {
                            return "\n\nCheck the render method of `" + name + "`.";
                        }
                    }
                    return "";
                }
                function getSourceInfoErrorAddendum(source) {
                    if (source !== void 0) {
                        var fileName = source.fileName.replace(/^.*[\\\/]/, "");
                        var lineNumber = source.lineNumber;
                        return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
                    }
                    return "";
                }
                function getSourceInfoErrorAddendumForProps(elementProps) {
                    if (elementProps !== null && elementProps !== void 0) {
                        return getSourceInfoErrorAddendum(elementProps.__source);
                    }
                    return "";
                }
                var ownerHasKeyUseWarning = {};
                function getCurrentComponentErrorInfo(parentType) {
                    var info = getDeclarationErrorAddendum();
                    if (!info) {
                        var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
                        if (parentName) {
                            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
                        }
                    }
                    return info;
                }
                function validateExplicitKey(element, parentType) {
                    if (!element._store || element._store.validated || element.key != null) {
                        return;
                    }
                    element._store.validated = true;
                    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
                    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
                        return;
                    }
                    ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
                    var childOwner = "";
                    if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
                        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
                    }
                    {
                        setCurrentlyValidatingElement$1(element);
                        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
                        setCurrentlyValidatingElement$1(null);
                    }
                }
                function validateChildKeys(node, parentType) {
                    if (typeof node !== "object") {
                        return;
                    }
                    if (isArray2(node)) {
                        for(var i = 0; i < node.length; i++){
                            var child = node[i];
                            if (isValidElement(child)) {
                                validateExplicitKey(child, parentType);
                            }
                        }
                    } else if (isValidElement(node)) {
                        if (node._store) {
                            node._store.validated = true;
                        }
                    } else if (node) {
                        var iteratorFn = getIteratorFn(node);
                        if (typeof iteratorFn === "function") {
                            if (iteratorFn !== node.entries) {
                                var iterator = iteratorFn.call(node);
                                var step;
                                while(!(step = iterator.next()).done){
                                    if (isValidElement(step.value)) {
                                        validateExplicitKey(step.value, parentType);
                                    }
                                }
                            }
                        }
                    }
                }
                function validatePropTypes(element) {
                    {
                        var type = element.type;
                        if (type === null || type === void 0 || typeof type === "string") {
                            return;
                        }
                        var propTypes;
                        if (typeof type === "function") {
                            propTypes = type.propTypes;
                        } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                        // Inner props are checked in the reconciler.
                        type.$$typeof === REACT_MEMO_TYPE)) {
                            propTypes = type.propTypes;
                        } else {
                            return;
                        }
                        if (propTypes) {
                            var name = getComponentNameFromType(type);
                            checkPropTypes(propTypes, element.props, "prop", name, element);
                        } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
                            propTypesMisspellWarningShown = true;
                            var _name = getComponentNameFromType(type);
                            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
                        }
                        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
                            error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
                        }
                    }
                }
                function validateFragmentProps(fragment) {
                    {
                        var keys = Object.keys(fragment.props);
                        for(var i = 0; i < keys.length; i++){
                            var key = keys[i];
                            if (key !== "children" && key !== "key") {
                                setCurrentlyValidatingElement$1(fragment);
                                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                                setCurrentlyValidatingElement$1(null);
                                break;
                            }
                        }
                        if (fragment.ref !== null) {
                            setCurrentlyValidatingElement$1(fragment);
                            error("Invalid attribute `ref` supplied to `React.Fragment`.");
                            setCurrentlyValidatingElement$1(null);
                        }
                    }
                }
                function createElementWithValidation(type, props, children) {
                    var validType = isValidElementType(type);
                    if (!validType) {
                        var info = "";
                        if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                            info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
                        }
                        var sourceInfo = getSourceInfoErrorAddendumForProps(props);
                        if (sourceInfo) {
                            info += sourceInfo;
                        } else {
                            info += getDeclarationErrorAddendum();
                        }
                        var typeString;
                        if (type === null) {
                            typeString = "null";
                        } else if (isArray2(type)) {
                            typeString = "array";
                        } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                            typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                            info = " Did you accidentally export a JSX literal instead of a component?";
                        } else {
                            typeString = typeof type === "undefined" ? "undefined" : _type_of(type);
                        }
                        {
                            error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
                        }
                    }
                    var element = createElement36.apply(this, arguments);
                    if (element == null) {
                        return element;
                    }
                    if (validType) {
                        for(var i = 2; i < arguments.length; i++){
                            validateChildKeys(arguments[i], type);
                        }
                    }
                    if (type === REACT_FRAGMENT_TYPE) {
                        validateFragmentProps(element);
                    } else {
                        validatePropTypes(element);
                    }
                    return element;
                }
                var didWarnAboutDeprecatedCreateFactory = false;
                function createFactoryWithValidation(type) {
                    var validatedFactory = createElementWithValidation.bind(null, type);
                    validatedFactory.type = type;
                    {
                        if (!didWarnAboutDeprecatedCreateFactory) {
                            didWarnAboutDeprecatedCreateFactory = true;
                            warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
                        }
                        Object.defineProperty(validatedFactory, "type", {
                            enumerable: false,
                            get: function get() {
                                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                                Object.defineProperty(this, "type", {
                                    value: type
                                });
                                return type;
                            }
                        });
                    }
                    return validatedFactory;
                }
                function cloneElementWithValidation(element, props, children) {
                    var newElement = cloneElement2.apply(this, arguments);
                    for(var i = 2; i < arguments.length; i++){
                        validateChildKeys(arguments[i], newElement.type);
                    }
                    validatePropTypes(newElement);
                    return newElement;
                }
                function startTransition(scope, options) {
                    var prevTransition = ReactCurrentBatchConfig.transition;
                    ReactCurrentBatchConfig.transition = {};
                    var currentTransition = ReactCurrentBatchConfig.transition;
                    {
                        ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
                    }
                    try {
                        scope();
                    } finally{
                        ReactCurrentBatchConfig.transition = prevTransition;
                        {
                            if (prevTransition === null && currentTransition._updatedFibers) {
                                var updatedFibersCount = currentTransition._updatedFibers.size;
                                if (updatedFibersCount > 10) {
                                    warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                                }
                                currentTransition._updatedFibers.clear();
                            }
                        }
                    }
                }
                var didWarnAboutMessageChannel = false;
                var enqueueTaskImpl = null;
                function enqueueTask(task) {
                    if (enqueueTaskImpl === null) {
                        try {
                            var requireString = ("require" + Math.random()).slice(0, 7);
                            var nodeRequire = module2 && module2[requireString];
                            enqueueTaskImpl = nodeRequire.call(module2, "timers").setImmediate;
                        } catch (_err) {
                            enqueueTaskImpl = function enqueueTaskImpl(callback) {
                                {
                                    if (didWarnAboutMessageChannel === false) {
                                        didWarnAboutMessageChannel = true;
                                        if (typeof MessageChannel === "undefined") {
                                            error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                                        }
                                    }
                                }
                                var channel = new MessageChannel();
                                channel.port1.onmessage = callback;
                                channel.port2.postMessage(void 0);
                            };
                        }
                    }
                    return enqueueTaskImpl(task);
                }
                var actScopeDepth = 0;
                var didWarnNoAwaitAct = false;
                function act(callback) {
                    {
                        var prevActScopeDepth = actScopeDepth;
                        actScopeDepth++;
                        if (ReactCurrentActQueue.current === null) {
                            ReactCurrentActQueue.current = [];
                        }
                        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
                        var result;
                        try {
                            ReactCurrentActQueue.isBatchingLegacy = true;
                            result = callback();
                            if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                                var queue = ReactCurrentActQueue.current;
                                if (queue !== null) {
                                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                                    flushActQueue(queue);
                                }
                            }
                        } catch (error2) {
                            popActScope(prevActScopeDepth);
                            throw error2;
                        } finally{
                            ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
                        }
                        if (result !== null && typeof result === "object" && typeof result.then === "function") {
                            var thenableResult = result;
                            var wasAwaited = false;
                            var thenable = {
                                then: function then(resolve, reject) {
                                    wasAwaited = true;
                                    thenableResult.then(function(returnValue2) {
                                        popActScope(prevActScopeDepth);
                                        if (actScopeDepth === 0) {
                                            recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                                        } else {
                                            resolve(returnValue2);
                                        }
                                    }, function(error2) {
                                        popActScope(prevActScopeDepth);
                                        reject(error2);
                                    });
                                }
                            };
                            {
                                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                                    Promise.resolve().then(function() {}).then(function() {
                                        if (!wasAwaited) {
                                            didWarnNoAwaitAct = true;
                                            error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                                        }
                                    });
                                }
                            }
                            return thenable;
                        } else {
                            var returnValue = result;
                            popActScope(prevActScopeDepth);
                            if (actScopeDepth === 0) {
                                var _queue = ReactCurrentActQueue.current;
                                if (_queue !== null) {
                                    flushActQueue(_queue);
                                    ReactCurrentActQueue.current = null;
                                }
                                var _thenable = {
                                    then: function then(resolve, reject) {
                                        if (ReactCurrentActQueue.current === null) {
                                            ReactCurrentActQueue.current = [];
                                            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                        } else {
                                            resolve(returnValue);
                                        }
                                    }
                                };
                                return _thenable;
                            } else {
                                var _thenable2 = {
                                    then: function then(resolve, reject) {
                                        resolve(returnValue);
                                    }
                                };
                                return _thenable2;
                            }
                        }
                    }
                }
                function popActScope(prevActScopeDepth) {
                    {
                        if (prevActScopeDepth !== actScopeDepth - 1) {
                            error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
                        }
                        actScopeDepth = prevActScopeDepth;
                    }
                }
                function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
                    {
                        var queue = ReactCurrentActQueue.current;
                        if (queue !== null) {
                            try {
                                flushActQueue(queue);
                                enqueueTask(function() {
                                    if (queue.length === 0) {
                                        ReactCurrentActQueue.current = null;
                                        resolve(returnValue);
                                    } else {
                                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                    }
                                });
                            } catch (error2) {
                                reject(error2);
                            }
                        } else {
                            resolve(returnValue);
                        }
                    }
                }
                var isFlushing = false;
                function flushActQueue(queue) {
                    {
                        if (!isFlushing) {
                            isFlushing = true;
                            var i = 0;
                            try {
                                for(; i < queue.length; i++){
                                    var callback = queue[i];
                                    do {
                                        callback = callback(true);
                                    }while (callback !== null);
                                }
                                queue.length = 0;
                            } catch (error2) {
                                queue = queue.slice(i + 1);
                                throw error2;
                            } finally{
                                isFlushing = false;
                            }
                        }
                    }
                }
                var createElement$1 = createElementWithValidation;
                var cloneElement$1 = cloneElementWithValidation;
                var createFactory = createFactoryWithValidation;
                var Children = {
                    map: mapChildren,
                    forEach: forEachChildren,
                    count: countChildren,
                    toArray: toArray,
                    only: onlyChild
                };
                exports.Children = Children;
                exports.Component = Component2;
                exports.Fragment = REACT_FRAGMENT_TYPE;
                exports.Profiler = REACT_PROFILER_TYPE;
                exports.PureComponent = PureComponent7;
                exports.StrictMode = REACT_STRICT_MODE_TYPE;
                exports.Suspense = REACT_SUSPENSE_TYPE;
                exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
                exports.cloneElement = cloneElement$1;
                exports.createContext = createContext;
                exports.createElement = createElement$1;
                exports.createFactory = createFactory;
                exports.createRef = createRef11;
                exports.forwardRef = forwardRef;
                exports.isValidElement = isValidElement;
                exports.lazy = lazy;
                exports.memo = memo;
                exports.startTransition = startTransition;
                exports.unstable_act = act;
                exports.useCallback = useCallback;
                exports.useContext = useContext;
                exports.useDebugValue = useDebugValue;
                exports.useDeferredValue = useDeferredValue;
                exports.useEffect = useEffect;
                exports.useId = useId;
                exports.useImperativeHandle = useImperativeHandle;
                exports.useInsertionEffect = useInsertionEffect;
                exports.useLayoutEffect = useLayoutEffect;
                exports.useMemo = useMemo;
                exports.useReducer = useReducer;
                exports.useRef = useRef;
                exports.useState = useState;
                exports.useSyncExternalStore = useSyncExternalStore;
                exports.useTransition = useTransition;
                exports.version = ReactVersion;
                if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
                }
            })();
        }
    }
});
// node_modules/react/index.js
var require_react = __commonJS({
    "node_modules/react/index.js": function(exports, module2) {
        "use strict";
        if (process.env.NODE_ENV === "production") {
            module2.exports = require_react_production_min();
        } else {
            module2.exports = require_react_development();
        }
    }
});
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
var React36 = __toESM(require_react());
var import_react_infinite_viewer = __toESM(require("react-infinite-viewer"));
var import_react_guides = __toESM(require("@scena/react-guides"));
var import_react_selecto = __toESM(require("react-selecto"));
// src/Editor/Menu/Menu.tsx
var React32 = __toESM(require_react());
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
function getContentElement(el) {
    if (el.contentEditable === "inherit") {
        return getContentElement(el.parentElement);
    }
    if (el.contentEditable === "true") {
        return el;
    }
    return null;
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
    return target.isContentEditable || tagName === "input" || tagName === "textarea";
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
function isDivInsideAnother(div1, div2) {
    var rect1 = div1.getBoundingClientRect();
    var rect2 = div2.getBoundingClientRect();
    return rect1.left >= rect2.left && rect1.right <= rect2.right && rect1.top >= rect2.top && rect1.bottom <= rect2.bottom;
}
// src/Editor/Menu/Divider.tsx
var React2 = __toESM(require_react());
// src/Editor/Menu/Icon.tsx
var React = __toESM(require_react());
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
                    this.keyManager.keydown(keys, function(e) {
                        if (e.ctrlKey || e.metaKey) {
                            return false;
                        }
                        _this.onClick();
                    }, this.constructor.id);
                }
            }
        }
    ]);
    return Icon;
}(React.PureComponent);
Icon.makeThen = function() {};
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
// src/Editor/Menu/ImageIcon.tsx
var React3 = __toESM(require_react());
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
var React4 = __toESM(require_react());
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
var React5 = __toESM(require_react());
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
            "border-width": "2px",
            "border-style": "dashed",
            "border-color": memory.get("border-color") || "#000"
        }
    };
};
// src/Editor/Menu/ShapeIcons/ShapesIcon.tsx
var React9 = __toESM(require_react());
// src/Editor/Menu/ShapeIcons/RectIcon.tsx
var React6 = __toESM(require_react());
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
var React7 = __toESM(require_react());
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
var React8 = __toESM(require_react());
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
var React10 = __toESM(require_react());
var TextIcon = /*#__PURE__*/ function(Icon) {
    _inherits(TextIcon, Icon);
    var _super = _create_super(TextIcon);
    function TextIcon() {
        _class_call_check(this, TextIcon);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.keys = [
            "t"
        ];
        return _this;
    }
    _create_class(TextIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                return /* @__PURE__ */ React10.createElement("i", {
                    className: "fa-solid fa-text"
                });
            }
        }
    ]);
    return TextIcon;
}(Icon);
TextIcon.id = "Text";
TextIcon.maker = function(memory) {
    return {
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
    };
};
TextIcon.makeThen = function(target, id, menu) {
    target.focus();
    menu.select(id);
};
// src/Editor/Menu/CropIcon.tsx
var React13 = __toESM(require_react());
var import_utils4 = require("@daybrush/utils");
// src/Editor/Menu/ShapeIcons/OvalIcon.tsx
var React11 = __toESM(require_react());
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
var React12 = __toESM(require_react());
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
var React14 = __toESM(require_react());
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
var React15 = __toESM(require_react());
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
var React19 = __toESM(require_react());
// src/Editor/Inputs/ColorIconPicker.tsx
var React18 = __toESM(require_react());
// src/Editor/Inputs/Input.tsx
var React16 = __toESM(require_react());
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
var React17 = __toESM(require_react());
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
                }), this.props.icon, /* @__PURE__ */ React18.createElement("div", {
                    className: "color-preview",
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
        _this.propertyValue = "#000";
        _this.onChangeTextColor = function(v) {
            _this.memory.set("color", v);
            _this.editor.setProperty([
                "color"
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
    _create_class(TextColorIcon, [
        {
            key: "renderIcon",
            value: function renderIcon() {
                var color = this.getOldValue() || "#000";
                return /* @__PURE__ */ React19.createElement(ColorIconPicker, {
                    icon: /* @__PURE__ */ React19.createElement("i", {
                        className: "fa-solid fa-a"
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
var React20 = __toESM(require_react());
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
            _this.forceUpdate();
        };
        _this.setTargets = function() {
            _this.forceUpdate();
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
var React21 = __toESM(require_react());
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
            _this.forceUpdate();
        };
        _this.setTargets = function() {
            _this.forceUpdate();
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
var React22 = __toESM(require_react());
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
            _this.forceUpdate();
        };
        _this.setTargets = function() {
            _this.forceUpdate();
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
var React24 = __toESM(require_react());
// src/Editor/Inputs/SelectBox.tsx
var React23 = __toESM(require_react());
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
        };
        _this.setTargets = function() {
            _this.forceUpdate();
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
        };
        _this.setTargets = function() {
            _this.forceUpdate();
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
// src/Editor/Menu/TextIcons/Aligns/AlignLeftIcon.tsx
var React26 = __toESM(require_react());
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
var React27 = __toESM(require_react());
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
var React28 = __toESM(require_react());
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
var React29 = __toESM(require_react());
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
var React30 = __toESM(require_react());
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
var React31 = __toESM(require_react());
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
        _this.propertyName = "border-color";
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
var Menu = /*#__PURE__*/ function(_React32_PureComponent) {
    _inherits(Menu, _React32_PureComponent);
    var _super = _create_super(Menu);
    function Menu() {
        _class_call_check(this, Menu);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.state = {
            selected: "MoveTool"
        };
        _this.menuRefs = [];
        _this.select = function(id) {
            _this.setState({
                selected: id
            });
            _this.props.onSelect(id);
        };
        return _this;
    }
    _create_class(Menu, [
        {
            key: "render",
            value: function render() {
                return /* @__PURE__ */ React32.createElement("div", {
                    className: prefix("menu")
                }, this.renderMenus());
            }
        },
        {
            key: "renderMenus",
            value: function renderMenus() {
                var _this = this;
                var selected = this.state.selected;
                var menuRefs = this.menuRefs;
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
                return menu.filter(function(m) {
                    return !editor.props.isAdmin ? m.id !== "PrintArea" : true;
                }).map(function(MenuClass, i) {
                    var id = MenuClass.id;
                    if (!menuRefs[i]) {
                        menuRefs[i] = React32.createRef();
                    }
                    if (id === "Divider") {
                        return /* @__PURE__ */ React32.createElement(MenuClass, {
                            key: i,
                            editor: editor
                        });
                    }
                    return /* @__PURE__ */ React32.createElement(MenuClass, {
                        ref: menuRefs[i],
                        key: i,
                        editor: editor,
                        selected: Array.isArray(id) ? id.includes(selected) : selected === id,
                        selectedId: selected,
                        onSelect: _this.select
                    });
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
        }
    ]);
    return Menu;
}(React32.PureComponent);
// src/Editor/Viewport/Viewport.tsx
var React33 = __toESM(require_react());
var import_utils9 = require("@daybrush/utils");
var Viewport = /*#__PURE__*/ function(_React33_PureComponent) {
    _inherits(Viewport, _React33_PureComponent);
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
            jsx: /* @__PURE__ */ React33.createElement("div", null),
            name: "Viewport",
            id: "viewport",
            children: []
        };
        _this.ids = {
            viewport: _this.viewport
        };
        _this.state = {};
        _this.viewportRef = React33.createRef();
        return _this;
    }
    _create_class(Viewport, [
        {
            key: "render",
            value: function render() {
                var style = this.props.style;
                return /* @__PURE__ */ React33.createElement("div", {
                    className: prefix("viewport-container"),
                    onBlur: this.props.onBlur,
                    style: style
                }, this.props.children, /* @__PURE__ */ React33.createElement("div", _object_spread_props(_object_spread({
                    className: prefix("viewport")
                }, _define_property({}, DATA_SCENA_ELEMENT_ID, "viewport")), {
                    ref: this.viewportRef
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
                    var _React33;
                    var editor = _this.props.editor;
                    var jsx = info.jsx;
                    var nextChildren = info.children;
                    var renderedChildren = _this.renderChildren(nextChildren);
                    var id = info.id;
                    var props = {
                        key: id
                    };
                    if (editor.props.isAdmin || !editor.props.isAdmin && info.name !== "(PrintArea)") {
                        props.className = "selectable";
                    }
                    if (info.name !== "(PrintArea)" && info.el) {
                        var printAreas = allInfos.filter(function(e) {
                            return e.name === "(PrintArea)";
                        });
                        var isOnArea = printAreas.some(function(p) {
                            return p.el && isDivInsideAnother(info.el, p.el);
                        });
                        if (!props.style) {
                            props.style = {};
                        }
                        if (!isOnArea) {
                            props.style.border = "1px dashed #f00";
                            areErrors = true;
                        } else {
                            props.style.border = void 0;
                        }
                    }
                    if ((0, import_utils9.isString)(jsx)) {
                        var _React331;
                        props[DATA_SCENA_ELEMENT_ID] = id;
                        return (_React331 = React33).createElement.apply(_React331, [
                            jsx,
                            props
                        ].concat(_to_consumable_array(renderedChildren)));
                    } else if (isScenaFunction(jsx)) {
                        props.scenaElementId = id;
                        props.scenaAttrs = info.attrs || {};
                        props.scenaText = info.innerText;
                        props.scenaHTML = info.innerHTML;
                        return React33.createElement(jsx, props);
                    } else if ((0, import_utils9.isString)(jsx.type)) {
                        props[DATA_SCENA_ELEMENT_ID] = id;
                    } else {
                        props.scenaElementId = id;
                        props.scenaAttrs = info.attrs || {};
                        props.scenaText = info.innerText;
                        props.scenaHTML = info.innerHTML;
                    }
                    var jsxChildren = jsx.props.children;
                    return (_React33 = React33).cloneElement.apply(_React33, [
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
                            } else if (info.attrs.contenteditable) {
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
                    if (info.attrs.contenteditable) {
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
}(React33.PureComponent);
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
var React34 = __toESM(require_react());
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
        return /* @__PURE__ */ React34.createElement("div", {
            key: "dimension-viewer",
            className: "moveable-dimension",
            style: {
                left: "".concat(rect.left + rect.width / 2 - left, "px"),
                top: "".concat(rect.top + rect.height + 20 - top, "px")
            }
        }, Math.round(rect.offsetWidth), " x ", Math.round(rect.offsetHeight));
    }
};
var MoveableManager = /*#__PURE__*/ function(_React34_PureComponent) {
    _inherits(MoveableManager, _React34_PureComponent);
    var _super = _create_super(MoveableManager);
    function MoveableManager() {
        _class_call_check(this, MoveableManager);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.moveable = React34.createRef();
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
                var moveableData = editor.moveableData, keyManager = editor.keyManager, eventBus = editor.eventBus, selecto = editor.selecto, memory = editor.memory;
                var elementGuidelines = _to_consumable_array(moveableData.getTargets()).filter(function(el) {
                    return selectedTargets.indexOf(el) === -1;
                });
                var isShift = keyManager.shiftKey;
                var targetIsImage = selectedTargets.every(function(el) {
                    return el.tagName === "IMG";
                });
                var _this1 = this;
                var _this2 = this;
                return /* @__PURE__ */ React34.createElement(import_react_moveable.default, {
                    ables: [
                        DimensionViewable
                    ],
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
                    verticalGuidelines: verticalGuidelines,
                    horizontalGuidelines: horizontalGuidelines,
                    elementGuidelines: elementGuidelines,
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
                    onDragOrigin: function(e) {
                        moveableData.onDragOrigin(e);
                    },
                    onRound: moveableData.onRound,
                    onClick: function(e) {
                        var target = e.inputTarget;
                        if (e.isDouble && target.isContentEditable) {
                            editor.selectMenu("Text");
                            var el = getContentElement(target);
                            if (el) {
                                el.focus();
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
                return /* @__PURE__ */ React34.createElement(import_react_moveable.default, {
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
                var _this = this;
                this.historyManager.registerType("render", undoRender, redoRender);
                this.historyManager.registerType("renders", undoRenders, redoRenders);
                this.keyManager.keydown([
                    "shift"
                ], function() {
                    _this.forceUpdate();
                });
                this.keyManager.keyup([
                    "shift"
                ], function() {
                    _this.forceUpdate();
                });
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
        }
    ]);
    return MoveableManager;
}(React34.PureComponent);
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
// src/Editor/KeyManager/KeyManager.ts
var import_keycon = __toESM(require("keycon"));
function check(e) {
    var inputEvent = e.inputEvent;
    var target = inputEvent.target;
    if (checkInput(target)) {
        return false;
    }
    return true;
}
var KeyManager = /*#__PURE__*/ function() {
    function KeyManager(console2) {
        _class_call_check(this, KeyManager);
        this.console = console2;
        this.keycon = new import_keycon.default();
        this.keylist = [];
        this.isEnable = true;
    }
    _create_class(KeyManager, [
        {
            key: "enable",
            value: function enable() {
                this.isEnable = true;
            }
        },
        {
            key: "disable",
            value: function disable() {
                this.isEnable = false;
            }
        },
        {
            key: "keydown",
            value: function keydown(keys, callback, description) {
                this.keycon.keydown(keys, this.addCallback("keydown", keys, callback, description));
            }
        },
        {
            key: "keyup",
            value: function keyup(keys, callback, description) {
                this.keycon.keyup(keys, this.addCallback("keyup", keys, callback, description));
            }
        },
        {
            key: "altKey",
            get: function get() {
                return this.keycon.altKey;
            }
        },
        {
            key: "shiftKey",
            get: function get() {
                return this.keycon.shiftKey;
            }
        },
        {
            key: "metaKey",
            get: function get() {
                return this.keycon.metaKey;
            }
        },
        {
            key: "ctrlKey",
            get: function get() {
                return this.keycon.ctrlKey;
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.keycon.destroy();
            }
        },
        {
            key: "addCallback",
            value: function addCallback(type, keys, callback, description) {
                var _this = this;
                if (description) {
                    this.keylist.push([
                        keys,
                        description
                    ]);
                }
                return function(e) {
                    if (!_this.isEnable || !check(e)) {
                        return false;
                    }
                    var result = callback(e);
                    if (result !== false && description) {
                        _this.console.log("".concat(type, ": ").concat(keys.join(" + ")), description);
                    }
                };
            }
        }
    ]);
    return KeyManager;
}();
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
                if (this.editor.props.onChange && this.editor.viewport.current) {
                    this.editor.props.onChange(this.editor.saveEditor());
                }
            }
        },
        {
            key: "undo",
            value: function undo() {
                var undoAction = this.undoStack.pop();
                if (!undoAction) {
                    return;
                }
                this.editor.console.log("Undo History: ".concat(undoAction.type), undoAction.props);
                this.types[undoAction.type].undo(undoAction.props, this.editor);
                this.redoStack.push(undoAction);
            }
        },
        {
            key: "redo",
            value: function redo() {
                var redoAction = this.redoStack.pop();
                if (!redoAction) {
                    return;
                }
                this.editor.console.log("Redo History: ".concat(redoAction.type), redoAction.props);
                this.types[redoAction.type].redo(redoAction.props, this.editor);
                this.undoStack.push(redoAction);
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
var React35 = __toESM(require_react());
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
                                        jsx: /* @__PURE__ */ React35.createElement("div", {
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
function undoSelectTargets(param, editor) {
    var prevs = param.prevs, nexts = param.nexts;
    editor.setSelectedTargets(editor.viewport.current.getElements(prevs), true);
}
function redoSelectTargets(param, editor) {
    var prevs = param.prevs, nexts = param.nexts;
    editor.setSelectedTargets(editor.viewport.current.getElements(nexts), true);
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
var Editor = /*#__PURE__*/ function(_React36_PureComponent) {
    _inherits(Editor, _React36_PureComponent);
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
            height: 500
        };
        _this.historyManager = new HistoryManager(_assert_this_initialized(_this));
        _this.console = new Debugger(_this.props.debug);
        _this.eventBus = new EventBus_default();
        _this.memory = new Memory();
        _this.moveableData = new MoveableData(_this.memory);
        _this.keyManager = new KeyManager(_this.console);
        _this.clipboardManager = new ClipboardManager(_assert_this_initialized(_this));
        _this.horizontalGuides = React36.createRef();
        _this.verticalGuides = React36.createRef();
        _this.infiniteViewer = React36.createRef();
        _this.selecto = React36.createRef();
        _this.menu = React36.createRef();
        _this.moveableManager = React36.createRef();
        _this.viewport = React36.createRef();
        _this.tabs = React36.createRef();
        _this.editorElement = React36.createRef();
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
            _this.resetToolbar();
            if (!checkInput(target)) {
                return;
            }
            var parentTarget = getParnetScenaElement(target);
            if (!parentTarget) {
                return;
            }
            var info = _this.getViewport().getInfoByElement(parentTarget);
            if (!info.attrs.contenteditable) {
                return;
            }
            var nextText = parentTarget.innerText;
            if (info.innerText === nextText) {
                return;
            }
            _this.historyManager.addAction("changeText", {
                id: info.id,
                prev: info.innerText,
                next: nextText
            });
            info.innerText = nextText;
        };
        return _this;
    }
    _create_class(Editor, [
        {
            key: "render",
            value: function render() {
                var _this = this;
                var _this1 = this, horizontalGuides = _this1.horizontalGuides, verticalGuides = _this1.verticalGuides, infiniteViewer = _this1.infiniteViewer, moveableManager = _this1.moveableManager, viewport = _this1.viewport, menu = _this1.menu, tabs = _this1.tabs, selecto = _this1.selecto, state = _this1.state;
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
                return /* @__PURE__ */ React36.createElement("div", {
                    className: prefix("editor"),
                    ref: this.editorElement
                }, /* @__PURE__ */ React36.createElement(Menu, {
                    ref: menu,
                    editor: this,
                    onSelect: this.onMenuChange
                }), showGuides && /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement("div", {
                    className: prefix("reset"),
                    onClick: function(e) {
                        infiniteViewer.current.scrollCenter();
                    }
                }), /* @__PURE__ */ React36.createElement(import_react_guides.default, {
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
                }), /* @__PURE__ */ React36.createElement(import_react_guides.default, {
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
                })), /* @__PURE__ */ React36.createElement(import_react_infinite_viewer.default, {
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
                }, /* @__PURE__ */ React36.createElement(Viewport, {
                    ref: viewport,
                    onBlur: this.onBlur,
                    style: {
                        width: "".concat(width, "px"),
                        height: "".concat(height, "px")
                    },
                    editor: this
                }, this.props.backgroundImg && /* @__PURE__ */ React36.createElement("img", {
                    src: this.props.backgroundImg,
                    alt: "",
                    className: "backgroundImage"
                }), /* @__PURE__ */ React36.createElement(MoveableManager, {
                    ref: moveableManager,
                    selectedTargets: selectedTargets,
                    selectedMenu: selectedMenu,
                    verticalGuidelines: verticalSnapGuides,
                    horizontalGuidelines: horizontalSnapGuides,
                    editor: this
                }))), /* @__PURE__ */ React36.createElement(import_react_selecto.default, {
                    ref: selecto,
                    dragContainer: ".scena-viewer",
                    hitRate: 0,
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
                        if (selectedMenu === "Text" && target.isContentEditable) {
                            var contentElement = getContentElement(target);
                            if (contentElement && contentElement.hasAttribute(DATA_SCENA_ELEMENT_ID)) {
                                e.stop();
                                _this.setSelectedTargets([
                                    contentElement
                                ]);
                            }
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
                }));
            }
        },
        {
            key: "componentDidMount",
            value: function componentDidMount() {
                var _this = this;
                var _this1 = this, infiniteViewer = _this1.infiniteViewer, memory = _this1.memory, eventBus = _this1.eventBus;
                memory.set("background-color", "#4af");
                memory.set("color", "#333");
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
                this.keyManager.keydown([
                    "left"
                ], function(e) {
                    _this.move(-10, 0);
                    e.inputEvent.preventDefault();
                }, "Move Left");
                this.keyManager.keydown([
                    "up"
                ], function(e) {
                    _this.move(0, -10);
                    e.inputEvent.preventDefault();
                }, "Move Up");
                this.keyManager.keydown([
                    "right"
                ], function(e) {
                    _this.move(10, 0);
                    e.inputEvent.preventDefault();
                }, "Move Right");
                this.keyManager.keydown([
                    "down"
                ], function(e) {
                    _this.move(0, 10);
                    e.inputEvent.preventDefault();
                }, "Move Down");
                this.keyManager.keyup([
                    "backspace"
                ], function() {
                    _this.removeElements(_this.getSelectedTargets());
                }, "Delete");
                this.keyManager.keydown([
                    isMacintosh ? "meta" : "ctrl",
                    "x"
                ], function() {}, "Cut");
                this.keyManager.keydown([
                    isMacintosh ? "meta" : "ctrl",
                    "c"
                ], function() {}, "Copy");
                this.keyManager.keydown([
                    isMacintosh ? "meta" : "ctrl",
                    "v"
                ], function() {}, "Paste");
                this.keyManager.keydown([
                    isMacintosh ? "meta" : "ctrl",
                    "z"
                ], function() {
                    _this.historyManager.undo();
                }, "Undo");
                this.keyManager.keydown([
                    isMacintosh ? "meta" : "ctrl",
                    "shift",
                    "z"
                ], function() {
                    _this.historyManager.redo();
                }, "Redo");
                this.keyManager.keydown([
                    isMacintosh ? "meta" : "ctrl",
                    "a"
                ], function(e) {
                    _this.setSelectedTargets(_this.getViewportInfos().map(function(info) {
                        return info.el;
                    }));
                    e.inputEvent.preventDefault();
                }, "Select All");
                this.keyManager.keydown([
                    isMacintosh ? "meta" : "ctrl",
                    "alt",
                    "g"
                ], function(e) {
                    e.inputEvent.preventDefault();
                    _this.moveInside();
                }, "Move Inside");
                this.keyManager.keydown([
                    isMacintosh ? "meta" : "ctrl",
                    "shift",
                    "alt",
                    "g"
                ], function(e) {
                    e.inputEvent.preventDefault();
                    _this.moveOutside();
                }, "Move Outside");
                this.historyManager.registerType("createElements", undoCreateElements, restoreElements);
                this.historyManager.registerType("removeElements", restoreElements, undoCreateElements);
                this.historyManager.registerType("selectTargets", undoSelectTargets, redoSelectTargets);
                this.historyManager.registerType("changeText", undoChangeText, redoChangeText);
                this.historyManager.registerType("move", undoMove, redoMove);
                if (this.props.initialJSX && this.props.initialJSX.length > 0) {
                    this.appendJSXs(this.props.initialJSX, true);
                }
            }
        },
        {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
                this.eventBus.off();
                this.memory.clear();
                this.moveableData.clear();
                this.keyManager.destroy();
                this.clipboardManager.destroy();
                window.removeEventListener("resize", this.onResize);
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
                    if (!isRestore) {
                        var prevs = getIds(_this.moveableData.getSelectedTargets());
                        var nexts = getIds(targets);
                        if (prevs.length !== nexts.length || !prevs.every(function(prev, i) {
                            return nexts[i] === prev;
                        })) {
                            _this.historyManager.addAction("selectTargets", {
                                prevs: prevs,
                                nexts: nexts
                            });
                        }
                    }
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
            value: function appendJSX(info) {
                return this.appendJSXs([
                    info
                ]).then(function(targets) {
                    return targets[0];
                });
            }
        },
        {
            key: "appendJSXs",
            value: function appendJSXs(jsxs, isRestore) {
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
                    return _this.appendComplete(added, isRestore);
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
                var infos = this.moveableData.setProperty(scope, value);
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
                        jsx = /* @__PURE__ */ React36.createElement(Component2, null);
                    }
                    if (!jsx) {
                        jsx = React36.createElement(data.tagName);
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
                    var isContentEditable = info.attrs.contenteditable;
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
                    jsx: /* @__PURE__ */ React36.createElement("img", {
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
            value: function selectEndMaker(rect) {
                var _this = this;
                var infiniteViewer = this.infiniteViewer.current;
                var selectIcon = this.menu.current.getSelected();
                var width = rect.width;
                var height = rect.height;
                if (!selectIcon || !selectIcon.maker || !width || !height) {
                    return false;
                }
                var maker = selectIcon.maker(this.memory);
                var scrollTop = -infiniteViewer.getScrollTop() + 45;
                var scrollLeft = -infiniteViewer.getScrollLeft();
                var top = rect.top - scrollTop;
                var left = rect.left - scrollLeft;
                var style = _object_spread({
                    top: "".concat(top, "px"),
                    left: "".concat(left, "px"),
                    position: "absolute",
                    width: "".concat(width, "px"),
                    height: "".concat(height, "px")
                }, maker.style);
                this.appendJSX({
                    jsx: maker.tag,
                    attrs: maker.attrs,
                    name: "(".concat(selectIcon.id, ")"),
                    frame: style
                }).then(function(el) {
                    var _this_menu_current;
                    selectIcon.makeThen(el, selectIcon.id, _this.menu.current);
                    (_this_menu_current = _this.menu.current) === null || _this_menu_current === void 0 ? void 0 : _this_menu_current.forceUpdate();
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
                    if (key.includes("__reactInternalInstance") || _instanceof(value, HTMLDivElement)) {
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
                                _this.memory.set("imageUrl", image);
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
                                    _this.selectEndMaker({
                                        top: 250 - height / 2 + 45,
                                        left: 250 - width / 2,
                                        bottom: 0,
                                        right: 0,
                                        width: width,
                                        height: height
                                    });
                                };
                                imageLoad.src = image;
                                _state.label = 2;
                            case 2:
                                return [
                                    2
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return Editor;
}(React36.PureComponent);
// src/Editor/index.ts
var Editor_default = Editor;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    makeScenaFunctionComponent: makeScenaFunctionComponent
}); /*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ 
