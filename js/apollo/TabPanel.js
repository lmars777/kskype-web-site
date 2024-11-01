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

define("apollo/TabPanel",["apollo/keycodes","apollo/mediator","apollo/responsive","apollo/scroll","apollo/localisation","jquery","domReady!"],function(a,b,c,d,e,f){"use strict";var g="active",h="tab.switch",i="SHOW_ALL",j="SAME_AS_MOBILE",k="li[role='tab']",l="[role='tabpanel']",m=0,n=function(){this.tabs.on("keydown",q.bind(this)),this.tabs.on("click",o.bind(this)),this.tabs.on("keyup",p.bind(this)),c.on(c.CHANGE,u.bind(this))},o=function(a){var b=this.tabs.index(f(a.target).closest(k)),c=this.currentIndex+1==b;this.currentIndex!==b?(this.isChangeByButton=!1,this.isChangeToNextTab=c,t.call(this,b,!0)):x.call(this,b)},p=function(b){var c=-1,d=e.isRtl();switch(this.isChangeByButton=!1,b.which){case a.LEFT_ARROW:c=d?r.call(this):s.call(this);break;case a.RIGHT_ARROW:c=d?s.call(this):r.call(this);break;case a.UP_ARROW:c=s.call(this);break;case a.DOWN_ARROW:c=r.call(this)}c>-1&&t.call(this,c,!0)},q=function(b){var c=b.which;return c>=a.LEFT_ARROW&&c<=a.DOWN_ARROW?!1:void 0},r=function(){var a=this.tabs.length;return this.isChangeToNextTab=!0,(this.currentIndex+1)%a},s=function(){var a=this.tabs.length;return this.isChangeToNextTab=!1,(this.currentIndex-1+a)%a},t=function(a,b){var c=!0;this.tabChangeCallback&&(c=this.tabChangeCallback({currentTabIndex:this.currentIndex,newTabIndex:a,tabCount:this.tabs.length,isChangeToNextTab:this.isChangeToNextTab,isChangeByButton:this.isChangeByButton})),c&&(v.call(this,a,b),x.call(this,a))},u=function(a){var b=a.current;this.tabDesktopMode===i&&(b===c.MOBILE?v.call(this,this.currentIndex):(this.panels.removeAttr("aria-hidden"),this.panels.removeClass(g)))},v=function(a,b){var c=!0;void 0!==b&&(c=b),this.trigger(h,a);var d=f(this.tabs.get(a)),e=d.attr("aria-controls"),g=this.panels.filter("#"+e);w.call(this,d,c),y.call(this,g,d),this.currentIndex=a},w=function(a,b){this.tabs.attr("aria-selected","false"),this.tabs.attr("tabindex",-1),a.attr("aria-selected","true"),a.attr("tabindex",0),b&&a.focus(),this.tabs.removeClass(g),a.addClass(g)},x=function(a){if(this.scrollToTabOnClick&&c.getCurrentState()===c.MOBILE){var b=f(this.tabs.get(a));d(b).smoothTo()}},y=function(a,b){this.panels.attr("aria-hidden","true"),a.attr("aria-hidden","false"),b.attr("data-all-tabs")&&this.panels.attr("aria-hidden","false"),this.panels.removeClass(g),a.addClass(g)},z=function(a){return a>=0&&a<this.panels.length},A=function(b,c){var d=this;f(b).on("keypress click",function(b){if(b.which===a.ENTER||"click"===b.type){var e;e=c?r.call(d):s.call(d),d.isChangeToNextTab=c,d.isChangeByButton=!0,t.call(d,e,!1)}})},B=function(a,d,e,g){b.create(this),this.jQElement=f(a),this.tabs=this.jQElement.find(k),this.panels=this.jQElement.find(l),this.tabDesktopMode=i,this.scrollToTabOnClick=!1,this.tabChangeCallback=void 0,this.isChangeToNextTab=!1,this.isChangeByButton=!1,e===j&&(this.tabDesktopMode=j),g&&(this.scrollToTabOnClick=g),this.currentIndex=z.call(this,d)?d:m,(c.getCurrentState()===c.MOBILE||this.tabDesktopMode===j)&&v.call(this,this.currentIndex,!1),n.call(this)};return B.prototype.registerNextTabButton=function(a){A.call(this,a,!0)},B.prototype.registerPreviousTabButton=function(a){A.call(this,a,!1)},B.prototype.registerTabChangeCallback=function(a){a&&(this.tabChangeCallback=a)},B.TAB_SWITCH_EVENT=h,B.TAB_DESKTOP_MODE_SHOW_ALL=i,B.TAB_DESKTOP_MODE_SAME_AS_MOBILE=j,B});

}
/*
     FILE ARCHIVED ON 22:04:06 Jun 29, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:33:29 Nov 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.741
  exclusion.robots: 0.036
  exclusion.robots.policy: 0.021
  esindex: 0.013
  cdx.remote: 6.404
  LoadShardBlock: 132.173 (3)
  PetaboxLoader3.datanode: 101.086 (4)
  PetaboxLoader3.resolve: 140.347 (2)
  load_resource: 118.936
*/