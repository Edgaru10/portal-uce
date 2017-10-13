var debug = false, allPortletsReady = false, versionx = 2;
plog("version script: " + versionx);

//#region notices full
var NoticiasFull = (function () {
    
    var $items = $('.noti-item'),
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

            $next.on('click', function (event) {
                $($linkNext).trigger("click");
                $close.trigger("click");
            });
            $prev.on('click', function (event) {
                $($linkPrev).trigger("click");
                $close.trigger("click");
            });
            $item.on('click', function (event) {
                //event.preventDefault();
                if ($item.data('isExpanded')) {
                    return true;
                }
                $item.data('isExpanded', true);

                /*if (!$item.data('ajaxLoad')) {
                    var qq = $($item.find(".full-content"));

                    $.ajax({
                        type: "get",
                        //url: Liferay.ThemeDisplay.getLayoutURL().match(reg)[0] + 'ajax?artID=' + qq.data('ajax-artid') + '&groupID=' + qq.data('ajax-groupid'),
                        url: 'http://localhost:49976/public_html/ajax/noticia.html',
                        //url:'http://200.93.225.30/ajax?artID=11841&groupID=10181',
                        success: function (data) {
                            var sss = $(data);

                            qq.html(sss.find('.full-content').html());
                            sss = data = null;
                            $(qq.find('[data-role=sharex]')).each(function () {

                                var that = $(this);
                                fixedUrls(that);
                                that = null;
                            });
                            $item.data('ajaxLoad', true);
                        },
                        error: function () {
                            alert("Ajax no activo, ha ocurrido un error.");
                            $(qq.find('[data-role=sharex]')).each(function () {
                                var that = $(this);
                                fixedUrls(that);
                                that = null;
                            });
                            $item.data('ajaxLoad', true);
                        }
                    });

                }
                */

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

                return false;
            });

            //added
            $($item.find('[data-role=sharex]')).each(function () {
                var that = $(this);
                fixedUrls(that);
                that = null;
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

//#region metro calendar

var METRO_LOCALE;
var METRO_WEEK_START;
var METRO_DIALOG = false;

/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
// this is a temporary solution

var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        //plog(arguments);

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        //if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        //plog(locale);

        locale = $.Metro.currentLocale;

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d: d,
                dd: pad(d),
                ddd: $.Metro.Locale[locale].days[D],
                dddd: $.Metro.Locale[locale].days[D + 7],
                m: m + 1,
                mm: pad(m + 1),
                mmm: $.Metro.Locale[locale].months[m],
                mmmm: $.Metro.Locale[locale].months[m + 12],
                yy: String(y).slice(2),
                yyyy: y,
                h: H % 12 || 12,
                hh: pad(H % 12 || 12),
                H: H,
                HH: pad(H),
                M: M,
                MM: pad(M),
                s: s,
                ss: pad(s),
                l: pad(L, 3),
                L: pad(L > 99 ? Math.round(L / 10) : L),
                t: H < 12 ? "a" : "p",
                tt: H < 12 ? "am" : "pm",
                T: H < 12 ? "A" : "P",
                TT: H < 12 ? "AM" : "PM",
                Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
    return dateFormat(this, mask, utc);
};

/*
 * End date format
 */

(function ($) {
    $.widget("metro.calendar", {
        version: "1.0.0",
        options: {
            format: "yyyy-mm-dd",
            multiSelect: false,
            startMode: 'day', //year, month, day
            weekStart: (METRO_WEEK_START != undefined ? METRO_WEEK_START : 0), // 0 - Sunday, 1 - Monday
            otherDays: false,
            date: new Date(),
            buttons: true,
            locale: $.Metro.currentLocale,
            getDates: function (d) {
            },
            click: function (d, d0) {
            },
            _storage: []
        },
        _year: 0,
        _month: 0,
        _day: 0,
        _today: new Date(),
        _event: '',
        _mode: 'day', // day, month, year
        _distance: 0,
        _events: [],
        _create: function () {
            var element = this.element;

            if (element.data('multiSelect') != undefined)
                this.options.multiSelect = element.data("multiSelect");
            if (element.data('format') != undefined)
                this.options.format = element.data("format");
            if (element.data('date') != undefined)
                this.options.date = new Date(element.data("date"));
            if (element.data('locale') != undefined)
                this.options.locale = element.data("locale");
            if (element.data('startMode') != undefined)
                this.options.startMode = element.data('startMode');
            if (element.data('weekStart') != undefined)
                this.options.weekStart = element.data('weekStart');
            if (element.data('otherDays') != undefined)
                this.options.otherDays = element.data('otherDays');

            this._year = this.options.date.getFullYear();
            this._distance = parseInt(this.options.date.getFullYear()) - 4;
            this._month = this.options.date.getMonth();

            this._day = this.options.date.getDate();
            this._mode = this.options.startMode;

            element.data("_storage", []);

            this._renderCalendar();
        },
        _renderMonth: function () {
            var year = this._year,
                    month = this._month,
                    day = this._day,
                    event = this._event,
                    feb = 28;

            if (month == 1) {
                if ((year % 100 != 0) && (year % 4 == 0) || (year % 400 == 0)) {
                    feb = 29;
                }
            }

            var totalDays = ["31", "" + feb + "", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];
            var daysInMonth = totalDays[month];
            var first_week_day = new Date(year, month, 1).getDay();

            var table, tr, td, i;

            this.element.html("");

            table = $("<table/>").addClass("bordered");

            // Add calendar header
            tr = $("<tr/>");

            $("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-previous'></i></a>").appendTo(tr);
            $("<td/>").addClass("text-center").html("<a class='btn-previous-month' href='#'><i class='icon-arrow-left'></i></a>").appendTo(tr);

            $("<td/>").attr("colspan", 3).addClass("text-center").html("<a class='btn-select-month' href='#'>" + $.Metro.Locale[this.options.locale].months[month] + ' ' + year + "</a>").appendTo(tr);

            $("<td/>").addClass("text-center").html("<a class='btn-next-month' href='#'><i class='icon-arrow-right'></i></a>").appendTo(tr);
            $("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-next'></i></a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            // Add day names
            var j;
            tr = $("<tr/>");
            for (i = 0; i < 7; i++) {
                if (!this.options.weekStart)
                    td = $("<td/>").addClass("text-center day-of-week").html($.Metro.Locale[this.options.locale].days[i + 7]).appendTo(tr);
                else {
                    j = i + 1;
                    if (j == 7)
                        j = 0;
                    td = $("<td/>").addClass("text-center day-of-week").html($.Metro.Locale[this.options.locale].days[j + 7]).appendTo(tr);

                }
            }
            tr.addClass("calendar-subheader").appendTo(table);

            // Add empty days for previos month
            var prevMonth = this._month - 1;
            if (prevMonth < 0)
                prevMonth = 11;
            var daysInPrevMonth = totalDays[prevMonth];
            var _first_week_day = ((this.options.weekStart) ? first_week_day + 6 : first_week_day) % 7;
            var htmlPrevDay = "";
            tr = $("<tr/>");
            for (i = 0; i < _first_week_day; i++) {
                if (this.options.otherDays)
                    htmlPrevDay = daysInPrevMonth - (_first_week_day - i - 1);
                td = $("<td/>").addClass("empty").html("<small class='other-day'>" + htmlPrevDay + "</small>").appendTo(tr);
            }

            var week_day = ((this.options.weekStart) ? first_week_day + 6 : first_week_day) % 7;
            //plog(week_day, week_day%7);

            for (i = 1; i <= daysInMonth; i++) {
                //plog(week_day, week_day%7);

                week_day %= 7;

                if (week_day == 0) {
                    tr.appendTo(table);
                    tr = $("<tr/>");
                }

                td = $("<td/>").addClass("text-center day").html("<a href='#'>" + i + "</a>");
                if (year == this._today.getFullYear() && month == this._today.getMonth() && this._today.getDate() == i) {
                    td.addClass("today");
                }

                var d = (new Date(this._year, this._month, i)).format('yyyy-mm-dd');
                if (this.element.data('_storage').indexOf(d) >= 0) {
                    td.find("a").addClass("selected");
                }

                td.appendTo(tr);
                week_day++;
            }

            // next month other days
            var htmlOtherDays = "";
            for (i = week_day + 1; i <= 7; i++) {
                if (this.options.otherDays)
                    htmlOtherDays = i - week_day;
                td = $("<td/>").addClass("empty").html("<small class='other-day'>" + htmlOtherDays + "</small>").appendTo(tr);
            }

            tr.appendTo(table);

            if (this.options.buttons) {
                tr = $("<tr/>").addClass("calendar-actions");
                td = $("<td/>").attr('colspan', 7).addClass("text-left").html("" +
                        "<button class='button calendar-btn-today small success'>" + $.Metro.Locale[this.options.locale].buttons[0] +
                        "</button>&nbsp;<button class='button calendar-btn-clear small warning'>" + $.Metro.Locale[this.options.locale].buttons[1] + "</button>");
                td.appendTo(tr);
                tr.appendTo(table);
            }

            table.appendTo(this.element);

            this.options.getDates(this.element.data('_storage'));
        },
        _renderMonths: function () {
            var table, tr, td, i, j;

            this.element.html("");

            table = $("<table/>").addClass("bordered");

            // Add calendar header
            tr = $("<tr/>");

            $("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-arrow-left'></i></a>").appendTo(tr);
            $("<td/>").attr("colspan", 2).addClass("text-center").html("<a class='btn-select-year' href='#'>" + this._year + "</a>").appendTo(tr);
            $("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-arrow-right'></i></a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            tr = $("<tr/>");
            j = 0;
            for (i = 0; i < 12; i++) {

                //td = $("<td/>").addClass("text-center month").html("<a href='#' data-month='"+i+"'>"+this.options.monthsShort[i]+"</a>");
                td = $("<td/>").addClass("text-center month").html("<a href='#' data-month='" + i + "'>" + $.Metro.Locale[this.options.locale].months[i + 12] + "</a>");

                if (this._month == i) {
                    td.addClass("today");
                }

                td.appendTo(tr);
                if ((j + 1) % 4 == 0) {
                    tr.appendTo(table);
                    tr = $("<tr/>");
                }
                j += 1;
            }

            table.appendTo(this.element);
        },
        _renderYears: function () {
            var table, tr, td, i, j;

            this.element.html("");

            table = $("<table/>").addClass("bordered");

            // Add calendar header
            tr = $("<tr/>");

            $("<td/>").addClass("text-center").html("<a class='btn-previous-year' href='#'><i class='icon-arrow-left'></i></a>").appendTo(tr);
            $("<td/>").attr("colspan", 2).addClass("text-center").html((this._distance) + "-" + (this._distance + 11)).appendTo(tr);
            $("<td/>").addClass("text-center").html("<a class='btn-next-year' href='#'><i class='icon-arrow-right'></i></a>").appendTo(tr);

            tr.addClass("calendar-header").appendTo(table);

            tr = $("<tr/>");

            j = 0;
            for (i = this._distance; i < this._distance + 12; i++) {
                td = $("<td/>").addClass("text-center year").html("<a href='#' data-year='" + i + "'>" + i + "</a>");
                if ((this._year) == i) {
                    td.addClass("today");
                }
                td.appendTo(tr);
                if ((j + 1) % 4 == 0) {
                    tr.appendTo(table);
                    tr = $("<tr/>");
                }
                j += 1;
            }

            table.appendTo(this.element);
        },
        _renderCalendar: function () {
            switch (this._mode) {
                case 'year':
                    this._renderYears();
                    break;
                case 'month':
                    this._renderMonths();
                    break;
                default:
                    this._renderMonth();
            }
            this._initButtons();
        },
        _initButtons: function () {
            // Add actions
            var that = this, table = this.element.find('table');

            if (this._mode == 'day') {
                table.find('.btn-select-month').on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    that._mode = 'month';
                    that._renderCalendar();
                });
                table.find('.btn-previous-month').on('click', function (e) {
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month -= 1;
                    if (that._month < 0) {
                        that._year -= 1;
                        that._month = 11;
                    }
                    that._renderCalendar();
                });
                table.find('.btn-next-month').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month += 1;
                    if (that._month == 12) {
                        that._year += 1;
                        that._month = 0;
                    }
                    that._renderCalendar();
                });
                table.find('.btn-previous-year').on('click', function (e) {
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year -= 1;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year += 1;
                    that._renderCalendar();
                });
                table.find('.calendar-btn-today').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that.options.date = new Date();
                    that._year = that.options.date.getFullYear();
                    that._month = that.options.date.getMonth();
                    that._day = that.options.date.getDate();
                    that._renderCalendar();
                });
                table.find('.calendar-btn-clear').on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    that.options.date = new Date();
                    that._year = that.options.date.getFullYear();
                    that._month = that.options.date.getMonth();
                    that._day = that.options.date.getDate();
                    that.element.data('_storage', []);
                    that._renderCalendar();

                });

                table.find('.day a').on('click', function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var d = (new Date(that._year, that._month, parseInt($(this).html()))).format(that.options.format, null);
                    var d0 = (new Date(that._year, that._month, parseInt($(this).html())));

                    if (that.options.multiSelect) {
                        $(this).toggleClass("selected");

                        if ($(this).hasClass("selected")) {
                            that._addDate(d);
                        } else {
                            that._removeDate(d);
                        }
                    } else {
                        table.find('.day a').removeClass('selected');
                        $(this).addClass("selected");
                        that.element.data('_storage', []);
                        that._addDate(d);
                    }
                    that.options.getDates(that.element.data('_storage'));
                    that.options.click(d, d0);
                });
            } else if (this._mode == 'month') {
                table.find('.month a').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._month = parseInt($(this).data('month'));
                    //that._mode = 'day';
                    that._renderCalendar();

                    //added by me                    
                    //var d = (new Date(that._year, that._month, 2)).format(that.options.format, null);                    
                    //var d0 = (new Date(that._year, that._month, 2));
                    var datex = (new Date(that._year, that._month, 2)).format("mm-yyyy", null).split('-');
                    var d = datex[0];
                    var d0 = datex[1];

                    if (that.options.multiSelect) {
                        $(this).toggleClass("selected");

                        if ($(this).hasClass("selected")) {
                            that._addDate(d);
                        } else {
                            that._removeDate(d);
                        }
                    } else {
                        table.find('.day a').removeClass('selected');
                        $(this).addClass("selected");
                        that.element.data('_storage', []);
                        that._addDate(d);
                    }
                    that.options.getDates(that.element.data('_storage'));
                    that.options.click(d, d0);
                    //fin added by me
                });
                table.find('.btn-previous-year').on('click', function (e) {
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year -= 1;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year += 1;
                    that._renderCalendar();
                });
                table.find('.btn-select-year').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._mode = 'year';
                    that._renderCalendar();
                });
            } else {
                table.find('.year a').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._year = parseInt($(this).data('year'));
                    that._mode = 'month';
                    that._renderCalendar();
                });
                table.find('.btn-previous-year').on('click', function (e) {
                    that._event = 'eventPrevious';
                    e.preventDefault();
                    e.stopPropagation();
                    that._distance -= 10;
                    that._renderCalendar();
                });
                table.find('.btn-next-year').on('click', function (e) {
                    that._event = 'eventNext';
                    e.preventDefault();
                    e.stopPropagation();
                    that._distance += 10;
                    that._renderCalendar();
                });
            }
        },
        _addDate: function (d) {
            var index = this.element.data('_storage').indexOf(d);
            if (index < 0)
                this.element.data('_storage').push(d);
        },
        _removeDate: function (d) {
            var index = this.element.data('_storage').indexOf(d);
            this.element.data('_storage').splice(index, 1);
        },
        setDate: function (d) {
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())).format('yyyy-mm-dd');
            this._addDate(r);
            this._renderCalendar();
        },
        getDate: function (index) {
            return new Date(index != undefined ? this.element.data('_storage')[index] : this.element.data('_storage')[0]).format(this.options.format);
        },
        getDates: function () {
            return this.element.data('_storage');
        },
        unsetDate: function (d) {
            var r;
            d = new Date(d);
            r = (new Date(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())).format('yyyy-mm-dd');
            this._removeDate(r);
            this._renderCalendar();
        },
        _destroy: function () {
        },
        _setOption: function (key, value) {
            this._super('_setOption', key, value);
        }
    })
})(jQuery);

