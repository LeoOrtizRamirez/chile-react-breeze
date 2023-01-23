import{r as d,a as e,j as n,F as ce,H as ie}from"./app-14b331e2.js";import{$ as se,E as re,F as le}from"./HeaderPublica-81e9bdfd.js";/* empty css                      *//* empty css                      *//* empty css              */import{u as E,c as de,d as C,e as $,T as O,m as R,S as k,f as me,F,g as pe,p as x,a as g,h as ue,i as he,M as _}from"./Navbar-11582e94.js";import{P as be}from"./Paises-05c7294f.js";import"./ApplicationLogoLici-9d3a5fb1.js";import"./TextInput-e32f1e5e.js";function M(o,a){return Array.isArray(o)?o.includes(a):o===a}const A=d.exports.createContext({});A.displayName="AccordionContext";const z=d.exports.forwardRef(({as:o="div",bsPrefix:a,className:t,children:c,eventKey:i,...s},r)=>{const{activeEventKey:p}=d.exports.useContext(A);return a=E(a,"accordion-collapse"),e(de,{ref:r,in:M(p,i),...s,className:C(t,a),children:e(o,{children:d.exports.Children.only(c)})})});z.displayName="AccordionCollapse";const D=z,w=d.exports.createContext({eventKey:""});w.displayName="AccordionItemContext";const V=d.exports.forwardRef(({as:o="div",bsPrefix:a,className:t,onEnter:c,onEntering:i,onEntered:s,onExit:r,onExiting:p,onExited:u,...b},h)=>{a=E(a,"accordion-body");const{eventKey:v}=d.exports.useContext(w);return e(D,{eventKey:v,onEnter:c,onEntering:i,onEntered:s,onExit:r,onExiting:p,onExited:u,children:e(o,{ref:h,...b,className:C(t,a)})})});V.displayName="AccordionBody";const ve=V;function fe(o,a){const{activeEventKey:t,onSelect:c,alwaysOpen:i}=d.exports.useContext(A);return s=>{let r=o===t?null:o;i&&(Array.isArray(t)?t.includes(o)?r=t.filter(p=>p!==o):r=[...t,o]:r=[o]),c==null||c(r,s),a==null||a(s)}}const U=d.exports.forwardRef(({as:o="button",bsPrefix:a,className:t,onClick:c,...i},s)=>{a=E(a,"accordion-button");const{eventKey:r}=d.exports.useContext(w),p=fe(r,c),{activeEventKey:u}=d.exports.useContext(A);return o==="button"&&(i.type="button"),e(o,{ref:s,onClick:p,...i,"aria-expanded":r===u,className:C(t,a,!M(u,r)&&"collapsed")})});U.displayName="AccordionButton";const W=U,G=d.exports.forwardRef(({as:o="h2",bsPrefix:a,className:t,children:c,onClick:i,...s},r)=>(a=E(a,"accordion-header"),e(o,{ref:r,...s,className:C(t,a),children:e(W,{onClick:i,children:c})})));G.displayName="AccordionHeader";const ge=G,Q=d.exports.forwardRef(({as:o="div",bsPrefix:a,className:t,eventKey:c,...i},s)=>{a=E(a,"accordion-item");const r=d.exports.useMemo(()=>({eventKey:c}),[c]);return e(w.Provider,{value:r,children:e(o,{ref:s,...i,className:C(t,a)})})});Q.displayName="AccordionItem";const Ne=Q,Z=d.exports.forwardRef((o,a)=>{const{as:t="div",activeKey:c,bsPrefix:i,className:s,onSelect:r,flush:p,alwaysOpen:u,...b}=$(o,{activeKey:"onSelect"}),h=E(i,"accordion"),v=d.exports.useMemo(()=>({activeEventKey:c,onSelect:r,alwaysOpen:u}),[c,r,u]);return e(A.Provider,{value:v,children:e(t,{ref:a,...b,className:C(s,h,p&&`${h}-flush`)})})});Z.displayName="Accordion";const l=Object.assign(Z,{Button:W,Collapse:D,Item:Ne,Header:ge,Body:ve});function J({children:o,in:a,mountOnEnter:t,unmountOnExit:c}){const i=d.exports.useRef(a);return d.exports.useEffect(()=>{a&&(i.current=!0)},[a]),a?o:c||!i.current&&t?null:o}const ye=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],xe=["activeKey","getControlledId","getControllerId"],Ee=["as"];function K(o,a){if(o==null)return{};var t={},c=Object.keys(o),i,s;for(s=0;s<c.length;s++)i=c[s],!(a.indexOf(i)>=0)&&(t[i]=o[i]);return t}function Y(o){let{active:a,eventKey:t,mountOnEnter:c,transition:i,unmountOnExit:s,role:r="tabpanel",onEnter:p,onEntering:u,onEntered:b,onExit:h,onExiting:v,onExited:m}=o,f=K(o,ye);const N=d.exports.useContext(O);if(!N)return[Object.assign({},f,{role:r}),{eventKey:t,isActive:a,mountOnEnter:c,transition:i,unmountOnExit:s,onEnter:p,onEntering:u,onEntered:b,onExit:h,onExiting:v,onExited:m}];const{activeKey:y,getControlledId:I,getControllerId:T}=N,P=K(N,xe),j=R(t);return[Object.assign({},f,{role:r,id:I(t),"aria-labelledby":T(t)}),{eventKey:t,isActive:a==null&&j!=null?R(y)===j:a,transition:i||P.transition,mountOnEnter:c??P.mountOnEnter,unmountOnExit:s??P.unmountOnExit,onEnter:p,onEntering:u,onEntered:b,onExit:h,onExiting:v,onExited:m}]}const X=d.exports.forwardRef((o,a)=>{let{as:t="div"}=o,c=K(o,Ee);const[i,{isActive:s,onEnter:r,onEntering:p,onEntered:u,onExit:b,onExiting:h,onExited:v,mountOnEnter:m,unmountOnExit:f,transition:N=J}]=Y(c);return e(O.Provider,{value:null,children:e(k.Provider,{value:null,children:e(N,{in:s,onEnter:r,onEntering:p,onEntered:u,onExit:b,onExiting:h,onExited:v,mountOnEnter:m,unmountOnExit:f,children:e(t,Object.assign({},i,{ref:a,hidden:!s,"aria-hidden":!s}))})})})});X.displayName="TabPanel";const S=o=>{const{id:a,generateChildId:t,onSelect:c,activeKey:i,defaultActiveKey:s,transition:r,mountOnEnter:p,unmountOnExit:u,children:b}=o,[h,v]=me(i,s,c),m=se(a),f=d.exports.useMemo(()=>t||((y,I)=>m?`${m}-${I}-${y}`:null),[m,t]),N=d.exports.useMemo(()=>({onSelect:v,activeKey:h,transition:r,mountOnEnter:p||!1,unmountOnExit:u||!1,getControlledId:y=>f(y,"tabpane"),getControllerId:y=>f(y,"tab")}),[v,h,r,p,u,f]);return e(O.Provider,{value:N,children:e(k.Provider,{value:v||null,children:b})})};S.Panel=X;function B(o){return typeof o=="boolean"?o?F:J:o}const ee=({transition:o,...a})=>e(S,{...a,transition:B(o)});ee.displayName="TabContainer";const Ce=ee,ne=pe("tab-content"),ae=d.exports.forwardRef(({bsPrefix:o,transition:a,...t},c)=>{const[{className:i,as:s="div",...r},{isActive:p,onEnter:u,onEntering:b,onEntered:h,onExit:v,onExiting:m,onExited:f,mountOnEnter:N,unmountOnExit:y,transition:I=F}]=Y({...t,transition:B(a)}),T=E(o,"tab-pane");return e(O.Provider,{value:null,children:e(k.Provider,{value:null,children:e(I,{in:p,onEnter:u,onEntering:b,onEntered:h,onExit:v,onExiting:m,onExited:f,mountOnEnter:N,unmountOnExit:y,children:e(s,{...r,ref:c,className:C(i,T,p&&"active")})})})})});ae.displayName="TabPane";const oe=ae,Ie={eventKey:x.exports.oneOfType([x.exports.string,x.exports.number]),title:x.exports.node.isRequired,disabled:x.exports.bool,tabClassName:x.exports.string,tabAttrs:x.exports.object},te=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};te.propTypes=Ie;const q=Object.assign(te,{Container:Ce,Content:ne,Pane:oe});function H(o,a){let t=0;return d.exports.Children.map(o,c=>d.exports.isValidElement(c)?a(c,t++):c)}function Ae(o,a){let t=0;d.exports.Children.forEach(o,c=>{d.exports.isValidElement(c)&&a(c,t++)})}const _e={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1};function Oe(o){let a;return Ae(o,t=>{a==null&&(a=t.props.eventKey)}),a}function we(o){const{title:a,eventKey:t,disabled:c,tabClassName:i,tabAttrs:s,id:r}=o.props;return a==null?null:e(ue,{as:"li",role:"presentation",children:e(he,{as:"button",type:"button",eventKey:t,disabled:c,id:r,className:i,...s,children:a})})}const L=o=>{const{id:a,onSelect:t,transition:c,mountOnEnter:i,unmountOnExit:s,children:r,activeKey:p=Oe(r),...u}=$(o,{activeKey:"onSelect"});return n(S,{id:a,activeKey:p,onSelect:t,transition:B(c),mountOnEnter:i,unmountOnExit:s,children:[e(g,{...u,role:"tablist",as:"ul",children:H(r,we)}),e(ne,{children:H(r,b=>{const h={...b.props};return delete h.title,delete h.disabled,delete h.tabClassName,delete h.tabAttrs,e(oe,{...h})})})]})};L.defaultProps=_e;L.displayName="Tabs";const Te=L;function He(o){const[a,t]=d.exports.useState("escribenos"),[c,i]=d.exports.useState(!1),[s,r]=d.exports.useState({image:"/public/images/banderas/listado_nombres/CHL.svg",title:"Chile",indicative:"+56",fixed:!0}),p=m=>{m=="whatsapp"?t("escribenos"):t(m)},u=m=>{var f=document.createElement("input");f.setAttribute("value",document.getElementById(m).innerHTML),document.body.appendChild(f),f.select(),document.execCommand("copy"),document.body.removeChild(f)},b=()=>i(!1),h=()=>i(!0),v=m=>{r(m),i(!1)};return n(ce,{children:[e("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Poppins"}),e(ie,{title:"Contacto"}),e(re,{user:o}),e("div",{id:"banner-top",children:e("div",{id:"banner-top--img",className:"h-100 w-100",children:e("div",{className:"container",children:e("div",{id:"banner-top--text-container",className:"row",children:n("div",{className:"col-12 px-0",children:[e("h2",{className:"banner-top--white-title",children:"Centro de contacto"})," ",e("p",{className:"banner-top--white-text",children:"Puedes contactarte con nosotros por los diferentes medios que tenemos para ti."})]})})})})}),e("div",{id:"contenido-contactenos",children:e("div",{className:"contactenos_form container px-0",children:n("div",{className:"row m-0 pb-5",children:[e("div",{className:"col-12 col-md-8 px-0 contactenos_form--nav-and-content mb-4 mb-md-0",children:e("div",{id:"navegacion-contactenos",className:"card",children:n("div",{className:"tabs row no-gutters",id:"__BVID__15",children:[e("div",{className:"col-auto navegacion-contactenos--nav",children:n(g,{className:"nav justify-content-center",activeKey:a,onSelect:m=>p(`${m}`),children:[e(g.Item,{className:"w-100",children:e(g.Link,{eventKey:"escribenos",children:n("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-escribe navegacion-contactenos--iconos"}),e("span",{children:"Escríbenos"}),e("i",{className:"icon-up"})]})})}),e(g.Item,{className:"w-100",children:e(g.Link,{href:"https://api.whatsapp.com/send?phone=573103708276",eventKey:"whatsapp",target:"_blank",children:n("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-whatsapp navegacion-contactenos--iconos"}),e("span",{children:"Whatsapp"})]})})}),e(g.Item,{className:"w-100",children:e(g.Link,{eventKey:"ubicacion",children:n("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-ubicacion navegacion-contactenos--iconos"}),e("span",{children:"Ubicación"}),e("i",{className:"icon-up"})]})})}),e(g.Item,{className:"w-100",children:e(g.Link,{eventKey:"preguntas-frecuentes",children:n("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-preguntas navegacion-contactenos--iconos"}),e("span",{children:"Preguntas frecuentes"}),e("i",{className:"icon-up"})]})})})]})}),e("div",{className:"tab-content col",id:"__BVID__15__BV_tab_container_",children:n(Te,{id:"controlled-tab-example",activeKey:a,onSelect:m=>t(m),className:"mb-3 d-none",children:[e(q,{eventKey:"escribenos",title:"escribenos",children:e("div",{className:"navegacion-contactenos--text-content",children:e("div",{className:"contactenos_form",children:n("form",{action:"",children:[n("div",{className:"contactenos_form--campo",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Nombre completo:"})}),e("input",{id:"name",name:"name",type:"text",placeholder:"Ingresa tu nombre",className:"contactenos_form--campo-input"})]}),n("div",{className:"contactenos_form--campo",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Teléfono:"})}),n("div",{className:"contactenos_form--campo-telefono",children:[n("div",{className:"contactenos_form--campo-indicativo",onClick:h,children:[e("img",{src:s.image,alt:"imagen bandera seleccionada",className:"contactenos_form--campo-indicativo-bandera"}),n("span",{htmlFor:"",className:"contactenos_form--campo-indicativo-nombrepais",children:[" ",s.indicative," "]}),e("span",{className:"icon-down contactenos_form--campo-indicativo-icoflecha"})]}),e("hr",{"data-v-74a0c684":"",className:"linea__divisoria",style:{width:4+"px",height:18+"px"}}),n("div",{className:"contactenos_form--campo-input-container",children:[e("input",{id:"tel",name:"tel",type:"text",placeholder:"Ingresa tu número",className:"contactenos_form--campo-telefono-input contactenos_form--campo-input",onKeyDown:function(m){console.log(m.keyCode),m.keyCode!=8&&(m.keyCode<"48"||m.keyCode>"57")&&m.preventDefault()}}),e("span",{className:""})]})]}),n(_,{show:c,onHide:b,id:"ModalContacto",children:[e(_.Header,{closeButton:!0}),e(_.Body,{children:e(be,{addCountry:v})}),e(_.Footer,{})]})]}),n("div",{className:"contactenos_form--campo",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Correo electrónico:"})}),e("input",{id:"email",name:"email",type:"text",placeholder:"Ingresa tu correo electrónico",className:"contactenos_form--campo-input"})]}),n("div",{className:"contactenos_form--campo contactenos_form--campo-mensaje",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Tu mensaje"})}),e("textarea",{name:"mensaje",rows:"6",placeholder:"Ingresa tu mensaje",className:"contactenos_form--campo-input"})]}),e("div",{className:"contactenos_form--campo contactenos_form--campo-terminos",children:n("label",{className:"checkbox_container",children:[n("span",{children:[" He leido y acepto ",e("a",{href:"/politicasp",target:"_blank",children:"la política de tratamiento de datos."})]}),e("input",{type:"checkbox"}),e("div",{className:"checkbox-input"})]})}),e("div",{className:"contactenos_form--campo-submit",children:n("button",{id:"submit",type:"submit",name:"submit",disabled:"disabled",className:"disabled",children:[e("i",{className:"icon-enviar"})," Enviar formulario ",e("div",{className:"preloader",style:{display:"none"}})]})})]})})})}),e(q,{eventKey:"ubicacion",title:"ubicacion",children:e("div",{role:"tabpanel",id:"tab_ubicaciones","aria-hidden":"false","aria-labelledby":"tab_ubicaciones___BV_tab_button__",className:"tab-pane active card-body",children:n("div",{className:"navegacion-contactenos--content-ubicacion w-50 w-md-75 w-lg-50",children:[n("span",{className:"navegacion-contactenos--content-ubicacion-title",children:["Nuestra ",e("span",{className:"navegacion-contactenos--content-ubicacion-title-blue",children:"ubicación:"})]}),e("div",{className:"navegacion-contactenos--content-ubicacion-content",children:e("span",{children:"Cra 23 # 70a-44 Manizales, Colombia"})}),e("div",{className:"navegacion-contactenos--content-ubicacion-google",children:n("a",{href:"https://www.google.com/maps/place/Licitaciones.Info/@5.0508836,-75.484211,15z/data=!4m5!3m4!1s0x0:0x6150198db5afae40!8m2!3d5.0508836!4d-75.484211",target:"_blank",className:"d-flex",children:[e("img",{src:"/public/images/contacto/google_maps.svg",alt:"Logo google maps"})," Ver en maps "]})})]})})}),e(q,{eventKey:"preguntas-frecuentes",title:"preguntas-frecuentes",children:n("div",{className:"navegacion-contactenos--text-content",children:[e("h3",{children:"Preguntas Frecuentes"}),n(l,{children:[n(l.Item,{eventKey:"0",children:[e(l.Header,{children:"¿En qué consiste el servicio que presta LICITACIONES.INFO?"}),e(l.Body,{children:e("div",{className:"card-body",children:n("p",{className:"card-text",children:["En licitaciones.info centralizamos miles de licitaciones en un solo lugar a través del mejor sistema de procesamiento de información, combinando innovación tecnológica con talento humano especializado en el análisis de datos, permitiendo transformar la información del mercado de compras públicas en oportunidades de negocio para todas las empresas. ",e("br",{}),e("br",{}),"Nuestro servicio te permite consultar desde cualquier lugar del mundo y desde cualquier dispositivo las licitaciones que se están publicando a diario en Colombia, Ecuador y Panamá."]})})})]}),n(l.Item,{eventKey:"1",children:[e(l.Header,{children:"¿Cómo me beneficio con el servicio que presta LICITACIONES .INFO?"}),e(l.Body,{children:e("div",{className:"card-body",children:n("p",{className:"card-text navegacion-contactenos--content-text-acordeon",children:["Con LICITACIONES.INFO aumentarás tus capacidades de participación en el mercado de las compras públicas gracias a los siguientes beneficios: ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"OPTIMIZACIÓN"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"DE TIEMPO & DINERO:"})," Centralizamos en un solo lugar las licitaciones pautadas en las plataformas Secop I, Secop II, Sercop, Panamá Compra, en 800 portales de entidades descentralizadas y en páginas de organismos no gubernamentales. Esta información la presentamos en un formato practico y ordenado, no requieres digitar códigos CAPCHA de seguridad, ni hacer búsquedas extensas ya que la información la encontrarás en un entorno que te brinda una excelente experiencia de usuario. Por lo tanto, los costos en tiempo y dinero asociados a la búsqueda y almacenamiento de información de procesos de contratación se reducen significativamente. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"ORGANIZACIÓN"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"DE LA INFORMACIÓN:"})," Nuestras funcionalidades te ayudan a gestionar grandes volúmenes de datos a través de sistemas de carpetas, iconos representativos, notas recordatorias y buscadores muy fáciles de utilizar para que encuentres todo muy rápido y fácilmente. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"MAS OPORTUNIDADES"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"DE PARTICIPACIÓN:"})," Te brindamos acceso a toda la contratación en Colombia, Ecuador y Panamá sin restricciones, puedes crear la cantidad de perfiles de negocio que desees y acceder a históricos de información de años atrás para hacer estudios de mercado descriptivos, con lo cual podrás identificar a tus posibles clientes, posibles aliados y posibles competidores, así como tendencias de comportamiento en la compra de los productos que ofreces.",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"TRABAJO EN"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"EQUIPO:"})," Proporcionamos la funcionalidad de asignar subcuentas a otros miembros de tu equipo. Asignamos hasta 2 subcuentas para dominios públicos y hasta 10 subcuentas para dominios privados."]})})})]}),n(l.Item,{eventKey:"2",children:[e(l.Header,{children:"¿Cuándo recibiré notificaciones de LICITACIONES.INFO?"}),e(l.Body,{children:e("div",{className:"card-body",children:e("p",{className:"card-text",children:"Durante todo el día buscamos licitaciones y convocatorias publicas en las cuales existe la oportunidad de participar, posteriormente un analista de contratos toma el proceso y le asigna la parametrización de la actividad económica, la ubicación, la cuantía y la modalidad adecuadas, después pasa por un proceso de calidad en el cual se confirma que las categorías seleccionadas son las correctas, por ultimo se realiza el envío a cada uno de los usuarios que tienen perfecta coincidencia con las características asignadas a cada proceso."})})})]}),n(l.Item,{eventKey:"3",children:[e(l.Header,{children:"¿Cómo puedo aprender a manejar el portal?"}),e(l.Body,{children:e("div",{className:"card-body",children:e("p",{className:"card-text",children:"Al momento de crear tu cuenta en la plataforma de Licitaciones.info te es asignado un consultor personalizado quien te ofrecerá un espacio de 45 minutos para enseñarte todo el manejo del portal. Adicionalmente estará pendiente de todas tus dudas, inquietudes y solicitudes cuando hagas uso de nuestro servicio. Sin embargo, en este enlace podrás tener a la mano el manual de usuario para que lo consultes cuando lo necesites de forma autónoma."})})})]}),n(l.Item,{eventKey:"4",children:[e(l.Header,{children:"¿Qué canales de comunicación ofrece LICITACIONES.INFO para enviar las notificaciones de licitaciones y convocatorias?"}),e(l.Body,{children:e("div",{className:"card-body",children:n("p",{className:"card-text",children:["En la actualidad ponemos a tu disposición diferentes maneras para consultar los procesos de contratación:",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"CORREO ELECTRÓNICO:"})," Enviamos de manera permanente y oportuna la información de los procesos y las novedades de su interés al correo electrónico registrado. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"PLATAFORMA WEB:"})," En la sesión de usuario tendrás a disposición todos los procesos de contratación, así como las herramientas necesarias para administrar dicha información en pro de alcanzar tus resultados ",e("a",{href:"www.lictacionescolombia.info",target:"_blank",children:"www.lictacionescolombia.info"}),". ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"APLICATIVO MÓVIL:"})," Combina la capacidad informativa del correo electrónico con la portabilidad de un equipo móvil y todas las ventajas de nuestro servicio sin depender de un computador. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"API:"})," Puedes conectar la interfaz de usuario desarrollada por tu compañía a nuestros sistemas de transmisión de datos para que optimices procesos y recursos en tu equipo de trabajo."]})})})]}),n(l.Item,{eventKey:"5",children:[e(l.Header,{children:"¿Cómo puedo hacer uso del aplicativo móvil?"}),e(l.Body,{children:n("div",{className:"card-body",children:[n("p",{className:"card-text",children:["Nuestra app móvil se encuentra disponible para sistemas operativos Android y iOS, nos puedes encontrar como Licitaciones.info. ",e("br",{}),e("br",{}),"Para ingresar debes iniciar sesión con tu correo electrónico registrado en licitaciones.info y la misma contraseña de acceso al portal. ",e("br",{}),e("br",{}),"El uso de nuestra APP no tiene ningún costo para nuestros suscriptores."]}),n("div",{className:"navegacion-contactenos--content-img-acordeon d-flex",children:[e("a",{href:"https://play.google.com/store/apps/details?id=com.setcon.licitacionesinfo&hl=es",target:"_blank",children:e("img",{src:"/public/icons/multicolor/google_play.webp",alt:"Logo google play"})}),e("a",{href:"https://apps.apple.com/co/app/licitaciones/id1210052711",target:"_blank",children:e("img",{src:"/public/icons/multicolor/app-store.svg",alt:"Logo app store"})})]})]})})]}),n(l.Item,{eventKey:"6",children:[e(l.Header,{children:"¿Cuántos correos electrónicos puedo activar al tener mi servicio con Licitaciones.info?"}),e(l.Body,{children:e("div",{className:"card-body",children:n("p",{className:"card-text",children:["Sabemos de la importancia de trabajar simultáneamente con otras personas, por ello el registro de correos electrónicos adicionales te ayuda y te aporta para que logres una gestión colaborativa con tu equipo de trabajo. Por lo anterior, dispones de las siguientes 3 opciones: ",e("br",{}),e("br",{})," Registrar hasta 2 correos adicionales con dominios públicos (Gmail, Hotmail, Yahoo!). ",e("br",{}),e("br",{})," Registrar hasta 10 correos adicionales con un mismo dominio corporativo (@empresa.com). ",e("br",{}),e("br",{})," Si requieres registrar un mayor número de subcuentas debes enviar tu solicitud al correo ",e("a",{href:"mailto:servicioalcliente@licitaciones.info",children:"servicioalcliente@licitaciones.info"})," indicando cantidad de usuarios, dominio empresarial y objetivo de la vinculación masiva. Se te enviará una cotización de acuerdo con tus necesidades."]})})})]}),n(l.Item,{eventKey:"7",children:[e(l.Header,{children:"¿Cómo puedo crear una subcuenta?"}),e(l.Body,{children:e("div",{className:"card-body",children:n("p",{className:"card-text",children:["Debes iniciar sesión en www.licitaciones.info, luego te ubicas en la parte superior derecha (específicamente en el ícono donde aparece tu nombre), al hacer clic ahí se despliega un menú de opciones, seleccionas “Mis subcuentas” para posteriormente llenar los campos que te indica la plataforma. ",e("br",{}),e("br",{})," Cuando se realice la creación, al correo de la persona que registraste enviaremos un email de confirmación, con el fin de prevenir inconvenientes al momento de enviar las notificaciones a esa cuenta."]})})})]}),n(l.Item,{eventKey:"8",children:[e(l.Header,{children:"¿Por qué no recibo información de LICITACIONES.INFO en la bandeja de entrada de mi correo electrónico?"}),e(l.Body,{children:e("div",{className:"card-body",children:n("p",{className:"card-text",children:["Debes verificar que esté bien escrito tu correo electrónico y que no se encuentre lleno. Ten presente que en algunas ocasiones nuestros mensajes pueden llegar a las carpetas de SPAM o Correo no deseado para lo cual nos debes añadir nuestro correo a tus contactos. ",e("br",{}),e("br",{})," Si tu correo es de dominio privado (@nombredelaempresa) debes tener en cuenta que tienen un elevado nivel de seguridad y por lo tanto el ingreso de nuestros correos puede estar restringido, en este caso debes validar con tu equipo de seguridad informática para proceder según sus recomendaciones. En cualquier caso, la recomendación es que informes a tu consultor asignado para que te ayude de manera personalizada a resolver la situación."]})})})]}),n(l.Item,{eventKey:"9",children:[e(l.Header,{children:"¿Tengo que firmar algún contrato para empezar a usar Licitaciones.info?"}),e(l.Body,{children:e("div",{className:"card-body",children:n("p",{className:"card-text",children:["Para usar Licitaciones.info no tienes que firmar ningún contrato, solo aceptar las condiciones y términos de uso como SAAS.",e("br",{}),e("br",{})," Cuando te registras y empiezas a usar la herramienta se entiende que estos términos y condiciones son aceptados por ambas partes, el usuario y Licitaciones.info."]})})})]})]})]})})]})})]})})}),e("div",{className:"col-12 col-md-4 pr-0 contactenos_form--datos-empresa",children:n("div",{id:"informacion-empresa",children:[n("div",{className:"informacion-empresa--card",children:[n("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-clock"}),e("span",{children:"Horarios de atención:"})]}),e("div",{className:"informacion-empresa--content",children:e("span",{className:"c-gray",children:"Lunes a Viernes 8:00 am a 6:00 pm"})})]}),n("div",{className:"informacion-empresa--card",children:[n("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-mail"}),e("span",{children:"Email:"})]}),n("div",{className:"informacion-empresa--content",children:[e("span",{className:"c-gray",id:"copy-email",children:"servicioalcliente@licitaciones.info"}),e("div",{className:"clipboard-generico-content",children:e("button",{id:"popover-target-1",className:"clipboard-generico-content--botton",children:e("i",{className:"icon-copy",onClick:()=>u("copy-email")})})})]})]}),n("div",{className:"informacion-empresa--card",children:[n("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-smartphone"}),e("span",{children:"Teléfonos:"})]}),n("div",{className:"informacion-empresa--content-numbers",children:[n("div",{className:"informacion-empresa--content informacion-empresa--content--flex mb-2",children:[e("span",{className:"informacion-empresa--content-bold-roboto c-gray fw-bold",children:"Fijo:"}),n("span",{children:[e("span",{className:"informacion-empresa--content-margin-right c-gray",id:"copy-phone",children:"+57 601 508 61 55"}),e("div",{className:"clipboard-generico-content",children:e("button",{id:"popover-target-2",className:"clipboard-generico-content--botton",children:e("i",{className:"icon-copy",onClick:()=>u("copy-phone")})})})]})]}),n("div",{className:"informacion-empresa--content informacion-empresa--content--flex",children:[e("span",{className:"informacion-empresa--content-bold-roboto c-gray fw-bold",children:"Móvil:"}),n("span",{children:[e("span",{className:"informacion-empresa--content-margin-right c-gray",id:"copy-phone-2",children:"+57 310 370 8276"}),e("div",{className:"clipboard-generico-content",children:e("button",{id:"popover-target-3",className:"clipboard-generico-content--botton",children:e("i",{className:"icon-copy",onClick:()=>u("copy-phone-2")})})})]})]})]})]}),n("div",{className:"informacion-empresa--card",children:[n("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-social"}),e("span",{children:"Redes sociales:"})]}),n("div",{className:"informacion-empresa--img",children:[e("a",{href:"https://www.facebook.com/licitacionesInfo/",target:"_blank",children:e("img",{src:"/public/icons/multicolor/facebook.svg",alt:"logo facebook"})}),e("a",{href:"https://www.linkedin.com/company/licitaciones.info/about/",target:"_blank",children:e("img",{src:"/public/icons/multicolor/linkedin.svg",alt:"logo linkedin"})}),e("a",{href:"https://www.youtube.com/c/LicitacionesInfo",target:"_blank",children:e("img",{src:"/public/icons/multicolor/youtube.svg",alt:"logo youtube"})}),e("a",{href:"https://twitter.com/licitacionesinf?lang=es",target:"_blank",children:e("img",{src:"/public/icons/multicolor/twitter.svg",alt:"logo twitter"})})]})]})]})})]})})}),e(le,{})]})}export{He as default};
