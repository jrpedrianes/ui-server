import{b as d,r as m,a as v}from"./route-for-api-658a0b67.js";import{i as y}from"./is-function-45497f08.js";import{t as h}from"./index-5d11fd6c.js";import{b as A}from"./is-6159121b.js";const g=(t={},n={})=>{const r={...t};for(const e of Object.keys(n)){const s=r[e];Array.isArray(s)?r[e]=r[e].concat(n[e]):typeof s=="object"&&!Array.isArray(s)?r[e]=g(r[e],n[e]):r[e]=n[e]}return r},p=async(t,{onStart:n,onUpdate:r,onComplete:e,onError:s=d,token:f,previousProps:i}={})=>{!i&&y(n)&&n();try{const o=await t(f),{nextPageToken:u,...c}=o,a=g(i,c);return y(r)&&r(a,c),u?p(t,{onStart:n,onUpdate:r,onComplete:e,token:u,previousProps:a}):(y(e)&&e(a),a)}catch(o){s(o)}},E=t=>!A(t)||t==="descending"?"events.descending":t==="ascending"?"events.ascending":"events.descending",b=async({namespace:t,workflowId:n,runId:r,sort:e,onStart:s,onUpdate:f,onComplete:i})=>{const o=E(e);return(await p(async c=>m(v(o,{namespace:t,workflowId:n,runId:r}),{token:c,request:fetch}),{onStart:s,onUpdate:f,onComplete:i})).history.events},P=async t=>{const{settings:n,namespace:r}=t;return b(t).then(e=>h({response:e,namespace:r,settings:n}))};export{P as a,b as f};
