import { a as a$1, c as c$1, f, g as g$1, e, b as b$1 } from './chunk-HUHNBGAI.mjs';
import { b, a, c } from './chunk-DYNA3PMW.mjs';
import * as A from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

var P=1,g=1e6;var u=0;function V(){return u=(u+1)%Number.MAX_VALUE,u.toString()}var O=new Map,M=t=>{if(O.has(t))return;let o=setTimeout(()=>{O.delete(t),i({type:"REMOVE_TOAST",toastId:t});},g);O.set(t,o);},h=(t,o)=>{switch(o.type){case"ADD_TOAST":return b(a({},t),{toasts:[o.toast,...t.toasts].slice(0,P)});case"UPDATE_TOAST":return b(a({},t),{toasts:t.toasts.map(e=>e.id===o.toast.id?a(a({},e),o.toast):e)});case"DISMISS_TOAST":{let{toastId:e}=o;return e?M(e):t.toasts.forEach(a=>{M(a.id);}),b(a({},t),{toasts:t.toasts.map(a$1=>a$1.id===e||e===void 0?b(a({},a$1),{open:!1}):a$1)})}case"REMOVE_TOAST":return o.toastId===void 0?b(a({},t),{toasts:[]}):b(a({},t),{toasts:t.toasts.filter(e=>e.id!==o.toastId)})}},S=[],p={toasts:[]};function i(t){p=h(p,t),S.forEach(o=>{o(p);});}function v(o){var t=c(o,[]);let e=V(),a$1=n=>i({type:"UPDATE_TOAST",toast:b(a({},n),{id:e})}),r=()=>i({type:"DISMISS_TOAST",toastId:e});return i({type:"ADD_TOAST",toast:b(a({},t),{id:e,open:!0,onOpenChange:n=>{n||r();}})}),{id:e,dismiss:r,update:a$1}}function R(){let[t,o]=A.useState(p);return A.useEffect(()=>(S.push(o),()=>{let e=S.indexOf(o);e>-1&&S.splice(e,1);}),[t]),b(a({},t),{toast:v,dismiss:e=>i({type:"DISMISS_TOAST",toastId:e})})}function C(){let{toasts:t}=R();return jsxs(a$1,{children:[t.map(function(U){var y=U,{id:o,title:e$1,description:a$1,action:r}=y,n=c(y,["id","title","description","action"]);return jsxs(c$1,b(a({},n),{children:[jsxs("div",{className:"grid gap-1",children:[e$1&&jsx(f,{children:e$1}),a$1&&jsx(g$1,{children:a$1})]}),r,jsx(e,{})]}),o)}),jsx(b$1,{})]})}

export { h as a, v as b, R as c, C as d };