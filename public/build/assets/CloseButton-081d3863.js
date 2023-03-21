import{r as u,$ as m,m as g,a as _}from"./app-4488dcc1.js";import{c as $,p as N}from"./createWithBsPrefix-7e10863b.js";function kt(){var t=u.exports.useRef(!0),e=u.exports.useRef(function(){return t.current});return u.exports.useEffect(function(){return t.current=!0,function(){t.current=!1}},[]),e.current}function K(t){var e=u.exports.useRef(t);return e.current=t,e}function wt(t){var e=K(t);u.exports.useEffect(function(){return function(){return e.current()}},[])}function q(t,e){if(t==null)return{};var i={},o=Object.keys(t),r,n;for(n=0;n<o.length;n++)r=o[n],!(e.indexOf(r)>=0)&&(i[r]=t[r]);return i}function k(t,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,r){return o.__proto__=r,o},k(t,e)}function J(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,k(t,e)}const U={disabled:!1},j=m.createContext(null);var Q=function(e){return e.scrollTop},T="unmounted",x="exited",p="entering",h="entered",w="exiting",c=function(t){J(e,t);function e(o,r){var n;n=t.call(this,o,r)||this;var s=r,a=s&&!s.isMounting?o.enter:o.appear,f;return n.appearStatus=null,o.in?a?(f=x,n.appearStatus=p):f=h:o.unmountOnExit||o.mountOnEnter?f=T:f=x,n.state={status:f},n.nextCallback=null,n}e.getDerivedStateFromProps=function(r,n){var s=r.in;return s&&n.status===T?{status:x}:null};var i=e.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(r){var n=null;if(r!==this.props){var s=this.state.status;this.props.in?s!==p&&s!==h&&(n=p):(s===p||s===h)&&(n=w)}this.updateStatus(!1,n)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var r=this.props.timeout,n,s,a;return n=s=a=r,r!=null&&typeof r!="number"&&(n=r.exit,s=r.enter,a=r.appear!==void 0?r.appear:s),{exit:n,enter:s,appear:a}},i.updateStatus=function(r,n){if(r===void 0&&(r=!1),n!==null)if(this.cancelNextCallback(),n===p){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this);s&&Q(s)}this.performEnter(r)}else this.performExit();else this.props.unmountOnExit&&this.state.status===x&&this.setState({status:T})},i.performEnter=function(r){var n=this,s=this.props.enter,a=this.context?this.context.isMounting:r,f=this.props.nodeRef?[a]:[g.findDOMNode(this),a],l=f[0],d=f[1],E=this.getTimeouts(),R=a?E.appear:E.enter;if(!r&&!s||U.disabled){this.safeSetState({status:h},function(){n.props.onEntered(l)});return}this.props.onEnter(l,d),this.safeSetState({status:p},function(){n.props.onEntering(l,d),n.onTransitionEnd(R,function(){n.safeSetState({status:h},function(){n.props.onEntered(l,d)})})})},i.performExit=function(){var r=this,n=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:g.findDOMNode(this);if(!n||U.disabled){this.safeSetState({status:x},function(){r.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:w},function(){r.props.onExiting(a),r.onTransitionEnd(s.exit,function(){r.safeSetState({status:x},function(){r.props.onExited(a)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(r,n){n=this.setNextCallback(n),this.setState(r,n)},i.setNextCallback=function(r){var n=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,n.nextCallback=null,r(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},i.onTransitionEnd=function(r,n){this.setNextCallback(n);var s=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this),a=r==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var f=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],l=f[0],d=f[1];this.props.addEndListener(l,d)}r!=null&&setTimeout(this.nextCallback,r)},i.render=function(){var r=this.state.status;if(r===T)return null;var n=this.props,s=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var a=q(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return m.createElement(j.Provider,{value:null},typeof s=="function"?s(r,a):m.cloneElement(m.Children.only(s),a))},e}(m.Component);c.contextType=j;c.propTypes={};function b(){}c.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:b,onEntering:b,onEntered:b,onExit:b,onExiting:b,onExited:b};c.UNMOUNTED=T;c.EXITED=x;c.ENTERING=p;c.ENTERED=h;c.EXITING=w;function tt(t){return t&&t.ownerDocument||document}function et(t){var e=tt(t);return e&&e.defaultView||window}function nt(t,e){return et(t).getComputedStyle(t,e)}var rt=/([A-Z])/g;function ot(t){return t.replace(rt,"-$1").toLowerCase()}var it=/^ms-/;function C(t){return ot(t).replace(it,"-ms-")}var st=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function at(t){return!!(t&&st.test(t))}function G(t,e){var i="",o="";if(typeof e=="string")return t.style.getPropertyValue(C(e))||nt(t).getPropertyValue(C(e));Object.keys(e).forEach(function(r){var n=e[r];!n&&n!==0?t.style.removeProperty(C(r)):at(r)?o+=r+"("+n+") ":i+=C(r)+": "+n+";"}),o&&(i+="transform: "+o+";"),t.style.cssText+=";"+i}const ut=!!(typeof window<"u"&&window.document&&window.document.createElement);var D=!1,L=!1;try{var O={get passive(){return D=!0},get once(){return L=D=!0}};ut&&(window.addEventListener("test",O,O),window.removeEventListener("test",O,!0))}catch{}function ft(t,e,i,o){if(o&&typeof o!="boolean"&&!L){var r=o.once,n=o.capture,s=i;!L&&r&&(s=i.__once||function a(f){this.removeEventListener(e,a,n),i.call(this,f)},i.__once=s),t.addEventListener(e,s,D?o:n)}t.addEventListener(e,i,o)}function ct(t,e,i,o){var r=o&&typeof o!="boolean"?o.capture:o;t.removeEventListener(e,i,r),i.__once&&t.removeEventListener(e,i.__once,r)}function W(t,e,i,o){return ft(t,e,i,o),function(){ct(t,e,i,o)}}function lt(t,e,i,o){if(i===void 0&&(i=!1),o===void 0&&(o=!0),t){var r=document.createEvent("HTMLEvents");r.initEvent(e,i,o),t.dispatchEvent(r)}}function pt(t){var e=G(t,"transitionDuration")||"",i=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*i}function dt(t,e,i){i===void 0&&(i=5);var o=!1,r=setTimeout(function(){o||lt(t,"transitionend",!0)},e+i),n=W(t,"transitionend",function(){o=!0},{once:!0});return function(){clearTimeout(r),n()}}function Et(t,e,i,o){i==null&&(i=pt(t)||0);var r=dt(t,i,o),n=W(t,"transitionend",e);return function(){r(),n()}}function F(t,e){const i=G(t,e)||"",o=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*o}function vt(t,e){const i=F(t,"transitionDuration"),o=F(t,"transitionDelay"),r=Et(t,n=>{n.target===t&&(r(),e(n))},i+o)}function xt(t){t.offsetHeight}var I=function(e){return!e||typeof e=="function"?e:function(i){e.current=i}};function ht(t,e){var i=I(t),o=I(e);return function(r){i&&i(r),o&&o(r)}}function mt(t,e){return u.exports.useMemo(function(){return ht(t,e)},[t,e])}function yt(t){return t&&"setState"in t?g.findDOMNode(t):t??null}const bt=m.forwardRef(({onEnter:t,onEntering:e,onEntered:i,onExit:o,onExiting:r,onExited:n,addEndListener:s,children:a,childRef:f,...l},d)=>{const E=u.exports.useRef(null),R=mt(E,f),P=y=>{R(yt(y))},v=y=>S=>{y&&E.current&&y(E.current,S)},V=u.exports.useCallback(v(t),[t]),A=u.exports.useCallback(v(e),[e]),B=u.exports.useCallback(v(i),[i]),H=u.exports.useCallback(v(o),[o]),Y=u.exports.useCallback(v(r),[r]),Z=u.exports.useCallback(v(n),[n]),z=u.exports.useCallback(v(s),[s]);return _(c,{ref:d,...l,onEnter:V,onEntered:B,onEntering:A,onExit:H,onExited:Z,onExiting:Y,addEndListener:z,nodeRef:E,children:typeof a=="function"?(y,S)=>a(y,{...S,ref:P}):m.cloneElement(a,{ref:P})})}),gt={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Tt={[p]:"show",[h]:"show"},X=u.exports.forwardRef(({className:t,children:e,transitionClasses:i={},...o},r)=>{const n=u.exports.useCallback((s,a)=>{xt(s),o.onEnter==null||o.onEnter(s,a)},[o]);return _(bt,{ref:r,addEndListener:vt,...o,onEnter:n,childRef:e.ref,children:(s,a)=>u.exports.cloneElement(e,{...a,className:$("fade",t,e.props.className,Tt[s],i[s])})})});X.defaultProps=gt;X.displayName="Fade";function Ct(t){var e=u.exports.useRef(t);return u.exports.useEffect(function(){e.current=t},[t]),e}function Dt(t){var e=Ct(t);return u.exports.useCallback(function(){return e.current&&e.current.apply(e,arguments)},[e])}const Rt={"aria-label":N.exports.string,onClick:N.exports.func,variant:N.exports.oneOf(["white"])},St={"aria-label":"Close"},M=u.exports.forwardRef(({className:t,variant:e,...i},o)=>_("button",{ref:o,type:"button",className:$("btn-close",e&&`btn-close-${e}`,t),...i}));M.displayName="CloseButton";M.propTypes=Rt;M.defaultProps=St;export{M as C,p as E,X as F,bt as T,q as _,wt as a,w as b,Dt as c,mt as d,ut as e,ft as f,yt as g,vt as h,x as i,h as j,xt as k,W as l,tt as o,ct as r,G as s,Et as t,kt as u};
