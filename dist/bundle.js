"use strict";function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.pswpNode=e||null,this.items=n||[],this.options={index:0,history:!1,focus:!1,modal:!1,closeOnScroll:!1,closeOnVerticalDrag:!1,closeEl:!1,closeElClasses:[]},this.photoSwipeInst=null}var n,i,s;return n=t,(i=[{key:"init",value:function(){this.pswpNode&&0!==this.items.length&&(this.photoSwipeInst=new PhotoSwipe(this.pswpNode,PhotoSwipeUI_Default,this.items,this.options),this.photoSwipeInst.init(),this.photoSwipeInst.listen("afterChange",(function(){var e=this.currItem;if(e.videosrc){var t=e.container.children[0];setTimeout((function(){t&&t.play()}),500)}else e.container.parentNode.parentNode.querySelectorAll("video").forEach((function(e){e.pause()}))})))}}])&&e(n.prototype,i),s&&e(n,s),t}();!function(e){for(var t=function e(t,n){return t&&(n(t)?t:e(t.parentNode,n))},n=function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1;var n=e.target||e.srcElement,s=t(n,(function(e){return e.tagName&&"FIGURE"===e.tagName.toUpperCase()}));if(s){for(var a,r=s.parentNode,o=s.parentNode.childNodes,l=o.length,c=0,p=0;p<l;p++)if(1===o[p].nodeType){if(o[p]===s){a=c;break}c++}return a>=0&&i(a,r),!1}},i=function(e,t,n,i){var s,a,r=document.querySelectorAll(".pswp")[0];if(a=function(e){for(var t,n,i,s,a=e.childNodes,r=a.length,o=[],l=0;l<r;l++)1===(t=a[l]).nodeType&&(i=(n=t.children[0]).getAttribute("data-size").split("x"),s={src:n.getAttribute("href"),w:parseInt(i[0],10),h:parseInt(i[1],10)},t.children.length>1&&(s.title=t.children[1].innerHTML),n.children.length>0&&(s.msrc=n.children[0].getAttribute("src")),s.el=t,o.push(s));return o}(t),s={galleryUID:t.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=a[e].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,i=t.getBoundingClientRect();return{x:i.left,y:i.top+n,w:i.width}}},i)if(s.galleryPIDs){for(var o=0;o<a.length;o++)if(a[o].pid==e){s.index=o;break}}else s.index=parseInt(e,10)-1;else s.index=parseInt(e,10);isNaN(s.index)||(n&&(s.showAnimationDuration=0),new PhotoSwipe(r,PhotoSwipeUI_Default,a,s).init())},s=document.querySelectorAll(e),a=0,r=s.length;a<r;a++)s[a].setAttribute("data-pswp-uid",a+1),s[a].onclick=n;var o=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var n=e.split("&"),i=0;i<n.length;i++)if(n[i]){var s=n[i].split("=");s.length<2||(t[s[0]]=s[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t}();o.pid&&o.gid&&i(o.pid,s[o.gid-1],!0,!0)}(".showcase-gallery");var n=document.querySelectorAll(".showcase-gallery__inline"),i=[{src:"assets/yqt/campaign/mid-autumn/index.jpg",w:562,h:1218,title:"活動首頁"},{src:"assets/yqt/campaign/mid-autumn/produce.jpg",w:562,h:1218},{src:"assets/yqt/campaign/mid-autumn/poster.jpg",w:562,h:1218}],s=[{src:"assets/yqt/campaign/thanksgiving/index.jpg",w:562,h:1218,title:"活動首頁"},{src:"assets/yqt/campaign/thanksgiving/message.jpg",w:562,h:1218},{src:"assets/yqt/campaign/thanksgiving/letter.jpg",w:562,h:1218},{videosrc:"assets/yqt/campaign/thanksgiving/RPReplay_Final1607095077.mp4",w:562,h:1218,html:'<video controls muted disablePictureInPicture controlsList="nodownload" poster="assets/yqt/campaign/thanksgiving/letter.png"><source src="assets/yqt/campaign/thanksgiving/RPReplay_Final1607095077.mp4" type="video/mp4"></video>'}];n.forEach((function(e){"mid-autumn"===e.dataset.event?new t(e,i).init():"thanksgiving"===e.dataset.event&&new t(e,s).init()}));
//# sourceMappingURL=bundle.js.map
