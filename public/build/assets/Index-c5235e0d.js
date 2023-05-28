import{r as o,a as e,F as m,j as a}from"./app-5c306434.js";import{F as n,A as U}from"./AuthenticatedLayout-fb975d45.js";/* empty css                      */import{M as u}from"./Nav-2921513b.js";import{R as K}from"./ResumenPerfil-fc2a97dc.js";import"./estilos-toast-f2250066.js";import{D as J,C as t,a as X}from"./column.esm-4bf43698.js";import"./InputError-602d54ec.js";import"./hasClass-c3f45eb9.js";import"./mergeOptionsWithPopperConfig-3a0086e3.js";import"./module-7b18ef87.js";import"./Button-ab8e0b8a.js";/* empty css                 */import"./Accordion-e263e594.js";import"./Collapse-d035a281.js";const ue=({auth:M,grupos:v,created_updated:k})=>{const[r,R]=o.exports.useState({}),[x,h]=o.exports.useState(1);o.exports.useState(!0);const[C,_]=o.exports.useState(k),c=()=>_(!1),[i,P]=o.exports.useState(k?"modalCreateSuccess":""),f=(l,s)=>{P(l),_(!0),R(s)},[T,S]=o.exports.useState(!1),[D,I]=o.exports.useState([]),F=()=>{p(!0),c(),axios.get(`/cliente/grupo/subcategorias/${r.id}`).then(l=>{I(l.data),p(!1)}).catch(l=>{console.log(l)}),S(!0)},A=()=>{P("modalInformacionPerfil"),_(!0),S(!1)},N=o.exports.useRef(null),B=()=>{N.current&&N.current.reset()},b=l=>[...l||[]].map(s=>(s.envio_alertas==1?s.envio_alertas="Si":s.envio_alertas="No",s)),[g,y]=o.exports.useState(b(v)),[j,Y]=o.exports.useState({global:{value:null,matchMode:n.CONTAINS},nombre_filtro:{value:null,matchMode:n.STARTS_WITH},descripcion_filtro:{value:null,matchMode:n.STARTS_WITH},limite_inferior_cuantia:{value:null,matchMode:n.STARTS_WITH},limite_superior_cuantia:{value:null,matchMode:n.STARTS_WITH},historico:{value:null,matchMode:n.CONTAINS},envio_alertas:{value:null,matchMode:n.EQUALS},status:{value:null,matchMode:n.EQUALS}}),[L,Z]=o.exports.useState(!1),[V]=o.exports.useState(["No","Si"]),H=l=>a(m,{children:[e("div",{class:"columna_nombre--content-img",children:e("div",{class:"columna_nombre--img",children:e("img",{src:`${l.imagen_filtro}`})})}),e("span",{children:l.nombre_filtro})]});o.exports.useState([{name:"editar",text:"Editar perfil",icon:"icon-Editar icon-pd-editar",modal:"modalEditarPerfil"},{name:"eliminar",text:"Eliminar perfil",icon:"icon-Eliminar icon-pd-eliminar",modal:"modalEliminarPerfil"},{name:"duplicar",text:"Duplicar perfil",icon:"icon-Duplicar icon-pd-duplicar",modal:"modalDuplicarPerfil"},{name:"leidos",text:"Marcar como leídos",icon:"icon-Leidos icon-pd-leidos",modal:"modalLeidosPerfil"},{name:"info",text:"Ver más información",icon:"icon-Informacin-click icon-pd-info",modal:"modalInformacionPerfil"}]);const $=l=>a("div",{className:"iconos_functions_grid",children:[e("div",{className:"custom-tooltip light-blue","data-tooltip":"Editar perfil",children:e("a",{id:"tlpBorrarNota",className:"icon-Editar icon-pd-editar",onClick:()=>f("modalEditarPerfil",l)})}),e("div",{className:"custom-tooltip red","data-tooltip":"Eliminar perfil",children:e("a",{id:"tlpBorrarNota",className:"icon-Eliminar icon-pd-eliminar",onClick:()=>f("modalEliminarPerfil",l)})}),e("div",{className:"custom-tooltip dark-blue","data-tooltip":"Duplicar perfil",children:e("a",{id:"tlpBorrarNota",className:"icon-Duplicar icon-pd-duplicar",onClick:()=>f("modalDuplicarPerfil",l)})}),e("div",{className:"custom-tooltip aquamarine-blue","data-tooltip":"Marcar como leídos",children:e("a",{id:"tlpBorrarNota",className:"icon-Leidos icon-pd-leidos",onClick:()=>f("modalLeidosPerfil",l)})}),e("div",{className:"custom-tooltip green ver-mas-informacion","data-tooltip":"Ver más información",children:e("a",{id:"tlpBorrarNota",className:"icon-Informacin-click icon-pd-info",onClick:()=>f("modalInformacionPerfil",l)})})]}),z=l=>e(X,{value:l.value,options:V,onChange:s=>l.filterApplyCallback(s.value),placeholder:"Seleccionar Notificaciones",className:"p-column-filter",showEditModalClear:!0}),W=l=>e("div",{className:"VueTables__selecciones-filter-wrapper",children:e("span",{children:e("div",{className:"selecciones-nuevo-diseno",children:a("button",{id:"limpiar",type:"button",className:"icon-Limpiar-click borrador-grid",onClick:B,children:[e("span",{className:"path1"}),e("span",{className:"path2"}),e("span",{className:"path3"}),e("span",{className:"path4"}),e("span",{className:"path5"}),e("span",{className:"path6"}),e("span",{className:"path7"}),e("span",{className:"path8"})]})})})}),q=o.exports.useRef(""),[w,E]=o.exports.useState(r.nombre_filtro);o.exports.useEffect(()=>{i=="modalDuplicarPerfil"&&(console.log("cargo modal"),E(r.nombre_filtro))},[C]);const G=()=>{p(!0);var l={perfil:r.id,nombre_filtro:w},s=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/grupo/duplicar",{data:l},{headers:{Authorization:`Bearer ${s.content}`}}).then(d=>{y(b(d.data)),c(),p(!1)}).catch(d=>{console.log(d)})},O=()=>{p(!0);var l={perfil:r.id},s=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/grupo/destroy",{data:l},{headers:{Authorization:`Bearer ${s.content}`}}).then(d=>{y(b(d.data)),c(),p(!1)}).catch(d=>{console.log(d)})},[Q,p]=o.exports.useState(!1);return e(m,{children:a(U,{auth:M,page:"grupos",grupos:v,globalLoading:Q,children:[a("div",{className:"content_blank_interno margin_left_layout",children:[g.length>0&&e("div",{className:"col",children:e("h2",{className:"name_seccion_app",children:"Administrar perfil (es) de negocio"})}),e("div",{className:"col",children:e("div",{id:"perfil-list",className:"",children:g.length>0?a("div",{className:"tablescoop position-relative tablebordeada",children:[e("div",{className:"cargando_tables",style:{display:"none"},children:a("div",{className:"col",children:[e("img",{src:"https://col.licitaciones.info/img/loading.gif",className:"img-col"}),e("p",{children:"Cargando"})]})}),e("div",{className:"befor_table"}),a("div",{className:"VueTables VueTables--server",children:[e("div",{className:"row",children:a("div",{className:"col-md-12",children:[e("div",{className:"form-group form-inline float-left VueTables__search"}),e("div",{className:"form-group form-inline float-right VueTables__limit",children:e("div",{className:"m-0 w-100",children:a("div",{className:"text-left reloadTable row",style:{margin:0+"px !important;"},children:[a("div",{id:"top-botones",className:"mb-2 mb-lg-0",children:[e("a",{role:"button"}),a("a",{href:"/cliente/grupo/crear",role:"button",className:"btn btn-new-green btnRadius",children:[e("span",{className:"icon-Crear volver_icon"})," Crear perfil "]})]}),e("div",{className:"col-12 col-lg-7 col-xl-6 p-0 paginacion_grid text-center text-lg-right "})]})})})]})}),e("div",{className:"table-responsive",children:a(J,{ref:N,value:g,paginator:!0,rows:10,dataKey:"id",filters:j,filterDisplay:"row",loading:L,globalFilterFields:["name","representative.name","status"],emptyMessage:"No se encontraron registros",children:[e(t,{style:{maxWidth:600+"px"},filter:!0,className:"columna_seleccion columna_pequena",filterElement:W}),e(t,{field:"nombre_filtro",body:H,header:"Nombre",filter:!0,filterPlaceholder:"Buscar",className:"columna_nombre"}),e(t,{field:"descripcion_filtro",header:"Descripción",filter:!0,filterPlaceholder:"Buscar",className:"columna_grande"}),e(t,{field:"limite_inferior_cuantia",header:"Cuantia inferior",filter:!0,filterPlaceholder:"Buscar",className:"columna_promedio"}),e(t,{field:"limite_superior_cuantia",header:"Cuantia superior",filter:!0,filterPlaceholder:"Buscar",className:"columna_promedio"}),e(t,{field:"historico",header:"Histórico",filter:!0,filterPlaceholder:"Buscar",className:"columna_promedio"}),e(t,{field:"envio_alertas",header:"Notificaciones",showFilterMenu:!1,filter:!0,filterElement:z,className:"columna_notificaciones"}),e(t,{body:$,filter:!0,className:"v-hidden columna_acciones"})]})}),e("div",{className:"paginacion_grid"})]})]}):e("div",{id:"mensajes-personalizado-sin-perfil",class:"content_blank_interno",children:a("div",{class:"row  align-items-center",children:[e("div",{class:"col-md-5 text-center",children:e("img",{src:"/public/images/mensajes-personalizados/sin-perfil.png",alt:"",class:"img-fluid"})}),a("div",{class:"col-md-6 offset-md-1",children:[e("h4",{class:"text-center titulo-personalizado",children:"Aún no has creado un perfil de negocio."}),a("div",{class:"d-flex align-items-center justify-content-center",children:[e("span",{class:"icon-Bombillo d-block mensaje-icono"}),e("p",{class:"mensaje-personalizado text-justify",children:"Crea un perfil basado en las oportunidades  más adecuadas para tu negocio."})]}),a("div",{class:"justify-content-center aling-items-center mt-5 d-flex m-auto",children:[a("a",{href:"/cliente/grupo/crear",class:"btn btn-new-green btnRadius",children:[e("i",{class:"icon-Datos-adicionales mr-2"}),"Crear tu primer perfil"]}),e("br",{})]})]})]})})})})]}),a(u,{show:C,onHide:c,animation:!0,id:i,centered:!0,children:[a(u.Header,{children:[i=="modalEditarPerfil"&&a("h4",{class:"modal-title title-dinamico",children:["¿ Qué paso(s) desea(s) ",e("span",{children:"editar"})," en tu perfil ?"]}),i=="modalEliminarPerfil"&&a("h4",{class:"modal-title",children:["¿Deseas ",e("b",{class:"text-rojo",children:"eliminar"})," el perfil de negocio?"]}),i=="modalDuplicarPerfil"&&a("h4",{class:"modal-title texto-dinamico",children:["¿Deseas ",e("span",{class:"color-blue",children:"duplicar"})," el perfil de negocio?"]}),i=="modalLeidosPerfil"&&e("h4",{class:"modal-title",children:"¿Deseas marcar como leídos los procesos de este perfil?"}),i=="modalInformacionPerfil"&&e("h4",{class:"modal-title",children:"Información general"}),i=="modalCreateSuccess"&&a(m,{children:[e("div",{class:"modal-save__img",children:e("img",{src:"https://col.licitaciones.info/img/usuario/perfiles/perfil-creado.png"})}),e("h4",{class:"modal-title",children:"Estamos configurando tu perfil de negocio."})]}),a("button",{type:"button","aria-label":"Close",class:"close icon-Cerrar-modal icon-Cerrar-modal-click",onClick:c,children:[e("span",{class:"path1"}),e("span",{class:"path2"})]})]}),a(u.Body,{children:[i=="modalEditarPerfil"&&a("div",{children:[e("label",{className:"perfil-checks",children:a("div",{className:"centrador",children:[e("i",{className:"perfil-checks__iconos icon-Paso-1-click"}),e("span",{className:"perfil-checks__title",children:"Editar actividad económica"}),e("input",{type:"radio",name:"radio",onChange:()=>h(1),checked:x==1}),e("span",{className:"perfil-checks__mark"})]})}),e("label",{className:"perfil-checks",children:a("div",{className:"centrador",children:[e("i",{className:"perfil-checks__iconos icon-Paso-2-click"}),e("span",{className:"perfil-checks__title",children:"Editar modalidad"}),e("input",{type:"radio",name:"radio",onChange:()=>h(2)}),e("span",{className:"perfil-checks__mark"})]})}),e("label",{className:"perfil-checks",children:a("div",{className:"centrador",children:[e("i",{className:"perfil-checks__iconos icon-Paso-3-click"}),e("span",{className:"perfil-checks__title",children:"Editar ubicación"}),e("input",{type:"radio",name:"radio",onChange:()=>h(3)}),e("span",{className:"perfil-checks__mark"})]})}),e("label",{className:"perfil-checks",children:a("div",{className:"centrador",children:[e("i",{className:"perfil-checks__iconos icon-Paso-4-click"}),e("span",{className:"perfil-checks__title",children:"Editar rangos de cuantía"}),e("input",{type:"radio",name:"radio",onChange:()=>h(4)}),e("span",{className:"perfil-checks__mark"})]})}),e("label",{className:"perfil-checks",children:a("div",{className:"centrador",children:[e("i",{className:"perfil-checks__iconos icon-Paso-5-click"}),e("span",{className:"perfil-checks__title",children:"Preferencias del perfil"}),e("input",{type:"radio",name:"radio",onChange:()=>h(5)}),e("span",{className:"perfil-checks__mark"})]})}),e("label",{className:"perfil-checks"})]}),i=="modalEliminarPerfil"&&a(m,{children:[e("p",{class:"modal-message",children:"Al aceptar esto el perfil se eliminará junto con el siguiente contenido, el cuál no se podrá recuperar:"}),e("hr",{}),a("div",{id:"modal-perfil",class:"d-flex",children:[a("div",{class:"info-sub principal",children:[e("h5",{children:"Información del perfil"}),a("div",{class:"contenedor",children:[e("img",{src:r.imagen_filtro,id:"img-perfil"}),e("span",{class:"nombreWeb",children:r.nombre_filtro})]})]}),a("div",{class:"info-sub secundario",children:[e("h5",{children:"Procesos almacenados"}),e("p",{class:"text-rojo",children:"0"})]})]})]}),i=="modalDuplicarPerfil"&&a("div",{class:"form-group modal-duplicar__input",children:[e("label",{class:"modal_save--label",children:" Dale un nombre a tu nuevo perfil:"}),e("input",{ref:q,type:"text",name:"nombre_duplicado",class:"form-control inputs_form padd-peq",value:w,onChange:l=>E(l.target.value)})]}),i=="modalLeidosPerfil"&&a("p",{class:"modal-message",children:["Todos los procesos contenidos en este perfil se marcarán como ",e("span",{class:"text-color",children:"leídos"}),"."]}),i=="modalInformacionPerfil"&&a(m,{children:[a("div",{className:"row modal-info__inicio text-center pb-3",children:[e("div",{className:"modal-info__logo",children:e("img",{src:r.imagen_filtro})}),e("div",{className:"modal-info__nombre",children:e("label",{children:r.nombre_filtro})})]}),a("div",{className:"row py-4",children:[e("div",{className:"col-7 col-md-6 modal-info__info",children:e("label",{children:"Fecha de creación:"})}),e("div",{className:"col-5 col-md-6 modal-info__info text-right",children:e("div",{className:"modal-info__data my-1",children:e("span",{children:new Date(r.created_at).toLocaleDateString("en-GB")})})}),e("div",{className:"col-5 modal-info__info",children:e("label",{children:"Número de actividades económicas:"})}),e("div",{className:"col-7 ml-auto modal-info__info text-right row",children:a("div",{className:"modal-info_tags",children:[e("img",{src:"https://col.licitaciones.info/img/filtros/asesorias.svg",className:"modal-info__icon"}),e("p",{className:"modal-info__counter",children:"0"})]})}),e("div",{className:"col-7 col-md-6 modal-info__info",children:e("label",{children:"Número de procesos contenidos:"})}),e("div",{className:"col-5 col-md-6 modal-info__info text-right",children:a("div",{className:"modal-info__data my-1",children:[e("span",{className:"modal-info__data--green",children:"0"})," ",e("span",{children:"procesos"})]})}),e("div",{className:"col-7 col-md-6 modal-info__info",children:e("label",{children:"Procesos no leídos:"})}),e("div",{className:"col-5 col-md-6 modal-info__info text-right",children:a("div",{className:"modal-info__data my-1",children:[e("span",{className:"modal-info__data--blue",children:"0"})," ",e("span",{children:"procesos"})]})}),e("div",{className:"col-7 col-md-6 modal-info__info mb-0",children:e("label",{children:"Procesos eliminados:"})}),e("div",{className:"col-5 col-md-6 modal-info__info text-right",children:a("div",{className:"modal-info__data my-1",children:[e("span",{className:"modal-info__data--red",children:"0"})," ",e("span",{children:"procesos"})]})})]})]}),i=="modalCreateSuccess"&&e("div",{children:e("label",{class:"modal-save__label",children:" Este proceso dependerá de la complejidad del perfil, te notificaremos por medio de la campana cuando todo este listo."})})]}),a(u.Footer,{children:[i=="modalEditarPerfil"&&a("div",{children:[e("button",{class:"btnRadius btn-new-gray",onClick:c,children:"Atrás"}),e("a",{href:`/cliente/grupo/editar/${r.id}?paso=${x}`,class:"btnRadius btn-new-blue",children:"Editar perfil"})]}),i=="modalEliminarPerfil"&&e("button",{class:"btnRadius btn-new-danger",onClick:O,children:"Eliminar"}),i=="modalDuplicarPerfil"&&a(m,{children:[e("button",{class:"btnRadius btn-new-green",onClick:G,children:"Duplicar"}),e("button",{class:"btnRadius btn-new-danger",onClick:c,children:"Cancelar"})]}),i=="modalLeidosPerfil"&&a(m,{children:[e("button",{class:"btnRadius btn-action btn-new-danger",onClick:c,children:"Cancelar"}),e("button",{class:"btnRadius btn-new-green",children:"Marcar"})]}),i=="modalInformacionPerfil"&&a("button",{class:"btnRadius btn-new-blue",onClick:F,children:[e("i",{class:"icon-Resumen"}),"Ver resumen"]}),i=="modalCreateSuccess"&&e("button",{class:"btnRadius btn-new-green",onClick:c,children:"Entendido"})]})]}),e(K,{showModal:T,handleCloseModal:A,data:D})]})})};export{ue as default};
