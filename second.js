// Copyright (c) 2010 Jilion.com / Jime SA
(function() {
    var h,
    i = this;
    function k(a, b, c) {
        a = a.split(".");
        c = c || i; ! (a[0] in c) && c.execScript && c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) if (!a.length && b !== undefined) c[d] = b;
        else c = c[d] ? c[d] : (c[d] = {})
    }
    function aa(a, b) {
        a = a.split(".");
        b = b || i;
        for (var c; c = a.shift();) if (b[c]) b = b[c];
        else return null;
        return b
    }
    function ba() {}
    function ca(a) {
        var b = typeof a;
        if (b == "object") if (a) {
            if (a instanceof Array || !(a instanceof Object) && Object.prototype.toString.call(a) == "[object Array]" || typeof a.length == "number" && typeof a.splice != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("splice")) return "array";
            if (! (a instanceof Object) && (Object.prototype.toString.call(a) == "[object Function]" || typeof a.call != "undefined" && typeof a.propertyIsEnumerable != "undefined" && !a.propertyIsEnumerable("call"))) return "function"
        } else return "null";
        else if (b == "function" && typeof a.call == "undefined") return "object";
        return b
    }
    function l(a) {
        return ca(a) == "array"
    }
    function da(a) {
        var b = ca(a);
        return b == "array" || b == "object" && typeof a.length == "number"
    }
    function m(a) {
        return typeof a == "string"
    }
    function ea(a) {
        return ca(a) == "function"
    }
    function fa(a) {
        a = ca(a);
        return a == "object" || a == "array" || a == "function"
    }
    function ga(a) {
        return a[ha] || (a[ha] = ++ia)
    }
    var ha = "closure_uid_" + Math.floor(Math.random() * 2147483648).toString(36),
    ia = 0;
    function ja(a) {
        return a.call.apply(a.Kc, arguments)
    }
    function ka(a, b) {
        var c = b || i;
        if (arguments.length > 2) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(c, e)
            }
        } else return function() {
            return a.apply(c, arguments)
        }
    }
    function p() {
        p = Function.prototype.Kc && Function.prototype.Kc.toString().indexOf("native code") != -1 ? ja: ka;
        return p.apply(null, arguments)
    }
    function la(a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            c.unshift.apply(c, b);
            return a.apply(this, c)
        }
    }
    var ma = Date.now ||
    function() {
        return + new Date
    };
    function q(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.o = b.prototype;
        a.prototype = new c
    };
    function na(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = String(arguments[b]).replace(/\$/g, "$$$$");
            a = a.replace(/\%s/, c)
        }
        return a
    }
    var oa = /^[a-zA-Z0-9\-_.!~*'()]*$/;
    function pa(a) {
        a = String(a);
        if (!oa.test(a)) return encodeURIComponent(a);
        return a
    }
    function qa(a, b) {
        if (b) return a.replace(ra, "&amp;").replace(sa, "&lt;").replace(ta, "&gt;").replace(ua, "&quot;");
        else {
            if (!va.test(a)) return a;
            if (a.indexOf("&") != -1) a = a.replace(ra, "&amp;");
            if (a.indexOf("<") != -1) a = a.replace(sa, "&lt;");
            if (a.indexOf(">") != -1) a = a.replace(ta, "&gt;");
            if (a.indexOf('"') != -1) a = a.replace(ua, "&quot;");
            return a
        }
    }
    var ra = /&/g,
    sa = /</g,
    ta = />/g,
    ua = /\"/g,
    va = /[&<>\"]/;
    function wa(a, b) {
        var c = 0;
        a = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split(".");
        b = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split(".");
        for (var d = Math.max(a.length, b.length), e = 0; c == 0 && e < d; e++) {
            var f = a[e] || "",
            g = b[e] || "",
            j = new RegExp("(\\d*)(\\D*)", "g"),
            n = new RegExp("(\\d*)(\\D*)", "g");
            do {
                var o = j.exec(f) || ["", "", ""],
                u = n.exec(g) || ["", "", ""];
                if (o[0].length == 0 && u[0].length == 0) break;
                c = xa(o[1].length == 0 ? 0: parseInt(o[1], 10), u[1].length == 0 ? 0: parseInt(u[1], 10)) || xa(o[2].length == 0, u[2].length == 0) ||
                xa(o[2], u[2])
            }
            while (c == 0)
        }
        return c
    }
    function xa(a, b) {
        if (a < b) return - 1;
        else if (a > b) return 1;
        return 0
    };
    var r = Array.prototype,
    ya = r.indexOf ?
    function(a, b, c) {
        return r.indexOf.call(a, b, c)
    }: function(a, b, c) {
        c = c == null ? 0: c < 0 ? Math.max(0, a.length + c) : c;
        if (m(a)) {
            if (!m(b) || b.length != 1) return - 1;
            return a.indexOf(b, c)
        }
        for (c = c; c < a.length; c++) if (c in a && a[c] === b) return c;
        return - 1
    },
    s = r.forEach ?
    function(a, b, c) {
        r.forEach.call(a, b, c)
    }: function(a, b, c) {
        for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    za = r.filter ?
    function(a, b, c) {
        return r.filter.call(a, b, c)
    }: function(a, b, c) {
        for (var d = a.length,
        e = [], f = 0, g = m(a) ? a.split("") : a, j = 0; j < d; j++) if (j in g) {
            var n = g[j];
            if (b.call(c, n, j, a)) e[f++] = n
        }
        return e
    };
    function Aa(a, b, c) {
        for (var d = a.length, e = m(a) ? a.split("") : a, f = 0; f < d; f++) if (f in e && b.call(c, e[f], f, a)) return f;
        return - 1
    }
    function Ba(a, b) {
        b = ya(a, b);
        var c;
        if (c = b >= 0) r.splice.call(a, b, 1);
        return c
    }
    function Ca() {
        return r.concat.apply(r, arguments)
    }
    function Da(a) {
        if (l(a)) return Ca(a);
        else {
            for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = a[c];
            return b
        }
    }
    function Ea(a) {
        if (l(a)) return Ca(a);
        return Da(a)
    }
    function Fa(a) {
        for (var b = 1; b < arguments.length; b++) {
            var c = arguments[b],
            d;
            if (l(c) || (d = da(c)) && c.hasOwnProperty("callee")) a.push.apply(a, c);
            else if (d) for (var e = a.length, f = c.length, g = 0; g < f; g++) a[e + g] = c[g];
            else a.push(c)
        }
    }
    function Ga(a) {
        return r.splice.apply(a, Ha(arguments, 1))
    }
    function Ha(a, b, c) {
        return arguments.length <= 2 ? r.slice.call(a, b) : r.slice.call(a, b, c)
    };
    var Ia,
    Ja,
    Ka,
    La,
    Ma;
    function Na() {
        return i.navigator ? i.navigator.userAgent: null
    }
    Ma = La = Ka = Ja = Ia = false;
    var Oa;
    if (Oa = Na()) {
        var Pa = i.navigator;
        Ia = Oa.indexOf("Opera") == 0;
        Ja = !Ia && Oa.indexOf("MSIE") != -1;
        La = (Ka = !Ia && Oa.indexOf("WebKit") != -1) && Oa.indexOf("Mobile") != -1;
        Ma = !Ia && !Ka && Pa.product == "Gecko"
    }
    var t = Ia,
    v = Ja,
    w = Ma,
    Qa = Ka,
    Ra = La,
    Sa = i.navigator,
    Ta = (Sa && Sa.platform || "").indexOf("Mac") != -1,
    x;
    a: {
        var Ua = "",
        Va;
        if (t && i.opera) {
            var Wa = i.opera.version;
            Ua = typeof Wa == "function" ? Wa() : Wa
        } else {
            if (w) Va = /rv\:([^\);]+)(\)|;)/;
            else if (v) Va = /MSIE\s+([^\);]+)(\)|;)/;
            else if (Qa) Va = /WebKit\/(\S+)/;
            if (Va) {
                var Xa = Va.exec(Na());
                Ua = Xa ? Xa[1] : ""
            }
        }
        if (v) {
            var Ya,
            Za = i.document;
            Ya = Za ? Za.documentMode: undefined;
            if (Ya > parseFloat(Ua)) {
                x = String(Ya);
                break a
            }
        }
        x = Ua
    }
    var $a = {};
    function y(a) {
        return $a[a] || ($a[a] = wa(x, a) >= 0)
    };
    var ab,
    bb = !v || y("9");
    v && y("9");
    function cb(a) {
        return (a = a.className) && typeof a.split == "function" ? a.split(/\s+/) : []
    }
    function z(a) {
        var b = cb(a),
        c;
        c = Ha(arguments, 1);
        for (var d = 0, e = 0; e < c.length; e++) if (! (ya(b, c[e]) >= 0)) {
            b.push(c[e]);
            d++
        }
        c = d == c.length;
        a.className = b.join(" ");
        return c
    }
    function A(a) {
        var b = cb(a),
        c;
        c = Ha(arguments, 1);
        for (var d = 0, e = 0; e < b.length; e++) if (ya(c, b[e]) >= 0) {
            Ga(b, e--, 1);
            d++
        }
        c = d == c.length;
        a.className = b.join(" ");
        return c
    }
    function C(a, b) {
        return ya(cb(a), b) >= 0
    };
    function db(a, b) {
        this.x = a !== undefined ? a: 0;
        this.y = b !== undefined ? b: 0
    }
    db.prototype.aa = function() {
        return new db(this.x, this.y)
    };
    function E(a, b) {
        this.width = a;
        this.height = b
    }
    E.prototype.aa = function() {
        return new E(this.width, this.height)
    };
    E.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    E.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    function eb(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }
    function fb(a) {
        var b = [],
        c = 0;
        for (var d in a) b[c++] = a[d];
        return b
    }
    function gb(a) {
        var b = [],
        c = 0;
        for (var d in a) b[c++] = d;
        return b
    }
    function hb(a) {
        for (var b in a) return false;
        return true
    }
    function ib(a, b, c) {
        if (b in a) return a[b];
        return c
    }
    var jb = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    function kb(a) {
        for (var b, c, d = 1; d < arguments.length; d++) {
            c = arguments[d];
            for (b in c) a[b] = c[b];
            for (var e = 0; e < jb.length; e++) {
                b = jb[e];
                if (Object.prototype.hasOwnProperty.call(c, b)) a[b] = c[b]
            }
        }
    };
    function lb(a) {
        return a ? new mb(nb(a)) : ab || (ab = new mb)
    }
    function ob(a) {
        return m(a) ? document.getElementById(a) : a
    }
    function F(a, b, c) {
        c = c || document;
        a = a && a != "*" ? a.toUpperCase() : "";
        if (c.querySelectorAll && c.querySelector && (!Qa || pb(document) || y("528")) && (a || b)) b = c.querySelectorAll(a + (b ? "." + b: ""));
        else if (b && c.getElementsByClassName) {
            c = c.getElementsByClassName(b);
            if (a) {
                for (var d = {},
                e = 0, f = 0, g; g = c[f]; f++) if (a == g.nodeName) d[e++] = g;
                d.length = e;
                b = d
            } else b = c
        } else {
            c = c.getElementsByTagName(a || "*");
            if (b) {
                d = {};
                for (f = e = 0; g = c[f]; f++) {
                    a = g.className;
                    if (typeof a.split == "function" && ya(a.split(/\s+/), b) >= 0) d[e++] = g
                }
                d.length = e;
                b = d
            } else b =
            c
        }
        return b
    }
    function qb(a, b) {
        eb(b,
        function(c, d) {
            if (d == "style") a.style.cssText = c;
            else if (d == "class") a.className = c;
            else if (d == "for") a.htmlFor = c;
            else if (d in rb) a.setAttribute(rb[d], c);
            else a[d] = c
        })
    }
    var rb = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        height: "height",
        width: "width",
        usemap: "useMap",
        frameborder: "frameBorder",
        type: "type"
    };
    function sb(a) {
        var b = a.document;
        if (Qa && !y("500") && !Ra) {
            if (typeof a.innerHeight == "undefined") a = window;
            b = a.innerHeight;
            var c = a.document.documentElement.scrollHeight;
            if (a == a.top) if (c < b) b -= 15;
            return new E(a.innerWidth, b)
        }
        a = pb(b);
        if (t && !y("9.50")) a = false;
        a = a ? b.documentElement: b.body;
        return new E(a.clientWidth, a.clientHeight)
    }
    function tb(a) {
        a = !Qa && pb(a) ? a.documentElement: a.body;
        return new db(a.scrollLeft, a.scrollTop)
    }
    function G() {
        var a = arguments,
        b = a[0],
        c = a[1];
        if (!bb && c && (c.name || c.type)) {
            b = ["<", b];
            c.name && b.push(' name="', qa(c.name), '"');
            if (c.type) {
                b.push(' type="', qa(c.type), '"');
                var d = {};
                kb(d, c);
                c = d;
                delete c.type
            }
            b.push(">");
            b = b.join("")
        }
        b = document.createElement(b);
        if (c) if (m(c)) b.className = c;
        else l(c) ? z.apply(null, [b].concat(c)) : qb(b, c);
        a.length > 2 && ub(document, b, a, 2);
        return b
    }
    function ub(a, b, c, d) {
        function e(g) {
            if (g) b.appendChild(m(g) ? a.createTextNode(g) : g)
        }
        for (d = d; d < c.length; d++) {
            var f = c[d];
            da(f) && !(fa(f) && f.nodeType > 0) ? s(vb(f) ? Da(f) : f, e) : e(f)
        }
    }
    function pb(a) {
        return a.compatMode == "CSS1Compat"
    }
    function wb(a, b) {
        a.appendChild(b)
    }
    function xb(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b)
    }
    function yb(a, b) {
        b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
    }
    function H(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    function zb(a) {
        return Ab(a.firstChild, true)
    }
    function Ab(a, b) {
        for (; a && a.nodeType != 1;) a = b ? a.nextSibling: a.previousSibling;
        return a
    }
    function nb(a) {
        return a.nodeType == 9 ? a: a.ownerDocument || a.document
    }
    function vb(a) {
        if (a && typeof a.length == "number") if (fa(a)) return typeof a.item == "function" || typeof a.item == "string";
        else if (ea(a)) return typeof a.item == "function";
        return false
    }
    function mb(a) {
        this.Ua = a || i.document || document
    }
    mb.prototype.l = function(a) {
        return m(a) ? this.Ua.getElementById(a) : a
    };
    mb.prototype.createElement = function(a) {
        return this.Ua.createElement(a)
    };
    mb.prototype.createTextNode = function(a) {
        return this.Ua.createTextNode(a)
    };
    function Bb(a) {
        return pb(a.Ua)
    }
    mb.prototype.appendChild = wb;
    function I(a, b, c) {
        m(b) ? Cb(a, c, b) : eb(b, la(Cb, a))
    }
    function Cb(a, b, c) {
        a.style[Db(c)] = b
    }
    function J(a, b) {
        var c = nb(a);
        if (c.defaultView && c.defaultView.getComputedStyle) if (a = c.defaultView.getComputedStyle(a, null)) return a[b] || a.getPropertyValue(b);
        return ""
    }
    function K(a, b) {
        return J(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style[b]
    }
    function Eb(a) {
        if (v) return a.offsetParent;
        var b = nb(a),
        c = K(a, "position"),
        d = c == "fixed" || c == "absolute";
        for (a = a.parentNode; a && a != b; a = a.parentNode) {
            c = K(a, "position");
            d = d && c == "static" && a != b.documentElement && a != b.body;
            if (!d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || c == "fixed" || c == "absolute")) return a
        }
        return null
    }
    function Fb(a) {
        var b,
        c = nb(a),
        d = K(a, "position"),
        e = w && c.getBoxObjectFor && !a.getBoundingClientRect && d == "absolute" && (b = c.getBoxObjectFor(a)) && (b.screenX < 0 || b.screenY < 0),
        f = new db(0, 0),
        g;
        b = c ? c.nodeType == 9 ? c: nb(c) : document;
        g = v && !Bb(lb(b)) ? b.body: b.documentElement;
        if (a == g) return f;
        if (a.getBoundingClientRect) {
            b = a.getBoundingClientRect();
            if (v) {
                a = a.ownerDocument;
                b.left -= a.documentElement.clientLeft + a.body.clientLeft;
                b.top -= a.documentElement.clientTop + a.body.clientTop
            }
            b = b;
            c = lb(c);
            c = tb(c.Ua);
            f.x = b.left + c.x;
            f.y =
            b.top + c.y
        } else if (c.getBoxObjectFor && !e) {
            b = c.getBoxObjectFor(a);
            c = c.getBoxObjectFor(g);
            f.x = b.screenX - c.screenX;
            f.y = b.screenY - c.screenY
        } else {
            b = a;
            do {
                f.x += b.offsetLeft;
                f.y += b.offsetTop;
                if (b != a) {
                    f.x += b.clientLeft || 0;
                    f.y += b.clientTop || 0
                }
                if (Qa && K(b, "position") == "fixed") {
                    f.x += c.body.scrollLeft;
                    f.y += c.body.scrollTop;
                    break
                }
                b = b.offsetParent
            }
            while (b && b != a);
            if (t || Qa && d == "absolute") f.y -= c.body.offsetTop;
            for (b = a; (b = Eb(b)) && b != c.body && b != g;) {
                f.x -= b.scrollLeft;
                if (!t || b.tagName != "TR") f.y -= b.scrollTop
            }
        }
        return f
    }
    function Gb(a, b, c) {
        if (b instanceof E) {
            c = b.height;
            b = b.width
        } else {
            if (c == undefined) throw Error("missing height argument");
            c = c
        }
        a.style.width = Hb(b, true);
        a.style.height = Hb(c, true)
    }
    function Hb(a, b) {
        if (typeof a == "number") a = (b ? Math.round(a) : a) + "px";
        return a
    }
    function Ib(a) {
        var b = t && !y("10");
        if (K(a, "display") != "none") return b ? new E(a.offsetWidth || a.clientWidth, a.offsetHeight || a.clientHeight) : new E(a.offsetWidth, a.offsetHeight);
        var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        if (b) {
            b = a.offsetWidth || a.clientWidth;
            a = a.offsetHeight || a.clientHeight
        } else {
            b = a.offsetWidth;
            a = a.offsetHeight
        }
        c.display = d;
        c.position = f;
        c.visibility = e;
        return new E(b, a)
    }
    var Jb = {};
    function Db(a) {
        return Jb[a] || (Jb[a] = String(a).replace(/\-([a-z])/g,
        function(b, c) {
            return c.toUpperCase()
        }))
    }
    function Kb(a) {
        var b = a.style;
        a = "";
        if ("opacity" in b) a = b.opacity;
        else if ("MozOpacity" in b) a = b.MozOpacity;
        else if ("filter" in b) if (b = b.filter.match(/alpha\(opacity=([\d.]+)\)/)) a = String(b[1] / 100);
        return a == "" ? a: Number(a)
    }
    function L(a, b) {
        a = a.style;
        if ("opacity" in a) a.opacity = b;
        else if ("MozOpacity" in a) a.MozOpacity = b;
        else if ("filter" in a) a.filter = b === "" ? "": "alpha(opacity=" + b * 100 + ")"
    }
    function M(a, b) {
        a.style.display = b ? "": "none"
    }
    function Lb(a) {
        var b = {};
        s(a.split(/\s*;\s*/),
        function(c) {
            c = c.split(/\s*:\s*/);
            if (c.length == 2) b[Db(c[0].toLowerCase())] = c[1]
        });
        return b
    };
    var Mb = [];
    var Nb,
    Ob = !v || y("9"),
    Pb = v && !y("8");
    function Qb() {}
    Qb.prototype.Pc = false;
    Qb.prototype.B = function() {
        if (!this.Pc) {
            this.Pc = true;
            this.n()
        }
    };
    Qb.prototype.n = function() {};
    function N(a, b) {
        this.type = a;
        this.currentTarget = this.target = b
    }
    q(N, Qb);
    h = N.prototype;
    h.n = function() {
        delete this.type;
        delete this.target;
        delete this.currentTarget
    };
    h.qa = false;
    h.kb = true;
    h.stopPropagation = function() {
        this.qa = true
    };
    h.preventDefault = function() {
        this.kb = false
    };
    function Rb(a) {
        a.stopPropagation()
    };
    var Sb = {
        mf: "click",
        of: "dblclick",
        Hf: "mousedown",
        Lf: "mouseup",
        Kf: "mouseover",
        Jf: "mouseout",
        If: "mousemove",
        Sf: "selectstart",
        Df: "keypress",
        Cf: "keydown",
        Ef: "keyup",
        kf: "blur",
        wf: "focus",
        pf: "deactivate",
        xf: v ? "focusin": "DOMFocusIn",
        yf: v ? "focusout": "DOMFocusOut",
        lf: "change",
        Rf: "select",
        Tf: "submit",
        Bf: "input",
        Nf: "propertychange",
        tf: "dragstart",
        qf: "dragenter",
        sf: "dragover",
        rf: "dragleave",
        uf: "drop",
        Xf: "touchstart",
        Wf: "touchmove",
        Vf: "touchend",
        Uf: "touchcancel",
        nf: "contextmenu",
        vf: "error",
        Af: "help",
        Ff: "load",
        Gf: "losecapture",
        Of: "readystatechange",
        Pf: "resize",
        Qf: "scroll",
        Yf: "unload",
        zf: "hashchange",
        Mf: "popstate"
    };
    function Tb(a, b) {
        a && this.za(a, b)
    }
    q(Tb, N);
    var Ub = [1, 4, 2];
    h = Tb.prototype;
    h.target = null;
    h.relatedTarget = null;
    h.offsetX = 0;
    h.offsetY = 0;
    h.clientX = 0;
    h.clientY = 0;
    h.screenX = 0;
    h.screenY = 0;
    h.button = 0;
    h.keyCode = 0;
    h.charCode = 0;
    h.ctrlKey = false;
    h.altKey = false;
    h.shiftKey = false;
    h.metaKey = false;
    h.Oe = false;
    h.t = null;
    h.za = function(a, b) {
        var c = this.type = a.type;
        this.target = a.target || a.srcElement;
        this.currentTarget = b;
        if (b = a.relatedTarget) {
            if (w) try {
                b = b.nodeName && b
            } catch(d) {
                b = null
            }
        } else if (c == "mouseover") b = a.fromElement;
        else if (c == "mouseout") b = a.toElement;
        this.relatedTarget = b;
        this.offsetX = a.offsetX !== undefined ? a.offsetX: a.layerX;
        this.offsetY = a.offsetY !== undefined ? a.offsetY: a.layerY;
        this.clientX = a.clientX !== undefined ? a.clientX: a.pageX;
        this.clientY = a.clientY !== undefined ? a.clientY: a.pageY;
        this.screenX = a.screenX || 0;
        this.screenY =
        a.screenY || 0;
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || (c == "keypress" ? a.keyCode: 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.Oe = Ta ? a.metaKey: a.ctrlKey;
        this.zd = a.zd;
        this.t = a;
        delete this.kb;
        delete this.qa
    };
    h.stopPropagation = function() {
        Tb.o.stopPropagation.call(this);
        if (this.t.stopPropagation) this.t.stopPropagation();
        else this.t.cancelBubble = true
    };
    h.preventDefault = function() {
        Tb.o.preventDefault.call(this);
        var a = this.t;
        if (a.preventDefault) a.preventDefault();
        else {
            a.returnValue = false;
            if (Pb) try {
                if (a.ctrlKey || a.keyCode >= 112 && a.keyCode <= 123) a.keyCode = -1
            } catch(b) {}
        }
    };
    h.n = function() {
        Tb.o.n.call(this);
        this.relatedTarget = this.currentTarget = this.target = this.t = null
    };
    function Vb() {}
    var Wb = 0;
    h = Vb.prototype;
    h.key = 0;
    h.Ea = false;
    h.Zb = false;
    h.za = function(a, b, c, d, e, f) {
        if (ea(a)) this.cd = true;
        else if (a && a.handleEvent && ea(a.handleEvent)) this.cd = false;
        else throw Error("Invalid listener argument");
        this.gb = a;
        this.wd = b;
        this.src = c;
        this.type = d;
        this.capture = !!e;
        this.fc = f;
        this.Zb = false;
        this.key = ++Wb;
        this.Ea = false
    };
    h.handleEvent = function(a) {
        if (this.cd) return this.gb.call(this.fc || this.src, a);
        return this.gb.handleEvent.call(this.gb, a)
    };
    function O(a, b) {
        this.fd = b;
        this.ka = [];
        if (a > this.fd) throw Error("Initial cannot be greater than max");
        for (b = 0; b < a; b++) this.ka.push(this.M ? this.M() : {})
    }
    q(O, Qb);
    O.prototype.M = null;
    O.prototype.Oc = null;
    function Xb(a) {
        if (a.ka.length) return a.ka.pop();
        return a.M ? a.M() : {}
    }
    function Yb(a, b) {
        a.ka.length < a.fd ? a.ka.push(b) : Zb(a, b)
    }
    function Zb(a, b) {
        if (a.Oc) a.Oc(b);
        else if (fa(b)) if (ea(b.B)) b.B();
        else for (var c in b) delete b[c]
    }
    O.prototype.n = function() {
        O.o.n.call(this);
        for (var a = this.ka; a.length;) Zb(this, a.pop());
        delete this.ka
    };
    var $b;
    var ac = ($b = "ScriptEngine" in i && i.ScriptEngine() == "JScript") ? i.ScriptEngineMajorVersion() + "." + i.ScriptEngineMinorVersion() + "." + i.ScriptEngineBuildVersion() : "0";
    var bc,
    cc,
    dc,
    ec,
    fc,
    gc,
    hc,
    ic,
    jc,
    kc,
    lc;
    (function() {
        function a() {
            return {
                f: 0,
                G: 0
            }
        }
        function b() {
            return []
        }
        function c() {
            function D(Ae) {
                return g.call(D.src, D.key, Ae)
            }
            return D
        }
        function d() {
            return new Vb
        }
        function e() {
            return new Tb
        }
        var f = $b && !(wa(ac, "5.7") >= 0),
        g;
        gc = function(D) {
            g = D
        };
        if (f) {
            bc = function() {
                return Xb(j)
            };
            cc = function(D) {
                Yb(j, D)
            };
            dc = function() {
                return Xb(n)
            };
            ec = function(D) {
                Yb(n, D)
            };
            fc = function() {
                return Xb(o)
            };
            hc = function() {
                Yb(o, c())
            };
            ic = function() {
                return Xb(u)
            };
            jc = function(D) {
                Yb(u, D)
            };
            kc = function() {
                return Xb(B)
            };
            lc = function(D) {
                Yb(B, D)
            };
            var j = new O(0, 600);
            j.M = a;
            var n = new O(0, 600);
            n.M = b;
            var o = new O(0, 600);
            o.M = c;
            var u = new O(0, 600);
            u.M = d;
            var B = new O(0, 600);
            B.M = e
        } else {
            bc = a;
            cc = ba;
            dc = b;
            ec = ba;
            fc = c;
            hc = ba;
            ic = d;
            jc = ba;
            kc = e;
            lc = ba
        }
    })();
    var mc = {},
    P = {},
    Q = {},
    nc = {};
    function R(a, b, c, d, e) {
        if (b) if (l(b)) {
            for (var f = 0; f < b.length; f++) R(a, b[f], c, d, e);
            return null
        } else {
            d = !!d;
            var g = P;
            b in g || (g[b] = bc());
            g = g[b];
            if (! (d in g)) {
                g[d] = bc();
                g.f++
            }
            g = g[d];
            var j = ga(a),
            n;
            g.G++;
            if (g[j]) {
                n = g[j];
                for (f = 0; f < n.length; f++) {
                    g = n[f];
                    if (g.gb == c && g.fc == e) {
                        if (g.Ea) break;
                        return n[f].key
                    }
                }
            } else {
                n = g[j] = dc();
                g.f++
            }
            f = fc();
            f.src = a;
            g = ic();
            g.za(c, f, a, b, d, e);
            c = g.key;
            f.key = c;
            n.push(g);
            mc[c] = g;
            Q[j] || (Q[j] = dc());
            Q[j].push(g);
            if (a.addEventListener) {
                if (a == i || !a.Mc) a.addEventListener(b, f, d)
            } else a.attachEvent(oc(b),
            f);
            return c
        } else throw Error("Invalid event type");
    }
    function pc(a, b, c, d, e) {
        if (l(b)) {
            for (var f = 0; f < b.length; f++) pc(a, b[f], c, d, e);
            return null
        }
        a = R(a, b, c, d, e);
        mc[a].Zb = true;
        return a
    }
    function S(a, b, c, d, e) {
        if (l(b)) {
            for (var f = 0; f < b.length; f++) S(a, b[f], c, d, e);
            return null
        }
        d = !!d;
        a: {
            f = P;
            if (b in f) {
                f = f[b];
                if (d in f) {
                    f = f[d];
                    a = ga(a);
                    if (f[a]) {
                        a = f[a];
                        break a
                    }
                }
            }
            a = null
        }
        if (!a) return false;
        for (f = 0; f < a.length; f++) if (a[f].gb == c && a[f].capture == d && a[f].fc == e) return qc(a[f].key);
        return false
    }
    function qc(a) {
        if (!mc[a]) return false;
        var b = mc[a];
        if (b.Ea) return false;
        var c = b.src,
        d = b.type,
        e = b.wd,
        f = b.capture;
        if (c.removeEventListener) {
            if (c == i || !c.Mc) c.removeEventListener(d, e, f)
        } else c.detachEvent && c.detachEvent(oc(d), e);
        c = ga(c);
        e = P[d][f][c];
        if (Q[c]) {
            var g = Q[c];
            Ba(g, b);
            g.length == 0 && delete Q[c]
        }
        b.Ea = true;
        e.kd = true;
        rc(d, f, c, e);
        delete mc[a];
        return true
    }
    function rc(a, b, c, d) {
        if (!d.Lb) if (d.kd) {
            for (var e = 0, f = 0; e < d.length; e++) if (d[e].Ea) {
                var g = d[e].wd;
                g.src = null;
                hc(g);
                jc(d[e])
            } else {
                if (e != f) d[f] = d[e];
                f++
            }
            d.length = f;
            d.kd = false;
            if (f == 0) {
                ec(d);
                delete P[a][b][c];
                P[a][b].f--;
                if (P[a][b].f == 0) {
                    cc(P[a][b]);
                    delete P[a][b];
                    P[a].f--
                }
                if (P[a].f == 0) {
                    cc(P[a]);
                    delete P[a]
                }
            }
        }
    }
    function T(a, b, c) {
        var d = 0,
        e = a == null,
        f = b == null,
        g = c == null;
        c = !!c;
        if (e) eb(Q,
        function(n) {
            for (var o = n.length - 1; o >= 0; o--) {
                var u = n[o];
                if ((f || b == u.type) && (g || c == u.capture)) {
                    qc(u.key);
                    d++
                }
            }
        });
        else {
            a = ga(a);
            if (Q[a]) {
                a = Q[a];
                for (e = a.length - 1; e >= 0; e--) {
                    var j = a[e];
                    if ((f || b == j.type) && (g || c == j.capture)) {
                        qc(j.key);
                        d++
                    }
                }
            }
        }
        return d
    }
    function oc(a) {
        if (a in nc) return nc[a];
        return nc[a] = "on" + a
    }
    function sc(a, b, c, d, e) {
        var f = 1;
        b = ga(b);
        if (a[b]) {
            a.G--;
            a = a[b];
            if (a.Lb) a.Lb++;
            else a.Lb = 1;
            try {
                for (var g = a.length, j = 0; j < g; j++) {
                    var n = a[j];
                    if (n && !n.Ea) f &= tc(n, e) !== false
                }
            } finally {
                a.Lb--;
                rc(c, d, b, a)
            }
        }
        return Boolean(f)
    }
    function tc(a, b) {
        b = a.handleEvent(b);
        a.Zb && qc(a.key);
        return b
    }
    function uc(a, b) {
        if (!mc[a]) return true;
        a = mc[a];
        var c = a.type,
        d = P;
        if (! (c in d)) return true;
        d = d[c];
        var e,
        f;
        if (Nb === undefined) Nb = v && !i.addEventListener;
        if (Nb) {
            e = b || aa("window.event");
            b = true in d;
            var g = false in d;
            if (b) {
                if (e.keyCode < 0 || e.returnValue != undefined) return true;
                a: {
                    var j = false;
                    if (e.keyCode == 0) try {
                        e.keyCode = -1;
                        break a
                    } catch(n) {
                        j = true
                    }
                    if (j || e.returnValue == undefined) e.returnValue = true
                }
            }
            j = kc();
            j.za(e, this);
            e = true;
            try {
                if (b) {
                    for (var o = dc(), u = j.currentTarget; u; u = u.parentNode) o.push(u);
                    f = d[true];
                    f.G =
                    f.f;
                    for (var B = o.length - 1; ! j.qa && B >= 0 && f.G; B--) {
                        j.currentTarget = o[B];
                        e &= sc(f, o[B], c, true, j)
                    }
                    if (g) {
                        f = d[false];
                        f.G = f.f;
                        for (B = 0; ! j.qa && B < o.length && f.G; B++) {
                            j.currentTarget = o[B];
                            e &= sc(f, o[B], c, false, j)
                        }
                    }
                } else e = tc(a, j)
            } finally {
                if (o) {
                    o.length = 0;
                    ec(o)
                }
                j.B();
                lc(j)
            }
            return e
        }
        f = new Tb(b, this);
        try {
            e = tc(a, f)
        } finally {
            f.B()
        }
        return e
    }
    gc(uc);
    Mb[Mb.length] = function(a) {
        uc = a(uc);
        gc(uc)
    };
    function vc() {}
    q(vc, Qb);
    h = vc.prototype;
    h.Mc = true;
    h.Nb = null;
    h.rc = function(a) {
        this.Nb = a
    };
    h.addEventListener = function(a, b, c, d) {
        R(this, a, b, c, d)
    };
    h.removeEventListener = function(a, b, c, d) {
        S(this, a, b, c, d)
    };
    h.dispatchEvent = function(a) {
        a = a;
        if (m(a)) a = new N(a, this);
        else if (a instanceof N) a.target = a.target || this;
        else {
            var b = a;
            a = new N(a.type, this);
            kb(a, b)
        }
        b = 1;
        var c,
        d = a.type,
        e = P;
        if (d in e) {
            e = e[d];
            d = true in e;
            var f;
            if (d) {
                c = [];
                for (f = this; f; f = f.Nb) c.push(f);
                f = e[true];
                f.G = f.f;
                for (var g = c.length - 1; ! a.qa && g >= 0 && f.G; g--) {
                    a.currentTarget = c[g];
                    b &= sc(f, c[g], a.type, true, a) && a.kb != false
                }
            }
            if (false in e) {
                f = e[false];
                f.G = f.f;
                if (d) for (g = 0; ! a.qa && g < c.length && f.G; g++) {
                    a.currentTarget = c[g];
                    b &= sc(f, c[g], a.type, false, a) && a.kb !=
                    false
                } else for (c = this; ! a.qa && c && f.G; c = c.Nb) {
                    a.currentTarget = c;
                    b &= sc(f, c, a.type, false, a) && a.kb != false
                }
            }
            a = Boolean(b)
        } else a = true;
        return a
    };
    h.n = function() {
        vc.o.n.call(this);
        T(this);
        this.Nb = null
    };
    var wc = i.window;
    function xc(a, b, c, d) {
        if (!l(a) || !l(b)) throw Error("Start and end parameters must be arrays");
        if (a.length != b.length) throw Error("Start and end points must be the same length");
        this.lb = a;
        this.ge = b;
        this.Va = c;
        this.Cc = d;
        this.coords = []
    }
    q(xc, vc);
    var yc = {},
    zc = null;
    function Ac() {
        wc.clearTimeout(zc);
        var a = ma();
        for (var b in yc) Bc(yc[b], a);
        zc = hb(yc) ? null: wc.setTimeout(Ac, 20)
    }
    function Cc(a) {
        a = ga(a);
        delete yc[a];
        if (zc && hb(yc)) {
            wc.clearTimeout(zc);
            zc = null
        }
    }
    h = xc.prototype;
    h.z = 0;
    h.Sc = 0;
    h.q = 0;
    h.ra = null;
    h.Qc = null;
    h.kc = null;
    h.play = function(a) {
        if (a || this.z == 0) {
            this.q = 0;
            this.coords = this.lb
        } else if (this.z == 1) return false;
        Cc(this);
        this.ra = ma();
        if (this.z == -1) this.ra -= this.Va * this.q;
        this.Qc = this.ra + this.Va;
        this.kc = this.ra;
        this.q || this.pc();
        U(this, "play");
        this.z == -1 && Dc(this);
        this.z = 1;
        a = ga(this);
        a in yc || (yc[a] = this);
        zc || (zc = wc.setTimeout(Ac, 20));
        Bc(this, this.ra);
        return true
    };
    h.stop = function(a) {
        Cc(this);
        this.z = 0;
        if (a) this.q = 1;
        Ec(this, this.q);
        U(this, "stop");
        this.Ba()
    };
    h.pause = function() {
        if (this.z == 1) {
            Cc(this);
            this.z = -1;
            U(this, "pause")
        }
    };
    h.n = function() {
        this.z != 0 && this.stop(false);
        U(this, "destroy");
        xc.o.n.call(this)
    };
    h.Nc = function() {
        this.B()
    };
    function Bc(a, b) {
        a.q = (b - a.ra) / (a.Qc - a.ra);
        if (a.q >= 1) a.q = 1;
        a.Sc = 1E3 / (b - a.kc);
        a.kc = b;
        ea(a.Cc) ? Ec(a, a.Cc(a.q)) : Ec(a, a.q);
        if (a.q == 1) {
            a.z = 0;
            Cc(a);
            U(a, "finish");
            a.Ba()
        } else a.z == 1 && a.oc()
    }
    function Ec(a, b) {
        a.coords = new Array(a.lb.length);
        for (var c = 0; c < a.lb.length; c++) a.coords[c] = (a.ge[c] - a.lb[c]) * b + a.lb[c]
    }
    xc.prototype.oc = function() {
        U(this, "animate")
    };
    xc.prototype.pc = function() {
        U(this, "begin")
    };
    xc.prototype.Ba = function() {
        U(this, "end")
    };
    function Dc(a) {
        U(a, "resume")
    }
    function U(a, b) {
        a.dispatchEvent(new Fc(b, a))
    }
    function Fc(a, b) {
        N.call(this, a);
        this.coords = b.coords;
        this.x = b.coords[0];
        this.y = b.coords[1];
        this.jg = b.coords[2];
        this.Va = b.Va;
        this.q = b.q;
        this.bg = b.Sc;
        this.zd = b.z;
        this.Zf = b
    }
    q(Fc, N);
    function V(a, b, c, d, e) {
        xc.call(this, b, c, d, e);
        this.element = a
    }
    q(V, xc);
    V.prototype.pb = ba;
    V.prototype.oc = function() {
        this.pb();
        V.o.oc.call(this)
    };
    V.prototype.Ba = function() {
        this.pb();
        V.o.Ba.call(this)
    };
    V.prototype.pc = function() {
        this.pb();
        V.o.pc.call(this)
    };
    function Gc(a, b, c) {
        if (b.length != 2 || c.length != 2) throw Error("Start and end points must be 2D");
        V.apply(this, arguments)
    }
    q(Gc, V);
    Gc.prototype.pb = function() {
        this.element.style.left = Math.round(this.coords[0]) + "px";
        this.element.style.top = Math.round(this.coords[1]) + "px"
    };
    function Hc(a, b, c, d, e) {
        if (typeof b == "number") b = [b];
        if (typeof c == "number") c = [c];
        V.call(this, a, b, c, d, e);
        if (b.length != 1 || c.length != 1) throw Error("Start and end points must be 1D");
    }
    q(Hc, V);
    Hc.prototype.pb = function() {
        L(this.element, this.coords[0])
    };
    function Ic(a, b, c) {
        Hc.call(this, a, 1, 0, b, c)
    }
    q(Ic, Hc);
    function Jc(a, b, c) {
        Hc.call(this, a, 0, 1, b, c)
    }
    q(Jc, Hc);
    function Kc(a) {
        this.ue = a
    }
    q(Kc, Qb);
    var Lc = new O(0, 100);
    Kc.prototype.lc = function(a, b, c, d, e) {
        if (l(b)) for (var f = 0; f < b.length; f++) this.lc(a, b[f], c, d, e);
        else {
            a = R(a, b, c || this, d || false, e || this.ue || this);
            if (this.j) this.j[a] = true;
            else if (this.fb) {
                this.j = Xb(Lc);
                this.j[this.fb] = true;
                this.fb = null;
                this.j[a] = true
            } else this.fb = a
        }
        return this
    };
    Kc.prototype.xd = function() {
        if (this.j) {
            for (var a in this.j) {
                qc(a);
                delete this.j[a]
            }
            Yb(Lc, this.j);
            this.j = null
        } else this.fb && qc(this.fb)
    };
    Kc.prototype.n = function() {
        Kc.o.n.call(this);
        this.xd()
    };
    Kc.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    v || w && y("1.9.3");
    var Mc;
    (function() {
        function a(j) {
            j = j.match(/[\d]+/g);
            j.length = 3;
            return j.join(".")
        }
        var b = false,
        c = "";
        if (navigator.plugins && navigator.plugins.length) {
            var d = navigator.plugins["Shockwave Flash"];
            if (d) {
                b = true;
                if (d.description) c = a(d.description)
            }
            if (navigator.plugins["Shockwave Flash 2.0"]) {
                b = true;
                c = "2.0.0.11"
            }
        } else if (navigator.mimeTypes && navigator.mimeTypes.length) {
            if (b = (d = navigator.mimeTypes["application/x-shockwave-flash"]) && d.enabledPlugin) c = a(d.enabledPlugin.description)
        } else try {
            d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
            b =
            true;
            c = a(d.GetVariable("$version"))
        } catch(e) {
            try {
                d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
                b = true;
                c = "6.0.21"
            } catch(f) {
                try {
                    d = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
                    b = true;
                    c = a(d.GetVariable("$version"))
                } catch(g) {}
            }
        }
        Mc = c
    })();
    function Nc(a) {
        if (typeof a.da == "function") return a.da();
        if (m(a)) return a.split("");
        if (da(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        return fb(a)
    }
    function Oc(a, b, c) {
        if (typeof a.forEach == "function") a.forEach(b, c);
        else if (da(a) || m(a)) s(a, b, c);
        else {
            var d;
            if (typeof a.la == "function") d = a.la();
            else if (typeof a.da != "function") if (da(a) || m(a)) {
                d = [];
                for (var e = a.length, f = 0; f < e; f++) d.push(f);
                d = d
            } else d = gb(a);
            else d = void 0;
            e = Nc(a);
            f = e.length;
            for (var g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
        }
    };
    function W(a) {
        this.S = {};
        this.j = [];
        var b = arguments.length;
        if (b > 1) {
            if (b % 2) throw Error("Uneven number of arguments");
            for (var c = 0; c < b; c += 2) this.V(arguments[c], arguments[c + 1])
        } else a && this.Md(a)
    }
    h = W.prototype;
    h.f = 0;
    h.Gd = 0;
    h.da = function() {
        Pc(this);
        for (var a = [], b = 0; b < this.j.length; b++) a.push(this.S[this.j[b]]);
        return a
    };
    h.la = function() {
        Pc(this);
        return this.j.concat()
    };
    h.ba = function(a) {
        return Qc(this.S, a)
    };
    h.remove = function(a) {
        if (Qc(this.S, a)) {
            delete this.S[a];
            this.f--;
            this.Gd++;
            this.j.length > 2 * this.f && Pc(this);
            return true
        }
        return false
    };
    function Pc(a) {
        if (a.f != a.j.length) {
            for (var b = 0, c = 0; b < a.j.length;) {
                var d = a.j[b];
                if (Qc(a.S, d)) a.j[c++] = d;
                b++
            }
            a.j.length = c
        }
        if (a.f != a.j.length) {
            var e = {};
            for (c = b = 0; b < a.j.length;) {
                d = a.j[b];
                if (!Qc(e, d)) {
                    a.j[c++] = d;
                    e[d] = 1
                }
                b++
            }
            a.j.length = c
        }
    }
    W.prototype.ca = function(a, b) {
        if (Qc(this.S, a)) return this.S[a];
        return b
    };
    W.prototype.V = function(a, b) {
        if (!Qc(this.S, a)) {
            this.f++;
            this.j.push(a);
            this.Gd++
        }
        this.S[a] = b
    };
    W.prototype.Md = function(a) {
        var b;
        if (a instanceof W) {
            b = a.la();
            a = a.da()
        } else {
            b = gb(a);
            a = fb(a)
        }
        for (var c = 0; c < b.length; c++) this.V(b[c], a[c])
    };
    W.prototype.aa = function() {
        return new W(this)
    };
    function Qc(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Rc = new RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([\\w\\d\\-\\u0100-\\uffff.%]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
    function Sc(a, b) {
        var c;
        if (a instanceof Sc) {
            this.Fa(b == null ? a.J: b);
            Tc(this, a.fa);
            Uc(this, a.rb);
            Vc(this, a.xa);
            Wc(this, a.Da);
            Xc(this, a.Ca);
            Yc(this, a.L.aa());
            Zc(this, a.Za)
        } else if (a && (c = String(a).match(Rc))) {
            this.Fa( !! b);
            Tc(this, c[1] || "", true);
            Uc(this, c[2] || "", true);
            Vc(this, c[3] || "", true);
            Wc(this, c[4]);
            Xc(this, c[5] || "", true);
            Yc(this, c[6] || "", true);
            Zc(this, c[7] || "", true)
        } else {
            this.Fa( !! b);
            this.L = new $c(null, this, this.J)
        }
    }
    h = Sc.prototype;
    h.fa = "";
    h.rb = "";
    h.xa = "";
    h.Da = null;
    h.Ca = "";
    h.Za = "";
    h.Ae = false;
    h.J = false;
    h.toString = function() {
        if (this.A) return this.A;
        var a = [];
        this.fa && a.push(ad(this.fa, bd), ":");
        if (this.xa) {
            a.push("//");
            this.rb && a.push(ad(this.rb, bd), "@");
            var b;
            b = this.xa;
            b = m(b) ? encodeURIComponent(b) : null;
            a.push(b);
            this.Da != null && a.push(":", String(this.Da))
        }
        if (this.Ca) {
            this.xa && this.Ca.charAt(0) != "/" && a.push("/");
            a.push(ad(this.Ca, cd))
        } (b = String(this.L)) && a.push("?", b);
        this.Za && a.push("#", ad(this.Za, dd));
        return this.A = a.join("")
    };
    h.aa = function() {
        var a = this.fa,
        b = this.rb,
        c = this.xa,
        d = this.Da,
        e = this.Ca,
        f = this.L.aa(),
        g = this.Za,
        j = new Sc(null, this.J);
        a && Tc(j, a);
        b && Uc(j, b);
        c && Vc(j, c);
        d && Wc(j, d);
        e && Xc(j, e);
        f && Yc(j, f);
        g && Zc(j, g);
        return j
    };
    function Tc(a, b, c) {
        ed(a);
        delete a.A;
        a.fa = c ? b ? decodeURIComponent(b) : "": b;
        if (a.fa) a.fa = a.fa.replace(/:$/, "");
        return a
    }
    function Uc(a, b, c) {
        ed(a);
        delete a.A;
        a.rb = c ? b ? decodeURIComponent(b) : "": b;
        return a
    }
    function Vc(a, b, c) {
        ed(a);
        delete a.A;
        a.xa = c ? b ? decodeURIComponent(b) : "": b;
        return a
    }
    function Wc(a, b) {
        ed(a);
        delete a.A;
        if (b) {
            b = Number(b);
            if (isNaN(b) || b < 0) throw Error("Bad port number " + b);
            a.Da = b
        } else a.Da = null;
        return a
    }
    function Xc(a, b, c) {
        ed(a);
        delete a.A;
        a.Ca = c ? b ? decodeURIComponent(b) : "": b;
        return a
    }
    function Yc(a, b, c) {
        ed(a);
        delete a.A;
        if (b instanceof $c) {
            a.L = b;
            a.L.qb = a;
            a.L.Fa(a.J)
        } else {
            c || (b = ad(b, fd));
            a.L = new $c(b, a, a.J)
        }
        return a
    }
    function gd(a, b, c) {
        ed(a);
        delete a.A;
        l(c) || (c = [String(c)]);
        var d = a.L;
        b = b;
        c = c;
        hd(d);
        id(d);
        b = jd(d, b);
        if (d.ba(b)) {
            var e = d.i.ca(b);
            if (l(e)) d.f -= e.length;
            else d.f--
        }
        if (c.length > 0) {
            d.i.V(b, c);
            d.f += c.length
        }
        return a
    }
    function Zc(a, b, c) {
        ed(a);
        delete a.A;
        a.Za = c ? b ? decodeURIComponent(b) : "": b;
        return a
    }
    function ed(a) {
        if (a.Ae) throw Error("Tried to modify a read-only Uri");
    }
    Sc.prototype.Fa = function(a) {
        this.J = a;
        this.L && this.L.Fa(a)
    };
    var kd = /^[a-zA-Z0-9\-_.!~*'():\/;?]*$/;
    function ad(a, b) {
        var c = null;
        if (m(a)) {
            c = a;
            kd.test(c) || (c = encodeURI(a));
            if (c.search(b) >= 0) c = c.replace(b, ld)
        }
        return c
    }
    function ld(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var bd = /[#\/\?@]/g,
    cd = /[\#\?]/g,
    fd = /[\#\?@]/g,
    dd = /#/g;
    function $c(a, b, c) {
        this.O = a || null;
        this.qb = b || null;
        this.J = !!c
    }
    function hd(a) {
        if (!a.i) {
            a.i = new W;
            if (a.O) for (var b = a.O.split("&"), c = 0; c < b.length; c++) {
                var d = b[c].indexOf("="),
                e = null,
                f = null;
                if (d >= 0) {
                    e = b[c].substring(0, d);
                    f = b[c].substring(d + 1)
                } else e = b[c];
                e = decodeURIComponent(e.replace(/\+/g, " "));
                e = jd(a, e);
                a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
            }
        }
    }
    h = $c.prototype;
    h.i = null;
    h.f = null;
    h.add = function(a, b) {
        hd(this);
        id(this);
        a = jd(this, a);
        if (this.ba(a)) {
            var c = this.i.ca(a);
            l(c) ? c.push(b) : this.i.V(a, [c, b])
        } else this.i.V(a, b);
        this.f++;
        return this
    };
    h.remove = function(a) {
        hd(this);
        a = jd(this, a);
        if (this.i.ba(a)) {
            id(this);
            var b = this.i.ca(a);
            if (l(b)) this.f -= b.length;
            else this.f--;
            return this.i.remove(a)
        }
        return false
    };
    h.ba = function(a) {
        hd(this);
        a = jd(this, a);
        return this.i.ba(a)
    };
    h.la = function() {
        hd(this);
        for (var a = this.i.da(), b = this.i.la(), c = [], d = 0; d < b.length; d++) {
            var e = a[d];
            if (l(e)) for (var f = 0; f < e.length; f++) c.push(b[d]);
            else c.push(b[d])
        }
        return c
    };
    h.da = function(a) {
        hd(this);
        if (a) {
            a = jd(this, a);
            if (this.ba(a)) {
                var b = this.i.ca(a);
                if (l(b)) return b;
                else {
                    a = [];
                    a.push(b)
                }
            } else a = []
        } else {
            b = this.i.da();
            a = [];
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                l(d) ? Fa(a, d) : a.push(d)
            }
        }
        return a
    };
    h.V = function(a, b) {
        hd(this);
        id(this);
        a = jd(this, a);
        if (this.ba(a)) {
            var c = this.i.ca(a);
            if (l(c)) this.f -= c.length;
            else this.f--
        }
        this.i.V(a, b);
        this.f++;
        return this
    };
    h.ca = function(a, b) {
        hd(this);
        a = jd(this, a);
        if (this.ba(a)) {
            a = this.i.ca(a);
            return l(a) ? a[0] : a
        } else return b
    };
    h.toString = function() {
        if (this.O) return this.O;
        if (!this.i) return "";
        for (var a = [], b = 0, c = this.i.la(), d = 0; d < c.length; d++) {
            var e = c[d],
            f = pa(e);
            e = this.i.ca(e);
            if (l(e)) for (var g = 0; g < e.length; g++) {
                b > 0 && a.push("&");
                a.push(f);
                e[g] !== "" && a.push("=", pa(e[g]));
                b++
            } else {
                b > 0 && a.push("&");
                a.push(f);
                e !== "" && a.push("=", pa(e));
                b++
            }
        }
        return this.O = a.join("")
    };
    function id(a) {
        delete a.$b;
        delete a.O;
        a.qb && delete a.qb.A
    }
    $c.prototype.aa = function() {
        var a = new $c;
        if (this.$b) a.$b = this.$b;
        if (this.O) a.O = this.O;
        if (this.i) a.i = this.i.aa();
        return a
    };
    function jd(a, b) {
        b = String(b);
        if (a.J) b = b.toLowerCase();
        return b
    }
    $c.prototype.Fa = function(a) {
        if (a && !this.J) {
            hd(this);
            id(this);
            Oc(this.i,
            function(b, c) {
                var d = c.toLowerCase();
                if (c != d) {
                    this.remove(c);
                    this.add(d, b)
                }
            },
            this)
        }
        this.J = a
    };
    function md(a, b) {
        this.qb = new Sc(a);
        this.Ud = b ? b: "callback";
        this.vc = 5E3
    }
    var nd = 0;
    md.prototype.send = function(a, b, c, d) {
        if (!document.documentElement.firstChild) {
            c && c(a);
            return null
        }
        d = d || "_" + (nd++).toString(36) + ma().toString(36);
        i._callbacks_ || (i._callbacks_ = {});
        var e = document.createElement("script"),
        f = null;
        if (this.vc > 0) f = i.setTimeout(od(d, e, a, c), this.vc);
        c = this.qb.aa();
        for (var g in a) if (!a.hasOwnProperty || a.hasOwnProperty(g)) gd(c, g, a[g]);
        if (b) {
            i._callbacks_[d] = pd(d, e, b, f);
            gd(c, this.Ud, "_callbacks_." + d)
        }
        qb(e, {
            type: "text/javascript",
            id: d,
            charset: "UTF-8",
            src: c.toString()
        });
        document.getElementsByTagName("head")[0].appendChild(e);
        return {
            ya: d,
            vc: f
        }
    };
    function od(a, b, c, d) {
        return function() {
            qd(a, b, false);
            d && d(c)
        }
    }
    function pd(a, b, c, d) {
        return function() {
            i.clearTimeout(d);
            qd(a, b, true);
            c.apply(undefined, arguments)
        }
    }
    function qd(a, b, c) {
        i.setTimeout(function() {
            H(b)
        },
        0);
        if (i._callbacks_[a]) if (c) delete i._callbacks_[a];
        else i._callbacks_[a] = ba
    };
    function rd(a, b) {
        var c = p(this.Ve, this);
        k("jilion.sublime.video.sites", c, void 0);
        this.Zc = window.location.hostname.replace(/^www\./, "");
        this.H = b;
        b = document.getElementsByTagName("head")[0];
        this.Jb = document.createElement("script");
        this.Jb.type = "text/javascript";
		console.log('a: ' + a);
        this.Jb.src = "http://cdn.sublimevideo.net/l/" + a + ".js";
        b.appendChild(this.Jb)
    }
    rd.prototype.Ve = function(a) {
        for (var b = 0; a[b] !== this.Zc && b < a.length;) b += 1;
        H(this.Jb);
        if (a.length == b) {
			console.log('md ip wtf');
            sd(this.H); (new md(new Sc("http://88.191.95.236"))).send({
                h: encodeURIComponent(this.Zc),
                u: encodeURIComponent(window.location)
            },
            function() {})
        }
    };
    function td(a) {
        var b = document.documentElement,
        c = document.body || {
            scrollLeft: 0
        },
        d = document.documentElement,
        e = document.body || {
            scrollTop: 0
        };
        return {
            x: a.pageX || a.clientX + (b.scrollLeft || c.scrollLeft) - (b.clientLeft || 0),
            y: a.pageY || a.clientY + (d.scrollTop || e.scrollTop) - (d.clientTop || 0)
        }
    }
    function ud(a) {
        var b = 0,
        c = 0;
        do {
            b += a.offsetTop || 0;
            c += a.offsetLeft || 0;
            if (a.offsetParent == document.body) if (K(a, "position") == "absolute") break;
            a = a.offsetParent
        }
        while (a);
        return new db(c, b)
    }
    function vd(a) {
        a.setAttribute("style", "");
        a.removeAttribute("style")
    }
    function wd(a) {
        if (a.indexOf("://") > 0) return a;
        var b = location.protocol + "//" + location.host,
        c = location.href.split("/").slice(0, -1).join("/") + "/";
        if (a.substr(0, 1) == "/") return b + a;
        if (a.substr(0, 1) == "." || !a.match(/^\s*\w+:\/\//)) return c + a;
        return a
    };
    function xd(a, b, c) {
        this.Jd = c;
        this.Ad = a;
        this.af = b;
        this.Xe = [ - 20, 0];
        this.ee = [0, 0];
        this.Pd = 666
    }
    xd.prototype.start = function() {
        z(this.Jd, "loading");
        if (!this.Oa) this.Oa = new Gc(this.af, this.Xe, this.ee, this.Pd);
        R(this.Oa, "end", p(this.We, this));
        this.Oa.play();
        M(this.Ad, true)
    };
    xd.prototype.We = function() {
        this.Oa.play()
    };
    xd.prototype.stop = function() {
        M(this.Ad, false);
        T(this.Oa, "end");
        A(this.Jd, "loading")
    };
    function yd(a, b) {
        this.element = a;
        this.hb = p(this.Ge, this);
        this.ib = p(this.Ie, this);
        this.Aa = p(this.He, this);
        this.Cb = this.Bb = 0;
        R(this.element, "mousedown", this.hb);
        R(this.element, "mouseup", this.ib);
        a = b ? tb(document).y: 0;
        z(this.element, "ui-draggable");
        I(this.element, {
            WebkitTransform: "translate(0px," + a + "px)",
            MozTransform: "translate(0px,0px)",
            OTransform: "translate(0px,0px)"
        })
    }
    yd.prototype.Nc = function() {
        A(this.element, "ui-draggable");
        this.wb = this.Ma = null;
        S(document, "mousemove", this.Aa);
        S(this.element, "mousedown", this.hb);
        S(this.element, "mouseup", this.ib)
    };
    yd.prototype.Ge = function(a) {
        if (C(a.target, "ui-draggable")) {
            this.Ma = td(a);
            this.wb = {
                left: this.Bb,
                top: this.Cb
            };
            R(document, "mousemove", this.Aa)
        }
    };
    yd.prototype.Ie = function() {
        this.wb = this.Ma = null;
        S(document, "mousemove", this.Aa)
    };
    yd.prototype.He = function(a) {
        a = td(a);
        if (this.Ma) {
            a = {
                x: a.x - this.Ma.x,
                y: a.y - this.Ma.y
            };
            this.Bb = this.wb.left + a.x;
            this.Cb = this.wb.top + a.y;
            a = "translate(" + this.Bb + "px, " + this.Cb + "px)";
            I(this.element, {
                WebkitTransform: a,
                MozTransform: a,
                OTransform: a
            })
        }
    };
    function zd(a, b, c, d) {
        this.handle = ob(a);
        this.I = ob(b);
        this.options = d || {};
        this.Zd = c;
        this.R = new db(0, 0);
        this.axis = this.options.axis || "horizontal";
        this.dg = this.options.increment || 1;
        this.ig = parseInt(this.options.step || "1", 10);
        this.w = this.options.range || {
            start: 0,
            end: 1
        };
        this.de = this.options.borderWidth * 2 || 0;
        this.value = 0;
        this.fg = this.options.maximum || this.w.end;
        this.gg = this.options.minimum || this.w.start;
        this.Ec = parseInt(this.options.alignX || "0", 10);
        this.Fc = parseInt(this.options.alignY || "0", 10);
        Ad(this);
        this.ec =
        Bd(this) ? this.handle.offsetHeight != 0 ? this.handle.offsetHeight: this.handle.style.height.replace(/px$/, "") : this.handle.offsetWidth != 0 ? this.handle.offsetWidth: this.handle.style.width.replace(/px$/, "");
        this.disabled = this.dragging = this.Na = false;
        this.options.disabled && Cd(this);
        this.hb = p(this.Ye, this);
        this.ib = p(this.fe, this);
        this.Aa = p(this.gf, this);
        R(this.handle, "mousedown", this.hb);
        R(this.I, "mousedown", this.hb);
        R(document, "mouseup", this.ib);
        R(document, "mousemove", this.Aa);
        Dd(this, parseFloat(this.options.sliderValue));
        this.Ib = true
    }
    zd.prototype.B = function() {
        T(this.handle);
        T(this.I);
        S(document, "mouseup", this.ib);
        S(document, "mousemove", this.Aa)
    };
    function Cd(a) {
        a.disabled = true
    }
    function Ed(a, b) {
        b = b > a.w.end ? a.w.end: b < a.w.start ? a.w.start: b;
        a.value = b;
        a.handle.style[Bd(a) ? "top": "left"] = Math.round((a.Dd - a.ec) / (a.w.end - a.w.start) * (b - a.w.start)) + "px"
    }
    function Dd(a, b) {
        Ed(a, b);
        if (!a.dragging || !a.event) Fd(a)
    }
    function Gd(a, b) {
        return b / (a.Dd - a.ec) * (a.w.end - a.w.start) + a.w.start
    }
    function Bd(a) {
        return a.axis == "vertical"
    }
    zd.prototype.Ye = function(a) {
        a.preventDefault();
        a.stopPropagation();
        if (Ob ? a.t.button == 0: a.type == "click" ? true: !!(a.t.button & Ub[0])) if (!this.disabled) {
            this.Na = true;
            var b = a.target,
            c = td(a),
            d = b;
            this.R = this.Zd();
            this.Ib && this.options.onDragBegin && this.options.onDragBegin();
            if (d == this.I || this.handle !== b) {
                b = ud(this.I);
                this.event = a;
                Dd(this, Gd(this, (Bd(this) ? c.y - b.y - this.R.y: c.x - b.x - this.R.x) - this.ec / 2));
                b = ud(this.handle);
                this.offsetX = c.x - b.x - this.R.x;
                this.offsetY = c.y - b.y - this.R.y
            } else {
                for (; this.handle !== b &&
                b.parentNode;) b = b.parentNode;
                if (this.handle === b) {
                    b = ud(this.handle);
                    this.offsetX = c.x - b.x - this.R.x;
                    this.offsetY = c.y - b.y - this.R.y
                }
            }
        }
    };
    zd.prototype.gf = function(a) {
        if (this.Na) {
            this.dragging || (this.dragging = true);
            var b = td(a),
            c = ud(this.I);
            b.x -= this.offsetX + c.x + this.R.x;
            b.y -= this.offsetY + c.y + this.R.y;
            this.event = a;
            Dd(this, Gd(this, Bd(this) ? b.y: b.x));
            this.Ib && this.options.onSlide && this.options.onSlide(this.value, this);
            a.preventDefault()
        }
    };
    zd.prototype.fe = function(a) {
        if (this.Na && this.dragging) {
            this.dragging = this.Na = false;
            Fd(this);
            a.preventDefault()
        }
        this.dragging = this.Na = false;
        this.Ib && this.options.onDragEnd && this.options.onDragEnd()
    };
    function Fd(a) {
        a.Ib && a.options.onChange && a.options.onChange(a.value, a);
        a.event = null
    }
    function Ad(a) {
        a.Dd = (Bd(a) ? (a.I.offsetHeight != 0 ? a.I.offsetHeight: a.I.style.height.replace(/px$/, "")) - a.Fc: (a.I.offsetWidth != 0 ? a.I.offsetWidth: a.I.style.width.replace(/px$/, "")) - a.Ec) - (Bd(a) ? a.Fc: a.Ec) - a.de
    };
    function Hd(a, b) {
        this.Td = b;
        this.$c = a;
        this.td = false;
        this.Qe()
    }
    Hd.prototype.Qe = function() {
        this.g = new Image;
        this.g.onload = p(this.ce, this);
        this.g.onerror = p(this.be, this);
        this.g.onabort = p(this.$f, this);
        this.g.src = this.$c
    };
    Hd.prototype.ce = function() {
        Id(this)
    };
    Hd.prototype.be = function() {
        this.td = true;
        Id(this)
    };
    function Id(a) {
        a.Td(a.td, a.$c, {
            width: a.g.width,
            height: a.g.height
        })
    };
    function X(a, b, c, d, e) {
        this.W = {
            padding: 40,
            Ha: 0.4,
            bf: "sublime_zoom",
            Rb: true
        };
        this.ae = {
            te: 1,
            qd: 0.6,
            Me: "#000",
            Yc: "false",
            Jc: "true"
        };
        Jd(this);
        this.tc = a;
        this.ha = b;
        this.D = c;
        this.ia = d;
        this.H = e;
        this.Y = null;
        this.Hd = {};
        this.Cd = p(this.ef, this);
        this.Bd = p(this.ff, this);
        Kd(this);
        this.X = G("div", {
            id: this.W.bf
        });
        M(this.X, false);
        this.Yb = "rgba(0,0,0,0.8) 0 2px 20px";
        this.wa = G("div", {
            id: "sz_close_button"
        });
        I(this.wa, {
            background: "url(" + ("http://cdn.sublimevideo.net/p/" + (this.D == "stable" ? "": this.D + "/") + "close_button.png?t=" +
            this.ia) + ") center no-repeat",
            display: "none"
        });
        R(this.wa, "click", p(this.zb, this));
        this.nb = G("div", {
            id: "sz_content_wrapper"
        });
        this.X.appendChild(this.nb);
        this.nb.appendChild(this.wa);
        w ? document.documentElement.appendChild(this.X) : wb(document.body, this.X);
        Ld(this)
    }
    function Kd(a) {
        typeof Prototype != "undefined" && v && x < 8 ? s(F("a", undefined), p(function(b) {
            C(b, "sublime") && Md(this, b)
        },
        a)) : s(F("a", "sublime"), p(function(b) {
            Md(this, b)
        },
        a))
    }
    function Md(a, b) {
        var c,
        d,
        e;
        if (C(b, "zoomvideo")) {
            c = "video";
            e = parseInt(b.className.match(/[0-9]+$/), 10);
            a.Hd[e] = b
        } else {
            c = "image";
            d = b.href
        }
        R(b, "click", p(a.De, a, {
            itemType: c,
            imageUrl: d,
            linkEl: b,
            videoId: e
        }));
        A(b, "sublime");
        z(b, "sublimed")
    }
    X.prototype.De = function(a, b) {
        b.preventDefault();
        var c = a.linkEl,
        d = this.ae,
        e = {};
        for (var f in d) e[f] = d[f];
        this.N = e;
        if (d = c.getAttribute("data-sublime-settings")) {
            d = Lb(d);
            kb(this.N, d)
        } (this.nc = this.N.qd > 0 && !(v && x == "6.0")) && Nd(this.H, this.N.qd, this.N.Me);
        this.g && this.zb(b, true);
        Jd(this);
        var g;
        b = a.itemType;
        this.b.type = b;
        if (b == "video") {
            this.b.c = a.videoId;
            this.b.s = this.H.d[this.b.c].m;
            if ((a = zb(this.b.s)) && a.src) g = a.src
        } else g = a.imageUrl;
        this.uc = F("img", undefined, c)[0];
        this.yd = !this.uc;
        this.xe = false;
        M(this.X,
        false);
        this.ad = g;
        new Hd(g, p(this.jf, this))
    };
    X.prototype.jf = function(a, b, c) {
        if (this.ad == b) {
            this.xe = true;
            if (!a) {
                this.g = G("img", {
                    src: this.ad
                });
                if (this.b.type == "video") {
                    a = this.b.s.getElementsByTagName("video")[0];
                    b = this.b.s.getElementsByTagName("img")[0];
                    if (this.N.Jc == "true") {
                        c = F(undefined, "play_button", this.b.s)[0];
                        M(c, false)
                    }
                    c = {
                        width: a.width,
                        height: a.height
                    };
                    this.b.Tc = c;
                    c = Od(this, c);
                    if (c.width < a.width || c.height < a.height) {
                        this.Y = {
                            width: a.width,
                            height: a.height
                        };
                        a.width = c.width;
                        a.height = c.height;
                        b.width = c.width;
                        b.height = c.height;
                        I(this.b.s, {
                            width: a.width +
                            "px",
                            height: a.height + "px"
                        })
                    }
                } else {
                    this.b.Tc = c;
                    c = Od(this, c)
                }
                this.b.ga = c;
                Pd(this)
            }
        }
    };
    function Pd(a) {
        var b;
        if (a.tc && !a.yd) {
            var c = Qd(a, a.b.ga);
            b = "all " + a.W.Ha + "s";
            b = {
                position: "absolute",
                opacity: a.N.te,
                WebkitTransform: c,
                WebkitTransition: b
            };
            kb(b, Rd(a, a.b.ga));
            I(a.g, b);
            pc(a.g, "webkitTransitionEnd", p(a.zc, a));
            b = a.W.Ha >= 0.2 ? 100: a.W.Ha * 1E3;
            setTimeout(p(a.Dc, a), b);
            b = zb(a.nb);
            xb(a.g, b);
            M(a.X, true);
            setTimeout(p(function() {
                I(this.g, {
                    WebkitTransform: "scale(1)",
                    opacity: 1
                })
            },
            a), 0)
        } else {
            b = {
                position: "absolute"
            };
            kb(b, Rd(a, a.b.ga));
            I(a.g, b);
            a.Dc();
            if (a.ha) {
                c = a.ha.prefix;
                b = "opacity " + a.W.Ha + "s";
                var d =
                {};
                d.opacity = 0;
                d[c + "Transition"] = b;
                I(a.g, d)
            }
            b = zb(a.nb);
            xb(a.g, b);
            M(a.X, true);
            if (a.ha) {
                pc(a.g, a.ha.endEvent, p(a.zc, a));
                setTimeout(p(function() {
                    I(this.g, {
                        opacity: 1
                    })
                },
                a), 50)
            } else a.zc(a.b.ga)
        }
    }
    X.prototype.zc = function() {
        this.b.jc = true;
        if (this.cb) {
            H(this.cb);
            this.cb = null
        }
        this.Rb();
        if (this.b.type == "video") {
            yb(this.b.s, zb(this.nb));
            var a = this.b.ga;
            setTimeout(p(function() {
                I(this.b.s, {
                    position: "absolute",
                    top: a.top + "px",
                    left: a.left + "px",
                    display: ""
                })
            },
            this), 0);
            this.N.Jc == "true" && setTimeout(p(function() {
                this.H.play(this.b.c, true)
            },
            this), 0)
        }
        R(document, "keydown", this.Cd);
        R(document, "click", this.Bd)
    };
    X.prototype.Dc = function() {
        I(this.g, {
            WebkitBoxShadow: this.Yb,
            MozBoxShadow: this.Yb,
            boxShadow: this.Yb
        })
    };
    X.prototype.Te = function() {
        I(this.g, {
            WebkitBoxShadow: "none",
            MozBoxShadow: "none",
            boxShadow: "none"
        })
    };
    X.prototype.Rb = function() {
        var a = this.b.ga;
        I(this.wa, {
            top: a.top - 23 + "px",
            left: a.left - 23 + "px",
            display: this.W.Rb ? "block": "none"
        })
    };
    function Rd(a, b) {
        return {
            width: b.width + "px",
            height: b.height + "px",
            top: b.top + "px",
            left: b.left + "px"
        }
    }
    function Od(a, b) {
        var c = {
            width: b.width,
            height: b.height,
            top: 0,
            left: 0
        },
        d = sb(window),
        e = tb(document),
        f = b.width / b.height;
        a = a.W.padding * 2;
        if (f > d.width / d.height) {
            if (b.width > d.width - a) {
                c.width = d.width - a;
                c.height = parseInt(c.width / f, 10)
            }
        } else if (b.height > d.height - a) {
            c.height = d.height - a;
            c.width = parseInt(c.height * f, 10)
        }
        c.top = parseInt((d.height - c.height) / 2, 10) + e.y;
        c.left = parseInt((d.width - c.width) / 2, 10) + e.x;
        return c
    }
    function Qd(a, b) {
        var c = ud(a.uc);
        a.ta = Ib(a.uc);
        kb(a.ta, {
            left: c.x,
            top: c.y
        });
        c = a.ta.left + a.ta.width / 2;
        var d = a.ta.top + a.ta.height / 2;
        if (b.width / b.height >= 1) {
            a = a.N.Yc == "true" ? 3: a.ta.width;
            a = a / b.width
        } else {
            a = a.N.Yc == "true" ? 3: a.ta.height;
            a = a / b.height
        }
        return "scale(" + a + ") translate(" + -1 * (b.left + b.width / 2 - c) / a + "px, " + -1 * (b.top + b.height / 2 - d) / a + "px)"
    }
    X.prototype.ff = function(a) {
        if (this.nc && !this.K && (a.target == this.X || a.target == this.H.k)) this.zb(a)
    };
    X.prototype.ef = function(a) {
        a = a.t;
        switch (a.keyCode) {
        case 27:
            this.K || setTimeout(p(this.zb, this, a), 0);
            break
        }
    };
    X.prototype.zb = function(a, b) {
        Ld(this);
        a && typeof a.preventDefault == "function" && a.preventDefault();
        S(document, "keydown", this.Cd);
        S(document, "click", this.Bd);
        I(this.wa, {
            display: "none"
        });
        this.nc && Sd(this.H, true);
        if (this.b.type == "video") {
            M(this.b.s, false);
            this.H.pause(this.b.c)
        }
        if (this.tc && !this.yd && !b) {
            var c = Qd(this, this.b.ga);
            a = this.W.Ha >= 0.2 ? 100: this.W.Ha * 1E3;
            setTimeout(p(this.Te, this), a);
            pc(this.g, "webkitTransitionEnd", p(this.Rc, this));
            setTimeout(p(function() {
                I(this.g, {
                    WebkitTransform: c
                })
            },
            this), 0)
        } else this.Rc()
    };
    X.prototype.Rc = function() {
        H(this.g);
        this.g = null;
        if (this.b.type == "video") {
            this.H.Ia.appendChild(this.b.s);
            this.H.stop(this.b.c);
            if (this.Y) {
                var a = this.b.s.getElementsByTagName("video")[0],
                b = this.b.s.getElementsByTagName("img")[0];
                a.width = this.Y.width;
                a.height = this.Y.height;
                b.width = this.Y.width;
                b.height = this.Y.height;
                I(this.b.s, {
                    width: this.Y.width + "px",
                    height: this.Y.height + "px"
                });
                this.Y = null
            }
        }
        M(this.X, false);
        Jd(this)
    };
    function Jd(a) {
        a.b = {
            type: null,
            jc: false,
            eg: false,
            ga: null,
            Tc: null,
            c: null,
            s: null
        }
    }
    function Td(a) {
        a.K = true;
        if (a.b.jc) {
            I(a.wa, {
                display: "none"
            });
            M(a.g, false)
        }
    }
    function Ud(a) {
        a.K = false;
        if (a.b.jc) {
            a.Rb();
            M(a.g, true)
        }
    }
    function Ld(a) {
        if (a.tc && !a.cb) {
            a.cb = G("div", {
                id: "svhwen"
            });
            a.H.Ia.appendChild(a.cb)
        }
    };
    function Vd(a, b, c, d, e, f, g) {
        this.ya = a;
        this.wc = b;
        this.gd = c;
        this.C = d;
        this.m = e;
        this.hg = f || Wd;
        this.ub = g
    }
    var Wd = "stopped";
    Vd.prototype.bb = function() {
        return this.ya
    };
    function Xd(a, b) {
        a.gd = b;
        return a
    }
    function Yd(a, b) {
        a.wc = b;
        return a
    }
    Vd.prototype.l = function() {
        return this.C
    };
    function Zd(a, b) {
        a.C = b;
        return a
    }
    function $d(a, b) {
        a.m = b;
        return a
    };
    function ae() {} (function(a) {
        a.Xc = function() {
            return a.ze || (a.ze = new a)
        }
    })(ae);
    ae.prototype.Ke = 0;
    ae.Xc();
    function Y(a) {
        this.ag = a || lb();
        this.Ue = be
    }
    q(Y, vc);
    Y.prototype.we = ae.Xc();
    var be = null;
    h = Y.prototype;
    h.ya = null;
    h.db = false;
    h.C = null;
    h.Ue = null;
    h.Fe = null;
    h.Ob = null;
    h.$ = null;
    h.yb = null;
    h.hf = false;
    h.bb = function() {
        return this.ya || (this.ya = ":" + (this.we.Ke++).toString(36))
    };
    h.l = function() {
        return this.C
    };
    h.rc = function(a) {
        if (this.Ob && this.Ob != a) throw Error("Method not supported");
        Y.o.rc.call(this, a)
    };
    h.Xa = function() {
        this.db = true;
        this.$ && s(this.$,
        function(a) { ! a.db && a.l() && a.Xa()
        },
        void 0)
    };
    function ce(a) {
        a.$ && s(a.$,
        function(b) {
            b.db && ce(b)
        },
        void 0);
        a.Hb && a.Hb.xd();
        a.db = false
    }
    Y.prototype.n = function() {
        Y.o.n.call(this);
        this.db && ce(this);
        if (this.Hb) {
            this.Hb.B();
            delete this.Hb
        }
        this.$ && s(this.$,
        function(a) {
            a.B()
        },
        void 0); ! this.hf && this.C && H(this.C);
        this.Ob = this.Fe = this.C = this.yb = this.$ = null
    };
    Y.prototype.removeChild = function(a, b) {
        if (a) {
            var c = m(a) ? a: a.bb();
            a = this.yb && c ? ib(this.yb, c) || null: null;
            if (c && a) {
                var d = this.yb;
                c in d && delete d[c];
                Ba(this.$, a);
                if (b) {
                    ce(a);
                    a.C && H(a.C)
                }
                b = a;
                if (b == null) throw Error("Unable to set parent component");
                b.Ob = null;
                Y.o.rc.call(b, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    function Z(a, b) {
        Y.call(this, b);
        this.me = a;
        this.Eb = new Kc(this);
        this.Ya = new W
    }
    q(Z, Y);
    var de = "",
    ee = '<embed quality="high" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
    Z.prototype.Ld = "window";
    Z.prototype.Qd = "#000000";
    Z.prototype.Gc = "sameDomain";
    function fe(a, b, c) {
        a.ua = m(b) ? b: Math.round(b) + "px";
        a.na = m(c) ? c: Math.round(c) + "px";
        a.l() && Gb(a.Wc(), a.ua, a.na);
        return a
    }
    Z.prototype.Xa = function() {
        Z.o.Xa.call(this);
        this.l().innerHTML = ge(this);
        this.ua && this.na && fe(this, this.ua, this.na);
        this.Eb.lc(this.l(), fb(Sb), Rb)
    };
    function ge(a) {
        var b = v ? '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="%s" name="%s" class="%s"><param name="movie" value="%s"/><param name="quality" value="high"/><param name="FlashVars" value="%s"/><param name="bgcolor" value="%s"/><param name="AllowScriptAccess" value="%s"/><param name="allowFullScreen" value="true"/><param name="SeamlessTabbing" value="false"/>%s</object>': ee,
        c = v ? '<param name="wmode" value="%s"/>': "wmode=%s";
        c = na(c, a.Ld);
        for (var d = a.Ya.la(), e = a.Ya.da(), f = [],
        g = 0; g < d.length; g++) {
            var j = pa(d[g]),
            n = pa(e[g]);
            f.push(j + "=" + n)
        }
        return na(b, a.bb(), a.bb(), de, qa(a.me), qa(f.join("&")), a.Qd, a.Gc, c)
    }
    Z.prototype.Wc = function() {
        return this.l() ? this.l().firstChild: null
    };
    Z.prototype.n = function() {
        Z.o.n.call(this);
        this.Ya = null;
        this.Eb.B();
        this.Eb = null
    };
    function he(a, b) {
        Z.call(this, a, b)
    }
    q(he, Z);
    de = "flash_object";
    he.prototype.Wc = function() {
        return this.l() ? this.l().lastChild: null
    };
    he.prototype.Xa = function(a, b) {
        this.C = a;
        if (this.ua && this.na) ee = '<embed quality="high" width="' + this.ua + '" height="' + this.na + '" id="%s" name="%s" class="%s" src="%s" FlashVars="%s" bgcolor="%s" AllowScriptAccess="%s" allowFullScreen="true" SeamlessTabbing="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" %s></embed>';
        this.Gc = "always";
        this.Ld = "transparent";
        if (b) {
            a = document.createElement("div");
            this.l().appendChild(a);
            b = ge(this);
            if (a.outerHTML) a.outerHTML =
            b;
            else {
                var c = document.createRange();
                c.setStartBefore(a);
                b = c.createContextualFragment(b);
                a.parentNode.replaceChild(b, a)
            }
        } else this.l().innerHTML = ge(this);
        this.ua && this.na && fe(this, this.ua, this.na);
        this.Eb.lc(this.l(), fb(Sb), Rb)
    };
    function $() {
        this.Sa = eval("jilion.sublime.video.params()");
        var a = false,
        b = false,
        c = Ea(document.getElementsByTagName("script"));
        s(c, p(function(d) {
            if (!a) {
				console.log('js thing d: ' + d.src); //file:///Users/EpicDewd/Desktop/first.js ? js file path
                var e = 'rpqttf6p';//d.src.match(/https?\:\/\/cdn\.sublimevideo\.net\/js\/([a-z0-9]{8})\.js/);
                if (e && e.length > 1) a = e[1]
            }
			
            if (!b) b = d[1];
			console.log('B: ' + b);
        },
        this));
        //if (a && b && a == b) {
            this.ia = a;
            this.za();
            new rd(this.ia, this)
        //}
    }
    function sd(a) {
        var b,
        c,
        d,
        e;
        s(a.d, p(function(f) {
            if (f) {
                b = f.l();
                this.Ed(b);
                if (f.wc != "zoomable") {
                    M(b, true);
                    c = ie(this, b, true);
                    d = G("div", {
                        "class": "sublime_video_wrapper",
                        style: c
                    });
                    xb(d, b);
                    H(b);
                    je(this, d, G("p", null, "SublimeVideo player is not properly registered for this site."))
                } else if ((e = Ab(b.previousSibling, false)) && e.nodeName == "A" && C(e, "sublime")) e.onclick = function() {
                    alert("SublimeVideo player is not properly registered for this site.");
                    return false
                }
            }
        },
        a))
    }
    $.prototype.za = function() {
        var a = p(this.sd, this);
        k("sublimevideo.prepare", a, void 0);
        a = p(this.Ed, this);
        k("sublimevideo.unprepare", a, void 0);
        a = p(this.Re, this);
        k("sublimevideo.prepareAndPlay", a, void 0);
        a = p(this.play, this);
        k("sublimevideo.play", a, void 0);
        a = p(this.pause, this);
        k("sublimevideo.pause", a, void 0);
        a = p(this.stop, this);
        k("sublimevideo.stop", a, void 0);
        a = p(this.$d, this);
        k("sublimevideo.debug", a, void 0);
        a = p(this.Le, this);
        k("sublimevideo.onStart", a, void 0);
        a = p(this.Ba, this);
        k("sublimevideo.onEnd",
        a, void 0);
        this.Kb = {};
        this.xb = {
            Bc: "onStart",
            Ac: "onEnd"
        };
        this.P = {
            vb: 0,
            La: 1
        };
        this.Z = 0;
        this.d = [];
        a = navigator.userAgent;
        var b = a.indexOf("webOS") != -1;
        b = Ra || b;
        this.cc = this.Ta = this.Db = false;
        if (b) if (a.indexOf("iPhone") != -1 || a.indexOf("iPod") != -1) this.Db = true;
        else if (a.indexOf("iPad") != -1) this.Ta = true;
        else this.cc = true;
        if (this.bc = b) {
            if (this.Db) ke(this);
            else if (this.Ta) {
                this.Ta = true;
                parseInt(x, 10) <= 531 ? le(this, void 0) : ke(this, void 0)
            } else me(this);
            ne(this)
        } else {
            oe(this);
            if ("localStorage" in window && window.localStorage !==
            null) this.mb = "sublime_volume";
            this.eb = typeof WebKitTransitionEvent === "object";
            a = 3;
            var c = b = null;
            try {
                document.createEvent("TransitionEvent");
                c = "Moz";
                b = "transitionend"
            } catch(d) {
                a -= 1
            }
            try {
                document.createEvent("WebKitTransitionEvent");
                c = "Webkit";
                b = "webkitTransitionEnd"
            } catch(e) {
                a -= 1
            }
            try {
                document.createEvent("OTransitionEvent");
                c = "O";
                b = "oTransitionEnd"
            } catch(f) {
                a -= 1
            }
            this.ha = a > 0 ? {
                endEvent: b,
                prefix: c
            }: false;
            this.cg = typeof HTMLVideoElement === "object" || typeof HTMLVideoElement === "function";
            a = navigator.userAgent.match(/AppleWebKit\/([0-9]+)./);
            this.ic = navigator.userAgent.indexOf("Macintosh") > -1 && a && parseInt(a[1], 10) <= 531;
            this.dc = 500;
            this.ab = this.ac = 0.4;
            this.yc = {
                od: 54,
                qe: 46
            };
            this.Uc = p(this.ne, this);
            this.Vc = p(this.oe, this);
            this.Fb = p(this.re, this);
            this.Gb = p(this.se, this);
            R(document.onresize ? document: window, "resize", p(this.Ka, this));
            v || setInterval(p(this.Ne, this), 300);
            this.T = {};
            this.Vb = {};
            a = p(this.he, this);
            k("jilion.sublime.video.enterFlashFullWindow", a, void 0);
            a = p(this.ie, this);
            k("jilion.sublime.video.exitFlashFullWindow", a, void 0);
            a = p(this.Nd,
            this);
            k("jilion.sublime.video.adjustFlashVideo", a, void 0);
            a = p(this.ye, this);
            k("jilion.sublime.video.injectStyle", a, void 0);
            a = p(this.le, this);
            k("jilion.sublime.video.flashEvent", a, void 0);
            this.Ia = document.createElement("div");
            this.Ia.id = "sublime_videos";
            w ? document.documentElement.appendChild(this.Ia) : wb(document.body, this.Ia);
            pe(this);
            this.Je || ne(this)
        }
    };
    function oe(a) {
        var b = a.Sa.mode == "stable" ? "": a.Sa.mode + "/";
		console.log('wtf b? ' + b);
		console.log('wtf a.ia? ' + a.ia);
        a.df = "sublime.swf?t=" + a.ia;
        a.qc = "play_button.png?t=" + a.ia;
        a.cf = "sublime_css.js?t=" + a.ia
		console.log('urls: ' + a.df);
		console.log('urls: ' + a.qc);
		console.log('urls: ' + a.cf);
    }
    function ne(a) {
        if (!a.Od) {
            eval("var fn=jilion.sublime.video.readyFunction;if(fn)fn();");
            a.Od = true
        }
    }
    $.prototype.he = function() {
        this.Q = "flash";
        qe(this);
        re(this)
    };
    $.prototype.ie = function() {
        if (this.Q) {
            this.Q = null;
            se(this)
        }
    };
    function te(a) {
        a.Hc || I(document.body, {
            overflowX: "auto"
        });
        a.Ic || I(document.body, {
            overflowY: "auto"
        });
        if (a.ic) {
            var b = G("div");
            b.style.width = "1px";
            b.style.height = "15px";
            document.body.appendChild(b);
            setTimeout(function() {
                H(b)
            },
            700)
        }
    }
    function qe(a) {
        a.Hc = K(document.body, "overflowX") == "hidden";
        a.Ic = K(document.body, "overflowY") == "hidden";
        a.Hc || I(document.body, {
            overflowX: "hidden"
        });
        a.Ic || I(document.body, {
            overflowY: "hidden"
        });
        a.Ka()
    }
    $.prototype.re = function(a) {
        var b = a.t;
        switch ((v || t) && b.keyCode == 17 ? 91: b.keyCode) {
        case 91:
        case 224:
            if (this.p) try {
                this.p.toggleSublimeVideoFullBtn(true)
            } catch(c) {} else ue(this, this.a) && ve(this);
            break;
        case 27:
            if (this.Q == "flash") a.preventDefault();
            else if (this.D == "fw") {
                a.preventDefault();
                this.Tb(a)
            }
            break;
        case 32:
            if (this.Q == "flash") a.preventDefault();
            else if (this.D == "fw") {
                a.preventDefault();
                this.jb()
            }
            break
        }
    };
    $.prototype.se = function(a) {
        a = a.t;
        switch ((v || t) && a.keyCode == 17 ? 91: a.keyCode) {
        case 91:
        case 224:
            if (this.p) try {
                this.p.toggleSublimeVideoFullBtn(false)
            } catch(b) {} else ue(this, this.a) && we(this);
            break
        }
    };
    function ve() {
        s(F(undefined, "sublime_video_wrapper"),
        function(a) {
            s(F(undefined, "fullwindow_button", a),
            function(b) {
                z(b, "fullscreen")
            })
        })
    }
    function we() {
        s(F(undefined, "sublime_video_wrapper"),
        function(a) {
            s(F(undefined, "fullwindow_button", a),
            function(b) {
                A(b, "fullscreen")
            })
        })
    }
    function xe(a, b) {
        return b.title || b.getAttribute("title") || b.src || b.getAttribute("src") || ""
    }
    function ye(a, b) {
        return b.match(/.ogg$|.ogv$/i) ? "video/ogg": b.match(/.webm$/i) ? "video/webm": "video/mp4"
    }
    function ze(a, b) {
        var c = [],
        d = true,
        e = C(b, "flash"),
        f = b.src || b.getAttribute("src");
        if (f) {
            b.setAttribute("data-video-src", f);
            if (!e && b.canPlayType) {
                a = b.canPlayType(ye(a, f));
                if (a == "maybe" || a == "probably") d = false
            }
            c.push(f)
        } else {
            f = Ea(b.getElementsByTagName("source"));
            s(f, p(function(g) {
                var j = xe(this, g);
                if (!e && b.canPlayType) {
                    g = b.canPlayType(g.type ? g.type: ye(this, j));
                    if (g == "maybe" || g == "probably") d = false
                }
                c.push(j)
            },
            a))
        }
        return {
            videoPaths: c,
            willNeedFlash: d
        }
    }
    function Be(a, b, c) {
        if (!b || b.length <= 0) return "";
        var d,
        e,
        f,
        g = false;
        s(c,
        function(j) {
            if (!g) {
                e = new RegExp("." + j + "$", "i");
                d = za(b,
                function(n) {
                    return n.match(e) != null
                });
                if (d.length > 0) {
                    f = d[0];
                    g = true
                }
            }
        });
        f || (f = b[0]);
        return f
    }
    function Ce(a, b) {
        if (!b || b.length <= 0) return "";
        var c = /.mp4$/i;
        a = za(b,
        function(d) {
            return d.match(c) != null
        });
        b = a.length;
        return b > 0 ? a[b - 1] : ""
    }
    $.prototype.ma = function(a) {
        var b;
        if (a) {
            var c;
            if (arguments.length == 1) c = l(arguments[0]) ? arguments[0] : [arguments[0]];
            else if (arguments.length > 1) c = arguments;
            b = [];
            for (var d = 0; d < c.length; d++) b.push(ob(c[d]))
        } else b = Ea(document.getElementsByTagName("video"));
        return b
    };
    function ie(a, b, c) {
        var d,
        e,
        f;
        if (c) {
            a = "relative";
            c = d = e = f = "auto"
        } else {
            a = J(b, "position");
            c = J(b, "top");
            d = J(b, "bottom");
            e = J(b, "left");
            f = J(b, "right")
        }
        return "width:" + b.width + "px !important;height:" + b.height + "px !important;background:transparent !important;display:block !important;float:none !important;border:none !important;position:" + a + " !important;top:" + c + " !important;bottom:" + d + " !important;left:" + e + " !important;right:" + f + " !important;padding-top:" + J(b, "padding-top") + " !important;padding-bottom:" + J(b,
        "padding-bottom") + " !important;padding-left:" + J(b, "padding-left") + " !important;padding-right:" + J(b, "padding-right") + " !important;margin-top:" + J(b, "margin-top") + " !important;margin-bottom:" + J(b, "margin-bottom") + " !important;margin-left:" + J(b, "margin-left") + " !important;margin-right:" + J(b, "margin-right") + " !important;"
    }
    function De(a, b, c) {
        var d = a.Z;
        a.Z += 1;
        var e = new Vd(d);
        b.width = b.width || b.getAttribute("width") || "400";
        b.height = b.height || b.getAttribute("height") || "200";
        b.poster = b.poster || b.getAttribute("poster") || "http://cdn.sublimevideo.net/p/black_pixel.gif";
        if (parseInt(b.width, 10) < 200) {
            var f = parseInt(b.width, 10) / parseInt(b.height, 10);
            b.width = "200";
            b.height = parseInt(200 / f, 10) + ""
        }
        if (b.preload) b.preload = "none";
        M(b, false);
        var g = G("div", {
            id: "sublime_video_wrapper_" + d,
            "class": "sublime_video_wrapper"
        });
        I(g, {
            width: b.width +
            "px",
            height: b.height + "px",
            display: "none"
        });
        var j = G("img", {
            src: b.poster,
            width: b.width,
            height: b.height
        });
        f = G("span", {
            className: "play_button"
        });
        if (v) {
            var n = G("span");
            n.style.filter = 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + a.qc + '");';
            f.appendChild(n)
        }
        I(f, {
            backgroundImage: "url(" + a.qc + ")"
        });
        c && M(f, false);
        g.appendChild(j);
        g.appendChild(f);
        a.Ia.appendChild(g);
        Zd(e, b);
        $d(e, g);
        if (C(b, "zoom")) {
            Yd(e, "zoomable");
            if ((c = Ab(b.previousSibling, false)) && c.tagName.toUpperCase() == "A" && C(c, "sublime")) {
                z(c,
                "zoomvideo " + d);
                a.nd++
            }
            setTimeout(function() {
                g.appendChild(b)
            },
            0)
        } else {
            Yd(e, "wrapped");
            c = ie(a, b);
            c = G("div", {
                id: "sublime_video_placeholder_" + d,
                style: c
            });
            xb(c, b);
            a.T[d] = c;
            a.Vb[d] = g;
            setTimeout(function() {
                g.appendChild(b);
                v && b.readyState && b.readyState > 0 && b.pause()
            },
            0);
            var o = Fb(c);
            setTimeout(function() {
                I(g, {
                    position: "absolute",
                    top: o.y + "px",
                    left: o.x + "px",
                    display: ""
                })
            },
            0)
        }
        c = ze(a, b);
        j = c.videoPaths;
        if (c.willNeedFlash) {
            Xd(e, "flash");
            R(f, "click", p(a.Ze, a, d, j))
        } else {
            Xd(e, "html5");
            a.ld++;
            R(f, "click", p(a.$e, a,
            d))
        }
        a.d.push(e);
        A(b, "sublime");
        z(b, "sublimed")
    }
    function pe(a, b, c) {
        a.ld = 0;
        a.nd = 0;
        a.md = 0;
        var d = a.ma(b),
        e = !b;
        s(d, p(function(f) {
            if (e && C(f, "sublime") || !e) {
                De(this, f, c);
                this.md++
            }
        },
        a));
        if (a.md > 0) {
            Ee(a);
            if (a.ld > 0 && !a.sc) {
                a.Sb = document.createElement("script");
                a.Sb.type = "text/javascript";
                a.Sb.src = a.cf;
                document.body.appendChild(a.Sb);
                a.Je = true
            }
        }
        if (a.nd > 0) if (a.sa) Kd(a.sa);
        else a.sa = new X(a.eb, a.ha, a.Sa.mode, a.ia, a);
        a.Ka();
        setTimeout(p(function() {
            Fe(this)
        },
        a), 10)
    }
    function Fe(a) {
        var b,
        c,
        d,
        e = "auto",
        f = null,
        g;
        s(a.d, p(function(j) {
            if (j) if (c = this.T[j.bb()]) {
                d = c;
                for (g = 0; d && d.nodeName != "BODY" && g < 20;) {
                    e = K(d, "zIndex");
                    if (e > 0) f = e;
                    d = d.parentNode;
                    g += 1
                }
                if (f) {
                    b = j.m;
                    I(b, {
                        zIndex: f
                    });
                    j.ub = f
                }
            }
        },
        a))
    }
    function Ge(a, b, c) {
        return (c && C(b, "sublime") || !c) && !C(b, "zoom")
    }
    function me(a, b) {
        var c = a.ma(b),
        d = !b;
        oe(a);
        s(c, p(function(e) {
            if (Ge(this, e, d)) {
                var f = this.Z;
                this.Z += 1;
                var g = new Vd(f, "semiWrapped", "html5", e),
                j = ze(this, e),
                n = wd(Ce(this, j.videoPaths));
                M(e, false);
                j = "sublime_video_wrapper_" + f;
                var o = ie(this, e, true);
                j = G("div", {
                    id: j,
                    style: o
                });
                o = G("img", {
                    src: e.poster || e.getAttribute("poster"),
                    width: e.width || e.getAttribute("width"),
                    height: e.height || e.getAttribute("height"),
                    style: "display:block !important;opacity:1 !important;float:none !important;border:none !important;padding:0 !important;margin:0 !important;position:static !important;top:auto !important;bottom:auto !important;left:auto !important;right:auto !important;background:transparent !important"
                });
                var u = G("span", {
                    style: "display:block !important;opacity:1 !important;float:none !important;border:none !important;padding:0 !important;margin:0 !important;position:absolute !important;width:auto !important;height:auto !important;top:0 !important;bottom:0 !important;left:0 !important;right:0 !important;background-color:rgba(0,0,0,0.4) !important;background-position:50%; !important;background-repeat:no-repeat !important;background-image:url(" + this.qc + ") !important;"
                });
                j.appendChild(o);
                j.appendChild(u);
                xb(j, e);
                $d(g, j);
                R(u, "click", p(function() {
                    this.c = f;
                    document.location.href = n
                },
                this));
                this.d.push(g);
                A(e, "sublime");
                z(e, "sublimed")
            }
        },
        a))
    }
    function ke(a, b) {
        var c = a.ma(b),
        d = !b;
        s(c, p(function(e) {
            if (Ge(this, e, d)) {
                var f = this.Z;
                this.Z += 1;
                var g = new Vd(f, "plain", "html5", e);
                this.d.push(g);
                e.controls = true;
                R(e, "play", p(function() {
                    this.oa = e;
                    this.c = f
                },
                this));
                R(e, "ended", p(function() {
                    this.fireEvent(this.P.La, g)
                },
                this));
                A(e, "sublime");
                z(e, "sublimed")
            }
        },
        a))
    }
    function le(a, b) {
        var c = a.ma(b),
        d = !b;
        s(c, p(function(e) {
            if (Ge(this, e, d)) {
                var f = this.Z;
                this.Z += 1;
                var g = new Vd(f, "plain", "html5");
                if (e.src) Zd(g, e);
                else {
                    var j = [],
                    n,
                    o;
                    M(e, false);
                    s(F("source", undefined, e), p(function(D) {
                        n = xe(this, D);
                        o = e.canPlayType(D.type ? D.type: ye(this, n));
                        if (o == "maybe" || o == "probably") j.push(n)
                    },
                    this));
                    if (j.length > 0) {
                        var u = G("video", {
                            width: e.width,
                            height: e.height,
                            poster: e.poster,
                            id: e.id,
                            src: j[0],
                            preload: "none",
                            style: "width:" + e.width + "px;height:" + e.height + "px"
                        });
                        u.controls = true;
                        xb(u, e);
                        H(e);
                        Zd(g, u)
                    }
                }
                this.d.push(g);
                var B = g.l() || e;
                R(B, "play", p(function() {
                    this.oa = B;
                    this.c = f
                },
                this));
                R(B, "ended", p(function() {
                    this.fireEvent(this.P.La, g)
                },
                this));
                A(B, "sublime");
                z(B, "sublimed")
            }
        },
        a))
    }
    function He(a, b) {
        b = a.ma(b);
        s(b, p(function(c) {
            if (C(c, "sublimed")) {
                var d = Ie(this, c),
                e = c.parentNode;
                this.stop(d);
                c.removeAttribute("src");
                H(F("img", undefined, e)[0]);
                var f = F(undefined, "play_button", e)[0];
                T(f);
                H(f);
                if (C(c, "zoom")) {
                    f = this.sa.Hd[d];
                    yb(c, f);
                    H(e);
                    T(f);
                    A(f, "sublimed");
                    A(f, "zoomvideo");
                    f.className = f.className.replace(/\s[0-9]+$/, "");
                    z(f, "sublime")
                } else {
                    f = this.T[d];
                    yb(c, f);
                    H(f);
                    delete this.T[d];
                    H(e);
                    delete this.Vb[d]
                }
                delete this.d[d];
                A(c, "sublimed")
            }
        },
        a))
    }
    function Je(a, b) {
        b = a.ma(b);
        s(b, p(function(c) {
            if (C(c, "sublimed")) {
                var d = Ie(this, c);
                this.stop(d);
                H(this.d[d].m);
                delete this.d[d];
                A(c, "sublimed");
                M(c, true)
            }
        },
        a))
    }
    function Ke(a, b) {
        b = a.ma(b);
        s(b, p(function(c) {
            if (C(c, "sublimed")) {
                var d = Ie(this, c);
                this.stop(d);
                T(c, "play");
                delete this.d[d];
                A(c, "sublimed")
            }
        },
        a))
    }
    $.prototype.Ne = function() {
        this.D != "fw" && this.Ka()
    };
    $.prototype.Ka = function() {
        this.Q || (this.K ? Le(this, true) : eb(this.T, p(function(a, b) {
            a = Fb(a);
            this.Vb[b].style.top = a.y + "px";
            this.Vb[b].style.left = a.x + "px"
        },
        this)))
    };
    function Me(a) {
        S(document, "keydown", a.Fb);
        S(document, "keyup", a.Gb);
        var b = a.p.parentNode;
        H(a.p);
        M(F("img", undefined, b)[0], true);
        M(F(undefined, "play_button", b)[0], true);
        a.p = null;
        a.c = null
    }
    function Ne(a) {
        a.a.paused || a.jb();
        A(a.a.parentNode, "paused");
        T(a.a);
        if (a.v) try {
            a.v.B()
        } catch(b) {}
        a.ja && a.ja.B();
        T(a.sb);
        H(a.sb);
        T(a.r);
        H(a.r);
        T(a.$a);
        H(a.$a);
        T(a.F);
        H(a.F);
        s(F(undefined, "fast_backward", a.e),
        function(d) {
            T(d);
            H(d)
        });
        s(F(undefined, "fast_forward", a.e),
        function(d) {
            T(d);
            H(d)
        });
        H(a.e);
        S(document, "keydown", a.Fb);
        S(document, "keyup", a.Gb);
        var c = a.a.parentNode;
        a.a.removeAttribute("style");
        M(a.a, false);
        M(F("img", undefined, c)[0], true);
        M(F(undefined, "play_button", c)[0], true);
        a.a = null;
        a.c = null
    }
    $.prototype.Ze = function(a, b, c) {
        c.preventDefault();
        this.stop();
        this.c = a;
        a = this.d[a].m;
        M(F(undefined, "play_button", a)[0], false);
        M(F("img", undefined, a)[0], false);
        if (wa(Mc, 9) >= 0) {
            this.fireEvent(this.P.vb, this.d[this.c]);
            b = wd(Be(this, b, ["mp4", "mov", "m4v"]));
            c = new he(this.df);
            c.Ya.V("videoUrl", b);
            c.Ya.V("t", this.ia);
            fe(c, "100%", "100%");
            c.Xa(a, true);
            this.p = F(undefined, "flash_object", a)[0];
            R(document, "keydown", this.Fb);
            R(document, "keyup", this.Gb)
        } else {
            b = G("p", {
                style: "padding:8px !important;"
            },
            "You need to upgrade your Adobe Flash Player to watch this video.");
            c = G("p", {
                style: "padding:8px !important;"
            },
            G("a", {
                href: "http://get.adobe.com/flashplayer"
            },
            "Download it from Adobe"));
            this.p = je(this, a, [b, c])
        }
    };
    function je(a, b, c) {
        a = G("div", {
            "class": "sv_error_messages",
            style: "color:#666 !important;text-shadow:none !important;font-family:Helvetica, Arial, sans-serif !important;font-size:14px !important;background:#000 !important;width:100% !important;height:100% !important;"
        },
        G("table", {
            "class": "sv_content",
            style: "border-collapse:collapse !important;width:100% !important;height:100% !important;"
        },
        G("tbody", null, G("tr", null, G("td", {
            style: "vertical-align:middle !important;text-align:center !important;line-height:16px !important;"
        },
        c)))));
        b.appendChild(a);
        return a
    }
    $.prototype.Nd = function(a, b) {
        if (a > 0 && b > 0) {
            a = a / b;
            b = this.d[this.c].m;
            var c = Ib(b);
            Math.abs(c.width / c.height - a) > 0.01 && I(b, {
                height: parseInt(c.width / a, 10) + "px"
            })
        }
    };
    $.prototype.$e = function(a, b) {
        b.preventDefault();
        this.stop();
        this.D = "normal";
        this.c = a;
        a = this.d[a].m;
        this.fireEvent(this.P.vb, this.d[this.c]);
        this.a = F("video", undefined, a)[0];
        this.a.removeAttribute("controls");
        I(this.a, {
            position: "relative",
            top: 0,
            left: 0
        });
        if (this.a.getAttribute("data-video-src")) this.a.src = this.a.getAttribute("data-video-src");
        M(Ab(this.a.previousSibling, false), false);
        a = G("div", {
            "class": "progress_bar"
        });
        this.Wa = G("em", {
            "class": "elapsed_time"
        },
        "00:00");
        this.Qb = G("em", {
            "class": "remaining_time"
        },
        "00:00");
        this.U = G("div", {
            "class": "progress_back"
        });
        b = G("div", {
            "class": "progress_loading_wrapper"
        });
        var c = G("div", {
            "class": "progress_loading_stripes"
        });
        this.ud = G("div", {
            "class": "progress_buffered"
        });
        this.vd = G("div", {
            "class": "progress_elapsed_time"
        });
        this.Ga = Math.max(this.a.width, 200);
        if (Oe(this, "range") && "WebkitAppearance" in document.body.style) {
            this.r = G("input", {
                "class": "progress_indicator",
                type: "range",
                value: 0
            });
            this.r.setAttribute("min", 0);
            this.r.setAttribute("max", this.Ga);
            this.Pb = this.r
        } else {
            this.r =
            G("span", {
                "class": "progress_indicator"
            });
            this.v = true
        }
        b.appendChild(c);
        this.U.appendChild(b);
        this.U.appendChild(this.ud);
        this.U.appendChild(this.vd);
        this.U.appendChild(this.r);
        this.ob = G("div", {
            "class": "time_display_wrapper"
        });
        this.ob.appendChild(this.Wa);
        this.ob.appendChild(this.Qb);
        a.appendChild(this.ob);
        a.appendChild(this.U);
        if (C(this.a, "hd")) this.Wb = G("span", {
            "class": "hd_toggle_button"
        });
        this.tb = G("div", {
            "class": "volume_wrapper"
        });
        var d = G("div", {
            "class": "volume_slider_wrapper"
        });
        this.Ja = G("div",
        {
            "class": "volume_slider_bounds"
        });
        I(this.Ja, {
            width: this.yc.od + "px"
        });
        this.xc = G("span", {
            "class": "volume_slider_handle"
        });
        I(this.xc, {
            width: "8px"
        });
        this.sb = G("div", {
            "class": "volume_speaker_button"
        });
        var e = G("div", {
            "class": "volume_level_wrapper"
        });
        this.Kd = G("div", {
            "class": "volume_level_indicator"
        });
        var f = G("div", {
            "class": "volume_level_mask"
        });
        this.Ja.appendChild(this.xc);
        d.appendChild(this.Ja);
        this.tb.appendChild(d);
        e.appendChild(this.Kd);
        e.appendChild(f);
        this.sb.appendChild(e);
        this.tb.appendChild(this.sb);
        Pe(this);
        this.$a = G("span", {
            "class": "fullwindow_button"
        });
        this.F = G("span", {
            "class": "play_pause_button"
        });
        this.e = G("div", {
            "class": "controls small"
        });
        M(this.e, !!this.sc);
        this.e.appendChild(this.F);
        this.e.appendChild(a);
        this.Wb && wb(this.e, this.Wb);
        this.e.appendChild(this.tb);
        this.e.appendChild(this.$a);
        M(this.a, true);
        this.a.parentNode.appendChild(this.e);
        M(zb(this.a.parentNode), false);
        this.mc = new xd(b, c, this.a.parentNode);
        z(this.F, "pause");
        Qe(this);
        this.Se = {
            normal: Ib(this.U).width,
            fw: 202
        };
        R(this.a, "loadedmetadata",
        p(function() {
            Re(this)
        },
        this));
        R(this.a, "canplay", p(function() {
            if ((w || t) && this.a.currentTime == 0) Se(this)
        },
        this));
        R(this.a, "canplaythrough", p(function() {
            this.ea && this.gc && Se(this)
        },
        this));
        if (w && x.substring(0, 1) < 2) this.a.src = this.a.currentSrc;
        this.a.load();
        this.a.preload = "auto"
    };
    function Pe(a) {
        var b = F(undefined, "progress_bar", a.e);
        if (a.D == "normal") {
            b.length > 0 && I(b[0], {
                width: a.a.width - 40 + "px"
            });
            b = a.Wb ? 151: 129;
            I(a.U, {
                width: a.a.width - b + "px"
            });
            a.Pb && I(a.r, {
                width: a.a.width - b + 2 + "px"
            })
        } else {
            b.length > 0 && vd(b[0]);
            M(a.Wa, true);
            I(a.U, {
                width: "218px",
                left: "0"
            });
            a.Pb && I(a.r, {
                width: "220px"
            })
        }
    }
    function Re(a) {
        var b = a.a.videoWidth / a.a.videoHeight;
        if (Math.abs(a.a.width / a.a.height - b) > 0.01) {
            b = parseInt(a.a.width / b, 10);
            a.a.height = b;
            I(a.a, {
                height: b + "px"
            });
            I(a.a.parentNode, {
                height: b + "px"
            })
        }
        R(a.$a, "click", p(a.Tb, a));
        R(a.a, "dblclick", p(a.Tb, a));
        R(a.ob, "click", p(a.Ee, a));
        R(a.F, "click", p(a.jb, a));
        a.ve = false;
        ue(a, a.a) && z(a.$a, "supports_fullscreen");
        R(a.a, "selectstart",
        function(c) {
            c.preventDefault()
        });
        if (b = a.mb ? localStorage[a.mb] : null) a.a.volume = parseFloat(b);
        a.ja = new zd(a.xc, a.Ja, p(a.Lc, a), {
            range: {
                start: 0,
                end: 1
            },
            sliderValue: a.a.volume,
            onDragBegin: p(function() {
                z(this.d[this.c].m, "volume_sliding")
            },
            a),
            onDragEnd: p(function() {
                A(this.d[this.c].m, "volume_sliding")
            },
            a),
            onSlide: p(function(c) {
                this.a.volume = c;
                Te(this, c)
            },
            a),
            onChange: p(function(c) {
                this.a.volume = c;
                Te(this, c);
                if (this.mb && c > 0) localStorage[this.mb] = c
            },
            a)
        });
        Te(a, a.a.volume);
        R(a.sb, "click", p(function() {
            if (this.a.volume > 0) {
                this.a.volume = 0;
                Ed(this.ja, 0);
                Te(this, 0)
            } else {
                var c = parseFloat(localStorage[this.mb]) || 1;
                this.a.volume = c;
                Ed(this.ja, c);
                Te(this,
                c)
            }
        },
        a));
        if (a.v) a.v = new zd(a.r, a.U, p(a.Lc, a), {
            range: {
                start: 0,
                end: a.Ga
            },
            borderWidth: 1,
            onDragBegin: p(function() {
                z(this.d[this.c].m, "sliding")
            },
            a),
            onDragEnd: p(function() {
                A(this.d[this.c].m, "sliding")
            },
            a),
            onSlide: p(function(c) {
                c = this.a.duration * c / this.Ga;
                this.Wa.innerHTML = Ue(this, c);
                this.Qb.innerHTML = "-" + Ue(this, this.a.duration - c);
                Ve(this, c)
            },
            a),
            onChange: p(function(c) {
                c = this.a.duration * c / this.Ga;
                this.a.currentTime = c;
                Ve(this, c);
                this.Xb = c
            },
            a)
        });
        else {
            R(a.r, "change", p(function() {
                var c = this.a.duration * this.r.value /
                this.Ga;
                if (c < 0) c = 0;
                else if (c > this.a.Va) c = this.a.duration;
                this.a.currentTime = c
            },
            a));
            R(a.r, "mousedown", p(function() {
                z(this.d[this.c].m, "sliding");
                pc(document, "mouseup", p(function() {
                    A(this.d[this.c].m, "sliding")
                },
                this))
            },
            a))
        }
        R(a.a, "play", p(function() {
            z(this.F, "pause");
            this.mc.stop()
        },
        a));
        R(a.a, "pause", p(function() {
            this.ea || A(this.F, "pause");
            var c = F(undefined, "playback_display", Ab(this.a.nextSibling, true));
            c.length > 0 && L(c[0], 0)
        },
        a));
        R(a.a, "progress", p(a.Fd, a));
        R(a.a, "timeupdate", p(function() {
            if (! (this.va >
            0.99) && !this.ea) {
                var c = this.Pa - this.a.currentTime;
                c < 1.8 && c >= 0 && Qe(this)
            }
            if (this.v && !this.v.dragging) if (this.Xb && Math.abs(this.a.currentTime - this.Xb) > 0.5) this.Xb = null;
            else {
                this.Wa.innerHTML = Ue(this, this.a.currentTime);
                this.Qb.innerHTML = "-" + Ue(this, this.a.duration - this.a.currentTime);
                Ve(this);
                We(this)
            }
            if (this.Pb) {
                this.Wa.innerHTML = Ue(this, this.a.currentTime);
                this.Qb.innerHTML = "-" + Ue(this, this.a.duration - this.a.currentTime);
                Ve(this);
                We(this)
            }
        },
        a));
        R(a.a, "ratechange", p(function() {
            var c = F(undefined, "playback_display",
            Ab(this.a.nextSibling, true));
            if (c.length > 0) {
                c = c[0];
                if (this.a.playbackRate > 1 || this.a.playbackRate < -1) {
                    L(this.tb, 0);
                    L(c, 1);
                    c.innerHTML = Math.abs(this.a.playbackRate) + "x"
                } else {
                    L(c, 0);
                    L(this.tb, 1)
                }
            }
        },
        a));
        R(a.a, "ended", p(function() {
            if (!C(this.d[this.c].m, "sliding")) {
                this.a.pause();
                A(this.F, "pause");
                this.K ? Xe(this, this.P.La) : this.fireEvent(this.P.La, this.d[this.c])
            }
        },
        a));
        setTimeout(p(function() {
            this.Fd()
        },
        a), 200);
        R(document, "keydown", a.Fb);
        R(document, "keyup", a.Gb)
    }
    $.prototype.Fd = function(a) {
        var b = null;
        try {
            b = a.t
        } catch(c) {}
        this.Pa = this.va = 0;
        a = this.a.duration;
        if (this.a.buffered && this.a.buffered.length > 0) {
            this.Pa = this.a.buffered.end(0);
            this.va = this.Pa / a
        } else if (b && b.lengthComputable && b.total) {
            this.va = b.loaded / b.total;
            this.Pa = this.va * a
        }
        this.gc = this.Pa - this.a.currentTime > 5 || this.va > 0.99;
        this.ea && this.gc && Se(this);
        I(this.ud, {
            width: this.va * 100 + "%"
        })
    };
    function Te(a, b) {
        I(a.Kd, {
            height: (b == 0 ? 0: Math.max(9, parseInt(b * 100, 10))) + "%"
        })
    }
    function We(a) {
        var b = a.a.currentTime / a.a.duration * a.Ga;
        if (a.v) Ed(a.v, b);
        else a.Pb.value = b
    }
    function Ve(a, b) {
        var c = a.Se[a.D];
        I(a.vd, {
            width: ((c - 10) / a.a.duration * (b || a.a.currentTime) + 5) * (100 / c) + "%"
        })
    }
    $.prototype.Ee = function() {
        var a = this.ob; ! C(a, "remaining") ? z(a, "remaining") : A(a, "remaining")
    };
    function Qe(a) {
        if (C(a.F, "pause")) {
            a.ea = true;
            a.mc.start();
            a.a.pause();
            Ye(a)
        }
    }
    function Se(a) {
        a.ea = false;
        a.a.play()
    }
    function Ze(a) {
        a.ea = false;
        A(a.F, "pause");
        a.mc.stop()
    }
    h = $.prototype;
    h.jb = function() {
        this.ve = true;
        if (this.a.paused && !this.ea) {
            if (this.a.ended) this.a.currentTime = 0;
            if (this.gc) {
                this.a.play();
                A(this.a.parentNode, "paused")
            } else {
                z(this.F, "pause");
                Qe(this)
            }
        } else {
            this.ea && Ze(this);
            Ye(this);
            this.a.pause();
            z(this.a.parentNode, "paused")
        }
    };
    h.je = function() {
        this.a.paused && this.a.play();
        if (this.a.playbackRate < 0 && this.a.playbackRate > -8) this.a.playbackRate /= 0.5;
        else if (this.a.playbackRate == 1) this.a.playbackRate = -2;
        else if (this.a.playbackRate > 0) this.a.playbackRate /= 2
    };
    h.ke = function() {
        this.a.paused && this.a.play();
        if (this.a.playbackRate > 0 && this.a.playbackRate < 8) this.a.playbackRate *= 2;
        else if (this.a.playbackRate == -2) this.a.playbackRate = 1;
        else if (this.a.playbackRate < 0) this.a.playbackRate *= 0.5
    };
    h.Lc = function() {
        var a = 0,
        b = 0;
        if (this.K && this.Ab) {
            a = this.Ab.Bb;
            b = this.Ab.Cb
        }
        return new db(a, b)
    };
    h.Tb = function(a) {
        a.preventDefault();
        this.ab = a.shiftKey ? "3.5": this.ac;
        this.Id = this.ab + "s -webkit-transform";
        a = ue(this, this.a) && a.metaKey;
        if (this.D == "normal") this.bd || $e(this, a);
        else a ? $e(this, a) : Xe(this)
    };
    function $e(a, b) {
        if (b) {
            a.a.webkitSupportsFullscreen && a.a.webkitEnterFullScreen();
            we(a)
        } else {
            A(a.e, "small");
            L(a.e, 0);
            M(a.e, false);
            a.sa && Td(a.sa);
            I(a.a.parentNode, {
                zIndex: "999998"
            });
            a.D = "fw";
            Pe(a);
            if (! (F(undefined, "fast_backward", a.e).length > 0)) if (Math.abs(a.a.playbackRate) > 0 && !t) {
                b = G("span", {
                    "class": "fast_backward"
                });
                R(b, "click", p(a.je, a));
                var c = G("span", {
                    "class": "fast_forward"
                });
                R(c, "click", p(a.ke, a));
                var d = G("span", {
                    "class": "playback_display ui-draggable"
                });
                L(d, 0);
                a.e.appendChild(d);
                d = zb(a.e);
                xb(b,
                d);
                xb(c, d)
            }
            a.Ab = new yd(a.e, a.ic);
            if (a.T[a.c]) a.ed = ud(a.T[a.c]);
            qe(a);
            I(ob(document.body), {
                WebkitUserSelect: "none",
                MozUserSelect: "none"
            });
            if (a.eb) {
                Le(a);
                I(a.a, {
                    WebkitTransition: a.Id
                });
                pc(a.a, "webkitTransitionEnd", p(function() {
                    I(this.a, {
                        WebkitTransition: "none"
                    });
                    af(this)
                },
                a))
            } else {
                a.Q = "html5";
                re(a);
                af(a)
            }
            Nd(a)
        }
    }
    function re(a) {
        var b = tb(document),
        c = a.d[a.c].m;
        a.Ub = {
            Yd: c.style.width,
            Vd: c.style.height,
            Xd: c.style.top,
            Wd: c.style.left
        };
        var d = false;
        if (v && x < 7) {
            a.hc = {
                margin: document.body.style.margin,
                padding: document.body.style.padding,
                height: document.body.style.height
            };
            I(document.body, {
                margin: 0,
                padding: 0,
                height: "100%"
            });
            b = {
                top: "0" + b.y + "px",
                left: "0" + b.x + "px"
            }
        } else if (w) b = {
            top: "0" + b.y + "px",
            left: "0" + b.x + "px"
        };
        else {
            b = {
                position: "fixed",
                top: "-9999px",
                left: "0"
            };
            d = true
        }
        var e = {
            zIndex: "999998",
            width: "100%",
            height: "100%"
        };
        kb(e, b);
        I(c, e);
        a.Q == "html5" && I(a.a, {
            width: "100%",
            height: "100%"
        });
        d && setTimeout(function() {
            I(c, {
                top: "0"
            })
        },
        0)
    }
    function se(a) {
        var b = a.d[a.c].m;
        v && x < 7 && I(document.body, {
            margin: a.hc.margin,
            padding: a.hc.padding,
            height: a.hc.height
        });
        I(b, {
            top: "-9999px"
        });
        I(b, {
            zIndex: a.d[a.c].ub > 0 ? a.d[a.c].ub: "1",
            width: a.Ub.Yd,
            height: a.Ub.Vd,
            position: "absolute",
            top: a.Ub.Xd,
            left: a.Ub.Wd
        });
        te(a);
        a.Ka();
        a.Q == "html5" && I(a.a, {
            width: "",
            height: ""
        })
    }
    function af(a) {
        a.K = true;
        z(a.e, "full");
        I(a.e, {
            bottom: "8%"
        });
        M(a.e, true);
        setTimeout(p(function() {
            bf(this)
        },
        a), 0);
        I(a.Ja, {
            width: a.yc.qe + "px"
        });
        Ad(a.ja);
        Ed(a.ja, a.a.volume);
        if (a.v) {
            Ad(a.v);
            We(a)
        }
        R(a.a, "click", a.Uc);
        I(ob(document.body), {
            WebkitUserSelect: "auto",
            MozUserSelect: "auto"
        });
        R(document, "mousemove", a.Vc);
        a.rd = 500;
        a.hd = 3E3;
        a.Qa = false;
        a.Ra = true;
        a.Pe = setInterval(p(a.pe, a), a.rd);
        a.Mb = 0
    }
    $.prototype.ne = function() {
        if (this.K && Kb(this.e) === 1 && !this.a.paused) {
            this.Mb = this.hd + 1;
            cf(this);
            this.Qa = true;
            this.Ra = false;
            clearTimeout(this.Be);
            this.dd = true;
            this.Be = setTimeout(p(function() {
                this.dd = false
            },
            this), this.dc)
        }
    };
    $.prototype.oe = function(a) {
        this.jd = a.clientX * a.clientY
    };
    function bf(a) {
        Ve(a);
        a.ha ? L(a.e, 1) : (new Jc(a.e, a.dc)).play()
    }
    function Ye(a) {
        if (a.K && Kb(a.e) === 0) {
            bf(a);
            a.Ra = true;
            a.Qa = false
        }
    }
    function cf(a) {
        a.ha ? L(a.e, 0) : (new Ic(a.e, a.dc)).play()
    }
    $.prototype.pe = function() {
        if (!this.a.paused) {
            if (this.Ce === this.jd) this.Mb += this.rd;
            else this.Mb = 0;
            this.Ce = this.jd;
            if (this.Mb > this.hd) {
                if (!this.Qa) {
                    cf(this);
                    this.Qa = true;
                    this.Ra = false
                }
            } else if (!this.Ra && !this.dd) {
                bf(this);
                this.Ra = true;
                this.Qa = false
            }
        }
    };
    function Xe(a, b) {
        a.K = false;
        a.bd = true;
        I(ob(document.body), {
            WebkitUserSelect: "none",
            MozUserSelect: "none"
        });
        T(a.a, "click");
        S(document, "mousemove", a.Vc);
        clearInterval(a.Pe);
        I(a.e, {
            WebkitTransition: "none",
            WebkitTransform: "translate(0px,0px)",
            MozTransform: "translate(0px,0px)",
            OTransform: "translate(0px,0px)",
            opacity: 0,
            bottom: "0px"
        });
        M(a.e, false);
        A(a.e, "full");
        z(a.e, "small");
        a.Ab.Nc();
        a.D = "normal";
        Pe(a);
        Sd(a);
        if (a.eb) {
            te(a);
            a.Ka();
            if (a.T[a.c]) {
                var c = ud(a.T[a.c]);
                if (a.ed.x != c.x || a.ed.y != c.y) Le(a)
            }
            T(a.a, "webkitTransitionEnd");
            I(a.a, {
                WebkitTransition: a.Id
            });
            pc(a.a, "webkitTransitionEnd", p(function() {
                df(this, b)
            },
            a));
            I(a.a, {
                WebkitTransform: "none"
            })
        } else {
            a.Q = null;
            se(a);
            df(a, b)
        }
        Ve(a)
    }
    function df(a, b) {
        I(a.a.parentNode, {
            zIndex: a.d[a.c].ub > 0 ? a.d[a.c].ub: "auto"
        });
        vd(a.e);
        I(a.Ja, {
            width: a.yc.od + "px"
        });
        Ad(a.ja);
        Ed(a.ja, a.a.volume);
        if (a.v) {
            Ad(a.v);
            We(a)
        }
        a.sa && Ud(a.sa);
        I(ob(document.body), {
            WebkitUserSelect: "auto",
            MozUserSelect: "auto"
        });
        a.bd = false;
        b && a.fireEvent(b, a.d[a.c])
    }
    function Le(a, b) {
        var c = a.a.width,
        d = a.a.height,
        e = sb(window),
        f = tb(document),
        g = ud(a.a),
        j;
        j = c / d >= e.width / e.height ? e.width / c: e.height / d;
        var n = g.y - f.y;
        f = g.x - f.x;
        if (b) if (a.ic) {
            setTimeout(p(function() {
                I(this.a, {
                    position: "relative"
                })
            },
            a), 10);
            setTimeout(p(function() {
                I(this.a, {
                    position: "absolute"
                })
            },
            a), 20)
        }
        b = f / (e.width - c);
        g = n / (e.height - d);
        n = n + d * g;
        d = (e.height - d * j) / 2 + d * j * g;
        I(a.a, {
            WebkitTransformOrigin: 100 * b + "% " + 100 * g + "%",
            WebkitTransform: "scale(" + j + ") translate(" + parseInt(((e.width - c * j) / 2 + c * j * b - (f + c * b)) / j, 10) +
            "px, " + parseInt((d - n) / j, 10) + "px)"
        })
    }
    function Nd(a, b, c) {
        if (!a.k) {
            a.k = G("div");
            I(a.k, {
                position: "absolute",
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "#000",
                zIndex: 999997
            });
            L(a.k, 0);
            R(a.k, "dblclick", p(a.Tb, a));
            R(a.k, "click", a.Uc)
        }
        var d;
        d = b ? b: 1;
        var e;
        if (c) {
            e = c;
            a.pd = e
        } else e = "#000";
        b = Kb(a.k);
        a.pa = b;
        document.body.appendChild(a.k);
        if (a.eb) {
            I(a.k, {
                WebkitTransitionProperty: "opacity, background",
                WebkitTransitionDuration: a.ab + "s"
            });
            setTimeout(p(function() {
                I(this.k, {
                    opacity: d,
                    background: e
                })
            },
            a), 10)
        } else {
            L(a.k, d);
            I(a.k,
            {
                background: e
            })
        }
    }
    function Sd(a, b) {
        if (a.eb) {
            if (b) a.ab = a.ac;
            I(a.k, {
                WebkitTransitionDuration: a.ab + "s"
            });
            setTimeout(p(function() {
                I(this.k, {
                    opacity: this.pa,
                    background: this.pd
                })
            },
            a), 10);
            pc(a.k, "webkitTransitionEnd", p(function() {
                if (this.pa == 0) {
                    I(this.k, {
                        WebkitTransition: "none",
                        background: "#000"
                    });
                    H(this.k)
                } else this.pa = 0
            },
            a))
        } else {
            if (a.pa == 0) {
                I(a.k, {
                    opacity: a.pa,
                    background: "#000"
                });
                H(a.k)
            } else I(a.k, {
                opacity: a.pa,
                background: a.pd
            });
            a.pa = 0
        }
    }
    function Ue(a, b) {
        a = Math.floor(b / 3600);
        b %= 3600;
        var c = Math.floor(b / 60);
        b = Math.floor(b % 60);
        a = a > 0 ? (a < 10 ? "0" + a: a) + ":": "";
        c = c > 0 ? (c < 10 ? "0" + c: c) + ":": "00:";
        b = b > 0 ? b < 10 ? "0" + b: b: "00";
        return a + c + b
    }
    function ef(a, b) {
        if (v) {
            a = document.createElement("div");
            document.body.appendChild(a);
            a.outerHTML = '<p style="display:none">.</p><style>' + b + "</style>"
        } else {
            a = document.createElement("style");
            a.textContent = b;
            document.body.appendChild(a)
        }
    }
    function Ee(a) {
        if (!a.Sd) {
            a.Rd = "#sublime_videos{position:static!important;}#sublime_videos,#sublime_zoom{padding:0!important;margin:0!important;}.sublime_video_wrapper{display:block;position:relative;line-height:0;direction:ltr!important;-webkit-user-select:none;-moz-user-select:none;}.sublime_video_wrapper *{padding:0;margin:0;border:none!important;}.sublime_video_wrapper span.play_button{display:block;position:absolute;width:auto;height:auto;top:0;bottom:0;left:0;right:0;cursor:pointer;opacity:1;background-color:rgba(0,0,0,0.4);background-position:50%;background-repeat:no-repeat;-webkit-transition:.5s background-color;-moz-transition:.5s background-color;-o-transition:.5s background-color;}.sublime_video_wrapper span.play_button:hover{background-color:rgba(0,0,0,0)!important;}.sublime_video_wrapper span.play_button{width:100%\\9;height:100%\\9;line-height:0\\9;background:url(http://cdn.sublimevideo.net/p/ie/transparent_pixel.gif)\\9!important;cursor:pointer\\9;filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#4C000000,endColorstr=#4C000000)\\9;zoom:1\\9;}.sublime_video_wrapper span.play_button:hover{filter:none\\9;}.sublime_video_wrapper span.play_button span{display:block\\9;width:78px\\9;height:78px\\9;margin:-39px auto 0\\9;position:relative\\9;top:50%\\9;cursor:pointer\\9;}.sublime_video_wrapper .sv_error_messages{-webkit-user-select:auto;-moz-user-select:auto;user-select:auto;}.sublime_video_wrapper .sv_error_messages .sv_content td p a{color:#ccc!important;text-shadow:none!important;display:inline!important;padding:0!important;margin:0!important;}#sublime_zoom{position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;z-index:999998!important;}#sz_close_button{padding:0!important;margin:0!important;border:none!important;width:45px!important;height:45px!important;position:absolute!important;cursor:pointer!important;z-index:4!important;opacity:0!important;-webkit-transition:opacity .4s!important;-moz-transition:opacity .4s!important;-o-transition:opacity .4s!important;transition:opacity .4s!important;display:none\\9!important;}* html #sz_close_button{display:block!important;}#sz_content_wrapper:hover #sz_close_button{opacity:1!important;display:block\\9!important;}";
            a.Sd =
            true;
            ef(a, a.Rd)
        }
    }
    $.prototype.ye = function(a) {
        if (!this.sc) {
            H(this.Sb);
            this.sc = true;
            ef(this, a);
            this.e && setTimeout(p(function() {
                M(this.e, true)
            },
            this), 200);
            ne(this)
        }
    };
    function ue(a, b) {
        return b.webkitSupportsFullscreen ? true: false
    }
    function Oe(a, b) {
        a = document.createElement("input");
        a.setAttribute("type", b);
        return a.type !== "text"
    }
    function Ie(a, b) {
        return Aa(a.d,
        function(c) {
            return c.l() == b
        })
    }
    $.prototype.sd = function(a, b) {
        if (this.Db) ke(this, a);
        else if (this.Ta) parseInt(x, 10) <= 531 ? le(this, a) : ke(this, a);
        else this.cc ? me(this, a) : pe(this, a, b)
    };
    $.prototype.Ed = function(a) {
        if (this.Db) Ke(this, a);
        else if (this.Ta) Ke(this, a);
        else this.cc ? Je(this, a) : He(this, a)
    };
    $.prototype.Re = function(a) {
        this.sd(a, true);
        this.bc || this.play(a)
    };
    function ff(a, b) {
        if (b == undefined) {
            a.a && a.a.paused && a.jb();
            a.p && a.p.playVideo();
            a.oa && a.oa.play()
        } else if (typeof b == "number") {
            b = a.d[b];
            switch (b.wc) {
            case "plain":
                b.l().play();
                a.fireEvent(a.P.vb, b);
                break;
            case "wrapped":
            case "zoomable":
                a = F(undefined, "play_button", b.m)[0];
                b = new N("click");
                var c = b.type,
                d = P;
                if (c in d) {
                    d = d[c];
                    false in d && sc(d[false], a, c, false, b)
                }
                break
            }
        } else {
            b = Ie(a, ob(b));
            b >= 0 && a.play(b)
        }
    }
    h = $.prototype;
    h.play = function(a, b) {
        b == undefined && !this.bc ? setTimeout(p(function() {
            ff(this, a)
        },
        this), 0) : ff(this, a)
    };
    h.pause = function() {
        setTimeout(p(function() {
            if (this.a) this.a.paused || this.jb();
            this.p && this.p.pauseVideo();
            this.oa && this.oa.pause()
        },
        this), 0)
    };
    h.stop = function(a) {
        if (a != undefined) if (a != this.c) return;
        this.a && Ne(this);
        this.p && Me(this);
        this.oa && this.oa.pause()
    };
    h.$d = function() {
        console.log("2010-11-24 18:42:52 UTC");
        s(this.d, p(function(a) {
            a && console.log(a)
        },
        this))
    };
    h.Le = function(a) {
        this.Kb[this.xb.Bc] = a
    };
    h.Ba = function(a) {
        this.Kb[this.xb.Ac] = a
    };
    h.le = function(a) {
        this.fireEvent(a, this.d[this.c])
    };
    h.fireEvent = function(a, b) {
        if (b) {
            b = {
                internalId: b.ya,
                mode: b.gd,
                element: b.C
            };
            switch (a) {
            case this.P.vb:
                a = [b]; (b = this.Kb[this.xb.Bc]) && b.apply(i, a);
                break;
            case this.P.La:
                a = [b]; (b = this.Kb[this.xb.Ac]) && b.apply(i, a);
                break
            }
        }
    };
    function gf() {
        new $
    }
    k("jilion.sublime.video.init", gf, void 0);
})();
jilion.sublime.video.init();