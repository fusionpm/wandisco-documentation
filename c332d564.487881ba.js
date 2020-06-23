(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{220:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var o=t(2),r=t(9),i=(t(0),t(250)),a={id:"useful_info",title:"Useful Information",sidebar_label:"Useful Information"},c={id:"quickstarts/troubleshooting/useful_info",isDocsHomePage:!1,title:"Useful Information",description:"Reference links",source:"@site/../docs/quickstarts/troubleshooting/useful_info.md",permalink:"/wandisco-documentation/docs/quickstarts/troubleshooting/useful_info",sidebar_label:"Useful Information",sidebar:"quickstarts",previous:{title:"Logs",permalink:"/wandisco-documentation/docs/quickstarts/troubleshooting/logs"}},l=[{value:"Reference links",id:"reference-links",children:[{value:"Docker installation guide",id:"docker-installation-guide",children:[]},{value:"Docker Compose installation guide",id:"docker-compose-installation-guide",children:[]},{value:"Git installation guide",id:"git-installation-guide",children:[]}]},{value:"Useful commands",id:"useful-commands",children:[{value:"Container",id:"container",children:[]},{value:"Image",id:"image",children:[]},{value:"Service",id:"service",children:[]},{value:"Login",id:"login",children:[]}]},{value:"Rebuild",id:"rebuild",children:[{value:"Create a new environment",id:"create-a-new-environment",children:[]}]}],b={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"reference-links"},"Reference links"),Object(i.b)("h3",{id:"docker-installation-guide"},Object(i.b)("a",Object(o.a)({parentName:"h3"},{href:"https://docs.docker.com/install/"}),"Docker installation guide")),Object(i.b)("h3",{id:"docker-compose-installation-guide"},Object(i.b)("a",Object(o.a)({parentName:"h3"},{href:"https://docs.docker.com/compose/install/"}),"Docker Compose installation guide")),Object(i.b)("h3",{id:"git-installation-guide"},Object(i.b)("a",Object(o.a)({parentName:"h3"},{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"}),"Git installation guide")),Object(i.b)("h2",{id:"useful-commands"},"Useful commands"),Object(i.b)("h3",{id:"container"},"Container"),Object(i.b)("p",null,"Build, create and start containers:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose up -d")),Object(i.b)("p",null,"List all running containers:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose ps")),Object(i.b)("p",null,"Stop all containers and retain current state:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose stop")),Object(i.b)("p",null,"Start all containers:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose start")),Object(i.b)("p",null,"Restart all containers:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose restart")),Object(i.b)("h3",{id:"image"},"Image"),Object(i.b)("p",null,"To use the latest Fusion docker images:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose down -v")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"git pull")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"./setup-env.sh")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose up -d")),Object(i.b)("p",null,"You now need to recreate replication rules and add previous configuration."),Object(i.b)("h3",{id:"service"},"Service"),Object(i.b)("p",null,"You need to reference the Fusion service name rather than the container name when using docker compose."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose start|stop|restart <service-name>")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Example to restart Fusion Server")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose restart fusion-server-<zone-name>")),Object(i.b)("h4",{id:"service-names"},"Service names"),Object(i.b)("h5",{id:"general"},"General"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"fusion-ui-server-<zone-name>")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"fusion-ihc-server-<zone-name>")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"fusion-server-<zone-name>")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"fusion-oneui-server")),Object(i.b)("h5",{id:"environment-specific"},"Environment specific"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"fusion-nn-proxy-<zone-name>")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sshd-<zone-name>")),Object(i.b)("h5",{id:"plugins"},"Plugins"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"fusion-livehive-proxy-<zone-name>")),Object(i.b)("h5",{id:"sandboxes"},"Sandboxes"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sandbox-hdp")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sandbox-cdh")),Object(i.b)("h3",{id:"login"},"Login"),Object(i.b)("p",null,"Log in to a specific container:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose exec <service-name> bash")),Object(i.b)("p",null,"Log in to a specific container as root user:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose exec -u root <service-name> bash")),Object(i.b)("h2",{id:"rebuild"},"Rebuild"),Object(i.b)("p",null,"In the event that you need to rebuild your Fusion environment, use:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose down -v")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"This is a destructive action that cannot be recovered from. It will stop and delete all containers, volumes and unused networks."))),Object(i.b)("tbody",{parentName:"table"})),Object(i.b)("p",null,"Run the setup script again (it will not prompt for any questions), followed by the docker compose up command to recreate the environment."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"./setup-env.sh")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose up -d")),Object(i.b)("h3",{id:"create-a-new-environment"},"Create a new environment"),Object(i.b)("p",null,"If you want to create a new environment:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"docker-compose down -v")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"git clean -xdf")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"./setup-env.sh")),Object(i.b)("p",null,"The setup script will now prompt you for questions, follow one of the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/wandisco-documentation/docs/quickstarts/installation/quickstart-config"}),"quickstarts")," to configure your new environment."))}p.isMDXComponent=!0},250:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,m=s["".concat(a,".").concat(d)]||s[d]||u[d]||i;return t?r.a.createElement(m,c(c({ref:n},b),{},{components:t})):r.a.createElement(m,c({ref:n},b))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var b=2;b<i;b++)a[b]=t[b];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);