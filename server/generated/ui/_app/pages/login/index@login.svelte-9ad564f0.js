import{S as A,i as D,s as F,w as E,k as _,e as h,t as P,x as N,m as y,c as b,a as v,h as q,d as l,b as g,y as B,g as x,M as f,q as H,o as I,B as O,N as M}from"../../chunks/index-604742bf.js";import{f as T}from"../../chunks/settings-service-36452137.js";import{m as U}from"../../chunks/route-for-1f2060cd.js";import{B as V}from"../../chunks/button-8619b7a4.js";import{p as j}from"../../chunks/stores-810822a9.js";import{g as z}from"../../chunks/navigation-6709cf39.js";import{N as G,H as J}from"../../chunks/hamburger-header-f41e7e9a.js";import"../../chunks/route-for-api-42a67309.js";import"../../chunks/index-c9e619a8.js";import"../../chunks/notifications-cfed8e58.js";import"../../chunks/is-network-error-ac7c8caf.js";import"../../chunks/index-0574ae1f.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/data-encoder-status-f1cfc6df.js";import"../../chunks/data-converter-config-6fc5efe1.js";import"../../chunks/persist-store-26f405dd.js";import"../../chunks/is-http-24b20bf9.js";import"../../chunks/tooltip-07d7550a.js";import"../../chunks/copyable-6f962ac2.js";import"../../chunks/copy-to-clipboard-8832075c.js";import"../../chunks/modal-c39b98de.js";import"../../chunks/index-69aa65a3.js";function K(i){let e;return{c(){e=P("Continue to SSO")},l(a){e=q(a,"Continue to SSO")},m(a,s){x(a,e,s)},d(a){a&&l(e)}}}function Q(i){let e,a,s,c,n,o,S,k,u,w,C,p,m,$;return e=new G({props:{href:"/",user:void 0}}),s=new J({props:{href:"/",user:void 0}}),m=new V({props:{dataCy:"login-button",login:!0,icon:"lock",$$slots:{default:[K]},$$scope:{ctx:i}}}),m.$on("click",i[2]),{c(){E(e.$$.fragment),a=_(),E(s.$$.fragment),c=_(),n=h("section"),o=h("h1"),S=P("Welcome back."),k=_(),u=h("p"),w=P("Let's get you signed in."),C=_(),p=h("div"),E(m.$$.fragment),this.h()},l(t){N(e.$$.fragment,t),a=y(t),N(s.$$.fragment,t),c=y(t),n=b(t,"SECTION",{class:!0});var r=v(n);o=b(r,"H1",{class:!0,"data-cy":!0});var d=v(o);S=q(d,"Welcome back."),d.forEach(l),k=y(r),u=b(r,"P",{class:!0,"data-cy":!0});var L=v(u);w=q(L,"Let's get you signed in."),L.forEach(l),C=y(r),p=b(r,"DIV",{class:!0});var W=v(p);N(m.$$.fragment,W),W.forEach(l),r.forEach(l),this.h()},h(){g(o,"class","text-8xl font-semibold"),g(o,"data-cy","login-title"),g(u,"class","my-7"),g(u,"data-cy","login-info"),g(p,"class","mx-auto"),g(n,"class","my-[20vh] text-center")},m(t,r){B(e,t,r),x(t,a,r),B(s,t,r),x(t,c,r),x(t,n,r),f(n,o),f(o,S),f(n,k),f(n,u),f(u,w),f(n,C),f(n,p),B(m,p,null),$=!0},p(t,[r]){const d={};r&8&&(d.$$scope={dirty:r,ctx:t}),m.$set(d)},i(t){$||(H(e.$$.fragment,t),H(s.$$.fragment,t),H(m.$$.fragment,t),$=!0)},o(t){I(e.$$.fragment,t),I(s.$$.fragment,t),I(m.$$.fragment,t),$=!1},d(t){O(e,t),t&&l(a),O(s,t),t&&l(c),t&&l(n),O(m)}}}const yt=async function({fetch:i}){const e=await T(i);return e.auth.enabled?{props:{settings:e},stuff:{settings:e}}:{status:404}};function R(i,e,a){let s;M(i,j,o=>a(1,s=o));let{settings:c}=e;const n=()=>{z(U({settings:c,searchParams:s.url.searchParams,originUrl:s.url.origin}))};return i.$$set=o=>{"settings"in o&&a(0,c=o.settings)},[c,s,n]}class bt extends A{constructor(e){super(),D(this,e,R,Q,F,{settings:0})}}export{bt as default,yt as load};