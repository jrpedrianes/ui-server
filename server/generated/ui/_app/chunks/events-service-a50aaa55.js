var w=Object.defineProperty;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var v=(t,r,e)=>r in t?w(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,g=(t,r)=>{for(var e in r||(r={}))A.call(r,e)&&v(t,e,r[e]);if(y)for(var e of y(r))m.call(r,e)&&v(t,e,r[e]);return t};var k=(t,r)=>{var e={};for(var s in t)A.call(t,s)&&r.indexOf(s)<0&&(e[s]=t[s]);if(t!=null&&y)for(var s of y(t))r.indexOf(s)<0&&m.call(t,s)&&(e[s]=t[s]);return e};import{h as F,i as h,r as P,a as b}from"./route-for-api-e4a488a6.js";import{t as j}from"./index-ae512670.js";const E=(t={},r={})=>{const e=g({},t);for(const s of Object.keys(r)){const n=e[s];Array.isArray(n)?e[s]=e[s].concat(r[s]):typeof n=="object"&&!Array.isArray(n)?e[s]=E(e[s],r[s]):e[s]=r[s]}return e},l=async(t,{onStart:r,onUpdate:e,onComplete:s,onError:n=F,token:u,previousProps:o}={})=>{!o&&h(r)&&r();try{const a=await t(u),{nextPageToken:p}=a,i=k(a,["nextPageToken"]),f=E(o,i);return h(e)&&e(f,i),p?l(t,{onStart:r,onUpdate:e,onComplete:s,token:p,previousProps:f}):(h(s)&&s(f),f)}catch(c){n(c)}},x=async({namespace:t,workflowId:r,runId:e,reverse:s,onStart:n,onUpdate:u,onComplete:o},a=fetch)=>{const c=s?"events.reverse":"events";return(await l(async i=>P(b(c,{namespace:t,workflowId:r,runId:e}),{token:i,request:a}),{onStart:n,onUpdate:u,onComplete:o})).history.events},O=async(t,r=fetch)=>x(t,r).then(j);export{O as a,x as f};
