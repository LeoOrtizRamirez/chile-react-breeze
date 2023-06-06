import{c as U,F as A,i as W,e as _,f as q,v as f,j as D}from"./hasClass-0c8d9638.js";import{r as v,a as i,j as z}from"./app-f6b4abf8.js";import{$ as G}from"./module-bc05a85b.js";import{T as O,m as I,S as C,f as H,g as J,b as Q}from"./Nav-3cfb2342.js";import{m as j,f as V}from"./ElementChildren-cfe2534a.js";function S({children:n,in:e,mountOnEnter:t,unmountOnExit:a}){const o=v.exports.useRef(e);return v.exports.useEffect(()=>{e&&(o.current=!0)},[e]),e?n:a||!o.current&&t?null:n}const X=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],Y=["activeKey","getControlledId","getControllerId"],Z=["as"];function h(n,e){if(n==null)return{};var t={},a=Object.keys(n),o,r;for(r=0;r<a.length;r++)o=a[r],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function R(n){let{active:e,eventKey:t,mountOnEnter:a,transition:o,unmountOnExit:r,role:s="tabpanel",onEnter:u,onEntering:c,onEntered:d,onExit:l,onExiting:p,onExited:E}=n,m=h(n,X);const b=v.exports.useContext(O);if(!b)return[Object.assign({},m,{role:s}),{eventKey:t,isActive:e,mountOnEnter:a,transition:o,unmountOnExit:r,onEnter:u,onEntering:c,onEntered:d,onExit:l,onExiting:p,onExited:E}];const{activeKey:x,getControlledId:y,getControllerId:T}=b,g=h(b,Y),$=I(t);return[Object.assign({},m,{role:s,id:y(t),"aria-labelledby":T(t)}),{eventKey:t,isActive:e==null&&$!=null?I(x)===$:e,transition:o||g.transition,mountOnEnter:a??g.mountOnEnter,unmountOnExit:r??g.unmountOnExit,onEnter:u,onEntering:c,onEntered:d,onExit:l,onExiting:p,onExited:E}]}const k=v.exports.forwardRef((n,e)=>{let{as:t="div"}=n,a=h(n,Z);const[o,{isActive:r,onEnter:s,onEntering:u,onEntered:c,onExit:d,onExiting:l,onExited:p,mountOnEnter:E,unmountOnExit:m,transition:b=S}]=R(a);return i(O.Provider,{value:null,children:i(C.Provider,{value:null,children:i(b,{in:r,onEnter:s,onEntering:u,onEntered:c,onExit:d,onExiting:l,onExited:p,mountOnEnter:E,unmountOnExit:m,children:i(t,Object.assign({},o,{ref:e,hidden:!r,"aria-hidden":!r}))})})})});k.displayName="TabPanel";const P=n=>{const{id:e,generateChildId:t,onSelect:a,activeKey:o,defaultActiveKey:r,transition:s,mountOnEnter:u,unmountOnExit:c,children:d}=n,[l,p]=U(o,r,a),E=G(e),m=v.exports.useMemo(()=>t||((x,y)=>E?`${E}-${y}-${x}`:null),[E,t]),b=v.exports.useMemo(()=>({onSelect:p,activeKey:l,transition:s,mountOnEnter:u||!1,unmountOnExit:c||!1,getControlledId:x=>m(x,"tabpane"),getControllerId:x=>m(x,"tab")}),[p,l,s,u,c,m]);return i(O.Provider,{value:b,children:i(C.Provider,{value:p||null,children:d})})};P.Panel=k;function K(n){return typeof n=="boolean"?n?A:S:n}const w=({transition:n,...e})=>i(P,{...e,transition:K(n)});w.displayName="TabContainer";const nn=w,B=W("tab-content"),F=v.exports.forwardRef(({bsPrefix:n,transition:e,...t},a)=>{const[{className:o,as:r="div",...s},{isActive:u,onEnter:c,onEntering:d,onEntered:l,onExit:p,onExiting:E,onExited:m,mountOnEnter:b,unmountOnExit:x,transition:y=A}]=R({...t,transition:K(e)}),T=_(n,"tab-pane");return i(O.Provider,{value:null,children:i(C.Provider,{value:null,children:i(y,{in:u,onEnter:c,onEntering:d,onEntered:l,onExit:p,onExiting:E,onExited:m,mountOnEnter:b,unmountOnExit:x,children:i(r,{...s,ref:a,className:q(o,T,u&&"active")})})})})});F.displayName="TabPane";const L=F,en={eventKey:f.exports.oneOfType([f.exports.string,f.exports.number]),title:f.exports.node.isRequired,disabled:f.exports.bool,tabClassName:f.exports.string,tabAttrs:f.exports.object},M=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};M.propTypes=en;const dn=Object.assign(M,{Container:nn,Content:B,Pane:L}),tn={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1};function on(n){let e;return V(n,t=>{e==null&&(e=t.props.eventKey)}),e}function rn(n){const{title:e,eventKey:t,disabled:a,tabClassName:o,tabAttrs:r,id:s}=n.props;return e==null?null:i(J,{as:"li",role:"presentation",children:i(Q,{as:"button",type:"button",eventKey:t,disabled:a,id:s,className:o,...r,children:e})})}const N=n=>{const{id:e,onSelect:t,transition:a,mountOnEnter:o,unmountOnExit:r,children:s,activeKey:u=on(s),...c}=D(n,{activeKey:"onSelect"});return z(P,{id:e,activeKey:u,onSelect:t,transition:K(a),mountOnEnter:o,unmountOnExit:r,children:[i(H,{...c,role:"tablist",as:"ul",children:j(s,rn)}),i(B,{children:j(s,d=>{const l={...d.props};return delete l.title,delete l.disabled,delete l.tabClassName,delete l.tabAttrs,i(L,{...l})})})]})};N.defaultProps=tn;N.displayName="Tabs";const pn=N;export{pn as T,dn as a};
