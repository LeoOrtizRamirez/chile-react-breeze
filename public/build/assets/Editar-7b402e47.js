import{r as s,u as q,j as o,a as e,H as y}from"./app-7bc7aa84.js";import{A as j}from"./AuthenticatedLayout-f158ebc2.js";import{T as G,a as k}from"./estilos-toast-b995a97c.js";/* empty css                      */import{F as a}from"./Form-9f47a7aa.js";/* empty css                      */import"./ApplicationLogo-8df486ce.js";import"./ApplicationLogoLici-3cbde996.js";import"./AuthenticatedLayout-413f5a1b.js";import"./transition-5a2acc06.js";import"./createWithBsPrefix-e4392318.js";import"./useTimeout-7534b4ff.js";import"./CloseButton-6e6e3b74.js";import"./ElementChildren-ea70097a.js";const X=({auth:h,actividades_economicas:v,solo_sectores:b,ae_actual:c})=>{const[f,n]=s.exports.useState(!1),[g,N]=s.exports.useState(""),{data:r,setData:l,patch:S,processing:I,reset:_,errors:d}=q({id:c.id,nombre:c.nombre,sector:c.parent.id_padre_sub_categoria,segmento:c.id_padre_sub_categoria,tipo_categoria:1,new_id:c.id}),[x,w]=s.exports.useState(!1),C=t=>{const i=t.currentTarget;w(!0),i.checkValidity()===!1?(t.preventDefault(),t.stopPropagation()):(t.preventDefault(),S(route("actividades-economicas.update",r.id),{onSuccess:()=>_()}))},[F,L]=s.exports.useState(v),[E,D]=s.exports.useState(b),[A,T]=s.exports.useState([]),u=t=>{l("sector",t);const i=new RegExp(t,"i"),m=F.filter(function(p){if(i.test(p.id_padre_sub_categoria))return p});T(m)};return s.exports.useEffect(()=>{if(Object.entries(d).length>0){var t=Object.values(d),i="";t.map(m=>i+=m),N(i),n(!0)}},[d]),s.exports.useEffect(()=>{u(r.sector)},[]),o(j,{auth:h,children:[e(y,{title:"Actividades económicas"}),e(G,{position:"bottom-start",children:e(k,{onClose:()=>n(!1),show:f,delay:3e5,autohide:!0,children:o("div",{className:"notification-toast error",children:[e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})}),e("p",{className:"title",children:g}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>n(!1)})]})})}),e("div",{className:"contenedor-planes",children:o("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Editar Actividad económica"}),e("div",{className:"container mt-4",children:o(a,{id:"form",name:"form",noValidate:!0,validated:x,onSubmit:C,children:[o(a.Group,{className:"row",children:[e("div",{className:"col-12 col-sm-4",children:e(a.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Seleccione el sector"})}),e("div",{className:"col-12 col-sm-8",children:o(a.Select,{name:"sector",className:"sector",id:"",onChange:t=>u(t.target.value),value:r.sector,children:[e("option",{value:"",children:"Selecciona un Sector"}),E.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})})]}),o(a.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(a.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Seleccione el segmento"})}),e("div",{className:"col-12 col-sm-8",children:o(a.Select,{name:"segmento",className:"segmento",id:"",onChange:t=>l("segmento",t.target.value),value:r.segmento,children:[e("option",{value:"",children:"Selecciona un Segmento"}),A.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})})]}),o(a.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(a.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Nombre Actividad económica"})}),e("div",{className:"col-12 col-sm-8",children:e(a.Control,{type:"text",placeholder:"Nombre Actividad económica",value:r.nombre,onChange:t=>l("nombre",t.target.value),className:"actividad-economica",required:!0})})]}),o(a.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(a.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Código de verificación"})}),e("div",{className:"col-12 col-sm-8",children:e(a.Control,{type:"number",placeholder:"Código de verificación",value:r.id,onChange:t=>l("id",t.target.value),className:"actividad-economica",required:!0})})]}),o(a.Group,{className:"mt-4",children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",children:"Editar"}),e("a",{href:route("actividades-economicas.index"),className:"btn btnRadius btn-new-red ml-2",children:"Cancelar"})]})]})})]})})]})};export{X as default};
