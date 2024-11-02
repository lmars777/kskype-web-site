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

// ----------------------------------------------------------------------------
// http://www.skypeassets.com/i/js/jquery/carousel.js
// Sroll Widget
// ----------------------------------------------------------------------------
SKYPE.namespace("components.hero");
SKYPE.components.hero = {
    //jQuery(function($) {
    //var heroScroll = {
    allLoaded: false,
    loaded: [],
    defaultBackgroundColor: "",
    autoChangeDelay: 6, // Default auto slide change delay (in seconds)
    create: function (options) {
        if (typeof options == "undefined") {
            return;
        }
        var $parent = $(options.slideParent);
        if ($parent.length == 0) {
            return;
        }
        var _self = this;
        _self.defaultBackgroundColor = $($parent).css("backgroundColor");
        // Array unique
        var _unique = function (a) {
            var r = [];
            o: for (var i = 0, n = a.length; i < n; i++) {
                for (var x = 0, y = r.length; x < y; x++) {
                    if (r[x] == a[i]) {
                        continue o;
                    }
                }
                r[r.length] = a[i];
            }
            return r;
        };
        // Check if all are loaded
        var _checkLoaded = function (a) {
            a = _unique(a);
            if (a.length > 1) {
                return false;
            }
            if (a.length == 1 && a[0] == true) {
                return true;
            } else {
                return false;
            }
        };

        // Set first image to empty and then back to original so the onload event will be fired if image is coming from cache
        var _defaultSrc = $("img.carouselMain, img.carouselMainFull", $parent).filter(":first").attr("src");
        var _$firstImage = $("img.carouselMain, img.carouselMainFull", $parent).filter(":first");

        // Modify the src with delay, otherwise IE has trouble binding the load event
        _$firstImage.attr("src", SKYPE.settings.assetsPath + "/i/images/misc/dummy.png").each(function () {
            var $img = $(this);
            setTimeout(function () {
                $img.attr("src", _defaultSrc);
            }, 100);
        });

        // After first slide, load all other slides
        _$firstImage.bind("load", function () {
            // Load other slide images in the background after the first one has been loaded
            var _slides = options.slides;
            for (var i = 0; i < _slides.length; i++) {
                _self.loaded.push(false);
            }
            for (var i in _slides) {
                var _$slideDiv = $("div.heroSlide:eq(" + (_slides[i].index - 1) + ")", $parent);
                var _$slideImage = $("img.carouselMain, img.carouselMainFull", _$slideDiv);

                if (_slides[i].bodyMarkup) {
                    $("div.copy", _$slideDiv).html(_slides[i].bodyMarkup);
                }
                if (_slides[i].imageHeight && _slides[i].imageWidth) {
                    _$slideImage.attr({ "height": _slides[i].imageHeight, "width": _slides[i].imageWidth });
                }
                if (_slides[i].imageAltText) {
                    _$slideImage.attr({ "alt": _slides[i].imageAltText });
                }

                _$slideImage.bind("load", { "_i": i }, function (e) {
                    _self.loaded[e.data._i] = true;
                    if (_checkLoaded(_self.loaded)) { // Only enable buttons once the remaining slides have loaded
                        _self.allLoaded = true;
                        SKYPE.log("Carousel: All slide images are loaded", "info");
                        $(".pagination", $parent).css({ "visibility": "visible" });
                        $(".pagination button", $parent).attr("disabled", "");
                    }
                }).each(function () {
                    var $img = $(this);
                    var uri = _slides[i].imageUri;

                    // Modify the src with delay, otherwise IE has trouble binding the load event
                    setTimeout(function () {
                        $img.attr("src", uri);
                    }, 100);
                });
            };
            _$firstImage.unbind("load");
        });

        // if autochangedelay is set in options, overwrite internal default
        if (options.autoChangeDelay) {
            _self.autoChangeDelay = options.autoChangeDelay;
        }

        var $slides = $parent.find("div.heroSlide");
        var $controls = $parent.find("ul.pagination");
        var $slideLinks = $controls.find(".invPages");
        var index = $slides.filter(".current").index() - 1;
        var $slider = $parent.find("div.heroSlides");
        var maxSlideHeight = 0;
        $slides.each(function () {
            if ($(this).innerHeight() > maxSlideHeight) {
                maxSlideHeight = $(this).innerHeight();
            }
        });
        maxSlideHeight = maxSlideHeight - parseInt($slides.filter(":first").css("paddingBottom"));

        $slider.css("height", maxSlideHeight);
        $slides.css("height", maxSlideHeight);
        showSlide(index);

        $("button", $controls).click(function (e) {
            var $this = $(this);
            var newIndex = $this.hasClass("prev") ? index - 1 :
						   $this.hasClass("next") ? index + 1 :
						   $this.hasClass("invPages") ? $slideLinks.index($this) : -1;
            showSlide(newIndex);
        });

        /* shows slide with given index */
        var timeout;
        function showSlide(newIndex) {
            newIndex = (newIndex < 0) ? $slides.length - 1 : (newIndex >= $slides.length) ? 0 : newIndex;
            if (typeof options.slides[newIndex - 1] == "undefined" || newIndex == 0) {
                $parent.css({ "backgroundColor": _self.defaultBackgroundColor });
            } else {
                if (typeof options.slides[newIndex - 1].parentBackgroundColor == "undefined" || options.slides[newIndex - 1].parentBackgroundColor == "") {
                    $parent.css({ "backgroundColor": _self.defaultBackgroundColor });
                } else {
                    $parent.css({ "backgroundColor": options.slides[newIndex - 1].parentBackgroundColor });
                }
            }
            if (_self.allLoaded && newIndex != index) {
                index = newIndex;
                $slides.stop(true, true); // stop currently running animations
                $slides.filter(".current").fadeOut(50, function () {
                    $(this).removeClass("current").hide();
                    $slides.eq(index).addClass("current");
                    $slides.eq(index).fadeIn(function () {
                    });
                });
                $slideLinks.removeClass("selected").eq(index).addClass("selected");
            }
            // Auto change slides on previously set delay
            clearTimeout(timeout);
            if (_self.autoChangeDelay > 0) {
                timeout = setTimeout(function () {
                    showSlide(index + 1);
                }, _self.autoChangeDelay * 1000);
            }
        }
        SKYPE.log("Carousel: init completed", "info");
    },
    init: function (options) {
        for (var i in options) {
            this.create(options[i]);
        }
    }
};


