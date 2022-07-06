"use strict";(globalThis.webpackChunkshuffle_docs=globalThis.webpackChunkshuffle_docs||[]).push([[202],{876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(8427),o=(n(2784),n(876));const a={sidebar_position:10},i="Custom styles",l={unversionedId:"custom-styles",id:"custom-styles",title:"Custom styles",description:"You can customize the default styles which are applied to Shuffle items upon initialization, before layout, after layout, before hiding, and after hidden.",source:"@site/docs/custom-styles.md",sourceDirName:".",slug:"/custom-styles",permalink:"/Shuffle/docs/custom-styles",draft:!1,editUrl:"https://github.com/Vestride/Shuffle/tree/main/apps/website/docs/docs/custom-styles.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/Shuffle/docs/api"},next:{title:"Alternatives",permalink:"/Shuffle/docs/alternatives"}},s={},u=[],c={toc:u};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-styles"},"Custom styles"),(0,o.kt)("p",null,"You can customize the default styles which are applied to Shuffle items upon initialization, before layout, after layout, before hiding, and after hidden."),(0,o.kt)("p",null,"Here are the defaults:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"ShuffleItem.Css = {\n  INITIAL: {\n    position: 'absolute',\n    top: 0,\n    visibility: 'visible',\n    willChange: 'transform',\n  },\n  DIRECTION: {\n    ltr: {\n      left: 0,\n    },\n    rtl: {\n      right: 0,\n    },\n  },\n  VISIBLE: {\n    before: {\n      opacity: 1,\n      visibility: 'visible',\n    },\n    after: {\n      transitionDelay: '',\n    },\n  },\n  HIDDEN: {\n    before: {\n      opacity: 0,\n    },\n    after: {\n      visibility: 'hidden',\n      transitionDelay: '',\n    },\n  },\n};\n\nShuffleItem.Scale = {\n  VISIBLE: 1,\n  HIDDEN: 0.001,\n};\n")),(0,o.kt)("p",null,"If you wanted to add a 50% red background to every item when they initialize, you could do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Shuffle.ShuffleItem.Css.INITIAL.backgroundColor = 'rgba(255, 0, 0, 0.5)';\n")),(0,o.kt)("p",null,"To set the text color to ",(0,o.kt)("inlineCode",{parentName:"p"},"teal")," after the item has finished moving:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Shuffle.ShuffleItem.Css.VISIBLE.after.color = 'teal';\n")),(0,o.kt)("p",null,"You can also customize the scaling effect with visible or hidden items."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"Shuffle.ShuffleItem.Scale.HIDDEN = 0.5;\n")))}f.isMDXComponent=!0}}]);