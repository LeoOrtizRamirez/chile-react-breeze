import{u as f,r as h,j as a,a as s,H as v}from"./app-ca4dc2af.js";import{G as g}from"./GuestLayout-cdf4f979.js";import{I as m}from"./InputError-d54a04ec.js";import{I as n}from"./InputLabel-156c9380.js";import{P as N}from"./PrimaryButton-91b053f5.js";import{T as l}from"./TextInput-efb0b09b.js";import"./estilos-capa-autentificacion-3cd9fd2f.js";import"./ApplicationLogoLici-3abafd00.js";function E({token:i,email:d}){const{data:r,setData:p,post:u,processing:c,errors:o,reset:w}=f({token:i,email:d,password:"",password_confirmation:""});h.exports.useEffect(()=>()=>{w("password","password_confirmation")},[]);const t=e=>{p(e.target.name,e.target.value)};return a(g,{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),u(route("password.store"))},children:[a("div",{children:[s(n,{forInput:"email",value:"Email"}),s(l,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:t}),s(m,{message:o.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(n,{forInput:"password",value:"Password"}),s(l,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:t}),s(m,{message:o.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(n,{forInput:"password_confirmation",value:"Confirm Password"}),s(l,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:t}),s(m,{message:o.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(N,{className:"ml-4",processing:c,children:"Reset Password"})})]})]})}export{E as default};