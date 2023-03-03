import{j as a,a as e,H as T,r as n,F}from"./app-bf42f639.js";import{A as ee}from"./AuthenticatedLayout-a3bdcafd.js";import{$ as x,P as ae,L as te}from"./Loader-7332fbbd.js";import{M as I}from"./Modal-00d054b3.js";import{F as m}from"./Form-14fc769e.js";/* empty css                      *//* empty css                 *//* empty css              */import"./ApplicationLogo-70c047b0.js";import"./ApplicationLogoLici-15acec29.js";import"./AuthenticatedLayout-138837dc.js";import"./transition-6dcbd6d1.js";import"./createWithBsPrefix-c71f1460.js";import"./CloseButton-286585cd.js";import"./hasClass-4d8ce9ca.js";import"./ElementChildren-98185f77.js";function se({type:p="submit",className:d="",processing:s,children:b,onClick:o}){return a("button",{style:{backgroundColor:"#57C700"},type:p,onClick:o,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+d,disabled:s,children:[b,e("i",{className:"bi bi-share text-gray-500 iconos-tamano-margen"})]})}function ie({type:p="submit",className:d="",processing:s,children:b,onClick:o}){return a("button",{style:{backgroundColor:"#57C700"},type:p,onClick:o,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+d,disabled:s,children:[b,e("i",{className:"bi bi-folder-minus text-gray-500 iconos-tamano-margen"})]})}const ne=p=>e("a",{href:p.url,target:"_blank",children:e("button",{style:{backgroundColor:"#57C700"},className:"boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ",children:e("i",{className:"bi bi-upload text-gray-500 iconos-tamano-margen"})})});function oe({type:p="submit",className:d="",processing:s,children:b,onClick:o}){return a("button",{style:{backgroundColor:"#57C700"},type:p,onClick:o,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+d,disabled:s,children:[b,e("i",{className:"bi bi-star text-gray-500 iconos-tamano-margen"})]})}function ce({type:p="submit",className:d="",processing:s,children:b,onClick:o}){return a("button",{style:{backgroundColor:"#57C700"},type:p,onClick:o,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+d,disabled:s,children:[b,e("i",{className:"bi bi-filetype-pdf text-gray-500 iconos-tamano-margen"})]})}function re({type:p="submit",className:d="",processing:s,children:b,onClick:o}){return a("button",{style:{backgroundColor:"#57C700"},type:p,onClick:o,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+d,disabled:s,children:[b,e("i",{className:"bi bi-eye text-gray-500 iconos-tamano-margen"})]})}const de=({showBusquedaEstado:p,handleCloseBusquedaEstado:d})=>a(I,{size:"md",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:p,onHide:d,id:"BusquedaEstado",children:[a(I.Header,{closeButton:!0,children:[e(T,{title:"Busqueda estado"}),e("div",{className:"titulo",children:e("span",{children:"Seleciona el estado"})})]}),e(I.Body,{children:a("div",{className:"busqueda-estado",children:[e("div",{children:e("input",{type:"text",className:"buscador",placeholder:"Buscar estado"})}),e("div",{children:e(m,{children:a("div",{className:"form",children:[a(m.Group,{children:[a(m.Check,{className:"todos",children:[e(m.Check.Label,{children:"Seleciona todos los estados"}),e(m.Check.Input,{"aria-label":"todos"})]}),e("hr",{}),a(m.Check,{children:[e(m.Check.Label,{children:"Convocatoria"}),e(m.Check.Input,{"aria-label":"convocatoria"})]}),e("hr",{}),a(m.Check,{children:[e(m.Check.Label,{children:"En evaluacion"}),e(m.Check.Input,{"aria-label":"evaluacion"})]}),e("hr",{}),a(m.Check,{children:[e(m.Check.Label,{children:"Adjudicado"}),e(m.Check.Input,{"aria-label":"adjudicado"})]}),e("hr",{}),a(m.Check,{children:[e(m.Check.Label,{children:"Liquidado"}),e(m.Check.Input,{"aria-label":"liquidado"})]}),e("hr",{}),a(m.Check,{children:[e(m.Check.Label,{children:"Terminado anormalmente o descartado"}),e(m.Check.Input,{"aria-label":"terminado"})]}),e("hr",{})]}),e("button",{type:"submit",className:"boton",children:"Seleccionar"})]})})})]})})]});const le=({showBusquedaUbicacion:p,handleCloseBusquedaUbicacion:d})=>{n.exports.useEffect(()=>{fetch("/localizacion/json").then(i=>i.json()).then(i=>w(i)).catch(i=>console.log("Solicitud fallida",i))},[]);const[s,b]=n.exports.useState([]),[o,w]=n.exports.useState([]),[k,N]=n.exports.useState([]),[B,y]=n.exports.useState([]),[z,A]=n.exports.useState({id:0,nombre:""}),[S,_]=n.exports.useState([]),[j,E]=n.exports.useState([]),H=i=>{k.includes(i)?N(k.filter(h=>h!=i)):N([...k,i]);const u=new RegExp(i,"i");o.filter(function(h){if(u.test(h.id_padre_sub_categoria))return h}).forEach(h=>{if(!S.includes(h))S.push(h);else{const q=S.filter(C=>C.id_padre_sub_categoria!=i);_(q)}})},L=i=>{B.includes(i)?y(B.filter(h=>h!=i)):y([...B,i]);const u=new RegExp(i,"i");o.filter(function(h){if(u.test(h.id_padre_sub_categoria))return h}).forEach(h=>{if(!j.includes(h))j.push(h);else{const q=j.filter(C=>C.id_padre_sub_categoria!=i);E(q)}}),setSelectedActividadEconomica(i)},P=i=>{A(i)},D=i=>{if(i.target.value==""){w(s),_([]),E([]),N([]),y([]);return}if(i.key==="Enter"){const M=new RegExp(i.target.value,"i"),V=s.filter(function(l){if(M.test(l.nombre))return l});var u=[],f=[],h=[],q=[],C=[];V.forEach(l=>{l.id_padre_sub_categoria!=null&&(h.push(l),q.push(l.id_padre_sub_categoria),f.push(s.filter(g=>g.id==l.id_padre_sub_categoria)[0]),C.push(l.id_abuelo_sub_categoria)),l.id_padre_sub_categoria!=null&&(f.includes(l)||f.push(l),C.includes(l.id_padre_sub_categoria)||C.push(l.id_padre_sub_categoria)),l.id_padre_sub_categoria==null&&u.push(l)});var U=null,R=null;h.forEach(l=>{U=s.filter(g=>g.id==l.id)[0],R=s.filter(g=>g.id==l.id_padre_sub_categoria)[0],u.includes(U)||u.push(s.filter(g=>g.id==l.id_padre_sub_categoria)[0]),f.includes(R)||u.push(s.filter(g=>g.id==l.id_padre_sub_categoria)[0])}),w(u),_(f),E(h),N(C),y(q)}};return console.log("sectores:",o),a(I,{size:"md",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:p,onHide:d,id:"BusquedaUbicacion",children:[e(T,{title:"Localización"}),e("div",{className:"contenedor-planes",children:a("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Ubicaciones"}),e("div",{className:"container mt-4",children:e("div",{className:"tree_categorias tree_1",children:e("div",{className:"tree_categorias__busqueda mb-3 mb-md-4",children:a("div",{className:"mx-auto",children:[e("input",{type:"text",placeholder:"Busca por actividad económica",autoComplete:"off",className:"form-control m-auto",onKeyDown:D}),e("i",{className:"icon-Cancelar"}),e("button",{type:"button",className:"icon-Buscar-click",children:e("i",{className:"bi bi-search"})}),o.map(i=>e(F,{children:i.id_padre_sub_categoria==null&&a(F,{children:[a("div",{id:i.id,className:"tree-content mt-3 sector",onClick:()=>H(i.id),children:[e("i",{className:`tree-arrow has-child ${i.childs.length>0?"bi bi-chevron-down":""}`}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e("span",{className:"tree-division__title my-auto",children:i.nombre})})})]},i.id),k.includes(i.id)&&e("ul",{className:"tree-children",children:S.map((u,f)=>e(F,{children:i.id==u.id_padre_sub_categoria&&e("li",{"data-id":"20504",className:"tree-node has-child expanded draggable",onClick:()=>P(u),children:a("div",{className:"tree-content segmento",onClick:()=>L(u.id),children:[e("i",{className:"tree-arrow expanded has-child ltr"}),e("input",{type:"radio",name:"actividad_economica",onClick:()=>P(u),checked:u.id==z.id?"checked":""}),e("span",{className:"tree-anchor",children:e("span",{className:"tree-division tree-division1",children:e(F,{children:f%2==0?e("span",{className:"tree-division__title my-auto",children:u.nombre}):e("span",{className:"tree-division__title-gray my-auto",children:u.nombre})})})})]})})}))})]})}))]})})})})]})})]})};const ue=({showBusquedaAvanzada:p,handleCloseBusquedaAvanzada:d})=>{const[s,b]=n.exports.useState({EntidadContratante:"",objeto:"",numeroContrato:"",modalidad:"",actividadEconomica:"",ubicacion:"",estado:"",portalOrigen:"",cuantiaDesde:"",cuantiaHasta:"",fechaDesde:"",fechaHasta:"",contratista:""}),o=i=>{const{name:u,value:f}=i.target;b({...s,[u]:f})},w=()=>{b({EntidadContratante:"",objeto:"",numeroContrato:"",modalidad:"",actividadEconomica:"",ubicacion:"",estado:"",portalOrigen:"",cuantiaDesde:"",cuantiaHasta:"",fechaDesde:"",fechaHasta:"",contratista:""})},k=i=>{i.preventDefault(),console.log(s)},N=n.exports.useRef(null),[B,y]=n.exports.useState("text"),z=()=>{y("date"),N.current.defaultValue=""},A=()=>{y("text")},[S,_]=n.exports.useState(!1),j=()=>_(!1),E=()=>_(!0),[H,L]=n.exports.useState(!1),P=()=>L(!1),D=()=>L(!0);return a(I,{size:"lg",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"content-modal-busqueda-avanzada",centered:!0,show:p,onHide:d,id:"modalBusquedaAvanzada",children:[a(I.Header,{closeButton:!0,id:"header-modal-busqueda-avanzada",children:[e(T,{title:"Busqueda Avanzada"}),e("button",{className:"circulo",onClick:d,children:e("i",{class:"bi bi-arrow-left iconos"})}),e("div",{className:"titulo",children:e("span",{children:"Búsqueda avanzada"})})]}),e(I.Body,{className:"test",children:e("div",{id:"modal-busqueda-avanzada",children:a(m,{onSubmit:k,className:"form-container",children:[a("span",{children:[e("i",{class:"bi bi-bank iconos"}),"Entidad contratante:"]}),e("input",{type:"text",name:"EntidadContratante",value:s.EntidadContratante,onChange:o,placeholder:"Ingresa la entidad contratante"}),a("span",{children:[e("i",{class:"bi bi-list-nested iconos"}),"Objeto:"]}),e("input",{type:"text",name:"objeto",value:s.objeto,onChange:o,placeholder:"Ingresa palabras claves del objeto del proceso"}),a("div",{className:"pareja",children:[a("div",{className:"size",children:[a("span",{children:[e("i",{class:"bi bi-asterisk iconos"}),"Numero de contrato:"]}),e("input",{type:"text",name:"numeroContrato",value:s.numeroContrato,onChange:o,placeholder:"Ingresa el número del proceso"})]}),a("div",{className:"size",children:[a("span",{children:[e("i",{class:"bi bi-tag iconos"}),"Modalidad:"]}),e("input",{type:"text",name:"modalidad",value:s.modalidad,onChange:o,placeholder:"Ingresa la modalidad"})]})]}),a("span",{children:[e("i",{class:"bi bi-lightning-fill iconos"}),"Actividad económica:"]}),e("input",{type:"text",name:"actividadEconomica",value:s.actividadEconomica,onChange:o,placeholder:"Ingresa la(s) actividade(s) económica(s)"}),a("span",{children:[e("i",{class:"bi bi-geo-alt-fill iconos"}),"Ubicación:"]}),e("input",{type:"text",name:"ubicacion",value:s.ubicacion,onChange:o,onClick:D,placeholder:"Ingresa la(s) ubicacióne(s)"}),e(le,{showBusquedaUbicacion:H,handleCloseBusquedaUbicacion:P}),a("div",{className:"pareja",children:[a("div",{className:"size",children:[a("span",{children:[e("i",{class:"bi bi-clipboard2-fill iconos"}),"Estados:"]}),e("input",{type:"text",onClick:E,placeholder:"Selecione los estados de proceso"}),e(de,{showBusquedaEstado:S,handleCloseBusquedaEstado:j})]}),a("div",{className:"size",children:[a("span",{children:[e("i",{class:"bi bi-globe iconos"}),"Portal de origen:"]}),e("input",{type:"text",name:"portalOrigen",value:s.portalOrigen,onChange:o,placeholder:"Ingresa el portal de origen"})]})]}),a("div",{className:"pareja",children:[a("div",{className:"size",children:[a("span",{children:[e("i",{class:"bi bi-cash-coin iconos"}),"Cuantía:"]}),e("input",{type:"text",name:"cuantiaDesde",value:s.cuantiaDesde,onChange:o,placeholder:"Desde"})]}),a("div",{className:"size",children:[e("span",{children:" "}),e("input",{type:"text",name:"cuantiaHasta",value:s.cuantiaHasta,onChange:o,placeholder:"Hasta"})]})]}),a("div",{className:"pareja",children:[a("div",{className:"size",children:[a("span",{children:[e("i",{class:"bi bi-calendar-date-fill iconos"}),"Fecha de publicación:"]}),e("input",{type:B,name:"fechaDesde",value:s.fechaDesde,onChange:o,placeholder:"Inicio",ref:N,onFocus:z,onBlur:A})]}),a("div",{className:"size",children:[e("span",{children:" "}),e("input",{type:B,name:"fechaHasta",value:s.fechaHasta,onChange:o,placeholder:"Fin",ref:N,onFocus:z,onBlur:A})]})]}),a("span",{children:[e("i",{class:"bi bi-person-fill iconos"}),"Contratista(s):"]}),e("input",{type:"text",name:"contratista",value:s.contratista,onChange:o,placeholder:"Ingresa el contratista"}),a("div",{className:"botones",children:[e("button",{className:"limpiar",type:"button",onClick:w,children:"Limpiar"}),e("button",{className:"buscar",type:"submit",children:"Buscar"})]})]})})})]})};const ze=({auth:p,contratos:d})=>{const[s,b]=n.exports.useState(d.data);x("th").click(function(){var t=x(this).parents("table").eq(0),r=t.find("tr:gt(0)").toArray().sort(o(x(this).index()));this.asc=!this.asc,this.asc||(r=r.reverse());for(var c=0;c<r.length;c++)t.append(r[c]);k(x(this),this.asc)});function o(t){return function(r,c){var v=w(r,t),$=w(c,t);return x.isNumeric(v)&&x.isNumeric($)?v-$:v.localeCompare($)}}function w(t,r){return x(t).children("td").eq(r).html()}function k(t,r){x("th").each(function(c){x(this).removeClass("sorting"),x(this).removeClass("asc"),x(this).removeClass("desc")}),t.addClass("sorting"),r?t.addClass("asc"):t.addClass("desc")}const[N,B]=n.exports.useState(!0),[y,z]=n.exports.useState(0),A=t=>{z(t.id)},S=()=>{z(0)},[_,j]=n.exports.useState(0),[E,H]=n.exports.useState(0);n.exports.useEffect(()=>{document.getElementById("div1");var t=document.getElementById("tabla");document.getElementById("wrapper1");var r=document.getElementById("scroll-table");t&&j(t.offsetWidth),r&&H(r.offsetWidth);var c=document.getElementById("wrapper1"),v=document.querySelector("#scroll-table");c&&(c.onscroll=function(){v.scrollLeft=c.scrollLeft}),v&&(v.onscroll=function(){c.scrollLeft=v.scrollLeft})});const[L,P]=n.exports.useState(d.to),[D,i]=n.exports.useState(d.from),[u,f]=n.exports.useState(d.total),[h,q]=n.exports.useState(d.next_page_url),[C,U]=n.exports.useState(d.prev_page_url),[R,M]=n.exports.useState(""),[V,l]=n.exports.useState(""),g=()=>{var t=document.getElementById("form_busqueda_rapida");let r=new FormData(t),c={};return r.forEach(function($,Z){c[Z]=$}),J(c)},J=t=>{const r=[];for(let c in t)r.push(encodeURIComponent(c)+"="+encodeURIComponent(t[c]));return r.join("&")},G=t=>{if(t==null)return;const r=g();O(!0),fetch(t+"&"+r).then(c=>c.json()).then(c=>{K(c),O(!1)})},W=n.exports.useRef(0);n.exports.useEffect(()=>{W.current!=0&&W.current.addEventListener("keypress",function(t){if(t.key==="Enter"){t.preventDefault();const r=g();console.log(r),O(!0),fetch("/contratos/?"+r).then(c=>c.json()).then(c=>{K(c),O(!1)})}})},[]);const K=t=>{b(t.data),P(t.to),i(t.from),f(t.total),q(t.next_page_url),U(t.prev_page_url)};n.exports.useEffect(()=>{const t=window.location.search,r=new URLSearchParams(t),c=r.get("fecha_publicacion");c!=null&&l(c);const v=r.get("buscador_rapido");v!=null&&M(v)},[]);const[X,O]=n.exports.useState(!1),[Y,Q]=n.exports.useState(!1);return a(ee,{auth:p,children:[e("link",{rel:"shortcut icon",href:"#"}),a("div",{children:[a("div",{className:"contenedor-filtros",children:[a("div",{className:"",children:[a("form",{method:"get",name:"form_busqueda_rapida",id:"form_busqueda_rapida",children:[e("input",{ref:W,id:"buscador_rapido",className:"buscador_rapido",name:"buscador_rapido",type:"text",value:R,placeholder:"Búsqueda rápida",onChange:t=>M(t.target.value)}),e("input",{name:"fecha_publicacion",type:"hidden",value:V}),e("input",{name:"type",type:"hidden",value:"fetch"})]}),e("span",{className:"material-symbols-outlined posicion-lupa-contratos",children:"search"})]}),e("div",{className:"",children:a("span",{children:[a("button",{onClick:()=>Q(!0),className:"mb-2",children:[e("span",{className:"material-symbols-outlined text-btn-avanzado",children:"list"}),e("span",{className:"text-btn-avanzado",children:"Búsqueda avanzada"})]}),e(ue,{showBusquedaAvanzada:Y,handleCloseBusquedaAvanzada:()=>Q(!1)})]})}),a("div",{className:"input-filtro-estado",children:[e("span",{className:"input-filtro-estado-span",children:"Visualizar:"}),a("select",{className:"input-visualizar",children:[e("option",{value:"",children:"todos"}),e("option",{value:"",children:"Vistos recientemente"}),e("option",{value:"",children:"No Leidos"})]})]}),e("div",{children:e(ae,{nextHandler:()=>G(h),prevHandler:()=>G(C),currentPage:D,totalPaginas:L,totalElementos:u})})]}),e("div",{className:"contenedor-contratos",children:e("div",{className:"alto-tabla bg-white overflow-auto",id:"scroll-table",children:X?e(te,{}):a(F,{children:[e("div",{id:"wrapper1",style:{width:E>0?E:0+"px"},children:e("div",{id:"div1",style:{width:_>0?_:0+"px"}})}),a("table",{id:"tabla",className:"w-full bg-white border tabla table-hover",children:[e("thead",{className:"cabecera-tabla",style:{backgroundColor:"#00a1c9"},children:a("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{style:{padding:"0px 0px"},children:"Acciones"}),e("th",{style:{padding:"0px 5px"},children:"Portal"}),e("th",{style:{padding:"0px 80px"},children:"Entidad"}),e("th",{style:{padding:"0px 80px"},children:"Objeto"}),e("th",{style:{padding:"0px 35px"},children:"Cuantía"}),e("th",{style:{padding:"0px 80px"},children:"Modalidad"}),e("th",{style:{padding:"0px 30px"},children:"Número"}),e("th",{style:{padding:"0px 0px"},children:"Estado"}),e("th",{style:{padding:"0px 35px"},children:"Publicada"}),e("th",{style:{padding:"0px 35px"},children:"Ubicación"}),e("th",{style:{padding:"0px 80px"},children:"Actividad económica"})]})}),e("tbody",{children:s.map(t=>a("tr",{className:"tr-users",children:[e("td",{className:"border border-gray-200 text-left mw-90",children:a("div",{className:"iconos-horizontal width-columna-acciones",children:[a("div",{children:[e(ce,{}),e(ne,{url:t.link}),e(oe,{})]}),a("div",{className:"",children:[e(se,{}),e(ie,{}),e(re,{})]})]})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"circulo",children:t.fuente.alias_portal})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:t.entidad_contratante})}),a("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:[N&&e(F,{children:y!=t.id&&a("span",{className:"data-text",children:[t.objeto.substr(0,40),"..."," ",e("a",{className:"text-primary",onClick:()=>A(t),children:"Ver más"})]})}),y==t.id&&e("div",{className:"showmore",children:a("span",{className:"data-text",children:[t.objeto,e("a",{className:"text-primary",onClick:()=>S(),children:"Ver menos"})]})})]}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:t.valor>0?"$"+t.valor.toLocaleString("ch-CH"):t.valor_texto}),e("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:e("span",{className:"data-text ",children:t.modalidad})}),e("td",{className:"border border-gray-200 text-left margen-textos ",children:e("span",{className:"data-text ",children:t.codigo_proceso})}),e("td",{className:"border border-gray-200 text-left color-estado margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:t.estado_proceso})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:t.fecha_publicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:t.ubicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:t.actividad_economica})})]},t.id))})]}),s.length<=0&&e("div",{id:"mensajes-personalizado-busqueda",className:"container-fluid content_blank_interno",children:a("div",{className:"row justify-content-center align-items-center",children:[e("div",{className:"col-md-4 col-sm-4 offset-md-1 offset-sm-1",children:e("img",{src:"https://col.licitaciones.info/img/mensajes-personalisados/sin-resultados-busqueda.png",alt:"",className:"img-fluid mensaje-imagen"})}),e("div",{className:"col-md-5 col-sm-5 offset-sm-1 offset-md-1",children:a("div",{className:"estructura-mensaje-personalizado",children:[a("h4",{className:"text-center titulo-personalizado",children:[e("b",{className:"text-rojo",children:"No se encontró"})," ","el resultado."]}),a("div",{className:"position-relative",children:[e("span",{className:"icon-Bombillo mensaje-icono"}),e("p",{className:"mensaje-personalizado d-block text-left",children:"Prueba cambiando tus opciones de búsqueda e intentalo nuevamente."})]})]})})]})})]})})})]})]})};export{ze as default};
