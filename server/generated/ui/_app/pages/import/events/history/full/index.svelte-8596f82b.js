import{S as u,i as c,s as f,w as g,x as l,y as _,q as y,o as E,B as d,O as i}from"../../../../../chunks/index-f021a159.js";import{p as v}from"../../../../../chunks/stores-2e95f632.js";import{i as h,a as b}from"../../../../../chunks/import-events-77fdb763.js";import{E as q}from"../../../../../chunks/event-summary-3439ffe4.js";import"../../../../../chunks/index-cfbcd7ef.js";import"../../../../../chunks/pagination-9c5485db.js";import"../../../../../chunks/index.es-c091a2eb.js";import"../../../../../chunks/table-link-d7bcf69e.js";import"../../../../../chunks/navigation-3f1ea447.js";import"../../../../../chunks/singletons-d1fb5791.js";import"../../../../../chunks/select-b8c501cf.js";import"../../../../../chunks/index-2bee260b.js";import"../../../../../chunks/get-event-categorization-b2bce139.js";import"../../../../../chunks/persist-store-210df7c0.js";import"../../../../../chunks/index-a8ee0a5c.js";import"../../../../../chunks/format-date-27daa7ac.js";import"../../../../../chunks/format-camel-case-c8f5e0aa.js";import"../../../../../chunks/route-for-d606e623.js";import"../../../../../chunks/code-block-a854edcb.js";import"../../../../../chunks/empty-state-ebe410ce.js";function w(o){let r,e;return r=new q({props:{items:o[0],groups:o[1],expandAll:!0}}),{c(){g(r.$$.fragment)},l(t){l(r.$$.fragment,t)},m(t,n){_(r,t,n),e=!0},p(t,[n]){const p={};n&1&&(p.items=t[0]),n&2&&(p.groups=t[1]),r.$set(p)},i(t){e||(y(r.$$.fragment,t),e=!0)},o(t){E(r.$$.fragment,t),e=!1},d(t){d(r,t)}}}function x(o,r,e){let t,n,p,s,a;return i(o,h,m=>e(3,p=m)),i(o,v,m=>e(4,s=m)),i(o,b,m=>e(1,a=m)),o.$$.update=()=>{o.$$.dirty&16&&e(2,t=s.url.searchParams.get("category")),o.$$.dirty&12&&e(0,n=p.filter(m=>t?m.category===t:m))},[n,a,t,p,s]}class Q extends u{constructor(r){super(),c(this,r,x,w,f,{})}}export{Q as default};
