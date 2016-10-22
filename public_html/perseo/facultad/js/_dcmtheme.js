var debug = false, noti_slide_num = 5, allPortletsReady = false;

//#region nivo slider
//<editor-fold defaultstate="collapsed" desc="nivo slider">
/*
 * jQuery Nivo Slider v3.2
 * http://nivo.dev7studios.com
 *
 * Copyright 2012, Dev7studios
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

(function (e) {
    var t = function (t, n) {
        var r = e.extend({}, e.fn.nivoSlider.defaults, n);
        var i = { currentSlide: 0, currentImage: "", totalSlides: 0, running: false, paused: false, stop: false, controlNavEl: false };
        var s = e(t);
        s.data("nivo:vars", i).addClass("nivoSlider");
        var o = s.children();
        o.each(function () {
            var t = e(this);
            var n = "";
            if (!t.is("img")) {
                if (t.is("a")) {
                    t.addClass("nivo-imageLink");
                    n = t
                }
                t = t.find("img:first")
            }
            var r = r === 0 ? t.attr("width") : t.width(), s = s === 0 ? t.attr("height") : t.height();
            if (n !== "") {
                n.css("display", "none")
            }
            t.css("display", "none");
            i.totalSlides++
        });
        if (r.randomStart) {
            r.startSlide = Math.floor(Math.random() * i.totalSlides)
        }
        if (r.startSlide > 0) {
            if (r.startSlide >= i.totalSlides) {
                r.startSlide = i.totalSlides - 1
            }
            i.currentSlide = r.startSlide
        }
        if (e(o[i.currentSlide]).is("img")) {
            i.currentImage = e(o[i.currentSlide])
        } else {
            i.currentImage = e(o[i.currentSlide]).find("img:first")
        }
        if (e(o[i.currentSlide]).is("a")) {
            e(o[i.currentSlide]).css("display", "block")
        }
        var u = e("<img/>").addClass("nivo-main-image");
        u.attr("src", i.currentImage.attr("src")).show();
        s.append(u);
        e(window).resize(function () {
            s.children("img").width(s.width());
            u.attr("src", i.currentImage.attr("src"));
            u.stop().height("auto");
            e(".nivo-slice").remove();
            e(".nivo-box").remove()
        });
        s.append(e('<div class="nivo-caption"></div>'));
        var a = function (t) {
            var n = e(".nivo-caption", s);
            if (i.currentImage.attr("title") != "" && i.currentImage.attr("title") != undefined) {
                var r = i.currentImage.attr("title");
                if (r.substr(0, 1) == "#")
                    r = e(r).html();
                if (n.css("display") == "block") {
                    setTimeout(function () {
                        n.html(r)
                    }, t.animSpeed)
                } else {
                    n.html(r);
                    n.stop().fadeIn(t.animSpeed)
                }
            } else {
                n.stop().fadeOut(t.animSpeed)
            }
        };
        a(r);
        var f = 0;
        if (!r.manualAdvance && o.length > 1) {
            f = setInterval(function () {
                d(s, o, r, false)
            }, r.pauseTime)
        }
        if (r.directionNav) {
            s.append('<div class="nivo-directionNav"><a class="nivo-prevNav">' + r.prevText + '</a><a class="nivo-nextNav">' + r.nextText + "</a></div>");
            e(s).on("click", "a.nivo-prevNav", function () {
                if (i.running) {
                    return false
                }
                clearInterval(f);
                f = "";
                i.currentSlide -= 2;
                d(s, o, r, "prev")
            });
            e(s).on("click", "a.nivo-nextNav", function () {
                if (i.running) {
                    return false
                }
                clearInterval(f);
                f = "";
                d(s, o, r, "next")
            })
        }
        if (r.controlNav) {
            i.controlNavEl = e('<div class="nivo-controlNav"></div>');
            s.after(i.controlNavEl);
            for (var l = 0; l < o.length; l++) {
                if (r.controlNavThumbs) {
                    i.controlNavEl.addClass("nivo-thumbs-enabled");
                    var c = o.eq(l);
                    if (!c.is("img")) {
                        c = c.find("img:first")
                    }
                    if (c.attr("data-thumb"))
                        i.controlNavEl.append('<a class="nivo-control" rel="' + l + '"><img src="' + c.attr("data-thumb") + '" alt="" /></a>')
                } else {
                    i.controlNavEl.append('<a class="nivo-control" rel="' + l + '">' + (l + 1) + "</a>")
                }
            }
            e("a:eq(" + i.currentSlide + ")", i.controlNavEl).addClass("active");
            e("a", i.controlNavEl).bind("click", function () {
                if (i.running)
                    return false;
                if (e(this).hasClass("active"))
                    return false;
                clearInterval(f);
                f = "";
                u.attr("src", i.currentImage.attr("src"));
                i.currentSlide = e(this).attr("rel") - 1;
                d(s, o, r, "control")
            })
        }
        if (r.pauseOnHover) {
            s.hover(function () {
                i.paused = true;
                clearInterval(f);
                f = ""
            }, function () {
                i.paused = false;
                if (f === "" && !r.manualAdvance) {
                    f = setInterval(function () {
                        d(s, o, r, false)
                    }, r.pauseTime)
                }
            })
        }
        s.bind("nivo:animFinished", function () {
            u.attr("src", i.currentImage.attr("src"));
            i.running = false;
            e(o).each(function () {
                if (e(this).is("a")) {
                    e(this).css("display", "none")
                }
            });
            if (e(o[i.currentSlide]).is("a")) {
                e(o[i.currentSlide]).css("display", "block")
            }
            if (f === "" && !i.paused && !r.manualAdvance) {
                f = setInterval(function () {
                    d(s, o, r, false)
                }, r.pauseTime)
            }
            r.afterChange.call(this)
        });
        var h = function (t, n, r) {
            if (e(r.currentImage).parent().is("a"))
                e(r.currentImage).parent().css("display", "block");
            e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
            var i = e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().is("a") ? e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").parent().height() : e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height();
            for (var s = 0; s < n.slices; s++) {
                var o = Math.round(t.width() / n.slices);
                if (s === n.slices - 1) {
                    t.append(e('<div class="nivo-slice" name="' + s + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (o + s * o - o) + 'px;" /></div>').css({ left: o * s + "px", width: t.width() - o * s + "px", height: i + "px", opacity: "0", overflow: "hidden" }))
                } else {
                    t.append(e('<div class="nivo-slice" name="' + s + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block !important; top:0; left:-" + (o + s * o - o) + 'px;" /></div>').css({ left: o * s + "px", width: o + "px", height: i + "px", opacity: "0", overflow: "hidden" }))
                }
            }
            e(".nivo-slice", t).height(i);
            u.stop().animate({ height: e(r.currentImage).height() }, n.animSpeed)
        };
        var p = function (t, n, r) {
            if (e(r.currentImage).parent().is("a"))
                e(r.currentImage).parent().css("display", "block");
            e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").width(t.width()).css("visibility", "hidden").show();
            var i = Math.round(t.width() / n.boxCols), s = Math.round(e('img[src="' + r.currentImage.attr("src") + '"]', t).not(".nivo-main-image,.nivo-control img").height() / n.boxRows);
            for (var o = 0; o < n.boxRows; o++) {
                for (var a = 0; a < n.boxCols; a++) {
                    if (a === n.boxCols - 1) {
                        t.append(e('<div class="nivo-box" name="' + a + '" rel="' + o + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + s * o + "px; left:-" + i * a + 'px;" /></div>').css({ opacity: 0, left: i * a + "px", top: s * o + "px", width: t.width() - i * a + "px" }));
                        e('.nivo-box[name="' + a + '"]', t).height(e('.nivo-box[name="' + a + '"] img', t).height() + "px")
                    } else {
                        t.append(e('<div class="nivo-box" name="' + a + '" rel="' + o + '"><img src="' + r.currentImage.attr("src") + '" style="position:absolute; width:' + t.width() + "px; height:auto; display:block; top:-" + s * o + "px; left:-" + i * a + 'px;" /></div>').css({ opacity: 0, left: i * a + "px", top: s * o + "px", width: i + "px" }));
                        e('.nivo-box[name="' + a + '"]', t).height(e('.nivo-box[name="' + a + '"] img', t).height() + "px")
                    }
                }
            }
            u.stop().animate({ height: e(r.currentImage).height() }, n.animSpeed)
        };
        var d = function (t, n, r, i) {
            var s = t.data("nivo:vars");
            if (s && s.currentSlide === s.totalSlides - 1) {
                r.lastSlide.call(this)
            }
            if ((!s || s.stop) && !i) {
                return false
            }
            r.beforeChange.call(this);
            if (!i) {
                u.attr("src", s.currentImage.attr("src"))
            } else {
                if (i === "prev") {
                    u.attr("src", s.currentImage.attr("src"))
                }
                if (i === "next") {
                    u.attr("src", s.currentImage.attr("src"))
                }
            }
            s.currentSlide++;
            if (s.currentSlide === s.totalSlides) {
                s.currentSlide = 0;
                r.slideshowEnd.call(this)
            }
            if (s.currentSlide < 0) {
                s.currentSlide = s.totalSlides - 1
            }
            if (e(n[s.currentSlide]).is("img")) {
                s.currentImage = e(n[s.currentSlide])
            } else {
                s.currentImage = e(n[s.currentSlide]).find("img:first")
            }
            if (r.controlNav) {
                e("a", s.controlNavEl).removeClass("active");
                e("a:eq(" + s.currentSlide + ")", s.controlNavEl).addClass("active")
            }
            a(r);
            e(".nivo-slice", t).remove();
            e(".nivo-box", t).remove();
            var o = r.effect, f = "";
            if (r.effect === "random") {
                f = new Array("sliceDownRight", "sliceDownLeft", "sliceUpRight", "sliceUpLeft", "sliceUpDown", "sliceUpDownLeft", "fold", "fade", "boxRandom", "boxRain", "boxRainReverse", "boxRainGrow", "boxRainGrowReverse");
                o = f[Math.floor(Math.random() * (f.length + 1))];
                if (o === undefined) {
                    o = "fade"
                }
            }
            if (r.effect.indexOf(",") !== -1) {
                f = r.effect.split(",");
                o = f[Math.floor(Math.random() * f.length)];
                if (o === undefined) {
                    o = "fade"
                }
            }
            if (s.currentImage.attr("data-transition")) {
                o = s.currentImage.attr("data-transition")
            }
            s.running = true;
            var l = 0, c = 0, d = "", m = "", g = "", y = "";
            if (o === "sliceDown" || o === "sliceDownRight" || o === "sliceDownLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceDownLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function () {
                    var n = e(this);
                    n.css({ top: "0px" });
                    if (c === r.slices - 1) {
                        setTimeout(function () {
                            n.animate({ opacity: "1.0" }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({ opacity: "1.0" }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "sliceUp" || o === "sliceUpRight" || o === "sliceUpLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceUpLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function () {
                    var n = e(this);
                    n.css({ bottom: "0px" });
                    if (c === r.slices - 1) {
                        setTimeout(function () {
                            n.animate({ opacity: "1.0" }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({ opacity: "1.0" }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "sliceUpDown" || o === "sliceUpDownRight" || o === "sliceUpDownLeft") {
                h(t, r, s);
                l = 0;
                c = 0;
                var b = 0;
                d = e(".nivo-slice", t);
                if (o === "sliceUpDownLeft") {
                    d = e(".nivo-slice", t)._reverse()
                }
                d.each(function () {
                    var n = e(this);
                    if (c === 0) {
                        n.css("top", "0px");
                        c++
                    } else {
                        n.css("bottom", "0px");
                        c = 0
                    }
                    if (b === r.slices - 1) {
                        setTimeout(function () {
                            n.animate({ opacity: "1.0" }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({ opacity: "1.0" }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    b++
                })
            } else if (o === "fold") {
                h(t, r, s);
                l = 0;
                c = 0;
                e(".nivo-slice", t).each(function () {
                    var n = e(this);
                    var i = n.width();
                    n.css({ top: "0px", width: "0px" });
                    if (c === r.slices - 1) {
                        setTimeout(function () {
                            n.animate({ width: i, opacity: "1.0" }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({ width: i, opacity: "1.0" }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 50;
                    c++
                })
            } else if (o === "fade") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({ width: t.width() + "px" });
                m.animate({ opacity: "1.0" }, r.animSpeed * 2, "", function () {
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "slideInRight") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({ width: "0px", opacity: "1" });
                m.animate({ width: t.width() + "px" }, r.animSpeed * 2, "", function () {
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "slideInLeft") {
                h(t, r, s);
                m = e(".nivo-slice:first", t);
                m.css({ width: "0px", opacity: "1", left: "", right: "0px" });
                m.animate({ width: t.width() + "px" }, r.animSpeed * 2, "", function () {
                    m.css({ left: "0px", right: "" });
                    t.trigger("nivo:animFinished")
                })
            } else if (o === "boxRandom") {
                p(t, r, s);
                g = r.boxCols * r.boxRows;
                c = 0;
                l = 0;
                y = v(e(".nivo-box", t));
                y.each(function () {
                    var n = e(this);
                    if (c === g - 1) {
                        setTimeout(function () {
                            n.animate({ opacity: "1" }, r.animSpeed, "", function () {
                                t.trigger("nivo:animFinished")
                            })
                        }, 100 + l)
                    } else {
                        setTimeout(function () {
                            n.animate({ opacity: "1" }, r.animSpeed)
                        }, 100 + l)
                    }
                    l += 20;
                    c++
                })
            } else if (o === "boxRain" || o === "boxRainReverse" || o === "boxRainGrow" || o === "boxRainGrowReverse") {
                p(t, r, s);
                g = r.boxCols * r.boxRows;
                c = 0;
                l = 0;
                var w = 0;
                var E = 0;
                var S = [];
                S[w] = [];
                y = e(".nivo-box", t);
                if (o === "boxRainReverse" || o === "boxRainGrowReverse") {
                    y = e(".nivo-box", t)._reverse()
                }
                y.each(function () {
                    S[w][E] = e(this);
                    E++;
                    if (E === r.boxCols) {
                        w++;
                        E = 0;
                        S[w] = []
                    }
                });
                for (var x = 0; x < r.boxCols * 2; x++) {
                    var T = x;
                    for (var N = 0; N < r.boxRows; N++) {
                        if (T >= 0 && T < r.boxCols) {
                            (function (n, i, s, u, a) {
                                var f = e(S[n][i]);
                                var l = f.width();
                                var c = f.height();
                                if (o === "boxRainGrow" || o === "boxRainGrowReverse") {
                                    f.width(0).height(0)
                                }
                                if (u === a - 1) {
                                    setTimeout(function () {
                                        f.animate({ opacity: "1", width: l, height: c }, r.animSpeed / 1.3, "", function () {
                                            t.trigger("nivo:animFinished")
                                        })
                                    }, 100 + s)
                                } else {
                                    setTimeout(function () {
                                        f.animate({ opacity: "1", width: l, height: c }, r.animSpeed / 1.3)
                                    }, 100 + s)
                                }
                            })(N, T, l, c, g);
                            c++
                        }
                        T--
                    }
                    l += 100
                }
            }
        };
        var v = function (e) {
            for (var t, n, r = e.length; r; t = parseInt(Math.random() * r, 10), n = e[--r], e[r] = e[t], e[t] = n)
                ;
            return e
        };
        var m = function (e) {
            if (this.console && typeof console.log !== "undefined") {
                console.log(e)
            }
        };
        this.stop = function () {
            if (!e(t).data("nivo:vars").stop) {
                e(t).data("nivo:vars").stop = true;
                m("Stop Slider")
            }
        };
        this.start = function () {
            if (e(t).data("nivo:vars").stop) {
                e(t).data("nivo:vars").stop = false;
                m("Start Slider")
            }
        };
        r.afterLoad.call(this);
        return this
    };
    e.fn.nivoSlider = function (n) {
        return this.each(function (r, i) {
            var s = e(this);
            if (s.data("nivoslider")) {
                return s.data("nivoslider")
            }
            var o = new t(this, n);
            s.data("nivoslider", o)
        })
    };
    e.fn.nivoSlider.defaults = {
        effect: "random", slices: 15, boxCols: 8, boxRows: 4, animSpeed: 500, pauseTime: 3e3, startSlide: 0, directionNav: true, controlNav: true, controlNavThumbs: false, pauseOnHover: true, manualAdvance: false, prevText: "Prev", nextText: "Next", randomStart: false, beforeChange: function () {
        }, afterChange: function () {
        }, slideshowEnd: function () {
        }, lastSlide: function () {
        }, afterLoad: function () {
        }
    };
    e.fn._reverse = [].reverse
})(jQuery);
//</editor-fold>
//#endregion 

//#region vacordion
//<editor-fold defaultstate="collapsed" desc="vacordion">
(function ($) {

    // cache some values
    var cache = {
        idx_expanded: -1, // the index of the current expanded slice
        sliceH: 0, // the default slice's height	
        current: 0, // controls the current slider position
        totalSlices: 0	  // total number of slices
    },
    aux = {
        // triggered when we click a slice. If the slice is expanded,
        // we close it, otherwise we open it..
        selectSlice: function ($el, $slices, $navNext, $navPrev, settings) {

            return $.Deferred(
                    function (dfd) {

                        var expanded = $el.data('expanded'),
                                pos = $el.data('position'),
                                itemHeight, othersHeight,
                                $others = $slices.not($el);
                        // if it's opened..	
                        if (expanded) {
                            $el.data('expanded', false);
                            cache.idx_expanded = -1;
                            // the default values of each slices's height
                            itemHeight = cache.sliceH;
                            othersHeight = cache.sliceH;
                            // hide the content div
                            $el.find('.va-content').hide();
                            // control the navigation buttons visibility
                            if (aux.canSlideUp($slices, settings))
                                $navPrev.fadeIn();
                            else
                                $navPrev.fadeOut();
                            if (aux.canSlideDown($slices, settings))
                                $navNext.fadeIn();
                            else
                                $navNext.fadeOut();
                        }
                            // if it's closed..
                        else {
                            $el.data('expanded', true);
                            cache.idx_expanded = $el.index();
                            $others.data('expanded', false);
                            // the current slice's height
                            itemHeight = settings.expandedHeight;
                            // the height the other slices will have
                            othersHeight = Math.ceil((settings.accordionH - settings.expandedHeight) / (settings.visibleSlices - 1));
                            // control the navigation buttons visibility
                            if (cache.idx_expanded > 0)
                                $navPrev.fadeIn();
                            else
                                $navPrev.fadeOut();
                            if (cache.idx_expanded < cache.totalSlices - 1)
                                $navNext.fadeIn();
                            else
                                $navNext.fadeOut();
                        }

                        // the animation parameters for the clicked slice
                        var animParam = {
                            height: itemHeight + 'px',
                            opacity: 1,
                            top: (pos - 1) * othersHeight + 'px'
                        };
                        // animate the clicked slice and also its title (<h3>)
                        $el.stop()
                                .animate(animParam, settings.animSpeed, settings.animEasing, function () {
                                    if (!expanded)
                                        $el.find('.va-content').fadeIn(settings.contentAnimSpeed);
                                })
                                .find('.va-title')
                                .stop()
                                .animate({
                                    lineHeight: cache.sliceH + 'px'
                                }, settings.animSpeed, settings.animEasing).hide();
                        // animate all the others
                        $others.each(function (i) {
                            var $other = $(this),
                                    posother = $other.data('position'),
                                    t;
                            if (expanded)
                                t = (posother - 1) * othersHeight;
                            else {
                                if (posother < pos)
                                    t = (posother - 1) * othersHeight;
                                else
                                    t = ((posother - 2) * othersHeight) + settings.expandedHeight;
                            }

                            $other.stop()
                                    .animate({
                                        top: t + 'px',
                                        height: othersHeight + 'px',
                                        opacity: (expanded) ? 1 : settings.animOpacity
                                    }, settings.animSpeed, settings.animEasing, dfd.resolve)
                                    .find('.va-title')
                                    .stop().show()
                                    .animate({
                                        lineHeight: othersHeight + 'px'
                                    }, settings.animSpeed, settings.animEasing)
                                    .end()
                                    .find('.va-content')
                                    .hide();
                        });
                    }
            ).promise();
        },
        // triggered when clicking the navigation buttons / mouse scrolling
        navigate: function (dir, $slices, $navNext, $navPrev, settings) {
            // if animating return
            if ($slices.is(':animated'))
                return false;
            // all move up / down one position
            // if settings.savePositions is false, then we need to close any expanded slice before sliding
            // otherwise we slide, and the next one will open automatically
            var $el;
            if (cache.idx_expanded != -1 && !settings.savePositions) {
                $el = $slices.eq(cache.idx_expanded);
                $.when(aux.selectSlice($el, $slices, $navNext, $navPrev, settings)).done(function () {
                    setTimeout(function () {
                        aux.slide(dir, $slices, $navNext, $navPrev, settings);
                    }, 10);
                });
            }
            else {
                aux.slide(dir, $slices, $navNext, $navPrev, settings);
            }
        },
        slide: function (dir, $slices, $navNext, $navPrev, settings) {
            // control if we can navigate.
            // control the navigation buttons visibility.
            // the navigation will behave differently for the cases we have all the slices closed, 
            // and when one is opened. It will also depend on settings.savePositions 
            if (cache.idx_expanded === -1 || !settings.savePositions) {
                if (dir === 1 && cache.current + settings.visibleSlices >= cache.totalSlices)
                    return false;
                else if (dir === -1 && cache.current === 0)
                    return false;
                if (dir === -1 && cache.current === 1)
                    $navPrev.fadeOut();
                else
                    $navPrev.fadeIn();
                if (dir === 1 && cache.current + settings.visibleSlices === cache.totalSlices - 1)
                    $navNext.fadeOut();
                else
                    $navNext.fadeIn();
            }
            else {
                if (dir === 1 && cache.idx_expanded === cache.totalSlices - 1)
                    return false;
                else if (dir === -1 && cache.idx_expanded === 0)
                    return false;
                if (dir === -1 && cache.idx_expanded === 1)
                    $navPrev.fadeOut();
                else
                    $navPrev.fadeIn();
                if (dir === 1 && cache.idx_expanded === cache.totalSlices - 2)
                    $navNext.fadeOut();
                else
                    $navNext.fadeIn();
            }

            var $currentSlice = $slices.eq(cache.idx_expanded),
                    $nextSlice,
                    t;
            (dir === 1) ? $nextSlice = $currentSlice.next() : $nextSlice = $currentSlice.prev();
            // if we cannot slide up / down, then we just call the selectSlice for the previous / next slice
            if ((dir === 1 && !aux.canSlideDown($slices, settings)) ||
                    (dir === -1 && !aux.canSlideUp($slices, settings))) {
                aux.selectSlice($nextSlice, $slices, $navNext, $navPrev, settings);
                return false;
            }

            // if we slide down, the top and position of each slice will decrease
            if (dir === 1) {
                cache.current++;
                t = '-=' + cache.sliceH;
                pos_increment = -1;
            }
            else {
                cache.current--;
                t = '+=' + cache.sliceH;
                pos_increment = 1;
            }

            $slices.each(function (i) {
                var $slice = $(this),
                        pos = $slice.data('position');
                // all closed or savePositions is false
                if (!settings.savePositions || cache.idx_expanded === -1)
                    $slice.stop().animate({ top: t }, settings.animSpeed, settings.animEasing);
                else {
                    var itemHeight, othersHeight;
                    // if the slice is the one we should open..
                    if (i === $nextSlice.index()) {
                        $slice.data('expanded', true);
                        cache.idx_expanded = $slice.index();
                        itemHeight = settings.expandedHeight;
                        othersHeight = (settings.accordionH - settings.expandedHeight) / (settings.visibleSlices - 1);
                        $slice.stop()
                                .animate({
                                    height: itemHeight + 'px',
                                    opacity: 1,
                                    top: (dir === 1) ? (pos - 2) * othersHeight + 'px' : pos * othersHeight + 'px'
                                }, settings.animSpeed, settings.animEasing, function () {
                                    $slice.find('.va-content').fadeIn(settings.contentAnimSpeed);
                                })
                                .find('.va-title')
                                .stop()
                                .animate({
                                    lineHeight: cache.sliceH + 'px'
                                }, settings.animSpeed, settings.animEasing);
                    }
                        // if the slice is the one opened, lets close it
                    else if ($slice.data('expanded')) {
                        // collapse

                        $slice.data('expanded', false);
                        othersHeight = (settings.accordionH - settings.expandedHeight) / (settings.visibleSlices - 1);
                        $slice.stop()
                                .animate({
                                    height: othersHeight + 'px',
                                    opacity: settings.animOpacity,
                                    top: (dir === 1) ? '-=' + othersHeight : '+=' + settings.expandedHeight
                                }, settings.animSpeed, settings.animEasing)
                                .find('.va-title')
                                .stop()
                                .animate({
                                    lineHeight: othersHeight + 'px'
                                }, settings.animSpeed, settings.animEasing)
                                .end()
                                .find('.va-content')
                                .hide();
                    }
                        // all the others..
                    else {
                        $slice.data('expanded', false);
                        othersHeight = (settings.accordionH - settings.expandedHeight) / (settings.visibleSlices - 1);
                        $slice.stop()
                                .animate({
                                    top: (dir === 1) ? '-=' + othersHeight : '+=' + othersHeight
                                }, settings.animSpeed, settings.animEasing);
                    }
                }
                // change the slice's position
                $slice.data().position += pos_increment;
            });
        },
        canSlideUp: function ($slices, settings) {
            var $first = $slices.eq(cache.current);
            if ($first.index() !== 0)
                return true;
        },
        canSlideDown: function ($slices, settings) {
            var $last = $slices.eq(cache.current + settings.visibleSlices - 1);
            if ($last.index() !== cache.totalSlices - 1)
                return true;
        }
    },
    methods = {
        init: function (options) {

            if (this.length) {

                var settings = {
                    // the accordion's width
                    accordionW: 1000,
                    // the accordion's height
                    accordionH: 450,
                    // number of visible slices
                    visibleSlices: 3,
                    // the height of a opened slice
                    // should not be more than accordionH
                    expandedHeight: 350,
                    // speed when opening / closing a slice
                    animSpeed: 250,
                    // easing when opening / closing a slice
                    animEasing: 'jswing',
                    // opacity value for the collapsed slices
                    animOpacity: 0.2,
                    // time to fade in the slice's content
                    contentAnimSpeed: 900,
                    // if this is set to false, then before
                    // sliding we collapse any opened slice
                    savePositions: true
                };
                return this.each(function () {

                    // if options exist, lets merge them with our default settings
                    if (options) {
                        $.extend(settings, options);
                    }

                    var $el = $(this),
                            // the accordion's slices
                            $slices = $el.find('div.va-slice'),
                            // the navigation buttons
                            $navNext = $el.find('span.va-nav-next'),
                            $navPrev = $el.find('span.va-nav-prev');
                    // each slice's height
                    cache.sliceH = Math.ceil(settings.accordionH / settings.visibleSlices);
                    // total slices
                    cache.totalSlices = $slices.length;
                    // control some user config parameters
                    if (settings.expandedHeight > settings.accordionH)
                        settings.expandedHeight = settings.accordionH;
                    else if (settings.expandedHeight <= cache.sliceH)
                        settings.expandedHeight = cache.sliceH + 50; // give it a minimum

                    // set the accordion's width & height
                    $el.css({
                        width: settings.accordionW + 'px',
                        height: settings.accordionH + 'px'
                    });
                    // show / hide $navNext 
                    if (settings.visibleSlices < cache.totalSlices)
                        $navNext.show();
                    // set the top & height for each slice.
                    // also save the position of each one.
                    // as we navigate, the first one in the accordion
                    // will have position 1 and the last settings.visibleSlices.
                    // finally set line-height of the title (<h3>)
                    $slices.each(function (i) {
                        var $slice = $(this);
                        $slice.css({
                            top: i * cache.sliceH + 'px',
                            height: cache.sliceH + 'px'
                        }).data('position', (i + 1));
                    })
                            .children('.va-title')
                            .css('line-height', cache.sliceH + 'px');
                    // click event
                    $slices.bind('click.vaccordion', function (e) {
                        // only if we have more than 1 visible slice. 
                        // otherwise we will just be able to slide.
                        if (settings.visibleSlices > 1) {
                            var $el = $(this);
                            aux.selectSlice($el, $slices, $navNext, $navPrev, settings);
                        }
                    });
                    // navigation events
                    $navNext.bind('click.vaccordion', function (e) {
                        aux.navigate(1, $slices, $navNext, $navPrev, settings);
                    });
                    $navPrev.bind('click.vaccordion', function (e) {
                        aux.navigate(-1, $slices, $navNext, $navPrev, settings);
                    });
                    // adds events to the mouse
                    $el.bind('mousewheel.vaccordion', function (e, delta) {
                        if (delta > 0) {
                            aux.navigate(-1, $slices, $navNext, $navPrev, settings);
                        }
                        else {
                            aux.navigate(1, $slices, $navNext, $navPrev, settings);
                        }
                        return false;
                    });
                });
            }
        }
    };
    $.fn.vaccordion = function (method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.vaccordion');
        }
    };
})(jQuery);
//</editor-fold>
//#endregion 

//#region notices full
var NoticiasFull = (function () {
    //mayra
    var $items = $('.noticeX'),
            transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
    // transition end event name
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
            // window and body elements
            $window = $(window),
            $body = $('BODY'),
            // transitions support
            supportTransitions = Modernizr.csstransitions,
            // current item's index
            current = -1,
            // window width and height
            winsize = getWindowSize();
    function init(options) {
        // apply fittext plugin
        //$items.find( 'div.rb-week > div span' ).fitText( 0.3 ).end().find( 'span.rb-city' ).fitText( 0.5 );
        initEvents();
    }

    function initEvents() {

        $items.each(function (ix) {

            var $item = $(this),
                    $close = $item.find('span.rb-close'),
                    $overlay = $item.find('div.rb-overlay'),
                    $prev = $('<span class="rb-prev"><i class="fa fa-uce_anterior"></i></span>').appendTo($overlay),
                    $next = $('<span class="rb-next"><i class="fa fa-uce_siguiente"></i></span>').appendTo($overlay),
                    $linkNext, $linkPrev;
            if ($item.is(':last-child')) {
                $linkPrev = $items[ix - 1];
                $linkNext = $items[0];
            } else if ($item.is(':first-child')) {
                $linkPrev = $items[$items.size() - 1];
                $linkNext = $items[ix + 1];
            } else {
                $linkNext = $items[ix + 1];
                $linkPrev = $items[ix - 1];
            }
            $close.css('display', 'none');
            $next.on('click', function (event) {
                $($linkNext).trigger("click");
                $close.trigger("click");
            });
            $prev.on('click', function (event) {
                $($linkPrev).trigger("click");
                $close.trigger("click");
            });
            $item.on('click', function (event) {
                //if (event.target != this) return;
                //event.preventDefault();
                $('.og-grid.noticies').removeClass("oculto visible animated bounceInRight");
                if ($item.data('isExpanded')) {
                    return true;
                }
                $item.data('isExpanded', true);
                // save current item's index
                current = $item.index();
                var layoutProp = getItemLayoutProp($item),
                        clipPropFirst = 'rect(' + layoutProp.top + 'px ' + (layoutProp.left + layoutProp.width) + 'px ' + (layoutProp.top + layoutProp.height) + 'px ' + layoutProp.left + 'px)',
                        clipPropLast = 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)';
                $overlay.css({
                    transformOrigin: layoutProp.left + 'px ' + layoutProp.top + 'px',
                    clip: supportTransitions ? clipPropFirst : clipPropLast,
                    transform: supportTransitions ? 'rotate(45deg)' : 'none',
                    opacity: 1,
                    zIndex: 9999,
                    pointerEvents: 'auto'
                });
                if (supportTransitions) {
                    $overlay.on(transEndEventName, function () {

                        $overlay.off(transEndEventName);
                        setTimeout(function () {
                            $overlay.css({ clip: clipPropLast, transform: 'rotate(0deg)' }).on(transEndEventName, function () {
                                $overlay.off(transEndEventName);
                                $body.css('overflow-y', 'hidden');
                            });
                        }, 25);
                        /*setTimeout(function() {
                         $overlay.css('clip', clipPropLast).on(transEndEventName, function() {
                         $overlay.off(transEndEventName);
                         $body.css('overflow-y', 'hidden');
                         });
                         }, 25);*/
                    });
                }
                else {
                    $body.css('overflow-y', 'hidden');
                }
                $close.css('display', 'block');

            });
            $close.on('click', function () {
                $body.css('overflow-y', 'auto');
                var layoutProp = getItemLayoutProp($item),
                        clipPropFirst = 'rect(' + layoutProp.top + 'px ' + (layoutProp.left + layoutProp.width) + 'px ' + (layoutProp.top + layoutProp.height) + 'px ' + layoutProp.left + 'px)',
                        clipPropLast = 'auto';
                // reset current
                current = -1;
                $overlay.css({
                    clip: supportTransitions ? clipPropFirst : clipPropLast,
                    opacity: supportTransitions ? 1 : 0,
                    pointerEvents: 'none'
                });
                if (supportTransitions) {
                    $overlay.on(transEndEventName, function () {

                        $overlay.off(transEndEventName);
                        setTimeout(function () {
                            $overlay.css('opacity', 0).on(transEndEventName, function () {
                                $overlay.off(transEndEventName).css({ clip: clipPropLast, zIndex: -1 });
                                $item.data('isExpanded', false);
                            });
                        }, 25);
                    });
                }
                else {
                    $overlay.css('z-index', -1);
                    $item.data('isExpanded', false);
                }
                $close.css('display', 'none');
                return false;
            });
        });
        $(window).on('debouncedresize', function () {
            winsize = getWindowSize();
            // todo : cache the current item
            if (current !== -1) {
                $($items.eq(current).find('div.rb-overlay')).css('clip', 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)');
            }
        });
    }

    function getItemLayoutProp($item) {

        var scrollT = $window.scrollTop(),
                scrollL = $window.scrollLeft(),
                itemOffset = $item.offset();
        return {
            left: itemOffset.left - scrollL,
            top: itemOffset.top - scrollT,
            width: $item.outerWidth(),
            height: $item.outerHeight()
        };
    }

    function getWindowSize() {
        $body.css('overflow-y', 'hidden');
        var w = $window.width(), h = $window.height();
        if (current === -1) {
            $body.css('overflow-y', 'auto');
        }
        return { width: w, height: h };
    }

    return { init: init };
});//();
//</editor-fold>
//#endregion 

