import{r as l,j as i,F as v,a as e,u as q,H as y}from"./app-44b2e9a4.js";/* empty css                                     */import{E as $}from"./HeaderPublica-9129429d.js";/* empty css              */import{M as p}from"./font-unicolor-4f29255c.js";import{P as x}from"./Paises-83c0b4ab.js";import"./ApplicationLogoLici-886bc8f2.js";/* empty css                      */import"./TextInput-5b0baca9.js";const w=()=>{const[o,c]=l.exports.useState("gray"),[N,d]=l.exports.useState("no ingresada"),[g,m]=l.exports.useState(!1),[f,r]=l.exports.useState(!1),[u,n]=l.exports.useState(!1),[_,t]=l.exports.useState(!1),b=a=>{a=String(a).trim();const s={lower:/^[a-z?]+$/,upper:/^[A-Z]+$/,number:/^[0-9]+$/,upperLower:/^[A-Za-z]+$/,upperNumber:/^[A-Z0-9]+$/,lowerNumber:/^[a-z0-9]+$/,upperLowerNumber:/^[A-Za-z0-9]+$/};a.length>0&&a.length<6?s.lower.test(a)||s.upper.test(a)||s.number.test(a)?(c("red"),d("Mínima"),m(!0),r(!1),n(!1),t(!1)):s.upperLower.test(a)||s.upperNumber.test(a)||s.lowerNumber.test(a)?(c("yellow"),d("Media"),r(!0),m(!1),n(!1),t(!1)):s.upperLowerNumber.test(a)&&(c("green"),d("Fuerte"),n(!0),m(!1),r(!1),t(!1)):a.length==0?(c("gray"),d("no ingresada"),m(!1),r(!1),n(!1),t(!1)):s.lower.test(a)||s.upper.test(a)||s.number.test(a)?(c("yellow"),d("Media"),r(!0),m(!1),n(!1),t(!1)):s.upperLower.test(a)||s.upperNumber.test(a)||s.lowerNumber.test(a)?(c("green"),d("Fuerte"),n(!0),m(!1),r(!1),t(!1)):s.upperLowerNumber.test(a)&&(c("green-dark"),d("Muy fuerte"),t(!0),m(!1),r(!1),n(!1))},h=a=>{b(a.target.value)};return i(v,{children:[e("div",{className:"contenido__password",children:i("div",{className:"contenido__password-div",children:[e("input",{type:"password",placeholder:"Ingresa tu contraseña",id:"passwordNueva",name:"password",autocomplete:"off",icon:"icon-lock",className:"contenido__password-div-input",style:{width:100+"%;"},onChange:h}),e("span",{className:"contenido__password-div-icon icon-show"})]})}),e("div",{className:"contenido__nivel",children:e("div",{id:"tooltip-informacion",className:"contenido__nivel-iconos",children:i("div",{className:"contenido__iconos-seguridad",children:[i("div",{className:"contenido__circulo",children:[e("div",{className:`${g&&`bt-2-${o} br-2-${o} `} ${f&&`bt-2-${o} br-2-${o} `} ${u&&`bt-2-${o} br-2-${o} `}  ${_&&`bt-2-${o} br-2-${o} `} contenido__circulo-esquina__sup-der`}),e("div",{className:`${f&&`bb-2-${o} br-2-${o} `} ${u&&`bb-2-${o} br-2-${o} `} ${_&&`bb-2-${o} br-2-${o} `} contenido__circulo-esquina__inf-der`}),e("div",{className:`${u&&`bb-2-${o} bl-2-${o} `} ${_&&`bb-2-${o} bl-2-${o} `} contenido__circulo-esquina__inf-izq securityColor__gris-inf-izq`}),e("div",{className:`${_&&`bt-2-${o} bl-2-${o} `} contenido__circulo-esquina__sup-izq securityColor__gris-sup-izq `}),e("span",{className:`contenido__seguridad-icon icon-shield c-${o}`})]}),i("span",{className:"contenido__seguridad-text",children:[" Seguridad ",e("br",{}),e("span",{className:`contenido__seguridad-text--modifier c-${o}`,children:N})]})]})})})]})},S=w;function R(o){const{data:c,setData:N,post:d,processing:g,errors:m,reset:f}=q({name:"",email:"",password:"",password_confirmation:""}),[r,u]=l.exports.useState(!1),[n,_]=l.exports.useState({image:"",title:"",indicative:"+0",fixed:null});l.exports.useEffect(()=>()=>{f("password","password_confirmation")},[]);const t=()=>u(!1),b=()=>u(!0),h=a=>{_(a),u(!1)};return i(v,{children:[e(y,{title:"Register"}),e($,{user:o}),e("div",{id:"register-container",className:"container",children:i("div",{className:"bloque row",children:[e("div",{className:"bloque__info col-lg-6",children:i("div",{className:"bloque__info-container",children:[i("div",{className:"bloque__info-header",children:[e("div",{className:"bloque__info-header-title",children:i("span",{className:"bloque__info-header-title-text",children:["Crea una ",e("img",{src:"/icons/multicolor/crear cuenta.svg",alt:"Crea una cuenta gratis",className:"bloque__info-header-title-img"}),e("span",{className:"bloque__info-header-title-text--modifier",children:"cuenta gratis"})]})}),e("div",{className:"bloque__info-header-cuenta",children:i("span",{className:"bloque__info-header-cuenta-text",children:[" ¿Ya tienes una cuenta?",e("a",{href:route("login"),children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Inicia sesión"})})]})})]}),i("div",{className:"bloque__info-contenido",children:[i("div",{className:"bloque__info-contenido-div",children:[e("div",{className:"bloque__info-contenido-img",children:e("img",{src:"/icons/multicolor/servicio.svg",alt:"Servicio",className:"bloque__info-contenido-img--modifier"})}),e("div",{className:"bloque__info-contenido-text",children:i("span",{className:"bloque__info-contenido-text-span",children:[" Al crear tu cuenta tendrás ",e("span",{className:"bloque__info-contenido-text-span--modifier",children:"30 días de servicio"})," sin ningún costo. "]})})]}),i("div",{className:"bloque__info-contenido-div",children:[e("div",{className:"bloque__info-contenido-img",children:e("img",{src:"/icons/multicolor/licitaciones.svg",alt:"",className:"bloque__info-contenido-img--modifier"})}),e("div",{className:"bloque__info-contenido-text",children:i("span",{className:"bloque__info-contenido-text-span",children:[" Te damos acceso a ",e("span",{className:"bloque__info-contenido-text-span--modifier",children:"todas las Licitaciones "})," y contrataciones del estado en Colombia, Ecuador y Panamá. "]})})]}),i("div",{className:"bloque__info-contenido-div",children:[e("div",{className:"bloque__info-contenido-img",children:e("img",{src:"/icons/multicolor/notificaciones.svg",alt:"",className:"bloque__info-contenido-img--modifier"})}),e("div",{className:"bloque__info-contenido-text",children:i("span",{className:"bloque__info-contenido-text-span",children:[" Te enviamos ",e("span",{className:"bloque__info-contenido-text-span--modifier",children:"notificaciones diarias "})," con la información de tu interés. "]})})]}),i("div",{className:"bloque__info-contenido-div",children:[e("div",{className:"bloque__info-contenido-img",children:e("img",{src:"/icons/multicolor/funcionalidades.svg",alt:"",className:"bloque__info-contenido-img--modifier"})}),e("div",{className:"bloque__info-contenido-text",children:i("span",{className:"bloque__info-contenido-text-span",children:[" Utiliza todas las ",e("span",{className:"bloque__info-contenido-text-span--modifier",children:"funcionalidades "})," para ahorrar tiempo y dinero en la búsqueda de oportunidades de negocio. "]})})]})]})]})}),e("div",{className:"bloque__registro col-lg-6",children:i("form",{id:"form",name:"form",action:"",children:[i("div",{className:"bloque__registro-form",children:[i("div",{className:"bloque__registro-form-div",children:[i("div",{className:"bloque__registro-form-title",children:[e("span",{className:"icon-datos bloque__registro-form-title-span"}),e("label",{htmlFor:"",className:"bloque__registro-form-title-label",children:"Nombre:"})]}),i("div",{className:"bloque__registro-form-container",children:[e("input",{id:"name",name:"name",type:"text",placeholder:"Ingresa tu nombre y apellido",className:"bloque__registro-form-container-input","aria-required":"true","aria-invalid":"false"}),e("span",{className:""})]})]}),i("div",{className:"bloque__registro-form-div",children:[i("div",{className:"bloque__registro-form-title",children:[e("span",{className:"icon-mail bloque__registro-form-title-span"}),e("label",{htmlFor:"",className:"bloque__registro-form-title-label",children:"Correo electrónico:"})]}),i("div",{className:"bloque__registro-form-container",children:[e("input",{id:"email",name:"email",type:"email",placeholder:"Ingresa tu correo electrónico",className:"bloque__registro-form-container-input","aria-required":"true","aria-invalid":"false"}),e("span",{className:""})]})]}),e("div",{className:"bloque__registro-form-div",children:i("div",{id:"inputPaswordUserRegisterComponent",className:"contenido InputPassword",name:"password",type:"password",children:[i("div",{for:"",className:"contenido__password-titulo",children:[e("span",{className:"contenido__password-titulo-icon icon-lock"}),e("span",{children:"Contraseña:"})]}),e("div",{className:"content-inputs",children:e(S,{})})]})}),i("div",{className:"bloque__registro-form-div",children:[i("div",{className:"bloque__registro-form-title",children:[e("span",{className:"icon-phone bloque__registro-form-title-span"}),e("label",{for:"",className:"bloque__registro-form-title-label",children:"Telefono:"})]}),i("div",{className:"bloque__registro-form-telefono",children:[i("div",{className:"bloque__registro-form-telefono-button",onClick:b,children:[n.image==""?e("span",{className:"icon-earth bloque__registro-form-telefono-icono"}):e("img",{src:n.image,alt:"imagen bandera seleccionada",className:"contactenos_form--campo-indicativo-bandera"}),e("label",{for:"",className:"bloque__registro-form-telefono-label",children:n.indicative}),e("span",{className:"icon-down bloque__registro-form-telefono-flecha"})]}),e("hr",{className:"bloque__registro-form-telefono-linea"}),i("div",{className:"bloque__registro-form-telefono-div",children:[e("input",{id:"tel",name:"tel",type:"text",placeholder:"Ingresa tu número",className:"bloque__registro-form-telefono-input","aria-required":"true","aria-invalid":"false"}),e("span",{className:""})]})]})]}),i(p,{show:r,onHide:t,children:[e(p.Header,{closeButton:!0}),e(p.Body,{children:e(x,{addCountry:h})}),e(p.Footer,{})]}),e("div",{className:"bloque__registro-form-text",children:i("label",{className:"checkbox-contain",children:[i("span",{children:[" Acepto ",e("a",{href:"#",children:"términos, condiciones"})]}),i("span",{children:[e("a",{href:"#",children:" y las políticas de privacidad"})," de Licitaciones.info S.A.S. "]}),e("input",{type:"checkbox"}),e("div",{className:"checkbox-input"})]})}),e("div",{className:"bloque__registro-form-registrarse",children:e("button",{id:"submit",type:"submit",name:"submit",disabled:"disabled",className:"bloque__registro-form-button disabled",children:" Registrarme "})}),e("div",{className:"bloque__registro-form-beneficios",children:e("a",{children:" Conoce los beneficios al registrarse "})})]}),e("div",{}),e("div",{}),e("div",{})]})})]})})]})}export{R as default};