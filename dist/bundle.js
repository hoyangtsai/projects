"use strict";function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var t=function(){function t(e,s){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.pswpNode=e||null,this.items=s||[],this.options={index:0,history:!1,focus:!1,modal:!1,closeOnScroll:!1,closeOnVerticalDrag:!1,closeEl:!1,closeElClasses:[],shareEl:!1,shareButtons:[]},this.photoSwipeInst=null}var s,n,i;return s=t,(n=[{key:"init",value:function(){this.pswpNode&&0!==this.items.length&&(this.photoSwipeInst=new PhotoSwipe(this.pswpNode,PhotoSwipeUI_Default,this.items,this.options),this.photoSwipeInst.init(),this.photoSwipeInst.listen("afterChange",(function(){var e=this.currItem;if(e.videosrc){var t=e.container.children[0];setTimeout((function(){t&&t.play()}),500)}else e.container.parentNode.parentNode.querySelectorAll("video").forEach((function(e){e.pause()}))})))}}])&&e(s.prototype,n),i&&e(s,i),t}();!function(e){for(var t=function e(t,s){return t&&(s(t)?t:e(t.parentNode,s))},s=function(e){(e=e||window.event).preventDefault?e.preventDefault():e.returnValue=!1;var s=e.target||e.srcElement,i=t(s,(function(e){return e.tagName&&"FIGURE"===e.tagName.toUpperCase()}));if(i){for(var a,r=i.parentNode,o=i.parentNode.childNodes,l=o.length,c=0,p=0;p<l;p++)if(1===o[p].nodeType){if(o[p]===i){a=c;break}c++}return a>=0&&n(a,r),!1}},n=function(e,t,s,n){var i,a,r=document.querySelectorAll(".pswp")[0];if(a=function(e){for(var t,s,n,i,a=e.childNodes,r=a.length,o=[],l=0;l<r;l++)1===(t=a[l]).nodeType&&(n=(s=t.children[0]).getAttribute("data-size").split("x"),i={src:s.getAttribute("href"),w:parseInt(n[0],10),h:parseInt(n[1],10)},t.children.length>1&&(i.title=t.children[1].innerHTML),s.children.length>0&&(i.msrc=s.children[0].getAttribute("src")),i.el=t,o.push(i));return o}(t),i={galleryUID:t.getAttribute("data-pswp-uid"),getThumbBoundsFn:function(e){var t=a[e].el.getElementsByTagName("img")[0],s=window.pageYOffset||document.documentElement.scrollTop,n=t.getBoundingClientRect();return{x:n.left,y:n.top+s,w:n.width}}},n)if(i.galleryPIDs){for(var o=0;o<a.length;o++)if(a[o].pid==e){i.index=o;break}}else i.index=parseInt(e,10)-1;else i.index=parseInt(e,10);isNaN(i.index)||(s&&(i.showAnimationDuration=0),new PhotoSwipe(r,PhotoSwipeUI_Default,a,i).init())},i=document.querySelectorAll(e),a=0,r=i.length;a<r;a++)i[a].setAttribute("data-pswp-uid",a+1),i[a].onclick=s;var o=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var s=e.split("&"),n=0;n<s.length;n++)if(s[n]){var i=s[n].split("=");i.length<2||(t[i[0]]=i[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t}();o.pid&&o.gid&&n(o.pid,i[o.gid-1],!0,!0)}(".showcase-gallery");var s=document.querySelectorAll(".showcase-gallery__inline"),n=[{src:"assets/yqt/campaign/mid-autumn/index.jpg",w:562,h:1218,title:"活動首頁"},{src:"assets/yqt/campaign/mid-autumn/produce.jpg",w:562,h:1218},{src:"assets/yqt/campaign/mid-autumn/poster.jpg",w:562,h:1218}],i=[{src:"assets/yqt/campaign/thanksgiving/index.jpg",w:562,h:1218,title:"活動首頁"},{src:"assets/yqt/campaign/thanksgiving/message.jpg",w:562,h:1218},{src:"assets/yqt/campaign/thanksgiving/letter.jpg",w:562,h:1218},{videosrc:"assets/yqt/campaign/thanksgiving/RPReplay_Final1607095077.mp4",w:562,h:1218,html:'<video controls muted disablePictureInPicture controlsList="nodownload" poster="assets/yqt/campaign/thanksgiving/letter.jpg"><source src="assets/yqt/campaign/thanksgiving/RPReplay_Final1607095077.mp4" type="video/mp4"></video>'}],a=[{src:"assets/wxgold/IMG_1566.jpg",w:562,h:1218,title:"金沙紅包"},{src:"assets/wxgold/IMG_1567.jpg",w:562,h:1218},{src:"assets/wxgold/IMG_1554.jpg",w:562,h:1218},{videosrc:"assets/wxgold/RPReplay_Final1561480690.mp4",w:562,h:1218,html:'<video controls muted disablePictureInPicture controlsList="nodownload"\b><source src="assets/wxgold/RPReplay_Final1561480690.mp4" type="video/mp4"></video>'}],r=[{src:"assets/wecard/coupon-1.jpg",w:540,h:1170,title:"優惠券首頁"},{src:"assets/wecard/coupon-2.jpg",w:540,h:1170},{src:"assets/wecard/coupon-3.jpg",w:540,h:1170},{src:"assets/wecard/pt-index.jpg",w:562,h:1444},{src:"assets/wecard/pt-invited.jpg",w:562,h:1218},{videosrc:"assets/wecard/RPReplay_Final1561606039.mp4",w:562,h:1218,html:'<video controls muted disablePictureInPicture controlsList="nodownload"\b poster="assets/wecard/event-618.jpg"><source src="assets/wecard/RPReplay_Final1561606039.mp4" type="video/mp4"></video>'}];s.forEach((function(e){"mid-autumn"===e.dataset.slide?new t(e,n).init():"thanksgiving"===e.dataset.slide?new t(e,i).init():"wxgold"===e.dataset.slide?new t(e,a).init():"wecard"===e.dataset.slide&&new t(e,r).init()}));
//# sourceMappingURL=bundle.js.map
