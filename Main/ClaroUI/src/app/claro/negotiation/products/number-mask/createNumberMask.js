! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.createNumberMask = t() : e.createNumberMask = t()
}(this, function() {
    return function(e) {
        function t(n) {
            if (o[n]) return o[n].exports;
            var i = o[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var o = {};
        return t.m = e, t.c = o, t.p = "", t(0)
    }([function(e, t, o) {
        e.exports = o(2)
    }, , function(e, t) {
        "use strict";

        function o() {
            function e() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
                    t = e.length;
                if (e === l || e[0] === y[0] && 1 === t) return y.split(l).concat([v]).concat(h.split(l));
                if (e === k && M) return y.split(l).concat(["0", k, v]).concat(h.split(l));
                var o = e.lastIndexOf(k),
                    c = o !== -1,
                    u = e[0] === s && q,
                    a = void 0,
                    b = void 0,
                    g = void 0;
                if (e.slice(T * -1) === h && (e = e.slice(0, T * -1)), c && (M || $) ? (a = e.slice(e.slice(0, R) === y ? R : 0, o), b = e.slice(o + 1, t), b = n(b.replace(f, l))) : a = e.slice(0, R) === y ? e.slice(R) : e, P && ("undefined" == typeof P ? "undefined" : r(P)) === p) {
                    var S = "." === j ? "[.]" : "" + j,
                        w = (a.match(new RegExp(S, "g")) || []).length;
                    a = a.slice(0, P + w * Z)
                }
                return a = a.replace(f, l), E || (a = a.replace(/^0+(0$|[^0])/, "$1")), a = x ? i(a, j) : a, g = n(a), (c && M || $ === !0) && (e[o - 1] !== k && g.push(m), g.push(k, m), b && (("undefined" == typeof L ? "undefined" : r(L)) === p && (b = b.slice(0, L)), g = g.concat(b)), $ === !0 && e[o - 1] === k && g.push(v)), R > 0 && (g = y.split(l).concat(g)), u && (g.length === R && g.push(v), g = [d].concat(g)), h.length > 0 && (g = g.concat(h.split(l))), g
            }
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                o = t.prefix,
                y = void 0 === o ? c : o,
                b = t.suffix,
                h = void 0 === b ? l : b,
                g = t.includeThousandsSeparator,
                x = void 0 === g || g,
                S = t.thousandsSeparatorSymbol,
                j = void 0 === S ? u : S,
                w = t.allowDecimal,
                M = void 0 !== w && w,
                N = t.decimalSymbol,
                k = void 0 === N ? a : N,
                D = t.decimalLimit,
                L = void 0 === D ? 2 : D,
                O = t.requireDecimal,
                $ = void 0 !== O && O,
                _ = t.allowNegative,
                q = void 0 !== _ && _,
                B = t.allowLeadingZeroes,
                E = void 0 !== B && B,
                I = t.integerLimit,
                P = void 0 === I ? null : I,
                R = y && y.length || 0,
                T = h && h.length || 0,
                Z = j && j.length || 0;
            return e.instanceOf = "createNumberMask", e
        }

        function n(e) {
            return e.split(l).map(function(e) {
                return v.test(e) ? v : e
            })
        }

        function i(e, t) {
            return e.replace(/\B(?=(\d{3})+(?!\d))/g, t)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.default = o;
        var c = "$",
            l = "",
            u = ",",
            a = ".",
            s = "-",
            d = /-/,
            f = /\D+/g,
            p = "number",
            v = /\d/,
            m = "[]"
    }])
});