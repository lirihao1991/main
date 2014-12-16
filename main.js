!function(a) {
    function b() {
        
        l = 0,
            y = !1,//false
            k = "stay",
            m = t.length,//t=$('.pages').find('page') t是page元素的集合 页面上有多少个page m是page的个数
            n = a(window).width(),//页面的宽度
            o = a(window).height(),//页面的高度
            u = a("[data-animation]");//所有有动画效果的元素
        var b = a(".pages .page").index(a(".page-end"));//返回-1 说明没有该元素
        dis = o*0.25;
        // console.log(b);
        for (var c = 0; m > c; c++) a(t[c]).attr("data-id", c + 1);//初始化，每个page都给一个ID
        s.addClass(v.direction).addClass(v.swipeAnim),
            t.css({
                width: n + "px" //
            }),//让所有page的宽度等于页面的宽度
            a(t[l]).addClass("current"),//给当前页面加上current
            v.onchange(l, t[l], k),// onchange函数只接受一个参数，但是却传送进去三个参数，第一个参数是页码，从0开始,t是page的集合,t[l]是当前页的dom元素
            g()// g函数的功能是把页面中所有有动画效果的dom元素都去掉动画效果，然后给当前页增加动画效果
    }

    function c(a) {
        return y === !0 ? (event.preventDefault(), !1) : void(j = 1, x = !0, t.addClass("drag"), h = "horizontal" === v.direction ? a.pageX : a.pageY)
        // h 是 按下是位置
        /*if(y === !0) {
            event.preventDefault(),!1 // ???
        }else {
            j = 1;
            x = !0;
            t.addClass("drap");
            if(v.direction === "horizontal") {
                h = a.pageX;
            }else {
                h = a.pageY;
            }
        }*/
    }// TouchStart 触发 //神了 recode 的 代码 在页面里比较卡，原来的代码执行非常流畅

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
    }// onTouchMove

    function e(b) {
        if (y === !0 || 2 !== j);
        else {
            j = 3,
                x = !1,
                t.removeClass("drag"),// t 是当前有页面 去掉 .drap 类
                i = "horizontal" === v.direction ? b.pageX : b.pageY,// i = 结束时触点的位置
                w = i - h,// h 触点按下的位置 w = 滑动的距离
                // k 应该是状态值 表示当前是否切换页面
                Math.abs(w) <= dis && w > 0 ? (k = "stay", q.css({
                    "-webkit-transform": "translateY(0)"
                }), p.css({
                    "-webkit-transform": "translateY(" + -o + "px)"
                })) : Math.abs(w) <= dis && 0 > w ? (k = "stay", q.css({
                    "-webkit-transform": "translateY(0)"
                }), r.css({
                    "-webkit-transform": "translateY(" + o + "px)"
                })) : w >= 0 ? (k = "backward",reback(), 0 === l ? l = m - 1 : l -= 1, q.css({
                    "-webkit-transform": "translateY(" + o + "px)"
                }), p.css({
                    "-webkit-transform": "translateY(0)"
                })) : 0 > w && (k = "forward", reback(),l === m - 1 ? l = 0 : l += 1, q.css({
                    "-webkit-transform": "translateY(" + -o + "px)"
                }), r.css({
                    "-webkit-transform": "translateY(0)"
                })),// m 是 page的数量
                l == m - 1 && (z = !1);
            var c = a(".pages .page").index(a(".page-end"));// 获取最后一页的数值
            l != c || (window.stopDirec = 1, a(".u-guideTop").hide()),// 如果是最后一页，window.stopDirec = 1 并且隐藏下面的小箭头
                y = !0,// y = true
                setTimeout(function() {
                        y = !1
                    },
                    1000)// 大约0.3秒之后，y = false
        }
    }

    function f() {
        "horizontal" === v.direction ? i >= h ? s.removeClass("forward").addClass("backward") : h > i && s.removeClass("backward").addClass("forward") : i >= h ? s.removeClass("forward").addClass("backward") : h > i && s.removeClass("backward").addClass("forward")
    }

    function g() {
        u.css({
                "-webkit-animation": "none",
                display: "none"
            }),//所有有动画效果的元素，动画效果去掉，并不显示 u = a("[data-animation]")
            a(".current [data-animation]").each(function(b, c) {//每个当前页面中的有动画效果的元素
                var d = a(c),//取到这个元素
                    e = d.attr("data-animation"),//取到这个元素的动画的名字  从行内取到
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
                    })//给当前这个元素加上动画
            })//给current页面中的所有元素加上动画 动画设置取自行内
