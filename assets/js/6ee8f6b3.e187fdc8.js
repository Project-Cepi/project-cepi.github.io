"use strict";(self.webpackChunkyard=self.webpackChunkyard||[]).push([[825],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1671:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={},p="Traps",c={unversionedId:"tools/item/traps",id:"tools/item/traps",isDocsHomePage:!1,title:"Traps",description:"Traps allow you to make blocks do special actions depending on the interaction of them.",source:"@site/docs/tools/item/traps.md",sourceDirName:"tools/item",slug:"/tools/item/traps",permalink:"/docs/tools/item/traps",editUrl:"https://github.com/Project-Cepi/project-cepi.github.io/edit/main/docs/tools/item/traps.md",tags:[],version:"current",frontMatter:{},sidebar:"toolSidebar",previous:{title:"Projectiles",permalink:"/docs/tools/item/projectiles"},next:{title:"Lootcrates",permalink:"/docs/tools/registry/lootcrates"}},s=[{value:"Commands",id:"commands",children:[],level:2},{value:"Usages",id:"usages",children:[],level:2}],u={toc:s};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"traps"},"Traps"),(0,a.kt)("p",null,"Traps allow you to make blocks do special actions depending on the interaction of them."),(0,a.kt)("p",null,"For example, use ",(0,a.kt)("inlineCode",{parentName:"p"},"/trap create Damage 1")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/trap apply magma_block 10"),"\nto apply a Damage trap to all magma blocks in a radius of 10 from you."),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/trap create (trapName) (...args)")," - Create a trap item (purple dye)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/trap apply (blockName) (radius)")," - Apply a trap item to all blocks of the type in a radius."),(0,a.kt)("h2",{id:"usages"},"Usages"),(0,a.kt)("p",null,"To use a trap item, simply right click on a block to set its trap."))}m.isMDXComponent=!0}}]);