//#region carreras Full
//<editor-fold defaultstate="collpased" desc="carreras Full">
var CarreraFull = (function () {
    var $items = $('.carreraWrap li, .aresWrap li'),
            transEndEventNames = {
                'WebkitTransition': 'webkitTransitionEnd',
                'MozTransition': 'transitionend',
                'OTransition': 'oTransitionEnd',
                'msTransition': 'MSTransitionEnd',
                'transition': 'transitionend'
            },
    // transition end event name
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
            // window and body elements
            $window = $(window),
            $body = $('BODY'),
            // transitions support
            supportTransitions = Modernizr.csstransitions,
            // current item's index
            current = -1,
            // window width and height
            winsize = getWindowSize();
    function init(options) {
        // apply fittext plugin
        //$items.find( 'div.rb-week > div span' ).fitText( 0.3 ).end().find( 'span.rb-city' ).fitText( 0.5 );
        initEvents();
    }
    var reg = /.*\/.*\//g;
    function initEvents() {

        $items.each(function (ix) {

            var $item = $(this),
                    $close = $item.find('span.rb-close'),
                    $overlay = $item.find('div.rb-overlay');

            $item.on('click', function (event) {
                //if (event.target != this) return;
                //event.preventDefault();
                // $('.carreraWrap').removeClass("oculto visible animated bounceInRight");
                if (!$item.data('ajaxLoad')) {
                    var qq = $($item.find(".full-content"));

                    $.ajax({
                        type: "get",
                        url: Liferay.ThemeDisplay.getLayoutURL().match(reg)[0] + 'ajax?artID=' + qq.data('ajax-artid') + '&groupID=' + qq.data('ajax-groupid'),
                        //url: 'http://181.113.57.115/ajax?artID=11841&groupID=10181',
                        success: function (data) {
                            var sss = $('#ajax-dcm', data);
                            qq.append(sss.html());
                            sss = data = null;
                            $.Metro.initSidebars($item);
                            $.Metro.initBannerCircle(qq);
                            sidebarUpdate($item);
                            $item.data('ajaxLoad', true);
                        },
                        error: function () {
                            console.log("Ajax no activo, ha ocurrido un error.");
                            $.Metro.initSidebars($item);
                            $.Metro.initBannerCircle(qq);
                            sidebarUpdate($item);
                            $item.data('ajaxLoad', true);
                        }
                    });

                }
                if ($item.data('isExpanded')) {
                    return true;
                }
                $item.data('isExpanded', true);
                // save current item's index
                current = $item.index();
                var layoutProp = getItemLayoutProp($item),
                        clipPropFirst = 'rect(' + layoutProp.top + 'px ' + (layoutProp.left + layoutProp.width) + 'px ' + (layoutProp.top + layoutProp.height) + 'px ' + layoutProp.left + 'px)',
                        clipPropLast = 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)';
                $overlay.css({
                    transformOrigin: layoutProp.left + 'px ' + layoutProp.top + 'px',
                    clip: supportTransitions ? clipPropFirst : clipPropLast,
                    transform: supportTransitions ? 'rotate(45deg)' : 'none',
                    opacity: 1,
                    zIndex: 9999,
                    pointerEvents: 'auto'
                });
                if (supportTransitions) {
                    $overlay.on(transEndEventName, function () {

                        $overlay.off(transEndEventName);
                        setTimeout(function () {
                            $overlay.css({ clip: clipPropLast, transform: 'rotate(0deg)' }).on(transEndEventName, function () {
                                $overlay.off(transEndEventName);
                                $body.css('overflow-y', 'hidden');
                            });
                        }, 25);
                    });
                }
                else {
                    $body.css('overflow-y', 'hidden');
                }
                if ($item.data('ajaxLoad')) {
                    sidebarUpdate($item);
                }

            });

            $close.on('click', function () {
                $body.css('overflow-y', 'auto');
                var layoutProp = getItemLayoutProp($item),
                        clipPropFirst = 'rect(' + layoutProp.top + 'px ' + (layoutProp.left + layoutProp.width) + 'px ' + (layoutProp.top + layoutProp.height) + 'px ' + layoutProp.left + 'px)',
                        clipPropLast = 'auto';
                // reset current
                current = -1;
                $overlay.css({
                    clip: supportTransitions ? clipPropFirst : clipPropLast,
                    opacity: supportTransitions ? 1 : 0,
                    pointerEvents: 'none'
                });
                if (supportTransitions) {
                    $overlay.on(transEndEventName, function () {

                        //$overlay.off(transEndEventName);
                        setTimeout(function () {
                            $overlay.css('opacity', 0).on(transEndEventName, function () {
                                $overlay.off(transEndEventName).css({ clip: clipPropLast, zIndex: -1 });
                                $item.data('isExpanded', false);
                            });
                        }, 25);
                    });
                }
                else {
                    $overlay.css('z-index', -1);
                    $item.data('isExpanded', false);
                }
                //sidebar update
                var sidebar = $item.find('[data-role=sidebar]'),
                        tabs = $(sidebar.children("nav")).find("a"),
                        frames = $(sidebar.children(".full-content")).children(".slic");

                frames.hide();
                //apago bannerCircle
                if (!isMobileBrowser()) {
                    /*frames.find(".homeslider.on").each(function() {
                     $(this).data('nivoslider').stop();
                     });*/

                    frames.find(".bannerCircle").each(function () {
                        $(this).data('bannerCircle').stop();
                    });
                }
                sidebar = tabs = frames = null;
                return false;
            });
        });
        $(window).on('debouncedresize', function () {
            winsize = getWindowSize();
            // todo : cache the current item
            if (current !== -1) {
                $($items.eq(current).find('div.rb-overlay')).css('clip', 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)');
            }
        });
    }

    function sidebarUpdate(itemx) {
        //sidebar update
        var sidebar = itemx.find('[data-role=sidebar]'),
                tabs = $(sidebar.children("nav")).find("a"),
                frames = $(sidebar.children(".full-content")).children(".slic");
        tabs.each(function () {
            $(this).parent().removeClass("active");
        });

        frames.hide();
        $(frames.get(0)).show();
        sidebar = tabs = null;

        setTimeout(function () {
            if (!isMobileBrowser()) {
                /*$(frames.get(0)).find(".homeslider.on").each(function() {
                 $(this).data('nivoslider').start();
                 });*/
                $(frames.get(0)).find(".bannerCircle").each(function () {
                    $(this).data('bannerCircle').start();
                });
                frames = sidebar = tabs = null;
            }
        }, 1000);
    }

    function getItemLayoutProp($item) {

        var scrollT = $window.scrollTop(),
                scrollL = $window.scrollLeft(),
                itemOffset = $item.offset();
        return {
            left: itemOffset.left - scrollL,
            top: itemOffset.top - scrollT,
            width: $item.outerWidth(),
            height: $item.outerHeight()
        };
    }

    function getWindowSize() {
        $body.css('overflow-y', 'hidden');
        var w = $window.width(), h = $window.height();
        if (current === -1) {
            $body.css('overflow-y', 'auto');
        }
        return { width: w, height: h };
    }

    return { init: init };
});//();

