/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(S.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+k.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):(o=(e+" "+T.join(r+" ")+r).split(" "),s(o,t,n))}function l(){p.input=function(n){for(var r=0,o=n.length;o>r;r++)j[n[r]]=!!(n[r]in E);return j.list&&(j.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),j}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),p.inputtypes=function(e){for(var r,o,a,i=0,c=e.length;c>i;i++)E.setAttribute("type",o=e[i]),r="text"!==E.type,r&&(E.value=x,E.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&E.style.WebkitAppearance!==n?(g.appendChild(E),a=t.defaultView,r=a.getComputedStyle&&"textfield"!==a.getComputedStyle(E,null).WebkitAppearance&&0!==E.offsetHeight,g.removeChild(E)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?E.checkValidity&&E.checkValidity()===!1:E.value!=x)),P[e[i]]=!!r;return P}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d,f,m="2.8.3",p={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,E=t.createElement("input"),x=":)",w={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",k=C.split(" "),T=C.toLowerCase().split(" "),N={svg:"http://www.w3.org/2000/svg"},M={},P={},j={},$=[],D=$.slice,F=function(e,n,r,o){var a,i,c,s,u=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),u.appendChild(c);return a=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(l?u:d).innerHTML+=a,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",s=g.style.overflow,g.style.overflow="hidden",g.appendChild(d)),i=n(u,e),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),g.style.overflow=s),!!i},z=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return F("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},A=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=a(o[e],"function"),a(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty;f=a(L,"undefined")||a(L.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=D.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(D.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(D.call(arguments)))};return r}),M.flexbox=function(){return u("flexWrap")},M.flexboxlegacy=function(){return u("boxDirection")},M.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},M.canvastext=function(){return!(!p.canvas||!a(t.createElement("canvas").getContext("2d").fillText,"function"))},M.webgl=function(){return!!e.WebGLRenderingContext},M.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",S.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},M.geolocation=function(){return"geolocation"in navigator},M.postmessage=function(){return!!e.postMessage},M.websqldatabase=function(){return!!e.openDatabase},M.indexedDB=function(){return!!u("indexedDB",e)},M.hashchange=function(){return A("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},M.history=function(){return!(!e.history||!history.pushState)},M.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},M.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},M.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(b.backgroundColor,"rgba")},M.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(b.backgroundColor,"rgba")||i(b.backgroundColor,"hsla")},M.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},M.backgroundsize=function(){return u("backgroundSize")},M.borderimage=function(){return u("borderImage")},M.borderradius=function(){return u("borderRadius")},M.boxshadow=function(){return u("boxShadow")},M.textshadow=function(){return""===t.createElement("div").style.textShadow},M.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},M.cssanimations=function(){return u("animationName")},M.csscolumns=function(){return u("columnCount")},M.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),i(b.backgroundImage,"gradient")},M.cssreflections=function(){return u("boxReflect")},M.csstransforms=function(){return!!u("transform")},M.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},M.csstransitions=function(){return u("transition")},M.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},M.generatedcontent=function(){var e;return F(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},M.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},M.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},M.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},M.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},M.webworkers=function(){return!!e.Worker},M.applicationcache=function(){return!!e.applicationCache},M.svg=function(){return!!t.createElementNS&&!!t.createElementNS(N.svg,"svg").createSVGRect},M.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==N.svg},M.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(w.call(t.createElementNS(N.svg,"animate")))},M.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(w.call(t.createElementNS(N.svg,"clipPath")))};for(var H in M)f(M,H)&&(d=H.toLowerCase(),p[d]=M[H](),$.push((p[d]?"":"no-")+d));return p.input||l(),p.addTest=function(e,t){if("object"==typeof e)for(var r in e)f(e,r)&&p.addTest(r,e[r]);else{if(e=e.toLowerCase(),p[e]!==n)return p;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),p[e]=t}return p},r(""),y=E=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=v[e[h]];return t||(t={},g++,e[h]=g,v[g]=t),t}function a(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),s=c.length;s>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=o(e);return!y.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||c(e,r),e}var u,l,d="3.7.0",f=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:a,createDocumentFragment:i};e.html5=y,s(t)}(this,t),p._version=m,p._prefixes=S,p._domPrefixes=T,p._cssomPrefixes=k,p.mq=z,p.hasEvent=A,p.testProp=function(e){return c([e])},p.testAllProps=u,p.testStyles=F,p.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+$.join(" "):""),p}(this,this.document);

/*! jQuery v1.11.2 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.2",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)
}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
//Animate CSS + WayPoints javaScript Plugin
//Example: $(".element").animated("zoomInUp");
//Author URL: http://webdesign-master.ru
(function($) {
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css("opacity", "0").addClass("animated").waypoint(function(dir) {
				if (dir === "down") {
					ths.addClass(inEffect).css("opacity", "1");
				};
			}, {
				offset: "90%"
			});

		});
	};
})(jQuery);
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&b<h+e?d=a:"right"===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),d===-1},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&a.namespace.indexOf("owl")!==-1?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&e*-1||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},
a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(a){var b,c,d,e,f,g,h="Close",i="BeforeClose",j="AfterClose",k="BeforeAppend",l="MarkupParse",m="Open",n="Change",o="mfp",p="."+o,q="mfp-ready",r="mfp-removing",s="mfp-prevent-close",t=function(){},u=!!window.jQuery,v=a(window),w=function(a,c){b.ev.on(o+a+p,c)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(c,d){b.ev.triggerHandler(o+c,d),b.st.callbacks&&(c=c.charAt(0).toLowerCase()+c.slice(1),b.st.callbacks[c]&&b.st.callbacks[c].apply(b,a.isArray(d)?d:[d]))},z=function(c){return c===g&&b.currTemplate.closeBtn||(b.currTemplate.closeBtn=a(b.st.closeMarkup.replace("%title%",b.st.tClose)),g=c),b.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(b=new t,b.init(),a.magnificPopup.instance=b)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(void 0!==a.transition)return!0;for(;b.length;)if(b.pop()+"Transition"in a)return!0;return!1};t.prototype={constructor:t,init:function(){var c=navigator.appVersion;b.isLowIE=b.isIE8=document.all&&!document.addEventListener,b.isAndroid=/android/gi.test(c),b.isIOS=/iphone|ipad|ipod/gi.test(c),b.supportsTransition=B(),b.probablyMobile=b.isAndroid||b.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),d=a(document),b.popupsCache={}},open:function(c){var e;if(c.isObj===!1){b.items=c.items.toArray(),b.index=0;var g,h=c.items;for(e=0;e<h.length;e++)if(g=h[e],g.parsed&&(g=g.el[0]),g===c.el[0]){b.index=e;break}}else b.items=a.isArray(c.items)?c.items:[c.items],b.index=c.index||0;if(b.isOpen)return void b.updateItemHTML();b.types=[],f="",c.mainEl&&c.mainEl.length?b.ev=c.mainEl.eq(0):b.ev=d,c.key?(b.popupsCache[c.key]||(b.popupsCache[c.key]={}),b.currTemplate=b.popupsCache[c.key]):b.currTemplate={},b.st=a.extend(!0,{},a.magnificPopup.defaults,c),b.fixedContentPos="auto"===b.st.fixedContentPos?!b.probablyMobile:b.st.fixedContentPos,b.st.modal&&(b.st.closeOnContentClick=!1,b.st.closeOnBgClick=!1,b.st.showCloseBtn=!1,b.st.enableEscapeKey=!1),b.bgOverlay||(b.bgOverlay=x("bg").on("click"+p,function(){b.close()}),b.wrap=x("wrap").attr("tabindex",-1).on("click"+p,function(a){b._checkIfClose(a.target)&&b.close()}),b.container=x("container",b.wrap)),b.contentContainer=x("content"),b.st.preloader&&(b.preloader=x("preloader",b.container,b.st.tLoading));var i=a.magnificPopup.modules;for(e=0;e<i.length;e++){var j=i[e];j=j.charAt(0).toUpperCase()+j.slice(1),b["init"+j].call(b)}y("BeforeOpen"),b.st.showCloseBtn&&(b.st.closeBtnInside?(w(l,function(a,b,c,d){c.close_replaceWith=z(d.type)}),f+=" mfp-close-btn-in"):b.wrap.append(z())),b.st.alignTop&&(f+=" mfp-align-top"),b.fixedContentPos?b.wrap.css({overflow:b.st.overflowY,overflowX:"hidden",overflowY:b.st.overflowY}):b.wrap.css({top:v.scrollTop(),position:"absolute"}),(b.st.fixedBgPos===!1||"auto"===b.st.fixedBgPos&&!b.fixedContentPos)&&b.bgOverlay.css({height:d.height(),position:"absolute"}),b.st.enableEscapeKey&&d.on("keyup"+p,function(a){27===a.keyCode&&b.close()}),v.on("resize"+p,function(){b.updateSize()}),b.st.closeOnContentClick||(f+=" mfp-auto-cursor"),f&&b.wrap.addClass(f);var k=b.wH=v.height(),n={};if(b.fixedContentPos&&b._hasScrollBar(k)){var o=b._getScrollbarSize();o&&(n.marginRight=o)}b.fixedContentPos&&(b.isIE7?a("body, html").css("overflow","hidden"):n.overflow="hidden");var r=b.st.mainClass;return b.isIE7&&(r+=" mfp-ie7"),r&&b._addClassToMFP(r),b.updateItemHTML(),y("BuildControls"),a("html").css(n),b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo||a(document.body)),b._lastFocusedEl=document.activeElement,setTimeout(function(){b.content?(b._addClassToMFP(q),b._setFocus()):b.bgOverlay.addClass(q),d.on("focusin"+p,b._onFocusIn)},16),b.isOpen=!0,b.updateSize(k),y(m),c},close:function(){b.isOpen&&(y(i),b.isOpen=!1,b.st.removalDelay&&!b.isLowIE&&b.supportsTransition?(b._addClassToMFP(r),setTimeout(function(){b._close()},b.st.removalDelay)):b._close())},_close:function(){y(h);var c=r+" "+q+" ";if(b.bgOverlay.detach(),b.wrap.detach(),b.container.empty(),b.st.mainClass&&(c+=b.st.mainClass+" "),b._removeClassFromMFP(c),b.fixedContentPos){var e={marginRight:""};b.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}d.off("keyup"+p+" focusin"+p),b.ev.off(p),b.wrap.attr("class","mfp-wrap").removeAttr("style"),b.bgOverlay.attr("class","mfp-bg"),b.container.attr("class","mfp-container"),!b.st.showCloseBtn||b.st.closeBtnInside&&b.currTemplate[b.currItem.type]!==!0||b.currTemplate.closeBtn&&b.currTemplate.closeBtn.detach(),b.st.autoFocusLast&&b._lastFocusedEl&&a(b._lastFocusedEl).focus(),b.currItem=null,b.content=null,b.currTemplate=null,b.prevHeight=0,y(j)},updateSize:function(a){if(b.isIOS){var c=document.documentElement.clientWidth/window.innerWidth,d=window.innerHeight*c;b.wrap.css("height",d),b.wH=d}else b.wH=a||v.height();b.fixedContentPos||b.wrap.css("height",b.wH),y("Resize")},updateItemHTML:function(){var c=b.items[b.index];b.contentContainer.detach(),b.content&&b.content.detach(),c.parsed||(c=b.parseEl(b.index));var d=c.type;if(y("BeforeChange",[b.currItem?b.currItem.type:"",d]),b.currItem=c,!b.currTemplate[d]){var f=b.st[d]?b.st[d].markup:!1;y("FirstMarkupParse",f),f?b.currTemplate[d]=a(f):b.currTemplate[d]=!0}e&&e!==c.type&&b.container.removeClass("mfp-"+e+"-holder");var g=b["get"+d.charAt(0).toUpperCase()+d.slice(1)](c,b.currTemplate[d]);b.appendContent(g,d),c.preloaded=!0,y(n,c),e=c.type,b.container.prepend(b.contentContainer),y("AfterChange")},appendContent:function(a,c){b.content=a,a?b.st.showCloseBtn&&b.st.closeBtnInside&&b.currTemplate[c]===!0?b.content.find(".mfp-close").length||b.content.append(z()):b.content=a:b.content="",y(k),b.container.addClass("mfp-"+c+"-holder"),b.contentContainer.append(b.content)},parseEl:function(c){var d,e=b.items[c];if(e.tagName?e={el:a(e)}:(d=e.type,e={data:e,src:e.src}),e.el){for(var f=b.types,g=0;g<f.length;g++)if(e.el.hasClass("mfp-"+f[g])){d=f[g];break}e.src=e.el.attr("data-mfp-src"),e.src||(e.src=e.el.attr("href"))}return e.type=d||b.st.type||"inline",e.index=c,e.parsed=!0,b.items[c]=e,y("ElementParse",e),b.items[c]},addGroup:function(a,c){var d=function(d){d.mfpEl=this,b._openClick(d,a,c)};c||(c={});var e="click.magnificPopup";c.mainEl=a,c.items?(c.isObj=!0,a.off(e).on(e,d)):(c.isObj=!1,c.delegate?a.off(e).on(e,c.delegate,d):(c.items=a,a.off(e).on(e,d)))},_openClick:function(c,d,e){var f=void 0!==e.midClick?e.midClick:a.magnificPopup.defaults.midClick;if(f||!(2===c.which||c.ctrlKey||c.metaKey||c.altKey||c.shiftKey)){var g=void 0!==e.disableOn?e.disableOn:a.magnificPopup.defaults.disableOn;if(g)if(a.isFunction(g)){if(!g.call(b))return!0}else if(v.width()<g)return!0;c.type&&(c.preventDefault(),b.isOpen&&c.stopPropagation()),e.el=a(c.mfpEl),e.delegate&&(e.items=d.find(e.delegate)),b.open(e)}},updateStatus:function(a,d){if(b.preloader){c!==a&&b.container.removeClass("mfp-s-"+c),d||"loading"!==a||(d=b.st.tLoading);var e={status:a,text:d};y("UpdateStatus",e),a=e.status,d=e.text,b.preloader.html(d),b.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),b.container.addClass("mfp-s-"+a),c=a}},_checkIfClose:function(c){if(!a(c).hasClass(s)){var d=b.st.closeOnContentClick,e=b.st.closeOnBgClick;if(d&&e)return!0;if(!b.content||a(c).hasClass("mfp-close")||b.preloader&&c===b.preloader[0])return!0;if(c===b.content[0]||a.contains(b.content[0],c)){if(d)return!0}else if(e&&a.contains(document,c))return!0;return!1}},_addClassToMFP:function(a){b.bgOverlay.addClass(a),b.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),b.wrap.removeClass(a)},_hasScrollBar:function(a){return(b.isIE7?d.height():document.body.scrollHeight)>(a||v.height())},_setFocus:function(){(b.st.focus?b.content.find(b.st.focus).eq(0):b.wrap).focus()},_onFocusIn:function(c){return c.target===b.wrap[0]||a.contains(b.wrap[0],c.target)?void 0:(b._setFocus(),!1)},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(l,[b,c,d]),a.each(c,function(c,d){if(void 0===d||d===!1)return!0;if(e=c.split("_"),e.length>1){var f=b.find(p+"-"+e[0]);if(f.length>0){var g=e[1];"replaceWith"===g?f[0]!==d[0]&&f.replaceWith(d):"img"===g?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(p+"-"+c).html(d)})},_getScrollbarSize:function(){if(void 0===b.scrollbarSize){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),b.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return b.scrollbarSize}},a.magnificPopup={instance:null,proto:t.prototype,modules:[],open:function(b,c){return A(),b=b?a.extend(!0,{},b):{},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(c){A();var d=a(this);if("string"==typeof c)if("open"===c){var e,f=u?d.data("magnificPopup"):d[0].magnificPopup,g=parseInt(arguments[1],10)||0;f.items?e=f.items[g]:(e=d,f.delegate&&(e=e.find(f.delegate)),e=e.eq(g)),b._openClick({mfpEl:e},d,f)}else b.isOpen&&b[c].apply(b,Array.prototype.slice.call(arguments,1));else c=a.extend(!0,{},c),u?d.data("magnificPopup",c):d[0].magnificPopup=c,b.addGroup(d,c);return d};var C,D,E,F="inline",G=function(){E&&(D.after(E.addClass(C)).detach(),E=null)};a.magnificPopup.registerModule(F,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){b.types.push(F),w(h+"."+F,function(){G()})},getInline:function(c,d){if(G(),c.src){var e=b.st.inline,f=a(c.src);if(f.length){var g=f[0].parentNode;g&&g.tagName&&(D||(C=e.hiddenClass,D=x(C),C="mfp-"+C),E=f.after(D).detach().removeClass(C)),b.updateStatus("ready")}else b.updateStatus("error",e.tNotFound),f=a("<div>");return c.inlineElement=f,f}return b.updateStatus("ready"),b._parseMarkup(d,{},c),d}}});var H,I="ajax",J=function(){H&&a(document.body).removeClass(H)},K=function(){J(),b.req&&b.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){b.types.push(I),H=b.st.ajax.cursor,w(h+"."+I,K),w("BeforeChange."+I,K)},getAjax:function(c){H&&a(document.body).addClass(H),b.updateStatus("loading");var d=a.extend({url:c.src,success:function(d,e,f){var g={data:d,xhr:f};y("ParseAjax",g),b.appendContent(a(g.data),I),c.finished=!0,J(),b._setFocus(),setTimeout(function(){b.wrap.addClass(q)},16),b.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),c.finished=c.loadError=!0,b.updateStatus("error",b.st.ajax.tError.replace("%url%",c.src))}},b.st.ajax.settings);return b.req=a.ajax(d),""}}});var L,M=function(c){if(c.data&&void 0!==c.data.title)return c.data.title;var d=b.st.image.titleSrc;if(d){if(a.isFunction(d))return d.call(b,c);if(c.el)return c.el.attr(d)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=b.st.image,d=".image";b.types.push("image"),w(m+d,function(){"image"===b.currItem.type&&c.cursor&&a(document.body).addClass(c.cursor)}),w(h+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),v.off("resize"+p)}),w("Resize"+d,b.resizeImage),b.isLowIE&&w("AfterChange",b.resizeImage)},resizeImage:function(){var a=b.currItem;if(a&&a.img&&b.st.image.verticalFit){var c=0;b.isLowIE&&(c=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",b.wH-c)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(b.content&&b.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var c=0,d=a.img[0],e=function(f){L&&clearInterval(L),L=setInterval(function(){return d.naturalWidth>0?void b._onImageHasSize(a):(c>200&&clearInterval(L),c++,void(3===c?e(10):40===c?e(50):100===c&&e(500)))},f)};e(1)},getImage:function(c,d){var e=0,f=function(){c&&(c.img[0].complete?(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("ready")),c.hasSize=!0,c.loaded=!0,y("ImageLoadComplete")):(e++,200>e?setTimeout(f,100):g()))},g=function(){c&&(c.img.off(".mfploader"),c===b.currItem&&(b._onImageHasSize(c),b.updateStatus("error",h.tError.replace("%url%",c.src))),c.hasSize=!0,c.loaded=!0,c.loadError=!0)},h=b.st.image,i=d.find(".mfp-img");if(i.length){var j=document.createElement("img");j.className="mfp-img",c.el&&c.el.find("img").length&&(j.alt=c.el.find("img").attr("alt")),c.img=a(j).on("load.mfploader",f).on("error.mfploader",g),j.src=c.src,i.is("img")&&(c.img=c.img.clone()),j=c.img[0],j.naturalWidth>0?c.hasSize=!0:j.width||(c.hasSize=!1)}return b._parseMarkup(d,{title:M(c),img_replaceWith:c.img},c),b.resizeImage(),c.hasSize?(L&&clearInterval(L),c.loadError?(d.addClass("mfp-loading"),b.updateStatus("error",h.tError.replace("%url%",c.src))):(d.removeClass("mfp-loading"),b.updateStatus("ready")),d):(b.updateStatus("loading"),c.loading=!0,c.hasSize||(c.imgHidden=!0,d.addClass("mfp-loading"),b.findImageSize(c)),d)}}});var N,O=function(){return void 0===N&&(N=void 0!==document.createElement("p").style.MozTransform),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a,c=b.st.zoom,d=".zoom";if(c.enabled&&b.supportsTransition){var e,f,g=c.duration,j=function(a){var b=a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+c.duration/1e3+"s "+c.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,b.css(e),b},k=function(){b.content.css("visibility","visible")};w("BuildControls"+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.content.css("visibility","hidden"),a=b._getItemToZoom(),!a)return void k();f=j(a),f.css(b._getOffset()),b.wrap.append(f),e=setTimeout(function(){f.css(b._getOffset(!0)),e=setTimeout(function(){k(),setTimeout(function(){f.remove(),a=f=null,y("ZoomAnimationEnded")},16)},g)},16)}}),w(i+d,function(){if(b._allowZoom()){if(clearTimeout(e),b.st.removalDelay=g,!a){if(a=b._getItemToZoom(),!a)return;f=j(a)}f.css(b._getOffset(!0)),b.wrap.append(f),b.content.css("visibility","hidden"),setTimeout(function(){f.css(b._getOffset())},16)}}),w(h+d,function(){b._allowZoom()&&(k(),f&&f.remove(),a=null)})}},_allowZoom:function(){return"image"===b.currItem.type},_getItemToZoom:function(){return b.currItem.hasSize?b.currItem.img:!1},_getOffset:function(c){var d;d=c?b.currItem.img:b.st.zoom.opener(b.currItem.el||b.currItem);var e=d.offset(),f=parseInt(d.css("padding-top"),10),g=parseInt(d.css("padding-bottom"),10);e.top-=a(window).scrollTop()-f;var h={width:d.width(),height:(u?d.innerHeight():d[0].offsetHeight)-g-f};return O()?h["-moz-transform"]=h.transform="translate("+e.left+"px,"+e.top+"px)":(h.left=e.left,h.top=e.top),h}}});var P="iframe",Q="//about:blank",R=function(a){if(b.currTemplate[P]){var c=b.currTemplate[P].find("iframe");c.length&&(a||(c[0].src=Q),b.isIE8&&c.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){b.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(h+"."+P,function(){R()})},getIframe:function(c,d){var e=c.src,f=b.st.iframe;a.each(f.patterns,function(){return e.indexOf(this.index)>-1?(this.id&&(e="string"==typeof this.id?e.substr(e.lastIndexOf(this.id)+this.id.length,e.length):this.id.call(this,e)),e=this.src.replace("%id%",e),!1):void 0});var g={};return f.srcAction&&(g[f.srcAction]=e),b._parseMarkup(d,g,c),b.updateStatus("ready"),d}}});var S=function(a){var c=b.items.length;return a>c-1?a-c:0>a?c+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=b.st.gallery,e=".mfp-gallery";return b.direction=!0,c&&c.enabled?(f+=" mfp-gallery",w(m+e,function(){c.navigateByImgClick&&b.wrap.on("click"+e,".mfp-img",function(){return b.items.length>1?(b.next(),!1):void 0}),d.on("keydown"+e,function(a){37===a.keyCode?b.prev():39===a.keyCode&&b.next()})}),w("UpdateStatus"+e,function(a,c){c.text&&(c.text=T(c.text,b.currItem.index,b.items.length))}),w(l+e,function(a,d,e,f){var g=b.items.length;e.counter=g>1?T(c.tCounter,f.index,g):""}),w("BuildControls"+e,function(){if(b.items.length>1&&c.arrows&&!b.arrowLeft){var d=c.arrowMarkup,e=b.arrowLeft=a(d.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(s),f=b.arrowRight=a(d.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(s);e.click(function(){b.prev()}),f.click(function(){b.next()}),b.container.append(e.add(f))}}),w(n+e,function(){b._preloadTimeout&&clearTimeout(b._preloadTimeout),b._preloadTimeout=setTimeout(function(){b.preloadNearbyImages(),b._preloadTimeout=null},16)}),void w(h+e,function(){d.off(e),b.wrap.off("click"+e),b.arrowRight=b.arrowLeft=null})):!1},next:function(){b.direction=!0,b.index=S(b.index+1),b.updateItemHTML()},prev:function(){b.direction=!1,b.index=S(b.index-1),b.updateItemHTML()},goTo:function(a){b.direction=a>=b.index,b.index=a,b.updateItemHTML()},preloadNearbyImages:function(){var a,c=b.st.gallery.preload,d=Math.min(c[0],b.items.length),e=Math.min(c[1],b.items.length);for(a=1;a<=(b.direction?e:d);a++)b._preloadItem(b.index+a);for(a=1;a<=(b.direction?d:e);a++)b._preloadItem(b.index-a)},_preloadItem:function(c){if(c=S(c),!b.items[c].preloaded){var d=b.items[c];d.parsed||(d=b.parseEl(c)),y("LazyLoad",d),"image"===d.type&&(d.img=a('<img class="mfp-img" />').on("load.mfploader",function(){d.hasSize=!0}).on("error.mfploader",function(){d.hasSize=!0,d.loadError=!0,y("LazyLoadError",d)}).attr("src",d.src)),d.preloaded=!0}}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=b.st.retina,c=a.ratio;c=isNaN(c)?c():c,c>1&&(w("ImageHasSize."+U,function(a,b){b.img.css({"max-width":b.img[0].naturalWidth/c,width:"100%"})}),w("ElementParse."+U,function(b,d){d.src=a.replaceSrc(d,c)}))}}}}),A()});
/* nanogallery2 - v1.4.0 - 2017-06-11 - http://nanogallery2.nanostudio.org */
/**!
 * @preserve nanogallery2 - javascript image gallery
 * Homepage: http://nanogallery2.nanostudio.org
 * Sources:  https://github.com/nanostudio-org/nanogallery2
 *
 * License:  GPLv3 and commercial licence
 * 
 * Requirements:
 *  - jQuery (http://www.jquery.com) - version >= 1.7.1
 *
 * Components:
 *  - shifty (https://github.com/jeremyckahn/shifty) - is embeded
 *  - TinyColor (https://github.com/bgrins/TinyColor) - is embedded
 *  - imagesloaded (https://github.com/desandro/imagesloaded) - is embebed
 *  - hammer.js (http://hammerjs.github.io/) - is embeded
 *  - screenfull.js (https://github.com/sindresorhus/screenfull.js) - is embeded
 *  - webfont generated with http://fontello.com - mainly based on Font Awesome Copyright (C) 2012 by Dave Gandy (http://fontawesome.io/)
 *  - ICO online converter: https://iconverticons.com/online/
 */

/*


*/ 
 

// ###########################################
// ##### nanogallery2 as a JQUERY PLUGIN #####
// ###########################################
;(function ($) {
  "use strict";

  $.nanogallery2 = function (elt, options) {
  
    // To avoid scope issues, use '_this' instead of 'this'
    // to reference this class from internal events and functions.
    var _this = this;

    // Access to jQuery and DOM versions of element
    _this.$e  = jQuery(elt);
    _this.e   = elt;

    // Add a reverse reference to the DOM object
    _this.$e.data('nanogallery2data', _this);

    _this.init = function () {
  
      // define these global objects only once per HTML page
      if (typeof window.NGY2Item === 'undefined') {
  
        window.NGY2Tools = (function () {

          function NGY2Tools() {
            var nextId = 1;                   // private static --> all instances
          }

          // check album name - albumList/blackList/whiteList
          NGY2Tools.FilterAlbumName = function( title, ID ) {
          var s=title.toUpperCase();
            if( this.albumList.length > 0 ) {
              for( var j=0; j < this.albumList.length; j++) {
                if( s === this.albumList[j].toUpperCase() || ID === this.albumList[j] ) {
                  return true;
                }
              }
            }
            else {
              var found=false;
              if( this.whiteList !== null ) {
                //whiteList : authorize only album cointaining one of the specified keyword in the title
                for( var j=0; j<this.whiteList.length; j++) {
                  if( s.indexOf(this.whiteList[j]) !== -1 ) {
                    found=true;
                  }
                }
                if( !found ) { return false; }
              }


              if( this.blackList !== null ) {
                //blackList : ignore album cointaining one of the specified keyword in the title
                for( var j=0; j<this.blackList.length; j++) {
                  if( s.indexOf(this.blackList[j]) !== -1 ) { 
                    return false;
                  }
                }
              }
              
              return true;
            }
          };


          /** @function nanoAlert */
          /* Display an alert message in a specific element */
          NGY2Tools.NanoAlert = function(context, msg, verbose) {
            NGY2Tools.NanoConsoleLog.call(context, msg);
            if( context.$E.conConsole != null ) {
              context.$E.conConsole.css({visibility:'visible', minHeight:'100px'});
              if( verbose == false ) {
                context.$E.conConsole.append('<p>'+ msg + '</p>');
              }
              else {
                context.$E.conConsole.append('<p>nanogallery2: '+msg+ ' ['+context.baseEltID+']</p>');
              }
              //alert('nanoGALLERY: ' + msg);
            }
          };
          
  
          /** @function NanoConsoleLog */
          /* write message to the browser console */
          NGY2Tools.NanoConsoleLog = function(context, msg) {
            if (window.console) { console.log('nanogallery2: ' + msg + ' ['+context.baseEltID+']'); }
          };
          

          /** @function PreloaderDisplay() */
          /* Display/hide preloader */
          NGY2Tools.PreloaderDisplay = function(display) {
            if( display === true ) {
              this.$E.conLoadingB.removeClass('nanoGalleryLBarOff').addClass('nanoGalleryLBar');
            }
            else {
              this.$E.conLoadingB.removeClass('nanoGalleryLBar').addClass('nanoGalleryLBarOff');
            }
          };

          //+ Jonas Raoni Soares Silva
          //@ http://jsfromhell.com/array/shuffle [v1.0]
          NGY2Tools.AreaShuffle = function (o) {
            for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
          };
          
          /** @function GetImageTitleFromURL() */
          /* retrieve filemane */
          NGY2Tools.GetImageTitleFromURL = function( imageURL ) {
            if( this.O.thumbnailLabel.get('title') == '%filename' ) {
              return (imageURL.split('/').pop()).replace('_',' ');
            }
            
            if( this.O.thumbnailLabel.get('title') == '%filenameNoExt' ) {
              var s=imageURL.split('/').pop();
              return (s.split('.').shift()).replace('_',' ');
            }
            // return imageURL;
            return '';
          };
          

          /** @function AlbumPostProcess() */
          /* post process one album based on plugin general parameters  --> sorting/maxItems*/
          NGY2Tools.AlbumPostProcess = function(albumID) {

            // this function can probably be optimized....
          
            var sortOrder=this.gallerySorting[this.GOM.curNavLevel];
            var maxItems=this.galleryMaxItems[this.GOM.curNavLevel];
          
            if( sortOrder != '' || maxItems > 0 ) {
            
              // copy album's items to a new array
              var currentAlbum=this.I.filter( function( obj ) {
                return( obj.albumID == albumID && obj.kind != 'albumUp' );
              });
        
              // sorting options
              switch( sortOrder ) {
                case 'RANDOM':
                  currentAlbum = NGY2Tools.AreaShuffle(currentAlbum);
                  break;
                case 'REVERSED':
                  currentAlbum = currentAlbum.reverse();
                  break;
                case 'TITLEASC':
                  currentAlbum.sort(function (a, b) {
                    return( (a.title.toUpperCase() < b.title.toUpperCase()) ? -1 : ((a.title.toUpperCase() > b.title.toUpperCase()) ? 1 : 0) );
                  });
                  break;
                case 'TITLEDESC':
                  currentAlbum.sort(function (a, b) {
                    return( (a.title.toUpperCase() > b.title.toUpperCase()) ? -1 : ((a.title.toUpperCase() < b.title.toUpperCase()) ? 1 : 0) );
                  });
                  break;
              }     

              // max Items
              if( maxItems > 0 && currentAlbum.length > maxItems ) {
                currentAlbum.splice(maxItems-1,currentAlbum.length-maxItems );
              }
              
              // remove the albums's items from the global items array
              this.I.removeIf( function( obj ) {
                return( obj.albumID == albumID && obj.kind != 'albumUp' );
              });
              
              // add the sorted items back to the album
              this.I.push.apply(this.I, currentAlbum);

            }
          };
          
          
          return NGY2Tools;
        })(); 

        // ====================
        // ===== NGY2Item =====
        // ====================
        window.NGY2Item = (function() {
          var nextId = 1;                   // private static --> all instances

          // constructor
          function NGY2Item( itemID ) {
          //window.NGY2Item = function( itemID ) {
            var ID = 0;                     // private

            // public (this instance only)
            if( itemID === undefined || itemID === null ) {
              ID = nextId++;
            }
            else {
              ID = itemID;
            }
            this.GetID = function () { return ID; };
            
            // public
            this.kind =                 '';       // 'image', 'album' or 'albumUp'
            this.G =                    null;     // pointer to global instance
            this.title =                '';       // image title
            this.description =          '';       // image description
            this.albumID =              0;        // ID of the parent album
            this.src =                  '';       // full sized image URL
            this.width =                0;        // image width
            this.height =               0;        // image height
            this.destinationURL =       '';       // thumbnail destination URL --> open URL instead of displaying image
            this.downloadURL =          '';       // thumbnail download URL --> specify the image for download button
            this.author =               '';       // image/album author
            this.left=                  0;        // store position to animate from old to new
            this.top=                   0;
            this.width=                 0;        // store size to avoid setting width/height if not required
            this.height=                0;
            this.resizedContentWidth=   0;        // store size of content (image) to avoid setting width/height if not required
            this.resizedContentHeight=  0;
            this.thumbs = {                       // URLs and sizes for user defined
              url:    { l1: { xs: '', sm:'', me: '', la: '', xl: '' }, lN: { xs: '', sm: '', me: '', la:'', xl: '' } },
              width:  { l1: { xs: 0,  sm: 0, me: 0,  la: 0 , xl: 0  }, lN: { xs: 0 , sm: 0,  me: 0,  la: 0, xl: 0  } },
              height: { l1: { xs: 0,  sm: 0, me: 0,  la: 0 , xl: 0  }, lN: { xs: 0,  sm: 0,  me: 0,  la: 0, xl: 0  } }
            };
            this.thumbnailImgRevealed   = false;  // thumbnail image already revealed
            this.imageDominantColors    = null;   // base64 GIF
            this.imageDominantColor     = null;   // HEX RGB
            this.featured =             false;    // featured element
            this.flickrThumbSizes =     {};       // store URLs for all available thumbnail sizes (flickr)
            this.picasaThumbs =         null;     // store URLs and sizes
            this.hovered =              false;    // is the thumbnail currently hovered?
            this.hoverInitDone =        false;
            this.contentIsLoaded =      false;    // album: are items already loaded?
            this.contentLength =        0;        // album: number of items (real number of items in memory)
            this.numberItems =          0;        // album: number of items (value returned by data source)
            this.imageNumber =          0;        // image number in the album
            this.imageCounter =         0;        // number of images in an album
            this.eltTransform =         [];       // store the CSS transformations
            this.eltFilter =            [];       // store the CSS filters
            this.eltEffect =            [];       // store data about hover effects animations
            this.authkey =              '';       // for Google Photos private (hidden) albums
            this.paginationLastPage =   0;        // for albums
            this.paginationLastWidth =  0;        // for albums
            this.customData =           {};
            this.selected =             false;
            this.imageWidth =           0;        // image natural (real) width
            this.imageHeight =          0;        // image natural (real) height
            this.$elt =                 null;     // pointer to the corresponding DOM element
            this.$Elts =                [];       // cached pointers to the thumbnail content -> to avoid jQuery().find()
            this.tags =                 [];       // list of tags of the current item
            this.albumTagList =         [];       // list of all the tags of the items contained in the current album
            this.albumTagListSel =      [];       // list of currently selected tags (only for albums)
            this.exif= { exposure: '', flash: '', focallength: '', fstop: '', iso: '', model: '', time: '', location: ''};
          }

          // public static
          
          NGY2Item.Get = function( instance, ID ) {
            var l=instance.I.length;
            for( var i=0; i<l; i++ ) {
              if( instance.I[i].GetID() == ID ) {
                return instance.I[i];
              }
            }
            return null;
          };
            
          NGY2Item.GetIdx = function( instance, ID ) {
            var l=instance.I.length;
            for( var i=0; i<l; i++ ) {
              if( instance.I[i].GetID() == ID ) {
                return i;
              }
            }
            return -1;
          };
          
          // create new item (image, album or albumUp)
          NGY2Item.New = function( instance, title, description, ID, albumID, kind, tags ) {
            var album=NGY2Item.Get( instance, albumID );
// console.log('---');
// console.dir(album);            
// console.dir(instance.I);
            
            if( albumID != -1 && albumID != 0 && title !='image gallery by nanogallery2 [build]'  ) {
              if( instance.O.thumbnailLevelUp && album.getContentLength(false) == 0) {
                // add navigation thumbnail (album up)
                var item=new NGY2Item('0');
                instance.I.push(item);
                album.contentLength+=1;
                item.title='UP';
                item.albumID=albumID;
                item.kind='albumUp';
                item.G=instance;

                jQuery.extend( true, item.thumbs.width, instance.tn.defaultSize.width);
                jQuery.extend( true, item.thumbs.height, instance.tn.defaultSize.height);
              }
            }
            
            var item=NGY2Item.Get(instance, ID);
            if( item === null ){
              // create a new item (otherwise, just update the existing one)
              item=new NGY2Item(ID);
              instance.I.push(item);
              if( albumID != -1 && title !='image gallery by nanogallery2 [build]' ) {
                album.contentLength+=1;
              }
            }
            item.G=instance;

            item.albumID=albumID;
            item.kind=kind;
            if( kind == 'image' ) {
              album.imageCounter+=1;
              item.imageNumber=album.imageCounter;
            }

            // check keyword to find features images/albums
            var kw=instance.O.thumbnailFeaturedKeyword;
            if( kw != '' ) {
              // check if item featured based on a keyword in the title or in the description
              kw=kw.toUpperCase();
              var p=title.toUpperCase().indexOf(kw);
              if( p > -1) {
                item.featured=true;
                // remove keyword case unsensitive
                title=title.substring(0, p) + title.substring(p+kw.length, title.length);
              }
              p=description.toUpperCase().indexOf(kw);
              if( p > -1) {
                item.featured=true;
                // remove keyword case unsensitive
                description=description.substring(0, p) + description.substring(p+kw.length, description.length);
              }
            }
            
            // TAGS 
            // if( instance.galleryFilterTags.Get() != false ) {
              // if( instance.galleryFilterTags.Get() == true ) {
                // if( tags != '' && tags != undefined ) {
                  // use set tags
                  // item.setTags(tags.split(' '));
                // }
              // }
              // else {
                // extract tags starting with # (in title)
              if( typeof  instance.galleryFilterTags.Get() == 'string' ) {
                switch( instance.galleryFilterTags.Get().toUpperCase() ) {
                  case 'TITLE':
                    var re = /(?:^|\W)#(\w+)(?!\w)/g, match, matches = [];
                    var tags="";
                    while (match = re.exec(title)) {
                      matches.push(match[1].replace(/^\s*|\s*$/, ''));   //trim trailing/leading whitespace
                    }
                    item.setTags(matches);  //tags;
                    title=title.split('#').join('');   //replaceall
                    break;
                  case 'DESCRIPTION':
                    var re = /(?:^|\W)#(\w+)(?!\w)/g, match, matches = [];
                    var tags="";
                    while (match = re.exec(description)) {
                      matches.push(match[1].replace(/^\s*|\s*$/, ''));   //trim trailing/leading whitespace
                    }
                    item.setTags(matches);  //tags;
                    description=description.split('#').join('');   //replaceall
                    break;
                }
              }
                else {
                  if( tags != '' && tags != undefined ) {
                    // use set tags
                    item.setTags(tags.split(' '));
                  }
                }
              // }
            // }
            
            // set (maybe modified) fields title and description
            item.title=escapeHtml(instance, title);
            item.description=escapeHtml(instance, description);
            return item;
          };
          
          // function to avoid XSS issue - Cross Site Scripting
          // original: https://github.com/janl/mustache.js/blob/master/mustache.js#L55
          var entityMap = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;', '`': '&#x60;', '=': '&#x3D;' };
          function escapeHtml (instance, string) {
            if( instance.O.allowHTMLinData == true ) {
              return string;
            }
            else {
              return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
                return entityMap[s];
              });
            }
          }
          
          
          NGY2Item.get_nextId = function () {
            return nextId;
          };

          //=== public (shared across instances)

          //--- cached sub elements
          NGY2Item.prototype.$getElt = function( elt, forceRefresh ) {
            if( this.$elt == null ) { return null; }
            if( this.$Elts[elt] !== undefined && !forceRefresh == true ) {
              return this.$Elts[elt];
            }
            else {
              if( elt == '.nGY2GThumbnail' ) {
                this.$Elts[elt]=this.$elt;
              }
              else {
                this.$Elts[elt]=this.$elt.find(elt);
              }
              return this.$Elts[elt];
            }
          };

          //--- returns the album containing the item
          NGY2Item.prototype.album = function() {
            return this.G.I[NGY2Item.GetIdx(this.G, this.albumID)];
          };

          //--- set one image (url and size)
          NGY2Item.prototype.imageSet = function( src, w, h ) {
            this.src = src;
            this.width = w;
            this.height = h;
          };
          
          //--- set one thumbnail (url and size) - screenSize and level are optionnal
          NGY2Item.prototype.thumbSet = function( src, w, h, screenSize, level ) {
            var lst=['xs','sm','me','la','xl'];
            if( typeof screenSize === 'undefined' || screenSize == '' || screenSize == null ) {
              for( var i=0; i< lst.length; i++ ) {
                if( typeof level === 'undefined' || level == '' ) {
                  this.thumbs.url.l1[lst[i]]=src;
                  this.thumbs.height.l1[lst[i]]=h;
                  this.thumbs.width.l1[lst[i]]=w;
                  this.thumbs.url.lN[lst[i]]=src;
                  this.thumbs.height.lN[lst[i]]=h;
                  this.thumbs.width.lN[lst[i]]=w;
                }
                else {
                  this.thumbs.url[level][lst[i]]=src;
                  this.thumbs.height[level][lst[i]]=h;
                  this.thumbs.width[level][lst[i]]=w;
                }
              }
            }
            else {
              if( typeof level === 'undefined' || level == '' || level == null ) {
                this.thumbs.url.l1[screenSize]=src;
                this.thumbs.height.l1[screenSize]=h;
                this.thumbs.width.l1[screenSize]=w;
                this.thumbs.url.lN[screenSize]=src;
                this.thumbs.height.lN[screenSize]=h;
                this.thumbs.width.lN[screenSize]=w;
              }
              else {
                this.thumbs.url[level][screenSize]=src;
                this.thumbs.height[level][screenSize]=h;
                this.thumbs.width[level][screenSize]=w;
              }
            }
          
            var lst=['xs','sm','me','la','xl'];
            for( var i=0; i< lst.length; i++ ) {
              this.thumbs.height.l1[lst[i]]=h;
            }
            for( var i=0; i< lst.length; i++ ) {
              if( this.G.tn.settings.height.lN[lst[i]] == this.G.tn.settings.getH() && this.G.tn.settings.width.l1[lst[i]] == this.G.tn.settings.getW() ) {
                this.thumbs.height.lN[lst[i]]=h;
              }
            }
          };

          //--- set thumbnail image real height for current level/resolution, and for all others level/resolutions having the same settings
          NGY2Item.prototype.thumbSetImgHeight = function( h ) {              
            var lst=['xs','sm','me','la','xl'];
            for( var i=0; i< lst.length; i++ ) {
              if( this.G.tn.settings.height.l1[lst[i]] == this.G.tn.settings.getH() && this.G.tn.settings.width.l1[lst[i]] == this.G.tn.settings.getW() ) {
                this.thumbs.height.l1[lst[i]]=h;
              }
            }
            for( var i=0; i< lst.length; i++ ) {
              if( this.G.tn.settings.height.lN[lst[i]] == this.G.tn.settings.getH() && this.G.tn.settings.width.l1[lst[i]] == this.G.tn.settings.getW() ) {
                this.thumbs.height.lN[lst[i]]=h;
              }
            }
          };

          //--- set thumbnail image real width for current level/resolution, and for all others level/resolutions having the same settings
          NGY2Item.prototype.thumbSetImgWidth = function( w ) {              
            var lst=['xs','sm','me','la','xl'];
            for( var i=0; i< lst.length; i++ ) {
              if( this.G.tn.settings.height.l1[lst[i]] == this.G.tn.settings.getH() && this.G.tn.settings.width.l1[lst[i]] == this.G.tn.settings.getW() ) {
                this.thumbs.width.l1[lst[i]]=w;
              }
            }
            for( var i=0; i< lst.length; i++ ) {
              if( this.G.tn.settings.height.lN[lst[i]] == this.G.tn.settings.getH() && this.G.tn.settings.width.l1[lst[i]] == this.G.tn.settings.getW() ) {
                this.thumbs.width.lN[lst[i]]=w;
              }
            }
          };
        
          //--- Returns Thumbnail image (depending of the screen resolution)
          NGY2Item.prototype.thumbImg = function () {   
            var tnImg = { src:'', width:0, height:0 };

            if( this.title == 'image gallery by nanogallery2 [build]' ) {
              tnImg.src=this.G.emptyGif;
              tnImg.url=this.G.emptyGif;
              return tnImg;
            }
            tnImg.src=this.thumbs.url[this.G.GOM.curNavLevel][this.G.GOM.curWidth];
            tnImg.width=this.thumbs.width[this.G.GOM.curNavLevel][this.G.GOM.curWidth];
            tnImg.height=this.thumbs.height[this.G.GOM.curNavLevel][this.G.GOM.curWidth];
            return tnImg;
          };
          
          //--- Set tags to items and add these tags to the album
          NGY2Item.prototype.setTags = function( tags ) {              
          if( tags.length > 0 ) {
              this.tags=tags;
              var lstTags=this.album().albumTagList;
              for( var i=0; i<tags.length; i++ ) {
                var tfound=false;
                for( var j=0; j<lstTags.length; j++ ) {
                  if( tags[i].toUpperCase() == lstTags[j].toUpperCase() ) {
                    tfound=true;
                  }
                }
                if( tfound == false) {
                  this.album().albumTagList.push(tags[i])
                  this.album().albumTagListSel.push(tags[i])
                }
              }
            }
          };
          
          //--- check if 1 of current item's tags is selected (tag filter)
          NGY2Item.prototype.checkTagFilter = function() {
            if( this.G.galleryFilterTags.Get() != false && this.album().albumTagList.length > 0 ) {
              if( this.G.O.thumbnailLevelUp && this.kind=='albumUp' ) {
                return true;
              }
              var found=false;
              var lstTags=this.album().albumTagListSel;
              for( var i=0; i<this.tags.length; i++ ) {
                for( var j=0; j<lstTags.length; j++ ) {
                  if( this.tags[i].toUpperCase() == lstTags[j].toUpperCase() ) {
                    found=true;
                    break;
                  }
                }
              }
              return found;
            }
            else
              return true;
          };
          
          //--- check if 1 of current item's tags is found using API search
          NGY2Item.prototype.isSearchTagFound = function() {
            if( this.G.GOM.albumSearchTags == '' ) { return true; }
            if( this.G.O.thumbnailLevelUp && this.kind=='albumUp' ) { return true; }

            //var lstTags=this.album().albumTagListSel;
            for( var i=0; i<this.tags.length; i++ ) {
              if( this.tags[i].toUpperCase().indexOf( this.G.GOM.albumSearchTags ) >= 0 ) {
                return true;
              }
            }
            return false;
          };
          
          //--- check if current item can be displayed
          NGY2Item.prototype.isToDisplay = function( albumID ) {
            return this.albumID == albumID && this.checkTagFilter() && this.isSearchFound() && this.isSearchTagFound();
          };
          
          
          
          //--- returns the number of items of the current album
          //--- count using tags filter
          NGY2Item.prototype.getContentLength = function( filterTags ) {
            if( filterTags == false || this.albumTagList.length == 0 || this.G.galleryFilterTags.Get() == false ) {
              return this.contentLength;
            }
            else {
              var l=this.G.I.length;
              var cnt=0;
              var albumID=this.GetID();
              for( var idx=0; idx<l; idx++ ) {
                var item=this.G.I[idx];
                if( item.isToDisplay(albumID) ) {
                  cnt++;
                }
              }
              return cnt;
            }
          };
          
          NGY2Item.prototype.isSearchFound = function() {
            if( this.G.GOM.albumSearch != '' ) {
              if( this.title.toUpperCase().indexOf( this.G.GOM.albumSearch ) == -1 ) {
                return false;
              }
            }
            return true;
          }
          
          
          //--- for future use...
          NGY2Item.prototype.responsiveURL = function () {
            var url = '';
            switch(this.G.O.kind) {
              case '':
                url = this.src;
                break;
              case 'flickr':
                url = this.src;
                break;
              case 'picasa':
              case 'google':
              case 'google2':
              default:
                url = this.src;
                break;
            }
            return url;
          };
          
          
          //--- Reveal the thumbnail image with animation on opacity
          NGY2Item.prototype.ThumbnailImageReveal = function () {

            if( this.thumbnailImgRevealed == false ) {
              this.thumbnailImgRevealed=true;
              var tweenable = new NGTweenable();
              tweenable.tween({
                from:         { opacity: 0 },
                to:           { opacity: 1 },
                attachment:   { item: this },
                delay:        0,
                duration:     600,
                easing:       'easeOutQuart',
                step:         function (state, att) {
                  if( att.item.$getElt('.nGY2TnImg') != null ) {
                    att.item.$getElt('.nGY2TnImg').css('opacity', state.opacity);
                  }
                }
              });
            }
          };
          
          
          // In case of thumbnails with stacks - apply a percent to a value which include a unit
          function ValueApplyPercent( str, percent ) {
            str=String(str);
            if( str === '0' || percent == 1 ) { return str; }
            var n=Number(str.replace(/[a-zA-Z]/g, ''));
            var ar= str.match(/([^\-0-9\.]+)/g);
            var a='';
            if( ar != null && ar.length > 0 ) {
              a=ar.join();
            }
             
            if( isNaN(n) || n == 0 ) {
              return str;
            }

            n=n*percent;
            return n+a;
          } 
          
          //--- 2D/3D css transform - apply the cached value to element
          NGY2Item.prototype.CSSTransformApply = function ( eltClass ) {
            var obj=this.eltTransform[eltClass];

            if( eltClass == '.nGY2GThumbnail' ) {
              // thumbnail
              var nbStacks=obj.$elt.length-1;
              var pTranslateX=1;
              var pTranslateY=1;
              var pTranslateZ=1;
              var pRotateX=1;
              var pRotateY=1;
              var pRotateZ=1;
              var pScale=1;
              for( var n=nbStacks; n>=0; n-- ) {
                // units must be given with
                var v = 'translateX('+ValueApplyPercent(obj.translateX,pTranslateX)+') translateY('+ValueApplyPercent(obj.translateY,pTranslateY)+') translateZ('+ValueApplyPercent(obj.translateZ,pTranslateZ)+') scale('+ValueApplyPercent(obj.scale,pScale)+')';
                if( !(this.G.IE <= 9) && !this.G.isGingerbread ) {
                  v += ' rotateX('+ValueApplyPercent(obj.rotateX,pRotateX)+') rotateY('+ValueApplyPercent(obj.rotateY,pRotateY)+') rotateZ('+ValueApplyPercent(obj.rotateZ,pRotateZ)+')';
                }
                else {
                  v += ' rotate('+ValueApplyPercent(obj.rotateZ,pRotateZ)+')';
                }
                obj.$elt[n].style[this.G.CSStransformName]= v;
                
                if( nbStacks > 0 ) {
                  // apply a percent to the stack elements
                  pTranslateX-=this.G.tn.opt.Get('stacksTranslateX');
                  pTranslateY-=this.G.tn.opt.Get('stacksTranslateY');
                  pTranslateZ-=this.G.tn.opt.Get('stacksTranslateZ');
                  pRotateX-=this.G.tn.opt.Get('stacksRotateX');
                  pRotateY-=this.G.tn.opt.Get('stacksRotateY');
                  pRotateZ-=this.G.tn.opt.Get('stacksRotateZ');
                  pScale-=this.G.tn.opt.Get('stacksScale');
                }
              }
            }
            else {
              // thumbnail sub element
              if( obj.$elt[0] != undefined ) {
                // units must be given with
                var v = 'translateX('+obj.translateX+') translateY('+obj.translateY+') translateZ('+obj.translateY+') scale('+obj.scale+')';
                if( !(this.G.IE <= 9) && !this.G.isGingerbread ) {
                  v += ' rotateX('+obj.rotateX+') rotateY('+obj.rotateY+') rotateZ('+obj.rotateZ+')';
                }
                else {
                  v += ' rotate('+obj.rotateZ+')';
                }
                obj.$elt[0].style[this.G.CSStransformName]= v;
              }
            }
          };

          //--- 2D/3D css transform - set a value in cache
          NGY2Item.prototype.CSSTransformSet = function ( eltClass, transform, value ) {
            if( this.eltTransform[eltClass] == undefined ) {
              this.eltTransform[eltClass]={ translateX: 0, translateY: 0, translateZ: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scale: 1 };
              this.eltTransform[eltClass].$elt=this.$getElt(eltClass);
            }
            this.eltTransform[eltClass][transform]=value;
          };

          //--- CSS Filters - apply the cached value to element
          NGY2Item.prototype.CSSFilterApply = function ( eltClass ) {
            var obj=this.eltFilter[eltClass];
            var v = 'blur('+obj.blur+') brightness('+obj.brightness+') grayscale('+obj.grayscale+') sepia('+obj.sepia+') contrast('+obj.contrast+') opacity('+obj.opacity+') saturate('+obj.saturate+')';
            if( obj.$elt != null ) {
              for( var n=0; n<obj.$elt.length; n++ ) {
                if( obj.$elt[n] != undefined ) {
                  obj.$elt[n].style.WebkitFilter= v;
                  obj.$elt[n].style.filter= v;
                }
              }
            }
          };

          //--- CSS Filters - set a value in cache
          NGY2Item.prototype.CSSFilterSet = function ( eltClass, filter, value ) {
            if( this.eltFilter[eltClass] == undefined ) {
              this.eltFilter[eltClass]={ blur:0, brightness:'100%', grayscale:'0%', sepia:'0%', contrast:'100%', opacity:'100%', saturate:'100%' };
              this.eltFilter[eltClass].$elt=this.$getElt(eltClass);
            }
            this.eltFilter[eltClass][filter]=value;
          };

          //--- thumbnail hover animation
          NGY2Item.prototype.animate = function ( effect, delay, hoverIn ) {
            if( this.$getElt() == null  ) { return; }

            var context={};
            context.G=this.G;
            context.item=this;
            context.effect=effect;
            context.hoverIn=hoverIn;
            context.cssKind='';
            if( hoverIn ) {
              // HOVER IN
              
              if( this.eltEffect[effect.element] == undefined ) {
                this.eltEffect[effect.element]=[];
              }
              if( this.eltEffect[effect.element][effect.type] == undefined ) {
                this.eltEffect[effect.element][effect.type]= { initialValue: 0, lastValue: 0 };
              }
              if( effect.firstKeyframe ) {
                // store initial and current value -> for use in the back animation
                this.eltEffect[effect.element][effect.type]= { initialValue: effect.from, lastValue: effect.from};
              }
              
              context.animeFrom=effect.from;
              context.animeTo=effect.to;
              context.animeDuration=parseInt(effect.duration);
              context.animeDelay=30+parseInt(effect.delay+delay);  // 30ms is a default delay to avoid conflict with other initializations
              context.animeEasing=effect.easing;
            }
            else {
              // HOVER OUT
              if( effect.firstKeyframe ) {
                context.animeFrom=this.eltEffect[effect.element][effect.type].lastValue;
                context.animeTo=this.eltEffect[effect.element][effect.type].initialValue;
                // context.animeTo=effect.from;
              }
              else {
                // context.animeFrom=effect.from;
                context.animeFrom=this.eltEffect[effect.element][effect.type].lastValue;
                context.animeTo=this.eltEffect[effect.element][effect.type].initialValue;
                // context.animeTo=effect.to;
                
              }
              
              context.animeDuration=parseInt(effect.durationBack);
              context.animeDelay=30+parseInt(effect.delayBack+delay);   // 30ms is a default delay to avoid conflict with other initializations
              context.animeEasing=effect.easingBack;
            }

            // detect if animation on CSS transform
            var transform=['translateX', 'translateY', 'translateZ', 'scale', 'rotateX', 'rotateY', 'rotateZ'];
            for( var i=0; i<transform.length; i++ ) {
              if( effect.type == transform[i] ) {
                context.cssKind='transform';
                break;
              }
            }

            // detect if animation on CSS filter
            var filter=['blur', 'brightness', 'grayscale', 'sepia', 'contrast', 'opacity', 'saturate'];
            for( var i=0; i<filter.length; i++ ) {
              if( effect.type == filter[i] ) {
                context.cssKind='filter';
                break;
              }
            }

            // handle some special cases
            if( hoverIn && effect.element == '.nGY2GThumbnail' && ( effect.type == 'scale' || effect.type == 'rotateX') ) {
              this.G.GOM.lastZIndex++;
              this.$getElt(effect.element).css('z-index',this.G.GOM.lastZIndex);
              // setElementOnTop(this.G.$E.base, this.$getElt(effect.element) );
            }

            // animation
            var tweenable = new NGTweenable();
            context.tweenable=tweenable;
            tweenable.tween({
              attachment:   context,
              from:         { 'v': context.animeFrom },
              to:           { 'v': context.animeTo },
              duration:     context.animeDuration,    //parseInt(effect.duration),
              delay:        context.animeDelay,       //parseInt(effect.delay),
              easing:       context.animeEasing,      //'easeOutQuart',
              
              step: function (state, att) {
                if( att.item.$getElt() == null ) {
                  // the thumbnail may be destroyed since the start of the animation
                  att.tweenable.stop(false);
                  // att.tweenable.dispose();
                  return;
                }
                if( att.hoverIn && !att.item.hovered ) {
                  // thumbnail no more hovered
                  att.tweenable.stop(false);
                  // att.tweenable.dispose();
                  return;
                }

                if( att.G.VOM.viewerDisplayed ) {
                  att.tweenable.stop(false);
                  // att.tweenable.dispose();
                  return;
                }
                
                // test if in delay phase
                if( state.v == att.animeFrom ) { return; }
                
                switch( att.cssKind ) {
                  case 'transform':
                    att.item.CSSTransformSet(att.effect.element, att.effect.type, state.v);
                    att.item.CSSTransformApply(att.effect.element );
                    break;
                  case 'filter':
                    att.item.CSSFilterSet(att.effect.element, att.effect.type, state.v);
                    att.item.CSSFilterApply(att.effect.element );
                    break;
                  default:
                    var v=state.v;
                    if( state.v.substring(0,3) == 'rgb(' || state.v.substring(0,5) == 'rgba(' ) {
                      // to remove values after the dot (not supported by RGB/RGBA)
                      v=tinycolor(state.v).toRgbString();
                    }
                    att.item.$getElt(att.effect.element).css(att.effect.type, v);
                    break;
                }
                if( hoverIn ) {
                  // store value for back animation
                  att.item.eltEffect[att.effect.element][att.effect.type].lastValue= state.v;
                }
              },
              
              finish: function (state, att) {
                if( hoverIn ) {
                  // store value for back animation
                  att.item.eltEffect[att.effect.element][att.effect.type].lastValue= state.v;
                }

                if( att.item.$getElt() == null ) {
                  // the thumbnail may be destroyed since the start of the animation
                  return;
                }
                if( att.hoverIn && !att.item.hovered ) {
                  // thumbnail no more hovered
                  return;
                }

                if( att.G.VOM.viewerDisplayed ) {
                  return;
                }

                switch( att.cssKind ) {
                  case 'transform':
                    att.item.CSSTransformSet(att.effect.element, att.effect.type, att.animeTo);
                    att.item.CSSTransformApply(att.effect.element );
                    break;
                  case 'filter':
                    att.item.CSSFilterSet(att.effect.element, att.effect.type, att.animeTo);
                    att.item.CSSFilterApply(att.effect.element );
                    break;
                  default:
                    att.item.$getElt(att.effect.element).css(att.effect.type, att.animeTo);
                    break;
                }
              }
            });
          };
          
          // set z-index to display element on top of all others
          function setElementOnTop( start, elt ) {
            var highest_index = 0;
            if( start=='' ) { start= '*'; }
            jQuery(start).each(function() {
              var cur = parseInt(jQuery(this).css('z-index'));
              highest_index = cur > highest_index ? cur : highest_index;
            });
            highest_index++;
            jQuery(elt).css('z-index',highest_index);
          }
          

          return NGY2Item;
        })();    
          
      }

    
      _this.options = jQuery.extend(true, {}, jQuery.nanogallery2.defaultOptions, options);
      // Initialization code
      _this.nG2=null;
      _this.nG2= new nanoGALLERY2();
      _this.nG2.initiateGallery2(_this.e, _this.options );

    };
      
    // PUBLIC EXPOSED METHODS
    _this.test = function() {
      //alert('test');
      // console.dir(_this.nG.G.I.length);
      // console.dir(_this.nG);
      //privateTest();
    }

    
    // Run initializer
    _this.init();
  };
 
  jQuery.nanogallery2.defaultOptions = {
    kind :                        '',
    userID :                      '',
    photoset :                    '',
    album:                        '',
    blackList :                   'scrapbook|profil',
    whiteList :                   '',
    albumList :                   '',
    albumList2 :                  null,
    RTL :                         false,
    poogleplusUseUrlCrossDomain : true,
    flickrSkipOriginal :          true,
    breadcrumbAutoHideTopLevel :  true,
    displayBreadcrumb :           true,
    breadcrumbOnlyCurrentLevel :  true,
    breadcrumbHideIcons :         true,
    theme :                       'nGY2',
    colorScheme :                 'dark',
    colorSchemeViewer :           'dark',
    items :                       null,
    itemsBaseURL :                '',
    thumbnailSelectable :         false,
    dataProvider:                 '',
    dataCharset:                  'Latin',
    allowHTMLinData:              false,
    locationHash :                true,
    slideshowDelay :              3000,
    slideshowAutoStart :          false,

    debugMode: false,

    galleryDisplayMoreStep :      2,
    galleryDisplayMode :          'fullContent',
    galleryL1DisplayMode :        null,
    galleryPaginationMode :       'rectangles',   // 'dots', 'rectangles', 'numbers'
    galleryMaxRows :              2,
    galleryL1MaxRows :            null,
    galleryLastRowFull:           false,
    galleryLayoutEngine :         'default',
    paginationSwipe:              true,
    paginationVisiblePages :      10,
    paginationSwipeSensibilityVert : 10,
    galleryFilterTags :           false,    // possible values: false, true, 'title', 'description'
    galleryL1FilterTags :         null,     // possible values: false, true, 'title', 'description'
    galleryMaxItems :             0,        // maximum number of items per album  --> only flickr, google+, nano_photos_provider2
    galleryL1MaxItems :           null,     // maximum number of items per gallery page --> only flickr, google+, nano_photos_provider2
    gallerySorting :              '',
    galleryL1Sorting :            null,
    galleryDisplayTransition :    'none',
    galleryL1DisplayTransition :  null,
    galleryDisplayTransitionDuration :    1000,
    galleryL1DisplayTransitionDuration :  null,
    galleryResizeAnimation :      true,
    galleryRenderDelay :          60,

    thumbnailCrop :               true,
    thumbnailL1Crop :             null,
    thumbnailCropScaleFactor :    1.5,
    thumbnailLevelUp :            false,
    thumbnailAlignment :          'center',
    thumbnailWidth :              300,
    thumbnailL1Width :            null,
    thumbnailHeight :             200,
    thumbnailL1Height :           null,
    thumbnailGutterWidth :        2,
    thumbnailL1GutterWidth :      null,
    thumbnailGutterHeight :       2,
    thumbnailL1GutterHeight :     null,
    thumbnailBorderVertical :     2,
    thumbnailBorderHorizontal :   2,
    thumbnailFeaturedKeyword :    '*featured',
    thumbnailAlbumDisplayImage :  false,
    thumbnailHoverEffect2 :       'toolsAppear',
    thumbnailBuildInit2 :         '',
    thumbnailStacks :             0,
    thumbnailL1Stacks :           null,
    thumbnailStacksTranslateX :   0,
    thumbnailL1StacksTranslateX : null,
    thumbnailStacksTranslateY :   0,
    thumbnailL1StacksTranslateY : null,
    thumbnailStacksTranslateZ :   0,
    thumbnailL1StacksTranslateZ : null,
    thumbnailStacksRotateX :      0,
    thumbnailL1StacksRotateX :    null,
    thumbnailStacksRotateY :      0,
    thumbnailL1StacksRotateY :    null,
    thumbnailStacksRotateZ :      0,
    thumbnailL1StacksRotateZ :    null,
    thumbnailStacksScale :        0,
    thumbnailL1StacksScale :      null,
    thumbnailDisplayOutsideScreen: false,
    thumbnailWaitImageLoaded:     true,
    galleryBuildInit2 :           '',
    portable :                    false,
    
    touchAnimation :              true,
    touchAutoOpenDelay :          0,

    thumbnailLabel : {
      position :                  'overImageOnBottom',
      align:                      'center',
      display :                   true,
      displayDescription :        false,
      titleMaxLength :            0,
      titleMultiLine :            false,
      descriptionMaxLength :      0,
      descriptionMultiLine :      false,
      hideIcons :                 true,
      title :                     ''
    },

    thumbnailToolbarImage :       { topLeft: 'select', topRight : 'featured' },
    thumbnailToolbarAlbum :       { topLeft: 'select', topRight : 'counter' },
    thumbnailDisplayInterval :    15,
    thumbnailL1DisplayInterval :  null,
    thumbnailDisplayTransition :  'fadeIn',
    thumbnailL1DisplayTransition : null,
    thumbnailDisplayTransitionDuration:   240,
    thumbnailL1DisplayTransitionDuration: null,
    thumbnailOpenImage :          true,
    thumbnailOpenOriginal :       false,
    thumbnailGlobalImageTitle :   '',
    thumbnailGlobalAlbumTitle :   '',
    
    viewer :                      'internal',
    viewerFullscreen:             false,
    viewerDisplayLogo :           false,
    imageTransition :             'swipe',
    viewerZoom :                  true,
    openOnStart :                 '',
    viewerHideToolsDelay :        3000,
    viewerToolbar : {
      display :                   true,
      position :                  'bottomOverImage',
      fullWidth :                 true,
      align :                     'center',
      autoMinimize :              0,
      standard :                  'minimizeButton,label',
      minimized :                 'minimizeButton,label,infoButton,shareButton,downloadButton,linkOriginalButton,fullscreenButton'
    },
    viewerTools : {
      topLeft :                   'pageCounter,playPauseButton',
      topRight :                  'zoomButton,closeButton' 
    },
    
    breakpointSizeSM :            480,
    breakpointSizeME :            992,
    breakpointSizeLA :            1200,
    breakpointSizeXL :            1800,
    
    fnThumbnailInit :             null,
    fnThumbnailHoverInit :        null,
    fnThumbnailHover :            null,
    fnThumbnailHoverOut :         null,
    fnThumbnailDisplayEffect :    null,
    fnViewerInfo :                null,
    fnImgToolbarCustInit :        null,
    fnImgToolbarCustDisplay :     null,
    fnImgToolbarCustClick :       null,
    fnProcessData :               null,
    fnThumbnailSelection :        null,
    fnGalleryRenderStart :        null,
    fnGalleryRenderEnd :          null,
    fnGalleryObjectModelBuilt :   null,
    fnGalleryLayoutApplied :      null,
    fnThumbnailClicked :          null,
    fnShoppingCartUpdated :       null,
    fnThumbnailToolCustAction :   null,
    fnThumbnailOpen :             null,
    fnImgDisplayed :              null,

    i18n : {
      'breadcrumbHome' : 'Galleries', 'breadcrumbHome_FR' : 'Galeries',
      'thumbnailImageTitle' : '', 'thumbnailAlbumTitle' : '',
      'thumbnailImageDescription' : '', 'thumbnailAlbumDescription' : '',
      'infoBoxPhoto' : 'Photo', 'infoBoxDate' : 'Date', 'infoBoxAlbum' : 'Album', 'infoBoxDimensions' : 'Dimensions', 'infoBoxFilename' : 'Filename', 'infoBoxFileSize' : 'File size', 'infoBoxCamera' : 'Camera', 'infoBoxFocalLength' : 'Focal length', 'infoBoxExposure' : 'Exposure', 'infoBoxFNumber' : 'F Number', 'infoBoxISO' : 'ISO', 'infoBoxMake' : 'Make', 'infoBoxFlash' : 'Flash', 'infoBoxViews' : 'Views', 'infoBoxComments' : 'Comments'
    },
    icons : {
      // sample for font awesome: <i style="color:#eee;" class="fa fa-search-plus"></i>
      thumbnailAlbum:               '<i class="nGY2Icon icon-folder-empty"></i>',
      thumbnailImage:               '<i class="nGY2Icon icon-picture"></i>',
      breadcrumbAlbum:              '<i class="nGY2Icon icon-folder-empty"></i>',
      breadcrumbHome:               '<i class="nGY2Icon icon-home"></i>',
      breadcrumbSeparator:          '<i class="nGY2Icon icon-left-open"></i>',
      breadcrumbSeparatorRtl:       '<i class="nGY2Icon icon-right-open"></i>',
      navigationFilterSelected:     '<i style="color:#fff;" class="nGY2Icon icon-toggle-on"></i>',
      navigationFilterUnselected:   '<i style="color:#ddd;" class="nGY2Icon icon-toggle-off"></i>',
      navigationFilterSelectedAll:  '<i class="nGY2Icon icon-toggle-on"></i><i class="nGY2Icon icon-ok"></i>',
      thumbnailSelected:            '<i style="color:#bff;" class="nGY2Icon icon-ok-circled"></i>',
      thumbnailUnselected:          '<i style="color:#bff;" class="nGY2Icon icon-circle-empty"></i>',
      thumbnailFeatured:            '<i style="color:#dd5;" class="nGY2Icon icon-star"></i>',
      thumbnailCounter:             '<i class="nGY2Icon icon-picture"></i>',
      thumbnailShare:               '<i class="nGY2Icon icon-ngy2_share2"></i>',
      thumbnailDownload:            '<i class="nGY2Icon icon-ngy2_download2"></i>',
      thumbnailInfo:                '<i class="nGY2Icon icon-ngy2_info2"></i>',
      thumbnailCart:                '<i class="nGY2Icon icon-basket"></i>',
      thumbnailDisplay:             '<i class="nGY2Icon icon-ngy2_zoom_in2"></i>',
      thumbnailCustomTool1:         'T1',
      thumbnailCustomTool2:         'T2',
      thumbnailCustomTool3:         'T3',
      thumbnailCustomTool4:         'T4',
      thumbnailCustomTool5:         'T5',
      thumbnailCustomTool6:         'T6',
      thumbnailCustomTool7:         'T7',
      thumbnailCustomTool8:         'T8',
      thumbnailCustomTool9:         'T9',
      thumbnailCustomTool10:        'T10',
      thumbnailAlbumUp:             '<i style="font-size: 3em;" class="nGY2Icon icon-ngy2_chevron_up2"></i>',
      paginationNext:               '<i class="nGY2Icon icon-right-open"></i>',
      paginationPrevious:           '<i class="nGY2Icon icon-left-open"></i>',
      galleryMoreButton:            '<i class="nGY2Icon icon-picture"></i> &nbsp; <i class="nGY2Icon icon-right-open"></i>',
      buttonClose:                  '<i class="nGY2Icon icon-ngy2_close2"></i>',
      viewerPrevious:               '<i class="nGY2Icon icon-ngy2_chevron-left"></i>',
      viewerNext:                   '<i class="nGY2Icon icon-ngy2_chevron-right"></i>',
      viewerImgPrevious:            '<i class="nGY2Icon icon-ngy2_chevron_left3"></i>',
      viewerImgNext:                '<i class="nGY2Icon icon-ngy2_chevron_right3"></i>',
      viewerDownload:               '<i class="nGY2Icon icon-ngy2_download2"></i>',
      viewerToolbarMin:             '<i class="nGY2Icon icon-ellipsis-vert"></i>',
      viewerToolbarStd:             '<i class="nGY2Icon icon-menu"></i>',
      viewerPlay:                   '<i class="nGY2Icon icon-play"></i>',
      viewerPause:                  '<i class="nGY2Icon icon-pause"></i>',
      viewerFullscreenOn:           '<i class="nGY2Icon icon-resize-full"></i>',
      viewerFullscreenOff:          '<i class="nGY2Icon icon-resize-small"></i>',
      viewerZoomIn:                 '<i class="nGY2Icon icon-ngy2_zoom_in2"></i>',
      viewerZoomOut:                '<i class="nGY2Icon icon-ngy2_zoom_out2"></i>',
      viewerLinkOriginal:           '<i class="nGY2Icon icon-ngy2_external2"></i>',
      viewerInfo:                   '<i class="nGY2Icon icon-ngy2_info2"></i>',
      viewerShare:                  '<i class="nGY2Icon icon-ngy2_share2"></i>',
      user:                         '<i class="nGY2Icon icon-user"></i>',
      location:                     '<i class="nGY2Icon icon-location"></i>',
      config:                       '<i class="nGY2Icon icon-wrench"></i>',
      shareFacebook:                '<i style="color:#3b5998;" class="nGY2Icon icon-facebook-squared"></i>',
      shareTwitter:                 '<i style="color:#00aced;" class="nGY2Icon icon-twitter-squared"></i>',
      shareGooglePlus:              '<i style="color:#dd4b39;" class="nGY2Icon icon-gplus-squared"></i>',
      shareTumblr:                  '<i style="color:#32506d;" class="nGY2Icon icon-tumblr-squared"></i>',
      sharePinterest:               '<i style="color:#cb2027;" class="nGY2Icon icon-pinterest-squared"></i>',
      shareVK:                      '<i style="color:#3b5998;" class="nGY2Icon icon-vkontakte"></i>',
      shareMail:                    '<i style="color:#555;" class="nGY2Icon icon-mail-alt"></i>',
      viewerCustomTool1:            'T1',
      viewerCustomTool2:            'T2',
      viewerCustomTool3:            'T3',
      viewerCustomTool4:            'T4',
      viewerCustomTool5:            'T5',
      viewerCustomTool6:            'T6',
      viewerCustomTool7:            'T7',
      viewerCustomTool8:            'T8',
      viewerCustomTool9:            'T9',
      viewerCustomTool10:           'T10'
    }
  };

  jQuery.fn.nanogallery2 = function (args, option, value) {
    
    if( typeof jQuery(this).data('nanogallery2data') === 'undefined'){
      if( args == 'destroy' ) {
        // command to destroy but no instance yet --> exit
        return;
      }
      
      return this.each( function(){
        (new jQuery.nanogallery2(this, args));
      });
    }
    else {
      // no options -->
      // This function breaks the chain, but provides some API methods

      var nG2=$(this).data('nanogallery2data').nG2;
      switch(args){
        case 'displayItem':
          nG2.DisplayItem(option);
          break;
        case 'search':
          return( nG2.Search(option));
          break;
        case 'search2':
          return nG2.Search2(option, value);
          break;
        case 'search2Execute':
          return nG2.Search2Execute();
          break;
        case 'refresh':
          nG2.Refresh();
          break;
        case 'instance':
          return nG2;
          break;
        case 'data':
          nG2.data= {
            items: nG2.I,
            gallery: nG2.GOM,
            lightbox: nG2.VOM
          };
          return nG2.data;
          break;
        case 'reload':
          nG2.ReloadAlbum();
          return $(this);
          break;
        case 'itemsSelectedGet':
          return nG2.ItemsSelectedGet();
          break;
        case 'itemsSetSelectedValue':
          nG2.ItemsSetSelectedValue(option, value);
          break;
        case 'option':
          if(typeof value === 'undefined'){
            return nG2.Get(option);
          }else{
            nG2.Set(option,value);
            if( option == 'demoViewportWidth' ) {
              // force resize event -> for demo purposes
              $(window).trigger('resize');
            }
          }
          break;
        case 'destroy':
          nG2.Destroy();
          $(this).removeData('nanogallery2data');
          break;
        case 'shoppingCartGet':
          return nG2.shoppingCart;
          break;
        case 'shoppingCartUpdate':
          if( typeof value === 'undefined' || typeof option === 'undefined' ){
            return false;
          }
          var ID=option;
          var cnt=value;
          for( var i=0; i<nG2.shoppingCart.length; i++) {
            if( nG2.shoppingCart[i].ID=ID ) {
              nG2.shoppingCart[i].cnt=cnt;
            }
          }
          if( G.O.fnShoppingCartUpdated !== null ) {
            if( typeof G.O.fnShoppingCartUpdated == 'function' ) {
              G.O.fnShoppingCartUpdated(nG2.shoppingCart);
            }
            else {
              // defined in markup
              window[G.O.fnShoppingCartUpdated](nG2.shoppingCart);
            }
          }
          return nG2.shoppingCart;
          break;
        case 'shoppingCartRemove':
          if( typeof option === 'undefined' ){
            return false;
          }
          var ID=option;
          for( var i=0; i<nG2.shoppingCart.length; i++) {
            if( nG2.shoppingCart[i].ID=ID ) {
              nG2.shoppingCart.splice(i,1);
              break;
            }
          }
          if( G.O.fnShoppingCartUpdated !== null ) {
            if( typeof G.O.fnShoppingCartUpdated == 'function' ) {
              G.O.fnShoppingCartUpdated(nG2.shoppingCart);
            }
            else {
              // defined in markup
              window[G.O.fnShoppingCartUpdated](nG2.shoppingCart);
            }
          }
          return nG2.shoppingCart;
          break;
      }
      return $(this);

    }
  };
  

  // ###############################
  // ##### nanogallery2 script #####
  // ###############################

  /** @function nanoGALLERY2 */
  function nanoGALLERY2() {
    "use strict";

    /**
    * Force reload the current album, if provided by Json
    */
    this.ReloadAlbum = function(){
      if( G.O.kind === '' ) {
        throw 'Not supported for this content source:' + G.O.kind;
      }

      var albumIdx=G.GOM.albumIdx;
      if( albumIdx == -1 ) {
        throw ('Current album not found.');
      }
      
      var albumID=G.I[albumIdx].GetID();

      // unselect everything & remove link to album (=logical delete)
      var l=G.I.length;
      for( var i=0; i < l ; i++ ) {
        var item=G.I[i];
        if( item.albumID == albumID ) {
          item.selected = false;
        }
      }
      
      G.I[albumIdx].contentIsLoaded = false;
      
      DisplayAlbum('-1', albumID);
    };
    
    /**
     * Set one or several items selected/unselected
     * @param {array} items
     */
    this.ItemsSetSelectedValue = function(items, value){
      var l=items.length;
      for( var j=0; j<l ; j++) {
        ThumbnailSelectionSet(items[j], value);
      }
    };
    
    /**
     * Returns an array of selected items
     * @returns {Array}
     */
    this.ItemsSelectedGet = function(){
      var selectedItems=[];
      var l=G.I.length;
      for( var i=0; i < l ; i++ ) {
        if( G.I[i].selected == true ) {
          selectedItems.push(G.I[i]);
        }
      }
      return selectedItems;
    };    
    
    /**
     * Returns the value of an option
     * @param {string} option
     * @returns {nanoGALLERY.G.O}
     */
    this.Get = function(option){
        return G.O[option];
    };

    /**
     * Set a new value for a defined option
     * @param {string} option
     */
    this.Set = function(option, value){
        G.O[option] = value;
        switch( option ) {
          case 'thumbnailSelectable':
            ThumbnailSelectionClear();
            // refresh the displayed gallery
            GalleryRender( G.GOM.albumIdx );
            break;
        }
    };
    
    /**
     * refresh the current gallery
     */
    this.Refresh = function() {
      // refresh the displayed gallery
      GalleryRender( G.GOM.albumIdx );
    };

    /**
     * display one item (image or gallery)
     *   itemID syntax:
     *    - albumID --> display one album
     *    - albumID/imageID --> display one image
    */
    this.DisplayItem = function( itemID ) {
      var IDs=parseIDs( itemID );
      if( IDs.imageID != '0' ) {
        DisplayPhoto( IDs.imageID, IDs.albumID );
      }
      else {
        DisplayAlbum( '-1', IDs.albumID );
      }
    };
    
      
      
    var CountItemsToDisplay = function( gIdx ) {
      if( G.I[gIdx] == undefined ) { return 0; }
      var albumID=G.I[gIdx].GetID();
      var l=G.I.length;
      var cnt=0;
      for( var idx=0; idx < l; idx++ ) {
        var item=G.I[idx];
        if( item.isToDisplay(albumID) ) {
          cnt++;
        }
      }
      return cnt;
    } 
    /**
     * Search in the displayed gallery (in thumbnails title)
     */
    this.Search = function( search ) {
      G.GOM.albumSearch=search.toUpperCase();
      var gIdx=G.GOM.albumIdx;
      GalleryRender( G.GOM.albumIdx );
      return CountItemsToDisplay(gIdx);
    };

    /**
     * Search2 in title and tags - set search values
     */
    this.Search2 = function( searchTitle, searchTags ) {
      if( searchTitle != null && searchTitle != undefined ) {
        G.GOM.albumSearch=searchTitle.toUpperCase();
      }
      else {
        G.GOM.albumSearch='';
      }
      
      if( searchTags != null && searchTags != undefined ) {
        G.GOM.albumSearchTags=searchTags.toUpperCase();
      }
      else {
        G.GOM.albumSearchTags='';
      }
      return CountItemsToDisplay(G.GOM.albumIdx);
    };
    /**
     * Search2 - execute the search on title and tags
     */
    this.Search2Execute = function() {
      var gIdx=G.GOM.albumIdx;
      GalleryRender( G.GOM.albumIdx );
      return CountItemsToDisplay(gIdx);
    };
    
    
    /**
     * Destroy the current gallery
     */
    this.Destroy = function(){
      // alert('destroy');
      // var event = new Event('build');
      if( G.GOM.hammertime != null ) {
        G.GOM.hammertime.destroy();
        G.GOM.hammertime=null;
      }
      // G.GOM.userEvents.RemoveEvtListener();
      // G.GOM.userEvents=null;
      // G.VOM.userEvents.RemoveEvtListener();
      // G.VOM.userEvents=null;
      if( G.VOM.hammertime != null ) {
        G.VOM.hammertime.destroy();
        G.VOM.hammertime=null;
      }
      //ThumbnailHoverReInitAll();  
      
      // color scheme
      $('#ngycs_'+G.baseEltID).remove()
      
      G.GOM.items=[];
      G.GOM.navigationBar.$newContent=null;
      G.$E.base.empty();
      G.$E.base.removeData();

      jQuery(window).off('resize.nanogallery2.'+G.baseEltID);
      jQuery(window).off('scroll.nanogallery2.'+G.baseEltID);
      G.GOM.firstDisplay=false;

      
    };
    
    
    
    // throttle()
    // author: underscore.js - http://underscorejs.org/docs/underscore.html
    // Returns a function, that, when invoked, will only be triggered at most once during a given window of time.
    // Normally, the throttled function will run as much as it can, without ever going more than once per wait duration;
    // but if you�d like to disable the execution on the leading edge, pass {leading: false}.
    // To disable execution on the trailing edge, ditto.
    var throttle = function(func, wait, options) {
      var context, args, result;
      var timeout = null;
      var previous = 0;
      if (!options) options = {};
      var later = function() {
        previous = options.leading === false ? 0 : new Date().getTime();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      };
      return function() {
        var now = new Date().getTime();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
    };
    
    
    // DEBOUNCE
    // author: John Hann - http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
    // execAsap - false means executing at the end of the detection period
    var debounce = function (func, threshold, execAsap) {
      var timeout;
      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null; 
          };
   
          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);
          timeout = setTimeout(delayed, threshold || 100); 
      };
    }

    
    /*
    ** Global data for this nanogallery2 instance
    **/
    var G=this;
    G.I =                       [];           // gallery items
    G.Id =                      [];           // gallery items
    G.O =                       null;         // user options
    G.baseEltID =               null;         // ID of the base element
    G.$E = { 
      base:                     null,         // base element
      conTnParent:              null,         // $g_containerThumbnailsParent
      conLoadingB:              null,         // loading bar - nanoGalleryLBarOff
      conConsole:               null,         // console for error messages
      conNavigationBar:         null,         // gallery navigation bar
      conTnBottom:              null         // container on the bottom of the gallery
    };
    G.shoppingCart =            [];
    G.layout = {                              // Layout informations
      internal :                true,
      engine :                  '',
      support :                 { rows: false },
      prerequisite :            { imageSize: false },
      SetEngine: function() {
        if( G.layout.internal ) {
          if( G.tn.settings.getW() == 'auto' || G.tn.settings.getW() == '' ) {
            G.layout.engine='JUSTIFIED';
            G.layout.support.rows=true;
            G.layout.prerequisite.imageSize=true;
            return;
          }
          if( G.tn.settings.getH() == 'auto' || G.tn.settings.getH() == '' ) {
            G.layout.engine='CASCADING';
            G.layout.support.rows=false;
            G.layout.prerequisite.imageSize=true;
            return;
          }
          
          G.layout.engine='GRID';
          G.layout.support.rows=true;
          if( G.tn.opt.Get('crop') === true ) {
            G.layout.prerequisite.imageSize=true;
          }
          else {
            G.layout.prerequisite.imageSize=false;
          }
        }
      }
    };
    G.galleryResizeEventEnabled = false;
    G.galleryMaxRows = { l1: 0, lN: 0,
      Get: function() {
        return G.galleryMaxRows[G.GOM.curNavLevel];
      }
    };
    G.galleryMaxItems = { l1: 0, lN: 0,
      Get: function() {
        return G.galleryMaxItems[G.GOM.curNavLevel];
      }
    };
    G.galleryFilterTags = { l1: 0, lN: 0,
      Get: function() {
        return G.galleryFilterTags[G.GOM.curNavLevel];
      }
    };
    G.galleryDisplayMode = { l1: 'FULLCONTENT', lN: 'FULLCONTENT',
      Get: function() {
        return G.galleryDisplayMode[G.GOM.curNavLevel];
      }
    };
    G.galleryLastRowFull = { l1: false, lN: false,
      Get: function() {
        return G.galleryLastRowFull[G.GOM.curNavLevel];
      }
    };
    G.gallerySorting = { l1: '', lN: '',
      Get: function() {
        return G.gallerySorting[G.GOM.curNavLevel];
      }
    };
    G.galleryDisplayTransition = { l1: 'none', lN: 'none',
      Get: function() {
        return G.galleryDisplayTransition[G.GOM.curNavLevel];
      }
    };
    G.galleryDisplayTransitionDuration = { l1: 500, lN: 500,
      Get: function() {
        return G.galleryDisplayTransitionDuration[G.GOM.curNavLevel];
      }
    };
    G.$currentTouchedThumbnail = null;    
    
    // ##### GENERAL THUMBNAILS PROPERTIES -->
    G.tn = {
      // levell specific options
      opt:  {
        l1: { crop: true, stacks: 0, stacksTranslateX: 0, stacksTranslateY: 0, stacksTranslateZ: 0, stacksRotateX: 0, stacksRotateY: 0, stacksRotateZ: 0, stacksScale: 0, gutterHeight: 0, gutterWidth: 0, displayTransition: 'FADEIN', displayTransitionStartVal: 0, displayTransitionEasing: 'easeOutQuart', displayTransitionDuration: 240, displayInterval: 15 },
        lN: { crop: true, stacks: 0, stacksTranslateX: 0, stacksTranslateY: 0, stacksTranslateZ: 0, stacksRotateX: 0, stacksRotateY: 0, stacksRotateZ: 0, stacksScale: 0, gutterHeight: 0, gutterWidth: 0, displayTransition: 'FADEIN', displayTransitionStartVal: 0, displayTransitionEasing: 'easeOutQuart', displayTransitionDuration: 240, displayInterval: 15 },
        Get: function(opt) {
          return G.tn.opt[G.GOM.curNavLevel][opt];
        }
      },
      scale:                          1,         // image scale depending of the hover effect
      borderWidth:                    0,         // thumbnail container border width
      borderHeight:                   0,         // thumbnail container border height
      labelHeight: {                  // in case label on bottom, otherwise always=0
        l1: 0, lN: 0,
        get: function() {
          return G.tn.labelHeight[G.GOM.curNavLevel];
        }
      },
      defaultSize: {                  // default thumbnail size
                                      // annotation height is not included
        width: {  l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 } },
        height: { l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 } },
        getWidth: function() {
          return G.tn.defaultSize.width[G.GOM.curNavLevel][G.GOM.curWidth];
        },
        getOuterWidth: function() {     // width border included
          return G.tn.defaultSize.width[G.GOM.curNavLevel][G.GOM.curWidth]+G.tn.borderWidth*2;
        },
        getHeight: function() {
          return G.tn.defaultSize.height[G.GOM.curNavLevel][G.GOM.curWidth];
        },
        getOuterHeight: function() {     // height, border included
          return G.tn.defaultSize.height[G.GOM.curNavLevel][G.GOM.curWidth]+G.tn.borderHeight*2;
        }
      },
      settings: {                     // user defined width/height of the image to display depending on the screen size
        width: {  l1 : { xs:0, sm:0, me:0, la:0, xl:0, xsc:'u', smc:'u', mec:'u', lac:'u', xlc:'u' },
                  lN : { xs:0, sm:0, me:0, la:0, xl:0, xsc:'u', smc:'u', mec:'u', lac:'u', xlc:'u' } },
        height: { l1 : { xs:0, sm:0, me:0, la:0, xl:0, xsc:'u', smc:'u', mec:'u', lac:'u', xlc:'u' }, 
                  lN : { xs:0, sm:0, me:0, la:0, xl:0, xsc:'u', smc:'u', mec:'u', lac:'u', xlc:'u' } },
        getH: function() {
          return G.tn.settings.height[G.GOM.curNavLevel][G.GOM.curWidth];
        },
        getW: function() {
          return G.tn.settings.width[G.GOM.curNavLevel][G.GOM.curWidth];
        }
      },
      // thumbnail hover effects
      hoverEffects : {
        std :   [],
        level1: [],
        get: function() {
          if( G.GOM.curNavLevel == 'l1' && G.tn.hoverEffects.level1.length !== 0 ) {
            return G.tn.hoverEffects.level1;
          }
          else {
            return G.tn.hoverEffects.std;
          }
        }
      },
      // thumbnail init
      buildInit : {
        std :   [],
        level1: [],
        get: function() {
          if( G.GOM.curNavLevel == 'l1' && G.tn.buildInit.level1.length !== 0 ) {
            return G.tn.buildInit.level1;
          }
          else {
            return G.tn.buildInit.std;
          }
        }
      },
      // thumbnail toolbars
      toolbar: {
        album :   { topLeft : '', topRight: '', bottomLeft: '', bottomRight: '' },
        image :   { topLeft : '', topRight: '', bottomLeft: '', bottomRight: '' },
        albumUp : { topLeft : '', topRight: '', bottomLeft: '', bottomRight: '' },
        get: function( item ) {
          return G.tn.toolbar[item.kind];
        },
      },
      style: {
        // inline CSS
        l1 : { annotation: '', label: '', title: '', desc: '' },
        lN : { annotation: '', label: '', title: '', desc: '' },
        getTitle : function() {
          return ('style="' + G.tn.style[G.GOM.curNavLevel].title + '"');
        },
        getDesc : function() {
          return ('style="' + G.tn.style[G.GOM.curNavLevel].desc + '"');
        },
        getAnnotation: function() {
          var s='style="' + G.tn.style[G.GOM.curNavLevel].annotation;
          s+= (G.O.RTL ? '"direction:RTL;"' :'');
          s+='"';
          return s;
        },
        getLabel: function() {
          var s='style="'+ G.tn.style[G.GOM.curNavLevel].label + '"';
          return s;
        }
      }
    };
    G.scrollTimeOut =             0;
    G.i18nTranslations =          {'paginationPrevious':'Previous', 'paginationNext':'Next', 'breadcrumbHome':'List of Albums', 'thumbnailImageTitle':'', 'thumbnailAlbumTitle':'', 'thumbnailImageDescription':'', 'thumbnailAlbumDescription':'' };
    G.emptyGif =                  'data:image/gif;base64,R0lGODlhEAAQAIAAAP///////yH5BAEKAAEALAAAAAAQABAAAAIOjI+py+0Po5y02ouzPgUAOw==';
    G.CSStransformName =          FirstSupportedPropertyName(["transform", "msTransform", "MozTransform", "WebkitTransform", "OTransform"]);
    // G.CSSfilterName =          FirstSupportedPropertyName(["filter", "WebkitFilter"]);
    G.CSStransformStyle =         FirstSupportedPropertyName(["transformStyle", "msTransformStyle", "MozTransformStyle", "WebkitTransformStyle", "OTransformStyle"]);
    G.CSSperspective =            FirstSupportedPropertyName(["perspective", "msPerspective", "MozPerspective", "WebkitPerspective", "OPerspective"]);
    G.CSSbackfaceVisibilityName = FirstSupportedPropertyName(["backfaceVisibility", "msBackfaceVisibility", "MozBackfaceVisibility", "WebkitBackfaceVisibility", "OBackfaceVisibility"]);
    G.CSStransitionName =         FirstSupportedPropertyName(["transition", "msTransition", "MozTransition", "WebkitTransition", "OTransition"]);
    G.CSSanimationName =          FirstSupportedPropertyName(["animation", "msAnimation", "MozAnimation", "WebkitAnimation", "OAnimation"]);
    G.GalleryResizeThrottled =    throttle(GalleryResize, 100, {leading: false});
    
    G.blackList =                 null;     // album white list
    G.whiteList =                 null;     // album black list
    G.albumList =                 [];       // album list
    G.albumListHidden =           [];       // for Google Photos -> hidden albums with private key
    G.locationHashLastUsed =      '';
    G.custGlobals =               {};
    G.touchAutoOpenDelayTimerID = 0;
    G.i18nLang =                  '';
    G.timeLastTouchStart =        0;
    G.custGlobals =               {};
    
    //------------------------
    //--- Gallery Object Model
    G.GOM = {
      albumIdx :                  -1, // index (in G.I) of the currently displayed album
      clipArea :                  { top: 0, height: 0 }, // area of the GOM to display on screen
      displayArea :               { width: 0 , height: 0 }, // size of the GOM area
      displayAreaLast :           { width: 0 , height: 0 }, // previous size of the GOM area
      displayedMoreSteps :        0, // current number of displayed steps (moreButton mode)
      items:                      [], // current items of the GOMS
      $imgPreloader:              [],
      itemsDisplayed :            0, // number of currently displayed thumbnails
      firstDisplay :              true,
      navigationBar :             // content of the navigation bar (for breadcrumb and filter tags)
        { displayed:              false,
        $newContent:              '' },
      cache :                     // cached data
        { viewport:               null,
        containerOffset:          null },
      nbSelected :                0, // number of selected items
      pagination :                { currentPage: 0 }, // pagination data
      lastFullRow :               -1, // number of the last row without holes
      lastDisplayedIdx:           -1, // used to display the counter of not displayed items
      displayInterval :           { from: 0, len: 0 },
      userEvents:                 null,
      hammertime:                 null,
      curNavLevel:                'l1',   // current navigation level (l1 or LN)
      curWidth:                   'me',
      albumSearch:                '',     // current search string -> title (used to filter the thumbnails on screen)
      albumSearchTags:            '',     // current search string -> tags
      lastZIndex:                 0,      // used to put a thumbnail on top of all others (for exemple for scale hover effect)
      lastRandomValue:            0
    };
    
    // One GOM item (thumbnail)
    function GTn(index, width, height) {
      this.thumbnailIdx = index;
      this.width =                0;      // thumbnail width
      this.height =               0;      // thumbnail height
      this.top =                  0;      // position: top
      this.left =                 0;      // position: left
      this.row =                  0;      // position: row number
      this.imageWidth =           width;  // image width
      this.imageHeight =          height; // image height
      this.resizedContentWidth =  0;
      this.resizedContentHeight = 0;
      this.displayed =            false;
      this.neverDisplayed =       true;
      this.inDisplayArea =        false;
    }
    
    //------------------------
    //--- Viewer Object Model
    G.VOM = {
      viewerDisplayed:            false,  // is the viewer currently displayed
      viewerIsFullscreen:         false,  // viewer in fullscreen mode
      infoDisplayed:              false,  // is the info box displayed
      toolbarsDisplayed:          true,   // the toolbars are displayed
      toolsHide:                  null,
      currentZoom:                1,
      isZooming:                  false,
      padding:                    { H: 0, V: 0 }, // padding for the image
      window:                     { lastWidth: 0, lastHeight: 0 },
      $cont:                      null,   // viewer container
      $viewer:                    null,
      $toolbar:                   null,   // viewerToolbar
      $toolbarTL:                 null,   // viewer toolbar on top left
      $toolbarTR:                 null,   // viewer toolbar on top right
      $content:                   null,   // viewer content
      $imgP:                      null,   // previous displayed image
      $imgC:                      null,   // currently displayed image
      $imgN:                      null,   // next image to display
      toolbarMode:                'std',  // current toolbar mode (standard, minimized)
      playSlideshow :             false,  // slide show mode status
      playSlideshowTimerID:       0,      // slideshow mode time
      slideshowDelay:             3000,   // slideshow mode - delay before next image
      albumID:                    -1,
      currItemIdx:                -1,
      viewerImageIsChanged:       false,  // image display is currently modified
      items:                      [],     // current list of images to be managed by the viewer
      Item: function(idx) {
        return G.I[this.items[idx].imageIdx];
      },
      IdxNext: function(idx) {
        var n=0;
        if( idx != G.VOM.items.length-1 ) {
          n=idx+1;
        }
        return n;
      },
      IdxPrevious: function(idx) {
        var n=idx-1;
        if( idx == 0 ) {
          n=G.VOM.items.length-1;
        }
        return n;
      },
      ItemNext: function(idx) {
        return G.I[this.items[this.IdxNext(idx)].imageIdx]
      },
      ItemPrevious: function(idx) {
        return G.I[this.items[this.IdxPrevious(idx)].imageIdx]
      },
      userEvents:         null,   // user events management
      hammertime:         null,   // hammer.js manager
      swipePosX:          0,      // current horizontal swip position
      panPosX:            0,      // manual pan position
      panPosY:            0,
      zoomPosX:           0,      // position to center zoom in/out
      zoomPosY:           0,
      colorSchemeLabel:   '',
      timeImgChanged:     0,
      ImageLoader: {
        // inspired by ROB - http://stackoverflow.com/users/226507/rob
        maxChecks:        1000,
        list:             [],
        intervalHandle :  null,

        loadImage : function (callback, url, ngitem) {
          var img = new Image ();
          img.src = url;
          if (img.width && img.height) {
            callback (img.width, img.height, url, ngitem, 0);
            }
          else {
            var obj = {image: img, url: url, ngitem: ngitem, callback: callback, checks: 1};
            var i;
            for (i=0; i < this.list.length; i++)    {
              if (this.list[i] == null)
                break;
              }
            this.list[i] = obj;
            if (!this.intervalHandle)
              this.intervalHandle = setInterval(this.interval, 60);
            }
          },

        // called by setInterval  
        interval : function () {
          var count = 0;
          var list = G.VOM.ImageLoader.list, item;
          for (var i=0; i<list.length; i++) {
            item = list[i];
            if (item != null) {
              if (item.image.width && item.image.height) {
                item.callback (item.image.width, item.image.height, item.url, item.ngitem, item.checks);
                G.VOM.ImageLoader.list[i] = null;
                }
              else if (item.checks > G.VOM.ImageLoader.maxChecks) {
                item.callback (0, 0, item.url, item.ngitem, item.checks);
                G.VOM.ImageLoader.list[i] = null;
                }
              else {
                count++;
                item.checks++;
                }
              }
            }
          if (count == 0) {
            G.VOM.ImageLoader.list = [];
            clearInterval (G.VOM.ImageLoader.intervalHandle);
            delete G.VOM.ImageLoader.intervalHandle;
            }
          }
        }
    }
    // One VOM item (image)
    function VImg(index) {
      this.imageIdx = index;
      this.imageNumber = 0;
    }
    
    //------------------------
    //--- popup
    G.popup = {
      isDisplayed:      false,
      $elt:             null,
      close: function() {
        if( this.$elt != null ) {
          var tweenable = new NGTweenable();
          tweenable.tween({
            from:       { opacity:1  },
            to:         { opacity:0 },
            attachment: { t: this },
            easing:     'easeInOutSine',
            duration:   100,
            step: function (state, att) {
              if( att.t.$elt != null ) {
                att.t.$elt.css('opacity',state.opacity);
              }
            },
            finish: function (state, att) {
              if( att.t.$elt != null ) {
                att.t.$elt.remove();
                att.t.$elt=null;
              }
              att.t.isDisplayed=false;
            }
          });
        }
      }
    }
    
    
    // Color schemes - Gallery
    G.colorScheme_dark = {
      navigationBar :         { background: 'none', borderTop: '', borderBottom: '', borderRight: '', borderLeft: '' },
      navigationBreadcrumb :  { background: '#111', color: '#fff', colorHover: '#ccc', borderRadius: '4px' },
      navigationFilter :      { color: '#ddd', background: '#111', colorSelected: '#fff', backgroundSelected: '#111', borderRadius: '4px' },
      thumbnail :             { background: '#444', borderColor: '#000', labelOpacity : 1, labelBackground: 'rgba(34, 34, 34, 0)', titleColor: '#fff', titleBgColor: 'transparent', titleShadow: '', descriptionColor: '#ccc', descriptionBgColor: 'transparent', descriptionShadow: '', stackBackground: '#aaa' },
      thumbnailIcon :         { padding: '5px', color: '#fff' },
      pagination :            { background: '#111', backgroundSelected: '#666', color: '#fff', borderRadius: '4px', shapeBorder: '3px solid #666', shapeColor: '#444', shapeSelectedColor: '#aaa'}
    };

    G.colorScheme_light = {
      navigationBar :         { background: 'none', borderTop: '', borderBottom: '', borderRight: '', borderLeft: '' },
      navigationBreadcrumb :  { background: '#eee', color: '#000', colorHover: '#333', borderRadius: '4px' },
      navigationFilter :      { background: '#eee', color: '#222', colorSelected: '#000', backgroundSelected: '#eee', borderRadius: '4px' },
      thumbnail :             { background: '#444', borderColor: '#000', labelOpacity : 1, labelBackground: 'rgba(34, 34, 34, 0)', titleColor: '#fff', titleBgColor: 'transparent', titleShadow: '', descriptionColor: '#ccc', descriptionBgColor: 'transparent', descriptionShadow: '', stackBackground: '#888' },
      thumbnailIcon :         { padding: '5px', color: '#fff' },
      pagination :            { background: '#eee', backgroundSelected: '#aaa', color: '#000', borderRadius: '4px', shapeBorder: '3px solid #666', shapeColor: '#444', shapeSelectedColor: '#aaa'}
    };

    // Color schemes - lightbox
    G.colorSchemeViewer_dark = {
      background:             '#000',
      imageBorder:            'none',
      imageBoxShadow:         'none',
      barBackground:          'rgba(4, 4, 4, 0.7)',
      barBorder:              '0px solid #111',
      barColor:               '#eee',
      barDescriptionColor:    '#aaa'
    };
    G.colorSchemeViewer_border = {
      background:             'rgba(1, 1, 1, 0.75)',
      imageBorder:            '4px solid #f8f8f8',
      imageBoxShadow:         '#888 0px 0px 20px',
      barBackground:          'rgba(4, 4, 4, 0.7)',
      barBorder:              '0px solid #111',
      barColor:               '#eee',
      barDescriptionColor:    '#aaa'
    };
    G.colorSchemeViewer_light = {
      background:             '#f8f8f8',
      imageBorder:            'none',
      imageBoxShadow:         'none',
      barBackground:          'rgba(4, 4, 4, 0.7)',
      barBorder:              '0px solid #111',
      barColor:               '#eee',
      barDescriptionColor:    '#aaa'
    };

      
    
    // shortcut with G context to NGY2TOOLS
    // var NanoAlert =           NGY2Tools.NanoAlert.bind(G);
    // var NanoConsoleLog =      NGY2Tools.NanoConsoleLog.bind(G);
    var NanoAlert =           NGY2Tools.NanoAlert;
    var NanoConsoleLog =      NGY2Tools.NanoConsoleLog;

    
    /** @function initiateGallery2 */
    this.initiateGallery2 = function( element, params ) {

      // GLOBAL OPTIONS
      G.O =               params;
      // Base element
      G.$E.base =         jQuery(element);
      G.baseEltID =       G.$E.base.attr('id');
      if( G.baseEltID == undefined ) {
        // set a default ID to the root container
        G.baseEltID='my_nanogallery';
        G.$E.base.attr('id', G.baseEltID)
      }
      G.O.$markup =       [];
      DefineVariables();
      SetPolyFills();
      BuildSkeleton();
      SetGlobalEvents();
      
      // check if only one specific album will be used
      var albumToDisplay=G.O.album;
      if( albumToDisplay == '' && G.O.photoset != '' ) {
        albumToDisplay=G.O.photoset;
      }
      if( albumToDisplay != '' ) {
        G.O.displayBreadcrumb=false;    // no breadcrumb since only 1 album
        if( albumToDisplay.toUpperCase() != 'NONE' ) {
          // open specific album
        
          var p=albumToDisplay.indexOf('&authkey=');
          if( p == -1 ) {
            p=albumToDisplay.indexOf('?authkey=');
          }
          if( p > 0 ) {
            // privat album with authkey
            G.O.locationHash=false;   // disable hash location for hidden/privat albums --> impossible to handle
            var albumID=albumToDisplay.substring(0,p);
            var opt=albumToDisplay.substring(p);
            if( opt.indexOf('Gv1sRg') == -1 ) {
              opt='&authkey=Gv1sRg'+opt.substring(9);
            }
            var newItem=NGY2Item.New( G, '', '', albumID, '-1', 'album' );
            newItem.authkey=opt;
            DisplayAlbum('-1', albumID);
          }
          else {
            if( G.O.kind == "nano_photos_provider2") {
              if( albumToDisplay == decodeURIComponent(albumToDisplay)) {
                // album ID must be encoded
                albumToDisplay=encodeURIComponent(albumToDisplay);
                G.O.album=albumToDisplay;
              }
            }
            var nItm=NGY2Item.New( G, '', '', albumToDisplay, '-1', 'album' );
            DisplayAlbum('-1', albumToDisplay);
          }
          return;
        }
      }
      
      // use full content
      // add base album
      var itm=NGY2Item.New( G, G.i18nTranslations.breadcrumbHome, '', '0', '-1', 'album' );

      processStartOptions();
      

    }


    /** @function processStartOptions */
    function processStartOptions() {

      // open image or album
      // 1. load hidden albums
      // 1. check if location hash set (deep linking)
      // 2. check openOnStart parameter
      // 3. open root album (ID=-1)

      // hidden/private albums are loaded on plugin start
      if( G.albumListHidden.length > 0 ) {
        jQuery.nanogallery2['data_'+G.O.kind](G, 'GetHiddenAlbums', G.albumListHidden, processStartOptionsPart2);
        return;
      }
      
      if( !ProcessLocationHash() ) {
        processStartOptionsPart2();
      }
    }

    /** @function processStartOptionsPart2 */
    function processStartOptionsPart2() {
  
      // Check location hash + start parameters -> determine what to do on start
      // openOnStart parameter
      if( G.O.openOnStart != '' ) {
        var IDs=parseIDs(G.O.openOnStart);
        if( IDs.imageID != '0' ) {
          DisplayPhoto(IDs.imageID, IDs.albumID);
        }
        else {
          DisplayAlbum('-1', IDs.albumID);
        }
      }
      else {
        // open root album (ID = -1)
        DisplayAlbum('-1', 0);
      }
    }
    
    // Parse string to extract albumID and imageID (format albumID/imageID)
    function parseIDs( IDs ) {
      var r={ albumID: '0', imageID: '0' };
      
      var t=IDs.split('/');
      if( t.length > 0 ) {
        r.albumID=t[0];
        if( t.length > 1 ) {
          r.imageID=t[1];
        }
      }
      return r;
    }
    

    /** @function DisplayAlbum */
    function DisplayAlbum( imageID, albumID ) {

      // close viewer if already displayed
      if( G.VOM.viewerDisplayed ) {
        CloseInternalViewer(null);
      }
    
      // set current navigation level (l1 or lN)
      var albumIdx=NGY2Item.GetIdx(G, albumID);
      if( albumIdx == 0 ) {
        G.GOM.curNavLevel='l1';
      }
      else {
        G.GOM.curNavLevel='lN';
      }
      G.galleryResizeEventEnabled=false;

      if( albumIdx == -1 ) {
        NGY2Item.New( G, '', '', albumID, '0', 'album' );    // create empty album
        albumIdx=G.I.length-1;
      }
    
      if( !G.I[albumIdx].contentIsLoaded ) {
        // get content of the album if not already loaded
        AlbumGetContent( albumID, DisplayAlbum, imageID, albumID );
        return;
      }
    
      ThumbnailSelectionClear();
    
      G.GOM.pagination.currentPage=0;
      SetLocationHash( albumID, '' );

      GalleryRender( albumIdx );
    
    }


    //----- manage the bottom area of the gallery -> "pagination" or "more button"
    function GalleryBottomManage() {

      switch( G.galleryDisplayMode.Get() ) {
        case 'PAGINATION':
          if( G.layout.support.rows && G.galleryMaxRows.Get() > 0 ) {
            ManagePagination( G.GOM.albumIdx );
          }
          break;
        case 'MOREBUTTON':
          G.$E.conTnBottom.off('click');
          var nb=G.GOM.items.length-G.GOM.itemsDisplayed;
          if( nb == 0 ) {
            G.$E.conTnBottom.empty();
          }
          else {
            G.$E.conTnBottom.html('<div class="nGY2GalleryMoreButton"><div class="nGY2GalleryMoreButtonAnnotation">+'+nb+' ' + G.O.icons.galleryMoreButton +'</div></div>');
            G.$E.conTnBottom.on('click', function(e) {
              G.GOM.displayedMoreSteps++;
              GalleryResize();
            });
          }
          break;
        case 'FULLCONTENT':
        default:
          break;
      }
    }
    
    
    // add one album/folder to the breadcrumb
    function breadcrumbAdd( albumIdx ) {

      var ic='';
      if( !G.O.breadcrumbHideIcons ) {
        ic=G.O.icons.breadcrumbAlbum;
        if( albumIdx == 0 ) {
          ic=G.O.icons.breadcrumbHome;
        }
      }
      var $newDiv =jQuery('<div class="oneItem">'+ic + G.I[albumIdx].title+'</div>').appendTo(G.GOM.navigationBar.$newContent.find('.nGY2Breadcrumb'));
      if( G.O.breadcrumbOnlyCurrentLevel ) {
        // link to parent folder (only 1 level is displayed in the breadcrumb)
        if( albumIdx == 0 ) {
          // no parent level -> stay on current one
          jQuery($newDiv).data('albumID','0');
        }
        else {
          jQuery($newDiv).data('albumID',G.I[albumIdx].albumID);
        }
      }
      else {
        // link to current folder
        jQuery($newDiv).data('albumID',G.I[albumIdx].GetID());
      }
      $newDiv.click(function() {
        var cAlbumID=jQuery(this).data('albumID');
        DisplayAlbum('-1', cAlbumID);
        return;
      });
    }

    // add one separator to breadcrumb
    function breadcrumbAddSeparator( lastAlbumID ) {
      var $newSep=jQuery('<div class="oneItem">'+(G.O.RTL ? G.O.icons.breadcrumbSeparatorRtl : G.O.icons.breadcrumbSeparator)+'</div>').appendTo(G.GOM.navigationBar.$newContent.find('.nGY2Breadcrumb'));
      jQuery($newSep).data('albumIdx',lastAlbumID);
      $newSep.click(function() {
        var sepAlbumIdx=jQuery(this).data('albumIdx');
        DisplayAlbum('-1', G.I[sepAlbumIdx].GetID());
        return;
      });
    }

    
    
    // Manage the gallery toolbar (breadcrumb + tag filter)
    function GalleryNavigationBar( albumIdx ) {

      // new navigation bar items are not build in the DOM, but in memory
      G.GOM.navigationBar.$newContent=jQuery('<div class="nGY2Navigationbar"></div>');

      //-- manage breadcrumb
      if( G.O.displayBreadcrumb == true && !G.O.thumbnailAlbumDisplayImage) {
        // retrieve new folder level
        var newLevel = 0,
        lstItems=[];
        if( albumIdx != 0 ) {
          var l=G.I.length,
          parentID=0;
          
          lstItems.push(albumIdx);
          var curIdx=albumIdx;
          newLevel++;
          
          while( G.I[curIdx].albumID != 0 && G.I[curIdx].albumID != -1) {
            for(var i=1; i < l; i++ ) {
              if( G.I[i].GetID() == G.I[curIdx].albumID ) {
                curIdx=i;
                lstItems.push(curIdx);
                newLevel++;
                break;
              }
            }
          }
        }
        
        // build breadcrumb
        if( !(G.O.breadcrumbAutoHideTopLevel && newLevel == 0) ) {
          BreadcrumbBuild( lstItems );
        }
      }

      
      //-- manage tag filters
      if( G.galleryFilterTags.Get() != false ) {
        var nTags=G.I[albumIdx].albumTagList.length;
        if( nTags > 0 ) {
          for(var i=0; i < nTags; i++ ) {
            var s=G.I[albumIdx].albumTagList[i];
            var ic=G.O.icons.navigationFilterUnselected;
            var tagClass='Unselected';
            if( jQuery.inArray(s, G.I[albumIdx].albumTagListSel) >= 0 ) {
              tagClass='Selected';
              ic=G.O.icons.navigationFilterSelected;
            }
            var $newTag=jQuery('<div class="nGY2NavigationbarItem nGY2NavFilter'+tagClass+'">'+ic+' '+s+'</div>').appendTo(G.GOM.navigationBar.$newContent);
            $newTag.click(function() {
              var $this=jQuery(this);
              var tag=$this.text().replace(/^\s*|\s*$/, '');  //trim trailing/leading whitespace
              // if( $this.hasClass('oneTagUnselected') ){
              if( $this.hasClass('nGY2NavFilterUnselected') ){
                G.I[albumIdx].albumTagListSel.push(tag);
              }
              else {
                var tidx=jQuery.inArray(tag,G.I[albumIdx].albumTagListSel);
                if( tidx != -1 ) {
                  G.I[albumIdx].albumTagListSel.splice(tidx,1);
                }
              }
              $this.toggleClass('nGY2NavFilters-oneTagUnselected nGY2NavFilters-oneTagSelected');
              DisplayAlbum('-1', G.I[albumIdx].GetID());
            });
          }
          var $newClearFilter=jQuery('<div class="nGY2NavigationbarItem nGY2NavFilterSelectAll">'+G.O.icons.navigationFilterSelectedAll+'</div>').appendTo(G.GOM.navigationBar.$newContent);
          $newClearFilter.click(function() {
            var nTags=G.I[albumIdx].albumTagList.length;
            G.I[albumIdx].albumTagListSel=[];
            for(var i=0; i <nTags; i++ ) {
              var s=G.I[albumIdx].albumTagList[i];
              G.I[albumIdx].albumTagListSel.push(s);
            }
            DisplayAlbum('-1', G.I[albumIdx].GetID());
          });
        }
      }

    }
    
    function BreadcrumbBuild(lstItems) {

      jQuery('<div class="nGY2NavigationbarItem nGY2Breadcrumb"></div>').appendTo(G.GOM.navigationBar.$newContent);
      
      if( G.O.breadcrumbOnlyCurrentLevel ) {
        // display only 1 separator and the current folder level
        if( lstItems.length == 0 ) {
          breadcrumbAdd(0);
        }
        else {
          var last=lstItems.length-1;
          if( lstItems.length == 1 ) {
            breadcrumbAddSeparator(0);    // root level
          }
          else {
            breadcrumbAddSeparator(lstItems[0]);
          }
          breadcrumbAdd(lstItems[0]);
        }
      }
      else {
        // display the full breadcrum (full folder levels including root level)
        breadcrumbAdd(0);
        if( lstItems.length > 0 ) {
          breadcrumbAddSeparator(0);
          for(var i=lstItems.length-1; i>=0 ; i-- ) {
            breadcrumbAdd(lstItems[i]);
            if( i > 0 ) {
              breadcrumbAddSeparator(lstItems[i-1]);
            }
          }
        }
      }
    
    }
    

    // Display pagination
    function ManagePagination( albumIdx ) {

      G.$E.conTnBottom.children().remove();

      if( G.GOM.items.length == 0 ) { return; }   // no thumbnail to display

      // calculate the number of pages
      var nbPages=Math.ceil((G.GOM.items[G.GOM.items.length-1].row+1)/G.galleryMaxRows.Get());

      // only one page -> do not display pagination
      if( nbPages == 1 ) { return; }

      // check if current page still exist (for example after a resize)
      if( G.GOM.pagination.currentPage > (nbPages-1) ) {
        G.GOM.pagination.currentPage=nbPages-1;
      }
      
      GalleryRenderGetInterval();
      // nothing to display --> exit
      if( G.GOM.displayInterval.len == 0 ) { return; }
      
      // display "previous"
      if( G.O.galleryPaginationMode == 'NUMBERS' && G.GOM.pagination.currentPage > 0 ) {
        var $eltPrev=jQuery('<div class="nGY2PaginationPrev">'+G.O.icons.paginationPrevious+'</div>').appendTo(G.$E.conTnBottom);
        $eltPrev.click(function(e) {
          paginationPreviousPage();
        });
      }

      var firstPage=0;
      var lastPage=nbPages;
      if( G.O.galleryPaginationMode != 'NUMBERS' ) {
        // no 'previous'/'next' and no max number of pagination items
        firstPage=0;
      }
      else {
        // display pagination numbers and previous/next
        var vp=G.O.paginationVisiblePages;
        var numberOfPagesToDisplay=G.O.paginationVisiblePages;
        if( numberOfPagesToDisplay >= nbPages ) {
          firstPage=0;
        }
        else {
          // we have more pages than we want to display
          var nbBeforeAfter=0;
          if( isOdd(numberOfPagesToDisplay) ) {
            nbBeforeAfter=(numberOfPagesToDisplay+1)/2;
          }
          else {
            nbBeforeAfter=numberOfPagesToDisplay/2;
          }
          
          if( G.GOM.pagination.currentPage < nbBeforeAfter ) {
            firstPage=0;
            lastPage=numberOfPagesToDisplay-1;
            if( lastPage > nbPages ) {
              lastPage=nbPages-1;
            }
          }
          else {
            firstPage=G.GOM.pagination.currentPage-nbBeforeAfter;
            lastPage=firstPage+numberOfPagesToDisplay;
            if( lastPage > nbPages ) {
              lastPage=nbPages-1;
            }
          }
          
          if( (lastPage - firstPage) < numberOfPagesToDisplay ) {
            firstPage=lastPage-numberOfPagesToDisplay;
            if( firstPage < 0 ) {
              firstPage=0;
            }
          }

        }
      }

      // render pagination items
      for(var i=firstPage; i < lastPage; i++ ) {
        var c='';
        var p='';

        switch( G.O.galleryPaginationMode ) {
          case 'NUMBERS':
            c='nGY2paginationItem';
            p=i+1;
            break;
          case 'DOTS':
            c='nGY2paginationDot';
            break;
          case 'RECTANGLES':
            c='nGY2paginationRectangle';
            break;
        }
        if( i == G.GOM.pagination.currentPage ) {
          c+='CurrentPage';
        }

        var elt$=jQuery('<div class="'+c+'">'+p+'</div>').appendTo(G.$E.conTnBottom);
        elt$.data('pageNumber', i );
        elt$.click(function(e) {
          G.GOM.pagination.currentPage=jQuery(this).data('pageNumber');
          $("html, body").animate({ scrollTop: 0 }, "slow");
          TriggerCustomEvent('pageChanged');
          GalleryDisplay( true );
        });

      }

      // display "next"
      if( G.O.galleryPaginationMode == 'NUMBERS' && (G.GOM.pagination.currentPage+1) < nbPages ) {
        var $eltNext=jQuery('<div class="nGY2PaginationNext">'+G.O.icons.paginationNext+'</div>').appendTo(G.$E.conTnBottom);
        $eltNext.click(function(e) {
          paginationNextPage();
        });
      }

    }
    function isOdd(num) { return (num % 2) == 1;}
    
    // pagination - next page
    function paginationNextPage() {
      var aIdx=G.GOM.albumIdx,
      n1=0;
      ThumbnailHoverOutAll();
      
      // pagination - max lines per page mode
      if( G.galleryMaxRows.Get() > 0 ) {
        // number of pages
        n1=(G.GOM.items[G.GOM.items.length-1].row+1)/G.galleryMaxRows.Get();
      }
      var n2=Math.ceil(n1);
      var pn=G.GOM.pagination.currentPage;
      if( pn < (n2-1) ) {
        pn++;
      }
      else {
        pn=0;
      }
      
      G.GOM.pagination.currentPage = pn;
      $("html, body").animate({ scrollTop: 0 }, "slow");
      TriggerCustomEvent('pageChanged');
      GalleryDisplay( true );
    }
    
    // pagination - previous page
    function paginationPreviousPage() {
      // var aIdx=G.$E.conTnBottom.data('galleryIdx'),
      var aIdx=G.GOM.albumIdx,
      n1=0;

      ThumbnailHoverOutAll();
      
      // pagination - max lines per page mode
      if( G.galleryMaxRows.Get() > 0 ) {
        // number of pages
        n1=(G.GOM.items[G.GOM.items.length-1].row+1)/G.galleryMaxRows.Get();
      }
      var n2=Math.ceil(n1);
      
      // var pn=G.$E.conTnBottom.data('currentPageNumber');
      var pn=G.GOM.pagination.currentPage;
      if( pn > 0 ) {
        pn--;
      }
      else {
        pn=n2-1;
      }

      G.GOM.pagination.currentPage = pn;
      $("html, body").animate({ scrollTop: 0 }, "slow");
      TriggerCustomEvent('pageChanged');
      GalleryDisplay( true );
    }

    // retrieve the from/to intervall for gallery thumbnail render
    function GalleryRenderGetInterval() {
      G.GOM.displayInterval.from=0;
      G.GOM.displayInterval.len=G.I.length;
      
      switch( G.galleryDisplayMode.Get() ) {
        case 'PAGINATION':
          if( G.layout.support.rows ) {
            var nbTn=G.GOM.items.length;
            var firstRow=G.GOM.pagination.currentPage * G.galleryMaxRows.Get();
            var lastRow=firstRow+G.galleryMaxRows.Get();
            var firstTn=-1;
            G.GOM.displayInterval.len=0;
            for( var i=0; i < nbTn ; i++ ) {
              var curTn=G.GOM.items[i];
              if( curTn.row >= firstRow && curTn.row < lastRow ) {
                if( firstTn == -1 ) {
                  G.GOM.displayInterval.from=i;
                  firstTn=i;
                }
                G.GOM.displayInterval.len++;
              }
            }
          }
          break;
        case 'MOREBUTTON':
          if( G.layout.support.rows ) {
            var nbTn=G.GOM.items.length;
            var lastRow=G.O.galleryDisplayMoreStep * (G.GOM.displayedMoreSteps+1);
            G.GOM.displayInterval.len=0;
            for( var i=0; i < nbTn ; i++ ) {
              var curTn=G.GOM.items[i];
              if( curTn.row < lastRow ) {
                G.GOM.displayInterval.len++;
              }
            }
          }
          break;
        case 'ROWS':
          if( G.layout.support.rows ) {
            var nbTn=G.GOM.items.length;
            var lastRow=G.galleryMaxRows.Get();
            if( G.galleryLastRowFull.Get() && G.GOM.lastFullRow != -1 ) {
              if( lastRow > G.GOM.lastFullRow+1) {
                lastRow=G.GOM.lastFullRow+1;
              }
            }
            G.GOM.displayInterval.len=0;
            for( var i=0; i < nbTn ; i++ ) {
              var curTn=G.GOM.items[i];
              if( curTn.row < lastRow ) {
                G.GOM.displayInterval.len++;
              }
            }
          }
          break;
        default:
        case 'FULLCONTENT':
        if( G.layout.support.rows && G.galleryLastRowFull.Get() && G.GOM.lastFullRow != -1 ) {
            var nbTn=G.GOM.items.length;
            var lastRow=G.GOM.lastFullRow+1;
            G.GOM.displayInterval.len=0;
            for( var i=0; i < nbTn ; i++ ) {
              var curTn=G.GOM.items[i];
              if( curTn.row < lastRow ) {
                G.GOM.displayInterval.len++;
              }
            }
          }
          break;
      }
    }
    
    
    // RENDER THE GALLERY
    function GalleryRender( albumIdx ) {

      TriggerCustomEvent('galleryRenderStart');
      if( G.O.fnGalleryRenderStart !== null ) {
        if( typeof G.O.fnGalleryRenderStart == 'function' ) {
          G.O.fnGalleryRenderStart(albumIdx);
        }
        else {
          // defined in markup
          window[G.O.fnGalleryRenderStart](albumIdx);
        }
      }

      G.layout.SetEngine();
      G.galleryResizeEventEnabled=false;
      G.GOM.albumIdx = -1;
      G.GOM.lastDisplayedIdx = -1;

      // pagination
      if( G.$E.conTnBottom !== undefined ) {
        // G.$E.conTnBottom.children().remove();
        G.$E.conTnBottom.empty();
      }

      // navigation toolbar (breadcrumb + tag filters)
      GalleryNavigationBar(albumIdx);
      
      if( G.GOM.firstDisplay ) {
        G.GOM.firstDisplay=false;
        // GalleryRenderPart1( albumIdx );
        setTimeout( function() { GalleryRenderPart1( albumIdx )}, G.O.galleryRenderDelay);
      }
      else {
        var hideNavigationBar=false;
        if( G.GOM.navigationBar.$newContent.children().length == 0 ) {
          hideNavigationBar=true;
        }

        // hide everything
        var tweenable = new NGTweenable();
        tweenable.tween({
          from:         { 'opacity': 1 },
          to:           { 'opacity': 0 },
          duration:     200,
          easing:       'easeInQuart',
          attachment:   { h: hideNavigationBar },
          step:         function (state, att) {
            G.$E.conTnParent.css({'opacity': state.opacity });
            if( att.h ) {
              G.$E.conNavigationBar.css({ 'opacity': state.opacity });
            }
          },
          finish:       function (state, att) {
            G.$E.conTnParent.css({'opacity': 0});
            if( att.h ) {
              G.$E.conNavigationBar.css({ 'opacity': 0, 'display': 'none' });
            }
            // scroll to top of the gallery if needed
            var wp=getViewport();
            var galleryOTop=G.$E.base.offset().top;
            if( galleryOTop < wp.t ) {
              jQuery('html, body').animate({scrollTop: galleryOTop}, 200);
            }
            GalleryRenderPart1( albumIdx );
          }
        });
      }
    }


    function GalleryRenderPart1( albumIdx ) {
      // display new navigation bar
      var oldN=G.$E.conNavigationBar.children().length;
      G.$E.conNavigationBar.empty();
      G.GOM.navigationBar.$newContent.children().clone(true,true).appendTo(G.$E.conNavigationBar);
      if( G.$E.conNavigationBar.children().length > 0 && oldN == 0 ) {
        G.$E.conNavigationBar.css({ 'opacity': 0, 'display': 'block' });
        var tweenable = new NGTweenable();
        tweenable.tween({
          from:     { 'opacity': 0 },
          to:       { 'opacity': 1 },
          duration: 200,
          easing:   'easeInQuart',
          step:     function (state, att) {
            G.$E.conNavigationBar.css({ 'opacity': state.opacity });
          },
          finish:   function (state, att) {
            G.$E.conNavigationBar.css({ 'opacity': 1 });
            // display gallery
            GalleryRenderPart2( albumIdx );
          }
        });
      }
      else {
        // display gallery
        GalleryRenderPart2( albumIdx );
      }

    }
    
    // Gallery render part 2 -> remove all thumbnails
    function GalleryRenderPart2(albumIdx) {
      G.GOM.lastZIndex = parseInt(G.$E.base.css('z-index'));
      if( isNaN(G.GOM.lastZIndex) ) {
        G.GOM.lastZIndex=0;
      }
      G.$E.conTnParent.css({'opacity': 0 });
      G.$E.conTn.off().empty();
      var l=G.I.length;
      for( var i=0; i < l ; i++ ) {
        // reset each item
        var item=G.I[i];
        item.hovered=false;
        item.$elt=null;
        item.$Elts=[];
        item.eltTransform=[];
        item.eltFilter=[];
        item.width=0;
        item.height=0;
        item.left=0;
        item.top=0;
        item.resizedContentWidth=0;
        item.resizedContentHeight=0;
        item.thumbnailImgRevealed=false;
      }

      if( G.CSStransformName == null ) {
        G.$E.conTn.css( 'left' , '0px');
      }
      else {
        G.$E.conTn.css( G.CSStransformName , 'translateX('+0+'px)');
      }
      
      G.$E.conTnParent.css({ left: 0, opacity: 1 });

      GalleryRenderPart3(albumIdx);

    }
    
    // Gallery render part 2 -> start building the new gallery
    function GalleryRenderPart3(albumIdx) {
      var d=new Date();      
      
      G.GOM.items = [];
      G.GOM.displayedMoreSteps=0;
      // retrieve annotation height      
      var annotationHeight = 0;
      if( G.O.thumbnailLabel.get('position') == 'onBottom' ) {
        // retrieve height each time because size can change depending on thumbnail's settings
        annotationHeight=ThumbnailGetAnnotationHeight();
        G.tn.labelHeight[G.GOM.curNavLevel]=annotationHeight;
      }
      else {
        G.tn.labelHeight[G.GOM.curNavLevel]=0;
      }
      G.GOM.albumIdx=albumIdx;

      TriggerCustomEvent('galleryRenderEnd');
      if( G.O.fnGalleryRenderEnd !== null ) {
        if( typeof G.O.fnGalleryRenderEnd == 'function' ) {
          G.O.fnGalleryRenderEnd(albumIdx);
        }
        else {
          // defined in markup
          window[G.O.fnGalleryRenderEnd](albumIdx);
        }
      }
      
      // Step 1: populate GOM
      if( GalleryPopulateGOM() ) {

        // step 2: calculate layout
        GallerySetLayout();

        // step 3: display gallery
        GalleryAppear();
        GalleryDisplay( false );
        G.galleryResizeEventEnabled=true;
      }
      else {
        G.galleryResizeEventEnabled=true;
      }
      
      if( G.O.debugMode ) { console.log('GalleryRenderPart3: '+ (new Date()-d)); }

    }
    
    
    // Resize the gallery
    function GalleryResize( GOMidx ) {
      var d=new Date();
      G.galleryResizeEventEnabled=false;
      if( GallerySetLayout( GOMidx ) == false ) {
        G.galleryResizeEventEnabled=true;
        if( G.O.debugMode ) { console.log('GalleryResize1: '+ (new Date()-d)); }
        return;
      }
      if( G.O.debugMode ) { console.log('GalleryResizeSetLayout: '+ (new Date()-d)); }

      GalleryDisplay( false );

      if( G.O.debugMode ) { console.log('GalleryResizeFull: '+ (new Date()-d)); }
    }
    
    
    
    // copy items (album content) to GOM
    function GalleryPopulateGOM() {
      
      var preloadImages='';
      var imageSizeRequested=false;
      var albumID=G.I[G.GOM.albumIdx].GetID();
      var l=G.I.length;
      var cnt=0;

      for( var idx=0; idx < l; idx++ ) {
        var item=G.I[idx];
        // check album
        if( item.isToDisplay(albumID) ) {
        var w=item.thumbImg().width;
          var h=item.thumbImg().height;
          // if unknown image size and layout is not grid --> we need to retrieve the size of the images
          if( G.layout.prerequisite.imageSize && ( w == 0 || h == 0) ) {
          // if( true ) {
            imageSizeRequested=true;
            preloadImages+='<img src="'+item.thumbImg().src+'" data-idx="'+cnt+'" data-albumidx="'+G.GOM.albumIdx+'">';
          }
          
          // set default size if required
          if( h == 0 ) {
            h=G.tn.defaultSize.getHeight();
          }
          if( w == 0 ) {
            w=G.tn.defaultSize.getWidth();
          }
          var tn=new GTn(idx, w, h);
          G.GOM.items.push(tn);
          cnt++;
        }
      }

      TriggerCustomEvent('galleryObjectModelBuilt');
      if( G.O.fnGalleryObjectModelBuilt !== null ) {
        if( typeof G.O.fnGalleryObjectModelBuilt == 'function' ) {
          G.O.fnGalleryObjectModelBuilt();
        }
        else {
          // defined in markup
          window[G.O.fnGalleryObjectModelBuilt]();
        }
      }
      
      if( imageSizeRequested ) {
        // preload images to retrieve their size and then resize the gallery (=GallerySetLayout()+ GalleryDisplay())
        var $newImg=jQuery(preloadImages);
        var gi_imgLoad = ngimagesLoaded( $newImg );
        $newImg=null;
        gi_imgLoad.on( 'progress', function( instance, image ) {
        
          if( image.isLoaded ) {
            var idx=image.img.getAttribute('data-idx');
            var albumIdx=image.img.getAttribute('data-albumidx');
            if( albumIdx == G.GOM.albumIdx ) {
              // ignore event if not on current album
              var curTn=G.GOM.items[idx];
              curTn.imageWidth=image.img.naturalWidth;
              curTn.imageHeight=image.img.naturalHeight;
              var item=G.I[curTn.thumbnailIdx];
              item.thumbs.width[G.GOM.curNavLevel][G.GOM.curWidth]=curTn.imageWidth;
              item.thumbs.height[G.GOM.curNavLevel][G.GOM.curWidth]=curTn.imageHeight;
 
              if( G.layout.engine == 'GRID' && G.tn.opt.Get('crop') === true && item.$getElt('.nGY2GThumbnailImg') !== null ) {
                // special case (GRID + cropped thumbnails) -> just reposition the image in the thumbnail
                if( item.thumbImg().height > item.thumbImg().width ) {
                  // portrait
                  item.$getElt('.nGY2GThumbnailImg').css({ width: G.tn.settings.getW()+'px' });
                }
                else {
                  // paysage

                  // step 1: adjust height
                  var r2=G.tn.settings.getH()/item.thumbImg().height;
                  
                  var newH= G.tn.settings.getH();
                  var newW= item.thumbImg().width*r2;
                  
                  // step 2: check if width needs to be adjusted
                  if( newW >= G.tn.settings.getW() ) {
                    // no adjustement
                    var d=(item.thumbImg().width*r2-G.tn.settings.getW()) / 2;
                    item.$getElt('.nGY2GThumbnailImg').css({ height: G.tn.settings.getH()+'px',left: d+'px' });
                  }
                  else {
                    // yes, adjust width
                    // after scaling to adjust the height, the width is too narrow => upscale again to fit width
                    var rW=G.tn.settings.getW()/item.thumbImg().width;
                    var w=item.thumbImg().width*rW;
                    item.$getElt('.nGY2GThumbnailImg').css({ width: w+'px' });
                  }
                }
              }

              // resize the gallery
              G.GalleryResizeThrottled();
              
              // set the retrieved size to all levels with same configuration  
              var object=item.thumbs.width.l1;
              for (var property in object) {
                if (object.hasOwnProperty(property)) {
                  if( property != G.GOM.curWidth ) {
                    if( G.tn.settings.width.l1[property] == G.tn.settings.getW() && G.tn.settings.height.l1[property] == G.tn.settings.getH() ) {
                      item.thumbs.width.l1[property]=curTn.imageWidth;
                      item.thumbs.height.l1[property]=curTn.imageHeight;
                    }
                  }
                }
              }
              object=item.thumbs.width.lN;
              for (var property in object) {
                if (object.hasOwnProperty(property)) {
                  if( property != G.GOM.curWidth ) {
                    if( G.tn.settings.width.lN[property] == G.tn.settings.getW() && G.tn.settings.height.lN[property] == G.tn.settings.getH() ) {
                      item.thumbs.width.lN[property]=curTn.imageWidth;
                      item.thumbs.height.lN[property]=curTn.imageHeight;
                    }
                  }
                }
              }
            }
          }
        });
        G.galleryResizeEventEnabled=true;
        return false;
      }
      else {
        return true;
      }
      
    }
    
    //----- Calculate the layout of the thumbnails
    function GallerySetLayout( GOMidx ) {
      var r = true;
      // available area width
      var areaWidth=G.$E.conTnParent.width();
      G.GOM.displayArea={ width:0, height:0 };

      switch( G.layout.engine ) {
        case 'JUSTIFIED':
          r= GallerySetLayoutWidthtAuto( areaWidth, GOMidx );
          break;
        case 'CASCADING':
          r= GallerySetLayoutHeightAuto( areaWidth, GOMidx );
          break;
        case 'GRID':
        default:
          r= GallerySetLayoutGrid( areaWidth, GOMidx );
          break;
      }
      
      TriggerCustomEvent('galleryLayoutApplied');
      if( G.O.fnGalleryLayoutApplied !== null ) {
        if( typeof G.O.fnGalleryLayoutApplied == 'function' ) {
          G.O.fnGalleryLayoutApplied();
        }
        else {
          // defined in markup
          window[G.O.fnGalleryLayoutApplied]();
        }
      }
      return r;

    }
    
    
    //----- CASCADING LAYOUT
    function GallerySetLayoutHeightAuto( areaWidth, GOMidx ) {
      var areaW=G.$E.conTnParent.width(),
      curCol =        0,
      curRow =        0,
      colHeight =     [],
      maxCol =        NbThumbnailsPerRow(areaWidth),
      gutterWidth =   0,
      gutterHeight =  G.tn.opt.Get('gutterHeight');

      var tnWidth =   G.tn.defaultSize.getOuterWidth();
      var nbTn =      G.GOM.items.length;

      if( G.O.thumbnailAlignment == 'justified' ) {
        maxCol=Math.min(maxCol,nbTn);
        gutterWidth=( maxCol == 1 ? 0 : (areaWidth-(maxCol*tnWidth))/(maxCol-1) );
      }
      else {
        gutterWidth=G.tn.opt.Get('gutterWidth');
      }

      curRow=0;
      curCol=0;

      var borderWidth=G.tn.borderWidth*2;
      var borderHeight=G.tn.borderHeight*2;

      G.GOM.lastFullRow=-1;   // feature disabled

      // loop to position the thumbnails
      for( var i=0; i < nbTn ; i++ ) {
        var curTn=G.GOM.items[i];
        if( curTn.imageHeight > 0 && curTn.imageWidth > 0 ) {
          var curPosX=0,
          curPosY=0;
          var imageRatio=curTn.imageHeight/curTn.imageWidth;
          curTn.resizedContentWidth=tnWidth-borderWidth;
          curTn.resizedContentHeight=curTn.resizedContentWidth*imageRatio;

          curTn.height=curTn.resizedContentHeight+borderHeight+G.tn.labelHeight.get();
          curTn.width=tnWidth;
          curTn.row=0;
          
          if( curRow == 0 ) {
            // first row
            curPosX=curCol*(tnWidth+gutterWidth);
            colHeight[curCol]=curTn.height+gutterHeight;
            
            curCol++;
            if( curCol >= maxCol ) {
              curCol=0;
              curRow++;
            }
          }
          else {
            var c=0,
            minColHeight=colHeight[0];
            for( var j=1; j<maxCol; j++) {
              if( (colHeight[j]+5) < minColHeight ) {     // +5 --> threshold
                minColHeight=colHeight[j];
                c=j;
                //break;
              }
            }
            curPosY=colHeight[c];
            curPosX=c*(tnWidth+gutterWidth);
            colHeight[c]=curPosY+curTn.height+gutterHeight;
          }

          var x=curPosX;
          if( G.O.RTL) {
            x=w-curPosX-tnWidth;
          }

          curTn.left=x;
          curTn.top=curPosY;
        }
      }

      G.GOM.displayArea.width=maxCol*(tnWidth+gutterWidth)-gutterWidth;
      return true;
    }
    
    
    //----- JUSTIFIED LAYOUT
    function GallerySetLayoutWidthtAuto( areaWidth, GOMidx ) {
      var curWidth=               0,
      lastPosX=                   0,
      curPosY=                    0,
      rowLastItem=                [],
      rowNum=                     0,
      rowHeight=                  [],
      bNewRow=                    false,
      cnt=                        0,
      gutterWidth=                G.tn.opt.Get('gutterWidth'),
      gutterHeight=               G.tn.opt.Get('gutterHeight');
      // by grief-of-these-days
      var maxRowHeightVertical=   0; // max height of a row with vertical thumbs
      var maxRowHeightHorizontal= 0; // max height of a row with horizontal thumbs
      var rowHasVertical=         false; // current row has vertical thumbs
      var rowHasHorizontal=       false; // current row has horizontal thumbs

      var tnHeight=G.tn.defaultSize.getOuterHeight();
      var borderWidth=G.tn.borderWidth*2;
      var borderHeight=G.tn.borderHeight*2;
      var nbTnInCurrRow=1;
      var nbTn=G.GOM.items.length;

      // first loop --> retrieve each row image height
      for( var i=0; i < nbTn ; i++ ) {
        var curTn=G.GOM.items[i];
        if( curTn.imageWidth > 0 ) {
          var imageRatio=curTn.imageWidth/curTn.imageHeight;
          var imageWidth=Math.floor(tnHeight*imageRatio);

          if( bNewRow ) {
            bNewRow=false;
            rowNum++;
            curWidth=0;
            rowHasVertical=false;
            rowHasHorizontal=false;
            nbTnInCurrRow=1;
          }
          // by grief-of-these-days
          if( curTn.imageHeight > curTn.imageWidth ) {
            rowHasVertical = true;
          }
          else {
            rowHasHorizontal = true;
          }
          
          if( (curWidth + gutterWidth + imageWidth) < (areaWidth - (nbTnInCurrRow*borderWidth)) ) {
            // enough place left in the current row
            curWidth+=imageWidth+gutterWidth;
            rowHeight[rowNum]=tnHeight;
            
            // prevent incomplete row from being heigher than the previous ones.
            // by grief-of-these-days
            var rowHeightLimit=Math.max(rowHasVertical ? maxRowHeightVertical : 0, rowHasHorizontal ? maxRowHeightHorizontal : 0);
            if( rowHeightLimit > 0 ) {
              rowHeight[rowNum]=Math.min(rowHeight[rowNum],rowHeightLimit);
            }
            
            rowLastItem[rowNum]=i;
          }
          else {
            // new row after current item --> we need to adujet the row height to have enough space for the current thumbnail
            curWidth+=gutterWidth+imageWidth;
            var ratio=(areaWidth-nbTnInCurrRow*borderWidth) / curWidth;
            var rH=Math.floor(tnHeight*ratio);
            rowHeight[rowNum]=rH;
            
            // save the max row height for each thumb orientation.
            // by grief-of-these-days
            if( rowHasVertical ) {
              maxRowHeightVertical=Math.max(maxRowHeightVertical,rH);
            }
            if( rowHasHorizontal ) {
              maxRowHeightHorizontal=Math.max(maxRowHeightHorizontal,rH);
            }
            
            rowLastItem[rowNum]=i;
            bNewRow=true;
          }
          cnt++;
          nbTnInCurrRow++;
        }
      }

      rowNum=0;
      curPosY=0;
      lastPosX=0;
      cnt=0;
      
      G.GOM.lastFullRow=0;    // display at leat 1 row (even if not full)
      
      // second loop --> calculate each thumbnail size
      for( var i=0; i < nbTn ; i++ ) {
        var curTn=G.GOM.items[i];
        if( curTn.imageWidth > 0 ) {
          var imageRatio=curTn.imageWidth/curTn.imageHeight;
          var imageWidth=Math.floor(imageRatio*rowHeight[rowNum]); // border is already NOT included

          if( i == rowLastItem[rowNum] ) {
            // row last item --> adjust image width because of rounding problems
            if( rowLastItem.length != (rowNum+1) ) {
              // last item in current row -> use the full remaining width
              imageWidth=areaWidth-lastPosX-borderWidth;
            }
            else {
              // very last item (on the last row)
              if( (lastPosX + gutterWidth + imageWidth + borderWidth ) > areaWidth ) {
                // reduce size if image is wider as the remaining space
                imageWidth=areaWidth-lastPosX-borderWidth;
              }
            }
          }
          
          var rh=parseInt(rowHeight[rowNum]);
          imageWidth=parseInt(imageWidth);

          // thumbnail image size
          curTn.resizedContentWidth=imageWidth;
          curTn.resizedContentHeight=rh;
          // thumbnail position and size
          curTn.width=imageWidth+borderWidth;
          curTn.height=rh+G.tn.labelHeight.get()+borderHeight;
          curTn.row=rowNum;

          curTn.top=curPosY;
          var x=lastPosX;
          if( G.O.RTL) {
            x=areaWidth - lastPosX - curTn.width ;
          }
          curTn.left=x;

          lastPosX+=curTn.width+gutterWidth;

          if( i == rowLastItem[rowNum] ) {
            // start a new row
            curPosY+=curTn.height+gutterHeight;
            G.GOM.lastFullRow=rowNum-1;
            rowNum++;
            lastPosX=0;
          }
          cnt++;
        }
        else {
          return false;
        }
      }
      
      var newTop=0;
      if( typeof GOMidx !== 'undefined' ) {
        // gallery hover effect
        if( G.GOM.albumIdx != -1 ) {
          var hoveredTn=G.GOM.items[GOMidx];
          var item=G.I[hoveredTn.thumbnailIdx];
          
          // hovered thumbnail
          hoveredTn.width+=40;
          hoveredTn.height+=40;
          // todo : left
          
          for( var i=0; i < nbTn ; i++ ) {
            var curTn=G.GOM.items[i];
            if( curTn.imageWidth > 0 ) {
              if( curTn.row == hoveredTn.row ) {
                // hovered row
                newTop=40;
                if( hoveredTn.thumbnailIdx != curTn.thumbnailIdx ) {
                  // not hovered thumbnail
                  // curTn.resizedContentWidth+=10;
                  // curTn.resizedContentHeight+=20;
                  // curTn.width+=10;
                  curTn.top+=30;
                  curTn.width-=20;
                  curTn.height-=20;
                }
              }
              else {
                // not hovered row
                if( curTn.row == 0 ) {
                  // first row
                }
                else {
                  curTn.top+=newTop;
                }
              }
            }
          }
        }
        
      }
      
      G.GOM.displayArea.width=areaWidth;
      return true;
    }    
    

    //----- GRID LAYOUT
    function GallerySetLayoutGrid( areaWidth ) {
      var curPosX=      0,
      curPosY=          0,   
      gutterWidth=      0,
      gutterHeight=     G.tn.opt.Get('gutterHeight'),
      maxCol=           NbThumbnailsPerRow(areaWidth),
      w=                0,
      cols=             [],
      curCol=           0,
      newAreaWidth =    areaWidth,
      tnWidth=          G.tn.defaultSize.getOuterWidth(),
      tnHeight=         G.tn.defaultSize.getOuterHeight()+G.tn.labelHeight.get();
      var nbTn=         G.GOM.items.length;
      
      // retrieve gutter width
      if( G.O.thumbnailAlignment == 'justified' ) {
        maxCol=Math.min(maxCol,nbTn);
        gutterWidth=(maxCol==1?0:(areaWidth-(maxCol*tnWidth))/(maxCol-1));
      }
      else {
        gutterWidth=G.tn.opt.Get('gutterWidth');
      }

      if( G.O.RTL ) {
        // first loop to retrieve the real used width of the area
        for( var i= 0 ; i < nbTn ; i++ ) {
          if( curPosY != 0 ) {
            break;
          }
          else {
            curPosX=curCol*(tnWidth+gutterWidth);
            cols[curCol]=curPosX;
            w=curPosX;
          }
          
          curCol++;
          if( curCol >= maxCol ){
            curCol=0;
            curPosY+=tnHeight+gutterHeight;
          }
        }
        newAreaWidth=w+tnWidth;
        curPosY=0;
        curCol=0;
      }
      
      G.GOM.lastFullRow=0;    // display at leat 1 row (even if not full)
      var lastPosY=0;
      var row=0;
      for( var i=0; i < nbTn ; i++ ) {
        if( curPosY == 0 ) {
          curPosX=curCol*(tnWidth+gutterWidth)
          cols[curCol]=curPosX;
          w=curPosX + tnWidth;
        }
        else {
          curPosX=cols[curCol];
        }

        var x=curPosX;
        if( G.O.RTL ) {
          x=parseInt(newAreaWidth)-curPosX-tnWidth;
        }
        
        // MANDATORY : set thumbnail position AND size
        var curTn=G.GOM.items[i];
        curTn.top=curPosY;
        curTn.left=x;
        curTn.height=tnHeight;
        curTn.width=tnWidth;
        curTn.row=row;
        lastPosY=curPosY;

        curCol++;
        if( curCol >= maxCol ){
          curCol=0;
          curPosY+=tnHeight+gutterHeight;
          G.GOM.lastFullRow=row;
          row++;
        }
      }
      G.GOM.displayArea.width=w;
      return true;
    }


    //----- Display the thumbnails according to the calculated layout
    function GalleryDisplay( forceTransition ) {

      if( G.CSStransformName == null ) {
        G.$E.conTn.css( 'left' , '0px');
      }
      else {
        G.$E.conTn.css( G.CSStransformName , 'translateX('+0+'px)');
      }

      var nbTn=G.GOM.items.length;
      G.GOM.itemsDisplayed=0;
      var threshold = 50;
      var cnt=0;    // counter for delay between each thumbnail display
      
      var vp=getViewport();
      G.GOM.cache.viewport=vp;

      var containerOffset=G.$E.conTnParent.offset();
      G.GOM.cache.containerOffset=containerOffset;

      GalleryRenderGetInterval();
      
      for( var i=0; i < nbTn ; i++ ) {
        var curTn=G.GOM.items[i];
        if( i >= G.GOM.displayInterval.from && cnt < G.GOM.displayInterval.len ) {
          curTn.inDisplayArea=true;
          if( forceTransition ) {
            curTn.neverDisplayed=true;
          }
          G.GOM.itemsDisplayed++;
          cnt++;
        }
        else{
          curTn.inDisplayArea=false;
        }
      }

      // bottom of the gallery (pagination, more button...)
      GalleryBottomManage();

      var tnToDisplay = [];
      var tnToReDisplay = [];
      
      G.GOM.clipArea.top=-1;
      cnt=0;
      var lastTnIdx=-1;
      G.GOM.clipArea.height=0;
      // NOTE: loop always the whole GOM.items --> in case an already displayed thumbnail needs to be removed
      for( var i=0; i < nbTn ; i++ ) {
        var curTn=G.GOM.items[i];
        if( curTn.inDisplayArea ) {
          if( G.GOM.clipArea.top == - 1 ) {
            G.GOM.clipArea.top=curTn.top;
          }
          G.GOM.clipArea.height=Math.max(G.GOM.clipArea.height, curTn.top-G.GOM.clipArea.top+curTn.height);
        
          if( curTn.neverDisplayed ) {
            // thumbnail is not displayed -> check if in viewport to display or not
            var top=containerOffset.top+(curTn.top-G.GOM.clipArea.top);
            // var left=containerOffset.left+curTn.left;
            if( (top+curTn.height) >= (vp.t-threshold) && top <= (vp.t+vp.h+threshold) ) {
              // build thumbnail
              var item=G.I[curTn.thumbnailIdx];
              if( item.$elt == null ) {
                ThumbnailBuild( item, curTn.thumbnailIdx, i, (i+1)==nbTn );
              }
              tnToDisplay.push({idx:i, delay:cnt});
              cnt++;
            }
          }
          else {
            tnToReDisplay.push({idx:i, delay:0});
          }
          // G.GOM.itemsDisplayed++;
          lastTnIdx=i;
        }
        else {
          curTn.displayed=false;
          var item=G.I[curTn.thumbnailIdx];
          if( item.$elt != null ){
            item.$elt.css({ opacity: 0, display: 'none' });
          }
        }
      }

      var areaWidth=G.$E.conTnParent.width();

      // set gallery area really used size
      // if( G.GOM.displayArea.width != G.GOM.displayAreaLast.width || G.GOM.displayArea.height != G.GOM.displayAreaLast.height ) {
      if( G.GOM.displayArea.width != G.GOM.displayAreaLast.width || G.GOM.clipArea.height != G.GOM.displayAreaLast.height ) {
        G.$E.conTn.width(G.GOM.displayArea.width).height(G.GOM.clipArea.height);
        G.GOM.displayAreaLast.width=G.GOM.displayArea.width;
        G.GOM.displayAreaLast.height=G.GOM.clipArea.height;
        // G.GOM.displayAreaLast.height=G.GOM.displayArea.height-G.GOM.clipArea.top;
      }

      if( areaWidth != G.$E.conTnParent.width() ) {
        // gallery area width changed since layout calculation (for example when a scrollbar appeared)
        // so we need re-calculate the layout before displaying the thumbnails
        GallerySetLayout();
        GalleryDisplay( forceTransition );
      }

      // counter of not displayed images (is displayed on the last thumbnail)
      if( G.layout.support.rows ) {
        if( G.galleryDisplayMode.Get() == 'ROWS' || (G.galleryDisplayMode.Get() == 'FULLCONTENT' && G.galleryLastRowFull.Get() && G.GOM.lastFullRow != -1) ){
          if( lastTnIdx < (nbTn-1) ) {
            G.GOM.lastDisplayedIdxNew=lastTnIdx;
          }
          else {
            G.GOM.lastDisplayedIdxNew=-1;
          }
          // remove last displayed counter
          if( G.GOM.lastDisplayedIdx != -1 ) {
            var item=G.I[G.GOM.items[G.GOM.lastDisplayedIdx].thumbnailIdx];
            item.$getElt('.nGY2GThumbnailIconsFullThumbnail').html('');
          }
        }
      }

      
      // batch set position (and display animation) to all thumbnails
      // first display newly built thumbnails
      var nbBuild=tnToDisplay.length;
      for( var i=0; i < nbBuild ; i++ ) {
        // ThumbnailSetPosition(tnToDisplay[i].idx, tnToDisplay[i].delay+10);
        ThumbnailSetPosition(tnToDisplay[i].idx, i);
      }
      // then re-position already displayed thumbnails
      var n=tnToReDisplay.length;
      for( var i=0; i < n ; i++ ) {
        // ThumbnailSetPosition(tnToReDisplay[i].idx, nbBuild+1);
        ThumbnailSetPosition(tnToReDisplay[i].idx, i);
      }

      if( G.tn.opt.Get('displayTransition') == 'NONE' ) {
        G.galleryResizeEventEnabled=true;
      }
      else {
        setTimeout(function() {
          // change value after the end of the display transistion of the newly built thumbnails
          G.galleryResizeEventEnabled=true;
        }, nbBuild * G.tn.opt.Get('displayInterval'));
      }
      
      // G.$E.base.trigger('galleryDisplayed.nanogallery2', new Event('galleryDisplayed.nanogallery2'));
      TriggerCustomEvent('galleryDisplayed');
    }
    
    
    // Thumbnail: set the new position
    function ThumbnailSetPosition( GOMidx, cnt ) {
      var newTop=   0;
      var curTn=    G.GOM.items[GOMidx];
      var idx=      G.GOM.items[GOMidx].thumbnailIdx;
      var item=     G.I[idx];
    
      if( curTn.neverDisplayed ) {
        // thumbnail is built but has never been displayed (=first display)
        var top=curTn.top-G.GOM.clipArea.top;
        if( G.tn.opt.Get('stacks') > 0 ) {
          // we have stacks -> do not display them here. They will be displayed at the end of the display animation
          item.$elt.last().css({ display: 'block'});
          item.$elt.css({ top: top , left: curTn.left });
        }
        else {
          item.$elt.css({ display: 'block', top: top , left: curTn.left });
        }
        newTop=top;
        
        // display the image of the thumbnail when fully loaded
        if( G.O.thumbnailWaitImageLoaded === true ) {
          var gi_imgLoad = ngimagesLoaded( item.$getElt('.nGY2TnImg') );
          gi_imgLoad.on( 'progress', function( instance, image ) {
            if( image.isLoaded ) {
              var idx=image.img.getAttribute('data-idx');
              var albumIdx=image.img.getAttribute('data-albumidx');
              if( albumIdx == G.GOM.albumIdx ) {
                // ignore event if not on current album
                G.I[idx].ThumbnailImageReveal();
              }
            }
          });
        }
        // display the thumbnail
        ThumbnailAppear(GOMidx, cnt);

        curTn.displayed=true;
        curTn.neverDisplayed=false;
      }
      else {
        var topOld=G.GOM.cache.containerOffset.top+item.top;
        var top=G.GOM.cache.containerOffset.top+(curTn.top-G.GOM.clipArea.top);
        newTop=curTn.top-G.GOM.clipArea.top;
        var vp=G.GOM.cache.viewport;
        if( G.O.thumbnailDisplayOutsideScreen || ( ( (topOld+curTn.height) >= (vp.t-vp.h) && topOld <= (vp.t+vp.h*2) ) ||
              ( (top+curTn.height) >= (vp.t-vp.h) && top <= (vp.t+vp.h*2) ) )  ) {
          // thumbnail positioned in enlarged viewport (viewport + 2 x viewport height)
          if( curTn.displayed ) {
            // thumbnail is displayed
            if( item.top != curTn.top || item.left != curTn.left ) {
              // set position
              if( G.O.galleryResizeAnimation == true ) {
                // with transition
                var tweenable = new NGTweenable();
                tweenable.tween({
                  from:       { top: item.top, left: item.left, height: item.height, width: item.width },
                  to:         { top: newTop, left: curTn.left, height: curTn.height, width: curTn.width },
                  attachment: { $e: item.$elt },
                  duration:   300,
                  delay:      cnt * G.tn.opt.Get('displayInterval'),
                  easing:     'easeOutQuart',
                  step:       function (state, att) {
                    att.$e.css(state);
                  },
                  finish:     function (state, att) {
                    att.$e.css(state);
                    this.dispose();
                  }
                });
              }
              else {
                // set position without transition
                // item.$elt.css({ top: curTn.top , left: curTn.left });
                item.$elt.css({ top: newTop , left: curTn.left });
              }
            }
          }
          else {
            // re-display thumbnail
            curTn.displayed=true;
            // item.$elt.css({ display: 'block', top: curTn.top , left: curTn.left, opacity:1 });
            item.$elt.css({ display: 'block', top: newTop, left: curTn.left, opacity: 1 });
            ThumbnailAppearFinish(item);
          }
        }
        else {
          // undisplay thumbnail if not in viewport+margin --> performance gain
          curTn.displayed=false;
          item.$elt.css({ display: 'none'});
        }
      }
      item.left=curTn.left;
      item.top=newTop;
      
      // set new size if changed
      if( item.width != curTn.width || item.height != curTn.height ) {
        item.$elt.css({ width: curTn.width , height: curTn.height });
        item.width=curTn.width;
        item.height=curTn.height;
        
        // if( curTn.resizedContentWidth > 0 ) {
        // resize also the content (=image)
        if( item.resizedContentWidth != curTn.resizedContentWidth || item.resizedContentHeight != curTn.resizedContentHeight ) {
          if( item.kind == 'albumUp' ) {
            // item.$getElt('.nGY2GThumbnailAlbumUp').css({'height': curTn.resizedContentHeight, 'width': curTn.resizedContentWidth});
          }
          else {
            item.$getElt('.nGY2GThumbnailImg').css({'height': curTn.resizedContentHeight, 'width': curTn.resizedContentWidth});
            item.$getElt('.nGY2GThumbnailImage').css({'height': curTn.resizedContentHeight, 'width': curTn.resizedContentWidth});
          }
          item.resizedContentWidth=curTn.resizedContentWidth;
          item.resizedContentHeight=curTn.resizedContentHeight;
        }
      }
      
      
      // add counter of remaining (not displayed) images 
      if( G.GOM.lastDisplayedIdxNew == GOMidx &&  G.layout.support.rows ) {
        if( (G.galleryDisplayMode.Get() == 'ROWS' && G.galleryMaxRows.Get() > 0) || (G.galleryDisplayMode.Get() == 'FULLCONTENT' && G.galleryLastRowFull.Get() && G.GOM.lastFullRow != -1) ){
          // number of items
          var nb=G.GOM.items.length - GOMidx -1;
          if( item.albumID != '0' && G.O.thumbnailLevelUp ) {
            nb--;
          }
        }
        if( G.O.thumbnailOpenImage && nb > 0 ) {
          item.$getElt('.nGY2GThumbnailIconsFullThumbnail').html('+'+nb);
        }
        G.GOM.lastDisplayedIdx=GOMidx;
      }

    }
   
    
    // Compute the height of the annotation part of a thumbnail (title+description, both single line)
    function ThumbnailGetAnnotationHeight() {
      var newElt= [],
      newEltIdx=  0;

      // if( G.O.thumbnailLabel.get('display') == false && G.tn.toolbar.getWidth(item) <= 0 ) {
      if( G.O.thumbnailLabel.get('display') == false  ) {
        return 0;
      }
      
      var desc='';
      if( G.O.thumbnailLabel.get('displayDescription') == true ) {
        desc='aAzZjJ';
      }

      // visibility set to hidden
      newElt[newEltIdx++] = '<div class="nGY2GThumbnail '+G.O.theme+'" style="display:block;visibility:hidden;position:absolute;top:-9999px;left:-9999px;" ><div class="nGY2GThumbnailSub">';
      if( G.O.thumbnailLabel.get('display') == true ) {
        // Labels: title and description
        newElt[newEltIdx++] = '  <div class="nGY2GThumbnailLabel" '+ G.tn.style.getLabel() +'>';
        newElt[newEltIdx++] = '    <div class="nGY2GThumbnailAlbumTitle" '+G.tn.style.getTitle()+'>aAzZjJ</div>';
        newElt[newEltIdx++] = '    <div class="nGY2GThumbnailDescription" '+G.tn.style.getDesc()+'>'+desc+'</div>';
        newElt[newEltIdx++] = '  </div>';
      }
      
      newElt[newEltIdx++]='</div></div>';
    
      var $newDiv = jQuery(newElt.join('')).appendTo(G.$E.conTn);
      var h = $newDiv.find('.nGY2GThumbnailLabel').outerHeight(true);
      $newDiv.remove();

      return h;
    }
    
    function ThumbnailBuildStacks () {
      var ns=G.tn.opt.Get('stacks');
      if( ns == 0 ) {
        return '';
      }
     
      var s='';
      for( var i=0; i<ns; i++ ) {
        s='<div class="nGY2GThumbnailStack " style="display:none;"></div>'+s;
      }
      return s;
    }
    
    //----- Build one UP thumbnail (=navigation thumbnail)
    function ThumbnailBuildAlbumpUp( item, idx, GOMidx ) {
      var newElt= [],
      newEltIdx=  0;
      
      newElt[newEltIdx++]=ThumbnailBuildStacks()+'<div class="nGY2GThumbnail" style="display:none;opacity:0;" >';
      newElt[newEltIdx++]='  <div class="nGY2GThumbnailSub">';

      var h=G.tn.defaultSize.getHeight(),
      w=G.tn.defaultSize.getWidth();

      newElt[newEltIdx++]='    <div class="nGY2GThumbnailImage" style="width:'+w+'px;height:'+h+'px;"><img class="nGY2GThumbnailImg" src="'+G.emptyGif+'" alt="" style="max-width:'+w+'px;max-height:'+h+'px;" ></div>';
      newElt[newEltIdx++]='    <div class="nGY2GThumbnailAlbumUp" style="width:'+w+'px;height:'+h+'px;">'+G.O.icons.thumbnailAlbumUp+'</div>';
      newElt[newEltIdx++]='  </div>';
      newElt[newEltIdx++]='</div>';
      
      var $newDiv =jQuery(newElt.join('')).appendTo(G.$E.conTn); //.animate({ opacity: 1},1000, 'swing');  //.show('slow'); //.fadeIn('slow').slideDown('slow');
      
      item.$elt=$newDiv;
      $newDiv.data('index',GOMidx);
      item.$getElt('.nGY2GThumbnailImg').data('index',GOMidx);
      
      return;
    }

    
    //----- Build one thumbnail
    function ThumbnailBuild( item, idx, GOMidx, lastOne ) {
      item.eltTransform=  [];
      item.eltFilter=     [];
      item.hoverInitDone= false;
      item.$Elts=         [];

      if( item.kind == 'albumUp' ) {
        ThumbnailBuildAlbumpUp( item, idx, GOMidx);
        return;
      }

      var newElt=[],
      newEltIdx=0;

      newElt[newEltIdx++]=ThumbnailBuildStacks()+'<div class="nGY2GThumbnail" style="display:none;opacity:0;"><div class="nGY2GThumbnailSub '+(G.O.thumbnailSelectable && item.selected?"nGY2GThumbnailSubSelected":"")+'">';
      
      var src=item.thumbImg().src,
      sTitle=getThumbnailTitle(item),
      sDesc=getTumbnailDescription(item);

      // dominant colorS (blurred preview image)
      var imgBlurred=G.emptyGif;
      if( item.imageDominantColors != null ) {
        imgBlurred=item.imageDominantColors;
      }
      // dominant color -> background color
      var bg=''
      if( item.imageDominantColor != null ) {
        bg='background:'+item.imageDominantColor+';';
      }
      
      var op='opacity:1;';
      if( G.O.thumbnailWaitImageLoaded == true ) {
        op='opacity:0;';
      }
      
      // image
      switch( G.layout.engine ) {
        case 'CASCADING':
          // fixed width
          newElt[newEltIdx++]='<div class="nGY2GThumbnailImage" style="width:'+G.tn.settings.getW()+'px;'+bg+'">';
          newElt[newEltIdx++]='  <img class="nGY2GThumbnailImg nGY2TnPreview" src="'+imgBlurred+'" style="max-width:'+G.tn.settings.getW()+'px;">';
          newElt[newEltIdx++]='  <img class="nGY2GThumbnailImg nGY2TnImg" src="'+src+'" alt="'+sTitle+'" style="max-width:'+G.tn.settings.getW()+'px;'+op+'" data-idx="'+idx+'" data-albumidx="'+G.GOM.albumIdx+'">';
          newElt[newEltIdx++]='</div>';
          break;
        case 'JUSTIFIED':
          // fixed height
          newElt[newEltIdx++]='<div class="nGY2GThumbnailImage" style="height:'+G.tn.settings.getH()+'px;'+bg+'">';
          newElt[newEltIdx++]='  <img class="nGY2GThumbnailImg nGY2TnPreview" src="'+imgBlurred+'" >';
          newElt[newEltIdx++]='  <img class="nGY2GThumbnailImg nGY2TnImg" src="'+src+'" alt="'+sTitle+'" style="'+op+'" data-idx="'+idx+'" data-albumidx="'+G.GOM.albumIdx+'">';
          newElt[newEltIdx++]='</div>';
          break;
        default:    // GRID
          // fixed width and height
          var imgSize='max-width:'+G.tn.settings.getW()+'px;max-height:'+G.tn.settings.getH()+'px;'
          var imgBWidth='';          
          
          if( G.tn.opt.Get('crop') == true && item.thumbImg().height > 0 && item.thumbImg().width > 0 ) {
            // crop images => no black border
            if( item.thumbImg().height > item.thumbImg().width ) {
              // portrait
              imgSize='width:'+G.tn.settings.getW()+'px;';
            }
            else {
              // paysage

              // step 1: adjust height
              var r2=G.tn.settings.getH()/item.thumbImg().height;
              
              var newH= G.tn.settings.getH();
              var newW= item.thumbImg().width*r2;
              
              // step 2: check if width needs to be adjusted
              if( newW >= G.tn.settings.getW() ) {
                // no adjustement
                var d=-(item.thumbImg().width*r2-G.tn.settings.getW()) / 2;
                imgSize='height:'+G.tn.settings.getH()+'px;left:'+d+'px;';
                imgBWidth='width:'+item.thumbImg().width+'px;';     // set the width of the blurred preview image
              }
              else {
                // yes, adjust width
                // after scaling to adjust the height, the width is too narrow => upscale again to fit width
                var rW=G.tn.settings.getW()/item.thumbImg().width;
                var w=item.thumbImg().width*rW;
                imgSize='width:'+w+'px;';
              }
            }
          }
          newElt[newEltIdx++]='<div class="nGY2GThumbnailImage" style="width:'+G.tn.settings.getW()+'px;height:'+G.tn.settings.getH()+'px;'+bg+'">';
          newElt[newEltIdx++]='  <img class="nGY2GThumbnailImg nGY2TnPreview" src="'+imgBlurred+'"  style="'+imgSize+imgBWidth+'">';
          newElt[newEltIdx++]='  <img class="nGY2GThumbnailImg nGY2TnImg" src="'+src+'" alt="'+sTitle+'" style="'+imgSize+op+'" data-idx="'+idx+'" data-albumidx="'+G.GOM.albumIdx+'" >';
          newElt[newEltIdx++]='</div>';
          break;
      }

      // layer for user customization purposes
      newElt[newEltIdx++]='<div class="nGY2GThumbnailCustomLayer"></div>';

      // annotation (=area for labels + icons)
      if( G.O.thumbnailLabel.get('display') == true ) {
        // Labels: title and description
        newElt[newEltIdx++]= '  <div class="nGY2GThumbnailLabel" '+ G.tn.style.getLabel(item) +'>';
        if( item.kind == 'album' ) {
          newElt[newEltIdx++]= '    <div class="nGY2GThumbnailTitle nGY2GThumbnailAlbumTitle" '+G.tn.style.getTitle()+'>'+G.O.icons.thumbnailAlbum + sTitle+'</div>';
        }
        else {
          newElt[newEltIdx++]= '    <div class="nGY2GThumbnailTitle nGY2GThumbnailImageTitle" '+G.tn.style.getTitle()+'>'+G.O.icons.thumbnailImage + sTitle+'</div>';
        }
        newElt[newEltIdx++]= '    <div class="nGY2GThumbnailDescription" '+G.tn.style.getDesc()+'>'+sDesc+'</div>';
        newElt[newEltIdx++]= '  </div>';
      }

      // Tool layer
      newElt[newEltIdx++]=ThumbnailBuildTools(item, lastOne);
      
      newElt[newEltIdx++]='</div>';
      newElt[newEltIdx++]='</div>';
      
      var $newDiv =jQuery(newElt.join('')).appendTo(G.$E.conTn);

      item.$elt=$newDiv;
      $newDiv.data('index',GOMidx);
      item.$getElt('.nGY2GThumbnailImg').data('index',GOMidx);

      
      // Custom init function
      if( G.O.fnThumbnailInit !== null ) {
        if( typeof G.O.fnThumbnailInit == 'function' ) {
          G.O.fnThumbnailInit($newDiv, item, GOMidx);
        }
        else {
          // defined in markup
          window[G.O.fnThumbnailInit]($newDiv, item, GOMidx);
        }
      }

      if( item.title != 'image gallery by nanogallery2 [build]' ) {
        ThumbnailOverInit(GOMidx);
      }
      
      return ;
    }

    
    // Thumbnail layer for tools (toolbars and counter)
    function ThumbnailBuildTools( item, lastThumbnail ) {
    
      // toolbars
      var tb=ThumbnailBuildToolbarOne(item, 'topLeft');
      tb+=ThumbnailBuildToolbarOne(item, 'topRight');
      tb+=ThumbnailBuildToolbarOne(item, 'bottomLeft');
      tb+=ThumbnailBuildToolbarOne(item, 'bottomRight');
      
      // counter of not displayed images
      tb+='<div class="nGY2GThumbnailIconsFullThumbnail"></div>';

      return tb;
    
    }
    
    function ThumbnailBuildToolbarOne( item, position ) {
      var toolbar = '';
      var tb =      G.tn.toolbar.get(item);
      var width =   { xs:0, sm:1, me:2, la:3, xl:4 };
      var cnt =     0;
      
      if( tb[position] != '' ) {
        var pos='top:0; right:0; text-align:right;';     // 'topRight' and default
        switch( position ) {
          case 'topLeft':
            pos='top:0; left:0; text-align:left;:';
            break;
          case 'bottomRight':
            pos='bottom:0; right:0; text-align:right;';
            break;
          case 'bottomLeft':
            pos='bottom:0; left:0; text-align:left;';
            break;
        }
        
        toolbar+= '  <ul class="nGY2GThumbnailIcons" style="'+pos+'">';
        
        var icons=tb[position].split(',');
        var nb=icons.length;
        for( var i=0; i<nb; i++ ) {
          var icon=icons[i].replace(/^\s*|\s*$/, '');   //trim trailing/leading whitespace

          var minWidth=icon.substring(0,2).toLowerCase();
          var tIcon=icon;
          var display=true;
          if( /xs|sm|me|la|xl/i.test(minWidth) ) {
            // check visbility (depending on screen width)
            if( width[minWidth] > width[G.GOM.curWidth] ) {
              display=false;
            }
            tIcon=icon.substring(2);
          }
          
          if( display ) {
            var sp=(i+1<nb ? '&nbsp;' :'');
            switch( tIcon ) {
              case 'COUNTER':
                if( item.kind == 'album' ) {
                  toolbar+= '    <li class="nGY2GThumbnailIcon" data-ngy2action="">';
                  toolbar+= '      <div class="nGY2GThumbnailIconImageCounter"></div>';
                  toolbar+= '      <div class="nGY2GThumbnailIconText">'+G.O.icons.thumbnailCounter+Math.max((item.getContentLength(false)),item.numberItems)+sp+'</div>';
                  toolbar+= '    </li>';
                  cnt++;
                }
                break;
              case 'COUNTER2':
                if( item.kind == 'album' ) {
                  toolbar+= '    <li class="nGY2GThumbnailIcon" data-ngy2action="">';
                  toolbar+= '      <div class="nGY2GThumbnailIconTextBadge">'+G.O.icons.thumbnailCounter+Math.max((item.getContentLength(false)),item.numberItems)+sp+'</div>';
                  toolbar+= '    </li>';
                  cnt++;
                }
                break;
              case 'SHARE':
                toolbar+= '    <li class="nGY2GThumbnailIcon" data-ngy2action="'+tIcon+'">';
                toolbar+= '      <div>'+G.O.icons.thumbnailShare+'</div>';
                //toolbar+= '      <div class="nGY2GThumbnailIconText">'+sp+'</div>';
                toolbar+= '    </li>';
                cnt++;
                break;
              case 'DOWNLOAD':
                toolbar+= '    <li class="nGY2GThumbnailIcon" data-ngy2action="'+tIcon+'">';
                toolbar+= '      <div>'+G.O.icons.thumbnailDownload+'</div>';
                toolbar+= '    </li>';
                cnt++;
                break;
              case 'INFO':
                toolbar+= '    <li class="nGY2GThumbnailIcon" data-ngy2action="'+tIcon+'">';
                toolbar+= '      <div>'+G.O.icons.thumbnailInfo+'</div>';
                toolbar+= '    </li>';
                cnt++;
                break;
              case 'CART':
                toolbar+= '    <li class="nGY2GThumbnailIcon" data-ngy2action="'+tIcon+'">';
                toolbar+= '      <div>'+G.O.icons.thumbnailCart+'</div>';
                toolbar+= '    </li>';
                cnt++;
                break;
              case 'DISPLAY':
                toolbar+= '    <li class="nGY2GThumbnailIcon" data-ngy2action="DISPLAY">';
                toolbar+= '      <div class="nGY2GThumbnailIconImageShare">'+G.O.icons.thumbnailDisplay+'</div>';
                toolbar+= '    </li>';
                cnt++;
                break;
              case 'CUSTOM1':
              case 'CUSTOM2':
              case 'CUSTOM3':
              case 'CUSTOM4':
              case 'CUSTOM5':
              case 'CUSTOM6':
              case 'CUSTOM7':
              case 'CUSTOM8':
              case 'CUSTOM9':
              case 'CUSTOM10':
                var cust = tIcon.replace('CUSTOM', '');
                toolbar+= '    <li class="nGY2GThumbnailIcon" data-ngy2action="'+tIcon.toLowerCase()+'">';
                toolbar+= '      <div class="nGY2GThumbnailIconImageShare">'+G.O.icons['thumbnailCustomTool'+cust]+'</div>';
                toolbar+= '    </li>';
                cnt++;
                break;
              case 'FEATURED':
                if( item.featured === true ) {
                  toolbar+= '    <li class="nGY2GThumbnailIcon" data-ngy2action="">';
                  toolbar+= '      <div class="nGY2GThumbnailIconImageFeatured">'+G.O.icons.thumbnailFeatured+'</div>';
                  toolbar+= '    </li>';
                  cnt++;
                }
                break;
              case 'SELECT':
                if( G.O.thumbnailSelectable == true ) {
                  toolbar+= '    <li class="nGY2GThumbnailIcon" data-ngy2action="TOGGLESELECT">';
                  if( item.selected === true ) {
                    toolbar+= '      <div class="nGY2GThumbnailIconImageSelect nGY2ThumbnailSelected">'+G.O.icons.thumbnailSelected+'</div>';
                  }
                  else {
                    toolbar+= '      <div class="nGY2GThumbnailIconImageSelect nGY2ThumbnailUnselected">'+G.O.icons.thumbnailUnselected+'</div>';
                  }
                  toolbar+= '    </li>';
                  cnt++;
                }
                break;
            }
          }
        }
        toolbar+= '  </ul>';
      }
      
      if( cnt > 0 ) {
        return toolbar;
      }
      else {
        return '';
      }
    }
    
    function getThumbnailTitle( item ) {
    
      var sTitle=item.title;
      if( G.O.thumbnailLabel.get('display') == true ) {
        if( sTitle === undefined || sTitle.length == 0 ) { sTitle='&nbsp;'; }

        if( G.i18nTranslations.thumbnailImageTitle != '' ) {
          sTitle=G.i18nTranslations.thumbnailImageTitle;
        }
        if( G.O.thumbnailLabel.get('titleMaxLength') > 3 && sTitle.length > G.O.thumbnailLabel.get('titleMaxLength') ){
          sTitle=sTitle.substring(0,G.O.thumbnailLabel.get('titleMaxLength'))+'...';
        }
      }
      
      return sTitle;
    }

    function getTumbnailDescription( item ) {
      var sDesc='';
      if( G.O.thumbnailLabel.get('displayDescription') == true ) { 
        if( item.kind == 'album' ) {
          if( G.i18nTranslations.thumbnailImageDescription != '' ) {
            sDesc=G.i18nTranslations.thumbnailAlbumDescription;
          }
          else {
            sDesc=item.description;
          }
        }
        else {
          if( G.i18nTranslations.thumbnailImageDescription != '' ) {
            sDesc=G.i18nTranslations.thumbnailImageDescription;
          }
          else {
            sDesc=item.description;
          }
        }
        if( G.O.thumbnailLabel.get('descriptionMaxLength') > 3 && sDesc.length > G.O.thumbnailLabel.get('descriptionMaxLength') ){
          sDesc=sDesc.substring(0,G.O.thumbnailLabel.get('descriptionMaxLength'))+'...';
        }
        if( sDesc.length == 0 ) {
          sDesc='&nbsp;';
        }
      }
      
      return sDesc;
    }

    
    
    // Retrieve the maximum number of thumbnails that fits in one row
    function NbThumbnailsPerRow(areaWidth) {
      var tnW=G.tn.defaultSize.getOuterWidth();
      
      var nbMaxTn=0;
      if( G.O.thumbnailAlignment == 'justified' ) {
        nbMaxTn=Math.floor((areaWidth)/(tnW));
      }
      else {
        nbMaxTn=Math.floor((areaWidth+G.tn.opt.Get('gutterWidth'))/(tnW+G.tn.opt.Get('gutterWidth')));
      }
      
      if(  G.O.maxItemsPerLine >0 && nbMaxTn >  G.O.maxItemsPerLine ) {
        nbMaxTn=G.O.maxItemsPerLine;
      }
      
      if( nbMaxTn < 1 ) { nbMaxTn=1; }
      
      return nbMaxTn
    }
  
    // Thumbnail display animation
    function ThumbnailAppear( n, cnt ) {
      var curTn=G.GOM.items[n];
      var item=G.I[G.GOM.items[n].thumbnailIdx];

    
      if( G.tn.opt.Get('displayTransition') == 'NONE' ) {
        item.$elt.css({ opacity: 1 });
        ThumbnailAppearFinish(item);
      }
      else {
        if( item.$elt == null ) { return; }
        var top=G.GOM.cache.containerOffset.top+(curTn.top-G.GOM.clipArea.top);
        var vp=G.GOM.cache.viewport;
        if( (top+(curTn.top-G.GOM.clipArea.top)) >= (vp.t-50) && top <= (vp.t+vp.h+50) ) {
          // display animation only if in the current viewport
          var delay=cnt*G.tn.opt.Get('displayInterval');
          if( G.tn.opt.Get('displayTransition') == 'CUSTOM' ) {
            if( G.GOM.curNavLevel == 'lN' ) {
              G.O.fnThumbnailDisplayEffect(item.$elt, item, n, delay);
            }
            else {
              G.O.fnThumbnailL1DisplayEffect(item.$elt, item, n, delay);
            }
          }
          else {
            ThumbnailDisplayAnim[G.tn.opt.Get('displayTransition')](item, delay);
          }
          return;
        }
        else {
          item.$elt.css({ opacity: 1 });
          ThumbnailAppearFinish(item);
        }
      }
    }
    
    
    // displays thumbnail stacks at the end of the display animation
    function ThumbnailAppearFinish( item ) {
    
      // add stacks
      var ns=G.tn.opt.Get('stacks');
      if( ns > 0 ) {
        // display stacks
        item.$elt.css({ display: 'block'});
        var o=0.9;
        // set stack opacity
        for( var i=ns-1; i>=0; i-- ) {
          item.$elt.eq(i).css('opacity', o);
          o=o-0.2;
        }

      }
    }
    


    var ThumbnailDisplayAnim = {
      RANDOMSCALE: function( item, delay ) {

        function randomIntFromInterval(min,max) {
          return Math.floor(Math.random()*(max-min+1)+min);
        }
        var scales=[0.95, 1, 1.05, 1.1];
        var zi=[1, 2, 3, 4];
        
        var r=randomIntFromInterval(0,3);
        while( r == G.GOM.lastRandomValue ) {
          r=randomIntFromInterval(0,3);
        }
        G.GOM.lastRandomValue=r;
        var f=scales[r];
        // item.$elt.css({ 'z-index': G.GOM.lastZIndex+zi[r], 'box-shadow': '-1px 2px 5px 1px rgba(0, 0, 0, 0.7)' });
        item.$elt.css({ 'z-index': G.GOM.lastZIndex+zi[r], 'box-shadow': '0px 0px 5px 3px rgba(0,0,0,0.74)' });
        
        var tweenable = new NGTweenable();
        tweenable.tween({
          from:         { scale: 0.5, opacity:0 },
          to:           { scale: f,   opacity:1 },
          attachment:   { $e:item.$elt, item: item, tw: tweenable },
          delay:        delay,
          duration:     G.tn.opt.Get('displayTransitionDuration'),
          easing:       { opacity: 'easeOutQuint', scale: G.tn.opt.Get('displayTransitionEasing') },
          step:         function (state, att) {
            if( att.item.$elt === null ) {  // the thumbnail may have been destroyed since the start of the animation
              att.tw.stop(false);
              return;
            }
            att.$e.css( G.CSStransformName , 'scale('+state.scale+')').css('opacity',state.opacity);
          },
          finish:       function (state, att) {
            if( att.item.$elt === null ) { return; }
            att.$e.css( G.CSStransformName , 'scale('+state.scale+')').css('opacity','');
            //att.$e.css( G.CSStransformName , '').css('opacity', '');
            ThumbnailAppearFinish(att.item);
          }
        });
      },
      
      SCALEUP: function( item, delay ) {
        var f=G.tn.opt.Get('displayTransitionStartVal');
        if( f == 0 ) { f=0.6; }   // default value

        var tweenable = new NGTweenable();
        tweenable.tween({
          from:         { scale: f, opacity:0 },
          to:           { scale: 1, opacity:1 },
          attachment:   { $e:item.$elt, item: item, tw: tweenable },
          delay:        delay,
          duration:     G.tn.opt.Get('displayTransitionDuration'),
          easing:       { opacity: 'easeOutQuint', scale: G.tn.opt.Get('displayTransitionEasing') },
          step:         function (state, att) {
            if( att.item.$elt === null ) {  // the thumbnail may have been destroyed since the start of the animation
              att.tw.stop(false);
              return;
            }
            att.$e.css( G.CSStransformName , 'scale('+state.scale+')').css('opacity',state.opacity);
          },
          finish:       function (state, att) {
            if( att.item.$elt === null ) { return; }
            att.$e.css( G.CSStransformName , '').css('opacity', '');
            ThumbnailAppearFinish(att.item);
          }
        });
      },
      
      SCALEDOWN: function( item, delay ) {
        var f=G.tn.opt.Get('displayTransitionStartVal');
        if( f == 0 ) { f=1.3; }   // default value
   
        var tweenable = new NGTweenable();
        tweenable.tween({
          from:         { 'scale': f, 'opacity':0 },
          to:           { 'scale': 1, 'opacity':1 },
          attachment:   { item: item, tw: tweenable },
          delay:        delay,
          duration:     G.tn.opt.Get('displayTransitionDuration'),
          easing:       { opacity: 'easeOutQuint', scale: G.tn.opt.Get('displayTransitionEasing') },
          step:         function (state, att) {
            if( att.item.$elt === null ) {  // the thumbnail may have been destroyed since the start of the animation
              att.tw.stop(false);
              return;
            }
            att.item.$elt.last().css('opacity', state.opacity);
            att.item.CSSTransformSet('.nGY2GThumbnail', 'scale', state.scale);
            att.item.CSSTransformApply('.nGY2GThumbnail');
          },
          finish:       function (state, att) {
            if( att.item.$elt === null ) { return; }
            att.item.$elt.last().css('opacity', '');
            att.item.CSSTransformSet('.nGY2GThumbnail', 'scale', state.scale);
            att.item.CSSTransformApply('.nGY2GThumbnail');
            ThumbnailAppearFinish(att.item);
          }
        });
      },
      
      SLIDEUP: function( item, delay ) {
        var f=G.tn.opt.Get('displayTransitionStartVal');
        if( f == 0 ) { f=50; }   // default value
        var tweenable = new NGTweenable();
        tweenable.tween({
          // from:         { 'opacity': 0, translateY: f, 'scale': 0.8  },
          // to:           { 'opacity': 1, translateY: 0, 'scale': 1 },
          from:         { 'opacity': 0, translateY: f },
          to:           { 'opacity': 1, translateY: 0 },
          attachment:   { item: item, tw: tweenable },
          delay:        delay,
          duration:     G.tn.opt.Get('displayTransitionDuration'),
          easing:       { opacity: 'easeOutQuint', scale: 'easeOutQuart', translateY: G.tn.opt.Get('displayTransitionEasing') },
          step:         function (state, att) {
            if( att.item.$elt === null ) {  // the thumbnail may have been destroyed since the start of the animation
              att.tw.stop(false);
              return;
            }
            att.item.$elt.css('opacity', state.opacity);
            att.item.CSSTransformSet('.nGY2GThumbnail', 'translateY', state.translateY+'px');
            // att.item.CSSTransformSet('.nGY2GThumbnail', 'scale', state.scale);
            att.item.CSSTransformApply('.nGY2GThumbnail');
          },
          finish:       function (state, att) {
            if( att.item.$elt === null ) { return; }
            this._step(state, att);
            att.item.$elt.css('opacity', '');
            ThumbnailAppearFinish(att.item);
          }
        });
      }, 
      
      SLIDEDOWN: function( item, delay ) {
        var f=G.tn.opt.Get('displayTransitionStartVal');
        if( f == 0 ) { f=-50; }   // default value
        var tweenable = new NGTweenable();
        tweenable.tween({
          // from:         { opacity: 0, translateY: f, scale: 0.8  },
          // to:           { opacity: 1, translateY: 0, scale: 1 },
          from:         { opacity: 0, translateY: f },
          to:           { opacity: 1, translateY: 0 },
          attachment:   { item: item, tw: tweenable },
          delay:        delay,
          duration:     G.tn.opt.Get('displayTransitionDuration'),
          easing:       { opacity: 'easeOutQuint', scale: 'easeOutQuart', translateY: G.tn.opt.Get('displayTransitionEasing') },
          step:         function (state, att) {
            if( att.item.$elt === null ) {  // the thumbnail may have been destroyed since the start of the animation
              att.tw.stop(false);
              return;
            }
            att.item.$elt.css('opacity', state.opacity);
            att.item.CSSTransformSet('.nGY2GThumbnail', 'translateY', state.translateY+'px');
            // att.item.CSSTransformSet('.nGY2GThumbnail', 'scale', state.scale); 
            att.item.CSSTransformApply('.nGY2GThumbnail');
          },
          finish:       function (state, att) {
            if( att.item.$elt === null ) { return; }
            this._step(state, att);
            att.item.$elt.css('opacity', '');
            ThumbnailAppearFinish(att.item);
          }
        });
      },

      FLIPUP: function( item, delay ) {
        var f=G.tn.opt.Get('displayTransitionStartVal');
        if( f == 0 ) { f=100; }   // default value
        var tweenable = new NGTweenable();
        tweenable.tween({
          // from:         { opacity: 0, translateX: f, rotateX: 45, scale: 0.8  },
          // to:           { opacity: 1, translateX: 0, rotateX: 0, scale: 1 },
          from:         { opacity: 0, translateX: f, rotateX: 45 },
          to:           { opacity: 1, translateX: 0, rotateX: 0  },
          attachment:   { item: item, tw: tweenable },
          delay:        delay,
          duration:     G.tn.opt.Get('displayTransitionDuration'),
          easing:       { opacity: 'easeOutQuint', scale: 'easeOutQuart', translateX: G.tn.opt.Get('displayTransitionEasing') },
          step:         function (state, att) {
            if( att.item.$elt === null ) {  // the thumbnail may have been destroyed since the start of the animation
              att.tw.stop(false);
              return;
            }
            att.item.$elt.css('opacity', state.opacity);
            att.item.CSSTransformSet('.nGY2GThumbnail', 'translateY', state.translateX+'px');
            att.item.CSSTransformSet('.nGY2GThumbnail', 'rotateX', state.rotateX+'deg');
            // att.item.CSSTransformSet('.nGY2GThumbnail', 'scale', state.scale);
            att.item.CSSTransformApply('.nGY2GThumbnail');
          },
          finish:       function (state, att) {
            if( att.item.$elt === null ) { return; }
            this._step(state, att);
            att.item.$elt.css('opacity', '');
            ThumbnailAppearFinish(att.item);
          }
        });
      },
      FLIPDOWN: function( item, delay ) {
        var f=G.tn.opt.Get('displayTransitionStartVal');
        if( f == 0 ) { f=-100; }   // default value
        var tweenable = new NGTweenable();
        tweenable.tween({
          // from:         { opacity: 0, translateX: f, rotateX: -45, scale: 0.8  },
          // to:           { opacity: 1, translateX: 0, rotateX: 0, scale: 1 },
          from:         { opacity: 0, translateX: f, rotateX: -45 },
          to:           { opacity: 1, translateX: 0, rotateX: 0 },
          attachment:   { item: item, tw: tweenable },
          delay:        delay,
          duration:     G.tn.opt.Get('displayTransitionDuration'),
          easing:       { opacity: 'easeOutQuint', scale:'easeOutQuart', translateX: G.tn.opt.Get('displayTransitionEasing')},
          step:         function (state, att) {
            if( att.item.$elt === null ) {  // the thumbnail may have been destroyed since the start of the animation
              att.tw.stop(false);
              return;
            }
            att.item.$elt.css('opacity', state.opacity);
            att.item.CSSTransformSet('.nGY2GThumbnail', 'translateY', state.translateX+'px');
            att.item.CSSTransformSet('.nGY2GThumbnail', 'rotateX', state.rotateX+'deg');
            // att.item.CSSTransformSet('.nGY2GThumbnail', 'scale', state.scale);
            att.item.CSSTransformApply('.nGY2GThumbnail');
          },
          finish:       function (state, att) {
            if( att.item.$elt === null ) { return; }
            this._step(state, att);
            att.item.$elt.css('opacity', '');
            ThumbnailAppearFinish(att.item);
          }
        });
      },
      
      SLIDEUP2: function( item, delay ) {
        var f=G.tn.opt.Get('displayTransitionStartVal');
        if( f == 0 ) { f=100; }   // default value
        var tweenable = new NGTweenable();
        tweenable.tween({
          // from:         { opacity: 0, translateY: f, rotateY: 40, scale: 0.8  },
          // to:           { opacity: 1, translateY: 0, rotateY: 0, scale: 1 },
          from:         { opacity: 0, translateY: f, rotateY: 40 },
          to:           { opacity: 1, translateY: 0, rotateY: 0  },
          attachment:   { item: item, tw: tweenable },
          delay:        delay,
          duration:     G.tn.opt.Get('displayTransitionDuration'),
          easing:       { opacity: 'easeOutQuint', scale:'easeOutQuart', translateX: G.tn.opt.Get('displayTransitionEasing') },
          step:         function (state, att) {
            if( att.item.$elt === null ) {  // the thumbnail may have been destroyed since the start of the animation
              att.tw.stop(false);
              return;
            }
            att.item.$elt.css('opacity', state.opacity);
            att.item.CSSTransformSet('.nGY2GThumbnail', 'translateY', state.translateY+'px');
            att.item.CSSTransformSet('.nGY2GThumbnail', 'rotateY', state.rotateY+'deg');
            // att.item.CSSTransformSet('.nGY2GThumbnail', 'scale', state.scale);
            att.item.CSSTransformApply('.nGY2GThumbnail');
          },
          finish:       function (state, att) {
            if( att.item.$elt === null ) { return; }
            this._step(state, att);
            att.item.$elt.css('opacity', '');
            ThumbnailAppearFinish(att.item);
          }
        });
      },
      SLIDEDOWN2: function( item, delay ) {
        var f=G.tn.opt.Get('displayTransitionStartVal');
        if( f == 0 ) { f=-100; }   // default value
        var tweenable = new NGTweenable();
        tweenable.tween({
          // from:         { opacity: 0, translateY: f, rotateY: 40, scale: 0.8  },
          // to:           { opacity: 1, translateY: 0, rotateY: 0, scale: 1 },
          from:         { opacity: 0, translateY: f, rotateY: 40 },
          to:           { opacity: 1, translateY: 0, rotateY: 0  },
          attachment:   { item: item, tw: tweenable },
          delay:        delay,
          duration:     G.tn.opt.Get('displayTransitionDuration'),
          easing:       { opacity: 'easeOutQuint', scale: 'easeOutQuart', translateY: G.tn.opt.Get('displayTransitionEasing') },
          step:         function (state, att) {
            if( att.item.$elt === null ) {  // the thumbnail may have been destroyed since the start of the animation
              att.tw.stop(false);
              return;
            }
            att.item.$elt.css('opacity', state.opacity);
            att.item.CSSTransformSet('.nGY2GThumbnail', 'translateY', state.translateY+'px');
            att.item.CSSTransformSet('.nGY2GThumbnail', 'rotateY', state.rotateY+'deg');
            // att.item.CSSTransformSet('.nGY2GThumbnail', 'scale', state.scale);
            att.item.CSSTransformApply('.nGY2GThumbnail');
          },
          finish:       function (state, att) {
            this._step(state, att);
            att.item.$elt.css('opacity', '');
            att.item.CSSTransformApply('.nGY2GThumbnail');
            ThumbnailAppearFinish(att.item);
          }
        });
      },
      SLIDERIGHT: function( item, delay ) {
        var f=G.tn.opt.Get('displayTransitionStartVal');
        if( f == 0 ) { f=-150; }   // default value
        var tweenable = new NGTweenable();
        tweenable.tween({
          from:         { opacity: 0, translateX: f, rotateZ: 10 },
          to:           { opacity: 1, translateX: 0, rotateZ: 0 },
          attachment:   { item: item, tw: tweenable },
          delay:        delay,
          duration:     G.tn.opt.Get('displayTransitionDuration'),
          easing:       { opacity: 'easeOutQuint', translateX: G.tn.opt.Get('displayTransitionEasing'), rotateZ:'easeOutQuart'},
          step:         function (state, att) {
            if( att.item.$elt === null ) {  // the thumbnail may have been destroyed since the start of the animation
              att.tw.stop(false);
              return;
            }
            att.item.$elt.css('opacity', state.opacity);
            att.item.CSSTransformSet('.nGY2GThumbnail', 'translateX', state.translateX+'px');
            att.item.CSSTransformSet('.nGY2GThumbnail', 'rotateZ', state.rotateZ+'deg');
            att.item.CSSTransformApply('.nGY2GThumbnail');
          },
          finish:       function (state, att) {
            if( att.item.$elt === null ) { return; }
            this._step(state, att);
            att.item.$elt.css('opacity', '');
            ThumbnailAppearFinish(att.item);
          }
        });
      },
      SLIDELEFT: function( item, delay ) {
        var f=G.tn.opt.Get('displayTransitionStartVal');
        if( f == 0 ) { f=150; }   // default value
        var tweenable = new NGTweenable();
        tweenable.tween({
          from:         { opacity: 0, translateX: f, rotateZ: -10 },
          to:           { opacity: 1, translateX: 0, rotateZ: 0 },
          attachment:   { item: item, tw: tweenable },
          delay:        delay,
          duration:     G.tn.opt.Get('displayTransitionDuration'),
          easing:       { opacity: 'easeOutQuint', translateX: G.tn.opt.Get('displayTransitionEasing'), rotateZ:'easeOutQuart'},
          step:         function (state, att) {
            if( att.item.$elt === null ) {  // the thumbnail may have been destroyed since the start of the animation
              att.tw.stop(false);
              return;
            }
            att.item.$elt.css('opacity', state.opacity);
            att.item.CSSTransformSet('.nGY2GThumbnail', 'translateX', state.translateX+'px');
            att.item.CSSTransformSet('.nGY2GThumbnail', 'rotateZ', state.rotateZ+'deg');
            att.item.CSSTransformApply('.nGY2GThumbnail');
          },
          finish:       function (state, att) {
            if( att.item.$elt === null ) { return; }
            this._step(state, att);
            att.item.$elt.css('opacity', '');
            ThumbnailAppearFinish(att.item);
          }
        });
      },

      FADEIN: function( item, delay ) {
        var tweenable = new NGTweenable();
        tweenable.tween({
          from:         { 'opacity': 0 },
          to:           { 'opacity': 1 },
          attachment:   { $e:item.$elt, item: item, tw: tweenable },
          delay:        delay,
          duration:     G.tn.opt.Get('displayTransitionDuration'),
          easing:       'easeInOutSine',
          step:         function (state, att) {
            if( att.item.$elt === null ) {  // the thumbnail may have been destroyed since the start of the animation
              att.tw.stop(false);
              return;
            }
            att.$e.css(state);
          },
          finish:       function (state, att) {
            if( att.item.$elt === null ) { return; }
            att.$e.css('opacity', '');
            // att.$e.css({'opacity':1 });
            ThumbnailAppearFinish(att.item);
          }
        });
      }
    }
    
    

    // ######################################
    // Gallery display animation
    
    function GalleryAppear() {
      
      // G.$E.conTnParent.css({ opacity: 1 });
      
      var d=G.galleryDisplayTransitionDuration.Get();
      switch( G.galleryDisplayTransition.Get() ){
        case 'ROTATEX':
          G.$E.base.css({ perspective: '1000px', 'perspective-origin': '50% 0%' });
          var tweenable = new NGTweenable();
          tweenable.tween({
            from:         { rotate: 50 },
            to:           { rotate: 0  },
            duration:     d,
            easing:       'easeOutCirc',
            step:         function (state, att) {
              G.$E.conTnParent.css( G.CSStransformName , 'rotateX('+state.rotate+'deg)');
            }
          });
          break;
        case 'SLIDEUP':
          var tweenable = new NGTweenable();
          tweenable.tween({
            from:         { y: 200 },
            to:           { y: 0  },
            duration:     d,
            easing:       'easeOutCirc',
            step:         function (state, att) {
              G.$E.conTnParent.css( G.CSStransformName , 'translateY('+state.y+'px)');
            }
          });
          break;
        case 'NONE':
        default:
          break;
      }


    }
    
    // ######################################
    // ##### THUMBNAIL HOVER MANAGEMENT #####
    // ######################################

    function ThumbnailOverInit( GOMidx ) {
      // Over init in 2 step:
      // 1) init with thumbnailBuildInit2 parameter
      // 2) init with the hover effect parameter
      
      
      var curTn=G.GOM.items[GOMidx];
      var item=G.I[curTn.thumbnailIdx];

      if( item.$elt == null ) { return; } // zombie
      
      if( G.O.fnThumbnailHoverInit !== null ) {
        if( typeof G.O.fnThumbnailHoverInit == 'function' ) {
          G.O.fnThumbnailHoverInit($e, item, GOMidx);
        }
        else {
          // defined in markup
          window[G.O.fnThumbnailHoverInit]($e, item, GOMidx);
        }
      }

      // build initialization
      var inits=G.tn.buildInit.get();
      for( var j=0; j<inits.length; j++) {
        switch( inits[j].property ) {
          case 'scale':
          case 'rotateX':
          case 'rotateY':
          case 'rotateZ':
          case 'translateX':
          case 'translateY':
          case 'translateZ':
            item.CSSTransformSet(inits[j].element, inits[j].property, inits[j].value);
            item.CSSTransformApply(inits[j].element);
            break;
          case 'blur':
          case 'brightness':
          case 'grayscale':
          case 'sepia':
          case 'contrast':
          case 'opacity':
          case 'saturate':
            item.CSSFilterSet(inits[j].element, inits[j].property, inits[j].value);
            item.CSSFilterApply(inits[j].element);
            break;
          default:
            var $t=item.$getElt(inits[j].element);
            $t.css( inits[j].property, inits[j].value );
            break;
        }
      }
      
      // hover
      var effects=G.tn.hoverEffects.get();
      for( var j=0; j<effects.length; j++) {
        if( effects[j].firstKeyframe === true ) {
          switch( effects[j].type ) {
            case 'scale':
            case 'rotateX':
            case 'rotateY':
            case 'rotateZ':
            case 'translateX':
            case 'translateY':
            case 'translateZ':
              item.CSSTransformSet(effects[j].element, effects[j].type, effects[j].from);
              item.CSSTransformApply(effects[j].element);
              break;
            case 'blur':
            case 'brightness':
            case 'grayscale':
            case 'sepia':
            case 'contrast':
            case 'opacity':
            case 'saturate':
              item.CSSFilterSet(effects[j].element, effects[j].type, effects[j].from);
              item.CSSFilterApply(effects[j].element);
              break;
            default:
              var $t=item.$getElt(effects[j].element);
              $t.css( effects[j].type, effects[j].from );
              break;
              
          }
        }
      }
      item.hoverInitDone=true;
    }

    function ThumbnailHoverReInitAll() {
      if( G.GOM.albumIdx == -1 ) { return; };
      var l=G.GOM.items.length;
      for( var i=0; i < l ; i++ ) {
        ThumbnailOverInit(i);
        // G.GOM.items[i].hovered=false;
        G.I[G.GOM.items[i].thumbnailIdx].hovered=false;
      }
    }


    function ThumbnailHover( GOMidx ) {
      if( G.GOM.albumIdx == -1 || !G.galleryResizeEventEnabled ) { return; };
      var curTn=G.GOM.items[GOMidx];
      var item=G.I[curTn.thumbnailIdx];
      if( item.kind == 'albumUp' ) { return; }

      if( item.$elt == null ) { return; }

      item.hovered=true;

      if( G.O.fnThumbnailHover !== null ) {
        if( typeof G.O.fnThumbnailHover == 'function' ) {
          G.O.fnThumbnailHover(item.$elt, item, GOMidx);
        }
        else {
          // defined in markup
          window[G.O.fnThumbnailHover](item.$elt, item, GOMidx);
        }
      }
      var effects=G.tn.hoverEffects.get();

      try {
        for( var j=0; j<effects.length; j++) {
          if( effects[j].hoverin === true ) {
            //item.animate( effects[j], j*10,  true );
            item.animate( effects[j], 0,  true );
          }
        }
        // effects on whole layout
        // GalleryResize( GOMidx );
      }
      catch (e) { 
        NanoAlert(G, 'error on hover: ' +e.message );
      }

    }

    function ThumbnailHoverOutAll() {
      if( G.GOM.albumIdx == -1 ) { return; };
      var l=G.GOM.items.length;
      for( var i=0; i < l ; i++ ) {
        if( G.GOM.items[i].inDisplayArea ) {
          ThumbnailHoverOut(i);
        }
        else {
          G.I[G.GOM.items[i].thumbnailIdx].hovered
        }
      }
    }

    
    function ThumbnailHoverOut( GOMidx ) {
      if( G.GOM.albumIdx == -1 || !G.galleryResizeEventEnabled ) { return; };
      var curTn=G.GOM.items[GOMidx];
      var item=G.I[curTn.thumbnailIdx];
      if( item.kind == 'albumUp' || !item.hovered ) { return; }
      item.hovered=false;
      if( item.$elt == null ) { return; }

      if( G.O.fnThumbnailHoverOut !== null ) {
        if( typeof G.O.fnThumbnailHoverOut == 'function' ) {
          G.O.fnThumbnailHoverOut(item.$elt, item, GOMidx);
        }
        else {
          // defined in markup
          window[G.O.fnThumbnailHoverOut](item.$elt, item, GOMidx);
        }
      }

      var effects=G.tn.hoverEffects.get();
      try {
        for( var j=0; j<effects.length; j++) {
          if( effects[j].hoverout === true ) {
            // item.animate( effects[j], j*10, false );
            item.animate( effects[j], 0, false );
          }
        }
        // effects on whole layout
        // GalleryResize( );
      }
      catch (e) { 
        NanoAlert(G, 'error on hoverOut: ' +e.message );
      }
      
    }
    

    /** @function DisplayPhoto */
    function DisplayPhoto( imageID, albumID ) {

      if( G.O.debugMode ) { console.log('#DisplayPhoto : '+  albumID +'-'+ imageID); }
      var albumIdx=NGY2Item.GetIdx(G, albumID);
      if( albumIdx == 0 ) {
        G.GOM.curNavLevel='l1';
      }
      else {
        G.GOM.curNavLevel='lN';
      }
      
      if( albumIdx == -1 ) {
        // get content of album on root level
        NGY2Item.New( G, '', '', albumID, '0', 'album' );    // create empty album
        albumIdx=G.I.length-1;
      }

      var imageIdx = NGY2Item.GetIdx(G, imageID);
      if( imageIdx == -1 ) {
        // get content of the album
        AlbumGetContent( albumID, DisplayPhoto, imageID, albumID );
        return;
      }
      
      if( G.O.debugMode ) { console.log('#DisplayPhoto : '+  imageIdx); }
     
      DisplayPhotoIdx(imageIdx);
    
    }


    // BETA -> NOT finished and not used at this time
    // Retrieve the title+description of ONE album
    function albumGetInfo( albumIdx, fnToCall ) {
      var url =   '';
      var kind =  'image';
      
      switch( G.O.kind ) {
        case 'json':
          // TODO
        case 'flickr':
          // TODO
        case 'picasa':
        case 'google':
        case 'google2':
        default:
          url = G.Google.url() + 'user/'+G.O.userID+'/albumid/'+G.I[albumIdx].GetID()+'?alt=json&&max-results=1&fields=title';
          break;
      }

      jQuery.ajaxSetup({ cache: false });
      jQuery.support.cors = true;
      
      var tId = setTimeout( function() {
        // workaround to handle JSONP (cross-domain) errors
        //PreloaderHide();
        NanoAlert(G, 'Could not retrieve AJAX data...');
      }, 60000 );
      jQuery.getJSON(url, function(data, status, xhr) {
        clearTimeout(tId);
        //PreloaderHide();
        
        fnToCall( G.I[albumIdx].GetID() );

      })
      .fail( function(jqxhr, textStatus, error) {
        clearTimeout(tId);
        //PreloaderHide();
        var err = textStatus + ', ' + error;
        NanoAlert('Could not retrieve ajax data: ' + err);
      });      
    
    }

    
    // function AlbumGetContent( albumIdx, fnToCall ) {
    function AlbumGetContent( albumID, fnToCall, fnParam1, fnParam2 ) {
      var url='';
      var kind='image';
      var albumIdx=NGY2Item.GetIdx(G, albumID);
      // var photoIdx=NGY2Item.GetIdx(G, photoID);
      
      switch( G.O.kind ) {
        // MARKUP / API
        case '':
          AlbumGetMarkupOrApi(fnToCall, fnParam1, fnParam2);
          break;
        // JSON, Flickr, Picasa, ...
        default:
          jQuery.nanogallery2['data_'+G.O.kind](G, 'AlbumGetContent', albumID, fnToCall, fnParam1, fnParam2 );
      }
      
    }
    
    
    function AlbumGetMarkupOrApi ( fnToCall, fnParam1, fnParam2 ) {
    
      if( G.O.items !== undefined && G.O.items !== null ) {
        // data defined as an object in an option parameter
        GetContentApiObject();
      }
      else {
        if( G.O.$markup.length > 0 ) {
          // data defined as markup (href elements)
          GetContentMarkup(G.O.$markup);
          G.O.$markup=[]  ;
        }
        else {
          NanoAlert(G, 'error: no image to process.');
          return;
        }
      }

      if( fnToCall !== null &&  fnToCall !== undefined) {
        fnToCall( fnParam1, fnParam2, null );
      }
    }
    
    function StartsWithProtocol ( path ) {
      path=path.toLowerCase();
      switch( path ) {
        case 'http://':
        case 'https://':
        case 'file://':
          return true;
          break;
      }
      return false;
    }
    
    function GetContentApiObject() {
      var foundAlbumID=false;
      
      G.I[0].contentIsLoaded=true;

      jQuery.each(G.O.items, function(i,item){
        
        var title='';
        title=GetI18nItem(item,'title');
        if( title === undefined ) { title=''; }
        
        var src='';
        if( item['src'+RetrieveCurWidth().toUpperCase()] !== undefined ) {
          src+=item['src'+RetrieveCurWidth().toUpperCase()];
        }
        else {
          src+=item.src;
        }
        if( !StartsWithProtocol(src) ) {
          src=G.O.itemsBaseURL + src;
        }

        var thumbsrc='';
        if( item.srct !== undefined && item.srct.length>0 ) {
          thumbsrc=item.srct;
        }
        else {
          thumbsrc=src;
        }
        if( !StartsWithProtocol(thumbsrc) ) {
          thumbsrc=G.O.itemsBaseURL + thumbsrc;
        }
        
        var thumbsrcX2='';
        if( item.srct2x !== undefined && item.srct2x.length>0 ) {
          thumbsrcX2=item.srct2x;
        }
        else {
          if( thumbsrc != '' ) {
            thumbsrcX2=thumbsrc;
          }
          else {
            thumbsrcX2=src;
          }
        }
        if( !StartsWithProtocol(thumbsrcX2) ) {
          thumbsrcX2=G.O.itemsBaseURL + thumbsrcX2;
        }

        if( G.O.thumbnailLabel.get('title') != '' ) {
          title=GetImageTitle(src);
        }

        var description='';     //'&nbsp;';
        description=GetI18nItem(item,'description');
        if( description === undefined ) { description=''; }
        //if( toType(item.description) == 'string' ) {
        //  description=item.description;
        //}

        var tags=GetI18nItem(item,'tags');
        if( tags === undefined ) { tags=''; }

        var albumID=0;
        if( item.albumID !== undefined  ) {
          albumID=item.albumID;
          foundAlbumID=true;
        }
        var ID=null;
        if( item.ID !== undefined ) {
          ID=item.ID;
        }
        var kind='image';
        if( item.kind !== undefined && item.kind.length>0 ) {
          kind=item.kind;
        }
        
        var newItem=NGY2Item.New( G, title, description, ID, albumID, kind, tags );

        // image source url
        newItem.src=src;
        
        // dominant colors (needs to be a base64 gif)
        if( item.imageDominantColors !== undefined ) {
          newItem.imageDominantColors=item.imageDominantColors;
        }
        // dominant color (rgb hex)
        if( item.imageDominantColor !== undefined ) {
          newItem.imageDominantColor=item.imageDominantColor;
        }
        
        // dest url
        if( item.destURL !== undefined && item.destURL.length>0 ) {
          newItem.destinationURL=item.destURL;
        }
        
        // download image url
        if( item.downloadURL !== undefined && item.downloadURL.length>0 ) {
          newItem.downloadURL=item.downloadURL;
        }
        
        // thumbnail image size
        var tw=0;
        if( item.imgtWidth !== undefined && item.imgtWidth>0 ) {
          tw=item.imgtWidth;
          //newItem.thumbImgWidth=tw;
        }
        var th=0;
        if( item.imgtHeight !== undefined && item.imgtHeight>0 ) {
          th=item.imgtHeight;
          //newItem.thumbImgHeight=th;
        }

        newItem.thumbs = {
          url:    { l1 : { xs:thumbsrc, sm:thumbsrc, me:thumbsrc, la:thumbsrc, xl:thumbsrc }, lN : { xs:thumbsrc, sm:thumbsrc, me:thumbsrc, la:thumbsrc, xl:thumbsrc } },
          width:  { l1 : { xs:tw, sm:tw, me:tw, la:tw, xl:tw }, lN : { xs:tw, sm:tw, me:tw, la:tw, xl:tw } },
          height: { l1 : { xs:th, sm:th, me:th, la:th, xl:th }, lN : { xs:th, sm:th, me:th, la:th, xl:th } }
        };

        // image size
        if( item.imageWidth !== undefined ) { newItem.imageWidth=item.width; }
        if( item.imageHeight !== undefined ) { newItem.imageHeight=item.height; }
        
        
        // Exif - model
        if( item.exifModel !== undefined ) { newItem.exif.model=item.exifModel; }
        // Exif - flash
        if( item.exifFlash !== undefined ) { newItem.exif.flash=item.exifFlash; }
        // Exif - focallength
        if( item.exifFocalLength !== undefined ) { newItem.exif.focallength=item.exifFocalLength; }
        // Exif - fstop
        if( item.exifFStop !== undefined ) { newItem.exif.fstop=item.exifFStop; }
        // Exif - exposure
        if( item.exifExposure !== undefined ) { newItem.exif.exposure=item.exifExposure; }
        // Exif - time
        if( item.exifIso !== undefined ) { newItem.exif.iso=item.exifIso; }
        // Exif - iso
        if( item.exifTime !== undefined ) { newItem.exif.time=item.exifTime; }
        // Exif - location
        if( item.exifLocation !== undefined ) { newItem.exif.exifLocation=item.exifTime; }
        
        
        // custom data
        if( item.customData !== null ) {
          newItem.customData=cloneJSObject(item.customData);
        }

        newItem.contentIsLoaded=true;
        
        if( G.O.fnProcessData !== null ) {
          if( typeof G.O.fnProcessData == 'function' ) {
            G.O.fnProcessData(newItem, 'api', item);
          }
          else {
            // defined in markup
            window[G.O.fnProcessData](newItem, 'api', item);
          }
        }
      });
      
      if( foundAlbumID ) {
        //G.O.displayBreadcrumb=true;
      }

    }
    
    function GetContentMarkup( $elements ) {
      var foundAlbumID=false;
      var nbTitles=0;
      
      G.I[0].contentIsLoaded=true;

      jQuery.each($elements, function(i, item){

        // create dictionnary with all data attribute name in lowercase (to be case unsensitive)
        var data={
          // some default values
          'data-ngdesc':                  '',         // item description
          'data-ngid':                    null,       // ID
          'data-ngkind':                  'image',    // kind (image, album, albumup)
          'data-ngtags':                  null,       // tags
          'data-ngdest':                  '',         // destination URL
          'data-ngthumbimgwidth':         0,          // thumbnail width
          'data-ngthumbimgheight':        0,          // thumbnail height
          'data-ngimagewidth':            0,          // image width
          'data-ngimageheight':           0,          // image height
          'data-ngimagedominantcolors':   null,       // image dominant colors
          'data-ngimagedominantcolor':    null,       // image dominant colors
          'data-ngexifmodel':             '',         // EXIF data
          'data-ngexifflash':             '',
          'data-ngexiffocallength':       '',
          'data-ngexiffstop':             '',
          'data-ngexifexposure':          '',
          'data-ngexifiso':               '',
          'data-ngexiftime':              '',
          'data-ngexiflocation':          ''
        };
        [].forEach.call( item.attributes, function(attr) {
          data[attr.name.toLowerCase()]=attr.value;
        });

        var thumbsrc='';
        if( data.hasOwnProperty('data-ngthumb') ) {
          thumbsrc=data['data-ngthumb'];
          if( !StartsWithProtocol(thumbsrc) ) {
            thumbsrc=G.O.itemsBaseURL + thumbsrc;
          }
        }
        var thumbsrcX2='';
        if( data.hasOwnProperty('data-ngthumb2x') ) {
          thumbsrcX2=data['data-ngthumb2x'];
          if( !StartsWithProtocol(thumbsrcX2) ) {
            thumbsrcX2=G.O.itemsBaseURL + thumbsrcX2;
          }
        }

        // responsive image source
        var src='',
        st=RetrieveCurWidth().toUpperCase();
        if( data.hasOwnProperty('data-ngsrc'+st) ) {
          src=data['data-ngsrc'+st];
        }
        if( src == '' ) {
          src=data['href'];
        }
        if( !StartsWithProtocol(src) ) {
          src=G.O.itemsBaseURL + src;
        }
        
        //newObj.description=jQuery(item).attr('data-ngdesc');
        var description=data['data-ngdesc'];
        var ID=data['data-ngid'];
        var kind=data['data-ngkind'];
        var tags=data['data-ngtags'];

        var albumID='0';
        if( data.hasOwnProperty('data-ngalbumid') ) {
          albumID=data['data-ngalbumid'];
          foundAlbumID=true;
        }
        
        var title=jQuery(item).text();
        if( !(G.O.thumbnailLabel.get('title') == '' || G.O.thumbnailLabel.get('title') == undefined) ) {
          title=GetImageTitle(src);
        }


        var newItem=NGY2Item.New( G, title, description, ID, albumID, kind, tags );
        if( title != '' ) {
          nbTitles++;
        }

        // image source url
        newItem.src=src;

        // dominant colorS (needs to be a base64 gif)
        newItem.imageDominantColors=data['data-ngimagedominantcolors'];
        // dominant color (rgb hex)
        newItem.imageDominantColor=data['data-ngimagedominantcolors'];

        newItem.destinationURL=data['data-ngdest'];
        newItem.downloadURL=data['data-ngdownloadurl'];

        // thumbnail image size
        var tw=parseInt(data['data-ngthumbimgwidth']);
        var th=parseInt(data['data-ngthumbimgheight']);
        newItem.thumbs = {
          url:    { l1 : { xs:thumbsrc, sm:thumbsrc, me:thumbsrc, la:thumbsrc, xl:thumbsrc }, lN : { xs:thumbsrc, sm:thumbsrc, me:thumbsrc, la:thumbsrc, xl:thumbsrc } },
          width:  { l1 : { xs:tw, sm:tw, me:tw, la:tw, xl:tw }, lN : { xs:tw, sm:tw, me:tw, la:tw, xl:tw } },
          height: { l1 : { xs:th, sm:th, me:th, la:th, xl:th }, lN : { xs:th, sm:th, me:th, la:th, xl:th } }
        };

        // image size
        newItem.imageWidth=parseInt(data['data-ngimagewidth']);
        newItem.imageHeight=parseInt(data['data-ngimageheight']);

        // Exif - model
        newItem.exif.model=data['data-ngexifmodel'];
        // Exif - flash
        newItem.exif.flash=data['data-ngexifflash'];
        // Exif - focallength
        newItem.exif.focallength=data['data-ngexiffocallength'];
        // Exif - fstop
        newItem.exif.fstop=data['data-ngexiffstop'];
        // Exif - exposure
        newItem.exif.exposure=data['data-ngexifexposure'];
        // Exif - iso
        newItem.exif.iso=data['data-ngexifiso'];
        // Exif - time
        newItem.exif.time=data['data-ngexiftime'];
        // Exif - location
        newItem.exif.location=data['data-ngexiflocation'];
        
        newItem.contentIsLoaded=true;

        // custom data
        if( jQuery(item).data('customdata') !== undefined ) {
          newItem.customData=cloneJSObject(jQuery(item).data('customdata'));
        }
        // custom data
        if( jQuery(item).data('ngcustomdata') !== undefined ) {
          newItem.customData=cloneJSObject(jQuery(item).data('ngcustomdata'));
        }

        if( G.O.fnProcessData !== null ) {
          if( typeof G.O.fnProcessData == 'function' ) {
            G.O.fnProcessData(newItem, 'markup', item);
          }
          else {
            // defined in markup
            window[G.O.fnProcessData](newItem, 'markup', item);
          }
        }
        
      });
      
      if( foundAlbumID ) {
        //G.O.displayBreadcrumb=true;
      }
      
      if( nbTitles == 0 ) {
        G.O.thumbnailLabel.display=false;
      }

    }

    function cloneJSObject( obj ) {
      if (obj === null || typeof obj !== 'object') {
        return obj;
      }

      var temp = obj.constructor(); // give temp the original obj's constructor
      for (var key in obj) {
          temp[key] = cloneJSObject(obj[key]);
      }
      return temp;
    }

    
    
    
    // ################################
    // ##### DEFINE VARIABLES     #####
    // ################################

    
    /** @function DefineVariables */
    function DefineVariables() {

      // change 'picasa' to 'google' for compatibility reason
      if( G.O.kind.toUpperCase() == 'PICASA' ) {
        G.O.kind='google2';
      }
      if( G.O.kind.toUpperCase() == 'GOOGLE' ) {
        G.O.kind='google2';
      }
    
      // management of screen width
      G.GOM.curWidth=RetrieveCurWidth();

      // tumbnail toolbar
      jQuery.extend(true, G.tn.toolbar.image, G.O.thumbnailToolbarImage );
      jQuery.extend(true, G.tn.toolbar.album, G.O.thumbnailToolbarAlbum );
      G.tn.toolbar.image.topLeft=G.tn.toolbar.image.topLeft.toUpperCase();
      G.tn.toolbar.album.topLeft=G.tn.toolbar.album.topLeft.toUpperCase();
      G.tn.toolbar.image.topRight=G.tn.toolbar.image.topRight.toUpperCase();
      G.tn.toolbar.album.topRight=G.tn.toolbar.album.topRight.toUpperCase();
      G.tn.toolbar.image.bottomLeft=G.tn.toolbar.image.bottomLeft.toUpperCase();
      G.tn.toolbar.album.bottomLeft=G.tn.toolbar.album.bottomLeft.toUpperCase();
      G.tn.toolbar.image.bottomRight=G.tn.toolbar.image.bottomRight.toUpperCase();
      G.tn.toolbar.album.bottomRight=G.tn.toolbar.album.bottomRight.toUpperCase();

      // thumbnails label - level dependant settings
      G.O.thumbnailLabel.get = function( opt ) {
        if( G.GOM.curNavLevel == 'l1' && G.O.thumbnailL1Label !== undefined && G.O.thumbnailL1Label[opt] !== undefined ) {
          return G.O.thumbnailL1Label[opt];
        }
        else {
          return G.O.thumbnailLabel[opt];
        }
      };
      G.O.thumbnailLabel.set = function( opt, value ) {
        if( G.GOM.curNavLevel == 'l1' && G.O.thumbnailL1Label !== undefined && G.O.thumbnailL1Label[opt] !== undefined ) {
          G.O.thumbnailL1Label[opt]=value;
        }
        else {
          G.O.thumbnailLabel[opt]=value;
        }
      };

      if( G.O.blackList != '' ) { G.blackList=G.O.blackList.toUpperCase().split('|'); }
      if( G.O.whiteList != '' ) { G.whiteList=G.O.whiteList.toUpperCase().split('|'); }

      if( G.O.albumList2 !== undefined && G.O.albumList2 !== null && G.O.albumList2.constructor === Array  ) {
        var l=G.O.albumList2.length;
        for(var i=0; i< l; i++ ) {
          if( G.O.albumList2[i].indexOf('&authkey') !== -1 || G.O.albumList2[i].indexOf('?authkey') !== -1 ) {
            // private Google Photos album
            G.albumListHidden.push(G.O.albumList2[i]);
          }
          else {
            G.albumList.push(G.O.albumList2[i]);
          }
        }
        // G.albumList=G.O.albumList.toUpperCase().split('|');
      }
      if( G.O.albumList2 !== undefined && typeof G.O.albumList2 == 'string'   ) {
        if( G.O.albumList2.indexOf('&authkey') !== -1 ) {
          // private Google Photos album
          G.albumListHidden.push(G.O.albumList2);
        }
        else {
          G.albumList.push(G.O.albumList2);
        }
      }
      if( G.albumListHidden.length > 0 ) {
        G.O.locationHash=false;   // disable hash location for hidden/privat albums --> combination is impossible
      }
      
      
      // thumbnail image crop
      G.tn.opt.lN.crop=G.O.thumbnailCrop;
      G.tn.opt.l1.crop=G.O.thumbnailCrop;
      if( G.O.thumbnailL1Crop != null ) {
        G.tn.opt.l1.crop=G.O.thumbnailL1Crop;
      }



      function ThumbnailOpt( lN, l1, opt) {
        G.tn.opt.lN[opt]=G.O[lN];
        G.tn.opt.l1[opt]=G.O[lN];
        if( toType(G.O[l1]) == 'number' ) {
          G.tn.opt.l1[opt]=G.O[l1];
        }
      }
      // thumbnail stacks
      ThumbnailOpt('thumbnailStacks', 'thumbnailL1Stacks', 'stacks');
      // thumbnail stacks translate X
      ThumbnailOpt('thumbnailStacksTranslateX', 'thumbnailL1StacksTranslateX', 'stacksTranslateX');
      // thumbnail stacks translate Y
      ThumbnailOpt('thumbnailStacksTranslateY', 'thumbnailL1StacksTranslateY', 'stacksTranslateY');
      // thumbnail stacks translate Z
      ThumbnailOpt('thumbnailStacksTranslateZ', 'thumbnailL1StacksTranslateZ', 'stacksTranslateZ');
      // thumbnail stacks rotate X
      ThumbnailOpt('thumbnailStacksRotateX', 'thumbnailL1StacksRotateX', 'stacksRotateX');
      // thumbnail stacks rotate Y
      ThumbnailOpt('thumbnailStacksRotateY', 'thumbnailL1StacksRotateY', 'stacksRotateY');
      // thumbnail stacks rotate Z
      ThumbnailOpt('thumbnailStacksRotateZ', 'thumbnailL1StacksRotateZ', 'stacksRotateZ');
      // thumbnail stacks scale
      ThumbnailOpt('thumbnailStacksScale', 'thumbnailL1StacksScale', 'stacksScale');
      // thumbnail gutter width
      ThumbnailOpt('thumbnailGutterWidth', 'thumbnailL1GutterWidth', 'gutterWidth');
      // thumbnail gutter height
      ThumbnailOpt('thumbnailGutterHeight', 'thumbnailL1GutterHeight', 'gutterHeight');
      
      // gallery display mode
      G.galleryDisplayMode.lN=G.O.galleryDisplayMode.toUpperCase();
      G.galleryDisplayMode.l1=G.O.galleryDisplayMode.toUpperCase();
      if( G.O.galleryL1DisplayMode != null ) {
        G.galleryDisplayMode.l1=G.O.galleryL1DisplayMode.toUpperCase();
      }
      
      // gallery maximum number of lines of thumbnails
      G.galleryMaxRows.lN=G.O.galleryMaxRows;
      G.galleryMaxRows.l1=G.O.galleryMaxRows;
      if( toType(G.O.galleryL1MaxRows) == 'number' ) {
        G.galleryMaxRows.l1=G.O.galleryL1MaxRows;
      }

      // gallery last row full
      G.galleryLastRowFull.lN=G.O.galleryLastRowFull;
      G.galleryLastRowFull.l1=G.O.galleryLastRowFull;
      if( G.O.galleryL1LastRowFull != null ) {
        G.galleryLastRowFull.l1=G.O.galleryL1LastRowFull;
      }
      
      // gallery sorting
      G.gallerySorting.lN=G.O.gallerySorting.toUpperCase();
      G.gallerySorting.l1=G.gallerySorting.lN;
      if( G.O.galleryL1Sorting != null ) {
        G.gallerySorting.l1=G.O.galleryL1Sorting.toUpperCase();
      }
      
      // gallery display transition
      G.galleryDisplayTransition.lN=G.O.galleryDisplayTransition.toUpperCase();
      G.galleryDisplayTransition.l1=G.galleryDisplayTransition.lN;
      if( G.O.galleryL1DisplayTransition != null ) {
        G.galleryDisplayTransition.l1=G.O.galleryL1DisplayTransition.toUpperCase();
      }
      // gallery display transition duration
      G.galleryDisplayTransitionDuration.lN=G.O.galleryDisplayTransitionDuration;
      G.galleryDisplayTransitionDuration.l1=G.galleryDisplayTransitionDuration.lN;
      if( G.O.galleryL1DisplayTransitionDuration != null ) {
        G.galleryDisplayTransitionDuration.l1=G.O.galleryL1DisplayTransitionDuration;
      }
      
      // gallery max items per album (not for inline/api defined items)
      G.galleryMaxItems.lN=G.O.galleryMaxItems;
      G.galleryMaxItems.l1=G.O.galleryMaxItems;
      if( toType(G.O.galleryL1MaxItems) == 'number' ) {
        G.galleryMaxItems.l1=G.O.galleryL1MaxItems;
      }

      // gallery filter tags
      G.galleryFilterTags.lN=G.O.galleryFilterTags;
      G.galleryFilterTags.l1=G.O.galleryFilterTags;
      if( G.O.galleryL1FilterTags != null ) {
        G.galleryFilterTags.l1=G.O.galleryL1FilterTags;
      }
      
      // gallery pagination
      G.O.galleryPaginationMode=G.O.galleryPaginationMode.toUpperCase();

      if( toType(G.O.slideshowDelay) == 'number' && G.O.slideshowDelay >= 2000 ) {
        G.VOM.slideshowDelay=G.O.slideshowDelay;
      }
      else {
        NanoConsoleLog(G, 'Parameter "slideshowDelay" must be an integer >= 2000 ms.');
      }

      // gallery display transition
      if( typeof G.O.thumbnailDisplayTransition == 'boolean' ) {
        if( G.O.thumbnailDisplayTransition === true ) {
          // G.displayTransition.lN='FADEIN';
          G.tn.opt.lN.displayTransition='FADEIN';
          G.tn.opt.l1.displayTransition='FADEIN';
        }
        else {
          G.tn.opt.lN.displayTransition='NONE';
          G.tn.opt.l1.displayTransition='NONE';
        }
      }

      if( G.O.fnThumbnailDisplayEffect !== '' ) {
        // G.O.thumbnailDisplayTransition='CUSTOM';
        G.tn.opt.lN.displayTransition='CUSTOM';
        G.tn.opt.l1.displayTransition='CUSTOM';
      }
      if( G.O.fnThumbnailL1DisplayEffect !== '' ) {
      // if( typeof G.O.fnThumbnailL1DisplayEffect == 'function' ) {
        G.tn.opt.l1.displayTransition='CUSTOM';
      }
      
      // parse thumbnail display transition
      if( typeof G.O.thumbnailDisplayTransition == 'string' ) {
        var st=G.O.thumbnailDisplayTransition.split('_');
        if( st.length == 1 ) {
          G.tn.opt.lN.displayTransition = G.O.thumbnailDisplayTransition.toUpperCase();
          G.tn.opt.l1.displayTransition = G.O.thumbnailDisplayTransition.toUpperCase();
        }
        if( st.length == 2 ) {
          G.tn.opt.lN.displayTransition = st[0].toUpperCase();
          G.tn.opt.l1.displayTransition = st[0].toUpperCase();
          G.tn.opt.lN.displayTransitionStartVal = Number(st[1]);
          G.tn.opt.l1.displayTransitionStartVal = Number(st[1]);
        }
        if( st.length == 3 ) {
          G.tn.opt.lN.displayTransition = st[0].toUpperCase();
          G.tn.opt.l1.displayTransition = st[0].toUpperCase();
          G.tn.opt.lN.displayTransitionStartVal = Number(st[1]);
          G.tn.opt.l1.displayTransitionStartVal = Number(st[1]);
          G.tn.opt.lN.displayTransitionEasing = st[2];
          G.tn.opt.l1.displayTransitionEasing = st[2];
        }
      }
      if( typeof G.O.thumbnailL1DisplayTransition == 'string' ) {
        var st=G.O.thumbnailL1DisplayTransition.split('_');
        if( st.length == 1 ) {
          G.tn.opt.l1.displayTransition = G.O.thumbnailL1DisplayTransition.toUpperCase();
        }
        if( st.length == 2 ) {
          G.tn.opt.l1.displayTransition = st[0].toUpperCase();
          G.tn.opt.l1.displayTransitionStartVal = Number(st[1]);
        }
        if( st.length == 3 ) {
          G.tn.opt.l1.displayTransition = st[0].toUpperCase();
          G.tn.opt.l1.displayTransitionStartVal = Number(st[1]);
          G.tn.opt.l1.displayTransitionEasing = st[2];
        }
      }
      
      // thumbnail display transition duration
      ThumbnailOpt('thumbnailDisplayTransitionDuration', 'thumbnailL1DisplayTransitionDuration', 'displayTransitionDuration');
      // thumbnail display transition interval duration
      ThumbnailOpt('thumbnailDisplayInterval', 'thumbnailL1DisplayInterval', 'displayInterval');

      
      // resolution breakpoints --> convert old syntax to new one
      if( G.O.thumbnailSizeSM !== undefined ) { G.O.breakpointSizeSM=G.O.thumbnailSizeSM; }
      if( G.O.thumbnailSizeME !== undefined ) { G.O.breakpointSizeME=G.O.thumbnailSizeME; }
      if( G.O.thumbnailSizeLA !== undefined ) { G.O.breakpointSizeLA=G.O.thumbnailSizeLA; }
      if( G.O.thumbnailSizeXL !== undefined ) { G.O.breakpointSizeXL=G.O.thumbnailSizeXL; }

      // THUMBNAIL BUILD INIT
      //level 1
      if( G.O.thumbnailL1BuildInit2 !== undefined ) {
      var t1=G.O.thumbnailL1BuildInit2.split('|');
        for( var i=0; i<t1.length; i++ ) {
          var o1=t1[i].trim().split('_');
          if( o1.length == 3 ) {
            var i1=NewTBuildInit();
            i1.element=ThumbnailOverEffectsGetCSSElement(o1[0], '');
            i1.property=o1[1];
            i1.value=o1[2];
            G.tn.buildInit.level1.push(i1);
          }
        }
      }
      //level N
      if( G.O.thumbnailBuildInit2 !== undefined ) {
        var t1=G.O.thumbnailBuildInit2.split('|');
        for( var i=0; i<t1.length; i++ ) {
          var o1=t1[i].trim().split('_');
          if( o1.length == 3 ) {
            var i1=NewTBuildInit();
            i1.element=ThumbnailOverEffectsGetCSSElement(o1[0], '');
            i1.property=o1[1];
            i1.value=o1[2];
            G.tn.buildInit.std.push(i1);
          }
        }
      }

      
      // THUMBNAIL HOVER EFFETCS
      
      // thumbnails hover effects - Level1
      var tL1HE=G.O.thumbnailL1HoverEffect2;
      if( tL1HE !== undefined ) {
        switch( toType(tL1HE) ) {
          case 'string':
            var tmp=tL1HE.split('|');
            for(var i=0; i<tmp.length; i++) {
              var oDef=NewTHoverEffect();
              oDef=ThumbnailHoverEffectExtract( tmp[i].trim(), oDef );
              if(  oDef!= null ) {
                G.tn.hoverEffects.level1.push(oDef);
              }
            }
            break;
          case 'object':
            var oDef=NewTHoverEffect();
            oDef=jQuery.extend(oDef,tL1HE);
            oDef=ThumbnailHoverEffectExtract( oDef.name, oDef );
            if(  oDef!= null ) {
              G.tn.hoverEffects.level1.push(oDef);
            }
            break;
          case 'array':
            for(var i=0; i<tL1HE.length; i++) {
              var oDef=NewTHoverEffect();
              oDef=jQuery.extend(oDef,tL1HE[i]);
              oDef=ThumbnailHoverEffectExtract( oDef.name, oDef );
              if(  oDef!= null ) {
                G.tn.hoverEffects.level1.push(oDef);
              }
            }
            break;
          case 'null':
            break;
          default:
            NanoAlert(G, 'incorrect parameter for "thumbnailL1HoverEffect2".');
        }
      }
      G.tn.hoverEffects.level1=ThumbnailOverEffectsPreset(G.tn.hoverEffects.level1);
  
      // thumbnails hover effects - other levels
      var tHE=G.O.thumbnailHoverEffect2;
      switch( toType(tHE) ) {
        case 'string':
          var tmp=tHE.split('|');
          for(var i=0; i<tmp.length; i++) {
            var oDef=NewTHoverEffect();
            oDef=ThumbnailHoverEffectExtract( tmp[i].trim(), oDef );
            if(  oDef!= null ) {
              G.tn.hoverEffects.std.push(oDef);
            }
          }
          break;
        case 'object':
          var oDef=NewTHoverEffect();
          oDef=jQuery.extend(oDef, tHE);
          oDef=ThumbnailHoverEffectExtract( oDef.name, oDef );
          if(  oDef!= null ) {
            G.tn.hoverEffects.std.push(oDef);
          }
          break;
        case 'array':
          for(var i=0; i<tHE.length; i++) {
            var oDef=NewTHoverEffect();
            oDef=jQuery.extend(oDef,tHE[i]);
            oDef=ThumbnailHoverEffectExtract( oDef.name, oDef );
            if(  oDef!= null ) {
              G.tn.hoverEffects.std.push(oDef);
            }
          }
          break;
        case 'null':
          break;
        default:
          NanoAlert(G, 'incorrect parameter for "thumbnailHoverEffect2".');
      }
      G.tn.hoverEffects.std=ThumbnailOverEffectsPreset(G.tn.hoverEffects.std);

      if( G.tn.hoverEffects.std.length == 0 ) {
        if( G.tn.hoverEffects.level1.length == 0 ) {
          G.O.touchAnimationL1=false;
        }
        G.O.touchAnimation=false;
      }      
      
      
      // thumbnail sizes
      if( G.O.thumbnailHeight == 0 || G.O.thumbnailHeight == ''  ) {
        G.O.thumbnailHeight='auto';
      }
      if( G.O.thumbnailWidth == 0 || G.O.thumbnailWidth == '' ) {
        G.O.thumbnailWidth = 'auto';
      }
      if( G.O.thumbnailL1Height == 0 || G.O.thumbnailL1Height == '' ) {
        G.O.thumbnailL1Height = 'auto';
      }
      if( G.O.thumbnailL1Width == 0 || G.O.thumbnailL1Width == '' ) {
        G.O.thumbnailL1Width = 'auto';
      }

      // RETRIEVE ALL THUMBNAIL SIZES
      function ThumbnailSizes( srcOpt, onlyl1, opt) {
        if( G.O[srcOpt] == null ) { return; }
        
        if( toType(G.O[srcOpt]) == 'number' ) {
          ThumbnailsSetSize( opt, 'l1', G.O[srcOpt], 'u');
          if( !onlyl1 ) {
            ThumbnailsSetSize( opt, 'lN', G.O[srcOpt], 'u');
          }
        }
        else {
          var ws=G.O[srcOpt].split(' ');
          var v='auto';
          if( ws[0].substring(0,4) != 'auto' ) { v=parseInt(ws[0]); }
          var c='u';
          if( ws[0].charAt(ws[0].length - 1) == 'C' ) { c='c'; }
          ThumbnailsSetSize( opt, 'l1', v, c );   // default value for all resolutions and navigation levels
          if( !onlyl1 ) {
            ThumbnailsSetSize( opt, 'lN', v, c );
          }
          for( var i=1; i<ws.length; i++ ) {
            var r=ws[i].substring(0,2).toLowerCase();
            if( /xs|sm|me|la|xl/i.test(r) ) {
              var w=ws[i].substring(2);
              var v='auto';
              if( w.substring(0,4) != 'auto' ) { v=parseInt(w); }
              var c='u';
              if( w.charAt(w.length - 1) == 'C' ) { c='c'; }
              G.tn.settings[opt]['l1'][r]=v;
              G.tn.settings[opt]['l1'][r+'c']=c;
              if( !onlyl1 ) {
                G.tn.settings[opt]['lN'][r]=v;
                G.tn.settings[opt]['lN'][r+'c']=c;
              }
            }
          }
        }
      }
      ThumbnailSizes( 'thumbnailWidth', false, 'width');
      ThumbnailSizes( 'thumbnailL1Width', true, 'width');
      
      ThumbnailSizes( 'thumbnailHeight', false, 'height');
      ThumbnailSizes( 'thumbnailL1Height', true, 'height');

      
      G.O.thumbnailBorderHorizontal=parseInt(G.O.thumbnailBorderHorizontal);
      G.O.thumbnailBorderVertical=parseInt(G.O.thumbnailBorderVertical);
      G.O.thumbnailLabelHeight=parseInt(G.O.thumbnailLabelHeight);

      G.layout.SetEngine();
      
      // init plugins
      switch( G.O.kind ) {
        // MARKUP / API
        case '':
          break;
        // JSON, Flickr, Picasa, ...
        default:
        jQuery.nanogallery2['data_'+G.O.kind](G, 'Init' );
      }

    }

    // HOVER EFFECTS
    function ThumbnailHoverEffectExtract( name, effect) {
      var easings=[ 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInExpo', 'easeOutExpo', 'easeInOutExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeOutBounce', 'easeInBack', 'easeOutBack', 'easeInOutBack', 'elastic', 'bounce'];
    
    
      var sp=name.split('_');
      if( sp.length >= 4 ) {
        // var oDef=NewTHoverEffect();
        effect.name='';
        effect.type=sp[1];
        effect.from=sp[2];
        effect.to=sp[3];
        if( sp.length >= 5 ) {
          // effect.duration=sp[4];

          for( var n=4; n<sp.length; n++ ) {
            var v=sp[n];
            
            // check if an easing name
            var foundEasing=false;
            for( var e=0; e<easings.length; e++) {
              if( v == easings[e] ) {
                foundEasing=true;
                effect.easing=v;
                break;
              }
            }
            if( foundEasing === true ) {
              continue;
            }
            
            v=v.toUpperCase();
            
            if( v == 'HOVERIN' ) {
              effect.hoverout=false;
              continue;
            }
            if( v == 'HOVEROUT' ) {
              effect.hoverin=false;
              continue;
            }
            
            if( v == 'KEYFRAME' ) {
              effect.firstKeyframe=false;
              continue;
            }
            
            var num = parseInt(v.replace(/[^0-9\.]/g, ''), 10);   // extract a number if on exists

            if( num > 0 ) {
              // the string contains a numbers > 0
              if( v.indexOf('DURATION') >= 0 ) {
                effect.duration=num;
                continue;
              }
              if( v.indexOf('DURATIONBACK') >= 0 ) {
                effect.durationBack=num;
                continue;
              }
              if( v.indexOf('DELAY') >= 0 ) {
                effect.delay=num;
                continue;
              }
              if( v.indexOf('DELAYBACK') >= 0 ) {
                effect.delayBack=num;
                continue;
              }
              
              // no parameter name found -> default is duration
              effect.duration=num;
            }
            

          }
          
          
        }        
        effect.element=ThumbnailOverEffectsGetCSSElement(sp[0], effect.type);
        
      }
      else {
        effect.name=name;
        // NanoAlert(G, 'incorrect parameter for "thumbnailHoverEffect": ' + name);
        // return null;
      }
      return effect;
    }
    
    
    function ThumbnailOverEffectsGetCSSElement( element, property ) {
        var r=element;
        
        switch ( element ) {
          case 'image':
            if( property == 'blur' || property == 'brightness' || property == 'grayscale' || property == 'sepia' || property == 'contrast' || property == 'opacity'|| property == 'saturate' ) {
              r='.nGY2GThumbnailImg';
            }
            else {
              r='.nGY2GThumbnailImage';
            }
            break;
          case 'thumbnail':
            r='.nGY2GThumbnail';
            break;
          case 'label':
            r='.nGY2GThumbnailLabel';
            break;
          case 'title':
            r='.nGY2GThumbnailTitle';
            break;
          case 'description':
            r='.nGY2GThumbnailDescription';
            break;
          case 'tools':
            r='.nGY2GThumbnailIcons';
            break;
          case 'customlayer':
            r='.nGY2GThumbnailCustomLayer';
            break;
        }
        return r;
    }
    
    // convert preset hover effects to new ones (nanogallery2)
    function ThumbnailOverEffectsPreset( effects ) {

      // COMPATIBILITY WITH nanoGALLERY
      // OK:
      //  'borderLighter', 'borderDarker', 'scale120', 'labelAppear', 'labelAppear75', 'labelOpacity50', 'scaleLabelOverImage'
      //  'overScale', 'overScaleOutside', 'descriptionAppear'
      //  'slideUp', 'slideDown', 'slideRight', 'slideLeft'
      //  'imageScale150', 'imageScaleIn80', 'imageScale150Outside', 'imageSlideUp', 'imageSlideDown', 'imageSlideRight', 'imageSlideLeft'
      //  'labelSlideUpTop', 'labelSlideUp', 'labelSlideDown', 'descriptionSlideUp'
      // KO:
      //  'labelSplit4', 'labelSplitVert', 'labelAppearSplit4', 'labelAppearSplitVert' 
      // TODO:
      //  'rotateCornerBL', 'rotateCornerBR', 'imageSplit4', 'imageSplitVert', 'imageRotateCornerBL', 'imageRotateCornerBR', 'imageFlipHorizontal', 'imageFlipVertical'

    
   
      var newEffects=[];
      for( var i=0; i< effects.length; i++ ) {
        switch( effects[i].name.toUpperCase() ) {
          case 'BORDERLIGHTER':
            var color=tinycolor(ColorSchemeGetCurrent().thumbnail.borderColor);
            name='thumbnail_borderColor_'+color.toRgbString()+'_'+color.lighten(50).toRgbString();
            newEffects.push(ThumbnailHoverEffectExtract(name, effects[i]));
            break;
          case 'BORDERDARKER':
            var color=tinycolor(ColorSchemeGetCurrent().thumbnail.borderColor);
            name='thumbnail_borderColor_'+color.toRgbString()+'_'+color.darken(50).toRgbString();
            newEffects.push(ThumbnailHoverEffectExtract(name, effects[i]));
            break;
          case 'SCALE120':
            newEffects.push(ThumbnailHoverEffectExtract('thumbnail_scale_1.00_1.20', effects[i]));
            break;
          case 'LABELAPPEAR':
          case 'LABELAPPEAR75':
            newEffects.push(ThumbnailHoverEffectExtract('label_opacity_0.00_1.00', effects[i]));
            break;
          case 'TOOLSAPPEAR':
            newEffects.push(ThumbnailHoverEffectExtract('tools_opacity_0_1', effects[i]));
            break;
          case 'TOOLSSLIDEDOWN':
            newEffects.push(ThumbnailHoverEffectExtract('tools_translateY_-100%_0%', effects[i]));
            break;
          case 'TOOLSSLIDEUP':
            newEffects.push(ThumbnailHoverEffectExtract('tools_translateY_100%_0%', effects[i]));
            break;
          case 'LABELOPACITY50':
            newEffects.push(ThumbnailHoverEffectExtract('label_opacity_1.00_0.50', effects[i]));
            break;
          case 'SCALELABELOVERIMAGE':
            newEffects.push(ThumbnailHoverEffectExtract('label_scale_0.00_1.00', effects[i]));
            var n=cloneJSObject(effects[i]);
            newEffects.push(ThumbnailHoverEffectExtract('image_scale_1.00_0.00', n));
            break;
          case 'OVERSCALE':
          case 'OVERSCALEOUTSIDE':
            name='label_scale_0_100';
            newEffects.push(ThumbnailHoverEffectExtract('label_scale_2.00_1.00', effects[i]));
            var n=cloneJSObject(effects[i]);
            newEffects.push(ThumbnailHoverEffectExtract('label_opacity_0.00_1.00', n));
            n=cloneJSObject(effects[i]);
            newEffects.push(ThumbnailHoverEffectExtract('image_scale_1.00_0.00', n));
            n=cloneJSObject(effects[i]);
            newEffects.push(ThumbnailHoverEffectExtract('image_opacity_1.00_0.00', n));
            break;
          case 'DESCRIPTIONAPPEAR':
            newEffects.push(ThumbnailHoverEffectExtract('description_opacity_0_1', effects[i]));
            break;
          case 'SLIDERIGHT':
            newEffects.push(ThumbnailHoverEffectExtract('image_translateX_0%_100%', effects[i]));
            newEffects.push(ThumbnailHoverEffectExtract('label_translateX_-100%_0%', cloneJSObject(effects[i])));
            break;
          case 'SLIDELEFT':
            newEffects.push(ThumbnailHoverEffectExtract('image_translateX_0%_-100%', effects[i]));
            newEffects.push(ThumbnailHoverEffectExtract('label_translateX_100%_0%', cloneJSObject(effects[i])));
            break;
          case 'SLIDEUP':
            newEffects.push(ThumbnailHoverEffectExtract('image_translateY_0%_-100%', effects[i]));
            newEffects.push(ThumbnailHoverEffectExtract('label_translateY_100%_0%', cloneJSObject(effects[i])));
            break;
          case 'SLIDEDOWN':
            newEffects.push(ThumbnailHoverEffectExtract('image_translateY_0%_100%', effects[i]));
            newEffects.push(ThumbnailHoverEffectExtract('label_translateY_-100%_0%', cloneJSObject(effects[i])));
            break;
          case 'IMAGESCALE150':
          case 'IMAGESCALE150OUTSIDE':
            newEffects.push(ThumbnailHoverEffectExtract('image_scale_1.00_1.50', effects[i]));
            break;
          case 'IMAGESCALEIN80':
            newEffects.push(ThumbnailHoverEffectExtract('image_scale_1.20_1.00', effects[i]));
            break;
          case 'IMAGESLIDERIGHT':
            newEffects.push(ThumbnailHoverEffectExtract('image_translateX_0%_100%', effects[i]));
            break;
          case 'IMAGESLIDELEFT':
            newEffects.push(ThumbnailHoverEffectExtract('image_translateX_0%_-100%', effects[i]));
            break;
          case 'IMAGESLIDEUP':
            newEffects.push(ThumbnailHoverEffectExtract('image_translateY_0%_-100%', effects[i]));
            break;
          case 'IMAGESLIDEDOWN':
            newEffects.push(ThumbnailHoverEffectExtract('image_translateY_0%_100%', effects[i]));
            break;
          case 'LABELSLIDEUP':
          case 'LABELSLIDEUPTOP':
            newEffects.push(ThumbnailHoverEffectExtract('label_translateY_100%_0%', effects[i]));
            break;
          case 'LABELSLIDEUPDOWN':
            newEffects.push(ThumbnailHoverEffectExtract('label_translateY_0%_100%', effects[i]));
            break;
          case 'DESCRIPTIONSLIDEUP':
            newEffects.push(ThumbnailHoverEffectExtract('description_translateY_110%_0%', effects[i]));
            break;

          case 'IMAGEBLURON':
            newEffects.push(ThumbnailHoverEffectExtract('image_blur_2.00px_0.00px', effects[i]));
            break;
          case 'IMAGEBLUROFF':
            newEffects.push(ThumbnailHoverEffectExtract('image_blur_0.00px_2.00px', effects[i]));
            break;
          case 'IMAGEGRAYON':
            newEffects.push(ThumbnailHoverEffectExtract('image_grayscale_0%_100%', effects[i]));
            break;
          case 'IMAGEGRAYOFF':
            newEffects.push(ThumbnailHoverEffectExtract('image_grayscale_100%_0%', effects[i]));
            break;
          case 'IMAGESEPIAON':
            newEffects.push(ThumbnailHoverEffectExtract('image_sepia_100%_1%', effects[i]));
            break;
          case 'IMAGESEPIAOFF':
            newEffects.push(ThumbnailHoverEffectExtract('image_sepia_1%_100%', effects[i]));
            break;
            
          default:
            newEffects.push(effects[i]);
            break;
        }
      }
      
      return newEffects;
    }

    function cloneJSObject( obj ) {
      if (obj === null || typeof obj !== 'object') {
        return obj;
      }

      var temp = obj.constructor(); // give temp the original obj's constructor
      for (var key in obj) {
          temp[key] = cloneJSObject(obj[key]);
      }
      return temp;
    }


    // Thumbnail hover effect definition
    function NewTHoverEffect() {
      var oDef={ 
          name:           '',
          element:        '',               // element class
          type:           '',               
          from:           '',               // start value
          to:             '',               // end value
          hoverin:        true,
          hoverout:       true,
          firstKeyframe:  true,
          delay:          0,
          delayBack:      0,
          duration:       400,
          durationBack:   300,
          easing:         'easeOutQuart',
          easingBack:     'easeOutQuart',
          animParam:      null
        };
      return oDef;
    }

    function NewTBuildInit() {
      // to set CSS properties
      var oDef={ element: '', property: '', value: '' };
      return oDef;
    }

    
    // build a dummy thumbnail to get different sizes and to cache them
    function ThumbnailDefCaches() {
      
        // thumbnail content CSS styles
        // if( G.O.thumbnailLabel.display ) {
        switch( G.O.thumbnailLabel.position ){
          case 'onBottom' :
            G.tn.style.lN.annotation='top:0; position:relative;';
            G.tn.style.l1.annotation='top:0; position:relative;';
            if( G.layout.engine == 'CASCADING' ) {
              // line break --> title and description can be multi-line
              G.tn.style.lN.label='top:auto; bottom:0; position:relative;';
              G.tn.style.l1.label='top:auto; bottom:0; position:relative;';
              if( G.O.thumbnailLabel.titleMultiLine ) {
                G.tn.style.lN.title='white-space:normal;';
                G.tn.style.l1.title='white-space:normal;';
              }
              if( G.O.thumbnailLabel.descriptionMultiLine ) {
                G.tn.style.lN.desc='white-space:normal;';
                G.tn.style.l1.desc='white-space:normal;';
              }
            }
            break;
          case 'overImageOnTop' :
            G.tn.style.lN.annotation='top:0; bottom:0;';
            G.tn.style.l1.annotation='top:0; bottom:0;';
            G.tn.style.l1.label='top:0; position:absolute;';
            G.tn.style.lN.label='top:0; position:absolute;';
            if( G.O.thumbnailLabel.titleMultiLine ) {
              G.tn.style.lN.title='white-space:normal;';
              G.tn.style.l1.title='white-space:normal;';
            }
            if( G.O.thumbnailLabel.descriptionMultiLine ) {
              G.tn.style.lN.desc='white-space:normal;';
              G.tn.style.l1.desc='white-space:normal;';
            }
            break;
          case 'overImageOnMiddle' :
            G.tn.style.lN.annotation='top:0; bottom:0;';
            G.tn.style.lN.label='top:0; bottom:0;';
            G.tn.style.l1.annotation='top:0; bottom:0;';
            G.tn.style.l1.label='top:0; bottom:0;';
            G.tn.style.lN.title='position:absolute; bottom:50%;';
            G.tn.style.l1.title='position:absolute; bottom:50%;';
            G.tn.style.lN.desc='position:absolute; top:50%;';
            G.tn.style.l1.desc='position:absolute; top:50%;';
            if( G.O.thumbnailLabel.titleMultiLine ) {
              G.tn.style.lN.title+='white-space:normal;';
              G.tn.style.l1.title+='white-space:normal;';
            }
            if( G.O.thumbnailLabel.descriptionMultiLine ) {
              G.tn.style.lN.desc+='white-space:normal;';
              G.tn.style.l1.desc+='white-space:normal;';
            }
            break;
          case 'custom' :
            break;
          case 'overImageOnBottom' :
          default :
            G.O.thumbnailLabel.position='overImageOnBottom';
            G.tn.style.lN.annotation='bottom:0;';
            G.tn.style.lN.label='bottom:0; position:absolute;';
            G.tn.style.l1.annotation='bottom:0;';
            G.tn.style.l1.label='bottom:0; position:absolute;';
            if( G.O.thumbnailLabel.titleMultiLine ) {
              G.tn.style.lN.title='white-space:normal;';
              G.tn.style.l1.title='white-space:normal;';
            }
            if( G.O.thumbnailLabel.descriptionMultiLine ) {
              G.tn.style.lN.desc='white-space:normal;';
              G.tn.style.l1.desc='white-space:normal;';
            }
            break;
        }
        switch( G.O.thumbnailLabel.align ) {
          case 'right':
              G.tn.style.l1.label+='text-align:right;';
              G.tn.style.lN.label+='text-align:right;';
            break;
          case 'left':
              G.tn.style.l1.label+='text-align:left;';
              G.tn.style.lN.label+='text-align:left;';
            break;
          default:
              G.tn.style.l1.label+='text-align:center;';
              G.tn.style.lN.label+='text-align:center;';
            break;
        }
        if( G.O.thumbnailLabel.titleFontSize != undefined && G.O.thumbnailLabel.titleFontSize != '' ) {
          G.tn.style.lN.title+='font-size:'+G.O.thumbnailLabel.titleFontSize+';';
          G.tn.style.l1.title+='font-size:'+G.O.thumbnailLabel.titleFontSize+';';
        }
        if( G.O.thumbnailLabel.descriptionFontSize != undefined && G.O.thumbnailLabel.descriptionFontSize != '' ) {
          G.tn.style.lN.desc+='font-size:'+G.O.thumbnailLabel.descriptionFontSize+';';
          G.tn.style.l1.desc+='font-size:'+G.O.thumbnailLabel.descriptionFontSize+';';
        }
        
      // }
      if( G.O.thumbnailL1Label && G.O.thumbnailL1Label.display ) {
        switch( G.O.thumbnailL1Label.position ){
          case 'onBottom' :
            G.tn.style.l1.annotation='top:0; position:relative;';
            if( G.layout.engine == 'CASCADING' ) {
              // line break
              G.tn.style.l1.label='top:auto; bottom:0;';
              if( G.O.thumbnailL1Label.titleMultiLine ) {
                G.tn.style.l1.title='white-space:normal;';
              }
              if( G.O.thumbnailL1Label.descriptionMultiLine ) {
                G.tn.style.l1.desc='white-space:normal;';
              }
            }
            break;
          case 'overImageOnTop' :
            G.tn.style.l1.annotation='top:0; bottom:0;';
            G.tn.style.l1.label='top:0; bottom:0;';
            if( G.O.thumbnailL1Label.titleMultiLine ) {
              G.tn.style.l1.title='white-space:normal;';
            }
            if( G.O.thumbnailL1Label.descriptionMultiLine ) {
              G.tn.style.l1.desc='white-space:normal;';
            }
            break;
          case 'overImageOnMiddle' :
            G.tn.style.l1.annotation='top:0; bottom:0;';
            G.tn.style.l1.label='top:0; bottom:0;';
            G.tn.style.l1.title='position:absolute; bottom:50%;';
            G.tn.style.l1.desc='position:absolute; top:50%;';
            if( G.O.thumbnailL1Label.titleMultiLine ) {
              G.tn.style.l1.title+='white-space:normal;';
            }
            if( G.O.thumbnailL1Label.descriptionMultiLine ) {
              G.tn.style.l1.desc+='white-space:normal;';
            }
            break;
          case 'custom' :
            G.tn.style.l1.annotation='';
            if( G.O.thumbnailL1Label.titleMultiLine ) {
              G.tn.style.l1.title='white-space:normal;';
            }
            if( G.O.thumbnailL1Label.descriptionMultiLine ) {
              G.tn.style.l1.desc='white-space:normal;';
            }
            break;
          case 'overImageOnBottom':
          default :
            G.O.thumbnailL1Label.position='overImageOnBottom';
            G.tn.style.l1.annotation='bottom:0;';
            G.tn.style.l1.label='bottom:0;';
            if( G.O.thumbnailL1Label.titleMultiLine ) {
              G.tn.style.l1.title='white-space:normal;';
            }
            if( G.O.thumbnailL1Label.descriptionMultiLine ) {
              G.tn.style.l1.desc='white-space:normal;';
            }
            break;
        }
        switch( G.O.thumbnailL1Label.align ) {
          case 'right':
              G.tn.style.l1.label+='text-align:right;';
            break;
          case 'left':
              G.tn.style.l1.label+='text-align:left;';
            break;
          default:
              G.tn.style.l1.label+='text-align:center;';
            break;
        }
        if( G.O.thumbnailL1Label.titleFontSize != undefined && G.O.thumbnailL1Label.titleFontSize != '' ) {
          G.tn.style.l1.title+='font-size:'+G.O.thumbnailL1Label.titleFontSize+';';
        }
        if( G.O.thumbnailL1Label.descriptionFontSize != undefined && G.O.thumbnailL1Label.descriptionFontSize != '' ) {
          G.tn.style.l1.desc+='font-size:'+G.O.thumbnailL1Label.titleFontSize+';';
        }
      }
      
      G.tn.borderWidth=G.O.thumbnailBorderHorizontal;
      G.tn.borderHeight=G.O.thumbnailBorderVertical;
      
      
      // Retrieve info for level LN
      // TODO: do this only for grid layout and label onBottom

      // retrieve annotation (label+description) height -> now done on every gallery render for the most accurate value
      // if( G.O.thumbnailLabel.get('position') == 'onBottom' ) {
      //  G.GOM.curNavLevel='lN';
      //  var lh=ThumbnailGetAnnotationHeight()
      //  G.tn.labelHeight.lN= lh;
      //  G.tn.labelHeight.l1= lh;
      //  G.GOM.curNavLevel='l1';
      //}

      // default thumbnail sizes levels l1 and lN
      var lst=['xs','sm','me','la','xl'];
      for( var i=0; i< lst.length; i++ ) {
        var w=G.tn.settings.width['lN'][lst[i]];
        if( w != 'auto' ) {
          G.tn.defaultSize.width['lN'][lst[i]]=w;
          G.tn.defaultSize.width['l1'][lst[i]]=w;
        }
        else {
          var h=G.tn.settings.height['lN'][lst[i]];
          G.tn.defaultSize.width['lN'][lst[i]]=h;      // dynamic width --> set height value as default for the width
          G.tn.defaultSize.width['l1'][lst[i]]=h;      // dynamic width --> set height value as default
        }
      }
      for( var i=0; i< lst.length; i++ ) {
        var h=G.tn.settings.height['lN'][lst[i]];
        if( h != 'auto' ) {
          // grid or justified layout
          G.tn.defaultSize.height['lN'][lst[i]]=h;  //+G.tn.labelHeight.get();
          G.tn.defaultSize.height['l1'][lst[i]]=h;  //+G.tn.labelHeight.get();
        }
        else {
          var w=G.tn.settings.width['lN'][lst[i]];
          G.tn.defaultSize.height['lN'][lst[i]]=w;      // dynamic height --> set width value as default for the height
          G.tn.defaultSize.height['l1'][lst[i]]=w;      // dynamic height --> set width value as default
        }
      }


      // Retrieve info for level L1
      // TODO: do this only for grid layout and label onBottom
      // if( G.O.thumbnailLabel.get('position') == 'onBottom' ) {
      //   G.GOM.curNavLevel='l1';
      //   var lh=ThumbnailGetAnnotationHeight()
      //   // G.tn.labelHeight.l1= $newDiv.find('.nGY2GThumbnailLabel').outerHeight(true);
      //   G.tn.labelHeight.l1= lh;
      // }
      
      
      // default thumbnail sizes levels l1 and lN
      var lst=['xs','sm','me','la','xl'];
      for( var i=0; i< lst.length; i++ ) {
        var w=G.tn.settings.width['l1'][lst[i]];
        if( w != 'auto' ) {
          G.tn.defaultSize.width['l1'][lst[i]]=w;
        }
        else {
          var h=G.tn.settings.height['l1'][lst[i]];
          G.tn.defaultSize.width['l1'][lst[i]]=h;      // dynamic width --> set height value as default
        }
      }
      for( var i=0; i< lst.length; i++ ) {
        var h=G.tn.settings.height['l1'][lst[i]];
        if( h != 'auto' ) {
          // grid or justified layout
          G.tn.defaultSize.height['l1'][lst[i]]=h;  //+G.tn.labelHeight.get();
        }
        else {
          var w=G.tn.settings.width['l1'][lst[i]];
          G.tn.defaultSize.height['l1'][lst[i]]=w;      // dynamic height --> set width value as default
        }
      }
      
    }
    

    // ##### THUMBNAIL SIZE MANAGEMENT
    function ThumbnailsSetSize( dir, level, v, crop ) {
      G.tn.settings[dir][level]['xs']=v;
      G.tn.settings[dir][level]['sm']=v;
      G.tn.settings[dir][level]['me']=v;
      G.tn.settings[dir][level]['la']=v;
      G.tn.settings[dir][level]['xl']=v;
      G.tn.settings[dir][level]['xsc']=crop;
      G.tn.settings[dir][level]['smc']=crop;
      G.tn.settings[dir][level]['mec']=crop;
      G.tn.settings[dir][level]['lac']=crop;
      G.tn.settings[dir][level]['xlc']=crop;
    }


    //
    function ColorSchemeGetCurrent() {
      var cs=null;
      switch(toType(G.O.colorScheme)) {
        case 'object':    // user custom color scheme object 
          cs=G.colorScheme_dark;  // default color scheme
          jQuery.extend(true,cs,G.O.colorScheme);
          break;
        case 'string':    // name of an internal defined color scheme
          switch( G.O.colorScheme ) {
            case 'light':
              cs=G.colorScheme_light;
              break;
            case 'default':
            case 'dark':
            case 'none':
            default:
              cs=G.colorScheme_dark;
          }
          break;
        default:
          cs=G.colorScheme_dark;
      }
      return cs;
    }
    
    // ##### BREADCRUMB/THUMBNAIL COLOR SCHEME #####
    function SetColorScheme() {
      var cs=null;
      var colorSchemeLabel='';
      switch(toType(G.O.colorScheme)) {
        case 'object':    // user custom color scheme object 
          cs=G.colorScheme_dark;  // default color scheme
          jQuery.extend(true,cs,G.O.colorScheme);
          colorSchemeLabel='nanogallery_colorscheme_custom_'+G.baseEltID;
          break;
        case 'string':    // name of an internal defined color scheme
          switch( G.O.colorScheme ) {
            case 'light':
              cs=G.colorScheme_light;
              colorSchemeLabel='nanogallery_colorscheme_light_'+G.baseEltID;
              break;
            case 'default':
            case 'dark':
            case 'none':
            default:
              cs=G.colorScheme_dark;
              colorSchemeLabel='nanogallery_colorscheme_dark_'+G.baseEltID;
          }
          break;
        default:
          NanoAlert(G, 'Error in colorScheme parameter.');
          return;
      }

      //var s1='.nanogallery_theme_'+G.O.theme+' ';
      var s1='.' + colorSchemeLabel + ' ';
    
      // navigation bar
      var s=s1+'.nGY2Navigationbar { background:'+cs.navigationBar.background+'; }'+'\n';
      if( cs.navigationBar.border !== undefined && cs.navigationBar.border !== '' ) { s+=s1+'.nGY2Navigationbar { border:'+cs.navigationBar.border+'; }'+'\n'; }
      if( cs.navigationBar.borderTop !== undefined && cs.navigationBar.borderTop !== '' ) { s+=s1+'.nGY2Navigationbar { border-top:'+cs.navigationBar.borderTop+'; }'+'\n'; }
      if( cs.navigationBar.borderBottom !== undefined && cs.navigationBar.borderBottom !== '' ) { s+=s1+'.nGY2Navigationbar { border-bottom:'+cs.navigationBar.borderBottom+'; }'+'\n'; }
      if( cs.navigationBar.borderRight !== undefined && cs.navigationBar.borderRight !== '' ) { s+=s1+'.nGY2Navigationbar { border-right:'+cs.navigationBar.borderRight+'; }'+'\n'; }
      if( cs.navigationBar.borderLeft !== undefined && cs.navigationBar.borderLeft !== '' ) { s+=s1+'.nGY2Navigationbar { border-left:'+cs.navigationBar.borderLeft+'; }'+'\n'; }
      
      // navigation bar - breadcrumb
      s+=s1+'.nGY2Breadcrumb { background:'+cs.navigationBreadcrumb.background+'; border-radius:'+cs.navigationBreadcrumb.borderRadius+'; }'+'\n';
      s+=s1+'.nGY2Breadcrumb .oneItem  { color:'+cs.navigationBreadcrumb.color+'; }'+'\n';
      s+=s1+'.nGY2Breadcrumb .oneItem:hover { color:'+cs.navigationBreadcrumb.colorHover+'; }'+'\n';

      // navigation bar - tag filter
      s+=s1+'.nGY2NavFilterUnselected { color:'+cs.navigationFilter.color+'; background:'+cs.navigationFilter.background+'; border-radius:'+cs.navigationFilter.borderRadius+'; }'+'\n';
      s+=s1+'.nGY2NavFilterSelected { color:'+cs.navigationFilter.colorSelected+'; background:'+cs.navigationFilter.backgroundSelected+'; border-radius:'+cs.navigationFilter.borderRadius+'; }'+'\n';
      s+=s1+'.nGY2NavFilterSelectAll { color:'+cs.navigationFilter.colorSelected+'; background:'+cs.navigationFilter.background+'; border-radius:'+cs.navigationFilter.borderRadius+'; }'+'\n';
      
      // thumbnails
      s+=s1+'.nGY2GThumbnail { background:'+cs.thumbnail.background+'; border-color:'+cs.thumbnail.borderColor+'; border-top-width:'+G.O.thumbnailBorderVertical+'px; border-right-width:'+G.O.thumbnailBorderHorizontal+'px; border-bottom-width:'+G.O.thumbnailBorderVertical+'px; border-left-width:'+G.O.thumbnailBorderHorizontal+'px;}'+'\n';
      s+=s1+'.nGY2GThumbnailStack { background:'+cs.thumbnail.stackBackground+'; }'+'\n';
      s+=s1+'.nGY2GThumbnailImage { background:'+cs.thumbnail.background+'; }'+'\n';
      s+=s1+'.nGY2GThumbnailAlbumUp { background:'+cs.thumbnail.background+'; color:'+cs.thumbnail.titleColor+'; }'+'\n';
      s+=s1+'.nGY2GThumbnailIconsFullThumbnail { color:'+cs.thumbnail.titleColor+'; }\n';
      s+=s1+'.nGY2GThumbnailLabel { background:'+cs.thumbnail.labelBackground+'; opacity:'+cs.thumbnail.labelOpacity+'; }'+'\n';
      s+=s1+'.nGY2GThumbnailImageTitle  { color:'+cs.thumbnail.titleColor+'; background-color:'+cs.thumbnail.titleBgColor+'; '+(cs.thumbnail.titleShadow =='' ? '': 'Text-Shadow:'+cs.thumbnail.titleShadow+';')+' }'+'\n';
      s+=s1+'.nGY2GThumbnailAlbumTitle { color:'+cs.thumbnail.titleColor+'; background-color:'+cs.thumbnail.titleBgColor+'; '+(cs.thumbnail.titleShadow =='' ? '': 'Text-Shadow:'+cs.thumbnail.titleShadow+';')+' }'+'\n';
      s+=s1+'.nGY2GThumbnailDescription { color:'+cs.thumbnail.descriptionColor+'; backgound-color:'+cs.thumbnail.descriptionBgColor+'; '+(cs.thumbnail.descriptionShadow =='' ? '': 'Text-Shadow:'+cs.thumbnail.descriptionShadow+';')+' }'+'\n';

      // thumbnails - icons
      s+=s1+'.nGY2GThumbnailIcons { padding:'+cs.thumbnailIcon.padding+'; }\n';
      s+=s1+'.nGY2GThumbnailIcon { color:'+cs.thumbnailIcon.color+'; }\n';
      s+=s1+'.nGY2GThumbnailIconTextBadge { background-color:'+cs.thumbnailIcon.color+'; }\n';
      
      // gallery pagination -> dot/rectangle based
      if( G.O.galleryPaginationMode != 'NUMBERS' ) {
        s+=s1+'.nGY2paginationDot { border:'+cs.pagination.shapeBorder+'; background:'+cs.pagination.shapeColor+';}\n';
        s+=s1+'.nGY2paginationDotCurrentPage { border:'+cs.pagination.shapeBorder+'; background:'+cs.pagination.shapeSelectedColor+';}\n';
        s+=s1+'.nGY2paginationRectangle { border:'+cs.pagination.shapeBorder+'; background:'+cs.pagination.shapeColor+';}\n';
        s+=s1+'.nGY2paginationRectangleCurrentPage { border:'+cs.pagination.shapeBorder+'; background:'+cs.pagination.shapeSelectedColor+';}\n';
      } else {
        s+=s1+'.nGY2paginationItem { background:'+cs.pagination.background+'; color:'+cs.pagination.color+'; border-radius:'+cs.pagination.borderRadius+'; }\n';
        s+=s1+'.nGY2paginationItemCurrentPage { background:'+cs.pagination.background+'; color:'+cs.pagination.color+'; border-radius:'+cs.pagination.borderRadius+'; }\n';
        s+=s1+'.nGY2PaginationPrev { background:'+cs.pagination.background+'; color:'+cs.pagination.color+'; border-radius:'+cs.pagination.borderRadius+'; }\n';
        s+=s1+'.nGY2PaginationNext { background:'+cs.pagination.background+'; color:'+cs.pagination.color+'; border-radius:'+cs.pagination.borderRadius+'; }\n';
        s+=s1+'.nGY2paginationItemCurrentPage { background:'+cs.pagination.backgroundSelected+'; }\n';
      }
      
      // gallery more button
      s+=s1+'.nGY2GalleryMoreButtonAnnotation { background:'+cs.thumbnail.background+'; border-color:'+cs.thumbnail.borderColor+'; border-top-width:'+G.O.thumbnailBorderVertical+'px; border-right-width:'+G.O.thumbnailBorderHorizontal+'px; border-bottom-width:'+G.O.thumbnailBorderVertical+'px; border-left-width:'+G.O.thumbnailBorderHorizontal+'px;}\n';
      s+=s1+'.nGY2GalleryMoreButtonAnnotation  { color:'+cs.thumbnail.titleColor+'; '+(cs.thumbnail.titleShadow =='' ? '': 'Text-Shadow:'+cs.thumbnail.titleShadow)+'; }\n';
      
      jQuery('head').append('<style id="ngycs_'+G.baseEltID+'">'+s+'</style>');
      G.$E.base.addClass(colorSchemeLabel);

    };
    
    // ##### VIEWER COLOR SCHEME #####
    function SetColorSchemeViewer( ) {

      if( G.VOM.colorSchemeLabel != '' ) {
        G.VOM.$cont.addClass(G.VOM.colorSchemeLabel);
        return;
      }

      var cs=null;
      switch(toType(G.O.colorSchemeViewer)) {
        case 'object':    // user custom color scheme object 
          cs=G.colorSchemeViewer_dark;
          jQuery.extend(true,cs,G.O.colorSchemeViewer);
          G.VOM.colorSchemeLabel='nanogallery_colorschemeviewer_custom_'+G.baseEltID;
          break;
        case 'string':    // name of an internal defined color scheme
          switch( G.O.colorSchemeViewer ) {
            case 'none':
              return;
              break;
            case 'light':
              cs=G.colorSchemeViewer_light;
              G.VOM.colorSchemeLabel='nanogallery_colorschemeviewer_light_'+G.baseEltID;
              break;
            case 'border':
              cs=G.colorSchemeViewer_border;
              G.VOM.colorSchemeLabel='nanogallery_colorschemeviewer_border_'+G.baseEltID;
              break;
            case 'dark':
            case 'default':
              cs=G.colorSchemeViewer_dark;
              G.VOM.colorSchemeLabel='nanogallery_colorschemeviewer_dark_'+G.baseEltID;
              break;
          }
          break;
        default:
          NanoAlert(G, 'Error in colorSchemeViewer parameter.');
          return;
      }

      var s1 = '.' + G.VOM.colorSchemeLabel + ' ';
      var s = s1+'.nGY2Viewer { background:'+cs.background+'; }'+'\n';
      s += s1+'.nGY2ViewerImage { border:'+cs.imageBorder+'; box-shadow:'+cs.imageBoxShadow+'; }'+'\n';
      s += s1+'.nGY2Viewer .toolbarBackground { background:'+cs.barBackground+'; }'+'\n';
      s += s1+'.nGY2Viewer .toolbar { border:'+cs.barBorder+'; color:'+cs.barColor+'; }'+'\n';
      s += s1+'.nGY2Viewer .toolbar .previousButton:after { color:'+cs.barColor+'; }'+'\n';
      s += s1+'.nGY2Viewer .toolbar .nextButton:after { color:'+cs.barColor+'; }'+'\n';
      s += s1+'.nGY2Viewer .toolbar .closeButton:after { color:'+cs.barColor+'; }'+'\n';
      s += s1+'.nGY2Viewer .toolbar .label .title { color:'+cs.barColor+'; }'+'\n';
      s += s1+'.nGY2Viewer .toolbar .label .description { color:'+cs.barDescriptionColor+'; }'+'\n';
      jQuery('head').append('<style>'+s+'</style>');
      G.VOM.$cont.addClass(G.VOM.colorSchemeLabel);
    };

    /** @function SetPolyFills */
    function SetPolyFills() {

      // POLYFILL FOR BIND function --> for older Safari mobile
      // found on MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind#Compatibility
      if (!Function.prototype.bind) {
        Function.prototype.bind = function (oThis) {
          if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
          }

          var aArgs = Array.prototype.slice.call(arguments, 1), 
              fToBind = this, 
              fNOP = function () {},
              fBound = function () {
                return fToBind.apply(this instanceof fNOP && oThis
                       ? this
                       : oThis,
                       aArgs.concat(Array.prototype.slice.call(arguments)));
              };

          fNOP.prototype = this.prototype;
          fBound.prototype = new fNOP();

          return fBound;
        };
      }

      // requestAnimationFrame polyfill by Erik M�ller. fixes from Paul Irish and Tino Zijdel
      // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
      // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
      // MIT license
      (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
          window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
          window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame)
          window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
          };
       
        if (!window.cancelAnimationFrame)
          window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
          };
      }());

      
      // POLYFILL FOR addEventListener/removeEventListener function --> for IE8
      // found on https://gist.github.com/jonathantneal/3748027
      try {
        !window.addEventListener && (function (WindowPrototype, DocumentPrototype, ElementPrototype, addEventListener, removeEventListener, dispatchEvent, registry) {
          WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener] = function (type, listener) {
            var target = this;

            registry.unshift([target, type, listener, function (event) {
              event.currentTarget = target;
              event.preventDefault = function () { event.returnValue = false };
              event.stopPropagation = function () { event.cancelBubble = true };
              event.target = event.srcElement || target;

              listener.call(target, event);
            }]);

            this.attachEvent("on" + type, registry[0][3]);
          };

          WindowPrototype[removeEventListener] = DocumentPrototype[removeEventListener] = ElementPrototype[removeEventListener] = function (type, listener) {
            for (var index = 0, register; register = registry[index]; ++index) {
              if (register[0] == this && register[1] == type && register[2] == listener) {
                return this.detachEvent("on" + type, registry.splice(index, 1)[0][3]);
              }
            }
          };

          WindowPrototype[dispatchEvent] = DocumentPrototype[dispatchEvent] = ElementPrototype[dispatchEvent] = function (eventObject) {
            return this.fireEvent("on" + eventObject.type, eventObject);
          };
        })(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []);
      }
      catch (e) {
        browserNotification();
        return false;
      }
      
      
      // array.removeIf -> removes items from array base on a function's result
      Array.prototype.removeIf = function(callback) {
        var i = this.length;
        while (i--) {
          if (callback(this[i], i)) {
            this.splice(i, 1);
          }
        }
      };      
      
    }
    
    
    function GalleryClicked(e) {
    
      var r=GalleryEventRetrieveElementl(e, false);

      if( r.GOMidx == -1 ) {
        return 'exit';
      }
      
      var idx=G.GOM.items[r.GOMidx].thumbnailIdx;
      switch( r.action ) {
        case 'OPEN':
          ThumbnailOpen(idx, false);
          return 'exit';
          break;
        case 'DISPLAY':
          // used the display icon (ignore if selection mode)
          ThumbnailOpen(idx, true);
          return 'exit';
          break;
        case 'TOGGLESELECT':
          ThumbnailSelectionToggle(idx);
          return 'exit';
          break;
        case 'SHARE':
          PopupShare(idx);
          return 'exit';
          break;
        case 'DOWNLOAD':
          DownloadImage(idx);
          return 'exit';
          break;
        case 'INFO':
          ItemDisplayInfo(G.I[idx]);
          return 'exit';
          break;
        case 'CART':
          AddToCart(idx);
          return 'exit';
          break;
        default:
          // all other actions (custom1..10, or anything else)
          if( G.O.fnThumbnailToolCustAction !== null ) {
            if( typeof G.O.fnThumbnailToolCustAction == 'function' ) {
              G.O.fnThumbnailToolCustAction(r.action, G.I[idx]);
            }
            else {
              // defined in markup
              window[G.O.fnThumbnailToolCustAction](r.action, G.I[idx]);
            }
          }
          break;
      }
    }

    // Download an image
    function DownloadImage(idx) {
      var url=G.I[idx].src;

      if( G.I[idx].downloadURL != undefined && G.I[idx].downloadURL != '' ) {
        url=G.I[idx].downloadURL;
      }
      
      var a = document.createElement('a');
      a.href = url;
      a.download = url.split('.').pop();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);      
      
    }
    
    // add one image to the shopping cart
    function AddToCart( idx ) {
      // increment counter if already in shopping cart
      var found=false;
      for( var i=0; i<G.shoppingCart.length; i++ ) {
        if( G.shoppingCart[i].idx == idx ) {
          G.shoppingCart[i].cnt++;
          if( G.O.fnShoppingCartUpdated !== null ) {
            if( typeof G.O.fnShoppingCartUpdated == 'function' ) {
              G.O.fnShoppingCartUpdated(G.shoppingCart);
            }
            else {
              // defined in markup
              window[G.O.fnShoppingCartUpdated](G.shoppingCart);
            }
          }
          TriggerCustomEvent('shoppingCartUpdated');
          return;
        }
      }
      
      // add to shopping cart
      if( !found) {
        G.shoppingCart.push( { idx:idx, ID:G.I[idx].GetID(), cnt:1} );
        if( G.O.fnShoppingCartUpdated !== null ) {
          if( typeof G.O.fnShoppingCartUpdated == 'function' ) {
            G.O.fnShoppingCartUpdated(G.shoppingCart);
          }
          else {
            // defined in markup
            window[G.O.fnShoppingCartUpdated](G.shoppingCart);
          }
        }
        TriggerCustomEvent('shoppingCartUpdated');
      }
    }
    
    
    function ThumbnailSelectionClear() {
      G.GOM.nbSelected=0;
      var nbTn=G.GOM.items.length;
      for( var i=0; i < nbTn ; i++ ) {
        var item=G.I[G.GOM.items[i].thumbnailIdx];
        if( item.selected ) {
          item.selected=false;
          if( G.O.fnThumbnailSelection !== null ) {
            if( typeof G.O.fnThumbnailSelection == 'function' ) {
              G.O.fnThumbnailSelection(item.$elt, item, G.I);
            }
            else {
              // defined in markup
              window[G.O.fnThumbnailSelection](item.$elt, item, G.I);
            }
          }
        }
        item.selected=false;
      }
    }
    
    function ThumbnailSelectionToggle(idx){
      var item=G.I[idx];
      if( item.selected === true ) {
        ThumbnailSelectionSet(item, false);
        G.GOM.nbSelected--;
        TriggerCustomEvent('itemUnSelected');
      }
      else {
        ThumbnailSelectionSet(item, true);
        G.GOM.nbSelected++;
        TriggerCustomEvent('itemSelected');
      }
    }
    
    
    // this replaces ThumbnailSelection()
    function ThumbnailSelectionSet(item, selected ){
      
      item.selected=selected;
      
      ThumbnailSelectionSetIcon( item );
      
      // called when the selection status of an item changed
      if( G.O.fnThumbnailSelection !== null ) {
        if( typeof G.O.fnThumbnailSelection == 'function' ) {
          G.O.fnThumbnailSelection(item.$elt, item, G.I);
        }
        else {
          // defined in markup
          window[G.O.fnThumbnailSelection](item.$elt, item, G.I);
        }
      }
    
    }
    
    function ThumbnailSelectionSetIcon( item ) {
      if( item.$elt == null ) {
        // thumbnail is not built
        return;
      }
      var $sub=item.$getElt('.nGY2GThumbnailSub');
      var $icon=item.$getElt('.nGY2GThumbnailIconImageSelect');
      if( item.selected === true) {
        $sub.addClass('nGY2GThumbnailSubSelected');
        $icon.addClass('nGY2ThumbnailSelected');
        $icon.removeClass('nGY2ThumbnailUnselected');
        $icon.html(G.O.icons.thumbnailSelected);
      }
      else {
        $sub.removeClass('nGY2GThumbnailSubSelected');
        $icon.removeClass('nGY2ThumbnailSelected');
        $icon.addClass('nGY2ThumbnailUnselected');
        $icon.html(G.O.icons.thumbnailUnselected);
      }
    }
    
    
    // display a modal popup for sharing image/album
    function PopupShare(idx) {
    
      // SEE SAMPLES: https://gist.github.com/chrisjlee/5196139
      // https://github.com/Julienh/Sharrre
    
    
      var item=G.I[idx];

      var currentURL=document.location.protocol +'//'+document.location.hostname + document.location.pathname;
      var newLocationHash='#nanogallery/'+G.baseEltID+'/';
      if( item.kind == 'image' ) {
        newLocationHash+=item.albumID + '/' + item.GetID();
      }
      else {
        newLocationHash+=item.GetID();
      }
    
      var content ='';
      content+='<div class="nGY2PopupOneItem" style="text-align:center;" data-share="facebook">'+G.O.icons.shareFacebook+'</div>';
      content+='<div class="nGY2PopupOneItem" style="text-align:center;" data-share="pinterest">'+G.O.icons.sharePinterest+'</div>';
      content+='<div class="nGY2PopupOneItem" style="text-align:center;" data-share="tumblr">'+G.O.icons.shareTumblr+'</div>';
      content+='<div class="nGY2PopupOneItem" style="text-align:center;" data-share="twitter">'+G.O.icons.shareTwitter+'</div>';
      content+='<div class="nGY2PopupOneItem" style="text-align:center;" data-share="googleplus">'+G.O.icons.shareGooglePlus+'</div>';
      content+='<div class="nGY2PopupOneItem" style="text-align:center;" data-share="vk">'+G.O.icons.shareVK+'</div>';
      content+='<div class="nGY2PopupOneItem" style="text-align:center;" data-share="mail">'+G.O.icons.shareMail+'</div>';
      content+='<div class="nGY2PopupOneItem" style="text-align:center;"></div>';
      content+='<input class="nGY2PopupOneItemText" readonly type="text" value="'+currentURL+newLocationHash+'" style="width:100%;text-align:center;">';
      content+='<br>';

      currentURL=encodeURIComponent(document.location.protocol +'//'+document.location.hostname + document.location.pathname + newLocationHash);

      var currentTitle=item.title;
      var currentTn=item.thumbImg().src;
      
      
      Popup('Share to:', content, 'Center');
      
      G.popup.$elt.find('.nGY2PopupOneItem').on('click', function(e) {
        e.stopPropagation();
        
        var shareURL='';
        var found=true;
        switch(jQuery(this).attr('data-share').toUpperCase()) {
          case 'FACEBOOK':
            // <a name="fb_share" type="button" href="http://www.facebook.com/sharer.php?u={$url}&media={$imgPath}&description={$desc}" class="joinFB">Share Your Advertise</a>
            //window.open("https://www.facebook.com/sharer.php?u="+currentURL,"","height=368,width=600,left=100,top=100,menubar=0");
            shareURL='https://www.facebook.com/sharer.php?u='+currentURL;
            break;
          case 'VK':
            shareURL='http://vk.com/share.php?url='+currentURL;
            break;
          case 'GOOGLEPLUS':
            shareURL="https://plus.google.com/share?url="+currentURL;
            break;
          case 'TWITTER':
            // shareURL="https://twitter.com/share?url="+currentURL+"&text="+currentTitle;
            shareURL='https://twitter.com/intent/tweet?text='+currentTitle+'url='+ currentURL;
            break;
          case 'PINTEREST':
            // shareURL='https://pinterest.com/pin/create/bookmarklet/?media='+currentTn+'&url='+currentURL+'&description='+currentTitle;
            shareURL='https://pinterest.com/pin/create/button/?media='+currentTn+'&url='+currentURL+'&description='+currentTitle;
            break;
          case 'TUMBLR':
            //shareURL='https://www.tumblr.com/widgets/share/tool/preview?caption=<strong>'+currentTitle+'</strong>&tags=nanogallery2&url='+currentURL+'&shareSource=legacy&posttype=photo&content='+currentTn+'&clickthroughUrl='+currentURL;
            shareURL='http://www.tumblr.com/share/link?url='+currentURL+'&name='+currentTitle;
            break;
          case 'MAIL':
            shareURL='mailto:?subject='+currentTitle;+'&body='+ currentURL;
            break;
          default:
            found=false;
            break;
        }
        
        if( found ) {
          window.open(shareURL,"","height=550,width=500,left=100,top=100,menubar=0");          window.open(shareURL,"","height=550,width=500,left=100,top=100,menubar=0");
          G.popup.close();
          // $popup.remove();
        }
        
      });
    }
    
    // build a modal popup
    function Popup(title, content, align) {
      var pp =  '<div class="nGY2Popup" style="opacity:0;"><div class="nGY2PopupContent'+align+'">';
      pp +=     '<div class="nGY2PopupCloseButton">'+G.O.icons.buttonClose+'</div>';
      pp +=     '<div class="nGY2PopupTitle">'+title+'</div>';
      pp +=     content;
      pp +=     '</div></div>';
      
      G.popup.$elt=jQuery(pp).appendTo('body');
      setElementOnTop( G.VOM.$viewer, G.popup.$elt);
      
      G.popup.isDisplayed=true;
      
      var tweenable = new NGTweenable();
      tweenable.tween({
        from:       { opacity:0  },
        to:         { opacity:1 },
        easing:     'easeInOutSine',
        duration:   180,
        step:       function (state, att) {
          G.popup.$elt.css('opacity',state.opacity);
        },
        finish:     function (state, att) {
          G.popup.$elt.css('opacity',1);
        }
      });
      
      G.popup.$elt.find('.nGY2PopupCloseButton').on('click', function(e) {
        e.stopPropagation();
        G.popup.close();
      });
      
    }


    function GalleryMouseEnter(e) {
      if( !G.VOM.viewerDisplayed && G.GOM.albumIdx != -1 ) {
        var r=GalleryEventRetrieveElementl(e, true);
        // if( r.action == 'OPEN' && r.GOMidx != -1 ) {
        if( r.GOMidx != -1 ) {
          var target = e.target || e.srcElement;
          // if( target.getAttribute('class') != 'nGY2GThumbnail' ) { return; }
          ThumbnailHover(r.GOMidx);
        }
      }
    }
    
    function GalleryMouseLeave(e) {
      if( !G.VOM.viewerDisplayed && G.GOM.albumIdx != -1 ) {
        var r=GalleryEventRetrieveElementl(e, true);
        if( r.GOMidx != -1 ) {
          var target = e.target || e.srcElement;
          // if( target.getAttribute('class') != 'nGY2GThumbnail' ) { return; }
          ThumbnailHoverOut(r.GOMidx);
        }
      }
    }
    
    function GalleryEventRetrieveElementl( e, ignoreSubItems ) {
      var r= { action:'NONE', GOMidx:-1 };
      
      if( e == undefined ) {
        return r;
      }
      var target = e.target || e.srcElement;
      while( target != G.$E.conTnParent[0] ) {       // loop element parent up to find the thumbnail element
        if( jQuery(target).hasClass('nGY2GThumbnail') ) {
          if( r.action == 'NONE' ) {
            r.action='OPEN';
          }
          r.GOMidx=jQuery(target).data('index');
          return r;
        }
        // if( !ignoreSubItems && jQuery(target).hasClass('nGY2GThumbnailIcon') ) {
        if( !ignoreSubItems ) {
          var a=jQuery(target).data('ngy2action');
          if( a != '' && a != undefined ) {
            r.action=a;
          }
        }
        if( target.parentNode == null ) {
          return r;
        }
        target = target.parentNode;
      }
      return r;
    }
    

    // Open one thumbnail
    function ThumbnailOpen( idx, ignoreSelected ) {
      var item=G.I[idx];

      if( G.O.fnThumbnailClicked !== null ) {
        if( typeof G.O.fnThumbnailClicked == 'function' ) {
          G.O.fnThumbnailClicked(item.$elt, item);
        }
        else {
          // defined in markup
          window[G.O.fnThumbnailClicked](item.$elt, item);
        }
      }
      
      // open URL
      if( item.destinationURL !== undefined && item.destinationURL.length > 0 ) {
        window.location = item.destinationURL;
        return;
      }

      switch( item.kind ) {
        case 'image':
          if( ignoreSelected === false && G.GOM.nbSelected > 0 ) {
            ThumbnailSelectionToggle(idx);
          }
          else {
            // display image
            DisplayPhotoIdx(idx);
          }
          break;
        case 'album':
          if( ignoreSelected === false && G.GOM.nbSelected > 0 ) {
            ThumbnailSelectionToggle(idx);
          }
          else {
            DisplayAlbum('-1', item.GetID());
          }
          break;
        case 'albumUp':
          var parent=NGY2Item.Get(G, item.albumID);
          DisplayAlbum('-1', parent.albumID);
          break;
      }
    }
    

    // Open link to original image (new window)
    function OpenOriginal( item ) {
      switch( G.O.kind ) {
        case 'flickr':
          var sU='https://www.flickr.com/photos/'+G.O.userID+'/'+item.GetID();
          window.open(sU,'_blank');
          break;
        case 'picasa':
        case 'google':
        case 'google2':
          var sU='https://plus.google.com/photos/'+G.O.userID+'/albums/'+item.albumID+'/'+item.GetID();
          window.open(sU,'_blank');
          break;
        default:
          break;
      }
    }
    
    // Display one photo (with internal or external viewer)
    function DisplayPhotoIdx( imageIdx ) {

      if( !G.O.thumbnailOpenImage ) { return; }

      if( G.O.thumbnailOpenOriginal ) {
        // Open link to original image
        OpenOriginal( G.I[imageIdx] );
        return;
      }
        
      var items=[];
      
      // G.VOM.currItemIdx=imageIdx;
      G.VOM.currItemIdx=0;
      G.VOM.items=[];
      G.VOM.albumID=G.I[imageIdx].albumID;
      
      var vimg=new VImg(imageIdx);
      G.VOM.items.push(vimg);
      items.push(G.I[imageIdx]);
//TODO -> danger? -> pourquoi reconstruire la liste si d�j� ouvert (back/forward)     
      var l=G.I.length;
      for( var idx=imageIdx+1; idx<l ; idx++) {
        var item=G.I[idx];
        if( item.kind == 'image' && item.isToDisplay(G.VOM.albumID) && item.destinationURL == '' ) {
          var vimg=new VImg(idx);
          G.VOM.items.push(vimg);
          items.push(item);
        }
      }
      var last=G.VOM.items.length;
      var cnt=1;
      for( var idx=0; idx<imageIdx ; idx++) {
        var item=G.I[idx];
        if( item.kind == 'image' && item.isToDisplay(G.VOM.albumID) && item.destinationURL == '' ) {
          var vimg=new VImg(idx);
          vimg.imageNumber=cnt;
          G.VOM.items.push(vimg);
          items.push(item);
          cnt++;
        }
      }
      for( var i=0; i<last; i++ ) {
        G.VOM.items[i].imageNumber=cnt;
        cnt++;
      }
    
      // opens image with external viewer
      if( G.O.fnThumbnailOpen !== null ) {
        if( typeof G.O.fnThumbnailOpen == 'function' ) {
          G.O.fnThumbnailOpen(items);
        }
        else {
          // defined in markup
          window[G.O.fnThumbnailOpen](items);
        }
      }
    
      if( !G.VOM.viewerDisplayed ) {
        // build and display
        OpenInternalViewer(0);
      }
      else {
        // display
        G.VOM.$imgC.css({ opacity:0, left:0, visibility:'hidden' }).attr('src','');
        G.VOM.ImageLoader.loadImage(VieweImgSizeRetrieved, G.VOM.Item(0).responsiveURL(), G.VOM.Item(0));
        G.VOM.$imgC.children().eq(0).attr('src',G.emptyGif).attr('src', G.VOM.Item(0).responsiveURL());
        // ViewerDisplayDominantColors(G.VOM.Item(0), G.VOM.$imgC.children());
        DisplayInternalViewer(0, '');
      }
    }
    
    function ViewerDisplayDominantColors(item, $img) {
      // if( item.imageDominantColors != null ) {
        // $img.css({ 'background': "url('data:image/gif;base64,"+item.imageDominantColors+"') no-repeat", 'background-size': '100% 100%'});
      // }
    }

    // is callbacked as soon as the size of an image has been retrieved
    function VieweImgSizeRetrieved(w,h, url, item, n) {

      item.imageWidth=w;
      item.imageHeight=h;

      if( G.VOM.$imgC !== null && G.VOM.$imgC.children().prop('src') === url ) {
        ViewerImageSetSize(G.VOM.$imgC, item);
        G.VOM.$imgC.css('opacity', 1);
      }

    }


      // display image with internal viewer
    function OpenInternalViewer( vomIdx ) {

      G.VOM.viewerDisplayed=true;
      jQuery('body').css({overflow:'hidden'});  //avoid scrollbars

      G.VOM.$cont=jQuery('<div  class="nGY2 nGY2ViewerContainer" style="opacity:1"></div>').appendTo('body');
      
      SetColorSchemeViewer();

      G.VOM.$viewer=jQuery('<div class="nGY2Viewer" style="opacity:0" itemscope itemtype="http://schema.org/ImageObject"></div>').appendTo(G.VOM.$cont);

      // avoid pinch zoom
      // TODO -> check if still required?
      G.VOM.$viewer.css({msTouchAction:'none', touchAction:'none'});      

      var sImg='',
      l=G.I.length;
      
      sImg+='<div class="nGY2ViewerImagePan"><img class="nGY2ViewerImage" src="'+G.VOM.ItemPrevious(vomIdx).responsiveURL()+'" alt=" " itemprop="contentURL"></div>';
      sImg+='<div class="nGY2ViewerImagePan"><img class="nGY2ViewerImage" src="'+G.VOM.Item(vomIdx).responsiveURL()+'" alt=" " itemprop="contentURL"></div>';
      sImg+='<div class="nGY2ViewerImagePan"><img class="nGY2ViewerImage" src="'+G.VOM.ItemNext(vomIdx).responsiveURL()+'" alt=" " itemprop="contentURL"></div>';
      var sNav='';
      if( G.O.icons.viewerImgPrevious != undefined && G.O.icons.viewerImgPrevious != '') {
        sNav+='<div class="nGY2ViewerAreaPrevious ngy2viewerToolAction" data-ngy2action="previous">'+G.O.icons.viewerImgPrevious+'</div>';
      }
      if( G.O.icons.viewerImgNext != undefined && G.O.icons.viewerImgNext != '') {
        sNav+='<div class="nGY2ViewerAreaNext ngy2viewerToolAction" data-ngy2action="next">'+G.O.icons.viewerImgNext+'</div>';
      }
      G.VOM.$content=jQuery('<div class="nGY2ViewerContent">'+sImg+sNav+'</div>').appendTo(G.VOM.$viewer);
      G.VOM.$imgP=G.VOM.$content.find('.nGY2ViewerImagePan').eq(0);
      G.VOM.$imgC=G.VOM.$content.find('.nGY2ViewerImagePan').eq(1);
      G.VOM.$imgN=G.VOM.$content.find('.nGY2ViewerImagePan').eq(2);
      G.VOM.ImageLoader.loadImage(VieweImgSizeRetrieved, G.VOM.Item(vomIdx).responsiveURL(), G.VOM.Item(vomIdx));
      G.VOM.ImageLoader.loadImage(VieweImgSizeRetrieved, G.VOM.ItemPrevious(vomIdx).responsiveURL(), G.VOM.ItemPrevious(vomIdx));
      G.VOM.ImageLoader.loadImage(VieweImgSizeRetrieved, G.VOM.ItemNext(vomIdx).responsiveURL(), G.VOM.ItemNext(vomIdx));
      
      ViewerDisplayDominantColors(G.VOM.Item(vomIdx), G.VOM.$imgC.children());
      ViewerDisplayDominantColors(G.VOM.ItemPrevious(vomIdx), G.VOM.$imgP.children());
      ViewerDisplayDominantColors(G.VOM.ItemNext(vomIdx), G.VOM.$imgN.children());

      // makes content unselectable --> avoid image drag effect during 'mouse swipe'
      G.VOM.$cont.find('*').attr('draggable', 'false').attr('unselectable', 'on');
      
      G.VOM.padding.H=parseInt(G.VOM.$content.css("padding-left"))+parseInt(G.VOM.$content.css("padding-right"));
      G.VOM.padding.V=parseInt(G.VOM.$content.css("padding-top"))+parseInt(G.VOM.$content.css("padding-bottom"));
     
      
      // build image toolbar container
      var vtbBg1='';
      var vtbBg2=' toolbarBackground';
      if( G.O.viewerToolbar.fullWidth ) {
        vtbBg1=' toolbarBackground';
        vtbBg2='';
      }
      var vtbAlign='text-align:center;';
      switch ( G.O.viewerToolbar.align ) {
        case 'left':
          vtbAlign='text-align:left;';
          break;
        case 'right':
          vtbAlign='text-align:right;';
          break;
      }
      var sTB='<div class="toolbarContainer nGEvent'+vtbBg1+'" style="visibility:'+(G.O.viewerToolbar.display ? "visible" : "hidden")+';'+vtbAlign+'"><div class="toolbar nGEvent'+vtbBg2+'">';
      sTB+='</div></div>';
      G.VOM.$toolbar=jQuery(sTB).appendTo(G.VOM.$viewer);

      if( G.VOM.toolbarMode == 'min' || (G.O.viewerToolbar.autoMinimize > 0 && G.O.viewerToolbar.autoMinimize >= getViewport().w) ) {
        ViewerToolbarForVisibilityMin();
      }
      else {
        ViewerToolbarForVisibilityStd();
      }
      
      // top-left toolbar
      if( G.O.viewerTools.topLeft != '' ) {
        var sTopLeft='<div class="nGY2ViewerToolsTopLeft nGEvent"><div class="toolbar nGEvent">';
        var sTL = G.O.viewerTools.topLeft.split(',');
        for( var i=0, sTLL=sTL.length; i<sTLL; i++) {
          sTopLeft+=ToolbarAddElt( sTL[i] );
        }
        sTopLeft+='</div></div>';
        G.VOM.$toolbarTL=jQuery(sTopLeft).appendTo(G.VOM.$viewer);
      }
      // top-right toolbar
      if( G.O.viewerTools.topRight != '' ) {
        var sTopRight='<div class="nGY2ViewerToolsTopRight nGEvent"><div class="toolbar nGEvent">';
        var sTR = G.O.viewerTools.topRight.split(',');
        for( var i=0, sTRL=sTR.length; i<sTRL; i++) {
          sTopRight+=ToolbarAddElt( sTR[i] );
        }
        sTopRight+='</div></div>';
        G.VOM.$toolbarTR=jQuery(sTopRight).appendTo(G.VOM.$viewer);
      }

      // Go to fullscreen mode
      if( ngscreenfull.enabled && G.O.viewerFullscreen ) {
        ngscreenfull.request();
      }

      // set the events handler for toolbars
      ViewerToolsOn();

      // display logo
      if( G.O.viewerDisplayLogo ) {
        G.$E.vwLogo=jQuery('<div class="nGY2 nGY2ViewerLogo"></div>').appendTo(G.VOM.$viewer);
      }

      setElementOnTop('', G.VOM.$viewer);
      ResizeInternalViewer(true);
      G.VOM.timeImgChanged=new Date().getTime();
      
      
      var tweenable = new NGTweenable();
      tweenable.tween({
        from:         { opacity: 0 },
        to:           { opacity: 1 },
        delay:        0,
        duration:     500,
        easing:       'easeOutQuart',
        step:         function (state) {
          G.VOM.$viewer.css('opacity', state.opacity);
        }
      });

      // stop click propagation on image ==> if the user clicks outside of an image, the viewer is closed
      G.VOM.$viewer.find('img').on('click', function (e) {
        e.stopPropagation();
      });
      
      ImageSwipeTranslateX(G.VOM.swipePosX);
      DisplayInternalViewer(vomIdx, '');

      // viewer gesture handling
      if( G.VOM.hammertime == null ) {
      
        // G.VOM.hammertime =  new NGHammer(G.VOM.$cont[0]);
        G.VOM.hammertime =  new NGHammer.Manager(G.VOM.$cont[0], {
          recognizers: [
            [NGHammer.Pinch, { enable: true }],
            [NGHammer.Pan, { direction: NGHammer.DIRECTION_ALL }]
          ]
        });
     
        // G.VOM.hammertime.get('pan').set({ direction: NGHammer.DIRECTION_ALL });        
        // G.VOM.hammertime.get('pinch').set({ enable: true });        

        G.VOM.hammertime.on('pan', function(ev) {
          if( !G.VOM.viewerDisplayed ) { return; }
          if( G.VOM.isZooming ) {
            ViewerImageSetPosition(G.VOM.panPosX+ev.deltaX, G.VOM.panPosY+ev.deltaY, false);
          }
          else {
            ImageSwipeTranslateX( ev.deltaX );
          }
        });

        G.VOM.hammertime.on('panend', function(ev) {
          if( !G.VOM.viewerDisplayed ) { return; }
          if( G.VOM.isZooming ) {
            G.VOM.timeImgChanged=new Date().getTime();
            ViewerImageSetPosition(G.VOM.panPosX+ev.deltaX, G.VOM.panPosY+ev.deltaY, true);
          }
          else {
            // next/previous image
            if( ev.deltaX > 50 ) {
              DisplayPreviousImage();
              return;
            }
            if(  ev.deltaX < -50 ) {
              DisplayNextImage();
              return;
            }
            ImageSwipeTranslateX(0);
          }
        });
        
        if( G.O.viewerZoom ) {
        
          G.VOM.hammertime.add( new NGHammer.Tap({ event: 'doubletap', taps: 2 }) );
          G.VOM.hammertime.add( new NGHammer.Tap({ event: 'singletap' }) );
          G.VOM.hammertime.get('doubletap').recognizeWith('singletap');
          G.VOM.hammertime.get('singletap').requireFailure('doubletap');

          // single tap -> next/previous image
          G.VOM.hammertime.on('singletap', function(ev) {
            if( !G.VOM.viewerDisplayed ) { return; }
            StopPropagationPreventDefault(ev.srcEvent);
            if( G.VOM.toolbarsDisplayed == false ) {
              ViewerToolsUnHide();
            }
            else {
              if( ev.target.className.indexOf('nGY2ViewerImage') !== -1 ) {
                if( ev.srcEvent.pageX < (jQuery(window).width()/2) ) {
                  DisplayPreviousImage();
                }
                else {
                  DisplayNextImage();
                }
              }
            }
          });
          
          // double tap -> zoom
          G.VOM.hammertime.on('doubletap', function(ev) {
            if( !G.VOM.viewerDisplayed ) { return; }
            StopPropagationPreventDefault(ev.srcEvent);
            
            if( ev.target.className.indexOf('nGY2ViewerImage') !== -1 ) {
              // double tap only one image
              if( G.VOM.isZooming ) {
                G.VOM.isZooming=false;
                G.VOM.currentZoom=1;
                ResizeInternalViewer(true);
              }
              else {
                G.VOM.currentZoom=1.^5;
                if( ViewerZoomStart() ) {
                  ViewerZoomIn(true);
                }
              }
            }
          });
        
          G.VOM.hammertime.on('pinchend', function(ev) {
            ev.srcEvent.stopPropagation();
            ev.srcEvent.preventDefault();  // cancel  mouseenter event
            G.VOM.timeImgChanged=new Date().getTime();
          });
          G.VOM.hammertime.on('pinch', function(ev) {
            ev.srcEvent.stopPropagation();
            ev.srcEvent.preventDefault();  // cancel  mouseenter event
            
            if( ViewerZoomStart() ) {
              G.VOM.currentZoom=ev.scale;
              if( G.VOM.currentZoom > 2 ) {
                G.VOM.currentZoom=2;
              }
              if( G.VOM.currentZoom < 0.2 ) {
                G.VOM.currentZoom=0.2;
              }

              // center image
              ViewerZoomApply();
            }
          });
        }
        else {
          // no zoom -> click/tap on image to go to next/previous one
          G.VOM.hammertime.on('tap', function(ev) {
            if( !G.VOM.viewerDisplayed ) { return; }
            StopPropagationPreventDefault(ev.srcEvent);
            if( ev.target.className.indexOf('nGY2ViewerImage') !== -1 ) {
              if( ev.srcEvent.pageX < (jQuery(window).width()/2) ) {
                DisplayPreviousImage();
              }
              else {
                DisplayNextImage();
              }
            }
          });
        }
      }

      
      if( G.O.slideshowAutoStart ) {
        G.VOM.playSlideshow=false;
        SlideshowToggle();
      }
    }

    
    function StopPropagationPreventDefault(e) {
      e.stopPropagation();
      e.preventDefault();
    }

    function ViewerToolsHide() {
      if( G.VOM.viewerDisplayed ) {
        G.VOM.toolbarsDisplayed=false;
        G.VOM.$toolbar.css('opacity', 0);
        G.VOM.$toolbarTL.css('opacity', 0);
        G.VOM.$toolbarTR.css('opacity', 0);
        G.VOM.$content.find('.nGY2ViewerAreaNext').css('opacity', 0);
        G.VOM.$content.find('.nGY2ViewerAreaPrevious').css('opacity', 0);
      }
    }
    
    function ViewerToolsUnHide() {
      if( G.VOM.viewerDisplayed ) {
        G.VOM.toolbarsDisplayed=true;
        G.VOM.$toolbar.css('opacity', 1);
        G.VOM.$toolbarTL.css('opacity', 1);
        G.VOM.$toolbarTR.css('opacity', 1);
        G.VOM.$content.find('.nGY2ViewerAreaNext').css('opacity', 1);
        G.VOM.$content.find('.nGY2ViewerAreaPrevious').css('opacity', 1);
        G.VOM.toolsHide();
      }
    }
    
    
    function ViewerToolsOn() {
      // removes all events
      G.VOM.$viewer.off("touchstart click", '.ngy2viewerToolAction', ViewerToolsAction); 
      
      // action button
      G.VOM.$viewer.on("touchstart click", '.ngy2viewerToolAction', ViewerToolsAction); 
    }

    // Actions of the buttton/elements
    function ViewerToolsAction(e) {
      // delay to avoid twice handling on smartphone/tablet (both touchstart click events are fired)
      if( (new Date().getTime()) - G.timeLastTouchStart < 300 ) { return; }
      G.timeLastTouchStart=new Date().getTime();
      
      var $this=$(this);
      var ngy2action=$this.data('ngy2action');
      if( ngy2action == undefined ) { return; }
      switch( ngy2action ) {
        case 'next':
          StopPropagationPreventDefault(e);
          DisplayNextImage();
          break;
        case 'previous':
          StopPropagationPreventDefault(e);
          DisplayPreviousImage();
          break;
        case 'playPause':
          e.stopPropagation();
          SlideshowToggle();
          break;
        case 'zoomIn':
          StopPropagationPreventDefault(e);
          if( ViewerZoomStart() ) {
            ViewerZoomIn( true );
          }
          break;
        case 'zoomOut':
          StopPropagationPreventDefault(e);
          if( ViewerZoomStart() ) {
            ViewerZoomIn( false );
          }
          break;
        case 'minimize':
          // toggle toolbar visibility
          StopPropagationPreventDefault(e);
          if( G.VOM.toolbarMode == 'std' ) {
            ViewerToolbarForVisibilityMin();
          }
          else {
            ViewerToolbarForVisibilityStd();
          }
          break;
        case 'fullScreen':
          // Toggle viewer fullscreen mode on/off
          e.stopPropagation();
          if( ngscreenfull.enabled ) {
            ngscreenfull.toggle();
          }
          break;
        case 'info':
          e.stopPropagation();
          ItemDisplayInfo(G.VOM.Item(G.VOM.currItemIdx));
          break;
        case 'close':
          StopPropagationPreventDefault(e);
          if( (new Date().getTime()) - G.VOM.timeImgChanged < 400 ) { return; }
          CloseInternalViewer(G.VOM.currItemIdx);
          break;
        case 'download':
          StopPropagationPreventDefault(e);
          DownloadImage(G.VOM.items[G.VOM.currItemIdx].imageIdx);
          break;
        case 'share':
          StopPropagationPreventDefault(e);
          PopupShare(G.VOM.items[G.VOM.currItemIdx].imageIdx);
          break;
        case 'custom':
          StopPropagationPreventDefault(e);
          PopupShare(G.VOM.items[G.VOM.currItemIdx].imageIdx);
          break;
        case 'linkOriginal':
          // $closeB.on( (G.isIOS ? "touchstart" : "click") ,function(e){     // IPAD
          StopPropagationPreventDefault(e);
          OpenOriginal( G.VOM.Item(G.VOM.currItemIdx) );
          if( G.O.kind == 'google' || G.O.kind == 'google2') {
            var sU='https://plus.google.com/photos/'+G.O.userID+'/albums/'+G.VOM.Item(G.VOM.currItemIdx).albumID+'/'+G.VOM.Item(G.VOM.currItemIdx).GetID();
            window.open(sU,'_blank');
          }
          
          if( G.O.kind == 'flickr') {
            var sU='https://www.flickr.com/photos/'+G.O.userID+'/'+G.VOM.Item(G.VOM.currItemIdx).GetID();
            window.open(sU,'_blank');
          }
          break;
      }
      
      // custom button
      if( ngy2action.indexOf('custom') == 0  && G.O.fnImgToolbarCustClick !== null ) {
        if( typeof G.O.fnImgToolbarCustClick == 'function' ) {
          G.O.fnImgToolbarCustClick(ngy2action, $this, G.VOM.Item(G.VOM.currItemIdx));
        }
        else {
          // defined in markup
          window[G.O.fnImgToolbarCustClick](ngy2action, $this, G.VOM.Item(G.VOM.currItemIdx));
        }
      }
    }
     


    
    // Display photo infos
    //function ViewerInfoSet() {
    function ItemDisplayInfo( item) {

      var content='<div class="nGY2PopupOneItemText">'+item.title+'</div>';
      content+='<div class="nGY2PopupOneItemText">'+item.description+'</div>';
      if( item.author != '' ) {
        content+='<div class="nGY2PopupOneItemText">'+G.O.icons.user+' '+item.author+'</div>';
      }
      if( item.exif.model != '' ) {
        content+='<div class="nGY2PopupOneItemText">'+G.O.icons.config+' '+item.exif.model+'</div>';
      }
      var sexif='';
      if( item.exif.flash != '' ) {
        sexif+= ' &nbsp; '+item.exif.flash;
      }
      if( item.exif.focallength != '' ) {
        sexif+= ' &nbsp; '+item.exif.focallength+'mm';
      }
      if( item.exif.fstop != '' ) {
        sexif+= ' &nbsp; f'+item.exif.fstop;
      }
      if( item.exif.exposure != '' ) {
        sexif+= ' &nbsp; '+item.exif.exposure+'s';
      }
      if( item.exif.iso != '' ) {
        sexif+= ' &nbsp; '+item.exif.iso+' ISO';
      }
      if( item.exif.time != '' ) {
        var date = new Date(parseInt(item.exif.time));
        sexif+= ' &nbsp; '+date.toLocaleDateString();
      }
      content+='<div class="nGY2PopupOneItemText">'+sexif+'</div>';

      if( item.exif.location != '' ) {
        content+='<div class="nGY2PopupOneItemText">'+G.O.icons.location+' <a href="http://maps.google.com/maps?z=12&t=m&q='+encodeURIComponent(item.exif.location)+'" target="_blank">'+item.exif.location+'</a></div>';
        // embed google map in iframe (no api key needed)
        content+='<iframe width="300" height="150" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?&amp;t=m&amp;q='+encodeURIComponent( item.exif.location ) +'&amp;output=embed"></iframe>';  
      }

      var $popup=Popup(G.O.icons.viewerInfo, content, 'Left');
    
    }
    

    
    function ToolbarAddElt( elt ) {
      var r='',
      e=elt.replace(/^\s+|\s+$/g, '');    // remove trailing/leading whitespace
      switch( e ) {
        case 'minimizeButton':
          var ic=G.O.icons.viewerToolbarMin;
          if( G.VOM.toolbarMode == 'min' ) {
            ic=G.O.icons.viewerToolbarStd;
          }
          r='<div class="ngbt ngy2viewerToolAction minimizeButton nGEvent" data-ngy2action="minimize">'+ic+'</div>';
          break;
        case 'previousButton':
          r='<div class="ngbt ngy2viewerToolAction previousButton nGEvent" data-ngy2action="previous">'+G.O.icons.viewerPrevious+'</div>';
          break;
        case 'pageCounter':
          r='<div class="ngbt ngy2viewerToolAction pageCounter nGEvent"></div>';
          break;
        case 'nextButton':
          r='<div class="ngbt ngy2viewerToolAction nextButton nGEvent" data-ngy2action="next">'+G.O.icons.viewerNext+'</div>';
          break;
        case 'playPauseButton':
          r='<div class="ngbt ngy2viewerToolAction playButton playPauseButton nGEvent" data-ngy2action="playPause">'+G.O.icons.viewerPlay+'</div>';
          break;
        case 'downloadButton':
          r='<div class="ngbt ngy2viewerToolAction downloadButton nGEvent" data-ngy2action="download">'+G.O.icons.viewerDownload+'</div>';
          break;
        case 'zoomButton':
          r='<div class="ngbt ngy2viewerToolAction nGEvent" data-ngy2action="zoomIn">'+G.O.icons.viewerZoomIn+'</div><div class="ngbt ngy2viewerToolAction nGEvent" data-ngy2action="zoomOut">'+G.O.icons.viewerZoomOut+'</div>';
          break;
        case 'fullscreenButton':
          var s=G.O.icons.viewerFullscreenOn;
          if( ngscreenfull.enabled && G.VOM.viewerIsFullscreen ) {
            s=G.O.icons.viewerFullscreenOff;
          }
          r='<div class="ngbt ngy2viewerToolAction setFullscreenButton fullscreenButton nGEvent" data-ngy2action="fullScreen">'+s+'</div>';
          break;
        case 'infoButton':
          // if( typeof G.O.fnViewerInfo == 'function' ) {
            r='<div class="ngbt ngy2viewerToolAction infoButton nGEvent" data-ngy2action="info">'+G.O.icons.viewerInfo+'</div>';
          // }
          break;
        case 'linkOriginalButton':
          if( G.O.kind == 'flickr' || G.O.kind == 'google' || G.O.kind == 'google2' ) {
            r='<div class="ngbt ngy2viewerToolAction linkOriginalButton nGEvent" data-ngy2action="linkOriginal">'+G.O.icons.viewerLinkOriginal+'</div>';
          }
          break;
        case 'closeButton':
          r='<div class="ngbt ngy2viewerToolAction closeButton nGEvent" data-ngy2action="close">'+G.O.icons.buttonClose+'</div>';
          break;
        case 'shareButton':
          r='<div class="ngbt ngy2viewerToolAction nGEvent" data-ngy2action="share">'+G.O.icons.viewerShare+'</div>';
          break;
        case 'label':
          r='<div class="label ngy2viewerToolAction"><div class="title nGEvent" itemprop="name"></div><div class="description nGEvent" itemprop="description"></div></div>';
          break;
        default:
          // custom button
          if( e.indexOf('custom') == 0 ) {
            var t='';
            // content to display from custom script
            if( G.O.fnImgToolbarCustInit !== null ) {
              if( typeof G.O.fnImgToolbarCustInit == 'function' ) {
                G.O.fnImgToolbarCustInit(e);
              }
              else {
                // defined in markup
                window[G.O.fnImgToolbarCustInit](e);
              }
            }
            if( t == undefined || t == '' ) {
              // content from icons
              var n=e.substring(6);
              t=G.O.icons['viewerCustomTool'+n];
            }
            r='<div class="ngbt ngy2viewerToolAction ngy2CustomBtn '+e+' nGEvent" data-ngy2action="'+e+'">' + t + '</div>';
          }
          break;
        }
      return r;
    }
    
    function ViewerZoomStart() {
      if( G.O.viewerZoom && !G.VOM.viewerImageIsChanged ) {
      var item=G.VOM.Item(G.VOM.currItemIdx);
        if( item.imageHeight > 0 && item.imageWidth > 0 ) {
          if( G.VOM.isZooming === false ) {
            // default zoom
            var h=G.VOM.$viewer.height()-G.VOM.padding.H;
            G.VOM.currentZoom=h/item.imageHeight;
            G.VOM.isZooming=true;
          }
          return true;
        }
      }
    }
          
    function ViewerZoomIn( zoomIn ) {
      if( zoomIn ) {
        // zoom in
        G.VOM.currentZoom+=0.1;
        if( G.VOM.currentZoom > 2 ) {
          G.VOM.currentZoom=2;
        }
      }
      else {
        // zoom out
        G.VOM.currentZoom-=0.1;
        if( G.VOM.currentZoom < 0.2 ) {
          G.VOM.currentZoom=0.2;
        }
      }
      ViewerZoomApply();
    }


    function ViewerZoomApply() {
          
      // var curZ=G.VOM.currentZoom;
      var item=G.VOM.Item(G.VOM.currItemIdx);
        // if( item.imageHeight > 0 && item.imageWidth > 0 ) {

      var imageCurrentHeight=(item.imageHeight/window.devicePixelRatio) * G.VOM.currentZoom;
      var imageCurrentWidth=(item.imageWidth/window.devicePixelRatio) * G.VOM.currentZoom;
      G.VOM.$imgC.children().eq(0).css( {'height': imageCurrentHeight, 'max-height': 'none' });
      G.VOM.$imgC.children().eq(0).css( {'width': imageCurrentWidth, 'max-width': 'none' });

      // center image
      var posX=0;
      if( imageCurrentWidth > G.VOM.window.lastWidth ) {
        posX=-(imageCurrentWidth-G.VOM.window.lastWidth)/2;
      }
      var h=G.VOM.$viewer.height()-G.VOM.padding.H;
      var posY=0;
      if( imageCurrentHeight > G.VOM.window.lastHeight ) {
        posY=(imageCurrentHeight-G.VOM.window.lastHeight)/2;
      }
      posY=0;   // actually it seems that the image is always centered vertically -> so no need to to anything
      G.VOM.zoomPosX=posX;
      G.VOM.zoomPosY=posY;

      ResizeInternalViewer(true);
    }

    
    // toggle slideshow mode on/off
    function SlideshowToggle(){
      if( G.VOM.playSlideshow ) {
        window.clearTimeout(G.VOM.playSlideshowTimerID);
        G.VOM.playSlideshow=false;
        G.VOM.$viewer.find('.playPauseButton').html(G.O.icons.viewerPlay);
      }
      else {
        G.VOM.playSlideshow=true;
        DisplayNextImage();
        G.VOM.$viewer.find('.playPauseButton').html(G.O.icons.viewerPause);
      }
    }

    function ViewerToolbarForVisibilityStd() {
      G.VOM.toolbarMode='std';
      
      var sTB='';
      var t = G.O.viewerToolbar.standard.split(',');
      for( var i=0, lt=t.length; i<lt; i++) {
        sTB+=ToolbarAddElt( t[i] );
      }
      G.VOM.$toolbar.find('.toolbar').html(sTB);
      ViewerToolbarElementContent();
    }
    
    function ViewerToolbarForVisibilityMin() {
      if( G.O.viewerToolbar.minimized == undefined || G.O.viewerToolbar.minimized == '' ) {
        ViewerToolbarForVisibilityStd();
      }
      else {
        G.VOM.toolbarMode='min';
        var sTB='';
        var t = G.O.viewerToolbar.minimized.split(',');
        for( var i=0, lt=t.length; i<lt; i++) {
          sTB+=ToolbarAddElt( t[i] );
        }
        G.VOM.$toolbar.find('.toolbar').html(sTB);
        ViewerToolbarElementContent();
      }
    }
    
    function ViewerToolbarElementContent() {
    
      var vomIdx=G.VOM.currItemIdx;
      if( vomIdx == null ) { return; }
      
      var item=G.VOM.Item(vomIdx);
    
      // LABEL
      var setTxt=false;
      // set title
      if( item.title !== undefined && item.title != '' ) {
        G.VOM.$viewer.find('.ngy2viewerToolAction').find('.title').html(item.title);
        setTxt=true;
      }
      else {
        G.VOM.$viewer.find('.ngy2viewerToolAction').find('.title').html('');
      }
      // set description
      if( item.description !== undefined && item.description != '' ) {
        G.VOM.$viewer.find('.ngy2viewerToolAction').find('.description').html(item.description);
        setTxt=true;
      }
      else {
        G.VOM.$viewer.find('.ngy2viewerToolAction').find('.description').html('');
      }
      
      if( setTxt ) {
        G.VOM.$viewer.find('.ngy2viewerToolAction').find('.label').show();
      }
      else {
        G.VOM.$viewer.find('.ngy2viewerToolAction').find('.label').hide();
      }
      
      // set page number
      var viewerMaxImages=G.VOM.items.length;
      if( viewerMaxImages > 0 ) {
        G.VOM.$viewer.find('.pageCounter').html((G.VOM.items[vomIdx].imageNumber)+'/'+viewerMaxImages);
      }
      
      // custom elements
      var $cu=G.VOM.$viewer.find('.ngy2CustomBtn');
      if( $cu.length > 0 && G.O.fnImgToolbarCustDisplay !== null ) {
        if( typeof G.O.fnImgToolbarCustDisplay == 'function' ) {
          G.O.fnImgToolbarCustDisplay($cu, item);
        }
        else {
          // defined in markup
          window[G.O.fnImgToolbarCustDisplay]($cu, item);
        }
      }
      
      // set event handlers again
      ViewerToolsOn();
    }
    
    // Scroll the image in the lightbox (left/right)
    function ImageSwipeTranslateX( posX ) {
      G.VOM.swipePosX=posX;
      if( G.CSStransformName == null ) {
        // no pan if CSS transform not supported
        // G.VOM.$imgC.css({ left: posX }); 
      }
      else {
        G.VOM.$imgC[0].style[G.CSStransformName]= 'translateX('+posX+'px)';
        if(  G.O.imageTransition == 'swipe' ) {
          if( posX > 0 ) {
            var $new=G.VOM.$imgP;
            // var dir=getViewport().w;
            var dir=G.VOM.$viewer.width();
            // G.VOM.$imgP.css({visibility:'visible', left:0, opacity:1});
            G.VOM.$imgP.css({visibility:'visible', opacity:1});
            G.VOM.$imgP[0].style[G.CSStransformName]= 'translateX('+(-dir+posX)+'px) '
            G.VOM.$imgN[0].style[G.CSStransformName]= 'translateX('+(-dir)+'px) '
          }
          else {
            var $new=G.VOM.$imgN;
            // var dir=-getViewport().w;
            var dir=-G.VOM.$viewer.width();
            // G.VOM.$imgN.css({visibility:'visible', left:0, opacity:1});
            G.VOM.$imgN.css({visibility:'visible', opacity:1});
            G.VOM.$imgN[0].style[G.CSStransformName]= 'translateX('+(-dir+posX)+'px) '
            G.VOM.$imgP[0].style[G.CSStransformName]= 'translateX('+(-dir)+'px) '
          }
        }
      }
    }
    
    // Display next image
    function DisplayNextImage() {
      if( G.VOM.viewerImageIsChanged ) { return; }
      if( (new Date().getTime()) - G.VOM.timeImgChanged < 300 ) { return; }
      
      TriggerCustomEvent('lightboxNextImage');
      DisplayInternalViewer(G.VOM.IdxNext(G.VOM.currItemIdx), 'nextImage');
    };
    
    // Display previous image
    function DisplayPreviousImage() {
      if( G.VOM.viewerImageIsChanged ) { return; }
      if( (new Date().getTime()) - G.VOM.timeImgChanged < 300 ) { return; }
      if( G.VOM.playSlideshow ) {
        SlideshowToggle();
      }
      
      TriggerCustomEvent('lightboxPreviousImage');
      DisplayInternalViewer(G.VOM.IdxPrevious(G.VOM.currItemIdx), 'previousImage');
    };
    
    // Display image (and run animation)
    function DisplayInternalViewer( vomIdx, displayType ) {

      G.VOM.$imgC.children().eq(0).unbind('.imagesLoaded');
      if( G.VOM.playSlideshow ) {
        window.clearTimeout(G.VOM.playSlideshowTimerID);
      }
      
      var item=G.VOM.Item(G.VOM.currItemIdx);
      var itemNew=G.VOM.Item(vomIdx);
      var $new=(displayType == 'nextImage' ? G.VOM.$imgN : G.VOM.$imgP);

      G.VOM.timeImgChanged=new Date().getTime();
      G.VOM.viewerImageIsChanged=true;
      G.VOM.isZooming=false;
      ResizeInternalViewer(true);
 
      var displayNext=true;
      
      if( G.O.debugMode && console.timeline ) { console.timeline('nanogallery2_viewer'); }

      G.VOM.currItemIdx=vomIdx;
      var vP=getViewport();

      SetLocationHash( itemNew.albumID, itemNew.GetID() );
      
      if( displayType == '' ) {
        // first image --> just appear / no slide animation
        G.VOM.$imgC.css({ opacity:1, visibility: 'visible'});
        if( G.CSStransformName == null ) {
          // no CSS transform support -> no animation
          $new.css({ opacity: 1, visibility: 'visible'});
          DisplayInternalViewerComplete(vomIdx,displayType);
        }
        else {
          $new.css({ opacity:0, visibility:'visible'});
          var tweenable = new NGTweenable();
          tweenable.tween({
            from:         { scale: 0.8, opacity: 0 },
            to:           { scale: 1,   opacity: 1 },
            attachment:   { idx: vomIdx, dT: displayType, item: item },
            easing:       'easeInOutSine',
            duration:     400,
            step:         function (state, att) {
              // using scale is not a good idea on Chrome -> image will be blurred
              // G.VOM.$content.css( G.CSStransformName, 'scale('+state.scale+')').css('opacity', state.opacity);
              G.VOM.$content.css('opacity', state.opacity);
              ViewerImageOpacityOn(G.VOM.$imgC, att.item);

            },
            finish:       function (state, att) {
              // G.VOM.$content.css( G.CSStransformName, '').css('opacity', 1);
              G.VOM.$content.css('opacity', 1);
              ViewerImageOpacityOn(G.VOM.$imgC, att.item);
              ViewerToolsUnHide();
              DisplayInternalViewerComplete(att.idx, att.dT);
            }
          });
        }
      }
      else {
        // animate the image change
        switch( G.O.imageTransition.toUpperCase() ) {
          case 'FADE':
            var $new=(displayType == 'nextImage' ? G.VOM.$imgN : G.VOM.$imgP);
            $new.css({ opacity:0, left:0, visibility:'visible'});
            var tweenable = new NGTweenable();
            tweenable.tween({
              from:       { o: 0 },
              to:         { o: 1 },
              easing:     'easeInOutSine',
              attachment: { idx:vomIdx, dT:displayType, $e:$new },
              duration:   300,
              step:       function (state, att) {
                G.VOM.$imgC.css({ opacity: 1-state.o }); 
                att.$e.css({ opacity: state.o });
              },
              finish:     function (state, att) {
                G.VOM.$imgC.css({ opacity: 0 });
                att.$e.css({ opacity: 1 });
                DisplayInternalViewerComplete(att.idx, att.dT);
              }
            });
            break;
            
          case 'SWIPE':
            if( G.CSStransformName == null  ) {
              // no CSS transform support -> no animation
              $new.css({ opacity: 1, visibility: 'visible' });
              G.VOM.$imgC.css({ opacity:1 });
              DisplayInternalViewerComplete(vomIdx, displayType);
            }
            else {
              var dir=(displayType == 'nextImage' ? - vP.w : vP.w);
              $new.css({ visibility:'visible'});
              $new[0].style[G.CSStransformName]= 'translateX('+(-dir)+'px) '
              var tweenable = new NGTweenable();
              tweenable.tween({
                from:         { t: G.VOM.swipePosX  },
                to:           { t: (displayType == 'nextImage' ? - vP.w : vP.w) },
                attachment:   { idx:vomIdx, dT:displayType, $e:$new, item: item, itemNew: itemNew, dir:dir },
                duration:     300,
                easing:       'easeInOutSine',
                step:         function (state, att) {
                  // current image
                  ViewerImageOpacityOn(G.VOM.$imgC, att.item);
                  G.VOM.$imgC[0].style[G.CSStransformName]= 'translateX('+state.t+'px)';
                  // new image
                  ViewerImageOpacityOn(att.$e, att.itemNew);
                  att.$e[0].style[G.CSStransformName]= 'translateX('+(-att.dir+state.t)+'px) ';
                },
                finish:       function (state, att) {
                  // current image
                  ViewerImageOpacityOn(G.VOM.$imgC, att.item);
                  G.VOM.$imgC[0].style[G.CSStransformName]= '';
                  // new image
                  ViewerImageOpacityOn(att.$e, att.itemNew);
                  att.$e[0].style[G.CSStransformName]= '';
                  DisplayInternalViewerComplete(att.idx, att.dT);
                }
              });
            }
            break;
            
          case 'SLIDEAPPEAR':
          default:
            if( G.CSStransformName == null  ) {
              // no CSS transform support -> no animation
              $new.css({ opacity: 1, visibility: 'visible' });
              G.VOM.$imgC.css({ opacity:1 });
              DisplayInternalViewerComplete(vomIdx, displayType);
            }
            else {
              var dir=(displayType == 'nextImage' ? - vP.w : vP.w);
              $new.css({ visibility:'visible'});
              var tweenable = new NGTweenable();
              tweenable.tween({
                from:         { o: 0, t: G.VOM.swipePosX },
                to:           { o: 1, t: (displayType == 'nextImage' ? - vP.w : vP.w) },
                attachment:   { idx:vomIdx, dT:displayType, $e:$new, item: item, itemNew: itemNew, dir: dir },
                duration:     300,
                easing:       'easeInOutSine',
                step:         function (state, att) {
                  // current image - translate
                  ViewerImageOpacityOn(G.VOM.$imgC, att.item);
                  G.VOM.$imgC[0].style[G.CSStransformName]= 'translateX('+state.t+'px)';
                  // new image - opacity
                  att.$e.css({ opacity: state.o });
                  ViewerImageSetSize(att.$e, att.itemNew);
                },
                finish:       function (state, att) {
                  // current image
                  ViewerImageOpacityOn(G.VOM.$imgC, att.item);
                  G.VOM.$imgC[0].style[G.CSStransformName]= '';
                  // new image
                  att.$e.css({ opacity: 1 });
                  DisplayInternalViewerComplete(att.idx, att.dT);
                }
              });
            }
            break;
        }
      }
    }
  

    function DisplayInternalViewerComplete( vomIdx, displayType ) {

      ViewerToolbarElementContent();
      if( G.O.debugMode && console.timeline ) { console.timelineEnd('nanogallery2_viewer'); }

      if( G.O.fnImgDisplayed !== null ) {
        if( typeof G.O.fnImgDisplayed == 'function' ) {
          // if( !G.O.fnImgDisplayed(G.VOM.Item(vomIdx)) ) { return; }
          G.O.fnImgDisplayed(G.VOM.Item(vomIdx));
        }
        else {
          // defined in markup
          //if( !window[G.O.fnImgDisplayed](G.VOM.Item(vomIdx)) ) { return; }
          window[G.O.fnImgDisplayed](G.VOM.Item(vomIdx));
        }
      }
      
      G.VOM.swipePosX=0;
      
      G.VOM.$imgC.off("click");
      G.VOM.$imgC.removeClass('imgCurrent');
    
      var $tmp=G.VOM.$imgC;
      switch( displayType ) {
        case 'nextImage':
          G.VOM.$imgC=G.VOM.$imgN;
          G.VOM.$imgN=$tmp;
          break;
        case 'previousImage':
          G.VOM.$imgC=G.VOM.$imgP;
          G.VOM.$imgP=$tmp;
          break;
      }
      G.VOM.$imgC.addClass('imgCurrent');
      G.VOM.$imgC.css({ opacity: 1 });
      
      // new next image
      // G.VOM.$imgN.css({ opacity:0, left:0, visibility:'hidden' }).attr('src','');
      // G.VOM.$imgN.css({ opacity: 0 }).attr('src', '');
      G.VOM.$imgN.css({ opacity: 0 });
      G.VOM.ImageLoader.loadImage(VieweImgSizeRetrieved, G.VOM.ItemNext(vomIdx).responsiveURL(), G.VOM.ItemNext(vomIdx));
      G.VOM.$imgN.children().eq(0).attr('src', '');
      G.VOM.$imgN.children().eq(0).attr('src',G.emptyGif).attr('src', G.VOM.ItemNext(vomIdx).responsiveURL());
      ViewerDisplayDominantColors(G.VOM.ItemNext(vomIdx), G.VOM.$imgN.children());

      // new previous image
      // G.VOM.$imgP.css({ opacity:0, left:0, visibility:'hidden'}).attr('src', '');
      // G.VOM.$imgP.css({ opacity: 0 }).attr('src', '');
      G.VOM.$imgP.css({ opacity: 0 });
      G.VOM.$imgP.children().eq(0).attr('src', '');
      G.VOM.ImageLoader.loadImage(VieweImgSizeRetrieved, G.VOM.ItemPrevious(vomIdx).responsiveURL(), G.VOM.ItemPrevious(vomIdx));
      G.VOM.$imgP.children().eq(0).attr('src',G.emptyGif).attr('src',G.VOM.ItemPrevious(vomIdx).responsiveURL());
      ViewerDisplayDominantColors(G.VOM.ItemPrevious(vomIdx), G.VOM.$imgP.children());


      // slideshow mode - wait until image is loaded to start the delay for next image
      if( G.VOM.playSlideshow ) {
        G.VOM.$imgC.children().eq(0).ngimagesLoaded().always( function( instance ) {
          if( G.VOM.playSlideshow ) {
            // in the meantime the user could have stopped the slideshow
            G.VOM.playSlideshowTimerID=window.setTimeout( function(){DisplayNextImage(); }, G.VOM.slideshowDelay);
          }
        });
      }
      
      // close viewer when user clicks outside of the image
      G.VOM.$imgC.on("click",function(e){
        e.stopPropagation();
        if( (new Date().getTime()) - G.VOM.timeImgChanged < 400 ) { return; }
        StopPropagationPreventDefault(e);
        CloseInternalViewer(vomIdx);
        return false;
      });

      ResizeInternalViewer();

      G.VOM.viewerImageIsChanged=false;
      TriggerCustomEvent('lightboxImageDisplayed');
      
    }

    // display image only when the size is knowed
    function ViewerImageOpacityOn( $img, item ) {
      if( $img[0].style.opacity == 0 && item.imageWidth != 0 ) {
        // display it when the size is knowed
        ViewerImageSetSize($img, item);
        $img[0].style.opacity=1;
      }
    }

    // Close the internal lightbox
    function CloseInternalViewer( vomIdx ) {

      G.VOM.viewerImageIsChanged=false;

      if( G.VOM.viewerDisplayed ) {

        // set scrollbar visible
        jQuery('body').css({overflow:'visible'});
        
        
        if( G.VOM.playSlideshow ) {
          window.clearTimeout(G.VOM.playSlideshowTimerID);
          G.VOM.playSlideshow=false;
        }

        // G.VOM.userEvents.removeEventListeners();
        // G.VOM.userEvents=null;
        G.VOM.hammertime.destroy();
        G.VOM.hammertime=null;

        if( ngscreenfull.enabled && G.VOM.viewerIsFullscreen ) {
          G.VOM.viewerIsFullscreen=false;
          ngscreenfull.exit();
        }
        
        G.VOM.$cont.hide(0).off().show(0).html('').remove();
        G.VOM.viewerDisplayed=false;

        if( vomIdx != null ) {
          if( G.GOM.albumIdx == -1 ) {
            // album not displayed --> display gallery
            DisplayAlbum( '', G.VOM.Item(vomIdx).albumID );
          }
          else {
            GalleryResize();        
            SetLocationHash( G.VOM.Item(vomIdx).albumID, '' );
            ThumbnailHoverReInitAll();
          }
        }
        G.VOM.timeImgChanged=new Date().getTime();
      }
    }

    // Internal viewer resized -> reposition elements
    function ResizeInternalViewer( forceUpdate ) {
      forceUpdate = typeof forceUpdate !== 'undefined' ? forceUpdate : false;
      
      // window.requestAnimationFrame( function() {    // synchronize with screen
      var windowsW=G.VOM.$viewer.width();
      var windowsH=G.VOM.$viewer.height();
      var $elt=G.VOM.$imgC.children().eq(0);
      if( $elt == null || G.VOM.currItemIdx == -1 ) { return; }
      
      if( !forceUpdate && G.VOM.window.lastWidth == windowsW  && G.VOM.window.lastHeight == windowsH ) { return; }
      
      G.VOM.window.lastWidth=windowsW;
      G.VOM.window.lastHeight=windowsH;

      var vwImgC_H=$elt.height(),
      vwImgC_W=$elt.width(),
      vwImgC_OHt=$elt.outerHeight(true),
      vwImgC_OHf=$elt.outerHeight(false);

      var $tb=G.VOM.$toolbar.find('.toolbar');
      var tb_OHt=$tb.outerHeight(true);

      switch( G.O.viewerToolbar.position ) {
        case 'topOverImage':
          G.VOM.$content.css({height:windowsH, width:windowsW, top:0  });
          G.VOM.$toolbar.css({top: 0, bottom:''});
          break;
        case 'top':
          windowsH-=tb_OHt;
          G.VOM.$content.css({height:windowsH, width:windowsW, top:tb_OHt  });
          G.VOM.$toolbar.css({top: 0});
          break;
        case 'bottomOverImage':
          G.VOM.$content.css({height:windowsH, width:windowsW, bottom:0, top:0  });
          G.VOM.$toolbar.css({bottom: 0});
          break;
        case 'bottom':
        default:
          windowsH-=tb_OHt;
          G.VOM.$content.css({ width:windowsW, top:0, bottom:tb_OHt });
          G.VOM.$toolbar.css({bottom: 0});
          break;
      }

      if( !G.VOM.viewerImageIsChanged && G.VOM.isZooming ) {
        ViewerImageSetPosition(G.VOM.panPosX, G.VOM.panPosY, false);
      }
      else {
        G.VOM.isZooming=false;
        G.VOM.panPosX=0;
        G.VOM.panPosY=0;
        G.VOM.zoomPosX=0;
        G.VOM.zoomPosY=0;
        G.VOM.$imgC[0].style[G.CSStransformName]= 'translate3D(0,0,0) ';
        
        var maxW=windowsW-G.VOM.padding.H;
        
        var item=G.VOM.Item(G.VOM.currItemIdx);
        ViewerImageSetSize(G.VOM.$imgC, item);
        ViewerImageSetSize(G.VOM.$imgN, G.VOM.ItemNext(G.VOM.currItemIdx));
        ViewerImageSetSize(G.VOM.$imgP, G.VOM.ItemPrevious(G.VOM.currItemIdx));
      }
    }
    
    function ViewerImageSetSize( $img, item) {
      var maxW=G.VOM.window.lastWidth-G.VOM.padding.H;
    
      if( item.imageWidth > 0 &&  window.devicePixelRatio > 1 ) {
        var w=item.imageWidth/window.devicePixelRatio;
        if( maxW > w ) {
          maxW=w;
        }
      }

      $img.find('img').css({'max-width':(maxW), 'max-height':(G.VOM.window.lastHeight-G.VOM.padding.V), 'height':'auto', 'width':'auto' });
    }
    
    // position the image depending on the zoom factor and the pan X/Y position
    function ViewerImageSetPosition(posX, posY, savePosition ) {

      if( savePosition ) {
        G.VOM.panPosX=posX;
        G.VOM.panPosY=posY;
      }

      posX+=G.VOM.zoomPosX;
      posY+=G.VOM.zoomPosY;
    
      G.VOM.$imgC[0].style[G.CSStransformName]= 'translate3D('+ posX+'px, '+ posY+'px, 0) ';
    }
    

    /** @function BuildSkeleton */
    /** Build the gallery structure **/
    function BuildSkeleton() {
    
      // store markup if defined
      var $elements=G.$E.base.children('a');
      if( $elements.length > 0 ) {
        G.O.$markup=$elements;
      }
      G.$E.base.text('');
      G.$E.base.addClass('ngy2_container');
      
      // RTL or LTR
      var sRTL='';
      if( G.O.RTL ) {
        sRTL='style="text-align:right;direction:rtl;"';
      }
    
      // theme
      G.$E.base.addClass(G.O.theme)
      // gallery color scheme
      SetColorScheme();

      // Hide icons (thumbnails and breadcrumb)
      if( G.O.thumbnailLabel.get('hideIcons') ) {
        G.O.icons.thumbnailAlbum='';
        G.O.icons.thumbnailImage='';
      }

      // Navigation bar
      var styleNavigation="";
      if( G.O.navigationFontSize != undefined && G.O.navigationFontSize != '' ) {
        styleNavigation=' style="font-size:'+G.O.navigationFontSize+';"';
      }      
      G.$E.conNavigationBar=jQuery('<div class="nGY2Navigationbar" '+styleNavigation+'></div>').appendTo(G.$E.base);

      // pre-loader
      G.$E.conLoadingB=jQuery('<div class="nanoGalleryLBarOff"><div></div><div></div><div></div><div></div><div></div></div>').appendTo(G.$E.base);

      // gallery
      G.$E.conTnParent=jQuery('<div class="nGY2Gallery"></div>').appendTo(G.$E.base);
      G.$E.conTn=jQuery('<div class="nGY2GallerySub"></div>').appendTo(G.$E.conTnParent);

      // configure gallery
      switch( G.O.thumbnailAlignment ) {
        case 'left':
          G.$E.conTnParent.css({'text-align':'left'});
          // G.$E.conNavBCon.css({'margin-left':0 });
          break;
        case 'right':
          G.$E.conTnParent.css({'text-align':'right'});
          // G.$E.conNavBCon.css({ 'margin-right':0});
          break;
      }
      
      // apply galleryBuildInit2 css settings to the gallery
      if( G.O.galleryBuildInit2 !== undefined ) {
      var t1=G.O.galleryBuildInit2.split('|');
        for( var i=0; i<t1.length; i++ ) {
          var o1=t1[i].split('_');
          if( o1.length == 2 ) {
            G.$E.conTn.css(o1[0], o1[1]);
          }
        }
      }
      
      // configure gallery depending on some thumbnail hover effects
      var effects=G.tn.hoverEffects.std.concat(G.tn.hoverEffects.level1);
      for( var j=0; j<effects.length; j++) {
        switch( effects[j].type ) {
          case 'scale':
          case 'rotateZ':
          case 'rotateX':
          case 'rotateY':
          case 'translateX':
          case 'translateY':
          case 'translateY':
            // handle some special cases
            if( effects[j].element == '.nGY2GThumbnail' ) {
              // allow thumbnail upscale over the gallery's aera
              G.$E.base.css('overflow', 'visible');
              G.$E.base.find('.nGY2GallerySub').css('overflow', 'visible');
              G.$E.conTnParent.css('overflow', 'visible');
            }
            break;
        }
      }
      
      // Gallery bottom container
      G.$E.conTnBottom=jQuery('<div class="nGY2GalleryBottom" '+styleNavigation+'></div>').appendTo(G.$E.conTnParent);
      
      // portable
      if( G.O.portable ) {
        // http://www.picresize.com/
        // http://base64encode.net/base64-image-encoder
        var logo='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAWCAYAAAA4oUfxAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH4QMPBwY6mxZgsAAABTFJREFUSMe1ll9oVGcaxn/fd86ZSWbSkEBMiWNdTTfRxiVbXFiU1bjKGqNexlURKys0tHqXpQZ64Sq4FxKqFy4qFSm9kA1FHNhFISgJqFCd6lL/YC7M3jhrJv5JmGSSMzPnzDnfuxdpZtP4b1vaF154P3gPD+/zPC/nVSKiAQOsBj7O5XK/nZiYeEtELH6iUEqFNTU1U9XV1d8AnwNfA1qJCMCfHz169NcjR45UXL16VWWzWQnD0PxU4JZl6draWtXW1iYHDx4sLlmy5C/AZwRB0JVOpyWRSHhACMjPmOHChQuL6XRagiDoUiIyumvXrpq+vr6obduqs7OTjRvbsbSFUgqUgKjyFG5+mlKpVH6LCMYYRAQRQSmF1hqtNd+xijGGVCpFMpkkCALZuXOn19fXN6Gmp6dNc3NzMDo66nR2dnL+/Hm+Ov933PwUAPHKagqei4gBFNs7dxGPx38U/du2bSOZTNLQ0FB6+PChbWez2WI+n3dEhI3tf+Det0N8de0Imz9YQWHa48u/3afjgxbqEpUM/es/uF8W+fijffi+TywWQ0S4fv06t2/fJpfLsXjxYtauXUtTUxNBECAihGFIJBJh1apVXLhwgXw+r7LZbNGeYU7MLD1BEPCLxkWs+HUT+SmPJY0TvPerd6l/J05YcLCGHWzbxrZtHjx4wP79+7l27dr3Jqyurqarq4ujR49i2zYAWmvCMJyVygCiZ7dh9kOtNb5XopD3KBQ8fL9EseBRyHsUCz6zS3Dnzh3WrVtXBq6oqGDBggUA5HI5jh07xo4dOzDmf0ujVBlGAWjmhTGC41hEow6RiI3j2DgRh0jUxonYWJaFGGHPnj2Mj49jWRYHDhzg7t27DA0NMTAwwOrVqwFIJpOcOHECx3Fe6oEXwG3bYux5ltHHz3mSGePpk+c8yczUI+knVFVVcePmDe7fvw9AT08Pvb29NDc3U1dXx4YNG7h8+TItLS1orTl58iT5fL68Ga8En55yWb6iifff/iPD/0iQGfglG3/zJ6a+beHf/3yH6Mjv+P269Vy5cgWlFDU1NXR3dxOGYdlcnudRVVXFvn37MMaQTqcZHh5+Kbg99zHjSodPuj997cqMjY0hItTW1hKPx9FalzW1LIswDFm0aBEAQRDguu6bJ581hOd5GBNiTEgYhuXa8z1EhIaGBgAymQzpdBqlFKVSiTCc6bcsi5s3bwJQWVlJfX39fMO9XHMAy7LQeibn1o7toJSio6MDAN/36e7uxvd9IpEIlmURjUZJpVKcOXMGpRStra0sXbr0peDfo30+LS+4U2uMMaxcuZLdu3dz7tw5+vv7aWtrY+/evdTX13Pr1i1OnTrF5OQkAIcPH8ayrNeCvx51njTGGE6fPk0mk2FwcJBUKkUqlXqh9/jx42zatKnMzJzhBEArpZT+zjGWZSEiBEHwypzVtbKykosXL3Lo0CEaGxvLpovFYqxZs4ZLly6VJQnDEBEpM6C11kopheu6JpFI+Fpr2bJli/zYGBkZkeHhYZmcnHxlz9atW0VrLYlEwndd19ixWOzx5s2b3z579qzp7+/X7e3ttLa2Yox5QaP5MfenEY1G0VoTBAHFYhFjTJlJrTX37t1jYGAAY4zp6OiQWCz2mCAItj979kyWL1/uAwE/7zERLFu2zH/69KkEQbB99ozaOz4+fqy3t7d2cHAwdF1XKaXe6P7/16AiQjwel/Xr1+uenp6Jurq6T4Av1JwD8j3gQ2BVsVh8S72J8x8QIiIVFRVTQAo4CwwB+r93qCLI9wKZ8AAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wMy0xNVQwNzowNjo1OC0wNDowMBNQsyUAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDMtMTVUMDc6MDY6NTgtMDQ6MDBiDQuZAAAAAElFTkSuQmCC';
        G.$E.ngy2i=jQuery('<div class="nGY2PortInfo"><a href="http://nano.gallery" target="_blank" title="nanogallery2 | easy photo gallery for your website" style="font-weight: bold !important;color: #888 !important;font-size: 11px !important;"><img src="'+logo+'" style="height:16px !important;box-shadow: none !important;vertical-align: middle !important;"/> &nbsp; nanogallery2</a></div>').appendTo(G.$E.base);
        
        G.$E.ngy2i.find('a').on({
          mouseenter: function () {
            jQuery(this).attr('style', 'color: #73A623 !important');
          },
          mouseleave: function () {
            jQuery(this).attr('style', 'color: #888 !important');
          }
        });
      }
      
      // Error console
      G.$E.conConsole=jQuery('<div class="nGY2ConsoleParent"></div>').appendTo(G.$E.base);

      // i18n translations
      i18n();

      // cache some thumbnails data (sizes, styles...)
      ThumbnailDefCaches();

      // do special settings depending for some options
      // thumbnail display transition
      switch( G.tn.opt.Get('displayTransition') ) {
        case 'SCALEDOWN':
        case 'RANDOMSCALE':
        default:
          G.$E.base.css('overflow', 'visible');
          G.$E.conTnParent.css('overflow', 'visible');
          G.$E.conTn.css('overflow', 'visible');
          break;
      }
      
    }
    
    function TriggerCustomEvent ( eventName ) {
      // G.$E.base.trigger('pageChanged.nanogallery2', new Event('pageChanged.nanogallery2'));
      var eN = eventName + '.nanogallery2';
      var event=null;
      try {
          event = new Event( eN );
        } catch(e) {
          event = document.createEvent('Event');
          event.initEvent(eN, false, false);
        }
        G.$E.base.trigger(eN, event);
    }
    
    
    /** @function SetGlobalEvents */
    function SetGlobalEvents() {
      // GLOBAL EVENT MANAGEMENT
      
      G.$E.conTnParent.on({
        mouseenter: GalleryMouseEnter,
        mouseleave: GalleryMouseLeave
      }, ".nGY2GThumbnail"); //pass the element as an argument to .on
      
      // G.GOM.hammertime = new NGHammer(G.$E.conTn[0], { touchAction: 'none' });
      G.GOM.hammertime = new NGHammer(G.$E.conTn[0]);
      // G.GOM.hammertime.domEvents = true;
      
      G.GOM.hammertime.on('pan', function(ev) {
        if( G.O.paginationSwipe && G.layout.support.rows && G.galleryDisplayMode.Get() == 'PAGINATION' ) {
          G.$E.conTn.css( G.CSStransformName , 'translateX('+(ev.deltaX)+'px)');
        }
      });
      G.GOM.hammertime.on('panend', function(ev) {
        if( G.O.paginationSwipe && G.layout.support.rows && G.galleryDisplayMode.Get() == 'PAGINATION' ) {
          if( Math.abs(ev.deltaY) > 100 ) {
            // user moved vertically -> cancel pagination
            G.$E.conTn.css( G.CSStransformName , 'translateX(0px)');
            return;
          }
          if( ev.deltaX > 50 ) {
            paginationPreviousPage();
            return;
          }
          if(  ev.deltaX < -50 ) {
            paginationNextPage();
            return;
          }
          G.$E.conTn.css( G.CSStransformName , 'translateX(0px)');
          // pX=0;
        }
      });
      G.GOM.hammertime.on('tap', function(ev) {
        ev.srcEvent.stopPropagation();
        ev.srcEvent.preventDefault();  // cancel  mouseenter event

        if( ev.pointerType == 'mouse') {
          if( GalleryClicked(ev.srcEvent) == 'exit' ) { return; }
        }
        else {
          var r=GalleryEventRetrieveElementl(ev.srcEvent, false);
          if( r.GOMidx == -1 ) { return; }
          if( r.action != 'NONE' && r.action != 'OPEN' ) {
            // toolbar touched --> execute action
            GalleryClicked(ev.srcEvent);
            return;
          }
          if( G.O.touchAutoOpenDelay > 0 ) {
            // one touch scenario
            ThumbnailHoverOutAll();
            ThumbnailHover( r.GOMidx );
            window.clearInterval( G.touchAutoOpenDelayTimerID );
            G.touchAutoOpenDelayTimerID = window.setInterval(function(){
              window.clearInterval( G.touchAutoOpenDelayTimerID );
              ThumbnailOpen( G.GOM.items[r.GOMidx].thumbnailIdx, true );
            }, G.O.touchAutoOpenDelay );
          }
          else {
            // two touch scenario
            if( !G.I[G.GOM.items[r.GOMidx].thumbnailIdx].hovered ) {
              ThumbnailHoverOutAll();
              ThumbnailHover(r.GOMidx);
            }
            else {
              // second touch
              ThumbnailOpen(G.GOM.items[r.GOMidx].thumbnailIdx, true);
            }
          }
        }
      });
      
      
      // browser location hash management
      if( G.O.locationHash ) {
        jQuery(window).bind( 'hashchange', function() {
          ProcessLocationHash();
        });
      }
      
      // Page resize
      jQuery(window).on('resize.nanogallery2.'+G.baseEltID, debounce( ResizeWindowEvent, 100, false) );
      
      // Event page scrolled
      $(window).on('scroll.nanogallery2.'+G.baseEltID,  debounce( OnScrollEvent, 100, false) );
      
      // Debounced function to hide the toolbars on the viewer
      G.VOM.toolsHide=debounce( ViewerToolsHide, G.O.viewerHideToolsDelay, false );
      
      // Keyboard management
      jQuery(document).keyup(function(e) {
        if( G.popup.isDisplayed ) {
          switch( e.keyCode) {
            case 27:    // Esc key
              G.popup.close();
              break;
          }
        }
        else {
          if( G.VOM.viewerDisplayed ) {
            ViewerToolsUnHide();
            switch( e.keyCode) {
              case 27:    // Esc key
                CloseInternalViewer(G.VOM.currItemIdx);
                break;
              case 32:    // SPACE
              case 13:    // ENTER
                SlideshowToggle();
                break;
              case 38:    // UP
              case 39:    // RIGHT
              case 33:    // PAGE UP
                DisplayNextImage();
                break;
              case 40:    // DOWN
              case 37:    // LEFT
              case 34:    // PAGE DOWN
                DisplayPreviousImage();
                break;
              case 35:    // END
              case 36:    // BEGIN
            }
          }
        }
      });
      
      // mouse wheel to zoom in/out the image displayed in the internal lightbox
      jQuery(window).bind('mousewheel wheel', function(e){
        if( G.VOM.viewerDisplayed ) {
          var deltaY = 0;
          e.preventDefault();

          if( ViewerZoomStart() ) {
            if (e.originalEvent.deltaY) { // FireFox 17+ (IE9+, Chrome 31+?)
              deltaY = e.originalEvent.deltaY;
            } else if (e.originalEvent.wheelDelta) {
              deltaY = -e.originalEvent.wheelDelta;
            }
            ViewerZoomIn( deltaY <= 0 ? true : false );
          }
        }
      });
      
      // mouse mouse -> unhide lightbox toolbars
      jQuery(window).bind('mousemove', function(e){
        if( G.galleryResizeEventEnabled ) {
          ViewerToolsUnHide();
        }
      });
      
      // fullscreen mode on/off --> internal lightbox
      if( ngscreenfull.enabled ) {
        // ngscreenfull.onchange(() => {
        ngscreenfull.onchange( function() {
          if( G.VOM.viewerDisplayed ) {
            if( ngscreenfull.isFullscreen ) {
              G.VOM.viewerIsFullscreen=true;
              G.VOM.$viewer.find('.fullscreenButton').html(G.O.icons.viewerFullscreenOff);
            }
            else {
              G.VOM.viewerIsFullscreen=false;
              G.VOM.$viewer.find('.fullscreenButton').html(G.O.icons.viewerFullscreenOn);
            }
          }
        });
      }

    }
    
    //----- Manage browser location hash (deep linking and browser back/forward)
    function ProcessLocationHash() {

      // standard use case -> location hash processing
      if( !G.O.locationHash ) { return false; }

      var curGal='#nanogallery/'+G.baseEltID+'/',
      newLocationHash=location.hash;
      if( G.O.debugMode ) {
        console.log('------------------------ PROCESS LOCATION HASH');
        console.log('newLocationHash1: ' +newLocationHash);
        console.log('G.locationHashLastUsed: ' +G.locationHashLastUsed);
      }
      
      if( newLocationHash == '' ) {
        // if( G.GOM.lastDisplayedIdx != -1 ) {
        if( G.locationHashLastUsed !== '' ) {
          // back button and no hash --> display first album
          if( G.O.debugMode ) { console.log('display root album'  ); }
          G.locationHashLastUsed='';
          if( G.O.debugMode ) { console.log('new3 G.locationHashLastUsed: '+G.locationHashLastUsed); }
          DisplayAlbum( '', '0');
          return true;
        }
      }

      if( newLocationHash == G.locationHashLastUsed ) { return; }
      
      if( newLocationHash.indexOf(curGal) == 0 ) {
        // item IDs detected
        var IDs=parseIDs( newLocationHash.substring(curGal.length) );
        if( IDs.imageID != '0' ) {
          if( G.O.debugMode ) { console.log('display image: ' + IDs.albumID +'-'+ IDs.imageID ); }
          DisplayPhoto( IDs.imageID, IDs.albumID );
          return true;
        }
        else {
          if( G.O.debugMode ) { console.log('display album: ' + IDs.albumID  ); }
          DisplayAlbum( '-1', IDs.albumID );
          return true;
        }
      }    
      
      return false;
    }

    //---- Set a new browser location hash
    function SetLocationHash(albumID, imageID ) {
      if( !G.O.locationHash ) { return false; }

      if( G.O.debugMode ) {
        console.log('------------------------ SET LOCATION HASH');
      }
      
      if( imageID == '' && (albumID == '-1' || albumID == '0' || G.O.album == albumID ) ) {
        // root album level --> do not set top.location.hash if not already set
        if( location.hash != '' ) {
          // try to clear the hash if set
          if ("pushState" in history) {
            history.pushState("", document.title, window.location.pathname + window.location.search);
          }
          else {
            location.hash='';
          }
        }
        G.locationHashLastUsed='';
        if( G.O.debugMode ) { console.log('new2 G.locationHashLastUsed: '+G.locationHashLastUsed); }
        return;
      }
      
      var newLocationHash='#'+'nanogallery/'+G.baseEltID+'/'+ albumID;
      if( imageID != '' ) {
        newLocationHash+='/'+imageID;
      }

      var lH=location.hash;
      if( G.O.debugMode ) {
        console.log('newLocationHash2: '+newLocationHash);
        console.log('location.hash: '+lH);
      }

      G.locationHashLastUsed=newLocationHash;
      if( G.O.debugMode ) { console.log('new G.locationHashLastUsed: '+G.locationHashLastUsed); }
      
      if(  lH == '' || lH != newLocationHash ) {
        // G.locationHashLastUsed='#'+newLocationHash;
        try {
          top.location.hash=newLocationHash;
        }
        catch(e) {
          // location hash is not supported by current browser --> disable the option
          G.O.locationHash=false;
        }
      }
    }
    
    
    function ResizeWindowEvent() {
      if( G.VOM.viewerDisplayed ) {
        ResizeInternalViewer();
      }
      else {
        if( G.galleryResizeEventEnabled ) {
          var nw=RetrieveCurWidth();
          if( G.GOM.albumIdx != -1 && 
                ( G.tn.settings.getH() != G.tn.settings.height[G.GOM.curNavLevel][nw] || 
                G.tn.settings.getW() != G.tn.settings.width[G.GOM.curNavLevel][nw] ) ) {
            // thumbnail size changed --> render the gallery with the new sizes
            G.GOM.curWidth=nw;
            //G.layout.SetEngine();
            G.GOM.pagination.currentPage=0;
            GalleryRender( G.GOM.albumIdx );
          }
          else {
            GalleryResize();
          }
        }
      }
    }
    
    


    
    function OnScrollEvent() {
      if( G.scrollTimeOut ) {
        clearTimeout(G.scrollTimeOut);
      }
      
      G.scrollTimeOut = setTimeout(function () {
      
        if( !G.VOM.viewerDisplayed ) {
          if( G.galleryResizeEventEnabled ) {
            GalleryResize();
          }
          return;
        }
      }, 10);
    }

    
    // I18N : define text translations
    function i18n() {

      // browser language
      G.i18nLang = (navigator.language || navigator.userLanguage).toUpperCase();
      if( G.i18nLang === 'UNDEFINED') { G.i18nLang=''; }

      var llang=-('_'+G.i18nLang).length;
      
      if( toType(G.O.i18n) == 'object' ){
      
        for( var key in G.O.i18n ) {
          //var value = G.O.i18n[key];
          var s=key.substr(llang);
          if( s == ('_'+G.i18nLang) ) {
            G.i18nTranslations[key.substr(0,key.length-s.length)]=G.O.i18n[key];
          } 
          else {
            G.i18nTranslations[key]=G.O.i18n[key];
          }
        }
      }
    }

    function GetI18nItem( item, property ) {
      var s='';
      if( G.i18nLang != '' ) {
        if( item[property+'_'+G.i18nLang] !== undefined && item[property+'_'+G.i18nLang].length>0 ) {
          s=item[property+'_'+G.i18nLang];
          return s;
        }
      }
      s=item[property];
      return s;
    }

    
    function RetrieveCurWidth() {
      var vpW= getViewport().w;
      
      if( G.O.breakpointSizeSM > 0 && vpW < G.O.breakpointSizeSM) { return 'xs'; }
      if( G.O.breakpointSizeME > 0 && vpW < G.O.breakpointSizeME) { return 'sm'; }
      if( G.O.breakpointSizeLA > 0 && vpW < G.O.breakpointSizeLA) { return 'me'; }
      if( G.O.breakpointSizeXL > 0 && vpW < G.O.breakpointSizeXL) { return 'la'; }
      
      return 'xl';
    }

    
    /** @function browserNotification */
    function browserNotification() {
      var m='Your browser version is not supported anymore. The image gallery cannot be displayed. <br><br>Please update to a more recent one. Download:<br>';
      m+='&nbsp;&nbsp;&nbsp; <a href="http://www.google.com/chrome/?hl=en-US)">Chrome</a><br>';
      m+='&nbsp;&nbsp;&nbsp; <a href="http://www.mozilla.com/firefox/)">Firefox</a><br>';
      m+='&nbsp;&nbsp;&nbsp; <a href="http://www.microsoft.com/windows/internet-explorer/default.aspx">Internet Explorer</a><br>';
      m+='&nbsp;&nbsp;&nbsp; <a href="http://www.apple.com/safari/download/">Safari</a>';
      NanoAlert(G,  m, false);
    }

    // Original author : John Hrvatin, Lead Program Manager, Internet Explorer - http://blogs.msdn.com/b/ie/archive/2011/10/28/a-best-practice-for-programming-with-vendor-prefixes.aspx
    function FirstSupportedPropertyName(prefixedPropertyNames) {
      var tempDiv = document.createElement("div");
      for (var i = 0; i < prefixedPropertyNames.length; ++i) {
        if (typeof tempDiv.style[prefixedPropertyNames[i]] != 'undefined')
          return prefixedPropertyNames[i];
      }
      return null;
    }

    // #################
    // ##### TOOLS #####
    // #################

    // get viewport coordinates and size
    function getViewport() {
      var $win = jQuery(window);
      return {
        l: $win.scrollLeft(),
        t: $win.scrollTop(),
        w: $win.width(),
        h: $win.height()
      }
    }


    // avoid if possible (performance issue)
    function inViewport( $elt, threshold ) {
      var wp=getViewport(),
      eltOS=$elt.offset(),
      th=$elt.outerHeight(true),
      tw=$elt.outerWidth(true);
      if( eltOS.top >= (wp.t-threshold) 
        && (eltOS.top+th) <= (wp.t+wp.h+threshold)
        && eltOS.left >= (wp.l-threshold) 
        && (eltOS.left+tw) <= (wp.l+wp.w+threshold) ) {
        return true;
      }
      else {
        return false;
      }
    }

    // avoid if possible (performance issue)
    function inViewportVert( $elt, threshold ) {
      var wp=getViewport(),
      eltOS=$elt.offset(),
      th=$elt.outerHeight(true),
      tw=$elt.outerWidth(true);

      if( wp.t == 0 && (eltOS.top) <= (wp.t+wp.h ) ) { return true; }

      if( eltOS.top >= (wp.t) 
        && (eltOS.top+th) <= (wp.t+wp.h-threshold) ) {
          return true;
      }
      else {
        return false;
      }
    }

    // set z-index to display element on top of all others
    function setElementOnTop( start, elt ) {
      var highest_index = 0;
      if( start=='' ) { start= '*'; }
      jQuery(start).each(function() {
        var cur = parseInt(jQuery(this).css('z-index'));
        highest_index = cur > highest_index ? cur : highest_index;
      });
      highest_index++;
      jQuery(elt).css('z-index',highest_index);
    }

    // set z-index to display 2 elements on top of all others
    function set2ElementsOnTop( start, elt1, elt2 ) {
      var highest_index = 0;
      if( start=='' ) { start= '*'; }
      jQuery(start).each(function() {
        var cur = parseInt(jQuery(this).css('z-index'));
        highest_index = cur > highest_index ? cur : highest_index;
      });
      highest_index++;
      jQuery(elt2).css('z-index',highest_index+1);
      jQuery(elt1).css('z-index',highest_index);
    }

    
    // return the real type of the object
    var toType = function( obj ) {
      // by Angus Croll - http://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
      return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
    };
    
  }
  
  
  
// END NANOGALLERY2
}( jQuery ));
  
  
  
//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################

// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// 2016-07-07, Brian Grinstead, MIT License
!function(a){function b(a,d){if(a=a?a:"",d=d||{},a instanceof b)return a;if(!(this instanceof b))return new b(a,d);var e=c(a);this._originalInput=a,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=P(100*this._a)/100,this._format=d.format||e.format,this._gradientType=d.gradientType,this._r<1&&(this._r=P(this._r)),this._g<1&&(this._g=P(this._g)),this._b<1&&(this._b=P(this._b)),this._ok=e.ok,this._tc_id=O++}function c(a){var b={r:0,g:0,b:0},c=1,e=null,g=null,i=null,j=!1,k=!1;return"string"==typeof a&&(a=K(a)),"object"==typeof a&&(J(a.r)&&J(a.g)&&J(a.b)?(b=d(a.r,a.g,a.b),j=!0,k="%"===String(a.r).substr(-1)?"prgb":"rgb"):J(a.h)&&J(a.s)&&J(a.v)?(e=G(a.s),g=G(a.v),b=h(a.h,e,g),j=!0,k="hsv"):J(a.h)&&J(a.s)&&J(a.l)&&(e=G(a.s),i=G(a.l),b=f(a.h,e,i),j=!0,k="hsl"),a.hasOwnProperty("a")&&(c=a.a)),c=z(c),{ok:j,format:a.format||k,r:Q(255,R(b.r,0)),g:Q(255,R(b.g,0)),b:Q(255,R(b.b,0)),a:c}}function d(a,b,c){return{r:255*A(a,255),g:255*A(b,255),b:255*A(c,255)}}function e(a,b,c){a=A(a,255),b=A(b,255),c=A(c,255);var d,e,f=R(a,b,c),g=Q(a,b,c),h=(f+g)/2;if(f==g)d=e=0;else{var i=f-g;switch(e=h>.5?i/(2-f-g):i/(f+g),f){case a:d=(b-c)/i+(c>b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,l:h}}function f(a,b,c){function d(a,b,c){return 0>c&&(c+=1),c>1&&(c-=1),1/6>c?a+6*(b-a)*c:.5>c?b:2/3>c?a+6*(b-a)*(2/3-c):a}var e,f,g;if(a=A(a,360),b=A(b,100),c=A(c,100),0===b)e=f=g=c;else{var h=.5>c?c*(1+b):c+b-c*b,i=2*c-h;e=d(i,h,a+1/3),f=d(i,h,a),g=d(i,h,a-1/3)}return{r:255*e,g:255*f,b:255*g}}function g(a,b,c){a=A(a,255),b=A(b,255),c=A(c,255);var d,e,f=R(a,b,c),g=Q(a,b,c),h=f,i=f-g;if(e=0===f?0:i/f,f==g)d=0;else{switch(f){case a:d=(b-c)/i+(c>b?6:0);break;case b:d=(c-a)/i+2;break;case c:d=(a-b)/i+4}d/=6}return{h:d,s:e,v:h}}function h(b,c,d){b=6*A(b,360),c=A(c,100),d=A(d,100);var e=a.floor(b),f=b-e,g=d*(1-c),h=d*(1-f*c),i=d*(1-(1-f)*c),j=e%6,k=[d,h,g,g,i,d][j],l=[i,d,d,h,g,g][j],m=[g,g,i,d,d,h][j];return{r:255*k,g:255*l,b:255*m}}function i(a,b,c,d){var e=[F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16))];return d&&e[0].charAt(0)==e[0].charAt(1)&&e[1].charAt(0)==e[1].charAt(1)&&e[2].charAt(0)==e[2].charAt(1)?e[0].charAt(0)+e[1].charAt(0)+e[2].charAt(0):e.join("")}function j(a,b,c,d,e){var f=[F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16)),F(H(d))];return e&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}function k(a,b,c,d){var e=[F(H(d)),F(P(a).toString(16)),F(P(b).toString(16)),F(P(c).toString(16))];return e.join("")}function l(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.s-=c/100,d.s=B(d.s),b(d)}function m(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.s+=c/100,d.s=B(d.s),b(d)}function n(a){return b(a).desaturate(100)}function o(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.l+=c/100,d.l=B(d.l),b(d)}function p(a,c){c=0===c?0:c||10;var d=b(a).toRgb();return d.r=R(0,Q(255,d.r-P(255*-(c/100)))),d.g=R(0,Q(255,d.g-P(255*-(c/100)))),d.b=R(0,Q(255,d.b-P(255*-(c/100)))),b(d)}function q(a,c){c=0===c?0:c||10;var d=b(a).toHsl();return d.l-=c/100,d.l=B(d.l),b(d)}function r(a,c){var d=b(a).toHsl(),e=(d.h+c)%360;return d.h=0>e?360+e:e,b(d)}function s(a){var c=b(a).toHsl();return c.h=(c.h+180)%360,b(c)}function t(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+120)%360,s:c.s,l:c.l}),b({h:(d+240)%360,s:c.s,l:c.l})]}function u(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+90)%360,s:c.s,l:c.l}),b({h:(d+180)%360,s:c.s,l:c.l}),b({h:(d+270)%360,s:c.s,l:c.l})]}function v(a){var c=b(a).toHsl(),d=c.h;return[b(a),b({h:(d+72)%360,s:c.s,l:c.l}),b({h:(d+216)%360,s:c.s,l:c.l})]}function w(a,c,d){c=c||6,d=d||30;var e=b(a).toHsl(),f=360/d,g=[b(a)];for(e.h=(e.h-(f*c>>1)+720)%360;--c;)e.h=(e.h+f)%360,g.push(b(e));return g}function x(a,c){c=c||6;for(var d=b(a).toHsv(),e=d.h,f=d.s,g=d.v,h=[],i=1/c;c--;)h.push(b({h:e,s:f,v:g})),g=(g+i)%1;return h}function y(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[a[c]]=c);return b}function z(a){return a=parseFloat(a),(isNaN(a)||0>a||a>1)&&(a=1),a}function A(b,c){D(b)&&(b="100%");var d=E(b);return b=Q(c,R(0,parseFloat(b))),d&&(b=parseInt(b*c,10)/100),a.abs(b-c)<1e-6?1:b%c/parseFloat(c)}function B(a){return Q(1,R(0,a))}function C(a){return parseInt(a,16)}function D(a){return"string"==typeof a&&-1!=a.indexOf(".")&&1===parseFloat(a)}function E(a){return"string"==typeof a&&-1!=a.indexOf("%")}function F(a){return 1==a.length?"0"+a:""+a}function G(a){return 1>=a&&(a=100*a+"%"),a}function H(b){return a.round(255*parseFloat(b)).toString(16)}function I(a){return C(a)/255}function J(a){return!!V.CSS_UNIT.exec(a)}function K(a){a=a.replace(M,"").replace(N,"").toLowerCase();var b=!1;if(T[a])a=T[a],b=!0;else if("transparent"==a)return{r:0,g:0,b:0,a:0,format:"name"};var c;return(c=V.rgb.exec(a))?{r:c[1],g:c[2],b:c[3]}:(c=V.rgba.exec(a))?{r:c[1],g:c[2],b:c[3],a:c[4]}:(c=V.hsl.exec(a))?{h:c[1],s:c[2],l:c[3]}:(c=V.hsla.exec(a))?{h:c[1],s:c[2],l:c[3],a:c[4]}:(c=V.hsv.exec(a))?{h:c[1],s:c[2],v:c[3]}:(c=V.hsva.exec(a))?{h:c[1],s:c[2],v:c[3],a:c[4]}:(c=V.hex8.exec(a))?{r:C(c[1]),g:C(c[2]),b:C(c[3]),a:I(c[4]),format:b?"name":"hex8"}:(c=V.hex6.exec(a))?{r:C(c[1]),g:C(c[2]),b:C(c[3]),format:b?"name":"hex"}:(c=V.hex4.exec(a))?{r:C(c[1]+""+c[1]),g:C(c[2]+""+c[2]),b:C(c[3]+""+c[3]),a:I(c[4]+""+c[4]),format:b?"name":"hex8"}:(c=V.hex3.exec(a))?{r:C(c[1]+""+c[1]),g:C(c[2]+""+c[2]),b:C(c[3]+""+c[3]),format:b?"name":"hex"}:!1}function L(a){var b,c;return a=a||{level:"AA",size:"small"},b=(a.level||"AA").toUpperCase(),c=(a.size||"small").toLowerCase(),"AA"!==b&&"AAA"!==b&&(b="AA"),"small"!==c&&"large"!==c&&(c="small"),{level:b,size:c}}var M=/^\s+/,N=/\s+$/,O=0,P=a.round,Q=a.min,R=a.max,S=a.random;b.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var a=this.toRgb();return(299*a.r+587*a.g+114*a.b)/1e3},getLuminance:function(){var b,c,d,e,f,g,h=this.toRgb();return b=h.r/255,c=h.g/255,d=h.b/255,e=.03928>=b?b/12.92:a.pow((b+.055)/1.055,2.4),f=.03928>=c?c/12.92:a.pow((c+.055)/1.055,2.4),g=.03928>=d?d/12.92:a.pow((d+.055)/1.055,2.4),.2126*e+.7152*f+.0722*g},setAlpha:function(a){return this._a=z(a),this._roundA=P(100*this._a)/100,this},toHsv:function(){var a=g(this._r,this._g,this._b);return{h:360*a.h,s:a.s,v:a.v,a:this._a}},toHsvString:function(){var a=g(this._r,this._g,this._b),b=P(360*a.h),c=P(100*a.s),d=P(100*a.v);return 1==this._a?"hsv("+b+", "+c+"%, "+d+"%)":"hsva("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHsl:function(){var a=e(this._r,this._g,this._b);return{h:360*a.h,s:a.s,l:a.l,a:this._a}},toHslString:function(){var a=e(this._r,this._g,this._b),b=P(360*a.h),c=P(100*a.s),d=P(100*a.l);return 1==this._a?"hsl("+b+", "+c+"%, "+d+"%)":"hsla("+b+", "+c+"%, "+d+"%, "+this._roundA+")"},toHex:function(a){return i(this._r,this._g,this._b,a)},toHexString:function(a){return"#"+this.toHex(a)},toHex8:function(a){return j(this._r,this._g,this._b,this._a,a)},toHex8String:function(a){return"#"+this.toHex8(a)},toRgb:function(){return{r:P(this._r),g:P(this._g),b:P(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+P(this._r)+", "+P(this._g)+", "+P(this._b)+")":"rgba("+P(this._r)+", "+P(this._g)+", "+P(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:P(100*A(this._r,255))+"%",g:P(100*A(this._g,255))+"%",b:P(100*A(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+P(100*A(this._r,255))+"%, "+P(100*A(this._g,255))+"%, "+P(100*A(this._b,255))+"%)":"rgba("+P(100*A(this._r,255))+"%, "+P(100*A(this._g,255))+"%, "+P(100*A(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":this._a<1?!1:U[i(this._r,this._g,this._b,!0)]||!1},toFilter:function(a){var c="#"+k(this._r,this._g,this._b,this._a),d=c,e=this._gradientType?"GradientType = 1, ":"";if(a){var f=b(a);d="#"+k(f._r,f._g,f._b,f._a)}return"progid:DXImageTransform.Microsoft.gradient("+e+"startColorstr="+c+",endColorstr="+d+")"},toString:function(a){var b=!!a;a=a||this._format;var c=!1,d=this._a<1&&this._a>=0,e=!b&&d&&("hex"===a||"hex6"===a||"hex3"===a||"hex4"===a||"hex8"===a||"name"===a);return e?"name"===a&&0===this._a?this.toName():this.toRgbString():("rgb"===a&&(c=this.toRgbString()),"prgb"===a&&(c=this.toPercentageRgbString()),("hex"===a||"hex6"===a)&&(c=this.toHexString()),"hex3"===a&&(c=this.toHexString(!0)),"hex4"===a&&(c=this.toHex8String(!0)),"hex8"===a&&(c=this.toHex8String()),"name"===a&&(c=this.toName()),"hsl"===a&&(c=this.toHslString()),"hsv"===a&&(c=this.toHsvString()),c||this.toHexString())},clone:function(){return b(this.toString())},_applyModification:function(a,b){var c=a.apply(null,[this].concat([].slice.call(b)));return this._r=c._r,this._g=c._g,this._b=c._b,this.setAlpha(c._a),this},lighten:function(){return this._applyModification(o,arguments)},brighten:function(){return this._applyModification(p,arguments)},darken:function(){return this._applyModification(q,arguments)},desaturate:function(){return this._applyModification(l,arguments)},saturate:function(){return this._applyModification(m,arguments)},greyscale:function(){return this._applyModification(n,arguments)},spin:function(){return this._applyModification(r,arguments)},_applyCombination:function(a,b){return a.apply(null,[this].concat([].slice.call(b)))},analogous:function(){return this._applyCombination(w,arguments)},complement:function(){return this._applyCombination(s,arguments)},monochromatic:function(){return this._applyCombination(x,arguments)},splitcomplement:function(){return this._applyCombination(v,arguments)},triad:function(){return this._applyCombination(t,arguments)},tetrad:function(){return this._applyCombination(u,arguments)}},b.fromRatio=function(a,c){if("object"==typeof a){var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]="a"===e?a[e]:G(a[e]));a=d}return b(a,c)},b.equals=function(a,c){return a&&c?b(a).toRgbString()==b(c).toRgbString():!1},b.random=function(){return b.fromRatio({r:S(),g:S(),b:S()})},b.mix=function(a,c,d){d=0===d?0:d||50;var e=b(a).toRgb(),f=b(c).toRgb(),g=d/100,h={r:(f.r-e.r)*g+e.r,g:(f.g-e.g)*g+e.g,b:(f.b-e.b)*g+e.b,a:(f.a-e.a)*g+e.a};return b(h)},b.readability=function(c,d){var e=b(c),f=b(d);return(a.max(e.getLuminance(),f.getLuminance())+.05)/(a.min(e.getLuminance(),f.getLuminance())+.05)},b.isReadable=function(a,c,d){var e,f,g=b.readability(a,c);switch(f=!1,e=L(d),e.level+e.size){case"AAsmall":case"AAAlarge":f=g>=4.5;break;case"AAlarge":f=g>=3;break;case"AAAsmall":f=g>=7}return f},b.mostReadable=function(a,c,d){var e,f,g,h,i=null,j=0;d=d||{},f=d.includeFallbackColors,g=d.level,h=d.size;for(var k=0;k<c.length;k++)e=b.readability(a,c[k]),e>j&&(j=e,i=b(c[k]));return b.isReadable(a,i,{level:g,size:h})||!f?i:(d.includeFallbackColors=!1,b.mostReadable(a,["#fff","#000"],d))};var T=b.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},U=b.hexNames=y(T),V=function(){var a="[-\\+]?\\d+%?",b="[-\\+]?\\d*\\.\\d+%?",c="(?:"+b+")|(?:"+a+")",d="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?",e="[\\s|\\(]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")[,|\\s]+("+c+")\\s*\\)?";return{CSS_UNIT:new RegExp(c),rgb:new RegExp("rgb"+d),rgba:new RegExp("rgba"+e),hsl:new RegExp("hsl"+d),hsla:new RegExp("hsla"+e),hsv:new RegExp("hsv"+d),hsva:new RegExp("hsva"+e),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();"undefined"!=typeof module&&module.exports?module.exports=b:"function"==typeof define&&define.amd?define(function(){return b}):window.tinycolor=b}(Math);


//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################

// NGY BUILD:
// replace "imagesLoaded" with "ngimagesLoaded"
// replace "ImagesLoaded" with "ngImagesLoaded"
// replace "EvEmitter" with "ngEvEmitter"
// replace "var $ = window.jQuery" with "var $ = jQuery;"

/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/**
 * EvEmitter v1.0.3
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.ngEvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function ngEvEmitter() {}

var proto = ngEvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var i = 0;
  var listener = listeners[i];
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  while ( listener ) {
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
    // get next listener
    i += isOnce ? 0 : 1;
    listener = listeners[i];
  }

  return this;
};

return ngEvEmitter;

}));

/*!
 * ngimagesLoaded v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'ev-emitter/ev-emitter'
    ], function( ngEvEmitter ) {
      return factory( window, ngEvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.ngimagesLoaded = factory(
      window,
      window.ngEvEmitter
    );
  }

})( window,

// --------------------------  factory -------------------------- //

function factory( window, ngEvEmitter ) {



// var $ = window.jQuery;
var $ = jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// -------------------------- ngimagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ngImagesLoaded( elem, options, onAlways ) {
  // coerce ngImagesLoaded() without new, to be new ngImagesLoaded()
  if ( !( this instanceof ngImagesLoaded ) ) {
    return new ngImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  if ( typeof elem == 'string' ) {
    elem = document.querySelectorAll( elem );
  }

  this.elements = makeArray( elem );
  this.options = extend( {}, this.options );

  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( function() {
    this.check();
  }.bind( this ));
}

ngImagesLoaded.prototype = Object.create( ngEvEmitter.prototype );

ngImagesLoaded.prototype.options = {};

ngImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ngImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ngImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ngImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ngImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ngImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ngImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ngImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( ngEvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  return this.img.complete && this.img.naturalWidth !== undefined;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ngImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().ngimagesLoaded()
  $.fn.ngimagesLoaded = function( options, callback ) {
    var instance = new ngImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ngImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ngImagesLoaded;

});



//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################

// screenfull.js
// v3.2.0
// by sindresorhus - https://github.com/sindresorhus
// from: https://github.com/sindresorhus/screenfull.js

// NGY BUILD:
// replace "screenfull" with "ngscreenfull"
// 

(function () {
	'use strict';

	var document = typeof window === 'undefined' ? {} : window.document;
	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var ngscreenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		onchange: function (callback) {
			document.addEventListener(fn.fullscreenchange, callback, false);
		},
		onerror: function (callback) {
			document.addEventListener(fn.fullscreenerror, callback, false);
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.ngscreenfull = false;
		}

		return;
	}

	Object.defineProperties(ngscreenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = ngscreenfull;
	} else {
		window.ngscreenfull = ngscreenfull;
	}
})();


  
//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################
  
 /*!
 * Shifty
 * By Jeremy Kahn - jeremyckahn@gmail.com
 */

// NGY BUILD:
// 
// replace "Tweenable" with "NGTweenable"
// replace "define.amd" with "define.amdDISABLED"
/*! shifty - v1.5.0 - 2015-05-31 - http://jeremyckahn.github.io/shifty */
(function(){var t=this,n=function(){"use strict";function n(){}function e(t,n){var e;for(e in t)Object.hasOwnProperty.call(t,e)&&n(e)}function i(t,n){return e(n,function(e){t[e]=n[e]}),t}function r(t,n){e(n,function(e){t[e]===void 0&&(t[e]=n[e])})}function o(t,n,e,i,r,o,u){var s,c,h,p=o>t?0:(t-o)/r;for(s in n)n.hasOwnProperty(s)&&(c=u[s],h="function"==typeof c?c:f[c],n[s]=a(e[s],i[s],h,p));return n}function a(t,n,e,i){return t+(n-t)*e(i)}function u(t,n){var i=h.prototype.filter,r=t._filterArgs;e(i,function(e){i[e][n]!==void 0&&i[e][n].apply(t,r)})}function s(t,n,e,i,r,a,s,c,h,f,p){g=n+e+i,y=Math.min(p||d(),g),v=y>=g,M=i-(g-y),t.isPlaying()&&!v?(t._scheduleId=f(t._timeoutHandler,m),u(t,"beforeTween"),n+e>y?o(1,r,a,s,1,1,c):o(y,r,a,s,i,n+e,c),u(t,"afterTween"),h(r,t._attachment,M)):t.isPlaying()&&v&&(h(s,t._attachment,M),t.stop(!0))}function c(t,n){var i={},r=typeof n;return"string"===r||"function"===r?e(t,function(t){i[t]=n}):e(t,function(t){i[t]||(i[t]=n[t]||l)}),i}function h(t,n){this._currentState=t||{},this._configured=!1,this._scheduleFunction=p,n!==void 0&&this.setConfig(n)}var f,p,l="linear",_=500,m=1e3/60,w=Date.now?Date.now:function(){return+new Date},d="undefined"!=typeof SHIFTY_DEBUG_NOW?SHIFTY_DEBUG_NOW:w;p="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||window.mozCancelRequestAnimationFrame&&window.mozRequestAnimationFrame||setTimeout:setTimeout;var g,y,v,M;return h.prototype.tween=function(t){return this._isTweening?this:(void 0===t&&this._configured||this.setConfig(t),this._timestamp=d(),this._start(this.get(),this._attachment),this.resume())},h.prototype.setConfig=function(t){t=t||{},this._configured=!0,this._attachment=t.attachment,this._pausedAtTime=null,this._scheduleId=null,this._delay=t.delay||0,this._start=t.start||n,this._step=t.step||n,this._finish=t.finish||n,this._duration=t.duration||_,this._currentState=i({},t.from)||this.get(),this._originalState=this.get(),this._targetState=i({},t.to)||this.get();var e=this;this._timeoutHandler=function(){s(e,e._timestamp,e._delay,e._duration,e._currentState,e._originalState,e._targetState,e._easing,e._step,e._scheduleFunction)};var o=this._currentState,a=this._targetState;return r(a,o),this._easing=c(o,t.easing||l),this._filterArgs=[o,this._originalState,a,this._easing],u(this,"tweenCreated"),this},h.prototype.get=function(){return i({},this._currentState)},h.prototype.set=function(t){this._currentState=t},h.prototype.pause=function(){return this._pausedAtTime=d(),this._isPaused=!0,this},h.prototype.resume=function(){return this._isPaused&&(this._timestamp+=d()-this._pausedAtTime),this._isPaused=!1,this._isTweening=!0,this._timeoutHandler(),this},h.prototype.seek=function(t){t=Math.max(t,0);var n=d();return 0===this._timestamp+t?this:(this._timestamp=n-t,this.isPlaying()||(this._isTweening=!0,this._isPaused=!1,s(this,this._timestamp,this._delay,this._duration,this._currentState,this._originalState,this._targetState,this._easing,this._step,this._scheduleFunction,n),this.pause()),this)},h.prototype.stop=function(e){return this._isTweening=!1,this._isPaused=!1,this._timeoutHandler=n,(t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.oCancelAnimationFrame||t.msCancelAnimationFrame||t.mozCancelRequestAnimationFrame||t.clearTimeout)(this._scheduleId),e&&(u(this,"beforeTween"),o(1,this._currentState,this._originalState,this._targetState,1,0,this._easing),u(this,"afterTween"),u(this,"afterTweenEnd"),this._finish.call(this,this._currentState,this._attachment)),this},h.prototype.isPlaying=function(){return this._isTweening&&!this._isPaused},h.prototype.setScheduleFunction=function(t){this._scheduleFunction=t},h.prototype.dispose=function(){var t;for(t in this)this.hasOwnProperty(t)&&delete this[t]},h.prototype.filter={},h.prototype.formula={linear:function(t){return t}},f=h.prototype.formula,i(h,{now:d,each:e,tweenProps:o,tweenProp:a,applyFilter:u,shallowCopy:i,defaults:r,composeEasingObject:c}),"function"==typeof SHIFTY_DEBUG_NOW&&(t.timeoutHandler=s),"object"==typeof exports?module.exports=h:"function"==typeof define&&define.amdDISABLED?define(function(){return h}):t.NGTweenable===void 0&&(t.NGTweenable=h),h}();(function(){n.shallowCopy(n.prototype.formula,{easeInQuad:function(t){return Math.pow(t,2)},easeOutQuad:function(t){return-(Math.pow(t-1,2)-1)},easeInOutQuad:function(t){return 1>(t/=.5)?.5*Math.pow(t,2):-.5*((t-=2)*t-2)},easeInCubic:function(t){return Math.pow(t,3)},easeOutCubic:function(t){return Math.pow(t-1,3)+1},easeInOutCubic:function(t){return 1>(t/=.5)?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},easeInQuart:function(t){return Math.pow(t,4)},easeOutQuart:function(t){return-(Math.pow(t-1,4)-1)},easeInOutQuart:function(t){return 1>(t/=.5)?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeInQuint:function(t){return Math.pow(t,5)},easeOutQuint:function(t){return Math.pow(t-1,5)+1},easeInOutQuint:function(t){return 1>(t/=.5)?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)},easeInSine:function(t){return-Math.cos(t*(Math.PI/2))+1},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:-Math.pow(2,-10*t)+1},easeInOutExpo:function(t){return 0===t?0:1===t?1:1>(t/=.5)?.5*Math.pow(2,10*(t-1)):.5*(-Math.pow(2,-10*--t)+2)},easeInCirc:function(t){return-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-Math.pow(t-1,2))},easeInOutCirc:function(t){return 1>(t/=.5)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeOutBounce:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInBack:function(t){var n=1.70158;return t*t*((n+1)*t-n)},easeOutBack:function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},easeInOutBack:function(t){var n=1.70158;return 1>(t/=.5)?.5*t*t*(((n*=1.525)+1)*t-n):.5*((t-=2)*t*(((n*=1.525)+1)*t+n)+2)},elastic:function(t){return-1*Math.pow(4,-8*t)*Math.sin((6*t-1)*2*Math.PI/2)+1},swingFromTo:function(t){var n=1.70158;return 1>(t/=.5)?.5*t*t*(((n*=1.525)+1)*t-n):.5*((t-=2)*t*(((n*=1.525)+1)*t+n)+2)},swingFrom:function(t){var n=1.70158;return t*t*((n+1)*t-n)},swingTo:function(t){var n=1.70158;return(t-=1)*t*((n+1)*t+n)+1},bounce:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},bouncePast:function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?2-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)},easeFromTo:function(t){return 1>(t/=.5)?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)},easeFrom:function(t){return Math.pow(t,4)},easeTo:function(t){return Math.pow(t,.25)}})})(),function(){function t(t,n,e,i,r,o){function a(t){return((l*t+_)*t+m)*t}function u(t){return((w*t+d)*t+g)*t}function s(t){return(3*l*t+2*_)*t+m}function c(t){return 1/(200*t)}function h(t,n){return u(p(t,n))}function f(t){return t>=0?t:0-t}function p(t,n){var e,i,r,o,u,c;for(r=t,c=0;8>c;c++){if(o=a(r)-t,n>f(o))return r;if(u=s(r),1e-6>f(u))break;r-=o/u}if(e=0,i=1,r=t,e>r)return e;if(r>i)return i;for(;i>e;){if(o=a(r),n>f(o-t))return r;t>o?e=r:i=r,r=.5*(i-e)+e}return r}var l=0,_=0,m=0,w=0,d=0,g=0;return m=3*n,_=3*(i-n)-m,l=1-m-_,g=3*e,d=3*(r-e)-g,w=1-g-d,h(t,c(o))}function e(n,e,i,r){return function(o){return t(o,n,e,i,r,1)}}n.setBezierFunction=function(t,i,r,o,a){var u=e(i,r,o,a);return u.displayName=t,u.x1=i,u.y1=r,u.x2=o,u.y2=a,n.prototype.formula[t]=u},n.unsetBezierFunction=function(t){delete n.prototype.formula[t]}}(),function(){function t(t,e,i,r,o,a){return n.tweenProps(r,e,t,i,1,a,o)}var e=new n;e._filterArgs=[],n.interpolate=function(i,r,o,a,u){var s=n.shallowCopy({},i),c=u||0,h=n.composeEasingObject(i,a||"linear");e.set({});var f=e._filterArgs;f.length=0,f[0]=s,f[1]=i,f[2]=r,f[3]=h,n.applyFilter(e,"tweenCreated"),n.applyFilter(e,"beforeTween");var p=t(i,s,r,o,h,c);return n.applyFilter(e,"afterTween"),p}}(),function(t){function n(t,n){var e,i=[],r=t.length;for(e=0;r>e;e++)i.push("_"+n+"_"+e);return i}function e(t){var n=t.match(M);return n?(1===n.length||t[0].match(v))&&n.unshift(""):n=["",""],n.join(O)}function i(n){t.each(n,function(t){var e=n[t];"string"==typeof e&&e.match(S)&&(n[t]=r(e))})}function r(t){return s(S,t,o)}function o(t){var n=a(t);return"rgb("+n[0]+","+n[1]+","+n[2]+")"}function a(t){return t=t.replace(/#/,""),3===t.length&&(t=t.split(""),t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),b[0]=u(t.substr(0,2)),b[1]=u(t.substr(2,2)),b[2]=u(t.substr(4,2)),b}function u(t){return parseInt(t,16)}function s(t,n,e){var i=n.match(t),r=n.replace(t,O);if(i)for(var o,a=i.length,u=0;a>u;u++)o=i.shift(),r=r.replace(O,e(o));return r}function c(t){return s(T,t,h)}function h(t){for(var n=t.match(F),e=n.length,i=t.match(I)[0],r=0;e>r;r++)i+=parseInt(n[r],10)+",";return i=i.slice(0,-1)+")"}function f(i){var r={};return t.each(i,function(t){var o=i[t];if("string"==typeof o){var a=d(o);r[t]={formatString:e(o),chunkNames:n(a,t)}}}),r}function p(n,e){t.each(e,function(t){for(var i=n[t],r=d(i),o=r.length,a=0;o>a;a++)n[e[t].chunkNames[a]]=+r[a];delete n[t]})}function l(n,e){t.each(e,function(t){var i=n[t],r=_(n,e[t].chunkNames),o=m(r,e[t].chunkNames);i=w(e[t].formatString,o),n[t]=c(i)})}function _(t,n){for(var e,i={},r=n.length,o=0;r>o;o++)e=n[o],i[e]=t[e],delete t[e];return i}function m(t,n){k.length=0;for(var e=n.length,i=0;e>i;i++)k.push(t[n[i]]);return k}function w(t,n){for(var e=t,i=n.length,r=0;i>r;r++)e=e.replace(O,+n[r].toFixed(4));return e}function d(t){return t.match(F)}function g(n,e){t.each(e,function(t){var i,r=e[t],o=r.chunkNames,a=o.length,u=n[t];if("string"==typeof u){var s=u.split(" "),c=s[s.length-1];for(i=0;a>i;i++)n[o[i]]=s[i]||c}else for(i=0;a>i;i++)n[o[i]]=u;delete n[t]})}function y(n,e){t.each(e,function(t){var i=e[t],r=i.chunkNames,o=r.length,a=n[r[0]],u=typeof a;if("string"===u){for(var s="",c=0;o>c;c++)s+=" "+n[r[c]],delete n[r[c]];n[t]=s.substr(1)}else n[t]=a})}var v=/(\d|\-|\.)/,M=/([^\-0-9\.]+)/g,F=/[0-9.\-]+/g,T=RegExp("rgb\\("+F.source+/,\s*/.source+F.source+/,\s*/.source+F.source+"\\)","g"),I=/^.*\(/,S=/#([0-9]|[a-f]){3,6}/gi,O="VAL",b=[],k=[];t.prototype.filter.token={tweenCreated:function(t,n,e){i(t),i(n),i(e),this._tokenData=f(t)},beforeTween:function(t,n,e,i){g(i,this._tokenData),p(t,this._tokenData),p(n,this._tokenData),p(e,this._tokenData)},afterTween:function(t,n,e,i){l(t,this._tokenData),l(n,this._tokenData),l(e,this._tokenData),y(i,this._tokenData)}}}(n)}).call(null);


//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################

// HAMMER.JS

// NGY BUILD:
// replace "Hammer" with "NGHammer" (case sensitive)
// replace "var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;" with "var SUPPORT_POINTER_EVENTS = false;"



/*! NGHammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
  'use strict';

var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
var TEST_ELEMENT = document.createElement('div');

var TYPE_FUNCTION = 'function';

var round = Math.round;
var abs = Math.abs;
var now = Date.now;

/**
 * set a timeout with a given scope
 * @param {Function} fn
 * @param {Number} timeout
 * @param {Object} context
 * @returns {number}
 */
function setTimeoutContext(fn, timeout, context) {
    return setTimeout(bindFn(fn, context), timeout);
}

/**
 * if the argument is an array, we want to execute the fn on each entry
 * if it aint an array we don't want to do a thing.
 * this is used by all the methods that accept a single and array argument.
 * @param {*|Array} arg
 * @param {String} fn
 * @param {Object} [context]
 * @returns {Boolean}
 */
function invokeArrayArg(arg, fn, context) {
    if (Array.isArray(arg)) {
        each(arg, context[fn], context);
        return true;
    }
    return false;
}

/**
 * walk objects and arrays
 * @param {Object} obj
 * @param {Function} iterator
 * @param {Object} context
 */
function each(obj, iterator, context) {
    var i;

    if (!obj) {
        return;
    }

    if (obj.forEach) {
        obj.forEach(iterator, context);
    } else if (obj.length !== undefined) {
        i = 0;
        while (i < obj.length) {
            iterator.call(context, obj[i], i, obj);
            i++;
        }
    } else {
        for (i in obj) {
            obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
        }
    }
}

/**
 * wrap a method with a deprecation warning and stack trace
 * @param {Function} method
 * @param {String} name
 * @param {String} message
 * @returns {Function} A new function wrapping the supplied method.
 */
function deprecate(method, name, message) {
    var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
    return function() {
        var e = new Error('get-stack-trace');
        var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
            .replace(/^\s+at\s+/gm, '')
            .replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

        var log = window.console && (window.console.warn || window.console.log);
        if (log) {
            log.call(window.console, deprecationMessage, stack);
        }
        return method.apply(this, arguments);
    };
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} target
 * @param {...Object} objects_to_assign
 * @returns {Object} target
 */
var assign;
if (typeof Object.assign !== 'function') {
    assign = function assign(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }

        var output = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source !== undefined && source !== null) {
                for (var nextKey in source) {
                    if (source.hasOwnProperty(nextKey)) {
                        output[nextKey] = source[nextKey];
                    }
                }
            }
        }
        return output;
    };
} else {
    assign = Object.assign;
}

/**
 * extend object.
 * means that properties in dest will be overwritten by the ones in src.
 * @param {Object} dest
 * @param {Object} src
 * @param {Boolean} [merge=false]
 * @returns {Object} dest
 */
var extend = deprecate(function extend(dest, src, merge) {
    var keys = Object.keys(src);
    var i = 0;
    while (i < keys.length) {
        if (!merge || (merge && dest[keys[i]] === undefined)) {
            dest[keys[i]] = src[keys[i]];
        }
        i++;
    }
    return dest;
}, 'extend', 'Use `assign`.');

/**
 * merge the values from src in the dest.
 * means that properties that exist in dest will not be overwritten by src
 * @param {Object} dest
 * @param {Object} src
 * @returns {Object} dest
 */
var merge = deprecate(function merge(dest, src) {
    return extend(dest, src, true);
}, 'merge', 'Use `assign`.');

/**
 * simple class inheritance
 * @param {Function} child
 * @param {Function} base
 * @param {Object} [properties]
 */
function inherit(child, base, properties) {
    var baseP = base.prototype,
        childP;

    childP = child.prototype = Object.create(baseP);
    childP.constructor = child;
    childP._super = baseP;

    if (properties) {
        assign(childP, properties);
    }
}

/**
 * simple function bind
 * @param {Function} fn
 * @param {Object} context
 * @returns {Function}
 */
function bindFn(fn, context) {
    return function boundFn() {
        return fn.apply(context, arguments);
    };
}

/**
 * let a boolean value also be a function that must return a boolean
 * this first item in args will be used as the context
 * @param {Boolean|Function} val
 * @param {Array} [args]
 * @returns {Boolean}
 */
function boolOrFn(val, args) {
    if (typeof val == TYPE_FUNCTION) {
        return val.apply(args ? args[0] || undefined : undefined, args);
    }
    return val;
}

/**
 * use the val2 when val1 is undefined
 * @param {*} val1
 * @param {*} val2
 * @returns {*}
 */
function ifUndefined(val1, val2) {
    return (val1 === undefined) ? val2 : val1;
}

/**
 * addEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function addEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.addEventListener(type, handler, false);
    });
}

/**
 * removeEventListener with multiple events at once
 * @param {EventTarget} target
 * @param {String} types
 * @param {Function} handler
 */
function removeEventListeners(target, types, handler) {
    each(splitStr(types), function(type) {
        target.removeEventListener(type, handler, false);
    });
}

/**
 * find if a node is in the given parent
 * @method hasParent
 * @param {HTMLElement} node
 * @param {HTMLElement} parent
 * @return {Boolean} found
 */
function hasParent(node, parent) {
    while (node) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/**
 * small indexOf wrapper
 * @param {String} str
 * @param {String} find
 * @returns {Boolean} found
 */
function inStr(str, find) {
    return str.indexOf(find) > -1;
}

/**
 * split string on whitespace
 * @param {String} str
 * @returns {Array} words
 */
function splitStr(str) {
    return str.trim().split(/\s+/g);
}

/**
 * find if a array contains the object using indexOf or a simple polyFill
 * @param {Array} src
 * @param {String} find
 * @param {String} [findByKey]
 * @return {Boolean|Number} false when not found, or the index
 */
function inArray(src, find, findByKey) {
    if (src.indexOf && !findByKey) {
        return src.indexOf(find);
    } else {
        var i = 0;
        while (i < src.length) {
            if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
                return i;
            }
            i++;
        }
        return -1;
    }
}

/**
 * convert array-like objects to real arrays
 * @param {Object} obj
 * @returns {Array}
 */
function toArray(obj) {
    return Array.prototype.slice.call(obj, 0);
}

/**
 * unique array with objects based on a key (like 'id') or just by the array's value
 * @param {Array} src [{id:1},{id:2},{id:1}]
 * @param {String} [key]
 * @param {Boolean} [sort=False]
 * @returns {Array} [{id:1},{id:2}]
 */
function uniqueArray(src, key, sort) {
    var results = [];
    var values = [];
    var i = 0;

    while (i < src.length) {
        var val = key ? src[i][key] : src[i];
        if (inArray(values, val) < 0) {
            results.push(src[i]);
        }
        values[i] = val;
        i++;
    }

    if (sort) {
        if (!key) {
            results = results.sort();
        } else {
            results = results.sort(function sortUniqueArray(a, b) {
                return a[key] > b[key];
            });
        }
    }

    return results;
}

/**
 * get the prefixed property
 * @param {Object} obj
 * @param {String} property
 * @returns {String|Undefined} prefixed
 */
function prefixed(obj, property) {
    var prefix, prop;
    var camelProp = property[0].toUpperCase() + property.slice(1);

    var i = 0;
    while (i < VENDOR_PREFIXES.length) {
        prefix = VENDOR_PREFIXES[i];
        prop = (prefix) ? prefix + camelProp : property;

        if (prop in obj) {
            return prop;
        }
        i++;
    }
    return undefined;
}

/**
 * get a unique id
 * @returns {number} uniqueId
 */
var _uniqueId = 1;
function uniqueId() {
    return _uniqueId++;
}

/**
 * get the window object of an element
 * @param {HTMLElement} element
 * @returns {DocumentView|Window}
 */
function getWindowForElement(element) {
    var doc = element.ownerDocument || element;
    return (doc.defaultView || doc.parentWindow || window);
}

var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

var SUPPORT_TOUCH = ('ontouchstart' in window);
// var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
var SUPPORT_POINTER_EVENTS = false;
var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

var INPUT_TYPE_TOUCH = 'touch';
var INPUT_TYPE_PEN = 'pen';
var INPUT_TYPE_MOUSE = 'mouse';
var INPUT_TYPE_KINECT = 'kinect';

var COMPUTE_INTERVAL = 25;

var INPUT_START = 1;
var INPUT_MOVE = 2;
var INPUT_END = 4;
var INPUT_CANCEL = 8;

var DIRECTION_NONE = 1;
var DIRECTION_LEFT = 2;
var DIRECTION_RIGHT = 4;
var DIRECTION_UP = 8;
var DIRECTION_DOWN = 16;

var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

var PROPS_XY = ['x', 'y'];
var PROPS_CLIENT_XY = ['clientX', 'clientY'];

/**
 * create new input type manager
 * @param {Manager} manager
 * @param {Function} callback
 * @returns {Input}
 * @constructor
 */
function Input(manager, callback) {
    var self = this;
    this.manager = manager;
    this.callback = callback;
    this.element = manager.element;
    this.target = manager.options.inputTarget;

    // smaller wrapper around the handler, for the scope and the enabled state of the manager,
    // so when disabled the input events are completely bypassed.
    this.domHandler = function(ev) {
        if (boolOrFn(manager.options.enable, [manager])) {
            self.handler(ev);
        }
    };

    this.init();

}

Input.prototype = {
    /**
     * should handle the inputEvent data and trigger the callback
     * @virtual
     */
    handler: function() { },

    /**
     * bind the events
     */
    init: function() {
        this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    },

    /**
     * unbind the events
     */
    destroy: function() {
        this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
        this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
        this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
    }
};

/**
 * create new input type manager
 * called by the Manager constructor
 * @param {NGHammer} manager
 * @returns {Input}
 */
function createInputInstance(manager) {
    var Type;
    var inputClass = manager.options.inputClass;

    if (inputClass) {
        Type = inputClass;
    } else if (SUPPORT_POINTER_EVENTS) {
        Type = PointerEventInput;
    } else if (SUPPORT_ONLY_TOUCH) {
        Type = TouchInput;
    } else if (!SUPPORT_TOUCH) {
        Type = MouseInput;
    } else {
        Type = TouchMouseInput;
    }
    return new (Type)(manager, inputHandler);
}

/**
 * handle input events
 * @param {Manager} manager
 * @param {String} eventType
 * @param {Object} input
 */
function inputHandler(manager, eventType, input) {
    var pointersLen = input.pointers.length;
    var changedPointersLen = input.changedPointers.length;
    var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
    var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

    input.isFirst = !!isFirst;
    input.isFinal = !!isFinal;

    if (isFirst) {
        manager.session = {};
    }

    // source event is the normalized value of the domEvents
    // like 'touchstart, mouseup, pointerdown'
    input.eventType = eventType;

    // compute scale, rotation etc
    computeInputData(manager, input);

    // emit secret event
    manager.emit('hammer.input', input);

    manager.recognize(input);
    manager.session.prevInput = input;
}

/**
 * extend the data with some usable properties like scale, rotate, velocity etc
 * @param {Object} manager
 * @param {Object} input
 */
function computeInputData(manager, input) {
    var session = manager.session;
    var pointers = input.pointers;
    var pointersLength = pointers.length;

    // store the first input to calculate the distance and direction
    if (!session.firstInput) {
        session.firstInput = simpleCloneInputData(input);
    }

    // to compute scale and rotation we need to store the multiple touches
    if (pointersLength > 1 && !session.firstMultiple) {
        session.firstMultiple = simpleCloneInputData(input);
    } else if (pointersLength === 1) {
        session.firstMultiple = false;
    }

    var firstInput = session.firstInput;
    var firstMultiple = session.firstMultiple;
    var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

    var center = input.center = getCenter(pointers);
    input.timeStamp = now();
    input.deltaTime = input.timeStamp - firstInput.timeStamp;

    input.angle = getAngle(offsetCenter, center);
    input.distance = getDistance(offsetCenter, center);

    computeDeltaXY(session, input);
    input.offsetDirection = getDirection(input.deltaX, input.deltaY);

    var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
    input.overallVelocityX = overallVelocity.x;
    input.overallVelocityY = overallVelocity.y;
    input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

    input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
    input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

    input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
        session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

    computeIntervalInputData(session, input);

    // find the correct target
    var target = manager.element;
    if (hasParent(input.srcEvent.target, target)) {
        target = input.srcEvent.target;
    }
    input.target = target;
}

function computeDeltaXY(session, input) {
    var center = input.center;
    var offset = session.offsetDelta || {};
    var prevDelta = session.prevDelta || {};
    var prevInput = session.prevInput || {};

    if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
        prevDelta = session.prevDelta = {
            x: prevInput.deltaX || 0,
            y: prevInput.deltaY || 0
        };

        offset = session.offsetDelta = {
            x: center.x,
            y: center.y
        };
    }

    input.deltaX = prevDelta.x + (center.x - offset.x);
    input.deltaY = prevDelta.y + (center.y - offset.y);
}

/**
 * velocity is calculated every x ms
 * @param {Object} session
 * @param {Object} input
 */
function computeIntervalInputData(session, input) {
    var last = session.lastInterval || input,
        deltaTime = input.timeStamp - last.timeStamp,
        velocity, velocityX, velocityY, direction;

    if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
        var deltaX = input.deltaX - last.deltaX;
        var deltaY = input.deltaY - last.deltaY;

        var v = getVelocity(deltaTime, deltaX, deltaY);
        velocityX = v.x;
        velocityY = v.y;
        velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
        direction = getDirection(deltaX, deltaY);

        session.lastInterval = input;
    } else {
        // use latest velocity info if it doesn't overtake a minimum period
        velocity = last.velocity;
        velocityX = last.velocityX;
        velocityY = last.velocityY;
        direction = last.direction;
    }

    input.velocity = velocity;
    input.velocityX = velocityX;
    input.velocityY = velocityY;
    input.direction = direction;
}

/**
 * create a simple clone from the input used for storage of firstInput and firstMultiple
 * @param {Object} input
 * @returns {Object} clonedInputData
 */
function simpleCloneInputData(input) {
    // make a simple copy of the pointers because we will get a reference if we don't
    // we only need clientXY for the calculations
    var pointers = [];
    var i = 0;
    while (i < input.pointers.length) {
        pointers[i] = {
            clientX: round(input.pointers[i].clientX),
            clientY: round(input.pointers[i].clientY)
        };
        i++;
    }

    return {
        timeStamp: now(),
        pointers: pointers,
        center: getCenter(pointers),
        deltaX: input.deltaX,
        deltaY: input.deltaY
    };
}

/**
 * get the center of all the pointers
 * @param {Array} pointers
 * @return {Object} center contains `x` and `y` properties
 */
function getCenter(pointers) {
    var pointersLength = pointers.length;

    // no need to loop when only one touch
    if (pointersLength === 1) {
        return {
            x: round(pointers[0].clientX),
            y: round(pointers[0].clientY)
        };
    }

    var x = 0, y = 0, i = 0;
    while (i < pointersLength) {
        x += pointers[i].clientX;
        y += pointers[i].clientY;
        i++;
    }

    return {
        x: round(x / pointersLength),
        y: round(y / pointersLength)
    };
}

/**
 * calculate the velocity between two points. unit is in px per ms.
 * @param {Number} deltaTime
 * @param {Number} x
 * @param {Number} y
 * @return {Object} velocity `x` and `y`
 */
function getVelocity(deltaTime, x, y) {
    return {
        x: x / deltaTime || 0,
        y: y / deltaTime || 0
    };
}

/**
 * get the direction between two points
 * @param {Number} x
 * @param {Number} y
 * @return {Number} direction
 */
function getDirection(x, y) {
    if (x === y) {
        return DIRECTION_NONE;
    }

    if (abs(x) >= abs(y)) {
        return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
    }
    return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

/**
 * calculate the absolute distance between two points
 * @param {Object} p1 {x, y}
 * @param {Object} p2 {x, y}
 * @param {Array} [props] containing x and y keys
 * @return {Number} distance
 */
function getDistance(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];

    return Math.sqrt((x * x) + (y * y));
}

/**
 * calculate the angle between two coordinates
 * @param {Object} p1
 * @param {Object} p2
 * @param {Array} [props] containing x and y keys
 * @return {Number} angle
 */
function getAngle(p1, p2, props) {
    if (!props) {
        props = PROPS_XY;
    }
    var x = p2[props[0]] - p1[props[0]],
        y = p2[props[1]] - p1[props[1]];
    return Math.atan2(y, x) * 180 / Math.PI;
}

/**
 * calculate the rotation degrees between two pointersets
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} rotation
 */
function getRotation(start, end) {
    return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
}

/**
 * calculate the scale factor between two pointersets
 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
 * @param {Array} start array of pointers
 * @param {Array} end array of pointers
 * @return {Number} scale
 */
function getScale(start, end) {
    return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
}

var MOUSE_INPUT_MAP = {
    mousedown: INPUT_START,
    mousemove: INPUT_MOVE,
    mouseup: INPUT_END
};

var MOUSE_ELEMENT_EVENTS = 'mousedown';
var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

/**
 * Mouse events input
 * @constructor
 * @extends Input
 */
function MouseInput() {
    this.evEl = MOUSE_ELEMENT_EVENTS;
    this.evWin = MOUSE_WINDOW_EVENTS;

    this.pressed = false; // mousedown state

    Input.apply(this, arguments);
}

inherit(MouseInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function MEhandler(ev) {
        var eventType = MOUSE_INPUT_MAP[ev.type];

        // on start we want to have the left mouse button down
        if (eventType & INPUT_START && ev.button === 0) {
            this.pressed = true;
        }

        if (eventType & INPUT_MOVE && ev.which !== 1) {
            eventType = INPUT_END;
        }

        // mouse must be down
        if (!this.pressed) {
            return;
        }

        if (eventType & INPUT_END) {
            this.pressed = false;
        }

        this.callback(this.manager, eventType, {
            pointers: [ev],
            changedPointers: [ev],
            pointerType: INPUT_TYPE_MOUSE,
            srcEvent: ev
        });
    }
});

var POINTER_INPUT_MAP = {
    pointerdown: INPUT_START,
    pointermove: INPUT_MOVE,
    pointerup: INPUT_END,
    pointercancel: INPUT_CANCEL,
    pointerout: INPUT_CANCEL
};

// in IE10 the pointer types is defined as an enum
var IE10_POINTER_TYPE_ENUM = {
    2: INPUT_TYPE_TOUCH,
    3: INPUT_TYPE_PEN,
    4: INPUT_TYPE_MOUSE,
    5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
};

var POINTER_ELEMENT_EVENTS = 'pointerdown';
var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
if (window.MSPointerEvent && !window.PointerEvent) {
    POINTER_ELEMENT_EVENTS = 'MSPointerDown';
    POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
}

/**
 * Pointer events input
 * @constructor
 * @extends Input
 */
function PointerEventInput() {
    this.evEl = POINTER_ELEMENT_EVENTS;
    this.evWin = POINTER_WINDOW_EVENTS;

    Input.apply(this, arguments);

    this.store = (this.manager.session.pointerEvents = []);
}

inherit(PointerEventInput, Input, {
    /**
     * handle mouse events
     * @param {Object} ev
     */
    handler: function PEhandler(ev) {
        var store = this.store;
        var removePointer = false;

        var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
        var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
        var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

        var isTouch = (pointerType == INPUT_TYPE_TOUCH);

        // get index of the event in the store
        var storeIndex = inArray(store, ev.pointerId, 'pointerId');

        // start and mouse must be down
        if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
            if (storeIndex < 0) {
                store.push(ev);
                storeIndex = store.length - 1;
            }
        } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
            removePointer = true;
        }

        // it not found, so the pointer hasn't been down (so it's probably a hover)
        if (storeIndex < 0) {
            return;
        }

        // update the event in the store
        store[storeIndex] = ev;

        this.callback(this.manager, eventType, {
            pointers: store,
            changedPointers: [ev],
            pointerType: pointerType,
            srcEvent: ev
        });

        if (removePointer) {
            // remove from the store
            store.splice(storeIndex, 1);
        }
    }
});

var SINGLE_TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Touch events input
 * @constructor
 * @extends Input
 */
function SingleTouchInput() {
    this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
    this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
    this.started = false;

    Input.apply(this, arguments);
}

inherit(SingleTouchInput, Input, {
    handler: function TEhandler(ev) {
        var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

        // should we handle the touch events?
        if (type === INPUT_START) {
            this.started = true;
        }

        if (!this.started) {
            return;
        }

        var touches = normalizeSingleTouches.call(this, ev, type);

        // when done, reset the started state
        if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
            this.started = false;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function normalizeSingleTouches(ev, type) {
    var all = toArray(ev.touches);
    var changed = toArray(ev.changedTouches);

    if (type & (INPUT_END | INPUT_CANCEL)) {
        all = uniqueArray(all.concat(changed), 'identifier', true);
    }

    return [all, changed];
}

var TOUCH_INPUT_MAP = {
    touchstart: INPUT_START,
    touchmove: INPUT_MOVE,
    touchend: INPUT_END,
    touchcancel: INPUT_CANCEL
};

var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

/**
 * Multi-user touch events input
 * @constructor
 * @extends Input
 */
function TouchInput() {
    this.evTarget = TOUCH_TARGET_EVENTS;
    this.targetIds = {};

    Input.apply(this, arguments);
}

inherit(TouchInput, Input, {
    handler: function MTEhandler(ev) {
        var type = TOUCH_INPUT_MAP[ev.type];
        var touches = getTouches.call(this, ev, type);
        if (!touches) {
            return;
        }

        this.callback(this.manager, type, {
            pointers: touches[0],
            changedPointers: touches[1],
            pointerType: INPUT_TYPE_TOUCH,
            srcEvent: ev
        });
    }
});

/**
 * @this {TouchInput}
 * @param {Object} ev
 * @param {Number} type flag
 * @returns {undefined|Array} [all, changed]
 */
function getTouches(ev, type) {
    var allTouches = toArray(ev.touches);
    var targetIds = this.targetIds;

    // when there is only one touch, the process can be simplified
    if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
        targetIds[allTouches[0].identifier] = true;
        return [allTouches, allTouches];
    }

    var i,
        targetTouches,
        changedTouches = toArray(ev.changedTouches),
        changedTargetTouches = [],
        target = this.target;

    // get target touches from touches
    targetTouches = allTouches.filter(function(touch) {
        return hasParent(touch.target, target);
    });

    // collect touches
    if (type === INPUT_START) {
        i = 0;
        while (i < targetTouches.length) {
            targetIds[targetTouches[i].identifier] = true;
            i++;
        }
    }

    // filter changed touches to only contain touches that exist in the collected target ids
    i = 0;
    while (i < changedTouches.length) {
        if (targetIds[changedTouches[i].identifier]) {
            changedTargetTouches.push(changedTouches[i]);
        }

        // cleanup removed touches
        if (type & (INPUT_END | INPUT_CANCEL)) {
            delete targetIds[changedTouches[i].identifier];
        }
        i++;
    }

    if (!changedTargetTouches.length) {
        return;
    }

    return [
        // merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
        uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
        changedTargetTouches
    ];
}

/**
 * Combined touch and mouse input
 *
 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
 * This because touch devices also emit mouse events while doing a touch.
 *
 * @constructor
 * @extends Input
 */

var DEDUP_TIMEOUT = 2500;
var DEDUP_DISTANCE = 25;

function TouchMouseInput() {
    Input.apply(this, arguments);

    var handler = bindFn(this.handler, this);
    this.touch = new TouchInput(this.manager, handler);
    this.mouse = new MouseInput(this.manager, handler);

    this.primaryTouch = null;
    this.lastTouches = [];
}

inherit(TouchMouseInput, Input, {
    /**
     * handle mouse and touch events
     * @param {NGHammer} manager
     * @param {String} inputEvent
     * @param {Object} inputData
     */
    handler: function TMEhandler(manager, inputEvent, inputData) {
        var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
            isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

        if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
            return;
        }

        // when we're in a touch event, record touches to  de-dupe synthetic mouse event
        if (isTouch) {
            recordTouches.call(this, inputEvent, inputData);
        } else if (isMouse && isSyntheticEvent.call(this, inputData)) {
            return;
        }

        this.callback(manager, inputEvent, inputData);
    },

    /**
     * remove the event listeners
     */
    destroy: function destroy() {
        this.touch.destroy();
        this.mouse.destroy();
    }
});

function recordTouches(eventType, eventData) {
    if (eventType & INPUT_START) {
        this.primaryTouch = eventData.changedPointers[0].identifier;
        setLastTouch.call(this, eventData);
    } else if (eventType & (INPUT_END | INPUT_CANCEL)) {
        setLastTouch.call(this, eventData);
    }
}

function setLastTouch(eventData) {
    var touch = eventData.changedPointers[0];

    if (touch.identifier === this.primaryTouch) {
        var lastTouch = {x: touch.clientX, y: touch.clientY};
        this.lastTouches.push(lastTouch);
        var lts = this.lastTouches;
        var removeLastTouch = function() {
            var i = lts.indexOf(lastTouch);
            if (i > -1) {
                lts.splice(i, 1);
            }
        };
        setTimeout(removeLastTouch, DEDUP_TIMEOUT);
    }
}

function isSyntheticEvent(eventData) {
    var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
    for (var i = 0; i < this.lastTouches.length; i++) {
        var t = this.lastTouches[i];
        var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
            return true;
        }
    }
    return false;
}

var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
var TOUCH_ACTION_COMPUTE = 'compute';
var TOUCH_ACTION_AUTO = 'auto';
var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
var TOUCH_ACTION_NONE = 'none';
var TOUCH_ACTION_PAN_X = 'pan-x';
var TOUCH_ACTION_PAN_Y = 'pan-y';
var TOUCH_ACTION_MAP = getTouchActionProps();

/**
 * Touch Action
 * sets the touchAction property or uses the js alternative
 * @param {Manager} manager
 * @param {String} value
 * @constructor
 */
function TouchAction(manager, value) {
    this.manager = manager;
    this.set(value);
}

TouchAction.prototype = {
    /**
     * set the touchAction value on the element or enable the polyfill
     * @param {String} value
     */
    set: function(value) {
        // find out the touch-action by the event handlers
        if (value == TOUCH_ACTION_COMPUTE) {
            value = this.compute();
        }

        if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
            this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
        }
        this.actions = value.toLowerCase().trim();
    },

    /**
     * just re-set the touchAction value
     */
    update: function() {
        this.set(this.manager.options.touchAction);
    },

    /**
     * compute the value for the touchAction property based on the recognizer's settings
     * @returns {String} value
     */
    compute: function() {
        var actions = [];
        each(this.manager.recognizers, function(recognizer) {
            if (boolOrFn(recognizer.options.enable, [recognizer])) {
                actions = actions.concat(recognizer.getTouchAction());
            }
        });
        return cleanTouchActions(actions.join(' '));
    },

    /**
     * this method is called on each input cycle and provides the preventing of the browser behavior
     * @param {Object} input
     */
    preventDefaults: function(input) {
        var srcEvent = input.srcEvent;
        var direction = input.offsetDirection;

        // if the touch action did prevented once this session
        if (this.manager.session.prevented) {
            srcEvent.preventDefault();
            return;
        }

        var actions = this.actions;
        var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
        var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
        var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

        if (hasNone) {
            //do not prevent defaults if this is a tap gesture

            var isTapPointer = input.pointers.length === 1;
            var isTapMovement = input.distance < 2;
            var isTapTouchTime = input.deltaTime < 250;

            if (isTapPointer && isTapMovement && isTapTouchTime) {
                return;
            }
        }

        if (hasPanX && hasPanY) {
            // `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
            return;
        }

        if (hasNone ||
            (hasPanY && direction & DIRECTION_HORIZONTAL) ||
            (hasPanX && direction & DIRECTION_VERTICAL)) {
            return this.preventSrc(srcEvent);
        }
    },

    /**
     * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
     * @param {Object} srcEvent
     */
    preventSrc: function(srcEvent) {
        this.manager.session.prevented = true;
        srcEvent.preventDefault();
    }
};

/**
 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
 * @param {String} actions
 * @returns {*}
 */
function cleanTouchActions(actions) {
    // none
    if (inStr(actions, TOUCH_ACTION_NONE)) {
        return TOUCH_ACTION_NONE;
    }

    var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
    var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

    // if both pan-x and pan-y are set (different recognizers
    // for different directions, e.g. horizontal pan but vertical swipe?)
    // we need none (as otherwise with pan-x pan-y combined none of these
    // recognizers will work, since the browser would handle all panning
    if (hasPanX && hasPanY) {
        return TOUCH_ACTION_NONE;
    }

    // pan-x OR pan-y
    if (hasPanX || hasPanY) {
        return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
    }

    // manipulation
    if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
        return TOUCH_ACTION_MANIPULATION;
    }

    return TOUCH_ACTION_AUTO;
}

function getTouchActionProps() {
    if (!NATIVE_TOUCH_ACTION) {
        return false;
    }
    var touchMap = {};
    var cssSupports = window.CSS && window.CSS.supports;
    ['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

        // If css.supports is not supported but there is native touch-action assume it supports
        // all values. This is the case for IE 10 and 11.
        touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
    });
    return touchMap;
}

/**
 * Recognizer flow explained; *
 * All recognizers have the initial state of POSSIBLE when a input session starts.
 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
 * Example session for mouse-input: mousedown -> mousemove -> mouseup
 *
 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
 * which determines with state it should be.
 *
 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
 * POSSIBLE to give it another change on the next cycle.
 *
 *               Possible
 *                  |
 *            +-----+---------------+
 *            |                     |
 *      +-----+-----+               |
 *      |           |               |
 *   Failed      Cancelled          |
 *                          +-------+------+
 *                          |              |
 *                      Recognized       Began
 *                                         |
 *                                      Changed
 *                                         |
 *                                  Ended/Recognized
 */
var STATE_POSSIBLE = 1;
var STATE_BEGAN = 2;
var STATE_CHANGED = 4;
var STATE_ENDED = 8;
var STATE_RECOGNIZED = STATE_ENDED;
var STATE_CANCELLED = 16;
var STATE_FAILED = 32;

/**
 * Recognizer
 * Every recognizer needs to extend from this class.
 * @constructor
 * @param {Object} options
 */
function Recognizer(options) {
    this.options = assign({}, this.defaults, options || {});

    this.id = uniqueId();

    this.manager = null;

    // default is enable true
    this.options.enable = ifUndefined(this.options.enable, true);

    this.state = STATE_POSSIBLE;

    this.simultaneous = {};
    this.requireFail = [];
}

Recognizer.prototype = {
    /**
     * @virtual
     * @type {Object}
     */
    defaults: {},

    /**
     * set options
     * @param {Object} options
     * @return {Recognizer}
     */
    set: function(options) {
        assign(this.options, options);

        // also update the touchAction, in case something changed about the directions/enabled state
        this.manager && this.manager.touchAction.update();
        return this;
    },

    /**
     * recognize simultaneous with an other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    recognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
            return this;
        }

        var simultaneous = this.simultaneous;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (!simultaneous[otherRecognizer.id]) {
            simultaneous[otherRecognizer.id] = otherRecognizer;
            otherRecognizer.recognizeWith(this);
        }
        return this;
    },

    /**
     * drop the simultaneous link. it doesnt remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRecognizeWith: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        delete this.simultaneous[otherRecognizer.id];
        return this;
    },

    /**
     * recognizer can only run when an other is failing
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    requireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
            return this;
        }

        var requireFail = this.requireFail;
        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        if (inArray(requireFail, otherRecognizer) === -1) {
            requireFail.push(otherRecognizer);
            otherRecognizer.requireFailure(this);
        }
        return this;
    },

    /**
     * drop the requireFailure link. it does not remove the link on the other recognizer.
     * @param {Recognizer} otherRecognizer
     * @returns {Recognizer} this
     */
    dropRequireFailure: function(otherRecognizer) {
        if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
            return this;
        }

        otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
        var index = inArray(this.requireFail, otherRecognizer);
        if (index > -1) {
            this.requireFail.splice(index, 1);
        }
        return this;
    },

    /**
     * has require failures boolean
     * @returns {boolean}
     */
    hasRequireFailures: function() {
        return this.requireFail.length > 0;
    },

    /**
     * if the recognizer can recognize simultaneous with an other recognizer
     * @param {Recognizer} otherRecognizer
     * @returns {Boolean}
     */
    canRecognizeWith: function(otherRecognizer) {
        return !!this.simultaneous[otherRecognizer.id];
    },

    /**
     * You should use `tryEmit` instead of `emit` directly to check
     * that all the needed recognizers has failed before emitting.
     * @param {Object} input
     */
    emit: function(input) {
        var self = this;
        var state = this.state;

        function emit(event) {
            self.manager.emit(event, input);
        }

        // 'panstart' and 'panmove'
        if (state < STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }

        emit(self.options.event); // simple 'eventName' events

        if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
            emit(input.additionalEvent);
        }

        // panend and pancancel
        if (state >= STATE_ENDED) {
            emit(self.options.event + stateStr(state));
        }
    },

    /**
     * Check that all the require failure recognizers has failed,
     * if true, it emits a gesture event,
     * otherwise, setup the state to FAILED.
     * @param {Object} input
     */
    tryEmit: function(input) {
        if (this.canEmit()) {
            return this.emit(input);
        }
        // it's failing anyway
        this.state = STATE_FAILED;
    },

    /**
     * can we emit?
     * @returns {boolean}
     */
    canEmit: function() {
        var i = 0;
        while (i < this.requireFail.length) {
            if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
                return false;
            }
            i++;
        }
        return true;
    },

    /**
     * update the recognizer
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        // make a new copy of the inputData
        // so we can change the inputData without messing up the other recognizers
        var inputDataClone = assign({}, inputData);

        // is is enabled and allow recognizing?
        if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
            this.reset();
            this.state = STATE_FAILED;
            return;
        }

        // reset when we've reached the end
        if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
            this.state = STATE_POSSIBLE;
        }

        this.state = this.process(inputDataClone);

        // the recognizer has recognized a gesture
        // so trigger an event
        if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
            this.tryEmit(inputDataClone);
        }
    },

    /**
     * return the state of the recognizer
     * the actual recognizing happens in this method
     * @virtual
     * @param {Object} inputData
     * @returns {Const} STATE
     */
    process: function(inputData) { }, // jshint ignore:line

    /**
     * return the preferred touch-action
     * @virtual
     * @returns {Array}
     */
    getTouchAction: function() { },

    /**
     * called when the gesture isn't allowed to recognize
     * like when another is being recognized or it is disabled
     * @virtual
     */
    reset: function() { }
};

/**
 * get a usable string, used as event postfix
 * @param {Const} state
 * @returns {String} state
 */
function stateStr(state) {
    if (state & STATE_CANCELLED) {
        return 'cancel';
    } else if (state & STATE_ENDED) {
        return 'end';
    } else if (state & STATE_CHANGED) {
        return 'move';
    } else if (state & STATE_BEGAN) {
        return 'start';
    }
    return '';
}

/**
 * direction cons to string
 * @param {Const} direction
 * @returns {String}
 */
function directionStr(direction) {
    if (direction == DIRECTION_DOWN) {
        return 'down';
    } else if (direction == DIRECTION_UP) {
        return 'up';
    } else if (direction == DIRECTION_LEFT) {
        return 'left';
    } else if (direction == DIRECTION_RIGHT) {
        return 'right';
    }
    return '';
}

/**
 * get a recognizer by name if it is bound to a manager
 * @param {Recognizer|String} otherRecognizer
 * @param {Recognizer} recognizer
 * @returns {Recognizer}
 */
function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
    var manager = recognizer.manager;
    if (manager) {
        return manager.get(otherRecognizer);
    }
    return otherRecognizer;
}

/**
 * This recognizer is just used as a base for the simple attribute recognizers.
 * @constructor
 * @extends Recognizer
 */
function AttrRecognizer() {
    Recognizer.apply(this, arguments);
}

inherit(AttrRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof AttrRecognizer
     */
    defaults: {
        /**
         * @type {Number}
         * @default 1
         */
        pointers: 1
    },

    /**
     * Used to check if it the recognizer receives valid input, like input.distance > 10.
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {Boolean} recognized
     */
    attrTest: function(input) {
        var optionPointers = this.options.pointers;
        return optionPointers === 0 || input.pointers.length === optionPointers;
    },

    /**
     * Process the input and return the state for the recognizer
     * @memberof AttrRecognizer
     * @param {Object} input
     * @returns {*} State
     */
    process: function(input) {
        var state = this.state;
        var eventType = input.eventType;

        var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
        var isValid = this.attrTest(input);

        // on cancel input and we've recognized before, return STATE_CANCELLED
        if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
            return state | STATE_CANCELLED;
        } else if (isRecognized || isValid) {
            if (eventType & INPUT_END) {
                return state | STATE_ENDED;
            } else if (!(state & STATE_BEGAN)) {
                return STATE_BEGAN;
            }
            return state | STATE_CHANGED;
        }
        return STATE_FAILED;
    }
});

/**
 * Pan
 * Recognized when the pointer is down and moved in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function PanRecognizer() {
    AttrRecognizer.apply(this, arguments);

    this.pX = null;
    this.pY = null;
}

inherit(PanRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PanRecognizer
     */
    defaults: {
        event: 'pan',
        threshold: 10,
        pointers: 1,
        direction: DIRECTION_ALL
    },

    getTouchAction: function() {
        var direction = this.options.direction;
        var actions = [];
        if (direction & DIRECTION_HORIZONTAL) {
            actions.push(TOUCH_ACTION_PAN_Y);
        }
        if (direction & DIRECTION_VERTICAL) {
            actions.push(TOUCH_ACTION_PAN_X);
        }
        return actions;
    },

    directionTest: function(input) {
        var options = this.options;
        var hasMoved = true;
        var distance = input.distance;
        var direction = input.direction;
        var x = input.deltaX;
        var y = input.deltaY;

        // lock to axis?
        if (!(direction & options.direction)) {
            if (options.direction & DIRECTION_HORIZONTAL) {
                direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
                hasMoved = x != this.pX;
                distance = Math.abs(input.deltaX);
            } else {
                direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
                hasMoved = y != this.pY;
                distance = Math.abs(input.deltaY);
            }
        }
        input.direction = direction;
        return hasMoved && distance > options.threshold && direction & options.direction;
    },

    attrTest: function(input) {
        return AttrRecognizer.prototype.attrTest.call(this, input) &&
            (this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
    },

    emit: function(input) {

        this.pX = input.deltaX;
        this.pY = input.deltaY;

        var direction = directionStr(input.direction);

        if (direction) {
            input.additionalEvent = this.options.event + direction;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Pinch
 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
 * @constructor
 * @extends AttrRecognizer
 */
function PinchRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(PinchRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'pinch',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
    },

    emit: function(input) {
        if (input.scale !== 1) {
            var inOut = input.scale < 1 ? 'in' : 'out';
            input.additionalEvent = this.options.event + inOut;
        }
        this._super.emit.call(this, input);
    }
});

/**
 * Press
 * Recognized when the pointer is down for x ms without any movement.
 * @constructor
 * @extends Recognizer
 */
function PressRecognizer() {
    Recognizer.apply(this, arguments);

    this._timer = null;
    this._input = null;
}

inherit(PressRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PressRecognizer
     */
    defaults: {
        event: 'press',
        pointers: 1,
        time: 251, // minimal time of the pointer to be pressed
        threshold: 9 // a minimal movement is ok, but keep it low
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_AUTO];
    },

    process: function(input) {
        var options = this.options;
        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTime = input.deltaTime > options.time;

        this._input = input;

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
            this.reset();
        } else if (input.eventType & INPUT_START) {
            this.reset();
            this._timer = setTimeoutContext(function() {
                this.state = STATE_RECOGNIZED;
                this.tryEmit();
            }, options.time, this);
        } else if (input.eventType & INPUT_END) {
            return STATE_RECOGNIZED;
        }
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function(input) {
        if (this.state !== STATE_RECOGNIZED) {
            return;
        }

        if (input && (input.eventType & INPUT_END)) {
            this.manager.emit(this.options.event + 'up', input);
        } else {
            this._input.timeStamp = now();
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Rotate
 * Recognized when two or more pointer are moving in a circular motion.
 * @constructor
 * @extends AttrRecognizer
 */
function RotateRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(RotateRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof RotateRecognizer
     */
    defaults: {
        event: 'rotate',
        threshold: 0,
        pointers: 2
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_NONE];
    },

    attrTest: function(input) {
        return this._super.attrTest.call(this, input) &&
            (Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
    }
});

/**
 * Swipe
 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
 * @constructor
 * @extends AttrRecognizer
 */
function SwipeRecognizer() {
    AttrRecognizer.apply(this, arguments);
}

inherit(SwipeRecognizer, AttrRecognizer, {
    /**
     * @namespace
     * @memberof SwipeRecognizer
     */
    defaults: {
        event: 'swipe',
        threshold: 10,
        velocity: 0.3,
        direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
        pointers: 1
    },

    getTouchAction: function() {
        return PanRecognizer.prototype.getTouchAction.call(this);
    },

    attrTest: function(input) {
        var direction = this.options.direction;
        var velocity;

        if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
            velocity = input.overallVelocity;
        } else if (direction & DIRECTION_HORIZONTAL) {
            velocity = input.overallVelocityX;
        } else if (direction & DIRECTION_VERTICAL) {
            velocity = input.overallVelocityY;
        }

        return this._super.attrTest.call(this, input) &&
            direction & input.offsetDirection &&
            input.distance > this.options.threshold &&
            input.maxPointers == this.options.pointers &&
            abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
    },

    emit: function(input) {
        var direction = directionStr(input.offsetDirection);
        if (direction) {
            this.manager.emit(this.options.event + direction, input);
        }

        this.manager.emit(this.options.event, input);
    }
});

/**
 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
 * a single tap.
 *
 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
 * multi-taps being recognized.
 * @constructor
 * @extends Recognizer
 */
function TapRecognizer() {
    Recognizer.apply(this, arguments);

    // previous time and center,
    // used for tap counting
    this.pTime = false;
    this.pCenter = false;

    this._timer = null;
    this._input = null;
    this.count = 0;
}

inherit(TapRecognizer, Recognizer, {
    /**
     * @namespace
     * @memberof PinchRecognizer
     */
    defaults: {
        event: 'tap',
        pointers: 1,
        taps: 1,
        interval: 300, // max time between the multi-tap taps
        time: 250, // max time of the pointer to be down (like finger on the screen)
        threshold: 9, // a minimal movement is ok, but keep it low
        posThreshold: 10 // a multi-tap can be a bit off the initial position
    },

    getTouchAction: function() {
        return [TOUCH_ACTION_MANIPULATION];
    },

    process: function(input) {
        var options = this.options;

        var validPointers = input.pointers.length === options.pointers;
        var validMovement = input.distance < options.threshold;
        var validTouchTime = input.deltaTime < options.time;

        this.reset();

        if ((input.eventType & INPUT_START) && (this.count === 0)) {
            return this.failTimeout();
        }

        // we only allow little movement
        // and we've reached an end event, so a tap is possible
        if (validMovement && validTouchTime && validPointers) {
            if (input.eventType != INPUT_END) {
                return this.failTimeout();
            }

            var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
            var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

            this.pTime = input.timeStamp;
            this.pCenter = input.center;

            if (!validMultiTap || !validInterval) {
                this.count = 1;
            } else {
                this.count += 1;
            }

            this._input = input;

            // if tap count matches we have recognized it,
            // else it has began recognizing...
            var tapCount = this.count % options.taps;
            if (tapCount === 0) {
                // no failing requirements, immediately trigger the tap event
                // or wait as long as the multitap interval to trigger
                if (!this.hasRequireFailures()) {
                    return STATE_RECOGNIZED;
                } else {
                    this._timer = setTimeoutContext(function() {
                        this.state = STATE_RECOGNIZED;
                        this.tryEmit();
                    }, options.interval, this);
                    return STATE_BEGAN;
                }
            }
        }
        return STATE_FAILED;
    },

    failTimeout: function() {
        this._timer = setTimeoutContext(function() {
            this.state = STATE_FAILED;
        }, this.options.interval, this);
        return STATE_FAILED;
    },

    reset: function() {
        clearTimeout(this._timer);
    },

    emit: function() {
        if (this.state == STATE_RECOGNIZED) {
            this._input.tapCount = this.count;
            this.manager.emit(this.options.event, this._input);
        }
    }
});

/**
 * Simple way to create a manager with a default set of recognizers.
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function NGHammer(element, options) {
    options = options || {};
    options.recognizers = ifUndefined(options.recognizers, NGHammer.defaults.preset);
    return new Manager(element, options);
}

/**
 * @const {string}
 */
NGHammer.VERSION = '2.0.7';

/**
 * default settings
 * @namespace
 */
NGHammer.defaults = {
    /**
     * set if DOM events are being triggered.
     * But this is slower and unused by simple implementations, so disabled by default.
     * @type {Boolean}
     * @default false
     */
    domEvents: false,

    /**
     * The value for the touchAction property/fallback.
     * When set to `compute` it will magically set the correct value based on the added recognizers.
     * @type {String}
     * @default compute
     */
    touchAction: TOUCH_ACTION_COMPUTE,

    /**
     * @type {Boolean}
     * @default true
     */
    enable: true,

    /**
     * EXPERIMENTAL FEATURE -- can be removed/changed
     * Change the parent input target element.
     * If Null, then it is being set the to main element.
     * @type {Null|EventTarget}
     * @default null
     */
    inputTarget: null,

    /**
     * force an input class
     * @type {Null|Function}
     * @default null
     */
    inputClass: null,

    /**
     * Default recognizer setup when calling `NGHammer()`
     * When creating a new Manager these will be skipped.
     * @type {Array}
     */
    preset: [
        // RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
        [RotateRecognizer, {enable: false}],
        [PinchRecognizer, {enable: false}, ['rotate']],
        [SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
        [PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
        [TapRecognizer],
        [TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
        [PressRecognizer]
    ],

    /**
     * Some CSS properties can be used to improve the working of NGHammer.
     * Add them to this method and they will be set when creating a new Manager.
     * @namespace
     */
    cssProps: {
        /**
         * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userSelect: 'none',

        /**
         * Disable the Windows Phone grippers when pressing an element.
         * @type {String}
         * @default 'none'
         */
        touchSelect: 'none',

        /**
         * Disables the default callout shown when you touch and hold a touch target.
         * On iOS, when you touch and hold a touch target such as a link, Safari displays
         * a callout containing information about the link. This property allows you to disable that callout.
         * @type {String}
         * @default 'none'
         */
        touchCallout: 'none',

        /**
         * Specifies whether zooming is enabled. Used by IE10>
         * @type {String}
         * @default 'none'
         */
        contentZooming: 'none',

        /**
         * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
         * @type {String}
         * @default 'none'
         */
        userDrag: 'none',

        /**
         * Overrides the highlight color shown when the user taps a link or a JavaScript
         * clickable element in iOS. This property obeys the alpha value, if specified.
         * @type {String}
         * @default 'rgba(0,0,0,0)'
         */
        tapHighlightColor: 'rgba(0,0,0,0)'
    }
};

var STOP = 1;
var FORCED_STOP = 2;

/**
 * Manager
 * @param {HTMLElement} element
 * @param {Object} [options]
 * @constructor
 */
function Manager(element, options) {
    this.options = assign({}, NGHammer.defaults, options || {});

    this.options.inputTarget = this.options.inputTarget || element;

    this.handlers = {};
    this.session = {};
    this.recognizers = [];
    this.oldCssProps = {};

    this.element = element;
    this.input = createInputInstance(this);
    this.touchAction = new TouchAction(this, this.options.touchAction);

    toggleCssProps(this, true);

    each(this.options.recognizers, function(item) {
        var recognizer = this.add(new (item[0])(item[1]));
        item[2] && recognizer.recognizeWith(item[2]);
        item[3] && recognizer.requireFailure(item[3]);
    }, this);
}

Manager.prototype = {
    /**
     * set options
     * @param {Object} options
     * @returns {Manager}
     */
    set: function(options) {
        assign(this.options, options);

        // Options that need a little more setup
        if (options.touchAction) {
            this.touchAction.update();
        }
        if (options.inputTarget) {
            // Clean up existing event listeners and reinitialize
            this.input.destroy();
            this.input.target = options.inputTarget;
            this.input.init();
        }
        return this;
    },

    /**
     * stop recognizing for this session.
     * This session will be discarded, when a new [input]start event is fired.
     * When forced, the recognizer cycle is stopped immediately.
     * @param {Boolean} [force]
     */
    stop: function(force) {
        this.session.stopped = force ? FORCED_STOP : STOP;
    },

    /**
     * run the recognizers!
     * called by the inputHandler function on every movement of the pointers (touches)
     * it walks through all the recognizers and tries to detect the gesture that is being made
     * @param {Object} inputData
     */
    recognize: function(inputData) {
        var session = this.session;
        if (session.stopped) {
            return;
        }

        // run the touch-action polyfill
        this.touchAction.preventDefaults(inputData);

        var recognizer;
        var recognizers = this.recognizers;

        // this holds the recognizer that is being recognized.
        // so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
        // if no recognizer is detecting a thing, it is set to `null`
        var curRecognizer = session.curRecognizer;

        // reset when the last recognizer is recognized
        // or when we're in a new session
        if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
            curRecognizer = session.curRecognizer = null;
        }

        var i = 0;
        while (i < recognizers.length) {
            recognizer = recognizers[i];

            // find out if we are allowed try to recognize the input for this one.
            // 1.   allow if the session is NOT forced stopped (see the .stop() method)
            // 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
            //      that is being recognized.
            // 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
            //      this can be setup with the `recognizeWith()` method on the recognizer.
            if (session.stopped !== FORCED_STOP && ( // 1
                    !curRecognizer || recognizer == curRecognizer || // 2
                    recognizer.canRecognizeWith(curRecognizer))) { // 3
                recognizer.recognize(inputData);
            } else {
                recognizer.reset();
            }

            // if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
            // current active recognizer. but only if we don't already have an active recognizer
            if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
                curRecognizer = session.curRecognizer = recognizer;
            }
            i++;
        }
    },

    /**
     * get a recognizer by its event name.
     * @param {Recognizer|String} recognizer
     * @returns {Recognizer|Null}
     */
    get: function(recognizer) {
        if (recognizer instanceof Recognizer) {
            return recognizer;
        }

        var recognizers = this.recognizers;
        for (var i = 0; i < recognizers.length; i++) {
            if (recognizers[i].options.event == recognizer) {
                return recognizers[i];
            }
        }
        return null;
    },

    /**
     * add a recognizer to the manager
     * existing recognizers with the same event name will be removed
     * @param {Recognizer} recognizer
     * @returns {Recognizer|Manager}
     */
    add: function(recognizer) {
        if (invokeArrayArg(recognizer, 'add', this)) {
            return this;
        }

        // remove existing
        var existing = this.get(recognizer.options.event);
        if (existing) {
            this.remove(existing);
        }

        this.recognizers.push(recognizer);
        recognizer.manager = this;

        this.touchAction.update();
        return recognizer;
    },

    /**
     * remove a recognizer by name or instance
     * @param {Recognizer|String} recognizer
     * @returns {Manager}
     */
    remove: function(recognizer) {
        if (invokeArrayArg(recognizer, 'remove', this)) {
            return this;
        }

        recognizer = this.get(recognizer);

        // let's make sure this recognizer exists
        if (recognizer) {
            var recognizers = this.recognizers;
            var index = inArray(recognizers, recognizer);

            if (index !== -1) {
                recognizers.splice(index, 1);
                this.touchAction.update();
            }
        }

        return this;
    },

    /**
     * bind event
     * @param {String} events
     * @param {Function} handler
     * @returns {EventEmitter} this
     */
    on: function(events, handler) {
        if (events === undefined) {
            return;
        }
        if (handler === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            handlers[event] = handlers[event] || [];
            handlers[event].push(handler);
        });
        return this;
    },

    /**
     * unbind event, leave emit blank to remove all handlers
     * @param {String} events
     * @param {Function} [handler]
     * @returns {EventEmitter} this
     */
    off: function(events, handler) {
        if (events === undefined) {
            return;
        }

        var handlers = this.handlers;
        each(splitStr(events), function(event) {
            if (!handler) {
                delete handlers[event];
            } else {
                handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
            }
        });
        return this;
    },

    /**
     * emit event to the listeners
     * @param {String} event
     * @param {Object} data
     */
    emit: function(event, data) {
        // we also want to trigger dom events
        if (this.options.domEvents) {
            triggerDomEvent(event, data);
        }

        // no handlers, so skip it all
        var handlers = this.handlers[event] && this.handlers[event].slice();
        if (!handlers || !handlers.length) {
            return;
        }

        data.type = event;
        data.preventDefault = function() {
            data.srcEvent.preventDefault();
        };

        var i = 0;
        while (i < handlers.length) {
            handlers[i](data);
            i++;
        }
    },

    /**
     * destroy the manager and unbinds all events
     * it doesn't unbind dom events, that is the user own responsibility
     */
    destroy: function() {
        this.element && toggleCssProps(this, false);

        this.handlers = {};
        this.session = {};
        this.input.destroy();
        this.element = null;
    }
};

/**
 * add/remove the css properties as defined in manager.options.cssProps
 * @param {Manager} manager
 * @param {Boolean} add
 */
function toggleCssProps(manager, add) {
    var element = manager.element;
    if (!element.style) {
        return;
    }
    var prop;
    each(manager.options.cssProps, function(value, name) {
        prop = prefixed(element.style, name);
        if (add) {
            manager.oldCssProps[prop] = element.style[prop];
            element.style[prop] = value;
        } else {
            element.style[prop] = manager.oldCssProps[prop] || '';
        }
    });
    if (!add) {
        manager.oldCssProps = {};
    }
}

/**
 * trigger dom event
 * @param {String} event
 * @param {Object} data
 */
function triggerDomEvent(event, data) {
    var gestureEvent = document.createEvent('Event');
    gestureEvent.initEvent(event, true, true);
    gestureEvent.gesture = data;
    data.target.dispatchEvent(gestureEvent);
}

assign(NGHammer, {
    INPUT_START: INPUT_START,
    INPUT_MOVE: INPUT_MOVE,
    INPUT_END: INPUT_END,
    INPUT_CANCEL: INPUT_CANCEL,

    STATE_POSSIBLE: STATE_POSSIBLE,
    STATE_BEGAN: STATE_BEGAN,
    STATE_CHANGED: STATE_CHANGED,
    STATE_ENDED: STATE_ENDED,
    STATE_RECOGNIZED: STATE_RECOGNIZED,
    STATE_CANCELLED: STATE_CANCELLED,
    STATE_FAILED: STATE_FAILED,

    DIRECTION_NONE: DIRECTION_NONE,
    DIRECTION_LEFT: DIRECTION_LEFT,
    DIRECTION_RIGHT: DIRECTION_RIGHT,
    DIRECTION_UP: DIRECTION_UP,
    DIRECTION_DOWN: DIRECTION_DOWN,
    DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
    DIRECTION_VERTICAL: DIRECTION_VERTICAL,
    DIRECTION_ALL: DIRECTION_ALL,

    Manager: Manager,
    Input: Input,
    TouchAction: TouchAction,

    TouchInput: TouchInput,
    MouseInput: MouseInput,
    PointerEventInput: PointerEventInput,
    TouchMouseInput: TouchMouseInput,
    SingleTouchInput: SingleTouchInput,

    Recognizer: Recognizer,
    AttrRecognizer: AttrRecognizer,
    Tap: TapRecognizer,
    Pan: PanRecognizer,
    Swipe: SwipeRecognizer,
    Pinch: PinchRecognizer,
    Rotate: RotateRecognizer,
    Press: PressRecognizer,

    on: addEventListeners,
    off: removeEventListeners,
    each: each,
    merge: merge,
    extend: extend,
    assign: assign,
    inherit: inherit,
    bindFn: bindFn,
    prefixed: prefixed
});

// this prevents errors when NGHammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
freeGlobal.NGHammer = NGHammer;

if (typeof define === 'function' && define.amd) {
    define(function() {
        return NGHammer;
    });
} else if (typeof module != 'undefined' && module.exports) {
    module.exports = NGHammer;
} else {
    window[exportName] = NGHammer;
}

})(window, document, 'NGHammer');




//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################
//##########################################################################################################################

// nanogallery2 auto start whithout javascript call
(function(){
  'use strict';
  jQuery(document).ready(function () {
  
    // var t=document.querySelectorAll('[data-nanogallery2-portable]');
    // if( t.length > 0 ) {
      // portable mode
      // var link = document.createElement('link');
      // link.setAttribute("rel", "stylesheet");
      // link.setAttribute("type", "text/css");
      // link.onload = function(){
        // for( var i=0; i < t.length; i++ ) {
          // jQuery(t[i]).nanogallery2(jQuery(t[i]).data('nanogallery2-portable'));
        // }
      // }
      // link.setAttribute("href", '//nano.gallery/css/nanogallery2.css');
      // document.getElementsByTagName("head")[0].appendChild(link);
    // }
    // else {
      // standard mode
      var t=document.querySelectorAll('[data-nanogallery2]');
      for( var i=0; i < t.length; i++ ) {
        jQuery(t[i]).nanogallery2(jQuery(t[i]).data('nanogallery2'));
      }
    // }
    
  });
}).call(null);


/**!
 * @preserve nanogallery2 - NANOPHOTOSPROVIDER2 data provider
 * Homepage: http://nanogallery2.nanostudio.org
 * Sources:  https://github.com/nanostudio-org/nanogallery2
 *
 * License:  GPLv3 and commercial licence
 * 
*/
 
// ########################################################
// ##### nanogallery2 - module NANOPHOTOSPROVIDER2    #####
// ########################################################


;(function ($) {
  
  jQuery.nanogallery2.data_nano_photos_provider2 = function (instance, fnName){
    var G=instance;      // current nanogallery2 instance
    
    /** @function AlbumGetContent */
    var AlbumGetContent = function(albumID, fnToCall, fnParam1, fnParam2) {


      var albumIdx=NGY2Item.GetIdx(G, albumID);

      // title is identical to ID (only for albums)
      if( instance.I[albumIdx].title == '' ) {
        instance.I[albumIdx].title=JsonConvertCharset(albumID);
      }


      // var url = G.O.dataProvider + '?albumID='+encodeURIComponent(albumID);
      var url = G.O.dataProvider + '?albumID='+albumID;
      url += '&wxs='+G.tn.settings.width[G.GOM.curNavLevel].xs;
      url += '&hxs='+G.tn.settings.height[G.GOM.curNavLevel].xs;
      url += '&wsm='+G.tn.settings.width[G.GOM.curNavLevel].sm;
      url += '&hsm='+G.tn.settings.height[G.GOM.curNavLevel].sm;
      url += '&wme='+G.tn.settings.width[G.GOM.curNavLevel].me;
      url += '&hme='+G.tn.settings.height[G.GOM.curNavLevel].me;
      url += '&wla='+G.tn.settings.width[G.GOM.curNavLevel].la;
      url += '&hla='+G.tn.settings.height[G.GOM.curNavLevel].la;
      url += '&wxl='+G.tn.settings.width[G.GOM.curNavLevel].xl;
      url += '&hxl='+G.tn.settings.height[G.GOM.curNavLevel].xl;
      
      // console.dir(url);
      
      PreloaderDisplay(true);

      jQuery.ajaxSetup({ cache: false });
      jQuery.support.cors = true;
      try {
        
        
        
        var tId = setTimeout( function() {
          // workaround to handle JSONP (cross-domain) errors
          PreloaderDisplay(false);
          NanoAlert('Could not retrieve nanoPhotosProvider2 data (timeout).');
        }, 60000 );

        // console.log(url);        
        jQuery.getJSON(url, function(data, status, xhr) {
          clearTimeout(tId);
          PreloaderDisplay(false);
          JsonParseData(albumIdx, data);
          if( data.nano_status == 'ok' ) {
            AlbumPostProcess(albumID);
            if( fnToCall !== null &&  fnToCall !== undefined) {
              fnToCall( fnParam1, fnParam2, null );
            }
          }
          else {
            NanoAlert(G, 'Could not retrieve nanoPhotosProvider2 data. Error: ' + data.nano_status + ' - ' + data.nano_message);
          }
        })
        .fail( function(jqxhr, textStatus, error) {
          clearTimeout(tId);
          PreloaderDisplay(false);

          var k=''
          for(var key in jqxhr) {
            k+= key + '=' + jqxhr[key] +'<br>';
          }
          var err = textStatus + ', ' + error + ' ' + k + '<br><br>URL:'+url;
          NanoAlert(G, 'Could not retrieve nanoPhotosProvider2 data. Error: ' + err);

        });    
      
      }
      catch(e) {
        NanoAlert(G, 'Could not retrieve nanoPhotosProvider2 data. Error: ' + e);
      }
    }

    
    function JsonConvertCharset( str ) {
      
      return decodeURIComponent(str);


      // Pb %C3%A9 --> %E9
      // in UTF-8: \u00e9=\xe9 (e9 = hex value)
      switch( G.O.dataCharset.toUpperCase() ) {
        case 'UTF-8':     // Apache Windows
          return decodeURI(str);      // do not use decodeURIComponent (would convert slash also)
          break;
        case 'Latin':     // Apache Linux
        default :
          return escape(str);
          break;
      }
    }

    function JsonParseData(albumIdx, data) {
      var foundAlbumID=false;
      var nb=0;

      
      jQuery.each(data.album_content, function(i,item){
      
        var title=item.title;
        // title=GetI18nItem(item,'title');
        // if( title === undefined ) { title=''; }

        var baseURL=G.O.dataProvider.substring(0, G.O.dataProvider.indexOf('nano_photos_provider2.php'));
        var src=baseURL+JsonConvertCharset(item.src);

        if( G.O.thumbnailLabel.get('title') != '' ) {
          title=GetImageTitle((item.src));
        }

        var description=item.description;     //'&nbsp;';
        // description=GetI18nItem(item,'description');
        // if( description === undefined ) { description=''; }

        var kind='image';
        if( item.kind !== undefined && item.kind.length > 0 ) {
          kind=item.kind;
        }

        var ID=null;
        if( item.ID !== undefined ) {
          ID=(item.ID);
        }

        var ok=true;
        if( kind == 'album' ) {
          if( !FilterAlbumName(title, ID) ) { ok=false; }
        }

        if( ok ) {
          var albumID=0;
          if( item.albumID !== undefined  ) {
            albumID=item.albumID;
            foundAlbumID=true;
          }

          var tags='';
          if( item.tags !== undefined ) {
            tags=item.tags;
          }
          
          var newItem=NGY2Item.New( G, title.split('_').join(' ') , description.split('_').join(' '), ID, albumID, kind, tags );
          newItem.src=src;

          // dominant colors as a gif
          if( item.dcGIF !== undefined ) {
            newItem.imageDominantColors='data:image/gif;base64,'+item.dcGIF;
          }
          // dominant color as hex rgb value
          if( item.dc !== undefined && item.dc !== '' ) {
            newItem.imageDominantColor=item.dc;
          }
          
          if( kind == 'album' ) {
            // number of items in album
            newItem.numberItems=item.cnt;
          }
          else {
            // image size
            newItem.imageWidth=item.imgWidth;
            newItem.imageHeight=item.imgHeight;
          }
          
          if( item.originalURL != '' ) {
            // newItem.downloadURL=item.download;
            newItem.downloadURL=baseURL+JsonConvertCharset(item.originalURL);
          }
          
          
          // retrieve responsive thumbnails urls and sizes
          var cnl=G.GOM.curNavLevel;
          var l=['xs', 'sm', 'me', 'la', 'xl'];
          for( var n=0; n<l.length; n++ ) {
            newItem.thumbs.url[cnl][l[n]]     = baseURL + JsonConvertCharset(item.t_url[n]);
            newItem.thumbs.width[cnl][l[n]]   = parseInt(item.t_width[n]);
            newItem.thumbs.height[cnl][l[n]]  = parseInt(item.t_height[n]);
          }
         
          if( typeof G.O.fnProcessData == 'function' ) {
            G.O.fnProcessData(newItem, G.O.dataProvider, data);
          }
        }
      });

      G.I[albumIdx].contentIsLoaded=true;   // album's content is ready

    }    
    

    // -----------
    // Initialize 
    function Init() {

    }
    

    // shortcuts to NGY2Tools functions (with context)
    var PreloaderDisplay = NGY2Tools.PreloaderDisplay.bind(G);
    // var NanoAlert = NGY2Tools.NanoAlert.bind(G);
    var NanoAlert = NGY2Tools.NanoAlert;
    var GetImageTitleFromURL = NGY2Tools.GetImageTitleFromURL.bind(G);
    var FilterAlbumName = NGY2Tools.FilterAlbumName.bind(G);
    var AlbumPostProcess = NGY2Tools.AlbumPostProcess.bind(G);
 
    switch( fnName ){
      case 'GetHiddenAlbums':
        break;
      case 'AlbumGetContent':
        var albumID = arguments[2],
        callback = arguments[3],
        cbParam1 = arguments[4],
        cbParam2 = arguments[5];
        AlbumGetContent(albumID, callback, cbParam1, cbParam2);
        break;
      case 'Init':
        Init();
        break;
      case '':
        break;
      case '':
        break;
    }

  };
  
// END NANOPHOTOSPROVIDER DATA SOURCE FOR NANOGALLERY2
}( jQuery ));
  
  
  
  
  
/**!
 * @preserve nanogallery2 - GOOGLE PHOTOS data provider
 * Homepage: http://nanogallery2.nanostudio.org
 * Sources:  https://github.com/nanostudio-org/nanogallery2
 *
 * License:  GPLv3 and commercial licence
 * 
*/
 
// ###################################################
// ##### nanogallery2 - module for GOOGLE PHOTOS #####
// ##### requires nanogp                         #####
// ###################################################


;(function ($) {
  
  jQuery.nanogallery2.data_google2 = function (instance, fnName){
    var G=instance;      // current nanogallery2 instance

    // ### Picasa/Google+
    // square format : 32, 48, 64, 72, 104, 144, 150, 160 (cropped)
    // details: https://developers.google.com/picasa-web/docs/2.0/reference
    Google = {
      url: function() {
        // return ( G.O.picasaUseUrlCrossDomain ? 'https://photos.googleapis.com/data/feed/api/' : 'https://picasaweb.google.com/data/feed/api/');
        return ( 'https://photos.googleapis.com/data/feed/api/' );
      },
      thumbSize: 64,
      thumbAvailableSizes : new Array(32, 48, 64, 72, 94, 104, 110, 128, 144, 150, 160, 200, 220, 288, 320, 400, 512, 576, 640, 720, 800, 912, 1024, 1152, 1280, 1440, 1600),
      thumbAvailableSizesCropped : ' 32 48 64 72 104 144 150 160 '
    };
    
    
    /** @function AlbumGetContent */
    var AlbumGetContent = function(albumID, fnToCall, fnParam1, fnParam2) {


      var url= Google.url() + 'user/'+G.O.userID;
      var kind= 'image';
      var albumIdx=NGY2Item.GetIdx(G, albumID);

      var maxResults='';
      if( G.galleryMaxItems.Get() > 0 ) {
        maxResults='&max-results='+G.galleryMaxItems.Get();
      }
      
      var gat='';   // global authorization (using the Builder)
      if( typeof ngy2_pwa_at !== 'undefined' ) {
        gat=ngy2_pwa_at;
      }
      
      if( albumID == 0 ) {
      // if( G.I[albumIdx].GetID() == 0 ) {
        // retrieve the list of albums
        if( gat != '' ) {
          // in builder
          url += '?alt=json&v=3&kind=album&thumbsize='+G.picasa.thumbSizes+maxResults+'&rnd=' + (new Date().getTime()) + '&access_token=' + gat;
        }
        else {
          if( G.O.google2URL == undefined || G.O.google2URL == '' ) {
            // old Picasa access method (for content before 09/02/2017)
            url += '?alt=json&v=3&kind=album&thumbsize='+G.picasa.thumbSizes+maxResults+'&rnd=' + (new Date().getTime());
          }
          else {
            // nanogp
            url=G.O.google2URL + '?nguserid='+G.O.userID+'&alt=json&v=3&kind=album&thumbsize='+G.picasa.thumbSizes+maxResults+'&rnd=' + (new Date().getTime());
          }
        }
        kind='album';
      }
      else {
        // retrieve the content of one album (=photos)
        var auth='';
        if( G.I[albumIdx].authkey != '' ) {
          // private album
          auth=G.I[albumIdx].authkey;
        }
        if( gat != '' ) {
          // in builder
          url += '/albumid/'+albumID+'?alt=json&kind=photo&thumbsize='+G.picasa.thumbSizes+maxResults+auth+'&imgmax=d&access_token=' + gat;
        }
        else {
          if( G.O.google2URL == undefined || G.O.google2URL == '' ) {
            // old Picasa access method (for content before 09/02/2017)
            url += '/albumid/'+albumID+'?alt=json&v=3&kind=photo&thumbsize='+G.picasa.thumbSizes+maxResults+'&rnd=' + (new Date().getTime());
          }
          else {
            // nanogp
            url=G.O.google2URL + '?nguserid='+G.O.userID+'&ngalbumid='+albumID+'&alt=json&v=3&kind=photo&thumbsize='+G.picasa.thumbSizes+maxResults+auth+'&imgmax=d';
          }
        }
      }

      PreloaderDisplay(true);

      jQuery.ajaxSetup({ cache: false });
      jQuery.support.cors = true;
      try {
        
        var tId = setTimeout( function() {
          // workaround to handle JSONP (cross-domain) errors
          PreloaderDisplay(false);
          NanoAlert('Could not retrieve AJAX data...');
        }, 60000 );

        var GI_getJSONfinished = function(data){
          clearTimeout(tId);
          PreloaderDisplay(false);
          GoogleParseData( albumIdx, kind, data );
          AlbumPostProcess(albumID);
          if( fnToCall !== null &&  fnToCall !== undefined) {
            fnToCall( fnParam1, fnParam2, null );
          }
        };

        var gi_data_loaded = null;
        // load more than 1000 data (contributor: Giovanni Chiodi)
        var GI_loadJSON = function(url,start_index){
          // console.log(url + '&start-index=' + start_index + '&callback=?');
          jQuery.getJSON( url + '&start-index=' + start_index + '&callback=?', function(data) {
          
            if( data.nano_status == 'error' ) {
              clearTimeout(tId);
              PreloaderDisplay(false);
              NanoAlert(G, "Could not retrieve Google data. Error: " + data.nano_message);
              return;
            }
          
            if (gi_data_loaded===null) {
              gi_data_loaded = data;
            }
            else {
              gi_data_loaded.feed.entry=gi_data_loaded.feed.entry.concat(data.feed.entry);
            }

            var cnt=data.feed.openSearch$startIndex.$t+data.feed.openSearch$itemsPerPage.$t;
            var numItems=0;
            if( kind == 'image' ) {
              // retrieve the number of images from one album
              if( data.feed.gphoto$numphotos === undefined ) {
                numItems=data.feed.openSearch$totalResults.$t;
              }
              else {
                numItems=data.feed.gphoto$numphotos.$t;
              }
            }
            else {
              // retrieve the number of images from a list of albums
              numItems=data.feed.openSearch$totalResults.$t;
            }
            
            // if (data.feed.openSearch$startIndex.$t+data.feed.openSearch$itemsPerPage.$t>=data.feed.openSearch$totalResults.$t){
            if( cnt >= numItems || cnt >= G.galleryMaxItems.Get() ) {
              //ok finito
              GI_getJSONfinished(gi_data_loaded);
            }
            else {
              //ce ne sono ancora da caricare
              //altra chiamata per il rimanente
              GI_loadJSON(url, cnt);
            }
          })
          .fail( function(jqxhr, textStatus, error) {
            clearTimeout(tId);
            PreloaderDisplay(false);

            var k=''
            for(var key in jqxhr) {
              k+= key + '=' + jqxhr[key] +'<br>';
            }
            var err = textStatus + ', ' + error + ' ' + k + '<br><br>URL:'+url;
            NanoAlert(G, "Could not retrieve Google data. Error: " + err);

          });
          
        };

        GI_loadJSON(url,1);
      }
      catch(e) {
        NanoAlert(G, "Could not retrieve Google data. Error: " + e);
      }
    }

    
    // -----------
    // Retrieve items from a Google Photos (ex Picasa) data stream
    // items can be images or albums
    function GoogleParseData(albumIdx, kind, data) {
      var albumID=G.I[albumIdx].GetID();

      if( G.I[albumIdx].title == '' ) {
        // set title of the album (=> root level not loaded at this time)
        G.I[albumIdx].title=data.feed.title.$t;
      }
      
      // iterate and parse each item
      jQuery.each(data.feed.entry, function(i,data){

        // Get the title 
        var imgUrl=data.media$group.media$content[0].url;
        var itemTitle = data.title.$t;

        
        // Get the description
        var filename='';
        var itemDescription = data.media$group.media$description.$t;
        if( kind == 'image') {
          // if image, the title contains the image filename -> replace with content of description
          filename=itemTitle;
          if( itemDescription != '' ) {
            itemTitle=itemDescription;
            itemDescription='';
          }
          if( G.O.thumbnailLabel.get('title') != '' ) {
            // use filename for the title (extract from URL)
            itemTitle=GetImageTitleFromURL(unescape(unescape(unescape(unescape(imgUrl)))));
          }
        }
        
        var itemID = data.gphoto$id.$t;
        if( !(kind == 'album' && !FilterAlbumName(itemTitle, itemID)) ) {

          var newItem=NGY2Item.New( G, itemTitle, itemDescription, itemID, albumID, kind, '' );
          // set the image src
          var src='';
          if( kind == 'image' ) {
            src=imgUrl;
            if( !G.O.viewerZoom && G.O.viewerZoom != undefined ) {
              var s=imgUrl.substring(0, imgUrl.lastIndexOf('/'));
              s=s.substring(0, s.lastIndexOf('/')) + '/';
              if( window.screen.width >  window.screen.height ) {
                src=s+'w'+window.screen.width+'/'+filename;
              }
              else {
                src=s+'h'+window.screen.height+'/'+filename;
              }
            }
            newItem.src=src;    // image's URL

            // image size
            if( data.gphoto$width !== undefined ) {
              newItem.imageWidth=parseInt(data.gphoto$width.$t);
            }
            if( data.gphoto$height !== undefined ) {
              newItem.imageHeight=parseInt(data.gphoto$height.$t);
            }

            if( data.media$group != null && data.media$group.media$credit != null && data.media$group.media$credit.length > 0 ) {
              newItem.author=data.media$group.media$credit[0].$t;
            }

            
            // exif data
            if( data.exif$tags !== undefined ) {
              if( data.exif$tags.exif$exposure != undefined ) {
                newItem.exif.exposure= data.exif$tags.exif$exposure.$t;
              }
              if( data.exif$tags.exif$flash != undefined ) {
                if( data.exif$tags.exif$flash.$t == 'true' ) {
                  newItem.exif.flash= 'flash';
                }
              }
              if( data.exif$tags.exif$focallength != undefined ) {
                newItem.exif.focallength= data.exif$tags.exif$focallength.$t;
              }
              if( data.exif$tags.exif$fstop != undefined ) {
                newItem.exif.fstop= data.exif$tags.exif$fstop.$t;
              }
              if( data.exif$tags.exif$iso != undefined ) {
                newItem.exif.iso= data.exif$tags.exif$iso.$t;
              }
              if( data.exif$tags.exif$model != undefined ) {
                newItem.exif.model= data.exif$tags.exif$model.$t;
              }
              
              // geo location
              if( data.gphoto$location != undefined ) {
                newItem.exif.location= data.gphoto$location;
              }
            }
          }
          else {
            newItem.author=data.author[0].name.$t;
            newItem.numberItems=data.gphoto$numphotos.$t;
          }

          // set the URL of the thumbnails images
          newItem.thumbs=GoogleThumbSetSizes('l1', 0, newItem.thumbs, data, kind );
          newItem.thumbs=GoogleThumbSetSizes('lN', 5, newItem.thumbs, data, kind );
          
          if( typeof G.O.fnProcessData == 'function' ) {
            G.O.fnProcessData(newItem, 'google2', data);
          }
        }
      });

      G.I[albumIdx].contentIsLoaded=true;   // album's content is ready
    }
  
    
    
    /** @function GetHiddenAlbums */
    var GetHiddenAlbums = function( hiddenAlbums, callback ){
      var lstAlbums = [].concat( hiddenAlbums );
      for( var i=0; i< lstAlbums.length; i++ ) {
        AlbumAuthkeyGetInfoQueue(lstAlbums[i], callback);
      }
      // dequeue sequentially
      jQuery(document).dequeue('GoogleAlbumWithAuthkey');
    }

    // Google+ - retrieves private album
    // The first image is used as the cover image (=album thumbnail)
    function AlbumAuthkeyGetInfoQueue( albumIDwithAuthkey, callback ) {
      jQuery(document).queue('GoogleAlbumWithAuthkey', function() {

      var p=albumIDwithAuthkey.indexOf('&authkey=');
        if( p == -1 ) {
          p=albumIDwithAuthkey.indexOf('?authkey=');
        }
        var albumID=albumIDwithAuthkey.substring(0,p);

        var opt=albumIDwithAuthkey.substring(p);
        if( opt.indexOf('Gv1sRg') == -1 ) {
          opt='&authkey=Gv1sRg'+opt.substring(9);
        }
        var url = Google.url() + 'user/'+G.O.userID+'/albumid/'+albumID+'?alt=json&kind=photo'+opt+'&max-results=1&thumbsize='+G.picasa.thumbSizes+'&imgmax=d';
        
        PreloaderDisplay(true);

        jQuery.ajaxSetup({ cache: false });
        jQuery.support.cors = true;
        
        var tId = setTimeout( function() {
          // workaround to handle JSONP (cross-domain) errors
          PreloaderDisplay(false);
          NanoAlert(G, 'Could not retrieve AJAX data...');
        }, 60000 );
        jQuery.getJSON(url, function(data, status, xhr) {
          clearTimeout(tId);
          PreloaderDisplay(false);
          
          var albumTitle=data.feed.title.$t;
          var source = data.feed.entry[0];

          var newItem=NGY2Item.New( G, albumTitle, '', albumID, '0', 'album', '' );
          
          newItem.authkey=opt;
          
          //Get and set the URLs of the thumbnail
          newItem.thumbs=GoogleThumbSetSizes('l1', 0, newItem.thumbs, source, 'album' );
          newItem.thumbs=GoogleThumbSetSizes('lN', 5, newItem.thumbs, source, 'album' );
   
          if( typeof G.O.fnProcessData == 'function' ) {
            G.O.fnProcessData(newItem, 'google', source);
          }
//          G.I[1].contentIsLoaded=true;
          newItem.numberItems=data.feed.gphoto$numphotos.$t;

          // dequeue to process the next google+/picasa private album
          if( jQuery(document).queue('GoogleAlbumWithAuthkey').length > 0 ) {
            jQuery(document).dequeue('GoogleAlbumWithAuthkey');
          }
          else {
            callback();
          }

        })
        .fail( function(jqxhr, textStatus, error) {
          clearTimeout(tId);
          PreloaderDisplay(false);
          NanoAlert(G, "Could not retrieve ajax data (google): " + textStatus + ', ' + error);
          jQuery(document).dequeue('GoogleAlbumWithAuthkey');
        });      
      });      

    }

    // -----------
    // Set thumbnail sizes (width and height) and URLs (for all resolutions (xs, sm, me, la, xl) and levels (l1, lN)
    function GoogleThumbSetSizes(level, startI, tn, data, kind ) {
      var sizes=['xs','sm','me','la','xl'];
      
      for(var i=0; i<sizes.length; i++ ) {
        tn.url[level][sizes[i]]=data.media$group.media$thumbnail[startI+i].url;
        if( kind == 'image' ) {
          tn.width[level][sizes[i]]=data.media$group.media$thumbnail[startI+i].width;
          tn.height[level][sizes[i]]=data.media$group.media$thumbnail[startI+i].height;

          var gw=data.media$group.media$thumbnail[startI+i].width;
          var gh=data.media$group.media$thumbnail[startI+i].height;
          if( G.tn.settings.width[level][sizes[i]] == 'auto' ) {
            if( gh < G.tn.settings.height[level][sizes[i]] ) {
              // calculate new h/w and change URL
              var ratio=gw/gh;
              tn.width[level][sizes[i]]=gw*ratio;
              tn.height[level][sizes[i]]=gh*ratio;
              var url=tn.url[level][sizes[i]].substring(0, tn.url[level][sizes[i]].lastIndexOf('/'));
              url=url.substring(0, url.lastIndexOf('/')) + '/';
              tn.url[level][sizes[i]]=url+'h'+G.tn.settings.height[level][sizes[i]]+'/';
            }
          }
          if( G.tn.settings.height[level][sizes[i]] == 'auto' ) {
            if( gw < G.tn.settings.width[level][sizes[i]] ) {
              // calculate new h/w and change URL
              var ratio=gh/gw;
              tn.height[level][sizes[i]]=gh*ratio;
              tn.width[level][sizes[i]]=gw*ratio;
              var url=tn.url[level][sizes[i]].substring(0, tn.url[level][sizes[i]].lastIndexOf('/'));
              url=url.substring(0, url.lastIndexOf('/')) + '/';
              tn.url[level][sizes[i]]=url+'w'+G.tn.settings.width[level][sizes[i]]+'/';
            }
          }
        }
        else {
          // albums
          // the Google API returns incorrect height/width values
          if( G.tn.settings.width[level][sizes[i]] != 'auto' ) {
//            tn.width[level][sizes[i]]=data.media$group.media$thumbnail[startI+i].width;
          }
          else {
            var url=tn.url[level][sizes[i]].substring(0, tn.url[level][sizes[i]].lastIndexOf('/'));
            url=url.substring(0, url.lastIndexOf('/')) + '/';
            tn.url[level][sizes[i]]=url+'h'+G.tn.settings.height[level][sizes[i]]+'/';
          }
          
          if( G.tn.settings.height[level][sizes[i]] != 'auto' ) { 
//            tn.height[level][sizes[i]]=data.media$group.media$thumbnail[startI+i].height;
          }
          else {
              var url=tn.url[level][sizes[i]].substring(0, tn.url[level][sizes[i]].lastIndexOf('/'));
              url=url.substring(0, url.lastIndexOf('/')) + '/';
              tn.url[level][sizes[i]]=url+'w'+G.tn.settings.width[level][sizes[i]]+'/';
          }
        }
      }
      return tn;
    }


    // -----------
    // Initialize thumbnail sizes
    function Init() {
      G.picasa = {
        // cache value in instance to avoid regeneration on each need
        thumbSizes:''
      };

      var sfL1=1;
      if( G.tn.opt.l1.crop === true ) {
        sfL1=G.O.thumbnailCropScaleFactor;
      }
      var sfLN=1;
      if( G.tn.opt.lN.crop === true ) {
        sfLN=G.O.thumbnailCropScaleFactor;
      }

      G.picasa.thumbSizes=GoogleAddOneThumbSize(G.picasa.thumbSizes, G.tn.settings.width.l1.xs*sfL1, G.tn.settings.height.l1.xs*sfL1, G.tn.settings.width.l1.xsc, G.tn.settings.height.l1.xsc );
      G.picasa.thumbSizes=GoogleAddOneThumbSize(G.picasa.thumbSizes, G.tn.settings.width.l1.sm*sfL1, G.tn.settings.height.l1.sm*sfL1, G.tn.settings.width.l1.smc, G.tn.settings.height.l1.smc );
      G.picasa.thumbSizes=GoogleAddOneThumbSize(G.picasa.thumbSizes, G.tn.settings.width.l1.me*sfL1, G.tn.settings.height.l1.me*sfL1, G.tn.settings.width.l1.mec, G.tn.settings.height.l1.mec );
      G.picasa.thumbSizes=GoogleAddOneThumbSize(G.picasa.thumbSizes, G.tn.settings.width.l1.la*sfL1, G.tn.settings.height.l1.la*sfL1, G.tn.settings.width.l1.lac, G.tn.settings.height.l1.lac );
      G.picasa.thumbSizes=GoogleAddOneThumbSize(G.picasa.thumbSizes, G.tn.settings.width.l1.xl*sfL1, G.tn.settings.height.l1.xl*sfL1, G.tn.settings.width.l1.xlc, G.tn.settings.height.l1.xlc );
      G.picasa.thumbSizes=GoogleAddOneThumbSize(G.picasa.thumbSizes, G.tn.settings.width.lN.xs*sfLN, G.tn.settings.height.lN.xs*sfLN, G.tn.settings.width.lN.xsc, G.tn.settings.height.lN.xsc );
      G.picasa.thumbSizes=GoogleAddOneThumbSize(G.picasa.thumbSizes, G.tn.settings.width.lN.sm*sfLN, G.tn.settings.height.lN.sm*sfLN, G.tn.settings.width.lN.smc, G.tn.settings.height.lN.smc );
      G.picasa.thumbSizes=GoogleAddOneThumbSize(G.picasa.thumbSizes, G.tn.settings.width.lN.me*sfLN, G.tn.settings.height.lN.me*sfLN, G.tn.settings.width.lN.mec, G.tn.settings.height.lN.mec );
      G.picasa.thumbSizes=GoogleAddOneThumbSize(G.picasa.thumbSizes, G.tn.settings.width.lN.la*sfLN, G.tn.settings.height.lN.la*sfLN, G.tn.settings.width.lN.lac, G.tn.settings.height.lN.lac );
      G.picasa.thumbSizes=GoogleAddOneThumbSize(G.picasa.thumbSizes, G.tn.settings.width.lN.xl*sfLN, G.tn.settings.height.lN.xl*sfLN, G.tn.settings.width.lN.xlc, G.tn.settings.height.lN.xlc );
    }
    
    function GoogleAddOneThumbSize(thumbSizes, v1, v2, c1, c2 ) {
      var v = Math.ceil( v2 * G.tn.scale ) + c2;
      // if( v1 == 'auto' ) {
      if( isNaN(v1) ) {
        v = Math.ceil( v2 * G.tn.scale ) + c2;
      }
      // else if( v2 == 'auto' ) {
      else if( isNaN(v2) ) {
          v = Math.ceil( v1 * G.tn.scale ) + c1;
        }
        else if( v1 > v2 ) {
          v = Math.ceil( v1 * G.tn.scale ) + c1;
        }
        
      if( thumbSizes.length > 0 ) {
        thumbSizes += ',';
      }
      thumbSizes += v;
      return thumbSizes;
    }


    // shortcuts to NGY2Tools functions (with context)
    var PreloaderDisplay = NGY2Tools.PreloaderDisplay.bind(G);
    // var NanoAlert = NGY2Tools.NanoAlert.bind(G);
    var NanoAlert = NGY2Tools.NanoAlert;
    var GetImageTitleFromURL = NGY2Tools.GetImageTitleFromURL.bind(G);
    var FilterAlbumName = NGY2Tools.FilterAlbumName.bind(G);
    var AlbumPostProcess = NGY2Tools.AlbumPostProcess.bind(G);
 
    switch( fnName ){
      case 'GetHiddenAlbums':
        var hiddenAlbums = arguments[2],
        callback = arguments[3];
        GetHiddenAlbums(hiddenAlbums, callback);
        break;
      case 'AlbumGetContent':
        var albumID = arguments[2],
        callback = arguments[3],
        cbParam1 = arguments[4],
        cbParam2 = arguments[5];
        AlbumGetContent(albumID, callback, cbParam1, cbParam2);
        break;
      case 'Init':
        Init();
        break;
      case '':
        break;
      case '':
        break;
    }

  };
  
// END GOOGLE DATA SOURCE FOR NANOGALLERY2
}( jQuery ));
  
  
  
  
  
/**!
 * @preserve nanogallery2 - FLICKR data provider
 * Homepage: http://nanogallery2.nanostudio.org
 * Sources:  https://github.com/nanostudio-org/nanogallery2
 *
 * License:  GPLv3 and commercial licence
 * 
*/
 
// ############################################
// ##### nanogallery2 - module for FLICKR #####
// ############################################


;(function ($) {
  
  jQuery.nanogallery2.data_flickr = function (instance, fnName){
    var G=instance;      // current nanoGALLERY2 instance

    // ### Flickr
    // Details: http://www.flickr.com/services/api/misc.urls.html
    var Flickr = {
      url: function() {
        // Flickr API Going SSL-Only on June 27th, 2014
        return 'https://api.flickr.com/services/rest/';
      },
      thumbSize:'               sq',
      thumbAvailableSizes :     new Array(75,100,150,240,500,640),
      thumbAvailableSizesStr :  new Array('sq','t','q','s','m','z'),
      photoSize :               '0',
      photoAvailableSizes :     new Array(75,100,150,240,500,640,1024,1024,1600,2048),
      photoAvailableSizesStr :  new Array('sq','t','q','s','m','z','b','l','h','k'),
      ApiKey :                  "2f0e634b471fdb47446abcb9c5afebdc"
    };
    
    
    /** @function AlbumGetContent */
    var AlbumGetContent = function(albumID, fnToCall, fnParam1, fnParam2) {

      var albumIdx=NGY2Item.GetIdx(G, albumID);
      var url = '';
      var kind='image';
        // photos
        if( G.O.photoset.toUpperCase() == 'NONE' || G.O.album.toUpperCase() == 'NONE' ) {
          // get photos from full photostream
          url = Flickr.url() + "?&method=flickr.people.getPublicPhotos&api_key=" + Flickr.ApiKey + "&user_id="+G.O.userID+"&extras=description,views,tags,url_o,url_sq,url_t,url_q,url_s,url_m,url_z,url_b,url_h,url_k&per_page=500&format=json";
        }
        else
          if( G.I[albumIdx].GetID() == 0 ) {
          // retrieve the list of albums
          url = Flickr.url() + "?&method=flickr.photosets.getList&api_key=" + Flickr.ApiKey + "&user_id="+G.O.userID+"&per_page=500&primary_photo_extras=tags,url_o,url_sq,url_t,url_q,url_s,url_m,url_l,url_z,url_b,url_h,url_k&format=json";
          kind='album';
        }
          else {
            // photos from one specific photoset
            url = Flickr.url() + "?&method=flickr.photosets.getPhotos&api_key=" + Flickr.ApiKey + "&photoset_id="+G.I[albumIdx].GetID()+"&extras=description,views,tags,url_o,url_sq,url_t,url_q,url_s,url_m,url_l,url_z,url_b,url_h,url_k&format=json";
          }

      PreloaderDisplay(true);
      jQuery.ajaxSetup({ cache: false });
      jQuery.support.cors = true;
      
      var tId = setTimeout( function() {
        // workaround to handle JSONP (cross-domain) errors
        PreloaderDisplay(false);
        NanoAlert(G, 'Could not retrieve AJAX data...');
      }, 60000 );
      
      var sourceData=[];

      // Process the downloaded data
      var FlickrGetDone = function() {
        clearTimeout(tId);
        PreloaderDisplay(false);
        
        if( kind == 'album' ) {
          FlickrParsePhotoSets(albumIdx, sourceData);
        }
        else {
          FlickrParsePhotos(albumIdx, sourceData);
        }
        
        AlbumPostProcess(albumID);
        if( fnToCall !== null &&  fnToCall !== undefined) {
          fnToCall( fnParam1, fnParam2, null );
        }
      }
      
      // download one page of data (=500 entries)
      var FlickrGetOnePage = function( url, page ) {
        jQuery.getJSON(url+'&page='+page+'&jsoncallback=?', function(data, status, xhr) {

          var pages=0;
          if( kind == 'album' ) {
            if( data.stat !== undefined && data.stat === 'fail' ) {
              NanoAlert(G, "Could not retrieve Flickr album list: " + data.message + " (code: "+data.code+").");
              return false;
            }
            sourceData=sourceData.concat(data.photosets.photoset);
            pages=data.photosets.pages;
          }
          else {
            if( G.O.photoset.toUpperCase() == 'NONE' || G.O.album.toUpperCase() == 'NONE' ) {
              // content of full photoset
              sourceData=sourceData.concat(data.photos.photo);
              pages=data.photos.pages;
            }
            else {
              // content of one album
              if( data.stat !== undefined && data.stat === 'fail' ) {
                NanoAlert(G, "Could not retrieve Flickr album: " + data.message + " (code: "+data.code+").");
                return false;
              }
              if( G.I[albumIdx].title == '' ) {
                G.I[albumIdx].title=data.photoset.title;
              }
              sourceData=sourceData.concat(data.photoset.photo);
              pages=data.photoset.pages;
            }
            
          }
          
          if( pages > page ) {
            FlickrGetOnePage(url, page+1);
          }
          else {
            FlickrGetDone();
          }
        })
        .fail( function(jqxhr, textStatus, error) {
          clearTimeout(tId);
          PreloaderDisplay(false);
          NanoAlert(G, "Could not retrieve Flickr ajax data: " + textStatus + ', ' + error);
        });

      }
      
      FlickrGetOnePage(url, 1);
      
    }


    
    function FlickrParsePhotos( albumIdx, source ) {
      // var source = '';
      // if( G.O.photoset.toUpperCase() == 'NONE' || G.O.album.toUpperCase() == 'NONE' ) {
        // source = data.photos.photo;
      // }
      // else {
        // source = data.photoset.photo;
      // }

      var albumID=G.I[albumIdx].GetID();
      jQuery.each(source, function(i,item){
        //Get the title
        var itemTitle = item.title,
        itemID=item.id,
        itemDescription=item.description._content;    // Get the description
        
        var imgUrl=item.url_sq;  //fallback size
        for(var i=Flickr.photoSize; i>=0; i-- ) {
          if( item['url_'+Flickr.photoAvailableSizesStr[i]] != undefined ) {
            imgUrl=item['url_'+Flickr.photoAvailableSizesStr[i]];
            break;
          }
        }

        var sizes = {};
        for (var p in item) {
          if( p.indexOf('height_') == 0 || p.indexOf('width_') == 0 || p.indexOf('url_') == 0 ) {
            sizes[p]=item[p];
          }
        }
        
        if( G.O.thumbnailLabel.get('title') != '' ) {
          itemTitle=GetImageTitleFromURL(imgUrl);
        }

        var tags='';
        if( item.tags !== undefined ) {
          tags=item.tags;
        }

        // var newItem=NGAddItem(itemTitle, '', imgUrl, itemDescription, '', 'image', '', itemID, albumID );
        var newItem=NGY2Item.New( G, itemTitle, itemDescription, itemID, albumID, 'image', tags );
        newItem.src=imgUrl;
        if( item.url_o !== undefined ) {
          newItem.imageWidth=item.width_o;
          newItem.imageHeight=item.height_o;
        }
        else {
          newItem.imageWidth=item.width_z;
          newItem.imageHeight=item.height_z;
        }

        var tn = {
          url:    { l1 : { xs:'', sm:'', me:'', la:'', xl:'' }, lN : { xs:'', sm:'', me:'', la:'', xl:'' } },
          width:  { l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 } },
          height: { l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 } }
        };
        tn=FlickrRetrieveImages(tn, item, 'l1' );
        tn=FlickrRetrieveImages(tn, item, 'lN' );
        newItem.thumbs=tn;

      });
      G.I[albumIdx].contentIsLoaded=true;

    }    


    
    // -----------
    // Retrieve items from Flickr photosets
    // items can be images or albums
    function FlickrParsePhotoSets( albumIdx, source ) {
      var albumID=G.I[albumIdx].GetID();
      
      // var source = data.photosets.photoset;
      jQuery.each(source, function(i,item){
        //Get the title
        itemTitle = item.title._content;

        if( FilterAlbumName(itemTitle, item.id) ) {
          itemID=item.id;
          //Get the description
          itemDescription='';
          if (item.description._content != undefined) {
            itemDescription=item.description._content;
          }

          var sizes = {};
          for (var p in item.primary_photo_extras) {
            sizes[p]=item.primary_photo_extras[p];
          }
          tags='';
          if( item.primary_photo_extras !== undefined ) {
            if( item.primary_photo_extras.tags !== undefined ) {
              tags=item.primary_photo_extras.tags;
            }
          }
        
          var newItem=NGY2Item.New( G, itemTitle, itemDescription, itemID, albumID, 'album', tags );
          newItem.numberItems=item.photos;
          newItem.thumbSizes=sizes;
          
          var tn = {
            url:    { l1 : { xs:'', sm:'', me:'', la:'', xl:'' }, lN : { xs:'', sm:'', me:'', la:'', xl:'' } },
            width:  { l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 } },
            height: { l1 : { xs:0, sm:0, me:0, la:0, xl:0 }, lN : { xs:0, sm:0, me:0, la:0, xl:0 } }
          };
          tn=FlickrRetrieveImages(tn, item.primary_photo_extras, 'l1' );
          tn=FlickrRetrieveImages(tn, item.primary_photo_extras, 'lN' );
          newItem.thumbs=tn;
          
        }
      });
      
      G.I[albumIdx].contentIsLoaded=true;
    }

    function FlickrRetrieveImages(tn, item, level ) {

      var sf=1;
      if( G.tn.opt[level].crop === true ) {
        sf=G.O.thumbnailCropScaleFactor;
      }
    
    
      var sizes=['xs','sm','me','la','xl'];
      for(var i=0; i<sizes.length; i++ ) {
        if( G.tn.settings.width[level][sizes[i]] == 'auto' || G.tn.settings.width[level][sizes[i]] == '' ) {
          var sdir='height_';
          var tsize=Math.ceil(G.tn.settings.height[level][sizes[i]]*G.tn.scale*sf);
          var one=FlickrRetrieveOneImage(sdir, tsize, item );
          tn.url[level][sizes[i]]=one.url;
          tn.width[level][sizes[i]]=one.width;
          tn.height[level][sizes[i]]=one.height;
        }
        else 
          if( G.tn.settings.height[level][sizes[i]] == 'auto' || G.tn.settings.height[level][sizes[i]] == '' ) {
            var sdir='width_';
            var tsize=Math.ceil(G.tn.settings.width[level][sizes[i]]*G.tn.scale*sf);
            var one=FlickrRetrieveOneImage(sdir, tsize, item );
            tn.url[level][sizes[i]]=one.url;
            tn.width[level][sizes[i]]=one.width;
            tn.height[level][sizes[i]]=one.height;
          }
          else {
            var sdir='height_';
            var tsize=Math.ceil(G.tn.settings.height[level][sizes[i]]*G.tn.scale*sf);
            if( G.tn.settings.width[level][sizes[i]] > G.tn.settings.height[level][sizes[i]] ) {
              sdir='width_';
              tsize=Math.ceil(G.tn.settings.width[level][sizes[i]]*G.tn.scale*sf);
            }
            var one=FlickrRetrieveOneImage(sdir, tsize, item );
            tn.url[level][sizes[i]]=one.url;
            tn.width[level][sizes[i]]=one.width;
            tn.height[level][sizes[i]]=one.height;
          }
      }
      return tn;
    }
    
    function FlickrRetrieveOneImage(sdir, tsize, item ) {
      var one={ url: '', width: 0, height: 0 };
      var tnIndex=0;
      for(var j=0; j < Flickr.thumbAvailableSizes.length; j++ ) {
        var size=item[sdir+Flickr.photoAvailableSizesStr[j]];
        if( size != undefined ) {
          tnIndex=j;
          if( size >= tsize ) {
            break;
          }
        }
      }
      var fSize=Flickr.photoAvailableSizesStr[tnIndex];
      one.url= item['url_'+fSize];
      one.width= parseInt(item['width_'+fSize]);
      one.height=parseInt(item['height_'+fSize]);
      return one;
    }    

    
    /** @function GetHiddenAlbums */
    var GetHiddenAlbums = function( hiddenAlbums, callback ){
      // not supported -> doesn't exit in Flickr
      callback();     
    }

    // -----------
    // Initialize thumbnail sizes
    function Init() {
      return;
    }


    // shortcuts to NGY2Tools functions (with context)
    var PreloaderDisplay = NGY2Tools.PreloaderDisplay.bind(G);
    var NanoAlert = NGY2Tools.NanoAlert;
    var GetImageTitleFromURL = NGY2Tools.GetImageTitleFromURL.bind(G);
    var FilterAlbumName = NGY2Tools.FilterAlbumName.bind(G);
    var AlbumPostProcess = NGY2Tools.AlbumPostProcess.bind(G);

    // Flickr image sizes
    var sizeImageMax=Math.max(window.screen.width, window.screen.height);
    if( window.devicePixelRatio != undefined ) {
      if( window.devicePixelRatio > 1 ) {
        sizeImageMax=sizeImageMax*window.devicePixelRatio;
      }
    }
    if( !G.O.flickrSkipOriginal ) {
      Flickr.photoAvailableSizes.push(10000);
      Flickr.photoAvailableSizesStr.push('o');
    }
    for( i=0; i<Flickr.photoAvailableSizes.length; i++) {
      Flickr.photoSize=i; //Flickr.photoAvailableSizesStr[i];
      if( sizeImageMax <= Flickr.photoAvailableSizes[i] ) {
        break;
      }
    }

    switch( fnName ){
      case 'GetHiddenAlbums':
        var hiddenAlbums = arguments[2],
        callback = arguments[3];
        GetHiddenAlbums(hiddenAlbums, callback);
        break;
      case 'AlbumGetContent':
        var albumID = arguments[2],
        callback = arguments[3],
        cbParam1 = arguments[4],
        cbParam2 = arguments[5];
        AlbumGetContent(albumID, callback, cbParam1, cbParam2);
        break;
      case 'Init':
        Init();
        break;
      case '':
        break;
      case '':
        break;
    }

  };
  
// END FLICKR DATA SOURCE FOR NANOGALLERY2
}( jQuery ));
  
  
  
  
  