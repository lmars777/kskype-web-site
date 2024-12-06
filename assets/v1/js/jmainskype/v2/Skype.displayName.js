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

define("Skype.displayName",["Skype.cookie","Skype.user.token","Skype.ajax","Skype.settings","Skype.document","jquery","domReady!"],function(a,b,c,d,e,f){"use strict";var g,h="ready",i="tokenFail",j="error",k={},l=d.api.sessionApiUrl,m=f(".siteNavigation"),n="isAuthenticated",o="isNotAuthenticated",p=20,q=function(){A(i,r),b.on(b.READY,function(a){var b=a.skypetoken;b&&s(b)})},r=function(){if(a.exists("skype-session-token")){var b=a.getSingleValue("skype-session-token").get();""!==b&&t(b)}},s=function(a){c.get({url:l,headers:{"X-Skypetoken":a},success:u,error:v})},t=function(a){c.get({dataType:"jsonp",url:l+"?session_token="+a,context:document.body,jsonp:"jsoncallback",success:u})},u=function(a){void 0===a.status?(w(a),g=a,B(h,a)):B(j,a)},v=function(a){B(i,a)},w=function(a){var b=x(a);y(b),z()},x=function(a){var b="",c=f.trim(a.firstname),d=f.trim(a.lastname);return c&&d&&c.length+d.length<=p?b=c+" "+d:c&&c.length<=p&&(b=c),b},y=function(a){if(a.length>0){var b=m.find("[data-content-key=skypename]");b.each(function(b,c){var d=f(c);"logout"==d.parent().attr("data-link-type")?d.text("("+a+")"):d.html(a+'<span class="offscreen">: '+d.text()+"</span>")})}},z=function(){m.removeClass(o).addClass(n)},A=function(a,b){k[a]=k[a]||[],k[a].push(b)},B=function(a,b){for(var c=k[a]||[],d=0;d<c.length;++d)c[d](b)},C=function(a,b){g&&a===h?b(g):A(a,b)};return q(),{READY:h,ERROR:j,init:q,on:C,updateNavigation:w}});

}
/*
     FILE ARCHIVED ON 10:56:33 Jan 03, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:13:24 Dec 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.588
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 8.045
  LoadShardBlock: 223.922 (3)
  PetaboxLoader3.datanode: 178.904 (4)
  load_resource: 320.852
  PetaboxLoader3.resolve: 198.469
*/