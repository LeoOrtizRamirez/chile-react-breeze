import{r as a,u as j,j as o,a as e,H as y}from"./app-4488dcc1.js";import{A as k}from"./AuthenticatedLayout-d26e67dd.js";import{T as R,a as q}from"./estilos-toast-576ebef4.js";/* empty css                      */import{F as s}from"./Form-eb6a5c7b.js";/* empty css                      */import"./ApplicationLogo-3db11719.js";import"./ApplicationLogoLici-d8047e94.js";import"./transition-9636cdf6.js";import"./createWithBsPrefix-7e10863b.js";import"./CloseButton-081d3863.js";import"./ElementChildren-b76ae4a8.js";const K=({auth:u,actividades_economicas:h,solo_sectores:f,ae_actual:i})=>{const[b,c]=a.exports.useState(!1),[g,N]=a.exports.useState(""),{data:n,setData:l,patch:v,processing:A,reset:S,errors:d}=j({id:i.id,nombre:i.nombre,sector:i.parent.id_padre_sub_categoria,segmento:i.id_padre_sub_categoria,tipo_categoria:5,new_id:i.id}),[x,_]=a.exports.useState(!1),w=t=>{const r=t.currentTarget;_(!0),r.checkValidity()===!1?(t.preventDefault(),t.stopPropagation()):(t.preventDefault(),v(route("updateTiposCompras",n.id),{onSuccess:()=>S()}))},[T,D]=a.exports.useState(h);a.exports.useState(f);const[C,E]=a.exports.useState([]),F=t=>{l("sector",t);const r=new RegExp(t,"i"),m=T.filter(function(p){if(r.test(p.id_padre_sub_categoria))return p});E(m)};return a.exports.useEffect(()=>{if(Object.entries(d).length>0){var t=Object.values(d),r="";t.map(m=>r+=m),N(r),c(!0)}},[d]),a.exports.useEffect(()=>{F(n.sector)},[]),o(k,{auth:u,children:[e(y,{title:"Tipos Conmpras"}),e(R,{position:"bottom-start",children:e(q,{onClose:()=>c(!1),show:b,delay:3e5,autohide:!0,children:o("div",{className:"notification-toast error",children:[e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})}),e("p",{className:"title",children:g}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>c(!1)})]})})}),e("div",{className:"contenedor-planes",children:o("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Edición comuna o ciudad"}),e("div",{className:"container mt-4",children:o(s,{id:"form",name:"form",noValidate:!0,validated:x,onSubmit:w,children:[o(s.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(s.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Región"})}),e("div",{className:"col-12 col-sm-8",children:o(s.Select,{name:"segmento",className:"segmento",id:"",onChange:t=>l("segmento",t.target.value),value:n.segmento,children:[e("option",{value:"",children:"Selecciona una entidad"}),C.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})})]}),o(s.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(s.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Tipo de compra"})}),e("div",{className:"col-12 col-sm-8",children:e(s.Control,{type:"text",placeholder:"Nombre de la comuna o ciudad",value:n.nombre,onChange:t=>l("nombre",t.target.value),className:"actividad-economica",required:!0})})]}),o(s.Group,{className:"mt-4",children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",children:"Editar"}),e("a",{href:route("indexTiposCompras"),className:"btn btnRadius btn-new-red ml-2",children:"Cancelar"})]})]})})]})})]})};export{K as default};
