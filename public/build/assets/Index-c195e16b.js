import{r as c,j as r,F as u,a as e}from"./app-76186bea.js";import"./AuthenticatedLayout-86a56f28.js";/* empty css                      */import{T as Te,a as ye}from"./estilos-toast-c6236c1a.js";/* empty css                      *//* empty css                 */import"./transition-b7fa2f84.js";import"./createWithBsPrefix-e59244fd.js";import"./CloseButton-a9816bb5.js";const Ge=({auth:Pe,actividades_economicas:j,tiposcompras:O,localizacion:Ae})=>{const[X,q]=c.exports.useState(!1),[Y,Be]=c.exports.useState(""),[y,Fe]=c.exports.useState(""),[p,$e]=c.exports.useState(j),[P,D]=c.exports.useState(j),[h,x]=c.exports.useState([]),[_,C]=c.exports.useState([]),[f,Z]=c.exports.useState([]),[S,A]=c.exports.useState([]),[k,B]=c.exports.useState([]),ee=a=>{var i=document.getElementById("sector_"+a);i.classList.toggle("expanded"),h.includes(a)?x(h.filter(s=>s!=a)):x([...h,a]);const n=new RegExp(a,"i");P.filter(function(s){if(n.test(s.id_padre_sub_categoria))return s}).forEach(s=>{if(!S.includes(s))S.push(s);else{const l=S.filter(d=>d.id_padre_sub_categoria!=a);A(l)}})},ae=a=>{var i=document.getElementById("segmento_"+a);i.classList.toggle("expanded"),_.includes(a)?C(_.filter(s=>s!=a)):C([..._,a]);const n=new RegExp(a,"i");P.filter(function(s){if(n.test(s.id_padre_sub_categoria))return s}).forEach(s=>{if(!k.includes(s))k.push(s);else{const l=k.filter(d=>d.id_padre_sub_categoria!=a);B(l)}})},b=a=>{var i=[];f.forEach(s=>{i.push(s)});var n=p.filter(s=>s.id_padre_sub_categoria==a.id&&s.id_abuelo_sub_categoria==null);if(n.length>0)i.includes(a.id)?(i=g(i,a),i=m(i,n,"segmento","remove")):(i.push(a.id),i=m(i,n,"segmento","remove"),i=m(i,n,"segmento","add"));else{var o=p.filter(s=>s.id_padre_sub_categoria==a.id);o.length>0?i.includes(a.id)?(i=g(i,a),i=m(i,o,"actividad_economica","remove")):(i.push(a.id),i=m(i,o,"actividades_economicas","remove"),i=m(i,o,"actividad_economica","add")):i.includes(a.id)?i=g(i,a):i.push(a.id)}Z(i)},g=(a,i)=>{const n=a.indexOf(i.id);return n>-1&&a.splice(n,1),a},m=(a,i,n=null,o)=>(i.forEach(s=>{switch(o){case"add":a.push(s.id),n=="segmento"&&p.filter(d=>d.id_padre_sub_categoria==s.id).forEach(d=>{a.push(d.id)});break;case"remove":a=g(a,s),n=="segmento"&&p.filter(d=>d.id_padre_sub_categoria==s.id).forEach(d=>{a=g(a,d)});break}}),a),ie=a=>{if(a.target.value==""){D(p),A([]),B([]),x([]),C([]);return}if(a.key==="Enter"){const d=new RegExp(a.target.value,"i"),z=p.filter(function(t){if(d.test(t.nombre)||a.target.value==t.id)return t});var i=[],n=[],o=[],s=[],l=[];z.forEach(t=>{if(t.id_abuelo_sub_categoria!=null&&t.id_padre_sub_categoria!=null){o.push(t);var W=p.filter(V=>V.id==t.id_padre_sub_categoria)[0];n.includes(W)||n.push(W),s.includes(t.id_padre_sub_categoria)||s.push(t.id_padre_sub_categoria);var N=p.filter(V=>V.id==t.id_abuelo_sub_categoria)[0];i.includes(N)||i.push(N),l.includes(t.id_abuelo_sub_categoria)||l.push(t.id_abuelo_sub_categoria)}if(t.id_abuelo_sub_categoria==null&&t.id_padre_sub_categoria!=null){n.includes(t)||n.push(t),s.includes(t.id)||s.push(t.id);var N=p.filter(we=>we.id==t.id_padre_sub_categoria)[0];i.includes(N)||i.push(N),l.includes(t.id_padre_sub_categoria)||l.push(t.id_padre_sub_categoria)}t.id_abuelo_sub_categoria==null&&t.id_padre_sub_categoria==null&&(i.includes(t)||i.push(t),l.includes(t.id)||l.push(t.id))}),D(i),A(n),B(o),x(l),C(s)}},[E,Ie]=c.exports.useState(O),[H,K]=c.exports.useState(O),[v,w]=c.exports.useState([]),[Le,se]=c.exports.useState([]),[ce,te]=c.exports.useState({id:0,nombre:""}),[T,F]=c.exports.useState([]),[Re,oe]=c.exports.useState([]),ne=a=>{v.includes(a)?w(v.filter(o=>o!=a)):w([...v,a]);const i=new RegExp(a,"i");H.filter(function(o){if(i.test(o.id_padre_sub_categoria))return o}).forEach(o=>{if(!T.includes(o))T.push(o);else{const s=T.filter(l=>l.id_padre_sub_categoria!=a);F(s)}})},de=a=>{te(a)},re=a=>{if(a.target.value==""){K(E),F([]),oe([]),w([]),se([]);return}if(a.key==="Enter"){const s=new RegExp(a.target.value,"i"),l=E.filter(function(d){if(s.test(d.nombre))return d});var i=[],n=[],o=[];l.forEach(d=>{d.id_padre_sub_categoria!=null?n.includes(d)||n.push(d):(i.includes(d)||i.push(d),o.includes(d.id_padre_sub_categoria)||o.push(d.id_padre_sub_categoria))}),n.forEach(d=>{var z=E.filter(t=>t.id==d.id_padre_sub_categoria)[0];i.includes(z)||i.push(E.filter(t=>t.id==d.id_padre_sub_categoria)[0]),o.includes(d.id_padre_sub_categoria)||o.push(d.id_padre_sub_categoria)}),K(i),F(n),w(o)}},[le,M]=c.exports.useState(!1),[ue,$]=c.exports.useState(!1),[pe,I]=c.exports.useState(!1),[he,me]=c.exports.useState(!1),[_e,ze]=c.exports.useState(!0),[fe,L]=c.exports.useState(!0),[be,R]=c.exports.useState(!1),[ge,ve]=c.exports.useState(!1);c.exports.useEffect(()=>{I(!1)},[]),c.exports.useEffect(()=>{$(!1)},[]),c.exports.useEffect(()=>{me(!1)},[]),c.exports.useEffect(()=>{L(!0)},[]),c.exports.useEffect(()=>{R(!1)},[]),c.exports.useEffect(()=>{ve(!1)},[]);const Ne=()=>{M(!1),I(!0),$(!0),L(!1),R(!0)},xe=()=>{M(!0),I(!1),$(!1),L(!0),R(!1)},[U,Ce]=c.exports.useState(0),[Se,G]=c.exports.useState(!1),[J,ke]=c.exports.useState(!0),Q=a=>{var i=a.target.value;i=Ee(i),Ce("$ "+new Intl.NumberFormat().format(i))},Ee=a=>(a=a.replace(" ",""),a=a.replace("$",""),a=a.replace(",",""),a=a.replace(".",""),a==""?(a=0,G(!1)):G(!0),parseInt(a));return r(u,{children:[e(Te,{position:"bottom-start",children:e(ye,{onClose:()=>q(!1),show:X,delay:3e3,autohide:!0,children:r("div",{className:`notification-toast ${y=="icon-error"?"error":"success"}`,children:[e("span",{className:`toast-icon ${y=="icon-error"?"toast-danger":"toast-success"}`,children:e("span",{className:y})}),e("p",{className:"title",children:Y}),e("button",{type:"button",className:"icon-close m-auto",onClick:()=>q(!1)})]})})}),e("div",{className:"contenedor-planes",children:r("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[r("h2",{className:"perfiles-titulos crear",children:[e("span",{className:"c-verde",children:"Crea"})," tu primer perfil de negocio"]}),e("div",{className:"container mt-4",children:e("div",{className:"tree_categorias tree_1",children:r("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:[r("div",{className:"perfil-guias__indicador perfil-guias__indicador--activo",children:[e("i",{className:"icon-Paso-1-click",children:" "})," ",e("span",{children:"Actividad económica"}),e("i",{className:"icon-Paso-2-click",id:"pleft2"})," ",e("span",{children:"Tipo de compra"}),e("i",{className:"icon-Paso-3-click",id:"pleft2"})," ",e("span",{children:"Localizaciones"}),e("i",{className:"icon-Paso-4-click",id:"pleft2"})," ",e("span",{children:"Rango de Cuantía"})]}),r("div",{className:"mx-60 mt-30 d-flex",children:[fe&&r(u,{children:[e("button",{button:!0,type:"button",className:"icon-Buscar-click"}),e("input",{type:"text",placeholder:"Busca por actividad económica o UNSPSC",autoComplete:"off",className:"form-control busqueda-input",onKeyDown:ie})]}),be&&e(u,{children:e("input",{type:"text",placeholder:"Buscar tipo de compra",autoComplete:"off",className:"form-control m-auto",onKeyDown:re})}),ge&&e(u,{children:r("p",{children:[" ","poner buscador localizaciones"]})}),r("h2",{className:"perfiles-titulos d-flex",children:[" ","Pais de contratación",e("img",{className:"bandera",src:"/public/images/banderas/listado_nombres/CHL.svg",alt:"Bandera Chile"})]})]}),e("br",{}),e(u,{children:le&&e("ul",{className:"tree-root",children:P.map(a=>e(u,{children:a.id_padre_sub_categoria==null&&r("li",{className:`tree-node has-child draggable ${h.includes(a.id)?"expanded":""}`,id:"sector_"+a.id,children:[r("div",{id:a.id,className:"tree-content mt-3 sector",children:[e("i",{className:`tree-arrow has-child ${a.childs.length>0?"bi bi-chevron-down":""}`}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>b(a),checked:f.includes(a.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>ee(a.id),children:e("span",{className:"tree-division__title my-auto",children:a.nombre})})})]},a.id),h.includes(a.id)&&e("ul",{className:"tree-children new-class",children:S.map((i,n)=>e(u,{children:a.id==i.id_padre_sub_categoria&&r("li",{className:`tree-node has-child draggable segmento ${_.includes(i.id)?"expanded":""}`,id:"segmento_"+i.id,children:[r("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>b(i),checked:f.includes(i.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>ae(i.id),children:e(u,{children:n%2==0?e("span",{className:"tree-division__title my-auto",children:i.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:i.nombre})})})})]}),_.includes(i.id)&&e("ul",{className:"tree-children actividad-economica",children:k.map((o,s)=>e(u,{children:i.id==o.id_padre_sub_categoria&&e("li",{className:"tree-node draggable",children:r("div",{className:"tree-content actividad-economica",onClick:()=>b(o),children:[e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>b(o),checked:f.includes(o.id)?"checked":""}),e("span",{className:"tree-anchor children",children:e("span",{className:"tree-division tree-division1",children:e(u,{children:e("span",{className:"tree-division__title my-auto",children:o.nombre})})})})]})})}))})]})}))})]})}))})}),e(u,{children:pe&&e("ul",{className:"tree-root",children:H.map(a=>e(u,{children:a.id_padre_sub_categoria==null&&r("li",{className:`tree-node has-child draggable ${h.includes(a.id)?"expanded":""}`,id:"sector_"+a.id,children:[r("div",{id:a.id,className:"tree-content mt-3 sector",children:[e("i",{className:`tree-arrow has-child ${a.childs.length>0?"bi bi-chevron-down":""}`}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>b(a),checked:f.includes(a.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>ne(a.id),children:e("span",{className:"tree-division__title my-auto",children:a.nombre})})})]},a.id),v.includes(a.id)&&e("ul",{className:"tree-children new-class",children:T.map((i,n)=>e(u,{children:a.id==i.id_padre_sub_categoria&&e("li",{className:`tree-node has-child draggable segmento ${v.includes(i.id)?"expanded":""}`,id:"segmento_"+i.id,children:r("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("input",{type:"checkbox",name:"tipo_compra",onClick:()=>de(i),checked:i.id==ce.id?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(u,{children:n%2==0?e("span",{className:"tree-division__title my-auto",children:i.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:i.nombre})})})})]})})}))})]})}))})}),e(u,{children:he&&e("ul",{className:"tree-root",children:e("p",{children:"Paso 3"})})}),e(u,{children:_e&&r("div",{className:"perfil-cuantias",children:[r("div",{id:"campos-cuantias",className:"justify-content-center pt-2 pb-5 py-md-5 row",children:[e("div",{className:"col-10 col-sm-8 col-lg-4 col-md-5",children:r("div",{className:"form-group mb-5 mb-md-1 campos-cuantias__form",children:[r("span",{className:"icon-Cuantia campos-cuantias__icon",children:[e("span",{className:"path1"}),e("span",{className:"path2"}),e("span",{className:"path3"}),e("span",{className:"path4"})]}),e("label",{children:"Cuantía desde:"}),e("input",{value:U,onChange:Q,type:"text",id:"cuantia_desde",name:"cuantia_desde",placeholder:"$",className:"form-control inputs_form"})]})}),e("div",{className:"col-10 col-sm-8 col-lg-4 col-md-5",children:r("div",{className:"form-group campos-cuantias__form",children:[r("span",{className:"icon-Cuantia-2 campos-cuantias__icon",children:[e("span",{className:"path1"}),e("span",{className:"path2"}),e("span",{className:"path3"}),e("span",{className:"path4"})]}),e("label",{id:"descripcion",children:"Cuantía hasta:"}),e("input",{value:U,onChange:Q,type:"text",id:"cuantia_hasta",name:"cuantia_hasta",placeholder:"Sin limite superior",className:"form-control inputs_form"})]})})]}),Se&&r("div",{class:"align-items-center col-11 col-lg-8 col-md-9 col-sm-10 justify-content-between campos-cuantias__block row",children:[e("div",{class:"col-8 p-0",children:r("p",{children:["¿Deseas incluir contratos"," ",e("span",{class:"text_color",children:"sin presupuesto asignado"})," ","o con cuantía de"," ",e("span",{class:"text_color",children:"$0"})," ","en este perfil?"]})}),e("div",{class:"col-3 text-center",children:r("label",{class:"switch",children:[e("input",{type:"checkbox",checked:J,onClick:()=>ke(!J)}),e("span",{class:"slider round"})]})})]})]})})]})})}),r("div",{className:"perfil-bottons-footer position-relative text-center mt-4",children:[e("a",{onClick:Ne,className:"btn btnRadius btn-new-blue",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Siguiente"})}),e(u,{children:ue&&e("a",{onClick:xe,className:"btn btnRadius btn-new-blue",children:e("span",{className:"bloque__info-header-cuenta-text--modifier",children:"Volver"})})})]})]})})]})};export{Ge as default};
