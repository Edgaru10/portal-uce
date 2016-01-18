var debug = false, noti_slide_num = 2, versionx = 1;
console.log("version script: " + versionx);

//#region nivo slider
//<editor-fold  defaultstate="collapsed" desc="nivo slider">
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
//<editor-fold  defaultstate="collapsed" desc="vacordion">
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
                            $el.find('.va-title').show("fast");//close slice so show title
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
                                    if (!expanded) {
                                        $el.find('.va-content').fadeIn(settings.contentAnimSpeed);
                                        $el.find('.va-title').hide();
                                    }
                                })

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
                                    .stop()//.show()                                    
                                    .end()
                                    .find('.va-content')
                                    .hide();
                        });
                        $others = null;
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
                        //.find('.va-title')
                        //.stop()
                        //.animate({
                        //    lineHeight: cache.sliceH + 'px'
                        //}, settings.animSpeed, settings.animEasing);
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
                                .stop().show("fast")
                            .fadeIn()
                                /*.animate({
                                    lineHeight: othersHeight + 'px'
                                }, settings.animSpeed, settings.animEasing)
                                .end()*/
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
                    // adds events to the mouse //mouse comunicados
                    /*$el.bind('mousewheel.vaccordion', function(e, delta) {
                     if (delta > 0) {
                     aux.navigate(-1, $slices, $navNext, $navPrev, settings);
                     }
                     else {
                     aux.navigate(1, $slices, $navNext, $navPrev, settings);
                     }
                     return false;
                     });*/
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
            $item.data("index", ix);
            $item.on('click', function (event) {
                //if (event.target != this) return;
                //event.preventDefault();
                $('.og-grid.noticies').removeClass("oculto visible animated bounceInRight");
                if ($item.data('isExpanded')) {
                    return true;
                }
                $item.data('isExpanded', true);
                // save current item's index
                current = $item.data("index");
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
        } else {
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
        } else {
            $('[data-role=pull-menu], .pull-menu').pullmenu();
        }
    };

    $.Metro.initAll = function (area) {
        $.Metro.initTabs(area);
        //$.Metro.initHints(area);
        $.Metro.initPanels(area);
        $.Metro.initCarousels(area);
        $.Metro.initPulls(area);
        $.Metro.initDropdowns(area);
        //$.Metro.initAccordions(area);

    }
})(jQuery);

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
//<editor-fold  defaultstate="collapsed" desc="perfect-scrollbar">
/* perfect-scrollbar - v0.5.8
 * http://noraesae.github.com/perfect-scrollbar/
 * Copyright (c) 2014 Hyunje Alex Jun; Licensed MIT */
