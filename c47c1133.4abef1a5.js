(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{222:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return d}));var i=r(2),n=r(9),c=(r(0),r(250)),s={id:"ihc.server",title:"ihc.server",sidebar_label:"ihc.server"},l={id:"docs/config-properties/ihc.server",isDocsHomePage:!1,title:"ihc.server",description:"The Inter-Hadoop Communication (IHC) Server is configured from a single file located at /etc/wandisco/fusion/ihc/server/{distro}/{version string}.ihc.",source:"@site/../docs/docs/config-properties/ihc-server.md",permalink:"/wandisco-documentation/docs/docs/config-properties/ihc.server",sidebar_label:"ihc.server",sidebar:"docs",previous:{title:"application.properties",permalink:"/wandisco-documentation/docs/docs/config-properties/application.properties"}},a=[{value:"Default installation properties",id:"default-installation-properties",children:[{value:"<code>http.server</code>",id:"httpserver",children:[]},{value:"<code>https.server</code>",id:"httpsserver",children:[]},{value:"<code>ihc.http.policy</code>",id:"ihchttppolicy",children:[]},{value:"<code>ihc.server</code>",id:"ihcserver",children:[]},{value:"<code>ihc.server.bind</code>",id:"ihcserverbind",children:[]},{value:"<code>ihc.ssl.enabled</code>",id:"ihcsslenabled",children:[]},{value:"<code>ihc.ssl.key.alias</code>",id:"ihcsslkeyalias",children:[]},{value:"<code>ihc.ssl.key.password</code>",id:"ihcsslkeypassword",children:[]},{value:"<code>ihc.ssl.keystore</code>",id:"ihcsslkeystore",children:[]},{value:"<code>ihc.ssl.keystore.password</code>",id:"ihcsslkeystorepassword",children:[]},{value:"<code>ihc.ssl.keystore.type</code>",id:"ihcsslkeystoretype",children:[]},{value:"<code>ihc.ssl.truststore</code>",id:"ihcssltruststore",children:[]},{value:"<code>ihc.ssl.truststore.password</code>",id:"ihcssltruststorepassword",children:[]},{value:"<code>ihc.ssl.truststore.type</code>",id:"ihcssltruststoretype",children:[]}]},{value:"Properties which can be added",id:"properties-which-can-be-added",children:[{value:"<code>ihc.transfer.ssl.handshake.timeout</code>",id:"ihctransfersslhandshaketimeout",children:[]},{value:"<code>ihc.transfer.write.limit</code>",id:"ihctransferwritelimit",children:[]},{value:"<code>ihc.transfer.write.limit.check.interval</code>",id:"ihctransferwritelimitcheckinterval",children:[]},{value:"<code>ihc.writer.threads</code>",id:"ihcwriterthreads",children:[]}]}],o={rightToc:a};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(i.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The Inter-Hadoop Communication (IHC) Server is configured from a single file located at ",Object(c.b)("inlineCode",{parentName:"p"},"/etc/wandisco/fusion/ihc/server/{distro}/{version string}.ihc"),"."),Object(c.b)("p",null,"All properties in this file are checked at startup. If set options are given, the default is highlighted in bold, e.g. True/",Object(c.b)("strong",{parentName:"p"},"false"),"."),Object(c.b)("h2",{id:"default-installation-properties"},"Default installation properties"),Object(c.b)("h3",{id:"httpserver"},Object(c.b)("inlineCode",{parentName:"h3"},"http.server")),Object(c.b)("p",null,"The host and port for the web server, used when the ",Object(c.b)("inlineCode",{parentName:"p"},"ihc.http.policy")," is equal to HTTP_ONLY or BOTH_HTTP_HTTPS."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default - 0.0.0.0:9001, permitted - ",Object(c.b)("inlineCode",{parentName:"li"},"<string>:[1 - 65535]"))),Object(c.b)("h3",{id:"httpsserver"},Object(c.b)("inlineCode",{parentName:"h3"},"https.server")),Object(c.b)("p",null,"The host and port for the web server, used when the ",Object(c.b)("inlineCode",{parentName:"p"},"ihc.http.policy")," is equal to HTTPS_ONLY or BOTH_HTTP_HTTPS."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default - 0.0.0.0:8001, permitted - ",Object(c.b)("inlineCode",{parentName:"li"},"<string>:[1 - 65535]"))),Object(c.b)("h3",{id:"ihchttppolicy"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.http.policy")),Object(c.b)("p",null,"Determines the HTTP policy supported by IHC Server."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"HTTP_ONLY"),", HTTPS_ONLY, BOTH_HTTP_HTTPS")),Object(c.b)("h3",{id:"ihcserver"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.server")),Object(c.b)("p",null,"The hostname and port the IHC server will listen on."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default - $FUSION_HOSTNAME:7000, permitted - ",Object(c.b)("inlineCode",{parentName:"li"},"<string>:[1 - 65535]"))),Object(c.b)("h3",{id:"ihcserverbind"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.server.bind")),Object(c.b)("p",null,"The address the IHC server will bind to. The port must match that used in the ",Object(c.b)("inlineCode",{parentName:"p"},"ihc.server")," address."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default - 0.0.0.0:7000, permitted - ",Object(c.b)("inlineCode",{parentName:"li"},"<string>:[1 - 65535]"))),Object(c.b)("h3",{id:"ihcsslenabled"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.ssl.enabled")),Object(c.b)("p",null,"Signifies that the IHC Server communications has SSL encryption enabled."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"True/",Object(c.b)("strong",{parentName:"li"},"false"))),Object(c.b)("h3",{id:"ihcsslkeyalias"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.ssl.key.alias")),Object(c.b)("p",null,"Alias of private key / certificate chain of the IHC server used to encrypt communications."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Alias of a keystore entry")),Object(c.b)("h3",{id:"ihcsslkeypassword"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.ssl.key.password")),Object(c.b)("p",null,"Encrypted password of private key entry in keystore. Can be encrypted using encrypt-password.sh."),Object(c.b)("h3",{id:"ihcsslkeystore"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.ssl.keystore")),Object(c.b)("p",null,"Local filesystem path of key store containing key entry."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Absolute path to key store.")),Object(c.b)("h3",{id:"ihcsslkeystorepassword"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.ssl.keystore.password")),Object(c.b)("p",null,"Encrypted password of key store. Can be encrypted using encrypt-password.sh."),Object(c.b)("h3",{id:"ihcsslkeystoretype"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.ssl.keystore.type")),Object(c.b)("p",null,"Format of key store"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"JKS"),", PKCS12, etc.")),Object(c.b)("h3",{id:"ihcssltruststore"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.ssl.truststore")),Object(c.b)("p",null,"Local filesystem path of trust store used to validate certificates sent by other IHC servers or Fusion Servers."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Absolute path to trust store")),Object(c.b)("h3",{id:"ihcssltruststorepassword"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.ssl.truststore.password")),Object(c.b)("p",null,"Encrypted password of trust store. Can be encrypted using encrypt-password.sh."),Object(c.b)("h3",{id:"ihcssltruststoretype"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.ssl.truststore.type")),Object(c.b)("p",null,"Format of trust store."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"JKS"),", PKCS12, etc.")),Object(c.b)("h2",{id:"properties-which-can-be-added"},"Properties which can be added"),Object(c.b)("p",null,"The following properties are non-standard, and will not be present in a IHC properties file by default."),Object(c.b)("h3",{id:"ihctransfersslhandshaketimeout"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.transfer.ssl.handshake.timeout")),Object(c.b)("p",null,"SSL Handshake timeout on transfer channel."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default - 60. Any positive integer permitted.")),Object(c.b)("h3",{id:"ihctransferwritelimit"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.transfer.write.limit")),Object(c.b)("p",null,"Write bandwidth limit on transfer channel, in bytes/sec."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default - 0 (unlimited). Any integer permitted.")),Object(c.b)("h3",{id:"ihctransferwritelimitcheckinterval"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.transfer.write.limit.check.interval")),Object(c.b)("p",null,"Check interval for bandwidth limit enforcement, in seconds."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default - 1. Any positive integer permitted.")),Object(c.b)("h3",{id:"ihcwriterthreads"},Object(c.b)("inlineCode",{parentName:"h3"},"ihc.writer.threads")),Object(c.b)("p",null,"Number of threads servicing write handlers that perform reads from underlying storage and writes to network channel."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Default - 32. Any positive integer permitted.")))}d.isMDXComponent=!0},250:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return u}));var i=r(0),n=r.n(i);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},c=Object.keys(e);for(i=0;i<c.length;i++)r=c[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)r=c[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),d=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=d(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),b=d(r),h=i,u=b["".concat(s,".").concat(h)]||b[h]||p[h]||c;return r?n.a.createElement(u,l(l({ref:t},o),{},{components:r})):n.a.createElement(u,l({ref:t},o))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,s=new Array(c);s[0]=h;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var o=2;o<c;o++)s[o]=r[o];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"}}]);