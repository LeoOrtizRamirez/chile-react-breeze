import{u as p,r as l,j as a,a as s,H as u}from"./app-376426d4.js";import{G as c}from"./GuestLayout-c8a7d71c.js";import{I as f}from"./InputError-de9d3f9e.js";import{I as w}from"./InputLabel-765bc21e.js";import{P as h}from"./PrimaryButton-4dbafd8b.js";import{T as g}from"./TextInput-ceceed38.js";import"./ApplicationLogo-4d37b71f.js";import"./ApplicationLogoLici-af98a394.js";function H(){const{data:e,setData:t,post:o,processing:m,errors:i,reset:n}=p({password:""});l.exports.useEffect(()=>()=>{n("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(c,{children:[s(u,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(w,{forInput:"password",value:"Password"}),s(g,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,handleChange:d}),s(f,{message:i.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(h,{className:"ml-4",processing:m,children:"Confirm"})})]})]})}export{H as default};