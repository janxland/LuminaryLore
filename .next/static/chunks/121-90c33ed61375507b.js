(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{4960:function(t,e,i){t=i.nmd(t),function(e,r,s,n,a){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==i.g?i.g:{},u="function"==typeof o[n]&&o[n],l=u.cache||{},h="function"==typeof t.require&&t.require.bind(t);function c(t,i){if(!l[t]){if(!e[t]){var r="function"==typeof o[n]&&o[n];if(!i&&r)return r(t,!0);if(u)return u(t,!0);if(h&&"string"==typeof t)return h(t);var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}d.resolve=function(i){var r=e[t][1][i];return null!=r?r:i},d.cache={};var a=l[t]=new c.Module(t);e[t][0].call(a.exports,d,a,a.exports,this)}return l[t].exports;function d(t){var e=d.resolve(t);return!1===e?{}:c(e)}}c.isParcelRequire=!0,c.Module=function(t){this.id=t,this.bundle=c,this.exports={}},c.modules=e,c.cache=l,c.parent=u,c.register=function(t,i){e[t]=[function(t,e){e.exports=i},{}]},Object.defineProperty(c,"root",{get:function(){return o[n]}}),o[n]=c;for(var d=0;d<r.length;d++)c(r[d]);if(s){var f=c(s);t.exports=f}}({"92dvd":[function(t,e,i){var r=t("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(i);var s=t("bundle-text:./image.svg"),n=r.interopDefault(s);function a(t){return e=>{!function(t){let{version:e,utils:{errorHandle:i}}=t.constructor,r=e.split(".").map(Number);i(r[0]+r[1]/100>=5,`Artplayer.js@${e} is not compatible the artplayerPluginDashQuality@${a.version}. Please update it to version Artplayer.js@5.x.x`)}(e);let{$video:i}=e.template,{errorHandle:r}=e.constructor.utils;function s(){let s=e.dash||window.dash;r(s&&s.getVideoElement()===i,'Cannot find instance of Dash from "art.dash" or "window.dash"');let a=t.auto||"Auto",o=t.title||"Quality",u=s.getBitrateInfoListFor("video"),l=s.getQualityFor("video"),h=t.getResolution||(t=>(t.height||"Unknown ")+"P"),c=s.getSettings(),d=u[l],f=c?.streaming?.abr?.autoSwitchBitrate?.video?a:h(d),p={streaming:{abr:{autoSwitchBitrate:{}}}};t.control&&e.controls.update({name:"dash-quality",position:"right",html:f,style:{padding:"0 10px"},selector:u.map((t,e)=>({html:h(t),level:e,default:d===t})),onSelect:t=>(p.streaming.abr.autoSwitchBitrate.video=!1,s.updateSettings(p),s.setQualityFor("video",t.level,!0),t.html)}),t.setting&&e.setting.update({name:"dash-quality",tooltip:f,html:o,icon:n.default,width:200,selector:u.map((t,e)=>({html:h(t),level:e,default:d===t})),onSelect:function(t){return p.streaming.abr.autoSwitchBitrate.video=!1,s.updateSettings(p),s.setQualityFor("video",t.level,!0),t.html}})}return e.on("ready",s),e.on("restart",s),{name:"artplayerPluginDashQuality"}}}i.default=a,a.env="production",a.version="2.0.0",a.build="2023-04-23 18:13:05","undefined"!=typeof window&&(window.artplayerPluginDashQuality=a)},{"bundle-text:./image.svg":"kcayM","@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],kcayM:[function(t,e,i){e.exports='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M870.4 176H153.6c-49.472 0-89.6 40.128-89.6 89.6v492.736c0 49.472 40.128 89.6 89.6 89.6h716.8c49.472 0 89.6-40.128 89.6-89.6V265.6c0-49.472-40.128-89.6-89.6-89.6zm0 492.8h-44.8s-29.696-65.792-89.6-89.6-134.4 89.6-134.4 89.6-66.56-71.808-134.4-224S153.6 624 153.6 624V265.6h716.8v403.2zM668.8 489.6c37.056 0 67.2-30.144 67.2-67.264 0-37.056-30.144-67.2-67.2-67.2-37.12.064-67.2 30.208-67.2 67.264 0 37.12 30.08 67.2 67.2 67.2z" fill="#fff"/></svg>'},{}],"9pCYc":[function(t,e,i){i.interopDefault=function(t){return t&&t.__esModule?t:{default:t}},i.defineInteropFlag=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.exportAll=function(t,e){return Object.keys(t).forEach(function(i){"default"===i||"__esModule"===i||e.hasOwnProperty(i)||Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[i]}})}),e},i.export=function(t,e,i){Object.defineProperty(t,e,{enumerable:!0,get:i})}},{}]},["92dvd"],"92dvd","parcelRequire4dc0")},5642:function(t,e,i){t=i.nmd(t),function(e,r,s,n,a){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==i.g?i.g:{},u="function"==typeof o[n]&&o[n],l=u.cache||{},h="function"==typeof t.require&&t.require.bind(t);function c(t,i){if(!l[t]){if(!e[t]){var r="function"==typeof o[n]&&o[n];if(!i&&r)return r(t,!0);if(u)return u(t,!0);if(h&&"string"==typeof t)return h(t);var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}d.resolve=function(i){var r=e[t][1][i];return null!=r?r:i},d.cache={};var a=l[t]=new c.Module(t);e[t][0].call(a.exports,d,a,a.exports,this)}return l[t].exports;function d(t){var e=d.resolve(t);return!1===e?{}:c(e)}}c.isParcelRequire=!0,c.Module=function(t){this.id=t,this.bundle=c,this.exports={}},c.modules=e,c.cache=l,c.parent=u,c.register=function(t,i){e[t]=[function(t,e){e.exports=i},{}]},Object.defineProperty(c,"root",{get:function(){return o[n]}}),o[n]=c;for(var d=0;d<r.length;d++)c(r[d]);if(s){var f=c(s);t.exports=f}}({eEHR6:[function(t,e,i){var r=t("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(i);var s=t("bundle-text:./image.svg"),n=r.interopDefault(s);function a(t){return e=>{!function(t){let{version:e,utils:{errorHandle:i}}=t.constructor,r=e.split(".").map(Number);i(r[0]+r[1]/100>=5,`Artplayer.js@${e} is not compatible the artplayerPluginHlsQuality@${a.version}. Please update it to version Artplayer.js@5.x.x`)}(e);let{$video:i}=e.template,{errorHandle:r}=e.constructor.utils;function s(){let s=e.hls||window.hls;r(s&&s.media===i,'Cannot find instance of HLS from "art.hls" or "window.hls"');let a=t.auto||"Auto",o=t.title||"Quality",u=t.getResolution||(t=>(t.height||"Unknown ")+"P"),l=s.levels[s.currentLevel],h=l?u(l):a;t.control&&e.controls.update({name:"hls-quality",position:"right",html:h,style:{padding:"0 10px"},selector:s.levels.map((t,e)=>({html:u(t),level:t.level||e,default:l===t})),onSelect:t=>(s.currentLevel=t.level,e.loading.show=!0,t.html)}),t.setting&&e.setting.update({name:"hls-quality",tooltip:h,html:o,icon:n.default,width:200,selector:s.levels.map((t,e)=>({html:u(t),level:t.level||e,default:l===t})),onSelect:function(t){return s.currentLevel=t.level,e.loading.show=!0,t.html}})}return e.on("ready",s),e.on("restart",s),{name:"artplayerPluginHlsQuality"}}}i.default=a,a.env="production",a.version="2.0.0",a.build="2023-04-23 18:13:04","undefined"!=typeof window&&(window.artplayerPluginHlsQuality=a)},{"bundle-text:./image.svg":"5VXix","@parcel/transformer-js/src/esmodule-helpers.js":"9pCYc"}],"5VXix":[function(t,e,i){e.exports='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M870.4 176H153.6c-49.472 0-89.6 40.128-89.6 89.6v492.736c0 49.472 40.128 89.6 89.6 89.6h716.8c49.472 0 89.6-40.128 89.6-89.6V265.6c0-49.472-40.128-89.6-89.6-89.6zm0 492.8h-44.8s-29.696-65.792-89.6-89.6-134.4 89.6-134.4 89.6-66.56-71.808-134.4-224S153.6 624 153.6 624V265.6h716.8v403.2zM668.8 489.6c37.056 0 67.2-30.144 67.2-67.264 0-37.056-30.144-67.2-67.2-67.2-37.12.064-67.2 30.208-67.2 67.264 0 37.12 30.08 67.2 67.2 67.2z" fill="#fff"/></svg>'},{}],"9pCYc":[function(t,e,i){i.interopDefault=function(t){return t&&t.__esModule?t:{default:t}},i.defineInteropFlag=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.exportAll=function(t,e){return Object.keys(t).forEach(function(i){"default"===i||"__esModule"===i||e.hasOwnProperty(i)||Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[i]}})}),e},i.export=function(t,e,i){Object.defineProperty(t,e,{enumerable:!0,get:i})}},{}]},["eEHR6"],"eEHR6","parcelRequire4dc0")},2300:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("ChevronDown",[["polyline",{points:"6 9 12 15 18 9",key:"1do0m2"}]])},1981:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("ChevronFirst",[["polyline",{points:"17 18 11 12 17 6",key:"11nco2"}],["path",{d:"M7 6v12",key:"1p53r6"}]])},6789:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("ChevronLast",[["polyline",{points:"7 18 13 12 7 6",key:"1minw5"}],["path",{d:"M17 6v12",key:"1o0aio"}]])},5966:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("ChevronUp",[["polyline",{points:"18 15 12 9 6 15",key:"1uugdp"}]])},452:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]])},9523:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]])},3922:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("List",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]])},4374:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]])},4959:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]])},2521:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("PanelLeftClose",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]])},6005:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("PanelLeftOpen",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]])},9600:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]])},5378:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]])},7594:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}]])},8812:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},8437:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]])},6805:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]])},8178:function(t,e,i){"use strict";i.d(e,{Z:function(){return s}});var r=i(1750);let s=(0,r.Z)("X",[["line",{x1:"18",x2:"6",y1:"6",y2:"18",key:"15jfxm"}],["line",{x1:"6",x2:"18",y1:"6",y2:"18",key:"d1lma3"}]])},6008:function(t,e,i){t.exports=i(167)},2026:function(t,e,i){"use strict";function r(){return{onFetch:t=>{t.fetchFn=()=>{var e,i,r,a,o,u;let l;let h=null==(e=t.fetchOptions)?void 0:null==(i=e.meta)?void 0:i.refetchPage,c=null==(r=t.fetchOptions)?void 0:null==(a=r.meta)?void 0:a.fetchMore,d=null==c?void 0:c.pageParam,f=(null==c?void 0:c.direction)==="forward",p=(null==c?void 0:c.direction)==="backward",y=(null==(o=t.state.data)?void 0:o.pages)||[],v=(null==(u=t.state.data)?void 0:u.pageParams)||[],m=v,g=!1,b=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{var e,i;return null!=(e=t.signal)&&e.aborted?g=!0:null==(i=t.signal)||i.addEventListener("abort",()=>{g=!0}),t.signal}})},x=t.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+t.options.queryHash+"'")),w=(t,e,i,r)=>(m=r?[e,...m]:[...m,e],r?[i,...t]:[...t,i]),q=(e,i,r,s)=>{if(g)return Promise.reject("Cancelled");if(void 0===r&&!i&&e.length)return Promise.resolve(e);let n={queryKey:t.queryKey,pageParam:r,meta:t.options.meta};b(n);let a=x(n),o=Promise.resolve(a).then(t=>w(e,r,t,s));return o};if(y.length){if(f){let e=void 0!==d,i=e?d:s(t.options,y);l=q(y,e,i)}else if(p){let e=void 0!==d,i=e?d:n(t.options,y);l=q(y,e,i,!0)}else{m=[];let e=void 0===t.options.getNextPageParam,i=!h||!y[0]||h(y[0],0,y);l=i?q([],e,v[0]):Promise.resolve(w([],v[0],y[0]));for(let i=1;i<y.length;i++)l=l.then(r=>{let n=!h||!y[i]||h(y[i],i,y);if(n){let n=e?v[i]:s(t.options,r);return q(r,e,n)}return Promise.resolve(w(r,v[i],y[i]))})}}else l=q([]);let C=l.then(t=>({pages:t,pageParams:m}));return C}}}}function s(t,e){return null==t.getNextPageParam?void 0:t.getNextPageParam(e[e.length-1],e)}function n(t,e){return null==t.getPreviousPageParam?void 0:t.getPreviousPageParam(e[0],e)}function a(t,e){if(t.getNextPageParam&&Array.isArray(e)){let i=s(t,e);return null!=i&&!1!==i}}function o(t,e){if(t.getPreviousPageParam&&Array.isArray(e)){let i=n(t,e);return null!=i&&!1!==i}}i.d(e,{Gm:function(){return r},Qy:function(){return a},ZF:function(){return o}})},1728:function(t,e,i){"use strict";i.d(e,{_:function(){return r}});let r=console},8993:function(t,e,i){"use strict";i.d(e,{R:function(){return u},m:function(){return o}});var r=i(1728),s=i(4586),n=i(8511),a=i(760);class o extends n.F{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||r._,this.observers=[],this.state=t.state||u(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(e=>e!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,e;return null!=(t=null==(e=this.retryer)?void 0:e.continue())?t:this.execute()}async execute(){var t,e,i,r,s,n,o,u,l,h,c,d,f,p,y,v,m,g,b,x;let w="loading"===this.state.status;try{if(!w){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(l=(h=this.mutationCache.config).onMutate)?void 0:l.call(h,this.state.variables,this));let t=await (null==(c=(d=this.options).onMutate)?void 0:c.call(d,this.state.variables));t!==this.state.context&&this.dispatch({type:"loading",context:t,variables:this.state.variables})}let f=await (()=>{var t;return this.retryer=(0,a.Mz)({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(t=this.options.retry)?t:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(t=(e=this.mutationCache.config).onSuccess)?void 0:t.call(e,f,this.state.variables,this.state.context,this)),await (null==(i=(r=this.options).onSuccess)?void 0:i.call(r,f,this.state.variables,this.state.context)),await (null==(s=(n=this.mutationCache.config).onSettled)?void 0:s.call(n,f,null,this.state.variables,this.state.context,this)),await (null==(o=(u=this.options).onSettled)?void 0:o.call(u,f,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:f}),f}catch(t){try{throw await (null==(f=(p=this.mutationCache.config).onError)?void 0:f.call(p,t,this.state.variables,this.state.context,this)),await (null==(y=(v=this.options).onError)?void 0:y.call(v,t,this.state.variables,this.state.context)),await (null==(m=(g=this.mutationCache.config).onSettled)?void 0:m.call(g,void 0,t,this.state.variables,this.state.context,this)),await (null==(b=(x=this.options).onSettled)?void 0:b.call(x,void 0,t,this.state.variables,this.state.context)),t}finally{this.dispatch({type:"error",error:t})}}}dispatch(t){this.state=(e=>{switch(t.type){case"failed":return{...e,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...e,isPaused:!0};case"continue":return{...e,isPaused:!1};case"loading":return{...e,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!(0,a.Kw)(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...e,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...e,data:void 0,error:t.error,failureCount:e.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...e,...t.state}}})(this.state),s.V.batch(()=>{this.observers.forEach(e=>{e.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function u(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}},3352:function(t,e,i){"use strict";i.d(e,{S:function(){return v}});var r=i(7179),s=i(1728),n=i(4586),a=i(760),o=i(8511);class u extends o.F{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||s._,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||function(t){let e="function"==typeof t.initialData?t.initialData():t.initialData,i=void 0!==e,r=i?"function"==typeof t.initialDataUpdatedAt?t.initialDataUpdatedAt():t.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:i?null!=r?r:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:i?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(t,e){let i=(0,r.oE)(this.state.data,t,this.options);return this.dispatch({data:i,type:"success",dataUpdatedAt:null==e?void 0:e.updatedAt,manual:null==e?void 0:e.manual}),i}setState(t,e){this.dispatch({type:"setState",state:t,setStateOptions:e})}cancel(t){var e;let i=this.promise;return null==(e=this.retryer)||e.cancel(t),i?i.then(r.ZT).catch(r.ZT):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>!1!==t.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!(0,r.Kp)(this.state.dataUpdatedAt,t)}onFocus(){var t;let e=this.observers.find(t=>t.shouldFetchOnWindowFocus());e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}onOnline(){var t;let e=this.observers.find(t=>t.shouldFetchOnReconnect());e&&e.refetch({cancelRefetch:!1}),null==(t=this.retryer)||t.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(e=>e!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,e){var i,s,n,o;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=e&&e.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(n=this.retryer)||n.continueRetry(),this.promise}if(t&&this.setOptions(t),!this.options.queryFn){let t=this.observers.find(t=>t.options.queryFn);t&&this.setOptions(t.options)}Array.isArray(this.options.queryKey);let u=(0,r.G9)(),l={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},h=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{if(u)return this.abortSignalConsumed=!0,u.signal}})};h(l);let c=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(l)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),d={fetchOptions:e,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};h(d),null==(i=this.options.behavior)||i.onFetch(d),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(s=d.fetchOptions)?void 0:s.meta))&&this.dispatch({type:"fetch",meta:null==(o=d.fetchOptions)?void 0:o.meta});let f=t=>{if((0,a.DV)(t)&&t.silent||this.dispatch({type:"error",error:t}),!(0,a.DV)(t)){var e,i,r,s;null==(e=(i=this.cache.config).onError)||e.call(i,t,this),null==(r=(s=this.cache.config).onSettled)||r.call(s,this.state.data,t,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=(0,a.Mz)({fn:d.fetchFn,abort:null==u?void 0:u.abort.bind(u),onSuccess:t=>{var e,i,r,s;if(void 0===t){f(Error(this.queryHash+" data is undefined"));return}this.setData(t),null==(e=(i=this.cache.config).onSuccess)||e.call(i,t,this),null==(r=(s=this.cache.config).onSettled)||r.call(s,t,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:f,onFail:(t,e)=>{this.dispatch({type:"failed",failureCount:t,error:e})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:d.options.retry,retryDelay:d.options.retryDelay,networkMode:d.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){this.state=(e=>{var i,r;switch(t.type){case"failed":return{...e,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...e,fetchStatus:"paused"};case"continue":return{...e,fetchStatus:"fetching"};case"fetch":return{...e,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(i=t.meta)?i:null,fetchStatus:(0,a.Kw)(this.options.networkMode)?"fetching":"paused",...!e.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...e,data:t.data,dataUpdateCount:e.dataUpdateCount+1,dataUpdatedAt:null!=(r=t.dataUpdatedAt)?r:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let s=t.error;if((0,a.DV)(s)&&s.revert&&this.revertState)return{...this.revertState};return{...e,error:s,errorUpdateCount:e.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:e.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...e,isInvalidated:!0};case"setState":return{...e,...t.state}}})(this.state),n.V.batch(()=>{this.observers.forEach(e=>{e.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}var l=i(2772);class h extends l.l{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,e,i){var s;let n=e.queryKey,a=null!=(s=e.queryHash)?s:(0,r.Rm)(n,e),o=this.get(a);return o||(o=new u({cache:this,logger:t.getLogger(),queryKey:n,queryHash:a,options:t.defaultQueryOptions(e),state:i,defaultOptions:t.getQueryDefaults(n)}),this.add(o)),o}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){let e=this.queriesMap[t.queryHash];e&&(t.destroy(),this.queries=this.queries.filter(e=>e!==t),e===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){n.V.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,e){let[i]=(0,r.I6)(t,e);return void 0===i.exact&&(i.exact=!0),this.queries.find(t=>(0,r._x)(i,t))}findAll(t,e){let[i]=(0,r.I6)(t,e);return Object.keys(i).length>0?this.queries.filter(t=>(0,r._x)(i,t)):this.queries}notify(t){n.V.batch(()=>{this.listeners.forEach(({listener:e})=>{e(t)})})}onFocus(){n.V.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){n.V.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}var c=i(8993);class d extends l.l{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,e,i){let r=new c.m({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(e),state:i,defaultOptions:e.mutationKey?t.getMutationDefaults(e.mutationKey):void 0});return this.add(r),r}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(e=>e!==t),this.notify({type:"removed",mutation:t})}clear(){n.V.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return void 0===t.exact&&(t.exact=!0),this.mutations.find(e=>(0,r.X7)(t,e))}findAll(t){return this.mutations.filter(e=>(0,r.X7)(t,e))}notify(t){n.V.batch(()=>{this.listeners.forEach(({listener:e})=>{e(t)})})}resumePausedMutations(){var t;return this.resuming=(null!=(t=this.resuming)?t:Promise.resolve()).then(()=>{let t=this.mutations.filter(t=>t.state.isPaused);return n.V.batch(()=>t.reduce((t,e)=>t.then(()=>e.continue().catch(r.ZT)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}var f=i(189),p=i(7205),y=i(2026);class v{constructor(t={}){this.queryCache=t.queryCache||new h,this.mutationCache=t.mutationCache||new d,this.logger=t.logger||s._,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=f.j.subscribe(()=>{f.j.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=p.N.subscribe(()=>{p.N.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,e;this.mountCount--,0===this.mountCount&&(null==(t=this.unsubscribeFocus)||t.call(this),this.unsubscribeFocus=void 0,null==(e=this.unsubscribeOnline)||e.call(this),this.unsubscribeOnline=void 0)}isFetching(t,e){let[i]=(0,r.I6)(t,e);return i.fetchStatus="fetching",this.queryCache.findAll(i).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,e){var i;return null==(i=this.queryCache.find(t,e))?void 0:i.state.data}ensureQueryData(t,e,i){let s=(0,r._v)(t,e,i),n=this.getQueryData(s.queryKey);return n?Promise.resolve(n):this.fetchQuery(s)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:t,state:e})=>{let i=e.data;return[t,i]})}setQueryData(t,e,i){let s=this.queryCache.find(t),n=null==s?void 0:s.state.data,a=(0,r.SE)(e,n);if(void 0===a)return;let o=(0,r._v)(t),u=this.defaultQueryOptions(o);return this.queryCache.build(this,u).setData(a,{...i,manual:!0})}setQueriesData(t,e,i){return n.V.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:t})=>[t,this.setQueryData(t,e,i)]))}getQueryState(t,e){var i;return null==(i=this.queryCache.find(t,e))?void 0:i.state}removeQueries(t,e){let[i]=(0,r.I6)(t,e),s=this.queryCache;n.V.batch(()=>{s.findAll(i).forEach(t=>{s.remove(t)})})}resetQueries(t,e,i){let[s,a]=(0,r.I6)(t,e,i),o=this.queryCache,u={type:"active",...s};return n.V.batch(()=>(o.findAll(s).forEach(t=>{t.reset()}),this.refetchQueries(u,a)))}cancelQueries(t,e,i){let[s,a={}]=(0,r.I6)(t,e,i);void 0===a.revert&&(a.revert=!0);let o=n.V.batch(()=>this.queryCache.findAll(s).map(t=>t.cancel(a)));return Promise.all(o).then(r.ZT).catch(r.ZT)}invalidateQueries(t,e,i){let[s,a]=(0,r.I6)(t,e,i);return n.V.batch(()=>{var t,e;if(this.queryCache.findAll(s).forEach(t=>{t.invalidate()}),"none"===s.refetchType)return Promise.resolve();let i={...s,type:null!=(t=null!=(e=s.refetchType)?e:s.type)?t:"active"};return this.refetchQueries(i,a)})}refetchQueries(t,e,i){let[s,a]=(0,r.I6)(t,e,i),o=n.V.batch(()=>this.queryCache.findAll(s).filter(t=>!t.isDisabled()).map(t=>{var e;return t.fetch(void 0,{...a,cancelRefetch:null==(e=null==a?void 0:a.cancelRefetch)||e,meta:{refetchPage:s.refetchPage}})})),u=Promise.all(o).then(r.ZT);return null!=a&&a.throwOnError||(u=u.catch(r.ZT)),u}fetchQuery(t,e,i){let s=(0,r._v)(t,e,i),n=this.defaultQueryOptions(s);void 0===n.retry&&(n.retry=!1);let a=this.queryCache.build(this,n);return a.isStaleByTime(n.staleTime)?a.fetch(n):Promise.resolve(a.state.data)}prefetchQuery(t,e,i){return this.fetchQuery(t,e,i).then(r.ZT).catch(r.ZT)}fetchInfiniteQuery(t,e,i){let s=(0,r._v)(t,e,i);return s.behavior=(0,y.Gm)(),this.fetchQuery(s)}prefetchInfiniteQuery(t,e,i){return this.fetchInfiniteQuery(t,e,i).then(r.ZT).catch(r.ZT)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,e){let i=this.queryDefaults.find(e=>(0,r.yF)(t)===(0,r.yF)(e.queryKey));i?i.defaultOptions=e:this.queryDefaults.push({queryKey:t,defaultOptions:e})}getQueryDefaults(t){if(!t)return;let e=this.queryDefaults.find(e=>(0,r.to)(t,e.queryKey));return null==e?void 0:e.defaultOptions}setMutationDefaults(t,e){let i=this.mutationDefaults.find(e=>(0,r.yF)(t)===(0,r.yF)(e.mutationKey));i?i.defaultOptions=e:this.mutationDefaults.push({mutationKey:t,defaultOptions:e})}getMutationDefaults(t){if(!t)return;let e=this.mutationDefaults.find(e=>(0,r.to)(t,e.mutationKey));return null==e?void 0:e.defaultOptions}defaultQueryOptions(t){if(null!=t&&t._defaulted)return t;let e={...this.defaultOptions.queries,...this.getQueryDefaults(null==t?void 0:t.queryKey),...t,_defaulted:!0};return!e.queryHash&&e.queryKey&&(e.queryHash=(0,r.Rm)(e.queryKey,e)),void 0===e.refetchOnReconnect&&(e.refetchOnReconnect="always"!==e.networkMode),void 0===e.useErrorBoundary&&(e.useErrorBoundary=!!e.suspense),e}defaultMutationOptions(t){return null!=t&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==t?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}},8511:function(t,e,i){"use strict";i.d(e,{F:function(){return s}});var r=i(7179);class s{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),(0,r.PN)(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,null!=t?t:r.sk?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}}}]);