import{d as _,U as L,b as f,o,c as i,C as c,_ as h,x as N,l as d,z as u,t as v,D as C,F as g,s as P,n as k,A as b,a as B,N as M,E as x,h as T,p as E,J as $,u as V,a4 as m,M as y,a5 as R,a6 as F,a7 as S,a8 as j,a9 as O,aa as H,ab as X,ac as z,ad as U,ae as W,k as G,af as J,ag as K,ah as Y}from"./chunks/framework.385be6c2.js";import{t as w}from"./chunks/theme.2b1b47c0.js";const q={key:0,class:"visitor",src:"https://visitor-badge.laobi.icu/badge?page_id=harrisonls.github.io",onerror:"this.style.display='none'"},Q=_({__name:"Visitor",setup(e){const t=L("DEV");return(n,s)=>f(t)?c("",!0):(o(),i("img",q))}});const Z=h(Q,[["__scopeId","data-v-ebcd9c1e"]]),ee={class:"copyright"},te=["src"],ne=_({__name:"Copyright",setup(e){const t=L("DEV"),n=N(),s=d(()=>n.path.replace("/mm-notes","")),r=new Date().getFullYear();return(a,l)=>(o(),i("div",ee,[f(t)?c("",!0):(o(),i("img",{key:0,class:"visitor",src:`https://visitor-badge.laobi.icu/badge?page_id=maomao1996.notes.${s.value}`,title:"当前页面累计访问数",onerror:"this.style.display='none'"},null,8,te)),u("span",null,v(`Copyright © 2022-${f(r)} HarrisonLin`),1)]))}});const ae=h(ne,[["__scopeId","data-v-417ef67b"]]),se=/[\u0000-\u001f]/g,oe=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,re=/[\u0300-\u036F]/g,A=e=>e.normalize("NFKD").replace(re,"").replace(se,"").replace(oe,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),ie=["href"],ce={class:"box-header"},le=["innerHTML"],ue={key:1,class:"icon"},pe=["src","alt"],de=["id"],_e={key:1,class:"desc"},me=_({__name:"MNavLink",props:{noIcon:{type:Boolean},icon:{},badge:{},title:{},desc:{},link:{}},setup(e){const t=e,n=d(()=>t.title?A(t.title):""),s=d(()=>typeof t.icon=="object"?t.icon.svg:""),r=d(()=>typeof t.badge=="string"?{text:t.badge,type:"info"}:t.badge);return(a,l)=>{const D=C("Badge");return a.link?(o(),i("a",{key:0,class:"m-nav-link",href:a.link,target:"_blank",rel:"noreferrer"},[u("article",{class:k(["box",{"has-badge":r.value}])},[u("div",ce,[a.noIcon?c("",!0):(o(),i(g,{key:0},[s.value?(o(),i("div",{key:0,class:"icon",innerHTML:s.value},null,8,le)):a.icon&&typeof a.icon=="string"?(o(),i("div",ue,[u("img",{src:f(P)(a.icon),alt:a.title,onerror:"this.parentElement.style.display='none'"},null,8,pe)])):c("",!0)],64)),a.title?(o(),i("h5",{key:1,id:n.value,class:k(["title",{"no-icon":a.noIcon}])},v(a.title),11,de)):c("",!0)]),r.value?(o(),b(D,{key:0,class:"badge",type:r.value.type,text:r.value.text},null,8,["type","text"])):c("",!0),a.desc?(o(),i("p",_e,v(a.desc),1)):c("",!0)],2)],8,ie)):c("",!0)}}});const fe=h(me,[["__scopeId","data-v-f6a1464b"]]),ve=["id"],he=["href"],ge={class:"m-nav-links"},ye=_({__name:"MNavLinks",props:{title:{},noIcon:{type:Boolean},items:{}},setup(e){const t=e,n=d(()=>A(t.title));return(s,r)=>(o(),i(g,null,[s.title?(o(),i("h2",{key:0,id:n.value,tabindex:"-1"},[B(v(s.title)+" ",1),u("a",{class:"header-anchor",href:`#${n.value}`,"aria-hidden":"true"},null,8,he)],8,ve)):c("",!0),u("div",ge,[(o(!0),i(g,null,M(s.items,a=>(o(),b(fe,x({noIcon:s.noIcon},a),null,16,["noIcon"]))),256))])],64))}});const be=h(ye,[["__scopeId","data-v-3a009e39"]]);const ke={id:"xmind-container"},we={__name:"XmindViewer",props:{url:String},setup(e){const t=e,n=T(!0);return E(async()=>{const{XMindEmbedViewer:s}=await $(()=>import("./chunks/index.223215d0.js"),[]),r=new s({el:"#xmind-container",region:"cn"});r.setStyles({width:"100%",height:"100%"});const a=()=>{n.value=!1,r.removeEventListener("map-ready",a)};r.addEventListener("map-ready",a),fetch(t.url).then(l=>l.arrayBuffer()).then(l=>{r.load(l)}).catch(l=>{n.value=!1,console.log("加载出错"),r.removeEventListener("map-ready",a)})}),(s,r)=>{const a=C("Loading");return o(),i("div",ke,[n.value?(o(),b(a,{key:0})):c("",!0)])}}};typeof window<"u"&&(window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(e){for(let t of e)t.unregister()}),"caches"in window&&caches.keys().then(function(e){return Promise.all(e.map(function(t){return caches.delete(t)}))}));const Le={extends:w,Layout:()=>{var n;const e={},{frontmatter:t}=V();return(n=t.value)!=null&&n.layoutClass&&(e.class=t.value.layoutClass),m(w.Layout,e,{"nav-bar-title-after":()=>m(Z),"doc-after":()=>m(ae)})},enhanceApp({app:e}){e.component("MNavLinks",be),e.component("XmindViewer",we),e.provide("DEV",!1)}};function I(e){if(e.extends){const t=I(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const p=I(Le),Ce=_({name:"VitePressApp",setup(){const{site:e}=V();return E(()=>{G(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),J(),K(),Y(),p.setup&&p.setup(),()=>m(p.Layout)}});async function Ee(){const e=Ve(),t=$e();t.provide(F,e);const n=S(e.route);return t.provide(j,n),t.component("Content",O),t.component("ClientOnly",H),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),p.enhanceApp&&await p.enhanceApp({app:t,router:e,siteData:X}),{app:t,router:e,data:n}}function $e(){return z(Ce)}function Ve(){let e=y,t;return U(n=>{let s=W(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),y&&(e=!1),$(()=>import(s),[])},p.NotFound)}y&&Ee().then(({app:e,router:t,data:n})=>{t.go().then(()=>{R(t.route,n.site),e.mount("#app")})});export{Ee as createApp};