(function($){
    $.Metro.initCalendars = function (area) {
        if (area != undefined) {
            $(area).find('[data-role=calendar]').calendar();
        } else {
            $('[data-role=calendar]').calendar();
        }
    };
})(jQuery);

$(window).resize(function () {
    var device_width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (device_width > 1200) {
        $(".sidebar .element-menu").show();
    } else {
        $(".sidebar .element-menu").hide();
    }
});

/**
 * metro locale, para calendario en español
 */
(function ($) {
    $.Metro.currentLocale = 'en';

    if (METRO_LOCALE != undefined) $.Metro.currentLocale = METRO_LOCALE; else $.Metro.currentLocale = 'en';
    //plog(METRO_LOCALE, $.Metro.currentLocale);

    $.Metro.Locale = {

        /** By Javier Rodríguez (javier.rodriguez at fjrodriguez.com) */
        'en': {
            months: [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
                "Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sept", "Oct", "Nov", "Dic"
            ],
            days: [
                "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
                "Do", "Lu", "Mar", "Mié", "Jue", "Vi", "Sáb"
            ],
            buttons: [
               "Hoy", "Limpiar", "Cancel", "Help", "Prior", "Next", "Finish"
            ]
        }

    };

    $.Metro.setLocale = function (locale, data) {
        $.Metro.Locale[locale] = data;
    };
})(jQuery);

