(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{175:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(9),o=(r(0),r(250)),i={id:"m",title:"M",sidebar_label:"M"},s={id:"glossary/m",isDocsHomePage:!1,title:"M",description:"MapReduce",source:"@site/../docs/glossary/m.md",permalink:"/docs/glossary/m",sidebar_label:"M",sidebar:"Glossary",previous:{title:"L",permalink:"/docs/glossary/l"},next:{title:"N",permalink:"/docs/glossary/n"}},c=[{value:"MapReduce",id:"mapreduce",children:[]},{value:"Membership",id:"membership",children:[]},{value:"Microsoft Azure",id:"microsoft-azure",children:[]}],u={rightToc:c};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"mapreduce"},"MapReduce"),Object(o.b)("p",null,"Hadoop MapReduce is a software framework for writing applications to process large amounts of data in-parallel on large clusters. A MapReduce job usually splits the input data-set into independent chunks which are processed by the map tasks in parallel. The framework sorts the outputs of the maps, which are then input to the reduce tasks. Typically both the input and the output of the job are stored in a file-system. The framework takes care of scheduling tasks, monitoring them and re-executes the failed tasks."),Object(o.b)("h2",{id:"membership"},"Membership"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This term is redundant as of Fusion 2.11.")),Object(o.b)("p",null,"A Membership is a defined group of WANdisco Fusion servers that replicate data between their Zones. You can have as many WANdisco Fusion servers in a Membership as you like, and each WANdisco Fusion server can participate in multiple Memberships. WANdisco Fusion allows you to define multiple Memberships, and WANdisco Fusion servers can fulfil different roles in each Membership they participate in. This allows you to control exactly how your WANdisco Fusion environment operates normally, and how it behaves when faced with network failures, host failures and other types of issues."),Object(o.b)("h2",{id:"microsoft-azure"},"Microsoft Azure"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/glossary/a#azure"}),"Azure"),".  "))}l.isMDXComponent=!0},250:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?a.a.createElement(m,s(s({ref:t},u),{},{components:r})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);