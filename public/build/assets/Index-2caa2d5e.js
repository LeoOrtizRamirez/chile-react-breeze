import{r as t,j as i,a as e,H as K,F as A}from"./app-9a505d52.js";import{A as O}from"./AuthenticatedLayout-52a48bda.js";import{A as P}from"./MenuOpciones-ec4c3193.js";/* empty css                      */import{N as v}from"./Nav-4a55fe1a.js";import{M as r}from"./Modal-b0bca0ee.js";import{T as Q,a as U}from"./estilos-toast-291c483a.js";import"./font-unicolor-d4f34aea.js";import"./estilos-capa-autentificacion-fe3f4627.js";import"./ApplicationLogoLici-346c98fc.js";import"./transition-d9f638b4.js";import"./createWithBsPrefix-af74ff9a.js";import"./useEventCallback-6457e227.js";import"./index-67732e07.js";const le=({auth:E,actividades_economicas:b})=>{const[S,d]=t.exports.useState(!1),[w,l]=t.exports.useState(""),[m,V]=t.exports.useState(b),[_,k]=t.exports.useState(b),[N,C]=t.exports.useState(!1),[h,f]=t.exports.useState(!1),[y,M]=t.exports.useState(0),[F,T]=t.exports.useState(0),[o,H]=t.exports.useState({id:0,nombre:""}),[R,j]=t.exports.useState([]),[B,D]=t.exports.useState([]),[I,p]=t.exports.useState(!1),u=()=>p(!1),L=()=>{o.id!=0?p(!0):(l("Debes seleccionar una Actividad Ecónomica"),d(!0))},q=()=>{o.id!=0?window.location.replace("/actividades-economicas/"+o.id+"/edit"):(l("Debes seleccionar una Actividad Ecónomica"),d(!0))},$=a=>{const s=a,c=new RegExp(s,"i"),n=m.filter(function(x){if(c.test(x.id_padre_sub_categoria))return x});j(n),C(!N),M(a)},z=a=>{const s=new RegExp(a,"i"),c=m.filter(function(n){if(s.test(n.id_padre_sub_categoria))return n});D(c),f(!h),T(a)},g=a=>{H(a)},G=a=>{const s=new RegExp(a.target.value,"i"),c=m.filter(function(n){if(s.test(n.nombre))return n});k(c),f(!h)},J=()=>{fetch("/actividades-economicas/"+o.id+"/delete").then(a=>a.json()).then(a=>{l(a.message),d(!0),p(!1)})};return i(O,{auth:E,children:[e(K,{title:"Actividades económicas"}),e(Q,{position:"bottom-start",children:e(U,{onClose:()=>d(!1),show:S,delay:3e3,autohide:!0,children:i("div",{className:"vue-notification-toast error",children:[e("span",{className:"toast-icon toast-danger",children:e("span",{className:"icon-error"})}),e("p",{className:"title",children:w}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>d(!1)})]})})}),i("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(P,{})}),i("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Actividad económica"}),i("div",{className:"container mt-4",children:[e("div",{className:"tree_categorias tree_1",children:e("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:i("div",{className:"mx-auto",children:[e("input",{type:"text",placeholder:"Busca por actividad económica",autoComplete:"off",className:"form-control m-auto",onChange:G}),e("i",{className:"icon-Cancelar"}),e("button",{type:"button",className:"icon-Buscar-click",children:e("i",{className:"bi bi-search"})}),_.map(a=>e(A,{children:a.id_padre_sub_categoria==null&&i(A,{children:[i("div",{className:"tree-content mt-3 sector",onClick:()=>$(a.id),children:[e("i",{className:`tree-arrow has-child ${a.childs.length>0?"bi bi-chevron-down":""}`}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:a.nombre})})})]},a.id),N&&a.id==y&&e("ul",{className:"tree-children",children:R.map(s=>i("li",{"data-id":"20504",className:"tree-node has-child expanded draggable",children:[i("div",{className:"tree-content segmento",onClick:()=>z(s.id),children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:s.nombre})})})]}),h&&F==s.id&&e("ul",{className:"tree-children",children:B.map(c=>e("li",{className:"tree-node draggable",children:i("div",{className:"tree-content actividad-economica",onClick:()=>g(c),children:[e("input",{type:"radio",name:"actividad_economica",onClick:()=>g(c),checked:c.id==o.id?"checked":""}),e("span",{className:"tree-anchor children",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:c.nombre})})})]})}))})]}))})]})}))]})})}),i(r,{show:I,onHide:u,id:"removeActividadEconomica",className:"modal-dialog-centered",children:[i(r.Header,{id:"removeActividadEconomicaHeader",children:[e("h5",{className:"modal-title",children:"Eliminar"}),e("button",{type:"button",className:"btn-close btn-close-white",onClick:u})]}),e(r.Body,{id:"removeActividadEconomicaBody",children:i("p",{children:["Desea eliminar la actividad económica (",o.id,") ",o.nombre,"?"]})}),i(r.Footer,{children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",onClick:u,children:"Cancelar"}),e("button",{onClick:J,className:"btn btnRadius btn-new-red ml-2",children:"Eliminar"})]})]}),i("div",{className:"botones",children:[e(v.Link,{href:route("actividades-economicas.create"),className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-plus-square-fill"})}),e(v.Link,{onClick:q,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-pencil-fill"})}),e(v.Link,{onClick:L,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-trash3"})})]})]})]})]})]})};export{le as default};