var debug = false, noti_slide_num = 2, versionx = 2;
plog("version script: " + versionx);

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
                            plog("Ajax no activo, ha ocurrido un error. club/direc");
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

//#region INVESTIGACIÓN

//Desplegar Noticias Especiales
function initNotiEspecial() {

    $('.noticias .noti').slideUp();
    $('.noticias .tabla li').on('click', function () {
        var $panel = $(this).closest('.noticias');
        if ($(this).hasClass('activado')) {
            $('.noticias .tabla li').removeClass('activado');
            $panel.find('.noti.activado').slideUp(500);
            return;
        }

        $panel.find('.tabla li.activado').removeClass('activado');
        $(this).addClass('activado');

        //figure out which panel to show
        var panelToShow = $(this).attr('rel');

        //hide current panel
        $panel.find('.noti').slideUp(500, showNextPanel);

        //show next panel
        function showNextPanel() {
            $(this).removeClass('activado');

            $('#' + panelToShow).slideDown(500, function () {
                $(this).addClass('activado');
            });
        }
    });
}

//#endregion

//#region centros investigación
var centrosInvestigacion = (function () {

    var $items = $('.centrosWrap > li'),
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
                            initBannerni();
                            initNotiEspecial();
                            $item.data('ajaxLoad', true);
                            qq = null;
                        },
                        error: function () {
                            plog("error ajax on centro investigación");
                            $item.data('ajaxLoad', true);
                            //init componentets
                            $.Metro.initDropdowns($item);
                            $.Metro.initSidebars($item);
                            $.Metro.initPagination($item);
                            initNotiAndvents($item);
                            sidebarUpdate($item);
                            initBannerni();
                            initNotiEspecial();
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
        plog("v 1.0.0");
        var panelWrap = $(".proyectosWrap");
        var showProyectos1 = $(".showProyectos1");
        var showProyectos2 = $(".showProyectos2");
        var showProyectos3 = $(".showProyectos3");

        var panelProyecto1 = $(".panelProyecto1");
        var panelProyecto2 = $(".panelProyecto2");
        var panelProyecto3 = $(".panelProyecto3");

        var hidex = $(".hide-proyectos");

        hidex.click(function (e) {
            panelProyecto1.removeClass("visible").fadeOut();
            panelProyecto2.removeClass("visible").fadeOut();
            panelProyecto3.removeClass("visible").fadeOut();
            panelWrap.fadeIn();
        });

        showProyectos1.click(function (e) {
            panelProyecto2.removeClass("visible animated fadeInLeftBig").fadeOut();
            panelProyecto3.removeClass("visible animated fadeInLeftBig").fadeOut();
            panelWrap.fadeOut();
            panelProyecto1.addClass("visible animated fadeInRightBig").fadeIn();
        });

        showProyectos2.click(function (e) {
            panelProyecto1.removeClass("visible animated fadeInRightBig").fadeOut();
            panelProyecto3.removeClass("visible animated fadeInLeftBig").fadeOut();
            panelWrap.fadeOut();
            panelProyecto2.addClass("visible animated fadeInUpBig").fadeIn();
        });

        showProyectos3.click(function (e) {
            panelProyecto1.removeClass("visible animated fadeInRightBig").fadeOut();
            panelProyecto2.removeClass("visible animated fadeInLeftBig").fadeOut();
            panelWrap.fadeOut();
            panelProyecto3.addClass("visible animated fadeInLeftBig").fadeIn();
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

    function initBannerni() {
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
            speed: 500

        });
    }

    return { init: init };
});//();
//</editor-fold>
//#endregion 

function onloadX() {
    //Radio icono
    //$('#kast-play').hover(function () {
    //    if (!$('#kast-play').hasClass('kast-playing')) {
    //        $('#kast-play').addClass('kast-paused');
    //        $(this).removeClass('fa fa-uce_radio').css({ 'font-size': '30px' });
    //    }
      
    //})
    //$('#kast-play').mouseleave(function () {
    //    if (!$('#kast-play').hasClass('kast-playing')) {
    //        $('#kast-play').removeClass('kast-paused');
    //        $('#kast-play').addClass('fa fa-uce_radio');
    //    }
        
    //})

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

//youtube thumbail http://img.youtube.com/vi/qx89ylJyeKU/0.jpg
plog("dcmtheme reand execute; and porlets: " + typeof Liferay.allPortletsReady + ", and body: " + $('body').length);

