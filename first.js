// Copyright (c) 2010 Jilion.com / Jime SA
(function() {
    var g = this;
    function j(a, d, b) {
        a = a.split(".");
        b = b || g; ! (a[0] in b) && b.execScript && b.execScript("var " + a[0]);
        for (var e; a.length && (e = a.shift());) if (!a.length && d !== undefined) b[e] = d;
        else b = b[e] ? b[e] : (b[e] = {})
    };
    var k = {};
    (function() {
        function a() {
            if (!h) {
                h = true;
                if (i) {
                    for (var c, f = 0; c = i[f++];) c.call(window, []);
                    i = []
                }
            }
        }
        function d(c) {
            var f = window.onload;
            window.onload = typeof window.onload != "function" ? c: function() {
                f && f();
                c()
            }
        }
        function b() {
            if (!e) {
                e = true;
                document.addEventListener && document.addEventListener("DOMContentLoaded", a, false);
                m.a && window == top &&
                function() {
                    if (!h) {
                        try {
                            document.documentElement.doScroll("left")
                        } catch(c) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        a()
                    }
                } ();
                d(a)
            }
        }
        var e = false,
        h = false,
        i = [],
        m = function() {
            var c = navigator.userAgent,
            f = Object.prototype.toString.call(window.opera) == "[object Opera]";
            return {
                a: !!window.attachEvent && !f,
                b: f,
                c: c.indexOf("AppleWebKit/") > -1
            }
        } ();
        k = function(c) {
            b();
            h ? c.call(window, []) : i.push(c)
        };
        b()
    })();
    if (!document.createElement("video").canPlayType) {
        document.createElement("video");
        document.createElement("source")
    }
    k(function() {
        document.getElementsByTagName("video").length > 0 && l()
    });
    function l() {
        var a = document.getElementsByTagName("head")[0],
        d = document.createElement("script");
        d.type = "text/javascript";
        d.src = "second.js";
        a.appendChild(d)
    }
    j("jilion.sublime.video.load", l, void 0);
    function n() {
        return {
            mode: "stable"
        }
    }
    j("jilion.sublime.video.params", n, void 0);
    function o(a) {
        j("jilion.sublime.video.readyFunction", a, void 0)
    }
    j("sublimevideo.ready", o, void 0);
})();