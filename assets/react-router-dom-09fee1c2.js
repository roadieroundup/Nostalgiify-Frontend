import{r as c}from"./react-4fd50329.js";import{R as S,u as p,a as R}from"./react-router-4c7c790a.js";import{c as y}from"./@remix-run-7c45f29c.js";/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function l(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((s,r)=>{let a=e[r];return s.concat(Array.isArray(a)?a.map(t=>[r,t]):[[r,a]])},[]))}function v(e,s){let r=l(e);if(s)for(let a of s.keys())r.has(a)||s.getAll(a).forEach(t=>{r.append(a,t)});return r}function b(e){let{basename:s,children:r,window:a}=e,t=c.useRef();t.current==null&&(t.current=y({window:a,v5Compat:!0}));let o=t.current,[u,n]=c.useState({action:o.action,location:o.location});return c.useLayoutEffect(()=>o.listen(n),[o]),c.createElement(S,{basename:s,children:r,location:u.location,navigationType:u.action,navigator:o})}var i;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(i||(i={}));var f;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(f||(f={}));function w(e){let s=c.useRef(l(e)),r=c.useRef(!1),a=p(),t=c.useMemo(()=>v(a.search,r.current?null:s.current),[a.search]),o=R(),u=c.useCallback((n,m)=>{const h=l(typeof n=="function"?n(t):n);r.current=!0,o("?"+h,m)},[o,t]);return[t,u]}export{b as B,w as u};
