var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports) {
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
      if (null === a || "object" !== typeof a)
        return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
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
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
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
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b)
        for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)
          J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g)
        c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++)
          f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps)
        for (d in g = a.defaultProps, g)
          void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k)
        a = null;
      var h = false;
      if (null === a)
        h = true;
      else
        switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
      if (h)
        return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
      else if (f = A(a), "function" === typeof f)
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k)
        throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a)
        return a;
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
          if (0 === a._status || -1 === a._status)
            a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status)
        return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g = a.type.defaultProps;
        for (f in b)
          J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f)
        d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++)
          g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
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
    exports.useDebugValue = function() {
    };
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
  "node_modules/react/cjs/react.development.js"(exports, module) {
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
           */
          current: null
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
           */
          current: null
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
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
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
              args = args.concat([stack]);
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
           */
          isMounted: function(publicInstance) {
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
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
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
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
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
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
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
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component2.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
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
          switch (type) {
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
            switch (type.$$typeof) {
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
              case REACT_LAZY_TYPE: {
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
          var warnAboutAccessingKey = function() {
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
          var warnAboutAccessingRef = function() {
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
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
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
            for (propName in config) {
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
            for (var i = 0; i < childrenLength; i++) {
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
            for (propName in defaultProps) {
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
            for (propName in config) {
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
            for (var i = 0; i < childrenLength; i++) {
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
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
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
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
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
            for (var i = 0; i < children.length; i++) {
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
              while (!(step = iterator.next()).done) {
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
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
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
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
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
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
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
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
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
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
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
        function disabledLog() {
        }
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
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
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
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
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
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
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
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
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
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
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
            for (var i = 0; i < node.length; i++) {
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
                while (!(step = iterator.next()).done) {
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
            for (var i = 0; i < keys.length; i++) {
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
              typeString = typeof type;
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
            for (var i = 2; i < arguments.length; i++) {
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
              get: function() {
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
          for (var i = 2; i < arguments.length; i++) {
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
          } finally {
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
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
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
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
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
                  Promise.resolve().then(function() {
                  }).then(function() {
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
                  then: function(resolve, reject) {
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
                  then: function(resolve, reject) {
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
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
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
          toArray,
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
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_production_min();
    } else {
      module.exports = require_react_development();
    }
  }
});

// src/Editor/Editor.tsx
var React36 = __toESM(require_react());
import InfiniteViewer from "react-infinite-viewer";
import Guides from "@scena/react-guides";
import Selecto from "react-selecto";

// src/Editor/Menu/Menu.tsx
var React32 = __toESM(require_react());

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
  return target.isContentEditable || tagName === "input" || tagName === "textarea";
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
function isDivInsideAnother(div1, div2) {
  var rect1 = div1.getBoundingClientRect();
  var rect2 = div2.getBoundingClientRect();
  return rect1.left >= rect2.left && rect1.right <= rect2.right && rect1.top >= rect2.top && rect1.bottom <= rect2.bottom;
}

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
      this.keyManager.keydown(keys, (e) => {
        if (e.ctrlKey || e.metaKey) {
          return false;
        }
        this.onClick();
      }, this.constructor.id);
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
          onChange: (e) => this.uploadImage(e, this.editor)
        }
      ),
      /* @__PURE__ */ React3.createElement("i", { className: "fa-solid fa-image" })
    );
  }
  renderIcon() {
  }
  async uploadImage(e, editor) {
    const upload = editor.props.onUploadImage;
    const file = e.target.files ? e.target.files[0] : void 0;
    if (upload && file) {
      const image = await upload(file);
      const imageLoad = new Image();
      editor.memory.set("imageUrl", image);
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
        this.editor.selectEndMaker({
          top: 250 - height / 2 + 45,
          left: 250 - width / 2,
          bottom: 0,
          right: 0,
          width,
          height
        });
      };
      imageLoad.src = image;
    }
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

// src/Editor/Viewport/Viewport.tsx
var React33 = __toESM(require_react());
import { isString, isArray } from "@daybrush/utils";
var Viewport = class extends React33.PureComponent {
  constructor() {
    super(...arguments);
    this.components = {};
    this.jsxs = {};
    this.viewport = {
      jsx: /* @__PURE__ */ React33.createElement("div", null),
      name: "Viewport",
      id: "viewport",
      children: []
    };
    this.ids = {
      viewport: this.viewport
    };
    this.state = {};
    this.viewportRef = React33.createRef();
  }
  render() {
    const style = this.props.style;
    return /* @__PURE__ */ React33.createElement("div", { className: prefix("viewport-container"), onBlur: this.props.onBlur, style }, this.props.children, /* @__PURE__ */ React33.createElement("div", { className: prefix("viewport"), ...{ [DATA_SCENA_ELEMENT_ID]: "viewport" }, ref: this.viewportRef }, this.renderChildren(this.getViewportInfos())));
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
      const props = {
        key: id
      };
      if (editor.props.isAdmin || !editor.props.isAdmin && info.name !== "(PrintArea)") {
        props.className = "selectable";
      }
      if (info.name !== "(PrintArea)" && info.el) {
        const printAreas = allInfos.filter((e) => e.name === "(PrintArea)");
        const isOnArea = printAreas.some((p) => {
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
      if (isString(jsx)) {
        props[DATA_SCENA_ELEMENT_ID] = id;
        return React33.createElement(jsx, props, ...renderedChildren);
      } else if (isScenaFunction(jsx)) {
        props.scenaElementId = id;
        props.scenaAttrs = info.attrs || {};
        props.scenaText = info.innerText;
        props.scenaHTML = info.innerHTML;
        return React33.createElement(jsx, props);
      } else if (isString(jsx.type)) {
        props[DATA_SCENA_ELEMENT_ID] = id;
      } else {
        props.scenaElementId = id;
        props.scenaAttrs = info.attrs || {};
        props.scenaText = info.innerText;
        props.scenaHTML = info.innerHTML;
      }
      const jsxChildren = jsx.props.children;
      return React33.cloneElement(
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
      const scopeInfo = this.getInfo(scopeId || info.scopeId);
      const children = scopeInfo.children;
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
      if (info.attrs.contenteditable) {
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
var React34 = __toESM(require_react());
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
    return /* @__PURE__ */ React34.createElement("div", { key: "dimension-viewer", className: "moveable-dimension", style: {
      left: `${rect.left + rect.width / 2 - left}px`,
      top: `${rect.top + rect.height + 20 - top}px`
    } }, Math.round(rect.offsetWidth), " x ", Math.round(rect.offsetHeight));
  }
};
var MoveableManager = class extends React34.PureComponent {
  constructor() {
    super(...arguments);
    this.moveable = React34.createRef();
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
      keyManager,
      eventBus,
      selecto,
      memory
    } = editor;
    const elementGuidelines = [...moveableData.getTargets()].filter((el) => {
      return selectedTargets.indexOf(el) === -1;
    });
    const isShift = keyManager.shiftKey;
    const targetIsImage = selectedTargets.every((el) => el.tagName === "IMG");
    return /* @__PURE__ */ React34.createElement(
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
    return /* @__PURE__ */ React34.createElement(
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
    this.keyManager.keydown(["shift"], () => {
      this.forceUpdate();
    });
    this.keyManager.keyup(["shift"], () => {
      this.forceUpdate();
    });
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

// src/Editor/KeyManager/KeyManager.ts
import KeyController from "keycon";
function check(e) {
  const inputEvent = e.inputEvent;
  const target = inputEvent.target;
  if (checkInput(target)) {
    return false;
  }
  return true;
}
var KeyManager = class {
  constructor(console2) {
    this.console = console2;
    this.keycon = new KeyController();
    this.keylist = [];
    this.isEnable = true;
  }
  enable() {
    this.isEnable = true;
  }
  disable() {
    this.isEnable = false;
  }
  keydown(keys, callback, description) {
    this.keycon.keydown(keys, this.addCallback("keydown", keys, callback, description));
  }
  keyup(keys, callback, description) {
    this.keycon.keyup(keys, this.addCallback("keyup", keys, callback, description));
  }
  get altKey() {
    return this.keycon.altKey;
  }
  get shiftKey() {
    return this.keycon.shiftKey;
  }
  get metaKey() {
    return this.keycon.metaKey;
  }
  get ctrlKey() {
    return this.keycon.ctrlKey;
  }
  destroy() {
    this.keycon.destroy();
  }
  addCallback(type, keys, callback, description) {
    if (description) {
      this.keylist.push([
        keys,
        description
      ]);
    }
    return (e) => {
      if (!this.isEnable || !check(e)) {
        return false;
      }
      const result = callback(e);
      if (result !== false && description) {
        this.console.log(`${type}: ${keys.join(" + ")}`, description);
      }
    };
  }
};

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
var React35 = __toESM(require_react());
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
        jsx: /* @__PURE__ */ React35.createElement("div", { contentEditable: "true" }),
        name: "(Text)",
        innerText: text
      }]);
    }
  }
};

// src/Editor/Editor.tsx
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
var Editor = class extends React36.PureComponent {
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
      height: 500
    };
    this.historyManager = new HistoryManager(this);
    this.console = new Debugger(this.props.debug);
    this.eventBus = new EventBus_default();
    this.memory = new Memory();
    this.moveableData = new MoveableData(this.memory);
    this.keyManager = new KeyManager(this.console);
    this.clipboardManager = new ClipboardManager(this);
    this.horizontalGuides = React36.createRef();
    this.verticalGuides = React36.createRef();
    this.infiniteViewer = React36.createRef();
    this.selecto = React36.createRef();
    this.menu = React36.createRef();
    this.moveableManager = React36.createRef();
    this.viewport = React36.createRef();
    this.tabs = React36.createRef();
    this.editorElement = React36.createRef();
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
    return /* @__PURE__ */ React36.createElement("div", { className: prefix("editor"), ref: this.editorElement }, /* @__PURE__ */ React36.createElement(Menu, { ref: menu, editor: this, onSelect: this.onMenuChange }), showGuides && /* @__PURE__ */ React36.createElement(React36.Fragment, null, /* @__PURE__ */ React36.createElement(
      "div",
      {
        className: prefix("reset"),
        onClick: (e) => {
          infiniteViewer.current.scrollCenter();
        }
      }
    ), /* @__PURE__ */ React36.createElement(
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
    ), /* @__PURE__ */ React36.createElement(
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
    )), /* @__PURE__ */ React36.createElement(
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
      /* @__PURE__ */ React36.createElement(
        Viewport,
        {
          ref: viewport,
          onBlur: this.onBlur,
          style: {
            width: `${width}px`,
            height: `${height}px`
          },
          editor: this
        },
        this.props.backgroundImg && /* @__PURE__ */ React36.createElement("img", { src: this.props.backgroundImg, alt: "", className: "backgroundImage" }),
        /* @__PURE__ */ React36.createElement(
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
    ), /* @__PURE__ */ React36.createElement(
      Selecto,
      {
        ref: selecto,
        dragContainer: ".scena-viewer",
        hitRate: 0,
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
    this.keyManager.keydown(
      ["left"],
      (e) => {
        this.move(-10, 0);
        e.inputEvent.preventDefault();
      },
      "Move Left"
    );
    this.keyManager.keydown(
      ["up"],
      (e) => {
        this.move(0, -10);
        e.inputEvent.preventDefault();
      },
      "Move Up"
    );
    this.keyManager.keydown(
      ["right"],
      (e) => {
        this.move(10, 0);
        e.inputEvent.preventDefault();
      },
      "Move Right"
    );
    this.keyManager.keydown(
      ["down"],
      (e) => {
        this.move(0, 10);
        e.inputEvent.preventDefault();
      },
      "Move Down"
    );
    this.keyManager.keyup(
      ["backspace"],
      () => {
        this.removeElements(this.getSelectedTargets());
      },
      "Delete"
    );
    this.keyManager.keydown(
      [isMacintosh ? "meta" : "ctrl", "x"],
      () => {
      },
      "Cut"
    );
    this.keyManager.keydown(
      [isMacintosh ? "meta" : "ctrl", "c"],
      () => {
      },
      "Copy"
    );
    this.keyManager.keydown(
      [isMacintosh ? "meta" : "ctrl", "v"],
      () => {
      },
      "Paste"
    );
    this.keyManager.keydown(
      [isMacintosh ? "meta" : "ctrl", "z"],
      () => {
        this.historyManager.undo();
      },
      "Undo"
    );
    this.keyManager.keydown(
      [isMacintosh ? "meta" : "ctrl", "shift", "z"],
      () => {
        this.historyManager.redo();
      },
      "Redo"
    );
    this.keyManager.keydown(
      [isMacintosh ? "meta" : "ctrl", "a"],
      (e) => {
        this.setSelectedTargets(
          this.getViewportInfos().map((info) => info.el)
        );
        e.inputEvent.preventDefault();
      },
      "Select All"
    );
    this.keyManager.keydown(
      [isMacintosh ? "meta" : "ctrl", "alt", "g"],
      (e) => {
        e.inputEvent.preventDefault();
        this.moveInside();
      },
      "Move Inside"
    );
    this.keyManager.keydown(
      [isMacintosh ? "meta" : "ctrl", "shift", "alt", "g"],
      (e) => {
        e.inputEvent.preventDefault();
        this.moveOutside();
      },
      "Move Outside"
    );
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
      this.appendJSXs(this.props.initialJSX, true);
    }
  }
  componentWillUnmount() {
    this.eventBus.off();
    this.memory.clear();
    this.moveableData.clear();
    this.keyManager.destroy();
    this.clipboardManager.destroy();
    window.removeEventListener("resize", this.onResize);
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
          jsx = /* @__PURE__ */ React36.createElement(Component2, null);
        }
        if (!jsx) {
          jsx = React36.createElement(data.tagName);
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
      jsx: /* @__PURE__ */ React36.createElement("img", { src: url, alt: "appended blob" }),
      name: "(Image)"
    });
  }
  moves(movedInfos, isRestore) {
    const frameMap = this.removeFrames(movedInfos.map(({ info }) => info.el));
    return this.getViewport().moves(movedInfos).then((result) => this.moveComplete(result, frameMap, isRestore));
  }
  selectEndMaker(rect) {
    const infiniteViewer = this.infiniteViewer.current;
    const selectIcon = this.menu.current.getSelected();
    const width = rect.width;
    const height = rect.height;
    if (!selectIcon || !selectIcon.maker || !width || !height) {
      return false;
    }
    const maker = selectIcon.maker(this.memory);
    const scrollTop = -infiniteViewer.getScrollTop() + 45;
    const scrollLeft = -infiniteViewer.getScrollLeft();
    const top = rect.top - scrollTop;
    const left = rect.left - scrollLeft;
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
      frame: style
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
      if (key.includes("__reactInternalInstance") || value instanceof HTMLDivElement) {
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
};

// src/Editor/index.ts
var Editor_default = Editor;
export {
  Editor_default as default,
  makeScenaFunctionComponent
};
/*! Bundled license information:

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
