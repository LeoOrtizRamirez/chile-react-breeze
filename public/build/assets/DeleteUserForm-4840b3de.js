import{$ as m,r as i,d as He,a as g,j as M,u as Ue}from"./app-652f3706.js";import{I as je}from"./InputError-e8220f93.js";import{I as _e}from"./InputLabel-f9741925.js";import{a as Y,s as H,e as ne,u as A,b as oe,C as $,$ as P,o as y,y as T,p as We,t as le,f as be,T as Ge,S as pe,c as Ye,d as me,m as qe,J as X}from"./transition-ef0aed2f.js";import{S as Ve}from"./SecondaryButton-6ff38ff0.js";import{T as ze}from"./TextInput-b5c89f69.js";var ve;let Je=0;function ge(){return++Je}let I=(ve=m.useId)!=null?ve:function(){let e=Y(),[t,r]=m.useState(e?ge:null);return H(()=>{t===null&&r(ge())},[t]),t!=null?""+t:void 0};function ae(e){return ne?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Q=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var S=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(S||{}),ye=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ye||{}),Xe=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Xe||{});function Ke(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Q)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var $e=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))($e||{});function Qe(e,t=0){var r;return e===((r=ae(e))==null?void 0:r.body)?!1:A(t,{[0](){return e.matches(Q)},[1](){let n=e;for(;n!==null;){if(n.matches(Q))return!0;n=n.parentElement}return!1}})}function N(e){e==null||e.focus({preventScroll:!0})}let Ze=["textarea","input"].join(",");function et(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Ze))!=null?r:!1}function tt(e,t=r=>r){return e.slice().sort((r,n)=>{let o=t(r),a=t(n);if(o===null||a===null)return 0;let l=o.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function _(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:o=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?r?tt(e):e:Ke(e);o.length>0&&(l=l.filter(p=>!o.includes(p))),n=n??a.activeElement;let s=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(n))-1;if(t&4)return Math.max(0,l.indexOf(n))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,f=l.length,v;do{if(c>=f||c+f<=0)return 0;let p=u+c;if(t&16)p=(p+f)%f;else{if(p<0)return 3;if(p>=f)return 1}v=l[p],v==null||v.focus(d),c+=s}while(v!==a.activeElement);return t&6&&et(v)&&v.select(),v.hasAttribute("tabindex")||v.setAttribute("tabindex","0"),2}function K(e,t,r){let n=oe(t);i.exports.useEffect(()=>{function o(a){n.current(a)}return document.addEventListener(e,o,r),()=>document.removeEventListener(e,o,r)},[e,r])}function rt(e,t,r=!0){let n=i.exports.useRef(!1);i.exports.useEffect(()=>{requestAnimationFrame(()=>{n.current=r})},[r]);function o(l,s){if(!n.current||l.defaultPrevented)return;let u=function c(f){return typeof f=="function"?c(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e),d=s(l);if(d!==null&&d.getRootNode().contains(d)){for(let c of u){if(c===null)continue;let f=c instanceof HTMLElement?c:c.current;if(f!=null&&f.contains(d)||l.composed&&l.composedPath().includes(f))return}return!Qe(d,$e.Loose)&&d.tabIndex!==-1&&l.preventDefault(),t(l,d)}}let a=i.exports.useRef(null);K("mousedown",l=>{var s,u;n.current&&(a.current=((u=(s=l.composedPath)==null?void 0:s.call(l))==null?void 0:u[0])||l.target)},!0),K("click",l=>{!a.current||(o(l,()=>a.current),a.current=null)},!0),K("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function nt(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let n=(t==null?void 0:t.getAttribute("disabled"))==="";return n&&ot(r)?!1:n}function ot(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let lt="div";var W=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(W||{});let Z=$(function(e,t){let{features:r=1,...n}=e,o={ref:t,"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return P({ourProps:o,theirProps:n,slot:{},defaultTag:lt,name:"Hidden"})});var Pe=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Pe||{});function Te(e,t){let r=i.exports.useRef([]),n=y(e);i.exports.useEffect(()=>{let o=[...r.current];for(let[a,l]of t.entries())if(r.current[a]!==l){let s=n(t,o);return r.current=t,s}},[n,...t])}function at(e,t,r){let n=oe(t);i.exports.useEffect(()=>{function o(a){n.current(a)}return window.addEventListener(e,o,r),()=>window.removeEventListener(e,o,r)},[e,r])}var B=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(B||{});function it(){let e=i.exports.useRef(0);return at("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function q(...e){return i.exports.useMemo(()=>ae(...e),[...e])}function ie(e,t,r,n){let o=oe(r);i.exports.useEffect(()=>{e=e??window;function a(l){o.current(l)}return e.addEventListener(t,a,n),()=>e.removeEventListener(t,a,n)},[e,t,n])}let st="div";var Fe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Fe||{});let O=Object.assign($(function(e,t){let r=i.exports.useRef(null),n=T(r,t),{initialFocus:o,containers:a,features:l=30,...s}=e;Y()||(l=1);let u=q(r);ut({ownerDocument:u},Boolean(l&16));let d=ct({ownerDocument:u,container:r,initialFocus:o},Boolean(l&2));dt({ownerDocument:u,container:r,containers:a,previousActiveElement:d},Boolean(l&8));let c=it(),f=y(w=>{let x=r.current;x&&(F=>F())(()=>{A(c.current,{[B.Forwards]:()=>_(x,S.First,{skipElements:[w.relatedTarget]}),[B.Backwards]:()=>_(x,S.Last,{skipElements:[w.relatedTarget]})})})}),v=We(),p=i.exports.useRef(!1),V={ref:n,onKeyDown(w){w.key=="Tab"&&(p.current=!0,v.requestAnimationFrame(()=>{p.current=!1}))},onBlur(w){let x=new Set(a==null?void 0:a.current);x.add(r);let F=w.relatedTarget;!F||F.dataset.headlessuiFocusGuard!=="true"&&(De(x,F)||(p.current?_(r.current,A(c.current,{[B.Forwards]:()=>S.Next,[B.Backwards]:()=>S.Previous})|S.WrapAround,{relativeTo:w.target}):w.target instanceof HTMLElement&&N(w.target)))}};return m.createElement(m.Fragment,null,Boolean(l&4)&&m.createElement(Z,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:W.Focusable}),P({ourProps:V,theirProps:s,defaultTag:st,name:"FocusTrap"}),Boolean(l&4)&&m.createElement(Z,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:W.Focusable}))}),{features:Fe});function ut({ownerDocument:e},t){let r=i.exports.useRef(null);ie(e==null?void 0:e.defaultView,"focusout",o=>{!t||r.current||(r.current=o.target)},!0),Te(()=>{t||((e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&N(r.current),r.current=null)},[t]);let n=i.exports.useRef(!1);i.exports.useEffect(()=>(n.current=!1,()=>{n.current=!0,le(()=>{!n.current||(N(r.current),r.current=null)})}),[])}function ct({ownerDocument:e,container:t,initialFocus:r},n){let o=i.exports.useRef(null),a=be();return Te(()=>{if(!n)return;let l=t.current;!l||le(()=>{if(!a.current)return;let s=e==null?void 0:e.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===s){o.current=s;return}}else if(l.contains(s)){o.current=s;return}r!=null&&r.current?N(r.current):_(l,S.First)===ye.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[n]),o}function dt({ownerDocument:e,container:t,containers:r,previousActiveElement:n},o){let a=be();ie(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!a.current)return;let s=new Set(r==null?void 0:r.current);s.add(t);let u=n.current;if(!u)return;let d=l.target;d&&d instanceof HTMLElement?De(s,d)?(n.current=d,N(d)):(l.preventDefault(),l.stopPropagation(),N(u)):N(n.current)},!0)}function De(e,t){var r;for(let n of e)if((r=n.current)!=null&&r.contains(t))return!0;return!1}let k=new Set,D=new Map;function he(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function we(e){let t=D.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function ft(e,t=!0){H(()=>{if(!t||!e.current)return;let r=e.current,n=ae(r);if(n){k.add(r);for(let o of D.keys())o.contains(r)&&(we(o),D.delete(o));return n.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement){for(let a of k)if(o.contains(a))return;k.size===1&&(D.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),he(o))}}),()=>{if(k.delete(r),k.size>0)n.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement&&!D.has(o)){for(let a of k)if(o.contains(a))return;D.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),he(o)}});else for(let o of D.keys())we(o),D.delete(o)}}},[t])}let Se=i.exports.createContext(!1);function pt(){return i.exports.useContext(Se)}function ee(e){return m.createElement(Se.Provider,{value:e.force},e.children)}function mt(e){let t=pt(),r=i.exports.useContext(Ae),n=q(e),[o,a]=i.exports.useState(()=>{if(!t&&r!==null||ne)return null;let l=n==null?void 0:n.getElementById("headlessui-portal-root");if(l)return l;if(n===null)return null;let s=n.createElement("div");return s.setAttribute("id","headlessui-portal-root"),n.body.appendChild(s)});return i.exports.useEffect(()=>{o!==null&&(n!=null&&n.body.contains(o)||n==null||n.body.appendChild(o))},[o,n]),i.exports.useEffect(()=>{t||r!==null&&a(r.current)},[r,a,t]),o}let vt=i.exports.Fragment,gt=$(function(e,t){let r=e,n=i.exports.useRef(null),o=T(Ge(c=>{n.current=c}),t),a=q(n),l=mt(n),[s]=i.exports.useState(()=>{var c;return ne?null:(c=a==null?void 0:a.createElement("div"))!=null?c:null}),u=Y(),d=i.exports.useRef(!1);return H(()=>{if(d.current=!1,!(!l||!s))return l.contains(s)||(s.setAttribute("data-headlessui-portal",""),l.appendChild(s)),()=>{d.current=!0,le(()=>{var c;!d.current||!l||!s||(l.removeChild(s),l.childNodes.length<=0&&((c=l.parentElement)==null||c.removeChild(l)))})}},[l,s]),u?!l||!s?null:He.exports.createPortal(P({ourProps:{ref:o},theirProps:r,defaultTag:vt,name:"Portal"}),s):null}),ht=i.exports.Fragment,Ae=i.exports.createContext(null),wt=$(function(e,t){let{target:r,...n}=e,o={ref:T(t)};return m.createElement(Ae.Provider,{value:r},P({ourProps:o,theirProps:n,defaultTag:ht,name:"Popover.Group"}))}),te=Object.assign(gt,{Group:wt}),Ne=i.exports.createContext(null);function Ce(){let e=i.exports.useContext(Ne);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ce),t}return e}function xt(){let[e,t]=i.exports.useState([]);return[e.length>0?e.join(" "):void 0,i.exports.useMemo(()=>function(r){let n=y(a=>(t(l=>[...l,a]),()=>t(l=>{let s=l.slice(),u=s.indexOf(a);return u!==-1&&s.splice(u,1),s}))),o=i.exports.useMemo(()=>({register:n,slot:r.slot,name:r.name,props:r.props}),[n,r.slot,r.name,r.props]);return m.createElement(Ne.Provider,{value:o},r.children)},[t])]}let Et="p",bt=$(function(e,t){let r=I(),{id:n=`headlessui-description-${r}`,...o}=e,a=Ce(),l=T(t);H(()=>a.register(n),[n,a.register]);let s={ref:l,...a.props,id:n};return P({ourProps:s,theirProps:o,slot:a.slot||{},defaultTag:Et,name:a.name||"Description"})}),se=i.exports.createContext(()=>{});se.displayName="StackContext";var re=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(re||{});function yt(){return i.exports.useContext(se)}function $t({children:e,onUpdate:t,type:r,element:n,enabled:o}){let a=yt(),l=y((...s)=>{t==null||t(...s),a(...s)});return H(()=>{let s=o===void 0||o===!0;return s&&l(0,r,n),()=>{s&&l(1,r,n)}},[l,r,n,o]),m.createElement(se.Provider,{value:l},e)}function Pt(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var Tt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Tt||{}),Ft=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Ft||{});let Dt={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},G=i.exports.createContext(null);G.displayName="DialogContext";function U(e){let t=i.exports.useContext(G);if(t===null){let r=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,U),r}return t}function St(e,t,r=()=>[document.body]){i.exports.useEffect(()=>{var n;if(!t||!e)return;let o=qe();function a(u,d,c){let f=u.style.getPropertyValue(d);return Object.assign(u.style,{[d]:c}),o.add(()=>{Object.assign(u.style,{[d]:f})})}let l=e.documentElement,s=((n=e.defaultView)!=null?n:window).innerWidth-l.clientWidth;if(a(l,"overflow","hidden"),s>0){let u=l.clientWidth-l.offsetWidth,d=s-u;a(l,"paddingRight",`${d}px`)}if(Pt()){let u=window.pageYOffset;a(document.body,"marginTop",`-${u}px`),window.scrollTo(0,0),o.addEventListener(e,"touchmove",d=>{d.target instanceof HTMLElement&&!r().some(c=>c.contains(d.target))&&d.preventDefault()},{passive:!1}),o.add(()=>{window.scrollTo(0,window.pageYOffset+u)})}return o.dispose},[e,t])}function At(e,t){return A(t.type,Dt,e,t)}let Nt="div",Ct=pe.RenderStrategy|pe.Static,Rt=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-${r}`,open:o,onClose:a,initialFocus:l,__demoMode:s=!1,...u}=e,[d,c]=i.exports.useState(0),f=Ye();o===void 0&&f!==null&&(o=A(f,{[me.Open]:!0,[me.Closed]:!1}));let v=i.exports.useRef(new Set),p=i.exports.useRef(null),V=T(p,t),w=i.exports.useRef(null),x=q(p),F=e.hasOwnProperty("open")||f!==null,ue=e.hasOwnProperty("onClose");if(!F&&!ue)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!F)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!ue)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let E=o?0:1,[C,Re]=i.exports.useReducer(At,{titleId:null,descriptionId:null,panelRef:i.exports.createRef()}),R=y(()=>a(!1)),ce=y(h=>Re({type:0,id:h})),z=Y()?s?!1:E===0:!1,j=d>1,Le=i.exports.useContext(G)!==null,ke=j?"parent":"leaf";ft(p,j?z:!1);let de=y(()=>{var h,L;return[...Array.from((h=x==null?void 0:x.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?h:[]).filter(b=>!(!(b instanceof HTMLElement)||b.contains(w.current)||C.panelRef.current&&b.contains(C.panelRef.current))),(L=C.panelRef.current)!=null?L:p.current]});rt(()=>de(),R,z&&!j),ie(x==null?void 0:x.defaultView,"keydown",h=>{h.defaultPrevented||h.key===Pe.Escape&&E===0&&(j||(h.preventDefault(),h.stopPropagation(),R()))}),St(x,E===0&&!Le,de),i.exports.useEffect(()=>{if(E!==0||!p.current)return;let h=new IntersectionObserver(L=>{for(let b of L)b.boundingClientRect.x===0&&b.boundingClientRect.y===0&&b.boundingClientRect.width===0&&b.boundingClientRect.height===0&&R()});return h.observe(p.current),()=>h.disconnect()},[E,p,R]);let[Me,Ie]=xt(),Oe=i.exports.useMemo(()=>[{dialogState:E,close:R,setTitleId:ce},C],[E,C,R,ce]),fe=i.exports.useMemo(()=>({open:E===0}),[E]),Be={ref:V,id:n,role:"dialog","aria-modal":E===0?!0:void 0,"aria-labelledby":C.titleId,"aria-describedby":Me};return m.createElement($t,{type:"Dialog",enabled:E===0,element:p,onUpdate:y((h,L,b)=>{L==="Dialog"&&A(h,{[re.Add](){v.current.add(b),c(J=>J+1)},[re.Remove](){v.current.add(b),c(J=>J-1)}})})},m.createElement(ee,{force:!0},m.createElement(te,null,m.createElement(G.Provider,{value:Oe},m.createElement(te.Group,{target:p},m.createElement(ee,{force:!1},m.createElement(Ie,{slot:fe,name:"Dialog.Description"},m.createElement(O,{initialFocus:l,containers:v,features:z?A(ke,{parent:O.features.RestoreFocus,leaf:O.features.All&~O.features.FocusLock}):O.features.None},P({ourProps:Be,theirProps:u,slot:fe,defaultTag:Nt,features:Ct,visible:E===0,name:"Dialog"})))))))),m.createElement(Z,{features:W.Hidden,ref:w}))}),Lt="div",kt=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-overlay-${r}`,...o}=e,[{dialogState:a,close:l}]=U("Dialog.Overlay"),s=T(t),u=y(c=>{if(c.target===c.currentTarget){if(nt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),l()}}),d=i.exports.useMemo(()=>({open:a===0}),[a]);return P({ourProps:{ref:s,id:n,"aria-hidden":!0,onClick:u},theirProps:o,slot:d,defaultTag:Lt,name:"Dialog.Overlay"})}),Mt="div",It=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-backdrop-${r}`,...o}=e,[{dialogState:a},l]=U("Dialog.Backdrop"),s=T(t);i.exports.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let u=i.exports.useMemo(()=>({open:a===0}),[a]);return m.createElement(ee,{force:!0},m.createElement(te,null,P({ourProps:{ref:s,id:n,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:Mt,name:"Dialog.Backdrop"})))}),Ot="div",Bt=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-panel-${r}`,...o}=e,[{dialogState:a},l]=U("Dialog.Panel"),s=T(t,l.panelRef),u=i.exports.useMemo(()=>({open:a===0}),[a]),d=y(c=>{c.stopPropagation()});return P({ourProps:{ref:s,id:n,onClick:d},theirProps:o,slot:u,defaultTag:Ot,name:"Dialog.Panel"})}),Ht="h2",Ut=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-title-${r}`,...o}=e,[{dialogState:a,setTitleId:l}]=U("Dialog.Title"),s=T(t);i.exports.useEffect(()=>(l(n),()=>l(null)),[n,l]);let u=i.exports.useMemo(()=>({open:a===0}),[a]);return P({ourProps:{ref:s,id:n},theirProps:o,slot:u,defaultTag:Ht,name:"Dialog.Title"})}),xe=Object.assign(Rt,{Backdrop:It,Panel:Bt,Overlay:kt,Title:Ut,Description:bt});function Ee({type:e="submit",className:t="",processing:r,children:n,onClick:o}){return g("button",{type:e,onClick:o,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${r&&"opacity-25"} `+t,disabled:r,children:n})}function jt({children:e,show:t=!1,maxWidth:r="2xl",closeable:n=!0,onClose:o=()=>{}}){const a=()=>{n&&o()},l={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[r];return g(X,{show:t,as:i.exports.Fragment,leave:"duration-200",children:M(xe,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[g(X.Child,{as:i.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:g("div",{className:"absolute inset-0 bg-gray-500/75"})}),g(X.Child,{as:i.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:g(xe.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${l}`,children:e})})]})})}function zt({className:e}){const[t,r]=i.exports.useState(!1),n=i.exports.useRef(),{data:o,setData:a,delete:l,processing:s,reset:u,errors:d}=Ue({password:""}),c=()=>{r(!0)},f=p=>{p.preventDefault(),l(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>v(),onError:()=>n.current.focus(),onFinish:()=>u()})},v=()=>{r(!1),u()};return M("section",{className:`space-y-6 ${e}`,children:[M("header",{children:[g("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),g("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),g(Ee,{onClick:c,children:"Delete Account"}),g(jt,{show:t,onClose:v,children:M("form",{onSubmit:f,className:"p-6",children:[g("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),g("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),M("div",{className:"mt-6",children:[g(_e,{for:"password",value:"Password",className:"sr-only"}),g(ze,{id:"password",type:"password",name:"password",ref:n,value:o.password,handleChange:p=>a("password",p.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),g(je,{message:d.password,className:"mt-2"})]}),M("div",{className:"mt-6 flex justify-end",children:[g(Ve,{onClick:v,children:"Cancel"}),g(Ee,{className:"ml-3",processing:s,children:"Delete Account"})]})]})})]})}export{zt as default};
