/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license

*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
;function enlarge_image(myimage, imgtitle)
{
	html = "<HTML><HEAD><TITLE>"+ imgtitle + "</TITLE>" 
			+ "</HEAD><BODY LEFTMARGIN=0 " 
			+ "MARGINWIDTH=0 TOPMARGIN=0 MARGINHEIGHT=0><CENTER>" 
			+ "<IMG SRC='" + myimage + "' BORDER=0 NAME=image " 
			+ "onload='window.resizeTo((document.image.width)+100,(document.image.height)+100)'>"
			+ "</CENTER>" 
			+ "</BODY></HTML>";
	popup = window.open ('','image',
						 'height=1, width=1, titlebar=0,status=0,toolbar=0,location=0,directories=0,menuBar=0,scrollbars=0,resizable=0');
	popup.document.open();
	popup.document.write(html);
	popup.document.focus();
	popup.document.close();
}

function get_window_width()
{
        var x = 0;
        if (self.innerHeight)
        {
                x = self.innerWidth;
        }
        else if (document.documentElement && document.documentElement.clientHeight)
        {
                x = document.documentElement.clientWidth;
        }
        else if (document.body)
        {
                x = document.body.clientWidth;
        }
        return x;
}

function get_window_height()
{
        var y = 0;
        if (document.body)
        {
                y = document.body.clientHeight;
        }
        else if (document.documentElement && document.documentElement.clientHeight)
        {
                y = document.documentElement.clientHeight;
        }
        else if (self.innerHeight)
        {
                y = self.innerHeight;
        }
        return y;
}
 
function __get_window_height()
{
        var y = 0;
        if (self.innerHeight)
        {
            y = self.innerHeight;
        }
        else if (document.documentElement && document.documentElement.offsetHeight)
        {
            y = document.documentElement.offsetHeight;
        }
        else if (document.body)
        {
            y = document.body.offsetHeight;
        }
        return y;
}

function get_pageScrollTop()
{
	switch(navigator.appName)
	{
	  case 'Microsoft Internet Explorer':
		// var myregex = /MSIE 7\.0/i;
		var myArray = navigator.appVersion.match(/MSIE ([\d.]+)/)[1];
		
		if (myArray.length > 0)
		{
			scrollY = document.documentElement.scrollTop;
		}
		else
		{
			scrollY = document.body.scrollTop;
		}
	  break;
	  default:
		scrollY = window.pageYOffset;
	}
	
	return scrollY;
}

/* xmlhttp object */
var page_request = false;
	
function ajax_request(url, async, event_name)
{
	if (typeof(async) == 'undefined')
	{
		async = false;
	}

	if (window.XMLHttpRequest) // if Mozilla, Safari etc
		page_request = new XMLHttpRequest()
	else if (window.ActiveXObject)
	{ // if IE
		try
		{
			page_request = new ActiveXObject("Msxml2.XMLHTTP");
		} 
		catch (e)
		{
			try
			{
				page_request = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) {}
		}
	}
	else
		return false
	
	if (async)
	{
		page_request.onreadystatechange = event_name;
	}
	
	page_request.open('GET', url, async);
	page_request.send(null);
	
	if (!async)
	{
		return page_request.responseText;
	}
}

function ajax_loader(url, div_id, loader_id)
{
	document.getElementById(loader_id).style.display = '';
	div_element = document.getElementById(div_id);
	
	if (div_element.innerHTML == '')
	{
		callback = function()
		{
			 if (page_request.readyState == 4)
			{
				div_element.innerHTML = page_request.responseText;
				document.getElementById(loader_id).style.display = 'none';
			}

		}
		
		ajax_request(url, true, callback);
	}
}

function bindGridRowAjaxLoader($linkEl, linkParamsObj, jsChartLink, campaignId, loadingImgUrl)
{
	var $thisTr 	   = $linkEl.closest('tr');
	var $ajaxLoadingTr = $thisTr.next('tr.ajax_loading_tr');

	if ($ajaxLoadingTr.length)
	{
		$ajaxLoadingTr.remove();
		return;
	}

	var gridDate = $linkEl.closest('.grid_table').data('todate');
	var dataKey  = $linkEl.data('row');
	var linkData = linkParamsObj[dataKey].split('_');

	var $loadingDiv = $('<div/>', {
		'class'  : 'ajax_loading',
		'style'  : 'padding:0; float:left;width:100%;'
	});
	
	$('<tr/>', {'class': 'ajax_loading_tr'}).append(
		$('<td/>', {'colspan': $thisTr.find('td').length})
			.append($('<div/>', {'class': 'ajax_loading_close'}).click(function(){$(this).closest('tr.ajax_loading_tr').remove();}))
			.append($loadingDiv.append('<div class="aj_con_ld_wrap"><img src="' + loadingImgUrl + '"/> <br />Loading</div>'))
	).insertAfter($thisTr);

	var url = jsChartLink + '&key_id=' + linkData[0] + '&url_id=' + linkData[1] + '&se_id=' + linkData[2] + '&cid=' + campaignId;
	$loadingDiv.load(url,
		{
			'to_date'   : gridDate,
			'flag'	    : 1,
			'hc_loaded' : (typeof Highcharts === 'undefined' ? 0 : 1)
		}
	);
}

function addRowAjaxRankChart($linkEl, linkParamsObj, jsChartLink, campaignId, loadingImgUrl)
{
	var gridDate = $linkEl.closest('.grid_table').data('todate');
	var dataKey  = $linkEl.data('row');
	var linkData = linkParamsObj[dataKey];

	var url = jsChartLink + '&key_id=' + linkData.key_id + '&url_id=' + linkData.url_id + '&se_id=' + linkData.se_id + '&cid=' + campaignId;
    var jsPost = {
			'to_date'   : gridDate,
			'flag'	    : 1,
			'hc_loaded' : (typeof Highcharts === 'undefined' ? 0 : 1)
    };

    gridAddAjaxRow($linkEl, url, jsPost, loadingImgUrl, 'rank_chart')
}

function gridAddAjaxRow($linkEl, jsChartLink, jsPost, loadingImgUrl, rowType)
{
    var $thisTr 	   = $linkEl.closest('tr');
    var $ajaxLoadingTr = $thisTr.next('tr.ajax_loading_tr');
    var addRow         = false;

    if ($ajaxLoadingTr.length)
    {
        if ($ajaxLoadingTr.data('row_type') == rowType)
        {
            $ajaxLoadingTr.remove();
            return;
        }
    }
    else
    {
        addRow = true;
    }

    var $loadingDiv = $('<div/>', {
        'class'  : 'ajax_loading',
        'style'  : 'padding:0; float:left;width:100%;'
    });

    if (addRow)
    {
        $ajaxLoadingTr = $('<tr/>', {'class': 'ajax_loading_tr', 'data-row_type': rowType}).append(
            $('<td/>', {'colspan': $thisTr.find('td').length})
        ).insertAfter($thisTr);
    }
    else
    {
        $ajaxLoadingTr.data('row_type', rowType);
    }

    $ajaxLoadingTr.children('td')
        .html('')
        .append($('<div/>', {'class': 'ajax_loading_close'}).click(function(){$(this).closest('tr.ajax_loading_tr').remove();}))
        .append($loadingDiv.append('<div class="aj_con_ld_wrap"><img src="' + loadingImgUrl + '"/> <br />Loading</div>'));

    $loadingDiv.load(jsChartLink, jsPost);
}

function slide_animate_to(ele)
{
	$("html, body").delay(200).animate({scrollTop: $(ele).offset().top}, 1000);
}

function input_focus(input_element)
{
	input_element = document.getElementById(input_element);
	input_element.focus();
}

String.prototype.trim = function()
{
	return this.replace(/^\s+|\s+$/g,"");
}
String.prototype.ltrim = function()
{
	return this.replace(/^\s+/,"");
}
String.prototype.rtrim = function()
{
	return this.replace(/\s+$/,"");
}

function isNumeric(input)
{
	return (input - 0) == input && input.length > 0;
}

function var_dump(obj) {
   if(typeof obj == "object") {
      return "Type: "+typeof(obj)+((obj.constructor) ? "\nConstructor: "+obj.constructor : "")+"\nValue: " + obj;
   } else {
      return "Type: "+typeof(obj)+"\nValue: "+obj;
   }
}

function display_element(element_id, inner_html)
{
	var element		= document.getElementById(element_id);
	
	if (element)
	{
		var obj_element = element.style;
		var obj_html	= document.getElementById(inner_html);
		if (obj_element.display != "none" )
		{
			obj_element.display = "none";
			if (typeof(inner_html) != 'undefined')
			{
				obj_html.innerHTML = '<img src="/www-img/web/mygui/folder_close.gif" align="absmiddle">';
			}
		}
		else
		{
			obj_element.display = "";
			if (typeof(inner_html) != 'undefined')
			{
				obj_html.innerHTML = '<img src="/www-img/web/mygui/folder_open.gif" align="absmiddle">';
			}
		}	 
	}
}

function display_element_force(element_id, status) 
{
	var obj_element = document.getElementById(element_id).style;
	
	if (status == true)
	{
		obj_element.display = "none";
	}
	else
	{
		obj_element.display = "";
	}	 
}

function swap_images(element_id, img1, img2)
{
	var obj_element = document.getElementById(element_id);
	if (obj_element.src == img1)
	{
		obj_element.src = img2;
	}
	else
	{
		obj_element.src = img1;
	}	 
}

function swap_hd1(obj_element, element_img)
{
	file_type = 'jpg';
	
	if (element_img == 'hd1_facebook')
	{
		file_type = 'png';
	}
	
	img1 = '/www-img/web/home_design/'+element_img+'.'+file_type;
	img2 = '/www-img/web/home_design/'+element_img+'_on.'+file_type;
	if (obj_element.src == img1)
	{
		obj_element.src = img2;
	}
	else
	{
		obj_element.src = img1;
	}	 
}

function setCookie(c_name,value)
{
	var expiredays = 30;
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+
	((expiredays==null) ? "" : ";expires="+exdate.toUTCString());
}

function getCookie(c_name)
{
	if (document.cookie.length>0)
	  {
	  c_start=document.cookie.indexOf(c_name + "=");
	  if (c_start!=-1)
		{
		c_start=c_start + c_name.length+1;
		c_end=document.cookie.indexOf(";",c_start);
		if (c_end==-1) c_end=document.cookie.length;
		return unescape(document.cookie.substring(c_start,c_end));
		}
	  }
	return "";
}

/* Form functions */
function appendFormData(formId, fieldName, toForm)
{
	if ( $('#'+formId).length > 0)
	{
		var data = $('#'+formId + ' input, #'+formId + ' select').serialize();
		$(toForm).append('<input type="hidden" name="' + fieldName + '" value="' + data + '">');
	}
}

function addToCustomReport(id, report_num)
{
	var myForm			= document.getElementById('DetailsForm');
	var defaultAction	= myForm.action;
	
	appendFormData('webside_keyword_list', 'seriesForm', myForm);

	$(myForm).append('<input type="hidden" name="from_report" value="1">');
	$(myForm).append('<input type="hidden" name="report_number" value="' + report_num + '">');
	
	if (id)
	{
		myForm.action = '/?p=rank-pdf_report_settings&custom_id='+id;
	}
	else
	{
		myForm.action = '/?p=rank-pdf_report_settings';
	}
	myForm.target = '_blank';
	myForm.submit();
	myForm.action = defaultAction;
	myForm.target = '_self';
	$("#custom_reports_div").dialog('close');
}

function openPresetDialog()
{
    var $inp_preset_name = $('#inp_preset_name');
    $inp_preset_name.val('');
	$('#preset_exists_err').hide();
	$('#preset_override_err').hide();
	$('#preset_noname_err').hide();
    $('#new_preset_dialog').dialog('open');
    $inp_preset_name.focus();
}

function savePreset()
{
    var presetName 		= $('#inp_preset_name').val();
	var presetNameL		= presetName.toLowerCase();
	var isGlobalPreset  = $('#inp_is_global_preset').is(':checked');


    if (!presetName)
    {
        $('#preset_noname_err').show();
    }
    else if ($.inArray(presetNameL, allPresets) > -1)
    {
		if (is_subuser)
		{
			if ($.inArray(presetNameL, privatePresets) > -1)
			{
				triggerSaveAs(presetNameL);
			}
			else
			{
				 $('#preset_exists_err').show();
			}
		}
		else
		{
			triggerSaveAs(presetNameL);
		}
    }
    else
    {
    	var $detailsForm = $('#DetailsForm');

        $('<input/>', {name: "to_presets", type: "hidden", value: presetName})
			.appendTo($detailsForm);
        $('<input/>', {name: "is_global_preset", type: "hidden", value: (isGlobalPreset ? 1 : 0)})
			.appendTo($detailsForm);

        if (isGlobalPreset)
		{
			$('<input/>', {name: "preset_inc_tags", type: "hidden", value: ($("#inp_global_preset_tags input").is(':checked') ? 1 : 0)})
				.appendTo($detailsForm);
		}

        FormSubmit('DetailsForm', '_self');
    }
}

function triggerSaveAs(presetNameL)
{
	$('.preset_div').each(function(){
		var saveIcon = $(this).find('img.ico_save');
		
		if (saveIcon.length && saveIcon.data('pname') == presetNameL)
		{
			saveIcon.trigger("click");
			return;
		}
	});
}

function savePresetAs(presetId)
{
	$('<input/>', {name: "to_preset_id", type: "hidden", value: presetId}).appendTo('#DetailsForm');
    FormSubmit('DetailsForm', '_self');
}

function loadPreset(presest_name)
{
    $('<input/>',{name:"preset", type: "hidden", value: presest_name}).appendTo('#DetailsForm');
    FormSubmit('DetailsForm', '_self');
}

function delPresetDialog(el, presetId, presetName)
{
    $('#del_preset_name').html(presetName);
    var $dialogDiv = $('#delete_preset_dialog');
    $dialogDiv.dialog({
        buttons: {
            "Cancel": function(){$(this).dialog( "close" );},
            "Delete": function(){deletePreset(el, presetId); $(this).dialog( "close" );}}
    });
    $dialogDiv.dialog('open');
}
function deletePreset(el, presetId)
{
    $.post('/?p=ajax-edit_preset&action=del', {preset_id: presetId});

    var $el         = $(el);
    var $presetDiv  = $el.closest('.preset_div');

    if ($presetDiv.length)
    {
        $presetDiv.next('br').remove();
        $presetDiv.remove();
    }
    else
    {
        $el.closest('tr').remove();
    }
}

function favReportsMenu(favReports) {
    var $favIconOnOff;
    var $favReportsList;
    var $favReportsWrapper;
    var selfLastUpdTime;

    function init() {
        initVars();
        initDomEvents();

        updGlobFavList();
        buildFavMenu();
    }

    function initVars()
    {
        selfLastUpdTime = new Date();
        initDomVars();
    }

    function initDomVars()
    {
        $favIconOnOff       = $('#icon_fav_img_on_off');
        $favReportsList     = $('#fav_reports_list');
        $favReportsWrapper  = $('#fav_reports_list_wrapper');
    }

    function initDomEvents()
    {
        $('.fav_report_del').click(function () {
            var $this = $(this);
            removeFromFavourites($this.data('rep'));
        });
        $favIconOnOff.click(function(){
            var $this  = $(this);
            if ($this.hasClass('off'))
            {
                addToFavourites($this.data('rep'));
            }
            else
            {
                removeFromFavourites($this.data('rep'));
            }
        });

        $('div.rr-favourite-menu').hover(function(){refreshFavReports(true);});
    }

    function updGlobFavList()
    {
        selfLastUpdTime = new Date();

        var lsFavReports = {
            'lastUpdTime': selfLastUpdTime,
            'reports': favReports
        };

        localStorage.setItem('favReports', JSON.stringify(lsFavReports));
        switchFavIconOnOff();
    }

    function refreshFavReports(rebuild)
    {
        var lsFavReports = JSON.parse(localStorage.getItem('favReports'));
        var lastUpdTime  = new Date(lsFavReports.lastUpdTime);

        if (lastUpdTime > selfLastUpdTime)
        {
            selfLastUpdTime = lastUpdTime;
            favReports      = lsFavReports.reports;

            if (rebuild)
            {
                buildFavMenu();
            }
        }

        switchFavIconOnOff();
    }

    function buildFavMenu()
    {
        $favReportsList.html('');

        var $sampleFavDiv = $('#sample_fav_report_div')
            .clone()
            .attr('id', '');

        $.each(favReports, function(i, favReport){
            $sampleFavDiv = $sampleFavDiv.clone();
            $sampleFavDiv.find('img.fav_report_del')
                .data('rep', favReport.id)
                .click(function(){
                    removeFromFavourites(favReport.id);
                });
            $sampleFavDiv.find('a')
                .attr('href', favReport.url)
                .tooltipster({
                    theme: 'tooltipster-light', maxWidth: 300,
                    contentAsHTML: true, interactive: true,
                    onlyOne: true, delay: 0, position: 'left',
                    content: 'Go to: <b>' + favReport.title + '</b>'
                })
                .html(favReport.title);

            $sampleFavDiv.appendTo($favReportsList).show();
        });

        $favReportsList.sortable({"update": sortUpdateFavReports});
    }

    function addToFavourites(repNum)
    {
        refreshFavReports(false);
        var reportKey = 'r' + repNum;

        if (favReports[reportKey] !== undefined)
        {
            buildFavMenu();
            return;
        }

        $.ajax({
            url     : '/?p=ajax-fav_reports',
            data    : {'flag': 'add', 'rep': repNum},
            dataType: 'json',
            success : function (data) {
                if (data.status === 'added')
                {
                    favReports[reportKey] = {
                        "url": data.url,
                        "title": data.title
                    };

                    updGlobFavList();
                    buildFavMenu();
                }
            }
        });
    }

    function removeFromFavourites(repNum)
    {
        refreshFavReports(false);

        if (favReports['r' + repNum] === undefined)
        {
            buildFavMenu();
            return;
        }

        $.ajax({
            url     : '/?p=ajax-fav_reports',
            data    : {'flag': 'remove', 'rep': repNum},
            dataType: 'json',
            success : function (data) {
                if (data.status === 'removed')
                {
                    delete favReports['r' + repNum];

                    updGlobFavList();
                    buildFavMenu();
                }
            }
        });
    }

    function switchFavIconOnOff()
    {
        var curRep = $favIconOnOff.data('rep');

        if (favReports['r' + curRep] === undefined)
        {
            $favIconOnOff.removeClass('on');
            $favIconOnOff.addClass('off');
        }
        else
        {
            $favIconOnOff.addClass('on');
            $favIconOnOff.removeClass('off');
        }
    }

    function sortUpdateFavReports(e, ui)
    {
        var newOrder      = [];
        var newFavReports = {};

        $.each($favReportsList.find('.preset_div'), function (i) {
            var repNum = $(this).find('img.fav_report_del').data('rep');
            newOrder.push(repNum);

            var repKey = 'r' + repNum;

            if (favReports[repKey] !== undefined)
            {
                newFavReports[repKey] = favReports[repKey];
            }
        });

        $.ajax({
            url     : '/?p=ajax-fav_reports',
            data    : {'flag': 'sort', 'rep_arr': newOrder},
            dataType: 'json',
            success : function (data) {
                if (data.status === 'sorted') {
                    favReports = newFavReports;
                    updGlobFavList();
                }
            }
        });
    }

    init();
}

function dateTrigger()
{
	//$('#DetailsForm').append('<input type="hidden" name="date_triggered" value="1">');
}

function FormSubmit(form_id, target)
{
	var myForm = document.getElementById(form_id);
	var dateForm = document.getElementById('DateForm');
	
	appendFormData('webside_keyword_list', 'seriesForm', myForm);

	submitCustomFields();
	
	if (typeof(target) == 'undefined')
	{
		target = '_self';
	}
	myForm.target = target;
	
	if (dateForm)
	{
		if (typeof(dateForm.from_date) != 'undefined')
		{
			myForm.from_date.value = dateForm.from_date.value;
		}
		if (typeof(dateForm.to_date) != 'undefined')
		{
			myForm.to_date.value 	 = dateForm.to_date.value;
		}
	}
	
	var loaderPopup = $('#loader_popup');
	
	if (loaderPopup.length)
	{
		$('#loader_popup').msgWindow('show');
	}
	
	$(".inp_placeholder").each(function() {
		var $this = $(this);
		if ($this.attr('data-ved') == $this.val()) {
			$this.val('');
		}
	});
	
	myForm.submit();
	myForm.target = '_self';
}

function FormSortSubmit(form_id, sort_by_value, sort_type_value, target)
{ 
	var myForm = document.getElementById(form_id);

    submitCustomFields();

	if (typeof(target) != 'undefined')
	{
		myForm.target 	 = target;
	}
	
	myForm.sort_by.value   = sort_by_value;
	myForm.sort_type.value = sort_type_value;
	
	myForm.submit();
	myForm.target = '_self';
}

function FormPageSubmit(form_id, page_num)
{ 
	var myForm = document.getElementById(form_id);

    submitCustomFields();

	myForm.action = myForm.action + '&page=' + page_num;
	myForm.submit();
}

function FormPageAction(form_id, action_name, export_value, target)
{ 
	var myForm = document.getElementById(form_id);
	original_action = myForm.action;
	original_target = myForm.target;
	
	appendFormData('webside_keyword_list', 'seriesForm', myForm);
	submitCustomFields();
//	appendFormData('graph_settings', 'graphSettings', myForm);
	
	if (typeof(target) != 'undefined')
	{
		myForm.target = target;
	}

    var input   = document.createElement("input");
    input.type  = "hidden";
    input.name  = 't';
    input.value = export_value;

    myForm.appendChild(input);
	myForm.action  = action_name; // + '&t=' + export_value;
	myForm.export_type.value = export_value;
	myForm.submit();
	myForm.action  = original_action;
	myForm.target  = original_target;
}

function FormPresetSubmit(formPreset, formValues)
{
    var $btn = $(this);

    formPreset = (formPreset ? formPreset : $btn.data('form_preset'));
    formValues = (formValues ? JSON.stringify(formValues) : $btn.data('form_values'));

    if (formPreset)
    {
        $('#overwrite_ro_view_set').val(formPreset);
    }
    
    if (formValues)
    {
        $('#overwrite_ro_view_values').val(formValues);
    }

    FormSubmit('DetailsForm', '_self');
}

function switch_report_lang(varLang)
{
	document.getElementById('DetailsForm').action = document.getElementById('DetailsForm').action + '&lng=' + varLang;
	FormSubmit('DetailsForm', '_self');
}

/* fade functions */
var _fade_duration = 400;  /* 1000 millisecond fade = 1 sec */
var _fade_steps = 20;       /* number of opacity intervals   */
var _fade_delay = 500;     /* 5 sec delay before fading out */

function fadeIn(element_name)
{
	for (i = 0; i <= 1; i += (1 / _fade_steps))
	{
		setTimeout("setOpacity('" + element_name + "', " + i + ")", i * _fade_duration);
	}
}

function fadeOut(element_name)
{
	for (i = 0; i <= 1; i += (1 / _fade_steps))
	{
		setTimeout("setOpacity('" + element_name + "', " + (1 - i) + ")", i * _fade_duration);
	}
}

/* set the opacity of the element (between 0.0 and 1.0) */
function setOpacity(element_name, level)
{
	element = document.getElementById(element_name);
	element.style.opacity = level;
	element.style.MozOpacity = level;
	element.style.KhtmlOpacity = level;
	element.style.filter = "alpha(opacity=" + (level * 100) + ");";
}

/* Grid sorter */
var TINY={};

function T$(i){return document.getElementById(i)}
function T$$(e,p){return p.getElementsByTagName(e)}

TINY.table=function(){
	function sorter(n,t,p){this.n=n; this.id=t; this.p=p; if(this.p.init){this.init()}}
	sorter.prototype.init=function(){
		this.set(); var t=this.t, i=d=0; t.h=T$$('tr',t)[0];
		this.totalsRow;
		t.l=t.r.length; t.w=t.r[0].cells.length; t.a=[]; t.c=[]; this.p.is=this.p.size;
		if(this.p.colddid){
			d=T$(this.p.colddid);
			var o=document.createElement('option'); o.value=-1; o.innerHTML='All Columns'; d.appendChild(o)
		}
		for(i;i<t.w;i++){
			var c=t.h.cells[i]; t.c[i]={};
			if(c.className.indexOf('nosort') == -1){
				c.className=c.className.replace(/head|asc|desc|\s{2,}/gi,"") + ' ' + this.p.headclass; c.onclick=new Function(this.n+'.sort('+i+')');
				c.onmousedown=function(){return false};
			}
			if(this.p.columns){
				var l=this.p.columns.length, x=0;
				for(x;x<l;x++){
					if(this.p.columns[x].index==i){
						var g=this.p.columns[x];
						t.c[i].format=g.format==null?1:g.format; t.c[i].decimals=g.decimals==null?2:g.decimals
					}
				}
			}
			if(d){
				var o=document.createElement('option'); o.value=i; o.innerHTML=T$$('h3',c)[0].innerHTML; d.appendChild(o)
			}
		}
		this.reset()
	};
	sorter.prototype.reset=function(){
		var t=this.t; t.t=t.l;
		for(var i=0;i<t.l;i++){if(t.r[i].className.indexOf('totals_nosort') > -1){continue;} t.a[i]={}; t.a[i].s=1}
		if(this.p.sortcolumn!=undefined){
			this.sort(this.p.sortcolumn,1,this.p.is)
		}else{
			if(this.p.paginate){this.size()} this.alt(); this.sethover()
		}
		this.calc()
	};
	sorter.prototype.sort=function(x,f,z){
		var ajaxTrs = this.t.getElementsByClassName('ajax_loading_tr');
		while(ajaxTrs[0]){ajaxTrs[0].parentNode.removeChild(ajaxTrs[0]);}

		var t=this.t; t.y=x; var x=t.h.cells[t.y], i=0, n=document.createElement('tbody');
		this.totalsRow = false;

		for(i;i<t.l;i++){
			if(!this.totalsRow && t.r[i].className.indexOf('totals_nosort') > -1){
				this.totalsRow = t.r[i];
				t.r[i].style.display='';
				continue;
			}
			t.a[i].o=i; var v=t.r[i].cells[t.y]; t.r[i].style.display='';
			while(v.hasChildNodes()){v=v.firstChild}
			t.a[i].v=v.nodeValue?v.nodeValue:''
		}
		for(i=0;i<t.w;i++){
			var c=t.h.cells[i];
			if(c.className.indexOf('nosort') == -1){
				c.className=c.className.replace(/head|asc|desc|\s{2,}/gi,"") + ' ' + this.p.headclass
			}
		}
		if(t.p==t.y&&!f){
			t.a.reverse(); 
			if(t.d == 0)
			{
				x.className = x.className.replace(/head|asc|desc|\s{2,}/gi,"") + ' ' + this.p.ascclass;
			}
			else
			{
				x.className = x.className.replace(/head|asc|desc|\s{2,}/gi,"") + ' ' + this.p.descclass; 
			}
			t.d=1-t.d;
		}
		else{
			t.p=t.y; f&&this.p.sortdir==-1?t.a.sort(cp).reverse():t.a.sort(cp); t.d=this.p.sortdir==1?1:0;
			this.p.sortdir==1 ? x.className=x.className.replace(/head|asc|desc|\s{2,}/gi,"") + ' ' + this.p.ascclass:x.className=x.className.replace(/head|asc|desc|\s{2,}/gi,"") + ' ' + this.p.descclass}
		if (this.totalsRow){t.a[t.l-1] = {o: t.l-1, s:1}}
		for(i=0;i<t.l;i++){	var r=$(t.r[t.a[i].o]).clone(true, true); n.appendChild(r[0]);}
		t.replaceChild(n,t.b); this.set(); this.alt(); if(this.p.paginate){this.size(z)} this.sethover();
		if (this.totalsRow){t.a.pop();}
	};
	sorter.prototype.sethover=function(){
		if(this.p.hoverid){
			for(var i=0;i<this.t.l;i++){
				var r=this.t.r[i];
				r.setAttribute('onmouseover',this.n+'.hover('+i+',1)');
				r.setAttribute('onmouseout',this.n+'.hover('+i+',0)')
			}
		}
	};
	sorter.prototype.calc=function(){
		if(this.p.sum||this.p.avg){
			var t=this.t, i=x=0, f,r;
			if(!T$$('tfoot',t)[0]){
				f=document.createElement('tfoot'); t.appendChild(f)
			}else{
				f=T$$('tfoot',t)[0]; while(f.hasChildNodes()){f.removeChild(f.firstChild)}
			}
			if(this.p.sum){
				r=this.newrow(f);
				for(i;i<t.w;i++){
					var j=r.cells[i];
					if(Arrayexists(i, this.p.sum)){
						var s=0, m=t.c[i].format||'';
						for(x=0;x<this.t.l;x++){
							if(t.a[x].s){s+=parseFloat(t.r[x].cells[i].innerHTML.replace(/(\$|\,)/g,''))}
						}
						s=decimals(s,t.c[i].decimals?t.c[i].decimals:2);
						s=isNaN(s)?'n/a':m=='$'?s=s.currency(t.c[i].decimals):s+m;
						r.cells[i].innerHTML=s
					}else{r.cells[i].innerHTML='&nbsp;'}
				}
			}
			if(this.p.avg){
				r=this.newrow(f);
				for(i=0;i<t.w;i++){
					var j=r.cells[i];
					if(Arrayexists(i, this.p.avg)){
						var s=c=0, m=t.c[i].format||'';
						for(x=0;x<this.t.l;x++){
							if(t.a[x].s){s+=parseFloat(t.r[x].cells[i].innerHTML.replace(/(\$|\,)/g,'')); c++}
						}
						s=decimals(s/c,t.c[i].decimals?t.c[i].decimals:2);
						s=isNaN(s)?'n/a':m=='$'?s=s.currency(t.c[i].decimals):s+m;
						j.innerHTML=s
					}else{j.innerHTML='&nbsp;'}
				}
			}
		}
	};
	sorter.prototype.newrow=function(p){
		var r=document.createElement('tr'), i=0; p.appendChild(r);
		for(i;i<this.t.w;i++){r.appendChild(document.createElement('td'))}
		return r
	};
	sorter.prototype.alt=function(){
		var t=this.t, i=x=0;
		for(i;i<t.l;i++){
			var r=t.r[i];
			if(t.a[i].s){
				var orig_row_class	= r.className;
				orig_row_class		= orig_row_class.replace(this.p.evenselclass, '');
				orig_row_class		= orig_row_class.replace(this.p.oddselclass, '');
				orig_row_class		= orig_row_class.replace(this.p.evenclass, '');
				orig_row_class		= orig_row_class.replace(this.p.oddclass, '');
				orig_row_class		= orig_row_class.replace(/ +(?= )/g, '');
				
				r.className=x%2==0? orig_row_class + this.p.evenclass : orig_row_class + this.p.oddclass;
				var cells=T$$('td',r);
				for(var z=0;z<t.w;z++){ 
					var orig_class= cells[z].className;
					orig_class = orig_class.replace(this.p.evenselclass,'');
					orig_class = orig_class.replace(this.p.oddselclass,'');
					orig_class = orig_class.replace(/ +(?= )/g,'');

					cells[z].className=t.y==z?x%2==0?this.p.evenselclass+' '+orig_class :this.p.oddselclass+' '+orig_class:orig_class}
				x++
			}
			if(!t.a[i].s){r.style.display='none'}
		}
	};
	sorter.prototype.page=function(s){
		var t=this.t, i=x=0, l=s+parseInt(this.p.size);
		if(this.p.totalrecid){T$(this.p.totalrecid).innerHTML=t.t}
		if(this.p.currentid){T$(this.p.currentid).innerHTML=this.g}
		if(this.p.startingrecid){
			var b=((this.g-1)*this.p.size)+1, m=b+(this.p.size-1); m=m<t.l?m:t.t; m=m<t.t?m:t.t;
			T$(this.p.startingrecid).innerHTML=t.t==0?0:b;; T$(this.p.endingrecid).innerHTML=m
		}
		for(i;i<t.l;i++){var r=t.r[i]; if(t.a[i].s){r.style.display=x>=s&&x<l?'':'none'; x++}else{r.style.display='none'}}
	};
	sorter.prototype.move=function(d,m){
		this.goto(d==1?(m?this.d:this.g+1):(m?1:this.g-1))
	};
	sorter.prototype.goto=function(s){
		if(s<=this.d&&s>0){this.g=s; this.page((s-1)*this.p.size)}
	};
	sorter.prototype.size=function(s){
		var t=this.t;
		if(s){this.p.size=s}
		this.g=1; this.d=Math.ceil(this.t.t/this.p.size);
		if(this.p.navid){T$(this.p.navid).style.display=this.d<2?'none':'block'}
		this.page(0);
		if(this.p.totalid){T$(this.p.totalid).innerHTML=t.t==0?1:this.d}
		if(this.p.pageddid){
			var d=T$(this.p.pageddid), l=this.d+1;
			d.setAttribute('onchange',this.n+'.goto(this.value)');
			while(d.hasChildNodes()){d.removeChild(d.firstChild)}
			for(var i=1;i<=this.d;i++){
				var o=document.createElement('option');
				o.value=i; o.innerHTML=i; d.appendChild(o)
			}
		}
	};
	sorter.prototype.showall=function(){
		this.size(this.t.t)
	};
	sorter.prototype.search=function(f){
		var i=x=n=0, k=-1, q=T$(f).value.toLowerCase();
		if(this.p.colddid){k=T$(this.p.colddid).value}
		var s=(k==-1)?0:k, e=(k==-1)?this.t.w:parseInt(s)+1;
		for(i;i<this.t.l;i++){
			var r=this.t.r[i], v;
			if(q==''){
				v=1
			}else{
				for(x=s;x<e;x++){
					var b=r.cells[x].innerHTML.toLowerCase();
					if(b.indexOf(q)==-1){v=0}else{v=1; break}
				}
			}
			if(v){n++}
			this.t.a[i].s=v
		}
		this.t.t=n;
		if(this.p.paginate){this.size()}
		this.calc(); this.alt()
	};
    sorter.prototype.searchColumn = function(tblId){
        var i=j=n=0, k = -1;

        if(this.p.colddid){k=T$(this.p.colddid).value}
        var s = (k == -1) ? 0 : k, e = (k == -1) ? this.t.w : parseInt(s) + 1;

        var filters_array = [];
        for (i; i < e; i++) {
            if (T$(tblId + '_' + i)) {
                filters_array[i] = {};
                elem = T$(tblId + '_' + i);

                var filter_val = elem.textContent;

                var classList = $(elem).siblings().find('.comparator')[0].className.split(' ');
                filters_array[i].f_type = classList[1];
                filters_array[i].f_comp = classList[2];

                filter_val = filter_val.toLowerCase();
                if (classList[1] == 'type_numeric') {
                    filter  = parseFloat(filter_val.toString().replace(/,/g, ''), 10);
                }
                else if (classList[1] == 'type_string') {
                    filter = filter_val.replace('&nbsp;', ' ');
                }
                filters_array[i].f_val = filter_val;
            }
        }

        i = 0;
        for (i; i < this.t.l; i++) {
            var r = this.t.r[i];
            for (j = s; j < e; j++) {
                var v = 1, q = '', c = '', t = '';
                if (filters_array[j]) {
                    q = filters_array[j].f_val;
                    c = filters_array[j].f_comp;
                    t = filters_array[j].f_type;
                }

                if (q !== '') {
//                    var b = r.cells[j].innerHTML.toLowerCase();
                    var b = r.cells[j].textContent.toLowerCase();
                    if (compare(b, q, c, t) == -1) {
                        v = 0;
                        break;
                    }
                }
            }
            if(v){n++}
            this.t.a[i].s=v
        }

        this.t.t=n;
        if(this.p.paginate){this.size()}
        this.calc();
        this.alt()
    };

    function compare(td, filter, comp, type) {
        if (type == 'type_numeric') {
            td = parseFloat(td.toString().replace(/,/g, ''), 10);
        }
		else
		{
			if (comp == 'icon_regex')
			{
				var regExp;
				try
				{
					regExp = new RegExp(filter);
				}
				catch(e)
				{
					regExp = new RegExp('');
				}
			}
		}

        switch (comp) {
            case 'icon_equals':
                return (td == filter ? 1 : -1);
                break;
            case 'icon_not_equals':
                return (td != filter ? 1 : -1);
                break;
            case 'icon_less':
                return (td < filter ? 1 : -1);
                break;
            case 'icon_greater':
                return (td > filter ? 1 : -1);
                break;
            case 'icon_less_equals':
                return (td <= filter ? 1 : -1);
                break;
            case 'icon_greater_equals':
                return (td >= filter ? 1 : -1);
                break;
            case 'icon_contains':
                return (td.indexOf(filter) == -1 ? -1 : 1);
                break;
            case 'icon_not_contains':
                return (td.indexOf(filter) == -1 ? 1 : -1);
                break;
			case 'icon_regex':
				return (regExp.exec(td) ? 1 : -1);
				break;
            case 'icon_starts':
                return (td.substring(0, filter.length) === filter ? 1 : -1);
                break;
            case 'icon_ends':
                return (td.substring(td.length - filter.length) === filter ? 1 : -1);
                break;
        }
        return false;
    }

	sorter.prototype.hover=function(i,d){
		this.t.r[i].id=d?this.p.hoverid:''
	};
	sorter.prototype.set=function(){
		var t=T$(this.id); t.b=T$$('tbody',t)[0]; t.r=t.b.rows; this.t=t
	};
	// Array.prototype.exists=function(v){
		// for(var i=0;i<this.length;i++){if(this[i]==v){return 1}} return 0
	// };
	Arrayexists=function(v, array1){
		for(var i=0;i<array1.length;i++){if(array1[i]==v){return 1}} return 0
	};
	Number.prototype.currency=function(c){
		var n=this, d=n.toFixed(c).split('.');
		d[0]=d[0].split('').reverse().join('').replace(/(\d{3})(?=\d)/g,'$1,').split('').reverse().join('');
		return '$'+d.join('.')
	};
	function decimals(n,d){return Math.round(n*Math.pow(10,d))/Math.pow(10,d)};
	function cp(f,c){
		var g,h; f=g=f.v.toLowerCase(); c=h=c.v.toLowerCase();
		var i=parseFloat(f.replace(/(\$|\,)/g,'')), n=parseFloat(c.replace(/(\$|\,)/g,''));
		if(!isNaN(i)&&!isNaN(n)){g=i; h=n; return g>h?1:(g<h?-1:0)}
		i=Date.parse(f); n=Date.parse(c);
		if(!isNaN(i)&&!isNaN(n)){g=i; h=n}
		return g>h?1:(g<h?-1:0)
	};
	return{sorter:sorter}
}();

/* dropdown hover */
function rr_do_hover(div_name)
{
    var $thisDiv     = $("div." + div_name);
    var $thisDivOpts = $thisDiv.find("div.rr-tool-options");
    $thisDiv.find(".rr-btn-base, .wizn_nextstep_btn").click(function(){$thisDiv.find("div.rr-tool-options").toggle();});

    $thisDiv.hover(function(){
		$('div.rr-tool-options').hide();
        $thisDivOpts.show(); //or use fade in
	}, function(){
		var t=setTimeout(function(){$thisDivOpts.hide();},400); //or use fade out
	});
    $thisDivOpts.hide();
}

/* slide functions */
function doSlide(id)
{
	timeToSlide = 50; // in milliseconds
	obj = document.getElementById(id);
	if(obj.style.display == "none")
	{
		// if it's allready hidden we slide it down
		obj.style.visibility = "hidden";
		obj.style.display = "block";
		height = obj.offsetHeight;
		obj.style.height="0px";
		obj.style.visibility = "visible";
		slideDown(obj,0,height,Math.ceil(height/timeToSlide));
	}
	else
	{
		slideUp(obj,Math.ceil(obj.offsetHeight/timeToSlide),obj.offsetHeight);
	}
}

function slideDown(obj,offset,full,px)
{
	if(offset < full)
	{
		obj.style.height = offset+"px";
		offset=offset+px;
		setTimeout((function(){slideDown(obj,offset,full,px);}),1);
	}
	else
	{
		obj.style.height = full+"px"; //If the data inside is updated on runtime you can use auto instead...
	}
}

function slideUp(obj,px,full)
{
    var newHeight = obj.style.height.substring(0, obj.style.height.length-2)-px;
	if(newHeight > 0)
	{
		obj.style.height = newHeight+"px";
		setTimeout((function(){slideUp(obj,px,full);}),1);
	}
	else
	{
		obj.style.height=full+"px"; // we reset the height if we were to slide it back down
		obj.style.display = 'none';
	}
}

/*
 * Radio on/off jquery buttons
 **/
function load_radio_buttons_jq()
{
	$(document).ready(function(){

		$('.switch').each(function() {

			if (this.switch_applied !== undefined)
			{
				return;
			}

			this.switch_applied = true;

			var radio_yes 	= $(this).children('input[type=radio][value=1]')[0];
			var toggle 		= $(this).children('label.switch-toggle');
			var showElement = toggle.data('show_ele');
			var showElRvrs  = toggle.data('show_ele_rvrs');
			if (radio_yes)
			{
				toggle.removeClass('hidden');

				if (radio_yes.checked)
				{
					toggle.addClass('on').removeClass('off').text(toggle.attr('data-on'));
                    (showElRvrs ? $(showElement).addClass('hidden') : $(showElement).removeClass('hidden'));
				}
				else
				{
					toggle.addClass('off').removeClass('on').text(toggle.attr('data-off'));
                    (showElRvrs ? $(showElement).removeClass('hidden') : $(showElement).addClass('hidden'));
				}
			}

			toggle.click(function(){
				var radio_yes	= $(this).siblings('input[type=radio][value=1]')[0];
				var radio_no	= $(this).siblings('input[type=radio][value=0]')[0];
				var toggle		= $(this);
				var showElement = toggle.data('show_ele');
				if (radio_yes.checked)
				{
					toggle.addClass('off').removeClass('on').text(toggle.attr('data-off'));
					radio_yes.checked	= false;
					$(radio_yes).attr('checked', false);
					radio_no.checked	= true;
					$(radio_no).attr('checked', true);
                   (showElRvrs ? $(showElement).show() : $(showElement).hide());
				}
				else
				{
					toggle.addClass('on').removeClass('off').text(toggle.attr('data-on'));
					radio_yes.checked	= true;
					$(radio_yes).attr('checked', true);
					radio_no.checked	= false;
					$(radio_no).attr('checked', false);
					$(showElement).removeClass('hidden');
                    (showElRvrs ? $(showElement).hide() : $(showElement).show());
				}
			});
		});
	});
}

function radioButtonSet(element, CheckMe)
{
    if (!element)
    {
        return;
    }

	var parent		= $(element).parent();
	var radio_yes	= parent.children('input[type=radio][value=1]')[0];
	var radio_no	= parent.children('input[type=radio][value=0]')[0];
	var toggle		= parent.children('label');

	if (CheckMe)
	{
		toggle.addClass('on');
		toggle.removeClass('off');
		toggle.text(toggle.attr('data-on'));
		radio_yes.checked	= true;
		radio_no.checked	= false;
	}
	else
	{
		toggle.addClass('off');
		toggle.removeClass('on');
		toggle.text(toggle.attr('data-off'));
		radio_yes.checked	= false;
		radio_no.checked	= true;
	}
}

function radioBtnCheckboxSync(checkboxSelector, radioBtnName)
{
	$(checkboxSelector).change(function() {
			radioButtonSet(document.getElementById(radioBtnName + '_1'), this.checked);
	});

	var $inp = $('input[name="'+radioBtnName+'"]');

	$inp.closest('.switch').click(function() {
		$(checkboxSelector).prop('checked', $inp.filter(':checked').val() === '1');
	});
}

function addTag(keywordId)
{
	campaignId = parseInt($('[name="account_id"]').val());
	dialog_box = $('#add_tag_div');
	dialog_box.text('');

	var $tag_inp = $('<input/>', {
		type			: 'text',
		name			: 'tag_name',
		id				: 'tag_name',
		style			: 'margin-top: 4px;',
		size			: 30
	}).keypress(function(event) {
			if (event.which == 13)
			{
				addTagAjax(campaignId, keywordId);
				dialog_box.dialog('close');
			}
	}).appendTo(dialog_box);

	dialog_box.dialog({
						height :250,
						buttons:
							{
								"Add"		: function() {addTagAjax(campaignId, keywordId);},
								"Cancel"		: function() {$( this ).dialog( "close" );}
							}
						});
	dialog_box.dialog('open');
	$tag_inp.focus();
}

function addTagAjax(campaignId, keywordId)
{
	data = {
		'tag_name'		: $('#tag_name').val(),
		'campaign_id'	: campaignId,
		'keyword_id'	: keywordId
	};

	$.post('/?p=ajax-add_tag', data, function(){window.location.href = window.location.href});
}

function addNote(campaign_id, date)
{
	var data = {};

    if (arguments.length == 2 && isNaN(date.getTime()))
    {
        return;
    }

    if (
        typeof event !== 'undefined' &&
        event != undefined &&
        event.target &&
        event.target.parentElement &&
        event.target.parentElement.className &&
        event.target.parentElement.className.animVal &&
		event.target.parentElement.className.animVal.indexOf('highcharts-button') >= 0)
    {
        return; /* disable click for a highcharts export button click */
    }

	if (arguments.length > 0)
	{
		data.campaign_id = campaign_id;
	}
	if (arguments.length == 2)
	{
		data.note_date = date.getMonth()+1+'/'+date.getDate()+'/'+date.getFullYear();
	}

	var $note_div = $('#edit_note');
	$note_div.dialog({title:'Notes'});
	$note_div.load('/index.php?p=ajax-note', data, function(){
		$('#add_title').text('Add New');
		$note_div.dialog('open');
	});
}

function editNote(e, note_id, date)
{
	/* Skip sorting by report title click */
	if(!e){ e = window.event; }
	e.cancelBubble	= true;
	e.preventDefault();

	if (e.stopPropagation)
	{
		e.stopPropagation();
	}

	var $note_div = $('#edit_note');

	var url = '/index.php?p=ajax-note&id='+note_id;
	if (date)
	{
		url += '&note_date=' + date;
	}


	$('#edit_note').load(url, function(){
		$('#add_title').text('Edit');
		$note_div.dialog('open');
		$note_div.scrollTop(0);

		var scrollDown = $note_div[0].scrollHeight - $note_div.height() - 13;
		$note_div.animate({
			scrollTop: scrollDown
		}, 500);
	});
}
function saveNote()
{
	$noteTextInp = $('#note_text');
    var txt    = $noteTextInp.val();
    var regex  = /<a.+?href="([^"]+?)".*?>(.+?)<\/a>/gi;
    txt        = txt.replace(regex, '___URL___$1|||$2___/URL___');
    txt        = cleanUserInp(txt);
	$noteTextInp.val(txt);

	if (!$noteTextInp.val())
	{
		$('#no_text_err').show();
	}
	else
	{
		$('#note_form').submit();
	}
}

function cleanUserInp(html)
{
	var tmp = document.createElement("DIV");
	tmp.innerHTML = html;
	return tmp.textContent || tmp.innerText || "";
}

function rr_search_mode(action, object)
{
	if (action == 'f')
	{
		if (object.value == 'Search')
		{
			object.value = '';
		}
	}

	if (action == 'b')
	{
		if (object.value == '')
		{
			object.value = 'Search';
		}
	}
}

function pop_sort_filters(sorter_id)
{
    var $sorter_search_ele = $('#' + sorter_id + '_query');
    var $grid = $sorter_search_ele.parents('.grid_table');

    $sorter_search_ele.closest('.g_sort_search').css('display', 'none');
    if (!$grid.find('.g_sort_show').is(":visible")) {
        $('.grid_pg_row.' + sorter_id + '_ele').css('display', 'none');
    }

    var $filter_icon = '<div class="sort_icon_cont f_right" title="Filter results"><div class="ibase icon_filter"></div></div>';

//    var $filter_html = '<div class="sort_filter_cont txt_a_l"><div class="filters_title">Filter results</div></div>';
    $($filter_icon).appendTo($grid.find('.grid_table_header .in'));
//    $($filter_html).insertAfter($grid.find('.grid_table_header'));
//    $sorter_search_ele.appendTo($grid.find('.sort_filter_cont'));
//    $('<div class="f_right"><a href="#_c" class="close_filter">[Close]</a></div>').appendTo($grid.find('.sort_filter_cont'));

    $grid.find('.sort_icon_cont, .close_filter').click(function(){
//        $(this).parents('.grid_table').find('.sort_filter_cont').toggleClass('active');
        var table_sortable = $(this).parents('.grid_table').find('table.sortable')[0].rows[1];
        var disp = table_sortable.style.display;
        disp = (disp == 'none' ? 'table-row' : 'none');
        table_sortable.style.display = disp;
    });

    $grid.find('.f_col_wrap').on({
        mouseenter: function(e) {
            e.stopPropagation();
        },
        mouseleave: function() {
            $(this).find('ul').finish().fadeOut(200);
        },
        keydown: function(e) {
            if (e.which === 13) {
                e.preventDefault();
            }
        }
    });

    $grid.find('.f_col_wrap .comparator').on({
        mouseenter: function(e) {
            e.stopPropagation();
            if ($(this).find('ul').length == 0) {
                var html = '';
                var type = '';

                if ($(this).hasClass('type_numeric')) {

                    html = numeric_comperators_html();
                    type = 'type_numeric';

                } else if ($(this).hasClass('type_string')) {

                    html = string_comperators_html();
                    type = 'type_string';
                }
                $(this).html(html);

                $(this).find('li').click(function () {
                    var parents = $(this).parents('.comparator');
                    parents.attr("class", "comparator");
                    parents.addClass(type);
                    parents.addClass(this.className);

                    $(this).parents('ul').finish().fadeOut(50);
                    $(this).parents('.f_col_wrap').find('.f_col_inp').trigger('keyup');
                });

            } else {

                $(this).find('ul').finish().fadeIn(500);

            }
        }
    });

	$grid.find('.f_col_inp').keyup(function(){
		var $inp 	 = $(this);
		var $wrapper = $inp.closest('.f_col_wrap');

		if ($inp.text())
		{
			$inp.closest('.f_col_wrap')
				.append($('<div>', {'class':'f_col_clear'})
					.click(function () {
						$inp.text('').trigger('keyup');
					})
				);
		}
		else
		{
			$wrapper.find('.f_col_clear').remove();
		}

		window[$inp.data('s')].searchColumn($inp.data('g'));
	});
}

function numeric_comperators_html() {
    return '<ul>' +
        '<li class="icon_equals">Equals</li>' +
        '<li class="icon_not_equals">Does not equals</li>' +
        '<li class="icon_less">Less than</li>' +
        '<li class="icon_greater">Greater than</li>' +
        '<li class="icon_less_equals">Less than or equal to</li>' +
        '<li class="icon_greater_equals">Greater than or equal to</li>' +
        '</ul>';
}

function string_comperators_html() {
    return '<ul>' +
        '<li class="icon_contains">Contains</li>' +
        '<li class="icon_not_contains">Does not contain</li>' +
        '<li class="icon_starts">Starts with</li>' +
        '<li class="icon_ends">Ends with</li>' +
        '<li class="icon_equals">Equals</li>' +
        '<li class="icon_not_equals">Does not equal</li>' +
        '<li class="icon_regex">RegEx</li>' +
        '</ul>';
}

function initSidebarMenu(repOptsId, isCustEl)
{
    $('#'+ repOptsId + ' div.options_group_title').unbind('click').click(function(){
        var $this = $(this);
        var $ownContent = $this.siblings('.options_group_cont');

        $this.toggleClass('opt_group_closed');

        $ownContent.slideToggle('fast', function(){
            if (!isCustEl) {
                $(this).parents('.sidebar_section_cont').mCustomScrollbar("update");
            }
        });
    });
}

function sidebarResize()
{
	var $footer_div = $('div.div_footer');
	if (typeof $footer_div.position() == 'undefined' || typeof clientDashboard !== 'undefined')
	{
		return;
	}
	
	var $report_sidebar = $('#report_sidebar');
	
	var windowHeight		= $(window).height();
	var windowTillFooter	= $footer_div.position().top - $(window).scrollTop();

	var sidebarHeight = windowHeight - ($report_sidebar.offset().top - $(window).scrollTop());

	if (windowTillFooter < windowHeight)
	{
		var visibleFooter		= windowHeight - windowTillFooter;
		sidebarHeight			= sidebarHeight - visibleFooter;
	}
	
	$report_sidebar.height(sidebarHeight);

	var allTitles = $('.sidebar_section_title');
	if (allTitles.length)
	{
		var firstTitle				= allTitles[0];
		var sidebarContentHeight	= sidebarHeight - 32 - parseInt($report_sidebar.css('padding-top')) - allTitles.length * $(firstTitle).height();

		$('div.sidebar_section_cont').each(function(){
			var $this	  = $(this);
			var $btnPanel = $this.siblings('#sidebar_opt_btn_panel');
			var $searchField 	  = $('.search_field_cont');
			var searchFieldHeight = ($searchField.is(':visible') ? $searchField.height() : 0);

			if ($btnPanel.length)
			{
				$this.height(sidebarContentHeight - $btnPanel.height()- 28 - searchFieldHeight);
			}
			else
			{
				$this.height(sidebarContentHeight);
			}
			$this.mCustomScrollbar("update");
		});
	}
}
			
function sliderChange(el)
{
	if (el.type != undefined)
	{
		el = this;
	}

    var $el = $(el);

    var $wrapper = $el.closest('.options_group_cont');
    if (!$wrapper.length)
    {
        $wrapper = $el.closest('.rkg_set_wrap');
    }

    var value = $el.slider("value");

	var label_class = '.' + $el.data('lbl');
	$wrapper.find(label_class).val(value);
	
	try {
		series_set_action(el.id,value);
    }
    catch(err) {
    }
}

function sliderNormalizeSum(thisSlider, sliderClass, sum)
{
	if (window.doingNormalization)
	{
		return;
	}
	else
	{
		window.doingNormalization = true;
	}
	
	$thisSlider		= $(thisSlider);

    var $wrapper = $thisSlider.closest('.options_group_cont');
    if (!$wrapper.length)
    {
        $wrapper = $thisSlider.closest('.rkg_set_wrap');
    }

	var finalSum	= sum;
	var thisValue	= $thisSlider.slider("value");
	var $allSliders = $wrapper.find('.' + sliderClass);
	
	var curSum	= 0;
	$allSliders.each(function(){curSum += $(this).slider("value");});
	var change = (curSum > finalSum ? -1 : 1);
	var thisSliderIndex = $allSliders.index($thisSlider);

	var nextSliderIndex = (thisSliderIndex+1) % $allSliders.length;
	$sliderToChange		= $($allSliders.get(nextSliderIndex));
	
	while (curSum != finalSum)
	{
		curSum += change;
		
		var curValue = $sliderToChange.slider("value");
		
		while ((curValue == 0 && change == -1 && curSum >= finalSum))
		{
			nextSliderIndex = (nextSliderIndex+1) % $allSliders.length;
			$sliderToChange = $($allSliders.get(nextSliderIndex));
			curValue		= $sliderToChange.slider("value");
		}
		
		$sliderToChange.slider("option", "value", curValue + change);
	}
	window.doingNormalization = false;
}

function graphRadioChange (el, showMsg)
{
	radio = $(el).siblings('input[type=radio][checked]')[0];
	var elName = radio.name;
	var actionName;
	var actionVal;	//array [FALSE value, TRUE value]
	
	if (showMsg)
	{
		showUpdMsg();
	}
	
	switch (elName)
	{
		case 'label_enable':
			actionName	= 'LabelEnabled';
			actionVal	= ['False','True'];
			break;
		case 'label_style':
			actionName	= 'LabelStyle';
			actionVal	= ['Inside','Outside'];
			break;
		case 'marker_enable':
			actionName	= 'MarkerEnabled';
			actionVal	= ['False','True'];
			break;
		case 'indicator_enable':
			actionName	= 'IndicatorEnabled';
			actionVal	= ['False','True'];
			break;
		default:
			return;
	}
	
	$radioValue = 1-parseInt(radio.value); // not stwitched yet
	
	if (elName == 'indicator_enable')
	{
		chart_set_action(actionName,actionVal[$radioValue]);
	}
	else
	{
		series_set_action(actionName,actionVal[$radioValue]);
	}
}

function showUpdMsg()
{
	if (window.parent.frames.length == 0) 
	{
		var updWindow	= $('#msg_upd_window');
		updWindow.msgWindow({
			top: $('#report_sidebar').position().top + $('#report_header').height(),
			left: $('#report_sidebar').width()
		});
		updWindow.msgWindow('show');
	}
}

function toggleKeywordShow(el)
{
	var listItem = $(el).parent('li');
	listItem.find('.keyword_status').toggleClass('keyword_status_on');
	var checkbox = listItem.find('input[name="series[]"]');
	checkbox.prop("checked", !checkbox.prop("checked")).trigger('change');
}

function reportDefaultSettings(mode)
{
	$('#DetailsForm').append('<input type="hidden" name="def_set" value="'+ mode +'">');
	FormSubmit('DetailsForm', '_self');
}

function editRepCellData(el, campId, keyId, saveDataFunc)
{
	var volumeDiv	= $(el).parent('div.volume_div');
	var parentTd	= volumeDiv.parent('td');
	var value		= parentTd.find('.volume_val').text();
	volumeDiv.hide();

	value = value.replace(",","");
	value = (isNaN(value) || value === '' ? '': parseInt(value));
//	parentTd.remove('input');
    var $input = $('<input>', {'class': 'edit_vol_inp', 'type': 'text', 'value': value})
        .on('keyup', function (e) {
            if(e.key == "Enter") {
                saveDataFunc.call(this, e, campId, keyId);
            }
            else if (e.key == 'Escape')
            {
                cancelRepCellEdit(this, e);
            }
        });
    var $okBtn      = $('<a>', {'class': 'rr_sm_btn vol_ok_btn', 'href': '#'})
                        .click(function (e) {saveDataFunc.call(this, e, campId, keyId);});
    var $cancelBtn  = $('<a>', {'class': 'rr_sm_btn vol_cancel_btn', 'href': '#'})
                        .click(function (e) {$(this).siblings('input').val(''); saveDataFunc.call(this, e, campId, keyId);});
    var $editDiv = $('<div>', {'class': 'edit_vol'})
        .append($input).append($okBtn).append($cancelBtn);
	parentTd.append($editDiv);
	parentTd.find('input').focus();
}

function sendRepCellUpd(el, data, path, callbackFunc)
{
	$.post(path, data, function(response){
		if (callbackFunc)
		{
			callbackFunc.call(this, el, response);
		}
		
		var parentDiv = $(el).parent('.edit_vol');
		var parentTd  = parentDiv.parent('td');
		parentTd.find('.volume_val').html(response);
		parentTd.find('.volume_div').show();
		parentDiv.remove();
	});
}

function cancelRepCellEdit(el, event)
{
	event.preventDefault();

	var parentDiv = $(el).parent('.edit_vol');
	var parentTd  = parentDiv.parent('td');
	parentTd.find('.volume_div').show();
	parentDiv.remove();
}

function editTargetRank(el, campId, keyId)
{
	editRepCellData(el, campId, keyId, saveTargetRank)
}

function saveTargetRank(event, campId, keyId)
{
	event.preventDefault();

	var data = {
		campaign_id : campId,
		key_id		: keyId,
		rank		: (this.nodeName === 'INPUT' ? this.value : $(this).siblings('input').val())
	};

	sendRepCellUpd(this, data, '/?p=ajax-edit_target_rank', updTargetRankDisp);
}

function updTargetRankDisp(el, response)
{
	var $td 	= $(el).closest('td');
	var curRank = $td.find('.vol_edit_btn').data('currank');

	if (response && curRank && response >= curRank)
	{
		$td.addClass('achieved_rank_td');
	}
	else
	{
		$td.removeClass('achieved_rank_td');
	}
}

function editVolume(el, campId, keyId)
{
	editRepCellData(el, campId, keyId, saveVolume)
}

function saveVolume(event, campId, keyId)
{
	event.preventDefault();

	var data = {
		campaign_id : campId,
		key_id		: keyId,
		volume		: (this.nodeName === 'INPUT' ? this.value : $(this).siblings('input').val())
	};

	sendRepCellUpd(this, data, '/?p=ajax-edit_volume', null);
}

function checkbox_loop(el, element_name, IsShow)
{
	if (el)
	{
		$(el).closest('div').siblings('.data_rows').find('input[name="'+element_name+'"]').prop('checked',IsShow);
	}
	else
	{
		$('input[name="'+element_name+'"]').prop('checked',IsShow);
	}
}

function checkbox_loop_limit(element_name, IsShow, limit)
{
	$('input[name="'+element_name+'"]').slice(0,limit).prop('checked',IsShow);
}

function submitCustomFields()
{
	var mergeDiv = $('.merge_fields');
	
	if (mergeDiv.length)
	{
		var mainForm = $('#DetailsForm');
		mergeDiv.find('input, select').each(function(){
			var srcEl		= $(this);
			var elName		= srcEl.attr('name');
			var srcVal		= srcEl.val();

			if (srcEl.data('skip_merge'))
			{
				return;
			}

			if (srcEl.attr('type') === 'radio' && !srcEl.prop('checked'))
			{
				return 1;
			}
			
			if (srcEl.attr('data-ved') ==  srcVal)
			{
				srcVal = '';
			}

			var targetEl = mainForm.find('[name="' + elName + '"]');

			if (elName.indexOf('[]') !== -1)
			{
				$('<input/>', {
					name: elName,
					type: 'hidden',
					value: srcVal
				}).appendTo(mainForm);
			}
			else if (targetEl.length)
			{
				targetEl.val(srcVal);
			}
			else
			{
				$('<input/>', {
					name: elName,
					type: 'hidden',
					value: srcVal
				}).appendTo(mainForm);
			}
		});
	}
}

function onReportLoad()
{
	$('.grid_select_all').change(function(){
		var isChecked = $(this).prop('checked');
		$(this).closest('table').find('input').prop('checked', isChecked);
	});
	
	assignSortEvents();

	$('table.sticky_header, .sticky_header table').stickyTableHeaders({fixedOffset: $('#report_header_cont')});

	sidebarResize();
	initTranslationMode();

	if (typeof(HINTS_ITEMS_Header) != 'undefined')
	{
		initTooltips(HINTS_ITEMS_Header);
	}

    $('.preset_submit_btn').click(function(){FormPresetSubmit.call(this, false, false);});
}

function initTranslationMode()
{
	var $translateSpan = $('.translate_span');
	
	if ($translateSpan.length)
	{
		$translateSpan.click(function(event){
			event.stopPropagation();
			event.preventDefault();
			var $callerSpan = $(this);

			if (!$('#suggestion_form').length)
			{
				$("#lang_suggestion").load('?p=ajax-lang_suggestion_form', function(){
                    var curLang = $('#cur_lang').text().toLowerCase();
                    $('#suggestion_form #lang').val(curLang);
					populateTranslForm($callerSpan);
					$("#lang_suggestion").dialog('open');
				});
			}
			else
			{
				populateTranslForm($callerSpan);
				$("#lang_suggestion").dialog('open');
			}
		});
	}
}
	
function populateTranslForm($callerSpan)
{
	var $form	= $('#suggestion_form');
	$form.find('input[name="source"]').val($callerSpan.data('sourcetxt'));
	$form.find('.patt_description').html($callerSpan.data('description'));

    var data = {};
    data.source    = $('#source').val();
    data.lang_code = $('#lang').val();
    ajax_current_translation(data);
}

function ajax_current_translation(data)
{
    $.get('/?p=ajax-lang_suggestion_func&a=get_curr_trans', data, function(response){
        $('#curr_trans').val(response);
    });
}
	
function assignSortEvents()
{
	$('.sortable th').not('.nosort').click(function(){
		$('#sort_field').val($(this).data('fieldname'));
		$('#sort_dir').val($(this).hasClass('asc') ? 'DESC' : 'ASC');
	});
}

/* Highcharts Functions */
function hcHighlightSeries(chart, seriesId)
{
	var series = chart.get(seriesId);
	
	if (series)
	{
		series.onMouseOver();
	}
}

function hcUnHighlightSeries(chart, seriesId)
{
	var series = chart.get(seriesId);
	
	if (series)
	{
		series.onMouseOut();
	}
}

function hcLegendSpanColor(el, color)
{
	var $el = $(el);
	$el.find('.vis_s_title').css('color', color);
}

function isMobile()
{
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
	{
		return true;
	}
	
	return false;
}

function getGradietColor(value, maxValue, gradColors, gradRanges, noValColor)
{
	if (!$.isNumeric(value))
	{
		return noValColor;
	}
	if (value > maxValue)
	{
		return gradColors[gradColors.length-1];
	}

	var globPos	= value/maxValue;
	var rangeIndex	= 0;

	while(globPos > gradRanges[rangeIndex])
	{
		rangeIndex++;
	}

    if (rangeIndex === 0)
    {
        rangeIndex = 1;
    }

	var startColor	= gradColors[rangeIndex-1];
	var endColor	= gradColors[rangeIndex];

	var curRangeDiff = gradRanges[rangeIndex] - gradRanges[rangeIndex-1];

	var lclPos		 = (globPos - gradRanges[rangeIndex-1])/curRangeDiff;

	if (lclPos == 1)
	{
		return gradColors[rangeIndex];
	}

	var colorDiff;
	var returnColor = [];

	for (i = 0; i<3; i++)
	{
		colorDiff = endColor[i]-startColor[i];
		returnColor.push(Math.round(startColor[i]+lclPos*colorDiff ));
	}

	return returnColor;
}

function connectInpFields(selector1, selector2)
{
	$(selector1).on('keyup change input', function(){
		var updVal = $(this).val();

		if ($(this).prop("type") == 'radio') {
			updVal = $(selector1 + ':checked').val();
		}
		if ($(selector2).prop("type") == 'radio') {
			$(selector2 + '[value='+updVal+']').prop("checked",true);
		} else {
			$(selector2).val(updVal);
		}
	});
	
	$(selector2).on('keyup change input', function(){
		var updVal = $(this).val();

		if ($(this).prop("type") == 'radio') {
			updVal = $(selector2 + ':checked').val();
		}
		if ($(selector1).prop("type") == 'radio') {
			$(selector1 + '[value='+updVal+']').prop("checked",true);
		} else {
			$(selector1).val(updVal);
		}
	});
}

function bytesToString(y_value)
{
	var result = '';
	if (y_value < 1024)
	{
		result = y_value + " bytes";
	}
	else if (y_value < 1048576)
	{
		result = Math.round(y_value/1024) + " KB";
	}
	else
	{
		result = Math.round(y_value/1048576) + " MB";
	}
	
	return result;
}

/* OnReady funcs */
$(document).ready(function() {
	load_input_placeholders();
	
	/* jQueryUI Defaults Override */
	if ($.ui && $.ui.dialog)
	{
		$.ui.dialog.prototype._focusTabbable = function(){};
		
		$.extend($.ui.dialog.prototype.options, {
			modal		: !0,
			autoOpen	: !1,
			minWidth	: 450,
			minHeight	: 300
		});

		$.extend($.ui.dialog.prototype, {
			_createButtons: function() {
				var t = $;
				var e = this, i = this.options.buttons;
				return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (t.each(i, function(i, s) {
					var n, a;
					s = t.isFunction(s) ? {click: s,text: i} : s, s = t.extend({type: "button"}, s), n = s.click, s.click = function() {
						n.apply(e.element[0], arguments)
					}, a = {icons: s.icons,text: s.showText}, delete s.icons, delete s.showText;
					var btn = t("<button></button>", s).button(a);
					if (i=="Cancel")
					{
						btn.addClass('dialog_cancel_btn');
					}

					btn.appendTo(e.uiButtonSet);
				}), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
			}
		});
	}

	/* Blog Stuff */
	$("#_blog_website_row").css("display","none");
	
	/* hp Stuff */
	if ($("#dv_section_3").length && !isMobile())
	{
		$("#dv_section_3").find('a').each(function() {
			var $this = $(this); 
			if ($this.attr('data-scroll')) {				
				$this.click(function() {
					event.preventDefault();
					window.scroller.animateTo($('#'+$this.attr('data-scroll')).offset().top);

				});
			}
		});	
	}
	
	var $scr_links = $('.scr_img');
	if ($scr_links.length)
	{
		$scr_links.click(function(){
			var src = $(this).find('.cir').css('background-image').substring(4);
			src = src.substring(0, src.length - 1).replace(/"/g, '');
			$.fancybox({href: src});
		});
	}

    /* UI Nav */
    $('.men_user_men').click(function(e){
        e.stopPropagation();
        $('.nv_help_dialog').fadeOut(200);
        if ($(this).hasClass('active')){
            $('.nv_usr_dialog').fadeOut(200);
        } else {
            $('.nv_usr_dialog').delay(300).fadeIn(200);
        }
    });

    $('.men_help_nv').click(function(e){
        e.stopPropagation();
        $('.nv_usr_dialog').fadeOut(200);
        if ($(this).hasClass('active')){
            $('.nv_help_dialog').fadeOut(200);
        } else {
            $('.nv_help_dialog').delay(300).fadeIn(200);
        }
    });

    function closeNvMenus(){
        $('.nv_usr_dialog, .nv_help_dialog').fadeOut(200);
    }

    $(document.body).click( function(e) {
        closeNvMenus();
    });

    $(".nv_usr_dialog, .nv_help_dialog").click( function(e) {
        e.stopPropagation();
    });

    load_color_scheme();

    // nav_settings_UI();
    navMenu();
});


function navMenu()
{
    var $navCont;
    var $navTabs;
    var $navTabsCur;
    var $subW;
    var $repMenuCls;
    var $subRepMenus;

    var $subTabs;

    var $hoveredTab;
    var $hoveredSub;

    var $hoveredSecTab;
    var $hoveredRepSection;

    var $activeTab;
    var $activeSub;

    var delayedChanges = {
        'navTab': {el: null, allowed: true, time: 500},
        'secRepTab': {el: null, allowed: true, time: 300}
    };

    function init()
    {
        if (!navExists())
        {
            return;
        }

        initDomVars();
        initListeners();
        initShow();
    }

    function navExists()
    {
        return $('#nav_subs_cur').length > 0;
    }

    function initDomVars()
    {
        $navCont    = $('div.nav_tabs:first');
        $navTabs    = $navCont.find('a.hd_tab');
        $navTabsCur = $('#nav_subs_cur');
        $activeTab  = $navTabs.filter('.active');
        $activeSub  = $navCont.find('#sub_' + $activeTab.index());
        $repMenuCls = $navCont.find('.rep_menu_sec');
        $subRepMenus = $('div.sub_rep_menu');
        $subW        = $('.sub_w');
        $subTabs     = $navCont.find('.sub_menu_tab');
    }

    function initListeners()
    {
        $navTabs.mouseenter(function() {
            $hoveredTab = $(this);

            if (!isChangeAllowed($hoveredTab, 'navTab'))
            {
                return;
            }

            $hoveredSub = $navCont.find('#sub_' + $hoveredTab.index());

            $hoveredTab.addClass('active');
            $navTabsCur.html('').append($hoveredSub.clone(true, true).children());

            $navTabs.not($hoveredTab).not($activeTab).removeClass('active');
        }).mouseleave(function(){
            delayedChanges['navTab'].allowed = false;
            setTimeout(function(){allowChange('navTab');resetState();}, delayedChanges['navTab'].time);
        });

        $repMenuCls.mouseenter(function () {
            $hoveredSecTab = $(this);
            if (!isChangeAllowed($hoveredSecTab, 'secRepTab'))
            {
                return;
            }

            var selSection = $hoveredSecTab.data('section');
            $subRepMenus.hide();

            $subRepMenus.each(function() {
                $subRepMenu = $(this);
                if ($subRepMenu.attr('data-section') == selSection) {
                    $hoveredRepSection = $subRepMenu;
                    $subRepMenu.show();
                    return;
                }
            });

            $navTabsCur.find('.rep_menu_sec').not($hoveredSecTab).not($activeSub).removeClass('selected');
            $hoveredSecTab.addClass('selected');
        }).mouseleave(function(){
            delayedChanges['secRepTab'].allowed = false;
            setTimeout(function(){
                allowChange('secRepTab');resetState();
            }, delayedChanges['secRepTab'].time);
        });

        $subTabs.find('a').not('.rep_menu_sec').mouseleave(function () {
            resetState();
        });

        $subRepMenus.mouseleave(function(){
            resetState();
        });

    }

    function initShow()
    {
        $navTabsCur.html('').append($activeSub.clone(true, true).children());
    }
    
    function isChangeAllowed($hoveredEl, delayedElName)
    {
        var changeAllowed = delayedChanges[delayedElName].allowed;

        if (changeAllowed)
        {
            return true;
        }
        else
        {
            delayedChanges[delayedElName].el = $hoveredEl;
            return false;
        }
    }
    
    function allowChange(delayedElName)
    {
        delayedChanges[delayedElName].allowed = true;
        var $delayedEl = delayedChanges[delayedElName].el;
        
        if ($delayedEl && $delayedEl.is(":hover"))
        {
            $delayedEl.trigger('mouseenter');
        }
        delayedChanges[delayedElName].el = null;
    }

    function resetState()
    {
        var $visibleSubRepMenus = $subRepMenus.filter(':visible');

        if (!$navCont.is(":hover") &&
            !$navTabsCur.is(':hover') &&
            !$subW.is(':hover') &&
            (!$visibleSubRepMenus.length || $visibleSubRepMenus.length && !$visibleSubRepMenus.is(':hover'))
        )
        {
            $navTabs.not($activeTab).removeClass('active');
            $visibleSubRepMenus.fadeOut(200);
            initShow();
        }
    }

    init();
}

function nav_settings_UI()
{
    if ($('#nav_subs_cur'))
    {
        var NavMenuSettings = {
            'ActiveTab': $('div.nav_tabs a.hd_tab.active').index(),
            'HoverTab': -1
        };

        $('#nav_subs_cur').html($('#sub_' + NavMenuSettings.ActiveTab).html());

        $('div.nav_tabs a.hd_tab').mouseenter(function() {
            $('#nav_subs_cur').html($('#sub_' + $(this).index()).html());
            $(this).addClass('active');

            if (NavMenuSettings.HoverTab != $(this).index() &&
                NavMenuSettings.HoverTab != NavMenuSettings.ActiveTab) {
                $('div.nav_tabs a.hd_tab').eq(NavMenuSettings.HoverTab).removeClass('active');
            }

            NavMenuSettings.HoverTab = $(this).index();
			nav_settings_UI_init_rep_menu();
        });

        $('div.div_menubar .sub, .div_menubar').mouseleave(function() {
            if (NavMenuSettings.HoverTab != NavMenuSettings.ActiveTab) {
                $('#nav_subs_cur').html($('#sub_' + NavMenuSettings.ActiveTab).html());
                $('div.nav_tabs a.hd_tab').eq(NavMenuSettings.HoverTab).removeClass('active');
                NavMenuSettings.HoverTab = -1;
            }

            if (NavMenuSettings.ActiveTab == '-1')
            {
                $('#nav_subs_cur').html('&nbsp;');
            }
			nav_settings_UI_init_rep_menu();
        });

		nav_settings_UI_init_rep_menu();
    }
}

function nav_settings_UI_init_rep_menu()
{
	var repMenuCls = 'div.div_menubar div.sub_w a.rep_menu_sec';
	$(repMenuCls).mouseenter(function() {
		$(repMenuCls).removeClass('selected');

		var curSelSection = $(this);
		curSelSection.addClass('selected');
		//$('div.sub_rep_menu').addClass('hidden');
		$('div.sub_rep_menu').hide();

		var selSection = curSelSection.data('section');
		$('div.sub_rep_menu').each(function() {
			if ($(this).attr('data-section') == selSection) {
				//$(this).removeClass('hidden');
				$(this).show();
				$(this).mouseenter(function(e) {
					e.stopPropagation();
				}).mouseleave(function() {
					$(this).addClass('hidden');
					curSelSection.removeClass('selected');
					//$('div.sub_rep_menu').addClass('hidden');
					$('div.sub_rep_menu').fadeOut(200);
				});
			}
		});
	}).mouseleave(function(e) {
		e.stopPropagation();
	});

	$(document.body).click( function() {
		$(repMenuCls).removeClass('selected');
		//$('div.sub_rep_menu').addClass('hidden');
		$('div.sub_rep_menu').fadeOut(200);
	});

	$('div.nav_tabs').mouseenter(function() {
		var hasTabOpen = false;
		$(repMenuCls).each(function() {
			if ($(this).hasClass('selected')) {
				hasTabOpen = true;
			}
		});

		if (!hasTabOpen) {
			//$('div.sub_rep_menu').addClass('hidden');
			$('div.sub_rep_menu').fadeOut(200);
		}
	});
}

function load_color_scheme()
{
    $(".rr_rank").attr('class', 'rr_rank ' + $("#logo_svg_fill").attr('class'));

    color_scheme = $("#c_scheme").attr('class');
    if (color_scheme && color_scheme != 'rr_blue')
    {
        $('.wiz_submit_btn').addClass(color_scheme + '_d' + ' ' + color_scheme + '_l');
        $('.wiz_submit_btn').hover(function(){
            $(this).toggleClass('wiz_sub_btn_hover');
        });
    }
}

function load_input_placeholders()
{
	var $inpPlaceholder = $(".inp_placeholder");
	
	if ($inpPlaceholder.length)
	{
		$inpPlaceholder.each(function() {
			var $this = $(this); 
			if ($this.val() == '' || $this.attr('data-ved') == $this.val()) {
				$this.css('color', '#A9A9A9');
				$this.val($this.attr('data-ved'));
			}
			$this.focus(function() {
				var $this = $(this); 
				if ($this.attr('data-ved') == $this.val()) {
					$this.css('color', 'black');
					$this.val('');
				}
			}).blur(function() {
				var $this = $(this); 
				if ($this.attr('data-ved') == $this.val()) {
					$this.css('color', '#A9A9A9');
				}

				if ($this.val() == '') {
					$this.css('color', '#A9A9A9');
					$this.val($this.attr('data-ved'));
				}
			});
		});
	}
}

function setTranslationMode()
{
	$.post('/?p=ajax-actions&a=set_transtlation_mode', function(){
		location.reload();
	});
}

function exitTranslationMode()
{
	$.post('/?p=ajax-actions&a=exit_transtlation_mode', function(){
		location.reload();
	});
}

function openTranslation()
{
		if (!$('#suggestion_form').length)
		{
			$("#lang_suggestion").load('?p=ajax-lang_suggestion_form', function(){
				$("#lang_suggestion").dialog('open');
			});
		}
		else
		{
			$("#lang_suggestion").dialog('open');
		}
}

function load_google_serp_preview(title, url, description, search_term)
{
    var $gserp_div = $('#gserp_preview');
    $gserp_div.dialog({title:'Google SERP Preview Tool', width: 980, height: 510});
    $gserp_div.load('/index.php?p=ajax-google_serp_preview', function() {
		
		googleSerpViewer.init({title: title, url: url, description: description, search_term: search_term});
        $gserp_div.dialog('open');

        var scrollDown = $gserp_div[0].scrollHeight - $gserp_div.height() - 13;
        $gserp_div.animate({
            scrollTop: scrollDown
        }, 500);
    });
}

function load_se_screenshot(params)
{
    var $gserp_div = $('#gserp_snapshot');
    $gserp_div.dialog({title:'SERP Snapshot', width: 950, height: 510});
    $gserp_div.load('/?p=ajax-actions&a=serp_snapshot'+params, function() {
        $gserp_div.dialog('open');
    });
}

function ajaxPathLoad($pathSel, url, account_id, date, urlText)
{
	var dateQuery = '';
	if (date instanceof Array && date.length === 2)
	{
		dateQuery = 'date_from=' + date[0] + '&date_to=' + date[1];
	}
	else
	{
		dateQuery = 'date=' + date;
	}
	
	$.ajax({
		dataType: "json",
		url		: '/?p=ajax-update_landing_page_paths&url=' + url + '&acc_id=' + account_id + '&' + dateQuery + '&h=99'
	})
	.done(function(data){
		var res = [];
		res.push('<option value="">--- Select Landing Page ---</option>');
		$.each(data, function(index, value){
			res.push('<option value="' + value['path_id'] + '"' + (selected_landing_page_path_id == value['path_id'] ? "selected" : "") + ">"
				+ (value['url_subdomain'] ? (value['url_subdomain'] + ".") : "") + urlText + (value["url_path"] || "")  
				+ "</option>");
		});
        $pathSel.empty().html(res);
		$('#landing_page_path_id_report').empty().html(res);
	})
	.fail(function(jqXHR, textStatus, errorThrown){
	});
}

function pathFirstLoad($urlSel, $pathSel, account_id, date)
{
    var url		= $urlSel.val();
	var urlText = $urlSel.find(':selected').text();
	ajaxPathLoad($pathSel, url, account_id, date, urlText);
}

/* Goal Functions */
function initReportGoals()
{
    $(document).ready(function(){
        $('#goal_dialog').dialog({
            width: 200,
            height: 200,
            buttons: {
                "Save"  : function() {
                    updateGoal();
                    $(this).dialog( "close" );
                },
                "Remove"  : {
                    text : "Remove",
                    'class': 'dialog_cancel_btn',
                    click: function () {
                        removeGoal();
                        $(this).dialog("close");
                    }
                },
                "Cancel": 	function() {
                    $(this).dialog( "close" );
                }
            },
            close: function(){
                $('#goal_form input').val('');
                modCell = false;
            }
        });

        $('.grid_top_table thead th').each(function(i, el){
            var colName = $(el).data('fieldname');
            if (goalColumns[colName] != undefined)
            {
                goalColumns[colName].i 	= i;
                goalColumnsRvrs[i] 		= {name: colName, type: goalColumns[colName].type};
            }

            if (goalScheme[colName] != undefined)
            {
                goalScheme[colName].i = i;
            }
        });

        var goalDiv = $('#goal_compl_orig').clone().attr('id', '').show();

        goalDiv.click(function(){
            var td 	 = $(this).parent('td');
            var hash = getCellHash(td);
            modCell  = td;

            var dialog  = $('#goal_dialog');
            var inp  	= dialog.find('input');

            var tr 		= td.closest('tr');
            var rowTds 	= tr.find('td');
            var colInd 	= rowTds.index(td);

            var colObj  = goalColumnsRvrs[colInd];
            var icoClass= (colObj.type == 'hb' ? 'icon_greater_equals' : 'icon_less_equals');

            dialog.find('.ibase').attr('class', 'ibase ' + icoClass);

            if (hash in goalHashTable)
            {
                inp.val(goalHashTable[hash]);
            }

            dialog.dialog('open');
        });

        $('.grid_top_table table tbody tr').each(function(i, tr){
            var tr = $(tr);

            $.each(goalColumns, function(colName, colSettings){
                var td 			= tr.find('td').eq(colSettings.i);

                if (td.length)
                {
                    var cellHash = getCellHash(td);

                    goalValue = ((cellHash in goalHashTable && goalHashTable[cellHash] !== '') ? parseFloat(goalHashTable[cellHash].replace(",", "")) : '');

                    var newGoalDiv = goalDiv.clone(true).addClass(getGoalCellClass(td)).attr('title', goalValue);
                    td.append(newGoalDiv);
                    td.addClass('cg');
                }
            })
        });

    });
}

function getCellHash(td)
{
    var hashArr = [];

    var tr 		= td.closest('tr');
    var rowTds 	= tr.find('td');
    var colInd 	= rowTds.index(td);

    $.each(goalScheme, function(fieldName, fieldObj){
        hashArr.push(rowTds.eq(fieldObj.i).data(fieldName));
    });

    hashArr.push(goalColumnsRvrs[colInd].name);

    return hashArr.join('_');
}

function getGoalCellClass(td)
{
    var hash 	 = getCellHash(td);
    var newClass = 'goal_neutral';

    if (hash in goalHashTable && goalValue !== '')
    {
        var goalValue = parseFloat(goalHashTable[hash].replace(",", ""));

        var tr 		= td.closest('tr');
        var rowTds 	= tr.find('td');
        var colInd 	= rowTds.index(td);
        var colObj 	= goalColumnsRvrs[colInd];

        var calcType  = colObj.type;
        var cellValue = parseFloat(td.text().replace(",", ""));

        if (goalValue == cellValue)
        {
            newClass = 'goal_equal'
        }
        else if (goalValue > cellValue)
        {
            newClass = (calcType == 'hb' ? 'goal_bad': 'goal_good');
        }
        else if (goalValue < cellValue)
        {
            newClass = (calcType == 'hb' ? 'goal_good': 'goal_bad');
        }
    }

    return newClass;
}

function removeAllGoalClasses(td)
{
    td.find('.goal_compl').attr('class', 'goal_compl');
}

function updateGoal()
{
    var thisCell = modCell;
    var hash 	 = getCellHash(thisCell);
    var goalVal  = $('#goal_form input').val();

    goalHashTable[hash] = goalVal;
    removeAllGoalClasses(thisCell);
    thisCell.find('.goal_compl').addClass(getGoalCellClass(thisCell)).attr('title', goalVal);

    $.ajax({
        url : '/?p=ajax-actions&a=add_goal',
        method: 'post',
        data: {report_id: reportID, hash: hash, goal_val: goalVal, c_id: goalCampID}
    });
}

function removeGoal()
{
    $('#goal_form input').val('');
    updateGoal();
}

function showCustomReports(e, reportNum)
{
    e.preventDefault();

    if ($("#wlprs_list").is(':empty'))
    {
        $("#wlprs_list").load('/?p=ajax-pdf_reports_list',{'report_num': reportNum},
            function(data)
            {
                if (data)
                {
                    $("#custom_reports_div").dialog('open');
                }
                else
                {
                    $('#DetailsForm').append('<input type="hidden" name="new_report" value="1">');
                    addToCustomReport('', reportNum);
                }
            });
    }
    else
    {
        $("#custom_reports_div").dialog('open');
    }
}

function showCDs(e)
{
    e.preventDefault();
    $("#cd_camps_list").load('/?p=ajax-cd_camp_list', {"a": 'c_list'},
        function(data)
        {
            if (data)
            {
                $("#cd_camps_div").dialog('open');
            }
        }
    );
}

/* Date functions */
function get_formatted_date(date, date_format)
{
    if (date_format === 'iso')
    {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
    else if (date_format === 'uk')
    {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    }
    else
    {
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }
}

function str_date_to_iso(date_str, date_format)
{
    var date_obj = get_date_from_str(date_str, date_format);
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
    var glue     = (isSafari ? '/' : '-');
    return date_obj.getFullYear() + glue + (date_obj.getMonth() + 1) + glue + date_obj.getDate();
}

function get_date_text(date, date_format, fullMonthName) {
    var monthName = (fullMonthName ? getFullMonthName(date) : getMonthName(date));
    
    if (date_format === 'uk')
    {
        return date.getDate() + ' ' + monthName + ', ' + date.getFullYear();
    }
    else
    {
        return monthName + ' ' + date.getDate() + ', ' + date.getFullYear();
    }
}

function get_date_value(date) {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
}

function get_date_from_str(date_str, date_format)
{
    var date_obj = {};
    var date_arr = date_str.split('/');

    if (date_arr.length == 0)
    {
        date_arr = date_str.split("-");
    }
    
    if (date_arr.length !== 3)
    {
        return '';
    }

    date_obj.year  = date_arr[2];
    date_obj.month = (date_format === 'us' ? date_arr[0] : date_arr[1]);
    date_obj.day   = (date_format === 'us' ? date_arr[1] : date_arr[0]);

    return new Date(date_obj.year, date_obj.month - 1, date_obj.day);
}

function getMonthName(date) {
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[date.getMonth()];
}

function getFullMonthName(date) {
    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "Decdecember"];
    return months[date.getMonth()];
}

function is_valid_date_string (value, date_format) {
    var date_iso = str_date_to_iso(value, date_format);
    var is_valid = value
        && value.split('/').length === 3
        && (value.split('/')[0].length === 1 || value.split('/')[0].length === 2)
        && (value.split('/')[1].length === 1 || value.split('/')[1].length === 2)
        && (value.split('/')[2].length === 4)
        && new Date(date_iso)
        && new Date(date_iso).valueOf();

    return !!is_valid;
}

jQuery.event.special.preconfirm = {
    delegateType: "click",
    bindType: "click",
    handle: function( event )
    {
        var handleObj = event.handleObj;
        var origFn    = handleObj.handler;
        var $el       = $(this);
        var origHtml  = $el.html();
        var $rplceEl  =  $('#' + $el.data('preconfirm')).clone().attr('id', '').show();

        $el.html($rplceEl);
        $el.unbind('preconfirm');

        $el.click(function(){
            origFn.apply(this, arguments);
        });

        setTimeout(function(){
            $el.html(origHtml);
            $el.on('preconfirm', origFn);
            $el.unbind('click');
        }, 5000);
    }
};

(function ( $ ) {
    $.fn.preconfirm = function(callback){
        return this.on('preconfirm', callback);
    }
}(jQuery));
;/* Tooltipster v3.2.4 */;(function(e,t,n){function s(t,n){this.bodyOverflowX;this.callbacks={hide:[],show:[]};this.checkInterval=null;this.Content;this.$el=e(t);this.$elProxy;this.elProxyPosition;this.enabled=true;this.options=e.extend({},i,n);this.mouseIsOverProxy=false;this.namespace="tooltipster-"+Math.round(Math.random()*1e5);this.Status="hidden";this.timerHide=null;this.timerShow=null;this.$tooltip;this.options.iconTheme=this.options.iconTheme.replace(".","");this.options.theme=this.options.theme.replace(".","");this._init()}function o(t,n){var r=true;e.each(t,function(e,i){if(typeof n[e]==="undefined"||t[e]!==n[e]){r=false;return false}});return r}function f(){return!a&&u}function l(){var e=n.body||n.documentElement,t=e.style,r="transition";if(typeof t[r]=="string"){return true}v=["Moz","Webkit","Khtml","O","ms"],r=r.charAt(0).toUpperCase()+r.substr(1);for(var i=0;i<v.length;i++){if(typeof t[v[i]+r]=="string"){return true}}return false}var r="tooltipster",i={animation:"fade",arrow:true,arrowColor:"",autoClose:true,content:null,contentAsHTML:false,contentCloning:true,delay:200,minWidth:0,maxWidth:null,functionInit:function(e,t){},functionBefore:function(e,t){t()},functionReady:function(e,t){},functionAfter:function(e){},icon:"(?)",iconCloning:true,iconDesktop:false,iconTouch:false,iconTheme:"tooltipster-icon",interactive:false,interactiveTolerance:350,multiple:false,offsetX:0,offsetY:0,onlyOne:false,position:"top",positionTracker:false,speed:350,timer:0,theme:"tooltipster-default",touchDevices:true,trigger:"hover",updateAnimation:true};s.prototype={_init:function(){var t=this;var pos = t.$el.data('pos');if(pos){t.options.position = pos;}if(n.querySelector){if(t.options.content!==null){t._content_set(t.options.content)}else{var r=t.$el.attr("title");if(typeof r==="undefined")r=null;t._content_set(r)}var i=t.options.functionInit.call(t.$el,t.$el,t.Content);if(typeof i!=="undefined")t._content_set(i);t.$el.removeAttr("title").addClass("tooltipstered");if(!u&&t.options.iconDesktop||u&&t.options.iconTouch){if(typeof t.options.icon==="string"){t.$elProxy=e('<span class="'+t.options.iconTheme+'"></span>');t.$elProxy.text(t.options.icon)}else{if(t.options.iconCloning)t.$elProxy=t.options.icon.clone(true);else t.$elProxy=t.options.icon}t.$elProxy.insertAfter(t.$el)}else{t.$elProxy=t.$el}if(t.options.trigger=="hover"){t.$elProxy.on("mouseenter."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=true;t._show()}}).on("mouseleave."+t.namespace,function(){if(!f()||t.options.touchDevices){t.mouseIsOverProxy=false}});if(u&&t.options.touchDevices){t.$elProxy.on("touchstart."+t.namespace,function(){t._showNow()})}}else if(t.options.trigger=="click"){t.$elProxy.on("click."+t.namespace,function(){if(!f()||t.options.touchDevices){t._show()}})}}},_show:function(){var e=this;if(e.Status!="shown"&&e.Status!="appearing"){if(e.options.delay){e.timerShow=setTimeout(function(){if(e.options.trigger=="click"||e.options.trigger=="hover"&&e.mouseIsOverProxy){e._showNow()}},e.options.delay)}else e._showNow()}},_showNow:function(n){var r=this;r.options.functionBefore.call(r.$el,r.$el,function(){if(r.enabled&&r.Content!==null){if(n)r.callbacks.show.push(n);r.callbacks.hide=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;if(r.options.onlyOne){e(".tooltipstered").not(r.$el).each(function(t,n){var r=e(n),i=r.data("tooltipster-ns");e.each(i,function(e,t){var n=r.data(t),i=n.status(),s=n.option("autoClose");if(i!=="hidden"&&i!=="disappearing"&&s){n.hide()}})})}var i=function(){r.Status="shown";e.each(r.callbacks.show,function(e,t){t.call(r.$el)});r.callbacks.show=[]};if(r.Status!=="hidden"){var s=0;if(r.Status==="disappearing"){r.Status="appearing";if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-"+r.options.animation+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.stop().fadeIn(i)}}else if(r.Status==="shown"){i()}}else{r.Status="appearing";var s=r.options.speed;r.bodyOverflowX=e("body").css("overflow-x");e("body").css("overflow-x","hidden");var o="tooltipster-"+r.options.animation,a="-webkit-transition-duration: "+r.options.speed+"ms; -webkit-animation-duration: "+r.options.speed+"ms; -moz-transition-duration: "+r.options.speed+"ms; -moz-animation-duration: "+r.options.speed+"ms; -o-transition-duration: "+r.options.speed+"ms; -o-animation-duration: "+r.options.speed+"ms; -ms-transition-duration: "+r.options.speed+"ms; -ms-animation-duration: "+r.options.speed+"ms; transition-duration: "+r.options.speed+"ms; animation-duration: "+r.options.speed+"ms;",f=r.options.minWidth?"min-width:"+Math.round(r.options.minWidth)+"px;":"",c=r.options.maxWidth?"max-width:"+Math.round(r.options.maxWidth)+"px;":"",h=r.options.interactive?"pointer-events: auto;":"";r.$tooltip=e('<div class="tooltipster-base '+r.options.theme+'" style="'+f+" "+c+" "+h+" "+a+'"><div class="tooltipster-content"></div></div>');if(l())r.$tooltip.addClass(o);r._content_insert();r.$tooltip.appendTo("body");r.reposition();r.options.functionReady.call(r.$el,r.$el,r.$tooltip);if(l()){r.$tooltip.addClass(o+"-show");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(i)}else{r.$tooltip.css("display","none").fadeIn(r.options.speed,i)}r._interval_set();e(t).on("scroll."+r.namespace+" resize."+r.namespace,function(){r.reposition()});if(r.options.autoClose){e("body").off("."+r.namespace);if(r.options.trigger=="hover"){if(u){setTimeout(function(){e("body").on("touchstart."+r.namespace,function(){r.hide()})},0)}if(r.options.interactive){if(u){r.$tooltip.on("touchstart."+r.namespace,function(e){e.stopPropagation()})}var p=null;r.$elProxy.add(r.$tooltip).on("mouseleave."+r.namespace+"-autoClose",function(){clearTimeout(p);p=setTimeout(function(){r.hide()},r.options.interactiveTolerance)}).on("mouseenter."+r.namespace+"-autoClose",function(){clearTimeout(p)})}else{r.$elProxy.on("mouseleave."+r.namespace+"-autoClose",function(){r.hide()})}}else if(r.options.trigger=="click"){setTimeout(function(){e("body").on("click."+r.namespace+" touchstart."+r.namespace,function(){r.hide()})},0);if(r.options.interactive){r.$tooltip.on("click."+r.namespace+" touchstart."+r.namespace,function(e){e.stopPropagation()})}}}}if(r.options.timer>0){r.timerHide=setTimeout(function(){r.timerHide=null;r.hide()},r.options.timer+s)}}})},_interval_set:function(){var t=this;t.checkInterval=setInterval(function(){if(e("body").find(t.$el).length===0||e("body").find(t.$elProxy).length===0||t.Status=="hidden"||e("body").find(t.$tooltip).length===0){if(t.Status=="shown"||t.Status=="appearing")t.hide();t._interval_cancel()}else{if(t.options.positionTracker){var n=t._repositionInfo(t.$elProxy),r=false;if(o(n.dimension,t.elProxyPosition.dimension)){if(t.$elProxy.css("position")==="fixed"){if(o(n.position,t.elProxyPosition.position))r=true}else{if(o(n.offset,t.elProxyPosition.offset))r=true}}if(!r){t.reposition()}}}},200)},_interval_cancel:function(){clearInterval(this.checkInterval);this.checkInterval=null},_content_set:function(e){if(typeof e==="object"&&e!==null&&this.options.contentCloning){e=e.clone(true)}this.Content=e},_content_insert:function(){var e=this,t=this.$tooltip.find(".tooltipster-content");if(typeof e.Content==="string"&&!e.options.contentAsHTML){t.text(e.Content)}else{t.empty().append(e.Content)}},_update:function(e){var t=this;t._content_set(e);if(t.Content!==null){if(t.Status!=="hidden"){t._content_insert();t.reposition();if(t.options.updateAnimation){if(l()){t.$tooltip.css({width:"","-webkit-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-moz-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-o-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms","-ms-transition":"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms",transition:"all "+t.options.speed+"ms, width 0ms, height 0ms, left 0ms, top 0ms"}).addClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!="hidden"){t.$tooltip.removeClass("tooltipster-content-changing");setTimeout(function(){if(t.Status!=="hidden"){t.$tooltip.css({"-webkit-transition":t.options.speed+"ms","-moz-transition":t.options.speed+"ms","-o-transition":t.options.speed+"ms","-ms-transition":t.options.speed+"ms",transition:t.options.speed+"ms"})}},t.options.speed)}},t.options.speed)}else{t.$tooltip.fadeTo(t.options.speed,.5,function(){if(t.Status!="hidden"){t.$tooltip.fadeTo(t.options.speed,1)}})}}}}else{t.hide()}},_repositionInfo:function(e){return{dimension:{height:e.outerHeight(false),width:e.outerWidth(false)},offset:e.offset(),position:{left:parseInt(e.css("left")),top:parseInt(e.css("top"))}}},hide:function(n){var r=this;if(n)r.callbacks.hide.push(n);r.callbacks.show=[];clearTimeout(r.timerShow);r.timerShow=null;clearTimeout(r.timerHide);r.timerHide=null;var i=function(){e.each(r.callbacks.hide,function(e,t){t.call(r.$el)});r.callbacks.hide=[]};if(r.Status=="shown"||r.Status=="appearing"){r.Status="disappearing";var s=function(){r.Status="hidden";if(typeof r.Content=="object"&&r.Content!==null){r.Content.detach()}r.$tooltip.remove();r.$tooltip=null;e(t).off("."+r.namespace);e("body").off("."+r.namespace).css("overflow-x",r.bodyOverflowX);e("body").off("."+r.namespace);r.$elProxy.off("."+r.namespace+"-autoClose");r.options.functionAfter.call(r.$el,r.$el);i()};if(l()){r.$tooltip.clearQueue().removeClass("tooltipster-"+r.options.animation+"-show").addClass("tooltipster-dying");if(r.options.speed>0)r.$tooltip.delay(r.options.speed);r.$tooltip.queue(s)}else{r.$tooltip.stop().fadeOut(r.options.speed,s)}}else if(r.Status=="hidden"){i()}return r},show:function(e){this._showNow(e);return this},update:function(e){return this.content(e)},content:function(e){if(typeof e==="undefined"){return this.Content}else{this._update(e);return this}},reposition:function(){var n=this;if(e("body").find(n.$tooltip).length!==0){n.$tooltip.css("width","");n.elProxyPosition=n._repositionInfo(n.$elProxy);var r=null,i=e(t).width(),s=n.elProxyPosition,o=n.$tooltip.outerWidth(false),u=n.$tooltip.innerWidth()+1,a=n.$tooltip.outerHeight(false);if(n.$elProxy.is("area")){var f=n.$elProxy.attr("shape"),l=n.$elProxy.parent().attr("name"),c=e('img[usemap="#'+l+'"]'),h=c.offset().left,p=c.offset().top,d=n.$elProxy.attr("coords")!==undefined?n.$elProxy.attr("coords").split(","):undefined;if(f=="circle"){var v=parseInt(d[0]),m=parseInt(d[1]),g=parseInt(d[2]);s.dimension.height=g*2;s.dimension.width=g*2;s.offset.top=p+m-g;s.offset.left=h+v-g}else if(f=="rect"){var v=parseInt(d[0]),m=parseInt(d[1]),y=parseInt(d[2]),b=parseInt(d[3]);s.dimension.height=b-m;s.dimension.width=y-v;s.offset.top=p+m;s.offset.left=h+v}else if(f=="poly"){var w=[],E=[],S=0,x=0,T=0,N=0,C="even";for(var k=0;k<d.length;k++){var L=parseInt(d[k]);if(C=="even"){if(L>T){T=L;if(k===0){S=T}}if(L<S){S=L}C="odd"}else{if(L>N){N=L;if(k==1){x=N}}if(L<x){x=L}C="even"}}s.dimension.height=N-x;s.dimension.width=T-S;s.offset.top=p+x;s.offset.left=h+S}else{s.dimension.height=c.outerHeight(false);s.dimension.width=c.outerWidth(false);s.offset.top=p;s.offset.left=h}}var A=0,O=0,M=0,_=parseInt(n.options.offsetY),D=parseInt(n.options.offsetX),P=n.options.position;function H(){var n=e(t).scrollLeft();if(A-n<0){r=A-n;A=n}if(A+o-n>i){r=A-(i+n-o);A=i+n-o}}function B(n,r){if(s.offset.top-e(t).scrollTop()-a-_-12<0&&r.indexOf("top")>-1){P=n}if(s.offset.top+s.dimension.height+a+12+_>e(t).scrollTop()+e(t).height()&&r.indexOf("bottom")>-1){P=n;M=s.offset.top-a-_-12}}if(P=="top"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left+D-j/2;M=s.offset.top-a-_-12;H();B("bottom","top")}if(P=="top-left"){A=s.offset.left+D;M=s.offset.top-a-_-12;H();B("bottom-left","top-left")}if(P=="top-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top-a-_-12;H();B("bottom-right","top-right")}if(P=="bottom"){var j=s.offset.left+o-(s.offset.left+s.dimension.width);A=s.offset.left-j/2+D;M=s.offset.top+s.dimension.height+_+12;H();B("top","bottom")}if(P=="bottom-left"){A=s.offset.left+D;M=s.offset.top+s.dimension.height+_+12;H();B("top-left","bottom-left")}if(P=="bottom-right"){A=s.offset.left+s.dimension.width+D-o;M=s.offset.top+s.dimension.height+_+12;H();B("top-right","bottom-right")}if(P=="left"){A=s.offset.left-D-o-12;O=s.offset.left+D+s.dimension.width+12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A<0&&O+o>i){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=o+A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);A=s.offset.left-D-q-12-I;F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A<0){A=s.offset.left+D+s.dimension.width+12;r="left"}}if(P=="right"){A=s.offset.left+D+s.dimension.width+12;O=s.offset.left-D-o-12;var F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_;if(A+o>i&&O<0){var I=parseFloat(n.$tooltip.css("border-width"))*2,q=i-A-I;n.$tooltip.css("width",q+"px");a=n.$tooltip.outerHeight(false);F=s.offset.top+a-(s.offset.top+s.dimension.height);M=s.offset.top-F/2-_}else if(A+o>i){A=s.offset.left-D-o-12;r="right"}}if(n.options.arrow){var R="tooltipster-arrow-"+P;if(n.options.arrowColor.length<1){var U=n.$tooltip.css("background-color")}else{var U=n.options.arrowColor}if(!r){r=""}else if(r=="left"){R="tooltipster-arrow-right";r=""}else if(r=="right"){R="tooltipster-arrow-left";r=""}else{r="left:"+Math.round(r)+"px;"}if(P=="top"||P=="top-left"||P=="top-right"){var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}else if(P=="bottom"||P=="bottom-left"||P=="bottom-right"){var z=parseFloat(n.$tooltip.css("border-top-width")),W=n.$tooltip.css("border-top-color")}else if(P=="left"){var z=parseFloat(n.$tooltip.css("border-right-width")),W=n.$tooltip.css("border-right-color")}else if(P=="right"){var z=parseFloat(n.$tooltip.css("border-left-width")),W=n.$tooltip.css("border-left-color")}else{var z=parseFloat(n.$tooltip.css("border-bottom-width")),W=n.$tooltip.css("border-bottom-color")}if(z>1){z++}var X="";if(z!==0){var V="",J="border-color: "+W+";";if(R.indexOf("bottom")!==-1){V="margin-top: -"+Math.round(z)+"px;"}else if(R.indexOf("top")!==-1){V="margin-bottom: -"+Math.round(z)+"px;"}else if(R.indexOf("left")!==-1){V="margin-right: -"+Math.round(z)+"px;"}else if(R.indexOf("right")!==-1){V="margin-left: -"+Math.round(z)+"px;"}X='<span class="tooltipster-arrow-border" style="'+V+" "+J+';"></span>'}n.$tooltip.find(".tooltipster-arrow").remove();var K='<div class="'+R+' tooltipster-arrow" style="'+r+'">'+X+'<span style="border-color:'+U+';"></span></div>';n.$tooltip.append(K)}n.$tooltip.css({top:Math.round(M)+"px",left:Math.round(A)+"px"})}return n},enable:function(){this.enabled=true;return this},disable:function(){this.hide();this.enabled=false;return this},destroy:function(){var t=this;t.hide();if(t.$el[0]!==t.$elProxy[0])t.$elProxy.remove();t.$el.removeData(t.namespace).off("."+t.namespace);var n=t.$el.data("tooltipster-ns");if(n.length===1){var r=typeof t.Content==="string"?t.Content:e("<div></div>").append(t.Content).html();t.$el.removeClass("tooltipstered").attr("title",r).removeData(t.namespace).removeData("tooltipster-ns").off("."+t.namespace)}else{n=e.grep(n,function(e,n){return e!==t.namespace});t.$el.data("tooltipster-ns",n)}return t},elementIcon:function(){return this.$el[0]!==this.$elProxy[0]?this.$elProxy[0]:undefined},elementTooltip:function(){return this.$tooltip?this.$tooltip[0]:undefined},option:function(e,t){if(typeof t=="undefined")return this.options[e];else{this.options[e]=t;return this}},status:function(){return this.Status}};e.fn[r]=function(){var t=arguments;if(this.length===0){if(typeof t[0]==="string"){var n=true;switch(t[0]){case"setDefaults":e.extend(i,t[1]);break;default:n=false;break}if(n)return true;else return this}else{return this}}else{if(typeof t[0]==="string"){var r="#*$~&";this.each(function(){var n=e(this).data("tooltipster-ns"),i=n?e(this).data(n[0]):null;if(i){if(typeof i[t[0]]==="function"){var s=i[t[0]](t[1],t[2])}else{throw new Error('Unknown method .tooltipster("'+t[0]+'")')}if(s!==i){r=s;return false}}else{throw new Error("You called Tooltipster's \""+t[0]+'" method on an uninitialized element')}});return r!=="#*$~&"?r:this}else{var o=[],u=t[0]&&typeof t[0].multiple!=="undefined",a=u&&t[0].multiple||!u&&i.multiple;this.each(function(){var n=false,r=e(this).data("tooltipster-ns"),i=null;if(!r){n=true}else{if(a)n=true;else {}}if(n){i=new s(this,t[0]);if(!r)r=[];r.push(i.namespace);e(this).data("tooltipster-ns",r);e(this).data(i.namespace,i)}o.push(i)});if(a)return o;else return this}}};var u=!!("ontouchstart"in t);var a=false;e("body").one("mousemove",function(){a=true})})(jQuery,window,document);
function initTooltips(tooltipsObj)
{
	$('.tooltipster').tooltipster({
		theme: 'tooltipster-light',
		maxWidth: 300,
		contentAsHTML: true,
		interactive: true,
		onlyOne: true,
		delay: 0,
		functionBefore: function(origin, continueTooltip) {
			if (origin.data('hintcontent')) {
				origin.tooltipster('content', origin.data('hintcontent'));
			} else {
				origin.tooltipster('content', tooltipsObj[origin.data('hintname')]);
			}
			continueTooltip();
		}
	});
}
function initStdTooltips()
{
	$('.tooltipster').tooltipster({
		theme: 'tooltipster-light',
		maxWidth: 300,
		contentAsHTML: true,
		interactive: true,
		onlyOne: true,
		delay: 0,
		functionBefore: function(origin, continueTooltip) {
			if (origin.data('hintcontent')) {
				origin.tooltipster('content', origin.data('hintcontent'));
			}
			continueTooltip();
		}
	});
};$(function(){

    var $all_lists = $('div.features_list, div.resources_list');

    /* feature pages */
    $('div.menu > a.htphmen').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        var $menu_div = $('div.' + $(this).data('menu'));
        if ($menu_div.hasClass('show')) {
            $menu_div.removeClass('show');
            $(this).removeClass('show');
            $menu_div.fadeOut(200);
        }
        else {
            $all_lists.hide();
            $('div.menu > a.htphmen, div.htphsbmen').removeClass('show');

            $(this).addClass('show');
            $menu_div.addClass('show');
            $menu_div.delay(50).fadeIn(200);
        }
    });

    $all_lists.on('click', function(e){
        e.stopPropagation();
    });

    $(document.body).click( function() {
        $all_lists.fadeOut(200);
        $('div.menu > a.htphmen, div.htphsbmen').removeClass('show');
    });

    /* mobile navigation */
    function init_mobile_menu() {
        var mobileMenuSel = 'div.menu div.mobile_menu_items ul';
        $(mobileMenuSel).append('<li><b>Resources</b></li>');
        $('header .resources_list ul li').each(function(){
            var el_content = $(this).html();
            if (el_content.indexOf('<b>') < 0) {
                $(mobileMenuSel).append('<li>' + el_content + '</li>');
            }
        });

        $(mobileMenuSel).append('<li><b>Features</b></li>');
        $('header .features_list ul li').each(function(){
            var el_content = $(this).html();
            if (el_content.indexOf('<b>') < 0) {
                $(mobileMenuSel).append('<li>' + el_content + '</li>');
            }
        });
    }
    init_mobile_menu();

    $('div.menu').on('click', function(e){

        function is_device (device){
            var current_device = window.getComputedStyle(document.body,':after').getPropertyValue('content');
            return current_device.indexOf(device) !== -1;
        }

        if (is_device('mobile')) {
            $('div.menu div.mobile_menu_items').toggleClass('open');
        }

    });

    /* top header */
    var header_num;
    var header_mini = $('#cover_bg').hasClass('std');

    function display_header_1() {
        $('header').addClass('img');
        $('header div.logo img').attr('src', $('header div.logo img').data('reg'));
        $('header div.mobile_menu').removeClass($('header div.mobile_menu').data('neg'));
        $('header div.menu a').each(function(){
            $(this).removeClass($(this).data('neg'));
        });
    }

    function display_header_2() {
        $('header').removeClass('img');
        $('header div.logo img').attr('src', $('header div.logo img').data('neg'));
        $('header div.mobile_menu').addClass($('header div.mobile_menu').data('neg'));
        $('header div.menu a').each(function(){
            $(this).addClass($(this).data('neg'));
        });
    }

    function set_scroll() {

        var scroll_position = $(document).scrollTop();
        var cover_animation = ($cover.hasClass('no_anim') ? false : true);
        var disable_animation = ($cover.hasClass('dis_anim') ? true : false);

        //var hd_change_at    = (header_mini ? 440 : 620);
        var hd_change_at    = (header_mini ? 180 : 620);
        if (!cover_animation)
        {
            hd_change_at = 230;
        }
        if (disable_animation)
        {
            hd_change_at = 180;
        }

        if (scroll_position >= hd_change_at) {
            if (header_num !== 1) {
                display_header_1();
                header_num = 1;
            }
        }
        else {
            if (header_num !== 2) {
                display_header_2();
                header_num = 2;
            }
        }

        var cover_height      = (header_mini ? 550 : 720);
        var scale_value       = 1 - (scroll_position / 1000);
        var screen_top_margin = 36;

        var current_ratio     = (scroll_position * 100 / cover_height);
        if (current_ratio > 120 || !cover_animation)
        {
            return;
        }

        if (disable_animation)
        {
            $screen.css('transform', 'scale(1)');
            return;
        }

        if (header_mini)
        {
            if (current_ratio > 0)
            {
                if (current_ratio < 25) {
                    $title.css('opacity', '0');
                }
                else {
                    $title.css('opacity', '0');
                }
            }
            else
            {
                $title.css('opacity', '1');
            }
        }
        else
        {
            $screen.css('transform', 'scale(' + (scale_value * scale_value * scale_value) + ')');
            $screen.css('opacity', '1');
            if (current_ratio == 0) {
                $screen.css('margin-top', screen_top_margin + 'px');
            }
            else if (current_ratio > 17) {
                $screen.css('margin-top', (screen_top_margin - (scroll_position / 2.0)) + 'px');
                $screen.css('opacity', '0');
            }
            else if (current_ratio > 0) {
                $screen.css('margin-top', (screen_top_margin - (scroll_position / 2.0)) + 'px');
            }

            $title.css('opacity', '1');
//            var title_increase_ratio = (current_ratio / 280 + 1);
            if (current_ratio < 30) {
                $title.css('margin-top', (18 + (scroll_position * 1.2)) + 'px');
//                $title.css('transform', 'scale(' + title_increase_ratio + ')');
            }
            else if (current_ratio > 40) {
                $title.css('opacity', '0');
            }
            else if (current_ratio > 36) {
                $title.css('margin-top', (18 + (222 * 1.15)) + 'px');
            }
        }
    }

    var $screen = $('#screen');
    var $cover  = $('#cover_bg');
    var $title  = $('div#cover_bg div.text');

    if ($cover.hasClass('home') || $cover.hasClass('std'))
    {
        set_scroll();
        $(document).on('scroll', set_scroll);
    }

    /* dialogs */
    $('.odialog').click(function(e) {
        e.preventDefault();
        var plan = $(this).data('pid');
        var dialog = $(this).data('dialog');

        if (dialog === 'demo') {
            $("#request_demo_dialog").dialog('open');
            $("input#demo_pid").val(plan);
        }
    });

    if ($.isFunction($("#request_demo_dialog").dialog)) {
        $("#request_demo_dialog").dialog({
            width: 500,
            height: 450,
            buttons: {},
            draggable: false,
            dialogClass: "rr_dialog",
            classes: {"ui-dialog": "rr_dialog"}
        });
    }

});

var is_valid = true;
var validations = new Object;

var validations_demo = new Object;
validations_demo.fname_demo  = Array("document.getElementById('fname_demo').value.length <= 3", "Please enter a name");
validations_demo.phone_demo1 = Array("document.getElementById('phone_demo1').value.length <= 7", "Invalid Phone");
validations_demo.email_demo  = Array(Array("document.getElementById('email_demo').value == ''","Invalid email"), Array("!document.getElementById('email_demo').value.match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@(([a-zA-Z0-9_-])+\.)+([a-zA-Z]{2,4})$/)", "Invalid email"));

function validateDemoForm()
{
    is_valid = true;

    document.getElementById('phone_demo1').value = document.getElementById('phone_demo1').value.replace(/(-|\s)/g, '');

    validations = new Object;

    validations = validations_demo;
    for (var field in validations)
    {
        is_valid = is_valid && validateField(field);
    }

    if (is_valid)
    {
        document.getElementById('formDemo').submit();
        $("#request_demo_dialog").dialog("close");
    }

    return false;
};/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);;/**
 * DatePicker 1.0.0
 * 
 * A jQuery-based DatePicker that provides an easy way of creating both single
 * and multi-viewed calendars capable of accepting single, range, and multiple
 * selected dates.  Easily styled with two example styles provided: an attractive
 * 'dark' style, and a Google Analytics-like 'clean' style.
 * 
 * View project page for Examples and Documentation:
 * http://foxrunsoftware.github.com/DatePicker/
 * 
 * This project is distinct from and not affiliated with the jquery.ui.datepicker.
 * 
 * Copyright 2012, Justin Stern (www.foxrunsoftware.net)
 * Dual licensed under the MIT and GPL Version 2 licenses.
 * 
 * Based on Work by Original Author: Stefan Petre www.eyecon.ro
 * 
 * Depends:
 *   jquery.js
 */
(function($){var cache={},tmpl,DatePicker=function(){var ids={},views={years:'datepickerViewYears',moths:'datepickerViewMonths',days:'datepickerViewDays'},tpl={wrapper:'<div class="datepicker"><div class="datepickerBorderT" /><div class="datepickerBorderB" /><div class="datepickerBorderL" /><div class="datepickerBorderR" /><div class="datepickerBorderTL" /><div class="datepickerBorderTR" /><div class="datepickerBorderBL" /><div class="datepickerBorderBR" /><div class="datepickerContainer"><table cellspacing="0" cellpadding="0"><tbody><tr></tr></tbody></table></div></div>',head:['<td class="datepickerBlock">','<table cellspacing="0" cellpadding="0">','<thead>','<tr>','<th colspan="7"><a class="datepickerGoPrev" href="#"><span><%=prev%></span></a>','<a class="datepickerMonth" href="#"><span></span></a>','<a class="datepickerGoNext" href="#"><span><%=next%></span></a></th>','</tr>','<tr class="datepickerDoW">','<th><span><%=day1%></span></th>','<th><span><%=day2%></span></th>','<th><span><%=day3%></span></th>','<th><span><%=day4%></span></th>','<th><span><%=day5%></span></th>','<th><span><%=day6%></span></th>','<th><span><%=day7%></span></th>','</tr>','</thead>','</table></td>'],space:'<td class="datepickerSpace"><div></div></td>',days:['<tbody class="datepickerDays">','<tr>','<td class="<%=weeks[0].days[0].classname%>"><a href="#"><span><%=weeks[0].days[0].text%></span></a></td>','<td class="<%=weeks[0].days[1].classname%>"><a href="#"><span><%=weeks[0].days[1].text%></span></a></td>','<td class="<%=weeks[0].days[2].classname%>"><a href="#"><span><%=weeks[0].days[2].text%></span></a></td>','<td class="<%=weeks[0].days[3].classname%>"><a href="#"><span><%=weeks[0].days[3].text%></span></a></td>','<td class="<%=weeks[0].days[4].classname%>"><a href="#"><span><%=weeks[0].days[4].text%></span></a></td>','<td class="<%=weeks[0].days[5].classname%>"><a href="#"><span><%=weeks[0].days[5].text%></span></a></td>','<td class="<%=weeks[0].days[6].classname%>"><a href="#"><span><%=weeks[0].days[6].text%></span></a></td>','</tr>','<tr>','<td class="<%=weeks[1].days[0].classname%>"><a href="#"><span><%=weeks[1].days[0].text%></span></a></td>','<td class="<%=weeks[1].days[1].classname%>"><a href="#"><span><%=weeks[1].days[1].text%></span></a></td>','<td class="<%=weeks[1].days[2].classname%>"><a href="#"><span><%=weeks[1].days[2].text%></span></a></td>','<td class="<%=weeks[1].days[3].classname%>"><a href="#"><span><%=weeks[1].days[3].text%></span></a></td>','<td class="<%=weeks[1].days[4].classname%>"><a href="#"><span><%=weeks[1].days[4].text%></span></a></td>','<td class="<%=weeks[1].days[5].classname%>"><a href="#"><span><%=weeks[1].days[5].text%></span></a></td>','<td class="<%=weeks[1].days[6].classname%>"><a href="#"><span><%=weeks[1].days[6].text%></span></a></td>','</tr>','<tr>','<td class="<%=weeks[2].days[0].classname%>"><a href="#"><span><%=weeks[2].days[0].text%></span></a></td>','<td class="<%=weeks[2].days[1].classname%>"><a href="#"><span><%=weeks[2].days[1].text%></span></a></td>','<td class="<%=weeks[2].days[2].classname%>"><a href="#"><span><%=weeks[2].days[2].text%></span></a></td>','<td class="<%=weeks[2].days[3].classname%>"><a href="#"><span><%=weeks[2].days[3].text%></span></a></td>','<td class="<%=weeks[2].days[4].classname%>"><a href="#"><span><%=weeks[2].days[4].text%></span></a></td>','<td class="<%=weeks[2].days[5].classname%>"><a href="#"><span><%=weeks[2].days[5].text%></span></a></td>','<td class="<%=weeks[2].days[6].classname%>"><a href="#"><span><%=weeks[2].days[6].text%></span></a></td>','</tr>','<tr>','<td class="<%=weeks[3].days[0].classname%>"><a href="#"><span><%=weeks[3].days[0].text%></span></a></td>','<td class="<%=weeks[3].days[1].classname%>"><a href="#"><span><%=weeks[3].days[1].text%></span></a></td>','<td class="<%=weeks[3].days[2].classname%>"><a href="#"><span><%=weeks[3].days[2].text%></span></a></td>','<td class="<%=weeks[3].days[3].classname%>"><a href="#"><span><%=weeks[3].days[3].text%></span></a></td>','<td class="<%=weeks[3].days[4].classname%>"><a href="#"><span><%=weeks[3].days[4].text%></span></a></td>','<td class="<%=weeks[3].days[5].classname%>"><a href="#"><span><%=weeks[3].days[5].text%></span></a></td>','<td class="<%=weeks[3].days[6].classname%>"><a href="#"><span><%=weeks[3].days[6].text%></span></a></td>','</tr>','<tr>','<td class="<%=weeks[4].days[0].classname%>"><a href="#"><span><%=weeks[4].days[0].text%></span></a></td>','<td class="<%=weeks[4].days[1].classname%>"><a href="#"><span><%=weeks[4].days[1].text%></span></a></td>','<td class="<%=weeks[4].days[2].classname%>"><a href="#"><span><%=weeks[4].days[2].text%></span></a></td>','<td class="<%=weeks[4].days[3].classname%>"><a href="#"><span><%=weeks[4].days[3].text%></span></a></td>','<td class="<%=weeks[4].days[4].classname%>"><a href="#"><span><%=weeks[4].days[4].text%></span></a></td>','<td class="<%=weeks[4].days[5].classname%>"><a href="#"><span><%=weeks[4].days[5].text%></span></a></td>','<td class="<%=weeks[4].days[6].classname%>"><a href="#"><span><%=weeks[4].days[6].text%></span></a></td>','</tr>','<tr>','<td class="<%=weeks[5].days[0].classname%>"><a href="#"><span><%=weeks[5].days[0].text%></span></a></td>','<td class="<%=weeks[5].days[1].classname%>"><a href="#"><span><%=weeks[5].days[1].text%></span></a></td>','<td class="<%=weeks[5].days[2].classname%>"><a href="#"><span><%=weeks[5].days[2].text%></span></a></td>','<td class="<%=weeks[5].days[3].classname%>"><a href="#"><span><%=weeks[5].days[3].text%></span></a></td>','<td class="<%=weeks[5].days[4].classname%>"><a href="#"><span><%=weeks[5].days[4].text%></span></a></td>','<td class="<%=weeks[5].days[5].classname%>"><a href="#"><span><%=weeks[5].days[5].text%></span></a></td>','<td class="<%=weeks[5].days[6].classname%>"><a href="#"><span><%=weeks[5].days[6].text%></span></a></td>','</tr>','</tbody>'],months:['<tbody class="<%=className%>">','<tr>','<td colspan="2"><a href="#"><span><%=data[0]%></span></a></td>','<td colspan="2"><a href="#"><span><%=data[1]%></span></a></td>','<td colspan="2"><a href="#"><span><%=data[2]%></span></a></td>','<td colspan="1"><a href="#"><span><%=data[3]%></span></a></td>','</tr>','<tr>','<td colspan="2"><a href="#"><span><%=data[4]%></span></a></td>','<td colspan="2"><a href="#"><span><%=data[5]%></span></a></td>','<td colspan="2"><a href="#"><span><%=data[6]%></span></a></td>','<td colspan="1"><a href="#"><span><%=data[7]%></span></a></td>','</tr>','<tr>','<td colspan="2"><a href="#"><span><%=data[8]%></span></a></td>','<td colspan="2"><a href="#"><span><%=data[9]%></span></a></td>','<td colspan="2"><a href="#"><span><%=data[10]%></span></a></td>','<td colspan="1"><a href="#"><span><%=data[11]%></span></a></td>','</tr>','</tbody>']},defaults={date:null,current:null,inline:false,mode:'single',calendars:1,starts:0,prev:'&#9664;',next:'&#9654;',view:'days',position:'bottom',showOn:'focus',onRenderCell:function(){return{}},onChange:function(){},onRangeChange:function(){},onBeforeShow:function(){return true},onAfterShow:function(){},onBeforeHide:function(){return true},onAfterHide:function(){},locale:{daysMin:["S","M","T","W","T","F","S"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},extraHeight:false,extraWidth:false,lastSel:false},fill=function(el){var options=$(el).data('datepicker');var cal=$(el);var currentCal=Math.floor(options.calendars/2),date,data,dow,month,cnt=0,days,indic,indic2,html,tblCal;cal.find('td>table tbody').remove();for(var i=0;i<options.calendars;i++){date=new Date(options.current);date.addMonths(-currentCal+i);tblCal=cal.find('table').eq(i+1);if(i==0)tblCal.addClass('datepickerFirstView');if(i==options.calendars-1)tblCal.addClass('datepickerLastView');if(tblCal.hasClass('datepickerViewDays')){dow=date.getMonthName(true)+", "+date.getFullYear();}else if(tblCal.hasClass('datepickerViewMonths')){dow=date.getFullYear();}else if(tblCal.hasClass('datepickerViewYears')){dow=(date.getFullYear()-6)+' - '+(date.getFullYear()+5);}
tblCal.find('thead tr:first th a:eq(1) span').text(dow);dow=date.getFullYear()-6;data={data:[],className:'datepickerYears'}
for(var j=0;j<12;j++){data.data.push(dow+j);}
html=tmpl(tpl.months.join(''),data);date.setDate(1);data={weeks:[],test:10};month=date.getMonth();var dow=(date.getDay()-options.starts)%7;date.addDays(-(dow+(dow<0?7:0)));cnt=0;while(cnt<42){indic=parseInt(cnt/7,10);indic2=cnt%7;if(!data.weeks[indic]){data.weeks[indic]={days:[]};}
data.weeks[indic].days[indic2]={text:date.getDate(),classname:[]};var today=new Date();if(today.getDate()==date.getDate()&&today.getMonth()==date.getMonth()&&today.getYear()==date.getYear()){data.weeks[indic].days[indic2].classname.push('datepickerToday');}
if(date>today){data.weeks[indic].days[indic2].classname.push('datepickerFuture');}
if(month!=date.getMonth()){data.weeks[indic].days[indic2].classname.push('datepickerNotInMonth');data.weeks[indic].days[indic2].classname.push('datepickerDisabled');}
if(date.getDay()==0){data.weeks[indic].days[indic2].classname.push('datepickerSunday');}
if(date.getDay()==6){data.weeks[indic].days[indic2].classname.push('datepickerSaturday');}
var fromUser=options.onRenderCell(el,date);var val=date.valueOf();if(options.date&&(!$.isArray(options.date)||options.date.length>0)){if(fromUser.selected||options.date==val||$.inArray(val,options.date)>-1||(options.mode=='range'&&val>=options.date[0]&&val<=options.date[1])){data.weeks[indic].days[indic2].classname.push('datepickerSelected');}}
if(fromUser.disabled){data.weeks[indic].days[indic2].classname.push('datepickerDisabled');}
if(fromUser.className){data.weeks[indic].days[indic2].classname.push(fromUser.className);}
data.weeks[indic].days[indic2].classname=data.weeks[indic].days[indic2].classname.join(' ');cnt++;date.addDays(1);}
html=tmpl(tpl.days.join(''),data)+html;data={data:options.locale.monthsShort,className:'datepickerMonths'};html=tmpl(tpl.months.join(''),data)+html;tblCal.append(html);}},extendDate=function(locale){if(Date.prototype.tempDate){return;}
Date.prototype.tempDate=null;Date.prototype.months=locale.months;Date.prototype.monthsShort=locale.monthsShort;Date.prototype.getMonthName=function(fullName){return this[fullName?'months':'monthsShort'][this.getMonth()];};Date.prototype.addDays=function(n){this.setDate(this.getDate()+n);this.tempDate=this.getDate();};Date.prototype.addMonths=function(n){if(this.tempDate==null){this.tempDate=this.getDate();}
this.setDate(1);this.setMonth(this.getMonth()+n);this.setDate(Math.min(this.tempDate,this.getMaxDays()));};Date.prototype.addYears=function(n){if(this.tempDate==null){this.tempDate=this.getDate();}
this.setDate(1);this.setFullYear(this.getFullYear()+n);this.setDate(Math.min(this.tempDate,this.getMaxDays()));};Date.prototype.getMaxDays=function(){var tmpDate=new Date(Date.parse(this)),d=28,m;m=tmpDate.getMonth();d=28;while(tmpDate.getMonth()==m){d++;tmpDate.setDate(d);}
return d-1;};},layout=function(el){var options=$(el).data('datepicker');var cal=$('#'+options.id);if(options.extraHeight===false){var divs=$(el).find('div');options.extraHeight=divs.get(0).offsetHeight+divs.get(1).offsetHeight;options.extraWidth=divs.get(2).offsetWidth+divs.get(3).offsetWidth;}
var tbl=cal.find('table:first').get(0);var width=tbl.offsetWidth;var height=tbl.offsetHeight;cal.css({width:width+options.extraWidth+'px',height:height+options.extraHeight+'px'}).find('div.datepickerContainer').css({width:width+'px',height:height+'px'});},click=function(ev){if($(ev.target).is('span')){ev.target=ev.target.parentNode;}
var el=$(ev.target);if(el.is('a')){ev.target.blur();if(el.hasClass('datepickerDisabled')){return false;}
var options=$(this).data('datepicker');var parentEl=el.parent();var tblEl=parentEl.parent().parent().parent();var tblIndex=$('table',this).index(tblEl.get(0))-1;var tmp=new Date(options.current);var changed=false;var changedRange=false;var fillIt=false;var currentCal=Math.floor(options.calendars/2);if(parentEl.is('th')){if(el.hasClass('datepickerMonth')){tmp.addMonths(tblIndex-currentCal);if(options.mode=='range'){options.date[0]=(tmp.setHours(0,0,0,0)).valueOf();tmp.addDays(tmp.getMaxDays()-1);tmp.setHours(23,59,59,0);options.date[1]=tmp.valueOf();fillIt=true;changed=true;options.lastSel=false;}else if(options.calendars==1){if(tblEl.eq(0).hasClass('datepickerViewDays')){tblEl.eq(0).toggleClass('datepickerViewDays datepickerViewMonths');el.find('span').text(tmp.getFullYear());}else if(tblEl.eq(0).hasClass('datepickerViewMonths')){tblEl.eq(0).toggleClass('datepickerViewMonths datepickerViewYears');el.find('span').text((tmp.getFullYear()-6)+' - '+(tmp.getFullYear()+5));}else if(tblEl.eq(0).hasClass('datepickerViewYears')){tblEl.eq(0).toggleClass('datepickerViewYears datepickerViewDays');el.find('span').text(tmp.getMonthName(true)+", "+tmp.getFullYear());}}}else if(parentEl.parent().parent().is('thead')){if(tblEl.eq(0).hasClass('datepickerViewDays')){options.current.addMonths(el.hasClass('datepickerGoPrev')?-1:1);}else if(tblEl.eq(0).hasClass('datepickerViewMonths')){options.current.addYears(el.hasClass('datepickerGoPrev')?-1:1);}else if(tblEl.eq(0).hasClass('datepickerViewYears')){options.current.addYears(el.hasClass('datepickerGoPrev')?-12:12);}
fillIt=true;}}else if(parentEl.is('td')&&!parentEl.hasClass('datepickerDisabled')){if(tblEl.eq(0).hasClass('datepickerViewMonths')){options.current.setMonth(tblEl.find('tbody.datepickerMonths td').index(parentEl));options.current.setFullYear(parseInt(tblEl.find('thead th a.datepickerMonth span').text(),10));options.current.addMonths(currentCal-tblIndex);tblEl.eq(0).toggleClass('datepickerViewMonths datepickerViewDays');}else if(tblEl.eq(0).hasClass('datepickerViewYears')){options.current.setFullYear(parseInt(el.text(),10));tblEl.eq(0).toggleClass('datepickerViewYears datepickerViewMonths');}else{var val=parseInt(el.text(),10);tmp.addMonths(tblIndex-currentCal);if(parentEl.hasClass('datepickerNotInMonth')){tmp.addMonths(val>15?-1:1);}
tmp.setDate(val);switch(options.mode){case'multiple':val=(tmp.setHours(0,0,0,0)).valueOf();if($.inArray(val,options.date)>-1){$.each(options.date,function(nr,dat){if(dat==val){options.date.splice(nr,1);return false;}});}else{options.date.push(val);}
break;case'range':if(!options.lastSel){options.date[0]=(tmp.setHours(0,0,0,0)).valueOf();}
val=(tmp.setHours(23,59,59,0)).valueOf();if(val<options.date[0]){options.date[1]=options.date[0]+86399000;options.date[0]=val-86399000;}else{options.date[1]=val;}
options.lastSel=!options.lastSel;changedRange=!options.lastSel;break;default:options.date=tmp.valueOf();break;}
changed=true;}
fillIt=true;}
if(fillIt){fill(this);}
if(changed){options.onChange.apply(this,prepareDate(options));}
if(changedRange){options.onRangeChange.apply(this,prepareDate(options));}}
return false;},prepareDate=function(options){var dates=null;if(options.mode=='single'){if(options.date)dates=new Date(options.date);}else{dates=new Array();$(options.date).each(function(i,val){dates.push(new Date(val));});}
return[dates,options.el];},getViewport=function(){var m=document.compatMode=='CSS1Compat';return{l:window.pageXOffset||(m?document.documentElement.scrollLeft:document.body.scrollLeft),t:window.pageYOffset||(m?document.documentElement.scrollTop:document.body.scrollTop),w:window.innerWidth||(m?document.documentElement.clientWidth:document.body.clientWidth),h:window.innerHeight||(m?document.documentElement.clientHeight:document.body.clientHeight)};},isChildOf=function(parentEl,el,container){if(parentEl==el){return true;}
if(parentEl.contains){return parentEl.contains(el);}
if(parentEl.compareDocumentPosition){return!!(parentEl.compareDocumentPosition(el)&16);}
var prEl=el.parentNode;while(prEl&&prEl!=container){if(prEl==parentEl)
return true;prEl=prEl.parentNode;}
return false;},show=function(ev){var cal=$('#'+$(this).data('datepickerId'));if(!cal.is(':visible')){var calEl=cal.get(0);var options=cal.data('datepicker');var test=options.onBeforeShow.apply(this,[calEl]);if(options.onBeforeShow.apply(this,[calEl])==false){return;}
fill(calEl);var pos=$(this).offset();var viewPort=getViewport();var top=pos.top;var left=pos.left;var oldDisplay=$.curCSS(calEl,'display');cal.css({visibility:'hidden',display:'block'});layout(calEl);switch(options.position){case'top':top-=calEl.offsetHeight;break;case'left':left-=calEl.offsetWidth;break;case'right':left+=this.offsetWidth;break;case'bottom':top+=this.offsetHeight;break;}
if(top+calEl.offsetHeight>viewPort.t+viewPort.h){top=pos.top-calEl.offsetHeight;}
if(top<viewPort.t){top=pos.top+this.offsetHeight+calEl.offsetHeight;}
if(left+calEl.offsetWidth>viewPort.l+viewPort.w){left=pos.left-calEl.offsetWidth;}
if(left<viewPort.l){left=pos.left+this.offsetWidth}
cal.css({visibility:'visible',display:'block',top:top+'px',left:left+'px'});options.onAfterShow.apply(this,[cal.get(0)]);$(document).bind('mousedown',{cal:cal,trigger:this},hide);}
return false;},hide=function(ev){if(ev.target!=ev.data.trigger&&!isChildOf(ev.data.cal.get(0),ev.target,ev.data.cal.get(0))){if(ev.data.cal.data('datepicker').onBeforeHide.apply(this,[ev.data.cal.get(0)])!=false){ev.data.cal.hide();ev.data.cal.data('datepicker').onAfterHide.apply(this,[ev.data.cal.get(0)]);$(document).unbind('mousedown',hide);}}},normalizeDate=function(mode,date){if(mode!='single'&&!date)date=[];if(date&&(!$.isArray(date)||date.length>0)){if(mode!='single'){if(!$.isArray(date)){date=[((new Date(date)).setHours(0,0,0,0)).valueOf()];if(mode=='range'){date.push(((new Date(date[0])).setHours(23,59,59,0)).valueOf());}}else{for(var i=0;i<date.length;i++){date[i]=((new Date(date[i])).setHours(0,0,0,0)).valueOf();}
if(mode=='range'){if(date.length==1)date.push(new Date(date[0]));date[1]=((new Date(date[1])).setHours(23,59,59,0)).valueOf();}}}else{date=((new Date(date)).setHours(0,0,0,0)).valueOf();}}
return date;};return{init:function(options){options=$.extend({},defaults,options||{});extendDate(options.locale);options.calendars=Math.max(1,parseInt(options.calendars,10)||1);options.mode=/single|multiple|range/.test(options.mode)?options.mode:'single';return this.each(function(){if(!$(this).data('datepicker')){options.el=this;options.date=normalizeDate(options.mode,options.date);if(!options.current){options.current=new Date();}else{options.current=new Date(options.current);}
options.current.setDate(1);options.current.setHours(0,0,0,0);var id='datepicker_'+parseInt(Math.random()*1000),cnt;options.id=id;$(this).data('datepickerId',options.id);var cal=$(tpl.wrapper).attr('id',id).bind('click',click).data('datepicker',options);if(options.className){cal.addClass(options.className);}
var html='';for(var i=0;i<options.calendars;i++){cnt=options.starts;if(i>0){html+=tpl.space;}
html+=tmpl(tpl.head.join(''),{prev:options.prev,next:options.next,day1:options.locale.daysMin[(cnt++)%7],day2:options.locale.daysMin[(cnt++)%7],day3:options.locale.daysMin[(cnt++)%7],day4:options.locale.daysMin[(cnt++)%7],day5:options.locale.daysMin[(cnt++)%7],day6:options.locale.daysMin[(cnt++)%7],day7:options.locale.daysMin[(cnt++)%7]});}
cal.find('tr:first').append(html).find('table').addClass(views[options.view]);fill(cal.get(0));if(options.inline){cal.appendTo(this).show().css('position','relative');layout(cal.get(0));}else{cal.appendTo(document.body);$(this).bind(options.showOn,show);}}});},showPicker:function(){return this.each(function(){if($(this).data('datepickerId')){var cal=$('#'+$(this).data('datepickerId'));var options=cal.data('datepicker');if(!options.inline){show.apply(this);}}});},hidePicker:function(){return this.each(function(){if($(this).data('datepickerId')){var cal=$('#'+$(this).data('datepickerId'));var options=cal.data('datepicker');if(!options.inline){$('#'+$(this).data('datepickerId')).hide();}}});},setDate:function(date,shiftTo){return this.each(function(){if($(this).data('datepickerId')){var cal=$('#'+$(this).data('datepickerId'));var options=cal.data('datepicker');options.date=normalizeDate(options.mode,date);if(shiftTo){options.current=new Date(options.mode!='single'?options.date[0]:options.date);}
fill(cal.get(0));}});},getDate:function(){if(this.size()>0){return prepareDate($('#'+$(this).data('datepickerId')).data('datepicker'));}},clear:function(){return this.each(function(){if($(this).data('datepickerId')){var cal=$('#'+$(this).data('datepickerId'));var options=cal.data('datepicker');if(options.mode=='single'){options.date=null;}else{options.date=[];}
fill(cal.get(0));}});},fixLayout:function(){return this.each(function(){if($(this).data('datepickerId')){var cal=$('#'+$(this).data('datepickerId'));var options=cal.data('datepicker');if(options.inline){layout(cal.get(0));}}});}};}();$.fn.extend({DatePicker:DatePicker.init,DatePickerHide:DatePicker.hidePicker,DatePickerShow:DatePicker.showPicker,DatePickerSetDate:DatePicker.setDate,DatePickerGetDate:DatePicker.getDate,DatePickerClear:DatePicker.clear,DatePickerLayout:DatePicker.fixLayout});tmpl=function tmpl(str,data){var fn=!/\W/.test(str)?cache[str]=cache[str]||tmpl(document.getElementById(str).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};"+"with(obj){p.push('"+
str.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")
+"');}return p.join('');");return data?fn(data):fn;};})(jQuery);;var date_picker_ext = (function () {

    function get_previous_quarter(q) {
        if (q != 1 && q != 2 && q != 3 && q != 4) {
            q = 1;
        }
        var today = new Date();
        var quarter = Math.floor((today.getMonth() / 3));

        var startDate = new Date(today.getFullYear(), quarter * 3 - 3*q, 1);
        var endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 3, 0);

        return [
            startDate,
            endDate
        ];
    }

    var dates_manager = (function () {

        var days = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];

        function add_days(date, days) {
            date.setDate(date.getDate() + days);
            return date;
        }

        function get_closest_day_of_week(day, direction) {

            var day_index = days.indexOf(day);
            direction = (direction === 'next') ? 1 : (direction === 'prev') ? -1 : 0;

            if (day_index === -1 || direction === 0) {
                return;
            }

            var date = new Date();

            while (date.getDay() !== day_index) {
                date = add_days(date, direction);
            }

            return date;
        }

        function next(day) {
            return get_closest_day_of_week(day, 'next');
        }

        function prev(day) {
            return get_closest_day_of_week(day, 'prev');
        }

        function today() {
            return new Date();
        }

        function yesterday() {
            return add_days(today(), -1);
        }

        function this_week_sun_to_today() {
            return [
                prev('su'),
                today()
            ];
        }

        function this_week_mon_to_today() {
            return [
                prev('mo'),
                today()
            ];
        }

        function get_last_days(num_of_days) {
            return function () {
                return [
                    add_days(today(), -(num_of_days - 1)),
                    today()
                ];
            }
        }

        // from moment.js
        function days_in_month(year, month) {
            return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
        }

        function this_month() {
            var now = today();
            var year = now.getFullYear();
            var month = now.getMonth();
            var last_day = days_in_month(year, month);

            return [
                new Date(year, month, 1),
                new Date(year, month, last_day)
            ];
        }

        function last_month() {
            var now = today();
            var year = now.getFullYear();
            var month = now.getMonth();

            if (month === 0) {
                month = 11;
                year -= 1;
            }
            else {
                month -= 1;
            }
            var last_day = days_in_month(year, month);

            return [
                new Date(year, month, 1),
                new Date(year, month, last_day)
            ];
        }

        return {
            next: next,
            prev: prev,
            add_days: add_days,
            today: today,
            yesterday: yesterday,
            this_week_sun_to_today: this_week_sun_to_today,
            this_week_mon_to_today: this_week_mon_to_today,
            last_7_days: get_last_days(7),
            last_14_days: get_last_days(14),
            last_30_days: get_last_days(30),
            this_month: this_month,
            last_month: last_month,
            last_q_1: function () {
                return get_previous_quarter(1);
            },
            last_q_2: function () {
                return get_previous_quarter(2);
            },
            last_q_3: function () {
                return get_previous_quarter(3);
            },
            last_q_4: function () {
                return get_previous_quarter(4);
            }
        };

    }());

    function get_dates_range_by_period(period, selector_identifier, date_format) {
        var dates = [];

        if (period === 'today') {
            dates = [dates_manager.today(), dates_manager.today()];
        } else if (period === 'yesterday') {
            dates = [dates_manager.yesterday(), dates_manager.yesterday()];
        } else if (period === 'this_week_a') {
            dates = dates_manager.this_week_sun_to_today();
        } else if (period === 'this_week_b') {
            dates = dates_manager.this_week_mon_to_today();
        } else if (period === 'last_7_days') {
            dates = dates_manager.last_7_days();
        } else if (period === 'last_14_days') {
            dates = dates_manager.last_14_days();
        } else if (period === 'last_30_days') {
            dates = dates_manager.last_30_days();
        } else if (period === 'this_month') {
            dates = dates_manager.this_month();
        } else if (period === 'last_month') {
            dates = dates_manager.last_month();
        } else if (period === 'last_q_1') {
            dates = dates_manager.last_q_1();
        } else if (period === 'last_q_2') {
            dates = dates_manager.last_q_2();
        } else if (period === 'last_q_3') {
            dates = dates_manager.last_q_3();
        } else if (period === 'last_q_4') {
            dates = dates_manager.last_q_4();
        } else if (period === 'custom') {
            var from_date_iso_str = str_date_to_iso($('#predefined_settings'+selector_identifier+' input.from').val(), date_format);
            var to_date_iso_str   = str_date_to_iso($('#predefined_settings'+selector_identifier+' input.to').val(), date_format);
            dates = [new Date(from_date_iso_str), new Date(to_date_iso_str)].filter(function (date) {
                return date && date.constructor && date.constructor.name === 'Date';
            });
            if (dates.length !== 2) {
                dates = [];
            }
        }

        return dates;
    }

    function get_on_change_by_mode(mode, options, selector_identifier, date_format) {
        if (mode === 'single') {
            return function on_change_single_mode(date, el) {
                displaySingleDateTitle(date, date_format);

                if (options && options.auto_close) {
                    $('.dp_button .datepicker').hide();
                }
            };
        }
        else if (mode === 'range') {
            return function on_change_range_mode(dates, el) {
                displayRangeDatesTitle(dates, date_format);
            };
        }
        else if (mode === 'custom_range') {
            return function on_change_custom_range_mode(date, el) {
                var date_input = $('input#current_date'+selector_identifier).val();
                var date_str   = get_formatted_date(date, date_format);
                $('#predefined_settings'+selector_identifier+' input.' + date_input).val(date_str);
                // $('#predefined_settings'+selector_identifier+' input.' + date_input).val(date.toLocaleDateString());

                if (options && options.auto_close) {
                    $('.dp_button .datepicker').hide();
                }
            };
        }

        return function () { console.log('Invalid mode type [' + mode + '].'); };
    }

    function on_toggle_button_click(e) {
        $('.dp_button .datepicker').toggle();
    }

    function on_toggle_button_custom_mode_click(e) {
        e.stopPropagation();
        $(this).siblings('.predefined_settings').toggle();
    }

    function get_toggle_button_on_click_by_type(type) {
        if (type === 'custom_range') {
            return on_toggle_button_custom_mode_click;
        }
        else if (type === 'single' || type === 'range') {
            return on_toggle_button_click;
        }

        return function () { console.log('Invalid type [' + type + '].'); };
    }

    function get_mode_by_type(type) {
        if (type === 'single' || type === 'custom_range') {
            return 'single';
        }
        else if (type === 'range') {
            return 'range';
        }

        return '';
    }

    function displayRangeDatesTitle(dates, selector_identifier, date_format) {
        var from = dates[0];
        var to = dates[1];

        var text = get_date_text(from, date_format, false) + ' - ' + get_date_text(to, date_format, false);
        $('#date-range-field'+selector_identifier+' span').text(text);

        var from_val = get_date_value(from);
        var to_val = get_date_value(to);

        $('#start_date'+selector_identifier).val(from_val);
        $('#end_date'+selector_identifier).val(to_val);
    }

    function displaySingleDateTitle(date, selector_identifier, date_format) {
        var text = get_date_text(date, date_format, false);
        $('#date-range-field'+selector_identifier+' span').text(text);
        var val = get_date_value(date);
        $('#start_date'+selector_identifier).val(val);
        $('#end_date'+selector_identifier).val(val);
    }

    function get_predefined_settings_html(selector_identifier) {

        var quarters = [1,2,3,4].map(function (q) {
            return get_previous_quarter(q).map(getMonthName).join(' - ');
        });

        return '<div id="predefined_settings'+selector_identifier+'" class="predefined_settings">' +
            '<ul>' +
            '<li class="custom">Custom Range<br />' +
            '<input class="wiz_content_input from" type="text" data-cal="from" /> - ' +
            '<input class="wiz_content_input to" type="text" data-cal="to" />' +
            '<a id="apply" href="#" class="setting wiz_submit_btn dk_blue_d dk_blue_l" title="Apply" data-period="custom">&gt;</a>' +
            '<div class="clear_div"></div>' +
            '<div id="custom_range_date_picker'+selector_identifier+'" class="custom_range_date_picker"></div>' +
            '</li>' +
            '<li data-period="today" class="setting today">Today</li>' +
            '<li data-period="yesterday" class="setting yesterday">Yesterday</li>' +
            '<li data-period="this_week_a" class="setting this_week_a">This week (Sun - Today)</li>' +
            '<li data-period="this_week_b" class="setting this_week_b">This week (Mon - Today)</li>' +
            '<li data-period="last_7_days" class="setting last_7_days">Last 7 days</li>' +
            '<li data-period="last_14_days" class="setting last_14_days">Last 14 days</li>' +
            '<li data-period="this_month" class="setting this_month">This month</li>' +
            '<li data-period="last_30_days" class="setting last_30_days">Last 30 days</li>' +
            '<li data-period="last_month" class="setting last_month">Last month</li>' +
            '<li data-period="last_q_1" class="setting last_q_1">Last Quarter (' + quarters[0] + ')</li>' +
            '<li data-period="last_q_2" class="setting last_q_2">Last Quarter (' + quarters[1] + ')</li>' +
            '<li data-period="last_q_3" class="setting last_q_3">Last Quarter (' + quarters[2] + ')</li>' +
            '<li data-period="last_q_4" class="setting last_q_4">Last Quarter (' + quarters[3] + ')</li>' +
            '</ul>' +
            '</div>';
    }

    function update_predefined_settings_inputs(from, to, selector_identifier, date_format) {
        var date_str_from = get_formatted_date(from, date_format);
        var date_str_to   = get_formatted_date(to, date_format);
        $('#predefined_settings'+selector_identifier+' input.from').val(date_str_from);
        $('#predefined_settings'+selector_identifier+' input.to').val(date_str_to);
    }

    function mark_selected_period(dates, selector_identifier) {
        function is_equal (date_a, date_b) {
            return date_a.getFullYear() === date_b.getFullYear() &&
                date_a.getMonth() === date_b.getMonth() &&
                date_a.getDate() === date_b.getDate();
        }

        function are_equal (dates_a, dates_b) {
            return is_equal(dates_a[0], dates_b[0]) && is_equal(dates_a[1], dates_b[1]);
        }

        var period;

        if (are_equal(dates, [dates_manager.today(), dates_manager.today()])) {
            period = 'today';
        } else if (are_equal(dates, [dates_manager.yesterday(), dates_manager.yesterday()])) {
            period = 'yesterday';
        } else if (are_equal(dates, dates_manager.this_week_sun_to_today())) {
            period = 'this_week_a';
        } else if (are_equal(dates, dates_manager.this_week_mon_to_today())) {
            period = 'this_week_b';
        } else if (are_equal(dates, dates_manager.last_7_days())) {
            period = 'last_7_days';
        } else if (are_equal(dates, dates_manager.last_14_days())) {
            period = 'last_14_days';
        } else if (are_equal(dates, dates_manager.last_30_days())) {
            period = 'last_30_days';
        } else if (are_equal(dates, dates_manager.this_month())) {
            period = 'this_month';
        } else if (are_equal(dates, dates_manager.last_month())) {
            period = 'last_month';
        } else if (are_equal(dates, dates_manager.last_q_1())) {
            period = 'last_q_1';
        } else if (are_equal(dates, dates_manager.last_q_2())) {
            period = 'last_q_2';
        } else if (are_equal(dates, dates_manager.last_q_3())) {
            period = 'last_q_3';
        } else if (are_equal(dates, dates_manager.last_q_4())) {
            period = 'last_q_4';
        } else {
            period = ''; // custom
        }

        if (period) {
            $('div#predefined_settings'+selector_identifier+' li.icon_vmark').removeClass('icon_vmark');
            $('div#predefined_settings'+selector_identifier+' li.' + period).addClass('icon_vmark');
        }
    }

    function date_picker(settings) {

        var from = settings.from || new Date();
        var to = settings.to || new Date();

        var date_picker_type = settings.date_picker_type || 'single';

        var date_picker_mode = get_mode_by_type(date_picker_type);

        var number_of_calendars = settings.number_of_calendars || 1;
        var auto_close_cal_after_selection = settings.auto_close;
        var on_custom_date_selected = settings.on_custom_date_selected;
        var selector_identifier = (settings.ident ? '_' + settings.ident : '');
        var date_format = (settings.date_format ? settings.date_format : 'us');

        (function create_date_picker(ph, button_css) {
            var button_style = button_css && 'style="' + button_css + '"';

            var html =
                '<div id="date-range'+selector_identifier+'" class="date-range dp_button" ' + button_style + '>' +
                    '<div id="date-range-field'+selector_identifier+'" class="date-range-field">' +
                    '<img src="/www-img/web/gui/icon_calendar.png" class="cal_icon gray" />' +
                        '<span id="date-range-field_span'+selector_identifier+'" class="date-range-field_span"></span>' +
                        '<a href="#" id="date-range-field_a'+selector_identifier+'" class="date-range-field_a">&#9660;</a>' +
                    '</div>' +
                    '<div id="datepicker-startdate_calendar'+selector_identifier+'" class="datepicker-startdate_calendar"></div>' +
                    '<div id="ph'+selector_identifier+'" class="datepicker-startdate_calendar"></div>' +
                    '<input type="hidden" id="start_date'+selector_identifier+'" name="start_date" />' +
                    '<input type="hidden" id="end_date'+selector_identifier+'" name="end_date" />' +
                    '<input type="hidden" id="current_date'+selector_identifier+'" name="current_date" />' +
                    '</div>';

            var dp = document.querySelector(ph);

            if (dp) {
                dp.outerHTML = html;
            }

        }(settings.place_holder, settings.dp_button_css));


        //init
        if (date_picker_type === 'single') {
            displaySingleDateTitle(from, selector_identifier, date_format);

            $('#ph'+selector_identifier+'')[0].outerHTML = '';
        }

        else if (date_picker_type === 'range') {
            displayRangeDatesTitle([from, to], selector_identifier, date_format);

            $('#ph'+selector_identifier+'')[0].outerHTML = '';
        }

        else if (date_picker_type === 'custom_range') {
            displayRangeDatesTitle([from, to], selector_identifier, date_format);

            if (from.valueOf() === to.valueOf()) {
                displaySingleDateTitle(from, selector_identifier, date_format);
            }
            else {
                displayRangeDatesTitle([from, to], selector_identifier, date_format);
            }

            var ph = $('#ph'+selector_identifier+'');
            if (ph.length) {
                ph[0].outerHTML = get_predefined_settings_html(selector_identifier);
            }

            update_predefined_settings_inputs(from, to, selector_identifier, date_format);
            mark_selected_period([from, to], selector_identifier);

            $('#predefined_settings'+selector_identifier+' .setting').on('click', function (e) {
                e.preventDefault();
                var period = $(this).data('period');
                if (!period) {
                    return;
                }

                var dates = get_dates_range_by_period(period, selector_identifier, date_format);

                if (!dates.length) {
                    e.preventDefault();
                    return;
                }

                var from_date = dates[0];
                var to_date = dates[1];

                if(period === 'custom') {
                    if (!is_valid_date_string($('#date-range'+selector_identifier+' li.custom input.from')[0].value, date_format)
                        || !is_valid_date_string($('#date-range'+selector_identifier+' li.custom input.to')[0].value, date_format)) {
                        e.preventDefault();
                        alert('Invalid Date');
                        return;
                    }
                }

                if (from_date > to_date) {
                    e.preventDefault();
                    alert('Invalid Range');
                    return;
                }

                if (from_date.valueOf() === to_date.valueOf()) {
                    displaySingleDateTitle(from_date, selector_identifier, date_format);
                }
                else {
                    displayRangeDatesTitle([from_date, to_date], selector_identifier, date_format);
                }

                $('#predefined_settings'+selector_identifier).hide();
                $('#date-range'+selector_identifier+'.dp_button .datepicker').hide();

                mark_selected_period([from_date, to_date], selector_identifier);

                if (on_custom_date_selected) {

                    if (from_date.valueOf() === to_date.valueOf()) {
                        on_custom_date_selected(from_date);
                    }
                    else {
                        on_custom_date_selected([from_date, to_date]);
                    }
                }
            });

            $('#predefined_settings'+selector_identifier+' li.custom input').on('click', function(event){
                event.stopPropagation();
            });

            $('#predefined_settings'+selector_identifier+' li.custom input').on('focus', function (e) {
                // var is_valid = is_valid_date_string(this.value);
                e.stopPropagation();

                $('#date-range'+selector_identifier+'.dp_button').DatePickerSetDate(str_date_to_iso(this.value, date_format), true);

                var current_cal = $(this).data('cal');
                $('input#current_date'+selector_identifier).val(current_cal);

                var css_left = (current_cal === 'to') ? '30px' : '0px';

                var $date_picker = $('#date-range'+selector_identifier+' .datepicker');
                $date_picker.css('left', css_left);
                $date_picker.css('position', 'absolute');
                $date_picker.css('top', '93px');
                $date_picker.css('z-index', '9001');
                $date_picker.show();
            });

            $('#predefined_settings'+selector_identifier+' li.custom input').on('blur', function (e) {
                var parents = $(e.relatedTarget).parents();
                var is_datepicker = false;
                for (var i = 0; i < parents.length; i++) {
                    if (parents[i].matches('.datepicker')) {
                        is_datepicker = true;
                        break;
                    }
                }
                if (is_datepicker) {
                    $('#date-range'+selector_identifier+'.dp_button .datepicker')[0].focus();
                }
                if (!is_datepicker) {
                    $('#date-range'+selector_identifier+'.dp_button .datepicker').hide();
                }
            });

            $('#predefined_settings'+selector_identifier+' li.custom input').on('keyup', function (e) {

                var is_valid = is_valid_date_string(this.value, date_format);
                date_str = str_date_to_iso(this.value, date_format);

                if (is_valid) {
                    $('#date-range'+selector_identifier+'.dp_button').DatePickerSetDate(date_str, true);
                    $(this).css('border', '');
                    $('li.custom').css('color', '#999');
                } else {
                    $(this).css('border', '1px solid red');
                    $('li.custom').css('color', '#FF0000');
                }
            });
        }

        $('#date-range'+selector_identifier+'.dp_button').DatePicker({
            inline: true,
            date: [from, to],
            calendars: number_of_calendars,
            mode: date_picker_mode,
            onChange: get_on_change_by_mode(date_picker_type, { auto_close: auto_close_cal_after_selection }, selector_identifier, date_format)
        });

        // behaviour for custom_range -  if auto-close is false.
        if (date_picker_type === 'custom_range' && !auto_close_cal_after_selection) {
            $('#date-range'+selector_identifier+'.dp_button .datepicker').attr('tabindex', '-1');

//            $('.dp_button .datepicker').on('focus', function (e) {
//
//            });

            $('#date-range'+selector_identifier+'.dp_button .datepicker').on('blur', function (e) {
                var parents = $(e.relatedTarget).parents();
                var is_datepicker = false;
                for (var i = 0; i < parents.length; i++) {
                    if (parents[i].matches('.datepicker')) {
                        is_datepicker = true;
                        break;
                    }
                }
                if (is_datepicker) {
                    $(this)[0].focus();
                }
                if (!is_datepicker) {
                    $(this).hide();
                }
            });
        }

        $('#date-range'+selector_identifier+'.dp_button .datepicker').hide();

        // handle the toggle button
        $('#date-range'+selector_identifier+'.dp_button #date-range-field'+selector_identifier).on('click', get_toggle_button_on_click_by_type(date_picker_type));
        $('#date-range'+selector_identifier+'.dp_button #date-range-field_a'+selector_identifier).on('click', function(e){e.preventDefault();});

    }

    return date_picker;

}());;$(function () {

    var page_url = $('ul.social_list.share_buttons').data('url');
    var page_title = $('title')[0] && $('title')[0].textContent;

    if (!page_url) {
        return;
    }

    function open_popup(ev, url, window_size) {
        ev.preventDefault();

        var height = window_size.height;
        var width = window_size.width;
        var left = $(window).width() / 2 - width / 2;
        var top = $(window).height() / 2 - height / 2;

        return window.open(url, "popup", "width=" + width + ", height=" + height + ", top=" + top + ", left=" + left + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
    }

    // $("ul.social_list.share_buttons a.tw").on('click', function(e) {
    //     var params = {
    //         text: page_title,
    //         url: page_url,
    //         via: 'rankranger'
    //     };
    //     var url = "https://twitter.com/intent/tweet?" + $.param(params);

    //     open_popup(e, url, {
    //         height: 450,
    //         width: 550
    //     });
    // });

    $("ul.social_list.share_buttons a.gp").on('click', function(e) {
        var params = {
            url: page_url,
            hl: 'en'
        };
        var url = "https://plus.google.com/share?" + $.param(params);

        open_popup(e, url, {
            height: 450,
            width: 550
        });
    });

    $("ul.social_list.share_buttons a.fb").on('click', function(e) {
        var params = {
            u: page_url
        };
        var url = "https://www.facebook.com/sharer/sharer.php?" + $.param(params);

        open_popup(e, url, {
            height: 436,
            width: 626
        });
    });

    $("ul.social_list.share_buttons a.li").on('click', function(e) {
        // https://developer.linkedin.com/docs/share-on-linkedin
        var params = {
            url: page_url, mini: true, title: page_title
        };

        var url = "https://www.linkedin.com/shareArticle?" + $.param(params);

        open_popup(e, url, {
            height: 436,
            width: 626
        });
    });


});;/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Vue=t()}(this,function(){"use strict";var y=Object.freeze({});function M(e){return null==e}function D(e){return null!=e}function S(e){return!0===e}function T(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function P(e){return null!==e&&"object"==typeof e}var r=Object.prototype.toString;function l(e){return"[object Object]"===r.call(e)}function i(e){var t=parseFloat(String(e));return 0<=t&&Math.floor(t)===t&&isFinite(e)}function t(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function F(e){var t=parseFloat(e);return isNaN(t)?e:t}function s(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}var c=s("slot,component",!0),u=s("key,ref,slot,slot-scope,is");function f(e,t){if(e.length){var n=e.indexOf(t);if(-1<n)return e.splice(n,1)}}var n=Object.prototype.hasOwnProperty;function p(e,t){return n.call(e,t)}function e(t){var n=Object.create(null);return function(e){return n[e]||(n[e]=t(e))}}var o=/-(\w)/g,g=e(function(e){return e.replace(o,function(e,t){return t?t.toUpperCase():""})}),d=e(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),a=/\B([A-Z])/g,_=e(function(e){return e.replace(a,"-$1").toLowerCase()});var v=Function.prototype.bind?function(e,t){return e.bind(t)}:function(n,r){function e(e){var t=arguments.length;return t?1<t?n.apply(r,arguments):n.call(r,e):n.call(r)}return e._length=n.length,e};function h(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function m(e,t){for(var n in t)e[n]=t[n];return e}function b(e){for(var t={},n=0;n<e.length;n++)e[n]&&m(t,e[n]);return t}function $(e,t,n){}var O=function(e,t,n){return!1},w=function(e){return e};function C(t,n){if(t===n)return!0;var e=P(t),r=P(n);if(!e||!r)return!e&&!r&&String(t)===String(n);try{var i=Array.isArray(t),o=Array.isArray(n);if(i&&o)return t.length===n.length&&t.every(function(e,t){return C(e,n[t])});if(i||o)return!1;var a=Object.keys(t),s=Object.keys(n);return a.length===s.length&&a.every(function(e){return C(t[e],n[e])})}catch(e){return!1}}function x(e,t){for(var n=0;n<e.length;n++)if(C(e[n],t))return n;return-1}function R(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}var E="data-server-rendered",k=["component","directive","filter"],A=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],j={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:O,isReservedAttr:O,isUnknownElement:O,getTagNamespace:$,parsePlatformTagName:w,mustUseProp:O,_lifecycleHooks:A};function N(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var L=/[^\w.$]/;var I,H="__proto__"in{},B="undefined"!=typeof window,U="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,V=U&&WXEnvironment.platform.toLowerCase(),z=B&&window.navigator.userAgent.toLowerCase(),K=z&&/msie|trident/.test(z),J=z&&0<z.indexOf("msie 9.0"),q=z&&0<z.indexOf("edge/"),W=(z&&z.indexOf("android"),z&&/iphone|ipad|ipod|ios/.test(z)||"ios"===V),G=(z&&/chrome\/\d+/.test(z),{}.watch),Z=!1;if(B)try{var X={};Object.defineProperty(X,"passive",{get:function(){Z=!0}}),window.addEventListener("test-passive",null,X)}catch(e){}var Y=function(){return void 0===I&&(I=!B&&!U&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),I},Q=B&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ee(e){return"function"==typeof e&&/native code/.test(e.toString())}var te,ne="undefined"!=typeof Symbol&&ee(Symbol)&&"undefined"!=typeof Reflect&&ee(Reflect.ownKeys);te="undefined"!=typeof Set&&ee(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var re=$,ie=0,oe=function(){this.id=ie++,this.subs=[]};oe.prototype.addSub=function(e){this.subs.push(e)},oe.prototype.removeSub=function(e){f(this.subs,e)},oe.prototype.depend=function(){oe.target&&oe.target.addDep(this)},oe.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},oe.target=null;var ae=[];function se(e){oe.target&&ae.push(oe.target),oe.target=e}function ce(){oe.target=ae.pop()}var le=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},ue={child:{configurable:!0}};ue.child.get=function(){return this.componentInstance},Object.defineProperties(le.prototype,ue);var fe=function(e){void 0===e&&(e="");var t=new le;return t.text=e,t.isComment=!0,t};function pe(e){return new le(void 0,void 0,void 0,String(e))}function de(e){var t=new le(e.tag,e.data,e.children,e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.isCloned=!0,t}var ve=Array.prototype,he=Object.create(ve);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(o){var a=ve[o];N(he,o,function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var n,r=a.apply(this,e),i=this.__ob__;switch(o){case"push":case"unshift":n=e;break;case"splice":n=e.slice(2)}return n&&i.observeArray(n),i.dep.notify(),r})});var me=Object.getOwnPropertyNames(he),ye=!0;function ge(e){ye=e}var _e=function(e){(this.value=e,this.dep=new oe,this.vmCount=0,N(e,"__ob__",this),Array.isArray(e))?((H?be:$e)(e,he,me),this.observeArray(e)):this.walk(e)};function be(e,t,n){e.__proto__=t}function $e(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];N(e,o,t[o])}}function we(e,t){var n;if(P(e)&&!(e instanceof le))return p(e,"__ob__")&&e.__ob__ instanceof _e?n=e.__ob__:ye&&!Y()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new _e(e)),t&&n&&n.vmCount++,n}function Ce(n,e,r,t,i){var o=new oe,a=Object.getOwnPropertyDescriptor(n,e);if(!a||!1!==a.configurable){var s=a&&a.get;s||2!==arguments.length||(r=n[e]);var c=a&&a.set,l=!i&&we(r);Object.defineProperty(n,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(n):r;return oe.target&&(o.depend(),l&&(l.dep.depend(),Array.isArray(e)&&function e(t){for(var n=void 0,r=0,i=t.length;r<i;r++)(n=t[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&e(n)}(e))),e},set:function(e){var t=s?s.call(n):r;e===t||e!=e&&t!=t||(c?c.call(n,e):r=e,l=!i&&we(e),o.notify())}})}}function xe(e,t,n){if(Array.isArray(e)&&i(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(Ce(r.value,t,n),r.dep.notify(),n):e[t]=n}function ke(e,t){if(Array.isArray(e)&&i(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||p(e,t)&&(delete e[t],n&&n.dep.notify())}}_e.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)Ce(e,t[n])},_e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)we(e[t])};var Ae=j.optionMergeStrategies;function Oe(e,t){if(!t)return e;for(var n,r,i,o=Object.keys(t),a=0;a<o.length;a++)r=e[n=o[a]],i=t[n],p(e,n)?l(r)&&l(i)&&Oe(r,i):xe(e,n,i);return e}function Se(n,r,i){return i?function(){var e="function"==typeof r?r.call(i,i):r,t="function"==typeof n?n.call(i,i):n;return e?Oe(e,t):t}:r?n?function(){return Oe("function"==typeof r?r.call(this,this):r,"function"==typeof n?n.call(this,this):n)}:r:n}function Te(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function Ee(e,t,n,r){var i=Object.create(e||null);return t?m(i,t):i}Ae.data=function(e,t,n){return n?Se(e,t,n):t&&"function"!=typeof t?e:Se(e,t)},A.forEach(function(e){Ae[e]=Te}),k.forEach(function(e){Ae[e+"s"]=Ee}),Ae.watch=function(e,t,n,r){if(e===G&&(e=void 0),t===G&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};for(var o in m(i,e),t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Ae.props=Ae.methods=Ae.inject=Ae.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return m(i,e),t&&m(i,t),i},Ae.provide=Se;var je=function(e,t){return void 0===t?e:t};function Ne(n,r,i){"function"==typeof r&&(r=r.options),function(e,t){var n=e.props;if(n){var r,i,o={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o[g(i)]={type:null});else if(l(n))for(var a in n)i=n[a],o[g(a)]=l(i)?i:{type:i};e.props=o}}(r),function(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?m({from:o},a):{from:a}}}}(r),function(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}(r);var e=r.extends;if(e&&(n=Ne(n,e,i)),r.mixins)for(var t=0,o=r.mixins.length;t<o;t++)n=Ne(n,r.mixins[t],i);var a,s={};for(a in n)c(a);for(a in r)p(n,a)||c(a);function c(e){var t=Ae[e]||je;s[e]=t(n[e],r[e],i,e)}return s}function Le(e,t,n,r){if("string"==typeof n){var i=e[t];if(p(i,n))return i[n];var o=g(n);if(p(i,o))return i[o];var a=d(o);return p(i,a)?i[a]:i[n]||i[o]||i[a]}}function Ie(e,t,n,r){var i=t[e],o=!p(n,e),a=n[e],s=Pe(Boolean,i.type);if(-1<s)if(o&&!p(i,"default"))a=!1;else if(""===a||a===_(e)){var c=Pe(String,i.type);(c<0||s<c)&&(a=!0)}if(void 0===a){a=function(e,t,n){if(!p(t,"default"))return;var r=t.default;if(e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n])return e._props[n];return"function"==typeof r&&"Function"!==Me(t.type)?r.call(e):r}(r,i,e);var l=ye;ge(!0),we(a),ge(l)}return a}function Me(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function De(e,t){return Me(e)===Me(t)}function Pe(e,t){if(!Array.isArray(t))return De(t,e)?0:-1;for(var n=0,r=t.length;n<r;n++)if(De(t[n],e))return n;return-1}function Fe(e,t,n){if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,e,t,n))return}catch(e){Re(e,r,"errorCaptured hook")}}Re(e,t,n)}function Re(e,t,n){if(j.errorHandler)try{return j.errorHandler.call(null,e,t,n)}catch(e){He(e,null,"config.errorHandler")}He(e,t,n)}function He(e,t,n){if(!B&&!U||"undefined"==typeof console)throw e;console.error(e)}var Be,Ue,Ve=[],ze=!1;function Ke(){ze=!1;for(var e=Ve.slice(0),t=Ve.length=0;t<e.length;t++)e[t]()}var Je=!1;if("undefined"!=typeof setImmediate&&ee(setImmediate))Ue=function(){setImmediate(Ke)};else if("undefined"==typeof MessageChannel||!ee(MessageChannel)&&"[object MessageChannelConstructor]"!==MessageChannel.toString())Ue=function(){setTimeout(Ke,0)};else{var qe=new MessageChannel,We=qe.port2;qe.port1.onmessage=Ke,Ue=function(){We.postMessage(1)}}if("undefined"!=typeof Promise&&ee(Promise)){var Ge=Promise.resolve();Be=function(){Ge.then(Ke),W&&setTimeout($)}}else Be=Ue;function Ze(e,t){var n;if(Ve.push(function(){if(e)try{e.call(t)}catch(e){Fe(e,t,"nextTick")}else n&&n(t)}),ze||(ze=!0,Je?Ue():Be()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}var Xe=new te;function Ye(e){!function e(t,n){var r,i;var o=Array.isArray(t);if(!o&&!P(t)||Object.isFrozen(t)||t instanceof le)return;if(t.__ob__){var a=t.__ob__.dep.id;if(n.has(a))return;n.add(a)}if(o)for(r=t.length;r--;)e(t[r],n);else for(i=Object.keys(t),r=i.length;r--;)e(t[i[r]],n)}(e,Xe),Xe.clear()}var Qe,et=e(function(e){var t="&"===e.charAt(0),n="~"===(e=t?e.slice(1):e).charAt(0),r="!"===(e=n?e.slice(1):e).charAt(0);return{name:e=r?e.slice(1):e,once:n,capture:r,passive:t}});function tt(e){function i(){var e=arguments,t=i.fns;if(!Array.isArray(t))return t.apply(null,arguments);for(var n=t.slice(),r=0;r<n.length;r++)n[r].apply(null,e)}return i.fns=e,i}function nt(e,t,n,r,i){var o,a,s,c;for(o in e)a=e[o],s=t[o],c=et(o),M(a)||(M(s)?(M(a.fns)&&(a=e[o]=tt(a)),n(c.name,a,c.once,c.capture,c.passive,c.params)):a!==s&&(s.fns=a,e[o]=s));for(o in t)M(e[o])&&r((c=et(o)).name,t[o],c.capture)}function rt(e,t,n){var r;e instanceof le&&(e=e.data.hook||(e.data.hook={}));var i=e[t];function o(){n.apply(this,arguments),f(r.fns,o)}M(i)?r=tt([o]):D(i.fns)&&S(i.merged)?(r=i).fns.push(o):r=tt([i,o]),r.merged=!0,e[t]=r}function it(e,t,n,r,i){if(D(t)){if(p(t,n))return e[n]=t[n],i||delete t[n],!0;if(p(t,r))return e[n]=t[r],i||delete t[r],!0}return!1}function ot(e){return T(e)?[pe(e)]:Array.isArray(e)?function e(t,n){var r=[];var i,o,a,s;for(i=0;i<t.length;i++)M(o=t[i])||"boolean"==typeof o||(a=r.length-1,s=r[a],Array.isArray(o)?0<o.length&&(at((o=e(o,(n||"")+"_"+i))[0])&&at(s)&&(r[a]=pe(s.text+o[0].text),o.shift()),r.push.apply(r,o)):T(o)?at(s)?r[a]=pe(s.text+o):""!==o&&r.push(pe(o)):at(o)&&at(s)?r[a]=pe(s.text+o.text):(S(t._isVList)&&D(o.tag)&&M(o.key)&&D(n)&&(o.key="__vlist"+n+"_"+i+"__"),r.push(o)));return r}(e):void 0}function at(e){return D(e)&&D(e.text)&&!1===e.isComment}function st(e,t){return(e.__esModule||ne&&"Module"===e[Symbol.toStringTag])&&(e=e.default),P(e)?t.extend(e):e}function ct(e){return e.isComment&&e.asyncFactory}function lt(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(D(n)&&(D(n.componentOptions)||ct(n)))return n}}function ut(e,t,n){n?Qe.$once(e,t):Qe.$on(e,t)}function ft(e,t){Qe.$off(e,t)}function pt(e,t,n){Qe=e,nt(t,n||{},ut,ft),Qe=void 0}function dt(e,t){var n={};if(!e)return n;for(var r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var l in n)n[l].every(vt)&&delete n[l];return n}function vt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function ht(e,t){t=t||{};for(var n=0;n<e.length;n++)Array.isArray(e[n])?ht(e[n],t):t[e[n].key]=e[n].fn;return t}var mt=null;function yt(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function gt(e,t){if(t){if(e._directInactive=!1,yt(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)gt(e.$children[n]);_t(e,"activated")}}function _t(t,n){se();var e=t.$options[n];if(e)for(var r=0,i=e.length;r<i;r++)try{e[r].call(t)}catch(e){Fe(e,t,n+" hook")}t._hasHookEvent&&t.$emit("hook:"+n),ce()}var bt=[],$t=[],wt={},Ct=!1,xt=!1,kt=0;function At(){var e,t;for(xt=!0,bt.sort(function(e,t){return e.id-t.id}),kt=0;kt<bt.length;kt++)t=(e=bt[kt]).id,wt[t]=null,e.run();var n=$t.slice(),r=bt.slice();kt=bt.length=$t.length=0,wt={},Ct=xt=!1,function(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,gt(e[t],!0)}(n),function(e){var t=e.length;for(;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&_t(r,"updated")}}(r),Q&&j.devtools&&Q.emit("flush")}var Ot=0,St=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Ot,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new te,this.newDepIds=new te,this.expression="","function"==typeof t?this.getter=t:(this.getter=function(e){if(!L.test(e)){var n=e.split(".");return function(e){for(var t=0;t<n.length;t++){if(!e)return;e=e[n[t]]}return e}}}(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};St.prototype.get=function(){var e;se(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;Fe(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&Ye(e),ce(),this.cleanupDeps()}return e},St.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},St.prototype.cleanupDeps=function(){for(var e=this.deps.length;e--;){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},St.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(e){var t=e.id;if(null==wt[t]){if(wt[t]=!0,xt){for(var n=bt.length-1;kt<n&&bt[n].id>e.id;)n--;bt.splice(n+1,0,e)}else bt.push(e);Ct||(Ct=!0,Ze(At))}}(this)},St.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||P(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){Fe(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},St.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},St.prototype.depend=function(){for(var e=this.deps.length;e--;)this.deps[e].depend()},St.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||f(this.vm._watchers,this);for(var e=this.deps.length;e--;)this.deps[e].removeSub(this);this.active=!1}};var Tt={enumerable:!0,configurable:!0,get:$,set:$};function Et(e,t,n){Tt.get=function(){return this[t][n]},Tt.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Tt)}function jt(e){e._watchers=[];var t=e.$options;t.props&&function(n,r){var i=n.$options.propsData||{},o=n._props={},a=n.$options._propKeys=[];n.$parent&&ge(!1);var e=function(e){a.push(e);var t=Ie(e,r,i,n);Ce(o,e,t),e in n||Et(n,"_props",e)};for(var t in r)e(t);ge(!0)}(e,t.props),t.methods&&function(e,t){e.$options.props;for(var n in t)e[n]=null==t[n]?$:v(t[n],e)}(e,t.methods),t.data?function(e){var t=e.$options.data;l(t=e._data="function"==typeof t?function(e,t){se();try{return e.call(t,t)}catch(e){return Fe(e,t,"data()"),{}}finally{ce()}}(t,e):t||{})||(t={});var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);for(;i--;){var o=n[i];r&&p(r,o)||(void 0,36!==(a=(o+"").charCodeAt(0))&&95!==a&&Et(e,"_data",o))}var a;we(t,!0)}(e):we(e._data={},!0),t.computed&&function(e,t){var n=e._computedWatchers=Object.create(null),r=Y();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new St(e,a||$,$,Nt)),i in e||Lt(e,i,o)}}(e,t.computed),t.watch&&t.watch!==G&&function(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Mt(e,n,r[i]);else Mt(e,n,r)}}(e,t.watch)}var Nt={lazy:!0};function Lt(e,t,n){var r=!Y();"function"==typeof n?(Tt.get=r?It(t):n,Tt.set=$):(Tt.get=n.get?r&&!1!==n.cache?It(t):n.get:$,Tt.set=n.set?n.set:$),Object.defineProperty(e,t,Tt)}function It(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),oe.target&&e.depend(),e.value}}function Mt(e,t,n,r){return l(n)&&(n=(r=n).handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function Dt(t,e){if(t){for(var n=Object.create(null),r=ne?Reflect.ownKeys(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}):Object.keys(t),i=0;i<r.length;i++){for(var o=r[i],a=t[o].from,s=e;s;){if(s._provided&&p(s._provided,a)){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in t[o]){var c=t[o].default;n[o]="function"==typeof c?c.call(e):c}}return n}}function Pt(e,t){var n,r,i,o,a;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,i=e.length;r<i;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(P(e))for(o=Object.keys(e),n=new Array(o.length),r=0,i=o.length;r<i;r++)a=o[r],n[r]=t(e[a],a,r);return D(n)&&(n._isVList=!0),n}function Ft(e,t,n,r){var i,o=this.$scopedSlots[e];if(o)n=n||{},r&&(n=m(m({},r),n)),i=o(n)||t;else{var a=this.$slots[e];a&&(a._rendered=!0),i=a||t}var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function Rt(e){return Le(this.$options,"filters",e)||w}function Ht(e,t){return Array.isArray(e)?-1===e.indexOf(t):e!==t}function Bt(e,t,n,r,i){var o=j.keyCodes[t]||n;return i&&r&&!j.keyCodes[t]?Ht(i,r):o?Ht(o,e):r?_(r)!==t:void 0}function Ut(n,r,i,o,a){if(i)if(P(i)){var s;Array.isArray(i)&&(i=b(i));var e=function(t){if("class"===t||"style"===t||u(t))s=n;else{var e=n.attrs&&n.attrs.type;s=o||j.mustUseProp(r,e,t)?n.domProps||(n.domProps={}):n.attrs||(n.attrs={})}t in s||(s[t]=i[t],a&&((n.on||(n.on={}))["update:"+t]=function(e){i[t]=e}))};for(var t in i)e(t)}else;return n}function Vt(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t||Kt(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),"__static__"+e,!1),r}function zt(e,t,n){return Kt(e,"__once__"+t+(n?"_"+n:""),!0),e}function Kt(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&Jt(e[r],t+"_"+r,n);else Jt(e,t,n)}function Jt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function qt(e,t){if(t)if(l(t)){var n=e.on=e.on?m({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function Wt(e){e._o=zt,e._n=F,e._s=t,e._l=Pt,e._t=Ft,e._q=C,e._i=x,e._m=Vt,e._f=Rt,e._k=Bt,e._b=Ut,e._v=pe,e._e=fe,e._u=ht,e._g=qt}function Gt(e,t,n,o,r){var a,s=r.options;p(o,"_uid")?(a=Object.create(o))._original=o:o=(a=o)._original;var i=S(s._compiled),c=!i;this.data=e,this.props=t,this.children=n,this.parent=o,this.listeners=e.on||y,this.injections=Dt(s.inject,o),this.slots=function(){return dt(n,o)},i&&(this.$options=s,this.$slots=this.slots(),this.$scopedSlots=e.scopedSlots||y),s._scopeId?this._c=function(e,t,n,r){var i=rn(a,e,t,n,r,c);return i&&!Array.isArray(i)&&(i.fnScopeId=s._scopeId,i.fnContext=o),i}:this._c=function(e,t,n,r){return rn(a,e,t,n,r,c)}}function Zt(e,t,n,r){var i=de(e);return i.fnContext=n,i.fnOptions=r,t.slot&&((i.data||(i.data={})).slot=t.slot),i}function Xt(e,t){for(var n in t)e[g(n)]=t[n]}Wt(Gt.prototype);var Yt={init:function(e,t,n,r){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var i=e;Yt.prepatch(i,i)}else{(e.componentInstance=function(e,t,n,r){var i={_isComponent:!0,parent:t,_parentVnode:e,_parentElm:n||null,_refElm:r||null},o=e.data.inlineTemplate;D(o)&&(i.render=o.render,i.staticRenderFns=o.staticRenderFns);return new e.componentOptions.Ctor(i)}(e,mt,n,r)).$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions;!function(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==y);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,e.$attrs=r.data.attrs||y,e.$listeners=n||y,t&&e.$options.props){ge(!1);for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var l=s[c],u=e.$options.props;a[l]=Ie(l,u,t,e)}ge(!0),e.$options.propsData=t}n=n||y;var f=e.$options._parentListeners;e.$options._parentListeners=n,pt(e,n,f),o&&(e.$slots=dt(i,r.context),e.$forceUpdate())}(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t,n=e.context,r=e.componentInstance;r._isMounted||(r._isMounted=!0,_t(r,"mounted")),e.data.keepAlive&&(n._isMounted?((t=r)._inactive=!1,$t.push(t)):gt(r,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?function e(t,n){if(!(n&&(t._directInactive=!0,yt(t))||t._inactive)){t._inactive=!0;for(var r=0;r<t.$children.length;r++)e(t.$children[r]);_t(t,"deactivated")}}(t,!0):t.$destroy())}},Qt=Object.keys(Yt);function en(e,t,n,r,i){if(!M(e)){var o=n.$options._base;if(P(e)&&(e=o.extend(e)),"function"==typeof e){var a,s,c,l,u,f,p;if(M(e.cid)&&void 0===(e=function(t,n,e){if(S(t.error)&&D(t.errorComp))return t.errorComp;if(D(t.resolved))return t.resolved;if(S(t.loading)&&D(t.loadingComp))return t.loadingComp;if(!D(t.contexts)){var r=t.contexts=[e],i=!0,o=function(){for(var e=0,t=r.length;e<t;e++)r[e].$forceUpdate()},a=R(function(e){t.resolved=st(e,n),i||o()}),s=R(function(e){D(t.errorComp)&&(t.error=!0,o())}),c=t(a,s);return P(c)&&("function"==typeof c.then?M(t.resolved)&&c.then(a,s):D(c.component)&&"function"==typeof c.component.then&&(c.component.then(a,s),D(c.error)&&(t.errorComp=st(c.error,n)),D(c.loading)&&(t.loadingComp=st(c.loading,n),0===c.delay?t.loading=!0:setTimeout(function(){M(t.resolved)&&M(t.error)&&(t.loading=!0,o())},c.delay||200)),D(c.timeout)&&setTimeout(function(){M(t.resolved)&&s(null)},c.timeout))),i=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(e)}(a=e,o,n)))return s=a,c=t,l=n,u=r,f=i,(p=fe()).asyncFactory=s,p.asyncMeta={data:c,context:l,children:u,tag:f},p;t=t||{},dn(e),D(t.model)&&function(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.props||(t.props={}))[n]=t.model.value;var i=t.on||(t.on={});D(i[r])?i[r]=[t.model.callback].concat(i[r]):i[r]=t.model.callback}(e.options,t);var d=function(e,t,n){var r=t.options.props;if(!M(r)){var i={},o=e.attrs,a=e.props;if(D(o)||D(a))for(var s in r){var c=_(s);it(i,a,s,c,!0)||it(i,o,s,c,!1)}return i}}(t,e);if(S(e.options.functional))return function(e,t,n,r,i){var o=e.options,a={},s=o.props;if(D(s))for(var c in s)a[c]=Ie(c,s,t||y);else D(n.attrs)&&Xt(a,n.attrs),D(n.props)&&Xt(a,n.props);var l=new Gt(n,a,i,r,e),u=o.render.call(null,l._c,l);if(u instanceof le)return Zt(u,n,l.parent,o);if(Array.isArray(u)){for(var f=ot(u)||[],p=new Array(f.length),d=0;d<f.length;d++)p[d]=Zt(f[d],n,l.parent,o);return p}}(e,d,t,n,r);var v=t.on;if(t.on=t.nativeOn,S(e.options.abstract)){var h=t.slot;t={},h&&(t.slot=h)}!function(e){for(var t=e.hook||(e.hook={}),n=0;n<Qt.length;n++){var r=Qt[n];t[r]=Yt[r]}}(t);var m=e.options.name||i;return new le("vue-component-"+e.cid+(m?"-"+m:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:d,listeners:v,tag:i,children:r},a)}}}var tn=1,nn=2;function rn(e,t,n,r,i,o){return(Array.isArray(n)||T(n))&&(i=r,r=n,n=void 0),S(o)&&(i=nn),function(e,t,n,r,i){if(D(n)&&D(n.__ob__))return fe();D(n)&&D(n.is)&&(t=n.is);if(!t)return fe();Array.isArray(r)&&"function"==typeof r[0]&&((n=n||{}).scopedSlots={default:r[0]},r.length=0);i===nn?r=ot(r):i===tn&&(r=function(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}(r));var o,a;if("string"==typeof t){var s;a=e.$vnode&&e.$vnode.ns||j.getTagNamespace(t),o=j.isReservedTag(t)?new le(j.parsePlatformTagName(t),n,r,void 0,void 0,e):D(s=Le(e.$options,"components",t))?en(s,n,e,r,t):new le(t,n,r,void 0,void 0,e)}else o=en(t,n,e,r);return Array.isArray(o)?o:D(o)?(D(a)&&function e(t,n,r){t.ns=n;"foreignObject"===t.tag&&(n=void 0,r=!0);if(D(t.children))for(var i=0,o=t.children.length;i<o;i++){var a=t.children[i];D(a.tag)&&(M(a.ns)||S(r)&&"svg"!==a.tag)&&e(a,n,r)}}(o,a),D(n)&&function(e){P(e.style)&&Ye(e.style);P(e.class)&&Ye(e.class)}(n),o):fe()}(e,t,n,r,i)}var on,an,sn,cn,ln,un,fn,pn=0;function dn(e){var t=e.options;if(e.super){var n=dn(e.super);if(n!==e.superOptions){e.superOptions=n;var r=function(e){var t,n=e.options,r=e.extendOptions,i=e.sealedOptions;for(var o in n)n[o]!==i[o]&&(t||(t={}),t[o]=vn(n[o],r[o],i[o]));return t}(e);r&&m(e.extendOptions,r),(t=e.options=Ne(n,e.extendOptions)).name&&(t.components[t.name]=e)}}return t}function vn(e,t,n){if(Array.isArray(e)){var r=[];n=Array.isArray(n)?n:[n],t=Array.isArray(t)?t:[t];for(var i=0;i<e.length;i++)(0<=t.indexOf(e[i])||n.indexOf(e[i])<0)&&r.push(e[i]);return r}return e}function hn(e){this._init(e)}function mn(e){e.cid=0;var a=1;e.extend=function(e){e=e||{};var t=this,n=t.cid,r=e._Ctor||(e._Ctor={});if(r[n])return r[n];var i=e.name||t.options.name,o=function(e){this._init(e)};return((o.prototype=Object.create(t.prototype)).constructor=o).cid=a++,o.options=Ne(t.options,e),o.super=t,o.options.props&&function(e){var t=e.options.props;for(var n in t)Et(e.prototype,"_props",n)}(o),o.options.computed&&function(e){var t=e.options.computed;for(var n in t)Lt(e.prototype,n,t[n])}(o),o.extend=t.extend,o.mixin=t.mixin,o.use=t.use,k.forEach(function(e){o[e]=t[e]}),i&&(o.options.components[i]=o),o.superOptions=t.options,o.extendOptions=e,o.sealedOptions=m({},o.options),r[n]=o}}function yn(e){return e&&(e.Ctor.options.name||e.tag)}function gn(e,t){return Array.isArray(e)?-1<e.indexOf(t):"string"==typeof e?-1<e.split(",").indexOf(t):(n=e,"[object RegExp]"===r.call(n)&&e.test(t));var n}function _n(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=yn(a.componentOptions);s&&!t(s)&&bn(n,o,r,i)}}}function bn(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,f(n,t)}hn.prototype._init=function(e){var t,n,r,i,o=this;o._uid=pn++,o._isVue=!0,e&&e._isComponent?function(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r,n._parentElm=t._parentElm,n._refElm=t._refElm;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}(o,e):o.$options=Ne(dn(o.constructor),e||{},o),function(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}((o._renderProxy=o)._self=o),function(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&pt(e,t)}(o),function(i){i._vnode=null,i._staticTrees=null;var e=i.$options,t=i.$vnode=e._parentVnode,n=t&&t.context;i.$slots=dt(e._renderChildren,n),i.$scopedSlots=y,i._c=function(e,t,n,r){return rn(i,e,t,n,r,!1)},i.$createElement=function(e,t,n,r){return rn(i,e,t,n,r,!0)};var r=t&&t.data;Ce(i,"$attrs",r&&r.attrs||y,null,!0),Ce(i,"$listeners",e._parentListeners||y,null,!0)}(o),_t(o,"beforeCreate"),(n=Dt((t=o).$options.inject,t))&&(ge(!1),Object.keys(n).forEach(function(e){Ce(t,e,n[e])}),ge(!0)),jt(o),(i=(r=o).$options.provide)&&(r._provided="function"==typeof i?i.call(r):i),_t(o,"created"),o.$options.el&&o.$mount(o.$options.el)},on=hn,an={get:function(){return this._data}},sn={get:function(){return this._props}},Object.defineProperty(on.prototype,"$data",an),Object.defineProperty(on.prototype,"$props",sn),on.prototype.$set=xe,on.prototype.$delete=ke,on.prototype.$watch=function(e,t,n){if(l(t))return Mt(this,e,t,n);(n=n||{}).user=!0;var r=new St(this,e,t,n);return n.immediate&&t.call(this,r.value),function(){r.teardown()}},ln=/^hook:/,(cn=hn).prototype.$on=function(e,t){if(Array.isArray(e))for(var n=0,r=e.length;n<r;n++)this.$on(e[n],t);else(this._events[e]||(this._events[e]=[])).push(t),ln.test(e)&&(this._hasHookEvent=!0);return this},cn.prototype.$once=function(e,t){var n=this;function r(){n.$off(e,r),t.apply(n,arguments)}return r.fn=t,n.$on(e,r),n},cn.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(e)){for(var r=0,i=e.length;r<i;r++)this.$off(e[r],t);return n}var o=n._events[e];if(!o)return n;if(!t)return n._events[e]=null,n;if(t)for(var a,s=o.length;s--;)if((a=o[s])===t||a.fn===t){o.splice(s,1);break}return n},cn.prototype.$emit=function(t){var n=this,e=n._events[t];if(e){e=1<e.length?h(e):e;for(var r=h(arguments,1),i=0,o=e.length;i<o;i++)try{e[i].apply(n,r)}catch(e){Fe(e,n,'event handler for "'+t+'"')}}return n},(un=hn).prototype._update=function(e,t){var n=this;n._isMounted&&_t(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=mt;(mt=n)._vnode=e,i?n.$el=n.__patch__(i,e):(n.$el=n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),mt=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},un.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},un.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){_t(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||f(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),_t(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}},Wt((fn=hn).prototype),fn.prototype.$nextTick=function(e){return Ze(e,this)},fn.prototype._render=function(){var t,n=this,e=n.$options,r=e.render,i=e._parentVnode;i&&(n.$scopedSlots=i.data.scopedSlots||y),n.$vnode=i;try{t=r.call(n._renderProxy,n.$createElement)}catch(e){Fe(e,n,"render"),t=n._vnode}return t instanceof le||(t=fe()),t.parent=i,t};var $n,wn,Cn,xn=[String,RegExp,Array],kn={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:xn,exclude:xn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)bn(this.cache,e,this.keys)},mounted:function(){var e=this;this.$watch("include",function(t){_n(e,function(e){return gn(t,e)})}),this.$watch("exclude",function(t){_n(e,function(e){return!gn(t,e)})})},render:function(){var e=this.$slots.default,t=lt(e),n=t&&t.componentOptions;if(n){var r=yn(n),i=this.include,o=this.exclude;if(i&&(!r||!gn(i,r))||o&&r&&gn(o,r))return t;var a=this.cache,s=this.keys,c=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;a[c]?(t.componentInstance=a[c].componentInstance,f(s,c),s.push(c)):(a[c]=t,s.push(c),this.max&&s.length>parseInt(this.max)&&bn(a,s[0],s,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}}};$n=hn,Cn={get:function(){return j}},Object.defineProperty($n,"config",Cn),$n.util={warn:re,extend:m,mergeOptions:Ne,defineReactive:Ce},$n.set=xe,$n.delete=ke,$n.nextTick=Ze,$n.options=Object.create(null),k.forEach(function(e){$n.options[e+"s"]=Object.create(null)}),m(($n.options._base=$n).options.components,kn),$n.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(-1<t.indexOf(e))return this;var n=h(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this},$n.mixin=function(e){return this.options=Ne(this.options,e),this},mn($n),wn=$n,k.forEach(function(n){wn[n]=function(e,t){return t?("component"===n&&l(t)&&(t.name=t.name||e,t=this.options._base.extend(t)),"directive"===n&&"function"==typeof t&&(t={bind:t,update:t}),this.options[n+"s"][e]=t):this.options[n+"s"][e]}}),Object.defineProperty(hn.prototype,"$isServer",{get:Y}),Object.defineProperty(hn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(hn,"FunctionalRenderContext",{value:Gt}),hn.version="2.5.16";var An=s("style,class"),On=s("input,textarea,option,select,progress"),Sn=function(e,t,n){return"value"===n&&On(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},Tn=s("contenteditable,draggable,spellcheck"),En=s("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),jn="http://www.w3.org/1999/xlink",Nn=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Ln=function(e){return Nn(e)?e.slice(6,e.length):""},In=function(e){return null==e||!1===e};function Mn(e){for(var t=e.data,n=e,r=e;D(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(t=Dn(r.data,t));for(;D(n=n.parent);)n&&n.data&&(t=Dn(t,n.data));return function(e,t){if(D(e)||D(t))return Pn(e,Fn(t));return""}(t.staticClass,t.class)}function Dn(e,t){return{staticClass:Pn(e.staticClass,t.staticClass),class:D(e.class)?[e.class,t.class]:t.class}}function Pn(e,t){return e?t?e+" "+t:e:t||""}function Fn(e){return Array.isArray(e)?function(e){for(var t,n="",r=0,i=e.length;r<i;r++)D(t=Fn(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}(e):P(e)?function(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}(e):"string"==typeof e?e:""}var Rn={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Hn=s("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Bn=s("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Un=function(e){return Hn(e)||Bn(e)};function Vn(e){return Bn(e)?"svg":"math"===e?"math":void 0}var zn=Object.create(null);var Kn=s("text,number,password,search,email,tel,url");function Jn(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}var qn=Object.freeze({createElement:function(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n},createElementNS:function(e,t){return document.createElementNS(Rn[e],t)},createTextNode:function(e){return document.createTextNode(e)},createComment:function(e){return document.createComment(e)},insertBefore:function(e,t,n){e.insertBefore(t,n)},removeChild:function(e,t){e.removeChild(t)},appendChild:function(e,t){e.appendChild(t)},parentNode:function(e){return e.parentNode},nextSibling:function(e){return e.nextSibling},tagName:function(e){return e.tagName},setTextContent:function(e,t){e.textContent=t},setStyleScope:function(e,t){e.setAttribute(t,"")}}),Wn={create:function(e,t){Gn(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Gn(e,!0),Gn(t))},destroy:function(e){Gn(e,!0)}};function Gn(e,t){var n=e.data.ref;if(D(n)){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?f(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}var Zn=new le("",{},[]),Xn=["create","activate","update","remove","destroy"];function Yn(e,t){return e.key===t.key&&(e.tag===t.tag&&e.isComment===t.isComment&&D(e.data)===D(t.data)&&function(e,t){if("input"!==e.tag)return!0;var n,r=D(n=e.data)&&D(n=n.attrs)&&n.type,i=D(n=t.data)&&D(n=n.attrs)&&n.type;return r===i||Kn(r)&&Kn(i)}(e,t)||S(e.isAsyncPlaceholder)&&e.asyncFactory===t.asyncFactory&&M(t.asyncFactory.error))}function Qn(e,t,n){var r,i,o={};for(r=t;r<=n;++r)D(i=e[r].key)&&(o[i]=r);return o}var er={create:tr,update:tr,destroy:function(e){tr(e,Zn)}};function tr(e,t){(e.data.directives||t.data.directives)&&function(t,n){var e,r,i,o=t===Zn,a=n===Zn,s=rr(t.data.directives,t.context),c=rr(n.data.directives,n.context),l=[],u=[];for(e in c)r=s[e],i=c[e],r?(i.oldValue=r.value,ir(i,"update",n,t),i.def&&i.def.componentUpdated&&u.push(i)):(ir(i,"bind",n,t),i.def&&i.def.inserted&&l.push(i));if(l.length){var f=function(){for(var e=0;e<l.length;e++)ir(l[e],"inserted",n,t)};o?rt(n,"insert",f):f()}u.length&&rt(n,"postpatch",function(){for(var e=0;e<u.length;e++)ir(u[e],"componentUpdated",n,t)});if(!o)for(e in s)c[e]||ir(s[e],"unbind",t,t,a)}(e,t)}var nr=Object.create(null);function rr(e,t){var n,r,i,o=Object.create(null);if(!e)return o;for(n=0;n<e.length;n++)(r=e[n]).modifiers||(r.modifiers=nr),(o[(i=r,i.rawName||i.name+"."+Object.keys(i.modifiers||{}).join("."))]=r).def=Le(t.$options,"directives",r.name);return o}function ir(t,n,r,e,i){var o=t.def&&t.def[n];if(o)try{o(r.elm,t,r,e,i)}catch(e){Fe(e,r.context,"directive "+t.name+" "+n+" hook")}}var or=[Wn,er];function ar(e,t){var n=t.componentOptions;if(!(D(n)&&!1===n.Ctor.options.inheritAttrs||M(e.data.attrs)&&M(t.data.attrs))){var r,i,o=t.elm,a=e.data.attrs||{},s=t.data.attrs||{};for(r in D(s.__ob__)&&(s=t.data.attrs=m({},s)),s)i=s[r],a[r]!==i&&sr(o,r,i);for(r in(K||q)&&s.value!==a.value&&sr(o,"value",s.value),a)M(s[r])&&(Nn(r)?o.removeAttributeNS(jn,Ln(r)):Tn(r)||o.removeAttribute(r))}}function sr(e,t,n){-1<e.tagName.indexOf("-")?cr(e,t,n):En(t)?In(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):Tn(t)?e.setAttribute(t,In(n)||"false"===n?"false":"true"):Nn(t)?In(n)?e.removeAttributeNS(jn,Ln(t)):e.setAttributeNS(jn,t,n):cr(e,t,n)}function cr(t,e,n){if(In(n))t.removeAttribute(e);else{if(K&&!J&&"TEXTAREA"===t.tagName&&"placeholder"===e&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}var lr={create:ar,update:ar};function ur(e,t){var n=t.elm,r=t.data,i=e.data;if(!(M(r.staticClass)&&M(r.class)&&(M(i)||M(i.staticClass)&&M(i.class)))){var o=Mn(t),a=n._transitionClasses;D(a)&&(o=Pn(o,Fn(a))),o!==n._prevClass&&(n.setAttribute("class",o),n._prevClass=o)}}var fr,pr,dr,vr,hr,mr,yr={create:ur,update:ur},gr=/[\w).+\-_$\]]/;function _r(e){var t,n,r,i,o,a=!1,s=!1,c=!1,l=!1,u=0,f=0,p=0,d=0;for(r=0;r<e.length;r++)if(n=t,t=e.charCodeAt(r),a)39===t&&92!==n&&(a=!1);else if(s)34===t&&92!==n&&(s=!1);else if(c)96===t&&92!==n&&(c=!1);else if(l)47===t&&92!==n&&(l=!1);else if(124!==t||124===e.charCodeAt(r+1)||124===e.charCodeAt(r-1)||u||f||p){switch(t){case 34:s=!0;break;case 39:a=!0;break;case 96:c=!0;break;case 40:p++;break;case 41:p--;break;case 91:f++;break;case 93:f--;break;case 123:u++;break;case 125:u--}if(47===t){for(var v=r-1,h=void 0;0<=v&&" "===(h=e.charAt(v));v--);h&&gr.test(h)||(l=!0)}}else void 0===i?(d=r+1,i=e.slice(0,r).trim()):m();function m(){(o||(o=[])).push(e.slice(d,r).trim()),d=r+1}if(void 0===i?i=e.slice(0,r).trim():0!==d&&m(),o)for(r=0;r<o.length;r++)i=br(i,o[r]);return i}function br(e,t){var n=t.indexOf("(");if(n<0)return'_f("'+t+'")('+e+")";var r=t.slice(0,n),i=t.slice(n+1);return'_f("'+r+'")('+e+(")"!==i?","+i:i)}function $r(e){console.error("[Vue compiler]: "+e)}function wr(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Cr(e,t,n){(e.props||(e.props=[])).push({name:t,value:n}),e.plain=!1}function xr(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n}),e.plain=!1}function kr(e,t,n){e.attrsMap[t]=n,e.attrsList.push({name:t,value:n})}function Ar(e,t,n,r,i,o){var a;(r=r||y).capture&&(delete r.capture,t="!"+t),r.once&&(delete r.once,t="~"+t),r.passive&&(delete r.passive,t="&"+t),"click"===t&&(r.right?(t="contextmenu",delete r.right):r.middle&&(t="mouseup")),r.native?(delete r.native,a=e.nativeEvents||(e.nativeEvents={})):a=e.events||(e.events={});var s={value:n.trim()};r!==y&&(s.modifiers=r);var c=a[t];Array.isArray(c)?i?c.unshift(s):c.push(s):a[t]=c?i?[s,c]:[c,s]:s,e.plain=!1}function Or(e,t,n){var r=Sr(e,":"+t)||Sr(e,"v-bind:"+t);if(null!=r)return _r(r);if(!1!==n){var i=Sr(e,t);if(null!=i)return JSON.stringify(i)}}function Sr(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function Tr(e,t,n){var r=n||{},i=r.number,o="$$v",a=o;r.trim&&(a="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(a="_n("+a+")");var s=Er(t,a);e.model={value:"("+t+")",expression:'"'+t+'"',callback:"function ($$v) {"+s+"}"}}function Er(e,t){var n=function(e){if(e=e.trim(),fr=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<fr-1)return-1<(vr=e.lastIndexOf("."))?{exp:e.slice(0,vr),key:'"'+e.slice(vr+1)+'"'}:{exp:e,key:null};pr=e,vr=hr=mr=0;for(;!Nr();)Lr(dr=jr())?Mr(dr):91===dr&&Ir(dr);return{exp:e.slice(0,hr),key:e.slice(hr+1,mr)}}(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function jr(){return pr.charCodeAt(++vr)}function Nr(){return fr<=vr}function Lr(e){return 34===e||39===e}function Ir(e){var t=1;for(hr=vr;!Nr();)if(Lr(e=jr()))Mr(e);else if(91===e&&t++,93===e&&t--,0===t){mr=vr;break}}function Mr(e){for(var t=e;!Nr()&&(e=jr())!==t;);}var Dr,Pr="__r",Fr="__c";function Rr(e,t,n,r,i){var o,a,s,c,l;t=(o=t)._withTask||(o._withTask=function(){Je=!0;var e=o.apply(null,arguments);return Je=!1,e}),n&&(a=t,s=e,c=r,l=Dr,t=function e(){null!==a.apply(null,arguments)&&Hr(s,e,c,l)}),Dr.addEventListener(e,t,Z?{capture:r,passive:i}:r)}function Hr(e,t,n,r){(r||Dr).removeEventListener(e,t._withTask||t,n)}function Br(e,t){if(!M(e.data.on)||!M(t.data.on)){var n=t.data.on||{},r=e.data.on||{};Dr=t.elm,function(e){if(D(e[Pr])){var t=K?"change":"input";e[t]=[].concat(e[Pr],e[t]||[]),delete e[Pr]}D(e[Fr])&&(e.change=[].concat(e[Fr],e.change||[]),delete e[Fr])}(n),nt(n,r,Rr,Hr,t.context),Dr=void 0}}var Ur={create:Br,update:Br};function Vr(e,t){if(!M(e.data.domProps)||!M(t.data.domProps)){var n,r,i,o,a=t.elm,s=e.data.domProps||{},c=t.data.domProps||{};for(n in D(c.__ob__)&&(c=t.data.domProps=m({},c)),s)M(c[n])&&(a[n]="");for(n in c){if(r=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),r===s[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n){var l=M(a._value=r)?"":String(r);o=l,(i=a).composing||"OPTION"!==i.tagName&&!function(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}(i,o)&&!function(e,t){var n=e.value,r=e._vModifiers;if(D(r)){if(r.lazy)return!1;if(r.number)return F(n)!==F(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}(i,o)||(a.value=l)}else a[n]=r}}}var zr={create:Vr,update:Vr},Kr=e(function(e){var n={},r=/:(.+)/;return e.split(/;(?![^(]*\))/g).forEach(function(e){if(e){var t=e.split(r);1<t.length&&(n[t[0].trim()]=t[1].trim())}}),n});function Jr(e){var t=qr(e.style);return e.staticStyle?m(e.staticStyle,t):t}function qr(e){return Array.isArray(e)?b(e):"string"==typeof e?Kr(e):e}var Wr,Gr=/^--/,Zr=/\s*!important$/,Xr=function(e,t,n){if(Gr.test(t))e.style.setProperty(t,n);else if(Zr.test(n))e.style.setProperty(t,n.replace(Zr,""),"important");else{var r=Qr(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},Yr=["Webkit","Moz","ms"],Qr=e(function(e){if(Wr=Wr||document.createElement("div").style,"filter"!==(e=g(e))&&e in Wr)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<Yr.length;n++){var r=Yr[n]+t;if(r in Wr)return r}});function ei(e,t){var n=t.data,r=e.data;if(!(M(n.staticStyle)&&M(n.style)&&M(r.staticStyle)&&M(r.style))){var i,o,a=t.elm,s=r.staticStyle,c=r.normalizedStyle||r.style||{},l=s||c,u=qr(t.data.style)||{};t.data.normalizedStyle=D(u.__ob__)?m({},u):u;var f=function(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=Jr(i.data))&&m(r,n);(n=Jr(e.data))&&m(r,n);for(var o=e;o=o.parent;)o.data&&(n=Jr(o.data))&&m(r,n);return r}(t,!0);for(o in l)M(f[o])&&Xr(a,o,"");for(o in f)(i=f[o])!==l[o]&&Xr(a,o,null==i?"":i)}}var ti={create:ei,update:ei};function ni(t,e){if(e&&(e=e.trim()))if(t.classList)-1<e.indexOf(" ")?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function ri(t,e){if(e&&(e=e.trim()))if(t.classList)-1<e.indexOf(" ")?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";0<=n.indexOf(r);)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function ii(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&m(t,oi(e.name||"v")),m(t,e),t}return"string"==typeof e?oi(e):void 0}}var oi=e(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),ai=B&&!J,si="transition",ci="animation",li="transition",ui="transitionend",fi="animation",pi="animationend";ai&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(li="WebkitTransition",ui="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(fi="WebkitAnimation",pi="webkitAnimationEnd"));var di=B?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function vi(e){di(function(){di(e)})}function hi(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),ni(e,t))}function mi(e,t){e._transitionClasses&&f(e._transitionClasses,t),ri(e,t)}function yi(t,e,n){var r=_i(t,e),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===si?ui:pi,c=0,l=function(){t.removeEventListener(s,u),n()},u=function(e){e.target===t&&++c>=a&&l()};setTimeout(function(){c<a&&l()},o+1),t.addEventListener(s,u)}var gi=/\b(transform|all)(,|$)/;function _i(e,t){var n,r=window.getComputedStyle(e),i=r[li+"Delay"].split(", "),o=r[li+"Duration"].split(", "),a=bi(i,o),s=r[fi+"Delay"].split(", "),c=r[fi+"Duration"].split(", "),l=bi(s,c),u=0,f=0;return t===si?0<a&&(n=si,u=a,f=o.length):t===ci?0<l&&(n=ci,u=l,f=c.length):f=(n=0<(u=Math.max(a,l))?l<a?si:ci:null)?n===si?o.length:c.length:0,{type:n,timeout:u,propCount:f,hasTransform:n===si&&gi.test(r[li+"Property"])}}function bi(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max.apply(null,e.map(function(e,t){return $i(e)+$i(n[t])}))}function $i(e){return 1e3*Number(e.slice(0,-1))}function wi(n,e){var r=n.elm;D(r._leaveCb)&&(r._leaveCb.cancelled=!0,r._leaveCb());var t=ii(n.data.transition);if(!M(t)&&!D(r._enterCb)&&1===r.nodeType){for(var i=t.css,o=t.type,a=t.enterClass,s=t.enterToClass,c=t.enterActiveClass,l=t.appearClass,u=t.appearToClass,f=t.appearActiveClass,p=t.beforeEnter,d=t.enter,v=t.afterEnter,h=t.enterCancelled,m=t.beforeAppear,y=t.appear,g=t.afterAppear,_=t.appearCancelled,b=t.duration,$=mt,w=mt.$vnode;w&&w.parent;)$=(w=w.parent).context;var C=!$._isMounted||!n.isRootInsert;if(!C||y||""===y){var x=C&&l?l:a,k=C&&f?f:c,A=C&&u?u:s,O=C&&m||p,S=C&&"function"==typeof y?y:d,T=C&&g||v,E=C&&_||h,j=F(P(b)?b.enter:b),N=!1!==i&&!J,L=ki(S),I=r._enterCb=R(function(){N&&(mi(r,A),mi(r,k)),I.cancelled?(N&&mi(r,x),E&&E(r)):T&&T(r),r._enterCb=null});n.data.show||rt(n,"insert",function(){var e=r.parentNode,t=e&&e._pending&&e._pending[n.key];t&&t.tag===n.tag&&t.elm._leaveCb&&t.elm._leaveCb(),S&&S(r,I)}),O&&O(r),N&&(hi(r,x),hi(r,k),vi(function(){mi(r,x),I.cancelled||(hi(r,A),L||(xi(j)?setTimeout(I,j):yi(r,o,I)))})),n.data.show&&(e&&e(),S&&S(r,I)),N||L||I()}}}function Ci(e,t){var n=e.elm;D(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var r=ii(e.data.transition);if(M(r)||1!==n.nodeType)return t();if(!D(n._leaveCb)){var i=r.css,o=r.type,a=r.leaveClass,s=r.leaveToClass,c=r.leaveActiveClass,l=r.beforeLeave,u=r.leave,f=r.afterLeave,p=r.leaveCancelled,d=r.delayLeave,v=r.duration,h=!1!==i&&!J,m=ki(u),y=F(P(v)?v.leave:v),g=n._leaveCb=R(function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),h&&(mi(n,s),mi(n,c)),g.cancelled?(h&&mi(n,a),p&&p(n)):(t(),f&&f(n)),n._leaveCb=null});d?d(_):_()}function _(){g.cancelled||(e.data.show||((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),l&&l(n),h&&(hi(n,a),hi(n,c),vi(function(){mi(n,a),g.cancelled||(hi(n,s),m||(xi(y)?setTimeout(g,y):yi(n,o,g)))})),u&&u(n,g),h||m||g())}}function xi(e){return"number"==typeof e&&!isNaN(e)}function ki(e){if(M(e))return!1;var t=e.fns;return D(t)?ki(Array.isArray(t)?t[0]:t):1<(e._length||e.length)}function Ai(e,t){!0!==t.data.show&&wi(t)}var Oi=function(e){var r,t,g={},n=e.modules,_=e.nodeOps;for(r=0;r<Xn.length;++r)for(g[Xn[r]]=[],t=0;t<n.length;++t)D(n[t][Xn[r]])&&g[Xn[r]].push(n[t][Xn[r]]);function o(e){var t=_.parentNode(e);D(t)&&_.removeChild(t,e)}function b(e,t,n,r,i,o,a){if(D(e.elm)&&D(o)&&(e=o[a]=de(e)),e.isRootInsert=!i,!function(e,t,n,r){var i=e.data;if(D(i)){var o=D(e.componentInstance)&&i.keepAlive;if(D(i=i.hook)&&D(i=i.init)&&i(e,!1,n,r),D(e.componentInstance))return d(e,t),S(o)&&function(e,t,n,r){for(var i,o=e;o.componentInstance;)if(o=o.componentInstance._vnode,D(i=o.data)&&D(i=i.transition)){for(i=0;i<g.activate.length;++i)g.activate[i](Zn,o);t.push(o);break}u(n,e.elm,r)}(e,t,n,r),!0}}(e,t,n,r)){var s=e.data,c=e.children,l=e.tag;D(l)?(e.elm=e.ns?_.createElementNS(e.ns,l):_.createElement(l,e),f(e),v(e,c,t),D(s)&&h(e,t)):S(e.isComment)?e.elm=_.createComment(e.text):e.elm=_.createTextNode(e.text),u(n,e.elm,r)}}function d(e,t){D(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,$(e)?(h(e,t),f(e)):(Gn(e),t.push(e))}function u(e,t,n){D(e)&&(D(n)?n.parentNode===e&&_.insertBefore(e,t,n):_.appendChild(e,t))}function v(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)b(t[r],n,e.elm,null,!0,t,r);else T(e.text)&&_.appendChild(e.elm,_.createTextNode(String(e.text)))}function $(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return D(e.tag)}function h(e,t){for(var n=0;n<g.create.length;++n)g.create[n](Zn,e);D(r=e.data.hook)&&(D(r.create)&&r.create(Zn,e),D(r.insert)&&t.push(e))}function f(e){var t;if(D(t=e.fnScopeId))_.setStyleScope(e.elm,t);else for(var n=e;n;)D(t=n.context)&&D(t=t.$options._scopeId)&&_.setStyleScope(e.elm,t),n=n.parent;D(t=mt)&&t!==e.context&&t!==e.fnContext&&D(t=t.$options._scopeId)&&_.setStyleScope(e.elm,t)}function y(e,t,n,r,i,o){for(;r<=i;++r)b(n[r],o,e,t,!1,n,r)}function w(e){var t,n,r=e.data;if(D(r))for(D(t=r.hook)&&D(t=t.destroy)&&t(e),t=0;t<g.destroy.length;++t)g.destroy[t](e);if(D(t=e.children))for(n=0;n<e.children.length;++n)w(e.children[n])}function C(e,t,n,r){for(;n<=r;++n){var i=t[n];D(i)&&(D(i.tag)?(a(i),w(i)):o(i.elm))}}function a(e,t){if(D(t)||D(e.data)){var n,r=g.remove.length+1;for(D(t)?t.listeners+=r:t=function(e,t){function n(){0==--n.listeners&&o(e)}return n.listeners=t,n}(e.elm,r),D(n=e.componentInstance)&&D(n=n._vnode)&&D(n.data)&&a(n,t),n=0;n<g.remove.length;++n)g.remove[n](e,t);D(n=e.data.hook)&&D(n=n.remove)?n(e,t):t()}else o(e.elm)}function x(e,t,n,r){for(var i=n;i<r;i++){var o=t[i];if(D(o)&&Yn(e,o))return i}}function k(e,t,n,r){if(e!==t){var i=t.elm=e.elm;if(S(e.isAsyncPlaceholder))D(t.asyncFactory.resolved)?O(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(S(t.isStatic)&&S(e.isStatic)&&t.key===e.key&&(S(t.isCloned)||S(t.isOnce)))t.componentInstance=e.componentInstance;else{var o,a=t.data;D(a)&&D(o=a.hook)&&D(o=o.prepatch)&&o(e,t);var s=e.children,c=t.children;if(D(a)&&$(t)){for(o=0;o<g.update.length;++o)g.update[o](e,t);D(o=a.hook)&&D(o=o.update)&&o(e,t)}M(t.text)?D(s)&&D(c)?s!==c&&function(e,t,n,r,i){for(var o,a,s,c=0,l=0,u=t.length-1,f=t[0],p=t[u],d=n.length-1,v=n[0],h=n[d],m=!i;c<=u&&l<=d;)M(f)?f=t[++c]:M(p)?p=t[--u]:Yn(f,v)?(k(f,v,r),f=t[++c],v=n[++l]):Yn(p,h)?(k(p,h,r),p=t[--u],h=n[--d]):Yn(f,h)?(k(f,h,r),m&&_.insertBefore(e,f.elm,_.nextSibling(p.elm)),f=t[++c],h=n[--d]):(Yn(p,v)?(k(p,v,r),m&&_.insertBefore(e,p.elm,f.elm),p=t[--u]):(M(o)&&(o=Qn(t,c,u)),M(a=D(v.key)?o[v.key]:x(v,t,c,u))?b(v,r,e,f.elm,!1,n,l):Yn(s=t[a],v)?(k(s,v,r),t[a]=void 0,m&&_.insertBefore(e,s.elm,f.elm)):b(v,r,e,f.elm,!1,n,l)),v=n[++l]);u<c?y(e,M(n[d+1])?null:n[d+1].elm,n,l,d,r):d<l&&C(0,t,c,u)}(i,s,c,n,r):D(c)?(D(e.text)&&_.setTextContent(i,""),y(i,null,c,0,c.length-1,n)):D(s)?C(0,s,0,s.length-1):D(e.text)&&_.setTextContent(i,""):e.text!==t.text&&_.setTextContent(i,t.text),D(a)&&D(o=a.hook)&&D(o=o.postpatch)&&o(e,t)}}}function A(e,t,n){if(S(n)&&D(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}var m=s("attrs,class,staticClass,staticStyle,key");function O(e,t,n,r){var i,o=t.tag,a=t.data,s=t.children;if(r=r||a&&a.pre,t.elm=e,S(t.isComment)&&D(t.asyncFactory))return t.isAsyncPlaceholder=!0;if(D(a)&&(D(i=a.hook)&&D(i=i.init)&&i(t,!0),D(i=t.componentInstance)))return d(t,n),!0;if(D(o)){if(D(s))if(e.hasChildNodes())if(D(i=a)&&D(i=i.domProps)&&D(i=i.innerHTML)){if(i!==e.innerHTML)return!1}else{for(var c=!0,l=e.firstChild,u=0;u<s.length;u++){if(!l||!O(l,s[u],n,r)){c=!1;break}l=l.nextSibling}if(!c||l)return!1}else v(t,s,n);if(D(a)){var f=!1;for(var p in a)if(!m(p)){f=!0,h(t,n);break}!f&&a.class&&Ye(a.class)}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,r,i,o){if(!M(t)){var a,s=!1,c=[];if(M(e))s=!0,b(t,c,i,o);else{var l=D(e.nodeType);if(!l&&Yn(e,t))k(e,t,c,r);else{if(l){if(1===e.nodeType&&e.hasAttribute(E)&&(e.removeAttribute(E),n=!0),S(n)&&O(e,t,c))return A(t,c,!0),e;a=e,e=new le(_.tagName(a).toLowerCase(),{},[],void 0,a)}var u=e.elm,f=_.parentNode(u);if(b(t,c,u._leaveCb?null:f,_.nextSibling(u)),D(t.parent))for(var p=t.parent,d=$(t);p;){for(var v=0;v<g.destroy.length;++v)g.destroy[v](p);if(p.elm=t.elm,d){for(var h=0;h<g.create.length;++h)g.create[h](Zn,p);var m=p.data.hook.insert;if(m.merged)for(var y=1;y<m.fns.length;y++)m.fns[y]()}else Gn(p);p=p.parent}D(f)?C(0,[e],0,0):D(e.tag)&&w(e)}}return A(t,c,s),t.elm}D(e)&&w(e)}}({nodeOps:qn,modules:[lr,yr,Ur,zr,ti,B?{create:Ai,activate:Ai,remove:function(e,t){!0!==e.data.show?Ci(e,t):t()}}:{}].concat(or)});J&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Mi(e,"input")});var Si={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?rt(n,"postpatch",function(){Si.componentUpdated(e,t,n)}):Ti(e,t,n.context),e._vOptions=[].map.call(e.options,Ni)):("textarea"===n.tag||Kn(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Li),e.addEventListener("compositionend",Ii),e.addEventListener("change",Ii),J&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){Ti(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Ni);if(i.some(function(e,t){return!C(e,r[t])}))(e.multiple?t.value.some(function(e){return ji(e,i)}):t.value!==t.oldValue&&ji(t.value,i))&&Mi(e,"change")}}};function Ti(e,t,n){Ei(e,t,n),(K||q)&&setTimeout(function(){Ei(e,t,n)},0)}function Ei(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=-1<x(r,Ni(a)),a.selected!==o&&(a.selected=o);else if(C(Ni(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function ji(t,e){return e.every(function(e){return!C(e,t)})}function Ni(e){return"_value"in e?e._value:e.value}function Li(e){e.target.composing=!0}function Ii(e){e.target.composing&&(e.target.composing=!1,Mi(e.target,"input"))}function Mi(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Di(e){return!e.componentInstance||e.data&&e.data.transition?e:Di(e.componentInstance._vnode)}var Pi={model:Si,show:{bind:function(e,t,n){var r=t.value,i=(n=Di(n)).data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,wi(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;!r!=!t.oldValue&&((n=Di(n)).data&&n.data.transition?(n.data.show=!0,r?wi(n,function(){e.style.display=e.__vOriginalDisplay}):Ci(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}}},Fi={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Ri(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Ri(lt(t.children)):e}function Hi(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[g(o)]=i[o];return t}function Bi(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}var Ui={name:"transition",props:Fi,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag||ct(e)})).length){var r=this.mode,i=n[0];if(function(e){for(;e=e.parent;)if(e.data.transition)return!0}(this.$vnode))return i;var o=Ri(i);if(!o)return i;if(this._leaving)return Bi(e,i);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:T(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var s,c,l=(o.data||(o.data={})).transition=Hi(this),u=this._vnode,f=Ri(u);if(o.data.directives&&o.data.directives.some(function(e){return"show"===e.name})&&(o.data.show=!0),f&&f.data&&(s=o,(c=f).key!==s.key||c.tag!==s.tag)&&!ct(f)&&(!f.componentInstance||!f.componentInstance._vnode.isComment)){var p=f.data.transition=m({},l);if("out-in"===r)return this._leaving=!0,rt(p,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),Bi(e,i);if("in-out"===r){if(ct(o))return u;var d,v=function(){d()};rt(l,"afterEnter",v),rt(l,"enterCancelled",v),rt(p,"delayLeave",function(e){d=e})}}return i}}},Vi=m({tag:String,moveClass:String},Fi);function zi(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Ki(e){e.data.newPos=e.elm.getBoundingClientRect()}function Ji(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}delete Vi.mode;var qi={Transition:Ui,TransitionGroup:{props:Vi,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Hi(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),((n[c.key]=c).data||(c.data={})).transition=a)}if(r){for(var l=[],u=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?l.push(p):u.push(p)}this.kept=e(t,null,l),this.removed=u}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,r=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,r)&&(e.forEach(zi),e.forEach(Ki),e.forEach(Ji),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,t=n.style;hi(n,r),t.transform=t.WebkitTransform=t.transitionDuration="",n.addEventListener(ui,n._moveCb=function e(t){t&&!/transform$/.test(t.propertyName)||(n.removeEventListener(ui,e),n._moveCb=null,mi(n,r))})}}))},methods:{hasMove:function(e,t){if(!ai)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){ri(n,e)}),ni(n,t),n.style.display="none",this.$el.appendChild(n);var r=_i(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};hn.config.mustUseProp=Sn,hn.config.isReservedTag=Un,hn.config.isReservedAttr=An,hn.config.getTagNamespace=Vn,hn.config.isUnknownElement=function(e){if(!B)return!0;if(Un(e))return!1;if(e=e.toLowerCase(),null!=zn[e])return zn[e];var t=document.createElement(e);return-1<e.indexOf("-")?zn[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:zn[e]=/HTMLUnknownElement/.test(t.toString())},m(hn.options.directives,Pi),m(hn.options.components,qi),hn.prototype.__patch__=B?Oi:$,hn.prototype.$mount=function(e,t){return e=e&&B?Jn(e):void 0,r=e,i=t,(n=this).$el=r,n.$options.render||(n.$options.render=fe),_t(n,"beforeMount"),new St(n,function(){n._update(n._render(),i)},$,null,!0),i=!1,null==n.$vnode&&(n._isMounted=!0,_t(n,"mounted")),n;var n,r,i},B&&setTimeout(function(){j.devtools&&Q&&Q.emit("init",hn)},0);var Wi=/\{\{((?:.|\n)+?)\}\}/g,Gi=/[-.*+?^${}()|[\]\/\\]/g,Zi=e(function(e){var t=e[0].replace(Gi,"\\$&"),n=e[1].replace(Gi,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")});var Xi={staticKeys:["staticClass"],transformNode:function(e,t){t.warn;var n=Sr(e,"class");n&&(e.staticClass=JSON.stringify(n));var r=Or(e,"class",!1);r&&(e.classBinding=r)},genData:function(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}};var Yi,Qi={staticKeys:["staticStyle"],transformNode:function(e,t){t.warn;var n=Sr(e,"style");n&&(e.staticStyle=JSON.stringify(Kr(n)));var r=Or(e,"style",!1);r&&(e.styleBinding=r)},genData:function(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}},eo=function(e){return(Yi=Yi||document.createElement("div")).innerHTML=e,Yi.textContent},to=s("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),no=s("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),ro=s("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),io=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,oo="[a-zA-Z_][\\w\\-\\.]*",ao="((?:"+oo+"\\:)?"+oo+")",so=new RegExp("^<"+ao),co=/^\s*(\/?)>/,lo=new RegExp("^<\\/"+ao+"[^>]*>"),uo=/^<!DOCTYPE [^>]+>/i,fo=/^<!\--/,po=/^<!\[/,vo=!1;"x".replace(/x(.)?/g,function(e,t){vo=""===t});var ho=s("script,style,textarea",!0),mo={},yo={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t"},go=/&(?:lt|gt|quot|amp);/g,_o=/&(?:lt|gt|quot|amp|#10|#9);/g,bo=s("pre,textarea",!0),$o=function(e,t){return e&&bo(e)&&"\n"===t[0]};var wo,Co,xo,ko,Ao,Oo,So,To,Eo=/^@|^v-on:/,jo=/^v-|^@|^:/,No=/([^]*?)\s+(?:in|of)\s+([^]*)/,Lo=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Io=/^\(|\)$/g,Mo=/:(.*)$/,Do=/^:|^v-bind:/,Po=/\.[^.]+/g,Fo=e(eo);function Ro(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:function(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}(t),parent:n,children:[]}}function Ho(e,p){wo=p.warn||$r,Oo=p.isPreTag||O,So=p.mustUseProp||O,To=p.getTagNamespace||O,xo=wr(p.modules,"transformNode"),ko=wr(p.modules,"preTransformNode"),Ao=wr(p.modules,"postTransformNode"),Co=p.delimiters;var d,v,h=[],i=!1!==p.preserveWhitespace,m=!1,y=!1;function g(e){e.pre&&(m=!1),Oo(e.tag)&&(y=!1);for(var t=0;t<Ao.length;t++)Ao[t](e,p)}return function(i,d){for(var e,v,h=[],m=d.expectHTML,y=d.isUnaryTag||O,g=d.canBeLeftOpenTag||O,a=0;i;){if(e=i,v&&ho(v)){var r=0,o=v.toLowerCase(),t=mo[o]||(mo[o]=new RegExp("([\\s\\S]*?)(</"+o+"[^>]*>)","i")),n=i.replace(t,function(e,t,n){return r=n.length,ho(o)||"noscript"===o||(t=t.replace(/<!\--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),$o(o,t)&&(t=t.slice(1)),d.chars&&d.chars(t),""});a+=i.length-n.length,i=n,A(o,a-r,a)}else{var s=i.indexOf("<");if(0===s){if(fo.test(i)){var c=i.indexOf("--\x3e");if(0<=c){d.shouldKeepComment&&d.comment(i.substring(4,c)),C(c+3);continue}}if(po.test(i)){var l=i.indexOf("]>");if(0<=l){C(l+2);continue}}var u=i.match(uo);if(u){C(u[0].length);continue}var f=i.match(lo);if(f){var p=a;C(f[0].length),A(f[1],p,a);continue}var _=x();if(_){k(_),$o(v,i)&&C(1);continue}}var b=void 0,$=void 0,w=void 0;if(0<=s){for($=i.slice(s);!(lo.test($)||so.test($)||fo.test($)||po.test($)||(w=$.indexOf("<",1))<0);)s+=w,$=i.slice(s);b=i.substring(0,s),C(s)}s<0&&(b=i,i=""),d.chars&&b&&d.chars(b)}if(i===e){d.chars&&d.chars(i);break}}function C(e){a+=e,i=i.substring(e)}function x(){var e=i.match(so);if(e){var t,n,r={tagName:e[1],attrs:[],start:a};for(C(e[0].length);!(t=i.match(co))&&(n=i.match(io));)C(n[0].length),r.attrs.push(n);if(t)return r.unarySlash=t[1],C(t[0].length),r.end=a,r}}function k(e){var t=e.tagName,n=e.unarySlash;m&&("p"===v&&ro(t)&&A(v),g(t)&&v===t&&A(t));for(var r,i,o,a=y(t)||!!n,s=e.attrs.length,c=new Array(s),l=0;l<s;l++){var u=e.attrs[l];vo&&-1===u[0].indexOf('""')&&(""===u[3]&&delete u[3],""===u[4]&&delete u[4],""===u[5]&&delete u[5]);var f=u[3]||u[4]||u[5]||"",p="a"===t&&"href"===u[1]?d.shouldDecodeNewlinesForHref:d.shouldDecodeNewlines;c[l]={name:u[1],value:(r=f,i=p,o=i?_o:go,r.replace(o,function(e){return yo[e]}))}}a||(h.push({tag:t,lowerCasedTag:t.toLowerCase(),attrs:c}),v=t),d.start&&d.start(t,c,a,e.start,e.end)}function A(e,t,n){var r,i;if(null==t&&(t=a),null==n&&(n=a),e&&(i=e.toLowerCase()),e)for(r=h.length-1;0<=r&&h[r].lowerCasedTag!==i;r--);else r=0;if(0<=r){for(var o=h.length-1;r<=o;o--)d.end&&d.end(h[o].tag,t,n);h.length=r,v=r&&h[r-1].tag}else"br"===i?d.start&&d.start(e,[],!0,t,n):"p"===i&&(d.start&&d.start(e,[],!1,t,n),d.end&&d.end(e,t,n))}A()}(e,{warn:wo,expectHTML:p.expectHTML,isUnaryTag:p.isUnaryTag,canBeLeftOpenTag:p.canBeLeftOpenTag,shouldDecodeNewlines:p.shouldDecodeNewlines,shouldDecodeNewlinesForHref:p.shouldDecodeNewlinesForHref,shouldKeepComment:p.comments,start:function(e,t,n){var r=v&&v.ns||To(e);K&&"svg"===r&&(t=function(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Ko.test(r.name)||(r.name=r.name.replace(Jo,""),t.push(r))}return t}(t));var i,o,a,s,c,l=Ro(e,t,v);r&&(l.ns=r),"style"!==(i=l).tag&&("script"!==i.tag||i.attrsMap.type&&"text/javascript"!==i.attrsMap.type)||Y()||(l.forbidden=!0);for(var u=0;u<ko.length;u++)l=ko[u](l,p)||l;if(m||(null!=Sr(o=l,"v-pre")&&(o.pre=!0),l.pre&&(m=!0)),Oo(l.tag)&&(y=!0),m?function(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}(l):l.processed||(Uo(l),function(e){var t=Sr(e,"v-if");if(t)e.if=t,Vo(e,{exp:t,block:e});else{null!=Sr(e,"v-else")&&(e.else=!0);var n=Sr(e,"v-else-if");n&&(e.elseif=n)}}(l),null!=Sr(a=l,"v-once")&&(a.once=!0),Bo(l,p)),d?h.length||d.if&&(l.elseif||l.else)&&Vo(d,{exp:l.elseif,block:l}):d=l,v&&!l.forbidden)if(l.elseif||l.else)s=l,(c=function(e){var t=e.length;for(;t--;){if(1===e[t].type)return e[t];e.pop()}}(v.children))&&c.if&&Vo(c,{exp:s.elseif,block:s});else if(l.slotScope){v.plain=!1;var f=l.slotTarget||'"default"';(v.scopedSlots||(v.scopedSlots={}))[f]=l}else v.children.push(l),l.parent=v;n?g(l):(v=l,h.push(l))},end:function(){var e=h[h.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!y&&e.children.pop(),h.length-=1,v=h[h.length-1],g(e)},chars:function(e){if(v&&(!K||"textarea"!==v.tag||v.attrsMap.placeholder!==e)){var t,n,r=v.children;if(e=y||e.trim()?"script"===(t=v).tag||"style"===t.tag?e:Fo(e):i&&r.length?" ":"")!m&&" "!==e&&(n=function(e,t){var n=t?Zi(t):Wi;if(n.test(e)){for(var r,i,o,a=[],s=[],c=n.lastIndex=0;r=n.exec(e);){c<(i=r.index)&&(s.push(o=e.slice(c,i)),a.push(JSON.stringify(o)));var l=_r(r[1].trim());a.push("_s("+l+")"),s.push({"@binding":l}),c=i+r[0].length}return c<e.length&&(s.push(o=e.slice(c)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}(e,Co))?r.push({type:2,expression:n.expression,tokens:n.tokens,text:e}):" "===e&&r.length&&" "===r[r.length-1].text||r.push({type:3,text:e})}},comment:function(e){v.children.push({type:3,text:e,isComment:!0})}}),d}function Bo(e,t){var n,r,i,o;(r=Or(n=e,"key"))&&(n.key=r),e.plain=!e.key&&!e.attrsList.length,(o=Or(i=e,"ref"))&&(i.ref=o,i.refInFor=function(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}(i)),function(e){if("slot"===e.tag)e.slotName=Or(e,"name");else{var t;"template"===e.tag?(t=Sr(e,"scope"),e.slotScope=t||Sr(e,"slot-scope")):(t=Sr(e,"slot-scope"))&&(e.slotScope=t);var n=Or(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,"template"===e.tag||e.slotScope||xr(e,"slot",n))}}(e),function(e){var t;(t=Or(e,"is"))&&(e.component=t);null!=Sr(e,"inline-template")&&(e.inlineTemplate=!0)}(e);for(var a=0;a<xo.length;a++)e=xo[a](e,t)||e;!function(e){var t,n,r,i,o,a,s,c=e.attrsList;for(t=0,n=c.length;t<n;t++)if(r=i=c[t].name,o=c[t].value,jo.test(r))if(e.hasBindings=!0,(a=zo(r))&&(r=r.replace(Po,"")),Do.test(r))r=r.replace(Do,""),o=_r(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=g(r))&&(r="innerHTML")),a.camel&&(r=g(r)),a.sync&&Ar(e,"update:"+g(r),Er(o,"$event"))),s||!e.component&&So(e.tag,e.attrsMap.type,r)?Cr(e,r,o):xr(e,r,o);else if(Eo.test(r))r=r.replace(Eo,""),Ar(e,r,o,a,!1);else{var l=(r=r.replace(jo,"")).match(Mo),u=l&&l[1];u&&(r=r.slice(0,-(u.length+1))),p=r,d=i,v=o,h=u,m=a,((f=e).directives||(f.directives=[])).push({name:p,rawName:d,value:v,arg:h,modifiers:m}),f.plain=!1}else xr(e,r,JSON.stringify(o)),!e.component&&"muted"===r&&So(e.tag,e.attrsMap.type,r)&&Cr(e,r,"true");var f,p,d,v,h,m}(e)}function Uo(e){var t;if(t=Sr(e,"v-for")){var n=function(e){var t=e.match(No);if(!t)return;var n={};n.for=t[2].trim();var r=t[1].trim().replace(Io,""),i=r.match(Lo);i?(n.alias=r.replace(Lo,""),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(t);n&&m(e,n)}}function Vo(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function zo(e){var t=e.match(Po);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}var Ko=/^xmlns:NS\d+/,Jo=/^NS\d+:/;function qo(e){return Ro(e.tag,e.attrsList.slice(),e.parent)}var Wo=[Xi,Qi,{preTransformNode:function(e,t){if("input"===e.tag){var n,r=e.attrsMap;if(!r["v-model"])return;if((r[":type"]||r["v-bind:type"])&&(n=Or(e,"type")),r.type||n||!r["v-bind"]||(n="("+r["v-bind"]+").type"),n){var i=Sr(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=Sr(e,"v-else",!0),s=Sr(e,"v-else-if",!0),c=qo(e);Uo(c),kr(c,"type","checkbox"),Bo(c,t),c.processed=!0,c.if="("+n+")==='checkbox'"+o,Vo(c,{exp:c.if,block:c});var l=qo(e);Sr(l,"v-for",!0),kr(l,"type","radio"),Bo(l,t),Vo(c,{exp:"("+n+")==='radio'"+o,block:l});var u=qo(e);return Sr(u,"v-for",!0),kr(u,":type",n),Bo(u,t),Vo(c,{exp:i,block:u}),a?c.else=!0:s&&(c.elseif=s),c}}}}];var Go,Zo,Xo,Yo={expectHTML:!0,modules:Wo,directives:{model:function(e,t,n){var r,i,o,a,s,c,l,u,f,p,d,v,h,m,y,g,_=t.value,b=t.modifiers,$=e.tag,w=e.attrsMap.type;if(e.component)return Tr(e,_,b),!1;if("select"===$)h=e,m=_,g=(g='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+((y=b)&&y.number?"_n(val)":"val")+"});")+" "+Er(m,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),Ar(h,"change",g,null,!0);else if("input"===$&&"checkbox"===w)c=e,l=_,f=(u=b)&&u.number,p=Or(c,"value")||"null",d=Or(c,"true-value")||"true",v=Or(c,"false-value")||"false",Cr(c,"checked","Array.isArray("+l+")?_i("+l+","+p+")>-1"+("true"===d?":("+l+")":":_q("+l+","+d+")")),Ar(c,"change","var $$a="+l+",$$el=$event.target,$$c=$$el.checked?("+d+"):("+v+");if(Array.isArray($$a)){var $$v="+(f?"_n("+p+")":p)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+Er(l,"$$a.concat([$$v])")+")}else{$$i>-1&&("+Er(l,"$$a.slice(0,$$i).concat($$a.slice($$i+1))")+")}}else{"+Er(l,"$$c")+"}",null,!0);else if("input"===$&&"radio"===w)r=e,i=_,a=(o=b)&&o.number,s=Or(r,"value")||"null",Cr(r,"checked","_q("+i+","+(s=a?"_n("+s+")":s)+")"),Ar(r,"change",Er(i,s),null,!0);else if("input"===$||"textarea"===$)!function(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,l=o?"change":"range"===r?Pr:"input",u="$event.target.value";s&&(u="$event.target.value.trim()"),a&&(u="_n("+u+")");var f=Er(t,u);c&&(f="if($event.target.composing)return;"+f),Cr(e,"value","("+t+")"),Ar(e,l,f,null,!0),(s||a)&&Ar(e,"blur","$forceUpdate()")}(e,_,b);else if(!j.isReservedTag($))return Tr(e,_,b),!1;return!0},text:function(e,t){t.value&&Cr(e,"textContent","_s("+t.value+")")},html:function(e,t){t.value&&Cr(e,"innerHTML","_s("+t.value+")")}},isPreTag:function(e){return"pre"===e},isUnaryTag:to,mustUseProp:Sn,canBeLeftOpenTag:no,isReservedTag:Un,getTagNamespace:Vn,staticKeys:(Go=Wo,Go.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(","))},Qo=e(function(e){return s("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))});function ea(e,t){e&&(Zo=Qo(t.staticKeys||""),Xo=t.isReservedTag||O,function e(t){t.static=function(e){if(2===e.type)return!1;if(3===e.type)return!0;return!(!e.pre&&(e.hasBindings||e.if||e.for||c(e.tag)||!Xo(e.tag)||function(e){for(;e.parent;){if("template"!==(e=e.parent).tag)return!1;if(e.for)return!0}return!1}(e)||!Object.keys(e).every(Zo)))}(t);if(1===t.type){if(!Xo(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var n=0,r=t.children.length;n<r;n++){var i=t.children[n];e(i),i.static||(t.static=!1)}if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++){var s=t.ifConditions[o].block;e(s),s.static||(t.static=!1)}}}(e),function e(t,n){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=n),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var r=0,i=t.children.length;r<i;r++)e(t.children[r],n||!!t.for);if(t.ifConditions)for(var o=1,a=t.ifConditions.length;o<a;o++)e(t.ifConditions[o].block,n)}}(e,!1))}var ta=/^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,na=/^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,ra={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},ia={esc:"Escape",tab:"Tab",enter:"Enter",space:" ",up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete"]},oa=function(e){return"if("+e+")return null;"},aa={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:oa("$event.target !== $event.currentTarget"),ctrl:oa("!$event.ctrlKey"),shift:oa("!$event.shiftKey"),alt:oa("!$event.altKey"),meta:oa("!$event.metaKey"),left:oa("'button' in $event && $event.button !== 0"),middle:oa("'button' in $event && $event.button !== 1"),right:oa("'button' in $event && $event.button !== 2")};function sa(e,t,n){var r=t?"nativeOn:{":"on:{";for(var i in e)r+='"'+i+'":'+ca(i,e[i])+",";return r.slice(0,-1)+"}"}function ca(t,e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return ca(t,e)}).join(",")+"]";var n=na.test(e.value),r=ta.test(e.value);if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(aa[s])o+=aa[s],ra[s]&&a.push(s);else if("exact"===s){var c=e.modifiers;o+=oa(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);return a.length&&(i+="if(!('button' in $event)&&"+a.map(la).join("&&")+")return null;"),o&&(i+=o),"function($event){"+i+(n?"return "+e.value+"($event)":r?"return ("+e.value+")($event)":e.value)+"}"}return n||r?e.value:"function($event){"+e.value+"}"}function la(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=ra[e],r=ia[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key,"+JSON.stringify(r)+")"}var ua={on:function(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}},bind:function(t,n){t.wrapData=function(e){return"_b("+e+",'"+t.tag+"',"+n.value+","+(n.modifiers&&n.modifiers.prop?"true":"false")+(n.modifiers&&n.modifiers.sync?",true":"")+")"}},cloak:$},fa=function(e){this.options=e,this.warn=e.warn||$r,this.transforms=wr(e.modules,"transformCode"),this.dataGenFns=wr(e.modules,"genData"),this.directives=m(m({},ua),e.directives);var t=e.isReservedTag||O;this.maybeComponent=function(e){return!t(e.tag)},this.onceId=0,this.staticRenderFns=[]};function pa(e,t){var n=new fa(t);return{render:"with(this){return "+(e?da(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function da(e,t){if(e.staticRoot&&!e.staticProcessed)return va(e,t);if(e.once&&!e.onceProcessed)return ha(e,t);if(e.for&&!e.forProcessed)return f=t,v=(u=e).for,h=u.alias,m=u.iterator1?","+u.iterator1:"",y=u.iterator2?","+u.iterator2:"",u.forProcessed=!0,(d||"_l")+"(("+v+"),function("+h+m+y+"){return "+(p||da)(u,f)+"})";if(e.if&&!e.ifProcessed)return ma(e,t);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return function(e,t){var n=e.slotName||'"default"',r=_a(e,t),i="_t("+n+(r?","+r:""),o=e.attrs&&"{"+e.attrs.map(function(e){return g(e.name)+":"+e.value}).join(",")+"}",a=e.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(e,t);var n;if(e.component)a=e.component,c=t,l=(s=e).inlineTemplate?null:_a(s,c,!0),n="_c("+a+","+ya(s,c)+(l?","+l:"")+")";else{var r=e.plain?void 0:ya(e,t),i=e.inlineTemplate?null:_a(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return _a(e,t)||"void 0";var a,s,c,l,u,f,p,d,v,h,m,y}function va(e,t){return e.staticProcessed=!0,t.staticRenderFns.push("with(this){return "+da(e,t)+"}"),"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function ha(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return ma(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+da(e,t)+","+t.onceId+++","+n+")":da(e,t)}return va(e,t)}function ma(e,t,n,r){return e.ifProcessed=!0,function e(t,n,r,i){if(!t.length)return i||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+a(o.block)+":"+e(t,n,r,i):""+a(o.block);function a(e){return r?r(e,n):e.once?ha(e,n):da(e,n)}}(e.ifConditions.slice(),t,n,r)}function ya(e,t){var n,r,i="{",o=function(e,t){var n=e.directives;if(!n)return;var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var l=t.directives[o.name];l&&(a=!!l(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(c)return s.slice(0,-1)+"]"}(e,t);o&&(i+=o+","),e.key&&(i+="key:"+e.key+","),e.ref&&(i+="ref:"+e.ref+","),e.refInFor&&(i+="refInFor:true,"),e.pre&&(i+="pre:true,"),e.component&&(i+='tag:"'+e.tag+'",');for(var a=0;a<t.dataGenFns.length;a++)i+=t.dataGenFns[a](e);if(e.attrs&&(i+="attrs:{"+wa(e.attrs)+"},"),e.props&&(i+="domProps:{"+wa(e.props)+"},"),e.events&&(i+=sa(e.events,!1,t.warn)+","),e.nativeEvents&&(i+=sa(e.nativeEvents,!0,t.warn)+","),e.slotTarget&&!e.slotScope&&(i+="slot:"+e.slotTarget+","),e.scopedSlots&&(i+=(n=e.scopedSlots,r=t,"scopedSlots:_u(["+Object.keys(n).map(function(e){return ga(e,n[e],r)}).join(",")+"]),")),e.model&&(i+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var s=function(e,t){var n=e.children[0];if(1===n.type){var r=pa(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}(e,t);s&&(i+=s+",")}return i=i.replace(/,$/,"")+"}",e.wrapData&&(i=e.wrapData(i)),e.wrapListeners&&(i=e.wrapListeners(i)),i}function ga(e,t,n){return t.for&&!t.forProcessed?(r=e,o=n,a=(i=t).for,s=i.alias,c=i.iterator1?","+i.iterator1:"",l=i.iterator2?","+i.iterator2:"",i.forProcessed=!0,"_l(("+a+"),function("+s+c+l+"){return "+ga(r,i,o)+"})"):"{key:"+e+",fn:"+("function("+String(t.slotScope)+"){return "+("template"===t.tag?t.if?t.if+"?"+(_a(t,n)||"undefined")+":undefined":_a(t,n)||"undefined":da(t,n))+"}")+"}";var r,i,o,a,s,c,l}function _a(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||da)(a,t);var s=n?function(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(ba(i)||i.ifConditions&&i.ifConditions.some(function(e){return ba(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}(o,t.maybeComponent):0,c=i||$a;return"["+o.map(function(e){return c(e,t)}).join(",")+"]"+(s?","+s:"")}}function ba(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function $a(e,t){return 1===e.type?da(e,t):3===e.type&&e.isComment?(r=e,"_e("+JSON.stringify(r.text)+")"):"_v("+(2===(n=e).type?n.expression:Ca(JSON.stringify(n.text)))+")";var n,r}function wa(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+Ca(r.value)+","}return t.slice(0,-1)}function Ca(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)");function xa(t,n){try{return new Function(t)}catch(e){return n.push({err:e,code:t}),$}}var ka,Aa,Oa=(ka=function(e,t){var n=Ho(e.trim(),t);!1!==t.optimize&&ea(n,t);var r=pa(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}},function(s){function e(e,t){var n=Object.create(s),r=[],i=[];if(n.warn=function(e,t){(t?i:r).push(e)},t)for(var o in t.modules&&(n.modules=(s.modules||[]).concat(t.modules)),t.directives&&(n.directives=m(Object.create(s.directives||null),t.directives)),t)"modules"!==o&&"directives"!==o&&(n[o]=t[o]);var a=ka(e,n);return a.errors=r,a.tips=i,a}return{compile:e,compileToFunctions:(c=e,l=Object.create(null),function(e,t,n){(t=m({},t)).warn,delete t.warn;var r=t.delimiters?String(t.delimiters)+e:e;if(l[r])return l[r];var i=c(e,t),o={},a=[];return o.render=xa(i.render,a),o.staticRenderFns=i.staticRenderFns.map(function(e){return xa(e,a)}),l[r]=o})};var c,l})(Yo).compileToFunctions;function Sa(e){return(Aa=Aa||document.createElement("div")).innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',0<Aa.innerHTML.indexOf("&#10;")}var Ta=!!B&&Sa(!1),Ea=!!B&&Sa(!0),ja=e(function(e){var t=Jn(e);return t&&t.innerHTML}),Na=hn.prototype.$mount;return hn.prototype.$mount=function(e,t){if((e=e&&Jn(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=ja(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=function(e){{if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}}(e));if(r){var i=Oa(r,{shouldDecodeNewlines:Ta,shouldDecodeNewlinesForHref:Ea,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return Na.call(this,e,t)},hn.compile=Oa,hn});;// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE
// This is CodeMirror (http://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .
//PANEL//
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE
//SEARCH//
// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: http://codemirror.net/LICENSE
!function(e){if("object"==typeof exports&&"object"==typeof module)module.exports=e()
else{if("function"==typeof define&&define.amd)return define([],e);(this||window).CodeMirror=e()}}(function(){"use strict"
function e(r,n){if(!(this instanceof e))return new e(r,n)
this.options=n=n?Ii(n):{},Ii(Jo,n,!1),d(n)
var i=n.value
"string"==typeof i&&(i=new Sl(i,n.mode,null,n.lineSeparator)),this.doc=i
var o=new e.inputStyles[n.inputStyle](this),l=this.display=new t(r,i,o)
l.wrapper.CodeMirror=this,u(this),s(this),n.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),n.autofocus&&!Oo&&l.input.focus(),m(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,delayingBlurEvent:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,selectingText:!1,draggingText:!1,highlight:new Wi,keySeq:null,specialChars:null}
var a=this
bo&&11>wo&&setTimeout(function(){a.display.input.reset(!0)},20),Ut(this),qi(),wt(this),this.curOp.forceUpdate=!0,$n(this,i),n.autofocus&&!Oo||a.hasFocus()?setTimeout(Fi(vr,this),20):mr(this)
for(var c in el)el.hasOwnProperty(c)&&el[c](this,n[c],tl)
C(this),n.finishInit&&n.finishInit(this)
for(var h=0;h<ol.length;++h)ol[h](this)
Ct(this),xo&&n.lineWrapping&&"optimizelegibility"==getComputedStyle(l.lineDiv).textRendering&&(l.lineDiv.style.textRendering="auto")}function t(e,t,r){var n=this
this.input=r,n.scrollbarFiller=Ui("div",null,"CodeMirror-scrollbar-filler"),n.scrollbarFiller.setAttribute("cm-not-content","true"),n.gutterFiller=Ui("div",null,"CodeMirror-gutter-filler"),n.gutterFiller.setAttribute("cm-not-content","true"),n.lineDiv=Ui("div",null,"CodeMirror-code"),n.selectionDiv=Ui("div",null,null,"position: relative; z-index: 1"),n.cursorDiv=Ui("div",null,"CodeMirror-cursors"),n.measure=Ui("div",null,"CodeMirror-measure"),n.lineMeasure=Ui("div",null,"CodeMirror-measure"),n.lineSpace=Ui("div",[n.measure,n.lineMeasure,n.selectionDiv,n.cursorDiv,n.lineDiv],null,"position: relative; outline: none"),n.mover=Ui("div",[Ui("div",[n.lineSpace],"CodeMirror-lines")],null,"position: relative"),n.sizer=Ui("div",[n.mover],"CodeMirror-sizer"),n.sizerWidth=null,n.heightForcer=Ui("div",null,null,"position: absolute; height: "+El+"px; width: 1px;"),n.gutters=Ui("div",null,"CodeMirror-gutters"),n.lineGutter=null,n.scroller=Ui("div",[n.sizer,n.heightForcer,n.gutters],"CodeMirror-scroll"),n.scroller.setAttribute("tabIndex","-1"),n.wrapper=Ui("div",[n.scrollbarFiller,n.gutterFiller,n.scroller],"CodeMirror"),bo&&8>wo&&(n.gutters.style.zIndex=-1,n.scroller.style.paddingRight=0),xo||vo&&Oo||(n.scroller.draggable=!0),e&&(e.appendChild?e.appendChild(n.wrapper):e(n.wrapper)),n.viewFrom=n.viewTo=t.first,n.reportedViewFrom=n.reportedViewTo=t.first,n.view=[],n.renderedView=null,n.externalMeasured=null,n.viewOffset=0,n.lastWrapHeight=n.lastWrapWidth=0,n.updateLineNumbers=null,n.nativeBarWidth=n.barHeight=n.barWidth=0,n.scrollbarsClipped=!1,n.lineNumWidth=n.lineNumInnerWidth=n.lineNumChars=null,n.alignWidgets=!1,n.cachedCharWidth=n.cachedTextHeight=n.cachedPaddingH=null,n.maxLine=null,n.maxLineLength=0,n.maxLineChanged=!1,n.wheelDX=n.wheelDY=n.wheelStartX=n.wheelStartY=null,n.shift=!1,n.selForContextMenu=null,n.activeTouch=null,r.init(n)}function r(t){t.doc.mode=e.getMode(t.options,t.doc.modeOption),n(t)}function n(e){e.doc.iter(function(e){e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null)}),e.doc.frontier=e.doc.first,Re(e,100),e.state.modeGen++,e.curOp&&Pt(e)}function i(e){e.options.lineWrapping?(Zl(e.display.wrapper,"CodeMirror-wrap"),e.display.sizer.style.minWidth="",e.display.sizerWidth=null):($l(e.display.wrapper,"CodeMirror-wrap"),f(e)),l(e),Pt(e),st(e),setTimeout(function(){y(e)},100)}function o(e){var t=yt(e.display),r=e.options.lineWrapping,n=r&&Math.max(5,e.display.scroller.clientWidth/bt(e.display)-3)
return function(i){if(Cn(e.doc,i))return 0
var o=0
if(i.widgets)for(var l=0;l<i.widgets.length;l++)i.widgets[l].height&&(o+=i.widgets[l].height)
return r?o+(Math.ceil(i.text.length/n)||1)*t:o+t}}function l(e){var t=e.doc,r=o(e)
t.iter(function(e){var t=r(e)
t!=e.height&&ei(e,t)})}function s(e){e.display.wrapper.className=e.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+e.options.theme.replace(/(^|\s)\s*/g," cm-s-"),st(e)}function a(e){u(e),Pt(e),setTimeout(function(){x(e)},20)}function u(e){var t=e.display.gutters,r=e.options.gutters
Vi(t)
for(var n=0;n<r.length;++n){var i=r[n],o=t.appendChild(Ui("div",null,"CodeMirror-gutter "+i))
"CodeMirror-linenumbers"==i&&(e.display.lineGutter=o,o.style.width=(e.display.lineNumWidth||1)+"px")}t.style.display=n?"":"none",c(e)}function c(e){var t=e.display.gutters.offsetWidth
e.display.sizer.style.marginLeft=t+"px"}function h(e){if(0==e.height)return 0
for(var t,r=e.text.length,n=e;t=gn(n);){var i=t.find(0,!0)
n=i.from.line,r+=i.from.ch-i.to.ch}for(n=e;t=vn(n);){var i=t.find(0,!0)
r-=n.text.length-i.from.ch,n=i.to.line,r+=n.text.length-i.to.ch}return r}function f(e){var t=e.display,r=e.doc
t.maxLine=Zn(r,r.first),t.maxLineLength=h(t.maxLine),t.maxLineChanged=!0,r.iter(function(e){var r=h(e)
r>t.maxLineLength&&(t.maxLineLength=r,t.maxLine=e)})}function d(e){var t=Di(e.gutters,"CodeMirror-linenumbers");-1==t&&e.lineNumbers?e.gutters=e.gutters.concat(["CodeMirror-linenumbers"]):t>-1&&!e.lineNumbers&&(e.gutters=e.gutters.slice(0),e.gutters.splice(t,1))}function p(e){var t=e.display,r=t.gutters.offsetWidth,n=Math.round(e.doc.height+Ke(e.display))
return{clientHeight:t.scroller.clientHeight,viewHeight:t.wrapper.clientHeight,scrollWidth:t.scroller.scrollWidth,clientWidth:t.scroller.clientWidth,viewWidth:t.wrapper.clientWidth,barLeft:e.options.fixedGutter?r:0,docHeight:n,scrollHeight:n+Xe(e)+t.barHeight,nativeBarWidth:t.nativeBarWidth,gutterWidth:r}}function g(e,t,r){this.cm=r
var n=this.vert=Ui("div",[Ui("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),i=this.horiz=Ui("div",[Ui("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
e(n),e(i),Ol(n,"scroll",function(){n.clientHeight&&t(n.scrollTop,"vertical")}),Ol(i,"scroll",function(){i.clientWidth&&t(i.scrollLeft,"horizontal")}),this.checkedZeroWidth=!1,bo&&8>wo&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")}function v(){}function m(t){t.display.scrollbars&&(t.display.scrollbars.clear(),t.display.scrollbars.addClass&&$l(t.display.wrapper,t.display.scrollbars.addClass)),t.display.scrollbars=new e.scrollbarModel[t.options.scrollbarStyle](function(e){t.display.wrapper.insertBefore(e,t.display.scrollbarFiller),Ol(e,"mousedown",function(){t.state.focused&&setTimeout(function(){t.display.input.focus()},0)}),e.setAttribute("cm-not-content","true")},function(e,r){"horizontal"==r?ir(t,e):nr(t,e)},t),t.display.scrollbars.addClass&&Zl(t.display.wrapper,t.display.scrollbars.addClass)}function y(e,t){t||(t=p(e))
var r=e.display.barWidth,n=e.display.barHeight
b(e,t)
for(var i=0;4>i&&r!=e.display.barWidth||n!=e.display.barHeight;i++)r!=e.display.barWidth&&e.options.lineWrapping&&A(e),b(e,p(e)),r=e.display.barWidth,n=e.display.barHeight}function b(e,t){var r=e.display,n=r.scrollbars.update(t)
r.sizer.style.paddingRight=(r.barWidth=n.right)+"px",r.sizer.style.paddingBottom=(r.barHeight=n.bottom)+"px",n.right&&n.bottom?(r.scrollbarFiller.style.display="block",r.scrollbarFiller.style.height=n.bottom+"px",r.scrollbarFiller.style.width=n.right+"px"):r.scrollbarFiller.style.display="",n.bottom&&e.options.coverGutterNextToScrollbar&&e.options.fixedGutter?(r.gutterFiller.style.display="block",r.gutterFiller.style.height=n.bottom+"px",r.gutterFiller.style.width=t.gutterWidth+"px"):r.gutterFiller.style.display=""}function w(e,t,r){var n=r&&null!=r.top?Math.max(0,r.top):e.scroller.scrollTop
n=Math.floor(n-Ve(e))
var i=r&&null!=r.bottom?r.bottom:n+e.wrapper.clientHeight,o=ri(t,n),l=ri(t,i)
if(r&&r.ensure){var s=r.ensure.from.line,a=r.ensure.to.line
o>s?(o=s,l=ri(t,ni(Zn(t,s))+e.wrapper.clientHeight)):Math.min(a,t.lastLine())>=l&&(o=ri(t,ni(Zn(t,a))-e.wrapper.clientHeight),l=a)}return{from:o,to:Math.max(l,o+1)}}function x(e){var t=e.display,r=t.view
if(t.alignWidgets||t.gutters.firstChild&&e.options.fixedGutter){for(var n=L(t)-t.scroller.scrollLeft+e.doc.scrollLeft,i=t.gutters.offsetWidth,o=n+"px",l=0;l<r.length;l++)if(!r[l].hidden){e.options.fixedGutter&&r[l].gutter&&(r[l].gutter.style.left=o)
var s=r[l].alignable
if(s)for(var a=0;a<s.length;a++)s[a].style.left=o}e.options.fixedGutter&&(t.gutters.style.left=n+i+"px")}}function C(e){if(!e.options.lineNumbers)return!1
var t=e.doc,r=S(e.options,t.first+t.size-1),n=e.display
if(r.length!=n.lineNumChars){var i=n.measure.appendChild(Ui("div",[Ui("div",r)],"CodeMirror-linenumber CodeMirror-gutter-elt")),o=i.firstChild.offsetWidth,l=i.offsetWidth-o
return n.lineGutter.style.width="",n.lineNumInnerWidth=Math.max(o,n.lineGutter.offsetWidth-l)+1,n.lineNumWidth=n.lineNumInnerWidth+l,n.lineNumChars=n.lineNumInnerWidth?r.length:-1,n.lineGutter.style.width=n.lineNumWidth+"px",c(e),!0}return!1}function S(e,t){return String(e.lineNumberFormatter(t+e.firstLineNumber))}function L(e){return e.scroller.getBoundingClientRect().left-e.sizer.getBoundingClientRect().left}function T(e,t,r){var n=e.display
this.viewport=t,this.visible=w(n,e.doc,t),this.editorIsHidden=!n.wrapper.offsetWidth,this.wrapperHeight=n.wrapper.clientHeight,this.wrapperWidth=n.wrapper.clientWidth,this.oldDisplayWidth=_e(e),this.force=r,this.dims=D(e),this.events=[]}function k(e){var t=e.display
!t.scrollbarsClipped&&t.scroller.offsetWidth&&(t.nativeBarWidth=t.scroller.offsetWidth-t.scroller.clientWidth,t.heightForcer.style.height=Xe(e)+"px",t.sizer.style.marginBottom=-t.nativeBarWidth+"px",t.sizer.style.borderRightWidth=Xe(e)+"px",t.scrollbarsClipped=!0)}function M(e,t){var r=e.display,n=e.doc
if(t.editorIsHidden)return It(e),!1
if(!t.force&&t.visible.from>=r.viewFrom&&t.visible.to<=r.viewTo&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo)&&r.renderedView==r.view&&0==Gt(e))return!1
C(e)&&(It(e),t.dims=D(e))
var i=n.first+n.size,o=Math.max(t.visible.from-e.options.viewportMargin,n.first),l=Math.min(i,t.visible.to+e.options.viewportMargin)
r.viewFrom<o&&o-r.viewFrom<20&&(o=Math.max(n.first,r.viewFrom)),r.viewTo>l&&r.viewTo-l<20&&(l=Math.min(i,r.viewTo)),zo&&(o=wn(e.doc,o),l=xn(e.doc,l))
var s=o!=r.viewFrom||l!=r.viewTo||r.lastWrapHeight!=t.wrapperHeight||r.lastWrapWidth!=t.wrapperWidth
Bt(e,o,l),r.viewOffset=ni(Zn(e.doc,r.viewFrom)),e.display.mover.style.top=r.viewOffset+"px"
var a=Gt(e)
if(!s&&0==a&&!t.force&&r.renderedView==r.view&&(null==r.updateLineNumbers||r.updateLineNumbers>=r.viewTo))return!1
var u=ji()
return a>4&&(r.lineDiv.style.display="none"),E(e,r.updateLineNumbers,t.dims),a>4&&(r.lineDiv.style.display=""),r.renderedView=r.view,u&&ji()!=u&&u.offsetHeight&&u.focus(),Vi(r.cursorDiv),Vi(r.selectionDiv),r.gutters.style.height=r.sizer.style.minHeight=0,s&&(r.lastWrapHeight=t.wrapperHeight,r.lastWrapWidth=t.wrapperWidth,Re(e,400)),r.updateLineNumbers=null,!0}function N(e,t){for(var r=t.viewport,n=!0;(n&&e.options.lineWrapping&&t.oldDisplayWidth!=_e(e)||(r&&null!=r.top&&(r={top:Math.min(e.doc.height+Ke(e.display)-Ye(e),r.top)}),t.visible=w(e.display,e.doc,r),!(t.visible.from>=e.display.viewFrom&&t.visible.to<=e.display.viewTo)))&&M(e,t);n=!1){A(e)
var i=p(e)
Ee(e),W(e,i),y(e,i)}t.signal(e,"update",e),(e.display.viewFrom!=e.display.reportedViewFrom||e.display.viewTo!=e.display.reportedViewTo)&&(t.signal(e,"viewportChange",e,e.display.viewFrom,e.display.viewTo),e.display.reportedViewFrom=e.display.viewFrom,e.display.reportedViewTo=e.display.viewTo)}function O(e,t){var r=new T(e,t)
if(M(e,r)){A(e),N(e,r)
var n=p(e)
Ee(e),W(e,n),y(e,n),r.finish()}}function W(e,t){e.display.sizer.style.minHeight=t.docHeight+"px"
var r=t.docHeight+e.display.barHeight
e.display.heightForcer.style.top=r+"px",e.display.gutters.style.height=Math.max(r+Xe(e),t.clientHeight)+"px"}function A(e){for(var t=e.display,r=t.lineDiv.offsetTop,n=0;n<t.view.length;n++){var i,o=t.view[n]
if(!o.hidden){if(bo&&8>wo){var l=o.node.offsetTop+o.node.offsetHeight
i=l-r,r=l}else{var s=o.node.getBoundingClientRect()
i=s.bottom-s.top}var a=o.line.height-i
if(2>i&&(i=yt(t)),(a>.001||-.001>a)&&(ei(o.line,i),H(o.line),o.rest))for(var u=0;u<o.rest.length;u++)H(o.rest[u])}}}function H(e){if(e.widgets)for(var t=0;t<e.widgets.length;++t)e.widgets[t].height=e.widgets[t].node.parentNode.offsetHeight}function D(e){for(var t=e.display,r={},n={},i=t.gutters.clientLeft,o=t.gutters.firstChild,l=0;o;o=o.nextSibling,++l)r[e.options.gutters[l]]=o.offsetLeft+o.clientLeft+i,n[e.options.gutters[l]]=o.clientWidth
return{fixedPos:L(t),gutterTotalWidth:t.gutters.offsetWidth,gutterLeft:r,gutterWidth:n,wrapperWidth:t.wrapper.clientWidth}}function E(e,t,r){function n(t){var r=t.nextSibling
return xo&&Wo&&e.display.currentWheelTarget==t?t.style.display="none":t.parentNode.removeChild(t),r}for(var i=e.display,o=e.options.lineNumbers,l=i.lineDiv,s=l.firstChild,a=i.view,u=i.viewFrom,c=0;c<a.length;c++){var h=a[c]
if(h.hidden);else if(h.node&&h.node.parentNode==l){for(;s!=h.node;)s=n(s)
var f=o&&null!=t&&u>=t&&h.lineNumber
h.changes&&(Di(h.changes,"gutter")>-1&&(f=!1),P(e,h,u,r)),f&&(Vi(h.lineNumber),h.lineNumber.appendChild(document.createTextNode(S(e.options,u)))),s=h.node.nextSibling}else{var d=V(e,h,u,r)
l.insertBefore(d,s)}u+=h.size}for(;s;)s=n(s)}function P(e,t,r,n){for(var i=0;i<t.changes.length;i++){var o=t.changes[i]
"text"==o?R(e,t):"gutter"==o?G(e,t,r,n):"class"==o?B(t):"widget"==o&&U(e,t,n)}t.changes=null}function z(e){return e.node==e.text&&(e.node=Ui("div",null,null,"position: relative"),e.text.parentNode&&e.text.parentNode.replaceChild(e.node,e.text),e.node.appendChild(e.text),bo&&8>wo&&(e.node.style.zIndex=2)),e.node}function I(e){var t=e.bgClass?e.bgClass+" "+(e.line.bgClass||""):e.line.bgClass
if(t&&(t+=" CodeMirror-linebackground"),e.background)t?e.background.className=t:(e.background.parentNode.removeChild(e.background),e.background=null)
else if(t){var r=z(e)
e.background=r.insertBefore(Ui("div",null,t),r.firstChild)}}function F(e,t){var r=e.display.externalMeasured
return r&&r.line==t.line?(e.display.externalMeasured=null,t.measure=r.measure,r.built):Fn(e,t)}function R(e,t){var r=t.text.className,n=F(e,t)
t.text==t.node&&(t.node=n.pre),t.text.parentNode.replaceChild(n.pre,t.text),t.text=n.pre,n.bgClass!=t.bgClass||n.textClass!=t.textClass?(t.bgClass=n.bgClass,t.textClass=n.textClass,B(t)):r&&(t.text.className=r)}function B(e){I(e),e.line.wrapClass?z(e).className=e.line.wrapClass:e.node!=e.text&&(e.node.className="")
var t=e.textClass?e.textClass+" "+(e.line.textClass||""):e.line.textClass
e.text.className=t||""}function G(e,t,r,n){if(t.gutter&&(t.node.removeChild(t.gutter),t.gutter=null),t.gutterBackground&&(t.node.removeChild(t.gutterBackground),t.gutterBackground=null),t.line.gutterClass){var i=z(t)
t.gutterBackground=Ui("div",null,"CodeMirror-gutter-background "+t.line.gutterClass,"left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px; width: "+n.gutterTotalWidth+"px"),i.insertBefore(t.gutterBackground,t.text)}var o=t.line.gutterMarkers
if(e.options.lineNumbers||o){var i=z(t),l=t.gutter=Ui("div",null,"CodeMirror-gutter-wrapper","left: "+(e.options.fixedGutter?n.fixedPos:-n.gutterTotalWidth)+"px")
if(e.display.input.setUneditable(l),i.insertBefore(l,t.text),t.line.gutterClass&&(l.className+=" "+t.line.gutterClass),!e.options.lineNumbers||o&&o["CodeMirror-linenumbers"]||(t.lineNumber=l.appendChild(Ui("div",S(e.options,r),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+n.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+e.display.lineNumInnerWidth+"px"))),o)for(var s=0;s<e.options.gutters.length;++s){var a=e.options.gutters[s],u=o.hasOwnProperty(a)&&o[a]
u&&l.appendChild(Ui("div",[u],"CodeMirror-gutter-elt","left: "+n.gutterLeft[a]+"px; width: "+n.gutterWidth[a]+"px"))}}}function U(e,t,r){t.alignable&&(t.alignable=null)
for(var n,i=t.node.firstChild;i;i=n){var n=i.nextSibling
"CodeMirror-linewidget"==i.className&&t.node.removeChild(i)}K(e,t,r)}function V(e,t,r,n){var i=F(e,t)
return t.text=t.node=i.pre,i.bgClass&&(t.bgClass=i.bgClass),i.textClass&&(t.textClass=i.textClass),B(t),G(e,t,r,n),K(e,t,n),t.node}function K(e,t,r){if(j(e,t.line,t,r,!0),t.rest)for(var n=0;n<t.rest.length;n++)j(e,t.rest[n],t,r,!1)}function j(e,t,r,n,i){if(t.widgets)for(var o=z(r),l=0,s=t.widgets;l<s.length;++l){var a=s[l],u=Ui("div",[a.node],"CodeMirror-linewidget")
a.handleMouseEvents||u.setAttribute("cm-ignore-events","true"),X(a,u,r,n),e.display.input.setUneditable(u),i&&a.above?o.insertBefore(u,r.gutter||r.text):o.appendChild(u),Li(a,"redraw")}}function X(e,t,r,n){if(e.noHScroll){(r.alignable||(r.alignable=[])).push(t)
var i=n.wrapperWidth
t.style.left=n.fixedPos+"px",e.coverGutter||(i-=n.gutterTotalWidth,t.style.paddingLeft=n.gutterTotalWidth+"px"),t.style.width=i+"px"}e.coverGutter&&(t.style.zIndex=5,t.style.position="relative",e.noHScroll||(t.style.marginLeft=-n.gutterTotalWidth+"px"))}function _(e){return Io(e.line,e.ch)}function Y(e,t){return Fo(e,t)<0?t:e}function q(e,t){return Fo(e,t)<0?e:t}function $(e){e.state.focused||(e.display.input.focus(),vr(e))}function Z(e,t,r,n,i){var o=e.doc
e.display.shift=!1,n||(n=o.sel)
var l=e.state.pasteIncoming||"paste"==i,s=o.splitLines(t),a=null
if(l&&n.ranges.length>1)if(Ro&&Ro.join("\n")==t){if(n.ranges.length%Ro.length==0){a=[]
for(var u=0;u<Ro.length;u++)a.push(o.splitLines(Ro[u]))}}else s.length==n.ranges.length&&(a=Ei(s,function(e){return[e]}))
for(var u=n.ranges.length-1;u>=0;u--){var c=n.ranges[u],h=c.from(),f=c.to()
c.empty()&&(r&&r>0?h=Io(h.line,h.ch-r):e.state.overwrite&&!l&&(f=Io(f.line,Math.min(Zn(o,f.line).text.length,f.ch+Hi(s).length))))
var d=e.curOp.updateInput,p={from:h,to:f,text:a?a[u%a.length]:s,origin:i||(l?"paste":e.state.cutIncoming?"cut":"+input")}
Tr(e.doc,p),Li(e,"inputRead",e,p)}t&&!l&&J(e,t),Ir(e),e.curOp.updateInput=d,e.curOp.typing=!0,e.state.pasteIncoming=e.state.cutIncoming=!1}function Q(e,t){var r=e.clipboardData&&e.clipboardData.getData("text/plain")
return r?(e.preventDefault(),t.isReadOnly()||t.options.disableInput||Ot(t,function(){Z(t,r,0,null,"paste")}),!0):void 0}function J(e,t){if(e.options.electricChars&&e.options.smartIndent)for(var r=e.doc.sel,n=r.ranges.length-1;n>=0;n--){var i=r.ranges[n]
if(!(i.head.ch>100||n&&r.ranges[n-1].head.line==i.head.line)){var o=e.getModeAt(i.head),l=!1
if(o.electricChars){for(var s=0;s<o.electricChars.length;s++)if(t.indexOf(o.electricChars.charAt(s))>-1){l=Rr(e,i.head.line,"smart")
break}}else o.electricInput&&o.electricInput.test(Zn(e.doc,i.head.line).text.slice(0,i.head.ch))&&(l=Rr(e,i.head.line,"smart"))
l&&Li(e,"electricInput",e,i.head.line)}}}function ee(e){for(var t=[],r=[],n=0;n<e.doc.sel.ranges.length;n++){var i=e.doc.sel.ranges[n].head.line,o={anchor:Io(i,0),head:Io(i+1,0)}
r.push(o),t.push(e.getRange(o.anchor,o.head))}return{text:t,ranges:r}}function te(e){e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),e.setAttribute("spellcheck","false")}function re(e){this.cm=e,this.prevInput="",this.pollingFast=!1,this.polling=new Wi,this.inaccurateSelection=!1,this.hasSelection=!1,this.composing=null}function ne(){var e=Ui("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em; outline: none"),t=Ui("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
return xo?e.style.width="1000px":e.setAttribute("wrap","off"),No&&(e.style.border="1px solid black"),te(e),t}function ie(e){this.cm=e,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,this.polling=new Wi,this.gracePeriod=!1}function oe(e,t){var r=Je(e,t.line)
if(!r||r.hidden)return null
var n=Zn(e.doc,t.line),i=$e(r,n,t.line),o=ii(n),l="left"
if(o){var s=uo(o,t.ch)
l=s%2?"right":"left"}var a=rt(i.map,t.ch,l)
return a.offset="right"==a.collapse?a.end:a.start,a}function le(e,t){return t&&(e.bad=!0),e}function se(e,t,r){var n
if(t==e.display.lineDiv){if(n=e.display.lineDiv.childNodes[r],!n)return le(e.clipPos(Io(e.display.viewTo-1)),!0)
t=null,r=0}else for(n=t;;n=n.parentNode){if(!n||n==e.display.lineDiv)return null
if(n.parentNode&&n.parentNode==e.display.lineDiv)break}for(var i=0;i<e.display.view.length;i++){var o=e.display.view[i]
if(o.node==n)return ae(o,t,r)}}function ae(e,t,r){function n(t,r,n){for(var i=-1;i<(c?c.length:0);i++)for(var o=0>i?u.map:c[i],l=0;l<o.length;l+=3){var s=o[l+2]
if(s==t||s==r){var a=ti(0>i?e.line:e.rest[i]),h=o[l]+n
return(0>n||s!=t)&&(h=o[l+(n?1:0)]),Io(a,h)}}}var i=e.text.firstChild,o=!1
if(!t||!_l(i,t))return le(Io(ti(e.line),0),!0)
if(t==i&&(o=!0,t=i.childNodes[r],r=0,!t)){var l=e.rest?Hi(e.rest):e.line
return le(Io(ti(l),l.text.length),o)}var s=3==t.nodeType?t:null,a=t
for(s||1!=t.childNodes.length||3!=t.firstChild.nodeType||(s=t.firstChild,r&&(r=s.nodeValue.length));a.parentNode!=i;)a=a.parentNode
var u=e.measure,c=u.maps,h=n(s,a,r)
if(h)return le(h,o)
for(var f=a.nextSibling,d=s?s.nodeValue.length-r:0;f;f=f.nextSibling){if(h=n(f,f.firstChild,0))return le(Io(h.line,h.ch-d),o)
d+=f.textContent.length}for(var p=a.previousSibling,d=r;p;p=p.previousSibling){if(h=n(p,p.firstChild,-1))return le(Io(h.line,h.ch+d),o)
d+=f.textContent.length}}function ue(e,t,r,n,i){function o(e){return function(t){return t.id==e}}function l(t){if(1==t.nodeType){var r=t.getAttribute("cm-text")
if(null!=r)return""==r&&(r=t.textContent.replace(/\u200b/g,"")),void(s+=r)
var c,h=t.getAttribute("cm-marker")
if(h){var f=e.findMarks(Io(n,0),Io(i+1,0),o(+h))
return void(f.length&&(c=f[0].find())&&(s+=Qn(e.doc,c.from,c.to).join(u)))}if("false"==t.getAttribute("contenteditable"))return
for(var d=0;d<t.childNodes.length;d++)l(t.childNodes[d]);/^(pre|div|p)$/i.test(t.nodeName)&&(a=!0)}else if(3==t.nodeType){var p=t.nodeValue
if(!p)return
a&&(s+=u,a=!1),s+=p}}for(var s="",a=!1,u=e.doc.lineSeparator();l(t),t!=r;)t=t.nextSibling
return s}function ce(e,t){this.ranges=e,this.primIndex=t}function he(e,t){this.anchor=e,this.head=t}function fe(e,t){var r=e[t]
e.sort(function(e,t){return Fo(e.from(),t.from())}),t=Di(e,r)
for(var n=1;n<e.length;n++){var i=e[n],o=e[n-1]
if(Fo(o.to(),i.from())>=0){var l=q(o.from(),i.from()),s=Y(o.to(),i.to()),a=o.empty()?i.from()==i.head:o.from()==o.head
t>=n&&--t,e.splice(--n,2,new he(a?s:l,a?l:s))}}return new ce(e,t)}function de(e,t){return new ce([new he(e,t||e)],0)}function pe(e,t){return Math.max(e.first,Math.min(t,e.first+e.size-1))}function ge(e,t){if(t.line<e.first)return Io(e.first,0)
var r=e.first+e.size-1
return t.line>r?Io(r,Zn(e,r).text.length):ve(t,Zn(e,t.line).text.length)}function ve(e,t){var r=e.ch
return null==r||r>t?Io(e.line,t):0>r?Io(e.line,0):e}function me(e,t){return t>=e.first&&t<e.first+e.size}function ye(e,t){for(var r=[],n=0;n<t.length;n++)r[n]=ge(e,t[n])
return r}function be(e,t,r,n){if(e.cm&&e.cm.display.shift||e.extend){var i=t.anchor
if(n){var o=Fo(r,i)<0
o!=Fo(n,i)<0?(i=r,r=n):o!=Fo(r,n)<0&&(r=n)}return new he(i,r)}return new he(n||r,r)}function we(e,t,r,n){ke(e,new ce([be(e,e.sel.primary(),t,r)],0),n)}function xe(e,t,r){for(var n=[],i=0;i<e.sel.ranges.length;i++)n[i]=be(e,e.sel.ranges[i],t[i],null)
var o=fe(n,e.sel.primIndex)
ke(e,o,r)}function Ce(e,t,r,n){var i=e.sel.ranges.slice(0)
i[t]=r,ke(e,fe(i,e.sel.primIndex),n)}function Se(e,t,r,n){ke(e,de(t,r),n)}function Le(e,t,r){var n={ranges:t.ranges,update:function(t){this.ranges=[]
for(var r=0;r<t.length;r++)this.ranges[r]=new he(ge(e,t[r].anchor),ge(e,t[r].head))},origin:r&&r.origin}
return Hl(e,"beforeSelectionChange",e,n),e.cm&&Hl(e.cm,"beforeSelectionChange",e.cm,n),n.ranges!=t.ranges?fe(n.ranges,n.ranges.length-1):t}function Te(e,t,r){var n=e.history.done,i=Hi(n)
i&&i.ranges?(n[n.length-1]=t,Me(e,t,r)):ke(e,t,r)}function ke(e,t,r){Me(e,t,r),hi(e,e.sel,e.cm?e.cm.curOp.id:NaN,r)}function Me(e,t,r){(Ni(e,"beforeSelectionChange")||e.cm&&Ni(e.cm,"beforeSelectionChange"))&&(t=Le(e,t,r))
var n=r&&r.bias||(Fo(t.primary().head,e.sel.primary().head)<0?-1:1)
Ne(e,We(e,t,n,!0)),r&&r.scroll===!1||!e.cm||Ir(e.cm)}function Ne(e,t){t.equals(e.sel)||(e.sel=t,e.cm&&(e.cm.curOp.updateInput=e.cm.curOp.selectionChanged=!0,Mi(e.cm)),Li(e,"cursorActivity",e))}function Oe(e){Ne(e,We(e,e.sel,null,!1),zl)}function We(e,t,r,n){for(var i,o=0;o<t.ranges.length;o++){var l=t.ranges[o],s=t.ranges.length==e.sel.ranges.length&&e.sel.ranges[o],a=He(e,l.anchor,s&&s.anchor,r,n),u=He(e,l.head,s&&s.head,r,n);(i||a!=l.anchor||u!=l.head)&&(i||(i=t.ranges.slice(0,o)),i[o]=new he(a,u))}return i?fe(i,t.primIndex):t}function Ae(e,t,r,n,i){var o=Zn(e,t.line)
if(o.markedSpans)for(var l=0;l<o.markedSpans.length;++l){var s=o.markedSpans[l],a=s.marker
if((null==s.from||(a.inclusiveLeft?s.from<=t.ch:s.from<t.ch))&&(null==s.to||(a.inclusiveRight?s.to>=t.ch:s.to>t.ch))){if(i&&(Hl(a,"beforeCursorEnter"),a.explicitlyCleared)){if(o.markedSpans){--l
continue}break}if(!a.atomic)continue
if(r){var u,c=a.find(0>n?1:-1)
if((0>n?a.inclusiveRight:a.inclusiveLeft)&&(c=De(e,c,-n,o)),c&&c.line==t.line&&(u=Fo(c,r))&&(0>n?0>u:u>0))return Ae(e,c,t,n,i)}var h=a.find(0>n?-1:1)
return(0>n?a.inclusiveLeft:a.inclusiveRight)&&(h=De(e,h,n,o)),h?Ae(e,h,t,n,i):null}}return t}function He(e,t,r,n,i){var o=n||1,l=Ae(e,t,r,o,i)||!i&&Ae(e,t,r,o,!0)||Ae(e,t,r,-o,i)||!i&&Ae(e,t,r,-o,!0)
return l?l:(e.cantEdit=!0,Io(e.first,0))}function De(e,t,r,n){return 0>r&&0==t.ch?t.line>e.first?ge(e,Io(t.line-1)):null:r>0&&t.ch==(n||Zn(e,t.line)).text.length?t.line<e.first+e.size-1?Io(t.line+1,0):null:new Io(t.line,t.ch+r)}function Ee(e){e.display.input.showSelection(e.display.input.prepareSelection())}function Pe(e,t){for(var r=e.doc,n={},i=n.cursors=document.createDocumentFragment(),o=n.selection=document.createDocumentFragment(),l=0;l<r.sel.ranges.length;l++)if(t!==!1||l!=r.sel.primIndex){var s=r.sel.ranges[l],a=s.empty();(a||e.options.showCursorWhenSelecting)&&ze(e,s.head,i),a||Ie(e,s,o)}return n}function ze(e,t,r){var n=dt(e,t,"div",null,null,!e.options.singleCursorHeightPerLine),i=r.appendChild(Ui("div","Â ","CodeMirror-cursor"))
if(i.style.left=n.left+"px",i.style.top=n.top+"px",i.style.height=Math.max(0,n.bottom-n.top)*e.options.cursorHeight+"px",n.other){var o=r.appendChild(Ui("div","Â ","CodeMirror-cursor CodeMirror-secondarycursor"))
o.style.display="",o.style.left=n.other.left+"px",o.style.top=n.other.top+"px",o.style.height=.85*(n.other.bottom-n.other.top)+"px"}}function Ie(e,t,r){function n(e,t,r,n){0>t&&(t=0),t=Math.round(t),n=Math.round(n),s.appendChild(Ui("div",null,"CodeMirror-selected","position: absolute; left: "+e+"px; top: "+t+"px; width: "+(null==r?c-e:r)+"px; height: "+(n-t)+"px"))}function i(t,r,i){function o(r,n){return ft(e,Io(t,r),"div",h,n)}var s,a,h=Zn(l,t),f=h.text.length
return eo(ii(h),r||0,null==i?f:i,function(e,t,l){var h,d,p,g=o(e,"left")
if(e==t)h=g,d=p=g.left
else{if(h=o(t-1,"right"),"rtl"==l){var v=g
g=h,h=v}d=g.left,p=h.right}null==r&&0==e&&(d=u),h.top-g.top>3&&(n(d,g.top,null,g.bottom),d=u,g.bottom<h.top&&n(d,g.bottom,null,h.top)),null==i&&t==f&&(p=c),(!s||g.top<s.top||g.top==s.top&&g.left<s.left)&&(s=g),(!a||h.bottom>a.bottom||h.bottom==a.bottom&&h.right>a.right)&&(a=h),u+1>d&&(d=u),n(d,h.top,p-d,h.bottom)}),{start:s,end:a}}var o=e.display,l=e.doc,s=document.createDocumentFragment(),a=je(e.display),u=a.left,c=Math.max(o.sizerWidth,_e(e)-o.sizer.offsetLeft)-a.right,h=t.from(),f=t.to()
if(h.line==f.line)i(h.line,h.ch,f.ch)
else{var d=Zn(l,h.line),p=Zn(l,f.line),g=yn(d)==yn(p),v=i(h.line,h.ch,g?d.text.length+1:null).end,m=i(f.line,g?0:null,f.ch).start
g&&(v.top<m.top-2?(n(v.right,v.top,null,v.bottom),n(u,m.top,m.left,m.bottom)):n(v.right,v.top,m.left-v.right,v.bottom)),v.bottom<m.top&&n(u,v.bottom,null,m.top)}r.appendChild(s)}function Fe(e){if(e.state.focused){var t=e.display
clearInterval(t.blinker)
var r=!0
t.cursorDiv.style.visibility="",e.options.cursorBlinkRate>0?t.blinker=setInterval(function(){t.cursorDiv.style.visibility=(r=!r)?"":"hidden"},e.options.cursorBlinkRate):e.options.cursorBlinkRate<0&&(t.cursorDiv.style.visibility="hidden")}}function Re(e,t){e.doc.mode.startState&&e.doc.frontier<e.display.viewTo&&e.state.highlight.set(t,Fi(Be,e))}function Be(e){var t=e.doc
if(t.frontier<t.first&&(t.frontier=t.first),!(t.frontier>=e.display.viewTo)){var r=+new Date+e.options.workTime,n=sl(t.mode,Ue(e,t.frontier)),i=[]
t.iter(t.frontier,Math.min(t.first+t.size,e.display.viewTo+500),function(o){if(t.frontier>=e.display.viewFrom){var l=o.styles,s=o.text.length>e.options.maxHighlightLength,a=En(e,o,s?sl(t.mode,n):n,!0)
o.styles=a.styles
var u=o.styleClasses,c=a.classes
c?o.styleClasses=c:u&&(o.styleClasses=null)
for(var h=!l||l.length!=o.styles.length||u!=c&&(!u||!c||u.bgClass!=c.bgClass||u.textClass!=c.textClass),f=0;!h&&f<l.length;++f)h=l[f]!=o.styles[f]
h&&i.push(t.frontier),o.stateAfter=s?n:sl(t.mode,n)}else o.text.length<=e.options.maxHighlightLength&&zn(e,o.text,n),o.stateAfter=t.frontier%5==0?sl(t.mode,n):null
return++t.frontier,+new Date>r?(Re(e,e.options.workDelay),!0):void 0}),i.length&&Ot(e,function(){for(var t=0;t<i.length;t++)zt(e,i[t],"text")})}}function Ge(e,t,r){for(var n,i,o=e.doc,l=r?-1:t-(e.doc.mode.innerMode?1e3:100),s=t;s>l;--s){if(s<=o.first)return o.first
var a=Zn(o,s-1)
if(a.stateAfter&&(!r||s<=o.frontier))return s
var u=Rl(a.text,null,e.options.tabSize);(null==i||n>u)&&(i=s-1,n=u)}return i}function Ue(e,t,r){var n=e.doc,i=e.display
if(!n.mode.startState)return!0
var o=Ge(e,t,r),l=o>n.first&&Zn(n,o-1).stateAfter
return l=l?sl(n.mode,l):al(n.mode),n.iter(o,t,function(r){zn(e,r.text,l)
var s=o==t-1||o%5==0||o>=i.viewFrom&&o<i.viewTo
r.stateAfter=s?sl(n.mode,l):null,++o}),r&&(n.frontier=o),l}function Ve(e){return e.lineSpace.offsetTop}function Ke(e){return e.mover.offsetHeight-e.lineSpace.offsetHeight}function je(e){if(e.cachedPaddingH)return e.cachedPaddingH
var t=Ki(e.measure,Ui("pre","x")),r=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,n={left:parseInt(r.paddingLeft),right:parseInt(r.paddingRight)}
return isNaN(n.left)||isNaN(n.right)||(e.cachedPaddingH=n),n}function Xe(e){return El-e.display.nativeBarWidth}function _e(e){return e.display.scroller.clientWidth-Xe(e)-e.display.barWidth}function Ye(e){return e.display.scroller.clientHeight-Xe(e)-e.display.barHeight}function qe(e,t,r){var n=e.options.lineWrapping,i=n&&_e(e)
if(!t.measure.heights||n&&t.measure.width!=i){var o=t.measure.heights=[]
if(n){t.measure.width=i
for(var l=t.text.firstChild.getClientRects(),s=0;s<l.length-1;s++){var a=l[s],u=l[s+1]
Math.abs(a.bottom-u.bottom)>2&&o.push((a.bottom+u.top)/2-r.top)}}o.push(r.bottom-r.top)}}function $e(e,t,r){if(e.line==t)return{map:e.measure.map,cache:e.measure.cache}
for(var n=0;n<e.rest.length;n++)if(e.rest[n]==t)return{map:e.measure.maps[n],cache:e.measure.caches[n]}
for(var n=0;n<e.rest.length;n++)if(ti(e.rest[n])>r)return{map:e.measure.maps[n],cache:e.measure.caches[n],before:!0}}function Ze(e,t){t=yn(t)
var r=ti(t),n=e.display.externalMeasured=new Dt(e.doc,t,r)
n.lineN=r
var i=n.built=Fn(e,n)
return n.text=i.pre,Ki(e.display.lineMeasure,i.pre),n}function Qe(e,t,r,n){return tt(e,et(e,t),r,n)}function Je(e,t){if(t>=e.display.viewFrom&&t<e.display.viewTo)return e.display.view[Ft(e,t)]
var r=e.display.externalMeasured
return r&&t>=r.lineN&&t<r.lineN+r.size?r:void 0}function et(e,t){var r=ti(t),n=Je(e,r)
n&&!n.text?n=null:n&&n.changes&&(P(e,n,r,D(e)),e.curOp.forceUpdate=!0),n||(n=Ze(e,t))
var i=$e(n,t,r)
return{line:t,view:n,rect:null,map:i.map,cache:i.cache,before:i.before,hasHeights:!1}}function tt(e,t,r,n,i){t.before&&(r=-1)
var o,l=r+(n||"")
return t.cache.hasOwnProperty(l)?o=t.cache[l]:(t.rect||(t.rect=t.view.text.getBoundingClientRect()),t.hasHeights||(qe(e,t.view,t.rect),t.hasHeights=!0),o=nt(e,t,r,n),o.bogus||(t.cache[l]=o)),{left:o.left,right:o.right,top:i?o.rtop:o.top,bottom:i?o.rbottom:o.bottom}}function rt(e,t,r){for(var n,i,o,l,s=0;s<e.length;s+=3){var a=e[s],u=e[s+1]
if(a>t?(i=0,o=1,l="left"):u>t?(i=t-a,o=i+1):(s==e.length-3||t==u&&e[s+3]>t)&&(o=u-a,i=o-1,t>=u&&(l="right")),null!=i){if(n=e[s+2],a==u&&r==(n.insertLeft?"left":"right")&&(l=r),"left"==r&&0==i)for(;s&&e[s-2]==e[s-3]&&e[s-1].insertLeft;)n=e[(s-=3)+2],l="left"
if("right"==r&&i==u-a)for(;s<e.length-3&&e[s+3]==e[s+4]&&!e[s+5].insertLeft;)n=e[(s+=3)+2],l="right"
break}}return{node:n,start:i,end:o,collapse:l,coverStart:a,coverEnd:u}}function nt(e,t,r,n){var i,o=rt(t.map,r,n),l=o.node,s=o.start,a=o.end,u=o.collapse
if(3==l.nodeType){for(var c=0;4>c;c++){for(;s&&Gi(t.line.text.charAt(o.coverStart+s));)--s
for(;o.coverStart+a<o.coverEnd&&Gi(t.line.text.charAt(o.coverStart+a));)++a
if(bo&&9>wo&&0==s&&a==o.coverEnd-o.coverStart)i=l.parentNode.getBoundingClientRect()
else if(bo&&e.options.lineWrapping){var h=Vl(l,s,a).getClientRects()
i=h.length?h["right"==n?h.length-1:0]:Vo}else i=Vl(l,s,a).getBoundingClientRect()||Vo
if(i.left||i.right||0==s)break
a=s,s-=1,u="right"}bo&&11>wo&&(i=it(e.display.measure,i))}else{s>0&&(u=n="right")
var h
i=e.options.lineWrapping&&(h=l.getClientRects()).length>1?h["right"==n?h.length-1:0]:l.getBoundingClientRect()}if(bo&&9>wo&&!s&&(!i||!i.left&&!i.right)){var f=l.parentNode.getClientRects()[0]
i=f?{left:f.left,right:f.left+bt(e.display),top:f.top,bottom:f.bottom}:Vo}for(var d=i.top-t.rect.top,p=i.bottom-t.rect.top,g=(d+p)/2,v=t.view.measure.heights,c=0;c<v.length-1&&!(g<v[c]);c++);var m=c?v[c-1]:0,y=v[c],b={left:("right"==u?i.right:i.left)-t.rect.left,right:("left"==u?i.left:i.right)-t.rect.left,top:m,bottom:y}
return i.left||i.right||(b.bogus=!0),e.options.singleCursorHeightPerLine||(b.rtop=d,b.rbottom=p),b}function it(e,t){if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!Ji(e))return t
var r=screen.logicalXDPI/screen.deviceXDPI,n=screen.logicalYDPI/screen.deviceYDPI
return{left:t.left*r,right:t.right*r,top:t.top*n,bottom:t.bottom*n}}function ot(e){if(e.measure&&(e.measure.cache={},e.measure.heights=null,e.rest))for(var t=0;t<e.rest.length;t++)e.measure.caches[t]={}}function lt(e){e.display.externalMeasure=null,Vi(e.display.lineMeasure)
for(var t=0;t<e.display.view.length;t++)ot(e.display.view[t])}function st(e){lt(e),e.display.cachedCharWidth=e.display.cachedTextHeight=e.display.cachedPaddingH=null,e.options.lineWrapping||(e.display.maxLineChanged=!0),e.display.lineNumChars=null}function at(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft}function ut(){return window.pageYOffset||(document.documentElement||document.body).scrollTop}function ct(e,t,r,n){if(t.widgets)for(var i=0;i<t.widgets.length;++i)if(t.widgets[i].above){var o=Tn(t.widgets[i])
r.top+=o,r.bottom+=o}if("line"==n)return r
n||(n="local")
var l=ni(t)
if("local"==n?l+=Ve(e.display):l-=e.display.viewOffset,"page"==n||"window"==n){var s=e.display.lineSpace.getBoundingClientRect()
l+=s.top+("window"==n?0:ut())
var a=s.left+("window"==n?0:at())
r.left+=a,r.right+=a}return r.top+=l,r.bottom+=l,r}function ht(e,t,r){if("div"==r)return t
var n=t.left,i=t.top
if("page"==r)n-=at(),i-=ut()
else if("local"==r||!r){var o=e.display.sizer.getBoundingClientRect()
n+=o.left,i+=o.top}var l=e.display.lineSpace.getBoundingClientRect()
return{left:n-l.left,top:i-l.top}}function ft(e,t,r,n,i){return n||(n=Zn(e.doc,t.line)),ct(e,n,Qe(e,n,t.ch,i),r)}function dt(e,t,r,n,i,o){function l(t,l){var s=tt(e,i,t,l?"right":"left",o)
return l?s.left=s.right:s.right=s.left,ct(e,n,s,r)}function s(e,t){var r=a[t],n=r.level%2
return e==to(r)&&t&&r.level<a[t-1].level?(r=a[--t],e=ro(r)-(r.level%2?0:1),n=!0):e==ro(r)&&t<a.length-1&&r.level<a[t+1].level&&(r=a[++t],e=to(r)-r.level%2,n=!1),n&&e==r.to&&e>r.from?l(e-1):l(e,n)}n=n||Zn(e.doc,t.line),i||(i=et(e,n))
var a=ii(n),u=t.ch
if(!a)return l(u)
var c=uo(a,u),h=s(u,c)
return null!=os&&(h.other=s(u,os)),h}function pt(e,t){var r=0,t=ge(e.doc,t)
e.options.lineWrapping||(r=bt(e.display)*t.ch)
var n=Zn(e.doc,t.line),i=ni(n)+Ve(e.display)
return{left:r,right:r,top:i,bottom:i+n.height}}function gt(e,t,r,n){var i=Io(e,t)
return i.xRel=n,r&&(i.outside=!0),i}function vt(e,t,r){var n=e.doc
if(r+=e.display.viewOffset,0>r)return gt(n.first,0,!0,-1)
var i=ri(n,r),o=n.first+n.size-1
if(i>o)return gt(n.first+n.size-1,Zn(n,o).text.length,!0,1)
0>t&&(t=0)
for(var l=Zn(n,i);;){var s=mt(e,l,i,t,r),a=vn(l),u=a&&a.find(0,!0)
if(!a||!(s.ch>u.from.ch||s.ch==u.from.ch&&s.xRel>0))return s
i=ti(l=u.to.line)}}function mt(e,t,r,n,i){function o(n){var i=dt(e,Io(r,n),"line",t,u)
return s=!0,l>i.bottom?i.left-a:l<i.top?i.left+a:(s=!1,i.left)}var l=i-ni(t),s=!1,a=2*e.display.wrapper.clientWidth,u=et(e,t),c=ii(t),h=t.text.length,f=no(t),d=io(t),p=o(f),g=s,v=o(d),m=s
if(n>v)return gt(r,d,m,1)
for(;;){if(c?d==f||d==ho(t,f,1):1>=d-f){for(var y=p>n||v-n>=n-p?f:d,b=n-(y==f?p:v);Gi(t.text.charAt(y));)++y
var w=gt(r,y,y==f?g:m,-1>b?-1:b>1?1:0)
return w}var x=Math.ceil(h/2),C=f+x
if(c){C=f
for(var S=0;x>S;++S)C=ho(t,C,1)}var L=o(C)
L>n?(d=C,v=L,(m=s)&&(v+=1e3),h=x):(f=C,p=L,g=s,h-=x)}}function yt(e){if(null!=e.cachedTextHeight)return e.cachedTextHeight
if(null==Bo){Bo=Ui("pre")
for(var t=0;49>t;++t)Bo.appendChild(document.createTextNode("x")),Bo.appendChild(Ui("br"))
Bo.appendChild(document.createTextNode("x"))}Ki(e.measure,Bo)
var r=Bo.offsetHeight/50
return r>3&&(e.cachedTextHeight=r),Vi(e.measure),r||1}function bt(e){if(null!=e.cachedCharWidth)return e.cachedCharWidth
var t=Ui("span","xxxxxxxxxx"),r=Ui("pre",[t])
Ki(e.measure,r)
var n=t.getBoundingClientRect(),i=(n.right-n.left)/10
return i>2&&(e.cachedCharWidth=i),i||10}function wt(e){e.curOp={cm:e,viewChanged:!1,startHeight:e.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,cursorActivityCalled:0,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,focus:!1,id:++jo},Ko?Ko.ops.push(e.curOp):e.curOp.ownsGroup=Ko={ops:[e.curOp],delayedCallbacks:[]}}function xt(e){var t=e.delayedCallbacks,r=0
do{for(;r<t.length;r++)t[r].call(null)
for(var n=0;n<e.ops.length;n++){var i=e.ops[n]
if(i.cursorActivityHandlers)for(;i.cursorActivityCalled<i.cursorActivityHandlers.length;)i.cursorActivityHandlers[i.cursorActivityCalled++].call(null,i.cm)}}while(r<t.length)}function Ct(e){var t=e.curOp,r=t.ownsGroup
if(r)try{xt(r)}finally{Ko=null
for(var n=0;n<r.ops.length;n++)r.ops[n].cm.curOp=null
St(r)}}function St(e){for(var t=e.ops,r=0;r<t.length;r++)Lt(t[r])
for(var r=0;r<t.length;r++)Tt(t[r])
for(var r=0;r<t.length;r++)kt(t[r])
for(var r=0;r<t.length;r++)Mt(t[r])
for(var r=0;r<t.length;r++)Nt(t[r])}function Lt(e){var t=e.cm,r=t.display
k(t),e.updateMaxLine&&f(t),e.mustUpdate=e.viewChanged||e.forceUpdate||null!=e.scrollTop||e.scrollToPos&&(e.scrollToPos.from.line<r.viewFrom||e.scrollToPos.to.line>=r.viewTo)||r.maxLineChanged&&t.options.lineWrapping,e.update=e.mustUpdate&&new T(t,e.mustUpdate&&{top:e.scrollTop,ensure:e.scrollToPos},e.forceUpdate)}function Tt(e){e.updatedDisplay=e.mustUpdate&&M(e.cm,e.update)}function kt(e){var t=e.cm,r=t.display
e.updatedDisplay&&A(t),e.barMeasure=p(t),r.maxLineChanged&&!t.options.lineWrapping&&(e.adjustWidthTo=Qe(t,r.maxLine,r.maxLine.text.length).left+3,t.display.sizerWidth=e.adjustWidthTo,e.barMeasure.scrollWidth=Math.max(r.scroller.clientWidth,r.sizer.offsetLeft+e.adjustWidthTo+Xe(t)+t.display.barWidth),e.maxScrollLeft=Math.max(0,r.sizer.offsetLeft+e.adjustWidthTo-_e(t))),(e.updatedDisplay||e.selectionChanged)&&(e.preparedSelection=r.input.prepareSelection())}function Mt(e){var t=e.cm
null!=e.adjustWidthTo&&(t.display.sizer.style.minWidth=e.adjustWidthTo+"px",e.maxScrollLeft<t.doc.scrollLeft&&ir(t,Math.min(t.display.scroller.scrollLeft,e.maxScrollLeft),!0),t.display.maxLineChanged=!1),e.preparedSelection&&t.display.input.showSelection(e.preparedSelection),e.updatedDisplay&&W(t,e.barMeasure),(e.updatedDisplay||e.startHeight!=t.doc.height)&&y(t,e.barMeasure),e.selectionChanged&&Fe(t),t.state.focused&&e.updateInput&&t.display.input.reset(e.typing),!e.focus||e.focus!=ji()||document.hasFocus&&!document.hasFocus()||$(e.cm)}function Nt(e){var t=e.cm,r=t.display,n=t.doc
if(e.updatedDisplay&&N(t,e.update),null==r.wheelStartX||null==e.scrollTop&&null==e.scrollLeft&&!e.scrollToPos||(r.wheelStartX=r.wheelStartY=null),null==e.scrollTop||r.scroller.scrollTop==e.scrollTop&&!e.forceScroll||(n.scrollTop=Math.max(0,Math.min(r.scroller.scrollHeight-r.scroller.clientHeight,e.scrollTop)),r.scrollbars.setScrollTop(n.scrollTop),r.scroller.scrollTop=n.scrollTop),null==e.scrollLeft||r.scroller.scrollLeft==e.scrollLeft&&!e.forceScroll||(n.scrollLeft=Math.max(0,Math.min(r.scroller.scrollWidth-_e(t),e.scrollLeft)),r.scrollbars.setScrollLeft(n.scrollLeft),r.scroller.scrollLeft=n.scrollLeft,x(t)),e.scrollToPos){var i=Dr(t,ge(n,e.scrollToPos.from),ge(n,e.scrollToPos.to),e.scrollToPos.margin)
e.scrollToPos.isCursor&&t.state.focused&&Hr(t,i)}var o=e.maybeHiddenMarkers,l=e.maybeUnhiddenMarkers
if(o)for(var s=0;s<o.length;++s)o[s].lines.length||Hl(o[s],"hide")
if(l)for(var s=0;s<l.length;++s)l[s].lines.length&&Hl(l[s],"unhide")
r.wrapper.offsetHeight&&(n.scrollTop=t.display.scroller.scrollTop),e.changeObjs&&Hl(t,"changes",t,e.changeObjs),e.update&&e.update.finish()}function Ot(e,t){if(e.curOp)return t()
wt(e)
try{return t()}finally{Ct(e)}}function Wt(e,t){return function(){if(e.curOp)return t.apply(e,arguments)
wt(e)
try{return t.apply(e,arguments)}finally{Ct(e)}}}function At(e){return function(){if(this.curOp)return e.apply(this,arguments)
wt(this)
try{return e.apply(this,arguments)}finally{Ct(this)}}}function Ht(e){return function(){var t=this.cm
if(!t||t.curOp)return e.apply(this,arguments)
wt(t)
try{return e.apply(this,arguments)}finally{Ct(t)}}}function Dt(e,t,r){this.line=t,this.rest=bn(t),this.size=this.rest?ti(Hi(this.rest))-r+1:1,this.node=this.text=null,this.hidden=Cn(e,t)}function Et(e,t,r){for(var n,i=[],o=t;r>o;o=n){var l=new Dt(e.doc,Zn(e.doc,o),o)
n=o+l.size,i.push(l)}return i}function Pt(e,t,r,n){null==t&&(t=e.doc.first),null==r&&(r=e.doc.first+e.doc.size),n||(n=0)
var i=e.display
if(n&&r<i.viewTo&&(null==i.updateLineNumbers||i.updateLineNumbers>t)&&(i.updateLineNumbers=t),e.curOp.viewChanged=!0,t>=i.viewTo)zo&&wn(e.doc,t)<i.viewTo&&It(e)
else if(r<=i.viewFrom)zo&&xn(e.doc,r+n)>i.viewFrom?It(e):(i.viewFrom+=n,i.viewTo+=n)
else if(t<=i.viewFrom&&r>=i.viewTo)It(e)
else if(t<=i.viewFrom){var o=Rt(e,r,r+n,1)
o?(i.view=i.view.slice(o.index),i.viewFrom=o.lineN,i.viewTo+=n):It(e)}else if(r>=i.viewTo){var o=Rt(e,t,t,-1)
o?(i.view=i.view.slice(0,o.index),i.viewTo=o.lineN):It(e)}else{var l=Rt(e,t,t,-1),s=Rt(e,r,r+n,1)
l&&s?(i.view=i.view.slice(0,l.index).concat(Et(e,l.lineN,s.lineN)).concat(i.view.slice(s.index)),i.viewTo+=n):It(e)}var a=i.externalMeasured
a&&(r<a.lineN?a.lineN+=n:t<a.lineN+a.size&&(i.externalMeasured=null))}function zt(e,t,r){e.curOp.viewChanged=!0
var n=e.display,i=e.display.externalMeasured
if(i&&t>=i.lineN&&t<i.lineN+i.size&&(n.externalMeasured=null),!(t<n.viewFrom||t>=n.viewTo)){var o=n.view[Ft(e,t)]
if(null!=o.node){var l=o.changes||(o.changes=[]);-1==Di(l,r)&&l.push(r)}}}function It(e){e.display.viewFrom=e.display.viewTo=e.doc.first,e.display.view=[],e.display.viewOffset=0}function Ft(e,t){if(t>=e.display.viewTo)return null
if(t-=e.display.viewFrom,0>t)return null
for(var r=e.display.view,n=0;n<r.length;n++)if(t-=r[n].size,0>t)return n}function Rt(e,t,r,n){var i,o=Ft(e,t),l=e.display.view
if(!zo||r==e.doc.first+e.doc.size)return{index:o,lineN:r}
for(var s=0,a=e.display.viewFrom;o>s;s++)a+=l[s].size
if(a!=t){if(n>0){if(o==l.length-1)return null
i=a+l[o].size-t,o++}else i=a-t
t+=i,r+=i}for(;wn(e.doc,r)!=r;){if(o==(0>n?0:l.length-1))return null
r+=n*l[o-(0>n?1:0)].size,o+=n}return{index:o,lineN:r}}function Bt(e,t,r){var n=e.display,i=n.view
0==i.length||t>=n.viewTo||r<=n.viewFrom?(n.view=Et(e,t,r),n.viewFrom=t):(n.viewFrom>t?n.view=Et(e,t,n.viewFrom).concat(n.view):n.viewFrom<t&&(n.view=n.view.slice(Ft(e,t))),n.viewFrom=t,n.viewTo<r?n.view=n.view.concat(Et(e,n.viewTo,r)):n.viewTo>r&&(n.view=n.view.slice(0,Ft(e,r)))),n.viewTo=r}function Gt(e){for(var t=e.display.view,r=0,n=0;n<t.length;n++){var i=t[n]
i.hidden||i.node&&!i.changes||++r}return r}function Ut(e){function t(){i.activeTouch&&(o=setTimeout(function(){i.activeTouch=null},1e3),l=i.activeTouch,l.end=+new Date)}function r(e){if(1!=e.touches.length)return!1
var t=e.touches[0]
return t.radiusX<=1&&t.radiusY<=1}function n(e,t){if(null==t.left)return!0
var r=t.left-e.left,n=t.top-e.top
return r*r+n*n>400}var i=e.display
Ol(i.scroller,"mousedown",Wt(e,_t)),bo&&11>wo?Ol(i.scroller,"dblclick",Wt(e,function(t){if(!ki(e,t)){var r=Xt(e,t)
if(r&&!Qt(e,t)&&!jt(e.display,t)){kl(t)
var n=e.findWordAt(r)
we(e.doc,n.anchor,n.head)}}})):Ol(i.scroller,"dblclick",function(t){ki(e,t)||kl(t)}),Eo||Ol(i.scroller,"contextmenu",function(t){yr(e,t)})
var o,l={end:0}
Ol(i.scroller,"touchstart",function(e){if(!r(e)){clearTimeout(o)
var t=+new Date
i.activeTouch={start:t,moved:!1,prev:t-l.end<=300?l:null},1==e.touches.length&&(i.activeTouch.left=e.touches[0].pageX,i.activeTouch.top=e.touches[0].pageY)}}),Ol(i.scroller,"touchmove",function(){i.activeTouch&&(i.activeTouch.moved=!0)}),Ol(i.scroller,"touchend",function(r){var o=i.activeTouch
if(o&&!jt(i,r)&&null!=o.left&&!o.moved&&new Date-o.start<300){var l,s=e.coordsChar(i.activeTouch,"page")
l=!o.prev||n(o,o.prev)?new he(s,s):!o.prev.prev||n(o,o.prev.prev)?e.findWordAt(s):new he(Io(s.line,0),ge(e.doc,Io(s.line+1,0))),e.setSelection(l.anchor,l.head),e.focus(),kl(r)}t()}),Ol(i.scroller,"touchcancel",t),Ol(i.scroller,"scroll",function(){i.scroller.clientHeight&&(nr(e,i.scroller.scrollTop),ir(e,i.scroller.scrollLeft,!0),Hl(e,"scroll",e))}),Ol(i.scroller,"mousewheel",function(t){or(e,t)}),Ol(i.scroller,"DOMMouseScroll",function(t){or(e,t)}),Ol(i.wrapper,"scroll",function(){i.wrapper.scrollTop=i.wrapper.scrollLeft=0}),i.dragFunctions={enter:function(t){ki(e,t)||Nl(t)},over:function(t){ki(e,t)||(tr(e,t),Nl(t))},start:function(t){er(e,t)},drop:Wt(e,Jt),leave:function(){rr(e)}}
var s=i.input.getField()
Ol(s,"keyup",function(t){dr.call(e,t)}),Ol(s,"keydown",Wt(e,hr)),Ol(s,"keypress",Wt(e,pr)),Ol(s,"focus",Fi(vr,e)),Ol(s,"blur",Fi(mr,e))}function Vt(t,r,n){var i=n&&n!=e.Init
if(!r!=!i){var o=t.display.dragFunctions,l=r?Ol:Al
l(t.display.scroller,"dragstart",o.start),l(t.display.scroller,"dragenter",o.enter),l(t.display.scroller,"dragover",o.over),l(t.display.scroller,"dragleave",o.leave),l(t.display.scroller,"drop",o.drop)}}function Kt(e){var t=e.display;(t.lastWrapHeight!=t.wrapper.clientHeight||t.lastWrapWidth!=t.wrapper.clientWidth)&&(t.cachedCharWidth=t.cachedTextHeight=t.cachedPaddingH=null,t.scrollbarsClipped=!1,e.setSize())}function jt(e,t){for(var r=xi(t);r!=e.wrapper;r=r.parentNode)if(!r||1==r.nodeType&&"true"==r.getAttribute("cm-ignore-events")||r.parentNode==e.sizer&&r!=e.mover)return!0}function Xt(e,t,r,n){var i=e.display
if(!r&&"true"==xi(t).getAttribute("cm-not-content"))return null
var o,l,s=i.lineSpace.getBoundingClientRect()
try{o=t.clientX-s.left,l=t.clientY-s.top}catch(t){return null}var a,u=vt(e,o,l)
if(n&&1==u.xRel&&(a=Zn(e.doc,u.line).text).length==u.ch){var c=Rl(a,a.length,e.options.tabSize)-a.length
u=Io(u.line,Math.max(0,Math.round((o-je(e.display).left)/bt(e.display))-c))}return u}function _t(e){var t=this,r=t.display
if(!(r.activeTouch&&r.input.supportsTouch()||ki(t,e))){if(r.shift=e.shiftKey,jt(r,e))return void(xo||(r.scroller.draggable=!1,setTimeout(function(){r.scroller.draggable=!0},100)))
if(!Qt(t,e)){var n=Xt(t,e)
switch(window.focus(),Ci(e)){case 1:t.state.selectingText?t.state.selectingText(e):n?Yt(t,e,n):xi(e)==r.scroller&&kl(e)
break
case 2:xo&&(t.state.lastMiddleDown=+new Date),n&&we(t.doc,n),setTimeout(function(){r.input.focus()},20),kl(e)
break
case 3:Eo?yr(t,e):gr(t)}}}}function Yt(e,t,r){bo?setTimeout(Fi($,e),0):e.curOp.focus=ji()
var n,i=+new Date
Uo&&Uo.time>i-400&&0==Fo(Uo.pos,r)?n="triple":Go&&Go.time>i-400&&0==Fo(Go.pos,r)?(n="double",Uo={time:i,pos:r}):(n="single",Go={time:i,pos:r})
var o,l=e.doc.sel,s=Wo?t.metaKey:t.ctrlKey
e.options.dragDrop&&Jl&&!e.isReadOnly()&&"single"==n&&(o=l.contains(r))>-1&&(Fo((o=l.ranges[o]).from(),r)<0||r.xRel>0)&&(Fo(o.to(),r)>0||r.xRel<0)?qt(e,t,r,s):$t(e,t,r,n,s)}function qt(e,t,r,n){var i=e.display,o=+new Date,l=Wt(e,function(s){xo&&(i.scroller.draggable=!1),e.state.draggingText=!1,Al(document,"mouseup",l),Al(i.scroller,"drop",l),Math.abs(t.clientX-s.clientX)+Math.abs(t.clientY-s.clientY)<10&&(kl(s),!n&&+new Date-200<o&&we(e.doc,r),xo||bo&&9==wo?setTimeout(function(){document.body.focus(),i.input.focus()},20):i.input.focus())})
xo&&(i.scroller.draggable=!0),e.state.draggingText=l,i.scroller.dragDrop&&i.scroller.dragDrop(),Ol(document,"mouseup",l),Ol(i.scroller,"drop",l)}function $t(e,t,r,n,i){function o(t){if(0!=Fo(v,t))if(v=t,"rect"==n){for(var i=[],o=e.options.tabSize,l=Rl(Zn(u,r.line).text,r.ch,o),s=Rl(Zn(u,t.line).text,t.ch,o),a=Math.min(l,s),d=Math.max(l,s),p=Math.min(r.line,t.line),g=Math.min(e.lastLine(),Math.max(r.line,t.line));g>=p;p++){var m=Zn(u,p).text,y=Bl(m,a,o)
a==d?i.push(new he(Io(p,y),Io(p,y))):m.length>y&&i.push(new he(Io(p,y),Io(p,Bl(m,d,o))))}i.length||i.push(new he(r,r)),ke(u,fe(f.ranges.slice(0,h).concat(i),h),{origin:"*mouse",scroll:!1}),e.scrollIntoView(t)}else{var b=c,w=b.anchor,x=t
if("single"!=n){if("double"==n)var C=e.findWordAt(t)
else var C=new he(Io(t.line,0),ge(u,Io(t.line+1,0)))
Fo(C.anchor,w)>0?(x=C.head,w=q(b.from(),C.anchor)):(x=C.anchor,w=Y(b.to(),C.head))}var i=f.ranges.slice(0)
i[h]=new he(ge(u,w),x),ke(u,fe(i,h),Il)}}function l(t){var r=++y,i=Xt(e,t,!0,"rect"==n)
if(i)if(0!=Fo(i,v)){e.curOp.focus=ji(),o(i)
var s=w(a,u);(i.line>=s.to||i.line<s.from)&&setTimeout(Wt(e,function(){y==r&&l(t)}),150)}else{var c=t.clientY<m.top?-20:t.clientY>m.bottom?20:0
c&&setTimeout(Wt(e,function(){y==r&&(a.scroller.scrollTop+=c,l(t))}),50)}}function s(t){e.state.selectingText=!1,y=1/0,kl(t),a.input.focus(),Al(document,"mousemove",b),Al(document,"mouseup",x),u.history.lastSelOrigin=null}var a=e.display,u=e.doc
kl(t)
var c,h,f=u.sel,d=f.ranges
if(i&&!t.shiftKey?(h=u.sel.contains(r),c=h>-1?d[h]:new he(r,r)):(c=u.sel.primary(),h=u.sel.primIndex),t.altKey)n="rect",i||(c=new he(r,r)),r=Xt(e,t,!0,!0),h=-1
else if("double"==n){var p=e.findWordAt(r)
c=e.display.shift||u.extend?be(u,c,p.anchor,p.head):p}else if("triple"==n){var g=new he(Io(r.line,0),ge(u,Io(r.line+1,0)))
c=e.display.shift||u.extend?be(u,c,g.anchor,g.head):g}else c=be(u,c,r)
i?-1==h?(h=d.length,ke(u,fe(d.concat([c]),h),{scroll:!1,origin:"*mouse"})):d.length>1&&d[h].empty()&&"single"==n&&!t.shiftKey?(ke(u,fe(d.slice(0,h).concat(d.slice(h+1)),0),{scroll:!1,origin:"*mouse"}),f=u.sel):Ce(u,h,c,Il):(h=0,ke(u,new ce([c],0),Il),f=u.sel)
var v=r,m=a.wrapper.getBoundingClientRect(),y=0,b=Wt(e,function(e){Ci(e)?l(e):s(e)}),x=Wt(e,s)
e.state.selectingText=x,Ol(document,"mousemove",b),Ol(document,"mouseup",x)}function Zt(e,t,r,n){try{var i=t.clientX,o=t.clientY}catch(t){return!1}if(i>=Math.floor(e.display.gutters.getBoundingClientRect().right))return!1
n&&kl(t)
var l=e.display,s=l.lineDiv.getBoundingClientRect()
if(o>s.bottom||!Ni(e,r))return wi(t)
o-=s.top-l.viewOffset
for(var a=0;a<e.options.gutters.length;++a){var u=l.gutters.childNodes[a]
if(u&&u.getBoundingClientRect().right>=i){var c=ri(e.doc,o),h=e.options.gutters[a]
return Hl(e,r,e,c,h,t),wi(t)}}}function Qt(e,t){return Zt(e,t,"gutterClick",!0)}function Jt(e){var t=this
if(rr(t),!ki(t,e)&&!jt(t.display,e)){kl(e),bo&&(Xo=+new Date)
var r=Xt(t,e,!0),n=e.dataTransfer.files
if(r&&!t.isReadOnly())if(n&&n.length&&window.FileReader&&window.File)for(var i=n.length,o=Array(i),l=0,s=function(e,n){if(!t.options.allowDropFileTypes||-1!=Di(t.options.allowDropFileTypes,e.type)){var s=new FileReader
s.onload=Wt(t,function(){var e=s.result
if(/[\x00-\x08\x0e-\x1f]{2}/.test(e)&&(e=""),o[n]=e,++l==i){r=ge(t.doc,r)
var a={from:r,to:r,text:t.doc.splitLines(o.join(t.doc.lineSeparator())),origin:"paste"}
Tr(t.doc,a),Te(t.doc,de(r,Qo(a)))}}),s.readAsText(e)}},a=0;i>a;++a)s(n[a],a)
else{if(t.state.draggingText&&t.doc.sel.contains(r)>-1)return t.state.draggingText(e),void setTimeout(function(){t.display.input.focus()},20)
try{var o=e.dataTransfer.getData("Text")
if(o){if(t.state.draggingText&&!(Wo?e.altKey:e.ctrlKey))var u=t.listSelections()
if(Me(t.doc,de(r,r)),u)for(var a=0;a<u.length;++a)Ar(t.doc,"",u[a].anchor,u[a].head,"drag")
t.replaceSelection(o,"around","paste"),t.display.input.focus()}}catch(e){}}}}function er(e,t){if(bo&&(!e.state.draggingText||+new Date-Xo<100))return void Nl(t)
if(!ki(e,t)&&!jt(e.display,t)&&(t.dataTransfer.setData("Text",e.getSelection()),t.dataTransfer.setDragImage&&!To)){var r=Ui("img",null,null,"position: fixed; left: 0; top: 0;")
r.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",Lo&&(r.width=r.height=1,e.display.wrapper.appendChild(r),r._top=r.offsetTop),t.dataTransfer.setDragImage(r,0,0),Lo&&r.parentNode.removeChild(r)}}function tr(e,t){var r=Xt(e,t)
if(r){var n=document.createDocumentFragment()
ze(e,r,n),e.display.dragCursor||(e.display.dragCursor=Ui("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),e.display.lineSpace.insertBefore(e.display.dragCursor,e.display.cursorDiv)),Ki(e.display.dragCursor,n)}}function rr(e){e.display.dragCursor&&(e.display.lineSpace.removeChild(e.display.dragCursor),e.display.dragCursor=null)}function nr(e,t){Math.abs(e.doc.scrollTop-t)<2||(e.doc.scrollTop=t,vo||O(e,{top:t}),e.display.scroller.scrollTop!=t&&(e.display.scroller.scrollTop=t),e.display.scrollbars.setScrollTop(t),vo&&O(e),Re(e,100))}function ir(e,t,r){(r?t==e.doc.scrollLeft:Math.abs(e.doc.scrollLeft-t)<2)||(t=Math.min(t,e.display.scroller.scrollWidth-e.display.scroller.clientWidth),e.doc.scrollLeft=t,x(e),e.display.scroller.scrollLeft!=t&&(e.display.scroller.scrollLeft=t),e.display.scrollbars.setScrollLeft(t))}function or(e,t){var r=qo(t),n=r.x,i=r.y,o=e.display,l=o.scroller,s=l.scrollWidth>l.clientWidth,a=l.scrollHeight>l.clientHeight
if(n&&s||i&&a){if(i&&Wo&&xo)e:for(var u=t.target,c=o.view;u!=l;u=u.parentNode)for(var h=0;h<c.length;h++)if(c[h].node==u){e.display.currentWheelTarget=u
break e}if(n&&!vo&&!Lo&&null!=Yo)return i&&a&&nr(e,Math.max(0,Math.min(l.scrollTop+i*Yo,l.scrollHeight-l.clientHeight))),ir(e,Math.max(0,Math.min(l.scrollLeft+n*Yo,l.scrollWidth-l.clientWidth))),(!i||i&&a)&&kl(t),void(o.wheelStartX=null)
if(i&&null!=Yo){var f=i*Yo,d=e.doc.scrollTop,p=d+o.wrapper.clientHeight
0>f?d=Math.max(0,d+f-50):p=Math.min(e.doc.height,p+f+50),O(e,{top:d,bottom:p})}20>_o&&(null==o.wheelStartX?(o.wheelStartX=l.scrollLeft,o.wheelStartY=l.scrollTop,o.wheelDX=n,o.wheelDY=i,setTimeout(function(){if(null!=o.wheelStartX){var e=l.scrollLeft-o.wheelStartX,t=l.scrollTop-o.wheelStartY,r=t&&o.wheelDY&&t/o.wheelDY||e&&o.wheelDX&&e/o.wheelDX
o.wheelStartX=o.wheelStartY=null,r&&(Yo=(Yo*_o+r)/(_o+1),++_o)}},200)):(o.wheelDX+=n,o.wheelDY+=i))}}function lr(e,t,r){if("string"==typeof t&&(t=ul[t],!t))return!1
e.display.input.ensurePolled()
var n=e.display.shift,i=!1
try{e.isReadOnly()&&(e.state.suppressEdits=!0),r&&(e.display.shift=!1),i=t(e)!=Pl}finally{e.display.shift=n,e.state.suppressEdits=!1}return i}function sr(e,t,r){for(var n=0;n<e.state.keyMaps.length;n++){var i=hl(t,e.state.keyMaps[n],r,e)
if(i)return i}return e.options.extraKeys&&hl(t,e.options.extraKeys,r,e)||hl(t,e.options.keyMap,r,e)}function ar(e,t,r,n){var i=e.state.keySeq
if(i){if(fl(t))return"handled"
$o.set(50,function(){e.state.keySeq==i&&(e.state.keySeq=null,e.display.input.reset())}),t=i+" "+t}var o=sr(e,t,n)
return"multi"==o&&(e.state.keySeq=t),"handled"==o&&Li(e,"keyHandled",e,t,r),("handled"==o||"multi"==o)&&(kl(r),Fe(e)),i&&!o&&/\'$/.test(t)?(kl(r),!0):!!o}function ur(e,t){var r=dl(t,!0)
return r?t.shiftKey&&!e.state.keySeq?ar(e,"Shift-"+r,t,function(t){return lr(e,t,!0)})||ar(e,r,t,function(t){return("string"==typeof t?/^go[A-Z]/.test(t):t.motion)?lr(e,t):void 0}):ar(e,r,t,function(t){return lr(e,t)}):!1}function cr(e,t,r){return ar(e,"'"+r+"'",t,function(t){return lr(e,t,!0)})}function hr(e){var t=this
if(t.curOp.focus=ji(),!ki(t,e)){bo&&11>wo&&27==e.keyCode&&(e.returnValue=!1)
var r=e.keyCode
t.display.shift=16==r||e.shiftKey
var n=ur(t,e)
Lo&&(Zo=n?r:null,!n&&88==r&&!rs&&(Wo?e.metaKey:e.ctrlKey)&&t.replaceSelection("",null,"cut")),18!=r||/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className)||fr(t)}}function fr(e){function t(e){18!=e.keyCode&&e.altKey||($l(r,"CodeMirror-crosshair"),Al(document,"keyup",t),Al(document,"mouseover",t))}var r=e.display.lineDiv
Zl(r,"CodeMirror-crosshair"),Ol(document,"keyup",t),Ol(document,"mouseover",t)}function dr(e){16==e.keyCode&&(this.doc.sel.shift=!1),ki(this,e)}function pr(e){var t=this
if(!(jt(t.display,e)||ki(t,e)||e.ctrlKey&&!e.altKey||Wo&&e.metaKey)){var r=e.keyCode,n=e.charCode
if(Lo&&r==Zo)return Zo=null,void kl(e)
if(!Lo||e.which&&!(e.which<10)||!ur(t,e)){var i=String.fromCharCode(null==n?r:n)
cr(t,e,i)||t.display.input.onKeyPress(e)}}}function gr(e){e.state.delayingBlurEvent=!0,setTimeout(function(){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1,mr(e))},100)}function vr(e){e.state.delayingBlurEvent&&(e.state.delayingBlurEvent=!1),"nocursor"!=e.options.readOnly&&(e.state.focused||(Hl(e,"focus",e),e.state.focused=!0,Zl(e.display.wrapper,"CodeMirror-focused"),e.curOp||e.display.selForContextMenu==e.doc.sel||(e.display.input.reset(),xo&&setTimeout(function(){e.display.input.reset(!0)},20)),e.display.input.receivedFocus()),Fe(e))}function mr(e){e.state.delayingBlurEvent||(e.state.focused&&(Hl(e,"blur",e),e.state.focused=!1,$l(e.display.wrapper,"CodeMirror-focused")),clearInterval(e.display.blinker),setTimeout(function(){e.state.focused||(e.display.shift=!1)},150))}function yr(e,t){jt(e.display,t)||br(e,t)||ki(e,t,"contextmenu")||e.display.input.onContextMenu(t)}function br(e,t){return Ni(e,"gutterContextMenu")?Zt(e,t,"gutterContextMenu",!1):!1}function wr(e,t){if(Fo(e,t.from)<0)return e
if(Fo(e,t.to)<=0)return Qo(t)
var r=e.line+t.text.length-(t.to.line-t.from.line)-1,n=e.ch
return e.line==t.to.line&&(n+=Qo(t).ch-t.to.ch),Io(r,n)}function xr(e,t){for(var r=[],n=0;n<e.sel.ranges.length;n++){var i=e.sel.ranges[n]
r.push(new he(wr(i.anchor,t),wr(i.head,t)))}return fe(r,e.sel.primIndex)}function Cr(e,t,r){return e.line==t.line?Io(r.line,e.ch-t.ch+r.ch):Io(r.line+(e.line-t.line),e.ch)}function Sr(e,t,r){for(var n=[],i=Io(e.first,0),o=i,l=0;l<t.length;l++){var s=t[l],a=Cr(s.from,i,o),u=Cr(Qo(s),i,o)
if(i=s.to,o=u,"around"==r){var c=e.sel.ranges[l],h=Fo(c.head,c.anchor)<0
n[l]=new he(h?u:a,h?a:u)}else n[l]=new he(a,a)}return new ce(n,e.sel.primIndex)}function Lr(e,t,r){var n={canceled:!1,from:t.from,to:t.to,text:t.text,origin:t.origin,cancel:function(){this.canceled=!0}}
return r&&(n.update=function(t,r,n,i){t&&(this.from=ge(e,t)),r&&(this.to=ge(e,r)),n&&(this.text=n),void 0!==i&&(this.origin=i)}),Hl(e,"beforeChange",e,n),e.cm&&Hl(e.cm,"beforeChange",e.cm,n),n.canceled?null:{from:n.from,to:n.to,text:n.text,origin:n.origin}}function Tr(e,t,r){if(e.cm){if(!e.cm.curOp)return Wt(e.cm,Tr)(e,t,r)
if(e.cm.state.suppressEdits)return}if(!(Ni(e,"beforeChange")||e.cm&&Ni(e.cm,"beforeChange"))||(t=Lr(e,t,!0))){var n=Po&&!r&&an(e,t.from,t.to)
if(n)for(var i=n.length-1;i>=0;--i)kr(e,{from:n[i].from,to:n[i].to,text:i?[""]:t.text})
else kr(e,t)}}function kr(e,t){if(1!=t.text.length||""!=t.text[0]||0!=Fo(t.from,t.to)){var r=xr(e,t)
ui(e,t,r,e.cm?e.cm.curOp.id:NaN),Or(e,t,r,on(e,t))
var n=[]
qn(e,function(e,r){r||-1!=Di(n,e.history)||(bi(e.history,t),n.push(e.history)),Or(e,t,null,on(e,t))})}}function Mr(e,t,r){if(!e.cm||!e.cm.state.suppressEdits){for(var n,i=e.history,o=e.sel,l="undo"==t?i.done:i.undone,s="undo"==t?i.undone:i.done,a=0;a<l.length&&(n=l[a],r?!n.ranges||n.equals(e.sel):n.ranges);a++);if(a!=l.length){for(i.lastOrigin=i.lastSelOrigin=null;n=l.pop(),n.ranges;){if(fi(n,s),r&&!n.equals(e.sel))return void ke(e,n,{clearRedo:!1})
o=n}var u=[]
fi(o,s),s.push({changes:u,generation:i.generation}),i.generation=n.generation||++i.maxGeneration
for(var c=Ni(e,"beforeChange")||e.cm&&Ni(e.cm,"beforeChange"),a=n.changes.length-1;a>=0;--a){var h=n.changes[a]
if(h.origin=t,c&&!Lr(e,h,!1))return void(l.length=0)
u.push(li(e,h))
var f=a?xr(e,h):Hi(l)
Or(e,h,f,sn(e,h)),!a&&e.cm&&e.cm.scrollIntoView({from:h.from,to:Qo(h)})
var d=[]
qn(e,function(e,t){t||-1!=Di(d,e.history)||(bi(e.history,h),d.push(e.history)),Or(e,h,null,sn(e,h))})}}}}function Nr(e,t){if(0!=t&&(e.first+=t,e.sel=new ce(Ei(e.sel.ranges,function(e){return new he(Io(e.anchor.line+t,e.anchor.ch),Io(e.head.line+t,e.head.ch))}),e.sel.primIndex),e.cm)){Pt(e.cm,e.first,e.first-t,t)
for(var r=e.cm.display,n=r.viewFrom;n<r.viewTo;n++)zt(e.cm,n,"gutter")}}function Or(e,t,r,n){if(e.cm&&!e.cm.curOp)return Wt(e.cm,Or)(e,t,r,n)
if(t.to.line<e.first)return void Nr(e,t.text.length-1-(t.to.line-t.from.line))
if(!(t.from.line>e.lastLine())){if(t.from.line<e.first){var i=t.text.length-1-(e.first-t.from.line)
Nr(e,i),t={from:Io(e.first,0),to:Io(t.to.line+i,t.to.ch),text:[Hi(t.text)],origin:t.origin}}var o=e.lastLine()
t.to.line>o&&(t={from:t.from,to:Io(o,Zn(e,o).text.length),text:[t.text[0]],origin:t.origin}),t.removed=Qn(e,t.from,t.to),r||(r=xr(e,t)),e.cm?Wr(e.cm,t,n):Xn(e,t,n),Me(e,r,zl)}}function Wr(e,t,r){var n=e.doc,i=e.display,l=t.from,s=t.to,a=!1,u=l.line
e.options.lineWrapping||(u=ti(yn(Zn(n,l.line))),n.iter(u,s.line+1,function(e){return e==i.maxLine?(a=!0,!0):void 0})),n.sel.contains(t.from,t.to)>-1&&Mi(e),Xn(n,t,r,o(e)),e.options.lineWrapping||(n.iter(u,l.line+t.text.length,function(e){var t=h(e)
t>i.maxLineLength&&(i.maxLine=e,i.maxLineLength=t,i.maxLineChanged=!0,a=!1)}),a&&(e.curOp.updateMaxLine=!0)),n.frontier=Math.min(n.frontier,l.line),Re(e,400)
var c=t.text.length-(s.line-l.line)-1
t.full?Pt(e):l.line!=s.line||1!=t.text.length||jn(e.doc,t)?Pt(e,l.line,s.line+1,c):zt(e,l.line,"text")
var f=Ni(e,"changes"),d=Ni(e,"change")
if(d||f){var p={from:l,to:s,text:t.text,removed:t.removed,origin:t.origin}
d&&Li(e,"change",e,p),f&&(e.curOp.changeObjs||(e.curOp.changeObjs=[])).push(p)}e.display.selForContextMenu=null}function Ar(e,t,r,n,i){if(n||(n=r),Fo(n,r)<0){var o=n
n=r,r=o}"string"==typeof t&&(t=e.splitLines(t)),Tr(e,{from:r,to:n,text:t,origin:i})}function Hr(e,t){if(!ki(e,"scrollCursorIntoView")){var r=e.display,n=r.sizer.getBoundingClientRect(),i=null
if(t.top+n.top<0?i=!0:t.bottom+n.top>(window.innerHeight||document.documentElement.clientHeight)&&(i=!1),null!=i&&!Mo){var o=Ui("div","â€‹",null,"position: absolute; top: "+(t.top-r.viewOffset-Ve(e.display))+"px; height: "+(t.bottom-t.top+Xe(e)+r.barHeight)+"px; left: "+t.left+"px; width: 2px;")
e.display.lineSpace.appendChild(o),o.scrollIntoView(i),e.display.lineSpace.removeChild(o)}}}function Dr(e,t,r,n){null==n&&(n=0)
for(var i=0;5>i;i++){var o=!1,l=dt(e,t),s=r&&r!=t?dt(e,r):l,a=Pr(e,Math.min(l.left,s.left),Math.min(l.top,s.top)-n,Math.max(l.left,s.left),Math.max(l.bottom,s.bottom)+n),u=e.doc.scrollTop,c=e.doc.scrollLeft
if(null!=a.scrollTop&&(nr(e,a.scrollTop),Math.abs(e.doc.scrollTop-u)>1&&(o=!0)),null!=a.scrollLeft&&(ir(e,a.scrollLeft),Math.abs(e.doc.scrollLeft-c)>1&&(o=!0)),!o)break}return l}function Er(e,t,r,n,i){var o=Pr(e,t,r,n,i)
null!=o.scrollTop&&nr(e,o.scrollTop),null!=o.scrollLeft&&ir(e,o.scrollLeft)}function Pr(e,t,r,n,i){var o=e.display,l=yt(e.display)
0>r&&(r=0)
var s=e.curOp&&null!=e.curOp.scrollTop?e.curOp.scrollTop:o.scroller.scrollTop,a=Ye(e),u={}
i-r>a&&(i=r+a)
var c=e.doc.height+Ke(o),h=l>r,f=i>c-l
if(s>r)u.scrollTop=h?0:r
else if(i>s+a){var d=Math.min(r,(f?c:i)-a)
d!=s&&(u.scrollTop=d)}var p=e.curOp&&null!=e.curOp.scrollLeft?e.curOp.scrollLeft:o.scroller.scrollLeft,g=_e(e)-(e.options.fixedGutter?o.gutters.offsetWidth:0),v=n-t>g
return v&&(n=t+g),10>t?u.scrollLeft=0:p>t?u.scrollLeft=Math.max(0,t-(v?0:10)):n>g+p-3&&(u.scrollLeft=n+(v?0:10)-g),u}function zr(e,t,r){(null!=t||null!=r)&&Fr(e),null!=t&&(e.curOp.scrollLeft=(null==e.curOp.scrollLeft?e.doc.scrollLeft:e.curOp.scrollLeft)+t),null!=r&&(e.curOp.scrollTop=(null==e.curOp.scrollTop?e.doc.scrollTop:e.curOp.scrollTop)+r)}function Ir(e){Fr(e)
var t=e.getCursor(),r=t,n=t
e.options.lineWrapping||(r=t.ch?Io(t.line,t.ch-1):t,n=Io(t.line,t.ch+1)),e.curOp.scrollToPos={from:r,to:n,margin:e.options.cursorScrollMargin,isCursor:!0}}function Fr(e){var t=e.curOp.scrollToPos
if(t){e.curOp.scrollToPos=null
var r=pt(e,t.from),n=pt(e,t.to),i=Pr(e,Math.min(r.left,n.left),Math.min(r.top,n.top)-t.margin,Math.max(r.right,n.right),Math.max(r.bottom,n.bottom)+t.margin)
e.scrollTo(i.scrollLeft,i.scrollTop)}}function Rr(e,t,r,n){var i,o=e.doc
null==r&&(r="add"),"smart"==r&&(o.mode.indent?i=Ue(e,t):r="prev")
var l=e.options.tabSize,s=Zn(o,t),a=Rl(s.text,null,l)
s.stateAfter&&(s.stateAfter=null)
var u,c=s.text.match(/^\s*/)[0]
if(n||/\S/.test(s.text)){if("smart"==r&&(u=o.mode.indent(i,s.text.slice(c.length),s.text),u==Pl||u>150)){if(!n)return
r="prev"}}else u=0,r="not"
"prev"==r?u=t>o.first?Rl(Zn(o,t-1).text,null,l):0:"add"==r?u=a+e.options.indentUnit:"subtract"==r?u=a-e.options.indentUnit:"number"==typeof r&&(u=a+r),u=Math.max(0,u)
var h="",f=0
if(e.options.indentWithTabs)for(var d=Math.floor(u/l);d;--d)f+=l,h+="	"
if(u>f&&(h+=Ai(u-f)),h!=c)return Ar(o,h,Io(t,0),Io(t,c.length),"+input"),s.stateAfter=null,!0
for(var d=0;d<o.sel.ranges.length;d++){var p=o.sel.ranges[d]
if(p.head.line==t&&p.head.ch<c.length){var f=Io(t,c.length)
Ce(o,d,new he(f,f))
break}}}function Br(e,t,r,n){var i=t,o=t
return"number"==typeof t?o=Zn(e,pe(e,t)):i=ti(t),null==i?null:(n(o,i)&&e.cm&&zt(e.cm,i,r),o)}function Gr(e,t){for(var r=e.doc.sel.ranges,n=[],i=0;i<r.length;i++){for(var o=t(r[i]);n.length&&Fo(o.from,Hi(n).to)<=0;){var l=n.pop()
if(Fo(l.from,o.from)<0){o.from=l.from
break}}n.push(o)}Ot(e,function(){for(var t=n.length-1;t>=0;t--)Ar(e.doc,"",n[t].from,n[t].to,"+delete")
Ir(e)})}function Ur(e,t,r,n,i){function o(){var t=s+r
return t<e.first||t>=e.first+e.size?h=!1:(s=t,c=Zn(e,t))}function l(e){var t=(i?ho:fo)(c,a,r,!0)
if(null==t){if(e||!o())return h=!1
a=i?(0>r?io:no)(c):0>r?c.text.length:0}else a=t
return!0}var s=t.line,a=t.ch,u=r,c=Zn(e,s),h=!0
if("char"==n)l()
else if("column"==n)l(!0)
else if("word"==n||"group"==n)for(var f=null,d="group"==n,p=e.cm&&e.cm.getHelper(t,"wordChars"),g=!0;!(0>r)||l(!g);g=!1){var v=c.text.charAt(a)||"\n",m=Ri(v,p)?"w":d&&"\n"==v?"n":!d||/\s/.test(v)?null:"p"
if(!d||g||m||(m="s"),f&&f!=m){0>r&&(r=1,l())
break}if(m&&(f=m),r>0&&!l(!g))break}var y=He(e,Io(s,a),t,u,!0)
return h||(y.hitSide=!0),y}function Vr(e,t,r,n){var i,o=e.doc,l=t.left
if("page"==n){var s=Math.min(e.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight)
i=t.top+r*(s-(0>r?1.5:.5)*yt(e.display))}else"line"==n&&(i=r>0?t.bottom+3:t.top-3)
for(;;){var a=vt(e,l,i)
if(!a.outside)break
if(0>r?0>=i:i>=o.height){a.hitSide=!0
break}i+=5*r}return a}function Kr(t,r,n,i){e.defaults[t]=r,n&&(el[t]=i?function(e,t,r){r!=tl&&n(e,t,r)}:n)}function jr(e){for(var t,r,n,i,o=e.split(/-(?!$)/),e=o[o.length-1],l=0;l<o.length-1;l++){var s=o[l]
if(/^(cmd|meta|m)$/i.test(s))i=!0
else if(/^a(lt)?$/i.test(s))t=!0
else if(/^(c|ctrl|control)$/i.test(s))r=!0
else{if(!/^s(hift)$/i.test(s))throw new Error("Unrecognized modifier name: "+s)
n=!0}}return t&&(e="Alt-"+e),r&&(e="Ctrl-"+e),i&&(e="Cmd-"+e),n&&(e="Shift-"+e),e}function Xr(e){return"string"==typeof e?cl[e]:e}function _r(e,t,r,n,i){if(n&&n.shared)return Yr(e,t,r,n,i)
if(e.cm&&!e.cm.curOp)return Wt(e.cm,_r)(e,t,r,n,i)
var o=new vl(e,i),l=Fo(t,r)
if(n&&Ii(n,o,!1),l>0||0==l&&o.clearWhenEmpty!==!1)return o
if(o.replacedWith&&(o.collapsed=!0,o.widgetNode=Ui("span",[o.replacedWith],"CodeMirror-widget"),n.handleMouseEvents||o.widgetNode.setAttribute("cm-ignore-events","true"),n.insertLeft&&(o.widgetNode.insertLeft=!0)),o.collapsed){if(mn(e,t.line,t,r,o)||t.line!=r.line&&mn(e,r.line,t,r,o))throw new Error("Inserting collapsed marker partially overlapping an existing one")
zo=!0}o.addToHistory&&ui(e,{from:t,to:r,origin:"markText"},e.sel,NaN)
var s,a=t.line,u=e.cm
if(e.iter(a,r.line+1,function(e){u&&o.collapsed&&!u.options.lineWrapping&&yn(e)==u.display.maxLine&&(s=!0),o.collapsed&&a!=t.line&&ei(e,0),tn(e,new Qr(o,a==t.line?t.ch:null,a==r.line?r.ch:null)),++a}),o.collapsed&&e.iter(t.line,r.line+1,function(t){Cn(e,t)&&ei(t,0)}),o.clearOnEnter&&Ol(o,"beforeCursorEnter",function(){o.clear()}),o.readOnly&&(Po=!0,(e.history.done.length||e.history.undone.length)&&e.clearHistory()),o.collapsed&&(o.id=++gl,o.atomic=!0),u){if(s&&(u.curOp.updateMaxLine=!0),o.collapsed)Pt(u,t.line,r.line+1)
else if(o.className||o.title||o.startStyle||o.endStyle||o.css)for(var c=t.line;c<=r.line;c++)zt(u,c,"text")
o.atomic&&Oe(u.doc),Li(u,"markerAdded",u,o)}return o}function Yr(e,t,r,n,i){n=Ii(n),n.shared=!1
var o=[_r(e,t,r,n,i)],l=o[0],s=n.widgetNode
return qn(e,function(e){s&&(n.widgetNode=s.cloneNode(!0)),o.push(_r(e,ge(e,t),ge(e,r),n,i))
for(var a=0;a<e.linked.length;++a)if(e.linked[a].isParent)return
l=Hi(o)}),new ml(o,l)}function qr(e){return e.findMarks(Io(e.first,0),e.clipPos(Io(e.lastLine())),function(e){return e.parent})}function $r(e,t){for(var r=0;r<t.length;r++){var n=t[r],i=n.find(),o=e.clipPos(i.from),l=e.clipPos(i.to)
if(Fo(o,l)){var s=_r(e,o,l,n.primary,n.primary.type)
n.markers.push(s),s.parent=n}}}function Zr(e){for(var t=0;t<e.length;t++){var r=e[t],n=[r.primary.doc]
qn(r.primary.doc,function(e){n.push(e)})
for(var i=0;i<r.markers.length;i++){var o=r.markers[i];-1==Di(n,o.doc)&&(o.parent=null,r.markers.splice(i--,1))}}}function Qr(e,t,r){this.marker=e,this.from=t,this.to=r}function Jr(e,t){if(e)for(var r=0;r<e.length;++r){var n=e[r]
if(n.marker==t)return n}}function en(e,t){for(var r,n=0;n<e.length;++n)e[n]!=t&&(r||(r=[])).push(e[n])
return r}function tn(e,t){e.markedSpans=e.markedSpans?e.markedSpans.concat([t]):[t],t.marker.attachLine(e)}function rn(e,t,r){if(e)for(var n,i=0;i<e.length;++i){var o=e[i],l=o.marker,s=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t)
if(s||o.from==t&&"bookmark"==l.type&&(!r||!o.marker.insertLeft)){var a=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t);(n||(n=[])).push(new Qr(l,o.from,a?null:o.to))}}return n}function nn(e,t,r){if(e)for(var n,i=0;i<e.length;++i){var o=e[i],l=o.marker,s=null==o.to||(l.inclusiveRight?o.to>=t:o.to>t)
if(s||o.from==t&&"bookmark"==l.type&&(!r||o.marker.insertLeft)){var a=null==o.from||(l.inclusiveLeft?o.from<=t:o.from<t);(n||(n=[])).push(new Qr(l,a?null:o.from-t,null==o.to?null:o.to-t))}}return n}function on(e,t){if(t.full)return null
var r=me(e,t.from.line)&&Zn(e,t.from.line).markedSpans,n=me(e,t.to.line)&&Zn(e,t.to.line).markedSpans
if(!r&&!n)return null
var i=t.from.ch,o=t.to.ch,l=0==Fo(t.from,t.to),s=rn(r,i,l),a=nn(n,o,l),u=1==t.text.length,c=Hi(t.text).length+(u?i:0)
if(s)for(var h=0;h<s.length;++h){var f=s[h]
if(null==f.to){var d=Jr(a,f.marker)
d?u&&(f.to=null==d.to?null:d.to+c):f.to=i}}if(a)for(var h=0;h<a.length;++h){var f=a[h]
if(null!=f.to&&(f.to+=c),null==f.from){var d=Jr(s,f.marker)
d||(f.from=c,u&&(s||(s=[])).push(f))}else f.from+=c,u&&(s||(s=[])).push(f)}s&&(s=ln(s)),a&&a!=s&&(a=ln(a))
var p=[s]
if(!u){var g,v=t.text.length-2
if(v>0&&s)for(var h=0;h<s.length;++h)null==s[h].to&&(g||(g=[])).push(new Qr(s[h].marker,null,null))
for(var h=0;v>h;++h)p.push(g)
p.push(a)}return p}function ln(e){for(var t=0;t<e.length;++t){var r=e[t]
null!=r.from&&r.from==r.to&&r.marker.clearWhenEmpty!==!1&&e.splice(t--,1)}return e.length?e:null}function sn(e,t){var r=gi(e,t),n=on(e,t)
if(!r)return n
if(!n)return r
for(var i=0;i<r.length;++i){var o=r[i],l=n[i]
if(o&&l)e:for(var s=0;s<l.length;++s){for(var a=l[s],u=0;u<o.length;++u)if(o[u].marker==a.marker)continue e
o.push(a)}else l&&(r[i]=l)}return r}function an(e,t,r){var n=null
if(e.iter(t.line,r.line+1,function(e){if(e.markedSpans)for(var t=0;t<e.markedSpans.length;++t){var r=e.markedSpans[t].marker
!r.readOnly||n&&-1!=Di(n,r)||(n||(n=[])).push(r)}}),!n)return null
for(var i=[{from:t,to:r}],o=0;o<n.length;++o)for(var l=n[o],s=l.find(0),a=0;a<i.length;++a){var u=i[a]
if(!(Fo(u.to,s.from)<0||Fo(u.from,s.to)>0)){var c=[a,1],h=Fo(u.from,s.from),f=Fo(u.to,s.to);(0>h||!l.inclusiveLeft&&!h)&&c.push({from:u.from,to:s.from}),(f>0||!l.inclusiveRight&&!f)&&c.push({from:s.to,to:u.to}),i.splice.apply(i,c),a+=c.length-1}}return i}function un(e){var t=e.markedSpans
if(t){for(var r=0;r<t.length;++r)t[r].marker.detachLine(e)
e.markedSpans=null}}function cn(e,t){if(t){for(var r=0;r<t.length;++r)t[r].marker.attachLine(e)
e.markedSpans=t}}function hn(e){return e.inclusiveLeft?-1:0}function fn(e){return e.inclusiveRight?1:0}function dn(e,t){var r=e.lines.length-t.lines.length
if(0!=r)return r
var n=e.find(),i=t.find(),o=Fo(n.from,i.from)||hn(e)-hn(t)
if(o)return-o
var l=Fo(n.to,i.to)||fn(e)-fn(t)
return l?l:t.id-e.id}function pn(e,t){var r,n=zo&&e.markedSpans
if(n)for(var i,o=0;o<n.length;++o)i=n[o],i.marker.collapsed&&null==(t?i.from:i.to)&&(!r||dn(r,i.marker)<0)&&(r=i.marker)
return r}function gn(e){return pn(e,!0)}function vn(e){return pn(e,!1)}function mn(e,t,r,n,i){var o=Zn(e,t),l=zo&&o.markedSpans
if(l)for(var s=0;s<l.length;++s){var a=l[s]
if(a.marker.collapsed){var u=a.marker.find(0),c=Fo(u.from,r)||hn(a.marker)-hn(i),h=Fo(u.to,n)||fn(a.marker)-fn(i)
if(!(c>=0&&0>=h||0>=c&&h>=0)&&(0>=c&&(Fo(u.to,r)>0||a.marker.inclusiveRight&&i.inclusiveLeft)||c>=0&&(Fo(u.from,n)<0||a.marker.inclusiveLeft&&i.inclusiveRight)))return!0}}}function yn(e){for(var t;t=gn(e);)e=t.find(-1,!0).line
return e}function bn(e){for(var t,r;t=vn(e);)e=t.find(1,!0).line,(r||(r=[])).push(e)
return r}function wn(e,t){var r=Zn(e,t),n=yn(r)
return r==n?t:ti(n)}function xn(e,t){if(t>e.lastLine())return t
var r,n=Zn(e,t)
if(!Cn(e,n))return t
for(;r=vn(n);)n=r.find(1,!0).line
return ti(n)+1}function Cn(e,t){var r=zo&&t.markedSpans
if(r)for(var n,i=0;i<r.length;++i)if(n=r[i],n.marker.collapsed){if(null==n.from)return!0
if(!n.marker.widgetNode&&0==n.from&&n.marker.inclusiveLeft&&Sn(e,t,n))return!0}}function Sn(e,t,r){if(null==r.to){var n=r.marker.find(1,!0)
return Sn(e,n.line,Jr(n.line.markedSpans,r.marker))}if(r.marker.inclusiveRight&&r.to==t.text.length)return!0
for(var i,o=0;o<t.markedSpans.length;++o)if(i=t.markedSpans[o],i.marker.collapsed&&!i.marker.widgetNode&&i.from==r.to&&(null==i.to||i.to!=r.from)&&(i.marker.inclusiveLeft||r.marker.inclusiveRight)&&Sn(e,t,i))return!0}function Ln(e,t,r){ni(t)<(e.curOp&&e.curOp.scrollTop||e.doc.scrollTop)&&zr(e,null,r)}function Tn(e){if(null!=e.height)return e.height
var t=e.doc.cm
if(!t)return 0
if(!_l(document.body,e.node)){var r="position: relative;"
e.coverGutter&&(r+="margin-left: -"+t.display.gutters.offsetWidth+"px;"),e.noHScroll&&(r+="width: "+t.display.wrapper.clientWidth+"px;"),Ki(t.display.measure,Ui("div",[e.node],null,r))}return e.height=e.node.parentNode.offsetHeight}function kn(e,t,r,n){var i=new yl(e,r,n),o=e.cm
return o&&i.noHScroll&&(o.display.alignWidgets=!0),Br(e,t,"widget",function(t){var r=t.widgets||(t.widgets=[])
if(null==i.insertAt?r.push(i):r.splice(Math.min(r.length-1,Math.max(0,i.insertAt)),0,i),i.line=t,o&&!Cn(e,t)){var n=ni(t)<e.scrollTop
ei(t,t.height+Tn(i)),n&&zr(o,null,i.height),o.curOp.forceUpdate=!0}return!0}),i}function Mn(e,t,r,n){e.text=t,e.stateAfter&&(e.stateAfter=null),e.styles&&(e.styles=null),null!=e.order&&(e.order=null),un(e),cn(e,r)
var i=n?n(e):1
i!=e.height&&ei(e,i)}function Nn(e){e.parent=null,un(e)}function On(e,t){if(e)for(;;){var r=e.match(/(?:^|\s+)line-(background-)?(\S+)/)
if(!r)break
e=e.slice(0,r.index)+e.slice(r.index+r[0].length)
var n=r[1]?"bgClass":"textClass"
null==t[n]?t[n]=r[2]:new RegExp("(?:^|s)"+r[2]+"(?:$|s)").test(t[n])||(t[n]+=" "+r[2])}return e}function Wn(t,r){if(t.blankLine)return t.blankLine(r)
if(t.innerMode){var n=e.innerMode(t,r)
return n.mode.blankLine?n.mode.blankLine(n.state):void 0}}function An(t,r,n,i){for(var o=0;10>o;o++){i&&(i[0]=e.innerMode(t,n).mode)
var l=t.token(r,n)
if(r.pos>r.start)return l}throw new Error("Mode "+t.name+" failed to advance stream.")}function Hn(e,t,r,n){function i(e){return{start:h.start,end:h.pos,string:h.current(),type:o||null,state:e?sl(l.mode,c):c}}var o,l=e.doc,s=l.mode
t=ge(l,t)
var a,u=Zn(l,t.line),c=Ue(e,t.line,r),h=new pl(u.text,e.options.tabSize)
for(n&&(a=[]);(n||h.pos<t.ch)&&!h.eol();)h.start=h.pos,o=An(s,h,c),n&&a.push(i(!0))
return n?a:i()}function Dn(e,t,r,n,i,o,l){var s=r.flattenSpans
null==s&&(s=e.options.flattenSpans)
var a,u=0,c=null,h=new pl(t,e.options.tabSize),f=e.options.addModeClass&&[null]
for(""==t&&On(Wn(r,n),o);!h.eol();){if(h.pos>e.options.maxHighlightLength?(s=!1,l&&zn(e,t,n,h.pos),h.pos=t.length,a=null):a=On(An(r,h,n,f),o),f){var d=f[0].name
d&&(a="m-"+(a?d+" "+a:d))}if(!s||c!=a){for(;u<h.start;)u=Math.min(h.start,u+5e4),i(u,c)
c=a}h.start=h.pos}for(;u<h.pos;){var p=Math.min(h.pos,u+5e4)
i(p,c),u=p}}function En(e,t,r,n){var i=[e.state.modeGen],o={}
Dn(e,t.text,e.doc.mode,r,function(e,t){i.push(e,t)},o,n)
for(var l=0;l<e.state.overlays.length;++l){var s=e.state.overlays[l],a=1,u=0
Dn(e,t.text,s.mode,!0,function(e,t){for(var r=a;e>u;){var n=i[a]
n>e&&i.splice(a,1,e,i[a+1],n),a+=2,u=Math.min(e,n)}if(t)if(s.opaque)i.splice(r,a-r,e,"cm-overlay "+t),a=r+2
else for(;a>r;r+=2){var o=i[r+1]
i[r+1]=(o?o+" ":"")+"cm-overlay "+t}},o)}return{styles:i,classes:o.bgClass||o.textClass?o:null}}function Pn(e,t,r){if(!t.styles||t.styles[0]!=e.state.modeGen){var n=Ue(e,ti(t)),i=En(e,t,t.text.length>e.options.maxHighlightLength?sl(e.doc.mode,n):n)
t.stateAfter=n,t.styles=i.styles,i.classes?t.styleClasses=i.classes:t.styleClasses&&(t.styleClasses=null),r===e.doc.frontier&&e.doc.frontier++}return t.styles}function zn(e,t,r,n){var i=e.doc.mode,o=new pl(t,e.options.tabSize)
for(o.start=o.pos=n||0,""==t&&Wn(i,r);!o.eol();)An(i,o,r),o.start=o.pos}function In(e,t){if(!e||/^\s*$/.test(e))return null
var r=t.addModeClass?xl:wl
return r[e]||(r[e]=e.replace(/\S+/g,"cm-$&"))}function Fn(e,t){var r=Ui("span",null,null,xo?"padding-right: .1px":null),n={pre:Ui("pre",[r],"CodeMirror-line"),content:r,col:0,pos:0,cm:e,splitSpaces:(bo||xo)&&e.getOption("lineWrapping")}
t.measure={}
for(var i=0;i<=(t.rest?t.rest.length:0);i++){var o,l=i?t.rest[i-1]:t.line
n.pos=0,n.addToken=Bn,Qi(e.display.measure)&&(o=ii(l))&&(n.addToken=Un(n.addToken,o)),n.map=[]
var s=t!=e.display.externalMeasured&&ti(l)
Kn(l,n,Pn(e,l,s)),l.styleClasses&&(l.styleClasses.bgClass&&(n.bgClass=_i(l.styleClasses.bgClass,n.bgClass||"")),l.styleClasses.textClass&&(n.textClass=_i(l.styleClasses.textClass,n.textClass||""))),0==n.map.length&&n.map.push(0,0,n.content.appendChild(Zi(e.display.measure))),0==i?(t.measure.map=n.map,t.measure.cache={}):((t.measure.maps||(t.measure.maps=[])).push(n.map),(t.measure.caches||(t.measure.caches=[])).push({}))}return xo&&/\bcm-tab\b/.test(n.content.lastChild.className)&&(n.content.className="cm-tab-wrap-hack"),Hl(e,"renderLine",e,t.line,n.pre),n.pre.className&&(n.textClass=_i(n.pre.className,n.textClass||"")),n}function Rn(e){var t=Ui("span","â€¢","cm-invalidchar")
return t.title="\\u"+e.charCodeAt(0).toString(16),t.setAttribute("aria-label",t.title),t}function Bn(e,t,r,n,i,o,l){if(t){var s=e.splitSpaces?t.replace(/ {3,}/g,Gn):t,a=e.cm.state.specialChars,u=!1
if(a.test(t))for(var c=document.createDocumentFragment(),h=0;;){a.lastIndex=h
var f=a.exec(t),d=f?f.index-h:t.length-h
if(d){var p=document.createTextNode(s.slice(h,h+d))
bo&&9>wo?c.appendChild(Ui("span",[p])):c.appendChild(p),e.map.push(e.pos,e.pos+d,p),e.col+=d,e.pos+=d}if(!f)break
if(h+=d+1,"	"==f[0]){var g=e.cm.options.tabSize,v=g-e.col%g,p=c.appendChild(Ui("span",Ai(v),"cm-tab"))
p.setAttribute("role","presentation"),p.setAttribute("cm-text","	"),e.col+=v}else if("\r"==f[0]||"\n"==f[0]){var p=c.appendChild(Ui("span","\r"==f[0]?"â":"â¤","cm-invalidchar"))
p.setAttribute("cm-text",f[0]),e.col+=1}else{var p=e.cm.options.specialCharPlaceholder(f[0])
p.setAttribute("cm-text",f[0]),bo&&9>wo?c.appendChild(Ui("span",[p])):c.appendChild(p),e.col+=1}e.map.push(e.pos,e.pos+1,p),e.pos++}else{e.col+=t.length
var c=document.createTextNode(s)
e.map.push(e.pos,e.pos+t.length,c),bo&&9>wo&&(u=!0),e.pos+=t.length}if(r||n||i||u||l){var m=r||""
n&&(m+=n),i&&(m+=i)
var y=Ui("span",[c],m,l)
return o&&(y.title=o),e.content.appendChild(y)}e.content.appendChild(c)}}function Gn(e){for(var t=" ",r=0;r<e.length-2;++r)t+=r%2?" ":"Â "
return t+=" "}function Un(e,t){return function(r,n,i,o,l,s,a){i=i?i+" cm-force-border":"cm-force-border"
for(var u=r.pos,c=u+n.length;;){for(var h=0;h<t.length;h++){var f=t[h]
if(f.to>u&&f.from<=u)break}if(f.to>=c)return e(r,n,i,o,l,s,a)
e(r,n.slice(0,f.to-u),i,o,null,s,a),o=null,n=n.slice(f.to-u),u=f.to}}}function Vn(e,t,r,n){var i=!n&&r.widgetNode
i&&e.map.push(e.pos,e.pos+t,i),!n&&e.cm.display.input.needsContentAttribute&&(i||(i=e.content.appendChild(document.createElement("span"))),i.setAttribute("cm-marker",r.id)),i&&(e.cm.display.input.setUneditable(i),e.content.appendChild(i)),e.pos+=t}function Kn(e,t,r){var n=e.markedSpans,i=e.text,o=0
if(n)for(var l,s,a,u,c,h,f,d=i.length,p=0,g=1,v="",m=0;;){if(m==p){a=u=c=h=s="",f=null,m=1/0
for(var y,b=[],w=0;w<n.length;++w){var x=n[w],C=x.marker
"bookmark"==C.type&&x.from==p&&C.widgetNode?b.push(C):x.from<=p&&(null==x.to||x.to>p||C.collapsed&&x.to==p&&x.from==p)?(null!=x.to&&x.to!=p&&m>x.to&&(m=x.to,u=""),C.className&&(a+=" "+C.className),C.css&&(s=(s?s+";":"")+C.css),C.startStyle&&x.from==p&&(c+=" "+C.startStyle),C.endStyle&&x.to==m&&(y||(y=[])).push(C.endStyle,x.to),C.title&&!h&&(h=C.title),C.collapsed&&(!f||dn(f.marker,C)<0)&&(f=x)):x.from>p&&m>x.from&&(m=x.from)}if(y)for(var w=0;w<y.length;w+=2)y[w+1]==m&&(u+=" "+y[w])
if(f&&(f.from||0)==p){if(Vn(t,(null==f.to?d+1:f.to)-p,f.marker,null==f.from),null==f.to)return
f.to==p&&(f=!1)}if(!f&&b.length)for(var w=0;w<b.length;++w)Vn(t,0,b[w])}if(p>=d)break
for(var S=Math.min(d,m);;){if(v){var L=p+v.length
if(!f){var T=L>S?v.slice(0,S-p):v
t.addToken(t,T,l?l+a:a,c,p+T.length==m?u:"",h,s)}if(L>=S){v=v.slice(S-p),p=S
break}p=L,c=""}v=i.slice(o,o=r[g++]),l=In(r[g++],t.cm.options)}}else for(var g=1;g<r.length;g+=2)t.addToken(t,i.slice(o,o=r[g]),In(r[g+1],t.cm.options))}function jn(e,t){return 0==t.from.ch&&0==t.to.ch&&""==Hi(t.text)&&(!e.cm||e.cm.options.wholeLineUpdateBefore)}function Xn(e,t,r,n){function i(e){return r?r[e]:null}function o(e,r,i){Mn(e,r,i,n),Li(e,"change",e,t)}function l(e,t){for(var r=e,o=[];t>r;++r)o.push(new bl(u[r],i(r),n))
return o}var s=t.from,a=t.to,u=t.text,c=Zn(e,s.line),h=Zn(e,a.line),f=Hi(u),d=i(u.length-1),p=a.line-s.line
if(t.full)e.insert(0,l(0,u.length)),e.remove(u.length,e.size-u.length)
else if(jn(e,t)){var g=l(0,u.length-1)
o(h,h.text,d),p&&e.remove(s.line,p),g.length&&e.insert(s.line,g)}else if(c==h)if(1==u.length)o(c,c.text.slice(0,s.ch)+f+c.text.slice(a.ch),d)
else{var g=l(1,u.length-1)
g.push(new bl(f+c.text.slice(a.ch),d,n)),o(c,c.text.slice(0,s.ch)+u[0],i(0)),e.insert(s.line+1,g)}else if(1==u.length)o(c,c.text.slice(0,s.ch)+u[0]+h.text.slice(a.ch),i(0)),e.remove(s.line+1,p)
else{o(c,c.text.slice(0,s.ch)+u[0],i(0)),o(h,f+h.text.slice(a.ch),d)
var g=l(1,u.length-1)
p>1&&e.remove(s.line+1,p-1),e.insert(s.line+1,g)}Li(e,"change",e,t)}function _n(e){this.lines=e,this.parent=null
for(var t=0,r=0;t<e.length;++t)e[t].parent=this,r+=e[t].height
this.height=r}function Yn(e){this.children=e
for(var t=0,r=0,n=0;n<e.length;++n){var i=e[n]
t+=i.chunkSize(),r+=i.height,i.parent=this}this.size=t,this.height=r,this.parent=null}function qn(e,t,r){function n(e,i,o){if(e.linked)for(var l=0;l<e.linked.length;++l){var s=e.linked[l]
if(s.doc!=i){var a=o&&s.sharedHist;(!r||a)&&(t(s.doc,a),n(s.doc,e,a))}}}n(e,null,!0)}function $n(e,t){if(t.cm)throw new Error("This document is already in use.")
e.doc=t,t.cm=e,l(e),r(e),e.options.lineWrapping||f(e),e.options.mode=t.modeOption,Pt(e)}function Zn(e,t){if(t-=e.first,0>t||t>=e.size)throw new Error("There is no line "+(t+e.first)+" in the document.")
for(var r=e;!r.lines;)for(var n=0;;++n){var i=r.children[n],o=i.chunkSize()
if(o>t){r=i
break}t-=o}return r.lines[t]}function Qn(e,t,r){var n=[],i=t.line
return e.iter(t.line,r.line+1,function(e){var o=e.text
i==r.line&&(o=o.slice(0,r.ch)),i==t.line&&(o=o.slice(t.ch)),n.push(o),++i}),n}function Jn(e,t,r){var n=[]
return e.iter(t,r,function(e){n.push(e.text)}),n}function ei(e,t){var r=t-e.height
if(r)for(var n=e;n;n=n.parent)n.height+=r}function ti(e){if(null==e.parent)return null
for(var t=e.parent,r=Di(t.lines,e),n=t.parent;n;t=n,n=n.parent)for(var i=0;n.children[i]!=t;++i)r+=n.children[i].chunkSize()
return r+t.first}function ri(e,t){var r=e.first
e:do{for(var n=0;n<e.children.length;++n){var i=e.children[n],o=i.height
if(o>t){e=i
continue e}t-=o,r+=i.chunkSize()}return r}while(!e.lines)
for(var n=0;n<e.lines.length;++n){var l=e.lines[n],s=l.height
if(s>t)break
t-=s}return r+n}function ni(e){e=yn(e)
for(var t=0,r=e.parent,n=0;n<r.lines.length;++n){var i=r.lines[n]
if(i==e)break
t+=i.height}for(var o=r.parent;o;r=o,o=r.parent)for(var n=0;n<o.children.length;++n){var l=o.children[n]
if(l==r)break
t+=l.height}return t}function ii(e){var t=e.order
return null==t&&(t=e.order=ls(e.text)),t}function oi(e){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=this.lastSelOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=e||1}function li(e,t){var r={from:_(t.from),to:Qo(t),text:Qn(e,t.from,t.to)}
return di(e,r,t.from.line,t.to.line+1),qn(e,function(e){di(e,r,t.from.line,t.to.line+1)},!0),r}function si(e){for(;e.length;){var t=Hi(e)
if(!t.ranges)break
e.pop()}}function ai(e,t){return t?(si(e.done),Hi(e.done)):e.done.length&&!Hi(e.done).ranges?Hi(e.done):e.done.length>1&&!e.done[e.done.length-2].ranges?(e.done.pop(),Hi(e.done)):void 0}function ui(e,t,r,n){var i=e.history
i.undone.length=0
var o,l=+new Date
if((i.lastOp==n||i.lastOrigin==t.origin&&t.origin&&("+"==t.origin.charAt(0)&&e.cm&&i.lastModTime>l-e.cm.options.historyEventDelay||"*"==t.origin.charAt(0)))&&(o=ai(i,i.lastOp==n))){var s=Hi(o.changes)
0==Fo(t.from,t.to)&&0==Fo(t.from,s.to)?s.to=Qo(t):o.changes.push(li(e,t))}else{var a=Hi(i.done)
for(a&&a.ranges||fi(e.sel,i.done),o={changes:[li(e,t)],generation:i.generation},i.done.push(o);i.done.length>i.undoDepth;)i.done.shift(),i.done[0].ranges||i.done.shift()}i.done.push(r),i.generation=++i.maxGeneration,i.lastModTime=i.lastSelTime=l,i.lastOp=i.lastSelOp=n,i.lastOrigin=i.lastSelOrigin=t.origin,s||Hl(e,"historyAdded")}function ci(e,t,r,n){var i=t.charAt(0)
return"*"==i||"+"==i&&r.ranges.length==n.ranges.length&&r.somethingSelected()==n.somethingSelected()&&new Date-e.history.lastSelTime<=(e.cm?e.cm.options.historyEventDelay:500)}function hi(e,t,r,n){var i=e.history,o=n&&n.origin
r==i.lastSelOp||o&&i.lastSelOrigin==o&&(i.lastModTime==i.lastSelTime&&i.lastOrigin==o||ci(e,o,Hi(i.done),t))?i.done[i.done.length-1]=t:fi(t,i.done),i.lastSelTime=+new Date,i.lastSelOrigin=o,i.lastSelOp=r,n&&n.clearRedo!==!1&&si(i.undone)}function fi(e,t){var r=Hi(t)
r&&r.ranges&&r.equals(e)||t.push(e)}function di(e,t,r,n){var i=t["spans_"+e.id],o=0
e.iter(Math.max(e.first,r),Math.min(e.first+e.size,n),function(r){r.markedSpans&&((i||(i=t["spans_"+e.id]={}))[o]=r.markedSpans),++o})}function pi(e){if(!e)return null
for(var t,r=0;r<e.length;++r)e[r].marker.explicitlyCleared?t||(t=e.slice(0,r)):t&&t.push(e[r])
return t?t.length?t:null:e}function gi(e,t){var r=t["spans_"+e.id]
if(!r)return null
for(var n=0,i=[];n<t.text.length;++n)i.push(pi(r[n]))
return i}function vi(e,t,r){for(var n=0,i=[];n<e.length;++n){var o=e[n]
if(o.ranges)i.push(r?ce.prototype.deepCopy.call(o):o)
else{var l=o.changes,s=[]
i.push({changes:s})
for(var a=0;a<l.length;++a){var u,c=l[a]
if(s.push({from:c.from,to:c.to,text:c.text}),t)for(var h in c)(u=h.match(/^spans_(\d+)$/))&&Di(t,Number(u[1]))>-1&&(Hi(s)[h]=c[h],delete c[h])}}}return i}function mi(e,t,r,n){r<e.line?e.line+=n:t<e.line&&(e.line=t,e.ch=0)}function yi(e,t,r,n){for(var i=0;i<e.length;++i){var o=e[i],l=!0
if(o.ranges){o.copied||(o=e[i]=o.deepCopy(),o.copied=!0)
for(var s=0;s<o.ranges.length;s++)mi(o.ranges[s].anchor,t,r,n),mi(o.ranges[s].head,t,r,n)}else{for(var s=0;s<o.changes.length;++s){var a=o.changes[s]
if(r<a.from.line)a.from=Io(a.from.line+n,a.from.ch),a.to=Io(a.to.line+n,a.to.ch)
else if(t<=a.to.line){l=!1
break}}l||(e.splice(0,i+1),i=0)}}}function bi(e,t){var r=t.from.line,n=t.to.line,i=t.text.length-(n-r)-1
yi(e.done,r,n,i),yi(e.undone,r,n,i)}function wi(e){return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue}function xi(e){return e.target||e.srcElement}function Ci(e){var t=e.which
return null==t&&(1&e.button?t=1:2&e.button?t=3:4&e.button&&(t=2)),Wo&&e.ctrlKey&&1==t&&(t=3),t}function Si(e,t,r){var n=e._handlers&&e._handlers[t]
return r?n&&n.length>0?n.slice():Wl:n||Wl}function Li(e,t){function r(e){return function(){e.apply(null,o)}}var n=Si(e,t,!1)
if(n.length){var i,o=Array.prototype.slice.call(arguments,2)
Ko?i=Ko.delayedCallbacks:Dl?i=Dl:(i=Dl=[],setTimeout(Ti,0))
for(var l=0;l<n.length;++l)i.push(r(n[l]))}}function Ti(){var e=Dl
Dl=null
for(var t=0;t<e.length;++t)e[t]()}function ki(e,t,r){return"string"==typeof t&&(t={type:t,preventDefault:function(){this.defaultPrevented=!0}}),Hl(e,r||t.type,e,t),wi(t)||t.codemirrorIgnore}function Mi(e){var t=e._handlers&&e._handlers.cursorActivity
if(t)for(var r=e.curOp.cursorActivityHandlers||(e.curOp.cursorActivityHandlers=[]),n=0;n<t.length;++n)-1==Di(r,t[n])&&r.push(t[n])}function Ni(e,t){return Si(e,t).length>0}function Oi(e){e.prototype.on=function(e,t){Ol(this,e,t)},e.prototype.off=function(e,t){Al(this,e,t)}}function Wi(){this.id=null}function Ai(e){for(;Gl.length<=e;)Gl.push(Hi(Gl)+" ")
return Gl[e]}function Hi(e){return e[e.length-1]}function Di(e,t){for(var r=0;r<e.length;++r)if(e[r]==t)return r
return-1}function Ei(e,t){for(var r=[],n=0;n<e.length;n++)r[n]=t(e[n],n)
return r}function Pi(){}function zi(e,t){var r
return Object.create?r=Object.create(e):(Pi.prototype=e,r=new Pi),t&&Ii(t,r),r}function Ii(e,t,r){t||(t={})
for(var n in e)!e.hasOwnProperty(n)||r===!1&&t.hasOwnProperty(n)||(t[n]=e[n])
return t}function Fi(e){var t=Array.prototype.slice.call(arguments,1)
return function(){return e.apply(null,t)}}function Ri(e,t){return t?t.source.indexOf("\\w")>-1&&jl(e)?!0:t.test(e):jl(e)}function Bi(e){for(var t in e)if(e.hasOwnProperty(t)&&e[t])return!1
return!0}function Gi(e){return e.charCodeAt(0)>=768&&Xl.test(e)}function Ui(e,t,r,n){var i=document.createElement(e)
if(r&&(i.className=r),n&&(i.style.cssText=n),"string"==typeof t)i.appendChild(document.createTextNode(t))
else if(t)for(var o=0;o<t.length;++o)i.appendChild(t[o])
return i}function Vi(e){for(var t=e.childNodes.length;t>0;--t)e.removeChild(e.firstChild)
return e}function Ki(e,t){return Vi(e).appendChild(t)}function ji(){for(var e=document.activeElement;e&&e.root&&e.root.activeElement;)e=e.root.activeElement
return e}function Xi(e){return new RegExp("(^|\\s)"+e+"(?:$|\\s)\\s*")}function _i(e,t){for(var r=e.split(" "),n=0;n<r.length;n++)r[n]&&!Xi(r[n]).test(t)&&(t+=" "+r[n])
return t}function Yi(e){if(document.body.getElementsByClassName)for(var t=document.body.getElementsByClassName("CodeMirror"),r=0;r<t.length;r++){var n=t[r].CodeMirror
n&&e(n)}}function qi(){Ql||($i(),Ql=!0)}function $i(){var e
Ol(window,"resize",function(){null==e&&(e=setTimeout(function(){e=null,Yi(Kt)},100))}),Ol(window,"blur",function(){Yi(mr)})}function Zi(e){if(null==Yl){var t=Ui("span","â€‹")
Ki(e,Ui("span",[t,document.createTextNode("x")])),0!=e.firstChild.offsetHeight&&(Yl=t.offsetWidth<=1&&t.offsetHeight>2&&!(bo&&8>wo))}var r=Yl?Ui("span","â€‹"):Ui("span","Â ",null,"display: inline-block; width: 1px; margin-right: -1px")
return r.setAttribute("cm-text",""),r}function Qi(e){if(null!=ql)return ql
var t=Ki(e,document.createTextNode("AØ®A")),r=Vl(t,0,1).getBoundingClientRect()
if(!r||r.left==r.right)return!1
var n=Vl(t,1,2).getBoundingClientRect()
return ql=n.right-r.right<3}function Ji(e){if(null!=ns)return ns
var t=Ki(e,Ui("span","x")),r=t.getBoundingClientRect(),n=Vl(t,0,1).getBoundingClientRect()
return ns=Math.abs(r.left-n.left)>1}function eo(e,t,r,n){if(!e)return n(t,r,"ltr")
for(var i=!1,o=0;o<e.length;++o){var l=e[o];(l.from<r&&l.to>t||t==r&&l.to==t)&&(n(Math.max(l.from,t),Math.min(l.to,r),1==l.level?"rtl":"ltr"),i=!0)}i||n(t,r,"ltr")}function to(e){return e.level%2?e.to:e.from}function ro(e){return e.level%2?e.from:e.to}function no(e){var t=ii(e)
return t?to(t[0]):0}function io(e){var t=ii(e)
return t?ro(Hi(t)):e.text.length}function oo(e,t){var r=Zn(e.doc,t),n=yn(r)
n!=r&&(t=ti(n))
var i=ii(n),o=i?i[0].level%2?io(n):no(n):0
return Io(t,o)}function lo(e,t){for(var r,n=Zn(e.doc,t);r=vn(n);)n=r.find(1,!0).line,t=null
var i=ii(n),o=i?i[0].level%2?no(n):io(n):n.text.length
return Io(null==t?ti(n):t,o)}function so(e,t){var r=oo(e,t.line),n=Zn(e.doc,r.line),i=ii(n)
if(!i||0==i[0].level){var o=Math.max(0,n.text.search(/\S/)),l=t.line==r.line&&t.ch<=o&&t.ch
return Io(r.line,l?0:o)}return r}function ao(e,t,r){var n=e[0].level
return t==n?!0:r==n?!1:r>t}function uo(e,t){os=null
for(var r,n=0;n<e.length;++n){var i=e[n]
if(i.from<t&&i.to>t)return n
if(i.from==t||i.to==t){if(null!=r)return ao(e,i.level,e[r].level)?(i.from!=i.to&&(os=r),n):(i.from!=i.to&&(os=n),r)
r=n}}return r}function co(e,t,r,n){if(!n)return t+r
do t+=r
while(t>0&&Gi(e.text.charAt(t)))
return t}function ho(e,t,r,n){var i=ii(e)
if(!i)return fo(e,t,r,n)
for(var o=uo(i,t),l=i[o],s=co(e,t,l.level%2?-r:r,n);;){if(s>l.from&&s<l.to)return s
if(s==l.from||s==l.to)return uo(i,s)==o?s:(l=i[o+=r],r>0==l.level%2?l.to:l.from)
if(l=i[o+=r],!l)return null
s=r>0==l.level%2?co(e,l.to,-1,n):co(e,l.from,1,n)}}function fo(e,t,r,n){var i=t+r
if(n)for(;i>0&&Gi(e.text.charAt(i));)i+=r
return 0>i||i>e.text.length?null:i}var po=navigator.userAgent,go=navigator.platform,vo=/gecko\/\d/i.test(po),mo=/MSIE \d/.test(po),yo=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(po),bo=mo||yo,wo=bo&&(mo?document.documentMode||6:yo[1]),xo=/WebKit\//.test(po),Co=xo&&/Qt\/\d+\.\d+/.test(po),So=/Chrome\//.test(po),Lo=/Opera\//.test(po),To=/Apple Computer/.test(navigator.vendor),ko=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(po),Mo=/PhantomJS/.test(po),No=/AppleWebKit/.test(po)&&/Mobile\/\w+/.test(po),Oo=No||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(po),Wo=No||/Mac/.test(go),Ao=/win/i.test(go),Ho=Lo&&po.match(/Version\/(\d*\.\d*)/)
Ho&&(Ho=Number(Ho[1])),Ho&&Ho>=15&&(Lo=!1,xo=!0)
var Do=Wo&&(Co||Lo&&(null==Ho||12.11>Ho)),Eo=vo||bo&&wo>=9,Po=!1,zo=!1
g.prototype=Ii({update:function(e){var t=e.scrollWidth>e.clientWidth+1,r=e.scrollHeight>e.clientHeight+1,n=e.nativeBarWidth
if(r){this.vert.style.display="block",this.vert.style.bottom=t?n+"px":"0"
var i=e.viewHeight-(t?n:0)
this.vert.firstChild.style.height=Math.max(0,e.scrollHeight-e.clientHeight+i)+"px"}else this.vert.style.display="",this.vert.firstChild.style.height="0"
if(t){this.horiz.style.display="block",this.horiz.style.right=r?n+"px":"0",this.horiz.style.left=e.barLeft+"px"
var o=e.viewWidth-e.barLeft-(r?n:0)
this.horiz.firstChild.style.width=e.scrollWidth-e.clientWidth+o+"px"}else this.horiz.style.display="",this.horiz.firstChild.style.width="0"
return!this.checkedZeroWidth&&e.clientHeight>0&&(0==n&&this.zeroWidthHack(),this.checkedZeroWidth=!0),{right:r?n:0,bottom:t?n:0}},setScrollLeft:function(e){this.horiz.scrollLeft!=e&&(this.horiz.scrollLeft=e),this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz)},setScrollTop:function(e){this.vert.scrollTop!=e&&(this.vert.scrollTop=e),this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert)},zeroWidthHack:function(){var e=Wo&&!ko?"12px":"18px"
this.horiz.style.height=this.vert.style.width=e,this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",this.disableHoriz=new Wi,this.disableVert=new Wi},enableZeroWidthBar:function(e,t){function r(){var n=e.getBoundingClientRect(),i=document.elementFromPoint(n.left+1,n.bottom-1)
i!=e?e.style.pointerEvents="none":t.set(1e3,r)}e.style.pointerEvents="auto",t.set(1e3,r)},clear:function(){var e=this.horiz.parentNode
e.removeChild(this.horiz),e.removeChild(this.vert)}},g.prototype),v.prototype=Ii({update:function(){return{bottom:0,right:0}},setScrollLeft:function(){},setScrollTop:function(){},clear:function(){}},v.prototype),e.scrollbarModel={"native":g,"null":v},T.prototype.signal=function(e,t){Ni(e,t)&&this.events.push(arguments)},T.prototype.finish=function(){for(var e=0;e<this.events.length;e++)Hl.apply(null,this.events[e])}
var Io=e.Pos=function(e,t){return this instanceof Io?(this.line=e,void(this.ch=t)):new Io(e,t)},Fo=e.cmpPos=function(e,t){return e.line-t.line||e.ch-t.ch},Ro=null
re.prototype=Ii({init:function(e){function t(e){if(n.somethingSelected())Ro=n.getSelections(),r.inaccurateSelection&&(r.prevInput="",r.inaccurateSelection=!1,o.value=Ro.join("\n"),Ul(o))
else{if(!n.options.lineWiseCopyCut)return
var t=ee(n)
Ro=t.text,"cut"==e.type?n.setSelections(t.ranges,null,zl):(r.prevInput="",o.value=t.text.join("\n"),Ul(o))}"cut"==e.type&&(n.state.cutIncoming=!0)}var r=this,n=this.cm,i=this.wrapper=ne(),o=this.textarea=i.firstChild
e.wrapper.insertBefore(i,e.wrapper.firstChild),No&&(o.style.width="0px"),Ol(o,"input",function(){bo&&wo>=9&&r.hasSelection&&(r.hasSelection=null),r.poll()}),Ol(o,"paste",function(e){ki(n,e)||Q(e,n)||(n.state.pasteIncoming=!0,r.fastPoll())}),Ol(o,"cut",t),Ol(o,"copy",t),Ol(e.scroller,"paste",function(t){jt(e,t)||ki(n,t)||(n.state.pasteIncoming=!0,r.focus())}),Ol(e.lineSpace,"selectstart",function(t){jt(e,t)||kl(t)}),Ol(o,"compositionstart",function(){var e=n.getCursor("from")
r.composing&&r.composing.range.clear(),r.composing={start:e,range:n.markText(e,n.getCursor("to"),{className:"CodeMirror-composing"})}}),Ol(o,"compositionend",function(){r.composing&&(r.poll(),r.composing.range.clear(),r.composing=null)})},prepareSelection:function(){var e=this.cm,t=e.display,r=e.doc,n=Pe(e)
if(e.options.moveInputWithCursor){var i=dt(e,r.sel.primary().head,"div"),o=t.wrapper.getBoundingClientRect(),l=t.lineDiv.getBoundingClientRect()
n.teTop=Math.max(0,Math.min(t.wrapper.clientHeight-10,i.top+l.top-o.top)),n.teLeft=Math.max(0,Math.min(t.wrapper.clientWidth-10,i.left+l.left-o.left))}return n},showSelection:function(e){var t=this.cm,r=t.display
Ki(r.cursorDiv,e.cursors),Ki(r.selectionDiv,e.selection),null!=e.teTop&&(this.wrapper.style.top=e.teTop+"px",this.wrapper.style.left=e.teLeft+"px")},reset:function(e){if(!this.contextMenuPending){var t,r,n=this.cm,i=n.doc
if(n.somethingSelected()){this.prevInput=""
var o=i.sel.primary()
t=rs&&(o.to().line-o.from().line>100||(r=n.getSelection()).length>1e3)
var l=t?"-":r||n.getSelection()
this.textarea.value=l,n.state.focused&&Ul(this.textarea),bo&&wo>=9&&(this.hasSelection=l)}else e||(this.prevInput=this.textarea.value="",bo&&wo>=9&&(this.hasSelection=null))
this.inaccurateSelection=t}},getField:function(){return this.textarea},supportsTouch:function(){return!1},focus:function(){if("nocursor"!=this.cm.options.readOnly&&(!Oo||ji()!=this.textarea))try{this.textarea.focus()}catch(e){}},blur:function(){this.textarea.blur()},resetPosition:function(){this.wrapper.style.top=this.wrapper.style.left=0},receivedFocus:function(){this.slowPoll()},slowPoll:function(){var e=this
e.pollingFast||e.polling.set(this.cm.options.pollInterval,function(){e.poll(),e.cm.state.focused&&e.slowPoll()})},fastPoll:function(){function e(){var n=r.poll()
n||t?(r.pollingFast=!1,r.slowPoll()):(t=!0,r.polling.set(60,e))}var t=!1,r=this
r.pollingFast=!0,r.polling.set(20,e)},poll:function(){var e=this.cm,t=this.textarea,r=this.prevInput
if(this.contextMenuPending||!e.state.focused||ts(t)&&!r&&!this.composing||e.isReadOnly()||e.options.disableInput||e.state.keySeq)return!1
var n=t.value
if(n==r&&!e.somethingSelected())return!1
if(bo&&wo>=9&&this.hasSelection===n||Wo&&/[\uf700-\uf7ff]/.test(n))return e.display.input.reset(),!1
if(e.doc.sel==e.display.selForContextMenu){var i=n.charCodeAt(0)
if(8203!=i||r||(r="â€‹"),8666==i)return this.reset(),this.cm.execCommand("undo")}for(var o=0,l=Math.min(r.length,n.length);l>o&&r.charCodeAt(o)==n.charCodeAt(o);)++o
var s=this
return Ot(e,function(){Z(e,n.slice(o),r.length-o,null,s.composing?"*compose":null),n.length>1e3||n.indexOf("\n")>-1?t.value=s.prevInput="":s.prevInput=n,s.composing&&(s.composing.range.clear(),s.composing.range=e.markText(s.composing.start,e.getCursor("to"),{className:"CodeMirror-composing"}))}),!0},ensurePolled:function(){this.pollingFast&&this.poll()&&(this.pollingFast=!1)},onKeyPress:function(){bo&&wo>=9&&(this.hasSelection=null),this.fastPoll()},onContextMenu:function(e){function t(){if(null!=l.selectionStart){var e=i.somethingSelected(),t="â€‹"+(e?l.value:"")
l.value="â‡š",l.value=t,n.prevInput=e?"":"â€‹",l.selectionStart=1,l.selectionEnd=t.length,o.selForContextMenu=i.doc.sel}}function r(){if(n.contextMenuPending=!1,n.wrapper.style.position="relative",l.style.cssText=c,bo&&9>wo&&o.scrollbars.setScrollTop(o.scroller.scrollTop=a),null!=l.selectionStart){(!bo||bo&&9>wo)&&t()
var e=0,r=function(){o.selForContextMenu==i.doc.sel&&0==l.selectionStart&&l.selectionEnd>0&&"â€‹"==n.prevInput?Wt(i,ul.selectAll)(i):e++<10?o.detectingSelectAll=setTimeout(r,500):o.input.reset()}
o.detectingSelectAll=setTimeout(r,200)}}var n=this,i=n.cm,o=i.display,l=n.textarea,s=Xt(i,e),a=o.scroller.scrollTop
if(s&&!Lo){var u=i.options.resetSelectionOnContextMenu
u&&-1==i.doc.sel.contains(s)&&Wt(i,ke)(i.doc,de(s),zl)
var c=l.style.cssText
if(n.wrapper.style.position="absolute",l.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(e.clientY-5)+"px; left: "+(e.clientX-5)+"px; z-index: 1000; background: "+(bo?"rgba(255, 255, 255, .05)":"transparent")+"; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",xo)var h=window.scrollY
if(o.input.focus(),xo&&window.scrollTo(null,h),o.input.reset(),i.somethingSelected()||(l.value=n.prevInput=" "),n.contextMenuPending=!0,o.selForContextMenu=i.doc.sel,clearTimeout(o.detectingSelectAll),bo&&wo>=9&&t(),Eo){Nl(e)
var f=function(){Al(window,"mouseup",f),setTimeout(r,20)}
Ol(window,"mouseup",f)}else setTimeout(r,50)}},readOnlyChanged:function(e){e||this.reset()},setUneditable:Pi,needsContentAttribute:!1},re.prototype),ie.prototype=Ii({init:function(e){function t(e){if(n.somethingSelected())Ro=n.getSelections(),"cut"==e.type&&n.replaceSelection("",null,"cut")
else{if(!n.options.lineWiseCopyCut)return
var t=ee(n)
Ro=t.text,"cut"==e.type&&n.operation(function(){n.setSelections(t.ranges,0,zl),n.replaceSelection("",null,"cut")})}if(e.clipboardData&&!No)e.preventDefault(),e.clipboardData.clearData(),e.clipboardData.setData("text/plain",Ro.join("\n"))
else{var r=ne(),i=r.firstChild
n.display.lineSpace.insertBefore(r,n.display.lineSpace.firstChild),i.value=Ro.join("\n")
var o=document.activeElement
Ul(i),setTimeout(function(){n.display.lineSpace.removeChild(r),o.focus()},50)}}var r=this,n=r.cm,i=r.div=e.lineDiv
te(i),Ol(i,"paste",function(e){ki(n,e)||Q(e,n)}),Ol(i,"compositionstart",function(e){var t=e.data
if(r.composing={sel:n.doc.sel,data:t,startData:t},t){var i=n.doc.sel.primary(),o=n.getLine(i.head.line),l=o.indexOf(t,Math.max(0,i.head.ch-t.length))
l>-1&&l<=i.head.ch&&(r.composing.sel=de(Io(i.head.line,l),Io(i.head.line,l+t.length)))}}),Ol(i,"compositionupdate",function(e){r.composing.data=e.data}),Ol(i,"compositionend",function(e){var t=r.composing
t&&(e.data==t.startData||/\u200b/.test(e.data)||(t.data=e.data),setTimeout(function(){t.handled||r.applyComposition(t),r.composing==t&&(r.composing=null)},50))}),Ol(i,"touchstart",function(){r.forceCompositionEnd()}),Ol(i,"input",function(){r.composing||(n.isReadOnly()||!r.pollContent())&&Ot(r.cm,function(){Pt(n)})}),Ol(i,"copy",t),Ol(i,"cut",t)},prepareSelection:function(){var e=Pe(this.cm,!1)
return e.focus=this.cm.state.focused,e},showSelection:function(e){e&&this.cm.display.view.length&&(e.focus&&this.showPrimarySelection(),this.showMultipleSelections(e))},showPrimarySelection:function(){var e=window.getSelection(),t=this.cm.doc.sel.primary(),r=se(this.cm,e.anchorNode,e.anchorOffset),n=se(this.cm,e.focusNode,e.focusOffset)
if(!r||r.bad||!n||n.bad||0!=Fo(q(r,n),t.from())||0!=Fo(Y(r,n),t.to())){var i=oe(this.cm,t.from()),o=oe(this.cm,t.to())
if(i||o){var l=this.cm.display.view,s=e.rangeCount&&e.getRangeAt(0)
if(i){if(!o){var a=l[l.length-1].measure,u=a.maps?a.maps[a.maps.length-1]:a.map
o={node:u[u.length-1],offset:u[u.length-2]-u[u.length-3]}}}else i={node:l[0].measure.map[2],offset:0}
try{var c=Vl(i.node,i.offset,o.offset,o.node)}catch(h){}c&&(!vo&&this.cm.state.focused?(e.collapse(i.node,i.offset),c.collapsed||e.addRange(c)):(e.removeAllRanges(),e.addRange(c)),s&&null==e.anchorNode?e.addRange(s):vo&&this.startGracePeriod()),this.rememberSelection()}}},startGracePeriod:function(){var e=this
clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){e.gracePeriod=!1,e.selectionChanged()&&e.cm.operation(function(){e.cm.curOp.selectionChanged=!0})},20)},showMultipleSelections:function(e){Ki(this.cm.display.cursorDiv,e.cursors),Ki(this.cm.display.selectionDiv,e.selection)},rememberSelection:function(){var e=window.getSelection()
this.lastAnchorNode=e.anchorNode,this.lastAnchorOffset=e.anchorOffset,this.lastFocusNode=e.focusNode,this.lastFocusOffset=e.focusOffset},selectionInEditor:function(){var e=window.getSelection()
if(!e.rangeCount)return!1
var t=e.getRangeAt(0).commonAncestorContainer
return _l(this.div,t)},focus:function(){"nocursor"!=this.cm.options.readOnly&&this.div.focus()},blur:function(){this.div.blur()},getField:function(){return this.div},supportsTouch:function(){return!0},receivedFocus:function(){function e(){t.cm.state.focused&&(t.pollSelection(),t.polling.set(t.cm.options.pollInterval,e))}var t=this
this.selectionInEditor()?this.pollSelection():Ot(this.cm,function(){t.cm.curOp.selectionChanged=!0}),this.polling.set(this.cm.options.pollInterval,e)},selectionChanged:function(){var e=window.getSelection()
return e.anchorNode!=this.lastAnchorNode||e.anchorOffset!=this.lastAnchorOffset||e.focusNode!=this.lastFocusNode||e.focusOffset!=this.lastFocusOffset},pollSelection:function(){if(!this.composing&&!this.gracePeriod&&this.selectionChanged()){var e=window.getSelection(),t=this.cm
this.rememberSelection()
var r=se(t,e.anchorNode,e.anchorOffset),n=se(t,e.focusNode,e.focusOffset)
r&&n&&Ot(t,function(){ke(t.doc,de(r,n),zl),(r.bad||n.bad)&&(t.curOp.selectionChanged=!0)})}},pollContent:function(){var e=this.cm,t=e.display,r=e.doc.sel.primary(),n=r.from(),i=r.to()
if(n.line<t.viewFrom||i.line>t.viewTo-1)return!1
var o
if(n.line==t.viewFrom||0==(o=Ft(e,n.line)))var l=ti(t.view[0].line),s=t.view[0].node
else var l=ti(t.view[o].line),s=t.view[o-1].node.nextSibling
var a=Ft(e,i.line)
if(a==t.view.length-1)var u=t.viewTo-1,c=t.lineDiv.lastChild
else var u=ti(t.view[a+1].line)-1,c=t.view[a+1].node.previousSibling
for(var h=e.doc.splitLines(ue(e,s,c,l,u)),f=Qn(e.doc,Io(l,0),Io(u,Zn(e.doc,u).text.length));h.length>1&&f.length>1;)if(Hi(h)==Hi(f))h.pop(),f.pop(),u--
else{if(h[0]!=f[0])break
h.shift(),f.shift(),l++}for(var d=0,p=0,g=h[0],v=f[0],m=Math.min(g.length,v.length);m>d&&g.charCodeAt(d)==v.charCodeAt(d);)++d
for(var y=Hi(h),b=Hi(f),w=Math.min(y.length-(1==h.length?d:0),b.length-(1==f.length?d:0));w>p&&y.charCodeAt(y.length-p-1)==b.charCodeAt(b.length-p-1);)++p
h[h.length-1]=y.slice(0,y.length-p),h[0]=h[0].slice(d)
var x=Io(l,d),C=Io(u,f.length?Hi(f).length-p:0)
return h.length>1||h[0]||Fo(x,C)?(Ar(e.doc,h,x,C,"+input"),!0):void 0},ensurePolled:function(){this.forceCompositionEnd()},reset:function(){this.forceCompositionEnd()},forceCompositionEnd:function(){this.composing&&!this.composing.handled&&(this.applyComposition(this.composing),this.composing.handled=!0,this.div.blur(),this.div.focus())},applyComposition:function(e){this.cm.isReadOnly()?Wt(this.cm,Pt)(this.cm):e.data&&e.data!=e.startData&&Wt(this.cm,Z)(this.cm,e.data,0,e.sel)},setUneditable:function(e){e.contentEditable="false"},onKeyPress:function(e){e.preventDefault(),this.cm.isReadOnly()||Wt(this.cm,Z)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0)},readOnlyChanged:function(e){this.div.contentEditable=String("nocursor"!=e)},onContextMenu:Pi,resetPosition:Pi,needsContentAttribute:!0},ie.prototype),e.inputStyles={textarea:re,contenteditable:ie},ce.prototype={primary:function(){return this.ranges[this.primIndex]},equals:function(e){if(e==this)return!0
if(e.primIndex!=this.primIndex||e.ranges.length!=this.ranges.length)return!1
for(var t=0;t<this.ranges.length;t++){var r=this.ranges[t],n=e.ranges[t]
if(0!=Fo(r.anchor,n.anchor)||0!=Fo(r.head,n.head))return!1}return!0},deepCopy:function(){for(var e=[],t=0;t<this.ranges.length;t++)e[t]=new he(_(this.ranges[t].anchor),_(this.ranges[t].head))
return new ce(e,this.primIndex)},somethingSelected:function(){for(var e=0;e<this.ranges.length;e++)if(!this.ranges[e].empty())return!0
return!1},contains:function(e,t){t||(t=e)
for(var r=0;r<this.ranges.length;r++){var n=this.ranges[r]
if(Fo(t,n.from())>=0&&Fo(e,n.to())<=0)return r}return-1}},he.prototype={from:function(){return q(this.anchor,this.head)},to:function(){return Y(this.anchor,this.head)},empty:function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch}}
var Bo,Go,Uo,Vo={left:0,right:0,top:0,bottom:0},Ko=null,jo=0,Xo=0,_o=0,Yo=null
bo?Yo=-.53:vo?Yo=15:So?Yo=-.7:To&&(Yo=-1/3)
var qo=function(e){var t=e.wheelDeltaX,r=e.wheelDeltaY
return null==t&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(t=e.detail),null==r&&e.detail&&e.axis==e.VERTICAL_AXIS?r=e.detail:null==r&&(r=e.wheelDelta),{x:t,y:r}}
e.wheelEventPixels=function(e){var t=qo(e)
return t.x*=Yo,t.y*=Yo,t}
var $o=new Wi,Zo=null,Qo=e.changeEnd=function(e){return e.text?Io(e.from.line+e.text.length-1,Hi(e.text).length+(1==e.text.length?e.from.ch:0)):e.to}
e.prototype={constructor:e,focus:function(){window.focus(),this.display.input.focus()},setOption:function(e,t){var r=this.options,n=r[e];(r[e]!=t||"mode"==e)&&(r[e]=t,el.hasOwnProperty(e)&&Wt(this,el[e])(this,t,n))},getOption:function(e){return this.options[e]},getDoc:function(){return this.doc},addKeyMap:function(e,t){this.state.keyMaps[t?"push":"unshift"](Xr(e))},removeKeyMap:function(e){for(var t=this.state.keyMaps,r=0;r<t.length;++r)if(t[r]==e||t[r].name==e)return t.splice(r,1),!0},addOverlay:At(function(t,r){var n=t.token?t:e.getMode(this.options,t)
if(n.startState)throw new Error("Overlays may not be stateful.")
this.state.overlays.push({mode:n,modeSpec:t,opaque:r&&r.opaque}),this.state.modeGen++,Pt(this)}),removeOverlay:At(function(e){for(var t=this.state.overlays,r=0;r<t.length;++r){var n=t[r].modeSpec
if(n==e||"string"==typeof e&&n.name==e)return t.splice(r,1),this.state.modeGen++,void Pt(this)}}),indentLine:At(function(e,t,r){"string"!=typeof t&&"number"!=typeof t&&(t=null==t?this.options.smartIndent?"smart":"prev":t?"add":"subtract"),me(this.doc,e)&&Rr(this,e,t,r)}),indentSelection:At(function(e){for(var t=this.doc.sel.ranges,r=-1,n=0;n<t.length;n++){var i=t[n]
if(i.empty())i.head.line>r&&(Rr(this,i.head.line,e,!0),r=i.head.line,n==this.doc.sel.primIndex&&Ir(this))
else{var o=i.from(),l=i.to(),s=Math.max(r,o.line)
r=Math.min(this.lastLine(),l.line-(l.ch?0:1))+1
for(var a=s;r>a;++a)Rr(this,a,e)
var u=this.doc.sel.ranges
0==o.ch&&t.length==u.length&&u[n].from().ch>0&&Ce(this.doc,n,new he(o,u[n].to()),zl)}}}),getTokenAt:function(e,t){return Hn(this,e,t)},getLineTokens:function(e,t){return Hn(this,Io(e),t,!0)},getTokenTypeAt:function(e){e=ge(this.doc,e)
var t,r=Pn(this,Zn(this.doc,e.line)),n=0,i=(r.length-1)/2,o=e.ch
if(0==o)t=r[2]
else for(;;){var l=n+i>>1
if((l?r[2*l-1]:0)>=o)i=l
else{if(!(r[2*l+1]<o)){t=r[2*l+2]
break}n=l+1}}var s=t?t.indexOf("cm-overlay "):-1
return 0>s?t:0==s?null:t.slice(0,s-1)},getModeAt:function(t){var r=this.doc.mode
return r.innerMode?e.innerMode(r,this.getTokenAt(t).state).mode:r},getHelper:function(e,t){return this.getHelpers(e,t)[0]},getHelpers:function(e,t){var r=[]
if(!ll.hasOwnProperty(t))return r
var n=ll[t],i=this.getModeAt(e)
if("string"==typeof i[t])n[i[t]]&&r.push(n[i[t]])
else if(i[t])for(var o=0;o<i[t].length;o++){var l=n[i[t][o]]
l&&r.push(l)}else i.helperType&&n[i.helperType]?r.push(n[i.helperType]):n[i.name]&&r.push(n[i.name])
for(var o=0;o<n._global.length;o++){var s=n._global[o]
s.pred(i,this)&&-1==Di(r,s.val)&&r.push(s.val)}return r},getStateAfter:function(e,t){var r=this.doc
return e=pe(r,null==e?r.first+r.size-1:e),Ue(this,e+1,t)},cursorCoords:function(e,t){var r,n=this.doc.sel.primary()
return r=null==e?n.head:"object"==typeof e?ge(this.doc,e):e?n.from():n.to(),dt(this,r,t||"page")},charCoords:function(e,t){return ft(this,ge(this.doc,e),t||"page")},coordsChar:function(e,t){return e=ht(this,e,t||"page"),vt(this,e.left,e.top)},lineAtHeight:function(e,t){return e=ht(this,{top:e,left:0},t||"page").top,ri(this.doc,e+this.display.viewOffset)},heightAtLine:function(e,t){var r,n=!1
if("number"==typeof e){var i=this.doc.first+this.doc.size-1
e<this.doc.first?e=this.doc.first:e>i&&(e=i,n=!0),r=Zn(this.doc,e)}else r=e
return ct(this,r,{top:0,left:0},t||"page").top+(n?this.doc.height-ni(r):0)},defaultTextHeight:function(){return yt(this.display)},defaultCharWidth:function(){return bt(this.display)},setGutterMarker:At(function(e,t,r){return Br(this.doc,e,"gutter",function(e){var n=e.gutterMarkers||(e.gutterMarkers={})
return n[t]=r,!r&&Bi(n)&&(e.gutterMarkers=null),!0})}),clearGutter:At(function(e){var t=this,r=t.doc,n=r.first
r.iter(function(r){r.gutterMarkers&&r.gutterMarkers[e]&&(r.gutterMarkers[e]=null,zt(t,n,"gutter"),Bi(r.gutterMarkers)&&(r.gutterMarkers=null)),++n})}),lineInfo:function(e){if("number"==typeof e){if(!me(this.doc,e))return null
var t=e
if(e=Zn(this.doc,e),!e)return null}else{var t=ti(e)
if(null==t)return null}return{line:t,handle:e,text:e.text,gutterMarkers:e.gutterMarkers,textClass:e.textClass,bgClass:e.bgClass,wrapClass:e.wrapClass,widgets:e.widgets}},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(e,t,r,n,i){var o=this.display
e=dt(this,ge(this.doc,e))
var l=e.bottom,s=e.left
if(t.style.position="absolute",t.setAttribute("cm-ignore-events","true"),this.display.input.setUneditable(t),o.sizer.appendChild(t),"over"==n)l=e.top
else if("above"==n||"near"==n){var a=Math.max(o.wrapper.clientHeight,this.doc.height),u=Math.max(o.sizer.clientWidth,o.lineSpace.clientWidth);("above"==n||e.bottom+t.offsetHeight>a)&&e.top>t.offsetHeight?l=e.top-t.offsetHeight:e.bottom+t.offsetHeight<=a&&(l=e.bottom),s+t.offsetWidth>u&&(s=u-t.offsetWidth)}t.style.top=l+"px",t.style.left=t.style.right="","right"==i?(s=o.sizer.clientWidth-t.offsetWidth,t.style.right="0px"):("left"==i?s=0:"middle"==i&&(s=(o.sizer.clientWidth-t.offsetWidth)/2),t.style.left=s+"px"),r&&Er(this,s,l,s+t.offsetWidth,l+t.offsetHeight)},triggerOnKeyDown:At(hr),triggerOnKeyPress:At(pr),triggerOnKeyUp:dr,execCommand:function(e){return ul.hasOwnProperty(e)?ul[e].call(null,this):void 0},triggerElectric:At(function(e){J(this,e)}),findPosH:function(e,t,r,n){var i=1
0>t&&(i=-1,t=-t)
for(var o=0,l=ge(this.doc,e);t>o&&(l=Ur(this.doc,l,i,r,n),!l.hitSide);++o);return l},moveH:At(function(e,t){var r=this
r.extendSelectionsBy(function(n){return r.display.shift||r.doc.extend||n.empty()?Ur(r.doc,n.head,e,t,r.options.rtlMoveVisually):0>e?n.from():n.to()},Fl)}),deleteH:At(function(e,t){var r=this.doc.sel,n=this.doc
r.somethingSelected()?n.replaceSelection("",null,"+delete"):Gr(this,function(r){var i=Ur(n,r.head,e,t,!1)
return 0>e?{from:i,to:r.head}:{from:r.head,to:i}})}),findPosV:function(e,t,r,n){var i=1,o=n
0>t&&(i=-1,t=-t)
for(var l=0,s=ge(this.doc,e);t>l;++l){var a=dt(this,s,"div")
if(null==o?o=a.left:a.left=o,s=Vr(this,a,i,r),s.hitSide)break}return s},moveV:At(function(e,t){var r=this,n=this.doc,i=[],o=!r.display.shift&&!n.extend&&n.sel.somethingSelected()
if(n.extendSelectionsBy(function(l){if(o)return 0>e?l.from():l.to()
var s=dt(r,l.head,"div")
null!=l.goalColumn&&(s.left=l.goalColumn),i.push(s.left)
var a=Vr(r,s,e,t)
return"page"==t&&l==n.sel.primary()&&zr(r,null,ft(r,a,"div").top-s.top),a},Fl),i.length)for(var l=0;l<n.sel.ranges.length;l++)n.sel.ranges[l].goalColumn=i[l]}),findWordAt:function(e){var t=this.doc,r=Zn(t,e.line).text,n=e.ch,i=e.ch
if(r){var o=this.getHelper(e,"wordChars");(e.xRel<0||i==r.length)&&n?--n:++i
for(var l=r.charAt(n),s=Ri(l,o)?function(e){return Ri(e,o)}:/\s/.test(l)?function(e){return/\s/.test(e)}:function(e){return!/\s/.test(e)&&!Ri(e)};n>0&&s(r.charAt(n-1));)--n
for(;i<r.length&&s(r.charAt(i));)++i}return new he(Io(e.line,n),Io(e.line,i))},toggleOverwrite:function(e){(null==e||e!=this.state.overwrite)&&((this.state.overwrite=!this.state.overwrite)?Zl(this.display.cursorDiv,"CodeMirror-overwrite"):$l(this.display.cursorDiv,"CodeMirror-overwrite"),Hl(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return this.display.input.getField()==ji()},isReadOnly:function(){return!(!this.options.readOnly&&!this.doc.cantEdit)},scrollTo:At(function(e,t){(null!=e||null!=t)&&Fr(this),null!=e&&(this.curOp.scrollLeft=e),null!=t&&(this.curOp.scrollTop=t)}),getScrollInfo:function(){var e=this.display.scroller
return{left:e.scrollLeft,top:e.scrollTop,height:e.scrollHeight-Xe(this)-this.display.barHeight,width:e.scrollWidth-Xe(this)-this.display.barWidth,clientHeight:Ye(this),clientWidth:_e(this)}},scrollIntoView:At(function(e,t){if(null==e?(e={from:this.doc.sel.primary().head,to:null},null==t&&(t=this.options.cursorScrollMargin)):"number"==typeof e?e={from:Io(e,0),to:null}:null==e.from&&(e={from:e,to:null}),e.to||(e.to=e.from),e.margin=t||0,null!=e.from.line)Fr(this),this.curOp.scrollToPos=e
else{var r=Pr(this,Math.min(e.from.left,e.to.left),Math.min(e.from.top,e.to.top)-e.margin,Math.max(e.from.right,e.to.right),Math.max(e.from.bottom,e.to.bottom)+e.margin)
this.scrollTo(r.scrollLeft,r.scrollTop)}}),setSize:At(function(e,t){function r(e){return"number"==typeof e||/^\d+$/.test(String(e))?e+"px":e}var n=this
null!=e&&(n.display.wrapper.style.width=r(e)),null!=t&&(n.display.wrapper.style.height=r(t)),n.options.lineWrapping&&lt(this)
var i=n.display.viewFrom
n.doc.iter(i,n.display.viewTo,function(e){if(e.widgets)for(var t=0;t<e.widgets.length;t++)if(e.widgets[t].noHScroll){zt(n,i,"widget")
break}++i}),n.curOp.forceUpdate=!0,Hl(n,"refresh",this)}),operation:function(e){return Ot(this,e)},refresh:At(function(){var e=this.display.cachedTextHeight
Pt(this),this.curOp.forceUpdate=!0,st(this),this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop),c(this),(null==e||Math.abs(e-yt(this.display))>.5)&&l(this),Hl(this,"refresh",this)}),swapDoc:At(function(e){var t=this.doc
return t.cm=null,$n(this,e),st(this),this.display.input.reset(),this.scrollTo(e.scrollLeft,e.scrollTop),this.curOp.forceScroll=!0,Li(this,"swapDoc",this,t),t}),getInputField:function(){return this.display.input.getField()},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},Oi(e)
var Jo=e.defaults={},el=e.optionHandlers={},tl=e.Init={toString:function(){return"CodeMirror.Init"}}
Kr("value","",function(e,t){e.setValue(t)},!0),Kr("mode",null,function(e,t){e.doc.modeOption=t,r(e)},!0),Kr("indentUnit",2,r,!0),Kr("indentWithTabs",!1),Kr("smartIndent",!0),Kr("tabSize",4,function(e){n(e),st(e),Pt(e)},!0),Kr("lineSeparator",null,function(e,t){if(e.doc.lineSep=t,t){var r=[],n=e.doc.first
e.doc.iter(function(e){for(var i=0;;){var o=e.text.indexOf(t,i)
if(-1==o)break
i=o+t.length,r.push(Io(n,o))}n++})
for(var i=r.length-1;i>=0;i--)Ar(e.doc,t,r[i],Io(r[i].line,r[i].ch+t.length))}}),Kr("specialChars",/[\t\u0000-\u0019\u00ad\u200b-\u200f\u2028\u2029\ufeff]/g,function(t,r,n){t.state.specialChars=new RegExp(r.source+(r.test("	")?"":"|	"),"g"),n!=e.Init&&t.refresh()}),Kr("specialCharPlaceholder",Rn,function(e){e.refresh()},!0),Kr("electricChars",!0),Kr("inputStyle",Oo?"contenteditable":"textarea",function(){throw new Error("inputStyle can not (yet) be changed in a running editor")},!0),Kr("rtlMoveVisually",!Ao),Kr("wholeLineUpdateBefore",!0),Kr("theme","default",function(e){s(e),a(e)},!0),Kr("keyMap","default",function(t,r,n){var i=Xr(r),o=n!=e.Init&&Xr(n)
o&&o.detach&&o.detach(t,i),i.attach&&i.attach(t,o||null)}),Kr("extraKeys",null),Kr("lineWrapping",!1,i,!0),Kr("gutters",[],function(e){d(e.options),a(e)},!0),Kr("fixedGutter",!0,function(e,t){e.display.gutters.style.left=t?L(e.display)+"px":"0",e.refresh()},!0),Kr("coverGutterNextToScrollbar",!1,function(e){y(e)},!0),Kr("scrollbarStyle","native",function(e){m(e),y(e),e.display.scrollbars.setScrollTop(e.doc.scrollTop),e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)},!0),Kr("lineNumbers",!1,function(e){d(e.options),a(e)},!0),Kr("firstLineNumber",1,a,!0),Kr("lineNumberFormatter",function(e){return e},a,!0),Kr("showCursorWhenSelecting",!1,Ee,!0),Kr("resetSelectionOnContextMenu",!0),Kr("lineWiseCopyCut",!0),Kr("readOnly",!1,function(e,t){"nocursor"==t?(mr(e),e.display.input.blur(),e.display.disabled=!0):e.display.disabled=!1,e.display.input.readOnlyChanged(t)}),Kr("disableInput",!1,function(e,t){t||e.display.input.reset()},!0),Kr("dragDrop",!0,Vt),Kr("allowDropFileTypes",null),Kr("cursorBlinkRate",530),Kr("cursorScrollMargin",0),Kr("cursorHeight",1,Ee,!0),Kr("singleCursorHeightPerLine",!0,Ee,!0),Kr("workTime",100),Kr("workDelay",100),Kr("flattenSpans",!0,n,!0),Kr("addModeClass",!1,n,!0),Kr("pollInterval",100),Kr("undoDepth",200,function(e,t){e.doc.history.undoDepth=t}),Kr("historyEventDelay",1250),Kr("viewportMargin",10,function(e){e.refresh()},!0),Kr("maxHighlightLength",1e4,n,!0),Kr("moveInputWithCursor",!0,function(e,t){t||e.display.input.resetPosition()}),Kr("tabindex",null,function(e,t){e.display.input.getField().tabIndex=t||""}),Kr("autofocus",null)
var rl=e.modes={},nl=e.mimeModes={}
e.defineMode=function(t,r){e.defaults.mode||"null"==t||(e.defaults.mode=t),arguments.length>2&&(r.dependencies=Array.prototype.slice.call(arguments,2)),rl[t]=r},e.defineMIME=function(e,t){nl[e]=t},e.resolveMode=function(t){if("string"==typeof t&&nl.hasOwnProperty(t))t=nl[t]
else if(t&&"string"==typeof t.name&&nl.hasOwnProperty(t.name)){var r=nl[t.name]
"string"==typeof r&&(r={name:r}),t=zi(r,t),t.name=r.name}else if("string"==typeof t&&/^[\w\-]+\/[\w\-]+\+xml$/.test(t))return e.resolveMode("application/xml")
return"string"==typeof t?{name:t}:t||{name:"null"}},e.getMode=function(t,r){var r=e.resolveMode(r),n=rl[r.name]
if(!n)return e.getMode(t,"text/plain")
var i=n(t,r)
if(il.hasOwnProperty(r.name)){var o=il[r.name]
for(var l in o)o.hasOwnProperty(l)&&(i.hasOwnProperty(l)&&(i["_"+l]=i[l]),i[l]=o[l])}if(i.name=r.name,r.helperType&&(i.helperType=r.helperType),r.modeProps)for(var l in r.modeProps)i[l]=r.modeProps[l]
return i},e.defineMode("null",function(){return{token:function(e){e.skipToEnd()}}}),e.defineMIME("text/plain","null")
var il=e.modeExtensions={}
e.extendMode=function(e,t){var r=il.hasOwnProperty(e)?il[e]:il[e]={}
Ii(t,r)},e.defineExtension=function(t,r){e.prototype[t]=r},e.defineDocExtension=function(e,t){Sl.prototype[e]=t},e.defineOption=Kr
var ol=[]
e.defineInitHook=function(e){ol.push(e)}
var ll=e.helpers={}
e.registerHelper=function(t,r,n){ll.hasOwnProperty(t)||(ll[t]=e[t]={_global:[]}),ll[t][r]=n},e.registerGlobalHelper=function(t,r,n,i){e.registerHelper(t,r,i),ll[t]._global.push({pred:n,val:i})}
var sl=e.copyState=function(e,t){if(t===!0)return t
if(e.copyState)return e.copyState(t)
var r={}
for(var n in t){var i=t[n]
i instanceof Array&&(i=i.concat([])),r[n]=i}return r},al=e.startState=function(e,t,r){return e.startState?e.startState(t,r):!0}
e.innerMode=function(e,t){for(;e.innerMode;){var r=e.innerMode(t)
if(!r||r.mode==e)break
t=r.state,e=r.mode}return r||{mode:e,state:t}}
var ul=e.commands={selectAll:function(e){e.setSelection(Io(e.firstLine(),0),Io(e.lastLine()),zl)},singleSelection:function(e){e.setSelection(e.getCursor("anchor"),e.getCursor("head"),zl)},killLine:function(e){Gr(e,function(t){if(t.empty()){var r=Zn(e.doc,t.head.line).text.length
return t.head.ch==r&&t.head.line<e.lastLine()?{from:t.head,to:Io(t.head.line+1,0)}:{from:t.head,to:Io(t.head.line,r)}}return{from:t.from(),to:t.to()}})},deleteLine:function(e){Gr(e,function(t){return{from:Io(t.from().line,0),to:ge(e.doc,Io(t.to().line+1,0))}})},delLineLeft:function(e){Gr(e,function(e){return{from:Io(e.from().line,0),to:e.from()}})},delWrappedLineLeft:function(e){Gr(e,function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div")
return{from:n,to:t.from()}})},delWrappedLineRight:function(e){Gr(e,function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")
return{from:t.from(),to:n}})},undo:function(e){e.undo()},redo:function(e){e.redo()},undoSelection:function(e){e.undoSelection()},redoSelection:function(e){e.redoSelection()},goDocStart:function(e){e.extendSelection(Io(e.firstLine(),0))},goDocEnd:function(e){e.extendSelection(Io(e.lastLine()))},goLineStart:function(e){e.extendSelectionsBy(function(t){return oo(e,t.head.line)},{origin:"+move",bias:1})},goLineStartSmart:function(e){e.extendSelectionsBy(function(t){return so(e,t.head)},{origin:"+move",bias:1})},goLineEnd:function(e){e.extendSelectionsBy(function(t){return lo(e,t.head.line)},{origin:"+move",bias:-1})},goLineRight:function(e){e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5
return e.coordsChar({left:e.display.lineDiv.offsetWidth+100,top:r},"div")},Fl)},goLineLeft:function(e){e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5
return e.coordsChar({left:0,top:r},"div")},Fl)},goLineLeftSmart:function(e){e.extendSelectionsBy(function(t){var r=e.charCoords(t.head,"div").top+5,n=e.coordsChar({left:0,top:r},"div")
return n.ch<e.getLine(n.line).search(/\S/)?so(e,t.head):n},Fl)},goLineUp:function(e){e.moveV(-1,"line")},goLineDown:function(e){e.moveV(1,"line")},goPageUp:function(e){e.moveV(-1,"page")},goPageDown:function(e){e.moveV(1,"page")},goCharLeft:function(e){e.moveH(-1,"char")},goCharRight:function(e){e.moveH(1,"char")},goColumnLeft:function(e){e.moveH(-1,"column")},goColumnRight:function(e){e.moveH(1,"column")},goWordLeft:function(e){e.moveH(-1,"word")},goGroupRight:function(e){e.moveH(1,"group")},goGroupLeft:function(e){e.moveH(-1,"group")},goWordRight:function(e){e.moveH(1,"word")},delCharBefore:function(e){e.deleteH(-1,"char")},delCharAfter:function(e){e.deleteH(1,"char")},delWordBefore:function(e){e.deleteH(-1,"word")},delWordAfter:function(e){e.deleteH(1,"word")},delGroupBefore:function(e){e.deleteH(-1,"group")},delGroupAfter:function(e){e.deleteH(1,"group")},indentAuto:function(e){e.indentSelection("smart")},indentMore:function(e){e.indentSelection("add")},indentLess:function(e){e.indentSelection("subtract")},insertTab:function(e){e.replaceSelection("	")},insertSoftTab:function(e){for(var t=[],r=e.listSelections(),n=e.options.tabSize,i=0;i<r.length;i++){var o=r[i].from(),l=Rl(e.getLine(o.line),o.ch,n)
t.push(new Array(n-l%n+1).join(" "))}e.replaceSelections(t)},defaultTab:function(e){e.somethingSelected()?e.indentSelection("add"):e.execCommand("insertTab")},transposeChars:function(e){Ot(e,function(){for(var t=e.listSelections(),r=[],n=0;n<t.length;n++){var i=t[n].head,o=Zn(e.doc,i.line).text
if(o)if(i.ch==o.length&&(i=new Io(i.line,i.ch-1)),i.ch>0)i=new Io(i.line,i.ch+1),e.replaceRange(o.charAt(i.ch-1)+o.charAt(i.ch-2),Io(i.line,i.ch-2),i,"+transpose")
else if(i.line>e.doc.first){var l=Zn(e.doc,i.line-1).text
l&&e.replaceRange(o.charAt(0)+e.doc.lineSeparator()+l.charAt(l.length-1),Io(i.line-1,l.length-1),Io(i.line,1),"+transpose")}r.push(new he(i,i))}e.setSelections(r)})},newlineAndIndent:function(e){Ot(e,function(){for(var t=e.listSelections().length,r=0;t>r;r++){var n=e.listSelections()[r]
e.replaceRange(e.doc.lineSeparator(),n.anchor,n.head,"+input"),e.indentLine(n.from().line+1,null,!0)}Ir(e)})},toggleOverwrite:function(e){e.toggleOverwrite()}},cl=e.keyMap={}
cl.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},cl.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp","Ctrl-Down":"goLineDown","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},cl.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars"},cl.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Home":"goDocStart","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delWrappedLineLeft","Cmd-Delete":"delWrappedLineRight","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection","Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",fallthrough:["basic","emacsy"]},cl["default"]=Wo?cl.macDefault:cl.pcDefault,e.normalizeKeyMap=function(e){var t={}
for(var r in e)if(e.hasOwnProperty(r)){var n=e[r]
if(/^(name|fallthrough|(de|at)tach)$/.test(r))continue
if("..."==n){delete e[r]
continue}for(var i=Ei(r.split(" "),jr),o=0;o<i.length;o++){var l,s
o==i.length-1?(s=i.join(" "),l=n):(s=i.slice(0,o+1).join(" "),l="...")
var a=t[s]
if(a){if(a!=l)throw new Error("Inconsistent bindings for "+s)}else t[s]=l}delete e[r]}for(var u in t)e[u]=t[u]
return e}
var hl=e.lookupKey=function(e,t,r,n){t=Xr(t)
var i=t.call?t.call(e,n):t[e]
if(i===!1)return"nothing"
if("..."===i)return"multi"
if(null!=i&&r(i))return"handled"
if(t.fallthrough){if("[object Array]"!=Object.prototype.toString.call(t.fallthrough))return hl(e,t.fallthrough,r,n)
for(var o=0;o<t.fallthrough.length;o++){var l=hl(e,t.fallthrough[o],r,n)
if(l)return l}}},fl=e.isModifierKey=function(e){var t="string"==typeof e?e:is[e.keyCode]
return"Ctrl"==t||"Alt"==t||"Shift"==t||"Mod"==t},dl=e.keyName=function(e,t){if(Lo&&34==e.keyCode&&e["char"])return!1
var r=is[e.keyCode],n=r
return null==n||e.altGraphKey?!1:(e.altKey&&"Alt"!=r&&(n="Alt-"+n),(Do?e.metaKey:e.ctrlKey)&&"Ctrl"!=r&&(n="Ctrl-"+n),(Do?e.ctrlKey:e.metaKey)&&"Cmd"!=r&&(n="Cmd-"+n),!t&&e.shiftKey&&"Shift"!=r&&(n="Shift-"+n),n)}
e.fromTextArea=function(t,r){function n(){t.value=u.getValue()}if(r=r?Ii(r):{},r.value=t.value,!r.tabindex&&t.tabIndex&&(r.tabindex=t.tabIndex),!r.placeholder&&t.placeholder&&(r.placeholder=t.placeholder),null==r.autofocus){var i=ji()
r.autofocus=i==t||null!=t.getAttribute("autofocus")&&i==document.body}if(t.form&&(Ol(t.form,"submit",n),!r.leaveSubmitMethodAlone)){var o=t.form,l=o.submit
try{var s=o.submit=function(){n(),o.submit=l,o.submit(),o.submit=s}}catch(a){}}r.finishInit=function(e){e.save=n,e.getTextArea=function(){return t},e.toTextArea=function(){e.toTextArea=isNaN,n(),t.parentNode.removeChild(e.getWrapperElement()),t.style.display="",t.form&&(Al(t.form,"submit",n),"function"==typeof t.form.submit&&(t.form.submit=l))}},t.style.display="none"
var u=e(function(e){t.parentNode.insertBefore(e,t.nextSibling)},r)
return u}
var pl=e.StringStream=function(e,t){this.pos=this.start=0,this.string=e,this.tabSize=t||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0}
pl.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==this.lineStart},peek:function(){return this.string.charAt(this.pos)||void 0},next:function(){return this.pos<this.string.length?this.string.charAt(this.pos++):void 0},eat:function(e){var t=this.string.charAt(this.pos)
if("string"==typeof e)var r=t==e
else var r=t&&(e.test?e.test(t):e(t))
return r?(++this.pos,t):void 0},eatWhile:function(e){for(var t=this.pos;this.eat(e););return this.pos>t},eatSpace:function(){for(var e=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos
return this.pos>e},skipToEnd:function(){this.pos=this.string.length},skipTo:function(e){var t=this.string.indexOf(e,this.pos)
return t>-1?(this.pos=t,!0):void 0},backUp:function(e){this.pos-=e},column:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=Rl(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?Rl(this.string,this.lineStart,this.tabSize):0)},indentation:function(){return Rl(this.string,null,this.tabSize)-(this.lineStart?Rl(this.string,this.lineStart,this.tabSize):0)},match:function(e,t,r){if("string"!=typeof e){var n=this.string.slice(this.pos).match(e)
return n&&n.index>0?null:(n&&t!==!1&&(this.pos+=n[0].length),n)}var i=function(e){return r?e.toLowerCase():e},o=this.string.substr(this.pos,e.length)
return i(o)==i(e)?(t!==!1&&(this.pos+=e.length),!0):void 0},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(e,t){this.lineStart+=e
try{return t()}finally{this.lineStart-=e}}}
var gl=0,vl=e.TextMarker=function(e,t){this.lines=[],this.type=t,this.doc=e,this.id=++gl}
Oi(vl),vl.prototype.clear=function(){if(!this.explicitlyCleared){var e=this.doc.cm,t=e&&!e.curOp
if(t&&wt(e),Ni(this,"clear")){var r=this.find()
r&&Li(this,"clear",r.from,r.to)}for(var n=null,i=null,o=0;o<this.lines.length;++o){var l=this.lines[o],s=Jr(l.markedSpans,this)
e&&!this.collapsed?zt(e,ti(l),"text"):e&&(null!=s.to&&(i=ti(l)),null!=s.from&&(n=ti(l))),l.markedSpans=en(l.markedSpans,s),null==s.from&&this.collapsed&&!Cn(this.doc,l)&&e&&ei(l,yt(e.display))}if(e&&this.collapsed&&!e.options.lineWrapping)for(var o=0;o<this.lines.length;++o){var a=yn(this.lines[o]),u=h(a)
u>e.display.maxLineLength&&(e.display.maxLine=a,e.display.maxLineLength=u,e.display.maxLineChanged=!0)}null!=n&&e&&this.collapsed&&Pt(e,n,i+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,e&&Oe(e.doc)),e&&Li(e,"markerCleared",e,this),t&&Ct(e),this.parent&&this.parent.clear()}},vl.prototype.find=function(e,t){null==e&&"bookmark"==this.type&&(e=1)
for(var r,n,i=0;i<this.lines.length;++i){var o=this.lines[i],l=Jr(o.markedSpans,this)
if(null!=l.from&&(r=Io(t?o:ti(o),l.from),-1==e))return r
if(null!=l.to&&(n=Io(t?o:ti(o),l.to),1==e))return n}return r&&{from:r,to:n}},vl.prototype.changed=function(){var e=this.find(-1,!0),t=this,r=this.doc.cm
e&&r&&Ot(r,function(){var n=e.line,i=ti(e.line),o=Je(r,i)
if(o&&(ot(o),r.curOp.selectionChanged=r.curOp.forceUpdate=!0),r.curOp.updateMaxLine=!0,!Cn(t.doc,n)&&null!=t.height){var l=t.height
t.height=null
var s=Tn(t)-l
s&&ei(n,n.height+s)}})},vl.prototype.attachLine=function(e){if(!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp
t.maybeHiddenMarkers&&-1!=Di(t.maybeHiddenMarkers,this)||(t.maybeUnhiddenMarkers||(t.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(e)},vl.prototype.detachLine=function(e){if(this.lines.splice(Di(this.lines,e),1),!this.lines.length&&this.doc.cm){var t=this.doc.cm.curOp;(t.maybeHiddenMarkers||(t.maybeHiddenMarkers=[])).push(this)}}
var gl=0,ml=e.SharedTextMarker=function(e,t){this.markers=e,this.primary=t
for(var r=0;r<e.length;++r)e[r].parent=this}
Oi(ml),ml.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0
for(var e=0;e<this.markers.length;++e)this.markers[e].clear()
Li(this,"clear")}},ml.prototype.find=function(e,t){return this.primary.find(e,t)}
var yl=e.LineWidget=function(e,t,r){if(r)for(var n in r)r.hasOwnProperty(n)&&(this[n]=r[n])
this.doc=e,this.node=t}
Oi(yl),yl.prototype.clear=function(){var e=this.doc.cm,t=this.line.widgets,r=this.line,n=ti(r)
if(null!=n&&t){for(var i=0;i<t.length;++i)t[i]==this&&t.splice(i--,1)
t.length||(r.widgets=null)
var o=Tn(this)
ei(r,Math.max(0,r.height-o)),e&&Ot(e,function(){Ln(e,r,-o),zt(e,n,"widget")})}},yl.prototype.changed=function(){var e=this.height,t=this.doc.cm,r=this.line
this.height=null
var n=Tn(this)-e
n&&(ei(r,r.height+n),t&&Ot(t,function(){t.curOp.forceUpdate=!0,Ln(t,r,n)}))}
var bl=e.Line=function(e,t,r){this.text=e,cn(this,t),this.height=r?r(this):1}
Oi(bl),bl.prototype.lineNo=function(){return ti(this)}
var wl={},xl={}
_n.prototype={chunkSize:function(){return this.lines.length},removeInner:function(e,t){for(var r=e,n=e+t;n>r;++r){var i=this.lines[r]
this.height-=i.height,Nn(i),Li(i,"delete")}this.lines.splice(e,t)},collapse:function(e){e.push.apply(e,this.lines)},insertInner:function(e,t,r){this.height+=r,this.lines=this.lines.slice(0,e).concat(t).concat(this.lines.slice(e))
for(var n=0;n<t.length;++n)t[n].parent=this},iterN:function(e,t,r){for(var n=e+t;n>e;++e)if(r(this.lines[e]))return!0}},Yn.prototype={chunkSize:function(){return this.size},removeInner:function(e,t){this.size-=t
for(var r=0;r<this.children.length;++r){var n=this.children[r],i=n.chunkSize()
if(i>e){var o=Math.min(t,i-e),l=n.height
if(n.removeInner(e,o),this.height-=l-n.height,i==o&&(this.children.splice(r--,1),n.parent=null),0==(t-=o))break
e=0}else e-=i}if(this.size-t<25&&(this.children.length>1||!(this.children[0]instanceof _n))){var s=[]
this.collapse(s),this.children=[new _n(s)],this.children[0].parent=this}},collapse:function(e){for(var t=0;t<this.children.length;++t)this.children[t].collapse(e)},insertInner:function(e,t,r){this.size+=t.length,this.height+=r
for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize()
if(o>=e){if(i.insertInner(e,t,r),i.lines&&i.lines.length>50){for(;i.lines.length>50;){var l=i.lines.splice(i.lines.length-25,25),s=new _n(l)
i.height-=s.height,this.children.splice(n+1,0,s),s.parent=this}this.maybeSpill()}break}e-=o}},maybeSpill:function(){if(!(this.children.length<=10)){var e=this
do{var t=e.children.splice(e.children.length-5,5),r=new Yn(t)
if(e.parent){e.size-=r.size,e.height-=r.height
var n=Di(e.parent.children,e)
e.parent.children.splice(n+1,0,r)}else{var i=new Yn(e.children)
i.parent=e,e.children=[i,r],e=i}r.parent=e.parent}while(e.children.length>10)
e.parent.maybeSpill()}},iterN:function(e,t,r){for(var n=0;n<this.children.length;++n){var i=this.children[n],o=i.chunkSize()
if(o>e){var l=Math.min(t,o-e)
if(i.iterN(e,l,r))return!0
if(0==(t-=l))break
e=0}else e-=o}}}
var Cl=0,Sl=e.Doc=function(e,t,r,n){if(!(this instanceof Sl))return new Sl(e,t,r,n)
null==r&&(r=0),Yn.call(this,[new _n([new bl("",null)])]),this.first=r,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.frontier=r
var i=Io(r,0)
this.sel=de(i),this.history=new oi(null),this.id=++Cl,this.modeOption=t,this.lineSep=n,this.extend=!1,"string"==typeof e&&(e=this.splitLines(e)),Xn(this,{from:i,to:i,text:e}),ke(this,de(i),zl)}
Sl.prototype=zi(Yn.prototype,{constructor:Sl,iter:function(e,t,r){r?this.iterN(e-this.first,t-e,r):this.iterN(this.first,this.first+this.size,e)},insert:function(e,t){for(var r=0,n=0;n<t.length;++n)r+=t[n].height
this.insertInner(e-this.first,t,r)},remove:function(e,t){this.removeInner(e-this.first,t)},getValue:function(e){var t=Jn(this,this.first,this.first+this.size)
return e===!1?t:t.join(e||this.lineSeparator())},setValue:Ht(function(e){var t=Io(this.first,0),r=this.first+this.size-1
Tr(this,{from:t,to:Io(r,Zn(this,r).text.length),text:this.splitLines(e),origin:"setValue",full:!0},!0),ke(this,de(t))}),replaceRange:function(e,t,r,n){t=ge(this,t),r=r?ge(this,r):t,Ar(this,e,t,r,n)},getRange:function(e,t,r){var n=Qn(this,ge(this,e),ge(this,t))
return r===!1?n:n.join(r||this.lineSeparator())},getLine:function(e){var t=this.getLineHandle(e)
return t&&t.text},getLineHandle:function(e){return me(this,e)?Zn(this,e):void 0},getLineNumber:function(e){return ti(e)},getLineHandleVisualStart:function(e){return"number"==typeof e&&(e=Zn(this,e)),yn(e)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(e){return ge(this,e)},getCursor:function(e){var t,r=this.sel.primary()
return t=null==e||"head"==e?r.head:"anchor"==e?r.anchor:"end"==e||"to"==e||e===!1?r.to():r.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:Ht(function(e,t,r){Se(this,ge(this,"number"==typeof e?Io(e,t||0):e),null,r)}),setSelection:Ht(function(e,t,r){Se(this,ge(this,e),ge(this,t||e),r)}),extendSelection:Ht(function(e,t,r){we(this,ge(this,e),t&&ge(this,t),r)}),extendSelections:Ht(function(e,t){xe(this,ye(this,e),t)}),extendSelectionsBy:Ht(function(e,t){var r=Ei(this.sel.ranges,e)
xe(this,ye(this,r),t)}),setSelections:Ht(function(e,t,r){if(e.length){for(var n=0,i=[];n<e.length;n++)i[n]=new he(ge(this,e[n].anchor),ge(this,e[n].head))
null==t&&(t=Math.min(e.length-1,this.sel.primIndex)),ke(this,fe(i,t),r)}}),addSelection:Ht(function(e,t,r){var n=this.sel.ranges.slice(0)
n.push(new he(ge(this,e),ge(this,t||e))),ke(this,fe(n,n.length-1),r)}),getSelection:function(e){for(var t,r=this.sel.ranges,n=0;n<r.length;n++){var i=Qn(this,r[n].from(),r[n].to())
t=t?t.concat(i):i}return e===!1?t:t.join(e||this.lineSeparator())},getSelections:function(e){for(var t=[],r=this.sel.ranges,n=0;n<r.length;n++){var i=Qn(this,r[n].from(),r[n].to())
e!==!1&&(i=i.join(e||this.lineSeparator())),t[n]=i}return t},replaceSelection:function(e,t,r){for(var n=[],i=0;i<this.sel.ranges.length;i++)n[i]=e
this.replaceSelections(n,t,r||"+input")},replaceSelections:Ht(function(e,t,r){for(var n=[],i=this.sel,o=0;o<i.ranges.length;o++){var l=i.ranges[o]
n[o]={from:l.from(),to:l.to(),text:this.splitLines(e[o]),origin:r}}for(var s=t&&"end"!=t&&Sr(this,n,t),o=n.length-1;o>=0;o--)Tr(this,n[o])
s?Te(this,s):this.cm&&Ir(this.cm)}),undo:Ht(function(){Mr(this,"undo")}),redo:Ht(function(){Mr(this,"redo")}),undoSelection:Ht(function(){Mr(this,"undo",!0)}),redoSelection:Ht(function(){Mr(this,"redo",!0)}),setExtending:function(e){this.extend=e},getExtending:function(){return this.extend},historySize:function(){for(var e=this.history,t=0,r=0,n=0;n<e.done.length;n++)e.done[n].ranges||++t
for(var n=0;n<e.undone.length;n++)e.undone[n].ranges||++r
return{undo:t,redo:r}},clearHistory:function(){this.history=new oi(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(e){return e&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),this.history.generation},isClean:function(e){return this.history.generation==(e||this.cleanGeneration)},getHistory:function(){return{done:vi(this.history.done),undone:vi(this.history.undone)}},setHistory:function(e){var t=this.history=new oi(this.history.maxGeneration)
t.done=vi(e.done.slice(0),null,!0),t.undone=vi(e.undone.slice(0),null,!0)},addLineClass:Ht(function(e,t,r){return Br(this,e,"gutter"==t?"gutter":"class",function(e){var n="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass"
if(e[n]){if(Xi(r).test(e[n]))return!1
e[n]+=" "+r}else e[n]=r
return!0})}),removeLineClass:Ht(function(e,t,r){return Br(this,e,"gutter"==t?"gutter":"class",function(e){var n="text"==t?"textClass":"background"==t?"bgClass":"gutter"==t?"gutterClass":"wrapClass",i=e[n]
if(!i)return!1
if(null==r)e[n]=null
else{var o=i.match(Xi(r))
if(!o)return!1
var l=o.index+o[0].length
e[n]=i.slice(0,o.index)+(o.index&&l!=i.length?" ":"")+i.slice(l)||null}return!0})}),addLineWidget:Ht(function(e,t,r){return kn(this,e,t,r)}),removeLineWidget:function(e){e.clear()},markText:function(e,t,r){return _r(this,ge(this,e),ge(this,t),r,r&&r.type||"range")},setBookmark:function(e,t){var r={replacedWith:t&&(null==t.nodeType?t.widget:t),insertLeft:t&&t.insertLeft,clearWhenEmpty:!1,shared:t&&t.shared,handleMouseEvents:t&&t.handleMouseEvents}
return e=ge(this,e),_r(this,e,e,r,"bookmark")},findMarksAt:function(e){e=ge(this,e)
var t=[],r=Zn(this,e.line).markedSpans
if(r)for(var n=0;n<r.length;++n){var i=r[n];(null==i.from||i.from<=e.ch)&&(null==i.to||i.to>=e.ch)&&t.push(i.marker.parent||i.marker)}return t},findMarks:function(e,t,r){e=ge(this,e),t=ge(this,t)
var n=[],i=e.line
return this.iter(e.line,t.line+1,function(o){var l=o.markedSpans
if(l)for(var s=0;s<l.length;s++){var a=l[s]
i==e.line&&e.ch>a.to||null==a.from&&i!=e.line||i==t.line&&a.from>t.ch||r&&!r(a.marker)||n.push(a.marker.parent||a.marker)}++i}),n},getAllMarks:function(){var e=[]
return this.iter(function(t){var r=t.markedSpans
if(r)for(var n=0;n<r.length;++n)null!=r[n].from&&e.push(r[n].marker)}),e},posFromIndex:function(e){var t,r=this.first
return this.iter(function(n){var i=n.text.length+1
return i>e?(t=e,!0):(e-=i,void++r)}),ge(this,Io(r,t))},indexFromPos:function(e){e=ge(this,e)
var t=e.ch
return e.line<this.first||e.ch<0?0:(this.iter(this.first,e.line,function(e){t+=e.text.length+1}),t)},copy:function(e){var t=new Sl(Jn(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep)
return t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,t.sel=this.sel,t.extend=!1,e&&(t.history.undoDepth=this.history.undoDepth,t.setHistory(this.getHistory())),t},linkedDoc:function(e){e||(e={})
var t=this.first,r=this.first+this.size
null!=e.from&&e.from>t&&(t=e.from),null!=e.to&&e.to<r&&(r=e.to)
var n=new Sl(Jn(this,t,r),e.mode||this.modeOption,t,this.lineSep)
return e.sharedHist&&(n.history=this.history),(this.linked||(this.linked=[])).push({doc:n,sharedHist:e.sharedHist}),n.linked=[{doc:this,isParent:!0,sharedHist:e.sharedHist}],$r(n,qr(this)),n},unlinkDoc:function(t){if(t instanceof e&&(t=t.doc),this.linked)for(var r=0;r<this.linked.length;++r){var n=this.linked[r]
if(n.doc==t){this.linked.splice(r,1),t.unlinkDoc(this),Zr(qr(this))
break}}if(t.history==this.history){var i=[t.id]
qn(t,function(e){i.push(e.id)},!0),t.history=new oi(null),t.history.done=vi(this.history.done,i),t.history.undone=vi(this.history.undone,i)}},iterLinkedDocs:function(e){qn(this,e)},getMode:function(){return this.mode},getEditor:function(){return this.cm},splitLines:function(e){return this.lineSep?e.split(this.lineSep):es(e)},lineSeparator:function(){return this.lineSep||"\n"}}),Sl.prototype.eachLine=Sl.prototype.iter
var Ll="iter insert remove copy getEditor constructor".split(" ")
for(var Tl in Sl.prototype)Sl.prototype.hasOwnProperty(Tl)&&Di(Ll,Tl)<0&&(e.prototype[Tl]=function(e){return function(){return e.apply(this.doc,arguments)}}(Sl.prototype[Tl]))
Oi(Sl)
var kl=e.e_preventDefault=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1},Ml=e.e_stopPropagation=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0},Nl=e.e_stop=function(e){kl(e),Ml(e)},Ol=e.on=function(e,t,r){if(e.addEventListener)e.addEventListener(t,r,!1)
else if(e.attachEvent)e.attachEvent("on"+t,r)
else{var n=e._handlers||(e._handlers={}),i=n[t]||(n[t]=[])
i.push(r)}},Wl=[],Al=e.off=function(e,t,r){if(e.removeEventListener)e.removeEventListener(t,r,!1)
else if(e.detachEvent)e.detachEvent("on"+t,r)
else for(var n=Si(e,t,!1),i=0;i<n.length;++i)if(n[i]==r){n.splice(i,1)
break}},Hl=e.signal=function(e,t){var r=Si(e,t,!0)
if(r.length)for(var n=Array.prototype.slice.call(arguments,2),i=0;i<r.length;++i)r[i].apply(null,n)},Dl=null,El=30,Pl=e.Pass={toString:function(){return"CodeMirror.Pass"}},zl={scroll:!1},Il={origin:"*mouse"},Fl={origin:"+move"}
Wi.prototype.set=function(e,t){clearTimeout(this.id),this.id=setTimeout(t,e)}
var Rl=e.countColumn=function(e,t,r,n,i){null==t&&(t=e.search(/[^\s\u00a0]/),-1==t&&(t=e.length))
for(var o=n||0,l=i||0;;){var s=e.indexOf("	",o)
if(0>s||s>=t)return l+(t-o)
l+=s-o,l+=r-l%r,o=s+1}},Bl=e.findColumn=function(e,t,r){for(var n=0,i=0;;){var o=e.indexOf("	",n);-1==o&&(o=e.length)
var l=o-n
if(o==e.length||i+l>=t)return n+Math.min(l,t-i)
if(i+=o-n,i+=r-i%r,n=o+1,i>=t)return n}},Gl=[""],Ul=function(e){e.select()}
No?Ul=function(e){e.selectionStart=0,e.selectionEnd=e.value.length}:bo&&(Ul=function(e){try{e.select()}catch(t){}})
var Vl,Kl=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,jl=e.isWordChar=function(e){return/\w/.test(e)||e>"Â€"&&(e.toUpperCase()!=e.toLowerCase()||Kl.test(e))},Xl=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
Vl=document.createRange?function(e,t,r,n){var i=document.createRange()
return i.setEnd(n||e,r),i.setStart(e,t),i}:function(e,t,r){var n=document.body.createTextRange()
try{n.moveToElementText(e.parentNode)}catch(i){return n}return n.collapse(!0),n.moveEnd("character",r),n.moveStart("character",t),n}
var _l=e.contains=function(e,t){if(3==t.nodeType&&(t=t.parentNode),e.contains)return e.contains(t)
do if(11==t.nodeType&&(t=t.host),t==e)return!0
while(t=t.parentNode)}
bo&&11>wo&&(ji=function(){try{return document.activeElement}catch(e){return document.body}})
var Yl,ql,$l=e.rmClass=function(e,t){var r=e.className,n=Xi(t).exec(r)
if(n){var i=r.slice(n.index+n[0].length)
e.className=r.slice(0,n.index)+(i?n[1]+i:"")}},Zl=e.addClass=function(e,t){var r=e.className
Xi(t).test(r)||(e.className+=(r?" ":"")+t)},Ql=!1,Jl=function(){if(bo&&9>wo)return!1
var e=Ui("div")
return"draggable"in e||"dragDrop"in e}(),es=e.splitLines=3!="\n\nb".split(/\n/).length?function(e){for(var t=0,r=[],n=e.length;n>=t;){var i=e.indexOf("\n",t);-1==i&&(i=e.length)
var o=e.slice(t,"\r"==e.charAt(i-1)?i-1:i),l=o.indexOf("\r");-1!=l?(r.push(o.slice(0,l)),t+=l+1):(r.push(o),t=i+1)}return r}:function(e){return e.split(/\r\n?|\n/)},ts=window.getSelection?function(e){try{return e.selectionStart!=e.selectionEnd}catch(t){return!1}}:function(e){try{var t=e.ownerDocument.selection.createRange()}catch(r){}return t&&t.parentElement()==e?0!=t.compareEndPoints("StartToEnd",t):!1},rs=function(){var e=Ui("div")
return"oncopy"in e?!0:(e.setAttribute("oncopy","return;"),"function"==typeof e.oncopy)}(),ns=null,is=e.keyNames={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",107:"=",109:"-",110:".",111:"/",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"}
!function(){for(var e=0;10>e;e++)is[e+48]=is[e+96]=String(e)
for(var e=65;90>=e;e++)is[e]=String.fromCharCode(e)
for(var e=1;12>=e;e++)is[e+111]=is[e+63235]="F"+e}()
var os,ls=function(){function e(e){return 247>=e?r.charAt(e):e>=1424&&1524>=e?"R":e>=1536&&1773>=e?n.charAt(e-1536):e>=1774&&2220>=e?"r":e>=8192&&8203>=e?"w":8204==e?"b":"L"}function t(e,t,r){this.level=e,this.from=t,this.to=r}var r="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",n="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",i=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,o=/[stwN]/,l=/[LRr]/,s=/[Lb1n]/,a=/[1n]/,u="L"
return function(r){if(!i.test(r))return!1
for(var n,c=r.length,h=[],f=0;c>f;++f)h.push(n=e(r.charCodeAt(f)))
for(var f=0,d=u;c>f;++f){var n=h[f]
"m"==n?h[f]=d:d=n}for(var f=0,p=u;c>f;++f){var n=h[f]
"1"==n&&"r"==p?h[f]="n":l.test(n)&&(p=n,"r"==n&&(h[f]="R"))}for(var f=1,d=h[0];c-1>f;++f){var n=h[f]
"+"==n&&"1"==d&&"1"==h[f+1]?h[f]="1":","!=n||d!=h[f+1]||"1"!=d&&"n"!=d||(h[f]=d),d=n}for(var f=0;c>f;++f){var n=h[f]
if(","==n)h[f]="N"
else if("%"==n){for(var g=f+1;c>g&&"%"==h[g];++g);for(var v=f&&"!"==h[f-1]||c>g&&"1"==h[g]?"1":"N",m=f;g>m;++m)h[m]=v
f=g-1}}for(var f=0,p=u;c>f;++f){var n=h[f]
"L"==p&&"1"==n?h[f]="L":l.test(n)&&(p=n)}for(var f=0;c>f;++f)if(o.test(h[f])){for(var g=f+1;c>g&&o.test(h[g]);++g);for(var y="L"==(f?h[f-1]:u),b="L"==(c>g?h[g]:u),v=y||b?"L":"R",m=f;g>m;++m)h[m]=v
f=g-1}for(var w,x=[],f=0;c>f;)if(s.test(h[f])){var C=f
for(++f;c>f&&s.test(h[f]);++f);x.push(new t(0,C,f))}else{var S=f,L=x.length
for(++f;c>f&&"L"!=h[f];++f);for(var m=S;f>m;)if(a.test(h[m])){m>S&&x.splice(L,0,new t(1,S,m))
var T=m
for(++m;f>m&&a.test(h[m]);++m);x.splice(L,0,new t(2,T,m)),S=m}else++m
f>S&&x.splice(L,0,new t(1,S,f))}return 1==x[0].level&&(w=r.match(/^\s+/))&&(x[0].from=w[0].length,x.unshift(new t(0,0,w[0].length))),1==Hi(x).level&&(w=r.match(/\s+$/))&&(Hi(x).to-=w[0].length,x.push(new t(0,c-w[0].length,c))),2==x[0].level&&x.unshift(new t(1,x[0].to,x[0].to)),x[0].level!=Hi(x).level&&x.push(new t(x[0].level,c,c)),x}}()
return e.version="5.10.0",e}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){function t(e,t,r,n){this.cm=e,this.node=t,this.options=r,this.height=n,this.cleared=!1}function r(e){var t=e.getWrapperElement(),r=window.getComputedStyle?window.getComputedStyle(t):t.currentStyle,n=parseInt(r.height),i=e.state.panels={setHeight:t.style.height,heightLeft:n,panels:0,wrapper:document.createElement("div")}
t.parentNode.insertBefore(i.wrapper,t)
var o=e.hasFocus()
i.wrapper.appendChild(t),o&&e.focus(),e._setSize=e.setSize,null!=n&&(e.setSize=function(t,r){if(null==r)return this._setSize(t,r)
if(i.setHeight=r,"number"!=typeof r){var o=/^(\d+\.?\d*)px$/.exec(r)
o?r=Number(o[1]):(i.wrapper.style.height=r,r=i.wrapper.offsetHeight,i.wrapper.style.height="")}e._setSize(t,i.heightLeft+=r-n),n=r})}function n(e){var t=e.state.panels
e.state.panels=null
var r=e.getWrapperElement()
t.wrapper.parentNode.replaceChild(r,t.wrapper),r.style.height=t.setHeight,e.setSize=e._setSize,e.setSize()}e.defineExtension("addPanel",function(e,n){n=n||{},this.state.panels||r(this)
var i=this.state.panels,o=i.wrapper,l=this.getWrapperElement()
n.after instanceof t&&!n.after.cleared?o.insertBefore(e,n.before.node.nextSibling):n.before instanceof t&&!n.before.cleared?o.insertBefore(e,n.before.node):n.replace instanceof t&&!n.replace.cleared?(o.insertBefore(e,n.replace.node),n.replace.clear()):"bottom"==n.position?o.appendChild(e):"before-bottom"==n.position?o.insertBefore(e,l.nextSibling):"after-top"==n.position?o.insertBefore(e,l):o.insertBefore(e,o.firstChild)
var s=n&&n.height||e.offsetHeight
return this._setSize(null,i.heightLeft-=s),i.panels++,new t(this,e,n,s)}),t.prototype.clear=function(){if(!this.cleared){this.cleared=!0
var e=this.cm.state.panels
this.cm._setSize(null,e.heightLeft+=this.height),e.wrapper.removeChild(this.node),0==--e.panels&&n(this.cm)}},t.prototype.changed=function(e){var t=null==e?this.node.offsetHeight:e,r=this.cm.state.panels
this.cm._setSize(null,r.height+=t-this.height),this.height=t}}),function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict"
function t(e,t,i,o){if(this.atOccurrence=!1,this.doc=e,null==o&&"string"==typeof t&&(o=!1),i=i?e.clipPos(i):n(0,0),this.pos={from:i,to:i},"string"!=typeof t)t.global||(t=new RegExp(t.source,t.ignoreCase?"ig":"g")),this.matches=function(r,i){if(r){t.lastIndex=0
for(var o,l,s=e.getLine(i.line).slice(0,i.ch),a=0;;){t.lastIndex=a
var u=t.exec(s)
if(!u)break
if(o=u,l=o.index,a=o.index+(o[0].length||1),a==s.length)break}var c=o&&o[0].length||0
c||(0==l&&0==s.length?o=void 0:l!=e.getLine(i.line).length&&c++)}else{t.lastIndex=i.ch
var s=e.getLine(i.line),o=t.exec(s),c=o&&o[0].length||0,l=o&&o.index
l+c==s.length||c||(c=1)}return o&&c?{from:n(i.line,l),to:n(i.line,l+c),match:o}:void 0}
else{var l=t
o&&(t=t.toLowerCase())
var s=o?function(e){return e.toLowerCase()}:function(e){return e},a=t.split("\n")
if(1==a.length)t.length?this.matches=function(i,o){if(i){var a=e.getLine(o.line).slice(0,o.ch),u=s(a),c=u.lastIndexOf(t)
if(c>-1)return c=r(a,u,c),{from:n(o.line,c),to:n(o.line,c+l.length)}}else{var a=e.getLine(o.line).slice(o.ch),u=s(a),c=u.indexOf(t)
if(c>-1)return c=r(a,u,c)+o.ch,{from:n(o.line,c),to:n(o.line,c+l.length)}}}:this.matches=function(){}
else{var u=l.split("\n")
this.matches=function(t,r){var i=a.length-1
if(t){if(r.line-(a.length-1)<e.firstLine())return
if(s(e.getLine(r.line).slice(0,u[i].length))!=a[a.length-1])return
for(var o=n(r.line,u[i].length),l=r.line-1,c=i-1;c>=1;--c,--l)if(a[c]!=s(e.getLine(l)))return
var h=e.getLine(l),f=h.length-u[0].length
if(s(h.slice(f))!=a[0])return
return{from:n(l,f),to:o}}if(!(r.line+(a.length-1)>e.lastLine())){var h=e.getLine(r.line),f=h.length-u[0].length
if(s(h.slice(f))==a[0]){for(var d=n(r.line,f),l=r.line+1,c=1;i>c;++c,++l)if(a[c]!=s(e.getLine(l)))return
if(s(e.getLine(l).slice(0,u[i].length))==a[i])return{from:d,to:n(l,u[i].length)}}}}}}}function r(e,t,r){if(e.length==t.length)return r
for(var n=Math.min(r,e.length);;){var i=e.slice(0,n).toLowerCase().length
if(r>i)++n
else{if(!(i>r))return n;--n}}}var n=e.Pos
t.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(e){function t(e){var t=n(e,0)
return r.pos={from:t,to:t},r.atOccurrence=!1,!1}for(var r=this,i=this.doc.clipPos(e?this.pos.from:this.pos.to);;){if(this.pos=this.matches(e,i))return this.atOccurrence=!0,this.pos.match||!0
if(e){if(!i.line)return t(0)
i=n(i.line-1,this.doc.getLine(i.line-1).length)}else{var o=this.doc.lineCount()
if(i.line==o-1)return t(o)
i=n(i.line+1,0)}}},from:function(){return this.atOccurrence?this.pos.from:void 0},to:function(){return this.atOccurrence?this.pos.to:void 0},replace:function(t,r){if(this.atOccurrence){var i=e.splitLines(t)
this.doc.replaceRange(i,this.pos.from,this.pos.to,r),this.pos.to=n(this.pos.from.line+i.length-1,i[i.length-1].length+(1==i.length?this.pos.from.ch:0))}}},e.defineExtension("getSearchCursor",function(e,r,n){return new t(this.doc,e,r,n)}),e.defineDocExtension("getSearchCursor",function(e,r,n){return new t(this,e,r,n)}),e.defineExtension("selectMatches",function(t,r){for(var n=[],i=this.getSearchCursor(t,this.getCursor("from"),r);i.findNext()&&!(e.cmpPos(i.to(),this.getCursor("to"))>0);)n.push({anchor:i.from(),head:i.to()})
n.length&&this.setSelections(n,0)})})
;// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var statementIndent = parserConfig.statementIndent;
  var jsonldMode = parserConfig.jsonld;
  var jsonMode = parserConfig.json || jsonldMode;
  var isTS = parserConfig.typescript;
  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

    return {
      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": D, "break": D, "continue": D, "new": kw("new"), "delete": C, "void": C, "throw": C,
      "debugger": kw("debugger"), "var": kw("var"), "const": kw("var"), "let": kw("var"),
      "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C,
      "await": C
    };
  }();

  var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

  function readRegexp(stream) {
    var escaped = false, next, inSet = false;
    while ((next = stream.next()) != null) {
      if (!escaped) {
        if (next == "/" && !inSet) return;
        if (next == "[") inSet = true;
        else if (inSet && next == "]") inSet = false;
      }
      escaped = !escaped && next == "\\";
    }
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }
  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "." && stream.match(/^\d+(?:[eE][+\-]?\d+)?/)) {
      return ret("number", "number");
    } else if (ch == "." && stream.match("..")) {
      return ret("spread", "meta");
    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
      return ret(ch);
    } else if (ch == "=" && stream.eat(">")) {
      return ret("=>", "operator");
    } else if (ch == "0" && stream.match(/^(?:x[\da-f]+|o[0-7]+|b[01]+)n?/i)) {
      return ret("number", "number");
    } else if (/\d/.test(ch)) {
      stream.match(/^\d*(?:n|(?:\.\d*)?(?:[eE][+\-]?\d+)?)?/);
      return ret("number", "number");
    } else if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      } else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      } else if (expressionAllowed(stream, state, 1)) {
        readRegexp(stream);
        stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
        return ret("regexp", "string-2");
      } else {
        stream.eat("=");
        return ret("operator", "operator", stream.current());
      }
    } else if (ch == "`") {
      state.tokenize = tokenQuasi;
      return tokenQuasi(stream, state);
    } else if (ch == "#") {
      stream.skipToEnd();
      return ret("error", "error");
    } else if (isOperatorChar.test(ch)) {
      if (ch != ">" || !state.lexical || state.lexical.type != ">") {
        if (stream.eat("=")) {
          if (ch == "!" || ch == "=") stream.eat("=")
        } else if (/[<>*+\-]/.test(ch)) {
          stream.eat(ch)
          if (ch == ">") stream.eat(ch)
        }
      }
      return ret("operator", "operator", stream.current());
    } else if (wordRE.test(ch)) {
      stream.eatWhile(wordRE);
      var word = stream.current()
      if (state.lastType != ".") {
        if (keywords.propertyIsEnumerable(word)) {
          var kw = keywords[word]
          return ret(kw.type, kw.style, word)
        }
        if (word == "async" && stream.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, false))
          return ret("async", "keyword", word)
      }
      return ret("variable", "variable", word)
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next;
      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
        state.tokenize = tokenBase;
        return ret("jsonld-keyword", "meta");
      }
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) break;
        escaped = !escaped && next == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenQuasi(stream, state) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
        state.tokenize = tokenBase;
        break;
      }
      escaped = !escaped && next == "\\";
    }
    return ret("quasi", "string-2", stream.current());
  }

  var brackets = "([{}])";
  // This is a crude lookahead trick to try and notice that we're
  // parsing the argument patterns for a fat-arrow function before we
  // actually hit the arrow token. It only works if the arrow is on
  // the same line as the arguments and there's no strange noise
  // (comments) in between. Fallback is to only notice when we hit the
  // arrow, and not declare the arguments as locals for the arrow
  // body.
  function findFatArrow(stream, state) {
    if (state.fatArrowAt) state.fatArrowAt = null;
    var arrow = stream.string.indexOf("=>", stream.start);
    if (arrow < 0) return;

    if (isTS) { // Try to skip TypeScript return type declarations after the arguments
      var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow))
      if (m) arrow = m.index
    }

    var depth = 0, sawSomething = false;
    for (var pos = arrow - 1; pos >= 0; --pos) {
      var ch = stream.string.charAt(pos);
      var bracket = brackets.indexOf(ch);
      if (bracket >= 0 && bracket < 3) {
        if (!depth) { ++pos; break; }
        if (--depth == 0) { if (ch == "(") sawSomething = true; break; }
      } else if (bracket >= 3 && bracket < 6) {
        ++depth;
      } else if (wordRE.test(ch)) {
        sawSomething = true;
      } else if (/["'\/]/.test(ch)) {
        return;
      } else if (sawSomething && !depth) {
        ++pos;
        break;
      }
    }
    if (sawSomething && !depth) state.fatArrowAt = pos;
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
    for (var cx = state.context; cx; cx = cx.prev) {
      for (var v = cx.vars; v; v = v.next)
        if (v.name == varname) return true;
    }
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function inList(name, list) {
    for (var v = list; v; v = v.next) if (v.name == name) return true
    return false;
  }
  function register(varname) {
    var state = cx.state;
    cx.marked = "def";
    if (state.context) {
      if (state.lexical.info == "var" && state.context && state.context.block) {
        // FIXME function decls are also not block scoped
        var newContext = registerVarScoped(varname, state.context)
        if (newContext != null) {
          state.context = newContext
          return
        }
      } else if (!inList(varname, state.localVars)) {
        state.localVars = new Var(varname, state.localVars)
        return
      }
    }
    // Fall through means this is global
    if (parserConfig.globalVars && !inList(varname, state.globalVars))
      state.globalVars = new Var(varname, state.globalVars)
  }
  function registerVarScoped(varname, context) {
    if (!context) {
      return null
    } else if (context.block) {
      var inner = registerVarScoped(varname, context.prev)
      if (!inner) return null
      if (inner == context.prev) return context
      return new Context(inner, context.vars, true)
    } else if (inList(varname, context.vars)) {
      return context
    } else {
      return new Context(context.prev, new Var(varname, context.vars), false)
    }
  }

  function isModifier(name) {
    return name == "public" || name == "private" || name == "protected" || name == "abstract" || name == "readonly"
  }

  // Combinators

  function Context(prev, vars, block) { this.prev = prev; this.vars = vars; this.block = block }
  function Var(name, next) { this.name = name; this.next = next }

  var defaultVars = new Var("this", new Var("arguments", null))
  function pushcontext() {
    cx.state.context = new Context(cx.state.context, cx.state.localVars, false)
    cx.state.localVars = defaultVars
  }
  function pushblockcontext() {
    cx.state.context = new Context(cx.state.context, cx.state.localVars, true)
    cx.state.localVars = null
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars
    cx.state.context = cx.state.context.prev
  }
  popcontext.lex = true
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state, indent = state.indented;
      if (state.lexical.type == "stat") indent = state.lexical.indented;
      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
        indent = outer.indented;
      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    function exp(type) {
      if (type == wanted) return cont();
      else if (wanted == ";" || type == "}" || type == ")" || type == "]") return pass();
      else return cont(exp);
    };
    return exp;
  }

  function statement(type, value) {
    if (type == "var") return cont(pushlex("vardef", value), vardef, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "keyword d") return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect(";"), poplex);
    if (type == "debugger") return cont(expect(";"));
    if (type == "{") return cont(pushlex("}"), pushblockcontext, block, poplex, popcontext);
    if (type == ";") return cont();
    if (type == "if") {
      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
        cx.state.cc.pop()();
      return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
    }
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
    if (type == "class" || (isTS && value == "interface")) {
      cx.marked = "keyword"
      return cont(pushlex("form", type == "class" ? type : value), className, poplex)
    }
    if (type == "variable") {
      if (isTS && value == "declare") {
        cx.marked = "keyword"
        return cont(statement)
      } else if (isTS && (value == "module" || value == "enum" || value == "type") && cx.stream.match(/^\s*\w/, false)) {
        cx.marked = "keyword"
        if (value == "enum") return cont(enumdef);
        else if (value == "type") return cont(typename, expect("operator"), typeexpr, expect(";"));
        else return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex)
      } else if (isTS && value == "namespace") {
        cx.marked = "keyword"
        return cont(pushlex("form"), expression, statement, poplex)
      } else if (isTS && value == "abstract") {
        cx.marked = "keyword"
        return cont(statement)
      } else {
        return cont(pushlex("stat"), maybelabel);
      }
    }
    if (type == "switch") return cont(pushlex("form"), parenExpr, expect("{"), pushlex("}", "switch"), pushblockcontext,
                                      block, poplex, poplex, popcontext);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, maybeCatchBinding, statement, poplex, popcontext);
    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
    if (type == "async") return cont(statement)
    if (value == "@") return cont(expression, statement)
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function maybeCatchBinding(type) {
    if (type == "(") return cont(funarg, expect(")"))
  }
  function expression(type, value) {
    return expressionInner(type, value, false);
  }
  function expressionNoComma(type, value) {
    return expressionInner(type, value, true);
  }
  function parenExpr(type) {
    if (type != "(") return pass()
    return cont(pushlex(")"), expression, expect(")"), poplex)
  }
  function expressionInner(type, value, noComma) {
    if (cx.state.fatArrowAt == cx.stream.start) {
      var body = noComma ? arrowBodyNoComma : arrowBody;
      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect("=>"), body, popcontext);
      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
    }

    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
    if (type == "function") return cont(functiondef, maybeop);
    if (type == "class" || (isTS && value == "interface")) { cx.marked = "keyword"; return cont(pushlex("form"), classExpression, poplex); }
    if (type == "keyword c" || type == "async") return cont(noComma ? expressionNoComma : expression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
    if (type == "quasi") return pass(quasi, maybeop);
    if (type == "new") return cont(maybeTarget(noComma));
    if (type == "import") return cont(expression);
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }

  function maybeoperatorComma(type, value) {
    if (type == ",") return cont(expression);
    return maybeoperatorNoComma(type, value, false);
  }
  function maybeoperatorNoComma(type, value, noComma) {
    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
    var expr = noComma == false ? expression : expressionNoComma;
    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
    if (type == "operator") {
      if (/\+\+|--/.test(value) || isTS && value == "!") return cont(me);
      if (isTS && value == "<" && cx.stream.match(/^([^>]|<.*?>)*>\s*\(/, false))
        return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, me);
      if (value == "?") return cont(expression, expect(":"), expr);
      return cont(expr);
    }
    if (type == "quasi") { return pass(quasi, me); }
    if (type == ";") return;
    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
    if (type == ".") return cont(property, me);
    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
    if (isTS && value == "as") { cx.marked = "keyword"; return cont(typeexpr, me) }
    if (type == "regexp") {
      cx.state.lastType = cx.marked = "operator"
      cx.stream.backUp(cx.stream.pos - cx.stream.start - 1)
      return cont(expr)
    }
  }
  function quasi(type, value) {
    if (type != "quasi") return pass();
    if (value.slice(value.length - 2) != "${") return cont(quasi);
    return cont(expression, continueQuasi);
  }
  function continueQuasi(type) {
    if (type == "}") {
      cx.marked = "string-2";
      cx.state.tokenize = tokenQuasi;
      return cont(quasi);
    }
  }
  function arrowBody(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expression);
  }
  function arrowBodyNoComma(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expressionNoComma);
  }
  function maybeTarget(noComma) {
    return function(type) {
      if (type == ".") return cont(noComma ? targetNoComma : target);
      else if (type == "variable" && isTS) return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma)
      else return pass(noComma ? expressionNoComma : expression);
    };
  }
  function target(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
  }
  function targetNoComma(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperatorComma, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type, value) {
    if (type == "async") {
      cx.marked = "property";
      return cont(objprop);
    } else if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      if (value == "get" || value == "set") return cont(getterSetter);
      var m // Work around fat-arrow-detection complication for detecting typescript typed arrow params
      if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false)))
        cx.state.fatArrowAt = cx.stream.pos + m[0].length
      return cont(afterprop);
    } else if (type == "number" || type == "string") {
      cx.marked = jsonldMode ? "property" : (cx.style + " property");
      return cont(afterprop);
    } else if (type == "jsonld-keyword") {
      return cont(afterprop);
    } else if (isTS && isModifier(value)) {
      cx.marked = "keyword"
      return cont(objprop)
    } else if (type == "[") {
      return cont(expression, maybetypeOrIn, expect("]"), afterprop);
    } else if (type == "spread") {
      return cont(expressionNoComma, afterprop);
    } else if (value == "*") {
      cx.marked = "keyword";
      return cont(objprop);
    } else if (type == ":") {
      return pass(afterprop)
    }
  }
  function getterSetter(type) {
    if (type != "variable") return pass(afterprop);
    cx.marked = "property";
    return cont(functiondef);
  }
  function afterprop(type) {
    if (type == ":") return cont(expressionNoComma);
    if (type == "(") return pass(functiondef);
  }
  function commasep(what, end, sep) {
    function proceed(type, value) {
      if (sep ? sep.indexOf(type) > -1 : type == ",") {
        var lex = cx.state.lexical;
        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
        return cont(function(type, value) {
          if (type == end || value == end) return pass()
          return pass(what)
        }, proceed);
      }
      if (type == end || value == end) return cont();
      if (sep && sep.indexOf(";") > -1) return pass(what)
      return cont(expect(end));
    }
    return function(type, value) {
      if (type == end || value == end) return cont();
      return pass(what, proceed);
    };
  }
  function contCommasep(what, end, info) {
    for (var i = 3; i < arguments.length; i++)
      cx.cc.push(arguments[i]);
    return cont(pushlex(end, info), commasep(what, end), poplex);
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function maybetype(type, value) {
    if (isTS) {
      if (type == ":") return cont(typeexpr);
      if (value == "?") return cont(maybetype);
    }
  }
  function maybetypeOrIn(type, value) {
    if (isTS && (type == ":" || value == "in")) return cont(typeexpr)
  }
  function mayberettype(type) {
    if (isTS && type == ":") {
      if (cx.stream.match(/^\s*\w+\s+is\b/, false)) return cont(expression, isKW, typeexpr)
      else return cont(typeexpr)
    }
  }
  function isKW(_, value) {
    if (value == "is") {
      cx.marked = "keyword"
      return cont()
    }
  }
  function typeexpr(type, value) {
    if (value == "keyof" || value == "typeof" || value == "infer") {
      cx.marked = "keyword"
      return cont(value == "typeof" ? expressionNoComma : typeexpr)
    }
    if (type == "variable" || value == "void") {
      cx.marked = "type"
      return cont(afterType)
    }
    if (value == "|" || value == "&") return cont(typeexpr)
    if (type == "string" || type == "number" || type == "atom") return cont(afterType);
    if (type == "[") return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType)
    if (type == "{") return cont(pushlex("}"), commasep(typeprop, "}", ",;"), poplex, afterType)
    if (type == "(") return cont(commasep(typearg, ")"), maybeReturnType, afterType)
    if (type == "<") return cont(commasep(typeexpr, ">"), typeexpr)
  }
  function maybeReturnType(type) {
    if (type == "=>") return cont(typeexpr)
  }
  function typeprop(type, value) {
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property"
      return cont(typeprop)
    } else if (value == "?" || type == "number" || type == "string") {
      return cont(typeprop)
    } else if (type == ":") {
      return cont(typeexpr)
    } else if (type == "[") {
      return cont(expect("variable"), maybetype, expect("]"), typeprop)
    } else if (type == "(") {
      return pass(functiondecl, typeprop)
    }
  }
  function typearg(type, value) {
    if (type == "variable" && cx.stream.match(/^\s*[?:]/, false) || value == "?") return cont(typearg)
    if (type == ":") return cont(typeexpr)
    if (type == "spread") return cont(typearg)
    return pass(typeexpr)
  }
  function afterType(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
    if (value == "|" || type == "." || value == "&") return cont(typeexpr)
    if (type == "[") return cont(typeexpr, expect("]"), afterType)
    if (value == "extends" || value == "implements") { cx.marked = "keyword"; return cont(typeexpr) }
    if (value == "?") return cont(typeexpr, expect(":"), typeexpr)
  }
  function maybeTypeArgs(_, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
  }
  function typeparam() {
    return pass(typeexpr, maybeTypeDefault)
  }
  function maybeTypeDefault(_, value) {
    if (value == "=") return cont(typeexpr)
  }
  function vardef(_, value) {
    if (value == "enum") {cx.marked = "keyword"; return cont(enumdef)}
    return pass(pattern, maybetype, maybeAssign, vardefCont);
  }
  function pattern(type, value) {
    if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(pattern) }
    if (type == "variable") { register(value); return cont(); }
    if (type == "spread") return cont(pattern);
    if (type == "[") return contCommasep(eltpattern, "]");
    if (type == "{") return contCommasep(proppattern, "}");
  }
  function proppattern(type, value) {
    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
      register(value);
      return cont(maybeAssign);
    }
    if (type == "variable") cx.marked = "property";
    if (type == "spread") return cont(pattern);
    if (type == "}") return pass();
    if (type == "[") return cont(expression, expect(']'), expect(':'), proppattern);
    return cont(expect(":"), pattern, maybeAssign);
  }
  function eltpattern() {
    return pass(pattern, maybeAssign)
  }
  function maybeAssign(_type, value) {
    if (value == "=") return cont(expressionNoComma);
  }
  function vardefCont(type) {
    if (type == ",") return cont(vardef);
  }
  function maybeelse(type, value) {
    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
  }
  function forspec(type, value) {
    if (value == "await") return cont(forspec);
    if (type == "(") return cont(pushlex(")"), forspec1, poplex);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef, forspec2);
    if (type == "variable") return cont(forspec2);
    return pass(forspec2)
  }
  function forspec2(type, value) {
    if (type == ")") return cont()
    if (type == ";") return cont(forspec2)
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression, forspec2) }
    return pass(expression, forspec2)
  }
  function functiondef(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, statement, popcontext);
    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondef)
  }
  function functiondecl(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondecl);}
    if (type == "variable") {register(value); return cont(functiondecl);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, popcontext);
    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondecl)
  }
  function typename(type, value) {
    if (type == "keyword" || type == "variable") {
      cx.marked = "type"
      return cont(typename)
    } else if (value == "<") {
      return cont(pushlex(">"), commasep(typeparam, ">"), poplex)
    }
  }
  function funarg(type, value) {
    if (value == "@") cont(expression, funarg)
    if (type == "spread") return cont(funarg);
    if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(funarg); }
    if (isTS && type == "this") return cont(maybetype, maybeAssign)
    return pass(pattern, maybetype, maybeAssign);
  }
  function classExpression(type, value) {
    // Class expressions may have an optional name.
    if (type == "variable") return className(type, value);
    return classNameAfter(type, value);
  }
  function className(type, value) {
    if (type == "variable") {register(value); return cont(classNameAfter);}
  }
  function classNameAfter(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, classNameAfter)
    if (value == "extends" || value == "implements" || (isTS && type == ",")) {
      if (value == "implements") cx.marked = "keyword";
      return cont(isTS ? typeexpr : expression, classNameAfter);
    }
    if (type == "{") return cont(pushlex("}"), classBody, poplex);
  }
  function classBody(type, value) {
    if (type == "async" ||
        (type == "variable" &&
         (value == "static" || value == "get" || value == "set" || (isTS && isModifier(value))) &&
         cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false))) {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      return cont(isTS ? classfield : functiondef, classBody);
    }
    if (type == "number" || type == "string") return cont(isTS ? classfield : functiondef, classBody);
    if (type == "[")
      return cont(expression, maybetype, expect("]"), isTS ? classfield : functiondef, classBody)
    if (value == "*") {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (isTS && type == "(") return pass(functiondecl, classBody)
    if (type == ";" || type == ",") return cont(classBody);
    if (type == "}") return cont();
    if (value == "@") return cont(expression, classBody)
  }
  function classfield(type, value) {
    if (value == "?") return cont(classfield)
    if (type == ":") return cont(typeexpr, maybeAssign)
    if (value == "=") return cont(expressionNoComma)
    var context = cx.state.lexical.prev, isInterface = context && context.info == "interface"
    return pass(isInterface ? functiondecl : functiondef)
  }
  function afterExport(type, value) {
    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
    if (type == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
    return pass(statement);
  }
  function exportField(type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(expect("variable")); }
    if (type == "variable") return pass(expressionNoComma, exportField);
  }
  function afterImport(type) {
    if (type == "string") return cont();
    if (type == "(") return pass(expression);
    return pass(importSpec, maybeMoreImports, maybeFrom);
  }
  function importSpec(type, value) {
    if (type == "{") return contCommasep(importSpec, "}");
    if (type == "variable") register(value);
    if (value == "*") cx.marked = "keyword";
    return cont(maybeAs);
  }
  function maybeMoreImports(type) {
    if (type == ",") return cont(importSpec, maybeMoreImports)
  }
  function maybeAs(_type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
  }
  function maybeFrom(_type, value) {
    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
  }
  function arrayLiteral(type) {
    if (type == "]") return cont();
    return pass(commasep(expressionNoComma, "]"));
  }
  function enumdef() {
    return pass(pushlex("form"), pattern, expect("{"), pushlex("}"), commasep(enummember, "}"), poplex, poplex)
  }
  function enummember() {
    return pass(pattern, maybeAssign);
  }

  function isContinuedStatement(state, textAfter) {
    return state.lastType == "operator" || state.lastType == "," ||
      isOperatorChar.test(textAfter.charAt(0)) ||
      /[,.]/.test(textAfter.charAt(0));
  }

  function expressionAllowed(stream, state, backUp) {
    return state.tokenize == tokenBase &&
      /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
      (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
  }

  // Interface

  return {
    startState: function(basecolumn) {
      var state = {
        tokenize: tokenBase,
        lastType: "sof",
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: parserConfig.localVars,
        context: parserConfig.localVars && new Context(null, null, false),
        indented: basecolumn || 0
      };
      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
        state.globalVars = parserConfig.globalVars;
      return state;
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
        findFatArrow(stream, state);
      }
      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize == tokenComment) return CodeMirror.Pass;
      if (state.tokenize != tokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top
      // Kludge to prevent 'maybelse' from blocking lexical scope pops
      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
        var c = state.cc[i];
        if (c == poplex) lexical = lexical.prev;
        else if (c != maybeelse) break;
      }
      while ((lexical.type == "stat" || lexical.type == "form") &&
             (firstChar == "}" || ((top = state.cc[state.cc.length - 1]) &&
                                   (top == maybeoperatorComma || top == maybeoperatorNoComma) &&
                                   !/^[,\.=+\-*:?[\(]/.test(textAfter))))
        lexical = lexical.prev;
      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
        lexical = lexical.prev;
      var type = lexical.type, closing = firstChar == type;

      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info.length + 1 : 0);
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "form") return lexical.indented + indentUnit;
      else if (type == "stat")
        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: jsonMode ? null : "/*",
    blockCommentEnd: jsonMode ? null : "*/",
    blockCommentContinue: jsonMode ? null : " * ",
    lineComment: jsonMode ? null : "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``",

    helperType: jsonMode ? "json" : "javascript",
    jsonldMode: jsonldMode,
    jsonMode: jsonMode,

    expressionAllowed: expressionAllowed,

    skipExpression: function(state) {
      var top = state.cc[state.cc.length - 1]
      if (top == expression || top == expressionNoComma) state.cc.pop()
    }
  };
});

CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("text/ecmascript", "javascript");
CodeMirror.defineMIME("application/javascript", "javascript");
CodeMirror.defineMIME("application/x-javascript", "javascript");
CodeMirror.defineMIME("application/ecmascript", "javascript");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

});
;/*! jQuery UI - v1.10.4 - 2016-02-25
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.sortable.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.slider.js, jquery.ui.tabs.js, jquery.ui.effect.js, jquery.ui.effect-fade.js, jquery.ui.effect-slide.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);(function(e,t){var i=0,s=Array.prototype.slice,a=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(n){}a(t)},e.widget=function(i,s,a){var n,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],n=u+"-"+i,a||(a=s,s=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:a.version,_proto:e.extend({},a),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(a,function(i,a){return e.isFunction(a)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,n=this._superApply;return this._super=e,this._superApply=t,i=a.apply(this,arguments),this._super=s,this._superApply=n,i}}(),t):(l[i]=a,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix||i:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:n}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var a,n,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(a in r[o])n=r[o][a],r[o].hasOwnProperty(a)&&n!==t&&(i[a]=e.isPlainObject(n)?e.isPlainObject(i[a])?e.widget.extend({},i[a],n):e.widget.extend({},n):n);return i},e.widget.bridge=function(i,a){var n=a.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,a=e.data(this,n);return a?e.isFunction(a[r])&&"_"!==r.charAt(0)?(s=a[r].apply(a,h),s!==a&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,n);t?t.option(r||{})._init():e.data(this,n,new a(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var a,n,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},a=i.split("."),i=a.shift(),a.length){for(n=o[i]=e.widget.extend({},this.options[i]),r=0;a.length-1>r;r++)n[a[r]]=n[a[r]]||{},n=n[a[r]];if(i=a.pop(),1===arguments.length)return n[i]===t?null:n[i];n[i]=s}else{if(1===arguments.length)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,a){var n,r=this;"boolean"!=typeof i&&(a=s,s=i,i=!1),a?(s=n=e(s),this.bindings=this.bindings.add(s)):(a=s,s=this.element,n=this.widget()),e.each(a,function(a,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=a.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,d=l[2];d?n.delegate(d,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var a,n,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],n=i.originalEvent)for(a in n)a in i||(i[a]=n[a]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,a,n){"string"==typeof a&&(a={effect:a});var r,o=a?a===!0||"number"==typeof a?i:a.effect||i:t;a=a||{},"number"==typeof a&&(a={duration:a}),r=!e.isEmptyObject(a),a.complete=n,a.delay&&s.delay(a.delay),r&&e.effects&&e.effects.effect[o]?s[t](a):o!==t&&s[o]?s[o](a.duration,a.easing,n):s.queue(function(i){e(this)[t](),n&&n.call(s[0]),i()})}})})(jQuery);(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,a=1===i.which,n="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return a&&!n&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(e,t){function i(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function s(t,i){return parseInt(e.css(t,i),10)||0}function a(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,r=Math.max,o=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(n!==t)return n;var i,s,a=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=a.children()[0];return e("body").append(a),i=r.offsetWidth,a.css("overflow","scroll"),s=r.offsetWidth,i===s&&(s=a[0].clientWidth),a.remove(),n=i-s},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),a="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,n="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:n?e.position.scrollbarWidth():0,height:a?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),a=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:a,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return f.apply(this,arguments);t=e.extend({},t);var n,p,m,g,v,y,_=e(t.of),b=e.position.getWithinInfo(t.within),x=e.position.getScrollInfo(b),k=(t.collision||"flip").split(" "),w={};return y=a(_),_[0].preventDefault&&(t.at="left top"),p=y.width,m=y.height,g=y.offset,v=e.extend({},g),e.each(["my","at"],function(){var e,i,s=(t[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):u.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=u.test(s[1])?s[1]:"center",e=d.exec(s[0]),i=d.exec(s[1]),w[this]=[e?e[0]:0,i?i[0]:0],t[this]=[c.exec(s[0])[0],c.exec(s[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===t.at[0]?v.left+=p:"center"===t.at[0]&&(v.left+=p/2),"bottom"===t.at[1]?v.top+=m:"center"===t.at[1]&&(v.top+=m/2),n=i(w.at,p,m),v.left+=n[0],v.top+=n[1],this.each(function(){var a,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=s(this,"marginLeft"),y=s(this,"marginTop"),D=d+f+s(this,"marginRight")+x.width,T=c+y+s(this,"marginBottom")+x.height,M=e.extend({},v),S=i(w.my,u.outerWidth(),u.outerHeight());"right"===t.my[0]?M.left-=d:"center"===t.my[0]&&(M.left-=d/2),"bottom"===t.my[1]?M.top-=c:"center"===t.my[1]&&(M.top-=c/2),M.left+=S[0],M.top+=S[1],e.support.offsetFractions||(M.left=h(M.left),M.top=h(M.top)),a={marginLeft:f,marginTop:y},e.each(["left","top"],function(i,s){e.ui.position[k[i]]&&e.ui.position[k[i]][s](M,{targetWidth:p,targetHeight:m,elemWidth:d,elemHeight:c,collisionPosition:a,collisionWidth:D,collisionHeight:T,offset:[n[0]+S[0],n[1]+S[1]],my:t.my,at:t.at,within:b,elem:u})}),t.using&&(l=function(e){var i=g.left-M.left,s=i+p-d,a=g.top-M.top,n=a+m-c,h={target:{element:_,left:g.left,top:g.top,width:p,height:m},element:{element:u,left:M.left,top:M.top,width:d,height:c},horizontal:0>s?"left":i>0?"right":"center",vertical:0>n?"top":a>0?"bottom":"middle"};d>p&&p>o(i+s)&&(h.horizontal="center"),c>m&&m>o(a+n)&&(h.vertical="middle"),h.important=r(o(i),o(s))>r(o(a),o(n))?"horizontal":"vertical",t.using.call(this,e,h)}),u.offset(e.extend(M,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,a=s.isWindow?s.scrollLeft:s.offset.left,n=s.width,o=e.left-t.collisionPosition.marginLeft,h=a-o,l=o+t.collisionWidth-n-a;t.collisionWidth>n?h>0&&0>=l?(i=e.left+h+t.collisionWidth-n-a,e.left+=h-i):e.left=l>0&&0>=h?a:h>l?a+n-t.collisionWidth:a:h>0?e.left+=h:l>0?e.left-=l:e.left=r(e.left-o,e.left)},top:function(e,t){var i,s=t.within,a=s.isWindow?s.scrollTop:s.offset.top,n=t.within.height,o=e.top-t.collisionPosition.marginTop,h=a-o,l=o+t.collisionHeight-n-a;t.collisionHeight>n?h>0&&0>=l?(i=e.top+h+t.collisionHeight-n-a,e.top+=h-i):e.top=l>0&&0>=h?a:h>l?a+n-t.collisionHeight:a:h>0?e.top+=h:l>0?e.top-=l:e.top=r(e.top-o,e.top)}},flip:{left:function(e,t){var i,s,a=t.within,n=a.offset.left+a.scrollLeft,r=a.width,h=a.isWindow?a.scrollLeft:a.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-r-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-r-n,(0>i||o(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>o(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,a=t.within,n=a.offset.top+a.scrollTop,r=a.height,h=a.isWindow?a.scrollTop:a.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-r-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-r-n,e.top+p+f+m>u&&(0>s||o(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,e.top+p+f+m>d&&(i>0||d>o(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,a,n,r=document.getElementsByTagName("body")[0],o=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(n in s)t.style[n]=s[n];t.appendChild(o),i=r||document.documentElement,i.insertBefore(t,i.firstChild),o.style.cssText="position: absolute; left: 10.7432222px;",a=e(o).offset().left,e.support.offsetFractions=a>10&&11>a,t.innerHTML="",i.removeChild(t)}()})(jQuery);(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||e.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,a=this.options;return a.containment?"window"===a.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===a.containment?(this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):a.containment.constructor===Array?(this.containment=a.containment,undefined):("parent"===a.containment&&(a.containment=this.helper[0].parentNode),i=e(a.containment),s=i[0],s&&(t="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,a="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:a.scrollTop(),left:a.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(t){var i,s,a,n,r=this.options,o="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=t.pageX,l=t.pageY;return this.offset.scroll||(this.offset.scroll={top:o.scrollTop(),left:o.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),r.grid&&(a=r.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,l=i?a-this.offset.click.top>=i[1]||a-this.offset.click.top>i[3]?a:a-this.offset.click.top>=i[1]?a-r.grid[1]:a+r.grid[1]:a,n=r.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,h=i?n-this.offset.click.left>=i[0]||n-this.offset.click.left>i[2]?n:n-this.offset.click.left>=i[0]?n-r.grid[0]:n+r.grid[0]:n)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),a=s.options,n=e.extend({},i,{item:s.element});s.sortables=[],e(a.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i){var s=e(this).data("ui-draggable"),a=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,a))})},drag:function(t,i){var s=e(this).data("ui-draggable"),a=this;e.each(s.sortables,function(){var n=!1,r=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==r&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(r.instance.element[0],this.instance.element[0])&&(n=!1),n})),n?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(a).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),a=e(this).data("ui-draggable").options;s.css("opacity")&&(a._opacity=s.css("opacity")),s.css("opacity",a.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,a=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=a=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=a=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=a=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=a=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?a=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(a=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?a=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(a=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,a,n,r,o,h,l,u,d,c,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,y=i.offset.top,_=y+p.helperProportions.height;for(d=p.snapElements.length-1;d>=0;d--)o=p.snapElements[d].left,h=o+p.snapElements[d].width,l=p.snapElements[d].top,u=l+p.snapElements[d].height,o-m>v||g>h+m||l-m>_||y>u+m||!e.contains(p.snapElements[d].item.ownerDocument,p.snapElements[d].item)?(p.snapElements[d].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[d].item})),p.snapElements[d].snapping=!1):("inner"!==f.snapMode&&(s=m>=Math.abs(l-_),a=m>=Math.abs(u-y),n=m>=Math.abs(o-v),r=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),n&&(i.position.left=p._convertPositionTo("relative",{top:0,left:o-p.helperProportions.width}).left-p.margins.left),r&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),c=s||a||n||r,"outer"!==f.snapMode&&(s=m>=Math.abs(l-y),a=m>=Math.abs(u-_),n=m>=Math.abs(o-g),r=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),a&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.left=p._convertPositionTo("relative",{top:0,left:o}).left-p.margins.left),r&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[d].snapping&&(s||a||n||r||c)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[d].item})),p.snapElements[d].snapping=s||a||n||r||c)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),a=e(this).data("ui-draggable").options;s.css("zIndex")&&(a._zIndex=s.css("zIndex")),s.css("zIndex",a.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);(function(e){function t(e,t,i){return e>t&&t+i>e}e.widget("ui.droppable",{version:"1.10.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],undefined):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},e.ui.ddmanager.droppables[i.scope]=e.ui.ddmanager.droppables[i.scope]||[],e.ui.ddmanager.droppables[i.scope].push(this),i.addClasses&&this.element.addClass("ui-droppable")},_destroy:function(){for(var t=0,i=e.ui.ddmanager.droppables[this.options.scope];i.length>t;t++)i[t]===this&&i.splice(t,1);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){"accept"===t&&(this.accept=e.isFunction(i)?i:function(e){return e.is(i)}),e.Widget.prototype._setOption.apply(this,arguments)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,a=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=e.data(this,"ui-droppable");return t.options.greedy&&!t.options.disabled&&t.options.scope===s.options.scope&&t.accept.call(t.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(t,{offset:t.element.offset()}),t.options.tolerance)?(a=!0,!1):undefined}),a?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(e,i,s){if(!i.offset)return!1;var a,n,r=(e.positionAbs||e.position.absolute).left,o=(e.positionAbs||e.position.absolute).top,h=r+e.helperProportions.width,l=o+e.helperProportions.height,u=i.offset.left,d=i.offset.top,c=u+i.proportions().width,p=d+i.proportions().height;switch(s){case"fit":return r>=u&&c>=h&&o>=d&&p>=l;case"intersect":return r+e.helperProportions.width/2>u&&c>h-e.helperProportions.width/2&&o+e.helperProportions.height/2>d&&p>l-e.helperProportions.height/2;case"pointer":return a=(e.positionAbs||e.position.absolute).left+(e.clickOffset||e.offset.click).left,n=(e.positionAbs||e.position.absolute).top+(e.clickOffset||e.offset.click).top,t(n,d,i.proportions().height)&&t(a,u,i.proportions().width);case"touch":return(o>=d&&p>=o||l>=d&&p>=l||d>o&&l>p)&&(r>=u&&c>=r||h>=u&&c>=h||u>r&&h>c);default:return!1}},e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,a,n=e.ui.ddmanager.droppables[t.options.scope]||[],r=i?i.type:null,o=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;n.length>s;s++)if(!(n[s].options.disabled||t&&!n[s].accept.call(n[s].element[0],t.currentItem||t.element))){for(a=0;o.length>a;a++)if(o[a]===n[s].element[0]){n[s].proportions().height=0;continue e}n[s].visible="none"!==n[s].element.css("display"),n[s].visible&&("mousedown"===r&&n[s]._activate.call(n[s],i),n[s].offset=n[s].element.offset(),n[s].proportions({width:n[s].element[0].offsetWidth,height:n[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,a,n,r=e.ui.intersect(t,this,this.options.tolerance),o=!r&&this.isover?"isout":r&&!this.isover?"isover":null;o&&(this.options.greedy&&(a=this.options.scope,n=this.element.parents(":data(ui-droppable)").filter(function(){return e.data(this,"ui-droppable").options.scope===a}),n.length&&(s=e.data(n[0],"ui-droppable"),s.greedyChild="isover"===o)),s&&"isover"===o&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[o]=!0,this["isout"===o?"isover":"isout"]=!1,this["isover"===o?"_over":"_out"].call(this,i),s&&"isout"===o&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}}})(jQuery);(function(e){function t(e){return parseInt(e,10)||0}function i(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,s,a,n,r=this,o=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!o.aspectRatio,aspectRatio:o.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:o.helper||o.ghost||o.animate?o.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=o.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),n="ui-resizable-"+s,a=e("<div class='ui-resizable-handle "+n+"'></div>"),a.css({zIndex:o.zIndex}),"se"===s&&a.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(a);this._renderAxis=function(t){var i,s,a,n;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),n=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),a=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(a,n),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){r.resizing||(this.className&&(a=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),r.axis=a&&a[1]?a[1]:"se")}),o.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){o.disabled||(e(this).removeClass("ui-resizable-autohide"),r._handles.show())}).mouseleave(function(){o.disabled||r.resizing||(e(this).addClass("ui-resizable-autohide"),r._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,a=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(a=!0);return!this.options.disabled&&a},_mouseStart:function(i){var s,a,n,r=this.options,o=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:o.top,left:o.left}),this._renderProxy(),s=t(this.helper.css("left")),a=t(this.helper.css("top")),r.containment&&(s+=e(r.containment).scrollLeft()||0,a+=e(r.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:a},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:a},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof r.aspectRatio?r.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var i,s=this.helper,a={},n=this.originalMousePosition,r=this.axis,o=this.position.top,h=this.position.left,l=this.size.width,u=this.size.height,d=t.pageX-n.left||0,c=t.pageY-n.top||0,p=this._change[r];return p?(i=p.apply(this,[t,d,c]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==o&&(a.top=this.position.top+"px"),this.position.left!==h&&(a.left=this.position.left+"px"),this.size.width!==l&&(a.width=this.size.width+"px"),this.size.height!==u&&(a.height=this.size.height+"px"),s.css(a),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(a)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,a,n,r,o,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),a=s&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,n=s?0:u.sizeDiff.width,r={width:u.helper.width()-n,height:u.helper.height()-a},o=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(r,{top:h,left:o})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,s,a,n,r,o=this.options;r={minWidth:i(o.minWidth)?o.minWidth:0,maxWidth:i(o.maxWidth)?o.maxWidth:1/0,minHeight:i(o.minHeight)?o.minHeight:0,maxHeight:i(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=r.minHeight*this.aspectRatio,a=r.minWidth/this.aspectRatio,s=r.maxHeight*this.aspectRatio,n=r.maxWidth/this.aspectRatio,t>r.minWidth&&(r.minWidth=t),a>r.minHeight&&(r.minHeight=a),r.maxWidth>s&&(r.maxWidth=s),r.maxHeight>n&&(r.maxHeight=n)),this._vBoundaries=r},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,s=this.size,a=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===a&&(e.left=t.left+(s.width-e.width),e.top=null),"nw"===a&&(e.top=t.top+(s.height-e.height),e.left=t.left+(s.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,s=this.axis,a=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,r=i(e.width)&&t.minWidth&&t.minWidth>e.width,o=i(e.height)&&t.minHeight&&t.minHeight>e.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(s),d=/nw|ne|n/.test(s);return r&&(e.width=t.minWidth),o&&(e.height=t.minHeight),a&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),r&&u&&(e.left=h-t.minWidth),a&&u&&(e.left=h-t.maxWidth),o&&d&&(e.top=l-t.minHeight),n&&d&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,s,a,n=this.helper||this.element;for(e=0;this._proportionallyResizeElements.length>e;e++){if(a=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[a.css("borderTopWidth"),a.css("borderRightWidth"),a.css("borderBottomWidth"),a.css("borderLeftWidth")],s=[a.css("paddingTop"),a.css("paddingRight"),a.css("paddingBottom"),a.css("paddingLeft")],t=0;i.length>t;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(s[t],10)||0);a.css({height:n.height()-this.borderDif[0]-this.borderDif[2]||0,width:n.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,a=this.originalPosition;return{top:a.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),s=i.options,a=i._proportionallyResizeElements,n=a.length&&/textarea/i.test(a[0].nodeName),r=n&&e.ui.hasScroll(a[0],"left")?0:i.sizeDiff.height,o=n?0:i.sizeDiff.width,h={width:i.size.width-o,height:i.size.height-r},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};a&&a.length&&e(a[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,s,a,n,r,o,h,l=e(this).data("ui-resizable"),u=l.options,d=l.element,c=u.containment,p=c instanceof e?c.get(0):/parent/.test(c)?d.parent().get(0):c;p&&(l.containerElement=e(p),/document/.test(c)||c===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(p),s=[],e(["Top","Right","Left","Bottom"]).each(function(e,a){s[e]=t(i.css("padding"+a))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},a=l.containerOffset,n=l.containerSize.height,r=l.containerSize.width,o=e.ui.hasScroll(p,"left")?p.scrollWidth:r,h=e.ui.hasScroll(p)?p.scrollHeight:n,l.parentData={element:p,left:a.left,top:a.top,width:o,height:h}))},resize:function(t){var i,s,a,n,r=e(this).data("ui-resizable"),o=r.options,h=r.containerOffset,l=r.position,u=r._aspectRatio||t.shiftKey,d={top:0,left:0},c=r.containerElement;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(r._helper?h.left:0)&&(r.size.width=r.size.width+(r._helper?r.position.left-h.left:r.position.left-d.left),u&&(r.size.height=r.size.width/r.aspectRatio),r.position.left=o.helper?h.left:0),l.top<(r._helper?h.top:0)&&(r.size.height=r.size.height+(r._helper?r.position.top-h.top:r.position.top),u&&(r.size.width=r.size.height*r.aspectRatio),r.position.top=r._helper?h.top:0),r.offset.left=r.parentData.left+r.position.left,r.offset.top=r.parentData.top+r.position.top,i=Math.abs((r._helper?r.offset.left-d.left:r.offset.left-d.left)+r.sizeDiff.width),s=Math.abs((r._helper?r.offset.top-d.top:r.offset.top-h.top)+r.sizeDiff.height),a=r.containerElement.get(0)===r.element.parent().get(0),n=/relative|absolute/.test(r.containerElement.css("position")),a&&n&&(i-=Math.abs(r.parentData.left)),i+r.size.width>=r.parentData.width&&(r.size.width=r.parentData.width-i,u&&(r.size.height=r.size.width/r.aspectRatio)),s+r.size.height>=r.parentData.height&&(r.size.height=r.parentData.height-s,u&&(r.size.width=r.size.height*r.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.containerOffset,a=t.containerPosition,n=t.containerElement,r=e(t.helper),o=r.offset(),h=r.outerWidth()-t.sizeDiff.width,l=r.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(n.css("position"))&&e(this).css({left:o.left-a.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(n.css("position"))&&e(this).css({left:o.left-a.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).data("ui-resizable"),a=s.options,n=s.originalSize,r=s.originalPosition,o={height:s.size.height-n.height||0,width:s.size.width-n.width||0,top:s.position.top-r.top||0,left:s.position.left-r.left||0},h=function(t,s){e(t).each(function(){var t=e(this),a=e(this).data("ui-resizable-alsoresize"),n={},r=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(r,function(e,t){var i=(a[t]||0)+(o[t]||0);i&&i>=0&&(n[t]=i||null)}),t.css(n)})};"object"!=typeof a.alsoResize||a.alsoResize.nodeType?h(a.alsoResize):e.each(a.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size,a=t.originalSize,n=t.originalPosition,r=t.axis,o="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=o[0]||1,l=o[1]||1,u=Math.round((s.width-a.width)/h)*h,d=Math.round((s.height-a.height)/l)*l,c=a.width+u,p=a.height+d,f=i.maxWidth&&c>i.maxWidth,m=i.maxHeight&&p>i.maxHeight,g=i.minWidth&&i.minWidth>c,v=i.minHeight&&i.minHeight>p;i.grid=o,g&&(c+=h),v&&(p+=l),f&&(c-=h),m&&(p-=l),/^(se|s|e)$/.test(r)?(t.size.width=c,t.size.height=p):/^(ne)$/.test(r)?(t.size.width=c,t.size.height=p,t.position.top=n.top-d):/^(sw)$/.test(r)?(t.size.width=c,t.size.height=p,t.position.left=n.left-u):(p-l>0?(t.size.height=p,t.position.top=n.top-d):(t.size.height=l,t.position.top=n.top+a.height-l),c-h>0?(t.size.width=c,t.position.left=n.left-u):(t.size.width=h,t.position.left=n.left+a.width-h))}})})(jQuery);(function(e){function t(e,t,i){return e>t&&t+i>e}function i(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===e.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,i){"disabled"===t?(this.options[t]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,i){var s=null,a=!1,n=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,n.widgetName+"-item")===n?(s=e(this),!1):undefined}),e.data(t.target,n.widgetName+"-item")===n&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(a=!0)}),a)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var a,n,r=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,r.cursorAt&&this._adjustOffsetFromHelper(r.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),r.containment&&this._setContainment(),r.cursor&&"auto"!==r.cursor&&(n=this.document.find("body"),this.storedCursor=n.css("cursor"),n.css("cursor",r.cursor),this.storedStylesheet=e("<style>*{ cursor: "+r.cursor+" !important; }</style>").appendTo(n)),r.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",r.opacity)),r.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",r.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(a=this.containers.length-1;a>=0;a--)this.containers[a]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,a,n,r=this.options,o=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<r.scrollSensitivity?this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop+r.scrollSpeed:t.pageY-this.overflowOffset.top<r.scrollSensitivity&&(this.scrollParent[0].scrollTop=o=this.scrollParent[0].scrollTop-r.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<r.scrollSensitivity?this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft+r.scrollSpeed:t.pageX-this.overflowOffset.left<r.scrollSensitivity&&(this.scrollParent[0].scrollLeft=o=this.scrollParent[0].scrollLeft-r.scrollSpeed)):(t.pageY-e(document).scrollTop()<r.scrollSensitivity?o=e(document).scrollTop(e(document).scrollTop()-r.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<r.scrollSensitivity&&(o=e(document).scrollTop(e(document).scrollTop()+r.scrollSpeed)),t.pageX-e(document).scrollLeft()<r.scrollSensitivity?o=e(document).scrollLeft(e(document).scrollLeft()-r.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<r.scrollSensitivity&&(o=e(document).scrollLeft(e(document).scrollLeft()+r.scrollSpeed))),o!==!1&&e.ui.ddmanager&&!r.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],a=s.item[0],n=this._intersectsWithPointer(s),n&&s.instance===this.currentContainer&&a!==this.currentItem[0]&&this.placeholder[1===n?"next":"prev"]()[0]!==a&&!e.contains(this.placeholder[0],a)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],a):!0)){if(this.direction=1===n?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,a=this.placeholder.offset(),n=this.options.axis,r={};n&&"x"!==n||(r.left=a.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),n&&"y"!==n||(r.top=a.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(r,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,a=s+this.helperProportions.height,n=e.left,r=n+e.width,o=e.top,h=o+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>o&&h>s+l,c="y"===this.options.axis||t+u>n&&r>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>n&&r>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>o&&h>a-this.helperProportions.height/2},_intersectsWithPointer:function(e){var i="x"===this.options.axis||t(this.positionAbs.top+this.offset.click.top,e.top,e.height),s="y"===this.options.axis||t(this.positionAbs.left+this.offset.click.left,e.left,e.width),a=i&&s,n=this._getDragVerticalDirection(),r=this._getDragHorizontalDirection();return a?this.floating?r&&"right"===r||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var i=t(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),s=t(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),a=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&s||"left"===n&&!s:a&&("down"===a&&i||"up"===a&&!i)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){o.push(this)}var s,a,n,r,o=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(n=e(l[s]),a=n.length-1;a>=0;a--)r=e.data(n[a],this.widgetFullName),r&&r!==this&&!r.options.disabled&&h.push([e.isFunction(r.options.items)?r.options.items.call(r.element):e(r.options.items,r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),r]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(o)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,a,n,r,o,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(a=e(c[i]),s=a.length-1;s>=0;s--)n=e.data(a[s],this.widgetFullName),n&&n!==this&&!n.options.disabled&&(d.push([e.isFunction(n.options.items)?n.options.items.call(n.element[0],t,{item:this.currentItem}):e(n.options.items,n.element),n]),this.containers.push(n));for(i=d.length-1;i>=0;i--)for(r=d[i][1],o=d[i][0],s=0,l=o.length;l>s;s++)h=e(o[s]),h.data(this.widgetName+"-item",r),u.push({item:h,instance:r,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,a,n;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(a=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=a.outerWidth(),s.height=a.outerHeight()),n=a.offset(),s.left=n.left,s.top=n.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)n=this.containers[i].element.offset(),this.containers[i].containerCache.left=n.left,this.containers[i].containerCache.top=n.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),a=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(a)}):"img"===s&&a.attr("src",t.currentItem.attr("src")),i||a.css("visibility","hidden"),a},update:function(e,a){(!i||s.forcePlaceholderSize)&&(a.height()||a.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),a.width()||a.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_contactContainers:function(s){var a,n,r,o,h,l,u,d,c,p,f=null,m=null;for(a=this.containers.length-1;a>=0;a--)if(!e.contains(this.currentItem[0],this.containers[a].element[0]))if(this._intersectsWith(this.containers[a].containerCache)){if(f&&e.contains(this.containers[a].element[0],f.element[0]))continue;f=this.containers[a],m=a}else this.containers[a].containerCache.over&&(this.containers[a]._trigger("out",s,this._uiHash(this)),this.containers[a].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[m].containerCache.over||(this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1);else{for(r=1e4,o=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",u=this.positionAbs[h]+this.offset.click[h],n=this.items.length-1;n>=0;n--)e.contains(this.containers[m].element[0],this.items[n].item[0])&&this.items[n].item[0]!==this.currentItem[0]&&(!p||t(this.positionAbs.top+this.offset.click.top,this.items[n].top,this.items[n].height))&&(d=this.items[n].item.offset()[h],c=!1,Math.abs(d-u)>Math.abs(d+this.items[n][l]-u)&&(c=!0,d+=this.items[n][l]),r>Math.abs(d-u)&&(r=Math.abs(d-u),o=this.items[n],this.direction=c?"up":"down"));if(!o&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[m])return;o?this._rearrange(s,o,null,!0):this._rearrange(s,null,this.containers[m].element,!0),this._trigger("change",s,this._uiHash()),this.containers[m]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[m],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,a=this.options;"parent"===a.containment&&(a.containment=this.helper[0].parentNode),("document"===a.containment||"window"===a.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e("document"===a.containment?document:window).width()-this.helperProportions.width-this.margins.left,(e("document"===a.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(a.containment)||(t=e(a.containment)[0],i=e(a.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,a="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,n=/(html|body)/i.test(a[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():n?0:a.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():n?0:a.scrollLeft())*s}},_generatePosition:function(t){var i,s,a=this.options,n=t.pageX,r=t.pageY,o="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(o[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(n=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(r=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(n=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(r=this.containment[3]+this.offset.click.top)),a.grid&&(i=this.originalPageY+Math.round((r-this.originalPageY)/a.grid[1])*a.grid[1],r=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-a.grid[1]:i+a.grid[1]:i,s=this.originalPageX+Math.round((n-this.originalPageX)/a.grid[0])*a.grid[0],n=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-a.grid[0]:s+a.grid[0]:s)),{top:r-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:o.scrollTop()),left:n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:o.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var a=this.counter;this._delay(function(){a===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,a=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&a.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||a.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(a.push(function(e){this._trigger("remove",e,this._uiHash())}),a.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),a.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||a.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(a.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!t){for(this._trigger("beforeStop",e,this._uiHash()),s=0;a.length>s;s++)a[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!1}if(t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!t){for(s=0;a.length>s;s++)a[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}})})(jQuery);(function(e){e.widget("ui.autocomplete",{version:"1.10.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,a=this.element[0].nodeName.toLowerCase(),n="textarea"===a,r="input"===a;this.isMultiLine=n?!0:r?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[n||r?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(a){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,undefined;t=!1,s=!1,i=!1;var n=e.ui.keyCode;switch(a.keyCode){case n.PAGE_UP:t=!0,this._move("previousPage",a);break;case n.PAGE_DOWN:t=!0,this._move("nextPage",a);break;case n.UP:t=!0,this._keyEvent("previous",a);break;case n.DOWN:t=!0,this._keyEvent("next",a);break;case n.ENTER:case n.NUMPAD_ENTER:this.menu.active&&(t=!0,a.preventDefault(),this.menu.select(a));break;case n.TAB:this.menu.active&&this.menu.select(a);break;case n.ESCAPE:this.menu.element.is(":visible")&&(this._value(this.term),this.close(a),a.preventDefault());break;default:i=!0,this._searchTimeout(a)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),undefined;if(!i){var a=e.ui.keyCode;switch(s.keyCode){case a.PAGE_UP:this._move("previousPage",s);break;case a.PAGE_DOWN:this._move("nextPage",s);break;case a.UP:this._keyEvent("previous",s);break;case a.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),undefined):(this._searchTimeout(e),undefined)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,undefined):(clearTimeout(this.searching),this.close(e),this._change(e),undefined)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().data("ui-menu"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),undefined;var s=i.item.data("ui-autocomplete-item");!1!==this._trigger("focus",t,{item:s})?t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(s.value):this.liveRegion.text(s.value)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertBefore(this.element),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,a){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){a(e)},error:function(){a([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){this.term!==this._value()&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):undefined},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({label:t.label||t.value,value:t.value||t.label},t)})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").append(e("<a>").text(i.label)).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this._value(this.term),this.menu.blur(),undefined):(this.menu[e](t),undefined):(this.search(null,t),undefined)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){var t;this._superApply(arguments),this.options.disabled||this.cancelSearch||(t=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.text(t))}})})(jQuery);(function(e){var t,i="ui-button ui-widget ui-state-default ui-corner-all",s="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",a=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},n=function(t){var i=t.name,s=t.form,a=e([]);return i&&(i=i.replace(/'/g,"\\'"),a=s?e(s).find("[name='"+i+"']"):e("[name='"+i+"']",t.ownerDocument).filter(function(){return!this.form})),a};e.widget("ui.button",{version:"1.10.4",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,a),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var s=this,r=this.options,o="checkbox"===this.type||"radio"===this.type,h=o?"":"ui-state-active";null===r.label&&(r.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(i).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){r.disabled||this===t&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){r.disabled||e(this).removeClass(h)}).bind("click"+this.eventNamespace,function(e){r.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),o&&this.element.bind("change"+this.eventNamespace,function(){s.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return r.disabled?!1:undefined}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(r.disabled)return!1;e(this).addClass("ui-state-active"),s.buttonElement.attr("aria-pressed","true");var t=s.element[0];n(t).not(t).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return r.disabled?!1:(e(this).addClass("ui-state-active"),t=this,s.document.one("mouseup",function(){t=null}),undefined)}).bind("mouseup"+this.eventNamespace,function(){return r.disabled?!1:(e(this).removeClass("ui-state-active"),undefined)}).bind("keydown"+this.eventNamespace,function(t){return r.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),undefined)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",r.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(i+" ui-state-active "+s).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.element.prop("disabled",!!t),t&&this.buttonElement.removeClass("ui-state-focus"),undefined):(this._resetButton(),undefined)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?n(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),undefined;var t=this.buttonElement.removeClass(s),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),a=this.options.icons,n=a.primary&&a.secondary,r=[];a.primary||a.secondary?(this.options.text&&r.push("ui-button-text-icon"+(n?"s":a.primary?"-primary":"-secondary")),a.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+a.primary+"'></span>"),a.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+a.secondary+"'></span>"),this.options.text||(r.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):r.push("ui-button-text-only"),t.addClass(r.join(" "))}}),e.widget("ui.buttonset",{version:"1.10.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction");this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}})})(jQuery);(function(e){var t={buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},i={maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0};e.widget("ui.dialog",{version:"1.10.4",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._destroyOverlay(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&e(i).blur()}catch(a){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,t){var i=!!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;return i&&!t&&this._trigger("focus",e),i},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),undefined):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._trigger("open"),undefined)},_focusTabbable:function(){var e=this.element.find("[autofocus]");e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(),this.close(t),undefined;if(t.keyCode===e.ui.keyCode.TAB){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),a=i.filter(":last");t.target!==a[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==s[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(a.focus(1),t.preventDefault()):(s.focus(1),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(i)||e.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),undefined):(e.each(i,function(i,s){var a,n;s=e.isFunction(s)?{click:s,text:i}:s,s=e.extend({type:"button"},s),a=s.click,s.click=function(){a.apply(t.element[0],arguments)},n={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,e("<button></button>",s).button(n).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),undefined)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,a){e(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,t(a))},drag:function(e,s){i._trigger("drag",e,t(s))},stop:function(a,n){s.position=[n.position.left-i.document.scrollLeft(),n.position.top-i.document.scrollTop()],e(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",a,t(n))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var i=this,s=this.options,a=s.resizable,n=this.uiDialog.css("position"),r="string"==typeof a?a:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:r,start:function(s,a){e(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,t(a))},resize:function(e,s){i._trigger("resize",e,t(s))},stop:function(a,n){s.height=e(this).height(),s.width=e(this).width(),e(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",a,t(n))}}).css("position",n)},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(s){var a=this,n=!1,r={};e.each(s,function(e,s){a._setOption(e,s),e in t&&(n=!0),e in i&&(r[e]=s)}),n&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",r)},_setOption:function(e,t){var i,s,a=this.uiDialog;"dialogClass"===e&&a.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(i=a.is(":data(ui-draggable)"),i&&!t&&a.draggable("destroy"),!i&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(s=a.is(":data(ui-resizable)"),s&&!t&&a.resizable("destroy"),s&&"string"==typeof t&&a.resizable("option","handles",t),s||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),e=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),t=Math.max(0,s.minHeight-e),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-e):"none","auto"===s.height?this.element.css({minHeight:t,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=this,i=this.widgetFullName;e.ui.dialog.overlayInstances||this._delay(function(){e.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(s){t._allowInteraction(s)||(s.preventDefault(),e(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())})}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),e.ui.dialog.overlayInstances++}},_destroyOverlay:function(){this.options.modal&&this.overlay&&(e.ui.dialog.overlayInstances--,e.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.overlay.remove(),this.overlay=null)}}),e.ui.dialog.overlayInstances=0,e.uiBackCompat!==!1&&e.widget("ui.dialog",e.ui.dialog,{_position:function(){var t,i=this.options.position,s=[],a=[0,0];i?(("string"==typeof i||"object"==typeof i&&"0"in i)&&(s=i.split?i.split(" "):[i[0],i[1]],1===s.length&&(s[1]=s[0]),e.each(["left","top"],function(e,t){+s[e]===s[e]&&(a[e]=s[e],s[e]=t)}),i={my:s[0]+(0>a[0]?a[0]:"+"+a[0])+" "+s[1]+(0>a[1]?a[1]:"+"+a[1]),at:s.join(" ")}),i=e.extend({},e.ui.dialog.prototype.options.position,i)):i=e.ui.dialog.prototype.options.position,t=this.uiDialog.is(":visible"),t||this.uiDialog.show(),this.uiDialog.position(i),t||this.uiDialog.hide()}})})(jQuery);(function(e){e.widget("ui.menu",{version:"1.10.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,e.proxy(function(e){this.options.disabled&&e.preventDefault()},this)),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item > a":function(e){e.preventDefault()},"click .ui-state-disabled > a":function(e){e.preventDefault()},"click .ui-menu-item:has(a)":function(t){var i=e(t.target).closest(".ui-menu-item");!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){var i=e(t.currentTarget);i.siblings().children(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.children(".ui-menu-item").eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){e(t.target).closest(".ui-menu").length||this.collapseAll(t),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){function i(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}var s,a,n,r,o,h=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:h=!1,a=this.previousFilter||"",n=String.fromCharCode(t.keyCode),r=!1,clearTimeout(this.filterTimer),n===a?r=!0:n=a+n,o=RegExp("^"+i(n),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())}),s=r&&-1!==s.index(this.active.next())?this.active.nextAll(".ui-menu-item"):s,s.length||(n=String.fromCharCode(t.keyCode),o=RegExp("^"+i(n),"i"),s=this.activeMenu.children(".ui-menu-item").filter(function(){return o.test(e(this).children("a").text())})),s.length?(this.focus(t,s),s.length>1?(this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter):delete this.previousFilter}h&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.children("a[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var t,i=this.options.icons.submenu,s=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),s=t.prev("a"),a=e("<span>").addClass("ui-menu-icon ui-icon "+i).data("ui-menu-submenu-carat",!0);s.attr("aria-haspopup","true").prepend(a),t.attr("aria-labelledby",s.attr("id"))}),t=s.add(this.element),t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()}),t.children(":not(.ui-menu-item)").each(function(){var t=e(this);/[^\-\u2014\u2013\s]/.test(t.text())||t.addClass("ui-widget-content ui-menu-divider")}),t.children(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.children("a").addClass("ui-state-focus"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,a,n,r,o;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,a=t.offset().top-this.activeMenu.offset().top-i-s,n=this.activeMenu.scrollTop(),r=this.activeMenu.height(),o=t.height(),0>a?this.activeMenu.scrollTop(n+a):a+o>r&&this.activeMenu.scrollTop(n+a-r+o))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.children("a").removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.children(".ui-menu-item")[t]()),this.focus(i,s)},nextPage:function(t){var i,s,a;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,a=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-a}),this.focus(t,i)):this.focus(t,this.activeMenu.children(".ui-menu-item")[this.active?"last":"first"]())),undefined):(this.next(t),undefined)},previousPage:function(t){var i,s,a;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,a=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+a>0}),this.focus(t,i)):this.focus(t,this.activeMenu.children(".ui-menu-item").first())),undefined):(this.next(t),undefined)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)}})})(jQuery);(function(e){var t=5;e.widget("ui.slider",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,a=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),n="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",r=[];for(i=s.values&&s.values.length||1,a.length>i&&(a.slice(i).remove(),a=a.slice(0,i)),t=a.length;i>t;t++)r.push(n);this.handles=a.add(e(r.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var e=this.handles.add(this.range).filter("a");this._off(e),this._on(e,this._handleEvents),this._hoverable(e),this._focusable(e)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,a,n,r,o,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),a=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(a>i||a===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(a=i,n=e(this),r=t)}),o=this._start(t,r),o===!1?!1:(this._mouseSliding=!0,this._handleIndex=r,n.addClass("ui-state-active").focus(),h=n.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-n.width()/2,top:t.pageY-h.top-n.height()/2-(parseInt(n.css("borderTopWidth"),10)||0)-(parseInt(n.css("borderBottomWidth"),10)||0)+(parseInt(n.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,r,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,a,n;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),a=this._valueMax()-this._valueMin(),n=this._valueMin()+s*a,this._trimAlignValue(n)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,a,n;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(a=this.values(),a[t]=i,n=this._trigger("slide",e,{handle:this.handles[t],value:i,values:a}),s=this.values(t?0:1),n!==!1&&this.values(t,i))):i!==this.value()&&(n=this._trigger("slide",e,{handle:this.handles[t],value:i}),n!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(t,i){var s,a,n;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),undefined;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,a=arguments[0],n=0;s.length>n;n+=1)s[n]=this._trimAlignValue(a[n]),this._change(null,n);this._refreshValue()},_setOption:function(t,i){var s,a=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(a=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;a>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,i,s,a,n,r=this.options.range,o=this.options,h=this,l=this._animateOff?!1:o.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,o.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},o.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:o.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},o.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:o.animate}))),t=i}):(s=this.value(),a=this._valueMin(),n=this._valueMax(),i=n!==a?100*((s-a)/(n-a)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,o.animate),"min"===r&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},o.animate),"max"===r&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:o.animate}),"min"===r&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},o.animate),"max"===r&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:o.animate}))},_handleEvents:{keydown:function(i){var s,a,n,r,o=e(i.target).data("ui-slider-handle-index");switch(i.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(i.target).addClass("ui-state-active"),s=this._start(i,o),s===!1))return}switch(r=this.options.step,a=n=this.options.values&&this.options.values.length?this.values(o):this.value(),i.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(a+(this._valueMax()-this._valueMin())/t);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(a-(this._valueMax()-this._valueMin())/t);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(a===this._valueMax())return;n=this._trimAlignValue(a+r);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(a===this._valueMin())return;n=this._trimAlignValue(a-r)}this._slide(i,o,n)},click:function(e){e.preventDefault()},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}})})(jQuery);(function(e,t){function i(){return++a}function s(e){return e=e.cloneNode(!1),e.hash.length>1&&decodeURIComponent(e.href.replace(n,""))===decodeURIComponent(location.href.replace(n,""))}var a=0,n=/#.*$/;e.widget("ui.tabs",{version:"1.10.4",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var t=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this._processTabs(),i.active=this._initialActive(),e.isArray(i.disabled)&&(i.disabled=e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):e(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var i=this.options.active,s=this.options.collapsible,a=location.hash.substring(1);return null===i&&(a&&this.tabs.each(function(s,n){return e(n).attr("aria-controls")===a?(i=s,!1):t}),null===i&&(i=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===i||-1===i)&&(i=this.tabs.length?0:!1)),i!==!1&&(i=this.tabs.index(this.tabs.eq(i)),-1===i&&(i=s?!1:0)),!s&&i===!1&&this.anchors.length&&(i=0),i},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(i){var s=e(this.document[0].activeElement).closest("li"),a=this.tabs.index(s),n=!0;if(!this._handlePageNav(i)){switch(i.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:a++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:n=!1,a--;break;case e.ui.keyCode.END:a=this.anchors.length-1;break;case e.ui.keyCode.HOME:a=0;break;case e.ui.keyCode.SPACE:return i.preventDefault(),clearTimeout(this.activating),this._activate(a),t;case e.ui.keyCode.ENTER:return i.preventDefault(),clearTimeout(this.activating),this._activate(a===this.options.active?!1:a),t;default:return}i.preventDefault(),clearTimeout(this.activating),a=this._focusNextTab(a,n),i.ctrlKey||(s.attr("aria-selected","false"),this.tabs.eq(a).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",a)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(i){return i.altKey&&i.keyCode===e.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):i.altKey&&i.keyCode===e.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):t},_findNextTab:function(t,i){function s(){return t>a&&(t=0),0>t&&(t=a),t}for(var a=this.tabs.length-1;-1!==e.inArray(s(),this.options.disabled);)t=i?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,i){return"active"===e?(this._activate(i),t):"disabled"===e?(this._setupDisabled(i),t):(this._super(e,i),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",i),i||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(i),"heightStyle"===e&&this._setupHeightStyle(i),t)},_tabId:function(e){return e.attr("aria-controls")||"ui-tabs-"+i()},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=e.map(i.filter(".ui-state-disabled"),function(e){return i.index(e)}),this._processTabs(),t.active!==!1&&this.anchors.length?this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=e()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist"),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(i,a){var n,r,o,h=e(a).uniqueId().attr("id"),l=e(a).closest("li"),u=l.attr("aria-controls");s(a)?(n=a.hash,r=t.element.find(t._sanitizeSelector(n))):(o=t._tabId(l),n="#"+o,r=t.element.find(n),r.length||(r=t._createPanel(o),r.insertAfter(t.panels[i-1]||t.tablist)),r.attr("aria-live","polite")),r.length&&(t.panels=t.panels.add(r)),u&&l.data("ui-tabs-aria-controls",u),l.attr({"aria-controls":n.substring(1),"aria-labelledby":h}),r.attr("aria-labelledby",h)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i,s=0;i=this.tabs[s];s++)t===!0||-1!==e.inArray(s,t)?e(i).addClass("ui-state-disabled").attr("aria-disabled","true"):e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={click:function(e){e.preventDefault()}};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,s=this.element.parent();"fill"===t?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),s=t.css("position");"absolute"!==s&&"fixed"!==s&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,e(this).height("").height())}).height(i))},_eventHandler:function(t){var i=this.options,s=this.active,a=e(t.currentTarget),n=a.closest("li"),r=n[0]===s[0],o=r&&i.collapsible,h=o?e():this._getPanelForTab(n),l=s.length?this._getPanelForTab(s):e(),u={oldTab:s,oldPanel:l,newTab:o?e():n,newPanel:h};t.preventDefault(),n.hasClass("ui-state-disabled")||n.hasClass("ui-tabs-loading")||this.running||r&&!i.collapsible||this._trigger("beforeActivate",t,u)===!1||(i.active=o?!1:this.tabs.index(n),this.active=r?e():n,this.xhr&&this.xhr.abort(),l.length||h.length||e.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(n),t),this._toggle(t,u))},_toggle:function(t,i){function s(){n.running=!1,n._trigger("activate",t,i)}function a(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),r.length&&n.options.show?n._show(r,n.options.show,s):(r.show(),s())}var n=this,r=i.newPanel,o=i.oldPanel;this.running=!0,o.length&&this.options.hide?this._hide(o,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),a()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),o.hide(),a()),o.attr({"aria-expanded":"false","aria-hidden":"true"}),i.oldTab.attr("aria-selected","false"),r.length&&o.length?i.oldTab.attr("tabIndex",-1):r.length&&this.tabs.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),r.attr({"aria-expanded":"true","aria-hidden":"false"}),i.newTab.attr({"aria-selected":"true",tabIndex:0})},_activate:function(t){var i,s=this._findActive(t);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(i){var s=this.options.disabled;s!==!1&&(i===t?s=!1:(i=this._getIndex(i),s=e.isArray(s)?e.map(s,function(e){return e!==i?e:null}):e.map(this.tabs,function(e,t){return t!==i?t:null})),this._setupDisabled(s))},disable:function(i){var s=this.options.disabled;if(s!==!0){if(i===t)s=!0;else{if(i=this._getIndex(i),-1!==e.inArray(i,s))return;s=e.isArray(s)?e.merge([i],s).sort():[i]}this._setupDisabled(s)}},load:function(t,i){t=this._getIndex(t);var a=this,n=this.tabs.eq(t),r=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),h={tab:n,panel:o};s(r[0])||(this.xhr=e.ajax(this._ajaxSettings(r,i,h)),this.xhr&&"canceled"!==this.xhr.statusText&&(n.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){o.html(e),a._trigger("load",i,h)},1)}).complete(function(e,t){setTimeout(function(){"abort"===t&&a.panels.stop(!1,!0),n.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),e===a.xhr&&delete a.xhr},1)})))},_ajaxSettings:function(t,i,s){var a=this;return{url:t.attr("href"),beforeSend:function(t,n){return a._trigger("beforeLoad",i,e.extend({jqXHR:t,ajaxSettings:n},s))}}},_getPanelForTab:function(t){var i=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}})})(jQuery);(function(e,t){var i="ui-effects-";e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),a=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,n){var r,o=n.re.exec(i),h=o&&n.parse(o),l=n.space||"rgba";return h?(r=s[l](h),s[u[l].cache]=r[u[l].cache],a=s._rgba=r._rgba,!1):t}),a.length?("0,0,0,0"===a.join()&&e.extend(a,n.transparent),s):n[i]}function a(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var n,r="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",o=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,a){return new e.Color.fn.parse(t,i,s,a)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(a,r,o,h){if(a===t)return this._rgba=[null,null,null,null],this;(a.jquery||a.nodeType)&&(a=e(a).css(r),r=t);var d=this,c=e.type(a),p=this._rgba=[];return r!==t&&(a=[a,r,o,h],c="array"),"string"===c?this.parse(s(a)||n._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(a[t.idx],t)}),this):"object"===c?(a instanceof l?f(u,function(e,t){a[t.cache]&&(d[t.cache]=a[t.cache].slice())}):f(u,function(t,s){var n=s.cache;f(s.props,function(e,t){if(!d[n]&&s.to){if("alpha"===e||null==a[e])return;d[n]=s.to(d._rgba)}d[n][t.idx]=i(a[e],t,!0)}),d[n]&&0>e.inArray(null,d[n].slice(0,3))&&(d[n][3]=1,s.from&&(d._rgba=s.from(d[n])))}),this):t},is:function(e){var i=l(e),s=!0,a=this;return f(u,function(e,n){var r,o=i[n.cache];return o&&(r=a[n.cache]||n.to&&n.to(a._rgba)||[],f(n.props,function(e,i){return null!=o[i.idx]?s=o[i.idx]===r[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),a=s._space(),n=u[a],r=0===this.alpha()?l("transparent"):this,o=r[n.cache]||n.to(r._rgba),h=o.slice();return s=s[n.cache],f(n.props,function(e,a){var n=a.idx,r=o[n],l=s[n],u=d[a.type]||{};null!==l&&(null===r?h[n]=l:(u.mod&&(l-r>u.mod/2?r+=u.mod:r-l>u.mod/2&&(r-=u.mod)),h[n]=i((l-r)*t+r,a)))}),this[a](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),a=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*a[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,a=e[1]/255,n=e[2]/255,r=e[3],o=Math.max(s,a,n),h=Math.min(s,a,n),l=o-h,u=o+h,d=.5*u;return t=h===o?0:s===o?60*(a-n)/l+360:a===o?60*(n-s)/l+120:60*(s-a)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==r?1:r]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],n=e[3],r=.5>=s?s*(1+i):s+i-s*i,o=2*s-r;return[Math.round(255*a(o,r,t+1/3)),Math.round(255*a(o,r,t)),Math.round(255*a(o,r,t-1/3)),n]},f(u,function(s,a){var n=a.props,r=a.cache,h=a.to,u=a.from;l.fn[s]=function(s){if(h&&!this[r]&&(this[r]=h(this._rgba)),s===t)return this[r].slice();var a,o=e.type(s),d="array"===o||"object"===o?s:arguments,c=this[r].slice();return f(n,function(e,t){var s=d["object"===o?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(a=l(u(c)),a[r]=c,a):l(c)},f(n,function(t,i){l.fn[t]||(l.fn[t]=function(a){var n,r=e.type(a),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===r?u:("function"===r&&(a=a.call(this,u),r=e.type(a)),null==a&&i.empty?this:("string"===r&&(n=o.exec(a),n&&(a=u+parseFloat(n[2])*("+"===n[1]?1:-1))),l[i.idx]=a,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,a){var n,r,o="";if("transparent"!==a&&("string"!==e.type(a)||(n=s(a)))){if(a=l(n||a),!c.rgba&&1!==a._rgba[3]){for(r="backgroundColor"===i?t.parentNode:t;(""===o||"transparent"===o)&&r&&r.style;)try{o=e.css(r,"backgroundColor"),r=r.parentNode}catch(h){}a=a.blend(o&&"transparent"!==o?o:"_default")}a=a.toRgbaString()}try{t.style[i]=a}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(r),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},n=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(t){var i,s,a=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,n={};if(a&&a.length&&a[0]&&a[a[0]])for(s=a.length;s--;)i=a[s],"string"==typeof a[i]&&(n[e.camelCase(i)]=a[i]);else for(i in a)"string"==typeof a[i]&&(n[i]=a[i]);return n}function s(t,i){var s,a,r={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(r[s]=a));return r}var a=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(jQuery.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(t,n,r,o){var h=e.speed(n,r,o);return this.queue(function(){var n,r=e(this),o=r.attr("class")||"",l=h.children?r.find("*").addBack():r;l=l.map(function(){var t=e(this);return{el:t,start:i(this)}}),n=function(){e.each(a,function(e,i){t[i]&&r[i+"Class"](t[i])})},n(),l=l.map(function(){return this.end=i(this.el[0]),this.diff=s(this.start,this.end),this}),r.attr("class",o),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){n(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(r[0])})})},e.fn.extend({addClass:function(t){return function(i,s,a,n){return s?e.effects.animateClass.call(this,{add:i},s,a,n):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,a,n){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,a,n):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(i){return function(s,a,n,r,o){return"boolean"==typeof a||a===t?n?e.effects.animateClass.call(this,a?{add:s}:{remove:s},n,r,o):i.apply(this,arguments):e.effects.animateClass.call(this,{toggle:s},a,n,r)}}(e.fn.toggleClass),switchClass:function(t,i,s,a,n){return e.effects.animateClass.call(this,{add:i,remove:t},s,a,n)}})}(),function(){function s(t,i,s,a){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(a=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(a=s,s=i,i={}),e.isFunction(s)&&(a=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=a||i.complete,t}function a(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.10.4",save:function(e,t){for(var s=0;t.length>s;s++)null!==t[s]&&e.data(i+t[s],e[0].style[t[s]])},restore:function(e,s){var a,n;for(n=0;s.length>n;n++)null!==s[n]&&(a=e.data(i+s[n]),a===t&&(a=""),e.css(s[n],a))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),a={width:t.width(),height:t.height()},n=document.activeElement;try{n.id}catch(r){n=document.body}return t.wrap(s),(t[0]===n||e.contains(t[0],n))&&e(n).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(a),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,a){return a=a||{},e.each(i,function(e,i){var n=t.cssUnit(i);n[0]>0&&(a[i]=n[0]*s+n[1])}),a}}),e.fn.extend({effect:function(){function t(t){function s(){e.isFunction(n)&&n.call(a[0]),e.isFunction(t)&&t()}var a=e(this),n=i.complete,o=i.mode;(a.is(":hidden")?"hide"===o:"show"===o)?(a[o](),s()):r.call(a[0],i,s)}var i=s.apply(this,arguments),a=i.mode,n=i.queue,r=e.effects.effect[i.effect];return e.fx.off||!r?a?this[a](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):n===!1?this.each(t):this.queue(n||"fx",t)},show:function(e){return function(t){if(a(t))return e.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(e.fn.show),hide:function(e){return function(t){if(a(t))return e.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(e.fn.hide),toggle:function(e){return function(t){if(a(t)||"boolean"==typeof t)return e.apply(this,arguments);var i=s.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}()})(jQuery);(function(e){e.effects.effect.fade=function(t,i){var s=e(this),a=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:a},{queue:!1,duration:t.duration,easing:t.easing,complete:i})}})(jQuery);(function(e){e.effects.effect.slide=function(t,i){var s,a=e(this),n=["position","top","bottom","left","right","width","height"],r=e.effects.setMode(a,t.mode||"show"),o="show"===r,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(a,n),a.show(),s=t.distance||a["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(a).css({overflow:"hidden"}),o&&a.css(l,u?isNaN(s)?"-"+s:-s:s),d[l]=(o?u?"+=":"-=":u?"-=":"+=")+s,a.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===r&&a.hide(),e.effects.restore(a,n),e.effects.removeWrapper(a),i()}})}})(jQuery);;/* tooltip disabled! */
/* Changed by Leonid */

(function( $ ) {
    $.widget( "custom.combobox", {
	  options: {
		buttonTitle: "Show All Items" ,
		source: function(request, response ) {
					var matcher = new RegExp( $.ui.autocomplete.escapeRegex(request.term), "i" );
					response( this.element.children( "option" ).map(function() {
					  var text = $( this ).text();
					  if ( this.value && ( !request.term || matcher.test(text) ) )
						return {
						  label: text,
						  value: text,
						  option: this
						};
					}) );
				  }
	  },
      _create: function() {
        this.wrapper = $( "<span>" )
          .addClass( "custom-combobox" )
          .insertAfter( this.element );
 
        var select = this.element.hide();
        this._createAutocomplete(this,select);
        this._createShowAllButton(this.options.buttonTitle);
      },
 
      _createAutocomplete: function(el,select) {
        var selected = this.element.children( ":selected" ),
          value = selected.val() ? selected.text() : "";
 
        this.input = $( "<input>" )
          .appendTo( this.wrapper )
          .val( value )
          .attr( "title", "" )
          .addClass( "custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left" )
          .autocomplete({
			select: function( event, ui ) {
                             ui.item.option.selected = true;
                             el._trigger( "selected", event, {
                                 item: ui.item.option
                             });
                             select.trigger("change");                             
                         },
            delay: 0,
            minLength: 0,
            source: $.proxy( this, "_source" )
          })
//          .tooltip({
//            tooltipClass: "ui-state-highlight"
//          });
 
        this._on( this.input, {
          autocompleteselect: function( event, ui ) {
            ui.item.option.selected = true;
            this._trigger( "select", event, {
              item: ui.item.option
            });
          },
 
          autocompletechange: "_removeIfInvalid"
        });
      },
 
      _createShowAllButton: function(title) {
        var input = this.input,
          wasOpen = false;
 
        $( "<a>" )
          .attr( "tabIndex", -1 )
          .attr( "title", title )
//          .tooltip()
          .appendTo( this.wrapper )
          .button({
            icons: {
              primary: "ui-icon-triangle-1-s"
            },
            text: false
          })
          .removeClass( "ui-corner-all" )
          .addClass( "custom-combobox-toggle ui-corner-right" )
          .mousedown(function() {
            wasOpen = input.autocomplete( "widget" ).is( ":visible" );
          })
          .click(function() {
            input.focus();
 
            // Close if already visible
            if ( wasOpen ) {
              return;
            }
 
            // Pass empty string as value to search for, displaying all results
            input.autocomplete( "search", "" );
          });
      },
 
      _source: function(request, response){
		  this.options.source.call(this, request, response);
	  },
 
      _removeIfInvalid: function( event, ui ) {
 
        // Selected an item, nothing to do
        if ( ui.item ) {
          return;
        }
 
        // Search for a match (case-insensitive)
        var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });
 
        // Found a match, nothing to do
        if ( valid ) {
          return;
        }
 
        // Remove invalid value
        this.input
          .val( "" )
          .attr( "title", value + " didn't match any item" )
//          .tooltip( "open" );
        this.element.val( "" );
        this._delay(function() {
//          this.input.tooltip( "close" ).attr( "title", "" );
        }, 2500 );
        this.input.data( "ui-autocomplete" ).term = "";
      },
 
      _destroy: function() {
        this.wrapper.remove();
        this.element.show();
      },
      select: function(value) {
//         var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
        this.element.children( "option" ).each(function() {
          if ( $( this ).text().toLowerCase() === valueLowerCase ) {
            this.selected = valid = true;
            return false;
          }
        });
      }
    });
  })( jQuery );;/* Message Window Widget */
(function( $ ){
    $.widget( "custom.msgWindow", {
      options: {
        left			: 255,
        top				: 0,
        width			: 200,
		title			: '',
        height			: 200,
		autoClose		: true,
		autoOpen		: false,
		effectOpen		: 'slide',
		effectClose		: 'slide',
		directionOpen	: 'right',
		directionClose	: 'left',
		animationEasing	: 'swing',
		durationOpen	: 800,
		durationClose	: 800,
		timeout			: 5000,
		showOnce		: false,
		html			: '',
		closeOnClick	: true,
		closeBtn		: true,
		position		: 'fixed',
 
        show : null,
		close: null
      },
	  _times_shown: 0,
	  _t	: null,	//timer
      _create: function() {

		  this.element.css('display','none');
		  this.element.css('position', this.options.position);
		  this.element.css('top',this.options.top);
		  this.element.css('left',this.options.left);
		  
		  var oldContent = this.element.html() ? this.element.html() : '';
		  this.element.html('');
		  
		  var msgTitle = $('<div>', { 
					"class": 'msg_title'
				});
				
		  if (this.options.title)
		  {
			  var custTitle = $('<div>', {
				  "style": 'display: inline;float: left;',
				  "html" : this.options.title
			  });
			  msgTitle.append(custTitle);
		  }
		  
		  if (this.options.closeBtn)
		  {		
			  msgTitle.append( $('<div>', { 
					"class": 'msg_close_icon'
				}));
		  }
		  
		  msgTitle.appendTo(this.element);
		  
		  this.content = $( "<div>", {
			  "class": "content",
			  html : oldContent
			})
			.appendTo( this.element );
		  if (this.options.autoOpen)
		  {
			  this.show();
		  }

		  if (this.options.html)
		  {
			  this.content.html(this.options.html);
		  }

        this._on( 
			this.element, {
			   click: function(){
				   if (this.options.closeOnClick)
				   {
					   this.close();
				   }
			   }
			}
		);

		this._on( 
			'.msg_close_icon', {
			   click: "close"
			}
		);
			  
      },
 
      _refresh: function() {
		if (this.options.html)
		{
		  this.content.html(this.options.html);
		}
	  this.element.css('top',this.options.top);
	  this.element.css('left',this.options.left);
	  
        this._trigger( "change" );
      },
 
	  close: function( event ) {
		 if (this._t)
		 {
			 clearTimeout(this._t);
		 }
		 
		 if (this.options.effectClose)
		 {
			this.element.hide(this.options.effectOpen, {easing: this.options.animationEasing}, this.options.durationOpen);  
		 }
		 else
		 {
			 this.element.hide();
		 }
	  },

		show: function( event ) {
		 if(this.options.showOnce)
		 {
			 if (this._times_shown)
			 {
				 return;
			 }
			 this._times_shown++;
		 }
		 
		 if (this.options.effectOpen)
		 {
			this.element.show(this.options.effectOpen, {easing: this.options.animationEasing}, this.options.durationOpen);  
		 }
		 else
		 {
			 this.element.show();
		 }
		 
		 if (this.options.autoClose)
		 {
			 if (this._t)
			 {
				 clearTimeout(this._t);
			 }
			 
			 this._t = setTimeout(function(elem) {
					elem.close();
				}, this.options.timeout, this);
		 }
	  },

      _setOptions: function() {
        this._superApply( arguments );
        this._refresh();
      },
 
      _setOption: function( key, value ) {
        this._super( key, value );
      }
    });
})( jQuery );;(function( $ ){
    $.widget( "custom.custTooltip", {
      options: {
        hideDelay : 5000,
		top: 100,
		left: 100,
		html: ''
      },

      _create: function() {
		  this.element.css('display','none');

		  this.element.css('top',this.options.top);
		  this.element.css('left',this.options.left);
		  this.element.css('position','absolute');
		  this.element.css('z-index',9999);
		  
		  var oldContent = this.element.html() ? this.element.html() : '';
		  this.element.html('');

		  var tooltipHtml = '<div class="custom-tooltip-arrow"></div><div class="custom-tooltip-inner">' + oldContent + '</div>';
		  this.content = $( "<div>", {
			  "class": "custom-tooltip",
			  html : tooltipHtml
			})
			.appendTo( this.element );  
      },
 
      _refresh: function() {
		if (this.options.html)
		{
		  this.content.find('.custom-tooltip-inner').html(this.options.html);
		}
		this.element.css('top',this.options.top);
		this.element.css('left',this.options.left);
	  
        this._trigger( "change" );
      },
 
	  close: function( event ) {
			 this.element.hide();
	  },

	  show: function( event ) {

			 this.element.show();
			 var $tooltip = this.element.find('.custom-tooltip');
			 var width = $tooltip.width();
			 var height = $tooltip.height();
			 this.element.css('left', this.options.left - width/2);
			 this.element.css('top', this.options.top - height - 10);
			 this._t = setTimeout(function(elem) {
					elem.close();
				}, this.options.hideDelay, this);

	  },

      _setOptions: function() {
        this._superApply( arguments );
        this._refresh();
      },
 
      _setOption: function( key, value ) {
        this._super( key, value );
      }
    });
})( jQuery );;