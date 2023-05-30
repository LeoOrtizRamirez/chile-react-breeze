import{r as l,j as a,F as I,a as e,d as ge}from"./app-672ed625.js";import{D as ve,a as _e,P as xe,T as ae,C as ke,A as ye}from"./AuthenticatedLayout-ab5373cb.js";import{S as Ce,M as Se}from"./ModalDocumentos-2c05cd13.js";import{M as T}from"./Nav-2d9c613c.js";import"./InputError-c773467a.js";import"./hasClass-2185f97f.js";import"./mergeOptionsWithPopperConfig-660233e4.js";import"./module-4de62953.js";import"./Button-7ed0fa65.js";/* empty css                      *//* empty css                 */const we=({contrato:F,zona:D,isOpen:L,onHide:P,onChangeSideBarTotalNotas:c,globalLoading:_})=>{const[A,u]=l.exports.useState([]),[C,H]=l.exports.useState(!1),[b,N]=l.exports.useState(!1),[g,v]=l.exports.useState(!1),[t,S]=l.exports.useState(null),[G,K]=l.exports.useState(!1),V=()=>{S(!1),m(""),x("")};l.exports.useEffect(()=>{if(L){H(!1),u([]),N(!0);var i=document.querySelector('meta[name="csrf-token"]');axios.get("/cliente/notas/get-notes?idContrato="+F.id,{headers:{Authorization:`Bearer ${i}`}}).then(o=>{u(o.data),N(!1)}).catch(o=>{console.error("Request failed:",o.response.status,o.response.data)})}},[L]);const E=l.exports.useRef(),B=l.exports.useRef(),[q,m]=l.exports.useState(""),[f,x]=l.exports.useState(""),[k,y]=l.exports.useState({}),z=i=>{if(S(i.id),JSON.stringify(i)===JSON.stringify(k)){if(G)return}else y(i),m(i.text),x(i.title)},O=()=>{K(!0),m(""),x("")},R=()=>{E.current.value="",B.current.value=""},[W,X]=l.exports.useState(""),Y=(i,o=!1)=>{if((i==null?void 0:i.key)==="Enter"||o){o&&X(""),N(!0);let p=document.querySelector('meta[name="csrf-token"]'),M=o?"":W;axios.get("/cliente/notas/get-notes?idContrato="+F.id+"&search="+M,{headers:{Authorization:`Bearer ${p}`}}).then(w=>{H(!0),u(w.data),N(!1)}).catch(w=>{console.error("Request failed:",w.response.status,w.response.data)})}},Q=()=>{if(B.current.value==""){j.current.show({severity:"error",summary:"Debes ingresar un título para la nota!",life:3e3});return}if(E.current.value==""){j.current.show({severity:"error",summary:"Debes ingresar un contenido para la nota!",life:3e3});return}_(!0);var i=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/notas/admin-note",{idContrato:F.id,pinned:0,text:E.current.value,title:B.current.value,zona:D},{Authorization:`Bearer ${i}`}).then(o=>{u(o.data),c(o.data.length),v(!1),E.current.value="",B.current.value="",_(!1),j.current.show({severity:"success",summary:"Nota creada con éxito",life:3e3})}).catch(o=>{console.log(o),j.current.show({severity:"error",summary:o,life:1e4})})},te=i=>{_(!0);var o=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/notas/actualizar",{id:i,idContrato:F.id,pinned:0,text:q,title:f,zona:D},{Authorization:`Bearer ${o}`}).then(p=>{u(p.data),S(!1),m(""),x(""),_(!1),j.current.show({severity:"success",summary:"La nota ha sido actualizada",life:3e3})}).catch(p=>{console.log(p)})},Z=i=>{_(!0);var o=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/notas/eliminar",{idContrato:F.id,id:i},{Authorization:`Bearer ${o}`}).then(p=>{u(p.data),c(p.data.length),_(!1),j.current.show({severity:"error",summary:"La nota ha sido eliminada",life:3e3})}).catch(p=>{console.log(p)})},ee=(i,o,p)=>{const M=[...i],[w]=M.splice(o,1);return M.splice(p,0,w),M},J=(i=new Date)=>{const o=new Date(i).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}).replace(/^(\d{1}):/,"0$1:").replace(/(\s+)([aApP][mM])$/,"$1$2"),p=new Date().toLocaleDateString("en-US");return new Date(i).toLocaleDateString("en-US")===p?`Hoy ${o}`:new Date(i).toLocaleDateString("en-US")},j=l.exports.useRef(null);return a(I,{children:[e(Ce,{id:"sidebar-notes",visible:L,position:"right",onHide:()=>P(),children:a("div",{className:"b-sidebar-body notes-content",children:[b&&e("div",{id:"notasCarganos",className:"notasCargando",children:e("img",{src:"https://col.licitaciones.info/img/loading.gif",className:"loader-notas"})}),a("div",{className:"wrapper",children:[e("a",{className:"close-sidebar icon-Flujo",onClick:()=>P()}),e("div",{className:"notes-content__header",children:e("h4",{children:"Mis notas"})}),a("div",{className:`notes-content__create ${g?"on-creating":""}`,onClick:()=>v(!0),children:[a("div",{className:"notes-header",children:[g&&e("div",{className:"notes-title",children:e("input",{ref:B,onClick:()=>v(!0),placeholder:"Escribe un título aquí.",type:"text",className:"noteTitle","aria-required":"true","aria-invalid":"true"})}),a("div",{className:`notes-opts ${g?"on-expand":""}`,children:[e("span",{id:"timeNota",className:"icon-Hora text-fecha",children:e("span",{className:"text-fecha__hora",children:J()})}),e("div",{className:"custom-tooltip red","data-tooltip":"Borrar contenido",children:e("a",{id:"tlpBorrarNota",className:"icon-Limpiar-click",onClick:R})})]})]}),e("div",{className:"textarea-container",children:e("textarea",{ref:E,onClick:()=>v(!0),name:"note",id:"note",placeholder:"Crear una nota",className:"mt-2"})}),g&&e("div",{className:"button-create-container",children:e("button",{className:"button-create btn-new-green btnRadius",onClick:Q,children:"Crear nota"})})]}),A.length>0||C?a("div",{className:"notes-content__zone",children:[e("div",{className:"notes-content__zone-input-search",children:e("div",{className:"form-group",children:a("div",{className:"input-container",children:[e("input",{onClick:()=>v(!1),onChange:i=>X(i.target.value),onKeyDown:Y,value:W,type:"text",placeholder:"Buscar nota"}),e("span",{onClick:i=>Y(i,!0),className:"icon-Cancelar",style:{display:W==""?"none":"unset"}}),e("span",{className:"icon-Buscar-click"})]})})}),e("div",{className:"notes-content__zone-list-notes",children:e(ve,{onDragEnd:i=>{const{source:o,destination:p}=i;if(!p||o.index===p.index&&o.droppableId===p.droppableId)return;u(U=>ee(U,o.index,p.index));let M=ee(A,o.index,p.index);var w=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/notas/ordenar-notas",{notas:M},{Authorization:`Bearer ${w}`}).then(U=>{}).catch(U=>{console.log(U)})},children:e(_e,{droppableId:"notas",children:i=>a("ul",{...i.droppableProps,ref:i.innerRef,className:"nota-container",children:[e("div",{children:A.map((o,p)=>e(xe,{draggableId:`nota_${o.id}`,index:p,children:M=>a("li",{...M.draggableProps,ref:M.innerRef,...M.dragHandleProps,className:`note ${t==o.id?"on-edit":""}`,children:[t==o.id&&e("div",{className:"note-header-opts",children:a("div",{className:"controls",children:[e("a",{className:"icon-Limpiar-click",onClick:()=>O()}),e("a",{className:"hover-icon icon-Eliminar",onClick:()=>Z(o.id)}),e("span",{id:"timeNota",className:"icon-Hora text-fecha",children:e("span",{className:"text-fecha__hora",children:J(o.created_at)})})]})}),a("div",{className:"note-data",children:[e("div",{className:"note-icon",children:e("img",{src:"https://col.licitaciones.info/img/notas/note_icon.svg",alt:"Nota icon"})}),e("div",{className:"note-description",onClick:()=>z(o),children:t==o.id?a(I,{children:[e("input",{placeholder:"Agrega un título",type:"text",className:"onEditTitleNote","aria-required":"true","aria-invalid":"false",value:f,onChange:w=>x(w.target.value)}),e("textarea",{placeholder:"Agrega una descripción",className:"onEditNote",style:{height:26+"px"},value:q,onChange:w=>m(w.target.value)})]}):a(I,{children:[a("div",{className:"notes-drag",children:[e("span",{className:"note-description__title",children:o.title}),e("div",{className:"notes-opts",children:e("span",{id:"timeNota",className:"icon-Hora text-fecha",children:e("span",{className:"text-fecha__hora",children:J(o.created_at)})})})]}),e("p",{className:"note-descrition__body",children:o.text})]})})]}),t==o.id?e("div",{className:"note-actions",children:a("div",{className:"manual-controls",children:[a("a",{className:"btn-new-green btnRadius",draggable:"false",href:"#!",onClick:()=>te(o.id),children:[e("i",{className:"icon-Check"}),e("span",{children:"Guardar"})]}),a("a",{href:"#!",className:"btn-new-danger btnRadius",onClick:()=>V(),children:[e("i",{className:"icon-Cancelar"})," ",e("span",{children:"Descartar"})]})]})}):e("div",{className:"note-actions",children:e("div",{className:"direct-access-controls",children:e("a",{className:"hover-icon icon-Eliminar",onClick:()=>Z(o.id)})})})]})},o.id))}),i.placeholder,a("div",{className:"infinite-loading-container",children:[e("div",{className:"infinite-status-prompt",style:{color:"rgb(102, 102, 102)",fontSize:14+"px",padding:10+"px 0px",display:"none"},children:e("i",{"data-v-46b20d22":"",className:"loading-default"})}),e("div",{className:"infinite-status-prompt",children:e("div",{className:"infinite--no-data",children:"No hay más notas"})}),e("div",{className:"infinite-status-prompt",style:{display:"none"},children:e("span",{className:"infinite--no-data",children:"No hay más notas"})}),a("div",{className:"infinite-status-prompt",style:{color:"rgb(102, 102, 102)",fontSize:14+"px",padding:10+"px 0px",display:"none"},children:["Opps, something went wrong :(",e("br",{}),e("button",{className:"btn-try-infinite",children:"Retry"})]})]})]})})})})]}):e("div",{children:a("div",{className:"workspace text-center",children:[e("div",{className:"workspace__image",children:e("img",{src:"https://col.licitaciones.info/img/notas/workspace.png",alt:"Nota Workspace"})}),e("p",{className:"workspace__copy",children:"No has creado tu primera nota."})]})})]})]})}),e(ae,{ref:j,position:"bottom-left"})]})};const De=({title:F,handleCloseModal:D,modalId:L,showModal:P,contrato:c,onHandleContrato:_,globalLoading:A})=>{const[u,C]=l.exports.useState(!0),H=N=>{A(!0);var g=[];N.length==null?g=[N]:g=N.filter(t=>checksContratos.includes(t.id));var v=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/contratos/delete_favorito",{contratos:g},{Authorization:`Bearer ${v}`}).then(t=>{t.data.status==1&&(c={...c,favorito:!1},_(c)),A(!1),D(),b.current.show({severity:"success",summary:"Has eliminado el proceso de tus favoritos",life:3e3})}).catch(t=>{console.log(t)})},b=l.exports.useRef(null);return a(I,{children:[a(T,{show:P,onHide:D,id:L,centered:!0,children:[a(T.Header,{children:[e("h4",{className:"modal-title",dangerouslySetInnerHTML:{__html:F}}),e("button",{type:"button","aria-label":"Close",className:"close icon-Cerrar-modal",onClick:D})]}),e(T.Body,{children:a(I,{children:[e("div",{className:"descripcion_delete",children:e("p",{children:"Al aceptar esto el proceso se eliminará junto con el siguiente contenido:"})}),e("div",{className:"informacion_contratos",children:a("table",{className:"w-100",children:[a("thead",{className:"informacion_contratos--cabeceras",children:[e("th",{className:"columna_informacion",children:e("span",{children:"Información del proceso"})}),e("th",{className:"columna_icono",children:u?e("span",{children:"Favoritos"}):e("span",{children:"Carpeta"})})]}),e("tbody",{children:c.length==null?a("tr",{className:"informacion_contratos--listado",children:[e("td",{className:"informacion_contratos--contrato_info columna_informacion",children:a("div",{children:[e("i",{id:"iconFuente-8119752",className:"icono_fuente__list",style:{background:"rgb(0, 61, 201)"},children:"MP"}),a("div",{className:"informacion_contratos--contrato_nombre",children:[e("b",{children:c.entidad_contratante}),e("br",{}),e("span",{children:c.objeto})]})]})}),e("td",{className:"informacion_contratos--icono columna_icono",children:u?e("img",{src:"https://col.licitaciones.info/img/listado/quitar_favoritos.svg"}):a("span",{children:[a("span",{className:"icon-Mis-carpetas",style:{color:carpeta_actual==null?void 0:carpeta_actual.color},children:[e("span",{className:"path1"}),e("span",{className:"path2"})]}),carpeta_actual==null?void 0:carpeta_actual.nombre_carpeta]})})]}):e(I,{children:selectedContratos.map((N,g)=>a("tr",{className:"informacion_contratos--listado borde",children:[e("td",{className:"informacion_contratos--contrato_info columna_informacion",children:a("div",{children:[e("div",{className:"checkbox informacion_contratos--contrato_check",children:e("input",{type:"checkbox",id:"checkboxPerfil0",className:"input_perfil_val",value:N.id,checked:!!checksContratos.includes(N.id),onChange:handleChecksContratos,name:"remove_favoritos"})}),e("i",{id:"iconFuente-8119752",className:"icono_fuente__list",style:{background:"rgb(0, 61, 201)"},children:"MP"}),a("div",{className:"informacion_contratos--contrato_nombre",children:[e("b",{children:N.entidad_contratante}),e("br",{}),e("span",{children:N.objeto})]})]})}),e("td",{className:"informacion_contratos--icono columna_icono",children:u?e("img",{src:"https://col.licitaciones.info/img/listado/quitar_favoritos.svg"}):a("span",{children:[a("span",{className:"icon-Mis-carpetas",style:{color:carpeta_actual==null?void 0:carpeta_actual.color},children:[e("span",{className:"path1"}),e("span",{className:"path2"})]}),carpeta_actual==null?void 0:carpeta_actual.nombre_carpeta]})})]}))})})]})})]})}),e(T.Footer,{children:e(I,{children:u?e("button",{className:"btnRadius btn-action btn-new-danger",onClick:()=>H(c),children:"Eliminar"}):e("button",{className:"btnRadius btn-action btn-new-danger",onClick:()=>deleteContrato(carpeta_actual==null?void 0:carpeta_actual.id,c),children:"Eliminar"})})})]}),e(ae,{ref:b,position:"bottom-left"})]})};const Me=({title:F=null,handleCloseModal:D,modalId:L,showModal:P,contrato:c,folders:_,onHandleContrato:A,onHandleFolders:u,globalLoading:C})=>{const[H,b]=l.exports.useState(!1),N=()=>{b(!0)},g=()=>{V(null),b(!1)},[v,t]=l.exports.useState([]),S=(m,f)=>{if(m.target.checked)v.includes(f)||t([...v,f]);else{const x=v.filter(k=>k!==f);t(x)}},G=()=>{C(!0);var m=document.querySelector('meta[name="csrf-token"]'),f=[];c.length==null?f=[c]:f=c,axios.post("/cliente/carpeta/add-contrato",{contratos:f,carpetas:v},{Authorization:`Bearer ${m}`}).then(x=>{if(x.data.status==1){const k=c.carpetas_ids,y=c.carpetas;v.forEach(z=>{if(k.includes(z)||k.push(z),!y.includes(z)){const O=_.filter(R=>R.id==z)[0];y.push(O)}}),c={...c,carpetas_ids:k},c={...c,carpetas:y},A(c)}C(!1),D(),q.current.show({severity:"success",summary:"Has agregado el proceso de contratación a tus carpetas.",life:3e3})}).catch(x=>{console.log(x)})},[K,V]=l.exports.useState([]),E=m=>{u(m),b(!1)},B=(m,f)=>{C(!0);var x=[];f.length==null?x=[f]:f.forEach(y=>{x.push(y.id)});var k=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/carpeta/delete-contrato",{contratos:x,carpeta:m},{Authorization:`Bearer ${k}`}).then(y=>{if(y.data.status==1){console.log("old",c);const z=c.carpetas_ids.filter(R=>R!=m),O=c.carpetas.filter(R=>R.id!=m);c={...c,carpetas_ids:z},c={...c,carpetas:O},console.log("current",c),A(c)}C(!1),D(),q.current.show({severity:"success",summary:"Has eliminado el proceso de contratación de tus carpetas",life:3e3})}).catch(y=>{console.log(y)})},q=l.exports.useRef(null);return a(I,{children:[a(T,{show:P,onHide:D,id:L,centered:!0,children:[a(T.Header,{children:[_.length==0?e("h4",{className:"modal-title",children:"Aún no tienes carpetas creadas"}):e("h4",{className:"modal-title",children:"Selecciona carpeta(s) destino"}),e("button",{type:"button","aria-label":"Close",className:"close icon-Cerrar-modal",onClick:D})]}),e(T.Body,{children:e("div",{className:"contenedor_carpetas_seleccion",children:_.length==0?a("div",{id:"mensajes-sin-carpetas",className:"container content_blank_intern",children:[e("img",{src:"/public/images/mensajes-personalizados/sin-carpetas-modal.svg",alt:"",className:"imagen-sin-carpetas"}),e("p",{children:"Añade tu primer carpeta"})]}):e("div",{className:"carpetas_list_seleccion",children:e("ul",{className:"row scroll_fit",children:_.map(m=>a("li",{className:"align-items-center col-md-3 col-sm-4 col-xs-12 d-flex selected_carpeta",children:[e("span",{className:"body_checkbox",children:c.length==null?e(I,{children:c.carpetas_ids.includes(m.id)?a("div",{className:"checkbox",style:{margin:0+"px"},onClick:()=>B(m.id,c.id),children:[e("i",{className:"align-items-center cr-icon d-flex fa fa-times justify-content-center quitar_carpeta"}),a("label",{children:[e("input",{type:"checkbox",name:"carpeta_mover",value:"22101"}),e("span",{className:"cr",children:e("i",{className:"cr-icon fa fa-check"})})]})]}):e("input",{type:"checkbox",id:"carpeta_mover",name:"carpeta_mover",className:"input_perfil_val",value:m.id,onClick:f=>S(f,m.id)})}):e("input",{type:"checkbox",id:"carpeta_mover",name:"carpeta_mover",className:"input_perfil_val",value:m.id,onClick:f=>S(f,m.id)})}),a("div",{className:"body_icono_carpeta",children:[a("span",{title:"Carpeta 1",className:"ico-carpeta icon-Mis-carpetas",style:{color:m.color},children:[e("span",{className:"path1"}),e("span",{className:"path2"})]}),e("span",{title:"Carpeta 1",className:"title_icono_carpeta",children:m.nombre_carpeta})]})]},`carpeta_${m.id}`))})})})}),e(T.Footer,{children:a("div",{className:"actions-buttons-modal buttons-modal-carpetas",children:[e("button",{type:"button",className:"btn-new-green btnRadius text-center",onClick:N,children:"Crear carpeta"}),e("button",{type:"button",className:"btn-new-blue btnRadius text-center disable_button",disabled:v.length==0,onClick:G,children:"Guardar en"})]})})]}),e(ke,{showModal:H,handleCloseModal:g,carpeta:K,other_page:!0,handleCarpetas:E,globalLoading:C}),e(ae,{ref:q,position:"bottom-left"})]})},Pe=({auth:F,carpetas:D,contratos:L,index:P,current_url:c,query:_,current_page:A,zona:u="ALL"})=>{const[C,H]=l.exports.useState(parseInt(A)),[b,N]=l.exports.useState(L),[g,v]=l.exports.useState(P),[t,S]=l.exports.useState(b.data[g]),[G,K]=l.exports.useState([]),[V,E]=l.exports.useState(!1),B=n=>{b.from+n>b.to?(H(C+1),q(c,C+1,"next")):n==-1?(H(C-1),q(c,C-1,"prev")):(v(n),S(b.data[n]))},q=(n,s,r)=>{k(!0);var h=document.querySelector('meta[name="csrf-token"]');axios.post(n,{query:_,page:s,per_page:30},{Authorization:`Bearer ${h}`}).then(d=>{N(d.data),r=="prev"?(v(29),S(d.data.data[29])):(v(0),S(d.data.data[0])),k(!1)}).catch(d=>{console.log(d)})},[m,f]=l.exports.useState(D),[x,k]=l.exports.useState(!1),y=n=>{k(n)};var z=document.querySelector('meta[name="csrf-token"]');l.exports.useEffect(()=>{axios.post("/contrato-visitado",{contrato:t.id},{Authorization:`Bearer ${z}`}).then(n=>{}).catch(n=>{console.log(n)}),le(t.id)},[t]);const[O,R]=l.exports.useState(!1),W=()=>{R(!1)},X=n=>{let s=t;s={...s,notas:!0},s={...s,total_notas:n},S(s),N(r=>{const h=r.data.findIndex(d=>d.id===t.id);if(h===-1)return{...r};{let d=[...r.data];return d[h]={...d[h],notas:!0},d[h]={...d[h],total_notas:n},{...r,data:d}}})},[Y,Q]=l.exports.useState(!1),te=()=>Q(!1),Z=(n,s=null,r=!1)=>{Q(!0)},[ee,J]=l.exports.useState(!1),j=()=>J(!1),i=(n,s=null,r=!1)=>{J(!0)},o=l.exports.useRef(null),p=n=>{S(n),N(s=>{const r=s.data.findIndex(h=>h.id===t.id);if(r===-1)return{...s};{let h=[...s.data];return h[r]=n,{...s,data:h}}})},M=n=>{k(!0);var s=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/contratos/add_favorito",{contrato:n},{Authorization:`Bearer ${s}`}).then(r=>{S({...t,favorito:!0}),N(h=>{const d=h.data.findIndex($=>$.id===t.id);if(d===-1)return{...h};{let $=[...h.data];return $[d]={...$[d],favorito:!0},{...h,data:$}}}),k(!1),o.current.show({severity:"success",summary:"Has agregado el proceso de contratación a tus favoritos.",life:3e3})}).catch(r=>{console.log(r)})},w=n=>{f(n)},U=n=>{window.open(n,"_blank")},re=()=>{delete _.type,ge.Inertia.post(c,{query:_,page:C,per_page:30},{headers:{Authorization:`Bearer ${z.content}`}})},de=n=>{const s=document.querySelector('meta[name="csrf-token"]').getAttribute("content");fetch("/cliente/contratos/descargar-documentos",{method:"POST",body:JSON.stringify({documento:n}),headers:{"Content-Type":"application/json","X-CSRF-TOKEN":s},responseType:"blob"}).then(r=>r.blob()).then(r=>{const h=window.URL.createObjectURL(new Blob([r])),d=document.createElement("a");d.href=h,d.target="_blank",d.setAttribute("download",n.namedoc),document.body.appendChild(d),d.click()}).catch(r=>{console.error("There was a problem with the Fetch request:",r)})},[me,oe]=l.exports.useState([]),[pe,se]=l.exports.useState(!1),he=()=>{oe([]),se(!1)},ue=n=>{oe(n),se(!0)},Ne=n=>{var s=document.createElement("input");s.setAttribute("value",document.getElementById(n).innerHTML),document.body.appendChild(s),s.select(),document.execCommand("copy"),document.body.removeChild(s),o.current.show({severity:"success",summary:"Enlace copiado",life:3e3})},ce=n=>{const s=new Date(n),r=s.getFullYear(),h=(s.getMonth()+1).toString().padStart(2,"0"),d=s.getDate().toString().padStart(2,"0"),$=(s.getHours()-7).toString().padStart(2,"0"),ne=s.getMinutes().toString().padStart(2,"0"),be=s.getSeconds().toString().padStart(2,"0");return`${r}-${h}-${d} ${$}:${ne}:${be}`},ie=n=>{const s=new Date;console.log("currentDate",s);const r=new Date(n);console.log("updated",r);const h=s.getTime()-r.getTime(),d=Math.floor(h/1e3/60),$=Math.floor(d/60),ne=Math.floor($/24);return console.log(h,d,$,ne),!($>2)},fe=n=>{console.log("contrato",n),E(!0);var s=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/contratos/dispatch-actualizacion-proceso",{link:n.link},{Authorization:`Bearer ${s}`}).then(r=>{le(n.id),console.log(r.data),E(!1),S(r.data)}).catch(r=>{console.log(r)})},le=n=>{axios.post("/cliente/contratos/documentos",{contrato_id:n},{Authorization:`Bearer ${z}`}).then(s=>{K(s.data)}).catch(s=>{console.log(s)})};return a(ye,{auth:F,page:"detalle-contratos",globalLoading:x,children:[e("div",{className:"content_not_blank_interno",children:e("div",{id:"bodycontenido",className:"col contratos_row px-0",children:a("div",{className:"detalle-contrato-padre",admin:"",perfiles:"258772,258771,258618,258619,258487","init-filter":"",children:[e("div",{className:"contenedor-cabeceras",style:{position:"sticky",top:48+"px"},children:a("div",{className:"indicadores-detalle pt-3 row align-items-center mx-1",children:[e("div",{className:"col-4",children:a("button",{type:"button",className:"btn volver btn-new-gray btnRadius",onClick:re,children:[e("span",{className:"icon-atras volver_icon"}),u=="ALL"&&e("span",{className:"volver_text",children:" Regresar a todos los contratos"}),u=="C"&&e("span",{className:"volver_text",children:" Regresar a mis carpetas"}),u=="MP"&&e("span",{className:"volver_text",children:" Regresar a mis perfiles"}),u=="F"&&e("span",{className:"volver_text",children:" Regresar a mis favoritos"}),u=="S"&&e("span",{className:"volver_text",children:" Regresar a mis seguimientos"}),u=="P"&&e("span",{className:"volver_text",children:" Regresar a papelera"})]})}),e("div",{className:"col-4",children:a("p",{className:"mb-0 h-100 text-center",children:[a("span",{className:"contador-de-contratos",children:["Contrato ",g+b.from," de ",b.total]}),g+b.from>1&&e("button",{type:"button",className:"btn bg-transparent cambio-contrato",onClick:()=>B(g-1),children:e("span",{className:"icon-atras"})}),g+b.from<=b.total-1&&e("button",{type:"button",className:"btn bg-transparent cambio-contrato",onClick:()=>B(g+1),children:e("span",{className:"icon-Siguiente1"})})]})}),a("div",{id:"contenido_acciones",className:"col-4 pr-0 text-right iconos_acciones_contratos",children:[!ie(t.updated_at)&&e("button",{id:"botonActualizarManual",type:"button",className:"btn bg-transparent",children:e("img",{src:"https://col.licitaciones.info/img/detalle-contrato/svg/proceso-manual-cargar.svg",width:"22",height:"22"})}),t.favorito?e("div",{className:"custom-tooltip yellow","data-tooltip":"Eliminar De Favoritos",children:e("button",{id:"btnContratosFavorito",type:"button",className:"btn bg-transparent",onClick:()=>Z("modal_seleccion_carpeta",t),children:e("span",{className:"icon-Favorito-click favorito_active"})})}):e("div",{className:"custom-tooltip yellow","data-tooltip":"Agregar A Favoritos",children:e("button",{id:"btnContratosFavorito",type:"button",className:"btn bg-transparent",onClick:()=>M(t.id),children:e("span",{className:"icon-Favorito-click"})})}),e("button",{id:"boton_sin_seguimiento",type:"button",className:"btn bg-transparent",style:{display:"none"},children:e("img",{src:"https://col.licitaciones.info/img/detalle-contrato/svg/Sin-seguimiento.svg",width:"22",height:"22"})}),e("div",{className:"custom-tooltip green","data-tooltip":"Agregar A Seguimientos",children:e("button",{id:"btnContratosSeguimiento",type:"button",className:"btn bg-transparent",children:e("span",{className:"icon-Seguimientos"})})}),e("div",{className:"custom-tooltip blue","data-tooltip":"Agregar A Carpeta(S)",onClick:()=>i("modal_seleccion_carpeta",t),children:e("button",{id:"btnContratosCarpeta",type:"button",className:"btn bg-transparent",children:a("span",{className:"icon-Mis-carpetas",children:[e("span",{className:"path1"}),e("span",{className:"path2"})]})})}),!1,e("div",{className:"custom-tooltip dark","data-tooltip":"Ir A La Fuente",children:e("button",{onClick:()=>U(t.link),id:"btnContratosExternal",type:"button",className:"btn bg-transparent",children:e("span",{className:"icon-Ir-a-la-fuente-click"})})}),e("div",{className:"custom-tooltip purple","data-tooltip":"Compartir",children:e("button",{id:"btnContratosCompartir",type:"button",className:"btn bg-transparent",children:e("span",{className:"icon-Compartir-click"})})}),e("div",{className:"separador d-inline-block mx-2"}),e("div",{className:"custom-tooltip gray agregar-nota","data-tooltip":"Agregar Nota",children:a("button",{type:"button",id:"boton_notas",className:"btn bg-transparent",onClick:()=>R(!0),children:[e("img",{src:"https://col.licitaciones.info/img/detalle-contrato/svg/Nota.svg",alt:"icono de notas",width:"25",height:"25"}),e("span",{className:"cuenta-notas",children:t.total_notas>0?t.total_notas:""})]})})]})]})}),e("div",{children:e("div",{id:"mensaje-secop-caido",children:a("div",{className:"alert alert-warning text-center alerta-new-styles",style:{display:"none"},children:[e("i",{"aria-hidden":"true",className:"fa fa-exclamation-triangle"}),e("div",{className:"content-info",children:e("p",{className:"mt-0 mb-0"})})]})})}),e("div",{id:"actualizar-secops-manual",children:V?a("div",{class:"alert alert-info actualizar-secops-manual--actualizando",children:[e("i",{"aria-hidden":"true",class:"icon-Informacin-click"}),e("div",{class:"content-info",children:e("p",{class:"mt-0 mb-0",children:"Este proceso durará pocos segundos mientras realiza la actualización de documentos y contenidos, Gracias por su espera!"})})]}):e(I,{children:ie(t.updated_at)?a("div",{className:"alert alert-success actualizar-secops-manual--actualizado",children:[e("i",{"aria-hidden":"true",className:"icon-notification icon-Notificacin-verde"}),e("div",{className:"content-info",children:a("p",{className:"mt-0 mb-0",children:["Este contrato se encuentra actualizado hasta ",ce(t.updated_at)]})})]}):a("div",{className:"alert alert-warning actualizar-secops-manual--para-actualizar",children:[e("i",{"aria-hidden":"true",className:"fa fa-exclamation-triangle"}),a("div",{className:"content-info",children:[a("p",{className:"mt-0 mb-0",children:["Este contrato se encuentra actualizado hasta: ",e("b",{className:"fechReload",children:ce(t.updated_at)})," ¿Deseas actualizarlo?"]}),e("button",{type:"button",id:"btnActualizarDetalle",className:"btn btn-warning mt-0",onClick:()=>fe(t),children:"Actualizar"})]})]})})}),e("div",{className:"contenido mx-auto mb-5",children:e("div",{className:"contenido_html",children:a("div",{role:"tablist",id:"info_detalle_full",children:[e("div",{id:"infoContrato",className:"mb-1 mt-3 bg-transparent border-0",children:e("div",{className:"card-body p-0",children:e("div",{className:"fases-borde",children:a("div",{id:"info-seccion-contrato",className:"contenido-seccion bg-white px-5",children:[a("div",{className:"informacionPrincipal",children:[a("div",{className:"info-seccion__primer_fila",children:[e("span",{className:"icon_tipo_secop d-block text-right",children:e("i",{id:"iconFuente-8153689",className:"icono_fuente__list",style:{background:"rgb(0, 61, 201)"},children:"MP"})})," ",a("span",{className:"titulo-agrupacion d-block mb-3",children:[e("i",{className:"icon-Informacin-click"}),e("p",{children:"Información general del proceso:"})]})]}),a("div",{className:"campos-detalle-contrato info-borde",children:[a("div",{className:"contenido-detalle-contrato",children:[e("b",{className:"d-block",children:"Entidad:"}),e("p",{className:"d-block info-contrato",children:t.entidad_contratante})]}),a("div",{className:"contenido-detalle-contrato",children:[e("b",{className:"d-block",children:"Modalidad:"}),e("p",{className:"d-block info-contrato",children:t.modalidad})]}),a("div",{className:"contenido-detalle-contrato",children:[e("b",{className:"d-block",children:"Número:"}),e("p",{className:"d-block info-contrato",children:t.codigo_proceso})]}),a("div",{className:"contenido-detalle-contrato",general:"[object Object]",children:[e("b",{className:"d-block",children:"Estado del proceso:"}),a("p",{className:"d-block info-contrato",children:[e("span",{className:"",style:{fontFamily:"Nexa-bold",color:"rgb(115, 201, 20)"},children:t.estado_proceso}),e("i",{className:"fa fa-spinner fa-spin actualizando-contrato-icon",style:{display:"none"}})]})]}),a("div",{className:"contenido-detalle-contrato",children:[e("b",{className:"d-block",children:"Objeto:"}),e("p",{className:"d-block info-contrato",children:t.objeto})]}),a("div",{className:"contenido-detalle-contrato",children:[e("b",{className:"d-block",children:"Presupuesto oficial:"}),a("p",{className:"d-flex info-contrato align-items-center moneda_info",children:[e("span",{className:"sin-min-width",children:"$"})," ",e("span",{style:{paddingLeft:5+"px"},children:t.valor_texto})]})]}),a("div",{className:"contenido-detalle-contrato",children:[e("b",{className:"d-block",children:"Localización:"}),e("p",{className:"d-block info-contrato",children:t.ubicacion})]})]})]}),a("div",{children:[e("div",{children:a("span",{className:"titulo-agrupacion d-block mb-3",children:[e("i",{className:"icon-Codigo"}),e("p",{children:"Clasificación:"})]})}),a("div",{className:"campos-detalle-contrato info-border",children:[a("div",{className:"contenido-detalle-contrato",children:[e("b",{className:"d-block",children:"Clasificación UNSPSC por la entidad contratante:"}),e("p",{className:"d-block info-contrato",children:`${t.unspsc_nombre==null?"":t.unspsc_nombre+" - "}  ${t.unspsc}`})]}),a("div",{className:"contenido-detalle-contrato",children:[e("b",{className:"d-block",children:"Clasificación Licitaciones.info:"}),e("p",{className:"d-block info-contrato",children:t.actividades_economicas})]})]})]}),a("div",{children:"",children:[a("span",{className:"titulo-agrupacion d-block mb-3",children:[e("i",{className:"icon-Condiciones"}),e("p",{children:"Fuentes relacionadas:"})]}),e("div",{className:"campos-detalle-contrato  info-borde",children:a("div",{className:"contenido-detalle-contrato fuente-new",children:[a("div",{className:"new-primero",children:[e("img",{src:"https://col.licitaciones.info/img/detalle-contrato/svg/Fuente-detalle.svg",width:"25px",height:"25px",alt:"",className:"d-block icon-new"}),e("b",{className:"d-block",children:"Fuente 1:"})]}),a("p",{id:"movil-link-detalle",className:"info-contrato",children:[e("a",{className:"d-inline-block new-family text-azul",id:"copy-link",onClick:()=>U(t.link),children:t.link}),a("button",{className:"btn btn-new-green btnRadius d-inline-block  boton_link_fuentes text-verde",onClick:()=>Ne("copy-link"),children:[e("i",{className:"icon-Copiar-enlace"}),"Copiar link"]})]})]})})]}),a("div",{children:"",children:[e("div",{children:a("span",{className:"titulo-agrupacion d-block mb-3",children:[e("i",{className:"icon-Doc-zip"}),e("p",{children:"Documentos del proceso:"})]})}),e("div",{className:"campos-detalle-contrato",children:a("div",{className:"contenido-detalle-contrato descargas-new",children:[a("div",{className:"new-documentos",children:[e("img",{src:"https://col.licitaciones.info/img/detalle-contrato/svg/Detalle-zip.svg",width:"25px",height:"25px",alt:"",className:"d-block icon-new"})," ",e("b",{className:"d-block",children:"Descargar todos los documentos:"})]}),a("p",{className:"d-block info-contrato boton-lateral",children:[a("span",{className:"d-inline-block new-family",children:["Este proceso contiene ",e("span",{className:"text-azul",children:t.documentos.length})," documentos."]}),a("button",{className:"btn btn-new-gray btnRadius d-inline-block descargar-ver-docs boton-lateral_posicion",onClick:()=>ue(t),children:[e("span",{className:"icon-Siguiente1"})," ",e("span",{children:"Ver docs"})]})]})]})})]})]})})})}),e("div",{className:"mb-1 mt-3 bg-transparent border-0 card-corrector",children:G.length>0&&a("div",{"data-section":"Documentos del proceso",className:"px-5 bg-white contenido-seccion",children:[e("div",{className:"contenido-detalle-contrato",children:a("span",{className:"titulo-agrupacion ",children:[e("i",{className:"icon-Documentos"}),e("p",{children:"Documentos del proceso:"})]})}),e("div",{className:"card-body",children:a("div",{className:"campos-detalle-contrato",children:[e("div",{className:"contenido-detalle-contrato",children:e("b",{style:{display:"none"},children:"Documentos:"})}),e("div",{className:"component-table-dinamyc",children:e("div",{className:"table-responsive",children:e("table",{className:"mx-auto table-campo-detalle  text-center",children:a("tbody",{children:[a("tr",{className:"table-header-detalle-contrato",children:[e("th",{children:e("div",{children:"Tipo"})}),e("th",{children:e("div",{children:"Nombre"})}),e("th",{children:e("div",{children:"Descargar"})})]}),G.map((n,s)=>a("tr",{className:`table-body-detalle-contrato ${s%2!=0?"bg-gris-claro":""}`,children:[a("td",{colSpan:"1",children:[["docx","doc"].includes(n.extension.toLowerCase())&&e("img",{src:"/public/images/extensiones/docx.svg",className:"table_icono_tipo"}),n.extension.toLowerCase()=="pdf"&&e("img",{src:"/public/images/extensiones/pdf.svg",className:"table_icono_tipo"}),n.extension.toLowerCase()=="xlsx"&&e("img",{src:"/public/images/extensiones/xlsx.svg",className:"table_icono_tipo"}),n.extension.toLowerCase()=="zip"&&e("img",{src:"/public/images/extensiones/zip.svg",className:"table_icono_tipo"}),n.extension.toLowerCase()=="rar"&&e("img",{src:"/public/images/extensiones/rar.svg",className:"table_icono_tipo"})]}),e("td",{colSpan:"1",children:n.namedoc}),e("td",{colSpan:"1",children:a("a",{onClick:()=>de(n),target:"_blank",children:[e("i",{className:"icon-Descargas-click"}),"Descargar"]})})]},`documento_${s}`))]})})})})]})})]})})]})})})]})})}),e(De,{showModal:Y,modalId:"modal_confirm_delete",handleCloseModal:te,title:'¿Deseas <span className="text_color_red">eliminar</span> el/los proceso(s) de tus favoritos?',contrato:t,globalLoading:y,onHandleContrato:p}),e(Me,{showModal:ee,modalId:"modal_seleccion_carpeta",handleCloseModal:j,title:'¿Deseas <span className="text_color_red">eliminar</span> el/los proceso(s) de tus favoritos?',globalLoading:y,onHandleContrato:p,folders:m,onHandleFolders:w,contrato:t}),e(Se,{showModal:pe,handleCloseModal:he,modalId:"modal_documentos",data:me}),e(we,{contrato:t,zona:u,isOpen:O,onHide:W,onChangeSideBarTotalNotas:X,globalLoading:y}),e(ae,{ref:o,position:"bottom-left"})]})};export{Pe as default};
