import{r,u as T,j as a,a as e,H as q}from"./app-1ec0e23a.js";import{A as j}from"./AuthenticatedLayout-9894cf75.js";import{A as k}from"./MenuOpciones-755dc9cf.js";import{T as z,a as D}from"./estilos-toast-072abc6f.js";import"./font-unicolor-3ae71db2.js";/* empty css                      */import{F as o}from"./Form-a372b94e.js";import"./estilos-capa-autentificacion-c6c8a773.js";import"./ApplicationLogoLici-37c5e90a.js";import"./transition-cb900b71.js";import"./createWithBsPrefix-cd710d07.js";import"./useTimeout-16417d2f.js";import"./ElementChildren-0597b6fa.js";const Y=({auth:d,actividades_economicas:u,solo_sectores:p})=>{const[h,l]=r.exports.useState(!1),[f,b]=r.exports.useState(""),{data:g,setData:n,post:N,processing:R,reset:v,errors:i}=T({id:"",nombre:"",sector:"",segmento:"",tipo_categoria:3}),[S,E]=r.exports.useState(u),[x,G]=r.exports.useState(p),[V,w]=r.exports.useState([]),[C,_]=r.exports.useState(!1),y=t=>{const s=document.querySelectorAll(".sector")[0].value;console.log(s);const c=t.currentTarget;if(_(!0),s=="Selecciona una región"){t.preventDefault(),t.stopPropagation(),document.querySelectorAll("select.sector.form-select")[0].classList.add("failed");return}c.checkValidity()===!1?(t.preventDefault(),t.stopPropagation()):(t.preventDefault(),N(route("storeLocalizacion"),{onSuccess:()=>v()}))};r.exports.useEffect(()=>{if(Object.entries(i).length>0){var t=Object.values(i),s="";t.map(c=>s+=c),b(s),l(!0)}},[i]);const A=t=>{document.querySelectorAll("select.sector.form-select")[0].classList.remove("failed"),n("sector",t.target.value);var s=t.target.value;const c=s,L=new RegExp(c,"i"),F=S.filter(function(m){if(L.test(m.id_padre_sub_categoria))return m});w(F)};return a(j,{auth:d,children:[e(q,{title:"Localización"}),e(z,{position:"bottom-start",children:e(D,{onClose:()=>l(!1),show:h,delay:3e5,autohide:!0,children:a("div",{className:"notification-toast error",children:[e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})}),e("p",{className:"title",children:f}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>l(!1)})]})})}),a("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(k,{})}),a("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Crear Localización"}),e("div",{className:"container mt-4",children:a(o,{id:"form",name:"form",noValidate:!0,validated:C,onSubmit:y,children:[a(o.Group,{className:"row",children:[e("div",{className:"col-12 col-sm-4",children:e(o.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Región"})}),e("div",{className:"col-12 col-sm-8",children:a(o.Select,{name:"sector",className:"sector",onChange:A,children:[e("option",{children:"Selecciona una región"}),x.map(t=>e("option",{value:t.id,children:t.nombre}))]})})]}),a(o.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(o.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Nombre de la comuna o ciudad"})}),e("div",{className:"col-12 col-sm-8",children:e(o.Control,{type:"text",placeholder:"Nombre de la comuna o ciudad",value:g.nombre,onChange:t=>n("nombre",t.target.value),className:"actividad-economica",required:!0})})]}),a(o.Group,{className:"mt-4",children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",children:"Crear"}),e("a",{href:route("indexLocalizacion"),className:"btn btnRadius btn-new-red ml-2",children:"Cancelar"})]})]})})]})]})]})};export{Y as default};