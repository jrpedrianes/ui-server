import{S as K,i as L,s as O,l as R,g as k,o as y,p as B,q as $,d as _,N as Q,n as j,e as F,t as E,k as P,w as C,c as W,a as N,h as A,m as H,x as I,M as g,y as V,B as x,b as T,E as U,ad as X}from"../../../../chunks/index-604742bf.js";import{b as Y}from"../../../../chunks/workflow-service-43f8fadd.js";import{W as Z,a as ee}from"../../../../chunks/workflows-summary-row-e27439f8.js";import te from"./_workflow-filters.svelte-5945c93a.js";import{P as le}from"../../../../chunks/pagination-08296b95.js";import{E as ae}from"../../../../chunks/empty-state-c50aaf3c.js";import{C as D}from"../../../../chunks/code-block-03609e84.js";import{t as re}from"../../../../chunks/time-format-1e4f6616.js";import"../../../../chunks/simplify-attributes-64d6cf1a.js";import"../../../../chunks/format-date-919f4714.js";import"../../../../chunks/to-duration-271d3946.js";import"../../../../chunks/route-for-api-9f2c37b5.js";import"../../../../chunks/index-c9e619a8.js";import"../../../../chunks/notifications-cfed8e58.js";import"../../../../chunks/is-network-error-ac7c8caf.js";import"../../../../chunks/route-for-93451b94.js";import"../../../../chunks/is-function-b969a126.js";import"../../../../chunks/stores-810822a9.js";import"../../../../chunks/update-query-parameters-5724d2fc.js";import"../../../../chunks/navigation-6709cf39.js";import"../../../../chunks/singletons-d1fb5791.js";import"../../../../chunks/workflow-status-ca8cb7e9.js";import"../../../../chunks/index-0574ae1f.js";import"../../../../chunks/copy-to-clipboard-8832075c.js";import"../../../../chunks/select-4556bdf3.js";import"../../../../chunks/filter-select-874d9ac7.js";import"./_filter-input.svelte-de22b494.js";import"../../../../chunks/index-c0547148.js";import"../../../../chunks/search-b2185bce.js";import"../../../../chunks/button-0ce95595.js";import"../../../../chunks/persist-store-e5ba5089.js";function z(u,e,o){const t=u.slice();return t[6]=e[o],t}function ie(u){let e,o,t,l,c,a,i,r,p,d,h,w,s,b,f;i=new D({props:{content:`tctl --namespace ${u[0]} namespace update --has enabled`,language:"text",inline:!0}});let m=!u[3]&&G(u);return{c(){e=F("h2"),o=E("This namespace is currently not enabled for archival."),t=P(),l=F("p"),c=E("Run this command to enable Archival for Event Histories:"),a=P(),C(i.$$.fragment),r=P(),m&&m.c(),p=P(),d=F("p"),h=E("For more details, please check out "),w=F("a"),s=E("Archival documentation"),b=E("."),this.h()},l(n){e=W(n,"H2",{class:!0,"data-cy":!0});var v=N(e);o=A(v,"This namespace is currently not enabled for archival."),v.forEach(_),t=H(n),l=W(n,"P",{});var S=N(l);c=A(S,"Run this command to enable Archival for Event Histories:"),S.forEach(_),a=H(n),I(i.$$.fragment,n),r=H(n),m&&m.l(n),p=H(n),d=W(n,"P",{});var q=N(d);h=A(q,"For more details, please check out "),w=W(q,"A",{class:!0,href:!0,target:!0});var M=N(w);s=A(M,"Archival documentation"),M.forEach(_),b=A(q,"."),q.forEach(_),this.h()},h(){T(e,"class","text-2xl"),T(e,"data-cy","archived-disabled-title"),T(w,"class","text-blue-700 underline"),T(w,"href","https://docs.temporal.io/server/archive-data/"),T(w,"target","_blank")},m(n,v){k(n,e,v),g(e,o),k(n,t,v),k(n,l,v),g(l,c),k(n,a,v),V(i,n,v),k(n,r,v),m&&m.m(n,v),k(n,p,v),k(n,d,v),g(d,h),g(d,w),g(w,s),g(d,b),f=!0},p(n,v){const S={};v&1&&(S.content=`tctl --namespace ${n[0]} namespace update --has enabled`),i.$set(S),n[3]?m&&(j(),y(m,1,1,()=>{m=null}),B()):m?(m.p(n,v),v&8&&$(m,1)):(m=G(n),m.c(),$(m,1),m.m(p.parentNode,p))},i(n){f||($(i.$$.fragment,n),$(m),f=!0)},o(n){y(i.$$.fragment,n),y(m),f=!1},d(n){n&&_(e),n&&_(t),n&&_(l),n&&_(a),x(i,n),n&&_(r),m&&m.d(n),n&&_(p),n&&_(d)}}}function oe(u){let e,o,t,l,c,a,i,r,p,d,h,w,s,b;return i=new D({props:{content:`tctl --namespace ${u[0]} namespace update -vas enabled`,language:"text",inline:!0}}),{c(){e=F("h2"),o=E(`This namespace is currently enabled for archival but visibility is not
    enabled.`),t=P(),l=F("p"),c=E("To enable Visibility Archival:"),a=P(),C(i.$$.fragment),r=P(),p=F("p"),d=E("For more details, please check out "),h=F("a"),w=E("Archival documentation"),s=E("."),this.h()},l(f){e=W(f,"H2",{class:!0,"data-cy":!0});var m=N(e);o=A(m,`This namespace is currently enabled for archival but visibility is not
    enabled.`),m.forEach(_),t=H(f),l=W(f,"P",{});var n=N(l);c=A(n,"To enable Visibility Archival:"),n.forEach(_),a=H(f),I(i.$$.fragment,f),r=H(f),p=W(f,"P",{});var v=N(p);d=A(v,"For more details, please check out "),h=W(v,"A",{class:!0,href:!0,target:!0});var S=N(h);w=A(S,"Archival documentation"),S.forEach(_),s=A(v,"."),v.forEach(_),this.h()},h(){T(e,"class","text-2xl"),T(e,"data-cy","visibility-disabled-title"),T(h,"class","text-blue-700 underline"),T(h,"href","https://docs.temporal.io/server/archive-data/"),T(h,"target","_blank")},m(f,m){k(f,e,m),g(e,o),k(f,t,m),k(f,l,m),g(l,c),k(f,a,m),V(i,f,m),k(f,r,m),k(f,p,m),g(p,d),g(p,h),g(h,w),g(p,s),b=!0},p(f,m){const n={};m&1&&(n.content=`tctl --namespace ${f[0]} namespace update -vas enabled`),i.$set(n)},i(f){b||($(i.$$.fragment,f),b=!0)},o(f){y(i.$$.fragment,f),b=!1},d(f){f&&_(e),f&&_(t),f&&_(l),f&&_(a),x(i,f),f&&_(r),f&&_(p)}}}function ne(u){let e,o,t,l,c,a,i,r,p;l=new te({});const d=[ce,se],h=[];function w(s,b){var f;return(f=s[1])!=null&&f.length?0:1}return a=w(u),i=h[a]=d[a](u),{c(){e=F("h2"),o=E("Archived Workflows"),t=P(),C(l.$$.fragment),c=P(),i.c(),r=R(),this.h()},l(s){e=W(s,"H2",{class:!0,"data-cy":!0});var b=N(e);o=A(b,"Archived Workflows"),b.forEach(_),t=H(s),I(l.$$.fragment,s),c=H(s),i.l(s),r=R(),this.h()},h(){T(e,"class","text-2xl"),T(e,"data-cy","archived-enabled-title")},m(s,b){k(s,e,b),g(e,o),k(s,t,b),V(l,s,b),k(s,c,b),h[a].m(s,b),k(s,r,b),p=!0},p(s,b){let f=a;a=w(s),a===f?h[a].p(s,b):(j(),y(h[f],1,1,()=>{h[f]=null}),B(),i=h[a],i?i.p(s,b):(i=h[a]=d[a](s),i.c()),$(i,1),i.m(r.parentNode,r))},i(s){p||($(l.$$.fragment,s),$(i),p=!0)},o(s){y(l.$$.fragment,s),y(i),p=!1},d(s){s&&_(e),s&&_(t),x(l,s),s&&_(c),h[a].d(s),s&&_(r)}}}function G(u){let e,o,t,l,c;return l=new D({props:{content:`tctl --namespace ${u[0]} namespace update -vas enabled`,language:"text",inline:!0}}),{c(){e=F("p"),o=E("To enable Visibility Archival:"),t=P(),C(l.$$.fragment)},l(a){e=W(a,"P",{});var i=N(e);o=A(i,"To enable Visibility Archival:"),i.forEach(_),t=H(a),I(l.$$.fragment,a)},m(a,i){k(a,e,i),g(e,o),k(a,t,i),V(l,a,i),c=!0},p(a,i){const r={};i&1&&(r.content=`tctl --namespace ${a[0]} namespace update -vas enabled`),l.$set(r)},i(a){c||($(l.$$.fragment,a),c=!0)},o(a){y(l.$$.fragment,a),c=!1},d(a){a&&_(e),a&&_(t),x(l,a)}}}function se(u){let e,o;return e=new ae({props:{title:"No Workflows Found",content:"If you have filters applied, try adjusting them."}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){V(e,t,l),o=!0},p:U,i(t){o||($(e.$$.fragment,t),o=!0)},o(t){y(e.$$.fragment,t),o=!1},d(t){x(e,t)}}}function ce(u){let e,o;return e=new le({props:{items:u[1],$$slots:{default:[me,({visibleItems:t})=>({5:t}),({visibleItems:t})=>t?32:0]},$$scope:{ctx:u}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){V(e,t,l),o=!0},p(t,l){const c={};l&2&&(c.items=t[1]),l&561&&(c.$$scope={dirty:l,ctx:t}),e.$set(c)},i(t){o||($(e.$$.fragment,t),o=!0)},o(t){y(e.$$.fragment,t),o=!1},d(t){x(e,t)}}}function J(u){let e,o;return e=new ee({props:{workflow:u[6],namespace:u[0],timeFormat:u[4]}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){V(e,t,l),o=!0},p(t,l){const c={};l&32&&(c.workflow=t[6]),l&1&&(c.namespace=t[0]),l&16&&(c.timeFormat=t[4]),e.$set(c)},i(t){o||($(e.$$.fragment,t),o=!0)},o(t){y(e.$$.fragment,t),o=!1},d(t){x(e,t)}}}function fe(u){let e,o,t=u[5],l=[];for(let a=0;a<t.length;a+=1)l[a]=J(z(u,t,a));const c=a=>y(l[a],1,1,()=>{l[a]=null});return{c(){for(let a=0;a<l.length;a+=1)l[a].c();e=R()},l(a){for(let i=0;i<l.length;i+=1)l[i].l(a);e=R()},m(a,i){for(let r=0;r<l.length;r+=1)l[r].m(a,i);k(a,e,i),o=!0},p(a,i){if(i&49){t=a[5];let r;for(r=0;r<t.length;r+=1){const p=z(a,t,r);l[r]?(l[r].p(p,i),$(l[r],1)):(l[r]=J(p),l[r].c(),$(l[r],1),l[r].m(e.parentNode,e))}for(j(),r=t.length;r<l.length;r+=1)c(r);B()}},i(a){if(!o){for(let i=0;i<t.length;i+=1)$(l[i]);o=!0}},o(a){l=l.filter(Boolean);for(let i=0;i<l.length;i+=1)y(l[i]);o=!1},d(a){X(l,a),a&&_(e)}}}function me(u){let e,o;return e=new Z({props:{$$slots:{default:[fe]},$$scope:{ctx:u}}}),{c(){C(e.$$.fragment)},l(t){I(e.$$.fragment,t)},m(t,l){V(e,t,l),o=!0},p(t,l){const c={};l&561&&(c.$$scope={dirty:l,ctx:t}),e.$set(c)},i(t){o||($(e.$$.fragment,t),o=!0)},o(t){y(e.$$.fragment,t),o=!1},d(t){x(e,t)}}}function ue(u){let e,o,t,l;const c=[ne,oe,ie],a=[];function i(r,p){return r[2]&&r[3]?0:r[2]?1:2}return e=i(u),o=a[e]=c[e](u),{c(){o.c(),t=R()},l(r){o.l(r),t=R()},m(r,p){a[e].m(r,p),k(r,t,p),l=!0},p(r,[p]){let d=e;e=i(r),e===d?a[e].p(r,p):(j(),y(a[d],1,1,()=>{a[d]=null}),B(),o=a[e],o?o.p(r,p):(o=a[e]=c[e](r),o.c()),$(o,1),o.m(t.parentNode,t))},i(r){l||($(o),l=!0)},o(r){y(o),l=!1},d(r){a[e].d(r),r&&_(t)}}}const Je=async function({params:u,url:e,stuff:o}){var t,l;const{searchParams:c}=e;c.has("time-range")||c.set("time-range","1 day");const a=u.namespace,i=c.get("workflow-id"),r=c.get("workflow-type"),p=c.get("time-range"),d=c.get("status"),h={workflowId:i,workflowType:r,closeTime:p,executionStatus:d},s=o.namespaces.find(n=>n.namespaceInfo.name===a),b=((t=s==null?void 0:s.config)===null||t===void 0?void 0:t.historyArchivalState)==="Enabled",f=((l=s==null?void 0:s.config)===null||l===void 0?void 0:l.visibilityArchivalState)==="Enabled",m=b&&f?await Y(a,h,fetch):null;return{props:{workflows:m?m.workflows:[],namespace:a,archivalEnabled:b,visibilityArchivalEnabled:f}}};function pe(u,e,o){let t;Q(u,re,r=>o(4,t=r));let{namespace:l}=e,{workflows:c}=e,{archivalEnabled:a=!1}=e,{visibilityArchivalEnabled:i=!1}=e;return u.$$set=r=>{"namespace"in r&&o(0,l=r.namespace),"workflows"in r&&o(1,c=r.workflows),"archivalEnabled"in r&&o(2,a=r.archivalEnabled),"visibilityArchivalEnabled"in r&&o(3,i=r.visibilityArchivalEnabled)},[l,c,a,i,t]}class Ke extends K{constructor(e){super(),L(this,e,pe,ue,O,{namespace:0,workflows:1,archivalEnabled:2,visibilityArchivalEnabled:3})}}export{Ke as default,Je as load};