//Theme Product Arrow
$(document).ready(function() {
$('div.sortPrice > div.arrow').addClass('open'); 
$('div.sortArrow div.sortPrice').click(function() {

$("div.arrow", this).fadeOut(function() {

if ($(this).hasClass('open') == true) {
$('div.sortArrow div.arrow').removeClass('close').addClass('open');
$(this).removeClass('open').addClass('close');
} else {
$(this).removeClass('close').addClass('open');
$('div.sortArrow div arrow').removeClass('close').addClass('open');
}

$(this).fadeIn('fast', function() {});

});

});

});

//Modal window Video Overlay
(function ($) {
var _settings = {
width: 712,
height: 468,
overlayOpacity: .75,
id: 'modal',
src: function (sender) {
return jQuery(sender).attr('href');
},
fadeInSpeed: 0,
fadeOutSpeed: 0,
flashvars:null
}

//MODAL WINDOW
$.modal = function (options) {
return _modal(this, options);
}
$.modal.open = function () {
_modal.open();
}
$.modal.close = function () {
_modal.close();
}
$.fn.modal = function (options) {
return _modal(this, options);
}
_modal = function (sender, params) {
this.options = {
parent: null,
overlayOpacity: null,
id: null,
content: null,
width: null,
height: null,
modalClassName: null,
imageClassName: null,
closeClassName: null,
overlayClassName: null,
src: null,
flashvars:null
}
this.options = $.extend({}, options, _defaults);
this.options = $.extend({}, options, _settings);
this.options = $.extend({}, options, params);
this.close = function () {
jQuery('.' + options.modalClassName + ', .' + options.overlayClassName + ', .modal-promo').fadeOut(_settings.fadeOutSpeed, function () { jQuery(this).unbind().remove(); });
}
this.closeOverlay = function () {
jQuery('.' + options.modalClassName + ', .' + options.overlayClassName + ', .modal-promo').fadeOut(_settings.fadeOutSpeed, function () { jQuery(this).unbind().remove(); });
}
this.open = function () {
if (typeof options.src == 'function') {
options.src = options.src(sender)
} else {
options.src = options.src || _defaults.src(sender);
}

var contentHTML = '';
contentHTML = options.src;
options.content = options.content || contentHTML;

if (jQuery('.' + options.modalClassName).length && jQuery('.' + options.overlayClassName).length) {
jQuery('.' + options.modalClassName).html(options.content);
} else {
$overlay = jQuery((_isIE6()) ? '<iframe src="BLOCKED SCRIPT\'<html></html>\';" scrolling="no" frameborder="0" class="' + options.overlayClassName + '"></iframe><div class="' + options.overlayClassName + '"></div>' : '<div class="' + options.overlayClassName + '"></div>');
$overlay.hide().appendTo(options.parent);

$modal = jQuery('<div id="' + options.id + '" class="' + options.modalClassName + '" style="width:' + options.width + 'px; height:' + options.height + 'px; margin-top:-' + (options.height / 2) + 'px; margin-left:-' + (options.width / 2) + 'px;">' + '</div>');
$modal.hide().appendTo(options.parent);

$close = jQuery('#' + options.src +' .' + options.closeClassName);

//$video = jQuery('.leftColumn > #' + options.src);
$video = jQuery('.difference > #' + options.src);
$videoClone = $video.clone();

//Fixing IE problem - after cloaning FlashVars param is empty
str1 = '<PARAM NAME="FlashVars" VALUE="">';
str2 = '<PARAM NAME="FlashVars" VALUE="' + options.flashvars + '">';
newhtml = $videoClone.html().replace(str1, str2);
$videoClone.html(newhtml);

$videoClone.appendTo($modal);

//Retreiving Elements within modal window
$video = $modal.children("#" + options.src);
$close = $modal.find('.' + options.closeClassName);


var overlayOpacity = _getOpacity($overlay.not('iframe')) || options.overlayOpacity;
$overlay.fadeTo(0, 0).show().not('iframe').fadeTo(_settings.fadeInSpeed, overlayOpacity);
$modal.fadeIn(_settings.fadeInSpeed);
$video.show();

$close.click(function () { jQuery.modal().closeOverlay(); });
$overlay.click(function () { jQuery.modal().closeOverlay(); });
}
}
return this;
}
_isIE6 = function () {
if (document.all && document.getElementById) {
if (document.compatMode && !window.XMLHttpRequest) {
return true;
}
}
return false;
}
_getOpacity = function (sender) {
$sender = jQuery(sender);
opacity = $sender.css('opacity');
filter = $sender.css('filter');

if (filter.indexOf("opacity=") >= 0) {
return parseFloat(filter.match(/opacity=([^)]*)/)[1]) / 100;
}
else if (opacity != '') {
return opacity;
}
return '';
}
_defaults = {
parent: 'body',
overlayOpacity: 85,
id: 'modal',
content: null,
width: 712,
height: 468,
modalClassName: 'modal-video',
//imageClassName: 'videoBox',
closeClassName: 'closebutton',
overlayClassName: 'modal-overlay',
src: function (sender) {
return jQuery(sender).attr('href');
},
flashvars:null
}
})(jQuery);


