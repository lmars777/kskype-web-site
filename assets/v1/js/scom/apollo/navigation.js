define("apollo/navigation",["apollo/navigator","apollo/document","apollo/window"],function(a,b,c){"use strict";var d={};return d.getBackTarget=function(){var a=b.getReferrer(),c="../";return/\.skype\.(net|com)/.test(a)&&a!==b.getLocationHref()&&(c=a),c},d.goBack=function(a){var b=d.getBackTarget();d.goTo(b,a)},d.goTo=function(a,c){c&&c(a),b.setLocationHref(a)},d.isSafari=function(){return-1!==a.getUserAgent().indexOf("Safari")&&-1===a.getUserAgent().indexOf("Chrome")},d.isChrome=function(){var b=a.getUserAgent().toLowerCase();return!!window.chrome&&/chrom(e|ium)/.test(b)&&!/opera|opr/i.test(b)&&-1===b.indexOf("edge")},d.isFirefox=function(){return-1!==a.getUserAgent().toLowerCase().indexOf("firefox")},d.isInternetExplorer=function(){var b=a.getUserAgent();return-1!==b.indexOf("MSIE")||-1!==b.indexOf("Trident/")},d.isEdge=function(){return-1!==a.getUserAgent().indexOf("Edge")},d.isEdgeDesktop=function(){return-1!==a.getUserAgent().toLowerCase().indexOf("nt 10")},d.getVersionOfOldInternetExplorer=function(){var b=a.getUserAgent();return-1!==b.indexOf("MSIE")?parseInt(b.match(/MSIE ([\d.]+)/)[1],10):void 0},d.isMac=function(){return-1!==a.getUserAgent().indexOf("Mac")},d.isMacOld=function(){if(!d.isMac())return!1;var b=a.getUserAgent().toLowerCase(),c={major:10,middle:5,minor:8},e=b.match(/mac os x ([._0-9]+)/);if(e&&e[1]){var f=e[1].split("_");1===f.length&&(f=e[1].split("."));for(var g=0;g<f.length;g++)f[g]=parseInt(f[g]);if(1===f.length&&f[0]<c.major)return!0;if(f[0]<c.major||f[0]===c.major&&f[1]<c.middle)return!0;if(f[0]>c.major||f[0]===c.major&&f[1]>c.middle)return!1;if(3===f.length&&f[1]===c.middle&&f[2]>=c.minor)return!1}else if(b.match(/(ipad|iphone)/))return!1;return!1},d.isMac10WithMiddleVersion=function(b){var c=a.getUserAgent().toLowerCase(),d=new RegExp("mac os x 10_"+b,"g"),e=new RegExp("mac os x 10."+b,"g");return d.test(c)||e.test(c)?!0:!1},d.isMac105=function(){return d.isMac10WithMiddleVersion(5)},d.isMac106=function(){return d.isMac10WithMiddleVersion(6)},d.isMac107=function(){return d.isMac10WithMiddleVersion(7)},d.isMac108=function(){return d.isMac10WithMiddleVersion(8)},d.isMac109=function(){return d.isMac10WithMiddleVersion(9)},d.isWebkit=function(){return-1!==a.getUserAgent().indexOf("WebKit")},d.isTouchEnabledBrowser=function(){var a=c.jQElement[0],d=b.jQElement[0],e=a.DocumentTouch;return void 0!==a.ontouchend||e&&d instanceof e},d});