//</editor-fold>
//#endregion 

//#region metro
//<editor-fold defaultstate="collapsed" desc="metro tabs control">
var hasTouch = 'ontouchend' in window, eventTimer;
var moveDirection = 'undefined', startX, startY, deltaX, deltaY, mouseDown = false

function addTouchEvents(element) {
    if (hasTouch) {
        element.addEventListener("touchstart", touch2Mouse, true);
        element.addEventListener("touchmove", touch2Mouse, true);
        element.addEventListener("touchend", touch2Mouse, true);
    }
}

function touch2Mouse(e) {
    var theTouch = e.changedTouches[0];
    var mouseEv;

    switch (e.type) {
        case "touchstart":
            mouseEv = "mousedown";
            break;
        case "touchend":
            mouseEv = "mouseup";
            break;
        case "touchmove":
            mouseEv = "mousemove";
            break;
        default:
            return;
    }


    if (mouseEv == "mousedown") {
        eventTimer = (new Date()).getTime();
        startX = theTouch.clientX;
        startY = theTouch.clientY;
        mouseDown = true;
    }

    if (mouseEv == "mouseup") {
        if ((new Date()).getTime() - eventTimer <= 500) {
            mouseEv = "click";
        } else if ((new Date()).getTime() - eventTimer > 1000) {
            mouseEv = "longclick";
        }
        eventTimer = 0;
        mouseDown = false;
    }

    if (mouseEv == "mousemove") {
        if (mouseDown) {
            deltaX = theTouch.clientX - startX;
            deltaY = theTouch.clientY - startY;
            moveDirection = deltaX > deltaY ? 'horizontal' : 'vertical';
        }
    }

    var mouseEvent = document.createEvent("MouseEvent");
    mouseEvent.initMouseEvent(mouseEv, true, true, window, 1, theTouch.screenX, theTouch.screenY, theTouch.clientX, theTouch.clientY, false, false, false, false, 0, null);
    theTouch.target.dispatchEvent(mouseEvent);

    e.preventDefault();
}

