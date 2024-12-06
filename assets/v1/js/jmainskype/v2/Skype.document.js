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

define("Skype.document",["window","document","jquery"],function(a,b,c){"use strict";var d="en",e={body:b.body,getLocationHref:function(){return a.location.href},setLocationHref:function(b){a.location.href=b},getReferrer:function(){return b.referrer},getLanguage:function(){return b.documentElement.lang||d},isSecure:function(){return"https:"===b.location.protocol},cookieExists:function(a){return b.cookie.indexOf(a)>=0},getCookies:function(){return b.cookie.split(";")},setCookie:function(a){b.cookie=a},getDomainName:function(){var b=a.location.hostname.split(".");return b.shift(),b.join(".")},injectStyle:function(a,d){var e=b.getElementsByTagName("head")[0],f=b.createElement("link");f.rel="stylesheet",f.type="text/css",f.href=a,f.media="all",e.appendChild(f),d&&c(b.createElement("img")).attr("src",a).on("error",function(){d(),c(this).remove()})},injectScript:function(a,c){var d=b.getElementsByTagName("head")[0],e=b.createElement("script");e.type="text/javascript",c&&(e.async=!0,e.onload=c),e.src=a,d.appendChild(e)},jQElement:c(b)};return e});

}
/*
     FILE ARCHIVED ON 10:56:35 Jan 03, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:46:02 Dec 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.621
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.011
  esindex: 0.012
  cdx.remote: 23.59
  LoadShardBlock: 215.974 (3)
  PetaboxLoader3.datanode: 125.958 (4)
  load_resource: 127.928
  PetaboxLoader3.resolve: 99.199
*/