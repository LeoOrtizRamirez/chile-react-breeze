import{r as s,u as T,j as a,a as e,H as j}from"./app-76186bea.js";import{A as G}from"./AuthenticatedLayout-dfb022c8.js";import{T as k,a as D}from"./estilos-toast-c6236c1a.js";/* empty css                      *//* empty css                      */import{F as o}from"./Form-c423d77e.js";import"./ApplicationLogo-35185b44.js";import"./ApplicationLogoLici-c4157e63.js";import"./AuthenticatedLayout-86a56f28.js";import"./transition-b7fa2f84.js";import"./createWithBsPrefix-e59244fd.js";import"./CloseButton-a9816bb5.js";import"./ElementChildren-15265277.js";const X=({auth:p,actividades_economicas:h,solo_sectores:f})=>{const[v,i]=s.exports.useState(!1),[g,b]=s.exports.useState(""),{data:d,setData:l,post:N,processing:I,reset:S,errors:n}=T({id:"",nombre:"",sector:"",segmento:"",tipo_categoria:1}),[C,E]=s.exports.useState(h),[_,R]=s.exports.useState(f),[x,w]=s.exports.useState([]),[A,q]=s.exports.useState(!1),y=t=>{const r=document.querySelectorAll(".sector")[0].value,c=document.querySelectorAll(".segmento")[0].value,m=t.currentTarget;if(q(!0),c=="Selecciona un Segmento"||r=="Selecciona un Sector"){t.preventDefault(),t.stopPropagation(),document.querySelectorAll("select.segmento.form-select")[0].classList.add("failed"),document.querySelectorAll("select.sector.form-select")[0].classList.add("failed");return}m.checkValidity()===!1?(t.preventDefault(),t.stopPropagation()):(t.preventDefault(),N(route("actividades-economicas.store"),{onSuccess:()=>S()}))};s.exports.useEffect(()=>{if(Object.entries(n).length>0){var t=Object.values(n),r="";t.map(c=>r+=c),b(r),i(!0)}},[n]);const F=t=>{document.querySelectorAll("select.segmento.form-select")[0].classList.remove("failed"),document.querySelectorAll("select.sector.form-select")[0].classList.remove("failed"),l("sector",t.target.value);var r=t.target.value;const c=r,m=new RegExp(c,"i"),L=C.filter(function(u){if(m.test(u.id_padre_sub_categoria))return u});w(L)};return a(G,{auth:p,children:[e(j,{title:"Actividades económicas"}),e(k,{position:"bottom-start",children:e(D,{onClose:()=>i(!1),show:v,delay:3e5,autohide:!0,children:a("div",{className:"notification-toast error",children:[e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})}),e("p",{className:"title",children:g}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>i(!1)})]})})}),e("div",{className:"contenedor-planes",children:a("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Crear Actividad económica"}),e("div",{className:"container mt-4",children:a(o,{id:"form",name:"form",noValidate:!0,validated:A,onSubmit:y,children:[a(o.Group,{className:"row",children:[e("div",{className:"col-12 col-sm-4",children:e(o.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Seleccione el sector"})}),e("div",{className:"col-12 col-sm-8",children:a(o.Select,{name:"sector",className:"sector",id:"",onChange:F,children:[e("option",{children:"Selecciona un Sector"}),_.map(t=>e("option",{value:t.id,children:t.nombre}))]})})]}),a(o.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(o.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Seleccione el segmento"})}),e("div",{className:"col-12 col-sm-8",children:a(o.Select,{name:"segmento",className:"segmento",id:"",onChange:t=>l("segmento",t.target.value),children:[e("option",{children:"Selecciona un Segmento"}),x.map(t=>e("option",{value:t.id,children:t.nombre}))]})})]}),a(o.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(o.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Nombre Actividad económica"})}),e("div",{className:"col-12 col-sm-8",children:e(o.Control,{type:"text",placeholder:"Nombre Actividad económica",value:d.nombre,onChange:t=>l("nombre",t.target.value),className:"actividad-economica",required:!0})})]}),a(o.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(o.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Código de verificación"})}),e("div",{className:"col-12 col-sm-8",children:e(o.Control,{type:"number",placeholder:"Código de verificación",value:d.id,onChange:t=>l("id",t.target.value),className:"actividad-economica",required:!0})})]}),a(o.Group,{className:"mt-4",children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",children:"Crear"}),e("a",{href:route("actividades-economicas.index"),className:"btn btnRadius btn-new-red ml-2",children:"Cancelar"})]})]})})]})})]})};export{X as default};
