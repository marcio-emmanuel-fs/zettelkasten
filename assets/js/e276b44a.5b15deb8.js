"use strict";(self.webpackChunkdev_docs=self.webpackChunkdev_docs||[]).push([[2885],{748:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(1048);function o(e){let{children:t,fallback:r}=e;return(0,a.Z)()?n.createElement(n.Fragment,null,t?.()):r??null}},1104:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(7462),a=r(7294),o=r(748),i=r(9200);const u=e=>{const{colorMode:t}=(0,i.I)();return a.createElement(o.Z,null,(()=>{const o=r(6095).Z;return a.createElement(o,(0,n.Z)({isDark:"dark"===t},e))}))}},7616:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>u,metadata:()=>s,toc:()=>d});var n=r(7462),a=r(7294),o=r(4137);r(8209);const i=e=>a.createElement("iframe",e);r(1104);const u={id:"podcasts",title:"Podcasts",tags:["podcast","content","audio"]},c=void 0,s={unversionedId:"podcasts",id:"podcasts",title:"Podcasts",description:"<IFrame",source:"@site/docs/podcast.mdx",sourceDirName:".",slug:"/podcasts",permalink:"/zettelkasten/podcasts",draft:!1,editUrl:"https://github.com/sibelius/zettelkasten/edit/main/docs/podcast.mdx",tags:[{label:"podcast",permalink:"/zettelkasten/tags/podcast"},{label:"content",permalink:"/zettelkasten/tags/content"},{label:"audio",permalink:"/zettelkasten/tags/audio"}],version:"current",lastUpdatedBy:"Sibelius Seraphini",lastUpdatedAt:1691343804,formattedLastUpdatedAt:"Aug 6, 2023",frontMatter:{id:"podcasts",title:"Podcasts",tags:["podcast","content","audio"]},sidebar:"docs",previous:{title:"Paid Mentorship for Developers",permalink:"/zettelkasten/paid-mentorship-developers"},next:{title:"Private Community",permalink:"/zettelkasten/private-community"}},l={},d=[],m={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i,{src:"https://anchor.fm/charles-cormier5/embed/episodes/The-Best-Product-with-Sibelius-Seraphini-Co-Founder-of-Woovi-e1u407k/a-a98ca7d",width:"100%",height:"170px",frameborder:"0",scrolling:"no",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",mdxType:"IFrame"}),(0,o.kt)("hr",null),(0,o.kt)(i,{src:"https://open.spotify.com/embed/episode/32gWXBaQ2x18uoLCzFSLSC?utm_source=generator&theme=0",width:"100%",height:"352",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",mdxType:"IFrame"}),(0,o.kt)("hr",null),(0,o.kt)(i,{src:"https://open.spotify.com/embed/episode/0IbTzp68Ah1DIWRDUgv0yh?utm_source=generator&theme=0",width:"100%",height:"352",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",loading:"lazy",mdxType:"IFrame"}),(0,o.kt)("hr",null))}p.isMDXComponent=!0},7463:(e,t,r)=>{r.r(t),r.d(t,{ReactEmbed:()=>_,default:()=>D});var n=r(7582),a=r(7294),o=/\.(mp3|wav|weba|aac|oga|m4a|mp4|ogg|opus|ts|wma|mpga)($|\?)/i;const i=function(e){return o.test(e)};var u=/\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx|mp4|og[gv]|webm|mov|m4v|m3u8|mpd)($|\?)/i,c=/facebook\.com\/([^/?].+\/)?video(s|\.php)[/?].*$/,s=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,l=/(?:www\.|go\.)?twitch\.tv\/([a-z0-9_]+)($|\?)/,d=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?$/,m=/vimeo\.com\/.+/,p=/vimeo\.com\/external\/.+\.mp4/,f=/mixcloud\.com\/([^/]+\/[^/]+)/,h=/streamable\.com\/([a-z0-9]+)$/;const g=function(e){return function(e){return c.test(e)}(e)||function(e){return s.test(e)||l.test(e)}(e)||function(e){return d.test(e)}(e)||function(e){return!p.test(e)&&m.test(e)}(e)||function(e){return f.test(e)}(e)||function(e){return h.test(e)}(e)||function(e){return u.test(e)}(e)};var w=/\.(pdf)($|\?)/i;const b=function(e){return w.test(e)};const y=function(e,t){var r=t.hostname,n=t.url;switch(r){case"twitter.com":return function(e,t){var r=t.pathname.split("/");if(r.length)return[e.tweet,r[r.length-1]]}(e,t);case"www.youtube.com":case"youtu.be":case"youtube.com":return function(e,t){var r=t.search.match(/v=([^\&]+)(&|$)/),n=t.pathname.replace("/","");return r?[e.youtube,r[1]]:n?[e.youtube,n]:void 0}(e,t);case"soundcloud.com":return[e.soundcloud,""];case"jsfiddle.net":return function(e,t){var r=t.pathname.split("/");if(!(r.length<2))return[e.jsfiddle,r[1]]}(e,t);case"imgur.com":return function(e,t){var r=t.url.match(/\/(?:a|gallery)\/([^\/]+)(?:\/|$)/);if(r)return[e.imgur,r[1]]}(e,t);case"www.instagram.com":return[e.instagram,""];case"gist.github.com":return function(e,t){var r=t.pathname.split("/");if(!(r.length<3))return[e.gist,r[2]]}(e,t);case"repl.it":return function(e,t){var r=t.pathname.split("/");if(3===r.length){var n="".concat(r[1],"/").concat(r[2]);return[e.replit,n]}}(e,t);case"www.figma.com":return[e.figma,""];case"www.google.com":return function(e,t){var r=t.pathname.split("/");if("maps"===r[1]&&r.length>=3)return[e.gmaps,""]}(e,t);case"gfycat.com":return function(e,t){var r=t.pathname.split("/");if(!(r.length<2)&&r[1]&&"string"==typeof r[1]){var n=r[1].split("-");return[e.gfycat,n[0]]}}(e,t);case"dropbox.com":case"www.dropbox.com":return[e.dropbox,""];default:return b(n)?[e.pdf,""]:i(n)?[e.simplePlayer,""]:g(n)?[e.reactPlayer,""]:void 0}};const v=function(e,t,r,o){return a.createElement(e,(0,n.__assign)({},o.url,{id:t,width:r.width,isDark:r.isDark,renderWrap:r.renderWrap,renderVoid:function(e){return r.renderVoid(r,o,e)}}))};var k="object"==typeof window,z={dropbox:a.lazy((function(){return r.e(6409).then(r.bind(r,726))})),figma:a.lazy((function(){return Promise.all([r.e(6595),r.e(7766)]).then(r.bind(r,7766))})),gfycat:a.lazy((function(){return r.e(3098).then(r.bind(r,3098))})),gist:a.lazy((function(){return r.e(1811).then(r.bind(r,1811))})),gmaps:a.lazy((function(){return Promise.all([r.e(6595),r.e(7486)]).then(r.bind(r,7486))})),imgur:a.lazy((function(){return r.e(2694).then(r.bind(r,2694))})),instagram:a.lazy((function(){return r.e(5341).then(r.bind(r,5341))})),jsfiddle:a.lazy((function(){return Promise.all([r.e(6595),r.e(7539)]).then(r.bind(r,7539))})),pdf:a.lazy((function(){return r.e(9184).then(r.bind(r,9184))})),reactPlayer:a.lazy((function(){return r.e(9456).then(r.bind(r,9456))})),replit:a.lazy((function(){return r.e(3294).then(r.bind(r,3294))})),simplePlayer:a.lazy((function(){return Promise.all([r.e(6595),r.e(8328)]).then(r.bind(r,8328))})),soundcloud:a.lazy((function(){return r.e(6213).then(r.bind(r,6213))})),tweet:a.lazy((function(){return Promise.all([r.e(6595),r.e(4416)]).then(r.bind(r,4416))})),youtube:a.lazy((function(){return Promise.all([r.e(6595),r.e(8391)]).then(r.bind(r,8391))}))},P=function(){return null},x=function(e){return e},_=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t}return(0,n.__extends)(t,e),t.getDerivedStateFromProps=function(e){if(!k)return null;if("string"==typeof e.url)try{var t=new URL(e.url),r=t.hostname,n=t.pathname,a=t.search,o=t.hash;return{url:{url:e.url,hostname:r,pathname:n,search:a,hash:o}}}catch(i){return{error:i}}},t.getDerivedStateFromError=function(e){return{error:e}},t.prototype.render=function(){if(!k)return null;var e,t=this.props,r=this.state;if(r.error)return t.renderVoid(t,r,r.error);try{e=t.router(t.blocks,r.url)}catch(i){return console.error("Could not route block:",i),t.renderVoid(t,r,i)}if(!e||!e[0])return t.renderVoid(t,r);var n=e,a=n[0],o=n[1];return t.render(a,o,t,r)},t.defaultProps={width:"object"==typeof window?window.innerWidth:0,isDark:!1,blocks:z,router:y,render:v,renderVoid:P,renderWrap:x},t}(a.PureComponent);const D=_},6095:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7582),a=r(7294),o=(r(7463),a.lazy((function(){return Promise.resolve().then(r.bind(r,7463))})));const i=function(e){return a.createElement(a.Suspense,{fallback:e.fallback||null},a.createElement(o,(0,n.__assign)({},e)))}}}]);