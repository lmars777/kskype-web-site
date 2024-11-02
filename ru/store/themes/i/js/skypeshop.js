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

//===================
//Skype Shop JavaScript
//===================

(function ($) {

    //Homepage Carousel
    $(document).ready(function () {
        //$("#rotator").tabs({ event: "mouseover" }).tabs("rotate", 10000, true);  //10 sec
        $("#rotator").tabs().tabs("rotate", 10000, true);  //onclick, 10 sec
    });

    //Left Nav Category DropDown
    $(document).ready(function () {
        $('#catNav').mouseenter(function () {
            //$('#catNav').click(function(){
            var offset = $(this).offset();
            var left = 0; //offset.left + ($(this).width()*0) - 120
            var top = 0; //offset.top - ($('.catNavOut').height()*0) + 0;
            $('.catNavOut').css({ 'left': left + 'px', 'top': (top) + 'px', 'display': 'block' });
            $('.catNavOut').stop().animate({ 'top': top + 'px' });
        });
        $('.catNavOut').mouseleave(function () {
            var offset = $('.catNavOut').offset();
            var top = offset.top;
            $('.catNavOut').stop().animate({ 'top': top + 'px' }, 0, function () { $(this).hide(); });
        });
    });

    //Product page Widget DropDown
    $(document).ready(function () {
        $('#widget-dd').click(function () {
            var offset = $(this).offset();
            var left = 0;
            var top = 26;
            $('.widget-ddOut').css({ 'left': left + 'px', 'top': (top) + 'px', 'display': 'block' });
        });
        $('.widget-ddOut').mouseleave(function () {
            var offset = $('.widget-ddOut').offset();
            var top = offset.top;
            $('.widget-ddOut').hide();
        });
    });

    //Product page Widget DropDown
    $(document).ready(function () {
        $('#sort-dd').click(function () {
            var offset = $(this).offset();
            var left = 0;
            var top = 25;
            $(this).find('.widget-ddOut').css({ 'left': left + 'px', 'top': (top) + 'px', 'display': 'block' });
        });

        $('#sort-dd').mouseleave(function () {
            $(this).find('.widget-ddOut').hide();
        });


        $('#brand-dd').click(function () {
            var offset = $(this).offset();
            var left = 0;
            var top = 26;
            $(this).find('.widget-ddOut').css({ 'left': left + 'px', 'top': (top) + 'px', 'display': 'block' });
            return false;
        });

        $('#brand-dd').mouseleave(function () {
            $(this).find('.widget-ddOut').hide();
        });

        $('.widget-ddOut').mouseleave(function () {
            var offset = $('.widget-ddOut').offset();
            var top = offset.top;
            $('.widget-ddOut').hide();
        });

        // Select Sort Type
        $('#sort-dd ul li a').click(function () {
            $(this).closest('.widget-ddOut').siblings('span.txt').text($(this).text());
            $('.widget-ddOut').hide();
            return false;
        });

        $('#brand-dd ul li a').click(function () {

            $('#brand-details span.dropdownitem').hide();
            $(this).closest('.widget-ddOut').siblings('span.txt').text($(this).text());
            $('.widget-ddOut').stop().hide();
            $('#' + $(this).text().toLowerCase() + '-compat').show();
            return false;
        });

        // Category Description SHOW/HIDE full 
        function toggleCtgTxt() {
            $('.ctg-header a.moreCtgInfo').toggle().closest('.ctg-header').toggle();
            $('.ctg-header.full').toggle();
            return false;
        }

        // move links to the end of the last P tag
        $('.ctg-header.brief p:last').append($('.ctg-header a.moreCtgInfo'));
        $('.ctg-header.full p:last').append($('.ctg-header a.hideCtgInfo')); // Hide link

        // Add toggle functionlity
        $('.ctg-header a.moreCtgInfo').click(toggleCtgTxt);
        $('.ctg-header a.hideCtgInfo').click(toggleCtgTxt);
    });

    //Tooltip
    $(document).ready(function () {
        if ($('#isLandingPageCategory').length <= 0) {
            $('.tooltip').click(function () {
                var trigger = $(this).attr('id');
                var popup = '#' + trigger + '-window';
                var offset = $(this).offset();
                var position = $(this).position();
                var left = -262; //Align to right
                var topShift = $('#isLandingPage').length > 0 ? 465 : 305
                var top = offset.top - ($('.tooltipOut').height() * 0) - topShift;
                var arrow = position.left - ($(this).width() * 0) - 100;
                //alert('left:' + arrow + 'px');
                var prevPopupId = $('.tooltipOut').attr('id');
                var prevPopup = '#' + prevPopupId;
                if (prevPopup != popup) {
                    $(popup).css({ 'right': left + 'px', 'top': (top) + 'px', 'display': 'block' });
                    $('.position-arrow').css({ 'left': arrow + 'px' });
                    $(popup).stop().animate({ 'top': top + 'px' });
                    $(prevPopup).hide();
                    //alert('prev' +prevPopup);	
                }
                prevPopupId = $(this).attr('id');
                prevPopup = '#' + prevPopupId + '-window';
                //alert('this id:' + prevPopup);
                $('.tooltipOut').hide();
                $(prevPopup).css({ 'right': left + 'px', 'top': (top) + 'px', 'display': 'block' });
                $('.position-arrow').css({ 'left': arrow + 'px' });
                $(prevPopup).stop().animate({ 'top': top + 'px' });
            });


            $('#featuredOfferTooltip').unbind().click(function () {
                var trigger = $(this).attr('id');
                var popup = '#' + trigger + '-window';
                var offset = $(this).offset();
                var position = $(this).position();
                var left = -248; //Align to right
                var topShift = 285;
                var top = offset.top - ($(popup).height() * 0) - topShift;
                var arrow = position.left - ($(this).width() * 0) - 100;
                $(popup).css({ 'right': left + 'px', 'top': (top) + 'px', 'display': 'block' });
                $('.position-arrow').css({ 'left': arrow + 'px' });
                $(popup).stop().animate({ 'top': top + 'px' });
            });

            //Close Tooltip
            $('.close-btn').click(function (e) {
                $('.tooltipOut').hide();
                e.preventDefault();
            });
        }
    });

    //Product Details tab
    $(document).ready(function () {
        if ($('#isLandingPage').length <= 0) {
            $('.tabComponent div.tabs a').click(function (e) {
                $('.tabComponent div.tabs a').removeClass('active');
                $('.tabComponent div.tabs a').prev().removeClass('beforeActive');
                $('.tabComponent div.tabs a').next().removeClass('afterActive');

                $('#tabs-1, #tabs-2, #tabs-3, #tabs-4, #tabs-5').hide();

                $(this).addClass('active');
                $(this).prev().addClass('beforeActive');
                $(this).next().addClass('afterActive');
                var id = $(this).attr('rel');
                var activeTab = $(this);
                $('#' + id).show();
                e.preventDefault();
            });
        }
    });

    //Pretty photo
    $(document).ready(function () {
        $("a[data-rel^='prettyPhoto']").each(
            function () {
                elem_width = $($(this).attr('href')).width();
                elem_height = $($(this).attr('href')).height();
                elem_width = elem_width == null ? 500 : elem_width;
                elem_height = elem_height == null ? 344 : elem_height;
                $(this).prettyPhoto(
                    {
                        hook: 'data-rel',
                        show_title: false,
                        default_width: elem_width,
                        default_height: elem_height
                    }
                );
            }
        );

    });


    //AB test hardcoded values
    $(document).ready(function () {
        strLocale = (typeof strLocale == 'undefined') ? "" : strLocale.toLowerCase();

        if (strLocale == 'en_us') {
            $("#compare-price").insertBefore("#product-details");
            $("#compare-price").addClass("first").removeClass("last").click(); ;
            $("#product-details").removeClass("first");
            $("#ratings-and-reviews").addClass("last");
            $("#pricesCount").attr('ref', '!count! prices found from our partner(s) !from shops!');
            $("#pricesCount").attr('ref1', '!count! price found from our partner(s) !from shops!');
        }
        if (strLocale == 'en_ca') {
            $('#compare-price-link').html('Compare prices (starting at <span id="minPrice"></span>)');
        }
        if (strLocale == 'fr_fr') {
            $('#compare-price-link').html('Comparer les prix (&agrave; partir de <span id="minPrice"></span>)');
        }
        if (strLocale == 'de_de') {
            $("#compare-price").insertBefore("#product-details");
            $("#compare-price").addClass("first").removeClass("last").click(); ;
            $("#product-details").removeClass("first");
            $("#ratings-and-reviews").addClass("last");

            $('#compare-price-link').html('Preise vergleichen (ab <span id="minPrice"></span>)');
        }
        //Price tab on the first place
        if (strLocale == 'da_da' || strLocale == 'de_at' || strLocale == 'no_no' || strLocale == 'sv_sv' || strLocale == 'en_gb' || strLocale == 'nl_nl' || strLocale == 'fr_fr' || strLocale == 'it_it') {
            $("#compare-price").insertBefore("#product-details");
            $("#compare-price").addClass("first").removeClass("last").click(); ;
            $("#product-details").removeClass("first");
            $("#ratings-and-reviews").addClass("last");
        }

    });

    //Product Display
    $(document).ready(function () {
        $('.thumbs a.thumb').click(function (e) {
            $('.thumbs a.thumb').removeClass('active');

            $('#thumb-1, #thumb-2, #thumb-3, #thumb-4, #thumb-5, #thumb-6, #thumb-7, #thumb-8, #thumb-9, #thumb-10, #thumb-11, #thumb-12, #thumb-13, #thumb-14, #thumb-15, #thumb-16, #thumb-17, #thumb-18, #thumb-19, #thumb-20, #thumb-21, img.prodDefault').hide();

            $(this).addClass('active');
            var id = $(this).attr('rel');
            var activeTab = $(this);
            if ($('#' + id).length > 0) {
                tt_html = $.trim($('#' + id).html());
                tt_text = $.trim($('#' + id).text());
                if (tt_html != '') {
                    $('#' + id).show();
                }
                else {
                    $('#thumb-1').show();
                }
            }
            else {
                $('#thumb-1').show();
            }

            e.preventDefault();
        });
        //$('.prod-display').mouseleave(function(){
        //	$('.thumbs a.thumb').removeClass('active');
        //	$('#thumb-1, #thumb-2, #thumb-3, #thumb-4, #thumb-5, #thumb-6').hide();
        //	$('img.prodDefault').show();	
        //});

    });

    //Open Tab Function
    $(document).ready(function () {
        $('a.tab-open').click(function (e) {
            $('.tabComponent div.tabs a').removeClass('active');
            $('.tabComponent div.tabs a').prev().removeClass('beforeActive');
            $('.tabComponent div.tabs a').next().removeClass('afterActive');

            $('#tabs-1, #tabs-2, #tabs-3, #tabs-4, #tabs-5').hide();

            var id = $(this).attr('rel');
            $('#' + id).show();

            var activeTab = $(this).attr('tabactive');
            //alert(activeTab);
            $('#' + activeTab).addClass('active');
            $('#' + activeTab).prev().addClass('beforeActive');
            $('#' + activeTab).next().addClass('afterActive');

            var jump = $(this).attr('href');
            var new_position = $(jump).offset();
            window.scrollTo(new_position.left, new_position.top);
            return false;

            e.preventDefault();
        });
    });

    //Open Page & Tab Function
    $(document).ready(function () {
        var produrl = window.location.hash; //#tabs-5
        //alert(produrl);
        if (produrl == '#tabs-5') {
            //Hide None Active Tab
            $('.tabComponent div.tabs a').removeClass('active');
            $('.tabComponent div.tabs a').prev().removeClass('beforeActive');
            $('.tabComponent div.tabs a').next().removeClass('afterActive');
            $('#tabs-1, #tabs-2, #tabs-3, #tabs-4').hide();
            //Active Tab
            $('#tabs-5').show();
            $('#compare-price').addClass('active');
            $('#compare-price').prev().addClass('beforeActive');
            $('#compare-price').next().addClass('afterActive');
        }

    });


    //    $(document).ready(function () {
    //        $('img.openVideoOverlay[rel]').overlay({
    //            mask: { color: '#202a32' }
    //        });
    //    });

    //Sorting price results
    $(document).ready(function () {
        var k = 0;
        var interval = setInterval(function () {
            var pricesLen = $('.sortable').length;
            var pricesText = pricesLen > 1 ? $('#pricesCount').attr('ref') : $('#pricesCount').attr('ref1');
            var pricesfromID = $('#pricesCount').attr('refid');
            pricesfromID = (pricesfromID == undefined | pricesfromID == '') ? "#pricesCount" : "#" + pricesfromID;
            if (pricesText != undefined) {
                fromShopsText = $('#fromShops').text();
                pricesCountText = pricesText.replace('!count!', pricesLen);
                pricesCountText = pricesCountText.replace('!from shops!', fromShopsText);
                $(pricesfromID).html(pricesCountText);
            }

            if ($(".sortable").length > 1) {
                sortByPrice(false);
            }
            if ($(".sortable").length >= 1) {
                $minPriceStr = $('.sortable .buynow-price').eq(0);
                minPriceStr = $minPriceStr.text();
                jsPosition = minPriceStr.indexOf('document.write');
                minPriceStr = jsPosition < 0 ? minPriceStr : '$' + $minPriceStr.attr('rel');
                //$('#minPrice').hide();
                $('#minPrice').html(minPriceStr);
                //$('#minPrice').show();
            }
            $('#mboxContainer').css('visibility', 'visible');
            //Clear interval after 5 attempt
            k++;
            if (k > 5) {
                clearInterval(interval);
            }
        }, 1000);
    });

})(jQuery);

