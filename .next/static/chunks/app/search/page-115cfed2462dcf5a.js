(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[797],{9661:function(e,t,r){Promise.resolve().then(r.bind(r,217))},217:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return M}});var n=r(9268),l=r(5032),s=r(3109),a=r(2092),i=r(5810),c=r(2874),o=r(3697),u=r(9308),d=r(6006),h=r(3894),f=r(9968),m=r(2756),x=r(5629),v=r(6105),g=r(8654),p=r(5984),b=r(5846),j=r.n(b),N=r(9791);function P(e){var t,r;let{extension:l,kw:s}=e,{t:a}=(0,h.$)(["search","common"]),{data:i,isLoading:c,error:o,hasNextPage:u,fetchNextPage:b,isFetchingNextPage:P,isFetched:w,refetch:y}=(0,p.N)({queryKey:["getSearchItems",l.package,s],queryFn:e=>{let{pageParam:t=1}=e;return s?null==l?void 0:l.search(s,t):null==l?void 0:l.latest(t,k)},getNextPageParam:(e,t)=>{if(e&&0!==e.length)return t.length+1},keepPreviousData:!0}),[k,Z]=(0,d.useState)("");(0,d.useEffect)(()=>{y()},[k,y]);let S=(null==l?void 0:null===(t=l.tabList)||void 0===t?void 0:t.call(l))&&Object.keys(null==l?void 0:null===(r=l.tabList)||void 0===r?void 0:r.call(l)).map(e=>(0,n.jsx)("button",{onClick:()=>{Z(e)},className:(0,N.Z)("mr-2 break-keep rounded-full border pl-3 pr-3 pt-2 pb-2 text-sm","".concat(k===e?"bg-black text-white dark:bg-black":"bg-white dark:bg-zinc-700")),children:e},e));return c||!w?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(v.Z.Grid,{children:Array(20).fill(0).map((e,t)=>(0,n.jsx)(g.Z,{className:"h-60vw max-h-96 !rounded-lg md:h-30vw lg:h-20vw"},t))})}):i&&i.pages.length?(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{children:S}),(0,n.jsx)(v.Z.Grid,{children:i.pages&&i.pages.map(e=>e.map((e,t)=>(0,n.jsx)(m.Z,{placeholder:(0,n.jsx)("div",{className:"h-32"}),children:(0,n.jsx)(j(),{href:{pathname:"/detail",query:{pkg:l.package,url:e.url,cover:e.cover}},className:"h-full w-full",children:(0,n.jsx)(v.Z.Fragment,{itemData:e})})},t)))}),0===i.pages[i.pages.length-1].length&&(0,n.jsx)("div",{className:"m-6 text-center",children:(0,n.jsx)("p",{className:"text-1xl font-bold",children:a("no-more-content")})}),(0,n.jsx)(x.Z,{error:o}),(0,n.jsx)("div",{className:"text-center",children:u&&(0,n.jsx)(f.Z,{className:"m-4",onClick:()=>b(),children:a(P?"loading":"more")})})]}):(0,n.jsx)("div",{className:"mt-28 text-center",children:(0,n.jsx)("p",{className:"text-2xl font-bold",children:a("no-content")})})}var w=r(7356),y=r(7646),k=r(1750);let Z=(0,k.Z)("ArrowRight",[["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["polyline",{points:"12 5 19 12 12 19",key:"sfr3i6"}]]);var S=r(3826);function F(e){let{extensions:t,kw:r,toTab:l}=e,s=e=>{setTimeout(()=>{scroll({top:0,behavior:"smooth"})},0),l(e)};return(0,n.jsx)("div",{children:t.map((e,t)=>(0,n.jsxs)("div",{className:"mb-3",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center mb-6 text-lg",children:[(0,n.jsx)("div",{children:e.name}),(0,n.jsx)(S.Z,{onClick:()=>s(t+1),children:(0,n.jsx)(Z,{})})]}),(0,n.jsx)(m.Z,{placeholder:(0,n.jsx)("div",{className:"h-64"}),children:(0,n.jsx)("div",{className:"flex flex-row overflow-auto scrollbar-none mb-6",children:(0,n.jsx)(E,{extension:e,kw:r})})})]},t))})}function E(e){let{extension:t,kw:r}=e,{t:l}=(0,h.$)("search"),{data:s,isLoading:a,error:i}=(0,y.a)({queryKey:["SearchAll",t,r],queryFn:()=>r?t.search(r,1):t.latest(1,void 0)});return i?(0,n.jsx)(x.Z,{error:i}):a?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(g.Z,{className:"flex-shrink-0 h-60vw max-h-96 md:h-30vw lg:h-20vw"})}):s?(0,n.jsx)(n.Fragment,{children:s.map((e,r)=>(0,n.jsx)(j(),{href:{pathname:"/detail",query:{pkg:t.package,url:e.url,cover:e.cover}},className:"flex-shrink-0 mr-3 w-1/2 md:w-1/4 lg:w-1/5",children:(0,n.jsx)(m.Z,{placeholder:(0,n.jsx)("div",{className:"w-48"}),children:(0,n.jsx)(v.Z.Fragment,{itemData:e})})},r))}):(0,n.jsx)("div",{className:"mt-28 text-center",children:(0,n.jsx)("p",{className:"text-2xl font-bold",children:l("no-content")})})}var C=r(6008);let q=(0,u.Pi)(()=>{let{extensionStore:e,settingsStore:t}=(0,c.Yh)(),[r,u]=(0,d.useState)([]),{t:f}=(0,h.$)("search"),[m,x]=(0,d.useState)(0),v=(0,C.useSearchParams)(),g=(0,C.useRouter)(),[p,b]=(0,d.useState)(""),[j,N]=(0,d.useState)("");(0,d.useEffect)(()=>{if(v){var e,t,r;b(null!==(e=v.get("kw"))&&void 0!==e?e:""),N(null!==(t=v.get("kw"))&&void 0!==t?t:""),x(parseInt(null!==(r=v.get("tab"))&&void 0!==r?r:"0"))}},[v]),(0,d.useEffect)(()=>{(0,w.Z)(f("title"))},[]),(0,d.useEffect)(()=>{let r=[],l=e.getExtensionsByType((0,o.P)(t.getSetting("model")));l.map(e=>{r.push({title:e.name,content:(0,n.jsx)(P,{extension:e,kw:p})})}),r.length>1&&r.unshift({title:f("all"),content:(0,n.jsx)(F,{toTab:e=>k(e),extensions:l,kw:p})}),u(r)},[t.getSetting("model"),p]);let y=e=>{e.preventDefault(),k(m)},k=e=>{g.replace("/search?kw=".concat(j,"&tab=").concat(e))};return(0,n.jsx)(s.default,{children:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(a.Z,{handleTabChange:()=>k(0),title:f("title")}),(0,n.jsx)("form",{className:"mb-6",onSubmit:y,children:(0,n.jsx)("input",{type:"text",value:j,className:"w-full rounded-3xl border p-4 dark:bg-black dark:text-white",placeholder:f("search-placeholder"),onChange:e=>N(e.target.value)})}),0===r.length&&(0,n.jsxs)("div",{className:"mt-28 text-center",children:[(0,n.jsx)("p",{className:"text-2xl font-bold",children:f("no-extension")}),(0,n.jsx)("p",{className:"text-sm",children:f("no-extension-tips")})]})||(0,n.jsx)(i.Z,{className:"mb-6",tabs:r,index:m,onChange:k})]})})});var M=q},5032:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(9268),l=r(9791);function s(e){return(0,n.jsx)("div",{...e,className:(0,l.Z)("pl-5 pt-5 pr-5 md:pl-10 md:pr-10 md:pt-10",e.className),children:e.children})}},5629:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(9268),l=r(3894),s=r(6006);function a(e){let{error:t}=e,[r,a]=(0,s.useState)(""),{t:i}=(0,l.$)();return((0,s.useEffect)(()=>{if(t){if("object"==typeof t)return a(t.toString());a(t)}},[t]),r)?(0,n.jsxs)("div",{className:"my-28 text-center",children:[(0,n.jsx)("p",{className:"text-2xl font-bold",children:i("an-error-has-occurred")}),(0,n.jsx)("p",{className:"text-sm",children:r})]}):null}},6105:function(e,t,r){"use strict";var n=r(9268),l=r(9791),s=r(6990);t.Z={Grid:function(e){return(0,n.jsx)("div",{className:(0,l.Z)("grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5",e.className),children:e.children})},Fragment:function(e){let{itemData:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"h-60vw max-h-96 w-full md:h-30vw lg:h-20vw",children:t.cover&&(0,n.jsx)(s.default,{className:"h-full w-full rounded-lg object-cover",src:t.cover,alt:t.title})||(0,n.jsx)("div",{className:"flex h-full w-full items-center justify-center rounded-lg bg-gray-200 p-3 text-xl ",children:t.title})}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{className:"mt-3 mb-1 text-xs text-gray-400",children:[" ",t.update]}),(0,n.jsx)("p",{children:t.title})]})]})}}},3109:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(9268),l=r(3039);function s(e){return(0,n.jsx)(l.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:0},children:e.children})}},8654:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(9268),l=r(9791);function s(e){return(0,n.jsx)("div",{...e,className:(0,l.Z)("h-full w-full animate-pulse rounded-xl bg-slate-200 dark:bg-zinc-700",e.className)})}},2092:function(e,t,r){"use strict";var n=r(9268),l=r(3894),s=r(2874),a=r(9308),i=r(5810);let c=(0,a.Pi)(e=>{let{settingsStore:t}=(0,s.Yh)(),{t:r}=(0,l.$)(),a=[{title:r("bangumi")},{title:r("manga")},{title:r("fikushon")}],c=r=>{var n;t.setSetting("model",r),null===(n=e.handleTabChange)||void 0===n||n.call(e,r)};return(0,n.jsxs)("div",{className:"flex justify-between",children:[(0,n.jsx)("h1",{className:"mb-5 text-3xl font-bold",children:e.title}),(0,n.jsx)(i.Z,{tabs:a,onChange:c,index:t.getSetting("model")})]})});t.Z=c},5810:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(9268),l=r(9791),s=r(6006);function a(e){var t;let[r,a]=(0,s.useState)(0),i=t=>{var r;a(t),null===(r=e.onChange)||void 0===r||r.call(e,t)};(0,s.useEffect)(()=>{void 0!==e.index&&a(Number(e.index))},[e.index,e.tabs]);let c=e.tabs.map((e,t)=>(0,n.jsx)("button",{onClick:()=>i(t),className:(0,l.Z)("mr-2 break-keep rounded-full border pl-3 pr-3 pt-2 pb-2 text-sm ","".concat(r===t?"bg-black text-white dark:bg-black ":"bg-white dark:bg-zinc-700")),children:e.title},t));return(0,n.jsx)("div",{className:(0,l.Z)("overflow-x-scroll scrollbar-none"),children:e.tabs.length>0&&(0,n.jsxs)(n.Fragment,{children:[e.tabs.length>1&&(0,n.jsx)("div",{className:(0,l.Z)("flex overflow-auto scrollbar-none mb-3",e.className),children:c}),(0,n.jsx)("div",{children:null===(t=e.tabs[r])||void 0===t?void 0:t.content})]})})}},9968:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(9268),l=r(9791),s=r(1816);function a(e){return(0,n.jsx)("button",{...e,className:(0,l.W)("rounded-3xl border bg-black pl-4 pr-4 pt-2 pb-2 text-sm text-white focus:ring-2 focus:ring-gray-500",e.className),children:e.loading&&(0,n.jsx)(s.Z,{className:"animate-spin"})||e.children})}},3826:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(9268),l=r(9791);function s(e){return(0,n.jsx)("button",{...e,className:(0,l.Z)("rounded-full p-2 hover:bg-black hover:bg-opacity-20",e.className),children:e.children})}},2756:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(9268),l=r(6006);function s(e){let[t,r]=(0,l.useState)(e.placeholder),s=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let t=s.current,n=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(r(e.children),n.unobserve(t.target))})});return null!==t&&n.observe(t),()=>{n.disconnect()}}),(0,n.jsx)("div",{ref:s,className:e.className,children:t})}},6990:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(9268),l=r(6006),s=r(8654);function a(e){var t,r;let a=(0,l.useRef)(null),[i,c]=(0,l.useState)(!1),[o,u]=(0,l.useState)(!1);return((0,l.useEffect)(()=>{if(a.current){if(a.current.complete){c(!0);return}a.current.onload=()=>{c(!0)},a.current.addEventListener("error",()=>{u(!0)})}return()=>{a.current&&a.current.removeEventListener("error",()=>{console.log("error")})}},[e.src]),o)?(0,n.jsx)(n.Fragment,{children:null!==(t=e.errorview)&&void 0!==t?t:(0,n.jsx)("div",{className:"h-full w-full bg-gray-200"})}):(0,n.jsxs)(n.Fragment,{children:[!i&&(null!==(r=e.loadview)&&void 0!==r?r:(0,n.jsx)(s.Z,{className:"h-full w-full"})),(0,n.jsx)("img",{hidden:!i,ref:a,...e})]})}},3697:function(e,t,r){"use strict";function n(e){switch(Number(e)){case 0:default:return"bangumi";case 1:return"manga";case 2:return"fikushon"}}r.d(t,{P:function(){return n}})},7356:function(e,t,r){"use strict";function n(e){document.title="".concat(e," | Miru")}r.d(t,{Z:function(){return n}})},6008:function(e,t,r){e.exports=r(167)},2026:function(e,t,r){"use strict";function n(){return{onFetch:e=>{e.fetchFn=()=>{var t,r,n,a,i,c;let o;let u=null==(t=e.fetchOptions)?void 0:null==(r=t.meta)?void 0:r.refetchPage,d=null==(n=e.fetchOptions)?void 0:null==(a=n.meta)?void 0:a.fetchMore,h=null==d?void 0:d.pageParam,f=(null==d?void 0:d.direction)==="forward",m=(null==d?void 0:d.direction)==="backward",x=(null==(i=e.state.data)?void 0:i.pages)||[],v=(null==(c=e.state.data)?void 0:c.pageParams)||[],g=v,p=!1,b=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{var t,r;return null!=(t=e.signal)&&t.aborted?p=!0:null==(r=e.signal)||r.addEventListener("abort",()=>{p=!0}),e.signal}})},j=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),N=(e,t,r,n)=>(g=n?[t,...g]:[...g,t],n?[r,...e]:[...e,r]),P=(t,r,n,l)=>{if(p)return Promise.reject("Cancelled");if(void 0===n&&!r&&t.length)return Promise.resolve(t);let s={queryKey:e.queryKey,pageParam:n,meta:e.options.meta};b(s);let a=j(s),i=Promise.resolve(a).then(e=>N(t,n,e,l));return i};if(x.length){if(f){let t=void 0!==h,r=t?h:l(e.options,x);o=P(x,t,r)}else if(m){let t=void 0!==h,r=t?h:s(e.options,x);o=P(x,t,r,!0)}else{g=[];let t=void 0===e.options.getNextPageParam,r=!u||!x[0]||u(x[0],0,x);o=r?P([],t,v[0]):Promise.resolve(N([],v[0],x[0]));for(let r=1;r<x.length;r++)o=o.then(n=>{let s=!u||!x[r]||u(x[r],r,x);if(s){let s=t?v[r]:l(e.options,n);return P(n,t,s)}return Promise.resolve(N(n,v[r],x[r]))})}}else o=P([]);let w=o.then(e=>({pages:e,pageParams:g}));return w}}}}function l(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}function s(e,t){return null==e.getPreviousPageParam?void 0:e.getPreviousPageParam(t[0],t)}function a(e,t){if(e.getNextPageParam&&Array.isArray(t)){let r=l(e,t);return null!=r&&!1!==r}}function i(e,t){if(e.getPreviousPageParam&&Array.isArray(t)){let r=s(e,t);return null!=r&&!1!==r}}r.d(t,{Gm:function(){return n},Qy:function(){return a},ZF:function(){return i}})},5984:function(e,t,r){"use strict";r.d(t,{N:function(){return c}});var n=r(7179),l=r(7958),s=r(2026);class a extends l.z{constructor(e,t){super(e,t)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(e,t){super.setOptions({...e,behavior:(0,s.Gm)()},t)}getOptimisticResult(e){return e.behavior=(0,s.Gm)(),super.getOptimisticResult(e)}fetchNextPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"forward",pageParam:e}}})}fetchPreviousPage({pageParam:e,...t}={}){return this.fetch({...t,meta:{fetchMore:{direction:"backward",pageParam:e}}})}createResult(e,t){var r,n,l,a,i,c;let{state:o}=e,u=super.createResult(e,t),{isFetching:d,isRefetching:h}=u,f=d&&(null==(r=o.fetchMeta)?void 0:null==(n=r.fetchMore)?void 0:n.direction)==="forward",m=d&&(null==(l=o.fetchMeta)?void 0:null==(a=l.fetchMore)?void 0:a.direction)==="backward";return{...u,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,s.Qy)(t,null==(i=o.data)?void 0:i.pages),hasPreviousPage:(0,s.ZF)(t,null==(c=o.data)?void 0:c.pages),isFetchingNextPage:f,isFetchingPreviousPage:m,isRefetching:h&&!f&&!m}}}var i=r(7165);function c(e,t,r){let l=(0,n._v)(e,t,r);return(0,i.r)(l,a)}}},function(e){e.O(0,[147,684,947,646,846,371,667,139,744],function(){return e(e.s=9661)}),_N_E=e.O()}]);