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

require(["Skype.ajax","Skype.cookie","Skype.document","Skype.settings","Skype.displayName","Skype.user.preferences","jquery"],function(a,b,c,d,e,f,g){"use strict";function h(a){var b=g(".cover");b.length&&b.each(function(b,c){var d=g(c).find(".row.alignBottom");a?d.show():d.hide()})}function i(){var a=g("[data-message-type=ecs]");a.length&&a.each(function(a,b){g(b).show()})}function j(){h(!0)}function k(){h(!1)}function l(){var a=b.createSingleValue(r);a.set("true"),a.store(s)}function m(){return b.exists(p)||b.exists(r)}function n(b,c){q&&a.post({url:q,data:"username="+b,success:function(a,b,d){c&&c(a,b,d)},error:function(){j()}})}function o(){m()?(i(),k()):(f.isAuthenticated()||j(),e.on(e.READY,function(a){var b=a.username;n(b,function(a,b,c){200===c.status?(i(),k(),l()):j()})}))}var p="SWA",q=d.api.webClientEligibilityApiUrl,r="ecsEligibility",s={domain:"."+c.getDomainName(),expiry:31536e6,path:"/"};o()}),require(["jquery","Skype.window"],function(a,b){"use strict";var c=b.jQElement[0].s_el||{};a("[data-message-type=ecs] [data-sc]").each(function(){var b=a(this),d=b.data("sc"),e=b.data("trackingvalue");c[d]={click:{events:"event6",eVar19:e,prop18:"D=v19"}}})});

}
/*
     FILE ARCHIVED ON 20:45:56 Jan 02, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:16:45 Dec 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.469
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.007
  esindex: 0.011
  cdx.remote: 7.474
  LoadShardBlock: 68.745 (3)
  PetaboxLoader3.datanode: 85.324 (5)
  load_resource: 236.154 (2)
  PetaboxLoader3.resolve: 172.382 (2)
*/