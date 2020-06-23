(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{217:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var a=r(2),n=r(9),o=(r(0),r(250)),i={id:"create-rule",title:"How to Create a Rule",sidebar_label:"Create a Rule"},l={id:"quickstarts/operation/create-rule",isDocsHomePage:!1,title:"How to Create a Rule",description:"Before you can migrate or replicate data, you will need to create replication rules.",source:"@site/../docs/quickstarts/operation/create-rule.md",permalink:"/docs/quickstarts/operation/create-rule",sidebar_label:"Create a Rule",sidebar:"quickstarts",previous:{title:"AWS S3 and Azure Data Lake Storage Gen2 (bi-directional) with LiveMigrator",permalink:"/docs/quickstarts/installation/s3-adlsg2_bi_lm"},next:{title:"Run a Consistency Check",permalink:"/docs/quickstarts/operation/consistency-check"}},c=[{value:"HCFS",id:"hcfs",children:[]},{value:"Hive",id:"hive",children:[]}],s={rightToc:c};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Before you can migrate or replicate data, you will need to create ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/glossary/r#replication-rules"}),"replication rules"),"."),Object(o.b)("p",null,"From the rules section of the dashboard, you can create a rule. By default, this will be a ",Object(o.b)("strong",{parentName:"p"},"HCFS")," rule. If you have Live Hive installed, you will also have the ",Object(o.b)("strong",{parentName:"p"},"Hive")," rule option."),Object(o.b)("h2",{id:"hcfs"},"HCFS"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Define the rule you wish to create:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Give the rule a unique name (i.e. one you haven't used before)."),Object(o.b)("li",{parentName:"ul"},"Provide the path for all storages. If wanting to ",Object(o.b)("strong",{parentName:"li"},"replicate to a different path on target"),", select the option and provide the paths for the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/glossary/s#source"}),"source storage")," and ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/glossary/t#target"}),"target storage"),"."))),Object(o.b)("li",{parentName:"ol"},"Files or directories can be excluded from replication using glob patterns:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"The default exclusions shown are for Fusion\u2019s housekeeping files, trash directories and Hive staging directories."),Object(o.b)("li",{parentName:"ul"},"You can add any other exclusions required."))),Object(o.b)("li",{parentName:"ol"},"Additional rule options can be applied:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Preserve HCFS Block Size")," - Must be enabled when your path contains columnar file formats, such as ORC, Parquet, Avro. These are commonly used in Hadoop for Hive tables.")))),Object(o.b)("p",null,"After a few moments the rule will appear on your dashboard.\nYou can now perform a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/quickstarts/operation/consistency-check"}),"consistency check")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/quickstarts/operation/migration"}),"start migrating")," your data."),Object(o.b)("h2",{id:"hive"},"Hive"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Always create a HCFS rule that will match the location of your underlying Hive data. Without this, Hive queries on the target storage will not work."))),Object(o.b)("tbody",{parentName:"table"})),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Define a unique rule name."),Object(o.b)("li",{parentName:"ol"},"Enter the pattern to match the Database(s) that you want to replicate. For example, using the pattern ",Object(o.b)("inlineCode",{parentName:"li"},"test*")," will match any database that has 'test' at the beginning of its name, such as ",Object(o.b)("inlineCode",{parentName:"li"},"test01"),", ",Object(o.b)("inlineCode",{parentName:"li"},"test02"),", ",Object(o.b)("inlineCode",{parentName:"li"},"test03"),"."),Object(o.b)("li",{parentName:"ol"},"Following the same method, enter the pattern to match the Table(s) that you want to replicate.")),Object(o.b)("p",null,"After a few moments the rule will appear on your dashboard."))}u.isMDXComponent=!0},250:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(r),d=a,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return r?n.a.createElement(m,l(l({ref:t},s),{},{components:r})):n.a.createElement(m,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);