/* To add touch support for element need create listeners for component dom element
 if (hasTouch) {
 element.addEventListener("touchstart", touch2Mouse, true);
 element.addEventListener("touchmove", touch2Mouse, true);
 element.addEventListener("touchend", touch2Mouse, true);
 }
 */
(function (c) {
    c.widget("metro.tabcontrol", {
        version: "1.0.0", options: {
            effect: "none", activateStoredTab: !1, tabclick: function (a) {
            }, tabchange: function (a) {
            }
        }, _create: function () {
            var a = this, b = this.element, d = c(b.children(".tabs")).children("li"), e = c(b.children(".frames")).children(".frame"), f = b.attr("id");
            void 0 != b.data("effect") && (this.options.effect = b.data("effect"));
            this.init(d, e);
            d.each(function () {
                var b = c(this).children("a");
                b.on("click", function (h) {
                    h.preventDefault();
                    a.options.tabclick(this);
                    if (c(this).parent().hasClass("disabled"))
                        return !1;
                    d.removeClass("active");
                    b.parent("li").addClass("active");
                    e.hide();
                    var e1 = e.data('anim');
                    e.find('a').removeClass(e1);
                    h = c(b.attr("href"));
                    switch (a.options.effect) {
                        case "slide":
                            h.slideDown();
                            break;
                        case "fade":
                            h.fadeIn();
                            break;
                        default:
                            h.show()
                    }

                    var e2 = h.data('anim');
                    var w = h.find('a');
                    if (e2 !== undefined && w.width() !== null) {
                        w.addClass('animated ' + e2);
                        setTimeout(function () {
                            w.removeClass('animated ' + e2);
                        }, 1000)
                    }
                    a._trigger("change", null, h);
                    a.options.tabchange(this);
                    void 0 != f && window.localStorage.setItem(f + "-current-tab", c(this).attr("href"))
                })
            });
            this.options.activateStoredTab && this._activateStoredTab(d)
        }, init: function (a, b) {
            var d = this;
            a.each(function () {
                if (c(this).hasClass("active")) {
                    var a = c(c(c(this).children("a")).attr("href"));
                    b.hide();
                    a.show();
                    d._trigger("change", null, a)
                }
            })
        }, _activateStoredTab: function (a) {
            var b = window.localStorage.getItem(this.element.attr("id") + "-current-tab");
            void 0 != b && a.each(function () {
                var a = c(this).children("a");
                a.attr("href") == b && a.click()
            })
        }, _destroy: function () {
        }, _setOption: function (a, b) {
            this._super("_setOption", a, b)
        }
    })
})(jQuery);
(function (c) {
    c.widget("metro.hint", {
        version: "1.0.0", options: { position: "bottom", background: "#FFFCC0", shadow: !1, border: !1, _hint: void 0 }, _create: function () {
            var a = this, b = this.options;
            this.element.on("mouseenter", function (c) {
                a.createHint();
                b._hint.stop().fadeIn();
                c.preventDefault()
            });
            this.element.on("mouseleave", function (a) {
                b._hint.stop().fadeOut(function () {
                    b._hint.remove()
                });
                a.preventDefault()
            })
        }, createHint: function () {
            var a = this.element, b = a.data("hint").split("|"), d = this.options;
            void 0 != a.data("hintPosition") &&
                    (d.position = a.data("hintPosition"));
            void 0 != a.data("hintBackground") && (d.background = a.data("hintBackground"));
            void 0 != a.data("hintShadow") && (d.shadow = a.data("hintShadow"));
            void 0 != a.data("hintBorder") && (d.border = a.data("hintBorder"));
            if ("TD" == a[0].tagName || "TH" == a[0].tagName) {
                var e = c("<div/>").css("display", "inline-block").html(a.html());
                a.html(e);
                a = e
            }
            var e = 1 < b.length ? b[0] : !1, f = 1 < b.length ? b[1] : b[0], b = c("<div/>").addClass("hint").appendTo("body");
            e && c("<div/>").addClass("hint-title").html(e).appendTo(b);
            c("<div/>").addClass("hint-text").html(f).appendTo(b);
            b.addClass(d.position);
            d.shadow && b.addClass("shadow");
            d.background && b.css("background-color", d.background);
            d.border && b.css("border-color", d.border);
            "top" == d.position ? b.css({ top: a.offset().top - c(window).scrollTop() - b.outerHeight() - 20, left: a.offset().left - c(window).scrollLeft() }) : "bottom" == d.position ? b.css({ top: a.offset().top - c(window).scrollTop() + a.outerHeight(), left: a.offset().left - c(window).scrollLeft() }) : "right" == d.position ? b.css({
                top: a.offset().top -
                            10 - c(window).scrollTop(), left: a.offset().left + a.outerWidth() + 10 - c(window).scrollLeft()
            }) : "left" == d.position && b.css({ top: a.offset().top - 10 - c(window).scrollTop(), left: a.offset().left - b.outerWidth() - 10 - c(window).scrollLeft() });
            d._hint = b
        }, _destroy: function () {
        }, _setOption: function (a, b) {
            this._super("_setOption", a, b)
        }
    })
})(jQuery);
(function ($) {
    $.widget("metro.accordion", {
        version: "1.0.0",
        options: {
            closeAny: true,
            open: function (frame) {
            },
            action: function (frame) {
            }
        },
        _frames: {},
        _create: function () {
            var element = this.element;
            if (element.data('closeany') != undefined)
                this.options.closeAny = element.data('closeany');
            this.init();
        },
        init: function () {
            var that = this;
            that.element.on('click', '.accordion-frame > .heading', function (e) {
                e.preventDefault();
                e.stopPropagation();
                if ($(this).attr('disabled') || $(this).data('action') == 'none')
                    return;
                if (that.options.closeAny)
                    that._closeFrames();
                var frame = $(this).parent(), content = frame.children('.contentx2');
                console.log(this);
                if ($(content).is(":hidden")) {
                    //$(content).slideDown();
                    $(this).removeClass("collapsed");
                    that._trigger("frame", e, { frame: frame });
                    that.options.open(frame);
                } else {
                    //$(content).slideUp();
                    $(this).addClass("collapsed");
                }
                that.options.action(frame);
            });
            var frames = this.element.children('.accordion-frame');
            frames.each(function () {
                var frame = this,
                        a = $(this).children(".heading"),
                        content = $(this).children(".contentx2");
                if ($(frame).hasClass("active") && !$(frame).attr('disabled') && $(frame).data('action') != 'none') {
                    //$(content).show();
                    $(a).removeClass("collapsed");
                } else {
                    $(a).addClass("collapsed");
                }
            });
        },
        _closeFrames: function () {
            var frames = this.element.children('.accordion-frame');
            $.each(frames, function () {
                var frame = $(this);
                frame.children('.heading').addClass('collapsed');
                // frame.children('.contentx2').slideUp();
            });
            //this._frames.children(".content").slideUp().parent().children('.heading').addClass("collapsed");
        },
        _destroy: function () {
        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    })
})(jQuery);
(function ($) {
    $.widget("metro.panel", {
        version: "1.0.0",
        options: {
            onCollapse: function () {
            },
            onExpand: function () {
            }
        },
        _create: function () {
            var element = this.element, o = this.options,
                    header = element.children('.panel-header'),
                    content = element.children('.panel-content');
            header.on('click', function () {
                content.slideToggle(
                        'fast',
                        function () {
                            element.toggleClass('collapsed');
                            if (element.hasClass('collapsed')) {
                                o.onCollapse();

                            } else {
                                o.onExpand();
                                //mayra2
                                //$('.full-content').each(function () {
                                //    $(this).perfectScrollbar("update");
                                //});
                            }
                        }
                );
            });
            if (element.hasClass('start-collapsed')) {
                if (element.hasClass('collapsed')) {
                    //element.removeClass('collapsed');
                }
                else {
                    header.click();
                }
            }
        },
        _destroy: function () {

        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    })
})(jQuery);
(function ($) {
    $.widget("metro.carousel", {
        version: "1.0.0",
        options: {
            auto: true,
            period: 2000,
            duration: 500,
            effect: 'slowdown', // slide, fade, switch, slowdown
            direction: 'left',
            markers: {
                show: true,
                type: 'default',
                position: 'left' //bottom-left, bottom-right, bottom-center, top-left, top-right, top-center
            },
            controls: true,
            stop: true,
            width: '100%',
            height: 300
        },
        _slides: {},
        _currentIndex: 0,
        _interval: 0,
        _outPosition: 0,
        _create: function () {
            var that = this, o = this.options,
                    element = carousel = this.element,
                    controls = carousel.find('.controls');

            if (element.data('auto') != undefined)
                o.auto = element.data('auto');
            if (element.data('period') != undefined)
                o.period = element.data('period');
            if (element.data('duration') != undefined)
                o.duration = element.data('duration');
            if (element.data('effect') != undefined)
                o.effect = element.data('effect');
            if (element.data('direction') != undefined)
                o.direction = element.data('direction');
            if (element.data('width') != undefined)
                o.width = element.data('width');
            if (element.data('height') != undefined)
                o.height = element.data('height');
            if (element.data('stop') != undefined)
                o.stop = element.data('stop');
            if (element.data('controls') != undefined)
                o.controls = element.data('controls');
            if (element.data('markersShow') != undefined)
                o.markers.show = element.data('markersShow');
            if (element.data('markersType') != undefined)
                o.markers.type = element.data('markersType');
            if (element.data('markersPosition') != undefined)
                o.markers.position = element.data('markersPosition');

            carousel.css({
                'width': this.options.width,
                'height': this.options.height
            });

            this._slides = carousel.find('.slic');

            if (this._slides.length <= 1)
                return;

            if (this.options.markers !== false && this.options.markers.show && this._slides.length > 1) {
                this._markers(that);
            }

            if (this.options.controls && this._slides.length > 1) {
                carousel.find('.controls.left').on('click', function () {
                    that._slideTo('prior');
                });
                carousel.find('.controls.right').on('click', function () {
                    that._slideTo('next');
                });
            } else {
                controls.hide();
            }

            if (this.options.stop) {
                carousel
                        .on('mouseenter', function () {
                            clearInterval(that._interval);
                        })
                        .on('mouseleave', function () {
                            if (that.options.auto)
                                that._autoStart(), that.options.period;
                        })
            }

            if (this.options.auto) {
                this._autoStart();
            }
        },
        _autoStart: function () {
            var that = this;
            this._interval = setInterval(function () {
                if (that.options.direction == 'left') {
                    that._slideTo('next')
                } else {
                    that._slideTo('prior')
                }
            }, this.options.period);
        },
        _slideTo: function (direction) {
            var
                    currentSlide = this._slides[this._currentIndex],
                    nextSlide;

            if (direction == undefined)
                direction = 'next';

            if (direction === 'prior') {
                this._currentIndex -= 1;
                if (this._currentIndex < 0)
                    this._currentIndex = this._slides.length - 1;

                this._outPosition = this.element.width();

            } else if (direction === 'next') {
                this._currentIndex += 1;
                if (this._currentIndex >= this._slides.length)
                    this._currentIndex = 0;

                this._outPosition = -this.element.width();

            }

            nextSlide = this._slides[this._currentIndex];

            switch (this.options.effect) {
                case 'switch':
                    this._effectSwitch(currentSlide, nextSlide);
                    break;
                case 'slowdown':
                    this._effectSlowdown(currentSlide, nextSlide, this.options.duration);
                    break;
                case 'fade':
                    this._effectFade(currentSlide, nextSlide, this.options.duration);
                    break;
                default:
                    this._effectSlide(currentSlide, nextSlide, this.options.duration);
            }

            var carousel = this.element, that = this;
            carousel.find('.markers ul li a').each(function () {
                var index = $(this).data('num');
                if (index === that._currentIndex) {
                    $(this).parent().addClass('active');
                } else {
                    $(this).parent().removeClass('active');
                }
            });
        },
        _slideToSlide: function (slideIndex) {
            var
                    currentSlide = this._slides[this._currentIndex],
                    nextSlide = this._slides[slideIndex];

            if (slideIndex > this._currentIndex) {
                this._outPosition = -this.element.width();
            } else {
                this._outPosition = this.element.width();
            }

            switch (this.options.effect) {
                case 'switch':
                    this._effectSwitch(currentSlide, nextSlide);
                    break;
                case 'slowdown':
                    this._effectSlowdown(currentSlide, nextSlide, this.options.duration);
                    break;
                case 'fade':
                    this._effectFade(currentSlide, nextSlide, this.options.duration);
                    break;
                default:
                    this._effectSlide(currentSlide, nextSlide, this.options.duration);
            }

            this._currentIndex = slideIndex;
        },
        _markers: function (that) {
            var div, ul, li, i, markers;

            div = $('<div class="markers ' + this.options.markers.type + '" />');
            ul = $('<ul></ul>').appendTo(div);

            for (i = 0; i < this._slides.length; i++) {
                li = $('<li><a href="javascript:void(0)" data-num="' + i + '"></a></li>');
                if (i === 0) {
                    li.addClass('active');
                }
                li.appendTo(ul);
            }


            ul.find('li a').removeClass('active').on('click', function () {
                var $this = $(this),
                        index = $this.data('num');

                ul.find('li').removeClass('active');
                $this.parent().addClass('active');

                if (index == that._currentIndex) {
                    return true;
                }

                that._slideToSlide(index);
                return true;
            });

            div.appendTo(this.element);

            switch (this.options.markers.position) {
                case 'top-left':
                    {
                        div.css({
                            left: '10px',
                            right: 'auto',
                            bottom: 'auto',
                            top: '10px'
                        });
                        break;
                    }
                case 'top-right':
                    {
                        div.css({
                            left: 'auto',
                            right: '10px',
                            bottom: 'auto',
                            top: '0px'
                        });
                        break;
                    }
                case 'top-center':
                    {
                        div.css({
                            left: this.element.width() / 2 - div.width() / 2,
                            right: 'auto',
                            bottom: 'auto',
                            top: '0px'
                        });
                        break;
                    }
                case 'bottom-left':
                    {
                        div.css({
                            left: '10px',
                            right: 'auto'
                        });
                        break;
                    }
                case 'bottom-right':
                    {
                        div.css({
                            right: '10px',
                            left: 'auto'
                        });
                        break;
                    }
                case 'bottom-center':
                    {
                        div.css({
                            left: this.element.width() / 2 - div.width() / 2,
                            right: 'auto'
                        });
                        break;
                    }
            }
        },
        _effectSwitch: function (currentSlide, nextSlide) {
            $(currentSlide)
                    .hide();
            $(nextSlide)
                    .css({ left: 0 })
                    .show();
            $(nextSlide)
                    .css('left', this._outPosition * -1)
                    .show()
                    .animate({ left: 0 }, this.options.duration);
        },
        _effectSlide: function (currentSlide, nextSlide, duration) {
            $(currentSlide)
                    .animate({ left: this._outPosition }, duration);
            $(nextSlide)
                    .css('left', this._outPosition * -1)
                    .show()
                    .animate({ left: 0 }, duration);
        },
        _effectSlowdown: function (currentSlide, nextSlide, duration) {
            var options = {
                'duration': duration,
                'easing': 'doubleSqrt'
            };
            $.easing.doubleSqrt = function (t) {
                return Math.sqrt(Math.sqrt(t));
            };

            $(currentSlide)
                    .animate({ left: this._outPosition }, options);


            //$(nextSlide).find('.subslide').hide();
            $(nextSlide)
                    .css('left', this._outPosition * -1)
                    .show()
                    .animate({ left: 0 }, options);

            //setTimeout(function(){
            //    $(nextSlide).find('.subslide').fadeIn();
            //}, 500);

        },
        _effectFade: function (currentSlide, nextSlide, duration) {
            $(currentSlide)
                    .fadeOut(duration);
            $(nextSlide)
                    .css({ left: 0 })
                    .fadeIn(duration);
        },
        _destroy: function () {

        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });
})(jQuery);
(function ($) {
    $.widget("metro.dropdown", {
        version: "1.0.1",
        options: {
            effect: 'slide',
            toggleElement: false
        },
        _create: function () {
            var that = this,
                    menu = this.element,
                    name = this.name,
                    parent = this.element.parent(),
                    toggle = this.options.toggleElement || parent.children('.dropdown-toggle');

            if (menu.data('effect') != undefined) {
                this.options.effect = menu.data('effect');
            }

            toggle.on('click.' + name, function (e) {
                e.preventDefault();
                e.stopPropagation();

                if (menu.css('display') == 'block' && !menu.hasClass('keep-open')) {
                    that._close(menu);
                } else {
                    $('.dropdown-menu').each(function (i, el) {
                        if (!menu.parents('.dropdown-menu').is(el) && !$(el).hasClass('keep-open') && $(el).css('display') == 'block') {
                            that._close(el);
                        }
                    });
                    that._open(menu);
                }
            });

            $(menu).find('li.disabled a').on('click', function (e) {
                e.preventDefault();
            });

        },
        _open: function (el) {
            switch (this.options.effect) {
                case 'fade':
                    $(el).fadeIn('fast');
                    break;
                case 'slide':
                    $(el).slideDown('fast');
                    break;
                default:
                    $(el).show();
            }
            this._trigger("onOpen", null, el);
        },
        _close: function (el) {
            switch (this.options.effect) {
                case 'fade':
                    $(el).fadeOut('fast');
                    break;
                case 'slide':
                    $(el).slideUp('fast');
                    break;
                default:
                    $(el).hide();
            }
            this._trigger("onClose", null, el);
        },
        _destroy: function () {
        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    });
})(jQuery);
(function ($) {
    $.widget("metro.pullmenu", {
        version: "1.0.0",
        options: {
        },
        _create: function () {
            var that = this,
                    element = this.element;

            var menu = (element.data("relation") != undefined) ? element.data("relation") : element.parent().children(".element-menu, .horizontal-menu");

            addTouchEvents(element[0]);

            element.on("click", function (e) {
                menu.slideToggle();
                element.parent().toggleClass("opened");
                e.preventDefault();
                e.stopPropagation();
            });

        },
        _destroy: function () {

        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    })
})(jQuery);

$(window).resize(function () {
    var device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (device_width > 1200) {
        $(".sidebar .element-menu").show();
    } else {
        $(".sidebar .element-menu").hide();
    }
});

(function ($) {
    /*
     * Init or ReInit components
     * */
    $.Metro = function (params) {
        params = $.extend({
        }, params);
    };
    $.Metro.initTabs = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=tab-control]').tabcontrol();
        } else {
            $('[data-role=tab-control]').tabcontrol();
        }
    };
    $.Metro.initHints = function (a) {
        void 0 != a ? $(a).find("[data-hint]").hint() : $("[data-hint]").hint()
    };
    $.Metro.initAccordions = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=accordion]').accordion();
        } else {
            $('[data-role=accordion]').accordion();
        }
    };
    $.Metro.initPanels = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=panel]').panel();
        }
        {
            $('[data-role=panel]').panel();
        }
    };
    $.Metro.initCarousels = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=carousel]').carousel();
        } else {
            $('[data-role=carousel]').carousel();
        }
    };
    $.Metro.initCarousels = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=carousel]').carousel();
        } else {
            $('[data-role=carousel]').carousel();
        }
    };
    $.Metro.initDropdowns = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=dropdown]').dropdown();
        } else {
            $('[data-role=dropdown]').dropdown();
        }
    };
    $.Metro.initPulls = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=pull-menu], .pull-menu').pullmenu();
        }
        {
            $('[data-role=pull-menu], .pull-menu').pullmenu();
        }
    };
    $.Metro.initAll = function (area) {
        $.Metro.initTabs(area);
        //$.Metro.initHints(area);
        $.Metro.initPanels(area);
        $.Metro.initCarousels(area);
        $.Metro.initPulls(area);
        //$.Metro.initAccordions(area);
        $.Metro.initDropdowns(area);

    }
})(jQuery);
$(function () {
    //$.Metro.initAll($('body.metro'));
});
METRO_AUTO_REINIT = false;
$(function () {
    if (METRO_AUTO_REINIT) {
        //$(".metro").bind('DOMSubtreeModified', function(){            $.Metro.initAll();        });
        var originalDOM = $('.metro').html(),
                actualDOM;
        setInterval(function () {
            actualDOM = $('.metro').html();
            if (originalDOM !== actualDOM) {
                originalDOM = actualDOM;
                $.Metro.initAll();
            }
        }, 500);
    }
});
//</editor-fold>
//#endregion 

