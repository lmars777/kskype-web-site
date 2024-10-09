var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


if(jQuery.isLithium!==true){jQuery=LITHIUM.jQuery;}
;(function($LITH){LITHIUM.DropDownMenu=function(params){if(LITHIUM.DropDownMenu.init!==true){LITHIUM.DropDownMenu.init=true;var menus=[];var menuOpenedDataKey="LITHIUM.DropDownMenu.opened";var menuItemsDataKey="LITHIUM.DropDownMenu.menuItems";LITHIUM.DropDownMenu.createMenu=function(event){var menu=$LITH(event.target).closest(params.menuElementSelector);var menuItems=menu.find(params.menuItemsSelector);menu.data(menuItemsDataKey,menuItems);menus.push(menu);return menu;}
LITHIUM.DropDownMenu.openMenu=function(menu){LITHIUM.DropDownMenu.closeAllMenus();menu.data(menuOpenedDataKey,true).addClass(params.menuOpenCssClass);menu.data(menuItemsDataKey).shim()
menu.trigger(params.menuOpenedEvent);}
LITHIUM.DropDownMenu.closeAllMenus=function(){$LITH.each(menus,function(){var menu=$LITH(this);if(menu.data(menuOpenedDataKey)===true){menu.data(menuOpenedDataKey,false).removeClass(params.menuOpenCssClass).data(menuItemsDataKey).shim(false);menu.trigger(params.menuClosedEvent);}});}
LITHIUM.DropDownMenu.clickCloseMenus=function(event){if(event.currentTarget===document){LITHIUM.DropDownMenu.closeAllMenus();}}
$LITH(document).on("click",params.clickElementSelector,function(event){var menu=LITHIUM.DropDownMenu.createMenu(event);if(menu.data(menuOpenedDataKey)!==true){LITHIUM.DropDownMenu.openMenu(menu);$LITH(document).bind(params.closeMenuEvent+" "+"click",LITHIUM.DropDownMenu.clickCloseMenus);}else{LITHIUM.DropDownMenu.closeAllMenus();$LITH(document).unbind(params.closeMenuEvent+" "+"click",LITHIUM.DropDownMenu.clickCloseMenus);}
return false;});$LITH(document).on(params.hoverLeaveEvent,params.clickElementSelector,LITHIUM.DropDownMenu.closeAllMenus);LITHIUM.DropDownMenu.mouseoverCloseMenus=function(event){if(event.currentTarget===document&&$LITH(event.target).closest(params.menuItemsSelector).length==0){var menu=$LITH(event.target).closest(params.menuElementSelector);if(menu.length==0||(menu.length>0&&menu.not(event.data.menu).length!=0)){LITHIUM.DropDownMenu.closeAllMenus();$LITH(document).unbind(params.closeMenuEvent+" "+"mouseover",LITHIUM.DropDownMenu.mouseoverCloseMenus);}}}
$LITH(document).on("click",params.mouseoverElementSelector,function(event){return false;});$LITH(document).on("mouseover",params.mouseoverElementSelector,function(event){var menu=LITHIUM.DropDownMenu.createMenu(event);if(menu.data(menuOpenedDataKey)!==true){LITHIUM.DropDownMenu.openMenu(menu);$LITH(document).bind(params.closeMenuEvent+" "+"mouseover",{menu:menu},LITHIUM.DropDownMenu.mouseoverCloseMenus);}
return false;});}}})(LITHIUM.jQuery);
;(function($LITH){LITHIUM.ResizeImages=function(maxWidth,elementCssSelector,maxWidthCssClass){$LITH(elementCssSelector).each(function(){if(this.width>maxWidth){$LITH(this).attr({width:maxWidth,height:this.clientHeight*(maxWidth/this.clientWidth),"class":maxWidthCssClass});}});}})(LITHIUM.jQuery);
;(function($LITH){LITHIUM.AjaxFeedback=function(feedbackSelector,hideFeedbackEvent){if(LITHIUM.AjaxFeedback.init!==true){LITHIUM.AjaxFeedback.init=true;$LITH(document).on(hideFeedbackEvent,function(){$LITH(feedbackSelector).children().hide();});}}})(LITHIUM.jQuery);
;(function($LITH){LITHIUM.CustomEvent=function(selector,triggerEvent){if(LITHIUM.CustomEvent[triggerEvent]!==true){LITHIUM.CustomEvent[triggerEvent]=true;LITHIUM.Cache.create("CustomEvent",["elementId","triggerEvent"]);$LITH(document).on(triggerEvent,selector,function(event){var element=$LITH(this);var customEvent=LITHIUM.Cache.CustomEvent.get({elementId:element.attr("id"),triggerEvent:event.handleObj.origType});if(customEvent.fireEvent){var fireEventObj=$LITH.Event(customEvent.fireEvent);fireEventObj.hasOwnProperty("data")?$LITH.extend(fireEventObj.data,customEvent.eventContext):fireEventObj.data=customEvent.eventContext;element.trigger(fireEventObj);if(customEvent.stopTriggerEvent||fireEventObj.isDefaultPrevented()||fireEventObj.isPropagationStopped()){return false;}}});}}})(LITHIUM.jQuery);
;(function($LITH){LITHIUM.Dialog=function(params){var triggerSelector=params.triggerSelector;var runOnceMap=$LITH(document.body).data("LITHIUM.Dialog.runOnceMap");if(runOnceMap==null){runOnceMap={};}
if(runOnceMap[triggerSelector]!==true){runOnceMap[triggerSelector]=true;$LITH(document.body).data("LITHIUM.Dialog.runOnceMap",runOnceMap);$LITH(document).on(params.triggerEvent,triggerSelector,function(event){var element=$LITH(this);var dialogOptionsKey=element.data(params.dialogKey);var content=element.data("LITHIUM.Dialog.content");var lightbox=element.data("LITHIUM.Dialog.lightbox");var clearOnClose=true;params=$LITH.extend({},params,LITHIUM.Dialog.options[dialogOptionsKey]);params.triggerMemo=event.memo;if(lightbox===undefined&&content===undefined){if(window.self!==window.top){if(params.dialogOptions.position.length>1){if(params.dialogOptions.position[1]==="middle"){params.dialogOptions.position[1]=50;}
var windowHeight=$LITH(window).height();if(params.dialogOptions.minHeight>windowHeight){params.dialogOptions.minHeight=windowHeight;}
if(params.dialogOptions.maxHeight>(windowHeight-155)){params.dialogOptions.maxHeight=windowHeight-155;}}else{params.dialogOptions.position[1]=50;}
var windowWidth=$LITH(window).width();params.dialogOptions.width=windowWidth-100;params.dialogOptions.minWidth=windowWidth-300;params.dialogOptions.maxWidth=windowWidth-100;}
$LITH.extend(params.dialogOptions,{close:function(event){$LITH(this).trigger("LITHIUM:beforeLightboxCloseEvent");if(clearOnClose){$LITH(this).empty();}
$LITH(this).dialog("widget").closest(".ui-dialog").shim(false);},open:function(){if(window!==window.top){$LITH(this).css("overflow","auto");}
if(params.dialogOptions.maxHeight!=="undefined"){$LITH(this).css("max-height",params.dialogOptions.maxHeight);}
$LITH(this).parent().find(".ui-dialog-titlebar-close").unbind("click").click(function(){lightbox.trigger("LITHIUM:lightboxCloseEvent");return false;});}});content=$LITH("<div/>").addClass(params.dialogContentCssClass);lightbox=$LITH(content).dialog(params.dialogOptions);element.data("LITHIUM.Dialog.content",content);element.data("LITHIUM.Dialog.lightbox",lightbox);var closeDialog=function(event){if(event.memo&&event.memo.clearOnClose===false){clearOnClose=false;}
lightbox.dialog("close");$LITH(document).trigger("mousedown").trigger("mouseup");}
$LITH(lightbox).bind("LITHIUM:lightboxCloseEvent",closeDialog);$LITH(document).bind("LITHIUM:lightboxCloseEventGlobal",closeDialog);}
if(!lightbox.dialog("isOpen")){content.empty();if(params.contentType==="url"){content.append($LITH("<iframe/>",{"src":params.contentContext}));}else if(params.contentType==="html"){content.append(params.contentContext);}else if(params.contentType==="ajax"){var memo=params.triggerMemo||{};$LITH.extend(memo,{success:function(response){var component=response.parameters[0].component;content.append(component.content);LITHIUM.AjaxSupport.ScriptsProcessor.handleScriptEvaluation(component);if(window===window.top){if(params.dialogOptions.fitInWindow){var lightboxHeightDiff=lightbox.parent().height()-lightbox.height();if(lightbox.parent().height()>$LITH(window).height()-155){var height;if(lightbox.dialog("option","minHeight")>$LITH(window).height()-155){height=lightbox.dialog("option","minHeight");}else{height=$LITH(window).height()-155}
lightbox.parent().css("height",height);lightbox.css("height",height-lightboxHeightDiff);lightbox.dialog("option","maxWidth",lightbox.parent().width());}}
if(lightbox.parent().height()>lightbox.dialog("option","maxHeight"))
{lightbox.dialog("option","maxHeight",lightbox.parent().height());}
if(lightbox.parent().width()>lightbox.dialog("option","maxWidth"))
{lightbox.dialog("option","maxWidth",lightbox.parent().width());}
lightbox.dialog("option","position",params.dialogOptions.position);}}});$LITH(this).trigger(params.ajaxEvent,memo);}
if(params.dialogOptions.overflow){lightbox.dialog("widget").closest(".ui-dialog").css("overflow",params.dialogOptions.overflow);}
lightbox.dialog("open");lightbox.dialog("widget").closest(".ui-dialog").shim();}
return false;});}};LITHIUM.Dialog.options={};})(LITHIUM.jQuery);;(function($){if($.ui&&$.ui.dialog){$.ui.dialog.overlay.events=$.map("focus,keydown,keypress".split(","),function(event){return event+".dialog-overlay";}).join(' ');}}(LITHIUM.jQuery));
;(function($LITH){LITHIUM.SurveyLauncher=function(params){var surveysLaunchedOnce=false;var dialogLink=$LITH(params.dialogLinkSelector);if(params.launchOnLoad===true&&surveysLaunchedOnce===false){surveysLaunchedOnce=true;window.setTimeout(function(){dialogLink.click();},3000);}else{dialogLink.trigger(params.getSurveyUrlEvent,{success:function(data){var url=data.parameters[0].surveyUrl;if(url!==""){dialogLink.attr("href",url);$LITH("a[href^='http']").not(params.dialogLinkSelector).click(function(event){var href=$LITH(this).attr("href");var target=$LITH(this).attr("target");var hostName=href.substring(href.indexOf("://")+3);var allowedExternalLink=false;params.allowedHostNames.push(window.location.hostname);$LITH.each(params.allowedHostNames,function(index,allowedHostName){if(allowedHostName.length>0&&hostName.toLowerCase().match(new RegExp(allowedHostName.toLowerCase()))){allowedExternalLink=true;}
return!allowedExternalLink;});if(allowedExternalLink===false&&surveysLaunchedOnce===false){event.stop();var cancelEvent=false;$LITH(document.body).bind(params.cancelEvent,function(event){cancelEvent=true;$LITH(event.target).attr("href",href).attr("target",target);}).bind(params.closeDialogEvent,function(event){if(cancelEvent===false){window.location.href=href;}});surveysLaunchedOnce=true;dialogLink.click();}});}}});}
$LITH(document.body).bind(params.submitEvent,function(event){$LITH(event.target).attr("href",dialogLink.attr("href"));});}})(LITHIUM.jQuery);


}
/*
     FILE ARCHIVED ON 02:48:43 Oct 17, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:44:51 Oct 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.528
  exclusion.robots: 0.018
  exclusion.robots.policy: 0.009
  esindex: 0.012
  cdx.remote: 7.059
  LoadShardBlock: 142.488 (3)
  PetaboxLoader3.resolve: 116.235 (2)
  PetaboxLoader3.datanode: 47.817 (4)
  load_resource: 51.132
*/