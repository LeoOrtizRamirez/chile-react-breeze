import{u as I,r as N,j as d,a as e,H as P}from"./app-15de6e70.js";import{A as j}from"./AuthenticatedLayout-2a915ba7.js";import{A as u}from"./MenuOpciones-ab6a8a6a.js";import{$ as l,P as E}from"./jquery-a4227283.js";/* empty css                               */import{D as M}from"./DeleteModalUsers-d2da663e.js";/* empty css                      */import"./estilos-capa-autentificacion-415e5432.js";import"./ApplicationLogoLici-2864739e.js";import"./transition-447887db.js";l("th").click(function(){var a=l(this).parents("table").eq(0),r=a.find("tr:gt(0)").toArray().sort(H(l(this).index()));this.asc=!this.asc,this.asc||(r=r.reverse());for(var o=0;o<r.length;o++)a.append(r[o]);S(l(this),this.asc)});function H(a){return function(r,o){var s=y(r,a),n=y(o,a);return l.isNumeric(s)&&l.isNumeric(n)?s-n:s.localeCompare(n)}}function y(a,r){return l(a).children("td").eq(r).html()}function S(a,r){l("th").each(function(o){l(this).removeClass("sorting"),l(this).removeClass("asc"),l(this).removeClass("desc")}),a.addClass("sorting"),r?a.addClass("asc"):a.addClass("desc")}const W=({auth:a,usuarios:r,totalUsuarios:o,pagina:s})=>{const{data:n,setData:k,post:O,get:c,processing:q,reset:z,errors:F}=I({}),[i,m]=N.exports.useState(!1),[v,_]=N.exports.useState(0),C=t=>{m(!0),_(t.id)},D=t=>{m(!1)},h=r[r.length-1].id;var b=h;const g=r[0].id;console.log(r),console.log("Usuarios.leng "+r.length),console.log("ultimo elemeto: "+h),console.log("IDUSUARIO:"+b),console.log("primerElemento: "+g),r[0].id;const p=30,x=o,f=parseInt(x/p)+1,U=s,w=()=>{s>=f||c("/usuarios/"+b+"/"+s+"/next")},A=()=>{s!=1&&c("/usuarios/"+g+"/"+s+"/prev")};return d(j,{auth:a,children:[e(P,{title:"Usuarios"}),d("div",{className:"contenedor-usuarios",children:[e("div",{className:"posicion-opciones-usuarios",children:e(u,{})}),d("div",{className:"alto-tabla bg-white overflow-auto ",children:[d("div",{className:"usuarios",children:[d("div",{className:"contenedor-botones",children:[e("a",{className:"autorenew",href:"javascript:location.reload()",children:e("span",{className:"material-symbols-outlined actualizar-color",children:"autorenew"})}),e("a",{className:"add_circle",href:route("usuarios.create"),children:e("span",{className:"material-symbols-outlined material-symbols-outlined-color",children:"add_circle"})})]}),e("div",{className:"margen-titulo",children:"Usuarios"}),e("div",{})]}),d("table",{id:"tabla",className:"w-full bg-white border tabla ",children:[e("thead",{className:"cabecera-tabla ",style:{backgroundColor:"#00a1c9"},children:d("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{children:"Acciones"}),e("th",{children:"# Documento"}),e("th",{children:"Nombre"}),e("th",{children:"País"}),e("th",{children:"Ciudad"}),e("th",{children:"Dirección"}),e("th",{children:"indicativo"}),e("th",{children:"Celular"}),e("th",{children:"teléfono fijo"}),e("th",{children:"Email"}),e("th",{children:"Plan"}),e("th",{children:"Creacion"}),e("th",{children:"Final Plan"}),e("th",{children:"Estado"}),e("th",{children:"Como se entero de Licitaciones"}),e("th",{children:"NIT"}),e("th",{children:"Empresa"}),e("th",{children:"País empresa"}),e("th",{children:"Ciudad empresa"}),e("th",{children:"Dirección empresa"}),e("th",{children:"Indicativo empresa"}),e("th",{children:"Celular empresa"}),e("th",{children:"Telefono fijo empresa"}),e("th",{children:"Email empresa"}),e("th",{children:"Actividad economica"})]})}),e("tbody",{children:r.map(t=>d("tr",{children:[e("td",{className:"border border-gray-200 text-left px-4 ",children:d("div",{className:"iconos-horizontal",children:[d("div",{className:"estilos-boton-eliminar",children:[e("button",{type:"button",className:"btn btn-danger btn-sm usuarios","data-bs-toggle":"modal","data-bs-target":"#deleteModal"+t.id,onClick:()=>{C(t)},children:e("span",{className:"material-symbols-outlined text-white iconos-tamano-margen align-middle",children:"delete"})}),i&&v==t.id&&e(M,{usuario:t,openDeleteModal:i,handleSearch:D})]}),e("div",{className:"estilos-boton-editar",children:e("a",{href:route("usuarios.update",t.uuid)+"/edit",children:e("span",{className:"material-symbols-outlined",children:"edit"})})}),e("div",{className:"estilos-boton-email",children:e("span",{className:"material-symbols-outlined",children:"mail"})})]})}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.identificacion}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.nombre_completo}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.pais}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.ciudad}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.direccion}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.indicativo}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.celular}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.telefono_fijo}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.email}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.idplan}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.created_at.substr(0,10)}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.fecha_vencimiento}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.estado}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.origen}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.nit_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.nombre_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.pais_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.ciudad_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.direccion_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.indicativo_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.celular_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.telefono_fijo_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.email_facturacion_empresa}),e("td",{className:"border border-gray-200 text-left margen-textos",children:t.descripcion_actividad_economica})]},t.id))})]}),e(E,{nextHandler:w,prevHandler:A,currentPage:U,itemsPagina:p,totalElementos:x,totalPaginas:f})]})]})]})};export{W as default};
