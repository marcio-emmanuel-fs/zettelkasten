"use strict";(self.webpackChunkdev_docs=self.webpackChunkdev_docs||[]).push([[2638],{4137:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var i=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var r=i.createContext({}),o=function(e){var a=i.useContext(r),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=o(e.components);return i.createElement(r.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},k=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),k=o(t),m=n,u=k["".concat(r,".").concat(m)]||k[m]||d[m]||s;return t?i.createElement(u,l(l({ref:a},p),{},{components:t})):i.createElement(u,l({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,l=new Array(s);l[0]=k;var c={};for(var r in a)hasOwnProperty.call(a,r)&&(c[r]=a[r]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<s;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}k.displayName="MDXCreateElement"},9882:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=t(7462),n=(t(7294),t(4137));t(8209);const s={id:"learning-path-java",title:"Learning Path Java",tags:["learning-path","java","backend"]},l=void 0,c={unversionedId:"learning-path/learning-path-java",id:"learning-path/learning-path-java",title:"Learning Path Java",description:"Java Core",source:"@site/docs/learning-path/learning-path-java.md",sourceDirName:"learning-path",slug:"/learning-path/learning-path-java",permalink:"/zettelkasten/learning-path/learning-path-java",draft:!1,editUrl:"https://github.com/sibelius/zettelkasten/edit/main/docs/learning-path/learning-path-java.md",tags:[{label:"learning-path",permalink:"/zettelkasten/tags/learning-path"},{label:"java",permalink:"/zettelkasten/tags/java"},{label:"backend",permalink:"/zettelkasten/tags/backend"}],version:"current",lastUpdatedBy:"Sibelius Seraphini",lastUpdatedAt:1688989904,formattedLastUpdatedAt:"Jul 10, 2023",frontMatter:{id:"learning-path-java",title:"Learning Path Java",tags:["learning-path","java","backend"]},sidebar:"docs",previous:{title:"Learning Path Docker",permalink:"/zettelkasten/learning-path/learning-path-docker"},next:{title:"Learning Path React",permalink:"/zettelkasten/learning-path/learning-path-react"}},r={},o=[{value:"Java Core",id:"java-core",level:3},{value:"Build a Java CLI",id:"build-a-java-cli",level:3},{value:"Make a CRUD with Java",id:"make-a-crud-with-java",level:3},{value:"Build a Java package",id:"build-a-java-package",level:3},{value:"How to consume Java package",id:"how-to-consume-java-package",level:3},{value:"How to set up and update packages",id:"how-to-set-up-and-update-packages",level:3},{value:"How to deploy Java",id:"how-to-deploy-java",level:3},{value:"How to consume requests using Java",id:"how-to-consume-requests-using-java",level:3},{value:"How to use databases in Java",id:"how-to-use-databases-in-java",level:3},{value:"How to deal with files in Java",id:"how-to-deal-with-files-in-java",level:3},{value:"How to do async in Java",id:"how-to-do-async-in-java",level:3},{value:"Websockets in Java",id:"websockets-in-java",level:3},{value:"Threads",id:"threads",level:3},{value:"Java Concurrency",id:"java-concurrency",level:3},{value:"Techniques to improve performance",id:"techniques-to-improve-performance",level:3},{value:"JSON in Java",id:"json-in-java",level:3},{value:"Java applets",id:"java-applets",level:3},{value:"Security",id:"security",level:3},{value:"Java in Docker",id:"java-in-docker",level:3},{value:"Java serverless",id:"java-serverless",level:3}],p={toc:o};function d(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"java-core"},"Java Core"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Data types  "),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Loops and conditions"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Methods and functions")),(0,n.kt)("h3",{id:"build-a-java-cli"},"Build a Java CLI"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Command line interface basics"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Parsing command line arguments")),(0,n.kt)("h3",{id:"make-a-crud-with-java"},"Make a CRUD with Java"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Connect with a database"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Creating, reading, updating and deleting data from a database"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Mapping database tables to Java objects with ORMs, use ",(0,n.kt)("a",{parentName:"li",href:"https://hibernate.org/orm/"},"Hibernate")," or ",(0,n.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/data.html#:~:text=Spring%20Data%20includes%20repository%20support,dependencies%20are%20on%20the%20classpath."},"Spring Data"))),(0,n.kt)("h3",{id:"build-a-java-package"},"Build a Java package"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Organizing code into packages"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Creating and using your own custom packages")),(0,n.kt)("h3",{id:"how-to-consume-java-package"},"How to consume Java package"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Introduction to ",(0,n.kt)("a",{parentName:"li",href:"https://maven.apache.org"},"Maven")," and ",(0,n.kt)("a",{parentName:"li",href:"https://gradle.org"},"Gradle")),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Using external libraries")),(0,n.kt)("h3",{id:"how-to-set-up-and-update-packages"},"How to set up and update packages"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Upgrading and downgrading dependencies"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Dealing with conflicts and versioning issues")),(0,n.kt)("h3",{id:"how-to-deploy-java"},"How to deploy Java"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Introduction to web servers and servlet containers"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Packaging a Java application for deployment"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Deploying a Java application to a web server or a cloud provider")),(0,n.kt)("h3",{id:"how-to-consume-requests-using-java"},"How to consume requests using Java"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Making HTTP requests"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Handling exceptions and errors")),(0,n.kt)("h3",{id:"how-to-use-databases-in-java"},"How to use databases in Java"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Connecting to databases using JDBC or JPA"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Using ORMs like Hibernate or Spring Data to simplify database interactions")),(0,n.kt)("h3",{id:"how-to-deal-with-files-in-java"},"How to deal with files in Java"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Reading and writing files"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Creating, deleting and renaming files and directories")),(0,n.kt)("h3",{id:"how-to-do-async-in-java"},"How to do async in Java"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Introduction to concurrency and parallelism in Java"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Working with asynchronous I/O")),(0,n.kt)("h3",{id:"websockets-in-java"},"Websockets in Java"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Introduction to WebSockets and real-time communication"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Handling WebSocket events and messages")),(0,n.kt)("h3",{id:"threads"},"Threads"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Introduction to concurrency in Java"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Creating and managing threads"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Synchronization and locks"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Dealing with thread safety issues")),(0,n.kt)("h3",{id:"java-concurrency"},"Java Concurrency"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Advanced concurrency concepts like Executors, Futures and Promises"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Concurrent collections and data structures")),(0,n.kt)("h3",{id:"techniques-to-improve-performance"},"Techniques to improve performance"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Using caching and in-memory databases"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Designing for scalability and performance")),(0,n.kt)("h3",{id:"json-in-java"},"JSON in Java"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Introduction to JSON format and parsing"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Serializing Java objects to JSON and vice versa")),(0,n.kt)("h3",{id:"java-applets"},"Java applets"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Overview of Java applets and their uses"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Building, deploying and running Java applets")),(0,n.kt)("h3",{id:"security"},"Security"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Introduction to security concerns in Java"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Best practices for authentication and authorization"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Secure coding practices to prevent common vulnerabilities")),(0,n.kt)("h3",{id:"java-in-docker"},"Java in Docker"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Introduction to Docker containers and their advantages"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Building and deploying Java applications in Docker containers")),(0,n.kt)("h3",{id:"java-serverless"},"Java serverless"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Introduction to serverless computing and its benefits"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Building and deploying Java applications on serverless platforms")))}d.isMDXComponent=!0},8209:(e,a,t)=>{t(7294)}}]);