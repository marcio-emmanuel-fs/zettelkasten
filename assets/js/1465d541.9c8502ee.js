"use strict";(self.webpackChunkdev_docs=self.webpackChunkdev_docs||[]).push([[2446],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),k=s(a),m=r,u=k["".concat(o,".").concat(m)]||k[m]||d[m]||i;return a?n.createElement(u,l(l({ref:t},p),{},{components:a})):n.createElement(u,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=a(7462),r=(a(7294),a(4137));a(8209);const i={id:"learning-path-docker",title:"Learning Path Docker",tags:["learning-path","docker","backend"]},l=void 0,c={unversionedId:"learning-path/learning-path-docker",id:"learning-path/learning-path-docker",title:"Learning Path Docker",description:"- [ ] learn why we need docker",source:"@site/docs/learning-path/learning-path-docker.md",sourceDirName:"learning-path",slug:"/learning-path/learning-path-docker",permalink:"/zettelkasten/learning-path/learning-path-docker",draft:!1,editUrl:"https://github.com/sibelius/zettelkasten/edit/main/docs/learning-path/learning-path-docker.md",tags:[{label:"learning-path",permalink:"/zettelkasten/tags/learning-path"},{label:"docker",permalink:"/zettelkasten/tags/docker"},{label:"backend",permalink:"/zettelkasten/tags/backend"}],version:"current",lastUpdatedBy:"Sibelius Seraphini",lastUpdatedAt:1691343804,formattedLastUpdatedAt:"Aug 6, 2023",frontMatter:{id:"learning-path-docker",title:"Learning Path Docker",tags:["learning-path","docker","backend"]},sidebar:"docs",previous:{title:"Learning Path Backend",permalink:"/zettelkasten/learning-path/learning-path-backend"},next:{title:"Learning Path Java",permalink:"/zettelkasten/learning-path/learning-path-java"}},o={},s=[],p={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","learn why we need docker"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","learn how to define a Dockerfile"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","learn how to build a docker"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","learn how to list images"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","learn how to run docker with port forward"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","learn how to go inside docker to debug, running /bin/bash"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","learn docker compose"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","learn how to send a docker image to a reqistry (dockerhub or aws ecr)"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","learn how to deploy a docker to kubernetes, aws ecs or another platform"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","learn how to use docker volumes"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","learn how to use docker network")))}d.isMDXComponent=!0},8209:(e,t,a)=>{a(7294)}}]);