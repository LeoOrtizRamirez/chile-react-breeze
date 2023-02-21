import{r as o,j as s,a as e,H as W,F as p}from"./app-fefff5b5.js";import{A as X}from"./AuthenticatedLayout-eeccacf1.js";import{A as Y}from"./MenuOpciones-a40e585b.js";/* empty css                      */import{N as M,M as S}from"./Modal-55358929.js";import{T as Z,a as ee}from"./estilos-toast-6520bd60.js";import"./font-unicolor-8d4309b6.js";import"./estilos-capa-autentificacion-e622f142.js";import"./ApplicationLogoLici-2621a9b3.js";import"./transition-cb6d3134.js";import"./createWithBsPrefix-4d74ba74.js";import"./hasClass-81ff52a1.js";import"./useTimeout-0ea72b7e.js";const ve=({auth:D,actividades_economicas:T})=>{const[$,h]=o.exports.useState(!1),[L,A]=o.exports.useState(""),[w,v]=o.exports.useState(""),[m,ie]=o.exports.useState(T),[k,H]=o.exports.useState(T);o.exports.useState(!1),o.exports.useState(!1),o.exports.useState(0);const[ae,q]=o.exports.useState(0),[_,f]=o.exports.useState([]),[N,g]=o.exports.useState([]),[d,I]=o.exports.useState({id:0,nombre:""}),[x,y]=o.exports.useState([]),[b,E]=o.exports.useState([]),[O,C]=o.exports.useState(!1),F=()=>C(!1),K=()=>{d.id!=0?C(!0):(A("Debes seleccionar una Actividad Ecónomica"),v("icon-error"),h(!0))},z=()=>{d.id!=0?window.location.replace("/actividades-economicas/"+d.id+"/edit"):(A("Debes seleccionar una Actividad Ecónomica"),v("icon-error"),h(!0))},G=i=>{_.includes(i)?f(_.filter(a=>a!=i)):f([..._,i]);const t=new RegExp(i,"i");k.filter(function(a){if(t.test(a.id_padre_sub_categoria))return a}).forEach(a=>{if(!x.includes(a))x.push(a);else{const l=x.filter(u=>u.id_padre_sub_categoria!=i);y(l)}})},J=i=>{N.includes(i)?g(N.filter(a=>a!=i)):g([...N,i]);const t=new RegExp(i,"i");k.filter(function(a){if(t.test(a.id_padre_sub_categoria))return a}).forEach(a=>{if(!b.includes(a))b.push(a);else{const l=b.filter(u=>u.id_padre_sub_categoria!=i);E(l)}}),q(i)},R=i=>{I(i)},P=i=>{if(i.target.value==""){console.log("primer if"),console.log(i.target.value),H(m),y([]),E([]),f([]),g([]);return}if(i.key==="Enter"){console.log("enter"),console.log(i.key);const U=new RegExp(i.target.value,"i"),V=m.filter(function(c){if(U.test(c.nombre))return c});var t=[],r=[],a=[],l=[],u=[];V.forEach(c=>{c.id_abuelo_sub_categoria!=null&&c.id_padre_sub_categoria!=null&&(a.push(c),l.push(c.id_padre_sub_categoria),r.push(m.filter(n=>n.id==c.id_padre_sub_categoria)[0]),u.push(c.id_abuelo_sub_categoria)),c.id_abuelo_sub_categoria==null&&c.id_padre_sub_categoria!=null&&(r.includes(c)||r.push(c),u.includes(c.id_padre_sub_categoria)||u.push(c.id_padre_sub_categoria)),c.id_abuelo_sub_categoria==null&&c.id_padre_sub_categoria==null&&t.push(c)});var j=null,B=null;a.forEach(c=>{j=m.filter(n=>n.id==c.id_abuelo_sub_categoria)[0],B=m.filter(n=>n.id==c.id_padre_sub_categoria)[0],t.includes(j)||t.push(m.filter(n=>n.id==c.id_abuelo_sub_categoria)[0]),r.includes(B)||t.push(m.filter(n=>n.id==c.id_padre_sub_categoria)[0])}),H(t),y(r),E(a),f(u),g(l)}},Q=()=>{fetch("/actividades-economicas/"+d.id+"/delete").then(i=>i.json()).then(i=>{if(i.type=="Success"){v("icon-check");var t=b.filter(r=>r.id!=d.id);E(t),I({id:0,nombre:""})}else v("icon-error");A(i.message),h(!0),C(!1)})};return s(X,{auth:D,children:[e(W,{title:"Actividades económicas"}),e(Z,{position:"bottom-start",children:e(ee,{onClose:()=>h(!1),show:$,delay:3e3,autohide:!0,children:s("div",{className:`notification-toast ${w=="icon-error"?"error":"success"}`,children:[e("span",{className:`toast-icon ${w=="icon-error"?"toast-danger":"toast-success"}`,children:e("span",{className:w})}),e("p",{className:"title",children:L}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>h(!1)})]})})}),s("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(Y,{})}),s("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[e("h2",{className:"name_section_app",children:"Actividad económica"}),s("div",{className:"container mt-4",children:[e("div",{className:"tree_categorias tree_1",children:e("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:s("div",{className:"mx-auto",children:[e("input",{type:"text",placeholder:"Busca por actividad económica",autoComplete:"off",className:"form-control m-auto",onKeyDown:P}),e("i",{className:"icon-Cancelar"}),e("button",{type:"button",className:"icon-Buscar-click",children:e("i",{className:"bi bi-search"})}),e("br",{}),s("div",{className:"botones",children:[e(M.Link,{href:route("actividades-economicas.create"),className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-plus-square-fill"})}),e(M.Link,{onClick:z,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-pencil-fill"})}),e(M.Link,{onClick:K,className:"flex  ml-4 text-probar ",children:e("i",{className:"bi bi-trash3"})})]}),k.map(i=>e(p,{children:i.id_padre_sub_categoria==null&&s(p,{children:[s("div",{id:i.id,className:"tree-content mt-3 sector",onClick:()=>G(i.id),children:[e("i",{className:`tree-arrow has-child ${i.childs.length>0?"bi bi-chevron-down":""}`}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:i.nombre})})})]},i.id),_.includes(i.id)&&e("ul",{className:"tree-children new-class",children:x.map((t,r)=>e(p,{children:i.id==t.id_padre_sub_categoria&&s("li",{"data-id":"20504",className:"tree-node has-child expanded draggable",children:[s("div",{className:"tree-content segmento",onClick:()=>J(t.id),children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(p,{children:r%2==0?e("span",{className:"tree-division__title my-auto",children:t.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:t.nombre})})})})]}),N.includes(t.id)&&e("ul",{className:"tree-children",children:b.map((a,l)=>e(p,{children:t.id==a.id_padre_sub_categoria&&e("li",{className:"tree-node draggable",children:s("div",{className:"tree-content actividad-economica",onClick:()=>R(a),children:[e("input",{type:"radio",name:"actividad_economica",onChange:()=>R(a),checked:a.id==d.id?"checked":""}),e("span",{className:"tree-anchor children",children:e("span",{className:"tree-division tree-division1",children:e(p,{children:l%2==0?e("span",{className:"tree-division__title my-auto",children:a.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:a.nombre})})})})]})})}))})]})}))})]})}))]})})}),s(S,{show:O,onHide:F,id:"removeActividadEconomica",className:"modal-dialog-centered",children:[s(S.Header,{id:"removeActividadEconomicaHeader",children:[e("h5",{className:"modal-title",children:"Eliminar"}),e("button",{type:"button",className:"btn-close btn-close-white",onClick:F})]}),e(S.Body,{id:"removeActividadEconomicaBody",children:s("p",{children:["Desea eliminar la actividad económica (",d.id,") ",d.nombre,"?"]})}),s(S.Footer,{children:[e("button",{type:"submit",className:"btn btnRadius btn-new-blue mr-2",onClick:F,children:"Cancelar"}),e("button",{onClick:Q,className:"btn btnRadius btn-new-red ml-2",children:"Eliminar"})]})]})]})]})]})]})};export{ve as default};