//#region perfect-scrollbar
//<editor-fold defaultstate="collapsed" desc="perfect-scrollbar">
(function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
})(function (e) {
    "use strict";
    var t = { wheelSpeed: 1, wheelPropagation: !1, minScrollbarLength: null, maxScrollbarLength: null, useBothWheelAxes: !1, useKeyboard: !0, suppressScrollX: !1, suppressScrollY: !1, scrollXMarginOffset: 0, scrollYMarginOffset: 0, includePadding: !1 }, o = function () {
        var e = 0;
        return function () {
            var t = e;
            return e += 1, ".perfect-scrollbar-" + t
        }
    }();
    e.fn.perfectScrollbar = function (n, r) {
        return this.each(function () {
            var l = e.extend(!0, {}, t), a = e(this);
            if ("object" == typeof n ? e.extend(!0, l, n) : r = n, "update" === r)
                return a.data("perfect-scrollbar-update") && a.data("perfect-scrollbar-update")(), a;
            if ("destroy" === r)
                return a.data("perfect-scrollbar-destroy") && a.data("perfect-scrollbar-destroy")(), a;
            if (a.data("perfect-scrollbar"))
                return a.data("perfect-scrollbar");
            a.addClass("ps-container");
            var s, i, c, d, u, p, f, v, h, b, g = e("<div class='ps-scrollbar-x-rail'></div>").appendTo(a), m = e("<div class='ps-scrollbar-y-rail'></div>").appendTo(a), w = e("<div class='ps-scrollbar-x'></div>").appendTo(g), T = e("<div class='ps-scrollbar-y'></div>").appendTo(m), L = parseInt(g.css("bottom"), 10), y = L === L, I = y ? null : parseInt(g.css("top"), 10), S = parseInt(m.css("right"), 10), C = S === S, x = C ? null : parseInt(m.css("left"), 10), D = "rtl" === a.css("direction"), X = o(), Y = parseInt(g.css("borderLeftWidth"), 10) + parseInt(g.css("borderRightWidth"), 10), P = parseInt(g.css("borderTopWidth"), 10) + parseInt(g.css("borderBottomWidth"), 10), k = function (e, t) {
                var o = e + t, n = d - h;
                b = 0 > o ? 0 : o > n ? n : o;
                var r = parseInt(b * (p - d) / (d - h), 10);
                a.scrollTop(r)
            }, E = function (e, t) {
                var o = e + t, n = c - f;
                v = 0 > o ? 0 : o > n ? n : o;
                var r = parseInt(v * (u - c) / (c - f), 10);
                a.scrollLeft(r)
            }, M = function (e) {
                return l.minScrollbarLength && (e = Math.max(e, l.minScrollbarLength)), l.maxScrollbarLength && (e = Math.min(e, l.maxScrollbarLength)), e
            }, W = function () {
                var e = { width: c, display: s ? "inherit" : "none" };
                e.left = D ? a.scrollLeft() + c - u : a.scrollLeft(), y ? e.bottom = L - a.scrollTop() : e.top = I + a.scrollTop(), g.css(e);
                var t = { top: a.scrollTop(), height: d, display: i ? "inherit" : "none" };
                C ? t.right = D ? u - a.scrollLeft() - S - T.outerWidth() : S - a.scrollLeft() : t.left = D ? a.scrollLeft() + 2 * c - u - x - T.outerWidth() : x + a.scrollLeft(), m.css(t), w.css({ left: v, width: f - Y }), T.css({ top: b, height: h - P }), s ? a.addClass("ps-active-x") : a.removeClass("ps-active-x"), i ? a.addClass("ps-active-y") : a.removeClass("ps-active-y")
            }, j = function () {
                g.hide(), m.hide(), c = l.includePadding ? a.innerWidth() : a.width(), d = l.includePadding ? a.innerHeight() : a.height(), u = a.prop("scrollWidth"), p = a.prop("scrollHeight"), !l.suppressScrollX && u > c + l.scrollXMarginOffset ? (s = !0, f = M(parseInt(c * c / u, 10)), v = parseInt(a.scrollLeft() * (c - f) / (u - c), 10)) : (s = !1, f = 0, v = 0, a.scrollLeft(0)), !l.suppressScrollY && p > d + l.scrollYMarginOffset ? (i = !0, h = M(parseInt(d * d / p, 10)), b = parseInt(a.scrollTop() * (d - h) / (p - d), 10)) : (i = !1, h = 0, b = 0, a.scrollTop(0)), b >= d - h && (b = d - h), v >= c - f && (v = c - f), W(), l.suppressScrollX || g.show(), l.suppressScrollY || m.show()
            }, O = function () {
                var t, o;
                w.bind("mousedown" + X, function (e) {
                    o = e.pageX, t = w.position().left, g.addClass("in-scrolling"), e.stopPropagation(), e.preventDefault()
                }), e(document).bind("mousemove" + X, function (e) {
                    g.hasClass("in-scrolling") && (E(t, e.pageX - o), j(), e.stopPropagation(), e.preventDefault())
                }), e(document).bind("mouseup" + X, function () {
                    g.hasClass("in-scrolling") && g.removeClass("in-scrolling")
                }), t = o = null
            }, q = function () {
                var t, o;
                T.bind("mousedown" + X, function (e) {
                    o = e.pageY, t = T.position().top, m.addClass("in-scrolling"), e.stopPropagation(), e.preventDefault()
                }), e(document).bind("mousemove" + X, function (e) {
                    m.hasClass("in-scrolling") && (k(t, e.pageY - o), j(), e.stopPropagation(), e.preventDefault())
                }), e(document).bind("mouseup" + X, function () {
                    m.hasClass("in-scrolling") && m.removeClass("in-scrolling")
                }), t = o = null
            }, A = function (e, t) {
                var o = a.scrollTop();
                if (0 === e) {
                    if (!i)
                        return !1;
                    if (0 === o && t > 0 || o >= p - d && 0 > t)
                        return !l.wheelPropagation
                }
                var n = a.scrollLeft();
                if (0 === t) {
                    if (!s)
                        return !1;
                    if (0 === n && 0 > e || n >= u - c && e > 0)
                        return !l.wheelPropagation
                }
                return !0
            }, B = function () {
                var e = !1, t = function (e) {
                    var t = e.originalEvent.deltaX, o = -1 * e.originalEvent.deltaY;
                    return (t === void 0 || o === void 0) && (t = -1 * e.originalEvent.wheelDeltaX / 6, o = e.originalEvent.wheelDeltaY / 6), e.originalEvent.deltaMode && 1 === e.originalEvent.deltaMode && (t *= 10, o *= 10), t !== t && o !== o && (t = 0, o = e.originalEvent.wheelDelta), [t, o]
                }, o = function (o) {
                    var n = t(o), r = n[0], c = n[1];
                    e = !1, l.useBothWheelAxes ? i && !s ? (c ? a.scrollTop(a.scrollTop() - c * l.wheelSpeed) : a.scrollTop(a.scrollTop() + r * l.wheelSpeed), e = !0) : s && !i && (r ? a.scrollLeft(a.scrollLeft() + r * l.wheelSpeed) : a.scrollLeft(a.scrollLeft() - c * l.wheelSpeed), e = !0) : (a.scrollTop(a.scrollTop() - c * l.wheelSpeed), a.scrollLeft(a.scrollLeft() + r * l.wheelSpeed)), j(), e = e || A(r, c), e && (o.stopPropagation(), o.preventDefault())
                };
                window.onwheel !== void 0 ? a.bind("wheel" + X, o) : window.onmousewheel !== void 0 && a.bind("mousewheel" + X, o)
            }, H = function () {
                var t = !1;
                a.bind("mouseenter" + X, function () {
                    t = !0
                }), a.bind("mouseleave" + X, function () {
                    t = !1
                });
                var o = !1;
                e(document).bind("keydown" + X, function (n) {
                    if (!(n.isDefaultPrevented && n.isDefaultPrevented() || !t || e(document.activeElement).is(":input,[contenteditable]"))) {
                        var r = 0, l = 0;
                        switch (n.which) {
                            case 37:
                                r = -30;
                                break;
                            case 38:
                                l = 30;
                                break;
                            case 39:
                                r = 30;
                                break;
                            case 40:
                                l = -30;
                                break;
                            case 33:
                                l = 90;
                                break;
                            case 32:
                            case 34:
                                l = -90;
                                break;
                            case 35:
                                l = -d;
                                break;
                            case 36:
                                l = d;
                                break;
                            default:
                                return
                        }
                        a.scrollTop(a.scrollTop() - l), a.scrollLeft(a.scrollLeft() + r), o = A(r, l), o && n.preventDefault()
                    }
                })
            }, K = function () {
                var e = function (e) {
                    e.stopPropagation()
                };
                T.bind("click" + X, e), m.bind("click" + X, function (e) {
                    var t = parseInt(h / 2, 10), o = e.pageY - m.offset().top - t, n = d - h, r = o / n;
                    0 > r ? r = 0 : r > 1 && (r = 1), a.scrollTop((p - d) * r)
                }), w.bind("click" + X, e), g.bind("click" + X, function (e) {
                    var t = parseInt(f / 2, 10), o = e.pageX - g.offset().left - t, n = c - f, r = o / n;
                    0 > r ? r = 0 : r > 1 && (r = 1), a.scrollLeft((u - c) * r)
                })
            }, Q = function () {
                var t = function (e, t) {
                    a.scrollTop(a.scrollTop() - t), a.scrollLeft(a.scrollLeft() - e), j()
                }, o = {}, n = 0, r = {}, l = null, s = !1;
                e(window).bind("touchstart" + X, function () {
                    s = !0
                }), e(window).bind("touchend" + X, function () {
                    s = !1
                }), a.bind("touchstart" + X, function (e) {
                    var t = e.originalEvent.targetTouches[0];
                    o.pageX = t.pageX, o.pageY = t.pageY, n = (new Date).getTime(), null !== l && clearInterval(l), e.stopPropagation()
                }), a.bind("touchmove" + X, function (e) {
                    if (!s && 1 === e.originalEvent.targetTouches.length) {
                        var l = e.originalEvent.targetTouches[0], a = {};
                        a.pageX = l.pageX, a.pageY = l.pageY;
                        var i = a.pageX - o.pageX, c = a.pageY - o.pageY;
                        t(i, c), o = a;
                        var d = (new Date).getTime(), u = d - n;
                        u > 0 && (r.x = i / u, r.y = c / u, n = d), e.preventDefault()
                    }
                }), a.bind("touchend" + X, function () {
                    clearInterval(l), l = setInterval(function () {
                        return .01 > Math.abs(r.x) && .01 > Math.abs(r.y) ? (clearInterval(l), void 0) : (t(30 * r.x, 30 * r.y), r.x *= .8, r.y *= .8, void 0)
                    }, 10)
                })
            }, R = function () {
                a.bind("scroll" + X, function () {
                    j()
                })
            }, z = function () {
                a.unbind(X), e(window).unbind(X), e(document).unbind(X), a.data("perfect-scrollbar", null), a.data("perfect-scrollbar-update", null), a.data("perfect-scrollbar-destroy", null), w.remove(), T.remove(), g.remove(), m.remove(), g = m = w = T = s = i = c = d = u = p = f = v = L = y = I = h = b = S = C = x = D = X = null
            }, F = function (t) {
                a.addClass("ie").addClass("ie" + t);
                var o = function () {
                    var t = function () {
                        e(this).addClass("hover")
                    }, o = function () {
                        e(this).removeClass("hover")
                    };
                    a.bind("mouseenter" + X, t).bind("mouseleave" + X, o), g.bind("mouseenter" + X, t).bind("mouseleave" + X, o), m.bind("mouseenter" + X, t).bind("mouseleave" + X, o), w.bind("mouseenter" + X, t).bind("mouseleave" + X, o), T.bind("mouseenter" + X, t).bind("mouseleave" + X, o)
                }, n = function () {
                    W = function () {
                        var e = { left: v + a.scrollLeft(), width: f };
                        y ? e.bottom = L : e.top = I, w.css(e);
                        var t = { top: b + a.scrollTop(), height: h };
                        C ? t.right = S : t.left = x, T.css(t), w.hide().show(), T.hide().show()
                    }
                };
                6 === t && (o(), n())
            }, G = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, J = function () {
                var e = navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);
                e && "msie" === e[1] && F(parseInt(e[2], 10)), j(), R(), O(), q(), K(), B(), G && Q(), l.useKeyboard && H(), a.data("perfect-scrollbar", a), a.data("perfect-scrollbar-update", j), a.data("perfect-scrollbar-destroy", z)
            };
            return J(), a
        })
    }
});
//</editor-fold>
//#endregion 

