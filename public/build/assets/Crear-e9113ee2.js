import{r as s,u as F,j as t,a as e,H as _}from"./app-a7d4cc52.js";import{A as T}from"./AuthenticatedLayout-50955c68.js";import{A as j}from"./MenuOpciones-6b64aad5.js";import{T as y,a as k}from"./estilos-toast-54a449c2.js";import"./font-unicolor-e512174f.js";/* empty css                      */import"./estilos-capa-autentificacion-1dbe36a7.js";import"./ApplicationLogoLici-031047e0.js";import"./transition-6c4e5823.js";import"./createWithBsPrefix-0c95e455.js";import"./useEventCallback-2595250d.js";import"./index-67732e07.js";const U=({auth:d,actividades_economicas:h,solo_sectores:p})=>{const[u,i]=s.exports.useState(!1),[v,N]=s.exports.useState(""),{data:l,setData:o,post:b,processing:E,reset:g,errors:r}=F({id:"",nombre:"",sector:"",segmento:"",tipo_categoria:1});s.exports.useEffect(()=>{if(Object.entries(r).length>0){var a=Object.values(r),c="";a.map(n=>c+=n),N(c),i(!0)}},[r]);const[f,R]=s.exports.useState(h),[S,D]=s.exports.useState(p),[w,C]=s.exports.useState([]);return t(T,{auth:d,children:[e(_,{title:"Actividades económicas"}),e(y,{position:"bottom-start",children:e(k,{onClose:()=>i(!1),show:u,delay:3e3,autohide:!0,children:t("div",{className:"vue-notification-toast error",children:[e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})}),e("p",{className:"title",children:v}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>i(!1)})]})})}),t("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(j,{})}),t("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Crear Actividad económica"}),e("div",{className:"container mt-4",children:t("form",{onSubmit:a=>{a.preventDefault(),b(route("actividades-economicas.store"),{onSuccess:()=>g()})},children:[t("div",{className:"row",children:[e("div",{className:"col-12 col-sm-4",children:e("label",{htmlFor:"",children:"Seleccione el sector"})}),e("div",{className:"col-12 col-sm-8",children:t("select",{name:"sector",className:"sector",id:"",onChange:a=>{o("sector",a.target.value);var c=a.target.value;const n=c,x=new RegExp(n,"i"),A=f.filter(function(m){if(x.test(m.id_padre_sub_categoria))return m});C(A)},children:[e("option",{value:"",children:"Selecciona un Sector"}),S.map(a=>e("option",{value:a.id,children:a.nombre}))]})})]}),t("div",{className:"row mt-4",children:[e("div",{className:"col-12 col-sm-4",children:e("label",{htmlFor:"",children:"Seleccione el segmento"})}),e("div",{className:"col-12 col-sm-8",children:t("select",{name:"segmento",className:"segmento",id:"",onChange:a=>o("segmento",a.target.value),children:[e("option",{value:"",children:"Selecciona un Segmento"}),w.map(a=>e("option",{value:a.id,children:a.nombre}))]})})]}),t("div",{className:"row mt-4",children:[e("div",{className:"col-12 col-sm-4",children:e("label",{htmlFor:"",children:"Nombre Actividad económica"})}),e("div",{className:"col-12 col-sm-8",children:e("input",{value:l.nombre,onChange:a=>o("nombre",a.target.value),type:"text",placeholder:"Nombre",className:"actividad-economica"})})]}),t("div",{className:"row mt-4",children:[e("div",{className:"col-12 col-sm-4",children:e("label",{htmlFor:"",children:"Código de verificación"})}),e("div",{className:"col-12 col-sm-8",children:e("input",{value:l.id,onChange:a=>o("id",a.target.value),type:"number",placeholder:"Código de verificación",className:"actividad-economica"})})]}),t("div",{className:"row mt-4",children:[e("div",{className:"col-4"}),t("div",{className:"col-4",children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",children:"Crear"}),e("a",{href:route("actividades-economicas.index"),className:"btn btnRadius btn-new-red ml-2",children:"Cancelar"})]}),e("div",{className:"col-4"})]})]})})]})]})]})};export{U as default};
