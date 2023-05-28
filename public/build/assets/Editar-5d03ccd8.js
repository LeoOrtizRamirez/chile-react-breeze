import{r as s,a as e,F as n,j as i}from"./app-fa164d83.js";import{A as qe,T as Ee}from"./AuthenticatedLayout-7fa0e1cf.js";import{A as j}from"./ActividadEconomica-620594c8.js";import"./HeaderLite-01b27449.js";import{M as p}from"./Nav-c17416bb.js";import{R as je}from"./ResumenPerfil-bb3bf4ae.js";import{C as Be}from"./Calendar-6362ee0b.js";/* empty css              */import"./InputError-48a07e6f.js";import"./hasClass-f80d6e54.js";import"./mergeOptionsWithPopperConfig-2f589622.js";import"./module-041de008.js";import"./Button-269c89ce.js";/* empty css                      *//* empty css                 */import"./ApplicationLogoLici-686a6a9e.js";import"./ModalLoginSesion-d7db135c.js";import"./Collapse-a55b1df4.js";import"./TextInput-70c7f2b7.js";/* empty css              */import"./Accordion-116abebe.js";const oi=({auth:ee,actividades_economicas:ie,tiposcompras:x,localizaciones:S,actividades_economicas_actuales:ae,tiposcompras_actuales:se,localizaciones_actuales:ce,perfil:r,pasos_seleccionados:le,paso_actual:B})=>{const[w,ne]=s.exports.useState([]);s.exports.useEffect(()=>{var a=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/get-licicodigos",{},{headers:{Authorization:`Bearer ${a.content}`}}).then(l=>{ne(l.data)}).catch(l=>{console.log(l.response.data)})},[]);const[I,Ie]=s.exports.useState(ie),[g,W]=s.exports.useState(ae),[P,M]=s.exports.useState(ce),[y,O]=s.exports.useState(se),R=(a,l)=>{switch(l){case"ActividadEconomica":a.length>0?W(a):W([]);break;case"Localizaciones":a.length>0?M(a):M([]);break;case"TiposCompras":a.length>0?O(a):O([]);break}};console.log("paso_actual",B);const[c,re]=s.exports.useState(B),[u,te]=s.exports.useState(le),t=a=>{g.length==0?q.current.show({severity:"error",summary:"Debes seleccionar mínimo una actividad económica.",life:3e3}):(re(a),te([...u,a]))},A={style:"currency",currency:"COP",minimumFractionDigits:0},[D,oe]=s.exports.useState(r.limite_superior_cuantia.toLocaleString("en-US",A).replace("COP","$")),[$,de]=s.exports.useState(r.limite_inferior_cuantia.toLocaleString("en-US",A).replace("COP","$")),[me,U]=s.exports.useState(!1),[b,pe]=s.exports.useState(r.sin_presupuesto==1),G=a=>{const l=parseInt(a.target.value.replace(/[^0-9]+/g,""))||0;return a.target.name=="cuantia_desde"&&ue(l),l.toLocaleString("en-US",A).replace("COP","$")},ue=a=>{a==0?U(!1):U(!0)},[V,he]=s.exports.useState(r.historico!=null),[_,fe]=s.exports.useState(r.envio_alertas==1),H=s.exports.useRef(""),T=s.exports.useRef(""),J=(a,l)=>(a.setDate(a.getDate()-l),a),ge=a=>{a.target.checked?(T.current.style.visibility="visible",H.current.classList.remove("disabled"),h(C.toISOString().split("T")[0])):(T.current.style.visibility="hidden",H.current.classList.add("disabled"),h("Sin Historico"))},[v,be]=s.exports.useState(r.nombre_filtro),[L,_e]=s.exports.useState(r.descripcion_filtro),[N,h]=s.exports.useState(r.historico==null?"Sin Historico":r.historico),ve=a=>{var l=document.querySelector("#inputNombrePerfil");a.target.value==""?l==null||l.classList.add("is-invalid"):l==null||l.classList.remove("is-invalid"),be(a.target.value)},Ne=()=>{if(v==""){var a=document.querySelector("#inputNombrePerfil");a==null||a.classList.add("is-invalid"),q.current.show({severity:"error",summary:"Debes ingresar un nombre para el perfil.",life:3e3});return}Fe(!0);var l={perfil:r.id,actividades_economicas:g,tipos_compras:y,localizaciones:P,limite_inferior_cuantia:$,limite_superior_cuantia:D,nombre_filtro:v,descripcion_filtro:L,sin_presupuesto:b,historico_contratacion:N,envio_alertas:_,imagen_filtro:F},E=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/grupo/update",{data:l},{headers:{Authorization:`Bearer ${E.content}`}}).then(k=>{console.log(k),window.location.href="/cliente/grupo?create=success"}).catch(k=>{console.log("error")})},[Ce,K]=s.exports.useState(!1),Q=()=>K(!1),ke=()=>K(!0),[C,X]=s.exports.useState(J(new Date,91));s.exports.useEffect(()=>{h(C.toISOString().split("T")[0])},[C]),s.exports.useEffect(()=>{r.historico==null?h("Sin Historico"):(h(r.historico),X(J(new Date(r.historico),0)))},[]);const[xe,Y]=s.exports.useState(!1),z=()=>Y(!1),Se=()=>Y(!0),[d,we]=s.exports.useState("Por defecto"),[Pe,ye]=s.exports.useState(""),[F,Re]=s.exports.useState(r.imagen_filtro),m=(a,l)=>{we(a),ye(l)},Ae=()=>{Re(Pe),z()},[De,Z]=s.exports.useState(!1),[$e,He]=s.exports.useState([]),Te=()=>{const a=I.filter(function(o){return g.some(function(f){return o.id===f})}).map(function(o){return o.nombre}),l=x.filter(function(o){return y.some(function(f){return o.id===f})}).map(function(o){return o.nombre}),E=S.filter(function(o){return P.some(function(f){return o.id===f})}).map(function(o){return o.nombre});var k={actividades_economicas:a,tiposcompras:l,localizaciones:E,total_tiposcompras:x.length,total_localizaciones:S.length,perfil:{limite_inferior_cuantia:$,limite_superior_cuantia:D,nombre_filtro:v,descripcion_filtro:L,sin_presupuesto:b,historico_contratacion:N,envio_alertas:_,imagen_filtro:F}};He(k),Z(!0)},Le=()=>{Z(!1)},q=s.exports.useRef(null),[ze,Fe]=s.exports.useState(!1);return e(n,{children:i(qe,{auth:ee,page:"perfiles",globalLoading:ze,children:[i("div",{className:"content_blank_interno margin_left_layout",children:[e("div",{class:"col",children:e("h2",{class:"name_seccion_app",children:"Editar perfil de negocio"})}),i("div",{id:"container-grupo",children:[i("div",{id:"perfil-user",children:[e("a",{href:"/cliente/grupo",id:"btn-cancelar-global-perfiles",class:"btn btn-new-danger btnRadius",children:"Cancelar"}),e("div",{className:"perfil-guias",children:i("ul",{children:[e("li",{children:i("div",{className:`perfil-guias__indicador ${c==1?"perfil-guias__indicador--activo":""}`,onClick:()=>t(1),children:[e("i",{id:"icon1",className:`icon-Paso-1-click ${c==1?"c-activo-iconos":""}`,children:" "})," ",e("span",{id:"span1",className:`${c==1?"c-activo-texto-iconos":""}`,children:"Actividad económica"})]})}),u.includes(2)&&e("li",{children:i("div",{className:`perfil-guias__indicador ${c==2?"perfil-guias__indicador--activo":""}`,onClick:()=>t(2),children:[e("i",{id:"icon2",className:`icon-Paso-2-click ${c==2?"c-activo-iconos":""}`})," ",e("span",{id:"span2",className:`${c==2?"c-activo-texto-iconos":""}`,children:"Modalidad"})]})}),u.includes(3)&&e("li",{children:i("div",{className:`perfil-guias__indicador ${c==3?"perfil-guias__indicador--activo":""}`,onClick:()=>t(3),children:[e("i",{id:"icon3",className:`icon-Paso-3-click ${c==3?"c-activo-iconos":""}`})," ",e("span",{id:"span3",className:`${c==3?"c-activo-texto-iconos":""}`,children:"Localizaciones"})]})}),u.includes(4)&&e("li",{children:i("div",{className:`perfil-guias__indicador ${c==4?"perfil-guias__indicador--activo":""}`,onClick:()=>t(4),children:[e("i",{id:"icon4",className:`icon-Paso-4-click ${c==4?"c-activo-iconos":""}`})," ",e("span",{id:"span4",className:`${c==4?"c-activo-texto-iconos":""}`,children:"Rango de Cuantía"})]})}),u.includes(5)&&e("li",{children:i("div",{className:`perfil-guias__indicador ${c==5?"perfil-guias__indicador--activo":""}`,onClick:()=>t(5),children:[e("i",{id:"icon5",className:`icon-Paso-5-click ${c==5?"c-activo-iconos":""}`})," ",e("span",{id:"span5",className:`${c==5?"c-activo-texto-iconos":""}`,children:"Preferencias"})]})})]})}),e("div",{className:"perfil-contenido",children:i("div",{className:"tree_categorias tree_1",children:[e(n,{children:c==1&&e(j,{subcategorias:I,nameBuscador:"Busca por actividad económica o UNSPSC",onHandleSectores:R,tipo:"ActividadEconomica",checkeds:g,checkAllText:"",licicodigos:w})}),i(n,{children:[" ",c==2&&e(j,{subcategorias:x,nameBuscador:"Buscar Modalidad",onHandleSectores:R,tipo:"TiposCompras",checkeds:y,checkAllText:"Seleccionar todas las modalidades",licicodigos:w})]}),e(n,{children:c==3&&e(j,{subcategorias:S,nameBuscador:"Buscar Localización",onHandleSectores:R,tipo:"Localizaciones",checkeds:P,checkAllText:"Todo el país - Chile",licicodigos:w})}),e(n,{children:c==4&&i("div",{className:"perfil-cuantias",children:[i("div",{id:"campos-cuantias",className:"justify-content-center pt-2 pb-5 py-md-5 row",children:[e("div",{className:"col-10 col-sm-8 col-lg-4 col-md-5",children:i("div",{className:"form-group mb-5 mb-md-1 campos-cuantias__form",children:[i("span",{className:"icon-Cuantia campos-cuantias__icon",children:[e("span",{className:"path1"}),e("span",{className:"path2"}),e("span",{className:"path3"}),e("span",{className:"path4"})]}),e("label",{children:"Cuantía desde:"}),e("input",{value:$,onChange:a=>de(G(a)),type:"text",id:"cuantia_desde",name:"cuantia_desde",placeholder:"$",className:"form-control inputs_form"})]})}),e("div",{className:"col-10 col-sm-8 col-lg-4 col-md-5",children:i("div",{className:"form-group campos-cuantias__form",children:[i("span",{className:"icon-Cuantia-2 campos-cuantias__icon",children:[e("span",{className:"path1"}),e("span",{className:"path2"}),e("span",{className:"path3"}),e("span",{className:"path4"})]}),e("label",{id:"descripcion",children:"Cuantía hasta:"}),e("input",{value:D,onChange:a=>oe(G(a)),type:"text",id:"cuantia_hasta",name:"cuantia_hasta",placeholder:"Sin limite superior",className:"form-control inputs_form"})]})})]}),me&&i("div",{className:"align-items-center col-11 col-lg-8 col-md-9 col-sm-10 justify-content-between campos-cuantias__block row",children:[e("div",{className:"col-8 p-0",children:i("p",{children:["¿Deseas incluir contratos"," ",e("span",{className:"text_color",children:"sin presupuesto asignado"})," ","o con cuantía de"," ",e("span",{className:"text_color",children:"$0"})," ","en este perfil?"]})}),e("div",{className:"col-3 text-center",children:i("label",{className:"switch",children:[e("input",{type:"checkbox",checked:b,onClick:()=>pe(!b)}),e("span",{className:"slider round"})]})})]})]})}),i(n,{children:[" ",c==5&&e("div",{className:"perfil-preferencia",children:i("div",{className:"row pt-3 justify-content-center pb-lg-4",children:[i("div",{className:"col-xs-12 col-sm-12 col-xl-6 px-4 contenedor-general row",children:[e("div",{className:"col-3 col-md-3 col-xl-3",children:i("div",{className:"imagen",children:[e("img",{src:F,alt:"Avatar",className:"imagen__avatar"}),e("button",{className:"imagen__cambiar-avatar-button",onClick:Se,children:e("span",{className:"icon-Editar"})})]})}),e("div",{className:"col-9 col-md-9 col-xl-9",children:i("div",{className:"perfil-preferencia__form1",children:[e("label",{id:"nombre",className:"perfil-preferencia__labels",children:"Dale un nombre a tu perfil:"}),e("input",{id:"inputNombrePerfil",value:v,onChange:ve,type:"text",name:"nombre",className:"form-control inputs_form padd-peq mb-0",required:!0}),e("div",{className:"invalid-feedback mb-3",children:"El campo nombre perfil es obligatorio."}),e("label",{id:"descripcion",className:"perfil-preferencia__labels",children:"Descripción del perfil (opcional):"}),e("textarea",{value:L,onChange:a=>_e(a.target.value),type:"text",name:"descripcion",rows:"3",className:"form-control inputs_form"})]})})]}),i("div",{className:"col-xs-12 col-sm-12 col-xl-6 px-4 contenedor-general__derecha",children:[i("div",{className:"perfil-preferencia__historico pb-4 pb-lg-0 px-3 px-md-0",children:[i("div",{className:"align-items-center d-flex justify-content-between perfil-preferencia__historico-row mb-3",children:[i("div",{className:"perfil-preferencia__historico-row__icon d-flex",children:[e("img",{src:"/public/images/Web/icon-Historico.svg",alt:"",width:30}),e("label",{children:"Histórico de procesos de contratación:"})]}),e("div",{className:"perfil-preferencia__historico-row__toggleb",children:i("label",{className:"switch",children:[e("input",{type:"checkbox",checked:V,onClick:()=>he(!V),onChange:ge}),e("span",{className:"slider round"})]})})]}),i("div",{className:"align-items-center d-flex perfil-preferencia__historico-row mb-3",children:[e("div",{className:"perfil-preferencia__historico-row__span",children:e("span",{className:"perfil-preferencia__fecha-historico from-label",children:"Desde: "})}),i("div",{className:"perfil-preferencia__historico-row__input d-flex",children:[e("input",{disabled:!0,ref:H,value:N,name:"fecha_historico",className:"perfil-preferencia__fecha-historico_input"}),i("button",{ref:T,className:"btn btnRadius btn-new-blue button_change_date",onClick:ke,style:{visibility:r.historico==null?"hidden":"visible"},children:[e("img",{src:"/public/images/Web/icon-Cambiar.svg",alt:"icon-Cambiar",className:"margin-right-5"})," Cambiar fecha"]})]})]})]}),i("div",{className:"perfil-preferencia__form1",children:[i("div",{className:"align-items-center d-flex justify-content-between perfil-preferencia__historico-row mb-3",children:[i("div",{className:"perfil-preferencia__historico-row__icon d-flex",children:[e("img",{src:"/public/images/Web/icon-Email-noti.svg",alt:"",width:30}),e("label",{children:"Notificaciones a tu email:"})]}),e("div",{className:"perfil-preferencia__historico-row__toggleb",children:i("label",{className:"switch",children:[e("input",{className:"Activado",type:"checkbox",checked:_,onClick:()=>fe(!_)}),e("span",{className:"slider round"})]})})]}),e("div",{className:"alineamiento-label d-flex pb-3 pb-lg-0 px-3 px-md-0",children:i("p",{className:"mr5 text-justify",children:["Te notificaríamos en tu ",e("span",{className:"text_color",children:"correo"})," cuando encontremos una oportunidad que coincida con este perfil."]})})]})]})]})})]})]})}),i("div",{className:"perfil-bottons-footer position-relative text-center mt-4",children:[e(n,{children:c==2&&e("a",{onClick:()=>t(1),className:"btn btnRadius btn-new-gray",id:"btn-return-tc",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Atrás"})})}),e(n,{children:c==3&&e("a",{onClick:()=>t(2),className:"btn btnRadius btn-new-gray",id:"btn-return-lc",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Atrás"})})}),e(n,{children:c==4&&e("a",{onClick:()=>t(3),className:"btn btnRadius btn-new-gray",id:"btn-return-cu",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Atrás"})})}),e(n,{children:c==5&&e(n,{children:e("a",{onClick:()=>t(4),className:"btn btnRadius btn-new-gray",id:"btn-return-te",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Atrás"})})})}),e(n,{children:c==1&&e("a",{onClick:()=>t(2),className:"btn btnRadius btn-new-blue",id:"btn-next-ac",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})})}),e(n,{children:c==2&&e("a",{onClick:()=>t(3),className:"btn btnRadius btn-new-blue",id:"btn-next-tc",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})})}),e(n,{children:c==3&&e("a",{onClick:()=>t(4),className:"btn btnRadius btn-new-blue",id:"btn-next-lc",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})})}),e(n,{children:c==4&&e("a",{onClick:()=>t(5),className:"btn btnRadius btn-new-blue",id:"btn-next-cu",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})})}),e(n,{children:c==5&&i(n,{children:[e("a",{onClick:Ne,className:"btn btnRadius btn-new-green",id:"btn-next-cu",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Editar perfil de negocio"})}),i("button",{type:"button",class:"btn btnRadius btn-new-blue",onClick:Te,children:[e("i",{class:"icon-Resumen"})," Ver resumen"]})]})})]})]}),i(p,{show:Ce,onHide:Q,backdrop:"static",keyboard:!1,size:"lg",id:"calendar",children:[e(p.Header,{closeButton:!0,children:e(p.Title,{id:"modal-calendar-title",children:"Selecciona la fecha de inicio para el histórico"})}),i(p.Body,{children:[e(Be,{onChange:X,value:C,selectRange:!1,maxDate:new Date}),e("div",{id:"resultados",className:"row",children:i("div",{className:"col text-center",children:[e("span",{children:"Desde :"})," ",e("span",{children:N})]})}),e("div",{className:"mt-5 text-center",children:e("button",{type:"button",className:"btn-new-green btnRadius text-center bg-transparent px-5",onClick:Q,children:"Filtrar"})})]}),e(p.Footer,{})]}),i(p,{show:xe,onHide:z,backdrop:"static",keyboard:!1,size:"lg",id:"filter",children:[e(p.Header,{closeButton:!0,children:e(p.Title,{id:"modal-filter-title",children:"Selecciona la imagen de tu perfil de negocio"})}),e(p.Body,{children:i("div",{className:"justify-content-center row",children:[e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>m("Por defecto","/public/images/perfiles/perfil-invisible.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-invisible.svg",alt:"Por defecto img"}),d=="Por defecto"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>m("Perfil amarillo","/public/images/perfiles/perfil-amarillo.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-amarillo.svg",alt:"Perfil amarillo img"}),d=="Perfil amarillo"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>m("Perfil azul","/public/images/perfiles/perfil-azul.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-azul.svg",alt:"Perfil azul img"}),d=="Perfil azul"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>m("Perfil gris","/public/images/perfiles/perfil-gris.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-gris.svg",alt:"Perfil gris img"}),d=="Perfil gris"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>m("Perfil morado","/public/images/perfiles/perfil-morado.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-morado.svg",alt:"Perfil morado img"}),d=="Perfil morado"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>m("Perfil negro","/public/images/perfiles/perfil-negro.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-negro.svg",alt:"Perfil negro img"}),d=="Perfil negro"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>m("Perfil rojo","/public/images/perfiles/perfil-rojo.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-rojo.svg",alt:"Perfil rojo img"}),d=="Perfil rojo"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>m("Perfil rosado","/public/images/perfiles/perfil-rosado.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-rosado.svg",alt:"Perfil rosado img"}),d=="Perfil rosado"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>m("Perfil verde","/public/images/perfiles/perfil-verde.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-verde.svg",alt:"Perfil verde img"}),d=="Perfil verde"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})}),e("div",{className:"perfil-imagenes__element-img",children:i("div",{className:"perfil-imagenes__img position-relative",onClick:()=>m("Perfil violeta","/public/images/perfiles/perfil-violeta.svg"),children:[e("img",{src:"/public/images/perfiles/perfil-violeta.svg",alt:"Perfil violeta img"}),d=="Perfil violeta"&&e("img",{src:"/public/images/Web/icon-Check.svg",alt:"icon-Check",className:"icon-Check"})]})})]})}),i(p.Footer,{class:"modal-footer buttons-footer",children:[e("button",{class:"btnRadius btn-new-gray",onClick:z,children:"Atrás"}),e("button",{class:"btnRadius btn-new-green",onClick:Ae,children:"Seleccionar"})]})]}),e(je,{showModal:De,handleCloseModal:Le,data:$e})]})]}),e(Ee,{ref:q,position:"bottom-left"})]})})};export{oi as default};
