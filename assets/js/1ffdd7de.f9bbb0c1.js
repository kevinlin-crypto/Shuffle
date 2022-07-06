"use strict";(globalThis.webpackChunkshuffle_docs=globalThis.webpackChunkshuffle_docs||[]).push([[211],{876:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>c});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),f=p(n),c=r,d=f["".concat(l,".").concat(c)]||f[c]||u[c]||i;return n?a.createElement(d,o(o({ref:t},h),{},{components:n})):a.createElement(d,o({ref:t},h))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4323:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(8427),r=(n(2784),n(876));const i={sidebar_position:13},o="FAQs",s={unversionedId:"faqs",id:"faqs",title:"FAQs",description:"Why Does Shuffle leave empty spaces?",source:"@site/docs/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/Shuffle/docs/faqs",draft:!1,editUrl:"https://github.com/Vestride/Shuffle/tree/main/apps/website/docs/docs/faqs.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Supported browsers",permalink:"/Shuffle/docs/supported-browsers"},next:{title:"Changelog (abbreviated)",permalink:"/Shuffle/docs/changelog"}},l={},p=[{value:"Why Does Shuffle leave empty spaces?",id:"why-does-shuffle-leave-empty-spaces",level:2},{value:"Why are images overlapping?",id:"why-are-images-overlapping",level:2},{value:"What\u2019s the difference between Shuffle and Isotope?",id:"whats-the-difference-between-shuffle-and-isotope",level:2},{value:"Padding isn\u2019t working on the shuffle element",id:"padding-isnt-working-on-the-shuffle-element",level:2},{value:"Can I center the layout?",id:"can-i-center-the-layout",level:2},{value:"It\u2019s not working with Boostrap 4",id:"its-not-working-with-boostrap-4",level:2}],h={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faqs"},"FAQs"),(0,r.kt)("h2",{id:"why-does-shuffle-leave-empty-spaces"},"Why Does Shuffle leave empty spaces?"),(0,r.kt)("p",null,"The algorithm used to place items does not keep track of empty space nor try to fill them. If you require this functionality, I suggest ",(0,r.kt)("a",{parentName:"p",href:"http://packery.metafizzy.co/"},"packery"),"."),(0,r.kt)("h2",{id:"why-are-images-overlapping"},"Why are images overlapping?"),(0,r.kt)("p",null,"If the size of your items are dependent on images, they can overlap if shuffle is initialized before all the images have loaded. Check out ",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/Vestride/details/podNGMR"},"this demo")," to see how to fix it."),(0,r.kt)("h2",{id:"whats-the-difference-between-shuffle-and-isotope"},"What\u2019s the difference between Shuffle and Isotope?"),(0,r.kt)("p",null,"Isotope:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"more layout modes"),(0,r.kt)("li",{parentName:"ul"},"more options"),(0,r.kt)("li",{parentName:"ul"},"community of users"),(0,r.kt)("li",{parentName:"ul"},"commercial use requires a license")),(0,r.kt)("p",null,"Shuffle:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"robust filtering"),(0,r.kt)("li",{parentName:"ul"},"slightly smaller"),(0,r.kt)("li",{parentName:"ul"},"responsive by default"),(0,r.kt)("li",{parentName:"ul"},"sizer element (which ",(0,r.kt)("a",{parentName:"li",href:"https://packery.metafizzy.co/options.html#element-sizing"},"packery also has"),")")),(0,r.kt)("p",null,"They are ",(0,r.kt)("em",{parentName:"p"},"very")," similar, but I think Shuffle's filtering and sorting are easier to customize, which is the main reason I created this library. Isotope has a much larger community, is battle-tested, and has many stackoverflow answers."),(0,r.kt)("h2",{id:"padding-isnt-working-on-the-shuffle-element"},"Padding isn\u2019t working on the shuffle element"),(0,r.kt)("p",null,"The padding is ignored by Shuffle because it creates complexities with absolute positioning the shuffle-items when they have a percentage width as well as setting the height of the shuffle container because of box-sizing. To fix this, wrap the shuffle element in another element which has the padding on it."),(0,r.kt)("h2",{id:"can-i-center-the-layout"},"Can I center the layout?"),(0,r.kt)("p",null,"Yes. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"isCentered")," option."),(0,r.kt)("h2",{id:"its-not-working-with-boostrap-4"},"It\u2019s not working with Boostrap 4"),(0,r.kt)("p",null,"Bootstrap 4 uses flexbox for grids, so your main shuffle container element must be a ",(0,r.kt)("inlineCode",{parentName:"p"},".row")," and the items inside the row (shuffle items) should all be columns. See the ",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/Vestride/details/weWbJQ"},"Bootstrap 4 grid demo"),"."),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Didn't find an answer?")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Try browsing the ",(0,r.kt)("a",{parentName:"p",href:"https://codepen.io/collection/AWGLbd"},"CodePen collection")," or searching the issues ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Vestride/Shuffle/issues"},"on GitHub"),"."))))}u.isMDXComponent=!0}}]);