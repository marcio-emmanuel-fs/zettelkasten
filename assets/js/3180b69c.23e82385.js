"use strict";(self.webpackChunkdev_docs=self.webpackChunkdev_docs||[]).push([[7182],{748:(t,e,n)=>{n.d(e,{Z:()=>a});var r=n(7294),i=n(1048);function a(t){let{children:e,fallback:n}=t;return(0,i.Z)()?r.createElement(r.Fragment,null,e?.()):n??null}},1104:(t,e,n)=>{n.d(e,{Z:()=>u});var r=n(7462),i=n(7294),a=n(748),o=n(9200);const u=t=>{const{colorMode:e}=(0,o.I)();return i.createElement(a.Z,null,(()=>{const a=n(6095).Z;return i.createElement(a,(0,r.Z)({isDark:"dark"===e},t))}))}},2100:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=n(7462),i=(n(7294),n(4137));n(8209),n(1104);const a={id:"fixing-stuff",title:"Fixing Stuff",tags:["fixing","debugging","contributing"]},o=void 0,u={unversionedId:"fixing-stuff",id:"fixing-stuff",title:"Fixing Stuff",description:"Most people find a problem or a bug and let them go unfixed.",source:"@site/docs/fixing-stuff.mdx",sourceDirName:".",slug:"/fixing-stuff",permalink:"/zettelkasten/fixing-stuff",draft:!1,editUrl:"https://github.com/sibelius/zettelkasten/edit/main/docs/fixing-stuff.mdx",tags:[{label:"fixing",permalink:"/zettelkasten/tags/fixing"},{label:"debugging",permalink:"/zettelkasten/tags/debugging"},{label:"contributing",permalink:"/zettelkasten/tags/contributing"}],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1694692156,formattedLastUpdatedAt:"Sep 14, 2023",frontMatter:{id:"fixing-stuff",title:"Fixing Stuff",tags:["fixing","debugging","contributing"]},sidebar:"docs",previous:{title:"Do not answer Twice",permalink:"/zettelkasten/do-not-answer-twice"},next:{title:"Ideas",permalink:"/zettelkasten/ideas"}},s={},l=[],c={toc:l};function f(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Most people find a problem or a bug and let them go unfixed."),(0,i.kt)("p",null,"I'm not like that. I'm a fixer. I fix things. I fix bugs. I fix problems. I fix stuff."),(0,i.kt)("p",null,"When I find a problem, I try to see if this is an easy fix. If this is an easy fix, I fixed it right all way."),(0,i.kt)("p",null,"Otherwise, if the fix is not so easy, I try to ask for help on twitter, discord, github, stackoverflow."),(0,i.kt)("p",null,"If the problem is not solved after sometime, I try to fix it myself again."))}f.isMDXComponent=!0},7463:(t,e,n)=>{n.r(e),n.d(e,{ReactEmbed:()=>P,default:()=>_});var r=n(7582),i=n(7294),a=/\.(mp3|wav|weba|aac|oga|m4a|mp4|ogg|opus|ts|wma|mpga)($|\?)/i;const o=function(t){return a.test(t)};var u=/\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx|mp4|og[gv]|webm|mov|m4v|m3u8|mpd)($|\?)/i,s=/facebook\.com\/([^/?].+\/)?video(s|\.php)[/?].*$/,l=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,c=/(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/,f=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/,d=/vimeo\.com\/.+/,m=/vimeo\.com\/external\/.+\.mp4/,p=/mixcloud\.com\/([^/]+\/[^/]+)/,g=/streamable\.com\/([a-z0-9]+)$/;const h=function(t){return function(t){return s.test(t)}(t)||function(t){return l.test(t)||c.test(t)}(t)||function(t){return f.test(t)}(t)||function(t){return!m.test(t)&&d.test(t)}(t)||function(t){return p.test(t)}(t)||function(t){return g.test(t)}(t)||function(t){return u.test(t)}(t)};var b=/\.(pdf)($|\?)/i;const w=function(t){return b.test(t)};const y=function(t,e){var n=e.hostname,r=e.url;switch(n){case"twitter.com":return function(t,e){var n=e.pathname.split("/");if(n.length)return[t.tweet,n[n.length-1]]}(t,e);case"www.youtube.com":case"youtu.be":case"youtube.com":return function(t,e){var n=e.search.match(/v=([^\&]+)(&|$)/),r=e.pathname.replace("/","");return n?[t.youtube,n[1]]:r?[t.youtube,r]:void 0}(t,e);case"soundcloud.com":return[t.soundcloud,""];case"jsfiddle.net":return function(t,e){var n=e.pathname.split("/");if(!(n.length<2))return[t.jsfiddle,n[1]]}(t,e);case"imgur.com":return function(t,e){var n=e.url.match(/\/(?:a|gallery)\/([^\/]+)(?:\/|$)/);if(n)return[t.imgur,n[1]]}(t,e);case"www.instagram.com":return[t.instagram,""];case"gist.github.com":return function(t,e){var n=e.pathname.split("/");if(!(n.length<3))return[t.gist,n[2]]}(t,e);case"repl.it":return function(t,e){var n=e.pathname.split("/");if(3===n.length){var r="".concat(n[1],"/").concat(n[2]);return[t.replit,r]}}(t,e);case"www.figma.com":return[t.figma,""];case"www.google.com":return function(t,e){var n=e.pathname.split("/");if("maps"===n[1]&&n.length>=3)return[t.gmaps,""]}(t,e);case"gfycat.com":return function(t,e){var n=e.pathname.split("/");if(!(n.length<2)&&n[1]&&"string"==typeof n[1]){var r=n[1].split("-");return[t.gfycat,r[0]]}}(t,e);case"dropbox.com":case"www.dropbox.com":return[t.dropbox,""];default:return w(r)?[t.pdf,""]:o(r)?[t.simplePlayer,""]:h(r)?[t.reactPlayer,""]:void 0}};const v=function(t,e,n,a){return i.createElement(t,(0,r.__assign)({},a.url,{id:e,width:n.width,isDark:n.isDark,renderWrap:n.renderWrap,renderVoid:function(t){return n.renderVoid(n,a,t)}}))};var x="object"==typeof window,k={dropbox:i.lazy((function(){return n.e(6409).then(n.bind(n,726))})),figma:i.lazy((function(){return Promise.all([n.e(6595),n.e(7766)]).then(n.bind(n,7766))})),gfycat:i.lazy((function(){return n.e(3098).then(n.bind(n,3098))})),gist:i.lazy((function(){return n.e(1811).then(n.bind(n,1811))})),gmaps:i.lazy((function(){return Promise.all([n.e(6595),n.e(7486)]).then(n.bind(n,7486))})),imgur:i.lazy((function(){return n.e(2694).then(n.bind(n,2694))})),instagram:i.lazy((function(){return n.e(5341).then(n.bind(n,5341))})),jsfiddle:i.lazy((function(){return Promise.all([n.e(6595),n.e(7539)]).then(n.bind(n,7539))})),pdf:i.lazy((function(){return n.e(9184).then(n.bind(n,9184))})),reactPlayer:i.lazy((function(){return n.e(9456).then(n.bind(n,9456))})),replit:i.lazy((function(){return n.e(3294).then(n.bind(n,3294))})),simplePlayer:i.lazy((function(){return Promise.all([n.e(6595),n.e(8328)]).then(n.bind(n,8328))})),soundcloud:i.lazy((function(){return n.e(6213).then(n.bind(n,6213))})),tweet:i.lazy((function(){return Promise.all([n.e(6595),n.e(4416)]).then(n.bind(n,4416))})),youtube:i.lazy((function(){return Promise.all([n.e(6595),n.e(8391)]).then(n.bind(n,8391))}))},z=function(){return null},I=function(t){return t},P=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.state={},e}return(0,r.__extends)(e,t),e.getDerivedStateFromProps=function(t){if(!x)return null;if("string"==typeof t.url)try{var e=new URL(t.url),n=e.hostname,r=e.pathname,i=e.search,a=e.hash;return{url:{url:t.url,hostname:n,pathname:r,search:i,hash:a}}}catch(o){return{error:o}}},e.getDerivedStateFromError=function(t){return{error:t}},e.prototype.render=function(){if(!x)return null;var t,e=this.props,n=this.state;if(n.error)return e.renderVoid(e,n,n.error);try{t=e.router(e.blocks,n.url)}catch(o){return console.error("Could not route block:",o),e.renderVoid(e,n,o)}if(!t||!t[0])return e.renderVoid(e,n);var r=t,i=r[0],a=r[1];return e.render(i,a,e,n)},e.defaultProps={width:"object"==typeof window?window.innerWidth:0,isDark:!1,blocks:k,router:y,render:v,renderVoid:z,renderWrap:I},e}(i.PureComponent);const _=P},6095:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(7582),i=n(7294),a=(n(7463),i.lazy((function(){return Promise.resolve().then(n.bind(n,7463))})));const o=function(t){return i.createElement(i.Suspense,{fallback:t.fallback||null},i.createElement(a,(0,r.__assign)({},t)))}}}]);