import{r as s,j as t,a as e,H as P,F as f}from"./app-a2e36e7b.js";import{A as Q}from"./AuthenticatedLayout-6b2358bc.js";import{A as U}from"./MenuOpciones-e6bf62a1.js";/* empty css                      */import{N as x,M as d}from"./Modal-2828ca93.js";import{T as V,a as W}from"./estilos-toast-51ecf121.js";import"./font-unicolor-9ffbe9f5.js";import"./estilos-capa-autentificacion-0001bcb1.js";import"./ApplicationLogoLici-744b0700.js";import"./transition-f620aa73.js";import"./createWithBsPrefix-9bd3cd5d.js";import"./hasClass-b3e3568a.js";import"./useTimeout-17ef428f.js";const me=({auth:E,localizacion:S})=>{const[A,r]=s.exports.useState(!1),[y,m]=s.exports.useState(""),[h,l]=s.exports.useState(""),[p,X]=s.exports.useState(S),[L,z]=s.exports.useState(S),[g,M]=s.exports.useState(!1),[u,_]=s.exports.useState(!1),[F,T]=s.exports.useState(0),[H,I]=s.exports.useState(0),[n,R]=s.exports.useState({id:0,nombre:""}),[w,k]=s.exports.useState([]),[j,B]=s.exports.useState([]),[$,b]=s.exports.useState(!1),N=()=>b(!1),D=()=>{n.id!=0?b(!0):(m("Debes seleccionar una Ciudad"),l("icon-error"),r(!0))},q=()=>{n.id!=0?window.location.replace("/localizacion/"+n.id+"/edit"):(m("Debes seleccionar una Ciudad"),l("icon-error"),r(!0))},G=a=>{const i=a,o=new RegExp(i,"i"),c=p.filter(function(C){if(o.test(C.id_padre_sub_categoria))return C});k(c),M(!g),T(a)},J=a=>{const i=new RegExp(a,"i"),o=p.filter(function(c){if(i.test(c.id_padre_sub_categoria))return c});B(o),_(!u),I(a)},v=a=>{R(a)},K=a=>{const i=new RegExp(a.target.value,"i"),o=p.filter(function(c){if(i.test(c.nombre))return c});z(o),_(!u)},O=()=>{fetch("/localizacion/"+n.id+"/delete").then(a=>a.json()).then(a=>{if(a.type=="Success"){l("icon-check");var i=w.filter(o=>o.id!=n.id);k(i)}else l("icon-error");m(a.message),r(!0),b(!1)})};return t(Q,{auth:E,children:[e(P,{title:"Localización"}),e(V,{position:"bottom-start",children:e(W,{onClose:()=>r(!1),show:A,delay:3e3,autohide:!0,children:t("div",{className:`notification-toast ${h=="icon-error"?"error":"success"}`,children:[e("span",{className:`toast-icon ${h=="icon-error"?"toast-danger":"toast-success"}`,children:e("span",{className:h})}),e("p",{className:"title",children:y}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>r(!1)})]})})}),t("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(U,{})}),t("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Localización"}),t("div",{className:"container mt-4",children:[e("div",{className:"tree_categorias tree_1",children:e("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:t("div",{className:"mx-auto",children:[e("input",{type:"text",placeholder:"Buscar localización en Chile",autoComplete:"off",className:"form-control m-auto",onChange:K}),e("i",{className:"icon-Cancelar"}),e("button",{type:"button",className:"icon-Buscar-click",children:e("i",{className:"bi bi-search"})}),e("br",{}),t("div",{className:"botones",children:[e(x.Link,{href:route("createLocalizacion"),className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-plus-square-fill"})}),e(x.Link,{onClick:q,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-pencil-fill"})}),e(x.Link,{onClick:D,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-trash3"})})]}),L.map(a=>e(f,{children:a.id_padre_sub_categoria==null&&t(f,{children:[t("div",{className:"tree-content mt-3 sector",onClick:()=>G(a.id),children:[e("i",{className:`tree-arrow has-child ${a.childs.length>0?"bi bi-chevron-down":""}`}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:a.nombre})})})]},a.id),g&&a.id==F&&e("ul",{className:"tree-children",children:w.map((i,o)=>t("li",{"data-id":"20504",className:"tree-node has-child expanded draggable",onClick:()=>v(i),children:[t("div",{className:"tree-content segmento",onClick:()=>J(i.id),children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("input",{type:"radio",name:"actividad_economica",onClick:()=>v(i),checked:i.id==n.id?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(f,{children:o%2==0?e("span",{className:"tree-division__title my-auto",children:i.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:i.nombre})})})})]}),u&&H==i.id&&e("ul",{className:"tree-children",children:j.map(c=>e("li",{className:"tree-node draggable",children:e("div",{className:"tree-content actividad-economica",onClick:()=>v(c),children:e("span",{className:"tree-anchor children",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:c.nombre})})})})}))})]}))})]})}))]})})}),t(d,{show:$,onHide:N,id:"removeActividadEconomica",className:"modal-dialog-centered",children:[t(d.Header,{id:"removeActividadEconomicaHeader",children:[e("h5",{className:"modal-title",children:"Eliminar"}),e("button",{type:"button",className:"btn-close btn-close-white",onClick:N})]}),e(d.Body,{id:"removeActividadEconomicaBody",children:t("p",{children:["Desea eliminar la comuna ",n.nombre,"?"]})}),t(d.Footer,{children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",onClick:N,children:"Cancelar"}),e("button",{onClick:O,className:"btn btnRadius btn-new-red ml-2",children:"Eliminar"})]})]})]})]})]})]})};export{me as default};