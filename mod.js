var t={400:(t,e,n)=>{e.Qc=void 0;const i=n(650);function s(t){let e="div",n=[],i={};for(const s of Object.keys(t)){let o=t[s];if(void 0!==o)if("__"!==s)if(Array.isArray(o))e=s,n=r(o);else if("object"!=typeof o)i[s]=o;else{if(o=o.__,void 0===o)continue;"string"==typeof o?o=[{__:o}]:Array.isArray(o)||(o=[o]),i[s]=r(o)}else Array.isArray(o)||(o=[o]),e="katex",n=r(o)}return{tag:e,children:n,options:i}}function o(t){const e=[];for(const n of t)if("string"!=typeof n)"object"!=typeof n||Array.isArray(n)||e.push(s(n));else for(const t of n)t>=" "&&e.push(t);return e}function r(t){const e=[];for(const n of t)Array.isArray(n)?e.push(o(n)):e.push(o([n]));return e}e.Qc=function(t){const e=i.parse("["+t+"]");if(Array.isArray(e))return r(e)}},650:(t,e)=>{function n(t,e,n=!1){let i=0,s=!1,o=!1,r=0,a=!1,c=[];const l=[];for(let u=0;u<t.length;u++){if(!0===o){o=!1;continue}const d=t[u];if("line"!==a)if("block"!==a)if("'"!==d){if(s){if("\\"===d){o=!0;continue}}else if("{"!==d&&"["!==d)if("}"!==d&&"]"!==d){if(!(i>0))if(","!==d&&"\n"!==d){if(!(r<u))if(0!==d.trimEnd().length){if("/"===d){const e=t[u+1];if("/"===e){r=u,u++,a="line";continue}if("*"===e){r=u,u++,a="block";continue}}}else r=u+1}else{const n=t.slice(r,u).trimEnd();n.length>0&&(l.push({value:n,index:e+r,comment:c.join("\n")}),c=[]),r=u+1}}else{if(i--,i<0){const n=t.slice(r,u).trimEnd();n.length>0&&(l.push({value:n,index:e+r,comment:c.join("\n")}),c=[]);break}0===i&&(l.push({value:t.slice(r,u+1),index:e+r,comment:c.join("\n")}),c=[],r=u+1)}else if(i++,1===i&&!n){const n=t.slice(r,u).trimEnd();n.length>0&&(l.push({value:n,index:e+r,comment:c.join("\n")}),c=[]),r=u}}else{if(!s){if(s=!0,0===i&&!n){const n=t.slice(r,u).trimEnd();n.length>0&&(l.push({value:n,index:e+r,comment:c.join("\n")}),c=[]),r=u}continue}s=!1,0===i&&(l.push({value:t.slice(r,u+1),index:e+r,comment:c.join("\n")}),c=[],r=u+1)}else"*"===d&&"/"===t[u+1]&&(u++,a=!1,c.push(t.slice(r,u+1).replace(/\n[ ]*/g,"\n ")),r=u+1);else"\n"===d&&(a=!1,c.push(t.slice(r,u).trimEnd()),r=u+1)}if(!s&&0===i&&!1===a){const n=t.slice(r).trimEnd();n.length>0&&l.push({value:n,index:e+r,comment:c.join("\n")})}return l}function i(t,e=!1){let n=0,i=!1,s=!1,o=0,r=!1;const a=[];for(let c=0;c<t.length;c++){if(!0===s){s=!1;continue}const l=t[c];if("line"!==r)if("block"!==r)if("'"!==l){if(i){if("\\"===l){s=!0;continue}}else if("{"!==l&&"["!==l)if("}"!==l&&"]"!==l){if(!(n>0))if(","!==l&&"\n"!==l){if(!(o<c))if(0!==l.trimEnd().length){if("/"===l){const e=t[c+1];if("/"===e){c++,r="line",o=c+1;continue}if("*"===e){c++,r="block",o=c+1;continue}}}else o=c+1}else{const e=t.slice(o,c).trimEnd();e.length>0&&a.push(e),o=c+1}}else{if(n--,n<0){const e=t.slice(o,c).trimEnd();e.length>0&&a.push(e);break}0===n&&(a.push(t.slice(o,c+1)),o=c+1)}else if(n++,1===n&&!e){const e=t.slice(o,c).trimEnd();e.length>0&&a.push(e),o=c}}else{if(!i){if(i=!0,0===n&&!e){const e=t.slice(o,c).trimEnd();e.length>0&&a.push(e),o=c}continue}i=!1,0===n&&(a.push(t.slice(o,c+1)),o=c+1)}else"*"===l&&"/"===t[c+1]&&(c++,r=!1),o=c+1;else"\n"===l&&(r=!1),o=c+1}if(!i&&0===n){const e=t.slice(o).trimEnd();e.length>0&&a.push(e)}return a}function s(t){const e=[];let n=!1;for(const i of t)if(!0!==n)if("\\"!==i){if("'"===i)break;e.push(i)}else n=!0;else n=!1,"\\"!==i&&"'"!==i&&e.push("\\"),e.push(i);return e.join("")}function o(t,e=0,i=""){e+=t.length;const r=function(t,e){if(0===t.length)return;const i=t[0];return"'"===i?s(t.slice(1)):"["===i?function(t,e){return function(t){const e=[];for(const{value:n,index:i,comment:s}of t){const t=o(n,i,s);if(void 0===t)return;e.push(t)}return e}(n(t,e))}(t.slice(1),e+1):"{"===i?function(t,e){return function(t){const e={};for(const{value:n,index:i,comment:s}of t){const t=n.match(/^\s*([\w-]+)/);if(null===t){const t=o(n,i,s);if(void 0===t)return;e.__=t;continue}const r=t[1],a=t[0].length;let c=n.slice(a).trimEnd();if(0===c.length)e[r]={value:!0,index:i+a,comment:s};else{const t=o(c,i+a,s);if(void 0===t)return;e[r]=t}}return e}(n(t,e,!0))}(t.slice(1),e+1):"true"===(t=t.trimEnd())||"false"!==t&&(/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(t)?Number(t):/[',{}\[\]\n\r]/.test(t)?void 0:t)}(t=t.trimStart(),e-=t.length);if(void 0!==r)return{value:r,index:e,comment:i}}function r(t){if(0===(t=t.trimStart()).length)return;const e=t[0];return"'"===e?s(t.slice(1)):"["===e?function(t){return function(t){const e=[];for(const n of t){const t=r(n);if(void 0===t)return;e.push(t)}return e}(i(t))}(t.slice(1)):"{"===e?function(t){return function(t){const e={};for(const n of t){const t=n.match(/^\s*([\w-]+)/);if(null===t){const t=r(n);if(void 0===t)return;e.__=t;continue}const i=t[1],s=t[0].length;let o=n.slice(s).trimEnd();if(0===o.length)e[i]=!0;else{const t=r(o);if(void 0===t)return;e[i]=t}}return e}(i(t,!0))}(t.slice(1)):"true"===(t=t.trimEnd())||"false"!==t&&(/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(t)?Number(t):/[',{}\[\]\n\r]/.test(t)?void 0:t)}function a(t,e){if(e&&t.length>0&&t[0].trim().length>0&&(1===t.length||t[t.length-1].trim().length>0)&&!/[',{}\[\]\n\r]/.test(t)&&"true"!==t&&"false"!==t&&!/^(?:[+-]?Infinity|NaN|0x[\da-fA-F]+|0o[0-7]+|0b[01]+|[+-]?(?:\d*\.?\d+|\d+\.)(?:e[+-]?\d+)?)$/.test(t)&&!t.startsWith("//")&&!t.startsWith("/*"))return t;const n=["'"];for(let e=0;e<t.length;e++){const i=t[e];if("\\"!==i)"'"!==i?n.push(i):n.push("\\'");else{if(e===t.length-1){n.push("\\\\");break}const s=t[e+1];if("\\"===s||"'"===s){n.push("\\\\");continue}n.push(i)}}return n.push("'"),n.join("")}Object.defineProperty(e,"__esModule",{value:!0}),e.stringify=e.stringifyWithComment=e.parse=e.parseWithIndex=void 0,e.parseWithIndex=o,e.parse=r,e.stringifyWithComment=function t(e,n={}){return void 0===e?"":"number"==typeof e?e.toString():"string"==typeof e?a(e,n.useUnquotedString):!0===e?"true":!1===e?"false":Array.isArray(e)?function(e,{indentTarget:n,indentLevel:i,addDecorativeComma:s,addDecorativeSpace:o,useUnquotedString:r}){n=n??"none",i=i??0,s=s??"never";const a=[],c=e.length>1&&("all"===n||"array"===n||"arrayInObjectAndThis"===n)||void 0!==e.find((t=>t.comment.length>0)),l=i+(c?1:0);"arrayInObjectAndThis"===n&&(n="arrayInObject");const u="always"===o||"afterComma"===o?", ":",";let d;for(let i=0;i<e.length;i++){const{value:h,comment:f}=e[i];let p;p=void 0===d?t(h,{indentTarget:n,indentLevel:l,addDecorativeComma:s,addDecorativeSpace:o,useUnquotedString:r}):d,i!==e.length-1&&(d=t(e[i+1].value,{indentTarget:n,indentLevel:l,addDecorativeComma:s,addDecorativeSpace:o,useUnquotedString:r})),c||i===e.length-1||"always"!==s&&(p.endsWith("'")||p.endsWith("}")||p.endsWith("]")||void 0!==d&&(d.endsWith("'")||d.endsWith("}")||d.endsWith("]")))?(f.length>0&&a.push(...f.split("\n")),a.push(p)):a.push(p+u)}let h="\n";for(let t=0;t<i;t++)h+="    ";let f=h;return i>=0&&(f+="    "),c?"["+f+a.join(f)+h+"]":"["+a.join("")+"]"}(e,n):function(e,{indentTarget:n,indentLevel:i,addDecorativeComma:s,addDecorativeSpace:o,useUnquotedString:r}){n=n??"none",i=i??0,s=s??"never";const a=[],c=Object.keys(e);let l=c.length>1&&("all"===n||"object"===n);if(!l)for(const t of c){const n=e[t];if(void 0!==n&&n.comment.length>0){l=!0;break}}const u=i+(l?1:0);"arrayInObject"===n&&(n="arrayInObjectAndThis");const d="always"===o||"afterComma"===o?", ":",",h="always"===o||"afterKey"===o?" ":"";for(let i=0;i<c.length;i++){const f=c[i];if(null===f.match(/^[\w-]+$/))continue;const p=e[f];if(void 0===p)continue;const{value:g,comment:m}=p,y=t(g,{indentTarget:n,indentLevel:u,addDecorativeComma:s,addDecorativeSpace:o,useUnquotedString:"__"===f&&"string"==typeof g?void 0:r});m.length>0&&a.push(...m.split("\n")),y.startsWith("'")||y.startsWith("[")||y.startsWith("{")?l||i===c.length-1||"always"!==s&&"inObject"!==s?a.push(("__"===f?"":f+h)+y):a.push(("__"===f?"":f+h)+y+d):"true"===y?l||i===c.length-1?a.push(f):a.push(f+d):l||i===c.length-1?a.push(f+" "+y):a.push(f+" "+y+d)}let f="\n";for(let t=0;t<i;t++)f+="    ";let p=f;return i>=0&&(p+="    "),l?"{"+p+a.join(p)+f+"}":"{"+a.join("")+"}"}(e,n)},e.stringify=function t(e,n={}){return void 0===e?"":"number"==typeof e?e.toString():"string"==typeof e?a(e,n.useUnquotedString):!0===e?"true":!1===e?"false":Array.isArray(e)?function(e,{indentTarget:n,indentLevel:i,addDecorativeComma:s,addDecorativeSpace:o,useUnquotedString:r}){n=n??"none",i=i??0,s=s??"never";const a=[],c=e.length>1&&("all"===n||"array"===n||"arrayInObjectAndThis"===n),l=i+(c?1:0);"arrayInObjectAndThis"===n&&(n="arrayInObject");const u="always"===o||"afterComma"===o?", ":",";let d;for(let i=0;i<e.length;i++){let h;h=void 0===d?t(e[i],{indentTarget:n,indentLevel:l,addDecorativeComma:s,addDecorativeSpace:o,useUnquotedString:r}):d,i!==e.length-1&&(d=t(e[i+1],{indentTarget:n,indentLevel:l,addDecorativeComma:s,addDecorativeSpace:o,useUnquotedString:r})),c||i===e.length-1||"always"!==s&&(h.endsWith("'")||h.endsWith("}")||h.endsWith("]")||void 0!==d&&(d.endsWith("'")||d.endsWith("}")||d.endsWith("]")))?a.push(h):a.push(h+u)}let h="\n";for(let t=0;t<i;t++)h+="    ";let f=h;return i>=0&&(f+="    "),c?"["+f+a.join(f)+h+"]":"["+a.join("")+"]"}(e,n):function(e,{indentTarget:n,indentLevel:i,addDecorativeComma:s,addDecorativeSpace:o,useUnquotedString:r}){n=n??"none",i=i??0,s=s??"never";const a=[],c=Object.keys(e),l=c.length>1&&("all"===n||"object"===n),u=i+(l?1:0);"arrayInObject"===n&&(n="arrayInObjectAndThis");const d="always"===o||"afterComma"===o?", ":",",h="always"===o||"afterKey"===o?" ":"";for(let i=0;i<c.length;i++){const f=c[i];if(null===f.match(/^[\w-]+$/))continue;const p=e[f];if(void 0===p)continue;const g=t(p,{indentTarget:n,indentLevel:u,addDecorativeComma:s,addDecorativeSpace:o,useUnquotedString:"__"===f&&"string"==typeof p?void 0:r});g.startsWith("'")||g.startsWith("[")||g.startsWith("{")?l||i===c.length-1||"always"!==s&&"inObject"!==s?a.push(("__"===f?"":f+h)+g):a.push(("__"===f?"":f+h)+g+d):"true"===g?l||i===c.length-1?a.push(f):a.push(f+d):l||i===c.length-1?a.push(f+" "+g):a.push(f+" "+g+d)}let f="\n";for(let t=0;t<i;t++)f+="    ";let p=f;return i>=0&&(p+="    "),l?"{"+p+a.join(p)+f+"}":"{"+a.join("")+"}"}(e,n)}}},e={};function n(i){var s=e[i];if(void 0!==s)return s.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var i={};(()=>{n.d(i,{Si:()=>S,AT:()=>u,MY:()=>A,l7:()=>x,qP:()=>r,VO:()=>o,Uf:()=>v,wh:()=>m,Sl:()=>b,t$:()=>T,Gk:()=>y,wS:()=>e,wT:()=>C,r$:()=>s,tC:()=>p,q0:()=>h,xU:()=>g,Iz:()=>f,c4:()=>d,dt:()=>c,FW:()=>a});var t=n(650);function e(t){return!t.startsWith("#")&&!/^[a-z][a-z0-9+.-]*:/i.test(t)}function s(t,e){try{return new URL(t,e).href}catch(e){return console.log(e),t}}function o(t,n){for(const i of Object.keys(t.options)){const o=t.options[i];Array.isArray(o)?r(o,n):"string"==typeof o&&(i.endsWith("src")||i.endsWith("href"))&&e(o)&&(t.options[i]=s(o,n))}r(t.children,n)}function r(t,e){for(const n of t)for(const t of n)"string"!=typeof t&&o(t,e)}async function a(t,e){const n=[];for(const i of t)try{const t=new URL(i,e);if(!t.pathname.endsWith(".urls")&&!t.pathname.endsWith(".urls.txt")){n.push(t.href);continue}const s=await fetch(t.href);if(!s.ok)continue;n.push(...await c(await s.text(),t.href))}catch(t){console.log(t)}return n}async function c(e,n){const i=(0,t.parse)("["+e+"]");if(!Array.isArray(i))return[];const s=[];for(const t of i)"string"==typeof t&&s.push(t);return await a(s,n)}var l=n(400);class u{constructor(t){this.tagToGlobalOptions=t,this.currentHeadingIndex=[],this.orbitToCurrentIndex={},this.baseIdToCount={},this.indexInfoArray=[],this.idToIndexInfo={},this.unitToId=new Map,this.title=""}createIndex(t,e){if("heading"===t){if(this.currentHeadingIndex.length<e)for(let t=this.currentHeadingIndex.length;t<e;t++)this.currentHeadingIndex.push(0);else{for(let t=e;t<this.currentHeadingIndex.length;t++)this.currentHeadingIndex[t]=0;for(const t of Object.keys(this.orbitToCurrentIndex)){const n=this.orbitToCurrentIndex[t];if(!(void 0===n||n.length<e))for(let t=e;t<n.length;t++)n[t]=0}}return this.currentHeadingIndex[e-1]++,this.currentHeadingIndex.slice(0,e)}let n=this.orbitToCurrentIndex[t];if(void 0===n&&(n=[],this.orbitToCurrentIndex[t]=n),n.length<e)for(let t=n.length;t<e;t++)n.push(0);if(this.currentHeadingIndex.length<e-1)for(let t=this.currentHeadingIndex.length;t<e-1;t++)this.currentHeadingIndex.push(0);const i=this.currentHeadingIndex.slice(0,e-1);return i.push(++n[e-1]),i}countUnit(t){if(0===this.title.length&&"title"===t.tag&&(this.title=d(t)),"global"!==t.tag&&!0!==t.options.global){const e=g("string"==typeof t.options.id?t.options.id:f(t)),n=this.baseIdToCount[e]=(this.baseIdToCount[e]??0)+1,i=n>1||0===e.length?`${e}~${n}`:e;let s=t.options.orbit??y("orbit",t.tag,this.tagToGlobalOptions);"string"==typeof s&&0!==s.length||(s=t.tag);let o=t.options.level??y("level",t.tag,this.tagToGlobalOptions)??y("level",s,this.tagToGlobalOptions);("number"!=typeof o||o<=0||o%1!=0)&&(o=1);const r={index:this.createIndex(s,o),id:i,orbit:s,unit:t};this.indexInfoArray.push(r),this.idToIndexInfo[i]=r,this.unitToId.set(t,i)}for(const e of Object.keys(t.options)){const n=t.options[e];Array.isArray(n)&&this.countSTDN(n)}this.countSTDN(t.children)}countSTDN(t){for(const e of t)for(const t of e)"string"!=typeof t&&this.countUnit(t)}}function d(t){return h(t.children)}function h(t){const e=[];for(const n of t){let t="";for(const e of n)t+="string"!=typeof e?d(e):e;e.push(t)}return e.join("\n")}function f(t){return p(t.children)}function p(t){if(0===t.length)return"";let e="";for(const n of t[0])e+="string"!=typeof n?f(n):n;return e}function g(t){return t.replace(/[^\s\w-]/g,"").toLowerCase().trim().split(/[\s_-]+/).join("-")}function m(t,e,n){const i=n[e];return void 0===i?[]:i[t]??[]}function y(t,e,n){const i=m(t,e,n);if(0!==i.length)return i[i.length-1]}function v(t,e){const n=e[t];if(void 0===n)return[];const i=n.__;return void 0===i?[]:i.flat()}function b(t,e,n){const i=m(t,e,n),s=[];for(const t of i)"string"==typeof t&&s.push(t);return s}async function T(t,e,n,i){return await a(b(t,e,n),i)}async function x(t,e,n={}){0===e.length&&(e=location.href);const i={},s={};void 0!==n.builtInTagToUnitCompiler&&Object.assign(s,n.builtInTagToUnitCompiler);const o=[],r=[];for(const e of t){if(0===e.length)continue;const t=e[0];if("string"!=typeof t)if("global"!==t.tag){if(!0===t.options.global){let e=i[t.tag];void 0===e&&(i[t.tag]=e={}),void 0===e.__?e.__=[t.children]:e.__.push(t.children);for(const n of Object.keys(t.options)){if("global"===n||"__"===n)continue;const i=t.options[n];if(void 0===i)continue;const s=e[n];void 0===s?e[n]=[i]:s.push(i)}}}else{const e=t.options.mod;"string"==typeof e&&(o.push(`https://cdn.jsdelivr.net/gh/st-mod/${e}/main.css`),r.push(`https://cdn.jsdelivr.net/gh/st-mod/${e}/ucs.js`));const n=t.options.css;"string"==typeof n&&o.push(`https://cdn.jsdelivr.net/gh/st-mod/${n}/main.css`);const i=t.options.ucs;"string"==typeof i&&r.push(`https://cdn.jsdelivr.net/gh/st-mod/${i}/ucs.js`);{const e=t.options["mod-gh"];"string"==typeof e&&(o.push(`https://cdn.jsdelivr.net/gh/${e}/main.css`),r.push(`https://cdn.jsdelivr.net/gh/${e}/ucs.js`))}{const e=t.options["css-gh"];"string"==typeof e&&o.push(`https://cdn.jsdelivr.net/gh/${e}/main.css`)}{const e=t.options["ucs-gh"];"string"==typeof e&&r.push(`https://cdn.jsdelivr.net/gh/${e}/ucs.js`)}{const e=t.options["css-src"];"string"==typeof e&&o.push(e)}{const e=t.options["ucs-src"];"string"==typeof e&&r.push(e)}}}const c=(await a(o,e)).map((t=>`@import ${JSON.stringify(t)};`)).join("");for(const t of await a(r,e))try{Object.assign(s,await new Function(`return import(${JSON.stringify(t)})`)())}catch(t){console.log(t)}const l=new u(i);return l.countSTDN(t),{css:c,dir:e,indexInfoArray:l.indexInfoArray,idToIndexInfo:l.idToIndexInfo,tagToGlobalOptions:i,tagToUnitCompiler:s,title:l.title,unitToId:l.unitToId}}class w{constructor(t,e=[]){this.element=document.createElement(t),this.classList=this.element.classList,this.style=this.element.style,this.dataset=this.element.dataset,this.childNodes=this.element.childNodes,this.children=this.element.children;for(let t=0;t<e.length;t++){const n=e[t].replace(/\s/g,"-");if(""!==n)try{this.element.classList.add(n)}catch(t){console.log(t)}}}append(...t){return this.element.append(...t.map((t=>t instanceof w?t.element:t))),this}prepend(...t){return this.element.prepend(...t.map((t=>t instanceof w?t.element:t))),this}after(...t){return this.element.after(...t.map((t=>t instanceof w?t.element:t))),this}before(...t){return this.element.before(...t.map((t=>t instanceof w?t.element:t))),this}setText(t){return this.element.textContent=t,this}setHTML(t){return this.element.innerHTML=t,this}scrollBy(t){return this.element.scrollBy(t),this}scrollIntoView(t){return this.element.scrollIntoView(t),this}getBoundingClientRect(){return this.element.getBoundingClientRect()}getClientRects(){return this.element.getClientRects()}setAttribute(t,e){try{this.element.setAttribute(t,e)}catch(t){console.log(t)}return this}removeAttribute(t){return this.element.removeAttribute(t),this}getAttribute(t){return this.element.getAttribute(t)}hasAttribute(t){return this.element.hasAttribute(t)}}class I extends w{constructor(t=[]){super("div",t)}addEventListener(t,e,n){return this.element.addEventListener(t,e,n),this}}class j extends w{constructor(t=[]){super("span",t)}addEventListener(t,e,n){return this.element.addEventListener(t,e,n),this}}class S{constructor(t){this.context=t,this.unitToCompiling=new Map}async compileUnit(t){if(!0===this.unitToCompiling.get(t))return S.createErrorElement("Loop");if("global"===t.tag||!0===t.options.global)return new I(["unit","global"]).element;this.unitToCompiling.set(t,!0);let n=t.options["compile-with"]??y("compile-with",t.tag,this.context.tagToGlobalOptions);"string"==typeof n&&0!==n.length||(n=t.tag);const i=this.context.tagToUnitCompiler[n];let o;if(void 0!==i){try{o=await i(t,this)}catch(t){console.log(t),o=S.createErrorElement("Broken")}if(o.classList.contains("warn"))return o.classList.add("unit"),this.unitToCompiling.set(t,!1),o}else{let e;S.supportedHTMLTags.includes(n)?(o=document.createElement(n),e=S.supportedHTMLTagsWithInlineChildren.includes(n)?await this.compileInlineSTDN(t.children):await this.compileSTDN(t.children)):S.supportedSVGTags.includes(n)?(o=document.createElementNS("http://www.w3.org/2000/svg",n),e=await this.compileInlineSTDN(t.children)):(o=document.createElement("div"),e=await this.compileSTDN(t.children)),o.append(e)}o.classList.add("unit");try{o.classList.add(n),"string"==typeof t.options.class&&o.classList.add(...t.options.class.trim().split(/\s+/))}catch(t){console.log(t)}const r=this.context.unitToId.get(t);void 0!==r&&(o.id=r);for(const n of Object.keys(t.options)){if("id"===n||"class"===n)continue;let i=n;if(n.startsWith("data-")||S.supportedHTMLAttributes.includes(n)||(i=`data-${n}`),o.hasAttribute(i))continue;let r=t.options[n];if(!0===r?r="":"number"==typeof r&&(r=r.toString()),"string"==typeof r){this.context.dir.length>0&&("src"===i||"href"===i)&&e(r)&&(r=s(r,this.context.dir));try{o.setAttribute(i,r)}catch(t){console.log(t)}}}return this.unitToCompiling.set(t,!1),o}async compileInline(t){return"string"!=typeof t?await this.compileUnit(t):new Text(t)}async compileLine(t){const e=new DocumentFragment;for(const n of t)e.append(await this.compileInline(n));return e}async compileInlineSTDN(t){const e=new DocumentFragment;for(let n=0;n<t.length;n++)e.append(await this.compileLine(t[n])),n!==t.length-1&&e.append(new Text("\n"));return e}async compileSTDN(t){const e=new DocumentFragment;for(const n of t)e.append(new I(["st-line"]).append(await this.compileLine(n)).element);return e}static createErrorElement(t){return new j(["unit","warn"]).setText(t).element}}async function A(t,e="",n={}){const i=(0,l.Qc)(t);if(void 0===i)return;const s=await x(i,e,n),o=new S(s);return{documentFragment:await o.compileSTDN(i),context:s}}async function C(t,e={}){const n=[],i=[];for(const{string:e,dir:s}of t){const t=(0,l.Qc)(e);void 0!==t?(r(t,s),n.push(...t),i.push(t.length)):i.push(0)}const s=await x(n,"",e),o=new S(s);return{documentFragment:await o.compileSTDN(n),context:s,partLengths:i}}S.supportedHTMLTags=["address","article","aside","footer","header","h1","h2","h3","h4","h5","h6","main","nav","section","blockquote","dd","div","dl","dt","figcaption","figure","hr","li","ol","p","pre","ul","a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","area","audio","img","map","track","video","iframe","del","ins","caption","col","colgroup","table","tbody","td","tfoot","th","thead","tr"],S.supportedHTMLTagsWithInlineChildren=["a","abbr","b","bdi","bdo","br","cite","code","data","dfn","em","i","kbd","mark","q","rp","rt","ruby","s","samp","small","span","strong","sub","sup","time","u","var","wbr","audio","img","track","video","iframe","del","ins","col","colgroup","table","tbody","tfoot","thead","tr"],S.supportedSVGTags=["animate","animateMotion","circle","ellipse","foreignObject","g","image","path","rect","svg","text","textPath","tspan"],S.supportedHTMLAttributes=["accesskey","align","allow","alt","autoplay","cite","class","cols","colspan","controls","coords","crossorigin","datetime","decoding","default","dir","download","draggable","for","headers","href","hreflang","id","kind","label","lang","loop","muted","name","open","ping","poster","preload","referrerpolicy","rel","reversed","rows","rowspan","sandbox","scope","span","spellcheck","src","srcdoc","srclang","srcset","start","style","tabindex","target","title","translate","usemap","value","attributeName","begin","d","dur","fill","keyPoints","keyTimes","path","preserveAspectRatio","repeatCount","rotate","textLength","values","viewBox","x","y"]})();var s=i.Si,o=i.AT,r=i.MY,a=i.l7,c=i.qP,l=i.VO,u=i.Uf,d=i.wh,h=i.Sl,f=i.t$,p=i.Gk,g=i.wS,m=i.wT,y=i.r$,v=i.tC,b=i.q0,T=i.xU,x=i.Iz,w=i.c4,I=i.dt,j=i.FW;export{s as Compiler,o as Counter,r as compile,a as extractContext,c as fixURLInSTDN,l as fixURLInUnit,u as getGlobalChildren,d as getGlobalOptionArray,h as getGlobalStrings,f as getGlobalURLs,p as getLastGlobalOption,g as isRelURL,m as multiCompile,y as relURLToAbsURL,v as stdnToInlinePlainString,b as stdnToPlainString,T as stringToId,x as unitToInlinePlainString,w as unitToPlainString,I as urlsStrToAbsURLs,j as urlsToAbsURLs};