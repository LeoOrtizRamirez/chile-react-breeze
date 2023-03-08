import{j as t,a as e,H as J,r as d,F}from"./app-62fe4d7a.js";import{A as ee}from"./AuthenticatedLayout-3fa2e851.js";import{$ as R,P as ae,L as ie}from"./Loader-fd04f55f.js";import{M as P}from"./Modal-93e752b7.js";import{F as k}from"./Form-644d8193.js";/* empty css                      *//* empty css                 *//* empty css              */import"./ApplicationLogo-b44e2d91.js";import"./ApplicationLogoLici-b5a3807c.js";import"./AuthenticatedLayout-5b6b26e3.js";import"./transition-46989420.js";import"./createWithBsPrefix-21080a5c.js";import"./CloseButton-ad2fcd5e.js";import"./hasClass-f610226c.js";import"./ElementChildren-5064687f.js";function te({type:y="submit",className:x="",processing:o,children:E,onClick:m}){return t("button",{style:{backgroundColor:"#57C700"},type:y,onClick:m,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${o&&"opacity-25"} `+x,disabled:o,children:[E,e("i",{className:"bi bi-share text-gray-500 iconos-tamano-margen"})]})}function se({type:y="submit",className:x="",processing:o,children:E,onClick:m}){return t("button",{style:{backgroundColor:"#57C700"},type:y,onClick:m,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${o&&"opacity-25"} `+x,disabled:o,children:[E,e("i",{className:"bi bi-folder-minus text-gray-500 iconos-tamano-margen"})]})}const ne=y=>e("a",{href:y.url,target:"_blank",children:e("button",{style:{backgroundColor:"#57C700"},className:"boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ",children:e("i",{className:"bi bi-upload text-gray-500 iconos-tamano-margen"})})});function ce({type:y="submit",className:x="",processing:o,children:E,onClick:m}){return t("button",{style:{backgroundColor:"#57C700"},type:y,onClick:m,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${o&&"opacity-25"} `+x,disabled:o,children:[E,e("i",{className:"bi bi-star text-gray-500 iconos-tamano-margen"})]})}function de({type:y="submit",className:x="",processing:o,children:E,onClick:m}){return t("button",{style:{backgroundColor:"#57C700"},type:y,onClick:m,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${o&&"opacity-25"} `+x,disabled:o,children:[E,e("i",{className:"bi bi-filetype-pdf text-gray-500 iconos-tamano-margen"})]})}function oe({type:y="submit",className:x="",processing:o,children:E,onClick:m}){return t("button",{style:{backgroundColor:"#57C700"},type:y,onClick:m,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${o&&"opacity-25"} `+x,disabled:o,children:[E,e("i",{className:"bi bi-eye text-gray-500 iconos-tamano-margen"})]})}const re=({showBusquedaEstado:y,handleCloseBusquedaEstado:x})=>t(P,{size:"md",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:y,onHide:x,id:"BusquedaEstado",children:[t(P.Header,{closeButton:!0,children:[e(J,{title:"Busqueda estado"}),e("div",{className:"titulo",children:e("span",{children:"Seleciona el estado"})})]}),e(P.Body,{children:t("div",{className:"busqueda-estado",children:[e("div",{children:e("input",{type:"text",className:"buscador",placeholder:"Buscar estado"})}),e("div",{children:e(k,{children:t("div",{className:"form",children:[t(k.Group,{children:[t(k.Check,{className:"todos",children:[e(k.Check.Label,{children:"Seleciona todos los estados"}),e(k.Check.Input,{"aria-label":"todos"})]}),e("hr",{}),t(k.Check,{children:[e(k.Check.Label,{children:"Convocatoria"}),e(k.Check.Input,{"aria-label":"convocatoria"})]}),e("hr",{}),t(k.Check,{children:[e(k.Check.Label,{children:"En evaluacion"}),e(k.Check.Input,{"aria-label":"evaluacion"})]}),e("hr",{}),t(k.Check,{children:[e(k.Check.Label,{children:"Adjudicado"}),e(k.Check.Input,{"aria-label":"adjudicado"})]}),e("hr",{}),t(k.Check,{children:[e(k.Check.Label,{children:"Liquidado"}),e(k.Check.Input,{"aria-label":"liquidado"})]}),e("hr",{}),t(k.Check,{children:[e(k.Check.Label,{children:"Terminado anormalmente o descartado"}),e(k.Check.Input,{"aria-label":"terminado"})]}),e("hr",{})]}),e("button",{type:"submit",className:"boton",children:"Seleccionar"})]})})})]})})]});const le=({showBusquedaUbicacion:y,handleCloseBusquedaUbicacion:x})=>{d.exports.useEffect(()=>{fetch("/localizacion/json").then(s=>s.json()).then(s=>A(s)).catch(s=>console.log("Solicitud fallida",s))},[]);const[o,E]=d.exports.useState([]),[m,A]=d.exports.useState([]),[z,w]=d.exports.useState([]),[H,j]=d.exports.useState([]),[C,I]=d.exports.useState([]),[S,B]=d.exports.useState([]),[U,L]=d.exports.useState([]),$=s=>{var i=document.getElementById("sector_"+s);i.classList.toggle("expanded"),z.includes(s)?w(z.filter(r=>r!=s)):w([...z,s]);const a=new RegExp(s,"i");m.filter(function(r){if(a.test(r.id_padre_sub_categoria))return r}).forEach(r=>{if(!S.includes(r))S.push(r);else{const c=S.filter(b=>b.id_padre_sub_categoria!=s);B(c)}})},q=(s,i,a=null,p)=>(i.forEach(r=>{switch(p){case"add":s.push(r.id),a=="segmento"&&o.filter(b=>b.id_padre_sub_categoria==r.id).forEach(b=>{s.push(b.id)});break;case"remove":s=h(s,r),a=="segmento"&&o.filter(b=>b.id_padre_sub_categoria==r.id).forEach(b=>{s=h(s,b)});break}}),s),T=s=>{var i=[];C.forEach(r=>{i.push(r)});var a=o.filter(r=>r.id_padre_sub_categoria==s.id&&r.id_abuelo_sub_categoria==null);if(a.length>0)i.includes(s.id)?(i=h(i,s),i=q(i,a,"segmento","remove")):(i.push(s.id),i=q(i,a,"segmento","remove"),i=q(i,a,"segmento","add"));else{var p=o.filter(r=>r.id_padre_sub_categoria==s.id);p.length>0?i.includes(s.id)?(i=h(i,s),i=q(i,p,"actividad_economica","remove")):(i.push(s.id),i=q(i,p,"actividad_economica","add")):i.includes(s.id)?i=h(i,s):i.push(s.id)}I(i)},h=(s,i)=>{const a=s.indexOf(i.id);return a>-1&&s.splice(a,1),s},u=s=>{if(s.target.value==""){A(o),B([]),L([]),w([]),j([]);return}if(s.key==="Enter"){const b=new RegExp(s.target.value,"i"),_=o.filter(function(n){if(b.test(n.nombre)||s.target.value==n.id)return n});var i=[],a=[],p=[],r=[],c=[];_.forEach(n=>{if(n.id_abuelo_sub_categoria!=null&&n.id_padre_sub_categoria!=null){p.push(n);var v=o.filter(f=>f.id==n.id_padre_sub_categoria)[0];a.includes(v)||a.push(v),r.includes(n.id_padre_sub_categoria)||r.push(n.id_padre_sub_categoria);var M=o.filter(f=>f.id==n.id_abuelo_sub_categoria)[0];i.includes(M)||i.push(M),c.includes(n.id_abuelo_sub_categoria)||c.push(n.id_abuelo_sub_categoria)}if(n.id_abuelo_sub_categoria==null&&n.id_padre_sub_categoria!=null){a.includes(n)||a.push(n),r.includes(n.id)||r.push(n.id);var M=o.filter(O=>O.id==n.id_padre_sub_categoria)[0];i.includes(M)||i.push(M),c.includes(n.id_padre_sub_categoria)||c.push(n.id_padre_sub_categoria)}n.id_abuelo_sub_categoria==null&&n.id_padre_sub_categoria==null&&(i.includes(n)||i.push(n),c.includes(n.id)||c.push(n.id))}),A(i),B(a),L(p),w(c),j(r)}};return e(P,{size:"xl",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:y,onHide:x,id:"BusquedaUbicacion",children:t(F,{children:[e(P.Header,{closeButton:!0,className:"header",children:e("h2",{className:"name_section_app",children:"Seleccione la ubicacion"})}),e(P.Body,{className:"contenedor-planes",id:"",children:t("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[e("div",{className:"container mt-4",children:e("div",{className:"tree_categorias tree_1",children:t("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:[e("div",{className:"mx-60 mt-30 d-flex justify-content-center",children:e("input",{type:"text",placeholder:"Buscar por ubicacion",autoComplete:"off",className:"form-control busqueda-input",onKeyDown:u})}),e("br",{}),e("ul",{className:"tree-root",children:m.map(s=>e(F,{children:s.id_padre_sub_categoria==null&&t("li",{className:`tree-node has-child draggable ${z.includes(s.id)?"expanded":""}`,id:"sector_"+s.id,children:[t("div",{id:s.id,className:"tree-content mt-3 sector",children:[e("i",{className:`tree-arrow has-child ${s.childs.length>0?"bi bi-chevron-down":""}`}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>T(s),checked:C.includes(s.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>$(s.id),children:e("span",{className:"tree-division__title my-auto",children:s.nombre})})})]},s.id),z.includes(s.id)&&e("ul",{className:"tree-children new-class",children:S.map((i,a)=>e(F,{children:s.id==i.id_padre_sub_categoria&&e("li",{className:`tree-node has-child draggable segmento ${H.includes(i.id)?"expanded":""}`,id:"segmento_"+i.id,children:t("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow has-child ltr"}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>T(i),checked:C.includes(i.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(F,{children:a%2==0?e("span",{className:"tree-division__title my-auto",children:i.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:i.nombre})})})})]})})}))})]})}))})]})})}),e("div",{className:"perfil-bottons-footer position-relative text-center mt-4",children:e("button",{type:"button",className:"btn btnRadius btn-new-green",children:"Seleccionar"})})]})})]})})};const ue=({showBusquedaActividad:y,handleCloseBusquedaActividad:x})=>{d.exports.useEffect(()=>{fetch("/actividades-economicas/json").then(i=>i.json()).then(i=>A(i)).catch(i=>console.log("Solicitud fallida",i))},[]),d.exports.useState(!1),d.exports.useState(""),d.exports.useState("");const[o,E]=d.exports.useState([]),[m,A]=d.exports.useState([]);d.exports.useState(!1),d.exports.useState(!1),d.exports.useState(0);const[z,w]=d.exports.useState(0),[H,j]=d.exports.useState([]),[C,I]=d.exports.useState([]);d.exports.useState({id:0,nombre:""});const[S,B]=d.exports.useState([]),[U,L]=d.exports.useState([]),[$,q]=d.exports.useState([]),T=i=>{var a=document.getElementById("sector_"+i);a.classList.toggle("expanded"),H.includes(i)?j(H.filter(c=>c!=i)):j([...H,i]);const p=new RegExp(i,"i");m.filter(function(c){if(p.test(c.id_padre_sub_categoria))return c}).forEach(c=>{if(!U.includes(c))U.push(c);else{const b=U.filter(_=>_.id_padre_sub_categoria!=i);L(b)}})},h=i=>{var a=document.getElementById("segmento_"+i);a.classList.toggle("expanded"),C.includes(i)?I(C.filter(c=>c!=i)):I([...C,i]);const p=new RegExp(i,"i");m.filter(function(c){if(p.test(c.id_padre_sub_categoria))return c}).forEach(c=>{if(!$.includes(c))$.push(c);else{const b=$.filter(_=>_.id_padre_sub_categoria!=i);q(b)}}),w(i)},u=i=>{var a=[];S.forEach(c=>{a.push(c)});var p=o.filter(c=>c.id_padre_sub_categoria==i.id&&c.id_abuelo_sub_categoria==null);if(p.length>0){if(!a.includes(i.id))a.push(i.id);else{const c=a.indexOf(i.id);c>-1&&a.splice(c,1)}p.forEach(c=>{const b=o.filter(_=>_.id_padre_sub_categoria==c.id);if(!S.includes(c.id))a.push(c.id),b.forEach(_=>{if(!S.includes(_.id))a.push(_.id);else{const n=a.indexOf(_.id);n>-1&&a.splice(n,1)}});else{const _=a.indexOf(c.id);_>-1&&a.splice(_,1),b.forEach(n=>{const v=a.indexOf(n.id);v>-1&&a.splice(v,1)})}B(a)})}else{var r=o.filter(c=>c.id_padre_sub_categoria==i.id);if(r.length>0){if(!a.includes(i.id))a.push(i.id);else{const c=a.indexOf(i.id);c>-1&&a.splice(c,1)}r.forEach(c=>{if(!S.includes(c.id))a.push(c.id);else{const b=a.indexOf(c.id);b>-1&&a.splice(b,1)}B(a)})}else{if(!a.includes(i.id))a.push(i.id);else{const c=a.indexOf(i.id);c>-1&&a.splice(c,1)}B(a)}}},s=i=>{if(i.target.value==""){A(o),L([]),q([]),j([]),I([]);return}if(i.key==="Enter"){const v=new RegExp(i.target.value,"i"),M=o.filter(function(f){if(v.test(f.nombre))return f});var a=[],p=[],r=[],c=[],b=[];M.forEach(f=>{f.id_abuelo_sub_categoria!=null&&f.id_padre_sub_categoria!=null&&(r.push(f),c.push(f.id_padre_sub_categoria),p.push(o.filter(O=>O.id==f.id_padre_sub_categoria)[0]),b.push(f.id_abuelo_sub_categoria)),f.id_abuelo_sub_categoria==null&&f.id_padre_sub_categoria!=null&&(p.includes(f)||(p.push(f),p.push(f)),b.includes(f.id_padre_sub_categoria)||(b.push(f.id_padre_sub_categoria),p.push(f))),f.id_abuelo_sub_categoria==null&&f.id_padre_sub_categoria==null&&a.push(f)});var _=null,n=null;r.forEach(f=>{_=o.filter(O=>O.id==f.id_abuelo_sub_categoria)[0],n=o.filter(O=>O.id==f.id_padre_sub_categoria)[0],a.includes(_)||a.push(o.filter(O=>O.id==f.id_abuelo_sub_categoria)[0]),p.includes(n)||a.push(o.filter(O=>O.id==f.id_padre_sub_categoria)[0])}),A(a),L(p),q(r),j(b),I(c)}};return d.exports.useEffect(()=>{},[m]),console.log("sectores:",m),t(P,{size:"xl",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:y,onHide:x,id:"BusquedaActividad",children:[e(P.Header,{closeButton:!0,children:e("h2",{className:"name_section_app",children:"Selecciona la(s) actividad(es) economica(s) de tu interes."})}),e(P.Body,{className:"contenedor-planes",children:t("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[e("div",{className:"container mt-4",children:e("div",{className:"tree_categorias tree_1",children:t("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:[e("div",{className:"mx-60 mt-30 d-flex justify-content-center",children:e("input",{type:"text",placeholder:"Busca por actividad económica o UNSPSC",autoComplete:"off",className:"form-control busqueda-input",onKeyDown:s})}),e("br",{}),e("ul",{className:"tree-root",children:m.map(i=>e(F,{children:i.id_padre_sub_categoria==null&&t("li",{className:`tree-node has-child draggable ${H.includes(i.id)?"expanded":""}`,id:"sector_"+i.id,children:[t("div",{id:i.id,className:"tree-content mt-3 sector",children:[e("i",{className:`tree-arrow has-child ${i.childs.length>0?"bi bi-chevron-down":""}`}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>u(i),checked:S.includes(i.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>T(i.id),children:e("span",{className:"tree-division__title my-auto",children:i.nombre})})})]},i.id),H.includes(i.id)&&e("ul",{className:"tree-children new-class",children:U.map((a,p)=>e(F,{children:i.id==a.id_padre_sub_categoria&&t("li",{className:`tree-node has-child draggable segmento ${C.includes(a.id)?"expanded":""}`,id:"segmento_"+a.id,children:[t("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow has-child ltr"}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>u(a),checked:S.includes(a.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>h(a.id),children:e(F,{children:p%2==0?e("span",{className:"tree-division__title my-auto",children:a.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:a.nombre})})})})]}),C.includes(a.id)&&e("ul",{className:"tree-children actividad-economica",children:$.map((r,c)=>e(F,{children:a.id==r.id_padre_sub_categoria&&e("li",{className:"tree-node draggable",children:t("div",{className:"tree-content actividad-economica",onClick:()=>u(r),children:[e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>u(r),checked:S.includes(r.id)?"checked":""}),e("span",{className:"tree-anchor children",children:e("span",{className:"tree-division tree-division1",children:e(F,{children:e("span",{className:"tree-division__title my-auto",children:r.nombre})})})})]})})}))})]})}))})]})}))})]})})}),e("div",{className:"perfil-bottons-footer position-relative text-center mt-4",children:e("button",{type:"button",className:"btn btnRadius btn-new-green",children:"Seleccionar"})})]})})]})};const he=({showBusquedaTiposCompras:y,handleCloseBusquedaTiposCompras:x})=>{d.exports.useEffect(()=>{fetch("/tiposcompras/json").then(h=>h.json()).then(h=>A(h)).catch(h=>console.log("Solicitud fallida",h))},[]),d.exports.useState(!1),d.exports.useState(""),d.exports.useState("");const[o,E]=d.exports.useState([]),[m,A]=d.exports.useState([]);d.exports.useState(!1),d.exports.useState(!1),d.exports.useState(0),d.exports.useState(0);const[z,w]=d.exports.useState([]),[H,j]=d.exports.useState([]);d.exports.useState({id:0,nombre:""});const[C,I]=d.exports.useState([]),[S,B]=d.exports.useState([]),[U,L]=d.exports.useState([]),$=h=>{var u=document.getElementById("sector_"+h);u.classList.toggle("expanded"),z.includes(h)?w(z.filter(a=>a!=h)):w([...z,h]);const s=new RegExp(h,"i");m.filter(function(a){if(s.test(a.id_padre_sub_categoria))return a}).forEach(a=>{if(!S.includes(a))S.push(a);else{const p=S.filter(r=>r.id_padre_sub_categoria!=h);B(p)}})},q=h=>{var u=[];C.forEach(a=>{u.push(a)});var s=o.filter(a=>a.id_padre_sub_categoria==h.id&&a.id_abuelo_sub_categoria==null);if(s.length>0){if(!u.includes(h.id))u.push(h.id);else{const a=u.indexOf(h.id);a>-1&&u.splice(a,1)}s.forEach(a=>{const p=o.filter(r=>r.id_padre_sub_categoria==a.id);if(!C.includes(a.id))u.push(a.id),p.forEach(r=>{if(!C.includes(r.id))u.push(r.id);else{const c=u.indexOf(r.id);c>-1&&u.splice(c,1)}});else{const r=u.indexOf(a.id);r>-1&&u.splice(r,1),p.forEach(c=>{const b=u.indexOf(c.id);b>-1&&u.splice(b,1)})}console.log(a),I(u)})}else{var i=o.filter(a=>a.id_padre_sub_categoria==h.id);if(i.length>0){if(!u.includes(h.id))u.push(h.id);else{const a=u.indexOf(h.id);a>-1&&u.splice(a,1)}i.forEach(a=>{if(!C.includes(a.id))u.push(a.id);else{const p=u.indexOf(a.id);p>-1&&u.splice(p,1)}I(u)})}else{if(!u.includes(h.id))u.push(h.id);else{const a=u.indexOf(h.id);a>-1&&u.splice(a,1)}I(u)}}},T=h=>{if(h.target.value==""){A(o),B([]),L([]),w([]),j([]);return}if(h.key==="Enter"){const b=new RegExp(h.target.value,"i"),_=o.filter(function(n){if(b.test(n.nombre))return n});var u=[],s=[],i=[],a=[],p=[];_.forEach(n=>{n.id_abuelo_sub_categoria!=null&&n.id_padre_sub_categoria!=null&&(i.push(n),a.push(n.id_padre_sub_categoria),s.push(o.filter(v=>v.id==n.id_padre_sub_categoria)[0]),p.push(n.id_abuelo_sub_categoria)),n.id_abuelo_sub_categoria==null&&n.id_padre_sub_categoria!=null&&(s.includes(n)||(s.push(n),s.push(n)),p.includes(n.id_padre_sub_categoria)||(p.push(n.id_padre_sub_categoria),s.push(n))),n.id_abuelo_sub_categoria==null&&n.id_padre_sub_categoria==null&&u.push(n)});var r=null,c=null;i.forEach(n=>{r=o.filter(v=>v.id==n.id_abuelo_sub_categoria)[0],c=o.filter(v=>v.id==n.id_padre_sub_categoria)[0],u.includes(r)||u.push(o.filter(v=>v.id==n.id_abuelo_sub_categoria)[0]),s.includes(c)||u.push(o.filter(v=>v.id==n.id_padre_sub_categoria)[0])}),A(u),B(s),L(i),w(p),j(a),u.forEach(n=>{var v=document.getElementById("sector_"+n.id);v.classList.add("expanded")}),s.forEach(n=>{console.log(n);var v=document.getElementById("segmento_"+n.id);console.log(v),v&&v.classList.add("expanded")})}};return d.exports.useEffect(()=>{},[m]),console.log("sectores:",m),e(P,{size:"xl",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:y,onHide:x,id:"BusquedaTiposCompras",children:t(F,{children:[e(P.Header,{closeButton:!0,className:"header",children:e("h2",{className:"name_section_app",children:"Seleccione la modalidad."})}),e("div",{className:"contenedor-planes",children:t("div",{className:"bg-white overflow-auto w-full text-center margen-superior custom-scroll",children:[e("div",{className:"container mt-4",children:e("div",{className:"tree_categorias tree_1",children:t("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:[e("div",{className:"mx-60 mt-30 d-flex justify-content-center",children:e("input",{type:"text",placeholder:"Buscar por modalidad",autoComplete:"off",className:"form-control busqueda-input",onKeyDown:T})}),e("br",{}),e("ul",{className:"tree-root",children:m.map(h=>e(F,{children:h.id_padre_sub_categoria==null&&t("li",{className:"tree-node has-child draggable",id:"sector_"+h.id,children:[t("div",{id:h.id,className:"tree-content mt-3 sector",children:[e("i",{className:`tree-arrow has-child ${h.childs.length>0?"bi bi-chevron-down":""}`}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>q(h),checked:C.includes(h.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",onClick:()=>$(h.id),children:e("span",{className:"tree-division__title my-auto",children:h.nombre})})})]},h.id),z.includes(h.id)&&e("ul",{className:"tree-children new-class",children:S.map((u,s)=>e(F,{children:h.id==u.id_padre_sub_categoria&&e("li",{className:"tree-node has-child draggable segmento",id:"segmento_"+u.id,children:t("div",{className:"tree-content segmento",children:[e("i",{className:"tree-arrow has-child ltr"}),e("input",{type:"checkbox",name:"actividad_economica",onChange:()=>q(u),checked:C.includes(u.id)?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(F,{children:s%2==0?e("span",{className:"tree-division__title my-auto",children:u.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:u.nombre})})})})]})})}))})]})}))})]})})}),e("div",{className:"perfil-bottons-footer position-relative text-center mt-4",children:e("button",{type:"button",className:"btn btnRadius btn-new-green",children:"Seleccionar"})})]})})]})})};const pe=({showBusquedaAvanzada:y,handleCloseBusquedaAvanzada:x})=>{const[o,E]=d.exports.useState({EntidadContratante:"",objeto:"",numeroContrato:"",modalidad:"",actividadEconomica:"",ubicacion:"",estado:"",portalOrigen:"",cuantiaDesde:"",cuantiaHasta:"",fechaDesde:"",fechaHasta:"",contratista:""}),m=_=>{const{name:n,value:v}=_.target;E({...o,[n]:v})},A=()=>{E({EntidadContratante:"",objeto:"",numeroContrato:"",modalidad:"",actividadEconomica:"",ubicacion:"",estado:"",portalOrigen:"",cuantiaDesde:"",cuantiaHasta:"",fechaDesde:"",fechaHasta:"",contratista:""})},z=_=>{_.preventDefault(),console.log(o)},w=d.exports.useRef(null),[H,j]=d.exports.useState("text"),C=()=>{j("date"),w.current.defaultValue=""},I=()=>{j("text")},[S,B]=d.exports.useState(!1),U=()=>B(!1),L=()=>B(!0),[$,q]=d.exports.useState(!1),T=()=>q(!1),h=()=>q(!0),[u,s]=d.exports.useState(!1),i=()=>s(!1),a=()=>s(!0),[p,r]=d.exports.useState(!1),c=()=>r(!1),b=()=>r(!0);return t(P,{size:"lg",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"content-modal-busqueda-avanzada",centered:!0,show:y,onHide:x,id:"modalBusquedaAvanzada",children:[t(P.Header,{closeButton:!0,id:"header-modal-busqueda-avanzada",children:[e(J,{title:"Busqueda Avanzada"}),e("button",{className:"circulo",onClick:x,children:e("i",{class:"bi bi-arrow-left iconos"})}),e("div",{className:"titulo",children:e("span",{children:"Búsqueda avanzada"})})]}),e(P.Body,{className:"test",children:e("div",{id:"modal-busqueda-avanzada",children:t(k,{onSubmit:z,className:"form-container",children:[t("span",{children:[e("i",{class:"bi bi-bank iconos"}),"Entidad contratante:"]}),e("input",{type:"text",name:"EntidadContratante",value:o.EntidadContratante,onChange:m,placeholder:"Ingresa la entidad contratante"}),t("span",{children:[e("i",{class:"bi bi-list-nested iconos"}),"Objeto:"]}),e("input",{type:"text",name:"objeto",value:o.objeto,onChange:m,placeholder:"Ingresa palabras claves del objeto del proceso"}),t("div",{className:"pareja",children:[t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-asterisk iconos"}),"Numero de contrato:"]}),e("input",{type:"text",name:"numeroContrato",value:o.numeroContrato,onChange:m,placeholder:"Ingresa el número del proceso"})]}),t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-tag iconos"}),"Modalidad:"]}),e("input",{type:"text",name:"modalidad",value:o.modalidad,onChange:m,onClick:b,placeholder:"Ingresa la modalidad de contrato"}),e(he,{showBusquedaTiposCompras:p,handleCloseBusquedaTiposCompras:c})]})]}),t("span",{children:[e("i",{class:"bi bi-lightning-fill iconos"}),"Actividad económica:"]}),e("input",{type:"text",name:"actividadEconomica",value:o.actividadEconomica,onChange:m,onClick:a,placeholder:"Ingresa la(s) actividade(s) económica(s)"}),e(ue,{showBusquedaActividad:u,handleCloseBusquedaActividad:i}),t("span",{children:[e("i",{class:"bi bi-geo-alt-fill iconos"}),"Ubicación:"]}),e("input",{type:"text",name:"ubicacion",value:o.ubicacion,onChange:m,onClick:h,placeholder:"Ingresa la(s) ubicacióne(s)"}),e(le,{showBusquedaUbicacion:$,handleCloseBusquedaUbicacion:T}),t("div",{className:"pareja",children:[t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-clipboard2-fill iconos"}),"Estados:"]}),e("input",{type:"text",onClick:L,placeholder:"Selecione los estados de proceso"}),e(re,{showBusquedaEstado:S,handleCloseBusquedaEstado:U})]}),t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-globe iconos"}),"Portal de origen:"]}),e("input",{type:"text",name:"portalOrigen",value:o.portalOrigen,onChange:m,placeholder:"Ingresa el portal de origen"})]})]}),t("div",{className:"pareja",children:[t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-cash-coin iconos"}),"Cuantía:"]}),e("input",{type:"text",name:"cuantiaDesde",value:o.cuantiaDesde,onChange:m,placeholder:"Desde"})]}),t("div",{className:"size",children:[e("span",{children:" "}),e("input",{type:"text",name:"cuantiaHasta",value:o.cuantiaHasta,onChange:m,placeholder:"Hasta"})]})]}),t("div",{className:"pareja",children:[t("div",{className:"size",children:[t("span",{children:[e("i",{class:"bi bi-calendar-date-fill iconos"}),"Fecha de publicación:"]}),e("input",{type:H,name:"fechaDesde",value:o.fechaDesde,onChange:m,placeholder:"Inicio",ref:w,onFocus:C,onBlur:I})]}),t("div",{className:"size",children:[e("span",{children:" "}),e("input",{type:H,name:"fechaHasta",value:o.fechaHasta,onChange:m,placeholder:"Fin",ref:w,onFocus:C,onBlur:I})]})]}),t("span",{children:[e("i",{class:"bi bi-person-fill iconos"}),"Contratista(s):"]}),e("input",{type:"text",name:"contratista",value:o.contratista,onChange:m,placeholder:"Ingresa el contratista"}),t("div",{className:"botones",children:[e("button",{className:"limpiar",type:"button",onClick:A,children:"Limpiar"}),e("button",{className:"buscar",type:"submit",children:"Buscar"})]})]})})})]})};const ze=({auth:y,contratos:x})=>{const[o,E]=d.exports.useState(x.data);R("th").click(function(){var l=R(this).parents("table").eq(0),N=l.find("tr:gt(0)").toArray().sort(m(R(this).index()));this.asc=!this.asc,this.asc||(N=N.reverse());for(var g=0;g<N.length;g++)l.append(N[g]);z(R(this),this.asc)});function m(l){return function(N,g){var D=A(N,l),V=A(g,l);return R.isNumeric(D)&&R.isNumeric(V)?D-V:D.localeCompare(V)}}function A(l,N){return R(l).children("td").eq(N).html()}function z(l,N){R("th").each(function(g){R(this).removeClass("sorting"),R(this).removeClass("asc"),R(this).removeClass("desc")}),l.addClass("sorting"),N?l.addClass("asc"):l.addClass("desc")}const[w,H]=d.exports.useState(!0),[j,C]=d.exports.useState(0),I=l=>{C(l.id)},S=()=>{C(0)},[B,U]=d.exports.useState(0),[L,$]=d.exports.useState(0);d.exports.useEffect(()=>{document.getElementById("div1");var l=document.getElementById("tabla");document.getElementById("wrapper1");var N=document.getElementById("scroll-table");l&&U(l.offsetWidth),N&&$(N.offsetWidth);var g=document.getElementById("wrapper1"),D=document.querySelector("#scroll-table");g&&(g.onscroll=function(){D.scrollLeft=g.scrollLeft}),D&&(D.onscroll=function(){g.scrollLeft=D.scrollLeft})});const[q,T]=d.exports.useState(x.to),[h,u]=d.exports.useState(x.from),[s,i]=d.exports.useState(x.total),[a,p]=d.exports.useState(x.next_page_url),[r,c]=d.exports.useState(x.prev_page_url),[b,_]=d.exports.useState(""),[n,v]=d.exports.useState(""),M=()=>{var l=document.getElementById("form_busqueda_rapida");let N=new FormData(l),g={};return N.forEach(function(V,Z){g[Z]=V}),f(g)},f=l=>{const N=[];for(let g in l)N.push(encodeURIComponent(g)+"="+encodeURIComponent(l[g]));return N.join("&")},O=l=>{if(l==null)return;const N=M();W(!0),fetch(l+"&"+N).then(g=>g.json()).then(g=>{G(g),W(!1)})},K=d.exports.useRef(0);d.exports.useEffect(()=>{K.current!=0&&K.current.addEventListener("keypress",function(l){if(l.key==="Enter"){l.preventDefault();const N=M();console.log(N),W(!0),fetch("/contratos/?"+N).then(g=>g.json()).then(g=>{G(g),W(!1)})}})},[]);const G=l=>{E(l.data),T(l.to),u(l.from),i(l.total),p(l.next_page_url),c(l.prev_page_url)};d.exports.useEffect(()=>{const l=window.location.search,N=new URLSearchParams(l),g=N.get("fecha_publicacion");g!=null&&v(g);const D=N.get("buscador_rapido");D!=null&&_(D)},[]);const[X,W]=d.exports.useState(!1),[Y,Q]=d.exports.useState(!1);return t(ee,{auth:y,children:[e("link",{rel:"shortcut icon",href:"#"}),t("div",{children:[t("div",{className:"contenedor-filtros",children:[t("div",{className:"",children:[t("form",{method:"get",name:"form_busqueda_rapida",id:"form_busqueda_rapida",children:[e("input",{ref:K,id:"buscador_rapido",className:"buscador_rapido",name:"buscador_rapido",type:"text",value:b,placeholder:"Búsqueda rápida",onChange:l=>_(l.target.value)}),e("input",{name:"fecha_publicacion",type:"hidden",value:n}),e("input",{name:"type",type:"hidden",value:"fetch"})]}),e("span",{className:"material-symbols-outlined posicion-lupa-contratos",children:"search"})]}),e("div",{className:"",children:t("span",{children:[t("button",{onClick:()=>Q(!0),className:"mb-2",children:[e("span",{className:"material-symbols-outlined text-btn-avanzado",children:"list"}),e("span",{className:"text-btn-avanzado",children:"Búsqueda avanzada"})]}),e(pe,{showBusquedaAvanzada:Y,handleCloseBusquedaAvanzada:()=>Q(!1)})]})}),t("div",{className:"input-filtro-estado",children:[e("span",{className:"input-filtro-estado-span",children:"Visualizar:"}),t("select",{className:"input-visualizar",children:[e("option",{value:"",children:"todos"}),e("option",{value:"",children:"Vistos recientemente"}),e("option",{value:"",children:"No Leidos"})]})]}),e("div",{children:e(ae,{nextHandler:()=>O(a),prevHandler:()=>O(r),currentPage:h,totalPaginas:q,totalElementos:s})})]}),e("div",{className:"contenedor-contratos",children:e("div",{className:"alto-tabla bg-white overflow-auto",id:"scroll-table",children:X?e(ie,{}):t(F,{children:[e("div",{id:"wrapper1",style:{width:L>0?L:0+"px"},children:e("div",{id:"div1",style:{width:B>0?B:0+"px"}})}),t("table",{id:"tabla",className:"w-full bg-white border tabla table-hover",children:[e("thead",{className:"cabecera-tabla",style:{backgroundColor:"#00a1c9"},children:t("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{style:{padding:"0px 0px"},children:"Acciones"}),e("th",{style:{padding:"0px 5px"},children:"Portal"}),e("th",{style:{padding:"0px 80px"},children:"Entidad"}),e("th",{style:{padding:"0px 80px"},children:"Objeto"}),e("th",{style:{padding:"0px 35px"},children:"Cuantía"}),e("th",{style:{padding:"0px 80px"},children:"Modalidad"}),e("th",{style:{padding:"0px 30px"},children:"Número"}),e("th",{style:{padding:"0px 0px"},children:"Estado"}),e("th",{style:{padding:"0px 35px"},children:"Publicada"}),e("th",{style:{padding:"0px 35px"},children:"Ubicación"}),e("th",{style:{padding:"0px 80px"},children:"Actividad económica"})]})}),e("tbody",{children:o.map(l=>t("tr",{className:"tr-users",children:[e("td",{className:"border border-gray-200 text-left mw-90",children:t("div",{className:"iconos-horizontal width-columna-acciones",children:[t("div",{children:[e(de,{}),e(ne,{url:l.link}),e(ce,{})]}),t("div",{className:"",children:[e(te,{}),e(se,{}),e(oe,{})]})]})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"circulo",children:l.fuente.alias_portal})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:l.entidad_contratante})}),t("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:[w&&e(F,{children:j!=l.id&&t("span",{className:"data-text",children:[l.objeto.substr(0,40),"..."," ",e("a",{className:"text-primary",onClick:()=>I(l),children:"Ver más"})]})}),j==l.id&&e("div",{className:"showmore",children:t("span",{className:"data-text",children:[l.objeto,e("a",{className:"text-primary",onClick:()=>S(),children:"Ver menos"})]})})]}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:l.valor>0?"$"+l.valor.toLocaleString("ch-CH"):l.valor_texto}),e("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:e("span",{className:"data-text ",children:l.modalidad})}),e("td",{className:"border border-gray-200 text-left margen-textos ",children:e("span",{className:"data-text ",children:l.codigo_proceso})}),e("td",{className:"border border-gray-200 text-left color-estado margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:l.estado_proceso})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:l.fecha_publicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:l.ubicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:l.actividad_economica})})]},l.id))})]}),o.length<=0&&e("div",{id:"mensajes-personalizado-busqueda",className:"container-fluid content_blank_interno",children:t("div",{className:"row justify-content-center align-items-center",children:[e("div",{className:"col-md-4 col-sm-4 offset-md-1 offset-sm-1",children:e("img",{src:"https://col.licitaciones.info/img/mensajes-personalisados/sin-resultados-busqueda.png",alt:"",className:"img-fluid mensaje-imagen"})}),e("div",{className:"col-md-5 col-sm-5 offset-sm-1 offset-md-1",children:t("div",{className:"estructura-mensaje-personalizado",children:[t("h4",{className:"text-center titulo-personalizado",children:[e("b",{className:"text-rojo",children:"No se encontró"})," ","el resultado."]}),t("div",{className:"position-relative",children:[e("span",{className:"icon-Bombillo mensaje-icono"}),e("p",{className:"mensaje-personalizado d-block text-left",children:"Prueba cambiando tus opciones de búsqueda e intentalo nuevamente."})]})]})})]})})]})})})]})]})};export{ze as default};