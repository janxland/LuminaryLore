(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[938],{6966:function(e,t,a){Promise.resolve().then(a.bind(a,8964))},8964:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return P}});var n=a(9268),l=a(5032),r=a(3109),i=a(5810),s=a(3894),c=a(2619),u=a(6880),o=a(8119);let d=!0;function h(){let{t:e}=(0,s.$)("settings"),{enqueueSnackbar:t}=(0,o.Ds)();return d&&(t("欢迎来到Lumos",{variant:"info"}),d=!1),(0,n.jsxs)("div",{className:"prose dark:text-white",children:[(0,n.jsx)(c.Z,{}),(0,n.jsxs)("p",{children:[e("about.cuurent-version")," ",u.i8]}),(0,n.jsxs)("p",{children:[e("about.open-source"),(0,n.jsx)("a",{href:"https://github.com/janxland/LuminaryLore",target:"_blank",rel:"noreferrer",children:"Github"})]}),(0,n.jsxs)("p",{children:["本项目灵感来自"," ",(0,n.jsx)("a",{href:"https://tachiyomi.org/",target:"_blank",rel:"noopener noreferrer",children:"tachiyomi"})]}),(0,n.jsx)("p",{children:"✨支持页面样式、插件、仓库定制"}),(0,n.jsx)("p",{children:"\uD83C\uDF83支持本地部署"}),(0,n.jsx)("p",{children:"\uD83E\uDDF5支持在云服务器部署"}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"tencent://AddContact/?fromId=50&fromSubId=1&subcmd=all&uin=983341575",target:"_blank",children:"点击联系我"})}),(0,n.jsx)("a",{href:"https://qr.alipay.com/fkx10350np9rne4xxo5zz80",target:"_blank",children:(0,n.jsx)("img",{src:"https://mybox-1257251314.cos.ap-chengdu.myqcloud.com/pic-upload/code1000X1000.png",width:"300px",alt:"赞赏一下吧~~~"})})]})}var x=a(9968),g=a(2874),m=a(8225),p=a(1816),b=a(9308),f=a(6006),v=a(2458),j=a(1750);let y=(0,j.Z)("Undo",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);var k=a(9791);function w(e){let{children:t,className:a}=e;return(0,n.jsx)("h1",{className:(0,k.Z)("text-1xl mb-3 font-bold",a),children:t})}let N=(0,b.Pi)(e=>{let{title:t,bindKey:a}=e,{settingsStore:l}=(0,g.Yh)(),[r,i]=(0,f.useState)("");(0,f.useEffect)(()=>{i(l.getSetting(a))},[l.getSetting(a)]);let s=e=>{l.setSetting(a,e.target.value)};return(0,n.jsxs)("div",{children:[(0,n.jsxs)(w,{className:"flex",children:[t,l.envItems.get(a)===r?null:(0,n.jsxs)("span",{className:"ml-2 cursor-pointer",children:[" ",(0,n.jsx)(y,{width:20,onClick:()=>{l.resetSetting(a)}})]})]}),(0,n.jsx)("input",{className:"mr-3 mb-3 w-full rounded-3xl border pl-3 pt-2 pb-2  pr-3 text-sm dark:bg-black md:w-96",type:"text",value:r||"",onChange:s})]})});function Z(){let{historyStore:e}=(0,g.Yh)(),{t}=(0,s.$)("settings");return(0,n.jsxs)("div",{children:[(0,n.jsx)(w,{children:t("data.sync")}),(0,n.jsx)(C,{}),(0,n.jsx)(w,{children:t("data.storage")}),(0,n.jsx)(S,{title:t("data.history"),count:e.history.length,clearCallBack:()=>{e.clearHistory()}}),(0,n.jsx)(S,{title:t("data.collection"),count:m.c8.getAllLove,clearCallBack:m.c8.deleteAllLove})]})}function S(e){let[t,a]=(0,f.useState)(0),{t:l}=(0,s.$)("settings");return(0,f.useEffect)(()=>{if("number"==typeof e.count){a(e.count);return}e.count().then(e=>{a(e.length)})},[]),(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsxs)("span",{className:"mr-3",children:[e.title,(0,n.jsx)("span",{className:"rounded-lg bg-black  pl-2 pr-2 text-white",children:t})," "]}),(0,n.jsx)(x.Z,{onClick:()=>{e.clearCallBack(),a(0)},children:l("data.clear")})]})}let C=(0,b.Pi)(()=>{let{syncStore:e,historyStore:t,extensionStore:a,settingsStore:l}=(0,g.Yh)(),[r,i]=(0,f.useState)(),[c,u]=(0,f.useState)(),[d,h]=(0,f.useState)(!1),{t:b}=(0,s.$)("settings");(0,f.useEffect)(()=>{(async()=>{try{h(!0);let t=await e.pull();i(null==t?void 0:t.updatedAt),u(null==t?void 0:t.rawUrl)}catch(e){(0,o.yv)(b("data.get-backup-failed")+e,{variant:"error"})}finally{h(!1)}})()},[l.getSetting("githubToken")]);let j=async()=>{try{h(!0),t.init();let a=await (0,m.u1)();a[0].map(e=>{"bangumi"===e.type&&(e.cover="")}),a[3].map(e=>{"githubToken"===e.key&&(e.value="")});let{rawUrl:n,updatedAt:l}=await e.push(a);i(l),(0,o.yv)(b("data.backup-success"),{variant:"success"}),u(n)}catch(e){(0,o.yv)(b("data.backup-failed")+e,{variant:"error"})}finally{h(!1)}},y=async()=>{try{if(h(!0),!c){(0,o.yv)(b("data.please-backup-first"),{variant:"error"});return}let e=await (0,v.ZP)(c);await Promise.all(e[0].map(async e=>{if("bangumi"===e.type){var t;e.cover=(null===(t=await m.Zv.getHistory(e.url,e.package))||void 0===t?void 0:t.cover)||""}})),e[3].map(e=>{"githubToken"===e.key&&(e.value=l.getSetting("githubToken"))}),await m.db.delete(),await m.db.open(),await (0,m.dk)(e),await t.init(),await a.init(),await l.init(),(0,o.yv)(b("data.restore-success"),{variant:"success"})}catch(e){(0,o.yv)(b("data.restore-failed")+e,{variant:"error"})}finally{h(!1)}};return(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsx)(N,{title:"Github Token",bindKey:"githubToken"}),l.getSetting("githubToken")&&(0,n.jsxs)("div",{className:"relative w-full items-center overflow-hidden rounded-lg border p-2 md:w-96",children:[(0,n.jsxs)("div",{className:" flex items-center justify-between",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:b("data.storage-time")}),(0,n.jsx)("p",{children:r})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(x.Z,{className:"mr-2",onClick:j,children:b("data.backup")}),(0,n.jsx)(x.Z,{onClick:y,children:b("data.restore")})]})]}),d&&(0,n.jsx)("div",{className:"absolute left-0 right-0 bottom-0 top-0",children:(0,n.jsx)("div",{className:"flex h-full w-full items-center justify-center bg-black bg-opacity-50",children:(0,n.jsx)(p.Z,{className:"animate-spin"})})})]})]})});var E=a(3636),_=a(5210);function T(e){let{title:t,...a}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)(w,{children:t}),(0,n.jsx)(_.Z,{...a})]})}function D(){let{t:e,i18n:t}=(0,s.$)("settings"),{settingsStore:a}=(0,g.Yh)(),l=[];E.Mj.forEach(e=>{l.push({value:e,label:e})});let r=e=>{a.setSetting("language",e.target.value),t.changeLanguage(e.target.value)},i=[{value:"auto",label:e("general.theme.auto")},{value:"light",label:e("general.theme.light")},{value:"dark",label:e("general.theme.dark")}],c=e=>{a.setSetting("theme",e.target.value)};return(0,n.jsxs)("div",{children:[(0,n.jsx)(N,{title:e("general.miru-proxy"),bindKey:"miruProxy"}),(0,n.jsx)(N,{title:e("general.repository"),bindKey:"miruRepo"}),(0,n.jsx)(N,{title:e("general.tmdb-key"),bindKey:"TMDBKey"}),(0,n.jsx)(T,{title:e("general.language"),onChange:r,options:l,selected:t.language}),(0,n.jsx)(T,{title:e("general.theme.title"),onChange:c,options:i,selected:a.getSetting("theme")})]})}var L=a(7356);function P(){let{t:e}=(0,s.$)("settings");return(0,f.useEffect)(()=>{(0,L.Z)(e("title"))},[]),(0,n.jsx)(r.default,{children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)("h1",{className:"mb-6 text-3xl font-bold",children:e("title")}),(0,n.jsx)(i.Z,{className:"mb-6",tabs:[{title:e("general.title"),content:(0,n.jsx)(D,{})},{title:e("data.title"),content:(0,n.jsx)(Z,{})},{title:e("about.title"),content:(0,n.jsx)(h,{})}]})]})})}},5032:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(9268),l=a(9791);function r(e){return(0,n.jsx)("div",{...e,className:(0,l.Z)("pl-5 pt-5 pr-5 md:pl-10 md:pr-10 md:pt-10",e.className),children:e.children})}},3109:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var n=a(9268),l=a(3039);function r(e){return(0,n.jsx)(l.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:0},children:e.children})}},2619:function(e,t,a){"use strict";var n=a(9268),l=a(2874),r=a(9308),i=a(8934);let s=(0,r.Pi)(()=>{let{settingsStore:e}=(0,l.Yh)();return(0,n.jsx)(i.Z,{width:80,color:"dark"===e.getSetting("theme")?"#fff":"#333"})});t.Z=s},5810:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(9268),l=a(9791),r=a(6006);function i(e){var t;let[a,i]=(0,r.useState)(0),s=t=>{var a;i(t),null===(a=e.onChange)||void 0===a||a.call(e,t)};(0,r.useEffect)(()=>{void 0!==e.index&&i(Number(e.index))},[e.index,e.tabs]);let c=e.tabs.map((e,t)=>(0,n.jsx)("button",{onClick:()=>s(t),className:(0,l.Z)("mr-2 break-keep rounded-full border pl-3 pr-3 pt-2 pb-2 text-sm ","".concat(a===t?"bg-black text-white dark:bg-black ":"bg-white dark:bg-zinc-700")),children:e.title},t));return(0,n.jsx)("div",{className:(0,l.Z)("overflow-x-scroll scrollbar-none"),children:e.tabs.length>0&&(0,n.jsxs)(n.Fragment,{children:[e.tabs.length>1&&(0,n.jsx)("div",{className:(0,l.Z)("flex overflow-auto scrollbar-none mb-3",e.className),children:c}),(0,n.jsx)("div",{children:null===(t=e.tabs[a])||void 0===t?void 0:t.content})]})})}},9968:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var n=a(9268),l=a(9791),r=a(1816);function i(e){return(0,n.jsx)("button",{...e,className:(0,l.W)("rounded-3xl border bg-black pl-4 pr-4 pt-2 pb-2 text-sm text-white focus:ring-2 focus:ring-gray-500",e.className),children:e.loading&&(0,n.jsx)(r.Z,{className:"animate-spin"})||e.children})}},5210:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(9268),l=a(9791);function r(e){let{options:t,selected:a,onChange:r,className:i}=e;return(0,n.jsx)("select",{onChange:r,defaultValue:a,className:(0,l.Z)("mr-3 mb-3 w-full rounded-3xl border pl-3 pt-2 pb-2  pr-3 text-sm dark:bg-black md:w-96",i),children:t.map((e,t)=>(0,n.jsx)("option",{value:e.value,children:e.label},t))})}},7356:function(e,t,a){"use strict";function n(e){document.title="".concat(e," | Miru")}a.d(t,{Z:function(){return n}})},6880:function(e){"use strict";e.exports=JSON.parse('{"i8":"2.0.0-Alpha.12"}')}},function(e){e.O(0,[147,684,947,371,667,139,744],function(){return e(e.s=6966)}),_N_E=e.O()}]);