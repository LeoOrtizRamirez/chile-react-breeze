import{u as f,r as h,j as a,a as s,H as v}from"./app-c8d9abf8.js";import{G as g}from"./GuestLayout-568b5bf6.js";import{I as m}from"./InputError-f9358424.js";import{I as n}from"./InputLabel-4bf0ace9.js";import{P as N}from"./PrimaryButton-c1e73f9c.js";import{T as l}from"./TextInput-60db6901.js";import"./estilos-capa-autentificacion-ce967846.js";import"./ApplicationLogoLici-7b15c8eb.js";function E({token:i,email:d}){const{data:r,setData:p,post:u,processing:c,errors:o,reset:w}=f({token:i,email:d,password:"",password_confirmation:""});h.exports.useEffect(()=>()=>{w("password","password_confirmation")},[]);const t=e=>{p(e.target.name,e.target.value)};return a(g,{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),u(route("password.store"))},children:[a("div",{children:[s(n,{forInput:"email",value:"Email"}),s(l,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:t}),s(m,{message:o.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(n,{forInput:"password",value:"Password"}),s(l,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:t}),s(m,{message:o.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(n,{forInput:"password_confirmation",value:"Confirm Password"}),s(l,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:t}),s(m,{message:o.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(N,{className:"ml-4",processing:c,children:"Reset Password"})})]})]})}export{E as default};