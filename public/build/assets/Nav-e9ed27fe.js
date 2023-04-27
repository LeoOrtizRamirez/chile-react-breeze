import{u as N,f as S,g as Be,r as he,s as je,t as G,v as ct,l as dt,w as Ne,x as Te,m as Ke,b as ut,y as ft,i as ne,e as X,C as pt,a as ht,k as gt,z as Oe,F as Le,d as vt,A as mt,j as xt}from"./hasClass-d5cc11cc.js";import{r as s,a as g,F as Me,b as yt,j as Pe}from"./app-afb3e208.js";function bt(e){var t=s.exports.useRef(null);return s.exports.useEffect(function(){t.current=e}),t.current}const Ct=["as","disabled"];function Et(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function wt(e){return!e||e.trim()==="#"}function Fe({tagName:e,disabled:t,href:n,target:a,rel:o,role:r,onClick:i,tabIndex:c=0,type:p}){e||(n!=null||a!=null||o!=null?e="a":e="button");const v={tagName:e};if(e==="button")return[{type:p||"button",disabled:t},v];const l=d=>{if((t||e==="a"&&wt(n))&&d.preventDefault(),t){d.stopPropagation();return}i==null||i(d)},u=d=>{d.key===" "&&(d.preventDefault(),l(d))};return e==="a"&&(n||(n="#"),t&&(n=void 0)),[{role:r??"button",disabled:void 0,tabIndex:t?void 0:c,href:n,target:e==="a"?a:void 0,"aria-disabled":t||void 0,rel:e==="a"?o:void 0,onClick:l,onKeyDown:u},v]}const We=s.exports.forwardRef((e,t)=>{let{as:n,disabled:a}=e,o=Et(e,Ct);const[r,{tagName:i}]=Fe(Object.assign({tagName:n,disabled:a},o));return g(i,Object.assign({},o,r,{ref:t}))});We.displayName="Button";const Rt=["onKeyDown"];function Nt(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Tt(e){return!e||e.trim()==="#"}const He=s.exports.forwardRef((e,t)=>{let{onKeyDown:n}=e,a=Nt(e,Rt);const[o]=Fe(Object.assign({tagName:"a"},a)),r=N(i=>{o.onKeyDown(i),n==null||n(i)});return Tt(a.href)||a.role==="button"?g("a",Object.assign({ref:t},a,o,{onKeyDown:r})):g("a",Object.assign({ref:t},a,{onKeyDown:n}))});He.displayName="Anchor";const Ot=e=>s.exports.forwardRef((t,n)=>g("div",{...t,ref:n,className:S(t.className,e)})),_e=s.exports.createContext(null);_e.displayName="CardHeaderContext";const Mt=_e;var kt=Function.prototype.bind.call(Function.prototype.call,[].slice);function j(e,t){return kt(e.querySelectorAll(t))}function At(){var e=s.exports.useReducer(function(n){return!n},!1),t=e[1];return t}const fe=s.exports.createContext(null),ge=(e,t=null)=>e!=null?String(e):t||null,ve=s.exports.createContext(null);ve.displayName="NavContext";const St="data-rr-ui-",$t="rrUi";function oe(e){return`${St}${e}`}function Dt(e){return`${$t}${e}`}const Ue=s.exports.createContext(null);Ue.displayName="NavbarContext";const It=Ue,qe=s.exports.createContext(null),Bt=["as","active","eventKey"];function jt(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Ve({key:e,onClick:t,active:n,id:a,role:o,disabled:r}){const i=s.exports.useContext(fe),c=s.exports.useContext(ve),p=s.exports.useContext(qe);let v=n;const l={role:o};if(c){!o&&c.role==="tablist"&&(l.role="tab");const u=c.getControllerId(e??null),d=c.getControlledId(e??null);l[oe("event-key")]=e,l.id=u||a,v=n==null&&e!=null?c.activeKey===e:n,(v||!(p!=null&&p.unmountOnExit)&&!(p!=null&&p.mountOnEnter))&&(l["aria-controls"]=d)}return l.role==="tab"&&(l["aria-selected"]=v,v||(l.tabIndex=-1),r&&(l.tabIndex=-1,l["aria-disabled"]=!0)),l.onClick=N(u=>{r||(t==null||t(u),e!=null&&i&&!u.isPropagationStopped()&&i(e,u))}),[l,{isActive:v}]}const ze=s.exports.forwardRef((e,t)=>{let{as:n=We,active:a,eventKey:o}=e,r=jt(e,Bt);const[i,c]=Ve(Object.assign({key:ge(o,r.href),active:a},r));return i[oe("active")]=c.isActive,g(n,Object.assign({},r,i,{ref:t}))});ze.displayName="NavItem";const Kt=["as","onSelect","activeKey","role","onKeyDown"];function Lt(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}const ke=()=>{},Ae=oe("event-key"),Ge=s.exports.forwardRef((e,t)=>{let{as:n="div",onSelect:a,activeKey:o,role:r,onKeyDown:i}=e,c=Lt(e,Kt);const p=At(),v=s.exports.useRef(!1),l=s.exports.useContext(fe),u=s.exports.useContext(qe);let d,x;u&&(r=r||"tablist",o=u.activeKey,d=u.getControlledId,x=u.getControllerId);const m=s.exports.useRef(null),y=C=>{const w=m.current;if(!w)return null;const O=j(w,`[${Ae}]:not([aria-disabled=true])`),k=w.querySelector("[aria-selected=true]");if(!k||k!==document.activeElement)return null;const $=O.indexOf(k);if($===-1)return null;let R=$+C;return R>=O.length&&(R=0),R<0&&(R=O.length-1),O[R]},b=(C,w)=>{C!=null&&(a==null||a(C,w),l==null||l(C,w))},T=C=>{if(i==null||i(C),!u)return;let w;switch(C.key){case"ArrowLeft":case"ArrowUp":w=y(-1);break;case"ArrowRight":case"ArrowDown":w=y(1);break;default:return}w&&(C.preventDefault(),b(w.dataset[Dt("EventKey")]||null,C),v.current=!0,p())};s.exports.useEffect(()=>{if(m.current&&v.current){const C=m.current.querySelector(`[${Ae}][aria-selected=true]`);C==null||C.focus()}v.current=!1});const q=Be(t,m);return g(fe.Provider,{value:b,children:g(ve.Provider,{value:{role:r,activeKey:ge(o),getControlledId:d||ke,getControllerId:x||ke},children:g(n,Object.assign({},c,{onKeyDown:T,ref:q,role:r}))})})});Ge.displayName="Nav";const Pt=Object.assign(Ge,{Item:ze});var te;function Se(e){if((!te&&te!==0||e)&&he){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),te=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return te}function ce(e){e===void 0&&(e=je());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function Ft(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const $e=oe("modal-open");class me{constructor({ownerDocument:t,handleContainerOverflow:n=!0,isRTL:a=!1}={}){this.handleContainerOverflow=n,this.isRTL=a,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return Ft(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const n={overflow:"hidden"},a=this.isRTL?"paddingLeft":"paddingRight",o=this.getElement();t.style={overflow:o.style.overflow,[a]:o.style[a]},t.scrollBarWidth&&(n[a]=`${parseInt(G(o,a)||"0",10)+t.scrollBarWidth}px`),o.setAttribute($e,""),G(o,n)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const n=this.getElement();n.removeAttribute($e),Object.assign(n.style,t.style)}add(t){let n=this.modals.indexOf(t);return n!==-1||(n=this.modals.length,this.modals.push(t),this.setModalAttributes(t),n!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n}remove(t){const n=this.modals.indexOf(t);n!==-1&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const Wt=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Ht(e,t){if(e==null)return{};var n={},a=Object.keys(e),o,r;for(r=0;r<a.length;r++)o=a[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}let de;function _t(e){return de||(de=new me({ownerDocument:e==null?void 0:e.document})),de}function Ut(e){const t=ut(),n=e||_t(t),a=s.exports.useRef({dialog:null,backdrop:null});return Object.assign(a.current,{add:()=>n.add(a.current),remove:()=>n.remove(a.current),isTopModal:()=>n.isTopModal(a.current),setDialogRef:s.exports.useCallback(o=>{a.current.dialog=o},[]),setBackdropRef:s.exports.useCallback(o=>{a.current.backdrop=o},[])})}const Xe=s.exports.forwardRef((e,t)=>{let{show:n=!1,role:a="dialog",className:o,style:r,children:i,backdrop:c=!0,keyboard:p=!0,onBackdropClick:v,onEscapeKeyDown:l,transition:u,backdropTransition:d,autoFocus:x=!0,enforceFocus:m=!0,restoreFocus:y=!0,restoreFocusOptions:b,renderDialog:T,renderBackdrop:q=h=>g("div",Object.assign({},h)),manager:C,container:w,onShow:O,onHide:k=()=>{},onExit:$,onExited:R,onExiting:Y,onEnter:J,onEntering:Q,onEntered:Z}=e,ee=Ht(e,Wt);const K=ct(w),E=Ut(C),re=dt(),ae=bt(n),[D,L]=s.exports.useState(!n),A=s.exports.useRef(null);s.exports.useImperativeHandle(t,()=>E,[E]),he&&!ae&&n&&(A.current=ce()),!u&&!n&&!D?L(!0):n&&D&&L(!1);const P=N(()=>{if(E.add(),V.current=Ne(document,"keydown",ie),F.current=Ne(document,"focus",()=>setTimeout(I),!0),O&&O(),x){const h=ce(document);E.dialog&&h&&!Te(E.dialog,h)&&(A.current=h,E.dialog.focus())}}),M=N(()=>{if(E.remove(),V.current==null||V.current(),F.current==null||F.current(),y){var h;(h=A.current)==null||h.focus==null||h.focus(b),A.current=null}});s.exports.useEffect(()=>{!n||!K||P()},[n,K,P]),s.exports.useEffect(()=>{D&&M()},[D,M]),Ke(()=>{M()});const I=N(()=>{if(!m||!re()||!E.isTopModal())return;const h=ce();E.dialog&&h&&!Te(E.dialog,h)&&E.dialog.focus()}),se=N(h=>{h.target===h.currentTarget&&(v==null||v(h),c===!0&&k())}),ie=N(h=>{p&&h.keyCode===27&&E.isTopModal()&&(l==null||l(h),h.defaultPrevented||k())}),F=s.exports.useRef(),V=s.exports.useRef(),le=(...h)=>{L(!0),R==null||R(...h)},W=u;if(!K||!(n||W&&!D))return null;const z=Object.assign({role:a,ref:E.setDialogRef,"aria-modal":a==="dialog"?!0:void 0},ee,{style:r,className:o,tabIndex:-1});let B=T?T(z):g("div",Object.assign({},z,{children:s.exports.cloneElement(i,{role:"document"})}));W&&(B=g(W,{appear:!0,unmountOnExit:!0,in:!!n,onExit:$,onExiting:Y,onExited:le,onEnter:J,onEntering:Q,onEntered:Z,children:B}));let H=null;if(c){const h=d;H=q({ref:E.setBackdropRef,onClick:se}),h&&(H=g(h,{appear:!0,in:!!n,children:H}))}return g(Me,{children:yt.createPortal(Pe(Me,{children:[H,B]}),K)})});Xe.displayName="Modal";const qt=Object.assign(Xe,{Manager:me});function Vt(e,t){e.classList?e.classList.add(t):ft(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function De(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function zt(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=De(e.className,t):e.setAttribute("class",De(e.className&&e.className.baseVal||"",t))}const U={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class Gt extends me{adjustAndStore(t,n,a){const o=n.style[t];n.dataset[t]=o,G(n,{[t]:`${parseFloat(G(n,t))+a}px`})}restore(t,n){const a=n.dataset[t];a!==void 0&&(delete n.dataset[t],G(n,{[t]:a}))}setContainerStyle(t){super.setContainerStyle(t);const n=this.getElement();if(Vt(n,"modal-open"),!t.scrollBarWidth)return;const a=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";j(n,U.FIXED_CONTENT).forEach(r=>this.adjustAndStore(a,r,t.scrollBarWidth)),j(n,U.STICKY_CONTENT).forEach(r=>this.adjustAndStore(o,r,-t.scrollBarWidth)),j(n,U.NAVBAR_TOGGLER).forEach(r=>this.adjustAndStore(o,r,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const n=this.getElement();zt(n,"modal-open");const a=this.isRTL?"paddingLeft":"paddingRight",o=this.isRTL?"marginLeft":"marginRight";j(n,U.FIXED_CONTENT).forEach(r=>this.restore(a,r)),j(n,U.STICKY_CONTENT).forEach(r=>this.restore(o,r)),j(n,U.NAVBAR_TOGGLER).forEach(r=>this.restore(o,r))}}let ue;function Xt(e){return ue||(ue=new Gt(e)),ue}const Yt=ne("modal-body"),Ye=s.exports.createContext({onHide(){}}),Je=s.exports.forwardRef(({bsPrefix:e,className:t,contentClassName:n,centered:a,size:o,fullscreen:r,children:i,scrollable:c,...p},v)=>{e=X(e,"modal");const l=`${e}-dialog`,u=typeof r=="string"?`${e}-fullscreen-${r}`:`${e}-fullscreen`;return g("div",{...p,ref:v,className:S(l,t,o&&`${e}-${o}`,a&&`${l}-centered`,c&&`${l}-scrollable`,r&&u),children:g("div",{className:S(`${e}-content`,n),children:i})})});Je.displayName="ModalDialog";const Qe=Je,Jt=ne("modal-footer"),Qt={closeLabel:"Close",closeButton:!1},Ze=s.exports.forwardRef(({closeLabel:e,closeVariant:t,closeButton:n,onHide:a,children:o,...r},i)=>{const c=s.exports.useContext(Ye),p=N(()=>{c==null||c.onHide(),a==null||a()});return Pe("div",{ref:i,...r,children:[o,n&&g(pt,{"aria-label":e,variant:t,onClick:p})]})});Ze.defaultProps=Qt;const Zt=Ze,en={closeLabel:"Close",closeButton:!1},xe=s.exports.forwardRef(({bsPrefix:e,className:t,...n},a)=>(e=X(e,"modal-header"),g(Zt,{ref:a,...n,className:S(t,e)})));xe.displayName="ModalHeader";xe.defaultProps=en;const tn=xe,nn=Ot("h4"),on=ne("modal-title",{Component:nn}),rn={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:Qe};function an(e){return g(Le,{...e,timeout:null})}function sn(e){return g(Le,{...e,timeout:null})}const ye=s.exports.forwardRef(({bsPrefix:e,className:t,style:n,dialogClassName:a,contentClassName:o,children:r,dialogAs:i,"aria-labelledby":c,"aria-describedby":p,"aria-label":v,show:l,animation:u,backdrop:d,keyboard:x,onEscapeKeyDown:m,onShow:y,onHide:b,container:T,autoFocus:q,enforceFocus:C,restoreFocus:w,restoreFocusOptions:O,onEntered:k,onExit:$,onExiting:R,onEnter:Y,onEntering:J,onExited:Q,backdropClassName:Z,manager:ee,...K},E)=>{const[re,ae]=s.exports.useState({}),[D,L]=s.exports.useState(!1),A=s.exports.useRef(!1),P=s.exports.useRef(!1),M=s.exports.useRef(null),[I,se]=ht(),ie=Be(E,se),F=N(b),V=gt();e=X(e,"modal");const le=s.exports.useMemo(()=>({onHide:F}),[F]);function W(){return ee||Xt({isRTL:V})}function z(f){if(!he)return;const _=W().getScrollbarWidth()>0,Re=f.scrollHeight>je(f).documentElement.clientHeight;ae({paddingRight:_&&!Re?Se():void 0,paddingLeft:!_&&Re?Se():void 0})}const B=N(()=>{I&&z(I.dialog)});Ke(()=>{Oe(window,"resize",B),M.current==null||M.current()});const H=()=>{A.current=!0},h=f=>{A.current&&I&&f.target===I.dialog&&(P.current=!0),A.current=!1},Ee=()=>{L(!0),M.current=mt(I.dialog,()=>{L(!1)})},et=f=>{f.target===f.currentTarget&&Ee()},tt=f=>{if(d==="static"){et(f);return}if(P.current||f.target!==f.currentTarget){P.current=!1;return}b==null||b()},nt=f=>{x?m==null||m(f):(f.preventDefault(),d==="static"&&Ee())},ot=(f,_)=>{f&&z(f),Y==null||Y(f,_)},rt=f=>{M.current==null||M.current(),$==null||$(f)},at=(f,_)=>{J==null||J(f,_),vt(window,"resize",B)},st=f=>{f&&(f.style.display=""),Q==null||Q(f),Oe(window,"resize",B)},it=s.exports.useCallback(f=>g("div",{...f,className:S(`${e}-backdrop`,Z,!u&&"show")}),[u,Z,e]),we={...n,...re};we.display="block";const lt=f=>g("div",{role:"dialog",...f,style:we,className:S(t,e,D&&`${e}-static`,!u&&"show"),onClick:d?tt:void 0,onMouseUp:h,"aria-label":v,"aria-labelledby":c,"aria-describedby":p,children:g(i,{...K,onMouseDown:H,className:a,contentClassName:o,children:r})});return g(Ye.Provider,{value:le,children:g(qt,{show:l,ref:ie,backdrop:d,container:T,keyboard:!0,autoFocus:q,enforceFocus:C,restoreFocus:w,restoreFocusOptions:O,onEscapeKeyDown:nt,onShow:y,onHide:b,onEnter:ot,onEntering:at,onEntered:k,onExit:rt,onExiting:R,onExited:st,manager:W(),transition:u?an:void 0,backdropTransition:u?sn:void 0,renderBackdrop:it,renderDialog:lt})})});ye.displayName="Modal";ye.defaultProps=rn;const hn=Object.assign(ye,{Body:Yt,Header:tn,Title:on,Footer:Jt,Dialog:Qe,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});var Ie={exports:{}},pe={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;function n(a){function o(i,c,p,v,l,u){var d=v||"<<anonymous>>",x=u||p;if(c[p]==null)return i?new Error("Required "+l+" `"+x+"` was not specified "+("in `"+d+"`.")):null;for(var m=arguments.length,y=Array(m>6?m-6:0),b=6;b<m;b++)y[b-6]=arguments[b];return a.apply(void 0,[c,p,d,l,x].concat(y))}var r=o.bind(null,!1);return r.isRequired=o.bind(null,!0),r}e.exports=t.default})(pe,pe.exports);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var n=pe.exports,a=o(n);function o(i){return i&&i.__esModule?i:{default:i}}function r(){for(var i=arguments.length,c=Array(i),p=0;p<i;p++)c[p]=arguments[p];function v(){for(var l=arguments.length,u=Array(l),d=0;d<l;d++)u[d]=arguments[d];var x=null;return c.forEach(function(m){if(x==null){var y=m.apply(void 0,u);y!=null&&(x=y)}}),x}return(0,a.default)(v)}e.exports=t.default})(Ie,Ie.exports);const ln=ne("nav-item"),cn={disabled:!1},be=s.exports.forwardRef(({bsPrefix:e,className:t,as:n=He,active:a,eventKey:o,...r},i)=>{e=X(e,"nav-link");const[c,p]=Ve({key:ge(o,r.href),active:a,...r});return g(n,{...r,...c,ref:i,className:S(t,e,r.disabled&&"disabled",p.isActive&&"active")})});be.displayName="NavLink";be.defaultProps=cn;const dn=be,un={justify:!1,fill:!1},Ce=s.exports.forwardRef((e,t)=>{const{as:n="div",bsPrefix:a,variant:o,fill:r,justify:i,navbar:c,navbarScroll:p,className:v,activeKey:l,...u}=xt(e,{activeKey:"onSelect"}),d=X(a,"nav");let x,m,y=!1;const b=s.exports.useContext(It),T=s.exports.useContext(Mt);return b?(x=b.bsPrefix,y=c??!0):T&&({cardHeaderBsPrefix:m}=T),g(Pt,{as:n,ref:t,activeKey:l,className:S(v,{[d]:!y,[`${x}-nav`]:y,[`${x}-nav-scroll`]:y&&p,[`${m}-${o}`]:!!m,[`${d}-${o}`]:!!o,[`${d}-fill`]:r,[`${d}-justified`]:i}),...u})});Ce.displayName="Nav";Ce.defaultProps=un;const gn=Object.assign(Ce,{Item:ln,Link:dn});export{He as A,We as B,hn as M,ve as N,fe as S,qe as T,At as a,It as b,dn as c,oe as d,gn as e,ln as f,Fe as g,Zt as h,Ot as i,Ye as j,qt as k,Gt as l,ge as m,Xt as n,Vt as o,j as q,zt as r,bt as u};