;a(t.get(3)).find('.content').css({
                    '-webkit-transform':' matrix(1, 0, 0, 1, 0, 0)'
                });
    }
    var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w = 0,
        x = !1,
        y = !0,
        z = !0;
    a.fn.parallax = function(c) {
            return v = a.extend({},
                    a.fn.parallax.defaults, c),
                this.each(function() {
                    s = a(this),// this 是 pages
                        t = s.find(".page"), // t 是 page 的 集合
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
                if (a.changedTouches[0].target.className!='moveArea_c'&&
                    a.changedTouches[0].target.className!='appArea_c'&&
                    a.changedTouches[0].target.className!='app'&&
                    a.changedTouches[0].target.className!='appouter'&&
                    a.changedTouches[0].target.className!='app ready'&&
                    a.changedTouches[0].target.className!='app_image') {
                    c(a.changedTouches[0])//起始
                }
            }).on("touchmove", ".page",
            function(a) {
                // console.log(a.changedTouches[0])
                if (a.changedTouches[0].target.className!='moveArea_c'&&
                    a.changedTouches[0].target.className!='appArea_c'&&
                    a.changedTouches[0].target.className!='app'&&
                    a.changedTouches[0].target.className!='appouter'&&
                    a.changedTouches[0].target.className!='app ready'&&
                    a.changedTouches[0].target.className!='app_image') {
                    d(a.changedTouches[0])
                }
            }).on("touchend", ".page",
            function(a) {
                // console.log(a.changedTouches[0])
                if (a.changedTouches[0].target.className!='moveArea_c'&&
                    a.changedTouches[0].target.className!='appArea_c'&&
                    a.changedTouches[0].target.className!='app'&&
                    a.changedTouches[0].target.className!='appouter'&&
                    a.changedTouches[0].target.className!='app ready'&&
                    a.changedTouches[0].target.className!='app_image') {
                    e(a.changedTouches[0])
                }
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
            l = b,
                k = "backward",
                a(t.get(l)).css({
                    "-webkit-transform":"translateY(0)"
                }),
                a(t.removeClass("current").get(l)).addClass("current"),
                a(t.get(3)).find('.content').css({
                    '-webkit-transform':' matrix(1, 0, 0, 1, 0, 0)'
                }),
                g(),
                window.stopDirec = 0, a(".u-guideTop").show(),
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
}(Zepto),!
function(a) {
    window.page = function() {
        function b(a, b) {
            e = a.pageY,//e 是 按下是 在 屏幕上的位置
                j = b.height() + 150,
                g =b.css("-webkit-transform")?(b.css("-webkit-transform").replace("matrix(", "").replace(")", "").split(",")):[0,0,0,0,0,0],
                g = parseInt(g[5]) || 0
        }//初始化

        function c(a, b) {
            j = b.height() + 150,//b 是 当前 页面里 的 .content,j = 这个页面高度 + 50
                h = i.css("-webkit-transform").replace("matrix(", "").replace(")", "").split(","),//null
                h = Math.abs(parseInt(h[5]) || 0),// 0
                d = a.pageY,//d 是 滑动结束的位置
                j > k && e > d ? (f = g + d - e, Math.abs(f) <= j - k && (event.preventDefault(), event.stopPropagation(), b.css("-webkit-transform", "matrix(1, 0, 0, 1, 0, " + f + ")"))) : 0 > f && d >= e && (event.preventDefault(), event.stopPropagation(), f = g + d - e, b.css("-webkit-transform", "matrix(1, 0, 0, 1, 0, " + f + ")"))
        }//让页面是向上还是向下滑动
        a(".pages").parallax({
                direction: "vertical",
                swipeAnim: "default",
                drag: !0,
                loading: !1,
                indicator: !1,
                arrow: !1,
                onchange: function(b) { // 这里的b应该是当前页的意思，在其他地方传进来的参数l
                   // (2 !== b || 3 !== b || 8 !== b) && a(".content").css("-webkit-transform", "none");//如果当前是2、3、8中的任何一个,就把页面中的所有的.content动画都去掉
                    var c = a(".pages .page").index(a(".page-end"));//获得最后一页的数值
                    b != c ? (window.stopDirec = 0, a(".u-guideTop").show()) : (window.stopDirec = 1, a(".u-guideTop").hide()),//如果不是最后一页，那么window.stopDirece = 0 并且 下面的小箭头显示，如果是最后一页，那么window.stopDirec = 1,下面小箭头不显示
                        1 == a(".pages .page").size() && (window.stopDirec = 3);// 如果只有一页，window.stopDirec = 3
                },
                orientationchange: function() {}
            });
        var d, e, f, g, h, i = a(".pages"),
            j = 0,
            k = a(window).height();
            a(".page-flow").on("touchstart",
                function() {
                    b(event.changedTouches[0], a(this).find(a(".content")))
                }).on("touchmove",
                function() {
                    c(event.changedTouches[0], a(this).find(a(".content")))
                });
    }
}(Zepto);
(function($){
    var shaLay,
        height = $(window).height(),
        width = $(window).width(),
        sign = 0;

    function wit(e){
        var tar = e.target.localName;
        if(tar === 'div') return null;
        if(tar === 'img') {
            return $(e.target).parent().parent()
        } else {
            return $(e.target).parent()
        }
    }
    var shalay = $('.shalay');
    function shadow(){
        shalay[0].style.display = 'block';
    }

    function card(b) {
        var b = $(b[0]).attr('class').substr(7);
        var img = $('.page-5-img');
        var nowImg = img.eq(b-1);
        nowImg.attr('src',nowImg.data('src')).css({
            'position':'absolute',
            'width':width*0.9,
            'top':'50%',
            'left':'50%',
            'margin-top':-width*0.9/2,
            'margin-left':-width*0.9/2,
            'z-index':999,
            'display':'block'
        })
    }
    touch.on('.page-5 .bottom div','tap',function(e){
        if(sign == 1) return;
        var w = wit(e);
        if(!w) return;
        shadow();
        card(w);
        sign = 1;
    }),
    touch.on('.page-5-img','tap',function(){
        $(this).css({
             'display':'none'
        });
        shalay[0].style.display = 'none';
        sign = 0;
    })
    touch.on('.shalay','tap',function(){
       $('.shalay').css({
           'display':'none'
       }),
       $('.page-5-img').css({
           'display':'none'
       });
       sign = 0; 
    })
})(Zepto)
