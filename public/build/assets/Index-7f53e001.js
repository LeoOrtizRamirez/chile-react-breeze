import{r as a,j as t,a as e,H as P,F as _}from"./app-a24328a5.js";import{A as Q}from"./AuthenticatedLayout-184e387a.js";import{A as U}from"./MenuOpciones-0956fca1.js";/* empty css                      */import{M as l,N}from"./Modal-74c28abd.js";import{T as V,a as W}from"./estilos-toast-93a738e8.js";import"./font-unicolor-01ea6f14.js";import"./estilos-capa-autentificacion-1f606282.js";import"./ApplicationLogoLici-d0d43352.js";import"./transition-02480372.js";import"./createWithBsPrefix-86d8a879.js";import"./hasClass-aab8771c.js";import"./useTimeout-2be3fc6b.js";const me=({auth:k,actividades_economicas:f})=>{const[C,r]=a.exports.useState(!1),[y,m]=a.exports.useState(""),[h,d]=a.exports.useState(""),[p,X]=a.exports.useState(f),[M,F]=a.exports.useState(f),[x,T]=a.exports.useState(!1),[u,g]=a.exports.useState(!1),[H,I]=a.exports.useState(0),[R,j]=a.exports.useState(0),[o,B]=a.exports.useState({id:0,nombre:""}),[$,D]=a.exports.useState([]),[S,A]=a.exports.useState([]),[L,v]=a.exports.useState(!1),b=()=>v(!1),q=()=>{o.id!=0?v(!0):(m("Debes seleccionar una Actividad Ecónomica"),d("icon-error"),r(!0))},z=()=>{o.id!=0?window.location.replace("/actividades-economicas/"+o.id+"/edit"):(m("Debes seleccionar una Actividad Ecónomica"),d("icon-error"),r(!0))},G=i=>{const s=i,c=new RegExp(s,"i"),n=p.filter(function(w){if(c.test(w.id_padre_sub_categoria))return w});D(n),T(!x),I(i)},J=i=>{const s=new RegExp(i,"i"),c=p.filter(function(n){if(s.test(n.id_padre_sub_categoria))return n});A(c),g(!u),j(i)},E=i=>{B(i)},K=i=>{const s=new RegExp(i.target.value,"i"),c=p.filter(function(n){if(s.test(n.nombre))return n});F(c),g(!u)},O=()=>{fetch("/actividades-economicas/"+o.id+"/delete").then(i=>i.json()).then(i=>{if(i.type=="Success"){d("icon-check");var s=S.filter(c=>c.id!=o.id);A(s)}else d("icon-error");m(i.message),r(!0),v(!1)})};return t(Q,{auth:k,children:[e(P,{title:"Actividades económicas"}),e(V,{position:"bottom-start",children:e(W,{onClose:()=>r(!1),show:C,delay:3e3,autohide:!0,children:t("div",{className:`notification-toast ${h=="icon-error"?"error":"success"}`,children:[e("span",{className:`toast-icon ${h=="icon-error"?"toast-danger":"toast-success"}`,children:e("span",{className:h})}),e("p",{className:"title",children:y}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>r(!1)})]})})}),t("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(U,{})}),t("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Actividad económica"}),t("div",{className:"container mt-4",children:[e("div",{className:"tree_categorias tree_1",children:e("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:t("div",{className:"mx-auto",children:[e("input",{type:"text",placeholder:"Busca por actividad económica",autoComplete:"off",className:"form-control m-auto",onChange:K}),e("i",{className:"icon-Cancelar"}),e("button",{type:"button",className:"icon-Buscar-click",children:e("i",{className:"bi bi-search"})}),M.map(i=>e(_,{children:i.id_padre_sub_categoria==null&&t(_,{children:[t("div",{className:"tree-content mt-3 sector",onClick:()=>G(i.id),children:[e("i",{className:`tree-arrow has-child ${i.childs.length>0?"bi bi-chevron-down":""}`}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:i.nombre})})})]},i.id),x&&i.id==H&&e("ul",{className:"tree-children",children:$.map(s=>t("li",{"data-id":"20504",className:"tree-node has-child expanded draggable",children:[t("div",{className:"tree-content segmento",onClick:()=>J(s.id),children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:s.nombre})})})]}),u&&R==s.id&&e("ul",{className:"tree-children",children:S.map(c=>e("li",{className:"tree-node draggable",children:t("div",{className:"tree-content actividad-economica",onClick:()=>E(c),children:[e("input",{type:"radio",name:"actividad_economica",onClick:()=>E(c),checked:c.id==o.id?"checked":""}),e("span",{className:"tree-anchor children",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:c.nombre})})})]})}))})]}))})]})}))]})})}),t(l,{show:L,onHide:b,id:"removeActividadEconomica",className:"modal-dialog-centered",children:[t(l.Header,{id:"removeActividadEconomicaHeader",children:[e("h5",{className:"modal-title",children:"Eliminar"}),e("button",{type:"button",className:"btn-close btn-close-white",onClick:b})]}),e(l.Body,{id:"removeActividadEconomicaBody",children:t("p",{children:["Desea eliminar la actividad económica (",o.id,") ",o.nombre,"?"]})}),t(l.Footer,{children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",onClick:b,children:"Cancelar"}),e("button",{onClick:O,className:"btn btnRadius btn-new-red ml-2",children:"Eliminar"})]})]}),t("div",{className:"botones",children:[e(N.Link,{href:route("actividades-economicas.create"),className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-plus-square-fill"})}),e(N.Link,{onClick:z,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-pencil-fill"})}),e(N.Link,{onClick:q,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-trash3"})})]})]})]})]})]})};export{me as default};