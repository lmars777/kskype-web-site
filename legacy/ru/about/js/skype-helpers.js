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

SKYPE.namespace("navigation");
SKYPE.namespace("util");
SKYPE.namespace("user");

SKYPE.navigation.mouseOverTabs = function()
{
    var D = YAHOO.util.Dom;
    var E = YAHOO.util.Event;
    
    E.onDOMReady(function()
    {
        var mainMenuItems = D.getElementsBy(function(el) { return el; }, 'li', 'mainNavigation');
        for (var i=0; i < mainMenuItems.length; i++)
        {
            if (!D.hasClass(mainMenuItems[i], "active"))
            {
                E.addListener(mainMenuItems[i], "mouseover", function() { D.addClass(this, "hover"); });
                E.addListener(mainMenuItems[i], "mouseout", function() { D.removeClass(this, "hover"); });
            }
        }
    });
}();

SKYPE.navigation.removeIEFlicker = function()
{
    var D = YAHOO.util.Dom;
    var E = YAHOO.util.Event;
    
    E.onDOMReady(function()
    {
        if(SKYPE.util.Browser.isIE && !SKYPE.util.Browser.isIE7){
            try {
                document.execCommand("BackgroundImageCache", false, true);
            } catch(e) {
            
            }
        }
    });
}();

SKYPE.navigation.clearSearchInput = function()
{
    var D = YAHOO.util.Dom;
    var E = YAHOO.util.Event;
    
    E.onDOMReady(function()
    {
        if(D.get("google-input")) {
            var searchField = D.get("google-input");
            var initialValue = searchField.value;
            E.addListener(searchField, "focus", function() { if(searchField.value == initialValue) { searchField.value = ""; } });
            E.addListener(searchField, "blur", function() { if(searchField.value == "") { searchField.value = initialValue; } });
        }
    });
}();

SKYPE.navigation.changeLanguage = function()
{
    var D = YAHOO.util.Dom;
    var E = YAHOO.util.Event;
    
    E.onDOMReady(function()
    {
        E.addListener(D.get("userLanguage"), "change", function() { 
            var changeUrl = D.get("userPreferencesForm").action.replace(/(%5B|\[)LC(%5D|\])/g, D.get("userLanguage").options[D.get("userLanguage").selectedIndex].value);
            
            SKYPE.user.Preferences.setLanguage(D.get("userLanguage").options[D.get("userLanguage").selectedIndex].value);
            SKYPE.user.Preferences.save();
            
            window.location = changeUrl;
        });
    });
}();

SKYPE.navigation.buttonHovers = function()
{
    var D = YAHOO.util.Dom;
    var E = YAHOO.util.Event;
    
    E.onDOMReady(function()
    {
        var buttonsOnPage = D.getElementsByClassName("button", "a");
        for (var i=0; i < buttonsOnPage.length; i++)
        {
                E.addListener(buttonsOnPage[i], "mouseover", function() { D.addClass(this, "buttonHover"); });
                E.addListener(buttonsOnPage[i], "mouseout", function() { D.removeClass(this, "buttonHover"); });
                E.addListener(buttonsOnPage[i], "mousedown", function() { D.addClass(this, "buttonActive"); });
        }
    });
}();