(function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? e(require("jquery")) : e(jQuery)
})(function (e) {
    "use strict";
    function t(e) {
        return "string" == typeof e ? parseInt(e, 10) : ~~e
    }
    var o = { wheelSpeed: 1, wheelPropagation: !1, swipePropagation: !1, minScrollbarLength: null, maxScrollbarLength: null, useBothWheelAxes: !1, useKeyboard: !0, suppressScrollX: !1, suppressScrollY: !1, scrollXMarginOffset: 0, scrollYMarginOffset: 0, includePadding: !1 }, n = 0, r = function () {
        var e = n++;
        return function (t) {
            var o = ".perfect-scrollbar-" + e;
            return t === void 0 ? o : t + o
        }
    }, l = "WebkitAppearance" in document.documentElement.style;
    e.fn.perfectScrollbar = function (n, i) {
        return this.each(function () {
            function a(e, o) {
                var n = e + o, r = D - R;
                j = 0 > n ? 0 : n > r ? r : n;
                var l = t(j * (Y - D) / (D - R));
                M.scrollTop(l)
            }
            function s(e, o) {
                var n = e + o, r = E - k;
                W = 0 > n ? 0 : n > r ? r : n;
                var l = t(W * (C - E) / (E - k));
                M.scrollLeft(l)
            }
            function c(e) {
                return P.minScrollbarLength && (e = Math.max(e, P.minScrollbarLength)), P.maxScrollbarLength && (e = Math.min(e, P.maxScrollbarLength)), e
            }
            function u() {
                var e = { width: I };
                e.left = B ? M.scrollLeft() + E - C : M.scrollLeft(), N ? e.bottom = _ - M.scrollTop() : e.top = Q + M.scrollTop(), H.css(e);
                var t = { top: M.scrollTop(), height: A };
                Z ? t.right = B ? C - M.scrollLeft() - V - J.outerWidth() : V - M.scrollLeft() : t.left = B ? M.scrollLeft() + 2 * E - C - $ - J.outerWidth() : $ + M.scrollLeft(), G.css(t), U.css({ left: W, width: k - z }), J.css({ top: j, height: R - et })
            }
            function d() {
                M.removeClass("ps-active-x"), M.removeClass("ps-active-y"), E = P.includePadding ? M.innerWidth() : M.width(), D = P.includePadding ? M.innerHeight() : M.height(), C = M.prop("scrollWidth"), Y = M.prop("scrollHeight"), !P.suppressScrollX && C > E + P.scrollXMarginOffset ? (X = !0, I = E - F, k = c(t(I * E / C)), W = t(M.scrollLeft() * (I - k) / (C - E))) : (X = !1, k = 0, W = 0, M.scrollLeft(0)), !P.suppressScrollY && Y > D + P.scrollYMarginOffset ? (O = !0, A = D - tt, R = c(t(A * D / Y)), j = t(M.scrollTop() * (A - R) / (Y - D))) : (O = !1, R = 0, j = 0, M.scrollTop(0)), W >= I - k && (W = I - k), j >= A - R && (j = A - R), u(), X && M.addClass("ps-active-x"), O && M.addClass("ps-active-y")
            }
            function p() {
                var t, o, n = function (e) {
                    s(t, e.pageX - o), d(), e.stopPropagation(), e.preventDefault()
                }, r = function () {
                    H.removeClass("in-scrolling"), e(q).unbind(K("mousemove"), n)
                };
                U.bind(K("mousedown"), function (l) {
                    o = l.pageX, t = U.position().left, H.addClass("in-scrolling"), e(q).bind(K("mousemove"), n), e(q).one(K("mouseup"), r), l.stopPropagation(), l.preventDefault()
                }), t = o = null
            }
            function f() {
                var t, o, n = function (e) {
                    a(t, e.pageY - o), d(), e.stopPropagation(), e.preventDefault()
                }, r = function () {
                    G.removeClass("in-scrolling"), e(q).unbind(K("mousemove"), n)
                };
                J.bind(K("mousedown"), function (l) {
                    o = l.pageY, t = J.position().top, G.addClass("in-scrolling"), e(q).bind(K("mousemove"), n), e(q).one(K("mouseup"), r), l.stopPropagation(), l.preventDefault()
                }), t = o = null
            }
            function v(e, t) {
                var o = M.scrollTop();
                if (0 === e) {
                    if (!O)
                        return !1;
                    if (0 === o && t > 0 || o >= Y - D && 0 > t)
                        return !P.wheelPropagation
                }
                var n = M.scrollLeft();
                if (0 === t) {
                    if (!X)
                        return !1;
                    if (0 === n && 0 > e || n >= C - E && e > 0)
                        return !P.wheelPropagation
                }
                return !0
            }
            function g(e, t) {
                var o = M.scrollTop(), n = M.scrollLeft(), r = Math.abs(e), l = Math.abs(t);
                if (l > r) {
                    if (0 > t && o === Y - D || t > 0 && 0 === o)
                        return !P.swipePropagation
                } else if (r > l && (0 > e && n === C - E || e > 0 && 0 === n))
                    return !P.swipePropagation;
                return !0
            }
            function b() {
                function e(e) {
                    var t = e.originalEvent.deltaX, o = -1 * e.originalEvent.deltaY;
                    return (t === void 0 || o === void 0) && (t = -1 * e.originalEvent.wheelDeltaX / 6, o = e.originalEvent.wheelDeltaY / 6), e.originalEvent.deltaMode && 1 === e.originalEvent.deltaMode && (t *= 10, o *= 10), t !== t && o !== o && (t = 0, o = e.originalEvent.wheelDelta), [t, o]
                }
                function t(t) {
                    if (l || !(M.find("select:focus").length > 0)) {
                        var n = e(t), r = n[0], i = n[1];
                        o = !1, P.useBothWheelAxes ? O && !X ? (i ? M.scrollTop(M.scrollTop() - i * P.wheelSpeed) : M.scrollTop(M.scrollTop() + r * P.wheelSpeed), o = !0) : X && !O && (r ? M.scrollLeft(M.scrollLeft() + r * P.wheelSpeed) : M.scrollLeft(M.scrollLeft() - i * P.wheelSpeed), o = !0) : (M.scrollTop(M.scrollTop() - i * P.wheelSpeed), M.scrollLeft(M.scrollLeft() + r * P.wheelSpeed)), d(), o = o || v(r, i), o && (t.stopPropagation(), t.preventDefault())
                    }
                }
                var o = !1;
                window.onwheel !== void 0 ? M.bind(K("wheel"), t) : window.onmousewheel !== void 0 && M.bind(K("mousewheel"), t)
            }
            function h() {
                var t = !1;
                M.bind(K("mouseenter"), function () {
                    t = !0
                }), M.bind(K("mouseleave"), function () {
                    t = !1
                });
                var o = !1;
                e(q).bind(K("keydown"), function (n) {
                    if ((!n.isDefaultPrevented || !n.isDefaultPrevented()) && t) {
                        for (var r = document.activeElement ? document.activeElement : q.activeElement; r.shadowRoot;)
                            r = r.shadowRoot.activeElement;
                        if (!e(r).is(":input,[contenteditable]")) {
                            var l = 0, i = 0;
                            switch (n.which) {
                                case 37:
                                    l = -30;
                                    break;
                                case 38:
                                    i = 30;
                                    break;
                                case 39:
                                    l = 30;
                                    break;
                                case 40:
                                    i = -30;
                                    break;
                                case 33:
                                    i = 90;
                                    break;
                                case 32:
                                case 34:
                                    i = -90;
                                    break;
                                case 35:
                                    i = n.ctrlKey ? -Y : -D;
                                    break;
                                case 36:
                                    i = n.ctrlKey ? M.scrollTop() : D;
                                    break;
                                default:
                                    return
                            }
                            M.scrollTop(M.scrollTop() - i), M.scrollLeft(M.scrollLeft() + l), o = v(l, i), o && n.preventDefault()
                        }
                    }
                })
            }
            function w() {
                function e(e) {
                    e.stopPropagation()
                }
                J.bind(K("click"), e), G.bind(K("click"), function (e) {
                    var o = t(R / 2), n = e.pageY - G.offset().top - o, r = D - R, l = n / r;
                    0 > l ? l = 0 : l > 1 && (l = 1), M.scrollTop((Y - D) * l)
                }), U.bind(K("click"), e), H.bind(K("click"), function (e) {
                    var o = t(k / 2), n = e.pageX - H.offset().left - o, r = E - k, l = n / r;
                    0 > l ? l = 0 : l > 1 && (l = 1), M.scrollLeft((C - E) * l)
                })
            }
            function m() {
                function t() {
                    var e = window.getSelection ? window.getSelection() : document.getSlection ? document.getSlection() : { rangeCount: 0 };
                    return 0 === e.rangeCount ? null : e.getRangeAt(0).commonAncestorContainer
                }
                function o() {
                    r || (r = setInterval(function () {
                        return x() ? (M.scrollTop(M.scrollTop() + l.top), M.scrollLeft(M.scrollLeft() + l.left), d(), void 0) : (clearInterval(r), void 0)
                    }, 50))
                }
                function n() {
                    r && (clearInterval(r), r = null), H.removeClass("in-scrolling"), G.removeClass("in-scrolling")
                }
                var r = null, l = { top: 0, left: 0 }, i = !1;
                e(q).bind(K("selectionchange"), function () {
                    e.contains(M[0], t()) ? i = !0 : (i = !1, n())
                }), e(window).bind(K("mouseup"), function () {
                    i && (i = !1, n())
                }), e(window).bind(K("mousemove"), function (e) {
                    if (i) {
                        var t = { x: e.pageX, y: e.pageY }, r = M.offset(), a = { left: r.left, right: r.left + M.outerWidth(), top: r.top, bottom: r.top + M.outerHeight() };
                        t.x < a.left + 3 ? (l.left = -5, H.addClass("in-scrolling")) : t.x > a.right - 3 ? (l.left = 5, H.addClass("in-scrolling")) : l.left = 0, t.y < a.top + 3 ? (l.top = 5 > a.top + 3 - t.y ? -5 : -20, G.addClass("in-scrolling")) : t.y > a.bottom - 3 ? (l.top = 5 > t.y - a.bottom + 3 ? 5 : 20, G.addClass("in-scrolling")) : l.top = 0, 0 === l.top && 0 === l.left ? n() : o()
                    }
                })
            }
            function T(t, o) {
                function n(e, t) {
                    M.scrollTop(M.scrollTop() - t), M.scrollLeft(M.scrollLeft() - e), d()
                }
                function r() {
                    h = !0
                }
                function l() {
                    h = !1
                }
                function i(e) {
                    return e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0] : e.originalEvent
                }
                function a(e) {
                    var t = e.originalEvent;
                    return t.targetTouches && 1 === t.targetTouches.length ? !0 : t.pointerType && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE ? !0 : !1
                }
                function s(e) {
                    if (a(e)) {
                        w = !0;
                        var t = i(e);
                        p.pageX = t.pageX, p.pageY = t.pageY, f = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
                    }
                }
                function c(e) {
                    if (!h && w && a(e)) {
                        var t = i(e), o = { pageX: t.pageX, pageY: t.pageY }, r = o.pageX - p.pageX, l = o.pageY - p.pageY;
                        n(r, l), p = o;
                        var s = (new Date).getTime(), c = s - f;
                        c > 0 && (v.x = r / c, v.y = l / c, f = s), g(r, l) && (e.stopPropagation(), e.preventDefault())
                    }
                }
                function u() {
                    !h && w && (w = !1, clearInterval(b), b = setInterval(function () {
                        return x() ? .01 > Math.abs(v.x) && .01 > Math.abs(v.y) ? (clearInterval(b), void 0) : (n(30 * v.x, 30 * v.y), v.x *= .8, v.y *= .8, void 0) : (clearInterval(b), void 0)
                    }, 10))
                }
                var p = {}, f = 0, v = {}, b = null, h = !1, w = !1;
                t && (e(window).bind(K("touchstart"), r), e(window).bind(K("touchend"), l), M.bind(K("touchstart"), s), M.bind(K("touchmove"), c), M.bind(K("touchend"), u)), o && (window.PointerEvent ? (e(window).bind(K("pointerdown"), r), e(window).bind(K("pointerup"), l), M.bind(K("pointerdown"), s), M.bind(K("pointermove"), c), M.bind(K("pointerup"), u)) : window.MSPointerEvent && (e(window).bind(K("MSPointerDown"), r), e(window).bind(K("MSPointerUp"), l), M.bind(K("MSPointerDown"), s), M.bind(K("MSPointerMove"), c), M.bind(K("MSPointerUp"), u)))
            }
            function y() {
                M.bind(K("scroll"), function () {
                    d()
                })
            }
            function L() {
                M.unbind(K()), e(window).unbind(K()), e(q).unbind(K()), M.data("perfect-scrollbar", null), M.data("perfect-scrollbar-update", null), M.data("perfect-scrollbar-destroy", null), U.remove(), J.remove(), H.remove(), G.remove(), M = H = G = U = J = X = O = E = D = C = Y = k = W = _ = N = Q = R = j = V = Z = $ = B = K = null
            }
            function S() {
                d(), y(), p(), f(), w(), m(), b(), (ot || nt) && T(ot, nt), P.useKeyboard && h(), M.data("perfect-scrollbar", M), M.data("perfect-scrollbar-update", d), M.data("perfect-scrollbar-destroy", L)
            }
            var P = e.extend(!0, {}, o), M = e(this), x = function () {
                return !!M
            };
            if ("object" == typeof n ? e.extend(!0, P, n) : i = n, "update" === i)
                return M.data("perfect-scrollbar-update") && M.data("perfect-scrollbar-update")(), M;
            if ("destroy" === i)
                return M.data("perfect-scrollbar-destroy") && M.data("perfect-scrollbar-destroy")(), M;
            if (M.data("perfect-scrollbar"))
                return M.data("perfect-scrollbar");
            M.addClass("ps-container");
            var E, D, C, Y, X, k, W, I, O, R, j, A, B = "rtl" === M.css("direction"), K = r(), q = this.ownerDocument || document, H = e("<div class='ps-scrollbar-x-rail'>").appendTo(M), U = e("<div class='ps-scrollbar-x'>").appendTo(H), _ = t(H.css("bottom")), N = _ === _, Q = N ? null : t(H.css("top")), z = t(H.css("borderLeftWidth")) + t(H.css("borderRightWidth")), F = t(H.css("marginLeft")) + t(H.css("marginRight")), G = e("<div class='ps-scrollbar-y-rail'>").appendTo(M), J = e("<div class='ps-scrollbar-y'>").appendTo(G), V = t(G.css("right")), Z = V === V, $ = Z ? null : t(G.css("left")), et = t(G.css("borderTopWidth")) + t(G.css("borderBottomWidth")), tt = t(G.css("marginTop")) + t(G.css("marginBottom")), ot = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, nt = null !== window.navigator.msMaxTouchPoints;
            return S(), M
        })
    }
});
//</editor-fold>
//#endregion 

