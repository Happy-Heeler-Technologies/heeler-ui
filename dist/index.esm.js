import K from "react";
var R = { exports: {} }, v = {};
var F;
function ee() {
  if (F) return v;
  F = 1;
  var i = Symbol.for("react.transitional.element"), u = Symbol.for("react.fragment");
  function b(s, a, l) {
    var d = null;
    if (l !== void 0 && (d = "" + l), a.key !== void 0 && (d = "" + a.key), "key" in a) {
      l = {};
      for (var m in a)
        m !== "key" && (l[m] = a[m]);
    } else l = a;
    return a = l.ref, {
      $$typeof: i,
      type: s,
      key: d,
      ref: a !== void 0 ? a : null,
      props: l
    };
  }
  return v.Fragment = u, v.jsx = b, v.jsxs = b, v;
}
var _ = {};
var D;
function re() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && (function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === H ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case h:
          return "Fragment";
        case U:
          return "Profiler";
        case W:
          return "StrictMode";
        case V:
          return "Suspense";
        case G:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case z:
            return e.displayName || "Context";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case J:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case w:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function u(e) {
      return "" + e;
    }
    function b(e) {
      try {
        u(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), u(e);
      }
    }
    function s(e) {
      if (e === h) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === w)
        return "<...>";
      try {
        var r = i(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = k.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (j.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function x() {
      var e = i(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function T(e, r, t, o, y, A) {
      var n = t.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: r,
        props: t,
        _owner: o
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function c(e, r, t, o, y, A) {
      var n = r.children;
      if (n !== void 0)
        if (o)
          if (Z(n)) {
            for (o = 0; o < n.length; o++)
              f(n[o]);
            Object.freeze && Object.freeze(n);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(n);
      if (j.call(r, "key")) {
        n = i(e);
        var p = Object.keys(r).filter(function(Q) {
          return Q !== "key";
        });
        o = 0 < p.length ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}", I[n + o] || (p = 0 < p.length ? "{" + p.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          n,
          p,
          n
        ), I[n + o] = !0);
      }
      if (n = null, t !== void 0 && (b(t), n = "" + t), d(r) && (b(r.key), n = "" + r.key), "key" in r) {
        t = {};
        for (var S in r)
          S !== "key" && (t[S] = r[S]);
      } else t = r;
      return n && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), T(
        e,
        n,
        t,
        a(),
        y,
        A
      );
    }
    function f(e) {
      E(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === w && (e._payload.status === "fulfilled" ? E(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function E(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var g = K, P = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), z = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), V = Symbol.for("react.suspense"), G = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), k = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, Z = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var N, C = {}, $ = g.react_stack_bottom_frame.bind(
      g,
      l
    )(), Y = O(s(l)), I = {};
    _.Fragment = h, _.jsx = function(e, r, t) {
      var o = 1e4 > k.recentlyCreatedOwnerStacks++;
      return c(
        e,
        r,
        t,
        !1,
        o ? Error("react-stack-top-frame") : $,
        o ? O(s(e)) : Y
      );
    }, _.jsxs = function(e, r, t) {
      var o = 1e4 > k.recentlyCreatedOwnerStacks++;
      return c(
        e,
        r,
        t,
        !0,
        o ? Error("react-stack-top-frame") : $,
        o ? O(s(e)) : Y
      );
    };
  })()), _;
}
var L;
function te() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? R.exports = ee() : R.exports = re()), R.exports;
}
var oe = te();
function ae({
  children: i,
  variant: u = "primary",
  color: b = "blue",
  customColor: s,
  size: a = "lg",
  rounded: l = !1,
  className: d,
  style: m,
  ...x
}) {
  const T = {
    red: {
      primary: "bg-red-600 text-white hover:bg-red-700",
      tertiary: "bg-transparent border border-red-600 text-red-600 hover:bg-red-50"
    },
    orange: {
      primary: "bg-orange-600 text-white hover:bg-orange-700",
      tertiary: "bg-transparent border border-orange-600 text-orange-600 hover:bg-orange-50"
    },
    yellow: {
      primary: "bg-yellow-500 text-white hover:bg-yellow-600",
      tertiary: "bg-transparent border border-yellow-500 text-yellow-600 hover:bg-yellow-50"
    },
    green: {
      primary: "bg-green-600 text-white hover:bg-green-700",
      tertiary: "bg-transparent border border-green-600 text-green-600 hover:bg-green-50"
    },
    blue: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      tertiary: "bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50"
    },
    indigo: {
      primary: "bg-indigo-600 text-white hover:bg-indigo-700",
      tertiary: "bg-transparent border border-indigo-600 text-indigo-600 hover:bg-indigo-50"
    },
    violet: {
      primary: "bg-violet-600 text-white hover:bg-violet-700",
      tertiary: "bg-transparent border border-violet-600 text-violet-600 hover:bg-violet-50"
    }
  };
  let c = "", f = { ...m };
  u === "secondary" ? c = "bg-gray-200 text-gray-900 hover:bg-gray-300" : s ? u === "primary" ? (f = {
    ...f,
    backgroundColor: s,
    color: "white"
  }, c = "hover:opacity-90") : u === "tertiary" && (f = {
    ...f,
    borderColor: s,
    color: s,
    backgroundColor: "transparent"
  }, c = "border hover:opacity-75") : c = T[b][u];
  const E = {
    sm: "px-3 py-1.5 text-xs min-w-20",
    md: "px-4 py-2 text-sm min-w-24",
    lg: "px-6 py-3 text-base min-w-32"
  }, g = l ? "rounded-full" : "rounded-md";
  return /* @__PURE__ */ oe.jsx(
    "button",
    {
      ...x,
      style: f,
      className: `inline-flex items-center justify-center font-medium ${c} ${E[a]} ${g} ${d ?? ""}`,
      children: i
    }
  );
}
export {
  ae as Button
};
