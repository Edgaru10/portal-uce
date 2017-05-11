var isLocalHost = false; // bandera usada para usar url local (localhost) o url remota para pruebas de peticiones ajax
var logging = false; // bandera usada para imprimir o no logs (consola navegador web)
var cdnUrl = '//aka-cdn.uce.edu.ec/ares/perseo/common/';
/**
 * regexp (expresion regular usada en las peticiones ajax para obtener la url correcta (pagina ajax))
 * ver fixedUrls y otros dodne se use $.ajax
 */
var reg = /.*\/.*\//g;

//#region logging
/**
 * imprime logs en el navegador solo si la bandera es verdadera `logging`
 * `msg` mensaje (texto, selector u objeto) a imprimir en log del navegador
 */
function plog(msg) {
    if (logging) {
        console.log(msg);
    }
}
//#endregion


//#region scroll to top
/**
 * muestra u oculta la flechita para subir al top de la pagina
 */
$(window).scroll(function () {
    ///*
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 50;
    if (y_scroll_pos > scroll_pos_test) {
        jQuery('.top').fadeIn(1000);
        //        jQuery('.iphone').children('.top').css('display', 'none !important');
    } else {
        jQuery('.top').fadeOut(500);
    }
    y_scroll_pos = scroll_pos_test = null;
});
/**
 * al dar click en la flechita sube a la parte principal de la página
 */
jQuery('.top').click(function () {
    jQuery('html, body').animate({ scrollTop: 0 }, 1000, 'easeOutCubic'); //return false;
});
//#endregion


//#region compartir facebook, twitter, repositorio noticias

jQuery.support.cors = true;
if (typeof Liferay === 'undefined' && window.location.href.indexOf("public_html") > -1) {
    isLocalHost = true;
    cdnUrl = '/public_html/perseo/common/'
    plog("mode HTML: on");
    var Liferay = {
        ThemeDisplay: {
            getLayoutId: function () { return "1" }, getLayoutURL: function () { return "http://www.uce.edu.ec/ajax/home" },
            getPortalURL: function () { return "http://www.uce.edu.ec" }
        },
        on: function (A, G) {

        }
    };
}

/**
 * obtiene todos los elemnetos html q tengan el atributo `data-role=sharex` (ver HTML noticias y repositorio)
 * significa q aquellos son etiquetas para compartir en redes sociales, por tanto tiene urls
 * q deben ser correctos para compartir en redes sociales, por tatno llama a `fixedUrls`
 */
function createSharex() {
    $('[data-role=sharex]').each(function () {

        var that = $(this);
        fixedUrls(that);
        that = null;
    });
}

/**
 * funcion para crear los url correctos para compartir una noticia en redes sociales
 */
function fixedUrls(that) {

    if (typeof Liferay === 'undefined') {
        var qq = 'http://www.uce.edu.ec/home';
    } else {
        var qq = Liferay.ThemeDisplay.getLayoutURL();
    }
    var portal = qq.match(reg)[0] + "archive_noticias?artID=";
    var icox = '<i class="fa fa-share-alt"></i>';
    var t1 = 'https://twitter.com/intent/tweet?text=%E2%80%9C';
    var t2 = '%E2%80%9D&url=';
    var t3 = '&via=lacentralec';
    var f1 = 'http://www.facebook.com/sharer.php?u=';

    var service = that.data("sharex-service");// html data atribute q almacena q tipo de enlace es (ver html de noticias)
    if (typeof service === 'undefined') {// si no es facebook o twitter es el url para ver en el repositorio
        service = "u"
    }

    if (service == "f") {
        var urlx = encodeURI(portal + that.data("sharex-artid"));//obtener artID (id d articulo) de noticia a compartir
        var srcx = f1 + urlx; // construye url completo
        that.attr("href", srcx); // reemplaza en la etiqueta html <a> el atributo `href` con la url correcta

    } else if (service == "t") {

        var urlx = encodeURI(portal + that.data("sharex-artid"));
        var title = encodeURI(that.data("sharex-title"));
        var srcx = t1 + title + t2 + urlx + t3;
        that.attr("href", srcx);

    } else if (service == "l") {

        //http://www.uce.edu.ec/archive_noticias?artID=0001
        var srcx = portal + that.data("sharex-artid");
        that.attr("href", srcx);
        that.html(icox + " " + srcx);
    } else {
        var srcx = portal + that.data("sharex-artid");
        that.attr("href", srcx);
    }
    portal = icox = t1 = t2 = t3 = f1 = service = qq = that = null;
}
//#endregion


