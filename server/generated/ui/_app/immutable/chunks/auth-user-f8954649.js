import{a6 as i}from"./index-8e660855.js";import{p as n}from"./persist-store-4b4c2e6c.js";const a=n("AuthUser",{}),f=()=>i(a),u=c=>{const{accessToken:s}=c;let{idToken:e,name:t,email:r,picture:o}=c;if(!s||s=="{{.AccessToken}}")throw new Error("No access token");(!e||e==="{{.IDToken}}")&&(e=""),t==="{{.UserName}}"&&(t=""),r==="{{.UserEmail}}"&&(r=""),o==="{{.UserPicture}}"&&(o=""),a.set({accessToken:s,idToken:e,name:t,email:r,picture:o})},h=()=>{a.set({})};export{a,h as c,f as g,u as s};
