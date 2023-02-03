import{r as c,j as a,a as e,H as q,F as x}from"./app-af735614.js";import{A as $}from"./AuthenticatedLayout-71939a68.js";import{A as D}from"./MenuOpciones-d3573fc8.js";/* empty css                      */import{N as h}from"./Nav-82df231e.js";import{M as d}from"./Modal-75a195ab.js";import"./estilos-capa-autentificacion-8bf12419.js";import"./ApplicationLogoLici-b28cfe64.js";import"./transition-a079ae13.js";import"./createWithBsPrefix-80acc586.js";import"./CloseButton-e400e31b.js";const Z=({auth:g,actividades_economicas:p})=>{const[r,z]=c.exports.useState(p),[A,E]=c.exports.useState(p),[u,S]=c.exports.useState(!1),[l,v]=c.exports.useState(!1),[_,w]=c.exports.useState(0),[k,C]=c.exports.useState(0),[n,y]=c.exports.useState({id:0,nombre:""}),[F,M]=c.exports.useState([]),[H,R]=c.exports.useState([]),[B,b]=c.exports.useState(!1),m=()=>b(!1),j=()=>b(!0),I=i=>{const s=i,t=new RegExp(s,"i"),o=r.filter(function(f){if(t.test(f.id_padre_sub_categoria))return f});M(o),S(!u),w(i)},L=i=>{const s=new RegExp(i,"i"),t=r.filter(function(o){if(s.test(o.id_padre_sub_categoria))return o});R(t),v(!l),C(i)},N=i=>{y(i)};return a($,{auth:g,children:[e(q,{title:"Actividades económicas"}),a("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(D,{})}),a("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Actividad económica"}),a("div",{className:"container mt-4",children:[e("div",{className:"tree_categorias tree_1",children:e("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:a("div",{className:"mx-auto",children:[e("input",{type:"text",placeholder:"Busca por actividad económica",autoComplete:"off",className:"form-control m-auto",onChange:i=>{const s=new RegExp(i.target.value,"i"),t=r.filter(function(o){if(s.test(o.nombre))return o});E(t),v(!l)}}),e("i",{className:"icon-Cancelar"}),e("button",{type:"button",className:"icon-Buscar-click",children:e("i",{className:"bi bi-search"})}),A.map(i=>e(x,{children:i.id_padre_sub_categoria==null&&a(x,{children:[a("div",{className:"tree-content mt-3 sector",onClick:()=>I(i.id),children:[e("i",{className:`tree-arrow has-child ${i.childs.length>0?"bi bi-chevron-down":""}`}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:i.nombre})})})]},i.id),u&&i.id==_&&e("ul",{className:"tree-children",children:F.map(s=>a("li",{"data-id":"20504",className:"tree-node has-child expanded draggable",children:[a("div",{className:"tree-content segmento",onClick:()=>L(s.id),children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:s.nombre})})})]}),l&&k==s.id&&e("ul",{className:"tree-children",children:H.map(t=>e("li",{className:"tree-node draggable",children:a("div",{className:"tree-content actividad-economica",onClick:()=>N(t),children:[e("input",{type:"radio",name:"actividad_economica",onClick:()=>N(t),checked:t.id==n.id?"checked":""}),e("span",{className:"tree-anchor children",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:t.nombre})})})]})}))})]}))})]})}))]})})}),a(d,{show:B,onHide:m,id:"removeActividadEconomica",className:"modal-dialog-centered",children:[a(d.Header,{id:"removeActividadEconomicaHeader",children:[e("h5",{class:"modal-title",children:"Eliminar"}),e("button",{type:"button",class:"btn-close btn-close-white",onClick:m})]}),e(d.Body,{id:"removeActividadEconomicaBody",children:a("p",{children:["Desea eliminar la actividad económica (",n.id,") ",n.nombre,"?"]})}),a(d.Footer,{children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",onClick:m,children:"Cancelar"}),e("button",{type:"buttom",className:"btn btnRadius btn-new-red ml-2",children:"Eliminar"})]})]}),a("div",{className:"botones",children:[e(h.Link,{href:route("actividades-economicas.create"),className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-plus-square-fill"})}),e(h.Link,{href:route("actividades-economicas.edit",n.id),className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-pencil-fill"})}),e(h.Link,{onClick:j,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-trash3"})})]})]})]})]})]})};export{Z as default};