//#region viewportChecker
//<editor-fold defaultstate="collapsed" desc="Scroll Spy, current:viewportChecker">

/*
 Version 1.5.0
 The MIT License (MIT)
 
 Copyright (c) 2014 Dirk Groenen
 
 Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:
 
 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 */

(function ($) {
    $.fn.viewportChecker = function (useroptions) {
        // Define options and extend with user
        var options = {
            classToAdd: 'visible',
            offset: 100,
            repeat: false, fin: false,
            checkElements: ''
        };
        $.extend(options, useroptions);
        // Cache the given element and height of the browser
        var $elem = this;
        var windowSize = (!options.scrollHorizontal) ? $(window).height() : $(window).width(),
                scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');

        options.checkElements = function () {
            var $obj = $($elem);
            // If class already exists; quit
            if (options.find) {
                return;
            }
            var viewportTop = $(scrollElem).scrollTop(),
                    viewportBottom = (viewportTop + windowSize);

            // define the top position of the element and include the offset which makes is appear earlier or later
            var elemTop = (!options.scrollHorizontal) ? Math.round($obj.offset().top) + options.offset : Math.round($obj.offset().left) + options.offset,
                    elemBottom = elemTop + ($obj.height());
            // Add class if in viewport
            if ((elemTop < viewportBottom) && (elemBottom > viewportTop)) {
                $obj.addClass(options.classToAdd);
                options.find = true;
                $(window).unbind("load scroll touchmove", options.checkElements);
                $(window).unbind("resize", options.resize);

                setTimeout(function () {
                    $obj.removeClass(options.classToAdd + ' oculto');
                    options = options.checkElements = this.checkElements = $elem = windowSize = scrollElem = null;
                }, 1000);


            }
            viewportTop = viewportBottom = elemTop = elemBottom = null;

        };
        // Run checkelements on load and scroll
        $(window).bind("load scroll touchmove", options.checkElements);
        // On resize change the height var
        $(window).bind("resize", options.resize);
        options.resize = function (e) { windowSize = (!options.scrollHorizontal) ? e.currentTarget.innerHeight : e.currentTarget.innerWidth; }
        //$(window).resize(function (e) {
        //    windowSize = (!options.scrollHorizontal) ? e.currentTarget.innerHeight : e.currentTarget.innerWidth;
        //});
        // trigger inital check if elements already visible
        options.checkElements();
        return this;
    };
})(jQuery);

