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

define("scom/home/home",["apollo/TabPanel","apollo/scroll","apollo/navigation","apollo/tracking","apollo/user.preferences","apollo/keycodes","apollo/device","scom/newSkype/visibilityControl","apollo/settings","jquery","domReady!"],function(a,b,c,d,e,f,g,h,i,j){"use strict";var k="tourRight",l="tourDown",m="tour",n="home_v2_tour_panel",o="home_v2_scroll_from_tour",p="home_v2_tour_next_btn",q="home_v2_tour_prev_btn",r="activated",s="home_v2_signin",t="home_v2_myaccount",u="#signInButtonTop",v=".guestHostBtnWrapper",w="#guestHostButtonTop, #guestHostButtonBottom",x="#guestHostNotification",y="#tourSection",z=y+" .tourNextBtn",A=y+" .tourPreviousBtn",B="#featuresSection",C="#bottomCtaSection",D="#promoSection",E="home_new_skype",F="gift-promo-home",G=function(){j("#guestHostFormWrapper").length>0&&N(),g.getPlatform()===g.ANDROID&&H(),M(),K(),J(),L(),i.clicktale&&i.clicktale.enabled===!0&&require(["scom/clicktale"])},H=function(){var a=j(D),b=a.find("[data-campaign-id='"+E+"']").parent(),c=a.find("[data-campaign-id='"+F+"']").parent();h.checkAndDisplaySupported(b,c)},I=function(a,c,d){var e=this;new b.ScrollTarget(j(a)).smoothTo({complete:function(){c&&j(a).focus(),d&&d.call(e)}})},J=function(){j(z).on("click",function(){d.trackCustomClickEvent(m,p)}),j(A).on("click",function(){d.trackCustomClickEvent(m,q)})},K=function(){var b=new a(y,0,a.TAB_DESKTOP_MODE_SAME_AS_MOBILE,!1);new a(B,0,a.TAB_DESKTOP_MODE_SAME_AS_MOBILE,!1),b.registerTabChangeCallback(function(a){var b=a.tabCount-1;return a.currentTabIndex==b&&a.isChangeToNextTab&&a.isChangeByButton?(I(C,!0),d.trackCustomClickEvent(m,o),!1):(a.newTabIndex==b?j(z).removeClass(k).addClass(l):j(z).removeClass(l).addClass(k),d.trackCustomImpressionEvent(m,n+(a.newTabIndex+1)),!0)}),b.registerNextTabButton(z),b.registerPreviousTabButton(y+" .tourPreviousBtn")},L=function(){j.each(j("#promoSection .promo > a"),function(a,b){j(b).filter("a:not([data-campaign-id])").each(function(){d.addGenericClickEventTracking(j(this),{position:"promo",campaignId:"home_v2_promo"+(a+1)})})})},M=function(){var a=e.isAuthenticated(),b=j(u),c=s;if(a){var f=b.data("myaccount-text");b.text(f),b.attr("href",b.data("myaccount-link")),b.attr("title",f),b.attr("aria-label",f),c=t}d.addGenericClickEventTracking(b,{position:"hero",campaignId:c}),b.addClass(r)},N=function(){var a=c.getVersionOfOldInternetExplorer()<=9;a?(j(v).remove(),j(x).fadeIn(1e3)):require(["scom/GuestHostForm"],function(a){new a("#guestHostFormWrapper","#guestHostFormWrapper input","#guestHostSubmitButton",w)})};G()});

}
/*
     FILE ARCHIVED ON 22:04:02 Jun 29, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:33:28 Nov 01, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.679
  exclusion.robots: 0.035
  exclusion.robots.policy: 0.02
  esindex: 0.015
  cdx.remote: 7.639
  LoadShardBlock: 73.966 (3)
  PetaboxLoader3.datanode: 87.641 (4)
  load_resource: 86.427
  PetaboxLoader3.resolve: 66.89
*/