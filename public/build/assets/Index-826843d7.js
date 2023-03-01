import{r as t,j as s,a as e,H as Q,F as C}from"./app-89182a41.js";import{A as U}from"./AuthenticatedLayout-c38f33eb.js";/* empty css                      */import{N as k,M as v}from"./Modal-6948ae07.js";import{T as V,a as W}from"./estilos-toast-883d7379.js";import"./font-unicolor-0e1e446f.js";import"./ApplicationLogo-9ef5b019.js";import"./ApplicationLogoLici-c448672c.js";import"./AuthenticatedLayout-eb0355e5.js";import"./transition-9c176139.js";import"./createWithBsPrefix-bef693fa.js";import"./hasClass-697ec07b.js";import"./useTimeout-b9a9ea87.js";const ue=({auth:D,tiposcompras:y})=>{const[R,p]=t.exports.useState(!1),[$,_]=t.exports.useState(""),[S,u]=t.exports.useState(""),[d,X]=t.exports.useState(y),[E,M]=t.exports.useState(y);t.exports.useState(!1),t.exports.useState(!1),t.exports.useState(0),t.exports.useState(0);const[h,b]=t.exports.useState([]),[L,F]=t.exports.useState([]),[l,H]=t.exports.useState({id:0,nombre:""}),[m,f]=t.exports.useState([]),[Y,I]=t.exports.useState([]),[q,g]=t.exports.useState(!1),T=()=>g(!1),A=()=>{l.id!=0?g(!0):(_("Debes seleccionar un tipo de compra"),u("icon-error"),p(!0))},O=()=>{l.id!=0?window.location.replace("/tiposcompras/"+l.id+"/edit"):(_("Debes seleccionar un tipo de compra"),u("icon-error"),p(!0))},K=a=>{h.includes(a)?b(h.filter(r=>r!=a)):b([...h,a]);const i=new RegExp(a,"i");E.filter(function(r){if(i.test(r.id_padre_sub_categoria))return r}).forEach(r=>{if(!m.includes(r))m.push(r);else{const N=m.filter(x=>x.id_padre_sub_categoria!=a);f(N)}})},j=a=>{H(a)},z=a=>{if(a.target.value==""){M(d),f([]),I([]),b([]),F([]);return}if(a.key==="Enter"){const J=new RegExp(a.target.value,"i"),P=d.filter(function(o){if(J.test(o.nombre))return o});var i=[],n=[],r=[],N=[],x=[];P.forEach(o=>{if(o.id_padre_sub_categoria!=null){r.push(o),N.push(o.id_padre_sub_categoria);const c=d.find(w=>w.id==o.id_padre_sub_categoria);n.find(w=>w.id==c.id)||n.push(c),n.includes(o)||(n.push(o),x.push(o.id_padre_sub_categoria))}});var B=null;debugger;r.forEach(o=>{B=d.filter(c=>c.id==o.id)[0],d.filter(c=>c.id==o.id_padre_sub_categoria)[0],i.includes(B)||i.push(d.filter(c=>c.id==o.id_padre_sub_categoria)[0])}),M(i),f(n),I(r),b(x),F(N)}},G=()=>{fetch("/tiposcompras/"+l.id+"/delete").then(a=>a.json()).then(a=>{if(a.type=="Success"){u("icon-check");var i=m.filter(n=>n.id!=l.id);f(i),H({id:0,nombre:""})}else u("icon-error");_(a.message),p(!0),g(!1)})};return s(U,{auth:D,children:[e(Q,{title:"Tipos Compras"}),e(V,{position:"bottom-start",children:e(W,{onClose:()=>p(!1),show:R,delay:3e3,autohide:!0,children:s("div",{className:`notification-toast ${S=="icon-error"?"error":"success"}`,children:[e("span",{className:`toast-icon ${S=="icon-error"?"toast-danger":"toast-success"}`,children:e("span",{className:S})}),e("p",{className:"title",children:$}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>p(!1)})]})})}),e("div",{className:"contenedor-planes",children:s("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Tipos Compras"}),s("div",{className:"container mt-4",children:[e("div",{className:"tree_categorias tree_1",children:e("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:s("div",{className:"mx-auto",children:[e("input",{type:"text",placeholder:"Buscar tipo de compra",autoComplete:"off",className:"form-control m-auto",onKeyDown:z}),e("i",{className:"icon-Cancelar"}),e("button",{type:"button",className:"icon-Buscar-click",children:e("i",{className:"bi bi-search"})}),e("br",{}),s("div",{className:"botones",children:[e(k.Link,{href:route("createTiposCompras"),className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-plus-square-fill"})}),e(k.Link,{onClick:O,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-pencil-fill"})}),e(k.Link,{onClick:A,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-trash3"})})]}),E.map(a=>e(C,{children:a.id_padre_sub_categoria==null&&s(C,{children:[s("div",{id:a.id,className:"tree-content mt-3 sector",onClick:()=>K(a.id),children:[e("i",{className:`tree-arrow has-child ${a.childs.length>0?"bi bi-chevron-down":""}`}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:s("span",{className:"tree-division__title my-auto",children:[a.nombre,a.id]})})})]},a.id),h.includes(a.id)&&e("ul",{className:"tree-children",children:m.map((i,n)=>e(C,{children:a.id==i.id_padre_sub_categoria&&s("li",{"data-id":"20504",className:"tree-node has-child expanded draggable",onClick:()=>j(i),children:[s("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("input",{type:"radio",name:"tipo_compra",onClick:()=>j(i),checked:i.id==l.id?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(C,{children:n%2==0?s("span",{className:"tree-division__title my-auto",children:[i.nombre,i.id]}):s("span",{className:"tree-division__title-gray my-auto",children:[i.nombre,i.id]})})})})]}),L.includes(i.id)]})}))})]})}))]})})}),s(v,{show:q,onHide:T,id:"removeTipoCompra",className:"modal-dialog-centered",children:[s(v.Header,{id:"removeTipoCompraHeader",children:[e("h5",{className:"modal-title",children:"Eliminar"}),e("button",{type:"button",className:"btn-close btn-close-white",onClick:T})]}),e(v.Body,{id:"removeTipoCompraBody",children:s("p",{children:["Desea eliminar el tipo de compra"," ",l.nombre,"?"]})}),s(v.Footer,{children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",onClick:T,children:"Cancelar"}),e("button",{onClick:G,className:"btn btnRadius btn-new-red ml-2",children:"Eliminar"})]})]})]})]})})]})};export{ue as default};
