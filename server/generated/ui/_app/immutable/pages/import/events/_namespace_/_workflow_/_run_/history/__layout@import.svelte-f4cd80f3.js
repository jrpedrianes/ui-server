import{S as M,i as U,s as k,I as z,l as b,r as J,a as N,w as S,m as w,n as E,u as O,h as f,c as j,x as C,p as v,b as I,M as g,y as V,J as G,K as P,L as Q,f as y,t as T,B as H}from"../../../../../../../chunks/index-8e660855.js";import{f as D}from"../../../../../../../chunks/route-for-62d7d3b1.js";import{T as R,a as q}from"../../../../../../../chunks/toggle-buttons-8750b299.js";import{E as W}from"../../../../../../../chunks/_event-history-import-411409bb.js";import{a as X}from"../../../../../../../chunks/auth-user-f8954649.js";import"../../../../../../../chunks/get-public-path-6c4a8950.js";import"../../../../../../../chunks/icon-39b683f1.js";import"../../../../../../../chunks/stores-f70708fe.js";import"../../../../../../../chunks/navigation-fbe70647.js";import"../../../../../../../chunks/singletons-eca981c1.js";import"../../../../../../../chunks/button-8f2dcb01.js";import"../../../../../../../chunks/badge-b5d60de0.js";import"../../../../../../../chunks/index-e9bb0e44.js";import"../../../../../../../chunks/is-http-9a6dffcd.js";import"../../../../../../../chunks/index-71be9f1c.js";import"../../../../../../../chunks/persist-store-4b4c2e6c.js";import"../../../../../../../chunks/decode-payload-6be25ef1.js";import"../../../../../../../chunks/data-converter-config-7e60fe97.js";import"../../../../../../../chunks/format-date-2e95557a.js";import"../../../../../../../chunks/is-6159121b.js";import"../../../../../../../chunks/index-9319d41b.js";import"../../../../../../../chunks/has-ae9b6b71.js";import"../../../../../../../chunks/get-event-categorization-2cfb578f.js";import"../../../../../../../chunks/simplify-attributes-34cbbe81.js";import"../../../../../../../chunks/notifications-faca15d4.js";import"../../../../../../../chunks/import-events-e7144445.js";function Y(i){let t;return{c(){t=J("Timeline")},l(s){t=O(s,"Timeline")},m(s,o){I(s,t,o)},d(s){s&&f(t)}}}function Z(i){let t;return{c(){t=J("Compact")},l(s){t=O(s,"Compact")},m(s,o){I(s,t,o)},d(s){s&&f(t)}}}function tt(i){let t;return{c(){t=J("JSON")},l(s){t=O(s,"JSON")},m(s,o){I(s,t,o)},d(s){s&&f(t)}}}function et(i){let t,s,o,p,a,$;return t=new q({props:{icon:"feed",href:D({importType:"events",view:"feed"}),$$slots:{default:[Y]},$$scope:{ctx:i}}}),o=new q({props:{icon:"compact",href:D({importType:"events",view:"compact"}),$$slots:{default:[Z]},$$scope:{ctx:i}}}),a=new q({props:{icon:"json",href:D({importType:"events",view:"json"}),$$slots:{default:[tt]},$$scope:{ctx:i}}}),{c(){S(t.$$.fragment),s=N(),S(o.$$.fragment),p=N(),S(a.$$.fragment)},l(e){C(t.$$.fragment,e),s=j(e),C(o.$$.fragment,e),p=j(e),C(a.$$.fragment,e)},m(e,r){V(t,e,r),I(e,s,r),V(o,e,r),I(e,p,r),V(a,e,r),$=!0},p(e,r){const _={};r&2&&(_.$$scope={dirty:r,ctx:e}),t.$set(_);const c={};r&2&&(c.$$scope={dirty:r,ctx:e}),o.$set(c);const u={};r&2&&(u.$$scope={dirty:r,ctx:e}),a.$set(u)},i(e){$||(y(t.$$.fragment,e),y(o.$$.fragment,e),y(a.$$.fragment,e),$=!0)},o(e){T(t.$$.fragment,e),T(o.$$.fragment,e),T(a.$$.fragment,e),$=!1},d(e){H(t,e),e&&f(s),H(o,e),e&&f(p),H(a,e)}}}function st(i){let t,s,o,p,a,$,e,r,_,c,u,x,h;e=new W({props:{user:X}}),u=new R({props:{$$slots:{default:[et]},$$scope:{ctx:i}}});const A=i[0].default,l=z(A,i,i[1],null);return{c(){t=b("section"),s=b("nav"),o=b("h3"),p=J("Event History"),a=N(),$=b("div"),S(e.$$.fragment),r=N(),_=b("nav"),c=b("div"),S(u.$$.fragment),x=N(),l&&l.c(),this.h()},l(n){t=w(n,"SECTION",{id:!0});var m=E(t);s=w(m,"NAV",{class:!0});var d=E(s);o=w(d,"H3",{class:!0});var B=E(o);p=O(B,"Event History"),B.forEach(f),a=j(d),$=w(d,"DIV",{class:!0});var F=E($);C(e.$$.fragment,F),F.forEach(f),d.forEach(f),r=j(m),_=w(m,"NAV",{class:!0});var K=E(_);c=w(K,"DIV",{id:!0,class:!0});var L=E(c);C(u.$$.fragment,L),L.forEach(f),K.forEach(f),x=j(m),l&&l.l(m),m.forEach(f),this.h()},h(){v(o,"class","text-lg font-medium"),v($,"class","flex gap-4"),v(s,"class","flex items-end justify-between gap-4 pb-4"),v(c,"id","event-view-toggle"),v(c,"class","flex gap-4"),v(_,"class","my-4 flex items-end justify-end gap-4"),v(t,"id","event-history")},m(n,m){I(n,t,m),g(t,s),g(s,o),g(o,p),g(s,a),g(s,$),V(e,$,null),g(t,r),g(t,_),g(_,c),V(u,c,null),g(t,x),l&&l.m(t,null),h=!0},p(n,[m]){const d={};m&2&&(d.$$scope={dirty:m,ctx:n}),u.$set(d),l&&l.p&&(!h||m&2)&&G(l,A,n,n[1],h?Q(A,n[1],m,null):P(n[1]),null)},i(n){h||(y(e.$$.fragment,n),y(u.$$.fragment,n),y(l,n),h=!0)},o(n){T(e.$$.fragment,n),T(u.$$.fragment,n),T(l,n),h=!1},d(n){n&&f(t),H(e),H(u),l&&l.d(n)}}}function ot(i,t,s){let{$$slots:o={},$$scope:p}=t;return i.$$set=a=>{"$$scope"in a&&s(1,p=a.$$scope)},[o,p]}class Vt extends M{constructor(t){super(),U(this,t,ot,st,k,{})}}export{Vt as default};