//#region innerNavigate
//<editor-fold  defaultstate="collapsed" desc="innerNavigate">
//Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
//easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
function goToByScroll(dataslide) {
    //alert(dataslide);
    var htmlbody = $('html,body');
    var q = $('.slide[data-slide="' + dataslide + '"]').offset().top - 45;
    htmlbody.animate({
        scrollTop: q
    }, 2500, 'easeInOutBack');
    q = htmlbody = null;
}
function innerNavigate() {
    //  /*
    var links = $('a.toSlide'),
            button = $('.scrollbut');
    if (links.length > 0) {
        //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
        links.click(function (e) {
            e.preventDefault();
            $('#dcmmenu').trigger('close.mm');
            var dataslide = $(this).attr('data-slide'); //alert(dataslide);
            goToByScroll(dataslide);
            return false;
        });
        links = null;
        //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
        button.click(function (e) {
            e.preventDefault();
            var dataslide = $(this).attr('data-slide');
            goToByScroll(dataslide);
            dataslide = null;
        });
        button = null;
        //  TweenMax.to($("#navBar"), 1.5, {delay: 0.2, scaleX: "-=0.02", scaleY: "-=0.02", repeat: -1, yoyo: true, ease: Linear.easeNone});
        //  TweenMax.to($(".one_col"), 1.5, {delay: 0.2, scaleX: "-=0.02", scaleY: "-=0.02", repeat: -1, yoyo: true, ease: Linear.easeNone});                                                                                                                                
        //  var scene = document.getElementById('scene');
        //var parallax = new Parallax(scene);
    }
}
//</editor-fold>
//#endregion 


//#region initLazyLoad, initRadio
/**
 * funcion para inicializar lazy Load en imagenes <img>, backgrounds, y scripts
 */
function initLazyLoad() {
    $(function ($) {
        $("img.lazy").Lazy({ threshold: 300 }).removeClass('lazy');
    });
}

function initRadio() {
    //TODO comprobar si radio existe, entonces inicializar
    //poner animacion nueva radio
    $.getScript(cdnUrl + "js/libs/radio.js", function () {
        plog("radio.js run");
    });
}
//#endregion


//#region onload

/**
 * funcion para inicializar el banner rotativo de facultades y biblioteca
 */
function initSlick() {
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
}

/**
 * se ejecuta cuando todos los componetes de la pagina se han cargado exitosamente
 * e inicializa todos los componentes comunes entre todas las paginas (main, facultad, general) componetnes
 * como pore jemplo cargar el topbar, inicializar los sidebar, ocultar la animacion de carga
 * cuando ha terminado esto se requiere inicializar componentes q solo se encuentran en paginas especificas
 * entonces llama a la funcion onloadX que debe estar implementada en el correspondiente archivo js
 * de main o facultad o general
 */
