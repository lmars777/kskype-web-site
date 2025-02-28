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

//open all merchant buy links in a new window
$(document).ready( function() {
    $('A[rel="external"]').click( function() {window.open( $(this).attr('href') );return false;});
});

//sub category dropdown selector
function hideHeader(strCat) {
      if (strCat == "") {  
            $('div.product').show(); 
            $('#no_products_found').hide();
        }else{
            $('div.product').show(); 
            $('div.product:not(.'+strCat+')').hide();
            $('#no_products_found').hide();
        }
      if ($('div.'+strCat).size() == 0) {
          $('#no_products_found').show();
      }        
      var strCatSortHead = document.getElementById("categoryHeader");  
      var strCatSortSelect = document.getElementById("categorySelect");
      strCatSortHead.innerHTML = strCatSortSelect.options[strCatSortSelect.selectedIndex].innerHTML;        
} 
        
        
if (typeof SKYPE.shop == "undefined" || !SKYPE.shop) {
    SKYPE.namespace("shop");
}

SKYPE.shop.EnableDownload = function() {
    var D = YAHOO.util.Dom;
var E = YAHOO.util.Event;

var enableSave = function(el, enabled) {
        var frm = D.getAncestorByTagName(el, "FORM");
        var downloadButton = D.getElementsByClassName("downloadButton", "", frm, function() {
            this.disabled = (!enabled);
var span = this.getElementsByTagName("SPAN")[0];
if (enabled) {
                D.removeClass(span, "disabled");
            } else {
                D.addClass(span, "disabled");
            }
        });
    };

    E.onDOMReady(function(){
        var frm = D.getElementsByClassName("downloadEnabler", "FORM");
        for (var i = 0; i < frm.length; i++) {
            var elements = frm[i].getElementsByTagName("INPUT");
E.addListener(elements, "click", function() {
                enableSave(this, D.hasClass(this, "enableDownload"));
            });
        }
    });
}();


SKYPE.shop.ProductChanger = function() {
    var D = YAHOO.util.Dom;
var E = YAHOO.util.Event;

var fetchContent = function(cat) {
        var sUrl = '_category_' + cat + '.html';
        var container = D.get("productListContainer");

var transaction = YAHOO.util.Connect.asyncRequest(
'GET'
            ,sUrl
            ,{
                success: function(o) {
                    container.innerHTML = o.responseText;
}
                ,failure: function(o) {
                    if (o.status == 404) {
                        container.innerHTML = '<div><strong>No products found</strong></div>';
                    } else {
                        console.log(o);
                    }
                }
            }
            ,null
        ); 

    };

    E.onDOMReady(function(){
        var select = D.get("sortByCat");

        if (!select) {
            return;
        }

        if (!YAHOO.env.getVersion("connection")) {
            SKYPE.log("Connection library not present", "warn");
            return;
        }

        D.removeClass(select, "hidden");
        E.addListener(select, "change", function() {
            fetchContent(this.value);
        });
    });
}();

}
/*
     FILE ARCHIVED ON 12:47:47 Jan 21, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:07:03 Nov 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 2.26
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.014
  esindex: 0.009
  cdx.remote: 34.621
  LoadShardBlock: 123.619 (3)
  PetaboxLoader3.datanode: 172.812 (5)
  load_resource: 190.399 (2)
  PetaboxLoader3.resolve: 128.021 (2)
*/