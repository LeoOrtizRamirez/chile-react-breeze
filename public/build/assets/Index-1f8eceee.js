import{a as e,j as s,r as n,F as Q}from"./app-e03f33d7.js";import{A as K}from"./AuthenticatedLayout-765f0af1.js";import{$ as l,P as V,L as W}from"./Loader-15fc52fb.js";/* empty css              *//* empty css                      *//* empty css              */import"./transition-366134ce.js";/* empty css                      */const $=i=>{const{handleSearch:o}=i,c=()=>{fetch("/usuarios/"+i.usuario.uuid+"/delete").then(m=>m.json()).then(m=>{m=="Success"?(console.log("Sucess"),o(),location.reload()):console.log("Error")})};return e("div",{className:"modal fade show",id:"deleteModal"+i.usuario.id,tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",style:{display:"block"},children:e("div",{className:"modal-dialog",children:s("div",{className:"modal-content",children:[s("div",{className:"modal-header",id:"modal-header-delete-user",children:[e("h5",{className:"modal-title",id:"exampleModalLabel",children:"Eliminar Usuario"}),e("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close",onClick:o})]}),e("div",{className:"modal-body",children:e("div",{className:"row",children:e("div",{className:"col-12",children:s("h6",{className:"color-negro",children:["¿Quieres eliminar el usuario ",i.usuario.nombre_completo," ?"]})})})}),s("div",{className:"modal-footer",children:[e("button",{onClick:c,className:"btn btn-danger",children:"Eliminar"}),e("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:o,children:"Cerrar"})]})]})})})};const re=({auth:i,usuarios:o})=>{const[c,m]=n.exports.useState(o.data);l("th").click(function(){var a=l(this).parents("table").eq(0),t=a.find("tr:gt(0)").toArray().sort(_(l(this).index()));this.asc=!this.asc,this.asc||(t=t.reverse());for(var r=0;r<t.length;r++)a.append(t[r]);C(l(this),this.asc)});function _(a){return function(t,r){var d=g(t,a),p=g(r,a);return l.isNumeric(d)&&l.isNumeric(p)?d-p:d.localeCompare(p)}}function g(a,t){return l(a).children("td").eq(t).html()}function C(a,t){l("th").each(function(r){l(this).removeClass("sorting"),l(this).removeClass("asc"),l(this).removeClass("desc")}),a.addClass("sorting"),t?a.addClass("asc"):a.addClass("desc")}const[b,u]=n.exports.useState(!1),[j,P]=n.exports.useState(0),S=a=>{u(!0),P(a.id)},E=a=>{u(!1)},[q,w]=n.exports.useState(o.to),[D,k]=n.exports.useState(o.from),[U,I]=n.exports.useState(o.total),[M,L]=n.exports.useState(o.next_page_url),[A,F]=n.exports.useState(o.prev_page_url),[z,x]=n.exports.useState(""),[R,T]=n.exports.useState(""),y=()=>{var a=document.getElementById("form_busqueda_rapida");let t=new FormData(a),r={};return t.forEach(function(p,O){r[O]=p}),B(r)},B=a=>{const t=[];for(let r in a)t.push(encodeURIComponent(r)+"="+encodeURIComponent(a[r]));return t.join("&")},f=a=>{if(a==null)return;const t=y();fetch(a+"&"+t).then(r=>r.json()).then(r=>{N(r)})},h=n.exports.useRef(0);n.exports.useEffect(()=>{function a(t){if(console.log("entro"),t.key==="Enter"){t.preventDefault();const r=y();v(!0),fetch("/usuarios/?"+r).then(d=>d.json()).then(d=>{N(d),v(!1)})}}return h.current!=0&&h.current.addEventListener("keypress",a),()=>{h.current.removeEventListener("keypress",a)}},[c]);const N=a=>{m(a.data),w(a.to),k(a.from),I(a.total),L(a.next_page_url),F(a.prev_page_url)};n.exports.useEffect(()=>{const a=window.location.search,t=new URLSearchParams(a),r=t.get("fecha_publicacion");r!=null&&T(r);const d=t.get("buscador_rapido");d!=null&&x(d)},[]);const[H,v]=n.exports.useState(!1);return s(K,{auth:i,className:"testindexusers",children:[e("link",{rel:"shortcut icon",href:"#"}),e("div",{children:e("div",{className:"contenedor-usuarios",children:H?e(W,{}):e(Q,{children:s("div",{className:"contenedor-informacion-usuarios bg-white",children:[s("div",{className:"usuarios",children:[s("div",{className:"contenedor-botones",children:[s("div",{className:"",children:[s("form",{method:"get",name:"form_busqueda_rapida",id:"form_busqueda_rapida",children:[e("input",{ref:h,id:"buscador_rapido",className:"buscador_rapido",name:"buscador_rapido",type:"text",value:z,placeholder:"Búsqueda rápida",onChange:a=>x(a.target.value)}),e("input",{name:"fecha_publicacion",type:"hidden",value:R}),e("input",{name:"type",type:"hidden",value:"fetch"})]}),e("span",{className:"material-symbols-outlined posicion-lupa-color",children:"search"})]}),e("a",{className:"autorenew",href:"javascript:location.reload()",children:e("span",{className:"material-symbols-outlined actualizar-color",children:"autorenew"})}),e("a",{className:"add_circle",href:route("usuarios.create"),children:e("span",{className:"material-symbols-outlined material-symbols-outlined-color",children:"add_circle"})})]}),e("div",{className:"margen-titulo",children:"Usuarios"}),e("div",{})]}),s("div",{className:"tabla-ubicacion-usuarios",children:[s("table",{id:"tabla",className:"",children:[e("thead",{className:"cabecera-tabla ",style:{backgroundColor:"#00a1c9"},children:s("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{style:{padding:"0px 35px"},children:"Acciones"}),e("th",{style:{padding:"0px 10px"},children:"Documento"}),e("th",{style:{padding:"0px 35px"},children:"Nombre"}),e("th",{style:{padding:"0px 10px"},children:"País"}),e("th",{style:{padding:"0px 10px"},children:"Ciudad"}),e("th",{style:{padding:"0px 35px"},children:"Dirección"}),e("th",{style:{padding:"0px 35px"},children:"indicativo"}),e("th",{style:{padding:"0px 35px"},children:"Celular"}),e("th",{style:{padding:"0px 35px"},children:"teléfono fijo"}),e("th",{style:{padding:"0px 35px"},children:"Email"}),e("th",{style:{padding:"0px 0px"},children:"Plan"}),e("th",{style:{padding:"0px 35px"},children:"Creacion"}),e("th",{style:{padding:"0px 35px"},children:"Final Plan"}),e("th",{style:{padding:"0px 10px"},children:"Estado"}),e("th",{style:{padding:"0px 35px"},children:"Como se entero de Licitaciones"}),e("th",{style:{padding:"0px 35px"},children:"NIT"}),e("th",{style:{padding:"0px 35px"},children:"Empresa"}),e("th",{style:{padding:"0px 35px"},children:"País empresa"}),e("th",{style:{padding:"0px 35px"},children:"Ciudad empresa"}),e("th",{style:{padding:"0px 35px"},children:"Dirección empresa"}),e("th",{style:{padding:"0px 10px"},children:"Indicativo empresa"}),e("th",{style:{padding:"0px 10px"},children:"Celular empresa"}),e("th",{style:{padding:"0px 35px"},children:"Telefono fijo empresa"}),e("th",{style:{padding:"0px 35px"},children:"Email empresa"}),e("th",{style:{padding:"0px 35px"},children:"Actividad economica"})]})}),e("tbody",{children:c.map(a=>s("tr",{className:"tr-users",children:[e("td",{className:"border border-gray-200 px-4 ",children:s("div",{className:"iconos-horizontal",children:[s("div",{className:"estilos-boton-eliminar",children:[e("button",{type:"button",className:"btn btn-danger btn-sm usuarios","data-bs-toggle":"modal","data-bs-target":"#deleteModal"+a.id,onClick:()=>{S(a)},children:e("span",{className:"material-symbols-outlined text-white iconos-tamano-margen align-middle",children:"delete"})}),b&&j==a.id&&e($,{usuario:a,openDeleteModal:b,handleSearch:E})]}),e("div",{className:"estilos-boton-editar",children:e("a",{href:route("usuarios.update",a.uuid)+"/edit",children:e("span",{className:"material-symbols-outlined",children:"edit"})})}),e("div",{className:"estilos-boton-email",children:e("span",{className:"material-symbols-outlined",children:"mail"})})]})}),e("td",{className:"border border-gray-200 margen-textos",children:a.identificacion}),e("td",{className:"border border-gray-200 margen-textos",children:a.nombre_completo}),e("td",{className:"border border-gray-200 margen-textos",children:a.pais}),e("td",{className:"border border-gray-200 margen-textos",children:a.ciudad}),e("td",{className:"border border-gray-200 margen-textos",children:a.direccion}),e("td",{className:"border border-gray-200 margen-textos",children:a.indicativo}),e("td",{className:"border border-gray-200 margen-textos",children:a.celular}),e("td",{className:"border border-gray-200 margen-textos",children:a.telefono_fijo}),e("td",{className:"border border-gray-200 margen-textos",children:a.email}),e("td",{className:"border border-gray-200 margen-textos",children:a.idplan}),e("td",{className:"border border-gray-200 margen-textos",children:a.created_at.substr(0,10)}),e("td",{className:"border border-gray-200 margen-textos",children:a.fecha_vencimiento}),e("td",{className:"border border-gray-200 margen-textos",children:a.estado}),e("td",{className:"border border-gray-200 margen-textos",children:a.origen}),e("td",{className:"border border-gray-200 margen-textos",children:a.nit_empresa}),e("td",{className:"border border-gray-200 margen-textos",children:a.nombre_empresa}),e("td",{className:"border border-gray-200 margen-textos",children:a.pais_empresa}),e("td",{className:"border border-gray-200 margen-textos",children:a.ciudad_empresa}),e("td",{className:"border border-gray-200 margen-textos",children:a.direccion_empresa}),e("td",{className:"border border-gray-200 margen-textos",children:a.indicativo_empresa}),e("td",{className:"border border-gray-200 margen-textos",children:a.celular_empresa}),e("td",{className:"border border-gray-200 margen-textos",children:a.telefono_fijo_empresa}),e("td",{className:"border border-gray-200 margen-textos",children:a.email_facturacion_empresa}),e("td",{className:"border border-gray-200 margen-textos",children:a.descripcion_actividad_economica})]},a.id))})]}),c.length<=0&&e("div",{id:"mensajes-personalizado-busqueda",className:"container-fluid content_blank_interno",children:s("div",{className:"row justify-content-center align-items-center",children:[e("div",{className:"col-md-4 col-sm-4 offset-md-1 offset-sm-1",children:e("img",{src:"https://col.licitaciones.info/img/mensajes-personalisados/sin-resultados-busqueda.png",alt:"",className:"img-fluid mensaje-imagen"})}),e("div",{className:"col-md-5 col-sm-5 offset-sm-1 offset-md-1",children:s("div",{className:"estructura-mensaje-personalizado",children:[s("h4",{className:"text-center titulo-personalizado",children:[e("b",{className:"text-rojo",children:"No se encontró"})," ","el resultado."]}),s("div",{className:"position-relative",children:[e("span",{className:"icon-Bombillo mensaje-icono"}),e("p",{className:"mensaje-personalizado d-block text-left",children:"Prueba cambiando tus opciones de búsqueda e intentalo nuevamente."})]})]})})]})})]}),e("div",{children:e(V,{nextHandler:()=>f(M),prevHandler:()=>f(A),currentPage:D,totalPaginas:q,totalElementos:U})})]})})})})]})};export{re as default};
