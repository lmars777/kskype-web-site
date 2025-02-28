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

// ----------------------------------------------------------------------------
// Pagination Plugin - A jQuery Plugin to paginate content
// v 1.0 Beta
// Dual licensed under the MIT and GPL licenses.
// ----------------------------------------------------------------------------
// Copyright (C) 2010 Rohit Singh Sengar
// http://rohitsengar.cueblocks.net/
// ----------------------------------------------------------------------------

var pageElement = Array();
var paginatorId = '';
var currentPage = 1;
var allItems = 0;
var lastPage = 1;

var startPage = 1; 
var itemsPerPage = 10; // no. of items
var firstPageSymbol = '<span class="pageSymbol"><span class="first">&nbsp;</span></span>';//<<
var previousPageSymbol = '<span class="pageSymbol"><span class="prev">&nbsp;</span></span>';//<
var nextPageSymbol = '<span class="pageSymbol"><span class="next">&nbsp;</span></span>';//>
var lastPageSymbol = '<span class="pageSymbol"><span class="last">&nbsp;</span></span>';//>>
var separator = ''; 
var paginatorPosition = 'bottom';
var paginatorStyle = 1;

    var anchorLink = 'javascript:void(0);';   
    var showIfSinglePage = false;

//pagination
$(function(){ 
$("#allAppList div.listColumn").pagination();  
}); 

$.fn.extend({
pagination: function() {
paginatorId=this; 
switch(paginatorPosition)
{
case 'bottom': { paginatorId.after('<div class="paginator"></div>'); break; }
} 
initPaginator();
},
        
        depagination: function() {
$('.paginator').remove();
paginatorId.children().show(); 
}
});

function initPaginator() 
{
if(itemsPerPage < 1)
itemsPerPage = 5;
allItems = paginatorId.children().length;
if(allItems%itemsPerPage == 0)
lastPage = parseInt(allItems/itemsPerPage);
else lastPage = parseInt(allItems/itemsPerPage)+1;

if((startPage < 1)||(startPage > lastPage))
startPage = 1;           
        if(!showIfSinglePage)
        {
            if(lastPage > 1) 
                appendContent(startPage, 1);
        }
        else
            appendContent(startPage, 1); 
}
function appendContent(page, effect) 
{
if(page < 0)
{
if(page == -1)
page = currentPage - 1;
else
page = currentPage + 1;
}
currentPage = page;
till = (currentPage-1)*itemsPerPage;
if(!effect)

{
paginatorId.fadeOut("medium", function () { 
createPaginator();
paginatorId.children().hide(); 
paginatorId.children().slice(till, itemsPerPage+till).show(); 
paginatorId.fadeIn("medium");
});
}
else
{
            createPaginator(); 
paginatorId.children().hide();
paginatorId.children().slice(till, itemsPerPage+till).show();

}
}
    
function createPaginator()  // for creating the paginator
{
$(".paginator").html("");
var style1 = ''; 

if(currentPage == 1) 
{
//style = '<a href="'+anchorLink+'" class="inactive" title="First Page">'+firstPageSymbol+'</a>' + separator;
//style1 = style;
style = '<a href="'+anchorLink+'" class="inactive" title="Previous Page">'+previousPageSymbol+'</a>' + separator;
style1 += style; 
} 
else 
{
//style = '<a href="'+anchorLink+'" class="active" onclick="appendContent(1);" title="First Page">'+firstPageSymbol+'</a>' + separator;
//style1 = style;
style = '<a href="'+anchorLink+'" class="active" onclick="appendContent(-1);" title="Previous Page">'+previousPageSymbol+'</a>' + separator;
style1 += style;
}
for(var i=1;i<=lastPage;i++)  
{
if(i == currentPage) 
{
style1 += '<a href="'+anchorLink+'" class="inactive" title="Page '+i+'">'+i+'</a>' + separator;
}
else
{
style = '<a href="'+anchorLink+'" class="active" onclick="appendContent('+i+');" title="Page '+i+'">'+i+'</a>' + separator;
style1 += style;
}
} 
if(currentPage == lastPage) 
{
style = '<a href="'+anchorLink+'" class="inactive" title="Next Page">'+nextPageSymbol+'</a>';
style1 += style;
//style = separator + '<a href="'+anchorLink+'" class="inactive" title="Last Page">'+lastPageSymbol+'</a>';
//style1 += style;
}
else
{
style = '<a href="'+anchorLink+'" class="active" onclick="appendContent(-2);" title="Next Page">'+nextPageSymbol+'</a>';
style1 += style;
//style = separator + '<a href="'+anchorLink+'" class="active" onclick="appendContent('+lastPage+');" title="Last Page">'+lastPageSymbol+'</a>';
//style1 += style;
}
switch (paginatorStyle)
{
case 1 : style = style1; break;
default : style = style1;
}


$(".paginator").html(style); 

}