function initx() {
    var loadsx = $('[data-load]');
    var len = loadsx.length;
    loadsx.each(function (index, element) {
        var that = $(this);
        var urix = that.data("load");
        plog("load start:" + urix);

        $.ajax({
            type: "get",
            crossDomain: true,
            url: urix,
            contentType: 'text/plain',
            success: function (data, textStatus, xhr) {
                that.html(data);
                //that = null;
                len = len - 1;
                plog("load finish:" + urix + ";  -->" + xhr.status + " " + xhr.statusText + " len:" + len);
                if (len == 0) {// si len=0 siginica q todos los loads han sido ya descargados
                    plog("loads terminados");
                    plog("mm-menu creando: body:" + $('body').length);

                    //inicializamos menu lateral
                    $('#mm-nav-content').appendTo('#dcmmenu');

                    $("#dcmmenu").mmenu({
                        classes: "mm-slide"
                    });

                    plog("mm-menu creado body:" + $('body').length);

                    // lllamamos a la animacion de preload (desvanecimiento/ocultación)
                    $('#loader').addClass('animated bounceOutUp');
                    //damos un tiempo hasta q se desvanezca el preloader, entonces
                    setTimeout(function () {
                        plog("removiendo loader");
                        //eliminamos la animacion de carga
                        $('#loader').remove();
                        $('#loaderStyle').remove();

                        // iniciamos la navegacion (paenlito de navegacion interna)
                        plog("iniciando innerNavigate");

                        innerNavigate();

                        plog("fin  innerNavigate");
                        //animamos el body a 1, para q innerNavigate muestre al panel 1 como activo
                        $("body").animate({
                            scrollTop: 1
                        }, 1);

                        //scroll pagination, si esta noticia abierta, hacemos q se vaya al panel de noticias
                        if (window.location.search.indexOf("page=") > -1) {
                            var q = $('.slide[data-slide="' + noti_slide_num + '"]').offset().top;
                            $("body").animate({
                                scrollTop: q
                            }, 1000, 'easeInOutBack');
                        }
                    }, 1300);


                    plog("iniciando onloadX");
                    // llama a inicializa los popups de arriba ver `DockPopUp`
                    DockPopUp().init();
                    //date update
                    var dd = new Date();
                    var days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
                    var dtx = days[dd.getDay()] + " " + dd.toLocaleDateString("ec");
                    $('#dcm-date').text(dtx);
                    //inicializa todos los idgets q estan definidos en $.Metro
                    $.Metro.initAll($('body.metro'));

                    //llama a la funcion onloadX q debe estar implementada en cada archivo(main.js facultad.js general.js)
                    onloadX();

                    //inicializa el slick (banner de facultades, etc)
                    initSlick();
                    //show popup para cuando se quiere abrir un pop apenas se abre la pagina
                    //$('#popup01').trigger("click");
                    //$("#popup-onload").trigger("click");

                    //inicializa lazyloads
                    initLazyLoad();

                    plog("fin onloadX");
                    initRadio();
                }
            },
            error: function (xhr, textStatus, errorThrown) {
                len = len - 1;
                plog("error load finish:" + urix + ";  -->" + xhr.status + " " + xhr.statusText + " : " + errorThrown + " len:" + len);
            }
        });
    });


}

/**
 * ejecuta una funcion cuando todos los archivos se han descargado correctamente
 */
$(window).load(function () {
    plog("window on load eventx body:" + $('body').length);
    initx();
    createSharex();

});
//#endregion


