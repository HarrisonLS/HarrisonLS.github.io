import{s as N,u as $,a2 as j,K as w,a3 as U,a4 as q,a5 as B,a6 as H,a7 as W,a8 as z,a9 as G,aa as K,ab as J,ac as Q,ad as Y,d as X,p as Z,k as ee,ae as te,af as re,ag as ne}from"./chunks/framework.62a149d4.js";import{t as A}from"./chunks/theme.4a328f63.js";function oe(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var O={exports:{}},n={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m=Symbol.for("react.element"),ue=Symbol.for("react.portal"),ae=Symbol.for("react.fragment"),se=Symbol.for("react.strict_mode"),ie=Symbol.for("react.profiler"),ce=Symbol.for("react.provider"),le=Symbol.for("react.context"),fe=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),de=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),C=Symbol.iterator;function me(e){return e===null||typeof e!="object"?null:(e=C&&e[C]||e["@@iterator"],typeof e=="function"?e:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,I={};function y(e,t,r){this.props=e,this.context=t,this.refs=I,this.updater=r||x}y.prototype.isReactComponent={};y.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function L(){}L.prototype=y.prototype;function g(e,t,r){this.props=e,this.context=t,this.refs=I,this.updater=r||x}var S=g.prototype=new L;S.constructor=g;D(S,y.prototype);S.isPureReactComponent=!0;var b=Array.isArray,T=Object.prototype.hasOwnProperty,k={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function V(e,t,r){var o,u={},a=null,s=null;if(t!=null)for(o in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)T.call(t,o)&&!F.hasOwnProperty(o)&&(u[o]=t[o]);var i=arguments.length-2;if(i===1)u.children=r;else if(1<i){for(var c=Array(i),f=0;f<i;f++)c[f]=arguments[f+2];u.children=c}if(e&&e.defaultProps)for(o in i=e.defaultProps,i)u[o]===void 0&&(u[o]=i[o]);return{$$typeof:m,type:e,key:a,ref:s,props:u,_owner:k.current}}function he(e,t){return{$$typeof:m,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function R(e){return typeof e=="object"&&e!==null&&e.$$typeof===m}function ve(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var P=/\/+/g;function E(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ve(""+e.key):t.toString(36)}function v(e,t,r,o,u){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case m:case ue:s=!0}}if(s)return s=e,u=u(s),e=o===""?"."+E(s,0):o,b(u)?(r="",e!=null&&(r=e.replace(P,"$&/")+"/"),v(u,t,r,"",function(f){return f})):u!=null&&(R(u)&&(u=he(u,r+(!u.key||s&&s.key===u.key?"":(""+u.key).replace(P,"$&/")+"/")+e)),t.push(u)),1;if(s=0,o=o===""?".":o+":",b(e))for(var i=0;i<e.length;i++){a=e[i];var c=o+E(a,i);s+=v(a,t,r,c,u)}else if(c=me(e),typeof c=="function")for(e=c.call(e),i=0;!(a=e.next()).done;)a=a.value,c=o+E(a,i++),s+=v(a,t,r,c,u);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function h(e,t,r){if(e==null)return e;var o=[],u=0;return v(e,o,"","",function(a){return t.call(r,a,u++)}),o}function _e(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var l={current:null},_={transition:null},Ee={ReactCurrentDispatcher:l,ReactCurrentBatchConfig:_,ReactCurrentOwner:k};n.Children={map:h,forEach:function(e,t,r){h(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return h(e,function(){t++}),t},toArray:function(e){return h(e,function(t){return t})||[]},only:function(e){if(!R(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};n.Component=y;n.Fragment=ae;n.Profiler=ie;n.PureComponent=g;n.StrictMode=se;n.Suspense=pe;n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ee;n.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=D({},e.props),u=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=k.current),t.key!==void 0&&(u=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)T.call(t,c)&&!F.hasOwnProperty(c)&&(o[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)o.children=r;else if(1<c){i=Array(c);for(var f=0;f<c;f++)i[f]=arguments[f+2];o.children=i}return{$$typeof:m,type:e.type,key:u,ref:a,props:o,_owner:s}};n.createContext=function(e){return e={$$typeof:le,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ce,_context:e},e.Consumer=e};n.createElement=V;n.createFactory=function(e){var t=V.bind(null,e);return t.type=e,t};n.createRef=function(){return{current:null}};n.forwardRef=function(e){return{$$typeof:fe,render:e}};n.isValidElement=R;n.lazy=function(e){return{$$typeof:ye,_payload:{_status:-1,_result:e},_init:_e}};n.memo=function(e,t){return{$$typeof:de,type:e,compare:t===void 0?null:t}};n.startTransition=function(e){var t=_.transition;_.transition={};try{e()}finally{_.transition=t}};n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};n.useCallback=function(e,t){return l.current.useCallback(e,t)};n.useContext=function(e){return l.current.useContext(e)};n.useDebugValue=function(){};n.useDeferredValue=function(e){return l.current.useDeferredValue(e)};n.useEffect=function(e,t){return l.current.useEffect(e,t)};n.useId=function(){return l.current.useId()};n.useImperativeHandle=function(e,t,r){return l.current.useImperativeHandle(e,t,r)};n.useInsertionEffect=function(e,t){return l.current.useInsertionEffect(e,t)};n.useLayoutEffect=function(e,t){return l.current.useLayoutEffect(e,t)};n.useMemo=function(e,t){return l.current.useMemo(e,t)};n.useReducer=function(e,t,r){return l.current.useReducer(e,t,r)};n.useRef=function(e){return l.current.useRef(e)};n.useState=function(e){return l.current.useState(e)};n.useSyncExternalStore=function(e,t,r){return l.current.useSyncExternalStore(e,t,r)};n.useTransition=function(){return l.current.useTransition()};n.version="18.2.0";O.exports=n;var we=O.exports;const p=oe(we),ge=e=>{const{noIcon:t,icon:r,badge:o,title:u,desc:a,link:s}=e,i=null;return typeof r=="object"?r.svg:p.createElement(p.Fragment,null,s&&p.createElement("a",{href:s,target:"_blank",rel:"noreferrer"},p.createElement("article",null,p.createElement("div",null,!t&&p.createElement(p.Fragment,null," ",i,r&&typeof r=="string"&&p.createElement("div",null,p.createElement("img",{src:N(r),alt:u,onError:c=>{}}))," "),u&&p.createElement("h5",{id:u}," ",u)," ")," ",a&&p.createElement("p",null,a)," ")," ")," ")};typeof window<"u"&&window.addEventListener("load",()=>{window.navigator&&navigator.serviceWorker&&navigator.serviceWorker.getRegistrations().then(e=>{e.forEach(t=>{t.unregister()})}),"caches"in window&&caches.keys().then(e=>{Promise.all(e.map(t=>caches.delete(t)))})});const Se=()=>{var r;const{frontmatter:e}=$(),t=(r=e.value)!=null&&r.layoutClass?{class:e.value.layoutClass}:{};return j(A.Layout,t,{})},ke=({app:e})=>{e.component("MNavLinks",ge),e.provide("DEV",!1)},Re={extends:A,Layout:Se,enhanceApp:ke};function M(e){if(e.extends){const t=M(e.extends);return{...t,...e,async enhanceApp(r){t.enhanceApp&&await t.enhanceApp(r),e.enhanceApp&&await e.enhanceApp(r)}}}return e}const d=M(Re),Ce=X({name:"VitePressApp",setup(){const{site:e}=$();return Z(()=>{ee(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),te(),re(),ne(),d.setup&&d.setup(),()=>j(d.Layout)}});async function be(){const e=$e(),t=Pe();t.provide(q,e);const r=B(e.route);return t.provide(H,r),t.component("Content",W),t.component("ClientOnly",z),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return r.frontmatter.value}},$params:{get(){return r.page.value.params}}}),d.enhanceApp&&await d.enhanceApp({app:t,router:e,siteData:G}),{app:t,router:e,data:r}}function Pe(){return K(Ce)}function $e(){let e=w,t;return J(r=>{let o=Q(r);return e&&(t=o),(e||t===o)&&(o=o.replace(/\.js$/,".lean.js")),w&&(e=!1),Y(()=>import(o),[])},d.NotFound)}w&&be().then(({app:e,router:t,data:r})=>{t.go().then(()=>{U(t.route,r.site),e.mount("#app")})});export{be as createApp};
