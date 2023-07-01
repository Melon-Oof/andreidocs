"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A=a.createContext({}),o=function(e){var t=a.useContext(A),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(A.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,A=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=o(n),p=r,m=c["".concat(A,".").concat(p)]||c[p]||d[p]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var l={};for(var A in t)hasOwnProperty.call(t,A)&&(l[A]=t[A]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>E,contentTitle:()=>x,default:()=>I,frontMatter:()=>O,metadata:()=>H,toc:()=>T});var a=n(7462),r=n(7294),i=n(3905),s=n(6010),l=n(2466),A=n(6550),o=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,A.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[A,o]=g({queryString:n,groupId:a}),[u,d]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=A??u;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),d(e)}),[o,d,i]),tabValues:i}}var b=n(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:A,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=o[n].value;a!==i&&(c(t),A(a))},p=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:p,onClick:d},l,{className:(0,s.Z)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function k(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",h.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(k,(0,a.Z)({key:String(t)},e))}const N={tabItem:"tabItem_Ymn6"};function P(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(N.tabItem,a),hidden:n},t)}const O={title:"Game Signs",sidebar_position:2.7},x=void 0,H={unversionedId:"BedWarsProxy/features/game-signs",id:"BedWarsProxy/features/game-signs",title:"Game Signs",description:"Join games using signs",source:"@site/docs/BedWarsProxy/features/game-signs.md",sourceDirName:"BedWarsProxy/features",slug:"/BedWarsProxy/features/game-signs",permalink:"/docs/BedWarsProxy/features/game-signs",draft:!1,editUrl:"https://github.com/andrei1058/docs/edit/main/docs/BedWarsProxy/features/game-signs.md",tags:[],version:"current",lastUpdatedBy:"ajgeiss0702",lastUpdatedAt:1647729324,formattedLastUpdatedAt:"Mar 19, 2022",sidebarPosition:2.7,frontMatter:{title:"Game Signs",sidebar_position:2.7},sidebar:"bwp",previous:{title:"Party",permalink:"/docs/BedWarsProxy/features/party"}},E={},T=[{value:"Dynamic signs",id:"dynamic-signs",level:2},{value:"How to create",id:"how-to-create",level:3},{value:"How to edit messages",id:"how-to-edit-messages",level:3},{value:"Static signs",id:"static-signs",level:2},{value:"How to create",id:"how-to-create-1",level:3},{value:"How to edit messages",id:"how-to-edit-messages-1",level:3},{value:"Static sign placeholders",id:"static-sign-placeholders",level:3},{value:"Static sign settings",id:"static-sign-settings",level:3}],C={toc:T},D="wrapper";function I(e){let{components:t,...r}=e;return(0,i.kt)(D,(0,a.Z)({},C,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Join games using signs"),(0,i.kt)(w,{mdxType:"Tabs"},(0,i.kt)(P,{value:"dynamic",label:"Dynamic Signs",default:!0,mdxType:"TabItem"},(0,i.kt)("h2",{id:"dynamic-signs"},"Dynamic signs"),(0,i.kt)("p",null,"Dynamic signs are able to fetch available arenas on a group and then display them.\nIt is important to place the signs in the order you want them to be used."),(0,i.kt)("h3",{id:"how-to-create"},"How to create"),(0,i.kt)("p",null,"In order to create a dynamic sign, place a sign on a block and write ","[bw]"," on the first line and the target group on the second line."),(0,i.kt)("p",null,"Example:",(0,i.kt)("br",null),"\n",(0,i.kt)("img",{src:n(8031).Z,width:"192",height:"97"})),(0,i.kt)("admonition",{title:"Required Permission",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The permisison required to create signs is ",(0,i.kt)("inlineCode",{parentName:"p"},"bw.setup"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"CROUCH (SHIFT) + CLICK to remove a sign")),(0,i.kt)("h3",{id:"how-to-edit-messages"},"How to edit messages"),(0,i.kt)("p",null,"The sign layout can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/BedWarsProxy/Languages")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"dynamic-sign-content"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"sign-dynamic-content:\n  waiting:\n  - '&4&l[BedWars-{id}]'\n  - '&9{group}'\n  - '&1{map}'\n  - '&5{current}/{max}'\n  starting:\n  - '&4&l[BedWars-{id}]'\n  - '&9{group}'\n  - '&1{map}'\n  - '&5{current}/{max}'\n  searching:\n  - '&4\u2586\u2586\u2586\u2586\u2586\u2586'\n  - '&1&lBOOTING'\n  - ''\n  - '&4\u2586\u2586\u2586\u2586\u2586\u2586'\n  no-games:\n  - ''\n  - '&8&lWaiting for'\n  - '&7&lopen lobby'\n  - ''\n"))),(0,i.kt)(P,{value:"static",label:"Static signs",mdxType:"TabItem"},(0,i.kt)("h2",{id:"static-signs"},"Static signs"),(0,i.kt)("p",null,"Static signs are only able to fetch available arenas with the given name.\nNote that with autoscale, there may be more than one arena with the same name."),(0,i.kt)("h3",{id:"how-to-create-1"},"How to create"),(0,i.kt)("p",null,"In order to create a static sign, place a sign on a block and write ","[bw]"," on the first line, the arena group on the second line and the arena technical name on the third line."),(0,i.kt)("p",null,"Example:",(0,i.kt)("br",null),"\n",(0,i.kt)("img",{src:n(7803).Z,width:"191",height:"97"})),(0,i.kt)("admonition",{title:"Required Permission",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The permisison required to create signs is ",(0,i.kt)("inlineCode",{parentName:"p"},"bw.setup"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"CROUCH (SHIFT) + CLICK to remove a sign")),(0,i.kt)("h3",{id:"how-to-edit-messages-1"},"How to edit messages"),(0,i.kt)("p",null,"Sign layout can be modified in ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/BedWarsProxy/Languages")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"sign-static-content"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"sign-static-content:\n  waiting:\n  - '&4&l[BedWars-{id}]'\n  - '&9{group}'\n  - '&1{map}'\n  - '&5{current}/{max}'\n  starting:\n  - '&4&l[BedWars-{id}]'\n  - '&9{group}'\n  - '&1{map}'\n  - '&5{current}/{max}'\n  playing:\n  - '&4&l[BedWars-{id}]'\n  - '&9{group}'\n  - '&1{map}'\n  - '{status}'\n  searching:\n  - '&4\u2586\u2586\u2586\u2586\u2586\u2586'\n  - '&1&lBOOTING'\n  - ''\n  - '&4\u2586\u2586\u2586\u2586\u2586\u2586'\n  no-games:\n  - ''\n  - '&8&lWaiting for'\n  - '&7&lopen lobby'\n  - ''\n")),(0,i.kt)("h3",{id:"static-sign-placeholders"},"Static sign placeholders"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{id}")),(0,i.kt)("td",{parentName:"tr",align:null},"Server ID")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{group}")),(0,i.kt)("td",{parentName:"tr",align:null},"Arena display group in the player's language")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{map}")),(0,i.kt)("td",{parentName:"tr",align:null},"Map display name in the player's language")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{current}")),(0,i.kt)("td",{parentName:"tr",align:null},"Current players on that map")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{max}")),(0,i.kt)("td",{parentName:"tr",align:null},"Max player for that map")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{status}")),(0,i.kt)("td",{parentName:"tr",align:null},"Game status in the player's language")))),(0,i.kt)("h3",{id:"static-sign-settings"},"Static sign settings"),(0,i.kt)("p",null,"Static signs settings can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/BedWarsProxy/signs.yml")," under ",(0,i.kt)("inlineCode",{parentName:"p"},"signs-settings.static-signs"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"signs-settings:\n  static-signs:\n    #Show in-game arenas?\n    show-playing: false\n")))))}I.isMDXComponent=!0},8031:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},7803:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAABhCAYAAACH3nBZAAAFb0lEQVR4nO3d3XLaRhjGcW4h45pJJYEuJY1xDnvQZBzfQ9vEwXFvoPkyGHoLOWvTxr5GekAXl4XdB/GyQWb/B8+MxYc+9v0to9FK606vKme9qpz1ej1T6rrea6qqSpqU+14URTSWuqjjemj13mVNO+AH/0Oq987xf37/Y9LcTc+3jlr37fRlNNZ9v3l7GsyX0fOk+Tp5uXVS19RSF2vN7/44j0Z9H/zgBz/4wQ9+8IMf/OAHP/jBD/6DxO+uHIEf/OAHP/izxH/95iSav8cv4hltn9vpeTTqQL6MXojsDmOn01kbty/+8q6jtr+rTr1Zx1btHo615tKV8Ap+8IMf/M3xu+UQzlT4d7k98IMf/Dnj73aPwZ8Ivzo9UXit74Mf/OAH/1LcnangT4B/U+zg3zP+fgl+8GeMXw0aqJWpQYv4waYdpLIi+Do5W8Rh+/9rlvebLjfdXjzxQTKFX9XNktQ1Bz/4wQ9+8IMf/OAHP/gVfj/q/U0Rb7t+8DfL4n7+8vvvwA/+XPEfgX9D/IcV8IMf/Hnjf/fLE1Pe//pDNB9ebZ/x5SAahVfl08XTaK4vTsIRg4Mq06tTUyaGqOP+9DqejyqvwlE1Hw0Hpqh2Bz/4wQ9+8GeLv6664Ac/+MG/X/zu0iX40+JfDHKBH/zgBz/4wQ9+8GeCv3isB7ksk07dTc9n4+EgmM9iQEINiFgHa/5SuV6Nuh3hn8nZPDfzBD93c7YU/3W/LeT2GsQ6CKYS+8Gy1lx5Uw+7gB/84Af/5vgdNresgIWQh7CH8LvX/bZZ2Q74wb+vX37wgx/84Af/oeIPnfb4CMHfcvx11QU/+PPFr3bGmtiBWOfdSb3v667Db3r1xsfrJ7TN0PtN17PP2Goej3XfwA/+Ftcc/K3D7yd0OhO6Tp9TwA/+bAN+8GebNuMvy3JWluWs0yuPW94Q4H+IAT/4sw34wZ9tHgx+6/z7atAh1hD7LlJsEMuen6L5U0Tte6zjmfddDP6pQa421xz84Ad/H/zgBz/4wZ8H/qUpynPEH7pVwEew7r3QZ9d9Z/n7y/jV7RJNb3NYd9PcpscJfvCDH/yHj98lBHfdctNOEMKuTnsUere87hZpH7/qoOAHP/hzxF8+PpLznKh5Uizz9nwUubkcxCPm5ZkEok4L3Pw2bnndvDpuefTmZClq3ePhyX9ZfrDn/v358vS3Z0tZbN+9drWc+b7d/93pdII19Y9zJZG2m7w9tc3rI2oee/hpbJzTZzQcgB/84M8O/6Lo7jWv6DH8oRnWfPRu+R75PCH8Pnrwp8VfFMWsKArwgx/82eC3nPYo/E1Pe9TnVrB7nWDlc15HAL/AX1dd8IMf/DnhD532+Ind0uyj9+Of9qwmXmQf/UquwlE1lTM5gx/84D9w/KknrYoNOMQGQ9owIBKLukUghnN69Uw+DCPTYJKqbz1pVZtrDn7wgx/84M8Wf/kNJqptc0OAH/zgBz/4wQ9+8IMf/OAHP/gPFH+vOJYDItbOcRuNrSFUEaz/nKLNnSsWtW41iGXFr+pqqbnyph7OAj/4s8Vf1/Wsrmvwgx/84Ac/+MEPfvCDH/yHjr/Y4Eku8IP/YPHvs8DWudpVQ1qLGOsYGtAm19PD0R0/3br3WXPrPFHqxxr84G9tzcEPfvCnxn989KjVDQF+8CfD3+2m/59c4Ad/K/FXVdHqhgA/+MEPfvCDH/zg3yH+339+Eo11Xh9Lxpe2qHl/1Pwz0VzYojqPSnT9luN6/VS2m6UmKb2MhgPpFfzgzxb/4r8xgh/84Ac/+MEPfvCDH/zgBz/4wQ9+8IP/0PDfp4qm3++3Omr/3UGniJsOI5TYd9V+p6pJm2qdsjahY/wXYzuaPfjLKv0AAAAASUVORK5CYII="}}]);