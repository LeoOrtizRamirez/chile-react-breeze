import{u as f,r as h,j as a,a as s,H as v}from"./app-44b2e9a4.js";import{G as g}from"./GuestLayout-f959109b.js";import{I as m}from"./InputError-bf790558.js";import{I as n}from"./InputLabel-9bcaa92c.js";import{P as N}from"./PrimaryButton-6170d13e.js";import{T as l}from"./TextInput-5b0baca9.js";import"./ApplicationLogo-456749ca.js";import"./ApplicationLogoLici-886bc8f2.js";/* empty css                                     */function H({token:i,email:d}){const{data:r,setData:p,post:u,processing:c,errors:o,reset:w}=f({token:i,email:d,password:"",password_confirmation:""});h.exports.useEffect(()=>()=>{w("password","password_confirmation")},[]);const t=e=>{p(e.target.name,e.target.value)};return a(g,{children:[s(v,{title:"Reset Password"}),a("form",{onSubmit:e=>{e.preventDefault(),u(route("password.store"))},children:[a("div",{children:[s(n,{forInput:"email",value:"Email"}),s(l,{id:"email",type:"email",name:"email",value:r.email,className:"mt-1 block w-full",autoComplete:"username",handleChange:t}),s(m,{message:o.email,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(n,{forInput:"password",value:"Password"}),s(l,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",isFocused:!0,handleChange:t}),s(m,{message:o.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[s(n,{forInput:"password_confirmation",value:"Confirm Password"}),s(l,{type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",handleChange:t}),s(m,{message:o.password_confirmation,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(N,{className:"ml-4",processing:c,children:"Reset Password"})})]})]})}export{H as default};