(function(window){var svgSprite='<svg><symbol id="icon-yuyin" viewBox="0 0 1024 1024"><path d="M149.046 870.51l211.562-211.562q-84.105-88.44-84.105-209.828 0-83.238 40.752-153.469t110.983-110.983 153.036-40.752 153.036 40.752 111.417 110.983 41.185 153.036-41.185 153.036-111.417 111.417-152.602 41.185q-98.845 0-179.481-58.96l-214.163 214.163q-8.671 7.804-19.942 7.804t-19.509-7.804-8.236-19.509 8.671-19.509zM581.275 704.035q103.612 0 176.88-73.266t73.266-176.446-73.266-176.446-176.88-73.266-176.446 73.266-72.833 176.446 72.833 176.446 176.446 73.266z"  ></path></symbol><symbol id="icon-caidan" viewBox="0 0 1536 1024"><path d="M236.8 140.8c0 25.6-19.2 44.8-44.8 44.8H102.4c-25.6 0-44.8-19.2-44.8-44.8V51.2c0-19.2 19.2-38.4 44.8-38.4H192c25.6 0 44.8 19.2 44.8 38.4v89.6zM1478.4 51.2c0-19.2-19.2-38.4-44.8-38.4H396.8c-19.2 0-44.8 19.2-44.8 38.4v89.6c0 25.6 25.6 44.8 44.8 44.8h1036.8c25.6 0 44.8-19.2 44.8-44.8V51.2zM236.8 467.2c0-25.6-19.2-44.8-44.8-44.8H102.4c-25.6 0-44.8 19.2-44.8 44.8v89.6c0 25.6 19.2 44.8 44.8 44.8H192c25.6 0 44.8-19.2 44.8-44.8V467.2z m1120 0c0-25.6-19.2-44.8-44.8-44.8H396.8c-19.2 0-44.8 19.2-44.8 44.8v89.6c0 25.6 25.6 44.8 44.8 44.8h915.2c25.6 0 44.8-19.2 44.8-44.8V467.2zM236.8 883.2c0-25.6-19.2-44.8-44.8-44.8H102.4c-25.6 0-44.8 19.2-44.8 44.8v89.6c0 19.2 19.2 38.4 44.8 38.4H192c25.6 0 44.8-19.2 44.8-38.4v-89.6z m1241.6 0c0-25.6-19.2-44.8-44.8-44.8H396.8c-19.2 0-44.8 19.2-44.8 44.8v89.6c0 19.2 25.6 38.4 44.8 38.4h1036.8c25.6 0 44.8-19.2 44.8-38.4v-89.6z"  ></path></symbol><symbol id="icon-xiala" viewBox="0 0 1024 1024"><path d="M512.727 675.319a30.014 30.014 0 0 1-21.436-9.006L231.175 400.907c-11.603-11.838-11.41-30.84 0.428-42.443 11.837-11.601 30.841-11.41 42.442 0.428l238.682 243.534 238.68-243.534c11.602-11.84 30.604-12.033 42.443-0.428 11.84 11.603 12.031 30.605 0.428 42.443L534.162 666.313a30.012 30.012 0 0 1-21.435 9.006z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)