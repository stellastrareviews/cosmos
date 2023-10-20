"use strict";(self.webpackChunknewdocs_openc_3_com=self.webpackChunknewdocs_openc_3_com||[]).push([[1319],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=s(a),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(k,l(l({ref:e},m),{},{components:a})):n.createElement(k,l({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6027:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"Performance"},l=void 0,o={unversionedId:"guides/performance",id:"guides/performance",title:"Performance",description:"The COSMOS architecture was created with scalability in mind. Our goal is to support an unlimited number of connections and use cloud technologies to scale. Only COSMOS Enterprise Edition supports Kubernetes and the various cloud platforms which allow this level of scalability. While true scalability is only achieved in COSMOS Enterprise, both Open Source and Enterprise have various levels of observability and configuration settings which can affect performance.",source:"@site/docs/guides/performance.md",sourceDirName:"guides",slug:"/guides/performance",permalink:"/docs/guides/performance",draft:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/guides/performance.md",tags:[],version:"current",frontMatter:{title:"Performance"},sidebar:"defaultSidebar",previous:{title:"Monitoring",permalink:"/docs/guides/monitoring"},next:{title:"Raspberry Pi",permalink:"/docs/guides/raspberrypi"}},p={},s=[{value:"Memory",id:"memory",level:2},{value:"CPU",id:"cpu",level:2},{value:"Performance Comparison",id:"performance-comparison",level:2}],m={toc:s},d="wrapper";function c(t){let{components:e,...a}=t;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The COSMOS architecture was created with scalability in mind. Our goal is to support an unlimited number of connections and use cloud technologies to scale. Only ",(0,r.kt)("a",{parentName:"p",href:"https://openc3.com/enterprise"},"COSMOS Enterprise Edition")," supports Kubernetes and the various cloud platforms which allow this level of scalability. While true scalability is only achieved in COSMOS Enterprise, both Open Source and Enterprise have various levels of observability and configuration settings which can affect performance."),(0,r.kt)("h1",{id:"cosmos-hardware-requirements"},"COSMOS Hardware Requirements"),(0,r.kt)("h2",{id:"memory"},"Memory"),(0,r.kt)("p",null,"COSMOS can run on a Raspberry Pi up to a Kubernetes cluster in the cloud. On all platforms the key performance factor is the number and complexity of the targets and their defined packets. Targets can vary from simple targets taking 100 MB of RAM to complex targets taking 400 MB. The base COSMOS containers require about 800 MB of RAM. A good rule of thumb is to average about 300 MB of RAM for targets. As an example data point, the COSMOS Demo has 4 targets, two complex (INST & INST2) and two relatively simple (EXAMPLE & TEMPLATED), and requires 800 MB of RAM (on top of the 800 MB of base container RAM)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Base RAM MB Calculator = 800 + (num targets) ","*"," 300")),(0,r.kt)("p",null,"In addition, the Redis streams contain the last 10 min of both raw and decommutated data from all targets. Thus you must wait ~15min to truly see what the high water memory mark will be. In the COSMOS Demo the INST & INST2 targets are fairly simple with four 1Hz packet of ~15 items and one 10Hz packet with 20 items. This only causes 50 MiB of redis RAM usage according to ",(0,r.kt)("inlineCode",{parentName:"p"},"docker stats"),". Installing the COSMOS ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenC3/openc3-cosmos-load-sim"},"LoadSim")," with 10 packets with 1000 items each at 10Hz pushed the redis memory usage to about 350 MiB."),(0,r.kt)("h2",{id:"cpu"},"CPU"),(0,r.kt)("p",null,"Another consideration is the CPU performance. In the Open Source Edition, by default COSMOS spawns off 2 microservices per target. One combines packet logging and decommutation of the data and the other performs data reduction. In COSMOS Enterprise Edition on Kubernetes, each process becomes an independent container that is deployed on the cluster allowing horizontal scaling."),(0,r.kt)("p",null,"The COSMOS command and telemetry API and script running API servers should have a dedicated core while targets can generally share cores. It's hard to provide a general rule of thumb with the wide variety of architectures, clock speeds, and core counts. The best practice is to install COSMOS with the expected load and do some monitoring with ",(0,r.kt)("inlineCode",{parentName:"p"},"htop")," to visualize the load on the various cores. Any time a single core gets overloaded (100%) this is a concern and system slowdown can occur."),(0,r.kt)("h2",{id:"performance-comparison"},"Performance Comparison"),(0,r.kt)("p",null,"Performance characterization was performed in Azure on a Standard D4s v5 (4 vcpus, 16 GiB memory) chosen to allow virtualization per ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/vm-vdi/#turn-on-nested-virtualization-on-microsoft-hyper-v"},"Docker"),". COSMOS ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenC3/cosmos-enterprise/releases/tag/v5.9.1"},"5.9.1")," Enterprise Edition was installed on both Windows 11 Pro ",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," and Ubuntu 22. Note: Enterprise Edition was not utilizing Kubernetes, just Docker. Testing involved starting the COSMOS Demo, connecting all targets (EXAMPLE, INST, INST2, TEMPLATED), opening the following TlmViewer screens (ADCS, ARRAY, BLOCK, COMMANDING, HS, LATEST, LIMITS, OTHER, PARAMS, SIMPLE, TABS) and creating two TlmGrapher graphs consisting of INST HEALTH_STATUS TEMP","[1-4]"," and INST ADCS POS","[X,Y,Z]"," and INST ADCS VEL","[X,Y,Z]",". This was allowed to run for 1hr and results were collected using ",(0,r.kt)("inlineCode",{parentName:"p"},"htop"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Platform"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Core CPU %"),(0,r.kt)("th",{parentName:"tr",align:"left"},"RAM"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Windows 11 Pro"),(0,r.kt)("td",{parentName:"tr",align:"left"},"12% 12% 10% 10%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.9G / 7.7G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Headless Ubuntu 22"),(0,r.kt)("td",{parentName:"tr",align:"left"},"7% 7% 8% 6%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.2G / 15.6G")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows was only allocated 8 GB of RAM due to the ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/windows/wsl/wsl-config#configuration-setting-for-wslconfig"},".wslconfig")," settings."),(0,r.kt)("li",{parentName:"ul"},"Since Ubuntu was running headless, the screens and graphs were brought up on another machine.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker stats")," was also run to show individual container cpu and memory usage:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"NAME"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Windows CPU %"),(0,r.kt)("th",{parentName:"tr",align:null},"Ubuntu CPU %"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Windows MEM"),(0,r.kt)("th",{parentName:"tr",align:null},"Ubuntu MEM"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-traefik-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.16%"),(0,r.kt)("td",{parentName:"tr",align:null},"1.32%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"43.54MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"51.38MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-cosmos-cmd-tlm-api-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10.16%"),(0,r.kt)("td",{parentName:"tr",align:null},"6.14%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"401.6MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"392MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-keycloak-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.17%"),(0,r.kt)("td",{parentName:"tr",align:null},"0.13%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"476.8MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"476.8MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-operator-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"21.27%"),(0,r.kt)("td",{parentName:"tr",align:null},"13.91%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.214GiB"),(0,r.kt)("td",{parentName:"tr",align:null},"1.207GiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-cosmos-script-runner-api-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.01%"),(0,r.kt)("td",{parentName:"tr",align:null},"0.01%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"127.4MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"117.1MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-metrics-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.01%"),(0,r.kt)("td",{parentName:"tr",align:null},"0.00%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"105.2MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"83.87MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-redis-ephemeral-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.05%"),(0,r.kt)("td",{parentName:"tr",align:null},"1.89%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"46.22MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"69.84MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-redis-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.56%"),(0,r.kt)("td",{parentName:"tr",align:null},"0.72%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"12.82MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"9.484MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-minio-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.01%"),(0,r.kt)("td",{parentName:"tr",align:null},"0.00%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"152.9MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"169.8MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-postgresql-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.00%"),(0,r.kt)("td",{parentName:"tr",align:null},"0.39%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"37.33MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"41.02MiB")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"memory profiles are similar between the two platforms"),(0,r.kt)("li",{parentName:"ul"},"redis-ephemeral isn't using much memory on the base Demo with its small packets")),(0,r.kt)("p",null,"At this point the COSMOS ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenC3/openc3-cosmos-load-sim"},"LoadSim")," was installed with default settings which creates 10 packets with 1000 items each at 10Hz (110kB/s). After a 1 hr soak, htop now indicated:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Platform"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Core CPU %"),(0,r.kt)("th",{parentName:"tr",align:"left"},"RAM"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Windows 11 Pro"),(0,r.kt)("td",{parentName:"tr",align:"left"},"40% 35% 39% 42%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.64G / 7.7G")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Headless Ubuntu 22"),(0,r.kt)("td",{parentName:"tr",align:"left"},"17% 20% 16% 18%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3.74G / 15.6G")))),(0,r.kt)("p",null,"The larger packets and data rate of the LoadSim target caused both platforms to dramatically increase CPU utilization but the Linux machine stays quite performant."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"docker stats")," was also run to show individual container cpu and memory usage:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"NAME"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Windows CPU %"),(0,r.kt)("th",{parentName:"tr",align:null},"Ubuntu CPU %"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Windows MEM"),(0,r.kt)("th",{parentName:"tr",align:null},"Ubuntu MEM"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-traefik-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4.09%"),(0,r.kt)("td",{parentName:"tr",align:null},"0.01%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"44.3MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"0.34MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-cosmos-cmd-tlm-api-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"17.78%"),(0,r.kt)("td",{parentName:"tr",align:null},"6.18%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"407.9MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"405.8MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-keycloak-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.20%"),(0,r.kt)("td",{parentName:"tr",align:null},"0.12%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"480.2MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"481.5MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-operator-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"221.15%"),(0,r.kt)("td",{parentName:"tr",align:null},"66.72%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1.6GiB"),(0,r.kt)("td",{parentName:"tr",align:null},"1.512GiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-cosmos-script-runner-api-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.01%"),(0,r.kt)("td",{parentName:"tr",align:null},"0.01%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"136.6MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"127.5MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-metrics-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.01%"),(0,r.kt)("td",{parentName:"tr",align:null},"0.01%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"106.3MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"84.87MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-redis-ephemeral-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"19.63%"),(0,r.kt)("td",{parentName:"tr",align:null},"3.91%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"333.8MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"370.8MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-redis-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"7.42%"),(0,r.kt)("td",{parentName:"tr",align:null},"1.49%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"15.87MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"11.81MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-minio-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.10%"),(0,r.kt)("td",{parentName:"tr",align:null},"0.02%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"167.8MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"179.2MiB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"cosmos-enterprise-project-openc3-postgresql-1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.00%"),(0,r.kt)("td",{parentName:"tr",align:null},"0.00%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"35.4MiB"),(0,r.kt)("td",{parentName:"tr",align:null},"42.93MiB")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"memory profiles are similar between the two platforms"),(0,r.kt)("li",{parentName:"ul"},"redis-ephemeral is now using much more RAM as it is storing the large LoadSim packets"),(0,r.kt)("li",{parentName:"ul"},"Windows is using much more CPU power running the operator, cmd-tlm, and redis")),(0,r.kt)("h1",{id:"conclusions"},"Conclusions"),(0,r.kt)("p",null,"While it is easy to run COSMOS on any Docker platform, increasing the number and complexity of the targets requires choosing the correct hardware. Sizing can be approximated but the best solution is to install representative targets and use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker stats")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"htop")," to judge the CPU and memory pressure on the given hardware."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://openc3.com/enterprise"},"COSMOS Enterprise Edition")," on Kubernetes helps to eliminate the hardware sizing issue by scaling the cluster to meet the needs of the system. Check out ",(0,r.kt)("a",{parentName:"p",href:"https://openc3.com/news/scaling"},"this recent talk")," Ryan gave at GSAW showing how we scaled to over 160 satellites on a 4 node kubernetes cluster on EKS."),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("p",{parentName:"li"},"Full specs of the Windows Platform:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Windows 11 Pro\nDocker Desktop 4.22.0\nWSL version: 1.2.5.0\nKernel version: 5.15.90.1\nWSLg version: 1.0.51\nMSRDC version: 1.2.3770\nDirect3D version: 1.608.2-61064218\nDXCore version: 10.0.25131.1002-220531-1700.rs-onecore-base2-hyp\nWindows version: 10.0.22621.2134\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#fnref-1",className:"footnote-backref"},"\u21a9"))))))}c.isMDXComponent=!0}}]);