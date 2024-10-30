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


if(typeof SKYPE!="undefined")
{SKYPE.namespace("analytics");SKYPE.analytics.ChannelTrack=function()
{var natural_search=["google.com","google.co.uk","yahoo.com","live.com","google.it","google.fr","yahoo.co.jp","google.de","google.ca","www.google.com.br","google.es","google.co.jp","google.com.au","search.live.com","google.pl","msn.com","google.ie","google.nl","google.ch","uk.search.yahoo.com"];var cookieName="CHANNEL_SOURCE";var referr_url=document.referrer;var page_url=location;var params_url=location.search.toLowerCase();var chann_source="";var createCookie=function(name,value,days)
{if(days)
{var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}
else var expires="";document.cookie=name+"="+value+expires+"; path=/";};var readCookie=function(name)
{var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;};var eraseCookie=function(name)
{createCookie(name,"",-1);};var getDomainFromUrl=function(url_string)
{if(typeof(url_string)!="string")
return"";var domain_name=nam.match(/http:\/\/([^\/]*)/);if(typeof domain_name=="undefined"||domain_name.length!=2)
return"";return domi[1];};var reportCoremetrics=function(chan)
{if(typeof cmCreatePageviewTag!="function")
{return false;}
cmCreatePageviewTag("channel/"+chan,"CHANNEL");};var isNaturalSearch=function()
{if(natural_search.indexOf(getDomainFromUrl(referr_url))!=-1)
{if(page_url.indexOf("cm_mmc=")==-1)
{chann_source="NATURAL";}}};var isPaidSearch=function()
{if((params_url.indexOf("cm_mmc=google/latsearch")!=-1)||(params_url.indexOf("cm_mmc=yahoo/latsearch")!=-1)||(params_url.indexOf("cm_mmc=msn/latsearch")!=-1))
{chann_source="PAID";if(params_url.indexOf("-_-bd-_-")!=-1)
{chann_source="BDPAID";}}};var isAffiliateTraffic=function()
{if(readCookie("linkedcampaign")!=null)
{chann_source="AFFILIATE";}};var isComissionJunctionTraffic=function()
{if(readCookie("linkedcampaign")=="200504paffiliate")
{chann_source="COMISSIONJUNCTION";}};var isTradedoublerTraffic=function()
{if(readCookie("linkedcampaign")=="TRADEDOUBLER")
{chann_source="TRADEDOUBLER";}};var isAgencyOneTraffic=function()
{if(readCookie("linkedcampaign")=="AGENCY1")
{chann_source="AGENCY1";}};var isAgencyTwoTraffic=function()
{if(readCookie("linkedcampaign")=="AGENCY2")
{chann_source="AGENCY2";}};var isAgencyThreeTraffic=function()
{if(readCookie("linkedcampaign")=="AGENCY3")
{chann_source="AGENCY3";}};var isTafWeb=function()
{if(params_url.indexOf("cm_mmc=acceleration-_-email-_-wtaf")!=-1)
{chann_source="TAFWEB";}};var isTafClient=function()
{if(params_url.indexOf("cm_mmc=acceleration-_-email-_-taf")!=-1)
{chann_source="TAFCLIENT";}};return{detectTracking:function()
{try
{if(readCookie("channel_source")!=null)
{return;}
isPaidSearch();isTradedoublerTraffic();isComissionJunctionTraffic();isAgencyOneTraffic();isAgencyTwoTraffic();isAgencyThreeTraffic();isTafClient();isTafWeb();if(chann_source!="")
{createCookie("channel_source",chann_source,90);}}
catch(err)
{reportCoremetrics("Error in: "+location.toString());}}};}();SKYPE.analytics.ChannelTrack.detectTracking();}

}
/*
     FILE ARCHIVED ON 12:20:12 Feb 23, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:46:10 Oct 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.44
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.012
  esindex: 0.009
  cdx.remote: 5.635
  LoadShardBlock: 234.693 (3)
  PetaboxLoader3.datanode: 128.376 (4)
  PetaboxLoader3.resolve: 142.617 (2)
  load_resource: 133.028
*/