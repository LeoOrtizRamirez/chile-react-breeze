import{r as d,j as a,a as e,H as I}from"./app-5fc30145.js";import{A as _}from"./WithOutAuthenticatedLayout-8f0c1e36.js";import{A as n}from"./Accordion-5f70c885.js";import{T as C,a as m}from"./Tabs-c70df5cc.js";import{f as c,M as s}from"./Nav-ba10a279.js";import{P as x}from"./Paises-5f56790f.js";/* empty css                      *//* empty css              */import"./Footer-2d021859.js";import"./ApplicationLogoLici-ddaf509e.js";import"./ModalLoginSesion-a58f9fce.js";import"./hasClass-16c517b4.js";import"./Collapse-402bae44.js";import"./TextInput-32a7e704.js";import"./module-e1e874b9.js";import"./ElementChildren-0a5e0db0.js";import"./paises-3204ede2.js";function R({auth:h}){const[p,t]=d.exports.useState("escribenos"),[b,r]=d.exports.useState(!1),[u,v]=d.exports.useState({image:"/public/images/banderas/listado_nombres/CHL.svg",title:"Chile",indicative:"+56",fixed:!0}),g=o=>{o=="whatsapp"?t("escribenos"):t(o)},l=o=>{var i=document.createElement("input");i.setAttribute("value",document.getElementById(o).innerHTML),document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i)},f=()=>r(!1),N=()=>r(!0),y=o=>{v(o),r(!1)};return a(_,{auth:h,children:[e(I,{title:"Contacto"}),e("div",{id:"banner-top",children:e("div",{id:"banner-top--img",className:"h-100 w-100",children:e("div",{className:"container",children:e("div",{id:"banner-top--text-container",className:"row",children:a("div",{className:"col-12 px-0",children:[e("h2",{className:"banner-top--white-title",children:"Centro de contacto"})," ",e("p",{className:"banner-top--white-text",children:"Puedes contactarte con nosotros por los diferentes medios que tenemos para ti."})]})})})})}),e("div",{id:"contenido-contactenos",children:e("div",{className:"contactenos_form container px-0",children:a("div",{className:"row m-0 pb-5",children:[e("div",{className:"col-12 col-md-8 px-0 contactenos_form--nav-and-content mb-4 mb-md-0",children:e("div",{id:"navegacion-contactenos",className:"card",children:a("div",{className:"tabs row no-gutters",id:"__BVID__15",children:[e("div",{className:"col-auto navegacion-contactenos--nav",children:a(c,{className:"nav justify-content-center",activeKey:p,onSelect:o=>g(`${o}`),children:[e(c.Item,{className:"w-100",children:e(c.Link,{eventKey:"escribenos",children:a("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-escribe navegacion-contactenos--iconos"}),e("span",{children:"Escríbenos"}),e("i",{className:"icon-up"})]})})}),e(c.Item,{className:"w-100",children:e(c.Link,{href:"https://api.whatsapp.com/send?phone=573103708276",eventKey:"whatsapp",target:"_blank",children:a("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-whatsapp navegacion-contactenos--iconos"}),e("span",{children:"Whatsapp"})]})})}),e(c.Item,{className:"w-100",children:e(c.Link,{eventKey:"ubicacion",children:a("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-ubicacion navegacion-contactenos--iconos"}),e("span",{children:"Ubicación"}),e("i",{className:"icon-up"})]})})}),e(c.Item,{className:"w-100",children:e(c.Link,{eventKey:"preguntas-frecuentes",children:a("div",{className:"navegacion-contactenos--item-nav",children:[e("i",{className:"icon-preguntas navegacion-contactenos--iconos"}),e("span",{children:"Preguntas frecuentes"}),e("i",{className:"icon-up"})]})})})]})}),e("div",{className:"tab-content col",id:"__BVID__15__BV_tab_container_",children:a(C,{id:"controlled-tab-example",activeKey:p,onSelect:o=>t(o),className:"mb-3 d-none",children:[e(m,{eventKey:"escribenos",title:"escribenos",children:e("div",{className:"navegacion-contactenos--text-content",children:e("div",{className:"contactenos_form",children:a("form",{action:"",children:[a("div",{className:"contactenos_form--campo",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Nombre completo:"})}),e("input",{id:"name",name:"name",type:"text",placeholder:"Ingresa tu nombre",className:"contactenos_form--campo-input"})]}),a("div",{className:"contactenos_form--campo",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Teléfono:"})}),a("div",{className:"contactenos_form--campo-telefono",children:[a("div",{className:"contactenos_form--campo-indicativo",onClick:N,children:[e("img",{src:u.image,alt:"imagen bandera seleccionada",className:"contactenos_form--campo-indicativo-bandera"}),a("span",{htmlFor:"",className:"contactenos_form--campo-indicativo-nombrepais",children:[" ",u.indicative," "]}),e("span",{className:"icon-down contactenos_form--campo-indicativo-icoflecha"})]}),e("hr",{"data-v-74a0c684":"",className:"linea__divisoria",style:{width:4+"px",height:18+"px"}}),a("div",{className:"contactenos_form--campo-input-container",children:[e("input",{id:"tel",name:"tel",type:"text",placeholder:"Ingresa tu número",className:"contactenos_form--campo-telefono-input contactenos_form--campo-input",onKeyDown:function(o){console.log(o.keyCode),o.keyCode!=8&&(o.keyCode<"48"||o.keyCode>"57")&&o.preventDefault()}}),e("span",{className:""})]})]}),a(s,{show:b,onHide:f,id:"ModalContacto",children:[e(s.Header,{closeButton:!0}),e(s.Body,{children:e(x,{addCountry:y})}),e(s.Footer,{})]})]}),a("div",{className:"contactenos_form--campo",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Correo electrónico:"})}),e("input",{id:"email",name:"email",type:"text",placeholder:"Ingresa tu correo electrónico",className:"contactenos_form--campo-input"})]}),a("div",{className:"contactenos_form--campo contactenos_form--campo-mensaje",children:[e("div",{className:"contactenos_form--campo-title",children:e("label",{children:"Tu mensaje"})}),e("textarea",{name:"mensaje",rows:"6",placeholder:"Ingresa tu mensaje",className:"contactenos_form--campo-input"})]}),e("div",{className:"contactenos_form--campo contactenos_form--campo-terminos",children:a("label",{className:"checkbox_container",children:[a("span",{children:[" He leido y acepto ",e("a",{href:"/politicasp",target:"_blank",children:"la política de tratamiento de datos."})]}),e("input",{type:"checkbox"}),e("div",{className:"checkbox-input"})]})}),e("div",{className:"contactenos_form--campo-submit",children:a("button",{id:"submit",type:"submit",name:"submit",disabled:"disabled",className:"disabled",children:[e("i",{className:"icon-enviar"})," Enviar formulario ",e("div",{className:"preloader",style:{display:"none"}})]})})]})})})}),e(m,{eventKey:"ubicacion",title:"ubicacion",children:e("div",{role:"tabpanel",id:"tab_ubicaciones","aria-hidden":"false","aria-labelledby":"tab_ubicaciones___BV_tab_button__",className:"tab-pane active card-body",children:a("div",{className:"navegacion-contactenos--content-ubicacion w-50 w-md-75 w-lg-50",children:[a("span",{className:"navegacion-contactenos--content-ubicacion-title",children:["Nuestra ",e("span",{className:"navegacion-contactenos--content-ubicacion-title-blue",children:"ubicación:"})]}),e("div",{className:"navegacion-contactenos--content-ubicacion-content",children:e("span",{children:"Cra 23 # 70a-44 Manizales, Colombia"})}),e("div",{className:"navegacion-contactenos--content-ubicacion-google",children:a("a",{href:"https://www.google.com/maps/place/Licitaciones.Info/@5.0508836,-75.484211,15z/data=!4m5!3m4!1s0x0:0x6150198db5afae40!8m2!3d5.0508836!4d-75.484211",target:"_blank",className:"d-flex",children:[e("img",{src:"/public/images/contacto/google_maps.svg",alt:"Logo google maps"})," Ver en maps "]})})]})})}),e(m,{eventKey:"preguntas-frecuentes",title:"preguntas-frecuentes",children:a("div",{className:"navegacion-contactenos--text-content",children:[e("h3",{children:"Preguntas Frecuentes"}),a(n,{children:[a(n.Item,{eventKey:"0",children:[e(n.Header,{children:"¿En qué consiste el servicio que presta LICITACIONES.INFO?"}),e(n.Body,{children:e("div",{className:"card-body",children:a("p",{className:"card-text",children:["En licitaciones.info centralizamos miles de licitaciones en un solo lugar a través del mejor sistema de procesamiento de información, combinando innovación tecnológica con talento humano especializado en el análisis de datos, permitiendo transformar la información del mercado de compras públicas en oportunidades de negocio para todas las empresas. ",e("br",{}),e("br",{}),"Nuestro servicio te permite consultar desde cualquier lugar del mundo y desde cualquier dispositivo las licitaciones que se están publicando a diario en Colombia, Ecuador y Panamá."]})})})]}),a(n.Item,{eventKey:"1",children:[e(n.Header,{children:"¿Cómo me beneficio con el servicio que presta LICITACIONES .INFO?"}),e(n.Body,{children:e("div",{className:"card-body",children:a("p",{className:"card-text navegacion-contactenos--content-text-acordeon",children:["Con LICITACIONES.INFO aumentarás tus capacidades de participación en el mercado de las compras públicas gracias a los siguientes beneficios: ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"OPTIMIZACIÓN"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"DE TIEMPO & DINERO:"})," Centralizamos en un solo lugar las licitaciones pautadas en las plataformas Secop I, Secop II, Sercop, Panamá Compra, en 800 portales de entidades descentralizadas y en páginas de organismos no gubernamentales. Esta información la presentamos en un formato practico y ordenado, no requieres digitar códigos CAPCHA de seguridad, ni hacer búsquedas extensas ya que la información la encontrarás en un entorno que te brinda una excelente experiencia de usuario. Por lo tanto, los costos en tiempo y dinero asociados a la búsqueda y almacenamiento de información de procesos de contratación se reducen significativamente. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"ORGANIZACIÓN"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"DE LA INFORMACIÓN:"})," Nuestras funcionalidades te ayudan a gestionar grandes volúmenes de datos a través de sistemas de carpetas, iconos representativos, notas recordatorias y buscadores muy fáciles de utilizar para que encuentres todo muy rápido y fácilmente. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"MAS OPORTUNIDADES"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"DE PARTICIPACIÓN:"})," Te brindamos acceso a toda la contratación en Colombia, Ecuador y Panamá sin restricciones, puedes crear la cantidad de perfiles de negocio que desees y acceder a históricos de información de años atrás para hacer estudios de mercado descriptivos, con lo cual podrás identificar a tus posibles clientes, posibles aliados y posibles competidores, así como tendencias de comportamiento en la compra de los productos que ofreces.",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"TRABAJO EN"})," ",e("span",{className:"navegacion-contactenos--content-text-acordeon-blue",children:"EQUIPO:"})," Proporcionamos la funcionalidad de asignar subcuentas a otros miembros de tu equipo. Asignamos hasta 2 subcuentas para dominios públicos y hasta 10 subcuentas para dominios privados."]})})})]}),a(n.Item,{eventKey:"2",children:[e(n.Header,{children:"¿Cuándo recibiré notificaciones de LICITACIONES.INFO?"}),e(n.Body,{children:e("div",{className:"card-body",children:e("p",{className:"card-text",children:"Durante todo el día buscamos licitaciones y convocatorias publicas en las cuales existe la oportunidad de participar, posteriormente un analista de contratos toma el proceso y le asigna la parametrización de la actividad económica, la ubicación, la cuantía y la modalidad adecuadas, después pasa por un proceso de calidad en el cual se confirma que las categorías seleccionadas son las correctas, por ultimo se realiza el envío a cada uno de los usuarios que tienen perfecta coincidencia con las características asignadas a cada proceso."})})})]}),a(n.Item,{eventKey:"3",children:[e(n.Header,{children:"¿Cómo puedo aprender a manejar el portal?"}),e(n.Body,{children:e("div",{className:"card-body",children:e("p",{className:"card-text",children:"Al momento de crear tu cuenta en la plataforma de Licitaciones.info te es asignado un consultor personalizado quien te ofrecerá un espacio de 45 minutos para enseñarte todo el manejo del portal. Adicionalmente estará pendiente de todas tus dudas, inquietudes y solicitudes cuando hagas uso de nuestro servicio. Sin embargo, en este enlace podrás tener a la mano el manual de usuario para que lo consultes cuando lo necesites de forma autónoma."})})})]}),a(n.Item,{eventKey:"4",children:[e(n.Header,{children:"¿Qué canales de comunicación ofrece LICITACIONES.INFO para enviar las notificaciones de licitaciones y convocatorias?"}),e(n.Body,{children:e("div",{className:"card-body",children:a("p",{className:"card-text",children:["En la actualidad ponemos a tu disposición diferentes maneras para consultar los procesos de contratación:",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"CORREO ELECTRÓNICO:"})," Enviamos de manera permanente y oportuna la información de los procesos y las novedades de su interés al correo electrónico registrado. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"PLATAFORMA WEB:"})," En la sesión de usuario tendrás a disposición todos los procesos de contratación, así como las herramientas necesarias para administrar dicha información en pro de alcanzar tus resultados ",e("a",{href:"www.lictacionescolombia.info",target:"_blank",children:"www.lictacionescolombia.info"}),". ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"APLICATIVO MÓVIL:"})," Combina la capacidad informativa del correo electrónico con la portabilidad de un equipo móvil y todas las ventajas de nuestro servicio sin depender de un computador. ",e("br",{}),e("br",{}),e("span",{className:"navegacion-contactenos--content-text-acordeon-bold",children:"API:"})," Puedes conectar la interfaz de usuario desarrollada por tu compañía a nuestros sistemas de transmisión de datos para que optimices procesos y recursos en tu equipo de trabajo."]})})})]}),a(n.Item,{eventKey:"5",children:[e(n.Header,{children:"¿Cómo puedo hacer uso del aplicativo móvil?"}),e(n.Body,{children:a("div",{className:"card-body",children:[a("p",{className:"card-text",children:["Nuestra app móvil se encuentra disponible para sistemas operativos Android y iOS, nos puedes encontrar como Licitaciones.info. ",e("br",{}),e("br",{}),"Para ingresar debes iniciar sesión con tu correo electrónico registrado en licitaciones.info y la misma contraseña de acceso al portal. ",e("br",{}),e("br",{}),"El uso de nuestra APP no tiene ningún costo para nuestros suscriptores."]}),a("div",{className:"navegacion-contactenos--content-img-acordeon d-flex",children:[e("a",{href:"https://play.google.com/store/apps/details?id=com.setcon.licitacionesinfo&hl=es",target:"_blank",children:e("img",{src:"/public/icons/multicolor/google_play.webp",alt:"Logo google play"})}),e("a",{href:"https://apps.apple.com/co/app/licitaciones/id1210052711",target:"_blank",children:e("img",{src:"/public/icons/multicolor/app-store.svg",alt:"Logo app store"})})]})]})})]}),a(n.Item,{eventKey:"6",children:[e(n.Header,{children:"¿Cuántos correos electrónicos puedo activar al tener mi servicio con Licitaciones.info?"}),e(n.Body,{children:e("div",{className:"card-body",children:a("p",{className:"card-text",children:["Sabemos de la importancia de trabajar simultáneamente con otras personas, por ello el registro de correos electrónicos adicionales te ayuda y te aporta para que logres una gestión colaborativa con tu equipo de trabajo. Por lo anterior, dispones de las siguientes 3 opciones: ",e("br",{}),e("br",{})," Registrar hasta 2 correos adicionales con dominios públicos (Gmail, Hotmail, Yahoo!). ",e("br",{}),e("br",{})," Registrar hasta 10 correos adicionales con un mismo dominio corporativo (@empresa.com). ",e("br",{}),e("br",{})," Si requieres registrar un mayor número de subcuentas debes enviar tu solicitud al correo ",e("a",{href:"mailto:servicioalcliente@licitaciones.info",children:"servicioalcliente@licitaciones.info"})," indicando cantidad de usuarios, dominio empresarial y objetivo de la vinculación masiva. Se te enviará una cotización de acuerdo con tus necesidades."]})})})]}),a(n.Item,{eventKey:"7",children:[e(n.Header,{children:"¿Cómo puedo crear una subcuenta?"}),e(n.Body,{children:e("div",{className:"card-body",children:a("p",{className:"card-text",children:["Debes iniciar sesión en www.licitaciones.info, luego te ubicas en la parte superior derecha (específicamente en el ícono donde aparece tu nombre), al hacer clic ahí se despliega un menú de opciones, seleccionas “Mis subcuentas” para posteriormente llenar los campos que te indica la plataforma. ",e("br",{}),e("br",{})," Cuando se realice la creación, al correo de la persona que registraste enviaremos un email de confirmación, con el fin de prevenir inconvenientes al momento de enviar las notificaciones a esa cuenta."]})})})]}),a(n.Item,{eventKey:"8",children:[e(n.Header,{children:"¿Por qué no recibo información de LICITACIONES.INFO en la bandeja de entrada de mi correo electrónico?"}),e(n.Body,{children:e("div",{className:"card-body",children:a("p",{className:"card-text",children:["Debes verificar que esté bien escrito tu correo electrónico y que no se encuentre lleno. Ten presente que en algunas ocasiones nuestros mensajes pueden llegar a las carpetas de SPAM o Correo no deseado para lo cual nos debes añadir nuestro correo a tus contactos. ",e("br",{}),e("br",{})," Si tu correo es de dominio privado (@nombredelaempresa) debes tener en cuenta que tienen un elevado nivel de seguridad y por lo tanto el ingreso de nuestros correos puede estar restringido, en este caso debes validar con tu equipo de seguridad informática para proceder según sus recomendaciones. En cualquier caso, la recomendación es que informes a tu consultor asignado para que te ayude de manera personalizada a resolver la situación."]})})})]}),a(n.Item,{eventKey:"9",children:[e(n.Header,{children:"¿Tengo que firmar algún contrato para empezar a usar Licitaciones.info?"}),e(n.Body,{children:e("div",{className:"card-body",children:a("p",{className:"card-text",children:["Para usar Licitaciones.info no tienes que firmar ningún contrato, solo aceptar las condiciones y términos de uso como SAAS.",e("br",{}),e("br",{})," Cuando te registras y empiezas a usar la herramienta se entiende que estos términos y condiciones son aceptados por ambas partes, el usuario y Licitaciones.info."]})})})]})]})]})})]})})]})})}),e("div",{className:"col-12 col-md-4 pr-0 contactenos_form--datos-empresa",children:a("div",{id:"informacion-empresa",children:[a("div",{className:"informacion-empresa--card",children:[a("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-clock"}),e("span",{children:"Horarios de atención:"})]}),e("div",{className:"informacion-empresa--content",children:e("span",{className:"c-gray",children:"Lunes a Viernes 8:00 am a 6:00 pm"})})]}),a("div",{className:"informacion-empresa--card",children:[a("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-mail"}),e("span",{children:"Email:"})]}),a("div",{className:"informacion-empresa--content",children:[e("span",{className:"c-gray",id:"copy-email",children:"servicioalcliente@licitaciones.info"}),e("div",{className:"clipboard-generico-content",children:e("button",{id:"popover-target-1",className:"clipboard-generico-content--botton",children:e("i",{className:"icon-copy",onClick:()=>l("copy-email")})})})]})]}),a("div",{className:"informacion-empresa--card",children:[a("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-smartphone"}),e("span",{children:"Teléfonos:"})]}),a("div",{className:"informacion-empresa--content-numbers",children:[a("div",{className:"informacion-empresa--content informacion-empresa--content--flex mb-2",children:[e("span",{className:"informacion-empresa--content-bold-roboto c-gray fw-bold",children:"Fijo:"}),a("span",{children:[e("span",{className:"informacion-empresa--content-margin-right c-gray",id:"copy-phone",children:"+57 601 508 61 55"}),e("div",{className:"clipboard-generico-content",children:e("button",{id:"popover-target-2",className:"clipboard-generico-content--botton",children:e("i",{className:"icon-copy",onClick:()=>l("copy-phone")})})})]})]}),a("div",{className:"informacion-empresa--content informacion-empresa--content--flex",children:[e("span",{className:"informacion-empresa--content-bold-roboto c-gray fw-bold",children:"Móvil:"}),a("span",{children:[e("span",{className:"informacion-empresa--content-margin-right c-gray",id:"copy-phone-2",children:"+57 310 370 8276"}),e("div",{className:"clipboard-generico-content",children:e("button",{id:"popover-target-3",className:"clipboard-generico-content--botton",children:e("i",{className:"icon-copy",onClick:()=>l("copy-phone-2")})})})]})]})]})]}),a("div",{className:"informacion-empresa--card",children:[a("div",{className:"informacion-empresa--title",children:[e("i",{className:"icon-social"}),e("span",{children:"Redes sociales:"})]}),a("div",{className:"informacion-empresa--img",children:[e("a",{href:"https://www.facebook.com/licitacionesInfo/",target:"_blank",children:e("img",{src:"/public/icons/multicolor/facebook.svg",alt:"logo facebook"})}),e("a",{href:"https://www.linkedin.com/company/licitaciones.info/about/",target:"_blank",children:e("img",{src:"/public/icons/multicolor/linkedin.svg",alt:"logo linkedin"})}),e("a",{href:"https://www.youtube.com/c/LicitacionesInfo",target:"_blank",children:e("img",{src:"/public/icons/multicolor/youtube.svg",alt:"logo youtube"})}),e("a",{href:"https://twitter.com/licitacionesinf?lang=es",target:"_blank",children:e("img",{src:"/public/icons/multicolor/twitter.svg",alt:"logo twitter"})})]})]})]})})]})})})]})}export{R as default};