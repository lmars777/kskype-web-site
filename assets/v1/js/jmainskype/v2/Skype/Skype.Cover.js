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

define("Skype.Cover",["jquery","modernizr","Skype.scroll","Skype.window","Skype.responsive","Skype.localisation","domReady!"],function(a,b,c,d,e,f){"use strict";var g=b.video,h={width:1920,height:1080},i=f.isRtl(),j=function(a){g&&a.each(function(a,b){b.play()})},k=function(a){g&&a.each(function(a,b){b.pause()})},l=function(){var a=this.getSize().width,b=this.getSize().height,c=d.jQElement.width();this.jQElement.css({width:a>=c?a:"100%",height:a>=c?b:"auto"})},m=function(){var a=this.getHorizontalOffset(),b=this.getVerticalOffset();a>=0?this.jQElement.css(i?"right":"left","auto"):this.jQElement.css(i?"right":"left",a),b>=0?this.jQElement.css("top","auto"):this.jQElement.css("top",b)},n=function(a){return a.filter(function(){return this.isVisible()})},o=function(a){return function(){var b=n(a);j(b)}},p=function(a){return function(){var b=n(a);k(b)}},q=function(){var a=this;d.jQElement.on(e.RESIZE,function(){e.getCurrentState()!==e.MOBILE||a.isPaused()?e.getCurrentState()!==e.MOBILE&&a.isPaused()&&a.play():a.pause()})},r=function(){var a=s();a(),d.jQElement.on("resize",a)},s=function(){var a=new t(".cover").getVideos();return function(){a.each(function(a,b){0===b.jQElement[0].readyState?b.jQElement.on("loadedmetadata",b.determineScalingMethod.bind(b)):b.determineScalingMethod()})}},t=function(b){this.jQElement=a(b),this.scrollTarget=c(this.jQElement)};t.prototype.getVideos=function(){return this.jQElement.find("video").map(function(){return new u(this)})},t.prototype.enableVideoPlayBasedOnViewportVisibility=function(){var a=this.getVideos();return a.length&&(this.scrollTarget.on("stage",o(a)),this.scrollTarget.on("unstage",p(a))),this};var u=function(b){this.jQElement=a(b),this.videoContainerHeightScale=1,this.jQElement.parents(".cover").hasClass("peekaboo")&&(this.videoContainerHeightScale=.9),q.call(this)};return u.prototype.determineScalingMethod=function(){e.getCurrentState()!==e.MOBILE?this.scaleToVideoContainerSize():this.resetStyles()},u.prototype.scaleToVideoContainerSize=function(){this.jQElement.parent().css({height:this.getVideoContainerHeight()}),l.call(this),m.call(this)},u.prototype.resetStyles=function(){this.jQElement.removeAttr("style")},u.prototype.getVideoContainerHeight=function(){return d.jQElement.height()*this.videoContainerHeightScale},u.prototype.getHorizontalOffset=function(){var a=d.jQElement.width(),b=this.getSize().width;return(a-b)/2},u.prototype.getVerticalOffset=function(){var a=this.jQElement.height(),b=this.getVideoContainerHeight();return(b-a)/2},u.prototype.getSize=function(){var a=this.getVideoContainerHeight(),b=Math.round(a/h.height*h.width);return{height:a,width:b}},u.prototype.play=function(){return this.jQElement.each(function(a,b){b.play()}),this},u.prototype.pause=function(){return this.jQElement.each(function(a,b){b.pause()}),this},u.prototype.isPaused=function(){var a=!0;return this.jQElement.each(function(b,c){a=a&&c.paused}),a},u.prototype.isVisible=function(){return this.jQElement.is(":visible")},r(),t.Video=u,t});

}
/*
     FILE ARCHIVED ON 10:56:36 Jan 03, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:13:28 Dec 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.87
  exclusion.robots: 0.037
  exclusion.robots.policy: 0.022
  esindex: 0.017
  cdx.remote: 47.463
  LoadShardBlock: 216.218 (3)
  PetaboxLoader3.datanode: 180.182 (4)
  PetaboxLoader3.resolve: 146.383 (2)
  load_resource: 160.997
*/