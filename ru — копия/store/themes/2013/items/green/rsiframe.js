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

try {
    if (r_rspage != undefined) {
        var rscroll = ''; var r_itemdescription = '';
        if ((r_presentation == 0 && r_rspage != 'rsreviews') || r_presentation == 1 || r_presentation == 2 || r_presentation == 3 || r_presentation == 4) { rscroll = ' scrolling="no" '; }
        try { if (r_css == undefined) { r_css = 'Monet-Wide-w.css'; } } catch (Error) { r_css = 'Monet-Wide-w.css'; }
        try { if (r_itemdesc == undefined) { r_itemdesc = document.title; } } catch (Error) { r_itemdesc = document.title; }
        try { if (r_minrating == undefined) { r_minrating = 3; } } catch (Error) { r_minrating = 3; }
        try { if (r_minratingcount == undefined) { r_minratingcount = 3; } } catch (Error) { r_minratingcount = 3; }
        try { if (r_category == undefined) { r_category = 1; } } catch (Error) { r_category = 1; }
        try { if (r_name == undefined) { r_name = ''; } } catch (Error) { r_name = ''; }
        try { if (r_language == undefined) { r_language = 'EnglishDefault'; } } catch (Error) { r_language = 'EnglishDefault'; }
        try { if (r_ssl == undefined) { r_ssl = '0'; } } catch (Error) { r_ssl = '0'; }
        try { if (r_maxpageresults == undefined) { r_maxpageresults = 10; } } catch (Error) { r_maxpageresults = 10; }
        var r_myurl = 'https://web.archive.org/web/20130121124716/http://www.rating-system.com/';
        if (r_ssl == '1') { r_myurl = 'https://web.archive.org/web/20130121124716/https://www.rating-system.com/'; }
        var rih = 'height="100%"';
        if (r_rspage == 'rsavgrating' && r_presentation == 3) { rih = 'height="34px"'; }
        document.write('<iframe allowtransparency="true" ' + rscroll + ' width="100%" ' + rih + ' name="ratingsystem" id="ratingsystem" marginwidth="0" marginheight="0" frameborder="0" hspace="0" src="' + r_myurl + r_rspage + '.html?ssl=' + r_ssl + '&language=' + r_language + '&company=' + r_companyid + '&ratingboxid=' + r_ratingboxid + '&itemid=' + r_itemid + '&userid_name=' + r_userid + '&presentationtype=' + r_presentation + '&css=' + r_css + '&itemdesc=' + encodeURIComponent(r_itemdesc) + '&category=' + r_category + '&maxresults=' + r_maxpageresults + '&minrating=' + r_minrating + '&minratingcount=' + r_minratingcount + '&name=' + encodeURIComponent(r_name) + '&productdesc=' + encodeURIComponent(r_itemdescription) + '"></iframe>');
    } 
} catch (e) { }

}
/*
     FILE ARCHIVED ON 12:47:16 Jan 21, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:07:36 Nov 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.467
  exclusion.robots: 0.015
  exclusion.robots.policy: 0.006
  esindex: 0.009
  cdx.remote: 8.833
  LoadShardBlock: 390.733 (3)
  PetaboxLoader3.datanode: 251.537 (7)
  PetaboxLoader3.resolve: 248.974 (2)
  load_resource: 154.593 (2)
*/