//#region viewportChecker
//<editor-fold  defaultstate="collapsed" desc="Scroll Spy, current:viewportChecker">

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


if (typeof jQuery === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery')
}
+function ($) {
    var version = $.fn.jquery.split(' ')[0].split('.')
    if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1)) {
        throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher')
    }
}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
    'use strict';

    // SCROLLSPY CLASS DEFINITION
    // ==========================

    function ScrollSpy(element, options) {
        var process = $.proxy(this.process, this)

        this.$body = $('body')
        this.$scrollElement = $(element).is('body') ? $(window) : $(element)
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options)
        this.selector = (this.options.target || '') + ' li > a'
        this.offsets = []
        this.targets = []
        this.activeTarget = null
        this.scrollHeight = 0

        this.$scrollElement.on('scroll.bs.scrollspy', process)
        this.refresh()
        this.process()
    }

    ScrollSpy.VERSION = '3.3.1'

    ScrollSpy.DEFAULTS = {
        offset: 10
    }

    ScrollSpy.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }

    ScrollSpy.prototype.refresh = function () {
        var offsetMethod = 'offset'
        var offsetBase = 0

        if (!$.isWindow(this.$scrollElement[0])) {
            offsetMethod = 'position'
            offsetBase = this.$scrollElement.scrollTop()
        }

        this.offsets = []
        this.targets = []
        this.scrollHeight = this.getScrollHeight()

        var self = this

        this.$body
                .find(this.selector)
                .map(function () {
                    var $el = $(this)
                    var href = $el.data('target') || $el.attr('href')
                    var $href = /^#./.test(href) && $(href)

                    return ($href
                            && $href.length
                            && $href.is(':visible')
                            && [[$href[offsetMethod]().top + offsetBase, href]]) || null
                })
                .sort(function (a, b) {
                    return a[0] - b[0]
                })
                .each(function () {
                    self.offsets.push(this[0])
                    self.targets.push(this[1])
                })
    }

    ScrollSpy.prototype.process = function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
        var scrollHeight = this.getScrollHeight()
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height()
        var offsets = this.offsets
        var targets = this.targets
        var activeTarget = this.activeTarget
        var i

        if (this.scrollHeight != scrollHeight) {
            this.refresh()
        }

        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
        }

        if (activeTarget && scrollTop < offsets[0]) {
            this.activeTarget = null
            return this.clear()
        }

        for (i = offsets.length; i--;) {
            activeTarget != targets[i]
                    && scrollTop >= offsets[i]
                    && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
                    && this.activate(targets[i])
        }
    }

    ScrollSpy.prototype.activate = function (target) {
        this.activeTarget = target

        this.clear()

        var selector = this.selector +
                '[data-target="' + target + '"],' +
                this.selector + '[href="' + target + '"]'

        var active = $(selector)
                .parents('li')
                .addClass('current')

        if (active.parent('.dropdown-menu').length) {
            active = active
                    .closest('li.dropdown')
                    .addClass('current')
        }

        active.trigger('activate.bs.scrollspy')
    }

    ScrollSpy.prototype.clear = function () {
        $(this.selector)
                .parentsUntil(this.options.target, '.current')
                .removeClass('current')
    }


    // SCROLLSPY PLUGIN DEFINITION
    // ===========================

    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.scrollspy')
            var options = typeof option == 'object' && option

            if (!data)
                $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
            if (typeof option == 'string')
                data[option]()
        })
    }

    var old = $.fn.scrollspy

    $.fn.scrollspy = Plugin
    $.fn.scrollspy.Constructor = ScrollSpy


    // SCROLLSPY NO CONFLICT
    // =====================

    $.fn.scrollspy.noConflict = function () {
        $.fn.scrollspy = old
        return this
    }


    // SCROLLSPY DATA-API
    // ==================

    $(window).on('load.bs.scrollspy.data-api', function () {
        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this)
            Plugin.call($spy, $spy.data())
        })
    })

}(jQuery);


