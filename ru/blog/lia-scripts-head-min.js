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


if(typeof LITHIUM=='undefined'){var LITHIUM={};};

LITHIUM.Loader=(function(){var functionCache=[];var loaded=false;return{"onLoad":function(func){if(typeof func==="function"){if(loaded===true){func();}else{functionCache.push(func);}}},getOnLoadFunctions:function(){return functionCache;},setLoaded:function(){loaded=true;},isLoaded:function(){return loaded;}}})();

if(typeof LITHIUM.Components==='undefined'){LITHIUM.Components={};}
LITHIUM.Components.render=function(componentId,data,optionsParam){var runner=function(){var requestUrl=LITHIUM.Components.renderUrl(componentId);var options={type:"GET",dataType:"json"};LITHIUM.jQuery.extend(options,optionsParam||{});if(!options.hasOwnProperty("url")){LITHIUM.jQuery.extend(options,{url:requestUrl});}
options.data=data;LITHIUM.jQuery.ajax(options);};if(LITHIUM.Loader.isLoaded()===true){runner();}else{LITHIUM.Loader.onLoad(runner);}};LITHIUM.Components.renderUrl=function(componentId,parameters){var url=LITHIUM.Components.RENDER_URL;LITHIUM.jQuery.each({"component-id":componentId},function(key,value){url=url.replace(new RegExp("#{"+key+"}","g"),value);});if(typeof parameters!=="undefined"){url+="?"+LITHIUM.jQuery.param(parameters);}
return url;};LITHIUM.Components.renderInPlace=function(componentId,parametersParam,optionsParam,shellClientId,scriptElementSelector,containerSelector){var placeHolderId;var placeholderDiv;if(shellClientId){placeHolderId=shellClientId;}else if(LITHIUM.Loader.isLoaded()===false){placeHolderId=new Date().getTime().toString()+Math.floor(Math.random()*10000000+1);placeholderDiv="<div id='@id' class='@class'></div>".replace("@id",placeHolderId).replace("@class",LITHIUM.Css.BASE_LAZY_LOAD);document.write(placeholderDiv);}
var loadRunner=function(){var parameters=parametersParam||{};var options=optionsParam||{};LITHIUM.jQuery.extend(parameters,{"renderedScripts":LITHIUM.RenderedScripts.toString(),"component-id":componentId});LITHIUM.jQuery.extend(options,{"success":function(data){LITHIUM.jQuery("#"+placeHolderId).replaceWith(data.content);LITHIUM.AjaxSupport.ScriptsProcessor.handleScriptEvaluation(data);if(containerSelector){LITHIUM.jQuery(containerSelector).trigger("LITHIUM:ajaxSuccess:renderInPlace",{"componentId":componentId});}
if(scriptElementSelector){setTimeout(function(){LITHIUM.jQuery(scriptElementSelector).remove();},10);}},"error":function(request,textStatus,errorThrown){var placeholder=LITHIUM.jQuery("#"+placeHolderId);if(request.readyState==0||request.status==0){placeholder.html("");}
else{placeholder.html("<span class=\"lia-ajax-error-text\">"+optionsParam.errorMessage+"</span>");}
placeholder.removeClass(LITHIUM.Css.BASE_LAZY_LOAD);}});LITHIUM.Components.render(componentId,parameters,options);};if(LITHIUM.Loader.isLoaded()===false){LITHIUM.Loader.onLoad(loadRunner);}else{loadRunner();}};LITHIUM.Components.renderTemplateInPlace=function(template,options){LITHIUM.Components.renderInPlace("common.widget.template-content",{value:template},options);};LITHIUM.Components.renderTemplate=function(template,options){return LITHIUM.Components.render("common.widget.template-content",{value:template,asMarkup:true},LITHIUM.jQuery.extend(options,{dataType:"html"}));};

LITHIUM.LiModernizr=function(){var docElement=document.documentElement;docElement.className=docElement.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(" js");}();

