import{r as o,u as j,j as a,a as e,H as y}from"./app-64dd4f04.js";import{A}from"./AuthenticatedLayout-a5b2ae84.js";import{A as k}from"./MenuOpciones-90291e32.js";import{T as q,a as D}from"./estilos-toast-ae6833eb.js";import"./font-unicolor-30ac5ed1.js";import{F as s}from"./Form-fc8f6444.js";/* empty css                      */import"./estilos-capa-autentificacion-c48c534a.js";import"./ApplicationLogoLici-979f8411.js";import"./transition-b89faa7b.js";import"./createWithBsPrefix-bd09e636.js";import"./useTimeout-31f5c86d.js";import"./ElementChildren-ee42d2a1.js";const U=({auth:u,tiposcompras:h,solo_sectores:f,ae_actual:i})=>{const[b,c]=o.exports.useState(!1),[g,N]=o.exports.useState(""),{data:n,setData:l,patch:v,processing:G,reset:x,errors:m}=j({id:i.id,nombre:i.nombre,sector:i.parent.id_padre_sub_categoria,segmento:i.id_padre_sub_categoria,tipo_categoria:5,new_id:i.id}),[S,_]=o.exports.useState(!1),w=t=>{const r=t.currentTarget;_(!0),r.checkValidity()===!1?(t.preventDefault(),t.stopPropagation()):(t.preventDefault(),v(route("updateTiposCompras",n.id),{onSuccess:()=>x()}))},[T,R]=o.exports.useState(h);o.exports.useState(f);const[C,E]=o.exports.useState([]),F=t=>{l("sector",t);const r=new RegExp(t,"i"),d=T.filter(function(p){if(r.test(p.id_padre_sub_categoria))return p});E(d)};return o.exports.useEffect(()=>{if(Object.entries(m).length>0){var t=Object.values(m),r="";t.map(d=>r+=d),N(r),c(!0)}},[m]),o.exports.useEffect(()=>{F(n.sector)},[]),a(A,{auth:u,children:[e(y,{title:"Tipos Compras"}),e(q,{position:"bottom-start",children:e(D,{onClose:()=>c(!1),show:b,delay:3e5,autohide:!0,children:a("div",{className:"notification-toast error",children:[e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})}),e("p",{className:"title",children:g}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>c(!1)})]})})}),a("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(k,{})}),a("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Edición tipo compra"}),e("div",{className:"container mt-4",children:a(s,{id:"form",name:"form",noValidate:!0,validated:S,onSubmit:w,children:[a(s.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(s.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Tipo entidad"})}),e("div",{className:"col-12 col-sm-8",children:e(s.Select,{name:"segmento",className:"segmento",id:"",onChange:t=>l("segmento",t.target.value),value:n.segmento,children:C.map(t=>e("option",{value:t.id,children:t.nombre},t.id))})})]}),a(s.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(s.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Nombre de la comuna o ciudad"})}),e("div",{className:"col-12 col-sm-8",children:e(s.Control,{type:"text",placeholder:"Nombre de la comuna o ciudad",value:n.nombre,onChange:t=>l("nombre",t.target.value),className:"actividad-economica",required:!0})})]}),a(s.Group,{className:"mt-4",children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",children:"Editar"}),e("a",{href:route("indexTiposCompras"),className:"btn btnRadius btn-new-red ml-2",children:"Cancelar"})]})]})})]})]})]})};export{U as default};
