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

define("apollo/Overlay",["apollo/ajax","apollo/responsive","apollo/navigation","apollo/localisation","apollo/window","apollo/document","apollo/keycodes","apollo/util","apollo/mediator","jquery","domReady!"],function(a,b,c,d,e,f,g,h,i,j){"use strict";function k(a){this.contentFunction=a,this.id=++z,this.emptyOnClose=!0,i.create(this)}var l,m,n,o,p=".on",q=".off",r=".closing",s=".opening",t="overlay",u=t+p,v=t+s,w=t+q,x=t+r,y="fade",z=0,A=".overlay",B=".overlayWrapper",C=".overlayBackground",D=".overlayContainer",E=".closeButton",F="data-overlay-standalone",G="scroll mousewheel touchstart touchmove keydown keypress keyup",H="",I="",J="",K=function(){L(),M(),S()},L=function(){m=j("html"),o=j("body"),n=j("nav#scom")},M=function(){var a=O().appendTo(o).addClass(y);P().appendTo(o),Q().appendTo(a)},N=function(a){var b=j(a);return b.length||(b=j("<div>").addClass(a.substring(1))),b},O=function(){return N(B)},P=function(){var a=N(C),b=f.jQElement.height();return a.height(b),a},Q=function(){var a=N(A);return R(a).appendTo(a),N(D).appendTo(a),a},R=function(){var a=j("<button>",{type:"button","class":E.substring(1),"aria-label":"Exit overlay"});return j("<span>").addClass("closeCircle").appendTo(a),j("<span>").addClass("closeIcon").appendTo(a),a},S=function(a){f.jQElement.on("keydown",V),j(C).on("click touchstart",W),j(B).on("click touchstart",W),j(A+" "+E).on("keydown",V).on("click touchstart",X),T(),a&&a()},T=function(){b.on(b.MOBILE_ON,function(){U(0)}),b.on(b.MOBILE_OFF,function(){U(e.getScrollWidth())})},U=function(a){ga()&&n.css(va(),a)},V=function(a){if(ga())switch(a.which){case g.ESCAPE:case g.X:a.preventDefault(),$()}},W=function(a){var b=j(a.target);(b.is(C)||b.is(B))&&(a.preventDefault(),$())},X=function(a){a.preventDefault(),a.stopPropagation(),$()},Y=function(a){j(D).html(a);var b=j(B+","+C);this.isAnimated()?b.fadeIn({complete:ua}):(b.show(),ua())},Z=function(a){var b=this;b.trigger(v),ka(),this.contentFunction(function(c){na(),Y.call(b,c),l=b,b.trigger(u),a&&a.call(l)})},$=function(a){ha()?_(a):aa(a)},_=function(a){return da(outgoingOverlay,a),c.goBack(function(){var b=fa();l=void 0,ea(b,a)}),!1},aa=function(a){var b=fa();da(b,a),ba(b),b.emptyOnClose&&ca(),l=void 0,ea(b,a)},ba=function(a){var b=j(B+","+C);a.isAnimated()?b.fadeOut({complete:qa}):(b.hide(),qa())},ca=function(){j(D).html("")},da=function(a){a.trigger(x)},ea=function(a,b){a.trigger(w),b&&b.call(a)},fa=function(){return l},ga=function(){return!!fa()},ha=function(){return"true"===j(B).prop(F)},ia=function(a){var b=document.createElement("a");b.href=a;var c,d=b.pathname.split(".");c=d[0];for(var e=0;e<d.length;e++)0===e?"/"==c.charAt(c.length-1)?c=c.substring(0,c.length-1)+".ajaxcontent/":c+=".ajaxcontent":c=c+"."+d[e];return"/"!==c.charAt(0)&&(c="/"+c),c},ja=function(a){return 0===a.type.indexOf("key")&&g.isArrow(a.which)&&g.isPageUpOrPageDown(a.which)?void 0:(a.preventDefault(),a.stopPropagation(),!1)},ka=function(){j(B).css("top",f.jQElement.scrollTop())},la=function(){e.jQElement.on(G,ja),f.jQElement.on(G,ja),j(A).on(G,ja)},ma=function(){e.jQElement.off(G,ja),f.jQElement.off(G,ja),j(A).off(G,ja)},na=function(){var a=e.getScrollWidth();wa(a),oa(),m.css("overflow-x","hidden").css("overflow-y","hidden"),o.addClass("overlayOn"),ra()},oa=function(){o.addClass("borderBoxSizing").removeClass("contentBoxSizing"),n.addClass("borderBoxSizing").removeClass("contentBoxSizing")},pa=function(){o.addClass("contentBoxSizing").removeClass("borderBoxSizing"),n.addClass("contentBoxSizing").removeClass("borderBoxSizing")},qa=function(){m.css("overflow-x",H).css("overflow-y",I),o.removeClass("overlayOn"),wa(0),pa(),sa()},ra=function(){J=f.body.scroll,f.body.scroll="no",f.jQElement.on("scroll touchend",ta),e.jQElement.on("resize orientationchange",ta)},sa=function(){f.jQElement.off("scroll touchend",ta),e.jQElement.off("resize orientationchange",ta),f.body.scroll=J,ma()},ta=function(){ua()},ua=function(){ka(),ma();var a=j(A),b=a.outerHeight();e.isLongerThanViewport(b)||la()},va=function(){return"padding-"+(d.isRtl()?"left":"right")},wa=function(a){var d=va();c.isInternetExplorer()?o.css(d,a):o.css("padding-right",a),b.isMobile()||n.css(d,a)};return k.OVERLAY_ON=u,k.OVERLAY_OFF=w,k.OVERLAY_OPENING=v,k.OVERLAY_CLOSING=x,k.prototype.open=function(a){this.isOpen()?a&&a.call(this):Z.call(this,a)},k.prototype.close=function(a){this.isOpen()?$.call(this,a):a&&a.call(this)},k.prototype.isOpen=function(){var a=fa();return!!a&&a.id===this.id},k.prototype.isAnimated=function(){return j(B).hasClass(y)},k.prototype.enableFadeAnimation=function(){j(B).addClass(y)},k.prototype.disableFadeAnimation=function(){j(B).removeClass(y)},k.isAnyOpen=function(){return!!fa()},k.prototype.content=function(){return j(D).html()},k.byAjax=function(b){b=ia(b),k.call(this,function(c){a.get({url:b,success:c})})},k.byAjax.prototype=Object.create(k.prototype),k.byAjax.prototype.constructor=k.byAjax,K(),k});

}
/*
     FILE ARCHIVED ON 05:05:30 Feb 08, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:31:20 Dec 08, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.789
  exclusion.robots: 0.039
  exclusion.robots.policy: 0.024
  esindex: 0.014
  cdx.remote: 7.054
  LoadShardBlock: 100.803 (3)
  PetaboxLoader3.datanode: 153.414 (5)
  load_resource: 197.215 (2)
  PetaboxLoader3.resolve: 88.422 (2)
*/