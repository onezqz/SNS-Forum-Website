(function (z) {
    var xn = function (a) {
        a = a.tabIndex;
        return z.qa(a) && 0 <= a && 32768 > a
    };
    var yn = function (a) {
        a = a.getAttributeNode("tabindex");
        return null != a && a.specified
    };
    var zn = function (a, b) {
        return z.pb(a.mD || [], function (a) {
            return b === a || z.lf(a, b)
        })
    };
    var An = function (a) {
        if (a.Xj) throw Error("Can not change this state of the popup while showing.");
    };
    var Bn = function (a) {
        return a.xj.length ? a.xj.pop() : a.Bn()
    };
    var Cn = function (a) {
        try {
            return a && a.activeElement
        } catch (b) {
        }
        return null
    };
    var Dn = function (a) {
        return yn(a) && xn(a)
    };
    var En = function (a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
            return eval("(" + a + ")")
        } catch (b) {
        }
        throw Error("Invalid JSON string: " + a);
    };
    z.Fn = function (a, b) {
        return z.ba[a] = b
    };
    z.Gn = function (a, b, c) {
        var d = z.$m;
        d.ga.g(d, "update", function g() {
            a.getBoundingClientRect().bottom < this.size.height && (b.call(c), this.ga.qa(this, "update", g))
        });
        d.update()
    };
    var Hn = function (a, b) {
        var c = b.getBoundingClientRect();
        return c.bottom < a.hN || c.bottom > a.size.height ? !1 : !0
    };
    var In = function (a) {
        z.xk ? z.W.enable(a.input, "placeholder-hilight", !1) : z.W.enable(a.label, "placeholder-label-hilight", !1)
    };
    z.Jn = function (a) {
        var b = z.Y;
        b.UH ? (b.UH.innerHTML = a, z.Q(b.h, !0)) : z.X.message(a)
    };
    var Kn = function (a, b) {
        b && b.length && z.y(b, function (a) {
            this.dispatchEvent(new z.Zj(a[0], a[1]))
        }, a)
    };
    z.Ln = function (a, b) {
        z.G.call(this);
        this.ga = new z.xd(this);
        this.sh(a || null);
        b && (this.Xb = b)
    };
    z.Mn = function (a, b) {
        return a.he.get(b)
    };
    var Nn = function (a, b) {
        return a.Qc && b ? z.lb(a.Qc, b) : -1
    };
    var On = function (a, b) {
        a.Ra && a.Ra.Xe && (z.Kb(a.Ra.Xe, a.pb), z.Lb(a.Ra.Xe, b, a));
        a.pb = b
    };
    var Pn = function (a) {
        return new z.pg(a.top, a.left + a.width, a.top + a.height, a.left)
    };
    var Qn = function (a) {
        return "CSS1Compat" == a.Ka.compatMode
    };
    z.Rn = function (a) {
        if (a.ea) return En(a.ea.responseText)
    };
    var Sn = function (a) {
        z.Td(a);
        for (var b = {}, c = 0; c < a.Za.length; c++) {
            var d = a.Za[c];
            b[d] = a.Ib[d]
        }
        return b
    };
    var Tn = function (a) {
        return a
    };
    var Un = function () {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ (0, z.I)()).toString(36)
    };
    var Vn = function (a) {
        a = a ? z.Je(a) : window.document;
        return !z.C || 9 <= z.Tg || Qn(z.J(a)) ? a.documentElement : a.body
    };
    z.Wn = function (a) {
        var b = z.Je(a), c = new z.Ge(0, 0), d = Vn(b);
        if (a == d) return c;
        a = z.Bg(a);
        b = z.vf(z.J(b));
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    };
    var Xn = function (a, b) {
        for (var c = b; c = c.previousSibling;) if (c == a) return -1;
        return 1
    };
    z.Yn = function (a, b) {
        for (var c in a) if (a[c] == b) return !0;
        return !1
    };
    z.Zn = function (a) {
        var b = 0, c;
        for (c in a) b++;
        return b
    };
    z.$n = function (a, b, c) {
        return Array.prototype.every.call(a, b, c)
    };
    var ao = function (a) {
        return a.replace(/&([^;]+);/g, function (a, c) {
            switch (c) {
                case "amp":
                    return "\x26";
                case "lt":
                    return "\x3c";
                case "gt":
                    return "\x3e";
                case "quot":
                    return '"';
                default:
                    if ("#" == c.charAt(0)) {
                        var d = Number("0" + c.substr(1));
                        if (!(0, window.isNaN)(d)) return String.fromCharCode(d)
                    }
                    return a
            }
        })
    };
    var bo = function (a) {
        var b = {"\x26amp;": "\x26", "\x26lt;": "\x3c", "\x26gt;": "\x3e", "\x26quot;": '"'}, c;
        c = z.t.document.createElement("div");
        return a.replace(co, function (a, f) {
            var g = b[a];
            if (g) return g;
            if ("#" == f.charAt(0)) {
                var h = Number("0" + f.substr(1));
                (0, window.isNaN)(h) || (g = String.fromCharCode(h))
            }
            g || (c.innerHTML = a + " ", g = c.firstChild.nodeValue.slice(0, -1));
            return b[a] = g
        })
    };
    z.eo = function (a) {
        if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (z.D || z.Gc) && 0 == a) return !0;
        switch (a) {
            case 32:
            case 43:
            case 63:
            case 64:
            case 107:
            case 109:
            case 110:
            case 111:
            case 186:
            case 59:
            case 189:
            case 187:
            case 61:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
            case 219:
            case 220:
            case 221:
                return !0;
            default:
                return !1
        }
    };
    z.fo = function (a) {
        return new z.He(a.offsetWidth, a.offsetHeight)
    };
    var go = function (a) {
        if (z.C && !(8 <= z.Tg)) return a.offsetParent;
        var b = z.Je(a), c = z.xg(a, "position"), d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode) if (11 == a.nodeType && a.host && (a = a.host), c = z.xg(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    };
    var ho = function (a, b, c, d) {
        if (null != a) for (a = a.firstChild; a;) {
            if (b(a) && (c.push(a), d) || ho(a, b, c, d)) return !0;
            a = a.nextSibling
        }
        return !1
    };
    var io = function (a, b) {
        var c = a.parentNode;
        if (c == b) return -1;
        for (var d = b; d.parentNode != c;) d = d.parentNode;
        return Xn(d, a)
    };
    var jo = function (a, b) {
        return new z.Ge(a.x - b.x, a.y - b.y)
    };
    var ko = function (a) {
        this.ou = a
    };
    var lo = function (a, b, c) {
        if (null == b) c.push("null"); else {
            if ("object" == typeof b) {
                if (z.na(b)) {
                    a.serializeArray(b, c);
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf(); else {
                    c.push("{");
                    var d = "", f;
                    for (f in b) if (Object.prototype.hasOwnProperty.call(b, f)) {
                        var g = b[f];
                        "function" != typeof g && (c.push(d), mo(f, c), c.push(":"), lo(a, a.ou ? a.ou.call(b, f, g) : g, c), d = ",")
                    }
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    mo(b, c);
                    break;
                case "number":
                    c.push((0, window.isFinite)(b) && !(0, window.isNaN)(b) ?
                        String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    };
    var mo = function (a, b) {
        b.push('"', a.replace(z.Rl, function (a) {
            var b = no[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), no[a] = b);
            return b
        }), '"')
    };
    var oo = function (a) {
        var b = typeof a;
        return "object" == b && a || "function" == b ? "o" + z.ua(a) : b.substr(0, 1) + a
    };
    var po = function (a, b) {
        if ("function" == typeof a.every) return a.every(b, void 0);
        if (z.oa(a) || z.pa(a)) return z.$n(a, b, void 0);
        for (var c = z.Jd(a), d = z.Id(a), f = d.length, g = 0; g < f; g++) if (!b.call(void 0, d[g], c && c[g], a)) return !1;
        return !0
    };
    var qo = function (a) {
        return a.kb && "function" == typeof a.kb ? a.kb() : z.oa(a) || z.pa(a) ? a.length : z.Zn(a)
    };
    var ro = function (a) {
        return z.Va(a, "\x26") ? "document" in z.t ? bo(a) : ao(a) : a
    };
    var so = function (a, b, c, d, f) {
        if (!(z.C || z.Gc || z.D && z.E("525"))) return !0;
        if (z.Uc && f) return z.eo(a);
        if (f && !d) return !1;
        z.qa(b) && (b = z.lj(b));
        if (!c && (17 == b || 18 == b || z.Uc && 91 == b)) return !1;
        if ((z.D || z.Gc) && d && c) switch (a) {
            case 220:
            case 219:
            case 221:
            case 192:
            case 186:
            case 189:
            case 187:
            case 188:
            case 190:
            case 191:
            case 192:
            case 222:
                return !1
        }
        if (z.C && d && b == a) return !1;
        switch (a) {
            case 13:
                return !0;
            case 27:
                return !(z.D || z.Gc)
        }
        return z.eo(a)
    };
    var to = function (a) {
        if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) return !1;
        switch (a.keyCode) {
            case 18:
            case 20:
            case 93:
            case 17:
            case 40:
            case 35:
            case 27:
            case 36:
            case 45:
            case 37:
            case 224:
            case 91:
            case 144:
            case 12:
            case 34:
            case 33:
            case 19:
            case 255:
            case 44:
            case 39:
            case 145:
            case 16:
            case 38:
            case 252:
            case 224:
            case 92:
                return !1;
            case 0:
                return !z.B;
            default:
                return 166 > a.keyCode || 183 < a.keyCode
        }
    };
    z.uo = function (a, b, c) {
        c ? z.hj(a, b) : z.jj(a, b)
    };
    var vo = function (a) {
        return z.ej(a, "label")
    };
    var wo = function (a, b) {
        var c = "";
        b && (c = b.id);
        z.cj(a, "activedescendant", c)
    };
    z.xo = function (a, b, c) {
        var d = a.m ? a.m() : a;
        z.Db(b, function (a, b) {
            d.setAttribute("data-za-" + b, a)
        });
        (0, window.$.data)(d, "zaRespondMoudleFn", c)
    };
    var yo = function (a, b) {
        switch (a) {
            case 1:
                return b ? "disable" : "enable";
            case 2:
                return b ? "highlight" : "unhighlight";
            case 4:
                return b ? "activate" : "deactivate";
            case 8:
                return b ? "select" : "unselect";
            case 16:
                return b ? "check" : "uncheck";
            case 32:
                return b ? "focus" : "blur";
            case 64:
                return b ? "open" : "close"
        }
        throw Error("Invalid component state");
    };
    z.zo = function (a, b, c) {
        c = c ? null : a.getElementsByTagName("*");
        if (z.dm) {
            if (b = b ? "none" : "", a.style && (a.style[z.dm] = b), c) {
                a = 0;
                for (var d; d = c[a]; a++) d.style && (d.style[z.dm] = b)
            }
        } else if (z.C || z.ug) if (b = b ? "on" : "", a.setAttribute("unselectable", b), c) for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
    };
    z.Ao = function (a) {
        var b = z.Wn(a);
        a = z.Hg(a);
        return new z.qg(b.x, b.y, a.width, a.height)
    };
    z.Bo = function (a, b, c) {
        var d = z.Wn(a);
        b instanceof z.Ge && (c = b.y, b = b.x);
        z.zg(a, a.offsetLeft + (b - d.x), a.offsetTop + (c - d.y))
    };
    var Co = function (a, b) {
        var c = b || z.Qe(window.document), d;
        d = c || z.Qe(window.document);
        var f = z.Wn(a), g = z.Wn(d), h = z.Sg(d);
        if (d == z.Qe(window.document)) {
            var k = f.x - d.scrollLeft, f = f.y - d.scrollTop;
            !z.C || 10 <= z.Tg || (k += h.left, f += h.top)
        } else k = f.x - g.x - h.left, f = f.y - g.y - h.top;
        var h = d.clientHeight - a.offsetHeight, g = d.scrollLeft, m = d.scrollTop,
            g = g + Math.min(k, Math.max(k - (d.clientWidth - a.offsetWidth), 0)),
            m = m + Math.min(f, Math.max(f - h, 0));
        d = new z.Ge(g, m);
        c.scrollLeft = d.x;
        c.scrollTop = d.y
    };
    var Do = function (a) {
        for (var b = new z.pg(0, window.Infinity, window.Infinity, 0), c = z.J(a), d = c.ua().body, f = c.ua().documentElement, g = z.Qe(c.Ka); a = go(a);) if (!(z.C && 0 == a.clientWidth || z.D && 0 == a.clientHeight && a == d) && a != d && a != f && "visible" != z.xg(a, "overflow")) {
            var h = z.Wn(a), k = new z.Ge(a.clientLeft, a.clientTop);
            h.x += k.x;
            h.y += k.y;
            b.top = Math.max(b.top, h.y);
            b.right = Math.min(b.right, h.x + a.clientWidth);
            b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
            b.left = Math.max(b.left, h.x)
        }
        d = g.scrollLeft;
        g = g.scrollTop;
        b.left = Math.max(b.left,
            d);
        b.top = Math.max(b.top, g);
        c = z.Oe(c.Va());
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, g + c.height);
        return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
    };
    var Eo = function (a) {
        var b = a.body;
        a = a.documentElement;
        return new z.Ge(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
    };
    var Fo = function (a, b) {
        var c = a.style[z.db(b)];
        return "undefined" !== typeof c ? c : a.style[z.sg(a, b)] || ""
    };
    var Go = function (a, b) {
        var c = b.x < a.left ? b.x - a.left : b.x > a.right ? b.x - a.right : 0,
            d = b.y < a.top ? b.y - a.top : b.y > a.bottom ? b.y - a.bottom : 0;
        return Math.sqrt(c * c + d * d)
    };
    z.Ho = function (a, b) {
        return z.tf(a, null, b, void 0)
    };
    z.Io = function (a) {
        var b = [];
        z.qf(a, b, !1);
        return b.join("")
    };
    z.Jo = function (a, b) {
        var c = [];
        ho(a, b, c, !1);
        return c
    };
    z.Ko = function (a) {
        if ("outerHTML" in a) return a.outerHTML;
        var b = z.Je(a).createElement("DIV");
        b.appendChild(a.cloneNode(!0));
        return b.innerHTML
    };
    var Lo = function (a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [], f = window.Infinity;
        for (b = 0; b < c; b++) {
            for (var g = [], h = arguments[b]; h;) g.unshift(h), h = h.parentNode;
            d.push(g);
            f = Math.min(f, g.length)
        }
        g = null;
        for (b = 0; b < f; b++) {
            for (var h = d[0][b], k = 1; k < c; k++) if (h != d[k][b]) return g;
            g = h
        }
        return g
    };
    var Mo = function (a, b) {
        if (a == b) return 0;
        if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
        if (z.C && !(9 <= z.Tg)) {
            if (9 == a.nodeType) return -1;
            if (9 == b.nodeType) return 1
        }
        if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
            var c = 1 == a.nodeType, d = 1 == b.nodeType;
            if (c && d) return a.sourceIndex - b.sourceIndex;
            var f = a.parentNode, g = b.parentNode;
            return f == g ? Xn(a, b) : !c && z.lf(f, b) ? -1 * io(a, b) : !d && z.lf(g, a) ? io(b, a) : (c ? a.sourceIndex : f.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex)
        }
        d = z.Je(a);
        c = d.createRange();
        c.selectNode(a);
        c.collapse(!0);
        d = d.createRange();
        d.selectNode(b);
        d.collapse(!0);
        return c.compareBoundaryPoints(z.t.Range.START_TO_END, d)
    };
    z.No = function (a) {
        return z.ka(a.previousElementSibling) ? a.previousElementSibling : z.hf(a.previousSibling, !1)
    };
    z.Oo = function (a) {
        return z.ka(a.nextElementSibling) ? a.nextElementSibling : z.hf(a.nextSibling, !0)
    };
    z.Po = function (a, b) {
        var c = b.parentNode;
        c && c.replaceChild(a, b)
    };
    z.Qo = function (a, b) {
        var c = b || window.document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : z.Le(window.document, "*", a, b)
    };
    z.Ro = function (a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    };
    z.So = function (a, b, c) {
        a = [a, "\x26", b];
        null != c && a.push("\x3d", (0, window.encodeURIComponent)(String(c)));
        a[1] && (c = a[0], b = c.indexOf("#"), 0 <= b && (a.push(c.substr(b)), a[0] = c = c.substr(0, b)), b = c.indexOf("?"), 0 > b ? a[1] = "?" : b == c.length - 1 && (a[1] = void 0));
        return a.join("")
    };
    var To = function (a, b) {
        return (new ko(b)).serialize(a)
    };
    var Uo = function (a) {
        return eval("(" + a + ")")
    };
    var Vo = function (a) {
        this.Ib = new z.Rd;
        a && this.addAll(a)
    };
    var Wo = function (a, b) {
        var c = qo(b);
        if (a.kb() > c) return !1;
        !(b instanceof Vo) && 5 < c && (b = new Vo(b));
        return po(a, function (a) {
            var c = b;
            return c.contains && "function" == typeof c.contains ? c.contains(a) : c.Xh && "function" == typeof c.Xh ? c.Xh(a) : z.oa(c) || z.pa(c) ? z.A(c, a) : z.Yn(c, a)
        })
    };
    var Xo = function (a) {
        try {
            return z.Nd(a).next()
        } catch (b) {
            if (b != z.Od) throw b;
            return null
        }
    };
    z.Yo = function (a, b) {
        var c = z.Nd(a), d = new z.Ld;
        d.next = function () {
            for (; ;) {
                var a = c.next();
                if (b.call(void 0, a, void 0, c)) return a
            }
        };
        return d
    };
    var Zo = function (a, b, c) {
        return Math.min(Math.max(a, b), c)
    };
    z.$o = function (a) {
        var b = {}, c;
        for (c in a) b[a[c]] = c;
        return b
    };
    var ap = function (a, b) {
        var c = {}, d;
        for (d in a) c[d] = b.call(void 0, a[d], d, a);
        return c
    };
    var bp = function (a) {
        for (var b = [], c = 0; c < arguments.length; c++) {
            var d = arguments[c];
            if (z.na(d)) for (var f = 0; f < d.length; f += 8192) for (var g = z.yb(d, f, f + 8192), g = bp.apply(null, g), h = 0; h < g.length; h++) b.push(g[h]); else b.push(d)
        }
        return b
    };
    z.cp = function (a, b) {
        for (var c = z.pa(a) ? a.split("") : a, d = a.length - 1; 0 <= d; d--) if (d in c && b.call(void 0, c[d], d, a)) return d;
        return -1
    };
    var dp = function (a, b) {
        var c = 0;
        z.y(a, function (a, f, g) {
            b.call(void 0, a, f, g) && ++c
        }, void 0);
        return c
    };
    z.ep = function (a) {
        return function () {
            return !a.apply(this, arguments)
        }
    };
    z.fp = function (a) {
        var b = arguments, c = b.length;
        return function () {
            for (var a = 0; a < c; a++) if (!b[a].apply(this, arguments)) return !1;
            return !0
        }
    };
    z.gp = function (a) {
        var b = arguments, c = b.length;
        return function () {
            for (var a, f = 0; f < c; f++) a = b[f].apply(this, arguments);
            return a
        }
    };
    z.hp = function (a, b) {
        var c = arguments, d = c.length;
        return function () {
            var a;
            d && (a = c[d - 1].apply(this, arguments));
            for (var b = d - 2; 0 <= b; b--) a = c[b].call(this, a);
            return a
        }
    };
    var ip = function (a) {
        var b;
        b = b || 0;
        return function () {
            return a.apply(this, Array.prototype.slice.call(arguments, 0, b))
        }
    };
    z.jp = function () {
        return "goog_" + z.Dl++
    };
    z.kp = function (a) {
        return a.replace(/[\s\xa0]+$/, "")
    };
    z.lp = function (a) {
        return a.replace(/^[\s\xa0]+/, "")
    };
    var mp = function (a) {
        return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
    };
    z.np = function (a) {
        return a.replace(/(\r\n|\r|\n)+/g, " ")
    };
    z.op = function (a) {
        return !/[^\t\n\r ]/.test(a)
    };
    z.pp = function (a) {
        return /^[\s\xa0]*$/.test(a)
    };
    z.qp = function (a, b) {
        var c = a.length - b.length;
        return 0 <= c && a.indexOf(b, c) == c
    };
    var rp = function () {
        throw Error("unimplemented abstract method");
    };
    z.Z = function (a) {
        z.de.call(this);
        this.MK = !!a;
        this.headers.set("X-Requested-With", "XMLHttpRequest");
        this.on("complete", this.oP, !1, this)
    };
    z.sp = function (a, b, c, d) {
        var f = new z.Z;
        if (b) f.on("complete", b);
        f.ajax(a, d, c)
    };
    var tp = function (a, b) {
        up.push({bL: a, filter: b})
    };
    var vp = function (a) {
        var b = a.getResponseHeader("content-type");
        if (b) {
            var c = wp[b.split(";")[0].toLowerCase()];
            if (c && up.length) {
                var d = z.te(a);
                z.y(up, function (a) {
                    "*" !== a.bL && a.bL !== c || a.filter("json" === c ? JSON.parse(d) : d, this)
                }, a)
            }
        }
    };
    var xp = function () {
        if (yp) return yp;
        var a = z.O("div", {id: "zh-global-spinner", style: "display:none", innerHTML: "加载中…"});
        window.document.body.appendChild(a);
        return yp = a
    };
    var zp = function () {
        z.G.call(this)
    };
    z.Ap = function (a, b, c) {
        function d() {
            var b = new z.Z(!0), d = "/question/" + (a ? "set_anonymous" : "set_public"), g = "qid\x3d" + (c || z.S.pa);
            b.on("success", function () {
                var c = z.Rn(b);
                c && !c.r && (z.S && (z.S.qb = a), f.dispatchEvent(new z.Bp(a)))
            });
            b.ajax(d, g)
        }

        var f = z.Cp, g = {
            title: "确认使用匿名身份？",
            content: '\x3cp\x3e使用匿名身份后\x3c/p\x3e\x3cul style\x3d"margin: 5px 0 0 5px;list-style-position: inside;"\x3e\x3cli\x3e提问、回答、赞同、关注会显示为匿名\x3c/li\x3e\x3cli\x3e除提问者本人，不能匿名编辑问题\x3c/li\x3e\x3cli\x3e不能邀请别人回答问题\x3c/li\x3e\x3c/ul\x3e'
        }, h = {
            title: "确认取消匿名身份？",
            content: "取消匿名身份后， 提问、回答、赞同和关注将以实名显示。"
        };
        z.X.confirm(a ? g : h, function (a) {
            a && d();
            b && b(a)
        })
    };
    z.Bp = function (a) {
        this.type = "anon_change";
        this.qb = a
    };
    var Dp = function (a) {
        z.G.call(this);
        this.J = window.$.extend({hk: z.p}, a || {});
        this.vr = z.sm.guiders2 || {};
        this.$Q = (0, z.I)();
        this.Ab = z.Uj && !z.Vj;
        this.hc()
    };
    var Ep = function (a, b, c) {
        function d(g) {
            g || (g = a.shift()) && b.call(c, g, f++, d)
        }

        a = a.slice();
        var f = 0;
        d()
    };
    var Fp = function (a) {
        var b = {
            "home-topstory": {
                path: "/",
                offset: {right: -10},
                Xt: "righttop",
                bn: "arrow-lefttop",
                xA: ".zu-main-feed-con",
                tt: ".zu-main-sidebar"
            }
        }, c = a.vr.section;
        c && Ep(z.Hb(c), function (a, f, g) {
            (f = b[a]) && f.path === window.location.pathname ? Gp(this, "section", a, c[a], f, !1, g) : g()
        }, a)
    };
    var Hp = function (a) {
        var b = {
            "/": {
                offset: {top: 6},
                trigger: "1page-down inview",
                Xt: "lefttop",
                bn: "arrow-righttop",
                xA: ".js-sidebarRoundtable",
                tt: ".zu-main-content-inner"
            },
            "/explore": {
                Xt: "lefttop",
                bn: "arrow-righttop",
                xA: ".explore-side-section-roundtable",
                tt: ".zu-main-content-inner"
            }
        }, c = a.vr["exclusive-popover"];
        c && Ep(z.Hb(c), function (a, f, g) {
            var h;
            "roundtable" === a && (h = b[window.location.pathname]);
            h && Gp(this, "exclusive-popover", a, c[a], h, h.trigger, g)
        }, a)
    };
    var Gp = function (a, b, c, d, f, g, h) {
        if (b && c && d && f) {
            var k = (0, window.$)(f.xA);
            if (k.length && ("righttop" !== f.Xt || 300 < z.Oe().width - k[0].getBoundingClientRect().right)) {
                var m = (0, window.$)(z.Ka('\x3cdiv class\x3d"guide2-section-popover"\x3e\x3cdiv class\x3d"title"\x3e%s\x3c/div\x3e\x3cdiv class\x3d"content"\x3e%s\x3c/div\x3e\x3cdiv class\x3d"action"\x3e\x3ca class\x3d"dismiss" href\x3d"%s"\x3e%s\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e', d.title || "", d.content, d.dismissHref || "#", d.dismissText));
                m.addClass(f.Xt).addClass(f.bn).appendTo(k);
                var n = f.offset;
                n && window.$.each(["left", "top", "right", "bottom"], function (a, b) {
                    n[b] && m.css("margin-" + b, n[b])
                });
                var r = (0, window.$)([]);
                z.Ba(function (a) {
                    return (0, z.I)() - a
                }, a.$Q);
                var w = function () {
                    f.tt && (r = (0, window.$)('\x3cspan class\x3d"guidev2-mask"/\x3e').appendTo(f.tt));
                    (0, window.setTimeout)(function () {
                        m.add(r).addClass("fx-show");
                        K()
                    });
                    window.$.post("/node/Guide2", {method: "dismiss_popover", params: {category: b, key: c}})
                }, H = function (a) {
                    if (window.Modernizr.csstransitions) m.add(r).removeClass("fx-show").onTransitionEnd(function () {
                            (0, window.$)(this).remove()
                        },
                        350); else m.add(r).remove();
                    h && h(a)
                };
                a = function (a) {
                    function b(a) {
                        var c = !1;
                        return function () {
                            !0 !== c && (c = a.apply(this, arguments));
                            return c
                        }
                    }

                    var c = 0, d = b(function () {
                        var a = window.pageYOffset;
                        if (a >= f.size.height) return c = a, !0
                    }), d = {
                        "1page-down .5page-up": z.fp(d, b(function () {
                            return c - window.pageYOffset >= f.size.height / 2
                        })), "1page-down inview": z.fp(d, function () {
                            return Hn(f, k[0])
                        })
                    }, f = new z.gl, g = d[a] || d["1page-down .5page-up"];
                    f.v().g(f, "update", function () {
                        g() && (f.H(), w())
                    })
                };
                var K = function () {
                    var a = new z.gl;
                    a.v().g(a, "update", function () {
                        m.parent().length ? Hn(a, m[0]) || (H(), a.H()) : a.H()
                    })
                };
                (0, window.$)(".dismiss", m).click(function () {
                    H();
                    return !1
                });
                (0, window.$)(".skip-all", m).click(function () {
                    window.$.post("/node/Guide2", {method: "skip_popover", params: {category: b}});
                    H(!0);
                    return !1
                });
                g ? a(g) : w()
            }
        }
    };
    var Ip = function () {
        var a = (0, window.$)("#guidersv2-page-banner");
        (0, window.$)(".js-close", a).click(function () {
            a.remove()
        })
    };
    var Jp = function (a) {
        function b(a) {
            window.$.post("/node/Guide2", {method: "dismiss_editor", params: {key: a}})
        }

        function c(a) {
            z.xi(Object.assign({
                category: "popup_guide",
                label: {bio: "popup_guide_personal_introduction", topic: "popup_guide_topic_recommendation"}[h]
            }, a))
        }

        function d(a) {
            k || (k = new z.V, k.Bf(!0), k.cF = !1, z.W.add(k.fi(), "Guide"));
            k.ia(a);
            k.G(!0)
        }

        var f = window.$.Deferred(), g = a.vr.editor;
        if (!g || !g.length) return f.reject();
        var g = g.slice(), h, k, m = {}, n = {
            bio: function (a) {
                var f = (0, window.$)("#tmpl-Guide-BioEditor").html();
                if (!f) return window.console && window.console.warn("Cannot find template"), a();
                var g = z.gp(a, function () {
                    b("bio")
                });
                d(f);
                (function (a) {
                    a = (0, window.$)(a).off();
                    var b = (0, window.$)(".js-submit", a), d = (0, window.$)('input[name\x3d"bio"]', a);
                    b.click(function () {
                        var a = m.jw = window.$.trim(d.val());
                        a ? (window.$.post("/node/Guide2", {
                            method: "add_headline",
                            params: {headline: a}
                        }), c({
                            action: "click_edit_personal_introduction_submit",
                            attributes: {personal_introduction: a}
                        })) : c({action: "click_edit_personal_introduction_skip"});
                        g()
                    })
                })(k.S());
                c({action: "popup_edit_personal_introduction_appear"})
            }, topic: function (a) {
                function f() {
                    z.Cp.dispatchEvent("guider2:topicselected")
                }

                window.$.get("/node/GuideTopicList", function (a) {
                    (0, window.$)(".Guide-topicsLoading").remove();
                    (0, window.$)(a).appendTo(".Guide-content")
                });
                var g = (0, window.$)("#tmpl-Guide-Topics").html();
                if (g) {
                    var h = z.gp(a, function () {
                        b("topic")
                    });
                    d(g);
                    (function (a) {
                        var b = (0, window.$)(a).off();
                        a = (0, window.$)(".js-submit", b);
                        b.on("click", ".Guide-TopicsItem", function () {
                            var a =
                                (0, window.$)(this);
                            a.toggleClass("is-checked");
                            var b = (0, window.$)(".template-relatedTopics", a);
                            if (b.length) {
                                var c = b.html();
                                b.remove();
                                (0, window.$)(c).insertAfter(a)
                            }
                        });
                        a.click(function () {
                            var a = m.Lm = [], d = {};
                            (0, window.$)(".Guide-TopicsItem", b).filter(".is-checked").each(function () {
                                var b = (0, window.$)(this), c = b.data("id"), f = b.index(),
                                    b = b.find(".name").text();
                                a.push(c);
                                d[c] = {topic: b, row: Math.ceil((f + 1) / 3), column: f % 3 + 1}
                            });
                            a.length ? (window.$.post("/topics/follow", {follow_ids: a.join(",")}, f), c({
                                action: "click_popup_guide_topic_recommendation_submit",
                                attributes: {selected_topic: d}
                            })) : (f(), c({action: "click_popup_guide_topic_recommendation_skip"}));
                            h()
                        })
                    })(k.S());
                    c({action: "popup_guide_topic_recommendation_appear"})
                } else window.console && window.console.warn("Cannot find template"), a(), f()
            }
        };
        (0, window.$)(window).on("beforeunload.guide2", function () {
            k && k.V() && c({
                wc: !0,
                action: {
                    bio: "click_edit_personal_introduction_close",
                    topic: "click_guide_topic_recommendation_close"
                }[h]
            })
        });
        Ep(g, function (a, b, c) {
            if (n[a]) {
                h = a;
                var d = b === g.length - 1, M = function (a) {
                    if (k) if (window.Modernizr.cssanimations) var b =
                        (0, window.$)(k.fi()).addClass("fx-hide").onAnimationEnd(function () {
                            b.removeClass("fx-hide");
                            a()
                        }, 400); else a()
                };
                n[a](function () {
                    d ? M(function () {
                        k.G(!1);
                        f.resolve(m);
                        (0, window.$)(window).off(".guide2");
                        "/topic" === window.location.pathname && window.location.reload()
                    }) : M(c)
                })
            }
        });
        return f.promise()
    };
    var Kp = function (a, b) {
        z.G.call(this);
        a && this.attach(a, b)
    };
    var Lp = function (a, b, c, d) {
        z.Pc.call(this, d);
        this.type = "key";
        this.keyCode = a;
        this.charCode = b;
        this.repeat = c
    };
    var Mp = function () {
    };
    var Np = function (a, b, c) {
        if (a = c || a.jf()) c = b.getAttribute("role") || null, a != c && z.bj(b, a)
    };
    var Op = function (a, b, c) {
        var d = b.iD;
        null != d && a.ZA(c, d);
        b.V() || z.cj(c, "hidden", !b.V());
        b.isEnabled() || a.ug(c, 1, !b.isEnabled());
        Pp(b, 8) && a.ug(c, 8, !!(b.N & 8));
        Pp(b, 16) && a.ug(c, 16, b.qf());
        Pp(b, 64) && a.ug(c, 64, b.ub())
    };
    var Qp = function (a, b) {
        var c = [];
        b && (a = a.concat([b]));
        z.y([], function (d) {
            !z.$n(d, z.Ba(z.A, a)) || b && !z.A(d, b) || c.push(d.join("_"))
        });
        return c
    };
    var Rp = function (a) {
        var b = a.U();
        b.replace(/\xa0|\s/g, " ");
        a.pr = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    };
    z.Sp = function () {
    };
    z.Tp = function (a, b) {
        if (!a) throw Error("Invalid class name " + a);
        if (!z.sa(b)) throw Error("Invalid decorator function " + b);
        Up[a] = b
    };
    var Vp = function (a, b, c) {
        z.R.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = z.ua(b);
                if (d = Wp[d]) break;
                b = b.o ? b.o.constructor : null
            }
            b = d ? z.sa(d.ba) ? d.ba() : new d : null
        }
        this.M = b;
        this.wm(z.ka(a) ? a : null);
        this.iD = null
    };
    var Xp = function (a, b) {
        var c = a.v(), d = a.m();
        b ? (c.g(d, "mouseover", a.nd).g(d, "mousedown", a.fe).g(d, "mouseup", a.of).g(d, "mouseout", a.Kl), a.ho != z.p && c.g(d, "contextmenu", a.ho), z.C && (c.g(d, "dblclick", a.PF), a.qo || (a.qo = new Yp(a), z.Ac(a, a.qo)))) : (c.qa(d, "mouseover", a.nd).qa(d, "mousedown", a.fe).qa(d, "mouseup", a.of).qa(d, "mouseout", a.Kl), a.ho != z.p && c.qa(d, "contextmenu", a.ho), z.C && (c.qa(d, "dblclick", a.PF), z.Cc(a.qo), a.qo = null))
    };
    var Pp = function (a, b) {
        return !!(a.bq & b)
    };
    var Zp = function (a, b) {
        return !!(a.cj & b) && Pp(a, b)
    };
    var $p = function (a, b, c) {
        return Pp(a, b) && !!(a.N & b) != c && (!(a.yk & b) || a.dispatchEvent(yo(b, c))) && !a.Fd
    };
    var Yp = function (a) {
        z.xc.call(this);
        this.zr = a;
        this.qr = !1;
        this.ga = new z.xd(this);
        z.Ac(this, this.ga);
        a = this.zr.h;
        this.ga.g(a, "mousedown", this.Il).g(a, "mouseup", this.xs).g(a, "click", this.Hl)
    };
    var aq = function () {
    };
    z.bq = function (a, b, c) {
        Vp.call(this, a, b || aq.ba(), c)
    };
    var cq = function () {
    };
    var dq = function (a, b, c) {
        if (b) {
            var d = eq(a, c);
            z.gj(b, d) || (z.Db(fq, function (a) {
                a = eq(this, a);
                z.uo(b, a, a == d)
            }, a), z.cj(b, "checked", c == gq ? "mixed" : c == hq ? "true" : "false"))
        }
    };
    var eq = function (a, b) {
        var c = a.U();
        if (b == hq) return c + "-checked";
        if (b == iq) return c + "-unchecked";
        if (b == gq) return c + "-undetermined";
        throw Error("Invalid checkbox state: " + b);
    };
    var jq = function (a, b, c) {
        c = c || cq.ba();
        Vp.call(this, null, c, b);
        this.Uh = z.ka(a) ? a : iq
    };
    z.kq = function () {
    };
    var lq = function () {
    };
    z.mq = function (a, b, c, d, f) {
        function g(a) {
            a && (a.tabIndex = 0, z.bj(a, h.jf()), z.hj(a, "goog-zippy-header"), nq(h, a), a && h.fH.g(a, "keydown", h.VS))
        }

        z.G.call(this);
        this.da = f || z.J();
        this.Rf = this.da.m(a) || null;
        this.qj = this.da.m(d || null);
        this.rl = (this.gt = z.sa(b) ? b : null) || !b ? null : this.da.m(b);
        this.ob = 1 == c;
        z.ka(c) || this.gt || (this.qj ? this.ob = z.Kg(this.qj) : this.Rf && (this.ob = z.gj(this.Rf, "goog-zippy-expanded")));
        this.fH = new z.xd(this);
        this.Pz = new z.xd(this);
        var h = this;
        g(this.Rf);
        g(this.qj);
        this.Lc(this.ob)
    };
    var oq = function (a) {
        var b = a.qj;
        return b && z.Kg(b) ? b : a.Rf
    };
    var nq = function (a, b) {
        b && a.Pz.g(b, "click", a.US)
    };
    var pq = function (a, b, c) {
        z.Lc.call(this, a, b);
        this.Og = c
    };
    z.qq = function () {
        z.V.call(this);
        this.Bf(!0)
    };
    var rq = function (a) {
        var b = (0, window.$)(".resend-activation-email", a.xC);
        sq(a, b, 10, function () {
            window.$.post("/reactive")
        })
    };
    var tq = function (a) {
        window.$.get("/settings/account/request_unlock");
        var b = (0, window.$)("form.send-code", a.oC), c = a.lC = (0, window.$)("form.activate", a.oC),
            d = (0, window.$)(".submit", b);
        b.validate(window.$.extend({}, uq, {submitHandler: z.uk(d, window.$.proxy(a.vT, a))}));
        b = (0, window.$)(".submit", c);
        c.validate(window.$.extend({}, uq, {submitHandler: z.uk(b, window.$.proxy(a.wS, a))}));
        b = (0, window.$)("button.resend-code", c);
        sq(a, b, 60, function () {
            var a = (0, window.$)('input[name\x3d"account"]', c).val();
            if ("" === a) return c.data("validator").showErrors({account: "请填写手机号或邮箱"}),
                !1;
            var b = this.rf(a), d;
            b ? (a = {email: a}, d = "/settings/account/send_new_email_digits") : (a = {phone_no: a}, d = "/settings/account/send_new_phone_digits");
            var k = this;
            window.$.post(d, a, function (a) {
                a.success ? vq(k, b) : (a = a.payload.fields, b ? k.wb(a, "email", "account") : k.wb(a, "phone_no", "account"), c.data("validator").showErrors(a))
            })
        })
    };
    var vq = function (a, b) {
        a.Cv || (a.Cv = (0, window.$)(".tip", a.Ad));
        b ? a.Cv.html("验证码已发送至你的邮箱，请查收。") : a.Cv.html("验证码已发送至你的手机，请查收。")
    };
    var sq = function (a, b, c, d) {
        var f = b.text();
        b = z.tk(b, c, function (a) {
            return a ? "%s 秒后即可重发" : f
        }, window.$.proxy(d, a));
        z.Ac(a, b)
    };
    var wq = function (a) {
        function b() {
            (0, window.clearTimeout)(g);
            g = null;
            try {
                delete window[d]
            } catch (a) {
                window[d] = null
            }
        }

        "string" === window.$.type(a) && (a = {url: a});
        a = a || {};
        var c = window.$.Deferred(), d = "zh" + (0, z.I)() + Un(), f = window.$.extend({}, a.data || {}, {callback: d}),
            g = null;
        a.timeout && (g = (0, window.setTimeout)(function () {
            window[d] && (window[d] = b, c.reject("timeout"))
        }, a.timeout));
        window[d] = c.resolve;
        a = a.url + (-1 === a.url.indexOf("?") ? "?" : "\x26") + window.$.param(f);
        z.ch(a).fail(c.reject).always(b);
        return c.promise()
    };
    var xq = function (a, b) {
        b = void 0 === b ? 0 : b;
        z.G.call(this);
        this.EM = Object.assign({}, yq, a);
        this.iU = b;
        this.su = 1E3;
        this.GH = 3E4;
        this.SQ = 1.5
    };
    z.zq = function (a, b) {
        a = void 0 === a ? z.p : a;
        b = void 0 === b ? !1 : b;
        z.R.call(this);
        this.AI = a;
        this.MV = b
    };
    var Aq = function (a) {
        window.$.get("/antispam/get_token").then(function (b) {
            a.je = b.token;
            a.timeout = b.ttl;
            a.startTime = Date.now();
            (0, window.$)(".js-token", a.h).text(a.je);
            (0, window.$)(".js-timeout", a.h).text((0, window.parseInt)(a.timeout / 60))
        })
    };
    var Bq = function (a) {
        var b = (0, window.$)(".js-sent", a.h);
        b.click(z.uk(b, function () {
            if (Date.now() > a.startTime + 1E3 * a.timeout) return Aq(a), Cq(a, "短信超时，请重新发送");
            Dq(a);
            a.Lk.show();
            return window.$.get("/antispam/is_send_sms").then(function (b) {
                b.is_send_sms ? Eq(a, "unblock") : Cq(a, "没收到正确的短信，请重新发送");
                a.Lk.hide()
            }, function () {
                a.Lk.hide()
            })
        }))
    };
    var Fq = function (a) {
        var b = (0, window.$)(".js-verify", a.h);
        b.click(z.uk(b, function () {
            var b = a.Bc.Xi.val();
            if (!b) return Cq(a, "请填写验证码");
            Dq(a);
            a.Lk.show();
            return window.$.post("/antispam/create_appeal", {captcha: b}).then(function (b) {
                0 === b.errcode ? Eq(a, "appeal") : (a.Bc.ju(), Cq(a, b.msg), a.Lk.hide())
            }, function () {
                a.Lk.hide()
            })
        }))
    };
    var Gq = function (a) {
        (0, window.$)(".js-appeal", a.h).click(function () {
            a.AI("向管理员申诉解封");
            a.Fv.hide();
            (0, window.$)(".unblock-dialog-appeal", a.h).show();
            a.Bc.ju();
            Dq(a)
        });
        (0, window.$)(".js-message", a.h).click(function () {
            a.AI("帐号解封");
            a.Fv.hide();
            (0, window.$)(".unblock-dialog-message", a.h).show();
            Dq(a)
        })
    };
    var Hq = function (a) {
        a.Zt = new xq({url: "/antispam/is_send_sms"}, 1E3);
        z.Ac(a, a.Zt);
        a.Zt.g("message", function (b) {
            b.data.is_send_sms && Eq(a, "unblock")
        });
        a.Zt.Yt()
    };
    var Eq = function (a, b) {
        a.Zt.H();
        var c;
        "unblock" === b ? c = "成功自助解封" : "appeal" === b && (c = "成功提交申诉\x3cbr\x3e申诉成功后会以邮件或私信方式通知你");
        (0, window.$)(".unblock-dialog-success-text", a.h).html(c);
        a.Fv.hide();
        (0, window.$)(".unblock-dialog-success", a.h).show();
        if (a.MV) {
            var d = (0, window.$)(".js-count-down", a.h);
            d.show();
            var f = 5, g;
            "unblock" === b ? g = "刷新" : "appeal" === b && (g = "关闭");
            var h = function () {
                0 >= f ? "unblock" === b ? window.location.reload() : "appeal" === b && a.dispatchEvent("complete") : (d.text(f-- + " 秒后自动" + g), (0, window.setTimeout)(h, 1E3))
            };
            h()
        }
    };
    var Cq = function (a, b) {
        a.rC.text(b).addClass("is-visible")
    };
    var Dq = function (a) {
        a.rC.removeClass("is-visible")
    };
    var Iq = function (a) {
        z.V.apply(this, arguments)
    };
    z.Jq = function (a, b, c) {
        function d(a) {
            return a && a.preventDefault ? a.preventDefault() : !1
        }

        return function (f) {
            var g = {Fb: !0, qe: !1, Gt: !1, gJ: !1};
            z.na(b) ? (!0 === b[0] && (g = ap(g, function () {
                return !0
            })), z.Mb(g, b[1])) : !0 === b ? g = ap(g, function () {
                return !0
            }) : (z.sa(b) && (b = b.apply(this, arguments)), z.Mb(g, b || {}));
            var h = z.sa(c) ? c.apply(this, arguments) : c;
            if (!z.T.Fb() && g.Fb) {
                var k = new z.Vk;
                k.Lp(h);
                k.show();
                return d(f)
            }
            return !z.T.qe && g.qe ? ((new z.qq).G(!0), window.$.post("/continuation/record", {
                url: window.location.pathname + window.location.search +
                    (h || "")
            }), d(f)) : z.im.YE && g.gJ ? (h = z.im.YE, "warning" === h ? k = '您的知乎用户名不符合 \x3ca href\x3d"/question/19791408"\x3e知乎用户名规范\x3c/a\x3e，请您 \x3ca href\x3d"/settings/profile"\x3e修改\x3c/a\x3e。' : "pending" === h && (k = "您提交的用户名修改正在审核中，帐号暂时锁定。"), k && z.X.message(k, 4E3), d(f)) : z.im.lw && g.Gt ? (z.im.lw.by_antispam ? (new Iq).G(!0) : z.X.message(z.im.lw.message), d(f)) : a.apply(this, arguments)
        }
    };
    var Kq = function () {
        z.G.call(this);
        this.N = Lq;
        this.endTime = this.startTime = null
    };
    var Mq = function (a, b, c) {
        z.xc.call(this);
        this.$j = a;
        this.Yg = b || 0;
        this.ga = c;
        this.cl = (0, z.q)(this.Jg, this)
    };
    var Nq = function (a) {
        a.tc() && a.fire()
    };
    var Oq = function (a) {
        a = z.ua(a);
        delete Pq[a];
        z.Jb(Pq) && Qq && Qq.stop()
    };
    var Rq = function () {
        Qq || (Qq = new Mq(function () {
            Sq()
        }, 20));
        var a = Qq;
        a.tc() || a.start()
    };
    var Sq = function () {
        var a = (0, z.I)();
        z.Db(Pq, function (b) {
            Tq(b, a)
        });
        z.Jb(Pq) || Rq()
    };
    var Uq = function (a, b, c, d) {
        Kq.call(this);
        if (!z.na(a) || !z.na(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.Yp = a;
        this.yO = b;
        this.duration = c;
        this.PC = d;
        this.coords = [];
        this.Qi = !1;
        this.progress = 0
    };
    var Tq = function (a, b) {
        a.progress = (b - a.startTime) / (a.endTime - a.startTime);
        1 <= a.progress && (a.progress = 1);
        Vq(a, a.progress);
        1 == a.progress ? (a.N = Lq, Oq(a), a.jd("finish"), a.ig()) : 1 == a.N && a.Vz()
    };
    var Vq = function (a, b) {
        z.sa(a.PC) && (b = a.PC(b));
        a.coords = Array(a.Yp.length);
        for (var c = 0; c < a.Yp.length; c++) a.coords[c] = (a.yO[c] - a.Yp[c]) * b + a.Yp[c]
    };
    var Wq = function (a, b) {
        z.Lc.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.z = b.coords[2];
        this.duration = b.duration;
        this.progress = b.progress;
        this.state = b.N;
        this.hY = b
    };
    var Xq = function (a) {
        var b = {};
        a = String(a);
        var c = "#" == a.charAt(0) ? a : "#" + a;
        if (Yq.test(c)) return b.Fs = Zq(c), b.type = "hex", b;
        c = $q(a);
        if (c.length) {
            var d = c[0];
            a = c[1];
            c = c[2];
            d = Number(d);
            a = Number(a);
            c = Number(c);
            if ((0, window.isNaN)(d) || 0 > d || 255 < d || (0, window.isNaN)(a) || 0 > a || 255 < a || (0, window.isNaN)(c) || 0 > c || 255 < c) throw Error('"(' + d + "," + a + "," + c + '") is not a valid RGB color');
            d = ar(d.toString(16));
            a = ar(a.toString(16));
            c = ar(c.toString(16));
            b.Fs = "#" + d + a + c;
            b.type = "rgb";
            return b
        }
        if (br && (c = br[a.toLowerCase()])) return b.Fs =
            c, b.type = "named", b;
        throw Error(a + " is not a valid color string");
    };
    var Zq = function (a) {
        if (!Yq.test(a)) throw Error("'" + a + "' is not a valid hex color");
        4 == a.length && (a = a.replace(cr, "#$1$1$2$2$3$3"));
        return a.toLowerCase()
    };
    var $q = function (a) {
        var b = a.match(dr);
        if (b) {
            a = Number(b[1]);
            var c = Number(b[2]), b = Number(b[3]);
            if (0 <= a && 255 >= a && 0 <= c && 255 >= c && 0 <= b && 255 >= b) return [a, c, b]
        }
        return []
    };
    var ar = function (a) {
        return 1 == a.length ? "0" + a : a
    };
    var er = function (a, b, c, d, f) {
        Uq.call(this, b, c, d, f);
        this.element = a
    };
    var fr = function (a, b, c, d, f) {
        if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
        er.apply(this, arguments)
    };
    var gr = function (a, b, c, d, f) {
        if (2 != b.length || 2 != c.length) throw Error("Start and end points must be 2D");
        er.apply(this, arguments)
    };
    var hr = function (a, b, c, d, f) {
        er.call(this, a, [b], [c], d, f)
    };
    var ir = function (a, b, c, d, f) {
        er.call(this, a, [b], [c], d, f)
    };
    var jr = function (a, b, c, d, f) {
        z.qa(b) && (b = [b]);
        z.qa(c) && (c = [c]);
        er.call(this, a, b, c, d, f);
        if (1 != b.length || 1 != c.length) throw Error("Start and end points must be 1D");
        this.et = kr
    };
    var lr = function (a, b, c) {
        jr.call(this, a, 1, 0, b, c)
    };
    var mr = function (a, b, c) {
        jr.call(this, a, 0, 1, b, c)
    };
    var nr = function (a, b, c, d, f) {
        if (3 != b.length || 3 != c.length) throw Error("Start and end points must be 3D");
        er.apply(this, arguments)
    };
    var or = function () {
        return window.$.Deferred(function (a) {
            (0, window.setTimeout)(a.resolve, 2E3)
        }).promise()
    };
    var pr = function (a, b) {
        var c = z.Jo(a, function (a) {
            return 3 === a.nodeType && !z.pp(a.nodeValue)
        })[0];
        c && (c.nodeValue = b)
    };
    z.qr = function (a, b) {
        var c = new lr(a, 500);
        b && z.F(c, "finish", (0, z.q)(function () {
            z.P(this)
        }, a));
        c.play()
    };
    z.rr = function (a, b, c, d) {
        "bottom" === d && (d = "b");
        var f = "";
        !1 !== c && (f = 'data-tip\x3d"t$' + (d || "t") + "$" + a[1] + '"');
        return ["\x3ca ", f, ' class\x3d"', b || "zm-item-tag", '" href\x3d"/topic/', a[1], '"\x3e', a[0], "\x3c/a\x3e"].join("")
    };
    z.sr = function (a) {
        return a ? a.replace(/^\s+/, "").replace(/\s+$/, "") : ""
    };
    var tr = function (a) {
        return a ? a.replace(/<[^>]+>/g, "") : ""
    };
    var ur = function () {
        return '\x3ca href\x3d"javascript:;" class\x3d"zu-edit-button" name\x3d"edit"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e'
    };
    z.vr = function (a, b) {
        z.Q(a, !0);
        z.Q(b, !1)
    };
    var wr = function (a, b, c) {
        var d;
        a && (b = (0, window.$)(a).data("animation") || new nr(a, [255, 255, 150], b || [255, 255, 255], c || 2E3), (0, window.$)(a).data("animation", b), 1 == b.N && b.stop(!0), d = a.style.backgroundColor, z.ld(b, "end", function () {
            z.rg(this.element, "background-color", d)
        }, !1, b), b.play())
    };
    z.xr = function (a, b, c) {
        a && (yr && window.document[zr] ? z.F(window.document, Ar, function f() {
            window.document[zr] || (wr(a, b, c), z.md(window.document, Ar, f))
        }) : wr(a, b, c))
    };
    var Br = function (a) {
        var b = 0, c = 0;
        do c = a.indexOf("?", c), -1 !== c && (b++, c += 1); while (-1 !== c);
        return b
    };
    var Cr = function (a, b, c) {
        b = z.yb(a.data, 1);
        if ("topic" === a.data[0]) {
            a = (b[2] ? '\x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' + b[2] + '"\x3e' : "") + '\x3cspan class\x3d"zu-autocomplete-row-name' + (b[3] ? "" : " zu-autocomplete-row-name-info") + '" title\x3d"' + b[0] + '"\x3e' + b[0] + "\x3c/span\x3e";
            var d = 5 < b.length && b[5];
            4 <= b.length && (a += '\x3cspan class\x3d"zg-gray-normal zu-autocomplete-row-description"\x3e', b[4] || d ? (d && (a += "又称 " + b[5]), b[4] && d && (a += "，"), b[4] && (a += b[4] + " 人关注")) : a += "\x26nbsp;", a += "\x3c/span\x3e");
            c.innerHTML = a
        } else "people" === a.data[0] ? c.innerHTML = '\x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' + b[2] + '"\x3e\x3cspan class\x3d"zu-autocomplete-row-name" title\x3d"' + b[0] + '"\x3e' + b[0] + '\x3c/span\x3e\x3cspan class\x3d"zg-gray-normal zu-autocomplete-row-description"\x3e' + (b[4] || "\x26nbsp;") + "\x3c/span\x3e" : "question" === a.data[0] ? c.innerHTML = b[0] + '\x3cspan class\x3d"zm-ac-gray"\x3e问题\x3c/span\x3e' : "plain_text" === a.data[0] ? (c.innerHTML = a.data[1], z.W.add(c, b[1])) : "sina" === a.data[0] && (c.innerHTML =
            b[0])
    };
    var Dr = function (a, b, c) {
        var d;
        b = z.yb(a.data, 1);
        if ("topic" === a.data[0]) {
            a = ["\x3ca ", ' style\x3d"display:block" href\x3d"/topic/' + b[1] + '"\x3e\x3cspan class\x3d"zm-item-tag"\x3e', b[0], "\x3c/span\x3e"].join("");
            d = 6 < b.length && b[6];
            if (b[5] || d) {
                a += '\x3cspan class\x3d"zm-ac-gray"\x3e';
                var f = [];
                d && f.push("又称 " + b[6]);
                (d = (0, window.parseInt)(b[5], 10)) && f.push(d + " 个精华问答");
                a += f.join("，");
                a += "\x3c/span\x3e"
            } else a += '\x3cspan class\x3d"zm-ac-gray" \x3e\x26nbsp;\x3c/span\x3e';
            c.innerHTML = a + "\x3c/a\x3e"
        } else "people" === a.data[0] ?
            c.innerHTML = '\x3ca href\x3d"/people/' + b[1] + '" title\x3d"' + b[0] + '" class\x3d"zm-ac-link zm-ac-link-people"\x3e\x3cimg class\x3d"zm-item-img-avatar zg-left" src\x3d"' + b[2] + '"\x3e\x3cspan class\x3d"zu-autocomplete-row-name" title\x3d"' + b[0] + '"\x3e' + b[0] + '\x3c/span\x3e\x3cspan class\x3d"zg-gray-normal  zu-autocomplete-row-description"\x3e' + (b[4] || "\x26nbsp;") + "\x3c/span\x3e\x3c/a\x3e" : "question" === a.data[0] ? (d = (0, window.parseInt)(b[3], 10), c.innerHTML = (b[4] ? '\x3ca class\x3d"zg-star" data-tip\x3d"s$b$优质问答" href\x3d"/question/' +
                b[2] + '"\x3e\x3c/a\x3e' : "") + ['\x3ca class\x3d"zm-ac-link"', 'href\x3d"/question/' + b[2] + '"\x3e', b[0]].join("") + ('\x3cspan class\x3d"zm-ac-gray"\x3e' + (d ? d + " 个回答" : "还没有回答") + "\x3c/span\x3e\x3c/a\x3e")) : "search_link" === a.data[0] ? (c.innerHTML = '\x3ca href\x3d"/search?q\x3d' + b[0] + '\x26type\x3dquestion"\x3e查看全部搜索结果\x3ci class\x3d"zg-icon arrow"\x3e\x3c/i\x3e\x3c/a\x3e', z.W.add(c, "zu-autocomplete-row-search-link")) : "plain_text" === a.data[0] ? c.innerHTML = b[0] : "sina" === a.data[0] && (c.innerHTML = ['\x3ca href\x3d"javascript:;" title\x3d"' +
            b[0] + '"\x3e', '\x3cimg class\x3d"zm-item-img-avatar" src\x3d"' + b[2] + '" /\x3e', b[0], "\x3c/a\x3e"].join(""));
        (0, window.$)("a", c).click(function (a) {
            a.preventDefault()
        })
    };
    z.Er = function (a, b, c) {
        for (c = c || "A"; null != b && b !== a;) {
            if (b.tagName === c) return b;
            b = b.parentNode
        }
        return null
    };
    z.Fr = function (a) {
        this.tR = a;
        this.data = new z.Rd
    };
    var Gr = function (a) {
        return (a = z.sr(a)) ? a.length : 0
    };
    var Hr = function (a, b, c, d) {
        window._gaq || (window._gaq = []);
        c && (c = "" + c);
        d && (d = (0, window.parseInt)(d, 10));
        window._gaq.push(["_trackEvent", a, b, c, d]);
        z.Mi && Ir("trackEvent(deprecated)", z.vb(arguments))
    };
    var Jr = function (a) {
        return (a = String(a).toLowerCase()) ? z.pb([".jpg", ".jpeg", ".png"], function (b) {
            return z.qp(a, b)
        }) : !1
    };
    var Kr = function (a, b) {
        function c(b) {
            return a.getElementsByTagName(b).length
        }

        var d = ["img", "embed"];
        return b && z.pb(d, c) ? !1 : !z.hp(z.Lr, z.ab, z.of)(a)
    };
    z.Mr = function (a, b) {
        var c = window.$.extend({all: !1}, z.Mr.defaults, b || {}), d = (0, window.$)(a).get(0).getBoundingClientRect();
        return !c.all && (d.bottom < c.paddingTop || d.bottom > (0, window.$)(window).height()) || c.all && (d.top < c.paddingTop || d.bottom > (0, window.$)(window).height()) ? !1 : !0
    };
    z.Nr = function (a, b) {
        if (a) {
            "number" === window.$.type(b) && (b = {offsetTop: b});
            var c = window.$.extend({hC: z.Mr}, Or, b || {});
            if (!c.hC(a, c)) {
                var d = (0, window.$)(a).offset().top - c.paddingTop - c.offsetTop || 0;
                c.aw ? (0, window.$)(window.document.documentElement).add(window.document.body).animate({scrollTop: d}) : (0, window.$)(window).scrollTop(d)
            }
        }
    };
    var Pr = function (a) {
        (0, window.$)(a.target.M.h).off("click.disable-a").on("click.disable-a", "a", function (a) {
            a.preventDefault()
        })
    };
    z.Qr = function (a, b) {
        var c = null;
        return function () {
            var d = this, f = arguments;
            (0, window.clearTimeout)(c);
            c = (0, window.setTimeout)(function () {
                b.apply(d, f)
            }, a)
        }
    };
    var Rr = function (a, b) {
        var c = a.getBoundingClientRect(), d = z.Pg(window.document.body).top;
        if (0 < c.top - d) b && b(); else {
            var f = a.offsetHeight, g = Eo(window.document).y, h = z.Oe().height;
            b && b();
            var k = a.offsetHeight;
            window.scrollTo(0, g + (c.bottom < h ? k - f : c.top - d))
        }
    };
    z.Sr = function (a) {
        z.G.call(this);
        this.nH = null;
        this.pd = a;
        this.v().g(this.pd, ["input", "propertychange"], this.FK);
        Tr(this, !0);
        z.W.add(this.pd, "zu-seamless-input-origin-element")
    };
    var Tr = function (a, b) {
        Ur(a);
        if (a.gg) {
            var c = a.pd.value;
            if (b || a.nH !== c) a.nH = c, a.gg.value = c, c = z.Sg(a.pd), a.pd.style.height = z.Ag(a.gg.scrollHeight + c.top + c.bottom, !0), a.dispatchEvent("change")
        }
    };
    var Ur = function (a) {
        if (!a.gg && 0 !== z.fo(a.pd).width) {
            var b = z.O("div", {style: "overflow:hiddenposition:relativeheight:0"}, a.gg = z.O("textarea", {
                rows: 1,
                className: "zu-seamless-input-mock-element"
            }));
            window.document.body.appendChild(b);
            z.Db("paddingTop paddingBottom fontFamily fontSize fontWeight fontStyle letterSpacing textTransform wordSpacing textIndent lineHeight width white-space".split(" "), function (a) {
                this.gg.style[a] = z.vg(this.pd, a)
            }, a)
        }
    };
    var Vr = function (a) {
        this.ew = a
    };
    var Wr = function (a, b) {
        a && (a.tabIndex = b ? 0 : -1)
    };
    var Xr = function (a, b, c) {
        if (c) for (var d = c.firstChild, f; d && d.parentNode == c;) {
            f = d.nextSibling;
            if (1 == d.nodeType) {
                var g = a.Wn(d);
                g && (g.h = d, b.isEnabled() || g.Wa(!1), b.L(g), g.w(d))
            } else d.nodeValue && "" != (0, z.ab)(d.nodeValue) || c.removeChild(d);
            d = f
        }
    };
    z.Yr = function (a, b, c) {
        z.R.call(this, c);
        this.M = b || Vr.ba();
        this.Nb = a || this.M.AF()
    };
    var Zr = function (a, b) {
        var c = a.v(), d = a.Yb();
        b ? c.g(d, "focus", a.ee).g(d, "blur", a.Xc).g(a.ks(), "key", a.Zb) : c.qa(d, "focus", a.ee).qa(d, "blur", a.Xc).qa(a.ks(), "key", a.Zb)
    };
    var $r = function (a, b) {
        var c = b.m(), c = c.id || (c.id = b.de());
        a.Eg || (a.Eg = {});
        a.Eg[c] = b
    };
    var as = function (a) {
        return z.ah(a, a.Ta)
    };
    z.bs = function (a) {
        cs(a, function (a, c) {
            return (a + 1) % c
        }, z.$g(a) - 1)
    };
    var ds = function (a) {
        cs(a, function (a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, 0)
    };
    var es = function (a) {
        cs(a, function (a, c) {
            return (a + 1) % c
        }, a.Ta)
    };
    var fs = function (a) {
        cs(a, function (a, c) {
            a--;
            return 0 > a ? c - 1 : a
        }, a.Ta)
    };
    var cs = function (a, b, c) {
        c = 0 > c ? Nn(a, a.jc) : c;
        var d = z.$g(a);
        c = b.call(a, c, d);
        for (var f = 0; f <= d;) {
            var g = z.ah(a, c);
            if (g && a.FD(g)) {
                a.xb(c);
                break
            }
            f++;
            c = b.call(a, c, d)
        }
    };
    var gs = function () {
        z.R.call(this);
        this.kv = []
    };
    z.hs = function (a, b) {
        this.Sa = a || [];
        this.eC = !b
    };
    var is = function (a, b, c) {
        var d = [];
        if ("" != a) {
            a = z.Wa(a);
            a = new RegExp("(^|\\W+)" + a, "i");
            for (var f = 0; f < c.length && d.length < b; f++) {
                var g = c[f];
                String(g).match(a) && d.push(g)
            }
        }
        return d
    };
    var js = function (a, b, c) {
        for (var d = [], f = 0; f < c.length; f++) {
            var g = c[f], h = a.toLowerCase(), k = String(g).toLowerCase(), m = 0;
            if (-1 != k.indexOf(h)) m = (0, window.parseInt)((k.indexOf(h) / 4).toString(), 10); else for (var n = h.split(""), r = -1, w = 10, H = 0, K; K = n[H]; H++) K = k.indexOf(K), K > r ? (r = K - r - 1, r > w - 5 && (r = w - 5), m += r, r = K) : (m += w, w += 5);
            m < 6 * h.length && d.push({ZV: g, CJ: m, index: f})
        }
        d.sort(function (a, b) {
            var c = a.CJ - b.CJ;
            return 0 != c ? c : a.index - b.index
        });
        a = [];
        for (H = 0; H < b && H < d.length; H++) a.push(d[H].ZV);
        return a
    };
    z.ks = function (a, b, c) {
        z.G.call(this);
        this.Kd = a;
        this.Af = c;
        this.M = b;
        z.F(b, [ls, z.ms, ns, z.os], this.handleEvent, !1, this);
        this.Wb = null;
        this.Sa = [];
        this.Vg = -1;
        this.Uc = 0;
        this.Xd = this.xc = null;
        this.JG = {}
    };
    z.ps = function (a) {
        for (var b = a.Uc + a.Sa.length - 1, c = a.Vg, d = 0; d < a.Sa.length; d++) {
            if (c >= a.Uc && c < b) c++; else if (-1 == c) c = a.Uc; else if (a.aD && c == b) {
                a.ag(-1);
                break
            } else if (a.eL && c == b) c = a.Uc; else break;
            if (a.ag(c)) break
        }
    };
    var qs = function (a) {
        for (var b = a.Uc + a.Sa.length - 1, c = a.Vg, d = 0; d < a.Sa.length; d++) {
            if (c > a.Uc) c--; else if (a.aD && c == a.Uc) {
                a.ag(-1);
                break
            } else if (!a.eL || -1 != c && c != a.Uc) break; else c = b;
            if (a.ag(c)) break
        }
    };
    z.rs = function (a) {
        a.zG() || window.setTimeout((0, z.q)(a.zG, a), 10)
    };
    var ss = function (a, b) {
        var c = b - a.Uc;
        return 0 > c || c >= a.Sa.length ? -1 : c
    };
    z.ts = function (a) {
        var b = 0, c = 0;
        if (us(a)) b = a.selectionStart, c = -1; else if (z.C) {
            var d = vs(a), f = d[0], d = d[1];
            if (f.inRange(d)) {
                f.setEndPoint("EndToStart", d);
                if ("textarea" == a.type) {
                    d.duplicate();
                    b = a = f.text;
                    for (c = !1; !c;) 0 == f.compareEndPoints("StartToEnd", f) ? c = !0 : (f.moveEnd("character", -1), f.text == a ? b += "\r\n" : c = !0);
                    f = [b.length, -1];
                    return f
                }
                b = f.text.length;
                c = -1
            }
        }
        return [b, c]
    };
    z.ws = function (a, b) {
        if (us(a)) a.selectionStart = b, a.selectionEnd = b; else if (z.C) {
            b = xs(a, b);
            var c = a.createTextRange();
            c.collapse(!0);
            c.move("character", b);
            c.select()
        }
    };
    var vs = function (a) {
        var b = a.ownerDocument || a.document, c = b.selection.createRange();
        "textarea" == a.type ? (b = b.body.createTextRange(), b.moveToElementText(a)) : b = a.createTextRange();
        return [b, c]
    };
    var xs = function (a, b) {
        "textarea" == a.type && (b = z.La(a.value.substring(0, b)).length);
        return b
    };
    var us = function (a) {
        try {
            return "number" == typeof a.selectionStart
        } catch (b) {
            return !1
        }
    };
    z.ys = function (a, b, c, d) {
        z.xc.call(this);
        d = d || 150;
        this.dm = null != c ? c : !0;
        this.Hp = a || ",;";
        this.bO = this.Hp.substring(0, 1);
        a = this.dm ? "[\\s" + this.Hp + "]+" : "[\\s]+";
        this.yK = new RegExp("^" + a + "|" + a + "$", "g");
        this.AV = new RegExp("\\s*[" + this.Hp + "]$");
        this.tH = b || "";
        this.sU = !1;
        this.rU = this.dm;
        this.ma = 0 < d ? new z.td(d) : null;
        this.dc = new z.xd(this);
        this.Kv = new z.xd(this);
        this.vb = new Kp;
        this.kH = -1
    };
    var zs = function (a, b, c) {
        if (z.ka(c) ? c : a.dm) {
            c = As(a, a.X(), z.ts(a.eb)[0]);
            var d = Bs(a, a.X());
            a.AV.test(b) || (b = z.kp(b) + a.bO);
            a.ZW && (0 == c || z.pp(d[c - 1]) || (b = " " + b), c == d.length - 1 && (b += " "));
            if (b != d[c]) {
                d[c] = b;
                b = a.eb;
                (z.B || z.C && z.E("9")) && b.blur();
                b.value = d.join("");
                for (var f = 0, g = 0; g <= c; g++) f += d[g].length;
                b.focus();
                c = f;
                d = a.eb;
                b = c;
                us(d) ? d.selectionStart = b : z.C && (f = vs(d), g = f[0], g.inRange(f[1]) && (b = xs(d, b), g.collapse(!0), g.move("character", b), g.select()));
                d = a.eb;
                us(d) ? d.selectionEnd = c : z.C && (f = vs(d), b = f[1], f[0].inRange(b) &&
                (c = xs(d, c), d = xs(d, z.ts(d)[0]), b.collapse(!0), b.moveEnd("character", c - d), b.select()))
            }
        } else a.Ea(b);
        a.SA = !0
    };
    var Cs = function (a, b) {
        var c = a.dm && b.charCode && -1 != a.Hp.indexOf(String.fromCharCode(b.charCode));
        a.CV && c && a.update();
        return a.BV && c && a.aa.Fi() ? (b.preventDefault(), !0) : !1
    };
    var Ds = function (a) {
        a.vb.attach(a.eb);
        a.dc.g(a.vb, "key", a.jp);
        a.dc.g(a.eb, "mousedown", a.sI);
        z.C && a.dc.g(a.eb, "keypress", a.pI)
    };
    var Es = function (a, b) {
        a.Kv.removeAll();
        a.aa && z.rs(a.aa);
        b != a.eb && (a.eb = b, a.ma && (a.ma.start(), a.dc.g(a.ma, "tick", a.pp)), a.Oo = a.X(), Ds(a))
    };
    var Fs = function (a) {
        a.Si && (a.Si = !1, a.dc.qa(a.eb, "keypress", a.qI), a.dc.qa(a.eb, "keyup", a.rI))
    };
    var As = function (a, b, c) {
        a = Bs(a, b);
        if (c == b.length) return a.length - 1;
        for (var d = b = 0, f = 0; d < a.length && f <= c; d++) f += a[d].length, b = d;
        return b
    };
    var Bs = function (a, b) {
        if (!a.dm) return [b];
        for (var c = String(b).split(""), d = [], f = [], g = 0, h = !1; g < c.length; g++) a.tH && -1 != a.tH.indexOf(c[g]) ? (a.RO && !h && (d.push(f.join("")), f.length = 0), f.push(c[g]), h = !h) : h || -1 == a.Hp.indexOf(c[g]) ? f.push(c[g]) : (f.push(c[g]), d.push(f.join("")), f.length = 0);
        d.push(f.join(""));
        return d
    };
    z.Gs = function (a, b, c) {
        z.xc.call(this);
        this.$B = a;
        this.eC = !b;
        this.ea = new z.de(c)
    };
    z.Hs = function (a, b, c, d, f, g, h, k, m) {
        var n = Is(c), r = z.Ao(a), w = Do(a);
        w && r.cz(new z.qg(w.left, w.top, w.right - w.left, w.bottom - w.top));
        var w = z.J(a), H = z.J(c);
        if (w.ua() != H.ua()) {
            var K = w.ua().body;
            var H = H.Va(), M = new z.Ge(0, 0), ca = z.Re(z.Je(K));
            if (z.Oc(ca, "parent")) {
                var Xa = K;
                do {
                    var cb = ca == H ? z.Wn(Xa) : z.Eg(Xa);
                    M.x += cb.x;
                    M.y += cb.y
                } while (ca && ca != H && ca != ca.parent && (Xa = ca.frameElement) && (ca = ca.parent))
            }
            K = jo(M, z.Wn(K));
            !z.C || 9 <= z.Tg || Qn(w) || (K = jo(K, z.vf(w)));
            r.left += K.x;
            r.top += K.y
        }
        a = Js(a, b);
        r = new z.Ge(a & 2 ? r.left + r.width :
            r.left, a & 1 ? r.top + r.height : r.top);
        r = jo(r, n);
        f && (r.x += (a & 2 ? -1 : 1) * f.x, r.y += (a & 1 ? -1 : 1) * f.y);
        var Ha;
        if (h) if (m) Ha = m; else if (Ha = Do(c)) Ha.top -= n.y, Ha.right -= n.x, Ha.bottom -= n.y, Ha.left -= n.x;
        return Ks(r, c, d, g, Ha, h, k)
    };
    var Is = function (a) {
        var b;
        if (a = a.offsetParent) {
            var c = "HTML" == a.tagName || "BODY" == a.tagName;
            c && "static" == z.yg(a) || (b = z.Wn(a), c || (c = (c = z.Mg(a)) && z.B ? -a.scrollLeft : !c || z.Jl && z.E("8") || "visible" == z.xg(a, "overflowX") ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft, b = jo(b, new z.Ge(c, a.scrollTop))))
        }
        return b || new z.Ge
    };
    var Ks = function (a, b, c, d, f, g, h) {
        a = a.clone();
        var k = Js(b, c);
        c = z.Hg(b);
        h = h ? h.clone() : c.clone();
        a = a.clone();
        h = h.clone();
        var m = 0;
        if (d || 0 != k) k & 2 ? a.x -= h.width + (d ? d.right : 0) : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom : 0) : d && (a.y += d.top);
        if (g) {
            if (f) {
                d = a;
                k = h;
                m = 0;
                65 == (g & 65) && (d.x < f.left || d.x >= f.right) && (g &= -2);
                132 == (g & 132) && (d.y < f.top || d.y >= f.bottom) && (g &= -5);
                d.x < f.left && g & 1 && (d.x = f.left, m |= 1);
                if (g & 16) {
                    var n = d.x;
                    d.x < f.left && (d.x = f.left, m |= 4);
                    d.x + k.width > f.right && (k.width = Math.min(f.right - d.x, n + k.width - f.left),
                        k.width = Math.max(k.width, 0), m |= 4)
                }
                d.x + k.width > f.right && g & 1 && (d.x = Math.max(f.right - k.width, f.left), m |= 1);
                g & 2 && (m = m | (d.x < f.left ? 16 : 0) | (d.x + k.width > f.right ? 32 : 0));
                d.y < f.top && g & 4 && (d.y = f.top, m |= 2);
                g & 32 && (n = d.y, d.y < f.top && (d.y = f.top, m |= 8), d.y + k.height > f.bottom && (k.height = Math.min(f.bottom - d.y, n + k.height - f.top), k.height = Math.max(k.height, 0), m |= 8));
                d.y + k.height > f.bottom && g & 4 && (d.y = Math.max(f.bottom - k.height, f.top), m |= 2);
                g & 8 && (m = m | (d.y < f.top ? 64 : 0) | (d.y + k.height > f.bottom ? 128 : 0));
                f = m
            } else f = 256;
            m = f
        }
        g = new z.qg(0,
            0, 0, 0);
        g.left = a.x;
        g.top = a.y;
        g.width = h.width;
        g.height = h.height;
        f = m;
        if (f & 496) return f;
        z.zg(b, new z.Ge(g.left, g.top));
        h = g.Rg();
        z.Ro(c, h) || (c = h, a = Qn(z.J(z.Je(b))), !z.C || z.E("10") || a && z.E("8") ? (b = b.style, z.B ? b.MozBoxSizing = "border-box" : z.D ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(c.width, 0) + "px", b.height = Math.max(c.height, 0) + "px") : (h = b.style, a ? (a = z.Pg(b), b = z.Sg(b), h.pixelWidth = c.width - b.left - a.left - a.right - b.right, h.pixelHeight = c.height - b.top - a.top - a.bottom - b.bottom) : (h.pixelWidth =
            c.width, h.pixelHeight = c.height)));
        return f
    };
    var Js = function (a, b) {
        return (b & 4 && z.Mg(a) ? b ^ 2 : b) & -5
    };
    z.Ls = function (a, b, c, d) {
        z.G.call(this);
        this.Ra = a || window.document.body;
        this.da = z.J(this.Ra);
        this.Bp = !a;
        this.h = null;
        this.Wb = "";
        this.Sa = [];
        this.zf = [];
        this.aK = this.Sl = -1;
        this.sb = !1;
        this.className = "ac-renderer";
        this.ph = "ac-row";
        this.pH = "active";
        this.Lv = "ac-active";
        this.JQ = "ac-highlighted";
        this.ll = b || null;
        this.NK = null != d ? d : !0;
        this.dS = !0;
        this.oo = !1;
        this.cV = !!c;
        this.Wu = !1;
        this.Vo = 0;
        this.WJ = !1
    };
    var Ms = function (a, b) {
        a.xc && (z.cj(a.xc, "haspopup", b), z.cj(a.h, "expanded", b), b ? z.cj(a.xc, "owns", a.h.id) : (a.xc.removeAttribute("aria-owns"), wo(a.xc, null)))
    };
    var Ns = function (a, b) {
        var c = 0 <= b && b < a.Sa.length ? a.Sa[b] : void 0, d = 0 <= b && b < a.zf.length ? a.zf[b] : void 0;
        a.dispatchEvent({
            type: "rowhilite",
            TY: d,
            Di: c ? c.data : null
        }) && (0 <= a.Sl && z.kj(a.zf[a.Sl], [a.Lv, a.pH]), a.Sl = b, d && (z.ij(d, [a.Lv, a.pH]), a.xc && wo(a.xc, d), Co(d, a.h)))
    };
    var Os = function (a) {
        if (!a.h) {
            var b = a.da.B("DIV", {style: "display:none"});
            a.WJ && (b.style.overflowY = "auto");
            a.h = b;
            z.ij(b, (0, z.ab)(a.className).split(" "));
            z.bj(b, "listbox");
            b.id = z.Wg(z.Vg.ba());
            a.da.appendChild(a.Ra, b);
            z.F(b, "click", a.Hl, !1, a);
            z.F(b, "mousedown", a.Il, !1, a);
            z.F(b, "mouseover", a.XF, !1, a)
        }
    };
    var Ps = function (a) {
        Os(a);
        a.Wu && (a.h.style.visibility = "hidden");
        a.$W && (a.h.style.minWidth = a.$W.clientWidth + "px");
        a.zf.length = 0;
        a.da.zp(a.h);
        if (a.ll && a.ll.render) a.ll.render(a, a.h, a.Sa, a.Wb); else {
            var b = null;
            z.y(a.Sa, function (a) {
                a = Qs(this, a, this.Wb);
                this.Wu ? this.h.insertBefore(a, b) : this.da.appendChild(this.h, a);
                b = a
            }, a)
        }
        0 == a.Sa.length ? a.Cc() : (a.show(), a.ha(), z.zo(a.h, !0))
    };
    var Rs = function (a, b, c) {
        if (a.oo || !a.$K) if (3 == b.nodeType) {
            var d = null;
            z.na(c) && 1 < c.length && !a.oo && (d = z.yb(c, 1));
            c = Ss(a, c);
            if (0 != c.length) {
                var f = b.nodeValue, g = a.dS ? new RegExp("\\b(?:" + c + ")", "gi") : new RegExp(c, "gi");
                c = [];
                for (var h = 0, k = g.exec(f), m = 0; k;) m++, c.push(f.substring(h, k.index)), c.push(f.substring(k.index, g.lastIndex)), h = g.lastIndex, k = g.exec(f);
                c.push(f.substring(h));
                if (1 < c.length) {
                    d = a.oo ? m : 1;
                    for (f = 0; f < d; f++) g = 2 * f, b.nodeValue = c[g], h = a.da.createElement("B"), h.className = a.JQ, a.da.appendChild(h, a.da.createTextNode(c[g +
                    1])), h = b.parentNode.insertBefore(h, b.nextSibling), b.parentNode.insertBefore(a.da.createTextNode(""), h.nextSibling), b = h.nextSibling;
                    c = z.yb(c, 2 * d);
                    b.nodeValue = c.join("");
                    a.$K = !0
                } else d && Rs(a, b, d)
            }
        } else for (b = b.firstChild; b;) d = b.nextSibling, Rs(a, b, c), b = d
    };
    var Ss = function (a, b) {
        var c = "";
        if (!b) return c;
        z.na(b) && (b = z.mb(b, function (a) {
            return !z.pp(null == a ? "" : String(a))
        }));
        a.oo ? z.na(b) ? c = z.nb(b, z.Wa).join("|") : (c = b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, ""), c = z.Wa(c), c = c.replace(/ /g, "|")) : z.na(b) ? c = 0 < b.length ? z.Wa(b[0]) : "" : /^\W/.test(b) || (c = z.Wa(b));
        return c
    };
    var Qs = function (a, b, c) {
        var d = a.da.B("DIV", {className: a.ph, id: z.Wg(z.Vg.ba())});
        z.bj(d, "option");
        a.ll && a.ll.td ? a.ll.td(b, c, d) : a.nJ(b, c, d);
        c && a.NK && (a.$K = !1, Rs(a, d, c));
        z.hj(d, a.ph);
        a.zf.push(d);
        return d
    };
    var Ts = function (a, b) {
        for (; b && b != a.h && !z.gj(b, a.ph);) b = b.parentNode;
        return b ? z.lb(a.zf, b) : -1
    };
    z.Us = function (a, b, c, d) {
        this.Kd = a = new z.Gs(a, !d);
        d = new z.Ls;
        c = new z.ys(null, null, !!c, 300);
        z.ks.call(this, a, d, c);
        c.aa = this;
        c.Uk(b)
    };
    z.Vs = function (a, b) {
        var c = this, d = {};
        z.Mb(d, this.defaults, b || {});
        this.J = d;
        var f = d.td ? {td: (0, z.q)(d.td, c)} : null;
        f && (f.render = d.render ? (0, z.q)(d.render, c) : null);
        this.M = f = new z.Ls(d.vk, f);
        var g = "string" === typeof d.source ? z.Gs : z.hs, h = new g(d.source, !d.SW);
        this.Kd = h;
        var k = d.az;
        k || (k = new z.ys(d.separator, d.dO, !!d.multiple, d.delay), k.Gi = function (a, b) {
            var f;
            z.sa(d.select) && (f = d.select.call(c, a, c.M.zf[c.M.Sl]));
            zs(this, z.ka(f) ? f : a.label || a.toString(), b);
            return !1
        });
        z.ks.call(this, h, f, k);
        k.aa = this;
        k.Uk(a);
        a.setAttribute("autocomplete",
            "off");
        h.Ci = function (a, b, f) {
            var h = f;
            z.sa(d.format) && (h = function (a, b) {
                var g = d.format.call(c, b, a);
                z.sa(d.filter) && (g = d.filter.call(c, g, a));
                f(a, g)
            });
            return g.prototype.Ci.call(this, a, b, h)
        };
        f.nJ = function (a, b, c) {
            a = a.data;
            c.innerHTML = a.pW ? a.pW() : a.label || a.toString()
        };
        this.xc = a;
        d.Le && (this.am = d.Le);
        d.placeholder && (this.kc = new z.vk(a, d.placeholder));
        this.addEventListener("suggestionsupdate", function () {
            this.dispatchEvent(this.ub() ? "show" : "hide")
        })
    };
    var Ws = function (a, b, c, d) {
        z.ys.call(this, a, b, c, d)
    };
    z.Xs = function (a, b) {
        z.R.call(this, b);
        this.Mb = a || ""
    };
    var Ys = function () {
        null != Zs || (Zs = "placeholder" in window.document.createElement("INPUT"));
        return Zs
    };
    var $s = function (a) {
        !a.NO && a.T && a.m().form && (a.T.g(a.m().form, "submit", a.LP), a.NO = !0)
    };
    var at = function (a) {
        return !!a.m() && "" != a.m().value && a.m().value != a.Mb
    };
    var bt = function (a, b) {
        return window.$.post("/node/MemberFollowBaseV2", {
            method: b ? "follow_member" : "unfollow_member",
            params: {hash_id: a}
        })
    };
    var ct = function (a, b) {
        return window.$.post("/node/QuestionFollowBaseV2", {
            method: b ? "follow_question" : "unfollow_question",
            params: {question_id: a}
        })
    };
    var dt = function (a, b) {
        return window.$.post(b ? "/collection/follow" : "/collection/unfollow", {favlist_id: a})
    };
    var et = function (a, b) {
        return window.$.post("/node/TopicFollowBaseV2", {
            method: b ? "follow_topic" : "unfollow_topic",
            params: {topic_id: a}
        })
    };
    z.ft = function (a, b) {
        return window.$.get("/" + a + "/" + b + "/sharetext")
    };
    var gt = function (a, b, c, d) {
        z.ys.call(this, a, b, c, d)
    };
    var ht = function (a, b) {
        z.Gs.call(this, a, b);
        this.RA = null;
        this.iF = !0
    };
    var it = function (a, b, c, d) {
        this.OH = 0;
        z.ys.call(this, a, b, !!c, d || 300)
    };
    var jt = function (a, b, c, d) {
        it.call(this, a, b, !!c, d)
    };
    z.kt = function (a, b, c, d, f, g, h, k, m) {
        var n = {};
        "question_suggest" === g ? (n.render = (0, z.q)(this.QU, this), n.td = Dr) : "topic_question" === g ? (n.render = (0, z.q)(this.SU, this), n.td = Cr) : n.td = g ? Cr : Dr;
        g = new z.Ls(f, n);
        f && (g.Bp = !1);
        g.oo = !0;
        this.M = g;
        this.Kd = new ht(a, !d);
        a = m ? m : new it(null, null, c);
        h && h.length && new z.vk(b, h[0]);
        a.EK = !1;
        z.ks.call(this, this.Kd, g, a);
        a.aa = this;
        a.ar(b);
        k && (a.OH = k)
    };
    z.lt = function (a, b, c) {
        z.G.call(this);
        this.Fe = c || "搜索话题";
        this.pa = b;
        this.data = a || [];
        this.status = mt;
        this.MU = "/topic/unbind";
        this.pM = "/topic/bind";
        this.isEnabled = !0;
        this.Ns = '\x3ca class\x3d"zm-tag-editor-tip-link" href\x3d"#" name\x3d"edit"\x3e帮忙给这个问题选个话题吧，好让别人来回答\x3c/a\x3e\x3ca name\x3d"edit" class\x3d"zu-edit-button" href\x3d"#"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e添加\x3c/a\x3e';
        this.Le = 10;
        this.Et = !1;
        this.ut = window.Infinity;
        this.yt = 0;
        this.UC = !1
    };
    var nt = function (a) {
        a = z.Qo("zm-item-tag", a.sg);
        return z.nb(a, function (a) {
            var c = [(0, z.ab)(a.innerHTML), a.getAttribute("data-token"), null, a.getAttribute("data-topicid")];
            c.EW = !!a.getAttribute("data-uneditable");
            return c
        })
    };
    var ot = function (a) {
        if (a.data.length) {
            var b = z.nb(a.data, function (a) {
                return z.rr(a, "", null, "b")
            }, a);
            a.isEnabled && b.push(ur());
            a.sg.innerHTML = b.join("")
        } else a.isEnabled && (a.sg.innerHTML = a.Ns)
    };
    var pt = function (a, b) {
        return z.mb(b, function (a) {
            return "topic" !== a[0] ? !1 : !this.zx(a)
        }, a)
    };
    var qt = function (a, b, c) {
        function d() {
            return z.qb(b, function (a) {
                return "topic" === a[0] && a[4] && a[1] === c
            })
        }

        function f() {
            return z.qb(b, function (a) {
                return 3 >= a.length && a[1] === z.Ka("创建 %s 话题", a[2])
            })
        }

        var g = (0, z.q)(function () {
            return z.qb(this.data, function (a) {
                return a[0] === c
            })
        }, a);
        z.T.Ds ? !a.UC || b.length && (f() || d()) || g() || b.push(["topic", z.Ka("创建 %s 话题", c), c]) : (a = f()) && (1 < b.length ? z.tb(b, a) : b = [["plain_text", '\x3cspan class\x3d"zu-autocomplete-row-name zu-autocomplete-row-name-info"\x3e没有找到话题：' + a[2] + '\x3c/span\x3e\x3cspan class\x3d"zg-gray-normal zu-autocomplete-row-description"\x3e请使用已经创建的话题\x3c/span\x3e']]);
        return b
    };
    var rt = function (a) {
        var b = a.data.length >= a.ut;
        a.ef && z.Q(a.ef, !b);
        a.vt && z.Q(a.vt, b)
    };
    var st = function (a) {
        var b = [];
        a.data = z.mb(a.data, function (a) {
            if (z.A(b, a[1])) return !1;
            b.push(a[1]);
            return !0
        })
    };
    z.tt = function (a, b, c) {
        z.lt.call(this, a, 0, c ? "添加父话题" : "添加子话题");
        this.jz = c;
        this.Gf = b;
        this.Ns = "";
        this.mJ = "/topic/parent/remove"
    };
    var ut = function (a) {
        z.lt.call(this);
        this.Ns = "";
        this.Fe = a || "";
        this.ut = this.Le = 5;
        this.Iq = (0, window.$)("#zh-question-suggest-title-content")
    };
    var vt = function (a) {
        var b;
        b = a.$p ? z.mb(a.$p, function (a) {
            return !this.zx(a)
        }, a) : [];
        a.Kq.show();
        b && 0 !== b.length || a.Kq.hide();
        var c = "";
        b = z.nb(b, function (a) {
            return "\x3ca href\x3d'javascript:;' name\x3d'add' data-id\x3d'" + a[4] + "' data-text\x3d'" + a[1] + "' class\x3d'zg-r3px zm-item-tag'\x3e\x3cspan\x3e" + a[1] + "\x3c/span\x3e\x3c/a\x3e"
        });
        c += b.join("");
        a.zL.html(c);
        a.Av.hide()
    };
    z.wt = function (a) {
        z.lt.call(this, a, 0);
        this.Ns = "";
        this.yD = "/topic/ignore"
    };
    var xt = function () {
        z.xc.call(this)
    };
    z.yt = function (a) {
        z.xc.call(this);
        this.$J = z.jp();
        this.XE = z.jp();
        this.QA = a.$g();
        this.da = z.J(a.ua());
        a.cq(this.da.B("SPAN", {id: this.$J}), this.da.B("SPAN", {id: this.XE}))
    };
    z.zt = function (a, b) {
        return a.da.m(b ? a.$J : a.XE)
    };
    z.At = function (a, b, c, d, f) {
        this.Jc = !!b;
        this.node = null;
        this.Ub = 0;
        this.xk = !1;
        this.xr = !c;
        a && this.setPosition(a, d);
        this.depth = void 0 != f ? f : this.Ub || 0;
        this.Jc && (this.depth *= -1)
    };
    var Bt = function () {
    };
    var Ct = function (a) {
        if (a.getSelection) return a.getSelection();
        a = a.document;
        var b = a.selection;
        if (b) {
            try {
                var c = b.createRange();
                if (c.parentElement) {
                    if (c.parentElement().document != a) return null
                } else if (!c.length || c.item(0).document != a) return null
            } catch (d) {
                return null
            }
            return b
        }
        return null
    };
    z.Dt = function (a) {
        for (var b = [], c = 0, d = a.Fj(); c < d; c++) b.push(a.Be(c));
        return b
    };
    z.Et = function (a) {
        return a.$g() ? a.la() : a.Z()
    };
    z.Ft = function (a) {
        return a.$g() ? a.La() : a.va()
    };
    z.Gt = function (a) {
        return a.$g() ? a.Z() : a.la()
    };
    z.Ht = function (a) {
        return a.$g() ? a.va() : a.La()
    };
    var It = function (a, b) {
        z.At.call(this, a, b, !0)
    };
    var Jt = function () {
    };
    z.Kt = function (a, b, c, d, f) {
        this.ta = this.xa = null;
        this.Ba = this.Ca = 0;
        var g;
        a && (this.xa = a, this.Ca = b, this.ta = c, this.Ba = d, 1 == a.nodeType && "BR" != a.tagName && (a = a.childNodes, (b = a[b]) ? (this.xa = b, this.Ca = 0) : (a.length && (this.xa = z.kb(a)), g = !0)), 1 == c.nodeType && ((this.ta = c.childNodes[d]) ? this.Ba = 0 : this.ta = c));
        z.At.call(this, f ? this.ta : this.xa, f, !0);
        if (g) try {
            this.next()
        } catch (h) {
            if (h != z.Od) throw h;
        }
    };
    var Lt = function (a, b) {
        null != a && this.append.apply(this, arguments)
    };
    var Mt = function () {
    };
    var Nt = function (a, b) {
        var c = a.O.getClientRects();
        return c.length ? (c = b ? c[0] : z.kb(c), new z.Ge(b ? c.left : c.right, b ? c.top : c.bottom)) : null
    };
    var Ot = function (a) {
        this.O = a
    };
    var Pt = function (a) {
        var b = z.Je(a).createRange();
        if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length); else if (Qt(a)) {
            for (var c, d = a; (c = d.firstChild) && Qt(c);) d = c;
            b.setStart(d, 0);
            for (d = a; (c = d.lastChild) && Qt(c);) d = c;
            b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
        } else c = a.parentNode, a = z.lb(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
        return b
    };
    var Rt = function (a, b, c, d) {
        var f = z.Je(a).createRange();
        f.setStart(a, b);
        f.setEnd(c, d);
        return f
    };
    var St = function (a) {
        this.O = a
    };
    z.Tt = function (a, b) {
        this.ta = this.xa = this.mg = null;
        this.Ba = this.Ca = -1;
        this.O = a;
        this.Or = b
    };
    var Ut = function (a) {
        var b = z.Je(a).body.createTextRange();
        if (1 == a.nodeType) b.moveToElementText(a), Qt(a) && !a.childNodes.length && b.collapse(!1); else {
            for (var c = 0, d = a; d = d.previousSibling;) {
                var f = d.nodeType;
                if (3 == f) c += d.length; else if (1 == f) {
                    b.moveToElementText(d);
                    break
                }
            }
            d || b.moveToElementText(a.parentNode);
            b.collapse(!d);
            c && b.move("character", c);
            b.moveEnd("character", a.length)
        }
        return b
    };
    var Vt = function (a, b) {
        for (var c = b.childNodes, d = 0, f = c.length; d < f; d++) {
            var g = c[d];
            if (Qt(g)) {
                var h = Ut(g), k = h.htmlText != g.outerHTML;
                if (a.isCollapsed() && k ? 0 <= a.we(h, 1, 1) && 0 >= a.we(h, 1, 0) : a.O.inRange(h)) return Vt(a, g)
            }
        }
        return b
    };
    var Wt = function (a, b, c) {
        c = c || a.sc();
        if (!c || !c.firstChild) return c;
        for (var d = 1 == b, f = 0, g = c.childNodes.length; f < g; f++) {
            var h = d ? f : g - f - 1, k = c.childNodes[h], m;
            try {
                m = Xt(k)
            } catch (r) {
                continue
            }
            var n = m.O;
            if (a.isCollapsed()) if (!Qt(k)) {
                if (0 == a.we(n, 1, 1)) {
                    a.Ca = a.Ba = h;
                    break
                }
            } else {
                if (m.Fg(a)) return Wt(a, b, k)
            } else {
                if (a.Fg(m)) {
                    if (!Qt(k)) {
                        d ? a.Ca = h : a.Ba = h + 1;
                        break
                    }
                    return Wt(a, b, k)
                }
                if (0 > a.we(n, 1, 0) && 0 < a.we(n, 0, 1)) return Wt(a, b, k)
            }
        }
        return c
    };
    var Yt = function (a, b) {
        var c = 1 == b, d = c ? a.Z() : a.la();
        if (1 == d.nodeType) {
            for (var d = d.childNodes, f = d.length, g = c ? 1 : -1, h = c ? 0 : f - 1; 0 <= h && h < f; h += g) {
                var k = d[h];
                if (!Qt(k) && 0 == a.O.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), Xt(k).O)) return c ? h : h + 1
            }
            return -1 == h ? 0 : h
        }
        f = a.O.duplicate();
        g = Ut(d);
        f.setEndPoint(c ? "EndToEnd" : "StartToStart", g);
        f = f.text.length;
        return c ? d.length - f : f
    };
    var Zt = function (a) {
        return 3 == a.nodeType ? a.nodeValue : a.innerText
    };
    var $t = function (a, b, c) {
        c = c || z.J(a.parentElement());
        var d, f = d = b.id;
        d || (d = b.id = z.jp());
        a.pasteHTML(b.outerHTML);
        (b = c.m(d)) && (f || b.removeAttribute("id"));
        return b
    };
    var au = function (a, b, c) {
        var d;
        d = d || z.J(a.parentElement());
        var f;
        1 != b.nodeType && (f = !0, b = d.B("DIV", null, b));
        a.collapse(c);
        b = $t(a, b, d);
        f && (a = b.firstChild, d.GO(b), b = a);
        return b
    };
    var bu = function (a) {
        this.O = a
    };
    var cu = function (a) {
        this.O = a
    };
    var du = function (a) {
        return z.Ul ? new z.Tt(a, z.Je(a.parentElement())) : z.D ? new cu(a) : z.B ? new St(a) : z.ug ? new bu(a) : new Ot(a)
    };
    var Xt = function (a) {
        if (!z.C || 9 <= z.Tg) a = z.D ? new cu(Pt(a)) : z.B ? new St(Pt(a)) : z.ug ? new bu(Pt(a)) : new Ot(Pt(a)); else {
            var b = new z.Tt(Ut(a), z.Je(a));
            if (Qt(a)) {
                for (var c, d = a; (c = d.firstChild) && Qt(c);) d = c;
                b.xa = d;
                b.Ca = 0;
                for (d = a; (c = d.lastChild) && Qt(c);) d = c;
                b.ta = d;
                b.Ba = 1 == d.nodeType ? d.childNodes.length : d.length;
                b.mg = a
            } else b.xa = b.ta = b.mg = a.parentNode, b.Ca = z.lb(b.mg.childNodes, a), b.Ba = b.Ca + 1;
            a = b
        }
        return a
    };
    var Qt = function (a) {
        return z.Ye(a) || 3 == a.nodeType
    };
    z.eu = function () {
        this.Ba = this.ta = this.Ca = this.xa = this.Ph = null;
        this.sf = !1
    };
    var fu = function (a, b) {
        var c = new z.eu;
        c.Ph = a;
        c.sf = !!b;
        return c
    };
    z.gu = function (a, b, c, d) {
        var f = new z.eu;
        f.sf = hu(a, b, c, d);
        if (z.jf(a) && !z.Ye(a)) {
            var g = a.parentNode;
            b = z.lb(g.childNodes, a);
            a = g
        }
        z.jf(c) && !z.Ye(c) && (g = c.parentNode, d = z.lb(g.childNodes, c), c = g);
        f.sf ? (f.xa = c, f.Ca = d, f.ta = a, f.Ba = b) : (f.xa = a, f.Ca = b, f.ta = c, f.Ba = d);
        return f
    };
    z.iu = function (a) {
        var b;
        if (!(b = a.Ph)) {
            b = a.Z();
            var c = a.va(), d = a.la(), f = a.La();
            if (!z.C || 9 <= z.Tg) b = z.D ? new cu(Rt(b, c, d, f)) : z.B ? new St(Rt(b, c, d, f)) : z.ug ? new bu(Rt(b, c, d, f)) : new Ot(Rt(b, c, d, f)); else {
                var g = b, h = c, k = d, m = f, n = !1;
                1 == g.nodeType && (h = g.childNodes[h], n = !h, g = h || g.lastChild || g, h = 0);
                var r = Ut(g);
                h && r.move("character", h);
                g == k && h == m ? r.collapse(!0) : (n && r.collapse(!1), n = !1, 1 == k.nodeType && (k = (h = k.childNodes[m]) || k.lastChild || k, m = 0, n = !h), g = Ut(k), g.collapse(!n), m && g.moveEnd("character", m), r.setEndPoint("EndToEnd",
                    g));
                m = new z.Tt(r, z.Je(b));
                m.xa = b;
                m.Ca = c;
                m.ta = d;
                m.Ba = f;
                b = m
            }
            b = a.Ph = b
        }
        return b
    };
    var ju = function (a) {
        z.xc.call(this);
        this.dD = z.Et(a);
        this.KM = z.Ft(a);
        this.mF = z.Gt(a);
        this.JO = z.Ht(a)
    };
    z.ku = function () {
        this.Wp = this.fb = this.O = null
    };
    var lu = function (a) {
        var b = new z.ku;
        b.O = a;
        return b
    };
    var mu = function (a) {
        for (var b = z.Je(arguments[0]).body.createControlRange(), c = 0, d = arguments.length; c < d; c++) b.addElement(arguments[c]);
        return lu(b)
    };
    var nu = function (a) {
        a.Wp || (a.Wp = a.gi().concat(), a.Wp.sort(function (a, c) {
            return a.sourceIndex - c.sourceIndex
        }));
        return a.Wp
    };
    var ou = function (a) {
        this.fb = a.gi()
    };
    var pu = function (a) {
        this.fb = this.ta = this.xa = null;
        a && (this.fb = nu(a), this.xa = this.fb.shift(), this.ta = z.kb(this.fb) || this.xa);
        z.At.call(this, this.xa, !1, !0)
    };
    z.qu = function () {
        this.Mf = [];
        this.om = [];
        this.yr = this.Fm = null
    };
    var ru = function (a) {
        var b = new z.qu;
        b.om = a;
        b.Mf = z.nb(a, function (a) {
            return a.ce()
        });
        return b
    };
    var su = function (a) {
        a.Fm || (a.Fm = z.Dt(a), a.Fm.sort(function (a, c) {
            var d = a.Z(), f = a.va(), g = c.Z(), h = c.va();
            return d == g && f == h ? 0 : hu(d, f, g, h) ? 1 : -1
        }));
        return a.Fm
    };
    var tu = function (a) {
        this.UA = z.nb(z.Dt(a), function (a) {
            return a.TA()
        })
    };
    var uu = function (a) {
        this.dg = null;
        this.jl = 0;
        a && (this.dg = z.nb(su(a), function (a) {
            return z.Nd(a)
        }));
        It.call(this, a ? this.Z() : null, !1)
    };
    z.vu = function (a) {
        return (a = Ct(a || window)) && wu(a)
    };
    var wu = function (a) {
        var b, c = !1;
        if (a.createRange) try {
            b = a.createRange()
        } catch (f) {
            return null
        } else if (a.rangeCount) {
            if (1 < a.rangeCount) {
                b = new z.qu;
                for (var c = 0, d = a.rangeCount; c < d; c++) b.Mf.push(a.getRangeAt(c));
                return b
            }
            b = a.getRangeAt(0);
            c = hu(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
        } else return null;
        return z.xu(b, c)
    };
    z.xu = function (a, b) {
        return a && a.addElement ? lu(a) : fu(du(a), b)
    };
    z.yu = function (a) {
        return fu(Xt(a), void 0)
    };
    z.zu = function (a, b) {
        return z.gu(a, b, a, b)
    };
    var Au = function (a) {
        if (a = Ct(a || window)) if (a.empty) try {
            a.empty()
        } catch (b) {
        } else try {
            a.removeAllRanges()
        } catch (b) {
        }
    };
    var hu = function (a, b, c, d) {
        if (a == c) return d < b;
        var f;
        if (1 == a.nodeType && b) if (f = a.childNodes[b]) a = f, b = 0; else if (z.lf(a, c)) return !0;
        if (1 == c.nodeType && d) if (f = c.childNodes[d]) c = f, d = 0; else if (z.lf(c, a)) return !1;
        return 0 < (Mo(a, c) || b - d)
    };
    z.Bu = function (a, b, c) {
        this.$H = a;
        this.aV = !!c;
        a && !b && this.next()
    };
    var Cu = function (a, b, c) {
        z.ka(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
        z.Bu.call(this, a.childNodes[c], !0, b)
    };
    z.Du = function (a) {
        for (var b; b = a && 1 == a.nodeType ? z.Eu(z.Yo(new Cu(a, !1), z.Fu)) : null;) a = b;
        return a
    };
    z.Gu = function (a) {
        return z.Eu(z.Yo(new z.Bu(a), z.Fu))
    };
    z.Eu = function (a) {
        try {
            return a.next()
        } catch (b) {
            return null
        }
    };
    z.Fu = function (a) {
        return 1 == a.nodeType || 3 == a.nodeType && !z.op(a.nodeValue)
    };
    z.Hu = function (a, b) {
        var c = z.Io(a);
        if (a.getElementsByTagName) for (var d in Iu) if (a.tagName == d || 0 < a.getElementsByTagName(d).length) return !1;
        return !b && " " == c || z.op(c)
    };
    z.Ju = function (a) {
        return a.length || a.childNodes.length
    };
    z.Ku = function (a) {
        return a.getAttribute && "true" == a.getAttribute("g_editable")
    };
    z.Lu = function (a, b) {
        z.C && z.$e(a);
        a.innerHTML = b
    };
    var Mu = function (a) {
        return (a = a.exec(z.Bb)) ? a[1] : ""
    };
    z.Nu = function (a) {
        var b = a && a.nodeName;
        return !(!a || "block" != (1 != a.nodeType ? null : z.C ? z.wg(a, "display") : z.vg(a, "display")) && "TD" != b && "TABLE" != b && "LI" != b)
    };
    z.Ou = function (a) {
        return z.uf(a, z.Nu, !0)
    };
    z.Pu = function (a) {
        z.zu(z.Du(a), 0).select()
    };
    z.Qu = function (a, b) {
        var c = a.parentNode, d = z.lb(c.childNodes, a) + (b ? 0 : 1), c = Ru(c, d, b, !0);
        z.zu(c.node, c.offset).select()
    };
    var Su = function (a) {
        for (var b = null, c = a.firstChild; c;) {
            var d = c.nextSibling;
            3 == c.nodeType ? "" == c.nodeValue ? a.removeChild(c) : b ? (b.nodeValue += c.nodeValue, a.removeChild(c)) : b = c : (Su(c), b = null);
            c = d
        }
    };
    var Tu = function (a, b) {
        if (b) var c = Uu(b), d = z.Ou(b.Qb());
        d ? (d = Lo(d, a), z.C ? Su(d) : d.normalize()) : a && (z.C ? Su(a) : a.normalize());
        return c ? c() : null
    };
    z.Vu = function (a, b) {
        return b ? Ru(a.Z(), a.va()) : Ru(a.la(), a.La())
    };
    var Uu = function (a) {
        var b = a.$g(), c = Wu(z.Vu(a, !b)), d = Xu(c), f = c.node.previousSibling;
        3 == c.node.nodeType && (c.node = null);
        var g = Wu(z.Vu(a, b)), h = Xu(g), k = g.node.previousSibling;
        3 == g.node.nodeType && (g.node = null);
        return function () {
            !c.node && f && (c.node = f.nextSibling, c.node || (c = new Yu(f, z.Ju(f))));
            !g.node && k && (g.node = k.nextSibling, g.node || (g = new Yu(k, z.Ju(k))));
            return z.gu(c.node || d.node.firstChild || d.node, c.offset, g.node || h.node.firstChild || h.node, g.offset)
        }
    };
    var Wu = function (a) {
        var b;
        if (3 == a.node.nodeType) for (b = a.node.previousSibling; b && 3 == b.nodeType; b = b.previousSibling) a.offset += z.Ju(b); else b = a.node.previousSibling;
        var c = a.node.parentNode;
        a.node = b ? b.nextSibling : c.firstChild;
        return a
    };
    z.Zu = function (a) {
        var b = a.Qb();
        return a.Z() != b.parentElement && z.Ku(b) || !!z.uf(b, z.Ku)
    };
    var Yu = function (a, b) {
        this.node = a;
        this.offset = b
    };
    var Xu = function (a) {
        var b = a.node.parentNode;
        return new Yu(b, z.lb(b.childNodes, a.node))
    };
    var Ru = function (a, b, c, d) {
        for (; 1 == a.nodeType;) {
            var f = a.childNodes[b];
            if (f || a.lastChild) if (f) {
                var g = f.previousSibling;
                if (c && g) {
                    if (d && $u(g)) break;
                    a = g;
                    b = z.Ju(a)
                } else {
                    if (d && $u(f)) break;
                    a = f;
                    b = 0
                }
            } else {
                if (d && $u(a.lastChild)) break;
                a = a.lastChild;
                b = z.Ju(a)
            } else break
        }
        return new Yu(a, b)
    };
    var $u = function (a) {
        return 1 == a.nodeType && !z.Ye(a)
    };
    z.av = function (a) {
        z.yt.call(this, a)
    };
    z.bv = function (a, b) {
        var c = a ? z.J(a) : b;
        z.R.call(this, c);
        this.dU = a || this.K().ua().body;
        this.kA = {};
        z.cv.push(this);
        this.wu = !0
    };
    z.dv = function (a, b) {
        (a.wu = b) ? a.sq() : z.ev(a)
    };
    var fv = function (a) {
        if (!a.xl) {
            var b = a.m(), c = z.Wn(b).x, d = z.fo(b).width;
            a.kA = {};
            z.Db(gv, function (a) {
                this.kA[a] = b.style[a]
            }, a);
            z.Db(hv, function (a) {
                this.kc.style[a] = b.style[a] || z.wg(b, a) || z.vg(b, a)
            }, a);
            z.Fg(a.kc, b.offsetWidth, b.offsetHeight);
            z.rg(b, {left: c + "px", width: d + "px", cssFloat: "none"});
            b.parentNode.replaceChild(a.kc, b);
            a.dU.appendChild(b);
            b.style.position = "fixed";
            a.Bp();
            z.W.add(b, "goog-scrollfloater-floating");
            a.xl = !0
        }
    };
    z.ev = function (a) {
        if (a.xl) {
            var b = a.m();
            z.Db(a.kA, function (a, d) {
                b.style[d] = a
            });
            a.kc.parentNode.replaceChild(b, a.kc);
            z.W.remove(b, "goog-scrollfloater-floating");
            a.xl = !1
        }
    };
    var iv = function (a, b, c) {
        z.bv.call(this, a, c);
        this.EU = b;
        this.tag = "";
        this.KI = 100
    };
    var jv = function (a) {
        return a && z.qb(z.cv, function (b) {
            return a === b.tag && b.xl
        })
    };
    var kv = function () {
    };
    var lv = function (a, b) {
        this.W = (0, window.$)(a);
        this.J = window.$.extend({}, this.defaults, b || {});
        this.Bg()
    };
    var mv = function (a, b) {
        window.$.each(nv, function (c, d) {
            var f = b && (null !== b && d in b ? b[d] : void 0);
            f ? f(a, d) : a.removeAttribute(d)
        })
    };
    var ov = function (a, b) {
        (0, window.$)("*", a).each(function () {
            mv(this, b)
        })
    };
    var pv = function (a) {
        a = a.J;
        var b = a.VU, c = a.NA;
        return {
            id: function (a, c) {
                a.id && !z.A(b, a.id) && a.removeAttribute(c)
            }, "class": function (a, b) {
                if (a.className) if (c.length) {
                    var g = z.W.get(a), g = z.mb(g, z.ep(z.Ba(z.A, c)));
                    g.length && z.W.remove.apply(null, [a].concat(g))
                } else a.removeAttribute(b)
            }
        }
    };
    var qv = function (a) {
        z.G.call(this);
        this.J = window.$.extend(!0, {}, this.defaults, a || {});
        this.uw();
        this.Xg()
    };
    var rv = function (a, b) {
        a.close();
        a.dispatchEvent({type: "cancel", data: {originalEvent: b}})
    };
    var sv = function (a, b) {
        z.G.call(this);
        this.input = a;
        z.Mb(this.J = {}, this.defaults, b || {});
        this.ng = new qv({Vm: this.J.Vm, mk: this.J.mk});
        z.Ac(this, this.ng);
        this.Bg()
    };
    var tv = function (a) {
        a = z.N(a.J.Gs, a.input);
        var b;
        if (a) return b = window.document.createTextNode("@"), z.Po(b, a), b
    };
    var uv = function (a, b) {
        var c;
        z.B && (c = z.Pe(window.document), a.input.focus(), window.scrollTo(c.x, c.y));
        var d;
        vv ? (c = window.getSelection(), d = window.document.createRange(), d.setStartAfter(b), c.removeAllRanges(), c.addRange(d)) : 3 === b.nodeType && z.zu(b, b.length).select()
    };
    var wv = function (a) {
        return a && "A" === a.nodeName
    };
    var xv = function (a, b, c) {
        var d = window.getSelection();
        if (b(d.anchorNode.parentNode)) {
            b = d.getRangeAt(0);
            var f = yv(a);
            b.insertNode(f);
            b.selectNode(f);
            d.removeAllRanges();
            d.addRange(b);
            d = window.getSelection().getRangeAt(0);
            a = zv(a, d);
            c(a)
        }
    };
    var Av = function (a, b, c) {
        var d = window.document.selection.createRange(), f = d.parentElement();
        b(f) && (d.pasteHTML(yv(a).outerHTML), d.moveToElementText(z.N(a.J.Gs, a.input)), d.select(), a = zv(a, d), "7.0" === z.Jc && (a.x -= 2), c(a))
    };
    var zv = function (a, b) {
        var c;
        c = b.getBoundingClientRect();
        var d;
        z.C && (d = {width: b.boundingWidth, height: b.boundingHeight}, z.Ca(d, c), c = d);
        d = z.Pe(window.document);
        var f = z.Wn(a.ng.sc());
        f.x = c.left - f.x + d.x;
        f.y = c.top - f.y + d.y;
        a.J.position.call(a, f, c);
        return f
    };
    var Bv = function (a) {
        return a && 1 === a.nodeType && "A" === a.tagName && z.A(Cv, a.className)
    };
    var yv = function (a) {
        return z.O("a", {className: a.J.Gs, innerHTML: "@"})
    };
    z.Dv = function (a, b, c) {
        z.R.call(this);
        this.status = this.Vb = null;
        this.TG = a;
        this.AJ = b;
        this.Fr = c;
        this.isEnabled = !0;
        this.pF = !1;
        this.params = [];
        this.content = null;
        this.bC = !1;
        this.wE = window.$.Deferred()
    };
    var Ev = function (a) {
        var b = a.Ma;
        if (b.m) b.on("load", function () {
            new lv(b.m(), {NA: ["video-link"].concat(this.cv ? Cv : [])})
        }, !1, a)
    };
    var Fv = function (a) {
        var b = a.Ma;
        b.m && (a = (0, z.q)(function () {
            new sv(b.m(), {mk: this.pj})
        }, a), b.uc() ? a() : b.addEventListener("load", a))
    };
    var Gv = function (a) {
        if (a.dispatchEvent("shouldUpdateContent")) {
            var b = a.content, c = a.hd, d = a.DF();
            a.bC ? (z.mf(c, b), c.appendChild(z.We(d))) : c.innerHTML = b + d;
            (0, window.$)("img.lazy", c).lazyload({data_attribute: "actualsrc", threshold: 400})
        }
    };
    z.Hv = function (a, b, c) {
        z.Dv.call(this, a, b, c);
        this.mS = "mock" + this.de();
        this.mx = !1;
        this.ww = !0;
        this.Hd = !z.Tm || z.Wl;
        this.cv = !1;
        this.LK = this.RW = !0;
        this.Dz = ""
    };
    var Iv = function (a, b, c) {
        var d = b.Rb.FullScreenPlugin;
        if (d) {
            var f = z.Zg(c, "toggleFullScreen");
            d.on("save", a.ys, !1, a).on("willEnterFullScreen", function () {
                Jv(this, !1)
            }, !1, a).on("enterFullScreen", function () {
                f.wd("退出写作模式")
            }).on("exitFullScreen", function () {
                f.wd("写作模式")
            }).on("shouldExitFullScreenOnEscape", function () {
                return !b.Wg
            })
        }
    };
    var Jv = function (a, b) {
        if (a.tg) if (b) {
            z.W.add(a.ql, "zm-editable-editor-field-wrap-active");
            var c = a.tg;
            c.St = z.Wn(c.m()).y;
            z.dv(a.tg, !0)
        } else z.W.remove(a.ql, "zm-editable-editor-field-wrap-active"), z.dv(a.tg, !1)
    };
    var Kv = function (a) {
        a.FC.toggle();
        a.Cq.toggleClass("no-toolbar")
    };
    z.Lv = function () {
        z.V.call(this);
        this.GE = !0;
        this.Rz = z.T.Rz;
        this.GV = -1 === window.location.href.indexOf("psq")
    };
    z.Mv = function (a, b) {
        a.Gc && (a.Gc.value = b, a.BI(), a.cJ.FK(), a.Oa && a.Oa.bv())
    };
    var Nv = function (a) {
        var b = Ov.get("add_question_form_title");
        b && z.Mv(a, b);
        (b = Ov.get("add_question_form_des")) && Pv(a, b);
        b = a.J.Lm;
        b || (b = Ov.get("add_question_form_topics")) && (b = JSON.parse(b));
        b && z.y(b, function (b) {
            a.Oa.ym(b)
        })
    };
    var Qv = function (a) {
        function b() {
            var a = (0, window.$)('\x3cdiv\x3e\x3cdiv style\x3d"text-align:center"\x3e\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e\x3c/div\x3e'),
                b = (0, window.$)(oq(this)), c = b.data("answer_count"), f = b.data("url_token");
            window.$.get("/question/" + f + "/answers/summary").done(function (b) {
                if (b && !b.r) {
                    b = d({forEach: z.y, answers: b.msg, question_url_token: f});
                    var g = z.Ka('\x3cdiv class\x3d"zippy-row"\x3e\x3ca class\x3d"zg-link-litblue" href\x3d"/question/%s"\x3e查看该问题%s\x3c/a\x3e\x3c/div\x3e',
                        f, 0 < c ? "的全部 " + c + " 个回答" : "");
                    a.html(b + g)
                } else z.X.message(b.msg)
            });
            b.after(a);
            return a.get(0)
        }

        var c = (0, z.Rv)(a.mq.bJ), d = (0, z.Rv)(a.mq.QM), f = a.Gc, g = new Ws;
        a.OC = new z.Vs(f, {
            source: "/question/autocomplete",
            vk: z.L("zh-question-suggest-ac-wrap"),
            td: window.$.noop,
            render: function (d, f, g) {
                a.QC && a.QC.H();
                f = (0, window.$)(d.m());
                var n = a.QC = new gs;
                f.html(c({forEach: z.y, questions: g, token: (0, window.encodeURIComponent)(this.Wb)}));
                f.prepend('\x3cdiv class\x3d"ac-head zg-gray"\x3e你的问题可能已经有答案\x3c/div\x3e');
                (0, window.$)(".ac-row",
                    f).each(function () {
                    n.Fa(new z.mq((0, window.$)(this).get(0), b, !1))
                });
                n.w(d.m())
            },
            az: g
        })
    };
    var Sv = function (a, b) {
        (0, window.$)(a.VV).toggle(!!b);
        (0, window.$)(a.AH).toggle(!b);
        b ? a.wD.focus() : (a.to(), a.Gc.focus());
        a.ha()
    };
    var Tv = function (a) {
        if (!z.Uj || z.Vj) {
            var b = lq.ba(), c = new z.bq("", b);
            c.Tb(32, !1);
            a.v().g(c, "action", a.QS);
            c.w(a.qW);
            c.wd("切换工具栏");
            c = new z.bq("", b);
            c.Tb(32, !1);
            a.v().g(c, "action", function () {
                this.Pb.Ma.execCommand("image")
            });
            c.w(a.qM);
            c.wd("添加图片");
            b = new z.bq("", b);
            b.Tb(32, !1);
            a.v().g(b, "action", function () {
                this.Pb.Ma.execCommand("video")
            });
            b.w(a.rM);
            b.wd("添加视频")
        }
    };
    var Uv = function (a) {
        a.Oa = new ut;
        a.Oa.w(a.vW);
        a.v().g(a.Oa, ["add_tag", "remove_tag"], a.yI);
        new z.vk(a.Gc, "写下你的问题");
        var b = a.fO;
        a.Pb = new z.Hv;
        a.Pb.Dz = '\x3cspan style\x3d"font-style: normal;color: #999;"\x3e问题背景、条件等详细信息\x3c/span\x3e';
        a.Pb.w(b);
        a.Pb.init();
        a.Pb.rg();
        z.Uj && !z.Vj || Kv(a.Pb);
        (0, window.setTimeout)(function () {
            a.ha()
        });
        Tv(a);
        Qv(a)
    };
    var Vv = function (a, b, c) {
        "title" === c ? a.AR = b : "detail" === c ? a.rR = b : a.DR = b;
        a.GE = a.AR || a.rR || a.DR
    };
    var Wv = function (a, b) {
        (0, window.$)(a.al).attr("disabled", b)
    };
    var Xv = function (a) {
        (0, window.$)(window).on("beforeunload.AddQuestionForm", (0, z.q)(function () {
            Yv(this)
        }, a))
    };
    var Yv = function (a) {
        a.Gc.value && Ov.set("add_question_form_title", a.Gc.value);
        var b = a.Pb.Zf();
        b && Ov.set("add_question_form_des", b);
        (a = a.Oa.data) && Ov.set("add_question_form_topics", JSON.stringify(a))
    };
    var Zv = function (a, b, c) {
        a.Bt.innerHTML = b.ye;
        0 === b.level ? z.Q(a.ek, !1) : (3 !== b.level && (z.Q(a.al, !0), z.Q(a.mn, !1)), z.Q(a.ek, c), c && a.Gc.focus())
    };
    var $v = function (a) {
        var b = z.sr(a.Gc.value).replace(/？/g, "?"), c = aw(a);
        1 < c.level || (1 > Br(z.sr(a.Gc.value).replace("？", "?")) ? (c.ye = "您还没有给问题添加问号", c.level = 3, c.name = "noquestionmark") : 1 < Br(b) && (c.ye = "如果有多个问题，最好拆分一下", c.level = 1, c.name = "multiquestionmark"));
        return c
    };
    var aw = function (a) {
        var b = "#", c = a.No || new bw, d = !1;
        if (!a.OC || !a.GV) return c;
        var f = a.OC.Sa;
        f && f.length ? (z.y(f, function (a) {
            4 < a.raw.length && 1 === +a.raw[4] && (d = !0, b = "/question/" + a.url_token + "?q\x3d" + (0, window.encodeURIComponent)(this.Gc.value) + "\x26psq\x3d0")
        }, a), d ? (c.ye = '我们找到了一个也许是你想问的问题，\x3ca href\x3d"' + b + '"\x3e查看问题\x3c/a\x3e', c.level = 3, c.name = "duplicatedquestion", c.FY = !0, a.mn.href = b, z.Q(a.al, !1), z.Q(a.mn, !0)) : (c = new bw, z.Q(a.al, !0), z.Q(a.mn, !1)), a.No = c) : (c = new bw, a.No = c, z.Q(a.al, !0), z.Q(a.mn, !1));
        a.No ||
        (a.No = c);
        return a.No
    };
    var cw = function (a) {
        a = z.sr(a.Gc.value).replace(/？/g, "?");
        a = Gr(a);
        var b = new bw;
        3 > a ? (b.level = 3, b.ye = "问题字数太少了吧", b.name = "tooshort") : 40 < a && 51 >= a ? (b.level = 1, b.ye = '还可以输入 \x3cspan class\x3d"warning"\x3e' + (51 - a) + "\x3c/span\x3e 字", b.name = "buffer") : 51 < a && (b.level = 3, b.ye = '已超出 \x3cspan class\x3d"error"\x3e' + (a - 51) + "\x3c/span\x3e 字", b.name = "toolong");
        return b
    };
    var dw = function (a) {
        a = a.Pb;
        var b = (0, z.ab)(a.Zf());
        return a.isContentEditable() ? b : z.Ma(b)
    };
    var Pv = function (a, b) {
        var c = a.Pb;
        (0, window.setTimeout)(function () {
            c.ia(b);
            c.Mp()
        })
    };
    var ew = function (a) {
        var b = new z.Fr, c = [], d = [];
        b.add("question_title", a.Gc.value);
        b.add("question_detail", dw(a));
        a.KD && b.add("anon", a.KD.checked ? "1" : "0");
        z.y(a.Oa.data, function (a) {
            a[3] ? c.push(a[3]) : d.push(a[1])
        });
        b.add("topic_ids", c.join(","));
        b.add("new_topics", d.join("$"));
        z.lh && b.add("uid", z.lh[3]);
        return b
    };
    var fw = function (a) {
        window.$.get("/org/ask_question_limit").then(function (b) {
            if (!b.r) {
                b = b.msg;
                var c = void 0,
                    c = b ? (0, window.$)('\x3cspan class\x3d"zm-question-form-notice"\x3e本月还能提 ' + b + " 个问题\x3c/span\x3e") : (0, window.$)('\x3cspan class\x3d"zm-question-form-notice zm-question-form-notice--warning"\x3e已达到本月提问上限\x3c/span\x3e');
                (0, window.$)(a.AH).find(".zm-command").prepend(c)
            }
        })
    };
    var bw = function () {
        this.level = (0, window.isNaN)(void 0) ? 0 : void 0;
        this.ye = ""
    };
    var gw = function () {
    };
    z.hw = function (a) {
        z.Ck.call(this, "register");
        this.Sn = a
    };
    var iw = function (a) {
        z.R.apply(this, arguments)
    };
    var jw = function () {
    };
    var kw = function () {
        var a = (0, window.$)("#rq3-sidenav-link"), b = (0, window.$)(".tour", a);
        b.length && (0, window.$)(".close-button", b).click(function () {
            var a = (0, window.$)(this).data("feature");
            window.$.get("/notifeature", {feature: a});
            b.fadeOut(100, function () {
                b.remove()
            })
        })
    };
    var lw = function () {
        var a = (0, window.$)(".zm-side-my-columns");
        if (a.length) {
            var b = a.find(".column-homepage-link .icon-column-logo"), c = +z.Qh.get("navcolumn:entered");
            a.on("click", ".column-unfold", function (b) {
                a.find(".column-list").append((0, window.$)("#SidebarColumnItem-template").html());
                (0, window.$)(b.currentTarget).parent().remove()
            });
            c || (b.addClass("icon-column-logo-active"), a.on("click", ".column-homepage-link", function () {
                b.removeClass("icon-column-logo-active");
                z.Qh.set("navcolumn:entered", 1)
            }))
        }
    };
    var mw = function (a) {
        z.R.apply(this, arguments)
    };
    z.nw = function (a) {
        (new window.Image).src = a
    };
    var ow = function () {
        (0, window.$)(".shameimaru-placeholder").each(function () {
            var a = (0, window.$)(this), b = Object.assign({}, {loc: a.data("loc")}, a.data("params"));
            window.$.get("/node/Banner", b, function (b) {
                b ? (b = (0, window.$)(b), a.replaceWith(b), (new mw).w(b[0])) : a.remove()
            })
        })
    };
    var pw = function (a) {
        z.R.apply(this, arguments)
    };
    var qw = function (a) {
        var b = a.Jf;
        b.addClass("is-hidden");
        (0, window.setTimeout)(function () {
            b.remove()
        }, 200)
    };
    var rw = function () {
        function a(a, b) {
            a = z.pa(a) ? new RegExp(a) : a;
            return a.test(b)
        }

        var b;
        z.Fb({
                home: "^/$",
                collection: "^/collection/\\d+$",
                roundtable: "^/roundtable/[\\w\\.-]+$",
                answer: "^/question/\\d+/answer/\\d+$",
                question: "^/question/\\d+$",
                search: "^/search$",
                people: "^/people/[\\w\\.-]+$",
                people_answers: "^/people/[\\w\\.-]+/answers$",
                explore_recommendations: "^/explore/recommendations$",
                explore_daily_hot: {path: "^/explore$", hash: "^(?!monthly-hot$)"},
                explore_monthly_hot: {path: "^/explore$", hash: "^monthly-hot$"}
            },
            function (c, d) {
                c.path && c.hash ? a(c.path, window.location.pathname) && a(c.hash, window.location.hash.slice(1)) && (b = d) : a(c, window.location.pathname) && (b = d);
                return !!b
            });
        return b
    };
    z.sw = function (a) {
        return "/qrcode?" + window.$.param({url: a + "#showWechatShareTip"})
    };
    var tw = function () {
        uw = (0, window.$)(".wechat-share-tip");
        uw.on("touchstart click", function (a) {
            a.preventDefault();
            vw()
        });
        "#showWechatShareTip" === window.location.hash && (ww(), window.location.hash = "")
    };
    var xw = function () {
        uw.length && (uw.show(), (0, window.$)(window.document.documentElement).addClass("show-wechat-share-tip"))
    };
    var vw = function () {
        uw.onTransitionEnd(function () {
            uw.hide()
        }, 150);
        (0, window.$)(window.document.documentElement).removeClass("show-wechat-share-tip")
    };
    var ww = function () {
        var a = rw();
        z.xi({category: "share", action: "scan_share_" + a + "_to_wechat_start"})
    };
    var yw = function (a) {
        z.R.apply(this, arguments)
    };
    var zw = function () {
    };
    var Aw = function (a) {
        var b = (0, window.$)("#zh-feedback-form"), c = (0, window.$)(".zg-report-msg", b),
            d = (0, window.$)("textarea", b), b = (0, window.$)("select", b);
        a = a.type || b.val();
        b = window.$.trim(d.val());
        if (!b) return c.html("请填写反馈内容").show(), d.focus(), !1;
        c.hide();
        c = new z.Z(!0);
        d = new z.vh;
        c.on("success", function () {
            z.X.message("建议发送成功，我们会尽快处理，感谢您的帮助");
            Bw.remove("content")
        });
        d.add("type", a).add("content", b);
        c.ajax("/feedback/report", d.toString())
    };
    var Cw = function (a, b) {
        return window.$.post("/node/ColumnFollowBaseV2", {
            method: b ? "follow_column" : "unfollow_column",
            params: {column_id: a}
        })
    };
    var Dw = function (a, b) {
        return window.$.post("/roundtable/" + a, {action: b ? "follow" : "unfollow"})
    };
    var Ew = function (a) {
        z.G.call(this);
        this.url = a + "/apilive";
        this.BU = 5E3;
        this.$U = 1E3;
        this.Sw = 0;
        Fw(this)
    };
    var Fw = function (a) {
        a.client = new window.WebSocket(a.url);
        a.client.onmessage = function (b) {
            try {
                a.dispatchEvent({type: "message", data: b.data})
            } catch (c) {
            }
        };
        a.client.onclose = function () {
            (0, window.setTimeout)(function () {
                a.Sw < a.$U && (Fw(a), a.Sw += 1)
            }, a.BU)
        };
        a.client.onerror = function () {
            a.client.close()
        }
    };
    var Gw = function (a) {
        z.Mb(this.J = {}, this.defaults, a || {});
        this.hc()
    };
    var Hw = function (a) {
        return Iw.every(function (b) {
            return a[b]
        })
    };
    var Jw = function (a, b) {
        return Iw.every(function (c) {
            return a[c] === b[c]
        })
    };
    var Kw = function (a) {
        return window.$.extend({}, {key: a.key}, a.Vb)
    };
    var Lw = function (a, b) {
        a.every(function (a) {
            return !Jw(a, b)
        }) && a.push(b);
        return a
    };
    var Mw = function (a, b) {
        var c = a[b.group];
        c ? c.push(b) : a[b.group] = [b];
        return a
    };
    var Nw = function () {
        var a = bp(z.an.map(function (a) {
            return z.Gb(Sn(a.$k))
        })).map(Kw).filter(Hw).reduce(Lw, []).reduce(Mw, {}), b = ['\x3cdiv class\x3d"shortcut-tips"\x3e'], c = {
            eV: /([^\s+])+|([\s+])/g, QO: function (a) {
                return a.replace(this.eV, function (a, b) {
                    return b ? "\x3ckbd\x3e" + a + "\x3c/kbd\x3e" : " " + a + " "
                })
            }
        };
        z.Db(a, function (a, f) {
            b.push('\x3cdiv class\x3d"group"\x3e\x3ch2\x3e', f, "\x3c/h2\x3e\x3cdl\x3e");
            z.y(a, function (a) {
                b.push("\x3cdt\x3e", c.QO(a.key), "\x3c/dt\x3e");
                b.push("\x3cdd\x3e", a.name, "\x3c/dd\x3e")
            });
            b.push("\x3c/dl\x3e\x3c/div\x3e")
        });
        b.push("\x3c/div\x3e");
        return b.join("")
    };
    z.Ow = function (a) {
        return Pw("common").then(function () {
            return Pw(a)
        })
    };
    var Qw = function () {
        var a = z.T;
        return {signedIn: a.Fb(), currentUser: {email: a.Ln, activated: a.qe, isOrg: a.Jd}, authRequired: z.Jq}
    };
    var Rw = function (a, b) {
        Sw.push([a, z.qa(b) ? b : 2]);
        Sw.sort(function (a, b) {
            return a[1] - b[1]
        })
    };
    var Tw = function () {
        Kq.call(this);
        this.queue = []
    };
    var Uw = function () {
        Tw.call(this);
        this.Fx = 0
    };
    var Vw = function (a) {
        return Math.pow(a, 3)
    };
    var Ww = function (a) {
        return 1 - Math.pow(1 - a, 3)
    };
    var Xw = function (a) {
        return 3 * a * a - 2 * a * a * a
    };
    var Yw = function () {
        z.G.call(this);
        this.h = null;
        this.lS = 768;
        this.Cx = this.lV = 300;
        this.mo = !0;
        this.bw = !1;
        this.jW = 150
    };
    var Zw = function () {
    };
    var $w = function () {
        z.G.call(this)
    };
    z.ax = function (a) {
        a.gk = new z.Z(!1);
        a.v().ya(a.gk, "success", a.gT);
        a.gk.ajax("/noti7/new?r\x3d" + +new Date, null, "GET")
    };
    var bx = function () {
        if (cx) (0, window.$)(window.document).on("click.tabless", "a:not(#js-openInApp)", function (a) {
            this.host === window.location.host && "_blank" === a.currentTarget.target && (a.currentTarget.target = "")
        })
    };
    var dx = function () {
    };
    z.ex = function (a, b, c) {
        this.element = a;
        this.Ze = b;
        this.ZT = c
    };
    var fx = function (a, b) {
        this.Yh = a instanceof z.Ge ? a : new z.Ge(a, b)
    };
    var gx = function (a, b) {
        this.zA = 4;
        this.au = b || void 0;
        z.Ln.call(this, a)
    };
    z.hx = function (a, b) {
        a.Gz = null == b || b instanceof z.pg ? b : new z.pg(b, void 0, void 0, void 0);
        a.V() && a.ha()
    };
    z.ix = function (a, b, c) {
        this.da = c || (a ? z.J(z.L(a)) : z.J());
        gx.call(this, this.da.B("DIV", {style: "position:absolute;display:none;"}));
        this.ij = new z.Ge(1, 1);
        this.fb = new Vo;
        this.Dk = null;
        a && this.attach(a);
        null != b && z.mf(this.m(), b)
    };
    var jx = function (a, b) {
        z.md(b, "mouseover", a.nd, !1, a);
        z.md(b, "mouseout", a.Ll, !1, a);
        z.md(b, "mousemove", a.Jl, !1, a);
        z.md(b, "focus", a.ee, !1, a);
        z.md(b, "blur", a.Ll, !1, a)
    };
    var kx = function (a, b) {
        var c = z.vf(a.da);
        a.ij.x = b.clientX + c.x;
        a.ij.y = b.clientY + c.y
    };
    var lx = function (a, b) {
        try {
            for (; b && !a.fb.contains(b);) b = b.parentNode;
            return b
        } catch (c) {
            return null
        }
    };
    var mx = function (a, b) {
        if (0 == b) {
            var c = a.ij.clone();
            return new nx(c)
        }
        return new ox(a.bc)
    };
    var px = function (a) {
        if (a.anchor) for (var b, c = 0; b = qx[c]; c++) z.lf(b.m(), a.anchor) && (b.fl = a, a.OI = b)
    };
    var rx = function (a, b, c) {
        a.Dm || (a.Dm = z.vd((0, z.q)(a.Iz, a, b, c), a.Sp))
    };
    var sx = function (a) {
        a.Dm && (z.wd(a.Dm), a.Dm = void 0)
    };
    var nx = function (a, b) {
        fx.call(this, a, b)
    };
    var ox = function (a) {
        z.ex.call(this, a, 3)
    };
    var tx = function (a, b, c) {
        z.ix.call(this, a, b, c)
    };
    z.ux = function (a, b) {
        a.po = b || null
    };
    var vx = function (a, b) {
        if (a.$v && a.$v.contains(b) || a.Vs(b)) return !0;
        var c = a.fl;
        return !!c && c.Vs(b)
    };
    z.xx = function (a, b, c, d) {
        z.ix.call(this, null, null, c);
        z.sa(a) ? this.ez = a : this.eD = a;
        this.rN = 0 != b;
        this.GB = [];
        this.Ka = d || (c ? c.ua() : window.document);
        z.F(this.Ka, "mouseover", this.iG, !1, this)
    };
    var yx = function (a, b, c) {
        if (b == a.Qf) a.gj(); else if (b != a.anchor) {
            if (1 == a.getState() || 4 == a.getState()) sx(a), zx(a);
            var d = new Ax("trigger", a, b, void 0);
            a.gi().contains(b) || (a.attach(b), a.GB.push(b));
            a.anchor = b;
            a.fA(d) ? rx(a, b, c || a.au) : zx(a)
        }
    };
    var Bx = function (a, b) {
        var c = z.lb(a.GB, b);
        -1 != c && (a.detach(b), a.GB.splice(c, 1))
    };
    var zx = function (a) {
        a.dispatchEvent(new Ax("canceltrigger", a, a.anchor || null));
        Bx(a, a.anchor);
        delete a.anchor
    };
    var Ax = function (a, b, c, d) {
        z.Lc.call(this, a, b);
        this.anchor = c;
        this.data = d
    };
    var Cx = function (a, b, c) {
        z.ex.call(this, a, b);
        this.XC = c
    };
    var Dx = function (a, b) {
        a & 48 && (b ^= 2);
        a & 192 && (b ^= 1);
        return b
    };
    z.Ex = function (a) {
        a = void 0 === a ? {} : a;
        z.G.call(this);
        this.vq = !0;
        this.Km = this.fq = -1;
        this.nK = "";
        this.Ia = null;
        Object.assign(this.J = {}, this.defaults, a);
        this.J.Vk && (this.zs = z.Jq(this.zs, this.J.Vk))
    };
    z.Fx = function (a, b) {
        a.Eh.innerHTML += '\n    \x3ca class\x3d"zm-profile-email-history-link" href\x3d"' + b + '"\x3e私信记录  »\x3c/a\x3e\n    ' + (z.T.Jd ? "\x3cspan class\x3d'OrgIcon sprite-global-icon-org-14' data-tip\x3d's$b$已认证的机构' /\x3e" : "") + "\n  "
    };
    z.Gx = function (a, b, c, d) {
        -1 === b ? z.vr(a.$c, a.Eh) : b !== z.T.fg && (a.Km = b, a.nK = c, a.Eh && a.$c && (a.Eh.innerHTML = a.nK + (d ? ur() : ""), z.vr(a.Eh, a.$c), a.$c.value = ""))
    };
    var Hx = function (a, b) {
        a.Bt.innerHTML = b;
        z.Q(a.Bt, !0)
    };
    var Ix = function () {
        z.G.call(this);
        this.PV = this.IQ = 250;
        this.Qh = {};
        this.init()
    };
    var Jx = function (a, b) {
        return '\x3cdiv class\x3d"popover-content no-hovercard"\x3e' + a + "\x3c/div\x3e" + ('\x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\x3cdiv class\x3d"arrow2' + (b ? " loading" : "") + '"\x3e\x3c/div\x3e')
    };
    var Kx = function (a) {
        var b;
        switch (a.kl) {
            case "t":
                b = 5;
                break;
            case "r":
                b = 4;
                break;
            case "b":
                b = 4;
                break;
            case "l":
                b = 6
        }
        a = a.R;
        a.zA = b;
        a.V() && a.ha()
    };
    var Lx = function (a, b, c, d) {
        var f = a.Qh[b] && a.Qh[b][c];
        if (f) Mx(a, Jx(f)); else if (f = Nx[b]) window.$.get("/node/" + f, {params: {url_token: c}}, (0, z.q)(function (a) {
            Ox(this, a, b, c)
        }, a)), Mx(a, a.tw(d))
    };
    var Ox = function (a, b, c, d) {
        a.bf === c && a.Gn === d && Ox(a, b);
        a.Qh[c] = a.Qh[c] || {};
        a.Qh[c][d] = b;
        Kx(a);
        Mx(a, Jx(b));
        yx(a.R, a.uE, a.kl)
    };
    var Mx = function (a, b) {
        a.R.Pd(b);
        a.R.setPosition(a.TN)
    };
    var Px = function (a) {
        z.R.call(this);
        this.options = window.$.extend({
            stopPropagation: !0,
            cN: "#000",
            hw: .5,
            IN: "#666",
            ZD: .2,
            top: 2,
            width: 6,
            right: 2,
            $M: !0
        }, a);
        this.Qz = 0;
        this.Rr = !1
    };
    var Qx = function (a) {
        a.Bm && (a.ne.stop().css({opacity: a.options.hw}).show(), a.gn && ((0, window.clearTimeout)(a.gn), a.gn = !1))
    };
    var Rx = function (a, b) {
        b = b || 0;
        a.gn = (0, window.setTimeout)((0, z.q)(function () {
            this.ne.stop().fadeOut();
            this.gn = !1
        }, a), b)
    };
    var Sx = function (a, b) {
        var c = a.fd.height() - 2 * a.options.top - a.ne.height(), d = a.Re.height() - a.fd.height();
        return b / c * d
    };
    var Tx = function (a, b, c) {
        z.Lc.call(this, "scroll", a);
        this.scrollTop = b;
        this.EJ = c
    };
    z.Ux = function (a) {
        z.R.call(this);
        this.J = window.$.extend({}, this.defaults, a || {})
    };
    var Vx = function () {
        z.G.call(this);
        this.Pf = [0, 0, 0];
        this.dI = [0, 0, 0];
        this.types = ["default", "follow", "vote_thank"];
        this.VE = !z.rm.Ab;
        this.KK = z.rm.Ab || null != window.navigator.userAgent.match(/iPad/i);
        this.cache = [!1, !1, !1];
        this.Cj = [null, null, null];
        this.$o = [0, 0, 0];
        this.Cm = [!1, !1, !1]
    };
    var Wx = function (a) {
        a.tab = new z.Ux({VH: ".zm-noti7-popup-tab-item", NI: ".zm-noti7-content", Cg: "current"});
        a.v().g(a.tab, "action", function (a) {
            this.sE = a = a.data.index;
            Xx(this, a);
            var c = this.pg && this.pg[a];
            c && ((0, window.setTimeout)(function () {
                c.update()
            }), this.tab.index() === a && c.scrollTop())
        }).g(a.tab, "select", function (a) {
            this.sE = a = a.data.index;
            Yx(this, a);
            z.Y.tb({type: "ga_click_top_nav_noti_tab", data: {tab: +a}});
            this.Td || z.Qh.set("noti7-tab", a)
        });
        a.tab.w(a.Ai)
    };
    var Zx = function (a) {
        var b = void 0, c = void 0, d = z.Qr(100, function (c, d) {
            var h = d.target;
            200 > ("number" === typeof d.EJ ? d.EJ : h.scrollHeight - h.offsetHeight - h.scrollTop) && a.zz(c).then(function (a) {
                a || z.nd(b[c])
            }, window.$.noop)
        }), c = a.KK ? a.contents : a.pg, b = z.nb(c, function (a, b) {
            return z.F(a, "scroll", (0, z.q)(d, void 0, b))
        })
    };
    var Yx = function (a, b) {
        a.pg && z.y(a.pg, function (a, d) {
            b === d ? a.enter() : a.qx && (a.v().removeAll(), a.Qd && a.Qd.stop(), a.qx = !1)
        })
    };
    var $x = function (a) {
        a = z.cp(a.Pf, Tn);
        return -1 === a ? 0 : a
    };
    var ay = function (a) {
        if (!z.vm) {
            var b = by(a.Td);
            a = by(a.AG);
            var c = "";
            b && a ? c = "(" + a + " 封私信 / " + b + " 条消息) " : b ? c = "(" + b + " 条消息) " : a && (c = "(" + a + " 封私信) ");
            window.document.title = c + window.document.title.replace(/^(\(|\uff08)(\d)*(\+)?( )?(\u5c01\u79c1\u4fe1)?( \/ )?(\d)*(\+)?( )?(\u6761\u6d88\u606f)?(\)|\uff09)( )?/g, "")
        }
    };
    var cy = function (a, b) {
        a.Td -= a.Pf[b];
        a.wv.eq(b).removeClass("withdot");
        0 > a.Td && (a.Td = 0);
        z.Q(a.zn, !!a.Td);
        a.zn.innerHTML = a.Td
    };
    var Xx = function (a, b) {
        a.VE ? a.visible && (a.cache[b] ? ("$$used$$" !== a.cache[b] && (a.Jw[b].innerHTML = a.cache[b], a.cache[b] = "$$used$$"), a.Pf[b] && dy(a.types[b]), cy(a, b), a.pg && a.pg[b].update().scrollTop(), a.Td || z.Qh.set("noti7-tab", b)) : (a.Cm[b] = !0, a.Fl(b))) : a.cache[b] ? ("$$used$$" !== a.cache[b] && (a.Jw[b].innerHTML = a.cache[b], a.cache[b] = "$$used$$"), a.Pf[b] && dy(a.types[b]), cy(a, b)) : (a.Cm[b] = !0, a.Fl(b), dy(a.types[b]))
    };
    var ey = function (a, b) {
        b ? a.AC.fadeIn(50) : a.AC.fadeOut(50);
        a.visible = b;
        z.W.enable(a.Ai, "open", a.visible);
        z.W.enable(a.jq, "open", a.visible);
        if (b) {
            a.Ai.focus();
            z.y(a.cache, function (a, b) {
                a || this.Fl(b)
            }, a);
            a.v().g(window.document, "click", a.rs);
            var c;
            a.Td ? (c = $x(a), a.tab.select(c), a.Cm[c] = !0) : (c = fy(), a.Nw || (a.tab.select(c), a.Cm[c] = !0));
            Yx(a, c);
            z.Y.tb({type: "ga_click_top_nav_noti", data: {tab: a.sE, CK: +(a.Td || 0)}})
        } else a.v().qa(window.document, "click", a.rs), Yx(a, -1)
    };
    var dy = function (a) {
        (new z.Z(!1)).ajax("/noti7/readall", "tab\x3d" + a, "POST")
    };
    var fy = function () {
        var a = z.Qh.get("noti7-tab");
        return a ? +a : 0
    };
    var by = function (a) {
        return 99 < a ? "99+" : a
    };
    var gy = function (a) {
        z.R.call(this);
        window.$.extend(this.J = {}, this.defaults, a || {})
    };
    var hy = function (a) {
        var b = a.xg, c = a.ed, d = c.attr("id");
        d || (d = z.Wg(z.Vg.ba()), c.attr("id", d), b.attr("aria-labelledby", d));
        c.attr("role") || c.attr("role", "button");
        a.ed.attr("aria-haspopup", "true").attr("aria-activedescendant", "");
        a.xg.children().find("a").attr("tabindex", -1).attr("id", (0, z.q)(function (a, b) {
            return b || z.Wg(z.Vg.ba())
        }, a))
    };
    var iy = function (a, b) {
        var c = a.xg.children().find("a"), d = c.size();
        b >= d ? b = 0 : -1 >= b && (b = d - 1);
        c = c.eq(b);
        a.ed.attr("aria-activedescendant", c.attr("id"));
        c.focus();
        a.index = b
    };
    var jy = function (a) {
        z.R.apply(this, arguments)
    };
    var ky = function (a, b) {
        if (!a.metaKey) try {
            z.Qh.set("query", a.ca.Wb)
        } catch (c) {
            b += "?q\x3d" + (0, window.encodeURIComponent)(a.ca.Wb)
        }
        return b
    };
    var ly = function () {
        z.G.call(this)
    };
    var my = function () {
        var a = (0, window.$)("#js-top-nav-link-profile"), b = (0, window.$)("#mobile-top-nav-profile-popup");
        if (z.Uj && b.length && b.children("ul").length) {
            var c = function (c) {
                c = c.target;
                b[0].contains(c) || c.contains(a[0]) || d()
            }, d = function () {
                a.parent().removeClass("open");
                b.hide();
                (0, window.$)(window.document.body).off("mousedown", c)
            };
            a.click(function (f) {
                f.preventDefault();
                b.is(":visible") ? d() : (a.parent().addClass("open"), b.show(), (0, window.$)(window.document.body).mousedown(c))
            }).attr("href", "javascript:;");
            b.find(".slide-up").click(d)
        }
    };
    var ny = function () {
        z.R.call(this)
    };
    var oy = function () {
        z.Bj.call(this, null, !1);
        this.zD = "zh-lightbox-showing";
        this.lW = "zh-lightbox-thumb";
        this.hc()
    };
    var Ir = function () {
        if (window.console) {
            var a = Array.from(arguments);
            a.unshift("[" + (new Date).toLocaleTimeString() + "]:\t");
            window.console.log.apply ? window.console.log.apply(window.console, a) : window.console.log(a[0], a.slice(1).join(","))
        }
    };
    z.py = function (a) {
        a = void 0 === a ? {} : a;
        z.R.call(this);
        if (void 0 === typeof a.Da) throw Error("$form option is required.");
        var b = Object.assign({
            Ko: "FormItem", iw: function () {
                return window.Promise.resolve()
            }, Tq: window.$.noop, JK: !0, zF: {}, validator: function (a) {
                return z.qy(b.Da, a)
            }
        }, a);
        this.wf = b;
        this.Da = b.Da;
        this.w(b.Da[0])
    };
    var ry = function (a, b) {
        var c = a.wf, d = c.Da, f = c.Ko;
        b && (z.ta(b) ? Object.entries(b).forEach(function (a) {
                var b = z.ia(a);
                a = b.next().value;
                var b = b.next().value, c = d.find("[name\x3d" + a + "]").first().addClass("is-error");
                a = '\x3cp class\x3d"' + f + '-error"\x3e' + b + "\x3c/p\x3e";
                b = c.parents("\n          ." + f + ", ." + f + "-section,\n          ." + f + "-uploader, ." + f + "-radio-group\n        ").first().addClass("is-error");
                c = b.find("." + f + "-error-container");
                c.length ? c.html(a) : (b.hasClass("" + f) && (b = b.find("." + f + "-content")), b.append(a))
            }) :
            d.find('[type\x3d"submit"]').after('\x3cspan class\x3d"' + f + '-error is-inline"\x3e\n          ' + (b || "服务器错误，请稍后重试...") + "\n        \x3c/span\x3e").parents("." + f).addClass("is-error"))
    };
    z.qy = function (a, b) {
        b = void 0 === b ? {} : b;
        for (var c = window.$.unique(a.find("input, select").filter(function () {
            return (0, window.$)(this).data("required")
        }).map(function () {
            return (0, window.$)(this).attr("name")
        }).get()), d = {}, c = z.ia(c), f = c.next(); !f.done; f = c.next()) {
            var f = f.value, g = b[f];
            if (z.na(g) && 0 === g.length || !g) {
                d[f] = "必填项";
                var g = a.find("[name\x3d" + f + "]"), h = g.data("empty-tip");
                h && (d[f] = "placeholder" === h ? g.attr("placeholder") : h)
            }
        }
        return window.$.isEmptyObject(d) ? null : d
    };
    var sy = function (a, b) {
        function c(a) {
            a = a.val();
            d.cH && (a = window.$.trim(a));
            d.CR && window.$.isNumeric(a) && (a = Number(a));
            return a
        }

        var d = Object.assign({
            cH: !1, CR: !1, VO: function (a) {
                return a.attr("name")
            }
        }, b), f = {};
        a.find("select, textarea, input").not("\n      input[type\x3dcheckbox]:not(:checkbox),\n      input[type\x3dradio]:not(:checked),\n      input[name^\x3d_]\n    ").each(function () {
            var b = (0, window.$)(this);
            if (!b.is(":disabled") && b.parents("form").first().is(a)) {
                var h = d.VO(b);
                if (h) if (b.is('[type\x3d"checkbox"]')) "undefined" ===
                typeof f[h] && (f[h] = []), f[h].push(c(b)); else if (b.is('[type\x3d"file"]')) {
                    if ("undefined" === typeof f[h] && (f[h] = []), b = b.data("file") || b.val()) {
                        try {
                            b = JSON.parse(b)
                        } catch (k) {
                        }
                        f[h].push(b)
                    }
                } else f[h] = c(b)
            }
        });
        return f
    };
    var ty = function (a, b) {
        z.G.call(this);
        this.h = a;
        var c = z.jf(this.h) ? this.h : this.h ? this.h.body : null;
        this.zR = !!c && z.Mg(c);
        this.sH = z.F(this.h, z.B ? "DOMMouseScroll" : "mousewheel", this, b)
    };
    var uy = function (a, b) {
        return z.D && (z.Uc || z.Kl) && 0 != a % b ? a : a / b
    };
    var vy = function (a, b, c, d) {
        z.Pc.call(this, b);
        this.type = "mousewheel";
        this.detail = a;
        this.deltaX = c;
        this.deltaY = d
    };
    var wy = function () {
        z.G.call(this)
    };
    var xy = function (a, b) {
        return null == a.Ak ? b : a.Wo + Math.round((b - a.Wo) / a.Ak) * a.Ak
    };
    var yy = function (a, b) {
        z.R.call(this, a);
        this.WC = null;
        this.Bb = new wy;
        this.IR = b || z.Gl;
        z.F(this.Bb, "change", this.bG, !1, this)
    };
    var zy = function (a, b) {
        b ? (a.v().g(a.le, "beforedrag", a.ps).g(a.Uf, "beforedrag", a.ps).g(a.le, ["start", "end"], a.As).g(a.Uf, ["start", "end"], a.As).g(a.vb, "key", a.mf).g(a.m(), "click", a.ws).g(a.m(), "mousedown", a.ws), a.QG && Ay(a, !0)) : (a.v().qa(a.le, "beforedrag", a.ps).qa(a.Uf, "beforedrag", a.ps).qa(a.le, ["start", "end"], a.As).qa(a.Uf, ["start", "end"], a.As).qa(a.vb, "key", a.mf).qa(a.m(), "click", a.ws).qa(a.m(), "mousedown", a.ws), a.QG && Ay(a, !1))
    };
    var By = function (a, b) {
        var c = z.Cg(b, a.m());
        return "vertical" == a.Nb ? c.y : a.ae && a.qd() ? a.m().clientWidth - c.x : c.x
    };
    var Cy = function (a, b) {
        var c = a.Ec(), d = a.Vc();
        if ("vertical" == a.Nb) {
            var f = a.cb.offsetHeight, g = a.m().clientHeight - f, f = By(a, b) - f / 2;
            return (d - c) * (g - f) / g + c
        }
        f = a.cb.offsetWidth;
        g = a.m().clientWidth - f;
        f = By(a, b) - f / 2;
        return (d - c) * f / g + c
    };
    var Dy = function (a, b) {
        if (b == a.cb) return a.Bb.X();
        if (b == a.Gd) return a.Bb.X() + a.Bb.hi();
        throw Error("Illegal thumb element. Neither minThumb nor maxThumb");
    };
    var Ey = function (a, b) {
        Math.abs(b) < a.$n() && (b = (0, z.Ql)(b) * a.$n());
        var c = Dy(a, a.cb) + b, d = Dy(a, a.Gd) + b, c = Zo(c, a.Ec(), a.Vc() - a.zt),
            d = Zo(d, a.Ec() + a.zt, a.Vc());
        Fy(a, c, d - c)
    };
    var Gy = function (a, b, c) {
        var d = xy(a.Bb, c);
        c = b == a.cb ? d : a.Bb.X();
        b = b == a.Gd ? d : a.Bb.X() + a.Bb.hi();
        c >= a.Ec() && b >= c + a.zt && a.Vc() >= b && Fy(a, c, b - c)
    };
    var Fy = function (a, b, c) {
        a.Ec() <= b && b <= a.Vc() - c && a.zt <= c && c <= a.Vc() - b && (b != a.X() || c != a.hi()) && (a.Bb.Ct = !0, a.Bb.Bu(0), a.Bb.Ea(b), a.Bb.Bu(c), a.Bb.Ct = !1, a.bG())
    };
    var Hy = function (a, b) {
        return b <= a.Bb.X() + a.Bb.hi() / 2 ? a.cb : a.Gd
    };
    var Iy = function (a) {
        if (a.cb && !a.Bo) {
            var b = Jy(a, Dy(a, a.cb)), c = Jy(a, Dy(a, a.Gd));
            if ("vertical" == a.Nb) a.cb.style.top = b.y + "px", a.Gd.style.top = c.y + "px", a.Sb && (b = Ky(c.y, b.y, a.cb.offsetHeight), a.Sb.style.top = b.offset + "px", a.Sb.style.height = b.size + "px"); else {
                var d = a.ae && a.qd() ? "right" : "left";
                a.cb.style[d] = b.x + "px";
                a.Gd.style[d] = c.x + "px";
                a.Sb && (b = Ky(b.x, c.x, a.cb.offsetWidth), a.Sb.style[d] = b.offset + "px", a.Sb.style.width = b.size + "px")
            }
        }
    };
    var Ky = function (a, b, c) {
        var d = Math.ceil(c / 2);
        return {offset: a + d, size: Math.max(b - a + c - 2 * d, 0)}
    };
    var Jy = function (a, b) {
        var c = new z.Ge;
        if (a.cb) {
            var d = a.Ec(), f = a.Vc(), f = b == d && d == f ? 0 : (b - d) / (f - d);
            "vertical" == a.Nb ? (d = a.m().clientHeight - a.cb.offsetHeight, f = Math.round(f * d), c.x = Ly(a, a.cb), c.y = d - f) : (c.x = Math.round(f * (a.m().clientWidth - a.cb.offsetWidth)), c.y = a.cb.offsetTop)
        }
        return c
    };
    var My = function (a, b) {
        b = Zo(b, a.Ec(), a.Vc());
        a.Bo && (a.En.stop(!0), a.En.H());
        var c = new Uw, d, f = Hy(a, b), g = a.X(), h = a.hi(), k = Dy(a, f), m = Jy(a, k);
        d = a.$n();
        Math.abs(b - k) < d && (b = Zo(k + (b > k ? d : -d), a.Ec(), a.Vc()));
        Gy(a, f, b);
        k = Jy(a, Dy(a, f));
        d = "vertical" == a.Nb ? [Ly(a, f), k.y] : [k.x, f.offsetTop];
        m = new fr(f, [m.x, m.y], d, 100);
        m.Lg(a.ae);
        c.add(m);
        a.Sb && Ny(a, f, g, h, k, c);
        a.WC && (f = a.WC.pY(g, b, 100), z.y(f, function (a) {
            c.add(a)
        }));
        a.En = c;
        a.v().g(c, "end", a.xO);
        a.Bo = !0;
        c.play(!1)
    };
    var Ny = function (a, b, c, d, f, g) {
        var h = Jy(a, c), k = Jy(a, c + d);
        c = h;
        d = k;
        b == a.cb ? c = f : d = f;
        "vertical" == a.Nb ? (b = Ky(k.y, h.y, a.cb.offsetHeight), h = Ky(d.y, c.y, a.cb.offsetHeight), f = new fr(a.Sb, [Ly(a, a.Sb), b.offset], [Ly(a, a.Sb), h.offset], 100), b = new ir(a.Sb, b.size, h.size, 100)) : (b = Ky(h.x, k.x, a.cb.offsetWidth), h = Ky(c.x, d.x, a.cb.offsetWidth), f = new fr(a.Sb, [b.offset, a.Sb.offsetTop], [h.offset, a.Sb.offsetTop], 100), b = new hr(a.Sb, b.size, h.size, 100));
        f.Lg(a.ae);
        b.Lg(a.ae);
        g.add(f);
        g.add(b)
    };
    var Oy = function (a) {
        var b = a.m();
        b && (z.cj(b, "valuemin", a.Ec()), z.cj(b, "valuemax", a.Vc()), z.cj(b, "valuenow", a.X()), z.cj(b, "valuetext", a.IR(a.X()) || ""))
    };
    var Ay = function (a, b) {
        b ? (a.dk || (a.dk = new ty(a.m())), a.v().g(a.dk, "mousewheel", a.YF)) : a.v().qa(a.dk, "mousewheel", a.YF)
    };
    var Ly = function (a, b) {
        return a.ae ? z.nj(b) : b.offsetLeft
    };
    var Py = function (a, b) {
        yy.call(this, a, b);
        this.Bb.Bu(0)
    };
    var Qy = function (a) {
        z.R.call(this);
        this.options = window.$.extend({}, this.defaults, a)
    };
    var Ry = function (a, b) {
        a.zoom = b;
        Sy(a, a.Je.yq / 2 + a.Je.x, a.Je.ao / 2 + a.Je.y)
    };
    var Sy = function (a, b, c) {
        var d = a.zoom;
        a.Je = {yq: a.options.wg / d, ao: a.options.vg / d, x: b - a.options.wg / d / 2, y: c - a.options.vg / d / 2};
        Ty(a)
    };
    var Ty = function (a) {
        var b = a.zoom, c = Zo(a.options.Pm - a.Je.x * b, a.options.wg + a.options.Pm - a.Is * b, a.options.Pm),
            d = Zo(a.options.Qm - a.Je.y * b, a.options.vg + a.options.Qm - a.Hs * b, a.options.Qm),
            f = {width: b * a.Is, height: b * a.Hs, left: c, top: d};
        a.Fq.css(f);
        a.uv.css(f);
        a.Je.x = (a.options.Pm - c) / b;
        a.Je.y = (a.options.Qm - d) / b
    };
    z.Uy = function (a, b, c) {
        z.R.call(this);
        this.er = a || z.Vy;
        this.aF = b;
        this.vJ = c || "l"
    };
    var Wy = function () {
        return !!window.FileReader
    };
    var Xy = function (a) {
        a.Tl = a.Hy = a.Mj = "";
        if (a.dialog) a.dialog.ha(); else {
            a.dialog = new z.V(null);
            a.dialog.Na("修改图片");
            var b = z.Lm.Te, c = z.Lm.Ag, d = new z.Oj;
            d.set(b, "取消", !1, !0).set(c, "确定", !0);
            z.Lj(a.dialog, d);
            a.v().g(a.dialog, z.Nj, function (a) {
                if (a.key === c) {
                    if (Wy()) {
                        var b = this.Ow;
                        a = (0, window.$)("\x3ccanvas\x3e\x3c/canvas\x3e");
                        a.attr("width", b.options.wg);
                        a.attr("height", b.options.vg);
                        var d = a[0];
                        (0, window.$)(window.document.body).append(d);
                        var k = a[0].getContext("2d"), m = b.Je;
                        k.drawImage(b.Js, m.x, m.y, m.yq, m.ao,
                            0, 0, b.options.wg, b.options.vg);
                        b = d.toDataURL("image/png");
                        a.remove();
                        a = b
                    } else a = this.Ow.Je;
                    this.Mj = a;
                    Yy(this);
                    this.dialog.G(!1);
                    return !1
                }
            })
        }
        Zy(a.dialog.S());
        a.dialog.G(!0);
        z.W.add(a.dialog.h, "avatar-edit-dialog")
    };
    var $y = function (a) {
        var b = a.input.cloneNode();
        z.Po(b, a.input);
        a.input = b;
        a.v().g(a.input, "change", a.Hc)
    };
    var Yy = function (a) {
        if (a.Mj && (Wy() || a.Hy)) {
            a.dispatchEvent("beforepost");
            var b = {type: a.er, dest_id: a.er === z.Vy ? z.T[3] : a.aF, return_size: a.vJ};
            if (Wy()) {
                var c = new window.FormData;
                c.append("handle_mode", "upload");
                c.append("picture", az(a.Mj.replace(/data\:image\/\w{3,4};base64,/, "")), a.file.name);
                window.$.each(b, function (a, b) {
                    c.append(a, b)
                });
                window.$.ajax({
                    url: a.ZB,
                    data: c,
                    method: "post",
                    processData: !1,
                    contentType: !1,
                    success: window.$.proxy(a.lE, a),
                    dataType: "json",
                    xhrFields: {withCredentials: !0},
                    crossDomain: !0
                })
            } else {
                var b =
                        window.$.extend(b, {
                            handle_mode: "resize",
                            x: Math.round(a.Mj.x),
                            y: Math.round(a.Mj.y),
                            height: Math.round(a.Mj.ao),
                            width: Math.round(a.Mj.yq),
                            hashval: a.Hy
                        }),
                    d = '\x3cform target\x3d"av_up_frame" style\x3d"display:none;" method\x3d"post" action\x3d"' + a.ZB + '"\x3e';
                window.$.each(b, function (a, b) {
                    d += '\x3cinput type\x3d"hidden" name\x3d"' + a + '" value\x3d"' + b + '" /\x3e'
                });
                d += "\x3c/form\x3e";
                b = (0, window.$)(d);
                b.appendTo(a.h);
                b[0].submit()
            }
        }
    };
    var Zy = function (a) {
        var b = (0, window.$)("\x3cdiv class\x3d'new-avatar-editor-loading'\x3e\x3cdiv\x3e\x3cspan\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv\x3e正在上传...\x3c/div\x3e\x3c/div\x3e");
        a = (0, window.$)(a);
        a.html("");
        a.append(b)
    };
    var az = function (a) {
        var b, c;
        c = "image/png";
        b = b || 512;
        a = (0, window.atob)(a);
        for (var d = [], f = 0; f < a.length; f += b) {
            for (var g = a.slice(f, f + b), h = Array(g.length), k = 0; k < g.length; k++) h[k] = g.charCodeAt(k);
            g = new window.Uint8Array(h);
            d.push(g)
        }
        return new window.Blob(d, {type: c})
    };
    z.bz = function (a) {
        z.R.call(this);
        this.WT = Object.assign({xi: window.$.noop}, a)
    };
    z.cz = function (a, b, c, d) {
        z.ex.call(this, a, b);
        this.Mo = c ? 5 : 0;
        this.mA = d || void 0
    };
    var dz = function (a, b) {
        a & 48 && (b ^= 2);
        a & 192 && (b ^= 1);
        return b
    };
    var ez = function () {
    };
    var fz = function (a, b, c) {
        Vp.call(this, a, c || ez.ba(), b);
        this.Tb(1, !1);
        this.Tb(2, !1);
        this.Tb(4, !1);
        this.Tb(32, !1);
        this.N = 1
    };
    var gz = function () {
        this.Bw = []
    };
    var hz = function (a, b) {
        var c = a.Bw[b];
        if (!c) {
            switch (b) {
                case 0:
                    c = a.U() + "-highlight";
                    break;
                case 1:
                    c = a.U() + "-checkbox";
                    break;
                case 2:
                    c = a.U() + "-content"
            }
            a.Bw[b] = c
        }
        return c
    };
    var iz = function (a, b, c) {
        a = hz(a, 2);
        return c.B("DIV", a, b)
    };
    var jz = function (a, b) {
        var c = a.S(b);
        if (c) {
            var c = c.firstChild, d = hz(a, 1);
            return !!c && z.jf(c) && z.gj(c, d)
        }
        return !1
    };
    var kz = function (a, b, c, d) {
        Np(a, c, b.ki());
        Op(a, b, c);
        d != jz(a, c) && (z.uo(c, "goog-option", d), c = a.S(c), d ? (a = hz(a, 1), c.insertBefore(b.K().B("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
    };
    z.lz = function (a, b, c, d) {
        Vp.call(this, a, d || gz.ba(), c);
        this.Ea(b)
    };
    var mz = function () {
    };
    z.nz = function (a, b) {
        Vp.call(this, null, a || mz.ba(), b);
        this.Tb(1, !1);
        this.Tb(2, !1);
        this.Tb(4, !1);
        this.Tb(32, !1);
        this.N = 1
    };
    var oz = function (a) {
        this.ew = a || "menu"
    };
    z.pz = function (a) {
        z.nz.call(this, mz.ba(), a)
    };
    z.qz = function (a, b) {
        z.Yr.call(this, rz, b || oz.ba(), a);
        this.Oe(!1)
    };
    var sz = function (a, b, c, d) {
        z.cz.call(this, a, b, c || d);
        (c || d) && this.xm(65 | (d ? 32 : 132))
    };
    var tz = function () {
    };
    var uz = function (a, b) {
        if (a) for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
            d = b ? c.nextSibling : c.previousSibling;
            if (3 == c.nodeType) {
                var f = c.nodeValue;
                if ("" == (0, z.ab)(f)) a.removeChild(c); else {
                    c.nodeValue = b ? z.lp(f) : z.kp(f);
                    break
                }
            } else break;
            c = d
        }
    };
    var vz = function () {
    };
    var wz = function (a, b, c) {
        return c.B("DIV", "goog-inline-block " + (b + "-caption"), a)
    };
    z.xz = function (a, b, c, d, f) {
        z.bq.call(this, a, c || vz.ba(), d);
        this.Tb(64, !0);
        this.bk = new sz(null, 5);
        b && this.th(b);
        this.IH = null;
        this.ma = new z.td(500);
        !z.Ui && !z.Vj || z.E("533.17.9") || (this.Xs = !0);
        this.hS = f || oz.ba()
    };
    var yz = function (a) {
        a.IH = new z.pg(7, 0, 7, 0)
    };
    z.zz = function (a) {
        a.bk.xm && a.bk.xm(33)
    };
    var Az = function (a) {
        if (a.ka.wa) {
            var b = a.bk;
            a.bk.element = a.kU || a.m();
            var c = a.ka.m();
            a.ka.V() || (c.style.visibility = "hidden", z.Q(c, !0));
            !a.Tt && a.bk.Yn && a.bk.Yn() & 32 && (a.Tt = z.Hg(c));
            b.ha(c, b.Ze ^ 1, a.IH, a.Tt);
            a.ka.V() || (z.Q(c, !1), c.style.visibility = "visible")
        }
    };
    var Bz = function (a, b, c) {
        var d = a.v();
        c = c ? d.g : d.qa;
        c.call(d, b, "action", a.io);
        c.call(d, b, "close", a.hy);
        c.call(d, b, "highlight", a.ny);
        c.call(d, b, "unhighlight", a.wy)
    };
    var Cz = function (a, b) {
        var c = a.v();
        (b ? c.g : c.qa).call(c, a.m(), "keydown", a.RP)
    };
    var Dz = function (a, b) {
        var c = a.m(), d = z.ej(b, "activedescendant"), d = z.Je(b).getElementById(d) || b;
        if (!d.id) {
            var f = z.Vg.ba();
            d.id = z.Wg(f)
        }
        wo(c, d);
        z.cj(c, "owns", d.id)
    };
    var Ez = function (a, b) {
        this.Yh = a instanceof z.Ge ? a : new z.Ge(a, b)
    };
    var Fz = function (a, b) {
        Ez.call(this, a, b)
    };
    z.Gz = function (a, b) {
        z.qz.call(this, a, b);
        this.$m = !0;
        this.Oe(!0);
        this.G(!1, !0);
        this.Ff = new z.Rd
    };
    z.Hz = function (a, b, c, d, f) {
        var g = a.V();
        a.UG() && a.rW ? a.hide() : (a.Qf = f || null, a.dispatchEvent("beforeshow") && (c = "undefined" != typeof c ? c : 4, g || (a.m().style.visibility = "hidden"), z.Q(a.m(), !0), b.ha(a.m(), c, d), g || (a.m().style.visibility = "visible"), a.xb(-1), a.G(!0)))
    };
    var Iz = function (a, b) {
        for (var c = a.Ff.ld(), d = 0; d < c.length; d++) {
            var f = a.Ff.get(c[d]);
            if (f.h == b.currentTarget) {
                a.VJ(f, b.clientX, b.clientY);
                b.preventDefault();
                b.stopPropagation();
                break
            }
        }
    };
    var Jz = function () {
        this.Bw = []
    };
    var Kz = function (a, b, c) {
        var d = b.K().B("SPAN");
        d.className = "goog-submenu-arrow";
        Lz(b, d);
        a.S(c).appendChild(d)
    };
    var Lz = function (a, b) {
        a.qd() ? (z.hj(b, "goog-submenu-arrow-rtl"), z.mf(b, a.Uq ? "◄" : "►")) : (z.jj(b, "goog-submenu-arrow-rtl"), z.mf(b, a.Uq ? "►" : "◄"))
    };
    var Mz = function (a, b, c, d) {
        z.lz.call(this, a, b, c, d || Jz.ba())
    };
    var Nz = function (a) {
        a.Xd && z.wd(a.Xd);
        a.lB && z.wd(a.lB)
    };
    var Oz = function (a) {
        z.bh(a.getParent(), function (a) {
            a != this && "function" == typeof a.Ig && (a.Ig(), Nz(a))
        }, a)
    };
    var Pz = function (a, b) {
        !b && a.Ya() && a.Ya().xb(-1);
        a.dispatchEvent(yo(64, b));
        var c = a.Ya();
        b != a.Jz && z.uo(a.m(), "goog-submenu-open", b);
        if (b != c.V() && (b && (c.wa || c.render(), c.xb(-1)), c.G(b), b)) {
            var c = new z.cz(a.m(), a.Uq ? 6 : 4, a.xR), d = a.Ya(), f = d.m();
            d.V() || (f.style.visibility = "hidden", z.Q(f, !0));
            c.ha(f, a.Uq ? 4 : 6);
            d.V() || (z.Q(f, !1), f.style.visibility = "visible")
        }
        a.Jz = b
    };
    var Qz = function (a, b, c) {
        var d = a.v();
        (c ? d.g : d.qa).call(d, b, "enter", a.KS)
    };
    z.Rz = function () {
        z.G.call(this);
        this.sa = null;
        this.Xa = 0;
        this.xz = [];
        this.mt = [];
        this.MB = "最多输入 20 字";
        this.bx = "最多输入 256 字"
    };
    var Sz = function (a, b, c) {
        a.sa || (a.sa = new z.V(null), z.Lj(a.sa, null), a.sa.Na(b || ""), c && (a.sa.S().innerHTML = c), a.v().g(a.sa, "afterhide", a.bi))
    };
    var Tz = function (a, b, c) {
        var d = z.L("zh-fav-list-item-place-holder");
        d && z.Q(d, !1);
        a.DA = b[5] ? "" : z.O("span", "zm-fav-list-item-lock", [z.O("i", "icon icon-lock")]);
        d = z.O("span", "zm-favo-list-item-title");
        z.mf(d, b[1]);
        d = z.O("a", {
            "class": "zg-r5px zm-favo-list-item-link",
            href: "javascript:;"
        }, [a.DA, d, z.O("span", {
            className: "meta zg-gray",
            innerHTML: '\x3cspan class\x3d"num"\x3e' + b[3] + '\x3c/span\x3e 条答案 \x3cspan class\x3d"zg-bull"\x3e•\x3c/span\x3e ' + b[4] + " 人关注"
        })]);
        a.DA && a.DA.setAttribute("data-tip", "s$t$私密收藏夹");
        d.setAttribute("data-lid", b[0]);
        z.A(a.mt, b[0]) && z.W.add(d, "zm-favo-list-item-link-active");
        b = z.N("zm-favo-list-item-link", a.dh);
        c && b ? z.af(d, b) : a.dh.appendChild(d)
    };
    var Uz = function (a, b) {
        if (a.Xa !== b && a.dh) {
            var c = z.Qo("zm-favo-list-item-link", a.dh);
            z.y(c, function (a) {
                z.W.remove(a, "zm-favo-list-item-link-active")
            }, a)
        }
        a.Xa = b
    };
    z.Vz = function (a, b, c, d) {
        var f = z.L("zh-fav-head-title"), g = z.L("zh-fav-head-description-source");
        b = b || (f ? z.of(f) : "");
        c = c || (g ? z.of(g) : "");
        a.qE = d || z.kh;
        Wz(a);
        a.cc();
        Xz(a, 1);
        z.Q(a.xB, !1);
        a.rr.innerHTML = "取消";
        a.Ov.innerHTML = "保存";
        a.sa.Na("编辑收藏夹");
        a.si.value = ro(b);
        a.Zj.value = ro(c);
        a.qE[1] ? (z.Q(a.$I, !1), z.Q(a.YI, !1), z.Q(a.gH, !1)) : (z.Q(a.$I, !0), z.Q(a.YI, !0), z.Q(a.gH, !0), a.YG.setAttribute("checked", !0));
        a.ZQ = Yz(a);
        a.sa.G(!0);
        a.Xl = !0
    };
    var Zz = function (a) {
        var b = z.Qo("zm-favo-list-item-link", a.dh);
        z.y(b, function (a) {
            var b = a.getAttribute("data-lid");
            z.W.remove(a, "zm-favo-list-item-link-active");
            z.A(this.mt, +b) && z.W.add(a, "zm-favo-list-item-link-active")
        }, a)
    };
    var Wz = function (a) {
        a.lO ? Zz(a) : a.B()
    };
    var Xz = function (a, b) {
        var c = !!b;
        a.sa.Na(0 === b ? "添加到收藏夹" : "创建新收藏夹");
        z.Q(a.PR, !c);
        z.Q(a.Ox, c);
        (0, window.$)(a.rx).text("").hide();
        new z.vk(a.si, a.MB);
        new z.vk(a.Zj, a.bx);
        if (1 === b) (0, window.$)(a.Ox).on("change.FavoDiag", "input, textarea, select", function () {
            a.Mg()
        }); else (0, window.$)(a.Ox).off("change.FavoDiag"), a.bi()
    };
    var Yz = function (a) {
        var b = new z.Fr, c = z.sr(a.si.value), d = z.Na(a.Zj.value === a.bx ? "" : a.Zj.value);
        d || (d = -1);
        b.add("title", c);
        b.add("description", d);
        b.add("is_public", a.ZG.checked ? 1 : 0);
        return b
    };
    var $z = function (a) {
        a.sa.G(!1);
        a.dispatchEvent(aA);
        z.Y.tb({
            type: "ga_click_collect_answer",
            data: {count: (0, window.$)(".zm-favo-list-item-link-active", a.dh).length}
        })
    };
    var bA = function (a, b, c, d) {
        (0, window.$)(c).addClass("btn-pending").text(d ? "保存中" : "创建中");
        a.v().ya(b, "complete", function () {
            (0, window.$)(c).removeClass("btn-pending").text(d ? "保存" : "确认创建")
        })
    };
    var cA = function (a, b, c) {
        c = c || (b ? "保存失败，请重试" : "创建失败，请重试");
        (0, window.$)(a).text(c).show()
    };
    var dA = function (a, b) {
        z.xi({
            category: "collect",
            action: a,
            label: -1 < window.location.pathname.indexOf("collection") ? "collections_sidebar_create_collection" : "collect_answer_box",
            attributes: b
        })
    };
    z.eA = function (a, b, c) {
        z.lz.call(this, a, b, c);
        this.Kp(!0)
    };
    var fA = function (a) {
        z.R.call(this);
        this.Mh = a;
        this.gl = null;
        this.vA = []
    };
    var gA = function (a, b) {
        z.Db(hA, function (a, d) {
            var f = new z.eA(a);
            f.Ea(d);
            f.Kc(d === this.gl);
            this.vA.push(f);
            b.Fa(f)
        }, a)
    };
    var iA = function (a) {
        z.X.confirm("你确定要删除自己的答案吗？", "答案内容不会被永久删除，你还可以撤消本次删除操作。", function (b) {
            b && window.$.post("/answer/remove", {aid: a.Mh.jb}).then(function () {
                return a.Mh.Jj()
            })
        })
    };
    var jA = function (a) {
        a.vA.forEach(function (b) {
            b.Kc(b.X() === a.gl)
        })
    };
    var kA = function (a, b) {
        window.$.post("/answer/comment_permission", {answer_id: a.Mh.jb, permission: b}).then(function (c) {
            c && !c.r && (a.gl = b, jA(a), a.dispatchEvent(lA))
        })
    };
    var mA = function (a) {
        var b = null;
        try {
            b = a.cssRules || a.rules
        } catch (c) {
            if (15 == c.code) throw c.styleSheet = a, c;
        }
        return b
    };
    var nA = function (a) {
        var b = [];
        a = a || window.document.styleSheets;
        var c = z.ka(void 0) ? void 0 : !1;
        if (a.imports && a.imports.length) for (var d = 0, f = a.imports.length; d < f; d++) z.wb(b, nA(a.imports[d])); else if (a.length) for (d = 0, f = a.length; d < f; d++) z.wb(b, nA(a[d])); else {
            var g = mA(a);
            if (g && g.length) for (var d = 0, f = g.length, h; d < f; d++) h = g[d], h.styleSheet && z.wb(b, nA(h.styleSheet))
        }
        !(a.type || a.rules || a.cssRules) || a.disabled && !c || b.push(a);
        return b
    };
    var oA = function () {
        this.Jn = "";
        this.rh = []
    };
    var pA = function (a, b, c) {
        var d = [], f;
        for (f in b) {
            var g = b[f];
            g && d.push(f, ":", g, c ? " !important" : "", ";")
        }
        a.Jn = d.join("")
    };
    var qA = function (a) {
        this.Zv = {};
        if (a) {
            var b = [];
            a = a.split(/\s+/gm);
            for (var c = 0; c < a.length; c++) if (a[c]) {
                var d = new rA(a[c]);
                b.push(d)
            }
            this.zi = b
        }
    };
    var rA = function (a) {
        var b = sA[a];
        if (b) return b;
        for (var b = a.match(/[#\.]/) ? a.split(/(?=[#\.])/) : [a], c = {}, d = 0; d < b.length; d++) {
            var f = b[d];
            "." == f.charAt(0) ? c.className = f.substring(1, f.length) : "#" == f.charAt(0) ? c.id = f.substring(1, f.length) : c.tagName = f.toUpperCase()
        }
        this.IG = a;
        this.cS = c;
        this.iK = {};
        sA[a] = this
    };
    var tA = function (a, b) {
        var c = b.uid, d = a.iK[c];
        if ("undefined" != typeof d) return d;
        var f = a.cS, d = f.tagName, g = f.className, f = f.id, h = !0;
        d && "*" != d && d != b.nodeName ? h = !1 : f && f != b.id ? h = !1 : g && !b.wN[g] && (h = !1);
        return a.iK[c] = h
    };
    var uA = function (a) {
        var b = z.ua(a), c = vA[b];
        if (c) return c;
        c = [];
        do {
            var d = {id: a.id, nodeName: a.nodeName};
            d.uid = z.ua(d);
            var f = {};
            if (a.className) for (var g = z.fj(a), h = 0; h < g.length; h++) f[g[h]] = 1;
            d.wN = f;
            c.unshift(d)
        } while (a = a.parentNode);
        this.aI = c;
        this.uid = z.ua(this);
        vA[b] = this
    };
    z.wA = function () {
        z.G.call(this);
        this.ec = this.Oq()
    };
    z.xA = function (a) {
        return a.F && a.F.ib
    };
    var yA = function (a) {
        return a.F && z.Gc ? (a = a.F.ib.Va(), a.scrollTo.bind(a, a.scrollX, a.scrollY)) : function () {
        }
    };
    var zA = function (a, b, c, d, f) {
        this.hF = a;
        this.sB = b;
        this.kr = c;
        this.kF = d;
        this.Bx = f || {}
    };
    var AA = function (a, b) {
        this.bX = a;
        this.mE = b
    };
    var BA = function (a, b, c, d) {
        var f = [];
        a.kr && a.sB && f.push("\x3c!DOCTYPE HTML\x3e");
        f.push('\x3chtml style\x3d"background:none transparent;min-width:0;');
        a.kr && f.push("height:", a.kF ? "100%" : "auto");
        f.push('"\x3e');
        f.push("\x3chead\x3e\x3cstyle\x3e");
        c && c.mE && f.push(c.mE);
        z.B && a.sB && f.push(" img {-moz-force-broken-image-icon: 1;}");
        f.push("\x3c/style\x3e\x3c/head\x3e");
        f.push('\x3cbody g_editable\x3d"true" hidefocus\x3d"true" ');
        z.CA && f.push("contentEditable ");
        f.push('class\x3d"editable ');
        f.push('" id\x3d"',
            a.hF, '" style\x3d"min-width:0;');
        z.B && a.kr && (f.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", a.sB ? "100%" : "auto"), a.kF ? f.push(";overflow:auto") : f.push(";overflow-y:hidden;overflow-x:auto"));
        z.ug && f.push(";outline:hidden");
        for (var g in a.Bx) f.push(";" + g + ":" + a.Bx[g]);
        f.push('"\x3e', b, "\x3c/body\x3e\x3c/html\x3e");
        a = f.join("");
        d = d.contentDocument || d.contentWindow.document;
        d.open();
        d.write(a);
        d.close()
    };
    var DA = function (a, b) {
        z.G.call(this);
        this.Ug = this.id = a;
        this.ib = null;
        this.Rb = {};
        this.Qj = {};
        for (var c in z.EA) this.Qj[c] = [];
        this.il = "";
        this.Bk = {};
        this.Bk[FA] = 1;
        this.Bk[z.GA] = 1;
        this.Jr = new Mq(this.JE, HA, this);
        this.Hr = {};
        for (var d in IA) this.Hr[IA[d]] = 0;
        z.B && (this.ue = new Mq(this.fo, JA, this));
        this.fc = new z.xd(this);
        this.cX = [];
        this.$l = z.KA;
        this.im = z.J(b || window.document);
        this.Ic = this.im.m(this.id);
        this.MO = LA;
        this.Tk = this.im.Va()
    };
    var MA = function (a) {
        var b = !(a.ctrlKey || a.metaKey) && a.keyCode in NA;
        return (a.ctrlKey || a.metaKey) && a.keyCode in OA || b
    };
    var PA = function (a, b) {
        a.$l = 2;
        a.Ha = b;
        a.ib = z.J(b);
        b.setAttribute("g_editable", "true");
        z.bj(b, "textbox")
    };
    var QA = function (a, b) {
        if (9 == b.keyCode && !a.dispatchEvent({
            type: "beforetab",
            shiftKey: b.shiftKey,
            altKey: b.altKey,
            ctrlKey: b.ctrlKey
        }) || z.B && b.metaKey && !z.E(29) && (37 == b.keyCode || 39 == b.keyCode)) return b.preventDefault(), !1;
        var c;
        (c = b.charCode) || (c = MA(b) ? !0 : !(!z.B || b.ctrlKey || b.metaKey || z.B && !b.charCode));
        a.dy = c;
        a.dy && a.ci();
        return !0
    };
    var RA = function (a, b, c) {
        var d = {};
        a = a.iu(8, b || "", d);
        z.rg(c, d);
        z.Lu(c, a)
    };
    var SA = function (a, b) {
        !TA(a, "selectionchange") && (UA[b.keyCode] || (b.ctrlKey || b.metaKey) && VA[b.keyCode]) && (a.dispatchEvent("beforeselectionchange"), a.IJ.start())
    };
    var WA = function (a, b) {
        if (!b.altKey) {
            var c = z.Uc ? b.metaKey : b.ctrlKey;
            if (c || XA[b.keyCode]) {
                var d = b.charCode || b.keyCode;
                17 != d && (d = String.fromCharCode(d).toLowerCase(), z.Uc && z.B && "`" == d && " " == b.gc.key && (d = " "), a.zo(5, b, d, c) && b.preventDefault())
            }
        }
    };
    var YA = function (a) {
        var b;
        return a.nc() && (b = a.ib) ? (a = b.Va()) && a.frameElement : null
    };
    z.ZA = function (a) {
        return (a = a.ib && a.ib.Va()) && z.vu(a)
    };
    z.$A = function (a, b, c) {
        if (!TA(a, "selectionchange")) {
            var d = z.ZA(a), d = d && d.Qb();
            a.tf = !!d && z.lf(a.m(), d);
            a.dispatchEvent("cvc");
            a.dispatchEvent({type: "selectionchange", MY: b && b.type});
            a.zo(4, b, c)
        }
    };
    z.aB = function (a, b, c) {
        b && (a.ue && Nq(a.ue), a.Bk[FA] = 1);
        c && (z.bB(a), a.Bk[z.GA] = 1)
    };
    var cB = function (a, b, c) {
        !b && a.ue && Nq(a.ue);
        a.Bk[FA] = 0;
        a.Bk[z.GA] = 0;
        b && a.fo();
        c && a.JE()
    };
    var TA = function (a, b) {
        return !!a.Bk[b] || a.Hr[b] && 500 >= (0, z.I)() - a.Hr[b]
    };
    z.bB = function (a) {
        a.ue && Nq(a.ue);
        Nq(a.Jr)
    };
    var dB = function (a) {
        z.tf(a.target, "A") && a.preventDefault()
    };
    z.eB = function (a) {
        var b = a.m();
        if (b) {
            var c = z.Du(b);
            b == c ? z.zu(b, 0).select() : z.Qu(c, !0);
            z.$A(a)
        }
    };
    var fB = function (a) {
        if (!z.ka(a.hz) && (a.hz = !1, z.C && a.nc())) {
            for (var b = a.im.Va(); b != b.parent;) try {
                b = b.parent
            } catch (c) {
                break
            }
            b = b.location;
            a.hz = "https:" == b.protocol && -1 == b.search.indexOf("nocheckhttps")
        }
        return a.hz
    };
    z.gB = function (a, b) {
        DA.call(this, a, b)
    };
    var hB = function (a) {
        if (a.Tp ? 0 : a.Tp = !0) {
            var b = YA(a), c = a.m(), d = !1;
            if (b && c) {
                var f, g = b.parentNode, h = g.offsetWidth;
                (0, window.parseInt)(Fo(b, "width"), 10) != h && (f = z.Pg(c), b.style.width = h + "px", c.style.width = h - f.left - f.right + "px", d = !0);
                g = g.offsetHeight;
                a.Fo() && (0, window.parseInt)(Fo(b, "height"), 10) != g && (f || (f = z.Pg(c)), b.style.height = g + "px", c.style.height = g - f.top - f.bottom + "px", d = !0)
            }
            a.Tp = !1;
            d && a.dispatchEvent("ifrsz")
        }
    };
    var iB = function (a) {
        a.m() && (hB(a), a.Fo() || a.pB())
    };
    z.jB = function (a, b) {
        var c = a.split("!");
        this.type = c[0] + "!";
        this.namespace = c[1];
        this.yc = new kB(b)
    };
    var kB = function (a) {
        this.category = a.category;
        this.action = a.action;
        this.label = a.label;
        this.value = a.value
    };
    var lB = function () {
        z.G.call(this)
    };
    z.mB = function () {
        z.G.call(this)
    };
    var nB = function (a, b, c) {
        window.$.post(a, b).done(function (a) {
            if (a.r) z.X.message(a.msg); else {
                var b = a.msg;
                (b = b && b.redirect) ? window.location.href = b : (z.X.message("操作成功！"), c && c(a))
            }
        })
    };
    var oB = function (a, b) {
        var c = window.$.extend({action: "get_member_info", reason: b.value}, a.zO);
        return window.$.post("/manage", c).then(function (a) {
            return z.Ka("用户已被警告 %s 次，禁言 %s 次", a.warn_num, a.ban_num)
        })
    };
    z.pB = function (a) {
        a = void 0 === a ? {} : a;
        "post" === a.type && (a.type = "article");
        this.type = a.type;
        this.id = a.id;
        this.submit = z.Jq(this.submit.bind(this), !0);
        this.render = z.Jq(this.render.bind(this), !0)
    };
    var qB = function (a) {
        if (a) {
            var b = z.X({
                title: "举报成功",
                content: '\x3cp\x3e您的举报正在等待人工审核，我们会在 24 小时内审核完成\x3cbr\x3e处理完成后会「私信」通知您\x3cbr\x3e您也可以进入 \x3ca href\x3d"/community/report"\x3e社区服务中心\x3c/a\x3e 查看实时处理进度\x3c/p\x3e\x3cp style\x3d"margin-top: 1em"\x3e\x3clabel\x3e\x3cinput type\x3d"checkbox" name\x3d"neverRemind"\x3e不再提醒\x3c/label\x3e\x3c/p\x3e',
                modal: !0,
                ha: !0,
                buttons: {yes: "知道了"}
            });
            b.g(z.pk, function () {
                b.fi().querySelector("[name\x3dneverRemind]").checked && window.$.post("/community/report/noti", {cancel: !0})
            })
        } else {
            var c =
                z.X({title: "举报成功", content: "您的举报正在等待人工审核，我们会在 24 小时内审核完成", modal: !0, buttons: {}});
            (0, window.setTimeout)(function () {
                return c.G(!1)
            }, 4E3)
        }
    };
    var rB = function (a) {
        z.R.call(this);
        z.Mb(this.J = {}, this.defaults, a || {});
        this.Xm = new z.Rd;
        this.re = null
    };
    var sB = function (a, b) {
        var c = a.J, d = new z.xx(c.trigger, !1, null, b);
        d.Sp = c.OV;
        d.no = c.HQ;
        d.sh(a.dj);
        z.F(d, "trigger", function (a) {
            d.setPosition(new z.ex(a.anchor, 1))
        });
        z.F(d, "beforeshow", function (a) {
            this.re = a.target.anchor;
            this.render()
        }, !1, a);
        d.className = c.lM;
        a.MQ = d
    };
    var tB = function (a, b) {
        var c = a.J.ER, d = z.ef(a.dj), f = z.qb(d, function (a) {
            return a.getAttribute("data-action") === b
        });
        if (!f || z.W.has(f, c)) return !1;
        z.y(d, function (a) {
            z.W.remove(a, c)
        });
        z.W.add(f, c);
        return !0
    };
    var uB = function (a, b, c, d) {
        a.Xm.set(b, {name: b, R: c, Rh: d || z.p})
    };
    z.vB = function (a) {
        z.R.call(this);
        z.Mb(this.J = {}, this.defaults, a || {})
    };
    var wB = function (a) {
        var b = a.J, c = a.h;
        xB(c);
        b = yB(c, b.lG);
        b.length && (a.dispatchEvent("willScrape"), window.$.when.apply(window.$, b).always(function () {
            a.dispatchEvent("didScrape")
        }))
    };
    var zB = function (a, b, c) {
        for (; a && a !== b;) {
            if (c(a)) return a;
            a = a.parentNode
        }
    };
    var AB = function (a, b) {
        return zB(a, b, function (a) {
            return BB(a) || "CODE" === a.nodeName || "PRE" === a.nodeName
        })
    };
    var BB = function (a) {
        return "A" === a.nodeName
    };
    var xB = function (a) {
        var b = z.Jo(a, function (b) {
            return 3 === b.nodeType && !AB(b, a)
        }), c, d = z.vu(), f = d && z.Et(d);
        z.y(b, function (a) {
            var b = a.nodeValue, d = CB(b);
            d !== b && (b = z.We(d), f === a && (c = b.lastChild), z.Po(b, a))
        });
        c && z.Qu(c)
    };
    var yB = function (a, b) {
        var c = z.mb(a.getElementsByTagName("A"), function (a) {
            var b = a.getAttribute("href");
            if (b = !(!b || "#" === b) && !a.getAttribute("data-editable") && z.A(DB, a.protocol)) b = z.of(a), z.Ja(a.href, b) ? a = void 0 : (a.setAttribute("data-editable", !0), a.setAttribute("data-title", b), a = !0), b = !a;
            return b
        });
        return z.nb(c, function (c) {
            return EB(c.href).done(function (f) {
                FB(a, c, f, b)
            })
        })
    };
    var FB = function (a, b, c, d) {
        if (c && a.contains(b)) {
            d = d || {};
            var f = function (a, b, c) {
                var d = z.vu();
                if (d) {
                    var f = d.Z(), r = d.va(), w = d.la(), H = d.La();
                    z.lf(b, f) && (f = a, r = 0);
                    z.lf(b, w) && (w = a, H = 0);
                    c(function () {
                        f === a && w === a ? z.Qu(a) : z.gu(f, r, w, H).select()
                    })
                } else c(z.p)
            };
            a = {
                link: function (a, b) {
                    a.setAttribute("data-editable", !0);
                    b.title === a.href ? a.setAttribute("data-title", GB(a.hostname)) : (a.setAttribute("data-title", b.title), f(a, a, function (c) {
                        z.mf(a, b.title);
                        c()
                    }))
                }, image: function (a, b) {
                    var c = window.document.createElement("img");
                    c.src = b.src;
                    c.setAttribute("data-rawwidth", b.width);
                    c.setAttribute("data-rawheight", b.height);
                    f(c, a, function (b) {
                        z.Po(c, a);
                        b()
                    })
                }
            };
            (d = d[c.type] || a[c.type]) && d(b, c)
        }
    };
    var GB = function (a) {
        return a.split(".").slice(/(.com|.edu|.gov|.net|.org)$/.test(a) ? -2 : -3).join(".").replace(/^www\./, "") + " 的页面"
    };
    var CB = function (a) {
        return a.replace(HB, function (a) {
            z.Ja(a, "http") || (a = "http://" + a);
            return a.link(a)
        })
    };
    var IB = function (a) {
        var b = new rB({});
        uB(b, "link", "链接", function (a) {
            z.mf(a, a.href)
        });
        uB(b, "text", "文本", function (a) {
            z.mf(a, a.getAttribute("data-title"))
        });
        b.w(a);
        var c = b.Xx();
        z.hx(c, new z.pg(2, 0, 0, 0));
        z.ux(c, new z.pg(2, 0, 0, 0));
        var d = b.v();
        d.g(c, "beforeshow", function (a) {
            a = a.target.anchor;
            var c = z.of(a);
            c === a.href ? tB(b, "link") : (c !== a.getAttribute("data-title") && a.setAttribute("data-title", c), tB(b, "text"))
        }).g(c, "beforehide", function (b) {
            if ((b = b.target) && a.contains(b) && BB(b)) return !1
        });
        var f;
        d.g(c, "show", function (a) {
            f =
                a.target.anchor;
            z.W.add(f, "hover")
        }).g(c, "hide", function () {
            f && (z.W.remove(f, "hover"), f = null)
        });
        return b
    };
    z.JB = function (a, b, c) {
        z.R.call(this);
        this.id = a;
        this.type = b;
        this.Ha = null;
        this.Og = this.Wt = !1;
        this.kc = "写下你的评论…";
        this.placeholder = '\x3cp style\x3d"color:#999"\x3e' + this.kc + "\x3c/p\x3e";
        this.Yj = "";
        this.Ja = -1;
        this.Az = window.$.Deferred().resolve();
        this.AA = this.pt = null;
        this.QD = "zm-comment-box";
        this.Rd = null;
        a = KB[b];
        if (!a) throw Error("API not found");
        this.Dg = window.$.extend({}, KB._default_, a);
        this.hj = "";
        z.Mb(this.J = {}, this.defaults, c || {})
    };
    var LB = function (a) {
        return z.Jq(a, !0, function () {
            return this.hj
        })
    };
    var MB = function (a, b, c) {
        if (!z.jf(a) || "TEXTAREA" === a.nodeName) return function () {
        };
        var d = new z.vB({lG: {image: z.p}});
        d.w(a);
        b = (new z.vh).add("type", b + "_comment").add("resource_id", c);
        var f = new sv(a, {
            Vm: {source: "/people/autocomplete?" + b.toString()},
            mk: z.N("zu-main") || window.document.body
        });
        new lv(a, {NA: Cv});
        return function () {
            d.H();
            f.H()
        }
    };
    z.NB = function (a, b, c) {
        var d = z.N(a.QD, b);
        c && (a.Rd = c);
        d ? a.w(d) : (a.Wt = !0, a.render(b))
    };
    var OB = function (a) {
        z.Db({
            $C: ".load-more",
            xn: ".zm-comment-list",
            YD: ".zm-comment-form",
            Ha: ".zm-comment-editable"
        }, function (a, c) {
            this[c] = (0, window.$)(a, this.h)[0]
        }, a)
    };
    var PB = function (a) {
        a.Ha && a.Ha.setAttribute("aria-label", a.kc);
        if (z.Tm) {
            var b = a.Ha;
            b.setAttribute("contentEditable", !0);
            var c = a.oj = {
                m: function () {
                    return b
                }, Al: function () {
                    return Kr(b) ? "" : b.innerHTML
                }, Pd: function (a, c) {
                    b.innerHTML = c
                }, Wf: function () {
                    z.Pu(b)
                }
            };
            z.Bc(a, MB(c.m(), a.type, a.id))
        } else QB(a);
        a.v().g(a.Ha, ["change", "keyup"], function (a) {
            27 !== a.keyCode && (z.Hu(this.Ha) ? this.Yj = "" : this.Yj = this.Ua())
        }).g(a.oj.m(), "focus", function () {
            this.na({action: "click_add_[type]_comment_box"})
        });
        RB(a)
    };
    var QB = function (a) {
        var b = z.O("textarea", {placeholder: a.kc, "class": "zm-comment-textarea"});
        z.Po(b, a.Ha);
        new z.Sr(b);
        a.Ha = b;
        a.oj = {
            m: function () {
                return b
            }, Al: function () {
                return b.value
            }, Pd: function () {
                b.value = "";
                b.style.height = z.Ag(22, !0)
            }, Wf: function () {
                b.focus()
            }
        }
    };
    var SB = function (a) {
        var b = a.oj, c = b.m();
        if (b.Al() !== a.placeholder) {
            b.Pd(!1, a.placeholder);
            var d = ["click", "focus", "keydown"], f = function () {
                b.Pd(!1, this.Yj || "");
                this.Ha.lastChild ? z.Qu(this.Ha.lastChild) : b.Wf();
                z.md(c, d, f, !1, this)
            };
            z.F(c, d, f, !1, a);
            var g;
            window.getSelection ? (g = window.getSelection(), g.anchorNode && z.lf(a.Ha, g.anchorNode) && g.removeAllRanges()) : window.document.selection && a.Ha.blur()
        }
    };
    var TB = function (a) {
        a.focus();
        a = z.yu(a);
        a.collapse();
        a.select()
    };
    var UB = function (a) {
        var b;
        (b = z.N("zm-comment-reply-hack")) ? (b = z.We(z.Ko(b)), z.W.Rv(b, "zm-comment-reply-hack", "zm-comment-reply-hacked"), z.bf(b, a)) : (b = "", z.T.Fb() && (b = '\x3cimg class\x3d"avatar" src\x3d"' + z.T.be("is") + '"\x3e'), b = z.We('\x3cdiv class\x3d"zm-comment-form expanded"\x3e\x3cdiv class\x3d"zm-comment-editable-wrap"\x3e' + b + '\x3cdiv class\x3d"zm-comment-editable" aria-label\x3d"写下你的回复"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command zg-clear"\x3e\x3ca href\x3d"javascript:;" class\x3d"zm-comment-submit zg-right zg-btn-blue"\x3e评论\x3c/a\x3e\x3ca href\x3d"javascript:;" class\x3d"zm-comment-close zm-command-cancel"\x3e取消\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'),
            a.appendChild(b));
        return b
    };
    var VB = function (a, b) {
        return z.qb(WB(a), function (a) {
            return a.getAttribute("data-id") === b
        })
    };
    var WB = function (a) {
        return (0, window.$)(a.xn).children(".zm-item-comment").get()
    };
    var XB = function (a) {
        a.v().g(a.h, "click", a.Qa).g(a.Ha, "keydown", a.WS).g(z.Cp, "anon_change", a.Gj).g(a.oj.m(), ["click", "focus"], z.Ba(a.Gu, !0)).g(a.oj.m(), "focus", z.Ba(a.Mi, "add_comment_start"));
        a.Ja = Number(a.h.getAttribute("data-count"));
        (0, window.$)(a.h).on("focusin focusout", "." + a.J.uf, function (a) {
            (0, window.$)(this).toggleClass("focusin", "focusin" === a.type)
        });
        !z.Uj && a.$C && (a.AA = or().then(window.$.proxy(a.vH, a)))
    };
    var YB = function (a) {
        0 < a.kb() ? (a.Yj = a.Ua(), a.Gu(!1), SB(a)) : a.Rd ? a.collapse() : a.Gu();
        a.bi()
    };
    var ZB = function (a) {
        if (a.Rd) {
            var b = (0, window.$)(a.Rd);
            a.$(a.jD).show().css("left", b.position().left + b.width() / 2)
        }
    };
    var $B = function (a) {
        if ("pending" !== a.Az.state()) {
            a.Hb();
            a.h.innerHTML = a.An();
            a.expand();
            var b = a.Dg.Aj(a.id, a.J.UR).done((0, z.q)(a.NU, a));
            return a.Az = b
        }
    };
    var RB = function (a) {
        z.T.Fb() ? z.T.qe || aC(a, '\x3cdiv class\x3d"activate-mask-tip-comment"\x3e' + (z.T.Ln ? "为了正常使用知乎的提问、回答、评论和编辑功能，请验证你的邮箱。" : "为了正常使用知乎的提问、回答、评论和编辑功能，请绑定你的手机或邮箱。") + "\x3c/div\x3e", '\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"zg-r3px zg-btn-blue" href\x3d"javascript:;"\x3e我要激活\x3c/a\x3e\x3c/div\x3e') : aC(a, '\x3cdiv class\x3d"signin-mask-tip-comment"\x3e\x3c/div\x3e', null)
    };
    var aC = function (a, b, c) {
        b = (0, window.$)(b);
        var d = (0, window.$)(c);
        c ? ((0, window.$)(".zm-command, .zm-comment-info", a.h).hide(), (0, window.$)(a.Ha).hide().after(d).after(b)) : b.insertAfter(a.Ha);
        a = (0, z.q)(LB(z.p), a);
        b.on("click", a);
        d.on("click", a)
    };
    var bC = function (a) {
        OB(a);
        PB(a);
        SB(a);
        XB(a);
        cC(a);
        ZB(a)
    };
    var cC = function (a) {
        var b = a.J, c = !a.kb();
        z.W.enable(a.h, b.lx, c);
        c && a.Ha && b.autofocus && a.Rn();
        a.dispatchEvent("change")
    };
    var dC = function (a, b, c) {
        if (!a.nm || "pending" !== a.nm.state()) {
            var d;
            z.ta(b) && (d = b.TU, b = b.content);
            b = z.Ma(b);
            var f = new z.Rd;
            f.set(a.type + "_id", a.id);
            f.set("content", b);
            d && f.set("reply", d);
            b = a.Dg.add(Sn(f));
            b.done(window.$.proxy(a.fP, a)).done(c);
            a.nm = b;
            a.Yj = a.Ua();
            a.Mi("add_comment_submit")
        }
    };
    var eC = function (a, b) {
        var c = z.Ho(b, a.J.uf);
        (new z.mB).open(b, {id: c.getAttribute("data-id"), type: "comment"}, (0, z.q)(function () {
            z.P(c);
            --this.Ja;
            cC(this)
        }, a))
    };
    var fC = function (a, b) {
        var c = z.Ho(b, a.J.uf), d = c.getAttribute("data-id"), f = "你确定要删除这条评论吗？",
            g = (0, window.$)(".zm-item-link-avatar", c).prop("href");
        g && (f += '\x3cp class\x3d"js-block" style\x3d"margin-top:.2em;color:#999;visibility:hidden"\x3e\x3clabel\x3e\x3cinput type\x3d"checkbox"\x3e同时将此人屏蔽\x3c/label\x3e\x3c/p\x3e', window.$.get(g + "/block", function (a) {
            a.r || a.msg || (0, window.$)(".js-block", h.m()).css("visibility", "visible")
        }));
        var h = z.X.confirm("删除评论", f, function (a) {
            a && (a = (0, window.$)(":checkbox", h.m()).prop("checked"),
                gC(this, d, Number(a), z.Ba(z.P, c)))
        }, a)
    };
    var hC = function (a, b, c) {
        a.Dg.remove(b).done((0, z.q)(function () {
            z.sa(c) && c();
            --this.Ja;
            cC(this)
        }, a))
    };
    var gC = function (a, b, c, d) {
        a.Dg.YM(b, c).done((0, z.q)(function () {
            z.sa(d) && d();
            --this.Ja;
            cC(this)
        }, a))
    };
    var iC = function (a, b) {
        return a && (b.length ? iC(a[b.shift()], b) : a)
    };
    var jC = function (a, b) {
        z.R.call(this);
        this.jb = a;
        this.entryType = b;
        this.Vj = !1;
        this.qD = !0
    };
    var kC = function (a) {
        z.T.Fb() && 0 === lC(a) && (0, window.setTimeout)(function () {
            return a.Rn()
        })
    };
    var mC = function (a) {
        if (!a.wl && !z.vm) {
            var b = z.Ho(a.h, "zm-item-meta");
            if (b) {
                var c = z.N("zm-meta-panel", b);
                c && (a.wl = new iv(null, b), a.wl.tag = "comment", a.wl.w(c))
            }
        }
    };
    var nC = function (a, b) {
        a.Rd = b;
        a.Dv = (0, window.$)(b);
        a.XT = z.of(a.Rd);
        a.Dv.on("click", function () {
            kC(a)
        })
    };
    var oC = function (a) {
        a.Vj && (0, window.$)(".icon-spike", a.h).css("left", a.Dv.position().left + a.Dv.width() / 2).removeClass("hidden")
    };
    var pC = function (a) {
        if (a.Rd) if (a.Vj) pr(a.Rd, "收起评论"); else {
            var b = lC(a), c = void 0, c = z.qa(b) ? 0 < b ? b + " 条评论" : "添加评论" : a.XT;
            pr(a.Rd, c)
        }
    };
    var lC = function (a) {
        var b;
        if (b = a.Zq) a = a.Zq.store.getState(), b = iC(a, ["commentBox", "meta", "totalCountPure"]);
        return b
    };
    var qC = function (a, b, c) {
        var d = a.Zq;
        a = d.store;
        var f = d.actions, d = d.ActionTypes;
        /[A-Z]/.test(b[0]) ? a.dispatch({type: d[b], payload: c}) : a.dispatch(f[b](c))
    };
    var rC = function (a, b) {
        z.R.call(this);
        window.$.extend(this.options = {}, sC, b || {});
        this.state = {Yl: !1, Ws: !1, Ys: !0, Ao: !1, uA: !1};
        var c = new z.fl(this.update, 17, this);
        z.Ac(this, c);
        this.mK = (0, z.q)(c.fire, c)
    };
    var tC = function (a) {
        var b = (0, window.$)(a.h), c = (0, window.$)("\x3cdiv\x3e");
        window.$.each("display position top right bottom left float margin".split(" "), function (a, f) {
            c.css(f, b.css(f))
        });
        c.css({visibility: "hidden", width: b.outerWidth(), height: b.outerHeight()}).insertBefore(b);
        a.kc = c.get(0);
        b.addClass(a.options.Cg);
        a.ha();
        a.options.xI.call(a)
    };
    var uC = function (a) {
        if (!window.Modernizr.csstransitions) return tC(a);
        var b = (0, window.$)(a.h);
        a.state.Ao = !0;
        tC(a);
        b.css({transition: "none", transform: "translateY(" + vC(a) + "px)"});
        (0, window.setTimeout)(function () {
            b.css({transition: "", transform: ""}).onTransitionEnd(function () {
                a.onAnimationEnd()
            }, 200)
        })
    };
    var wC = function (a) {
        if (!window.Modernizr.csstransitions) return a.restore();
        var b = (0, window.$)(a.h);
        a.state.Ao = !0;
        b.css("transform", "translateY(" + vC(a) + "px)").onTransitionEnd(function () {
            b.css({transition: "none", transform: ""});
            a.restore();
            a.onAnimationEnd()
        }, 200)
    };
    var vC = function (a) {
        var b = (0, window.$)(a.h).outerHeight();
        return null === a.options.bottom ? -(b + a.options.top) : b + a.options.bottom
    };
    z.xC = function (a) {
        z.R.call(this);
        this.entryType = a;
        this.ob = this.sj = !1;
        this.Ps = window.setTimeout.bind(window, this.Ps.bind(this))
    };
    var yC = function (a, b) {
        return z.Jq(a, b, function () {
            return this.Sx()
        })
    };
    var zC = function (a) {
        a.g("trackRequested", function (b) {
            b.label = a.JF();
            b.value = (0, window.$)(a.h).index() + 1;
            z.xi(b)
        });
        a.sj && z.Gn(a.m(), function () {
            return a.CH()
        })
    };
    var AC = function (a) {
        a = (0, window.$)(a);
        var b = {};
        (0, window.$)("[itemprop]", a).each(function () {
            var a = (0, window.$)(this);
            a.is("link, a") ? b[a.attr("itemprop")] = a.prop("href") : b[a.attr("itemprop")] = a.attr("content")
        });
        (0, window.$)("meta[name]", a).each(function () {
            var a = (0, window.$)(this);
            b[a.attr("name")] = a.attr("content")
        });
        return b
    };
    var BC = function (a) {
        var b = AC(a.h);
        a.jb = b[a.entryType + "-id"];
        a.tj = b[a.entryType + "-url-token"];
        a.Ng = b
    };
    var CC = function (a) {
        if (a.rB) return a.rB;
        var b = (0, window.$)('meta[itemprop\x3d"ZReactor"]', a.h);
        b.length || (b = (0, window.$)(a.h).closest(".feed-item").find('meta[itemprop\x3d"ZReactor"]'));
        b = b.data("meta");
        a.rB = b && b.source_type || "";
        return a.rB
    };
    var DC = function (a) {
        if (a.qz) return a.qz;
        var b = rw();
        a.qz = ({
            home: "feed",
            search: "search_result_question_answer_tab",
            explore_daily_hot: "daily_trending",
            explore_monthly_hot: "monthly_trending",
            people: "people_profile_activities",
            people_answers: "people_profile_answers",
            explore_recommendations: "editor_recommendations"
        }[b] || b) + ({collection: "_feed", roundtable: "_feed", answer: "_more"}[b] || "");
        return a.qz
    };
    var EC = function (a) {
        return {
            promotion_answer: "promote",
            member_voteup_answer: "someone_vote_up",
            topic_acknowledged_answer: "from_topic",
            roundtable_add_answer: "from_roundtable",
            member_answer_question: "someone_add",
            member_create_article: "someone_add",
            member_voteup_article: "someone_vote_up"
        }[CC(a)]
    };
    var FC = function (a) {
        return (0, window.$)(a.mM, a.m())[0]
    };
    z.GC = function (a) {
        return (0, window.$)('\x3cdiv class\x3d"copyright-notification"\x3e\x3cdiv class\x3d"user-image-container"\x3e\x3cimg class\x3d"user-image" src\x3d"' + (a || "") + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"tooltip right noty-tooltip"\x3e\x3cdiv class\x3d"tooltip-arrow arrow"\x3e \x3c/div\x3e\x3cdiv class\x3d"tooltip-inner inner"\x3e 如需转载，请通过私信或评论联系我 \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e')
    };
    var HC = function (a, b) {
        var c = -1, d = -1, f = IC();
        a.on("mousedown", function (a) {
            3 === a.which && (c = a.pageX, d = a.pageY)
        });
        a.on("copy", function (g) {
            var h = z.vu(), k = Math.floor(22 * Math.random() + 44);
            if (h && h.Id() && (0, z.ab)(h.Id()).length > k) {
                g.preventDefault();
                (0, window.$)(".user-image", f).attr("src", b);
                g = h.by();
                var h = h.Tx(), k = z.Wn(window).y, m = z.Oe(window).height,
                    n = Zo(k + 45 + 15, Math.min(g.y, h.y) + k, k + m - 15),
                    r = Zo(k + 45 + 15, Math.max(g.y, h.y) + k, k + m - 15);
                z.rm.Ab ? (m = (z.Oe(window).width - 265) / 2, g = z.Ll ? h.y > g.y ? h.y + k + 10 : g.y + k - 10 : -1 !==
                d ? d + 3 : n + (r - n) / 2 - 15) : (m = -1 !== c ? c + 3 : a.offset().left + a.width() / 2 - 15, g = -1 !== d ? d + 3 : n + (r - n) / 2 - 15);
                f.css({position: "absolute", left: m, top: g}).finish().fadeIn(300).delay(2E3).fadeOut(300)
            }
            d = c = -1
        })
    };
    var JC = function (a, b, c) {
        function d(a, b, c) {
            a = ["作者：" + b, "链接：" + a, "来源：知乎", "著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。"];
            b = ["", ""];
            return a = c ? a.concat(b) : b.concat(a)
        }

        function f(a, b, c, f) {
            b = d(b, c, f).join("\x3cbr /\x3e");
            return "\x3cdiv\x3e" + (f ? b + a : a + b) + "\x3c/div\x3e"
        }

        function g(a, b, c, f) {
            b = d(b, c, f).join("\n");
            return f ? b + a : a + b
        }

        function h() {
            var a = "";
            window.getSelection ? a = window.getSelection().toString() : window.document.selection && "Control" !== window.document.selection.type && (a = window.document.selection.createRange().text);
            return a
        }

        function k(a) {
            var d = z.vu(), k = d && (0, z.ab)(d.Id());
            if (k && !(128 > k.length)) {
                k = 512 <= k.length;
                if ("object" === typeof a.originalEvent.clipboardData && (a.originalEvent.clipboardData.setData("text/html", f(d.$f(), b, c, k)), a.originalEvent.clipboardData.setData("text/plain", g(h(), b, c, k)), 0 < a.originalEvent.clipboardData.getData("text/plain").length)) {
                    a.preventDefault();
                    return
                }
                if (window.getSelection) {
                    a = d.$f();
                    var w = (0, window.$)(f(a, b, c, k)).css({position: "fixed", left: "-9999px"}).appendTo("body");
                    window.getSelection().selectAllChildren(w.get(0));
                    (0, window.setTimeout)(function () {
                        d.select();
                        w.remove()
                    }, 200)
                }
            }
        }

        a && b && c && (z.Ja(b, "http") || (b = window.location.protocol + "//" + window.location.host + b), a.on("copy", k))
    };
    z.KC = function (a) {
        var b = {appkey: "3063806388"};
        a && (b.title = a);
        window.open("http://service.weibo.com/share/share.php?" + window.$.param(b), "_blank", "width\x3d615,height\x3d505") || (window.location.href = "http://service.weibo.com/share/share.php?" + window.$.param(b))
    };
    z.LC = function (a, b, c, d) {
        b = new MC(b, c, d);
        b.w(a);
        return b
    };
    var MC = function (a, b, c) {
        z.R.call(this);
        this.Xb = a;
        this.IK = b;
        this.QJ = c
    };
    var NC = function (a) {
        var b = a.Uo = new z.qz, c = [{
            label: z.We('\x3cspan class\x3d"ico z-ico-weibo-share"\x3e\x3c/span\x3e新浪微博'),
            value: 0
        }, {
            label: z.We('\x3cspan class\x3d"ico z-ico-wechat-share"\x3e\x3c/span\x3e微信扫一扫\x3cimg class\x3d"qrcode-image js-qrcode-image"\x3e'),
            value: 1
        }];
        "answer" !== a.Xb && "post" !== a.Xb || c.push({
            label: z.We('\x3cspan class\x3d"ico z-ico-daily-share"\x3e\x3c/span\x3e读读日报'),
            value: 2
        });
        window.$.each(c, function (a, c) {
            var g = new z.lz(c.label, c.value);
            b.Fa(g)
        });
        z.ah(b, 1).Wa(!1);
        c = new z.xz("share",
            b);
        c.uk = !0;
        c.Ob = z.Fl;
        c.w(a.m());
        z.Ac(c, a);
        b.g("action", a.eP.bind(a));
        (0, window.$)(b.m()).addClass("share-menu")
    };
    var OC = function (a, b, c, d) {
        Mz.call(this, a, b, c, d)
    };
    z.PC = function (a) {
        z.R.call(this);
        z.Mb(this.options = {}, QC, a || {});
        this.content = "";
        this.ed = this.Re = this.Pk = null
    };
    var RC = function (a) {
        a.getParent() ? a.dispatchEvent("expandRequest") : a.expand()
    };
    var SC = function (a, b) {
        return window.$.post("/node/PromotionVoteBarV2", {method: b, params: {post_id: a}})
    };
    var TC = function (a, b, c) {
        z.R.call(this);
        this.jb = a;
        this.entryType = b || "answer";
        this.ai = null;
        this.J = window.$.extend({}, this.defaults, c || {})
    };
    var UC = function (a, b, c) {
        var d = +a.Bq.text(), f = 0;
        (0, window.isNaN)(d) || (c === z.VC.zg ? f = 1 : b === z.VC.zg && (f = -1), a.Bq.text(d + f))
    };
    var WC = function (a) {
        var b = a.N, c = a.J, d = b === z.VC.zg, b = b === z.VC.Qk, f = d ? "取消赞同" : "赞同",
            g = b ? "取消反对" : "反对，不会显示你的姓名";
        a.Ev.toggleClass(c.cu, d).find(".label").text(f).end().attr("aria-pressed", d).attr("title", f);
        a.sv.toggleClass(c.cu, b).find(".label").text(g).end().attr("aria-pressed", b).attr("title", g)
    };
    var XC = function (a, b) {
        z.R.call(this);
        this.jb = a;
        this.entryType = b;
        this.nm = null;
        this.Dg = "post" === b ? YC : ZC
    };
    z.$C = function (a) {
        a.nm && "pending" === a.nm.state() || (a.nm = a.Dg.LF(a.jb).done((0, z.q)(a.Ap, a)), (0, window.$)(".js-voteCount", a.nb).text(a.kb()))
    };
    var aD = function (a) {
        z.R.call(this);
        this.UK = "votebar-mobile";
        this.dx = "votebar-mobile-dialog";
        this.ev = a;
        this.WK = "votebar-" + (["post", "promotion"].includes(a.entryType) ? "post" : "answer");
        this.VK = z.O("span", "_votebar-holder")
    };
    var bD = function (a) {
        var b = a.ev;
        z.Po(a.VK, b.m());
        z.ij(b.m(), [a.UK, a.WK]);
        a.v().g(b, "action", function () {
            this.Ia && (0, window.setTimeout)((0, z.q)(function () {
                this.Ia.G(!1)
            }, this), 150)
        })
    };
    z.cD = function () {
        z.xC.call(this, "answer");
        this.Ul = window.setTimeout.bind(window, this.Ul.bind(this));
        this.Sj = window.setTimeout.bind(window, this.Sj.bind(this))
    };
    var dD = function (a) {
        var b = (0, window.$)(".js-administer", FC(a))[0];
        if (b) {
            a.tM = b;
            eD = 0;
            var c = new z.Gz;
            a.L(c);
            c.attach(b, 5);
            var d = a.pi ? new z.lz("取消折叠") : new OC("折叠");
            d.Ea("collapse");
            var f = function (a, b) {
                var c = new z.lz(b + 1 + " " + a.label);
                c.Ea(a.value);
                d.Fa(c)
            };
            a.pi || fD("answer", "collapse").then(function (a) {
                z.y(a, f);
                z.W.add(d.Ya().m(), "manage-menu")
            });
            b = new z.lz("删除");
            b.Ea("delete");
            c.Fa(d);
            c.Fa(b);
            c.render(a.h);
            z.W.add(c.m(), "manage-menu");
            return c
        }
    };
    var gD = function (a, b) {
        a.v().g(b, "action", function (a) {
            var b = a.target;
            a = b.X();
            var b = b.m(), f = new z.vh;
            "collapse" === a ? (f.add("answer_id", this.Xa).add("action", "collapse2").add("collapse", this.pi ? "cancel" : "done"), b.setAttribute("data-op", this.pi ? "uncollapse-answer" : "collapse-answer"), b.setAttribute("data-action", "/manage?" + f.toString()), hD(this, b)) : "delete" === a ? (f.add("answer_id", this.Xa).add("action", "remove_answer2"), b.setAttribute("data-op", "remove-answer"), b.setAttribute("data-action", "/manage?" + f.toString()),
                hD(this, b)) : z.qa(a) && (b = new z.vh, b.add("answer_id", this.Xa).add("action", "collapse2").add("collapse", this.pi ? "cancel" : "done").add("reason", a), nB("/manage", b.toString(), (0, z.q)(this.Jj, this)))
        });
        a.v().g(b, "show", function () {
            z.W.add(FC(this), "zm-item-meta-has-menu")
        }).g(b, "hide", function (a) {
            a.currentTarget === a.target && z.W.remove(FC(this), "zm-item-meta-has-menu")
        })
    };
    var hD = function (a, b) {
        (new z.mB).open(b, {id: a.Xa, type: "answer"}, (0, z.q)(a.Jj, a))
    };
    var iD = function (a) {
        var b = a.Ng.disableCopy, c = (0, window.$)(".entry-content, .zm-item-rich-text", a.h);
        b ? HC(c, a.Ng.disableCopyAvatar) : (a = c.data("entryUrl"), b = c.data("authorName"), JC(c, a, b))
    };
    z.jD = function () {
        z.xC.call(this, "post")
    };
    var kD = function (a) {
        var b = (0, window.$)(".Tipjar-entry", a.h);
        a.v().g(a.fK, "expand", function () {
            b.show()
        });
        a.v().g(a.fK, "collapse", function () {
            b.hide()
        });
        b.on("click", ".Tipjar-entryButton", function () {
            z.U("tipjar", "click_tipjar", "topstory")
        })
    };
    var lD = function (a) {
        a = (0, window.$)(".post-content", a.h);
        var b = a.data("entryUrl"), c = a.data("authorName");
        JC(a, b, c)
    };
    z.mD = function () {
        z.xC.call(this, "question")
    };
    z.nD = function (a) {
        a = a.getAttribute("data-type");
        return new ({a: z.cD, Answer: z.cD, p: z.jD, Post: z.jD, q: z.mD, Question: z.mD}[a] || z.R)
    };
    z.oD = function (a, b, c) {
        z.lz.call(this, a, b, c);
        this.Ji(!0)
    };
    z.pD = function (a, b, c) {
        z.R.call(this);
        this.offset = this.Ku = 0;
        this.IV = c;
        this.uO = a;
        this.url = b || window.location.href;
        this.ah = "zm-item";
        this.params = {}
    };
    z.qD = function (a, b) {
        b ? a.Nk.html('\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e正在加载').prop("disabled", !0) : a.Nk.html("更多").prop("disabled", !1)
    };
    var rD = function (a) {
        var b = a.gb();
        a.offset = a.Tz ? a.Tz(b) : b.length;
        a.Bs ? (b = a.Bs(), z.Q(a.Md, b)) : a.Md && ("-1" !== a.Nk.attr("data-next") && b ? a.Nk.removeClass("hidden").show() : a.Nk.hide())
    };
    z.sD = function (a) {
        a.dispatchEvent({data: {Co: a.Co, aC: a.aC}, type: "afterload"})
    };
    var tD = function (a) {
        var b = a.gb(), c;
        if (a.IV) if (a.Md && (c = a.Md.getAttribute("data-next")), c) a.Ku = c; else if (b = z.kb(b)) a.Ku = a.sA(b)
    };
    var uD = function (a, b) {
        z.y(b, function (a) {
            var b = this.Kt(a);
            this.dispatchEvent({data: {item: a, FR: b}, type: "itemcreated"})
        }, a)
    };
    z.vD = function (a) {
        z.G.call(this);
        this.ma = null;
        this.h = a;
        a = z.C || z.Gc || z.D && !z.E("531") && "TEXTAREA" == a.tagName;
        this.T = new z.xd(this);
        this.T.g(this.h, a ? ["keydown", "paste", "cut", "drop", "input"] : "input", this)
    };
    var wD = function (a) {
        null != a.ma && (z.wd(a.ma), a.ma = null)
    };
    var xD = function (a) {
        a = new z.Pc(a.gc);
        a.type = "input";
        return a
    };
    var yD = function (a, b, c, d) {
        z.G.call(this);
        this.di = a;
        this.TE = b;
        this.wt = c;
        this.jO = d || zD;
        a.removeAttribute("maxlength");
        this.$y = new z.vD(a);
        z.F(this.$y, "input", this.Yz, !1, this);
        this.el()
    };
    z.AD = function (a) {
        z.G.call(this);
        this.sa = null;
        this.pa = a;
        this.tu = 0;
        this.aJ = ""
    };
    var BD = function (a, b) {
        var c = z.Qo("zm-menu-item-link", a.GI);
        z.y(c, function (a, c) {
            var g = !z.A(b, c);
            z.Q(a, g)
        }, a)
    };
    var CD = function () {
        z.G.call(this)
    };
    z.DD = function (a) {
        function b() {
            var b;
            ED || (ED = new CD, ED.init());
            b = ED;
            b.aj = a;
            b.kM = a.id.split("-")[1];
            b.show()
        }

        function c(b) {
            if (!a.getAttribute("data-disabled")) {
                var c;
                FD || (FD = new z.AD, FD.init());
                c = FD;
                c.aj = a;
                c.pa = a.id.split("-")[1];
                "redirect" === b ? c.show() : (z.sp("/question/unredirect", null, "POST", "qid\x3d" + c.pa + "\x26rqid\x3d" + c.tu), c.aj.innerHTML = "重定向已撤销", c.aj.setAttribute("data-disabled", 1))
            }
        }

        function d() {
            function b() {
                var f = d.value, g = a.getAttribute("id").split("-")[1], f = (new z.vh).add("revision", g).add("reason",
                    f), r = new z.Z(!0);
                r.on("success", function () {
                    var a = z.Rn(r);
                    c.G(!1);
                    if (!a) return z.X.message("网络异常");
                    if (a.r) return z.X.message(a.msg);
                    a.msg ? window.location.href = a.msg : window.location.reload()
                });
                r.ajax("/revert", f.toString())
            }

            var c = z.X.confirm("撤销", '\x3cdiv class\x3d"zg-form-text-input"\x3e\x3ctextarea class\x3d"zg-editor-input content" title\x3d"请输入撤销原因" placeholder\x3d"请输入撤销原因"\x3e\x3c/textarea\x3e\x3c/div\x3e', function (a) {
                if (a) return b(), !1
            }), d = z.N("content", c.S());
            new z.vk(d);
            new z.Sr(d);
            new yD(d,
                null, 200)
        }

        var f = a && a.name;
        if (f) switch (f) {
            case "adminflag":
                b();
                break;
            case "redirect":
            case "cancel_redirect":
                c(f);
                break;
            case "revert":
                d()
        }
    };
    z.GD = function (a) {
        (0, window.$)(a).on("click", 'a[name\x3d"revert"]', function () {
            z.DD(this)
        })
    };
    z.HD = function (a) {
        var b = {lq: !1, PY: !1};
        return function (c) {
            if (!1 === c) return !1;
            c = {};
            z.Mb(c, b, a || {});
            if (c.lq && !z.T.Ds) return z.X.alert('\x3ca href\x3d"/question/23261456" target\x3d"_blank"\x3e如何参与知乎话题的公共编辑？\x3c/a\x3e'), !1;
            if (c.up) {
                if (!z.S.pO) return z.X.alert('\x3cp\x3e创建较久或已有较多讨论的问题限制公共编辑\x3c/p\x3e\x3cp\x3e\x3ca href\x3d"/question/24501563" target\x3d"_blank"\x3e如何参与知乎问题的公共编辑？\x3c/a\x3e\x3c/p\x3e'), !1;
                if (z.S.Eo) return z.X.alert('\x3cp\x3e创建较久或编辑次数较多的问题锁定公共编辑\x3c/p\x3e\x3cp\x3e\x3ca href\x3d"/question/24501563" target\x3d"_blank"\x3e如何参与知乎问题的公共编辑？\x3c/a\x3e\x3c/p\x3e'),
                    !1
            }
        }
    };
    var ID = function (a) {
        return window.$.post("/settings/account/unlock_with_digits", a)
    };
    var JD = function (a) {
        return window.$.post("/settings/account/unlock_with_password", a)
    };
    z.KD = function () {
        return new window.Promise(function (a) {
            function b(a, b) {
                return !!z.qb(a, function (a) {
                    return a.challenge_type === b
                })
            }

            function c(a) {
                var b = {value: a.challenge_type};
                switch (b.value) {
                    case "password":
                        b.label = "使用知乎密码验证";
                        break;
                    case "phone_digits":
                        b.label = z.Ka("使用手机 %s 验证", a.hint);
                        break;
                    case "email_digits":
                        b.label = z.Ka("使用邮箱 %s 验证", a.hint)
                }
                return b
            }

            if (z.aj.get("unlock_ticket")) return a();
            var d = z.X.async({
                title: "验证身份",
                modal: !0,
                ZJ: "正在进行安全验证，请稍等",
                className: "settings-account-unlock-dialog",
                onload: function (b,
                                  c) {
                    function d(a) {
                        var b = (0, window.$)(".panel", k), c = a ? b.filter(function () {
                            return (0, window.$)(this).data("match") === a
                        }) : b.first();
                        b.not(c.show()).hide()
                    }

                    var k = (0, window.$)("form", b), m = (0, window.$)(".submit", k),
                        n = (0, window.$)(".error-label-container", k), r = (0, window.$)(".hint-label-container", k),
                        w = (0, window.$)("select", k).change(function () {
                            d(this.value);
                            n.text("");
                            r.text("")
                        });
                    (0, window.$)(".js-send-digits", k).each(function () {
                        var a = (0, window.$)(this), b = a.closest(".panel");
                        (0, window.$)("input", b);
                        var d =
                            b.data("match"), a = z.tk(a, "email_digits" === d ? 10 : 60, function (a) {
                            return a ? "%s 秒后即可重发" : "重发验证码"
                        }, function () {
                            r.text("");
                            window.$.post("/settings/account/send_unlock_digits", {type: d}).then(function () {
                                r.text("验证码已发送至你的" + ("email_digits" === d ? "邮箱" : "手机"))
                            })
                        });
                        z.Ac(c, a)
                    });
                    var H = k.validate({
                        messages: z.LD,
                        ignore: "input.text:hidden",
                        errorLabelContainer: n,
                        submitHandler: z.uk(m, function () {
                            var b = "password" === w.val();
                            return (b ? JD : ID)((0, window.$)(":input:visible", k).serialize()).then(function (d) {
                                if (d.success) c.G(!1), a();
                                else if (d = d.payload, d.fields) H.showErrors(d.fields); else if (d.message) {
                                    var f = {};
                                    f[b ? "password" : "digits"] = d.message;
                                    H.showErrors(f)
                                }
                            })
                        })
                    });
                    w.change();
                    (0, window.$)("input.text:visible", k).focus()
                },
                Iw: window.$.get("/settings/account/request_unlock").then(function (f) {
                    if (f.success) return (0, window.setTimeout)(function () {
                        d.G(!1);
                        a()
                    }, 3E3), '\x3cp class\x3d"z-text-muted"\x3e验证成功\x3c/p\x3e';
                    var g = f.payload;
                    return window.$.get("/node/SettingsRequestUnlockTemplate").then(function (a) {
                        return (0, z.Rv)(a, {
                            canUsePanel: z.Ba(b,
                                g), each: z.y, options: z.nb(g, c)
                        })
                    })
                })
            })
        })
    };
    z.MD = function (a, b, c) {
        b = void 0 === b ? "success" : b;
        c = void 0 === c ? 3E3 : c;
        if (a) {
            var d = (0, window.$)("#zh-message-container");
            d.length || (d = (0, window.$)('\x3cdiv id\x3d"zh-message-container" style\x3d"display:none"\x3e\x3c/div\x3e').prependTo(".zu-main-content-inner"));
            d.text(a).attr("class", {
                success: "zg-info-message",
                error: "zg-error-message"
            }[b]).show().delay(c).fadeOut()
        }
    };
    z.ND = function (a, b) {
        z.na(a) && z.MD(a[1], a[0] ? "error" : "success", b)
    };
    z.OD = function (a) {
        z.G.call(this);
        this.kd = a
    };
    z.PD = function (a) {
        this.pl = a;
        this.Ti = new z.Bj("", !0, this.pl.kd);
        this.sn = new z.Oj(this.pl.kd);
        this.rn = {};
        this.Kh("tr-dialog")
    };
    z.QD = function (a, b) {
        var c = z.u("OK");
        a.sn.set("ok", b || c, !0);
        a.rn.ok = (0, z.q)(a.pl.dQ, a.pl)
    };
    z.RD = function (a, b) {
        var c = z.Km, d = z.u("Cancel");
        a.sn.set(c, b || d, !1, !0);
        a.rn[c] = (0, z.q)(a.pl.eo, a.pl);
        return a
    };
    z.SD = function (a) {
        a.sn.Zg() && (z.QD(a), z.RD(a));
        z.Lj(a.Ti, a.sn);
        var b = a.rn;
        a.rn = null;
        a.Ti.g(z.Nj, function (a) {
            if (b[a.key]) return b[a.key](a)
        });
        a.Ti.Op(!0);
        var c = a.Ti;
        a.Ti = null;
        return c
    };
    z.TD = function (a) {
        z.wA.call(this);
        this.GN = a;
        this.sJ = function () {
        }
    };
    z.UD = function (a) {
        var b = a.F, c = a.BJ;
        c && c.restore();
        b.focus();
        a.BJ = null
    };
    var VD = function (a) {
        a.Ia && !a.fz && (a.fz = !0, a.Ia.H(), a.Ia = null, a.fz = !1)
    };
    var WD = function (a) {
        z.OD.call(this, a);
        this.T = new z.xd(this);
        this.uq = z.rm.tq + "/upload";
        this.qN = !z.C
    };
    var XD = function (a) {
        z.Lc.call(this, "ok");
        var b = a[0];
        this.Tl = b;
        this.II = b.replace("_m.jpg", "_r.jpg");
        this.eJ = a[1];
        this.dJ = a[2]
    };
    var YD = function (a, b) {
        function c(a) {
            a.eq(b).addClass("selected").siblings().removeClass("selected")
        }

        var d = (0, window.$)(".tab-nav", a.DB), f = (0, window.$)(".tab-content", a.form);
        z.Q(a.ff, !1);
        var g = f.eq(b);
        g.find("input").val("");
        c(d);
        c(f);
        g.find(":text").focus()
    };
    var ZD = function (a, b) {
        z.Q(a.gh, !1);
        a.ff.innerHTML = b;
        z.Q(a.ff, !0)
    };
    z.$D = function () {
        z.TD.call(this, "image");
        this.T = new z.xd(this)
    };
    var aE = function (a, b, c, d) {
        z.At.call(this, a, b, c, null, d)
    };
    z.bE = function () {
    };
    var cE = function (a, b, c, d) {
        for (var f = [], g = 0, h = 0; g < c.height; g++) {
            for (var k = [], m = 0; m < c.width; m++) {
                var n = b && b[h++];
                k.push(dE(a, n, d))
            }
            f.push(eE(a, k, d))
        }
        return a.Mw(f, d)
    };
    var eE = function (a, b, c) {
        a = c.B("TR", a.U() + "-row", b);
        z.bj(a, "row");
        return a
    };
    var dE = function (a, b, c) {
        a = c.B("TD", {"class": a.U() + "-cell", id: a.U() + "-cell-" + fE++}, b);
        z.bj(a, "gridcell");
        z.cj(a, "selected", !1);
        if (!z.of(a) && !vo(a)) {
            var d;
            b = new aE(a);
            for (c = ""; !c && (d = Xo(b));) 1 == d.nodeType && (c = vo(d) || d.title);
            (d = c) && z.cj(a, "label", d)
        }
        return a
    };
    var gE = function (a, b, c) {
        for (b = b.m(); c && 1 == c.nodeType && c != b;) {
            if ("TD" == c.tagName && z.gj(c, a.U() + "-cell")) return c.firstChild;
            c = c.parentNode
        }
        return null
    };
    var hE = function (a) {
        z.G.call(this);
        this.Ie = [];
        iE(this, a)
    };
    var iE = function (a, b) {
        b && (z.y(b, function (a) {
            this.um(a, !1)
        }, a), z.wb(a.Ie, b))
    };
    z.jE = function (a, b, c) {
        Vp.call(this, a, b || z.bE.ba(), c);
        this.cj &= -89;
        this.Fn = new kE;
        this.Fn.Db(this);
        this.sz = -1
    };
    z.lE = function (a, b) {
        if (a.m()) throw Error("Component already rendered");
        a.vc = z.qa(b) ? new z.He(b, void 0) : b;
        mE(a)
    };
    var nE = function (a) {
        var b = a.Ua();
        return b && b[a.Ta]
    };
    var oE = function (a, b, c) {
        if (a.m()) {
            var d = a.Ua();
            if (d && 0 <= b && b < d.length) {
                var f;
                f = (f = nE(a)) ? f.parentNode : null;
                a.Fn.m() != f && (a.Fn.h = f);
                f = a.Fn;
                f.Mc(c);
                !!(f.N & 2) == c && (b = d[b]) && (b = b ? b.parentNode : null, z.uo(b, a.M.U() + "-cell-hover", c), c ? z.cj(a.h, "activedescendant", b.id) : b.id == z.ej(a.h, "activedescendant") && a.h.removeAttribute("aria-activedescendant"))
            }
        }
    };
    var mE = function (a) {
        var b = a.Ua();
        if (b) if (a.vc && a.vc.width) {
            if (b = Math.ceil(b.length / a.vc.width), !z.qa(a.vc.height) || a.vc.height < b) a.vc.height = b
        } else b = Math.ceil(Math.sqrt(b.length)), a.vc = new z.He(b, b); else a.vc = new z.He(0, 0)
    };
    var kE = function () {
        Vp.call(this, null);
        this.yk |= 2
    };
    z.pE = function () {
    };
    z.qE = function () {
        this.ew = "toolbar"
    };
    var rE = function () {
    };
    z.sE = function (a, b, c) {
        z.bq.call(this, a, b || rE.ba(), c)
    };
    var tE = function () {
    };
    var uE = function (a, b) {
        return b.B("DIV", "goog-color-menu-button-indicator", a)
    };
    var vE = function (a, b) {
        if (a && a.firstChild) {
            var c;
            if (c = b) c = !!(Yq.test("#" == b.charAt(0) ? b : "#" + b) || $q(b).length || br && br[b.toLowerCase()]);
            c = c ? Xq(b).Fs : null;
            a.firstChild.style.borderBottomColor = c || (z.C ? "" : "transparent")
        }
    };
    var wE = function (a, b, c) {
        this.ur = a || [];
        z.jE.call(this, null, b || z.bE.ba(), c);
        this.ur = this.ur;
        this.Ft = this.bt = null;
        this.ia(xE(this))
    };
    var xE = function (a) {
        return z.nb(a.ur, function (a, c) {
            var d = this.K().B("DIV", {"class": this.M.U() + "-colorswatch", style: "background-color:" + a}), f;
            this.bt && this.bt[c] ? f = this.bt[c] : "#" == a.charAt(0) ? (f = Zq(a), f = "RGB (" + [(0, window.parseInt)(f.substr(1, 2), 16), (0, window.parseInt)(f.substr(3, 2), 16), (0, window.parseInt)(f.substr(5, 2), 16)].join(", ") + ")") : f = a;
            d.title = f;
            return d
        }, a)
    };
    var yE = function (a) {
        if (a) try {
            return Xq(a).Fs
        } catch (b) {
        }
        return null
    };
    var zE = function (a, b, c, d) {
        z.xz.call(this, a, b, c || tE.ba(), d)
    };
    var AE = function (a) {
        var b = new z.qz(a);
        z.Db(BE, function (c) {
            c = new wE(c, null, a);
            z.lE(c, 8);
            b.L(c, !0)
        });
        return b
    };
    var CE = function () {
    };
    var DE = function () {
    };
    var EE = function (a, b, c, d) {
        zE.call(this, a, b, c || DE.ba(), d)
    };
    var FE = function (a, b, c, d) {
        z.xz.call(this, a, b, c || CE.ba(), d)
    };
    var GE = function (a, b, c, d, f) {
        z.xz.call(this, a, b, c, d, f || new oz("listbox"));
        this.Zw = this.Ua();
        this.Zy = null;
        this.Du("listbox")
    };
    var HE = function (a, b) {
        a.Zw = b;
        IE(a)
    };
    var JE = function (a, b) {
        a.oa = new hE;
        b && z.bh(b, function (a) {
            KE(a);
            this.oa.Fa(a)
        }, a);
        LE(a)
    };
    var LE = function (a) {
        a.oa && a.v().g(a.oa, "select", a.Kj)
    };
    var IE = function (a) {
        var b = a.lf();
        a.ia(b ? b.Qg() : a.Zw);
        var c = a.M.S(a.m());
        c && a.K().isElement(c) && (null == a.Zy && (a.Zy = vo(c)), b = (b = b ? b.m() : null) ? vo(b) : a.Zy, z.cj(c, "label", b), ME(a))
    };
    var ME = function (a) {
        var b = a.M;
        if (b && (b = b.S(a.m()))) {
            var c = a.h;
            b.id || (b.id = z.Wg(z.Vg.ba()));
            z.bj(b, "option");
            z.cj(c, "activedescendant", b.id);
            a.oa && (c = a.oa.gb(), z.cj(b, "setsize", NE(c)), a = a.oa.Dj(), z.cj(b, "posinset", 0 <= a ? NE(z.yb(c, 0, a + 1)) : 0))
        }
    };
    var NE = function (a) {
        return dp(a, function (a) {
            return a instanceof z.lz
        })
    };
    var KE = function (a) {
        a.Du(a instanceof z.lz ? "option" : "separator")
    };
    var OE = function (a, b, c, d) {
        GE.call(this, a, b, c || CE.ba(), d)
    };
    var PE = function (a) {
        var b = a.indexOf(",");
        a:for (a = (-1 != b ? a.substring(0, b) : a).toLowerCase(), b = 0; 2 > b; b++) {
            var c = "\"'".charAt(b);
            if (a.charAt(0) == c && a.charAt(a.length - 1) == c) {
                a = a.substring(1, a.length - 1);
                break a
            }
        }
        return a
    };
    var QE = function (a, b) {
        z.y(b, function (b) {
            var d = b.value, f = PE(d);
            b = new z.oD(b.caption, d, a.K());
            On(b, f);
            a.Fa(b);
            b.S().style.fontFamily = d
        })
    };
    var RE = function (a) {
        z.y(SE, function (b) {
            var c = b.value;
            b = new z.oD(b.caption, c, a.K());
            a.Fa(b);
            b = b.S();
            b.style.fontSize = (TE[c] || 10) + "px";
            b.firstChild.style.height = "1.1em"
        })
    };
    var UE = function (a) {
        z.y(VE, function (b) {
            var c = b.caption;
            b = b.Aa;
            var d = a.K(), c = new z.oD(d.B("DIV", null, c), b, d);
            On(c, b);
            a.Fa(c)
        })
    };
    z.WE = function (a, b, c, d, f, g) {
        c = new z.sE(XE(c, d, g), f, g);
        On(c, a);
        c.wd(b);
        return c
    };
    z.YE = function (a, b, c, d, f, g) {
        a = z.WE(a, b, c, d, f, g);
        a.Tb(16, !0);
        return a
    };
    var ZE = function (a, b, c, d, f, g) {
        f = new OE(null, null, f, g);
        d && z.y(d.split(/\s+/), f.Kh, f);
        f.Kh("goog-toolbar-select");
        HE(f, c);
        On(f, a);
        f.wd(b);
        return f
    };
    var $E = function (a, b, c, d, f, g) {
        c = new EE(XE(c, d, g), null, f, g);
        On(c, a);
        c.wd(b);
        return c
    };
    var XE = function (a, b, c) {
        a && "" != a || !z.B || z.E("1.9a") || (a = " ");
        return (c || z.J()).B("DIV", b ? {"class": b} : null, a)
    };
    var aF = function (a) {
        var b = "en-us".replace(/_/, "-").toLowerCase(), c = [];
        b in bF && (c = bF[b]);
        c.length && QE(a, c);
        QE(a, cF)
    };
    var dF = function (a, b, c, d, f, g) {
        var h = z.WE(a, b, c, d, f, g);
        h.Pi = function (a) {
            h.Wa(a)
        };
        return h
    };
    var eF = function (a, b) {
        var c = b;
        try {
            if (z.C) var d = "000000" + c.toString(16), f = d.substr(d.length - 6, 6),
                c = "#" + f.substring(4, 6) + f.substring(2, 4) + f.substring(0, 2);
            c != a.X() && a.Ea(c)
        } catch (g) {
        }
    };
    z.fF = function (a) {
        z.wA.call(this);
        this.ga = new z.xd(this);
        this.tG = z.O("div", {style: "display:none"});
        this.h = this.rc = null;
        this.J = {};
        z.Mb(this.J, this.defaults, a || {})
    };
    var gF = function (a) {
        a.dispatchEvent("willEnterFullScreen") && (a.$E || (a.KQ = window.history.length), a.$E = !0, hF(a, "writing"), a.cL = z.vf(z.J((z.t || window).document)), z.Po(a.tG, a.J.Ek), a.rc.appendChild(a.J.Ek), z.W.add(window.document.body, a.J.Tn), a.Eb = z.N(a.J.uW, a.h), a.Eb.appendChild(a.kq), iF(a), (0, z.ab)(z.of(a.F.Ha)) || a.F.Wf(), a.dispatchEvent("enterFullScreen"))
    };
    var jF = function (a) {
        !z.Vj && a.$E && a.KQ !== window.history.length ? window.history.back() : hF(a, "");
        a.Eb.removeChild(a.kq);
        a.MJ(!1);
        a.h.onscroll = null;
        a.ga.qa(window.document, "keydown", a.ip);
        z.Po(a.J.Ek, a.tG);
        z.W.remove(window.document.body, a.J.Tn);
        window.scrollTo(a.cL.x, a.cL.y);
        a.dispatchEvent("exitFullScreen")
    };
    var hF = function (a, b) {
        a.ga.qa(window, "hashchange", a.nI);
        window.location.hash = b || "";
        (0, window.setTimeout)((0, z.q)(function () {
            this.ga.g(window, "hashchange", this.nI)
        }, a))
    };
    var iF = function (a) {
        var b = a.h;
        b.scrollTop = 0;
        var c = a.Eb.getBoundingClientRect().top;
        b.onscroll = z.hp((0, z.q)(a.MJ, a), function () {
            return b.scrollTop > c
        });
        a.ga.g(window.document, "keydown", a.ip)
    };
    z.kF = function () {
        this.Lx = ["zg-btn-follow", "zg-btn-unfollow"];
        this.Mx = "people"
    };
    z.Vk.prototype.Lp = z.Fn(27, function (a) {
        this.hj = a
    });
    z.Xj.prototype.Pg = z.Fn(26, function (a, b) {
        if (!this.h) return null;
        for (var c = b || "A", d = a; null != d && d !== this.h;) {
            if (d.tagName === c) return d;
            d = d.parentNode
        }
        return null
    });
    z.V.prototype.vm = z.Fn(25, function (a) {
        this.Wk = a;
        this.wa && z.Sj(this)
    });
    z.Bj.prototype.Du = z.Fn(22, function (a) {
        this.qp = a
    });
    z.Bj.prototype.Ua = z.Fn(21, function () {
        return null != this.rc ? z.Gd(this.rc) : ""
    });
    z.oj.prototype.Wa = z.Fn(20, function (a) {
        this.ec = a
    });
    z.oj.prototype.Lg = z.Fn(18, function (a) {
        this.Qi = a
    });
    z.R.prototype.uh = z.Fn(17, function (a) {
        if (this.wa) throw Error("Component already rendered");
        this.og = a
    });
    z.R.prototype.qd = z.Fn(16, function () {
        null == this.og && (this.og = z.Mg(this.wa ? this.h : this.da.ua().body));
        return this.og
    });
    z.qg.prototype.Rg = z.Fn(15, function () {
        return new z.He(this.width, this.height)
    });
    z.qg.prototype.cz = z.Fn(14, function (a) {
        var b = Math.max(this.left, a.left), c = Math.min(this.left + this.width, a.left + a.width);
        if (b <= c) {
            var d = Math.max(this.top, a.top);
            a = Math.min(this.top + this.height, a.top + a.height);
            if (d <= a) return this.left = b, this.top = d, this.width = c - b, this.height = a - d, !0
        }
        return !1
    });
    z.Rf.prototype.Pq = z.Fn(13, function (a, b, c) {
        var d = (0, z.I)(), f = c ? c : d, g = Bn(this.Ur);
        g.Wr = 2;
        g.Vr = f;
        g.type = b;
        g.XD = a;
        a = (a = this.vY) && a.isTracing() ? a.totalVarAlloc : -1;
        g.qK = a;
        this.Gw++;
        if (c) {
            c = this.Sf.length;
            for (a = 0; a < c; a++) if (this.Sf[a].Vr > f) {
                z.xb(this.Sf, a, 0, g);
                break
            }
            a == c && this.Sf.push(g)
        } else this.Sf.push(g);
        if (f = g.type) g = this.zk.get(f), g || (g = Bn(this.vB), g.type = f, this.zk.set(f, g)), g.count++;
        this.Xu += (0, z.I)() - d
    });
    z.Ie.prototype.bg = z.Fn(12, function (a) {
        var b;
        (b = "A" == a.tagName || "INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "BUTTON" == a.tagName ? !a.disabled && (!yn(a) || xn(a)) : Dn(a)) && z.C ? (a = z.sa(a.getBoundingClientRect) ? a.getBoundingClientRect() : {
            height: a.offsetHeight,
            width: a.offsetWidth
        }, a = null != a && 0 < a.height && 0 < a.width) : a = b;
        return a
    });
    z.R.prototype.zp = z.Fn(11, function (a) {
        for (var b = []; this.Qc && 0 != this.Qc.length;) b.push(this.removeChild(z.ah(this, 0), a));
        return b
    });
    z.Ie.prototype.zl = z.Fn(10, function (a) {
        return Cn(a || this.Ka)
    });
    z.Ie.prototype.Mw = z.Fn(9, function (a, b, c) {
        var d = this.Ka;
        c = !!c;
        for (var f = d.createElement("TABLE"), g = f.appendChild(d.createElement("TBODY")), h = 0; h < a; h++) {
            for (var k = d.createElement("TR"), m = 0; m < b; m++) {
                var n = d.createElement("TD");
                c && z.mf(n, " ");
                k.appendChild(n)
            }
            g.appendChild(k)
        }
        return f
    });
    z.Ie.prototype.Yf = z.Fn(8, function (a, b) {
        return z.N(a, b || this.Ka)
    });
    z.R.prototype.Yf = z.Fn(7, function (a) {
        return this.h ? this.da.Yf(a, this.h) : null
    });
    z.Rd.prototype.Xh = z.Fn(6, function (a) {
        for (var b = 0; b < this.Za.length; b++) {
            var c = this.Za[b];
            if (z.Ud(this.Ib, c) && this.Ib[c] == a) return !0
        }
        return !1
    });
    z.vh.prototype.Xh = z.Fn(5, function (a) {
        var b = this.Wc();
        return z.A(b, a)
    });
    z.Xi.prototype.Xh = z.Fn(4, function (a) {
        for (var b = z.Yi(this).values, c = 0; c < b.length; c++) if (b[c] == a) return !0;
        return !1
    });
    z.Pc.prototype.wF = z.Fn(0, function () {
        return this.gc
    });
    z.x(z.Ln, z.G);
    z.e = z.Ln.prototype;
    z.e.h = null;
    z.e.Wk = !0;
    z.e.mD = null;
    z.e.nD = null;
    z.e.Xj = !1;
    z.e.HV = !1;
    z.e.uz = -1;
    z.e.rz = -1;
    z.e.rG = !1;
    z.e.wO = !0;
    z.e.Xb = "toggle_display";
    z.e.li = function () {
        return this.Xb
    };
    z.e.m = function () {
        return this.h
    };
    z.e.sh = function (a) {
        An(this);
        this.h = a
    };
    z.e.vm = function (a) {
        An(this);
        this.Wk = a
    };
    z.e.NJ = function (a, b) {
        this.Em = a;
        this.Ql = b
    };
    z.e.v = function () {
        return this.ga
    };
    z.e.V = function () {
        return this.Xj
    };
    z.e.UG = function () {
        return this.Xj || 150 > (0, z.I)() - this.rz
    };
    z.e.G = function (a) {
        this.Em && this.Em.stop();
        this.Ql && this.Ql.stop();
        a ? this.mB() : this.Rl()
    };
    z.e.ha = z.p;
    z.e.mB = function () {
        if (!this.Xj && this.bp()) {
            if (!this.h) throw Error("Caller must call setElement before trying to show the popup");
            this.ha();
            var a = z.Je(this.h);
            this.rG && this.ga.g(a, "keydown", this.PS, !0);
            if (this.Wk) if (this.ga.g(a, "mousedown", this.lI, !0), z.C) {
                var b;
                try {
                    b = a.activeElement
                } catch (d) {
                }
                for (; b && "IFRAME" == b.nodeName;) {
                    try {
                        var c = b.contentDocument || b.contentWindow.document
                    } catch (d) {
                        break
                    }
                    a = c;
                    b = a.activeElement
                }
                this.ga.g(a, "mousedown", this.lI, !0);
                this.ga.g(a, "deactivate", this.jI)
            } else this.ga.g(a,
                "blur", this.jI);
            "toggle_display" == this.Xb ? (this.h.style.visibility = "visible", z.Q(this.h, !0)) : "move_offscreen" == this.Xb && this.ha();
            this.Xj = !0;
            this.uz = (0, z.I)();
            this.rz = -1;
            this.Em ? (z.ld(this.Em, "end", this.lk, !1, this), this.Em.play()) : this.lk()
        }
    };
    z.e.Rl = function (a) {
        if (!this.Xj || !this.dispatchEvent({type: "beforehide", target: a})) return !1;
        this.ga && this.ga.removeAll();
        this.Xj = !1;
        this.rz = (0, z.I)();
        this.Ql ? (z.ld(this.Ql, "end", z.Ba(this.fE, a), !1, this), this.Ql.play()) : this.fE(a);
        return !0
    };
    z.e.fE = function (a) {
        "toggle_display" == this.Xb ? this.HV ? z.vd(this.sG, 0, this) : this.sG() : "move_offscreen" == this.Xb && (this.h.style.top = "-10000px");
        this.kk(a)
    };
    z.e.sG = function () {
        this.h.style.visibility = "hidden";
        z.Q(this.h, !1)
    };
    z.e.bp = function () {
        return this.dispatchEvent("beforeshow")
    };
    z.e.lk = function () {
        this.dispatchEvent("show")
    };
    z.e.kk = function (a) {
        this.dispatchEvent({type: "hide", target: a})
    };
    z.e.lI = function (a) {
        a = a.target;
        z.lf(this.h, a) || zn(this, a) || this.nD && !z.lf(this.nD, a) || 150 > (0, z.I)() - this.uz || this.Rl(a)
    };
    z.e.PS = function (a) {
        27 == a.keyCode && this.Rl(a.target) && (a.preventDefault(), a.stopPropagation())
    };
    z.e.jI = function (a) {
        if (this.wO) {
            var b = z.Je(this.h);
            if ("undefined" != typeof window.document.activeElement) {
                if (a = b.activeElement, !a || z.lf(this.h, a) || "BODY" == a.tagName) return
            } else if (a.target != b) return;
            150 > (0, z.I)() - this.uz || this.Rl()
        }
    };
    z.e.D = function () {
        z.Ln.o.D.call(this);
        this.ga.H();
        z.Cc(this.Em);
        z.Cc(this.Ql);
        delete this.h;
        delete this.ga;
        delete this.mD
    };
    var co = /&([^;\s<&]+);?/g, no = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }, lF = /[^\d]+$/;
    ko.prototype.serialize = function (a) {
        var b = [];
        lo(this, a, b);
        return b.join("")
    };
    ko.prototype.serializeArray = function (a, b) {
        var c = a.length;
        b.push("[");
        for (var d = "", f = 0; f < c; f++) b.push(d), d = a[f], lo(this, this.ou ? this.ou.call(a, String(f), d) : d, b), d = ",";
        b.push("]")
    };
    z.e = Vo.prototype;
    z.e.kb = function () {
        return this.Ib.kb()
    };
    z.e.add = function (a) {
        this.Ib.set(oo(a), a)
    };
    z.e.addAll = function (a) {
        a = z.Id(a);
        for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
    };
    z.e.removeAll = function (a) {
        a = z.Id(a);
        for (var b = a.length, c = 0; c < b; c++) this.remove(a[c])
    };
    z.e.remove = function (a) {
        return this.Ib.remove(oo(a))
    };
    z.e.clear = function () {
        this.Ib.clear()
    };
    z.e.Zg = function () {
        return this.Ib.Zg()
    };
    z.e.contains = function (a) {
        return this.Ib.Of(oo(a))
    };
    z.e.cz = function (a) {
        var b = new Vo;
        a = z.Id(a);
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            this.contains(d) && b.add(d)
        }
        return b
    };
    z.e.Wc = function () {
        return this.Ib.Wc()
    };
    z.e.clone = function () {
        return new Vo(this)
    };
    z.e.equals = function (a) {
        return this.kb() == qo(a) && Wo(this, a)
    };
    z.e.gd = function () {
        return this.Ib.gd(!1)
    };
    var yp;
    z.x(z.Z, z.de);
    var mF = /#.*$/, wp = {
        "*": "*",
        "text/html": "html",
        "text/plain": "text",
        "application/json": "json",
        "application/javascript": "script",
        "application/x-javascript": "script"
    }, up = [];
    z.Z.prototype.oP = function () {
        if (this.MK) {
            var a = xp();
            z.Q(a, !1)
        }
        vp(this)
    };
    z.Z.prototype.ajax = function (a, b, c) {
        a = (0, window.encodeURI)((0, window.decodeURI)(a));
        a = a.replace(mF, "");
        if (!this.ea) {
            if (this.MK) {
                var d = xp();
                z.Q(d, !0)
            }
            c = c || "POST";
            "POST" === c.toUpperCase() && (d = z.aj.get("_xsrf")) && (b = (b ? b + "\x26_xsrf\x3d" : "_xsrf\x3d") + d);
            return this.send(a, c, b, this.headers)
        }
    };
    z.x(zp, z.G);
    zp.prototype.v = function () {
        return this.pf || (this.pf = new z.xd(this))
    };
    z.x(z.Bp, z.Lc);
    z.Cp = new zp;
    z.G.prototype.on = function () {
        z.G.prototype.addEventListener.apply(this, arguments);
        return this
    };
    z.G.prototype.off = function () {
        z.G.prototype.removeEventListener.apply(this, arguments);
        return this
    };
    z.G.prototype.tb = z.G.prototype.dispatchEvent;
    z.x(Dp, z.G);
    Dp.prototype.hc = function () {
        var a = (0, z.q)(function (a) {
            var c = this.vr.section;
            (c = c && c["home-topstory"]) && (c.content = a)
        }, this);
        Jp(this).always((0, z.q)(function (b) {
            this.Ab || (b && b.Lm && b.Lm.length && a("这里是根据你关注的话题和人定制的内容精选"), this.J.hk(), Fp(this), Hp(this))
        }, this));
        this.Ab || Ip()
    };
    z.x(Kp, z.G);
    z.e = Kp.prototype;
    z.e.h = null;
    z.e.$s = null;
    z.e.lz = null;
    z.e.at = null;
    z.e.ge = -1;
    z.e.ri = -1;
    z.e.Yv = !1;
    var nF = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    }, oF = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    }, pF = z.C || z.Gc || z.D && z.E("525"), qF = z.Uc && z.B;
    z.e = Kp.prototype;
    z.e.mf = function (a) {
        if (z.D || z.Gc) if (17 == this.ge && !a.ctrlKey || 18 == this.ge && !a.altKey || z.Uc && 91 == this.ge && !a.metaKey) this.ri = this.ge = -1;
        -1 == this.ge && (a.ctrlKey && 17 != a.keyCode ? this.ge = 17 : a.altKey && 18 != a.keyCode ? this.ge = 18 : a.metaKey && 91 != a.keyCode && (this.ge = 91));
        pF && !so(a.keyCode, this.ge, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.ri = z.lj(a.keyCode), qF && (this.Yv = a.altKey))
    };
    z.e.VP = function (a) {
        this.ri = this.ge = -1;
        this.Yv = a.altKey
    };
    z.e.handleEvent = function (a) {
        var b = a.gc, c, d, f = b.altKey;
        z.C && "keypress" == a.type ? (c = this.ri, d = 13 != c && 27 != c ? b.keyCode : 0) : (z.D || z.Gc) && "keypress" == a.type ? (c = this.ri, d = 0 <= b.charCode && 63232 > b.charCode && z.eo(c) ? b.charCode : 0) : z.ug && !z.D ? (c = this.ri, d = z.eo(c) ? b.keyCode : 0) : (c = b.keyCode || this.ri, d = b.charCode || 0, qF && (f = this.Yv), z.Uc && 63 == d && 224 == c && (c = 191));
        var g = c = z.lj(c), h = b.keyIdentifier;
        c ? 63232 <= c && c in nF ? g = nF[c] : 25 == c && a.shiftKey && (g = 9) : h && h in oF && (g = oF[h]);
        a = g == this.ge;
        this.ge = g;
        b = new Lp(g, d, a, b);
        b.altKey =
            f;
        this.dispatchEvent(b)
    };
    z.e.m = function () {
        return this.h
    };
    z.e.attach = function (a, b) {
        this.at && this.detach();
        this.h = a;
        this.$s = z.F(this.h, "keypress", this, b);
        this.lz = z.F(this.h, "keydown", this.mf, b, this);
        this.at = z.F(this.h, "keyup", this.VP, b, this)
    };
    z.e.detach = function () {
        this.$s && (z.nd(this.$s), z.nd(this.lz), z.nd(this.at), this.at = this.lz = this.$s = null);
        this.h = null;
        this.ri = this.ge = -1
    };
    z.e.D = function () {
        Kp.o.D.call(this);
        this.detach()
    };
    z.x(Lp, z.Pc);
    var rF;
    z.la(Mp);
    var sF = {
        button: "pressed",
        checkbox: "checked",
        menuitem: "selected",
        menuitemcheckbox: "checked",
        menuitemradio: "checked",
        radio: "checked",
        tab: "selected",
        treeitem: "selected"
    };
    z.e = Mp.prototype;
    z.e.jf = function () {
    };
    z.e.B = function (a) {
        return a.K().B("DIV", this.Xf(a).join(" "), a.Ua())
    };
    z.e.S = function (a) {
        return a
    };
    z.e.rj = function (a, b, c) {
        if (a = a.m ? a.m() : a) {
            var d = [b];
            z.C && !z.E("7") && (d = Qp(z.fj(a), b), d.push(b));
            (c ? z.ij : z.kj)(a, d)
        }
    };
    z.e.Ob = function () {
        return !0
    };
    z.e.w = function (a, b) {
        b.id && On(a, b.id);
        var c = this.S(b);
        c && c.firstChild ? a.wm(c.firstChild.nextSibling ? z.vb(c.childNodes) : c.firstChild) : a.wm(null);
        var d = 0, f = this.U(), g = this.U(), h = !1, k = !1, m = !1, n = z.vb(z.fj(b));
        z.y(n, function (a) {
            h || a != f ? k || a != g ? d |= this.ns(a) : k = !0 : (h = !0, g == f && (k = !0));
            1 == this.ns(a) && Dn(c) && z.nf(c, !1)
        }, this);
        a.N = d;
        h || (n.push(f), g == f && (k = !0));
        k || n.push(g);
        var r = a.hf;
        r && n.push.apply(n, r);
        if (z.C && !z.E("7")) {
            var w = Qp(n);
            0 < w.length && (n.push.apply(n, w), m = !0)
        }
        if (!h || !k || r || m) b.className = n.join(" ");
        return b
    };
    z.e.Ee = function (a) {
        a.qd() && this.uh(a.m(), !0);
        a.isEnabled() && this.Oe(a, a.V())
    };
    z.e.ZA = function (a, b) {
        z.cj(a, "label", b)
    };
    z.e.Ip = function (a, b) {
        z.zo(a, !b, !z.C && !z.ug)
    };
    z.e.uh = function (a, b) {
        this.rj(a, this.U() + "-rtl", b)
    };
    z.e.bg = function (a) {
        var b;
        return Pp(a, 32) && (b = a.Yb()) ? Dn(b) : !1
    };
    z.e.Oe = function (a, b) {
        var c;
        if (Pp(a, 32) && (c = a.Yb())) {
            if (!b && a.N & 32) {
                try {
                    c.blur()
                } catch (d) {
                }
                a.N & 32 && a.Xc(null)
            }
            Dn(c) != b && z.nf(c, b)
        }
    };
    z.e.G = function (a, b) {
        z.Q(a, b);
        a && z.cj(a, "hidden", !b)
    };
    z.e.lc = function (a, b, c) {
        var d = a.m();
        if (d) {
            var f = this.Vn(b);
            f && this.rj(a, f, c);
            this.ug(d, b, c)
        }
    };
    z.e.ug = function (a, b, c) {
        rF || (rF = {1: "disabled", 8: "selected", 16: "checked", 64: "expanded"});
        b = rF[b];
        var d = a.getAttribute("role") || null;
        d && (d = sF[d] || b, b = "checked" == b || "selected" == b ? d : b);
        b && z.cj(a, b, c)
    };
    z.e.ia = function (a, b) {
        var c = this.S(a);
        if (c && (z.$e(c), b)) if (z.pa(b)) z.mf(c, b); else {
            var d = function (a) {
                if (a) {
                    var b = z.Je(c);
                    c.appendChild(z.pa(a) ? b.createTextNode(a) : a)
                }
            };
            z.na(b) ? z.y(b, d) : !z.oa(b) || "nodeType" in b ? d(b) : z.y(z.vb(b), d)
        }
    };
    z.e.Yb = function (a) {
        return a.m()
    };
    z.e.U = function () {
        return "goog-control"
    };
    z.e.Xf = function (a) {
        var b = this.U(), c = [b], d = this.U();
        d != b && c.push(d);
        b = a.getState();
        for (d = []; b;) {
            var f = b & -b;
            d.push(this.Vn(f));
            b &= ~f
        }
        c.push.apply(c, d);
        (a = a.hf) && c.push.apply(c, a);
        z.C && !z.E("7") && c.push.apply(c, Qp(c));
        return c
    };
    z.e.Vn = function (a) {
        this.pr || Rp(this);
        return this.pr[a]
    };
    z.e.ns = function (a) {
        this.cK || (this.pr || Rp(this), this.cK = z.$o(this.pr));
        a = (0, window.parseInt)(this.cK[a], 10);
        return (0, window.isNaN)(a) ? 0 : a
    };
    z.x(z.Sp, Mp);
    z.la(z.Sp);
    z.e = z.Sp.prototype;
    z.e.jf = function () {
        return "button"
    };
    z.e.ug = function (a, b, c) {
        switch (b) {
            case 8:
            case 16:
                z.cj(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                z.Sp.o.ug.call(this, a, b, c)
        }
    };
    z.e.B = function (a) {
        var b = z.Sp.o.B.call(this, a);
        this.wd(b, a.Gl());
        var c = a.X();
        c && this.Ea(b, c);
        Pp(a, 16) && this.ug(b, 16, a.qf());
        return b
    };
    z.e.w = function (a, b) {
        b = z.Sp.o.w.call(this, a, b);
        var c = this.X(b);
        a.me = c;
        a.QB = this.Gl(b);
        Pp(a, 16) && this.ug(b, 16, a.qf());
        return b
    };
    z.e.X = z.p;
    z.e.Ea = z.p;
    z.e.Gl = function (a) {
        return a.title
    };
    z.e.wd = function (a, b) {
        a && (b ? a.title = b : a.removeAttribute("title"))
    };
    z.e.Hi = z.aa(29);
    z.e.U = function () {
        return "goog-button"
    };
    var Wp = {}, Up = {};
    z.x(Vp, z.R);
    z.e = Vp.prototype;
    z.e.rc = null;
    z.e.N = 0;
    z.e.bq = 39;
    z.e.cj = 255;
    z.e.yk = 0;
    z.e.sb = !0;
    z.e.hf = null;
    z.e.Hj = !0;
    z.e.Vq = !1;
    z.e.qp = null;
    z.e.Np = function (a) {
        this.wa && a != this.Hj && Xp(this, a);
        this.Hj = a
    };
    z.e.Yb = function () {
        return this.M.Yb(this)
    };
    z.e.ks = function () {
        return this.vb || (this.vb = new Kp)
    };
    z.e.Kh = function (a) {
        a && (this.hf ? z.A(this.hf, a) || this.hf.push(a) : this.hf = [a], this.M.rj(this, a, !0))
    };
    z.e.rj = function (a, b) {
        b ? this.Kh(a) : a && this.hf && z.tb(this.hf, a) && (0 == this.hf.length && (this.hf = null), this.M.rj(this, a, !1))
    };
    z.e.B = function () {
        var a = this.M.B(this);
        this.h = a;
        Np(this.M, a, this.ki());
        this.Vq || this.M.Ip(a, !1);
        this.V() || this.M.G(a, !1)
    };
    z.e.ki = function () {
        return this.qp
    };
    z.e.Du = function (a) {
        this.qp = a
    };
    z.e.ZA = function (a) {
        this.iD = a;
        var b = this.m();
        b && this.M.ZA(b, a)
    };
    z.e.S = function () {
        return this.M.S(this.m())
    };
    z.e.Ob = function (a) {
        return this.M.Ob(a)
    };
    z.e.Y = function (a) {
        this.h = a = this.M.w(this, a);
        Np(this.M, a, this.ki());
        this.Vq || this.M.Ip(a, !1);
        this.sb = "none" != a.style.display
    };
    z.e.C = function () {
        Vp.o.C.call(this);
        Op(this.M, this, this.h);
        this.M.Ee(this);
        if (this.bq & -2 && (this.Hj && Xp(this, !0), Pp(this, 32))) {
            var a = this.Yb();
            if (a) {
                var b = this.ks();
                b.attach(a);
                this.v().g(b, "key", this.Zb).g(a, "focus", this.ee).g(a, "blur", this.Xc)
            }
        }
    };
    z.e.Hb = function () {
        Vp.o.Hb.call(this);
        this.vb && this.vb.detach();
        this.V() && this.isEnabled() && this.M.Oe(this, !1)
    };
    z.e.D = function () {
        Vp.o.D.call(this);
        this.vb && (this.vb.H(), delete this.vb);
        delete this.M;
        this.qo = this.hf = this.rc = null
    };
    z.e.Ua = function () {
        return this.rc
    };
    z.e.ia = function (a) {
        this.M.ia(this.m(), a);
        this.wm(a)
    };
    z.e.wm = function (a) {
        this.rc = a
    };
    z.e.Qg = function () {
        var a = this.Ua();
        if (!a) return "";
        a = z.pa(a) ? a : z.na(a) ? z.nb(a, z.Io).join("") : z.of(a);
        return mp(a)
    };
    z.e.Jp = function (a) {
        this.ia(a)
    };
    z.e.uh = function (a) {
        Vp.o.uh.call(this, a);
        var b = this.m();
        b && this.M.uh(b, a)
    };
    z.e.Ip = function (a) {
        this.Vq = a;
        var b = this.m();
        b && this.M.Ip(b, a)
    };
    z.e.V = function () {
        return this.sb
    };
    z.e.G = function (a, b) {
        if (b || this.sb != a && this.dispatchEvent(a ? "show" : "hide")) {
            var c = this.m();
            c && this.M.G(c, a);
            this.isEnabled() && this.M.Oe(this, a);
            this.sb = a;
            return !0
        }
        return !1
    };
    z.e.isEnabled = function () {
        return !(this.N & 1)
    };
    z.e.Wa = function (a) {
        var b = this.getParent();
        b && "function" == typeof b.isEnabled && !b.isEnabled() || !$p(this, 1, !a) || (a || (this.setActive(!1), this.Mc(!1)), this.V() && this.M.Oe(this, a), this.lc(1, !a, !0))
    };
    z.e.Mc = function (a) {
        $p(this, 2, a) && this.lc(2, a)
    };
    z.e.tc = function () {
        return !!(this.N & 4)
    };
    z.e.setActive = function (a) {
        $p(this, 4, a) && this.lc(4, a)
    };
    z.e.gB = function (a) {
        $p(this, 8, a) && this.lc(8, a)
    };
    z.e.qf = function () {
        return !!(this.N & 16)
    };
    z.e.Kc = function (a) {
        $p(this, 16, a) && this.lc(16, a)
    };
    z.e.ub = function () {
        return !!(this.N & 64)
    };
    z.e.Cb = function (a) {
        $p(this, 64, a) && this.lc(64, a)
    };
    z.e.getState = function () {
        return this.N
    };
    z.e.lc = function (a, b, c) {
        c || 1 != a ? Pp(this, a) && b != !!(this.N & a) && (this.M.lc(this, a, b), this.N = b ? this.N | a : this.N & ~a) : this.Wa(!b)
    };
    z.e.Tb = function (a, b) {
        if (this.wa && this.N & a && !b) throw Error("Component already rendered");
        !b && this.N & a && this.lc(a, !1);
        this.bq = b ? this.bq | a : this.bq & ~a
    };
    z.e.nd = function (a) {
        (!a.relatedTarget || !z.lf(this.m(), a.relatedTarget)) && this.dispatchEvent("enter") && this.isEnabled() && Zp(this, 2) && this.Mc(!0)
    };
    z.e.Kl = function (a) {
        a.relatedTarget && z.lf(this.m(), a.relatedTarget) || !this.dispatchEvent("leave") || (Zp(this, 4) && this.setActive(!1), Zp(this, 2) && this.Mc(!1))
    };
    z.e.ho = z.p;
    z.e.fe = function (a) {
        this.isEnabled() && (Zp(this, 2) && this.Mc(!0), z.Tc(a) && (Zp(this, 4) && this.setActive(!0), this.M && this.M.bg(this) && this.Yb().focus()));
        !this.Vq && z.Tc(a) && a.preventDefault()
    };
    z.e.of = function (a) {
        this.isEnabled() && (Zp(this, 2) && this.Mc(!0), this.tc() && this.Nd(a) && Zp(this, 4) && this.setActive(!1))
    };
    z.e.PF = function (a) {
        this.isEnabled() && this.Nd(a)
    };
    z.e.Nd = function (a) {
        Zp(this, 16) && this.Kc(!this.qf());
        Zp(this, 8) && this.gB(!0);
        Zp(this, 64) && this.Cb(!this.ub());
        var b = new z.Lc("action", this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.wA = a.wA);
        return this.dispatchEvent(b)
    };
    z.e.ee = function () {
        Zp(this, 32) && $p(this, 32, !0) && this.lc(32, !0)
    };
    z.e.Xc = function () {
        Zp(this, 4) && this.setActive(!1);
        Zp(this, 32) && $p(this, 32, !1) && this.lc(32, !1)
    };
    z.e.Zb = function (a) {
        return this.V() && this.isEnabled() && this.nf(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
    };
    z.e.nf = function (a) {
        return 13 == a.keyCode && this.Nd(a)
    };
    if (!z.sa(Vp)) throw Error("Invalid component class " + Vp);
    if (!z.sa(Mp)) throw Error("Invalid renderer class " + Mp);
    var tF = z.ua(Vp);
    Wp[tF] = Mp;
    z.Tp("goog-control", function () {
        return new Vp(null)
    });
    z.x(Yp, z.xc);
    Yp.prototype.Il = function () {
        this.qr = !1
    };
    Yp.prototype.xs = function () {
        this.qr = !0
    };
    Yp.prototype.Hl = function (a) {
        if (this.qr) this.qr = !1; else {
            var b = a.gc, c = b.button, d = b.type;
            b.button = 0;
            b.type = "mousedown";
            this.zr.fe(new z.Pc(b, a.currentTarget));
            b.type = "mouseup";
            this.zr.of(new z.Pc(b, a.currentTarget));
            b.button = c;
            b.type = d
        }
    };
    Yp.prototype.D = function () {
        this.zr = null;
        Yp.o.D.call(this)
    };
    z.x(aq, z.Sp);
    z.la(aq);
    z.e = aq.prototype;
    z.e.jf = function () {
    };
    z.e.B = function (a) {
        a.Np(!1);
        a.cj &= -256;
        a.Tb(32, !1);
        return a.K().B("BUTTON", {
            "class": this.Xf(a).join(" "),
            disabled: !a.isEnabled(),
            title: a.Gl() || "",
            value: a.X() || ""
        }, a.Qg() || "")
    };
    z.e.Ob = function (a) {
        return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
    };
    z.e.w = function (a, b) {
        a.Np(!1);
        a.cj &= -256;
        a.Tb(32, !1);
        if (b.disabled) {
            var c = this.Vn(1);
            z.hj(b, c)
        }
        return aq.o.w.call(this, a, b)
    };
    z.e.Ee = function (a) {
        a.v().g(a.m(), "click", a.Nd)
    };
    z.e.Ip = z.p;
    z.e.uh = z.p;
    z.e.bg = function (a) {
        return a.isEnabled()
    };
    z.e.Oe = z.p;
    z.e.lc = function (a, b, c) {
        aq.o.lc.call(this, a, b, c);
        (a = a.m()) && 1 == b && (a.disabled = c)
    };
    z.e.X = function (a) {
        return a.value
    };
    z.e.Ea = function (a, b) {
        a && (a.value = b)
    };
    z.e.ug = z.p;
    z.x(z.bq, Vp);
    z.e = z.bq.prototype;
    z.e.X = function () {
        return this.me
    };
    z.e.Ea = function (a) {
        this.me = a;
        this.M.Ea(this.m(), a)
    };
    z.e.Gl = function () {
        return this.QB
    };
    z.e.wd = function (a) {
        this.QB = a;
        this.M.wd(this.m(), a)
    };
    z.e.Hi = z.aa(28);
    z.e.D = function () {
        z.bq.o.D.call(this);
        delete this.me;
        delete this.QB
    };
    z.e.C = function () {
        z.bq.o.C.call(this);
        if (Pp(this, 32)) {
            var a = this.Yb();
            a && this.v().g(a, "keyup", this.nf)
        }
    };
    z.e.nf = function (a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.Nd(a) : 32 == a.keyCode
    };
    z.Tp("goog-button", function () {
        return new z.bq(null)
    });
    z.x(cq, Mp);
    z.la(cq);
    cq.prototype.B = function (a) {
        var b = a.K().B("SPAN", this.Xf(a).join(" "));
        dq(this, b, a.Uh);
        return b
    };
    cq.prototype.w = function (a, b) {
        b = cq.o.w.call(this, a, b);
        var c = z.fj(b), d = iq;
        z.A(c, eq(this, gq)) ? d = gq : z.A(c, eq(this, hq)) ? d = hq : z.A(c, eq(this, iq)) && (d = iq);
        a.Uh = d;
        z.cj(b, "checked", d == gq ? "mixed" : d == hq ? "true" : "false");
        return b
    };
    cq.prototype.jf = function () {
        return "checkbox"
    };
    cq.prototype.U = function () {
        return "goog-checkbox"
    };
    z.x(jq, Vp);
    var hq = !0, iq = !1, gq = null, fq = {oX: hq, $X: iq, bY: gq};
    z.e = jq.prototype;
    z.e.Mb = null;
    z.e.qf = function () {
        return this.Uh == hq
    };
    z.e.Kc = function (a) {
        a != this.Uh && (this.Uh = a, dq(this.M, this.m(), this.Uh))
    };
    z.e.toggle = function () {
        this.Kc(this.Uh ? iq : hq)
    };
    z.e.C = function () {
        jq.o.C.call(this);
        if (this.Hj) {
            var a = this.v();
            this.Mb && a.g(this.Mb, "click", this.gy).g(this.Mb, "mouseover", this.nd).g(this.Mb, "mouseout", this.Kl).g(this.Mb, "mousedown", this.fe).g(this.Mb, "mouseup", this.of);
            a.g(this.m(), "click", this.gy)
        }
        a = this.h;
        if (this.Mb && a != this.Mb && z.pp(vo(a))) {
            if (!this.Mb.id) {
                var b = this.Mb, c;
                c = this.de() + ".lbl";
                b.id = c
            }
            z.cj(a, "labelledby", this.Mb.id)
        }
    };
    z.e.Wa = function (a) {
        jq.o.Wa.call(this, a);
        if (a = this.m()) a.tabIndex = this.isEnabled() ? 0 : -1
    };
    z.e.gy = function (a) {
        a.stopPropagation();
        var b = this.Uh ? "uncheck" : "check";
        this.isEnabled() && !a.target.href && this.dispatchEvent(b) && (a.preventDefault(), this.toggle(), this.dispatchEvent("change"))
    };
    z.e.nf = function (a) {
        32 == a.keyCode && (this.Nd(a), this.gy(a));
        return !1
    };
    z.Tp("goog-checkbox", function () {
        return new jq
    });
    z.x(z.kq, z.Sp);
    z.la(z.kq);
    z.e = z.kq.prototype;
    z.e.B = function (a) {
        var b = {"class": "goog-inline-block " + this.Xf(a).join(" ")}, b = a.K().B("DIV", b, a.Ua());
        this.wd(b, a.Gl());
        return b
    };
    z.e.jf = function () {
        return "button"
    };
    z.e.Ob = function (a) {
        return "DIV" == a.tagName
    };
    z.e.w = function (a, b) {
        z.hj(b, "goog-inline-block");
        return z.kq.o.w.call(this, a, b)
    };
    z.e.X = function () {
        return ""
    };
    z.e.U = function () {
        return "goog-flat-button"
    };
    z.Tp("goog-flat-button", function () {
        return new z.bq(null, z.kq.ba())
    });
    z.x(lq, z.kq);
    z.la(lq);
    lq.prototype.U = function () {
        return "goog-link-button"
    };
    z.Tp("goog-link-button", function () {
        return new z.bq(null, lq.ba())
    });
    z.x(z.mq, z.G);
    z.e = z.mq.prototype;
    z.e.Hj = !0;
    z.e.D = function () {
        z.mq.o.D.call(this);
        z.Cc(this.fH);
        z.Cc(this.Pz)
    };
    z.e.jf = function () {
        return "tab"
    };
    z.e.S = function () {
        return this.rl
    };
    z.e.expand = function () {
        this.Lc(!0)
    };
    z.e.collapse = function () {
        this.Lc(!1)
    };
    z.e.toggle = function () {
        this.Lc(!this.ob)
    };
    z.e.Lc = function (a) {
        this.rl ? z.Q(this.rl, a) : a && this.gt && (this.rl = this.gt());
        this.rl && z.hj(this.rl, "goog-zippy-content");
        this.qj ? (z.Q(this.Rf, !a), z.Q(this.qj, a)) : this.Rf && (z.uo(this.Rf, "goog-zippy-expanded", a), z.uo(this.Rf, "goog-zippy-collapsed", !a), z.cj(this.Rf, "expanded", a));
        this.ob = a;
        this.dispatchEvent(new pq("toggle", this, this.ob))
    };
    z.e.Yc = function () {
        return this.ob
    };
    z.e.Np = function (a) {
        this.Hj != a && ((this.Hj = a) ? (nq(this, this.Rf), nq(this, this.qj)) : this.Pz.removeAll())
    };
    z.e.VS = function (a) {
        if (13 == a.keyCode || 32 == a.keyCode) this.toggle(), this.dispatchEvent(new z.Lc("action", this)), a.preventDefault(), a.stopPropagation()
    };
    z.e.US = function () {
        this.toggle();
        this.dispatchEvent(new z.Lc("action", this))
    };
    z.x(pq, z.Lc);
    z.x(z.qq, z.V);
    z.e = z.qq.prototype;
    z.e.B = function () {
        z.qq.o.B.call(this);
        var a = (0, window.$)(".activate-dialog-template").html();
        this.ia(a)
    };
    z.e.C = function () {
        z.qq.o.C.call(this);
        z.Tj(this, 420);
        this.Na("激活帐号");
        this.Ad = (0, window.$)(this.fi()).addClass("activate-dialog");
        this.hc()
    };
    z.e.hc = function () {
        this.xC = (0, window.$)(".link-activate-view", this.Ad);
        this.oC = (0, window.$)(".code-activate-view", this.Ad);
        this.xC.length ? rq(this) : tq(this)
    };
    z.e.vT = function (a) {
        var b = this, c = (0, window.$)(a);
        a = c.ie();
        var d = a.account, f = this.rf(d),
            g = f ? "/settings/account/send_new_email_digits" : "/settings/account/send_new_phone_digits";
        f ? this.wb(a, "account", "email") : this.wb(a, "account", "phone_no");
        return window.$.post(g, a, function (a) {
            a.success ? (c.hide(), (0, window.$)('input[name\x3d"account"]', b.lC).val(d), b.lC.show(), vq(b, f)) : (a = a.payload.fields, f ? b.wb(a, "email", "account") : b.wb(a, "phone_no", "account"), c.data("validator").showErrors(a))
        })
    };
    z.e.wS = function (a) {
        var b = this, c = (0, window.$)(a);
        a = c.ie();
        var d = this.rf(a.account), f = d ? "/settings/account/update_email" : "/settings/account/update_phone";
        d ? this.wb(a, "account", "email") : this.wb(a, "account", "phone_no");
        return window.$.post(f, a, function (a) {
            a.success ? (b.ia("激活成功。你可以正常使用提问、回答、评论等功能啦！"), (0, window.setTimeout)(function () {
                window.location.reload()
            }, 1E3)) : (a = a.payload.fields, d ? b.wb(a, "email", "account") : b.wb(a, "phone_no", "account"), c.data("validator").showErrors(a))
        })
    };
    z.e.wb = function (a, b, c) {
        a[b] && (a[c] = a[b], delete a[b])
    };
    z.e.rf = function (a) {
        return !/^\+?[0-9]+$/.test(a)
    };
    var uq = {
        onkeyup: !1,
        onfocusout: !1,
        validClass: "",
        focusInvalid: !1,
        highlight: z.p,
        messages: {account: {required: "请填写手机号或邮箱"}, digits: {required: "请填写验证码"}},
        errorPlacement: function (a, b) {
            var c = b.parent(".input-wrapper");
            a.appendTo(c).click(function () {
                b.focus()
            });
            b.focus(function () {
                a.remove()
            })
        }
    };
    z.l(xq, z.G);
    xq.prototype.D = function () {
        z.G.prototype.D.call(this);
        this.Qu && ((0, window.clearTimeout)(this.Qu), this.Qu = null)
    };
    xq.prototype.Yt = function () {
        if (!this.promise || "pending" !== this.promise.state()) {
            var a = this.EM;
            this.promise = (window.$.support.cors ? window.$.ajax(a) : wq(a)).done(this.onMessage.bind(this)).fail(this.Zz.bind(this))
        }
    };
    xq.prototype.onMessage = function (a) {
        try {
            this.dispatchEvent({type: "message", data: a})
        } catch (b) {
        }
        this.Qu = (0, window.setTimeout)(this.Yt.bind(this), this.iU)
    };
    xq.prototype.Zz = function () {
        this.dispatchEvent("error");
        this.su < this.GH && (this.su = Math.min(this.su * this.SQ, this.GH));
        this.Qu = (0, window.setTimeout)(this.Yt.bind(this), this.su)
    };
    var yq = {type: "GET", url: "", data: {}, timeout: 6E4, xhrFields: {withCredentials: !0}};
    z.l(z.zq, z.R);
    z.zq.prototype.B = function () {
        this.h = z.O("div", {innerHTML: (0, window.$)(".unblock-dialog-template").html()})
    };
    z.zq.prototype.C = function () {
        z.R.prototype.C.call(this);
        this.Lk = (0, window.$)(".unblock-dialog-loading", this.h);
        this.rC = (0, window.$)(".unblock-dialog-error", this.h);
        this.Fv = (0, window.$)(".unblock-dialog-view", this.h);
        Aq(this);
        this.Ny();
        this.hn();
        Hq(this)
    };
    z.zq.prototype.Ny = function () {
        this.Bc = new z.dk("antispam");
        this.Bc.w((0, window.$)(".unblock-dialog-captcha", this.h).get(0))
    };
    z.zq.prototype.hn = function () {
        Bq(this);
        Fq(this);
        Gq(this)
    };
    z.l(Iq, z.V);
    Iq.prototype.B = function () {
        z.V.prototype.B.call(this);
        this.Na("帐号解封");
        z.Lj(this, null);
        this.Bf(!0)
    };
    Iq.prototype.C = function () {
        var a = this;
        z.V.prototype.C.call(this);
        this.VB = new z.zq(function (b) {
            return a.Na(b)
        }, !0);
        z.Ac(this, this.VB);
        this.VB.render(this.S());
        this.VB.g("complete", function () {
            return a.G(!1)
        })
    };
    z.x(Kq, z.G);
    var Lq = 0;
    Kq.prototype.hg = function () {
        this.jd("begin")
    };
    Kq.prototype.ig = function () {
        this.jd("end")
    };
    Kq.prototype.jd = function (a) {
        this.dispatchEvent(a)
    };
    z.x(Mq, z.xc);
    z.e = Mq.prototype;
    z.e.pb = 0;
    z.e.D = function () {
        Mq.o.D.call(this);
        this.stop();
        delete this.$j;
        delete this.ga
    };
    z.e.start = function (a) {
        this.stop();
        this.pb = z.vd(this.cl, z.ka(a) ? a : this.Yg)
    };
    z.e.stop = function () {
        this.tc() && z.wd(this.pb);
        this.pb = 0
    };
    z.e.fire = function () {
        this.stop();
        this.Jg()
    };
    z.e.tc = function () {
        return 0 != this.pb
    };
    z.e.Jg = function () {
        this.pb = 0;
        this.$j && this.$j.call(this.ga)
    };
    var Pq = {}, Qq = null;
    z.x(Uq, Kq);
    z.e = Uq.prototype;
    z.e.Lg = function (a) {
        this.Qi = a
    };
    z.e.play = function (a) {
        if (a || this.N == Lq) this.progress = 0, this.coords = this.Yp; else if (1 == this.N) return !1;
        Oq(this);
        this.startTime = a = (0, z.I)();
        -1 == this.N && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.progress || this.hg();
        this.jd("play");
        -1 == this.N && this.jd("resume");
        this.N = 1;
        var b = z.ua(this);
        b in Pq || (Pq[b] = this);
        Rq();
        Tq(this, a);
        return !0
    };
    z.e.stop = function (a) {
        Oq(this);
        this.N = Lq;
        a && (this.progress = 1);
        Vq(this, this.progress);
        this.jd("stop");
        this.ig()
    };
    z.e.pause = function () {
        1 == this.N && (Oq(this), this.N = -1, this.jd("pause"))
    };
    z.e.D = function () {
        this.N == Lq || this.stop(!1);
        this.jd("destroy");
        Uq.o.D.call(this)
    };
    z.e.destroy = function () {
        this.H()
    };
    z.e.Vz = function () {
        this.jd("animate")
    };
    z.e.jd = function (a) {
        this.dispatchEvent(new Wq(a, this))
    };
    z.x(Wq, z.Lc);
    var br = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    var cr = /#(.)(.)(.)/, Yq = /^#(?:[0-9a-f]{3}){1,2}$/i,
        dr = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
    z.x(er, Uq);
    z.e = er.prototype;
    z.e.Dh = z.p;
    z.e.qd = function () {
        z.ka(this.og) || (this.og = z.Mg(this.element));
        return this.og
    };
    z.e.Vz = function () {
        this.Dh();
        er.o.Vz.call(this)
    };
    z.e.ig = function () {
        this.Dh();
        er.o.ig.call(this)
    };
    z.e.hg = function () {
        this.Dh();
        er.o.hg.call(this)
    };
    z.x(fr, er);
    fr.prototype.Dh = function () {
        var a = this.Qi && this.qd() ? "right" : "left";
        this.element.style[a] = Math.round(this.coords[0]) + "px";
        this.element.style.top = Math.round(this.coords[1]) + "px"
    };
    z.x(gr, er);
    gr.prototype.Dh = function () {
        if (this.Qi) {
            var a = this.element, b = Math.round(this.coords[0]), b = Math.max(b, 0);
            z.Mg(a) ? z.B ? a.scrollLeft = -b : z.Jl && z.E("8") ? a.scrollLeft = b : a.scrollLeft = a.scrollWidth - b - a.clientWidth : a.scrollLeft = b
        } else this.element.scrollLeft = Math.round(this.coords[0]);
        this.element.scrollTop = Math.round(this.coords[1])
    };
    z.x(hr, er);
    hr.prototype.Dh = function () {
        this.element.style.width = Math.round(this.coords[0]) + "px"
    };
    z.x(ir, er);
    ir.prototype.Dh = function () {
        this.element.style.height = Math.round(this.coords[0]) + "px"
    };
    z.x(jr, er);
    var uF = 1 / 1024, kr = -1;
    z.e = jr.prototype;
    z.e.Dh = function () {
        var a = this.coords[0];
        Math.abs(a - this.et) >= uF && (z.Jg(this.element, a), this.et = a)
    };
    z.e.hg = function () {
        this.et = kr;
        jr.o.hg.call(this)
    };
    z.e.ig = function () {
        this.et = kr;
        jr.o.ig.call(this)
    };
    z.e.show = function () {
        this.element.style.display = ""
    };
    z.e.hide = function () {
        this.element.style.display = "none"
    };
    z.x(lr, jr);
    lr.prototype.hg = function () {
        this.show();
        lr.o.hg.call(this)
    };
    lr.prototype.ig = function () {
        this.hide();
        lr.o.ig.call(this)
    };
    z.x(mr, jr);
    mr.prototype.hg = function () {
        this.show();
        mr.o.hg.call(this)
    };
    z.x(nr, er);
    nr.prototype.Dh = function () {
        for (var a = [], b = 0; b < this.coords.length; b++) a[b] = Math.round(this.coords[b]);
        this.element.style.backgroundColor = "rgb(" + a.join(",") + ")"
    };
    var vF = {
        hidden: "visibilitychange",
        msHidden: "msvisibilitychange",
        mozHidden: "mozvisibilitychange",
        webkitHidden: "webkitvisibilitychange"
    }, zr;
    a:{
        var wF = function (a, b) {
            return b in window.document
        }, xF;
        for (xF in vF) if (wF.call(void 0, 0, xF)) {
            zr = xF;
            break a
        }
        zr = void 0
    }
    var Ar = vF[zr], yr = z.ka(zr);
    z.Lr = function (a) {
        return function (b) {
            return b.replace(a, "")
        }
    }(/^⁠+|⁠+$/);
    z.Fr.prototype.add = function (a, b) {
        !1 === this.tR ? this.data.set(a, b) : this.data.set((0, window.encodeURIComponent)(a), (0, window.encodeURIComponent)(b))
    };
    z.Fr.prototype.ze = function () {
        var a = [];
        z.y(this.data.ld(), function (b) {
            a.push(b + "\x3d" + this.data.get(b))
        }, this);
        return a.join("\x26")
    };
    z.Rv = function () {
        function a(a) {
            return a.replace(/\\\\/g, "\\").replace(/\\'/g, "'")
        }

        var b = {
            fW: {evaluate: /<%([\s\S]+?)%>/g, nR: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g},
            escape: function (a) {
                return ("" + a).replace(/&/g, "\x26amp;").replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;").replace(/"/g, "\x26quot;").replace(/'/g, "\x26#x27;").replace(/\//g, "\x26#x2F;")
            }
        }, c = /.^/;
        return function (d, f) {
            var g = b.fW,
                g = "var __p\x3d[],print\x3dfunction(){__p.push.apply(__p,arguments);};with(data||{}){__p.push('" + d.replace(/\\/g,
                    "\\\\").replace(/'/g, "\\'").replace(g.escape || c, function (b, c) {
                    return "',_.escape(" + a(c) + "),'"
                }).replace(g.nR || c, function (b, c) {
                    return "'," + a(c) + ",'"
                }).replace(g.evaluate || c, function (b, c) {
                    return "');" + a(c).replace(/[\r\n\t]/g, " ") + ";__p.push('"
                }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
                h = new Function("data", "_", g);
            return f ? h(f, b) : function (a) {
                return h.call(this, a, b)
            }
        }
    }();
    z.Mr.defaults = {paddingTop: 0};
    var Or = {offsetTop: 0, paddingTop: 0, aw: !1};
    (0, window.$)(function () {
        Or.paddingTop = z.Pg(window.document.body).top
    });
    z.yF = z.Qj(function () {
        return (+new Date).toString(32).slice(-5) + Math.random().toString(32).slice(-3)
    });
    z.x(z.Sr, z.Xj);
    z.Sr.prototype.FK = function () {
        return Tr(this)
    };
    z.la(Vr);
    z.e = Vr.prototype;
    z.e.jf = function () {
        return this.ew
    };
    z.e.B = function (a) {
        return a.K().B("DIV", this.Xf(a).join(" "))
    };
    z.e.S = function (a) {
        return a
    };
    z.e.Ob = function (a) {
        return "DIV" == a.tagName
    };
    z.e.w = function (a, b) {
        b.id && On(a, b.id);
        var c = this.U(), d = !1, f = z.fj(b);
        f && z.y(f, function (b) {
            b == c ? d = !0 : b && (b == c + "-disabled" ? a.Wa(!1) : b == c + "-horizontal" ? a.setOrientation(z.zF) : b == c + "-vertical" && a.setOrientation(rz))
        }, this);
        d || z.hj(b, c);
        Xr(this, a, this.S(b));
        return b
    };
    z.e.Wn = function (a) {
        a:{
            var b;
            a = z.fj(a);
            for (var c = 0, d = a.length; c < d; c++) if (b = a[c], b = b in Up ? Up[b]() : null) {
                a = b;
                break a
            }
            a = null
        }
        return a
    };
    z.e.Ee = function (a) {
        a = a.m();
        z.zo(a, !0, z.B);
        z.C && (a.hideFocus = !0);
        var b = this.jf();
        b && z.bj(a, b)
    };
    z.e.Yb = function (a) {
        return a.m()
    };
    z.e.U = function () {
        return "goog-container"
    };
    z.e.Xf = function (a) {
        var b = this.U(), c = [b, a.Nb == z.zF ? b + "-horizontal" : b + "-vertical"];
        a.isEnabled() || c.push(b + "-disabled");
        return c
    };
    z.e.AF = function () {
        return rz
    };
    var rz;
    z.x(z.Yr, z.R);
    z.zF = "horizontal";
    rz = "vertical";
    z.e = z.Yr.prototype;
    z.e.mz = null;
    z.e.vb = null;
    z.e.M = null;
    z.e.Nb = null;
    z.e.sb = !0;
    z.e.ec = !0;
    z.e.Jx = !0;
    z.e.Ta = -1;
    z.e.jc = null;
    z.e.vf = !1;
    z.e.GM = !1;
    z.e.OT = !0;
    z.e.Eg = null;
    z.e.Yb = function () {
        return this.mz || this.M.Yb(this)
    };
    z.e.ks = function () {
        return this.vb || (this.vb = new Kp(this.Yb()))
    };
    z.e.B = function () {
        this.h = this.M.B(this)
    };
    z.e.S = function () {
        return this.M.S(this.m())
    };
    z.e.Ob = function (a) {
        return this.M.Ob(a)
    };
    z.e.Y = function (a) {
        this.h = this.M.w(this, a);
        "none" == a.style.display && (this.sb = !1)
    };
    z.e.C = function () {
        z.Yr.o.C.call(this);
        z.bh(this, function (a) {
            a.wa && $r(this, a)
        }, this);
        var a = this.m();
        this.M.Ee(this);
        this.G(this.sb, !0);
        this.v().g(this, "enter", this.ky).g(this, "highlight", this.ny).g(this, "unhighlight", this.wy).g(this, "open", this.eQ).g(this, "close", this.hy).g(a, "mousedown", this.fe).g(z.Je(a), "mouseup", this.tP).g(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.mP);
        this.bg() && Zr(this, !0)
    };
    z.e.Hb = function () {
        this.xb(-1);
        this.jc && this.jc.Cb(!1);
        this.vf = !1;
        z.Yr.o.Hb.call(this)
    };
    z.e.D = function () {
        z.Yr.o.D.call(this);
        this.vb && (this.vb.H(), this.vb = null);
        this.M = this.jc = this.Eg = this.mz = null
    };
    z.e.ky = function () {
        return !0
    };
    z.e.ny = function (a) {
        var b = Nn(this, a.target);
        if (-1 < b && b != this.Ta) {
            var c = as(this);
            c && c.Mc(!1);
            this.Ta = b;
            c = as(this);
            this.vf && c.setActive(!0);
            this.OT && this.jc && c != this.jc && (Pp(c, 64) ? c.Cb(!0) : this.jc.Cb(!1))
        }
        b = this.m();
        null != a.target.m() && z.cj(b, "activedescendant", a.target.m().id)
    };
    z.e.wy = function (a) {
        a.target == as(this) && (this.Ta = -1);
        this.m().removeAttribute("aria-activedescendant")
    };
    z.e.eQ = function (a) {
        (a = a.target) && a != this.jc && a.getParent() == this && (this.jc && this.jc.Cb(!1), this.jc = a)
    };
    z.e.hy = function (a) {
        a.target == this.jc && (this.jc = null);
        var b = this.m(), c = a.target.m();
        b && a.target.N & 2 && c && wo(b, c)
    };
    z.e.fe = function (a) {
        this.ec && (this.vf = !0);
        var b = this.Yb();
        b && Dn(b) ? b.focus() : a.preventDefault()
    };
    z.e.tP = function () {
        this.vf = !1
    };
    z.e.mP = function (a) {
        var b;
        a:{
            b = a.target;
            if (this.Eg) for (var c = this.m(); b && b !== c;) {
                var d = b.id;
                if (d in this.Eg) {
                    b = this.Eg[d];
                    break a
                }
                b = b.parentNode
            }
            b = null
        }
        if (b) switch (a.type) {
            case "mousedown":
                b.fe(a);
                break;
            case "mouseup":
                b.of(a);
                break;
            case "mouseover":
                b.nd(a);
                break;
            case "mouseout":
                b.Kl(a);
                break;
            case "contextmenu":
                b.ho(a)
        }
    };
    z.e.ee = function () {
    };
    z.e.Xc = function () {
        this.xb(-1);
        this.vf = !1;
        this.jc && this.jc.Cb(!1)
    };
    z.e.Zb = function (a) {
        return this.isEnabled() && this.V() && (0 != z.$g(this) || this.mz) && this.nf(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
    };
    z.e.nf = function (a) {
        var b = as(this);
        if (b && "function" == typeof b.Zb && b.Zb(a) || this.jc && this.jc != b && "function" == typeof this.jc.Zb && this.jc.Zb(a)) return !0;
        if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
        switch (a.keyCode) {
            case 27:
                if (this.bg()) this.Yb().blur(); else return !1;
                break;
            case 36:
                z.bs(this);
                break;
            case 35:
                ds(this);
                break;
            case 38:
                if (this.Nb == rz) fs(this); else return !1;
                break;
            case 37:
                if (this.Nb == z.zF) this.qd() ? es(this) : fs(this); else return !1;
                break;
            case 40:
                if (this.Nb == rz) es(this); else return !1;
                break;
            case 39:
                if (this.Nb == z.zF) this.qd() ? fs(this) : es(this); else return !1;
                break;
            default:
                return !1
        }
        return !0
    };
    z.e.L = function (a, b) {
        z.Yr.o.L.call(this, a, b)
    };
    z.e.Rk = function (a, b, c) {
        a.yk |= 2;
        a.yk |= 64;
        !this.bg() && this.GM || a.Tb(32, !1);
        a.Np(!1);
        var d = a.getParent() == this ? Nn(this, a) : -1;
        z.Yr.o.Rk.call(this, a, b, c);
        a.wa && this.wa && $r(this, a);
        a = d;
        -1 == a && (a = z.$g(this));
        a == this.Ta ? this.Ta = Math.min(z.$g(this) - 1, b) : a > this.Ta && b <= this.Ta ? this.Ta++ : a < this.Ta && b > this.Ta && this.Ta--
    };
    z.e.removeChild = function (a, b) {
        if (a = z.pa(a) ? z.Zg(this, a) : a) {
            var c = Nn(this, a);
            -1 != c && (c == this.Ta ? (a.Mc(!1), this.Ta = -1) : c < this.Ta && this.Ta--);
            (c = a.m()) && c.id && this.Eg && z.Kb(this.Eg, c.id)
        }
        a = z.Yr.o.removeChild.call(this, a, b);
        a.Np(!0);
        return a
    };
    z.e.setOrientation = function (a) {
        if (this.m()) throw Error("Component already rendered");
        this.Nb = a
    };
    z.e.V = function () {
        return this.sb
    };
    z.e.G = function (a, b) {
        if (b || this.sb != a && this.dispatchEvent(a ? "show" : "hide")) {
            this.sb = a;
            var c = this.m();
            c && (z.Q(c, a), this.bg() && Wr(this.Yb(), this.ec && this.sb), b || this.dispatchEvent(this.sb ? "aftershow" : "afterhide"));
            return !0
        }
        return !1
    };
    z.e.isEnabled = function () {
        return this.ec
    };
    z.e.Wa = function (a) {
        this.ec != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.ec = !0, z.bh(this, function (a) {
            a.ZK ? delete a.ZK : a.Wa(!0)
        })) : (z.bh(this, function (a) {
            a.isEnabled() ? a.Wa(!1) : a.ZK = !0
        }), this.vf = this.ec = !1), this.bg() && Wr(this.Yb(), a && this.sb))
    };
    z.e.bg = function () {
        return this.Jx
    };
    z.e.Oe = function (a) {
        a != this.Jx && this.wa && Zr(this, a);
        this.Jx = a;
        this.ec && this.sb && Wr(this.Yb(), a)
    };
    z.e.xb = function (a) {
        (a = z.ah(this, a)) ? a.Mc(!0) : -1 < this.Ta && as(this).Mc(!1)
    };
    z.e.Mc = function (a) {
        this.xb(Nn(this, a))
    };
    z.e.FD = function (a) {
        return a.V() && a.isEnabled() && Pp(a, 2)
    };
    z.x(gs, z.R);
    gs.prototype.Fa = function (a) {
        this.kv.push(a);
        a.Db(this)
    };
    gs.prototype.C = function () {
        gs.o.C.call(this);
        this.v().g(this, "toggle", this.sQ)
    };
    gs.prototype.sQ = function (a) {
        z.y(this.kv, function (b) {
            a.target !== b && b.Yc() && b.Lc(!1, !0)
        }, this)
    };
    gs.prototype.D = function () {
        gs.o.D.call(this);
        z.y(this.kv, function (a) {
            a.H()
        }, this);
        this.kv = []
    };
    z.hs.prototype.Ci = function (a, b, c) {
        if (this.eC) {
            var d = this.Sa, f = is(a, b, d);
            0 == f.length && (f = js(a, b, d));
            b = f
        } else b = is(a, b, this.Sa);
        c(a, b)
    };
    var ls, ns;
    z.x(z.ks, z.G);
    z.e = z.ks.prototype;
    z.e.am = 10;
    z.e.dn = !0;
    z.e.aD = !1;
    z.e.eL = !1;
    z.e.xK = !1;
    ls = "hilite";
    z.ms = "select";
    z.os = "dismiss";
    ns = "canceldismiss";
    z.e = z.ks.prototype;
    z.e.getToken = function () {
        return this.Wb
    };
    z.e.handleEvent = function (a) {
        var b = this.Kd;
        if (a.target == this.M) switch (a.type) {
            case ls:
                this.ag(a.Di);
                break;
            case z.ms:
                var c = !1;
                if (z.qa(a.Di)) {
                    a = a.Di;
                    var d = this.Sa[ss(this, a)], c = !!d && b.kz && b.kz(d);
                    d && !c && this.Vg != a && this.ag(a)
                }
                c || this.Fi();
                break;
            case ns:
                z.rs(this);
                break;
            case z.os:
                this.jj()
        }
    };
    z.e.Eu = function (a, b) {
        this.Wb != a && (this.Wb = a, this.Kd.Ci(this.Wb, this.am, (0, z.q)(this.bS, this), b), z.rs(this))
    };
    z.e.cy = function () {
        return this.xc
    };
    z.e.ub = function () {
        return this.M.V()
    };
    z.e.ag = function (a) {
        var b = ss(this, a), c = this.Sa[b];
        return c && this.Kd.kz && this.Kd.kz(c) ? !1 : (this.Vg = a, this.M.ag(a), -1 != b)
    };
    z.e.Fi = function () {
        var a = ss(this, this.Vg);
        if (-1 != a) {
            var b = this.Sa[a], c = this.Af.Gi(b);
            this.xK ? (this.Wb = null, this.jj()) : this.Cc();
            c || (this.dispatchEvent({type: "update", Di: b, index: a}), this.xK && this.Af.update(!0));
            return !0
        }
        this.Cc();
        this.dispatchEvent({type: "update", Di: null, index: null});
        return !1
    };
    z.e.Cc = function () {
        this.Vg = -1;
        this.Wb = null;
        this.Uc += this.Sa.length;
        this.Sa = [];
        window.clearTimeout(this.Xd);
        this.Xd = null;
        this.M.Cc();
        this.dispatchEvent("suggestionsupdate");
        this.dispatchEvent(z.os)
    };
    z.e.jj = function () {
        this.Xd || (this.Xd = window.setTimeout((0, z.q)(this.Cc, this), 100))
    };
    z.e.zG = function () {
        return this.Xd ? (window.clearTimeout(this.Xd), this.Xd = null, !0) : !1
    };
    z.e.D = function () {
        z.ks.o.D.call(this);
        delete this.JG;
        this.M.H();
        this.Af.H();
        this.Kd = null
    };
    z.e.bS = function (a, b, c) {
        this.Wb == a && this.qm(b, c)
    };
    z.e.qm = function (a, b) {
        var c = "object" == z.ma(b) && b, d = (c ? c.zY() : b) ? ss(this, this.Vg) : -1;
        this.Uc += this.Sa.length;
        this.Sa = a;
        for (var f = [], g = 0; g < a.length; ++g) f.push({id: this.Uc + g, data: a[g]});
        g = null;
        this.xc && (g = this.JG[z.ua(this.xc)] || this.xc);
        this.M.cD = g;
        this.M.qm(f, this.Wb, this.xc);
        g = this.dn;
        c && void 0 !== c.TO() && (g = c.TO());
        this.Vg = -1;
        (g || 0 <= d) && 0 != f.length && this.Wb && (0 <= d ? this.ag(this.Uc + d) : z.ps(this));
        this.dispatchEvent("suggestionsupdate")
    };
    z.e.Uk = function (a) {
        var b = this.Af;
        b.Uk.apply(b, arguments)
    };
    z.e.update = function (a) {
        this.Af.update(a)
    };
    z.x(z.ys, z.xc);
    var AF = (z.Ui || z.Vj) && !z.E("533.17.9");
    z.e = z.ys.prototype;
    z.e.ZW = !0;
    z.e.RO = !0;
    z.e.HK = !1;
    z.e.CV = !0;
    z.e.BV = !0;
    z.e.Nv = null;
    z.e.eb = null;
    z.e.Oo = "";
    z.e.Si = !1;
    z.e.SA = !1;
    z.e.EK = !0;
    z.e.fs = function () {
        return this.aa
    };
    z.e.zl = function () {
        return this.eb
    };
    z.e.X = function () {
        return this.eb.value
    };
    z.e.Ea = function (a) {
        this.eb.value = a
    };
    z.e.ar = function (a) {
        z.jf(a) && (z.bj(a, "combobox"), z.cj(a, "autocomplete", "list"));
        this.dc.g(a, "focus", this.ee);
        this.dc.g(a, "blur", this.Xc);
        this.eb || (this.Kv.g(a, "keydown", this.XS), z.jf(a) && Cn(z.Je(a)) == a && Es(this, a))
    };
    z.e.Uk = function (a) {
        for (var b = 0; b < arguments.length; b++) this.ar(arguments[b])
    };
    z.e.Gi = function (a, b) {
        this.eb && zs(this, a.toString(), b);
        return !1
    };
    z.e.D = function () {
        z.ys.o.D.call(this);
        null != this.Nv && window.clearTimeout(this.Nv);
        this.dc.H();
        delete this.dc;
        this.Kv.H();
        this.vb.H();
        z.Cc(this.ma)
    };
    z.e.Zb = function (a) {
        switch (a.keyCode) {
            case 40:
                if (this.aa.ub()) return this.HK ? qs(this.aa) : z.ps(this.aa), a.preventDefault(), !0;
                if (!this.dm) return this.update(!0), a.preventDefault(), !0;
                break;
            case 38:
                if (this.aa.ub()) return this.HK ? z.ps(this.aa) : qs(this.aa), a.preventDefault(), !0;
                break;
            case 9:
                if (!this.aa.ub() || a.shiftKey || this.sU) this.aa.Cc(); else if (this.update(), this.aa.Fi() && this.rU) return a.preventDefault(), !0;
                break;
            case 13:
                if (this.aa.ub()) {
                    if (this.update(), this.aa.Fi()) return a.preventDefault(), a.stopPropagation(),
                        !0
                } else this.aa.Cc();
                break;
            case 27:
                if (this.aa.ub()) return this.aa.Cc(), a.preventDefault(), a.stopPropagation(), !0;
                break;
            case 229:
                if (!this.Si) return this.Si || (this.dc.g(this.eb, "keyup", this.rI), this.dc.g(this.eb, "keypress", this.qI), this.Si = !0), !0;
                break;
            default:
                this.ma && !this.EK && (this.ma.stop(), this.ma.start())
        }
        return Cs(this, a)
    };
    z.e.us = function () {
        return !1
    };
    z.e.ee = function (a) {
        Es(this, a.target || null)
    };
    z.e.Xc = function () {
        AF ? this.Nv = window.setTimeout((0, z.q)(this.ZI, this), 0) : this.ZI()
    };
    z.e.ZI = function () {
        this.eb && (this.dc.qa(this.vb, "key", this.jp), this.vb.detach(), this.dc.qa(this.eb, "keyup", this.us), this.dc.qa(this.eb, "mousedown", this.sI), z.C && this.dc.qa(this.eb, "keypress", this.pI), this.Si && Fs(this), this.eb = null, this.ma && (this.ma.stop(), this.dc.qa(this.ma, "tick", this.pp)), this.aa && this.aa.jj())
    };
    z.e.pp = function () {
        this.update()
    };
    z.e.XS = function (a) {
        this.ee(a)
    };
    z.e.jp = function (a) {
        this.kH = a.keyCode;
        this.aa && this.Zb(a)
    };
    z.e.qI = function () {
        this.Si && 229 != this.kH && Fs(this)
    };
    z.e.rI = function (a) {
        this.Si && (13 == a.keyCode || 77 == a.keyCode && a.ctrlKey) && Fs(this)
    };
    z.e.sI = function (a) {
        this.aa && this.fe(a)
    };
    z.e.fe = function () {
    };
    z.e.pI = function (a) {
        Cs(this, a)
    };
    z.e.update = function (a) {
        if (this.eb && (a || this.X() != this.Oo)) {
            if (a || !this.SA) {
                a = z.ts(this.eb)[0];
                var b = this.X();
                a = Bs(this, b)[As(this, b, a)];
                a = this.yK ? String(a).replace(this.yK, "") : a;
                this.aa && (this.aa.xc = this.eb, this.aa.Eu(a, this.X()))
            }
            this.Oo = this.X()
        }
        this.SA = !1
    };
    z.x(z.Gs, z.xc);
    z.e = z.Gs.prototype;
    z.e.NH = "GET";
    z.e.rc = void 0;
    z.e.FQ = null;
    z.e.tz = null;
    z.e.fB = function (a) {
        this.NH = a
    };
    z.e.ia = function (a) {
        this.rc = a
    };
    z.e.dX = function (a, b, c) {
        c = z.te(c.target);
        var d = [];
        if (c) try {
            d = Uo(c)
        } catch (f) {
        }
        b(a, d)
    };
    z.e.Ci = function (a, b, c) {
        var d, f = this.eC;
        d = new z.ph(this.$B);
        z.rh(d);
        d.he.set("token", a);
        b = String(b);
        z.rh(d);
        d.he.set("max_matches", b);
        f = String(Number(f));
        z.rh(d);
        d.he.set("use_similar", f);
        if (d = d.toString()) a = (0, z.q)(this.dX, this, a, c), this.ea.tc() && this.ea.abort(), this.tz && z.nd(this.tz), this.tz = z.ld(this.ea, "success", a), this.ea.send(d, this.NH, this.rc, this.FQ)
    };
    z.e.D = function () {
        this.ea.H();
        z.Gs.o.D.call(this)
    };
    z.x(z.Ls, z.G);
    z.e = z.Ls.prototype;
    z.e.m = function () {
        return this.h
    };
    z.e.vh = function (a) {
        this.NK = a
    };
    z.e.Un = function () {
        return this.cD
    };
    z.e.qm = function (a, b, c) {
        this.Wb = b;
        this.Sa = a;
        this.Sl = -1;
        this.aK = (0, z.I)();
        this.xc = c;
        this.zf = [];
        Ps(this)
    };
    z.e.Cc = function () {
        this.sb && (this.sb = !1, Ms(this, !1), 0 < this.Vo ? (z.Cc(this.Sk), this.Sk = new lr(this.h, this.Vo), this.Sk.play()) : z.Q(this.h, !1))
    };
    z.e.show = function () {
        this.sb || (this.sb = !0, Ms(this, !0), 0 < this.Vo ? (z.Cc(this.Sk), this.Sk = new mr(this.h, this.Vo), this.Sk.play()) : z.Q(this.h, !0))
    };
    z.e.V = function () {
        return this.sb
    };
    z.e.ag = function (a) {
        if (-1 == a) Ns(this, -1); else for (var b = 0; b < this.Sa.length; b++) if (this.Sa[b].id == a) {
            Ns(this, b);
            break
        }
    };
    z.e.ha = function () {
        if (this.xc && this.Bp) {
            var a = this.cD || this.xc, b;
            b = this.cV ? 3 : 1;
            this.Wu && (b ^= 1);
            var c = 65;
            this.WJ && (this.h.style.height = "", c |= 32);
            z.Hs(a, b, this.h, b ^ 1, null, null, c);
            this.Wu && (this.h.style.visibility = "visible")
        }
    };
    z.e.cy = function () {
        return this.xc || null
    };
    z.e.D = function () {
        this.h && (z.md(this.h, "click", this.Hl, !1, this), z.md(this.h, "mousedown", this.Il, !1, this), z.md(this.h, "mouseover", this.XF, !1, this), this.da.removeNode(this.h), this.h = null, this.sb = !1);
        z.Cc(this.Sk);
        this.Ra = null;
        z.Ls.o.D.call(this)
    };
    z.e.nJ = function (a, b, c) {
        z.mf(c, a.data.toString())
    };
    z.e.Hl = function (a) {
        var b = Ts(this, a.target);
        0 <= b && this.dispatchEvent({type: z.ms, Di: this.Sa[b].id});
        a.stopPropagation()
    };
    z.e.Il = function (a) {
        a.stopPropagation();
        a.preventDefault()
    };
    z.e.XF = function (a) {
        a = Ts(this, a.target);
        0 <= a && !(300 > (0, z.I)() - this.aK) && this.dispatchEvent({type: ls, Di: this.Sa[a].id})
    };
    z.x(z.Us, z.ks);
    z.Us.prototype.vh = function (a) {
        this.M.vh(a)
    };
    z.Us.prototype.fB = function (a) {
        this.Kd.fB(a)
    };
    z.Us.prototype.ia = function (a) {
        this.Kd.ia(a)
    };
    z.x(z.Vs, z.Us);
    z.Vs.prototype.defaults = {
        source: "",
        Le: 10,
        SW: !1,
        filter: null,
        format: null,
        az: null,
        delay: 300,
        separator: null,
        dO: null,
        multiple: !1,
        vk: null,
        RY: null,
        placeholder: "",
        td: null,
        render: null
    };
    z.Vs.prototype.defaults.format = function (a) {
        return function (b, c) {
            return (0, z.ab)(c) && z.na(b) ? z.na(b[0]) ? z.nb(b[0].slice(1), a, this) : b : []
        }
    }(function (a) {
        var b;
        return (b = BF[this.J.source]) || (b = BF[CF][a[0]]) ? b(a) : a
    });
    var CF = "/autocomplete", BF = {};
    BF[CF] = {
        topic: function (a) {
            return {
                type: a[0],
                name: a[1],
                url_token: a[2],
                avatar: a[3],
                id: a[4],
                answers: a[6],
                alias: a[7],
                raw: a,
                value: a[4],
                label: a[1]
            }
        }, question: function (a) {
            return {
                type: a[0],
                title: a[1],
                id: a[2],
                url_token: a[3],
                answers: a[4],
                is_star: !!a[5],
                raw: a,
                label: a[1],
                value: a[2]
            }
        }, people: function (a) {
            return {
                type: a[0],
                fullname: a[1],
                url_token: a[2],
                avatar: a[3],
                id: a[4],
                headline: a[5],
                raw: a,
                label: a[1],
                value: a[4]
            }
        }, search_link: function (a) {
            return {type: a[0], raw: a, label: a[1], value: a[1]}
        }
    };
    BF["/topic/autocomplete"] = function (a) {
        return {
            type: a[0],
            name: a[1],
            url_token: a[2],
            avatar: a[3],
            id: a[4],
            followers: a[5],
            alias: a[6],
            label: a[1]
        }
    };
    BF["/question/autocomplete"] = function (a) {
        return {
            type: a[0],
            title: a[1],
            id: a[2],
            url_token: a[3],
            is_duplicated: Boolean(+a[4]),
            answer_count: a[5],
            raw: a,
            label: a[1],
            value: a[2]
        }
    };
    z.x(Ws, z.ys);
    Ws.prototype.Xc = z.p;
    Ws.prototype.Zb = z.p;
    Ws.prototype.Gi = function () {
        return !1
    };
    var Zs;
    z.x(z.Xs, z.R);
    z.e = z.Xs.prototype;
    z.e.Vf = null;
    z.e.KR = 10;
    z.e.Ml = !1;
    z.e.B = function () {
        this.h = this.K().B("INPUT", {type: "text"})
    };
    z.e.Y = function (a) {
        z.Xs.o.Y.call(this, a);
        this.Mb || (this.Mb = a.getAttribute("label") || "");
        Cn(z.Je(a)) == a && (this.Ml = !0, z.jj(this.m(), this.Lo));
        Ys() && (this.m().placeholder = this.Mb);
        z.cj(this.m(), "label", this.Mb)
    };
    z.e.C = function () {
        z.Xs.o.C.call(this);
        var a = new z.xd(this);
        a.g(this.m(), "focus", this.UF);
        a.g(this.m(), "blur", this.ey);
        Ys() ? this.T = a : (z.B && a.g(this.m(), ["keypress", "keydown", "keyup"], this.HP), a.g(z.Re(z.Je(this.m())), "load", this.zQ), this.T = a, $s(this));
        this.Th();
        this.m().JR = this
    };
    z.e.Hb = function () {
        z.Xs.o.Hb.call(this);
        this.T && (this.T.H(), this.T = null);
        this.m().JR = null
    };
    z.e.D = function () {
        z.Xs.o.D.call(this);
        this.T && (this.T.H(), this.T = null)
    };
    z.e.Lo = "label-input-label";
    z.e.UF = function () {
        this.Ml = !0;
        z.jj(this.m(), this.Lo);
        if (!Ys() && !at(this) && !this.RQ) {
            var a = this, b = function () {
                a.m() && (a.m().value = "")
            };
            z.C ? z.vd(b, 10) : b()
        }
    };
    z.e.ey = function () {
        Ys() || (this.T.qa(this.m(), "click", this.UF), this.Vf = null);
        this.Ml = !1;
        this.Th()
    };
    z.e.HP = function (a) {
        27 == a.keyCode && ("keydown" == a.type ? this.Vf = this.m().value : "keypress" == a.type ? this.m().value = this.Vf : "keyup" == a.type && (this.Vf = null), a.preventDefault())
    };
    z.e.LP = function () {
        at(this) || (this.m().value = "", z.vd(this.hP, 10, this))
    };
    z.e.hP = function () {
        at(this) || (this.m().value = this.Mb)
    };
    z.e.zQ = function () {
        this.Th()
    };
    z.e.hasFocus = function () {
        return this.Ml
    };
    z.e.clear = function () {
        this.m().value = "";
        null != this.Vf && (this.Vf = "")
    };
    z.e.reset = function () {
        at(this) && (this.clear(), this.Th())
    };
    z.e.Ea = function (a) {
        null != this.Vf && (this.Vf = a);
        this.m().value = a;
        this.Th()
    };
    z.e.X = function () {
        return null != this.Vf ? this.Vf : at(this) ? this.m().value : ""
    };
    z.e.Th = function () {
        var a = this.m();
        Ys() ? this.m().placeholder != this.Mb && (this.m().placeholder = this.Mb) : $s(this);
        z.cj(a, "label", this.Mb);
        at(this) ? (a = this.m(), z.jj(a, this.Lo)) : (this.RQ || this.Ml || (a = this.m(), z.hj(a, this.Lo)), Ys() || z.vd(this.YU, this.KR, this))
    };
    z.e.Wa = function (a) {
        this.m().disabled = !a;
        z.uo(this.m(), this.Lo + "-disabled", !a)
    };
    z.e.isEnabled = function () {
        return !this.m().disabled
    };
    z.e.YU = function () {
        !this.m() || at(this) || this.Ml || (this.m().value = this.Mb)
    };
    var ZC = {
        LF: function (a, b) {
            return window.$.get(b ? "/node/AnswerFullVoteInfoV2" : "/node/AnswerVoteInfoV2", {params: {answer_id: a}})
        }, jC: function (a, b) {
            return window.$.post("/node/AnswerVoteBarV2", {method: b, params: {answer_id: a}}, function (a) {
                a && a.r && z.X.alert("\x3cp\x3e" + a.msg + "\x3c/p\x3e")
            })
        }, aB: function (a, b) {
            return window.$.post("/node/AnswerMetaV2", {
                method: "set_copyright",
                params: {answer_id: a, is_copyable: Number(b)}
            })
        }
    };
    z.x(gt, z.ys);
    gt.prototype.Gi = function (a) {
        var b = gt.o.Gi.call(this, a);
        a.select(this.aa.cy());
        return b
    };
    z.x(ht, z.Gs);
    ht.prototype.uU = ["根话题", "未归类话题"];
    ht.prototype.Pp = function (a) {
        this.RA = a
    };
    ht.prototype.Ci = function (a, b, c) {
        var d = (0, z.q)(function (a, b) {
            for (var d = [], k, m = 0; m < b.length; m++) for (var n = 1; n < b[m].length; n++) {
                k = b[m][n];
                var r = !0;
                this.iF && z.y(this.uU, function (a) {
                    k[2] === a && (r = !1)
                });
                r && d.push(k)
            }
            this.RA && (d = this.RA(d, a));
            c(a, d)
        }, this);
        ht.o.Ci.call(this, a, b, d)
    };
    z.x(it, z.ys);
    z.e = it.prototype;
    z.e.Gi = function (a) {
        var b = gt.o.Gi.call(this, a), c = this.aa.cy(), d = this.fs();
        d.FJ = a;
        d.dispatchEvent("select");
        c.value = "";
        return b
    };
    z.e.Ea = function () {
    };
    z.e.update = function (a) {
        var b = z.sr(this.X());
        !b || "搜索用户" === b || "搜索话题" === b || "在这里输入问题" === b || z.A(this.aa.vx || [], b) || (b ? (0, window.unescape)((0, window.encodeURIComponent)(b)).length : 0) < this.OH || b === this.zH ? (this.aa.jj(), this.Oo = b) : (this.zH = null, this.aa.dispatchEvent({type: DF}), it.o.update.call(this, a))
    };
    z.e.ee = function (a) {
        this.aa && z.rs(this.aa);
        a.target !== this.eb && (this.eb = a.target || null, this.ma && (this.ma.start(), this.dc.g(this.ma, "tick", this.pp)), this.Oo = this.X(), Ds(this));
        this.ma && this.ma.start();
        this.update(!0)
    };
    z.e.Xc = function () {
        this.ma && this.ma.stop();
        this.aa && this.aa.jj()
    };
    z.e.Zb = function (a) {
        if (13 === a.keyCode) {
            if (this.aa.ub()) {
                if (this.aa.Fi()) return a.preventDefault(), a.stopPropagation(), !0;
                a.preventDefault();
                a.stopPropagation();
                this.aa.Wb = "";
                this.aa.Cc();
                this.update(!0);
                return !1
            }
            a.stopPropagation();
            a.preventDefault();
            return !1
        }
        it.o.Zb.call(this, a)
    };
    z.e.ar = function (a) {
        it.o.ar.call(this, a);
        this.dc.g(a, "mousedown", function (a) {
            a.stopPropagation();
            return !0
        })
    };
    z.x(jt, it);
    jt.prototype.Gi = function (a) {
        var b = this.fs();
        b.FJ = a;
        b.dispatchEvent("select");
        return !1
    };
    z.x(z.kt, z.Us);
    var DF = "before_update";
    z.e = z.kt.prototype;
    z.e.HE = !0;
    z.e.QU = function (a, b, c) {
        z.Pd(c, function (a) {
            a = Qs(this, a, this.Wb);
            this.da.appendChild(this.h, a)
        }, a);
        z.cf(a.h, a.da.B("div", "zh-question-suggest-info", [a = a.da.B("a", {
            href: "javascript:;",
            title: "关闭",
            name: "close",
            id: "zh-question-suggest-info-close"
        }, [a.da.B("span", "x-m"), "不是"]), "您想问的是不是下面的问题？"]), 0);
        z.F(a, "click", function () {
            var a = this.Af;
            a.Xc();
            this.Cc();
            a.zH = a.X()
        }, !1, this)
    };
    z.e.SU = function (a, b, c) {
        0 === c.length ? this.Cc() : (z.Pd(c, function (a) {
            a = Qs(this, a, this.Wb);
            this.da.appendChild(this.h, a)
        }, a), b = a.da.B("div", "zh-question-topic-autocomplete-plaintext", ["建议添加的话题", a.da.B("span", "x-m")]), z.cf(a.h, b, 0), z.rm.Ab && z.F(b, "click", function () {
            this.Af.Xc();
            this.Cc()
        }, !1, this))
    };
    z.e.Ej = function () {
        return this.FJ
    };
    z.e.Pp = function (a) {
        this.Kd.Pp(a)
    };
    z.e.Cc = function () {
        if (this.HE) return z.kt.o.Cc.call(this)
    };
    z.e.Fi = function () {
        return -1 === ss(this, this.Vg) ? !1 : z.kt.o.Fi.call(this)
    };
    z.e.jj = function () {
        z.rm.Ab ? z.ld(window.document, "click", (0, z.q)(this.Cc, this)) : z.kt.o.jj.call(this)
    };
    z.x(z.lt, z.Xj);
    var mt = "view", EF = "零一二三四五六七八九十".split("");
    z.e = z.lt.prototype;
    z.e.w = function (a) {
        this.h = a;
        this.sg = z.N("zm-tag-editor-labels", this.h);
        this.Et && (this.data = nt(this));
        ot(this);
        this.ve();
        this.cc()
    };
    z.e.Mn = function () {
        this.Tc || (this.Tc = z.O("div", "zm-tag-editor-editor", [this.Kn = z.O("div", "zg-section zg-clear"), this.ef = z.O("div", "zg-section zm-tag-editor-command-buttons-wrap", [this.rb = z.O("input", {
            "class": "zg-form-text-input zg-mr15",
            type: "text"
        }), z.O("a", {
            "class": "zg-mr15 zg-btn-blue",
            href: "#",
            name: "add",
            style: "display:none;"
        }, "添加"), this.jF = z.O("a", {
            href: "#",
            name: "close"
        }, "完成")]), this.vt = z.O("div", {
            className: "zm-tag-editor-maxcount zg-section",
            style: "display:none;"
        }, [z.O("span", {}, "最多只能为一个问题绑定 " +
            this.ut + " 个话题"), z.O("a", {
            href: "#",
            name: "close"
        }, "完成")])]), z.bf(this.Tc, this.sg), this.Fe && (this.pz = new z.Xs(this.Fe), this.pz.w(this.rb), this.rb.title = this.Fe), this.Xg(this.ef))
    };
    z.e.Xg = function (a, b) {
        this.ca = new z.kt(b || "/topic/autocomplete", this.rb, null, null, a, !0);
        this.ca.vh(!0);
        this.ca.am = this.Le;
        this.ca.Pp(this.tm());
        this.ca.vx = [this.Fe];
        this.v().g(this.ca, "select", this.ap);
        this.v().g(this.ca, "suggestionsupdate", this.Sv)
    };
    z.e.zx = function (a) {
        return z.pb(this.data, function (b) {
            return b[0] === a[1]
        })
    };
    z.e.tm = function () {
        return (0, z.q)(function (a, b) {
            return qt(this, pt(this, a), b)
        }, this)
    };
    z.e.Sv = function () {
        1 < this.ca.Sa.length && !this.ca.Sa[0][4] && z.ps(this.ca)
    };
    z.e.cc = function () {
        this.v().g(this.h, "click", this.Qa);
        z.Cp && this.v().g(z.Cp, "anon_change", this.Gj)
    };
    z.e.Gj = function (a) {
        a.qb ? z.W.add(this.h, "zm-tag-editor-disabled") : z.W.remove(this.h, "zm-tag-editor-disabled")
    };
    z.e.Qa = function (a) {
        var b = this.Pg(a.target);
        if (b && b.name) switch (a.preventDefault(), b.name) {
            case "edit":
                this.Ke(!0);
                break;
            case "add":
                (a = z.sr(tr(this.rb.value))) && a !== this.rb.title && this.Ue("", a);
                break;
            case "close":
                this.Ke(!1);
                break;
            case "remove":
                this.wI(b)
        }
    };
    z.e.Ke = z.Jq(function (a) {
        if (a && (this.dispatchEvent("start_editing"), !1 === this.dispatchEvent("beforeedit"))) return;
        this.status = a ? "edit" : mt;
        this.Mn();
        this.Ne();
        this.ve();
        rt(this)
    }, !0);
    z.e.wI = function (a) {
        var b = a.id.split("-")[1], c = z.No(a).innerHTML;
        this.yt && this.data.length <= this.yt ? z.X.message("请至少绑定" + EF[this.yt] + "个话题") : (this.data = z.mb(this.data, function (a) {
            return b ? String(a[3]) !== b : a[1] !== c
        }), this.mp(b))
    };
    z.e.mp = function (a) {
        if (!this.mu || !this.mu.tc()) {
            this.mu = new z.Z(!0);
            var b = new z.vh;
            b.add("qid", this.pa).add("question_id", this.pa).add("topic_id", a);
            this.v().ya(this.mu, "complete", this.kQ);
            this.mu.ajax(this.MU, b.toString())
        }
    };
    z.e.kQ = function (a) {
        a = z.Rn(a.target);
        a.r ? z.X.message(a.msg) : (this.dispatchEvent("remove_tag"), ot(this), this.Ne(), rt(this))
    };
    z.e.ve = function () {
        this.status === mt ? (z.Q(this.sg, !0), this.Tc && z.Q(this.Tc, !1)) : (z.Q(this.sg, !1), this.Tc && this.isEnabled && z.Q(this.Tc, !0), this.vt && z.Q(this.vt, !1))
    };
    z.e.Ue = function (a, b) {
        this.fh || (this.dispatchEvent("add_tag"), this.fh = !0, this.xhr = new z.Z(!0), this.v().ya(this.xhr, "complete", this.Tv), this.xhr.ajax(this.pM, "qid\x3d" + this.pa + "\x26question_id\x3d" + this.pa + "\x26topic_id\x3d" + a + "\x26topic_text\x3d" + (0, window.encodeURIComponent)(b)))
    };
    z.e.ap = function () {
        var a = "", b = "", c = this.ca.Ej().slice(1);
        3 < c.length ? (a = c[3], b = c[0]) : b = c[1];
        z.pb(this.data, function (c) {
            return c[3] && String(c[3]) === a || c[0] === b
        }) || (a || b) && this.Ue(a, b)
    };
    z.e.Tv = function () {
        this.fh = !1;
        var a = z.Rn(this.xhr);
        this.ym(a);
        rt(this)
    };
    z.e.ym = function (a) {
        var b = null;
        a && a.r ? a.notify ? z.Jn(a.notify) : z.X.message(a.msg) : (4 < a.length && z.Jn(a[4]), this.GJ = b = a, this.data.push(b), st(this), ot(this), this.Ne(), this.rb.value = "", this.dispatchEvent("select"))
    };
    z.e.sF = function (a) {
        return z.rr(a, "nor", !1)
    };
    z.e.Ne = function () {
        var a = z.nb(this.data, function (a) {
            return ['\x3cspan class\x3d"zm-tag-editor-edit-item"\x3e', this.sF(a), a.EW ? "" : '\x3ca id\x3d"rmid-' + a[3] + '" href\x3d"#" class\x3d"zg-r3px zm-tag-editor-remove-button" name\x3d"remove"\x3e\x3c/a\x3e', "\x3c/span\x3e"].join("")
        }, this);
        this.Kn.innerHTML = a.join("")
    };
    z.e.Ej = function () {
        return this.GJ
    };
    z.e.Wa = function (a) {
        this.isEnabled = a;
        this.status = mt;
        this.ve()
    };
    z.x(z.tt, z.lt);
    z.e = z.tt.prototype;
    z.e.w = function (a) {
        if (this.isEnabled = !a.getAttribute("data-disabled")) z.tt.o.w.call(this, a), this.Ke(!0), z.Q(this.jF, !1)
    };
    z.e.Xg = function (a) {
        var b;
        this.jz && (b = "/topic/autocomplete?no_create\x3dtrue");
        z.tt.o.Xg.call(this, a, b);
        this.ca.Kd.iF = !1
    };
    z.e.tm = function () {
        return (0, z.q)(function (a, b) {
            return z.mb(a, function (a) {
                return 3 >= a.length ? !1 : z.$n(this.data, function (d) {
                    return d[1] === a[2] ? b === a[1] ? (a[0] = "plain_text", a[1] = '"' + b + '"已在现有列表中', !0) : !1 : !0
                })
            }, this)
        }, this)
    };
    z.e.Ue = function (a, b) {
        this.fh || (this.fh = !0, this.xhr = new z.Z(!0), this.v().ya(this.xhr, "complete", this.Tv), a || (a = -1), this.jz ? this.xhr.ajax("/topic/add", "tid\x3d" + this.Gf + "\x26pid\x3d" + a + "\x26topic_text\x3d" + (0, window.encodeURIComponent)(b)) : this.xhr.ajax("/topic/add", "tid\x3d" + this.Gf + "\x26cid\x3d" + a + "\x26topic_text\x3d" + (0, window.encodeURIComponent)(b)))
    };
    z.e.sF = function (a) {
        return '\x3ca class\x3d"nor" href\x3d"/topic/' + a[1] + '/organize"\x3e' + a[0] + "\x3c/a\x3e"
    };
    z.e.mp = function (a) {
        if (!this.ea || !this.ea.tc()) {
            var b = new z.Z(!0);
            this.v().g(b, "success", function () {
                var c = z.Rn(b);
                c.r ? z.X.message(c.msg) : (ot(this), this.Ne(), this.dispatchEvent({
                    type: "remove_tag",
                    data: {id: a}
                }))
            });
            this.jz ? b.ajax(this.mJ, "cid\x3d" + this.Gf + "\x26pid\x3d" + a) : b.ajax(this.mJ, "pid\x3d" + this.Gf + "\x26cid\x3d" + a);
            this.ea = b
        }
    };
    z.x(ut, z.lt);
    z.e = ut.prototype;
    z.e.w = function (a) {
        ut.o.w.call(this, a);
        this.Ke(!0);
        z.y(z.Le(window.document, "a", null, a), function (a) {
            z.Q(a, !1)
        });
        this.v().g(this.rb, "focus", function () {
            this.Iq.val() && !this.WE && (this.WE = !0, this.bv());
            this.placeholder && (this.placeholder.wk("搜索话题"), In(this.placeholder))
        });
        this.eH = new Kp;
        this.eH.attach(this.rb);
        this.v().g(this.eH, "key", function (a) {
            8 === a.keyCode && (1 === this.rb.value.length && (this.uD = !0, this.bN = (0, window.setTimeout)((0, z.q)(function () {
                this.uD = !1;
                (0, window.clearTimeout)(this.bN)
            }, this))), this.rb.value.length ||
            this.uD || (this.data.pop(), this.Ne(), this.dispatchEvent("remove_tag")))
        });
        this.$V = new z.fl(this.bv, 2E3, this);
        this.v().g(this.Iq[0], "keyup", function () {
            var a = this.Iq.val();
            this.Nu !== a && (this.$V.fire(), this.Nu = a)
        });
        this.v().g(this, ["remove_tag", "add_tag"], function () {
            vt(this);
            0 < this.data.length && this.placeholder && (this.placeholder.wk("搜索话题"), In(this.placeholder));
            5 <= this.data.length ? (this.Wa(!1), this.Dq.show(), this.placeholder && this.placeholder.hide(), this.zv.hide()) : (this.Wa(!0), this.Dq.hide(), this.placeholder &&
            this.placeholder.show(), this.zv.show(), this.Dq.removeClass("light"))
        })
    };
    z.e.zx = function (a) {
        return z.pb(this.data, function (b) {
            return b[1] === a[1]
        })
    };
    z.e.mp = function () {
        this.dispatchEvent("remove_tag");
        ot(this);
        this.Ne()
    };
    z.e.Mn = function () {
        this.Tc || (ut.o.Mn.call(this), z.W.add(this.Tc, "zg-clear"), z.W.set(this.Kn, "zg-inline"), z.W.add(this.ef, "zg-left"), z.W.remove(this.ef, "zg-section"), z.W.set(this.rb, "zu-question-suggest-topic-input"), z.W.add(this.rb, "label-input-label"), this.Kq = (0, window.$)("\x3cdiv class\x3d'sug-con zg-clear' style\x3d'display:none;'\x3e\x3c/div\x3e").append("\x3cspan class\x3d'zg-gray-normal zg-left tip'\x3e推荐添加\x3c/span\x3e").append(this.zL = (0, window.$)("\x3cspan class\x3d'sugs zg-clear zg-inline'\x3e\x3c/span\x3e")).append(this.Av =
            (0, window.$)('\x3cimg data-src\x3d"' + z.rm.wB + '/img/spinner2.gif"\x3e')), this.Kq.insertAfter(this.h), this.Kq.on("click", "a[name\x3d'add']", (0, z.q)(function (a) {
            a = a.currentTarget;
            5 > this.data.length ? this.Ue((0, window.$)(a).attr("data-id"), (0, window.$)(a).attr("data-text")) : this.Dq.addClass("light")
        }, this)), this.zv = (0, window.$)('\x3clabel for\x3d"topic" class\x3d"zg-icon icon-magnify"\x3e\x3c/label\x3e'), (0, window.$)(this.ef).prepend(this.zv), this.placeholder = new z.vk(this.rb, {
            text: "搜索话题",
            pD: !0
        }), (0, window.$)(this.ef).append(this.Dq =
            (0, window.$)("\x3clabel class\x3d'err-tip' style\x3d'display:none;'\x3e最多添加五个话题\x3c/label\x3e")), this.v().g(this.Tc, "click", this.yW))
    };
    z.e.yW = function (a) {
        z.Er(this.h, a.target) || (a = z.N("zu-question-suggest-topic-input", this.Tc), z.Kg(a) && a.focus())
    };
    z.e.bv = function () {
        this.WE && (this.Nu = this.Iq.val(), 8 > this.Nu.length ? (this.$p = [], vt(this)) : (this.aq && this.aq.abort(), this.aq = new z.Z(!1), this.v().g(this.aq, "success", this.xT), this.aq.ajax("/topic-question/autocomplete?token\x3d" + this.Nu + "\x26max_matches\x3d5\x26use_similar\x3d0", "GET"), this.Av.attr("src", this.Av.attr("data-src")).show()))
    };
    z.e.xT = function () {
        this.$p = z.Rn(this.aq)[0].slice(1);
        vt(this)
    };
    z.e.Ne = function () {
        var a = [];
        z.y(this.data, function (b) {
            a.push(['\x3cdiv class\x3d"zm-tag-editor-edit-item"\x3e\x3cspan\x3e', b[0], '\x3c/span\x3e\x3ca id\x3d"rmid-', b[3], '" href\x3d"#" class\x3d"zg-r3px zm-tag-editor-remove-button" name\x3d"remove"\x3e\x3c/a\x3e\x3c/div\x3e'].join(""))
        }, this);
        this.Kn.innerHTML = a.join("")
    };
    z.e.reset = function () {
        this.data = [];
        ot(this);
        this.Ne()
    };
    z.e.wI = function (a) {
        var b = a.id.split("-")[1], c = z.No(a).innerHTML;
        this.data = z.mb(this.data, function (a) {
            return b ? String(a[3]) !== b : a[1] !== c
        });
        this.mp(b)
    };
    z.e.Ue = function (a, b) {
        var c = [b, b, "", a];
        this.GJ = c;
        this.data.push(c);
        ot(this);
        this.Ne();
        this.rb.value = "";
        this.dispatchEvent("select");
        this.dispatchEvent("add_tag")
    };
    z.e.Wa = function (a) {
        this.rb && z.Q(this.rb, a)
    };
    z.e.trackEvent = function () {
        if (this.$p) {
            var a = 0, b = this.data.length;
            z.y(this.data, function (b) {
                z.y(this.$p, function (d) {
                    b[1] === d[1] && a++
                }, this)
            }, this);
            z.Y.tb({type: "ga_click_add_question", data: {Ou: a, total: b}})
        }
    };
    z.x(z.wt, z.tt);
    z.wt.prototype.Ue = function (a) {
        this.fh || (this.fh = !0, this.xhr = new z.Z(!0), this.v().ya(this.xhr, "complete", this.Tv), this.xhr.ajax(this.yD, "tid\x3d" + a + "\x26method\x3dadd"))
    };
    z.wt.prototype.mp = function (a) {
        this.fh || (this.fh = !0, this.xhr = new z.Z(!0), this.v().g(this.xhr, "complete", function () {
            ot(this);
            this.Ne();
            this.fh = !1
        }), this.xhr.ajax(this.yD, "tid\x3d" + a + "\x26method\x3ddel"))
    };
    z.x(xt, z.xc);
    xt.prototype.restore = function (a) {
        var b = this.ru();
        a || this.H();
        return b
    };
    z.x(z.yt, xt);
    z.yt.prototype.yp = function (a) {
        z.P(z.zt(this, !0));
        z.P(z.zt(this, !1));
        return a
    };
    z.yt.prototype.ru = function () {
        var a = null, b = z.zt(this, !this.QA), c = z.zt(this, this.QA);
        if (b && c) {
            var a = b.parentNode, b = z.lb(a.childNodes, b), d = c.parentNode, c = z.lb(d.childNodes, c);
            d == a && (this.QA ? b-- : c--);
            a = z.gu(a, b, d, c);
            a = this.yp(a);
            a.select()
        } else this.yp();
        return a
    };
    z.yt.prototype.D = function () {
        this.yp();
        this.da = null
    };
    z.x(z.At, z.Ld);
    z.e = z.At.prototype;
    z.e.setPosition = function (a, b, c) {
        if (this.node = a) this.Ub = z.qa(b) ? b : 1 != this.node.nodeType ? 0 : this.Jc ? -1 : 1;
        z.qa(c) && (this.depth = c)
    };
    z.e.Gg = function (a) {
        this.node = a.node;
        this.Ub = a.Ub;
        this.depth = a.depth;
        this.Jc = a.Jc;
        this.xr = a.xr
    };
    z.e.clone = function () {
        return new z.At(this.node, this.Jc, !this.xr, this.Ub, this.depth)
    };
    z.e.Vp = z.aa(31);
    z.e.next = function () {
        var a;
        if (this.xk) {
            if (!this.node || this.xr && 0 == this.depth) throw z.Od;
            a = this.node;
            var b = this.Jc ? -1 : 1;
            if (this.Ub == b) {
                var c = this.Jc ? a.lastChild : a.firstChild;
                c ? this.setPosition(c) : this.setPosition(a, -1 * b)
            } else (c = this.Jc ? a.previousSibling : a.nextSibling) ? this.setPosition(c) : this.setPosition(a.parentNode, -1 * b);
            this.depth += this.Ub * (this.Jc ? -1 : 1)
        } else this.xk = !0;
        a = this.node;
        if (!this.node) throw z.Od;
        return a
    };
    z.e.Yl = function () {
        return this.xk
    };
    z.e.equals = function (a) {
        return a.node == this.node && (!this.node || a.Ub == this.Ub)
    };
    z.e.splice = function (a) {
        var b = this.node, c = this.Jc ? 1 : -1;
        this.Ub == c && (this.Ub = -1 * c, this.depth += this.Ub * (this.Jc ? -1 : 1));
        this.Jc = !this.Jc;
        z.At.prototype.next.call(this);
        this.Jc = !this.Jc;
        for (var c = z.oa(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--) z.bf(c[d], b);
        z.P(b)
    };
    z.e = Bt.prototype;
    z.e.Qb = function () {
        var a = this.sc();
        return 1 == a.nodeType ? a : a.parentNode
    };
    z.e.$g = function () {
        return !1
    };
    z.e.ua = function () {
        return z.Je(z.C ? this.sc() : this.Z())
    };
    z.e.Va = function () {
        return z.Re(this.ua())
    };
    z.e.containsNode = function (a, b) {
        return this.Fg(z.yu(a), b)
    };
    z.e.Bi = function (a) {
        this.isCollapsed() || this.yf();
        return this.insertNode(a, !0)
    };
    z.x(It, z.At);
    z.x(Jt, Bt);
    Jt.prototype.Fg = function (a, b) {
        var c = z.Dt(this), d = z.Dt(a);
        return (b ? z.pb : z.$n)(d, function (a) {
            return z.pb(c, function (c) {
                return c.Fg(a, b)
            })
        })
    };
    Jt.prototype.insertNode = function (a, b) {
        b ? z.af(a, this.Z()) : z.bf(a, this.la());
        return a
    };
    Jt.prototype.cq = function (a, b) {
        this.insertNode(a, !0);
        this.insertNode(b, !1)
    };
    z.x(z.Kt, It);
    z.e = z.Kt.prototype;
    z.e.ms = function () {
        return 3 != this.node.nodeType ? -1 : this.node == this.xa ? this.Ca : 0
    };
    z.e.hs = function () {
        return 3 != this.node.nodeType ? -1 : this.node == this.ta ? this.Ba : this.node.nodeValue.length
    };
    z.e.Z = function () {
        return this.xa
    };
    z.e.la = function () {
        return this.ta
    };
    z.e.Go = function () {
        return this.Yl() && this.node == this.ta && (!this.Ba || 1 != this.Ub)
    };
    z.e.next = function () {
        if (this.Go()) throw z.Od;
        return z.Kt.o.next.call(this)
    };
    z.e.Vp = z.aa(30);
    z.e.Gg = function (a) {
        this.xa = a.xa;
        this.ta = a.ta;
        this.Ca = a.Ca;
        this.Ba = a.Ba;
        this.sf = a.sf;
        z.Kt.o.Gg.call(this, a)
    };
    z.e.clone = function () {
        var a = new z.Kt(this.xa, this.Ca, this.ta, this.Ba, this.sf);
        a.Gg(this);
        return a
    };
    z.e = Lt.prototype;
    z.e.ej = "";
    z.e.set = function (a) {
        this.ej = "" + a
    };
    z.e.append = function (a, b, c) {
        this.ej += a;
        if (null != b) for (var d = 1; d < arguments.length; d++) this.ej += arguments[d];
        return this
    };
    z.e.clear = function () {
        this.ej = ""
    };
    z.e.toString = function () {
        return this.ej
    };
    z.e = Mt.prototype;
    z.e.by = function () {
        return Nt(this, !0)
    };
    z.e.Tx = function () {
        return Nt(this, !1)
    };
    z.e.Fg = function (a, b) {
        var c = b && !a.isCollapsed(), d = a.O;
        try {
            return c ? 0 <= this.we(d, 0, 1) && 0 >= this.we(d, 1, 0) : 0 <= this.we(d, 0, 0) && 0 >= this.we(d, 1, 1)
        } catch (f) {
            if (!z.C) throw f;
            return !1
        }
    };
    z.e.containsNode = function (a, b) {
        return this.Fg(Xt(a), b)
    };
    z.e.Xn = function () {
        var a = new Lt;
        z.Pd(this, function (b, c, d) {
            3 == b.nodeType ? a.append(z.Na(b.nodeValue.substring(d.ms(), d.hs()))) : 1 == b.nodeType && (-1 == d.Ub ? z.Ye(b) && a.append("\x3c/" + b.tagName + "\x3e") : (c = b.cloneNode(!1), c = z.Ko(c), z.C && "LI" == b.tagName ? a.append(c) : (b = c.lastIndexOf("\x3c"), a.append(b ? c.substr(0, b) : c))))
        }, this);
        return a.toString()
    };
    z.e.gd = function () {
        return new z.Kt(this.Z(), this.va(), this.la(), this.La())
    };
    z.x(Ot, Mt);
    z.e = Ot.prototype;
    z.e.clone = function () {
        return new this.constructor(this.O.cloneRange())
    };
    z.e.sc = function () {
        return this.O.commonAncestorContainer
    };
    z.e.Z = function () {
        return this.O.startContainer
    };
    z.e.va = function () {
        return this.O.startOffset
    };
    z.e.la = function () {
        return this.O.endContainer
    };
    z.e.La = function () {
        return this.O.endOffset
    };
    z.e.we = function (a, b, c) {
        return this.O.compareBoundaryPoints(1 == c ? 1 == b ? z.t.Range.START_TO_START : z.t.Range.START_TO_END : 1 == b ? z.t.Range.END_TO_START : z.t.Range.END_TO_END, a)
    };
    z.e.isCollapsed = function () {
        return this.O.collapsed
    };
    z.e.Id = function () {
        return this.O.toString()
    };
    z.e.$f = function () {
        var a = z.J(this.O.startContainer).B("DIV");
        a.appendChild(this.O.cloneContents());
        a = a.innerHTML;
        if (z.Ja(a, "\x3c") || !this.isCollapsed() && !z.Va(a, "\x3c")) return a;
        var b = this.sc(), b = 1 == b.nodeType ? b : b.parentNode;
        return z.Ko(b.cloneNode(!1)).replace("\x3e", "\x3e" + a)
    };
    z.e.select = function (a) {
        var b = z.Re(z.Je(this.Z()));
        this.Gp(b.getSelection(), a)
    };
    z.e.Gp = function (a) {
        a.removeAllRanges();
        a.addRange(this.O)
    };
    z.e.yf = function () {
        var a = this.O;
        a.extractContents();
        if (a.startContainer.hasChildNodes()) {
            var b = a.startContainer.childNodes[a.startOffset];
            if (b) {
                var c = b.previousSibling;
                "" == z.Io(b) && z.P(b);
                c && "" == z.Io(c) && z.P(c)
            }
        }
        if (z.Jl) {
            var b = this.Z(), c = this.va(), d = this.la(), f = this.La(), g = b.nextSibling;
            b == d && b.parentNode && 3 == b.nodeType && g && 3 == g.nodeType && (b.nodeValue += g.nodeValue, z.P(g), a.setStart(b, c), a.setEnd(d, f))
        }
    };
    z.e.surroundContents = function (a) {
        this.O.surroundContents(a);
        return a
    };
    z.e.insertNode = function (a, b) {
        var c = this.O.cloneRange();
        c.collapse(b);
        c.insertNode(a);
        c.detach();
        return a
    };
    z.e.cq = function (a, b) {
        var c = z.Re(z.Je(this.Z()));
        if (c = z.vu(c)) var d = c.Z(), f = c.la(), g = c.va(), h = c.La();
        var k = this.O.cloneRange(), m = this.O.cloneRange();
        k.collapse(!1);
        m.collapse(!0);
        k.insertNode(b);
        m.insertNode(a);
        k.detach();
        m.detach();
        if (c) {
            if (3 == d.nodeType) for (; g > d.length;) {
                g -= d.length;
                do d = d.nextSibling; while (d == a || d == b)
            }
            if (3 == f.nodeType) for (; h > f.length;) {
                h -= f.length;
                do f = f.nextSibling; while (f == a || f == b)
            }
            z.gu(d, g, f, h).select()
        }
    };
    z.e.collapse = function (a) {
        this.O.collapse(a)
    };
    z.x(St, Ot);
    St.prototype.Gp = function (a, b) {
        !b || this.isCollapsed() ? St.o.Gp.call(this, a, b) : (a.collapse(this.la(), this.La()), a.extend(this.Z(), this.va()))
    };
    z.x(z.Tt, Mt);
    z.e = z.Tt.prototype;
    z.e.clone = function () {
        var a = new z.Tt(this.O.duplicate(), this.Or);
        a.mg = this.mg;
        a.xa = this.xa;
        a.ta = this.ta;
        return a
    };
    z.e.Dd = function () {
        this.mg = this.xa = this.ta = null;
        this.Ca = this.Ba = -1
    };
    z.e.sc = function () {
        if (!this.mg) {
            var a = this.O.text, b = this.O.duplicate(), c = a.replace(/ +$/, "");
            (c = a.length - c.length) && b.moveEnd("character", -c);
            c = b.parentElement();
            b = z.np(b.htmlText).length;
            if (this.isCollapsed() && 0 < b) return this.mg = c;
            for (; b > z.np(c.outerHTML).length;) c = c.parentNode;
            for (; 1 == c.childNodes.length && c.innerText == Zt(c.firstChild) && Qt(c.firstChild);) c = c.firstChild;
            0 == a.length && (c = Vt(this, c));
            this.mg = c
        }
        return this.mg
    };
    z.e.Z = function () {
        this.xa || (this.xa = Wt(this, 1), this.isCollapsed() && (this.ta = this.xa));
        return this.xa
    };
    z.e.va = function () {
        0 > this.Ca && (this.Ca = Yt(this, 1), this.isCollapsed() && (this.Ba = this.Ca));
        return this.Ca
    };
    z.e.la = function () {
        if (this.isCollapsed()) return this.Z();
        this.ta || (this.ta = Wt(this, 0));
        return this.ta
    };
    z.e.La = function () {
        if (this.isCollapsed()) return this.va();
        0 > this.Ba && (this.Ba = Yt(this, 0), this.isCollapsed() && (this.Ca = this.Ba));
        return this.Ba
    };
    z.e.we = function (a, b, c) {
        return this.O.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
    };
    z.e.cg = z.aa(35);
    z.e.isCollapsed = function () {
        return 0 == this.O.compareEndPoints("StartToEnd", this.O)
    };
    z.e.Id = function () {
        return this.O.text
    };
    z.e.$f = function () {
        return this.O.htmlText
    };
    z.e.select = function () {
        this.O.select()
    };
    z.e.yf = function () {
        if (!this.isCollapsed() && this.O.htmlText) {
            var a = this.Z(), b = this.la(), c = this.O.text, d = this.O.duplicate();
            d.moveStart("character", 1);
            d.moveStart("character", -1);
            d.text == c && (this.O = d);
            this.O.text = "";
            this.Dd();
            c = this.Z();
            d = this.va();
            try {
                var f = a.nextSibling;
                a == b && a.parentNode && 3 == a.nodeType && f && 3 == f.nodeType && (a.nodeValue += f.nodeValue, z.P(f), this.O = Ut(c), this.O.move("character", d), this.Dd())
            } catch (g) {
            }
        }
    };
    z.e.surroundContents = function (a) {
        z.P(a);
        a.innerHTML = this.O.htmlText;
        (a = $t(this.O, a)) && this.O.moveToElementText(a);
        this.Dd();
        return a
    };
    z.e.insertNode = function (a, b) {
        var c = au(this.O.duplicate(), a, b);
        this.Dd();
        return c
    };
    z.e.cq = function (a, b) {
        var c = this.O.duplicate(), d = this.O.duplicate();
        au(c, a, !0);
        au(d, b, !1);
        this.Dd()
    };
    z.e.collapse = function (a) {
        this.O.collapse(a);
        a ? (this.ta = this.xa, this.Ba = this.Ca) : (this.xa = this.ta, this.Ca = this.Ba)
    };
    z.x(bu, Ot);
    bu.prototype.Gp = function (a) {
        a.collapse(this.Z(), this.va());
        this.la() == this.Z() && this.La() == this.va() || a.extend(this.la(), this.La());
        0 == a.rangeCount && a.addRange(this.O)
    };
    z.x(cu, Ot);
    cu.prototype.we = function (a, b, c) {
        return z.E("528") ? cu.o.we.call(this, a, b, c) : this.O.compareBoundaryPoints(1 == c ? 1 == b ? z.t.Range.START_TO_START : z.t.Range.END_TO_START : 1 == b ? z.t.Range.START_TO_END : z.t.Range.END_TO_END, a)
    };
    cu.prototype.Gp = function (a, b) {
        b ? a.setBaseAndExtent(this.la(), this.La(), this.Z(), this.va()) : a.setBaseAndExtent(this.Z(), this.va(), this.la(), this.La())
    };
    z.x(z.eu, Bt);
    z.e = z.eu.prototype;
    z.e.clone = function () {
        var a = new z.eu;
        a.Ph = this.Ph && this.Ph.clone();
        a.xa = this.xa;
        a.Ca = this.Ca;
        a.ta = this.ta;
        a.Ba = this.Ba;
        a.sf = this.sf;
        return a
    };
    z.e.li = function () {
        return "text"
    };
    z.e.ce = function () {
        return z.iu(this).O
    };
    z.e.Dd = function () {
        this.xa = this.Ca = this.ta = this.Ba = null
    };
    z.e.Fj = function () {
        return 1
    };
    z.e.Be = function () {
        return this
    };
    z.e.sc = function () {
        return z.iu(this).sc()
    };
    z.e.Z = function () {
        return this.xa || (this.xa = z.iu(this).Z())
    };
    z.e.va = function () {
        return null != this.Ca ? this.Ca : this.Ca = z.iu(this).va()
    };
    z.e.by = function () {
        return z.iu(this).by()
    };
    z.e.la = function () {
        return this.ta || (this.ta = z.iu(this).la())
    };
    z.e.La = function () {
        return null != this.Ba ? this.Ba : this.Ba = z.iu(this).La()
    };
    z.e.Tx = function () {
        return z.iu(this).Tx()
    };
    z.e.$g = function () {
        return this.sf
    };
    z.e.Fg = function (a, b) {
        var c = a.li();
        return "text" == c ? z.iu(this).Fg(z.iu(a), b) : "control" == c ? (c = a.gi(), (b ? z.pb : z.$n)(c, function (a) {
            return this.containsNode(a, b)
        }, this)) : !1
    };
    z.e.cg = z.aa(34);
    z.e.isCollapsed = function () {
        return z.iu(this).isCollapsed()
    };
    z.e.Id = function () {
        return z.iu(this).Id()
    };
    z.e.Xn = function () {
        return z.iu(this).Xn()
    };
    z.e.$f = function () {
        return z.iu(this).$f()
    };
    z.e.gd = function () {
        return new z.Kt(this.Z(), this.va(), this.la(), this.La())
    };
    z.e.select = function () {
        z.iu(this).select(this.sf)
    };
    z.e.yf = function () {
        z.iu(this).yf();
        this.Dd()
    };
    z.e.surroundContents = function (a) {
        a = z.iu(this).surroundContents(a);
        this.Dd();
        return a
    };
    z.e.insertNode = function (a, b) {
        var c = z.iu(this).insertNode(a, b);
        this.Dd();
        return c
    };
    z.e.cq = function (a, b) {
        z.iu(this).cq(a, b);
        this.Dd()
    };
    z.e.TA = function () {
        return new ju(this)
    };
    z.e.collapse = function (a) {
        a = this.$g() ? !a : a;
        this.Ph && this.Ph.collapse(a);
        a ? (this.ta = this.xa, this.Ba = this.Ca) : (this.xa = this.ta, this.Ca = this.Ba);
        this.sf = !1
    };
    z.x(ju, xt);
    ju.prototype.ru = function () {
        return z.gu(this.dD, this.KM, this.mF, this.JO)
    };
    ju.prototype.D = function () {
        ju.o.D.call(this);
        this.mF = this.dD = null
    };
    z.x(z.ku, Jt);
    z.e = z.ku.prototype;
    z.e.Dd = function () {
        this.Wp = this.fb = null
    };
    z.e.clone = function () {
        return mu.apply(this, this.gi())
    };
    z.e.li = function () {
        return "control"
    };
    z.e.ce = function () {
        return this.O || window.document.body.createControlRange()
    };
    z.e.Fj = function () {
        return this.O ? this.O.length : 0
    };
    z.e.Be = function (a) {
        a = this.O.item(a);
        return fu(Xt(a), void 0)
    };
    z.e.sc = function () {
        return Lo.apply(null, this.gi())
    };
    z.e.Z = function () {
        return nu(this)[0]
    };
    z.e.va = function () {
        return 0
    };
    z.e.la = function () {
        var a = nu(this), b = z.kb(a);
        return z.qb(a, function (a) {
            return z.lf(a, b)
        })
    };
    z.e.La = function () {
        return this.la().childNodes.length
    };
    z.e.gi = function () {
        if (!this.fb && (this.fb = [], this.O)) for (var a = 0; a < this.O.length; a++) this.fb.push(this.O.item(a));
        return this.fb
    };
    z.e.cg = z.aa(33);
    z.e.isCollapsed = function () {
        return !this.O || !this.O.length
    };
    z.e.Id = function () {
        return ""
    };
    z.e.Xn = function () {
        return z.nb(nu(this), z.Ko).join("")
    };
    z.e.$f = function () {
        return this.Xn()
    };
    z.e.gd = function () {
        return new pu(this)
    };
    z.e.select = function () {
        this.O && this.O.select()
    };
    z.e.yf = function () {
        if (this.O) {
            for (var a = [], b = 0, c = this.O.length; b < c; b++) a.push(this.O.item(b));
            z.y(a, z.P);
            this.collapse(!1)
        }
    };
    z.e.Bi = function (a) {
        a = this.insertNode(a, !0);
        this.isCollapsed() || this.yf();
        return a
    };
    z.e.TA = function () {
        return new ou(this)
    };
    z.e.collapse = function () {
        this.O = null;
        this.Dd()
    };
    z.x(ou, xt);
    ou.prototype.ru = function () {
        for (var a = (this.fb.length ? z.Je(this.fb[0]) : window.document).body.createControlRange(), b = 0, c = this.fb.length; b < c; b++) a.addElement(this.fb[b]);
        return lu(a)
    };
    ou.prototype.D = function () {
        ou.o.D.call(this);
        delete this.fb
    };
    z.x(pu, It);
    z.e = pu.prototype;
    z.e.ms = function () {
        return 0
    };
    z.e.hs = function () {
        return 0
    };
    z.e.Z = function () {
        return this.xa
    };
    z.e.la = function () {
        return this.ta
    };
    z.e.Go = function () {
        return !this.depth && !this.fb.length
    };
    z.e.next = function () {
        if (this.Go()) throw z.Od;
        if (!this.depth) {
            var a = this.fb.shift();
            this.setPosition(a, 1, 1);
            return a
        }
        return pu.o.next.call(this)
    };
    z.e.Gg = function (a) {
        this.fb = a.fb;
        this.xa = a.xa;
        this.ta = a.ta;
        pu.o.Gg.call(this, a)
    };
    z.e.clone = function () {
        var a = new pu(null);
        a.Gg(this);
        return a
    };
    z.x(z.qu, Jt);
    z.e = z.qu.prototype;
    z.e.Dd = function () {
        this.om = [];
        this.yr = this.Fm = null
    };
    z.e.clone = function () {
        var a = this.Mf, b = new z.qu;
        b.Mf = z.vb(a);
        return b
    };
    z.e.li = function () {
        return "mutli"
    };
    z.e.ce = function () {
        return this.Mf[0]
    };
    z.e.Fj = function () {
        return this.Mf.length
    };
    z.e.Be = function (a) {
        this.om[a] || (this.om[a] = fu(du(this.Mf[a]), void 0));
        return this.om[a]
    };
    z.e.sc = function () {
        if (!this.yr) {
            for (var a = [], b = 0, c = this.Fj(); b < c; b++) a.push(this.Be(b).sc());
            this.yr = Lo.apply(null, a)
        }
        return this.yr
    };
    z.e.Z = function () {
        return su(this)[0].Z()
    };
    z.e.va = function () {
        return su(this)[0].va()
    };
    z.e.la = function () {
        return z.kb(su(this)).la()
    };
    z.e.La = function () {
        return z.kb(su(this)).La()
    };
    z.e.cg = z.aa(32);
    z.e.isCollapsed = function () {
        return 0 == this.Mf.length || 1 == this.Mf.length && this.Be(0).isCollapsed()
    };
    z.e.Id = function () {
        return z.nb(z.Dt(this), function (a) {
            return a.Id()
        }).join("")
    };
    z.e.Xn = function () {
        return this.$f()
    };
    z.e.$f = function () {
        return z.nb(z.Dt(this), function (a) {
            return a.$f()
        }).join("")
    };
    z.e.gd = function () {
        return new uu(this)
    };
    z.e.select = function () {
        var a = Ct(this.Va());
        a.removeAllRanges();
        for (var b = 0, c = this.Fj(); b < c; b++) a.addRange(this.Be(b).ce())
    };
    z.e.yf = function () {
        z.y(z.Dt(this), function (a) {
            a.yf()
        })
    };
    z.e.TA = function () {
        return new tu(this)
    };
    z.e.collapse = function (a) {
        if (!this.isCollapsed()) {
            var b = a ? this.Be(0) : this.Be(this.Fj() - 1);
            this.Dd();
            b.collapse(a);
            this.om = [b];
            this.Fm = [b];
            this.Mf = [b.ce()]
        }
    };
    z.x(tu, xt);
    tu.prototype.ru = function () {
        var a = z.nb(this.UA, function (a) {
            return a.restore()
        });
        return ru(a)
    };
    tu.prototype.D = function () {
        tu.o.D.call(this);
        z.y(this.UA, function (a) {
            a.H()
        });
        delete this.UA
    };
    z.x(uu, It);
    z.e = uu.prototype;
    z.e.ms = function () {
        return this.dg[this.jl].ms()
    };
    z.e.hs = function () {
        return this.dg[this.jl].hs()
    };
    z.e.Z = function () {
        return this.dg[0].Z()
    };
    z.e.la = function () {
        return z.kb(this.dg).la()
    };
    z.e.Go = function () {
        return this.dg[this.jl].Go()
    };
    z.e.next = function () {
        try {
            var a = this.dg[this.jl], b = a.next();
            this.setPosition(a.node, a.Ub, a.depth);
            return b
        } catch (c) {
            if (c !== z.Od || this.dg.length - 1 == this.jl) throw c;
            this.jl++;
            return this.next()
        }
    };
    z.e.Gg = function (a) {
        this.dg = z.vb(a.dg);
        uu.o.Gg.call(this, a)
    };
    z.e.clone = function () {
        var a = new uu(null);
        a.Gg(this);
        return a
    };
    z.x(z.Bu, z.Ld);
    z.Bu.prototype.next = function () {
        var a = this.$H;
        if (!a) throw z.Od;
        this.$H = this.aV ? a.previousSibling : a.nextSibling;
        return a
    };
    z.x(Cu, z.Bu);
    var Iu = {IMG: !0, IFRAME: !0, EMBED: !0};
    var FF = function () {
        if (z.Vl) return Mu(/Firefox\/([0-9.]+)/);
        if (z.C || z.Gc || z.ug) return z.Jc;
        if (z.If) return Mu(/Chrome\/([0-9.]+)/);
        if (z.Xl && !(z.Ec() || z.Ab("iPad") || z.Ab("iPod"))) return Mu(/Version\/([0-9.]+)/);
        if (z.Ui || z.Vj) {
            var a;
            if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(z.Bb)) return a[1] + "." + a[2]
        } else if (z.Wl) return (a = Mu(/Android\s+([0-9.]+)/)) ? a : Mu(/Version\/([0-9.]+)/);
        return ""
    }();
    var IF, JF, LF, LA, QF, RF;
    z.GF = z.C && !(9 <= z.Tg);
    z.HF = z.B || z.D || z.ug || z.Gc || z.C && 9 <= z.Tg;
    z.CA = z.C || z.D || z.ug || z.Gc || !1;
    IF = z.D || !1;
    JF = z.C || z.D || z.ug;
    z.KF = z.B || z.D;
    z.D && z.E("534.16");
    LF = z.B && !0;
    z.MF = z.B || z.D || z.ug;
    z.NF = z.B || z.ug;
    z.C && z.E("7.0");
    z.OF = z.B && z.E("1.8") || z.D || z.ug;
    LA = z.D || z.C && z.E("9");
    z.C || z.Gc || z.ug || z.B && z.E("1.9");
    z.PF = z.B || z.D && !z.E("527");
    QF = z.C || z.ug;
    RF = z.C || z.Gc || z.D && z.E("525");
    z.SF = z.D && !z.E("531");
    z.TF = z.D && !z.E("528");
    z.B && z.E("1.9") || z.C || z.Gc || z.ug || z.D && z.E("531");
    z.UF = z.C || z.Gc || z.B || z.ug;
    z.VF = z.B || z.D && !z.E("526");
    z.WF = z.C || z.ug;
    z.XF = !z.C && !z.ug;
    z.YF = !z.D && !z.Gc;
    z.If && 0 <= z.$a(FF, "4") || z.Xl && z.E("533") || z.B && z.E("2.0") || z.C && z.E("10");
    z.ZF = z.ug && z.E("11.10");
    z.If && z.$a(FF, "12");
    z.x(z.av, z.yt);
    z.av.prototype.yp = function (a) {
        var b = z.zt(this, !0), c = z.zt(this, !1), b = b && c ? Lo(b, c) : b || c;
        z.av.o.yp.call(this);
        if (a) return Tu(b, a);
        b && (a = z.vu(z.Re(z.Je(b))), (a = Tu(b, a)) && a.select())
    };
    z.x(z.bv, z.R);
    z.$F = 0;
    z.cv = [];
    z.bv.prototype.kc = null;
    z.bv.prototype.xl = !1;
    z.bv.prototype.St = 0;
    var aG = z.C ? "styleFloat" : "cssFloat", gv = ["position", "top", "left", "width", aG],
        hv = ["position", "top", "left", "display", aG, "marginTop", "marginLeft", "marginRight", "marginBottom"];
    z.e = z.bv.prototype;
    z.e.B = function () {
        z.bv.o.B.call(this);
        this.Y(this.m())
    };
    z.e.Y = function (a) {
        z.bv.o.Y.call(this, a);
        z.W.add(a, "goog-scrollfloater")
    };
    z.e.C = function () {
        z.bv.o.C.call(this);
        this.nw = z.Pg(window.document.body).top - 2;
        this.kc || (this.kc = this.K().B("div", {style: "visibility:hidden"}));
        this.St = z.Wn(this.m()).y;
        z.dv(this, this.wu);
        var a = this.gq = new z.fl(this.sq, 150, this);
        this.v().g(window, "scroll", (0, z.q)(a.fire, a));
        this.v().g(window, "resize", z.Qr(150, this.sy))
    };
    z.e.D = function () {
        z.bv.o.D.call(this);
        z.tb(z.cv, this);
        this.gq.H();
        this.gz && (z.$F -= this.pE);
        delete this.kc
    };
    z.e.sq = function () {
        this.wu && (z.vf(this.K()).y + this.nw > this.St ? fv(this) : z.ev(this))
    };
    z.e.Bp = function () {
        var a = this.m(), b = this.nw;
        !this.gz && 0 < z.$F && (b += z.$F);
        a.style.top = b + "px"
    };
    z.e.sy = function () {
        z.ev(this);
        this.St = z.Wn(this.m()).y;
        this.sq()
    };
    z.x(iv, z.bv);
    iv.prototype.sq = function () {
        var a = jv(this.tag);
        if (this.wu && (!a || a === this)) {
            var a = this.EU.getBoundingClientRect(), b = this.nw + z.$F, c = b + this.KI;
            a.top < b && a.bottom > c ? fv(this) : z.ev(this)
        }
    };
    z.la(kv);
    kv.prototype.$e = function (a, b, c) {
        z.og("richtexteditor", function () {
            var d = window.ZH.createRichTextEditor(a, b), f = d[0], d = d[1];
            c && c(f, d)
        })
    };
    lv.prototype.defaults = {VU: [], NA: [], AN: !0};
    var nv = "data-tip class style id bgcolor color size width height".split(" ");
    lv.prototype.Bg = function () {
        var a = this;
        if (this.J.AN) this.W.on("paste", function () {
            (0, window.setTimeout)(function () {
                ov(a.W, pv(a))
            })
        })
    };
    z.x(qv, z.G);
    z.e = qv.prototype;
    z.e.defaults = {
        Vm: {Le: 6, content: "", method: "GET", source: "/people/autocomplete"},
        jU: "mention-popup",
        mk: window.document.body,
        TC: "activated"
    };
    z.e.D = function () {
        this.Gr();
        z.P(this.h);
        this.h = null;
        qv.o.D.call(this)
    };
    z.e.uw = function () {
        var a = this.h = z.We(this.zW);
        this.tp = a.getElementsByTagName("input")[0];
        a.className = this.J.jU;
        a.style.display = "none";
        this.J.mk.appendChild(a)
    };
    z.e.sc = function () {
        return this.J.mk
    };
    z.e.zW = '\x3cdiv\x3e\x3cdiv class\x3d"writing-bg"\x3e\x3cinput\x3e\x3c/div\x3e\x3cdiv class\x3d"tip"\x3e想用 @ 提到谁？\x3c/div\x3e\x3c/div\x3e';
    z.e.template = (0, z.Rv)('\x3c% if (data.id) { %\x3e\x3cimg class\x3d"avatar" src\x3d"\x3c%\x3davatar%\x3e"\x3e\x3cdiv class\x3d"body"\x3e\x3cspan class\x3d"name"\x3e\x3c%\x3dlabel%\x3e\x3c/span\x3e\x3cspan class\x3d"bio"\x3e\x3c%\x3dheadline%\x3e\x3c/span\x3e\x3c/div\x3e\x3c% } %\x3e');
    z.e.ub = function () {
        return z.Kg(this.h)
    };
    z.e.open = function () {
        this.ub() || (z.Q(this.h, !0), this.tp.focus(), this.Bg(), this.dispatchEvent("open"))
    };
    z.e.close = function () {
        this.ub() && (z.Q(this.h, !1), z.W.remove(this.h, this.J.TC), this.tp.value = "", this.tp.blur(), this.Gr(), this.dispatchEvent("close"))
    };
    z.e.kI = function (a) {
        this.ub() && !z.lf(this.h, a.target) && rv(this, a)
    };
    z.e.ip = function (a) {
        var b = a.keyCode, c = this.tp;
        if (27 === b || c === a.target && "" === c.value && (8 === b || 32 === b)) rv(this, a), a.preventDefault(), a.stopPropagation()
    };
    z.e.Bg = function () {
        z.F(window.document, "click", this.kI, !1, this);
        z.F(this.h, "keydown", this.ip, !1, this)
    };
    z.e.Gr = function () {
        z.md(window.document, "click", this.kI, !1, this);
        z.md(this.h, "keydown", this.ip, !1, this)
    };
    z.e.Xg = function () {
        var a = this, b = this.J.Vm, c = new z.Vs(this.tp, {
            vk: this.h, Le: b.Le, source: b.source, select: function (b) {
                (0, window.setTimeout)(function () {
                    a.close();
                    a.dispatchEvent({type: "select", data: {hU: b}})
                });
                return ""
            }, td: function (b, c, g) {
                g.innerHTML = a.template(b.data)
            }
        });
        c.fB(b.method);
        c.ia(b.content);
        c.addEventListener("suggestionsupdate", function () {
            z.W.enable(this.h, this.J.TC, c.ub())
        }, !1, this);
        this.aa = c
    };
    z.e.position = function (a) {
        z.zg(this.h, a)
    };
    z.x(sv, z.G);
    var vv = !!window.getSelection;
    sv.prototype.defaults = {
        Vm: {},
        mk: window.document.body,
        Po: "member_mention",
        Gs: "mention-holder",
        position: function (a, b) {
            a.x += b.width + 7;
            a.y -= 5;
            z.C && 7 < z.Jc && (a.y += b.height / 2 - 9)
        }
    };
    var Cv = z.Gb({LX: "member_mention"});
    sv.prototype.m = function () {
        return this.input
    };
    sv.prototype.Bg = function () {
        var a = this.ng;
        z.F(a, "cancel", function (a) {
            var c = tv(this);
            a = a.data.originalEvent;
            c && "click" !== a.type && ("keydown" === a.type && 32 === a.keyCode && (c = c.parentNode.insertBefore(window.document.createTextNode(" "), c.nextSibling)), uv(this, c))
        }, !1, this);
        z.F(a, "select", function (a) {
            var c = a.data.hU;
            a = z.N(this.J.Gs, this.input);
            var c = this.Cr(c), d = a.previousSibling, f = window.document.createTextNode(" ");
            z.Po(c, a);
            z.bf(f, c);
            d && 3 === d.nodeType && !z.qp(z.of(d), " ") && z.af(window.document.createTextNode(" "),
                c);
            uv(this, f)
        }, !1, this);
        z.F(this.input, "click", function () {
            a.ub() && tv(this)
        }, !1, this);
        z.F(this.input, "keydown", function (a) {
            var c;
            if (8 === a.keyCode && (c = z.vu())) {
                a = c.Z();
                var d = c.la(), f = c.va();
                c = c.La();
                var g = !1;
                Bv(a.parentNode) && (f = 0, g = !0);
                Bv(d.parentNode) && (c = d.length, g = !0);
                g && z.gu(a, f, d, c).select()
            }
        }, !1, this);
        z.F(this.input, z.Uc || z.Ui || z.Vj ? "keypress" : "keyup", function (a) {
            function c(a, b) {
                if (3 !== a.nodeType || "@" === a.nodeValue && wv(a.previousSibling) || wv(a.parentNode)) return !1;
                var c = a.nodeValue, d = b - 1;
                if ("@" !==
                    c.slice(d, d + 1)) return !1;
                var f = c;
                0 <= d && d < c.length && (f = c.substr(0, d) + c.substr(d + 1, c.length - d - 1));
                a.nodeValue = f;
                return !0
            }

            if ("keypress" !== a.type || "@" === String.fromCharCode(a.charCode)) {
                var d, f, g, h;
                if ("keyup" === a.type) {
                    if (50 !== a.keyCode) return;
                    if (vv) {
                        d = window.getSelection();
                        g = d.anchorNode;
                        h = d.anchorOffset;
                        if (!c(g, h)) return;
                        z.D && !g.nextSibling && (g.nodeValue += " ");
                        f = window.document.createRange();
                        d.removeAllRanges();
                        f.setStart(g, h - 1);
                        f.setEnd(g, h - 1);
                        d.addRange(f)
                    } else {
                        f = z.xu(window.document.selection.createRange());
                        g = z.Et(f);
                        h = f.va();
                        if (!c(g, h)) return;
                        z.zu(g, h - 1).select()
                    }
                }
                this.Ou(a)
            }
        }, !1, this)
    };
    sv.prototype.Ou = function (a) {
        var b = this, c = this.ng;
        if (!c.ub()) {
            var d = function (c) {
                return wv(c) || c.className === b.J.Po ? !1 : (a && a.preventDefault(), !0)
            }, f = function (a) {
                c.position(a);
                c.open()
            };
            vv ? xv(b, d, f) : Av(b, d, f)
        }
    };
    sv.prototype.Cr = function (a, b) {
        return z.O("a", {
            "data-hash": a.id,
            href: "/people/" + a.url_token,
            className: b || this.J.Po,
            innerHTML: "@" + a.label
        })
    };
    z.x(z.Dv, z.R);
    z.e = z.Dv.prototype;
    z.e.D = function () {
        this.Ma = null;
        z.Dv.o.D.call(this)
    };
    z.e.Y = function (a) {
        z.Dv.o.Y.call(this, a);
        var b = a.getAttribute("data-resourceid");
        b && (this.XU = a.getAttribute("data-action"), this.Fp = b);
        this.status || (this.status = "normal");
        a = this.K();
        this.hd || (this.hd = a.Yf("zm-editable-content", this.h)) && "1" === this.hd.getAttribute("data-disabled") && (this.disabled = !0);
        this.$b ? this.Vb && (this.$b.innerHTML = this.Vb) : (this.$b = a.Yf("zm-editable-tip", this.h), this.Vb && !this.$b && (this.$b = a.B("div", "zm-editable-tip"), this.$b.innerHTML = this.Vb, a.Us(this.$b, this.hd)));
        this.Kb = a.Yf("zm-editable-editor-wrap",
            this.h);
        this.content = (0, z.ab)(this.content || this.bC ? z.of(this.hd) : this.hd.innerHTML);
        this.ve();
        Gv(this)
    };
    z.e.B = function () {
        var a = this.K(),
            a = a.B("div", "zm-editable-item-wrap", [this.$b = a.B("div", "zm-editable-tip"), this.hd = a.B("div", "zm-editable-content", this.content)]);
        this.Y(a)
    };
    z.e.C = function () {
        z.Dv.o.C.call(this);
        this.v().g(this.hd, "click", this.Qa);
        this.$b && this.v().g(this.$b, "click", this.Qa)
    };
    z.e.ia = function (a) {
        this.content = a;
        Gv(this)
    };
    z.e.Qa = function (a) {
        var b = z.Er(this.h, a.target), c = this.K();
        if (!b || !b.name) return a = c.SO(a.target, "div", "zm-editable-tip-label"), this.isEnabled && a && this.rg(), !0;
        a = b.name;
        switch (a) {
            case "expand":
                Gv(this);
                break;
            case "collapse":
                Gv(this);
                break;
            case "edit":
                z.T.qe ? !1 !== this.dispatchEvent("beforeedit") && (this.init(), this.rg()) : (new z.qq).G(!0);
                this.dispatchEvent("click_edit");
                break;
            case "save":
                this.ys();
                break;
            case "cancel":
                this.dispatchEvent("cancel_edit");
                this.Ki();
                break;
            default:
                return this.qs(a)
        }
        return !0
    };
    z.e.ys = function () {
        var a = z.sr(this.Zf()), b = /<embed/i.test(a);
        if (/<img/i.test(a) || b || this.TG || a && tr(a).length) a !== this.content || this.pF ? (this.dispatchEvent("save_changed"), this.jh(a)) : (this.dispatchEvent("save_unchanged"), this.Ki())
    };
    z.e.jh = function (a) {
        if (!this.ea || !this.ea.tc()) if (this.Fr && this.AJ) {
            this.ea = new z.Z(!0);
            this.v().ya(this.ea, "success", this.ZC);
            var b = new z.vh(this.params.join("\x26"));
            b.add(this.Fr, a).add("field_name", this.Fr);
            this.ea.ajax(this.AJ, b.toString())
        } else this.dispatchEvent("change")
    };
    z.e.Ki = function () {
        this.status = "normal";
        this.ve()
    };
    z.e.ZC = function () {
        var a = z.Rn(this.ea);
        if (!a) return z.X.message("网络异常");
        if (a.r) return z.X.message(a.msg);
        this.ia(a.msg);
        this.Ki();
        this.dispatchEvent("saveSuccess");
        this.dispatchEvent("change")
    };
    z.e.Ua = function () {
        return this.content
    };
    z.e.Ux = z.aa(36);
    z.e.isContentEditable = function () {
        return !this.Hd
    };
    z.e.Zf = function () {
        return (0, z.Lr)(z.Ma(this.Ma.value))
    };
    z.e.qs = function (a) {
        this.dispatchEvent(a);
        return !0
    };
    z.e.init = function () {
        this.DQ || (this.DQ = !0, this.$e())
    };
    z.e.$e = function () {
        var a = this.K();
        this.Kb ? (this.qc = a.Yf("zm-command", this.Kb), this.Ma = a.Yf("zm-editable-editor-input", this.Kb)) : (this.Kb = a.B("div", "zm-editable-editor-wrap clearfix", this.pj = a.B("div", "zm-editable-editor-outer", a.B("div", "zm-editable-editor-inner zg-form-text-input", this.Ma = a.B("textarea", "zm-editable-editor-input")))), a.bz(this.Kb, this.hd), this.hl());
        this.Ma && this.Ma.tagName && "TEXTAREA" === this.Ma.tagName && !this.DE && new z.Sr(this.Ma);
        this.ep()
    };
    z.e.ready = function (a) {
        this.wE.done(a)
    };
    z.e.ep = function () {
        this.v().g(this.qc, "click", this.Qa);
        this.cv && Fv(this);
        Ev(this);
        this.wE.resolveWith(this)
    };
    z.e.hl = function () {
        this.qc = z.O("div", "zm-command", [this.or = z.O("a", {
            "class": "zm-command-cancel",
            name: "cancel",
            href: "javascript:;"
        }, "取消"), this.yn = z.O("a", {"class": "zg-r3px zg-btn-blue", name: "save", href: "javascript:;"}, "保存")]);
        this.Kb.appendChild(this.qc)
    };
    z.e.ve = function () {
        this.Er && z.W.remove(this.h, this.Er);
        "editing" === this.status ? (this.$b && z.Q(this.$b, !1), this.Kb && z.Q(this.Kb, !0), z.Q(this.hd, !1), this.Er = "zm-editable-status-editing") : (this.$b && (!this.TG || this.content || this.disabled ? z.Q(this.$b, !1) : z.Q(this.$b, !0)), this.Kb && z.Q(this.Kb, !1), this.content ? z.Q(this.hd, !0) : z.Q(this.hd, !1), this.Er = "zm-editable-status-normal");
        z.W.add(this.h, this.Er)
    };
    z.e.rg = function () {
        this.$r || (this.init(), this.ready(function () {
            this.status = "editing";
            this.ve();
            this.Mp()
        }))
    };
    z.e.Mp = function () {
        if (this.Fp) this.$r = !0, this.Ex(); else {
            var a = this.Ma, b;
            b = ro(this.content.replace(/<br \/>/g, "\n").replace(/<br>/g, "\n")).replace(/<a.*?href="(.*?)".*?<\/a>/g, "$1");
            a.value = b
        }
    };
    z.e.DF = function () {
        var a = [];
        this.disabled || a.push('\x3ca href\x3d"javascript:;" class\x3d"zu-edit-button" name\x3d"edit"\x3e\x3ci class\x3d"zu-edit-button-icon"\x3e\x3c/i\x3e修改\x3c/a\x3e');
        return a.join("")
    };
    z.e.Ex = function () {
        this.$r || (this.$r = !0, z.sp(this.XU + "?id\x3d" + this.Fp, (0, z.q)(function (a) {
            this.$r = !1;
            a = z.Rn(a.target);
            a.r ? z.X.message(a.msg) : this.Cu(a.msg)
        }, this), "GET"))
    };
    z.e.Cu = function (a) {
        this.Ma.value = a
    };
    z.x(z.Hv, z.Dv);
    z.e = z.Hv.prototype;
    z.e.Cu = function (a) {
        this.Hd ? z.Hv.o.Cu.call(this, a) : (a || (a = z.B ? "" : "\x3cdiv\x3e\x3c/div\x3e"), this.Ma.Pd(!1, a, !0))
    };
    z.e.Mp = function () {
        this.ready(function () {
            this.Fp ? this.Ex() : this.Hd ? z.Hv.o.Mp.call(this) : this.content ? this.Ma.Pd(!1, this.content, !1, !0) : this.Ma.Pd(!1, z.D ? "\x3cdiv\x3e\x3cbr\x3e\x3c/div\x3e" : "\x3cdiv\x3e\x3c/div\x3e", !1, !0)
        })
    };
    z.e.D = function () {
        z.Cc(this.Ma);
        z.P(this.Kb);
        this.Cq = this.FC = this.gg = this.ql = this.PB = this.pj = this.Kb = null;
        z.Hv.o.D.call(this)
    };
    z.e.$e = function () {
        if (this.Hd) z.Hv.o.$e.call(this); else {
            var a = this.K();
            this.Kb = a.B("div", "zm-editable-editor-wrap", this.pj = a.B("div", "zm-editable-editor-outer", [this.PB = a.B("div", "zm-editable-toolbar-container"), this.ql = a.B("div", "zm-editable-editor-field-wrap", this.gg = a.B("div", {
                id: this.mS,
                className: "zm-editable-editor-field-element"
            }))]));
            this.FC = (0, window.$)(this.PB);
            this.Cq = (0, window.$)(this.Kb);
            this.Cq.hide();
            a.bz(this.Kb, this.hd);
            this.Fp || (this.gg.innerHTML = this.content);
            a = {
                loremIpsum_: this.Dz,
                enableFullScreen: this.mx,
                content: this.content,
                useScraper_: this.RW,
                canUploadMedia_: this.ww,
                useRemoveFormat_: this.LK
            };
            this.hl();
            kv.ba().$e(this.Kb, a, (0, z.q)(this.ep, this));
            z.Uj || (this.tg = new iv(null, this.pj), this.tg.w(this.PB), z.dv(this.tg, !1), z.ev(this.tg), z.Ac(this, this.tg))
        }
    };
    z.e.ep = function (a, b) {
        if (this.Hd) z.Hv.o.ep.call(this); else {
            this.Ma = a;
            this.Cq.show();
            z.Hv.o.ep.call(this);
            Iv(this, a, b);
            var c = a.Rb.CodePlugin;
            c && (c.EV(b), c.Bg())
        }
    };
    z.e.rg = function () {
        z.Hv.o.rg.call(this);
        this.ready(function () {
            this.Hd || this.sO || (this.sO = !0, z.ld(this.Ma, "load", function () {
                var a = this.Ma, b = a.Rb.FullScreenPlugin;
                z.B && (a = a.Ha);
                z.F(a, ["focus", "blur"], function (a) {
                    b && z.W.has(window.document.body, b.J.Tn) || Jv(this, "focus" === a.type)
                }, !1, this)
            }, !1, this), this.Ma.Ke())
        })
    };
    z.e.Zf = function () {
        if (this.Hd) return z.Hv.o.Zf.call(this);
        var a = this.Ma;
        return Kr(a.m(), !0) ? "" : a.Al()
    };
    z.e.ve = function () {
        z.Hv.o.ve.call(this);
        this.tg && z.dv(this.tg, "editing" === this.status)
    };
    z.x(z.Lv, z.V);
    z.la(z.Lv);
    var bG = '\x3cdiv class\x3d"zh-add-question-form"\x3e\n  \x3cdiv class\x3d"js-add-question-splash add-question-splash-page" \x3e\n    \x3cp\x3e\n      知乎是一个真诚、友善、认真、互助的社区\x3cbr\x3e\n      我们希望每一个疑惑都有解答，好的问题更容易得到好答案 \x3ca href\x3d"//www.zhihu.com/question/19555761"\x3e如何提一个好问题？\x3c/a\x3e\n    \x3c/p\x3e\n    \x3cp\x3e\n      \x3cb\x3e提问应遵循真实、客观、简洁、明确、规范的原则\x3c/b\x3e\x3cbr\x3e\n      1、提问应尽可能简洁明了，避免「请问」「有谁知道」「谢谢！」等与问题本身无关的附加语。\x3cbr\x3e\n      2、应避免使用「为神马」「童鞋」「肿么办」等网络用语。\x3cbr\x3e\n      3、基于个人判断或传言的问题，在提问时应在补充说明里详细说明原由\x3cbr\x3e\n      4、避免太宽泛问题，如调查性的问题容易变成每个人都可以发表观点，但对其他人没有价值。\x3cbr\x3e\n    \x3c/p\x3e\n    \x3cp\x3e\n      \x3cb\x3e知乎禁止这些提问\x3c/b\x3e\x3cbr\x3e\n      1、和已有问题完全重复的问题，\x3cb\x3e为避免重复，提问前可以先进行搜索\x3c/b\x3e\x3cbr\x3e\n      2、招聘 / 求职、交易 / 合作、寻人 / 征友、召集 / 赠送、求码类内容\x3cbr\x3e\n      3、投票类问题。例如：你支持方舟子还是韩寒？\x3cbr\x3e\n      4、作业或其他希望代为完成个人任务类的内容，以及针对个人具体病情的求医问药类问题\x3cbr\x3e\n      完整的提问建议可查看 \x3ca href\x3d"//www.zhihu.com/question/19806261"\x3e知乎的提问规范有哪些？\x3c/a\x3e\x3cbr\x3e\n    \x3c/p\x3e\n    \x3cdiv class\x3d"before-ask-form"\x3e\n      \x3cb\x3e提问前请先搜索\x3c/b\x3e\n      \x3cdiv style\x3d"position:relative;margin-top:18px;"\x3e\n        \x3cinput type\x3d"text" class\x3d"zg-form-text-input" id\x3d"js-before-ask" placeholder\x3d"请输入你的问题"\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n  \x3c/div\x3e\n  \x3cform class\x3d"js-add-question-form"\x3e\n    \x3cdiv class\x3d"zg-section-big clearfix"\x3e\n      \x3cdiv id\x3d"zm-modal-dialog-info-wrapper"\x3e\x3c/div\x3e\n      \x3cdiv style\x3d"display: none;position: relative;" id\x3d"zm-modal-dialog-warnmsg-wrapper"\x3e\x3cdiv class\x3d"zm-modal-dialog-warnmsg zm-modal-dialog-guide-warn-message zg-r5px"\x3e\x3c/div\x3e\n        \x3ca name\x3d"close" title\x3d"关闭" href\x3d"javascript:;" class\x3d"zu-global-notify-close"  style\x3d"display:none"\x3ex\x3c/a\x3e\n        \x3cspan class\x3d"zm-modal-dialog-guide-title-msg"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv class\x3d"zg-form-text-input add-question-title-form" style\x3d"position: relative;"\x3e\n        \x3ctextarea rows\x3d"1" class\x3d"zg-editor-input" title\x3d"在这里输入问题" id\x3d"zh-question-suggest-title-content"\x3e\x3c/textarea\x3e\n      \x3c/div\x3e\n      \x3cspan id\x3d"js-title-length-err-msg" class\x3d"title-length-err-msg zg-right"\x3e\x3c/span\x3e\n      \x3cdiv id\x3d"zh-question-suggest-ac-wrap" class\x3d"question-suggest-ac-wrap"\x3e\x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"zg-section-big"\x3e\n      \x3cdiv style\x3d"display: none;position: relative;" class\x3d"zm-modal-dialog-warnmsg-wrapper"\x3e\n        \x3cdiv class\x3d"zm-modal-dialog-warnmsg zm-modal-dialog-guide-warn-message zg-r5px"\x3e\x3c/div\x3e\n        \x3ca name\x3d"close" title\x3d"关闭" href\x3d"javascript:;" class\x3d"zu-global-notify-close" style\x3d"display:none"\x3ex\x3c/a\x3e\n        \x3cspan class\x3d"zm-modal-dialog-guide-title-msg"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv class\x3d"add-question-section-title"\x3e\n        \x3cspan class\x3d"zg-right extra-editor-toolbar hidden-phone"\x3e\n          \x3cdiv class\x3d"js-toggle-editor-toolbar"\x3e\x3ci class\x3d"tr-inline-icon z-ico-textedit"\x3e\x3c/i\x3e\x3c/div\x3e\n          \x3cdiv class\x3d"js-editor-add-pic"\x3e\x3ci class\x3d"tr-inline-icon tr-image"\x3e\x3c/i\x3e\x3c/div\x3e\n          \x3cdiv class\x3d"js-editor-add-video"\x3e\x3ci class\x3d"tr-inline-icon tr-video"\x3e\x3c/i\x3e\x3c/div\x3e\n        \x3c/span\x3e\n        问题说明（可选）：\n        \x3cspan id\x3d"zh-question-form-detail-err"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv id\x3d"zh-question-suggest-detail-container"\x3e\n        \x3cdiv class\x3d"zm-editable-content" data-disabled\x3d"1"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"zm-add-question-form-topic-wrap"\x3e\n      \x3cdiv class\x3d"add-question-section-title"\x3e\n        \x3cspan class\x3d"zg-gray zg-right hidden-phone"\x3e话题越精准，越容易让相关领域专业人士看到你的问题\x3c/span\x3e\n        选择话题：\n        \x3cspan id\x3d"zh-question-form-tag-err"\x3e\x3c/span\x3e\n      \x3c/div\x3e\n      \x3cdiv id\x3d"zh-question-suggest-topic-container" class\x3d"zm-tag-editor zg-section"\x3e\n        \x3cdiv class\x3d"zm-tag-editor-labels"\x3e\x3c/div\x3e\n        \x3cdiv id\x3d"zh-question-suggest-autocomplete-container"\x3e\x3c/div\x3e\n      \x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"zm-command"\x3e\n      ' + (z.T.Jd ?
        "" : '\x3clabel class\x3d"zm-question-form-hide-in-about-question-el zg-left"\x3e\n        \x3cinput type\x3d"checkbox" value\x3d"1" class\x3d"zg-addq-isanon"\x3e匿名\n      \x3c/label\x3e') + '\n      \x3ca href\x3d"javascript:;" name\x3d"cancel" class\x3d"zm-command-cancel"\x3e取消\x3c/a\x3e\n      \x3ca href\x3d"javascript:;" name\x3d"addq" class\x3d"zg-r5px zu-question-form-add zg-btn-blue"\x3e发布\x3c/a\x3e\n      \x3ca name\x3d"jumpq" class\x3d"zg-r5px zg-btn-blue zu-question-form-jump" style\x3d"display:none;"\x3e查看问题\x3c/a\x3e\n    \x3c/div\x3e\n  \x3c/form\x3e\n\x3c/div\x3e',
        Ov = z.Dm.create("AddQuestionForm" + z.T.fg);
    z.e = z.Lv.prototype;
    z.e.C = function () {
        z.Lv.o.C.call(this);
        var a = z.We((0, z.ab)(bG));
        this.S().appendChild(a);
        this.Gc = z.Qo("zg-editor-input", this.h)[0];
        this.al = z.N("zu-question-form-add", this.h);
        this.mn = z.N("zu-question-form-jump", this.h);
        this.ek = z.L("zm-modal-dialog-warnmsg-wrapper");
        this.ht = z.L("js-title-length-err-msg");
        this.FA = z.N("zm-modal-dialog-warnmsg-wrapper", this.h);
        this.CE = z.L("zh-question-form-detail-err");
        this.EB = z.L("zh-question-form-tag-err");
        this.EN = z.N("zu-global-notify-close", this.ek);
        this.wW = z.N("zu-global-notify-close",
            this.FA);
        this.UQ = z.L("zm-modal-dialog-info-wrapper");
        this.Bt = z.N("zm-modal-dialog-warnmsg", this.ek);
        z.N("zm-modal-dialog-warnmsg", this.FA);
        this.KD = z.N("zg-addq-isanon", this.h);
        this.qW = z.N("js-toggle-editor-toolbar", this.h);
        this.qM = z.N("js-editor-add-pic", this.h);
        this.rM = z.N("js-editor-add-video", this.h);
        this.VV = z.N("js-add-question-splash", this.h);
        this.AH = z.N("js-add-question-form", this.h);
        this.wD = z.L("js-before-ask");
        this.fO = z.L("zh-question-suggest-detail-container");
        this.vW = z.L("zh-question-suggest-topic-container");
        this.Oy();
        this.Rz ? (Sv(this, !0), this.My()) : (this.to(), Sv(this, !1));
        z.T.Jd && fw(this)
    };
    z.e.show = z.Jq(function (a) {
        this.J = window.$.extend({Lm: null, hk: null}, a || {});
        this.G(!0)
    }, !0, "#ask");
    z.e.fm = function () {
        z.Lv.o.fm.call(this);
        this.J = {}
    };
    z.e.Oy = function () {
        this.Na("提问");
        z.Tj(this, 550);
        z.Lj(this, null);
        this.W = (0, window.$)(this.h);
        this.W.addClass("absolute-position");
        this.G(!0);
        this.ha()
    };
    z.e.to = z.Qj(function () {
        Uv(this);
        this.cc();
        Nv(this)
    });
    z.e.mq = {};
    z.e.mq.bJ = '\x3c% forEach(questions, function(q, i) { q \x3d q.data; %\x3e\x3cdiv class\x3d"ac-row" data-url_token\x3d"\x3c%\x3dq.url_token%\x3e" data-answer_count\x3d"\x3c%\x3dq.answer_count%\x3e"\x3e\x3c% if (q.is_star) { %\x3e\x3ca class\x3d"zg-star" data-tip\x3d"s$b$优质问答" href\x3d"/question/\x3c%\x3dq.url_token%\x3e"\x3e\x3c/a\x3e\x3c% } %\x3e\x3ca class\x3d"zippy-indicator"\x3e\x3ci\x3e\x3c/i\x3e\x3c/a\x3e\x3ca style\x3d"color:#222" href\x3d"/question/\x3c%\x3dq.url_token%\x3e?q\x3d\x3c%\x3d token %\x3e"\x3e\x3c%\x3dq.title%\x3e\x3c/a\x3e \x3cspan class\x3d"zm-ac-gray"\x3e\x3c%\x3d parseInt(q.answer_count) \x3e 0 ? q.answer_count + " 个回答" : "还没有回答" %\x3e \x3c/span\x3e\x3c/div\x3e\x3c% }) %\x3e';
    z.e.mq.QM = '\x3c% forEach(answers, function(a, i) { %\x3e\x3cdiv class\x3d"zippy-row"\x3e\x3cdiv class\x3d"summary-item"\x3e\x3ca class\x3d"inline-block zm-item-vote-count" href\x3d"/question/\x3c%\x3dquestion_url_token%\x3e/answer/\x3c%\x3da.url_token%\x3e"\x3e\x3c%\x3da.vote_count%\x3e\x3c/a\x3e\x3c% if (a.author.url_token) { %\x3e\x3ca class\x3d"inline-block" href\x3d"/people/\x3c%\x3da.author.url_token%\x3e"\x3e\x3cspan class\x3d"author"\x3e\x3c%-a.author.name%\x3e\x3c/span\x3e \x3c/a\x3e\x3c% } else { %\x3e\x3cspan class\x3d"inline-block anon-author"\x3e\x3c%-a.author.name%\x3e\x3c/span\x3e \x3c% } %\x3e\x3cspan class\x3d"inline-block summary ellipsis"\x3e\x3c%\x3da.summary_text%\x3e\x3c/span\x3e\x3ca class\x3d"inline-block" href\x3d"/question/\x3c%\x3dquestion_url_token%\x3e/answer/\x3c%\x3da.url_token%\x3e"\x3e阅读全部 »\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c% }) %\x3e';
    z.e.My = function () {
        function a() {
            Sv(b, !1);
            b.Gc.value = d.value
        }

        var b = this, c = (0, z.Rv)(this.mq.bJ), d = this.wD, f = new Ws;
        this.jM = new z.Vs(d, {
            source: "/question/autocomplete", vk: d.offsetParent, td: function () {
            }, render: function (b, f, k) {
                b = (0, window.$)(b.m());
                b.html(c({forEach: z.y, questions: k, token: (0, window.encodeURIComponent)(this.Wb)}));
                0 < k.length && b.prepend('\x3cdiv class\x3d"ac-row ac-first"\x3e\x3cb\x3e你想问的是不是：\x3c/b\x3e\x3c/div\x3e').append((0, window.$)('\x3cdiv class\x3d"ac-row ac-last iwanttoask"\x3e\x3ca href\x3d"#"\x3e不是，我要提一个新问题 »\x3c/a\x3e\x3c/div\x3e'));
                0 === k.length && d.value && (b.html('\x3cdiv class\x3d"ac-row ac-last iwanttoask"\x3e\x3ca href\x3d"#"\x3e没有找到相关问题，马上提问 »\x3c/a\x3e\x3c/div\x3e').show(), k.push("fake row"));
                b.off("click").on("click", ".iwanttoask", a)
            }, az: f
        });
        this.jM.dn = !1
    };
    z.e.resetForm = function () {
        this.Gc.value = "";
        this.Oa && this.Oa.bv();
        this.ek && z.Q(this.ek, !1);
        this.Oa.reset()
    };
    z.e.cc = function () {
        this.v().g(this.h, "click", this.nP);
        this.LR && this.LR.w(this.Gc);
        this.cJ = new z.Sr(this.Gc);
        this.v().g(this.cJ, "change", this.BI);
        this.v().g(this.EN, "click", function () {
            z.Q(this.ek, !1);
            z.Q(this.UQ, !0)
        });
        this.v().g(this.wW, "click", function () {
            z.Q(this.FA, !1)
        });
        this.v().g(this, "afterhide", function () {
            Yv(this)
        });
        Xv(this)
    };
    z.e.nP = function (a) {
        if (a = z.Er(this.h, a.target)) switch (a = a.name, a) {
            case "expand":
                z.W.add(this.h, "zg-qform-expanded");
                break;
            default:
                this.qs(a)
        }
    };
    z.e.hk = function () {
        var a = z.Rn(this.xhr);
        if (!a) return Wv(this, !1), z.X.message("网络异常");
        if (a.r) {
            if (281 === a.errcode) {
                var b = new bw;
                b.ye = a.msg;
                b.level = 3;
                Zv(this, b, !0)
            } else z.X.message(a.msg);
            Wv(this, !1)
        } else z.Qh.set("__Q_ISNEWLYCREATED__", "yep"), Ov.clear(), (0, window.$)(window).off("beforeunload.AddQuestionForm"), a = a.msg, b = a.match(/\/question\/(\d+)/)[1], this.J.hk ? this.J.hk({
            url: a,
            bb: b
        }) : window.location.href = a
    };
    z.e.qs = function (a) {
        if ("cancel" === a) this.G(!1); else if ("addq" === a) {
            a = cw(this);
            var b = $v(this);
            if (!(1 < b.level || 1 < a.level)) {
                var c = dw(this), d = new bw;
                3E3 < Gr(c) ? (d.level = 3, d.ye = "请控制在 3000 字以下") : d.level = 0;
                c = 1 < d.level;
                this.CE.innerHTML = d.ye;
                z.Q(this.CE, c);
                Vv(this, c, "detail");
                this.yI()
            }
            Vv(this, 1 < b.level || 1 < a.level, "title");
            this.GE ? Zv(this, 1 < a.level ? a : b, !0) : (0, window.$)(this.al).attr("disabled") || (Wv(this, !0), this.xhr = new z.Z(!0), this.v().ya(this.xhr, "success", this.hk), this.xhr.ajax("/question/add", ew(this).ze()),
                this.Oa.trackEvent())
        }
    };
    z.e.BI = function () {
        var a = cw(this), b = $v(this);
        "toolong" === a.name || "buffer" === a.name ? (this.ht.innerHTML = a.ye, z.Q(this.ht, !0)) : (this.ht.innerHTML = a.ye, z.Q(this.ht, !1));
        "multiquestionmark" === b.name || "duplicatedquestion" === b.name ? Zv(this, b, !0) : Zv(this, b, !1);
        Vv(this, 1 < b.level, "title")
    };
    z.e.yI = function () {
        var a = !1;
        1 > this.Oa.data.length ? (a = !0, this.EB.innerHTML = "至少添加一个话题") : 5 < this.Oa.data.length && (a = !0, this.EB.innerHTML = "最多添加五个话题");
        z.Q(this.EB, a);
        Vv(this, a, "topic")
    };
    z.e.QS = function () {
        this.Pb && Kv(this.Pb)
    };
    gw.prototype.init = function () {
        var a = (0, window.$)("#zh-question-related-questions");
        if (a.length) {
            var b = (0, window.$)("li", a), c = function (a, b, c) {
                var h = 1, k = Math.ceil(a.length / b);
                return {
                    next: function () {
                        1 !== k && (h = h === k ? 1 : h + 1, c(h))
                    }, VN: function () {
                        var c = (h - 1) * b;
                        return a.slice(c, c + b)
                    }
                }
            }(b, 5, function () {
                b.attr("hidden", "true");
                c.VN().removeAttr("hidden")
            });
            (0, window.$)(".next", a).click(function () {
                c.next();
                z.U("question_answer", "click_sidebarrelatedquestions_pager")
            });
            b.each(function (a, b) {
                z.xo(b, {module: "QuestionItem"},
                    function () {
                        return {
                            card: {
                                card_type: "Content",
                                content: {type: "Question", id: b.getAttribute("data-id")}
                            }
                        }
                    })
            })
        }
    };
    z.l(z.hw, z.Ck);
    z.hw.prototype.B = function () {
        z.Ck.prototype.B.call(this);
        this.ia((0, window.$)(".phone-verification-template").html())
    };
    z.hw.prototype.C = function () {
        z.Ck.prototype.C.call(this);
        var a = (0, window.$)(".view.verification", this.Oc), b = new z.Uk(this.Sn);
        this.L(b);
        b.bd(this.Hf);
        b.w(a[0])
    };
    z.l(iw, z.R);
    iw.prototype.C = function () {
        z.R.prototype.C.call(this);
        this.We()
    };
    iw.prototype.We = function () {
        var a = this, b = this.m();
        this.Sm = (0, window.$)(".SignFlow-panel", b);
        this.Sm.on("click", ".switch-to-login", function () {
            a.Sm.filter(":visible").attr("hidden", !0).siblings().removeAttr("hidden");
            a.na({category: "sign_in", action: "switch_to_sign_in_box_appear"})
        });
        var c = (0, window.$)(".LoginForm", b)[0], d = new z.Qk({Um: z.Rk});
        d.bd(this.Hf);
        d.w(c);
        b = (0, window.$)(".SignupForm", b)[0];
        c = new z.Tk;
        c.bd(this.Hf);
        c.w(b);
        c.g("success", function (b) {
            b = new z.hw(b.data);
            b.Db(a);
            b.G(!0)
        })
    };
    z.Ca(iw.prototype, z.Ym);
    jw.prototype.init = function () {
        this.Vy();
        kw();
        lw()
    };
    jw.prototype.Vy = function () {
        var a = (0, window.$)("#SidebarSignFlow")[0];
        if (a) {
            var b = function (b) {
                var d = (0, window.$)(".account", a);
                b || d.attr("name", "account").attr("aria-label", "手机号或邮箱").attr("data-placeholder", "手机号或邮箱");
                (0, window.$)("[data-placeholder]", a).attr("placeholder", function () {
                    return (0, window.$)(this).attr("data-placeholder")
                })
            };
            window.$.get("/register/is_domestic").then(function (c) {
                b(c.value);
                c = new iw;
                c.bd("sidebar_signflow");
                c.w(a)
            })
        }
    };
    z.l(mw, z.R);
    mw.prototype.C = function () {
        var a = this;
        z.R.prototype.C.call(this);
        var b = this.m(), c = (0, window.$)(b), d = c.find(".shameimaru-link"), f = c.find(".shameimaru-close"),
            g = c.data("track"), h = z.So(g, "at", "view"), k = z.So(g, "at", "close");
        z.Gn(b, function () {
            z.nw(h)
        });
        d.one("click", function () {
            var a = d.attr("href");
            d.attr("href", z.So(a, "click", 1))
        });
        f.one("click", function (b) {
            b.preventDefault();
            z.nw(k);
            c.fadeOut(500, function () {
                return c.remove()
            });
            a.H()
        })
    };
    z.l(pw, z.R);
    pw.prototype.init = function () {
        var a = (0, window.$)(".AppPromotionBar");
        this.Jf = a;
        var b = this;
        if (a.length && (0, window.$)("html").hasClass("is-AppPromotionBarVisible")) a.on("click", ".AppPromotionBar-closeButton, .AppPromotionBar-downloadButton", function () {
            (0, window.$)(this).hasClass("AppPromotionBar-downloadButton") ? z.U("app-promotion", "click_mobileweb_app_dl_bar_download_btn") : z.U("app-promotion", "click_mobileweb_app_dl_bar_close_btn");
            z.Qh.set("hideAppPromotionBar", "true");
            qw(b)
        })
    };
    var uw;
    z.l(yw, z.R);
    z.e = yw.prototype;
    z.e.init = function () {
        var a = window.document.querySelector(".js-WechatLoginIntro");
        a && this.w(a)
    };
    z.e.C = function () {
        z.R.prototype.C.call(this);
        this.h.querySelector(".js-login").addEventListener("click", this.yQ.bind(this));
        this.h.querySelector(".js-other").addEventListener("click", this.gQ.bind(this));
        this.h.querySelector(".js-close").addEventListener("click", this.close.bind(this));
        z.xi({action: "show", category: "wechat-login-intro"})
    };
    z.e.yQ = function () {
        z.xi({category: "wechat_login_intro", action: "click_main"})
    };
    z.e.gQ = function () {
        (new z.Rk).show();
        z.xi({category: "wechat_login_intro", action: "click_other"})
    };
    z.e.close = function () {
        this.h.parentNode.removeChild(this.h);
        window.$.post("/intro/wechat/uninterest");
        z.xi({category: "wechat_login_intro", action: "close"})
    };
    z.la(zw);
    var Bw = z.Dm.create("Report" + z.T.fg);
    zw.prototype.cM = '\x3cdiv id\x3d"zh-feedback-form"\x3e\x3cselect name\x3d"type" class\x3d"zg-editor-type zg-right"\x3e\x3coption value\x3d"help"\x3e使用帮助 \x3c/option\x3e\x3coption value\x3d"bug"\x3e问题反馈\x3c/option\x3e\x3coption value\x3d"search_suggest"\x3e搜索反馈\x3c/option\x3e\x3coption value\x3d"suggest"\x3e功能建议\x3c/option\x3e\x3c/select\x3e\x3cdiv class\x3d"zg-report-title"\x3e\x3cspan class\x3d"zg-gray-darker"\x3e请填写你的反馈内容\x3c/span\x3e\x3cspan class\x3d"zg-report-msg" style\x3d"display:none;"\x3e请选择反馈种类：\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"zg-editor-simple-wrap zg-form-text-input zg-report-content"\x3e\x3ctextarea class\x3d"zg-editor-input" name\x3d"content"\x3e\x3c/textarea\x3e\x3c/div\x3e\x3c/div\x3e';
    zw.prototype.defaults = {title: "建议和反馈"};
    zw.prototype.We = function (a) {
        var b = (0, window.$)("#zh-feedback-form"), c = (0, window.$)("select", b), b = (0, window.$)("textarea", b);
        new z.Sr(b[0]);
        c.toggle(!a.type);
        b.html(Bw.get("content") || "");
        b.on("input change", function () {
            Bw.set("content", this.value)
        })
    };
    zw.prototype.create = function (a) {
        var b = window.$.extend(this.defaults, a || {});
        z.X.confirm(b.title, this.cM, function (a) {
            if (a) return Aw(b)
        }, this);
        this.We(b)
    };
    var cG, eG;
    eG = {
        "rt:button": function () {
            (0, z.dG)(this, "roundtable", null, ["zg-btn-follow", "zg-btn-unfollow"])
        }, "rt:link": function () {
            (0, z.dG)(this, "roundtable", null, null, {follow_text: "关注圆桌"})
        }, "c:link": function () {
            (0, z.dG)(this, "column", null, null, {follow_text: "关注专栏"})
        }, "c:button": function () {
            (0, z.dG)(this, "column", null, ["zg-btn-follow", "zg-btn-unfollow"])
        }, "q:link": function () {
            (0, z.dG)(this, "question", null, null, {follow_text: "关注问题"})
        }, "m:link": function () {
            var a = this.getAttribute("data-follow_text");
            (0, z.dG)(this, "people",
                null, null, a ? {follow_text: a} : {})
        }, "t:link": function () {
            (0, z.dG)(this, "topic", null, null, {follow_text: "关注话题"})
        }, "t:link:simple": function () {
            (0, z.dG)(this, "topic")
        }, "m:button": function () {
            var a = this;
            (0, z.dG)(a, "people", function () {
                a.getAttribute("data-followme") && (z.W.has(a, "zg-btn-follow") ? a.setAttribute("data-tip", "s$b$对方已关注你") : a.setAttribute("data-tip", "s$b$已互相关注"))
            }, ["zg-btn-follow", "zg-btn-unfollow"])
        }, "q:fi:button": function () {
            var a = this;
            (0, z.dG)(a, "question", function (b) {
                (0, window.$)(".label", a).text(b ?
                    "取消关注" : "关注");
                var c = (0, window.$)(".count", a);
                b = Number(c.data("count")) + (b ? 1 : -1);
                c.length && (b = Math.max(b, 0), c.text("（" + b + "）").data("count", b))
            }, ["unfollowing", "following"])
        }, "q:m:button": function () {
            (0, z.dG)(this, "question", null, ["zg-btn-green", "zg-btn-white"], {follow_text: "关注问题"})
        }, "f:button": function () {
            (0, z.dG)(this, "favlist", null, ["zg-btn-follow", "zg-btn-unfollow"])
        }, "t:button": function () {
            (0, z.dG)(this, "topic", null, ["zg-btn-follow", "zg-btn-unfollow"])
        }
    };
    z.dG = z.Jq(function (a, b, c, d, f) {
        function g(a) {
            a.r ? z.X.message(a.msg) : h(n)
        }

        function h(b) {
            b ? (z.W.Rv(a, k, m), pr(a, f.unfollow_text || "取消关注")) : (z.W.Rv(a, m, k), pr(a, f.follow_text || "关注"));
            z.sa(c) && c(b)
        }

        cG && "pending" === cG.state() && cG.abort();
        f = f || {};
        b = b || a.getAttribute("data-focustype");
        d = d || ["zg-follow", "zg-unfollow"];
        var k = d[0], m = d[1], n = z.W.has(a, k);
        z.Y.tb({type: "ga_click_follow", target: a, data: {type: b, Wj: n}});
        d = {roundtable: Dw, column: Cw, people: bt, question: ct, topic: et, favlist: dt}[b];
        var r = a.getAttribute("data-id") ||
            a.id.match(/-(.*)/)[1];
        d && (d = d(r, n), "people" === b && n ? d.done(g) : h(n), cG = d, (0, z.Gi)(a, {
            action: n ? "Follow" : "UnFollow",
            element: "Button"
        }))
    });
    z.x(Ew, z.G);
    var Iw = ["group", "key", "name"];
    Gw.prototype.defaults = {gO: "帮助信息", dx: "shortcut-tips-dialog"};
    Gw.prototype.hc = function () {
        z.wl(z.bn.register("shift+/", this.show, this), {group: "导航", name: "帮助", key: "?"})
    };
    Gw.prototype.show = function () {
        var a = this.J;
        z.X.alert({title: a.gO, content: Nw(), className: a.dx})
    };
    var Pw = z.ik(function (a) {
        var b = z.sm["ra-urls"], c = b && b[a];
        return c ? new window.Promise(function (b) {
            window.$.ajax({url: c, dataType: "script", cache: !0}).then(function () {
                b(window.ra[a])
            })
        }) : window.Promise.reject("Missing app name: ", a)
    });
    var Sw = [];
    z.Cp.on("init", function () {
        function a() {
            var b = Sw.shift();
            b && (b = b[0], b.length ? b(a) : (b(), a()))
        }

        a()
    });
    z.Cp.on("init", function () {
        (0, window.$)("img.lazy").attr("data-lazyloaded", "").lazyload({
            load: function () {
                (0, window.$)(this).trigger("contentchange")
            }, data_attribute: "actualsrc", event: "scroll updatelazy", threshold: 400
        })
    });
    z.Cp.on("init", function () {
        z.T.Ln && z.Qh.set("lastuser:email", z.T.Ln)
    });
    Rw(function (a) {
        z.T.Jd || new Dp({hk: a})
    }, 0);
    Rw(function () {
        "#ask" === window.location.hash && (z.Lv.ba().show(), window.history.replaceState ? window.history.replaceState(null, window.document.title, window.location.pathname + window.location.search) : window.location.hash = "")
    }, window.Infinity);
    z.Cp.on("init", function () {
        (new gw).init()
    });
    z.Cp.on("init", function () {
        (new jw).init()
    });
    z.Cp.on("init", function () {
        ow()
    });
    z.Cp.on("init", function () {
        (new pw).init()
    });
    z.Cp.on("init", function () {
        tw()
    });
    z.Cp.on("init", function () {
        z.dh()
    });
    z.Cp.on("init", function () {
        return (new yw).init()
    });
    z.Cp.on("init", function () {
        z.Ni()
    });
    z.Cp.on("postinit", function () {
        (0, window.$)("#js-feedback-button").click(function () {
            zw.ba().create()
        })
    });
    z.Cp.on("init", function () {
        (0, window.$)(window.document.body).on("click.follow", "[data-follow]", function () {
            if (this.name) return Ir("未清除的 name 属性:", this);
            var a = this.getAttribute("data-follow");
            (a = a && eG[a]) && a.call(this)
        })
    });
    z.Cp.on("postinit", function () {
        window.FastClick && !z.xm && window.FastClick.attach(window.document.body)
    });
    z.Cp.on("postinit", function () {
        if (z.T.Fb()) if (window.WebSocket) {
            var a;
            a = -1 !== z.rm.vn.indexOf("https") ? z.rm.vn.replace("https", "wss") : z.rm.vn.replace("http", "ws");
            (new Ew(a)).addEventListener("message", function (a) {
                Kn(z.Y, JSON.parse(a.data.replace(/^\+;/, "")))
            })
        } else a = new xq({
            url: z.fm,
            data: {loc: window.location.href, channel: (0, z.I)() + Un()},
            dataType: "polling",
            converters: {
                "text polling": function (a) {
                    return JSON.parse(a.replace(/^\+;/, ""))
                }
            }
        }), a.addEventListener("message", function (a) {
            Kn(z.Y, a.data)
        }), a.Yt()
    });
    z.Cp.on("init", function () {
        new Gw;
        z.Al.prototype.defaults.offsetTop = -60;
        var a = (0, window.$)('div[data-widget\x3d"navigable"], ul[data-widget\x3d"navigable"]');
        if (1 === a.length) {
            var b = a.data("navigable-options"), b = new z.Al(b);
            b.w(a.get(0));
            var c = (0, window.$)("#zh-load-more");
            b.on("action", function (a) {
                a.data.index >= a.data.size && c.is(":visible") && c[0].click()
            })
        }
    });
    z.Cp.on("init", function () {
        (0, window.$)(window.document).on("click", 'a[href\x3d"#"]', function (a) {
            a.preventDefault()
        })
    });
    z.Cp.on("postinit", function () {
        var a = window.location.pathname;
        (z.T.Fb() && "/" === a || /^\/(question|explore|collection|topic|people|search|roundtable\/)/.test(a)) && z.Ow("CommentApp")
    });
    z.Cp.on("postinit", function () {
        (0, window.$)(".js-openProfilePage").on("click", function () {
            var a = (0, window.$)(this).attr("data-url"),
                a = (0, window.$)("\x3cform target\x3d'_blank' method\x3d'POST' style\x3d'display:none;'\x3e\x3c/form\x3e").attr({action: a}).appendTo(window.document.body);
            (0, window.$)('\x3cinput type\x3d"hidden" /\x3e').attr({
                name: "content",
                value: (0, window.$)("#performance-profile-data").text()
            }).appendTo(a);
            a.submit();
            a.remove()
        })
    });
    z.Cp.on("init", function () {
        var a = z.aj.get("d_c0", ""), b = new z.Z(!0);
        "" === a && b.ajax("/udid", "", "POST")
    });
    z.x(Tw, Kq);
    Tw.prototype.add = function (a) {
        z.A(this.queue, a) || (this.queue.push(a), z.F(a, "finish", this.eI, !1, this))
    };
    Tw.prototype.remove = function (a) {
        z.tb(this.queue, a) && z.md(a, "finish", this.eI, !1, this)
    };
    Tw.prototype.D = function () {
        z.y(this.queue, function (a) {
            a.H()
        });
        this.queue.length = 0;
        Tw.o.D.call(this)
    };
    z.x(Uw, Tw);
    Uw.prototype.play = function (a) {
        if (0 == this.queue.length) return !1;
        if (a || this.N == Lq) this.Fx = 0, this.hg(); else if (1 == this.N) return !1;
        this.jd("play");
        -1 == this.N && this.jd("resume");
        var b = -1 == this.N && !a;
        this.startTime = (0, z.I)();
        this.endTime = null;
        this.N = 1;
        z.y(this.queue, function (c) {
            b && -1 != c.N || c.play(a)
        });
        return !0
    };
    Uw.prototype.pause = function () {
        1 == this.N && (z.y(this.queue, function (a) {
            1 == a.N && a.pause()
        }), this.N = -1, this.jd("pause"))
    };
    Uw.prototype.stop = function (a) {
        z.y(this.queue, function (b) {
            b.N == Lq || b.stop(a)
        });
        this.N = Lq;
        this.endTime = (0, z.I)();
        this.jd("stop");
        this.ig()
    };
    Uw.prototype.eI = function () {
        this.Fx++;
        this.Fx == this.queue.length && (this.endTime = (0, z.I)(), this.N = Lq, this.jd("finish"), this.ig())
    };
    z.x(Yw, z.Xj);
    z.e = Yw.prototype;
    z.e.init = function () {
        if (!z.qm("back_to_top")) {
            this.h = z.We(this.gW);
            window.document.body.appendChild(this.h);
            var a = new z.fl(this.Mt, this.jW, this);
            this.lK = (0, z.q)(a.fire, a);
            this.v().g(window, "resize", this.CI);
            this.CI()
        }
    };
    z.e.start = function () {
        this.xk || (this.xk = !0, this.v().g(window, "scroll", this.lK).g(this.h, "click", this.tD), this.Mt())
    };
    z.e.stop = function () {
        this.xk && (this.xk = !1, this.v().qa(window, "scroll", this.lK).qa(this.h, "click", this.tD), this.hide())
    };
    z.e.CI = function () {
        z.Oe().width >= this.lS ? this.start() : this.stop()
    };
    z.e.gW = '\x3cdiv class\x3d"zh-backtotop" style\x3d"display:none"\x3e\x3ca data-action\x3d"backtotop" data-tip\x3d"s$r$回到顶部" href\x3d"javascript:;" class\x3d"btn-backtotop btn-action"\x3e\x3cdiv class\x3d"arrow"\x3e\x3c/div\x3e\x3cdiv class\x3d"stick"\x3e\x3c/div\x3e\x3c/a\x3e\x3c/div\x3e';
    z.e.tD = function () {
        var a = z.Qe(window.document), b = z.Pe(window.document), c = b.x, b = b.y, d = new Uw, f = this.v();
        d.add(new gr(a, [c, b], [0, 0], this.lV, Xw));
        d.add(new lr(this.h, this.Cx, Ww));
        f.g(d, "finish", this.RS);
        f.g(d, "begin", this.DS);
        d.play();
        z.Y.tb("ga_click_back_to_top");
        (0, z.Gi)(this, {action: "BackToTop", element: "Button"})
    };
    z.e.DS = function () {
        this.bw = this.mo = !0
    };
    z.e.RS = function () {
        this.bw = !1
    };
    z.e.show = function () {
        (new mr(this.h, this.Cx, Vw)).play();
        this.mo = !1
    };
    z.e.hide = function () {
        (new lr(this.h, this.Cx, Ww)).play();
        this.mo = !0
    };
    z.e.Mt = function () {
        this.bw || (1200 <= z.Pe(window.document).y ? this.mo && this.show() : this.mo || this.hide())
    };
    Zw.prototype.link = "想来知乎工作？请发送邮件到 jobs@zhihu.com";
    Zw.prototype.TM = "          _____                    _____                    _____                    _____          \n         /\\    \\                  /\\    \\                  /\\    \\                  /\\    \\         \n        /::\\____\\                /::\\    \\                /::\\    \\                /::\\    \\        \n       /:::/    /                \\:::\\    \\              /::::\\    \\              /::::\\    \\       \n      /:::/    /                  \\:::\\    \\            /::::::\\    \\            /::::::\\    \\      \n     /:::/    /                    \\:::\\    \\          /:::/\\:::\\    \\          /:::/\\:::\\    \\     \n    /:::/____/                      \\:::\\    \\        /:::/__\\:::\\    \\        /:::/__\\:::\\    \\    \n   /::::\\    \\                      /::::\\    \\      /::::\\   \\:::\\    \\      /::::\\   \\:::\\    \\   \n  /::::::\\    \\   _____    ____    /::::::\\    \\    /::::::\\   \\:::\\    \\    /::::::\\   \\:::\\    \\  \n /:::/\\:::\\    \\ /\\    \\  /\\   \\  /:::/\\:::\\    \\  /:::/\\:::\\   \\:::\\____\\  /:::/\\:::\\   \\:::\\    \\ \n/:::/  \\:::\\    /::\\____\\/::\\   \\/:::/  \\:::\\____\\/:::/  \\:::\\   \\:::|    |/:::/__\\:::\\   \\:::\\____\\\n\\::/    \\:::\\  /:::/    /\\:::\\  /:::/    \\::/    /\\::/   |::::\\  /:::|____|\\:::\\   \\:::\\   \\::/    /\n \\/____/ \\:::\\/:::/    /  \\:::\\/:::/    / \\/____/  \\/____|:::::\\/:::/    /  \\:::\\   \\:::\\   \\/____/ \n          \\::::::/    /    \\::::::/    /                 |:::::::::/    /    \\:::\\   \\:::\\    \\     \n           \\::::/    /      \\::::/____/                  |::|\\::::/    /      \\:::\\   \\:::\\____\\    \n           /:::/    /        \\:::\\    \\                  |::| \\::/____/        \\:::\\   \\::/    /    \n          /:::/    /          \\:::\\    \\                 |::|  ~|               \\:::\\   \\/____/     \n         /:::/    /            \\:::\\    \\                |::|   |                \\:::\\    \\         \n        /:::/    /              \\:::\\____\\               \\::|   |                 \\:::\\____\\        \n        \\::/    /                \\::/    /                \\:|   |                  \\::/    /        \n         \\/____/                  \\/____/                  \\|___|                   \\/____/         \n";
    z.x($w, z.Xj);
    z.fG = null;
    $w.prototype.init = function () {
        z.fG = this;
        z.ax(this)
    };
    $w.prototype.gT = function () {
        var a = z.Rn(this.gk);
        a && !a.r && Kn(z.Y, [a])
    };
    var cx = window.localStorage && !z.Qh.Wl() || z.tm && (!z.xm || z.wm);
    dx.prototype.ha = function () {
    };
    z.x(z.ex, dx);
    z.ex.prototype.ha = function (a, b, c) {
        z.Hs(this.element, this.Ze, a, b, void 0, c, this.ZT)
    };
    z.x(fx, dx);
    fx.prototype.ha = function (a, b, c, d) {
        z.Hs(Vn(a), 0, a, b, this.Yh, c, null, d)
    };
    z.x(gx, z.Ln);
    gx.prototype.setPosition = function (a) {
        this.au = a || void 0;
        this.V() && this.ha()
    };
    gx.prototype.ha = function () {
        if (this.au) {
            var a = !this.V() && "move_offscreen" != this.li(), b = this.m();
            a && (b.style.visibility = "hidden", z.Q(b, !0));
            this.au.ha(b, this.zA, this.Gz);
            a && z.Q(b, !1)
        }
    };
    z.x(z.ix, gx);
    var qx = [];
    z.e = z.ix.prototype;
    z.e.bc = null;
    z.e.className = "goog-tooltip";
    z.e.Sp = 500;
    z.e.no = 0;
    z.e.K = function () {
        return this.da
    };
    z.e.attach = function (a) {
        a = z.L(a);
        this.fb.add(a);
        z.F(a, "mouseover", this.nd, !1, this);
        z.F(a, "mouseout", this.Ll, !1, this);
        z.F(a, "mousemove", this.Jl, !1, this);
        z.F(a, "focus", this.ee, !1, this);
        z.F(a, "blur", this.Ll, !1, this)
    };
    z.e.detach = function (a) {
        if (a) a = z.L(a), jx(this, a), this.fb.remove(a); else {
            for (var b = this.fb.Wc(), c = 0; a = b[c]; c++) jx(this, a);
            this.fb.clear()
        }
    };
    z.e.Wx = function () {
        return this.no
    };
    z.e.Pd = function (a) {
        a = z.Hd(a, null);
        var b = this.m();
        b && z.Fe(b, a)
    };
    z.e.sh = function (a) {
        var b = this.m();
        b && z.P(b);
        z.ix.o.sh.call(this, a);
        a ? (b = this.da.ua().body, b.insertBefore(a, b.lastChild), z.Cc(this.Dk), this.Dk = new z.vj(this.m()), z.Ac(this, this.Dk), z.F(this.Dk, "focusin", this.gj, void 0, this), z.F(this.Dk, "focusout", this.Xp, void 0, this)) : (z.Cc(this.Dk), this.Dk = null)
    };
    z.e.Id = function () {
        return z.of(this.m())
    };
    z.e.Yx = z.aa(37);
    z.e.getState = function () {
        return this.Dm ? this.V() ? 4 : 1 : this.Pl ? 3 : this.V() ? 2 : 0
    };
    z.e.Vs = function (a) {
        if (!this.V()) return !1;
        var b = z.Wn(this.m()), c = z.Hg(this.m());
        return b.x <= a.x && a.x <= b.x + c.width && b.y <= a.y && a.y <= b.y + c.height
    };
    z.e.bp = function () {
        if (!z.Ln.prototype.bp.call(this)) return !1;
        if (this.anchor) for (var a, b = 0; a = qx[b]; b++) z.lf(a.m(), this.anchor) || a.G(!1);
        z.sb(qx, this);
        a = this.m();
        a.className = this.className;
        this.gj();
        z.F(a, "mouseover", this.vy, !1, this);
        z.F(a, "mouseout", this.gG, !1, this);
        sx(this);
        return !0
    };
    z.e.kk = function () {
        z.tb(qx, this);
        for (var a = this.m(), b, c = 0; b = qx[c]; c++) b.anchor && z.lf(a, b.anchor) && b.G(!1);
        this.OI && this.OI.Xp();
        z.md(a, "mouseover", this.vy, !1, this);
        z.md(a, "mouseout", this.gG, !1, this);
        this.anchor = void 0;
        0 == this.getState() && (this.xu = !1);
        z.Ln.prototype.kk.call(this)
    };
    z.e.Iz = function (a, b) {
        this.anchor == a && this.fb.contains(this.anchor) && (this.xu || !this.SY ? (this.G(!1), this.V() || (this.anchor = a, this.setPosition(b || mx(this, 0)), this.G(!0))) : this.anchor = void 0);
        this.Dm = void 0
    };
    z.e.gi = function () {
        return this.fb
    };
    z.e.zl = function () {
        return this.bc
    };
    z.e.HH = function (a) {
        this.Pl = void 0;
        if (a == this.anchor) {
            a = this.K();
            var b = a.zl();
            a = b && this.m() && a.contains(this.m(), b);
            null != this.bc && (this.bc == this.m() || this.fb.contains(this.bc)) || a || this.fl && this.fl.bc || this.G(!1)
        }
    };
    z.e.nd = function (a) {
        var b = lx(this, a.target);
        this.bc = b;
        this.gj();
        b != this.anchor && (this.anchor = b, rx(this, b), px(this), kx(this, a))
    };
    z.e.Jl = function (a) {
        kx(this, a);
        this.xu = !0
    };
    z.e.ee = function (a) {
        this.bc = a = lx(this, a.target);
        this.xu = !0;
        if (this.anchor != a) {
            this.anchor = a;
            var b = mx(this, 1);
            this.gj();
            rx(this, a, b);
            px(this)
        }
    };
    z.e.Ll = function (a) {
        var b = lx(this, a.target), c = lx(this, a.relatedTarget);
        b != c && (b == this.bc && (this.bc = null), sx(this), this.xu = !1, !this.V() || a.relatedTarget && z.lf(this.m(), a.relatedTarget) ? this.anchor = void 0 : this.Xp())
    };
    z.e.vy = function () {
        var a = this.m();
        this.bc != a && (this.gj(), this.bc = a)
    };
    z.e.gG = function (a) {
        var b = this.m();
        this.bc != b || a.relatedTarget && z.lf(b, a.relatedTarget) || (this.bc = null, this.Xp())
    };
    z.e.Xp = function () {
        2 == this.getState() && (this.Pl = z.vd((0, z.q)(this.HH, this, this.anchor), this.Wx()))
    };
    z.e.gj = function () {
        this.Pl && (z.wd(this.Pl), this.Pl = void 0)
    };
    z.e.D = function () {
        this.G(!1);
        sx(this);
        this.detach();
        this.m() && z.P(this.m());
        this.bc = null;
        delete this.da;
        z.ix.o.D.call(this)
    };
    z.x(nx, fx);
    nx.prototype.ha = function (a, b, c) {
        b = Vn(a);
        b = Do(b);
        c = c ? new z.pg(c.top + 10, c.right, c.bottom, c.left + 10) : new z.pg(10, 0, 0, 10);
        Ks(this.Yh, a, 4, c, b, 9) & 496 && Ks(this.Yh, a, 4, c, b, 5)
    };
    z.x(ox, z.ex);
    ox.prototype.ha = function (a, b, c) {
        var d = new z.Ge(10, 0);
        z.Hs(this.element, this.Ze, a, b, d, c, 9) & 496 && z.Hs(this.element, 2, a, 1, d, c, 5)
    };
    z.x(tx, z.ix);
    z.e = tx.prototype;
    z.e.XN = !1;
    z.e.WN = 100;
    z.e.nq = !1;
    z.e.lk = function () {
        tx.o.lk.call(this);
        this.lr = Pn(z.Ao(this.m()));
        this.anchor && (this.$v = Pn(z.Ao(this.anchor)));
        this.nq = this.XN;
        z.F(this.K().ua(), "mousemove", this.Jl, !1, this)
    };
    z.e.kk = function () {
        z.md(this.K().ua(), "mousemove", this.Jl, !1, this);
        this.$v = this.lr = null;
        this.nq = !1;
        tx.o.kk.call(this)
    };
    z.e.Vs = function (a) {
        if (this.po) {
            var b = z.Wn(this.m()), c = z.Hg(this.m());
            return b.x - this.po.left <= a.x && a.x <= b.x + c.width + this.po.right && b.y - this.po.top <= a.y && a.y <= b.y + c.height + this.po.bottom
        }
        return tx.o.Vs.call(this, a)
    };
    z.e.HH = function (a) {
        this.Pl = void 0;
        a != this.anchor || vx(this, this.ij) || this.zl() || this.fl && this.fl.bc || z.B && 0 == this.ij.x && 0 == this.ij.y || this.G(!1)
    };
    z.e.Jl = function (a) {
        var b = this.V();
        if (this.lr) {
            var c = z.vf(this.K()), c = new z.Ge(a.clientX + c.x, a.clientY + c.y);
            vx(this, c) ? b = !1 : this.nq && (b = Go(this.lr, c) >= Go(this.lr, this.ij))
        }
        if (b) {
            if (this.Xp(), this.bc = null, b = this.fl) b.bc = null
        } else 3 == this.getState() && this.gj();
        tx.o.Jl.call(this, a)
    };
    z.e.vy = function () {
        this.zl() != this.m() && (this.nq = !1, this.bc = this.m())
    };
    z.e.Wx = function () {
        return this.nq ? this.WN : tx.o.Wx.call(this)
    };
    z.x(z.xx, tx);
    z.e = z.xx.prototype;
    z.e.D = function () {
        z.xx.o.D.call(this);
        z.md(this.Ka, "mouseover", this.iG, !1, this)
    };
    z.e.ez = function (a) {
        return a.tagName in this.eD && !!a.getAttribute(this.eD[a.tagName])
    };
    z.e.iG = function (a) {
        if (a = a.target) this.ez(a) ? (this.setPosition(null), yx(this, a)) : this.rN && (a = z.uf(a, (0, z.q)(this.ez, this), !1, this.HY)) && (this.setPosition(null), yx(this, a))
    };
    z.e.fA = function (a) {
        return this.dispatchEvent(a)
    };
    z.e.Un = function () {
        return this.Qf || this.anchor
    };
    z.e.kk = function () {
        z.xx.o.kk.call(this);
        null != this.Qf && Bx(this, this.Qf);
        this.Qf = null
    };
    z.e.nd = function (a) {
        var b = lx(this, a.target);
        b && b != this.anchor ? yx(this, b) : z.xx.o.nd.call(this, a)
    };
    z.e.Ll = function (a) {
        var b = this.anchor, c = this.getState();
        z.xx.o.Ll.call(this, a);
        c == this.getState() || 1 != c && 4 != c || (this.anchor = b, zx(this))
    };
    z.e.Iz = function (a, b) {
        z.xx.o.Iz.call(this, a, b);
        this.V() ? (a != this.Qf && Bx(this, this.Qf), this.Qf = a) : (sx(this), zx(this))
    };
    z.x(Ax, z.Lc);
    z.x(Cx, z.ex);
    Cx.prototype.Yn = function () {
        return 5
    };
    Cx.prototype.ha = function (a, b, c, d) {
        var f = {
            "1-4": "bottom",
            "0-4": "top",
            "0-5": "top",
            "1-5": "bottom",
            "2-5": "top",
            "3-5": "bottom",
            "3-4": "bottom",
            "2-6": "left",
            "2-4": "right"
        }, g;
        if (this.XC) {
            g = z.Hs(this.element, this.Ze, a, b, null, c, 10, d);
            var h = Dx(g, this.Ze), k = Dx(g, b);
            g & 496 && (g = z.Hs(this.element, h, a, k, null, c, 10, d), g & 496 && (h = Dx(g, h), k = Dx(g, k), this.XC ? z.Hs(this.element, h, a, k, null, c, this.Yn(), d) : z.Hs(this.element, h, a, k, null, c, 0, d)));
            this.$t && (a = (z.ka(h) ? h : this.Ze) + "-" + (z.ka(b) ? b : k), this.$t(f[a], a))
        } else z.Hs(this.element,
            this.Ze, a, b, void 0, c), this.$t && (a = this.Ze + "-" + b, this.$t(f[a], a))
    };
    z.x(z.Ex, z.Xj);
    z.e = z.Ex.prototype;
    z.e.defaults = {fU: "pm", lu: !1, Vk: !0};
    z.e.sh = function (a) {
        this.h = a
    };
    z.e.m = function () {
        return this.h
    };
    z.e.Oy = function () {
        this.Ia = new z.V(null);
        this.Ia.Na("发送私信");
        z.Lj(this.Ia, null);
        this.Ia.Bf(!0);
        this.Ia.G(!0);
        this.h = this.Ia.S()
    };
    z.e.focus = function () {
        this.init();
        this.pd.focus()
    };
    z.e.init = function () {
        this.CQ || (this.CQ = !0, this.vq && (this.Ia || this.Oy(), this.h.innerHTML = '\x3cdiv class\x3d"zm-pm-wrap"\x3e\x3cdl class\x3d"zm-form-table zm-form-table-medium"\x3e\x3cdt class\x3d"zm-form-table-head zm-form-table-head-align-middle"\x3e\x3clabel class\x3d"zg-medium-gray"\x3e发给：\x3c/label\x3e\x3c/dt\x3e\x3cdd class\x3d"zm-form-table-field"\x3e\x3cdiv class\x3d"zm-pm-selector-wrap"\x3e\x3cdiv class\x3d"zg-user-name" style\x3d"display:none;padding:4px 0 0 0"\x3e\x3c/div\x3e\x3cinput class\x3d"zg-form-text-input zm-pm-user-selector" type\x3d"text" /\x3e\x3c/div\x3e\x3c/dd\x3e\x3cdt class\x3d"zm-form-table-head zm-form-table-head-align-middle"\x3e\x3clabel class\x3d"zg-medium-gray"\x3e内容：\x3c/label\x3e\x3c/dt\x3e\x3cdd class\x3d"zm-form-table-field zm-form-table-field-last"\x3e\x3cdiv class\x3d"zg-editor-simple-wrap zg-form-text-input"\x3e\x3ctextarea class\x3d"zg-editor-input" style\x3d"font-weight:normal"\x3e\x3c/textarea\x3e\x3c/div\x3e\x3c/dd\x3e\x3c/dl\x3e\x3cdiv class\x3d"zh-pm-warnmsg" style\x3d"display:none;text-align:right;color:#C3412F;"\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command zg-clear"\x3e\x3cdiv class\x3d"zm-item-meta zg-left" style\x3d"margin: 0 0 0 57px;"\x3e\x3cspan class\x3d"zg-text-counter" style\x3d"display:none"\x3e还可以输入 500 字\x3c/span\x3e\x3cspan class\x3d"additional-info" \x3e\x3c/span\x3e\x3c/div\x3e\x3ca name\x3d"cancel" href\x3d"javascript:;" class\x3d"zm-command-cancel"\x3e取消\x3c/a\x3e\x3ca name\x3d"send" href\x3d"javascript:;" class\x3d"zg-btn-blue zg-r3px" id\x3d"zh-question-pm-send-button"\x3e发送\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e'), this.Eh =
            z.N("zg-user-name", this.h), this.pd = z.N("zg-editor-input", this.h), this.$c = z.N("zm-pm-user-selector", this.h), this.wn = z.N("zm-command", this.h), z.N("zg-text-counter", this.h), this.Bt = z.N("zh-pm-warnmsg", this.h), (0, window.$)(".additional-info", (0, window.$)(this.h)), new z.Sr(this.pd), this.v().g(this.wn, "click", this.Qa).g(this.Eh, "click", this.Qa).g(this.pd, "keydown", this.QP), this.$c && ((new z.Xs("搜索用户")).w(this.$c), this.v().g(this.$c, "blur", this.sN), this.ca = new z.kt("/people/autocomplete?type\x3d" + this.J.fU,
            this.$c, null, null, z.N("zm-pm-wrap", this.h), !0), this.ca.vh(!0), this.v().g(this.ca, "select", this.sT)), z.T.qe || Hx(this, "未激活用户，不能发送私信。请先激活邮箱。"))
    };
    z.e.QP = function (a) {
        13 === a.keyCode && (a.ctrlKey || a.metaKey) && (this.zs(), a.preventDefault())
    };
    z.e.sN = function () {
        this.OD && (0, window.clearTimeout)(this.OD);
        this.OD = (0, window.setTimeout)((0, z.q)(this.tN, this), 200)
    };
    z.e.tN = function () {
        var a = z.sr(this.$c.value);
        -1 === this.Km && a && "搜索用户" !== a && Hx(this, "请输入对方姓名，从下拉菜单里选择收件人")
    };
    z.e.Eu = function (a) {
        this.zV = a
    };
    z.e.show = function () {
        this.init();
        this.vq && (this.Ia.G(!0), this.Ia.ha())
    };
    z.e.sT = function () {
        var a = z.yb(this.ca.Ej(), 1);
        z.Gx(this, a[3], a[0], !0)
    };
    z.e.zs = function () {
        if (!this.ai || "pending" !== this.ai.state()) if (-1 === this.Km) Hx(this, "请填写收信人。"); else {
            var a = this.pd.value;
            (0, z.ab)(a) ? (a = -1 !== this.fq ? window.$.post("/inbox/reply", {
                message_id: this.fq,
                content: a,
                type: this.HB
            }) : window.$.post("/inbox/post", {
                member_id: this.Km,
                content: a,
                token: this.zV
            }), a.done((0, z.q)(this.uT, this)), this.ai = a) : Hx(this, "请填写私信内容。")
        }
    };
    z.e.Qa = function (a) {
        if (a = (a = this.Pg(a.target)) && a.name) switch (a) {
            case "edit":
                this.Km = -1;
                z.vr(this.$c, this.Eh);
                break;
            case "cancel":
                this.vq && this.Ia.G(!1);
                break;
            case "send":
                this.zs()
        }
    };
    z.e.uT = function (a) {
        Hr("message", "send_message");
        if (!a) return z.X.message("网络异常");
        if (a.r) return Hx(this, a.msg);
        this.vq && this.Ia.G(!1);
        this.J.lu ? window.location.reload() : z.X.message("发送成功")
    };
    z.x(Ix, z.Xj);
    var Nx = {
        p: "MemberProfileCardV2",
        t: "TopicProfileCardV2",
        c: "ColumnProfileCardV2",
        r: "RoundtableProfileCardV2"
    };
    z.e = Ix.prototype;
    z.e.LQ = {t: 0, r: 2, b: 1, l: 2};
    z.e.init = function () {
        if (!z.rm.Ab && !z.qm("tooltiop")) {
            var a = this.R = new z.xx({
                A: "data-tip",
                SPAN: "data-tip",
                BUTTON: "data-tip",
                I: "data-tip",
                DIV: "data-tip",
                INPUT: "data-tip",
                IMG: "data-tip"
            }), b = z.O("div", {id: "zh-tooltip"});
            window.document.body.appendChild(b);
            this.R.sh(b);
            this.R.Sp = this.PV;
            this.R.no = this.IQ;
            this.v().g(this.R, "trigger", this.fA);
            var c = (0, window.$)(b), d = null;
            a.on("show", function (a) {
                (0, window.clearTimeout)(d);
                c.addClass("in");
                z.Y.tb({type: "ga_hover_hovercard", target: a.target.Un()})
            }).on("hide",
                function () {
                    c.css({display: "block", visibility: "visible"}).removeClass("in").addClass("out");
                    d = (0, window.setTimeout)(function () {
                        c.removeClass("out").css({display: "none", visibility: "hidden"})
                    }, 1E3)
                });
            this.v().g(this.R, "beforeshow", this.bp).g(this.R, "show", this.jg).g(this.R, "beforehide", this.CS);
            (0, window.$)(a.m()).on("click", ".member-profile-card-pm", function (b) {
                b.preventDefault();
                var c = (0, window.$)(this);
                a.G(!1);
                z.Jq(function () {
                    var a = new z.Ex({Vk: !1});
                    a.show();
                    z.Gx(a, c.data("pmHash"), c.data("pmName"));
                    z.Fx(a, c.attr("href"));
                    a.pd.focus()
                }, !0)()
            })
        }
    };
    z.e.CS = function () {
        "s" !== this.bf && (this.Qh[this.bf] && this.Qh[this.bf][this.Gn] && (this.Qh[this.bf][this.Gn] = (0, window.$)(this.R.m()).find(".popover-content").html()), this.bf in Nx && (0, z.Gi)(this.R.m(), {
            action: "Hide",
            element: "Card"
        }, {link: {url: this.R.Un().href}}))
    };
    z.e.bp = function () {
        var a = this.R.Un(), b = a.getAttribute("data-tip");
        this.uE = a;
        b = b.split("$");
        this.bf = b[0];
        this.Gn = b[2];
        this.kl = b[1];
        this.R.m().setAttribute("data-theme", a.getAttribute("data-theme") || "");
        "s" === this.bf ? (a = this.Gn, b = [], b.push('\x3cdiv class\x3d"tooltip-arrow"\x3e\x3c/div\x3e'), b.push('\x3cdiv class\x3d"tooltip-inner content-prewrap"\x3e'), b.push(ro(a)), b.push("\x3c/div\x3e"), Mx(this, b.join(""))) : Lx(this, this.bf, this.Gn, this.kl);
        Kx(this);
        a = this.R.Un();
        this.bf in Nx && a && (!(b = a.getAttribute("href")) ||
            b.startsWith("#") || "http:" !== a.protocol && "https:" !== a.protocol || (b = (0, window.$)("img", a).length ? "Image" : "Link", (0, z.Gi)(a, {
                action: "Hover",
                element: b
            }, {link: {url: a.href}})))
    };
    z.e.jg = function () {
        var a = this.bf in Nx;
        a && (z.xo(this.R, {module: a ? "HoverCard" : null}), (0, z.Gm)(this.R, {element: "Card"}))
    };
    z.e.tw = function () {
        return Jx('\x3cdiv class\x3d"zh-hovercard-spinner"\x3e\x3c/div\x3e', !0)
    };
    z.e.fA = function (a) {
        var b = a.anchor, c = b && b.getAttribute("data-tip"), d = c.split("$"), f = null;
        a = "s" !== d[0];
        z.Ho(b, "no-hovercard") && a ? (a = this.R, sx(a), zx(a)) : c && 1 < d.length ? (b.title && (b.setAttribute("data-original_title", b.title), b.removeAttribute("title")), f = d[1], "s" !== d[0] && (210 > z.Dg(b).y ? "t" === f && (f = "b", b.setAttribute("data-tip", c.replace("$t$", "$b$"))) : (f = "t", b.setAttribute("data-tip", c.replace("$b$", "$t$")))), this.TN = f = new Cx(b, this.LQ[f], "b" === f || "t" === f), b = (0, z.q)(this.wT, this), f.$t = b, this.R.className =
            a ? "goog-hovercard popover" : "tooltip") : (a = this.R, sx(a), zx(a))
    };
    z.e.wT = function (a, b) {
        var c = this.R.m();
        z.W.remove(c, "top", "bottom", "left", "right");
        z.W.add(c, a);
        var d = z.fo(c), f = z.fo(this.uE), g = new z.Ge(c.offsetLeft, c.offsetTop);
        if ("t" === this.kl || "b" === this.kl) {
            var d = (d.width - f.width) / 2, h = g.x - d;
            if ("s" === this.bf) z.rg(c, "left", h + "px"); else {
                var h = z.A(["2-5", "3-5", "3-4", "2-4"], b), k = (0, window.$)(".zh-hovercard-spinner", c)[0],
                    m = z.N("arrow", c), n = z.N("arrow2", c);
                k ? z.rg(c, "left", g.x - d + "px") : h ? z.rg(c, "left", g.x + 83 + "px") : z.rg(c, "left", g.x - 70 + "px");
                var r = f.width / 2;
                m && n && (k ||
                    (h ? z.y([m, n], function (a) {
                        z.rg(a, "left", "auto");
                        z.rg(a, "right", r + 70 + "px")
                    }) : z.y([m, n], function (a) {
                        z.rg(a, "left", r + 70 + "px")
                    })))
            }
        } else z.rg(c, "top", g.y - (d.height - f.height) / 2 + "px"), "l" === this.kl && z.zg(c, g.x - f.width)
    };
    z.x(Px, z.R);
    z.e = Px.prototype;
    z.e.Y = function (a) {
        this.h = a;
        this.W = (0, window.$)(this.h);
        this.W.addClass("zh-scroller").css({
            position: "relative",
            overflow: "hidden"
        }).wrapInner('\x3cdiv class\x3d"zh-scroller-content"\x3e\x3c/div\x3e');
        this.W.wrapInner('\x3cdiv class\x3d"zh-scroller-inner"\x3e\x3c/div\x3e');
        this.W.append("\x3cdiv class\x3d'zh-scroller-bar-container'\x3e\x3cdiv\x3e");
        this.W.append('\x3cdiv class\x3d"zh-scroller-bar"\x3e\x3c/div\x3e');
        this.fd = this.W.children(".zh-scroller-inner");
        this.Hk = this.W.children(".zh-scroller-bar-container");
        this.ne =
            this.W.children(".zh-scroller-bar");
        this.Re = this.fd.children(".zh-scroller-content");
        this.gr = this.ne[0];
        this.bR = this.fd[0];
        this.content = this.Re[0];
        this.ir = this.Hk[0];
        this.fd.css({height: "100%", width: "150%", overflow: "auto"});
        this.ne.css({
            position: "absolute",
            right: this.options.right,
            top: this.options.top,
            opacity: this.options.hw,
            background: this.options.cN,
            width: this.options.width,
            "border-radius": 3,
            cursor: "default"
        });
        this.Hk.css({
            position: "absolute", right: this.options.right - 1, top: 0, height: "100%", width: this.options.width,
            background: this.options.IN, border: "1px solid #444", opacity: 0, cursor: "default", "border-radius": "2px"
        });
        this.Ji(this.gr, !1);
        this.Ji(this.ir, !1);
        this.update()
    };
    z.e.C = function () {
        Px.o.C.call(this);
        this.IB = new z.fl(this.dA, 50, this);
        this.options.stopPropagation && this.fd.bind("mousewheel DOMMouseScroll", function (a) {
            var b = null;
            "mousewheel" === a.type ? b = -1 * a.originalEvent.wheelDelta : "DOMMouseScroll" === a.type && (b = 40 * a.originalEvent.detail);
            b && (a.preventDefault(), (0, window.$)(this).scrollTop(b + (0, window.$)(this).scrollTop()))
        })
    };
    z.e.enter = function () {
        this.qx || (this.v().g(this.bR, "scroll", function () {
            this.IB.fire()
        }), z.C || (this.v().g(this.ir, "click", this.BS), this.v().g(window.document, "mousedown", this.cT), this.v().g(window.document, "mouseup", this.eT), this.v().g(window.document, "mousemove", this.dT)), this.options.$M ? (this.Qd = new z.td(200), this.v().g(this.Qd, "tick", function () {
            2 === this.Qz || 1 === this.Qz ? (Qx(this), this.Bm && this.Hk.css({opacity: this.options.ZD})) : this.Rr || this.gn || (Rx(this, 1E3), this.Hk.css({opacity: 0}))
        })) : (this.ne.css({opacity: this.options.hw}),
            this.Hk.css({opacity: this.options.ZD})), this.Qd && this.Qd.start(), Rx(this), this.qx = !0)
    };
    z.e.cT = function (a) {
        a.target === this.gr && (this.Rr = !0, this.dN = a.clientY, this.eN = (0, window.parseInt)(this.ne.css("top"), 10));
        a.target !== this.gr && a.target !== this.ir || this.Ji(window.document.body, !1)
    };
    z.e.eT = function () {
        this.Rr = !1;
        this.Ji(window.document.body, !0)
    };
    z.e.dT = function (a) {
        if (this.Rr) {
            var b = Sx(this, this.eN + (a.clientY - this.dN));
            this.fd.scrollTop(b)
        }
        this.Qz = a.target === this.gr ? 2 : a.target === this.ir ? 1 : 0
    };
    z.e.dA = function () {
        var a = this.fd.scrollTop(), b = this.Re.height(), c = this.fd.height(), d = a / b * (c - 2 * this.options.top);
        Qx(this);
        this.ne.css({top: d + this.options.top});
        this.dispatchEvent(new Tx(this, a, b - a - c))
    };
    z.e.update = function () {
        var a = this.Rg(this.fd).height, b = this.Rg(this.Re).height;
        a >= b ? (this.Bm = !1, this.ne.hide()) : (this.Bm = !0, this.ne.show());
        this.ne.css({height: a / b * (a - 2 * this.options.top)});
        this.Hk.css({height: a - 2});
        this.Re.css({overflow: "hidden", width: this.W.width(), "min-height": "100%"});
        return this
    };
    z.e.Rg = function (a) {
        var b = {height: a.height(), width: a.width()};
        if (!b.height) {
            var c = a.css("display"), d = a.css("position"), f = a.css("visibility");
            a.css({position: "absolute", display: "block", visibility: "hidden"});
            b = {height: a.height(), width: a.width()};
            a.css({position: d, display: c, visibility: f})
        }
        return b
    };
    z.e.BS = function (a) {
        this.scrollTo(Sx(this, a.offsetY - this.ne.height() / 2))
    };
    z.e.scrollTop = function (a) {
        this.Bm && (a = a || 200, Qx(this), this.fd.stop().animate({scrollTop: 0}, a));
        return this
    };
    z.e.Ji = function (a, b) {
        z.zo(a, !b)
    };
    z.e.scrollBy = function (a, b) {
        if (this.Bm) {
            Qx(this);
            var c = b || this.Rg(this.fd).height, c = Math.abs(c), c = this.fd.scrollTop() + (a ? -1 : 1) * c;
            this.fd.stop().animate({scrollTop: c}, 200)
        }
    };
    z.e.scrollTo = function (a) {
        this.Bm && (Qx(this), this.fd.stop().animate({scrollTop: a}, 200));
        return this
    };
    z.x(Tx, z.Lc);
    z.x(z.Ux, z.R);
    z.Ux.prototype.defaults = {VH: ".tab-nav", NI: ".tab-panel", Cg: "active"};
    z.Ux.prototype.Y = function (a) {
        if (a) {
            this.h = a;
            var b = this, c = this.J;
            this.Ok = (0, window.$)(c.VH, a);
            this.Sm = (0, window.$)(c.NI, a);
            this.Pj = this.Ok.index("." + c.Cg);
            this.Ok.on("click", function () {
                b.select(b.Ok.index(this))
            });
            this.Ok.attr("role", "tab").parent().attr("role", "tablist")
        }
    };
    z.Ux.prototype.select = function (a) {
        if (!(0 > a || a > this.Ok.size()) && (this.dispatchEvent({type: "action", data: {index: a}}), a !== this.Pj)) {
            this.Pj = a;
            var b = this.J;
            this.Ok.eq(a).addClass(b.Cg).attr("aria-selected", "true").siblings().removeClass(b.Cg).attr("aria-selected", "false");
            b = this.Sm.eq(a);
            this.Sm.not(b.show()).hide();
            this.dispatchEvent({type: "select", data: {index: a}})
        }
    };
    z.Ux.prototype.index = function () {
        return this.Pj
    };
    z.l(Vx, z.Xj);
    z.e = Vx.prototype;
    z.e.init = function () {
        this.Ai = z.L("zh-top-nav-live-new");
        this.AC = (0, window.$)(this.Ai);
        this.jq = z.L("zh-top-nav-count-wrap");
        this.zn = z.O("span", {
            id: "zh-top-nav-count",
            className: "zu-top-nav-count zg-noti-number",
            style: "display:none"
        });
        this.contents = z.Qo("zm-noti7-content", this.Ai);
        this.Jw = z.Qo("zm-noti7-content-body", this.Ai);
        this.jq.appendChild(this.zn);
        this.v().g(this.jq, "click", this.oK).g(this.jq, "keypress", function (a) {
            32 === a.keyCode && (a.preventDefault(), this.oK())
        });
        this.v().g(z.Y, "notification",
            this.cQ);
        this.v().g(this.Ai, "click", function (a) {
            a = a.target;
            a.href && /group_id=/.test(a.href + "") && (0, window.$)(a).parent(".unread").removeClass("unread")
        });
        this.wv = (0, window.$)(".zm-noti7-popup-tab-container .icon");
        Wx(this);
        this.KK || (this.pg = z.nb(this.contents, function (a) {
            var b = new Px;
            b.w(a);
            return b
        }));
        Zx(this);
        this.km = z.L("zh-top-nav-pm-count");
        this.km || (this.km = z.O("span"));
        this.em = z.L("zh-top-nav-new-pm");
        this.em || (this.em = z.O("span"));
        this.AG = (0, window.parseInt)((0, window.$)(this.em).attr("data-count") ||
            (0, window.$)(this.km).attr("data-count"), 10) || 0;
        this.v().g(z.Y, "inbox", this.PP)
    };
    z.e.cQ = function (a) {
        this.dI = this.Pf;
        this.Pf = a.xf;
        this.Td = this.Pf[0] + this.Pf[1] + this.Pf[2];
        z.Q(this.zn, !!this.Td);
        this.zn.innerHTML = by(this.Td);
        z.y(this.Pf, function (a, c) {
            a ? (this.wv.eq(c).addClass("withdot"), this.cache[c] = !1) : this.wv.eq(c).removeClass("withdot");
            this.VE && 0 < a - this.dI[c] && this.Fl(c)
        }, this);
        ay(this)
    };
    z.e.oK = function () {
        this.visible ? z.rm.Ab ? ey(this, !1) : ey(this, !!this.Td) : ey(this, !0);
        ay(this)
    };
    z.e.Fl = function (a) {
        if (!this.Cj[a]) {
            var b = this.Cj[a] = new z.Z(!1);
            this.v().ya(b, "success", function () {
                var b = z.Rn(this.Cj[a]);
                this.Cj[a] = null;
                if (b) if (b.r) z.X.message(b.msg); else {
                    this.Nw = !0;
                    var d = b.msg;
                    if (d) 1 === a && (d = '\x3cdiv class\x3d"zm-noti7-content-head-item"\x3e\x3cspan class\x3d"zg-gray-normal"\x3e这些人最近关注了你\x3c/span\x3e\x3c/div\x3e' + d); else {
                        switch (a) {
                            case 0:
                                d = "暂无新消息";
                                break;
                            case 1:
                                d = "有人关注你时会显示在这里";
                                break;
                            case 2:
                                d = "你的答案收到赞同、感谢时会显示在这里"
                        }
                        d = '\x3cdiv class\x3d"zm-noti7-popup-empty"\x3e' + d + "\x3c/div\x3e"
                    }
                    this.cache[a] =
                        d;
                    b.hasMore && 0 === this.$o[a] && (this.$o[a] = b.offset);
                    this.Cm[a] && (Xx(this, a), this.Cm[a] = !1)
                }
            });
            b.ajax("/noti7/stack/" + this.types[a] + "?limit\x3d10\x26r\x3d" + (0, z.I)(), "", "GET")
        }
    };
    z.e.zz = function (a) {
        var b = this;
        if (this.Cj[a]) return window.Promise.reject("Request already in progress");
        if (0 === this.$o[a]) return window.Promise.resolve(!1);
        var c = this.Jw[a],
            d = z.We('\x3cdiv class\x3d"text-center"\x3e\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e');
        c.appendChild(d);
        return this.Cj[a] = window.$.get("/noti7/stack/" + this.types[a], {
            offset: this.$o[a],
            r: (0, z.I)()
        }).then(function (f) {
            z.P(d);
            if (f) if (f.r) z.X.message(f.msg); else {
                var g = z.We(f.msg);
                c.appendChild(g);
                b.Cj[a] = null;
                b.pg && b.pg[a] &&
                b.pg[a].update();
                b.$o[a] = f.offset;
                return f.hasMore
            }
        })
    };
    z.e.PP = function (a) {
        this.AG = a = window.$.isNumeric(a) ? a : a.xf;
        0 !== a ? (this.em.innerHTML = this.km.innerHTML = a, this.em.style.visibility = this.km.style.visibility = "visible") : this.em.style.visibility = this.km.style.visibility = "hidden";
        ay(this)
    };
    z.e.rs = function (a) {
        z.lf(this.Ai, a.target) || z.lf(this.jq, a.target) || ey(this, !1)
    };
    z.x(gy, z.R);
    z.e = gy.prototype;
    z.e.defaults = {trigger: "hover", DI: "open", hideFocus: !1};
    z.e.Ob = function () {
        return this.xg.length && this.ed.length
    };
    z.e.w = function (a) {
        if (a) {
            var b = (0, window.$)(a), c = b.prev();
            this.xg = b;
            this.ed = c;
            this.$parent = b.parent();
            gy.o.w.call(this, a);
            return this
        }
    };
    z.e.toggle = function () {
        this.ub() ? this.close() : this.open()
    };
    z.e.ub = function () {
        return this.xg.is(":visible")
    };
    z.e.open = function () {
        this.xg.attr("aria-hidden", "false").parent().addClass(this.J.DI);
        this.ed.attr("aria-expanded", "true")
    };
    z.e.close = function () {
        this.xg.attr("aria-hidden", "true").parent().removeClass(this.J.DI);
        this.ed.attr("aria-expanded", "false")
    };
    z.e.HS = function (a) {
        var b = a.keyCode;
        switch (b) {
            case 32:
                a.preventDefault();
                this.toggle();
                break;
            case 27:
            case 9:
                this.close();
                break;
            case 38:
            case 40:
                iy(this, 38 === b ? -1 : 0)
        }
    };
    z.e.ZS = function (a) {
        var b = a.keyCode;
        switch (b) {
            case 27:
            case 9:
                this.close();
                this.ed.focus();
                break;
            case 38:
            case 40:
                a.preventDefault(), iy(this, this.index + (38 === b ? -1 : 1))
        }
    };
    z.e.C = function () {
        var a = this, b = this.J;
        hy(this);
        this.xg.on("keydown", (0, z.q)(this.ZS, this));
        this.ed.on("keydown", (0, z.q)(this.HS, this));
        var c = z.Um ? "click" : b.trigger;
        if ("hover" === c) this.$parent.on("hover", (0, z.q)(function (a) {
            "mouseenter" === a.type ? this.open() : this.close()
        }, this)); else if ("click" === c) this.ed.on("click", (0, z.q)(function (a) {
            a.preventDefault();
            this.toggle();
            this.ed.focus()
        }, this));
        this.$parent.on("focusout", function () {
            (0, window.setTimeout)(function () {
                a.$parent.get(0).contains(window.document.activeElement) ||
                a.close()
            })
        });
        if (b.hideFocus) this.xg.children().find("a").on("click", function () {
            this.blur()
        })
    };
    z.l(jy, z.R);
    z.e = jy.prototype;
    z.e.C = function () {
        z.R.prototype.C.call(this);
        this.Ly()
    };
    z.e.fs = function () {
        return this.ca
    };
    z.e.RB = function (a, b, c) {
        if (a) {
            var d = {query: (0, z.ab)(this.m().value)};
            z.xi({wc: !0, category: "search", action: a, label: b, value: c, attributes: d})
        }
    };
    z.e.Ly = function () {
        var a = this, b = this.m();
        z.wl(z.bn.register("/", function () {
            (0, window.setTimeout)(function () {
                b.focus()
            });
            z.xr(b, null, 500)
        }), {group: "导航", name: "搜索"});
        var c = new jt, d = b.getAttribute("placeholder") || "搜索你感兴趣的内容...";
        this.ca = new z.kt("/autocomplete", b, null, null, b.offsetParent, null, [d], null, c);
        this.ca.dn = !1;
        this.ca.vh(!0);
        this.v().g(this.ca, "select", this.ty);
        var f = b.form;
        if (f) {
            var g = function (a) {
                (0, z.ab)(b.value) ? f.submit() : a.preventDefault()
            };
            this.v().g(b, "keydown", function (b) {
                13 === b.keyCode &&
                (a.RB("visit_search_result", "enter"), g(b))
            });
            this.v().g(f, "submit", g);
            (0, window.$)(":submit", f).click(function () {
                a.RB("visit_search_result", "search_box_submit")
            })
        }
        this.v().g(this.ca, "suggestionsupdate", this.Pv);
        var h = (0, z.q)(function () {
            this.ca.HE = !(this.metaKey || this.Lz)
        }, this);
        this.v().g(window.document, "keydown", function (a) {
            a.metaKey && (this.metaKey = !0, h())
        });
        this.v().g(window.document, "keyup", function (a) {
            if (91 === a.keyCode || 224 === a.keyCode) this.metaKey = !1, h()
        });
        this.v().g(window.document, "mouseup",
            function (a) {
                z.Qc(a, 1) && (this.Lz = !0, h(), (0, window.setTimeout)((0, z.q)(function () {
                    this.Lz = !1;
                    h()
                }, this), 0))
            });
        this.v().g(b, "mousedown", function (a) {
            a.stopPropagation();
            return !0
        })
    };
    z.e.Pv = function () {
        var a = this.ca.Sa, b = this.ca.M.zf;
        if (a && 0 !== a.length) {
            if (1 === a.length) {
                var c = z.O("div", {className: "zu-autocomplete-empty"}, "没有找到相关的结果");
                z.af(c, b[0]);
                z.P(b[0])
            }
            z.y(a, function (c, f) {
                if (0 === f || c[0] !== a[f - 1][0]) {
                    var g = b[f], h = {people: "用户", topic: "话题", question: "问题"}[c[0]];
                    h && (h = z.O("div", {className: "zu-autocomplete-row-label ac-row"}, h), z.af(h, g), this.v().g(this.ca, "suggestionsupdate", Pr))
                }
            }, this)
        }
    };
    z.e.ty = function (a) {
        var b = this.ca.Ej(), c = this.ca.M.Sl, d = z.yb(b, 1), f = null, b = b[0];
        "topic" === b ? (f = "/topic/" + d[1], f = ky(this, f)) : "people" === b ? (f = "/people/" + d[1], f = ky(this, f)) : "question" === b ? (f = "/question/" + d[2], f = ky(this, f)) : "search_link" === b && (f = "/search?q\x3d" + (0, window.encodeURI)(d[0]) + "\x26type\x3dcontent");
        f && (z.Y.tb({type: "ga_serach_select", data: {type: b, index: c}}), d = c + 1, (d = {
            topic: ["visit_topic", "instant_search_result_topic", d],
            question: ["visit_question", "instant_search_result_question", d],
            people: ["visit_people_profile",
                "instant_search_result_people", d],
            search_link: ["visit_search_result"]
        }[b]) && this.RB.apply(this, d), z.aj.set("s-q", (0, window.encodeURI)(this.ca.Wb), -1, "/"), z.aj.set("s-i", c + 1, -1, "/"), z.aj.set("sid", (0, z.yF)(), -1, "/"), z.aj.set("s-t", "autocomplete", -1, "/"), this.metaKey || this.Lz ? window.open(f) : window.location.href = f);
        a.stopPropagation();
        a.preventDefault()
    };
    z.x(ly, z.Xj);
    ly.prototype.init = function () {
        if ((0, window.$)(".zu-top").length) {
            z.Qh.get("__Q_ISNEWLYCREATED__") && (z.Qh.remove("__Q_ISNEWLYCREATED__"), z.S && (z.S.SG = !0));
            if (z.T.Fb()) (new Vx).init(); else (0, window.$)("#zh-top-inner").on("click", 'a[href\x3d"/topic"]', function () {
                var a = new z.Rk;
                a.bd("top_navigation_topics");
                a.show();
                return !1
            }).on("click", ".js-signin-noauth", function () {
                var a = new z.Rk;
                a.bd("top_navigation_sign_in");
                a.show();
                return !1
            }).on("click", ".js-signin-noauth-mobile", function () {
                z.U("app-promotion", "click_mobileweb_signin_btn");
                var a = new z.Rk;
                a.bd("top_navigation_sign_in_mobile");
                a.show();
                return !1
            }).on("click", ".js-signup-noauth", function () {
                var a = new z.Vk;
                a.bd("top_navigation_sign_up");
                a.show();
                return !1
            }).on("click", ".js-signup-noauth-mobile", function () {
                z.U("app-promotion", "click_mobileweb_signup_btn");
                var a = new z.Vk;
                a.bd("top_navigation_sign_up_mobile");
                a.show();
                return !1
            });
            if (this.SE = z.L("zh-top-search")) {
                this.hR = z.N("zu-top-search-input", this.SE);
                var a = z.L("zu-top-add-question");
                a && this.v().g(a, "click", this.LV);
                z.Vj ||
                !z.Uj ? (new gy({hideFocus: !0})).w((0, window.$)("#top-nav-profile-dropdown").get(0)) : my();
                this.Ly()
            }
        }
    };
    ly.prototype.Ly = function () {
        var a = (new z.ph(window.location)).ze().get("q");
        a ? a = (0, window.decodeURIComponent)(a) : (a = z.Qh.get("query"), z.Qh.remove("query"));
        var b = this.hR;
        a && (b.value = a);
        z.Uj && this.v().g(b, ["focus", "blur"], function (a) {
            (0, window.$)(".zu-top").toggleClass("is-searching", "focus" === a.type)
        });
        (new jy).w(b)
    };
    ly.prototype.LV = z.Jq(function () {
        z.Lv.ba().show()
    }, !0, "#ask");
    window.JSON || (window.JSON = {parse: En, stringify: To});
    z.C && (Object.getPrototypeOf = function (a) {
        return function (b) {
            return b.__proto__ || a.apply(this, arguments)
        }
    }(Object.getPrototypeOf));
    z.x(ny, z.R);
    z.gG = new ny;
    z.gG.w(window.document);
    z.x(oy, z.Bj);
    z.la(oy);
    z.e = oy.prototype;
    z.e.hc = function () {
        z.Lj(this, null);
        this.v().g(window.document, "click", this.rs)
    };
    z.e.rs = function (a) {
        a = a.target;
        if ("IMG" === a.tagName && z.W.has(a, this.lW)) {
            var b = a.getAttribute("data-original");
            if (b && !z.vm && !z.Ho(a, "editable")) {
                this.ia('\x3cdiv class\x3d"zm-light-box-x1" id\x3d"zm-light-box-x1"\x3e\x3cdiv class\x3d"zm-light-box-x2" id\x3d"zm-light-box-x2"\x3e\x3cimg src\x3d"' + b + '" class\x3d"zm-light-box-img-el" /\x3e\x3cdiv class\x3d"zm-light-box-footer"\x3e\x3ca class\x3d"zm-light-box-show-origin" href\x3d"' + b + '" target\x3d"_blank"\x3e查看原图\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e');
                this.G(!0);
                z.W.add(this.m(), "zm-light-box-fullscreen-image");
                var b = z.Oe(), c = z.L("zm-light-box-x1"), d = z.L("zm-light-box-x2"),
                    f = a.getAttribute("data-rawheight"), g = a.getAttribute("data-rawwidth"), g = g ? +g : 0;
                (f ? +f : 0) > b.height - 80 ? d.style.marginTop = "40px" : c.style.lineHeight = b.height + "px";
                d.style.width = g > b.width - 80 ? b.width - 80 + "px" : g + "px";
                z.Y.tb({type: "ga_click_enlarge_image", target: a})
            }
        }
    };
    z.e.ha = z.p;
    z.e.focus = z.p;
    z.e.uJ = z.Gl;
    z.e.MP = function () {
        this.G(!1);
        z.W.remove(window.document.body, this.zD)
    };
    z.e.jg = function () {
        oy.o.jg.call(this);
        z.W.add(window.document.body, this.zD);
        this.v().ya(window.document, "click", this.MP)
    };
    z.e.B = function () {
        oy.o.B.call(this);
        z.W.add(this.m(), "zm-light-box")
    };
    z.e.Fz = function () {
        this.Pc = this.K().B("div", this.Rc + "-bg zm-light-box-background");
        z.Q(this.Pc, !1)
    };
    oy.ba();
    z.jg("common");
    window.console || (window.console = {info: z.p, log: z.p, warning: z.p, error: z.p});
    z.gG.on(["click!", "show!", "visit!"], function (a) {
        var b = a.yc;
        b.category && b.action && z.U(b.category, a.type.replace("!", "") + "_" + b.action, b.label, b.value)
    });
    z.ud = window;
    (function () {
        function a(a) {
            return (0, z.Ii)({responseId: a.getResponseHeader("X-Za-Response-Id")})
        }

        z.Uj = z.rm.Ab;
        window.$.ajaxPrefilter(function (a, c, d) {
            var f;
            !1 !== c.processData && "get" !== a.type.toLowerCase() && (f = z.aj.get("_xsrf")) && d.setRequestHeader("X-Xsrftoken", f)
        });
        window.$.ajaxPrefilter(function (b, c, d) {
            return d.always(function () {
                return a(d)
            })
        });
        tp("*", function (b, c) {
            return a(c)
        });
        (new ly).init()
    })();
    z.Cp.dispatchEvent("init");
    (0, window.$)(function () {
        z.Cp.dispatchEvent("postinit")
    });
    z.T.Fb() ? (tp("json", function (a) {
        (a = a.profile_result) && (0, window.$)(a).css("border-top", "1px solid #eee").appendTo(window.document.body)
    }), z.rm.Ab && (window.$.fx.off = !0), (0, window.$)(function () {
        (new $w).init()
    })) : (0, window.$)("body").addClass("no-auth");
    z.Va(window.location.host, "zhihu.com") || (z.Mi = !0);
    (0, window.$)(window.document.body).children("div.zu-main").attr("role", "main");
    window.document.addEventListener && window.document.addEventListener("touchstart", z.p, !1);
    z.Vj && (0, window.$)('meta[name\x3d"viewport"]').attr("content", "width\x3ddevice-width, initial-scale\x3d1.0");
    (0, window.$)(function () {
        window.znonce && window.znonce.evalScripts();
        (new Yw).init();
        new Ix;
        var a = new Zw;
        window.console && window.console.info && window.console.info(a.TM + "\n\n" + a.link);
        bx();
        z.U.init()
    });
    z.l(z.py, z.R);
    z.e = z.py.prototype;
    z.e.C = function () {
        var a = this;
        z.R.prototype.C.call(this);
        var b = this.wf, c = b.Da, d = b.validator, f = b.iw, g = b.Tq, h = this.LU.bind(this), k = this.KU.bind(this);
        c.on("change keyup", ".is-error", function () {
            h((0, window.$)(this))
        }).submit(function () {
            if (c.hasClass("form-submitting")) return !1;
            k();
            var b = d(a.getData());
            if (b) return ry(a, b), !1;
            f.call(c).then(function () {
                c.addClass("form-submitting");
                a.submit().then(function (b) {
                    b = void 0 === b ? {} : b;
                    c.removeClass("form-submitting");
                    if (!b.r) return g.call(c, b);
                    ry(a, b.msg)
                }).catch(function () {
                    c.removeClass("form-submitting")
                })
            });
            return !1
        }).find('[type\x3d"submit"]').attr("disabled", !1)
    };
    z.e.LU = function (a) {
        a.removeClass("is-error").find("." + this.wf.Ko + "-error").remove()
    };
    z.e.KU = function () {
        this.Da.removeClass("is-error").find("." + this.wf.Ko + "-error").remove()
    };
    z.e.submit = function () {
        var a = this.wf, b = a.Da, a = a.JK, c = b.attr("contentType") || "application/json",
            d = {url: b.attr("action"), type: b.attr("method") || "POST"};
        if (a) Object.assign(d, {
            data: new window.FormData(b[0]),
            async: !1,
            cache: !1,
            contentType: !1,
            processData: !1
        }); else {
            var f = this;
            Object.assign(d, {
                data: function () {
                    var a = f.getData();
                    "application/json" === c && (a = JSON.stringify(a));
                    return a
                }(), contentType: c
            })
        }
        return new window.Promise(function (a, b) {
            window.$.ajax(d).done(a).fail(b)
        })
    };
    z.e.getData = function () {
        return sy(this.Da, this.wf.zF)
    };
    z.x(ty, z.G);
    ty.prototype.handleEvent = function (a) {
        var b = 0, c = 0, d = 0;
        a = a.gc;
        if ("mousewheel" == a.type) {
            c = 1;
            if (z.C || z.D && (z.ll || z.E("532.0"))) c = 40;
            d = uy(-a.wheelDelta, c);
            z.ka(a.wheelDeltaX) ? (b = uy(-a.wheelDeltaX, c), c = uy(-a.wheelDeltaY, c)) : c = d
        } else d = a.detail, 100 < d ? d = 3 : -100 > d && (d = -3), z.ka(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
        z.qa(this.EH) && (b = Zo(b, -this.EH, this.EH));
        z.qa(this.FH) && (c = Zo(c, -this.FH, this.FH));
        this.zR && (b = -b);
        b = new vy(d, a, b, c);
        this.dispatchEvent(b)
    };
    ty.prototype.D = function () {
        ty.o.D.call(this);
        z.nd(this.sH);
        this.sH = null
    };
    z.x(vy, z.Pc);
    z.x(wy, z.G);
    z.e = wy.prototype;
    z.e.me = 0;
    z.e.Wo = 0;
    z.e.So = 100;
    z.e.Nn = 0;
    z.e.Ak = 1;
    z.e.NG = !1;
    z.e.Ct = !1;
    z.e.Ea = function (a) {
        a = xy(this, a);
        this.me != a && (this.me = a + this.Nn > this.So ? this.So - this.Nn : a < this.Wo ? this.Wo : a, this.NG || this.Ct || this.dispatchEvent("change"))
    };
    z.e.X = function () {
        return xy(this, this.me)
    };
    z.e.Bu = function (a) {
        a = xy(this, a);
        this.Nn != a && (this.Nn = 0 > a ? 0 : this.me + a > this.So ? this.So - this.me : a, this.NG || this.Ct || this.dispatchEvent("change"))
    };
    z.e.hi = function () {
        var a = this.Nn;
        return null == this.Ak ? a : Math.round(a / this.Ak) * this.Ak
    };
    z.e.Ec = function () {
        return xy(this, this.Wo)
    };
    z.e.Vc = function () {
        return xy(this, this.So)
    };
    z.e.$n = function () {
        return this.Ak
    };
    z.x(yy, z.R);
    z.e = yy.prototype;
    z.e.Nb = "horizontal";
    z.e.Bo = !1;
    z.e.qS = !1;
    z.e.Lf = 10;
    z.e.zt = 0;
    z.e.QG = !0;
    z.e.SH = 0;
    z.e.JL = 1E3;
    z.e.ec = !0;
    z.e.ae = !1;
    z.e.B = function () {
        yy.o.B.call(this);
        var a = this.K().B("DIV", this.U(this.Nb));
        this.Y(a)
    };
    z.e.Y = function (a) {
        yy.o.Y.call(this, a);
        z.hj(a, this.U(this.Nb));
        a = this.m();
        var b = z.Le(window.document, null, "goog-slider-thumb", a)[0];
        b || (b = this.K().B("DIV", "goog-slider-thumb"), z.bj(b, "button"), a.appendChild(b));
        this.cb = this.Gd = b;
        z.bj(this.m(), "slider");
        Oy(this)
    };
    z.e.C = function () {
        yy.o.C.call(this);
        this.le = new z.oj(this.cb);
        this.Uf = new z.oj(this.Gd);
        this.le.Lg(this.ae);
        this.Uf.Lg(this.ae);
        this.le.Xw = this.Uf.Xw = z.p;
        this.vb = new Kp(this.m());
        zy(this, !0);
        this.m().tabIndex = 0;
        Iy(this)
    };
    z.e.Hb = function () {
        yy.o.Hb.call(this);
        z.Dc(this.le, this.Uf, this.vb, this.dk)
    };
    z.e.ps = function (a) {
        var b = a.Qr == this.le ? this.cb : this.Gd, c;
        "vertical" == this.Nb ? (c = this.m().clientHeight - b.offsetHeight, c = (c - a.top) / c * (this.Vc() - this.Ec()) + this.Ec()) : c = a.left / (this.m().clientWidth - b.offsetWidth) * (this.Vc() - this.Ec()) + this.Ec();
        c = a.Qr == this.le ? Math.min(Math.max(c, this.Ec()), this.X() + this.hi()) : Math.min(Math.max(c, this.X()), this.Vc());
        Gy(this, b, c)
    };
    z.e.As = function (a) {
        var b = "start" == a.type;
        z.uo(this.m(), "goog-slider-dragging", b);
        z.uo(a.target.handle, "goog-slider-thumb-dragging", b);
        a = a.Qr == this.le;
        b ? (this.dispatchEvent("h"), this.dispatchEvent(a ? "d" : "f")) : (this.dispatchEvent("i"), this.dispatchEvent(a ? "e" : "g"))
    };
    z.e.mf = function (a) {
        var b = !0;
        switch (a.keyCode) {
            case 36:
                My(this, this.Ec());
                break;
            case 35:
                My(this, this.Vc());
                break;
            case 33:
                Ey(this, this.Lf);
                break;
            case 34:
                Ey(this, -this.Lf);
                break;
            case 37:
                var c = this.ae && this.qd() ? 1 : -1;
                Ey(this, a.shiftKey ? c * this.Lf : c * this.rq);
                break;
            case 40:
                Ey(this, a.shiftKey ? -this.Lf : -this.rq);
                break;
            case 39:
                c = this.ae && this.qd() ? -1 : 1;
                Ey(this, a.shiftKey ? c * this.Lf : c * this.rq);
                break;
            case 38:
                Ey(this, a.shiftKey ? this.Lf : this.rq);
                break;
            default:
                b = !1
        }
        b && a.preventDefault()
    };
    z.e.ws = function (a) {
        this.m().focus && this.m().focus();
        var b = a.target;
        z.lf(this.cb, b) || z.lf(this.Gd, b) || (b = "click" == a.type, b && (0, z.I)() < this.SH + this.JL || (b || (this.SH = (0, z.I)()), this.qS ? My(this, Cy(this, a)) : (this.AB(a), this.Qe = Hy(this, Cy(this, a)), this.BG = "vertical" == this.Nb ? this.dt < this.Qe.offsetTop : this.dt > Ly(this, this.Qe) + this.Qe.offsetWidth, a = z.Je(this.m()), this.v().g(a, "mouseup", this.zB, !0).g(this.m(), "mousemove", this.AB), this.ni || (this.ni = new z.td(200), this.v().g(this.ni, "tick", this.eG)), this.eG(),
            this.ni.start())))
    };
    z.e.YF = function (a) {
        Ey(this, (0 < a.detail ? -1 : 1) * this.rq);
        a.preventDefault()
    };
    z.e.eG = function () {
        var a;
        if ("vertical" == this.Nb) {
            var b = this.dt, c = this.Qe.offsetTop;
            this.BG ? b < c && (a = Dy(this, this.Qe) + this.Lf) : b > c + this.Qe.offsetHeight && (a = Dy(this, this.Qe) - this.Lf)
        } else b = this.dt, c = Ly(this, this.Qe), this.BG ? b > c + this.Qe.offsetWidth && (a = Dy(this, this.Qe) + this.Lf) : b < c && (a = Dy(this, this.Qe) - this.Lf);
        z.ka(a) && Gy(this, this.Qe, a)
    };
    z.e.zB = function () {
        this.ni && this.ni.stop();
        var a = z.Je(this.m());
        this.v().qa(a, "mouseup", this.zB, !0).qa(this.m(), "mousemove", this.AB)
    };
    z.e.AB = function (a) {
        this.dt = By(this, a)
    };
    z.e.Ec = function () {
        return this.Bb.Ec()
    };
    z.e.Vc = function () {
        return this.Bb.Vc()
    };
    z.e.bG = function () {
        Iy(this);
        Oy(this);
        this.dispatchEvent("change")
    };
    z.e.Ao = function () {
        return this.Bo
    };
    z.e.xO = function () {
        this.Bo = !1
    };
    z.e.setOrientation = function (a) {
        if (this.Nb != a) {
            var b = this.U(this.Nb), c = this.U(a);
            this.Nb = a;
            this.m() && (a = this.m(), z.gj(a, b) && (z.jj(a, b), z.hj(a, c)), b = this.ae && this.qd() ? "right" : "left", this.cb.style[b] = this.cb.style.top = "", this.Gd.style[b] = this.Gd.style.top = "", this.Sb && (this.Sb.style[b] = this.Sb.style.top = "", this.Sb.style.width = this.Sb.style.height = ""), Iy(this))
        }
    };
    z.e.D = function () {
        yy.o.D.call(this);
        this.ni && this.ni.H();
        delete this.ni;
        this.En && this.En.H();
        delete this.En;
        delete this.cb;
        delete this.Gd;
        this.Sb && delete this.Sb;
        this.Bb.H();
        delete this.Bb;
        this.vb && (this.vb.H(), delete this.vb);
        this.dk && (this.dk.H(), delete this.dk);
        this.le && (this.le.H(), delete this.le);
        this.Uf && (this.Uf.H(), delete this.Uf)
    };
    z.e.rq = 1;
    z.e.$n = function () {
        return this.Bb.$n()
    };
    z.e.X = function () {
        return this.Bb.X()
    };
    z.e.Ea = function (a) {
        Gy(this, this.cb, a)
    };
    z.e.hi = function () {
        return this.Bb.hi()
    };
    z.e.Bu = function (a) {
        Gy(this, this.Gd, this.Bb.X() + a)
    };
    z.e.G = function (a) {
        z.Q(this.m(), a);
        a && Iy(this)
    };
    z.e.Wa = function (a) {
        this.ec != a && this.dispatchEvent(a ? "enable" : "disable") && (this.ec = a, zy(this, a), a || this.zB(), z.uo(this.m(), "goog-slider-disabled", !a))
    };
    z.e.isEnabled = function () {
        return this.ec
    };
    z.x(Py, yy);
    Py.prototype.U = function (a) {
        return "vertical" == a ? "goog-slider-vertical" : "goog-slider-horizontal"
    };
    z.x(Qy, z.R);
    z.e = Qy.prototype;
    z.e.defaults = {$D: 310, aE: 310, vg: 250, wg: 250, fS: 2, opacity: .25, aZ: "#eee"};
    z.e.Y = function (a) {
        Qy.o.Y.call(this, a);
        this.src = this.h.src;
        this.options.src = this.src;
        this.options.Qm = (this.options.$D - this.options.vg) / 2;
        this.options.Pm = (this.options.aE - this.options.wg) / 2;
        this.Ar()
    };
    z.e.Ar = function () {
        var a = this.options;
        this.pC = (0, window.$)((0, z.Rv)('\x3cdiv class\x3d"avatar-editor-container" style\x3d"width:\x3c%\x3dcontainerWidth%\x3epx"\x3e\x3cdiv class\x3d"avatar-editor-container-inner" style\x3d"height:\x3c%\x3dcontainerHeight%\x3epx;"\x3e\x3cdiv class\x3d"avatar-editor-window" style\x3d"height:\x3c%\x3dwindowHeight%\x3epx;width:\x3c%\x3dwindowWidth%\x3epx;margin:\x3c%\x3dwindowMarginTop%\x3epx \x3c%\x3dwindowMarginLeft%\x3epx;"\x3e\x3cdiv class\x3d"avatar-editor-window-shadow" style\x3d"height:\x3c%\x3dwindowHeight%\x3epx;width:\x3c%\x3dwindowWidth%\x3epx;"\x3e\x3c/div\x3e\x3cdiv class\x3d"avatar-editor-window-inner" style\x3d"width:\x3c%\x3dcontainerWidth%\x3epx; height:\x3c%\x3dcontainerHeight%\x3epx;margin:-\x3c%\x3dwindowMarginTop%\x3epx 0 0 -\x3c%\x3dwindowMarginLeft%\x3epx;"\x3e\x3cimg class\x3d"inner" title\x3d"拖动相片"/\x3e\x3c/div\x3e\x3c/div\x3e\x3cimg class\x3d"outer" style\x3d"opacity:\x3c%\x3dopacity%\x3e;"/\x3e\x3c/div\x3e\x3cdiv class\x3d"goog-slider-wrap"\x3e\x3ci class\x3d"zg-icon image-minus"\x3e\x3c/i\x3e\x3ci class\x3d"zg-icon image-plus"\x3e\x3c/i\x3e\x3cdiv class\x3d"goog-slider"\x3e\x3cdiv class\x3d"line"\x3e\x3c/div\x3e\x3cdiv class\x3d"goog-slider-thumb"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e', {
            containerWidth: a.aE,
            containerHeight: a.$D,
            windowHeight: a.vg,
            windowWidth: a.wg,
            windowMarginTop: a.Qm,
            windowMarginLeft: a.Pm,
            src: a.src,
            opacity: a.opacity
        }));
        this.Gb = this.pC[0];
        this.pC.insertBefore(this.h);
        z.Q(this.h, !1);
        this.MN = z.N("avatar-editor-container-inner", this.Gb);
        this.Js = z.N("outer", this.Gb);
        this.Iy = z.N("inner", this.Gb);
        this.Fq = (0, window.$)(this.Js);
        this.uv = (0, window.$)(this.Iy);
        this.yG = 0;
        this.Fq.load((0, z.q)(this.zK, this));
        this.uv.load((0, z.q)(this.zK, this));
        this.Iy.src = this.Js.src = this.options.src;
        this.TV = z.N("goog-slider",
            this.Gb)
    };
    z.e.C = function () {
        this.qB = new Py;
        this.qB.w(this.TV);
        this.v().g(this.MN, ["mousedown", "touchstart"], function (a) {
            var b = new z.oj(this.Gb);
            b.addEventListener("drag", (0, z.q)(function (a) {
                var b = this.zoom;
                this.Je = {
                    yq: this.options.wg / b,
                    ao: this.options.vg / b,
                    x: (this.options.Pm - (this.HG.left + (a.clientX - this.Lu))) / b,
                    y: (this.options.Qm - (this.HG.top + (a.clientY - this.Mu))) / b
                };
                Ty(this)
            }, this));
            b.addEventListener("end", (0, z.q)(function () {
                b.H()
            }, this));
            b.Hm(a);
            this.Hm(a)
        });
        this.v().g(this.Gb, ["touchmove"], function (a) {
            a.stopPropagation();
            a.preventDefault()
        });
        this.v().g(this.qB, "change", function () {
            var a = this.qB.X(), b = this.hL;
            Ry(this, (this.eX - b) * a / 100 + b)
        })
    };
    z.e.zK = function () {
        this.YQ || (this.Iy.complete && this.Js.complete ? this.init() : (this.yG++, 2 <= this.yG && this.init()))
    };
    z.e.init = function () {
        var a, b;
        b = this.Fq[0];
        if (b.naturalWidth) a = b.naturalWidth, b = b.naturalHeight; else {
            var c = new window.Image;
            c.src = b.src;
            a = c.width;
            b = c.height
        }
        this.Is = a;
        this.Hs = b;
        a = this.options.wg / this.Is;
        b = this.options.vg / this.Hs;
        this.hL = a = b > a ? b : a;
        this.eX = this.hL * this.options.fS;
        this.Je = {ao: this.options.wg / a, yq: this.options.vg / a, x: 0, y: 0};
        Ry(this, a);
        Sy(this, this.Is / 2, this.Hs / 2);
        this.YQ = !0
    };
    z.e.Hm = function (a) {
        this.Lu = a.clientX;
        this.Mu = a.clientY;
        this.HG = this.uv.position();
        this.Fq.position()
    };
    z.e.support = function () {
        return "getContext" in window.document.createElement("canvas")
    };
    z.x(z.Uy, z.R);
    z.Vy = 1;
    z.e = z.Uy.prototype;
    z.e.Y = function (a) {
        this.h = a;
        this.B()
    };
    z.e.B = function () {
        this.ZB = z.rm.tq + "/upload_avatar";
        this.Da = (0, window.$)((0, z.Rv)('\x3cform target\x3d"av_up_frame" style\x3d"display:none;" method\x3d"post" enctype\x3d"multipart/form-data" action\x3d"\x3c%\x3duploadAction%\x3e"\x3e\x3clabel for\x3d"avt_file"\x3e\x3c/label\x3e\x3cinput type\x3d"file" accept\x3d"image/*" name\x3d"picture" id\x3d"avt_file" /\x3e\x3cinput type\x3d"hidden" name\x3d"handle_mode" value\x3d"upload" /\x3e\x3cinput type\x3d"hidden" name\x3d"type" value\x3d"\x3c%\x3dtype%\x3e" /\x3e\x3cinput type\x3d"hidden" name\x3d"dest_id" value\x3d"\x3c%\x3ddest_id%\x3e" /\x3e\x3cinput type\x3d"hidden" name\x3d"return_size" value\x3d"\x3c%\x3dreturn_size%\x3e" /\x3e\x3c/form\x3e', {
            uploadAction: this.ZB,
            type: this.er, dest_id: this.er === z.Vy ? z.T[3] : this.aF, return_size: this.vJ
        }));
        this.qL = (0, window.$)('\x3ciframe id\x3d"av_up_frame" name\x3d"av_up_frame" style\x3d"position: absolute; height: 0px; width: 0px; left: -9000px;"\x3e\x3c/iframe\x3e');
        this.qL.appendTo(window.document.body);
        this.input = this.Da.find("input[type\x3dfile]")[0];
        z.C ? (this.Da.find("label").html((0, window.$)(this.h).html()), this.h.innerHTML = "", (0, window.$)(this.h).append(this.Da), this.Da.addClass("avatar-editor-form-ie")) : (this.Da.insertAfter(this.h),
            (0, window.$)(this.h).click(window.$.proxy(function () {
                this.input.click()
            }, this)));
        this.v().g(this.input, "change", this.Hc).g(this.input, "click", function (a) {
            !1 === this.dispatchEvent("beforeopen") && a.preventDefault()
        });
        this.v().g(z.Y, "iframe_data", function (a) {
            (a = a.xf) && !a.r ? "upload" === a.handle_mode ? (this.Tl = a.url, this.Hy = a.id, Wy() || this.kp()) : "resize" === a.handle_mode && ((0, window.$)(this.h).find("form").remove(), this.lE(a)) : z.X.message(a.msg)
        })
    };
    z.e.Hc = function (a) {
        Xy(this);
        a = this.input = a.target;
        if (Wy()) {
            if (a.files && a.files[0]) {
                this.file = a = a.files[0];
                var b = new window.FileReader;
                b.onload = (0, z.q)(function (a) {
                    this.Tl = a.target.result;
                    this.kp()
                }, this);
                b.readAsDataURL(a)
            }
        } else this.Da[0].submit();
        $y(this)
    };
    z.e.kp = function () {
        var a = this.dialog.S();
        this.Gy = new window.Image;
        this.Gy.src = this.Tl;
        a = (0, window.$)(a);
        a.html("");
        a.append(this.Gy);
        this.Ow = new Qy;
        this.Ow.w(this.Gy)
    };
    z.e.lE = function (a) {
        a && !a.r ? this.data = a : z.X.message(a.msg);
        this.dispatchEvent({type: "success", src: this.data});
        this.dialog.G(!1)
    };
    z.e.getData = function () {
        return this.data || null
    };
    z.e.be = function (a) {
        return this.data ? this.data.url.replace(/(\.\w+)$/, "_" + a + "$1") : ""
    };
    z.l(z.bz, z.R);
    z.bz.prototype.C = function () {
        z.R.prototype.C.call(this);
        var a = this.WT, b = this.m(), c = new z.Uy(z.Vy);
        c.w(b);
        var d = (0, window.$)(".Avatar", b), f = (0, window.$)(".Spinner", b);
        this.v().g(c, "beforepost", function () {
            f.show()
        }).g(c, "success", function () {
            var b = {method: "save", params: {data: {avatar_path: c.getData().id}}};
            window.$.post("/node/ProfileHeaderV2", b, function (b) {
                f.hide();
                b && b.r ? z.X.message("更新失败") : (d.add(".top-nav-profile .Avatar").attr({
                    src: c.be("l"),
                    srcset: c.be("xl") + " 2x"
                }), a.xi(b))
            })
        })
    };
    z.hG = function (a, b) {
        var c = [], d = [].slice, f = z.Qr(a, function () {
            c.length && (b(c), c = [])
        });
        return function () {
            c.push(d.call(arguments));
            f()
        }
    }(550, function (a) {
        z.T.Fb() && (a = {items: JSON.stringify(a)}, window.$.post("/lastread/touch", a))
    });
    z.x(z.cz, z.ex);
    z.cz.prototype.Yn = function () {
        return this.Mo
    };
    z.cz.prototype.xm = function (a) {
        this.Mo = a
    };
    z.cz.prototype.ha = function (a, b, c, d) {
        var f = z.Hs(this.element, this.Ze, a, b, null, c, 10, d, this.mA);
        if (f & 496) {
            var g = dz(f, this.Ze);
            b = dz(f, b);
            f = z.Hs(this.element, g, a, b, null, c, 10, d, this.mA);
            f & 496 && (g = dz(f, g), b = dz(f, b), z.Hs(this.element, g, a, b, null, c, this.Yn(), d, this.mA))
        }
    };
    z.x(ez, Mp);
    z.la(ez);
    ez.prototype.U = function () {
        return "goog-menuheader"
    };
    z.x(fz, Vp);
    z.Tp("goog-menuheader", function () {
        return new fz(null)
    });
    z.x(gz, Mp);
    z.la(gz);
    z.e = gz.prototype;
    z.e.jf = function () {
        return "menuitem"
    };
    z.e.B = function (a) {
        var b = a.K().B("DIV", this.Xf(a).join(" "), iz(this, a.Ua(), a.K()));
        kz(this, a, b, Pp(a, 8) || Pp(a, 16));
        return b
    };
    z.e.S = function (a) {
        return a && a.firstChild
    };
    z.e.w = function (a, b) {
        var c = z.gf(b), d = hz(this, 2);
        c && z.gj(c, d) || b.appendChild(iz(this, b.childNodes, a.K()));
        z.gj(b, "goog-option") && (a.Kp(!0), this.Kp(a, b, !0));
        return gz.o.w.call(this, a, b)
    };
    z.e.ia = function (a, b) {
        var c = this.S(a), d = jz(this, a) ? c.firstChild : null;
        gz.o.ia.call(this, a, b);
        d && !jz(this, a) && c.insertBefore(d, c.firstChild || null)
    };
    z.e.Ji = function (a, b, c) {
        a && b && kz(this, a, b, c)
    };
    z.e.Kp = function (a, b, c) {
        a && b && kz(this, a, b, c)
    };
    z.e.Vn = function (a) {
        switch (a) {
            case 2:
                return hz(this, 0);
            case 16:
            case 8:
                return "goog-option-selected";
            default:
                return gz.o.Vn.call(this, a)
        }
    };
    z.e.ns = function (a) {
        var b = hz(this, 0);
        switch (a) {
            case "goog-option-selected":
                return 16;
            case b:
                return 2;
            default:
                return gz.o.ns.call(this, a)
        }
    };
    z.e.U = function () {
        return "goog-menuitem"
    };
    z.x(z.lz, Vp);
    z.e = z.lz.prototype;
    z.e.X = function () {
        var a = this.Nz;
        return null != a ? a : this.Qg()
    };
    z.e.Ea = function (a) {
        this.Nz = a
    };
    z.e.Tb = function (a, b) {
        z.lz.o.Tb.call(this, a, b);
        switch (a) {
            case 8:
                this.qf() && !b && this.Kc(!1);
                var c = this.m();
                c && this.M.Ji(this, c, b);
                break;
            case 16:
                (c = this.m()) && this.M.Kp(this, c, b)
        }
    };
    z.e.Ji = function (a) {
        this.Tb(8, a)
    };
    z.e.Kp = function (a) {
        this.Tb(16, a)
    };
    z.e.Qg = function () {
        var a = this.Ua();
        return z.na(a) ? (a = z.nb(a, function (a) {
            return z.jf(a) && (z.gj(a, "goog-menuitem-accel") || z.gj(a, "goog-menuitem-mnemonic-separator")) ? "" : z.Io(a)
        }).join(""), mp(a)) : z.lz.o.Qg.call(this)
    };
    z.e.of = function (a) {
        var b = this.getParent();
        if (b) {
            var c = b.EI;
            b.EI = null;
            if (b = c && z.qa(a.clientX)) b = new z.Ge(a.clientX, a.clientY), b = c == b ? !0 : c && b ? c.x == b.x && c.y == b.y : !1;
            if (b) return
        }
        z.lz.o.of.call(this, a)
    };
    z.e.nf = function (a) {
        return a.keyCode == this.Mz && this.Nd(a) ? !0 : z.lz.o.nf.call(this, a)
    };
    z.e.WO = function () {
        return this.Mz
    };
    z.Tp("goog-menuitem", function () {
        return new z.lz(null)
    });
    z.lz.prototype.ki = function () {
        return Pp(this, 16) ? "menuitemcheckbox" : Pp(this, 8) ? "menuitemradio" : z.lz.o.ki.call(this)
    };
    z.lz.prototype.getParent = function () {
        return Vp.prototype.getParent.call(this)
    };
    z.lz.prototype.ji = function () {
        return Vp.prototype.ji.call(this)
    };
    z.x(mz, Mp);
    z.la(mz);
    mz.prototype.B = function (a) {
        return a.K().B("DIV", this.U())
    };
    mz.prototype.w = function (a, b) {
        b.id && On(a, b.id);
        if ("HR" == b.tagName) {
            var c = b;
            b = this.B(a);
            z.af(b, c);
            z.P(c)
        } else z.hj(b, this.U());
        return b
    };
    mz.prototype.ia = function () {
    };
    mz.prototype.U = function () {
        return "goog-menuseparator"
    };
    z.x(z.nz, Vp);
    z.nz.prototype.C = function () {
        z.nz.o.C.call(this);
        z.bj(this.m(), "separator")
    };
    z.Tp("goog-menuseparator", function () {
        return new z.nz
    });
    z.x(oz, Vr);
    z.la(oz);
    z.e = oz.prototype;
    z.e.Ob = function (a) {
        return "UL" == a.tagName || oz.o.Ob.call(this, a)
    };
    z.e.Wn = function (a) {
        return "HR" == a.tagName ? new z.nz : oz.o.Wn.call(this, a)
    };
    z.e.Nf = function (a, b) {
        return z.lf(a.m(), b)
    };
    z.e.U = function () {
        return "goog-menu"
    };
    z.e.Ee = function (a) {
        oz.o.Ee.call(this, a);
        z.cj(a.m(), "haspopup", "true")
    };
    z.x(z.pz, z.nz);
    z.Tp("goog-menuseparator", function () {
        return new z.nz
    });
    z.x(z.qz, z.Yr);
    z.e = z.qz.prototype;
    z.e.$m = !0;
    z.e.HM = !1;
    z.e.U = function () {
        return this.M.U()
    };
    z.e.Nf = function (a) {
        if (this.M.Nf(this, a)) return !0;
        for (var b = 0, c = z.$g(this); b < c; b++) {
            var d = z.ah(this, b);
            if ("function" == typeof d.Nf && d.Nf(a)) return !0
        }
        return !1
    };
    z.e.Fa = function (a) {
        this.L(a, !0)
    };
    z.e.bj = function (a, b) {
        this.Rk(a, b, !0)
    };
    z.e.removeItem = function (a) {
        (a = this.removeChild(a, !0)) && a.H()
    };
    z.e.ii = function (a) {
        return z.ah(this, a)
    };
    z.e.Dl = function () {
        return z.$g(this)
    };
    z.e.gb = function () {
        var a = [];
        z.bh(this, function (b) {
            a.push(b)
        });
        return a
    };
    z.e.setPosition = function (a, b) {
        var c = this.V();
        c || z.Q(this.m(), !0);
        z.Bo(this.m(), a, b);
        c || z.Q(this.m(), !1)
    };
    z.e.G = function (a, b, c) {
        (b = z.qz.o.G.call(this, a, b)) && a && this.wa && this.$m && this.Yb().focus();
        this.EI = a && c && z.qa(c.clientX) ? new z.Ge(c.clientX, c.clientY) : null;
        return b
    };
    z.e.ky = function (a) {
        this.$m && this.Yb().focus();
        return z.qz.o.ky.call(this, a)
    };
    z.e.FD = function (a) {
        return (this.HM || a.isEnabled()) && a.V() && Pp(a, 2)
    };
    z.e.Y = function (a) {
        var b = this.M, c;
        c = this.K();
        c = z.Le(c.Ka, "DIV", b.U() + "-content", a);
        for (var d = c.length, f = 0; f < d; f++) Xr(b, this, c[f]);
        z.qz.o.Y.call(this, a)
    };
    z.e.nf = function (a) {
        var b = z.qz.o.nf.call(this, a);
        b || z.bh(this, function (c) {
            !b && c.WO && c.Mz == a.keyCode && (this.isEnabled() && this.Mc(c), b = c.Zb(a))
        }, this);
        return b
    };
    z.e.xb = function (a) {
        z.qz.o.xb.call(this, a);
        (a = z.ah(this, a)) && Co(a.m(), this.m())
    };
    z.x(sz, z.cz);
    z.x(tz, z.Sp);
    z.la(tz);
    z.e = tz.prototype;
    z.e.B = function (a) {
        var b = {"class": "goog-inline-block " + this.Xf(a).join(" ")}, b = a.K().B("DIV", b, this.Zh(a.Ua(), a.K()));
        this.wd(b, a.Gl());
        return b
    };
    z.e.jf = function () {
        return "button"
    };
    z.e.S = function (a) {
        return a && a.firstChild && a.firstChild.firstChild
    };
    z.e.Zh = function (a, b) {
        return b.B("DIV", "goog-inline-block " + (this.U() + "-outer-box"), b.B("DIV", "goog-inline-block " + (this.U() + "-inner-box"), a))
    };
    z.e.Ob = function (a) {
        return "DIV" == a.tagName
    };
    z.e.w = function (a, b) {
        uz(b, !0);
        uz(b, !1);
        var c;
        a:{
            c = a.K().EF(b);
            var d = this.U() + "-outer-box";
            if (c && z.gj(c, d) && (c = a.K().EF(c), d = this.U() + "-inner-box", c && z.gj(c, d))) {
                c = !0;
                break a
            }
            c = !1
        }
        c || b.appendChild(this.Zh(b.childNodes, a.K()));
        z.ij(b, ["goog-inline-block", this.U()]);
        return tz.o.w.call(this, a, b)
    };
    z.e.U = function () {
        return "goog-custom-button"
    };
    z.x(vz, tz);
    z.la(vz);
    z.e = vz.prototype;
    z.e.S = function (a) {
        return vz.o.S.call(this, a && a.firstChild)
    };
    z.e.w = function (a, b) {
        var c = z.Le(window.document, "*", "goog-menu", b)[0];
        if (c) {
            z.Q(c, !1);
            z.Je(c).body.appendChild(c);
            var d = new z.qz;
            d.w(c);
            a.th(d)
        }
        return vz.o.w.call(this, a, b)
    };
    z.e.Zh = function (a, b) {
        return vz.o.Zh.call(this, [this.createCaption(a, b), b.B("DIV", "goog-inline-block " + (this.U() + "-dropdown"), " ")], b)
    };
    z.e.createCaption = function (a, b) {
        return wz(a, this.U(), b)
    };
    z.e.U = function () {
        return "goog-menu-button"
    };
    z.x(z.xz, z.bq);
    z.e = z.xz.prototype;
    z.e.Xs = !1;
    z.e.uk = !1;
    z.e.uV = !1;
    z.e.C = function () {
        z.xz.o.C.call(this);
        Cz(this, !0);
        this.ka && Bz(this, this.ka, !0);
        z.cj(this.h, "haspopup", !!this.ka)
    };
    z.e.Hb = function () {
        z.xz.o.Hb.call(this);
        Cz(this, !1);
        if (this.ka) {
            this.Cb(!1);
            this.ka.Hb();
            Bz(this, this.ka, !1);
            var a = this.ka.m();
            a && z.P(a)
        }
    };
    z.e.D = function () {
        z.xz.o.D.call(this);
        this.ka && (this.ka.H(), delete this.ka);
        delete this.kU;
        this.ma.H()
    };
    z.e.fe = function (a) {
        z.xz.o.fe.call(this, a);
        this.tc() && (this.Cb(!this.ub(), a), this.ka && (a = this.ub(), this.ka.vf = a))
    };
    z.e.of = function (a) {
        z.xz.o.of.call(this, a);
        this.ka && !this.tc() && (this.ka.vf = !1)
    };
    z.e.Nd = function () {
        this.setActive(!1);
        return !0
    };
    z.e.sP = function (a) {
        this.ka && this.ka.V() && !this.Nf(a.target) && this.Cb(!1)
    };
    z.e.Nf = function (a) {
        return a && z.lf(this.m(), a) || this.ka && this.ka.Nf(a) || !1
    };
    z.e.nf = function (a) {
        if (32 == a.keyCode) {
            if (a.preventDefault(), "keyup" != a.type) return !0
        } else if ("key" != a.type) return !1;
        if (this.ka && this.ka.V()) {
            var b = 13 == a.keyCode || 32 == a.keyCode, c = this.ka.Zb(a);
            return 27 == a.keyCode || b ? (this.Cb(!1), !0) : c
        }
        return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.Cb(!0, a), !0) : !1
    };
    z.e.io = function () {
        this.Cb(!1)
    };
    z.e.ZP = function () {
        this.tc() || this.Cb(!1)
    };
    z.e.Xc = function (a) {
        this.Xs || this.Cb(!1);
        z.xz.o.Xc.call(this, a)
    };
    z.e.Ya = function () {
        this.ka || this.th(new z.qz(this.K(), this.hS));
        return this.ka || null
    };
    z.e.th = function (a) {
        var b = this.ka;
        if (a != b && (b && (this.Cb(!1), this.wa && Bz(this, b, !1), delete this.ka), this.wa && z.cj(this.h, "haspopup", !!a), a)) {
            this.ka = a;
            z.Yg(a, this);
            a.G(!1);
            var c = this.Xs;
            (a.$m = c) && a.Oe(!0);
            this.wa && Bz(this, a, !0)
        }
        return b
    };
    z.e.Fa = function (a) {
        this.Ya().L(a, !0)
    };
    z.e.bj = function (a, b) {
        this.Ya().Rk(a, b, !0)
    };
    z.e.removeItem = function (a) {
        (a = this.Ya().removeChild(a, !0)) && a.H()
    };
    z.e.ii = function (a) {
        return this.ka ? z.ah(this.ka, a) : null
    };
    z.e.Dl = function () {
        return this.ka ? z.$g(this.ka) : 0
    };
    z.e.G = function (a, b) {
        var c = z.xz.o.G.call(this, a, b);
        c && !this.V() && this.Cb(!1);
        return c
    };
    z.e.Wa = function (a) {
        z.xz.o.Wa.call(this, a);
        this.isEnabled() || this.Cb(!1)
    };
    z.e.VJ = function () {
        this.Cb(!0)
    };
    z.e.Cb = function (a, b) {
        z.xz.o.Cb.call(this, a);
        if (this.ka && !!(this.N & 64) == a) {
            if (a) {
                if (!this.ka.wa) if (this.uk) {
                    var c = z.Oo(this.m());
                    c ? this.ka.Ap(c.parentNode, c) : this.ka.render(this.m().parentNode)
                } else this.ka.render();
                this.TK = Do(this.m());
                this.CD = z.Ao(this.m());
                Az(this);
                c = !!b && (13 == b.keyCode || 32 == b.keyCode);
                b && (40 == b.keyCode || 38 == b.keyCode) || c && this.uV ? z.bs(this.ka) : this.ka.xb(-1)
            } else {
                this.setActive(!1);
                this.ka.vf = !1;
                if (c = this.m()) z.cj(c, "activedescendant", ""), z.cj(c, "owns", "");
                null != this.Tt && (this.Tt =
                    void 0, (c = this.ka.m()) && z.Fg(c, "", ""))
            }
            this.ka.G(a, !1, b);
            if (!this.Fd) {
                var c = this.v(), d = a ? c.g : c.qa;
                d.call(c, this.K().ua(), "mousedown", this.sP, !0);
                this.Xs && d.call(c, this.ka, "blur", this.ZP);
                d.call(c, this.ma, "tick", this.pp);
                a ? this.ma.start() : this.ma.stop()
            }
        }
        this.ka && this.ka.m() && this.ka.h.removeAttribute("aria-hidden")
    };
    z.e.pp = function () {
        var a = z.Ao(this.m()), b = Do(this.m()), c = this.CD;
        (c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.TK, c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
        c && (this.CD = a, this.TK = b, Az(this))
    };
    z.e.ny = function (a) {
        (a = a.target.m()) && Dz(this, a)
    };
    z.e.RP = function (a) {
        Pp(this, 32) && this.Yb() && this.ka && this.ka.V() && a.stopPropagation()
    };
    z.e.wy = function () {
        if (!as(this.ka)) {
            var a = this.m();
            z.cj(a, "activedescendant", "");
            z.cj(a, "owns", "")
        }
    };
    z.e.hy = function (a) {
        if (this.ub() && a.target instanceof z.lz) {
            a = a.target;
            var b = a.m();
            a.V() && a.N & 2 && null != b && Dz(this, b)
        }
    };
    z.Tp("goog-menu-button", function () {
        return new z.xz(null)
    });
    z.x(Ez, dx);
    Ez.prototype.ha = function (a, b, c, d) {
        var f = Eo(z.Je(a)), g = this.Yh.x + f.x, f = this.Yh.y + f.y, h = Is(a), g = g - h.x, f = f - h.y;
        Ks(new z.Ge(g, f), a, b, c, null, null, d)
    };
    z.x(Fz, Ez);
    Fz.prototype.Mo = 0;
    Fz.prototype.xm = function (a) {
        this.Mo = a
    };
    Fz.prototype.ha = function (a, b, c, d) {
        var f = Vn(a), f = Do(f), g;
        g = z.J(a);
        g = z.Qe(g.Ka);
        g = new z.Ge(this.Yh.x + g.scrollLeft, this.Yh.y + g.scrollTop);
        var h = b, k = Ks(g, a, h, c, f, 10, d);
        if (0 != (k & 496)) {
            if (k & 16 || k & 32) h ^= 2;
            if (k & 64 || k & 128) h ^= 1;
            k = Ks(g, a, h, c, f, 10, d);
            0 != (k & 496) && Ks(g, a, b, c, f, this.Mo, d)
        }
    };
    z.x(z.Gz, z.qz);
    z.e = z.Gz.prototype;
    z.e.rW = !1;
    z.e.iH = 0;
    z.e.Qf = null;
    z.e.Y = function (a) {
        z.Gz.o.Y.call(this, a);
        (a = a.getAttribute("for") || a.htmlFor) && this.attach(this.K().m(a), 1)
    };
    z.e.C = function () {
        z.Gz.o.C.call(this);
        this.Ff.forEach(this.kD, this);
        var a = this.v();
        a.g(this, "action", this.vS);
        a.g(this.K().ua(), "mousedown", this.iI, !0);
        z.D && a.g(this.K().ua(), "contextmenu", this.iI, !0)
    };
    z.e.attach = function (a, b, c, d, f) {
        a && this.Ff.Of(z.ua(a)) || (a ? (b = {
            h: a,
            gK: b,
            gS: c,
            ux: d ? "contextmenu" : "mousedown",
            Gz: f
        }, this.Ff.set(z.ua(a), b)) : b = null, this.wa && this.kD(b), a = z.Ba(this.$S, a), this.m() && this.v().g(this.m(), "keydown", a))
    };
    z.e.$S = function (a, b) {
        if (27 == b.keyCode) a.focus(); else {
            var c = z.ah(this, this.Ta);
            if (c) {
                var c = c.m(), d = new z.Pc(b.gc, c);
                d.target = c;
                if (32 == b.keyCode || 13 == b.keyCode) z.Vc(c) ? z.sd(c, "keydown", !1, d) : z.pd(c, "keydown", !1, d);
                32 == b.keyCode && this.hide()
            }
        }
    };
    z.e.kD = function (a) {
        this.v().g(a.h, a.ux, this.zI);
        "contextmenu" != a.ux && this.v().g(a.h, "keydown", this.yT)
    };
    z.e.detach = function (a) {
        if (!a || !this.Ff.Of(z.ua(a))) throw Error("Menu not attached to provided element, unable to detach.");
        a = z.ua(a);
        if (this.wa) {
            var b = this.Ff.get(a);
            this.v().qa(b.h, b.ux, this.zI)
        }
        this.Ff.remove(a)
    };
    z.e.VJ = function (a, b, c) {
        b = z.ka(a.gK) ? new z.cz(a.h, a.gK, !0) : new Fz(b, c);
        b.xm && b.xm(5);
        z.Hz(this, b, a.gS, a.Gz, a.h)
    };
    z.e.hide = function () {
        this.V() && (this.G(!1), this.V() || (this.iH = (0, z.I)(), this.Qf = null))
    };
    z.e.UG = function () {
        return this.V() || 150 > (0, z.I)() - this.iH
    };
    z.e.vS = function () {
        this.hide()
    };
    z.e.zI = function (a) {
        Iz(this, a)
    };
    z.e.yT = function (a) {
        32 != a.keyCode && 13 != a.keyCode && 40 != a.keyCode || Iz(this, a);
        40 == a.keyCode && z.bs(this)
    };
    z.e.iI = function (a) {
        this.V() && !this.Nf(a.target) && this.hide()
    };
    z.e.Xc = function (a) {
        z.Gz.o.Xc.call(this, a);
        this.hide()
    };
    z.e.D = function () {
        z.Gz.o.D.call(this);
        this.Ff && (this.Ff.clear(), delete this.Ff)
    };
    z.x(Jz, gz);
    z.la(Jz);
    Jz.prototype.B = function (a) {
        var b = Jz.o.B.call(this, a);
        z.hj(b, "goog-submenu");
        Kz(this, a, b);
        return b
    };
    Jz.prototype.w = function (a, b) {
        b = Jz.o.w.call(this, a, b);
        z.hj(b, "goog-submenu");
        Kz(this, a, b);
        var c = z.Le(window.document, "DIV", "goog-menu", b);
        if (c.length) {
            var d = new z.qz(a.K()), c = c[0];
            z.Q(c, !1);
            a.K().ua().body.appendChild(c);
            d.w(c);
            a.th(d, !0)
        }
        return b
    };
    Jz.prototype.ia = function (a, b) {
        var c = this.S(a), d = c && c.lastChild;
        Jz.o.ia.call(this, a, b);
        d && c.lastChild != d && z.gj(d, "goog-submenu-arrow") && c.appendChild(d)
    };
    Jz.prototype.Ee = function (a) {
        Jz.o.Ee.call(this, a);
        var b = a.S(), c = a.K(), c = z.Le(c.Ka, "SPAN", "goog-submenu-arrow", b)[0];
        Lz(a, c);
        c != b.lastChild && b.appendChild(c);
        z.cj(a.m(), "haspopup", "true")
    };
    z.x(Mz, z.lz);
    var eD = 218;
    z.e = Mz.prototype;
    z.e.Xd = null;
    z.e.lB = null;
    z.e.Jz = !1;
    z.e.mc = null;
    z.e.Zr = !1;
    z.e.Uq = !0;
    z.e.xR = !1;
    z.e.C = function () {
        Mz.o.C.call(this);
        this.v().g(this.getParent(), "hide", this.tI);
        this.mc && Qz(this, this.mc, !0)
    };
    z.e.Hb = function () {
        this.v().qa(this.getParent(), "hide", this.tI);
        this.mc && (Qz(this, this.mc, !1), this.Zr || (this.mc.Hb(), z.P(this.mc.m())));
        Mz.o.Hb.call(this)
    };
    z.e.D = function () {
        this.mc && !this.Zr && this.mc.H();
        this.mc = null;
        Mz.o.D.call(this)
    };
    z.e.Mc = function (a, b) {
        Mz.o.Mc.call(this, a);
        b && (this.Ya().vf = !0);
        a || (this.Xd && z.wd(this.Xd), this.Xd = z.vd(this.Ig, eD, this))
    };
    z.e.Iu = function () {
        var a = this.getParent();
        a && as(a) == this && (Pz(this, !0), Oz(this))
    };
    z.e.Ig = function () {
        var a = this.mc;
        a && a.getParent() == this && (Pz(this, !1), z.bh(a, function (a) {
            "function" == typeof a.Ig && a.Ig()
        }))
    };
    z.e.G = function (a, b) {
        var c = Mz.o.G.call(this, a, b);
        c && !this.V() && this.Ig();
        return c
    };
    z.e.Zb = function (a) {
        var b = a.keyCode, c = this.qd() ? 37 : 39, d = this.qd() ? 39 : 37;
        if (!this.Jz) {
            if (!this.isEnabled() || b != c && b != this.Mz) return !1;
            this.Iu();
            z.bs(this.Ya());
            Nz(this)
        } else if (!this.Ya().Zb(a)) if (b == d) this.Ig(); else return !1;
        a.preventDefault();
        return !0
    };
    z.e.KS = function () {
        this.mc.getParent() == this && (Nz(this), this.ji().Mc(this), Oz(this))
    };
    z.e.tI = function (a) {
        a.target == this.ji() && (this.Ig(), Nz(this))
    };
    z.e.nd = function (a) {
        this.isEnabled() && (Nz(this), this.lB = z.vd(this.Iu, eD, this));
        Mz.o.nd.call(this, a)
    };
    z.e.Nd = function (a) {
        Nz(this);
        if (Pp(this, 8) || Pp(this, 16)) return Mz.o.Nd.call(this, a);
        this.Iu();
        return !0
    };
    z.e.Fa = function (a) {
        this.Ya().L(a, !0)
    };
    z.e.bj = function (a, b) {
        this.Ya().Rk(a, b, !0)
    };
    z.e.removeItem = function (a) {
        (a = this.Ya().removeChild(a, !0)) && a.H()
    };
    z.e.ii = function (a) {
        return z.ah(this.Ya(), a)
    };
    z.e.Dl = function () {
        return z.$g(this.Ya())
    };
    z.e.gb = function () {
        return this.Ya().gb()
    };
    z.e.Ya = function () {
        this.mc ? this.Zr && this.mc.getParent() != this && z.Yg(this.mc, this) : this.th(new z.qz(this.K()), !0);
        this.mc.m() || this.mc.B();
        return this.mc
    };
    z.e.th = function (a, b) {
        var c = this.mc;
        a != c && (c && (this.Ig(), this.wa && Qz(this, c, !1)), this.mc = a, this.Zr = !b, a && (z.Yg(a, this), a.G(!1, !0), a.$m = !1, a.Oe(!1), this.wa && Qz(this, a, !0)))
    };
    z.e.Nf = function (a) {
        return this.Ya().Nf(a)
    };
    z.Tp("goog-submenu", function () {
        return new Mz(null)
    });
    z.x(z.Rz, z.Xj);
    z.la(z.Rz);
    z.e = z.Rz.prototype;
    z.e.B = function () {
        this.lO = !0;
        this.h = z.O("div", null, [this.PR = z.O("div", null, [this.dh = z.O("div", "zm-favo-list-content"), this.VC = z.O("div", "zh-favo-add-new-wrap zm-command", this.WV = z.O("a", {
            "class": "zm-favo-dialog-create zg-left",
            href: "javascript:;"
        }, "+ 创建收藏夹"), this.Ew = z.O("a", {
            href: "javascript:;",
            "class": "zg-btn-blue"
        }, "关闭")), this.Qv = z.O("div", "zh-favo-add-new-wrap zm-command", this.DN = z.O("a", {
            href: "javascript:;",
            "class": ""
        }, "取消"), this.XV = z.O("a", {"class": "zm-favo-dialog-create zg-btn-blue", href: "javascript:;"},
            "创建收藏夹"))]), this.Ox = z.O("div", {
            "class": "zh-favo-add-form",
            style: "display:none"
        }, [z.O("div", null, ["标题", this.LB = z.O("span", {"class": "zh-favo-add-title-error"}, "请填写标题")]), z.O("div", "zg-section", this.si = z.O("input", {"class": "zg-form-text-input"})), z.O("div", null, "描述（可选）"), z.O("div", {"class": "zg-section zg-form-text-input"}, this.Zj = z.O("textarea", {
            "class": "zg-editor-input",
            style: "height:66px"
        })), this.$I = z.O("label", null, [this.ZG = z.O("input", {
            type: "radio",
            checked: "checked",
            value: "public",
            name: "mode"
        }),
            z.O("strong", null, " 公开 "), z.O("span", "zg-gray-normal", "公开后不能设置为私密")]), this.gH = z.O("br"), this.YI = z.O("label", null, [this.YG = z.O("input", {
            type: "radio",
            value: "private",
            name: "mode"
        }), z.O("strong", null, " 私密 "), z.O("span", "zg-gray-normal", "只有你可以查看这个收藏夹")]), z.O("div", "zm-command", [this.rx = z.O("label", {
            href: "javascript:;",
            "class": "zh-favo-error-message-label zg-left"
        }, ""), this.xB = z.O("a", {
            href: "javascript:;",
            "class": "zg-mr10"
        }, "取消"), this.rr = z.O("a", {href: "javascript:;", "class": "zg-mr10"}, "完成"), this.Ov = z.O("a",
            {"class": "zg-btn-blue"}, "确认创建")])])]);
        z.Q(this.LB, !1);
        z.Q(this.Qv, !1);
        (new z.Xs(this.MB)).w(this.si);
        (new z.Xs(this.bx)).w(this.Zj);
        z.y(this.xz, function (a) {
            Tz(this, a)
        }, this);
        this.xz.length || (this.dh.innerHTML = '\x3cdiv id\x3d"zh-fav-list-item-place-holder" class\x3d"zg-r5px zm-fav-list-item-place-holder"\x3e你可以创建多个收藏夹，将答案分类收藏\x3c/div\x3e ', z.Q(this.Qv, !0), z.Q(this.VC, !1));
        Sz(this);
        this.sa.S().innerHTML = "";
        this.sa.S().appendChild(this.h);
        this.sa.ha()
    };
    z.e.cc = function () {
        this.jN || (this.jN = !0, this.v().g(this.xB, "click", function () {
            this.Xa ? Xz(this, 0) : $z(this);
            dA("click_add_collection_cancel")
        }).g(this.WV, "click", function () {
            z.Y.tb({type: "ga_click_add_collection"});
            Xz(this, 1);
            z.zi("collect", "click_add_collection_start", "collect_answer_box")
        }).g(this.Ew, "click", function () {
            dA("click_add_collection_close");
            $z(this)
        }).g(this.XV, "click", function () {
            z.Y.tb({type: "ga_click_add_collection"});
            Xz(this, 1)
        }).g(this.DN, "click", function () {
            $z(this)
        }).g(this.rr, "click",
            function () {
                $z(this)
            }).g(this.Ov, "click", function () {
            var a = this.Zj.value, b = this.si.value;
            a && dA("click_add_collection_discription", a);
            b && dA("click_add_collection_title", b);
            this.jh()
        }).g(this.dh, "click", this.rT).g(this.si, "change", function () {
            z.Q(this.LB, !1)
        }).g(this.ZG, "click", function () {
            dA("click_add_collection_public")
        }).g(this.YG, "click", function () {
            dA("click_add_collection_private")
        }))
    };
    z.e.rT = function (a) {
        var b = z.tf(a.target, "A");
        if (b && !this.locked) {
            a = b.getAttribute("data-lid");
            var c = !1;
            z.W.has(b, "zm-favo-list-item-link-active") ? (c = !0, this.rE = a) : this.oE = a;
            b = new z.Fr;
            b.add("answer_id", this.Xa);
            b.add("favlist_id", a);
            this.VA = new z.Z(!0);
            this.locked = !0;
            this.v().ya(this.VA, "complete", this.CM);
            this.VA.ajax(c ? "/collection/remove" : "/collection/add", b.ze())
        }
    };
    z.e.CM = function () {
        this.locked = !1;
        this.Ew.innerHTML = "关闭";
        var a = z.Rn(this.VA);
        a && !a.r ? (a = z.Qo("zm-favo-list-item-link", this.dh), z.y(a, function (a) {
            var c = a.getAttribute("data-lid"), d = z.N("num", a), f = (0, window.parseInt)(d.innerHTML, 10);
            c === this.rE ? (d.innerHTML = f - 1 + "", z.W.remove(a, "zm-favo-list-item-link-active")) : c === this.oE && (d.innerHTML = f + 1 + "", z.W.add(a, "zm-favo-list-item-link-active"))
        }, this), this.oE = this.rE = null, Hr("Favorite", "add_favorite")) : z.X.message("添加失败: " + a.msg)
    };
    z.e.lk = function () {
        this.cc();
        this.Ew.innerHTML = "关闭";
        this.Xa ? (z.Q(this.rr, !1), Xz(this, 0)) : (Xz(this, 1), z.Q(this.xB, !1), this.rr.innerHTML = "取消")
    };
    z.e.show = function (a) {
        a ? (Wz(this), this.sa.G(!0), this.lk()) : (Sz(this, "添加到收藏夹", '\x3cdiv style\x3d"text-align: center; color: #999;"\x3e收藏夹加载中\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e'), this.sa.G(!0), this.ls())
    };
    z.e.ls = function () {
        this.Xa && window.$.get("/collections/json", {answer_id: this.Xa}).done((0, z.q)(this.bT, this))
    };
    z.e.bT = function (a) {
        a && !a.r && (this.xz = a.msg[0], this.mt = a.msg[1], Wz(this), this.lk())
    };
    z.e.jh = function () {
        if (!this.xhr || !this.xhr.tc()) {
            (0, window.$)(this.rx).text("").hide();
            var a = z.sr(this.si.value);
            if (a && a !== this.MB) {
                a = Yz(this);
                this.Xa && a.add("answer_id", this.Xa);
                if (this.Xl) {
                    if (this.ZQ.ze() === a.ze()) {
                        $z(this);
                        return
                    }
                    a.add("favlist_id", this.qE[0])
                }
                this.xhr = new z.Z(!0);
                bA(this, this.xhr, this.Ov, this.Xl);
                this.v().ya(this.xhr, "complete", this.uM);
                this.xhr.ajax(this.Xl ? "/collection/update" : "/collection/create", a.ze())
            } else z.Q(this.LB, !0)
        }
    };
    z.e.uM = function () {
        var a = z.Rn(this.xhr);
        a && !a.r ? this.Xl ? ($z(this), z.X.message("编辑成功"), (0, window.setTimeout)(function () {
            window.location.reload()
        }, 1E3), this.Xl = !1) : this.Xa ? (z.Q(this.Qv, !1), z.Q(this.VC, !0), Xz(this, 0), this.mt.push(a.msg[0]), Tz(this, a.msg, !0), this.si.value = "", this.Zj.value = "") : ($z(this), z.X.message("创建成功"), (0, window.setTimeout)(function () {
            window.location.href = "/collections/mine"
        }, 1E3)) : cA(this.rx, this.Xl, a.msg)
    };
    z.e.V = function () {
        return this.sa.V()
    };
    var aA = "close";
    z.Rz.prototype.Mg = function () {
        (0, window.$)(window).on("beforeunload.FavoDiag", (0, z.q)(function () {
            return "你对收藏夹的修改还未保存，确认离开该页面吗？"
        }, this))
    };
    z.Rz.prototype.bi = function () {
        (0, window.$)(window).off("beforeunload.FavoDiag")
    };
    z.x(z.eA, z.lz);
    z.Tp("goog-checkbox-menuitem", function () {
        return new z.eA(null)
    });
    z.l(fA, z.R);
    fA.prototype.Y = function (a) {
        z.R.prototype.Y.call(this, a);
        var b = (0, window.$)(a).data(), c = new z.qz, d = new z.eA("禁止转载");
        d.Kc(!b.copyable);
        c.Fa(d);
        c.Fa(new z.pz);
        gA(this, c);
        c.Fa(new z.pz);
        c.Fa(new z.lz("删除"));
        this.v().g(c, "action", this.ty).ya(c, "show", this.DO);
        z.W.add(c.m(), "zg-gray-normal");
        (0, window.$)(c.m()).addClass("setting-menu");
        b = new z.xz("comment", c);
        b.uk = !0;
        z.zz(b);
        yz(b);
        b.Ob = z.Fl;
        b.w(a);
        this.ka = c
    };
    fA.prototype.DO = function () {
        var a = this;
        window.$.get("/answer/comment_permission", {answer_id: this.Mh.jb}).then(function (b) {
            if (b && !b.r) {
                var c = b.msg;
                a.vA.forEach(function (a) {
                    a.X() === c && a.Kc(!0)
                });
                a.gl = c
            } else z.X.message(b.msg)
        })
    };
    fA.prototype.aB = function (a) {
        ZC.aB(this.Mh.jb, a);
        (0, window.$)(".copyright", FC(this.Mh)).text(a ? "作者保留权利" : "禁止转载").attr("href", a ? "/terms#sec-licence-1" : "/terms#sec-licence-6")
    };
    fA.prototype.ty = function (a) {
        a = a.target;
        var b = a.X();
        if ("禁止转载" === b) this.aB(!a.qf()); else if ("删除" === b) iA(this); else if (b in hA) if (this.gl === b) jA(this); else if ("review_comment" === this.gl) {
            var c = this;
            a = void 0;
            var d;
            "all_can_comment" === b ? (a = "确认开放评论吗？", d = "开放评论后，评论提交即公开显示。\x3cbr/\x3e当前所有待审核评论不会公开，为您自动保存，若切换回预审评论可以继续审核。") : "nobody_can_comment" === b && (a = "确认关闭评论吗？", d = "关闭评论后，所有人无法提交评论。\x3cbr/\x3e当前所有待审核评论不会公开，为您自动保存，若切换回预审评论可以继续审核。");
            z.X.confirm(a, d, function (a) {
                a && kA(c, b)
            });
            jA(this)
        } else kA(this, b)
    };
    var hA = z.T.Jd ? {
            all_can_comment: "开放评论",
            review_comment: "预审评论",
            nobody_can_comment: "关闭评论"
        } : {all_can_comment: "允许任何人评论", followee_can_comment: "允许我关注的人评论", nobody_can_comment: "关闭评论"},
        lA = "set_permission";
    var iG = /a(:(link|visited|active|hover))?/;
    oA.prototype.clone = function () {
        var a = new oA;
        a.rh = this.rh.concat();
        a.Jn = this.Jn;
        return a
    };
    var jG = /(^|;|{)\s*color:([^;]+);/g, sA = {}, vA = {}, kG = {},
        lG = "color visibility quotes list-style-type list-style-image list-style-position list-style page-break-inside orphans widows font-family font-style font-variant font-weight text-indent text-align text-transform white-space caption-side border-collapse border-spacing empty-cells cursor".split(" "),
        mG = "font-family font-size font-weight font-variant font-style color text-align text-decoration text-indent text-transform letter-spacing white-space word-spacing".split(" ");
    var nG;
    z.x(z.wA, z.G);
    z.e = z.wA.prototype;
    z.e.F = null;
    z.e.ZM = !0;
    z.e.DK = function () {
        this.F && (this.disable(this.F), this.F = null)
    };
    z.e.enable = function (a) {
        this.F == a && (this.ec = !0)
    };
    z.e.disable = function (a) {
        this.F == a && (this.ec = !1)
    };
    z.e.isEnabled = function (a) {
        return this.F == a ? this.ec : !1
    };
    z.e.Oq = z.El;
    z.e.aH = z.El;
    z.e.D = function () {
        this.F && this.DK(this.F);
        z.wA.o.D.call(this)
    };
    z.EA = z.$o({py: 1, SP: 2, us: 3, Kj: 4, vs: 5, execCommand: 6, queryCommandValue: 7, TI: 8, yN: 10, xN: 11});
    nG = {8: !0, 10: !0, 11: !0};
    z.wA.prototype.execCommand = function (a, b) {
        var c = this.aH(a);
        c || (z.B && z.aB(this.F, !0, !0), this.F.ci());
        try {
            var d = this.gf.apply(this, arguments)
        } finally {
            c || (this.F.df(), z.$A(this.F))
        }
        return d
    };
    z.wA.prototype.He = function () {
        return !1
    };
    var FA, IA;
    z.x(DA, z.G);
    DA.prototype.Ha = null;
    DA.prototype.Ic = null;
    FA = "change";
    z.GA = "delayedchange";
    IA = {
        pX: "cvc",
        JX: "load",
        dY: "unload",
        hX: "beforechange",
        nX: FA,
        rX: z.GA,
        iX: "beforefocus",
        uX: "focus",
        lX: "blur",
        kX: "beforetab",
        BX: "ifrsz",
        jX: "beforeselectionchange",
        SX: "selectionchange"
    };
    z.KA = 0;
    z.oG = null;
    z.e = DA.prototype;
    z.e.Wg = !1;
    z.e.OK = !1;
    z.e.fv = !1;
    z.e.m = function () {
        return this.Ha
    };
    z.e.addListener = function (a, b, c, d) {
        var f = this.m();
        LF && f && this.nc() && (f = f.ownerDocument);
        d ? z.yd(this.fc, f, a, b, c, d) : this.fc.g(f, a, b, c)
    };
    var JA = 15, HA = 250;
    DA.prototype.nc = z.Fl;
    DA.prototype.Fo = z.Fl;
    DA.prototype.SJ = z.El;
    var NA = {46: !0, 8: !0};
    z.C || (NA[9] = !0);
    var OA = {86: !0, 88: !0};
    z.ll && !z.B && (NA[229] = !0);
    DA.prototype.Dw = function () {
        this.fc && this.fc.removeAll();
        if ((z.Ui || z.Vj) && this.nc() && this.SJ()) {
            try {
                var a = this.ib.Va();
                a.removeEventListener("keydown", this.ln, !1);
                a.removeEventListener("touchend", this.ln, !1)
            } catch (b) {
            }
            delete this.ln
        }
        if (z.ug && this.nc()) {
            try {
                a = this.ib.Va(), a.removeEventListener("focus", this.pw, !1), a.removeEventListener("blur", this.ow, !1)
            } catch (b) {
            }
            delete this.pw;
            delete this.ow
        }
        this.ue && this.ue.stop();
        this.Jr.stop()
    };
    DA.prototype.D = function () {
        this.Ho() || this.uc();
        this.Ic && this.execCommand("clearlorem");
        this.$l = z.KA;
        for (var a in this.Rb) {
            var b = this.Rb[a];
            b.Oq() || b.disable(this)
        }
        this.ib = this.Ha = null;
        this.Dw();
        this.tl && (z.nd(this.tl), this.tl = null);
        this.im = null;
        this.fc && (this.fc.H(), this.fc = null);
        for (; a = this.cX.pop();) a.H();
        z.oG == this.id && (z.oG = null);
        for (var c in this.Rb) a = this.Rb[c], a.ZM && a.H();
        delete this.Rb;
        DA.o.D.call(this)
    };
    var pG = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"];
    DA.prototype.hB = function () {
        if (IF || !this.nc()) this.fc.g(this.m(), "DOMSubtreeModified", this.qy); else {
            var a = this.ib.ua();
            this.fc.g(a, pG, this.qy, !0);
            this.fc.g(a, "DOMAttrModified", (0, z.q)(this.RF, this, this.qy), !0)
        }
    };
    var UA = {8: 1, 9: 1, 13: 1, 33: 1, 34: 1, 35: 1, 36: 1, 37: 1, 38: 1, 39: 1, 40: 1, 46: 1},
        VA = {65: !0, 86: !0, 88: !0}, XA = {8: 1, 9: 1, 13: 1, 27: 1, 33: 1, 34: 1, 37: 1, 38: 1, 39: 1, 40: 1};
    z.e = DA.prototype;
    z.e.zo = function (a, b) {
        for (var c = this.Qj[a], d = z.yb(arguments, 1), f = 0; f < c.length; ++f) {
            var g = c[f];
            if ((g.isEnabled(this) || nG[a]) && g[z.EA[a]].apply(g, d)) return !0
        }
        return !1
    };
    z.e.oR = function (a, b) {
        for (var c = this.Qj[a], d = z.yb(arguments, 1), f = 0; f < c.length; ++f) {
            var g = c[f];
            (g.isEnabled(this) || nG[a]) && g[z.EA[a]].apply(g, d)
        }
    };
    z.e.iu = function (a, b, c) {
        for (var d = this.Qj[a], f = z.yb(arguments, 1), g = 0; g < d.length; ++g) {
            var h = d[g];
            if (h.isEnabled(this) || nG[a]) f[0] = h[z.EA[a]].apply(h, f)
        }
        return f[0]
    };
    z.e.mf = function (a) {
        z.Uc && 65 == a.keyCode && SA(this, a);
        (z.B || QA(this, a)) && !this.zo(1, a) && RF && WA(this, a)
    };
    z.e.TP = function (a) {
        if (z.B) {
            if (!QA(this, a)) return
        } else this.dy = !0, this.ci();
        this.zo(2, a) || RF || WA(this, a)
    };
    z.e.UP = function (a) {
        z.B || !this.dy && !MA(a) || this.fo();
        this.zo(3, a);
        SA(this, a)
    };
    z.e.execCommand = function (a, b) {
        for (var c = arguments, d, f = this.Qj[6], g = 0; g < f.length; ++g) {
            var h = f[g];
            if (h.isEnabled(this) && h.He(a)) {
                d = h.execCommand.apply(h, c);
                break
            }
        }
        return d
    };
    z.e.queryCommandValue = function (a) {
        var b = this.uc() && this.tf;
        if (z.pa(a)) return this.du(a, b);
        for (var c = {}, d = 0; d < a.length; d++) c[a[d]] = this.du(a[d], b);
        return c
    };
    z.e.du = function (a, b) {
        for (var c = this.Qj[7], d = 0; d < c.length; ++d) {
            var f = c[d];
            if (f.isEnabled(this) && f.He(a) && (b || f.Oq())) return f.queryCommandValue(a)
        }
        return b ? null : !1
    };
    z.e.RF = function (a, b) {
        if (!TA(this, FA)) {
            var c = b.gc;
            try {
                if (c.originalTarget.prefix || "scrollbar" == c.originalTarget.nodeName) return
            } catch (d) {
                return
            }
            c.prevValue != c.newValue && a.call(this, c)
        }
    };
    z.e.qy = function (a) {
        TA(this, FA) || (a = a.wF ? a.gc : a, a.target.firebugIgnore || this.ue.start())
    };
    z.e.ss = function () {
        z.C && this.execCommand("clearlorem", !0);
        z.B && this.ex();
        this.df()
    };
    z.e.mQ = function () {
        var a = this.HJ;
        this.HJ = null;
        z.$A(this, void 0, a)
    };
    z.e.ci = function () {
        TA(this, "beforechange") || this.dispatchEvent("beforechange")
    };
    z.e.df = function (a) {
        cB(this, !0, a)
    };
    z.e.fo = function () {
        TA(this, FA) || (this.ue && this.ue.stop(), TA(this, z.GA) || this.Jr.start())
    };
    z.e.JE = function () {
        TA(this, z.GA) || (this.Jr.stop(), this.dispatchEvent(z.GA))
    };
    z.e.ex = function () {
        this.IE();
        this.KE()
    };
    z.e.IE = function () {
        TA(this, "beforefocus") || (this.execCommand("clearlorem", !0), this.dispatchEvent("beforefocus"))
    };
    z.e.KE = function () {
        if (!TA(this, "focus")) {
            z.oG = this.id;
            this.tf = !0;
            this.dispatchEvent("focus");
            if (z.B) {
                var a = this.m(), b = z.ZA(this);
                if (b) {
                    var c = z.Gt(b);
                    0 != z.Ht(b) || c && c != a && "BODY" != c.tagName || z.Pu(a)
                }
            }
            !JF && this.nc() && this.ib.Va().parent.getSelection().removeAllRanges()
        }
    };
    z.e.Mr = function () {
        TA(this, "blur") || (z.oG == this.id && (z.oG = null), this.tf = !1, this.dispatchEvent("blur"))
    };
    z.e.Il = function (a) {
        z.oG = this.id;
        if (z.C) {
            var b = a.target;
            b && "A" == b.tagName && a.ctrlKey && this.im.Va().open(b.href)
        }
        this.fv = !0
    };
    z.e.jy = function () {
        this.fv = !1
    };
    z.e.xs = function (a) {
        if (!this.OK || this.fv) this.fv = !1, this.dispatchEvent("beforeselectionchange"), z.$A(this, a), z.C && (this.HJ = a.target, this.IJ.start())
    };
    z.e.Al = function () {
        if (this.queryCommandValue("usinglorem")) return " ";
        if (!this.uc()) return this.Ic.innerHTML;
        var a = this.m(), b = a.cloneNode(!1), a = a.innerHTML;
        z.C && a.match(/^\s*<script/i) && (a = " " + a);
        b.innerHTML = a;
        this.oR(11, b);
        return this.iu(10, b.innerHTML)
    };
    z.e.Pd = function (a, b, c, d) {
        if (!this.Ho()) {
            d && this.execCommand("clearlorem");
            b && a && (b = "\x3cp\x3e" + b + "\x3c/p\x3e");
            c && z.aB(this, !1, !0);
            a = b;
            if (b = this.m()) {
                if (this.nc() && z.D) for (var f = b.ownerDocument.getElementsByTagName("HEAD"), g = f.length - 1; 1 <= g; --g) f[g].parentNode.removeChild(f[g])
            } else b = this.Ic;
            b && RA(this, a, b);
            d && this.execCommand("updatelorem");
            this.uc() && (c ? (z.B && Nq(this.ue), cB(this)) : this.df())
        }
    };
    z.e.TB = function () {
        var a = this.ib.ua();
        a.designMode = "on";
        z.OF && a.execCommand("styleWithCSS", !1, !1)
    };
    z.e.KG = function () {
        this.il && fB(this) && z.Lg(this.il, this.m())
    };
    z.e.uc = function () {
        return 2 == this.$l
    };
    z.e.Ho = function () {
        return 1 == this.$l
    };
    z.e.focus = function () {
        if (!z.CA && this.nc()) this.ib.Va().focus(); else {
            if (z.ug) var a = this.Tk.pageXOffset, b = this.Tk.pageYOffset;
            this.m().focus();
            z.ug && this.Tk.scrollTo(a, b)
        }
    };
    z.e.Wf = function () {
        !z.GF && z.B || z.eB(this);
        this.focus()
    };
    z.e.Ke = function (a) {
        this.$l = 1;
        var b = this.Ic;
        this.nodeName = b.nodeName;
        this.cssText = b.style.cssText;
        z.hj(b, "editable");
        this.Ez(a)
    };
    z.e.Ez = function (a) {
        var b = this.Ic;
        if (b) {
            var b = b.innerHTML, c = {}, b = this.iu(8, b, c), d = this.im.B("IFRAME", this.GF());
            if (fB(this)) {
                var f = (0, z.q)(this.wG, this, d, b, c);
                this.tl = z.F(d, "load", f, !0);
                a && (d.src = a)
            }
            this.lD(d);
            fB(this) || this.wG(d, b, c)
        }
    };
    z.e.ts = function () {
        z.C && Au(this.ib.Va());
        z.oG != this.id && this.execCommand("updatelorem");
        if ((z.Ui || z.Vj) && this.nc() && this.SJ()) {
            var a = this.ib.Va();
            this.ln = (0, z.q)(a.focus, a);
            a.addEventListener("keydown", this.ln, !1);
            a.addEventListener("touchend", this.ln, !1)
        }
        z.ug && this.nc() ? (this.pw = (0, z.q)(this.ex, this), this.ow = (0, z.q)(this.Mr, this), a = this.ib.Va(), a.addEventListener("focus", this.pw, !1), a.addEventListener("blur", this.ow, !1)) : (QF ? (this.addListener("focus", this.KE), this.addListener(z.Ol, this.IE)) : this.addListener("focus",
            this.ex), this.addListener("blur", this.Mr, z.B));
        z.B ? this.hB() : (this.addListener(["beforecut", "beforepaste", "drop", "dragend"], this.ci), this.addListener(["cut", "paste"], ip(this.df)), this.addListener("drop", this.ss));
        this.addListener(z.D ? "dragend" : "dragdrop", this.ss);
        this.addListener("keydown", this.mf);
        this.addListener("keypress", this.TP);
        this.addListener("keyup", this.UP);
        this.IJ = new Mq(this.mQ, 250, this);
        this.MO && this.addListener("click", dB);
        this.addListener("mousedown", this.Il);
        this.OK ? (this.fc.g(this.ib.ua(),
            "mouseup", this.xs), this.addListener("dragstart", this.jy)) : this.addListener("mouseup", this.xs);
        this.KG();
        cB(this);
        this.dispatchEvent("load");
        for (var b in this.Rb) this.Rb[b].enable(this)
    };
    z.e.lD = function (a) {
        var b = this.Ic;
        a.className = b.className;
        a.id = b.id;
        z.Po(a, b)
    };
    z.e.Vx = function (a) {
        var b = Qn(z.J(this.Ic));
        return new zA(this.id, b, !1, !1, a)
    };
    z.e.fL = function (a, b, c) {
        c = this.Vx(c);
        fB(this) ? (a = (a.contentDocument || a.contentWindow.document).body, z.CA && (a.contentEditable = !0), a.className = "editable", a.setAttribute("g_editable", !0), a.hideFocus = !0, a.id = c.hF, z.rg(a, c.Bx), a.innerHTML = b) : BA(c, b, new AA(this.m(), this.il), a)
    };
    z.e.wG = function (a, b, c) {
        this.tl && (z.nd(this.tl), this.tl = null);
        a.allowTransparency = "true";
        this.fL(a, b, c);
        PA(this, (a.contentDocument || a.contentWindow.document).body);
        !z.CA && this.nc() && this.TB();
        this.ts()
    };
    z.e.GF = function () {
        var a = "padding:0;" + this.Ic.style.cssText;
        z.qp(a, ";") || (a += ";");
        a += "background-color:white;";
        z.C && (a += "overflow:visible;");
        return {frameBorder: 0, style: a}
    };
    var qG;
    z.x(z.gB, DA);
    z.e = z.gB.prototype;
    z.e.PG = !1;
    z.e.uR = !1;
    z.e.Fo = function () {
        return this.PG
    };
    z.e.$F = function () {
        TA(this, FA) || hB(this)
    };
    z.e.pB = function () {
        if (this.Tp ? 0 : this.Tp = !0) {
            var a = !1, b = YA(this);
            if (b) {
                var c, d = YA(this), f = d.contentDocument.body;
                c = f.parentNode;
                0 === (0, window.parseInt)(Fo(d, "height"), 10) && z.rg(d, "height", "1px");
                Qn(z.J(f)) ? d = c.offsetHeight : (d = c.scrollHeight, c.clientHeight != c.offsetHeight && (d += qG || (qG = z.Ug())));
                c = d;
                this.kS && (c = Math.max(c, this.kS));
                (0, window.parseInt)(Fo(b, "height"), 10) != c && (b.style.height = c + "px", a = !0)
            }
            this.Tp = !1;
            a && this.dispatchEvent("ifrsz")
        }
    };
    z.e.Dy = "";
    var rG = !1;
    z.e = z.gB.prototype;
    z.e.nc = function () {
        return !z.CA
    };
    z.e.hB = function () {
        z.gB.o.hB.call(this);
        if (this.nc()) {
            var a = YA(this).ownerDocument;
            this.fc.g(a, pG, this.$F, !0);
            this.QR = z.ld(this.ib.Va(), "load", this.pB, !0, this);
            this.fc.g(a, "DOMAttrModified", (0, z.q)(this.RF, this, this.$F), !0)
        }
    };
    z.e.fo = function () {
        TA(this, FA) || (z.gB.o.fo.call(this), this.nc() && this.pB())
    };
    z.e.Mr = function () {
        if (!TA(this, "blur") && (z.gB.o.Mr.call(this), !z.CA && !JF)) {
            var a = this.ib.Va(), b = !1;
            z.nd(this.rH);
            this.rH = z.ld(a.document.body, "dragover", function () {
                b = !0
            });
            z.t.setTimeout((0, z.q)(function () {
                if (!b && this.ib) {
                    var a = z.ZA(this), d = this.ib.Va();
                    Au(d);
                    a && (a.collapse(!0), a.select())
                }
            }, this), 0)
        }
    };
    z.e.TB = function () {
        z.gB.o.TB.call(this);
        var a = this.ib.ua();
        a.execCommand("enableInlineTableEditing", !1, "false");
        a.execCommand("enableObjectResizing", !1, "false")
    };
    z.e.KG = function () {
        this.nc() || rG || (this.il && z.Lg(this.il, this.m()), rG = !0)
    };
    z.e.Ez = function (a) {
        if (this.nc()) z.gB.o.Ez.call(this, a); else if (a = this.Ic) PA(this, a), a.contentEditable = !0, RA(this, a.innerHTML, a), this.ts()
    };
    z.e.ts = function () {
        if (this.nc()) {
            var a = this;
            z.t.setTimeout(function () {
                iB(a)
            }, 0)
        }
        z.gB.o.ts.call(this)
    };
    z.e.GF = function () {
        return {frameBorder: 0, style: "padding:0;"}
    };
    z.e.lD = function (a) {
        if (!this.uR) {
            var b = this.Ic;
            b && (this.PG = "auto" == z.xg(b, "overflowY"))
        }
        var b = this.Ic, c = z.J(b), d = b.style.width, f = b.style.height;
        z.rg(b, "visibility", "hidden");
        var c = c.B("DIV", {style: "height:0;clear:both", innerHTML: "\x26nbsp;"}), g = c.cloneNode(!0);
        b.insertBefore(c, b.firstChild);
        b.appendChild(g);
        g = z.Je(b);
        if ((c = z.C && b.currentStyle) && Qn(z.J(g)) && "auto" != c.width && "auto" != c.height && !c.boxSizing) g = z.Ng(b, c.width, "width", "pixelWidth"), c = z.Ng(b, c.height, "height", "pixelHeight"), g = new z.He(g, c);
        else var c = z.fo(b), g = z.Pg(b), h = z.Sg(b),
            g = new z.He(c.width - h.left - g.left - g.right - h.right, c.height - h.top - g.top - g.bottom - h.bottom);
        c = g.width;
        g = g.height;
        h = "";
        this.Fo() && (h = "\x26nbsp;", z.rg(b, "position", "relative"), z.rg(b, "overflow", "visible"), z.rg(a, "position", "absolute"), z.rg(a, "top", "0"), z.rg(a, "left", "0"));
        z.Fg(b, c, g);
        Qn(z.J(b)) && z.rg(b, "lineHeight", "0");
        z.Lu(b, h);
        z.Fg(a, c, g);
        z.Fg(b, d, f);
        z.rg(b, "visibility", "");
        b.appendChild(a);
        fB(this) || (b = a.contentWindow.document, Qn(z.J(a.ownerDocument)) && (b.open(),
            a = z.Hd("\x3c!DOCTYPE HTML\x3e\x3chtml\x3e\x3c/html\x3e", null), b.write(z.Gd(a)), b.close()))
    };
    z.e.Vx = function (a) {
        var b = this.Ic;
        if (b) return new zA(this.id, Qn(z.J(b)), !0, this.Fo(), a);
        throw Error("no field");
    };
    z.e.fL = function (a, b, c) {
        z.rg(a, "visibility", "hidden");
        c = this.Vx(c);
        var d = this.Ic, f = this.il;
        if (!this.Dy) {
            var g = this.Ic;
            if (g) {
                var h = g.ownerDocument, k = z.ua(h);
                if (!kG[k]) {
                    for (var m = z.ua(h), n = [], h = nA(h.styleSheets), r = 0, w; w = h[r]; r++) if ((w = mA(w)) && w.length) for (var H = 0, K = w.length; H < K; H++) {
                        var M = new oA, ca;
                        ca = M;
                        var Xa = w[H], cb = Xa.style;
                        if (cb) {
                            var Ha = void 0, xa = "";
                            cb && (Ha = Xa.selectorText) && (xa = cb.cssText) ? z.C && (xa += "/* */") : Xa.cssText && (xa = /([^\{]+)\{/, Ha = xa.exec(Xa.cssText)[1], xa = Xa.cssText.replace(xa, "").replace(/\}[^\}]*$/g,
                                ""));
                            if (Ha) {
                                Xa = ca;
                                Xa.rh = [];
                                Ha = Ha.split(/,\s*/gm);
                                for (cb = 0; cb < Ha.length; cb++) {
                                    var Dd = Ha[cb];
                                    0 < Dd.length && Xa.rh.push(new qA(Dd))
                                }
                                ca.Jn = xa;
                                ca = !0
                            } else ca = !1
                        } else ca = !1;
                        ca && n.push(M)
                    }
                    kG[m] = n
                }
                m = kG[k];
                k = [];
                for (n = 0; n < m.length; n++) k.push(m[n].clone());
                h = new uA(g);
                r = new rA("body");
                for (m = 0; m < k.length; m++) for (w = k[m].rh, n = w.length, H = 0; H < n; H++) {
                    K = w[H];
                    M = K;
                    ca = h.uid;
                    if (M.Zv[ca]) ca = M.Zv[ca]; else {
                        for (var xa = 0, cb = Ha = Xa = null, Dd = h.aI, hi = Dd.length, le = 0; le <= M.zi.length; le++) {
                            for (Ha = M.zi[le]; xa < hi;) {
                                var Md = Dd[xa];
                                if (Ha &&
                                    tA(Ha, Md)) {
                                    Xa = {UE: xa, JJ: le};
                                    xa++;
                                    break
                                } else cb && tA(cb, Md) && (Xa = {UE: xa, JJ: le - 1});
                                xa++
                            }
                            cb = Ha
                        }
                        ca = M.Zv[ca] = Xa
                    }
                    ca && (M = ca.JJ, K = K.zi, xa = K.length - 1, ca.UE == h.aI.length - 1 || M < xa ? (K = K.concat(), K.splice(0, M + 1, r), M = new qA, M.zi = K, w.push(M)) : 0 < M && M == xa && (M = new qA, M.zi = [r, K[xa]], w.push(M)))
                }
                h = new oA;
                g = g.currentStyle || z.Je(g).defaultView.getComputedStyle(g, "") || {};
                m = new qA;
                m.zi = [new rA("html")];
                h.rh = [m];
                r = {};
                for (m = 0; n = lG[m]; m++) r[n] = g[z.db(n)];
                pA(h, r);
                k.push(h);
                h = new oA;
                r = new qA;
                r.zi = [new rA("body")];
                w = {
                    position: "relative",
                    top: "0", left: "0", right: "auto", display: "block", visibility: "visible"
                };
                for (m = 0; n = mG[m]; m++) w[n] = g[z.db(n)];
                pA(h, w, !0);
                h.rh = [r];
                k.push(h);
                g = [];
                n = k.length;
                for (m = 0; m < n; m++) {
                    w = k[m];
                    h = g;
                    H = w.rh.length;
                    r = !1;
                    for (K = 0; K < H; K++) {
                        M = w.rh[K].zi;
                        ca = M.length;
                        for (xa = 0; xa < ca; xa++) h.push(M[xa].IG, " ");
                        K < H - 1 && h.push(",");
                        z.B && !z.E("1.9a") && (r = r || iG.test(M[ca - 1].IG))
                    }
                    w = w.Jn;
                    r && (w = w.replace(jG, "$1 color: $2 ! important; "));
                    h.push("{", w, "}\n")
                }
                this.Dy = g.join("")
            }
        }
        d = new AA(d, f + this.Dy);
        c.kr && (f = z.Pg(d.bX), (f.top || f.left || f.right ||
            f.bottom) && z.rg(a, "margin", -f.top + "px " + -f.right + "px " + -f.bottom + "px " + -f.left + "px"));
        BA(c, b, d, a);
        iB(this);
        z.rg(a, "visibility", "visible")
    };
    z.e.Dw = function () {
        z.nd(this.rH);
        z.nd(this.QR);
        z.gB.o.Dw.call(this)
    };
    var KB = {};
    KB._default_ = {
        js: function (a) {
            return window.$.get("/node/CommentV2", {params: {comment_id: a}})
        }, Aj: rp, Bj: rp, add: function (a) {
            return window.$.post("/node/AnswerCommentAddV2", {method: "add_comment", params: a})
        }, remove: function (a) {
            return window.$.post("/node/CommentV2", {method: "remove_comment", params: {comment_id: a}})
        }, jt: function (a, b) {
            return window.$.post("/node/CommentV2", {
                method: b ? "like_comment" : "undo_like_comment",
                params: {comment_id: a}
            })
        }
    };
    KB.answer = {
        Aj: function (a, b) {
            return window.$.get("/node/AnswerCommentBoxV2", {params: {answer_id: a, load_all: b}})
        }, Bj: function (a) {
            return window.$.get("/node/AnswerCommentListV2", {params: {answer_id: a}})
        }, add: function (a) {
            return window.$.post("/node/AnswerCommentAddV2", {method: "add_comment", params: a})
        }, YM: function (a, b) {
            return window.$.post("/node/AnswerCommentV2", {
                method: "author_remove_comment",
                params: {comment_id: a, is_block: b}
            })
        }
    };
    KB.question = {
        Aj: function (a) {
            return window.$.get("/node/QuestionCommentBoxV2", {params: {question_id: a}})
        }, Bj: function (a) {
            return window.$.get("/node/QuestionCommentListV2", {params: {question_id: a}})
        }, add: function (a) {
            return window.$.post("/node/QuestionCommentAddV2", {method: "add_comment", params: a})
        }
    };
    KB.favlist = {
        Aj: function (a) {
            return window.$.get("/node/FavlistCommentBoxV2", {params: {favlist_id: a}})
        }, Bj: function (a) {
            return window.$.get("/node/FavlistCommentListV2", {params: {favlist_id: a}})
        }, add: function (a) {
            return window.$.post("/node/FavlistCommentAddV2", {method: "add_comment", params: a})
        }
    };
    KB.post = {
        js: function (a) {
            return window.$.get("/node/PostCommentV2", {params: {comment_id: a}})
        }, Aj: function (a, b) {
            return window.$.get("/node/PostCommentBoxV2", {params: {post_id: a, load_all: b}})
        }, Bj: function (a) {
            return window.$.get("/node/PostCommentListV2", {params: {post_id: a}})
        }, add: function (a) {
            return window.$.post("/node/PostCommentV2", {method: "add_comment", params: a})
        }, jt: function (a, b) {
            return window.$.post("/node/PostCommentV2", {
                method: b ? "like_comment" : "undo_like_comment",
                params: {comment_id: a}
            })
        }, remove: function (a) {
            return window.$.post("/node/PostCommentV2",
                {method: "remove_comment", params: {comment_id: a}})
        }
    };
    KB.roundtable = {
        js: function (a) {
            return window.$.get("/roundtable/comments/" + a)
        }, Aj: function (a, b) {
            return window.$.get("/node/RoundtableCommentBoxV2", {params: {roundtable_id: a, load_all: b}})
        }, Bj: function (a) {
            return window.$.get("/roundtable/comments", {roundtable_id: a})
        }, add: function (a) {
            return window.$.post("/node/RoundtableCommentV2", {method: "add_comment", params: a})
        }, jt: function (a, b) {
            return window.$.post("/node/RoundtableCommentV2", {
                method: b ? "like_comment" : "undo_like_comment",
                params: {comment_id: a}
            })
        }, remove: function (a) {
            return window.$.post("/node/RoundtableCommentV2",
                {method: "remove_comment", params: {comment_id: a}})
        }
    };
    KB.promotion = {
        js: function (a) {
            return window.$.get("/node/PromotionCommentV2", {params: {comment_id: a}})
        }, Aj: function (a, b) {
            return window.$.get("/node/PromotionCommentBoxV2", {params: {post_id: a, load_all: b}})
        }, Bj: function (a) {
            return window.$.get("/node/PromotionCommentListV2", {params: {post_id: a}})
        }, add: function (a) {
            return window.$.post("/node/PromotionCommentV2", {method: "add_comment", params: a})
        }, jt: function (a, b) {
            return window.$.post("/node/PromotionCommentV2", {
                method: b ? "like_comment" : "undo_like_comment",
                params: {comment_id: a}
            })
        },
        remove: function (a) {
            return window.$.post("/node/PromotionCommentV2", {method: "remove_comment", params: {comment_id: a}})
        }
    };
    z.x(z.jB, z.Lc);
    kB.prototype.fill = function (a, b) {
        this[a] = this[a].replace("?", b);
        return this
    };
    z.x(lB, z.G);
    z.e = lB.prototype;
    z.e.eM = {
        question: "问题",
        comment: "评论",
        answer: "回答",
        favlist: "收藏",
        member: "用户",
        message: "私信",
        image: "图片",
        video: "视频",
        post: "文章"
    };
    z.e.Pw = "report-dialog";
    z.e.yH = "loading";
    z.e.PO = '\x3cform\x3e\x3cdiv class\x3d"header"\x3e\x3c% if (headnote) { %\x3e\x3cspan class\x3d"headnote"\x3e\x3c%\x3dheadnote%\x3e\x3c/span\x3e\x3c% } %\x3e\x3cspan class\x3d"error-container"\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d"options clearfix"\x3e\x3c% each(options, function(option) { %\x3e\x3cli\x3e\x3clabel\x3e\x3cinput value\x3d"\x3c%\x3doption.value%\x3e" name\x3d"reason" type\x3d"radio"\x3e\x3c%\x3doption.label%\x3e\x3c/label\x3e\x3c% if (option.description) { %\x3e\x3cdiv class\x3d"description visible-if-checked"\x3e\x3c%\x3doption.description%\x3e\x3c/div\x3e\x3c% } %\x3e\x3c% if (option.options) { %\x3e\x3cul class\x3d"group-options clearfix visible-if-checked"\x3e\x3c% each(option.options, function(opt) { %\x3e\x3cli\x3e\x3clabel\x3e\x3cinput required data-description\x3d"\x3c%\x3dopt.description%\x3e" value\x3d"\x3c%\x3dopt.value%\x3e" name\x3d"reason-\x3c%\x3doption.value%\x3e" type\x3d"radio"\x3e\x3c%\x3dopt.label%\x3e\x3c/label\x3e\x3c/li\x3e\x3c% }) %\x3e\x3c/ul\x3e\x3cdiv class\x3d"group-description visible-if-checked"\x3e\x3c/div\x3e\x3c% } %\x3e\x3c% if (option.value \x3d\x3d 0) { %\x3e\x3cp class\x3d"input-container visible-if-checked"\x3e\x3cinput placeholder\x3d"请填写原因" type\x3d"text" name\x3d"detail" class\x3d"reason-text zg-form-text-input"\x3e\x3c/p\x3e\x3cp class\x3d"error-container visible-if-checked"\x3e\x3c/p\x3e\x3c% } %\x3e\x3c/li\x3e\x3c% }) %\x3e\x3c/ul\x3e\x3cp class\x3d"footnote"\x3e\x3c/p\x3e\x3c/form\x3e';
    z.e.BF = function () {
        return this.Nr
    };
    z.e.sw = function (a, b) {
        var c = new z.V;
        c.Op(!0);
        c.Bf(!0);
        z.Lj(c, z.Cj());
        c.addEventListener(z.Nj, this.qP, !1, this);
        z.Ac(c, this);
        a && c.Na(a);
        b && c.ia(b);
        c.G(!0);
        c.ha();
        z.W.add(c.m(), this.Pw);
        return this.Nr = c
    };
    z.e.qP = function (a) {
        if ("ok" === a.key) return (a = (0, window.$)("form", this.Nr.m()).valid()) && this.submit(), a
    };
    z.e.open = function (a, b, c) {
        var d = this.sw(z.Ka("确定要%s该%s？", this.GC[this.yl()], this.eM[a] || "条目"), this.tw());
        z.W.add(d.m(), this.yH);
        fD(a, this.yl()).then((0, z.q)(function (f) {
            d.ia((0, z.Rv)(this.PO, {each: z.y, options: f, headnote: c}));
            z.W.remove(d.m(), this.yH);
            d.ha();
            z.Tj(d, 450);
            this.zO = {type: a, id: b};
            this.We(f)
        }, this))
    };
    z.e.ZF = function () {
    };
    z.e.We = function (a) {
        var b = this, c = (0, window.$)(this.Nr.m()), d = (0, window.$)("form", c),
            f = (0, window.$)(".reason-text", c);
        c.on("change", ":radio", function (g) {
            g = (0, window.$)(g.target);
            c.find("li").removeClass("checked");
            g.parentsUntil(d, "li").addClass("checked");
            var h = this.value, k = z.qb(a, function (a) {
                return h === String(a.value)
            });
            b.ZF(k);
            k = "0" === h;
            f.toggle(k);
            k && f.placeholder();
            g.closest("li").find("ul, :text").length || d.valid()
        });
        c.find("ul ul").on("change", ":radio", function (a) {
            (0, window.$)(a.delegateTarget).parent().find(".group-description").text((0, window.$)(this).data("description"))
        });
        d.validate({
            rules: {
                reason: "required", detail: {
                    rangelength: [2, 100], required: function () {
                        return !!(0, window.$)("input[name\x3dreason]:checked", c).length
                    }
                }
            },
            messages: {reason: "请选择理由", detail: "理由为 2-100 字"},
            errorLabelContainer: (0, window.$)(".error-container", d)
        })
    };
    z.e.tw = function () {
        return '\x3cdiv class\x3d"loading"\x3e理由加载中\x3ci class\x3d"spinner-gray"\x3e\x3c/i\x3e\x3c/div\x3e'
    };
    z.x(z.mB, lB);
    var fD = function (a) {
        return function (b, c) {
            return a(z.Ka("/manage/%s/options?action\x3d%s", b, c))
        }
    }(z.ik(window.$.getJSON));
    z.e = z.mB.prototype;
    z.e.GC = {remove: "删除", lock: "锁定", unlock: "解除锁定", collapse: "折叠", uncollapse: "解除折叠", mute: "隔离", unmute: "解除隔离"};
    z.e.sw = function (a, b) {
        var c = z.mB.o.sw.call(this, a, b);
        c.pc.set("ok", this.GC[this.yl()]);
        return c
    };
    z.e.yl = function () {
        return this.eu.op.split("-")[0]
    };
    z.e.KJ = function (a) {
        (0, window.$)(".footnote", this.BF().m()).text(a)
    };
    z.e.ZF = function (a) {
        a && (a.trackable ? oB(this, a).then((0, z.q)(this.KJ, this)) : this.KJ(""))
    };
    z.e.submit = function () {
        var a = this.eu.action, b = this.eu.content,
            c = (0, window.$)((0, window.$)("form", this.Nr.m())[0]).serialize();
        b && (c += "\x26" + b);
        nB(a, c, this.cl)
    };
    z.e.D = function () {
        this.cl = this.eu = null;
        z.mB.o.D.call(this)
    };
    z.e.open = function (a, b, c) {
        this.eu = z.jf(a) ? (0, window.$)(a).data() : a;
        this.cl = c || z.je.IY;
        z.mB.o.open.call(this, b.type, b.id, "")
    };
    z.pB.prototype.submit = function (a, b) {
        function c() {
            b ? b() : d.handleError()
        }

        var d = this;
        window.$.post("/report", {type: this.type, id: this.id, reason: a || "edit", source: "web"}).done(function (a) {
            d.BK && d.BK();
            a.r ? "duplicate_report" === a.errtype ? d.handleError(a.msg) : c() : qB(!!a.noti)
        }).fail(c)
    };
    z.pB.prototype.handleError = function (a) {
        var b = z.X({title: "举报", content: void 0 === a ? "举报失败" : a, modal: !0, buttons: {}});
        (0, window.setTimeout)(function () {
            return b.G(!1)
        }, 4E3)
    };
    z.pB.prototype.render = function () {
        var a = this, b = new z.V;
        b.Bf(!0);
        z.Tj(b, 420);
        b.Na("举报");
        b.render();
        var c = b.S();
        c.style.margin = "0";
        c.style.padding = "0";
        z.Ow("Report").then(function (d) {
            function f() {
                d.unmountComponentAtNode(c);
                b.G(!1)
            }

            a.BK = f;
            var g = {};
            d.render(c, (g.type = a.type, g.onContentChange = function (a) {
                b.Na(a);
                b.m().focus()
            }, g.onClose = f, g.onSubmit = a.submit.bind(a), g));
            b.G(!0);
            b.ha()
        })
    };
    z.x(rB, z.R);
    z.e = rB.prototype;
    z.e.defaults = {trigger: {A: "data-editable"}, lM: "hc-actionbar", ER: "checked", OV: 100, HQ: 100};
    z.e.C = function () {
        rB.o.C.call(this);
        this.dj = z.O("div");
        window.document.body.appendChild(this.dj);
        sB(this, this.h)
    };
    z.e.D = function () {
        z.P(this.dj);
        this.dj = null;
        rB.o.D.call(this)
    };
    z.e.Xx = function () {
        return this.MQ
    };
    z.e.nN = function (a, b, c) {
        b = z.O("div", {
            title: a.R,
            "data-action": a.name,
            className: "button " + a.name + (0 === b ? " first" : b === c.length - 1 ? " last" : "")
        }, [z.O("i", "icon icon-actionbar-" + a.name)]);
        z.zo(b, !0);
        this.v().g(b, "click", function () {
            tB(this, a.name) && a.Rh(this.re)
        });
        return b
    };
    z.e.render = function () {
        this.dj.innerHTML = "";
        z.Ze(this.dj, z.nb(z.Gb(Sn(this.Xm)), this.nN, this))
    };
    z.x(z.vB, z.R);
    z.vB.prototype.defaults = {lG: {}, VM: !0};
    z.vB.prototype.C = function () {
        z.vB.o.C.call(this);
        var a = this, b = this.h;
        this.J.VM && (this.Wm = IB(b), z.Ac(this, this.Wm));
        this.v().g(b, "paste", function () {
            (0, window.setTimeout)(function () {
                wB(a)
            })
        }).g(b, "keydown", this.BQ)
    };
    z.vB.prototype.BQ = function (a) {
        var b = z.eo(a.keyCode), c = 8 === a.keyCode;
        if (!(a.ctrlKey || a.altKey || a.metaKey || !b && !c)) {
            var b = z.vu(), d = b.Z(), f = b.la(), g = this.h, h,
                k = zB(d, g, BB) || f !== d && (h || (h = zB(f, g, BB)));
            if (k) {
                var m = z.of(k), n = b.va(), r = b.La();
                if (k.getAttribute("data-editable") && m === k.href || "video-link" === k.className) {
                    var w = !1;
                    h = h || zB(f, g, BB) || k;
                    var g = k.contains(d), H = h.contains(f);
                    if (c) g && (d = k, n = 0, w = !0), H && (f = h, r = z.Ju(h), w = !0), w && z.gu(d, n, f, r).select(); else if (g && H && h === k) {
                        if (!b.isCollapsed() || 0 !== n && m.length !==
                            n) a.preventDefault(), z.Qu(k)
                    } else g && (d = k.nextSibling, n = 0, w = !0), H && (f = h.previousSibling, r = z.Ju(f), w = !0), w && z.gu(d, n, f, r).select()
                }
            }
        }
    };
    var HB = /\b(?:(?:https?):\/\/|www\.)(?:\([\-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[\-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([\-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/ig,
        DB = ["http:", "https:"], EB = z.ik(function (a) {
            return window.$.post("/scraper", {url: a})
        });
    z.x(z.JB, z.R);
    z.e = z.JB.prototype;
    z.e.defaults = {UR: !1, autofocus: !0, lx: "empty", uf: "zm-item-comment"};
    z.e.Y = function (a) {
        z.JB.o.Y.call(this, a);
        bC(this);
        a = window.location.hash.slice(1).split("-");
        if (a = "comment" === a[0] && a[1]) a = VB(this, a), z.xr(a), z.Nr(a), a.focus();
        this.Og = !0;
        z.y(WB(this), this.Jt, this)
    };
    z.e.bn = "zm-comment-bubble";
    z.e.jD = "." + z.JB.prototype.bn;
    z.e.$ = function (a) {
        return (0, window.$)(a, this.h)
    };
    z.e.B = function () {
        this.h = z.O("div", {"class": this.QD, style: "display:none"});
        this.Mg()
    };
    z.e.An = function () {
        return '\x3ci class\x3d"icon icon-spike zm-comment-bubble"\x3e\x3c/i\x3e\x3cdiv class\x3d"zm-comment-spinner"\x3e正在加载，请稍等 \x3ci class\x3d"spinner-lightgray"\x3e\x3c/i\x3e\x3c/div\x3e'
    };
    z.e.D = function () {
        z.JB.o.D.call(this);
        this.Ha = this.YD = this.xn = this.$C = this.Rd = this.AA = this.uH = null
    };
    z.e.SV = LB(function (a) {
        var b = z.N("zm-comment-content-wrap", a), c = z.N("zm-comment-form", a), d = a.getAttribute("data-id"),
            f = this, g;
        if (c) {
            g = z.N("zm-comment-editable", c);
            if (z.Kg(c)) {
                if (z.Mr(c)) {
                    z.Q(c, !1);
                    return
                }
            } else z.Q(c, !0);
            TB(g)
        } else {
            c = UB(b);
            g = z.N("zm-comment-editable", c);
            var h = new z.gB(g);
            h.Pd(!1, "");
            h.Ke();
            z.Bc(this, MB(h.m(), this.type, this.id));
            TB(g);
            a = z.N("zm-comment-close", c);
            b = z.N("zm-comment-submit", c);
            b.name = "";
            var k = function () {
                f.na({action: "click_reply_[type]_comment_submit"});
                var a = (0, z.ab)(h.Al()),
                    b = (0, z.ab)(z.of(g));
                a && b ? dC(f, {content: a, TU: d}, function (a) {
                    a.r || (z.Q(c, !1), h.Pd(!1, ""), (a = z.kb(WB(f))) && z.Nr(a, {offsetTop: 100, aw: !0}))
                }) : (z.X.message("请填写内容"), g.focus())
            };
            z.F(a, "click", function () {
                z.Q(c, !1)
            });
            z.F(b, "click", k);
            z.F(g, "keydown", function (a) {
                13 === a.keyCode && (a.ctrlKey || a.metaKey) && (k(), a.preventDefault())
            })
        }
        z.Nr(c, 100)
    });
    z.e.Gu = function (a) {
        z.W.enable(this.YD, "expanded", a)
    };
    z.e.Mi = function (a, b) {
        this.dispatchEvent(new z.jB("click!comment", {
            category: "?",
            action: this.type + "_comments",
            label: "?_" + a,
            value: z.qa(b) ? b : this.kb()
        }))
    };
    z.e.Gj = function () {
        this.Og ? $B(this) : this.Wt = !0
    };
    z.e.WS = function (a) {
        13 === a.keyCode && (a.ctrlKey || a.metaKey) && (this.Pq(), (0, window.$)(this.Ha).blur(), a.preventDefault());
        27 === a.keyCode && YB(this)
    };
    z.e.Qa = function (a) {
        var b = z.Er(this.h, a.target, "BUTTON") || z.Er(this.h, a.target);
        if (b && b.name) {
            var c = z.Ho(b, this.J.uf);
            a.preventDefault();
            switch (b.name) {
                case "reply_comment":
                    this.na({action: "click_reply_[type]_comment_start"});
                    this.SV(c);
                    break;
                case "cancelanon":
                    a = (0, window.$)(this.h).parents(".feed-item-hook").data("qid");
                    z.Ap(0, null, a);
                    break;
                case "delcomment":
                    this.iy(b);
                    break;
                case "like_comment":
                    this.WP(b);
                    break;
                case "author_delcomment":
                    fC(this, b);
                    break;
                case "admin_delcomment":
                    eC(this, b);
                    break;
                case "closeform":
                    this.na({action: "click_add_[type]_comment_cancel"});
                    YB(this);
                    break;
                case "addnew":
                    this.na({action: "click_add_[type]_comment_submit"});
                    this.Pq();
                    break;
                case "load-more":
                    this.Mi("comments_all"), this.na({action: "click_view_all_comment"}), this.uH(b)
            }
        }
    };
    z.e.uH = function (a) {
        this.pt && "pending" === this.pt.state() || (a && z.W.add(a, "loading"), this.pt = this.AA || this.vH(), this.pt.done((0, z.q)(function (b) {
            b = (0, window.$)(b).filter(".zm-item-comment").get();
            if (b.length) {
                var c = WB(this);
                c.length && (b = z.mb(b, function (a) {
                    return !z.qb(c, function (b) {
                        return b.getAttribute("data-id") === a.getAttribute("data-id")
                    })
                }), b = z.ub(c, b).sort(function (a, b) {
                    return a.getAttribute("data-id") - b.getAttribute("data-id")
                }), z.y(b, this.Jt, this), a && z.P(a));
                z.Ze(this.xn, b)
            }
        }, this)))
    };
    z.e.WP = LB(function (a) {
        var b = (0, window.$)(a), c = z.Ho(a, this.J.uf);
        a = (0, window.$)(".like-num", c);
        var d = c.getAttribute("data-id");
        if (c = !b.hasClass("liked")) this.Mi("like_comment"), this.na({action: "click_like_[type]_comment"});
        this.Dg.jt(d, c);
        var d = (0, window.$)("em", a), f = +d.text() + (c ? 1 : -1);
        a.toggleClass("liked", c).toggleClass("nil", 0 >= f).attr("data-tip", "s$r$" + f + " 人觉得这个很赞");
        d.text(f);
        b.toggleClass("liked", c);
        pr(b[0], c ? "取消赞" : "赞")
    });
    z.e.expand = function () {
        this.Lc(!0)
    };
    z.e.collapse = function () {
        this.Lc(!1)
    };
    z.e.Yc = function () {
        return this.Og
    };
    z.e.Lc = function (a) {
        if (a !== this.Og) {
            a && (this.$(this.jD).hide(), this.Mg());
            this.Og = a;
            this.dispatchEvent(a ? "beforeexpand" : "beforecollapse");
            z.Q(this.h, this.Og);
            var b = (0, z.q)(function () {
                a && ZB(this);
                this.dispatchEvent(a ? "expand" : "collapse");
                this.vl && !a && (z.ev(this.vl), z.Nr(this.vl.h))
            }, this), c;
            a && this.Wt ? (c = $B(this)) && c.done(b) : (0, window.setTimeout)(b);
            this.Rd && (a ? (this.YT = z.of(this.Rd), pr(this.Rd, "收起评论")) : pr(this.Rd, 0 > this.Ja ? this.YT : this.Ja ? this.Ja + " 条评论" : "添加评论"))
        }
    };
    z.e.Ch = function () {
        this.Lc(!this.Og)
    };
    z.e.vH = function () {
        return this.Dg.Bj(this.id)
    };
    z.e.Lp = function (a) {
        this.hj = a
    };
    z.e.NU = function (a) {
        a = z.We((0, z.ab)(a));
        z.Q(a, this.Og);
        z.y((0, window.$)("." + this.J.uf, a).get(), this.Jt, this);
        this.Wt = !1;
        this.Hb();
        z.Po(a, this.h);
        this.h = a;
        bC(this)
    };
    z.e.Rn = function () {
        this.Ha.focus()
    };
    z.e.Ua = function () {
        var a = (0, z.ab)(this.oj.Al());
        return a === this.placeholder ? "" : a
    };
    z.e.Pq = LB(function () {
        var a = this.Ua(), b = (0, z.ab)(z.of(this.Ha));
        a && "TEXTAREA" === this.Ha.tagName && b || a ? dC(this, a) : (z.X.message("请填写内容"), this.Rn())
    });
    z.e.kb = function () {
        return this.Ja
    };
    z.e.fP = function (a) {
        if (!a) return z.X.message("网络异常");
        if (a.r) return z.X.alert(a.msg);
        this.Dg.js(a.msg).done(window.$.proxy(this.OU, this));
        this.oj.Pd("");
        SB(this);
        this.Gu(!1)
    };
    z.e.Jt = function (a) {
        if (z.pm("auth_f_manage") && "favlist" !== this.type && !(0, window.$)(".del, .op.remove", a).length) {
            var b = a.getAttribute("data-id");
            (0, window.$)("\x3ca\x3e", {
                href: "#",
                name: "admin_delcomment",
                "class": "del zm-comment-op-link op needsfocus",
                html: '\x3ci class\x3d"zg-icon zg-icon-comment-del"\x3e\x3c/i\x3e删除',
                "data-op": "remove-comment",
                "data-action": "/manage?" + window.$.param({comment_id: b, action: "remove_comment2"})
            }).appendTo((0, window.$)(".zm-comment-ft, .actions", a))
        }
        this.vo(a)
    };
    z.e.vo = function (a) {
        (0, window.$)("a[name\x3dreport], button.report", a).on("click", function () {
            (new z.pB({type: "comment", id: a.getAttribute("data-id")})).render()
        })
    };
    z.e.OU = function (a) {
        this.Yj = "";
        a = z.We(a);
        this.xn.appendChild(a);
        this.Jt(a);
        this.Ja += 1;
        cC(this)
    };
    z.e.iy = function (a) {
        var b = z.Ho(a, this.J.uf), c = b.getAttribute("data-id");
        z.X.confirm("删除评论", "你确定要删除这条评论吗？", function (a) {
            a && hC(this, c, z.Ba(z.P, b))
        }, this)
    };
    z.e.Mg = function () {
        (0, window.$)(window).on("beforeunload.CommentForm", (0, z.q)(function () {
            if (this.Yj) return "你的评论还未保存，确认离开该页面吗？"
        }, this))
    };
    z.e.bi = function () {
        (0, window.$)(window).off("beforeunload.CommentForm")
    };
    z.e.na = function (a) {
        this.dispatchEvent({type: "trackRequested", category: "comment", action: a.action.replace("[type]", this.type)})
    };
    z.l(jC, z.R);
    z.e = jC.prototype;
    z.e.Yc = function () {
        return this.Vj
    };
    z.e.Lc = function (a) {
        a !== this.Vj && (this.dispatchEvent(a ? "beforeexpand" : "beforecollapse"), this.Vj = a, z.Q(this.h, a), oC(this), pC(this), this.dispatchEvent(a ? "expand" : "collapse"), this.wl && !a && (z.ev(this.wl), z.Nr(this.wl.m())))
    };
    z.e.Ch = function () {
        this.Lc(!this.Vj)
    };
    z.e.Mi = function () {
    };
    z.e.Rn = function () {
        (0, window.$)("[data-input-box]", this.m()).focus()
    };
    z.e.reload = function () {
        qC(this, "reloadComments")
    };
    z.e.Lp = function (a) {
        this.hj = a
    };
    z.e.We = function () {
        var a = this;
        oC(this);
        pC(this);
        mC(this);
        this.v().g(z.Cp, "anon_change", function () {
            a.Vj && a.reload()
        });
        (0, window.$)(this.m()).on("click", 'button[data-key\x3d"cancel"]', function (b) {
            0 === lC(a) && (b.preventDefault(), a.Lc(!1))
        })
    };
    z.e.B = function () {
        this.h = z.O("div", "comment-app-holder");
        z.Q(this.h, !1)
    };
    z.e.render = function (a, b) {
        b = void 0 === b ? {} : b;
        var c = this;
        z.R.prototype.render.call(this, a);
        var d = this.entryType, f = this.jb, g = {}, h = Object.assign((g.entry = {
            id: f,
            type: d
        }, g.useContentEditable = z.Tm, g.createItemActions = function (a) {
            var b = [], d = a.id, f = a.own;
            !f && z.rm.MG && b.push({
                key: "adminremove", label: "删除", icon: "zg-icon zg-icon-comment-del", onClick: function () {
                    var a = {
                        op: "remove-comment",
                        action: "/manage?comment_id\x3d" + d + "\x26action\x3dremove_comment2"
                    }, b = {id: d, type: "comment"};
                    (new z.mB).open(a, b, function () {
                        qC(c,
                            "RemoveComment", {id: d})
                    })
                }
            });
            f || b.push({
                key: "report", label: "举报", icon: "zg-icon zg-icon-comment-report", onClick: function () {
                    (new z.pB({type: "comment", id: a.id})).render()
                }
            });
            return b
        }, g.onEditorCreated = function (a) {
            return MB(a, d, f)
        }, g.onRequestHighlight = function (a) {
            z.xr(a);
            z.Nr(a, {offsetTop: 45});
            a.focus()
        }, g), b), g = z.ia(window.location.hash.match(/#comment-(\d+)/) || []);
        g.next();
        (g = g.next().value) && (h.query = {bycomment: g});
        var k = Object.assign({}, Qw(), {
                authRequired: function (a) {
                    return z.Jq(a, !0, function () {
                        return c.hj
                    })
                }
            }),
            m = z.Qj(function () {
                return c.qD && kC(c)
            });
        z.Ow("CommentApp").then(function (b) {
            a.appendChild(c.h);
            c.Zq = b.render(c.h, h, k);
            c.We();
            c.Zq.store.subscribe(function () {
                (0, window.setTimeout)(function () {
                    oC(c);
                    pC(c);
                    m()
                })
            })
        })
    };
    z.sG = {
        fG: function (a) {
            this.Vu();
            var b = this.Ga.Yc();
            (0, window.$)(".zm-meta-panel", this.m()).toggleClass("focusin", b);
            b && (a = (0, window.parseInt)(z.of(a.currentTarget), 10) || 0, this.Ga.Mi("view_comments", a));
            (0, z.Gi)(this, {action: b ? "CommentIntent" : "EndCommentIntent", element: "Button"})
        }, Vu: function () {
            this.ZE();
            this.Ga.Ch()
        }, wY: function () {
            return this.Ga
        }, JP: function () {
            this.Ga ? this.Ga.Rn() : this.Vu()
        }, ZE: function () {
            if (!this.Ga) {
                var a = (0, window.$)(".toggle-comment, .js-toggleCommentBox", this.h)[0], b = this.yF();
                if (b === jC) this.Ga = new b(this.jb, this.entryType), this.L(this.Ga), this.Ga.render(this.Rx(), {embedded: /^\/roundtable/.test(window.location.pathname)}), nC(this.Ga, a); else if (this.Ga = new b(this.jb, this.entryType), this.L(this.Ga), z.NB(this.Ga, this.Rx(), a), a = this.Ga, !a.vl && !z.rm.Ab && (b = z.Ho(a.h, "zm-item-meta"))) {
                    var c = z.N("zm-meta-panel", b);
                    c && (a.vl = new iv(null, b), a.vl.tag = "comment", a.vl.w(c))
                }
                this.Sx && this.Ga.Lp(this.Sx())
            }
        }, yF: function () {
            return z.JB
        }
    };
    z.x(rC, z.R);
    var sC = {Cg: "is-sticky", top: null, bottom: null, Gb: null, LM: !1, xI: z.p, Lt: z.p};
    z.e = rC.prototype;
    z.e.D = function () {
        this.stop();
        rC.o.D.call(this)
    };
    z.e.start = function () {
        this.state.Yl || (this.state.Yl = !0, (0, window.$)(window).on("scroll resize", this.mK).trigger("scroll"))
    };
    z.e.stop = function () {
        this.state.Yl && (this.state.Yl = !1, (0, window.$)(window).off("scroll resize", this.mK), this.restore(), this.state.Ws = !1, this.state.Ys = !0, (0, window.setTimeout)(function () {
            (0, window.$)(window).trigger("scroll")
        }))
    };
    z.e.update = function () {
        if (this.state.Ao) this.state.uA = !0; else {
            var a = this.options.top, b = this.options.bottom, c = this.state.Ws, d = this.state.Ys, f, g,
                h = (this.kc || this.h).getBoundingClientRect(), k = this.options.Gb.getBoundingClientRect(),
                m = (0, window.$)(window).height();
            h.height || (h.height = h.bottom - h.top);
            null !== a ? (f = h.top > a, g = k.bottom > a + h.height) : null !== b && (f = h.bottom > m - b, g = k.top > m - h.height - b);
            this.state.Ws = f;
            this.state.Ys = g;
            if ((c && !d) === (f && !g)) f && !g && this.ha(); else {
                if (d && !g) return uC(this);
                if (!d && g) return wC(this);
                this.options.LM ? f ? uC(this) : wC(this) : f ? tC(this) : this.restore()
            }
        }
    };
    z.e.ha = function () {
        var a = (this.kc || this.h).getBoundingClientRect().left, b = this.options.top, c = this.options.bottom;
        (0, window.$)(this.h).css({left: a + "px", top: b ? b + "px" : "auto", bottom: c ? c + "px" : "auto"})
    };
    z.e.restore = function () {
        this.kc && ((0, window.$)(this.h).removeClass(this.options.Cg).css({
            left: "",
            top: "",
            bottom: ""
        }), (0, window.$)(this.kc).remove(), this.kc = null, this.options.Lt.call(this))
    };
    z.e.onAnimationEnd = function () {
        this.state.Ao = !1;
        this.state.uA && (this.state.uA = !1, this.update())
    };
    z.x(z.xC, z.R);
    z.Ca(z.xC.prototype, z.sG);
    z.e = z.xC.prototype;
    z.e.Yr = "zm-item-expanded";
    z.e.mM = "zm-item-meta, .js-contentActions";
    z.e.Po = null;
    z.e.$w = "z-icon-fold";
    z.e.yB = "sprite-global-icon-fold-white";
    z.e.C = function () {
        z.xC.o.C.call(this);
        BC(this);
        this.jn();
        this.Lh();
        zC(this);
        if (this.ob) this.Ps(); else {
            var a = this;
            this.g("expand", function () {
                return a.Ps()
            })
        }
    };
    z.e.JF = function () {
        return DC(this)
    };
    z.e.Sx = function () {
        var a = this.entryType + "-" + this.jb;
        return (0, window.$)('a[name\x3d"' + a + '"]', this.h).length && "#" + a
    };
    z.e.jn = function (a) {
        var b = {
            ".js-expand": this.expand,
            ".js-collapse": this.collapse,
            ".js-report": this.lQ,
            ".column[data-entry-url]": this.OF
        };
        z.Mb(b, a || {});
        z.Db(b, function (a, b) {
            if (z.sa(a)) (0, window.$)(this.h).on("click", b, window.$.proxy(a, this))
        }, this);
        (0, window.$)(".js-toggleCommentBox", this.h).on("click", this.fG.bind(this))
    };
    z.e.st = function () {
        (0, z.hG)(this.entryType, this.tj, "read")
    };
    z.e.CH = function () {
        (0, z.hG)(this.entryType, this.tj, "touch")
    };
    z.e.expand = function (a) {
        this.ob || (this.ob = !0, z.W.add(this.h, this.Yr), this.dispatchEvent("expand"), a = a && z.jf(a.target) && z.gj(a.target, "js-vote-count"), this.Zu(a), (0, z.Gi)(this, {
            action: "Expand",
            element: "Button"
        }))
    };
    z.e.collapse = function () {
        this.ob && (this.ob = !1, this.Yu(), Rr(this.h, (0, z.q)(function () {
            z.W.remove(this.h, this.Yr);
            this.dispatchEvent("collapse")
        }, this)), (0, z.Gi)(this, {action: "Collapse", element: "Button"}))
    };
    z.e.Yc = function () {
        return this.ob
    };
    z.e.Ch = function () {
        this.ob ? this.collapse() : this.expand()
    };
    z.e.RJ = function () {
        return !z.vm
    };
    z.e.Ps = function () {
        if (this.ob && this.RJ() && !this.hO) {
            this.hO = !0;
            var a = (0, window.$)(".js-collapse-body", this.h)[0];
            if (a) {
                var b = this, c = (0, window.$)(".js-collapse", this.h)[0];
                if (!c) {
                    if ("answer" !== this.entryType) return;
                    c = (0, window.$)(".zm-meta-panel", this.h);
                    if (!c.length) return;
                    c = (0, window.$)('\x3cbutton class\x3d"item-collapse js-collapse"\x3e\x3ci class\x3d"sprite-global-icon-fold-white"\x3e\x3c/i\x3e收起\x3c/button\x3e').appendTo(c).on("click", (0, z.q)(this.collapse, this)).get(0)
                }
                var d = this.dK = new rC(0,
                    {
                        bottom: 12, Gb: a, xI: function () {
                            (0, window.$)("i", this.h).removeClass(b.$w).addClass(b.yB)
                        }, Lt: function () {
                            (0, window.$)("i", this.h).removeClass(b.yB).addClass(b.$w)
                        }
                    });
                z.Ac(this, d);
                d.w(c);
                this.g("expand", function (a) {
                    a.target === a.currentTarget && d.start()
                });
                this.g("collapse", function (a) {
                    a.target === a.currentTarget && d.stop()
                });
                d.start()
            }
        }
    };
    z.e.Zu = function (a) {
        var b = "view_answer", c = DC(this);
        a = a ? "vote_up_count" : "expand_answer";
        var d = (0, window.$)(this.h).index() + 1;
        if ("feed" !== c) z.zi(b, "click_expand_answer", c + "_" + a, d); else {
            var c = CC(this), f = EC(this);
            -1 < c.indexOf("article") ? (b = "view_article", c = "feed_article", a = "expand_article") : c = "feed_answer";
            z.zi(b, "click_expand_answer", c + "_" + f + "_" + a, d)
        }
    };
    z.e.Yu = function () {
        var a = "view_answer", b = DC(this), c;
        if (c = this.dK) c = this.dK, c = c.state.Ws && !c.state.Ys;
        c = c ? "blue" : "grey";
        var d = "collapse_answer_" + c, f = (0, window.$)(this.h).index() + 1;
        if ("feed" !== b) z.zi(a, "click_collapse_answer", b + "_" + d, f); else {
            var b = CC(this), g = EC(this);
            -1 < b.indexOf("article") ? (a = "view_article", b = "feed_article", d = "collapse_article_" + c) : b = "feed_answer";
            z.zi(a, "click_collapse_answer", b + "_" + g + "_" + d, f)
        }
    };
    z.e.NT = function () {
        var a = z.N(this.Po, this.h);
        window.open(a ? a.href : this.Ng.url)
    };
    z.e.Jj = function () {
        var a = this, b = (0, window.$)(this.m());
        b.slideUp(function () {
            a.H();
            b.remove()
        })
    };
    z.e.Fc = null;
    z.e.OF = function (a) {
        var b = (0, window.$)(a.currentTarget).data("entry-url");
        "column" === this.entryType && b && !a.target.href && window.open(b)
    };
    z.e.Rx = function () {
        return FC(this)
    };
    z.e.yF = function () {
        return "answer" === this.entryType || "post" === this.entryType ? jC : z.JB
    };
    z.e.Lh = function () {
        this.Df = z.bn.dL(this.h);
        z.wl(z.wl(z.wl(z.wl(this.Df.register("shift+o", this.NT, this), {
            group: "操作",
            name: "新窗口打开条目"
        }).register("o", this.Ch, this), {group: "操作", name: "显示全部/收起"}).register("c", this.Vu, this), {
            group: "操作",
            name: "打开评论"
        }).register("shift+c", this.JP, this), {group: "操作", name: "定位到评论框"})
    };
    z.e.lQ = function () {
        (new z.pB({type: this.entryType, id: this.jb})).render();
        (0, z.Gi)(this, {action: "ReportIntent", element: "Button"})
    };
    var IC = z.Qj(function () {
        var a = z.GC();
        (0, window.$)("body").append(a);
        return a
    });
    z.x(MC, z.R);
    z.e = MC.prototype;
    z.e.na = function (a) {
        this.dispatchEvent({
            type: "trackRequested",
            category: "share",
            action: a.action.replace("[type]", "post" !== this.Xb ? this.Xb : "article"),
            attributes: a.attributes
        })
    };
    z.e.Y = function (a) {
        var b = this;
        MC.o.Y.call(this, a);
        var c = this.Ad = (0, window.$)(a);
        z.eh ? c.click(xw) : z.vm ? c.click(this.PJ.bind(this)) : this.hc();
        c.click(function () {
            b.na({action: "click_share_[type]_start"});
            (!b.Uo || b.Uo && b.Uo.V()) && (0, z.Gi)(a, {action: "ShareIntent", element: "Button"})
        })
    };
    z.e.hc = function () {
        NC(this);
        this.Ad.one("mouseover focus", window.$.proxy(z.Qj(this.oU), this))
    };
    z.e.oU = function () {
        this.zm || (this.zm = z.ft(this.Xb, this.IK));
        if (this.Uo) {
            var a = z.sw(this.QJ);
            (0, window.$)(".js-qrcode-image", this.Uo.m()).attr("src", a)
        }
    };
    z.e.eP = function (a) {
        a = a.target.X();
        0 === a ? this.PJ() : 2 === a && (window.open("https://dudu.zhihu.com/post?" + window.$.param({
            url: this.QJ,
            utm_source: "zhihu-web_share",
            utm_medium: "button",
            utm_campaign: "post"
        }), "_blank"), this.na({action: "click_share_[type]_to_dudu_start"}))
    };
    z.e.PJ = function () {
        this.zm || (this.zm = z.ft(this.Xb, this.IK));
        this.zm.then(function (a) {
            z.KC(a.msg.sina)
        });
        this.na({action: "click_share_[type]_to_weibo_start"})
    };
    z.x(OC, Mz);
    OC.prototype.Zb = function (a) {
        var b = OC.o.Zb.call(this, a);
        a = (0, window.parseInt)(z.ql[a.keyCode], 10);
        (0, window.isNaN)(a) || this.Ya().xb(a - 1);
        return b
    };
    z.x(z.PC, z.R);
    var QC = {eW: "textarea.content, script.content", oN: ".toggle-expand", aW: ".summary", dE: null, bE: ""};
    z.e = z.PC.prototype;
    z.e.C = function () {
        z.PC.o.C.call(this);
        var a = this.h;
        this.Lq = (0, window.$)(this.options.eW, a);
        this.content = this.Lq.is(":input") ? this.Lq.val() : this.Lq.html();
        this.Pk = (0, window.$)(this.options.aW, a);
        this.Re = (0, window.$)(this.options.dE, a);
        this.ed = (0, window.$)(this.options.oN, this.Pk);
        if (!this.Pk.length) return this.dispatchEvent("invalid");
        this.$G = !!this.ed.length;
        this.ed.on("click", (0, z.q)(this.jP, this));
        this.Pk.on("click", (0, z.q)(this.oQ, this))
    };
    z.e.jP = function (a) {
        a.preventDefault();
        RC(this)
    };
    z.e.oQ = function (a) {
        var b = z.vu();
        b && b.Id() || a.target === this.ed[0] || (b = (0, window.$)(a.target).closest("a").get(0), b && "javascript:" !== b.protocol || (a.preventDefault(), RC(this)))
    };
    z.e.expand = function () {
        this.Re.length || (this.Re = (0, window.$)("\x3cdiv\x3e").html(this.content).addClass(this.options.bE).insertBefore(this.Lq));
        this.Pk.hide();
        this.Re.show();
        this.dispatchEvent("expand")
    };
    z.e.collapse = function () {
        this.Pk.show();
        this.Re.hide();
        this.dispatchEvent("collapse")
    };
    var YC = {
        jC: function (a, b) {
            return window.$.post("/node/ColumnPostVoteBarV2", {method: b, params: {post_id: a}})
        }, LF: function (a) {
            return window.$.get("/node/ColumnPostVoteInfoV2", {params: {post_id: a}})
        }
    };
    z.x(TC, z.R);
    z.VC = {zg: 1, Qk: -1, Mq: 0};
    TC.prototype.defaults = {JW: "up", nO: "down", ON: "count", cu: "pressed"};
    z.Mb(TC.prototype, z.VC);
    z.e = TC.prototype;
    z.e.N = z.VC.Mq;
    z.e.w = function (a) {
        TC.o.w.call(this, a);
        var b = this.J;
        a = this.W = (0, window.$)(a);
        this.Ev = (0, window.$)("." + b.JW, a);
        this.sv = (0, window.$)("." + b.nO, a);
        this.Bq = (0, window.$)("." + b.ON, a);
        b = this.Ev.hasClass(this.J.cu);
        a = this.sv.hasClass(this.J.cu);
        b ? this.N = z.VC.zg : a && (this.N = z.VC.Qk);
        WC(this);
        this.Ev.click(window.$.proxy(this.OB, this));
        this.sv.click(window.$.proxy(this.pK, this));
        z.xo(this, {module: "VoteBar"})
    };
    z.e.getState = function () {
        return this.N
    };
    z.e.lc = z.Jq(function (a) {
        a !== this.N && z.Yn(z.VC, a) && (this.dispatchEvent({
            type: "action",
            data: {state: a}
        }), this.ai && "pending" === this.ai.state() && this.ai.abort(), UC(this, this.N, a), this.N = a, WC(this), this.cW().done((0, z.q)(function (a) {
            a.r || this.Hc()
        }, this)))
    }, !0);
    z.e.bB = function (a) {
        a = (0, window.parseInt)(a);
        this.Bq.text(1E4 > a ? a.toString() : 1E6 > a ? (0, window.parseInt)(a / 1E3) + "K" : 1E9 > a ? (0, window.parseInt)(a / 1E6) + "M" : (0, window.parseInt)(a / 1E9) + "G")
    };
    z.e.kb = function () {
        return this.Bq.text()
    };
    z.e.cW = function () {
        var a = {};
        a[z.VC.zg] = "vote_up";
        a[z.VC.Qk] = "vote_down";
        a[z.VC.Mq] = "vote_neutral";
        return this.ai = (0, {post: YC.jC, answer: ZC.jC, promotion: SC}[this.entryType])(this.jb, a[this.N])
    };
    z.e.OB = function () {
        this.lc(this.N === z.VC.Qk ? z.VC.zg : this.N ^ z.VC.zg);
        (0, z.Gi)(this, {action: this.N === z.VC.Mq ? "UnUpvote" : "Upvote", element: "Button"})
    };
    z.e.pK = function () {
        this.lc(this.N === z.VC.zg ? z.VC.Qk : this.N ^ z.VC.Qk);
        (0, z.Gi)(this, {action: this.N === z.VC.Mq ? "UnDownvote" : "Downvote", element: "Button"})
    };
    z.e.Hc = function () {
        this.dispatchEvent("change")
    };
    z.x(XC, z.R);
    z.e = XC.prototype;
    z.e.kb = function () {
        return this.nb.data("votecount")
    };
    z.e.bB = function (a) {
        this.nb.data("votecount", a);
        this.Hc()
    };
    z.e.Hc = function () {
        this.dispatchEvent("change")
    };
    z.e.Ap = function (a) {
        if (a = (0, z.ab)(a)) a = (0, window.$)(a), this.nb.replaceWith(a), this.nb = a, this.cc(), this.Hc()
    };
    z.e.cc = function () {
        function a(a, d) {
            var f = z.O("div", "zm-voters");
            a.appendChild(f);
            var g = z.O("div", "listview");
            f.appendChild(g);
            var h = ("post" === b.entryType ? "/post/" : "/answer/") + b.jb + "/voters_profile", k = new z.Cl({
                use: [], source: function () {
                    return window.$.get(h).then(function (a) {
                        var c = a.paging;
                        c && (c.total && b.bB(c.total), h = c.next);
                        return {results: a.payload, next: !!h}
                    })
                }
            });
            k.w(g);
            k.kf().setAttribute("hidden", "true");
            z.Ac(d, k);
            k.v().ya(k, "next", function () {
                k.gb().length ? (k.kf().removeAttribute("hidden"), k.use("autoload",
                    {
                        cr: !1,
                        viewport: f
                    })) : (k.H(), f.innerHTML = '\x3cdiv class\x3d"empty-results"\x3e还没有人赞同\x3c/div\x3e')
            });
            return k.ti()
        }

        var b = this;
        (0, window.$)("a.more", this.nb).click(function () {
            var c = z.X.async({
                modal: !0,
                title: b.kb() + " 人赞同",
                className: "zm-voters-dialog",
                Iw: window.$.Deferred(function (b) {
                    (0, window.setTimeout)(function () {
                        a(c.S(), c).then(function () {
                            b.resolve(null)
                        })
                    })
                }).promise()
            });
            c.v().g(b, "change", function () {
                c.Na(b.kb() + " 人赞同")
            })
        })
    };
    z.e.C = function () {
        this.nb = (0, window.$)(this.h);
        this.cc();
        z.xo(this, {module: "VoteInfo"})
    };
    z.x(aD, z.R);
    z.e = aD.prototype;
    z.e.Y = function (a) {
        aD.o.Y.call(this, a);
        this.v().g(a, "click", this.QT)
    };
    z.e.eO = function () {
        var a = this.ev;
        z.Po(a.m(), this.VK);
        z.kj(a.m(), [this.UK, this.WK])
    };
    z.e.MM = '\x3cdiv class\x3d"text zg-clear"\x3e\x3clabel class\x3d"zg-left"\x3e赞同\x3c/label\x3e\x3clabel class\x3d"zg-right"\x3e反对\x3c/label\x3e\x3c/div\x3e';
    z.e.mU = '\x3cdiv class\x3d"text zg-clear votebar-text-post"\x3e\n  \x3clabel\x3e赞\x3c/label\x3e\n\x3c/div\x3e';
    z.e.QT = z.Jq(function () {
        this.Ia && this.Ia.H();
        var a = new z.V(null);
        a.Bf(!0);
        a.vm(!0);
        a.oF = !0;
        bD(this);
        this.v().ya(a, "hide", this.eO);
        var b = ["post", "promotion"].includes(this.ev.entryType) ? this.mU : this.MM, c = a.S();
        c.appendChild(this.ev.m());
        c.appendChild(z.We(b));
        z.W.add(a.m(), this.dx);
        a.G(!0);
        this.Ia = a;
        z.Ac(this, a)
    }, !0);
    z.tG = {
        Yy: function () {
            function a() {
                var a = c.Yc();
                if (a && (b(), f)) {
                    var d = f, h = d.nb;
                    h.data("async-voters") && (h.removeData("async-voters"), z.$C(d))
                }
                g && z.dv(g, a)
            }

            function b() {
                if (!g) {
                    var a = !z.Uj, b = z.N("js-collapse-body", c.m());
                    a && h && (0, window.$)(h).is(":visible") && b && 230 < (0, window.$)(b).height() && (g = c.$Y = new iv(null, b), c.L(g), g.tag = "votebar", g.KI = 50, g.w(h))
                }
            }

            var c = this, d = void 0, f = void 0, g = void 0, h = (0, window.$)(".votebar, .zm-votebar", this.m())[0];
            if (h) {
                d = this.Ri = new TC(this.jb, this.entryType);
                this.L(d);
                d.w(h);
                var k = (0, window.$)(".js-openVoteDialog", this.m())[0];
                k && (new aD(d)).w(k)
            }
            if (k = (0, window.$)(".zm-item-vote-info", this.m())[0]) f = this.XK = new XC(this.jb, this.entryType), this.L(f), f.w(k);
            d && (this.v().g(d, "change", function () {
                f ? z.$C(f) : (0, window.$)("[data-bind-votecount]", this.m()).text(d.kb())
            }), f && this.v().g(f, "change", function () {
                (0, window.$)("[data-bind-votecount]", this.m()).text(f.kb());
                d.bB(f.kb())
            }));
            this.v().g(this, ["expand", "collapse"], a);
            (0, window.$)(this.m()).on("contentchange", b);
            (0, window.setTimeout)(a)
        }
    };
    z.x(z.cD, z.xC);
    z.e = z.cD.prototype;
    z.e.C = function () {
        var a = this;
        z.cD.o.C.call(this);
        z.xo(this, {module: "AnswerItem"}, function () {
            return {card: {card_type: "Content", content: {type: "Answer", id: a.jb}}}
        })
    };
    z.e.jn = function () {
        var a = this;
        z.cD.o.jn.call(this, {
            ".js-collect": this.NF,
            ".js-thank": this.dG,
            ".js-noHelp": this.bQ,
            ".js-administer": this.TJ,
            ".js-orgCollapse": this.fQ,
            ".js-expandQuestionDetail": this.LJ.bind(this, !0)
        });
        this.Yy();
        this.Ty();
        this.oi();
        iD(this);
        this.Sj();
        this.Uy();
        this.v().g(this, "collapse", function (b) {
            b.target === a && a.LJ(!1)
        });
        if (this.ob) this.Ul(); else {
            var b = this;
            this.ya("expand", function () {
                return b.Ul()
            })
        }
    };
    z.e.Lh = function () {
        var a = this;
        z.cD.o.Lh.call(this);
        z.wl(z.wl(z.wl(z.wl(this.Df.register("v", function () {
            a.Ri && a.Ri.OB()
        }), {group: "操作", name: "赞同"}).register("d", function () {
            a.Ri && a.Ri.pK()
        }), {group: "操作", name: "反对"}).register("t", this.dG, this), {
            group: "操作",
            name: "感谢"
        }).register("s c", this.NF, this), {group: "操作", name: "收藏"});
        if (z.rm.MG && (0, window.$)(".js-administer", FC(this))[0]) {
            var b = this, c = z.Uc ? "⌘" : "ctrl", d = function () {
                b.TJ();
                b.Rq.xb(0)
            };
            z.wl(z.wl(this.Df.register("meta+.", d), {group: "管理", name: "展开菜单", key: c + "+."}).register("meta+k",
                function () {
                    d();
                    var a = b.Rq.ii(0);
                    a.Ya && a.Ya() && (a.Iu(), a.Ya().xb(0))
                }), {group: "管理", name: "展开折叠子菜单 (Kill)", key: c + "+k"})
        }
    };
    z.e.Sj = function () {
        var a = (0, window.$)(".js-share", this.m()).get(0), b = this.Ng.url;
        a && b && (a = z.LC(a, "answer", this.tj, b), z.Ac(this, a), a.Db(this))
    };
    z.e.oi = function (a) {
        var b = new z.PC(a);
        this.L(b);
        b.w(this.h);
        this.g("expandRequest", (0, z.q)(this.expand, this));
        this.g("expand", function (a) {
            a.target === a.currentTarget && b.expand()
        });
        this.g("collapse", function (a) {
            a.target === a.currentTarget && b.collapse()
        });
        b.$G && this.v().ya(b, "expand", this.st)
    };
    z.e.Ty = function () {
        var a = (0, window.$)(".phone-actions", this.m());
        if (a.length) {
            var b = new z.qz;
            b.w((0, window.$)(".menu", a)[0]);
            b = new z.xz("operation", b);
            b.uk = !0;
            z.zz(b);
            yz(b);
            b.Ob = z.Fl;
            b.w((0, window.$)(".menubutton", a)[0])
        }
    };
    z.e.dG = yC(function (a) {
        if (a = a.target) {
            var b = "true" === a.getAttribute("data-thanked");
            b ? (pr(a, "感谢"), a.setAttribute("data-thanked", !1), window.$.post("/answer/cancel_thanks", {aid: this.jb})) : (pr(a, "取消感谢"), a.setAttribute("data-thanked", !0), window.$.post("/answer/thanks", {aid: this.jb}));
            (0, z.Gi)(a, {action: b ? "UnThank" : "Thank", element: "Button"})
        }
    }, {Fb: "question_answer_thank"});
    z.e.bQ = yC(function (a) {
        a = a.target;
        var b = !!a.m;
        z.Y.tb({type: "ga_click_answer_not_helpful", target: b ? a.m() : a});
        this.cx && "pending" === this.cx.state() && this.cx.abort();
        var c = -1 < (b ? a.Qg() : a.innerHTML).indexOf("撤销"), d = c ? "没有帮助" : "撤销没有帮助";
        b ? a.Jp(d) : a.innerHTML = d;
        d = c ? "/answer/helpful" : "/answer/not_helpful";
        b || z.xr(a);
        this.cx = window.$.post(d, {aid: this.jb});
        (0, z.Gi)(this, {action: c ? "UnNoHelp" : "NoHelp", element: "Button"})
    }, !0);
    z.e.NF = yC(function () {
        var a = z.Rz.ba();
        Uz(a, this.jb);
        a.show();
        (0, z.Gi)(this, {action: "CollectIntent", element: "Button"})
    }, {Fb: "question_answer_collect", qe: !0});
    z.e.Uy = function () {
        var a = (0, window.$)(".js-settings", FC(this))[0];
        if (a) {
            var b = this;
            this.gD = new fA(this);
            this.gD.w(a);
            this.v().g(this.gD, lA, function () {
                if (b.Ga) {
                    var a = b.Ga.Yc();
                    b.removeChild(b.Ga, !0);
                    b.Ga.H();
                    b.Ga = null;
                    b.ZE();
                    a && b.Ga.Ch()
                }
            })
        }
    };
    z.e.TJ = function () {
        if (this.Rq) return this.Rq.G(!0);
        var a = dD(this);
        a && (z.Hz(a, new z.cz(this.tM, 1, !0), 0, new z.pg(5, 0, 5, 0)), gD(this, a), this.Rq = a)
    };
    z.e.fQ = function () {
        var a = this, b = void 0, c, d;
        this.pi ? (b = "取消隐藏回答", c = "确认取消隐藏？", d = "cancel_collapse") : (b = "隐藏回答", c = "隐藏后该回答将不展示也不流通，是否确认隐藏？", d = "collapse");
        z.X.confirm(b, c, function (b) {
            b && window.$.post("/answer/" + a.tj + "/org_" + d).then(function (a) {
                a.r ? z.X.message(a.msg) : (z.X.message("操作成功！"), window.location.reload())
            })
        })
    };
    z.e.Ul = function () {
        (0, window.$)("img.lazy:not([data-lazyloaded])", this.m()).attr("data-lazyloaded", "").lazyload({
            load: function () {
                (0, window.$)(this).trigger("contentchange")
            }, data_attribute: "actualsrc", event: "scroll updatelazy", threshold: 400
        })
    };
    z.e.Fc = z.aa(40);
    z.e.LJ = function (a) {
        (0, window.$)(".feed-question-detail-item", this.h).toggleClass("question-detail-expanded", a)
    };
    z.Ca(z.cD.prototype, z.tG);
    z.x(z.jD, z.xC);
    z.e = z.jD.prototype;
    z.e.Po = "post-link";
    z.e.C = function () {
        var a = this;
        z.jD.o.C.call(this);
        this.Yy();
        this.oi();
        this.Ty();
        this.Sj();
        lD(this);
        kD(this);
        z.xo(this, {module: "PostItem"}, function () {
            return {card: {card_type: "Content", content: {type: "Post", id: a.jb}}}
        })
    };
    z.e.JF = function () {
        return "feed_article_" + EC(this) + (this.Yc() ? "_expand" : "")
    };
    z.e.Sj = function () {
        var a = (0, window.$)("a[name\x3dshare], .js-share", this.h).get(0),
            b = (0, window.$)(".post-link, .js-title-link", this.h).get(0);
        a && b && z.LC(a, "post", this.tj, b.href).Db(this)
    };
    z.e.Fc = z.aa(39);
    z.e.xy = z.aa(41);
    z.e.oy = z.aa(42);
    z.e.oi = function (a) {
        var b = new z.PC(a);
        this.L(b);
        b.w(this.h);
        this.fK = b;
        this.g("expandRequest", (0, z.q)(this.expand, this));
        this.g("expand", function (a) {
            a.target === a.currentTarget && b.expand()
        });
        this.g("collapse", function (a) {
            a.target === a.currentTarget && b.collapse()
        });
        b.$G && this.v().ya(b, "expand", this.st)
    };
    z.e.Lh = function () {
        var a = this;
        z.jD.o.Lh.call(this);
        z.wl(this.Df.register("v", function () {
            a.Ri && a.Ri.OB()
        }), {group: "操作", name: "赞同"})
    };
    z.e.Ty = function () {
        var a = (0, window.$)(".phone-actions", this.m());
        if (a.length) {
            var b = new z.qz;
            b.w((0, window.$)(".menu", a)[0]);
            b = new z.xz("operation", b);
            b.uk = !0;
            z.zz(b);
            yz(b);
            b.Ob = z.Fl;
            b.w((0, window.$)(".menubutton", a)[0])
        }
    };
    z.Ca(z.jD.prototype, z.tG);
    z.l(z.mD, z.xC);
    z.mD.prototype.Fc = z.aa(38);
    z.x(z.oD, z.lz);
    z.oD.prototype.Nd = function () {
        return this.dispatchEvent("action")
    };
    z.Tp("goog-option", function () {
        return new z.oD(null)
    });
    z.x(z.pD, z.R);
    z.e = z.pD.prototype;
    z.e.cC = !z.Uj;
    z.e.aC = !z.Uj;
    z.e.wH = !1;
    z.e.Ii = function (a) {
        this.ah = a
    };
    z.e.init = function () {
        this.Md = z.L("zh-load-more");
        this.w(this.uO)
    };
    z.e.C = function () {
        z.pD.o.C.call(this);
        this.en = 1;
        tD(this);
        this.Nk = (0, window.$)(this.Md);
        this.Md && (rD(this), this.v().g(this.Md, "click", function () {
            this.Co = !0;
            this.Hh && "pending" === this.Hh.state() && 1 === this.en ? (this.Hh.done((0, z.q)(this.ik, this)), this.jB = !0, z.qD(this, !0)) : this.cC && this.bu ? (this.ik(this.bu), this.bu = null) : (z.qD(this, !0), this.eh())
        }), this.cC && (this.IB = new z.fl(this.dA, 100, this), this.v().g(window, "scroll", function () {
            this.IB.fire()
        })));
        uD(this, this.gb())
    };
    z.e.ti = function () {
        this.eh(!0)
    };
    z.e.dA = function () {
        var a = this.Md;
        a && z.Kg(a) && 1E3 >= a.getBoundingClientRect().top - z.Oe().height && !(this.bu || this.Hh && "pending" === this.Hh.state()) && (this.aC && (3 !== this.en || this.wH ? (this.Co = !1, this.en++, this.jB = !0) : (this.en = 1, this.jB = !1)), this.eh())
    };
    z.e.eh = function (a, b, c) {
        b = b || z.p;
        if (!this.Hh || "pending" !== this.Hh.state()) {
            var d = this.BA(window.$.extend(this.params, {offset: this.offset, start: this.Ku}));
            z.Y.tb({type: "topstory_feed_more"});
            (0, z.Gi)(this, {action: this.Co ? "LoadMore" : "RollForMore", element: "Button"});
            this.Hh = window.$.post(this.url, d).done(b).done(window.$.proxy(function (b) {
                if (c) return c.call(this, b);
                this.cC && !a ? this.jB ? this.ik(b) : (this.bu = b, z.qD(this, !1)) : this.ik(b)
            }, this));
            1 !== this.en && z.qD(this, !0);
            return this.Hh
        }
    };
    z.e.BA = function (a) {
        return a
    };
    z.e.ik = function (a) {
        if (a && !a.r) {
            var b = a.msg, c = b[0], d = b[1], f;
            2 < b.length && (f = b[2], this.Md.setAttribute("data-next", f));
            0 < c && (this.$q(d), this.offset = this.Tz ? this.Tz(this.gb()) : this.offset + c);
            b = !0;
            b = this.Bs ? this.Bs(a) : !(-1 === f || 10 > c);
            z.Q(this.Md, b);
            z.qD(this, !1);
            z.sD(this)
        }
    };
    z.e.gb = function () {
        return z.Qo(this.ah, this.h)
    };
    z.e.sA = function (a) {
        return a.id.replace(/^\w+-/, "")
    };
    z.e.$q = function (a, b) {
        var c = z.na(a) ? a.join("") : a, c = z.We(c + " "), d = z.Qo(this.ah, c);
        uD(this, d);
        "prepend" === b ? z.af(c, this.h.firstChild) : this.h.appendChild(c);
        tD(this)
    };
    z.e.Kt = z.p;
    z.x(z.vD, z.G);
    z.vD.prototype.handleEvent = function (a) {
        if ("input" == a.type) z.C && z.E(10) && 0 == a.keyCode && 0 == a.charCode || (wD(this), this.dispatchEvent(xD(a))); else if ("keydown" != a.type || to(a)) {
            var b = "keydown" == a.type ? this.h.value : null;
            z.C && 229 == a.keyCode && (b = null);
            var c = xD(a);
            wD(this);
            this.ma = z.vd(function () {
                this.ma = null;
                this.h.value != b && this.dispatchEvent(c)
            }, 0, this)
        }
    };
    z.vD.prototype.D = function () {
        z.vD.o.D.call(this);
        this.T.H();
        wD(this);
        delete this.h
    };
    z.x(yD, z.G);
    var zD = 0;
    yD.prototype.Yz = function () {
        this.el()
    };
    yD.prototype.el = function () {
        var a = this.di.value.length;
        if (a > this.wt) {
            var b = this.di.scrollTop, c = this.di.scrollLeft;
            this.di.value = this.di.value.substring(0, this.wt);
            a = this.wt;
            this.di.scrollTop = b;
            this.di.scrollLeft = c
        }
        this.TE && z.mf(this.TE, String(1 == this.jO ? a : this.wt - a))
    };
    yD.prototype.D = function () {
        yD.o.D.call(this);
        delete this.di;
        this.$y.H();
        this.$y = null
    };
    var FD;
    z.x(z.AD, z.Xj);
    z.e = z.AD.prototype;
    z.e.init = function () {
        this.Ts || (this.Ts = !0, this.B(), this.cc())
    };
    z.e.cc = function () {
        z.C || (new z.Xs("搜索问题")).w(this.$c);
        this.ca = new z.kt("/redirect-question/autocomplete", this.$c, null, null, z.L("zh-question-redirect-diag-content"), !1);
        this.ca.dn = !1;
        this.ca.vh(!0);
        this.v().g(this.ca, "suggestionsupdate", Pr);
        this.v().g(this.ca, "select", this.tT).g(this.lN, "click", function () {
            this.sa.G(!1)
        })
    };
    z.e.tT = function () {
        var a = this.ca.Ej();
        if ("search_link" === a[0]) window.open("/search?q\x3d" + (0, window.encodeURIComponent)(a[1]) + "\x26type\x3dquestion"); else {
            this.$c.value = "";
            var b = a[3], a = a[1];
            this.sa.G(!1);
            this.$c.value = "";
            this.xhr = new z.Z(!0);
            this.v().ya(this.xhr, "complete", this.DM);
            this.xhr.ajax("/question/redirect", "qid\x3d" + this.pa + "\x26rqid\x3d" + b);
            this.tu = b;
            this.aJ = a
        }
    };
    z.e.DM = function () {
        var a = z.Rn(this.xhr);
        a && (a.r ? z.X.message(a.msg) : this.aj ? (this.aj.innerHTML = "已经重定向", this.aj.setAttribute("data-disabled", 1)) : this.dispatchEvent("change"))
    };
    z.e.B = function () {
        this.h = z.O("div", {id: "zh-question-redirect-diag"}, ["将问题跳转至", z.O("div", {id: "zh-question-redirect-diag-content"}, this.$c = z.O("input", {
            type: "text",
            "class": "zg-form-text-input"
        })), z.O("div", "zm-command", this.lN = z.O("a", {
            href: "javascript:;",
            "class": "zm-command-cancel",
            name: "cancel"
        }, "放弃操作"))]);
        this.sa = new z.V(null);
        this.sa.Na("问题重定向");
        z.Lj(this.sa, null);
        this.sa.S().appendChild(this.h)
    };
    z.e.show = function () {
        this.init();
        this.sa.G(!0)
    };
    var uG = {}, uG = function () {
        z.G.call(this)
    };
    z.x(uG, z.Xj);
    uG.Hv = [["需要详细阐述", "答案过于简短或表述不清晰，请完善答案。"], ["答非所问", "没有正面或直接回答问题，请修改答案。"], ["应作为问题的评论", "该内容是对问题本身的评论而不是回答，请改为发布到评论。"], ["应作为答案的评论", "该内容是对另外一个答案的评论或回应，而不是回答问题，请改为发布到评论。"], ["内容重复", "与已有答案重复，请修改答案。"], ["内容已过期", "答案的时效性已过，请更新答案。"], ["需要注明关联利益", "有广告、推销嫌疑，请注明作者与利益方的关系。"]];
    uG.Tj = null;
    uG.ba = function () {
        uG.Tj || (uG.Tj = new uG, uG.Tj.init());
        return uG.Tj
    };
    z.e = uG.prototype;
    z.e.init = function () {
        if (!this.h) {
            this.B();
            this.cc();
            var a = new gx(this.h);
            An(a);
            a.rG = !0;
            a.vm(!0);
            a.G(!1);
            a.zA = 0;
            a.V() && a.ha();
            z.hx(a, new z.pg(13, 0, 0, -22));
            this.yA = a
        }
    };
    z.e.cc = function () {
        this.v().g(this.h, "click", this.qT)
    };
    z.e.qT = function (a) {
        "A" === a.target.tagName && (a = a.target.getAttribute("data-index"), this.UN.tY(a), this.yA.G(!1))
    };
    z.e.B = function () {
        var a = z.O("div", {
            id: "zh-answer-flag-popup",
            "class": "zg-r5px zu-hovercard-wrap"
        }, [z.O("div", "zg-r5px zu-hovercard-inner", [z.O("div", {id: "zh-answer-flag-popup-header"}, [z.O("a", {
            "class": "zg-right",
            href: "/question/19867017",
            target: "_blank"
        }, "这是什么？"), "选择一个理由："]), this.GI = z.O("div", {id: "zh-answer-flog-options-wrap"})]), z.O("div", "zu-hovercard-spin-top")]);
        z.y(uG.Hv, function (a, c) {
                var d = z.O("a", {href: "javascript:;", "class": "zm-menu-item-link"}, a[0]);
                d.setAttribute("data-index", c);
                this.GI.appendChild(d)
            },
            this);
        window.document.body.appendChild(a);
        this.h = a
    };
    z.e.show = function (a, b) {
        this.yA.setPosition(new z.ex(a, 1));
        BD(this, b.xY());
        this.yA.G(!0);
        this.UN = b
    };
    var ED;
    z.x(CD, z.Xj);
    CD.prototype.init = function () {
        this.B();
        this.hn()
    };
    CD.prototype.B = function () {
        this.h = z.O("div", null, [z.O("div", "zg-section", [z.O("div", null, "标记："), this.ul = z.O("select")]), z.O("div", null, [z.O("div", null, "原因"), this.GA = z.O("textarea", {style: "width:96%;border:solid 1px #666;height:66px;padding:5px"})]), this.wn = z.O("div", "zm-command", [z.O("a", {
            "class": "zg-mr10",
            href: "javascript:void(0);",
            name: "cancel"
        }, "取消"), z.O("a", {"class": "zg-btn-blue", href: "javascript:void(0);", name: "confirm"}, "确定")])]);
        this.ul.appendChild(z.O("option", {value: "no"}, "选择标记原因"));
        z.y(uG.Hv,
            function (a, b) {
                this.ul.appendChild(z.O("option", {value: b}, a[0]))
            }, this);
        this.sa = new z.V(null);
        this.sa.Na("标记答案");
        z.Lj(this.sa, null);
        this.sa.S().appendChild(this.h)
    };
    CD.prototype.hn = function () {
        this.v().g(this.ul, "change", function () {
            var a = this.ul.value;
            this.GA.value = "no" === a ? "" : uG.Hv[+a][1]
        }).g(this.wn, "click", function (a) {
            "cancel" === a.target.name ? this.sa.G(!1) : this.GA.value && "no" !== this.ul.value && (this.Gx = new z.Z(!0), this.v().g(this.Gx, "complete", function () {
                var a = z.Rn(this.Gx);
                a && !a.r ? (this.aj.innerHTML = "已经标记", this.sa.G(!1)) : z.X.message(a.msg)
            }), a = z.sr(this.GA.value), this.Gx.ajax("/answer/flag", "answer_id\x3d" + this.kM + "\x26flag\x3d" + this.ul.value + "\x26reason\x3d" +
                (0, window.encodeURIComponent)(a)))
        })
    };
    CD.prototype.show = function () {
        this.sa.G(!0)
    };
    z.LD = {
        digits: {required: "请填写数字验证码"},
        password: {required: "请填写密码"},
        password_repeat: {required: "请填写密码"},
        email: {required: "请填写邮箱"},
        phone_no: {required: "请填写手机号"}
    };
    z.v("ZH.m", z.ND);
    z.x(z.OD, z.G);
    z.OD.prototype.show = function () {
        this.cf || (this.cf = this.Lw(), this.cf.g("hide", this.gP, !1, this));
        this.cf.G(!0)
    };
    z.OD.prototype.hide = function () {
        this.cf && this.cf.G(!1)
    };
    z.OD.prototype.ub = function () {
        return !!this.cf && this.cf.V()
    };
    z.PD.prototype.Na = function (a) {
        this.Ti.Na(a);
        return this
    };
    z.PD.prototype.Bd = function (a, b, c) {
        c = c || z.jp();
        this.sn.set(c, a);
        this.rn[c] = b;
        return this
    };
    z.PD.prototype.Kh = function (a) {
        z.hj(this.Ti.fi(), a);
        return this
    };
    z.PD.prototype.ia = function (a) {
        this.Ti.S().appendChild(a);
        return this
    };
    z.e = z.OD.prototype;
    z.e.gs = z.aa(23);
    z.e.dQ = function (a) {
        return (a = this.Cn(a)) ? this.dispatchEvent(a) : !1
    };
    z.e.eo = function () {
        return this.dispatchEvent("cancel")
    };
    z.e.D = function () {
        this.cf && (this.hide(), this.cf.H(), this.cf = null);
        z.OD.o.D.call(this)
    };
    z.e.gP = function () {
        this.dispatchEvent("afterhide")
    };
    z.x(z.TD, z.wA);
    z.e = z.TD.prototype;
    z.e.He = function (a) {
        return a == this.GN
    };
    z.e.execCommand = function (a, b) {
        return this.gf.apply(this, arguments)
    };
    z.e.BF = function () {
        return this.Ia
    };
    z.e.gf = function (a, b) {
        this.xJ || VD(this);
        this.Ia || (this.Ia = this.Kw(z.J(this.F.Tk), b));
        var c = z.ZA(this.F);
        this.sJ = yA(this);
        this.BJ = c && new z.av(c);
        Au(this.F.ib.Va());
        z.ld(this.Ia, "afterhide", this.co, !1, this);
        this.F.Wg = !0;
        this.Ia.show();
        this.dispatchEvent("dialogOpened");
        z.$A(this.F);
        return !0
    };
    z.e.co = function () {
        this.F.Wg = !1;
        z.UD(this);
        this.sJ();
        this.xJ || VD(this);
        this.dispatchEvent("dialogClosed");
        z.$A(this.F);
        this.F.Hr.selectionchange = (0, z.I)()
    };
    z.e.D = function () {
        VD(this);
        z.TD.o.D.call(this)
    };
    z.e.xJ = !1;
    z.e.fz = !1;
    z.x(WD, z.OD);
    z.x(XD, z.Lc);
    z.e = WD.prototype;
    z.e.template = (0, z.Rv)('\x3cdiv class\x3d"zm-img-uploader"\x3e\x3ciframe src\x3d"about:blank" name\x3d"av_up_frame" style\x3d"position: absolute; height: 0; width: 0; left: -9000px; "\x3e\x3c/iframe\x3e\x3cdiv class\x3d"zg-section zm-img-uploader-tab"\x3e\x3ca href\x3d"javascript:;" class\x3d"tab-nav selected"\x3e上传图片\x3c/a\x3e 或 \x3ca href\x3d"javascript:;" class\x3d"tab-nav"\x3e引用站外图片\x3c/a\x3e\x3c/div\x3e\x3cform class\x3d"zg-clear" target\x3d"av_up_frame" method\x3d"POST" enctype\x3d"multipart/form-data" action\x3d"\x3c%\x3d uploadURL %\x3e"\x3e\x3cdiv class\x3d"tab-content selected \x3c% if (canStylize) { %\x3einline\x3c% } %\x3e"\x3e\x3c% if (canStylize) { %\x3e\x3cinput type\x3d"file" name\x3d"upload_file" style\x3d"opacity:0;height:0;width:0;font-size:0;position:absolute;"\x3e\x3ca href\x3d"javascript:;" class\x3d"browser zg-btn-blue"\x3e选择图片\x3c/a\x3e\x3c% } else { %\x3e\x3cinput type\x3d"file" name\x3d"upload_file"\x3e\x3c% } %\x3e\x3c/div\x3e\x3cdiv class\x3d"tab-content"\x3e\x3cinput type\x3d"text" autocomplete\x3d"off" name\x3d"upload_file_url" class\x3d"zm-editable-editor-input zg-form-text-input"\x3e\x3ca href\x3d"javascript:;" class\x3d"insert zg-btn-blue zm-uploader-button-fix"\x3e确认\x3c/a\x3e\x3c/div\x3e\x3cspan style\x3d"display: none; " class\x3d"zm-img-uploader-loading"\x3e正在上传\x3c/span\x3e\x3cspan style\x3d"display: none; " class\x3d"zm-img-uploader-error"\x3e上传图片失败，请稍后重试\x3c/span\x3e\x3c/form\x3e\x3cdiv class\x3d"zg-gray"\x3e请不要上传与回答问题无关的图片，详细请看 \x3ca href\x3d"/question/20064580" target\x3d"_blank"\x3e知乎图片使用规范\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"zm-command"\x3e\x3ca class\x3d"cancel" href\x3d"javascript:;"\x3e取消\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e');
    z.e.Lw = function () {
        var a = z.We(this.template({uploadURL: this.uq, canStylize: this.qN}));
        z.Db({
            form: "form",
            DB: ".zm-img-uploader-tab",
            gh: ".zm-img-uploader-loading",
            ff: ".zm-img-uploader-error",
            kK: "input[type\x3dtext]",
            Qn: "input[type\x3dfile]",
            AD: ".browser",
            xw: ".cancel",
            jR: ".insert"
        }, function (b, d) {
            this[d] = (0, window.$)(b, a).get(0)
        }, this);
        this.T.g(z.Y, "iframe_data", this.Uv).g(this.Qn, "change", this.nU).g(this.jR, "click", this.kR).g(this.xw, "click", function () {
            this.eo();
            this.hide()
        }).g(this.DB, "click", function (a) {
            a =
                (0, window.$)(a.target);
            a.is("a") && !a.is(".selected") && YD(this, a.index())
        });
        this.cE = a;
        z.Vm || (YD(this, 1), (0, window.$)(this.DB).replaceWith("\x3cstrong\x3e输入站外图片地址：\x3c/strong\x3e"));
        this.AD && this.T.g(this.AD, "click", function () {
            this.Qn.click()
        });
        var b = new z.PD(this);
        b.Na("插入图片").ia(this.cE);
        b = z.SD(b);
        z.Lj(b, null);
        return b
    };
    z.e.nU = function () {
        this.Qn.value && (Jr(this.Qn.value) ? (this.kK.value = "", z.Q(this.gh, !0), z.Q(this.ff, !1), this.form.submit()) : ZD(this, "图片不是 .jpg 或 .png 格式无法上传"))
    };
    z.e.kR = function () {
        var a = z.sr(this.kK.value);
        a ? z.Ja(a, "http://") ? (this.Qn.value = "", z.Q(this.gh, !0), z.Q(this.ff, !1), this.form.submit()) : ZD(this, "我们目前不支持该协议。") : ZD(this, "请填写图片地址。")
    };
    z.e.Uv = function (a) {
        z.Q(this.gh, !1);
        this.ym(a.xf)
    };
    z.e.ym = function (a) {
        a && !a.r ? (this.dispatchEvent(this.Cn(a.msg)), this.hide()) : ZD(this, a.msg)
    };
    z.e.Cn = function (a) {
        return new XD(a)
    };
    z.e.D = function () {
        this.T.H();
        this.T = null;
        WD.o.D.call(this)
    };
    z.x(z.$D, z.TD);
    z.e = z.$D.prototype;
    z.e.md = z.ib("ImageDialogPlugin");
    z.e.gf = function (a, b) {
        var c = this.F;
        return c.tf || (c.Wf(), c.tf) ? z.$D.o.gf.call(this, a, b) : !1
    };
    z.e.Kj = function (a) {
        if (a && "mouseup" === a.type) {
            var b = a.target;
            b && "IMG" === b.nodeName && (a = z.Gu(b), a || (a = window.document.createElement("br"), z.bf(a, b)), z.Pu(a))
        }
    };
    z.e.co = function (a) {
        z.$D.o.co.call(this, a)
    };
    z.e.Kw = function (a) {
        a = new WD(a);
        this.T.g(a, "ok", this.jo).g(a, "cancel", this.fy);
        return a
    };
    z.e.D = function () {
        z.$D.o.D.call(this);
        this.T.H()
    };
    z.e.jo = function (a) {
        z.UD(this);
        var b = z.xA(this), c;
        c = a.II ? b.B("IMG", {
            "class": "origin_image zh-lightbox-thumb",
            "data-original": a.II,
            title: "点击查看原图",
            src: a.Tl
        }) : b.B("IMG", {"class": "content_image", src: a.Tl});
        a.eJ && c.setAttribute("data-rawwidth", a.eJ);
        a.dJ && c.setAttribute("data-rawheight", a.dJ);
        a = z.ZA(this.F);
        if (z.Zu(a)) a.Bi(c), z.C || (z.Qu(c, !1), b.Va().focus()), z.$A(this.F), this.F.df(); else return null;
        this.T.removeAll()
    };
    z.e.fy = function () {
        this.T.removeAll()
    };
    var vG = z.u("Link");
    z.u("Edit Link");
    z.u("Text to display:");
    z.wG = z.u("Link to:");
    z.u("Web address");
    z.u("Link to a page or file somewhere else on the web");
    z.u("Test this link");
    z.u("{$startBold}Not sure what to put in the box?{$endBold} First, find the page on the web that you want to link to. (A {$searchEngineLink}search engine{$endLink} might be useful.) Then, copy the web address from the box in your browser's address bar, and paste it into the box above.", {
        startBold: "\x3cb\x3e",
        endBold: "\x3c/b\x3e",
        searchEngineLink: "\x3ca href\x3d'http://www.google.com/' target\x3d'_new'\x3e",
        endLink: "\x3c/a\x3e"
    });
    z.u("To what URL should this link go?");
    z.u("Email address");
    z.u("Link to an email address");
    z.u("Invalid email address");
    z.u("To what email address should this link?");
    z.u("{$preb}Be careful.{$postb} Remember that any time you include an email address on a web page, nasty spammers can find it too.", {
        preb: "\x3cb\x3e",
        postb: "\x3c/b\x3e"
    });
    z.u("Open this link in a new window");
    z.u("Image");
    z.x(aE, z.At);
    aE.prototype.next = function () {
        do aE.o.next.call(this); while (-1 == this.Ub);
        return this.node
    };
    z.x(z.bE, Mp);
    z.la(z.bE);
    var fE = 0;
    z.e = z.bE.prototype;
    z.e.B = function (a) {
        var b = this.Xf(a);
        a = a.K().B("DIV", b ? b.join(" ") : null, cE(this, a.Ua(), a.Rg(), a.K()));
        z.bj(a, "grid");
        return a
    };
    z.e.Mw = function (a, b) {
        var c = b.B("TABLE", this.U() + "-table", b.B("TBODY", this.U() + "-body", a));
        c.cellSpacing = 0;
        c.cellPadding = 0;
        return c
    };
    z.e.Ob = function () {
        return !1
    };
    z.e.w = function () {
        return null
    };
    z.e.ia = function (a, b) {
        if (a) {
            var c = z.Le(window.document, "TBODY", this.U() + "-body", a)[0];
            if (c) {
                var d = 0;
                z.y(c.rows, function (a) {
                    z.y(a.cells, function (a) {
                        z.$e(a);
                        if (b) {
                            var c = b[d++];
                            c && a.appendChild(c)
                        }
                    })
                });
                if (d < b.length) {
                    for (var f = [], g = z.J(a), h = c.rows[0].cells.length; d < b.length;) {
                        var k = b[d++];
                        f.push(dE(this, k, g));
                        f.length == h && (k = eE(this, f, g), c.appendChild(k), f.length = 0)
                    }
                    if (0 < f.length) {
                        for (; f.length < h;) f.push(dE(this, "", g));
                        k = eE(this, f, g);
                        c.appendChild(k)
                    }
                }
            }
            z.zo(a, !0, z.B)
        }
    };
    z.e.U = function () {
        return "goog-palette"
    };
    z.x(hE, z.G);
    z.e = hE.prototype;
    z.e.qh = null;
    z.e.Af = null;
    z.e.Dl = function () {
        return this.Ie.length
    };
    z.e.ii = function (a) {
        return this.Ie[a] || null
    };
    z.e.Fa = function (a) {
        this.bj(a, this.Dl())
    };
    z.e.bj = function (a, b) {
        a && (this.um(a, !1), z.xb(this.Ie, b, 0, a))
    };
    z.e.removeItem = function (a) {
        a && z.tb(this.Ie, a) && a == this.qh && (this.qh = null, this.dispatchEvent("select"))
    };
    z.e.lf = function () {
        return this.qh
    };
    z.e.gb = function () {
        return z.vb(this.Ie)
    };
    z.e.Cf = function (a) {
        a != this.qh && (this.um(this.qh, !1), this.qh = a, this.um(a, !0));
        this.dispatchEvent("select")
    };
    z.e.Dj = function () {
        var a = this.qh;
        return a ? z.lb(this.Ie, a) : -1
    };
    z.e.Rp = function (a) {
        this.Cf(this.ii(a))
    };
    z.e.clear = function () {
        var a = this.Ie;
        if (!z.na(a)) for (var b = a.length - 1; 0 <= b; b--) delete a[b];
        a.length = 0;
        this.qh = null
    };
    z.e.D = function () {
        hE.o.D.call(this);
        delete this.Ie;
        this.qh = null
    };
    z.e.um = function (a, b) {
        a && ("function" == typeof this.Af ? this.Af(a, b) : "function" == typeof a.gB && a.gB(b))
    };
    z.x(z.jE, Vp);
    z.e = z.jE.prototype;
    z.e.vc = null;
    z.e.Ta = -1;
    z.e.oa = null;
    z.e.D = function () {
        z.jE.o.D.call(this);
        this.oa && (this.oa.H(), this.oa = null);
        this.vc = null;
        this.Fn.H()
    };
    z.e.wm = function (a) {
        z.jE.o.wm.call(this, a);
        mE(this);
        this.oa ? (this.oa.clear(), iE(this.oa, a)) : (this.oa = new hE(a), a = (0, z.q)(this.um, this), this.oa.Af = a, this.v().g(this.oa, "select", this.Kj));
        this.Ta = -1
    };
    z.e.Qg = function () {
        return ""
    };
    z.e.Jp = function () {
    };
    z.e.nd = function (a) {
        z.jE.o.nd.call(this, a);
        var b = gE(this.M, this, a.target);
        b && a.relatedTarget && z.lf(b, a.relatedTarget) || b == nE(this) || (a = this.Ua(), this.xb(a ? z.lb(a, b) : -1))
    };
    z.e.fe = function (a) {
        z.jE.o.fe.call(this, a);
        if (this.tc() && (a = gE(this.M, this, a.target), a != nE(this))) {
            var b = this.Ua();
            this.xb(b ? z.lb(b, a) : -1)
        }
    };
    z.e.Nd = function (a) {
        var b = nE(this);
        return b ? (this.Cf(b), z.jE.o.Nd.call(this, a)) : !1
    };
    z.e.Zb = function (a) {
        var b = this.Ua(), b = b ? b.length : 0, c = this.vc.width;
        if (0 == b || !this.isEnabled()) return !1;
        if (13 == a.keyCode || 32 == a.keyCode) return this.Nd(a);
        if (36 == a.keyCode) return this.xb(0), !0;
        if (35 == a.keyCode) return this.xb(b - 1), !0;
        var d = 0 > this.Ta ? this.Dj() : this.Ta;
        switch (a.keyCode) {
            case 37:
                if (-1 == d || 0 == d) d = b;
                this.xb(d - 1);
                a.preventDefault();
                return !0;
            case 39:
                return d == b - 1 && (d = -1), this.xb(d + 1), a.preventDefault(), !0;
            case 38:
                -1 == d && (d = b + c - 1);
                if (d >= c) return this.xb(d - c), a.preventDefault(), !0;
                break;
            case 40:
                if (-1 ==
                d && (d = -c), d < b - c) return this.xb(d + c), a.preventDefault(), !0
        }
        return !1
    };
    z.e.Kj = function () {
    };
    z.e.Rg = function () {
        return this.vc
    };
    z.e.xb = function (a) {
        a != this.Ta && (oE(this, this.Ta, !1), this.sz = this.Ta, this.Ta = a, oE(this, a, !0), this.dispatchEvent("j"))
    };
    z.e.Dj = function () {
        return this.oa ? this.oa.Dj() : -1
    };
    z.e.lf = function () {
        return this.oa ? this.oa.lf() : null
    };
    z.e.Rp = function (a) {
        this.oa && this.oa.Rp(a)
    };
    z.e.Cf = function (a) {
        this.oa && this.oa.Cf(a)
    };
    z.e.Mc = function (a) {
        a && -1 == this.Ta ? this.xb(-1 < this.sz ? this.sz : 0) : a || this.xb(-1);
        z.jE.o.Mc.call(this, a)
    };
    z.e.um = function (a, b) {
        if (this.m() && a) {
            var c = a.parentNode;
            z.uo(c, this.M.U() + "-cell-selected", b);
            z.cj(c, "selected", b)
        }
    };
    z.x(kE, Vp);
    z.x(z.pE, mz);
    z.la(z.pE);
    z.pE.prototype.B = function (a) {
        return a.K().B("DIV", this.Xf(a).join(" ") + " goog-inline-block", " ")
    };
    z.pE.prototype.w = function (a, b) {
        b = z.pE.o.w.call(this, a, b);
        z.hj(b, "goog-inline-block");
        return b
    };
    z.pE.prototype.U = function () {
        return "goog-toolbar-separator"
    };
    z.x(z.qE, Vr);
    z.la(z.qE);
    z.qE.prototype.Wn = function (a) {
        return "HR" == a.tagName ? new z.nz(z.pE.ba()) : z.qE.o.Wn.call(this, a)
    };
    z.qE.prototype.U = function () {
        return "goog-toolbar"
    };
    z.qE.prototype.AF = function () {
        return z.zF
    };
    z.x(rE, tz);
    z.la(rE);
    rE.prototype.U = function () {
        return "goog-toolbar-button"
    };
    z.x(z.sE, z.bq);
    z.Tp("goog-toolbar-button", function () {
        return new z.sE(null)
    });
    z.x(tE, vz);
    z.la(tE);
    tE.prototype.createCaption = function (a, b) {
        return tE.o.createCaption.call(this, uE(a, b), b)
    };
    tE.prototype.Ea = function (a, b) {
        a && vE(this.S(a), b)
    };
    tE.prototype.Ee = function (a) {
        var b = a.m();
        this.Ea(b, a.X());
        z.hj(b, "goog-color-menu-button");
        tE.o.Ee.call(this, a)
    };
    z.x(wE, z.jE);
    wE.prototype.Ft = null;
    wE.prototype.bt = null;
    wE.prototype.ay = function () {
        var a = this.lf();
        return a ? (a = Fo(a, "background-color"), yE(a)) : null
    };
    wE.prototype.Qp = function (a) {
        a = yE(a);
        this.Ft || (this.Ft = z.nb(this.ur, function (a) {
            return yE(a)
        }));
        this.Rp(a ? z.lb(this.Ft, a) : -1)
    };
    z.x(zE, z.xz);
    var BE = {
        zX: "#000 #444 #666 #999 #ccc #eee #f3f3f3 #fff".split(" "),
        UX: "#f00 #f90 #ff0 #0f0 #0ff #00f #90f #f0f".split(" "),
        QX: "#f4cccc #fce5cd #fff2cc #d9ead3 #d0e0e3 #cfe2f3 #d9d2e9 #ead1dc #ea9999 #f9cb9c #ffe599 #b6d7a8 #a2c4c9 #9fc5e8 #b4a7d6 #d5a6bd #e06666 #f6b26b #ffd966 #93c47d #76a5af #6fa8dc #8e7cc3 #c27ba0 #cc0000 #e69138 #f1c232 #6aa84f #45818e #3d85c6 #674ea7 #a64d79 #990000 #b45f06 #bf9000 #38761d #134f5c #0b5394 #351c75 #741b47 #660000 #783f04 #7f6000 #274e13 #0c343d #073763 #20124d #4c1130".split(" ")
    };
    z.e = zE.prototype;
    z.e.ay = function () {
        return this.X()
    };
    z.e.Qp = function (a) {
        this.Ea(a)
    };
    z.e.Ea = function (a) {
        for (var b = 0, c; c = this.ii(b); b++) "function" == typeof c.Qp && c.Qp(a);
        zE.o.Ea.call(this, a)
    };
    z.e.io = function (a) {
        "function" == typeof a.target.ay ? this.Ea(a.target.ay()) : "none" == a.target.X() && this.Ea(null);
        zE.o.io.call(this, a);
        a.stopPropagation();
        this.dispatchEvent("action")
    };
    z.e.Cb = function (a, b) {
        a && 0 == this.Dl() && (this.th(AE(this.K())), this.Ea(this.X()));
        zE.o.Cb.call(this, a, b)
    };
    z.Tp("goog-color-menu-button", function () {
        return new zE(null)
    });
    z.x(CE, vz);
    z.la(CE);
    CE.prototype.U = function () {
        return "goog-toolbar-menu-button"
    };
    z.x(DE, CE);
    z.la(DE);
    DE.prototype.createCaption = function (a, b) {
        return wz(uE(a, b), this.U(), b)
    };
    DE.prototype.Ea = function (a, b) {
        a && vE(this.S(a), b)
    };
    DE.prototype.Ee = function (a) {
        this.Ea(a.m(), a.X());
        z.hj(a.m(), "goog-toolbar-color-menu-button");
        DE.o.Ee.call(this, a)
    };
    z.x(EE, zE);
    z.Tp("goog-toolbar-color-menu-button", function () {
        return new EE(null)
    });
    z.x(FE, z.xz);
    z.Tp("goog-toolbar-menu-button", function () {
        return new FE(null)
    });
    z.x(GE, z.xz);
    z.e = GE.prototype;
    z.e.oa = null;
    z.e.C = function () {
        GE.o.C.call(this);
        IE(this);
        LE(this)
    };
    z.e.Y = function (a) {
        GE.o.Y.call(this, a);
        (a = this.Qg()) ? HE(this, a) : this.lf() || this.Rp(0)
    };
    z.e.D = function () {
        GE.o.D.call(this);
        this.oa && (this.oa.H(), this.oa = null);
        this.Zw = null
    };
    z.e.io = function (a) {
        this.Cf(a.target);
        GE.o.io.call(this, a);
        a.stopPropagation();
        this.dispatchEvent("action")
    };
    z.e.Kj = function () {
        var a = this.lf();
        GE.o.Ea.call(this, a && a.X());
        IE(this)
    };
    z.e.th = function (a) {
        var b = GE.o.th.call(this, a);
        a != b && (this.oa && this.oa.clear(), a && (this.oa ? z.bh(a, function (a) {
            KE(a);
            this.oa.Fa(a)
        }, this) : JE(this, a)));
        return b
    };
    z.e.Fa = function (a) {
        KE(a);
        GE.o.Fa.call(this, a);
        this.oa ? this.oa.Fa(a) : JE(this, this.Ya());
        ME(this)
    };
    z.e.bj = function (a, b) {
        KE(a);
        GE.o.bj.call(this, a, b);
        this.oa ? this.oa.bj(a, b) : JE(this, this.Ya())
    };
    z.e.removeItem = function (a) {
        GE.o.removeItem.call(this, a);
        this.oa && this.oa.removeItem(a)
    };
    z.e.Cf = function (a) {
        if (this.oa) {
            var b = this.lf();
            this.oa.Cf(a);
            a != b && this.dispatchEvent("change")
        }
    };
    z.e.Rp = function (a) {
        this.oa && this.Cf(this.oa.ii(a))
    };
    z.e.Ea = function (a) {
        if (null != a && this.oa) for (var b = 0, c; c = this.oa.ii(b); b++) if (c && "function" == typeof c.X && c.X() == a) {
            this.Cf(c);
            return
        }
        this.Cf(null)
    };
    z.e.X = function () {
        var a = this.lf();
        return a ? a.X() : null
    };
    z.e.lf = function () {
        return this.oa ? this.oa.lf() : null
    };
    z.e.Dj = function () {
        return this.oa ? this.oa.Dj() : -1
    };
    z.e.Cb = function (a, b) {
        GE.o.Cb.call(this, a, b);
        this.ub() ? this.Ya().xb(this.Dj()) : ME(this)
    };
    z.Tp("goog-select", function () {
        return new GE(null)
    });
    z.x(OE, GE);
    z.Tp("goog-toolbar-select", function () {
        return new OE(null)
    });
    var TE = [10, 10, 13, 16, 18, 24, 32, 48];
    var xG, yG, cF, bF, zG, AG, BG, CG, SE, DG, EG, FG, GG, VE, HG, IG, JG, KG, LG, MG, NG, OG, PG, QG, RG, SG, TG, UG,
        VG, WG, XG, YG, ZG, $G, aH, bH, cH, dH, eH, fH, gH, hH, iH, jH, lH, mH, nH;
    for (xG = z.u("Normal"), yG = z.u("Normal / serif"), cF = [{caption: xG, value: "arial,sans-serif"}, {
        caption: yG,
        value: "times new roman,serif"
    }, {caption: "Courier New", value: "courier new,monospace"}, {
        caption: "Georgia",
        value: "georgia,serif"
    }, {caption: "Trebuchet", value: "trebuchet ms,sans-serif"}, {
        caption: "Verdana",
        value: "verdana,sans-serif"
    }], bF = {
        ja: [{caption: "ＭＳ Ｐゴシック", value: "ms pgothic,sans-serif"}, {
            caption: "ＭＳ Ｐ明朝",
            value: "ms pmincho,serif"
        }, {caption: "ＭＳ ゴシック", value: "ms gothic,monospace"}],
        ko: [{caption: "굴림", value: "gulim,sans-serif"},
            {caption: "바탕", value: "batang,serif"}, {caption: "굴림체", value: "gulimche,monospace"}],
        "zh-tw": [{caption: "新細明體", value: "pmingliu,serif"}, {caption: "細明體", value: "mingliu,serif"}],
        "zh-cn": [{caption: "宋体", value: "simsun,serif"}, {
            caption: "黑体",
            value: "simhei,sans-serif"
        }, {caption: "MS Song", value: "ms song,monospace"}]
    }, zG = z.u("Small"), AG = z.u("Normal"), BG = z.u("Large"), CG = z.u("Huge"), SE = [{
        caption: zG,
        value: 1
    }, {caption: AG, value: 2}, {caption: BG, value: 4}, {
        caption: CG,
        value: 6
    }], DG = z.u("Heading"), EG = z.u("Subheading"), FG = z.u("Minor heading"),
             GG = z.u("Normal"), VE = [{caption: DG, Aa: "H2"}, {caption: EG, Aa: "H3"}, {
        caption: FG,
        Aa: "H4"
    }, {
        caption: GG,
        Aa: "P"
    }], HG = z.u("Format"), IG = z.u("Format"), JG = z.u("Undo"), KG = z.u("Redo"), LG = z.u("Font"), MG = z.u("Font size"), NG = z.u("Text color"), OG = z.u("Bold"), PG = z.u("Italic"), QG = z.u("Underline"), RG = z.u("Text background color"), SG = z.u("Add or remove link"), TG = z.u("Numbered list"), UG = z.u("Bullet list"), VG = z.u("Decrease indent"), WG = z.u("Increase indent"), XG = z.u("Align left"), YG = z.u("Align center"), ZG = z.u("Align right"),
             $G = z.u("Justify"), aH = z.u("Remove formatting"), bH = z.u("Insert image"), cH = z.u("Strikethrough"), dH = z.u("Left-to-right"), eH = z.u("Right-to-left"), fH = z.u("Quote"), gH = z.u("Edit HTML source"), hH = z.u("Subscript"), iH = z.u("Superscript"), jH = z.u("Edit HTML"), z.kH = {}, lH = [{
        Aa: "+undo",
        R: JG,
        Pa: "tr-icon tr-undo",
        factory: dF,
        mb: !0
    }, {Aa: "+redo", R: KG, Pa: "tr-icon tr-redo", factory: dF, mb: !0}, {
        Aa: "+fontName", R: LG, Pa: "tr-fontName", factory: function (a, b, c, d, f, g) {
            var h = ZE(a, b, c, d, f, g);
            aF(h);
            HE(h, xG);
            z.hj(h.Ya().S(), "goog-menu-noaccel");
            h.Pi = function (a) {
                var b = null;
                a && 0 < a.length && (b = z.Zg(h.Ya(), PE(a)));
                b != h.lf() && h.Cf(b)
            };
            return h
        }, mb: !0
    }, {
        Aa: "+fontSize", R: MG, Pa: "tr-fontSize", factory: function (a, b, c, d, f, g) {
            var h = ZE(a, b, c, d, f, g);
            RE(h);
            HE(h, AG);
            z.hj(h.Ya().S(), "goog-menu-noaccel");
            h.Pi = function (a) {
                var b;
                if (b = z.pa(a)) b = a.match(lF), b = "px" == (b && b[0] || null);
                b && (b = TE, a = Array.prototype.lastIndexOf.call(b, (0, window.parseInt)(a, 10), b.length - 1));
                a = 0 < a ? a : null;
                a != h.X() && h.Ea(a)
            };
            return h
        }, mb: !0
    }, {Aa: "+bold", R: OG, Pa: "tr-icon tr-bold", mb: !0}, {
        Aa: "+italic",
        R: PG, Pa: "tr-icon tr-italic", mb: !0
    }, {Aa: "+underline", R: QG, Pa: "tr-icon tr-underline", mb: !0}, {
        Aa: "+foreColor",
        R: NG,
        Pa: "tr-icon tr-foreColor",
        factory: function (a, b, c, d, f, g) {
            a = $E(a, b, c, d, f, g);
            a.Qp("#000");
            a.Pi = z.Ba(eF, a);
            return a
        },
        mb: !0
    }, {
        Aa: "+backColor", R: RG, Pa: "tr-icon tr-backColor", factory: function (a, b, c, d, f, g) {
            a = $E(a, b, c, d, f, g);
            a.Qp("#FFF");
            a.Pi = z.Ba(eF, a);
            return a
        }, mb: !0
    }, {Aa: "+link", R: SG, caption: vG, Pa: "tr-link", mb: !0}, {
        Aa: "+insertOrderedList",
        R: TG,
        Pa: "tr-icon tr-insertOrderedList",
        mb: !0
    }, {
        Aa: "+insertUnorderedList",
        R: UG, Pa: "tr-icon tr-insertUnorderedList", mb: !0
    }, {Aa: "+outdent", R: VG, Pa: "tr-icon tr-outdent", factory: z.WE}, {
        Aa: "+indent",
        R: WG,
        Pa: "tr-icon tr-indent",
        factory: z.WE
    }, {Aa: "+justifyLeft", R: XG, Pa: "tr-icon tr-justifyLeft", mb: !0}, {
        Aa: "+justifyCenter",
        R: YG,
        Pa: "tr-icon tr-justifyCenter",
        mb: !0
    }, {Aa: "+justifyRight", R: ZG, Pa: "tr-icon tr-justifyRight", mb: !0}, {
        Aa: "+justifyFull",
        R: $G,
        Pa: "tr-icon tr-justifyFull",
        mb: !0
    }, {Aa: "+removeFormat", R: aH, Pa: "tr-icon tr-removeFormat", factory: z.WE}, {
        Aa: "image", R: bH, Pa: "tr-icon tr-image",
        factory: z.WE
    }, {Aa: "+strikeThrough", R: cH, Pa: "tr-icon tr-strikeThrough", mb: !0}, {
        Aa: "+subscript",
        R: hH,
        Pa: "tr-icon tr-subscript",
        mb: !0
    }, {Aa: "+superscript", R: iH, Pa: "tr-icon tr-superscript", mb: !0}, {
        Aa: "ltr",
        R: dH,
        Pa: "tr-icon tr-ltr",
        mb: !0
    }, {
        Aa: "rtl", R: eH, Pa: "tr-icon tr-rtl", factory: function (a, b, c, d, f, g) {
            var h = z.YE(a, b, c, d, f, g);
            h.Pi = function (a) {
                a = !!a;
                z.uo(h.getParent().m(), "tr-rtl-mode", a);
                h.Kc(a)
            };
            return h
        }, mb: !0
    }, {Aa: "+BLOCKQUOTE", R: fH, Pa: "tr-icon tr-BLOCKQUOTE", mb: !0}, {
        Aa: "+formatBlock", R: HG, caption: IG,
        Pa: "tr-formatBlock", factory: function (a, b, c, d, f, g) {
            var h = ZE(a, b, c, d, f, g);
            UE(h);
            HE(h, GG);
            z.hj(h.Ya().S(), "goog-menu-noaccel");
            h.Pi = function (a) {
                a = a && 0 < a.length ? a : null;
                a != h.X() && h.Ea(a)
            };
            return h
        }, mb: !0
    }, {
        Aa: "editHtml",
        R: gH,
        caption: jH,
        Pa: "tr-editHtml",
        factory: z.WE
    }], mH = 0, nH; nH = lH[mH]; mH++) z.kH[nH.Aa] = nH;
    lH = null;
    var oH = {};
    oH.track = Hr;
    z.x(z.fF, z.wA);
    z.Ca(z.fF.prototype, oH);
    z.fF.prototype.defaults = {
        Ek: null,
        title: "Distraction Free Mode",
        aN: "back",
        gV: "publish",
        Tn: "zu-editing-distraction-free",
        YV: "sticky-goog-scrollfloater",
        uW: "zm-editable-toolbar-container"
    };
    z.fF.prototype.md = z.ib("FullScreenPlugin");
    z.kH.toggleFullScreen = {Aa: "toggleFullScreen", R: "写作模式", Pa: "tr-icon tr-max", factory: z.WE};
    z.e = z.fF.prototype;
    z.e.He = z.Ba(z.Yn, {ZX: "toggleFullScreen", sX: "enterFullScreen", tX: "exitFullScreen"});
    z.e.D = function () {
        this.ga.H();
        z.P(this.h);
        this.J = this.kq = this.rc = this.Eb = this.h = null;
        z.fF.o.D.call(this)
    };
    z.e.uw = function () {
        var a = this.J, b = window.document.createElement("div");
        b.id = "zu-distraction-free-editor";
        b.innerHTML = '\x3cdiv class\x3d"header"\x3e\x3cdiv class\x3d"wrapper"\x3e\x3ch1 class\x3d"title"\x3e' + a.title + '\x3c/h1\x3e\x3ca href\x3d"#" class\x3d"' + a.aN + '" name\x3d"return"\x3e返回\x3c/a\x3e\x3ca href\x3d"#" class\x3d"' + a.gV + '" name\x3d"save"\x3e发布\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"toolbar"\x3e\x3cdiv class\x3d"tools"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"content" class\x3d"grid"\x3e\x3c/div\x3e';
        window.document.body.appendChild(b);
        this.ga.g(z.N("back", b), "click", function (a) {
            a.preventDefault();
            jF(this)
        });
        this.ga.g(z.N("publish", b), "click", function (a) {
            a.preventDefault();
            this.dispatchEvent("save") && jF(this)
        });
        this.h = b;
        this.rc = z.N("content", b);
        this.kq = z.O("div", {className: "toolbar-info"});
        this.J.Ek || (this.J.Ek = this.F.Ha)
    };
    z.e.gf = function (a) {
        this.h || this.uw();
        switch (a) {
            case "enterFullScreen":
                gF(this);
                break;
            case "exitFullScreen":
                jF(this);
                break;
            case "toggleFullScreen":
                z.W.has(window.document.body, this.J.Tn) ? jF(this) : gF(this)
        }
    };
    z.e.nI = function () {
        z.W.has(window.document.body, this.J.Tn) ? jF(this) : "writing" === window.location.hash.slice(1) && gF(this)
    };
    z.e.ip = function (a) {
        27 === a.keyCode && this.dispatchEvent("shouldExitFullScreenOnEscape") && jF(this)
    };
    z.e.MJ = function (a) {
        z.W[a ? "add" : "remove"](this.Eb, this.J.YV)
    };
    z.x(z.kF, z.R);
    z.kF.prototype.C = function () {
        this.v().g(this.h, "click", this.Qa)
    };
    z.kF.prototype.Qa = function (a) {
        var b = z.Er(this.h, a.target);
        this.tn && this.tn(b);
        b && b.name && "focus" === b.name && (0, z.dG)(b, this.Mx, function () {
            b.getAttribute("data-followme") && (z.W.has(b, "zg-btn-follow") ? b.setAttribute("data-tip", "s$b$对方已关注你") : b.setAttribute("data-tip", "s$b$已互相关注"))
        }, this.Lx, {uY: "question" === this.Mx ? "关注问题" : null})
    };
    z.kF.prototype.$A = z.aa(43);
}).call(this, __z_z__);
//# sourceURL=/static/revved/-/js/closure/common.fed5411f.js