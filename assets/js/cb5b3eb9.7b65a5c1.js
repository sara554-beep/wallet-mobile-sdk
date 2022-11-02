"use strict";(self.webpackChunkmobile_wallet_protocol=self.webpackChunkmobile_wallet_protocol||[]).push([[590],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),b=o,m=d["".concat(l,".").concat(b)]||d[b]||p[b]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3604:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i="Background",s={unversionedId:"spec/background",id:"spec/background",title:"Background",description:"- To use mobile wallets with dapps, communication solutions like WalletLink or WalletConnect have been used, which require bridge servers to pass on dapp\u2019s requests and user\u2019s responses.",source:"@site/docs/spec/background.md",sourceDirName:"spec",slug:"/spec/background",permalink:"/wallet-mobile-sdk/docs/spec/background",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"specSidebar",previous:{title:"Authentication",permalink:"/wallet-mobile-sdk/docs/spec/authentication"},next:{title:"Batched request",permalink:"/wallet-mobile-sdk/docs/spec/batch"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"background"},"Background"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To use mobile wallets with dapps, communication solutions like WalletLink or WalletConnect have been used, which require bridge servers to pass on dapp\u2019s requests and user\u2019s responses.\xa0"),(0,o.kt)("li",{parentName:"ul"},"These protocols were originally designed to deliver messages between entities located on different devices (desktop browser and user\u2019s mobile)."),(0,o.kt)("li",{parentName:"ul"},"For mobile use cases, where both app and wallet are within a single device, repurposing the existing solutions would be inefficient and moreover introduce reliability issues as they rely on a connection to an external server via web sockets.")))}p.isMDXComponent=!0}}]);