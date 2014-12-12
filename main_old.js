!function(a) {
    function b() {
        l = 0,
            y = !1,//false
            k = "stay",
            m = t.length,//t $('.pages').find('page') t是page元素的集合
            n = a(window).width(),//页面的宽度
            o = a(window).height(),//页面的高度
            u = a("[data-animation]");//所有有动画效果的元素
        var b = a(".pages .page").index(a(".page-game"));//返回-1 说明没有该元素
        // console.log(b);
        for (var c = 0; m > c; c++) a(t[c]).attr("data-id", c + 1);//初始化，每个page都给一个ID
        s.addClass(v.direction).addClass(v.swipeAnim),
            t.css({
                width: n + "px"
            }),
            a(t[l]).addClass("current"),
            v.onchange(l, t[l], k),
            g()
    }

    function c(a) {
        return y === !0 ? (event.preventDefault(), !1) : void(j = 1, x = !0, t.addClass("drag"), h = "horizontal" === v.direction ? a.pageX : a.pageY)
    }

    function d(b) {
        return y === !0 || x === !1 ? (event.preventDefault(), !1) : (j = 2, event.preventDefault(), i = "horizontal" === v.direction ? b.pageX : b.pageY, 0 != l && l || !z || (window.stopDirec = 2), 1 == window.stopDirec && 0 > i - h ? void(j = 1) : 2 == window.stopDirec && i - h > 0 ? void(j = 1) : 3 == window.stopDirec ? void(j = 1) : (f(), w = i - h, 0 > w ? (p = a(0 === l ? t[m - 1] : t[l - 1]), r = a(l === m - 1 ? t[0] : t[l + 1])) : (p = a(0 === l ? t[m - 1] : t[l - 1]), r = a(l === m - 1 ? t[0] : t[l + 1])), q = a(t[l]), void(0 > w ? (r.addClass("mov"), r.css({
            "-webkit-transform": "translateY(" + (o + w) + "px)"
        }), q.css({
            "-webkit-transform": "translateY(" + w + "px)"
        })) : (p.addClass("mov"), p.css({
            "-webkit-transform": "translateY(" + (-o + w) + "px)"
        }), q.css({
            "-webkit-transform": "translateY(" + w + "px)"
        })))))
    }

    function e(b) {
        if (y === !0 || 2 !== j);
        else {
            j = 3,
                x = !1,
                t.removeClass("drag"),
                i = "horizontal" === v.direction ? b.pageX : b.pageY,
                w = i - h,
                Math.abs(w) <= 50 && w > 0 ? (k = "stay", q.css({
                    "-webkit-transform": "translateY(0)"
                }), p.css({
                    "-webkit-transform": "translateY(" + -o + "px)"
                })) : Math.abs(w) <= 50 && 0 > w ? (k = "stay", q.css({
                    "-webkit-transform": "translateY(0)"
                }), r.css({
                    "-webkit-transform": "translateY(" + o + "px)"
                })) : w >= 0 ? (k = "backward", 0 === l ? l = m - 1 : l -= 1, q.css({
                    "-webkit-transform": "translateY(" + o + "px)"
                }), p.css({
                    "-webkit-transform": "translateY(0)"
                })) : 0 > w && (k = "forward", l === m - 1 ? l = 0 : l += 1, q.css({
                    "-webkit-transform": "translateY(" + -o + "px)"
                }), r.css({
                    "-webkit-transform": "translateY(0)"
                })),
                l == m - 1 && (z = !1);
            var c = a(".pages .page").index(a(".page-game"));
            l != c || a(".game-success").hasClass("success-show") || (window.stopDirec = 1, a(".u-guideTop").hide()),
                y = !0,
                setTimeout(function() {
                        y = !1
                    },
                    300)
        }
    }

    function f() {
        "horizontal" === v.direction ? i >= h ? s.removeClass("forward").addClass("backward") : h > i && s.removeClass("backward").addClass("forward") : i >= h ? s.removeClass("forward").addClass("backward") : h > i && s.removeClass("backward").addClass("forward")
    }

    function g() {
        u.css({
                "-webkit-animation": "none",
                display: "none"
            }),
            a(".current [data-animation]").each(function(b, c) {
                var d = a(c),//取到这个元素
                    e = d.attr("data-animation"),//取到这个元素的动画的内容
                    f = d.attr("data-duration") || 500,//取到这个动画的持续时间
                    g = d.attr("data-timing-function") || "ease",//取到这个动画速度变化的类型
                    h = d.attr("data-delay") ? d.attr("data-delay") : 0;//取到这个动画的延迟
                "followSlide" === e && ("horizontal" !== v.direction || "forward" !== k && "stay" !== k ? "horizontal" === v.direction && "backward" === k ? e = "followSlideToRight" : "vertical" !== v.direction || "forward" !== k && "stay" !== k ? "vertical" === v.direction && "backward" === k && (e = "followSlideToBottom") : e = "followSlideToTop" : e = "followSlideToLeft"),
                    d.css({
                        display: "block",
                        "-webkit-animation-name": e,
                        "-webkit-animation-duration": f + "ms",
                        "-webkit-animation-timing-function": "ease",
                        "-webkit-animation-timing-function": g,
                        "-webkit-animation-delay": h + "ms",
                        "-webkit-animation-fill-mode": "both"
                    })
            })
    }
    var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w = 0,
        x = !1,
        y = !0,
        z = !0;
    a.fn.parallax = function(c) {
            return v = a.extend({},
                    a.fn.parallax.defaults, c),
                this.each(function() {
                    s = a(this),
                        t = s.find(".page"),
                        b()
                })
        },
        a.fn.parallax.defaults = {
            direction: "vertical",
            swipeAnim: "default",
            drag: !0,
            loading: !1,
            indicator: !1,
            arrow: !1,
            onchange: function() {},
            orientationchange: function() {}
        },
        a(document).on("touchstart", ".page",
            function(a) {
                // console.log(a.changedTouches[0])
                c(a.changedTouches[0])
            }).on("touchmove", ".page",
            function(a) {
                // console.log(a.changedTouches[0])
                d(a.changedTouches[0])
            }).on("touchend", ".page",
            function(a) {
                // console.log(a.changedTouches[0])
                e(a.changedTouches[0])
            }).on("webkitAnimationEnd webkitTransitionEnd", ".pages",
            function() {
                "stay" !== k && (setTimeout(function() {
                        t.removeClass("mov")
                    },
                    10), a(t.removeClass("current").get(l)).addClass("current"), v.onchange(l, t[l], k), g())
            }),
        a(".page *").on("webkitAnimationEnd",
            function() {
                event.stopPropagation()
            }),
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize",
            function() {
                (180 === window.orientation || 0 === window.orientation) && v.orientationchange("portrait"), (90 === window.orientation || -90 === window.orientation) && v.orientationchange("landscape")
            }, !1),
        window.slideTo = function(b) {
            a(window).height();
            l = b,
                k = "forward",
                a(t.get(l)).css("-webkit-transform:translateY(0)"),
                a(t.removeClass("current").get(l)).addClass("current"),
                g(),
                setTimeout(function() {
                        a(".pages").css({
                            "-webkit-transition-duration": "400ms",
                            "transition-duration": "400ms"
                        })
                    },
                    300)
        },
        window.moveTo = function(b) {
            l = b;
            var c = a(window).height();
            a(".pages").css({
                "-webkit-transform": "matrix(1, 0, 0, 1, 0, -" + c * b + ")"
            })
        }
}(Zepto), (window.jQuery || window.Zepto) && !
function(a) {
    a.fn.Swipe = function(b) {
        return this.each(function() {
            a(this).data("Swipe", new Swipe(a(this)[0], b))
        })
    }
}(window.jQuery || window.Zepto), !
function(a) {
    window.page = function() {
        function b(a, b) {
            e = a.pageY,
                j = b.height() + 50,
                g = b.css("-webkit-transform").replace("matrix(", "").replace(")", "").split(","),
                g = parseInt(g[5]) || 0
        }

        function c(a, b) {
            j = b.height() + 50,
                h = i.css("-webkit-transform").replace("matrix(", "").replace(")", "").split(","),
                h = Math.abs(parseInt(h[5]) || 0),
                d = a.pageY,
                j > k && e > d ? (f = g + d - e, Math.abs(f) <= j - k && (event.preventDefault(), event.stopPropagation(), b.css("-webkit-transform", "matrix(1, 0, 0, 1, 0, " + f + ")"))) : 0 > f && d >= e && (event.preventDefault(), event.stopPropagation(), f = g + d - e, b.css("-webkit-transform", "matrix(1, 0, 0, 1, 0, " + f + ")"))
        }
        a(".pages").parallax({
                direction: "vertical",
                swipeAnim: "default",
                drag: !0,
                loading: !1,
                indicator: !1,
                arrow: !1,
                onchange: function(b) {
                    (2 !== b || 3 !== b || 8 !== b) && a(".content").css("-webkit-transform", "none");
                    var c = a(".pages .page").index(a(".page-game"));
                    b != c || a(".game-success").hasClass("success-show") ? (window.stopDirec = 0, a(".u-guideTop").show()) : (window.stopDirec = 1, a(".u-guideTop").hide()),
                        1 == a(".pages .page").size() && (window.stopDirec = 3)
                },
                orientationchange: function() {}
            }),
            window.sliderTo = function() {
                var b = a(window).height();
                a(".pages").css({
                        "-webkit-transition-duration": "0ms",
                        "transition-duration": "0ms"
                    }),
                    a(".pages").css({
                        "-webkit-transform": "matrix(1, 0, 0, 1, 0, -" + b * timeIndex + ")"
                    }),
                    setTimeout(function() {
                            a(".pages").css({
                                "-webkit-transition-duration": "400ms",
                                "transition-duration": "400ms"
                            })
                        },
                        300)
            },
            window.moveTo = function() {
                var b = a(window).height();
                a(".pages").css({
                    "-webkit-transform": "matrix(1, 0, 0, 1, 0, -" + b * timeIndex + ")"
                })
            };
        var d, e, f, g, h, i = a(".pages"),
            j = 0,
            k = a(window).height();
        a(".page-timeline").on("touchstart",
                function() {
                    b(event.changedTouches[0], a(this).find(a(".content")))
                }).on("touchmove",
                function() {
                    c(event.changedTouches[0], a(this).find(a(".content")))
                }),
            a(".page-flow").on("touchstart",
                function() {
                    b(event.changedTouches[0], a(this).find(a(".content")))
                }).on("touchmove",
                function() {
                    c(event.changedTouches[0], a(this).find(a(".content")))
                }),
            a(".page-history").on("touchstart",
                function() {
                    b(event.changedTouches[0], a(this).find(a(".content")))
                }).on("touchmove",
                function() {
                    c(event.changedTouches[0], a(this).find(a(".content")))
                });
    }
}(Zepto);
