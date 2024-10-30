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

/*
 * Copyright (C) 2007, Skype Limited
 *
 * All intellectual property rights, including but not limited to copyrights,
 * trademarks and patents, as well as know how and trade secrets contained
 * in, relating to, or arising from the internet telephony software of Skype
 * Limited (including its affiliates, "Skype"), including without limitation
 * this source code, Skype API and related material of such software
 * proprietary to Skype and/or its licensors ("IP Rights") are and shall
 * remain the exclusive property of Skype and/or its licensors. The recipient
 * hereby acknowledges and agrees that any unauthorized use of the IP Rights
 * is a violation of intellectual property laws.
 *
 * Skype reserves all rights and may take legal action against infringers of
 * IP Rights.
 *
 * The recipient agrees not to remove, obscure, make illegible or alter any
 * notices or indications of the IP Rights and/or Skype's rights and ownership
 * thereof.
 */

/**
 * Skype Client Detection Kit JS API
 *
 * Initializes the SWF object, requests SharedObject information, and exposes
 * nicer API to read that information.
 *
 * @author Erki Esken, skype:dreamdrummer
 * @version 1.2
 */

SKYPE.util.ClientDetection = function()
{
    var _loaded = false;
    var _available = false;
    var _detectionSwfUrl = "/i/common/swf/clientdetection.swf";
    var _detectionSwfID = "detectionswf";
    var _containerID = "detection-container";
    var _failureTimeout = 5000; // Milliseconds to wait for detection to kick in
    
    var D = YAHOO.util.Dom;
    var E = YAHOO.util.Event;
    
    var _so = {};
    var _sessionso = {};
    
    /**
     * This does the heavy lifting of loading detection SWF file.
     */
    var _loadDetection = function()
    {
        if (_loaded) return;
        if (typeof SWFObject == "undefined") return;
        
        // Load SWF temporarily in page corner
        var container = D.get(_containerID);
        if (!container)
        {
            container = document.createElement("DIV");
            container.id = _containerID;
            D.setStyle(container, "position", "absolute");
            D.setStyle(container, "width", "10px");
            D.setStyle(container, "height", "10px");
            D.setStyle(container, "font", "1px monospace");
            D.setStyle(container, "bottom", "0px");
            D.setStyle(container, "left", "0px");
            D.setStyle(container, "overflow", "hidden");
            document.body.appendChild(container);
        }
        
        var so = new SWFObject(_detectionSwfUrl, _detectionSwfID, "10", "10", "8", "#FFFFFF");
    	so.addParam("allowScriptAccess", "always");
    	so.write(_containerID);
    	
        _loaded = true;
        
        // Now set up failure timeout
        window.setTimeout(_failureCheck, _failureTimeout);
    };
    
    var _getItem = function(name)
    {
        if (typeof _so[name] == "undefined"
            || _so[name] == null
            || (typeof _so[name] == "string" && !_so[name].length)
            || _so[name] == "null")
        {
            return null;
        }
        return _so[name];
    };
    
    var _failureCheck = function()
    {
        // If still not available when this is triggered, then fire failure event
        if (!_available)
        {
            onDetectionFailure.fire();
        }
    };
    
    /**
     * This custom event is used by detection SWF to let JS know that it is available.
     *
     * Interested parties in detection should subscribe using below subscribe method
     * instead of directly subscribing to this event.
     */
    var onDetectionAvailable = new YAHOO.util.CustomEvent("onDetectionAvailable");
    // Used to notify on failure
    var onDetectionFailure = new YAHOO.util.CustomEvent("onDetectionFailure");
    
    onDetectionAvailable.subscribe(function()
    {
        _available = true;
        // Lets hide the helper SWF now since it has done its job
        YAHOO.util.Dom.setStyle(_containerID, "visibility", "hidden");
    });
    
    return {
        /**
         * Set the detection SWF URL to use
         */
        setSWF: function(swfUrl)
        {
            _detectionSwfUrl = swfUrl;
        },
        
        /**
         * Is the client detection kit ready to be used. If not, then use
         * subscribe() to get notified when it comes available.
         */
        isReady: function()
        {
            return _available;
        },
        
        /**
         * Used by Flash via ExternalInterface to set the data found in SharedObject
         */
        setSharedObjectData: function(data, sessionData)
        {
            SKYPE.log("Got SO info from Flash");
            _so = data;
            _sessionso = sessionData || {};
            onDetectionAvailable.fire();
            return true;
        },
        
        // For debugging only, do not expose in live setting!
        /*
        getSharedObjectData: function()
        {
            return _so;
        },*/
        
        /**
         * Checks if Skype is installed at all.
         */
        isInstalled: function()
        {
            return _getItem("ui_version") != null;
        },
        
        /**
         * Returns the currently installed Skype version
         */
        getVersion: function()
        {
            return _getItem("ui_version");
        },
        
        /**
         * Returns the plaform name - "macosx", "linux" or "windows"
         */
        getPlatform: function()
        {
            var version = _getItem("os_version");
            if (version)
            {
                if (version.indexOf("Macintosh") != -1)
                {
                    return "macosx";
                }
                else if (version.indexOf("Linux") != -1)
                {
                    return "linux";
                }
                return "windows";
            }
            return null;
        },
        
        /**
         * Returns the set timezone in user profile
         */
        getOSTimezone: function()
        {
            return _getItem("os_timezone") || parseInt(new Date().getTimezoneOffset() / 60);
        },
        
        /**
         * Returns the set timezone in user profile
         */
        getProfileTimezone: function()
        {
            return _getItem("ui_timezone");
        },
        
        /**
         * Get username if session is active
         */
        getSessionUsername: function()
        {
            if (typeof _sessionso.username == "string")
            {
                // Check expiry time and clear data if needed
                var timeNow = (new Date()).getTime() / 1000;
                if (typeof _sessionso.expires != "undefined"
                    && _sessionso.expires < timeNow)
                {
                    try
                    {
                        D.get(_detectionSwfID).clearSessionData();
                    }
                    catch (e)
                    {
                        // do nothing
                    }
                    return "";
                }
                return _sessionso.username;
            }
            
            return "";
        },
        
        getSkypeUserAge: function()
        {
            var installed = _getItem("ui_installdate");
            
            if (typeof installed == "string") installed = parseInt(installed);
            if (installed == null || isNaN(installed) || installed == 0) return -1;
            
            var age = Math.floor(((new Date()).getTime() / 1000 - installed) / 60 / 60 / 24);
            
            return age;
        },
        
        /**
         * Checks if currently installed Skype version is same or higher than given version
         */
        isQualifiedVersion: function(reqver)
        {
            var ver = _getItem("ui_version").split(".");
            reqver = reqver.split(".");
            
            try
            {
                if (
                    // Major is bigger
                    parseInt(ver[0]) > parseInt(reqver[0])
                    // Or major is same and minor is bigger
                    || (parseInt(ver[0]) == parseInt(reqver[0])
                        && parseInt(ver[1]) > parseInt(reqver[1]))
                    // Or major and minor are same bug build is same or bigger
                    || (parseInt(ver[0]) == parseInt(reqver[0])
                        && parseInt(ver[1]) == parseInt(reqver[1])
                        && parseInt(ver[3]) >= parseInt(reqver[3]))
                    )
                {
                    return true;
                }
            }
            catch (e) {}
            
            return false;
        },
        
        /**
         * Use this to listen when client detection kit has finished loading and is ready for use.
         * See also isReady() method.
         */
        subscribe: function(fn, obj, override, failurefn)
        {
            onDetectionAvailable.subscribe(fn, obj, override);
            E.onDOMReady(_loadDetection, null, this);
            
            if (typeof failurefn == "function")
            {
                onDetectionFailure.subscribe(failurefn, obj, override);
            }
        }
    };
}();


}
/*
     FILE ARCHIVED ON 12:21:41 Feb 23, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:46:09 Oct 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.477
  exclusion.robots: 0.017
  exclusion.robots.policy: 0.008
  esindex: 0.009
  cdx.remote: 15.385
  LoadShardBlock: 140.591 (3)
  PetaboxLoader3.datanode: 112.38 (4)
  PetaboxLoader3.resolve: 213.276 (2)
  load_resource: 187.994
*/