import{d,R as b,b as h,o,c as r,C as i,_ as f,x as I,l as p,a as C,D as V,z as u,F as m,s as D,n as y,t as v,A as L,L as N,E as P,u as $,a2 as _,K as g,a3 as B,a4 as M,a5 as R,a6 as T,a7 as x,a8 as F,a9 as S,aa as j,ab as O,ac as z,ad as H,p as K,k as W,ae as G,af as U,ag as q}from"./chunks/framework.62a149d4.js";import{t as k}from"./chunks/theme.e42e565c.js";const J={key:0,class:"visitor",src:"https://visitor-badge.laobi.icu/badge?page_id=maomao1996.notes",onerror:"this.style.display='none'"},Q=d({__name:"Visitor",setup(e){const t=b("DEV");return(n,a)=>h(t)?i("",!0):(o(),r("img",J))}});const X=f(Q,[["__scopeId","data-v-aa37338d"]]),Y={class:"copyright"},Z=["src"],ee=d({__name:"Copyright",setup(e){const t=b("DEV"),n=I(),a=p(()=>n.path.replace("/mm-notes",""));return(c,s)=>(o(),r("div",Y,[h(t)?i("",!0):(o(),r("img",{key:0,class:"visitor",src:`https://visitor-badge.laobi.icu/badge?page_id=maomao1996.notes.${a.value}`,title:"当前页面累计访问数",onerror:"this.style.display='none'"},null,8,Z)),C(" Copyright © 2019-present maomao ")]))}});const te=f(ee,[["__scopeId","data-v-e630cf60"]]),ne=/[\u0000-\u001f]/g,ae=/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g,se=/[\u0300-\u036F]/g,w=e=>e.normalize("NFKD").replace(se,"").replace(ne,"").replace(ae,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"_$1").toLowerCase(),oe=["href"],re={class:"box-header"},ie=["innerHTML"],ce={key:1,class:"icon"},le=["src","alt"],pe=["id"],ue={key:1,class:"desc"},de=d({__name:"MNavLink",props:{noIcon:{type:Boolean},icon:{},badge:{},title:{},desc:{},link:{}},setup(e){const t=e,n=p(()=>t.title?w(t.title):""),a=p(()=>typeof t.icon=="object"?t.icon.svg:""),c=p(()=>typeof t.badge=="string"?{text:t.badge,type:"info"}:t.badge);return(s,$e)=>{const E=V("Badge");return s.link?(o(),r("a",{key:0,class:"m-nav-link",href:s.link,target:"_blank",rel:"noreferrer"},[u("article",{class:y(["box",{"has-badge":c.value}])},[u("div",re,[s.noIcon?i("",!0):(o(),r(m,{key:0},[a.value?(o(),r("div",{key:0,class:"icon",innerHTML:a.value},null,8,ie)):s.icon&&typeof s.icon=="string"?(o(),r("div",ce,[u("img",{src:h(D)(s.icon),alt:s.title,onerror:"this.parentElement.style.display='none'"},null,8,le)])):i("",!0)],64)),s.title?(o(),r("h5",{key:1,id:n.value,class:y(["title",{"no-icon":s.noIcon}])},v(s.title),11,pe)):i("",!0)]),c.value?(o(),L(E,{key:0,class:"badge",type:c.value.type,text:c.value.text},null,8,["type","text"])):i("",!0),s.desc?(o(),r("p",ue,v(s.desc),1)):i("",!0)],2)],8,oe)):i("",!0)}}});const _e=f(de,[["__scopeId","data-v-f6a1464b"]]),fe=["id"],me=["href"],ve={class:"m-nav-links"},ge=d({__name:"MNavLinks",props:{title:{},noIcon:{type:Boolean},items:{}},setup(e){const t=e,n=p(()=>w(t.title));return(a,c)=>(o(),r(m,null,[a.title?(o(),r("h2",{key:0,id:n.value,tabindex:"-1"},[C(v(a.title)+" ",1),u("a",{class:"header-anchor",href:`#${n.value}`,"aria-hidden":"true"},null,8,me)],8,fe)):i("",!0),u("div",ve,[(o(!0),r(m,null,N(a.items,s=>(o(),L(_e,P({noIcon:a.noIcon},s),null,16,["noIcon"]))),256))])],64))}});const he=f(ge,[["__scopeId","data-v-3a009e39"]]);typeof window<"u"&&(window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(function(e){for(let t of e)t.unregister()}),"caches"in window&&caches.keys().then(function(e){return Promise.all(e.map(function(t){return caches.delete(t)}))}));const ye={extends:k,Layout:()=>{var n;const e={},{frontmatter:t}=$();return(n=t.value)!=null&&n.layoutClass&&(e.class=t.value.layoutClass),_(k.Layout,e,{"nav-bar-title-after":()=>_(X),"doc-after":()=>_(te)})},enhanceApp({app:e}){e.component("MNavLinks",he),e.provide("DEV",!1)}};function A(e){if(e.extends){const t=A(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const l=A(ye),ke=d({name:"VitePressApp",setup(){const{site:e}=$();return K(()=>{W(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),G(),U(),q(),l.setup&&l.setup(),()=>_(l.Layout)}});async function be(){const e=Le(),t=Ce();t.provide(M,e);const n=R(e.route);return t.provide(T,n),t.component("Content",x),t.component("ClientOnly",F),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),l.enhanceApp&&await l.enhanceApp({app:t,router:e,siteData:S}),{app:t,router:e,data:n}}function Ce(){return j(ke)}function Le(){let e=g,t;return O(n=>{let a=z(n);return e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),g&&(e=!1),H(()=>import(a),[])},l.NotFound)}g&&be().then(({app:e,router:t,data:n})=>{t.go().then(()=>{B(t.route,n.site),e.mount("#app")})});export{be as createApp};