// Begin TinySort [http://code.google.com/p/tinysort/]
(function(b){b.tinysort={id:"TinySort",version:"1.0.4",defaults:{order:"asc",attr:"",place:"start",returns:false}};b.fn.extend({tinysort:function(h,j){if(h&&typeof(h)!="string"){j=h;h=null}var e=b.extend({},b.tinysort.defaults,j);var p={};this.each(function(t){var v=(!h||h=="")?b(this):b(this).find(h);var u=e.order=="rand"?""+Math.random():(e.attr==""?v.text():v.attr(e.attr));var s=b(this).parent();if(!p[s]){p[s]={s:[],n:[]}}if(v.length>0){p[s].s.push({s:u,e:b(this),n:t})}else{p[s].n.push({e:b(this),n:t})}});for(var g in p){var d=p[g];d.s.sort(function k(t,s){var i=t.s.toLowerCase?t.s.toLowerCase():t.s;var u=s.s.toLowerCase?s.s.toLowerCase():s.s;if(c(t.s)&&c(s.s)){i=parseFloat(t.s);u=parseFloat(s.s)}return(e.order=="asc"?1:-1)*(i<u?-1:(i>u?1:0))})}var m=[];for(var g in p){var d=p[g];var n=[];var f=b(this).length;switch(e.place){case"first":b.each(d.s,function(s,t){f=Math.min(f,t.n)});break;case"org":b.each(d.s,function(s,t){n.push(t.n)});break;case"end":f=d.n.length;break;default:f=0}var q=[0,0];for(var l=0;l<b(this).length;l++){var o=l>=f&&l<f+d.s.length;if(a(n,l)){o=true}var r=(o?d.s:d.n)[q[o?0:1]].e;r.parent().append(r);if(o||!e.returns){m.push(r.get(0))}q[o?0:1]++}}return this.pushStack(m)}});function c(e){var d=/^\s*?[\+-]?(\d*\.?\d*?)\s*?$/.exec(e);return d&&d.length>0?d[1]:false}function a(e,f){var d=false;b.each(e,function(h,g){if(!d){d=g==f}});return d}b.fn.TinySort=b.fn.Tinysort=b.fn.tsort=b.fn.tinysort})(jQuery);
// End TinySort

}
/*
     FILE ARCHIVED ON 02:55:14 Jan 20, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:26:12 Nov 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.464
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 18.937
  LoadShardBlock: 319.517 (3)
  PetaboxLoader3.datanode: 349.741 (7)
  PetaboxLoader3.resolve: 172.169 (3)
  load_resource: 208.663 (2)
*/