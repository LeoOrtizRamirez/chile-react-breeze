import{a as e,u as p,r as h,j as s,H as x,L as l}from"./app-cf2218a8.js";import{G as b}from"./GuestLayout-baaa5eeb.js";import{I as c}from"./InputError-a19f8482.js";import{P as N}from"./PrimaryButton-e45c8717.js";import{T as d}from"./TextInput-890ced27.js";import"./estilos-capa-autentificacion-2e7134da.js";import"./ApplicationLogoLici-0e423e93.js";function y({name:t,value:o,handleChange:a}){return e("input",{type:"checkbox",name:t,value:o,className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50",onChange:n=>a(n)})}function D({status:t,canResetPassword:o}){const{data:a,setData:n,post:u,processing:g,errors:m,reset:f}=p({email:"",password:"",remember:""});h.exports.useEffect(()=>()=>{f("password")},[]);const i=r=>{n(r.target.name,r.target.type==="checkbox"?r.target.checked:r.target.value)};return s(b,{children:[e(x,{title:"Log in"}),t&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:t}),s("form",{onSubmit:r=>{r.preventDefault(),u(route("login"))},children:[s("div",{children:[e(d,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,placeholder:"Ingresa tu correo electrónico",handleChange:i}),e(c,{message:m.email,className:"mt-2"})]}),s("div",{className:"mt-4",children:[e(d,{id:"password",type:"password",name:"password",placeholder:"Contraseña",value:a.password,className:"mt-1 block w-full",autoComplete:"current-password",handleChange:i}),e(c,{message:m.password,className:"mt-2"})]}),e("div",{className:"block mt-4",children:s("label",{className:"flex items-center",children:[e(y,{name:"remember",value:a.remember,handleChange:i}),e("span",{className:"ml-2 text-sm text-gray-600",children:"No Cerrar Sesión"})]})}),s("div",{className:"flex items-center justify-end mt-4",children:[o&&e(l,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"¿Olvidaste tu contraseña?"}),e(l,{href:"/register",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Registrarme"}),e(N,{className:"ml-4",processing:g,children:"Ingresar"})]})]})]})}export{D as default};
