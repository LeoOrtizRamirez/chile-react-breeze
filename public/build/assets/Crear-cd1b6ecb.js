import{u as d,j as o,a as e,H as s}from"./app-652f3706.js";import{A as u}from"./AuthenticatedLayout-f13fcb7a.js";import{P as m}from"./PrimaryButton-00331ef7.js";import{S as f}from"./SecondaryButton-6ff38ff0.js";import{A as p}from"./MenuOpciones-b5fbece8.js";/* empty css                      */import"./estilos-capa-autentificacion-81149026.js";import"./ApplicationLogoLici-830726f0.js";import"./transition-ef0aed2f.js";const I=({auth:l})=>{const{data:i,setData:a,post:t,processing:n,reset:c,errors:g}=d({identificacion:"",nombre_completo:"",estado:"",email:"",indicativo:"",celular:"",telefono_fijo:"",pais:"",ciudad:"",direccion:"",idplan:"",fecha_vencimiento:"",origen:"",nit_empresa:"",nombre_empresa:"",email_facturacion_empresa:"",indicativo_empresa:"",celular_empresa:"",telefono_fijo_empresa:"",pais_empresa:"",ciudad_empresa:"",direccion_empresa:"",descripcion_actividad_economica:"",password:""});return o(u,{auth:l,children:[e(s,{title:"Crear Usuario"}),o("div",{className:"content",children:[e("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}),e("div",{className:"titulo",children:"Creación de usuario"}),e("a",{href:"/usuarios",className:"arrow-left usuarios-regresar",children:"Regresar"}),e("div",{className:"separacion",children:"- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -"}),o("div",{className:"content-menu-form",children:[e("div",{className:"content-menu-create",children:e(p,{})}),e("form",{onSubmit:r=>{r.preventDefault(),t(route("usuarios.store"),{onSuccess:()=>c()})},className:"was-validated",children:o("div",{className:"container-create",children:[o("div",{className:"content-form",children:[o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"identificacion",children:"Documento De Identidad:"}),e("br",{}),e("input",{required:!0,value:i.identificacion,onChange:r=>a("identificacion",r.target.value),type:"text",placeholder:"Documento De Identidad",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"nombre_completo",children:"Nombre Completo:"}),e("br",{}),e("input",{id:"nombre_completo",required:!0,value:i.nombre_completo,onChange:r=>a("nombre_completo",r.target.value),type:"text",placeholder:"Nombre Completo",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"Estado",children:"Estado:"}),e("br",{}),e("input",{required:!0,value:i.estado,onChange:r=>a("estado",r.target.value),type:"number",placeholder:"Estado",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})]}),e("div",{className:"content-form",children:o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"email",children:"Email:"}),e("br",{}),e("input",{required:!0,value:i.email,onChange:r=>a("email",r.target.value),type:"email",placeholder:"Email",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})}),o("div",{className:"content-form",children:[o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"pais",children:"País:"}),e("br",{}),e("input",{required:!0,value:i.pais,onChange:r=>a("pais",r.target.value),type:"text",placeholder:"País",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"indicativo",children:"Indicativo:"}),e("br",{}),e("input",{required:!0,value:i.indicativo,onChange:r=>a("indicativo",r.target.value),type:"text",placeholder:"Indicativo",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"celular",children:"Celular:"}),e("br",{}),e("input",{required:!0,value:i.celular,onChange:r=>a("celular",r.target.value),type:"text",placeholder:"Celular",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"telefono_fijo",children:"Teléfono Fijo:"}),e("br",{}),e("input",{required:!0,value:i.telefono_fijo,onChange:r=>a("telefono_fijo",r.target.value),type:"text",placeholder:"Teléfono Fijo",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})]}),o("div",{className:"content-form",children:[o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"ciudad",children:"Ciudad:"}),e("br",{}),e("input",{required:!0,value:i.ciudad,onChange:r=>a("ciudad",r.target.value),type:"text",placeholder:"Ciudad",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"direccion",children:"Dirección:"}),e("br",{}),e("input",{required:!0,value:i.direccion,onChange:r=>a("direccion",r.target.value),type:"text",placeholder:"Dirección",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})]}),o("div",{className:"content-form",children:[o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"idplan",children:"Id plan:"}),e("br",{}),e("input",{required:!0,value:i.idplan,onChange:r=>a("idplan",r.target.value),type:"number",placeholder:"Id plan",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"fecha_vencimiento",children:"Fecha Fin Plan:"}),e("br",{}),e("input",{required:!0,value:i.fecha_vencimiento,onChange:r=>a("fecha_vencimiento",r.target.value),type:"date",placeholder:"",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"origen",children:"Origen:"}),e("br",{}),e("input",{required:!0,value:i.origen,onChange:r=>a("origen",r.target.value),type:"text",placeholder:"Origen",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})]}),o("div",{className:"content-form",children:[o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"nit_empresa",children:"Nit Empresa:"}),e("br",{}),e("input",{required:!0,value:i.nit_empresa,onChange:r=>a("nit_empresa",r.target.value),type:"text",placeholder:"Nit Empresa",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"nombre_empresa",children:"Nombre Empresa:"}),e("br",{}),e("input",{required:!0,value:i.nombre_empresa,onChange:r=>a("nombre_empresa",r.target.value),type:"text",placeholder:"Nombre Empresa",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})]}),e("div",{className:"content-form",children:o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"email_facturacion_empresa",children:"Email Facturación Empresa:"}),e("br",{}),e("input",{required:!0,value:i.email_facturacion_empresa,onChange:r=>a("email_facturacion_empresa",r.target.value),type:"email",placeholder:"Email Facturación Empresa",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})}),o("div",{className:"content-form",children:[o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"pais_empresa",children:"País Empresa:"}),e("br",{}),e("input",{required:!0,value:i.pais_empresa,onChange:r=>a("pais_empresa",r.target.value),type:"text",placeholder:"País Empresa",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"indicativo_empresa",children:"Indicativo Empresa:"}),e("br",{}),e("input",{required:!0,value:i.indicativo_empresa,onChange:r=>a("indicativo_empresa",r.target.value),type:"text",placeholder:"Indicativo Empresa",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"celular_empresa",children:"Celular Empresa:"}),e("br",{}),e("input",{required:!0,value:i.celular_empresa,onChange:r=>a("celular_empresa",r.target.value),type:"text",placeholder:"Celular Empresa",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"telefono_fijo_empresa",children:"Teléfono Fijo Empresa:"}),e("br",{}),e("input",{required:!0,value:i.telefono_fijo_empresa,onChange:r=>a("telefono_fijo_empresa",r.target.value),type:"text",placeholder:"Teléfono Fijo Empresa",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})]}),o("div",{className:"content-form",children:[o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"ciudad_empresa",children:"Ciudad Empresa:"}),e("br",{}),e("input",{required:!0,value:i.ciudad_empresa,onChange:r=>a("ciudad_empresa",r.target.value),type:"text",placeholder:"Ciudad Empresa",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]}),o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"direccion_empresa",children:"Dirección Empresa:"}),e("br",{}),e("input",{required:!0,value:i.direccion_empresa,onChange:r=>a("direccion_empresa",r.target.value),type:"text",placeholder:"Dirección Empresa",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})]}),e("div",{className:"content-form",children:o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"descripcion_actividad_economica",children:"Descripción Actividad Económica"}),e("br",{}),e("input",{required:!0,value:i.descripcion_actividad_economica,onChange:r=>a("descripcion_actividad_economica",r.target.value),type:"text",placeholder:"Descripción Actividad Económica",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})}),e("div",{className:"content-form",children:o("div",{className:"w-full mx-2",children:[e("label",{for:"validationInput",htmlFor:"password",children:"Contraseña:"}),e("br",{}),e("input",{required:!0,value:i.password,onChange:r=>a("password",r.target.value),type:"password",placeholder:"Contraseña",autoFocus:!0,className:"form-control is-invalid mb-2 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-2xl shadow-sm"})]})}),o("div",{className:"content-form-btn",children:[e(m,{className:`mt-4 \r
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
                        mb-2`,disabled:n,children:"Crear Usuario"}),e(f,{className:`mt-4 \r
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
                        mb-2`,disabled:n,children:"Cancelar"})]})]})})]})]})]})};export{I as default};
