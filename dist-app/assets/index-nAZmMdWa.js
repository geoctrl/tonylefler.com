(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const tt=(e,t)=>e===t,Y=Symbol("solid-proxy"),Z={equals:tt};let nt=Ie;const U=1,ee=2,$e={owned:null,cleanups:null,context:null,owner:null};var y=null;let ae=null,rt=null,v=null,O=null,I=null,re=0;function Re(e,t){const n=v,r=y,s=e.length===0,i=t===void 0?r:t,l=s?$e:{owned:null,cleanups:null,context:i?i.context:null,owner:i},o=s?e:()=>e(()=>_(()=>ie(l)));y=l,v=null;try{return M(o,!0)}finally{v=n,y=r}}function V(e,t){t=t?Object.assign({},Z,t):Z;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(s=s(n.value)),je(n,s));return[Te.bind(n),r]}function k(e,t,n){const r=ze(e,t,!1,U);se(r)}function P(e,t,n){n=n?Object.assign({},Z,n):Z;const r=ze(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,se(r),Te.bind(r)}function _(e){if(v===null)return e();const t=v;v=null;try{return e()}finally{v=t}}function _e(e,t,n){const r=Array.isArray(e);let s,i=n&&n.defer;return l=>{let o;if(r){o=Array(e.length);for(let u=0;u<e.length;u++)o[u]=e[u]()}else o=e();if(i){i=!1;return}const c=_(()=>t(o,s,l));return s=o,c}}function ke(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function st(){return y}function it(e,t){const n=y,r=v;y=e,v=null;try{return M(t,!0)}catch(s){be(s)}finally{y=n,v=r}}function ot(e){const t=v,n=y;return Promise.resolve().then(()=>{v=t,y=n;let r;return M(e,!1),v=y=null,r?r.done:void 0})}function Ne(e,t){const n=Symbol("context");return{id:n,Provider:ut(n),defaultValue:e}}function ye(e){return y&&y.context&&y.context[e.id]!==void 0?y.context[e.id]:e.defaultValue}function pe(e){const t=P(e),n=P(()=>de(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}function Te(){if(this.sources&&this.state)if(this.state===U)se(this);else{const e=O;O=null,M(()=>te(this),!1),O=e}if(v){const e=this.observers?this.observers.length:0;v.sources?(v.sources.push(this),v.sourceSlots.push(e)):(v.sources=[this],v.sourceSlots=[e]),this.observers?(this.observers.push(v),this.observerSlots.push(v.sources.length-1)):(this.observers=[v],this.observerSlots=[v.sources.length-1])}return this.value}function je(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&M(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s],l=ae&&ae.running;l&&ae.disposed.has(i),(l?!i.tState:!i.state)&&(i.pure?O.push(i):I.push(i),i.observers&&De(i)),l||(i.state=U)}if(O.length>1e6)throw O=[],new Error},!1)),t}function se(e){if(!e.fn)return;ie(e);const t=re;lt(e,e.value,t)}function lt(e,t,n){let r;const s=y,i=v;v=y=e;try{r=e.fn(t)}catch(l){return e.pure&&(e.state=U,e.owned&&e.owned.forEach(ie),e.owned=null),e.updatedAt=n+1,be(l)}finally{v=i,y=s}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?je(e,r):e.value=r,e.updatedAt=n)}function ze(e,t,n,r=U,s){const i={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:y?y.context:null,pure:n};return y===null||y!==$e&&(y.owned?y.owned.push(i):y.owned=[i]),i}function Be(e){if(e.state===0)return;if(e.state===ee)return te(e);if(e.suspense&&_(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<re);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===U)se(e);else if(e.state===ee){const r=O;O=null,M(()=>te(e,t[0]),!1),O=r}}function M(e,t){if(O)return e();let n=!1;t||(O=[]),I?n=!0:I=[],re++;try{const r=e();return ct(n),r}catch(r){n||(I=null),O=null,be(r)}}function ct(e){if(O&&(Ie(O),O=null),e)return;const t=I;I=null,t.length&&M(()=>nt(t),!1)}function Ie(e){for(let t=0;t<e.length;t++)Be(e[t])}function te(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const r=e.sources[n];if(r.sources){const s=r.state;s===U?r!==t&&(!r.updatedAt||r.updatedAt<re)&&Be(r):s===ee&&te(r,t)}}}function De(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=ee,n.pure?O.push(n):I.push(n),n.observers&&De(n))}}function ie(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),l=n.observerSlots.pop();r<s.length&&(i.sourceSlots[l]=r,s[r]=i,n.observerSlots[r]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)ie(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function at(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function be(e,t=y){throw at(e)}function de(e){if(typeof e=="function"&&!e.length)return de(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=de(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function ut(e,t){return function(r){let s;return k(()=>s=_(()=>(y.context={...y.context,[e]:r.value},pe(()=>r.children))),void 0),s}}function m(e,t){return _(()=>e(t||{}))}function G(){return!0}const he={get(e,t,n){return t===Y?n:e.get(t)},has(e,t){return t===Y?!0:e.has(t)},set:G,deleteProperty:G,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:G,deleteProperty:G}},ownKeys(e){return e.keys()}};function ue(e){return(e=typeof e=="function"?e():e)?e:{}}function ft(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function R(...e){let t=!1;for(let l=0;l<e.length;l++){const o=e[l];t=t||!!o&&Y in o,e[l]=typeof o=="function"?(t=!0,P(o)):o}if(t)return new Proxy({get(l){for(let o=e.length-1;o>=0;o--){const c=ue(e[o])[l];if(c!==void 0)return c}},has(l){for(let o=e.length-1;o>=0;o--)if(l in ue(e[o]))return!0;return!1},keys(){const l=[];for(let o=0;o<e.length;o++)l.push(...Object.keys(ue(e[o])));return[...new Set(l)]}},he);const n={},r=Object.create(null);for(let l=e.length-1;l>=0;l--){const o=e[l];if(!o)continue;const c=Object.getOwnPropertyNames(o);for(let u=c.length-1;u>=0;u--){const f=c[u];if(f==="__proto__"||f==="constructor")continue;const a=Object.getOwnPropertyDescriptor(o,f);if(!r[f])r[f]=a.get?{enumerable:!0,configurable:!0,get:ft.bind(n[f]=[a.get.bind(o)])}:a.value!==void 0?a:void 0;else{const g=n[f];g&&(a.get?g.push(a.get.bind(o)):a.value!==void 0&&g.push(()=>a.value))}}}const s={},i=Object.keys(r);for(let l=i.length-1;l>=0;l--){const o=i[l],c=r[o];c&&c.get?Object.defineProperty(s,o,c):s[o]=c?c.value:void 0}return s}function we(e,...t){if(Y in e){const s=new Set(t.length>1?t.flat():t[0]),i=t.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},he));return i.push(new Proxy({get(l){return s.has(l)?void 0:e[l]},has(l){return s.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!s.has(l))}},he)),i}const n={},r=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(e)){const i=Object.getOwnPropertyDescriptor(e,s),l=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let o=!1,c=0;for(const u of t)u.includes(s)&&(o=!0,l?r[c][s]=i.value:Object.defineProperty(r[c],s,i)),++c;o||(l?n[s]=i.value:Object.defineProperty(n,s,i))}return[...r,n]}const dt=e=>`Stale read from <${e}>.`;function B(e){const t=e.keyed,n=P(()=>e.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return P(()=>{const r=n();if(r){const s=e.children;return typeof s=="function"&&s.length>0?_(()=>s(t?r:()=>{if(!_(n))throw dt("Show");return e.when})):s}return e.fallback},void 0,void 0)}const ht=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],gt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ht]),mt=new Set(["innerHTML","textContent","innerText","children"]),yt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),pt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function bt(e,t){const n=pt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const wt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),vt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function xt(e,t,n){let r=n.length,s=t.length,i=r,l=0,o=0,c=t[s-1].nextSibling,u=null;for(;l<s||o<i;){if(t[l]===n[o]){l++,o++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===l){const f=i<r?o?n[o-1].nextSibling:n[i-o]:c;for(;o<i;)e.insertBefore(n[o++],f)}else if(i===o)for(;l<s;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[i-1]&&n[o]===t[s-1]){const f=t[--s].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--i],f),t[s]=n[i]}else{if(!u){u=new Map;let a=o;for(;a<i;)u.set(n[a],a++)}const f=u.get(t[l]);if(f!=null)if(o<f&&f<i){let a=l,g=1,p;for(;++a<s&&a<i&&!((p=u.get(t[a]))==null||p!==f+g);)g++;if(g>f-o){const d=t[l];for(;o<f;)e.insertBefore(n[o++],d)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const Pe="_$DX_DELEGATE";function At(e,t,n,r={}){let s;return Re(i=>{s=i,t===document?e():A(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{s(),t.textContent=""}}function H(e,t,n){let r;const s=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},i=t?()=>_(()=>document.importNode(r||(r=s()),!0)):()=>(r||(r=s())).cloneNode(!0);return i.cloneNode=i,i}function Ue(e,t=window.document){const n=t[Pe]||(t[Pe]=new Set);for(let r=0,s=e.length;r<s;r++){const i=e[r];n.has(i)||(n.add(i),t.addEventListener(i,Rt))}}function ne(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function St(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function Pt(e,t){t==null?e.removeAttribute("class"):e.className=t}function Lt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function Ct(e,t,n={}){const r=Object.keys(t||{}),s=Object.keys(n);let i,l;for(i=0,l=s.length;i<l;i++){const o=s[i];!o||o==="undefined"||t[o]||(Le(e,o,!1),delete n[o])}for(i=0,l=r.length;i<l;i++){const o=r[i],c=!!t[o];!o||o==="undefined"||n[o]===c||!c||(Le(e,o,!0),n[o]=c)}return n}function Ot(e,t,n){if(!t)return n?ne(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let s,i;for(i in n)t[i]==null&&r.removeProperty(i),delete n[i];for(i in t)s=t[i],s!==n[i]&&(r.setProperty(i,s),n[i]=s);return n}function ve(e,t={},n,r){const s={};return r||k(()=>s.children=F(e,t.children,s.children)),k(()=>t.ref&&t.ref(e)),k(()=>Et(e,t,n,!0,s,!0)),s}function A(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return F(e,t,r,n);k(s=>F(e,t(),s,n),r)}function Et(e,t,n,r,s={},i=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;s[l]=Ce(e,l,null,s[l],n,i)}for(const l in t){if(l==="children"){r||F(e,t.children);continue}const o=t[l];s[l]=Ce(e,l,o,s[l],n,i)}}function $t(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Le(e,t,n){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)e.classList.toggle(r[s],n)}function Ce(e,t,n,r,s,i){let l,o,c,u,f;if(t==="style")return Ot(e,n,r);if(t==="classList")return Ct(e,n,r);if(n===r)return r;if(t==="ref")i||n(e);else if(t.slice(0,3)==="on:"){const a=t.slice(3);r&&e.removeEventListener(a,r),n&&e.addEventListener(a,n)}else if(t.slice(0,10)==="oncapture:"){const a=t.slice(10);r&&e.removeEventListener(a,r,!0),n&&e.addEventListener(a,n,!0)}else if(t.slice(0,2)==="on"){const a=t.slice(2).toLowerCase(),g=wt.has(a);if(!g&&r){const p=Array.isArray(r)?r[0]:r;e.removeEventListener(a,p)}(g||n)&&(Lt(e,a,n,g),g&&Ue([a]))}else if(t.slice(0,5)==="attr:")ne(e,t.slice(5),n);else if((f=t.slice(0,5)==="prop:")||(c=mt.has(t))||!s&&((u=bt(t,e.tagName))||(o=gt.has(t)))||(l=e.nodeName.includes("-")))f&&(t=t.slice(5),o=!0),t==="class"||t==="className"?Pt(e,n):l&&!o&&!c?e[$t(t)]=n:e[u||t]=n;else{const a=s&&t.indexOf(":")>-1&&vt[t.split(":")[0]];a?St(e,a,t,n):ne(e,yt[t]||t,n)}return n}function Rt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}});n;){const r=n[t];if(r&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?r.call(n,s,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function F(e,t,n,r,s){for(;typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,l=r!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,i==="string"||i==="number")if(i==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data!==t&&(o.data=t):o=document.createTextNode(t),n=q(e,n,r,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t;else if(t==null||i==="boolean")n=q(e,n,r);else{if(i==="function")return k(()=>{let o=t();for(;typeof o=="function";)o=o();n=F(e,o,n,r)}),()=>n;if(Array.isArray(t)){const o=[],c=n&&Array.isArray(n);if(ge(o,t,n,s))return k(()=>n=F(e,o,n,r,!0)),()=>n;if(o.length===0){if(n=q(e,n,r),l)return n}else c?n.length===0?Oe(e,o,r):xt(e,n,o):(n&&q(e),Oe(e,o));n=o}else if(t.nodeType){if(Array.isArray(n)){if(l)return n=q(e,n,r,t);q(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ge(e,t,n,r){let s=!1;for(let i=0,l=t.length;i<l;i++){let o=t[i],c=n&&n[i],u;if(!(o==null||o===!0||o===!1))if((u=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))s=ge(e,o,c)||s;else if(u==="function")if(r){for(;typeof o=="function";)o=o();s=ge(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||s}else e.push(o),s=!0;else{const f=String(o);c&&c.nodeType===3&&c.data===f?e.push(c):e.push(document.createTextNode(f))}}return s}function Oe(e,t,n=null){for(let r=0,s=t.length;r<s;r++)e.insertBefore(t[r],n)}function q(e,t,n,r){if(n===void 0)return e.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(s!==o){const c=o.parentNode===e;!i&&!l?c?e.replaceChild(s,o):e.insertBefore(s,n):c&&o.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const _t=!1;function Me(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let n=!1;function r(s,i){if(n)return!(n=!1);const l={to:s,options:i,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const o of e)o.listener({...l,from:o.location,retry:c=>{c&&(n=!0),o.navigate(s,{...i,resolve:!1})}});return!l.defaultPrevented}return{subscribe:t,confirm:r}}let me;function xe(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),me=window.history.state._depth}xe();function kt(e){return{...e,_depth:window.history.state&&window.history.state._depth}}function Nt(e,t){let n=!1;return()=>{const r=me;xe();const s=r==null?null:me-r;if(n){n=!1;return}s&&t(s)?(n=!0,window.history.go(-s)):e()}}const Tt=/^(?:[a-z0-9]+:)?\/\//i,jt=/^\/+|(\/)\/+$/g,qe="http://sr";function D(e,t=!1){const n=e.replace(jt,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function Q(e,t,n){if(Tt.test(t))return;const r=D(e),s=n&&D(n);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+D(t,!i)}function zt(e,t){if(e==null)throw new Error(t);return e}function Bt(e,t){return D(e).replace(/\/*(\*.*)?$/g,"")+D(t)}function Fe(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function It(e,t,n){const[r,s]=e.split("/*",2),i=r.split("/").filter(Boolean),l=i.length;return o=>{const c=o.split("/").filter(Boolean),u=c.length-l;if(u<0||u>0&&s===void 0&&!t)return null;const f={path:l?"":"/",params:{}},a=g=>n===void 0?void 0:n[g];for(let g=0;g<l;g++){const p=i[g],d=c[g],h=p[0]===":",b=h?p.slice(1):p;if(h&&fe(d,a(b)))f.params[b]=d;else if(h||!fe(d,p))return null;f.path+=`/${d}`}if(s){const g=u?c.slice(-u).join("/"):"";if(fe(g,a(s)))f.params[s]=g;else return null}return f}}function fe(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Dt(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function Ke(e){const t=new Map,n=st();return new Proxy({},{get(r,s){return t.has(s)||it(n,()=>t.set(s,P(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function We(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const s=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(n+=t[1]),r=r.slice(t[0].length);return We(r).reduce((i,l)=>[...i,...s.map(o=>o+l)],[])}const Ut=100,Ve=Ne(),oe=Ne(),Ae=()=>zt(ye(Ve),"Make sure your app is wrapped in a <Router />"),Mt=()=>ye(oe)||Ae().base,qt=e=>{const t=Mt();return P(()=>t.resolvePath(e()))},Ft=e=>{const t=Ae();return P(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Kt=()=>Ae().location;function Wt(e,t=""){const{component:n,load:r,children:s,info:i}=e,l=!s||Array.isArray(s)&&!s.length,o={key:e,component:n,load:r,info:i};return He(e.path).reduce((c,u)=>{for(const f of We(u)){const a=Bt(t,f);let g=l?a:a.split("/*",1)[0];g=g.split("/").map(p=>p.startsWith(":")||p.startsWith("*")?p:encodeURIComponent(p)).join("/"),c.push({...o,originalPath:f,pattern:g,matcher:It(g,!l,e.matchFilters)})}return c},[])}function Vt(e,t=0){return{routes:e,score:Dt(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let s=e.length-1;s>=0;s--){const i=e[s],l=i.matcher(n);if(!l)return null;r.unshift({...l,route:i})}return r}}}function He(e){return Array.isArray(e)?e:[e]}function Xe(e,t="",n=[],r=[]){const s=He(e);for(let i=0,l=s.length;i<l;i++){const o=s[i];if(o&&typeof o=="object"){o.hasOwnProperty("path")||(o.path="");const c=Wt(o,t);for(const u of c){n.push(u);const f=Array.isArray(o.children)&&o.children.length===0;if(o.children&&!f)Xe(o.children,u.pattern,n,r);else{const a=Vt([...n],r.length);r.push(a)}n.pop()}}}return n.length?r:r.sort((i,l)=>l.score-i.score)}function Ge(e,t){for(let n=0,r=e.length;n<r;n++){const s=e[n].matcher(t);if(s)return s}return[]}function Ht(e,t){const n=new URL(qe),r=P(c=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),c}},n,{equals:(c,u)=>c.href===u.href}),s=P(()=>r().pathname),i=P(()=>r().search,!0),l=P(()=>r().hash),o=()=>"";return{get pathname(){return s()},get search(){return i()},get hash(){return l()},get state(){return t()},get key(){return o()},query:Ke(_e(i,()=>Fe(r())))}}let N;function Xt(e,t,n={}){const{signal:[r,s],utils:i={}}=e,l=i.parsePath||(w=>w),o=i.renderPath||(w=>w),c=i.beforeLeave||Me(),u=Q("",n.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!r().value&&s({value:u,replace:!0,scroll:!1});const[f,a]=V(!1),g=async w=>{a(!0);try{await ot(w)}finally{a(!1)}},[p,d]=V(r().value),[h,b]=V(r().state),x=Ht(p,h),E=[],$=V([]),T={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(w){return Q(u,w)}};return k(()=>{const{value:w,state:S}=r();_(()=>{w!==p()&&g(()=>{N="native",d(w),b(S),$[1]([])}).then(()=>{N=void 0})})}),{base:T,location:x,isRouting:f,renderPath:o,parsePath:l,navigatorFactory:Qe,beforeLeave:c,preloadRoute:Ze,submissions:$};function X(w,S,j){_(()=>{if(typeof S=="number"){S&&(i.go?i.go(S):console.warn("Router integration does not support relative routing"));return}const{replace:le,resolve:ce,scroll:z,state:K}={replace:!1,resolve:!0,scroll:!0,...j},W=ce?w.resolvePath(S):Q("",S);if(W===void 0)throw new Error(`Path '${S}' is not a routable path`);if(E.length>=Ut)throw new Error("Too many redirects");const Se=p();if((W!==Se||K!==h())&&!_t){if(c.confirm(W,j)){const et=E.push({value:Se,replace:le,scroll:z,state:h()});g(()=>{N="navigate",d(W),b(K),$[1]([])}).then(()=>{E.length===et&&(N=void 0,Ye({value:W,state:K}))})}}})}function Qe(w){return w=w||ye(oe)||T,(S,j)=>X(w,S,j)}function Ye(w){const S=E[0];S&&((w.value!==S.value||w.state!==S.state)&&s({...w,replace:S.replace,scroll:S.scroll}),E.length=0)}function Ze(w,S){const j=Ge(t(),w.pathname),le=N;N="preload";for(let ce in j){const{route:z,params:K}=j[ce];z.component&&z.component.preload&&z.component.preload(),S&&z.load&&z.load({params:K,location:{pathname:w.pathname,search:w.search,hash:w.hash,query:Fe(w),state:null,key:""},intent:"preload"})}N=le}}function Gt(e,t,n,r,s){const{base:i,location:l}=e,{pattern:o,component:c,load:u}=r().route,f=P(()=>r().path);c&&c.preload&&c.preload();const a=u?u({params:s,location:l,intent:N||"initial"}):void 0;return{parent:t,pattern:o,path:f,params:s,outlet:()=>c?m(c,{params:s,location:l,data:a,get children(){return n()}}):n(),resolvePath(p){return Q(i.path(),p,f())}}}const Jt=e=>t=>{const{base:n}=t,r=pe(()=>t.children),s=P(()=>Xe(t.root?{component:t.root,children:r()}:r(),t.base||"")),i=Xt(e,s,{base:n});return e.create&&e.create(i),m(Ve.Provider,{value:i,get children(){return m(Qt,{routerState:i,get branches(){return s()}})}})};function Qt(e){const t=P(()=>Ge(e.branches,e.routerState.location.pathname)),n=Ke(()=>{const l=t(),o={};for(let c=0;c<l.length;c++)Object.assign(o,l[c].params);return o}),r=[];let s;const i=P(_e(t,(l,o,c)=>{let u=o&&l.length===o.length;const f=[];for(let a=0,g=l.length;a<g;a++){const p=o&&o[a],d=l[a];c&&p&&d.route.key===p.route.key?f[a]=c[a]:(u=!1,r[a]&&r[a](),Re(h=>{r[a]=h,f[a]=Gt(e.routerState,f[a-1]||e.routerState.base,Yt(()=>i()[a+1]),()=>t()[a],n)}))}return r.splice(l.length).forEach(a=>a()),c&&u?c:(s=f[0],f)}));return m(B,{get when(){return i()&&s},keyed:!0,children:l=>m(oe.Provider,{value:l,get children(){return l.outlet()}})})}const Yt=e=>()=>m(B,{get when(){return e()},keyed:!0,children:t=>m(oe.Provider,{value:t,get children(){return t.outlet()}})}),Ee=e=>{const t=pe(()=>e.children);return R(e,{get children(){return t()}})};function Zt([e,t],n,r){return[n?()=>n(e()):e,r?s=>t(r(s)):t]}function en(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function tn(e){let t=!1;const n=s=>typeof s=="string"?{value:s}:s,r=Zt(V(n(e.get()),{equals:(s,i)=>s.value===i.value}),void 0,s=>(!t&&e.set(s),s));return e.init&&ke(e.init((s=e.get())=>{t=!0,r[1](n(s)),t=!1})),Jt({signal:r,create:e.create,utils:e.utils})}function nn(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function rn(e,t){const n=en(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}const sn=new Map;function on(e=!0,t=!1,n="/_server"){return r=>{const s=r.base.path(),i=r.navigatorFactory(r.base);let l={};function o(d){return d.namespaceURI==="http://www.w3.org/2000/svg"}function c(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const h=d.composedPath().find(X=>X instanceof Node&&X.nodeName.toUpperCase()==="A");if(!h||t&&!h.hasAttribute("link"))return;const b=o(h),x=b?h.href.baseVal:h.href;if((b?h.target.baseVal:h.target)||!x&&!h.hasAttribute("state"))return;const $=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||$&&$.includes("external"))return;const T=b?new URL(x,document.baseURI):new URL(x);if(!(T.origin!==window.location.origin||s&&T.pathname&&!T.pathname.toLowerCase().startsWith(s.toLowerCase())))return[h,T]}function u(d){const h=c(d);if(!h)return;const[b,x]=h,E=r.parsePath(x.pathname+x.search+x.hash),$=b.getAttribute("state");d.preventDefault(),i(E,{resolve:!1,replace:b.hasAttribute("replace"),scroll:!b.hasAttribute("noscroll"),state:$&&JSON.parse($)})}function f(d){const h=c(d);if(!h)return;const[b,x]=h;l[x.pathname]||r.preloadRoute(x,b.getAttribute("preload")!=="false")}function a(d){const h=c(d);if(!h)return;const[b,x]=h;l[x.pathname]||(l[x.pathname]=setTimeout(()=>{r.preloadRoute(x,b.getAttribute("preload")!=="false"),delete l[x.pathname]},200))}function g(d){const h=c(d);if(!h)return;const[,b]=h;l[b.pathname]&&(clearTimeout(l[b.pathname]),delete l[b.pathname])}function p(d){let h=d.submitter&&d.submitter.hasAttribute("formaction")?d.submitter.getAttribute("formaction"):d.target.getAttribute("action");if(!h)return;if(!h.startsWith("https://action/")){const x=new URL(h,qe);if(h=r.parsePath(x.pathname+x.search),!h.startsWith(n))return}if(d.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const b=sn.get(h);if(b){d.preventDefault();const x=new FormData(d.target);d.submitter&&d.submitter.name&&x.append(d.submitter.name,d.submitter.value),b.call(r,x)}}Ue(["click","submit"]),document.addEventListener("click",u),e&&(document.addEventListener("mouseover",a),document.addEventListener("mouseout",g),document.addEventListener("focusin",f),document.addEventListener("touchstart",f)),document.addEventListener("submit",p),ke(()=>{document.removeEventListener("click",u),e&&(document.removeEventListener("mouseover",a),document.removeEventListener("mouseout",g),document.removeEventListener("focusin",f),document.removeEventListener("touchstart",f)),document.removeEventListener("submit",p)})}}function ln(e){const t=()=>({value:window.location.pathname+window.location.search+window.location.hash,state:window.history.state}),n=Me();return tn({get:t,set({value:r,replace:s,scroll:i,state:l}){s?window.history.replaceState(kt(l),"",r):window.history.pushState(l,"",r),rn(window.location.hash.slice(1),i),xe()},init:r=>nn(window,"popstate",Nt(r,s=>{if(s&&s<0)return!n.confirm(s);{const i=t();return!n.confirm(i.value,{state:i.state})}})),create:on(e.preload,e.explicitLinks,e.actionBase),utils:{go:r=>window.history.go(r),beforeLeave:n}})(e)}var cn=H("<a>");function an(e){e=R({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=we(e,["href","state","class","activeClass","inactiveClass","end"]),n=qt(()=>e.href),r=Ft(n),s=Kt(),i=P(()=>{const l=n();if(l===void 0)return[!1,!1];const o=D(l.split(/[?#]/,1)[0]).toLowerCase(),c=D(s.pathname).toLowerCase();return[e.end?o===c:c.startsWith(o),o===c]});return(()=>{var l=cn();return ve(l,R(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!i()[0],[e.activeClass]:i()[0],...t.classList}},link:"",get"aria-current"(){return i()[1]?"page":void 0}}),!1,!1),l})()}var un=H("<div>home");const fn={},dn=e=>(R(fn,e),un()),Je=(...e)=>e.filter(Boolean).join(" "),L=(e,...t)=>e?t.join(" "):"";var hn=H("<svg><use>");const gn={},J=e=>{const t=R(gn,e),[,n]=we(t,["name","class"]);return(()=>{var r=hn(),s=r.firstChild;return ve(r,R(n,{"aria-hidden":"true",get class(){return Je("inline-block fill-current",t.class,t.class?.includes("size-")?"":"size-5")}}),!0,!0),k(()=>ne(s,"href",`/assets/spritemap.490d1db6.svg#sprite-${t.name}`)),r})()};function mn(e,t,n){return t[e]?t[e]:n}var yn=H("<button>");const pn={variant:"secondary",alignContent:"center",size:"md"},C=e=>{const t=R(pn,e),[,n]=we(t,["class","variant","iconLeft","iconRight","iconOnly","dropdown","block","alignContent","size"]),r=mn(t.size,{sm:"size-4",md:"size-4",lg:"size-5"},"size-4");return(()=>{var s=yn();return ve(s,R(n,{get class(){return Je("inline-flex select-none items-center whitespace-nowrap rounded-lg align-middle font-medium transition ease-out",t.class,L(t.size==="sm","gap-1.5 px-2 text-sm form-size-sm"),L(t.size==="md","gap-2 px-3 text-base form-size-md"),L(t.size==="lg","gap-2.5 px-4 text-lg form-size-lg"),L(t.variant==="primary","bg-primary-500 text-grey-100 hover:bg-primary-600 active:bg-primary-700"),L(t.variant==="secondary","bg-raisin-500/10 hover:bg-raisin-500/20 active:bg-raisin-500/25","dark:bg-grey-500/10 dark:text-grey-100 hover:dark:bg-grey-500/20 active:dark:bg-grey-500/25"),L(t.variant==="secondary-color","bg-primary-500/10 text-primary-500 hover:bg-primary-500/20 active:bg-primary-500/25"),L(t.variant==="border","border-2 border-solid border-grey-900/30 text-raisin-500 hover:border-grey-900/40 hover:bg-raisin-500/10 active:border-grey-900/50 active:bg-raisin-500/15","dark:border-grey-100/50 dark:text-grey-100 dark:hover:bg-grey-500/10 dark:active:bg-grey-100/15"),L(t.variant==="tertiary","hover:bg-raisin-500/10 active:bg-raisin-500/15","dark:text-grey-100 hover:dark:bg-grey-100/10 dark:active:bg-grey-100/15"),L(t.block,"flex w-full"),L(t.alignContent==="left","justify-start"),L(t.alignContent==="right","justify-end"),L(t.alignContent==="center","justify-center"),L(!!t.iconOnly,"px-0",L(t.size==="sm","w-8"),L(t.size==="md","w-10"),L(t.size==="lg","w-12")))}}),!1,!0),A(s,m(B,{get when(){return t.iconOnly},get children(){return m(J,R({get name(){return typeof t?.iconOnly=="string"?t.iconOnly:void 0},class:r},()=>typeof t?.iconOnly!="string"?t?.iconOnly:{}))}}),null),A(s,m(B,{get when(){return t.iconLeft&&!t.iconOnly},get children(){return m(J,R({get name(){return typeof t?.iconLeft=="string"?t.iconLeft:void 0},class:r},()=>typeof t?.iconLeft!="string"?t?.iconLeft:{}))}}),null),A(s,m(B,{get when(){return!t.iconOnly},get children(){return t.children}}),null),A(s,m(B,{get when(){return t.iconRight&&!t.iconOnly},get children(){return m(J,R({get name(){return typeof t?.iconRight=="string"?t.iconRight:void 0},class:r},()=>typeof t?.iconRight!="string"?t?.iconRight:{}))}}),null),A(s,m(B,{get when(){return t.dropdown&&!t.iconOnly},get children(){return m(J,{name:"caret-down-solid",class:r})}}),null),s})()};var bn=H('<div class=mb-8><div>hey</div><h2>Buttons</h2><p>This is a test</p><div class=mb-2><div>size</div><div class="flex items-center gap-2"></div></div><div class=mb-2><div>variants</div><div class="flex gap-2"></div></div><div class=mb-2><div>icons</div><div class="flex items-center gap-2"></div></div><div class=mb-2><div>icons prop passthrough</div><div class="flex gap-2"></div></div><div class=mb-2><div>iconOnly</div><div class="flex gap-2"></div></div><div class=mb-2><div>block');const wn=()=>(()=>{var e=bn(),t=e.firstChild;t.firstChild;var n=t.nextSibling,r=n.nextSibling,s=r.nextSibling,i=s.firstChild,l=i.nextSibling,o=s.nextSibling,c=o.firstChild,u=c.nextSibling,f=o.nextSibling,a=f.firstChild,g=a.nextSibling,p=f.nextSibling,d=p.firstChild,h=d.nextSibling,b=p.nextSibling,x=b.firstChild,E=x.nextSibling,$=b.nextSibling;return $.firstChild,A(t,m(an,{href:"/",children:"go home"}),null),A(l,m(C,{size:"sm",iconRight:"caret-down-solid",iconLeft:"arrow-left-regular",children:"Medium"}),null),A(l,m(C,{size:"md",iconRight:"caret-down-solid",iconLeft:"arrow-left-regular",children:"Medium"}),null),A(l,m(C,{size:"lg",iconRight:"caret-down-solid",iconLeft:"arrow-left-regular",children:"Medium"}),null),A(u,m(C,{variant:"primary",children:"Primary"}),null),A(u,m(C,{variant:"secondary",children:"Secondary"}),null),A(u,m(C,{variant:"secondary-color",children:"Secondary Color"}),null),A(u,m(C,{variant:"border",children:"Border"}),null),A(u,m(C,{variant:"tertiary",children:"Tertiary"}),null),A(g,m(C,{iconLeft:"arrow-left-regular",children:"iconLeft"}),null),A(g,m(C,{iconRight:"caret-down-solid",children:"iconRight"}),null),A(h,m(C,{iconLeft:{name:"face-awesome-regular",class:"text-warning-500 rotate-[45deg]"},children:"iconLeftProps"}),null),A(h,m(C,{iconRight:{name:"caret-down-solid",class:"rotate-[155deg] fill-primary-500"},children:"iconRightProps"}),null),A(E,m(C,{iconOnly:"face-awesome-regular",size:"sm"}),null),A(E,m(C,{iconOnly:"face-awesome-regular",size:"md"}),null),A(E,m(C,{iconOnly:"face-awesome-regular",size:"lg"}),null),A($,m(C,{block:!0,children:"block"}),null),e})(),vn=()=>[m(Ee,{path:"/",component:dn}),m(Ee,{path:"/components/button",component:wn})],xn=document.getElementById("root");At(()=>m(ln,{get children(){return m(vn,{})}}),xn);
