(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{6141:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return r(4489)}])},2278:function(e,t){"use strict";function r(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6703:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return j}});let n=r(4788),o=r(8754),l=r(224),u=o._(r(5784)),f=r(947),c=r(1901),a=r(242),i=r(6873),s=r(5116),d=r(7220),p=r(6102),h=r(8156),y=r(2278),_=r(4848),b=new Set;function v(e,t,r,n,o){if(o||(0,c.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,l=t+"%"+r+"%"+o;if(b.has(l))return;b.add(l)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function g(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let m=u.default.forwardRef(function(e,t){let r,o;let{href:a,as:b,children:m,prefetch:j,passHref:x,replace:O,shallow:E,scroll:C,locale:P,onClick:k,onMouseEnter:M,onTouchStart:w,legacyBehavior:N=!1}=e,R=l._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=m,N&&("string"==typeof r||"number"==typeof r)&&(r=u.default.createElement("a",null,r));let L=!1!==j,S=u.default.useContext(d.RouterContext),T=u.default.useContext(p.AppRouterContext),I=null!=S?S:T,U=!S,{href:D,as:A}=u.default.useMemo(()=>{if(!S){let e=g(a);return{href:e,as:b?g(b):e}}let[e,t]=(0,f.resolveHref)(S,a,!0);return{href:e,as:b?(0,f.resolveHref)(S,b):t||e}},[S,a,b]),F=u.default.useRef(D),H=u.default.useRef(A);N&&(o=u.default.Children.only(r));let K=N?o&&"object"==typeof o&&o.ref:t,[B,X,$]=(0,h.useIntersection)({rootMargin:"200px"}),q=u.default.useCallback(e=>{(H.current!==A||F.current!==D)&&($(),H.current=A,F.current=D),B(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[A,K,D,$,B]);u.default.useEffect(()=>{I&&X&&L&&v(I,D,A,{locale:P},U)},[A,D,X,P,L,null==S?void 0:S.locale,I,U]);let z={ref:q,onClick(e){N||"function"!=typeof k||k(e),N&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),I&&!e.defaultPrevented&&function(e,t,r,n,o,l,f,a,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!(0,c.isLocalURL)(r)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:a,scroll:f}):t[o?"replace":"push"](n||r,{forceOptimisticNavigation:!s})};i?u.default.startTransition(h):h()}(e,I,D,A,O,E,C,P,U,L)},onMouseEnter(e){N||"function"!=typeof M||M(e),N&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),I&&(L||!U)&&v(I,D,A,{locale:P,priority:!0,bypassPrefetchedCheck:!0},U)},onTouchStart(e){N||"function"!=typeof w||w(e),N&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),I&&(L||!U)&&v(I,D,A,{locale:P,priority:!0,bypassPrefetchedCheck:!0},U)}};if((0,i.isAbsoluteUrl)(A))z.href=A;else if(!N||x||"a"===o.type&&!("href"in o.props)){let e=void 0!==P?P:null==S?void 0:S.locale,t=(null==S?void 0:S.isLocaleDomain)&&(0,y.getDomainLocale)(A,e,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);z.href=t||(0,_.addBasePath)((0,s.addLocale)(A,e,null==S?void 0:S.defaultLocale))}return N?u.default.cloneElement(o,z):u.default.createElement("a",n._({},R,z),r)}),j=m;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8156:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});let n=r(5784),o=r(7027),l="function"==typeof IntersectionObserver,u=new Map,f=[];function c(e){let{rootRef:t,rootMargin:r,disabled:c}=e,a=c||!l,[i,s]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(l){if(a||i)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=f.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=u.get(n)))return t;let o=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:l,elements:o},f.push(r),u.set(r,t),t}(r);return l.set(e,t),o.observe(e),function(){if(l.delete(e),o.unobserve(e),0===l.size){o.disconnect(),u.delete(n);let e=f.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!i){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[a,r,t,i,d.current]);let h=(0,n.useCallback)(()=>{s(!1)},[]);return[p,i,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4489:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(1844);r(1167);var o=r(9008),l=r.n(o),u=r(1664),f=r.n(u);function c(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l(),{children:(0,n.jsx)("title",{children:"404 Not Found"})}),(0,n.jsxs)("div",{className:"flex h-screen flex-col items-center justify-center",children:[(0,n.jsx)("h1",{className:"mb-3 text-2xl",children:"404 Not Found"}),(0,n.jsx)(f(),{href:"/",children:(0,n.jsx)("button",{className:"rounded-3xl border bg-black pl-4 pr-4 pt-2 pb-2 text-sm text-white focus:ring-2 focus:ring-gray-500",children:"Home"})})]})]})}},1167:function(){},9803:function(e,t,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(5784),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,f=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,l={},a=null,i=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(i=t.ref),t)u.call(t,n)&&!c.hasOwnProperty(n)&&(l[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===l[n]&&(l[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:i,props:l,_owner:f.current}}t.Fragment=l,t.jsx=a,t.jsxs=a},1844:function(e,t,r){"use strict";e.exports=r(9803)},9008:function(e,t,r){e.exports=r(8316)},1664:function(e,t,r){e.exports=r(6703)}},function(e){e.O(0,[888,179],function(){return e(e.s=6141)}),_N_E=e.O()}]);