function AC_AddExtension(src,ext)
{if(src.indexOf('?')!=-1)
return src.replace(/\?/,ext+'?');else
return src+ext;}
function AC_Generateobj(objAttrs,params,embedAttrs)
{var str='<object ';for(var i in objAttrs)
str+=i+'="'+objAttrs[i]+'" ';str+='>';for(var i in params)
str+='<param name="'+i+'" value="'+params[i]+'" /> ';str+='<embed ';for(var i in embedAttrs)
str+=i+'="'+embedAttrs[i]+'" ';str+=' ></embed></object>';document.write(str);}
function AC_FL_RunContent(){var ret=AC_GetArgs
(arguments,".swf","movie","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash");AC_Generateobj(ret.objAttrs,ret.params,ret.embedAttrs);}
function AC_SW_RunContent(){var ret=AC_GetArgs
(arguments,".dcr","src","clsid:166B1BCA-3F9C-11CF-8075-444553540000",null);AC_Generateobj(ret.objAttrs,ret.params,ret.embedAttrs);}
function AC_GetArgs(args,ext,srcParamName,classid,mimeType){var ret=new Object();ret.embedAttrs=new Object();ret.params=new Object();ret.objAttrs=new Object();for(var i=0;i<args.length;i=i+2){var currArg=args[i].toLowerCase();switch(currArg){case"classid":break;case"pluginspage":ret.embedAttrs[args[i]]=args[i+1];break;case"src":case"movie":args[i+1]=AC_AddExtension(args[i+1],ext);ret.embedAttrs["src"]=args[i+1];ret.params[srcParamName]=args[i+1];break;case"onafterupdate":case"onbeforeupdate":case"onblur":case"oncellchange":case"onclick":case"ondblClick":case"ondrag":case"ondragend":case"ondragenter":case"ondragleave":case"ondragover":case"ondrop":case"onfinish":case"onfocus":case"onhelp":case"onmousedown":case"onmouseup":case"onmouseover":case"onmousemove":case"onmouseout":case"onkeypress":case"onkeydown":case"onkeyup":case"onload":case"onlosecapture":case"onpropertychange":case"onreadystatechange":case"onrowsdelete":case"onrowenter":case"onrowexit":case"onrowsinserted":case"onstart":case"onscroll":case"onbeforeeditfocus":case"onactivate":case"onbeforedeactivate":case"ondeactivate":case"type":case"codebase":ret.objAttrs[args[i]]=args[i+1];break;case"width":case"height":case"align":case"vspace":case"hspace":case"class":case"title":case"accesskey":case"name":case"id":case"tabindex":ret.embedAttrs[args[i]]=ret.objAttrs[args[i]]=args[i+1];break;default:ret.embedAttrs[args[i]]=ret.params[args[i]]=args[i+1];}}
ret.objAttrs["classid"]=classid;if(mimeType)ret.embedAttrs["type"]=mimeType;return ret;}
var AC_runMinavox=function(width,height,cid,pid,vid,outpt){return AC_FL_RunContent('codebase','https://web.archive.org/web/20131018125026/https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0','width',width,'height',height,'src','https://web.archive.org/web/20131018125026/http://www1.savisys.com/saviUsr/publicViewer_Ipsos?cid='+cid+'&uid=1&pid='+pid+'&iid='+vid+'&inpt=0&outpt='+outpt+'&srv=www1.savisys.com&fms=media1.savisys.com&a=0&b=0&c=0&d=0&q=&g=','quality','high','pluginspage','https://web.archive.org/web/20131018125026/https://www.macromedia.com/go/getflashplayer','wmode','transparent','allowScriptAccess','sameDomain','id','public','bgcolor','#FFFFFF','name','singleViewer','menu','false','movie','https://web.archive.org/web/20131018125026/http://www1.savisys.com/saviUsr/publicViewer_Ipsos?cid='+cid+'&uid=1&pid='+pid+'&iid='+vid+'&inpt=0&outpt='+outpt+'&srv=www1.savisys.com&fms=media1.savisys.com&a=0&b=0&c=0&d=0&q=&g=','salign','');}


}
/*
     FILE ARCHIVED ON 12:50:26 Oct 18, 2013 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:44:13 Oct 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.668
  exclusion.robots: 0.028
  exclusion.robots.policy: 0.014
  esindex: 0.014
  cdx.remote: 6.718
  LoadShardBlock: 88.252 (3)
  PetaboxLoader3.datanode: 49.913 (4)
  PetaboxLoader3.resolve: 102.675 (2)
  load_resource: 70.297
*/