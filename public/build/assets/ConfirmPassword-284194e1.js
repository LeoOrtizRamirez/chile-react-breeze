import{u as p,r as l,j as a,a as s,H as u}from"./app-c255346d.js";import{G as c}from"./GuestLayout-a468ebc8.js";import{I as f}from"./InputError-0a4c7eb0.js";import{I as w}from"./InputLabel-9a44ba7f.js";import{P as h}from"./PrimaryButton-349eea2f.js";import{T as g}from"./TextInput-39012bf6.js";import"./estilos-capa-autentificacion-2a3637ae.js";import"./ApplicationLogoLici-8389023c.js";function H(){const{data:e,setData:t,post:o,processing:m,errors:i,reset:n}=p({password:""});l.exports.useEffect(()=>()=>{n("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(c,{children:[s(u,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(w,{forInput:"password",value:"Password"}),s(g,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(f,{message:i.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(h,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}export{H as default};