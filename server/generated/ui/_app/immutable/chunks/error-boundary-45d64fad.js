import{r as x,a as ee,n as I}from"./route-for-api-dc210169.js";import{H as te,S as C,i as P,s as R,l as E,m as $,n as v,h as m,p as D,b as S,g as V,a0 as re,d as z,f as g,t as k,N as G,r as B,a as H,u as q,c as J,M as y,T as oe,v as O,a1 as se,a2 as ne,a3 as le,a4 as ae,a5 as ie,a6 as ce,a7 as ue,E as w,e as M,F as A,a8 as L,I as Q,J as W,K as X,L as Y,w as fe,x as _e,y as de,B as he}from"./index-f283717a.js";import{n as T}from"./notifications-dddf88f8.js";import{c as pe,a as me,q as be}from"./index-cf7c7b94.js";import{E as ye}from"./error-73a2de77.js";import{w as K}from"./index-5dff130b.js";const ze=async(a=fetch)=>{const e=await x(ee("user"),{request:a});return{name:e==null?void 0:e.Name,email:e==null?void 0:e.Email,picture:e==null?void 0:e.Picture}};function ge(a,{from:e,to:t},r={}){const s=getComputedStyle(a),i=s.transform==="none"?"":s.transform,[c,l]=s.transformOrigin.split(" ").map(parseFloat),o=e.left+e.width*c/t.width-(t.left+c),n=e.top+e.height*l/t.height-(t.top+l),{delay:_=0,duration:d=p=>Math.sqrt(p)*120,easing:u=pe}=r;return{delay:_,duration:te(d)?d(Math.sqrt(o*o+n*n)):d,easing:u,css:(p,h)=>{const N=h*o,f=h*n,b=p+h*e.width/t.width,F=p+h*e.height/t.height;return`transform: ${i} translate(${N}px, ${f}px) scale(${b}, ${F});`}}}function U(a,e,t){const r=a.slice();return r[4]=e[t],r}function j(a,e){let t,r,s=e[4].message+"",i,c,l,o,n,_,d=w,u,p,h;function N(){return e[3](e[4])}return{key:a,first:null,c(){t=E("article"),r=E("p"),i=B(s),c=H(),this.h()},l(f){t=$(f,"ARTICLE",{class:!0});var b=v(t);r=$(b,"P",{});var F=v(r);i=q(F,s),F.forEach(m),c=J(b),b.forEach(m),this.h()},h(){D(t,"class",l="mb-4 px-8 py-6 opacity-90 shadow-lg "+e[4].type+" svelte-2zx94o"),this.first=t},m(f,b){S(f,t,b),y(t,r),y(r,i),y(t,c),u=!0,p||(h=oe(t,"click",N),p=!0)},p(f,b){e=f,(!u||b&1)&&s!==(s=e[4].message+"")&&O(i,s),(!u||b&1&&l!==(l="mb-4 px-8 py-6 opacity-90 shadow-lg "+e[4].type+" svelte-2zx94o"))&&D(t,"class",l)},r(){_=t.getBoundingClientRect()},f(){se(t),d(),ne(t,_)},a(){d(),d=le(t,_,ge,{})},i(f){u||(ae(()=>{n&&n.end(1),o=ie(t,e[2],{key:e[4].id}),o.start()}),u=!0)},o(f){o&&o.invalidate(),n=ce(t,e[1],{key:e[4].id}),u=!1},d(f){f&&m(t),f&&n&&n.end(),p=!1,h()}}}function ke(a){let e,t=[],r=new Map,s,i=a[0];const c=l=>l[4].id;for(let l=0;l<i.length;l+=1){let o=U(a,i,l),n=c(o);r.set(n,t[l]=j(n,o))}return{c(){e=E("section");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=$(l,"SECTION",{class:!0});var o=v(e);for(let n=0;n<t.length;n+=1)t[n].l(o);o.forEach(m),this.h()},h(){D(e,"class","absolute top-20 right-4 z-40 flex w-1/3 flex-col justify-center")},m(l,o){S(l,e,o);for(let n=0;n<t.length;n+=1)t[n].m(e,null);s=!0},p(l,[o]){if(o&1){i=l[0],V();for(let n=0;n<t.length;n+=1)t[n].r();t=re(t,o,c,1,l,i,r,e,ue,j,null,U);for(let n=0;n<t.length;n+=1)t[n].a();z()}},i(l){if(!s){for(let o=0;o<i.length;o+=1)g(t[o]);s=!0}},o(l){for(let o=0;o<t.length;o+=1)k(t[o]);s=!1},d(l){l&&m(e);for(let o=0;o<t.length;o+=1)t[o].d()}}}function Ee(a,e,t){let r;G(a,T,l=>t(0,r=l));const[s,i]=me({duration:l=>Math.sqrt(l*100),fallback(l){const o=getComputedStyle(l),n=o.transform==="none"?"":o.transform;return{duration:600,easing:be,css:_=>`transform: ${n} scale(${_}); opacity: ${_}`}}});return[r,s,i,l=>T.dismiss(l.id)]}class Le extends C{constructor(e){super(),P(this,e,Ee,ke,R,{})}}function $e(a){let e;const t=a[8].default,r=Q(t,a,a[7],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,i){r&&r.m(s,i),e=!0},p(s,i){r&&r.p&&(!e||i&128)&&W(r,t,s,s[7],e?Y(t,s[7],i,null):X(s[7]),null)},i(s){e||(g(r,s),e=!0)},o(s){k(r,s),e=!1},d(s){r&&r.d(s)}}}function ve(a){let e,t;return e=new ye({props:{error:a[2]}}),e.$on("clearError",a[3]),{c(){fe(e.$$.fragment)},l(r){_e(e.$$.fragment,r)},m(r,s){de(e,r,s),t=!0},p(r,s){const i={};s&4&&(i.error=r[2]),e.$set(i)},i(r){t||(g(e.$$.fragment,r),t=!0)},o(r){k(e.$$.fragment,r),t=!1},d(r){he(e,r)}}}function we(a){let e,t,r,s;const i=[ve,$e],c=[];function l(o,n){return o[1]&&o[2]?0:1}return e=l(a),t=c[e]=i[e](a),{c(){t.c(),r=M()},l(o){t.l(o),r=M()},m(o,n){c[e].m(o,n),S(o,r,n),s=!0},p(o,[n]){let _=e;e=l(o),e===_?c[e].p(o,n):(V(),k(c[_],1,1,()=>{c[_]=null}),z(),t=c[e],t?t.p(o,n):(t=c[e]=i[e](o),t.c()),g(t,1),t.m(r.parentNode,r))},i(o){s||(g(t),s=!0)},o(o){k(t),s=!1},d(o){c[e].d(o),o&&m(r)}}}function Ne(a,e,t){let r,s,i=w,c=()=>(i(),i=A(u,f=>t(6,s=f)),u),l,o=w,n=()=>(o(),o=A(h,f=>t(2,l=f)),h);G(a,I,f=>t(5,r=f)),a.$$.on_destroy.push(()=>i()),a.$$.on_destroy.push(()=>o());let{$$slots:_={},$$scope:d}=e,{error:u=null}=e;c();let{onError:p=null}=e,h;function N(){L(u,s=null,s),t(4,p=null),n(t(1,h=null)),L(I,r=null,r)}return a.$$set=f=>{"error"in f&&c(t(0,u=f.error)),"onError"in f&&t(4,p=f.onError),"$$scope"in f&&t(7,d=f.$$scope)},a.$$.update=()=>{a.$$.dirty&115&&(u&&s&&n(t(1,h=u)),I&&r&&n(t(1,h=I)),p&&h&&p(h))},[u,h,l,N,p,r,s,d,_]}class Be extends C{constructor(e){super(),P(this,e,Ne,we,R,{error:0,onError:4})}}function qe(a){let e;const t=a[5].default,r=Q(t,a,a[4],null);return{c(){r&&r.c()},l(s){r&&r.l(s)},m(s,i){r&&r.m(s,i),e=!0},p(s,i){r&&r.p&&(!e||i&16)&&W(r,t,s,s[4],e?Y(t,s[4],i,null):X(s[4]),null)},i(s){e||(g(r,s),e=!0)},o(s){k(r,s),e=!1},d(s){r&&r.d(s)}}}function De(a){let e,t,r=a[1].message+"",s,i,c,l,o=(a[2]?a[1].stack:"")+"",n,_;return{c(){e=E("div"),t=E("b"),s=B(r),i=H(),c=E("pre"),l=B("      "),n=B(o),_=B(`
    `),this.h()},l(d){e=$(d,"DIV",{class:!0});var u=v(e);t=$(u,"B",{});var p=v(t);s=q(p,r),p.forEach(m),i=J(u),c=$(u,"PRE",{class:!0});var h=v(c);l=q(h,"      "),n=q(h,o),_=q(h,`
    `),h.forEach(m),u.forEach(m),this.h()},h(){D(c,"class","trace svelte-urrl06"),D(e,"class","error svelte-urrl06")},m(d,u){S(d,e,u),y(e,t),y(t,s),y(e,i),y(e,c),y(c,l),y(c,n),y(c,_)},p(d,u){u&2&&r!==(r=d[1].message+"")&&O(s,r),u&2&&o!==(o=(d[2]?d[1].stack:"")+"")&&O(n,o)},i:w,o:w,d(d){d&&m(e)}}}function Se(a){let e,t,r,s;const i=[De,qe],c=[];function l(o,n){return o[1]?0:1}return e=l(a),t=c[e]=i[e](a),{c(){t.c(),r=M()},l(o){t.l(o),r=M()},m(o,n){c[e].m(o,n),S(o,r,n),s=!0},p(o,[n]){let _=e;e=l(o),e===_?c[e].p(o,n):(V(),k(c[_],1,1,()=>{c[_]=null}),z(),t=c[e],t?t.p(o,n):(t=c[e]=i[e](o),t.c()),g(t,1),t.m(r.parentNode,r))},i(o){s||(g(t),s=!0)},o(o){k(t),s=!1},d(o){c[e].d(o),o&&m(r)}}}function Fe(a,e,t){let r,s=w,i=()=>(s(),s=A(o,u=>t(1,r=u)),o);a.$$.on_destroy.push(()=>s());let{$$slots:c={},$$scope:l}=e,{error:o=null}=e;i();let{onError:n=null}=e,d=(typeof process<"u"&&process.env&&"production")!=="production";return a.$$set=u=>{"error"in u&&i(t(0,o=u.error)),"onError"in u&&t(3,n=u.onError),"$$scope"in u&&t(4,l=u.$$scope)},a.$$.update=()=>{a.$$.dirty&10&&r&&n&&n(r)},[o,r,d,n,l,c]}class Ie extends C{constructor(e){super(),P(this,e,Fe,Se,R,{error:0,onError:3})}}const Me=["c","l","h","m","p","a","i","o","d"];function Z(a){if(a.$$render){let t=a.$$render;return a.$$render=(r,s,i,c)=>{const l=K(void 0);try{return t(r,{error:l,...s},i,c)}catch(o){return l.set(o),t(r,{error:l,...s},i,{})}},a}function e(t,r){return function(...i){try{return t(...i)}catch(c){r(c)}}}return class extends a{constructor(r){const s=K(void 0);r.props.$$slots.default=r.props.$$slots.default.map(i=>(...c)=>{let o=e(i,s.set)(...c);if(o)for(let n of Me)o[n]&&(o[n]=e(o[n],s.set));return o}),super(r),this.$$set({error:s})}}}Z(Ie);const Ke=Z(Be);export{Ke as E,Le as N,ze as f};
