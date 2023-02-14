import{r as s,u as j,j as a,a as e,H as y}from"./app-18d429da.js";import{A}from"./AuthenticatedLayout-528922ec.js";import{A as k}from"./MenuOpciones-db29b58f.js";import{T as q,a as D}from"./estilos-toast-eadf10c1.js";import"./font-unicolor-a62ff670.js";/* empty css                      */import{F as o}from"./Form-b581f2d3.js";import"./estilos-capa-autentificacion-04fbc91e.js";import"./ApplicationLogoLici-5e548e0c.js";import"./transition-b3a6f05b.js";import"./createWithBsPrefix-0f574fd8.js";import"./useTimeout-ecbcb073.js";import"./ElementChildren-d841b66c.js";import"./Col-933aaa55.js";const Z=({auth:d,actividades_economicas:p,solo_sectores:u})=>{const[h,c]=s.exports.useState(!1),[f,b]=s.exports.useState(""),{data:N,setData:l,post:v,processing:E,reset:g,errors:i}=j({id:"",nombre:"",sector:"",segmento:"",tipo_categoria:3}),[S,G]=s.exports.useState(p),[x,R]=s.exports.useState(u),[V,w]=s.exports.useState([]),[C,_]=s.exports.useState(!1),F=t=>{const r=t.currentTarget;_(!0),r.checkValidity()===!1?(t.preventDefault(),t.stopPropagation()):(t.preventDefault(),v(route("storeLocalizacion"),{onSuccess:()=>g()}))};s.exports.useEffect(()=>{if(Object.entries(i).length>0){var t=Object.values(i),r="";t.map(n=>r+=n),b(r),c(!0)}},[i]);const L=t=>{l("sector",t.target.value);var r=t.target.value;const n=r,T=new RegExp(n,"i"),z=S.filter(function(m){if(T.test(m.id_padre_sub_categoria))return m});w(z)};return a(A,{auth:d,children:[e(y,{title:"Localización"}),e(q,{position:"bottom-start",children:e(D,{onClose:()=>c(!1),show:h,delay:3e5,autohide:!0,children:a("div",{className:"notification-toast error",children:[e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})}),e("p",{className:"title",children:f}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>c(!1)})]})})}),a("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(k,{})}),a("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Crear Localización"}),e("div",{className:"container mt-4",children:a(o,{id:"form",name:"form",noValidate:!0,validated:C,onSubmit:F,children:[a(o.Group,{className:"row",children:[e("div",{className:"col-12 col-sm-4",children:e(o.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Seleccione el sector"})}),e("div",{className:"col-12 col-sm-8",children:a(o.Select,{name:"sector",className:"sector",id:"",onChange:L,children:[e("option",{value:"",children:"Selecciona un Sector"}),x.map(t=>e("option",{value:t.id,children:t.nombre}))]})})]}),a(o.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(o.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Nombre Localización"})}),e("div",{className:"col-12 col-sm-8",children:e(o.Control,{type:"text",placeholder:"Nombre de la localización",value:N.nombre,onChange:t=>l("nombre",t.target.value),className:"actividad-economica",required:!0})})]}),a(o.Group,{className:"mt-4",children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",children:"Crear"}),e("a",{href:route("indexLocalizacion"),className:"btn btnRadius btn-new-red ml-2",children:"Cancelar"})]})]})})]})]})]})};export{Z as default};