//Setting interstitial page redirect
function setInterstitialPage(merchantURL, iURL, timeout, qString) {
    var k = 0;
    var interval = setInterval(function () {
        $('.greenbtn, .greenbtn-sml').each(function (index) {

            var hrefAttr = $(this).attr('href');
            var clickAttr = $(this)[0].getAttribute('onclick');
            if (hrefAttr.indexOf(merchantURL) != -1) {
                hrefNew = hrefAttr + "&" + qString;
                if (iURL == '') {
                    interstitialURL = hrefNew;
                }
                else {
                    interstitialURL = iURL + '?redirectURL=' + encodeURIComponent(hrefNew) + '&skypeURL=' + encodeURIComponent(window.location.href) + '&timeout=' + timeout;
                }

                clickAttr = clickAttr.replace(hrefAttr, interstitialURL);
                $(this)[0].setAttribute('onclick', clickAttr);
            }

        });
        k++;
        if (k > 5) {
            clearInterval(interval);
        }
    }, 1000);
}

//Price for Similar Products section
function getSimilarProductPrice(intProdId, intShopId, strDivID, discountType) {
    $.getJSON("https://web.archive.org/web/20130120025529/http://shop.skype.com/proxy/proxy.php?productid=" + intProdId + "&shopid=" + intShopId + "&jsoncallback=?", displayShop);

    function displayShop(data) {
        strH = "";
        x = 0;
        // Now start cycling through our array
        $.each(data, function (i, item) {
            x = x + 1;
            if (x <= 1) {
                strPrice = item.Cost.replace("$", "");
                strPrice = strPrice.replace(",", ""); // CPT Added
                if (typeof item.Promotion != "undefined" && item.Promotion != "" && item.Promotion != "0" && Number(item.Promotion) != 0) {
                    strPrice = item.Promotion;
                    strPrice = strPrice.replace("$", ""); // CPT Added
                    strPrice = strPrice.replace(",", ""); // CPT Added
                }
                if (strPrice != "0" && strPrice != "" && typeof strPrice != "undefined") {
                    strH = strH + monFormatter.format(strPrice);
                }
            }
        });
        $('#' + strDivID).before(strH);
        $('#' + strDivID).hide();
    }
}

