<<<<<<<< HEAD:public/build/assets/Index-00993292.js
import{r as o,j as s,a as e,H as z,F as f}from"./app-7bc7aa84.js";import{A as G}from"./AuthenticatedLayout-f158ebc2.js";/* empty css                      */import{N as w}from"./Nav-bb31750d.js";import{M as N}from"./Modal-7c90b512.js";import{T as J,a as P}from"./estilos-toast-b995a97c.js";/* empty css                      */import"./ApplicationLogo-8df486ce.js";import"./ApplicationLogoLici-3cbde996.js";import"./AuthenticatedLayout-413f5a1b.js";import"./transition-5a2acc06.js";import"./createWithBsPrefix-e4392318.js";import"./hook-c6f12429.js";import"./CloseButton-6e6e3b74.js";import"./hasClass-7fd45157.js";import"./useTimeout-7534b4ff.js";const me=({auth:H,tiposcompras:k})=>{const[I,l]=o.exports.useState(!1),[j,C]=o.exports.useState(""),[x,p]=o.exports.useState(""),[m,Q]=o.exports.useState(k),[y,E]=o.exports.useState(k);o.exports.useState(!1),o.exports.useState(!1),o.exports.useState(0),o.exports.useState(0);const[u,h]=o.exports.useState([]),[U,B]=o.exports.useState([]),[n,M]=o.exports.useState({id:0,nombre:""}),[d,b]=o.exports.useState([]),[V,D]=o.exports.useState([]),[R,_]=o.exports.useState(!1),v=()=>_(!1),$=()=>{n.id!=0?_(!0):(C("Debes seleccionar un tipo de compra"),p("icon-error"),l(!0))},L=()=>{n.id!=0?window.location.replace("/tiposcompras/"+n.id+"/edit"):(C("Debes seleccionar un tipo de compra"),p("icon-error"),l(!0))},q=a=>{u.includes(a)?h(u.filter(r=>r!=a)):h([...u,a]);const i=new RegExp(a,"i");y.filter(function(r){if(i.test(r.id_padre_sub_categoria))return r}).forEach(r=>{if(!d.includes(r))d.push(r);else{const S=d.filter(T=>T.id_padre_sub_categoria!=a);b(S)}})},F=a=>{M(a)},A=a=>{if(a.target.value==""){E(m),b([]),D([]),h([]),B([]);return}if(a.key==="Enter"){const S=new RegExp(a.target.value,"i"),T=m.filter(function(t){if(S.test(t.nombre))return t});var i=[],c=[],r=[];T.forEach(t=>{t.id_padre_sub_categoria!=null?c.includes(t)||c.push(t):(i.includes(t)||i.push(t),r.includes(t.id_padre_sub_categoria)||r.push(t.id_padre_sub_categoria))}),c.forEach(t=>{var K=m.filter(g=>g.id==t.id_padre_sub_categoria)[0];i.includes(K)||i.push(m.filter(g=>g.id==t.id_padre_sub_categoria)[0]),r.includes(t.id_padre_sub_categoria)||r.push(t.id_padre_sub_categoria)}),E(i),b(c),h(r)}},O=()=>{fetch("/tiposcompras/"+n.id+"/delete").then(a=>a.json()).then(a=>{if(a.type=="Success"){p("icon-check");var i=d.filter(c=>c.id!=n.id);b(i),M({id:0,nombre:""})}else p("icon-error");C(a.message),l(!0),_(!1)})};return s(G,{auth:H,children:[e(z,{title:"Tipos Compras"}),e(J,{position:"bottom-start",children:e(P,{onClose:()=>l(!1),show:I,delay:3e3,autohide:!0,children:s("div",{className:`notification-toast ${x=="icon-error"?"error":"success"}`,children:[e("span",{className:`toast-icon ${x=="icon-error"?"toast-danger":"toast-success"}`,children:e("span",{className:x})}),e("p",{className:"title",children:j}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>l(!1)})]})})}),e("div",{className:"contenedor-planes",children:s("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Tipos Compras"}),s("div",{className:"container mt-4",children:[e("div",{className:"tree_categorias tree_1",children:e("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:s("div",{className:"mx-auto",children:[e("input",{type:"text",placeholder:"Buscar tipo de compra",autoComplete:"off",className:"form-control m-auto",onKeyDown:A}),e("i",{className:"icon-Cancelar"}),e("button",{type:"button",className:"icon-Buscar-click",children:e("i",{className:"bi bi-search"})}),e("br",{}),s("div",{className:"botones",children:[e(w.Link,{href:route("createTiposCompras"),className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-plus-square-fill"})}),e(w.Link,{onClick:L,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-pencil-fill"})}),e(w.Link,{onClick:$,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-trash3"})})]}),y.map(a=>e(f,{children:a.id_padre_sub_categoria==null&&s(f,{children:[s("div",{id:a.id,className:"tree-content mt-3 sector",onClick:()=>q(a.id),children:[e("i",{className:`tree-arrow has-child ${a.childs.length>0?"bi bi-chevron-down":""}`}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:s("span",{className:"tree-division__title my-auto",children:[a.nombre,a.id]})})})]},a.id),u.includes(a.id)&&e("ul",{className:"tree-children",children:d.map((i,c)=>e(f,{children:a.id==i.id_padre_sub_categoria&&e("li",{"data-id":"20504",className:"tree-node has-child expanded draggable",onClick:()=>F(i),children:s("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("input",{type:"radio",name:"tipo_compra",onClick:()=>F(i),checked:i.id==n.id?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(f,{children:c%2==0?s("span",{className:"tree-division__title my-auto",children:[i.nombre,i.id]}):s("span",{className:"tree-division__title-gray my-auto",children:[i.nombre,i.id]})})})})]})})}))})]})}))]})})}),s(N,{show:R,onHide:v,id:"removeTipoCompra",className:"modal-dialog-centered",children:[s(N.Header,{id:"removeTipoCompraHeader",children:[e("h5",{className:"modal-title",children:"Eliminar"}),e("button",{type:"button",className:"btn-close btn-close-white",onClick:v})]}),e(N.Body,{id:"removeTipoCompraBody",children:s("p",{children:["Desea eliminar el tipo de compra"," ",n.nombre,"?"]})}),s(N.Footer,{children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",onClick:v,children:"Cancelar"}),e("button",{onClick:O,className:"btn btnRadius btn-new-red ml-2",children:"Eliminar"})]})]})]})]})})]})};export{me as default};
========
import{r as o,j as s,a as e,H as z,F as f}from"./app-a395f59d.js";import{A as G}from"./AuthenticatedLayout-9dd5324a.js";/* empty css                      */import{N as w}from"./Nav-5332b456.js";import{M as N}from"./Modal-84a19aee.js";import{T as J,a as P}from"./estilos-toast-8e67c442.js";/* empty css                      */import"./ApplicationLogo-82844bbc.js";import"./ApplicationLogoLici-44ea342d.js";import"./AuthenticatedLayout-30f9dc1b.js";import"./transition-d627f6da.js";import"./createWithBsPrefix-6f56816e.js";import"./hook-e6eb6b9d.js";import"./CloseButton-5aff73a3.js";import"./hasClass-2d9b9fcc.js";import"./useTimeout-b5082d06.js";const me=({auth:H,tiposcompras:k})=>{const[I,l]=o.exports.useState(!1),[j,C]=o.exports.useState(""),[x,p]=o.exports.useState(""),[m,Q]=o.exports.useState(k),[y,E]=o.exports.useState(k);o.exports.useState(!1),o.exports.useState(!1),o.exports.useState(0),o.exports.useState(0);const[u,h]=o.exports.useState([]),[U,B]=o.exports.useState([]),[n,M]=o.exports.useState({id:0,nombre:""}),[d,b]=o.exports.useState([]),[V,D]=o.exports.useState([]),[R,_]=o.exports.useState(!1),v=()=>_(!1),$=()=>{n.id!=0?_(!0):(C("Debes seleccionar un tipo de compra"),p("icon-error"),l(!0))},L=()=>{n.id!=0?window.location.replace("/tiposcompras/"+n.id+"/edit"):(C("Debes seleccionar un tipo de compra"),p("icon-error"),l(!0))},q=a=>{u.includes(a)?h(u.filter(r=>r!=a)):h([...u,a]);const i=new RegExp(a,"i");y.filter(function(r){if(i.test(r.id_padre_sub_categoria))return r}).forEach(r=>{if(!d.includes(r))d.push(r);else{const S=d.filter(T=>T.id_padre_sub_categoria!=a);b(S)}})},F=a=>{M(a)},A=a=>{if(a.target.value==""){E(m),b([]),D([]),h([]),B([]);return}if(a.key==="Enter"){const S=new RegExp(a.target.value,"i"),T=m.filter(function(t){if(S.test(t.nombre))return t});var i=[],c=[],r=[];T.forEach(t=>{t.id_padre_sub_categoria!=null?c.includes(t)||c.push(t):(i.includes(t)||i.push(t),r.includes(t.id_padre_sub_categoria)||r.push(t.id_padre_sub_categoria))}),c.forEach(t=>{var K=m.filter(g=>g.id==t.id_padre_sub_categoria)[0];i.includes(K)||i.push(m.filter(g=>g.id==t.id_padre_sub_categoria)[0]),r.includes(t.id_padre_sub_categoria)||r.push(t.id_padre_sub_categoria)}),E(i),b(c),h(r)}},O=()=>{fetch("/tiposcompras/"+n.id+"/delete").then(a=>a.json()).then(a=>{if(a.type=="Success"){p("icon-check");var i=d.filter(c=>c.id!=n.id);b(i),M({id:0,nombre:""})}else p("icon-error");C(a.message),l(!0),_(!1)})};return s(G,{auth:H,children:[e(z,{title:"Tipos Compras"}),e(J,{position:"bottom-start",children:e(P,{onClose:()=>l(!1),show:I,delay:3e3,autohide:!0,children:s("div",{className:`notification-toast ${x=="icon-error"?"error":"success"}`,children:[e("span",{className:`toast-icon ${x=="icon-error"?"toast-danger":"toast-success"}`,children:e("span",{className:x})}),e("p",{className:"title",children:j}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>l(!1)})]})})}),e("div",{className:"contenedor-planes",children:s("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Tipos Compras"}),s("div",{className:"container mt-4",children:[e("div",{className:"tree_categorias tree_1",children:e("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:s("div",{className:"mx-auto",children:[e("input",{type:"text",placeholder:"Buscar tipo de compra",autoComplete:"off",className:"form-control m-auto",onKeyDown:A}),e("i",{className:"icon-Cancelar"}),e("button",{type:"button",className:"icon-Buscar-click",children:e("i",{className:"bi bi-search"})}),e("br",{}),s("div",{className:"botones",children:[e(w.Link,{href:route("createTiposCompras"),className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-plus-square-fill"})}),e(w.Link,{onClick:L,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-pencil-fill"})}),e(w.Link,{onClick:$,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-trash3"})})]}),y.map(a=>e(f,{children:a.id_padre_sub_categoria==null&&s(f,{children:[s("div",{id:a.id,className:"tree-content mt-3 sector",onClick:()=>q(a.id),children:[e("i",{className:`tree-arrow has-child ${a.childs.length>0?"bi bi-chevron-down":""}`}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:s("span",{className:"tree-division__title my-auto",children:[a.nombre,a.id]})})})]},a.id),u.includes(a.id)&&e("ul",{className:"tree-children",children:d.map((i,c)=>e(f,{children:a.id==i.id_padre_sub_categoria&&e("li",{"data-id":"20504",className:"tree-node has-child expanded draggable",onClick:()=>F(i),children:s("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("input",{type:"radio",name:"tipo_compra",onClick:()=>F(i),checked:i.id==n.id?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(f,{children:c%2==0?s("span",{className:"tree-division__title my-auto",children:[i.nombre,i.id]}):s("span",{className:"tree-division__title-gray my-auto",children:[i.nombre,i.id]})})})})]})})}))})]})}))]})})}),s(N,{show:R,onHide:v,id:"removeTipoCompra",className:"modal-dialog-centered",children:[s(N.Header,{id:"removeTipoCompraHeader",children:[e("h5",{className:"modal-title",children:"Eliminar"}),e("button",{type:"button",className:"btn-close btn-close-white",onClick:v})]}),e(N.Body,{id:"removeTipoCompraBody",children:s("p",{children:["Desea eliminar el tipo de compra"," ",n.nombre,"?"]})}),s(N.Footer,{children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",onClick:v,children:"Cancelar"}),e("button",{onClick:O,className:"btn btnRadius btn-new-red ml-2",children:"Eliminar"})]})]})]})]})})]})};export{me as default};
>>>>>>>> 479cb1aee199c379a30a26461e7920d8a247747e:public/build/assets/Index-a1f7dfec.js
