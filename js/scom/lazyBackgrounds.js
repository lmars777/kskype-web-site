define("scom/lazyBackgrounds",["jquery","apollo/scroll"],function(a,b){"use strict";function c(){a("section").each(function(){var c=a(this);c.visible(!0)&&c.is(":visible")&&a(this).removeClass(d),b(this).on("stage",function(){var b=this.jQElement;a(b).removeClass(d),b.is(":visible")&&(a(b).next().removeClass(d),a(b).prev().removeClass(d),this.off("stage"))})})}var d="lazyBackgrounds";c()});