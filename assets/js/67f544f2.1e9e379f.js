"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8267],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),v=a,f=d["".concat(l,".").concat(v)]||d[v]||u[v]||o;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=v;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},5058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Events",title:"Events",sidebar_position:5.3},s=void 0,i={unversionedId:"BedWars1058/developers/events",id:"BedWars1058/developers/events",title:"Events",description:"BedWars1058 is providing A LOT of events. You can see them on the JavaDocs.",source:"@site/docs/BedWars1058/developers/events.md",sourceDirName:"BedWars1058/developers",slug:"/BedWars1058/developers/events",permalink:"/docs/BedWars1058/developers/events",draft:!1,editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWars1058/developers/events.md",tags:[],version:"current",lastUpdatedBy:"rammlebubble",lastUpdatedAt:1648781219,formattedLastUpdatedAt:"Apr 1, 2022",sidebarPosition:5.3,frontMatter:{sidebar_label:"Events",title:"Events",sidebar_position:5.3},sidebar:"bw1058",previous:{title:"Maven",permalink:"/docs/BedWars1058/developers/maven"},next:{title:"Creating Commands",permalink:"/docs/BedWars1058/developers/commands"}},l={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"BedWars1058 is providing A LOT of events. You can see them on the ",(0,a.kt)("a",{parentName:"p",href:"https://javadocs.andrei1058.dev/BedWars1058"},"JavaDocs"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@EventHandler\npublic void onEnemyEnter(EnemyBaseEnterEvent e) {\n  //stuff\n}\n\n@EventHandler\npublic void onTeamAssign(TeamAssignEvent e) {\n  //stuff\n}\n\n@EventHandler\npublic void onArenaJoin(PlayerJoinArenaEvent e) {\n  //stuff\n}\n")))}u.isMDXComponent=!0}}]);