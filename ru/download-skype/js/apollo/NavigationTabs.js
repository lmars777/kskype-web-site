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

define("apollo/NavigationTabs",["apollo/window","jquery"],function(a,b){"use strict";function c(c){this.jQElement=b(c);var e=b.trim(a.getPath()),h=e+"/";b(c).find(f).each(function(){var a=[b(this).attr("href")].concat((b(this).data(g)||"").split(","));return d(b(this),h,a)===!0?!1:void 0})}function d(a,b,c){for(var d=0;d<c.length;d++){var f=c[d]?c[d].split("?")[0]:"";if("//"===b&&"/"===f||"/"!==f&&c[d]&&b.indexOf(f)>-1)return e(a),!0}return!1}function e(a){a.addClass("active"),a.attr("aria-selected",!0).attr("aria-expanded",!0),a.focus()}var f="a.genericItem",g="highlight-urls";return c});

}
/*
     FILE ARCHIVED ON 21:08:49 Jul 10, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:19:57 Nov 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.588
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 26.008
  LoadShardBlock: 117.261 (3)
  PetaboxLoader3.datanode: 128.211 (6)
  load_resource: 213.989
  PetaboxLoader3.resolve: 165.412
*/