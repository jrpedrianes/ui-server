import{S as m,i,s as a,w as p,x as u,y as c,q as f,o as g,B as l}from"../../../../../../../../chunks/index-f021a159.js";import{b as _}from"../../../../../../../../chunks/get-event-categorization-b2bce139.js";import{E as y}from"../../../../../../../../chunks/event-summary-3439ffe4.js";import"../../../../../../../../chunks/pagination-9c5485db.js";import"../../../../../../../../chunks/stores-2e95f632.js";import"../../../../../../../../chunks/index-cfbcd7ef.js";import"../../../../../../../../chunks/index.es-c091a2eb.js";import"../../../../../../../../chunks/table-link-d7bcf69e.js";import"../../../../../../../../chunks/navigation-3f1ea447.js";import"../../../../../../../../chunks/singletons-d1fb5791.js";import"../../../../../../../../chunks/select-b8c501cf.js";import"../../../../../../../../chunks/index-2bee260b.js";import"../../../../../../../../chunks/persist-store-210df7c0.js";import"../../../../../../../../chunks/index-a8ee0a5c.js";import"../../../../../../../../chunks/format-date-27daa7ac.js";import"../../../../../../../../chunks/format-camel-case-c8f5e0aa.js";import"../../../../../../../../chunks/route-for-d606e623.js";import"../../../../../../../../chunks/code-block-a854edcb.js";import"../../../../../../../../chunks/empty-state-ebe410ce.js";function v(s){let e,o;return e=new y({props:{items:s[0],groups:s[1]}}),{c(){p(e.$$.fragment)},l(t){u(e.$$.fragment,t)},m(t,n){c(e,t,n),o=!0},p(t,[n]){const r={};n&1&&(r.items=t[0]),n&2&&(r.groups=t[1]),e.$set(r)},i(t){o||(f(e.$$.fragment,t),o=!0)},o(t){g(e.$$.fragment,t),o=!1},d(t){l(e,t)}}}const H=async function({stuff:s,url:e}){const o=e.searchParams.get("category"),t=_(s.events,o);let n=t;const r=s.eventGroups;return{props:{items:n,groups:r},stuff:{matchingEvents:t}}};function h(s,e,o){let{items:t}=e,{groups:n}=e;return s.$$set=r=>{"items"in r&&o(0,t=r.items),"groups"in r&&o(1,n=r.groups)},[t,n]}class J extends m{constructor(e){super(),i(this,e,h,v,a,{items:0,groups:1})}}export{J as default,H as load};
