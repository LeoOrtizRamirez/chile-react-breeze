import{j as a,a as e,r as s,H as Z,F as Y}from"./app-4488dcc1.js";import{A as se}from"./AuthenticatedLayout-d26e67dd.js";import{$ as C,P as oe,L as ne}from"./Loader-5318013a.js";import{M as b}from"./Modal-90fc5007.js";import{F as ce}from"./Form-eb6a5c7b.js";import{A as X}from"./ActividadEconomica-678bf1da.js";/* empty css                      *//* empty css              */import"./ApplicationLogo-3db11719.js";import"./ApplicationLogoLici-d8047e94.js";import"./transition-9636cdf6.js";import"./createWithBsPrefix-7e10863b.js";import"./CloseButton-081d3863.js";import"./hasClass-040b96e8.js";import"./ElementChildren-b76ae4a8.js";function ie({type:u="submit",className:i="",processing:l,children:n,onClick:o}){return a("button",{style:{backgroundColor:"#57C700"},type:u,onClick:o,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${l&&"opacity-25"} `+i,disabled:l,children:[n,e("i",{className:"bi bi-share text-gray-500 iconos-tamano-margen"})]})}function re({type:u="submit",className:i="",processing:l,children:n,onClick:o}){return a("button",{style:{backgroundColor:"#57C700"},type:u,onClick:o,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${l&&"opacity-25"} `+i,disabled:l,children:[n,e("i",{className:"bi bi-folder-minus text-gray-500 iconos-tamano-margen"})]})}const de=u=>e("a",{href:u.url,target:"_blank",children:e("button",{style:{backgroundColor:"#57C700"},className:"boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ",children:e("i",{className:"bi bi-upload text-gray-500 iconos-tamano-margen"})})});function le({type:u="submit",className:i="",processing:l,children:n,onClick:o}){return a("button",{style:{backgroundColor:"#57C700"},type:u,onClick:o,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${l&&"opacity-25"} `+i,disabled:l,children:[n,e("i",{className:"bi bi-star text-gray-500 iconos-tamano-margen"})]})}function ue({type:u="submit",className:i="",processing:l,children:n,onClick:o}){return a("button",{style:{backgroundColor:"#57C700"},type:u,onClick:o,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${l&&"opacity-25"} `+i,disabled:l,children:[n,e("i",{className:"bi bi-filetype-pdf text-gray-500 iconos-tamano-margen"})]})}function he({type:u="submit",className:i="",processing:l,children:n,onClick:o}){return a("button",{style:{backgroundColor:"#57C700"},type:u,onClick:o,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${l&&"opacity-25"} `+i,disabled:l,children:[n,e("i",{className:"bi bi-eye text-gray-500 iconos-tamano-margen"})]})}const pe=({showBusquedaEstado:u,handleCloseBusquedaEstado:i,onClose:l,onValuesSelected:n})=>{const[o,g]=s.exports.useState({todos:!1,publicada:!1,evaluacion:!1,adjudicada:!1,revocada:!1,cerrada:!1}),m=x=>{const{name:h,checked:d}=x.target;g(h==="todos"?{todos:d,publicada:d,evaluacion:d,adjudicada:d,revocada:d,cerrada:d}:{...o,[h]:d})},y=()=>{const x=Object.keys(o).filter(h=>o[h]);n(x),i()};return a(b,{size:"md",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"",centered:!0,show:u,onHide:i,id:"BusquedaEstado",children:[a(b.Header,{closeButton:!0,children:[e(Z,{title:"Busqueda estado"}),e("div",{className:"titulo",children:e("span",{children:"Seleciona el estado"})})]}),e(b.Body,{children:a("div",{className:"busqueda-estado",children:[e("div",{children:e("input",{type:"text",className:"buscador",placeholder:"Buscar estado"})}),a("div",{children:[a("div",{className:"form",children:[a("div",{className:"todos",children:[e("input",{type:"checkbox",name:"todos",checked:o.todos,onChange:m}),e("label",{children:"Seleciona todoss los estados"})]}),e("hr",{}),a("div",{children:[e("input",{type:"checkbox",name:"publicada",checked:o.publicada,onChange:m}),e("label",{children:"Publicada"})]}),e("hr",{}),a("div",{children:[e("input",{type:"checkbox",name:"evaluacion",checked:o.evaluacion,onChange:m}),e("label",{children:"En evaluacion"})]}),e("hr",{}),a("div",{children:[e("input",{type:"checkbox",name:"adjudicada",checked:o.adjudicada,onChange:m}),e("label",{children:"Adjudicada"})]}),e("hr",{}),a("div",{children:[e("input",{type:"checkbox",name:"revocada",checked:o.revocada,onChange:m}),e("label",{children:"Revocada"})]}),e("hr",{}),a("div",{children:[e("input",{type:"checkbox",name:"cerrada",checked:o.cerrada,onChange:m}),e("label",{children:"Terminado anormalmente o descartado"})]}),e("hr",{})]}),e("button",{className:"boton",onClick:y,children:"Seleccionar"})]})]})})]})},me=s.exports.memo(({showBusquedaUbicacion:u,handleCloseBusquedaUbicacion:i})=>{const[l,n]=s.exports.useState([]),[o,g]=s.exports.useState([]),[m,y]=s.exports.useState([]);s.exports.useEffect(()=>{async function h(){try{const f=await(await fetch("/localizacion/json")).json();n(f),g(f)}catch(d){console.log("Solicitud fallida",d)}}h()},[]);const x=(h,d)=>{switch(d){case"Localizaciones":h.length>0&&y(h);break}};return a(b,{size:"xl",centered:!0,show:u,onHide:i,id:"",children:[e(b.Header,{closeButton:!0,children:e("h2",{className:"name_section_app",children:"Selecciona la(s) ubicacion(es) de tu interes."})}),e(b.Body,{children:e(X,{subcategorias:l,nameBuscador:"Busca por ubicacion",onHandleSectores:x,tipo:"Localizaciones",checkeds:m})})]})}),be=s.exports.memo(({showBusquedaActividad:u,handleCloseBusquedaActividad:i})=>{const[l,n]=s.exports.useState([]),[o,g]=s.exports.useState([]),[m,y]=s.exports.useState([]);s.exports.useEffect(()=>{async function h(){try{const f=await(await fetch("/actividades-economicas/json")).json();n(f),g(f)}catch(d){console.log("Solicitud fallida",d)}}h()},[]);const x=(h,d)=>{switch(d){case"ActividadEconomica":h.length>0&&y(h);break}};return a(b,{size:"xl",centered:!0,show:u,onHide:i,id:"",children:[e(b.Header,{closeButton:!0,children:e("h2",{className:"name_section_app",children:"Selecciona la(s) actividad(es) economica(s) de tu interes."})}),e(b.Body,{children:e(X,{subcategorias:l,nameBuscador:"Busca por actividad económica o UNSPSC",onHandleSectores:x,tipo:"ActividadEconomica",checkeds:m})})]})}),fe=s.exports.memo(({showBusquedaTiposCompras:u,handleCloseBusquedaTiposCompras:i})=>{const[l,n]=s.exports.useState([]),[o,g]=s.exports.useState([]),[m,y]=s.exports.useState([]);s.exports.useEffect(()=>{async function h(){try{const f=await(await fetch("/tiposcompras/json")).json();n(f),g(f)}catch(d){console.log("Solicitud fallida",d)}}h()},[]);const x=(h,d)=>{switch(d){case"TiposCompras":h.length>0&&y(h);break}};return a(b,{size:"xl",centered:!0,show:u,onHide:i,id:"",children:[e(b.Header,{closeButton:!0,children:e("h2",{className:"name_section_app",children:"Selecciona la(s) modalidad(es) de tu interes."})}),e(b.Body,{children:e(X,{subcategorias:l,nameBuscador:"Busca por modalidad",onHandleSectores:x,tipo:"TiposCompras",checkeds:m})})]})});const ge=({showBusquedaAvanzada:u,handleCloseBusquedaAvanzada:i,handleBusqueda:l})=>{const n=({target:{name:p,value:v}})=>{g({...o,[p]:v})},[o,g]=s.exports.useState({entidad_contratante:"",objeto:"",codigo_proceso:"",modalidad:"",actividadEconomica:"",ubicacion:"",estado_proceso:"",portalOrigen:"",cuantia_desde:"",cuantia_hasta:"",fecha_desde:"",fecha_hasta:"",contratista:""}),m=()=>{g({entidad_contratante:"",objeto:"",codigo_proceso:"",modalidad:"",actividadEconomica:"",ubicacion:"",estado_proceso:"",portalOrigen:"",cuantia_desde:"",cuantia_hasta:"",fecha_desde:"",fecha_hasta:"",contratista:""}),k([])},y=p=>{p.preventDefault(),l(x())},x=()=>{const p=new FormData(document.getElementById("form_busqueda_avanzada")),v=Object.fromEntries(p.entries());return h(v)+"&estado_proceso="+w},h=p=>{const v=new URLSearchParams;for(let S in p)v.append(S,p[S]);return v.toString()},d=s.exports.useRef(null),[f,B]=s.exports.useState("text"),j=()=>{B("date"),d.current.defaultValue=""},E=()=>{B("text")},[A,P]=s.exports.useState(!1),I=()=>P(!1),U=()=>P(!0),[w,k]=s.exports.useState([]),$=p=>{k(p)},D=p=>{const v=p.target.value,S=p.target.checked;k(S?[...w,v]:w.filter(q=>q!==v))},[M,H]=s.exports.useState(!1),R=()=>H(!1),O=()=>H(!0),[W,L]=s.exports.useState(!1),Q=()=>L(!1),F=()=>L(!0),[G,V]=s.exports.useState(!1),T=()=>V(!1),J=()=>V(!0);return a(b,{size:"lg",dialogClassName:"",contentClassName:"",backdropClassName:"",className:"content-modal-busqueda-avanzada",centered:!0,show:u,onHide:i,id:"modalBusquedaAvanzada",children:[a(b.Header,{closeButton:!0,id:"header-modal-busqueda-avanzada",children:[e(Z,{title:"Busqueda Avanzada"}),e("button",{className:"circulo",onClick:i,children:e("i",{class:"bi bi-arrow-left iconos"})}),e("div",{className:"titulo",children:e("span",{children:"Búsqueda avanzada"})})]}),e(b.Body,{className:"test",children:e("div",{id:"modal-busqueda-avanzada",children:a(ce,{onSubmit:y,className:"form-container",id:"form_busqueda_avanzada",children:[a("span",{children:[e("i",{class:"bi bi-bank iconos"}),"Entidad contratante:"]}),e("input",{type:"text",name:"entidad_contratante",value:o.entidad_contratante,onChange:n,placeholder:"Ingresa la entidad contratante"}),a("span",{children:[e("i",{class:"bi bi-list-nested iconos"}),"Objeto:"]}),e("input",{type:"text",name:"objeto",value:o.objeto,onChange:n,placeholder:"Ingresa palabras claves del objeto del proceso"}),a("div",{className:"pareja",children:[a("div",{className:"size",children:[a("span",{children:[e("i",{class:"bi bi-asterisk iconos"}),"Numero de contrato:"]}),e("input",{type:"text",name:"codigo_proceso",value:o.codigo_proceso,onChange:n,placeholder:"Ingresa el número del proceso"})]}),a("div",{className:"size",children:[a("span",{children:[e("i",{class:"bi bi-tag iconos"}),"Modalidad:"]}),e("input",{type:"text",name:"modalidad",value:o.modalidad,onChange:n,onClick:J,placeholder:"Ingresa la modalidad de contrato"}),e(fe,{showBusquedaTiposCompras:G,handleCloseBusquedaTiposCompras:T})]})]}),a("span",{children:[e("i",{class:"bi bi-lightning-fill iconos"}),"Actividad económica:"]}),e("input",{type:"text",name:"actividadEconomica",value:o.actividadEconomica,onChange:n,onClick:F,placeholder:"Ingresa la(s) actividade(s) económica(s)"}),e(be,{showBusquedaActividad:W,handleCloseBusquedaActividad:Q}),a("span",{children:[e("i",{class:"bi bi-geo-alt-fill iconos"}),"Ubicación:"]}),e("input",{type:"text",name:"ubicacion",value:o.ubicacion,onChange:n,onClick:O,placeholder:"Ingresa la(s) ubicacióne(s)"}),e(me,{showBusquedaUbicacion:M,handleCloseBusquedaUbicacion:R}),a("div",{className:"pareja",children:[a("div",{className:"size",children:[a("span",{children:[e("i",{class:"bi bi-clipboard2-fill iconos"}),"Estados:"]}),e("input",{type:"text",value:w.join(","),onClick:U,onChange:D,placeholder:"Selecione los estados de proceso"}),e(pe,{showBusquedaEstado:A,handleCloseBusquedaEstado:I,onClose:()=>console.log("Modal cerrado"),onValuesSelected:$})]}),a("div",{className:"size",children:[a("span",{children:[e("i",{class:"bi bi-globe iconos"}),"Portal de origen:"]}),e("input",{type:"text",name:"portalOrigen",value:o.portalOrigen,onChange:n,placeholder:"Ingresa el portal de origen"})]})]}),a("div",{className:"pareja",children:[a("div",{className:"size",children:[a("span",{children:[e("i",{class:"bi bi-cash-coin iconos"}),"Cuantía:"]}),e("input",{type:"text",name:"cuantia_desde",value:o.cuantia_desde,onChange:n,placeholder:"Desde"})]}),a("div",{className:"size",children:[e("span",{children:" "}),e("input",{type:"text",name:"cuantia_hasta",value:o.cuantia_hasta,onChange:n,placeholder:"Hasta"})]})]}),a("div",{className:"pareja",children:[a("div",{className:"size",children:[a("span",{children:[e("i",{class:"bi bi-calendar-date-fill iconos"}),"Fecha de publicación:"]}),e("input",{type:f,name:"fecha_desde",value:o.fecha_desde,onChange:n,placeholder:"Inicio",ref:d,onFocus:j,onBlur:E})]}),a("div",{className:"size",children:[e("span",{children:" "}),e("input",{type:f,name:"fecha_hasta",value:o.fecha_hasta,onChange:n,placeholder:"Fin",ref:d,onFocus:j,onBlur:E})]})]}),a("span",{children:[e("i",{class:"bi bi-person-fill iconos"}),"Contratista(s):"]}),e("input",{type:"text",name:"contratista",value:o.contratista,onChange:n,placeholder:"Ingresa el contratista"}),a("div",{className:"botones",children:[e("button",{className:"limpiar",type:"button",onClick:m,children:"Limpiar"}),e("button",{className:"buscar",type:"submit",children:"Buscar"})]})]})})})]})};const Le=({auth:u,contratos:i})=>{const[l,n]=s.exports.useState(""),[o,g]=s.exports.useState(i.data);C("th").click(function(){var t=C(this).parents("table").eq(0),c=t.find("tr:gt(0)").toArray().sort(m(C(this).index()));this.asc=!this.asc,this.asc||(c=c.reverse());for(var r=0;r<c.length;r++)t.append(c[r]);x(C(this),this.asc)});function m(t){return function(c,r){var N=y(c,t),z=y(r,t);return C.isNumeric(N)&&C.isNumeric(z)?N-z:N.localeCompare(z)}}function y(t,c){return C(t).children("td").eq(c).html()}function x(t,c){C("th").each(function(r){C(this).removeClass("sorting"),C(this).removeClass("asc"),C(this).removeClass("desc")}),t.addClass("sorting"),c?t.addClass("asc"):t.addClass("desc")}const[h,d]=s.exports.useState(!0),[f,B]=s.exports.useState(0),j=t=>{B(t.id)},E=()=>{B(0)},[A,P]=s.exports.useState(0),[I,U]=s.exports.useState(0);s.exports.useEffect(()=>{document.getElementById("div1");var t=document.getElementById("tabla");document.getElementById("wrapper1");var c=document.getElementById("scroll-table");t&&P(t.offsetWidth),c&&U(c.offsetWidth);var r=document.getElementById("wrapper1"),N=document.querySelector("#scroll-table");r&&(r.onscroll=function(){N.scrollLeft=r.scrollLeft}),N&&(N.onscroll=function(){r.scrollLeft=N.scrollLeft})});const[w,k]=s.exports.useState(i.to),[$,D]=s.exports.useState(i.from),[M,H]=s.exports.useState(i.total),[R,O]=s.exports.useState(i.next_page_url),[W,L]=s.exports.useState(i.prev_page_url),[Q,F]=s.exports.useState(""),[G,V]=s.exports.useState(""),T=()=>{var t=document.getElementById("form_busqueda_rapida");let c=new FormData(t),r={};return c.forEach(function(z,te){r[te]=z}),J(r)},J=t=>{const c=[];for(let r in t)c.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return c.join("&")},p=t=>{if(t==null)return;let c=T();l!==""&&(c=l),_(!0),fetch(t+"&"+c).then(r=>r.json()).then(r=>{q(r),_(!1)})},v=s.exports.useRef(0);s.exports.useEffect(()=>{v.current!=0&&v.current.addEventListener("keypress",function(t){if(t.key==="Enter"){t.preventDefault();const c=T();_(!0),n(""),fetch("/contratos/?"+c).then(r=>r.json()).then(r=>{q(r),_(!1)})}})},[]);const S=t=>{n(t+"&type=fetch"),_(!0),fetch("/contratos/?"+t+"&type=fetch").then(c=>c.json()).then(c=>{q(c),_(!1)}),K(!1)},q=t=>{g(t.data),k(t.to),D(t.from),H(t.total),O(t.next_page_url),L(t.prev_page_url)};s.exports.useEffect(()=>{const t=window.location.search,c=new URLSearchParams(t),r=c.get("fecha_publicacion");r!=null&&V(r);const N=c.get("buscador_rapido");N!=null&&F(N)},[]);const[ee,_]=s.exports.useState(!1),[ae,K]=s.exports.useState(!1);return a(se,{auth:u,children:[e("link",{rel:"shortcut icon",href:"#"}),a("div",{children:[a("div",{className:"contenedor-filtros",children:[a("div",{className:"",children:[a("form",{method:"get",name:"form_busqueda_rapida",id:"form_busqueda_rapida",children:[e("input",{ref:v,id:"buscador_rapido",className:"buscador_rapido",name:"buscador_rapido",type:"text",value:Q,placeholder:"Búsqueda rápida",onChange:t=>F(t.target.value)}),e("input",{name:"fecha_publicacion",type:"hidden",value:G}),e("input",{name:"type",type:"hidden",value:"fetch"})]}),e("span",{className:"material-symbols-outlined posicion-lupa-contratos",children:"search"})]}),e("div",{className:"",children:a("span",{children:[a("button",{onClick:()=>K(!0),className:"mb-2",children:[e("span",{className:"material-symbols-outlined text-btn-avanzado",children:"list"}),e("span",{className:"text-btn-avanzado",children:"Búsqueda avanzada"})]}),e(ge,{handleBusqueda:t=>S(t),showBusquedaAvanzada:ae,handleCloseBusquedaAvanzada:()=>K(!1)})]})}),a("div",{className:"input-filtro-estado",children:[e("span",{className:"input-filtro-estado-span",children:"Visualizar:"}),a("select",{className:"input-visualizar",children:[e("option",{value:"",children:"todos"}),e("option",{value:"",children:"Vistos recientemente"}),e("option",{value:"",children:"No Leidos"})]})]}),e("div",{children:e(oe,{nextHandler:()=>p(R),prevHandler:()=>p(W),currentPage:$,totalPaginas:w,totalElementos:M})})]}),e("div",{className:"contenedor-contratos",children:e("div",{className:"alto-tabla bg-white overflow-auto",id:"scroll-table",children:ee?e(ne,{}):a(Y,{children:[e("div",{id:"wrapper1",style:{width:I>0?I:0+"px"},children:e("div",{id:"div1",style:{width:A>0?A:0+"px"}})}),a("table",{id:"tabla",className:"w-full bg-white border tabla table-hover",children:[e("thead",{className:"cabecera-tabla",style:{backgroundColor:"#00a1c9"},children:a("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{style:{padding:"0px 0px"},children:"Acciones"}),e("th",{style:{padding:"0px 5px"},children:"Portal"}),e("th",{style:{padding:"0px 80px"},children:"Entidad"}),e("th",{style:{padding:"0px 80px"},children:"Objeto"}),e("th",{style:{padding:"0px 35px"},children:"Cuantía"}),e("th",{style:{padding:"0px 80px"},children:"Modalidad"}),e("th",{style:{padding:"0px 30px"},children:"Número"}),e("th",{style:{padding:"0px 0px"},children:"Estado"}),e("th",{style:{padding:"0px 35px"},children:"Publicada"}),e("th",{style:{padding:"0px 35px"},children:"Ubicación"}),e("th",{style:{padding:"0px 80px"},children:"Actividad económica"})]})}),e("tbody",{children:o.map(t=>a("tr",{className:"tr-users",children:[e("td",{className:"border border-gray-200 text-left mw-90",children:a("div",{className:"iconos-horizontal width-columna-acciones",children:[a("div",{children:[e(ue,{}),e(de,{url:t.link}),e(le,{})]}),a("div",{className:"",children:[e(ie,{}),e(re,{}),e(he,{})]})]})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"circulo",children:t.fuente.alias_portal})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:t.entidad_contratante})}),a("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:[h&&e(Y,{children:f!=t.id&&a("span",{className:"data-text",children:[t.objeto.substr(0,40),"..."," ",e("a",{className:"text-primary",onClick:()=>j(t),children:"Ver más"})]})}),f==t.id&&e("div",{className:"showmore",children:a("span",{className:"data-text",children:[t.objeto,e("a",{className:"text-primary",onClick:()=>E(),children:"Ver menos"})]})})]}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:t.valor>0?"$"+t.valor.toLocaleString("ch-CH"):t.valor_texto}),e("td",{className:"border border-gray-200 text-left margen-textos mw-200",children:e("span",{className:"data-text ",children:t.modalidad})}),e("td",{className:"border border-gray-200 text-left margen-textos ",children:e("span",{className:"data-text ",children:t.codigo_proceso})}),e("td",{className:"border border-gray-200 text-left color-estado margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:t.estado_proceso})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:t.fecha_publicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:t.ubicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:t.actividad_economica})})]},t.id))})]}),o.length<=0&&e("div",{id:"mensajes-personalizado-busqueda",className:"container-fluid content_blank_interno",children:a("div",{className:"row justify-content-center align-items-center",children:[e("div",{className:"col-md-4 col-sm-4 offset-md-1 offset-sm-1",children:e("img",{src:"https://col.licitaciones.info/img/mensajes-personalisados/sin-resultados-busqueda.png",alt:"",className:"img-fluid mensaje-imagen"})}),e("div",{className:"col-md-5 col-sm-5 offset-sm-1 offset-md-1",children:a("div",{className:"estructura-mensaje-personalizado",children:[a("h4",{className:"text-center titulo-personalizado",children:[e("b",{className:"text-rojo",children:"No se encontró"})," ","el resultado."]}),a("div",{className:"position-relative",children:[e("span",{className:"icon-Bombillo mensaje-icono"}),e("p",{className:"mensaje-personalizado d-block text-left",children:"Prueba cambiando tus opciones de búsqueda e intentalo nuevamente."})]})]})})]})})]})})})]})]})};export{Le as default};
