import{a as ne,u as X,c as S,e as ct}from"./createWithBsPrefix-72024c1a.js";import{r as s,a as g,F as Ne,m as dt,j as De}from"./app-cb5b5f2f.js";import{u as ut,a as ft,c as Te,b as pt,h as ht,d as gt}from"./hasClass-2fa88965.js";import{u as N,d as Ke,e as he,o as Le,s as z,b as vt,l as Oe,c as Pe,C as mt,r as Me,F as je,f as xt,t as yt}from"./font-unicolor-9cb63e75.js";var ke={exports:{}},fe={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(a){function o(i,c,p,v,l,u){var d=v||"<<anonymous>>",x=u||p;if(c[p]==null)return i?new Error("Required "+l+" `"+x+"` was not specified "+("in `"+d+"`.")):null;for(var m=arguments.length,y=Array(m>6?m-6:0),b=6;b<m;b++)y[b-6]=arguments[b];return a.apply(void 0,[c,p,d,l,x].concat(y))}var r=o.bind(null,!1);return r.isRequired=o.bind(null,!0),r}e.exports=t.default})(fe,fe.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=fe.exports,a=o(n);function o(i){return i&&i.__esModule?i:{default:i}}function r(){for(var i=arguments.length,c=Array(i),p=0;p<i;p++)c[p]=arguments[p];function v(){for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];var x=null;return c.forEach(function(m){if(x==null){var y=m.apply(void 0,u);y!=null&&(x=y)}}),x}return(0,a.default)(v)}e.exports=t.default})(ke,ke.exports);var bt=Function.prototype.bind.call(Function.prototype.call,[].slice);function K(e,t){return bt(e.querySelectorAll(t))}function Ct(){var e=s.exports.useReducer(function(n){return!n},!1),t=e[1];return t}const ge=s.exports.createContext(null);ge.displayName="NavContext";const pe=s.exports.createContext(null),ve=(e,t=null)=>e!=null?String(e):t||null,Fe=s.exports.createContext(null),Et="data-rr-ui-",wt="rrUi";function oe(e){return`${Et}${e}`}function Rt(e){return`${wt}${e}`}const Nt=["as","disabled"];function Tt(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ot(e){return!e||e.trim()==="#"}function We({tagName:e,disabled:t,href:n,target:a,rel:o,role:r,onClick:i,tabIndex:c=0,type:p}){e||(n!=null||a!=null||o!=null?e="a":e="button");const v={tagName:e};if(e==="button")return[{type:p||"button",disabled:t},v];const l=d=>{if((t||e==="a"&&Ot(n))&&d.preventDefault(),t){d.stopPropagation();return}i==null||i(d)},u=d=>{d.key===" "&&(d.preventDefault(),l(d))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:r??"button",disabled:void 0,tabIndex:t?void 0:c,href:n,target:e==="a"?a:void 0,"aria-disabled":t||void 0,rel:e==="a"?o:void 0,onClick:l,onKeyDown:u},v]}const _e=s.exports.forwardRef((e,t)=>{let{as:n,disabled:a}=e,o=Tt(e,Nt);const[r,{tagName:i}]=We(Object.assign({tagName:n,disabled:a},o));return g(i,Object.assign({},o,r,{ref:t}))});_e.displayName="Button";const Mt=["as","active","eventKey"];function kt(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function He({key:e,onClick:t,active:n,id:a,role:o,disabled:r}){const i=s.exports.useContext(pe),c=s.exports.useContext(ge),p=s.exports.useContext(Fe);let v=n;const l={role:o};if(c){!o&&c.role==="tablist"&&(l.role="tab");const u=c.getControllerId(e??null),d=c.getControlledId(e??null);l[oe("event-key")]=e,l.id=u||a,v=n==null&&e!=null?c.activeKey===e:n,(v||!(p!=null&&p.unmountOnExit)&&!(p!=null&&p.mountOnEnter))&&(l["aria-controls"]=d)}return l.role==="tab"&&(l["aria-selected"]=v,v||(l.tabIndex=-1),r&&(l.tabIndex=-1,l["aria-disabled"]=!0)),l.onClick=N(u=>{r||(t==null||t(u),e!=null&&i&&!u.isPropagationStopped()&&i(e,u))}),[l,{isActive:v}]}const Ue=s.exports.forwardRef((e,t)=>{let{as:n=_e,active:a,eventKey:o}=e,r=kt(e,Mt);const[i,c]=He(Object.assign({key:ve(o,r.href),active:a},r));return i[oe("active")]=c.isActive,g(n,Object.assign({},r,i,{ref:t}))});Ue.displayName="NavItem";const At=["as","onSelect","activeKey","role","onKeyDown"];function St(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const Ae=()=>{},Se=oe("event-key"),qe=s.exports.forwardRef((e,t)=>{let{as:n="div",onSelect:a,activeKey:o,role:r,onKeyDown:i}=e,c=St(e,At);const p=Ct(),v=s.exports.useRef(!1),l=s.exports.useContext(pe),u=s.exports.useContext(Fe);let d,x;u&&(r=r||"tablist",o=u.activeKey,d=u.getControlledId,x=u.getControllerId);const m=s.exports.useRef(null),y=C=>{const w=m.current;if(!w)return null;const O=K(w,`[${Se}]:not([aria-disabled=true])`),k=w.querySelector("[aria-selected=true]");if(!k||k!==document.activeElement)return null;const $=O.indexOf(k);if($===-1)return null;let R=$+C;return R>=O.length&&(R=0),R<0&&(R=O.length-1),O[R]},b=(C,w)=>{C!=null&&(a==null||a(C,w),l==null||l(C,w))},T=C=>{if(i==null||i(C),!u)return;let w;switch(C.key){case"ArrowLeft":case"ArrowUp":w=y(-1);break;case"ArrowRight":case"ArrowDown":w=y(1);break;default:return}w&&(C.preventDefault(),b(w.dataset[Rt("EventKey")]||null,C),v.current=!0,p())};s.exports.useEffect(()=>{if(m.current&&v.current){const C=m.current.querySelector(`[${Se}][aria-selected=true]`);C==null||C.focus()}v.current=!1});const q=Ke(t,m);return g(pe.Provider,{value:b,children:g(ge.Provider,{value:{role:r,activeKey:ve(o),getControlledId:d||Ae,getControllerId:x||Ae},children:g(n,Object.assign({},c,{onKeyDown:T,ref:q,role:r}))})})});qe.displayName="Nav";const $t=Object.assign(qe,{Item:Ue}),Ve=s.exports.createContext(null);Ve.displayName="NavbarContext";const Ge=s.exports.createContext(null);Ge.displayName="CardHeaderContext";const It=ne("nav-item");function Bt(e){var t=s.exports.useRef(null);return s.exports.useEffect(function(){t.current=e}),t.current}const Dt=["onKeyDown"];function Kt(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Lt(e){return!e||e.trim()==="#"}const ze=s.exports.forwardRef((e,t)=>{let{onKeyDown:n}=e,a=Kt(e,Dt);const[o]=We(Object.assign({tagName:"a"},a)),r=N(i=>{o.onKeyDown(i),n==null||n(i)});return Lt(a.href)||a.role==="button"?g("a",Object.assign({ref:t},a,o,{onKeyDown:r})):g("a",Object.assign({ref:t},a,{onKeyDown:n}))});ze.displayName="Anchor";const Pt={disabled:!1},me=s.exports.forwardRef(({bsPrefix:e,className:t,as:n=ze,active:a,eventKey:o,...r},i)=>{e=X(e,"nav-link");const[c,p]=He({key:ve(o,r.href),active:a,...r});return g(n,{...r,...c,ref:i,className:S(t,e,r.disabled&&"disabled",p.isActive&&"active")})});me.displayName="NavLink";me.defaultProps=Pt;const jt=me,Ft={justify:!1,fill:!1},xe=s.exports.forwardRef((e,t)=>{const{as:n="div",bsPrefix:a,variant:o,fill:r,justify:i,navbar:c,navbarScroll:p,className:v,activeKey:l,...u}=ut(e,{activeKey:"onSelect"}),d=X(a,"nav");let x,m,y=!1;const b=s.exports.useContext(Ve),T=s.exports.useContext(Ge);return b?(x=b.bsPrefix,y=c??!0):T&&({cardHeaderBsPrefix:m}=T),g($t,{as:n,ref:t,activeKey:l,className:S(v,{[d]:!y,[`${x}-nav`]:y,[`${x}-nav-scroll`]:y&&p,[`${m}-${o}`]:!!m,[`${d}-${o}`]:!!o,[`${d}-fill`]:r,[`${d}-justified`]:i}),...u})});xe.displayName="Nav";xe.defaultProps=Ft;const pn=Object.assign(xe,{Item:It,Link:jt});var te;function $e(e){if((!te&&te!==0||e)&&he){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),te=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return te}function ce(e){e===void 0&&(e=Le());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function Wt(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const Ie=oe("modal-open");class ye{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:a=!1}={}){this.handleContainerOverflow=n,this.isRTL=a,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return Wt(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},a=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[a]:o.style[a]},t.scrollBarWidth&&(n[a]=`${parseInt(z(o,a)||"0",10)+t.scrollBarWidth}px`),o.setAttribute(Ie,""),z(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute(Ie),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const _t=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Ht(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}let de;function Ut(e){return de||(de=new ye({ownerDocument:e==null?void 0:e.document})),de}function qt(e){const t=pt(),n=e||Ut(t),a=s.exports.useRef({dialog:null,backdrop:null});return Object.assign(a.current,{add:()=>n.add(a.current),remove:()=>n.remove(a.current),isTopModal:()=>n.isTopModal(a.current),setDialogRef:s.exports.useCallback(o=>{a.current.dialog=o},[]),setBackdropRef:s.exports.useCallback(o=>{a.current.backdrop=o},[])})}const Xe=s.exports.forwardRef((e,t)=>{let{show:n=!1,role:a="dialog",className:o,style:r,children:i,backdrop:c=!0,keyboard:p=!0,onBackdropClick:v,onEscapeKeyDown:l,transition:u,backdropTransition:d,autoFocus:x=!0,enforceFocus:m=!0,restoreFocus:y=!0,restoreFocusOptions:b,renderDialog:T,renderBackdrop:q=h=>g("div",Object.assign({},h)),manager:C,container:w,onShow:O,onHide:k=()=>{},onExit:$,onExited:R,onExiting:Y,onEnter:J,onEntering:Q,onEntered:Z}=e,ee=Ht(e,_t);const L=ft(w),E=qt(C),re=vt(),ae=Bt(n),[I,P]=s.exports.useState(!n),A=s.exports.useRef(null);s.exports.useImperativeHandle(t,()=>E,[E]),he&&!ae&&n&&(A.current=ce()),!u&&!n&&!I?P(!0):n&&I&&P(!1);const j=N(()=>{if(E.add(),V.current=Oe(document,"keydown",ie),F.current=Oe(document,"focus",()=>setTimeout(B),!0),O&&O(),x){const h=ce(document);E.dialog&&h&&!Te(E.dialog,h)&&(A.current=h,E.dialog.focus())}}),M=N(()=>{if(E.remove(),V.current==null||V.current(),F.current==null||F.current(),y){var h;(h=A.current)==null||h.focus==null||h.focus(b),A.current=null}});s.exports.useEffect(()=>{!n||!L||j()},[n,L,j]),s.exports.useEffect(()=>{I&&M()},[I,M]),Pe(()=>{M()});const B=N(()=>{if(!m||!re()||!E.isTopModal())return;const h=ce();E.dialog&&h&&!Te(E.dialog,h)&&E.dialog.focus()}),se=N(h=>{h.target===h.currentTarget&&(v==null||v(h),c===!0&&k())}),ie=N(h=>{p&&h.keyCode===27&&E.isTopModal()&&(l==null||l(h),h.defaultPrevented||k())}),F=s.exports.useRef(),V=s.exports.useRef(),le=(...h)=>{P(!0),R==null||R(...h)},W=u;if(!L||!(n||W&&!I))return null;const G=Object.assign({role:a,ref:E.setDialogRef,"aria-modal":a==="dialog"?!0:void 0},ee,{style:r,className:o,tabIndex:-1});let D=T?T(G):g("div",Object.assign({},G,{children:s.exports.cloneElement(i,{role:"document"})}));W&&(D=g(W,{appear:!0,unmountOnExit:!0,in:!!n,onExit:$,onExiting:Y,onExited:le,onEnter:J,onEntering:Q,onEntered:Z,children:D}));let _=null;if(c){const h=d;_=q({ref:E.setBackdropRef,onClick:se}),h&&(_=g(h,{appear:!0,in:!!n,children:_}))}return g(Ne,{children:dt.createPortal(De(Ne,{children:[_,D]}),L)})});Xe.displayName="Modal";const Vt=Object.assign(Xe,{Manager:ye});function Gt(e,t){e.classList?e.classList.add(t):ht(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function Be(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function zt(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Be(e.className,t):e.setAttribute("class",Be(e.className&&e.className.baseVal||"",t))}const U={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Xt extends ye{adjustAndStore(t,n,a){const o=n.style[t];n.dataset[t]=o,z(n,{[t]:`${parseFloat(z(n,t))+a}px`})}restore(t,n){const a=n.dataset[t];a!==void 0&&(delete n.dataset[t],z(n,{[t]:a}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(Gt(n,"modal-open"),!t.scrollBarWidth)return;const a=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";K(n,U.FIXED_CONTENT).forEach(r=>this.adjustAndStore(a,r,t.scrollBarWidth)),K(n,U.STICKY_CONTENT).forEach(r=>this.adjustAndStore(o,r,-t.scrollBarWidth)),K(n,U.NAVBAR_TOGGLER).forEach(r=>this.adjustAndStore(o,r,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();zt(n,"modal-open");const a=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";K(n,U.FIXED_CONTENT).forEach(r=>this.restore(a,r)),K(n,U.STICKY_CONTENT).forEach(r=>this.restore(o,r)),K(n,U.NAVBAR_TOGGLER).forEach(r=>this.restore(o,r))}}let ue;function Yt(e){return ue||(ue=new Xt(e)),ue}const Jt=ne("modal-body"),Ye=s.exports.createContext({onHide(){}}),Je=s.exports.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:a,size:o,fullscreen:r,children:i,scrollable:c,...p},v)=>{e=X(e,"modal");const l=`${e}-dialog`,u=typeof r=="string"?`${e}-fullscreen-${r}`:`${e}-fullscreen`;return g("div",{...p,ref:v,className:S(l,t,o&&`${e}-${o}`,a&&`${l}-centered`,c&&`${l}-scrollable`,r&&u),children:g("div",{className:S(`${e}-content`,n),children:i})})});Je.displayName="ModalDialog";const Qe=Je,Qt=ne("modal-footer"),Zt={closeLabel:"Close",closeButton:!1},Ze=s.exports.forwardRef(({closeLabel:e,closeVariant:t,closeButton:n,onHide:a,children:o,...r},i)=>{const c=s.exports.useContext(Ye),p=N(()=>{c==null||c.onHide(),a==null||a()});return De("div",{ref:i,...r,children:[o,n&&g(mt,{"aria-label":e,variant:t,onClick:p})]})});Ze.defaultProps=Zt;const en={closeLabel:"Close",closeButton:!1},be=s.exports.forwardRef(({bsPrefix:e,className:t,...n},a)=>(e=X(e,"modal-header"),g(Ze,{ref:a,...n,className:S(t,e)})));be.displayName="ModalHeader";be.defaultProps=en;const tn=be,nn=e=>s.exports.forwardRef((t,n)=>g("div",{...t,ref:n,className:S(t.className,e)})),on=nn("h4"),rn=ne("modal-title",{Component:on}),an={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:Qe};function sn(e){return g(je,{...e,timeout:null})}function ln(e){return g(je,{...e,timeout:null})}const Ce=s.exports.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:a,contentClassName:o,children:r,dialogAs:i,"aria-labelledby":c,"aria-describedby":p,"aria-label":v,show:l,animation:u,backdrop:d,keyboard:x,onEscapeKeyDown:m,onShow:y,onHide:b,container:T,autoFocus:q,enforceFocus:C,restoreFocus:w,restoreFocusOptions:O,onEntered:k,onExit:$,onExiting:R,onEnter:Y,onEntering:J,onExited:Q,backdropClassName:Z,manager:ee,...L},E)=>{const[re,ae]=s.exports.useState({}),[I,P]=s.exports.useState(!1),A=s.exports.useRef(!1),j=s.exports.useRef(!1),M=s.exports.useRef(null),[B,se]=gt(),ie=Ke(E,se),F=N(b),V=ct();e=X(e,"modal");const le=s.exports.useMemo(()=>({onHide:F}),[F]);function W(){return ee||Yt({isRTL:V})}function G(f){if(!he)return;const H=W().getScrollbarWidth()>0,Re=f.scrollHeight>Le(f).documentElement.clientHeight;ae({paddingRight:H&&!Re?$e():void 0,paddingLeft:!H&&Re?$e():void 0})}const D=N(()=>{B&&G(B.dialog)});Pe(()=>{Me(window,"resize",D),M.current==null||M.current()});const _=()=>{A.current=!0},h=f=>{A.current&&B&&f.target===B.dialog&&(j.current=!0),A.current=!1},Ee=()=>{P(!0),M.current=yt(B.dialog,()=>{P(!1)})},et=f=>{f.target===f.currentTarget&&Ee()},tt=f=>{if(d==="static"){et(f);return}if(j.current||f.target!==f.currentTarget){j.current=!1;return}b==null||b()},nt=f=>{x?m==null||m(f):(f.preventDefault(),d==="static"&&Ee())},ot=(f,H)=>{f&&G(f),Y==null||Y(f,H)},rt=f=>{M.current==null||M.current(),$==null||$(f)},at=(f,H)=>{J==null||J(f,H),xt(window,"resize",D)},st=f=>{f&&(f.style.display=""),Q==null||Q(f),Me(window,"resize",D)},it=s.exports.useCallback(f=>g("div",{...f,className:S(`${e}-backdrop`,Z,!u&&"show")}),[u,Z,e]),we={...n,...re};we.display="block";const lt=f=>g("div",{role:"dialog",...f,style:we,className:S(t,e,I&&`${e}-static`,!u&&"show"),onClick:d?tt:void 0,onMouseUp:h,"aria-label":v,"aria-labelledby":c,"aria-describedby":p,children:g(i,{...L,onMouseDown:_,className:a,contentClassName:o,children:r})});return g(Ye.Provider,{value:le,children:g(Vt,{show:l,ref:ie,backdrop:d,container:T,keyboard:!0,autoFocus:q,enforceFocus:C,restoreFocus:w,restoreFocusOptions:O,onEscapeKeyDown:nt,onShow:y,onHide:b,onEnter:ot,onEntering:at,onEntered:k,onExit:rt,onExiting:R,onExited:st,manager:W(),transition:u?sn:void 0,backdropTransition:u?ln:void 0,renderBackdrop:it,renderDialog:lt})})});Ce.displayName="Modal";Ce.defaultProps=an;const hn=Object.assign(Ce,{Body:Jt,Header:tn,Title:rn,Footer:Qt,Dialog:Qe,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});export{Ze as A,Vt as B,hn as M,pn as N,pe as S,Fe as T,Ye as a,Xt as b,Ve as c,nn as d,It as e,jt as f,Yt as g,ve as m,We as u};