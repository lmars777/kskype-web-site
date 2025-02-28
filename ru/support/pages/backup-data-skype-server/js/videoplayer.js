var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

SKYPE.namespace("flash");
SKYPE.flash._player = function(url) {
	var _dynCssReady = false;

	// Dom / event manipulations
	var _getById  = (typeof jQuery != "undefined") ? function(id) { return $("#" + id)[0]; }             : YAHOO.util.Dom.get;
	var _domReady = (typeof jQuery != "undefined") ? function(callback) { $(document).ready(callback); } : function(callback) { YAHOO.util.Event.onDOMReady(callback); };

	var _removeClass = (typeof jQuery != "undefined") ? function(element, className) { $(element).removeClass(className); } : YAHOO.util.Dom.removeClass;
	var _addClass    = (typeof jQuery != "undefined") ? function(element, className) { $(element).addClass(className); }    : YAHOO.util.Dom.addClass;
	
	var _divIds = [];
	
	var _getInternetExplorerVersion = function ()
	// Returns the version of Internet Explorer or a -1
	// (indicating the use of another browser).
	{
		var rv = -1; // Return value assumes failure.
		if (navigator.appName == 'Microsoft Internet Explorer') {
			var ua = navigator.userAgent;
			var re	= new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
			if (re.exec(ua) != null)
			  rv = parseFloat( RegExp.$1 );
			}
		return rv;
	};

	var _getLang = function() {
		// get selected language from language bar
		var lang = _getById("userLanguage") && _getById("userLanguage").options[_getById("userLanguage").selectedIndex].value;

		// if no language bar, get it from html attribute (exclude 'en')
		if (!lang) {
			if ("en" != document.getElementsByTagName("html")[0].lang) {
				lang = document.getElementsByTagName("html")[0].lang;
			}
		}

		//trust cookie when no language bar on page
		if (!lang && SKYPE && SKYPE.user && SKYPE.user.Preferences) {
			lang = SKYPE.user.Preferences.getLanguage();
		}

		return lang;
	};


	var writePlayer = function(divId, width, height, conf, bgcolor) {
        var params = {
          menu: "false",
          allowscriptaccess: "always",
          allowfullscreen: "true",
          bgcolor: bgcolor,
          wmode: (conf.transparent ? "transparent" : "opaque")
        };
        var flashvars = conf;

		//autoplay rule from url
		if (document.location.href.indexOf("autoplay") > 0) {
			flashvars.autoPlay = "true";
		}

		//tracking
		if (typeof conf.tracking != "undefined" && typeof s_account != "undefined") {
			flashvars.omniAccount = s_account;
		}

		//language
		if (typeof conf.lang == "undefined") {
			//try to detect document language
			flashvars.lang = _getLang();
		}

		//avoid noflash content flicker in old Firefox and IE
		_removeClass(divId, "jsHidden");
		
        //
        // iPhone uses .mov embed code
        //
		var isIPhone = (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i));
		var hasIPhoneMovie = (typeof conf.iphoneUrl != "undefined");
		if (isIPhone && hasIPhoneMovie) {
			writeIPhone(divId, conf.iphoneUrl, width, height);
		}
		
        //
        // Using SWFObject 2.x library (http://code.google.com/p/swfobject/)
        //
		else if (typeof swfobject != "undefined" && swfobject.embedSWF) {
		    var attributes = {
              id: divId,
              name: divId
            };
            
		    swfobject.embedSWF(url, divId, width, height, "9.0.0","/i/flash/expressinstall.swf", flashvars, params, attributes);
		}
		
		//
        // Using SWFObject 1.5 library (http://blog.deconcept.com/swfobject/)
        //
        else if (typeof SWFObject != "undefined") {
            var id = "videoPlayer" + _divIds.length;
            
    		var so = new SWFObject(url, id, width, height, 9, bgcolor);
    		so.useExpressInstall('/i/flash/expressinstall.swf');
    		
    		// inject flashvars
    		for (name in flashvars) {
            	so.addVariable(name, flashvars[name]);
        	}
        	// inject params
        	for (name in params) {
            	so.addParam(name, params[name]);
        	}
    		so.write(divId);
    		
    		//Register flash div id
            _divIds.push(divId);
		}
 	};


	var writeIPhone = function(divId, url, width, height) {
		if (_getById(divId)) {
			_getById(divId).innerHTML = '<embed src="'+url+'" target="myself" width="'+width+'" height="'+height+'" controller="false" autoplay="false" scale="1" cache="true" type="video/quicktime" pluginspage="https://web.archive.org/web/20131221094415/http://www.apple.com/quicktime/download/"/>';
		}
	};
	
	//returns flash object based on original div
	var getSwf = function(divId) {
		var id = divId;
		var obj = false;
		
		//for swfobject 1.5
		for (i in _divIds) {
			if (_divIds[i] == divId) {
				id = "videoPlayer"+i;
			}
		}
		var ieVersion = _getInternetExplorerVersion();
		if (ieVersion > -1 && ieVersion < 8) {
			obj = window[id];
		}
		
		obj = document[id];
		return obj;
		// return (navigator.appName.indexOf("Microsoft") != -1 ? window[id] : document[id]);
	};


	return {
		//SKYPE.flash.VideoPlayer.write();
		write: function(divId, width, height, conf, bgcolor) {
			//error conditions
			if (arguments.length < 4 || typeof conf != "object") {
				return;
			}

			// Load dynamic css file that contains jsHidden class which hides "no flash installed" alert warning
			if (!_dynCssReady && SKYPE.loadCss) {
				SKYPE.loadCss(SKYPE.settings.assetsPath+'/i/css/dynamic.css');
				_dynCssReady = true;
			}

			_domReady(function() {
				writePlayer(divId, width, height, conf, bgcolor || "#FFFFFF");
			});
		}
		,stop: function(divId) {
			try {
				var swf = getSwf(divId);
				if (swf) {
					swf.stopVideo();
				}
			} catch(e) {}
		},
		hasFlash: function() {
			//SWFObject 2.2 
			if (typeof swfobject != "undefined" && swfobject.hasFlashPlayerVersion) { 
				return swfobject.hasFlashPlayerVersion("9.0.0");
			}
			//SWFObject 1.5 
			else if (typeof SWFObject != "undefined") {
				return true;
			} else {
			    return false;
			}
		}
	};
};

SKYPE.flash.VideoPlayer         = SKYPE.flash._player("https://web.archive.org/web/20131221094415/http://download.skype.com/share/videos/player.swf");
SKYPE.flash.BusinessVideoPlayer = SKYPE.flash._player("https://web.archive.org/web/20131221094415/http://download.skype.com/share/videos/business/player.swf");

if (SKYPE.settings.waMode == "staging") {
	SKYPE.flash.VideoPlayer         = SKYPE.flash._player("https://web.archive.org/web/20131221094415/http://download.skype.com/share/videos/player.swf");
	SKYPE.flash.BusinessVideoPlayer = SKYPE.flash._player("https://web.archive.org/web/20131221094415/http://download.skype.com/share/videos/business/player.swf");
}

}
/*
     FILE ARCHIVED ON 09:44:15 Dec 21, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:07:36 Feb 28, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.716
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.011
  esindex: 0.014
  cdx.remote: 25.403
  LoadShardBlock: 87.864 (3)
  PetaboxLoader3.datanode: 127.045 (5)
  load_resource: 203.826 (2)
  PetaboxLoader3.resolve: 156.77 (2)
*/