import{u as _,r as d,j as a,a as o,H as C}from"./app-7bc7aa84.js";import{A as F}from"./AuthenticatedLayout-f158ebc2.js";import{P as w}from"./PrimaryButton-ee594504.js";import{S as I}from"./SecondaryButton-a692e331.js";import{F as r}from"./Form-9f47a7aa.js";import{p as t}from"./paises-3204ede2.js";/* empty css                      */import"./ApplicationLogo-8df486ce.js";import"./ApplicationLogoLici-3cbde996.js";import"./AuthenticatedLayout-413f5a1b.js";import"./transition-5a2acc06.js";import"./createWithBsPrefix-e4392318.js";import"./ElementChildren-ea70097a.js";const U=({auth:s,planesAll:u})=>{const{data:n,setData:i,post:m,processing:c,reset:p,errors:q}=_({identificacion:"",nombre_completo:"",estado:"",email:"",indicativo:"",celular:"",telefono_fijo:"",pais:"",ciudad:"",direccion:"",idplan:"",fecha_vencimiento:"",origen:"",nit_empresa:"",nombre_empresa:"",email_facturacion_empresa:"",indicativo_empresa:"",celular_empresa:"",telefono_fijo_empresa:"",pais_empresa:"",ciudad_empresa:"",direccion_empresa:"",descripcion_actividad_economica:"",password:""}),[f,g]=d.exports.useState(!1),[h,G]=d.exports.useState(u),b=e=>{e.currentTarget.checkValidity()===!1&&(e.preventDefault(),e.stopPropagation()),g(!0),e.preventDefault(),m(route("usuarios.store"),{onSuccess:()=>p()})},v=e=>{i("pais",e.target.value),t.find(l=>l.title===e.target.value)},y=e=>{i("pais_empresa",e.target.value),t.find(l=>l.title===e.target.value)},x=e=>{i("indicativo",e.target.value),t.find(l=>l.indicative===e.target.value)},N=e=>{i("indicativo_empresa",e.target.value),t.find(l=>l.indicative===e.target.value)};return a(F,{auth:s,children:[o(C,{title:"Crear Usuario"}),a("div",{className:"content",children:[o("div",{className:"titulo",children:"Creación de usuario"}),o("a",{href:"/usuarios",className:"arrow-left usuarios-regresar",children:"Regresar"}),o("div",{className:"separacion",children:"- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"}),o("div",{className:"content-menu-form",children:o(r,{noValidate:!0,validated:f,onSubmit:b,children:a("div",{className:"container-create",children:[a("div",{className:"content-form",children:[a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"identificacion",children:"Documento De Identidad:"}),o(r.Control,{required:!0,value:n.identificacion,onChange:e=>i("identificacion",e.target.value),type:"text",placeholder:"Documento De Identidad",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"nombre_completo",children:"Nombre Completo:"}),o(r.Control,{id:"nombre_completo",required:!0,value:n.nombre_completo,onChange:e=>i("nombre_completo",e.target.value),type:"text",placeholder:"Nombre Completo",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"Estado",children:"Estado:"}),o(r.Control,{required:!0,value:n.estado,onChange:e=>i("estado",e.target.value),type:"number",placeholder:"Estado",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})]}),o("div",{className:"content-form",children:a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"email",children:"Email:"}),o(r.Control,{required:!0,value:n.email,onChange:e=>i("email",e.target.value),type:"email",placeholder:"Email",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})}),a("div",{className:"content-form",children:[a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"pais",children:"País:"}),a(r.Select,{required:!0,onChange:e=>v(e),placeholder:"Selecione su pais",className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm",children:[o("option",{children:n.pais}),t.map((e,l)=>o("option",{autoFocus:!0,value:e.title,children:e.title},l))]})]}),a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"indicativo",children:"Indicativo:"}),a(r.Select,{required:!0,onChange:e=>x(e),className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm",children:[o("option",{children:n.indicativo}),t.map((e,l)=>o("option",{autoFocus:!0,value:e.indicative,children:e.indicative},l))]})]}),a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"celular",children:"Celular:"}),o(r.Control,{required:!0,value:n.celular,onChange:e=>i("celular",e.target.value),type:"text",placeholder:"Celular",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"telefono_fijo",children:"Teléfono Fijo:"}),o(r.Control,{required:!0,value:n.telefono_fijo,onChange:e=>i("telefono_fijo",e.target.value),type:"text",placeholder:"Teléfono Fijo",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})]}),a("div",{className:"content-form",children:[a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"ciudad",children:"Ciudad:"}),o(r.Control,{required:!0,value:n.ciudad,onChange:e=>i("ciudad",e.target.value),type:"text",placeholder:"Ciudad",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"direccion",children:"Dirección:"}),o(r.Control,{required:!0,value:n.direccion,onChange:e=>i("direccion",e.target.value),type:"text",placeholder:"Dirección",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})]}),a("div",{className:"content-form",children:[a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"idplan",children:"Seleccione un plan:"}),a(r.Select,{required:!0,onChange:e=>i("idplan",e.target.value),placeholder:"Selecione un plan",className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm",children:[o("option",{}),h.map((e,l)=>o("option",{autoFocus:!0,value:e.id,children:e.nombre},l))]})]}),a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"fecha_vencimiento",children:"Fecha Fin Plan:"}),o(r.Control,{required:!0,value:n.fecha_vencimiento,onChange:e=>i("fecha_vencimiento",e.target.value),type:"date",placeholder:"",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"origen",children:"Origen:"}),o(r.Control,{required:!0,value:n.origen,onChange:e=>i("origen",e.target.value),type:"text",placeholder:"Origen",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})]}),a("div",{className:"content-form",children:[a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"nit_empresa",children:"Nit Empresa:"}),o(r.Control,{required:!0,value:n.nit_empresa,onChange:e=>i("nit_empresa",e.target.value),type:"text",placeholder:"Nit Empresa",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"nombre_empresa",children:"Nombre Empresa:"}),o(r.Control,{required:!0,value:n.nombre_empresa,onChange:e=>i("nombre_empresa",e.target.value),type:"text",placeholder:"Nombre Empresa",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})]}),o("div",{className:"content-form",children:a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"email_facturacion_empresa",children:"Email Facturación Empresa:"}),o(r.Control,{required:!0,value:n.email_facturacion_empresa,onChange:e=>i("email_facturacion_empresa",e.target.value),type:"email",placeholder:"Email Facturación Empresa",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})}),a("div",{className:"content-form",children:[a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"pais_empresa",children:"País:"}),a(r.Select,{required:!0,onChange:e=>y(e),placeholder:"Selecione su pais",className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm",children:[o("option",{children:n.pais_empresa}),t.map((e,l)=>o("option",{autoFocus:!0,value:e.title,children:e.title},l))]})]}),a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"indicativo_empresa",children:"Indicativo:"}),a(r.Select,{required:!0,onChange:e=>N(e),className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm",children:[o("option",{children:n.indicativo_empresa}),t.map((e,l)=>o("option",{autoFocus:!0,value:e.indicative,children:e.indicative},l))]})]}),a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"celular_empresa",children:"Celular Empresa:"}),o(r.Control,{required:!0,value:n.celular_empresa,onChange:e=>i("celular_empresa",e.target.value),type:"text",placeholder:"Celular Empresa",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"telefono_fijo_empresa",children:"Teléfono Fijo Empresa:"}),o(r.Control,{required:!0,value:n.telefono_fijo_empresa,onChange:e=>i("telefono_fijo_empresa",e.target.value),type:"text",placeholder:"Teléfono Fijo Empresa",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})]}),a("div",{className:"content-form",children:[a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"ciudad_empresa",children:"Ciudad Empresa:"}),o(r.Control,{required:!0,value:n.ciudad_empresa,onChange:e=>i("ciudad_empresa",e.target.value),type:"text",placeholder:"Ciudad Empresa",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"direccion_empresa",children:"Dirección Empresa:"}),o(r.Control,{required:!0,value:n.direccion_empresa,onChange:e=>i("direccion_empresa",e.target.value),type:"text",placeholder:"Dirección Empresa",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})]}),o("div",{className:"content-form",children:a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"descripcion_actividad_economica",children:"Descripción Actividad Económica"}),o(r.Control,{required:!0,value:n.descripcion_actividad_economica,onChange:e=>i("descripcion_actividad_economica",e.target.value),type:"text",placeholder:"Descripción Actividad Económica",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})}),o("div",{className:"content-form",children:a(r.Group,{className:"w-full mx-2",children:[o(r.Label,{for:"validationInput",htmlFor:"password",children:"Contraseña:"}),o(r.Control,{required:!0,value:n.password,onChange:e=>i("password",e.target.value),type:"password",placeholder:"Contraseña",autoFocus:!0,className:"mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})}),a("div",{className:"content-form-btn",children:[o(w,{className:`mt-4 \r
                        text-white \r
                        bg-gradient-to-br\r
                        from-sky-600\r
                        to-sky-600 \r
                        hover:bg-gradient-to-bl \r
                        focus:ring-1 \r
                        focus:outline-none \r
                        focus:ring-blue-300\r
                        dark:focus:ring-blue-800 \r
                        font-medium \r
                        rounded-lg \r
                        text-sm \r
                        px-5 \r
                        py-2.5 \r
                        text-center \r
                        mr-2 \r
                        mb-2`,disabled:c,children:"Crear Usuario"}),o(I,{className:`mt-4 \r
                        text-black \r
                        bg-gradient-to-br\r
                        from-gray-200\r
                        to-gray-200 \r
                        hover:bg-gradient-to-bl \r
                        focus:ring-1 \r
                        focus:outline-none \r
                        focus:ring-blue-300\r
                        dark:focus:ring-blue-800 \r
                        font-medium \r
                        rounded-lg \r
                        text-sm \r
                        px-5 \r
                        py-2.5 \r
                        text-center \r
                        mr-2 \r
                        mb-2`,disabled:c,children:"Cancelar"})]})]})})})]})]})};export{U as default};
