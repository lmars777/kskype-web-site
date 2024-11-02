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



/* Footer dropdown */
$(document).ready(function() {
var selCountry;
var selTestPath = "https://web.archive.org/web/20130121124743/http://shop.skype.com/"
$("select[name=userLanguage]").change(function(){
selCountry = $(this).val();
switch(selCountry) {
case "en-us": selCountry = "/";
break;
//case 'ja': selCountry = "https://web.archive.org/web/20130121124743/https://skype-jp.instoreshop.com/";
//break;
default: selCountry = "/intl/" + selCountry + "/";
}
window.location = selCountry;
});
});

}
/*
     FILE ARCHIVED ON 12:47:43 Jan 21, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:07:02 Nov 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.465
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.008
  cdx.remote: 5.675
  LoadShardBlock: 314.028 (3)
  PetaboxLoader3.datanode: 267.961 (5)
  PetaboxLoader3.resolve: 150.252 (3)
  load_resource: 125.381 (2)
*/