(function ($) {
    $.fn.slideCheck = function (useroptions) {
        // Define options and extend with user
        var options = {
            classToAdd: 'active',
            offset: 200,
            repeat: true
        };
        //$.extend(options, useroptions);
        // Cache the given element and height of the browser
        var $elem = this,
                windowSize = (!options.scrollHorizontal) ? $(window).height() : $(window).width(),
                scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
        this.checkSlides = function () {

            var viewportTop = $(scrollElem).scrollTop(),
                    viewportBottom = (viewportTop + windowSize);

            $elem.each(function () {
                var $obj = $(this);

                // define the top position of the element and include the offset which makes is appear earlier or later
                var elemTop = Math.round($obj.offset().top) + options.offset;
                elemBottom = elemTop + ($obj.height());
                elemBottom -= (options.offset * 2);

                // Add class if in viewport
                if ((elemTop < viewportBottom) && (elemBottom > viewportTop)) {

                    //$obj.addClass(options.classToAdd);
                    $('a.toSlide').parent().removeClass("current");
                    $('#navigation li a[data-slide="' + $obj.data("slide") + '"]').parent().addClass('current');
                    $obj = elemTop = elemBottom = null
                    return;
                    // Remove class if not in viewport and repeat is true
                } else if ($obj.hasClass(options.classToAdd)) {
                    //$obj.removeClass(options.classToAdd);
                    $obj = elemTop = elemBottom = null
                }
            });
        };
        // Run checkelements on load and scroll
        $(window).bind("load scroll touchmove", this.checkSlides);
        // On resize change the height var
        $(window).resize(function (e) {
            windowSize = (!options.scrollHorizontal) ? e.currentTarget.innerHeight : e.currentTarget.innerWidth;
        });
        // trigger inital check if elements already visible
        this.checkSlides();
        return this;
    };
})(jQuery);

/*function setScrollSpy(){var b=[{elements:$$("#filmBollo1, #filmBollo2,\t#firstBollo1, #firstBollo2, #firstBollo3, #secondBollo1, #secondBollo2,\t#thirdBollo1, #thirdBollo2, #wallpaperBollonzo,\t#newsBolloAnna, #newsBolloFb, #newsBolloTw, #newsBolloStatusMini, #newsBolloStatusLittle, #newsBolloStatus, #footerBollonzo, section > header > p"),initProps:{transform:["scale(0)"]},endProps:{transform:["scale(1)"]},animation:{duration:300,transition:Fx.Transitions.Back.easeOut}},{elements:$("wallpaperiMac"),
 initProps:{"background-position":"-507px 0",opacity:0},endProps:"auto",animation:{duration:600,transition:Fx.Transitions.Quint.easeOut}},{elements:$$("#wallpaperiPad, #wallpaperiPhone"),initProps:{"background-position":"0 244px",opacity:0},endProps:"auto",animation:{duration:600,transition:Fx.Transitions.Quint.easeOut}},{elements:$$("section > header > hr, section > header > p > span"),initProps:{opacity:0},endProps:"auto"},{elements:$$("section > header > h2 > span, section > header > h3 > span"),
 initProps:{"margin-top":-44},endProps:"auto"},{elements:$$("#biografia > section > section > header, #biografia > section > section > hr, #biografia > section > section > article, #biografia > header > h4, #biografia > header > h5"),initProps:{opacity:0},endProps:"auto"},{elements:$$("#filmografia > section > section > *"),initProps:{opacity:0},endProps:"auto"},{elements:$$("#immagini > nav > a"),initProps:{opacity:0,"margin-top":-200},endProps:"auto"},{elements:$("tendinaFooterSx"),initProps:{left:0},
 endProps:{left:-763}},{elements:$("tendinaFooterDx"),initProps:{left:763},endProps:{left:1526}}];(new ScrollSpyIt({offset:150,delay:300,config:b})).initScrollSpy()}*/

