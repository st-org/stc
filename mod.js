var t={d:(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)},e={};function n(t,e=!1){let n=0,i=!1,s=!1,o=0,r=!1;const c=[];for(let a=0;a<t.length;a++){if(!0===s){s=!1;continue}const l=t[a];if("line"!==r)if("block"!==r)if("'"!==l){if(i){if("\\"===l){s=!0;continue}}else if("{"!==l&&"["!==l)if("}"!==l&&"]"!==l){if(!(n>0))if(","!==l&&"\n"!==l){if(!(o<a))if(0!==l.trimEnd().length){if("/"===l){const e=t[a+1];if("/"===e){a++,r="line",o=a+1;continue}if("*"===e){a++,r="block",o=a+1;continue}}}else o=a+1}else{const e=t.slice(o,a).trimEnd();e.length>0&&c.push(e),o=a+1}}else{if(n--,n<0){const e=t.slice(o,a).trimEnd();e.length>0&&c.push(e);break}0===n&&(c.push(t.slice(o,a+1)),o=a+1)}else if(n++,1===n&&!e){const e=t.slice(o,a).trimEnd();e.length>0&&c.push(e),o=a}}else{if(!i){if(i=!0,0===n&&!e){const e=t.slice(o,a).trimEnd();e.length>0&&c.push(e),o=a}continue}i=!1,0===n&&(c.push(t.slice(o,a+1)),o=a+1)}else"*"===l&&"/"===t[a+1]&&(a++,r=!1),o=a+1;else"\n"===l&&(r=!1),o=a+1}if(!i&&0===n){const e=t.slice(o).trimEnd();e.length>0&&c.push(e)}return c}function i(t){if(0===(t=t.trimStart()).length)return;const e=t[0];return"'"===e?function(t){const e=[];let n=!1;for(const i of t)if(!0!==n)if("\\"!==i){if("'"===i)break;e.push(i)}else n=!0;else n=!1,"\\"!==i&&"'"!==i&&e.push("\\"),e.push(i);return e.join("")}(t.slice(1)):"["===e?function(t){return function(t){const e=[];for(const n of t){const t=i(n);if(void 0===t)return;e.push(t)}return e}(n(t))}(t.slice(1)):"{"===e?function(t){return function(t){const e={};for(const n of t){const t=n.match(/^\s*([\w-]+)/);if(null===t){const t=i(n);if(void 0===t)return;e.__=t;continue}const s=t[1],o=t[0].length;let r=n.slice(o).trimEnd();if(0===r.length)e[s]=!0;else{const t=i(r);if(void 0===t)return;e[s]=t}}return e}(n(t,!0))}(t.slice(1)):"true"===(t=t.trimEnd())||"false"!==t&&(/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(t)?Number(t):/[',{}\[\]\n\r]/.test(t)?void 0:t)}function s(t){return!t.startsWith("#")&&!/^[a-z][a-z0-9+.-]*:/i.test(t)}function o(t,e){try{return new URL(t,e).href}catch(e){return console.log(e),t}}function r(t,e){for(const n of Object.keys(t.options)){const i=t.options[n];Array.isArray(i)?c(i,e):"string"==typeof i&&(n.endsWith("src")||n.endsWith("href"))&&s(i)&&(t.options[n]=o(i,e))}c(t.children,e)}function c(t,e){for(const n of t)for(const t of n)"string"!=typeof t&&r(t,e)}async function a(t,e){const n=[];for(const i of t)try{const t=new URL(i,e);if(!t.pathname.endsWith(".urls")&&!t.pathname.endsWith(".urls.txt")){n.push(t.href);continue}const s=await fetch(t.href);if(!s.ok)continue;n.push(...await l(await s.text(),t.href))}catch(t){console.log(t)}return n}async function l(t,e){const n=i("["+t+"]");if(!Array.isArray(n))return[];const s=[];for(const t of n)"string"==typeof t&&s.push(t);return await a(s,e)}function u(t){let e="div",n=[],i={};for(const s of Object.keys(t)){let o=t[s];if(void 0!==o)if("__"!==s)if(Array.isArray(o))e=s,n=d(o);else if("object"!=typeof o)i[s]=o;else{if(o=o.__,void 0===o)continue;"string"==typeof o?o=[{__:o}]:Array.isArray(o)||(o=[o]),i[s]=d(o)}else Array.isArray(o)||(o=[o]),e="katex",n=d(o)}return{tag:e,children:n,options:i}}function h(t){const e=[];for(const n of t)if("string"!=typeof n)"object"!=typeof n||Array.isArray(n)||e.push(u(n));else for(const t of n)t>=" "&&e.push(t);return e}function d(t){const e=[];for(const n of t)Array.isArray(n)?e.push(h(n)):e.push(h([n]));return e}function f(t){const e=i("["+t+"]");if(Array.isArray(e))return d(e)}function p(t){const e=[];for(const n of t)e.push(g(n));return e.join("\n")}function g(t){let e="";for(const n of t)e+="string"!=typeof n?m(n):n;return e}function m(t){return p(t.children)}function b(t){for(const e of t){const t=y(e);if(t.length>0)return t}return""}function y(t){let e="";for(const n of t)e+="string"!=typeof n?T(n):n;return e}function T(t){return b(t.children)}function w(t){return Array.from(t.slice(0,100).matchAll(/[a-zA-Z0-9]+/g)).join("-").toLowerCase()}t.d(e,{Si:()=>N,AT:()=>x,MY:()=>U,l7:()=>C,qP:()=>c,VO:()=>r,Uf:()=>A,wh:()=>I,Sl:()=>L,t$:()=>S,Gk:()=>v,wS:()=>s,Xg:()=>y,TA:()=>g,wT:()=>E,r$:()=>o,tC:()=>b,q0:()=>p,xU:()=>w,Iz:()=>T,c4:()=>m,dt:()=>l,FW:()=>a});class x{constructor(t){this.tagToGlobalOptions=t,this.currentHeadingIndex=[],this.orbitToCurrentIndex={},this.baseIdToCount={},this.indexInfoArray=[],this.idToIndexInfo={},this.unitToId=new Map,this.title=""}createIndex(t,e){if("heading"===t){if(this.currentHeadingIndex.length<e)for(let t=this.currentHeadingIndex.length;t<e;t++)this.currentHeadingIndex.push(0);else{for(let t=e;t<this.currentHeadingIndex.length;t++)this.currentHeadingIndex[t]=0;for(const t of Object.keys(this.orbitToCurrentIndex)){const n=this.orbitToCurrentIndex[t];if(!(void 0===n||n.length<e))for(let t=e;t<n.length;t++)n[t]=0}}return this.currentHeadingIndex[e-1]++,this.currentHeadingIndex.slice(0,e)}let n=this.orbitToCurrentIndex[t];if(void 0===n&&(n=[],this.orbitToCurrentIndex[t]=n),n.length<e)for(let t=n.length;t<e;t++)n.push(0);if(this.currentHeadingIndex.length<e-1)for(let t=this.currentHeadingIndex.length;t<e-1;t++)this.currentHeadingIndex.push(0);const i=this.currentHeadingIndex.slice(0,e-1);return i.push(++n[e-1]),i}countUnit(t){if(0===this.title.length&&"title"===t.tag&&(this.title=T(t)),"global"!==t.tag&&!0!==t.options.global){const e=w("string"==typeof t.options.id?t.options.id:T(t)),n=this.baseIdToCount[e]=(this.baseIdToCount[e]??0)+1,i=n>1||0===e.length?`${e}~${n}`:e;let s=t.options.orbit??v("orbit",t.tag,this.tagToGlobalOptions);"string"==typeof s&&0!==s.length||(s="h1"===t.tag||"h2"===t.tag||"h3"===t.tag||"h4"===t.tag||"h5"===t.tag||"h6"===t.tag?"heading":t.tag);let o=t.options.level??v("level",t.tag,this.tagToGlobalOptions)??v("level",s,this.tagToGlobalOptions);if("number"!=typeof o||o<=0||o%1!=0)switch(t.tag){case"h2":o=2;break;case"h3":o=3;break;case"h4":o=4;break;case"h5":o=5;break;case"h6":o=6;break;default:o=1}const r={index:this.createIndex(s,o),id:i,orbit:s,unit:t};this.indexInfoArray.push(r),this.idToIndexInfo[i]=r,this.unitToId.set(t,i)}for(const e of Object.keys(t.options)){const n=t.options[e];Array.isArray(n)&&this.countSTDN(n)}this.countSTDN(t.children)}countSTDN(t){for(const e of t)for(const t of e)"string"!=typeof t&&this.countUnit(t)}}function I(t,e,n){const i=n[e];return void 0===i?[]:i[t]??[]}function v(t,e,n){const i=I(t,e,n);if(0!==i.length)return i[i.length-1]}function A(t,e){const n=e[t];if(void 0===n)return[];const i=n.__;return void 0===i?[]:i.flat()}function L(t,e,n){const i=I(t,e,n),s=[];for(const t of i)"string"==typeof t&&s.push(t);return s}async function S(t,e,n,i){return await a(L(t,e,n),i)}async function C(t,e,n={}){0===e.length&&(e=location.href);const i={},s={};void 0!==n.builtInTagToUnitCompiler&&Object.assign(s,n.builtInTagToUnitCompiler);const o=[],r=[],c=(n.headSTDN??[]).concat(t).concat(n.footSTDN??[]);for(const t of c){if(0===t.length)continue;const e=t[0];if("string"!=typeof e)if("global"!==e.tag){if(!0===e.options.global){let t=i[e.tag];void 0===t&&(i[e.tag]=t={}),void 0===t.__?t.__=[e.children]:t.__.push(e.children);for(const n of Object.keys(e.options)){if("global"===n||"__"===n)continue;const i=e.options[n];if(void 0===i)continue;const s=t[n];void 0===s?t[n]=[i]:s.push(i)}}}else{const t=e.options.mod;"string"==typeof t&&(o.push(`https://cdn.jsdelivr.net/gh/st-mod/${t}/main.css`),r.push(`https://cdn.jsdelivr.net/gh/st-mod/${t}/ucs.js`));const n=e.options.css;"string"==typeof n&&o.push(`https://cdn.jsdelivr.net/gh/st-mod/${n}/main.css`);const i=e.options.ucs;"string"==typeof i&&r.push(`https://cdn.jsdelivr.net/gh/st-mod/${i}/ucs.js`);{const t=e.options["mod-gh"];"string"==typeof t&&(o.push(`https://cdn.jsdelivr.net/gh/${t}/main.css`),r.push(`https://cdn.jsdelivr.net/gh/${t}/ucs.js`))}{const t=e.options["css-gh"];"string"==typeof t&&o.push(`https://cdn.jsdelivr.net/gh/${t}/main.css`)}{const t=e.options["ucs-gh"];"string"==typeof t&&r.push(`https://cdn.jsdelivr.net/gh/${t}/ucs.js`)}{const t=e.options["css-src"];"string"==typeof t&&o.push(t)}{const t=e.options["ucs-src"];"string"==typeof t&&r.push(t)}}}const l=(await a(o,e)).map((t=>`@import ${JSON.stringify(t)};`)).join("");void 0!==n.style&&(n.style.textContent=l);for(const t of await a(r,e))try{Object.assign(s,await new Function(`return import(${JSON.stringify(t)})`)())}catch(t){console.log(t)}const u=new x(i);return u.countSTDN(t),{css:l,dir:e,indexInfoArray:u.indexInfoArray,idToIndexInfo:u.idToIndexInfo,tagToGlobalOptions:i,tagToUnitCompiler:s,title:u.title,unitToId:u.unitToId}}class k{constructor(t,e=[]){this.element=document.createElement(t),this.classList=this.element.classList,this.style=this.element.style,this.dataset=this.element.dataset,this.childNodes=this.element.childNodes,this.children=this.element.children;for(const t of e)if(t.length>0)try{this.element.classList.add(t.replace(/\s/g,"-"))}catch(t){console.log(t)}}append(...t){return this.element.append(...t.map((t=>t instanceof k?t.element:t))),this}prepend(...t){return this.element.prepend(...t.map((t=>t instanceof k?t.element:t))),this}after(...t){return this.element.after(...t.map((t=>t instanceof k?t.element:t))),this}before(...t){return this.element.before(...t.map((t=>t instanceof k?t.element:t))),this}setText(t){return this.element.textContent=t,this}setHTML(t){return this.element.innerHTML=t,this}scrollBy(t){return this.element.scrollBy(t),this}scrollIntoView(t){return this.element.scrollIntoView(t),this}getBoundingClientRect(){return this.element.getBoundingClientRect()}getClientRects(){return this.element.getClientRects()}setAttribute(t,e){try{this.element.setAttribute(t,e)}catch(t){console.log(t)}return this}removeAttribute(t){return this.element.removeAttribute(t),this}getAttribute(t){return this.element.getAttribute(t)}hasAttribute(t){return this.element.hasAttribute(t)}}class j extends k{constructor(t=[]){super("div",t)}addEventListener(t,e,n){return this.element.addEventListener(t,e,n),this}}class O extends k{constructor(t=[]){super("span",t)}addEventListener(t,e,n){return this.element.addEventListener(t,e,n),this}}class N{constructor(t){this.context=t,this.unitToCompiling=new Map}async compileUnit(t){if(!0===this.unitToCompiling.get(t))return N.createErrorElement("Loop");if("global"===t.tag||!0===t.options.global)return new j(["unit","global"]).element;this.unitToCompiling.set(t,!0);let e=t.options["compile-with"]??v("compile-with",t.tag,this.context.tagToGlobalOptions);"string"==typeof e&&0!==e.length||(e=t.tag);const n=this.context.tagToUnitCompiler[e];let i;if(void 0!==n){try{i=await n(t,this)}catch(t){console.log(t),i=N.createErrorElement("Broken")}if(i.classList.contains("warn"))return i.classList.add("unit"),this.unitToCompiling.set(t,!1),i}else{let n;N.supportedHTMLTags.includes(e)?(i=document.createElement(e),n=N.supportedHTMLTagsWithInlineChildren.includes(e)?await this.compileInlineSTDN(t.children):await this.compileSTDN(t.children)):N.supportedSVGTags.includes(e)?(i=document.createElementNS("http://www.w3.org/2000/svg",e),n=await this.compileInlineSTDN(t.children)):(i=document.createElement("div"),n=await this.compileSTDN(t.children)),i.append(n)}i.classList.add("unit");try{i.classList.add(e),"string"==typeof t.options.class&&i.classList.add(...t.options.class.trim().split(/\s+/));for(const e of I("class",t.tag,this.context.tagToGlobalOptions))"string"==typeof e&&i.classList.add(...e.trim().split(/\s+/))}catch(t){console.log(t)}const r=this.context.unitToId.get(t);void 0!==r&&(i.id=r);for(const e of Object.keys(t.options)){if("id"===e||"class"===e)continue;let n=e;if(e.startsWith("data-")||N.supportedHTMLAttributes.includes(e)||(n=`data-${e}`),i.hasAttribute(n))continue;let r=t.options[e];if(!0===r?r="":"number"==typeof r&&(r=r.toString()),"string"==typeof r){this.context.dir.length>0&&("src"===n||"href"===n)&&s(r)&&(r=o(r,this.context.dir));try{i.setAttribute(n,r)}catch(t){console.log(t)}}}return this.unitToCompiling.set(t,!1),i}async compileInline(t){return"string"!=typeof t?await this.compileUnit(t):new Text(t)}async compileLine(t){const e=new DocumentFragment;for(const n of t)e.append(await this.compileInline(n));return e}async compileInlineSTDN(t){const e=new DocumentFragment;for(let n=0;n<t.length;n++)e.append(await this.compileLine(t[n])),n!==t.length-1&&e.append(new Text("\n"));return e}async compileSTDN(t){const e=new DocumentFragment;for(const n of t)e.append(new j(["st-line"]).append(await this.compileLine(n)).element);return e}static createErrorElement(t){return new O(["unit","warn"]).setText(t).element}}async function U(t,e="",n={}){const i=f(t);if(void 0===i)return;const s=await C(i,e,n),o=new N(s);return{documentFragment:await o.compileSTDN(i),compiler:o,doc:i}}async function E(t,e={}){const n=[],i=[];for(const{string:e,dir:s}of t){const t=f(e);void 0!==t?(c(t,s),n.push(...t),i.push(t.length)):i.push(0)}const s=await C(n,"",e),o=new N(s);return{documentFragment:await o.compileSTDN(n),partLengths:i,compiler:o,doc:n}}N.supportedHTMLTags=["address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","img","map","track","video","iframe","del","ins","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr"],N.supportedHTMLTagsWithInlineChildren=["a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","audio","img","track","video","iframe","del","ins","col","colgroup","table","tbody","tfoot","thead","tr"],N.supportedSVGTags=["animate","animateMotion","circle","clipPath","ellipse","foreignObject","g","image","mask","path","pattern","rect","svg","text","textPath","tspan","use"],N.supportedHTMLAttributes=["accesskey","align","allow","alt","autoplay","cite","class","cols","colspan","controls","coords","crossorigin","datetime","decoding","default","dir","download","draggable","for","headers","href","hreflang","id","kind","label","lang","loop","muted","name","open","ping","poster","preload","referrerpolicy","rel","reversed","rows","rowspan","sandbox","scope","span","spellcheck","src","srcdoc","srclang","srcset","start","style","tabindex","target","title","translate","usemap","value","attributeName","begin","d","dur","fill","keyPoints","keyTimes","path","preserveAspectRatio","repeatCount","rotate","textLength","values","viewBox","x","y","width","height"];var H=e.Si,D=e.AT,$=e.MY,_=e.l7,G=e.qP,R=e.VO,M=e.Uf,P=e.wh,W=e.Sl,F=e.t$,q=e.Gk,B=e.wS,V=e.Xg,z=e.TA,J=e.wT,X=e.r$,Y=e.tC,Z=e.q0,K=e.xU,Q=e.Iz,tt=e.c4,et=e.dt,nt=e.FW;export{H as Compiler,D as Counter,$ as compile,_ as extractContext,G as fixURLInSTDN,R as fixURLInUnit,M as getGlobalChildren,P as getGlobalOptionArray,W as getGlobalStrings,F as getGlobalURLs,q as getLastGlobalOption,B as isRelURL,V as lineToInlinePlainString,z as lineToPlainString,J as multiCompile,X as relURLToAbsURL,Y as stdnToInlinePlainString,Z as stdnToPlainString,K as stringToId,Q as unitToInlinePlainString,tt as unitToPlainString,et as urlsStrToAbsURLs,nt as urlsToAbsURLs};