import{S as z,i as F,s as G,I as O,l as E,w as Q,a as j,r as V,m as k,n as p,x as R,h,c as P,u as q,p as d,b as A,M as _,y as T,v as B,J as U,K as W,L as X,f as H,t as J,B as Y,C as K,V as L}from"./index-f283717a.js";import{I as Z}from"./icon-c6a60499.js";function M(s){let e,l;return{c(){e=E("p"),l=V(s[1]),this.h()},l(a){e=k(a,"P",{class:!0});var i=p(e);l=q(i,s[1]),i.forEach(h),this.h()},h(){d(e,"class","text-center")},m(a,i){A(a,e,i),_(e,l)},p(a,i){i&2&&B(l,a[1])},d(a){a&&h(e)}}}function N(s){let e,l;return{c(){e=E("p"),l=V(s[2]),this.h()},l(a){e=k(a,"P",{class:!0});var i=p(e);l=q(i,s[2]),i.forEach(h),this.h()},h(){d(e,"class","rounded-md border-2 border-orange-500 bg-orange-100 p-5 text-center")},m(a,i){A(a,e,i),_(e,l)},p(a,i){i&4&&B(l,a[2])},d(a){a&&h(e)}}}function w(s){let e,l,a,i,u,g,y,b,f,C,I,m;a=new Z({props:{name:s[3],class:"block h-full w-full"}});let o=s[1]&&M(s),c=s[2]&&N(s);const S=s[6].default,r=O(S,s,s[5],null);return{c(){e=E("div"),l=E("span"),Q(a.$$.fragment),i=j(),u=E("h2"),g=V(s[0]),y=j(),o&&o.c(),b=j(),c&&c.c(),f=j(),r&&r.c(),this.h()},l(t){e=k(t,"DIV",{class:!0,"data-cy":!0});var n=p(e);l=k(n,"SPAN",{class:!0});var v=p(l);R(a.$$.fragment,v),v.forEach(h),i=P(n),u=k(n,"H2",{class:!0});var D=p(u);g=q(D,s[0]),D.forEach(h),y=P(n),o&&o.l(n),b=P(n),c&&c.l(n),f=P(n),r&&r.l(n),n.forEach(h),this.h()},h(){d(l,"class","flex h-16 w-16 items-center justify-center rounded-full bg-gray-200"),d(u,"class","text-xl font-medium"),d(e,"class",C="my-12 flex flex-col items-center justify-start gap-2 "+s[4].class),d(e,"data-cy",I=s[4].dataCy)},m(t,n){A(t,e,n),_(e,l),T(a,l,null),_(e,i),_(e,u),_(u,g),_(e,y),o&&o.m(e,null),_(e,b),c&&c.m(e,null),_(e,f),r&&r.m(e,null),m=!0},p(t,[n]){const v={};n&8&&(v.name=t[3]),a.$set(v),(!m||n&1)&&B(g,t[0]),t[1]?o?o.p(t,n):(o=M(t),o.c(),o.m(e,b)):o&&(o.d(1),o=null),t[2]?c?c.p(t,n):(c=N(t),c.c(),c.m(e,f)):c&&(c.d(1),c=null),r&&r.p&&(!m||n&32)&&U(r,S,t,t[5],m?X(S,t[5],n,null):W(t[5]),null),(!m||n&16&&C!==(C="my-12 flex flex-col items-center justify-start gap-2 "+t[4].class))&&d(e,"class",C),(!m||n&16&&I!==(I=t[4].dataCy))&&d(e,"data-cy",I)},i(t){m||(H(a.$$.fragment,t),H(r,t),m=!0)},o(t){J(a.$$.fragment,t),J(r,t),m=!1},d(t){t&&h(e),Y(a),o&&o.d(),c&&c.d(),r&&r.d(t)}}}function x(s,e,l){let{$$slots:a={},$$scope:i}=e,{title:u}=e,{content:g=""}=e,{error:y=""}=e,{icon:b="comet"}=e;return s.$$set=f=>{l(4,e=K(K({},e),L(f))),"title"in f&&l(0,u=f.title),"content"in f&&l(1,g=f.content),"error"in f&&l(2,y=f.error),"icon"in f&&l(3,b=f.icon),"$$scope"in f&&l(5,i=f.$$scope)},e=L(e),[u,g,y,b,e,i,a]}class te extends z{constructor(e){super(),F(this,e,x,w,G,{title:0,content:1,error:2,icon:3})}}export{te as E};