//BuyNow section for the featured retailer NEW
function getFeaturedCostSection(intProdId, intShopId, strDivID, omniProduct, omniCat, omniSubCat, omniShop, freeDelivery, strBuyNow, strinStock, retailerTxt, promoTxt, discountClass, retailerImg, discountType, strOutStock, longPrice, nonavailable, prodPriceText) {
    $.getJSON("https://web.archive.org/web/20130120025529/http://shop.skype.com/proxy/proxy.php?productid=" + intProdId + "&shopid=" + intShopId + "&jsoncallback=?", displayShop);
    function displayShop(data) {

        var strH = "";
        var strM = "";
        var strBorder = "";
        var strImg = "";
        var x = 0;

        // Now start cycling through our array
        $.each(data, function (i, item) {
            x = x + 1;
            if (x == 1) {


                var strUrl = "";
                var strPrice = "";
                var intStrikePrice = "";

                strPrice = item.Cost.replace("$", "");
                strPrice = strPrice.replace(",",""); // CP Added
                if (item.Promotion != "" && typeof item.Promotion != "undefined" && item.Promotion != null && item.Promotion != "0" && Number(item.Promotion) != 0) {
                    strPrice = item.Promotion;
                    strPrice = strPrice.replace("$", ""); // CP Added
                    strPrice = strPrice.replace(",", ""); // CP Added                   
                }
                intStrikePrice = item.Cost.replace("$", "");
                intStrikePrice = intStrikePrice.replace(",",""); // CP Added

                if (Number(intStrikePrice) != Number(strPrice) && Number(intStrikePrice) > Number(strPrice)) {
                    percentOff = calculateDiscountPercent(Number(intStrikePrice), Number(strPrice));

                    if (discountType != "1") {
                        strH += '<div class="discountItemAuto"><p class="p_off">' + percentOff + '%</p><span class="off">off</span></div>';
                    }
                    else {
                        strH += '<div class="discountItemAuto"><p class="p_minus">-' + percentOff + '%</p></div>';
                    }

                }

                //override price for promo
                if (strPrice != "0" && strPrice != "" && typeof strPrice != "undefined") {

                    prodPriceText = prodPriceText == undefined ? '' : prodPriceText;
                    intStrikePrice = prodPriceText == '' ? intStrikePrice : strPrice;
                    strPrice = prodPriceText == '' ? strPrice : Number(prodPriceText);

                    strH += '<div class="featured-retailer">' + retailerTxt;
                    if ($('#featuredOfferTooltip-window').length > 0) {
                        strH += '<span id="featuredOfferTooltip" class="tooltip">&nbsp;</span>';
                    }

                    strH += '</div><div class="retail-info">';
                    // 
                    strH += '<img src="' + retailerImg + '" class="merchant-logo" />';

                    strH = strH + '<p class="prod-price">';
                    if (Number(intStrikePrice) != Number(strPrice)) {
                        longPriceStr = longPrice == '' || longPrice == undefined ? '' : "<br>";
                        strH = strH + '      <span class="strikePrice">' + monFormatter.format(intStrikePrice) + '<\/span>' + longPriceStr + '<span class="price red">' + monFormatter.format(strPrice) + '<\/span>';
                        //strH = strH + '      <span class="promoPrice"><a href="' + item.Url + '" class="lighter" target="_blank">' + monFormatter.format(strPrice) + '<\/a><\/span>';
                        //strH = strH + '<span class="offer">(you save 20%)</span>'
                    }
                    else {
                        strH = strH + '      <span class="price">' + monFormatter.format(strPrice) + '<\/span>';
                    }
                    strH = strH + '<\/p>';

                    //strH = strH + '<div class="horizontal-shadow-mid"><\/div>';
                    if (freeDelivery != "") {
                        strH = strH + '<p class="free-delivery">' + freeDelivery + '</p>';
                    }
                    if (promoTxt != "") {
                        strH += '<p class="special-offer"><span class="icon-for-sp-offer">' + promoTxt + '</span><a id="offer" class="tooltip">&nbsp;</a></p>';
                    }
                    onclickStr = "SKYPE.wanalytics.Shop.trackBuy({type:'accessory', category: '" + omniCat + "',subcategory:'" + omniSubCat + "',product: '" + omniProduct + "',price:" + strPrice + ",currency: '" + monFormatter.currencyCode + "',fullfiller: '" + omniShop + "'})";

                    strH = strH + '<div class="horizontal-shadow-mid"></div><div class="buy-now">';
                    strH = strH + '<span class="go-link-button"><a class="greenbtn" href="' + item.Url + '" onClick="' + onclickStr + ';tt_Redirect(\'' + item.Url + '\');return false;" target="_blank"><span class="text">' + strBuyNow + '<\/span> <\/a><\/span>';

                    if (item.Stock != "" && Number(item.Stock) != 0) {
                        strH = strH + '<span class="tick">' + strinStock + '<\/span>';
                    }
                    else {
                        strH = strH + '<span class="tick-out">' + strOutStock + '<\/span>';
                    }
                    strH = strH + '<div class="clear"><\/div>';
                    strH = strH + '<\/div><\/div>';

                }
                else {
                    strH += '<div class="featured-retailer">' + retailerTxt + '</div><div class="retail-info">';
                    // 
                    strH = strH + '<p class="prod-price">';
                    nonavailableText = nonavailable == undefined ? 'Currently unavailable' : nonavailable;
                    strH += '<p class="prod-notavailable">' + nonavailableText + '</p>';
                    strH = strH + '<div class="clear"><\/div>';
                    strH = strH + '<\/div>';
                }
            }
        });


        $('#' + strDivID).before(strH);
        $('#' + strDivID).hide();

        $('.tooltip').click(function () {
            var trigger = $(this).attr('id');
            var popup = '#' + trigger + '-window';
            var offset = $(this).offset();
            var position = $(this).position();
            var left = -262; //Align to right
            var topShift = $('#isLandingPage').length > 0 ? 465 : 305
            var top = offset.top - ($('.tooltipOut').height() * 0) - topShift;
            var arrow = position.left - ($(this).width() * 0) - 115;
            //alert('left:' + arrow + 'px');
            var prevPopupId = $('.tooltipOut').attr('id');
            var prevPopup = '#' + prevPopupId;
            if (prevPopup != popup) {
                $(popup).css({ 'right': left + 'px', 'top': (top) + 'px', 'display': 'block' });
                $('.position-arrow').css({ 'left': arrow + 'px' });
                $(popup).stop().animate({ 'top': top + 'px' });
                $(prevPopup).hide();
                //alert('prev' +prevPopup);	
            }
            prevPopupId = $(this).attr('id');
            prevPopup = '#' + prevPopupId + '-window';
            //alert('this id:' + prevPopup);
            $('.tooltipOut').hide();
            $(prevPopup).css({ 'right': left + 'px', 'top': (top) + 'px', 'display': 'block' });
            $('.position-arrow').css({ 'left': arrow + 'px' });
            $(prevPopup).stop().animate({ 'top': top + 'px' });
        });

        // Close down the JSON call
    }

} // End displayShop Function call


