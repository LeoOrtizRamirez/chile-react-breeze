import{j as a,a as e,u as n,H as d}from"./app-8dffd708.js";import{A as l}from"./AuthenticatedLayout-bc7aa582.js";import{M as c}from"./estilos-contratos-index-1a74361e.js";import"./ApplicationLogo-fdaddf68.js";import"./transition-85ca8622.js";function m({type:r="submit",className:o="",processing:t,children:s,onClick:i}){return a("button",{style:{backgroundColor:"#57C700"},type:r,onClick:i,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${t&&"opacity-25"} `+o,disabled:t,children:[s,e("span",{className:"material-symbols-outlined text-gray-500 iconos-tamano-margen",children:"share"})]})}function u({type:r="submit",className:o="",processing:t,children:s,onClick:i}){return a("button",{style:{backgroundColor:"#57C700"},type:r,onClick:i,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${t&&"opacity-25"} `+o,disabled:t,children:[s,e("span",{className:"material-symbols-outlined text-gray-500 iconos-tamano-margen",children:"folder_delete"})]})}function b({type:r="submit",className:o="",processing:t,children:s,onClick:i}){return a("button",{style:{backgroundColor:"#57C700"},type:r,onClick:i,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${t&&"opacity-25"} `+o,disabled:t,children:[s,e("span",{className:"material-symbols-outlined text-gray-500 iconos-tamano-margen",children:"ios_share"})]})}function h({type:r="submit",className:o="",processing:t,children:s,onClick:i}){return a("button",{style:{backgroundColor:"#57C700"},type:r,onClick:i,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${t&&"opacity-25"} `+o,disabled:t,children:[s,e("span",{className:"material-symbols-outlined text-gray-500 iconos-tamano-margen",children:"star"})]})}function g({type:r="submit",className:o="",processing:t,children:s,onClick:i}){return a("button",{style:{backgroundColor:"#57C700"},type:r,onClick:i,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${t&&"opacity-25"} `+o,disabled:t,children:[s,e("span",{className:"material-symbols-outlined text-gray-500 iconos-tamano-margen",children:"picture_as_pdf"})]})}function f({type:r="submit",className:o="",processing:t,children:s,onClick:i}){return a("button",{style:{backgroundColor:"#57C700"},type:r,onClick:i,className:`boton items-center px-1 py-1 bg-white rounded-md font-semibold text-xs text-gray-500 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:#00a1c9 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${t&&"opacity-25"} `+o,disabled:t,children:[s,e("span",{className:"material-symbols-outlined text-gray-500 iconos-tamano-margen",children:"visibility"})]})}const v=({auth:r,contratos:o})=>(n({title:"",body:""}),a(l,{auth:r,children:[e(d,{title:"Contratos"}),a("div",{className:"contenedor-contratos",children:[e(c,{}),e("div",{className:"alto-tabla bg-white overflow-auto ",children:a("table",{className:"w-full bg-white border tabla ",children:[e("thead",{className:"cabecera-tabla",style:{backgroundColor:"#00a1c9"},children:a("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{children:"Acciones"}),e("th",{children:"Portal"}),e("th",{children:"Entidad"}),e("th",{children:"Objeto"}),e("th",{children:"Cuantía"}),e("th",{children:"Modalidad"}),e("th",{children:"Número"}),e("th",{children:"Estado"}),e("th",{children:"Publicada"}),e("th",{children:"Ubicación"}),e("th",{children:"Contratista"}),e("th",{children:"Actividad económica"})]})}),e("tbody",{children:o.map(t=>a("tr",{children:[e("td",{className:"border border-gray-200 text-left px-4 ",children:a("div",{className:"iconos-horizontal",children:[a("div",{children:[e(g,{}),e(b,{})]}),a("div",{className:"",children:[e(h,{}),e(f,{})]}),a("div",{className:"",children:[e(m,{}),e(u,{})]})]})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.fuente.alias_portal}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:t.entidad_contratante})}),a("td",{className:"border border-gray-200 text-left margen-textos",children:[a("span",{className:"data-text",children:[t.objeto.substr(0,30),"..."," "]}),e("a",{href:"",className:"text-primary",children:"Ver más"})]}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.valor>0?t.valor.toLocaleString("co-CO"):t.valor_texto}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.modalidad}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.codigo_proceso}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.estado_proceso}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.fecha_publicacion}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.ubicacion}),e("td",{className:"border border-gray-200 text-left margen-textos",children:e("span",{className:"data-text ",children:t.contratista})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.actividad_economica})]},t.id))})]})})]})]}));export{v as default};