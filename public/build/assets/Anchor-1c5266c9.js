import{_ as j,u as m}from"./index-3acc55db.js";import{r as d,a as b}from"./app-bfc06f47.js";function v(){return v=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},v.apply(this,arguments)}function y(t){return"default"+t.charAt(0).toUpperCase()+t.substr(1)}function w(t){var n=g(t,"string");return typeof n=="symbol"?n:String(n)}function g(t,n){if(typeof t!="object"||t===null)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var r=e.call(t,n||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function x(t,n,e){var r=d.exports.useRef(t!==void 0),o=d.exports.useState(n),u=o[0],i=o[1],f=t!==void 0,p=r.current;return r.current=f,!f&&p&&u!==n&&i(n),[f?t:u,d.exports.useCallback(function(c){for(var a=arguments.length,l=new Array(a>1?a-1:0),s=1;s<a;s++)l[s-1]=arguments[s];e&&e.apply(void 0,[c].concat(l)),i(c)},[e])]}function R(t,n){return Object.keys(n).reduce(function(e,r){var o,u=e,i=u[y(r)],f=u[r],p=j(u,[y(r),r].map(w)),c=n[r],a=x(f,i,t[c]),l=a[0],s=a[1];return v({},p,(o={},o[r]=l,o[c]=s,o))},t)}const O=["as","disabled"];function K(t,n){if(t==null)return{};var e={},r=Object.keys(t),o,u;for(u=0;u<r.length;u++)o=r[u],!(n.indexOf(o)>=0)&&(e[o]=t[o]);return e}function D(t){return!t||t.trim()==="#"}function P({tagName:t,disabled:n,href:e,target:r,rel:o,role:u,onClick:i,tabIndex:f=0,type:p}){t||(e!=null||r!=null||o!=null?t="a":t="button");const c={tagName:t};if(t==="button")return[{type:p||"button",disabled:n},c];const a=s=>{if((n||t==="a"&&D(e))&&s.preventDefault(),n){s.stopPropagation();return}i==null||i(s)},l=s=>{s.key===" "&&(s.preventDefault(),a(s))};return t==="a"&&(e||(e="#"),n&&(e=void 0)),[{role:u??"button",disabled:void 0,tabIndex:n?void 0:f,href:e,target:t==="a"?r:void 0,"aria-disabled":n||void 0,rel:t==="a"?o:void 0,onClick:a,onKeyDown:l},c]}const h=d.exports.forwardRef((t,n)=>{let{as:e,disabled:r}=t,o=K(t,O);const[u,{tagName:i}]=P(Object.assign({tagName:e,disabled:r},o));return b(i,Object.assign({},o,u,{ref:n}))});h.displayName="Button";const S=["onKeyDown"];function _(t,n){if(t==null)return{};var e={},r=Object.keys(t),o,u;for(u=0;u<r.length;u++)o=r[u],!(n.indexOf(o)>=0)&&(e[o]=t[o]);return e}function A(t){return!t||t.trim()==="#"}const C=d.exports.forwardRef((t,n)=>{let{onKeyDown:e}=t,r=_(t,S);const[o]=P(Object.assign({tagName:"a"},r)),u=m(i=>{o.onKeyDown(i),e==null||e(i)});return A(r.href)||r.role==="button"?b("a",Object.assign({ref:n},r,o,{onKeyDown:u})):b("a",Object.assign({ref:n},r,{onKeyDown:e}))});C.displayName="Anchor";export{C as A,h as B,x as a,P as b,R as u};