//</editor-fold>
//#endregion 

//aqi iba slick para imagenes y fue copiado a jscommon

//#region bannerCircle
//<editor-fold defaultstate="collapsed" desc="bannerCircle">
(function ($) {
    $.widget("metro.bannerCircle", {
        version: "1.0.0",
        options: {
            auto: true,
            period: 8000,
            duration: 1000,
            effect: 'fade', // slide, fade, switch, slowdown
            direction: 'left',
            stop: false
        },
        _currentIndex: 0,
        _interval: 0,
        _caption: '',
        _create: function () {

            var that = this, element = this.element;

            // Return early if this element already has a plugin instance
            if (element.data('bannerCircle')) {
                return element.data('bannerCircle');
            }

            // Store plugin object in this element's data
            element.data('bannerCircle', this);


            var _slides = $(element.find(".oculto").find(".img"));

            _caption = $(element.find(".row-cap .cap"));

            if (_slides.length <= 1)
                return;
            _slides = null;

            // preload all images
            element.imagesLoaded(function () {
                //alert("images loaded");
                that._changeSlide('next');
                setTimeout(function () {
                    element.find(".spinner").remove();
                }, 500);

            });
            ///*             

            //if (this.options.auto)
            //    this._autoStart();
            //*/

        },
        _autoStart: function () {
            this._changeSlide('next');
            var that = this;
            if (!isMobileBrowser())
                this._interval = setInterval(function () {
                    //if (that.options.direction == 'left') {
                    //    that._changeSlide('next')
                    //} else {
                    //    that._changeSlide('prior')
                    //}
                    that._changeSlide('next');
                }, this.options.period);
        },
        _changeSlide: function (direction) {
            var _slides = $(this.element.find(".oculto").find(".img"));
            var _items = $(this.element.find(".item"));

            var that = this;
            if (that.options.stop)
                return;

            if (direction == undefined)
                direction = 'next';

            if (direction === 'prior') {
                this._currentIndex -= 1;
                if (this._currentIndex < 0)
                    this._currentIndex = _slides.length - 1;


            } else if (direction === 'next') {
                var ix = this._currentIndex;

                _caption.html($($(_slides[ix]).find(".caption")).html());

                _items.each(function () {
                    that._setContent($(this), $(_slides[ix]), ix);
                    ix += 1;
                    if (ix >= _slides.length)
                        ix = 0;
                });

                this._currentIndex += 1;
                if (this._currentIndex >= _slides.length)
                    this._currentIndex = 0;

            }
            _slides = _items = that = direction = ix = null;
        },
        _setContent: function (item1, slide1, ix1) {
            (function (item, slide, ix) {
                var a = $(item.find('.banx'));
                var b = $(slide.find('img'));
                //a.css({ "background-image": 'url(' + b.attr("src") + ')' }).hide().delay(ix * 500).fadeIn();
                // a.css({'background-image':'url(' + b.attr('src') + ')'});

                //a.attr('src', b.attr('src')); a.fadeOut().delay(ix * 500).fadeIn();
                setTimeout(function () {
                    a.fadeOut(150, function () {
                        var u = $(this);
                        u.attr('src', b.attr('src'));
                        u.fadeIn(150);
                        //u = null;
                        b = null;
                        slide = item = ix = a = null;
                    });
                }, ix * 200);
                //a.delay(ix * 500)


                //a.element.styyle.backgroundImage = 'url(' + b.attr('src') + ')';
                // b = null;
            })(item1, slide1, ix1);
            slide1 = item1 = ix1 = null;
            // 

        },
        _destroy: function () {

        },
        start: function () {
            this.options.stop = false;
            this._autoStart();
        },
        stop: function () {
            this.options.stop = true;
            clearInterval(this._interval);
        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
            this._autoStart();
        }
    })
})(jQuery);
$(function () {
    $.Metro.initBannerCircle = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=bannerCircle]').bannerCircle();
        } else {
            $('[data-role=bannerCircle]').bannerCircle();
        }
    };
    // $.Metro.initBannerCircle();
});
//</editor-fold>
//#endregion 

$(window).load(function () {
    console.log("window on load eventx");
});

function onloadX() {

    //$('#logo3').removeClass("oculto zoomOut").addClass("animated zoomIn");

    //top banner rotator
    $('.topBanner').slick({
        centerMode: false,
        slidesToScroll: 1,
        centerPadding: '40px',
        slidesToShow: 1,
        autoplay: !debug,
        autoplaySpeed: 5000,
        prevArrow: '<button type="button" class="slick-prev hidden">Previous</button>',
        nextArrow: '<button type="button" class="slick-prev hidden">Previous</button>',
        //responsive: [
        //    {
        //        breakpoint: 768,
        //        settings: {
        //            arrows: false,
        //            centerMode: true,
        //            centerPadding: '40px',
        //            slidesToShow: 3
        //        }
        //    },
        //    {
        //        breakpoint: 480,
        //        settings: {
        //            arrows: false,
        //            centerMode: true,
        //            centerPadding: '40px',
        //            slidesToShow: 1
        //        }
        //    }
        //],
        speed: 500

    });

    NoticiasFull().init();
    CarreraFull().init();
    $('.has-full-view').each(function () {
        var $overlay = $($(this).attr('href'));
        var $window = $(window);
        var w = $window.width(), h = $window.height();
        var winsize = { width: w, height: h };
        var $body = $('BODY');
        var clipPropLast = 'rect(0px ' + winsize.width + 'px ' + winsize.height + 'px 0px)';
        $(this).click(function (e) {
            e.preventDefault();
            $overlay.css({
                clip: clipPropLast,
                opacity: 1,
                zIndex: 9999,
                pointerEvents: 'auto'
            });
            $body.css('overflow-y', 'hidden');
            $overlay.removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css({ width: '100%', height: '100%' });
        });
        $($overlay.find('span.rb-close')).click(function (e) {
            //alert(' mayra');
            $overlay.removeClass("animated fadeIn fadeOut").addClass("animated fadeOut").css({ width: '0px', height: '0px' });
            $body.css('overflow-y', 'auto');
            clipPropLast = 'auto';
            $overlay.css({
                clip: clipPropLast,
                opacity: 0,
                pointerEvents: 'none'
            });
            $overlay.css('z-index', -1);
        });
    });
    //noticies add pagination
    var taglib = $(".noticiesWrap").parent().parent().parent().find(".taglib-page-iterator");
    if (taglib.length > 0) {
        taglib.css({ "margin-top": "30px" }).appendTo(".noticiesWrap .container2.featuredcontainer.clearfix");
        var buttons = taglib.find(".lfr-pagination-buttons li a");
        $(buttons[0]).html('<i class="fa fa-uce_anterior"></i>');
        $(buttons[1]).html('<i class="fa fa-uce_siguiente"></i>');
        $((buttons[1])).parent().before('<li><a href="' + Liferay.ThemeDisplay.getLayoutURL().match(reg)[0] + 'archive_noticias" target="_blank"><i class="fa fa-uce_repositorio"></i></a></li>');
        var qq = $('.noticiesWrap .search-results');
        //qq.html(qq.children());
    }

    //scrollbar
    //$('.full-content').each(function () {
    //    $(this).perfectScrollbar();
    //});

    //docs issuu
    $(".posgrados .doc").each(function () {
        var doc = $(this);
        $(doc.find('.hintx')).on('click', function () {
            window.open(doc.data("iview"), '_blank');
        });
        $(doc.find('.download')).on('click', function () {
            window.open(doc.data("idown"), '_blank');
        });
    });
    //noticies add pagination
    $(".noticiesWrap").parent().parent().parent().find(".taglib-page-iterator").appendTo(".noticiesWrap");

    ///*
    if (!isMobileBrowser()) {
        //animated on scroll
        $('.og-grid.noticies').each(function () {

            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible animated bounceInRight', // Class to add to the elements when they are visible
                offset: 100, // The offset of the elements (let them appear earlier or later)
                repeat: false, // Add the possibility to remove the class if the elements are not visible
                callbackFunction: function (elem, action) {
                    //$(window).unbind("load scroll touchmove", elem);
                }, // Callback to do after a class was added to an element. Action will return "add" or "remove", depending if the class was added or removed
                scrollHorizontal: false // Set to true if your website scrolls horizontal instead of vertical.        
            });
        });
        $('.carreraWrap').each(function () {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible animated bounceIn',
                offset: 100,
                repeat: false,
                scrollHorizontal: false
            });
        });
        $('#slide1 .detail h2').each(function () {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible animated fadeIn',
                offset: 100,
                repeat: false,
                //callbackFunction: null,
                scrollHorizontal: false
            });
        });


        $('#slide1 .detail p').each(function () {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible animated fadeInUpBig',
                offset: 100,
                repeat: false,
                //callbackFunction: null,
                scrollHorizontal: false
            });
        });


        $('.posgrados li').each(function () {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible animated fadeInUpBig',
                offset: 100,
                repeat: false,
                //callbackFunction: null,
                scrollHorizontal: false
            });
        });


        $('.links').each(function () {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible animated bounceInRight',
                offset: 100,
                repeat: false,
                //callbackFunction: null,
                scrollHorizontal: false
            });
        });

        //footer
        $('.footer .blogs').each(function () {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible animated fadeInRightBig',
                offset: 100,
                repeat: false,
                scrollHorizontal: false
            });
        });
        $('.footer .social').each(function () {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible animated fadeInUpBig',
                offset: 100,
                repeat: false,
                scrollHorizontal: false
            });
        });
        $('.footer .info').each(function () {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible animated fadeInLeftBig',
                offset: 100,
                repeat: false,
                scrollHorizontal: false
            });
        });

        //radio
        /*
        if (!!document.createElement('audio').canPlayType) {

            $('<audio id="radioplay" class="oculto" src="http://s3.myradiostream.com:7258/;"></audio>').appendTo('#page');
            $('#radiox').click(function (e) {
                e.preventDefault();
                var ra = $('#radioplay');
                if (ra.get(0).paused) {
                    ra.trigger("play");
                } else {
                    ra.trigger("pause");
                }
            });
        } else {
            $('#radiox').remove();
        }
        */
        $('#radiox').remove();
        //slides check
        $('.slide').addClass("u").slideCheck({});

        //nivo slider
        /* 
         $('.homeslider.on').each(function() {
         var $this = jQuery(this);
         $this.nivoSlider({effect: 'random', slices: 15, boxCols: 8, boxRows: 4, animSpeed: 800, pauseTime: 3000, startSlide: 0, directionNav: false, directionNavHide: true, controlNav: false, controlNavThumbs: false, pauseOnHover: false, manualAdvance: false, prevText: 'Prev', nextText: 'Next', randomStart: true, beforeChange: function() {
         }, afterChange: function() {
         }, slideshowEnd: function() {
         }, lastSlide: function() {
         }, afterLoad: function() {
         }});
         });
         //apagamos nivo slider carreras
         
         $('.carreraWrap .homeslider.on').each(function() {
         $(this).data('nivoslider').stop();
         });
         
         //*/

    }
    //*/    
}
