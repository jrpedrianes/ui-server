import{S as g,i as v,s as h,w as f,x as u,y as p,f as c,t as $,B as _,N as w,a as b,l as C,r as E,c as T,m as k,n as I,u as j,h as m,p as L,b as d,M as D}from"../../chunks/index-f283717a.js";import{p as F}from"../../chunks/stores-62bcca1c.js";import{I as O}from"../../chunks/icon-c6a60499.js";import{N as S,a as V}from"../../chunks/_nav-row-674aaed1.js";import{T as q}from"../../chunks/tooltip-558f0bf8.js";import{n as y}from"../../chunks/nav-open-bbd3ebaf.js";import{r as B,f as M}from"../../chunks/route-for-4a4bbbc1.js";import"../../chunks/copyable-ddc34383.js";import"../../chunks/copy-to-clipboard-c6080acc.js";import"../../chunks/index-5dff130b.js";import"../../chunks/persist-store-c4deb1a0.js";import"../../chunks/is-function-45497f08.js";import"../../chunks/get-public-path-6c4a8950.js";function W(i){let e,r,t;return r=new O({props:{isCloud:i[0],name:"download"}}),{c(){e=C("div"),f(r.$$.fragment),this.h()},l(n){e=k(n,"DIV",{class:!0});var o=I(e);u(r.$$.fragment,o),o.forEach(m),this.h()},h(){L(e,"class","nav-icon svelte-vwdlej")},m(n,o){d(n,e,o),p(r,e,null),t=!0},p(n,o){const s={};o&1&&(s.isCloud=n[0]),r.$set(s)},i(n){t||(c(r.$$.fragment,n),t=!0)},o(n){$(r.$$.fragment,n),t=!1},d(n){n&&m(e),_(r)}}}function z(i){let e,r,t,n,o;return e=new q({props:{right:!0,hide:i[2],text:"Import",$$slots:{default:[W]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment),r=b(),t=C("div"),n=E("Import"),this.h()},l(s){u(e.$$.fragment,s),r=T(s),t=k(s,"DIV",{class:!0});var a=I(t);n=j(a,"Import"),a.forEach(m),this.h()},h(){L(t,"class","nav-title svelte-vwdlej")},m(s,a){p(e,s,a),d(s,r,a),d(s,t,a),D(t,n),o=!0},p(s,a){const l={};a&4&&(l.hide=s[2]),a&9&&(l.$$scope={dirty:a,ctx:s}),e.$set(l)},i(s){o||(c(e.$$.fragment,s),o=!0)},o(s){$(e.$$.fragment,s),o=!1},d(s){_(e,s),s&&m(r),s&&m(t)}}}function A(i){let e,r;return e=new V({props:{link:i[1].import,isCloud:i[0],$$slots:{default:[z]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p(t,n){const o={};n&2&&(o.link=t[1].import),n&1&&(o.isCloud=t[0]),n&13&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function G(i){let e,r;return e=new S({props:{isCloud:i[0],linkList:i[1],$$slots:{top:[A]},$$scope:{ctx:i}}}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p(t,[n]){const o={};n&1&&(o.isCloud=t[0]),n&2&&(o.linkList=t[1]),n&15&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function H(i,e,r){let t;w(i,y,s=>r(2,t=s));let{isCloud:n}=e,{linkList:o}=e;return i.$$set=s=>{"isCloud"in s&&r(0,n=s.isCloud),"linkList"in s&&r(1,o=s.linkList)},[n,o,t]}class J extends g{constructor(e){super(),v(this,e,H,G,h,{isCloud:0,linkList:1})}}function K(i){let e,r;return e=new J({props:{linkList:i[0],isCloud:i[1]}}),{c(){f(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){p(e,t,n),r=!0},p(t,[n]){const o={};n&1&&(o.linkList=t[0]),e.$set(o)},i(t){r||(c(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){_(e,t)}}}function P(i,e,r){let t,n,o;w(i,F,N=>r(5,o=N));var s,a;const{isCloud:l}=o.stuff.settings.runtimeEnvironment;return i.$$.update=()=>{i.$$.dirty&44&&r(4,t=r(3,a=r(2,s=o.stuff)===null||s===void 0?void 0:s.settings)===null||a===void 0?void 0:a.defaultNamespace),i.$$.dirty&16&&r(0,n={home:B({namespace:t}),import:M({importType:"events"})})},[n,l,s,a,t,o]}class it extends g{constructor(e){super(),v(this,e,P,K,h,{})}}export{it as default};
