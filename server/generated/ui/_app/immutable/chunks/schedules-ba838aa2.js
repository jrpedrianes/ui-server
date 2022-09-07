import{g as w}from"./navigation-fbe70647.js";import{w as h}from"./index-5dff130b.js";import{c as b}from"./route-for-cc3652eb.js";import{c as v}from"./schedule-service-23f2e8d9.js";function q(c,s,e){const a=c.split(".");return a.reduce((l,r,o)=>l[r]=(a==null?void 0:a.length)===++o?e:l[r]||{},s)}const I={name:{key:"schedule_id",label:"Schedule Name",required:!0},workflowType:{key:"schedule.action.startWorkflow.workflowType.name",label:"Workflow Type",required:!0},workflowId:{key:"schedule.action.startWorkflow.workflowId",label:"Workflow Id",required:!0},workflowTaskQueue:{key:"schedule.action.startWorkflow.taskQueue.name",label:"Task Queue Name",required:!0},interval:{key:"schedule.spec.interval.interval",label:"Interval",placeholder:"86400s",required:!1},phase:{key:"schedule.spec.interval.phase",label:"Phase",placeholder:"0s",required:!1},year:{key:"schedule.spec.calendar.year",label:"Year",required:!1},month:{key:"schedule.spec.calendar.month",label:"Month",required:!1},dayOfMonth:{key:"schedule.spec.calendar.dayOfMonth",label:"Day of Month",required:!1},dayOfWeek:{key:"schedule.spec.calendar.dayOfWeek",label:"Day of Week",required:!1},hour:{key:"schedule.spec.calendar.hour",label:"Hour",required:!1},minute:{key:"schedule.spec.calendar.minute",label:"Minute",required:!1},second:{key:"schedule.spec.calendar.second",label:"Second",required:!1}},S=async(c,s)=>{const e=c.values,a={schedule_id:"",schedule:{spec:{calendar:[],interval:[]},action:{startWorkflow:{workflowId:"",workflowType:{name:""},taskQueue:{name:""}}}}};Object.keys(e).forEach(n=>{q(n,a,e[n])});const l=e["schedule.spec.interval.interval"],r=e["schedule.spec.interval.phase"],o=e["schedule.spec.calendar.year"],i=e["schedule.spec.calendar.month"],f=e["schedule.spec.calendar.dayOfMonth"],p=e["schedule.spec.calendar.dayOfWeek"],k=e["schedule.spec.calendar.hour"],y=e["schedule.spec.calendar.minute"],m=e["schedule.spec.calendar.second"];l?(a.schedule.spec.interval=[{interval:l,phase:r||"0s"}],a.schedule.spec.calendar=[]):(a.schedule.spec.interval=[],a.schedule.spec.calendar=[{year:o,month:i,dayOfMonth:f,dayOfWeek:p,hour:k,minute:y,second:m}]),d.set(!0);const{error:t}=await v({namespace:s,body:a});t?(u.set(t),d.set(!1)):(u.set(""),setTimeout(()=>{w(b({namespace:s})),d.set(!1)},2e3))},d=h(!1),u=h("");export{u as e,I as f,d as l,S as s};
