var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*	
*	jQuery dotdotdot 1.5.0
*	
*	Copyright (c) 2012 Fred Heusschen
*	www.frebsite.nl
*
*	Plugin website:
*	dotdotdot.frebsite.nl
*
*	Dual licensed under the MIT and GPL licenses.
*	http://en.wikipedia.org/wiki/MIT_License
*	http://en.wikipedia.org/wiki/GNU_General_Public_License
*/


(function ($) {
    if ($.fn.dotdotdot) {
        return;
    }

    $.fn.dotdotdot = function (o) {
        if (this.length == 0) {
            debug(true, 'No element found for "' + this.selector + '".');
            return this;
        }
        if (this.length > 1) {
            return this.each(
				function () {
				    $(this).dotdotdot(o);
				}
			);
        }


        var $dot = this;

        if ($dot.data('dotdotdot')) {
            $dot.trigger('destroy.dot');
        }

        $dot.bind_events = function () {
            $dot.bind(
				'update.dot',
				function (e, c) {
				    e.preventDefault();
				    e.stopPropagation();

				    opts.maxHeight = (typeof opts.height == 'number')
						? opts.height
						: getTrueInnerHeight($dot);

				    opts.maxHeight += opts.tolerance;

				    if (typeof c != 'undefined') {
				        if (typeof c == 'string' || c instanceof HTMLElement) {
				            c = $('<div />').append(c).contents();
				        }
				        if (c instanceof $) {
				            orgContent = c;
				        }
				    }

				    $inr = $dot.wrapInner('<div class="dotdotdot" />').children();
				    $inr.empty()
						.append(orgContent.clone(true))
						.css({
						    'height': 'auto',
						    'width': 'auto',
						    'border': 'none',
						    'padding': 0,
						    'margin': 0
						});

				    var after = false,
						trunc = false;

				    if (conf.afterElement) {
				        after = conf.afterElement.clone(true);
				        conf.afterElement.remove();
				    }
				    if (test($inr, opts)) {
				        if (opts.wrap == 'children') {
				            trunc = children($inr, opts, after);
				        }
				        else {
				            trunc = ellipsis($inr, $dot, $inr, opts, after);
				        }
				    }
				    $inr.replaceWith($inr.contents());
				    $inr = null;

				    if ($.isFunction(opts.callback)) {
				        opts.callback.call($dot[0], trunc, orgContent);
				    }

				    conf.isTruncated = trunc;
				    return trunc;
				}

			).bind(
				'isTruncated.dot',
				function (e, fn) {
				    e.preventDefault();
				    e.stopPropagation();

				    if (typeof fn == 'function') {
				        fn.call($dot[0], conf.isTruncated);
				    }
				    return conf.isTruncated;
				}

			).bind(
				'originalContent.dot',
				function (e, fn) {
				    e.preventDefault();
				    e.stopPropagation();

				    if (typeof fn == 'function') {
				        fn.call($dot[0], orgContent);
				    }
				    return orgContent;
				}

			).bind(
				'destroy.dot',
				function (e) {
				    e.preventDefault();
				    e.stopPropagation();

				    $dot.unwatch()
						.unbind_events()
						.empty()
						.append(orgContent)
						.data('dotdotdot', false);
				}
			);
            return $dot;
        }; //	/bind_events

        $dot.unbind_events = function () {
            $dot.unbind('.dot');
            return $dot;
        }; //	/unbind_events

        $dot.watch = function () {
            $dot.unwatch();
            if (opts.watch == 'window') {
                $(window).bind(
					'resize.dot' + conf.dotId,
					function () {
					    if (watchInt) {
					        clearInterval(watchInt);
					    }
					    watchInt = setTimeout(
							function () {
							    $dot.trigger('update.dot');
							}, 10
						);
					}
				);
            }
            else {
                watchOrg = getSizes($dot);
                watchInt = setInterval(
					function () {
					    var watchNew = getSizes($dot);
					    if (watchOrg.width != watchNew.width ||
							 watchOrg.height != watchNew.height) {
					        $dot.trigger('update.dot');
					        watchOrg = getSizes($dot);
					    }
					}, 100
				);
            }
            return $dot;
        };
        $dot.unwatch = function () {
            $(window).unbind('resize.dot' + conf.dotId);
            if (watchInt) {
                clearInterval(watchInt);
            }
            return $dot;
        };

        var orgContent = $dot.contents(),
			opts = $.extend(true, {}, $.fn.dotdotdot.defaults, o),
			conf = {},
			watchOrg = {},
			watchInt = null,
			$inr = null;

        conf.afterElement = getElement(opts.after, $dot);
        conf.isTruncated = false;
        conf.dotId = dotId++;


        $dot.data('dotdotdot', true)
			.bind_events()
			.trigger('update.dot');

        if (opts.watch) {
            $dot.watch();
        }

        return $dot;
    };


    //	public
    $.fn.dotdotdot.defaults = {
        'ellipsis': '... ',
        'wrap': 'word',
        'lastCharacter': {
            'remove': [' ', ',', ';', '.', '!', '?'],
            'noEllipsis': []
        },
        'tolerance': 0,
        'callback': null,
        'after': null,
        'height': null,
        'watch': false,
        'debug': false
    };


    //	private
    var dotId = 1;

    function children($elem, o, after) {
        var $elements = $elem.children(),
			isTruncated = false;

        $elem.empty();

        for (var a = 0, l = $elements.length; a < l; a++) {
            var $e = $elements.eq(a);
            $elem.append($e);
            if (after) {
                $elem.append(after);
            }
            if (test($elem, o)) {
                $e.remove();
                isTruncated = true;
                break;
            }
            else {
                if (after) {
                    after.remove();
                }
            }
        }
        return isTruncated;
    }
    function ellipsis($elem, $d, $i, o, after) {
        var $elements = $elem.contents(),
			isTruncated = false;

        $elem.empty();

        var notx = 'table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, select, optgroup, option, textarea, script, style';
        for (var a = 0, l = $elements.length; a < l; a++) {

            if (isTruncated) {
                break;
            }

            var e = $elements[a],
				$e = $(e);

            if (typeof e == 'undefined') {
                continue;
            }

            $elem.append($e);
            if (after) {
                var func = ($elem.is(notx))
					? 'after'
					: 'append';
                $elem[func](after);
            }
            if (e.nodeType == 3) {
                if (test($i, o)) {
                    isTruncated = ellipsisElement($e, $d, $i, o, after);
                }
            }
            else {
                isTruncated = ellipsis($e, $d, $i, o, after);
            }

            if (!isTruncated) {
                if (after) {
                    after.remove();
                }
            }
        }
        return isTruncated;
    }
    function ellipsisElement($e, $d, $i, o, after) {
        var isTruncated = false,
			e = $e[0];

        if (typeof e == 'undefined') {
            return false;
        }

        var seporator = (o.wrap == 'letter') ? '' : ' ',
			textArr = getTextContent(e).split(seporator),
			position = -1,
			midPos = -1,
			startPos = 0,
			endPos = textArr.length - 1;

        while (startPos <= endPos) {
            var m = Math.floor((startPos + endPos) / 2);
            if (m == midPos) {
                break;
            }
            midPos = m;

            setTextContent(e, textArr.slice(0, midPos + 1).join(seporator) + o.ellipsis);

            if (!test($i, o)) {
                position = midPos;
                startPos = midPos;
            }
            else {
                endPos = midPos;
            }
        }

        if (position != -1) {
            var txt = textArr.slice(0, position + 1).join(seporator);
            isTruncated = true;

            while ($.inArray(txt.slice(-1), o.lastCharacter.remove) > -1) {
                txt = txt.slice(0, -1);
            }
            if ($.inArray(txt.slice(-1), o.lastCharacter.noEllipsis) < 0) {
                txt += o.ellipsis;
            }
            setTextContent(e, txt);
        }
        else {
            var $w = $e.parent();
            $e.remove();
            $n = $w.contents().eq(-1);

            isTruncated = ellipsisElement($n, $d, $i, o, after);
        }

        return isTruncated;
    }
    function test($i, o) {
        return $i.innerHeight() > o.maxHeight;
    }
    function getSizes($d) {
        return {
            'width': $d.innerWidth(),
            'height': $d.innerHeight()
        };
    }
    function setTextContent(e, content) {
        if (e.innerText) {
            e.innerText = content;
        }
        else if (e.nodeValue) {
            e.nodeValue = content;
        }
        else if (e.textContent) {
            e.textContent = content;
        }
    }
    function getTextContent(e) {
        if (e.innerText) {
            return e.innerText;
        }
        else if (e.nodeValue) {
            return e.nodeValue;
        }
        else if (e.textContent) {
            return e.textContent;
        }
        else {
            return "";
        }
    }
    function getElement(e, $i) {
        if (typeof e == 'undefined') {
            return false;
        }
        if (!e) {
            return false;
        }
        if (typeof e == 'string') {
            e = $(e, $i);
            return (e.length)
				? e
				: false;
        }
        if (typeof e == 'object') {
            return (typeof e.jquery == 'undefined')
				? false
				: e;
        }
        return false;
    }
    function getTrueInnerHeight($el) {
        var h = $el.innerHeight(),
			a = ['paddingTop', 'paddingBottom'];

        for (z = 0, l = a.length; z < l; z++) {
            var m = parseInt($el.css(a[z]), 10);
            if (isNaN(m)) {
                m = 0;
            }
            h -= m;
        }
        return h;
    }
    function debug(d, m) {
        if (!d) {
            return false;
        }
        if (typeof m == 'string') {
            m = 'dotdotdot: ' + m;
        }
        else {
            m = ['dotdotdot:', m];
        }

        if (window.console && window.console.log) {
            window.console.log(m);
        }
        return false;
    }


    //	override jQuery.html
    var _orgHtml = $.fn.html;
    $.fn.html = function (str) {
        if (typeof str != 'undefined') {
            if (this.data('dotdotdot')) {
                if (typeof str != 'function') {
                    return this.trigger('update', [str]);
                }
            }
            return _orgHtml.call(this, str);
        }
        return _orgHtml.call(this);
    };


    //	override jQuery.text
    var _orgText = $.fn.text;
    $.fn.text = function (str) {
        if (typeof str != 'undefined') {
            if (this.data('dotdotdot')) {
                var temp = $('<div />');
                temp.text(str);
                str = temp.html();
                temp.remove();
                return this.trigger('update', [str]);
            }
            return _orgText.call(this, str);
        }
        return _orgText.call(this);
    };


})(jQuery);

}
/*
     FILE ARCHIVED ON 02:54:15 Jan 20, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:26:16 Nov 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.579
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.011
  esindex: 0.011
  cdx.remote: 8.95
  LoadShardBlock: 298.08 (3)
  PetaboxLoader3.datanode: 279.703 (7)
  PetaboxLoader3.resolve: 212.876 (3)
  load_resource: 228.016 (2)
*/