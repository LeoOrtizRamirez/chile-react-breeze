import{j as a,a as e,u as w}from"./app-345e6e17.js";import{A as C}from"./AuthenticatedLayout-791b9032.js";import{A as k}from"./MenuOpciones-100a8083.js";/* empty css                                */import{$ as l,P}from"./jquery-cba181be.js";import"./estilos-capa-autentificacion-d8e51327.js";import"./transition-c5b8ef87.js";function _({type:i="submit",className:r="",processing:s,children:o,onClick:d}){return a("button",{style:{backgroundColor:"#57C700"},type:i,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+r,disabled:s,children:[o,e("span",{className:"material-symbols-outlined text-gray-500 iconos-tamano-margen",children:"share"})]})}function $({type:i="submit",className:r="",processing:s,children:o,onClick:d}){return a("button",{style:{backgroundColor:"#57C700"},type:i,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+r,disabled:s,children:[o,e("span",{className:"material-symbols-outlined text-gray-500 iconos-tamano-margen",children:"folder_delete"})]})}function j({type:i="submit",className:r="",processing:s,children:o,onClick:d}){return a("button",{style:{backgroundColor:"#57C700"},type:i,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+r,disabled:s,children:[o,e("span",{className:"material-symbols-outlined text-gray-500 iconos-tamano-margen",children:"ios_share"})]})}function A({type:i="submit",className:r="",processing:s,children:o,onClick:d}){return a("button",{style:{backgroundColor:"#57C700"},type:i,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+r,disabled:s,children:[o,e("span",{className:"material-symbols-outlined text-gray-500 iconos-tamano-margen",children:"star"})]})}function O({type:i="submit",className:r="",processing:s,children:o,onClick:d}){return a("button",{style:{backgroundColor:"#57C700"},type:i,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+r,disabled:s,children:[o,e("span",{className:"material-symbols-outlined text-gray-500 iconos-tamano-margen",children:"picture_as_pdf"})]})}function U({type:i="submit",className:r="",processing:s,children:o,onClick:d}){return a("button",{style:{backgroundColor:"#57C700"},type:i,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+r,disabled:s,children:[o,e("span",{className:"material-symbols-outlined text-gray-500 iconos-tamano-margen",children:"visibility"})]})}const S=({auth:i,contratos:r,totalContratos:s,pagina:o})=>{const{data:d,setData:E,post:q,get:b,processing:z,reset:I,errors:H}=w({});console.log(r),l("th").click(function(){var t=l(this).parents("table").eq(0),n=t.find("tr:gt(0)").toArray().sort(x(l(this).index()));this.asc=!this.asc,this.asc||(n=n.reverse());for(var c=0;c<n.length;c++)t.append(n[c]);y(l(this),this.asc)});function x(t){return function(n,c){var m=p(n,t),h=p(c,t);return l.isNumeric(m)&&l.isNumeric(h)?m-h:m.localeCompare(h)}}function p(t,n){return l(t).children("td").eq(n).html()}function y(t,n){l("th").each(function(c){l(this).removeClass("sorting"),l(this).removeClass("asc"),l(this).removeClass("desc")}),t.addClass("sorting"),n?t.addClass("asc"):t.addClass("desc")}var N=r[r.length-1].id;const v=r[0].id,u=30,g=s,f=parseInt(g/u)+1;return a(C,{auth:i,children:[e("link",{rel:"shortcut icon",href:"#"}),e("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD",crossorigin:"anonymous"}),e("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}),a("div",{children:[a("div",{className:"contenedor-filtros",children:[a("div",{className:"",children:[e("input",{className:"buscador_rapido",id:"buscar",type:"text",placeholder:"Búsqueda rápida",onChange:t=>{const n=t.target.value,c=datos.filter(function(m){return m.entidad_contratante.toUpperCase().indexOf(n.toUpperCase())!==-1||m.objeto.toUpperCase().indexOf(n.toUpperCase())!==-1||m.ubicacion.toUpperCase().indexOf(n.toUpperCase())!==-1});setItems([...c].splice(0,u))}}),e("span",{className:"material-symbols-outlined posicion-color",children:"search"})]}),e("div",{className:"",children:a("button",{className:"buscador_avanzado mb-3",children:[e("span",{className:"material-symbols-outlined margen-color",children:"list"}),e("span",{className:"color-texto",children:"Búsqueda avanzada"})]})}),a("div",{className:"input-filtro-estado",children:[e("span",{className:"span-visualizar",children:"Visualizar:"}),a("select",{className:"input-visualizar",children:[e("option",{value:"",children:"todos"}),e("option",{value:"",children:"Vistos recientemente"}),e("option",{value:"",children:"No Leidos"})]})]}),e(P,{nextHandler:()=>{o>=f||b("/contratos/"+N+"/"+o+"/next")},prevHandler:()=>{o!=1&&b("/contratos/"+v+"/"+o+"/prev")},currentPage:o,itemsPagina:u,totalElementos:g,totalPaginas:f})]}),a("div",{className:"contenedor-contratos",children:[e(k,{}),e("div",{className:"alto-tabla bg-white overflow-auto ",children:a("table",{id:"tabla",className:"w-full bg-white border tabla table-hover",children:[e("thead",{className:"cabecera-tabla",style:{backgroundColor:"#00a1c9"},children:a("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{children:"Acciones"}),e("th",{children:"Portal"}),e("th",{children:"Entidad"}),e("th",{children:"Objeto"}),e("th",{children:"Cuantía"}),e("th",{children:"Modalidad"}),e("th",{children:"Número"}),e("th",{children:"Estado"}),e("th",{children:"Publicada"}),e("th",{children:"Ubicación"}),e("th",{children:"Contratista"}),e("th",{children:"Actividad económica"})]})}),e("tbody",{children:r.map(t=>a("tr",{children:[e("td",{className:"border border-gray-200 text-left",children:a("div",{className:"iconos-horizontal width-columna-acciones",children:[a("div",{children:[e(O,{}),e(j,{}),e(A,{})]}),a("div",{className:"",children:[e(_,{}),e($,{}),e(U,{})]})]})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"circulo",children:t.fuente.alias_portal})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:t.entidad_contratante})}),a("td",{className:"border border-gray-200 text-left margen-textos",children:[a("span",{className:"data-text",children:[t.objeto.substr(0,40),"..."," "]}),e("a",{href:"",className:"text-primary",children:"Ver más"})]}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:t.valor>0?t.valor.toLocaleString("co-CO"):t.valor_texto}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:t.modalidad})}),e("td",{className:"border border-gray-200 text-left margen-textos ",children:e("span",{className:"data-text ",children:t.codigo_proceso})}),e("td",{className:"border border-gray-200 text-left color-estado margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:t.estado_proceso})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:t.fecha_publicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:t.ubicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:t.contratista})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:t.actividad_economica})})]},t.id))})]})})]})]})]})};export{S as default};