//#region dock popup
var DockPopUp = (function () {
    var $items = $('.dock-popup'),
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
            $item.data("index", ix);
            $item.on('click', function (event) {
                $item.addClass("no-anim");
                //if (event.target != this) return;
                //event.preventDefault();
                // $('.carreraWrap').removeClass("oculto visible animated bounceInRight");
                if (!$item.data('ajaxLoad')) {
                    var qq = $($item.find(".ajax-content"));

                    $.ajax({
                        type: "get",
                        url: Liferay.ThemeDisplay.getLayoutURL().match(reg)[0] + 'ajax?artID=' + qq.data('ajax-artid') + '&groupID=' + qq.data('ajax-groupid'),
                        success: function (data) {
                            var sss = $('#ajax-dcm', data);
                            qq.append(sss.html());
                            sss = data = null;
                            //$.Metro.initSidebars($item);
                            //$.Metro.initBannerCircle(qq);
                            //sidebarUpdate($item);
                            $item.data('ajaxLoad', true);
                            $.Metro.initPanels($item);
                            switch (qq.data('func')) {
                                case "years": {
                                    yearGrid().init();
                                    $.Metro.initPdfStack(qq);
                                } break;
                                case "biblio": {
                                    //init componentets
                                    plog("biblio cargada con exito 4");
                                    $.Metro.initDropdowns($item);
                                    $.Metro.initPulls($item);
                                    $.Metro.initSidebars($item);
                                    $.Metro.initPagination($item);
                                    initNotiAndvents($item);
                                    sidebarUpdate($item);
                                    plog("biblio cargada eventos");
                                    initSlick();
                                } break;
                                default:

                            }
                        },
                        error: function () {
                            //alert("Ajax no activo, ha ocurrido un error.");
                            $item.data('ajaxLoad', true);
                            switch (qq.data('func')) {
                                case "years": {
                                    yearGrid().init();
                                    $.Metro.initPdfStack(qq);
                                } break;
                                case "biblio": {
                                    //init componentets
                                    //$.Metro.initDropdowns($item);
                                    $.Metro.initSidebars($item);
                                    $.Metro.initPagination($item);
                                    initNotiAndvents($item);
                                    sidebarUpdate($item);

                                } break;
                                default:
                            }

                        }
                    });

                }
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
                    });
                }
                else {
                    $body.css('overflow-y', 'hidden');
                }
                if ($item.data('ajaxLoad')) {
                    var qq = $($item.find(".ajax-content"));
                    switch (qq.data('func')) {
                        case "years": {

                        } break;
                        case "biblio": {
                            sidebarUpdate(qq);
                            $.Metro.initDropdowns($item);
                            $.Metro.initPulls($item);
                        } break;
                        default:

                    }
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

                        $overlay.off(transEndEventName);
                        setTimeout(function () {
                            $overlay.css('opacity', 0).on(transEndEventName, function () {
                                $overlay.off(transEndEventName).css({ clip: clipPropLast, zIndex: -1 });
                                $item.data('isExpanded', false);
                                $item.removeClass("no-anim");
                            });
                        }, 25);

                    });
                }
                else {
                    $overlay.css('z-index', -1);
                    $item.data('isExpanded', false);
                }

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

        noti_items = eventWrap = event_items = notiWrap = null;

    }
    return { init: init };
});//();

var yearGrid = (function () {
    // grid selector
    //var $selector = '.ley .',
    // list of items
    //$grid = $($selector),
    // the items
    $items = $('.ley .yearsx > li'),
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
    $body = $('.full-content.ley'),
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
            // create Preview structure:
            //this.$title = $('<h3></h3>');
            //this.$description = $('<p></p>');
            //var detailAppends = [this.$title, this.$description];
            //if (settings.showVisitButton === true) {
            //    this.$href = $('<a href="#">Visit website</a>');
            //    detailAppends.push(this.$href);
            //}
            //this.$details = $('<div class="og-details"></div>').append(detailAppends);
            //this.$loading = $('<div class="og-loading"></div>');
            //this.$fullimage = $('<div class="og-fullimg"></div>').append(this.$loading);
            //this.$closePreview = $('<span class="og-close"></span>');
            //this.$previewInner = $('<div class="og-expander-inner"></div>').append(this.$closePreview, this.$fullimage, this.$details);
            this.$previewEl = this.$item.find('.og-expander');//$('<div class="og-expander"></div>').append(this.$previewInner);
            //// append preview element to the item
            //this.$item.append(this.getEl());
            // set the transitions for the preview and the item
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

            var heightPreview = winsize.height - this.$item.data('height') - marginExpanded,
				itemHeight = winsize.height;

            if (heightPreview < settings.minHeight) {
                heightPreview = settings.minHeight;
                itemHeight = settings.minHeight + this.$item.data('height') + marginExpanded;
            }

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
                scrollVal = position - 60;
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

    return {
        init: init
    };

});//();
//#endregion


//#region document ready
/**
 *  esto se ejecuta cuando se ha leido el docmuento completo (HTML parse) no cuando se a cargado todo
 */

$(function () {
    // liferay suele cargar por ajax los porlets asi q preveeimos eso y ejecutamos esto luego de 400ms
    setTimeout(function () {
        //$('img.lazy')
    }, 400);
});
//#endregion


plog("fin dcm_common, body: " + $('body').length);