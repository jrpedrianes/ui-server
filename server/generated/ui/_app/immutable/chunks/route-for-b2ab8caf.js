import{p as s}from"./get-public-path-76d5b50d.js";const f=!0,h=(e,r)=>{const t=r instanceof URLSearchParams;return r&&!t&&(r=new URLSearchParams(r)),r?`${e}?${r}`:e};function $(e){return e.replace(/%/g,"%25").replace(/,/g,"%2C").replace(/\//g,"%2F").replace(/\\/g,"%5C").replace(/\?/g,"%3F").replace(/:/g,"%3A").replace(/@/g,"%40").replace(/&/g,"%26").replace(/=/g,"%3D").replace(/\+/g,"%2B").replace(/\$/g,"%24").replace(/#/g,"%23")}function w(e){return e.replace(/%2C/g,",").replace(/%2F/g,"/").replace(/%5C/g,"\\").replace(/%3F/g,"?").replace(/%3A/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3D/g,"=").replace(/%2B/g,"+").replace(/%24/g,"$").replace(/%23/g,"#").replace(/%25/g,"%")}const F=e=>e==="feed"||e==="compact"||e==="json",P=()=>`${s}/namespaces`,c=({namespace:e})=>`${s}/namespaces/${e}`,d=e=>`${c(e)}/workflows`,U=e=>`${c(e)}/archival`,a=({workflow:e,run:r,...t})=>{const o=$(e);return`${d(t)}/${o}/${r}`},p=e=>`${c(e)}/schedules`,k=({namespace:e})=>`${p({namespace:e})}/new`,S=({scheduleId:e,namespace:r})=>{const t=$(e);return`${p({namespace:r})}/${t}`},R=({view:e,queryParams:r,...t})=>{const o=`${a(t)}/history`;return!e||!F(e)?`${o}/feed`:h(`${o}/${e}`,r)},L=e=>`${a(e)}/workers`,v=e=>`${c({namespace:e.namespace})}/task-queues/${e.queue}`,A=e=>`${a(e)}/stack-trace`,C=e=>`${a(e)}/query`,W=e=>`${a(e)}/pending-activities`,b=e=>{var l;const{settings:r,searchParams:t,originUrl:o}=e,n=new URL(`${s}/auth/sso`,r.baseUrl);let u=(l=r.auth.options)!=null?l:[];return u=[...u,"returnUrl"],u.forEach(i=>{const g=t.get(i);g&&n.searchParams.set(i,g)}),!n.searchParams.get("returnUrl")&&o&&n.searchParams.set("returnUrl",o),n.toString()},q=(e=f)=>{if(e){const r=new URL("login",window.location.origin);return r.searchParams.set("returnUrl",window.location.href),r.toString()}return`${s}/login`},y=({importType:e,view:r})=>e==="events"&&r?`${s}/import/${e}/namespace/workflow/run/history/${r}`:`${s}/import/${e}`;export{U as a,P as b,p as c,q as d,f as e,y as f,R as g,L as h,W as i,A as j,C as k,$ as l,w as m,a as n,v as o,b as p,S as q,d as r,k as s,h as t,c as u};
