import{r as t,j as r,a as e,H as z,F as f}from"./app-ef2ff9b2.js";import{A as G}from"./AuthenticatedLayout-ff38b34c.js";/* empty css                      */import{N as w}from"./Nav-8e9413c4.js";import{M as N}from"./Modal-55dea3c6.js";import{T as J,a as P}from"./estilos-toast-e742002a.js";/* empty css                      */import"./ApplicationLogo-c815b16b.js";import"./ApplicationLogoLici-a53e0000.js";import"./AuthenticatedLayout-e83d4972.js";import"./transition-a92235d8.js";import"./createWithBsPrefix-d4b45b03.js";import"./hook-9f3c05ef.js";import"./CloseButton-0626eacc.js";import"./hasClass-a458bf09.js";const pe=({auth:H,tiposcompras:k})=>{const[I,l]=t.exports.useState(!1),[j,C]=t.exports.useState(""),[x,p]=t.exports.useState(""),[m,Q]=t.exports.useState(k),[y,E]=t.exports.useState(k);t.exports.useState(!1),t.exports.useState(!1),t.exports.useState(0),t.exports.useState(0);const[u,h]=t.exports.useState([]),[U,B]=t.exports.useState([]),[n,M]=t.exports.useState({id:0,nombre:""}),[d,b]=t.exports.useState([]),[V,D]=t.exports.useState([]),[R,_]=t.exports.useState(!1),v=()=>_(!1),$=()=>{n.id!=0?_(!0):(C("Debes seleccionar un tipo de compra"),p("icon-error"),l(!0))},L=()=>{n.id!=0?window.location.replace("/tiposcompras/"+n.id+"/edit"):(C("Debes seleccionar un tipo de compra"),p("icon-error"),l(!0))},q=a=>{u.includes(a)?h(u.filter(o=>o!=a)):h([...u,a]);const s=new RegExp(a,"i");y.filter(function(o){if(s.test(o.id_padre_sub_categoria))return o}).forEach(o=>{if(!d.includes(o))d.push(o);else{const S=d.filter(T=>T.id_padre_sub_categoria!=a);b(S)}})},F=a=>{M(a)},A=a=>{if(a.target.value==""){E(m),b([]),D([]),h([]),B([]);return}if(a.key==="Enter"){const S=new RegExp(a.target.value,"i"),T=m.filter(function(i){if(S.test(i.nombre))return i});var s=[],c=[],o=[];T.forEach(i=>{i.id_padre_sub_categoria!=null?c.includes(i)||c.push(i):(s.includes(i)||s.push(i),o.includes(i.id_padre_sub_categoria)||o.push(i.id_padre_sub_categoria))}),c.forEach(i=>{var K=m.filter(g=>g.id==i.id_padre_sub_categoria)[0];s.includes(K)||s.push(m.filter(g=>g.id==i.id_padre_sub_categoria)[0]),o.includes(i.id_padre_sub_categoria)||o.push(i.id_padre_sub_categoria)}),E(s),b(c),h(o)}},O=()=>{fetch("/tiposcompras/"+n.id+"/delete").then(a=>a.json()).then(a=>{if(a.type=="Success"){p("icon-check");var s=d.filter(c=>c.id!=n.id);b(s),M({id:0,nombre:""})}else p("icon-error");C(a.message),l(!0),_(!1)})};return r(G,{auth:H,children:[e(z,{title:"Tipos Compras"}),e(J,{position:"bottom-start",children:e(P,{onClose:()=>l(!1),show:I,delay:3e3,autohide:!0,children:r("div",{className:`notification-toast ${x=="icon-error"?"error":"success"}`,children:[e("span",{className:`toast-icon ${x=="icon-error"?"toast-danger":"toast-success"}`,children:e("span",{className:x})}),e("p",{className:"title",children:j}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>l(!1)})]})})}),e("div",{className:"contenedor-planes",children:r("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Tipos Compras"}),r("div",{className:"container mt-4",children:[e("div",{className:"tree_categorias tree_1",children:e("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:r("div",{className:"mx-auto",children:[e("input",{type:"text",placeholder:"Buscar tipo de compra",autoComplete:"off",className:"form-control m-auto",onKeyDown:A}),e("i",{className:"icon-Cancelar"}),e("button",{type:"button",className:"icon-Buscar-click",children:e("i",{className:"bi bi-search"})}),e("br",{}),r("div",{className:"botones",children:[e(w.Link,{href:route("createTiposCompras"),className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-plus-square-fill"})}),e(w.Link,{onClick:L,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-pencil-fill"})}),e(w.Link,{onClick:$,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-trash3"})})]}),y.map(a=>e(f,{children:a.id_padre_sub_categoria==null&&r(f,{children:[r("div",{id:a.id,className:"tree-content mt-3 sector",onClick:()=>q(a.id),children:[e("i",{className:`tree-arrow has-child ${a.childs.length>0?"bi bi-chevron-down":""}`}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:a.nombre})})})]},a.id),u.includes(a.id)&&e("ul",{className:"tree-children",children:d.map((s,c)=>e(f,{children:a.id==s.id_padre_sub_categoria&&e("li",{"data-id":"20504",className:"tree-node has-child expanded draggable",onClick:()=>F(s),children:r("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("input",{type:"radio",name:"tipo_compra",onClick:()=>F(s),checked:s.id==n.id?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(f,{children:c%2==0?e("span",{className:"tree-division__title my-auto",children:s.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:s.nombre})})})})]})})}))})]})}))]})})}),r(N,{show:R,onHide:v,id:"removeTipoCompra",className:"modal-dialog-centered",children:[r(N.Header,{id:"removeTipoCompraHeader",children:[e("h5",{className:"modal-title",children:"Eliminar"}),e("button",{type:"button",className:"btn-close btn-close-white",onClick:v})]}),e(N.Body,{id:"removeTipoCompraBody",children:r("p",{children:["Desea eliminar el tipo de compra"," ",n.nombre,"?"]})}),r(N.Footer,{children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",onClick:v,children:"Cancelar"}),e("button",{onClick:O,className:"btn btnRadius btn-new-red ml-2",children:"Eliminar"})]})]})]})]})})]})};export{pe as default};
