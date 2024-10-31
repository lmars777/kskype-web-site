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

SKYPE.util.ConditionalContent = function()
{
    var E = YAHOO.util.Event;
    var D = YAHOO.util.Dom;
    
    var alts;
    
    E.onDOMReady(function()
    {
        // Get all alternative content blocks
        alts = D.getElementsByClassName("alternative", "DIV", document.body, function()
        {
            // Hide if it's not default block
            D.setStyle(this, "display", (D.hasClass(this, "cond-default") ? "block" : "none"));
        });
    });
    
    var filters = {
        "30days": function()
        {
            var age = SKYPE.util.ClientDetection.getSkypeUserAge();
            if (age >= 1 && age <= 30)
            {
                return D.getElementsByClassName("cond-30days", "DIV");
            }
            return [];
        }
        ,"existing": function()
        {
            var installed = SKYPE.util.ClientDetection.isInstalled();
            if (installed)
            {
                return D.getElementsByClassName("cond-existing", "DIV");
            }
            return [];
        }
    };
    
    _getFiltered = function()
    {
        var result = [];
        var tmp;
        for (filter in filters)
        {
            tmp = filters[filter]();
            SKYPE.log("Running conditionals filter "+filter+" found "+tmp.length+" items");
            result = result.concat(tmp);
            if (result.length) break;
        }
        return result;
    };
    
    return {
        run: function()
        {
            //SKYPE.util.ConditionalContent.switchPages();
            SKYPE.util.ConditionalContent.switchAlternatives();
            SKYPE.util.ConditionalContent.toggleUsername();
        }
        
        ,switchPages: function()
        {
            // 
            // if landing on root
            //  - send to useskype if known user
            // 
            // if landing on useskype
            //  - send to completedownload if known download abandoner
            //  - send to newtoskype if seems totally new
            //  - send to welcomeback if returning user age > 30 days
            //  - leave on useskype if known and age < 30 days
            // 
            
            var installed = SKYPE.util.ClientDetection.isInstalled();
            var age = SKYPE.util.ClientDetection.getSkypeUserAge();
            var root = "";
            // Top root / or /intl/xx/ root
            var rootRE = /^(\/|\/intl\/[^\/]+\/)(useskype\/)?$/;
            
            // Check if we are on root page
            var result = location.pathname.match(rootRE);
            if (result)
            {
                root = result[1];
            }
            
            // Set the profile value in SC cookie
            var modTime = SKYPE.user.Preferences.getTimeModified();
            if (installed && modTime < (new Date()).getTime() / 1000 - 60*60*24)
            {
                //SKYPE.log("Modification time is more than a day ago, checking profile");
                if (age > 30)
                {
                    SKYPE.log("Setting cookie profile to: existing");
                    SKYPE.user.Preferences.setClientProfile("existing");
                }
                else
                {
                    SKYPE.log("Setting cookie profile to: 30days");
                    SKYPE.user.Preferences.setClientProfile("30days");
                }
                SKYPE.user.Preferences.save();
            }
            
            // known user on front page
            if (installed && location.pathname == root)
            {
                // returning user age > 30 days
                if (age > 30)
                {
                    location.href = root+"welcomeback/";
                }
                else
                {
                    location.href = root+"useskype/";
                }
            }
            else if (location.pathname == root+"useskype/")
            {
                // seems totally new
                if (!installed)
                {
                    location.href = root+"newtoskype/";
                }
                // returning user age > 30 days
                else if (installed && age > 30)
                {
                    location.href = root+"welcomeback/";
                }
                // known and age < 30 days
                else if (installed && age < 30)
                {
                    SKYPE.log("Leave on existing page");
                }
                // known download abandoner
                // TODO: add completedownload check with other SO data
            }
        }
        
        ,switchAlternatives: function()
        {
            SKYPE.log("Switching alternative content blocks");
            
            var enableAlts = _getFiltered();
            if (enableAlts.length)
            {
                D.setStyle(enableAlts, "display", "block");
                SKYPE.util.ConditionalContent.hideDefaults();
            }
            else
            {
                SKYPE.util.ConditionalContent.showDefaults();
            }
        }
        ,showDefaults: function()
        {
            D.getElementsByClassName("cond-default", "DIV", document.body, function()
            {
                D.setStyle(this, "display", "block");
            });
        }
        ,hideDefaults: function()
        {
            D.getElementsByClassName("cond-default", "DIV", document.body, function()
            {
                D.setStyle(this, "display", "none");
            });
        }
        
        ,toggleUsername: function()
        {
            if (typeof SKYPE.util.ClientDetection == "undefined"
                || typeof SKYPE.util.ClientDetection.getSessionUsername == "undefined")
            {
                return;
            }
            var username = SKYPE.util.ClientDetection.getSessionUsername();
            
            if (!username.length) return;
            
            if (D.get("loggedin-username")) D.get("loggedin-username").innerHTML = username.replace(/[<>]/, "");
            
            if (D.get("loggedin-welcome")) D.setStyle(D.get("loggedin-welcome"), "display", "inline");
            if (D.get("loggedin-links")) D.setStyle(D.get("loggedin-links"), "display", "inline");
            if (D.get("loggedin-signout")) D.setStyle(D.get("loggedin-signout"), "display", "inline");
            if (D.get("loggedin-haveskype")) D.setStyle(D.get("loggedin-haveskype"), "display", "none");
            if (D.get("main-menu-account")) D.setStyle(D.get("main-menu-account"), "display", "inline");
        }
    };
}();

if (typeof SKYPE.util.ClientDetection != "undefined")
{
    SKYPE.util.ClientDetection.subscribe(
        SKYPE.util.ConditionalContent.run
        ,{}
        ,false
        ,function() {SKYPE.log('client detection failure'); }
    );
}


}
/*
     FILE ARCHIVED ON 12:20:59 Feb 23, 2008 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:46:08 Oct 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.59
  exclusion.robots: 0.024
  exclusion.robots.policy: 0.014
  esindex: 0.009
  cdx.remote: 13.747
  LoadShardBlock: 97.655 (3)
  PetaboxLoader3.datanode: 95.708 (4)
  load_resource: 176.136
  PetaboxLoader3.resolve: 141.813
*/