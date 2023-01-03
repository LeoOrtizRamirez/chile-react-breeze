import{j as a,a as e,u as C}from"./app-68e50450.js";import{A as w}from"./AuthenticatedLayout-d38b224c.js";import{A as k}from"./MenuOpciones-a5aef5bb.js";import{$ as c,P}from"./jquery-c234fbe7.js";import"./estilos-capa-autentificacion-b52712fa.js";import"./transition-75ce58ed.js";function $({type:n="submit",className:r="",processing:s,children:o,onClick:d}){return a("button",{style:{backgroundColor:"#57C700"},type:n,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+r,disabled:s,children:[o,e("i",{className:"bi bi-share text-gray-500 iconos-tamano-margen"})]})}function _({type:n="submit",className:r="",processing:s,children:o,onClick:d}){return a("button",{style:{backgroundColor:"#57C700"},type:n,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+r,disabled:s,children:[o,e("i",{className:"bi bi-folder-minus text-gray-500 iconos-tamano-margen"})]})}function A({type:n="submit",className:r="",processing:s,children:o,onClick:d}){return a("button",{style:{backgroundColor:"#57C700"},type:n,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+r,disabled:s,children:[o,e("i",{className:"bi bi-upload text-gray-500 iconos-tamano-margen"})]})}function U({type:n="submit",className:r="",processing:s,children:o,onClick:d}){return a("button",{style:{backgroundColor:"#57C700"},type:n,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+r,disabled:s,children:[o,e("i",{className:"bi bi-star text-gray-500 iconos-tamano-margen"})]})}function j({type:n="submit",className:r="",processing:s,children:o,onClick:d}){return a("button",{style:{backgroundColor:"#57C700"},type:n,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+r,disabled:s,children:[o,e("i",{className:"bi bi-filetype-pdf text-gray-500 iconos-tamano-margen"})]})}function q({type:n="submit",className:r="",processing:s,children:o,onClick:d}){return a("button",{style:{backgroundColor:"#57C700"},type:n,onClick:d,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${s&&"opacity-25"} `+r,disabled:s,children:[o,e("i",{className:"bi bi-eye text-gray-500 iconos-tamano-margen"})]})}const Q=({auth:n,contratos:r,totalContratos:s,pagina:o})=>{const{data:d,setData:z,post:E,get:b,processing:H,reset:I,errors:O}=C({});console.log(r),c("th").click(function(){var t=c(this).parents("table").eq(0),i=t.find("tr:gt(0)").toArray().sort(x(c(this).index()));this.asc=!this.asc,this.asc||(i=i.reverse());for(var l=0;l<i.length;l++)t.append(i[l]);y(c(this),this.asc)});function x(t){return function(i,l){var m=p(i,t),h=p(l,t);return c.isNumeric(m)&&c.isNumeric(h)?m-h:m.localeCompare(h)}}function p(t,i){return c(t).children("td").eq(i).html()}function y(t,i){c("th").each(function(l){c(this).removeClass("sorting"),c(this).removeClass("asc"),c(this).removeClass("desc")}),t.addClass("sorting"),i?t.addClass("asc"):t.addClass("desc")}var N=r[r.length-1].id;const v=r[0].id,u=30,f=s,g=parseInt(f/u)+1;return a(w,{auth:n,children:[e("link",{rel:"shortcut icon",href:"#"}),a("div",{children:[a("div",{className:"contenedor-filtros",children:[a("div",{className:"",children:[e("input",{className:"buscador_rapido",id:"buscar",type:"text",placeholder:"Búsqueda rápida",onChange:t=>{const i=t.target.value,l=datos.filter(function(m){return m.entidad_contratante.toUpperCase().indexOf(i.toUpperCase())!==-1||m.objeto.toUpperCase().indexOf(i.toUpperCase())!==-1||m.ubicacion.toUpperCase().indexOf(i.toUpperCase())!==-1});setItems([...l].splice(0,u))}}),e("span",{className:"material-symbols-outlined posicion-color",children:"search"})]}),e("div",{className:"",children:a("button",{className:"buscador_avanzado mb-3",children:[e("span",{className:"material-symbols-outlined margen-color",children:"list"}),e("span",{className:"color-texto",children:"Búsqueda avanzada"})]})}),a("div",{className:"input-filtro-estado",children:[e("span",{className:"span-visualizar",children:"Visualizar:"}),a("select",{className:"input-visualizar",children:[e("option",{value:"",children:"todos"}),e("option",{value:"",children:"Vistos recientemente"}),e("option",{value:"",children:"No Leidos"})]})]}),e(P,{nextHandler:()=>{o>=g||b("/contratos/"+N+"/"+o+"/next")},prevHandler:()=>{o!=1&&b("/contratos/"+v+"/"+o+"/prev")},currentPage:o,itemsPagina:u,totalElementos:f,totalPaginas:g})]}),a("div",{className:"contenedor-contratos",children:[e(k,{}),e("div",{className:"alto-tabla bg-white overflow-auto ",children:a("table",{id:"tabla",className:"w-full bg-white border tabla table-hover",children:[e("thead",{className:"cabecera-tabla",style:{backgroundColor:"#00a1c9"},children:a("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{children:"Acciones"}),e("th",{children:"Portal"}),e("th",{children:"Entidad"}),e("th",{children:"Objeto"}),e("th",{children:"Cuantía"}),e("th",{children:"Modalidad"}),e("th",{children:"Número"}),e("th",{children:"Estado"}),e("th",{children:"Publicada"}),e("th",{children:"Ubicación"}),e("th",{children:"Contratista"}),e("th",{children:"Actividad económica"})]})}),e("tbody",{children:r.map(t=>a("tr",{children:[e("td",{className:"border border-gray-200 text-left",children:a("div",{className:"iconos-horizontal width-columna-acciones",children:[a("div",{children:[e(j,{}),e(A,{}),e(U,{})]}),a("div",{className:"",children:[e($,{}),e(_,{}),e(q,{})]})]})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"circulo",children:t.fuente.alias_portal})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:t.entidad_contratante})}),a("td",{className:"border border-gray-200 text-left margen-textos",children:[a("span",{className:"data-text",children:[t.objeto.substr(0,40),"..."," "]}),e("a",{href:"",className:"text-primary",children:"Ver más"})]}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:t.valor>0?"$"+t.valor.toLocaleString("ch-CH"):t.valor_texto}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:t.modalidad})}),e("td",{className:"border border-gray-200 text-left margen-textos ",children:e("span",{className:"data-text ",children:t.codigo_proceso})}),e("td",{className:"border border-gray-200 text-left color-estado margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:t.estado_proceso})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text width-columna-menor",children:t.fecha_publicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos width-columna-menor",children:e("span",{className:"data-text ",children:t.ubicacion})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:t.contratista})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:t.actividad_economica})})]},t.id))})]})})]})]})]})};export{Q as default};
