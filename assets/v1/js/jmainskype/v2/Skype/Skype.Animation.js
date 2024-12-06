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

define("Skype.Animation",["jquery","Skype.window","Skype.scroll","Skype.responsive","domReady!"],function(a,b,c,d){"use strict";function e(a,b,c){if(this.jQElement.selector in D){var d={top:"",left:"",bottom:"",right:""};delete d[a],this.jQElement.css(d)}var e=D[this.jQElement.selector]=D[this.jQElement.selector]||{};return e.animationFrom=Math.round(b),e.animationTo=Math.round(c),e.animationRange=Math.abs(c-b),e.css=a,e.jQElement=this.jQElement,this}function f(a,b,c){var d=D[this.jQElement.selector]=D[this.jQElement.selector]||{};return d.mechanism=a,d.mechanismFrom=Math.round(b),d.mechanismTo=Math.round(c),d.mechanismRange=Math.abs(c-b),this}function g(a,b){var c=D[this.jQElement.selector]=D[this.jQElement.selector]||{};return c.mechanism=a,c.mechanismFrom=Math.round(b),this}function h(a){for(var b={mobile:!1,tablet:!1,desktop:!1},c=a.split(" "),d=0;d<c.length;++d){var e=c[d];e in b&&(b[e]=!0)}var f=D[this.jQElement.selector]=D[this.jQElement.selector]||{};return f.responsiveStates=b,this}function i(a,b){var c="";if(a<b.mechanismFrom)c=b.animationFrom+x,b.jQElement.removeClass(z);else if(a>b.mechanismTo)c=b.animationTo+x,b.jQElement.removeClass(z);else{var d=a-b.mechanismFrom;c=Math.round(d/b.mechanismRange*b.animationRange),c=b.animationFrom>b.animationTo?b.animationFrom-c:b.animationFrom+c,c+=x,b.jQElement.addClass(z)}b.jQElement.css(b.css,c)}function j(a,b){var c={},d=b.css;q==B&&a>=b.mechanismFrom?!l(b.jQElement)&&m(b)&&(c[d]=b.animationTo,k(b.jQElement,c)):q==A&&a<=b.mechanismFrom&&(l(b.jQElement)||m(b)||(c[d]=b.animationFrom,k(b.jQElement,c)))}function k(a,b){a.addClass(z),a.animate(b,y,function(){a.removeClass(z)})}function l(a){return a.hasClass(z)}function m(a){return a.jQElement.css(a.css)==a.animationFrom+x}function n(){o()}function o(){b.jQElement.on({scroll:function(){var a=d.getCurrentState();p(a)},upward:function(){q=A},downward:function(){q=B}}),d.on(d.CHANGE,function(a){var b=a.current;p(b)})}function p(a){var b=c.offsetY(),d={top:"",left:"",bottom:"",right:""};for(var e in D){var f=D[e];(f.mechanism===r||f.mechanism===s)&&(f.responsiveStates[a]===!0?E[f.mechanism](b,f):f.jQElement.css(d))}}var q,r="scrollRange",s="tripwire",t="top",u="bottom",v="left",w="right",x="px",y=400,z="animateStart",A="up",B="down",C="tablet desktop",D={},E={};E[r]=i,E[s]=j;var F=function(b){this.jQElement=a(b),this.forResponsiveStates(C)};return F.prototype.fromTop=function(a,b){return e.call(this,t,a,b)},F.prototype.fromBottom=function(a,b){return e.call(this,u,a,b)},F.prototype.fromLeft=function(a,b){return e.call(this,v,a,b)},F.prototype.fromRight=function(a,b){return e.call(this,w,a,b)},F.prototype.overScrollRange=function(a,b){return f.call(this,r,a,b),this},F.prototype.atTripwire=function(a){return g.call(this,s,a),this},F.prototype.forResponsiveStates=function(a){return h.call(this,a),this},n(),F});

}
/*
     FILE ARCHIVED ON 10:56:34 Jan 03, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:13:26 Dec 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.742
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.01
  esindex: 0.013
  cdx.remote: 12.934
  LoadShardBlock: 101.563 (3)
  PetaboxLoader3.datanode: 65.925 (4)
  PetaboxLoader3.resolve: 168.252 (2)
  load_resource: 173.637
*/