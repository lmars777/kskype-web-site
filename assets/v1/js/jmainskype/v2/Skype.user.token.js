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

define("Skype.user.token",["jquery","Skype.window","Skype.settings","Skype.cookie","Skype.storage","Skype.user.preferences"],function(a,b,c,d,e,f){"use strict";var g,h={},i="message",j="ready",k="error",l="skypeToken",m=function(){f.isAuthenticated()?e.hasSessionData(l)?g=e.getSessionData(l):(n(),p()):e.removeSessionData(l)},n=function(){var b=a("iframe#skypeToken"+c.token.clientId);return 0===b.length&&(b=a("<iframe />",{id:"skypeToken"+c.token.clientId,"class":"noDesktop noMobile noTablet",src:o(),"data-role":"skypeToken"}),b.appendTo("body")),b[0]},o=function(){var a=encodeURIComponent(c.token.redirectUri),b=encodeURIComponent(c.token.clientId);return c.token.loginUri+"?client_id="+b+"&redirect_uri="+a},p=function(){b.on(i,r)},q=function(a,b){h[a]=h[a]||[],h[a].push(b)},r=function(a){if(s(a)){var b=JSON.parse(a.originalEvent.data);g=b.skypetoken,g&&e.setSessionData(l,g),u(t(b.code),b)}},s=function(a){return!!a.originalEvent&&c.token.redirectUri.indexOf(a.originalEvent.origin)>-1},t=function(a){var b=j;return 200!==a&&(b=k),b},u=function(a,b){for(var c=h[a]||[],d=0;d<c.length;++d)c[d](b)},v=function(a,b){g&&a===j?b({skypetoken:g}):q(a,b)};return m(),{on:v,READY:j,ERROR:k}});

}
/*
     FILE ARCHIVED ON 10:56:39 Jan 03, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:13:29 Dec 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.615
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.011
  esindex: 0.011
  cdx.remote: 12.147
  LoadShardBlock: 191.52 (3)
  PetaboxLoader3.datanode: 129.247 (4)
  PetaboxLoader3.resolve: 275.617 (2)
  load_resource: 258.971
*/