/*function setScrollSpy(){var b=[{elements:$$("#filmBollo1, #filmBollo2,\t#firstBollo1, #firstBollo2, #firstBollo3, #secondBollo1, #secondBollo2,\t#thirdBollo1, #thirdBollo2, #wallpaperBollonzo,\t#newsBolloAnna, #newsBolloFb, #newsBolloTw, #newsBolloStatusMini, #newsBolloStatusLittle, #newsBolloStatus, #footerBollonzo, section > header > p"),initProps:{transform:["scale(0)"]},endProps:{transform:["scale(1)"]},animation:{duration:300,transition:Fx.Transitions.Back.easeOut}},{elements:$("wallpaperiMac"),
 initProps:{"background-position":"-507px 0",opacity:0},endProps:"auto",animation:{duration:600,transition:Fx.Transitions.Quint.easeOut}},{elements:$$("#wallpaperiPad, #wallpaperiPhone"),initProps:{"background-position":"0 244px",opacity:0},endProps:"auto",animation:{duration:600,transition:Fx.Transitions.Quint.easeOut}},{elements:$$("section > header > hr, section > header > p > span"),initProps:{opacity:0},endProps:"auto"},{elements:$$("section > header > h2 > span, section > header > h3 > span"),
 initProps:{"margin-top":-44},endProps:"auto"},{elements:$$("#biografia > section > section > header, #biografia > section > section > hr, #biografia > section > section > article, #biografia > header > h4, #biografia > header > h5"),initProps:{opacity:0},endProps:"auto"},{elements:$$("#filmografia > section > section > *"),initProps:{opacity:0},endProps:"auto"},{elements:$$("#immagini > nav > a"),initProps:{opacity:0,"margin-top":-200},endProps:"auto"},{elements:$("tendinaFooterSx"),initProps:{left:0},
 endProps:{left:-763}},{elements:$("tendinaFooterDx"),initProps:{left:763},endProps:{left:1526}}];(new ScrollSpyIt({offset:150,delay:300,config:b})).initScrollSpy()}*/

