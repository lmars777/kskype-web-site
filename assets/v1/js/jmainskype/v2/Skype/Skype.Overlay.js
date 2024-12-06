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

define("Skype.Overlay",["Skype.ajax","Skype.responsive","Skype.navigation","Skype.localisation","Skype.window","Skype.document","Skype.util","jquery","domReady!"],function(a,b,c,d,e,f,g,h){"use strict";function i(a){this.contentFunction=a,this.id=++y,this.emptyOnClose=!0,this.callbacks={}}var j,k,l,m,n=88,o=27,p=".on",q=".off",r=".closing",s=".opening",t="overlay",u=t+p,v=t+s,w=t+q,x=t+r,y=0,z=".overlay",A=".overlayWrapper",B=".overlayBackground",C=".overlayContainer",D=".overlayClose",E="data-overlay-standalone",F="",G="",H="",I=function(){J(),K(),Q()},J=function(){k=h("html"),m=h("body"),l=h("nav#scom")},K=function(){var a=M().appendTo(m);N().appendTo(m),O().appendTo(a)},L=function(a){var b=h(a);return b.length||(b=h("<div>").addClass(a.substring(1))),b},M=function(){return L(A)},N=function(){var a=L(B),b=f.jQElement.height();return a.height(b),a},O=function(){var a=L(z);return P(a).appendTo(a),L(C).appendTo(a),a},P=function(){var a=h("<button>",{type:"button","class":D.substring(1),"aria-label":"Exit overlay"});return h("<span>").addClass("closeCircle").appendTo(a),h("<span>").addClass("closeIcon").appendTo(a),a},Q=function(a){f.jQElement.on("keydown",T),h(B).on("click touchstart",V),h(A).on("click touchstart",V),h(D).on("keydown",W).on("click touchstart",X),R(),a&&a()},R=function(){b.on(b.MOBILE_ON,function(){S(0)}),b.on(b.MOBILE_OFF,function(){S(e.getScrollWidth())})},S=function(a){gb()&&l.css(wb(),a)},T=function(a){if(gb()){var b=a.which;b===o?U(a):b!==n||hb()||$()}},U=function(a){a.preventDefault(),$()},V=function(a){var b=h(a.target);(b.is(B)||b.is(A))&&(a.preventDefault(),$())},W=function(a){var b=a.which;b===o&&(a.preventDefault(),$())},X=function(a){a.preventDefault(),a.stopPropagation(),$()},Y=function(a){h(C).html(a);var b=h(A+","+B);this.isAnimated()?b.fadeIn({complete:vb}):(b.show(),vb())},Z=function(a){var b=this;ib.call(this,v),lb(),this.contentFunction(function(c){ob(),Y.call(b,c),j=b,ib.call(b,u),a&&a.call(j)})},$=function(a){hb()?_(a):ab(a)},_=function(a){return db(outgoingOverlay,a),c.goBack(function(){var b=fb();j=void 0,eb(b,a)}),!1},ab=function(a){var b=fb();db(b,a),bb(b),b.emptyOnClose&&cb(),j=void 0,eb(b,a)},bb=function(a){var b=h(A+","+B);a.isAnimated()?b.fadeOut({complete:rb}):(b.hide(),rb())},cb=function(){h(C).html("")},db=function(a){ib.call(a,x)},eb=function(a,b){ib.call(a,w),b&&b.call(a)},fb=function(){return j},gb=function(){return!!fb()},hb=function(){return"true"===h(A).prop(E)},ib=function(a,b){if(!a)throw"Cannot fire if event name is missing";var c=this.callbacks[a];if(c)for(var d=h.extend({name:a},b),e=0;e<c.length;++e)c[e](d)},jb=function(a){var b=document.createElement("a");b.href=a;var c,d=b.pathname.split(".");c=d[0];for(var e=0;e<d.length;e++)0===e?"/"==c.charAt(c.length-1)?c=c.substring(0,c.length-1)+".ajaxcontent/":c+=".ajaxcontent":c=c+"."+d[e];return"/"!==c.charAt(0)&&(c="/"+c),c},kb=function(a){return a.preventDefault(),a.stopPropagation(),!1},lb=function(){h(A).css("top",f.jQElement.scrollTop())},mb=function(){e.jQElement.on("scroll mousewheel touchstart touchmove",kb),f.jQElement.on("scroll mousewheel touchstart touchmove",kb),h(z).on("scroll mousewheel touchstart touchmove",kb)},nb=function(){e.jQElement.off("scroll mousewheel touchstart touchmove",kb),f.jQElement.off("scroll mousewheel touchstart touchmove",kb),h(z).off("scroll mousewheel touchstart touchmove",kb)},ob=function(){var a=e.getScrollWidth();xb(a),pb(),k.css("overflow-x","hidden").css("overflow-y","hidden"),m.addClass("overlayOn"),sb()},pb=function(){m.addClass("borderBoxSizing").removeClass("contentBoxSizing"),l.addClass("borderBoxSizing").removeClass("contentBoxSizing")},qb=function(){m.addClass("contentBoxSizing").removeClass("borderBoxSizing"),l.addClass("contentBoxSizing").removeClass("borderBoxSizing")},rb=function(){k.css("overflow-x",F).css("overflow-y",G),m.removeClass("overlayOn"),xb(0),qb(),tb()},sb=function(){H=f.body.scroll,f.body.scroll="no",f.jQElement.on("scroll touchend",ub),e.jQElement.on("resize orientationchange",ub)},tb=function(){f.jQElement.off("scroll touchend",ub),e.jQElement.off("resize orientationchange",ub),f.body.scroll=H,nb()},ub=function(){vb()},vb=function(){lb(),nb();var a=h(z),b=a.outerHeight();e.isLongerThanViewport(b)||mb()},wb=function(){return"padding-"+(d.isRtl()?"left":"right")},xb=function(a){var d=wb();c.isInternetExplorer()?m.css(d,a):m.css("padding-right",a),b.isMobile()||l.css(d,a)};return i.OVERLAY_ON=u,i.OVERLAY_OFF=w,i.OVERLAY_OPENING=v,i.OVERLAY_CLOSING=x,i.prototype.on=function(a,b){var c=this;this.callbacks[a]=this.callbacks[a]||[],this.callbacks[a].push(function(){b.call(c)})},i.prototype.open=function(a){this.isOpen()?a&&a.call(this):Z.call(this,a)},i.prototype.close=function(a){this.isOpen()?$.call(this,a):a&&a.call(this)},i.prototype.isOpen=function(){var a=fb();return!!a&&a.id===this.id},i.prototype.isAnimated=function(){return h(A).hasClass("fade")},i.isAnyOpen=function(){return!!fb()},i.byAjax=function(b){b=jb(b),i.call(this,function(c){a.get({url:b,success:c})})},i.byAjax.prototype=Object.create(i.prototype),i.byAjax.prototype.constructor=i.byAjax,I(),i});

}
/*
     FILE ARCHIVED ON 10:56:35 Jan 03, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:13:32 Dec 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.5
  exclusion.robots: 0.016
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 16.008
  LoadShardBlock: 5239.116 (3)
  PetaboxLoader3.datanode: 5294.866 (4)
  load_resource: 153.177
  PetaboxLoader3.resolve: 76.468
*/