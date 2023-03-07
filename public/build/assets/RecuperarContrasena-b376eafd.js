import{r as t,a as e,u as L,j as a,F as T}from"./app-7bc7aa84.js";/* empty css                      *//* empty css                      *//* empty css              */import{T as E,a as y}from"./estilos-toast-b995a97c.js";import{C as p}from"./Form-9f47a7aa.js";import{u as $,b as F,d as j,c as q}from"./createWithBsPrefix-e4392318.js";import{P as D}from"./PasswordSecurity-7b7f95b5.js";import"./useTimeout-7534b4ff.js";import"./CloseButton-6e6e3b74.js";import"./ElementChildren-ea70097a.js";import"./hasClass-7fd45157.js";import"./hook-c6f12429.js";import"./useIsomorphicEffect-ee5b7bf5.js";const S=t.exports.forwardRef(({bsPrefix:m,className:u,as:c="div",...i},w)=>{const n=$(m,"row"),_=F(),b=j(),h=`${n}-cols`,f=[];return _.forEach(l=>{const d=i[l];delete i[l];let o;d!=null&&typeof d=="object"?{cols:o}=d:o=d;const r=l!==b?`-${l}`:"";o!=null&&f.push(`${h}${r}-${o}`)}),e(c,{ref:w,...i,className:q(u,n,...f)})});S.displayName="Row";const Z=m=>{const[u,c]=t.exports.useState(!1),[i,w]=t.exports.useState("bottom-start"),{data:n,setData:_,post:b,get:h,processing:f,errors:l,reset:d}=L({email:m.email,token:m.token,password:"",password2:"",remember:""});let o=t.exports.useRef(),r=t.exports.useRef();const[N,g]=t.exports.useState(!1),[k,v]=t.exports.useState(!1),[P,x]=t.exports.useState(!0),C=s=>{s.target.value!=""?(g(!0),v(!0),s.target.value.length>5&&(v(!1),s.target.classList.remove("error-input"))):(g(!1),v(!0),s.target.classList.add("error-input")),_(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)},R=()=>{x(!0),o.current.classList.remove("error-input")},B=s=>{s.preventDefault(),n.password.length<6&&c(!0),n.password==n.password2?(o.current.classList.remove("error-input"),h(route("actualizarContrasena"),{onError:()=>{setInputClass("form-input-section__container-input form-input-section__container-inputError"),setValidForm(!1)}})):(x(!1),console.log(o.current),o.current.classList.add("error-input"))},I=s=>{r.current.className=="content__confirmar-div-icon icon-show"?(r.current.className="content__confirmar-div-icon icon-hide",o.current.type="text",o.current.placeholder="Ingresa tu contraseña"):(r.current.className="content__confirmar-div-icon icon-show",o.current.type="password",o.current.placeholder="Contraseña1234")};return a(T,{children:[e(E,{className:"p-3",position:i,children:e(y,{onClose:()=>c(!1),show:u,delay:3e3,autohide:!0,children:e(y.Body,{children:a(S,{className:"align-items-center",children:[e(p,{md:1,children:e("span",{className:"toast-border"})}),e(p,{md:2,children:e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})})}),e(p,{md:8,children:e("p",{children:"La contraseña debe tener mínimo 6 carácteres."})}),e(p,{md:1,className:"d-flex",children:e("button",{type:"button",className:"icon-close m-auto",onClick:()=>c(!1)})})]})})})}),e("div",{id:"recuperar-contrasena-view",children:a("section",{className:"recuperar-contrasena--section",children:[e("video",{autoPlay:"autoplay",muted:"muted",loop:"loop",src:"/public/video/contrasena.webm"}),a("div",{id:"contenido-video",className:"contenido row",children:[e("div",{className:"contenido__video col-md-6 col-12",children:e("h2",{className:"contenido__video-texto",children:"Recupera tu contraseña"})}),e("div",{className:"contenido__form col-md-6 col-12",children:a("div",{className:"content",children:[e("div",{className:"content__header d-none d-md-block",children:e("a",{href:"/",children:e("img",{src:"/public/images/logo-licitaciones.svg",alt:"Licitaciones.info",className:"content__header-img"})})}),a("div",{className:"content__body",children:[a("div",{className:"content__body-div",children:[e("span",{className:"content__div-icon icon-shield"}),e("hr",{className:"linea__divisoria"}),a("span",{className:"content__div-text",children:[" En licitaciones.info nos preocupamos por tu seguridad, recuerda que tu contraseña debe estar compuesta por: ",e("span",{className:"content__div-text--modifier",children:"mínimo de 6 caracteres."})]})]}),a("form",{onSubmit:B,className:"content__body-form",children:[a("div",{id:"input_password",className:"contenido",children:[a("div",{htmlFor:"",className:"contenido__password-titulo",children:[e("span",{className:"contenido__password-titulo-icon"}),e("span",{children:"Nueva contraseña:"})]}),e("div",{className:"content-inputs",children:e(D,{onHandleChange:C,errorIcon:"contenido__password-div-icon icon-alert error-icon",errorIconStatus:k})})]}),a("div",{className:`content__form ${N?"":"passwordDisabled"}`,children:[e("div",{className:"content__form-confirmar",children:a("div",{className:"content__confirmar",children:[e("label",{htmlFor:"",className:"content__confirmar-label",children:"Confirmar tu nueva contraseña:"}),a("div",{className:"content__confirmar-div",children:[e("input",{ref:o,disabled:!N,type:"password",placeholder:"Ingresa de nuevo tu contraseña",id:"passwordConfirmar",name:"password2",autoComplete:"off",className:"content__confirmar-div-input",value:n.password2,onChange:C,onClick:R}),e("span",{className:"content__confirmar-div-icon icon-show",ref:r,onClick:I})]})]})}),e("div",{className:"content__form-nivel"})]}),P?e("div",{className:"content__body-button",children:e("button",{type:"submit",disabled:!N,className:"content__button-confirmar",children:"Recuperar contraseña"})}):e("div",{className:"content__body-alerta",children:e("div",{className:"content__alerta-div",children:a("span",{className:"content__alerta-div-text",children:[" Las contraseñas ",e("span",{className:"content__alerta-div-text--modifier",children:"no coinciden"})]})})})]})]}),e("hr",{className:"linea__divisoria"}),a("div",{className:"content__footer",children:[e("span",{className:"content__footer-text",children:" Si necesitas ayuda ponte en contacto con nuestro equipo de soporte técnico. "}),e("div",{className:"contactenos",children:a("a",{className:"contactenos__button",children:[e("span",{className:"contactenos__button-icon icon-contacto"}),e("span",{className:"contactenos__button-text",children:"Contáctanos"})]})})]})]})})]})]})})]})};export{Z as default};
