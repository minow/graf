/*!
 * @license
 * TradingView Lightweight Charts v3.6.1
 * Copyright (c) 2020 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
	
var osaY = [];
!(function () {
	
    "use strict";
    var t, i;
    function n(t, i) {
        var n,
            h = (((n = {})[0] = []), (n[1] = [t.lineWidth, t.lineWidth]), (n[2] = [2 * t.lineWidth, 2 * t.lineWidth]), (n[3] = [6 * t.lineWidth, 6 * t.lineWidth]), (n[4] = [t.lineWidth, 4 * t.lineWidth]), n)[i];
        t.setLineDash(h);
    }
    function h(t, i, n, h) {
        t.beginPath();
        var s = t.lineWidth % 2 ? 0.5 : 0;
        t.moveTo(n, i + s), t.lineTo(h, i + s), t.stroke();
    }
    !(function (t) {
        (t[(t.Simple = 0)] = "Simple"), (t[(t.WithSteps = 1)] = "WithSteps");
    })(t || (t = {})),
        (function (t) {
            (t[(t.Solid = 0)] = "Solid"), (t[(t.Dotted = 1)] = "Dotted"), (t[(t.Dashed = 2)] = "Dashed"), (t[(t.LargeDashed = 3)] = "LargeDashed"), (t[(t.SparseDotted = 4)] = "SparseDotted");
        })(i || (i = {}));
    var s = function (t, i) {
        return (s =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
                function (t, i) {
                    t.__proto__ = i;
                }) ||
            function (t, i) {
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n]);
            })(t, i);
    };
    function r(t, i) {
        if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
        function n() {
            this.constructor = t;
        }
        s(t, i), (t.prototype = null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
    }
    var e = function () {
        return (e =
            Object.assign ||
            function (t) {
                for (var i, n = 1, h = arguments.length; n < h; n++) for (var s in (i = arguments[n])) Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
                return t;
            }).apply(this, arguments);
    };
    function u(t, i, n) {
        if (n || 2 === arguments.length) for (var h, s = 0, r = i.length; s < r; s++) (!h && s in i) || (h || (h = Array.prototype.slice.call(i, 0, s)), (h[s] = i[s]));
        return t.concat(h || Array.prototype.slice.call(i));
    }
    function a(t, i) {
        if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""));
    }
    function o(t) {
        if (void 0 === t) throw new Error("Value is undefined");
        return t;
    }
    function l(t) {
        if (null === t) throw new Error("Value is null");
        return t;
    }
    function f(t) {
        return l(o(t));
    }
    function c(t) {
        for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
        for (var h = 0, s = i; h < s.length; h++) {
            var r = s[h];
            for (var e in r) void 0 !== r[e] && ("object" != typeof r[e] || void 0 === t[e] ? (t[e] = r[e]) : c(t[e], r[e]));
        }
        return t;
    }
    function v(t) {
        return "number" == typeof t && isFinite(t);
    }
    function _(t) {
        return "number" == typeof t && t % 1 == 0;
    }
    function d(t) {
        return "string" == typeof t;
    }
    function w(t) {
        return "boolean" == typeof t;
    }
    function M(t) {
        var i,
            n,
            h,
            s = t;
        if (!s || "object" != typeof s) return s;
        for (n in ((i = Array.isArray(s) ? [] : {}), s)) s.hasOwnProperty(n) && ((h = s[n]), (i[n] = h && "object" == typeof h ? M(h) : h));
        return i;
    }
    function b(t) {
        return null !== t;
    }
    function m(t) {
        return null === t ? void 0 : t;
    }
    var p = (function () {
            function t() {
                this.t = [];
            }
            return (
                (t.prototype.i = function (t) {
                    this.t = t;
                }),
                (t.prototype.h = function (t, i, n, h) {
                    this.t.forEach(function (s) {
                        t.save(), s.h(t, i, n, h), t.restore();
                    });
                }),
                t
            );
        })(),
        g = (function () {
            function t() {}
            return (
                (t.prototype.h = function (t, i, n, h) {
                    t.save(), t.scale(i, i), this.u(t, n, h), t.restore();
                }),
                (t.prototype.o = function (t, i, n, h) {
                    t.save(), t.scale(i, i), this.l(t, n, h), t.restore();
                }),
                (t.prototype.l = function (t, i, n) {}),
                t
            );
        })(),
        y = (function (t) {
            function i() {
                var i = (null !== t && t.apply(this, arguments)) || this;
                return (i.v = null), i;
            }
            return (
                r(i, t),
                (i.prototype._ = function (t) {
                    this.v = t;
                }),
                (i.prototype.u = function (t) {
                    if (null !== this.v && null !== this.v.M) {
                        var i = this.v.M,
                            n = this.v,
                            h = function (h) {
                                t.beginPath();
                                for (var s = i.to - 1; s >= i.from; --s) {
                                    var r = n.m[s];
                                    t.moveTo(r.p, r.g), t.arc(r.p, r.g, h, 0, 2 * Math.PI);
                                }
                                t.fill();
                            };
                        (t.fillStyle = n.k), h(n.N + 2), (t.fillStyle = n.S), h(n.N);
                    }
                }),
                i
            );
        })(g);
    function k() {
        return { m: [{ p: 0, g: 0, C: 0, D: 0 }], S: "", k: "", N: 0, M: null };
    }
    var x = { from: 0, to: 1 },
        N = (function () {
            function t(t, i) {
                (this.T = new p()), (this.A = []), (this.L = []), (this.B = !0), (this.O = t), (this.F = i), this.T.i(this.A);
            }
            return (
                (t.prototype.V = function (t) {
                    var i = this.O.P();
                    i.length !== this.A.length &&
                        ((this.L = i.map(k)),
                        (this.A = this.L.map(function (t) {
                            var i = new y();
                            return i._(t), i;
                        })),
                        this.T.i(this.A)),
                        (this.B = !0);
                }),
                (t.prototype.R = function (t, i, n) {
                    return this.B && (this.I(t), (this.B = !1)), this.T;
                }),
                (t.prototype.I = function (t) {
                    var i = this,
                        n = this.O.P(),
                        h = this.F.W(),
                        s = this.O.j();
                    n.forEach(function (n, r) {
                        var e,
                            u = i.L[r],
                            a = n.U(h);
                        if (null !== a && n.q()) {
                            var o = l(n.H());
                            (u.S = a.Y), (u.N = a.N), (u.m[0].D = a.D), (u.m[0].g = n.$().K(a.D, o.X)), (u.k = null !== (e = a.Z) && void 0 !== e ? e : i.O.J(u.m[0].g / t)), (u.m[0].C = h), (u.m[0].p = s.G(h)), (u.M = x);
                        } else u.M = null;
                    });
                }),
                t
            );
        })(),
        S = (function () {
            function t(t) {
                this.tt = t;
            }
            return (
                (t.prototype.h = function (t, i, s, r) {
                    if (null !== this.tt) {
                        var e = this.tt.it.q,
                            u = this.tt.nt.q;
                        if (e || u) {
                            t.save();
                            var a = Math.round(this.tt.p * i),
                                o = Math.round(this.tt.g * i),
                                l = Math.ceil(this.tt.ht * i),
                                f = Math.ceil(this.tt.st * i);
                            (t.lineCap = "butt"),
                                e &&
                                    a >= 0 &&
                                    ((t.lineWidth = Math.floor(this.tt.it.rt * i)),
                                    (t.strokeStyle = this.tt.it.et),
                                    (t.fillStyle = this.tt.it.et),
                                    n(t, this.tt.it.ut),
                                    (function (t, i, n, h) {
                                        t.beginPath();
                                        var s = t.lineWidth % 2 ? 0.5 : 0;
                                        t.moveTo(i + s, n), t.lineTo(i + s, h), t.stroke();
                                    })(t, a, 0, f)),
                                u && o >= 0 && ((t.lineWidth = Math.floor(this.tt.nt.rt * i)), (t.strokeStyle = this.tt.nt.et), (t.fillStyle = this.tt.nt.et), n(t, this.tt.nt.ut), h(t, o, 0, l)),
                                t.restore();
                        }
                    }
                }),
                t
            );
        })(),
        C = (function () {
            function t(t) {
                (this.B = !0), (this.at = { it: { rt: 1, ut: 0, et: "", q: !1 }, nt: { rt: 1, ut: 0, et: "", q: !1 }, ht: 0, st: 0, p: 0, g: 0 }), (this.ot = new S(this.at)), (this.lt = t);
            }
            return (
                (t.prototype.V = function () {
                    this.B = !0;
                }),
                (t.prototype.R = function (t, i) {
                    return this.B && (this.I(), (this.B = !1)), this.ot;
                }),
                (t.prototype.I = function () {
                    var t = this.lt.q(),
                        i = l(this.lt.ft()),
                        n = i.vt().ct().crosshair,
                        h = this.at;
                    (h.nt.q = t && this.lt._t(i)),
                        (h.it.q = t && this.lt.dt()),
                        (h.nt.rt = n.horzLine.width),
                        (h.nt.ut = n.horzLine.style),
                        (h.nt.et = n.horzLine.color),
                        (h.it.rt = n.vertLine.width),
                        (h.it.ut = n.vertLine.style),
                        (h.it.et = n.vertLine.color),
                        (h.ht = i.wt()),
                        (h.st = i.Mt()),
                        (h.p = this.lt.bt()),
                        (h.g = this.lt.gt());
                }),
                t
            );
        })(),
        D = {
            khaki: "#f0e68c",
            azure: "#f0ffff",
            aliceblue: "#f0f8ff",
            ghostwhite: "#f8f8ff",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gainsboro: "#dcdcdc",
            gray: "#808080",
            green: "#008000",
            honeydew: "#f0fff0",
            floralwhite: "#fffaf0",
            lightblue: "#add8e6",
            lightcoral: "#f08080",
            lemonchiffon: "#fffacd",
            hotpink: "#ff69b4",
            lightyellow: "#ffffe0",
            greenyellow: "#adff2f",
            lightgoldenrodyellow: "#fafad2",
            limegreen: "#32cd32",
            linen: "#faf0e6",
            lightcyan: "#e0ffff",
            magenta: "#f0f",
            maroon: "#800000",
            olive: "#808000",
            orange: "#ffa500",
            oldlace: "#fdf5e6",
            mediumblue: "#0000cd",
            transparent: "#0000",
            lime: "#0f0",
            lightpink: "#ffb6c1",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            midnightblue: "#191970",
            orchid: "#da70d6",
            mediumorchid: "#ba55d3",
            mediumturquoise: "#48d1cc",
            orangered: "#ff4500",
            royalblue: "#4169e1",
            powderblue: "#b0e0e6",
            red: "#f00",
            coral: "#ff7f50",
            turquoise: "#40e0d0",
            white: "#fff",
            whitesmoke: "#f5f5f5",
            wheat: "#f5deb3",
            teal: "#008080",
            steelblue: "#4682b4",
            bisque: "#ffe4c4",
            aquamarine: "#7fffd4",
            aqua: "#0ff",
            sienna: "#a0522d",
            silver: "#c0c0c0",
            springgreen: "#00ff7f",
            antiquewhite: "#faebd7",
            burlywood: "#deb887",
            brown: "#a52a2a",
            beige: "#f5f5dc",
            chocolate: "#d2691e",
            chartreuse: "#7fff00",
            cornflowerblue: "#6495ed",
            cornsilk: "#fff8dc",
            crimson: "#dc143c",
            cadetblue: "#5f9ea0",
            tomato: "#ff6347",
            fuchsia: "#f0f",
            blue: "#00f",
            salmon: "#fa8072",
            blanchedalmond: "#ffebcd",
            slateblue: "#6a5acd",
            slategray: "#708090",
            thistle: "#d8bfd8",
            tan: "#d2b48c",
            cyan: "#0ff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkgray: "#a9a9a9",
            blueviolet: "#8a2be2",
            black: "#000",
            darkmagenta: "#8b008b",
            darkslateblue: "#483d8b",
            darkkhaki: "#bdb76b",
            darkorchid: "#9932cc",
            darkorange: "#ff8c00",
            darkgreen: "#006400",
            darkred: "#8b0000",
            dodgerblue: "#1e90ff",
            darkslategray: "#2f4f4f",
            dimgray: "#696969",
            deepskyblue: "#00bfff",
            firebrick: "#b22222",
            forestgreen: "#228b22",
            indigo: "#4b0082",
            ivory: "#fffff0",
            lavenderblush: "#fff0f5",
            feldspar: "#d19275",
            indianred: "#cd5c5c",
            lightgreen: "#90ee90",
            lightgrey: "#d3d3d3",
            lightskyblue: "#87cefa",
            lightslategray: "#789",
            lightslateblue: "#8470ff",
            snow: "#fffafa",
            lightseagreen: "#20b2aa",
            lightsalmon: "#ffa07a",
            darksalmon: "#e9967a",
            darkviolet: "#9400d3",
            mediumpurple: "#9370d8",
            mediumaquamarine: "#66cdaa",
            skyblue: "#87ceeb",
            lavender: "#e6e6fa",
            lightsteelblue: "#b0c4de",
            mediumvioletred: "#c71585",
            mintcream: "#f5fffa",
            navajowhite: "#ffdead",
            navy: "#000080",
            olivedrab: "#6b8e23",
            palevioletred: "#d87093",
            violetred: "#d02090",
            yellow: "#ff0",
            yellowgreen: "#9acd32",
            lawngreen: "#7cfc00",
            pink: "#ffc0cb",
            paleturquoise: "#afeeee",
            palegoldenrod: "#eee8aa",
            darkolivegreen: "#556b2f",
            darkseagreen: "#8fbc8f",
            darkturquoise: "#00ced1",
            peachpuff: "#ffdab9",
            deeppink: "#ff1493",
            violet: "#ee82ee",
            palegreen: "#98fb98",
            mediumseagreen: "#3cb371",
            peru: "#cd853f",
            saddlebrown: "#8b4513",
            sandybrown: "#f4a460",
            rosybrown: "#bc8f8f",
            purple: "#800080",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            papayawhip: "#ffefd5",
            mediumslateblue: "#7b68ee",
            plum: "#dda0dd",
            mediumspringgreen: "#00fa9a",
        };
    function T(t) {
        return t < 0 ? 0 : t > 255 ? 255 : Math.round(t) || 0;
    }
    function A(t) {
        return t <= 0 || t > 0 ? (t < 0 ? 0 : t > 1 ? 1 : Math.round(1e4 * t) / 1e4) : 0;
    }
    var L = /^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,
        E = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$/i,
        B = /^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/,
        O = /^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/;
    function F(t) {
        var i;
        if (((t = t.toLowerCase()) in D && (t = D[t]), (i = O.exec(t) || B.exec(t)))) return [T(parseInt(i[1], 10)), T(parseInt(i[2], 10)), T(parseInt(i[3], 10)), A(i.length < 5 ? 1 : parseFloat(i[4]))];
        if ((i = E.exec(t))) return [T(parseInt(i[1], 16)), T(parseInt(i[2], 16)), T(parseInt(i[3], 16)), 1];
        if ((i = L.exec(t))) return [T(17 * parseInt(i[1], 16)), T(17 * parseInt(i[2], 16)), T(17 * parseInt(i[3], 16)), 1];
        throw new Error("Cannot parse color: " + t);
    }
    function V(t) {
        var i,
            n = F(t);
        return { yt: "rgb(" + n[0] + ", " + n[1] + ", " + n[2] + ")", kt: ((i = n), 0.199 * i[0] + 0.687 * i[1] + 0.114 * i[2] > 160 ? "black" : "white") };
    }
    function P(t, i, n, h, s, r) {
        t.fillRect(i + r, n, h - 2 * r, r), t.fillRect(i + r, n + s - r, h - 2 * r, r), t.fillRect(i, n, r, s), t.fillRect(i + h - r, n, r, s);
    }
    function z(t, i, n) {
        t.save(), t.scale(i, i), n(), t.restore();
    }
    function R(t, i, n, h, s, r) {
        t.save(), (t.globalCompositeOperation = "copy"), (t.fillStyle = r), t.fillRect(i, n, h, s), t.restore();
    }
    function I(t, i, n, h, s, r, e) {
        t.save(), (t.globalCompositeOperation = "copy");
        var u = t.createLinearGradient(0, 0, 0, s);
        u.addColorStop(0, r), u.addColorStop(1, e), (t.fillStyle = u), t.fillRect(i, n, h, s), t.restore();
    }
    var W,
        j = (function () {
            function t(t, i) {
                this._(t, i);
            }
            return (
                (t.prototype._ = function (t, i) {
                    (this.tt = t), (this.xt = i);
                }),
                (t.prototype.h = function (t, i, n, h, s, r) {
                    if (this.tt.q) {
                        t.font = i.Nt;
                        var e = this.tt.St || !this.tt.Ct ? i.Dt : 0,
                            u = i.Tt,
                            a = i.At,
                            o = i.Lt,
                            l = i.Et,
                            f = i.Bt,
                            c = this.tt.Ot,
                            v = Math.ceil(n.Ft(t, c)),
                            _ = i.Vt,
                            d = i.Pt + a + o,
                            w = Math.ceil(0.5 * d),
                            M = u + v + l + f + e,
                            b = this.xt.zt;
                        this.xt.Rt && (b = this.xt.Rt);
                        var m,
                            p,
                            g = (b = Math.round(b)) - w,
                            y = g + d,
                            k = "right" === s,
                            x = k ? h : 0,
                            N = Math.ceil(h * r),
                            S = x;
                        if (((t.fillStyle = this.xt.yt), (t.lineWidth = 1), (t.lineCap = "butt"), c)) {
                            k ? ((m = x - e), (p = (S = x - M) + f)) : ((S = x + M), (m = x + e), (p = x + u + e + l));
                            var C = Math.max(1, Math.floor(r)),
                                D = Math.max(1, Math.floor(u * r)),
                                T = k ? N : 0,
                                A = Math.round(g * r),
                                L = Math.round(S * r),
                                E = Math.round(b * r) - Math.floor(0.5 * r),
                                B = E + C + (E - A),
                                O = Math.round(m * r);
                            t.save(),
                                t.beginPath(),
                                t.moveTo(T, A),
                                t.lineTo(L, A),
                                t.lineTo(L, B),
                                t.lineTo(T, B),
                                t.fill(),
                                (t.fillStyle = this.tt.Z),
                                t.fillRect(k ? N - D : 0, A, D, B - A),
                                this.tt.St && ((t.fillStyle = this.xt.et), t.fillRect(T, E, O - T, C)),
                                (t.textAlign = "left"),
                                (t.fillStyle = this.xt.et),
                                z(t, r, function () {
                                    t.fillText(c, p, y - o - _);
                                }),
                                t.restore();
                        }
                    }
                }),
                (t.prototype.Mt = function (t, i) {
                    return this.tt.q ? t.Pt + t.At + t.Lt : 0;
                }),
                t
            );
        })(),
        U = (function () {
            function t(t) {
                (this.It = { zt: 0, et: "#FFF", yt: "#000" }),
                    (this.Wt = { Ot: "", q: !1, St: !0, Ct: !1, Z: "" }),
                    (this.jt = { Ot: "", q: !1, St: !1, Ct: !0, Z: "" }),
                    (this.B = !0),
                    (this.Ut = new (t || j)(this.Wt, this.It)),
                    (this.qt = new (t || j)(this.jt, this.It));
            }
            return (
                (t.prototype.Ot = function () {
                    return this.Wt.Ot;
                }),
                (t.prototype.zt = function () {
                    return this.Ht(), this.It.zt;
                }),
                (t.prototype.V = function () {
                    this.B = !0;
                }),
                (t.prototype.Mt = function (t, i) {
                    return void 0 === i && (i = !1), Math.max(this.Ut.Mt(t, i), this.qt.Mt(t, i));
                }),
                (t.prototype.Yt = function () {
                    return this.It.Rt || 0;
                }),
                (t.prototype.Kt = function (t) {
                    this.It.Rt = t;
                }),
                (t.prototype.$t = function () {
                    return this.Ht(), this.Wt.q || this.jt.q;
                }),
                (t.prototype.Xt = function () {
                    return this.Ht(), this.Wt.q;
                }),
                (t.prototype.R = function (t) {
                    return this.Ht(), (this.Wt.St = this.Wt.St && t.ct().drawTicks), (this.jt.St = this.jt.St && t.ct().drawTicks), this.Ut._(this.Wt, this.It), this.qt._(this.jt, this.It), this.Ut;
                }),
                (t.prototype.Zt = function () {
                    return this.Ht(), this.Ut._(this.Wt, this.It), this.qt._(this.jt, this.It), this.qt;
                }),
                (t.prototype.Ht = function () {
                    this.B && ((this.Wt.St = !0), (this.jt.St = !1), this.Jt(this.Wt, this.jt, this.It));
                }),
                t
            );
        })(),
        q = (function (t) {
            function i(i, n, h) {
                var s = t.call(this) || this;
                return (s.lt = i), (s.Gt = n), (s.Qt = h), s;
            }
            return (
                r(i, t),
                (i.prototype.Jt = function (t, i, n) {
                    t.q = !1;
                    var h = this.lt.ct().horzLine;
                    if (h.labelVisible) {
                        var s = this.Gt.H();
                        if (this.lt.q() && !this.Gt.ti() && null !== s) {
                            var r = V(h.labelBackgroundColor);
                            (n.yt = r.yt), (n.et = r.kt);
                            var e = this.Qt(this.Gt);
                            (n.zt = e.zt), (t.Ot = this.Gt.ii(e.D, s)), (t.q = !0);
                        }
                    }
                }),
                i
            );
        })(U),
        H = /[1-9]/g,
        Y = (function () {
            function t() {
                this.tt = null;
            }
            return (
                (t.prototype._ = function (t) {
                    this.tt = t;
                }),
                (t.prototype.h = function (t, i, n) {
                    var h = this;
                    if (null !== this.tt && !1 !== this.tt.q && 0 !== this.tt.Ot.length) {
                        t.font = i.Nt;
                        var s = Math.round(i.ni.Ft(t, this.tt.Ot, H));
                        if (!(s <= 0)) {
                            t.save();
                            var r = i.hi,
                                e = s + 2 * r,
                                u = e / 2,
                                a = this.tt.wt,
                                o = this.tt.zt,
                                f = Math.floor(o - u) + 0.5;
                            f < 0 ? ((o += Math.abs(0 - f)), (f = Math.floor(o - u) + 0.5)) : f + e > a && ((o -= Math.abs(a - (f + e))), (f = Math.floor(o - u) + 0.5));
                            var c = f + e,
                                v = 0 + i.Tt + i.At + i.Pt + i.Lt;
                            t.fillStyle = this.tt.yt;
                            var _ = Math.round(f * n),
                                d = Math.round(0 * n),
                                w = Math.round(c * n),
                                M = Math.round(v * n);
                            t.fillRect(_, d, w - _, M - d);
                            var b = Math.round(this.tt.zt * n),
                                m = d,
                                p = Math.round((m + i.Tt + i.Dt) * n);
                            t.fillStyle = this.tt.et;
                            var g = Math.max(1, Math.floor(n)),
                                y = Math.floor(0.5 * n);
                            t.fillRect(b - y, m, g, p - m);
                            var k = v - i.Vt - i.Lt;
                            (t.textAlign = "left"),
                                (t.fillStyle = this.tt.et),
                                z(t, n, function () {
                                    t.fillText(l(h.tt).Ot, f + r, k);
                                }),
                                t.restore();
                        }
                    }
                }),
                t
            );
        })(),
        K = (function () {
            function t(t, i, n) {
                (this.B = !0), (this.ot = new Y()), (this.at = { q: !1, yt: "#4c525e", et: "white", Ot: "", wt: 0, zt: NaN }), (this.F = t), (this.si = i), (this.Qt = n);
            }
            return (
                (t.prototype.V = function () {
                    this.B = !0;
                }),
                (t.prototype.R = function () {
                    return this.B && (this.I(), (this.B = !1)), this.ot._(this.at), this.ot;
                }),
                (t.prototype.I = function () {
                    var t = this.at;
                    t.q = !1;
                    var i = this.F.ct().vertLine;
                    if (i.labelVisible) {
                        var n = this.si.j();
                        if (!n.ti()) {
                            var h = n.ri(this.F.W());
                            t.wt = n.wt();
                            var s = this.Qt();
                            if (s.C) {
                                (t.zt = s.zt), (t.Ot = n.ei(l(h))), (t.q = !0);
                                var r = V(i.labelBackgroundColor);
                                (t.yt = r.yt), (t.et = r.kt);
                            }
                        }
                    }
                }),
                t
            );
        })(),
        $ = (function () {
            function t() {
                (this.ui = null), (this.ai = 0);
            }
            return (
                (t.prototype.oi = function () {
                    return this.ai;
                }),
                (t.prototype.li = function (t) {
                    this.ai = t;
                }),
                (t.prototype.$ = function () {
                    return this.ui;
                }),
                (t.prototype.fi = function (t) {
                    this.ui = t;
                }),
                (t.prototype.ci = function (t, i) {
                    return [];
                }),
                (t.prototype.vi = function (t) {
                    return [];
                }),
                (t.prototype._i = function () {
                    return [];
                }),
                (t.prototype.q = function () {
                    return !0;
                }),
                t
            );
        })();
    !(function (t) {
        (t[(t.Normal = 0)] = "Normal"), (t[(t.Magnet = 1)] = "Magnet");
    })(W || (W = {}));
    var X = (function (t) {
            function i(i, n) {
                var h = t.call(this) || this;
                (h.di = null), (h.wi = NaN), (h.Mi = 0), (h.bi = !0), (h.mi = new Map()), (h.pi = !1), (h.gi = NaN), (h.yi = NaN), (h.ki = NaN), (h.xi = NaN), (h.si = i), (h.Ni = n), (h.Si = new N(i, h));
                var s, r;
                h.Ci =
                    ((s = function () {
                        return h.wi;
                    }),
                    (r = function () {
                        return h.yi;
                    }),
                    function (t) {
                        var i = r(),
                            n = s();
                        if (t === l(h.di).Di()) return { D: n, zt: i };
                        var e = l(t.H());
                        return { D: t.Ti(i, e), zt: i };
                    });
                var e = (function (t, i) {
                    return function () {
                        return { C: h.si.j().ri(t()), zt: i() };
                    };
                })(
                    function () {
                        return h.Mi;
                    },
                    function () {
                        return h.bt();
                    }
                );
                return (h.Ai = new K(h, i, e)), (h.Li = new C(h)), h;
            }
            return (
                r(i, t),
                (i.prototype.ct = function () {
                    return this.Ni;
                }),
                (i.prototype.Ei = function (t, i) {
                    (this.ki = t), (this.xi = i);
                }),
                (i.prototype.Bi = function () {
                    (this.ki = NaN), (this.xi = NaN);
                }),
                (i.prototype.Oi = function () {
                    return this.ki;
                }),
                (i.prototype.Fi = function () {
                    return this.xi;
                }),
                (i.prototype.Vi = function (t, i, n) {
                    this.pi || (this.pi = !0), (this.bi = !0), this.Pi(t, i, n);
                }),
                (i.prototype.W = function () {
                    return this.Mi;
                }),
                (i.prototype.bt = function () {
                    return this.gi;
                }),
                (i.prototype.gt = function () {
                    return this.yi;
                }),
                (i.prototype.q = function () {
                    return this.bi;
                }),
                (i.prototype.zi = function () {
                    (this.bi = !1), this.Ri(), (this.wi = NaN), (this.gi = NaN), (this.yi = NaN), (this.di = null), this.Bi();
                }),
                (i.prototype.vi = function (t) {
                    return null !== this.di ? [this.Li, this.Si] : [];
                }),
                (i.prototype._t = function (t) {
                    return t === this.di && this.Ni.horzLine.visible;
                }),
                (i.prototype.dt = function () {
                    return this.Ni.vertLine.visible;
                }),
                (i.prototype.ci = function (t, i) {
                    (this.bi && this.di === t) || this.mi.clear();
                    var n = [];
                    return this.di === t && n.push(this.Ii(this.mi, i, this.Ci)), n;
                }),
                (i.prototype._i = function () {
                    return this.bi ? [this.Ai] : [];
                }),
                (i.prototype.ft = function () {
                    return this.di;
                }),
                (i.prototype.Wi = function () {
                    this.Li.V(),
                        this.mi.forEach(function (t) {
                            return t.V();
                        }),
                        this.Ai.V(),
                        this.Si.V();
                }),
                (i.prototype.ji = function (t) {
                    return t && !t.Di().ti() ? t.Di() : null;
                }),
                (i.prototype.Pi = function (t, i, n) {
                    this.Ui(t, i, n) && this.Wi();
                }),
                (i.prototype.Ui = function (t, i, n) {
                    var h = this.gi,
                        s = this.yi,
                        r = this.wi,
                        e = this.Mi,
                        u = this.di,
                        a = this.ji(n);
                    (this.Mi = t), (this.gi = isNaN(t) ? NaN : this.si.j().G(t)), (this.di = n);
                    var o = null !== a ? a.H() : null;
                    return null !== a && null !== o ? ((this.wi = i), (this.yi = a.K(i, o))) : ((this.wi = NaN), (this.yi = NaN)), h !== this.gi || s !== this.yi || e !== this.Mi || r !== this.wi || u !== this.di;
                }),
                (i.prototype.Ri = function () {
                    var t = this.si
                            .P()
                            .map(function (t) {
                                return t.Hi().qi();
                            })
                            .filter(b),
                        i = 0 === t.length ? null : Math.max.apply(Math, t);
                    this.Mi = null !== i ? i : NaN;
                }),
                (i.prototype.Ii = function (t, i, n) {
                    var h = t.get(i);
                    return void 0 === h && ((h = new q(this, i, n)), t.set(i, h)), h;
                }),
                i
            );
        })($),
        Z = ".";
    function J(t, i) {
        if (!v(t)) return "n/a";
        if (!_(i)) throw new TypeError("invalid length");
        if (i < 0 || i > 16) throw new TypeError("invalid length");
        if (0 === i) return t.toString();
        return ("0000000000000000" + t.toString()).slice(-i);
    }
    var G = (function () {
            function t(t, i) {
                if ((i || (i = 1), (v(t) && _(t)) || (t = 100), t < 0)) throw new TypeError("invalid base");
                (this.Gt = t), (this.Yi = i), this.Ki();
            }
            return (
                (t.prototype.format = function (t) {
                    var i = t < 0 ? "−" : "";
                    return (t = Math.abs(t)), i + this.$i(t);
                }),
                (t.prototype.Ki = function () {
                    if (((this.Xi = 0), this.Gt > 0 && this.Yi > 0)) for (var t = this.Gt; t > 1; ) (t /= 10), this.Xi++;
                }),
                (t.prototype.$i = function (t) {
                    var i = this.Gt / this.Yi,
                        n = Math.floor(t),
                        h = "",
                        s = void 0 !== this.Xi ? this.Xi : NaN;
                    if (i > 1) {
                        var r = +(Math.round(t * i) - n * i).toFixed(this.Xi);
                        r >= i && ((r -= i), (n += 1)), (h = Z + J(+r.toFixed(this.Xi) * this.Yi, s));
                    } else (n = Math.round(n * i) / i), s > 0 && (h = Z + J(0, s));
                    return n.toFixed(0) + h;
                }),
                t
            );
        })(),
        Q = (function (t) {
            function i(i) {
                return void 0 === i && (i = 100), t.call(this, i) || this;
            }
            return (
                r(i, t),
                (i.prototype.format = function (i) {
                    return t.prototype.format.call(this, i) + "%";
                }),
                i
            );
        })(G),
        tt = (function () {
            function t() {
                this.Zi = [];
            }
            return (
                (t.prototype.Ji = function (t, i, n) {
                    var h = { Gi: t, Qi: i, tn: !0 === n };
                    this.Zi.push(h);
                }),
                (t.prototype.nn = function (t) {
                    var i = this.Zi.findIndex(function (i) {
                        return t === i.Gi;
                    });
                    i > -1 && this.Zi.splice(i, 1);
                }),
                (t.prototype.hn = function (t) {
                    this.Zi = this.Zi.filter(function (i) {
                        return i.Qi === t;
                    });
                }),
                (t.prototype.sn = function (t, i) {
                    var n = u([], this.Zi, !0);
                    (this.Zi = this.Zi.filter(function (t) {
                        return !t.tn;
                    })),
                        n.forEach(function (n) {
                            return n.Gi(t, i);
                        });
                }),
                (t.prototype.rn = function () {
                    return this.Zi.length > 0;
                }),
                (t.prototype.en = function () {
                    this.Zi = [];
                }),
                t
            );
        })(),
        it = (function () {
            function t(t, i) {
                (this.un = t), (this.an = i);
            }
            return (
                (t.prototype.on = function (t) {
                    return null !== t && this.un === t.un && this.an === t.an;
                }),
                (t.prototype.ln = function () {
                    return new t(this.un, this.an);
                }),
                (t.prototype.fn = function () {
                    return this.un;
                }),
                (t.prototype.cn = function () {
                    return this.an;
                }),
                (t.prototype.vn = function () {
                    return this.an - this.un;
                }),
                (t.prototype.ti = function () {
                    return this.an === this.un || Number.isNaN(this.an) || Number.isNaN(this.un);
                }),
                (t.prototype._n = function (i) {
                    return null === i ? this : new t(Math.min(this.fn(), i.fn()), Math.max(this.cn(), i.cn()));
                }),
                (t.prototype.dn = function (t) {
                    if (v(t) && 0 !== this.an - this.un) {
                        var i = 0.5 * (this.an + this.un),
                            n = this.an - i,
                            h = this.un - i;
                        (n *= t), (h *= t), (this.an = i + n), (this.un = i + h);
                    }
                }),
                (t.prototype.wn = function (t) {
                    v(t) && ((this.an += t), (this.un += t));
                }),
                (t.prototype.Mn = function () {
                    return { minValue: this.un, maxValue: this.an };
                }),
                (t.bn = function (i) {
                    return null === i ? null : new t(i.minValue, i.maxValue);
                }),
                t
            );
        })();
    function nt(t, i, n) {
        return Math.min(Math.max(t, i), n);
    }
    function ht(t, i, n) {
        return i - t <= n;
    }
    function st(t) {
        return t <= 0 ? NaN : Math.log(t) / Math.log(10);
    }
    function rt(t) {
        var i = Math.ceil(t);
        return i % 2 != 0 ? i - 1 : i;
    }
    function et(t) {
        var i = Math.ceil(t);
        return i % 2 == 0 ? i - 1 : i;
    }
    function ut(t, i) {
        var n = (100 * (t - i)) / i;
        return i < 0 ? -n : n;
    }
    function at(t, i) {
        var n = ut(t.fn(), i),
            h = ut(t.cn(), i);
        return new it(n, h);
    }
    function ot(t, i) {
        var n = (100 * (t - i)) / i + 100;
        return i < 0 ? -n : n;
    }
    function lt(t, i) {
        var n = ot(t.fn(), i),
            h = ot(t.cn(), i);
        return new it(n, h);
    }
    function ft(t) {
        var i = Math.abs(t);
        if (i < 1e-8) return 0;
        var n = st(i + 1e-4) + 4;
        return t < 0 ? -n : n;
    }
    function ct(t) {
        var i = Math.abs(t);
        if (i < 1e-8) return 0;
        var n = Math.pow(10, i - 4) - 1e-4;
        return t < 0 ? -n : n;
    }
    function vt(t) {
        if (null === t) return null;
        var i = ft(t.fn()),
            n = ft(t.cn());
        return new it(i, n);
    }
    var _t,
        dt = (function () {
            function t(t, i) {
                if (
                    ((this.mn = t),
                    (this.pn = i),
                    (function (t) {
                        if (t < 0) return !1;
                        for (var i = t; i > 1; i /= 10) if (i % 10 != 0) return !1;
                        return !0;
                    })(this.mn))
                )
                    this.gn = [2, 2.5, 2];
                else {
                    this.gn = [];
                    for (var n = this.mn; 1 !== n; ) {
                        if (n % 2 == 0) this.gn.push(2), (n /= 2);
                        else {
                            if (n % 5 != 0) throw new Error("unexpected base");
                            this.gn.push(2, 2.5), (n /= 5);
                        }
                        if (this.gn.length > 100) throw new Error("something wrong with base");
                    }
                }
            }
            return (
                (t.prototype.yn = function (t, i, n) {
                    for (var h, s, r, e = 0 === this.mn ? 0 : 1 / this.mn, u = 1e-9, a = Math.pow(10, Math.max(0, Math.ceil(st(t - i)))), o = 0, l = this.pn[0]; ; ) {
                        var f = ht(a, e, u) && a > e + u,
                            c = ht(a, n * l, u),
                            v = ht(a, 1, u);
                        if (!(f && c && v)) break;
                        (a /= l), (l = this.pn[++o % this.pn.length]);
                    }
                    if ((a <= e + u && (a = e), (a = Math.max(1, a)), this.gn.length > 0 && ((h = a), (s = 1), (r = u), Math.abs(h - s) < r)))
                        for (o = 0, l = this.gn[0]; ht(a, n * l, u) && a > e + u; ) (a /= l), (l = this.gn[++o % this.gn.length]);
                    return a;
                }),
                t
            );
        })(),
        wt = (function () {
            function t(t, i, n, h) {
                (this.kn = []), (this.Gt = t), (this.mn = i), (this.xn = n), (this.Nn = h);
            }
            return (
                (t.prototype.yn = function (t, i) {
                    if (t < i) throw new Error("high < low");
                    var n = this.Gt.Mt(),
                        h = ((t - i) * this.Sn()) / n,
                        s = new dt(this.mn, [2, 2.5, 2]),
                        r = new dt(this.mn, [2, 2, 2.5]),
                        e = new dt(this.mn, [2.5, 2, 2]),
                        u = [];
                    return (
                        u.push(s.yn(t, i, h), r.yn(t, i, h), e.yn(t, i, h)),
                        (function (t) {
                            if (t.length < 1) throw Error("array is empty");
                            for (var i = t[0], n = 1; n < t.length; ++n) t[n] < i && (i = t[n]);
                            return i;
                        })(u)
                    );
                }),
                (t.prototype.Cn = function () {
                    var t = this.Gt,
                        i = t.H();
                    if (t.th.kn.length != 0)	{
                        if (osaY.length != 0)	{
                            osaY = [];
                        }
                        for (let i = 0; i < t.th.kn.length; i++) {
                            osaY.push(t.th.kn[i]);
                        }
                        window.osaYdata = osaY;
                    }
                    if (null !== i) {
                        var n = t.Mt(),
                            h = this.xn(n - 1, i),
                            s = this.xn(0, i),
                            r = this.Gt.ct().entireTextOnly ? this.Dn() / 2 : 0,
                            e = r,
                            u = n - 1 - r,
                            a = Math.max(h, s),
                            o = Math.min(h, s);
                        if (a !== o) {
                            for (var l = this.yn(a, o), f = a % l, c = a >= o ? 1 : -1, v = null, _ = 0, d = a - (f += f < 0 ? l : 0); d > o; d -= l) {
                                var w = this.Nn(d, i, !0);
                                (null !== v && Math.abs(w - v) < this.Sn()) ||
                                    w < e ||
                                    w > u ||
                                    (_ < this.kn.length ? ((this.kn[_].Tn = w), (this.kn[_].An = t.Ln(d))) : this.kn.push({ Tn: w, An: t.Ln(d) }), _++, (v = w), t.En() && (l = this.yn(d * c, o)));
                            }
                            this.kn.length = _;
                        } else this.kn = [];
                    } else this.kn = [];
                }),
                (t.prototype.Bn = function () {
                    return this.kn;
                }),
                (t.prototype.Dn = function () {
                    return this.Gt.Pt();
                }),
                (t.prototype.Sn = function () {
                    return Math.ceil(2.5 * this.Dn());
                }),
                t
            );
        })();
    function Mt(t) {
        return t.slice().sort(function (t, i) {
            return l(t.oi()) - l(i.oi());
        });
    }
    !(function (t) {
        (t[(t.Normal = 0)] = "Normal"), (t[(t.Logarithmic = 1)] = "Logarithmic"), (t[(t.Percentage = 2)] = "Percentage"), (t[(t.IndexedTo100 = 3)] = "IndexedTo100");
    })(_t || (_t = {}));
    var bt,
        mt,
        pt = new Q(),
        gt = new G(100, 1),
        yt = (function () {
            function t(t, i, n, h) {
                (this.On = 0),
                    (this.Fn = null),
                    (this.Vn = null),
                    (this.Pn = null),
                    (this.zn = { Rn: !1, In: null }),
                    (this.Wn = 0),
                    (this.jn = 0),
                    (this.Un = new tt()),
                    (this.qn = new tt()),
                    (this.Hn = []),
                    (this.Yn = null),
                    (this.Kn = null),
                    (this.$n = null),
                    (this.Xn = null),
                    (this.Zn = gt),
                    (this.Jn = t),
                    (this.Ni = i),
                    (this.Gn = n),
                    (this.Qn = h),
                    (this.th = new wt(this, 100, this.ih.bind(this), this.nh.bind(this)));
            }
            return (
                (t.prototype.hh = function () {
                    return this.Jn;
                }),
                (t.prototype.ct = function () {
                    return this.Ni;
                }),
                (t.prototype.sh = function (t) {
                    if ((c(this.Ni, t), this.rh(), void 0 !== t.mode && this.eh({ uh: t.mode }), void 0 !== t.scaleMargins)) {
                        var i = o(t.scaleMargins.top),
                            n = o(t.scaleMargins.bottom);
                        if (i < 0 || i > 1) throw new Error("Invalid top margin - expect value between 0 and 1, given=" + i);
                        if (n < 0 || n > 1 || i + n > 1) throw new Error("Invalid bottom margin - expect value between 0 and 1, given=" + n);
                        if (i + n > 1) throw new Error("Invalid margins - sum of margins must be less than 1, given=" + (i + n));
                        this.ah(), (this.Kn = null);
                    }
                }),
                (t.prototype.oh = function () {
                    return this.Ni.autoScale;
                }),
                (t.prototype.En = function () {
                    return 1 === this.Ni.mode;
                }),
                (t.prototype.lh = function () {
                    return 2 === this.Ni.mode;
                }),
                (t.prototype.fh = function () {
                    return 3 === this.Ni.mode;
                }),
                (t.prototype.uh = function () {
                    return { _h: this.Ni.autoScale, dh: this.Ni.invertScale, uh: this.Ni.mode };
                }),
                (t.prototype.eh = function (t) {
                    var i = this.uh(),
                        n = null;
                    void 0 !== t._h && (this.Ni.autoScale = t._h),
                        void 0 !== t.uh && ((this.Ni.mode = t.uh), (2 !== t.uh && 3 !== t.uh) || (this.Ni.autoScale = !0), (this.zn.Rn = !1)),
                        1 === i.uh &&
                            t.uh !== i.uh &&
                            (!(function (t) {
                                if (null === t) return !1;
                                var i = ct(t.fn()),
                                    n = ct(t.cn());
                                return isFinite(i) && isFinite(n);
                            })(this.Vn)
                                ? (this.Ni.autoScale = !0)
                                : null !==
                                      (n = (function (t) {
                                          if (null === t) return null;
                                          var i = ct(t.fn()),
                                              n = ct(t.cn());
                                          return new it(i, n);
                                      })(this.Vn)) && this.wh(n)),
                        1 === t.uh && t.uh !== i.uh && null !== (n = vt(this.Vn)) && this.wh(n);
                    var h = i.uh !== this.Ni.mode;
                    h && (2 === i.uh || this.lh()) && this.rh(), h && (3 === i.uh || this.fh()) && this.rh(), void 0 !== t.dh && i.dh !== t.dh && ((this.Ni.invertScale = t.dh), this.Mh()), this.qn.sn(i, this.uh());
                }),
                (t.prototype.bh = function () {
                    return this.qn;
                }),
                (t.prototype.Pt = function () {
                    return this.Gn.fontSize;
                }),
                (t.prototype.Mt = function () {
                    return this.On;
                }),
                (t.prototype.mh = function (t) {
                    this.On !== t && ((this.On = t), this.ah(), (this.Kn = null));
                }),
                (t.prototype.ph = function () {
                    if (this.Fn) return this.Fn;
                    var t = this.Mt() - this.gh() - this.yh();
                    return (this.Fn = t), t;
                }),
                (t.prototype.kh = function () {
                    return this.xh(), this.Vn;
                }),
                (t.prototype.wh = function (t, i) {
                    var n = this.Vn;
                    (i || (null === n && null !== t) || (null !== n && !n.on(t))) && ((this.Kn = null), (this.Vn = t));
                }),
                (t.prototype.ti = function () {
                    return this.xh(), 0 === this.On || !this.Vn || this.Vn.ti();
                }),
                (t.prototype.Nh = function (t) {
                    return this.dh() ? t : this.Mt() - 1 - t;
                }),
                (t.prototype.K = function (t, i) {
                    return this.lh() ? (t = ut(t, i)) : this.fh() && (t = ot(t, i)), this.nh(t, i);
                }),
                (t.prototype.Sh = function (t, i, n) {
                    this.xh();
                    for (var h = this.yh(), s = l(this.kh()), r = s.fn(), e = s.cn(), u = this.ph() - 1, a = this.dh(), o = u / (e - r), f = void 0 === n ? 0 : n.from, c = void 0 === n ? t.length : n.to, v = this.Ch(), _ = f; _ < c; _++) {
                        var d = t[_],
                            w = d.D;
                        if (!isNaN(w)) {
                            var M = w;
                            null !== v && (M = v(d.D, i));
                            var b = h + o * (M - r),
                                m = a ? b : this.On - 1 - b;
                            d.g = m;
                        }
                    }
                }),
                (t.prototype.Dh = function (t, i, n) {
                    this.xh();
                    for (var h = this.yh(), s = l(this.kh()), r = s.fn(), e = s.cn(), u = this.ph() - 1, a = this.dh(), o = u / (e - r), f = void 0 === n ? 0 : n.from, c = void 0 === n ? t.length : n.to, v = this.Ch(), _ = f; _ < c; _++) {
                        var d = t[_],
                            w = d.open,
                            M = d.high,
                            b = d.low,
                            m = d.close;
                        null !== v && ((w = v(d.open, i)), (M = v(d.high, i)), (b = v(d.low, i)), (m = v(d.close, i)));
                        var p = h + o * (w - r),
                            g = a ? p : this.On - 1 - p;
                        (d.Th = g), (p = h + o * (M - r)), (g = a ? p : this.On - 1 - p), (d.Ah = g), (p = h + o * (b - r)), (g = a ? p : this.On - 1 - p), (d.Lh = g), (p = h + o * (m - r)), (g = a ? p : this.On - 1 - p), (d.Eh = g);
                    }
                }),
                (t.prototype.Ti = function (t, i) {
                    var n = this.ih(t, i);
                    return this.Bh(n, i);
                }),
                (t.prototype.Bh = function (t, i) {
                    var n = t;
                    return (
                        this.lh()
                            ? (n = (function (t, i) {
                                  return i < 0 && (t = -t), (t / 100) * i + i;
                              })(n, i))
                            : this.fh() &&
                              (n = (function (t, i) {
                                  return (t -= 100), i < 0 && (t = -t), (t / 100) * i + i;
                              })(n, i)),
                        n
                    );
                }),
                (t.prototype.Oh = function () {
                    return this.Hn;
                }),
                (t.prototype.Fh = function () {
                    if (this.Yn) return this.Yn;
                    for (var t = [], i = 0; i < this.Hn.length; i++) {
                        var n = this.Hn[i];
                        null === n.oi() && n.li(i + 1), t.push(n);
                    }
                    return (t = Mt(t)), (this.Yn = t), this.Yn;
                }),
                (t.prototype.Vh = function (t) {
                    -1 === this.Hn.indexOf(t) && (this.Hn.push(t), this.rh(), this.Ph());
                }),
                (t.prototype.zh = function (t) {
                    var i = this.Hn.indexOf(t);
                    if (-1 === i) throw new Error("source is not attached to scale");
                    this.Hn.splice(i, 1), 0 === this.Hn.length && (this.eh({ _h: !0 }), this.wh(null)), this.rh(), this.Ph();
                }),
                (t.prototype.H = function () {
                    for (var t = null, i = 0, n = this.Hn; i < n.length; i++) {
                        var h = n[i].H();
                        null !== h && (null === t || h.Rh < t.Rh) && (t = h);
                    }
                    return null === t ? null : t.X;
                }),
                (t.prototype.dh = function () {
                    return this.Ni.invertScale;
                }),
                (t.prototype.Bn = function () {
                    return this.Kn || (this.th.Cn(), (this.Kn = this.th.Bn()), this.Un.sn()), this.Kn;
                }),
                (t.prototype.Ih = function () {
                    return this.Un;
                }),
                (t.prototype.Wh = function (t) {
                    this.lh() || this.fh() || (null === this.$n && null === this.Pn && (this.ti() || ((this.$n = this.On - t), (this.Pn = l(this.kh()).ln()))));
                }),
                (t.prototype.jh = function (t) {
                    if (!this.lh() && !this.fh() && null !== this.$n) {
                        this.eh({ _h: !1 }), (t = this.On - t) < 0 && (t = 0);
                        var i = (this.$n + 0.2 * (this.On - 1)) / (t + 0.2 * (this.On - 1)),
                            n = l(this.Pn).ln();
                        (i = Math.max(i, 0.1)), n.dn(i), this.wh(n);
                    }
                }),
                (t.prototype.Uh = function () {
                    this.lh() || this.fh() || ((this.$n = null), (this.Pn = null));
                }),
                (t.prototype.qh = function (t) {
                    this.oh() || (null === this.Xn && null === this.Pn && (this.ti() || ((this.Xn = t), (this.Pn = l(this.kh()).ln()))));
                }),
                (t.prototype.Hh = function (t) {
                    if (!this.oh() && null !== this.Xn) {
                        var i = l(this.kh()).vn() / (this.ph() - 1),
                            n = t - this.Xn;
                        this.dh() && (n *= -1);
                        var h = n * i,
                            s = l(this.Pn).ln();
                        s.wn(h), this.wh(s, !0), (this.Kn = null);
                    }
                }),
                (t.prototype.Yh = function () {
                    this.oh() || (null !== this.Xn && ((this.Xn = null), (this.Pn = null)));
                }),
                (t.prototype.Kh = function () {
                    return this.Zn || this.rh(), this.Zn;
                }),
                (t.prototype.ii = function (t, i) {
                    switch (this.Ni.mode) {
                        case 2:
                            return this.Kh().format(ut(t, i));
                        case 3:
                            return this.Kh().format(ot(t, i));
                        default:
                            return this.$h(t);
                    }
                }),
                (t.prototype.Ln = function (t) {
                    switch (this.Ni.mode) {
                        case 2:
                        case 3:
                            return this.Kh().format(t);
                        default:
                            return this.$h(t);
                    }
                }),
                (t.prototype.Xh = function (t) {
                    return this.$h(t, l(this.Zh()).Kh());
                }),
                (t.prototype.Jh = function (t, i) {
                    return (t = ut(t, i)), pt.format(t);
                }),
                (t.prototype.Gh = function () {
                    return this.Hn;
                }),
                (t.prototype.Qh = function (t) {
                    this.zn = { In: t, Rn: !1 };
                }),
                (t.prototype.Wi = function () {
                    this.Hn.forEach(function (t) {
                        return t.Wi();
                    });
                }),
                (t.prototype.rh = function () {
                    this.Kn = null;
                    var t = this.Zh(),
                        i = 100;
                    null !== t && (i = Math.round(1 / t.ts())),
                        (this.Zn = gt),
                        this.lh() ? ((this.Zn = pt), (i = 100)) : this.fh() ? ((this.Zn = new G(100, 1)), (i = 100)) : null !== t && (this.Zn = t.Kh()),
                        (this.th = new wt(this, i, this.ih.bind(this), this.nh.bind(this))),
                        this.th.Cn();
                }),
                (t.prototype.Ph = function () {
                    this.Yn = null;
                }),
                (t.prototype.Zh = function () {
                    return this.Hn[0] || null;
                }),
                (t.prototype.gh = function () {
                    return this.dh() ? this.Ni.scaleMargins.bottom * this.Mt() + this.jn : this.Ni.scaleMargins.top * this.Mt() + this.Wn;
                }),
                (t.prototype.yh = function () {
                    return this.dh() ? this.Ni.scaleMargins.top * this.Mt() + this.Wn : this.Ni.scaleMargins.bottom * this.Mt() + this.jn;
                }),
                (t.prototype.xh = function () {
                    this.zn.Rn || ((this.zn.Rn = !0), this.ns());
                }),
                (t.prototype.ah = function () {
                    this.Fn = null;
                }),
                (t.prototype.nh = function (t, i) {
                    if ((this.xh(), this.ti())) return 0;
                    t = this.En() && t ? ft(t) : t;
                    var n = l(this.kh()),
                        h = this.yh() + ((this.ph() - 1) * (t - n.fn())) / n.vn();
                    return this.Nh(h);
                }),
                (t.prototype.ih = function (t, i) {
                    if ((this.xh(), this.ti())) return 0;
                    var n = this.Nh(t),
                        h = l(this.kh()),
                        s = h.fn() + h.vn() * ((n - this.yh()) / (this.ph() - 1));
                    return this.En() ? ct(s) : s;
                }),
                (t.prototype.Mh = function () {
                    (this.Kn = null), this.th.Cn();
                }),
                (t.prototype.ns = function () {
                    var t = this.zn.In;
                    if (null !== t) {
                        for (var i = null, n = 0, h = 0, s = 0, r = this.Gh(); s < r.length; s++) {
                            var e = r[s];
                            if (e.q()) {
                                var u = e.H();
                                if (null !== u) {
                                    var a = e.hs(t.ss(), t.rs()),
                                        o = a && a.kh();
                                    if (null !== o) {
                                        switch (this.Ni.mode) {
                                            case 1:
                                                o = vt(o);
                                                break;
                                            case 2:
                                                o = at(o, u.X);
                                                break;
                                            case 3:
                                                o = lt(o, u.X);
                                        }
                                        if (((i = null === i ? o : i._n(l(o))), null !== a)) {
                                            var f = a.es();
                                            null !== f && ((n = Math.max(n, f.above)), (h = Math.max(n, f.below)));
                                        }
                                    }
                                }
                            }
                        }
                        if (((n === this.Wn && h === this.jn) || ((this.Wn = n), (this.jn = h), (this.Kn = null), this.ah()), null !== i)) {
                            if (i.fn() === i.cn()) {
                                var c = this.Zh(),
                                    v = 5 * (null === c || this.lh() || this.fh() ? 1 : c.ts());
                                i = new it(i.fn() - v, i.cn() + v);
                            }
                            this.wh(i);
                        } else null === this.Vn && this.wh(new it(-0.5, 0.5));
                        this.zn.Rn = !0;
                    }
                }),
                (t.prototype.Ch = function () {
                    return this.lh() ? ut : this.fh() ? ot : this.En() ? ft : null;
                }),
                (t.prototype.$h = function (t, i) {
                    return void 0 === this.Qn.priceFormatter ? (void 0 === i && (i = this.Kh()), i.format(t)) : this.Qn.priceFormatter(t);
                }),
                t
            );
        })();
    function kt(t) {
        void 0 !== t.borderColor && ((t.borderUpColor = t.borderColor), (t.borderDownColor = t.borderColor)), void 0 !== t.wickColor && ((t.wickUpColor = t.wickColor), (t.wickDownColor = t.wickColor));
    }
    !(function (t) {
        (t[(t.Disabled = 0)] = "Disabled"), (t[(t.Continuous = 1)] = "Continuous"), (t[(t.OnDataUpdate = 2)] = "OnDataUpdate");
    })(bt || (bt = {})),
        (function (t) {
            (t[(t.LastBar = 0)] = "LastBar"), (t[(t.LastVisible = 1)] = "LastVisible");
        })(mt || (mt = {}));
    var xt = function (t) {
        return t.getUTCFullYear();
    };
    function Nt(t, i, n) {
        return i
            .replace(
                /yyyy/g,
                (function (t) {
                    return J(xt(t), 4);
                })(t)
            )
            .replace(
                /yy/g,
                (function (t) {
                    return J(xt(t) % 100, 2);
                })(t)
            )
            .replace(
                /MMMM/g,
                (function (t, i) {
                    return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, { month: "long" });
                })(t, n)
            )
            .replace(
                /MMM/g,
                (function (t, i) {
                    return new Date(t.getUTCFullYear(), t.getUTCMonth(), 1).toLocaleString(i, { month: "short" });
                })(t, n)
            )
            .replace(
                /MM/g,
                (function (t) {
                    return J(
                        (function (t) {
                            return t.getUTCMonth() + 1;
                        })(t),
                        2
                    );
                })(t)
            )
            .replace(
                /dd/g,
                (function (t) {
                    return J(
                        (function (t) {
                            return t.getUTCDate();
                        })(t),
                        2
                    );
                })(t)
            );
    }
    var St = (function () {
            function t(t, i) {
                void 0 === t && (t = "yyyy-MM-dd"), void 0 === i && (i = "default"), (this.us = t), (this.os = i);
            }
            return (
                (t.prototype.ls = function (t) {
                    return Nt(t, this.us, this.os);
                }),
                t
            );
        })(),
        Ct = (function () {
            function t(t) {
                this.fs = t || "%h:%m:%s";
            }
            return (
                (t.prototype.ls = function (t) {
                    return this.fs.replace("%h", J(t.getUTCHours(), 2)).replace("%m", J(t.getUTCMinutes(), 2)).replace("%s", J(t.getUTCSeconds(), 2));
                }),
                t
            );
        })(),
        Dt = { cs: "yyyy-MM-dd", vs: "%h:%m:%s", _s: " ", ds: "default" },
        Tt = (function () {
            function t(t) {
                void 0 === t && (t = {});
                var i = e(e({}, Dt), t);
                (this.ws = new St(i.cs, i.ds)), (this.Ms = new Ct(i.vs)), (this.bs = i._s);
            }
            return (
                (t.prototype.ls = function (t) {
                    return "" + this.ws.ls(t) + this.bs + this.Ms.ls(t);
                }),
                t
            );
        })();
    var At = (function () {
            function t(t, i) {
                void 0 === i && (i = 50), (this.ps = 0), (this.gs = 1), (this.ys = 1), (this.ks = new Map()), (this.xs = new Map()), (this.Ns = t), (this.Ss = i);
            }
            return (
                (t.prototype.ls = function (t) {
                    var i = void 0 === t.Cs ? new Date(1e3 * t.Ds).getTime() : new Date(Date.UTC(t.Cs.year, t.Cs.month - 1, t.Cs.day)).getTime(),
                        n = this.ks.get(i);
                    if (void 0 !== n) return n.Ts;
                    if (this.ps === this.Ss) {
                        var h = this.xs.get(this.ys);
                        this.xs.delete(this.ys), this.ks.delete(o(h)), this.ys++, this.ps--;
                    }
                    var s = this.Ns(t);
                    return this.ks.set(i, { Ts: s, As: this.gs }), this.xs.set(this.gs, i), this.ps++, this.gs++, s;
                }),
                t
            );
        })(),
        Lt = (function () {
            function t(t, i) {
                a(t <= i, "right should be >= left"), (this.Ls = t), (this.Es = i);
            }
            return (
                (t.prototype.ss = function () {
                    return this.Ls;
                }),
                (t.prototype.rs = function () {
                    return this.Es;
                }),
                (t.prototype.Bs = function () {
                    return this.Es - this.Ls + 1;
                }),
                (t.prototype.Os = function (t) {
                    return this.Ls <= t && t <= this.Es;
                }),
                (t.prototype.on = function (t) {
                    return this.Ls === t.ss() && this.Es === t.rs();
                }),
                t
            );
        })();
    function Et(t, i) {
        return null === t || null === i ? t === i : t.on(i);
    }
    var Bt,
        Ot = (function () {
            function t() {
                (this.Fs = new Map()), (this.ks = null);
            }
            return (
                (t.prototype.Vs = function (t) {
                    var i = this;
                    (this.ks = null),
                        this.Fs.clear(),
                        t.forEach(function (t, n) {
                            var h = i.Fs.get(t.Ps);
                            void 0 === h && ((h = []), i.Fs.set(t.Ps, h)), h.push({ zs: n, C: t.C, Rs: t.Ps });
                        });
                }),
                (t.prototype.Is = function (t, i) {
                    var n = Math.ceil(i / t);
                    return (null !== this.ks && this.ks.Ws === n) || (this.ks = { Bn: this.js(n), Ws: n }), this.ks.Bn;
                }),
                (t.prototype.js = function (t) {
                    for (
                        var i = [],
                            n = 0,
                            h = Array.from(this.Fs.keys()).sort(function (t, i) {
                                return i - t;
                            });
                        n < h.length;
                        n++
                    ) {
                        var s = h[n];
                        if (this.Fs.get(s)) {
                            var r = i;
                            i = [];
                            for (var e = r.length, u = 0, a = o(this.Fs.get(s)), l = a.length, f = 1 / 0, c = -1 / 0, v = 0; v < l; v++) {
                                for (var _ = a[v], d = _.zs; u < e; ) {
                                    var w = r[u],
                                        M = w.zs;
                                    if (!(M < d)) {
                                        f = M;
                                        break;
                                    }
                                    u++, i.push(w), (c = M), (f = 1 / 0);
                                }
                                f - d >= t && d - c >= t && (i.push(_), (c = d));
                            }
                            for (; u < e; u++) i.push(r[u]);
                        }
                    }
                    return i;
                }),
                t
            );
        })(),
        Ft = (function () {
            function t(t) {
                this.Us = t;
            }
            return (
                (t.prototype.qs = function () {
                    return null === this.Us ? null : new Lt(Math.floor(this.Us.ss()), Math.ceil(this.Us.rs()));
                }),
                (t.prototype.Hs = function () {
                    return this.Us;
                }),
                (t.Ys = function () {
                    return new t(null);
                }),
                t
            );
        })();
    !(function (t) {
        (t[(t.Year = 0)] = "Year"), (t[(t.Month = 1)] = "Month"), (t[(t.DayOfMonth = 2)] = "DayOfMonth"), (t[(t.Time = 3)] = "Time"), (t[(t.TimeWithSeconds = 4)] = "TimeWithSeconds");
    })(Bt || (Bt = {}));
    var Vt,
        Pt = (function () {
            function t(t, i, n) {
                (this.Ks = 0),
                    (this.$s = null),
                    (this.Xs = []),
                    (this.Xn = null),
                    (this.$n = null),
                    (this.Zs = new Ot()),
                    (this.Js = new Map()),
                    (this.Gs = Ft.Ys()),
                    (this.Qs = !0),
                    (this.tr = new tt()),
                    (this.ir = new tt()),
                    (this.nr = new tt()),
                    (this.hr = null),
                    (this.sr = null),
                    (this.rr = []),
                    (this.Ni = i),
                    (this.Qn = n),
                    (this.er = i.rightOffset),
                    (this.ur = i.barSpacing),
                    (this.si = t),
                    this.ar();
            }
            return (
                (t.prototype.ct = function () {
                    return this.Ni;
                }),
                (t.prototype.lr = function (t) {
                    c(this.Qn, t), this.cr(), this.ar();
                }),
                (t.prototype.sh = function (t, i) {
                    var n;
                    c(this.Ni, t),
                        this.Ni.fixLeftEdge && this.vr(),
                        this.Ni.fixRightEdge && this._r(),
                        void 0 !== t.barSpacing && this.si.dr(t.barSpacing),
                        void 0 !== t.rightOffset && this.si.wr(t.rightOffset),
                        void 0 !== t.minBarSpacing && this.si.dr(null !== (n = t.barSpacing) && void 0 !== n ? n : this.ur),
                        this.cr(),
                        this.ar(),
                        this.nr.sn();
                }),
                (t.prototype.ri = function (t) {
                    var i;
                    return (null === (i = this.Xs[t]) || void 0 === i ? void 0 : i.C) || null;
                }),
                (t.prototype.Mr = function (t, i) {
                    if (this.Xs.length < 1) return null;
                    if (t.Ds > this.Xs[this.Xs.length - 1].C.Ds) return i ? this.Xs.length - 1 : null;
                    for (var n = 0; n < this.Xs.length; ++n) {
                        if (t.Ds === this.Xs[n].C.Ds) return n;
                        if (t.Ds < this.Xs[n].C.Ds) return i ? n : null;
                    }
                    return null;
                }),
                (t.prototype.ti = function () {
                    return 0 === this.Ks || 0 === this.Xs.length;
                }),
                (t.prototype.br = function () {
                    return this.mr(), this.Gs.qs();
                }),
                (t.prototype.pr = function () {
                    return this.mr(), this.Gs.Hs();
                }),
                (t.prototype.gr = function () {
                    var t = this.br();
                    if (null === t) return null;
                    var i = { from: t.ss(), to: t.rs() };
                    return this.yr(i);
                }),
                (t.prototype.yr = function (t) {
                    var i = Math.round(t.from),
                        n = Math.round(t.to),
                        h = l(this.kr()),
                        s = l(this.Nr());
                    return { from: l(this.ri(Math.max(h, i))), to: l(this.ri(Math.min(s, n))) };
                }),
                (t.prototype.Sr = function (t) {
                    return { from: l(this.Mr(t.from, !0)), to: l(this.Mr(t.to, !0)) };
                }),
                (t.prototype.Cr = function () {
                    return this.Zs;
                }),
                (t.prototype.wt = function () {
                    return this.Ks;
                }),
                (t.prototype.Dr = function (t) {
                    if (isFinite(t) && !(t <= 0) && this.Ks !== t) {
                        if (this.Ni.lockVisibleTimeRangeOnResize && this.Ks) {
                            var i = (this.ur * t) / this.Ks;
                            this.ur = i;
                        }
                        if (this.Ni.fixLeftEdge) {
                            var n = this.br();
                            if (null !== n)
                                if (n.ss() <= 0) {
                                    var h = this.Ks - t;
                                    this.er -= Math.round(h / this.ur) + 1;
                                }
                        }
                        (this.Ks = t), (this.Qs = !0), this.Tr(), this.Ar();
                    }
                }),
                (t.prototype.G = function (t) {
                    if (this.ti() || !_(t)) return 0;
                    var i = this.Lr() + this.er - t;
                    return this.Ks - (i + 0.5) * this.ur - 1;
                }),
                (t.prototype.Er = function (t, i) {
                    for (var n = this.Lr(), h = void 0 === i ? 0 : i.from, s = void 0 === i ? t.length : i.to, r = h; r < s; r++) {
                        var e = t[r].C,
                            u = n + this.er - e,
                            a = this.Ks - (u + 0.5) * this.ur - 1;
                        t[r].p = a;
                    }
                }),
                (t.prototype.Br = function (t) {
                    return Math.ceil(this.Or(t));
                }),
                (t.prototype.wr = function (t) {
                    (this.Qs = !0), (this.er = t), this.Ar(), this.si.Fr(), this.si.Vr();
                }),
                (t.prototype.Pr = function () {
                    return this.ur;
                }),
                (t.prototype.dr = function (t) {
                    this.zr(t), this.Ar(), this.si.Fr(), this.si.Vr();
                }),
                (t.prototype.Rr = function () {
                    return this.er;
                }),
                (t.prototype.Bn = function () {
                    if (this.ti()) return null;
                    if (null !== this.sr) return this.sr;
                    for (
                        var t = this.ur,
                            i = 5 * (this.si.ct().layout.fontSize + 4),
                            n = Math.round(i / t),
                            h = l(this.br()),
                            s = Math.max(h.ss(), h.ss() - n),
                            r = Math.max(h.rs(), h.rs() - n),
                            e = this.Zs.Is(t, i),
                            u = this.kr() + n,
                            a = this.Nr() - n,
                            o = 0,
                            f = 0,
                            c = e;
                        f < c.length;
                        f++
                    ) {
                        var v = c[f];
                        if (s <= v.zs && v.zs <= r) {
                            var _ = this.ri(v.zs);
                            if (null !== _) {
                                var d = void 0;
                                o < this.rr.length ? (((d = this.rr[o]).Tn = this.G(v.zs)), (d.An = this.Ir(_, v.Rs)), (d.Rs = v.Rs)) : ((d = { Wr: !1, Tn: this.G(v.zs), An: this.Ir(_, v.Rs), Rs: v.Rs }), this.rr.push(d)),
                                    this.ur > i / 2 ? (d.Wr = !1) : (d.Wr = (this.Ni.fixLeftEdge && v.zs <= u) || (this.Ni.fixRightEdge && v.zs >= a)),
                                    o++;
                            }
                        }
                    }
                    return (this.rr.length = o), (this.sr = this.rr), this.rr;
                }),
                (t.prototype.jr = function () {
                    (this.Qs = !0), this.dr(this.Ni.barSpacing), this.wr(this.Ni.rightOffset);
                }),
                (t.prototype.Ur = function (t) {
                    (this.Qs = !0), (this.$s = t), this.Ar(), this.vr();
                }),
                (t.prototype.qr = function (t, i) {
                    var n = this.Or(t),
                        h = this.Pr(),
                        s = h + i * (h / 10);
                    this.dr(s), this.Ni.rightBarStaysOnScroll || this.wr(this.Rr() + (n - this.Or(t)));
                }),
                (t.prototype.Wh = function (t) {
                    this.Xn && this.Yh(), null === this.$n && null === this.hr && (this.ti() || ((this.$n = t), this.Hr()));
                }),
                (t.prototype.jh = function (t) {
                    if (null !== this.hr) {
                        var i = nt(this.Ks - t, 0, this.Ks),
                            n = nt(this.Ks - l(this.$n), 0, this.Ks);
                        0 !== i && 0 !== n && this.dr((this.hr.Pr * i) / n);
                    }
                }),
                (t.prototype.Uh = function () {
                    null !== this.$n && ((this.$n = null), this.Yr());
                }),
                (t.prototype.qh = function (t) {
                    null === this.Xn && null === this.hr && (this.ti() || ((this.Xn = t), this.Hr()));
                }),
                (t.prototype.Hh = function (t) {
                    if (null !== this.Xn) {
                        var i = (this.Xn - t) / this.Pr();
                        (this.er = l(this.hr).Rr + i), (this.Qs = !0), this.Ar();
                    }
                }),
                (t.prototype.Yh = function () {
                    null !== this.Xn && ((this.Xn = null), this.Yr());
                }),
                (t.prototype.Kr = function () {
                    this.$r(this.Ni.rightOffset);
                }),
                (t.prototype.$r = function (t, i) {
                    var n = this;
                    if ((void 0 === i && (i = 400), !isFinite(t))) throw new RangeError("offset is required and must be finite number");
                    if (!isFinite(i) || i <= 0) throw new RangeError("animationDuration (optional) must be finite positive number");
                    var h = this.er,
                        s = performance.now(),
                        r = function () {
                            var e = (performance.now() - s) / i,
                                u = e >= 1,
                                a = u ? t : h + (t - h) * e;
                            n.wr(a), u || setTimeout(r, 20);
                        };
                    r();
                }),
                (t.prototype.V = function (t) {
                    (this.Qs = !0), (this.Xs = t), this.Zs.Vs(t), this.Ar();
                }),
                (t.prototype.Xr = function () {
                    return this.tr;
                }),
                (t.prototype.Zr = function () {
                    return this.ir;
                }),
                (t.prototype.Jr = function () {
                    return this.nr;
                }),
                (t.prototype.Lr = function () {
                    return this.$s || 0;
                }),
                (t.prototype.Gr = function (t) {
                    var i = t.Bs();
                    this.zr(this.Ks / i), (this.er = t.rs() - this.Lr()), this.Ar(), (this.Qs = !0), this.si.Fr(), this.si.Vr();
                }),
                (t.prototype.Qr = function () {
                    var t = this.kr(),
                        i = this.Nr();
                    null !== t && null !== i && this.Gr(new Lt(t, i + this.Ni.rightOffset));
                }),
                (t.prototype.te = function (t) {
                    var i = new Lt(t.from, t.to);
                    this.Gr(i);
                }),
                (t.prototype.ei = function (t) {
                    return void 0 !== this.Qn.timeFormatter ? this.Qn.timeFormatter(t.Cs || t.Ds) : this.ie.ls(new Date(1e3 * t.Ds));
                }),
                (t.prototype.kr = function () {
                    return 0 === this.Xs.length ? null : 0;
                }),
                (t.prototype.Nr = function () {
                    return 0 === this.Xs.length ? null : this.Xs.length - 1;
                }),
                (t.prototype.ne = function (t) {
                    return (this.Ks - 1 - t) / this.ur;
                }),
                (t.prototype.Or = function (t) {
                    var i = this.ne(t),
                        n = this.Lr() + this.er - i;
                    return Math.round(1e6 * n) / 1e6;
                }),
                (t.prototype.zr = function (t) {
                    var i = this.ur;
                    (this.ur = t), this.Tr(), i !== this.ur && ((this.Qs = !0), this.he());
                }),
                (t.prototype.mr = function () {
                    if (this.Qs)
                        if (((this.Qs = !1), this.ti())) this.se(Ft.Ys());
                        else {
                            var t = this.Lr(),
                                i = this.Ks / this.ur,
                                n = this.er + t,
                                h = new Lt(n - i + 1, n);
                            this.se(new Ft(h));
                        }
                }),
                (t.prototype.Tr = function () {
                    var t = this.re();
                    if ((this.ur < t && ((this.ur = t), (this.Qs = !0)), 0 !== this.Ks)) {
                        var i = 0.5 * this.Ks;
                        this.ur > i && ((this.ur = i), (this.Qs = !0));
                    }
                }),
                (t.prototype.re = function () {
                    return this.Ni.fixLeftEdge && this.Ni.fixRightEdge && 0 !== this.Xs.length ? this.Ks / this.Xs.length : this.Ni.minBarSpacing;
                }),
                (t.prototype.Ar = function () {
                    var t = this.ee();
                    this.er > t && ((this.er = t), (this.Qs = !0));
                    var i = this.ue();
                    null !== i && this.er < i && ((this.er = i), (this.Qs = !0));
                }),
                (t.prototype.ue = function () {
                    var t = this.kr(),
                        i = this.$s;
                    return null === t || null === i ? null : t - i - 1 + (this.Ni.fixLeftEdge ? this.Ks / this.ur : Math.min(2, this.Xs.length));
                }),
                (t.prototype.ee = function () {
                    return this.Ni.fixRightEdge ? 0 : this.Ks / this.ur - Math.min(2, this.Xs.length);
                }),
                (t.prototype.Hr = function () {
                    this.hr = { Pr: this.Pr(), Rr: this.Rr() };
                }),
                (t.prototype.Yr = function () {
                    this.hr = null;
                }),
                (t.prototype.Ir = function (t, i) {
                    var n = this,
                        h = this.Js.get(i);
                    return (
                        void 0 === h &&
                            ((h = new At(function (t) {
                                return n.ae(t, i);
                            })),
                            this.Js.set(i, h)),
                        h.ls(t)
                    );
                }),
                (t.prototype.ae = function (t, i) {
                    var n,
                        h,
                        s = this.Ni.timeVisible;
                    return (
                        (h = i < 20 && s ? (this.Ni.secondsVisible ? 4 : 3) : i < 40 && s ? 3 : i < 50 || i < 60 ? 2 : i < 70 ? 1 : 0),
                        void 0 !== this.Ni.tickMarkFormatter
                            ? this.Ni.tickMarkFormatter(null !== (n = t.Cs) && void 0 !== n ? n : t.Ds, h, this.Qn.locale)
                            : (function (t, i, n) {
                                  var h = {};
                                  switch (i) {
                                      case 0:
                                          h.year = "numeric";
                                          break;
                                      case 1:
                                          h.month = "short";
                                          break;
                                      case 2:
                                          h.day = "numeric";
                                          break;
                                      case 3:
                                          (h.hour12 = !1), (h.hour = "2-digit"), (h.minute = "2-digit");
                                          break;
                                      case 4:
                                          (h.hour12 = !1), (h.hour = "2-digit"), (h.minute = "2-digit"), (h.second = "2-digit");
                                  }
                                  var s = void 0 === t.Cs ? new Date(1e3 * t.Ds) : new Date(Date.UTC(t.Cs.year, t.Cs.month - 1, t.Cs.day));
                                  return new Date(s.getUTCFullYear(), s.getUTCMonth(), s.getUTCDate(), s.getUTCHours(), s.getUTCMinutes(), s.getUTCSeconds(), s.getUTCMilliseconds()).toLocaleString(n, h);
                              })(t, h, this.Qn.locale)
                    );
                }),
                (t.prototype.se = function (t) {
                    var i = this.Gs;
                    (this.Gs = t), Et(i.qs(), this.Gs.qs()) || this.tr.sn(), Et(i.Hs(), this.Gs.Hs()) || this.ir.sn(), this.he();
                }),
                (t.prototype.he = function () {
                    this.sr = null;
                }),
                (t.prototype.cr = function () {
                    this.he(), this.Js.clear();
                }),
                (t.prototype.ar = function () {
                    var t = this.Qn.dateFormat;
                    this.Ni.timeVisible ? (this.ie = new Tt({ cs: t, vs: this.Ni.secondsVisible ? "%h:%m:%s" : "%h:%m", _s: "   ", ds: this.Qn.locale })) : (this.ie = new St(t, this.Qn.locale));
                }),
                (t.prototype.vr = function () {
                    if (this.Ni.fixLeftEdge) {
                        var t = this.kr();
                        if (null !== t) {
                            var i = this.br();
                            if (null !== i) {
                                var n = i.ss() - t;
                                if (n < 0) {
                                    var h = this.er - n - 1;
                                    this.wr(h);
                                }
                                this.Tr();
                            }
                        }
                    }
                }),
                (t.prototype._r = function () {
                    this.Ar(), this.Tr();
                }),
                t
            );
        })();
    function zt(t) {
        return !v(t) && !d(t);
    }
    function Rt(t) {
        return v(t);
    }
    !(function (t) {
        (t.Solid = "solid"), (t.VerticalGradient = "gradient");
    })(Vt || (Vt = {}));
    var It = "'Trebuchet MS', Roboto, Ubuntu, sans-serif";
    function Wt(t, i, n) {
        return void 0 !== n ? (n += " ") : (n = ""), void 0 === i && (i = It), "" + n + t + "px " + i;
    }
    var jt = (function () {
        function t(t) {
            (this.oe = { Tt: 1, Dt: 4, Pt: NaN, Nt: "", le: "", et: "", Lt: 0, Et: 0, Bt: 0, At: 0, Vt: 0 }), (this.O = t);
        }
        return (
            (t.prototype.ct = function () {
                var t = this.oe,
                    i = this.fe(),
                    n = this.ce();
                return (
                    (t.Pt === i && t.le === n) ||
                        ((t.Pt = i), (t.le = n), (t.Nt = Wt(i, n)), (t.At = Math.floor(i / 3.5)), (t.Lt = t.At), (t.Et = Math.max(Math.ceil(i / 2 - t.Dt / 2), 0)), (t.Bt = Math.ceil(i / 2 + t.Dt / 2)), (t.Vt = Math.round(i / 10))),
                    (t.et = this.ve()),
                    this.oe
                );
            }),
            (t.prototype.ve = function () {
                return this.O.ct().layout.textColor;
            }),
            (t.prototype.fe = function () {
                return this.O.ct().layout.fontSize;
            }),
            (t.prototype.ce = function () {
                return this.O.ct().layout.fontFamily;
            }),
            t
        );
    })();
    function Ut(t) {
        return "left" === t || "right" === t;
    }
    var qt = (function () {
            function t(t) {
                (this._e = new Map()), (this.de = !1), (this.we = []), (this.Me = t);
            }
            return (
                (t.prototype.be = function (t, i) {
                    var n = (function (t, i) {
                        return void 0 === t ? i : { me: Math.max(t.me, i.me), _h: t._h || i._h };
                    })(this._e.get(t), i);
                    this._e.set(t, n);
                }),
                (t.prototype.pe = function () {
                    return this.Me;
                }),
                (t.prototype.ge = function (t) {
                    var i = this._e.get(t);
                    return void 0 === i ? { me: this.Me } : { me: Math.max(this.Me, i.me), _h: i._h };
                }),
                (t.prototype.ye = function () {
                    this.we = [{ ke: 0 }];
                }),
                (t.prototype.xe = function (t) {
                    this.we = [{ ke: 1, X: t }];
                }),
                (t.prototype.Ne = function () {
                    this.we = [{ ke: 4 }];
                }),
                (t.prototype.dr = function (t) {
                    this.we.push({ ke: 2, X: t });
                }),
                (t.prototype.wr = function (t) {
                    this.we.push({ ke: 3, X: t });
                }),
                (t.prototype.Se = function () {
                    return this.we;
                }),
                (t.prototype._n = function (t) {
                    var i = this;
                    (this.de = this.de || t.de), (this.we = this.we.concat(t.we));
                    for (var n = 0, h = t.we; n < h.length; n++) {
                        var s = h[n];
                        this.Ce(s);
                    }
                    (this.Me = Math.max(this.Me, t.Me)),
                        t._e.forEach(function (t, n) {
                            i.be(n, t);
                        });
                }),
                (t.prototype.Ce = function (t) {
                    switch (t.ke) {
                        case 0:
                            this.ye();
                            break;
                        case 1:
                            this.xe(t.X);
                            break;
                        case 2:
                            this.dr(t.X);
                            break;
                        case 3:
                            this.wr(t.X);
                            break;
                        case 4:
                            this.Ne();
                    }
                }),
                t
            );
        })(),
        Ht = (function () {
            function t(t) {
                this.De = t;
            }
            return (
                (t.prototype.format = function (t) {
                    var i = "";
                    return (
                        t < 0 && ((i = "-"), (t = -t)),
                        t < 995 ? i + this.Te(t) : t < 999995 ? i + this.Te(t / 1e3) + "K" : t < 999999995 ? ((t = 1e3 * Math.round(t / 1e3)), i + this.Te(t / 1e6) + "M") : ((t = 1e6 * Math.round(t / 1e6)), i + this.Te(t / 1e9) + "B")
                    );
                }),
                (t.prototype.Te = function (t) {
                    var i = Math.pow(10, this.De);
                    return ((t = Math.round(t * i) / i) >= 1e-15 && t < 1 ? t.toFixed(this.De).replace(/\.?0+$/, "") : String(t)).replace(/(\.[1-9]*)0+$/, function (t, i) {
                        return i;
                    });
                }),
                t
            );
        })();
    function Yt(t, i, n, h) {
        if (0 !== i.length) {
            var s = i[h.from].p,
                r = i[h.from].g;
            t.moveTo(s, r);
            for (var e = h.from + 1; e < h.to; ++e) {
                var u = i[e];
                if (1 === n) {
                    var a = i[e - 1].g,
                        o = u.p;
                    t.lineTo(o, a);
                }
                t.lineTo(u.p, u.g);
            }
        }
    }
    var Kt = (function (t) {
            function i() {
                var i = (null !== t && t.apply(this, arguments)) || this;
                return (i.v = null), i;
            }
            return (
                r(i, t),
                (i.prototype._ = function (t) {
                    this.v = t;
                }),
                (i.prototype.u = function (t) {
                    if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
                        if (((t.lineCap = "butt"), (t.lineJoin = "round"), (t.strokeStyle = this.v.S), (t.lineWidth = this.v.rt), n(t, this.v.ut), (t.lineWidth = 1), t.beginPath(), 1 === this.v.m.length)) {
                            var i = this.v.m[0],
                                h = this.v.Ae / 2;
                            t.moveTo(i.p - h, this.v.Le), t.lineTo(i.p - h, i.g), t.lineTo(i.p + h, i.g), t.lineTo(i.p + h, this.v.Le);
                        } else
                            t.moveTo(this.v.m[this.v.M.from].p, this.v.Le),
                                t.lineTo(this.v.m[this.v.M.from].p, this.v.m[this.v.M.from].g),
                                Yt(t, this.v.m, this.v.Ee, this.v.M),
                                this.v.M.to > this.v.M.from && (t.lineTo(this.v.m[this.v.M.to - 1].p, this.v.Le), t.lineTo(this.v.m[this.v.M.from].p, this.v.Le));
                        t.closePath();
                        var s = t.createLinearGradient(0, 0, 0, this.v.Le);
                        s.addColorStop(0, this.v.Be), s.addColorStop(1, this.v.Oe), (t.fillStyle = s), t.fill();
                    }
                }),
                i
            );
        })(g),
        $t = (function (t) {
            function i() {
                var i = (null !== t && t.apply(this, arguments)) || this;
                return (i.v = null), i;
            }
            return (
                r(i, t),
                (i.prototype._ = function (t) {
                    this.v = t;
                }),
                (i.prototype.u = function (t) {
                    if (null !== this.v && 0 !== this.v.m.length && null !== this.v.M) {
                        if (((t.lineCap = "butt"), (t.lineWidth = this.v.rt), n(t, this.v.ut), (t.strokeStyle = this.v.S), (t.lineJoin = "round"), t.beginPath(), 1 === this.v.m.length)) {
                            var i = this.v.m[0];
                            t.moveTo(i.p - this.v.Ae / 2, i.g), t.lineTo(i.p + this.v.Ae / 2, i.g);
                        } else Yt(t, this.v.m, this.v.Ee, this.v.M);
                        t.stroke();
                    }
                }),
                i
            );
        })(g);
    function Xt(t, i, n, h, s) {
        void 0 === h && (h = 0), void 0 === s && (s = t.length);
        for (var r = s - h; 0 < r; ) {
            var e = r >> 1,
                u = h + e;
            n(t[u], i) ? ((h = u + 1), (r -= e + 1)) : (r = e);
        }
        return h;
    }
    function Zt(t, i, n, h, s) {
        void 0 === h && (h = 0), void 0 === s && (s = t.length);
        for (var r = s - h; 0 < r; ) {
            var e = r >> 1,
                u = h + e;
            n(i, t[u]) ? (r = e) : ((h = u + 1), (r -= e + 1));
        }
        return h;
    }
    function Jt(t, i) {
        return t.C < i;
    }
    function Gt(t, i) {
        return t < i.C;
    }
    function Qt(t, i, n) {
        var h = i.ss(),
            s = i.rs(),
            r = Xt(t, h, Jt),
            e = Zt(t, s, Gt);
        if (!n) return { from: r, to: e };
        var u = r,
            a = e;
        return r > 0 && r < t.length && t[r].C >= h && (u = r - 1), e > 0 && e < t.length && t[e - 1].C <= s && (a = e + 1), { from: u, to: a };
    }
    var ti = (function () {
            function t(t, i, n) {
                (this.Fe = !0), (this.Ve = !0), (this.Pe = !0), (this.ze = []), (this.Re = null), (this.Ie = t), (this.We = i), (this.je = n);
            }
            return (
                (t.prototype.V = function (t) {
                    (this.Fe = !0), "data" === t && (this.Ve = !0), "options" === t && (this.Pe = !0);
                }),
                (t.prototype.Ue = function () {
                    this.Ve && (this.qe(), (this.Ve = !1)), this.Fe && (this.He(), (this.Fe = !1)), this.Pe && (this.Ye(), (this.Pe = !1));
                }),
                (t.prototype.Ke = function () {
                    this.Re = null;
                }),
                (t.prototype.He = function () {
                    var t = this.Ie.$(),
                        i = this.We.j();
                    if ((this.Ke(), !i.ti() && !t.ti())) {
                        var n = i.br();
                        if (null !== n && 0 !== this.Ie.Hi().$e()) {
                            var h = this.Ie.H();
                            null !== h && ((this.Re = Qt(this.ze, n, this.je)), this.Xe(t, i, h.X));
                        }
                    }
                }),
                t
            );
        })(),
        ii = (function (t) {
            function i(i, n) {
                return t.call(this, i, n, !0) || this;
            }
            return (
                r(i, t),
                (i.prototype.Xe = function (t, i, n) {
                    i.Er(this.ze, m(this.Re)), t.Sh(this.ze, n, m(this.Re));
                }),
                (i.prototype.Ze = function (t, i) {
                    return { C: t, D: i, p: NaN, g: NaN };
                }),
                (i.prototype.Ye = function () {}),
                (i.prototype.qe = function () {
                    var t = this,
                        i = this.Ie.Je();
                    this.ze = this.Ie.Hi()
                        .Ge()
                        .map(function (n) {
                            var h = n.X[3];
                            return t.Qe(n.zs, h, i);
                        });
                }),
                i
            );
        })(ti),
        ni = (function (t) {
            function i(i, n) {
                var h = t.call(this, i, n) || this;
                return (h.ot = new p()), (h.tu = new Kt()), (h.iu = new $t()), h.ot.i([h.tu, h.iu]), h;
            }
            return (
                r(i, t),
                (i.prototype.R = function (t, i) {
                    if (!this.Ie.q()) return null;
                    var n = this.Ie.ct();
                    this.Ue();
                    var h = { Ee: n.lineType, m: this.ze, S: n.lineColor, ut: n.lineStyle, rt: n.lineWidth, Be: n.topColor, Oe: n.bottomColor, Le: t, M: this.Re, Ae: this.We.j().Pr() };
                    return this.tu._(h), this.iu._(h), this.ot;
                }),
                (i.prototype.Qe = function (t, i) {
                    return this.Ze(t, i);
                }),
                i
            );
        })(ii);
    var hi = (function () {
            function t() {
                (this.tt = null), (this.nu = 0), (this.hu = 0);
            }
            return (
                (t.prototype._ = function (t) {
                    this.tt = t;
                }),
                (t.prototype.h = function (t, i, n, h) {
                    if (null !== this.tt && 0 !== this.tt.Hi.length && null !== this.tt.M) {
                        if (((this.nu = this.su(i)), this.nu >= 2)) Math.max(1, Math.floor(i)) % 2 != this.nu % 2 && this.nu--;
                        this.hu = this.tt.ru ? Math.min(this.nu, Math.floor(i)) : this.nu;
                        for (var s = null, r = this.hu <= this.nu && this.tt.Pr >= Math.floor(1.5 * i), e = this.tt.M.from; e < this.tt.M.to; ++e) {
                            var u = this.tt.Hi[e];
                            s !== u.et && ((t.fillStyle = u.et), (s = u.et));
                            var a = Math.floor(0.5 * this.hu),
                                o = Math.round(u.p * i),
                                l = o - a,
                                f = this.hu,
                                c = l + f - 1,
                                v = Math.min(u.Ah, u.Lh),
                                _ = Math.max(u.Ah, u.Lh),
                                d = Math.round(v * i) - a,
                                w = Math.round(_ * i) + a,
                                M = Math.max(w - d, this.hu);
                            t.fillRect(l, d, f, M);
                            var b = Math.ceil(1.5 * this.nu);
                            if (r) {
                                if (this.tt.eu) {
                                    var m = o - b,
                                        p = Math.max(d, Math.round(u.Th * i) - a),
                                        g = p + f - 1;
                                    g > d + M - 1 && (p = (g = d + M - 1) - f + 1), t.fillRect(m, p, l - m, g - p + 1);
                                }
                                var y = o + b,
                                    k = Math.max(d, Math.round(u.Eh * i) - a),
                                    x = k + f - 1;
                                x > d + M - 1 && (k = (x = d + M - 1) - f + 1), t.fillRect(c + 1, k, y - c, x - k + 1);
                            }
                        }
                    }
                }),
                (t.prototype.su = function (t) {
                    var i = Math.floor(t);
                    return Math.max(
                        i,
                        Math.floor(
                            (function (t, i) {
                                return Math.floor(0.3 * t * i);
                            })(l(this.tt).Pr, t)
                        )
                    );
                }),
                t
            );
        })(),
        si = (function (t) {
            function i(i, n) {
                return t.call(this, i, n, !1) || this;
            }
            return (
                r(i, t),
                (i.prototype.Xe = function (t, i, n) {
                    i.Er(this.ze, m(this.Re)), t.Dh(this.ze, n, m(this.Re));
                }),
                (i.prototype.uu = function (t, i, n) {
                    return { C: t, open: i.X[0], high: i.X[1], low: i.X[2], close: i.X[3], p: NaN, Th: NaN, Ah: NaN, Lh: NaN, Eh: NaN };
                }),
                (i.prototype.qe = function () {
                    var t = this,
                        i = this.Ie.Je();
                    this.ze = this.Ie.Hi()
                        .Ge()
                        .map(function (n) {
                            return t.Qe(n.zs, n, i);
                        });
                }),
                i
            );
        })(ti),
        ri = (function (t) {
            function i() {
                var i = (null !== t && t.apply(this, arguments)) || this;
                return (i.ot = new hi()), i;
            }
            return (
                r(i, t),
                (i.prototype.R = function (t, i) {
                    if (!this.Ie.q()) return null;
                    var n = this.Ie.ct();
                    this.Ue();
                    var h = { Hi: this.ze, Pr: this.We.j().Pr(), eu: n.openVisible, ru: n.thinBars, M: this.Re };
                    return this.ot._(h), this.ot;
                }),
                (i.prototype.Ye = function () {
                    var t = this;
                    this.ze.forEach(function (i) {
                        i.et = t.Ie.Je().ou(i.C).au;
                    });
                }),
                (i.prototype.Qe = function (t, i, n) {
                    return e(e({}, this.uu(t, i, n)), { et: n.ou(t).au });
                }),
                i
            );
        })(si),
        ei = (function () {
            function t() {
                (this.tt = null), (this.nu = 0);
            }
            return (
                (t.prototype._ = function (t) {
                    this.tt = t;
                }),
                (t.prototype.h = function (t, i, n, h) {
                    if (null !== this.tt && 0 !== this.tt.Hi.length && null !== this.tt.M) {
                        if (
                            ((this.nu = (function (t, i) {
                                if (t >= 2.5 && t <= 4) return Math.floor(3 * i);
                                var n = 1 - (0.2 * Math.atan(Math.max(4, t) - 4)) / (0.5 * Math.PI),
                                    h = Math.floor(t * n * i),
                                    s = Math.floor(t * i),
                                    r = Math.min(h, s);
                                return Math.max(Math.floor(i), r);
                            })(this.tt.Pr, i)),
                            this.nu >= 2)
                        )
                            Math.floor(i) % 2 != this.nu % 2 && this.nu--;
                        var s = this.tt.Hi;
                        this.tt.lu && this.fu(t, s, this.tt.M, i), this.tt.cu && this.vu(t, s, this.tt.M, this.tt.Pr, i);
                        var r = this._u(i);
                        (!this.tt.cu || this.nu > 2 * r) && this.du(t, s, this.tt.M, i);
                    }
                }),
                (t.prototype.fu = function (t, i, n, h) {
                    if (null !== this.tt) {
                        var s = "",
                            r = Math.min(Math.floor(h), Math.floor(this.tt.Pr * h));
                        r = Math.max(Math.floor(h), Math.min(r, this.nu));
                        for (var e = Math.floor(0.5 * r), u = null, a = n.from; a < n.to; a++) {
                            var o = i[a];
                            o.wu !== s && ((t.fillStyle = o.wu), (s = o.wu));
                            var l = Math.round(Math.min(o.Th, o.Eh) * h),
                                f = Math.round(Math.max(o.Th, o.Eh) * h),
                                c = Math.round(o.Ah * h),
                                v = Math.round(o.Lh * h),
                                _ = Math.round(h * o.p) - e,
                                d = _ + r - 1;
                            null !== u && ((_ = Math.max(u + 1, _)), (_ = Math.min(_, d)));
                            var w = d - _ + 1;
                            t.fillRect(_, c, w, l - c), t.fillRect(_, f + 1, w, v - f), (u = d);
                        }
                    }
                }),
                (t.prototype._u = function (t) {
                    var i = Math.floor(1 * t);
                    this.nu <= 2 * i && (i = Math.floor(0.5 * (this.nu - 1)));
                    var n = Math.max(Math.floor(t), i);
                    return this.nu <= 2 * n ? Math.max(Math.floor(t), Math.floor(1 * t)) : n;
                }),
                (t.prototype.vu = function (t, i, n, h, s) {
                    if (null !== this.tt)
                        for (var r = "", e = this._u(s), u = null, a = n.from; a < n.to; a++) {
                            var o = i[a];
                            o.Z !== r && ((t.fillStyle = o.Z), (r = o.Z));
                            var l = Math.round(o.p * s) - Math.floor(0.5 * this.nu),
                                f = l + this.nu - 1,
                                c = Math.round(Math.min(o.Th, o.Eh) * s),
                                v = Math.round(Math.max(o.Th, o.Eh) * s);
                            if ((null !== u && ((l = Math.max(u + 1, l)), (l = Math.min(l, f))), this.tt.Pr * s > 2 * e)) P(t, l, c, f - l + 1, v - c + 1, e);
                            else {
                                var _ = f - l + 1;
                                t.fillRect(l, c, _, v - c + 1);
                            }
                            u = f;
                        }
                }),
                (t.prototype.du = function (t, i, n, h) {
                    if (null !== this.tt)
                        for (var s = "", r = this._u(h), e = n.from; e < n.to; e++) {
                            var u = i[e],
                                a = Math.round(Math.min(u.Th, u.Eh) * h),
                                o = Math.round(Math.max(u.Th, u.Eh) * h),
                                l = Math.round(u.p * h) - Math.floor(0.5 * this.nu),
                                f = l + this.nu - 1;
                            if (u.et !== s) {
                                var c = u.et;
                                (t.fillStyle = c), (s = c);
                            }
                            this.tt.cu && ((l += r), (a += r), (f -= r), (o -= r)), a > o || t.fillRect(l, a, f - l + 1, o - a + 1);
                        }
                }),
                t
            );
        })(),
        ui = (function (t) {
            function i() {
                var i = (null !== t && t.apply(this, arguments)) || this;
                return (i.ot = new ei()), i;
            }
            return (
                r(i, t),
                (i.prototype.R = function (t, i) {
                    if (!this.Ie.q()) return null;
                    var n = this.Ie.ct();
                    this.Ue();
                    var h = { Hi: this.ze, Pr: this.We.j().Pr(), lu: n.wickVisible, cu: n.borderVisible, M: this.Re };
                    return this.ot._(h), this.ot;
                }),
                (i.prototype.Ye = function () {
                    var t = this;
                    this.ze.forEach(function (i) {
                        var n = t.Ie.Je().ou(i.C);
                        (i.et = n.au), (i.wu = n.Mu), (i.Z = n.bu);
                    });
                }),
                (i.prototype.Qe = function (t, i, n) {
                    var h = n.ou(t);
                    return e(e({}, this.uu(t, i, n)), { et: h.au, wu: h.Mu, Z: h.bu });
                }),
                i
            );
        })(si),
        ai = (function () {
            function t() {
                (this.tt = null), (this.mu = []);
            }
            return (
                (t.prototype._ = function (t) {
                    (this.tt = t), (this.mu = []);
                }),
                (t.prototype.h = function (t, i, n, h) {
                    if (null !== this.tt && 0 !== this.tt.m.length && null !== this.tt.M) {
                        this.mu.length || this.pu(i);
                        for (var s = Math.max(1, Math.floor(i)), r = Math.round(this.tt.gu * i) - Math.floor(s / 2), e = r + s, u = this.tt.M.from; u < this.tt.M.to; u++) {
                            var a = this.tt.m[u],
                                o = this.mu[u - this.tt.M.from],
                                l = Math.round(a.g * i);
                            t.fillStyle = a.et;
                            var f = void 0,
                                c = void 0;
                            l <= r ? ((f = l), (c = e)) : ((f = r), (c = l - Math.floor(s / 2) + s)), t.fillRect(o.ss, f, o.rs - o.ss + 1, c - f);
                        }
                    }
                }),
                (t.prototype.pu = function (t) {
                    if (null !== this.tt && 0 !== this.tt.m.length && null !== this.tt.M) {
                        var i = Math.ceil(this.tt.Pr * t) <= 1 ? 0 : Math.max(1, Math.floor(t)),
                            n = Math.round(this.tt.Pr * t) - i;
                        this.mu = new Array(this.tt.M.to - this.tt.M.from);
                        for (var h = this.tt.M.from; h < this.tt.M.to; h++) {
                            var s,
                                r = this.tt.m[h],
                                e = Math.round(r.p * t),
                                u = void 0,
                                a = void 0;
                            if (n % 2) (u = e - (s = (n - 1) / 2)), (a = e + s);
                            else (u = e - (s = n / 2)), (a = e + s - 1);
                            this.mu[h - this.tt.M.from] = { ss: u, rs: a, yu: e, ku: r.p * t, C: r.C };
                        }
                        for (h = this.tt.M.from + 1; h < this.tt.M.to; h++) {
                            var o = this.mu[h - this.tt.M.from],
                                l = this.mu[h - this.tt.M.from - 1];
                            o.C === l.C + 1 && o.ss - l.rs !== i + 1 && (l.yu > l.ku ? (l.rs = o.ss - i - 1) : (o.ss = l.rs + i + 1));
                        }
                        var f = Math.ceil(this.tt.Pr * t);
                        for (h = this.tt.M.from; h < this.tt.M.to; h++) {
                            (o = this.mu[h - this.tt.M.from]).rs < o.ss && (o.rs = o.ss);
                            var c = o.rs - o.ss + 1;
                            f = Math.min(c, f);
                        }
                        if (i > 0 && f < 4)
                            for (h = this.tt.M.from; h < this.tt.M.to; h++) {
                                (c = (o = this.mu[h - this.tt.M.from]).rs - o.ss + 1) > f && (o.yu > o.ku ? (o.rs -= 1) : (o.ss += 1));
                            }
                    } else this.mu = [];
                }),
                t
            );
        })();
    function oi(t) {
        return { m: [], Pr: t, gu: NaN, M: null };
    }
    function li(t, i, n) {
        return { C: t, D: i, p: NaN, g: NaN, et: n };
    }
    var fi = (function (t) {
            function i(i, n) {
                var h = t.call(this, i, n, !1) || this;
                return (h.T = new p()), (h.xu = oi(0)), (h.ot = new ai()), h;
            }
            return (
                r(i, t),
                (i.prototype.R = function (t, i) {
                    return this.Ie.q() ? (this.Ue(), this.T) : null;
                }),
                (i.prototype.qe = function () {
                    var t = this.We.j().Pr();
                    this.xu = oi(t);
                    for (var i = 0, n = 0, h = this.Ie.ct().color, s = 0, r = this.Ie.Hi().Ge(); s < r.length; s++) {
                        var e = r[s],
                            u = e.X[3],
                            a = void 0 !== e.et ? e.et : h,
                            o = li(e.zs, u, a);
                        ++i < this.xu.m.length ? (this.xu.m[i] = o) : this.xu.m.push(o), (this.ze[n++] = { C: e.zs, p: 0 });
                    }
                    this.ot._(this.xu), this.T.i([this.ot]);
                }),
                (i.prototype.Ye = function () {}),
                (i.prototype.Ke = function () {
                    t.prototype.Ke.call(this), (this.xu.M = null);
                }),
                (i.prototype.Xe = function (t, i, n) {
                    if (null !== this.Re) {
                        var h = i.Pr(),
                            s = l(i.br()),
                            r = t.K(this.Ie.ct().base, n);
                        i.Er(this.xu.m), t.Sh(this.xu.m, n), (this.xu.gu = r), (this.xu.M = Qt(this.xu.m, s, !1)), (this.xu.Pr = h), this.ot._(this.xu);
                    }
                }),
                i
            );
        })(ti),
        ci = (function (t) {
            function i(i, n) {
                var h = t.call(this, i, n) || this;
                return (h.iu = new $t()), h;
            }
            return (
                r(i, t),
                (i.prototype.R = function (t, i) {
                    if (!this.Ie.q()) return null;
                    var n = this.Ie.ct();
                    this.Ue();
                    var h = { m: this.ze, S: n.color, ut: n.lineStyle, Ee: n.lineType, rt: n.lineWidth, M: this.Re, Ae: this.We.j().Pr() };
                    return this.iu._(h), this.iu;
                }),
                (i.prototype.Qe = function (t, i) {
                    return this.Ze(t, i);
                }),
                i
            );
        })(ii),
        vi = /[2-9]/g,
        _i = (function () {
            function t(t) {
                void 0 === t && (t = 50), (this.ks = new Map()), (this.Nu = 0), (this.Su = Array.from(new Array(t)));
            }
            return (
                (t.prototype.Cu = function () {
                    this.ks.clear(), this.Su.fill(void 0);
                }),
                (t.prototype.Ft = function (t, i, n) {
                    var h = n || vi,
                        s = String(i).replace(h, "0"),
                        r = this.ks.get(s);
                    if (void 0 === r) {
                        if (0 === (r = t.measureText(s).width) && 0 !== i.length) return 0;
                        var e = this.Su[this.Nu];
                        void 0 !== e && this.ks.delete(e), (this.Su[this.Nu] = s), (this.Nu = (this.Nu + 1) % this.Su.length), this.ks.set(s, r);
                    }
                    return r;
                }),
                t
            );
        })(),
        di = (function () {
            function t(t) {
                (this.Du = null), (this.oe = null), (this.Tu = "right"), (this.Ks = 0), (this.Au = t);
            }
            return (
                (t.prototype.Lu = function (t, i, n, h) {
                    (this.Du = t), (this.oe = i), (this.Ks = n), (this.Tu = h);
                }),
                (t.prototype.h = function (t, i) {
                    null !== this.oe && null !== this.Du && this.Du.h(t, this.oe, this.Au, this.Ks, this.Tu, i);
                }),
                t
            );
        })(),
        wi = (function () {
            function t(t, i, n) {
                (this.Eu = t), (this.Au = new _i(50)), (this.Bu = i), (this.O = n), (this.fe = -1), (this.ot = new di(this.Au));
            }
            return (
                (t.prototype.R = function (t, i) {
                    var n = this.O.Ou(this.Bu);
                    if (null === n) return null;
                    var h = n.Fu(this.Bu) ? n.Di() : this.Bu.$();
                    if (null === h) return null;
                    var s = n.Vu(h);
                    if ("overlay" === s) return null;
                    var r = this.O.Pu();
                    return r.Pt !== this.fe && ((this.fe = r.Pt), this.Au.Cu()), this.ot.Lu(this.Eu.Zt(), r, i, s), this.ot;
                }),
                t
            );
        })(),
        Mi = (function () {
            function t() {
                this.tt = null;
            }
            return (
                (t.prototype._ = function (t) {
                    this.tt = t;
                }),
                (t.prototype.h = function (t, i, s, r) {
                    if (null !== this.tt && !1 !== this.tt.q) {
                        var e = Math.round(this.tt.g * i);
                        if (!(e < 0 || e > Math.ceil(this.tt.Mt * i))) {
                            var u = Math.ceil(this.tt.wt * i);
                            (t.lineCap = "butt"), (t.strokeStyle = this.tt.et), (t.lineWidth = Math.floor(this.tt.rt * i)), n(t, this.tt.ut), h(t, e, 0, u);
                        }
                    }
                }),
                t
            );
        })(),
        bi = (function () {
            function t(t) {
                (this.zu = { wt: 0, Mt: 0, g: 0, et: "rgba(0, 0, 0, 0)", rt: 1, ut: 0, q: !1 }), (this.Ru = new Mi()), (this.B = !0), (this.Ie = t), (this.We = t.vt()), this.Ru._(this.zu);
            }
            return (
                (t.prototype.V = function () {
                    this.B = !0;
                }),
                (t.prototype.R = function (t, i) {
                    return this.Ie.q() ? (this.B && (this.Iu(t, i), (this.B = !1)), this.Ru) : null;
                }),
                t
            );
        })(),
        mi = (function (t) {
            function i(i) {
                return t.call(this, i) || this;
            }
            return (
                r(i, t),
                (i.prototype.Iu = function (t, i) {
                    this.zu.q = !1;
                    var n = this.Ie.$(),
                        h = n.uh().uh;
                    if (2 === h || 3 === h) {
                        var s = this.Ie.ct();
                        if (s.baseLineVisible && this.Ie.q()) {
                            var r = this.Ie.H();
                            null !== r && ((this.zu.q = !0), (this.zu.g = n.K(r.X, r.X)), (this.zu.wt = i), (this.zu.Mt = t), (this.zu.et = s.baseLineColor), (this.zu.rt = s.baseLineWidth), (this.zu.ut = s.baseLineStyle));
                        }
                    }
                }),
                i
            );
        })(bi),
        pi = (function () {
            function t() {
                this.tt = null;
            }
            return (
                (t.prototype._ = function (t) {
                    this.tt = t;
                }),
                (t.prototype.Wu = function () {
                    return this.tt;
                }),
                (t.prototype.h = function (t, i, n, h) {
                    var s = this.tt;
                    if (null !== s) {
                        t.save();
                        var r = Math.max(1, Math.floor(i)),
                            e = (r % 2) / 2,
                            u = Math.round(s.ku.x * i) + e,
                            a = s.ku.y * i;
                        (t.fillStyle = s.ju), t.beginPath();
                        var o = Math.max(2, 1.5 * s.Uu) * i;
                        t.arc(u, a, o, 0, 2 * Math.PI, !1),
                            t.fill(),
                            (t.fillStyle = s.qu),
                            t.beginPath(),
                            t.arc(u, a, s.N * i, 0, 2 * Math.PI, !1),
                            t.fill(),
                            (t.lineWidth = r),
                            (t.strokeStyle = s.Hu),
                            t.beginPath(),
                            t.arc(u, a, s.N * i + r / 2, 0, 2 * Math.PI, !1),
                            t.stroke(),
                            t.restore();
                    }
                }),
                t
            );
        })(),
        gi = [
            { Yu: 0, Ku: 0.25, $u: 4, Xu: 10, Zu: 0.25, Ju: 0, Gu: 0.4, Qu: 0.8 },
            { Yu: 0.25, Ku: 0.525, $u: 10, Xu: 14, Zu: 0, Ju: 0, Gu: 0.8, Qu: 0 },
            { Yu: 0.525, Ku: 1, $u: 14, Xu: 14, Zu: 0, Ju: 0, Gu: 0, Qu: 0 },
        ];
    function yi(t, i, n, h) {
        return (function (t, i) {
            if ("transparent" === t) return t;
            var n = F(t),
                h = n[3];
            return "rgba(" + n[0] + ", " + n[1] + ", " + n[2] + ", " + i * h + ")";
        })(t, n + (h - n) * i);
    }
    function ki(t, i) {
        for (var n, h = (t % 2600) / 2600, s = 0, r = gi; s < r.length; s++) {
            var e = r[s];
            if (h >= e.Yu && h <= e.Ku) {
                n = e;
                break;
            }
        }
        a(void 0 !== n, "Last price animation internal logic error");
        var u,
            o,
            l,
            f = (h - n.Yu) / (n.Ku - n.Yu);
        return { qu: yi(i, f, n.Zu, n.Ju), Hu: yi(i, f, n.Gu, n.Qu), N: ((u = f), (o = n.$u), (l = n.Xu), o + (l - o) * u) };
    }
    var xi = (function () {
        function t(t) {
            (this.ot = new pi()), (this.B = !0), (this.ta = !0), (this.ia = performance.now()), (this.na = this.ia - 1), (this.ha = t);
        }
        return (
            (t.prototype.V = function (t) {
                if (((this.B = !0), "data" === t && 2 === this.ha.ct().lastPriceAnimation)) {
                    var i = performance.now(),
                        n = this.na - i;
                    if (n > 0) return void (n < 650 && (this.na += 2600));
                    (this.ia = i), (this.na = i + 2600);
                }
            }),
            (t.prototype.sa = function () {
                this.ta = !0;
            }),
            (t.prototype.q = function () {
                return 0 !== this.ha.ct().lastPriceAnimation;
            }),
            (t.prototype.ra = function () {
                switch (this.ha.ct().lastPriceAnimation) {
                    case 0:
                        return !1;
                    case 1:
                        return !0;
                    case 2:
                        return performance.now() <= this.na;
                }
            }),
            (t.prototype.R = function (t, i) {
                return this.B ? (this.I(t, i), (this.B = !1), (this.ta = !1)) : this.ta && (this.ea(), (this.ta = !1)), this.ot;
            }),
            (t.prototype.I = function (t, i) {
                this.ot._(null);
                var n = this.ha.vt().j(),
                    h = n.br(),
                    s = this.ha.H();
                if (null !== h && null !== s) {
                    var r = this.ha.ua(!0, !0);
                    if (h.Os(r.zs)) {
                        var e = { x: n.G(r.zs), y: this.ha.$().K(r.D, s.X) },
                            u = r.et,
                            a = this.ha.ct().lineWidth,
                            o = ki(this.aa(), u);
                        this.ot._({ ju: u, Uu: a, qu: o.qu, Hu: o.Hu, N: o.N, ku: e });
                    }
                }
            }),
            (t.prototype.ea = function () {
                var t = this.ot.Wu();
                if (null !== t) {
                    var i = ki(this.aa(), t.ju);
                    (t.qu = i.qu), (t.Hu = i.Hu), (t.N = i.N);
                }
            }),
            (t.prototype.aa = function () {
                return this.ra() ? performance.now() - this.ia : 2599;
            }),
            t
        );
    })();
    function Ni(t, i) {
        return et(Math.min(Math.max(t, 12), 30) * i);
    }
    function Si(t, i) {
        switch (t) {
            case "arrowDown":
            case "arrowUp":
                return Ni(i, 1);
            case "circle":
                return Ni(i, 0.8);
            case "square":
                return Ni(i, 0.7);
        }
    }
    function Ci(t) {
        return rt(Ni(t, 1));
    }
    function Di(t) {
        return Math.max(Ni(t, 0.1), 3);
    }
    function Ti(t, i, n, h, s) {
        var r = Si("square", n),
            e = (r - 1) / 2,
            u = t - e,
            a = i - e;
        return h >= u && h <= u + r && s >= a && s <= a + r;
    }
    function Ai(t, i, n, h, s) {
        var r = (Si("arrowUp", s) - 1) / 2,
            e = (et(s / 2) - 1) / 2;
        i.beginPath(),
            t
                ? (i.moveTo(n - r, h), i.lineTo(n, h - r), i.lineTo(n + r, h), i.lineTo(n + e, h), i.lineTo(n + e, h + r), i.lineTo(n - e, h + r), i.lineTo(n - e, h))
                : (i.moveTo(n - r, h), i.lineTo(n, h + r), i.lineTo(n + r, h), i.lineTo(n + e, h), i.lineTo(n + e, h - r), i.lineTo(n - e, h - r), i.lineTo(n - e, h)),
            i.fill();
    }
    function Li(t, i, n, h, s, r) {
        return Ti(i, n, h, s, r);
    }
    var Ei = (function (t) {
        function i() {
            var i = (null !== t && t.apply(this, arguments)) || this;
            return (i.tt = null), (i.Au = new _i()), (i.fe = -1), (i.ce = ""), (i.oa = ""), i;
        }
        return (
            r(i, t),
            (i.prototype._ = function (t) {
                this.tt = t;
            }),
            (i.prototype.Lu = function (t, i) {
                (this.fe === t && this.ce === i) || ((this.fe = t), (this.ce = i), (this.oa = Wt(t, i)), this.Au.Cu());
            }),
            (i.prototype.la = function (t, i) {
                if (null === this.tt || null === this.tt.M) return null;
                for (var n = this.tt.M.from; n < this.tt.M.to; n++) {
                    var h = this.tt.m[n];
                    if (Oi(h, t, i)) return { fa: h.ca, va: h.va };
                }
                return null;
            }),
            (i.prototype.u = function (t, i, n) {
                if (null !== this.tt && null !== this.tt.M) {
                    (t.textBaseline = "middle"), (t.font = this.oa);
                    for (var h = this.tt.M.from; h < this.tt.M.to; h++) {
                        var s = this.tt.m[h];
                        void 0 !== s.Ot && ((s.Ot.wt = this.Au.Ft(t, s.Ot._a)), (s.Ot.Mt = this.fe)), Bi(s, t);
                    }
                }
            }),
            i
        );
    })(g);
    function Bi(t, i) {
        (i.fillStyle = t.et),
            void 0 !== t.Ot &&
                (function (t, i, n, h) {
                    t.fillText(i, n, h);
                })(i, t.Ot._a, t.p - t.Ot.wt / 2, t.Ot.g),
            (function (t, i) {
                if (0 === t.$e) return;
                switch (t.da) {
                    case "arrowDown":
                        return void Ai(!1, i, t.p, t.g, t.$e);
                    case "arrowUp":
                        return void Ai(!0, i, t.p, t.g, t.$e);
                    case "circle":
                        return void (function (t, i, n, h) {
                            var s = (Si("circle", h) - 1) / 2;
                            t.beginPath(), t.arc(i, n, s, 0, 2 * Math.PI, !1), t.fill();
                        })(i, t.p, t.g, t.$e);
                    case "square":
                        return void (function (t, i, n, h) {
                            var s = Si("square", h),
                                r = (s - 1) / 2,
                                e = i - r,
                                u = n - r;
                            t.fillRect(e, u, s, s);
                        })(i, t.p, t.g, t.$e);
                }
                t.da;
            })(t, i);
    }
    function Oi(t, i, n) {
        return (
            !(
                void 0 === t.Ot ||
                !(function (t, i, n, h, s, r) {
                    var e = h / 2;
                    return s >= t && s <= t + n && r >= i - e && r <= i + e;
                })(t.p, t.Ot.g, t.Ot.wt, t.Ot.Mt, i, n)
            ) ||
            (function (t, i, n) {
                if (0 === t.$e) return !1;
                switch (t.da) {
                    case "arrowDown":
                    case "arrowUp":
                        return Li(0, t.p, t.g, t.$e, i, n);
                    case "circle":
                        return (function (t, i, n, h, s) {
                            var r = 2 + Si("circle", n) / 2,
                                e = t - h,
                                u = i - s;
                            return Math.sqrt(e * e + u * u) <= r;
                        })(t.p, t.g, t.$e, i, n);
                    case "square":
                        return Ti(t.p, t.g, t.$e, i, n);
                }
                t.da;
            })(t, i, n)
        );
    }
    function Fi(t, i, n, h, s, r, e, u, a) {
        var o = v(n) ? n : n.close,
            l = v(n) ? n : n.high,
            f = v(n) ? n : n.low,
            c = v(i.size) ? Math.max(i.size, 0) : 1,
            _ = Ci(u.Pr()) * c,
            d = _ / 2;
        switch (((t.$e = _), i.position)) {
            case "inBar":
                return (t.g = e.K(o, a)), void (void 0 !== t.Ot && (t.Ot.g = t.g + d + r + 0.6 * s));
            case "aboveBar":
                return (t.g = e.K(l, a) - d - h.wa), void 0 !== t.Ot && ((t.Ot.g = t.g - d - 0.6 * s), (h.wa += 1.2 * s)), void (h.wa += _ + r);
            case "belowBar":
                return (t.g = e.K(f, a) + d + h.Ma), void 0 !== t.Ot && ((t.Ot.g = t.g + d + r + 0.6 * s), (h.Ma += 1.2 * s)), void (h.Ma += _ + r);
        }
        i.position;
    }
    var Vi = (function () {
            function t(t, i) {
                (this.B = !0), (this.ba = !0), (this.ma = !0), (this.pa = null), (this.ot = new Ei()), (this.ha = t), (this.si = i), (this.tt = { m: [], M: null });
            }
            return (
                (t.prototype.V = function (t) {
                    (this.B = !0), (this.ma = !0), "data" === t && (this.ba = !0);
                }),
                (t.prototype.R = function (t, i, n) {
                    if (!this.ha.q()) return null;
                    this.B && this.Ue();
                    var h = this.si.ct().layout;
                    return this.ot.Lu(h.fontSize, h.fontFamily), this.ot._(this.tt), this.ot;
                }),
                (t.prototype.ga = function () {
                    if (this.ma) {
                        if (this.ha.ya().length > 0) {
                            var t = this.si.j().Pr(),
                                i = Di(t),
                                n = 1.5 * Ci(t) + 2 * i;
                            this.pa = { above: n, below: n };
                        } else this.pa = null;
                        this.ma = !1;
                    }
                    return this.pa;
                }),
                (t.prototype.Ue = function () {
                    var t = this.ha.$(),
                        i = this.si.j(),
                        n = this.ha.ya();
                    this.ba &&
                        ((this.tt.m = n.map(function (t) {
                            return { C: t.time, p: 0, g: 0, $e: 0, da: t.shape, et: t.color, ca: t.ca, va: t.id, Ot: void 0 };
                        })),
                        (this.ba = !1));
                    var h = this.si.ct().layout;
                    this.tt.M = null;
                    var s = i.br();
                    if (null !== s) {
                        var r = this.ha.H();
                        if (null !== r && 0 !== this.tt.m.length) {
                            var e = NaN,
                                u = Di(i.Pr()),
                                a = { wa: u, Ma: u };
                            this.tt.M = Qt(this.tt.m, s, !0);
                            for (var o = this.tt.M.from; o < this.tt.M.to; o++) {
                                var l = n[o];
                                l.time !== e && ((a.wa = u), (a.Ma = u), (e = l.time));
                                var f = this.tt.m[o];
                                (f.p = i.G(l.time)), void 0 !== l.text && l.text.length > 0 && (f.Ot = { _a: l.text, g: 0, wt: 0, Mt: 0 });
                                var c = this.ha.ka(l.time);
                                null !== c && Fi(f, l, c, a, h.fontSize, u, t, i, r.X);
                            }
                            this.B = !1;
                        }
                    }
                }),
                t
            );
        })(),
        Pi = (function (t) {
            function i(i) {
                return t.call(this, i) || this;
            }
            return (
                r(i, t),
                (i.prototype.Iu = function (t, i) {
                    var n = this.zu;
                    n.q = !1;
                    var h = this.Ie.ct();
                    if (h.priceLineVisible && this.Ie.q()) {
                        var s = this.Ie.ua(0 === h.priceLineSource);
                        s.xa || ((n.q = !0), (n.g = s.zt), (n.et = this.Ie.Na(s.et)), (n.wt = i), (n.Mt = t), (n.rt = h.priceLineWidth), (n.ut = h.priceLineStyle));
                    }
                }),
                i
            );
        })(bi),
        zi = (function (t) {
            function i(i) {
                var n = t.call(this) || this;
                return (n.lt = i), n;
            }
            return (
                r(i, t),
                (i.prototype.Jt = function (t, i, n) {
                    (t.q = !1), (i.q = !1);
                    var h = this.lt;
                    if (h.q()) {
                        var s = h.ct(),
                            r = s.lastValueVisible,
                            e = "" !== h.Sa(),
                            u = 0 === s.seriesLastValueMode,
                            a = h.ua(!1);
                        if (!a.xa) {
                            r && ((t.Ot = this.Ca(a, r, u)), (t.q = 0 !== t.Ot.length)), (e || u) && ((i.Ot = this.Da(a, r, e, u)), (i.q = i.Ot.length > 0));
                            var o = h.Na(a.et),
                                l = V(o);
                            (n.yt = l.yt), (n.et = l.kt), (n.zt = a.zt), (i.Z = h.vt().J(a.zt / h.$().Mt())), (t.Z = o);
                        }
                    }
                }),
                (i.prototype.Da = function (t, i, n, h) {
                    var s = "",
                        r = this.lt.Sa();
                    return n && 0 !== r.length && (s += r + " "), i && h && (s += this.lt.$().lh() ? t.Ta : t.Aa), s.trim();
                }),
                (i.prototype.Ca = function (t, i, n) {
                    return i ? (n ? (this.lt.$().lh() ? t.Aa : t.Ta) : t.Ot) : "";
                }),
                i
            );
        })(U),
        Ri = (function () {
            function t(t, i) {
                (this.Vn = t), (this.La = i || null);
            }
            return (
                (t.prototype.kh = function () {
                    return this.Vn;
                }),
                (t.prototype.es = function () {
                    return this.La;
                }),
                (t.prototype.Mn = function () {
                    return null === this.Vn ? null : { priceRange: this.Vn.Mn(), margins: this.La || void 0 };
                }),
                (t.bn = function (i) {
                    return null === i ? null : new t(it.bn(i.priceRange), i.margins);
                }),
                t
            );
        })(),
        Ii = (function (t) {
            function i(i, n) {
                var h = t.call(this, i) || this;
                return (h.Ea = n), h;
            }
            return (
                r(i, t),
                (i.prototype.Iu = function (t, i) {
                    var n = this.zu;
                    if (((n.q = !1), this.Ie.q())) {
                        var h = this.Ea.Ba();
                        if (null !== h) {
                            var s = this.Ea.ct();
                            (n.q = !0), (n.g = h), (n.et = s.color), (n.wt = i), (n.Mt = t), (n.rt = s.lineWidth), (n.ut = s.lineStyle);
                        }
                    }
                }),
                i
            );
        })(bi),
        Wi = (function (t) {
            function i(i, n) {
                var h = t.call(this) || this;
                return (h.ha = i), (h.Ea = n), h;
            }
            return (
                r(i, t),
                (i.prototype.Jt = function (t, i, n) {
                    (t.q = !1), (i.q = !1);
                    var h = this.Ea.ct(),
                        s = h.axisLabelVisible,
                        r = "" !== h.title,
                        e = this.ha;
                    if (s && e.q()) {
                        var u = this.Ea.Ba();
                        if (null !== u) {
                            r && ((i.Ot = h.title), (i.q = !0)), (i.Z = e.vt().J(u / e.$().Mt())), (t.Ot = e.$().Xh(h.price)), (t.q = !0);
                            var a = V(h.color);
                            (n.yt = a.yt), (n.et = a.kt), (n.zt = u);
                        }
                    }
                }),
                i
            );
        })(U),
        ji = (function () {
            function t(t, i) {
                (this.ha = t), (this.Ni = i), (this.Oa = new Ii(t, this)), (this.Eu = new Wi(t, this)), (this.Fa = new wi(this.Eu, t, t.vt()));
            }
            return (
                (t.prototype.sh = function (t) {
                    c(this.Ni, t), this.V(), this.ha.vt().Vr();
                }),
                (t.prototype.ct = function () {
                    return this.Ni;
                }),
                (t.prototype.vi = function () {
                    return [this.Oa, this.Fa];
                }),
                (t.prototype.Va = function () {
                    return this.Eu;
                }),
                (t.prototype.V = function () {
                    this.Oa.V(), this.Eu.V();
                }),
                (t.prototype.Ba = function () {
                    var t = this.ha,
                        i = t.$();
                    if (t.vt().j().ti() || i.ti()) return null;
                    var n = t.H();
                    return null === n ? null : i.K(this.Ni.price, n.X);
                }),
                t
            );
        })(),
        Ui = (function (t) {
            function i(i) {
                var n = t.call(this) || this;
                return (n.si = i), n;
            }
            return (
                r(i, t),
                (i.prototype.vt = function () {
                    return this.si;
                }),
                i
            );
        })($),
        qi = { au: "", bu: "", Mu: "" },
        Hi = (function () {
            function t(t) {
                this.ha = t;
            }
            return (
                (t.prototype.ou = function (t, i) {
                    var n = this.ha.Pa(),
                        h = this.ha.ct();
                    switch (n) {
                        case "Line":
                            return this.za(h);
                        case "Area":
                            return this.Ra(h);
                        case "Bar":
                            return this.Ia(h, t, i);
                        case "Candlestick":
                            return this.Wa(h, t, i);
                        case "Histogram":
                            return this.ja(h, t, i);
                    }
                    throw new Error("Unknown chart style");
                }),
                (t.prototype.Ia = function (t, i, n) {
                    var h = e({}, qi),
                        s = t.upColor,
                        r = t.downColor,
                        u = s,
                        a = r,
                        o = l(this.Ua(i, n)),
                        c = f(o.X[0]) <= f(o.X[3]);
                    return (h.au = c ? s : r), (h.bu = c ? u : a), h;
                }),
                (t.prototype.Wa = function (t, i, n) {
                    var h = e({}, qi),
                        s = t.upColor,
                        r = t.downColor,
                        u = t.borderUpColor,
                        a = t.borderDownColor,
                        o = t.wickUpColor,
                        c = t.wickDownColor,
                        v = l(this.Ua(i, n)),
                        _ = f(v.X[0]) <= f(v.X[3]);
                    return (h.au = _ ? s : r), (h.bu = _ ? u : a), (h.Mu = _ ? o : c), h;
                }),
                (t.prototype.Ra = function (t) {
                    return e(e({}, qi), { au: t.lineColor });
                }),
                (t.prototype.za = function (t) {
                    return e(e({}, qi), { au: t.color });
                }),
                (t.prototype.ja = function (t, i, n) {
                    var h = e({}, qi),
                        s = l(this.Ua(i, n));
                    return (h.au = void 0 !== s.et ? s.et : t.color), h;
                }),
                (t.prototype.Ua = function (t, i) {
                    return void 0 !== i ? i.X : this.ha.Hi().qa(t);
                }),
                t
            );
        })(),
        Yi = 30,
        Ki = (function () {
            function t() {
                (this.Ha = []), (this.Ya = new Map()), (this.Ka = new Map());
            }
            return (
                (t.prototype.$a = function () {
                    (this.Ha = []), this.Ya.clear(), this.Ka.clear();
                }),
                (t.prototype.Xa = function () {
                    return this.$e() > 0 ? this.Ha[this.Ha.length - 1] : null;
                }),
                (t.prototype.Za = function () {
                    return this.$e() > 0 ? this.Ja(0) : null;
                }),
                (t.prototype.qi = function () {
                    return this.$e() > 0 ? this.Ja(this.Ha.length - 1) : null;
                }),
                (t.prototype.$e = function () {
                    return this.Ha.length;
                }),
                (t.prototype.ti = function () {
                    return 0 === this.$e();
                }),
                (t.prototype.Os = function (t) {
                    return null !== this.Ga(t, 0);
                }),
                (t.prototype.qa = function (t) {
                    return this.Qa(t);
                }),
                (t.prototype.Qa = function (t, i) {
                    void 0 === i && (i = 0);
                    var n = this.Ga(t, i);
                    return null === n ? null : e(e({}, this.io(n)), { zs: this.Ja(n) });
                }),
                (t.prototype.Ge = function () {
                    return this.Ha;
                }),
                (t.prototype.no = function (t, i, n) {
                    if (this.ti()) return null;
                    for (var h = null, s = 0, r = n; s < r.length; s++) {
                        var e = r[s];
                        h = $i(h, this.ho(t, i, e));
                    }
                    return h;
                }),
                (t.prototype._n = function (t) {
                    0 !== t.length &&
                        (this.ti() || t[t.length - 1].zs < this.Ha[0].zs ? this.so(t) : t[0].zs > this.Ha[this.Ha.length - 1].zs ? this.ro(t) : 1 !== t.length || t[0].zs !== this.Ha[this.Ha.length - 1].zs ? this.eo(t) : this.uo(t[0]));
                }),
                (t.prototype.Ja = function (t) {
                    return this.Ha[t].zs;
                }),
                (t.prototype.io = function (t) {
                    return this.Ha[t];
                }),
                (t.prototype.Ga = function (t, i) {
                    var n = this.ao(t);
                    if (null === n && 0 !== i)
                        switch (i) {
                            case -1:
                                return this.oo(t);
                            case 1:
                                return this.lo(t);
                            default:
                                throw new TypeError("Unknown search mode");
                        }
                    return n;
                }),
                (t.prototype.oo = function (t) {
                    var i = this.fo(t);
                    return i > 0 && (i -= 1), i !== this.Ha.length && this.Ja(i) < t ? i : null;
                }),
                (t.prototype.lo = function (t) {
                    var i = this.co(t);
                    return i !== this.Ha.length && t < this.Ja(i) ? i : null;
                }),
                (t.prototype.ao = function (t) {
                    var i = this.fo(t);
                    return i === this.Ha.length || t < this.Ha[i].zs ? null : i;
                }),
                (t.prototype.fo = function (t) {
                    return Xt(this.Ha, t, function (t, i) {
                        return t.zs < i;
                    });
                }),
                (t.prototype.co = function (t) {
                    return Zt(this.Ha, t, function (t, i) {
                        return i.zs > t;
                    });
                }),
                (t.prototype.vo = function (t, i, n) {
                    for (var h = null, s = t; s < i; s++) {
                        var r = this.Ha[s].X[n];
                        Number.isNaN(r) || (null === h ? (h = { _o: r, do: r }) : (r < h._o && (h._o = r), r > h.do && (h.do = r)));
                    }
                    return h;
                }),
                (t.prototype.wo = function (t) {
                    var i = Math.floor(t.zs / Yi);
                    this.Ya.forEach(function (t) {
                        return t.delete(i);
                    });
                }),
                (t.prototype.so = function (t) {
                    a(0 !== t.length, "plotRows should not be empty"), this.Ka.clear(), this.Ya.clear(), (this.Ha = t.concat(this.Ha));
                }),
                (t.prototype.ro = function (t) {
                    a(0 !== t.length, "plotRows should not be empty"), this.Ka.clear(), this.Ya.clear(), (this.Ha = this.Ha.concat(t));
                }),
                (t.prototype.uo = function (t) {
                    a(!this.ti(), "plot list should not be empty"), a(this.Ha[this.Ha.length - 1].zs === t.zs, "last row index should match new row index"), this.wo(t), this.Ka.delete(t.zs), (this.Ha[this.Ha.length - 1] = t);
                }),
                (t.prototype.eo = function (t) {
                    a(0 !== t.length, "plot rows should not be empty"),
                        this.Ka.clear(),
                        this.Ya.clear(),
                        (this.Ha = (function (t, i) {
                            var n = (function (t, i) {
                                    var n = t.length,
                                        h = i.length,
                                        s = n + h,
                                        r = 0,
                                        e = 0;
                                    for (; r < n && e < h; ) t[r].zs < i[e].zs ? r++ : t[r].zs > i[e].zs ? e++ : (r++, e++, s--);
                                    return s;
                                })(t, i),
                                h = new Array(n),
                                s = 0,
                                r = 0,
                                e = t.length,
                                u = i.length,
                                a = 0;
                            for (; s < e && r < u; ) t[s].zs < i[r].zs ? ((h[a] = t[s]), s++) : t[s].zs > i[r].zs ? ((h[a] = i[r]), r++) : ((h[a] = i[r]), s++, r++), a++;
                            for (; s < e; ) (h[a] = t[s]), s++, a++;
                            for (; r < u; ) (h[a] = i[r]), r++, a++;
                            return h;
                        })(this.Ha, t));
                }),
                (t.prototype.ho = function (t, i, n) {
                    if (this.ti()) return null;
                    var h = null,
                        s = l(this.Za()),
                        r = l(this.qi()),
                        e = Math.max(t, s),
                        u = Math.min(i, r),
                        a = Math.ceil(e / Yi) * Yi,
                        o = Math.max(a, Math.floor(u / Yi) * Yi),
                        f = this.fo(e),
                        c = this.co(Math.min(u, a, i));
                    h = $i(h, this.vo(f, c, n));
                    var v = this.Ya.get(n);
                    void 0 === v && ((v = new Map()), this.Ya.set(n, v));
                    for (var _ = Math.max(a + 1, e); _ < o; _ += Yi) {
                        var d = Math.floor(_ / Yi),
                            w = v.get(d);
                        if (void 0 === w) {
                            var M = this.fo(d * Yi),
                                b = this.co((d + 1) * Yi - 1);
                            (w = this.vo(M, b, n)), v.set(d, w);
                        }
                        h = $i(h, w);
                    }
                    (f = this.fo(o)), (c = this.co(u));
                    return (h = $i(h, this.vo(f, c, n)));
                }),
                t
            );
        })();
    function $i(t, i) {
        return null === t ? i : null === i ? t : { _o: Math.min(t._o, i._o), do: Math.max(t.do, i.do) };
    }
    var Xi = (function (t) {
            function i(i, n, h) {
                var s = t.call(this, i) || this;
                (s.tt = new Ki()), (s.Oa = new Pi(s)), (s.Mo = []), (s.bo = new mi(s)), (s.mo = null), (s.po = null), (s.yo = []), (s.ko = []), (s.xo = null), (s.Ni = n), (s.No = h);
                var r = new zi(s);
                return (s.mi = [r]), (s.Fa = new wi(r, s, i)), ("Area" !== h && "Line" !== h) || (s.mo = new xi(s)), s.So(), s.Co(), s;
            }
            return (
                r(i, t),
                (i.prototype.en = function () {
                    null !== this.xo && clearTimeout(this.xo);
                }),
                (i.prototype.Na = function (t) {
                    return this.Ni.priceLineColor || t;
                }),
                (i.prototype.ua = function (t, i) {
                    var n = { xa: !0 },
                        h = this.$();
                    if (this.vt().j().ti() || h.ti() || this.tt.ti()) return n;
                    var s,
                        r,
                        e = this.vt().j().br(),
                        u = this.H();
                    if (null === e || null === u) return n;
                    if (t) {
                        var a = this.tt.Xa();
                        if (null === a) return n;
                        (s = a), (r = a.zs);
                    } else {
                        var o = this.tt.Qa(e.rs(), -1);
                        if (null === o) return n;
                        if (null === (s = this.tt.qa(o.zs))) return n;
                        r = o.zs;
                    }
                    var l = s.X[3],
                        f = this.Je().ou(r, { X: s }),
                        c = h.K(l, u.X);
                    return { xa: !1, D: i ? l : void 0, Ot: h.ii(l, u.X), Ta: h.Xh(l), Aa: h.Jh(l, u.X), et: f.au, zt: c, zs: r };
                }),
                (i.prototype.Je = function () {
                    return null !== this.po || (this.po = new Hi(this)), this.po;
                }),
                (i.prototype.ct = function () {
                    return this.Ni;
                }),
                (i.prototype.sh = function (t) {
                    var i = t.priceScaleId;
                    void 0 !== i && i !== this.Ni.priceScaleId && this.vt().Do(this, i),
                        c(this.Ni, t),
                        null !== this.ui && void 0 !== t.scaleMargins && this.ui.sh({ scaleMargins: t.scaleMargins }),
                        void 0 !== t.priceFormat && this.So(),
                        this.vt().To(this),
                        this.vt().Ao(),
                        this.Li.V("options");
                }),
                (i.prototype.Lo = function () {
                    this.tt.$a(), this.Co();
                }),
                (i.prototype.Eo = function (t, i) {
                    var n;
                    i && this.tt.$a(), this.tt._n(t), this.Bo(), this.Li.V("data"), this.Si.V("data"), null === (n = this.mo) || void 0 === n || n.V("data");
                    var h = this.vt().Ou(this);
                    this.vt().Oo(h), this.vt().To(this), this.vt().Ao(), this.vt().Vr();
                }),
                (i.prototype.Fo = function (t) {
                    (this.yo = t.map(function (t) {
                        return e({}, t);
                    })),
                        this.Bo();
                    var i = this.vt().Ou(this);
                    this.Si.V("data"), this.vt().Oo(i), this.vt().To(this), this.vt().Ao(), this.vt().Vr();
                }),
                (i.prototype.ya = function () {
                    return this.ko;
                }),
                (i.prototype.Vo = function (t) {
                    var i = new ji(this, t);
                    return this.Mo.push(i), this.vt().To(this), i;
                }),
                (i.prototype.Po = function (t) {
                    var i = this.Mo.indexOf(t);
                    -1 !== i && this.Mo.splice(i, 1), this.vt().To(this);
                }),
                (i.prototype.Pa = function () {
                    return this.No;
                }),
                (i.prototype.H = function () {
                    var t = this.zo();
                    return null === t ? null : { X: t.X[3], Rh: t.C };
                }),
                (i.prototype.zo = function () {
                    var t = this.vt().j().br();
                    if (null === t) return null;
                    var i = t.ss();
                    return this.tt.Qa(i, 1);
                }),
                (i.prototype.Hi = function () {
                    return this.tt;
                }),
                (i.prototype.ka = function (t) {
                    var i = this.tt.qa(t);
                    return null === i ? null : "Bar" === this.No || "Candlestick" === this.No ? { open: i.X[0], high: i.X[1], low: i.X[2], close: i.X[3] } : i.X[3];
                }),
                (i.prototype.Ro = function (t) {
                    var i = this,
                        n = this.mo;
                    return null !== n && n.q()
                        ? (null === this.xo &&
                              n.ra() &&
                              (this.xo = setTimeout(function () {
                                  (i.xo = null), i.vt().Io();
                              }, 0)),
                          n.sa(),
                          [n])
                        : [];
                }),
                (i.prototype.vi = function () {
                    var t = [];
                    this.Wo() || t.push(this.bo);
                    for (var i = 0, n = this.Mo; i < n.length; i++) {
                        var h = n[i];
                        t.push.apply(t, h.vi());
                    }
                    return t.push(this.Li, this.Oa, this.Fa, this.Si), t;
                }),
                (i.prototype.ci = function (t, i) {
                    if (i !== this.ui && !this.Wo()) return [];
                    for (var n = u([], this.mi, !0), h = 0, s = this.Mo; h < s.length; h++) {
                        var r = s[h];
                        n.push(r.Va());
                    }
                    return n;
                }),
                (i.prototype.hs = function (t, i) {
                    var n = this;
                    if (void 0 !== this.Ni.autoscaleInfoProvider) {
                        var h = this.Ni.autoscaleInfoProvider(function () {
                            var h = n.jo(t, i);
                            return null === h ? null : h.Mn();
                        });
                        return Ri.bn(h);
                    }
                    return this.jo(t, i);
                }),
                (i.prototype.ts = function () {
                    return this.Ni.priceFormat.minMove;
                }),
                (i.prototype.Kh = function () {
                    return this.Zn;
                }),
                (i.prototype.Wi = function () {
                    var t;
                    this.Li.V(), this.Si.V();
                    for (var i = 0, n = this.mi; i < n.length; i++) {
                        n[i].V();
                    }
                    for (var h = 0, s = this.Mo; h < s.length; h++) {
                        s[h].V();
                    }
                    this.Oa.V(), this.bo.V(), null === (t = this.mo) || void 0 === t || t.V();
                }),
                (i.prototype.$ = function () {
                    return l(this.ui);
                }),
                (i.prototype.U = function (t) {
                    if (!(("Line" === this.No || "Area" === this.No) && this.Ni.crosshairMarkerVisible)) return null;
                    var i = this.tt.qa(t);
                    return null === i ? null : { D: i.X[3], N: this.Uo(), Z: this.qo(), Y: this.Ho(t) };
                }),
                (i.prototype.Sa = function () {
                    return this.Ni.title;
                }),
                (i.prototype.q = function () {
                    return this.Ni.visible;
                }),
                (i.prototype.Wo = function () {
                    return !Ut(this.$().hh());
                }),
                (i.prototype.jo = function (t, i) {
                    if (!_(t) || !_(i) || this.tt.ti()) return null;
                    var n = "Line" === this.No || "Area" === this.No || "Histogram" === this.No ? [3] : [2, 1],
                        h = this.tt.no(t, i, n),
                        s = null !== h ? new it(h._o, h.do) : null;
                    if ("Histogram" === this.Pa()) {
                        var r = this.Ni.base,
                            e = new it(r, r);
                        s = null !== s ? s._n(e) : e;
                    }
                    return new Ri(s, this.Si.ga());
                }),
                (i.prototype.Uo = function () {
                    switch (this.No) {
                        case "Line":
                        case "Area":
                            return this.Ni.crosshairMarkerRadius;
                    }
                    return 0;
                }),
                (i.prototype.qo = function () {
                    switch (this.No) {
                        case "Line":
                        case "Area":
                            var t = this.Ni.crosshairMarkerBorderColor;
                            if (0 !== t.length) return t;
                    }
                    return null;
                }),
                (i.prototype.Ho = function (t) {
                    switch (this.No) {
                        case "Line":
                        case "Area":
                            var i = this.Ni.crosshairMarkerBackgroundColor;
                            if (0 !== i.length) return i;
                    }
                    return this.Je().ou(t).au;
                }),
                (i.prototype.So = function () {
                    switch (this.Ni.priceFormat.type) {
                        case "custom":
                            this.Zn = { format: this.Ni.priceFormat.formatter };
                            break;
                        case "volume":
                            this.Zn = new Ht(this.Ni.priceFormat.precision);
                            break;
                        case "percent":
                            this.Zn = new Q(this.Ni.priceFormat.precision);
                            break;
                        default:
                            var t = Math.pow(10, this.Ni.priceFormat.precision);
                            this.Zn = new G(t, this.Ni.priceFormat.minMove * t);
                    }
                    null !== this.ui && this.ui.rh();
                }),
                (i.prototype.Bo = function () {
                    var t = this,
                        i = this.vt().j();
                    if (i.ti() || 0 === this.tt.$e()) this.ko = [];
                    else {
                        var n = l(this.tt.Za());
                        this.ko = this.yo.map(function (h, s) {
                            var r = l(i.Mr(h.time, !0)),
                                e = r < n ? 1 : -1;
                            return { time: l(t.tt.Qa(r, e)).zs, position: h.position, shape: h.shape, color: h.color, id: h.id, ca: s, text: h.text, size: h.size };
                        });
                    }
                }),
                (i.prototype.Co = function () {
                    switch (((this.Si = new Vi(this, this.vt())), this.No)) {
                        case "Bar":
                            this.Li = new ri(this, this.vt());
                            break;
                        case "Candlestick":
                            this.Li = new ui(this, this.vt());
                            break;
                        case "Line":
                            this.Li = new ci(this, this.vt());
                            break;
                        case "Area":
                            this.Li = new ni(this, this.vt());
                            break;
                        case "Histogram":
                            this.Li = new fi(this, this.vt());
                            break;
                        default:
                            throw Error("Unknown chart style assigned: " + this.No);
                    }
                }),
                i
            );
        })(Ui),
        Zi = (function () {
            function t(t) {
                this.Ni = t;
            }
            return (
                (t.prototype.Yo = function (t, i, n) {
                    var h = t;
                    if (0 === this.Ni.mode) return h;
                    var s = n.Di(),
                        r = s.H();
                    if (null === r) return h;
                    var e = s.K(t, r),
                        u = n
                            .Oh()
                            .filter(function (t) {
                                return t instanceof Xi;
                            })
                            .reduce(function (t, h) {
                                if (n.Fu(h) || !h.q()) return t;
                                var s = h.$(),
                                    r = h.Hi();
                                if (s.ti() || !r.Os(i)) return t;
                                var e = r.qa(i);
                                if (null === e) return t;
                                var u = f(h.H());
                                return t.concat([s.K(e.X[3], u.X)]);
                            }, []);
                    if (0 === u.length) return h;
                    u.sort(function (t, i) {
                        return Math.abs(t - e) - Math.abs(i - e);
                    });
                    var a = u[0];
                    return (h = s.Ti(a, r));
                }),
                t
            );
        })(),
        Ji = (function () {
            function t() {
                this.tt = null;
            }
            return (
                (t.prototype._ = function (t) {
                    this.tt = t;
                }),
                (t.prototype.h = function (t, i, h, s) {
                    var r = this;
                    if (null !== this.tt) {
                        var e = Math.max(1, Math.floor(i));
                        t.lineWidth = e;
                        var u = Math.ceil(this.tt.st * i),
                            a = Math.ceil(this.tt.ht * i);
                        !(function (t, i) {
                            t.save(), t.lineWidth % 2 && t.translate(0.5, 0.5), i(), t.restore();
                        })(t, function () {
                            var h = l(r.tt);
                            if (h.Ko) {
                                (t.strokeStyle = h.$o), n(t, h.Xo), t.beginPath();
                                for (var s = 0, o = h.Zo; s < o.length; s++) {
                                    var f = o[s],
                                        c = Math.round(f.Tn * i);
                                    t.moveTo(c, -e), t.lineTo(c, u + e);
                                }
                                t.stroke();
                            }
                            if (h.Jo) {
                                (t.strokeStyle = h.Go), n(t, h.Qo), t.beginPath();
                                for (var v = 0, _ = h.tl; v < _.length; v++) {
                                    var d = _[v],
                                        w = Math.round(d.Tn * i);
                                    t.moveTo(-e, w), t.lineTo(a + e, w);
                                }
                                t.stroke();
                            }
                        });
                    }
                }),
                t
            );
        })(),
        Gi = (function () {
            function t(t) {
                (this.ot = new Ji()), (this.B = !0), (this.di = t);
            }
            return (
                (t.prototype.V = function () {
                    this.B = !0;
                }),
                (t.prototype.R = function (t, i) {
                    if (this.B) {
                        var n = this.di.vt().ct().grid,
                            h = {
                                st: t,
                                ht: i,
                                Jo: n.horzLines.visible,
                                Ko: n.vertLines.visible,
                                Go: n.horzLines.color,
                                $o: n.vertLines.color,
                                Qo: n.horzLines.style,
                                Xo: n.vertLines.style,
                                tl: this.di.Di().Bn(),
                                Zo: this.di.vt().j().Bn() || [],
                            };
                        this.ot._(h), (this.B = !1);
                    }
                    return this.ot;
                }),
                t
            );
        })(),
        Qi = (function () {
            function t(t) {
                this.Li = new Gi(t);
            }
            return (
                (t.prototype.il = function () {
                    return this.Li;
                }),
                t
            );
        })(),
        tn = (function () {
            function t(t, i) {
                (this.Hn = []), (this.nl = new Map()), (this.On = 0), (this.Ks = 0), (this.hl = 1e3), (this.Yn = null), (this.sl = new tt()), (this.rl = t), (this.si = i), (this.el = new Qi(this));
                var n = i.ct();
                (this.ul = this.al("left", n.leftPriceScale)), (this.ol = this.al("right", n.rightPriceScale)), this.ul.bh().Ji(this.ll.bind(this, this.ul), this), this.ol.bh().Ji(this.ll.bind(this, this.ul), this), this.fl(n);
            }
            return (
                (t.prototype.fl = function (t) {
                    if ((t.leftPriceScale && this.ul.sh(t.leftPriceScale), t.rightPriceScale && this.ol.sh(t.rightPriceScale), t.localization && (this.ul.rh(), this.ol.rh()), t.overlayPriceScales))
                        for (var i = 0, n = Array.from(this.nl.values()); i < n.length; i++) {
                            var h = l(n[i][0].$());
                            h.sh(t.overlayPriceScales), t.localization && h.rh();
                        }
                }),
                (t.prototype.cl = function (t) {
                    switch (t) {
                        case "left":
                            return this.ul;
                        case "right":
                            return this.ol;
                    }
                    return this.nl.has(t) ? o(this.nl.get(t))[0].$() : null;
                }),
                (t.prototype.en = function () {
                    this.vt().vl().hn(this),
                        this.ul.bh().hn(this),
                        this.ol.bh().hn(this),
                        this.Hn.forEach(function (t) {
                            t.en && t.en();
                        }),
                        this.sl.sn();
                }),
                (t.prototype._l = function () {
                    return this.hl;
                }),
                (t.prototype.dl = function (t) {
                    this.hl = t;
                }),
                (t.prototype.vt = function () {
                    return this.si;
                }),
                (t.prototype.wt = function () {
                    return this.Ks;
                }),
                (t.prototype.Mt = function () {
                    return this.On;
                }),
                (t.prototype.Dr = function (t) {
                    (this.Ks = t), this.wl();
                }),
                (t.prototype.mh = function (t) {
                    var i = this;
                    (this.On = t),
                        this.ul.mh(t),
                        this.ol.mh(t),
                        this.Hn.forEach(function (n) {
                            if (i.Fu(n)) {
                                var h = n.$();
                                null !== h && h.mh(t);
                            }
                        }),
                        this.wl();
                }),
                (t.prototype.Oh = function () {
                    return this.Hn;
                }),
                (t.prototype.Fu = function (t) {
                    var i = t.$();
                    return null === i || (this.ul !== i && this.ol !== i);
                }),
                (t.prototype.Vh = function (t, i, n) {
                    var h = void 0 !== n ? n : this.bl().Ml + 1;
                    this.ml(t, i, h);
                }),
                (t.prototype.zh = function (t) {
                    var i = this.Hn.indexOf(t);
                    a(-1 !== i, "removeDataSource: invalid data source"), this.Hn.splice(i, 1);
                    var n = l(t.$()).hh();
                    if (this.nl.has(n)) {
                        var h = o(this.nl.get(n)),
                            s = h.indexOf(t);
                        -1 !== s && (h.splice(s, 1), 0 === h.length && this.nl.delete(n));
                    }
                    var r = t.$();
                    r && r.Oh().indexOf(t) >= 0 && r.zh(t), null !== r && (r.Ph(), this.pl(r)), (this.Yn = null);
                }),
                (t.prototype.Vu = function (t) {
                    return t === this.ul ? "left" : t === this.ol ? "right" : "overlay";
                }),
                (t.prototype.gl = function () {
                    return this.ul;
                }),
                (t.prototype.yl = function () {
                    return this.ol;
                }),
                (t.prototype.kl = function (t, i) {
                    t.Wh(i);
                }),
                (t.prototype.xl = function (t, i) {
                    t.jh(i), this.wl();
                }),
                (t.prototype.Nl = function (t) {
                    t.Uh();
                }),
                (t.prototype.Sl = function (t, i) {
                    t.qh(i);
                }),
                (t.prototype.Cl = function (t, i) {
                    t.Hh(i), this.wl();
                }),
                (t.prototype.Dl = function (t) {
                    t.Yh();
                }),
                (t.prototype.wl = function () {
                    this.Hn.forEach(function (t) {
                        t.Wi();
                    });
                }),
                (t.prototype.Di = function () {
                    var t = null;
                    return (
                        this.si.ct().rightPriceScale.visible && 0 !== this.ol.Oh().length ? (t = this.ol) : this.si.ct().leftPriceScale.visible && 0 !== this.ul.Oh().length ? (t = this.ul) : 0 !== this.Hn.length && (t = this.Hn[0].$()),
                        null === t && (t = this.ol),
                        t
                    );
                }),
                (t.prototype.pl = function (t) {
                    null !== t && t.oh() && this.Tl(t);
                }),
                (t.prototype.Al = function (t) {
                    var i = this.rl.br();
                    t.eh({ _h: !0 }), null !== i && t.Qh(i), this.wl();
                }),
                (t.prototype.Ll = function () {
                    this.Tl(this.ul), this.Tl(this.ol);
                }),
                (t.prototype.El = function () {
                    var t = this;
                    this.pl(this.ul),
                        this.pl(this.ol),
                        this.Hn.forEach(function (i) {
                            t.Fu(i) && t.pl(i.$());
                        }),
                        this.wl(),
                        this.si.Vr();
                }),
                (t.prototype.Fh = function () {
                    return null === this.Yn && (this.Yn = Mt(this.Hn)), this.Yn;
                }),
                (t.prototype.Bl = function () {
                    return this.sl;
                }),
                (t.prototype.Ol = function () {
                    return this.el;
                }),
                (t.prototype.Tl = function (t) {
                    var i = t.Gh();
                    if (i && i.length > 0 && !this.rl.ti()) {
                        var n = this.rl.br();
                        null !== n && t.Qh(n);
                    }
                    t.Wi();
                }),
                (t.prototype.bl = function () {
                    var t = this.Fh();
                    if (0 === t.length) return { Fl: 0, Ml: 0 };
                    for (var i = 0, n = 0, h = 0; h < t.length; h++) {
                        var s = t[h].oi();
                        null !== s && (s < i && (i = s), s > n && (n = s));
                    }
                    return { Fl: i, Ml: n };
                }),
                (t.prototype.ml = function (t, i, n) {
                    var h = this.cl(i);
                    if ((null === h && (h = this.al(i, this.si.ct().overlayPriceScales)), this.Hn.push(t), !Ut(i))) {
                        var s = this.nl.get(i) || [];
                        s.push(t), this.nl.set(i, s);
                    }
                    h.Vh(t), t.fi(h), t.li(n), this.pl(h), (this.Yn = null);
                }),
                (t.prototype.ll = function (t, i, n) {
                    i.uh !== n.uh && this.Tl(t);
                }),
                (t.prototype.al = function (t, i) {
                    var n = e({ visible: !0, autoScale: !0 }, M(i)),
                        h = new yt(t, n, this.si.ct().layout, this.si.ct().localization);
                    return h.mh(this.Mt()), h;
                }),
                t
            );
        })(),
        nn = (function (t) {
            function i(i) {
                var n = t.call(this) || this;
                return (n.Vl = new Map()), (n.tt = i), n;
            }
            return (
                r(i, t),
                (i.prototype.u = function (t) {}),
                (i.prototype.l = function (t) {
                    if (this.tt.q) {
                        t.save();
                        for (var i = 0, n = 0, h = this.tt.Pl; n < h.length; n++) {
                            if (0 !== (a = h[n]).Ot.length) {
                                t.font = a.Nt;
                                var s = this.zl(t, a.Ot);
                                s > this.tt.wt ? (a.qr = this.tt.wt / s) : (a.qr = 1), (i += a.Rl * a.qr);
                            }
                        }
                        var r = 0;
                        switch (this.tt.Il) {
                            case "top":
                                r = 0;
                                break;
                            case "center":
                                r = Math.max((this.tt.Mt - i) / 2, 0);
                                break;
                            case "bottom":
                                r = Math.max(this.tt.Mt - i, 0);
                        }
                        t.fillStyle = this.tt.et;
                        for (var e = 0, u = this.tt.Pl; e < u.length; e++) {
                            var a = u[e];
                            t.save();
                            var o = 0;
                            switch (this.tt.Wl) {
                                case "left":
                                    (t.textAlign = "left"), (o = a.Rl / 2);
                                    break;
                                case "center":
                                    (t.textAlign = "center"), (o = this.tt.wt / 2);
                                    break;
                                case "right":
                                    (t.textAlign = "right"), (o = this.tt.wt - 1 - a.Rl / 2);
                            }
                            t.translate(o, r), (t.textBaseline = "top"), (t.font = a.Nt), t.scale(a.qr, a.qr), t.fillText(a.Ot, 0, a.jl), t.restore(), (r += a.Rl * a.qr);
                        }
                        t.restore();
                    }
                }),
                (i.prototype.zl = function (t, i) {
                    var n = this.Ul(t.font),
                        h = n.get(i);
                    return void 0 === h && ((h = t.measureText(i).width), n.set(i, h)), h;
                }),
                (i.prototype.Ul = function (t) {
                    var i = this.Vl.get(t);
                    return void 0 === i && ((i = new Map()), this.Vl.set(t, i)), i;
                }),
                i
            );
        })(g),
        hn = (function () {
            function t(t) {
                (this.B = !0), (this.at = { q: !1, et: "", Mt: 0, wt: 0, Pl: [], Il: "center", Wl: "center" }), (this.ot = new nn(this.at)), (this.lt = t);
            }
            return (
                (t.prototype.V = function () {
                    this.B = !0;
                }),
                (t.prototype.R = function (t, i) {
                    return this.B && (this.I(t, i), (this.B = !1)), this.ot;
                }),
                (t.prototype.I = function (t, i) {
                    var n = this.lt.ct(),
                        h = this.at;
                    (h.q = n.visible),
                        h.q && ((h.et = n.color), (h.wt = i), (h.Mt = t), (h.Wl = n.horzAlign), (h.Il = n.vertAlign), (h.Pl = [{ Ot: n.text, Nt: Wt(n.fontSize, n.fontFamily, n.fontStyle), Rl: 1.2 * n.fontSize, jl: 0, qr: 0 }]));
                }),
                t
            );
        })(),
        sn = (function (t) {
            function i(i, n) {
                var h = t.call(this) || this;
                return (h.Ni = n), (h.Li = new hn(h)), h;
            }
            return (
                r(i, t),
                (i.prototype.vi = function () {
                    return [this.Li];
                }),
                (i.prototype.ct = function () {
                    return this.Ni;
                }),
                (i.prototype.Wi = function () {
                    this.Li.V();
                }),
                i
            );
        })($),
        rn = (function () {
            function t(t, i) {
                (this.ql = []),
                    (this.Hl = []),
                    (this.Ks = 0),
                    (this.Yl = null),
                    (this.Kl = null),
                    (this.$l = new tt()),
                    (this.Xl = new tt()),
                    (this.Zl = null),
                    (this.Jl = t),
                    (this.Ni = i),
                    (this.Gl = new jt(this)),
                    (this.rl = new Pt(this, i.timeScale, this.Ni.localization)),
                    (this.F = new X(this, i.crosshair)),
                    (this.Ql = new Zi(i.crosshair)),
                    (this.tf = new sn(this, i.watermark)),
                    this.if(),
                    this.ql[0].dl(2e3),
                    (this.nf = this.hf(0)),
                    (this.sf = this.hf(1));
            }
            return (
                (t.prototype.rf = function () {
                    this.ef(new qt(3));
                }),
                (t.prototype.Vr = function () {
                    this.ef(new qt(2));
                }),
                (t.prototype.Io = function () {
                    this.ef(new qt(1));
                }),
                (t.prototype.To = function (t) {
                    var i = this.uf(t);
                    this.ef(i);
                }),
                (t.prototype.af = function () {
                    return this.Kl;
                }),
                (t.prototype.lf = function (t) {
                    var i = this.Kl;
                    (this.Kl = t), null !== i && this.To(i.ff), null !== t && this.To(t.ff);
                }),
                (t.prototype.ct = function () {
                    return this.Ni;
                }),
                (t.prototype.sh = function (t) {
                    c(this.Ni, t),
                        this.ql.forEach(function (i) {
                            return i.fl(t);
                        }),
                        void 0 !== t.timeScale && this.rl.sh(t.timeScale),
                        void 0 !== t.localization && this.rl.lr(t.localization),
                        (t.leftPriceScale || t.rightPriceScale) && this.$l.sn(),
                        (this.nf = this.hf(0)),
                        (this.sf = this.hf(1)),
                        this.rf();
                }),
                (t.prototype.cf = function (t, i) {
                    var n = this.vf(t);
                    null !== n && (n.$.sh(i), this.$l.sn());
                }),
                (t.prototype.vf = function (t) {
                    for (var i = 0, n = this.ql; i < n.length; i++) {
                        var h = n[i],
                            s = h.cl(t);
                        if (null !== s) return { ft: h, $: s };
                    }
                    return null;
                }),
                (t.prototype.j = function () {
                    return this.rl;
                }),
                (t.prototype._f = function () {
                    return this.ql;
                }),
                (t.prototype.df = function () {
                    return this.tf;
                }),
                (t.prototype.wf = function () {
                    return this.F;
                }),
                (t.prototype.Mf = function () {
                    return this.Xl;
                }),
                (t.prototype.bf = function (t, i) {
                    t.mh(i), this.Fr();
                }),
                (t.prototype.Dr = function (t) {
                    (this.Ks = t),
                        this.rl.Dr(this.Ks),
                        this.ql.forEach(function (i) {
                            return i.Dr(t);
                        }),
                        this.Fr();
                }),
                (t.prototype.if = function (t) {
                    var i = new tn(this.rl, this);
                    void 0 !== t ? this.ql.splice(t, 0, i) : this.ql.push(i);
                    var n = void 0 === t ? this.ql.length - 1 : t,
                        h = new qt(3);
                    return h.be(n, { me: 0, _h: !0 }), this.ef(h), i;
                }),
                (t.prototype.kl = function (t, i, n) {
                    t.kl(i, n);
                }),
                (t.prototype.xl = function (t, i, n) {
                    t.xl(i, n), this.Ao(), this.ef(this.mf(t, 2));
                }),
                (t.prototype.Nl = function (t, i) {
                    t.Nl(i), this.ef(this.mf(t, 2));
                }),
                (t.prototype.Sl = function (t, i, n) {
                    i.oh() || t.Sl(i, n);
                }),
                (t.prototype.Cl = function (t, i, n) {
                    i.oh() || (t.Cl(i, n), this.Ao(), this.ef(this.mf(t, 2)));
                }),
                (t.prototype.Dl = function (t, i) {
                    i.oh() || (t.Dl(i), this.ef(this.mf(t, 2)));
                }),
                (t.prototype.Al = function (t, i) {
                    t.Al(i), this.ef(this.mf(t, 2));
                }),
                (t.prototype.pf = function (t) {
                    this.rl.Wh(t);
                }),
                (t.prototype.gf = function (t, i) {
                    var n = this.j();
                    if (!n.ti() && 0 !== i) {
                        var h = n.wt();
                        (t = Math.max(1, Math.min(t, h))), n.qr(t, i), this.Fr();
                    }
                }),
                (t.prototype.yf = function (t) {
                    this.kf(0), this.xf(t), this.Nf();
                }),
                (t.prototype.Sf = function (t) {
                    this.rl.jh(t), this.Fr();
                }),
                (t.prototype.Cf = function () {
                    this.rl.Uh(), this.Vr();
                }),
                (t.prototype.kf = function (t) {
                    (this.Yl = t), this.rl.qh(t);
                }),
                (t.prototype.xf = function (t) {
                    var i = !1;
                    return null !== this.Yl && Math.abs(t - this.Yl) > 20 && ((this.Yl = null), (i = !0)), this.rl.Hh(t), this.Fr(), i;
                }),
                (t.prototype.Nf = function () {
                    this.rl.Yh(), this.Vr(), (this.Yl = null);
                }),
                (t.prototype.P = function () {
                    return this.Hl;
                }),
                (t.prototype.Df = function (t, i, n) {
                    this.F.Ei(t, i);
                    var h = NaN,
                        s = this.rl.Br(t),
                        r = this.rl.br();
                    null !== r && (s = Math.min(Math.max(r.ss(), s), r.rs()));
                    var e = n.Di(),
                        u = e.H();
                    null !== u && (h = e.Ti(i, u)), (h = this.Ql.Yo(h, s, n)), this.F.Vi(s, h, n), this.Io(), this.Xl.sn(this.F.W(), { x: t, y: i });
                }),
                (t.prototype.Tf = function () {
                    this.wf().zi(), this.Io(), this.Xl.sn(null, null);
                }),
                (t.prototype.Ao = function () {
                    var t = this.F.ft();
                    if (null !== t) {
                        var i = this.F.Oi(),
                            n = this.F.Fi();
                        this.Df(i, n, t);
                    }
                    this.F.Wi();
                }),
                (t.prototype.Af = function (t, i) {
                    var n = this.rl.ri(0);
                    void 0 !== i && this.rl.V(i);
                    var h = this.rl.ri(0),
                        s = this.rl.Lr(),
                        r = this.rl.br();
                    if (null !== r && null !== n && null !== h) {
                        var e = r.Os(s),
                            u = n.Ds > h.Ds,
                            a = null !== t && t > s && !u,
                            o = e && this.rl.ct().shiftVisibleRangeOnNewBar;
                        if (a && !o) {
                            var l = t - s;
                            this.rl.wr(this.rl.Rr() - l);
                        }
                    }
                    this.rl.Ur(t);
                }),
                (t.prototype.Oo = function (t) {
                    null !== t && t.El();
                }),
                (t.prototype.Ou = function (t) {
                    var i = this.ql.find(function (i) {
                        return i.Fh().includes(t);
                    });
                    return void 0 === i ? null : i;
                }),
                (t.prototype.Fr = function () {
                    this.tf.Wi(),
                        this.ql.forEach(function (t) {
                            return t.El();
                        }),
                        this.Ao();
                }),
                (t.prototype.en = function () {
                    this.ql.forEach(function (t) {
                        return t.en();
                    }),
                        (this.ql.length = 0),
                        (this.Ni.localization.priceFormatter = void 0),
                        (this.Ni.localization.timeFormatter = void 0);
                }),
                (t.prototype.Lf = function () {
                    return this.Gl;
                }),
                (t.prototype.Pu = function () {
                    return this.Gl.ct();
                }),
                (t.prototype.vl = function () {
                    return this.$l;
                }),
                (t.prototype.Ef = function (t, i) {
                    var n = this.ql[0],
                        h = this.Bf(i, t, n);
                    return this.Hl.push(h), 1 === this.Hl.length ? this.rf() : this.Vr(), h;
                }),
                (t.prototype.Of = function (t) {
                    var i = this.Ou(t),
                        n = this.Hl.indexOf(t);
                    a(-1 !== n, "Series not found"), this.Hl.splice(n, 1), l(i).zh(t), t.en && t.en();
                }),
                (t.prototype.Do = function (t, i) {
                    var n = l(this.Ou(t));
                    n.zh(t);
                    var h = this.vf(i);
                    if (null === h) {
                        var s = t.oi();
                        n.Vh(t, i, s);
                    } else {
                        s = h.ft === n ? t.oi() : void 0;
                        h.ft.Vh(t, i, s);
                    }
                }),
                (t.prototype.Qr = function () {
                    var t = new qt(2);
                    t.ye(), this.ef(t);
                }),
                (t.prototype.Ff = function (t) {
                    var i = new qt(2);
                    i.xe(t), this.ef(i);
                }),
                (t.prototype.Ne = function () {
                    var t = new qt(2);
                    t.Ne(), this.ef(t);
                }),
                (t.prototype.dr = function (t) {
                    var i = new qt(2);
                    i.dr(t), this.ef(i);
                }),
                (t.prototype.wr = function (t) {
                    var i = new qt(2);
                    i.wr(t), this.ef(i);
                }),
                (t.prototype.Vf = function () {
                    return this.Ni.rightPriceScale.visible ? "right" : "left";
                }),
                (t.prototype.Pf = function () {
                    return this.sf;
                }),
                (t.prototype.zf = function () {
                    return this.nf;
                }),
                (t.prototype.J = function (t) {
                    var i = this.sf,
                        n = this.nf;
                    if (i === n) return i;
                    if (((t = Math.max(0, Math.min(100, Math.round(100 * t)))), null === this.Zl || this.Zl.Be !== n || this.Zl.Oe !== i)) this.Zl = { Be: n, Oe: i, Rf: new Map() };
                    else {
                        var h = this.Zl.Rf.get(t);
                        if (void 0 !== h) return h;
                    }
                    var s = (function (t, i, n) {
                        var h = F(t),
                            s = h[0],
                            r = h[1],
                            e = h[2],
                            u = h[3],
                            a = F(i),
                            o = a[0],
                            l = a[1],
                            f = a[2],
                            c = a[3],
                            v = [T(s + n * (o - s)), T(r + n * (l - r)), T(e + n * (f - e)), A(u + n * (c - u))];
                        return "rgba(" + v[0] + ", " + v[1] + ", " + v[2] + ", " + v[3] + ")";
                    })(n, i, t / 100);
                    return this.Zl.Rf.set(t, s), s;
                }),
                (t.prototype.mf = function (t, i) {
                    var n = new qt(i);
                    if (null !== t) {
                        var h = this.ql.indexOf(t);
                        n.be(h, { me: i });
                    }
                    return n;
                }),
                (t.prototype.uf = function (t, i) {
                    return void 0 === i && (i = 2), this.mf(this.Ou(t), i);
                }),
                (t.prototype.ef = function (t) {
                    this.Jl && this.Jl(t),
                        this.ql.forEach(function (t) {
                            return t.Ol().il().V();
                        });
                }),
                (t.prototype.Bf = function (t, i, n) {
                    var h = new Xi(this, t, i),
                        s = void 0 !== t.priceScaleId ? t.priceScaleId : this.Vf();
                    return n.Vh(h, s), Ut(s) || h.sh(t), h;
                }),
                (t.prototype.hf = function (t) {
                    var i = this.Ni.layout;
                    return "gradient" === i.background.type ? (0 === t ? i.background.topColor : i.background.bottomColor) : i.background.color;
                }),
                t
            );
        })(),
        en = { allowDownsampling: !0 };
    var un = (function () {
            function t(t, i) {
                var n = this;
                (this._resolutionMediaQueryList = null),
                    (this._resolutionListener = function (t) {
                        return n._onResolutionChanged();
                    }),
                    (this._canvasConfiguredListeners = []),
                    (this.canvas = t),
                    (this._canvasSize = { width: this.canvas.clientWidth, height: this.canvas.clientHeight }),
                    (this._options = i),
                    this._configureCanvas(),
                    this._installResolutionListener();
            }
            return (
                (t.prototype.destroy = function () {
                    (this._canvasConfiguredListeners.length = 0), this._uninstallResolutionListener(), (this.canvas = null);
                }),
                Object.defineProperty(t.prototype, "canvasSize", {
                    get: function () {
                        return { width: this._canvasSize.width, height: this._canvasSize.height };
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype.resizeCanvas = function (t) {
                    (this._canvasSize = { width: t.width, height: t.height }), this._configureCanvas();
                }),
                Object.defineProperty(t.prototype, "pixelRatio", {
                    get: function () {
                        var t = this.canvas.ownerDocument.defaultView;
                        if (null == t) throw new Error("No window is associated with the canvas");
                        return t.devicePixelRatio > 1 || this._options.allowDownsampling ? t.devicePixelRatio : 1;
                    },
                    enumerable: !0,
                    configurable: !0,
                }),
                (t.prototype.subscribeCanvasConfigured = function (t) {
                    this._canvasConfiguredListeners.push(t);
                }),
                (t.prototype.unsubscribeCanvasConfigured = function (t) {
                    this._canvasConfiguredListeners = this._canvasConfiguredListeners.filter(function (i) {
                        return i != t;
                    });
                }),
                (t.prototype._configureCanvas = function () {
                    var t = this.pixelRatio;
                    (this.canvas.style.width = this._canvasSize.width + "px"),
                        (this.canvas.style.height = this._canvasSize.height + "px"),
                        (this.canvas.width = this._canvasSize.width * t),
                        (this.canvas.height = this._canvasSize.height * t),
                        this._emitCanvasConfigured();
                }),
                (t.prototype._emitCanvasConfigured = function () {
                    var t = this;
                    this._canvasConfiguredListeners.forEach(function (i) {
                        return i.call(t);
                    });
                }),
                (t.prototype._installResolutionListener = function () {
                    if (null !== this._resolutionMediaQueryList) throw new Error("Resolution listener is already installed");
                    var t = this.canvas.ownerDocument.defaultView;
                    if (null == t) throw new Error("No window is associated with the canvas");
                    var i = t.devicePixelRatio;
                    (this._resolutionMediaQueryList = t.matchMedia("all and (resolution: " + i + "dppx)")), this._resolutionMediaQueryList.addListener(this._resolutionListener);
                }),
                (t.prototype._uninstallResolutionListener = function () {
                    null !== this._resolutionMediaQueryList && (this._resolutionMediaQueryList.removeListener(this._resolutionListener), (this._resolutionMediaQueryList = null));
                }),
                (t.prototype._reinstallResolutionListener = function () {
                    this._uninstallResolutionListener(), this._installResolutionListener();
                }),
                (t.prototype._onResolutionChanged = function () {
                    this._configureCanvas(), this._reinstallResolutionListener();
                }),
                t
            );
        })(),
        an = (function () {
            function t(t, i) {
                (this.ht = t), (this.st = i);
            }
            return (
                (t.prototype.on = function (t) {
                    return this.ht === t.ht && this.st === t.st;
                }),
                t
            );
        })();
    function on(t) {
        return (t.ownerDocument && t.ownerDocument.defaultView && t.ownerDocument.defaultView.devicePixelRatio) || 1;
    }
    function ln(t) {
        var i = l(t.getContext("2d"));
        return i.setTransform(1, 0, 0, 1, 0, 0), i;
    }
    function fn(t, i) {
        var n = t.createElement("canvas"),
            h = on(n);
        return (n.style.width = i.ht + "px"), (n.style.height = i.st + "px"), (n.width = i.ht * h), (n.height = i.st * h), n;
    }
    function cn(t, i) {
        var n = l(t.ownerDocument).createElement("canvas");
        t.appendChild(n);
        var h = (function (t, i) {
            return void 0 === i && (i = en), new un(t, i);
        })(n);
        return h.resizeCanvas({ width: i.ht, height: i.st }), h;
    }
    function vn(t, i) {
        return t.If - i.If;
    }
    function _n(t, i, n) {
        var h = (t.If - i.If) / (t.C - i.C);
        return Math.sign(h) * Math.min(Math.abs(h), n);
    }
    var dn = (function () {
            function t(t, i, n, h) {
                (this.Wf = null), (this.jf = null), (this.Uf = null), (this.qf = null), (this.Hf = null), (this.Yf = 0), (this.Kf = 0), (this.$f = !1), (this.Xf = t), (this.Zf = i), (this.Jf = n), (this.Yi = h);
            }
            return (
                (t.prototype.Gf = function (t, i) {
                    if (null !== this.Wf) {
                        if (this.Wf.C === i) return void (this.Wf.If = t);
                        if (Math.abs(this.Wf.If - t) < this.Yi) return;
                    }
                    (this.qf = this.Uf), (this.Uf = this.jf), (this.jf = this.Wf), (this.Wf = { C: i, If: t });
                }),
                (t.prototype.Yu = function (t, i) {
                    if (null !== this.Wf && null !== this.jf && !(i - this.Wf.C > 50)) {
                        var n = 0,
                            h = _n(this.Wf, this.jf, this.Zf),
                            s = vn(this.Wf, this.jf),
                            r = [h],
                            e = [s];
                        if (((n += s), null !== this.Uf)) {
                            var u = _n(this.jf, this.Uf, this.Zf);
                            if (Math.sign(u) === Math.sign(h)) {
                                var a = vn(this.jf, this.Uf);
                                if ((r.push(u), e.push(a), (n += a), null !== this.qf)) {
                                    var o = _n(this.Uf, this.qf, this.Zf);
                                    if (Math.sign(o) === Math.sign(h)) {
                                        var l = vn(this.Uf, this.qf);
                                        r.push(o), e.push(l), (n += l);
                                    }
                                }
                            }
                        }
                        for (var f, c, v, _ = 0, d = 0; d < r.length; ++d) _ += (e[d] / n) * r[d];
                        if (!(Math.abs(_) < this.Xf)) (this.Hf = { If: t, C: i }), (this.Kf = _), (this.Yf = ((f = Math.abs(_)), (c = this.Jf), (v = Math.log(c)), Math.log((1 * v) / -f) / v));
                    }
                }),
                (t.prototype.Qf = function (t) {
                    var i = l(this.Hf),
                        n = t - i.C;
                    return i.If + (this.Kf * (Math.pow(this.Jf, n) - 1)) / Math.log(this.Jf);
                }),
                (t.prototype.tc = function (t) {
                    return null === this.Hf || this.ic(t) === this.Yf;
                }),
                (t.prototype.nc = function () {
                    return this.$f;
                }),
                (t.prototype.hc = function () {
                    this.$f = !0;
                }),
                (t.prototype.ic = function (t) {
                    var i = t - l(this.Hf).C;
                    return Math.min(i, this.Yf);
                }),
                t
            );
        })(),
        wn = "undefined" != typeof window;
    var Mn = (function () {
        if (!wn) return !1;
        var t = !!navigator.maxTouchPoints || !!navigator.msMaxTouchPoints || (!!wn && ("ontouchstart" in window || Boolean(window.DocumentTouch && document instanceof window.DocumentTouch)));
        return "onorientationchange" in window && t;
    })();
    var bn = (function () {
            if (!wn) return !1;
            var t = /Android/i.test(navigator.userAgent),
                i = /iPhone|iPad|iPod|AppleWebKit.+Mobile/i.test(navigator.userAgent);
            return t || i;
        })(),
        mn = (function () {
            function t(t, i, n) {
                (this.sc = 0),
                    (this.rc = null),
                    (this.ec = null),
                    (this.uc = !1),
                    (this.ac = null),
                    (this.oc = !1),
                    (this.lc = !1),
                    (this.fc = null),
                    (this.cc = null),
                    (this.vc = null),
                    (this._c = null),
                    (this.dc = 0),
                    (this.wc = !1),
                    (this.Mc = !1),
                    (this.bc = !1),
                    (this.mc = t),
                    (this.gc = i),
                    (this.Ni = n),
                    this.yc();
            }
            return (
                (t.prototype.en = function () {
                    null !== this.fc && (this.fc(), (this.fc = null)), null !== this.cc && (this.cc(), (this.cc = null)), null !== this.vc && (this.vc(), (this.vc = null)), this.kc(), this.xc();
                }),
                (t.prototype.Nc = function (t) {
                    var i = this;
                    this.cc && this.cc();
                    var n = this.Sc.bind(this);
                    (this.cc = function () {
                        i.mc.removeEventListener("mousemove", n);
                    }),
                        this.mc.addEventListener("mousemove", n),
                        yn(t) && this.Sc(t);
                    var h = this.Cc(t);
                    this.Dc(h, this.gc.Tc);
                }),
                (t.prototype.xc = function () {
                    null !== this.rc && clearTimeout(this.rc), (this.sc = 0), (this.rc = null);
                }),
                (t.prototype.Sc = function (t) {
                    if (!this.bc || yn(t)) {
                        var i = this.Cc(t);
                        this.Dc(i, this.gc.Ac);
                    }
                }),
                (t.prototype.Lc = function (t) {
                    if ((!("button" in t) || 0 === t.button) && null === this._c) {
                        var i = yn(t);
                        if (!this.Mc || !i) {
                            this.wc = !0;
                            var n = this.Cc(t),
                                h = f(this.ac),
                                s = Math.abs(h.p - n.Ec),
                                r = Math.abs(h.g - n.Bc),
                                e = s + r > 5;
                            if (e || !i) {
                                if (e && !this.oc && i) {
                                    var u = 0.5 * s,
                                        a = r >= u && !this.Ni.Oc,
                                        o = u > r && !this.Ni.Fc;
                                    a || o || (this.Mc = !0);
                                }
                                e && ((this.oc = !0), (this.lc = !0), i && this.kc()), this.Mc || (this.Dc(n, this.gc.Vc), i && kn(t));
                            }
                        }
                    }
                }),
                (t.prototype.Pc = function (t) {
                    if (!("button" in t) || 0 === t.button) {
                        var i = this.Cc(t);
                        this.kc(),
                            (this.ac = null),
                            (this.bc = !1),
                            this.vc && (this.vc(), (this.vc = null)),
                            yn(t) && this.zc(t),
                            this.Dc(i, this.gc.Rc),
                            ++this.sc,
                            this.rc && this.sc > 1 ? (this.Dc(i, this.gc.Ic), this.xc()) : this.lc || this.Dc(i, this.gc.Wc),
                            yn(t) && (kn(t), this.zc(t), 0 === t.touches.length && (this.uc = !1));
                    }
                }),
                (t.prototype.kc = function () {
                    null !== this.ec && (clearTimeout(this.ec), (this.ec = null));
                }),
                (t.prototype.jc = function (t) {
                    if (!("button" in t) || 0 === t.button) {
                        var i = this.Cc(t);
                        (this.lc = !1), (this.oc = !1), (this.Mc = !1), yn(t) && this.Nc(t), (this.ac = { p: i.Ec, g: i.Bc }), this.vc && (this.vc(), (this.vc = null));
                        var n = this.Lc.bind(this),
                            h = this.Pc.bind(this),
                            s = this.mc.ownerDocument.documentElement;
                        (this.vc = function () {
                            s.removeEventListener("touchmove", n), s.removeEventListener("touchend", h), s.removeEventListener("mousemove", n), s.removeEventListener("mouseup", h);
                        }),
                            s.addEventListener("touchmove", n, { passive: !1 }),
                            s.addEventListener("touchend", h, { passive: !1 }),
                            this.kc(),
                            yn(t) && 1 === t.touches.length ? (this.ec = setTimeout(this.Uc.bind(this, t), 240)) : (s.addEventListener("mousemove", n), s.addEventListener("mouseup", h)),
                            (this.bc = !0),
                            this.Dc(i, this.gc.qc),
                            this.rc || ((this.sc = 0), (this.rc = setTimeout(this.xc.bind(this), 500)));
                    }
                }),
                (t.prototype.yc = function () {
                    var t = this;
                    this.mc.addEventListener("mouseenter", this.Nc.bind(this)), this.mc.addEventListener("touchcancel", this.kc.bind(this));
                    var i = this.mc.ownerDocument,
                        n = function (i) {
                            t.gc.Hc && ((i.composed && t.mc.contains(i.composedPath()[0])) || (i.target && t.mc.contains(i.target)) || t.gc.Hc());
                        };
                    (this.fc = function () {
                        i.removeEventListener("mousedown", n), i.removeEventListener("touchstart", n);
                    }),
                        i.addEventListener("mousedown", n),
                        i.addEventListener("touchstart", n, { passive: !0 }),
                        this.mc.addEventListener("mouseleave", this.zc.bind(this)),
                        this.mc.addEventListener("touchstart", this.jc.bind(this), { passive: !0 }),
                        Mn || this.mc.addEventListener("mousedown", this.jc.bind(this)),
                        this.Yc(),
                        this.mc.addEventListener("touchmove", function () {}, { passive: !1 });
                }),
                (t.prototype.Yc = function () {
                    var t = this;
                    (void 0 === this.gc.Kc && void 0 === this.gc.$c && void 0 === this.gc.Xc) ||
                        (this.mc.addEventListener(
                            "touchstart",
                            function (i) {
                                return t.Zc(i.touches);
                            },
                            { passive: !0 }
                        ),
                        this.mc.addEventListener(
                            "touchmove",
                            function (i) {
                                if (2 === i.touches.length && null !== t._c && void 0 !== t.gc.$c) {
                                    var n = gn(i.touches[0], i.touches[1]) / t.dc;
                                    t.gc.$c(t._c, n), kn(i);
                                }
                            },
                            { passive: !1 }
                        ),
                        this.mc.addEventListener("touchend", function (i) {
                            t.Zc(i.touches);
                        }));
                }),
                (t.prototype.Zc = function (t) {
                    1 === t.length && (this.wc = !1), 2 !== t.length || this.wc || this.uc ? this.Jc() : this.Gc(t);
                }),
                (t.prototype.Gc = function (t) {
                    var i = pn(this.mc);
                    (this._c = { p: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2, g: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2 }), (this.dc = gn(t[0], t[1])), void 0 !== this.gc.Kc && this.gc.Kc(), this.kc();
                }),
                (t.prototype.Jc = function () {
                    null !== this._c && ((this._c = null), void 0 !== this.gc.Xc && this.gc.Xc());
                }),
                (t.prototype.zc = function (t) {
                    this.cc && this.cc();
                    var i = this.Cc(t);
                    this.Dc(i, this.gc.Qc);
                }),
                (t.prototype.Uc = function (t) {
                    var i = this.Cc(t);
                    this.Dc(i, this.gc.tv), (this.lc = !0), (this.uc = !0);
                }),
                (t.prototype.Dc = function (t, i) {
                    i && i.call(this.gc, t);
                }),
                (t.prototype.Cc = function (t) {
                    var i;
                    i = "touches" in t && t.touches.length ? t.touches[0] : "changedTouches" in t && t.changedTouches.length ? t.changedTouches[0] : t;
                    var n = pn(this.mc);
                    return {
                        iv: i.clientX,
                        nv: i.clientY,
                        Ec: i.pageX,
                        Bc: i.pageY,
                        hv: i.screenX,
                        sv: i.screenY,
                        rv: i.clientX - n.left,
                        ev: i.clientY - n.top,
                        uv: t.ctrlKey,
                        av: t.altKey,
                        ov: t.shiftKey,
                        lv: t.metaKey,
                        ke: t.type.startsWith("mouse") ? "mouse" : "touch",
                        fv: t.view,
                    };
                }),
                t
            );
        })();
    function pn(t) {
        return t.getBoundingClientRect() || { left: 0, top: 0 };
    }
    function gn(t, i) {
        var n = t.clientX - i.clientX,
            h = t.clientY - i.clientY;
        return Math.sqrt(n * n + h * h);
    }
    function yn(t) {
        return Boolean(t.touches);
    }
    function kn(t) {
        t.cancelable && t.preventDefault();
    }
    var xn = (function () {
            function t(t, i, n, h) {
                (this.Au = new _i(200)), (this.fe = 0), (this.cv = ""), (this.oa = ""), (this.Su = []), (this.vv = new Map()), (this.fe = t), (this.cv = i), (this.oa = Wt(t, n, h));
            }
            return (
                (t.prototype.en = function () {
                    this.Au.Cu(), (this.Su = []), this.vv.clear();
                }),
                (t.prototype._v = function (t, i, n, h, s) {
                    var r = this.dv(t, i);
                    if ("left" !== s) {
                        var e = on(t.canvas);
                        n -= Math.floor(r.wv * e);
                    }
                    (h -= Math.floor(r.Mt / 2)), t.drawImage(r.Mv, n, h, r.wt, r.Mt);
                }),
                (t.prototype.dv = function (t, i) {
                    var n,
                        h = this;
                    if (this.vv.has(i)) n = o(this.vv.get(i));
                    else {
                        if (this.Su.length >= 200) {
                            var s = o(this.Su.shift());
                            this.vv.delete(s);
                        }
                        var r = on(t.canvas),
                            e = Math.ceil(this.fe / 4.5),
                            u = Math.round(this.fe / 10),
                            a = Math.ceil(this.Au.Ft(t, i)),
                            l = rt(Math.round(a + 2 * e)),
                            f = rt(this.fe + 2 * e),
                            c = fn(document, new an(l, f));
                        (n = { Ot: i, wv: Math.round(Math.max(1, a)), wt: Math.ceil(l * r), Mt: Math.ceil(f * r), Mv: c }),
                            0 !== a && (this.Su.push(n.Ot), this.vv.set(n.Ot, n)),
                            z((t = ln(n.Mv)), r, function () {
                                (t.font = h.oa), (t.fillStyle = h.cv), t.fillText(i, 0, f - e - u);
                            });
                    }
                    return n;
                }),
                t
            );
        })(),
        Nn = (function () {
            function t(t, i, n, h) {
                var s = this;
                (this.Gt = null),
                    (this.bv = null),
                    (this.mv = null),
                    (this.pv = !1),
                    (this.gv = new _i(50)),
                    (this.yv = new xn(11, "#000")),
                    (this.cv = null),
                    (this.oa = null),
                    (this.kv = 0),
                    (this.xv = function () {
                        s.Nv(s.Gl.ct()), s.di.Sv().vt().Vr();
                    }),
                    (this.Cv = function () {
                        s.di.Sv().vt().Vr();
                    }),
                    (this.di = t),
                    (this.Ni = i),
                    (this.Gl = n),
                    (this.Dv = "left" === h),
                    (this.Tv = document.createElement("div")),
                    (this.Tv.style.height = "100%"),
                    (this.Tv.style.overflow = "hidden"),
                    (this.Tv.style.width = "25px"),
                    (this.Tv.style.left = "0"),
                    (this.Tv.style.position = "relative"),
                    (this.Av = cn(this.Tv, new an(16, 16))),
                    this.Av.subscribeCanvasConfigured(this.xv);
                var r = this.Av.canvas;
                (r.style.position = "absolute"), (r.style.zIndex = "1"), (r.style.left = "0"), (r.style.top = "0"), (this.Lv = cn(this.Tv, new an(16, 16))), this.Lv.subscribeCanvasConfigured(this.Cv);
                var e = this.Lv.canvas;
                (e.style.position = "absolute"), (e.style.zIndex = "2"), (e.style.left = "0"), (e.style.top = "0");
                var u = { qc: this.Ev.bind(this), Vc: this.Bv.bind(this), Hc: this.Ov.bind(this), Rc: this.Fv.bind(this), Ic: this.Vv.bind(this), Tc: this.Pv.bind(this), Qc: this.zv.bind(this) };
                this.Rv = new mn(this.Lv.canvas, u, { Oc: !1, Fc: !0 });
            }
            return (
                (t.prototype.en = function () {
                    this.Rv.en(),
                        this.Lv.unsubscribeCanvasConfigured(this.Cv),
                        this.Lv.destroy(),
                        this.Av.unsubscribeCanvasConfigured(this.xv),
                        this.Av.destroy(),
                        null !== this.Gt && this.Gt.Ih().hn(this),
                        (this.Gt = null),
                        null !== this.mv && (clearTimeout(this.mv), (this.mv = null)),
                        this.yv.en();
                }),
                (t.prototype.Iv = function () {
                    return this.Tv;
                }),
                (t.prototype.S = function () {
                    return l(this.Gt).ct().borderColor;
                }),
                (t.prototype.Wv = function () {
                    return this.Ni.textColor;
                }),
                (t.prototype.Pt = function () {
                    return this.Ni.fontSize;
                }),
                (t.prototype.jv = function () {
                    return Wt(this.Pt(), this.Ni.fontFamily);
                }),
                (t.prototype.Uv = function () {
                    var t = this.Gl.ct(),
                        i = this.cv !== t.et,
                        n = this.oa !== t.Nt;
                    return (i || n) && (this.Nv(t), (this.cv = t.et)), n && (this.gv.Cu(), (this.oa = t.Nt)), t;
                }),
                (t.prototype.qv = function () {
                    if (null === this.Gt) return 0;
                    var t = 34,
                        i = this.Uv(),
                        n = ln(this.Av.canvas),
                        h = this.Gt.Bn();
                    (n.font = this.jv()), h.length > 0 && (t = Math.max(this.gv.Ft(n, h[0].An), this.gv.Ft(n, h[h.length - 1].An)));
                    for (var s = this.Hv(), r = s.length; r--; ) {
                        var e = this.gv.Ft(n, s[r].Ot());
                        e > t && (t = e);
                    }
                    var u = this.Gt.H();
                    if (null !== u && null !== this.bv) {
                        var a = this.Gt.Ti(1, u),
                            o = this.Gt.Ti(this.bv.st - 2, u);
                        t = Math.max(t, this.gv.Ft(n, this.Gt.ii(Math.floor(Math.min(a, o)) + 0.11111111111111, u)), this.gv.Ft(n, this.Gt.ii(Math.ceil(Math.max(a, o)) - 0.11111111111111, u)));
                    }
                    var l = Math.ceil(i.Tt + i.Dt + i.Et + i.Bt + t);
                    return (l += l % 2);
                }),
                (t.prototype.Yv = function (t) {
                    if (t.ht < 0 || t.st < 0) throw new Error("Try to set invalid size to PriceAxisWidget " + JSON.stringify(t));
                    (null !== this.bv && this.bv.on(t)) ||
                        ((this.bv = t),
                        this.Av.resizeCanvas({ width: t.ht, height: t.st }),
                        this.Lv.resizeCanvas({ width: t.ht, height: t.st }),
                        (this.Tv.style.width = t.ht + "px"),
                        (this.Tv.style.height = t.st + "px"),
                        (this.Tv.style.minWidth = t.ht + "px"));
                }),
                (t.prototype.Kv = function () {
                    return l(this.bv).ht;
                }),
                (t.prototype.fi = function (t) {
                    this.Gt !== t && (null !== this.Gt && this.Gt.Ih().hn(this), (this.Gt = t), t.Ih().Ji(this.Un.bind(this), this));
                }),
                (t.prototype.$ = function () {
                    return this.Gt;
                }),
                (t.prototype.Cu = function () {
                    var t = this.di.$v();
                    this.di.Sv().vt().Al(t, l(this.$()));
                }),
                (t.prototype.Xv = function (t) {
                    if (null !== this.bv) {
                        if (1 !== t) {
                            var i = ln(this.Av.canvas);
                            this.Zv(), this.Jv(i, this.Av.pixelRatio), this.vu(i, this.Av.pixelRatio), this.Gv(i, this.Av.pixelRatio), this.Qv(i, this.Av.pixelRatio);
                        }
                        var n = ln(this.Lv.canvas),
                            h = this.bv.ht,
                            s = this.bv.st;
                        z(n, this.Lv.pixelRatio, function () {
                            n.clearRect(0, 0, h, s);
                        }),
                            this.t_(n, this.Lv.pixelRatio);
                    }
                }),
                (t.prototype.i_ = function () {
                    return this.Av.canvas;
                }),
                (t.prototype.Ev = function (t) {
                    if (null !== this.Gt && !this.Gt.ti() && this.di.Sv().ct().handleScale.axisPressedMouseMove.price) {
                        var i = this.di.Sv().vt(),
                            n = this.di.$v();
                        (this.pv = !0), i.kl(n, this.Gt, t.ev);
                    }
                }),
                (t.prototype.Bv = function (t) {
                    if (null !== this.Gt && this.di.Sv().ct().handleScale.axisPressedMouseMove.price) {
                        var i = this.di.Sv().vt(),
                            n = this.di.$v(),
                            h = this.Gt;
                        i.xl(n, h, t.ev);
                    }
                }),
                (t.prototype.Ov = function () {
                    if (null !== this.Gt && this.di.Sv().ct().handleScale.axisPressedMouseMove.price) {
                        var t = this.di.Sv().vt(),
                            i = this.di.$v(),
                            n = this.Gt;
                        this.pv && ((this.pv = !1), t.Nl(i, n));
                    }
                }),
                (t.prototype.Fv = function (t) {
                    if (null !== this.Gt && this.di.Sv().ct().handleScale.axisPressedMouseMove.price) {
                        var i = this.di.Sv().vt(),
                            n = this.di.$v();
                        (this.pv = !1), i.Nl(n, this.Gt);
                    }
                }),
                (t.prototype.Vv = function (t) {
                    this.di.Sv().ct().handleScale.axisDoubleClickReset && this.Cu();
                }),
                (t.prototype.Pv = function (t) {
                    null !== this.Gt && (!this.di.Sv().vt().ct().handleScale.axisPressedMouseMove.price || this.Gt.lh() || this.Gt.fh() || this.n_(1));
                }),
                (t.prototype.zv = function (t) {
                    this.n_(0);
                }),
                (t.prototype.Hv = function () {
                    var t = this,
                        i = [],
                        n = null === this.Gt ? void 0 : this.Gt;
                    return (
                        (function (h) {
                            for (var s = 0; s < h.length; ++s) for (var r = h[s].ci(t.di.$v(), n), e = 0; e < r.length; e++) i.push(r[e]);
                        })(this.di.$v().Fh()),
                        i
                    );
                }),
                (t.prototype.Jv = function (t, i) {
                    var n = this;
                    if (null !== this.bv) {
                        var h = this.bv.ht,
                            s = this.bv.st;
                        z(t, i, function () {
                            var i = n.di.$v().vt(),
                                r = i.zf(),
                                e = i.Pf();
                            r === e ? R(t, 0, 0, h, s, r) : I(t, 0, 0, h, s, r, e);
                        });
                    }
                }),
                (t.prototype.vu = function (t, i) {
                    if (null !== this.bv && null !== this.Gt && this.Gt.ct().borderVisible) {
                        t.save(), (t.fillStyle = this.S());
                        var n,
                            h = Math.max(1, Math.floor(this.Uv().Tt * i));
                        (n = this.Dv ? Math.floor(this.bv.ht * i) - h : 0), t.fillRect(n, 0, h, Math.ceil(this.bv.st * i)), t.restore();
                    }
                }),
                (t.prototype.Gv = function (t, i) {
                    if (null !== this.bv && null !== this.Gt) {
                        var n = this.Gt.Bn();
                        t.save(), (t.strokeStyle = this.S()), (t.font = this.jv()), (t.fillStyle = this.S());
                        var h = this.Uv(),
                            s = this.Gt.ct().borderVisible && this.Gt.ct().drawTicks,
                            r = this.Dv ? Math.floor((this.bv.ht - h.Dt) * i - h.Tt * i) : Math.floor(h.Tt * i),
                            e = this.Dv ? Math.round(r - h.Et * i) : Math.round(r + h.Dt * i + h.Et * i),
                            u = this.Dv ? "right" : "left",
                            a = Math.max(1, Math.floor(i)),
                            o = Math.floor(0.5 * i);
                        if (s) {
                            var l = Math.round(h.Dt * i);
                            t.beginPath();
                            for (var f = 0, c = n; f < c.length; f++) {
                                var v = c[f];
                                t.rect(r, Math.round(v.Tn * i) - o, l, a);
                            }
                            t.fill();
                        }
                        t.fillStyle = this.Wv();
                        for (var _ = 0, d = n; _ < d.length; _++) {
                            v = d[_];
                            this.yv._v(t, v.An, e, Math.round(v.Tn * i), u);
                        }
                        t.restore();
                    }
                }),
                (t.prototype.Zv = function () {
                    if (null !== this.bv && null !== this.Gt) {
                        var t = this.bv.st / 2,
                            i = [],
                            n = this.Gt.Fh().slice(),
                            h = this.di.$v(),
                            s = this.Uv();
                        this.Gt === h.Di() &&
                            this.di
                                .$v()
                                .Fh()
                                .forEach(function (t) {
                                    h.Fu(t) && n.push(t);
                                });
                        var r = this.Gt.Oh()[0],
                            e = this.Gt;
                        n.forEach(function (n) {
                            var s = n.ci(h, e);
                            s.forEach(function (t) {
                                t.Kt(null), t.$t() && i.push(t);
                            }),
                                r === n && s.length > 0 && (t = s[0].zt());
                        });
                        var u = i.filter(function (i) {
                                return i.zt() <= t;
                            }),
                            a = i.filter(function (i) {
                                return i.zt() > t;
                            });
                        if (
                            (u.sort(function (t, i) {
                                return i.zt() - t.zt();
                            }),
                            u.length && a.length && a.push(u[0]),
                            a.sort(function (t, i) {
                                return t.zt() - i.zt();
                            }),
                            i.forEach(function (t) {
                                return t.Kt(t.zt());
                            }),
                            this.Gt.ct().alignLabels)
                        ) {
                            for (var o = 1; o < u.length; o++) {
                                var l = u[o],
                                    f = (v = u[o - 1]).Mt(s, !1);
                                l.zt() > (_ = v.Yt()) - f && l.Kt(_ - f);
                            }
                            for (var c = 1; c < a.length; c++) {
                                var v, _;
                                (l = a[c]), (f = (v = a[c - 1]).Mt(s, !0));
                                l.zt() < (_ = v.Yt()) + f && l.Kt(_ + f);
                            }
                        }
                    }
                }),
                (t.prototype.Qv = function (t, i) {
                    var n = this;
                    if (null !== this.bv) {
                        t.save();
                        var h = this.bv,
                            s = this.Hv(),
                            r = this.Uv(),
                            e = this.Dv ? "right" : "left";
                        s.forEach(function (s) {
                            if (s.Xt()) {
                                var u = s.R(l(n.Gt));
                                t.save(), u.h(t, r, n.gv, h.ht, e, i), t.restore();
                            }
                        }),
                            t.restore();
                    }
                }),
                (t.prototype.t_ = function (t, i) {
                    var n = this;
                    if (null !== this.bv && null !== this.Gt) {
                        t.save();
                        var h = this.bv,
                            s = this.di.Sv().vt(),
                            r = [],
                            e = this.di.$v(),
                            u = s.wf().ci(e, this.Gt);
                        u.length && r.push(u);
                        var a = this.Uv(),
                            o = this.Dv ? "right" : "left";
                        r.forEach(function (s) {
                            s.forEach(function (s) {
                                t.save(), s.R(l(n.Gt)).h(t, a, n.gv, h.ht, o, i), t.restore();
                            });
                        }),
                            t.restore();
                    }
                }),
                (t.prototype.n_ = function (t) {
                    this.Tv.style.cursor = 1 === t ? "ns-resize" : "default";
                }),
                (t.prototype.Un = function () {
                    var t = this,
                        i = this.qv();
                    if (this.kv < i) {
                        var n = this.di.Sv();
                        null === this.mv &&
                            (this.mv = setTimeout(function () {
                                n && n.vt().rf(), (t.mv = null);
                            }, 100));
                    }
                    this.kv = i;
                }),
                (t.prototype.Nv = function (t) {
                    this.yv.en(), (this.yv = new xn(t.Pt, t.et, t.le));
                }),
                t
            );
        })(),
        Sn = bn;
    function Cn(t, i, n, h, s) {
        t.o && t.o(i, n, h, s);
    }
    function Dn(t, i, n, h, s) {
        t.h(i, n, h, s);
    }
    function Tn(t, i) {
        return t.vi(i);
    }
    function An(t, i) {
        return void 0 !== t.Ro ? t.Ro(i) : [];
    }
    var Ln = (function () {
            function t(t, i) {
                var n = this;
                (this.bv = new an(0, 0)),
                    (this.h_ = null),
                    (this.s_ = null),
                    (this.r_ = null),
                    (this.e_ = !1),
                    (this.u_ = new tt()),
                    (this.a_ = 0),
                    (this.o_ = !1),
                    (this.l_ = null),
                    (this.f_ = !1),
                    (this.c_ = null),
                    (this.v_ = null),
                    (this.xv = function () {
                        return n.__ && n.si().Vr();
                    }),
                    (this.Cv = function () {
                        return n.__ && n.si().Vr();
                    }),
                    (this.d_ = t),
                    (this.__ = i),
                    this.__.Bl().Ji(this.w_.bind(this), this, !0),
                    (this.M_ = document.createElement("td")),
                    (this.M_.style.padding = "0"),
                    (this.M_.style.position = "relative");
                var h = document.createElement("div");
                (h.style.width = "100%"),
                    (h.style.height = "100%"),
                    (h.style.position = "relative"),
                    (h.style.overflow = "hidden"),
                    (this.b_ = document.createElement("td")),
                    (this.b_.style.padding = "0"),
                    (this.m_ = document.createElement("td")),
                    (this.m_.style.padding = "0"),
                    this.M_.appendChild(h),
                    (this.Av = cn(h, new an(16, 16))),
                    this.Av.subscribeCanvasConfigured(this.xv);
                var s = this.Av.canvas;
                (s.style.position = "absolute"), (s.style.zIndex = "1"), (s.style.left = "0"), (s.style.top = "0"), (this.Lv = cn(h, new an(16, 16))), this.Lv.subscribeCanvasConfigured(this.Cv);
                var r = this.Lv.canvas;
                (r.style.position = "absolute"),
                    (r.style.zIndex = "2"),
                    (r.style.left = "0"),
                    (r.style.top = "0"),
                    (this.p_ = document.createElement("tr")),
                    this.p_.appendChild(this.b_),
                    this.p_.appendChild(this.M_),
                    this.p_.appendChild(this.m_),
                    this.g_();
                var e = this.Sv().ct().handleScroll;
                this.Rv = new mn(this.Lv.canvas, this, { Oc: !e.vertTouchDrag, Fc: !e.horzTouchDrag });
            }
            return (
                (t.prototype.en = function () {
                    null !== this.h_ && this.h_.en(),
                        null !== this.s_ && this.s_.en(),
                        this.Lv.unsubscribeCanvasConfigured(this.Cv),
                        this.Lv.destroy(),
                        this.Av.unsubscribeCanvasConfigured(this.xv),
                        this.Av.destroy(),
                        null !== this.__ && this.__.Bl().hn(this),
                        this.Rv.en();
                }),
                (t.prototype.$v = function () {
                    return l(this.__);
                }),
                (t.prototype.y_ = function (i) {
                    null !== this.__ && this.__.Bl().hn(this), (this.__ = i), null !== this.__ && this.__.Bl().Ji(t.prototype.w_.bind(this), this, !0), this.g_();
                }),
                (t.prototype.Sv = function () {
                    return this.d_;
                }),
                (t.prototype.Iv = function () {
                    return this.p_;
                }),
                (t.prototype.g_ = function () {
                    if (null !== this.__ && (this.k_(), 0 !== this.si().P().length)) {
                        if (null !== this.h_) {
                            var t = this.__.gl();
                            this.h_.fi(l(t));
                        }
                        if (null !== this.s_) {
                            var i = this.__.yl();
                            this.s_.fi(l(i));
                        }
                    }
                }),
                (t.prototype._l = function () {
                    return null !== this.__ ? this.__._l() : 0;
                }),
                (t.prototype.dl = function (t) {
                    this.__ && this.__.dl(t);
                }),
                (t.prototype.Tc = function (t) {
                    if (this.__) {
                        var i = t.rv,
                            n = t.ev;
                        Mn || this.x_(i, n);
                    }
                }),
                (t.prototype.qc = function (t) {
                    if (((this.o_ = !1), (this.f_ = null !== this.l_), this.__)) {
                        if ((this.N_(), document.activeElement !== document.body && document.activeElement !== document.documentElement)) l(document.activeElement).blur();
                        else {
                            var i = document.getSelection();
                            null !== i && i.removeAllRanges();
                        }
                        var n = this.si();
                        if (!this.__.Di().ti() && !n.j().ti()) {
                            if (null !== this.l_) {
                                var h = n.wf();
                                (this.c_ = { x: h.bt(), y: h.gt() }), (this.l_ = { x: t.rv, y: t.ev });
                            }
                            Mn || this.x_(t.rv, t.ev);
                        }
                    }
                }),
                (t.prototype.Ac = function (t) {
                    if (this.__) {
                        var i = t.rv,
                            n = t.ev;
                        if ((this.S_() && this.C_(), !Mn)) {
                            this.x_(i, n);
                            var h = this.la(i, n);
                            this.si().lf(h && { ff: h.ff, D_: h.D_ }), null !== h && void 0 !== h.fv.T_ && h.fv.T_(i, n);
                        }
                    }
                }),
                (t.prototype.Wc = function (t) {
                    if (null !== this.__) {
                        var i = t.rv,
                            n = t.ev,
                            h = this.la(i, n);
                        if ((null !== h && void 0 !== h.fv.A_ && h.fv.A_(i, n), this.u_.rn())) {
                            var s = this.si().wf().W();
                            this.u_.sn(s, { x: i, y: n });
                        }
                        this.L_();
                    }
                }),
                (t.prototype.Vc = function (t) {
                    if (null !== this.__) {
                        var i = this.si(),
                            n = t.rv,
                            h = t.ev;
                        if (null !== this.l_) {
                            this.f_ = !1;
                            var s = l(this.c_),
                                r = s.x + (n - this.l_.x),
                                e = s.y + (h - this.l_.y);
                            this.x_(r, e);
                        } else this.S_() || this.x_(n, h);
                        if (!i.j().ti()) {
                            var u = this.d_.ct(),
                                a = u.handleScroll,
                                o = u.kineticScroll;
                            if ((a.pressedMouseMove && "touch" !== t.ke) || ((a.horzTouchDrag || a.vertTouchDrag) && "mouse" !== t.ke)) {
                                var f = this.__.Di(),
                                    c = performance.now();
                                null !== this.r_ || this.E_() || (this.r_ = { x: t.iv, y: t.nv, Ds: c, rv: t.rv, ev: t.ev }),
                                    null !== this.v_ && this.v_.Gf(t.rv, c),
                                    null === this.r_ ||
                                        this.e_ ||
                                        (this.r_.x === t.iv && this.r_.y === t.nv) ||
                                        (null === this.v_ && (("touch" === t.ke && o.touch) || ("mouse" === t.ke && o.mouse)) && ((this.v_ = new dn(0.2, 7, 0.997, 15)), this.v_.Gf(this.r_.rv, this.r_.Ds), this.v_.Gf(t.rv, c)),
                                        f.ti() || i.Sl(this.__, f, t.ev),
                                        i.kf(t.rv),
                                        (this.e_ = !0)),
                                    this.e_ && (f.ti() || i.Cl(this.__, f, t.ev), i.xf(t.rv));
                            }
                        }
                    }
                }),
                (t.prototype.Rc = function (t) {
                    null !== this.__ && ((this.o_ = !1), this.B_(t));
                }),
                (t.prototype.tv = function (t) {
                    if (((this.o_ = !0), null === this.l_ && Sn)) {
                        var i = { x: t.rv, y: t.ev };
                        this.O_(i, i);
                    }
                }),
                (t.prototype.Qc = function (t) {
                    null !== this.__ && (this.__.vt().lf(null), bn || this.C_());
                }),
                (t.prototype.F_ = function () {
                    return this.u_;
                }),
                (t.prototype.Kc = function () {
                    (this.a_ = 1), this.N_();
                }),
                (t.prototype.$c = function (t, i) {
                    if (this.d_.ct().handleScale.pinch) {
                        var n = 5 * (i - this.a_);
                        (this.a_ = i), this.si().gf(t.p, n);
                    }
                }),
                (t.prototype.la = function (t, i) {
                    var n = this.__;
                    if (null === n) return null;
                    for (var h = 0, s = n.Fh(); h < s.length; h++) {
                        var r = s[h],
                            e = this.V_(r.vi(n), t, i);
                        if (null !== e) return { ff: r, fv: e.fv, D_: e.D_ };
                    }
                    return null;
                }),
                (t.prototype.P_ = function (t, i) {
                    l("left" === i ? this.h_ : this.s_).Yv(new an(t, this.bv.st));
                }),
                (t.prototype.z_ = function () {
                    return this.bv;
                }),
                (t.prototype.Yv = function (t) {
                    if (t.ht < 0 || t.st < 0) throw new Error("Try to set invalid size to PaneWidget " + JSON.stringify(t));
                    this.bv.on(t) || ((this.bv = t), this.Av.resizeCanvas({ width: t.ht, height: t.st }), this.Lv.resizeCanvas({ width: t.ht, height: t.st }), (this.M_.style.width = t.ht + "px"), (this.M_.style.height = t.st + "px"));
                }),
                (t.prototype.R_ = function () {
                    var t = l(this.__);
                    t.pl(t.gl()), t.pl(t.yl());
                    for (var i = 0, n = t.Oh(); i < n.length; i++) {
                        var h = n[i];
                        if (t.Fu(h)) {
                            var s = h.$();
                            null !== s && t.pl(s), h.Wi();
                        }
                    }
                }),
                (t.prototype.i_ = function () {
                    return this.Av.canvas;
                }),
                (t.prototype.Xv = function (t) {
                    if (0 !== t && null !== this.__) {
                        if ((t > 1 && this.R_(), null !== this.h_ && this.h_.Xv(t), null !== this.s_ && this.s_.Xv(t), 1 !== t)) {
                            var i = ln(this.Av.canvas);
                            i.save(), this.Jv(i, this.Av.pixelRatio), this.__ && (this.I_(i, this.Av.pixelRatio), this.W_(i, this.Av.pixelRatio), this.j_(i, this.Av.pixelRatio, Tn)), i.restore();
                        }
                        var n = ln(this.Lv.canvas);
                        n.clearRect(0, 0, Math.ceil(this.bv.ht * this.Lv.pixelRatio), Math.ceil(this.bv.st * this.Lv.pixelRatio)), this.j_(n, this.Av.pixelRatio, An), this.U_(n, this.Lv.pixelRatio);
                    }
                }),
                (t.prototype.q_ = function () {
                    return this.h_;
                }),
                (t.prototype.H_ = function () {
                    return this.s_;
                }),
                (t.prototype.w_ = function () {
                    null !== this.__ && this.__.Bl().hn(this), (this.__ = null);
                }),
                (t.prototype.Jv = function (t, i) {
                    var n = this;
                    z(t, i, function () {
                        var i = n.si(),
                            h = i.zf(),
                            s = i.Pf();
                        h === s ? R(t, 0, 0, n.bv.ht, n.bv.st, s) : I(t, 0, 0, n.bv.ht, n.bv.st, h, s);
                    });
                }),
                (t.prototype.I_ = function (t, i) {
                    var n = l(this.__),
                        h = n.Ol().il().R(n.Mt(), n.wt());
                    null !== h && (t.save(), h.h(t, i, !1), t.restore());
                }),
                (t.prototype.W_ = function (t, i) {
                    var n = this.si().df();
                    this.Y_(t, i, Tn, Cn, n), this.Y_(t, i, Tn, Dn, n);
                }),
                (t.prototype.U_ = function (t, i) {
                    this.Y_(t, i, Tn, Dn, this.si().wf());
                }),
                (t.prototype.j_ = function (t, i, n) {
                    for (var h = l(this.__).Fh(), s = 0, r = h; s < r.length; s++) {
                        var e = r[s];
                        this.Y_(t, i, n, Cn, e);
                    }
                    for (var u = 0, a = h; u < a.length; u++) {
                        e = a[u];
                        this.Y_(t, i, n, Dn, e);
                    }
                }),
                (t.prototype.Y_ = function (t, i, n, h, s) {
                    for (var r = l(this.__), e = n(s, r), u = r.Mt(), a = r.wt(), o = r.vt().af(), f = null !== o && o.ff === s, c = null !== o && f && void 0 !== o.D_ ? o.D_.fa : void 0, v = 0, _ = e; v < _.length; v++) {
                        var d = _[v].R(u, a);
                        null !== d && (t.save(), h(d, t, i, f, c), t.restore());
                    }
                }),
                (t.prototype.V_ = function (t, i, n) {
                    for (var h = 0, s = t; h < s.length; h++) {
                        var r = s[h],
                            e = r.R(this.bv.st, this.bv.ht);
                        if (null !== e && e.la) {
                            var u = e.la(i, n);
                            if (null !== u) return { fv: r, D_: u };
                        }
                    }
                    return null;
                }),
                (t.prototype.k_ = function () {
                    if (null !== this.__) {
                        var t = this.d_;
                        t.ct().leftPriceScale.visible || null === this.h_ || (this.b_.removeChild(this.h_.Iv()), this.h_.en(), (this.h_ = null)),
                            t.ct().rightPriceScale.visible || null === this.s_ || (this.m_.removeChild(this.s_.Iv()), this.s_.en(), (this.s_ = null));
                        var i = t.vt().Lf();
                        t.ct().leftPriceScale.visible && null === this.h_ && ((this.h_ = new Nn(this, t.ct().layout, i, "left")), this.b_.appendChild(this.h_.Iv())),
                            t.ct().rightPriceScale.visible && null === this.s_ && ((this.s_ = new Nn(this, t.ct().layout, i, "right")), this.m_.appendChild(this.s_.Iv()));
                    }
                }),
                (t.prototype.S_ = function () {
                    return Sn && null === this.l_;
                }),
                (t.prototype.E_ = function () {
                    return (Sn && this.o_) || null !== this.l_;
                }),
                (t.prototype.K_ = function (t) {
                    return Math.max(0, Math.min(t, this.bv.ht - 1));
                }),
                (t.prototype.X_ = function (t) {
                    return Math.max(0, Math.min(t, this.bv.st - 1));
                }),
                (t.prototype.x_ = function (t, i) {
                    this.si().Df(this.K_(t), this.X_(i), l(this.__));
                }),
                (t.prototype.C_ = function () {
                    this.si().Tf();
                }),
                (t.prototype.L_ = function () {
                    this.f_ && ((this.l_ = null), this.C_());
                }),
                (t.prototype.O_ = function (t, i) {
                    (this.l_ = t), (this.f_ = !1), this.x_(i.x, i.y);
                    var n = this.si().wf();
                    this.c_ = { x: n.bt(), y: n.gt() };
                }),
                (t.prototype.si = function () {
                    return this.d_.vt();
                }),
                (t.prototype.Z_ = function () {
                    var t = this.si(),
                        i = this.$v(),
                        n = i.Di();
                    t.Dl(i, n), t.Nf(), (this.r_ = null), (this.e_ = !1);
                }),
                (t.prototype.B_ = function (t) {
                    var i = this;
                    if (this.e_) {
                        var n = performance.now();
                        if ((null !== this.v_ && this.v_.Yu(t.rv, n), null === this.v_ || this.v_.tc(n))) this.Z_();
                        else {
                            var h = this.si(),
                                s = h.j(),
                                r = this.v_,
                                e = function () {
                                    if (!r.nc()) {
                                        var t = performance.now(),
                                            n = r.tc(t);
                                        if (!r.nc()) {
                                            var u = s.Rr();
                                            h.xf(r.Qf(t)), u === s.Rr() && ((n = !0), (i.v_ = null));
                                        }
                                        n ? i.Z_() : requestAnimationFrame(e);
                                    }
                                };
                            requestAnimationFrame(e);
                        }
                    }
                }),
                (t.prototype.N_ = function () {
                    var t = performance.now(),
                        i = null === this.v_ || this.v_.tc(t);
                    null !== this.v_ && (i || this.Z_()), null !== this.v_ && (this.v_.hc(), (this.v_ = null));
                }),
                t
            );
        })(),
        En = (function () {
            function t(t, i, n, h, s) {
                var r = this;
                (this.B = !0),
                    (this.bv = new an(0, 0)),
                    (this.xv = function () {
                        return r.Xv(3);
                    }),
                    (this.Dv = "left" === t),
                    (this.Gl = n.Lf),
                    (this.Ni = i),
                    (this.J_ = h),
                    (this.G_ = s),
                    (this.Tv = document.createElement("div")),
                    (this.Tv.style.width = "25px"),
                    (this.Tv.style.height = "100%"),
                    (this.Tv.style.overflow = "hidden"),
                    (this.Av = cn(this.Tv, new an(16, 16))),
                    this.Av.subscribeCanvasConfigured(this.xv);
            }
            return (
                (t.prototype.en = function () {
                    this.Av.unsubscribeCanvasConfigured(this.xv), this.Av.destroy();
                }),
                (t.prototype.Iv = function () {
                    return this.Tv;
                }),
                (t.prototype.z_ = function () {
                    return this.bv;
                }),
                (t.prototype.Yv = function (t) {
                    if (t.ht < 0 || t.st < 0) throw new Error("Try to set invalid size to PriceAxisStub " + JSON.stringify(t));
                    this.bv.on(t) || ((this.bv = t), this.Av.resizeCanvas({ width: t.ht, height: t.st }), (this.Tv.style.width = t.ht + "px"), (this.Tv.style.minWidth = t.ht + "px"), (this.Tv.style.height = t.st + "px"), (this.B = !0));
                }),
                (t.prototype.Xv = function (t) {
                    if ((!(t < 3) || this.B) && 0 !== this.bv.ht && 0 !== this.bv.st) {
                        this.B = !1;
                        var i = ln(this.Av.canvas);
                        this.Jv(i, this.Av.pixelRatio), this.vu(i, this.Av.pixelRatio);
                    }
                }),
                (t.prototype.i_ = function () {
                    return this.Av.canvas;
                }),
                (t.prototype.vu = function (t, i) {
                    if (this.J_()) {
                        var n = this.bv.ht;
                        t.save(), (t.fillStyle = this.Ni.timeScale.borderColor);
                        var h = Math.floor(this.Gl.ct().Tt * i),
                            s = this.Dv ? Math.round(n * i) - h : 0;
                        t.fillRect(s, 0, h, h), t.restore();
                    }
                }),
                (t.prototype.Jv = function (t, i) {
                    var n = this;
                    z(t, i, function () {
                        R(t, 0, 0, n.bv.ht, n.bv.st, n.G_());
                    });
                }),
                t
            );
        })();
    function Bn(t, i) {
        return t.Rs > i.Rs ? t : i;
    }
    var On = (function () {
            function t(t) {
                var i = this;
                (this.Q_ = null),
                    (this.td = null),
                    (this.oe = null),
                    (this.nd = !1),
                    (this.bv = new an(0, 0)),
                    (this.gv = new _i(5)),
                    (this.xv = function () {
                        return i.d_.vt().Vr();
                    }),
                    (this.Cv = function () {
                        return i.d_.vt().Vr();
                    }),
                    (this.d_ = t),
                    (this.Ni = t.ct().layout),
                    (this.hd = document.createElement("tr")),
                    (this.sd = document.createElement("td")),
                    (this.sd.style.padding = "0"),
                    (this.rd = document.createElement("td")),
                    (this.rd.style.padding = "0"),
                    (this.Tv = document.createElement("td")),
                    (this.Tv.style.height = "25px"),
                    (this.Tv.style.padding = "0"),
                    (this.ed = document.createElement("div")),
                    (this.ed.style.width = "100%"),
                    (this.ed.style.height = "100%"),
                    (this.ed.style.position = "relative"),
                    (this.ed.style.overflow = "hidden"),
                    this.Tv.appendChild(this.ed),
                    (this.Av = cn(this.ed, new an(16, 16))),
                    this.Av.subscribeCanvasConfigured(this.xv);
                var n = this.Av.canvas;
                (n.style.position = "absolute"), (n.style.zIndex = "1"), (n.style.left = "0"), (n.style.top = "0"), (this.Lv = cn(this.ed, new an(16, 16))), this.Lv.subscribeCanvasConfigured(this.Cv);
                var h = this.Lv.canvas;
                (h.style.position = "absolute"),
                    (h.style.zIndex = "2"),
                    (h.style.left = "0"),
                    (h.style.top = "0"),
                    this.hd.appendChild(this.sd),
                    this.hd.appendChild(this.Tv),
                    this.hd.appendChild(this.rd),
                    this.ud(),
                    this.d_.vt().vl().Ji(this.ud.bind(this), this),
                    (this.Rv = new mn(this.Lv.canvas, this, { Oc: !0, Fc: !1 }));
            }
            return (
                (t.prototype.en = function () {
                    this.Rv.en(), null !== this.Q_ && this.Q_.en(), null !== this.td && this.td.en(), this.Lv.unsubscribeCanvasConfigured(this.Cv), this.Lv.destroy(), this.Av.unsubscribeCanvasConfigured(this.xv), this.Av.destroy();
                }),
                (t.prototype.Iv = function () {
                    return this.hd;
                }),
                (t.prototype.ad = function () {
                    return this.Q_;
                }),
                (t.prototype.od = function () {
                    return this.td;
                }),
                (t.prototype.qc = function (t) {
                    if (!this.nd) {
                        this.nd = !0;
                        var i = this.d_.vt();
                        !i.j().ti() && this.d_.ct().handleScale.axisPressedMouseMove.time && i.pf(t.rv);
                    }
                }),
                (t.prototype.Hc = function () {
                    var t = this.d_.vt();
                    !t.j().ti() && this.nd && ((this.nd = !1), this.d_.ct().handleScale.axisPressedMouseMove.time && t.Cf());
                }),
                (t.prototype.Vc = function (t) {
                    var i = this.d_.vt();
                    !i.j().ti() && this.d_.ct().handleScale.axisPressedMouseMove.time && i.Sf(t.rv);
                }),
                (t.prototype.Rc = function (t) {
                    this.nd = !1;
                    var i = this.d_.vt();
                    (i.j().ti() && !this.d_.ct().handleScale.axisPressedMouseMove.time) || i.Cf();
                }),
                (t.prototype.Ic = function () {
                    this.d_.ct().handleScale.axisDoubleClickReset && this.d_.vt().Ne();
                }),
                (t.prototype.Tc = function (t) {
                    this.d_.vt().ct().handleScale.axisPressedMouseMove.time && this.n_(1);
                }),
                (t.prototype.Qc = function (t) {
                    this.n_(0);
                }),
                (t.prototype.z_ = function () {
                    return this.bv;
                }),
                (t.prototype.ld = function (t, i, n) {
                    (this.bv && this.bv.on(t)) ||
                        ((this.bv = t), this.Av.resizeCanvas({ width: t.ht, height: t.st }), this.Lv.resizeCanvas({ width: t.ht, height: t.st }), (this.Tv.style.width = t.ht + "px"), (this.Tv.style.height = t.st + "px")),
                        null !== this.Q_ && this.Q_.Yv(new an(i, t.st)),
                        null !== this.td && this.td.Yv(new an(n, t.st));
                }),
                (t.prototype.fd = function () {
                    var t = this.vd();
                    return Math.ceil(t.Tt + t.Dt + t.Pt + t.At + t.Lt);
                }),
                (t.prototype.V = function () {
                    this.d_.vt().j().Bn();
                }),
                (t.prototype.i_ = function () {
                    return this.Av.canvas;
                }),
                (t.prototype.Xv = function (t) {
                    if (0 !== t) {
                        if (1 !== t) {
                            var i = ln(this.Av.canvas);
                            this.Jv(i, this.Av.pixelRatio), this.vu(i, this.Av.pixelRatio), this.Gv(i, this.Av.pixelRatio), null !== this.Q_ && this.Q_.Xv(t), null !== this.td && this.td.Xv(t);
                        }
                        var n = ln(this.Lv.canvas),
                            h = this.Lv.pixelRatio;
                        n.clearRect(0, 0, Math.ceil(this.bv.ht * h), Math.ceil(this.bv.st * h)), this._d([this.d_.vt().wf()], n, h);
                    }
                }),
                (t.prototype.Jv = function (t, i) {
                    var n = this;
                    z(t, i, function () {
                        R(t, 0, 0, n.bv.ht, n.bv.st, n.d_.vt().Pf());
                    });
                }),
                (t.prototype.vu = function (t, i) {
                    if (this.d_.ct().timeScale.borderVisible) {
                        t.save(), (t.fillStyle = this.dd());
                        var n = Math.max(1, Math.floor(this.vd().Tt * i));
                        t.fillRect(0, 0, Math.ceil(this.bv.ht * i), n), t.restore();
                    }
                }),
                (t.prototype.Gv = function (t, i) {
                    var n = this,
                        h = this.d_.vt().j().Bn();
                    if (h && 0 !== h.length) {
                        var s = h.reduce(Bn, h[0]).Rs;
                        s > 30 && s < 40 && (s = 30), t.save(), (t.strokeStyle = this.dd());
                        var r = this.vd(),
                            e = r.Tt + r.Dt + r.At + r.Pt - r.Vt;
                        (t.textAlign = "center"), (t.fillStyle = this.dd());
                        var u = Math.floor(this.vd().Tt * i),
                            a = Math.max(1, Math.floor(i)),
                            o = Math.floor(0.5 * i);
                        if (this.d_.vt().j().ct().borderVisible) {
                            t.beginPath();
                            for (var l = Math.round(r.Dt * i), f = h.length; f--; ) {
                                var c = Math.round(h[f].Tn * i);
                                t.rect(c - o, u, a, l);
                            }
                            t.fill();
                        }
                        (t.fillStyle = this.ve()),
                            z(t, i, function () {
                                t.font = n.wd();
                                for (var i = 0, r = h; i < r.length; i++) {
                                    if ((l = r[i]).Rs < s) {
                                        var u = l.Wr ? n.Md(t, l.Tn, l.An) : l.Tn;
                                        t.fillText(l.An, u, e);
                                    }
                                }
                                t.font = n.bd();
                                for (var a = 0, o = h; a < o.length; a++) {
                                    var l;
                                    if ((l = o[a]).Rs >= s) {
                                        u = l.Wr ? n.Md(t, l.Tn, l.An) : l.Tn;
                                        t.fillText(l.An, u, e);
                                    }
                                }
                            });
                    }
                }),
                (t.prototype.Md = function (t, i, n) {
                    var h = this.gv.Ft(t, n),
                        s = h / 2,
                        r = Math.floor(i - s) + 0.5;
                    return r < 0 ? (i += Math.abs(0 - r)) : r + h > this.bv.ht && (i -= Math.abs(this.bv.ht - (r + h))), i;
                }),
                (t.prototype._d = function (t, i, n) {
                    for (var h = this.vd(), s = 0, r = t; s < r.length; s++)
                        for (var e = 0, u = r[s]._i(); e < u.length; e++) {
                            var a = u[e];
                            i.save(), a.R().h(i, h, n), i.restore();
                        }
                }),
                (t.prototype.dd = function () {
                    return this.d_.ct().timeScale.borderColor;
                }),
                (t.prototype.ve = function () {
                    return this.Ni.textColor;
                }),
                (t.prototype.fe = function () {
                    return this.Ni.fontSize;
                }),
                (t.prototype.wd = function () {
                    return Wt(this.fe(), this.Ni.fontFamily);
                }),
                (t.prototype.bd = function () {
                    return Wt(this.fe(), this.Ni.fontFamily, "bold");
                }),
                (t.prototype.vd = function () {
                    null === this.oe && (this.oe = { Tt: 1, Vt: NaN, At: NaN, Lt: NaN, hi: NaN, Dt: 3, Pt: NaN, Nt: "", ni: new _i() });
                    var t = this.oe,
                        i = this.wd();
                    if (t.Nt !== i) {
                        var n = this.fe();
                        (t.Pt = n), (t.Nt = i), (t.At = Math.ceil(n / 2.5)), (t.Lt = t.At), (t.hi = Math.ceil(n / 2)), (t.Vt = Math.round(this.fe() / 5)), t.ni.Cu();
                    }
                    return this.oe;
                }),
                (t.prototype.n_ = function (t) {
                    this.Tv.style.cursor = 1 === t ? "ew-resize" : "default";
                }),
                (t.prototype.ud = function () {
                    var t = this.d_.vt(),
                        i = t.ct();
                    i.leftPriceScale.visible || null === this.Q_ || (this.sd.removeChild(this.Q_.Iv()), this.Q_.en(), (this.Q_ = null)),
                        i.rightPriceScale.visible || null === this.td || (this.rd.removeChild(this.td.Iv()), this.td.en(), (this.td = null));
                    var n = { Lf: this.d_.vt().Lf() },
                        h = function () {
                            return i.leftPriceScale.borderVisible && t.j().ct().borderVisible;
                        },
                        s = function () {
                            return t.Pf();
                        };
                    i.leftPriceScale.visible && null === this.Q_ && ((this.Q_ = new En("left", i, n, h, s)), this.sd.appendChild(this.Q_.Iv())),
                        i.rightPriceScale.visible && null === this.td && ((this.td = new En("right", i, n, h, s)), this.rd.appendChild(this.td.Iv()));
                }),
                t
            );
        })(),
        Fn = (function () {
            function t(t, i) {
                var n;
                (this.md = []),
                    (this.pd = 0),
                    (this.On = 0),
                    (this.Ks = 0),
                    (this.gd = 0),
                    (this.yd = 0),
                    (this.kd = null),
                    (this.xd = !1),
                    (this.u_ = new tt()),
                    (this.Xl = new tt()),
                    (this.Ni = i),
                    (this.hd = document.createElement("div")),
                    this.hd.classList.add("tv-lightweight-charts"),
                    (this.hd.style.overflow = "hidden"),
                    (this.hd.style.width = "100%"),
                    (this.hd.style.height = "100%"),
                    ((n = this.hd).style.userSelect = "none"),
                    (n.style.webkitUserSelect = "none"),
                    (n.style.msUserSelect = "none"),
                    (n.style.MozUserSelect = "none"),
                    (n.style.webkitTapHighlightColor = "transparent"),
                    (this.Nd = document.createElement("table")),
                    this.Nd.setAttribute("cellspacing", "0"),
                    this.hd.appendChild(this.Nd),
                    (this.Sd = this.Cd.bind(this)),
                    this.hd.addEventListener("wheel", this.Sd, { passive: !1 }),
                    (this.si = new rn(this.Jl.bind(this), this.Ni)),
                    this.vt().Mf().Ji(this.Dd.bind(this), this),
                    (this.Td = new On(this)),
                    this.Nd.appendChild(this.Td.Iv());
                var h = this.Ni.width,
                    s = this.Ni.height;
                if (0 === h || 0 === s) {
                    var r = t.getBoundingClientRect();
                    0 === h && ((h = Math.floor(r.width)), (h -= h % 2)), 0 === s && ((s = Math.floor(r.height)), (s -= s % 2));
                }
                this.Ad(h, s), this.Ld(), t.appendChild(this.hd), this.Ed(), this.si.j().Jr().Ji(this.si.rf.bind(this.si), this), this.si.vl().Ji(this.si.rf.bind(this.si), this);
            }
            return (
                (t.prototype.vt = function () {
                    return this.si;
                }),
                (t.prototype.ct = function () {
                    return this.Ni;
                }),
                (t.prototype.Bd = function () {
                    return this.md;
                }),
                (t.prototype.en = function () {
                    this.hd.removeEventListener("wheel", this.Sd), 0 !== this.pd && window.cancelAnimationFrame(this.pd), this.si.Mf().hn(this), this.si.j().Jr().hn(this), this.si.vl().hn(this), this.si.en();
                    for (var t = 0, i = this.md; t < i.length; t++) {
                        var n = i[t];
                        this.Nd.removeChild(n.Iv()), n.F_().hn(this), n.en();
                    }
                    (this.md = []), l(this.Td).en(), null !== this.hd.parentElement && this.hd.parentElement.removeChild(this.hd), this.Xl.en(), this.u_.en();
                }),
                (t.prototype.Ad = function (t, i, n) {
                    if ((void 0 === n && (n = !1), this.On !== i || this.Ks !== t)) {
                        (this.On = i), (this.Ks = t);
                        var h = i + "px",
                            s = t + "px";
                        (l(this.hd).style.height = h), (l(this.hd).style.width = s), (this.Nd.style.height = h), (this.Nd.style.width = s), n ? this.Od(new qt(3)) : this.si.rf();
                    }
                }),
                (t.prototype.Xv = function (t) {
                    void 0 === t && (t = new qt(3));
                    for (var i = 0; i < this.md.length; i++) this.md[i].Xv(t.ge(i).me);
                    this.Td.Xv(t.pe());
                }),
                (t.prototype.sh = function (t) {
                    this.si.sh(t), this.Ed();
                    var i = t.width || this.Ks,
                        n = t.height || this.On;
                    this.Ad(i, n);
                }),
                (t.prototype.F_ = function () {
                    return this.u_;
                }),
                (t.prototype.Mf = function () {
                    return this.Xl;
                }),
                (t.prototype.Fd = function () {
                    var t = this;
                    null !== this.kd && (this.Od(this.kd), (this.kd = null));
                    var i = this.md[0],
                        n = fn(document, new an(this.Ks, this.On)),
                        h = ln(n),
                        s = on(n);
                    return (
                        z(h, s, function () {
                            var n = 0,
                                s = 0,
                                r = function (i) {
                                    for (var r = 0; r < t.md.length; r++) {
                                        var e = t.md[r],
                                            u = e.z_().st,
                                            a = l("left" === i ? e.q_() : e.H_()),
                                            o = a.i_();
                                        h.drawImage(o, n, s, a.Kv(), u), (s += u);
                                    }
                                };
                            t.Vd() && (r("left"), (n = l(i.q_()).Kv())), (s = 0);
                            for (var e = 0; e < t.md.length; e++) {
                                var u = t.md[e],
                                    a = u.z_(),
                                    o = u.i_();
                                h.drawImage(o, n, s, a.ht, a.st), (s += a.st);
                            }
                            (n += i.z_().ht), t.Pd() && ((s = 0), r("right"));
                            var f = function (i) {
                                var r = l("left" === i ? t.Td.ad() : t.Td.od()),
                                    e = r.z_(),
                                    u = r.i_();
                                h.drawImage(u, n, s, e.ht, e.st);
                            };
                            if (t.Ni.timeScale.visible) {
                                (n = 0), t.Vd() && (f("left"), (n = l(i.q_()).Kv()));
                                var c = t.Td.z_();
                                o = t.Td.i_();
                                h.drawImage(o, n, s, c.ht, c.st), t.Pd() && ((n += i.z_().ht), f("right"), h.restore());
                            }
                        }),
                        n
                    );
                }),
                (t.prototype.zd = function (t) {
                    return "none" === t ? 0 : ("left" !== t || this.Vd()) && ("right" !== t || this.Pd()) ? (0 === this.md.length ? 0 : l("left" === t ? this.md[0].q_() : this.md[0].H_()).Kv()) : 0;
                }),
                (t.prototype.Rd = function () {
                    for (var t = 0, i = 0, n = 0, h = 0, s = this.md; h < s.length; h++) {
                        var r = s[h];
                        this.Vd() && (i = Math.max(i, l(r.q_()).qv())), this.Pd() && (n = Math.max(n, l(r.H_()).qv())), (t += r._l());
                    }
                    var e = this.Ks,
                        u = this.On,
                        a = Math.max(e - i - n, 0),
                        o = this.Ni.timeScale.visible ? this.Td.fd() : 0;
                    o % 2 && (o += 1);
                    for (var f = 0 + o, c = u < f ? 0 : u - f, v = c / t, _ = 0, d = 0; d < this.md.length; ++d) {
                        (r = this.md[d]).y_(this.si._f()[d]);
                        var w,
                            M = 0;
                        (M = d === this.md.length - 1 ? c - _ : Math.round(r._l() * v)), (_ += w = Math.max(M, 2)), r.Yv(new an(a, w)), this.Vd() && r.P_(i, "left"), this.Pd() && r.P_(n, "right"), r.$v() && this.si.bf(r.$v(), w);
                    }
                    this.Td.ld(new an(a, o), i, n), this.si.Dr(a), this.gd !== i && (this.gd = i), this.yd !== n && (this.yd = n);
                }),
                (t.prototype.Cd = function (t) {
                    var i = t.deltaX / 100,
                        n = -t.deltaY / 100;
                    if ((0 !== i && this.Ni.handleScroll.mouseWheel) || (0 !== n && this.Ni.handleScale.mouseWheel)) {
                        switch ((t.cancelable && t.preventDefault(), t.deltaMode)) {
                            case t.DOM_DELTA_PAGE:
                                (i *= 120), (n *= 120);
                                break;
                            case t.DOM_DELTA_LINE:
                                (i *= 32), (n *= 32);
                        }
                        if (0 !== n && this.Ni.handleScale.mouseWheel) {
                            var h = Math.sign(n) * Math.min(1, Math.abs(n)),
                                s = t.clientX - this.hd.getBoundingClientRect().left;
                            this.vt().gf(s, h);
                        }
                        0 !== i && this.Ni.handleScroll.mouseWheel && this.vt().yf(-80 * i);
                    }
                }),
                (t.prototype.Od = function (t) {
                    var i = t.pe();
                    if ((3 === i && this.Id(), 3 === i || 2 === i)) {
                        for (var n = this.si._f(), h = 0; h < n.length; h++) t.ge(h)._h && n[h].Ll();
                        for (var s = t.Se(), r = 0, e = s; r < e.length; r++) {
                            var u = e[r];
                            this.Ce(u);
                        }
                        s.length > 0 && (this.si.Fr(), this.si.Ao(), this.si.Vr()), this.Td.V();
                    }
                    this.Xv(t);
                }),
                (t.prototype.Ce = function (t) {
                    var i = this.si.j();
                    switch (t.ke) {
                        case 0:
                            i.Qr();
                            break;
                        case 1:
                            i.te(t.X);
                            break;
                        case 2:
                            i.dr(t.X);
                            break;
                        case 3:
                            i.wr(t.X);
                            break;
                        case 4:
                            i.jr();
                    }
                }),
                (t.prototype.Jl = function (t) {
                    var i = this;
                    null !== this.kd ? this.kd._n(t) : (this.kd = t),
                        this.xd ||
                            ((this.xd = !0),
                            (this.pd = window.requestAnimationFrame(function () {
                                (i.xd = !1), (i.pd = 0), null !== i.kd && (i.Od(i.kd), (i.kd = null));
                            })));
                }),
                (t.prototype.Id = function () {
                    this.Ld();
                }),
                (t.prototype.Ld = function () {
                    for (var t = this.si._f(), i = t.length, n = this.md.length, h = i; h < n; h++) {
                        var s = o(this.md.pop());
                        this.Nd.removeChild(s.Iv()), s.F_().hn(this), s.en();
                    }
                    for (h = n; h < i; h++) {
                        (s = new Ln(this, t[h])).F_().Ji(this.Wd.bind(this), this), this.md.push(s), this.Nd.insertBefore(s.Iv(), this.Td.Iv());
                    }
                    for (h = 0; h < i; h++) {
                        var r = t[h];
                        (s = this.md[h]).$v() !== r ? s.y_(r) : s.g_();
                    }
                    this.Ed(), this.Rd();
                }),
                (t.prototype.jd = function (t, i) {
                    var n,
                        h = new Map();
                    null !== t &&
                        this.si.P().forEach(function (i) {
                            var n = i.ka(t);
                            null !== n && h.set(i, n);
                        });
                    if (null !== t) {
                        var s = this.si.j().ri(t);
                        null !== s && (n = s);
                    }
                    var r = this.vt().af(),
                        e = null !== r && r.ff instanceof Xi ? r.ff : void 0,
                        u = null !== r && void 0 !== r.D_ ? r.D_.va : void 0;
                    return { C: n, Ud: i || void 0, qd: e, Hd: h, Yd: u };
                }),
                (t.prototype.Wd = function (t, i) {
                    var n = this;
                    this.u_.sn(function () {
                        return n.jd(t, i);
                    });
                }),
                (t.prototype.Dd = function (t, i) {
                    var n = this;
                    this.Xl.sn(function () {
                        return n.jd(t, i);
                    });
                }),
                (t.prototype.Ed = function () {
                    var t = this.Ni.timeScale.visible ? "" : "none";
                    this.Td.Iv().style.display = t;
                }),
                (t.prototype.Vd = function () {
                    return this.Ni.leftPriceScale.visible;
                }),
                (t.prototype.Pd = function () {
                    return this.Ni.rightPriceScale.visible;
                }),
                t
            );
        })();
    function Vn(t, i, n) {
        var h = n.value,
            s = { zs: i, C: t, X: [h, h, h, h] };
        return "color" in n && void 0 !== n.color && (s.et = n.color), s;
    }
    function Pn(t, i, n) {
        return { zs: i, C: t, X: [n.open, n.high, n.low, n.close] };
    }
    function zn(t) {
        return void 0 !== t.X;
    }
    function Rn(t) {
        return function (i, n, h) {
            return void 0 === (s = h).open && void 0 === s.value ? { C: i, zs: n } : t(i, n, h);
            var s;
        };
    }
    var In = { Candlestick: Rn(Pn), Bar: Rn(Pn), Area: Rn(Vn), Histogram: Rn(Vn), Line: Rn(Vn) };
    function Wn(t) {
        return In[t];
    }
    function jn(t) {
        return 60 * t * 60 * 1e3;
    }
    function Un(t) {
        return 60 * t * 1e3;
    }
    var qn,
        Hn = [
            { Kd: 1, Rs: 20 },
            { Kd: ((qn = 1), 1e3 * qn), Rs: 19 },
            { Kd: Un(1), Rs: 20 },
            { Kd: Un(5), Rs: 21 },
            { Kd: Un(30), Rs: 22 },
            { Kd: jn(1), Rs: 30 },
            { Kd: jn(3), Rs: 31 },
            { Kd: jn(6), Rs: 32 },
            { Kd: jn(12), Rs: 33 },
        ];
    function Yn(t, i) {
        if (null !== i) {
            var n = new Date(1e3 * i),
                h = new Date(1e3 * t);
            if (h.getUTCFullYear() !== n.getUTCFullYear()) return 70;
            if (h.getUTCMonth() !== n.getUTCMonth()) return 60;
            if (h.getUTCDate() !== n.getUTCDate()) return 50;
            for (var s = Hn.length - 1; s >= 0; --s) if (Math.floor(n.getTime() / Hn[s].Kd) !== Math.floor(h.getTime() / Hn[s].Kd)) return Hn[s].Rs;
        }
        return 20;
    }
    function Kn(t) {
        if (!zt(t)) throw new Error("time must be of type BusinessDay");
        var i = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
        return { Ds: Math.round(i.getTime() / 1e3), Cs: t };
    }
    function $n(t) {
        if (!Rt(t)) throw new Error("time must be of type isUTCTimestamp");
        return { Ds: t };
    }
    function Xn(t) {
        return 0 === t.length ? null : zt(t[0].time) ? Kn : $n;
    }
    function Zn(t) {
        return Rt(t) ? $n(t) : zt(t) ? Kn(t) : Kn(Jn(t));
    }
    function Jn(t) {
        var i = new Date(t);
        if (isNaN(i.getTime())) throw new Error("Invalid date string=" + t + ", expected format=yyyy-mm-dd");
        return { day: i.getUTCDate(), month: i.getUTCMonth() + 1, year: i.getUTCFullYear() };
    }
    function Gn(t) {
        d(t.time) && (t.time = Jn(t.time));
    }
    function Qn(t) {
        return { zs: 0, $d: new Map(), Rh: t };
    }
    var th = (function () {
        function t() {
            (this.Xd = new Map()), (this.Zd = new Map()), (this.Jd = new Map()), (this.Gd = []);
        }
        return (
            (t.prototype.en = function () {
                this.Xd.clear(), this.Zd.clear(), this.Jd.clear(), (this.Gd = []);
            }),
            (t.prototype.Qd = function (t, i) {
                var n = this;
                this.Jd.has(t) &&
                    this.Xd.forEach(function (i) {
                        return i.$d.delete(t);
                    });
                var h = [];
                if (0 !== i.length) {
                    !(function (t) {
                        t.forEach(Gn);
                    })(i);
                    var s = l(Xn(i)),
                        r = Wn(t.Pa());
                    h = i.map(function (i) {
                        var h = s(i.time),
                            e = n.Xd.get(h.Ds);
                        void 0 === e && ((e = Qn(h)), n.Xd.set(h.Ds, e));
                        var u = r(h, e.zs, i);
                        return e.$d.set(t, u), u;
                    });
                }
                return this.tw(), this.iw(t, h), this.nw(t);
            }),
            (t.prototype.Of = function (t) {
                return this.Qd(t, []);
            }),
            (t.prototype.hw = function (t, i) {
                Gn(i);
                var n = l(Xn([i]))(i.time),
                    h = this.Jd.get(t);
                if (void 0 !== h && n.Ds < h.Ds) throw new Error("Cannot update oldest data, last time=" + h.Ds + ", new time=" + n.Ds);
                var s = this.Xd.get(n.Ds),
                    r = void 0 === s;
                void 0 === s && ((s = Qn(n)), this.Xd.set(n.Ds, s));
                var e = Wn(t.Pa())(n, s.zs, i);
                s.$d.set(t, e);
                var u = this.sw(t, e);
                if (!r) {
                    var a = new Map();
                    return null !== u && a.set(t, u), { rw: a, j: { Lr: this.ew() } };
                }
                return this.nw(t);
            }),
            (t.prototype.sw = function (t, i) {
                var n = this.Zd.get(t);
                void 0 === n && ((n = []), this.Zd.set(t, n));
                var h = 0 !== n.length ? n[n.length - 1] : null,
                    s = null;
                return null === h || i.C.Ds > h.C.Ds ? zn(i) && (n.push(i), (s = { rf: !1, Wu: [i] })) : zn(i) ? ((n[n.length - 1] = i), (s = { rf: !1, Wu: [i] })) : (n.splice(-1, 1), (s = { rf: !0, Wu: n })), this.Jd.set(t, i.C), s;
            }),
            (t.prototype.iw = function (t, i) {
                0 !== i.length ? (this.Zd.set(t, i.filter(zn)), this.Jd.set(t, i[i.length - 1].C)) : (this.Zd.delete(t), this.Jd.delete(t));
            }),
            (t.prototype.tw = function () {
                var t = new Map();
                this.Xd.forEach(function (i, n) {
                    i.$d.size > 0 && t.set(n, i);
                }),
                    (this.Xd = t);
            }),
            (t.prototype.uw = function (t) {
                for (var i = -1, n = 0; n < this.Gd.length && n < t.length; ++n) {
                    var h = this.Gd[n],
                        s = t[n];
                    if (h.C.Ds !== s.C.Ds) {
                        i = n;
                        break;
                    }
                    s.Ps = h.Ps;
                }
                if ((-1 === i && this.Gd.length !== t.length && (i = Math.min(this.Gd.length, t.length)), -1 === i)) return -1;
                var r = function (i) {
                        var n = o(e.Xd.get(t[i].C.Ds));
                        (n.zs = i),
                            n.$d.forEach(function (t) {
                                t.zs = i;
                            });
                    },
                    e = this;
                for (n = i; n < t.length; ++n) r(n);
                return (
                    (function (t, i) {
                        void 0 === i && (i = 0);
                        for (var n = 0 === i || 0 === t.length ? null : t[i - 1].C.Ds, h = 0, s = i; s < t.length; ++s) {
                            var r = t[s];
                            (r.Ps = Yn(r.C.Ds, n)), (h += r.C.Ds - (n || r.C.Ds)), (n = r.C.Ds);
                        }
                        if (0 === i && t.length > 1) {
                            var e = Math.ceil(h / (t.length - 1)),
                                u = t[0].C.Ds - e;
                            t[0].Ps = Yn(t[0].C.Ds, u);
                        }
                    })(t, i),
                    (this.Gd = t),
                    i
                );
            }),
            (t.prototype.ew = function () {
                if (0 === this.Zd.size) return null;
                var t = 0;
                return (
                    this.Zd.forEach(function (i) {
                        0 !== i.length && (t = Math.max(t, i[i.length - 1].zs));
                    }),
                    t
                );
            }),
            (t.prototype.nw = function (t) {
                var i = Array.from(this.Xd.values()).map(function (t) {
                    return { Ps: 0, C: t.Rh };
                });
                i.sort(function (t, i) {
                    return t.C.Ds - i.C.Ds;
                });
                var n = this.uw(i),
                    h = { rw: new Map(), j: { Lr: this.ew() } };
                if (-1 !== n)
                    this.Zd.forEach(function (t, i) {
                        h.rw.set(i, { Wu: t, rf: !0 });
                    }),
                        this.Zd.has(t) || h.rw.set(t, { Wu: [], rf: !0 }),
                        (h.j.aw = this.Gd);
                else {
                    var s = this.Zd.get(t);
                    h.rw.set(t, { Wu: s || [], rf: !0 });
                }
                return h;
            }),
            t
        );
    })();
    var ih = { color: "#FF0000", price: 0, lineStyle: 2, lineWidth: 1, axisLabelVisible: !0, title: "" },
        nh = (function () {
            function t(t) {
                this.Ea = t;
            }
            return (
                (t.prototype.applyOptions = function (t) {
                    this.Ea.sh(t);
                }),
                (t.prototype.options = function () {
                    return this.Ea.ct();
                }),
                (t.prototype.ow = function () {
                    return this.Ea;
                }),
                t
            );
        })();
    function hh(t) {
        var i = t.overlay,
            n = (function (t, i) {
                var n = {};
                for (var h in t) Object.prototype.hasOwnProperty.call(t, h) && i.indexOf(h) < 0 && (n[h] = t[h]);
                if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                    var s = 0;
                    for (h = Object.getOwnPropertySymbols(t); s < h.length; s++) i.indexOf(h[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, h[s]) && (n[h[s]] = t[h[s]]);
                }
                return n;
            })(t, ["overlay"]);
        return i && (n.priceScaleId = ""), n;
    }
    var sh = (function () {
            function t(t, i, n) {
                (this.Ie = t), (this.lw = i), (this.fw = n);
            }
            return (
                (t.prototype.priceFormatter = function () {
                    return this.Ie.Kh();
                }),
                (t.prototype.priceToCoordinate = function (t) {
                    var i = this.Ie.H();
                    return null === i ? null : this.Ie.$().K(t, i.X);
                }),
                (t.prototype.coordinateToPrice = function (t) {
                    var i = this.Ie.H();
                    return null === i ? null : this.Ie.$().Ti(t, i.X);
                }),
                (t.prototype.barsInLogicalRange = function (t) {
                    if (null === t) return null;
                    var i = new Ft(new Lt(t.from, t.to)).qs(),
                        n = this.Ie.Hi();
                    if (n.ti()) return null;
                    var h = n.Qa(i.ss(), 1),
                        s = n.Qa(i.rs(), -1),
                        r = l(n.Za()),
                        e = l(n.qi());
                    if (null !== h && null !== s && h.zs > s.zs) return { barsBefore: t.from - r, barsAfter: e - t.to };
                    var u = { barsBefore: null === h || h.zs === r ? t.from - r : h.zs - r, barsAfter: null === s || s.zs === e ? e - t.to : e - s.zs };
                    return null !== h && null !== s && ((u.from = h.C.Cs || h.C.Ds), (u.to = s.C.Cs || s.C.Ds)), u;
                }),
                (t.prototype.setData = function (t) {
                    this.Ie.Pa(), this.lw.cw(this.Ie, t);
                }),
                (t.prototype.update = function (t) {
                    this.Ie.Pa(), this.lw.Eo(this.Ie, t);
                }),
                (t.prototype.setMarkers = function (t) {
                    var i = t.map(function (t) {
                        return e(e({}, t), { time: Zn(t.time) });
                    });
                    this.Ie.Fo(i);
                }),
                (t.prototype.applyOptions = function (t) {
                    var i = hh(t);
                    this.Ie.sh(i);
                }),
                (t.prototype.options = function () {
                    return M(this.Ie.ct());
                }),
                (t.prototype.priceScale = function () {
                    return this.fw.priceScale(this.Ie.$().hh());
                }),
                (t.prototype.createPriceLine = function (t) {
                    var i = c(M(ih), t),
                        n = this.Ie.Vo(i);
                    return new nh(n);
                }),
                (t.prototype.removePriceLine = function (t) {
                    this.Ie.Po(t.ow());
                }),
                (t.prototype.seriesType = function () {
                    return this.Ie.Pa();
                }),
                t
            );
        })(),
        rh = (function (t) {
            function i() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
                r(i, t),
                (i.prototype.applyOptions = function (i) {
                    kt(i), t.prototype.applyOptions.call(this, i);
                }),
                i
            );
        })(sh),
        eh = { autoScale: !0, mode: 0, invertScale: !1, alignLabels: !0, borderVisible: !0, borderColor: "#2B2B43", entireTextOnly: !1, visible: !1, drawTicks: !0, scaleMargins: { bottom: 0.1, top: 0.2 } },
        uh = { color: "rgba(0, 0, 0, 0)", visible: !1, fontSize: 48, fontFamily: It, fontStyle: "", text: "", horzAlign: "center", vertAlign: "center" },
        ah = {
            width: 0,
            height: 0,
            layout: { background: { type: "solid", color: "#FFFFFF" }, textColor: "#191919", fontSize: 11, fontFamily: It },
            crosshair: {
                vertLine: { color: "#758696", width: 1, style: 3, visible: !0, labelVisible: !0, labelBackgroundColor: "#4c525e" },
                horzLine: { color: "#758696", width: 1, style: 3, visible: !0, labelVisible: !0, labelBackgroundColor: "#4c525e" },
                mode: 1,
            },
            grid: { vertLines: { color: "#D6DCDE", style: 0, visible: !0 }, horzLines: { color: "#D6DCDE", style: 0, visible: !0 } },
            overlayPriceScales: e({}, eh),
            leftPriceScale: e(e({}, eh), { visible: !1 }),
            rightPriceScale: e(e({}, eh), { visible: !0 }),
            timeScale: {
                rightOffset: 0,
                barSpacing: 6,
                minBarSpacing: 0.5,
                fixLeftEdge: !1,
                fixRightEdge: !1,
                lockVisibleTimeRangeOnResize: !1,
                rightBarStaysOnScroll: !1,
                borderVisible: !0,
                borderColor: "#2B2B43",
                visible: !0,
                timeVisible: !1,
                secondsVisible: !0,
                shiftVisibleRangeOnNewBar: !0,
            },
            watermark: uh,
            localization: { locale: wn ? navigator.language : "", dateFormat: "dd MMM 'yy" },
            handleScroll: { mouseWheel: !0, pressedMouseMove: !0, horzTouchDrag: !0, vertTouchDrag: !0 },
            handleScale: { axisPressedMouseMove: { time: !0, price: !0 }, axisDoubleClickReset: !0, mouseWheel: !0, pinch: !0 },
            kineticScroll: { mouse: !1, touch: !0 },
        },
        oh = {
            upColor: "#26a69a",
            downColor: "#ef5350",
            wickVisible: !0,
            borderVisible: !0,
            borderColor: "#378658",
            borderUpColor: "#26a69a",
            borderDownColor: "#ef5350",
            wickColor: "#737375",
            wickUpColor: "#26a69a",
            wickDownColor: "#ef5350",
        },
        lh = { upColor: "#26a69a", downColor: "#ef5350", openVisible: !0, thinBars: !0 },
        fh = { color: "#2196f3", lineStyle: 0, lineWidth: 3, lineType: 0, crosshairMarkerVisible: !0, crosshairMarkerRadius: 4, crosshairMarkerBorderColor: "", crosshairMarkerBackgroundColor: "", lastPriceAnimation: 0 },
        ch = {
            topColor: "rgba( 46, 220, 135, 0.4)",
            bottomColor: "rgba( 40, 221, 100, 0)",
            lineColor: "#33D778",
            lineStyle: 0,
            lineWidth: 3,
            lineType: 0,
            crosshairMarkerVisible: !0,
            crosshairMarkerRadius: 4,
            crosshairMarkerBorderColor: "",
            crosshairMarkerBackgroundColor: "",
            lastPriceAnimation: 0,
        },
        vh = { color: "#26a69a", base: 0 },
        _h = {
            title: "",
            visible: !0,
            lastValueVisible: !0,
            priceLineVisible: !0,
            priceLineSource: 0,
            priceLineWidth: 1,
            priceLineColor: "",
            priceLineStyle: 2,
            baseLineVisible: !0,
            baseLineWidth: 1,
            baseLineColor: "#B2B5BE",
            baseLineStyle: 0,
            priceFormat: { type: "price", precision: 2, minMove: 0.01 },
        },
        dh = (function () {
            function t(t, i) {
                (this._w = t), (this.dw = i);
            }
            return (
                (t.prototype.applyOptions = function (t) {
                    this._w.vt().cf(this.dw, t);
                }),
                (t.prototype.options = function () {
                    return this.Gt().ct();
                }),
                (t.prototype.width = function () {
                    return Ut(this.dw) ? this._w.zd("left" === this.dw ? "left" : "right") : 0;
                }),
                (t.prototype.Gt = function () {
                    return l(this._w.vt().vf(this.dw)).$;
                }),
                t
            );
        })(),
        wh = (function () {
            function t(t) {
                (this.ww = new tt()), (this.ir = new tt()), (this.si = t), this.rl().Xr().Ji(this.Mw.bind(this)), this.rl().Zr().Ji(this.bw.bind(this));
            }
            return (
                (t.prototype.en = function () {
                    this.rl().Xr().hn(this), this.rl().Zr().hn(this), this.ww.en();
                }),
                (t.prototype.scrollPosition = function () {
                    return this.rl().Rr();
                }),
                (t.prototype.scrollToPosition = function (t, i) {
                    i ? this.rl().$r(t) : this.si.wr(t);
                }),
                (t.prototype.scrollToRealTime = function () {
                    this.rl().Kr();
                }),
                (t.prototype.getVisibleRange = function () {
                    var t,
                        i,
                        n = this.rl().gr();
                    return null === n ? null : { from: null !== (t = n.from.Cs) && void 0 !== t ? t : n.from.Ds, to: null !== (i = n.to.Cs) && void 0 !== i ? i : n.to.Ds };
                }),
                (t.prototype.setVisibleRange = function (t) {
                    var i = { from: Zn(t.from), to: Zn(t.to) },
                        n = this.rl().Sr(i);
                    this.si.Ff(n);
                }),
                (t.prototype.getVisibleLogicalRange = function () {
                    var t = this.rl().pr();
                    return null === t ? null : { from: t.ss(), to: t.rs() };
                }),
                (t.prototype.setVisibleLogicalRange = function (t) {
                    a(t.from <= t.to, "The from index cannot be after the to index."), this.si.Ff(t);
                }),
                (t.prototype.resetTimeScale = function () {
                    this.si.Ne();
                }),
                (t.prototype.fitContent = function () {
                    this.si.Qr();
                }),
                (t.prototype.logicalToCoordinate = function (t) {
                    var i = this.si.j();
                    return i.ti() ? null : i.G(t);
                }),
                (t.prototype.coordinateToLogical = function (t) {
                    var i = this.si.j();
                    return i.ti() ? null : i.Br(t);
                }),
                (t.prototype.timeToCoordinate = function (t) {
                    var i = Zn(t),
                        n = this.si.j(),
                        h = n.Mr(i, !1);
                    return null === h ? null : n.G(h);
                }),
                (t.prototype.coordinateToTime = function (t) {
                    var i,
                        n = this.si.j(),
                        h = n.Br(t),
                        s = n.ri(h);
                    return null === s ? null : null !== (i = s.Cs) && void 0 !== i ? i : s.Ds;
                }),
                (t.prototype.subscribeVisibleTimeRangeChange = function (t) {
                    this.ww.Ji(t);
                }),
                (t.prototype.unsubscribeVisibleTimeRangeChange = function (t) {
                    this.ww.nn(t);
                }),
                (t.prototype.subscribeVisibleLogicalRangeChange = function (t) {
                    this.ir.Ji(t);
                }),
                (t.prototype.unsubscribeVisibleLogicalRangeChange = function (t) {
                    this.ir.nn(t);
                }),
                (t.prototype.applyOptions = function (t) {
                    this.rl().sh(t);
                }),
                (t.prototype.options = function () {
                    return M(this.rl().ct());
                }),
                (t.prototype.rl = function () {
                    return this.si.j();
                }),
                (t.prototype.Mw = function () {
                    this.ww.rn() && this.ww.sn(this.getVisibleRange());
                }),
                (t.prototype.bw = function () {
                    this.ir.rn() && this.ir.sn(this.getVisibleLogicalRange());
                }),
                t
            );
        })();
    function Mh(t) {
        if (void 0 !== t && "custom" !== t.type) {
            var i = t;
            void 0 !== i.minMove &&
                void 0 === i.precision &&
                (i.precision = (function (t) {
                    if (t >= 1) return 0;
                    for (var i = 0; i < 8; i++) {
                        var n = Math.round(t);
                        if (Math.abs(n - t) < 1e-8) return i;
                        t *= 10;
                    }
                    return i;
                })(i.minMove));
        }
    }
    function bh(t) {
        return (
            (function (t) {
                if (w(t.handleScale)) {
                    var i = t.handleScale;
                    t.handleScale = { axisDoubleClickReset: i, axisPressedMouseMove: { time: i, price: i }, mouseWheel: i, pinch: i };
                } else if (void 0 !== t.handleScale && w(t.handleScale.axisPressedMouseMove)) {
                    var n = t.handleScale.axisPressedMouseMove;
                    t.handleScale.axisPressedMouseMove = { time: n, price: n };
                }
                var h = t.handleScroll;
                w(h) && (t.handleScroll = { horzTouchDrag: h, vertTouchDrag: h, mouseWheel: h, pressedMouseMove: h });
            })(t),
            (function (t) {
                if (t.priceScale) {
                    (t.leftPriceScale = t.leftPriceScale || {}), (t.rightPriceScale = t.rightPriceScale || {});
                    var i = t.priceScale.position;
                    delete t.priceScale.position,
                        (t.leftPriceScale = c(t.leftPriceScale, t.priceScale)),
                        (t.rightPriceScale = c(t.rightPriceScale, t.priceScale)),
                        "left" === i && ((t.leftPriceScale.visible = !0), (t.rightPriceScale.visible = !1)),
                        "right" === i && ((t.leftPriceScale.visible = !1), (t.rightPriceScale.visible = !0)),
                        "none" === i && ((t.leftPriceScale.visible = !1), (t.rightPriceScale.visible = !1)),
                        (t.overlayPriceScales = t.overlayPriceScales || {}),
                        void 0 !== t.priceScale.invertScale && (t.overlayPriceScales.invertScale = t.priceScale.invertScale),
                        void 0 !== t.priceScale.scaleMargins && (t.overlayPriceScales.scaleMargins = t.priceScale.scaleMargins);
                }
            })(t),
            (function (t) {
                t.layout && t.layout.backgroundColor && !t.layout.background && (t.layout.background = { type: "solid", color: t.layout.backgroundColor });
            })(t),
            t
        );
    }
    var mh = (function () {
        function t(t, i) {
            var n = this;
            (this.mw = new th()), (this.pw = new Map()), (this.gw = new Map()), (this.yw = new tt()), (this.kw = new tt());
            var h = void 0 === i ? M(ah) : c(M(ah), bh(i));
            (this._w = new Fn(t, h)),
                this._w.F_().Ji(function (t) {
                    n.yw.rn() && n.yw.sn(n.xw(t()));
                }, this),
                this._w.Mf().Ji(function (t) {
                    n.kw.rn() && n.kw.sn(n.xw(t()));
                }, this);
            var s = this._w.vt();
            this.Nw = new wh(s);
        }
        return (
            (t.prototype.remove = function () {
                this._w.F_().hn(this), this._w.Mf().hn(this), this.Nw.en(), this._w.en(), this.pw.clear(), this.gw.clear(), this.yw.en(), this.kw.en(), this.mw.en();
            }),
            (t.prototype.resize = function (t, i, n) {
                this._w.Ad(t, i, n);
            }),
            (t.prototype.addAreaSeries = function (t) {
                void 0 === t && (t = {}), Mh((t = hh(t)).priceFormat);
                var i = c(M(_h), ch, t),
                    n = this._w.vt().Ef("Area", i),
                    h = new sh(n, this, this);
                return this.pw.set(h, n), this.gw.set(n, h), h;
            }),
            (t.prototype.addBarSeries = function (t) {
                void 0 === t && (t = {}), Mh((t = hh(t)).priceFormat);
                var i = c(M(_h), lh, t),
                    n = this._w.vt().Ef("Bar", i),
                    h = new sh(n, this, this);
                return this.pw.set(h, n), this.gw.set(n, h), h;
            }),
            (t.prototype.addCandlestickSeries = function (t) {
                void 0 === t && (t = {}), kt((t = hh(t))), Mh(t.priceFormat);
                var i = c(M(_h), oh, t),
                    n = this._w.vt().Ef("Candlestick", i),
                    h = new rh(n, this, this);
                return this.pw.set(h, n), this.gw.set(n, h), h;
            }),
            (t.prototype.addHistogramSeries = function (t) {
                void 0 === t && (t = {}), Mh((t = hh(t)).priceFormat);
                var i = c(M(_h), vh, t),
                    n = this._w.vt().Ef("Histogram", i),
                    h = new sh(n, this, this);
                return this.pw.set(h, n), this.gw.set(n, h), h;
            }),
            (t.prototype.addLineSeries = function (t) {
                void 0 === t && (t = {}), Mh((t = hh(t)).priceFormat);
                var i = c(M(_h), fh, t),
                    n = this._w.vt().Ef("Line", i),
                    h = new sh(n, this, this);
                return this.pw.set(h, n), this.gw.set(n, h), h;
            }),
            (t.prototype.removeSeries = function (t) {
                var i = o(this.pw.get(t)),
                    n = this.mw.Of(i);
                this._w.vt().Of(i), this.Sw(n), this.pw.delete(t), this.gw.delete(i);
            }),
            (t.prototype.cw = function (t, i) {
                this.Sw(this.mw.Qd(t, i));
            }),
            (t.prototype.Eo = function (t, i) {
                this.Sw(this.mw.hw(t, i));
            }),
            (t.prototype.subscribeClick = function (t) {
                this.yw.Ji(t);
            }),
            (t.prototype.unsubscribeClick = function (t) {
                this.yw.nn(t);
            }),
            (t.prototype.subscribeCrosshairMove = function (t) {
                this.kw.Ji(t);
            }),
            (t.prototype.unsubscribeCrosshairMove = function (t) {
                this.kw.nn(t);
            }),
            (t.prototype.priceScale = function (t) {
                return void 0 === t && (t = this._w.vt().Vf()), new dh(this._w, t);
            }),
            (t.prototype.timeScale = function () {
                return this.Nw;
            }),
            (t.prototype.applyOptions = function (t) {
                this._w.sh(bh(t));
            }),
            (t.prototype.options = function () {
                return this._w.ct();
            }),
            (t.prototype.takeScreenshot = function () {
                return this._w.Fd();
            }),
            (t.prototype.Sw = function (t) {
                var i = this._w.vt();
                i.Af(t.j.Lr, t.j.aw),
                    t.rw.forEach(function (t, i) {
                        return i.Eo(t.Wu, t.rf);
                    }),
                    i.Fr();
            }),
            (t.prototype.Cw = function (t) {
                return o(this.gw.get(t));
            }),
            (t.prototype.xw = function (t) {
                var i = this,
                    n = new Map();
                t.Hd.forEach(function (t, h) {
                    n.set(i.Cw(h), t);
                });
                var h = void 0 === t.qd ? void 0 : this.Cw(t.qd);
                return { time: t.C && (t.C.Cs || t.C.Ds), point: t.Ud, hoveredSeries: h, hoveredMarkerId: t.Yd, seriesPrices: n };
            }),
            t
        );
    })();
    var ph = Object.freeze({
        __proto__: null,
        version: function () {
            return "3.6.1";
        },
        get LineStyle() {
            return i;
        },
        get LineType() {
            return t;
        },
        get CrosshairMode() {
            return W;
        },
        get PriceScaleMode() {
            return _t;
        },
        get PriceLineSource() {
            return mt;
        },
        get LastPriceAnimationMode() {
            return bt;
        },
        get LasPriceAnimationMode() {
            return bt;
        },
        get TickMarkType() {
            return Bt;
        },
        get ColorType() {
            return Vt;
        },
        isBusinessDay: zt,
        isUTCTimestamp: Rt,
        createChart: function (t, i) {
            var n;
            if (d(t)) {
                var h = document.getElementById(t);
                a(null !== h, "Cannot find element in DOM with id=" + t), (n = h);
            } else n = t;
            return new mh(n, i);
        },
    });
    window.LightweightCharts = ph;
})();