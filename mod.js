var t={d:(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.d(n,{Si:()=>R,AT:()=>j,MY:()=>H,yd:()=>M,h8:()=>D,l7:()=>E,gh:()=>A,Rs:()=>S,t$:()=>O,aV:()=>C,XY:()=>L,kC:()=>P,Ws:()=>k,fK:()=>U,wS:()=>p,Xg:()=>v,TA:()=>b,tC:()=>x,q0:()=>y,xU:()=>I,On:()=>$,_C:()=>G,lV:()=>_,$P:()=>N,Iz:()=>w,c4:()=>T,dt:()=>m,FW:()=>g});var e={};t.r(e),t.d(e,{parse:()=>l});var o={};t.r(o),t.d(o,{parse:()=>f});var i={};t.r(i),t.d(i,{isRelURL:()=>p,urlsStrToAbsURLs:()=>m,urlsToAbsURLs:()=>g});var s={};t.r(s),t.d(s,{lineToInlinePlainString:()=>v,lineToPlainString:()=>b,stdnToInlinePlainString:()=>x,stdnToPlainString:()=>y,stringToId:()=>I,unitToInlinePlainString:()=>w,unitToPlainString:()=>T});var r={};t.r(r),t.d(r,{extractContext:()=>E,extractGlobalChildren:()=>A,extractGlobalOptionArray:()=>S,extractGlobalStrings:()=>O,extractGlobalURLs:()=>C,extractLastGlobalOption:()=>L,extractPartToOffset:()=>P,extractUnitOrLineToPart:()=>k,extractUnitOrLineToPosition:()=>U});var a={};function c(t,n=!1){let e=0,o=!1,i=!1,s=0,r=!1;const a=[];for(let c=0;c<t.length;c++){if(!0===i){i=!1;continue}const l=t[c];if("line"!==r)if("block"!==r)if("'"!==l){if(o)"\\"===l&&(i=!0);else if("{"!==l&&"["!==l)if("}"!==l&&"]"!==l){if(!(e>0))if(","!==l&&"\n"!==l){if(!(s<c))if(0!==l.trimEnd().length){if("/"===l){const n=t[c+1];if("/"===n){c++,r="line",s=c+1;continue}if("*"===n){c++,r="block",s=c+1;continue}}}else s=c+1}else{const n=t.slice(s,c).trimEnd();n.length>0&&a.push(n),s=c+1}}else{if(e--,e<0){const n=t.slice(s,c).trimEnd();n.length>0&&a.push(n);break}0===e&&(a.push(t.slice(s,c+1)),s=c+1)}else if(e++,1===e&&!n){const n=t.slice(s,c).trimEnd();n.length>0&&a.push(n),s=c}}else{if(!o){if(o=!0,0===e&&!n){const n=t.slice(s,c).trimEnd();n.length>0&&a.push(n),s=c}continue}o=!1,0===e&&(a.push(t.slice(s,c+1)),s=c+1)}else"*"===l&&"/"===t[c+1]&&(c++,r=!1),s=c+1;else"\n"===l&&(r=!1),s=c+1}if(!o&&0===e){const n=t.slice(s).trimEnd();n.length>0&&a.push(n)}return a}function l(t){if(0===(t=t.trimStart()).length)return;const n=t[0];return"'"===n?function(t){const n=[];let e=!1;for(const o of t)if(!0!==e)if("\\"!==o){if("'"===o)break;n.push(o)}else e=!0;else e=!1,"\\"!==o&&"'"!==o&&n.push("\\"),n.push(o);return n.join("")}(t.slice(1)):"["===n?function(t){const n=[];for(const e of c(t)){const t=l(e);if(void 0===t)return;n.push(t)}return n}(t.slice(1)):"{"===n?function(t){const n={};for(const e of c(t,!0)){const t=e.match(/^\s*([\w-]+)/);if(null===t){const t=l(e);if(void 0===t)return;n.__=t;continue}const o=t[1],i=t[0].length;let s=e.slice(i).trimEnd();if(0===s.length)n[o]=!0;else{const t=l(s);if(void 0===t)return;n[o]=t}}return n}(t.slice(1)):"true"===(t=t.trimEnd())||"false"!==t&&(/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(t)?Number(t):/[',{}\[\]\n\r]/.test(t)?void 0:t)}function u(t){let n="div",e=[];const o={};for(const i in t){const s=t[i];if(void 0!==s)if("__"!==i)if(Array.isArray(s))n=i,e=d(s);else if("object"!=typeof s)o[i]=s;else{const{__:t}=s;if(void 0===t)continue;if("string"==typeof t){o[i]=d([{__:t}]);continue}if(!Array.isArray(t)){o[i]=d([t]);continue}o[i]=d(t)}else{if(n="katex",!Array.isArray(s)){e=d([s]);continue}e=d(s)}}return{tag:n,options:o,children:e}}function h(t){const n=[];for(const e of t)if("string"!=typeof e)"object"!=typeof e||Array.isArray(e)||n.push(u(e));else for(const t of e)t>=" "&&n.push(t);return n}function d(t){const n=[];for(const e of t)Array.isArray(e)?n.push(h(e)):n.push(h([e]));return n}function f(t){const n=l(`[${t}]`);if(Array.isArray(n))return d(n)}function p(t){return!t.startsWith("#")&&!/^[a-z][a-z0-9+.-]*:/i.test(t)}async function g(t,n,e=[]){const o=[];for(const i of t){const t=new URL(i,n);t.pathname.endsWith(".urls")||t.pathname.endsWith(".urls.txt")?e.includes(t.href)||o.push((async()=>{try{const n=await fetch(t.href);return n.ok?await m(await n.text(),t.href,e.concat(t.href)):[]}catch(t){return console.log(t),[]}})()):o.push(t.href)}return(await Promise.all(o)).flat()}async function m(t,n,e=[]){const o=l(`[${t}]`);if(!Array.isArray(o))return[];const i=[];for(const t of o)"string"==typeof t&&i.push(t);return await g(i,n,e)}function y(t){const n=[];for(const e of t)n.push(b(e));return n.join("\n")}function b(t){let n="";for(const e of t)n+="string"!=typeof e?T(e):e;return n}function T(t){return y(t.children)}function x(t){for(const n of t){const t=v(n);if(t.length>0)return t}return""}function v(t){let n="";for(const e of t)n+="string"!=typeof e?w(e):e;return n}function w(t){return x(t.children)}function I(t){return Array.from(t.slice(0,100).matchAll(/[a-zA-Z0-9]+/g)).join("-").toLowerCase()}function S(t,n,e){const o=e[n];return void 0===o?[]:o[t]??[]}function L(t,n,e){const o=S(t,n,e);if(0!==o.length)return o[o.length-1]}function A(t,n){const e=n[t];if(void 0===e)return[];const o=e.__;return void 0===o?[]:o.flat()}function O(t,n,e){const o=S(t,n,e),i=[];for(const t of o)"string"==typeof t&&i.push(t);return i}async function C(t,n,e){return await g(O(t,n,e),location.href)}function k(t){const n=new Map;function e(t,o){for(const i of t){n.set(i,o);for(const t of i)if("string"!=typeof t){n.set(t,o);for(const n in t.options){const i=t.options[n];"object"==typeof i&&e(i,o)}e(t.children,o)}}}for(const n of t)e(n.value,n);return n}function U(t){const n=new Map;return function t(e,o){for(let i=0;i<e.length;i++){const s=e[i],r=o.concat(i);n.set(s,r);for(let e=0;e<s.length;e++){const o=s[e];if("string"==typeof o)continue;const i=r.concat(e);n.set(o,i);for(const n in o.options){const e=o.options[n];"object"==typeof e&&t(e,i.concat(n))}t(o.children,i)}}}(t,[]),n}function P(t){const n=new Map;let e=0;for(const o of t)n.set(o,e),e+=o.value.length;return n}async function E(t,{builtInTagToUnitCompiler:n,style:e,headSTDN:o,footSTDN:i,root:s}={}){const r={},a={};void 0!==n&&Object.assign(a,n);const c=[],l=[],u=k(t),h=t.map((t=>t.value)).flat(),d=(o??[]).concat(h).concat(i??[]);function f(t,n){if(!p(t))return t;const e=u.get(n);if(void 0===e)return t;try{return new URL(t,e.url).href}catch(n){return console.log(n),t}}for(const t of d){if(0===t.length)continue;const n=t[0];if("string"!=typeof n)if("global"!==n.tag){if(!0===n.options.global){let t=r[n.tag];void 0===t&&(r[n.tag]=t={}),void 0===t.__?t.__=[n.children]:t.__.push(n.children);for(const e in n.options){if("global"===e||"__"===e)continue;let o=n.options[e];if(void 0===o)continue;"string"==typeof o&&(e.endsWith("href")||e.endsWith("src"))&&p(o)&&(o=f(o,n));const i=t[e];void 0!==i?i.push(o):t[e]=[o]}}}else{const t=n.options.mod;"string"==typeof t&&(c.push(`https://cdn.jsdelivr.net/gh/st-mod/${t}/main.css`),l.push(`https://cdn.jsdelivr.net/gh/st-mod/${t}/ucs.js`));const e=n.options.css;"string"==typeof e&&c.push(`https://cdn.jsdelivr.net/gh/st-mod/${e}/main.css`);const o=n.options.ucs;"string"==typeof o&&l.push(`https://cdn.jsdelivr.net/gh/st-mod/${o}/ucs.js`);{const t=n.options["mod-gh"];"string"==typeof t&&(c.push(`https://cdn.jsdelivr.net/gh/${t}/main.css`),l.push(`https://cdn.jsdelivr.net/gh/${t}/ucs.js`))}{const t=n.options["css-gh"];"string"==typeof t&&c.push(`https://cdn.jsdelivr.net/gh/${t}/main.css`)}{const t=n.options["ucs-gh"];"string"==typeof t&&l.push(`https://cdn.jsdelivr.net/gh/${t}/ucs.js`)}{const t=n.options["css-src"];"string"==typeof t&&c.push(f(t,n))}{const t=n.options["ucs-src"];"string"==typeof t&&l.push(f(t,n))}}}const m=(await g(c,location.href)).map((t=>`@import ${JSON.stringify(t)};`)).join("");void 0!==e&&(e.textContent=m);for(const t of await g(l,location.href))try{Object.assign(a,await new Function(`return import(${JSON.stringify(t)})`)())}catch(t){console.log(t)}const y=new j(r);y.countSTDN(h);const b=U(h),T=P(t);return{css:m,fullSTDN:d,indexInfoArray:y.indexInfoArray,idToIndexInfo:y.idToIndexInfo,parts:t,partToOffset:T,stdn:h,tagToGlobalOptions:r,tagToUnitCompiler:a,title:y.title,unitToId:y.unitToId,unitOrLineToPart:u,unitOrLineToPosition:b,urlToAbsURL:f,root:s}}t.r(a),t.d(a,{Counter:()=>j});class j{constructor(t){this.tagToGlobalOptions=t,this.currentHeadingIndex=[],this.orbitToCurrentIndex={},this.baseIdToCount={},this.indexInfoArray=[],this.idToIndexInfo={},this.unitToId=new Map,this.title=""}createIndex(t,n){if("heading"===t){if(this.currentHeadingIndex.length<n)for(let t=this.currentHeadingIndex.length;t<n;t++)this.currentHeadingIndex.push(0);else{for(let t=n;t<this.currentHeadingIndex.length;t++)this.currentHeadingIndex[t]=0;for(const t in this.orbitToCurrentIndex){const e=this.orbitToCurrentIndex[t];if(!(void 0===e||e.length<n))for(let t=n;t<e.length;t++)e[t]=0}}return this.currentHeadingIndex[n-1]++,this.currentHeadingIndex.slice(0,n)}let e=this.orbitToCurrentIndex[t];if(void 0===e&&(e=[],this.orbitToCurrentIndex[t]=e),e.length<n)for(let t=e.length;t<n;t++)e.push(0);if(this.currentHeadingIndex.length<n-1)for(let t=this.currentHeadingIndex.length;t<n-1;t++)this.currentHeadingIndex.push(0);const o=this.currentHeadingIndex.slice(0,n-1);return o.push(++e[n-1]),o}countUnit(t){if("global"===t.tag||!0===t.options.global||!0===(t.options["no-count"]??L("no-count",t.tag,this.tagToGlobalOptions))||void 0!==this.unitToId.get(t))return;0===this.title.length&&"title"===t.tag&&(this.title=w(t));const n=I("string"==typeof t.options.id?t.options.id:w(t)),e=this.baseIdToCount[n]=(this.baseIdToCount[n]??0)+1,o=e>1||0===n.length?`${n}~${e}`:n;this.unitToId.set(t,o);let i=t.options.orbit??L("orbit",t.tag,this.tagToGlobalOptions);"string"==typeof i&&0!==i.length||(i="h1"===t.tag||"h2"===t.tag||"h3"===t.tag||"h4"===t.tag||"h5"===t.tag||"h6"===t.tag?"heading":t.tag);let s=t.options.level??L("level",t.tag,this.tagToGlobalOptions)??L("level",i,this.tagToGlobalOptions);if("number"!=typeof s||s<=0||s%1!=0)switch(t.tag){case"h2":s=2;break;case"h3":s=3;break;case"h4":s=4;break;case"h5":s=5;break;case"h6":s=6;break;default:s=1}const r={index:this.createIndex(i,s),id:o,orbit:i,unit:t};if(this.indexInfoArray.push(r),this.idToIndexInfo[o]=r,!0!==(t.options["no-count-inside"]??L("no-count-inside",t.tag,this.tagToGlobalOptions))){for(const n in t.options){const e=t.options[n];Array.isArray(e)&&this.countSTDN(e)}this.countSTDN(t.children)}}countSTDN(t){for(const n of t)for(const t of n)"string"!=typeof t&&this.countUnit(t)}}const G=["address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","img","map","track","video","iframe","del","ins","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr"],_=["a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","img","map","track","video","iframe","del","ins","col","colgroup","table","tbody","tfoot","thead","tr"],N=["animate","animateMotion","animateTransform","circle","clipPath","defs","desc","ellipse","g","image","line","marker","mask","mpath","path","pattern","polygon","polyline","rect","svg","symbol","text","textPath","tspan","use"],$=["accesskey","align","allow","alt","autoplay","cite","class","cols","colspan","controls","coords","crossorigin","datetime","decoding","default","dir","download","draggable","for","headers","href","hreflang","id","kind","label","lang","loop","muted","name","open","ping","poster","preload","referrerpolicy","rel","reversed","rows","rowspan","sandbox","scope","span","spellcheck","src","srcdoc","srclang","srcset","start","style","tabindex","target","title","translate","usemap","value","begin","dur","end","min","max","restart","repeatCount","repeatDur","fill","calcMode","values","keyTimes","keySplines","from","to","by","attributeName","additive","accumulate","clipPathUnits","crossorigin","d","dx","dy","height","href","keyPoints","lengthAdjust","markerHeight","markerUnits","markerWidth","maskContentUnits","maskUnits","method","orient","path","pathLength","patternContentUnits","patternTransform","patternUnits","points","preserveAspectRatio","refX","refY","rotate","side","spacing","startOffset","textLength","type","viewBox","width","x","x1","x2","y","y1","y2"];function D(t){const n=document.createElement("span");return n.classList.add("unit","warn"),n.textContent=t,n}class R{constructor(t){this.context=t,this.ston=e,this.stdn=o,this.base=s,this.urls=i,this.counter=a,this.extractor=r,this.compile=H,this.supportedHTMLTags=G,this.supportedHTMLTagsWithInlineChildren=_,this.supportedSVGTags=N,this.supportedAttributes=$,this.createErrorElement=D,this.elementToUnitOrLine=new Map,this.unitOrLineToElements=new Map,this.unitToCompiling=new Map}registerElement(t,n){this.elementToUnitOrLine.set(t,n);let e=this.unitOrLineToElements.get(n);void 0===e&&this.unitOrLineToElements.set(n,e=[]),e.push(t)}async compileUnit(t){if(!0===this.unitToCompiling.get(t)){const n=this.createErrorElement("Loop");return this.registerElement(n,t),n}if("global"===t.tag||!0===t.options.global){const n=document.createElement("div");return n.classList.add("unit","global"),this.registerElement(n,t),n}this.unitToCompiling.set(t,!0);let n=t.options["compile-with"]??L("compile-with",t.tag,this.context.tagToGlobalOptions);"string"==typeof n&&0!==n.length||(n=t.tag);const e=this.context.tagToUnitCompiler[n];let o;if(void 0!==e){try{o=await e(t,this)}catch(t){console.log(t),o=this.createErrorElement("Broken")}if(o.classList.contains("unit")&&o.classList.contains("warn"))return this.registerElement(o,t),this.unitToCompiling.set(t,!1),o}else G.includes(n)?(o=document.createElement(n),_.includes(n)?o.append(await this.compileInlineSTDN(t.children)):o.append(await this.compileSTDN(t.children))):N.includes(n)?(o=document.createElementNS("http://www.w3.org/2000/svg",n),o.append(await this.compileInlineSTDN(t.children))):(o=document.createElement("div"),o.append(await this.compileSTDN(t.children)));o.classList.add("unit");try{o.classList.add(n),"string"==typeof t.options.class&&o.classList.add(...t.options.class.trim().split(/\s+/));for(const n of S("class",t.tag,this.context.tagToGlobalOptions))"string"==typeof n&&o.classList.add(...n.trim().split(/\s+/))}catch(t){console.log(t)}const i=[];let s=o.getAttribute("style");null!==s&&i.push(s),"string"==typeof t.options.style&&i.push(t.options.style);for(const n of S("style",t.tag,this.context.tagToGlobalOptions))"string"==typeof n&&i.push(n);if(i.length>0)try{o.setAttribute("style",i.join("; "))}catch(t){console.log(t)}const r=this.context.unitToId.get(t);void 0!==r&&(o.id=r);for(const n in t.options){if("id"===n||"class"===n||"style"===n)continue;let e=n;if(n.startsWith("data-")||$.includes(n)||(e=`data-${n}`),o.hasAttribute(e))continue;let i=t.options[n];if(!0===i?i="":"number"==typeof i&&(i=i.toString()),"string"==typeof i){(e.endsWith("href")||e.endsWith("src"))&&p(i)&&(i=this.context.urlToAbsURL(i,t));try{o.setAttribute(e,i)}catch(t){console.log(t)}}}return this.registerElement(o,t),this.unitToCompiling.set(t,!1),o}async compileInline(t){return"string"!=typeof t?await this.compileUnit(t):new Text(t)}async compileLine(t){const n=new DocumentFragment;for(const e of t)n.append(await this.compileInline(e));return n}async compileInlineSTDN(t){const n=new DocumentFragment;for(let e=0;e<t.length;e++)n.append(await this.compileLine(t[e])),e!==t.length-1&&n.append(new Text("\n"));return n}async compileSTDN(t){const n=new DocumentFragment;for(const e of t){const t=document.createElement("div");t.classList.add("st-line"),n.append(t),t.append(await this.compileLine(e)),this.registerElement(t,e)}return n}}async function H(t,n={}){const e=[];for(const{value:n,url:o}of t){const t=f(n);void 0!==t&&e.push({value:t,url:o})}const o=await E(e,n),i=new R(o);return{compiler:i,documentFragment:await i.compileSTDN(o.stdn)}}async function M(t,n={}){const e=[];for(const n of await g(t,location.href))e.push((async()=>{try{const t=await fetch(n);return t.ok?[{value:await t.text(),url:n}]:[]}catch(t){return console.log(t),[]}})());return await H((await Promise.all(e)).flat(),n)}var W=n.Si,F=n.AT,V=n.MY,q=n.yd,z=n.h8,X=n.l7,Y=n.gh,B=n.Rs,J=n.t$,K=n.aV,Z=n.XY,Q=n.kC,tt=n.Ws,nt=n.fK,et=n.wS,ot=n.Xg,it=n.TA,st=n.tC,rt=n.q0,at=n.xU,ct=n.On,lt=n._C,ut=n.lV,ht=n.$P,dt=n.Iz,ft=n.c4,pt=n.dt,gt=n.FW;export{W as Compiler,F as Counter,V as compile,q as compileURLs,z as createErrorElement,X as extractContext,Y as extractGlobalChildren,B as extractGlobalOptionArray,J as extractGlobalStrings,K as extractGlobalURLs,Z as extractLastGlobalOption,Q as extractPartToOffset,tt as extractUnitOrLineToPart,nt as extractUnitOrLineToPosition,et as isRelURL,ot as lineToInlinePlainString,it as lineToPlainString,st as stdnToInlinePlainString,rt as stdnToPlainString,at as stringToId,ct as supportedAttributes,lt as supportedHTMLTags,ut as supportedHTMLTagsWithInlineChildren,ht as supportedSVGTags,dt as unitToInlinePlainString,ft as unitToPlainString,pt as urlsStrToAbsURLs,gt as urlsToAbsURLs};