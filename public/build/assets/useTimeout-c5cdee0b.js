import{r as c}from"./app-1f730a05.js";import{n as s}from"./useWindow-c8f89660.js";import{u as m}from"./useWillUnmount-6f439dfc.js";var i=Math.pow(2,31)-1;function a(u,e,r){var n=r-Date.now();u.current=n<=i?setTimeout(e,n):setTimeout(function(){return a(u,e,r)},i)}function v(){var u=s(),e=c.exports.useRef();return m(function(){return clearTimeout(e.current)}),c.exports.useMemo(function(){var r=function(){return clearTimeout(e.current)};function n(o,t){t===void 0&&(t=0),u()&&(r(),t<=i?e.current=setTimeout(o,t):a(e,o,Date.now()+t))}return{set:n,clear:r}},[])}export{v as u};