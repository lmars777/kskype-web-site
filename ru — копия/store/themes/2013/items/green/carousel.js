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

var skype_carousel = {
	allLoaded: false,
	loaded: [],
	defaultBackgroundColor: "",
	autoChangeDelay: 6, // Default auto slide change delay (in seconds)
	paused: false,
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
		var _unique = function(a) {
			var r = [];
			o:for(var i = 0, n = a.length; i < n; i++) {
				for(var x = 0, y = r.length; x < y; x++) {
					if(r[x]==a[i]) {
						continue o;
					}
				}
				r[r.length] = a[i];
			}
			return r;
		};
		// Check if all are loaded
		var _checkLoaded = function(a) {
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
		_$firstImage.attr("src", SKYPE.settings.assetsPath+"/i/images/misc/dummy.png").each(function() {
			var $img = $(this);
			setTimeout(function() {
				$img.attr("src", _defaultSrc);
			}, 100);
		});
		
		// After first slide, load all other slides
		_$firstImage.bind("load", function() {
			// Load other slide images in the background after the first one has been loaded
			var _slides = options.slides;
			for (var i = 0; i < _slides.length; i++) {
				_self.loaded.push(false);
			}
			for (var i in _slides) {
				var _$slideDiv = $("div.heroSlide:eq("+(_slides[i].index-1)+")", $parent);
				var _$slideImage = $("img.carouselMain, img.carouselMainFull", _$slideDiv);
				
				if (_slides[i].bodyMarkup) {
					$("div.copy", _$slideDiv).html(_slides[i].bodyMarkup);
				}
				if (_slides[i].imageHeight && _slides[i].imageWidth) {
					_$slideImage.attr( {"height": _slides[i].imageHeight, "width": _slides[i].imageWidth });
				}
				if (_slides[i].imageAltText) {
					_$slideImage.attr( {"alt": _slides[i].imageAltText });
				}

				_$slideImage.bind("load", {"_i": i}, function(e) {
					_self.loaded[e.data._i] = true;
					if (_checkLoaded(_self.loaded)) { // Only enable buttons once the remaining slides have loaded
						_self.allLoaded = true;
						$(".pagination", $parent).css({"visibility": "visible"});
						//$(".pagination button", $parent).attr("disabled", "");
					}
				}).each(function() {
					var $img = $(this);
					var uri = _slides[i].imageUri;
					
					// Modify the src with delay, otherwise IE has trouble binding the load event
					setTimeout(function() {
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
		var index = $slides.filter(".current").index()-1;
		var $slider = $parent.find("div.heroSlides");
		var maxSlideHeight = 0;
		var takeover = $("body").hasClass("takeover") && $("#takeover").length;

		$slides.each(function() {
			if ($(this).innerHeight() > maxSlideHeight) {
				maxSlideHeight = $(this).innerHeight();
			}
		});
		maxSlideHeight = maxSlideHeight - parseInt($slides.filter(":first").css("paddingBottom"));
		
		$slider.animate({height: maxSlideHeight}, function(){
			$slides.css("height", maxSlideHeight);
			$("div.heroSlide:first").find("img.carouselMain").fadeIn('fast');

			if (takeover) {
				$('#takeover').height($(document).height());
				_self.paused = true;
			}

			showSlide(index);
		});

		$("button", $controls).click(function(e) {
			var $this = $(this);
			var newIndex = $this.hasClass("prev") ? index - 1 :
						   $this.hasClass("next") ? index + 1 :
						   $this.hasClass("invPages") ? $slideLinks.index($this) : -1;
			showSlide(newIndex);
		});
		
		/* shows slide with given index */
		var timeout;
		function showSlide(newIndex){
			newIndex = (newIndex < 0) ? $slides.length - 1 : (newIndex >= $slides.length) ? 0 : newIndex;
			if (typeof options.slides[newIndex-1] == "undefined" || newIndex == 0) {
				$parent.css({"backgroundColor": _self.defaultBackgroundColor});
			} else {
				if (typeof options.slides[newIndex-1].parentBackgroundColor == "undefined" || options.slides[newIndex-1].parentBackgroundColor == "") {
					$parent.css({"backgroundColor": _self.defaultBackgroundColor});
				} else {
					$parent.css({"backgroundColor": options.slides[newIndex-1].parentBackgroundColor});
				}
			}
			if (_self.allLoaded && newIndex != index) {
				index = newIndex;
				$slides.stop(true, true); // stop currently running animations
				$slides.filter(".current").fadeOut(50, function(){
					$(this).removeClass("current").hide();
					$slides.eq(index).addClass("current");
					$slides.eq(index).find("img.carouselMain, img.carouselMainFull").show();
					$slides.eq(index).hide();
					$slides.eq(index).fadeIn(500);
				});
				$slideLinks.removeClass("selected").eq(index).addClass("selected");
			}

			if (_self.paused) {
				pauseTimer = setInterval(function() {
					if (_self.paused) {
						return;
					}

					clearInterval(pauseTimer);
					pauseTimer = null;

					// Auto change slides on previously set delay
					clearTimeout(timeout);
					if (_self.autoChangeDelay > 0) {
						timeout = setTimeout(function() {
							showSlide(index + 1);
						}, _self.autoChangeDelay * 1000);
					}

				}, 500);
			} else {
				// Auto change slides on previously set delay
				clearTimeout(timeout);
				if (_self.autoChangeDelay > 0) {
					timeout = setTimeout(function() {
						showSlide(index + 1);
					}, _self.autoChangeDelay * 1000);
				}
			}
		}

		SKYPE.log("Carousel: init completed", "info");
	},
	init: function(options) {
		this.create(options);
	},
	play: function() {
		this.paused = false;
	}
};


}
/*
     FILE ARCHIVED ON 12:49:40 Jan 21, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:06:59 Nov 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.606
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 6.123
  LoadShardBlock: 368.664 (3)
  PetaboxLoader3.datanode: 271.086 (6)
  PetaboxLoader3.resolve: 195.813 (2)
  load_resource: 123.879
*/