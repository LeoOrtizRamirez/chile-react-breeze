import{b as q,r as l,a as e,j as o,F as pe,H as ue}from"./app-0ab7a906.js";import{E as he,F as be}from"./HeaderPublica-5a1f3a6d.js";/* empty css              *//* empty css                      */import{T as fe,t as ve,f as E,s as M,E as ge,g as Ne,h as ye,i as xe,j as Ee,e as C,F as D,c as Ce,p as A,M as T}from"./Header-f412e00c.js";import{u as z,T as P,m as H,S as k,a as Ie,N as x,b as we,c as Ae,d as Oe}from"./Nav-72ef4214.js";import{P as _e}from"./Paises-c698b116.js";import"./ApplicationLogoLici-776ebbce.js";import"./TextInput-1410f4f9.js";function O(...a){return a.filter(n=>n!=null).reduce((n,t)=>{if(typeof t!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return n===null?t:function(...i){n.apply(this,i),t.apply(this,i)}},null)}const Te={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function V(a,n){const t=`offset${a[0].toUpperCase()}${a.slice(1)}`,c=n[t],i=Te[a];return c+parseInt(M(n,i[0]),10)+parseInt(M(n,i[1]),10)}const Pe={[ge]:"collapse",[Ne]:"collapsing",[ye]:"collapsing",[xe]:"collapse show"},Se={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:V},U=q.forwardRef(({onEnter:a,onEntering:n,onEntered:t,onExit:c,onExiting:i,className:r,children:s,dimension:p="height",getDimensionValue:u=V,...f},h)=>{const d=typeof p=="function"?p():p,b=l.exports.useMemo(()=>O(v=>{v.style[d]="0"},a),[d,a]),g=l.exports.useMemo(()=>O(v=>{const w=`scroll${d[0].toUpperCase()}${d.slice(1)}`;v.style[d]=`${v[w]}px`},n),[d,n]),N=l.exports.useMemo(()=>O(v=>{v.style[d]=null},t),[d,t]),y=l.exports.useMemo(()=>O(v=>{v.style[d]=`${u(d,v)}px`,Ee(v)},c),[c,u,d]),I=l.exports.useMemo(()=>O(v=>{v.style[d]=null},i),[d,i]);return e(fe,{ref:h,addEndListener:ve,...f,"aria-expanded":f.role?f.in:null,onEnter:b,onEntering:g,onEntered:N,onExit:y,onExiting:I,childRef:s.ref,children:(v,w)=>q.cloneElement(s,{...w,className:E(r,s.props.className,Pe[v],d==="width"&&"collapse-horizontal")})})});U.defaultProps=Se;function W(a,n){return Array.isArray(a)?a.includes(n):a===n}const _=l.exports.createContext({});_.displayName="AccordionContext";const G=l.exports.forwardRef(({as:a="div",bsPrefix:n,className:t,children:c,eventKey:i,...r},s)=>{const{activeEventKey:p}=l.exports.useContext(_);return n=C(n,"accordion-collapse"),e(U,{ref:s,in:W(p,i),...r,className:E(t,n),children:e(a,{children:l.exports.Children.only(c)})})});G.displayName="AccordionCollapse";const Q=G,S=l.exports.createContext({eventKey:""});S.displayName="AccordionItemContext";const X=l.exports.forwardRef(({as:a="div",bsPrefix:n,className:t,onEnter:c,onEntering:i,onEntered:r,onExit:s,onExiting:p,onExited:u,...f},h)=>{n=C(n,"accordion-body");const{eventKey:d}=l.exports.useContext(S);return e(Q,{eventKey:d,onEnter:c,onEntering:i,onEntered:r,onExit:s,onExiting:p,onExited:u,children:e(a,{ref:h,...f,className:E(t,n)})})});X.displayName="AccordionBody";const $e=X;function qe(a,n){const{activeEventKey:t,onSelect:c,alwaysOpen:i}=l.exports.useContext(_);return r=>{let s=a===t?null:a;i&&(Array.isArray(t)?t.includes(a)?s=t.filter(p=>p!==a):s=[...t,a]:s=[a]),c==null||c(s,r),n==null||n(r)}}const Z=l.exports.forwardRef(({as:a="button",bsPrefix:n,className:t,onClick:c,...i},r)=>{n=C(n,"accordion-button");const{eventKey:s}=l.exports.useContext(S),p=qe(s,c),{activeEventKey:u}=l.exports.useContext(_);return a==="button"&&(i.type="button"),e(a,{ref:r,onClick:p,...i,"aria-expanded":s===u,className:E(t,n,!W(u,s)&&"collapsed")})});Z.displayName="AccordionButton";const J=Z,Y=l.exports.forwardRef(({as:a="h2",bsPrefix:n,className:t,children:c,onClick:i,...r},s)=>(n=C(n,"accordion-header"),e(a,{ref:s,...r,className:E(t,n),children:e(J,{onClick:i,children:c})})));Y.displayName="AccordionHeader";const Ke=Y,ee=l.exports.forwardRef(({as:a="div",bsPrefix:n,className:t,eventKey:c,...i},r)=>{n=C(n,"accordion-item");const s=l.exports.useMemo(()=>({eventKey:c}),[c]);return e(S.Provider,{value:s,children:e(a,{ref:r,...i,className:E(t,n)})})});ee.displayName="AccordionItem";const ke=ee,ne=l.exports.forwardRef((a,n)=>{const{as:t="div",activeKey:c,bsPrefix:i,className:r,onSelect:s,flush:p,alwaysOpen:u,...f}=z(a,{activeKey:"onSelect"}),h=C(i,"accordion"),d=l.exports.useMemo(()=>({activeEventKey:c,onSelect:s,alwaysOpen:u}),[c,s,u]);return e(_.Provider,{value:d,children:e(t,{ref:n,...f,className:E(r,h,p&&`${h}-flush`)})})});ne.displayName="Accordion";const m=Object.assign(ne,{Button:J,Collapse:Q,Item:ke,Header:Ke,Body:$e}),ae={prefix:String(Math.round(Math.random()*1e10)),current:0},Be=q.createContext(ae);let Re=Boolean(typeof window<"u"&&window.document&&window.document.createElement);function Le(a){let n=l.exports.useContext(Be);return n===ae&&!Re&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),l.exports.useMemo(()=>a||`react-aria${n.prefix}-${++n.current}`,[a])}function oe({children:a,in:n,mountOnEnter:t,unmountOnExit:c}){const i=l.exports.useRef(n);return l.exports.useEffect(()=>{n&&(i.current=!0)},[n]),n?a:c||!i.current&&t?null:a}const je=["active","eventKey","mountOnEnter","transition","unmountOnExit","role","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],Me=["activeKey","getControlledId","getControllerId"],He=["as"];function K(a,n){if(a==null)return{};var t={},c=Object.keys(a),i,r;for(r=0;r<c.length;r++)i=c[r],!(n.indexOf(i)>=0)&&(t[i]=a[i]);return t}function te(a){let{active:n,eventKey:t,mountOnEnter:c,transition:i,unmountOnExit:r,role:s="tabpanel",onEnter:p,onEntering:u,onEntered:f,onExit:h,onExiting:d,onExited:b}=a,g=K(a,je);const N=l.exports.useContext(P);if(!N)return[Object.assign({},g,{role:s}),{eventKey:t,isActive:n,mountOnEnter:c,transition:i,unmountOnExit:r,onEnter:p,onEntering:u,onEntered:f,onExit:h,onExiting:d,onExited:b}];const{activeKey:y,getControlledId:I,getControllerId:v}=N,w=K(N,Me),j=H(t);return[Object.assign({},g,{role:s,id:I(t),"aria-labelledby":v(t)}),{eventKey:t,isActive:n==null&&j!=null?H(y)===j:n,transition:i||w.transition,mountOnEnter:c??w.mountOnEnter,unmountOnExit:r??w.unmountOnExit,onEnter:p,onEntering:u,onEntered:f,onExit:h,onExiting:d,onExited:b}]}const ce=l.exports.forwardRef((a,n)=>{let{as:t="div"}=a,c=K(a,He);const[i,{isActive:r,onEnter:s,onEntering:p,onEntered:u,onExit:f,onExiting:h,onExited:d,mountOnEnter:b,unmountOnExit:g,transition:N=oe}]=te(c);return e(P.Provider,{value:null,children:e(k.Provider,{value:null,children:e(N,{in:r,onEnter:s,onEntering:p,onEntered:u,onExit:f,onExiting:h,onExited:d,mountOnEnter:b,unmountOnExit:g,children:e(t,Object.assign({},i,{ref:n,hidden:!r,"aria-hidden":!r}))})})})});ce.displayName="TabPanel";const B=a=>{const{id:n,generateChildId:t,onSelect:c,activeKey:i,defaultActiveKey:r,transition:s,mountOnEnter:p,unmountOnExit:u,children:f}=a,[h,d]=Ie(i,r,c),b=Le(n),g=l.exports.useMemo(()=>t||((y,I)=>b?`${b}-${I}-${y}`:null),[b,t]),N=l.exports.useMemo(()=>({onSelect:d,activeKey:h,transition:s,mountOnEnter:p||!1,unmountOnExit:u||!1,getControlledId:y=>g(y,"tabpane"),getControllerId:y=>g(y,"tab")}),[d,h,s,p,u,g]);return e(P.Provider,{value:N,children:e(k.Provider,{value:d||null,children:f})})};B.Panel=ce;function R(a){return typeof a=="boolean"?a?D:oe:a}const ie=({transition:a,...n})=>e(B,{...n,transition:R(a)});ie.displayName="TabContainer";const Fe=ie,se=Ce("tab-content"),re=l.exports.forwardRef(({bsPrefix:a,transition:n,...t},c)=>{const[{className:i,as:r="div",...s},{isActive:p,onEnter:u,onEntering:f,onEntered:h,onExit:d,onExiting:b,onExited:g,mountOnEnter:N,unmountOnExit:y,transition:I=D}]=te({...t,transition:R(n)}),v=C(a,"tab-pane");return e(P.Provider,{value:null,children:e(k.Provider,{value:null,children:e(I,{in:p,onEnter:u,onEntering:f,onEntered:h,onExit:d,onExiting:b,onExited:g,mountOnEnter:N,unmountOnExit:y,children:e(r,{...s,ref:c,className:E(i,v,p&&"active")})})})})});re.displayName="TabPane";const le=re,De={eventKey:A.exports.oneOfType([A.exports.string,A.exports.number]),title:A.exports.node.isRequired,disabled:A.exports.bool,tabClassName:A.exports.string,tabAttrs:A.exports.object},de=()=>{throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")};de.propTypes=De;const $=Object.assign(de,{Container:Fe,Content:se,Pane:le});function F(a,n){let t=0;return l.exports.Children.map(a,c=>l.exports.isValidElement(c)?n(c,t++):c)}function ze(a,n){let t=0;l.exports.Children.forEach(a,c=>{l.exports.isValidElement(c)&&n(c,t++)})}const Ve={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1};function Ue(a){let n;return ze(a,t=>{n==null&&(n=t.props.eventKey)}),n}function We(a){const{title:n,eventKey:t,disabled:c,tabClassName:i,tabAttrs:r,id:s}=a.props;return n==null?null:e(we,{as:"li",role:"presentation",children:e(Ae,{as:"button",type:"button",eventKey:t,disabled:c,id:s,className:i,...r,children:n})})}const L=a=>{const{id:n,onSelect:t,transition:c,mountOnEnter:i,unmountOnExit:r,children:s,activeKey:p=Ue(s),...u}=z(a,{activeKey:"onSelect"});return o(B,{id:n,activeKey:p,onSelect:t,transition:R(c),mountOnEnter:i,unmountOnExit:r,children:[e(x,{...u,role:"tablist",as:"ul",children:F(s,We)}),e(se,{children:F(s,f=>{const h={...f.props};return delete h.title,delete h.disabled,delete h.tabClassName,delete h.tabAttrs,e(le,{...h})})})]})};L.defaultProps=Ve;L.displayName="Tabs";const Ge=L,Qe={variant:"primary",active:!1,disabled:!1},me=l.exports.forwardRef(({as:a,bsPrefix:n,variant:t,size:c,active:i,className:r,...s},p)=>{const u=C(n,"btn"),[f,{tagName:h}]=Oe({tagName:a,...s});return e(h,{...f,...s,ref:p,className:E(r,u,i&&"active",t&&`${u}-${t}`,c&&`${u}-${c}`,s.href&&s.disabled&&"disabled")})});me.displayName="Button";me.defaultProps=Qe;function cn(a){const[n,t]=l.exports.useState("escribenos"),[c,i]=l.exports.useState(!1),[r,s]=l.exports.useState({image:"/public/images/banderas/listado_nombres/CHL.svg",title:"Chile",indicative:"+56",fixed:!0}),p=b=>{b=="whatsapp"?t("escribenos"):t(b)},u=b=>{var g=document.createElement("input");g.setAttribute("value",document.getElementById(b).innerHTML),document.body.appendChild(g),g.select(),document.execCommand("copy"),document.body.removeChild(g)},f=()=>i(!1),h=()=>i(!0),d=b=>{s(b),i(!1)};return o(pe,{children:[e("link",{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Poppins"}),e(ue,{title:"Contacto"}),e(he,{user:a}),e("div",{id:"banner-top",children:e("div",{id:"banner-top--img",className:"h-100 w-100",children:e("div",{className:"container",children:e("div",{id:"banner-top--text-container",className:"row",children:o("div",{className:"col-12 px-0",children:[e("h2",{className:"banner-top--white-title",children:"Centro de contacto"})," ",e("p",{className:"banner-top--white-text",children:"Puedes contactarte con nosotros por los diferentes medios que tenemos para ti."})]})})})})}),e("div",{id:"contenido-contactenos",children:e("div",{className:"contactenos_form container px-0",children:o("div",{className:"row m-0 pb-5",children:[e("div",{className:"col-12 col-md-8 px-0 contactenos_form--nav-and-content mb-4 mb-md-0",children:e("div",{id:"navegacion-contactenos",className:"card",children:o("div",{className:"tabs row no-gutters",id:"__BVID__15",children:[e("div",{className:"col-auto navegacion-contactenos--nav",children:o(x,{className:"nav justify-content-center",activeKey:n,onSelect:b=>p(`${b}`),children:[e(x.Item,{className:"w-100",children:e(x.Link,{eventKey:"escribenos",children:o("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-escribe navegacion-contactenos--iconos"}),e("span",{children:"Escríbenos"}),e("i",{className:"icon-up"})]})})}),e(x.Item,{className:"w-100",children:e(x.Link,{href:"https://api.whatsapp.com/send?phone=573103708276",eventKey:"whatsapp",target:"_blank",children:o("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-whatsapp navegacion-contactenos--iconos"}),e("span",{children:"Whatsapp"})]})})}),e(x.Item,{className:"w-100",children:e(x.Link,{eventKey:"ubicacion",children:o("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-ubicacion navegacion-contactenos--iconos"}),e("span",{children:"Ubicación"}),e("i",{className:"icon-up"})]})})}),e(x.Item,{className:"w-100",children:e(x.Link,{eventKey:"preguntas-frecuentes",children:o("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-preguntas navegacion-contactenos--iconos"}),e("span",{children:"Preguntas frecuentes"}),e("i",{className:"icon-up"})]})})})]})}),e("div",{className:"tab-content col",id:"__BVID__15__BV_tab_container_",children:o(Ge,{id:"controlled-tab-example",activeKey:n,onSelect:b=>t(b),className:"mb-3 d-none",children:[e($,{eventKey:"escribenos",title:"escribenos",children:e("div",{className:"navegacion-contactenos--text-content",children:e("div",{className:"contactenos_form",children:o("form",{action:"",children:[o("div",{className:"contactenos_form--campo",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Nombre completo:"})}),e("input",{id:"name",name:"name",type:"text",placeholder:"Ingresa tu nombre",className:"contactenos_form--campo-input"})]}),o("div",{className:"contactenos_form--campo",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Teléfono:"})}),o("div",{className:"contactenos_form--campo-telefono",children:[o("div",{className:"contactenos_form--campo-indicativo",onClick:h,children:[e("img",{src:r.image,alt:"imagen bandera seleccionada",className:"contactenos_form--campo-indicativo-bandera"}),o("span",{htmlFor:"",className:"contactenos_form--campo-indicativo-nombrepais",children:[" ",r.indicative," "]}),e("span",{className:"icon-down contactenos_form--campo-indicativo-icoflecha"})]}),e("hr",{"data-v-74a0c684":"",className:"linea__divisoria",style:{width:4+"px",height:18+"px"}}),o("div",{className:"contactenos_form--campo-input-container",children:[e("input",{id:"tel",name:"tel",type:"number",placeholder:"Ingresa tu número",className:"contactenos_form--campo-telefono-input contactenos_form--campo-input","aria-required":"true","aria-invalid":"false"}),e("span",{className:""})]})]}),o(T,{show:c,onHide:f,id:"ModalContacto",children:[e(T.Header,{closeButton:!0}),e(T.Body,{children:e(_e,{addCountry:d})}),e(T.Footer,{})]})]}),o("div",{className:"contactenos_form--campo",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Correo electrónico:"})}),e("input",{id:"email",name:"email",type:"text",placeholder:"Ingresa tu correo electrónico",className:"contactenos_form--campo-input"})]}),o("div",{className:"contactenos_form--campo contactenos_form--campo-mensaje",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Tu mensaje"})}),e("textarea",{name:"mensaje",rows:"6",placeholder:"Ingresa tu mensaje",className:"contactenos_form--campo-input"})]}),e("div",{className:"contactenos_form--campo contactenos_form--campo-terminos",children:o("label",{className:"checkbox_container",children:[o("span",{children:[" He leido y acepto ",e("a",{href:"/politicasp",target:"_blank",children:"la política de tratamiento de datos."})]}),e("input",{type:"checkbox"}),e("div",{className:"checkbox-input"})]})}),e("div",{className:"contactenos_form--campo-submit",children:o("button",{id:"submit",type:"submit",name:"submit",disabled:"disabled",className:"disabled",children:[e("i",{className:"icon-enviar"})," Enviar formulario ",e("div",{className:"preloader",style:{display:"none"}})]})})]})})})}),e($,{eventKey:"ubicacion",title:"ubicacion",children:e("div",{role:"tabpanel",id:"tab_ubicaciones","aria-hidden":"false","aria-labelledby":"tab_ubicaciones___BV_tab_button__",className:"tab-pane active card-body",children:o("div",{className:"navegacion-contactenos--content-ubicacion w-50 w-md-75 w-lg-50",children:[o("span",{className:"navegacion-contactenos--content-ubicacion-title",children:["Nuestra ",e("span",{className:"navegacion-contactenos--content-ubicacion-title-blue",children:"ubicación:"})]}),e("div",{className:"navegacion-contactenos--content-ubicacion-content",children:e("span",{children:"Cra 23 # 70a-44 Manizales, Colombia"})}),e("div",{className:"navegacion-contactenos--content-ubicacion-google",children:o("a",{href:"https://www.google.com/maps/place/Licitaciones.Info/@5.0508836,-75.484211,15z/data=!4m5!3m4!1s0x0:0x6150198db5afae40!8m2!3d5.0508836!4d-75.484211",target:"_blank",className:"d-flex",children:[e("img",{src:"/public/images/contacto/google_maps.svg",alt:"Logo google maps"})," Ver en maps "]})})]})})}),e($,{eventKey:"preguntas-frecuentes",title:"preguntas-frecuentes",children:o("div",{className:"navegacion-contactenos--text-content",children:[e("h3",{children:"Preguntas Frecuentes"}),o(m,{children:[o(m.Item,{eventKey:"0",children:[e(m.Header,{children:"¿En qué consiste el servicio que presta LICITACIONES.INFO?"}),e(m.Body,{children:e("div",{className:"card-body",children:o("p",{className:"card-text",children:["En licitaciones.info centralizamos miles de licitaciones en un solo lugar a través del mejor sistema de procesamiento de información, combinando innovación tecnológica con talento humano especializado en el análisis de datos, permitiendo transformar la información del mercado de compras públicas en oportunidades de negocio para todas las empresas. ",e("br",{}),e("br",{}),"Nuestro servicio te permite consultar desde cualquier lugar del mundo y desde cualquier dispositivo las licitaciones que se están publicando a diario en Colombia, Ecuador y Panamá."]})})})]}),o(m.Item,{eventKey:"1",children:[e(m.Header,{children:"¿Cómo me beneficio con el servicio que presta LICITACIONES .INFO?"}),e(m.Body,{children:e("div",{className:"card-body",children:o("p",{className:"card-text navegacion-contactenos--content-text-acordeon",children:["Con LICITACIONES.INFO aumentarás tus capacidades de participación en el mercado de las compras públicas gracias a los siguientes beneficios: ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"OPTIMIZACIÓN"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"DE TIEMPO & DINERO:"})," Centralizamos en un solo lugar las licitaciones pautadas en las plataformas Secop I, Secop II, Sercop, Panamá Compra, en 800 portales de entidades descentralizadas y en páginas de organismos no gubernamentales. Esta información la presentamos en un formato practico y ordenado, no requieres digitar códigos CAPCHA de seguridad, ni hacer búsquedas extensas ya que la información la encontrarás en un entorno que te brinda una excelente experiencia de usuario. Por lo tanto, los costos en tiempo y dinero asociados a la búsqueda y almacenamiento de información de procesos de contratación se reducen significativamente. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"ORGANIZACIÓN"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"DE LA INFORMACIÓN:"})," Nuestras funcionalidades te ayudan a gestionar grandes volúmenes de datos a través de sistemas de carpetas, iconos representativos, notas recordatorias y buscadores muy fáciles de utilizar para que encuentres todo muy rápido y fácilmente. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"MAS OPORTUNIDADES"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"DE PARTICIPACIÓN:"})," Te brindamos acceso a toda la contratación en Colombia, Ecuador y Panamá sin restricciones, puedes crear la cantidad de perfiles de negocio que desees y acceder a históricos de información de años atrás para hacer estudios de mercado descriptivos, con lo cual podrás identificar a tus posibles clientes, posibles aliados y posibles competidores, así como tendencias de comportamiento en la compra de los productos que ofreces.",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"TRABAJO EN"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"EQUIPO:"})," Proporcionamos la funcionalidad de asignar subcuentas a otros miembros de tu equipo. Asignamos hasta 2 subcuentas para dominios públicos y hasta 10 subcuentas para dominios privados."]})})})]}),o(m.Item,{eventKey:"2",children:[e(m.Header,{children:"¿Cuándo recibiré notificaciones de LICITACIONES.INFO?"}),e(m.Body,{children:e("div",{className:"card-body",children:e("p",{className:"card-text",children:"Durante todo el día buscamos licitaciones y convocatorias publicas en las cuales existe la oportunidad de participar, posteriormente un analista de contratos toma el proceso y le asigna la parametrización de la actividad económica, la ubicación, la cuantía y la modalidad adecuadas, después pasa por un proceso de calidad en el cual se confirma que las categorías seleccionadas son las correctas, por ultimo se realiza el envío a cada uno de los usuarios que tienen perfecta coincidencia con las características asignadas a cada proceso."})})})]}),o(m.Item,{eventKey:"3",children:[e(m.Header,{children:"¿Cómo puedo aprender a manejar el portal?"}),e(m.Body,{children:e("div",{className:"card-body",children:e("p",{className:"card-text",children:"Al momento de crear tu cuenta en la plataforma de Licitaciones.info te es asignado un consultor personalizado quien te ofrecerá un espacio de 45 minutos para enseñarte todo el manejo del portal. Adicionalmente estará pendiente de todas tus dudas, inquietudes y solicitudes cuando hagas uso de nuestro servicio. Sin embargo, en este enlace podrás tener a la mano el manual de usuario para que lo consultes cuando lo necesites de forma autónoma."})})})]}),o(m.Item,{eventKey:"4",children:[e(m.Header,{children:"¿Qué canales de comunicación ofrece LICITACIONES.INFO para enviar las notificaciones de licitaciones y convocatorias?"}),e(m.Body,{children:e("div",{className:"card-body",children:o("p",{className:"card-text",children:["En la actualidad ponemos a tu disposición diferentes maneras para consultar los procesos de contratación:",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"CORREO ELECTRÓNICO:"})," Enviamos de manera permanente y oportuna la información de los procesos y las novedades de su interés al correo electrónico registrado. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"PLATAFORMA WEB:"})," En la sesión de usuario tendrás a disposición todos los procesos de contratación, así como las herramientas necesarias para administrar dicha información en pro de alcanzar tus resultados ",e("a",{href:"www.lictacionescolombia.info",target:"_blank",children:"www.lictacionescolombia.info"}),". ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"APLICATIVO MÓVIL:"})," Combina la capacidad informativa del correo electrónico con la portabilidad de un equipo móvil y todas las ventajas de nuestro servicio sin depender de un computador. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"API:"})," Puedes conectar la interfaz de usuario desarrollada por tu compañía a nuestros sistemas de transmisión de datos para que optimices procesos y recursos en tu equipo de trabajo."]})})})]}),o(m.Item,{eventKey:"5",children:[e(m.Header,{children:"¿Cómo puedo hacer uso del aplicativo móvil?"}),e(m.Body,{children:o("div",{className:"card-body",children:[o("p",{className:"card-text",children:["Nuestra app móvil se encuentra disponible para sistemas operativos Android y iOS, nos puedes encontrar como Licitaciones.info. ",e("br",{}),e("br",{}),"Para ingresar debes iniciar sesión con tu correo electrónico registrado en licitaciones.info y la misma contraseña de acceso al portal. ",e("br",{}),e("br",{}),"El uso de nuestra APP no tiene ningún costo para nuestros suscriptores."]}),o("div",{className:"navegacion-contactenos--content-img-acordeon d-flex",children:[e("a",{href:"https://play.google.com/store/apps/details?id=com.setcon.licitacionesinfo&hl=es",target:"_blank",children:e("img",{src:"/public/icons/multicolor/google_play.webp",alt:"Logo google play"})}),e("a",{href:"https://apps.apple.com/co/app/licitaciones/id1210052711",target:"_blank",children:e("img",{src:"/public/icons/multicolor/app-store.svg",alt:"Logo app store"})})]})]})})]}),o(m.Item,{eventKey:"6",children:[e(m.Header,{children:"¿Cuántos correos electrónicos puedo activar al tener mi servicio con Licitaciones.info?"}),e(m.Body,{children:e("div",{className:"card-body",children:o("p",{className:"card-text",children:["Sabemos de la importancia de trabajar simultáneamente con otras personas, por ello el registro de correos electrónicos adicionales te ayuda y te aporta para que logres una gestión colaborativa con tu equipo de trabajo. Por lo anterior, dispones de las siguientes 3 opciones: ",e("br",{}),e("br",{})," Registrar hasta 2 correos adicionales con dominios públicos (Gmail, Hotmail, Yahoo!). ",e("br",{}),e("br",{})," Registrar hasta 10 correos adicionales con un mismo dominio corporativo (@empresa.com). ",e("br",{}),e("br",{})," Si requieres registrar un mayor número de subcuentas debes enviar tu solicitud al correo ",e("a",{href:"mailto:servicioalcliente@licitaciones.info",children:"servicioalcliente@licitaciones.info"})," indicando cantidad de usuarios, dominio empresarial y objetivo de la vinculación masiva. Se te enviará una cotización de acuerdo con tus necesidades."]})})})]}),o(m.Item,{eventKey:"7",children:[e(m.Header,{children:"¿Cómo puedo crear una subcuenta?"}),e(m.Body,{children:e("div",{className:"card-body",children:o("p",{className:"card-text",children:["Debes iniciar sesión en www.licitaciones.info, luego te ubicas en la parte superior derecha (específicamente en el ícono donde aparece tu nombre), al hacer clic ahí se despliega un menú de opciones, seleccionas “Mis subcuentas” para posteriormente llenar los campos que te indica la plataforma. ",e("br",{}),e("br",{})," Cuando se realice la creación, al correo de la persona que registraste enviaremos un email de confirmación, con el fin de prevenir inconvenientes al momento de enviar las notificaciones a esa cuenta."]})})})]}),o(m.Item,{eventKey:"8",children:[e(m.Header,{children:"¿Por qué no recibo información de LICITACIONES.INFO en la bandeja de entrada de mi correo electrónico?"}),e(m.Body,{children:e("div",{className:"card-body",children:o("p",{className:"card-text",children:["Debes verificar que esté bien escrito tu correo electrónico y que no se encuentre lleno. Ten presente que en algunas ocasiones nuestros mensajes pueden llegar a las carpetas de SPAM o Correo no deseado para lo cual nos debes añadir nuestro correo a tus contactos. ",e("br",{}),e("br",{})," Si tu correo es de dominio privado (@nombredelaempresa) debes tener en cuenta que tienen un elevado nivel de seguridad y por lo tanto el ingreso de nuestros correos puede estar restringido, en este caso debes validar con tu equipo de seguridad informática para proceder según sus recomendaciones. En cualquier caso, la recomendación es que informes a tu consultor asignado para que te ayude de manera personalizada a resolver la situación."]})})})]}),o(m.Item,{eventKey:"9",children:[e(m.Header,{children:"¿Tengo que firmar algún contrato para empezar a usar Licitaciones.info?"}),e(m.Body,{children:e("div",{className:"card-body",children:o("p",{className:"card-text",children:["Para usar Licitaciones.info no tienes que firmar ningún contrato, solo aceptar las condiciones y términos de uso como SAAS.",e("br",{}),e("br",{})," Cuando te registras y empiezas a usar la herramienta se entiende que estos términos y condiciones son aceptados por ambas partes, el usuario y Licitaciones.info."]})})})]})]})]})})]})})]})})}),e("div",{className:"col-12 col-md-4 pr-0 contactenos_form--datos-empresa",children:o("div",{id:"informacion-empresa",children:[o("div",{className:"informacion-empresa--card",children:[o("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-clock"}),e("span",{children:"Horarios de atención:"})]}),e("div",{className:"informacion-empresa--content",children:e("span",{className:"c-gray",children:"Lunes a Viernes 8:00 am a 6:00 pm"})})]}),o("div",{className:"informacion-empresa--card",children:[o("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-mail"}),e("span",{children:"Email:"})]}),o("div",{className:"informacion-empresa--content",children:[e("span",{className:"c-gray",id:"copy-email",children:"servicioalcliente@licitaciones.info"}),e("div",{className:"clipboard-generico-content",children:e("button",{id:"popover-target-1",className:"clipboard-generico-content--botton",children:e("i",{className:"icon-copy",onClick:()=>u("copy-email")})})})]})]}),o("div",{className:"informacion-empresa--card",children:[o("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-smartphone"}),e("span",{children:"Teléfonos:"})]}),o("div",{className:"informacion-empresa--content-numbers",children:[o("div",{className:"informacion-empresa--content informacion-empresa--content--flex mb-2",children:[e("span",{className:"informacion-empresa--content-bold-roboto c-gray fw-bold",children:"Fijo:"}),o("span",{children:[e("span",{className:"informacion-empresa--content-margin-right c-gray",id:"copy-phone",children:"+57 601 508 61 55"}),e("div",{className:"clipboard-generico-content",children:e("button",{id:"popover-target-2",className:"clipboard-generico-content--botton",children:e("i",{className:"icon-copy",onClick:()=>u("copy-phone")})})})]})]}),o("div",{className:"informacion-empresa--content informacion-empresa--content--flex",children:[e("span",{className:"informacion-empresa--content-bold-roboto c-gray fw-bold",children:"Móvil:"}),o("span",{children:[e("span",{className:"informacion-empresa--content-margin-right c-gray",id:"copy-phone-2",children:"+57 310 370 8276"}),e("div",{className:"clipboard-generico-content",children:e("button",{id:"popover-target-3",className:"clipboard-generico-content--botton",children:e("i",{className:"icon-copy",onClick:()=>u("copy-phone-2")})})})]})]})]})]}),o("div",{className:"informacion-empresa--card",children:[o("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-social"}),e("span",{children:"Redes sociales:"})]}),o("div",{className:"informacion-empresa--img",children:[e("a",{href:"https://www.facebook.com/licitacionesInfo/",target:"_blank",children:e("img",{src:"/public/icons/multicolor/facebook.svg",alt:"logo facebook"})}),e("a",{href:"https://www.linkedin.com/company/licitaciones.info/about/",target:"_blank",children:e("img",{src:"/public/icons/multicolor/linkedin.svg",alt:"logo linkedin"})}),e("a",{href:"https://www.youtube.com/c/LicitacionesInfo",target:"_blank",children:e("img",{src:"/public/icons/multicolor/youtube.svg",alt:"logo youtube"})}),e("a",{href:"https://twitter.com/licitacionesinf?lang=es",target:"_blank",children:e("img",{src:"/public/icons/multicolor/twitter.svg",alt:"logo twitter"})})]})]})]})})]})})}),e(be,{})]})}export{cn as default};