//Product price for the Home page
function getHomeProductPrice(intProdId, intShopId, strDivID, discountType, longPrice) {
    $.getJSON("https://web.archive.org/web/20130120025529/http://shop.skype.com/proxy/proxy.php?productid=" + intProdId + "&shopid=" + intShopId + "&jsoncallback=?", displayShop);

    function displayShop(data) {
        strH = "";
        x = 0;
        // Now start cycling through our array
        $.each(data, function (i, item) {
            x = x + 1;
            if (x <= 1) {
                strPrice = item.Cost.replace("$", "");
                strPrice = strPrice.replace(",", ""); // CP Added
                if (typeof item.Promotion != "undefined" && item.Promotion != "" && item.Promotion != "0" && Number(item.Promotion) != 0) {
                    strPrice = item.Promotion;
                    strPrice = strPrice.replace("$", "");
                    strPrice = strPrice.replace(",", ""); // CP Added
                }
                intStrikePrice = item.Cost.replace("$", "");
                intStrikePrice = intStrikePrice.replace(",", "");

                if (strPrice != "0" && strPrice != "" && typeof strPrice != "undefined") {

                    $offerElem = $('#' + strDivID).parent().prevAll('div.prodDetail').find('div.offerAuto');
                    if (Number(intStrikePrice) != Number(strPrice) && Number(intStrikePrice) > Number(strPrice)) {
                        percentOff = calculateDiscountPercent(Number(intStrikePrice), Number(strPrice));

                        if (discountType != "1") {
                            strDiscount = '<div class="discountItemAuto"><p class="p_off">' + percentOff + '%</p><span class="off">off</span></div>';
                        }
                        else {
                            strDiscount = '<div class="discountItemAuto"><p class="p_minus">-' + percentOff + '%</p></div>';
                        }
                        $offerElem.before(strDiscount);
                    }
                    $offerElem.hide();

                    if (Number(intStrikePrice) != Number(strPrice)) {
                        strH = strH + '<span class="strikePrice">' + monFormatter.format(intStrikePrice) + '</span>';
                        strH = strH + '<span class="price red">' + monFormatter.format(strPrice) + '</span>';
                    }
                    else {
                        strH = strH + '<span class="noStrikePrice">' + '&nbsp;' + '</span>';
                        strH = strH + '<span class="price black">' + monFormatter.format(strPrice) + '</span>';
                    }
                }
            }
        });
        $('#' + strDivID).before(strH);
        $('#' + strDivID).hide();
    }
}


