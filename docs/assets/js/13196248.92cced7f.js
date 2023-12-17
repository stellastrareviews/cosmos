"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[5532],{2296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var i=n(5893),a=n(1151);const s={title:"Calendar (Enterprise)"},l=void 0,r={id:"tools/calendar",title:"Calendar (Enterprise)",description:"Introduction",source:"@site/docs/tools/calendar.md",sourceDirName:"tools",slug:"/tools/calendar",permalink:"/docs/tools/calendar",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/tools/calendar.md",tags:[],version:"current",frontMatter:{title:"Calendar (Enterprise)"},sidebar:"defaultSidebar",previous:{title:"Bucket Explorer",permalink:"/docs/tools/bucket-explorer"},next:{title:"Command Sender",permalink:"/docs/tools/cmd-sender"}},d={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Types of Events",id:"types-of-events",level:2},{value:"Metadata",id:"metadata",level:3},{value:"Narrative",id:"narrative",level:3},{value:"Activity",id:"activity",level:3},{value:"Adding Timelines",id:"adding-timelines",level:3},{value:"Timeline Implementation Details",id:"timeline-implementation-details",level:3}];function c(e){const t={h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"Calendar visualizes metadata, narrative, and timeline information in one easy to understand place. Timelines allow for the simple execution of commands and scripts based on future dates and times."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Calendar",src:n(6991).Z+"",width:"1102",height:"763"})}),"\n",(0,i.jsx)(t.p,{children:"Calendar events can also be viewed in a list format which supports pagination for listing both past and future events."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"List View",src:n(2253).Z+"",width:"1082",height:"642"})}),"\n",(0,i.jsx)(t.h2,{id:"types-of-events",children:"Types of Events"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Metadata"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Narrative"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Activity"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"metadata",children:"Metadata"}),"\n",(0,i.jsx)(t.p,{children:"Metadata allows you to record arbitrary data into the COSMOS system. For example, you could ask the user for inputs which fall outside the available target telemetry including user defined IDs, environmental factors, procedural steps, etc. This allows for searching metadata based on these fields and correlating the related telemetry data."}),"\n",(0,i.jsx)(t.h3,{id:"narrative",children:"Narrative"}),"\n",(0,i.jsx)(t.p,{children:"A simple way to record events on the calendar, for example a test window or anything else..."}),"\n",(0,i.jsx)(t.h3,{id:"activity",children:"Activity"}),"\n",(0,i.jsx)(t.p,{children:"Scheduled on a timeline these can run single commands or run a script."}),"\n",(0,i.jsx)(t.h3,{id:"adding-timelines",children:"Adding Timelines"}),"\n",(0,i.jsx)(t.p,{children:"Adding a Timeline to COSMOS."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Each timeline consists of several threads so be careful of your compute resources you have as you can overwhelm COSMOS with lots of these."}),"\n",(0,i.jsx)(t.li,{children:"Note you can not have overlapping activities on a single calendar."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"timeline-implementation-details",children:"Timeline Implementation Details"}),"\n",(0,i.jsx)(t.p,{children:"When a user creates a timeline, a new timeline microservice starts. The timeline microservice is the main thread of execution for the timeline. This starts a scheduler manager thread. The scheduler manger thread contains a thread pool that hosts more then one thread to run the activity. The scheduler manger will evaluate the schedule and based on the start time of the activity it will add the activity to the queue."}),"\n",(0,i.jsx)(t.p,{children:'The main thread will block on the web socket to listen to request changes to the timeline, these could be adding, removing, or updating activities. The main thread will make the changes to the in memory schedule if these changes are within the hour of the current time. When the web socket gets an update it has an action lookup table. These actions are "created", "updated", "deleted", ect... Some actions require updating the schedule from the database to ensure the schedule and the database are always in sync.'}),"\n",(0,i.jsx)(t.p,{children:"The schedule thread checks every second to make sure if a task can be run. If the start time is equal or less then the last 15 seconds it will then check the previously queued jobs list in the schedule. If the activity has not been queued and is not fulfilled the activity will be queued, this adds an event to the activity but is not saved to the database."}),"\n",(0,i.jsx)(t.p,{children:"The workers block on the queue until an activity is placed on the queue. Once a job is pulled from the queue they check the type and run the activity. The thread will mark the activity fulfillment true and update the database record with the complete. If the worker gets an error while trying to run the task the activity will NOT be fulfilled and record the error in the database."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Timeline Lifecycle",src:n(2391).Z+"",width:"1065",height:"514"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6991:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/calendar-9fbd635cf3df1ba684bb0c1ebc4f6ad34991efc582e9fd07820c8b74cbb66aa1.png"},2253:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/list_view-926f42bc1e43283c61616b0cd8fd630cad8e15c9b7298acd98536842472e673b.png"},2391:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/timeline_lifecycle-0bd916dee06bf67936b043abfdbc4d5fdec7cc5a32a889ee6c05e9faf74f4c6a.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var i=n(7294);const a={},s=i.createContext(a);function l(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);