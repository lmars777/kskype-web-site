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

define("apollo/tracking.aria",["apollo/document","apollo/user","apollo/user.preferences","apollo/settings","apollo/responsive","apollo/TrackingAria"],function(a,b,c,d,e,f){"use strict";var g=a.getEnvironment(),h=b.getLanguageCode(),i=c.isAuthenticated()?"1":"0",j=$("html").data("pagepath"),k=k||new f(d.errorsLogger.token),l=function(a,b){var c={env:g,lang:h,auth:i,pagename:j,responsive:e.getCurrentState(),err:n(a,"error"),requireType:a&&a.requireType?a.requireType:"",modules:a&&a.requireModules?a.requireModules:"",method:b};k.logEvent("consoleError",c)},m=function(a,b){var c={env:g,lang:h,auth:i,pagename:j,responsive:e.getCurrentState(),eventName:a,eventProperties:n(b,"")};k.logEvent("event",c)},n=function(a,b){return"object"==typeof a&&null!==a?JSON.stringify(a):a?a:b};return{logConsoleError:l,logEvent:m}});

}
/*
     FILE ARCHIVED ON 22:04:39 Jun 29, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:33:28 Nov 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 6.354
  exclusion.robots: 0.059
  exclusion.robots.policy: 0.043
  esindex: 0.014
  cdx.remote: 21.766
  LoadShardBlock: 305.681 (3)
  PetaboxLoader3.datanode: 185.053 (4)
  PetaboxLoader3.resolve: 231.339 (2)
  load_resource: 140.42
*/