//Compare price section for the Product template
function getComparePrice(intProdId, intShopId, strDivID, omniProduct, omniCat, omniSubCat, omniShop, strBuyNow, strinStock, strNotAvailable, strFreeDelivery, featuredclass, strFeaturedText, discountType, inStockText, outStockText) {
    $.getJSON("https://web.archive.org/web/20130120025529/http://shop.skype.com/proxy/proxy.php?productid=" + intProdId + "&shopid=" + intShopId + "&jsoncallback=?", displayShop);
    function displayShop(data) {

        var strH = "";
        var strM = "";
        var strBorder = "";
        var strImg = "";
        var x = 0;
        var featuredLogoUrl = "";

        // Now start cycling through our array
        $.each(data, function (i, item) {
            var strUrl = "";
            var strPrice = "";
            var intStrikePrice = "";

            strPrice = item.Cost.replace("$", "");
            strPrice = strPrice.replace(",", ""); // CP Added
            if (item.Promotion != "" && typeof item.Promotion != "undefined" && item.Promotion != null && item.Promotion != "0" && Number(item.Promotion) != 0) {
                strPrice = item.Promotion;
                strPrice = strPrice.replace("$", ""); // CP Added
                strPrice = strPrice.replace(",", ""); // CP Added
            }
            intStrikePrice = item.Cost.replace("$", "");
            intStrikePrice = intStrikePrice.replace(",", ""); // CP Added
            if (strPrice != "0" && strPrice != "" && typeof strPrice != "undefined") {
                x = x + 1;
                if (item.Rating == "") {
                    rating = "0";
                }
                else {
                    rating = item.Rating;
                }

                featuredclass = x == 1 ? featuredclass : '';
                strH = strH + '<div class="offer-list sortable ' + featuredclass + '" price="' + strPrice + '" rating="' + rating + '" storename="' + item.StoreName + '" shippingcost="' + item.Sales.replace("$", "") + '">';

                if (featuredclass != "") {
                    if (strFeaturedText == "") {
                        strH = strH + '<div class="featured-logo-en"><\/div>';
                    }
                    else {
                        strH = strH + '<div class="featured-logo">' + strFeaturedText + '<\/div>';
                    }

                    if (item.StoreLogo != "" && item.StoreLogo != "No Image") {
                        featuredLogoUrl = item.StoreLogo.replace(/&#45;/g, '-');

                    }
                }

                if (item.Promo_Text != "") {
                    strH = strH + '<div class="special-offer-note">';
                    strH = strH + '<span class="offer-note"><span class="txt">' + item.Promo_Text.replace(/&amp;/g, '&');
                    strH = strH + '<\/span><\/span><\/div>';
                }
                //http: //shop.skype.com/intl/en-ca/webcams/hd-capable/logitech-c270/
                if (item.StoreLogo == "" || item.StoreLogo == "No Image") {
                    strH = strH + '<span class="offer-store text" style="background: url() no-repeat scroll center center;">' + item.StoreName + '<\/span>';
                }
                else {
                    strH = strH + '<span class="offer-store" style="background: url(\'' + item.StoreLogo.replace(/&#45;/g, '-') + '\') no-repeat scroll center center;">&nbsp;<\/span>';
                }

                inStockText = inStockText == undefined ? '' : inStockText;
                outStockText = outStockText == undefined ? '' : outStockText;
                if (item.Stock == "" || Number(item.Stock) == 0) {
                    strH = strH + '<span class="offer-rating"><span class="outStock">' + outStockText + '</span></span>';
                }
                else {
                    strH = strH + '<span class="offer-rating"><span class="inStock">' + inStockText + '</span></span>';
                }

                strShipping = item.Sales.replace("$", "")
                if (strShipping != "0" && strShipping != "0.0" && strShipping != "0.00" && strShipping != "" && typeof strShipping != "undefined") {

                    shipping = isNumber(strShipping) ? monFormatter.format(strShipping) : strShipping
                }
                else {
                    shipping = strFreeDelivery
                }
                strH = strH + ' <span class="offer-shipping">' + shipping + '</span>';
                strH = strH + ' <span class="offer-price">';

                if (Number(intStrikePrice) != Number(strPrice)) {
                    strH = strH + '      <span class="strikePrice">' + monFormatter.format(intStrikePrice) + '<\/span><br \/>';
                    percentOff = calculateDiscountPercent(Number(intStrikePrice), Number(strPrice));

                    strH = strH + '<span class="buynow-price withDiscount" rel="' + strPrice + '">' + monFormatter.format(strPrice) + '<\/span><br \/>';

                    if (discountType != "1") {
                        strH = strH + '      <span class="offer">(' + percentOff + '% off)</span><br \/>';
                    }
                    else {
                        strH = strH + '      <span class="offer">(-' + percentOff + '%)</span><br \/>';
                    }

                }
                else {
                    strH = strH + '      <span class="buynow-price" rel="' + strPrice + '">' + monFormatter.format(strPrice) + '<\/span>';
                }
                strH = strH + '<\/span>';


                onclickStr = "SKYPE.wanalytics.Shop.trackBuy({type:'accessory', category: '" + omniCat + "',subcategory:'" + omniSubCat + "',product: '" + omniProduct + "',price:" + strPrice + ",currency: '" + monFormatter.currencyCode + "',fullfiller: '" + omniShop + "'})";

                strH = strH + '<span class="offer-buy">';
                strH = strH + '<span class="go-link-button"><a class="greenbtn-sml" href="' + item.Url + '" onClick="' + onclickStr + ';tt_Redirect(\'' + item.Url + '\');return false;" target="_blank"><span class="text">' + strBuyNow + '<\/span> <\/a><\/span>';
                strH = strH + '<\/span>';
                strH = strH + '<\/span>'; //sortable
                strH = strH + '<div class="clear"><\/div>'
                strH = strH + '<\/div>'//web.archive.org/web/20130120025529/http://wraper

            }
        });

        $('#' + strDivID).before(strH);
        $('#' + strDivID).hide();
        if (featuredLogoUrl != '') {
            $logoElem = $('.prodBox-top .merchant-logo');
            $logoElem.attr('src', featuredLogoUrl)
        }

        // Close down the JSON call
    }

} // End displayShop Function call



//BuyNow section for the category page products
function getShopCostButtonCategory(intProdId, intShopId, strDivID, omniProduct, omniCat, omniSubCat, omniShop, strBuyNow, discountType, longPrice, smlButton) {
    $.getJSON("https://web.archive.org/web/20130120025529/http://shop.skype.com/proxy/proxy.php?productid=" + intProdId + "&shopid=" + intShopId + "&jsoncallback=?", displayShop);
    function displayShop(data) {

        var strH = "";
        var strM = "";
        var strBorder = "";
        var strImg = "";
        var x = 0;

        // Now start cycling through our array
        $.each(data, function (i, item) {
            x = x + 1;
            if (x == 1) {


                var strUrl = "";
                var strPrice = "";
                var intStrikePrice = "";

                strPrice = item.Cost.replace("$", "");
                strPrice = strPrice.replace(",", ""); // CP Added
                if (item.Promotion != "" && typeof item.Promotion != "undefined" && item.Promotion != null && item.Promotion != "0" && Number(item.Promotion) != 0) {
                    strPrice = item.Promotion;
                    strPrice = strPrice.replace("$", ""); // CP Added
                    strPrice = strPrice.replace(",", ""); // CP Added
                }
                intStrikePrice = item.Cost.replace("$", "");
                intStrikePrice = intStrikePrice.replace(",", "");
                
                if (strPrice != "0" && strPrice != "" && typeof strPrice != "undefined") {

                    $offerElem = $('#' + strDivID).parent().prevAll('div.prod-img').find('div.offerAuto');
                    if (Number(intStrikePrice) != Number(strPrice) && Number(intStrikePrice) > Number(strPrice)) {
                        percentOff = calculateDiscountPercent(Number(intStrikePrice), Number(strPrice));

                        if (discountType != "1") {
                            strDiscount = '<div class="discountItemAuto"><p class="p_off">' + percentOff + '%</p><span class="off">off</span></div>';
                        }
                        else {
                            strDiscount = '<div class="discountItemAuto"><p class="p_minus">-' + percentOff + '%</p></div>';
                        }
                        $offerElem.before(strDiscount);
                    }
                    $offerElem.hide();

                    onclickStr = "SKYPE.wanalytics.Shop.trackBuy({type:'accessory', category: '" + omniCat + "',subcategory:'" + omniSubCat + "',product: '" + omniProduct + "',price:" + strPrice + ",currency: '" + monFormatter.currencyCode + "',fullfiller: '" + omniShop + "'})";

                    strH = strH + '<div class="prod-bot">';

                    if (item.StoreLogo == "" || item.StoreLogo == "No Image") {
                        strLogo = item.StoreName;
                    }
                    else {
                        strLogo = '<img src="' + item.StoreLogo + '">';
                    }

                    strH = strH + '<a class="shop-logo" href="' + item.Url + '" onClick="' + onclickStr + ';tt_Redirect(\'' + item.Url + '\');return false;" target="_blank">' + strLogo + '</a>';
                    strH = strH + '<div class="pricing">';
                    if (Number(intStrikePrice) != Number(strPrice) && Number(intStrikePrice) > Number(strPrice)) {
                        longPriceClass = longPrice == '' || longPrice == undefined ? 'listPrice' : "listPriceLong";
                        strH = strH + '      <span class="' + longPriceClass + '">' + monFormatter.format(intStrikePrice) + '<\/span>'
                        strH = strH + '      <span class="finalPrice sale">' + monFormatter.format(strPrice) + '<\/span>'
                    }
                    else {
                        strH = strH + '      <span class="finalPrice">' + monFormatter.format(strPrice) + '<\/span>'
                    }
                    strH = strH + '<br>';
                    smlButtonClass = smlButton == '' ? '' : ' smlBtn';
                    strH = strH + '<span class="go-link-button"><a class="greenbtn-sml" href="' + item.Url + '" onClick="' + onclickStr + ';tt_Redirect(\'' + item.Url + '\');return false;" target="_blank"><span class="text' + smlButtonClass + '">' + strBuyNow + '<\/span> <\/a><\/span>';

                    strH = strH + '<\/div>';
                    strH = strH + '<\/div>';

                }
            }
        });


        $('#' + strDivID).before(strH);
        $('#' + strDivID).hide();

        // Close down the JSON call
    }

} // End displayShop Function call


//BuyNow section for the category page products
function getShopCostButtonCategoryCustom(intProdId, intShopId, strDivID, omniProduct, omniCat, omniSubCat, omniShop, strBuyNow, prodPrice, shopLogoURL, discountType, prodPriceReg, longPrice, smlButton) {
    var strH = "";
    var strM = "";
    var strBorder = "";
    var strImg = "";

    var strUrl = intProdId;
    var strPrice = prodPrice;
    var intStrikePrice = prodPriceReg;
    if (strPrice != "0" && strPrice != "" && typeof strPrice != "undefined") {

        $offerElem = $('#' + strDivID).parent().prevAll('div.prod-img').find('div.offerAuto');
        if (Number(intStrikePrice) != Number(strPrice) && Number(intStrikePrice) > Number(strPrice)) {
            percentOff = calculateDiscountPercent(Number(intStrikePrice), Number(strPrice));

            if (discountType != "1") {
                strDiscount = '<div class="discountItemAuto"><p class="p_off">' + percentOff + '%</p><span class="off">off</span></div>';
            }
            else {
                strDiscount = '<div class="discountItemAuto"><p class="p_minus">-' + percentOff + '%</p></div>';
            }
            $offerElem.before(strDiscount);
        }
        $offerElem.hide();

        onclickStr = "SKYPE.wanalytics.Shop.trackBuy({type:'accessory', category: '" + omniCat + "',subcategory:'" + omniSubCat + "',product: '" + omniProduct + "',price:" + strPrice + ",currency: '" + monFormatter.currencyCode + "',fullfiller: '" + omniShop + "'})";

        strH = strH + '<div class="prod-bot">';
        if (shopLogoURL != undefined && shopLogoURL != 'undefined') {
            strH = strH + '<a class="shop-logo" href="' + strUrl + '" onClick="' + onclickStr + ';tt_Redirect(\'' + strUrl + '\');return false;" target="_blank"><img src="' + shopLogoURL + '"></a>';
        }
        strH = strH + '<div class="pricing">';
        if (Number(intStrikePrice) != Number(strPrice) && Number(intStrikePrice) > Number(strPrice)) {
            longPriceClass = longPrice == '' || longPrice == undefined ? 'listPrice' : "listPriceLong";
            strH = strH + '      <span class="' + longPriceClass + '">' + monFormatter.format(intStrikePrice) + '<\/span>';
            strH = strH + '      <span class="finalPrice sale">' + monFormatter.format(strPrice) + '<\/span>'
        }
        else {
            strH = strH + '      <span class="finalPrice">' + monFormatter.format(strPrice) + '<\/span>'
        }
        strH = strH + '<br>';

        smlButtonClass = smlButton == '' ? '' : ' smlBtn';

        strH = strH + '<span class="go-link-button"><a class="greenbtn-sml" href="' + strUrl + '" onClick="' + onclickStr + ';tt_Redirect(\'' + strUrl + '\');return false;" target="_blank"><span class="text' + smlButtonClass + '">' + strBuyNow + '<\/span> <\/a><\/span>';

        strH = strH + '<\/div>';
        strH = strH + '<\/div>';
    }

    $('#' + strDivID).before(strH);
    $('#' + strDivID).hide();

} // End displayShop Function call

function calculateDiscountPercent(regPrice, salePrice) {
    var priceDiff = regPrice - salePrice;
    var discountPercent = ((priceDiff / regPrice) * 100);
    var dicountDecimal = discountPercent % 1;
    if (dicountDecimal >= 0.7999) {
        discountPercent = Math.ceil(discountPercent);
    } else {
        discountPercent = Math.floor(discountPercent)
    }
    //alert(discountPercent);
    return discountPercent;
}

function sortByPrice(inverse) {
    $('.sortable').sortElements(function (a, b) {
        a = $(a).attr('price');
        b = $(b).attr('price');
        return (
            isNaN(a) || isNaN(b) ?
            a > b : +a > +b) ?
            inverse ? -1 : 1 :
            inverse ? 1 : -1;
    });
}

function sortByName(inverse) {
    $('.sortable').sortElements(function (a, b) {
        a = $(a).attr('storename');
        b = $(b).attr('storename');
        return (
            isNaN(a) || isNaN(b) ?
            a > b : +a > +b) ?
            inverse ? -1 : 1 :
            inverse ? 1 : -1;
    });
}

function sortByShipping(inverse) {
    $('.sortable').sortElements(function (a, b) {
        a = $(a).attr('shippingcost');
        b = $(b).attr('shippingcost');
        return (
            isNaN(a) || isNaN(b) ?
            a > b : +a > +b) ?
            inverse ? -1 : 1 :
            inverse ? 1 : -1;
    });
}
function sortByRating(inverse) {
    $('.sortable').sortElements(function (a, b) {
        a = $(a).attr('rating');
        b = $(b).attr('rating');
        return (
            isNaN(a) || isNaN(b) ?
            a > b : +a > +b) ?
            inverse ? -1 : 1 :
            inverse ? 1 : -1;
    });
}

/**
* jQuery.fn.sortElements
* --------------
* @param Function comparator:
*   Exactly the same behaviour as [1,2,3].sort(comparator)
*   
* @param Function getSortable
*   A function that should return the element that is
*   to be sorted. The comparator will run on the
*   current collection, but you may want the actual
*   resulting sort to occur on a parent or another
*   associated element.
*   
*   E.g. $('td').sortElements(comparator, function(){
*      return this.parentNode; 
*   })
*   
*   The <td>'s parent (<tr>) will be sorted instead
*   of the <td> itself.
*/
jQuery.fn.sortElements = (function () {

    var sort = [].sort;

    return function (comparator, getSortable) {

        getSortable = getSortable || function () { return this; };

        var placements = this.map(function () {

            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,

            // Since the element itself will change position, we have
            // to have some way of storing its original position in
            // the DOM. The easiest way is to have a 'flag' node:
                nextSibling = parentNode.insertBefore(
                    document.createTextNode(''),
                    sortElement.nextSibling
                );

            return function () {

                if (parentNode === this) {
                    throw new Error(
                        "You can't sort elements if any one is a descendant of another."
                    );
                }

                // Insert before flag:
                parentNode.insertBefore(this, nextSibling);
                // Remove flag:
                parentNode.removeChild(nextSibling);

            };

        });

        return sort.call(this, comparator).each(function (i) {
            placements[i].call(getSortable.call(this));
        });

    };

})();


/**
*---------------------
* jquery.checkbox.min
* --------------------
   

(function ($) { var i = function (e) { if (!e) var e = window.event; e.cancelBubble = true; if (e.stopPropagation) e.stopPropagation() }; $.fn.checkbox = function (f) { try { document.execCommand('BackgroundImageCache', false, true) } catch (e) { } var g = { cls: 'jquery-checkbox', empty: 'empty.png' }; g = $.extend(g, f || {}); var h = function (a) { var b = a.checked; var c = a.disabled; var d = $(a); if (a.stateInterval) clearInterval(a.stateInterval); a.stateInterval = setInterval(function () { if (a.disabled != c) d.trigger((c = !!a.disabled) ? 'disable' : 'enable'); if (a.checked != b) d.trigger((b = !!a.checked) ? 'check' : 'uncheck') }, 10); return d }; return this.each(function () { var a = this; var b = h(a); if (a.wrapper) a.wrapper.remove(); a.wrapper = $('<span class="' + g.cls + '"><span class="mark"><img src="' + g.empty + '" /></span></span>'); a.wrapperInner = a.wrapper.children('span:eq(0)'); a.wrapper.hover(function (e) { a.wrapperInner.addClass(g.cls + '-hover'); i(e) }, function (e) { a.wrapperInner.removeClass(g.cls + '-hover'); i(e) }); b.css({ position: 'absolute', zIndex: -1, visibility: 'hidden' }).after(a.wrapper); var c = false; if (b.attr('id')) { c = $('label[for=' + b.attr('id') + ']'); if (!c.length) c = false } if (!c) { c = b.closest ? b.closest('label') : b.parents('label:eq(0)'); if (!c.length) c = false } if (c) { c.hover(function (e) { a.wrapper.trigger('mouseover', [e]) }, function (e) { a.wrapper.trigger('mouseout', [e]) }); c.click(function (e) { b.trigger('click', [e]); i(e); return false }) } a.wrapper.click(function (e) { b.trigger('click', [e]); i(e); return false }); b.click(function (e) { i(e) }); b.bind('disable', function () { a.wrapperInner.addClass(g.cls + '-disabled') }).bind('enable', function () { a.wrapperInner.removeClass(g.cls + '-disabled') }); b.bind('check', function () { a.wrapper.addClass(g.cls + '-checked') }).bind('uncheck', function () { a.wrapper.removeClass(g.cls + '-checked') }); $('img', a.wrapper).bind('dragstart', function () { return false }).bind('mousedown', function () { return false }); if (window.getSelection) a.wrapper.css('MozUserSelect', 'none'); if (a.checked) a.wrapper.addClass(g.cls + '-checked'); if (a.disabled) a.wrapperInner.addClass(g.cls + '-disabled') }) } })(jQuery);

**/
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}




}
/*
     FILE ARCHIVED ON 02:55:29 Jan 20, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:26:13 Nov 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.537
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 4.436
  LoadShardBlock: 117.417 (3)
  PetaboxLoader3.datanode: 163.139 (7)
  load_resource: 138.921 (2)
  PetaboxLoader3.resolve: 79.383 (2)
*/