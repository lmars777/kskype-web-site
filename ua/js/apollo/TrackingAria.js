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

define("apollo/TrackingAria",["aria"],function(){"use strict";var a=function(a){b.call(this,a)},b=function(a){window.microsoft.applications.telemetry.LogManager.initialize(a),this.defaultLogger=new window.microsoft.applications.telemetry.Logger};return a.prototype.logEvent=function(a,b){var c=new window.microsoft.applications.telemetry.EventProperties,d=b||{};c.name=a;for(var e in d)b.hasOwnProperty(e)&&c.setProperty(e,d[e]);this.defaultLogger.logEvent(c)},a});

}
/*
     FILE ARCHIVED ON 22:04:40 Jun 29, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:33:30 Nov 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.527
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.015
  esindex: 0.01
  cdx.remote: 15.918
  LoadShardBlock: 319.529 (3)
  PetaboxLoader3.datanode: 257.576 (4)
  PetaboxLoader3.resolve: 185.32 (3)
  load_resource: 156.74
*/