//</editor-fold>
//#endregion 

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

            //if (_slides.length <= 1)
            //    return;
            _slides = null;

            // preload all images
            element.imagesLoaded(function () {
                //alert("images loaded");
                that._changeSlide('next');
                setTimeout(function () {
                    // alert("remove spinner");
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

//#region clubes Full
//<editor-fold defaultstate="collpased" desc="clubes Full">
var ClubFull = (function () {
    var $items = $('.clubWrap li,.direcWrap li'),
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
                            console.log("Ajax no activo, ha ocurrido un error. club/direc");
                            $.Metro.initSidebars($item);
                            $.Metro.initBannerCircle(qq);
                            sidebarUpdate($item);

                            initNotiAndvents($item);

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

//#region centros investigacion no funca
var centrosInvestigacionz = (function () {

    $items = $('.centrosWrap > li'),
    // current expanded item's index
    current = -1,
    // position (top) of the expanded item
    // used to know if the preview will expand in a different row
    previewPos = -1,
    // extra amount of pixels to scroll the window
    scrollExtra = 0,
    // extra margin when expanded (between preview overlay and the next items)
    marginExpanded = 10,
    //$window = $(window), winsize = getWinSize(),
    $window = $(window), winsize = getWinSize(),
    $body = $('BODY'),
    // transitionend events
    transEndEventNames = {
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd',
        'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
    // support for csstransitions
    support = Modernizr.csstransitions,
    // default settings
    settings = {
        minHeight: 500,
        speed: 350,
        easing: 'ease',
        showVisitButton: true
    };

    function init(config) {

        // the settings..
        settings = $.extend(true, {}, settings, config);
        // save item´s size and offset
        saveItemInfo(true);
        // get window´s size
        getWinSize();
        // initialize some events
        initEvents();

    }


    // saves the item´s offset top and height (if saveheight is true)
    function saveItemInfo(saveheight) {
        $items.each(function () {
            var $item = $(this);
            $item.data('offsetTop', $item.offset().top);
            if (saveheight) {
                $item.data('height', $item.height());
            }
        });
    }

    function initEvents() {

        // when clicking an item, show the preview with the item´s info and large image.
        // close the item if already expanded.
        // also close if clicking on the item´s cross
        initItemsEvents($items);

        // on window resize get the window´s size again
        // reset some values..
        $window.on('debouncedresize', function () {

            scrollExtra = 0;
            previewPos = -1;
            // save item´s offset
            saveItemInfo();
            getWinSize();
            var preview = $.data(this, 'preview');
            if (typeof preview != 'undefined') {
                hidePreview();
            }

        });

    }

    function initItemsEvents($items) {
        $items.on('click', 'span.og-close', function () {
            hidePreview();
            return false;
        }).children('a').on('click', function (e) {

            var $item = $(this).parent();
            // check if item already opened
            current === $item.index() ? hidePreview() : showPreview($item);
            return false;

        });
    }

    function getWinSize() {
        winsize = { width: $window.width(), height: $window.height() };
    }

    function showPreview($item) {

        var preview = $.data(this, 'preview'),
			// item´s offset top
			position = $item.data('offsetTop');

        scrollExtra = 0;

        // if a preview exists and previewPos is different (different row) from item´s top then close it
        if (typeof preview != 'undefined') {

            // not in the same row
            if (previewPos !== position) {
                // if position > previewPos then we need to take te current preview´s height in consideration when scrolling the window
                if (position > previewPos) {
                    scrollExtra = preview.height;
                }
                hidePreview();
            }
                // same row
            else {
                preview.update($item);
                //preview.open();
                return false;
            }

        }

        // update previewPos
        previewPos = position;
        // initialize new preview for the clicked item
        preview = $.data(this, 'preview', new Preview($item));
        // expand preview overlay
        // preview.open();

    }

    function hidePreview() {
        current = -1;
        var preview = $.data(this, 'preview');
        preview.close();
        $.removeData(this, 'preview');
    }

    // the preview obj / overlay
    function Preview($item) {
        this.$item = $item;
        this.expandedIdx = this.$item.index();
        this.create();
        this.update();
    }

    Preview.prototype = {
        create: function () {
            this.$previewEl = this.$item.find('.og-expander');
            if (support) {
                this.setTransition();
            }
        },
        update: function ($item) {

            if ($item) {
                this.$item = $item;
            }
            var oldcurrent = current;
            var oldprev = this.$previewEl;
            // update current value
            current = this.$item.index();
            this.expandedIdx = current;
            this.$previewEl = this.$item.find('.og-expander');
            if (support) {
                this.setTransition();
            }

            if (!this.$item.data('ajaxLoad')) {
                var qq = $(this.$item.find(".og-details"));
                var qq3 = this.$item;
                $.ajax({
                    type: "get",
                    url: Liferay.ThemeDisplay.getLayoutURL().match(reg)[0] + 'ajax?artID=' + qq.data('ajax-artid') + '&groupID=' + qq.data('ajax-groupid'),
                    success: function (data) {
                        var sss = $('#ajax-dcm', data);
                        qq.html(sss.html());
                        sss = data = null;
                        //init componentets
                        $.Metro.initSidebars(qq3);
                        $.Metro.initPagination(qq3);
                        initNotiAndvents(qq3);
                        sidebarUpdate(qq3);
                        //set loaded
                        qq3.data('ajaxLoad', true);
                        qq3 = null;
                    },
                    error: function () {
                        console.log("error ajax on centro investigación");
                        qq3.data('ajaxLoad', true);
                        //init componentets
                        $.Metro.initSidebars(qq3);
                        $.Metro.initPagination(qq3);
                        initNotiAndvents(qq3);
                        sidebarUpdate(qq3);
                        qq3 = null;
                    }
                });
            }

            if (this.$item.data('ajaxLoad')) {
                sidebarUpdate(this.$item);
            }

            this.open();
            // if already expanded remove class "og-expanded" from current item and add it to new item
            setTimeout($.proxy(function () {
                if (oldcurrent !== -1) {
                    var $currentItem = $items.eq(oldcurrent);
                    $currentItem.removeClass('og-expanded');

                    oldprev.css('height', 0);
                    $currentItem.css('height', $currentItem.data('height'));
                    oldprev = null;

                }
            }, this), 150);

        },
        open: function () {

            setTimeout($.proxy(function () {
                // set the height for the preview and the item
                this.setHeights();
                // scroll to position the preview in the right place
                this.positionPreview();
            }, this), 25);

        },
        close: function () {

            var self = this,
				onEndFn = function () {
				    if (support) {
				        $(this).off(transEndEventName);
				    }
				    self.$item.removeClass('og-expanded');
				    //added
				    var position = self.$item.data('offsetTop'),
                        scrollVal = position - 180;
				    $body.animate({ scrollTop: scrollVal }, settings.speed);

				    //self.$previewEl.remove();
				};

            setTimeout($.proxy(function () {

                this.$previewEl.css('height', 0);
                // the current expanded item (might be different from this.$item)
                var $expandedItem = $items.eq(this.expandedIdx);
                $expandedItem.css('height', $expandedItem.data('height')).on(transEndEventName, onEndFn);

                if (!support) {
                    onEndFn.call();
                }

            }, this), 25);

            return false;

        },
        calcHeight: function () {

            //var heightPreview = winsize.height - 80,// - this.$item.data('height') - marginExpanded,
            var heightPreview = winsize.height;
            itemHeight = heightPreview + this.$item.data('height') + 30;

            //if (heightPreview < settings.minHeight) {
            //    heightPreview = settings.minHeight;
            //    itemHeight = settings.minHeight + this.$item.data('height') + marginExpanded;
            //}

            this.height = heightPreview;
            this.itemHeight = itemHeight;

        },
        setHeights: function () {

            var self = this,
				onEndFn = function () {
				    if (support) {
				        self.$item.off(transEndEventName);
				    }
				    self.$item.addClass('og-expanded');
				};

            this.calcHeight();
            this.$previewEl.css('height', this.height);
            this.$item.css('height', this.itemHeight).on(transEndEventName, onEndFn);

            if (!support) {
                onEndFn.call();
            }

        },
        positionPreview: function () {

            // scroll page
            // case 1 : preview height + item height fits in window´s height
            // case 2 : preview height + item height does not fit in window´s height and preview height is smaller than window´s height
            // case 3 : preview height + item height does not fit in window´s height and preview height is bigger than window´s height
            var position = this.$item.data('offsetTop'),
				previewOffsetT = this.$previewEl.offset().top - scrollExtra,
				//scrollVal = this.height + this.$item.data('height') + marginExpanded <= winsize.height ? position : this.height < winsize.height ? previewOffsetT - (winsize.height - this.height) : previewOffsetT;
               // scrollVal = position + 20;
               scrollVal = $(this.$item.find(".og-details")).offset().top - 50;
            $body.animate({ scrollTop: scrollVal }, settings.speed);

        },
        setTransition: function () {
            this.$previewEl.css('transition', 'height ' + settings.speed + 'ms ' + settings.easing);
            this.$item.css('transition', 'height ' + settings.speed + 'ms ' + settings.easing);
        },
        getEl: function () {
            return this.$previewEl;
        }

    }
    function sidebarUpdate(itemx) {

        //sidebar update
        var sidebar = itemx.find('[data-role=sidebar]'),
                tabs = $(sidebar.children("nav")).find("a"),
                full_viewx = $(sidebar.children(".full-content")),
                frames = full_viewx.children(".slic");
        tabs.each(function () {
            $(this).parent().removeClass("active");
        });

        frames.hide();
        $(frames.get(0)).show();

        var cssx = $(tabs.get(1)).css("background-color");

        sidebar.css("background-color", cssx);
        full_viewx.css("background-color", cssx);


        sidebar = full_viewx = tabs = cssx = null;

    }
    function initNotiAndvents(itemx) {
        var notiWrap = itemx.find('.noticiasWrap'),
            notiViewer = notiWrap.find('.noti-viewer'),
            noti_items = notiWrap.find('.noti-item'),

            eventWrap = itemx.find('.eventosWrap'),
            event_items = eventWrap.find('.item-evento');


        notiWrap.find('[data-role=sharex]').each(function () {
            var that = $(this);
            fixedUrls(that);
            that = null;
        });

        //init notis
        noti_items.each(function () {
            var that = $(this);
            that.click(function () {
                var that2 = $(this);
                notiViewer.fadeOut(function () {
                    notiViewer.html(that2.find('.oculto').html()).fadeIn();
                    that2 = null;
                });

            });
            that = null;
        });
        notiViewer.html($(noti_items.get(0)).find('.oculto').html());
        //init events
        event_items.each(function () {
            var that = $(this), openclose = that.find('a.fg-yellow'),
                openx = $(openclose.get(0)),
                closex = $(openclose.get(1));

            openx.click(function () {
                var event_desc = that.find('.event-desc');
                that.data("opened", true);
                that.addClass("active");
                event_desc.slideToggle();
                event_desc = null;
                return false;
            });
            closex.click(function () {
                var event_desc = that.find('.event-desc');
                that.data("opened", false);

                event_desc.slideToggle(function () {
                    that.removeClass("active");
                });
                event_desc = null;
                return false;
            });

            openx = closex = null;
        });

        noti_items = eventWrap = event_items = notiWrap = null;
    }
    return {
        init: init
    };

});//();
//#endregion

//#region nucleo de investigadores
$(function () {

    $('.tab-panels .tabs li').on('click', function () {
        var $panel = $(this).closest('.tab-panels');

        $panel.find('.tabs li.active').removeClass('active');
        $(this).addClass('active');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        //hide current panel
        $panel.find('.panel.active').fadeOut(200, showNextPanel);

        //show next panel
        function showNextPanel() {
            $(this).removeClass('active');

            $('#' + panelToShow).fadeIn(200, function () {
                $(this).addClass('active');
            });
        }
    });
});
//Banner inicio NDI
$(function () {
    //settings for slider
    var width = 990;
    var animationSpeed = 1000;
    var pause = 8000;
    var currentSlide = 1;
    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.sli', $slider);
    var interval;
    function startSlider() {
        interval = setInterval(function () {
            $slideContainer.animate({ 'margin-left': '-=' + width }, animationSpeed, function () {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();
});
//Desplegar seminario NDI
$(function () {
    $('#collapsible .cuerpo').hide();
    $('#collapsible .cabecera').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).next().slideUp();
        } else {
            $('#collapsible .cabecera').removeClass('active');
            $(this).addClass('active');
            $('#collapsible .cuerpo').slideUp();
            $(this).next().slideDown();
        }

    });
});
//Desplegar Noticias Especiales
$(function () {
    $('.noticias .noti').slideUp();
    /****************************************************************************/
    //Funcion para calcular el numero de secciones que tiene el slider-inner
    var c = $('.noticias .noti.activado div.contenedor');
    var s = c.find('.inner');
    var n = s.length;
    var ci = $('.slider-inner');
    ci.css('width', 100 * n + '%');
    s.css('width', 100 / n + '%');
    s.css('padding', '10px');

    var prev = $('.anterior');
    var next = $('.siguiente');

    if ($('.noticias div.noti.activado')) {
        ci.css('left', 0);
    }
    /****************************************************************************/
    $('.noticias .tabla li').on('click', function () {

       
        var $panel = $(this).closest('.noticias');

        if ($(this).hasClass('activado')) {
            $('.noticias .tabla li').removeClass('activado');
            $panel.find('.noti.activado').slideUp(300);
            return;
        }

        $panel.find('.tabla li.activado').removeClass('activado');
        $(this).addClass('activado');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');


        //hide current panel
        $panel.find('.noti.activado').slideUp(300, showNextPanel);

        //show next panel
        function showNextPanel() {
            $(this).removeClass('activado');
            $('#' + panelToShow).slideDown(500, function () {
                $(this).addClass('activado');

                /****************************************************************************/
                //Funcion para calcular el numero de secciones que tiene el slider-inner
                var c = $('.noticias .noti.activado div.contenedor');
                var s = c.find('.inner');
                var n = s.length;
                var ci = $('.slider-inner');
                ci.css('width', 100 * n + '%');
                s.css('width', 100 / n + '%');
                s.css('padding', '10px');

                var prev = $('.anterior');
                var next = $('.siguiente');
                
                if ($('.noticias div.noti.activado')) {
                    ci.css('left', 0);
                }
                
                //Funcion para mover las secciones
                    var i = 0;
                    function mover() {
                        if (i === 0) {
                            ci.css('left', 0);
                        } else if (i > 0) {
                            ci.css('left', '-' + 100 * i + '%');
                        }
                    }

                    next.on('click', function () {
                        if (i < n - 1) {
                            i++;
                            mover();

                        }
                    });

                    prev.on('click', function () {
                        if (i > 0) {
                            i--;
                            mover();

                        }
                    });
               /*********************************************************/
                

            });
        }
    });

});
//Noticias Especiales secciones
/*
$(function () {
    if ($('.noticias .noti').hasClass('activado')) {       
        var c = $('.contenedor');
        var s = c.find('.inner');
        var n = s.length;
        var ci = $('.slider-inner');
        ci.css('width', 100 * n + '%');
        alert('length' + n);
        s.css('width', 100 / n + '%');
        s.css('padding', '10px');

        var prev = $('.anterior');
        var next = $('.siguiente');
           
        //Funcion para mover las secciones
        var i = 0;
        function mover() {
            if (i === 0) {
                ci.css('left', 0);
            } else if (i > 0) {
                ci.css('left', '-' + 100 * i + '%');
            }
        }
  
        next.on('click', function () {
            if (i < n - 1) {
                i++;
                mover();
               
            }
        });

        prev.on('click', function () {
            if (i > 0) {
                i--;
                mover();
                
            }
        });
    }
});
*/

//#endregion

//#region centros investigación
var centrosInvestigacion = (function () {

    var $items = $('.centrosWrap > li, .nucleoWrap'),
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
                    var qq = $($item.find(".pan-l"));

                    $.ajax({
                        type: "get",
                        url: Liferay.ThemeDisplay.getLayoutURL().match(reg)[0] + 'ajax?artID=' + qq.data('ajax-artid') + '&groupID=' + qq.data('ajax-groupid'),
                        //url: 'http://181.113.57.115/ajax?artID=11841&groupID=10181',
                        success: function (data) {
                            var sss = $('#ajax-dcm', data);
                            qq.html(sss.html());
                            sss = data = null;
                            $.Metro.initDropdowns($item);
                            $.Metro.initPulls($item);
                            $.Metro.initSidebars($item);
                            $.Metro.initPagination($item);
                            initNotiAndvents($item);
                            sidebarUpdate($item);
                            $item.data('ajaxLoad', true);
                            qq = null;
                        },
                        error: function () {
                            console.log("error ajax on centro investigación");
                            $item.data('ajaxLoad', true);
                            //init componentets
                            $.Metro.initDropdowns($item);
                            $.Metro.initSidebars($item);
                            $.Metro.initPagination($item);
                            initNotiAndvents($item);
                            sidebarUpdate($item);
                            qq = null;
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
                return false;

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
                full_viewx = $(sidebar.children(".full-content")),
                frames = full_viewx.children(".slic");
        tabs.each(function () {
            $(this).parent().removeClass("active");
        });

        frames.hide();
        $(frames.get(0)).show();
        $(tabs.get(1)).parent().addClass("active");

        var cssx = $(tabs.get(1)).css("background-color");

        sidebar.css("background-color", cssx);
        full_viewx.css("background-color", cssx);


        sidebar = full_viewx = tabs = cssx = null;

    }

    function initNotiAndvents(itemx) {
        var notiWrap = itemx.find('.noticiasWrap'),
            notiViewer = notiWrap.find('.noti-viewer'),
            noti_items = notiWrap.find('.noti-item'),

            eventWrap = itemx.find('.eventosWrap'),
            event_items = eventWrap.find('.item-evento');


        notiWrap.find('[data-role=sharex]').each(function () {
            var that = $(this);
            fixedUrls(that);
            that = null;
        });

        //init notis
        noti_items.each(function () {
            var that = $(this);
            that.click(function () {
                var that2 = $(this);
                notiViewer.fadeOut(function () {
                    notiViewer.html(that2.find('.oculto').html()).fadeIn();
                    that2 = null;
                });

            });
            that = null;
        });
        notiViewer.html($(noti_items.get(0)).find('.oculto').html());

        //init events
        event_items.each(function () {
            var that = $(this), openclose = that.find('a.fg-yellow'),
                openx = $(openclose.get(0)),
                closex = $(openclose.get(1));

            openx.click(function () {
                var event_desc = that.find('.event-desc');
                that.data("opened", true);
                that.addClass("active");
                event_desc.slideToggle();
                event_desc = null;
                return false;
            });
            closex.click(function () {
                var event_desc = that.find('.event-desc');
                that.data("opened", false);
                event_desc.slideToggle(function () {
                    that.removeClass("active");
                });
                event_desc = null;
                return false;
            });

            openx = closex = null;
        });

        //init proyectos
        console.log("v 1.0.0");
        var panelWrap = $(".proyectosWrap");
        var showProyectos1 = $(".showProyectos1");
        var showProyectos2 = $(".showProyectos2");

        var panelProyecto1 = $(".panelProyecto1");
        var panelProyecto2 = $(".panelProyecto2");

        var hidex = $(".hide-proyectos");
        hidex.click(function (e) {

            panelProyecto1.removeClass("visible").fadeOut();
            panelProyecto2.removeClass("visible").fadeOut();
            panelWrap.fadeIn();

        });
        showProyectos1.click(function (e) {

            panelProyecto2.removeClass("visible animated fadeInLeftBig").fadeOut();
            panelWrap.fadeOut();
            panelProyecto1.addClass("visible animated fadeInRightBig").fadeIn();

        });

        showProyectos2.click(function (e) {

            panelProyecto1.removeClass("visible animated fadeInRightBig").fadeOut();
            panelWrap.fadeOut();
            panelProyecto2.addClass("visible animated fadeInLeftBig").fadeIn();


        });

        noti_items = eventWrap = event_items = notiWrap = null;
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

function onloadX() {
    setTimeout(function () {
        $('#logo1').addClass("animated zoomOutUp");
        $('#logo2').removeClass("oculto");
        $('#logo2').addClass("animated zoomIn");
    }, 4500);


    NoticiasFull().init();
    ClubFull().init();
    centrosInvestigacion().init();
    //ley transparencia hyperlink
    $('#ley-tras-launch').on("click", function () {
        $('#dock').trigger("click");
        $('#popup-ley-trans').trigger("click");

    });

    //featured isotope
    var $container3 = jQuery('div.isofeatured');
    if ($container3.length) {
        $container3.isotope({
            // options
            itemSelector: '.isobrick',
            layoutMode: 'masonry', masonry: {
                columnWidth: 5, isFitWidth: true
            }
        });
        $container3 = null;
    }

    jQuery(window).resize(function () {
        var $container3 = $('div.isofeatured');
        if ($container3.length) {
            $container3.isotope({
                // options
                itemSelector: '.isobrick',
                layoutMode: 'masonry', masonry: {
                    columnWidth: 5, isFitWidth: true
                }
            });
            $('.va-container').css({ width: $($('.one_col.half .featuredinner')[0]).width(), height: $('.va-container').height() });
        }
        $container3 = null;
    });

    if ($('.va-container').length) {
        $('.va-container').vaccordion({
            expandedHeight: 270,
            //animSpeed: 400,
            animOpacity: 0.7,
            visibleSlices: 4,
            accordionW: $('.va-container').outerWidth(),
            accordionH: $('.va-container').outerHeight(),
        });
    }


    $('.has-full-view').each(function () {

        var $overlay = $($(this).attr('href'));
        var $window = $(window);
        var w = $window.width(), h = $window.height();
        var winsize = { width: w, height: h };
        var $body = $('BODY');

        $(this).click(function (e) {
            e.preventDefault();
            $body.css('overflow-y', 'hidden');
            var clipPropLast = 'rect(0px ' + $window.width() + 'px ' + $window.height() + 'px 0px)';
            $overlay.css({
                clip: clipPropLast,
                opacity: 1,
                zIndex: 9999,
                pointerEvents: 'auto'
            });
            $overlay.removeClass("animated fadeIn fadeOut").addClass("animated fadeIn").css({ width: '100%', height: '100%' });
        });
        $($overlay.find('span.rb-close')).click(function (e) {

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
        var boletinx = $('#boletinx');
        taglib.find(".lfr-pagination-buttons").before(boletinx);
        boletinx = taglib = null;
        //qq.html(qq.children());
    }
    ///*
    if (!isMobileBrowser()) {
        $('#logo3').removeClass("oculto zoomOut").addClass("animated zoomIn");

        // /*
        //animated on scroll
        $(window).scroll(function () {
            var scrollPos = $(this).scrollTop();
            var elemx = $('#logo2');
            var log2 = $('#logo3');
            w2 = 230 - scrollPos
            if (w2 < 30) {
                //w2 = 30;
                if (scrollPos > 50)
                    $('#logo3').removeClass("oculto zoomOut").addClass("animated zoomIn");
            } else {
                if (log2.hasClass("zoomIn")) log2.removeClass("zoomIn").addClass("zoomOut");
                elemx.css({
                    'width': w2 + "px",
                    'height': w2 + "px"
                });
            }


            scrollPos = elemx = w2 = null;

        });
        //*/

        $('.og-grid.fac img').each(function () {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible scale',
                offset: 70,
                repeat: false
            });
        });

        //animate noticies
        $('.noticiesWrap .container2').addClass("oculto").each(function () {
            $(this).viewportChecker({
                classToAdd: 'visible animated fadeInUp',
                offset: 30,
                repeat: false
            });
        });

        //animate direcWrap
        $('.direcWrap .og-grid').each(function () {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible animated bounceInRight',
                offset: 70,
                repeat: false
            });
        });

        //animate titles
        $('.slide h1.adequate').each(function () {
            $(this).addClass("oculto").viewportChecker({
                classToAdd: 'visible animated boingInUp',
                offset: 80,
                repeat: false
            });
        });

        //animate club
        $('.club').each(function (i) {

            if (i < 2)
                $(this).addClass("oculto").viewportChecker({
                    classToAdd: 'visible animated fadeInLeftBig',
                    offset: 60,
                    repeat: false
                });
            else if (i > 2)
                $(this).addClass("oculto").viewportChecker({
                    classToAdd: 'visible animated fadeInRightBig',
                    offset: 60,
                    repeat: false
                });
            else
                $(this).addClass("oculto").viewportChecker({
                    classToAdd: 'visible animated fadeInUpBig',
                    offset: 60,
                    repeat: false
                });
        });
        //animate links
        $('.contentwrap .linksWrap').addClass("oculto").each(function () {
            $(this).viewportChecker({
                classToAdd: 'visible animated fadeInUpBig',
                offset: 60,
                repeat: false
            });
        });
        //animate contacto
        $('.footer .contentwrap').addClass("oculto").each(function () {
            $(this).viewportChecker({
                classToAdd: 'visible animated fadeInUpBig',
                offset: 20,
                repeat: false
            });
        });
        $('.footer .contentwrap .mapax').addClass("oculto").each(function () {
            $(this).viewportChecker({
                classToAdd: 'visible animated bounceInRight',
                offset: 0,
                repeat: false
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
        // $('#radiox').remove();
        //slides check
        $('.slide').addClass("u").slideCheck({});
        /*                                                             
         $('.homeslider.on').each(function() {
         var $this = jQuery(this);
         $this.nivoSlider({effect: 'fade', slices: 15, boxCols: 8, boxRows: 4, animSpeed: 800, pauseTime: Math.floor(Math.random() * 10001) + 3000, startSlide: 0, directionNav: false, directionNavHide: true, controlNav: false, controlNavThumbs: false, pauseOnHover: true, manualAdvance: false, prevText: 'Prev', nextText: 'Next', randomStart: false, beforeChange: function() {
         }, afterChange: function() {
         }, slideshowEnd: function() {
         }, lastSlide: function() {
         }, afterLoad: function() {
         }});
         });
         //*/
    }
    //*/    
}

//youutube thumbail http://img.youtube.com/vi/qx89ylJyeKU/0.jpg
console.log("dcmtheme reand execute; and porlets: " + typeof Liferay.allPortletsReady + ", and body: " + $('body').length);