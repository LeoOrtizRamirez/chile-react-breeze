import{u as f,a as e,F as b,j as a,L as v,r as p,H as D}from"./app-67a65f7d.js";import{A as w}from"./AuthenticatedLayout-7a20e5c3.js";import{A as M}from"./MenuOpciones-fc41d29b.js";import{I as i}from"./InputError-4ddfcbb6.js";/* empty css              *//* empty css                      */import"./estilos-capa-autentificacion-2b7a4f3b.js";import"./ApplicationLogoLici-a77e8adc.js";import"./transition-a3216619.js";const _=l=>{console.log(l);const{handleSearch:d}=l,{data:o,setData:c,patch:m,processing:u,reset:N,errors:r}=f({id:l.planData.id,nombre:l.planData.nombre,valor:l.planData.valor,dias:l.planData.dias,tiempo:l.planData.tiempo,periodo:l.planData.periodo,valor_cuenta_adicional:l.planData.valor_cuenta_adicional,descripcion:l.planData.descripcion,estado:l.planData.estado}),s=n=>{c({...o,[n.target.name]:n.target.value})},h=n=>{n.preventDefault(),m(route("planes.update",o.id),{onSuccess:()=>d()})};return e(b,{children:l.openUpdateModal&&a(b,{children:[e("div",{className:"fade modal-backdrop show"}),e("div",{className:"modal fade show",id:"updateModal"+o.id,tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",style:{display:"block"},children:e("div",{className:"modal-dialog",children:e("div",{className:"modal-content",children:a("form",{className:"form",onSubmit:h,children:[a("div",{className:"modal-header",children:[e("h5",{className:"modal-title",id:"exampleModalLabel",children:"Editar Plan"}),e("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close",onClick:d})]}),a("div",{className:"modal-body",children:[a("div",{className:"row",children:[e("div",{className:"col-6",children:a("div",{className:"form-group",children:[e("p",{className:"text-left",children:"Nombre Plan:"}),e("input",{type:"text",id:"nombre",name:"nombre",value:o.nombre,className:"form-control",placeholder:"Nombre",onChange:s}),e(i,{message:r.nombre,className:"text-left mb-2"})]})}),e("div",{className:"col-6",children:a("div",{className:"form-group",children:[e("p",{className:"text-left",children:"Valor:"}),e("input",{type:"number",id:"valor",name:"valor",value:o.valor,className:"form-control",placeholder:"Valor",onChange:s}),e(i,{message:r.valor,className:"text-left mb-2"})]})})]}),a("div",{className:"row",children:[e("div",{className:"col-6",children:a("div",{className:"form-group",children:[e("p",{className:"text-left",children:"Días:"}),e("input",{type:"number",id:"dias",name:"dias",value:o.dias,className:"form-control",placeholder:"Días",onChange:s}),e(i,{message:r.dias,className:"text-left mb-2"})]})}),e("div",{className:"col-6",children:a("div",{className:"form-group",children:[e("p",{className:"text-left",children:"Valor cuenta adicional:"}),e("input",{type:"number",id:"valor_cuenta_adicional",name:"valor_cuenta_adicional",value:o.valor_cuenta_adicional,className:"form-control",placeholder:"Valor",onChange:s}),e(i,{message:r.valor_cuenta_adicional,className:"text-left mb-2"})]})})]}),a("div",{className:"d-flex mb-1",children:[e("p",{className:"text-left",children:"Tiempo de plan:"}),e("p",{className:"text-left px-2",children:"Días:"}),e("input",{type:"radio",name:"periodo",value:"dias",onChange:s,checked:o.periodo==="dias"}),e("p",{className:"text-left px-2",children:"Meses:"}),e("input",{type:"radio",name:"periodo",value:"meses",onChange:s,checked:o.periodo==="meses"}),e(i,{message:r.periodo,className:"text-left mb-2"})]}),e("div",{className:"row",children:a("div",{className:"form-group",children:[e("input",{type:"number",id:"tiempo",name:"tiempo",value:o.tiempo,className:"form-control",onChange:s}),e(i,{message:r.tiempo,className:"text-left mb-2"})]})}),e("div",{className:"row",children:a("div",{className:"form-group",children:[e("p",{className:"text-left",children:"Descripción:"}),e("input",{type:"textarea",id:"descripcion",name:"descripcion",value:o.descripcion,className:"form-control",placeholder:"Descripción",onChange:s})]})})]}),a("div",{className:"modal-footer",children:[e("input",{type:"submit",value:"Actualizar",className:"btn btn-info"}),e("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:d,children:"Cerrar"})]})]})})})})]})})},k=l=>{console.log(l.openCreateModal),console.log(l);const{handleSearch:d}=l,{data:o,setData:c,post:m,processing:u,reset:N,errors:r}=f({nombre:null,valor:null,dias:null,tiempo:null,descripcion:null,periodo:null,valor_cuenta_adicional:null,estado:null}),s=n=>{c({...o,[n.target.name]:n.target.value})},h=n=>{n.preventDefault(),m(route("planes.store"),{onSuccess:()=>d()})};return e(b,{children:l.openCreateModal&&a(b,{children:[e("div",{className:"fade modal-backdrop show"}),e("div",{className:"modal fade show",id:"modalCreate",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",style:{display:"block"},children:e("div",{className:"modal-dialog",children:e("div",{className:"modal-content",children:a("form",{className:"form",onSubmit:h,children:[a("div",{className:"modal-header",children:[e("h5",{className:"modal-title",id:"exampleModalLabel",children:"Crear Plan"}),e("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close",onClick:d})]}),a("div",{className:"modal-body",children:[a("div",{className:"row",children:[e("div",{className:"col-6",children:a("div",{className:"form-group",children:[e("p",{className:"text-left",children:"Nombre Plan:"}),e("input",{type:"text",id:"nombre",name:"nombre",className:"form-control",placeholder:"Nombre",onChange:s})]})}),e("div",{className:"col-6",children:a("div",{className:"form-group",children:[e("p",{className:"text-left",children:"Valor:"}),e("input",{type:"number",id:"valor",name:"valor",className:"form-control",placeholder:"Valor",onChange:s}),e(i,{message:r.valor,className:"text-left mb-2"})]})})]}),a("div",{className:"row",children:[e("div",{className:"col-6",children:a("div",{className:"form-group",children:[e("p",{className:"text-left",children:"Días:"}),e("input",{type:"number",id:"dias",name:"dias",className:"form-control",placeholder:"Días",onChange:s}),e(i,{message:r.dias,className:"text-left mb-2"})]})}),e("div",{className:"col-6",children:a("div",{className:"form-group",children:[e("p",{className:"text-left",children:"Valor cuenta adicional:"}),e("input",{type:"number",id:"valor_cuenta_adicional",name:"valor_cuenta_adicional",className:"form-control",placeholder:"Valor",onChange:s}),e(i,{message:r.valor_cuenta_adicional,className:"text-left mb-2"})]})})]}),a("div",{className:"d-flex mb-1",children:[e("p",{className:"text-left",children:"Tiempo de plan:"}),e("p",{className:"text-left px-2",children:"Días:"}),e("input",{type:"radio",name:"periodo",value:"dias",onChange:s}),e("p",{className:"text-left px-2",children:"Meses:"}),e("input",{type:"radio",name:"periodo",value:"meses",onChange:s}),e(i,{message:r.periodo,className:"text-left mb-2"})]}),e("div",{className:"row",children:a("div",{className:"form-group",children:[e("input",{type:"number",id:"tiempo",name:"tiempo",className:"form-control",onChange:s}),e(i,{message:r.tiempo,className:"text-left mb-2"})]})}),e("div",{className:"row",children:a("div",{className:"form-group",children:[e("p",{className:"text-left",children:"Descripción:"}),e("input",{type:"textarea",id:"descripcion",name:"descripcion",className:"form-control",placeholder:"Descripción",onChange:s})]})})]}),a("div",{className:"modal-footer",children:[e("input",{type:"submit",value:"Crear",className:"btn btn-info"}),e("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:d,children:"Cerrar"})]})]})})})})]})})},I=l=>{const{handleSearch:d}=l;return a(b,{children:[e("div",{className:"fade modal-backdrop show"}),e("div",{className:"modal fade show",id:"deleteModal"+l.planData.id,tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",style:{display:"block"},children:e("div",{className:"modal-dialog",children:a("div",{className:"modal-content",children:[a("div",{className:"modal-header",children:[e("h5",{className:"modal-title",id:"exampleModalLabel",children:"Eliminar Plan"}),e("button",{type:"button",className:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close",onClick:d})]}),e("div",{className:"modal-body",children:e("div",{className:"row",children:e("div",{className:"col-12",children:a("h6",{children:["¿Quieres eliminar el plan ",l.planData.nombre," ?"]})})})}),a("div",{className:"modal-footer",children:[e(v,{href:route("planes.destroy",l.planData),method:"delete",as:"button",className:"btn btn-danger",children:"Eliminar"}),e("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",onClick:d,children:"Cerrar"})]})]})})})]})},F=({auth:l,planes:d})=>{f({planes:d});const[o,c]=p.exports.useState(!1),[m,u]=p.exports.useState(!1),[N,r]=p.exports.useState(0),[s,h]=p.exports.useState(!1),[n,x]=p.exports.useState(0),y=t=>{u(!0),r(t.id)},C=t=>{h(!0),x(t.id)},g=t=>{c(!1),u(!1),h(!1)};return a(w,{auth:l,children:[e(D,{title:"Planes"}),a("div",{className:"contenedor-planes",children:[e("div",{className:"posicion-opciones-planes",children:e(M,{})}),a("div",{className:"bg-white overflow-auto w-full text-center margen-superior",children:[e("h2",{className:"name_section_app",children:"Planes"}),e("div",{className:"planes",children:a("div",{className:"contenedor-botones",children:[e("a",{className:"autorenew",href:"javascript:location.reload()",children:e("span",{className:"material-symbols-outlined",children:"autorenew"})}),a("a",{className:"crear",onClick:()=>{c(!0)},children:[e("i",{className:"bi bi-plus-lg"})," Crear"]}),o&&e(k,{openCreateModal:o,handleSearch:g})]})}),a("table",{className:"w-full bg-white border tabla ",children:[e("thead",{className:"cabecera-tabla ",style:{backgroundColor:"#00a1c9"},children:a("tr",{className:"bg-paginador text-white uppercase leading-normal",children:[e("th",{children:"IdPlan"}),e("th",{children:"Nombre"}),e("th",{children:"Días"}),e("th",{children:"Tiempo"}),e("th",{children:"Valor"}),e("th",{children:"Descripción"}),e("th",{children:"Estado"}),e("th",{children:"Activar/Inactivar"}),e("th",{children:"Editar"}),e("th",{children:"Eliminar"})]})}),e("tbody",{children:d.map(t=>a("tr",{children:[e("td",{className:"border border-gray-200 margen-textos",children:t.id}),e("td",{className:"border border-gray-200 margen-textos",children:t.nombre}),e("td",{className:"border border-gray-200 margen-textos",children:t.dias}),e("td",{className:"border border-gray-200 margen-textos",children:t.tiempo}),e("td",{className:"border border-gray-200 margen-textos",children:t.valor}),e("td",{className:"border border-gray-200 margen-textos",children:t.descripcion}),e("td",{className:"border border-gray-200 margen-textos",children:t.estado}),e("td",{className:"border border-gray-200 margen-textos",children:t.estado=="Activo"?e(v,{href:route("planes.status",t.id),children:e("img",{src:"/public/icons/multicolor/toggle-on.svg",alt:"",className:"m-auto"})}):e(v,{href:route("planes.status",t.id),children:e("img",{src:"/public/icons/multicolor/toggle-off.svg",alt:"",className:"m-auto"})})}),a("td",{className:"border border-gray-200 margen-textos",children:[e("button",{type:"button",className:"btn btn-info btn-sm","data-bs-toggle":"modal","data-bs-target":"#updateModal"+t.id,onClick:()=>{y(t)},children:e("span",{className:"text-white material-symbols-outlined iconos-tamano-margen align-middle",children:"edit"})}),m&&N==t.id&&e(_,{planData:t,openUpdateModal:m,handleSearch:g})]}),a("td",{className:"border border-gray-200 margen-textos",children:[e("button",{type:"button",className:"btn btn-danger btn-sm","data-bs-toggle":"modal","data-bs-target":"#deleteModal"+t.id,onClick:()=>{C(t)},children:e("span",{className:"text-white material-symbols-outlined iconos-tamano-margen align-middle",children:"delete"})}),s&&n==t.id&&e(I,{planData:t,openDeleteModal:s,handleSearch:g})]})]},t.id))})]})]})]})]})};export{F as default};
