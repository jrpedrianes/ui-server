import{S as D,i as F,s as M,w as E,a as h,l as _,r as O,x as N,c as b,m as y,n as v,u as L,h as c,p as g,y as P,b as x,M as u,f as B,t as H,B as I,N as T}from"../../chunks/index-f283717a.js";import{f as U}from"../../chunks/settings-service-10fe1310.js";import{p as V}from"../../chunks/route-for-b2ab8caf.js";import{B as j}from"../../chunks/button-397b3a8c.js";import{p as z}from"../../chunks/stores-62bcca1c.js";import{g as G}from"../../chunks/navigation-fbe70647.js";import{N as J,H as K}from"../../chunks/hamburger-header-898507f5.js";import{p as A}from"../../chunks/get-public-path-76d5b50d.js";import"../../chunks/settings-16907be6.js";import"../../chunks/index-5dff130b.js";import"../../chunks/get-api-origin-8c29353d.js";import"../../chunks/route-for-api-b2e8e01b.js";import"../../chunks/notifications-dddf88f8.js";import"../../chunks/is-network-error-5f9e2367.js";import"../../chunks/is-function-45497f08.js";import"../../chunks/icon-c6a60499.js";import"../../chunks/badge-46845e47.js";/* empty css                                                        */import"../../chunks/singletons-eca981c1.js";import"../../chunks/has-ae9b6b71.js";import"../../chunks/is-6159121b.js";import"../../chunks/data-encoder-status-f4dae9cc.js";import"../../chunks/data-converter-config-49e426af.js";import"../../chunks/persist-store-c4deb1a0.js";import"../../chunks/is-http-d28111f6.js";import"../../chunks/tooltip-558f0bf8.js";import"../../chunks/copyable-ddc34383.js";import"../../chunks/copy-to-clipboard-c6080acc.js";import"../../chunks/modal-90d17380.js";import"../../chunks/index-cf7c7b94.js";function Q(i){let e;return{c(){e=O("Continue to SSO")},l(o){e=L(o,"Continue to SSO")},m(o,a){x(o,e,a)},d(o){o&&c(e)}}}function R(i){let e,o,a,p,s,n,S,k,l,w,C,f,m,$;return e=new J({props:{href:A+"/",user:void 0}}),a=new K({props:{href:A+"/",user:void 0}}),m=new j({props:{dataCy:"login-button",variant:"login",icon:"lock",$$slots:{default:[Q]},$$scope:{ctx:i}}}),m.$on("click",i[2]),{c(){E(e.$$.fragment),o=h(),E(a.$$.fragment),p=h(),s=_("section"),n=_("h1"),S=O("Welcome back."),k=h(),l=_("p"),w=O("Let's get you signed in."),C=h(),f=_("div"),E(m.$$.fragment),this.h()},l(t){N(e.$$.fragment,t),o=b(t),N(a.$$.fragment,t),p=b(t),s=y(t,"SECTION",{class:!0});var r=v(s);n=y(r,"H1",{class:!0,"data-cy":!0});var d=v(n);S=L(d,"Welcome back."),d.forEach(c),k=b(r),l=y(r,"P",{class:!0,"data-cy":!0});var W=v(l);w=L(W,"Let's get you signed in."),W.forEach(c),C=b(r),f=y(r,"DIV",{class:!0});var q=v(f);N(m.$$.fragment,q),q.forEach(c),r.forEach(c),this.h()},h(){g(n,"class","text-8xl font-semibold"),g(n,"data-cy","login-title"),g(l,"class","my-7"),g(l,"data-cy","login-info"),g(f,"class","mx-auto"),g(s,"class","my-[20vh] text-center")},m(t,r){P(e,t,r),x(t,o,r),P(a,t,r),x(t,p,r),x(t,s,r),u(s,n),u(n,S),u(s,k),u(s,l),u(l,w),u(s,C),u(s,f),P(m,f,null),$=!0},p(t,[r]){const d={};r&8&&(d.$$scope={dirty:r,ctx:t}),m.$set(d)},i(t){$||(B(e.$$.fragment,t),B(a.$$.fragment,t),B(m.$$.fragment,t),$=!0)},o(t){H(e.$$.fragment,t),H(a.$$.fragment,t),H(m.$$.fragment,t),$=!1},d(t){I(e,t),t&&c(o),I(a,t),t&&c(p),t&&c(s),I(m)}}}const Nt=async function({fetch:i}){const e=await U(i);return e.auth.enabled?{props:{settings:e},stuff:{settings:e}}:{status:404}};function X(i,e,o){let a;T(i,z,n=>o(1,a=n));let{settings:p}=e;const s=()=>{G(V({settings:p,searchParams:a.url.searchParams,originUrl:a.url.origin}))};return i.$$set=n=>{"settings"in n&&o(0,p=n.settings)},[p,a,s]}class Pt extends D{constructor(e){super(),F(this,e,X,R,M,{settings:0})}}export{Pt as default,Nt as load};
