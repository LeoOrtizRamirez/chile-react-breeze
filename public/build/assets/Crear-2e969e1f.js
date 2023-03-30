import{r as c,a as e,F as l,j as i}from"./app-e03f33d7.js";import{A as we}from"./AuthenticatedLayout-765f0af1.js";import{T as Se,a as Pe}from"./estilos-toast-82b7906e.js";import{A as P}from"./ActividadEconomica-2be306ef.js";import"./HeaderLite-55a28499.js";import{M as o}from"./Modal-1a90e92a.js";import{C as ye}from"./Calendar-121341f7.js";import"./transition-366134ce.js";/* empty css                      */import"./createWithBsPrefix-4cdebaa1.js";import"./CloseButton-efae7ba7.js";import"./ApplicationLogoLici-5ce1b097.js";import"./ModalLoginSesion-39447b24.js";import"./Nav-ed20a10a.js";import"./hook-36b231d4.js";import"./useIsomorphicEffect-79fb6ed8.js";import"./TextInput-f00c25e9.js";/* empty css                      *//* empty css              */import"./hasClass-12df0fe3.js";const Ke=({auth:M,actividades_economicas:O,tiposcompras:G,localizaciones:U})=>{const[J,f]=c.exports.useState(!1),[K,Q]=c.exports.useState(""),[g,X]=c.exports.useState(""),[Y,$e]=c.exports.useState(O),[b,y]=c.exports.useState([]),[$,T]=c.exports.useState([]),[D,R]=c.exports.useState([]),_=(a,d)=>{switch(d){case"ActividadEconomica":a.length>0?y(a):y([]);break;case"Localizaciones":a.length>0?T(a):T([]);break;case"TiposCompras":a.length>0?R(a):R([]);break}},[s,Z]=c.exports.useState(1),[h,ee]=c.exports.useState([]),r=a=>{a==2&&b.length==0?(Q("Debes seleccionar mínimo una actividad económica"),X("icon-error"),f(!0)):(Z(a),ee([...h,a]))},H=c.exports.useRef(""),[A,E]=c.exports.useState(""),[F,ie]=c.exports.useState("$0"),[ae,j]=c.exports.useState(!1),[v,se]=c.exports.useState(!0),z=(a,d)=>{var m=a.target.value;m=le(m),d=="desde"?(ce(m),ie("$"+new Intl.NumberFormat().format(m))):m==0?(E(""),H.current.setAttribute("placeholder","Sin limite superior")):E("$"+new Intl.NumberFormat().format(m))},ce=a=>{a==0?j(!1):j(!0)},le=a=>(a=a.replace(" ",""),a=a.replace("$",""),a=a.replace(",",""),a=a.replace(".",""),a==""&&(a=0),parseInt(a)),[N,re]=c.exports.useState(!0),[C,ne]=c.exports.useState(!0),k=c.exports.useRef(""),x=c.exports.useRef(""),te=(a,d)=>(a.setDate(a.getDate()-d),a),oe=a=>{a.target.checked?(x.current.style.display="block",k.current.classList.remove("disabled"),w(u.toISOString().split("T")[0])):(x.current.style.display="none",k.current.classList.add("disabled"),w("Sin Historico"))},[p,de]=c.exports.useState(""),[I,me]=c.exports.useState(""),[q,w]=c.exports.useState(""),W=a=>{p.current&&!p.current.contains(a.target)&&(p.current.value==""?p.current.classList.add("is-invalid"):p.current.classList.remove("is-invalid"))};c.exports.useEffect(()=>(document.addEventListener("click",W,!0),()=>{document.removeEventListener("click",W,!0)}),[]);const pe=()=>{var a={actividades_economicas:b,tipos_compras:D,localizaciones:$,limite_inferior_cuantia:F,limite_superior_cuantia:A,nombre_filtro:p,descripcion_filtro:I,sin_presupuesto:v,historico_contratacion:N,envio_alertas:C},d=document.querySelector('meta[name="csrf-token"]');axios.post("/grupo-filtro-usuarios/store",{data:a},{headers:{Authorization:`Bearer ${d.content}`}}).then(m=>{console.log(m)}).catch(m=>{console.log("error")})},[he,L]=c.exports.useState(!1),B=()=>L(!1),ue=()=>L(!0),[u,fe]=c.exports.useState(te(new Date,91));c.exports.useEffect(()=>{w(u.toISOString().split("T")[0])},[u]);const[ge,V]=c.exports.useState(!1),S=()=>V(!1),be=()=>V(!0),[n,_e]=c.exports.useState("Por defecto"),[ve,Ne]=c.exports.useState(""),[Ce,ke]=c.exports.useState("/public/images/perfil-invisible.svg"),t=(a,d)=>{_e(a),Ne(d)},xe=()=>{ke(ve),S()};return e(l,{children:i(we,{auth:M,page:"perfiles",children:[i("div",{className:"content_blank_interno margin_left_layout",children:[e("div",{class:"col",children:e("h2",{class:"name_seccion_app",children:"Crear perfil de negocio"})}),i("div",{id:"container-grupo",children:[i("div",{id:"perfil-user",children:[e("button",{id:"btn-cancelar-global-perfiles",class:"btn btn-new-danger btnRadius",children:"Cancelar"}),e("div",{className:"perfil-guias",children:i("ul",{children:[e("li",{children:i("div",{className:`perfil-guias__indicador ${s==1?"perfil-guias__indicador--activo":""}`,onClick:()=>r(1),children:[e("i",{id:"icon1",className:`icon-Paso-1-click ${s==1?"c-activo-iconos":""}`,children:" "})," ",e("span",{id:"span1",className:`${s==1?"c-activo-texto-iconos":""}`,children:"Actividad económica"})]})}),h.includes(2)&&e("li",{children:i("div",{className:`perfil-guias__indicador ${s==2?"perfil-guias__indicador--activo":""}`,onClick:()=>r(2),children:[e("i",{id:"icon2",className:`icon-Paso-2-click ${s==2?"c-activo-iconos":""}`})," ",e("span",{id:"span2",className:`${s==2?"c-activo-texto-iconos":""}`,children:"Tipo de compra"})]})}),h.includes(3)&&e("li",{children:i("div",{className:`perfil-guias__indicador ${s==3?"perfil-guias__indicador--activo":""}`,onClick:()=>r(3),children:[e("i",{id:"icon3",className:`icon-Paso-3-click ${s==3?"c-activo-iconos":""}`})," ",e("span",{id:"span3",className:`${s==3?"c-activo-texto-iconos":""}`,children:"Localizaciones"})]})}),h.includes(4)&&e("li",{children:i("div",{className:`perfil-guias__indicador ${s==4?"perfil-guias__indicador--activo":""}`,onClick:()=>r(4),children:[e("i",{id:"icon4",className:`icon-Paso-4-click ${s==4?"c-activo-iconos":""}`})," ",e("span",{id:"span4",className:`${s==4?"c-activo-texto-iconos":""}`,children:"Rango de Cuantía"})]})}),h.includes(5)&&e("li",{children:i("div",{className:`perfil-guias__indicador ${s==5?"perfil-guias__indicador--activo":""}`,onClick:()=>r(5),children:[e("i",{id:"icon5",className:`icon-Paso-5-click ${s==5?"c-activo-iconos":""}`})," ",e("span",{id:"span5",className:`${s==5?"c-activo-texto-iconos":""}`,children:"Preferencias"})]})})]})}),e("div",{className:"perfil-contenido",children:e("div",{className:"tree_categorias tree_1",children:i("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:[e(l,{children:s==1&&e(P,{subcategorias:Y,nameBuscador:"Busca por actividad económica o UNSPSC",onHandleSectores:_,tipo:"ActividadEconomica",checkeds:b})}),i(l,{children:[" ",s==2&&e(P,{subcategorias:G,nameBuscador:"Buscar Tipo de Compra",onHandleSectores:_,tipo:"TiposCompras",checkeds:D})]}),e(l,{children:s==3&&e(P,{subcategorias:U,nameBuscador:"Buscar Localización",onHandleSectores:_,tipo:"Localizaciones",checkeds:$})}),e(l,{children:s==4&&i("div",{className:"perfil-cuantias",children:[i("div",{id:"campos-cuantias",className:"justify-content-center pt-2 pb-5 py-md-5 row",children:[e("div",{className:"col-10 col-sm-8 col-lg-4 col-md-5",children:i("div",{className:"form-group mb-5 mb-md-1 campos-cuantias__form",children:[i("span",{className:"icon-Cuantia campos-cuantias__icon",children:[e("span",{className:"path1"}),e("span",{className:"path2"}),e("span",{className:"path3"}),e("span",{className:"path4"})]}),e("label",{children:"Cuantía desde:"}),e("input",{value:F,onChange:a=>z(a,"desde"),type:"text",id:"cuantia_desde",name:"cuantia_desde",placeholder:"$",className:"form-control inputs_form"})]})}),e("div",{className:"col-10 col-sm-8 col-lg-4 col-md-5",children:i("div",{className:"form-group campos-cuantias__form",children:[i("span",{className:"icon-Cuantia-2 campos-cuantias__icon",children:[e("span",{className:"path1"}),e("span",{className:"path2"}),e("span",{className:"path3"}),e("span",{className:"path4"})]}),e("label",{id:"descripcion",children:"Cuantía hasta:"}),e("input",{ref:H,value:A,onChange:a=>z(a,"hasta"),type:"text",id:"cuantia_hasta",name:"cuantia_hasta",placeholder:"Sin limite superior",className:"form-control inputs_form"})]})})]}),ae&&i("div",{className:"align-items-center col-11 col-lg-8 col-md-9 col-sm-10 justify-content-between campos-cuantias__block row",children:[e("div",{className:"col-8 p-0",children:i("p",{children:["¿Deseas incluir contratos"," ",e("span",{className:"text_color",children:"sin presupuesto asignado"})," ","o con cuantía de"," ",e("span",{className:"text_color",children:"$0"})," ","en este perfil?"]})}),e("div",{className:"col-3 text-center",children:i("label",{className:"switch",children:[e("input",{type:"checkbox",checked:v,onClick:()=>se(!v)}),e("span",{className:"slider round"})]})})]})]})}),i(l,{children:[" ",s==5&&e("div",{className:"perfil-preferencia",children:i("div",{className:"row pt-3 justify-content-center pb-lg-4",children:[i("div",{className:"col-xs-12 col-sm-12 col-xl-6 px-4 contenedor-general row",children:[e("div",{className:"col-3 col-md-3 col-xl-3",children:i("div",{className:"imagen",children:[e("img",{src:Ce,alt:"Avatar",className:"imagen__avatar"}),i("button",{className:"imagen__cambiar-avatar-button",onClick:be,children:[e("span",{className:"icon-Editar"}),e("img",{src:"/public/images/Web/icon-Editar.svg",alt:"Editar",className:""})]})]})}),e("div",{className:"col-9 col-md-9 col-xl-9",children:i("div",{className:"perfil-preferencia__form1",children:[e("label",{id:"nombre",className:"perfil-preferencia__labels",children:"Dale un nombre a tu perfil:"}),e("input",{value:p,onChange:a=>de(a.target.value),type:"text",name:"nombre",className:"form-control inputs_form padd-peq mb-0",required:!0}),e("div",{className:"invalid-feedback mb-3",children:"El campo nombre perfil es obligatorio."}),e("label",{id:"descripcion",className:"perfil-preferencia__labels",children:"Descripción del perfil (opcional):"}),e("textarea",{value:I,onChange:a=>me(a.target.value),type:"text",name:"descripcion",rows:"3",className:"form-control inputs_form"})]})})]}),i("div",{className:"col-xs-12 col-sm-12 col-xl-6 px-4 contenedor-general__derecha",children:[i("div",{className:"perfil-preferencia__historico pb-4 pb-lg-0 px-3 px-md-0",children:[i("div",{className:"align-items-center d-flex justify-content-between perfil-preferencia__historico-row mb-3",children:[i("div",{className:"perfil-preferencia__historico-row__icon d-flex",children:[e("img",{src:"/public/images/Web/icon-Historico.svg",alt:"",width:30}),e("label",{children:"Histórico de procesos de contratación:"})]}),e("div",{className:"perfil-preferencia__historico-row__toggleb",children:i("label",{className:"switch",children:[e("input",{type:"checkbox",checked:N,onClick:()=>re(!N),onChange:oe}),e("span",{className:"slider round"})]})})]}),i("div",{className:"align-items-center d-flex perfil-preferencia__historico-row mb-3",children:[e("div",{className:"perfil-preferencia__historico-row__span",children:e("span",{className:"perfil-preferencia__fecha-historico from-label",children:"Desde: "})}),i("div",{className:"perfil-preferencia__historico-row__input d-flex",children:[e("input",{disabled:!0,ref:k,value:q,name:"fecha_historico",className:"perfil-preferencia__fecha-historico_input"}),i("button",{ref:x,className:"btn btnRadius btn-new-blue button_change_date",onClick:ue,children:[e("img",{src:"/public/images/Web/icon-Cambiar.svg",alt:"icon-Cambiar",className:"margin-right-5"})," Cambiar fecha"]})]})]})]}),i("div",{className:"perfil-preferencia__form1",children:[i("div",{className:"align-items-center d-flex justify-content-between perfil-preferencia__historico-row mb-3",children:[i("div",{className:"perfil-preferencia__historico-row__icon d-flex",children:[e("img",{src:"/public/images/Web/icon-Email-noti.svg",alt:"",width:30}),e("label",{children:"Notificaciones a tu email:"})]}),e("div",{className:"perfil-preferencia__historico-row__toggleb",children:i("label",{className:"switch",children:[e("input",{className:"Activado",type:"checkbox",checked:C,onClick:()=>ne(!C)}),e("span",{className:"slider round"})]})})]}),e("div",{className:"alineamiento-label d-flex pb-3 pb-lg-0 px-3 px-md-0",children:i("p",{className:"mr5 text-justify",children:["Te notificaríamos en tu ",e("span",{className:"text_color",children:"correo"})," cuando encontremos una oportunidad que coincida con este perfil."]})})]})]})]})})]})]})})}),i("div",{className:"perfil-bottons-footer position-relative text-center mt-4",children:[e(l,{children:s==2&&e("a",{onClick:()=>r(1),className:"btn btnRadius btn-new-blue",id:"btn-return-tc",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Volver"})})}),e(l,{children:s==3&&e("a",{onClick:()=>r(2),className:"btn btnRadius btn-new-blue",id:"btn-return-lc",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Volver"})})}),e(l,{children:s==4&&e("a",{onClick:()=>r(3),className:"btn btnRadius btn-new-blue",id:"btn-return-cu",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Volver"})})}),e(l,{children:s==5&&e("a",{onClick:()=>r(4),className:"btn btnRadius btn-new-blue",id:"btn-return-te",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Volver"})})}),e(l,{children:s==1&&e("a",{onClick:()=>r(2),className:"btn btnRadius btn-new-blue",id:"btn-next-ac",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})})}),e(l,{children:s==2&&e("a",{onClick:()=>r(3),className:"btn btnRadius btn-new-blue",id:"btn-next-tc",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})})}),e(l,{children:s==3&&e("a",{onClick:()=>r(4),className:"btn btnRadius btn-new-blue",id:"btn-next-lc",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})})}),e(l,{children:s==4&&e("a",{onClick:()=>r(5),className:"btn btnRadius btn-new-blue",id:"btn-next-cu",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})})}),e(l,{children:s==5&&e("a",{onClick:pe,className:"btn btnRadius btn-new-blue",id:"btn-next-cu",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Guardar"})})})]})]}),i(o,{show:he,onHide:B,backdrop:"static",keyboard:!1,size:"lg",id:"calendar",children:[e(o.Header,{closeButton:!0,children:e(o.Title,{id:"modal-calendar-title",children:"Selecciona la fecha de inicio para el histórico"})}),i(o.Body,{children:[e(ye,{onChange:fe,value:u,selectRange:!1,maxDate:new Date}),e("div",{id:"resultados",className:"row",children:i("div",{className:"col text-center",children:[e("span",{children:"Desde :"})," ",e("span",{children:q})]})}),e("div",{className:"mt-5 text-center",children:e("button",{type:"button",className:"btn-new-green btnRadius text-center bg-transparent px-5",onClick:B,children:"Filtrar"})})]}),e(o.Footer,{})]}),i(o,{show:ge,onHide:S,backdrop:"static",keyboard:!1,size:"lg",id:"filter",children:[e(o.Header,{closeButton:!0,children:e(o.Title,{id:"modal-filter-title",children:"Selecciona la imagen de tu perfil de negocio"})}),e(o.Body,{children:i("div",{className:"justify-content-center row",children:[e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>t("Por defecto","/public/images/perfiles/perfil-invisible.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-invisible.svg",alt:"Por defecto img"}),n=="Por defecto"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>t("Perfil amarillo","/public/images/perfiles/perfil-amarillo.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-amarillo.svg",alt:"Perfil amarillo img"}),n=="Perfil amarillo"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>t("Perfil azul","/public/images/perfiles/perfil-azul.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-azul.svg",alt:"Perfil azul img"}),n=="Perfil azul"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>t("Perfil gris","/public/images/perfiles/perfil-gris.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-gris.svg",alt:"Perfil gris img"}),n=="Perfil gris"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>t("Perfil morado","/public/images/perfiles/perfil-morado.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-morado.svg",alt:"Perfil morado img"}),n=="Perfil morado"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>t("Perfil negro","/public/images/perfiles/perfil-negro.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-negro.svg",alt:"Perfil negro img"}),n=="Perfil negro"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>t("Perfil rojo","/public/images/perfiles/perfil-rojo.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-rojo.svg",alt:"Perfil rojo img"}),n=="Perfil rojo"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>t("Perfil rosado","/public/images/perfiles/perfil-rosado.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-rosado.svg",alt:"Perfil rosado img"}),n=="Perfil rosado"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>t("Perfil verde","/public/images/perfiles/perfil-verde.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-verde.svg",alt:"Perfil verde img"}),n=="Perfil verde"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>t("Perfil violeta","/public/images/perfiles/perfil-violeta.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-violeta.svg",alt:"Perfil violeta img"}),n=="Perfil violeta"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})})]})}),i(o.Footer,{class:"modal-footer buttons-footer",children:[e("button",{class:"btnRadius btn-new-gray",onClick:S,children:"Atrás"}),e("button",{class:"btnRadius btn-new-green",onClick:xe,children:"Seleccionar"})]})]})]})]}),e(Se,{position:"bottom-start",children:e(Pe,{onClose:()=>f(!1),show:J,delay:3e3,autohide:!0,children:i("div",{className:`notification-toast ${g=="icon-error"?"error":"success"}`,children:[e("span",{className:`toast-icon ${g=="icon-error"?"toast-danger":"toast-success"}`,children:e("span",{className:g})}),e("p",{className:"title",children:K}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>f(!1)})]})})})]})})};export{Ke as default};
