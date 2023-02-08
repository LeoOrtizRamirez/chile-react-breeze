import{a as ue,u as fe,c as D,b as Ge}from"./createWithBsPrefix-0c95e455.js";import{c as I,o as he,s as $,u as ze,l as xe,a as ke,C as Xe,r as Ce,F as Ne,d as Ye,t as qe}from"./font-unicolor-e512174f.js";import{r,a as d,F as Re,m as Je,j as Se}from"./app-a7d4cc52.js";import{u as m,a as Qe}from"./useEventCallback-2595250d.js";import{d as Ze,q as B}from"./Nav-f50a7941.js";function et(){return r.exports.useState(null)}function tt(e){var t=r.exports.useRef(null);return r.exports.useEffect(function(){t.current=e}),t.current}var q;function be(e){if((!q&&q!==0||e)&&I){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),q=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return q}function ie(e){e===void 0&&(e=he());try{var t=e.activeElement;return!t||!t.nodeName?null:t}catch{return e.body}}function Me(e,t){if(e.contains)return e.contains(t);if(e.compareDocumentPosition)return e===t||!!(e.compareDocumentPosition(t)&16)}function ot(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}const we=Ze("modal-open");class pe{constructor({ownerDocument:t,handleContainerOverflow:o=!0,isRTL:n=!1}={}){this.handleContainerOverflow=o,this.isRTL=n,this.modals=[],this.ownerDocument=t}getScrollbarWidth(){return ot(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(t){}removeModalAttributes(t){}setContainerStyle(t){const o={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",s=this.getElement();t.style={overflow:s.style.overflow,[n]:s.style[n]},t.scrollBarWidth&&(o[n]=`${parseInt($(s,n)||"0",10)+t.scrollBarWidth}px`),s.setAttribute(we,""),$(s,o)}reset(){[...this.modals].forEach(t=>this.remove(t))}removeContainerStyle(t){const o=this.getElement();o.removeAttribute(we),Object.assign(o.style,t.style)}add(t){let o=this.modals.indexOf(t);return o!==-1||(o=this.modals.length,this.modals.push(t),this.setModalAttributes(t),o!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),o}remove(t){const o=this.modals.indexOf(t);o!==-1&&(this.modals.splice(o,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(t))}isTopModal(t){return!!this.modals.length&&this.modals[this.modals.length-1]===t}}const Ae=r.exports.createContext(I?window:void 0);Ae.Provider;function Oe(){return r.exports.useContext(Ae)}const le=(e,t)=>I?e==null?(t||he()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function nt(e,t){const o=Oe(),[n,s]=r.exports.useState(()=>le(e,o==null?void 0:o.document));if(!n){const a=le(e);a&&s(a)}return r.exports.useEffect(()=>{t&&n&&t(n)},[t,n]),r.exports.useEffect(()=>{const a=le(e);a!==n&&s(a)},[e,n]),n}const st=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function rt(e,t){if(e==null)return{};var o={},n=Object.keys(e),s,a;for(a=0;a<n.length;a++)s=n[a],!(t.indexOf(s)>=0)&&(o[s]=e[s]);return o}let de;function at(e){return de||(de=new pe({ownerDocument:e==null?void 0:e.document})),de}function it(e){const t=Oe(),o=e||at(t),n=r.exports.useRef({dialog:null,backdrop:null});return Object.assign(n.current,{add:()=>o.add(n.current),remove:()=>o.remove(n.current),isTopModal:()=>o.isTopModal(n.current),setDialogRef:r.exports.useCallback(s=>{n.current.dialog=s},[]),setBackdropRef:r.exports.useCallback(s=>{n.current.backdrop=s},[])})}const Be=r.exports.forwardRef((e,t)=>{let{show:o=!1,role:n="dialog",className:s,style:a,children:v,backdrop:f=!0,keyboard:E=!0,onBackdropClick:R,onEscapeKeyDown:p,transition:u,backdropTransition:b,autoFocus:J=!0,enforceFocus:j=!0,restoreFocus:Q=!0,restoreFocusOptions:M,renderDialog:H,renderBackdrop:Z=l=>d("div",Object.assign({},l)),manager:ee,container:te,onShow:_,onHide:P=()=>{},onExit:K,onExited:U,onExiting:V,onEnter:G,onEntering:z,onEntered:X}=e,Y=rt(e,st);const w=nt(te),c=it(ee),oe=ze(),ne=tt(o),[y,T]=r.exports.useState(!o),g=r.exports.useRef(null);r.exports.useImperativeHandle(t,()=>c,[c]),I&&!ne&&o&&(g.current=ie()),!u&&!o&&!y?T(!0):o&&y&&T(!1);const k=m(()=>{if(c.add(),F.current=xe(document,"keydown",re),N.current=xe(document,"focus",()=>setTimeout(x),!0),_&&_(),J){const l=ie(document);c.dialog&&l&&!Me(c.dialog,l)&&(g.current=l,c.dialog.focus())}}),h=m(()=>{if(c.remove(),F.current==null||F.current(),N.current==null||N.current(),Q){var l;(l=g.current)==null||l.focus==null||l.focus(M),g.current=null}});r.exports.useEffect(()=>{!o||!w||k()},[o,w,k]),r.exports.useEffect(()=>{y&&h()},[y,h]),ke(()=>{h()});const x=m(()=>{if(!j||!oe()||!c.isTopModal())return;const l=ie();c.dialog&&l&&!Me(c.dialog,l)&&c.dialog.focus()}),se=m(l=>{l.target===l.currentTarget&&(R==null||R(l),f===!0&&P())}),re=m(l=>{E&&l.keyCode===27&&c.isTopModal()&&(p==null||p(l),l.defaultPrevented||P())}),N=r.exports.useRef(),F=r.exports.useRef(),ae=(...l)=>{T(!0),U==null||U(...l)},S=u;if(!w||!(o||S&&!y))return null;const W=Object.assign({role:n,ref:c.setDialogRef,"aria-modal":n==="dialog"?!0:void 0},Y,{style:a,className:s,tabIndex:-1});let C=H?H(W):d("div",Object.assign({},W,{children:r.exports.cloneElement(v,{role:"document"})}));S&&(C=d(S,{appear:!0,unmountOnExit:!0,in:!!o,onExit:K,onExiting:V,onExited:ae,onEnter:G,onEntering:z,onEntered:X,children:C}));let A=null;if(f){const l=b;A=Z({ref:c.setBackdropRef,onClick:se}),l&&(A=d(l,{appear:!0,in:!!o,children:A}))}return d(Re,{children:Je.createPortal(Se(Re,{children:[A,C]}),w)})});Be.displayName="Modal";const lt=Object.assign(Be,{Manager:pe});function dt(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function ct(e,t){e.classList?e.classList.add(t):dt(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function Te(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function ut(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Te(e.className,t):e.setAttribute("class",Te(e.className&&e.className.baseVal||"",t))}const L={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class ft extends pe{adjustAndStore(t,o,n){const s=o.style[t];o.dataset[t]=s,$(o,{[t]:`${parseFloat($(o,t))+n}px`})}restore(t,o){const n=o.dataset[t];n!==void 0&&(delete o.dataset[t],$(o,{[t]:n}))}setContainerStyle(t){super.setContainerStyle(t);const o=this.getElement();if(ct(o,"modal-open"),!t.scrollBarWidth)return;const n=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";B(o,L.FIXED_CONTENT).forEach(a=>this.adjustAndStore(n,a,t.scrollBarWidth)),B(o,L.STICKY_CONTENT).forEach(a=>this.adjustAndStore(s,a,-t.scrollBarWidth)),B(o,L.NAVBAR_TOGGLER).forEach(a=>this.adjustAndStore(s,a,t.scrollBarWidth))}removeContainerStyle(t){super.removeContainerStyle(t);const o=this.getElement();ut(o,"modal-open");const n=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";B(o,L.FIXED_CONTENT).forEach(a=>this.restore(n,a)),B(o,L.STICKY_CONTENT).forEach(a=>this.restore(s,a)),B(o,L.NAVBAR_TOGGLER).forEach(a=>this.restore(s,a))}}let ce;function ht(e){return ce||(ce=new ft(e)),ce}const pt=ue("modal-body"),Le=r.exports.createContext({onHide(){}}),De=r.exports.forwardRef(({bsPrefix:e,className:t,contentClassName:o,centered:n,size:s,fullscreen:a,children:v,scrollable:f,...E},R)=>{e=fe(e,"modal");const p=`${e}-dialog`,u=typeof a=="string"?`${e}-fullscreen-${a}`:`${e}-fullscreen`;return d("div",{...E,ref:R,className:D(p,t,s&&`${e}-${s}`,n&&`${p}-centered`,f&&`${p}-scrollable`,a&&u),children:d("div",{className:D(`${e}-content`,o),children:v})})});De.displayName="ModalDialog";const Fe=De,gt=ue("modal-footer"),mt={closeLabel:"Close",closeButton:!1},We=r.exports.forwardRef(({closeLabel:e,closeVariant:t,closeButton:o,onHide:n,children:s,...a},v)=>{const f=r.exports.useContext(Le),E=m(()=>{f==null||f.onHide(),n==null||n()});return Se("div",{ref:v,...a,children:[s,o&&d(Xe,{"aria-label":e,variant:t,onClick:E})]})});We.defaultProps=mt;const vt=We,Et={closeLabel:"Close",closeButton:!1},ge=r.exports.forwardRef(({bsPrefix:e,className:t,...o},n)=>(e=fe(e,"modal-header"),d(vt,{ref:n,...o,className:D(t,e)})));ge.displayName="ModalHeader";ge.defaultProps=Et;const yt=ge,xt=e=>r.exports.forwardRef((t,o)=>d("div",{...t,ref:o,className:D(t.className,e)})),Ct=xt("h4"),Rt=ue("modal-title",{Component:Ct}),bt={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:Fe};function Mt(e){return d(Ne,{...e,timeout:null})}function wt(e){return d(Ne,{...e,timeout:null})}const me=r.exports.forwardRef(({bsPrefix:e,className:t,style:o,dialogClassName:n,contentClassName:s,children:a,dialogAs:v,"aria-labelledby":f,"aria-describedby":E,"aria-label":R,show:p,animation:u,backdrop:b,keyboard:J,onEscapeKeyDown:j,onShow:Q,onHide:M,container:H,autoFocus:Z,enforceFocus:ee,restoreFocus:te,restoreFocusOptions:_,onEntered:P,onExit:K,onExiting:U,onEnter:V,onEntering:G,onExited:z,backdropClassName:X,manager:Y,...w},c)=>{const[oe,ne]=r.exports.useState({}),[y,T]=r.exports.useState(!1),g=r.exports.useRef(!1),k=r.exports.useRef(!1),h=r.exports.useRef(null),[x,se]=et(),re=Qe(c,se),N=m(M),F=Ge();e=fe(e,"modal");const ae=r.exports.useMemo(()=>({onHide:N}),[N]);function S(){return Y||ht({isRTL:F})}function W(i){if(!I)return;const O=S().getScrollbarWidth()>0,ye=i.scrollHeight>he(i).documentElement.clientHeight;ne({paddingRight:O&&!ye?be():void 0,paddingLeft:!O&&ye?be():void 0})}const C=m(()=>{x&&W(x.dialog)});ke(()=>{Ce(window,"resize",C),h.current==null||h.current()});const A=()=>{g.current=!0},l=i=>{g.current&&x&&i.target===x.dialog&&(k.current=!0),g.current=!1},ve=()=>{T(!0),h.current=qe(x.dialog,()=>{T(!1)})},$e=i=>{i.target===i.currentTarget&&ve()},Ie=i=>{if(b==="static"){$e(i);return}if(k.current||i.target!==i.currentTarget){k.current=!1;return}M==null||M()},je=i=>{J?j==null||j(i):(i.preventDefault(),b==="static"&&ve())},He=(i,O)=>{i&&W(i),V==null||V(i,O)},_e=i=>{h.current==null||h.current(),K==null||K(i)},Pe=(i,O)=>{G==null||G(i,O),Ye(window,"resize",C)},Ke=i=>{i&&(i.style.display=""),z==null||z(i),Ce(window,"resize",C)},Ue=r.exports.useCallback(i=>d("div",{...i,className:D(`${e}-backdrop`,X,!u&&"show")}),[u,X,e]),Ee={...o,...oe};Ee.display="block";const Ve=i=>d("div",{role:"dialog",...i,style:Ee,className:D(t,e,y&&`${e}-static`,!u&&"show"),onClick:b?Ie:void 0,onMouseUp:l,"aria-label":R,"aria-labelledby":f,"aria-describedby":E,children:d(v,{...w,onMouseDown:A,className:n,contentClassName:s,children:a})});return d(Le.Provider,{value:ae,children:d(lt,{show:p,ref:re,backdrop:b,container:H,keyboard:!0,autoFocus:Z,enforceFocus:ee,restoreFocus:te,restoreFocusOptions:_,onEscapeKeyDown:je,onShow:Q,onHide:M,onEnter:He,onEntering:Pe,onEntered:P,onExit:_e,onExiting:U,onExited:Ke,manager:S(),transition:u?Mt:void 0,backdropTransition:u?wt:void 0,renderBackdrop:Ue,renderDialog:Ve})})});me.displayName="Modal";me.defaultProps=bt;const Ot=Object.assign(me,{Body:pt,Header:yt,Title:Rt,Footer:gt,Dialog:Fe,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});export{vt as A,lt as B,Ot as M,Le as a,ft as b,xt as d,ht as g};