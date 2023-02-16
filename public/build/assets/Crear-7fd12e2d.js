import{r as s,u as L,j as o,a as e,H as j}from"./app-a2e36e7b.js";import{A as G}from"./AuthenticatedLayout-6b2358bc.js";import{A as k}from"./MenuOpciones-e6bf62a1.js";import{T as D,a as I}from"./estilos-toast-51ecf121.js";import"./font-unicolor-9ffbe9f5.js";/* empty css                      */import{F as a}from"./Form-36d828ec.js";import"./estilos-capa-autentificacion-0001bcb1.js";import"./ApplicationLogoLici-744b0700.js";import"./transition-f620aa73.js";import"./createWithBsPrefix-9bd3cd5d.js";import"./useTimeout-17ef428f.js";import"./ElementChildren-3011ba79.js";const Y=({auth:u,actividades_economicas:p,solo_sectores:h})=>{const[f,i]=s.exports.useState(!1),[g,v]=s.exports.useState(""),{data:m,setData:c,post:b,processing:E,reset:N,errors:l}=L({id:"",nombre:"",sector:"",segmento:"",tipo_categoria:1}),[S,R]=s.exports.useState(p),[x,V]=s.exports.useState(h),[C,_]=s.exports.useState([]),[w,A]=s.exports.useState(!1),F=t=>{const r=t.currentTarget;if(A(!0),t.target[1][0].innerText=="Selecciona un Segmento"||t.target[0][0].innerText=="Selecciona un Sector"){t.preventDefault(),t.stopPropagation(),document.querySelectorAll("select.segmento.form-select")[0].classList.add("failed"),document.querySelectorAll("select.sector.form-select")[0].classList.add("failed");return}r.checkValidity()===!1?(t.preventDefault(),t.stopPropagation()):(t.preventDefault(),b(route("actividades-economicas.store"),{onSuccess:()=>N()}))};s.exports.useEffect(()=>{if(Object.entries(l).length>0){var t=Object.values(l),r="";t.map(n=>r+=n),v(r),i(!0)}},[l]);const T=t=>{c("sector",t.target.value);var r=t.target.value;const n=r,q=new RegExp(n,"i"),y=S.filter(function(d){if(q.test(d.id_padre_sub_categoria))return d});_(y)};return o(G,{auth:u,children:[e(j,{title:"Actividades económicas"}),e(D,{position:"bottom-start",children:e(I,{onClose:()=>i(!1),show:f,delay:3e5,autohide:!0,children:o("div",{className:"notification-toast error",children:[e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})}),e("p",{className:"title",children:g}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>i(!1)})]})})}),o("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(k,{})}),o("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Crear Actividad económica"}),e("div",{className:"container mt-4",children:o(a,{id:"form",name:"form",noValidate:!0,validated:w,onSubmit:F,children:[o(a.Group,{className:"row",children:[e("div",{className:"col-12 col-sm-4",children:e(a.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Seleccione el sector"})}),e("div",{className:"col-12 col-sm-8",children:o(a.Select,{name:"sector",className:"sector",id:"",onChange:T,children:[e("option",{children:"Selecciona un Sector"}),x.map(t=>e("option",{value:t.id,children:t.nombre}))]})})]}),o(a.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(a.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Seleccione el segmento"})}),e("div",{className:"col-12 col-sm-8",children:o(a.Select,{name:"segmento",className:"segmento",id:"",onChange:t=>c("segmento",t.target.value),children:[e("option",{children:"Selecciona un Segmento"}),C.map(t=>e("option",{value:t.id,children:t.nombre}))]})})]}),o(a.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(a.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Nombre Actividad económica"})}),e("div",{className:"col-12 col-sm-8",children:e(a.Control,{type:"text",placeholder:"Nombre Actividad económica",value:m.nombre,onChange:t=>c("nombre",t.target.value),className:"actividad-economica",required:!0})})]}),o(a.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(a.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Código de verificación"})}),e("div",{className:"col-12 col-sm-8",children:e(a.Control,{type:"number",placeholder:"Código de verificación",value:m.id,onChange:t=>c("id",t.target.value),className:"actividad-economica",required:!0})})]}),o(a.Group,{className:"mt-4",children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",children:"Crear"}),e("a",{href:route("actividades-economicas.index"),className:"btn btnRadius btn-new-red ml-2",children:"Cancelar"})]})]})})]})]})]})};export{Y as default};