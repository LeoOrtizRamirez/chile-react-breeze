import{r as f}from"./app-9a505d52.js";function p(e,t){if(e==null)return{};var n={},u=Object.keys(e),r,o;for(o=0;o<u.length;o++)r=u[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}var i=function(t){return!t||typeof t=="function"?t:function(n){t.current=n}};function c(e,t){var n=i(e),u=i(t);return function(r){n&&n(r),u&&u(r)}}function m(e,t){return f.exports.useMemo(function(){return c(e,t)},[e,t])}function s(e){var t=f.exports.useRef(e);return f.exports.useEffect(function(){t.current=e},[e]),t}function v(e){var t=s(e);return f.exports.useCallback(function(){return t.current&&t.current.apply(t,arguments)},[t])}export{p as _,m as a,v as u};