// ----------------------------------------------------------------------------
// Splash
// App Keyword Search
// ----------------------------------------------------------------------------
$(document).ready(function(){
var default_search_copy = false;
$("#keywordSearch").click(function(){
if(!default_search_copy) {
default_search_copy = $(this).val();
}
$(this).val("");
});
$("#keywordSearch").blur(function(){
if($(this).val()==""){
$(this).val(default_search_copy);
}
});
});


// ----------------------------------------------------------------------------
// Splash
// App Scroll Widget
// ----------------------------------------------------------------------------
var timeout    = 500;
var closetimer = 0;
var ddmenuitem = 0;

function jsddm_open()
{  jsddm_canceltimer();
   jsddm_close();
   ddmenuitem = $(this).find('ul.horizontal').css('visibility', 'visible');}

function jsddm_close()
{  if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');}

function jsddm_timer()
{  closetimer = window.setTimeout(jsddm_close, timeout);}

function jsddm_canceltimer()
{  if(closetimer)
   {  window.clearTimeout(closetimer);
  closetimer = null;}
}

$(document).ready(function()
{  $('ul.getNow > li ').bind('mouseover', jsddm_open)
   $('ul.getNow > li ').bind('mouseout',  jsddm_timer)
 });
   
document.onclick = jsddm_close;


// ----------------------------------------------------------------------------
// Overlay Copy over from shop.js
// PAD Information
// ----------------------------------------------------------------------------

var productCompareOverlay = {
overlay: null,
window: null,
w: null,
pages: new Array(),
current: 0,
initialized: false,

init: function(){
this.overlay = $('#modalOverlay');
this.overlay.click(function(){ productCompareOverlay.hide(); });
this.w = $($('html').get(0));
this.window = $('#modalPhoneCompare');
this.initialized = true; 

$('a.page',this.window).each(function(i){
productCompareOverlay.pages.push($(this));
});
},
show: function(){
if(!this.initialized)
this.init();

this.current = 0;

/* overlay */
this.setOverlaySize();
$(this.overlay).css({ opacity: 0 }).show(); 
$(this.overlay).animate( { opacity: 0.7 }, 200 ); 
$(window).resize(productCompareOverlay.setOverlaySize);

/* window */
var scrollPosition = $(window).scrollTop()+146;
this.window.css({'top':scrollPosition+'px'});
this.window.show();

},
hide: function(){ 
productCompareOverlay.window.hide();
productCompareOverlay.overlay.fadeOut();
$(window).unbind('resize', productCompareOverlay.setOverlaySize);  
},
setOverlaySize: function(){ 
var widthHeight = productCompareOverlay.viewport(); 
$(productCompareOverlay.overlay).css({width:widthHeight[0],height:widthHeight[1]});
},
viewport: function() {

// the horror case
if ($.browser.msie) {

// if there are no scrollbars then use window.height
var d = $(document).height(), w = $(window).height();

return [
window.innerWidth ||  // ie7+
document.documentElement.clientWidth ||  // ie6  
document.body.clientWidth,  // ie6 quirks mode
d - w < 20 ? w : d
];
} 

// other well behaving browsers
return [$(window).width(), $(document).height()];

} 
}

var skypeShop = {
initTooltips: function(){
/* tooltips */
$('.tooltipOut').mouseenter(function(){
var offset = $(this).offset();
var left = offset.left + ($(this).width()/2) - 40;
var top = offset.top - $('#toolTip').height()-2;

$('#toolTip').css({'left': left+'px','top': (top-8)+'px','display':'block'}); //'opacity':0
$('#toolTip').stop().animate({'top':top+'px'}); //'opacity':1,

}).mouseleave(function(){
var offset = $('#toolTip').offset();
var top = offset.top-2;
$('#toolTip').stop().animate({'top':top+'px'},100,function(){ $(this).hide(); }); 
//'opacity':0,
//$('#toolTip').fadeOut();
}); 
}
};

//onload init
$(function() { 

/* product compare overlay */
$('.showProductCompareOverlay').click(function(e){
productCompareOverlay.show();
e.preventDefault();
});
$('#modalPhoneCompare span.closeButton a').click(function(e){
productCompareOverlay.hide();
e.preventDefault();
});

});

/*IE6 image transpancy issue */
//$(document).ready(function(){
//$('img[src$=.png], span.ls, span.rs').ifixpng();
//});



//Product Tab
$(function () {
    $(document).ready(function () {
        $('#technicalFeatures div.tabs a').click(function (e) {
            $('#technicalFeatures div.tabs a').removeClass('active');
            //$('.tabComponent div.tabs a').prev().removeClass('beforeActive');
            //$('.tabComponent div.tabs a').next().removeClass('afterActive');

            $('#technicalFeatures div.tabContent').hide();

            $(this).addClass('active');
            //$(this).prev().addClass('beforeActive');
            //$(this).next().addClass('afterActive');
            var id = $(this).attr('rel');
            $('#' + id).show();
            e.preventDefault();
        });
    });

});

/* product page gallery */
$(function () {
    $('.showPhotosOverlay').click(function (e) {
        $('#photosOverlay').show();
        $('#' + $(this).attr('rel')).click();
        e.preventDefault();
    });
    $('#photosOverlay .closeButton').click(function (e) {
        $('#photosOverlay').hide();
        e.preventDefault();
    });
    $('#photosOverlay div.thumbnails a').each(function (i) {
        $(this).data('largeImage', $(this).attr('href'));
        $(this).attr('href', '#img' + i);
    });
    $('#photosOverlay div.thumbnails a').click(function (e) {
        $('#photosOverlay div.thumbnails a').removeClass('active');
        $(this).addClass('active');

        $('#photosOverlay #photoName').html($(this).attr('title'));
        $('#photosOverlay #photoName').removeClass('dark');
        $('#imageLoading').show();

        // Image preload process
        var that = this;
        var objImagePreloader = new Image();
        objImagePreloader.onload = function () {

            if ($(that).hasClass('dark')) {
                $('#photosOverlay #photoName').addClass('dark');
            } else {
                $('#photosOverlay #photoName').removeClass('dark');
            }
            $('#photosOverlay #currentPhoto').attr('src', $(that).data('largeImage'));
            $('#imageLoading').fadeOut();

            objImagePreloader.onload = function () { };
        };
        objImagePreloader.src = $(this).data('largeImage');
        e.preventDefault();
    });
});

}
/*
     FILE ARCHIVED ON 12:47:24 Jan 21, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:07:05 Nov 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.583
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.014
  esindex: 0.01
  cdx.remote: 17.463
  LoadShardBlock: 108.88 (3)
  PetaboxLoader3.datanode: 140.648 (5)
  load_resource: 195.243 (2)
  PetaboxLoader3.resolve: 148.999 (2)
*/