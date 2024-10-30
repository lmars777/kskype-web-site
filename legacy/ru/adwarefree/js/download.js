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

SKYPE.namespace("www");
SKYPE.www.Download = function()
{
    var downloadingURL = "/go/downloading";
    var downloadnowURL = "/go/downloadnow";
    
    // HACK: shouldn't use getextra-xx links here, should write better sniffer instead probably
    if (location.href.indexOf("toolbar/") > -1)
    {
        downloadingURL = "downloading/";
        downloadnowURL = location.href.indexOf("skypeemailtoolbar/") > -1 ? "/go/getextra-outlooktoolbar" : "/go/getextra-officetoolbar";
    }
    
    var D = YAHOO.util.Dom;
    var E = YAHOO.util.Event;
    
    var iframeDownload = function(url)
    {
        var iframe = document.createElement("IFRAME");
        D.setStyle(iframe, "border", "0px solid white");
        D.setStyle(iframe, "position", "absolute");
        D.setStyle(iframe, "left", "0px");
        D.setStyle(iframe, "bottom", "0px");
        iframe.id = "download-iframe";
        iframe.width = 1;
        iframe.height = 1;
        iframe.src = url;
        document.body.appendChild(iframe);
    };
    
    // Special download prompt in separate window for IE
    var ieDownload = function(url)
    {
        SKYPE.www.Download.report();
        window.open(url, "skypedownload", "width=10,height=10,top=0,left=0,menubar=no,location=no,resizable=no,scrollbars=no,status=no,directories=no");
    };
    
    // Remaps some download links to skip some download steps
    E.onDOMReady(function()
    {
            // Override any downloading links in contents
            var links = D.getElementsBy(function(el)
            {
                return (el.href.indexOf("/go/downloading") > -1) || D.hasClass(el, "autodownload");
            }, "A");

            D.batch(links, function(el)
            {
                // See if element disallows this
                if (D.hasClass(el, "autodownloadoff")) return;
                
                var postfix = (el.href.indexOf("beta") > -1) ? "-beta" : "";
                var qs = (el.href.indexOf("?") > -1) ? ("?" + el.href.split("?", 2)[1]) : "";
                
                el.href = downloadingURL + postfix + qs;
                // In IE open download prompt right away
                if (SKYPE.util.Browser.isIE)
                {
                    E.addListener(el, "click", function()
                    {
                        ieDownload(downloadnowURL + postfix);
                    });
                    E.addListener(el, "keyup", function(ev)
                    {
                        (E.getCharCode(ev) == 13) && ieDownload(downloadnowURL + postfix);
                    });
                }
            });
    });
    
    // On donwload page, tries to report and do autodownload
    //E.addListener(window, "load", function()
    //E.onDOMReady(function()
    E.onAvailable("footer", function()
    {
        var page = location.href;
        
        // Lets only do this on download pages
        if (page.indexOf("/download/") == -1)
        {
            return;
        }
        
        // If downloading page
        if ((page.match(/\/downloading|\/business/) || D.hasClass(document.body, "downloading"))
            && !page.match(/\/windowsmobile/) && !page.match(/\/linux/))
        {
            var autoload = false;
            
            // See if we should do auto-load on win/mac (no auto-download for IE)
            if ((page.match(/(macosx|windows|toolbar)\/downloading/) || D.hasClass(document.body, "downloading"))
                && !SKYPE.util.Browser.isIE && !page.match(/\/linux/))
            {
                autoload = true;
            }
            
            // Lets find first /go/getskype* or /go/getextra* link and get that
            var links = document.getElementsByTagName("A");
            for (var i=0; i < links.length; i++)
            {
                if (links[i].href.match(/\/go\/get(skype|extra)/))
                {
                    E.addListener(links[i], "click", SKYPE.www.Download.report);
                    if (autoload)
                    {
                        SKYPE.www.Download.report();
                        //location.href = links[i].href;
                        iframeDownload(links[i].href);
                    }
                    return;
                }
            }
            // Alternatively Lets find first /go/getskype* form and get that
            var forms = document.getElementsByTagName("FORM");
            for (var i=0; i < forms.length; i++)
            {
                if (forms[i].action.match(/\/go\/get(skype|extra)/))
                {
                    E.addListener(forms[i], "submit", SKYPE.www.Download.report);
                    if (autoload)
                    {
                        SKYPE.www.Download.report();
                        //forms[i].submit();
                        iframeDownload(forms[i].action);
                    }
                    return;
                }
            }
        }
    });
    
    return {
        getDownloadCategory: function ()
        {
            // Known download category mappings
            var mappings = {
                '/download/skype/windows/business/':'BUSINESS'
                ,'/download/skype/macosx/':'MACOSX'
                ,'/download/skype/linux/':'LINUX'
                ,'/download/skype/windows/':'WINDOWS'
                ,'/download/skypeemailtoolbar/':'EMAILTOOLBAR'
                ,'/download/skypewebtoolbar/':'WEBTOOLBAR'
                ,'/download/skypeofficetoolbar/':'OFFICETOOLBAR'
                ,'/download/skype/mobile/':'MOBILE'
            };
            
            // Look it up from pathname
            for (var name in mappings)
            {
                if (!mappings.hasOwnProperty(name))
                    continue;
                
                if (location.pathname.indexOf(name) != -1)
                    return mappings[name];
            }
            
            // If not found, guess it
            if (typeof SKYPE.util.Browser != "undefined")
            {
                if (SKYPE.util.Browser.isWindows)
                {
                    return "WINDOWS";
                }
                else if (SKYPE.util.Browser.isMac)
                {
                    return "MACOSX";
                }
                else if (SKYPE.util.Browser.isLinux)
                {
                    return "LINUX";
                }
            }
            
            return "";
        },
        
 
        // Do special pageview to web analytics provider
        report: function()
        {
            if (typeof cmCreatePageviewTag == "undefined")
            {
                return;
            }
            var page = "download/"+ waPageName("");
            var cat = "DOWNLOAD-"+SKYPE.www.Download.getDownloadCategory();
            cmCreatePageviewTag(page, cat);
      
        }
    };
}();


}
/*
     FILE ARCHIVED ON 15:07:26 Feb 06, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:22:39 Oct 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.562
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.009
  esindex: 0.012
  cdx.remote: 50.875
  LoadShardBlock: 136.656 (3)
  PetaboxLoader3.datanode: 108.35 (6)
  PetaboxLoader3.resolve: 39.267
  load_resource: 20.803
*/