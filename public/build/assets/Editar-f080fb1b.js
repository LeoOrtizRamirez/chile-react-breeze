import{b as u,r as g,u as p,j as o,a as e,H as f}from"./app-01bd37bd.js";import{A as h}from"./AuthenticatedLayout-86151a1c.js";import{I as l}from"./InputError-03556b1c.js";import{P as b}from"./PrimaryButton-14cff958.js";/* empty css                               */import"./ApplicationLogo-7bc80cd9.js";import"./transition-e79e98fc.js";const j=({usuario:r})=>{const{auth:n}=u().props,[v,d]=g.exports.useState(!1),{data:i,setData:c,patch:t,processing:m,reset:_,errors:s}=p({nombre_completo:r.nombre_completo,identificacion:r.identificacion,celular:r.celular,indicativo:r.identificacion,telefono_fijo:r.telefono_fijo,direccion:r.direccion,ciudad:r.ciudad,pais:r.pais,idplan:r.idplan,email:r.email,fecha_vencimiento:r.fecha_vencimiento,estado:r.estado,origen:r.origen,password:r.password,nombre_empresa:r.nombre_empresa,nit_empresa:r.nit_empresa,pais_empresa:r.pais_empresa,ciudad_empresa:r.ciudad_empresa,direccion_empresa:r.direccion_empresa,celular_empresa:r.celular,indicativo_empresa:r.indicativo_empresa,telefono_fijo_empresa:r.telefono_fijo_empresa,email_facturacion_empresa:r.email_facturacion_empresa,descripcion_actividad_economica:r.descripcion_actividad_economica});return o(h,{auth:n,children:[e(f,{title:"Crear Usuario"}),e("div",{className:"max-w-5xl mx-auto p-4 sm:p-6 lg:p-8",children:o("form",{onSubmit:a=>{a.preventDefault(),console.log(r.id),t(route("usuarios.update",r.id),{onSuccess:()=>d(!1)})},children:[o("div",{className:"contenedor-usuarios",children:[o("div",{children:[e("label",{htmlFor:"identificacion",children:"Documento De Identidad:"}),e("input",{style:{width:"250px"},value:i.identificacion,onChange:a=>c("identificacion",a.target.value),type:"text",placeholder:"Documento De Identidad",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.identificacion,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"nombre_completo",children:"Nombre Completo:"}),e("input",{value:i.nombre_completo,onChange:a=>c("nombre_completo",a.target.value),type:"text",placeholder:"Nombre Completo",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.nombre_completo,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"Estado",children:"Estado:"}),e("input",{value:i.estado,onChange:a=>c("estado",a.target.value),type:"number",placeholder:"Estado",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.estado,className:"mt-2"})]})]}),o("div",{children:[e("label",{htmlFor:"email",children:"Email:"}),e("input",{value:i.email,onChange:a=>c("email",a.target.value),type:"email",placeholder:"Email",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.email,className:"mt-2"})]}),o("div",{className:"contenedor-usuarios",children:[o("div",{children:[e("label",{htmlFor:"pais",children:"País:"}),e("input",{style:{width:"150px"},value:i.pais,onChange:a=>c("pais",a.target.value),type:"text",placeholder:"País",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.pais,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"indicativo",children:"Indicativo:"}),e("input",{style:{width:"150px"},value:i.indicativo,onChange:a=>c("indicativo",a.target.value),type:"text",placeholder:"Indicativo",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.indicativo,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"celular",children:"Celular:"}),e("input",{value:i.celular,onChange:a=>c("celular",a.target.value),type:"text",placeholder:"Celular",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.celular,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"telefono_fijo",children:"Teléfono Fijo:"}),e("input",{value:i.telefono_fijo,onChange:a=>c("telefono_fijo",a.target.value),type:"text",placeholder:"Teléfono Fijo",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.telefono_fijo,className:"mt-2"})]})]}),o("div",{className:"contenedor-usuarios",children:[o("div",{children:[e("label",{htmlFor:"ciudad",children:"Ciudad:"}),e("input",{value:i.ciudad,onChange:a=>c("ciudad",a.target.value),type:"text",placeholder:"Ciudad",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.ciudad,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"direccion",children:"Dirección:"}),e("input",{value:i.direccion,onChange:a=>c("direccion",a.target.value),type:"text",placeholder:"Dirección",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.direccion,className:"mt-2"})]})]}),o("div",{className:"contenedor-usuarios",children:[o("div",{children:[e("label",{htmlFor:"idplan",children:"Id plan:"}),e("input",{value:i.idplan,onChange:a=>c("idplan",a.target.value),type:"number",placeholder:"Id plan",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.idplan,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"fecha_vencimiento",children:"Fecha Fin Plan:"}),e("input",{value:i.fecha_vencimiento,onChange:a=>c("fecha_vencimiento",a.target.value),type:"date",placeholder:"",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(l,{message:s.fecha_vencimiento,className:"mt-2"})]})]}),e("div",{className:"contenedor-usuarios",children:o("div",{children:[e("label",{htmlFor:"origen",children:"Origen:"}),e("input",{value:i.origen,onChange:a=>c("origen",a.target.value),type:"text",placeholder:"Origen",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.origen,className:"mt-2"})]})}),o("div",{className:"contenedor-usuarios",children:[o("div",{children:[e("label",{htmlFor:"nit_empresa",children:"Nit Empresa:"}),e("input",{style:{width:"250px"},value:i.nit_empresa,onChange:a=>c("nit_empresa",a.target.value),type:"text",placeholder:"Nit Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.nit_empresa,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"nombre_empresa",children:"Nombre Empresa:"}),e("input",{value:i.nombre_empresa,onChange:a=>c("nombre_empresa",a.target.value),type:"text",placeholder:"Nombre Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.nombre_empresa,className:"mt-2"})]})]}),e("div",{children:o("div",{children:[e("label",{htmlFor:"email_facturacion_empresa",children:"Email Facturación Empresa:"}),e("input",{value:i.email_facturacion_empresa,onChange:a=>c("email_facturacion_empresa",a.target.value),type:"email",placeholder:"Email Facturación Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.email_facturacion_empresa,className:"mt-2"})]})}),o("div",{className:"contenedor-usuarios",children:[o("div",{children:[e("label",{htmlFor:"pais_empresa",children:"País Empresa:"}),e("input",{style:{width:"150px"},value:i.pais_empresa,onChange:a=>c("pais_empresa",a.target.value),type:"text",placeholder:"País Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.pais_empresa,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"indicativo_empresa",children:"Indicativo Empresa:"}),e("input",{style:{width:"150px"},value:i.indicativo_empresa,onChange:a=>c("indicativo_empresa",a.target.value),type:"text",placeholder:"Indicativo Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.indicativo_empresa,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"celular_empresa",children:"Celular Empresa:"}),e("input",{value:i.celular_empresa,onChange:a=>c("celular_empresa",a.target.value),type:"text",placeholder:"Celular Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.celular_empresa,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"telefono_fijo_empresa",children:"Teléfono Fijo Empresa:"}),e("input",{value:i.telefono_fijo_empresa,onChange:a=>c("telefono_fijo_empresa",a.target.value),type:"text",placeholder:"Teléfono Fijo Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.telefono_fijo_empresa,className:"mt-2"})]})]}),o("div",{className:"contenedor-usuarios",children:[o("div",{children:[e("label",{htmlFor:"ciudad_empresa",children:"Ciudad Empresa:"}),e("input",{value:i.ciudad_empresa,onChange:a=>c("ciudad_empresa",a.target.value),type:"text",placeholder:"Ciudad Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.ciudad_empresa,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"direccion_empresa",children:"Dirección Empresa:"}),e("input",{value:i.direccion_empresa,onChange:a=>c("direccion_empresa",a.target.value),type:"text",placeholder:"Dirección Empresa",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.direccion_empresa,className:"mt-2"})]})]}),o("div",{children:[e("label",{htmlFor:"descripcion_actividad_economica",children:"Descripción Actividad Económica"}),e("input",{value:i.descripcion_actividad_economica,onChange:a=>c("descripcion_actividad_economica",a.target.value),type:"text",placeholder:"Descripción Actividad Económica",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.descripcion_actividad_economica,className:"mt-2"})]}),o("div",{children:[e("label",{htmlFor:"password",children:"Contraseña:"}),e("input",{value:i.password,onChange:a=>c("password",a.target.value),type:"password",placeholder:"Contraseña",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"}),e(l,{message:s.password,className:"mt-2"})]}),e(b,{className:`mt-4 \r
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
                        mb-2`,disabled:m,children:"Editar Usuario"})]})})]})};export{j as default};