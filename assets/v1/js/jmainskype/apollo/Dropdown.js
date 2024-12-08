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

define("apollo/Dropdown",["apollo/keycodes","apollo/mediator","jquery","domReady!"],function(a,b,c){"use strict";var d="dropdown",e=d+".changed",f="highlighted",g="showMenu",h=250,i=function(a){this._menuItems.index(a.target)<0&&(this.jQElement.focus(),p.call(this))},j=function(a){o.call(this,a.target)},k=function(a){var b=this._menuItems.index(a.target);n.call(this,b)},l=function(a){var b=this._menuItems.index(a.target);this._highlightedIndex===b&&n.call(this,-1)},m=function(b){var c=this._menuItems.length,d=-1;switch(b.which){case a.UP_ARROW:d=(this._highlightedIndex+c-1)%c;break;case a.DOWN_ARROW:d=(this._highlightedIndex+1)%c;break;case a.ENTER:o.call(this,this._menuItems[this._highlightedIndex]);break;case a.ESCAPE:s.call(this)}d>=0&&!this._isMenuDeployed&&(r.call(this),this._highlightedIndex=0),n.call(this,d)},n=function(a){var b=this._menuItems.length;this._menuItems.removeClass(f),a>=0&&b>a&&(c(this._menuItems[a]).addClass(f),this._highlightedIndex=a)},o=function(a){this._selectedElem=c(a),this._selectedItem.text(this._selectedElem.text()),s.call(this);var b=c.Event(e,{selected:a});this.jQElement.trigger(b)},p=function(){this._isMenuDeployed?s.call(this):r.call(this)},q=function(){var a=this;window.setTimeout(function(){a.jQElement.is(":focus")||s.call(a)},h)},r=function(){this._menu.addClass(g),this._isMenuDeployed=!0},s=function(){this._menu.removeClass(g),this._isMenuDeployed=!1},t=function(){this._menu=this.jQElement.find(".menu"),this._menuItems=this._menu.find("li"),this._selectedItem=this.jQElement.find(".selectedItem")},u=function(){this._menuData=[];for(var a=0;a<this._menuItems.length;a++){var b=c(this._menuItems[a]);this._menuData.push({value:b.data("value"),text:b.text()})}},v=function(){this.jQElement.click(c.proxy(i,this)),this.jQElement.blur(c.proxy(q,this)),this.jQElement.keyup(c.proxy(m,this)),w.call(this)},w=function(){this._menuItems.click(c.proxy(j,this)),this._menuItems.mouseover(c.proxy(k,this)),this._menuItems.mouseout(c.proxy(l,this))},x=function(a){this.jQElement=c(a),this._selectedElem=null,this._isMenuDeployed=!1,this._highlightedIndex=-1,t.call(this),b.create(this),v.call(this),u.call(this),this._menuItems.length>0&&o.call(this,this._menuItems[0])};return x.prototype.val=function(a){if("undefined"==typeof a)return this._selectedElem.data("value");for(var b=0;b<this._menuItems.length;b++){var d=this._menuItems[b];if(c(d).data("value")===a){o.call(this,d);break}}},x.prototype.text=function(){return this._selectedItem.text()},x.prototype.data=function(a){if("undefined"==typeof a)return this._menuData;var b=[];this._menuData=a,this._menu.empty();for(var d=0;d<a.length;d++){var e=document.createElement("li"),f=c(e);f.data("value",a[d].value),f.text(a[d].text),this._menu.append(e),b.push(e)}this._menuItems=c(b),w.call(this),this._menuItems.length>0&&o.call(this,this._menuItems[0])},x});

}
/*
     FILE ARCHIVED ON 05:05:30 Feb 08, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:31:21 Dec 08, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.511
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.016
  esindex: 0.011
  cdx.remote: 11.362
  LoadShardBlock: 121.435 (3)
  PetaboxLoader3.datanode: 150.866 (5)
  load_resource: 261.632 (2)
  PetaboxLoader3.resolve: 170.967 (2)
*/