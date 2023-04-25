import{r as s,j as a,a as e,F as m}from"./app-4d7437c9.js";import{A as U}from"./AuthenticatedLayout-df169fb5.js";/* empty css                      */import{M as g}from"./Nav-ecfcbe42.js";import{R as K}from"./ResumenPerfil-835aaa1e.js";import"./estilos-toast-379c0d87.js";import{F as t,f as J,g as d,h as X}from"./primeicons-6caf5333.js";import{g as Y,O as Z}from"./OverlayTrigger-0a4f0f2c.js";import{e as ee,k as ae,f as le}from"./hasClass-40687063.js";import"./InputError-2fb26b10.js";import"./mergeOptionsWithPopperConfig-dad71812.js";import"./module-b9134782.js";import"./Button-b49cb882.js";/* empty css                 */import"./Accordion-29dd887f.js";import"./Collapse-6a8102a7.js";const ie={placement:"right"},S=s.exports.forwardRef(({bsPrefix:p,placement:_,className:b,style:r,children:v,arrowProps:N,popper:h,show:k,...f},n)=>{p=ee(p,"tooltip");const i=ae(),[u]=(_==null?void 0:_.split("-"))||[],x=Y(u,i);return a("div",{ref:n,style:r,role:"tooltip","x-placement":u,className:le(b,p,`bs-tooltip-${x}`),...f,children:[e("div",{className:"tooltip-arrow",...N}),e("div",{className:`${p}-inner`,children:v})]})});S.defaultProps=ie;S.displayName="Tooltip";const oe=S;const Ce=({auth:p,grupos:_,created_updated:b})=>{const[r,v]=s.exports.useState({}),[N,h]=s.exports.useState(1);s.exports.useState(!0);const[k,f]=s.exports.useState(b),n=()=>f(!1),[i,u]=s.exports.useState(b?"modalCreateSuccess":""),x=(l,o)=>{u(l),f(!0),v(o)},[E,w]=s.exports.useState(!1),[D,F]=s.exports.useState([]),I=()=>{n(),axios.get(`/cliente/grupo/subcategorias/${r.id}`).then(l=>{F(l.data)}).catch(l=>{console.log(l)}),w(!0)},A=()=>{u("modalInformacionPerfil"),f(!0),w(!1)},y=s.exports.useRef(null),$=()=>{y.current&&y.current.reset()},C=l=>[...l||[]].map(o=>(o.envio_alertas==1?o.envio_alertas="Si":o.envio_alertas="No",o)),[P,T]=s.exports.useState(C(_)),[j,se]=s.exports.useState({global:{value:null,matchMode:t.CONTAINS},nombre_filtro:{value:null,matchMode:t.STARTS_WITH},descripcion_filtro:{value:null,matchMode:t.STARTS_WITH},limite_inferior_cuantia:{value:null,matchMode:t.STARTS_WITH},limite_superior_cuantia:{value:null,matchMode:t.STARTS_WITH},historico:{value:null,matchMode:t.CONTAINS},envio_alertas:{value:null,matchMode:t.EQUALS},status:{value:null,matchMode:t.EQUALS}}),[B,re]=s.exports.useState(!1),[L]=s.exports.useState(["No","Si"]),H=l=>a(m,{children:[e("div",{class:"columna_nombre--content-img",children:e("div",{class:"columna_nombre--img",children:e("img",{src:`${l.imagen_filtro}`})})}),e("span",{children:l.nombre_filtro})]}),[V,ne]=s.exports.useState([{name:"editar",text:"Editar perfil",icon:"icon-Editar icon-pd-editar",modal:"modalEditarPerfil"},{name:"eliminar",text:"Eliminar perfil",icon:"icon-Eliminar icon-pd-eliminar",modal:"modalEliminarPerfil"},{name:"duplicar",text:"Duplicar perfil",icon:"icon-Duplicar icon-pd-duplicar",modal:"modalDuplicarPerfil"},{name:"leidos",text:"Marcar como leídos",icon:"icon-Leidos icon-pd-leidos",modal:"modalLeidosPerfil"},{name:"info",text:"Ver más información",icon:"icon-Informacin-click icon-pd-info",modal:"modalInformacionPerfil"}]),O=l=>e("div",{className:"iconos_functions_grid",children:V.map((o,c)=>e(Z,{rootClose:!0,overlay:e(oe,{id:`tooltip-${o.name}-${l.id}`,className:`tooltip tooltip-${o.name}`,children:o.text}),children:e("button",{type:"button",id:`${o.name}-btn${l.id}`,className:`${o.icon}`,onClick:()=>x(o.modal,l)})},c))}),W=l=>e(X,{value:l.value,options:L,onChange:o=>l.filterApplyCallback(o.value),placeholder:"Seleccionar Notificaciones",className:"p-column-filter",showEditModalClear:!0}),z=l=>e("div",{className:"VueTables__selecciones-filter-wrapper",children:e("span",{children:e("div",{className:"selecciones-nuevo-diseno",children:a("button",{id:"limpiar",type:"button",className:"icon-Limpiar-click borrador-grid",onClick:$,children:[e("span",{className:"path1"}),e("span",{className:"path2"}),e("span",{className:"path3"}),e("span",{className:"path4"}),e("span",{className:"path5"}),e("span",{className:"path6"}),e("span",{className:"path7"}),e("span",{className:"path8"})]})})})}),q=s.exports.useRef(""),[M,R]=s.exports.useState(r.nombre_filtro);s.exports.useEffect(()=>{i=="modalDuplicarPerfil"&&(console.log("cargo modal"),R(r.nombre_filtro))},[k]);const Q=()=>{var l={perfil:r.id,nombre_filtro:M},o=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/grupo/duplicar",{data:l},{headers:{Authorization:`Bearer ${o.content}`}}).then(c=>{T(C(c.data)),n()}).catch(c=>{console.log(c)})},G=()=>{var l={perfil:r.id},o=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/grupo/destroy",{data:l},{headers:{Authorization:`Bearer ${o.content}`}}).then(c=>{T(C(c.data)),n()}).catch(c=>{console.log(c)})};return e(m,{children:a(U,{auth:p,page:"grupos",children:[a("div",{className:"content_blank_interno margin_left_layout",children:[P.length>0&&e("div",{className:"col",children:e("h2",{className:"name_seccion_app",children:"Administrar perfil (es) de negocio"})}),e("div",{className:"col",children:e("div",{id:"perfil-list",className:"",children:P.length>0?a("div",{className:"tablescoop position-relative tablebordeada",children:[e("div",{className:"cargando_tables",style:{display:"none"},children:a("div",{className:"col",children:[e("img",{src:"https://col.licitaciones.info/img/loading.gif",className:"img-col"}),e("p",{children:"Cargando"})]})}),e("div",{className:"befor_table"}),a("div",{className:"VueTables VueTables--server",children:[e("div",{className:"row",children:a("div",{className:"col-md-12",children:[e("div",{className:"form-group form-inline float-left VueTables__search"}),e("div",{className:"form-group form-inline float-right VueTables__limit",children:e("div",{className:"m-0 w-100",children:a("div",{className:"text-left reloadTable row",style:{margin:0+"px !important;"},children:[a("div",{id:"top-botones",className:"mb-2 mb-lg-0",children:[e("a",{role:"button"}),a("a",{href:"/cliente/grupo/crear",role:"button",className:"btn btn-new-green btnRadius",children:[e("span",{className:"icon-Crear volver_icon"})," Crear perfil "]})]}),e("div",{className:"col-12 col-lg-7 col-xl-6 p-0 paginacion_grid text-center text-lg-right "})]})})})]})}),e("div",{className:"table-responsive",children:a(J,{ref:y,value:P,paginator:!0,rows:10,dataKey:"id",filters:j,filterDisplay:"row",loading:B,globalFilterFields:["name","representative.name","status"],emptyMessage:"No se encontraron registros",children:[e(d,{style:{maxWidth:600+"px"},filter:!0,className:"columna_seleccion columna_pequena",filterElement:z}),e(d,{field:"nombre_filtro",body:H,header:"Nombre",filter:!0,filterPlaceholder:"Buscar",className:"columna_nombre"}),e(d,{field:"descripcion_filtro",header:"Descripción",filter:!0,filterPlaceholder:"Buscar",className:"columna_grande"}),e(d,{field:"limite_inferior_cuantia",header:"Cuantia inferior",filter:!0,filterPlaceholder:"Buscar",className:"columna_promedio"}),e(d,{field:"limite_superior_cuantia",header:"Cuantia superior",filter:!0,filterPlaceholder:"Buscar",className:"columna_promedio"}),e(d,{field:"historico",header:"Histórico",filter:!0,filterPlaceholder:"Buscar",className:"columna_promedio"}),e(d,{field:"envio_alertas",header:"Notificaciones",showFilterMenu:!1,filter:!0,filterElement:W,className:"columna_notificaciones"}),e(d,{body:O,filter:!0,className:"v-hidden columna_acciones"})]})}),e("div",{className:"paginacion_grid"})]})]}):e("div",{id:"mensajes-personalizado-sin-perfil",class:"content_blank_interno",children:a("div",{class:"row  align-items-center",children:[e("div",{class:"col-md-5 text-center",children:e("img",{src:"https://col.licitaciones.info/img/mensajes-personalisados/sin-perfil.png",alt:"",class:"img-fluid"})}),a("div",{class:"col-md-6 offset-md-1",children:[e("h4",{class:"text-center titulo-personalizado",children:"Aún no has creado un perfil de negocio."}),a("div",{class:"d-flex align-items-center justify-content-center",children:[e("span",{class:"icon-Bombillo d-block mensaje-icono"}),e("p",{class:"mensaje-personalizado text-justify",children:"Crea un perfil basado en las oportunidades  más adecuadas para tu negocio."})]}),a("div",{class:"justify-content-center aling-items-center mt-5 d-flex m-auto",children:[a("a",{href:"/cliente/grupo/crear",class:"btn btn-new-green btnRadius",children:[e("i",{class:"icon-Datos-adicionales mr-2"}),"Crear tu primer perfil"]}),e("br",{})]})]})]})})})})]}),a(g,{show:k,onHide:n,animation:!0,id:i,centered:!0,children:[a(g.Header,{children:[i=="modalEditarPerfil"&&a("h4",{class:"modal-title title-dinamico",children:["¿ Qué paso(s) desea(s) ",e("span",{children:"editar"})," en tu perfil ?"]}),i=="modalEliminarPerfil"&&a("h4",{class:"modal-title",children:["¿Deseas ",e("b",{class:"text-rojo",children:"eliminar"})," el perfil de negocio?"]}),i=="modalDuplicarPerfil"&&a("h4",{class:"modal-title texto-dinamico",children:["¿Deseas ",e("span",{class:"color-blue",children:"duplicar"})," el perfil de negocio?"]}),i=="modalLeidosPerfil"&&e("h4",{class:"modal-title",children:"¿Deseas marcar como leídos los procesos de este perfil?"}),i=="modalInformacionPerfil"&&e("h4",{class:"modal-title",children:"Información general"}),i=="modalCreateSuccess"&&a(m,{children:[e("div",{class:"modal-save__img",children:e("img",{src:"https://col.licitaciones.info/img/usuario/perfiles/perfil-creado.png"})}),e("h4",{class:"modal-title",children:"Estamos configurando tu perfil de negocio."})]}),a("button",{type:"button","aria-label":"Close",class:"close icon-Cerrar-modal icon-Cerrar-modal-click",onClick:n,children:[e("span",{class:"path1"}),e("span",{class:"path2"})]})]}),a(g.Body,{children:[i=="modalEditarPerfil"&&a("div",{children:[e("label",{className:"perfil-checks",children:a("div",{className:"centrador",children:[e("i",{className:"perfil-checks__iconos icon-Paso-1-click"}),e("span",{className:"perfil-checks__title",children:"Editar actividad económica"}),e("input",{type:"radio",name:"radio",onChange:()=>h(1),checked:N==1}),e("span",{className:"perfil-checks__mark"})]})}),e("label",{className:"perfil-checks",children:a("div",{className:"centrador",children:[e("i",{className:"perfil-checks__iconos icon-Paso-2-click"}),e("span",{className:"perfil-checks__title",children:"Editar modalidad"}),e("input",{type:"radio",name:"radio",onChange:()=>h(2)}),e("span",{className:"perfil-checks__mark"})]})}),e("label",{className:"perfil-checks",children:a("div",{className:"centrador",children:[e("i",{className:"perfil-checks__iconos icon-Paso-3-click"}),e("span",{className:"perfil-checks__title",children:"Editar ubicación"}),e("input",{type:"radio",name:"radio",onChange:()=>h(3)}),e("span",{className:"perfil-checks__mark"})]})}),e("label",{className:"perfil-checks",children:a("div",{className:"centrador",children:[e("i",{className:"perfil-checks__iconos icon-Paso-4-click"}),e("span",{className:"perfil-checks__title",children:"Editar rangos de cuantía"}),e("input",{type:"radio",name:"radio",onChange:()=>h(4)}),e("span",{className:"perfil-checks__mark"})]})}),e("label",{className:"perfil-checks",children:a("div",{className:"centrador",children:[e("i",{className:"perfil-checks__iconos icon-Paso-5-click"}),e("span",{className:"perfil-checks__title",children:"Preferencias del perfil"}),e("input",{type:"radio",name:"radio",onChange:()=>h(5)}),e("span",{className:"perfil-checks__mark"})]})}),e("label",{className:"perfil-checks"})]}),i=="modalEliminarPerfil"&&a(m,{children:[e("p",{class:"modal-message",children:"Al aceptar esto el perfil se eliminará junto con el siguiente contenido, el cuál no se podrá recuperar:"}),e("hr",{}),a("div",{id:"modal-perfil",class:"d-flex",children:[a("div",{class:"info-sub principal",children:[e("h5",{children:"Información del perfil"}),a("div",{class:"contenedor",children:[e("img",{src:r.imagen_filtro,id:"img-perfil"}),e("span",{class:"nombreWeb",children:r.nombre_filtro})]})]}),a("div",{class:"info-sub secundario",children:[e("h5",{children:"Procesos almacenados"}),e("p",{class:"text-rojo",children:"0"})]})]})]}),i=="modalDuplicarPerfil"&&a("div",{class:"form-group modal-duplicar__input",children:[e("label",{class:"modal_save--label",children:" Dale un nombre a tu nuevo perfil:"}),e("input",{ref:q,type:"text",name:"nombre_duplicado",class:"form-control inputs_form padd-peq",value:M,onChange:l=>R(l.target.value)})]}),i=="modalLeidosPerfil"&&a("p",{class:"modal-message",children:["Todos los procesos contenidos en este perfil se marcarán como ",e("span",{class:"text-color",children:"leídos"}),"."]}),i=="modalInformacionPerfil"&&a(m,{children:[a("div",{className:"row modal-info__inicio text-center pb-3",children:[e("div",{className:"modal-info__logo",children:e("img",{src:r.imagen_filtro})}),e("div",{className:"modal-info__nombre",children:e("label",{children:r.nombre_filtro})})]}),a("div",{className:"row py-4",children:[e("div",{className:"col-7 col-md-6 modal-info__info",children:e("label",{children:"Fecha de creación:"})}),e("div",{className:"col-5 col-md-6 modal-info__info text-right",children:e("div",{className:"modal-info__data my-1",children:e("span",{children:new Date(r.created_at).toLocaleDateString("en-GB")})})}),e("div",{className:"col-5 modal-info__info",children:e("label",{children:"Número de actividades económicas:"})}),e("div",{className:"col-7 ml-auto modal-info__info text-right row",children:a("div",{className:"modal-info_tags",children:[e("img",{src:"https://col.licitaciones.info/img/filtros/asesorias.svg",className:"modal-info__icon"}),e("p",{className:"modal-info__counter",children:"0"})]})}),e("div",{className:"col-7 col-md-6 modal-info__info",children:e("label",{children:"Número de procesos contenidos:"})}),e("div",{className:"col-5 col-md-6 modal-info__info text-right",children:a("div",{className:"modal-info__data my-1",children:[e("span",{className:"modal-info__data--green",children:"0"})," ",e("span",{children:"procesos"})]})}),e("div",{className:"col-7 col-md-6 modal-info__info",children:e("label",{children:"Procesos no leídos:"})}),e("div",{className:"col-5 col-md-6 modal-info__info text-right",children:a("div",{className:"modal-info__data my-1",children:[e("span",{className:"modal-info__data--blue",children:"0"})," ",e("span",{children:"procesos"})]})}),e("div",{className:"col-7 col-md-6 modal-info__info mb-0",children:e("label",{children:"Procesos eliminados:"})}),e("div",{className:"col-5 col-md-6 modal-info__info text-right",children:a("div",{className:"modal-info__data my-1",children:[e("span",{className:"modal-info__data--red",children:"0"})," ",e("span",{children:"procesos"})]})})]})]}),i=="modalCreateSuccess"&&e("div",{children:e("label",{class:"modal-save__label",children:" Este proceso dependerá de la complejidad del perfil, te notificaremos por medio de la campana cuando todo este listo."})})]}),a(g.Footer,{children:[i=="modalEditarPerfil"&&a("div",{children:[e("button",{class:"btnRadius btn-new-gray",onClick:n,children:"Atrás"}),e("a",{href:`/cliente/grupo/editar/${r.id}?paso=${N}`,class:"btnRadius btn-new-blue",children:"Editar perfil"})]}),i=="modalEliminarPerfil"&&e("button",{class:"btnRadius btn-new-danger",onClick:G,children:"Eliminar"}),i=="modalDuplicarPerfil"&&a(m,{children:[e("button",{class:"btnRadius btn-new-green",onClick:Q,children:"Duplicar"}),e("button",{class:"btnRadius btn-new-danger",onClick:n,children:"Cancelar"})]}),i=="modalLeidosPerfil"&&a(m,{children:[e("button",{class:"btnRadius btn-action btn-new-danger",onClick:n,children:"Cancelar"}),e("button",{class:"btnRadius btn-new-green",children:"Marcar"})]}),i=="modalInformacionPerfil"&&a("button",{class:"btnRadius btn-new-blue",onClick:I,children:[e("i",{class:"icon-Resumen"}),"Ver resumen"]}),i=="modalCreateSuccess"&&e("button",{class:"btnRadius btn-new-green",onClick:n,children:"Entendido"})]})]}),e(K,{showModal:E,handleCloseModal:A,data:D})]})})};export{Ce as default};
