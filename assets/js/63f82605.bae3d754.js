"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[3437],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>y});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,y=d["".concat(s,".").concat(u)]||d[u]||c[u]||o;return r?a.createElement(y,i(i({ref:t},m),{},{components:r})):a.createElement(y,i({ref:t},m))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"Getting Started",sidebar_position:1},i=void 0,l={unversionedId:"BedWarsProxy/getting-started",id:"BedWarsProxy/getting-started",title:"Getting Started",description:"Installation",source:"@site/docs/BedWarsProxy/getting-started.md",sourceDirName:"BedWarsProxy",slug:"/BedWarsProxy/getting-started",permalink:"/docs/BedWarsProxy/getting-started",draft:!1,editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWarsProxy/getting-started.md",tags:[],version:"current",lastUpdatedBy:"ajgeiss0702",lastUpdatedAt:1650139920,formattedLastUpdatedAt:"Apr 16, 2022",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1},sidebar:"bwp",next:{title:"FAQ",permalink:"/docs/BedWarsProxy/faq"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],m={toc:p},d="wrapper";function c(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("p",null,"BedWarsProxy is a plugin that can be installed on lobby/hub servers. Do not install it on arena servers."),(0,n.kt)("admonition",{title:"Note before we start",type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"BedWarsProxy only")," goes on the lobby server(s)",(0,n.kt)("br",null),"\n",(0,n.kt)("strong",{parentName:"p"},"BedWars1058 only")," goes on the arena server(s)")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Copy the BedWarsProxy.jar in the plugins folder for your lobby server and restart your server."),(0,n.kt)("li",{parentName:"ol"},"Open BedWarsProxy's config.yml and set your desired port that will be used to receive data from the arenas.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This ",(0,n.kt)("strong",{parentName:"li"},"can not")," be the same as the server's port (from server.properties)"),(0,n.kt)("li",{parentName:"ul"},"Note that the port must be open, available, and accessable from your arena server(s)"))),(0,n.kt)("li",{parentName:"ol"},"Still in BedWarsProxy's config.yml, insert your database credentials to sync bed-wars statistics from arenas.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you skip this step, BedWarsProxy will still function, however any stats you get from BedWarsProxy will be incorrect."))),(0,n.kt)("li",{parentName:"ol"},"Restart the lobby server"),(0,n.kt)("li",{parentName:"ol"},"Go on each BedWars arena server's files and open ",(0,n.kt)("inlineCode",{parentName:"li"},"plugins/BedWars1058/config.yml"),".",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Add the lobby's ip and BedWarsProxy port under ",(0,n.kt)("inlineCode",{parentName:"li"},"lobby-sockets"),"."),(0,n.kt)("li",{parentName:"ol"},"For example, if your lobby's ip is ",(0,n.kt)("inlineCode",{parentName:"li"},"51.77.158.119"),",\nand the BedWarsProxy port you set in step 2 is ",(0,n.kt)("inlineCode",{parentName:"li"},"25569"),", then this would be your config:",(0,n.kt)("br",null),(0,n.kt)("img",{src:r(6653).Z,width:"243",height:"100"})),(0,n.kt)("li",{parentName:"ol"},"Next, change ",(0,n.kt)("inlineCode",{parentName:"li"},"server-id")," to be the name of the arena server in your BungeeCord/Velocity config.\nIn the example above, the server name in the BungeeCord config is ",(0,n.kt)("inlineCode",{parentName:"li"},"bw1"),".",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"An easy way to double-check that you set this correctly is to do ",(0,n.kt)("inlineCode",{parentName:"li"},"/server <server>"),",\nreplacing ",(0,n.kt)("inlineCode",{parentName:"li"},"<server>")," with what you put in ",(0,n.kt)("inlineCode",{parentName:"li"},"server-id")))),(0,n.kt)("li",{parentName:"ol"},"Now, set the ",(0,n.kt)("inlineCode",{parentName:"li"},"lobbyServer")," option to the name of your lobby server",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"This is similar to how you set ",(0,n.kt)("inlineCode",{parentName:"li"},"server-id"),", but with your lobby server instead of the arena server."))),(0,n.kt)("li",{parentName:"ol"},"Set the ",(0,n.kt)("inlineCode",{parentName:"li"},"serverType")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"BUNGEE")),(0,n.kt)("li",{parentName:"ol"},"Restart the arena server"),(0,n.kt)("li",{parentName:"ol"},"Repeat steps i-vi for each of your arena servers"))),(0,n.kt)("li",{parentName:"ol"},"Make sure you've restarted each of the servers (after configuring them), and enjoy!")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"To open the arena selector, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"/bw gui")),(0,n.kt)("p",null,"BedWarsProxy does not have a built-in scoreboard, so you will need to use an external scoreboard plugin and the\n",(0,n.kt)("a",{parentName:"p",href:"features/placeholders"},"PlaceHolderAPI placeholders")," if you want a scoreboard."))}c.isMDXComponent=!0},6653:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);