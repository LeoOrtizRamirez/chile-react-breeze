import{r as a,u as j,j as o,a as e,H as y}from"./app-4700c01c.js";import{A as L}from"./AuthenticatedLayout-ee9cd46f.js";import{T as k,a as R}from"./estilos-toast-72976644.js";/* empty css                 */import{F as s}from"./Form-cbe4750c.js";/* empty css                      */import"./Nav-d5de8bcf.js";import"./hasClass-5b0cea21.js";import"./InputError-8db90897.js";import"./mergeOptionsWithPopperConfig-75f4da10.js";import"./module-d1466a2a.js";import"./Button-f1c04e97.js";import"./useTimeout-8c714db7.js";import"./ElementChildren-0a8e273c.js";const U=({auth:p,actividades_economicas:h,solo_sectores:b,ae_actual:i})=>{const[f,c]=a.exports.useState(!1),[g,N]=a.exports.useState(""),{data:n,setData:l,patch:v,processing:q,reset:S,errors:d}=j({id:i.id,nombre:i.nombre,sector:i.parent.id_padre_sub_categoria,segmento:i.id_padre_sub_categoria,tipo_categoria:3,new_id:i.id}),[x,_]=a.exports.useState(!1),w=t=>{const r=t.currentTarget;_(!0),r.checkValidity()===!1?(t.preventDefault(),t.stopPropagation()):(t.preventDefault(),v(route("updateLocalizacion",n.id),{onSuccess:()=>S()}))},[E,z]=a.exports.useState(h);a.exports.useState(b);const[C,F]=a.exports.useState([]),T=t=>{l("sector",t);const r=new RegExp(t,"i"),m=E.filter(function(u){if(r.test(u.id_padre_sub_categoria))return u});F(m)};return a.exports.useEffect(()=>{if(Object.entries(d).length>0){var t=Object.values(d),r="";t.map(m=>r+=m),N(r),c(!0)}},[d]),a.exports.useEffect(()=>{T(n.sector)},[]),o(L,{auth:p,children:[e(y,{title:"Localización"}),e(k,{position:"bottom-start",children:e(R,{onClose:()=>c(!1),show:f,delay:3e5,autohide:!0,children:o("div",{className:"notification-toast error",children:[e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})}),e("p",{className:"title",children:g}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>c(!1)})]})})}),e("div",{className:"contenedor-planes",children:o("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Edición comuna o ciudad"}),e("div",{className:"container mt-4",children:o(s,{id:"form",name:"form",noValidate:!0,validated:x,onSubmit:w,children:[o(s.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(s.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Región"})}),e("div",{className:"col-12 col-sm-8",children:o(s.Select,{name:"segmento",className:"segmento",id:"",onChange:t=>l("segmento",t.target.value),value:n.segmento,children:[e("option",{value:"",children:"Selecciona una región"}),C.map(t=>e("option",{value:t.id,children:t.nombre},t.id))]})})]}),o(s.Group,{className:"row mt-3",children:[e("div",{className:"col-12 col-sm-4",children:e(s.Label,{htmlFor:"",for:"validationInput",className:"bloque__registro-form-title-label",children:"Nombre de la comuna o ciudad"})}),e("div",{className:"col-12 col-sm-8",children:e(s.Control,{type:"text",placeholder:"Nombre de la comuna o ciudad",value:n.nombre,onChange:t=>l("nombre",t.target.value),className:"actividad-economica",required:!0})})]}),o(s.Group,{className:"mt-4",children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",children:"Editar"}),e("a",{href:route("indexLocalizacion"),className:"btn btnRadius btn-new-red ml-2",children:"Cancelar"})]})]})})]})})]})};export{U as default};
