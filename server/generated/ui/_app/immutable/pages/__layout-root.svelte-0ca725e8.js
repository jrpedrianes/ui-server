import{X as se,S as z,i as P,s as q,e as y,b as N,E as A,h as v,N as X,C as G,V as Q,l as U,r as W,a as S,m as O,n as L,u as R,c as j,p as b,Y as x,M as k,T as ae,v as le,f as h,t as g,Z as H,_ as M,w as V,x as I,y as $,$ as J,B as E,g as fe,d as ue,I as ce,J as me,K as de,L as _e}from"../chunks/index-f283717a.js";import{g as pe}from"../chunks/get-namespace-a384fdef.js";import{s as ve}from"../chunks/search-attributes-9af734a4.js";import{r as Y,a as Z}from"../chunks/route-for-api-658a0b67.js";import{n as he}from"../chunks/notifications-dddf88f8.js";import{c as ge,i as te}from"../chunks/version-check-75d52bcc.js";import{f as be,N as we,E as ke}from"../chunks/error-boundary-7612d09d.js";import{f as ye}from"../chunks/settings-service-9f51a552.js";/* empty css                    */import Be from"./_header.svelte-e5f03535.js";import{p as re}from"../chunks/stores-62bcca1c.js";import{p as Ve}from"../chunks/persist-store-c4deb1a0.js";import{P as Ie}from"../chunks/page-title-ec87b710.js";import"../chunks/index-5dff130b.js";import"../chunks/route-for-cc3652eb.js";import"../chunks/get-public-path-029b12bd.js";import"../chunks/is-network-error-5f9e2367.js";import"../chunks/is-function-45497f08.js";import"../chunks/get-api-origin-aa9a7660.js";import"../chunks/index-cf7c7b94.js";import"../chunks/error-73a2de77.js";import"../chunks/navigation-fbe70647.js";import"../chunks/singletons-eca981c1.js";import"../chunks/link-1679e5ab.js";import"../chunks/settings-16907be6.js";import"../chunks/icon-c6a60499.js";import"../chunks/feature-tag-e8d805df.js";import"../chunks/nav-open-bbd3ebaf.js";import"../chunks/_nav-row-674aaed1.js";import"../chunks/empty-state-5e402c94.js";import"../chunks/tooltip-558f0bf8.js";import"../chunks/copyable-ddc34383.js";import"../chunks/copy-to-clipboard-c6080acc.js";import"../chunks/data-encoder-status-f4dae9cc.js";import"../chunks/data-converter-config-49e426af.js";import"../chunks/is-http-d28111f6.js";import"../chunks/modal-90d17380.js";import"../chunks/button-397b3a8c.js";import"../chunks/badge-46845e47.js";/* empty css                                                     */import"../chunks/namespaces-bbdb5c9d.js";const $e=(o,e)=>!o.auth.enabled||Boolean(e==null?void 0:e.email),Ee=async(o,e=fetch)=>{if(!o.runtimeEnvironment.isCloud)return await Y(Z("search-attributes"),{request:e}).then(t=>(t!=null&&t.keys&&ve.set(t.keys),t))},Ne=async(o=fetch)=>{const e=await o("https://api.github.com/repos/temporalio/ui-server/releases"),t=await e.json();if(!e.ok)return;let n;if(t.length>0){const{tag_name:r}=t[0];n=r.replace("v","")}return n},ee={namespaces:[]};async function Ce(o,e=fetch){if(o.runtimeEnvironment.isCloud)return ee;const t=await Y(Z("namespaces"),{request:e,onError:()=>he.add("error","Unable to fetch namespaces")});return t!=null?t:ee}const Te=async(o,e=fetch)=>{if(!o.runtimeEnvironment.isCloud)return await Y(Z("cluster"),{request:e}).then(t=>(ge.set(t),t))};var F=(o=>(o[o.TemporalVersion=1]="TemporalVersion",o[o.UIVersion=2]="UIVersion",o))(F||{});const K=Ve("closedBanners",null),Ue=o=>{var t;let e=(t=se(K))!=null?t:[];e=[...e,o],e=e.slice(e.length-10,e.length),K.set(e)};function ne(o){let e,t,n,r,s,i,a,l,f,u;return{c(){e=U("section"),t=U("a"),n=W(o[2]),r=S(),s=U("button"),i=W("\u2715"),this.h()},l(c){e=O(c,"SECTION",{class:!0,"data-cy":!0});var d=L(e);t=O(d,"A",{href:!0,target:!0});var _=L(t);n=R(_,o[2]),_.forEach(v),r=j(d),s=O(d,"BUTTON",{class:!0,"data-cy":!0});var w=L(s);i=R(w,"\u2715"),w.forEach(v),d.forEach(v),this.h()},h(){b(t,"href",o[3]),b(t,"target","_blank"),b(s,"class","text-black-600 absolute top-0 right-0 mr-5"),b(s,"data-cy","close-banner"),b(e,"class",a=x(`relative block text-center leading-10 ${o[1]}`)+" svelte-1xgik0j"),b(e,"data-cy",l=o[5].dataCy)},m(c,d){N(c,e,d),k(e,t),k(t,n),k(e,r),k(e,s),k(s,i),f||(u=ae(s,"click",o[8]),f=!0)},p(c,d){d&4&&le(n,c[2]),d&8&&b(t,"href",c[3]),d&2&&a!==(a=x(`relative block text-center leading-10 ${c[1]}`)+" svelte-1xgik0j")&&b(e,"class",a),d&32&&l!==(l=c[5].dataCy)&&b(e,"data-cy",l)},d(c){c&&v(e),f=!1,u()}}}function Oe(o){let e,t=o[4]&&ne(o);return{c(){t&&t.c(),e=y()},l(n){t&&t.l(n),e=y()},m(n,r){t&&t.m(n,r),N(n,e,r)},p(n,[r]){n[4]?t?t.p(n,r):(t=ne(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:A,o:A,d(n){t&&t.d(n),n&&v(e)}}}function Le(o,e,t){let n,r;X(o,K,c=>t(7,r=c));let{key:s}=e,{severity:i}=e,{message:a}=e,{link:l}=e,{shownBanner:f}=e;const u=()=>Ue(s);return o.$$set=c=>{t(5,e=G(G({},e),Q(c))),"key"in c&&t(0,s=c.key),"severity"in c&&t(1,i=c.severity),"message"in c&&t(2,a=c.message),"link"in c&&t(3,l=c.link),"shownBanner"in c&&t(6,f=c.shownBanner)},o.$$.update=()=>{o.$$.dirty&129&&t(4,n=!(r!=null?r:[]).includes(s)),o.$$.dirty&80&&(n||t(6,f++,f))},e=Q(e),[s,i,a,l,n,e,f,r,u]}class oe extends z{constructor(e){super(),P(this,e,Le,Oe,q,{key:0,severity:1,message:2,link:3,shownBanner:6})}}function De(o){let e,t,n;function r(i){o[6](i)}let s={key:o[2],severity:o[1],message:o[5],link:o[3],dataCy:"temporal-version-banner"};return o[0]!==void 0&&(s.shownBanner=o[0]),e=new oe({props:s}),H.push(()=>M(e,"shownBanner",r)),{c(){V(e.$$.fragment)},l(i){I(e.$$.fragment,i)},m(i,a){$(e,i,a),n=!0},p(i,a){const l={};!t&&a&1&&(t=!0,l.shownBanner=i[0],J(()=>t=!1)),e.$set(l)},i(i){n||(h(e.$$.fragment,i),n=!0)},o(i){g(e.$$.fragment,i),n=!1},d(i){E(e,i)}}}function Se(o){let e,t,n=o[4]&&De(o);return{c(){n&&n.c(),e=y()},l(r){n&&n.l(r),e=y()},m(r,s){n&&n.m(r,s),N(r,e,s),t=!0},p(r,[s]){r[4]&&n.p(r,s)},i(r){t||(h(n),t=!0)},o(r){g(n),t=!1},d(r){n&&n.d(r),r&&v(e)}}}function je(o,e,t){let n;X(o,re,D=>t(12,n=D));var r,s,i,a,l;let{shownBanner:f}=e;const{cluster:u}=n.stuff,c={High:"high",Medium:"medium",Low:"low"},{recommended:d,current:_}=(r=u==null?void 0:u.versionInfo)!==null&&r!==void 0?r:{},w=(i=(s=u==null?void 0:u.versionInfo)===null||s===void 0?void 0:s.alerts)===null||i===void 0?void 0:i[0],m=w?c[w.severity]:c.Low,p=`server-v${_==null?void 0:_.version}`,C=`https://github.com/temporalio/temporal/releases/tag/v${(l=(a=u==null?void 0:u.versionInfo)===null||a===void 0?void 0:a.recommended)===null||l===void 0?void 0:l.version}`,B=te(d==null?void 0:d.version,_==null?void 0:_.version),T=m===c.Low?`\u{1F4E5} Temporal v${d==null?void 0:d.version} is available`:`\u{1F4E5} ${w==null?void 0:w.message}`;function ie(D){f=D,t(0,f)}return o.$$set=D=>{"shownBanner"in D&&t(0,f=D.shownBanner)},[f,m,p,C,B,T,ie]}class ze extends z{constructor(e){super(),P(this,e,je,Se,q,{shownBanner:0})}}function Pe(o){let e,t,n;function r(i){o[6](i)}let s={key:o[1],severity:Fe,message:o[2],link:o[4],dataCy:"ui-version-banner"};return o[0]!==void 0&&(s.shownBanner=o[0]),e=new oe({props:s}),H.push(()=>M(e,"shownBanner",r)),{c(){V(e.$$.fragment)},l(i){I(e.$$.fragment,i)},m(i,a){$(e,i,a),n=!0},p(i,a){const l={};!t&&a&1&&(t=!0,l.shownBanner=i[0],J(()=>t=!1)),e.$set(l)},i(i){n||(h(e.$$.fragment,i),n=!0)},o(i){g(e.$$.fragment,i),n=!1},d(i){E(e,i)}}}function qe(o){let e,t,n=o[3]&&Pe(o);return{c(){n&&n.c(),e=y()},l(r){n&&n.l(r),e=y()},m(r,s){n&&n.m(r,s),N(r,e,s),t=!0},p(r,[s]){r[3]&&n.p(r,s)},i(r){t||(h(n),t=!0)},o(r){g(n),t=!1},d(r){n&&n.d(r),r&&v(e)}}}const Fe="low";function He(o,e,t){let{shownBanner:n}=e,{uiVersionInfo:r}=e;const s=`ui-v${r==null?void 0:r.current}`,i=`\u{1F4E5} Temporal UI v${r==null?void 0:r.recommended} is available`,a=te(r==null?void 0:r.recommended,r==null?void 0:r.current),l=`https://github.com/temporalio/ui-server/releases/tag/v${r==null?void 0:r.recommended}`;function f(u){n=u,t(0,n)}return o.$$set=u=>{"shownBanner"in u&&t(0,n=u.shownBanner),"uiVersionInfo"in u&&t(5,r=u.uiVersionInfo)},[n,s,i,a,l,r,f]}class Me extends z{constructor(e){super(),P(this,e,He,qe,q,{shownBanner:0,uiVersionInfo:5})}}function Je(o){let e,t,n,r;const s=[Xe,Ke],i=[];function a(l,f){return l[1]===F.TemporalVersion?0:l[1]===F.UIVersion?1:-1}return~(e=a(o))&&(t=i[e]=s[e](o)),{c(){t&&t.c(),n=y()},l(l){t&&t.l(l),n=y()},m(l,f){~e&&i[e].m(l,f),N(l,n,f),r=!0},p(l,f){let u=e;e=a(l),e===u?~e&&i[e].p(l,f):(t&&(fe(),g(i[u],1,1,()=>{i[u]=null}),ue()),~e?(t=i[e],t?t.p(l,f):(t=i[e]=s[e](l),t.c()),h(t,1),t.m(n.parentNode,n)):t=null)},i(l){r||(h(t),r=!0)},o(l){g(t),r=!1},d(l){~e&&i[e].d(l),l&&v(n)}}}function Ke(o){let e,t,n;function r(i){o[4](i)}let s={uiVersionInfo:o[0]};return o[1]!==void 0&&(s.shownBanner=o[1]),e=new Me({props:s}),H.push(()=>M(e,"shownBanner",r)),{c(){V(e.$$.fragment)},l(i){I(e.$$.fragment,i)},m(i,a){$(e,i,a),n=!0},p(i,a){const l={};a&1&&(l.uiVersionInfo=i[0]),!t&&a&2&&(t=!0,l.shownBanner=i[1],J(()=>t=!1)),e.$set(l)},i(i){n||(h(e.$$.fragment,i),n=!0)},o(i){g(e.$$.fragment,i),n=!1},d(i){E(e,i)}}}function Xe(o){let e,t,n;function r(i){o[3](i)}let s={};return o[1]!==void 0&&(s.shownBanner=o[1]),e=new ze({props:s}),H.push(()=>M(e,"shownBanner",r)),{c(){V(e.$$.fragment)},l(i){I(e.$$.fragment,i)},m(i,a){$(e,i,a),n=!0},p(i,a){const l={};!t&&a&2&&(t=!0,l.shownBanner=i[1],J(()=>t=!1)),e.$set(l)},i(i){n||(h(e.$$.fragment,i),n=!0)},o(i){g(e.$$.fragment,i),n=!1},d(i){E(e,i)}}}function Ye(o){let e,t,n=o[2]&&Je(o);return{c(){n&&n.c(),e=y()},l(r){n&&n.l(r),e=y()},m(r,s){n&&n.m(r,s),N(r,e,s),t=!0},p(r,[s]){r[2]&&n.p(r,s)},i(r){t||(h(n),t=!0)},o(r){g(n),t=!1},d(r){n&&n.d(r),r&&v(e)}}}function Ze(o,e,t){let n;X(o,re,f=>t(5,n=f));let{uiVersionInfo:r}=e,s=F.TemporalVersion;const i=n.stuff.settings.notifyOnNewVersion;function a(f){s=f,t(1,s)}function l(f){s=f,t(1,s)}return o.$$set=f=>{"uiVersionInfo"in f&&t(0,r=f.uiVersionInfo)},[r,s,i,a,l]}class Ae extends z{constructor(e){super(),P(this,e,Ze,Ye,q,{uiVersionInfo:0})}}function Ge(o){let e;const t=o[2].default,n=ce(t,o,o[3],null);return{c(){n&&n.c()},l(r){n&&n.l(r)},m(r,s){n&&n.m(r,s),e=!0},p(r,s){n&&n.p&&(!e||s&8)&&me(n,t,r,r[3],e?_e(t,r[3],s,null):de(r[3]),null)},i(r){e||(h(n,r),e=!0)},o(r){g(n,r),e=!1},d(r){n&&n.d(r)}}}function Qe(o){let e,t,n,r,s,i,a,l,f,u,c,d,_,w;return e=new Ie({}),r=new we({}),a=new Be({props:{user:o[0]}}),u=new Ae({props:{uiVersionInfo:o[1]}}),_=new ke({props:{onError:We,$$slots:{default:[Ge]},$$scope:{ctx:o}}}),{c(){V(e.$$.fragment),t=S(),n=U("div"),V(r.$$.fragment),s=S(),i=U("div"),V(a.$$.fragment),l=S(),f=U("section"),V(u.$$.fragment),c=S(),d=U("div"),V(_.$$.fragment),this.h()},l(m){I(e.$$.fragment,m),t=j(m),n=O(m,"DIV",{class:!0});var p=L(n);I(r.$$.fragment,p),s=j(p),i=O(p,"DIV",{class:!0});var C=L(i);I(a.$$.fragment,C),C.forEach(v),l=j(p),f=O(p,"SECTION",{id:!0,class:!0});var B=L(f);I(u.$$.fragment,B),c=j(B),d=O(B,"DIV",{class:!0});var T=L(d);I(_.$$.fragment,T),T.forEach(v),B.forEach(v),p.forEach(v),this.h()},h(){b(i,"class","sticky top-0 z-20 h-screen w-auto"),b(d,"class","z-10 flex h-full flex-col gap-4 px-10 pb-10 pt-8"),b(f,"id","content"),b(f,"class","h-screen w-max flex-auto overflow-auto"),b(n,"class","flex h-screen w-screen flex-row")},m(m,p){$(e,m,p),N(m,t,p),N(m,n,p),$(r,n,null),k(n,s),k(n,i),$(a,i,null),k(n,l),k(n,f),$(u,f,null),k(f,c),k(f,d),$(_,d,null),w=!0},p(m,[p]){const C={};p&1&&(C.user=m[0]),a.$set(C);const B={};p&2&&(B.uiVersionInfo=m[1]),u.$set(B);const T={};p&8&&(T.$$scope={dirty:p,ctx:m}),_.$set(T)},i(m){w||(h(e.$$.fragment,m),h(r.$$.fragment,m),h(a.$$.fragment,m),h(u.$$.fragment,m),h(_.$$.fragment,m),w=!0)},o(m){g(e.$$.fragment,m),g(r.$$.fragment,m),g(a.$$.fragment,m),g(u.$$.fragment,m),g(_.$$.fragment,m),w=!1},d(m){E(e,m),m&&v(t),m&&v(n),E(r),E(a),E(u),E(_)}}}const Hn=async function({fetch:o}){const e=await ye(o),t=await be(o);if(!$e(e,t))return{status:302,redirect:"/login"};const n=await Ce(e,o),r=pe({namespaces:n==null?void 0:n.namespaces,settings:e}),s=await Te(e,o);Ee(e);const i={current:e.version,recommended:e.notifyOnNewVersion?await Ne(o):void 0};return{props:{user:t,uiVersionInfo:i},stuff:{namespaces:n==null?void 0:n.namespaces,settings:{...e,defaultNamespace:r},cluster:s}}},We=()=>{};function Re(o,e,t){let{$$slots:n={},$$scope:r}=e,{user:s}=e,{uiVersionInfo:i}=e;return o.$$set=a=>{"user"in a&&t(0,s=a.user),"uiVersionInfo"in a&&t(1,i=a.uiVersionInfo),"$$scope"in a&&t(3,r=a.$$scope)},[s,i,n,r]}class Mn extends z{constructor(e){super(),P(this,e,Re,Qe,q,{user:0,uiVersionInfo:1})}}export{Mn as default,Hn as load};
