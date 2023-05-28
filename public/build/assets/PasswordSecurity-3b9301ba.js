import{r as n,a as r,m as ee,j as w,F as Z}from"./app-5c306434.js";import{u as j,x as te,A as se,a as q,g as D,z as U,i as K,e as W,k as re,f as V,D as ne,h as oe,F as G,I as B,c as ae,B as ie}from"./hasClass-c3f45eb9.js";import{u as ce}from"./estilos-toast-f2250066.js";import{a as le,g as ue,u as de,m as fe}from"./mergeOptionsWithPopperConfig-3a0086e3.js";import{F as pe}from"./Form-7b8bba75.js";const he=27,me=()=>{};function ge(e,c,{disabled:t,clickTrigger:a}={}){const d=c||me;le(e,d,{disabled:t,clickTrigger:a});const u=j(v=>{v.keyCode===he&&d(v)});n.exports.useEffect(()=>{if(t||e==null)return;const v=te(ue(e));let f=(v.defaultView||window).event;const y=se(v,"keyup",p=>{if(p===f){f=void 0;return}u(p)});return()=>{y()}},[e,t,u])}const J=n.exports.forwardRef((e,c)=>{const{flip:t,offset:a,placement:d,containerPadding:u,popperConfig:v={},transition:f}=e,[y,p]=q(),[C,_]=q(),x=D(p,c),o=U(e.container),h=U(e.target),[l,m]=n.exports.useState(!e.show),g=de(h,y,fe({placement:d,enableEvents:!!e.show,containerPadding:u||5,flip:t,offset:a,arrowElement:C,popperConfig:v}));e.show?l&&m(!1):!e.transition&&!l&&m(!0);const N=(...E)=>{m(!0),e.onExited&&e.onExited(...E)},S=e.show||f&&!l;if(ge(y,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!S)return null;let $=e.children(Object.assign({},g.attributes.popper,{style:g.styles.popper,ref:x}),{popper:g,placement:d,show:!!e.show,arrowProps:Object.assign({},g.attributes.arrow,{style:g.styles.arrow,ref:_})});if(f){const{onExit:E,onExiting:F,onEnter:P,onEntering:O,onEntered:M}=e;$=r(f,{in:e.show,appear:!0,onExit:E,onExiting:F,onExited:N,onEnter:P,onEntering:O,onEntered:M,children:$})}return o?ee.createPortal($,o):null});J.displayName="Overlay";const ve=K("popover-header"),I=K("popover-body");function _e(e,c){let t=e;return e==="left"?t=c?"end":"start":e==="right"&&(t=c?"start":"end"),t}const ye={placement:"right"},Q=n.exports.forwardRef(({bsPrefix:e,placement:c,className:t,style:a,children:d,body:u,arrowProps:v,popper:f,show:y,...p},C)=>{const _=W(e,"popover"),x=re(),[o]=(c==null?void 0:c.split("-"))||[],h=_e(o,x);return w("div",{ref:C,role:"tooltip",style:a,"x-placement":o,className:V(t,_,o&&`bs-popover-${h}`),...p,children:[r("div",{className:"popover-arrow",...v}),u?r(I,{children:d}):d]})});Q.defaultProps=ye;const X=Object.assign(Q,{Header:ve,Body:I,POPPER_OFFSET:[0,8]});function be(e){const c=n.exports.useRef(null),t=W(void 0,"popover"),a=n.exports.useMemo(()=>({name:"offset",options:{offset:()=>c.current&&ne(c.current,t)?e||X.POPPER_OFFSET:e||[0,0]}}),[e,t]);return[c,[a]]}const xe={transition:G,rootClose:!1,show:!1,placement:"top"};function $e(e,c){const{ref:t}=e,{ref:a}=c;e.ref=t.__wrapped||(t.__wrapped=d=>t(B(d))),c.ref=a.__wrapped||(a.__wrapped=d=>a(B(d)))}const L=n.exports.forwardRef(({children:e,transition:c,popperConfig:t={},...a},d)=>{const u=n.exports.useRef({}),[v,f]=q(),[y,p]=be(a.offset),C=D(d,y),_=c===!0?G:c||void 0,x=j(o=>{f(o),t==null||t.onFirstUpdate==null||t.onFirstUpdate(o)});return oe(()=>{v&&(u.current.scheduleUpdate==null||u.current.scheduleUpdate())},[v]),r(J,{...a,ref:C,popperConfig:{...t,modifiers:p.concat(t.modifiers||[]),onFirstUpdate:x},transition:_,children:(o,{arrowProps:h,popper:l,show:m})=>{var g,N;$e(o,h);const S=l==null?void 0:l.placement,$=Object.assign(u.current,{state:l==null?void 0:l.state,scheduleUpdate:l==null?void 0:l.update,placement:S,outOfBoundaries:(l==null||(g=l.state)==null||(N=g.modifiersData.hide)==null?void 0:N.isReferenceHidden)||!1});return typeof e=="function"?e({...o,placement:S,show:m,...!c&&m&&{className:"show"},popper:$,arrowProps:h}):n.exports.cloneElement(e,{...o,placement:S,arrowProps:h,popper:$,className:V(e.props.className,!c&&m&&"show"),style:{...e.props.style,...o.style}})}})});L.displayName="Overlay";L.defaultProps=xe;const we=L;function Ce(e){return e&&typeof e=="object"?e:{show:e,hide:e}}function A(e,c,t){const[a]=c,d=a.currentTarget,u=a.relatedTarget||a.nativeEvent[t];(!u||u!==d)&&!ie(d,u)&&e(...c)}const Ne={defaultShow:!1,trigger:["hover","focus"]};function Y({trigger:e,overlay:c,children:t,popperConfig:a={},show:d,defaultShow:u=!1,onToggle:v,delay:f,placement:y,flip:p=y&&y.indexOf("auto")!==-1,...C}){const _=n.exports.useRef(null),x=D(_,t.ref),o=ce(),h=n.exports.useRef(""),[l,m]=ae(d,u,v),g=Ce(f),{onFocus:N,onBlur:S,onClick:$}=typeof t!="function"?n.exports.Children.only(t).props:{},E=b=>{x(B(b))},F=n.exports.useCallback(()=>{if(o.clear(),h.current="show",!g.show){m(!0);return}o.set(()=>{h.current==="show"&&m(!0)},g.show)},[g.show,m,o]),P=n.exports.useCallback(()=>{if(o.clear(),h.current="hide",!g.hide){m(!1);return}o.set(()=>{h.current==="hide"&&m(!1)},g.hide)},[g.hide,m,o]),O=n.exports.useCallback((...b)=>{F(),N==null||N(...b)},[F,N]),M=n.exports.useCallback((...b)=>{P(),S==null||S(...b)},[P,S]),z=n.exports.useCallback((...b)=>{m(!l),$==null||$(...b)},[$,m,l]),H=n.exports.useCallback((...b)=>{A(F,b,"fromElement")},[F]),T=n.exports.useCallback((...b)=>{A(P,b,"toElement")},[P]),k=e==null?[]:[].concat(e),R={ref:E};return k.indexOf("click")!==-1&&(R.onClick=z),k.indexOf("focus")!==-1&&(R.onFocus=O,R.onBlur=M),k.indexOf("hover")!==-1&&(R.onMouseOver=H,R.onMouseOut=T),w(Z,{children:[typeof t=="function"?t(R):n.exports.cloneElement(t,R),r(we,{...C,show:l,onHide:P,flip:p,placement:y,popperConfig:a,target:_.current,children:c})]})}Y.defaultProps=Ne;const Se=(e,c)=>{const[t,a]=n.exports.useState("gray"),[d,u]=n.exports.useState("no ingresada"),[v,f]=n.exports.useState(!1),[y,p]=n.exports.useState(!1),[C,_]=n.exports.useState(!1),[x,o]=n.exports.useState(!1);let h=n.exports.useRef(),l=n.exports.useRef();const m=s=>{s=String(s).trim();const i={lower:/^[a-z?]+$/,upper:/^[A-Z]+$/,number:/^[0-9]+$/,upperLower:/^[A-Za-z]+$/,upperNumber:/^[A-Z0-9]+$/,lowerNumber:/^[a-z0-9]+$/,upperLowerNumber:/^[a-zA-Z0-9_~!@#$%^&*()-=/*-+.,:;]*$/};s.length>0&&s.length<6?i.lower.test(s)||i.upper.test(s)||i.number.test(s)?(a("red"),u("Mínima"),f(!0),p(!1),_(!1),o(!1)):i.upperLower.test(s)||i.upperNumber.test(s)||i.lowerNumber.test(s)?(a("yellow"),u("Media"),p(!0),f(!1),_(!1),o(!1)):i.upperLowerNumber.test(s)&&(a("green"),u("Fuerte"),_(!0),f(!1),p(!1),o(!1)):s.length==0?(a("gray"),u("no ingresada"),f(!1),p(!1),_(!1),o(!1)):i.lower.test(s)||i.upper.test(s)||i.number.test(s)?(a("yellow"),u("Media"),p(!0),f(!1),_(!1),o(!1)):i.upperLower.test(s)||i.upperNumber.test(s)||i.lowerNumber.test(s)?(a("green"),u("Fuerte"),_(!0),f(!1),p(!1),o(!1)):i.upperLowerNumber.test(s)&&(a("green-dark"),u("Muy fuerte"),o(!0),f(!1),p(!1),_(!1))},[g,N]=n.exports.useState(!1),S=s=>{s=String(s).trim();const i={lower:/(?=\w*[a-z])/,upper:/(?=\w*[A-Z])/,number:/(?=\w*\d)/,especial:/(?=\w*[\u0021-\u002b\u003c-\u0040])/};s.length>=6?(i.lower.test(s)||i.upper.test(s)||i.number.test(s)||i.especial.test(s))&&N("green"):N("gray")},[$,E]=n.exports.useState(!1),F=s=>{s=String(s).trim();const i={upper:/(?=\w*[A-Z])/};i.upper.test(s)?i.upper.test(s)&&E("green"):E("gray")},[P,O]=n.exports.useState(!1),M=s=>{s=String(s).trim();const i={lower:/(?=\w*[a-z])/};i.lower.test(s)?i.lower.test(s)&&O("green"):O("gray")},[z,H]=n.exports.useState(!1),T=s=>{s=String(s).trim();const i={number:/(?=\w*\d)/};i.number.test(s)?i.number.test(s)&&H("green"):H("gray")},k=s=>{m(s.target.value),e.onHandleChange(s),S(s.target.value),e.onHandleChange(s),F(s.target.value),e.onHandleChange(s),M(s.target.value),e.onHandleChange(s),T(s.target.value),e.onHandleChange(s)},R=s=>{h.current.className=="contenido__password-div-icon icon-show"?(h.current.className="contenido__password-div-icon icon-hide",l.current.type="text",l.current.placeholder="Ingresa tu contraseña"):h.current.className=="contenido__password-div-icon icon-hide"?(h.current.className="contenido__password-div-icon icon-show",l.current.type="password",l.current.placeholder="Contraseña1234"):l.current.type=="text"?(l.current.type="password",l.current.placeholder="Contraseña1234"):(l.current.type="text",l.current.placeholder="Ingresa tu contraseña")},b=r(X,{bsPrefix:"popover",id:"popover-trigger-hover-focus",title:"Popover top",children:r(I,{bsPrefix:"popover-body",children:r("div",{className:"contenido-popover-register",children:w("div",{className:"contenido__informacion-seguridad",children:[r("div",{className:"title",children:r("span",{children:"Requisito de contraseña"})}),w("div",{className:"espacio-opciones",children:[r("span",{className:`contenido__seguridad-icon icon-info c-${g}`}),r("p",{children:"Mínimo 6 caracteres"})]}),r("hr",{}),r("div",{className:"title",children:r("span",{children:"Puede ser más segura si contiene"})}),w("div",{className:"espacio-opciones",children:[r("span",{className:`contenido__seguridad-icon icon-info c-${$}`}),r("p",{children:"1 carácter en mayúscula"})]}),w("div",{className:"espacio-opciones",children:[r("span",{className:`contenido__seguridad-icon icon-info c-${P}`}),r("p",{children:"1 carácter en minúscula"})]}),w("div",{className:"espacio-opciones",children:[r("span",{className:`contenido__seguridad-icon icon-info c-${z}`}),r("p",{children:"1 carácter numérico"})]})]})})})});return w(Z,{children:[r("div",{className:"contenido__password",children:w("div",{className:"contenido__password-div",children:[r(pe.Control,{placeholder:"Ingresa tu contraseña",type:"password",name:"password",className:"contenido__password-div-input",autoComplete:"new-password",onChange:k,required:!0,pattern:"^\\S{6,20}$",ref:l}),r("span",{className:"contenido__password-div-icon icon-show",onClick:R,ref:h})]})}),r("div",{className:"contenido__nivel",children:r(Y,{trigger:["hover","focus"],placement:"top",overlay:b,children:r("div",{id:"tooltip-informacion",className:"contenido__nivel-iconos",children:w("div",{className:"contenido__iconos-seguridad",children:[w("div",{className:"contenido__circulo",children:[r("div",{className:`${v&&`bt-2-${t} br-2-${t} `} ${y&&`bt-2-${t} br-2-${t} `} ${C&&`bt-2-${t} br-2-${t} `}  ${x&&`bt-2-${t} br-2-${t} `} contenido__circulo-esquina__sup-der`}),r("div",{className:`${y&&`bb-2-${t} br-2-${t} `} ${C&&`bb-2-${t} br-2-${t} `} ${x&&`bb-2-${t} br-2-${t} `} contenido__circulo-esquina__inf-der`}),r("div",{className:`${C&&`bb-2-${t} bl-2-${t} `} ${x&&`bb-2-${t} bl-2-${t} `} contenido__circulo-esquina__inf-izq securityColor__gris-inf-izq`}),r("div",{className:`${x&&`bt-2-${t} bl-2-${t} `} contenido__circulo-esquina__sup-izq securityColor__gris-sup-izq `}),r("span",{className:`contenido__seguridad-icon icon-shield c-${t}`})]}),w("span",{className:"contenido__seguridad-text",children:[" ","Seguridad ",r("br",{}),r("span",{className:`contenido__seguridad-text--modifier c-${t}`,children:d})]})]})})})})]})},Me=Se;export{Me as P};
