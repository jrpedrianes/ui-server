import{d as h,e as l,t as P}from"./route-for-62d7d3b1.js";import{g as $}from"./auth-user-f8954649.js";import{E as O}from"./index-8e660855.js";import{w as z}from"./index-71be9f1c.js";import{n as W}from"./notifications-faca15d4.js";import{i as L}from"./is-network-error-5f9e2367.js";import{i as N}from"./persist-store-4b4c2e6c.js";import{p as S}from"./get-public-path-6c4a8950.js";const _=z(null),G=(c,n=W,i=_,s=l)=>{if(E(c)&&s){window.location.assign(h(c==null?void 0:c.message));return}if(v(c)&&s){window.location.assign(h(c==null?void 0:c.message));return}if(L(c))throw n.add("error",`${c.statusCode} ${c.statusText}`),i.set(c),c;typeof c=="string"&&n.add("error",c),c instanceof Error&&n.add("error",c.message)},nn=(c,n=l)=>{var s;const i=`${c==null?void 0:c.status} ${(s=c==null?void 0:c.body)==null?void 0:s.message}`;if(E(c)&&n){window.location.assign(h(i));return}if(v(c)&&n){window.location.assign(h(i));return}},E=c=>(c==null?void 0:c.statusCode)===401||(c==null?void 0:c.status)===401,v=c=>(c==null?void 0:c.statusCode)===403||(c==null?void 0:c.status)===403,cn=c=>(c==null?void 0:c.message)!==void 0&&typeof(c==null?void 0:c.message)=="string",B=async(c,n={},i=10)=>{var y;const{params:s={},request:t=fetch,token:o,shouldRetry:g=!1,notifyOnError:U=!0,handleError:q=G,onRetry:x=O,onError:k,retryInterval:R=5e3,isBrowser:I=l}=n;let{options:d}=n;const A=o?{next_page_token:o}:{},C=new URLSearchParams({...s,...A}),b=P(c,C);try{d=H(d,I),d=await K(d,I);const u=await t(b,d),w=await u.json(),{status:f,statusText:F}=u;if(!u.ok)if(k&&N(k))k({status:f,statusText:F,body:w});else throw{statusCode:u.status,statusText:u.statusText,response:u,message:(y=w==null?void 0:w.message)!=null?y:u.statusText};return w}catch(u){if(U){if(q(u),g&&i>0)return new Promise(w=>{const f=i-1;x(f),setTimeout(()=>{w(B(c,n,f))},R)})}else throw u}},H=(c,n=l)=>{const i={credentials:"include",...c};return i.headers=J(c==null?void 0:c.headers,n),i},K=async(c,n=l)=>($().accessToken&&(c.headers=await X(c==null?void 0:c.headers,$().accessToken,n),c.headers=D(c==null?void 0:c.headers,$().idToken,n)),c),X=async(c,n,i=l)=>{if(c||(c={}),!i)return c;try{n&&(c.Authorization=`Bearer ${n}`)}catch(s){console.error(s)}return c},D=(c={},n,i=l)=>(i&&n&&(c["Authorization-Extras"]=n),c),J=(c,n=l)=>{if(c||(c={}),!n)return c;const i="_csrf=",s="X-CSRF-TOKEN";try{let o=document.cookie.split(";").find(g=>g.includes(i));o&&!c[s]&&(o=o.trim().slice(i.length),c[s]=o)}catch(t){console.error(t)}return c};function T(c=l){const n="",i=!n.startsWith("http");let s="";return i?s=c?window.location.origin+n:"":s=n,s.endsWith("/")&&(s=s.slice(0,-1)),s}const M=async c=>{var i;let n="";if((globalThis==null?void 0:globalThis.GetNamespaces)&&c){const s=await globalThis.GetNamespaces(),t=s==null?void 0:s.find(o=>o.namespace===c);n=(i=t==null?void 0:t.webUri)!=null?i:T()}else n=T();return n.endsWith("/")&&(n=n.slice(0,-1)),n=`${n}${S}`,n},Q=async(c,n)=>(c.startsWith("/")&&(c=c.slice(1)),`${await M(n)}/api/v1/${c}`),V=c=>Object.keys(c!=null?c:{}).reduce((n,i)=>(n[i]=encodeURIComponent(encodeURIComponent(c[i])),n),{namespace:"",workflowId:"",scheduleId:"",runId:"",queue:""});function sn(c,n,i=!0){i&&(n=V(n));const s={cluster:"/cluster","events.ascending":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/events`,"events.descending":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/events/reverse`,namespaces:"/namespaces",query:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/query`,"schedule.delete":`/namespaces/${n==null?void 0:n.namespace}/schedules/${n==null?void 0:n.scheduleId}`,schedule:`/namespaces/${n==null?void 0:n.namespace}/schedules/${n==null?void 0:n.scheduleId}`,schedules:`/namespaces/${n==null?void 0:n.namespace}/schedules`,"search-attributes":"/search-attributes",settings:"/settings","task-queue":`/namespaces/${n==null?void 0:n.namespace}/task-queues/${n==null?void 0:n.queue}`,user:"/me","workflow.terminate":`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}/terminate`,workflow:`/namespaces/${n==null?void 0:n.namespace}/workflows/${n==null?void 0:n.workflowId}/runs/${n==null?void 0:n.runId}`,"workflows.archived":`/namespaces/${n==null?void 0:n.namespace}/workflows/archived`,workflows:`/namespaces/${n==null?void 0:n.namespace}/workflows`};return Q(s[c],n==null?void 0:n.namespace)}export{B as a,nn as b,T as g,G as h,cn as i,_ as n,sn as r};
