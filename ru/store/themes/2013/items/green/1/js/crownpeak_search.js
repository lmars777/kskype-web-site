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

function submitSearch(element_type, e)
{

    var searchTxt = document.getElementById("keywordSearch");   
    var query = "";
    if(searchTxt)
    {
        query = searchTxt.value;
        if(query == "Enter Keyword")
        {
            query = "";
        }
    }
    
    if(element_type == "text")
    {
        var submit = true; 
        // if enter key is not pressed don't submit
        if(window.event)
        {
            if (window.event.keyCode != 13)
            {
                submit = false;        
            }
        }
        else if(e)
        {
            if(e.which != 13)
            {
                submit = false;
            }
        }
        else
        {
            submit = false;
        }

        if(submit == true)
        {
            window.location = "/apps/Search-Results.html?q=" + query + "#results";
        }        
        
    }
    else if(element_type == "basic")
    {
        window.location = "/apps/Search-Results.html?q=" + query + "#results";    
    }
    else if(element_type == "advanced")
    {
        /* Retain Keyword */
        /*
        query = window.location.search;
        if(query.indexOf("?") < 0)
        {
            query = "?q=";
        }
        else if(query.indexOf("&") > 0)
        {
            query = query.substring(query.indexOf("?"), query.indexOf("&"));
        }
        */
                
        query = "?q=";
        
        var filterCategory = document.getElementById("filterCategory");
        var filterCost = document.getElementById("filterCost");
        var filterLanguages = document.getElementById("filterLanguages");
        var filterWinMac = document.getElementById("filterWinMac");
        var filterDateAdded = document.getElementById("filterDateAdded");
        var sortBy = document.getElementById("sortBy");
        
        if(filterCategory)
        {
            query += "&category=" + filterCategory.value;
        }
        if(filterCost)
        {
            query += "&cost=" + filterCost.value;
        }
        if(filterLanguages)
        {
            query += "&lang=" + filterLanguages.value;
        }
        if(filterWinMac)
        {
            query += "&os=" + filterWinMac.value;            
        }
        if(filterDateAdded) 
        {
            query += "&date=" + filterDateAdded.value;
        }
        if(sortBy)
        {
            query += "&sort=" + sortBy.value;
        }
        
        window.location = "/apps/Search-Results.html" + query + "#results";        
    }
    else if(element_type == "reset")
    {
        var filterCategory = document.getElementById("filterCategory");
        var filterCost = document.getElementById("filterCost");
        var filterLanguages = document.getElementById("filterLanguages");
        var filterWinMac = document.getElementById("filterWinMac");
        var filterDateAdded = document.getElementById("filterDateAdded");
        var sortBy = document.getElementById("sortBy");
        
        if(filterCategory)
        {
            filterCategory.value = "";
        }
        if(filterCost)
        {
            filterCost.value = "";
        }
        if(filterLanguages)
        {
            filterLanguages.value = "";
        }
        if(filterWinMac)
        {
            filterWinMac.value = "";            
        }
        if(filterDateAdded) 
        {
            filterDateAdded.value = "";
        }
        if(sortBy)
        {
            sortBy.value = "";
        }  
    }    
}

function getQueryString(key, default_)
{
    if (default_==null) default_=""; 
    key = key.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regex = new RegExp("[\\?&]"+key+"=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if(qs == null)
        return default_;
    else
        return qs[1];
}


$(document).ready(function(){

    var query = getQueryString("q");
    if(query != "")
    {
        $("#keywordSearch").val(query);
    }
    
    var category = getQueryString("category");
    $("#filterCategory").val(category);
    var cost = getQueryString("cost");
    $("#filterCost").val(cost);
    var lang = getQueryString("lang");
    $("#filterLanguages").val(lang);
    var os = getQueryString("os");
    $("#filterWinMac").val(os);
    var date = getQueryString("date");
    $("#filterDateAdded").val(date);
    var sort = getQueryString("sort");
    $("#sortBy").val(sort);

});



}
/*
     FILE ARCHIVED ON 12:46:56 Jan 21, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:07:08 Nov 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.468
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 10.129
  LoadShardBlock: 254.918 (3)
  PetaboxLoader3.datanode: 196.286 (5)
  PetaboxLoader3.resolve: 248.73 (3)
  load_resource: 208.279 (2)
*/