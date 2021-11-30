/**
 * Hover balloon on elements without css and images.
 *
 * Copyright (c) 2011 Hayato Takenaka
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 * @author: Hayato Takenaka (https://urin.github.io)
 * @version: 1.1.2 - 2017/04/30
**/
!function(a){function c(){this.initialize.apply(this,arguments)}function d(d,e,f){function p(a,b,c,d,e,f){const g=Math.round(d/1.7320508);b.inactive()["setBorder"+c.camel.pos.f](d)["setBorder"+c.camel.pos.c1](g)["setBorder"+c.camel.pos.c2](g)["set"+c.camel.pos.p1](c.isTopLeft?-d:a.inner[c.size.p])["set"+c.camel.pos.c1](a.inner[c.size.c]/f-g).active().$.css("border-"+c.pos.f+"-color",e)}e.stop(!0,!0);var g,h;const i={position:"absolute",height:"0",width:"0",border:"solid 0 transparent"},j=new c(d),k=new c(e),l=-f.offsetY+(f.position&&f.position.indexOf("top")>=0?j.top-k.height:f.position&&f.position.indexOf("bottom")>=0?j.bottom:j.center.top-k.height/2),m=f.offsetX+(f.position&&f.position.indexOf("left")>=0?j.left-k.width:f.position&&f.position.indexOf("right")>=0?j.right:j.center.left-k.width/2);if(k.setTop(l<0?0:l),k.setLeft(m<0?0:m),f.tipSize>0){e.data("outerTip")&&(e.data("outerTip").remove(),e.removeData("outerTip")),e.data("innerTip")&&(e.data("innerTip").remove(),e.removeData("innerTip")),g=new c(a("<div>").css(i).appendTo(e)),h=new c(a("<div>").css(i).appendTo(e));for(var n,o=0;o<b.pos.length;o++){if(n=b.getRelativeNames(o),k.center[n.pos.c1]>=j[n.pos.c1]&&k.center[n.pos.c1]<=j[n.pos.c2])if(o%2==0){if(k[n.pos.o]>=j[n.pos.o]&&k[n.pos.f]>=j[n.pos.f])break}else if(k[n.pos.o]<=j[n.pos.o]&&k[n.pos.f]<=j[n.pos.f])break;n=null}n?(k["set"+n.camel.pos.p1](k[n.pos.p1]+(n.isTopLeft?1:-1)*(f.tipSize-k["border"+n.camel.pos.o])),p(k,g,n,f.tipSize,e.css("border-"+n.pos.o+"-color"),f.tipPosition),p(k,h,n,f.tipSize-2*k["border"+n.camel.pos.o],e.css("background-color"),f.tipPosition),e.data("outerTip",g.$).data("innerTip",h.$)):a.each([g.$,h.$],function(){this.remove()})}}function e(b,c){const d=b.data("balloon")&&b.data("balloon").get(0);return!(d&&(d===c.relatedTarget||a.contains(d,c.relatedTarget)))}function f(a,b,c){b.html?a.empty().append(c):a.text(c)}function g(a,b,c){b.data("ajaxDisabled",!0),c.ajaxContentsMaxAge>=0&&setTimeout(function(){b.data("ajaxDisabled",!1)},c.ajaxContentsMaxAge),d(a,b,c)}const b={pos:a.extend(["top","bottom","left","right"],{camel:["Top","Bottom","Left","Right"]}),size:a.extend(["height","width"],{camel:["Height","Width"]}),getRelativeNames:function(a){const c={pos:{o:a,f:a%2==0?a+1:a-1,p1:a%2==0?a:a-1,p2:a%2==0?a+1:a,c1:a<2?2:0,c2:a<2?3:1},size:{p:a<2?0:1,c:a<2?1:0}},d={};for(var e in c){d[e]||(d[e]={});for(var f in c[e])d[e][f]=b[e][c[e][f]],d.camel||(d.camel={}),d.camel[e]||(d.camel[e]={}),d.camel[e][f]=b[e].camel[c[e][f]]}return d.isTopLeft=d.pos.o===d.pos.p1,d}};!function(){function f(a,c){if(null==c)return f(a,!0),f(a,!1);const d=b.getRelativeNames(c?0:2);return a[d.size.p]=a.$["outer"+d.camel.size.p](),a[d.pos.f]=a[d.pos.o]+a[d.size.p],a.center[d.pos.o]=a[d.pos.o]+a[d.size.p]/2,a.inner[d.pos.o]=a[d.pos.o]+a["border"+d.camel.pos.o],a.inner[d.size.p]=a.$["inner"+d.camel.size.p](),a.inner[d.pos.f]=a.inner[d.pos.o]+a.inner[d.size.p],a.inner.center[d.pos.o]=a.inner[d.pos.f]+a.inner[d.size.p]/2,a}const d={setBorder:function(a,b){return function(c){return this.$.css("border-"+a.toLowerCase()+"-width",c+"px"),this["border"+a]=c,this.isActive?f(this,b):this}},setPosition:function(a,b){return function(c){return this.$.css(a.toLowerCase(),c+"px"),this[a.toLowerCase()]=c,this.isActive?f(this,b):this}}};c.prototype={initialize:function(c){this.$=c,a.extend(!0,this,this.$.offset(),{center:{},inner:{center:{}}});for(var d=0;d<b.pos.length;d++)this["border"+b.pos.camel[d]]=parseInt(this.$.css("border-"+b.pos[d]+"-width"))||0;this.active()},active:function(){return this.isActive=!0,f(this),this},inactive:function(){return this.isActive=!1,this}};for(var e=0;e<b.pos.length;e++)c.prototype["setBorder"+b.pos.camel[e]]=d.setBorder(b.pos.camel[e],e<2),e%2==0&&(c.prototype["set"+b.pos.camel[e]]=d.setPosition(b.pos.camel[e],e<2))}(),a.fn.balloon=function(b){return this.one("mouseenter",function c(d){const f=a(this),g=this,h=f.on("mouseenter",function(a){e(f,a)&&f.showBalloon()}).off("mouseenter",c).showBalloon(b).data("balloon");h&&h.on("mouseleave",function(b){g===b.relatedTarget||a.contains(g,b.relatedTarget)||f.hideBalloon()}).on("mouseenter",function(b){g===b.relatedTarget||a.contains(g,b.relatedTarget)||(h.stop(!0,!0),f.showBalloon())})}).on("mouseleave",function(b){const c=a(this);e(c,b)&&c.hideBalloon()})},a.fn.showBalloon=function(b){var c=this.data("options")?this.data("options"):b||{};return!b&&this.data("options")||(null===a.balloon.defaults.css&&(a.balloon.defaults.css={}),this.data("options",a.extend(!0,{},a.balloon.defaults,b||{}))),b=this.data("options"),this.each(function(){var e=this,h=a(e),i=!h.data("balloon"),j=h.data("balloon")||a("<div>");if(i||!j.data("active")){j.data("active",!0),clearTimeout(j.data("minLifetime"));const k=a.isFunction(b.contents)?b.contents.call(e):b.contents||h.attr("title")||h.attr("alt");h.removeAttr("title");var l=a.isFunction(b.ajax)||b.url;!l&&""===k||null==k||(a.isFunction(b.contents)||(b.contents=k),l?j.data("ajaxDisabled")||(""!==k&&null!=k&&f(j,b,k),clearTimeout(j.data("ajaxDelay")),l=b.url?function(){j.load(a.isFunction(b.url)?b.url.call(e):b.url,function(a,c,d){b.ajaxComplete&&b.ajaxComplete.call(e,a,c,d),"success"!==c&&"notmodified"!==c||g(h,j,b)})}:function(){function d(a,d){if(!c){if(c=!0,a)return;f(j,b,d),g(h,j,b)}}var c=!1;const i=b.ajax.call(e,d);i&&a.isFunction(i.then)&&i.then(function(a){d(null,a)},function(a){d(a)})},j.data("ajaxDelay",setTimeout(l,b.ajaxDelay))):f(j,b,k),j.css(b.css||{}).removeClass(c.classname).addClass(b.classname),i?(j.css({visibility:"hidden",position:"absolute"}).appendTo("body"),h.data("balloon",j),d(h,j,b),j.hide().css("visibility","visible")):d(h,j,b),j.data("delay",setTimeout(function(){b.showAnimation?b.showAnimation.apply(j.stop(!0,!0),[b.showDuration,function(){b.showComplete&&b.showComplete.apply(j)}]):j.show(b.showDuration,function(){this.style.removeAttribute&&this.style.removeAttribute("filter"),b.showComplete&&b.showComplete.apply(j)}),b.maxLifetime&&(clearTimeout(j.data("maxLifetime")),j.data("maxLifetime",setTimeout(function(){h.hideBalloon()},b.maxLifetime)))},b.delay)))}})},a.fn.hideBalloon=function(){const b=this.data("options");return this.data("balloon")?this.each(function(){const c=a(this),d=c.data("balloon");clearTimeout(d.data("delay")),clearTimeout(d.data("minLifetime")),clearTimeout(d.data("ajaxDelay")),d.data("minLifetime",setTimeout(function(){b.hideAnimation?b.hideAnimation.apply(d.stop(!0,!0),[b.hideDuration,function(c){a(this).data("active",!1),b.hideComplete&&b.hideComplete(c)}]):d.stop(!0,!0).hide(b.hideDuration,function(c){a(this).data("active",!1),b.hideComplete&&b.hideComplete(c)})},b.minLifetime))}):this},a.balloon={defaults:{contents:null,html:!1,classname:null,url:null,ajax:null,ajaxComplete:null,ajaxDelay:500,ajaxContentsMaxAge:-1,delay:0,minLifetime:200,maxLifetime:0,position:"top",offsetX:0,offsetY:0,tipSize:8,tipPosition:2,showDuration:100,showAnimation:null,hideDuration:80,hideAnimation:function(a,b){this.fadeOut(a,b)},showComplete:null,hideComplete:null,css:{fontSize:".7rem",minWidth:".7rem",padding:".2rem .5rem",border:"1px solid rgba(212, 212, 212, .4)",borderRadius:"3px",boxShadow:"2px 2px 4px #555",color:"#eee",backgroundColor:"#111",opacity:.85,zIndex:"32767",textAlign:"left"}}}}(jQuery);
