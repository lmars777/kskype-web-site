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

/*global s, gotErrorPage, shopProductName, shopCategoryName*/
/*jslint bitwise: true, browser: true, eqeqeq: true, immed: true, newcap: true, nomen: true, onevar: true, plusplus: true, white: true, widget: true, undef: true, indent: 2*/

var SKYPE = SKYPE || {};
SKYPE.wanalytics = SKYPE.wanalytics || {};

SKYPE.wanalytics.Shop = (function () {
  
  return {

    /*
    SKYPE.wanalytics.Shop.trackSearch("nokia", 5);
    */
    trackSearch: function (searchterm, numbersearchresults)
    {     
      if (typeof searchterm          !== "string"    || 
          typeof numbersearchresults === "undefined" ||
          searchterm                 === "") {
        throw "SKYPE.wanalytics.Shop.trackSearch requires a search-term and the count of search-results";
      }
      
      return SKYPE.wanalytics.track({
        site: "shop.hw",
        func: function () {
          s.prop8 = s.eVar8 = "shop.hw";
          s.prop12 = s.eVar11 = searchterm;
          s.prop13 = numbersearchresults;
          s.events = "event2";                           
        }
      });
    },

    /*
    SKYPE.wanalytics.Shop.trackBuy({
      type: "accessory", //"accessory" or "app"
      category: "Headset",
      subcategory: "USB",
      product: "iss-talk-5115-everyman", //unique ID
      price: 12.5,
      currency: "EUR", //3char ISO 4217 currency codes
      fullfiller: "ebuynow"
    });
    */
    trackBuy: function (arg)
    {
      
      var type = ((typeof arg !== "undefined") && arg.type)     || "",   
      category = ((typeof arg !== "undefined") && arg.category) || "",
      subcategory = ((typeof arg !== "undefined") && arg.subcategory)  || "",
      product  = ((typeof arg !== "undefined") && arg.product)  || "", 
      price    = ((typeof arg !== "undefined") && arg.price)    || "",
      currency = ((typeof arg !== "undefined") && arg.currency) || "",
      fullfiller  = ((typeof arg !== "undefined") && arg.fullfiller) || "";
      
      return SKYPE.wanalytics.trackAction("buy", function () {
        s.linkTrackVars   = "events,products,channel,pageName,eVar51,eVar52,eVar53"; 
        s.linkTrackEvents = s.events = "event63";
        s.products = type + ";" + product + ";;;" + "event63=" + price;
        s.eVar51 = category;
        s.eVar52 = subcategory;
        s.eVar53 = fullfiller;
        s.currencyCode = currency;
        
        if (type.toLowerCase() === "accessory") {
          s.linkTrackEvents = s.events = "event63,event18";
        } 

        if (type.toLowerCase() === "app") {
          s.linkTrackEvents = s.events = "event63,event64";
        }
      });
    },

    // to be deprecated
    reportBuyLnk: function (product, category)
    {      
      var prod = product || 
                 ((typeof shopProductName !== "undefined") && 
                  shopProductName) || 
                 "",
          cat = category || 
                ((typeof shopCategoryName !== "undefined") && 
                  shopCategoryName) || 
                "";
      
      return SKYPE.wanalytics.trackAction("buy", function () {
        s.linkTrackVars   = "events,products,transactionID,channel,pageName,prop23,eVar27"; 
        s.linkTrackEvents = "event18";
        s.events          = "event18";
        s.products        = cat + ";" + prod;
      });
    },

    /* Page Report */               
    track: function ()
    {
      if ((typeof gotErrorPage !== "undefined") && (gotErrorPage !== ""))
      {
        SKYPE.wanalytics.track({
          "site": "shop.hw",
          "page": SKYPE.wanalytics.getPageName(location.pathname) + "[" + gotErrorPage + "]:" + document.referrer,
          "func": function () {
            s.pageType = "errorPage";
          }
        });
      }
      else 
      {         
        SKYPE.wanalytics.track({
          "site": "shop.hw",
          "func": function () {
            /* if product page, make a productView */
            if ((typeof shopProductName !== "undefined") && 
                (shopProductName !== "") &&
                (typeof shopCategoryName !== "undefined") && 
                (shopCategoryName !== "")) {
              s.events = "prodView";
              s.products = shopCategoryName + ";" + shopProductName;               
            }
          }       
        });
      }
    }
  };
}());

SKYPE.wanalytics.Shop.track();


}
/*
     FILE ARCHIVED ON 13:01:00 Jan 21, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:07:12 Nov 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.597
  exclusion.robots: 0.022
  exclusion.robots.policy: 0.01
  esindex: 0.011
  cdx.remote: 6.749
  LoadShardBlock: 188.959 (3)
  PetaboxLoader3.datanode: 245.064 (7)
  load_resource: 369.359 (2)
  PetaboxLoader3.resolve: 240.526 (2)
*/