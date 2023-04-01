import{d as y,r as w,u as p,j as r,a as e,F as v,H as N}from"./app-1f730a05.js";import{D as l,A as k}from"./AuthenticatedLayout-869144d1.js";import{I as g}from"./InputError-f0a1d194.js";import{P as f}from"./PrimaryButton-9569e4a9.js";import{d as b,r as C}from"./relativeTime-e70c58d0.js";import"./transition-073612e7.js";import"./Nav-16fbfc68.js";import"./useWindow-c8f89660.js";import"./mergeOptionsWithPopperConfig-44f7d97e.js";import"./module-eadd49c1.js";import"./Button-906e9104.js";/* empty css                 */b.extend(C);const D=({post:t})=>{const{auth:c}=y().props,[i,s]=w.exports.useState(!1),{data:n,setData:d,patch:m,processing:u,reset:h,errors:a}=p({title:t.title,body:t.body}),x=o=>{o.preventDefault(),m(route("posts.update",t.id),{onSuccess:()=>s(!1)})};return r("div",{className:"p-5 flex space-x-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-200 -scale-x-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),r("div",{className:"flex-1",children:[r("div",{className:"flex justify-between items-center",children:[r("div",{children:[e("span",{className:"text-white",children:t.user.name}),e("small",{className:"ml-2 text-sm text-white",children:b(t.created_at).fromNow()}),t.created_at!==t.updated_at&&e("small",{className:"text-sm text-gray-600",children:"· edited"})]}),t.user.id===c.user.id&&r(l,{children:[e(l.Trigger,{children:e("button",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-white",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})})})}),r(l.Content,{children:[e("button",{className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-200 focus:bg-gray-100 transition duration-150 ease-in-out",onClick:()=>s(!0),children:"Edit"}),e(l.Link,{as:"button",href:route("posts.destroy",t.id),method:"delete",children:"Delete"})]})]})]}),i?r("form",{onSubmit:x,children:[e("input",{value:n.title,onChange:o=>d("title",o.target.value),type:"text",className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",autoFocus:!0}),e("textarea",{value:n.body,onChange:o=>d("body",o.target.value),className:"mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(g,{message:a.message,className:"mt-2"}),r("div",{className:"space-x-2",children:[e(f,{className:"mt-4",children:"Save"}),e("button",{className:"inline-flex items-center px-4 py-2 bg-gray-300 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest active:bg-gray-300 transition ease-in-out duration-150",onClick:()=>s(!1)&&h(),children:"Cancel"})]})]}):r(v,{children:[e("p",{className:"mt-4 text-lg text-white",children:t.title}),e("p",{className:"mt-4 text-white",children:t.body})]})]})]})},A=({auth:t,posts:c})=>{const{data:i,setData:s,post:n,processing:d,reset:m,errors:u}=p({title:"",body:""});return r(k,{auth:t,children:[e(N,{title:"Posts"}),r("div",{className:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8",children:[r("form",{onSubmit:a=>{a.preventDefault(),n(route("posts.store"),{onSuccess:()=>m()})},children:[e("input",{value:i.title,onChange:a=>s("title",a.target.value),type:"text",placeholder:"Title",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(g,{message:u.title,className:"mt-2"}),e("textarea",{value:i.body,onChange:a=>s("body",a.target.value),type:"text",placeholder:"Body",className:"block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(g,{message:u.body,className:"mt-2"}),e(f,{className:"mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",disabled:d,children:"Create"})]}),e("div",{className:"mt-6 bg-indigo-400 rounded-lg divide-y-4 shadow-lg",children:c.map(a=>e(D,{post:a},a.id))})]})]})};export{A as default};
