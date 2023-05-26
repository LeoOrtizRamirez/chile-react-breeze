import{r as t,a as e,u as L,j as a,F as T}from"./app-fc2cb093.js";/* empty css                 *//* empty css                      *//* empty css              */import{T as $,a as y}from"./estilos-toast-31b6b133.js";import{C as u}from"./Form-5fe57dce.js";import{e as E,s as F,t as j,f as q}from"./hasClass-82ee9514.js";import{P as D}from"./PasswordSecurity-d79c6467.js";import"./ElementChildren-711cff40.js";import"./OverlayTrigger-d92c1b0e.js";import"./mergeOptionsWithPopperConfig-e2ba043b.js";const S=t.exports.forwardRef(({bsPrefix:m,className:p,as:c="div",...i},w)=>{const n=E(m,"row"),_=F(),b=j(),h=`${n}-cols`,f=[];return _.forEach(l=>{const d=i[l];delete i[l];let s;d!=null&&typeof d=="object"?{cols:s}=d:s=d;const r=l!==b?`-${l}`:"";s!=null&&f.push(`${h}${r}-${s}`)}),e(c,{ref:w,...i,className:q(p,n,...f)})});S.displayName="Row";const V=S;const X=m=>{const[p,c]=t.exports.useState(!1),[i,w]=t.exports.useState("bottom-start"),{data:n,setData:_,post:b,get:h,processing:f,errors:l,reset:d}=L({email:m.email,token:m.token,password:"",password2:"",remember:""});let s=t.exports.useRef(),r=t.exports.useRef();const[N,g]=t.exports.useState(!1),[R,v]=t.exports.useState(!1),[k,x]=t.exports.useState(!0),C=o=>{o.target.value!=""?(g(!0),v(!0),o.target.value.length>5&&(v(!1),o.target.classList.remove("error-input"))):(g(!1),v(!0),o.target.classList.add("error-input")),_(o.target.name,o.target.type==="checkbox"?o.target.checked:o.target.value)},P=()=>{x(!0),s.current.classList.remove("error-input")},B=o=>{o.preventDefault(),n.password.length<6&&c(!0),n.password==n.password2?(s.current.classList.remove("error-input"),h(route("actualizarContrasena"),{onError:()=>{setInputClass("form-input-section__container-input form-input-section__container-inputError"),setValidForm(!1)}})):(x(!1),console.log(s.current),s.current.classList.add("error-input"))},I=o=>{r.current.className=="content__confirmar-div-icon icon-show"?(r.current.className="content__confirmar-div-icon icon-hide",s.current.type="text",s.current.placeholder="Ingresa tu contraseña"):(r.current.className="content__confirmar-div-icon icon-show",s.current.type="password",s.current.placeholder="Contraseña1234")};return a(T,{children:[e($,{className:"p-3",position:i,children:e(y,{onClose:()=>c(!1),show:p,delay:3e3,autohide:!0,children:e(y.Body,{children:a(V,{className:"align-items-center",children:[e(u,{md:1,children:e("span",{className:"toast-border"})}),e(u,{md:2,children:e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})})}),e(u,{md:8,children:e("p",{children:"La contraseña debe tener mínimo 6 carácteres."})}),e(u,{md:1,className:"d-flex",children:e("button",{type:"button",className:"icon-close m-auto",onClick:()=>c(!1)})})]})})})}),e("div",{id:"recuperar-contrasena-view",children:a("section",{className:"recuperar-contrasena--section",children:[e("video",{autoPlay:"autoplay",muted:"muted",loop:"loop",src:"/public/video/contrasena.webm"}),a("div",{id:"contenido-video",className:"contenido row",children:[e("div",{className:"contenido__video col-md-6 col-12",children:e("h2",{className:"contenido__video-texto",children:"Recupera tu contraseña"})}),e("div",{className:"contenido__form col-md-6 col-12",children:a("div",{className:"content",children:[e("div",{className:"content__header d-none d-md-block",children:e("a",{href:"/",children:e("img",{src:"/public/images/logo-licitaciones.svg",alt:"Licitaciones.info",className:"content__header-img"})})}),a("div",{className:"content__body",children:[a("div",{className:"content__body-div",children:[e("span",{className:"content__div-icon icon-shield"}),e("hr",{className:"linea__divisoria"}),a("span",{className:"content__div-text",children:[" En licitaciones.info nos preocupamos por tu seguridad, recuerda que tu contraseña debe estar compuesta por: ",e("span",{className:"content__div-text--modifier",children:"mínimo de 6 caracteres."})]})]}),a("form",{onSubmit:B,className:"content__body-form",children:[a("div",{id:"input_password",className:"contenido",children:[a("div",{htmlFor:"",className:"contenido__password-titulo",children:[e("span",{className:"contenido__password-titulo-icon"}),e("span",{children:"Nueva contraseña:"})]}),e("div",{className:"content-inputs",children:e(D,{onHandleChange:C,errorIcon:"contenido__password-div-icon icon-alert error-icon",errorIconStatus:R})})]}),a("div",{className:`content__form ${N?"":"passwordDisabled"}`,children:[e("div",{className:"content__form-confirmar",children:a("div",{className:"content__confirmar",children:[e("label",{htmlFor:"",className:"content__confirmar-label",children:"Confirmar tu nueva contraseña:"}),a("div",{className:"content__confirmar-div",children:[e("input",{ref:s,disabled:!N,type:"password",placeholder:"Ingresa de nuevo tu contraseña",id:"passwordConfirmar",name:"password2",autoComplete:"off",className:"content__confirmar-div-input",value:n.password2,onChange:C,onClick:P}),e("span",{className:"content__confirmar-div-icon icon-show",ref:r,onClick:I})]})]})}),e("div",{className:"content__form-nivel"})]}),k?e("div",{className:"content__body-button",children:e("button",{type:"submit",disabled:!N,className:"content__button-confirmar",children:"Recuperar contraseña"})}):e("div",{className:"content__body-alerta",children:e("div",{className:"content__alerta-div",children:a("span",{className:"content__alerta-div-text",children:[" Las contraseñas ",e("span",{className:"content__alerta-div-text--modifier",children:"no coinciden"})]})})})]})]}),e("hr",{className:"linea__divisoria"}),a("div",{className:"content__footer",children:[e("span",{className:"content__footer-text",children:" Si necesitas ayuda ponte en contacto con nuestro equipo de soporte técnico. "}),e("div",{className:"contactenos",children:a("a",{className:"contactenos__button",children:[e("span",{className:"contactenos__button-icon icon-contacto"}),e("span",{className:"contactenos__button-text",children:"Contáctanos"})]})})]})]})})]})]})})]})};export{X as default};
