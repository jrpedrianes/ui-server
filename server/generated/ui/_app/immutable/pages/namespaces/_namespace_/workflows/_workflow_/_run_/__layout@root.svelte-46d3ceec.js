import{S as ee,i as te,s as re,I as $e,l as k,m as $,n as v,h as c,b,J as ve,K as ye,L as Ee,f as h,a4 as Ye,a5 as Ze,t as w,a6 as xe,e as ie,g as Ue,d as Je,N as z,w as y,a as C,x as E,c as P,y as I,B as T,r as D,u as V,p as d,M as p,E as oe,aa as Be,T as Ke,a8 as ze,D as et,C as Re,V as Fe,W as tt,R as G,v as x,al as rt}from"../../../../../../chunks/index-f283717a.js";import{p as Ge}from"../../../../../../chunks/stores-62bcca1c.js";import{r as Me,l as nt,w as at}from"../../../../../../chunks/workflow-run-e31ffcd4.js";import{t as qe}from"../../../../../../chunks/events-b0fbaf7b.js";import{f as He}from"../../../../../../chunks/index-cf7c7b94.js";import{I as st}from"../../../../../../chunks/icon-c6a60499.js";import{e as ot}from"../../../../../../chunks/event-view-0e727eb5.js";import{w as lt}from"../../../../../../chunks/workflows-4e00ad58.js";import{t as ft}from"../../../../../../chunks/workflow-service-455ea6e4.js";import{g as fe,h as we,i as ge,j as be,k as ke,l as Le}from"../../../../../../chunks/route-for-b2ab8caf.js";import{W as it}from"../../../../../../chunks/workflow-status-0bcf7612.js";import{n as Oe}from"../../../../../../chunks/notifications-dddf88f8.js";import{r as ut,a as ct}from"../../../../../../chunks/route-for-api-b2e8e01b.js";import{B as Xe}from"../../../../../../chunks/button-397b3a8c.js";import{M as mt}from"../../../../../../chunks/modal-90d17380.js";import{f as dt}from"../../../../../../chunks/events-service-aa57c693.js";import{L as pt}from"../../../../../../chunks/loading-4ec26143.js";import"../../../../../../chunks/index-5dff130b.js";import"../../../../../../chunks/with-loading-f07bedaf.js";import"../../../../../../chunks/pollers-service-27e8614f.js";import"../../../../../../chunks/index-9319d41b.js";import"../../../../../../chunks/has-ae9b6b71.js";import"../../../../../../chunks/is-6159121b.js";import"../../../../../../chunks/persist-store-c4deb1a0.js";import"../../../../../../chunks/is-function-45497f08.js";import"../../../../../../chunks/settings-16907be6.js";import"../../../../../../chunks/version-check-75d52bcc.js";import"../../../../../../chunks/simplify-attributes-61797c15.js";import"../../../../../../chunks/format-date-e7563fe7.js";import"../../../../../../chunks/to-duration-a5f6615f.js";import"../../../../../../chunks/get-public-path-76d5b50d.js";import"../../../../../../chunks/is-network-error-5f9e2367.js";import"../../../../../../chunks/get-api-origin-8c29353d.js";import"../../../../../../chunks/badge-46845e47.js";/* empty css                                                                    */import"../../../../../../chunks/index-50de2e24.js";import"../../../../../../chunks/is-http-d28111f6.js";import"../../../../../../chunks/data-converter-config-49e426af.js";import"../../../../../../chunks/atob-4d3c8649.js";import"../../../../../../chunks/get-event-categorization-2cfb578f.js";function _t(s){let e,r,t,a;const n=s[1].default,o=$e(n,s,s[0],null);return{c(){e=k("div"),o&&o.c()},l(l){e=$(l,"DIV",{});var f=v(e);o&&o.l(f),f.forEach(c)},m(l,f){b(l,e,f),o&&o.m(e,null),a=!0},p(l,[f]){o&&o.p&&(!a||f&1)&&ve(o,n,l,l[0],a?Ee(n,l[0],f,null):ye(l[0]),null)},i(l){a||(h(o,l),Ye(()=>{t&&t.end(1),r=Ze(e,He,{y:-50,duration:150,delay:50}),r.start()}),a=!0)},o(l){w(o,l),r&&r.invalidate(),t=xe(e,He,{y:-50,duration:150}),a=!1},d(l){l&&c(e),o&&o.d(l),l&&t&&t.end()}}}function ht(s,e,r){let{$$slots:t={},$$scope:a}=e;return s.$$set=n=>{"$$scope"in n&&r(0,a=n.$$scope)},[a,t]}class wt extends ee{constructor(e){super(),te(this,e,ht,_t,re,{})}}async function gt({workflow:s,namespace:e,reason:r}){return await ut(ct("workflow.terminate",{namespace:e,workflowId:s.id,runId:s.runId}),{options:{method:"POST",body:JSON.stringify({reason:r})},shouldRetry:!1,notifyOnError:!1})}function je(s){let e,r,t,a;return e=new Xe({props:{variant:"destructive",dataCy:"terminate-button",$$slots:{default:[bt]},$$scope:{ctx:s}}}),e.$on("click",s[3]),t=new mt({props:{open:s[2],confirmText:"Terminate",confirmType:"destructive",$$slots:{content:[$t],title:[kt]},$$scope:{ctx:s}}}),t.$on("cancelModal",s[4]),t.$on("confirmModal",s[5]),{c(){y(e.$$.fragment),r=C(),y(t.$$.fragment)},l(n){E(e.$$.fragment,n),r=P(n),E(t.$$.fragment,n)},m(n,o){I(e,n,o),b(n,r,o),I(t,n,o),a=!0},p(n,o){const l={};o&2048&&(l.$$scope={dirty:o,ctx:n}),e.$set(l);const f={};o&4&&(f.open=n[2]),o&2050&&(f.$$scope={dirty:o,ctx:n}),t.$set(f)},i(n){a||(h(e.$$.fragment,n),h(t.$$.fragment,n),a=!0)},o(n){w(e.$$.fragment,n),w(t.$$.fragment,n),a=!1},d(n){T(e,n),n&&c(r),T(t,n)}}}function bt(s){let e;return{c(){e=D("Terminate")},l(r){e=V(r,"Terminate")},m(r,t){b(r,e,t)},d(r){r&&c(e)}}}function kt(s){let e,r;return{c(){e=k("h3"),r=D("Terminate Workflow"),this.h()},l(t){e=$(t,"H3",{slot:!0});var a=v(e);r=V(a,"Terminate Workflow"),a.forEach(c),this.h()},h(){d(e,"slot","title")},m(t,a){b(t,e,a),p(e,r)},p:oe,d(t){t&&c(e)}}}function $t(s){let e,r,t,a,n,o,l;return{c(){e=k("div"),r=k("p"),t=D(`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),a=C(),n=k("input"),this.h()},l(f){e=$(f,"DIV",{slot:!0});var i=v(e);r=$(i,"P",{});var m=v(r);t=V(m,`Are you sure you want to terminate this workflow? This action cannot be
        undone.`),m.forEach(c),a=P(i),n=$(i,"INPUT",{class:!0,placeholder:!0}),i.forEach(c),this.h()},h(){d(n,"class","mt-4 block w-full rounded-md border border-gray-200 p-2"),d(n,"placeholder","Enter a reason"),d(e,"slot","content")},m(f,i){b(f,e,i),p(e,r),p(r,t),p(e,a),p(e,n),Be(n,s[1]),o||(l=Ke(n,"input",s[7]),o=!0)},p(f,i){i&2&&n.value!==f[1]&&Be(n,f[1])},d(f){f&&c(e),o=!1,l()}}}function vt(s){let e,r,t=s[0].canBeTerminated&&je(s);return{c(){t&&t.c(),e=ie()},l(a){t&&t.l(a),e=ie()},m(a,n){t&&t.m(a,n),b(a,e,n),r=!0},p(a,[n]){a[0].canBeTerminated?t?(t.p(a,n),n&1&&h(t,1)):(t=je(a),t.c(),h(t,1),t.m(e.parentNode,e)):t&&(Ue(),w(t,1,1,()=>{t=null}),Je())},i(a){r||(h(t),r=!0)},o(a){w(t),r=!1},d(a){t&&t.d(a),a&&c(e)}}}function yt(s,e,r){let t;z(s,Me,A=>r(8,t=A));let{workflow:a}=e,{namespace:n}=e,o="",l=!1;const f=()=>r(2,l=!0),i=()=>r(2,l=!1),m=async()=>{r(2,l=!1),r(1,o=""),ze(Me,t=Date.now(),t),await et(),Oe.add("success","Workflow Terminated")},S=()=>{r(2,l=!1),r(1,o=""),Oe.add("error","Cannot Terminate Workflow")},R=()=>{!a.canBeTerminated||gt({workflow:a,namespace:n,reason:o}).then(m).catch(S)};function _(){o=this.value,r(1,o)}return s.$$set=A=>{"workflow"in A&&r(0,a=A.workflow),"namespace"in A&&r(6,n=A.namespace)},[a,o,l,f,i,R,n,_]}class Et extends ee{constructor(e){super(),te(this,e,yt,vt,re,{workflow:0,namespace:6})}}function It(s){let e,r;return{c(){e=k("span"),r=D("Download"),this.h()},l(t){e=$(t,"SPAN",{class:!0});var a=v(e);r=V(a,"Download"),a.forEach(c),this.h()},h(){d(e,"class","hidden md:inline")},m(t,a){b(t,e,a),p(e,r)},p:oe,d(t){t&&c(e)}}}function Tt(s){let e,r;return e=new Xe({props:{variant:"secondary",icon:"download",$$slots:{default:[It]},$$scope:{ctx:s}}}),e.$on("click",s[0]),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){I(e,t,a),r=!0},p(t,[a]){const n={};a&16&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function St(s,e,r){let{namespace:t}=e,{workflowId:a}=e,{runId:n}=e;const o=async()=>{const l=await dt({namespace:t,workflowId:a,runId:n,sort:"ascending"}),f=JSON.stringify({events:l},null,2);i(f,`${n}/events.json`,"text/plain");function i(m,S,R){const _=document.createElement("a"),A=new Blob([m],{type:R});_.href=URL.createObjectURL(A),_.download=S,_.click()}};return s.$$set=l=>{"namespace"in l&&r(1,t=l.namespace),"workflowId"in l&&r(2,a=l.workflowId),"runId"in l&&r(3,n=l.runId)},[o,t,a,n]}class At extends ee{constructor(e){super(),te(this,e,St,Tt,re,{namespace:1,workflowId:2,runId:3})}}function Wt(s){let e,r,t,a;function n(f,i){return f[2]||f[2]===0?Nt:Pt}let o=n(s),l=o(s);return{c(){e=k("div"),l.c(),this.h()},l(f){e=$(f,"DIV",{class:!0,"data-cy":!0});var i=v(e);l.l(i),i.forEach(c),this.h()},h(){d(e,"class","block cursor-pointer whitespace-nowrap border-b-2 border-white text-sm hover:border-b-2 hover:border-blue-700 md:text-base svelte-1gctro0"),d(e,"data-cy",r=s[5].dataCy),G(e,"active",s[3]),G(e,"disabled",s[4])},m(f,i){b(f,e,i),l.m(e,null),t||(a=Ke(e,"click",s[6]),t=!0)},p(f,i){o===(o=n(f))&&l?l.p(f,i):(l.d(1),l=o(f),l&&(l.c(),l.m(e,null))),i&32&&r!==(r=f[5].dataCy)&&d(e,"data-cy",r),i&8&&G(e,"active",f[3]),i&16&&G(e,"disabled",f[4])},d(f){f&&c(e),l.d(),t=!1,a()}}}function Ct(s){let e,r;function t(o,l){return o[2]||o[2]===0?Vt:Dt}let a=t(s),n=a(s);return{c(){e=k("a"),n.c(),this.h()},l(o){e=$(o,"A",{class:!0,href:!0,"data-cy":!0});var l=v(e);n.l(l),l.forEach(c),this.h()},h(){d(e,"class","block whitespace-nowrap border-b-2 border-white text-sm hover:border-b-2 hover:border-blue-700 md:text-base svelte-1gctro0"),d(e,"href",s[0]),d(e,"data-cy",r=s[5].dataCy),G(e,"active",s[3]),G(e,"disabled",s[4])},m(o,l){b(o,e,l),n.m(e,null)},p(o,l){a===(a=t(o))&&n?n.p(o,l):(n.d(1),n=a(o),n&&(n.c(),n.m(e,null))),l&1&&d(e,"href",o[0]),l&32&&r!==(r=o[5].dataCy)&&d(e,"data-cy",r),l&8&&G(e,"active",o[3]),l&16&&G(e,"disabled",o[4])},d(o){o&&c(e),n.d()}}}function Pt(s){let e;return{c(){e=D(s[1])},l(r){e=V(r,s[1])},m(r,t){b(r,e,t)},p(r,t){t&2&&x(e,r[1])},d(r){r&&c(e)}}}function Nt(s){let e,r,t,a;return{c(){e=D(s[1]),r=C(),t=k("span"),a=D(s[2]),this.h()},l(n){e=V(n,s[1]),r=P(n),t=$(n,"SPAN",{class:!0});var o=v(t);a=V(o,s[2]),o.forEach(c),this.h()},h(){d(t,"class","rounded-sm bg-blue-100 px-2 text-blue-700")},m(n,o){b(n,e,o),b(n,r,o),b(n,t,o),p(t,a)},p(n,o){o&2&&x(e,n[1]),o&4&&x(a,n[2])},d(n){n&&c(e),n&&c(r),n&&c(t)}}}function Dt(s){let e;return{c(){e=D(s[1])},l(r){e=V(r,s[1])},m(r,t){b(r,e,t)},p(r,t){t&2&&x(e,r[1])},d(r){r&&c(e)}}}function Vt(s){let e,r,t,a;return{c(){e=D(s[1]),r=C(),t=k("span"),a=D(s[2]),this.h()},l(n){e=V(n,s[1]),r=P(n),t=$(n,"SPAN",{class:!0});var o=v(t);a=V(o,s[2]),o.forEach(c),this.h()},h(){d(t,"class","rounded-sm bg-blue-100 px-2 text-blue-700")},m(n,o){b(n,e,o),b(n,r,o),b(n,t,o),p(t,a)},p(n,o){o&2&&x(e,n[1]),o&4&&x(a,n[2])},d(n){n&&c(e),n&&c(r),n&&c(t)}}}function Bt(s){let e;function r(n,o){return n[0]?Ct:Wt}let t=r(s),a=t(s);return{c(){a.c(),e=ie()},l(n){a.l(n),e=ie()},m(n,o){a.m(n,o),b(n,e,o)},p(n,[o]){t===(t=r(n))&&a?a.p(n,o):(a.d(1),a=t(n),a&&(a.c(),a.m(e.parentNode,e)))},i:oe,o:oe,d(n){a.d(n),n&&c(e)}}}function Rt(s,e,r){let{href:t=""}=e,{label:a}=e,{amount:n=null}=e,{active:o=!1}=e,{disabled:l=!1}=e;function f(i){tt.call(this,s,i)}return s.$$set=i=>{r(5,e=Re(Re({},e),Fe(i))),"href"in i&&r(0,t=i.href),"label"in i&&r(1,a=i.label),"amount"in i&&r(2,n=i.amount),"active"in i&&r(3,o=i.active),"disabled"in i&&r(4,l=i.disabled)},e=Fe(e),[t,a,n,o,l,e,f]}class se extends ee{constructor(e){super(),te(this,e,Rt,Bt,re,{href:0,label:1,amount:2,active:3,disabled:4})}}const Qe=s=>{const e=s==null?void 0:s.indexOf("?");return e>-1?s.slice(0,e):s},B=(s,e,r=!1)=>{const t=Qe(s).split("/"),a=Qe(e).split("/");if(r&&t.length!==a.length)return!1;for(let n=0;n<t.length;n++){const o=t[n],l=a[n];if(o!==l)return!1}return!0};function Ft(s){var Ie,Te,Se,Ae,We;let e,r,t,a,n,o,l,f,i,m,S,R,_,A=s[1].id+"",le,ue,q,H,ce,L,me,W,O,de,j,pe,Q,_e,U,he,J,ne;return n=new st({props:{name:"chevron-left",class:"inline"}}),S=new it({props:{status:(Ie=s[1])==null?void 0:Ie.status}}),H=new At({props:{namespace:s[0],workflowId:s[1].id,runId:s[1].runId}}),L=new Et({props:{workflow:s[1],namespace:s[0]}}),O=new se({props:{label:"History",href:fe({view:s[3],...s[5]}),amount:(Te=s[1])==null?void 0:Te.historyEvents,dataCy:"history-tab",active:B(s[4].url.pathname,fe({view:s[3],...s[5]}))}}),j=new se({props:{label:"Workers",href:we(s[5]),amount:(Ae=(Se=s[2])==null?void 0:Se.pollers)==null?void 0:Ae.length,dataCy:"workers-tab",active:B(s[4].url.pathname,we(s[5]))}}),Q=new se({props:{label:"Pending Activities",href:ge(s[5]),amount:(We=s[1].pendingActivities)==null?void 0:We.length,dataCy:"pending-activities-tab",active:B(s[4].url.pathname,ge(s[5]))}}),U=new se({props:{label:"Stack Trace",href:be(s[5]),dataCy:"stack-trace-tab",active:B(s[4].url.pathname,be(s[5]))}}),J=new se({props:{label:"Queries",href:ke(s[5]),dataCy:"queries-tab",active:B(s[4].url.pathname,ke(s[5]))}}),{c(){e=k("header"),r=k("main"),t=k("div"),a=k("a"),y(n.$$.fragment),o=D("Back to Workflows"),f=C(),i=k("div"),m=k("h1"),y(S.$$.fragment),R=C(),_=k("span"),le=D(A),ue=C(),q=k("div"),y(H.$$.fragment),ce=C(),y(L.$$.fragment),me=C(),W=k("nav"),y(O.$$.fragment),de=C(),y(j.$$.fragment),pe=C(),y(Q.$$.fragment),_e=C(),y(U.$$.fragment),he=C(),y(J.$$.fragment),this.h()},l(u){e=$(u,"HEADER",{class:!0});var g=v(e);r=$(g,"MAIN",{class:!0});var F=v(r);t=$(F,"DIV",{class:!0});var X=v(t);a=$(X,"A",{href:!0,"data-cy":!0,class:!0});var Y=v(a);E(n.$$.fragment,Y),o=V(Y,"Back to Workflows"),Y.forEach(c),X.forEach(c),f=P(F),i=$(F,"DIV",{class:!0});var M=v(i);m=$(M,"H1",{class:!0});var K=v(m);E(S.$$.fragment,K),R=P(K),_=$(K,"SPAN",{class:!0});var ae=v(_);le=V(ae,A),ae.forEach(c),K.forEach(c),ue=P(M),q=$(M,"DIV",{class:!0});var Z=v(q);E(H.$$.fragment,Z),ce=P(Z),E(L.$$.fragment,Z),Z.forEach(c),M.forEach(c),me=P(F),W=$(F,"NAV",{class:!0});var N=v(W);E(O.$$.fragment,N),de=P(N),E(j.$$.fragment,N),pe=P(N),E(Q.$$.fragment,N),_e=P(N),E(U.$$.fragment,N),he=P(N),E(J.$$.fragment,N),N.forEach(c),F.forEach(c),g.forEach(c),this.h()},h(){d(a,"href",l=`/namespaces/${s[0]}/workflows?query=${Le(s[7])}&search=${s[6]}`),d(a,"data-cy","back-to-workflows"),d(a,"class","back-to-workflows svelte-st9g8m"),d(t,"class","-mt-3 -ml-2 block"),d(_,"class","select-all font-medium"),d(m,"class","relative flex items-center gap-4 text-2xl"),d(q,"class","ml-8 flex items-center justify-end gap-4"),d(i,"class","mb-8 flex items-center justify-between"),d(W,"class","flex flex-wrap gap-6"),d(r,"class","relative flex flex-col gap-1"),d(e,"class","mb-4 flex flex-col gap-4")},m(u,g){b(u,e,g),p(e,r),p(r,t),p(t,a),I(n,a,null),p(a,o),p(r,f),p(r,i),p(i,m),I(S,m,null),p(m,R),p(m,_),p(_,le),p(i,ue),p(i,q),I(H,q,null),p(q,ce),I(L,q,null),p(r,me),p(r,W),I(O,W,null),p(W,de),I(j,W,null),p(W,pe),I(Q,W,null),p(W,_e),I(U,W,null),p(W,he),I(J,W,null),ne=!0},p(u,[g]){var Ce,Pe,Ne,De,Ve;(!ne||g&1&&l!==(l=`/namespaces/${u[0]}/workflows?query=${Le(u[7])}&search=${u[6]}`))&&d(a,"href",l);const F={};g&2&&(F.status=(Ce=u[1])==null?void 0:Ce.status),S.$set(F),(!ne||g&2)&&A!==(A=u[1].id+"")&&x(le,A);const X={};g&1&&(X.namespace=u[0]),g&2&&(X.workflowId=u[1].id),g&2&&(X.runId=u[1].runId),H.$set(X);const Y={};g&2&&(Y.workflow=u[1]),g&1&&(Y.namespace=u[0]),L.$set(Y);const M={};g&8&&(M.href=fe({view:u[3],...u[5]})),g&2&&(M.amount=(Pe=u[1])==null?void 0:Pe.historyEvents),g&24&&(M.active=B(u[4].url.pathname,fe({view:u[3],...u[5]}))),O.$set(M);const K={};g&4&&(K.amount=(De=(Ne=u[2])==null?void 0:Ne.pollers)==null?void 0:De.length),g&16&&(K.active=B(u[4].url.pathname,we(u[5]))),j.$set(K);const ae={};g&2&&(ae.amount=(Ve=u[1].pendingActivities)==null?void 0:Ve.length),g&16&&(ae.active=B(u[4].url.pathname,ge(u[5]))),Q.$set(ae);const Z={};g&16&&(Z.active=B(u[4].url.pathname,be(u[5]))),U.$set(Z);const N={};g&16&&(N.active=B(u[4].url.pathname,ke(u[5]))),J.$set(N)},i(u){ne||(h(n.$$.fragment,u),h(S.$$.fragment,u),h(H.$$.fragment,u),h(L.$$.fragment,u),h(O.$$.fragment,u),h(j.$$.fragment,u),h(Q.$$.fragment,u),h(U.$$.fragment,u),h(J.$$.fragment,u),ne=!0)},o(u){w(n.$$.fragment,u),w(S.$$.fragment,u),w(H.$$.fragment,u),w(L.$$.fragment,u),w(O.$$.fragment,u),w(j.$$.fragment,u),w(Q.$$.fragment,u),w(U.$$.fragment,u),w(J.$$.fragment,u),ne=!1},d(u){u&&c(e),T(n),T(S),T(H),T(L),T(O),T(j),T(Q),T(U),T(J)}}}function Mt(s,e,r){let t,a,n;z(s,lt,_=>r(8,t=_)),z(s,ot,_=>r(3,a=_)),z(s,Ge,_=>r(4,n=_));let{namespace:o}=e,{workflow:l}=e,{workers:f}=e;const i={namespace:o,workflow:l.id,run:l.runId},{parameters:m,searchType:S}=t,R=ft(m);return s.$$set=_=>{"namespace"in _&&r(0,o=_.namespace),"workflow"in _&&r(1,l=_.workflow),"workers"in _&&r(2,f=_.workers)},[o,l,f,a,n,i,S,R]}class qt extends ee{constructor(e){super(),te(this,e,Mt,Ft,re,{namespace:0,workflow:1,workers:2})}}function Ht(s){let e,r;return e=new wt({props:{$$slots:{default:[Ot]},$$scope:{ctx:s}}}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){I(e,t,a),r=!0},p(t,a){const n={};a&18&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function Lt(s){let e,r;return e=new pt({}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){I(e,t,a),r=!0},p:oe,i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function Ot(s){let e,r,t;e=new qt({props:{namespace:s[2],workflow:s[1].workflow,workers:s[1].workers}});const a=s[3].default,n=$e(a,s,s[4],null);return{c(){y(e.$$.fragment),r=C(),n&&n.c()},l(o){E(e.$$.fragment,o),r=P(o),n&&n.l(o)},m(o,l){I(e,o,l),b(o,r,l),n&&n.m(o,l),t=!0},p(o,l){const f={};l&2&&(f.workflow=o[1].workflow),l&2&&(f.workers=o[1].workers),e.$set(f),n&&n.p&&(!t||l&16)&&ve(n,a,o,o[4],t?Ee(a,o[4],l,null):ye(o[4]),null)},i(o){t||(h(e.$$.fragment,o),h(n,o),t=!0)},o(o){w(e.$$.fragment,o),w(n,o),t=!1},d(o){T(e,o),o&&c(r),n&&n.d(o)}}}function jt(s){let e,r,t,a;const n=[Lt,Ht],o=[];function l(f,i){return f[0]?0:1}return r=l(s),t=o[r]=n[r](s),{c(){e=k("main"),t.c(),this.h()},l(f){e=$(f,"MAIN",{class:!0});var i=v(e);t.l(i),i.forEach(c),this.h()},h(){d(e,"class","flex h-full flex-col gap-6")},m(f,i){b(f,e,i),o[r].m(e,null),a=!0},p(f,[i]){let m=r;r=l(f),r===m?o[r].p(f,i):(Ue(),w(o[m],1,1,()=>{o[m]=null}),Je(),t=o[r],t?t.p(f,i):(t=o[r]=n[r](f),t.c()),h(t,1),t.m(e,null))},i(f){a||(h(t),a=!0)},o(f){w(t),a=!1},d(f){f&&c(e),o[r].d()}}}function Qt(s,e,r){let t,a,n,o;z(s,qe,m=>r(5,t=m)),z(s,Ge,m=>r(6,a=m)),z(s,nt,m=>r(0,n=m)),z(s,at,m=>r(1,o=m));let{$$slots:l={},$$scope:f}=e;const{namespace:i}=a.params;return rt(()=>{ze(qe,t=null,t)}),s.$$set=m=>{"$$scope"in m&&r(4,f=m.$$scope)},[n,o,i,l,f]}class Ut extends ee{constructor(e){super(),te(this,e,Qt,jt,re,{})}}function Jt(s){let e;const r=s[0].default,t=$e(r,s,s[1],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,n){t&&t.m(a,n),e=!0},p(a,n){t&&t.p&&(!e||n&2)&&ve(t,r,a,a[1],e?Ee(r,a[1],n,null):ye(a[1]),null)},i(a){e||(h(t,a),e=!0)},o(a){w(t,a),e=!1},d(a){t&&t.d(a)}}}function Kt(s){let e,r;return e=new Ut({props:{$$slots:{default:[Jt]},$$scope:{ctx:s}}}),{c(){y(e.$$.fragment)},l(t){E(e.$$.fragment,t)},m(t,a){I(e,t,a),r=!0},p(t,[a]){const n={};a&2&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(h(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){T(e,t)}}}function zt(s,e,r){let{$$slots:t={},$$scope:a}=e;return s.$$set=n=>{"$$scope"in n&&r(1,a=n.$$scope)},[t,a]}class Br extends ee{constructor(e){super(),te(this,e,zt,Kt,re,{})}}export{Br as default};