SKYPE.imgPngAlpha = function() 
{
    var D = YAHOO.util.Dom;
    var E = YAHOO.util.Event;
    
    E.addListener(window, "load", function()
    {
        if (navigator.platform == "Win32" && navigator.appName == "Microsoft Internet Explorer") {
            for (var i = 0; i < document.images.length; i++) {
                var img = document.images[i];
                var imgName = img.src.toUpperCase();
                if(imgName.substring(imgName.length-3, imgName.length) == "PNG" && img.className.indexOf("alphaPng",0) != -1) {
                    var imgID = (img.id) ? "id='" + img.id + "' " : "";
                    var imgClass = (img.className) ? "class='" + img.className + "' " : "";
                    var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' ";
                    var imgStyle = "display:inline-block;" + img.style.cssText;
                    if(img.align == "left") imgStyle = "float:left;" + imgStyle;
                    if(img.align == "right") imgStyle = "float:right;" + imgStyle;
                    if(img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle;
                    var strNewHTML = "<span " + imgID + imgClass + imgTitle
                    + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";"
                    + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader"
                    + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";
                    img.outerHTML = strNewHTML;
                    i = i-1;
                }
            }
        }
    });
}();

/* Settings */

SKYPE.util.StringLib = {
    trim: function(s)
    {
        return SKYPE.util.StringLib.rtrim(SKYPE.util.StringLib.ltrim(s));
    },
    ltrim: function(s)
    {
        var w = " \n\t\f";
        while (w.indexOf(s.charAt(0)) != -1 && s.length != 0)
            s = s.substring(1);
        return s;
    },
    rtrim: function(s)
    {
        var w = " \n\t\f";
        while (w.indexOf(s.charAt(s.length-1)) != -1 && s.length != 0)
            s = s.substring(0, s.length-1);
        return s;
    }
};

/* @legal: Cookie handling code from the book "JavaScript: The Definitive Guide" by David Flanagan published by O'Reilly. ISBN: 0-596-00048-0 */
SKYPE.util.Cookie = function(document, name, hours, path, domain, secure, fieldsep, valuesep)
{
    this.document = document;
    this.name = name;
    if (hours) {
        this.expiration = new Date((new Date()).getTime() + hours*3600000);
    } else {
        this.expiration = null;
    }
    this.path = path ? path : null;
    this.domain = domain ? domain : null;
    this.secure = secure ? true : false;
    this.fieldsep = fieldsep ? fieldsep : ':';
    this.valuesep = valuesep ? valuesep : '&';
    this.isSimpleValue = false;
    // Actual cookie data is held in this one
    this.data = {};
};
SKYPE.util.Cookie.prototype = {
    /**
     * Saves values set in cookie.
     */
    store: function (doSort) {
        var cookieval = "";
        var cookie = "";
        var keys = [];
        if (typeof this.data == "object")
        {
            for(var prop in this.data)
            {
                keys.push(prop);
            }
            if (doSort)
                keys.sort();
            for (var i=0; i < keys.length; i++)
            {
                if (cookieval != "") cookieval += this.fieldsep;
                cookieval += keys[i] + this.valuesep + escape(this.data[keys[i]]);
            }
        }
        else
        {
            cookieval = escape(this.data.toString());
        }
        cookie = this.name + '=' + cookieval;
        if (this.expiration)
            cookie += '; expires=' + this.expiration.toGMTString();
        if (this.path) cookie += '; path=' + this.path;
        if (this.domain) cookie += '; domain=' + this.domain;
        if (this.secure) cookie += '; secure';
        this.document.cookie = cookie;
    },
    
    /**
     * Loads values from cookie
     */
    load: function()
    {
        if (this.isSimpleValue && typeof this.data != "string")
            this.data = this.data.toString();
        var allcookies = this.document.cookie;
        if (allcookies == "") return false;
        var start = allcookies.indexOf(this.name + '=');
        if (start == -1) return false;
        start += this.name.length + 1;
        var end = allcookies.indexOf(';', start);
        if (end == -1) end = allcookies.length;
        var cookieval = allcookies.substring(start, end);
        if (!this.isSimpleValue)
        {
            var a = cookieval.split(this.fieldsep);
            for (var i=0; i < a.length; i++)
                a[i] = a[i].split(this.valuesep);
            for (var i = 0; i < a.length; i++)
                this.data[a[i][0]] = unescape(a[i][1]);
        } else {
            this.data = cookieval;
        }
        return true;
    },
    
    /**
     * Removes cookie if it was set.
     */
    remove: function()
    {
        var cookie = this.name + '=';
        if (this.path) cookie += '; path=' + this.path;
        if (this.domain) cookie += '; domain=' + this.domain;
        cookie += '; expires=Fri, 02-Jan-1970 00:00:00 GMT';
        this.document.cookie = cookie;
    }
};

/**
 * Skype Preference Cookie Handling
 */
SKYPE.user.Preferences = function()
{
    var values = {
        'LC':''
        ,'CCY':''
        ,'CC':''
        ,'TZ':''
        ,'VER':''
        ,'TS':''
        ,'TM':''
    };
    
    var domain = null;
    var cookieName = "SC";
    var cookie = null;
    var path = "/";
    var secure = false;
    var expires = null;
    var _parsing = false;
    
    var platformNames = {
        '0':'windows'
        ,'1':'pocketpc'
        ,'2':'linux'
        ,'3':'osx'
    };
    
    return {
        init: function()
        {
            this.setDomain();
            expires = 365;
            this.parseCookie();
        },
        getCookie: function()
        {
            var c = new SKYPE.util.Cookie(document, cookieName, expires, path, domain, secure, ":", "=");
            c.load();
            return c;
        },
        scrubCookieValue: function(value)
        {
            return value.replace(/[\n\r]/g, "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        },
        setDomain: function(dom)
        {
            if (dom) {
                domain = dom;
            } else if (location && location.hostname) {
                var parts = location.hostname.split(".");
                var i = parts.length;
                if (i >= 2 && isNaN(parseInt(parts[i-1]))) {
                    domain = "."+parts[i-2]+"."+parts[i-1];
                }
            }
        },
        parseCookie: function()
        {
            cookie = this.getCookie();
            var knownSetters = {
                'LC': 'setLanguage'
                ,'CCY': 'setCurrency'
                ,'CC': 'setCountryCode'
                ,'TZ': 'setTimezone'
                ,'VER': 'setVersion'
                ,'TS': 'setTimeStamp'
                ,'TM': 'setTimeModified'
                ,'VAT': 'setVatEligible'
            };
            _parsing = true;
            for (var prop in cookie.data)
            {
                if (prop.search(/[A-Z]+/) != -1)
                {
                    if (knownSetters[prop])
                        this[knownSetters[prop]](cookie.data[prop]);
                    else
                        this.setValue(prop, cookie.data[prop]);
                }
            }
            _parsing = false;
            return true;
        },
        
        save: function()
        {
            for (var val in values)
            {
                cookie.data[val] = values[val];
            }
            cookie.store(true);
        },
        
        clear: function()
        {
            cookie.remove();
        },
        
        getValue: function(key, def)
        {
            if (typeof def == "undefined")
                def = "";
            if (values[key] && values[key] != null && values[key].length)
                return values[key];
            return def;
        },
        setValue: function(key, value)
        {
            values[key] = value;
        },
        
        touchCookie: function()
        {
            var now = parseInt(new Date().getTime()/1000);
            if (_parsing)
                return false;
            if (!this.getTimeStamp().length)
                this.setValue("TS", now);
            this.setValue("TM", now);
            return true;
        },
        
        setLanguage: function(value)
        {
            /* TODO: Should do validation here before setting? */
            this.setValue("LC", value.replace(/_/g, "-"));
            this.touchCookie();
            return true;
        },
        getLanguage: function(def)
        {
            return this.getValue("LC", def);
        },
        
        setCurrency: function(value)
        {
            if (/^([A-Z]{3}|[0-9]{3})$/.test(value) == false)
                value = "";
            this.setValue("CCY", value);
            this.touchCookie();
            return true;
        },
        getCurrency: function(def)
        {
            return this.getValue("CCY", def);
        },
        
        setCountryCode: function(value)
        {
            if (/^([A-Z]{2,3}|[0-9]{3})$/.test(value) == false)
                value = "";
            this.setValue("CC", value);
            this.touchCookie();
            return true;
        },
        getCountryCode: function(def)
        {
            return this.getValue("CC", def);
        },
        
        formatDecimal: function(value)
        {
            if (value < 10)
                return "0" + value;
            return value;
        },
        
        setTimezone: function(value)
        {
            if (/^([-+]((0[0-9]|1[0-3]):[0-5][0-9]|14:00)|Z)$/.test(value) == false)
            {
                var matches = value.match(/^([-+]?)([0-9]{1,2})(\.[0-9])?$/);
                if (matches)
                {
                    var sign = matches[1] && matches[1].length ? matches[1] : '+';
                    var hours = parseInt(matches[2]);
                    var minutes = matches[3] && matches[3].length ? parseInt(60 * parseFloat(matches[3])) : 0;
                    if (hours > 14) hours = 14;
                    if (hours == 14) minutes = 0;
                    if (minutes > 59) minutes = 0;
                    value = sign+this.formatDecimal(hours)+":"+this.formatDecimal(minutes);
                }
            }
            this.setValue("TZ", value);
            this.touchCookie();
            return true;
        },
        getTimezone: function(def)
        {
            return this.getValue("TZ", def);
        },
        
        setVersion: function(value)
        {
            if (typeof value == "object")
            {
                var defaultValues = {
                    'platform':''
                    ,'platformname':''
                    ,'version':''
                    ,'campaign':''
                    ,'partner':''
                    ,'partnername':''
                };
                for (var prop in defaultValues)
                {
                    if (value[prop] == null)
                        value[prop] = defaultValues[prop];
                }
                var splitVer = value.version.split(".");
                
                value = value.platform+"/"+splitVer[0]+"."+splitVer[1]+"."+(value.partner.length ? value.partner : splitVer[2])+"."+splitVer[3]+"/"+value.campaign;
            }
            
            if (/^[0-9]?\/[0-9]{1,2}(\.[0-9]{1,3}){3}\/[0-9]*$/.test(value) == false)
                return false;
            
            this.setValue("VER", value);
            this.touchCookie();
            return true;
        },
        getVersion: function(def)
        {
            return this.getValue("VER", def);
        },
        getParsedVersion: function(def)
        {
            var result = {
                'platform':''
                ,'platformname':''
                ,'version':''
                ,'campaign':''
                ,'partner':''
                ,'partnername':''
            };
            var ver = this.getVersion(def);
            if (!ver.length)
                return result;
            var splitVer = ver.split("/");
            result.platform = splitVer[0];
            result.version = splitVer[1];
            result.campaign = splitVer[2];
            splitVer = result.version.split(".");
            result.partner = (splitVer.length > 2 && splitVer[2]) ? splitVer[2] : 0;
            return result;
        },
        
        setTimeStamp: function(value)
        {
            this.setValue("TS", value);
            this.touchCookie();
        },
        getTimeStamp: function(def)
        {
            return this.getValue("TS", def);
        },
        
        setTimeModified: function(value)
        {
            if (this._parsing)
                this.setValue("TM", value);
            this.touchCookie();
        },
        getTimeModified: function(def)
        {
            return this.getValue("TM", def);
        },
        setVatEligible: function(value)
        {
            var result = "";
            // If string was passed in, then only accept "true" and "false" as valid
            if (typeof value == "string")
            {
                if (value == "true") result = "true";
                else if (value == "false") result = "false";
                else result = "";
            }
            // Turn booleans into strings
            else if (typeof value == "boolean")
            {
                result = value ? "true" : "false";
            }
            // Accept only numbers 0 and 1, nothing else
            else if (typeof value == "number")
            {
                if (value == 1) result = "true";
                else if (value == 0) result = "false";
                else result = "";
            }
            this.setValue("VAT", result);
            this.touchCookie();
        },
        isVatEligible: function()
        {
            var val = this.getValue("VAT");
            if (val == "true") return true;
            else if (val == "false") return false;
            else return null;
        },
        debug: function()
        {
            var result = "";
            for (var key in values)
            {
                result = result + key + " = " + values[key] + "\n";
            }
            return result;
        }
    };
}();

SKYPE.findParentTag = function(el, tagName)
{
    tagName = tagName.toUpperCase();

    while (el.parentNode)
    {
        if (el.parentNode.tagName.toUpperCase() == tagName)
        {
            return el.parentNode;
        }
        el = el.parentNode;
    }

    return null;
};

/* Cancels default functionality for an element */

SKYPE.util.cancelDefault = function(e) {
    var E = YAHOO.util.Event;
    E.preventDefault(e);
};

/* changes form buttons on pages */

SKYPE.submitButtons = function()
{
    var D = YAHOO.util.Dom;
    var E = YAHOO.util.Event;
    E.onDOMReady(function()
    {
        var formsOnPage = document.getElementsByTagName("form");
        for (var i=0; i < formsOnPage.length; i++) {
                var buttons = formsOnPage[i].getElementsByTagName("button");
                if(buttons[0] != undefined) {
					var buttonsLength = buttons.length;
					for (var k = buttonsLength - 1; k >= 0; k--) {
	                    if(buttons[k].className.indexOf('submitButton') > -1 || buttons[k].className.indexOf('glassButton') > -1) {
	                        var buttonclasses = buttons[k].className.split(" ");
	                        var buttonvalue = buttons[k].innerHTML;
	                        var wrapper = document.createElement("span");
	                        var a = document.createElement("a");
	                        var innerspan = document.createElement("span");
	                        var defaultclass = true;
	                        var colorclass, iconclass;
							if(buttons[k].className.indexOf('big') > -1) {
								D.addClass(wrapper, "button");
							} else {
								D.addClass(wrapper, "buttonSmall");	
							}
	                        for (var j=0; j < buttonclasses.length; j++) {
                                if (buttonclasses[j] == "blue" || buttonclasses[j] == "green" || buttonclasses[j] == "yellow") {
                                    defaultclass = false;
                                    colorclass = buttonclasses[j];
                                } else if (buttonclasses[j].match("shop") || buttonclasses[j].match("skypeCredit") || buttonclasses[j].match("skypeOnlineNr") || buttonclasses[j].match("skypeVoicemail")) {
                                    iconclass = buttonclasses[j];
                                } else {
                                    D.addClass(wrapper, buttonclasses[j]);
                                }
								if(buttonclasses[j] == "disabled") {
									D.addClass(a, "disabled");
								}
                            }
	                        if (defaultclass) {
	                            D.addClass(a, "gray");
	                        } else {
	                            D.addClass(a, colorclass);
	                        }
	                        D.addClass(a, iconclass);
	                        wrapper.appendChild(a);
	                        var buttonId = "submitButton"+i;
	                        if (buttons[k].id != "") {
	                            buttonId = buttons[k].id;
	                        }
	                        wrapper.setAttribute("id", buttonId);
	                        a.appendChild(innerspan);
	                        a.setAttribute("href","#");
	                        innerspan.innerHTML = buttonvalue;
	                        buttons[k].parentNode.appendChild(wrapper);
	                        var oldbutton = buttons[k].parentNode.removeChild(buttons[k]);                
	                    }
						buttonclasses = buttonclasses.join(",");
						if(buttonclasses.indexOf("submitButton") > -1) {
				            var submitbutton = D.get(buttonId);
				            E.addListener(submitbutton, "click", SKYPE.util.cancelDefault);
				            E.addListener(submitbutton, "click", function()
				            {
				               SKYPE.findParentTag(submitbutton,"form").submit();
				            });					
						}
					}
                }
            }
    });
}();

SKYPE.user.Preferences.init();

/* TODO: Make this pretty */

function hide(elem) {
    var item = document.getElementById(elem);
    if (item) {
        item.style.display = 'none';
    }
}
function show(elem) {
    var item = document.getElementById(elem);
    if (item) {
        item.style.display = '';
    }
}
function selecttab(tab) {
    var tabs = tab.parentNode.parentNode.childNodes;
    for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].tagName == "LI") {
            tabs[i].className = "";
        }
    }
    tab.parentNode.className = "selected";
}

}
/*
     FILE ARCHIVED ON 12:20:02 Feb 23, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 07:17:20 Oct 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.491
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.011
  cdx.remote: 7.567
  LoadShardBlock: 93.826 (3)
  PetaboxLoader3.datanode: 100.707 (4)
  load_resource: 76.511
  PetaboxLoader3.resolve: 44.142
*/