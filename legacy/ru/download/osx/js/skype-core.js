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

/**
 * Copyright (c) 2007, Skype Technologies S.A. All rights reserved.
 * Partly based on YUI library (http://developer.yahoo.com/yui/).
 * Version: 0.1
 */

/**
 * The SKYPE object is the single global object used by Skype Common Library.
 * It contains utility functions for strings, arrays, cookies, preferences, and
 * logging. SKYPE.util, SKYPE.user are namespaces created automatically for
 * and used by the library.
 * @module skype
 * @title  SKYPE Global
 */
if (typeof SKYPE == "undefined")
{
    /**
     * The SKYPE global namespace object
     * @class SKYPE
     * @static
     */
    var SKYPE = {};
}

/**
 * Returns the namespace specified and creates it if it doesn't exist
 * <pre>
 * SKYPE.namespace("property.package");
 * SKYPE.namespace("SKYPE.property.package");
 * </pre>
 * Either of the above would create SKYPE.property, then
 * SKYPE.property.package
 *
 * Be careful when naming packages. Reserved words may work in some browsers
 * and not others. For instance, the following will fail in Safari:
 * <pre>
 * SKYPE.namespace("really.long.nested.namespace");
 * </pre>
 * This fails because "long" is a future reserved word in ECMAScript
 *
 * @method namespace
 * @static
 * @param  {String*} arguments 1-n namespaces to create 
 * @return {Object}  A reference to the last namespace object created
 */
SKYPE.namespace = function()
{
    var a=arguments, o=null, i, j, d;
    for (i=0; i<a.length; ++i)
    {
        d=a[i].split(".");
        o=SKYPE;
        // SKYPE is implied, so it is ignored if it is included
        for (j=(d[0] == "SKYPE") ? 1 : 0; j<d.length; ++j)
        {
            o[d[j]]=o[d[j]] || {};
            o=o[d[j]];
        }
    }
    return o;
};

/**
 * Uses YAHOO.widget.Logger to output a log message, if the widget is available.
 *
 * @method log
 * @static
 * @param  {String}  msg  The message to log.
 * @param  {String}  cat  The log category for the message.  Default
 *                        categories are "info", "warn", "error", time".
 *                        Custom categories can be used as well. (opt)
 * @param  {String}  src  The source of the the message (opt)
 * @return {Boolean}      True if the log operation was successful.
 */
SKYPE.log = function(msg, cat, src) {
    var l=YAHOO.widget.Logger;
    if (l && l.log)
    {
        return l.log(msg, cat, src);
    }
    else if (typeof console == "object" && typeof console.log == "function")
    {
        if (cat && typeof console[cat] == "function")
            console[cat](msg);
        else
            console.log(msg);
    }
    else if (typeof window.console == "function" && typeof window.console.log == "function")
    {
        window.console.log(msg);
    }
    else if (typeof opera == "object" && typeof opera.postError == "function")
    {
        opera.postError(msg);
    }
};

/**
 * Registers a module with the SKYPE object
 * @method register
 * @static
 * @param {String}   name    the name of the module (event, slider, etc)
 * @param {Function} mainClass a reference to class in the module.  This
 *                             class will be tagged with the version info
 *                             so that it will be possible to identify the
 *                             version that is in use when multiple versions
 *                             have loaded
 * @param {Object}   data      metadata object for the module.  Currently it
 *                             is expected to contain a "version" property
 *                             and a "build" property at minimum.
 */
SKYPE.register = function(name, mainClass, data) {
    var mods = SKYPE.env.modules;
    if (!mods[name]) {
        mods[name] = { versions:[], builds:[] };
    }
    var m=mods[name],v=data.version,b=data.build,ls=SKYPE.env.listeners;
    m.name = name;
    m.version = v;
    m.build = b;
    m.versions.push(v);
    m.builds.push(b);
    m.mainClass = mainClass;
    // fire the module load listeners
    for (var i=0;i<ls.length;i=i+1) {
        ls[i](m);
    }
    // label the main class
    if (mainClass) {
        mainClass.VERSION = v;
        mainClass.BUILD = b;
    } else {
        SKYPE.log("mainClass is undefined for module " + name, "warn");
    }
};


/**
 * SKYPE.env is used to keep track of what is known about the YUI library and
 * the browsing environment
 * @class YAHOO.env
 * @static
 */
SKYPE.env = SKYPE.env || {

    /**
     * Keeps the version info for all modules that have reported themselves
     * @property modules
     * @type Object[]
     */
    modules: [],
    
    /**
     * List of functions that should be executed every time a module
     * reports itself.
     * @property listeners
     * @type Function[]
     */
    listeners: []
};

/**
 * Returns the version data for the specified module:
 *      <dl>
 *      <dt>name:</dt>      <dd>The name of the module</dd>
 *      <dt>version:</dt>   <dd>The version in use</dd>
 *      <dt>build:</dt>     <dd>The build number in use</dd>
 *      <dt>versions:</dt>  <dd>All versions that were registered</dd>
 *      <dt>builds:</dt>    <dd>All builds that were registered.</dd>
 *      <dt>mainClass:</dt> <dd>An object that was was stamped with the
 *                 current version and build. If 
 *                 mainClass.VERSION != version or mainClass.BUILD != build,
 *                 multiple versions of pieces of the library have been
 *                 loaded, potentially causing issues.</dd>
 *       </dl>
 *
 * @method getVersion
 * @static
 * @param {String}  name the name of the module (event, slider, etc)
 * @return {Object} The version info
 */
SKYPE.env.getVersion = function(name) {
    return SKYPE.env.modules[name] || null;
};

SKYPE.namespace("util", "user");

SKYPE.util.Browser = function()
{
    // Partly from ExtJS lib
    var ua = navigator.userAgent.toLowerCase();
    var isStrict = document.compatMode == "CSS1Compat";
    var isOpera = ua.indexOf("opera") > -1;
    var isSafari = /webkit|khtml/.test(ua);
    var isIE = ua.indexOf("msie") > -1;
    var isIE7 = ua.indexOf("msie 7") > -1;
    var isGecko = !isSafari && ua.indexOf("gecko") > -1;
    var isBorderBox = isIE && !isStrict;
    var isWindows = (ua.indexOf("windows") != -1 || ua.indexOf("win32") != -1);
    var isMac = (ua.indexOf("macintosh") != -1 || ua.indexOf("mac os x") != -1);
    var isLinux = /x11|linux|freebsd|netbsd/.test(ua);
    
    return {
        isStrict: isStrict
        ,isOpera: isOpera
        ,isSafari: isSafari
        ,isIE: isIE
        ,isIE7: isIE7
        ,isGecko: isGecko
        ,isBorderBox: isBorderBox
        ,isWindows: isWindows
        ,isMac: isMac
        ,isLinux: isLinux
    };
}();

SKYPE.register("skype", SKYPE, {version: "1.0.0", build: "1"});


}
/*
     FILE ARCHIVED ON 12:21:32 Feb 23, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:46:08 Oct 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.459
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.008
  esindex: 0.009
  cdx.remote: 6.996
  LoadShardBlock: 139.904 (3)
  PetaboxLoader3.datanode: 56.66 (4)
  PetaboxLoader3.resolve: 133.7 (2)
  load_resource: 84.77
*/