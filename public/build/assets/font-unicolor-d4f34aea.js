import{r as u,$ as m,m as b,a as _}from"./app-9a505d52.js";import{c as $}from"./createWithBsPrefix-af74ff9a.js";import{_ as z,a as q}from"./useEventCallback-6457e227.js";import{p as O}from"./index-67732e07.js";function Rt(){var t=u.exports.useRef(!0),o=u.exports.useRef(function(){return t.current});return u.exports.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),o.current}function J(t){var o=u.exports.useRef(t);return o.current=t,o}function wt(t){var o=J(t);u.exports.useEffect(function(){return function(){return o.current()}},[])}function w(t,o){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},w(t,o)}function K(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,w(t,o)}const U={disabled:!1},F=m.createContext(null);var Q=function(o){return o.scrollTop},g="unmounted",h="exited",p="entering",x="entered",D="exiting",c=function(t){K(o,t);function o(r,n){var e;e=t.call(this,r,n)||this;var i=n,a=i&&!i.isMounting?r.enter:r.appear,f;return e.appearStatus=null,r.in?a?(f=h,e.appearStatus=p):f=x:r.unmountOnExit||r.mountOnEnter?f=g:f=h,e.state={status:f},e.nextCallback=null,e}o.getDerivedStateFromProps=function(n,e){var i=n.in;return i&&e.status===g?{status:h}:null};var s=o.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(n){var e=null;if(n!==this.props){var i=this.state.status;this.props.in?i!==p&&i!==x&&(e=p):(i===p||i===x)&&(e=D)}this.updateStatus(!1,e)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var n=this.props.timeout,e,i,a;return e=i=a=n,n!=null&&typeof n!="number"&&(e=n.exit,i=n.enter,a=n.appear!==void 0?n.appear:i),{exit:e,enter:i,appear:a}},s.updateStatus=function(n,e){if(n===void 0&&(n=!1),e!==null)if(this.cancelNextCallback(),e===p){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:b.findDOMNode(this);i&&Q(i)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===h&&this.setState({status:g})},s.performEnter=function(n){var e=this,i=this.props.enter,a=this.context?this.context.isMounting:n,f=this.props.nodeRef?[a]:[b.findDOMNode(this),a],l=f[0],d=f[1],E=this.getTimeouts(),S=a?E.appear:E.enter;if(!n&&!i||U.disabled){this.safeSetState({status:x},function(){e.props.onEntered(l)});return}this.props.onEnter(l,d),this.safeSetState({status:p},function(){e.props.onEntering(l,d),e.onTransitionEnd(S,function(){e.safeSetState({status:x},function(){e.props.onEntered(l,d)})})})},s.performExit=function(){var n=this,e=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:b.findDOMNode(this);if(!e||U.disabled){this.safeSetState({status:h},function(){n.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:D},function(){n.props.onExiting(a),n.onTransitionEnd(i.exit,function(){n.safeSetState({status:h},function(){n.props.onExited(a)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(n,e){e=this.setNextCallback(e),this.setState(n,e)},s.setNextCallback=function(n){var e=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,e.nextCallback=null,n(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},s.onTransitionEnd=function(n,e){this.setNextCallback(e);var i=this.props.nodeRef?this.props.nodeRef.current:b.findDOMNode(this),a=n==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var f=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],l=f[0],d=f[1];this.props.addEndListener(l,d)}n!=null&&setTimeout(this.nextCallback,n)},s.render=function(){var n=this.state.status;if(n===g)return null;var e=this.props,i=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var a=z(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return m.createElement(F.Provider,{value:null},typeof i=="function"?i(n,a):m.cloneElement(m.Children.only(i),a))},o}(m.Component);c.contextType=F;c.propTypes={};function y(){}c.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:y,onEntering:y,onEntered:y,onExit:y,onExiting:y,onExited:y};c.UNMOUNTED=g;c.EXITED=h;c.ENTERING=p;c.ENTERED=x;c.EXITING=D;function tt(t){return t&&t.ownerDocument||document}function et(t){var o=tt(t);return o&&o.defaultView||window}function nt(t,o){return et(t).getComputedStyle(t,o)}var rt=/([A-Z])/g;function ot(t){return t.replace(rt,"-$1").toLowerCase()}var st=/^ms-/;function C(t){return ot(t).replace(st,"-ms-")}var it=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function at(t){return!!(t&&it.test(t))}function j(t,o){var s="",r="";if(typeof o=="string")return t.style.getPropertyValue(C(o))||nt(t).getPropertyValue(C(o));Object.keys(o).forEach(function(n){var e=o[n];!e&&e!==0?t.style.removeProperty(C(n)):at(n)?r+=n+"("+e+") ":s+=C(n)+": "+e+";"}),r&&(s+="transform: "+r+";"),t.style.cssText+=";"+s}const ut=!!(typeof window<"u"&&window.document&&window.document.createElement);var k=!1,L=!1;try{var R={get passive(){return k=!0},get once(){return L=k=!0}};ut&&(window.addEventListener("test",R,R),window.removeEventListener("test",R,!0))}catch{}function ft(t,o,s,r){if(r&&typeof r!="boolean"&&!L){var n=r.once,e=r.capture,i=s;!L&&n&&(i=s.__once||function a(f){this.removeEventListener(o,a,e),s.call(this,f)},s.__once=i),t.addEventListener(o,i,k?r:e)}t.addEventListener(o,s,r)}function ct(t,o,s,r){var n=r&&typeof r!="boolean"?r.capture:r;t.removeEventListener(o,s,n),s.__once&&t.removeEventListener(o,s.__once,n)}function G(t,o,s,r){return ft(t,o,s,r),function(){ct(t,o,s,r)}}function lt(t,o,s,r){if(s===void 0&&(s=!1),r===void 0&&(r=!0),t){var n=document.createEvent("HTMLEvents");n.initEvent(o,s,r),t.dispatchEvent(n)}}function pt(t){var o=j(t,"transitionDuration")||"",s=o.indexOf("ms")===-1?1e3:1;return parseFloat(o)*s}function dt(t,o,s){s===void 0&&(s=5);var r=!1,n=setTimeout(function(){r||lt(t,"transitionend",!0)},o+s),e=G(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(n),e()}}function Et(t,o,s,r){s==null&&(s=pt(t)||0);var n=dt(t,s,r),e=G(t,"transitionend",o);return function(){n(),e()}}function I(t,o){const s=j(t,o)||"",r=s.indexOf("ms")===-1?1e3:1;return parseFloat(s)*r}function vt(t,o){const s=I(t,"transitionDuration"),r=I(t,"transitionDelay"),n=Et(t,e=>{e.target===t&&(n(),o(e))},s+r)}function ht(t){t.offsetHeight}function xt(t){return t&&"setState"in t?b.findDOMNode(t):t??null}const mt=m.forwardRef(({onEnter:t,onEntering:o,onEntered:s,onExit:r,onExiting:n,onExited:e,addEndListener:i,children:a,childRef:f,...l},d)=>{const E=u.exports.useRef(null),S=q(E,f),M=T=>{S(xt(T))},v=T=>N=>{T&&E.current&&T(E.current,N)},X=u.exports.useCallback(v(t),[t]),A=u.exports.useCallback(v(o),[o]),B=u.exports.useCallback(v(s),[s]),V=u.exports.useCallback(v(r),[r]),H=u.exports.useCallback(v(n),[n]),Y=u.exports.useCallback(v(e),[e]),Z=u.exports.useCallback(v(i),[i]);return _(c,{ref:d,...l,onEnter:X,onEntered:B,onEntering:A,onExit:V,onExited:Y,onExiting:H,addEndListener:Z,nodeRef:E,children:typeof a=="function"?(T,N)=>a(T,{...N,ref:M}):m.cloneElement(a,{ref:M})})}),Tt={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},yt={[p]:"show",[x]:"show"},W=u.exports.forwardRef(({className:t,children:o,transitionClasses:s={},...r},n)=>{const e=u.exports.useCallback((i,a)=>{ht(i),r.onEnter==null||r.onEnter(i,a)},[r]);return _(mt,{ref:n,addEndListener:vt,...r,onEnter:e,childRef:o.ref,children:(i,a)=>u.exports.cloneElement(o,{...a,className:$("fade",t,o.props.className,yt[i],s[i])})})});W.defaultProps=Tt;W.displayName="Fade";const bt={"aria-label":O.exports.string,onClick:O.exports.func,variant:O.exports.oneOf(["white"])},gt={"aria-label":"Close"},P=u.exports.forwardRef(({className:t,variant:o,...s},r)=>_("button",{ref:r,type:"button",className:$("btn-close",o&&`btn-close-${o}`,t),...s}));P.displayName="CloseButton";P.propTypes=bt;P.defaultProps=gt;export{P as C,p as E,W as F,mt as T,wt as a,D as b,ut as c,ft as d,vt as e,h as f,x as g,ht as h,G as l,tt as o,ct as r,j as s,Et as t,Rt as u};