$(function () {
    $.Metro.initAll($('body.metro'));
});
//#endregion 

$(window).load(function () {
    plog("window on load eventx");
});

function onloadX() {

    $('#logo3').removeClass("oculto zoomOut").addClass("animated zoomIn");

    NoticiasFull().init();

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

    //scrollbar
    //$('.full-content').each(function () {
    //    $(this).perfectScrollbar();
    //});

    //noticies add pagination
    //$(".noticiesWrap").parent().parent().parent().find(".taglib-page-iterator").appendTo(".noticiesWrap");

    ///*
    if (!isMobileBrowser()) {
        //animated on scroll
        // $('#radiox').remove();
    }

    //calendar
    
    
    $("#calendar").calendar({
        format: 'dd-mm-yyyy', //default 'yyyy-mm-dd'
        multiSelect: false, //default true (multi select date)
        startMode: 'year', //year, month, day
        date: '20-11-1994', //the init calendar date (example: '2013-01-01' or '2012-01')
        locale: 'en', // 'ru', 'ua', 'fr' or 'en', default is $.Metro.currentLocale
        otherDays: false, // show days for previous and next months,
        weekStart: 0, //start week from sunday - 0 or monday - 1

        click: function (m, y) {
            //alert(m + "/" + y);
            var qq = Liferay.ThemeDisplay.getLayoutURL();
            var portal = qq.match(reg)[0] + ($("#calendar").data('func') == 'boletin' ? "archive_boletines?month=" : ($("#calendar").data('func') == 'etica' ? "noticias_ce?month=" : ($("#calendar").data('func') == 'nucleo' ? "noticias_investigacion?month=" : "archive_noticias?month=")));
            var srcx = portal + m + "&year=" + y;
            window.location = srcx;

        }, // fired when user clicked on day, in "d" stored date
    });

    //autoclick

    $('[data-role=autoclick]').each(function () {

        var that = $(this);
        that.trigger('click');
        that = null;
    });
} 

