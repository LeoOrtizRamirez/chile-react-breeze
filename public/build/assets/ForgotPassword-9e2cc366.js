import{u as d,j as t,a as e,H as u}from"./app-376426d4.js";import{G as c}from"./GuestLayout-c8a7d71c.js";import{I as p}from"./InputError-de9d3f9e.js";import{P as w}from"./PrimaryButton-4dbafd8b.js";import{T as f}from"./TextInput-ceceed38.js";import"./ApplicationLogo-4d37b71f.js";import"./ApplicationLogoLici-af98a394.js";function P({status:s}){const{data:o,setData:r,post:m,processing:l,errors:i}=d({email:""}),n=a=>{r(a.target.name,a.target.value)};return t(c,{children:[e(u,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),t("form",{onSubmit:a=>{a.preventDefault(),m(route("password.email"))},children:[e(f,{id:"password",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",isFocused:!0,handleChange:n}),e(p,{message:i.email,className:"mt-2"}),e("div",{className:"flex items-center justify-end mt-4",children:e(w,{className:"ml-4",processing:l,children:"Email Password Reset Link"})})]})]})}export{P as default};