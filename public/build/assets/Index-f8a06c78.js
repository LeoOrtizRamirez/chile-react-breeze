import{R as N,r as g,a as e,j as o,F as h,L as C,e as k,u as b,H as D}from"./app-3912c2f9.js";import{A as F}from"./AuthenticatedLayout-0640721d.js";import{I as p}from"./InputError-c9124ecc.js";import{P as y}from"./PrimaryButton-99d3f081.js";import{d as v,r as L}from"./relativeTime-5c28cb64.js";import{J as M}from"./transition-4614e92d.js";import"./Nav-9c041789.js";import"./hasClass-008c2dd2.js";import"./mergeOptionsWithPopperConfig-2f50b02a.js";import"./module-a51e70b9.js";import"./Button-8c318fbe.js";/* empty css                      *//* empty css                 */const f=N.createContext(),c=({children:t})=>{const[a,s]=g.exports.useState(!1),r=()=>{s(n=>!n)};return e(f.Provider,{value:{open:a,setOpen:s,toggleOpen:r},children:e("div",{className:"relative",children:t})})},S=({children:t})=>{const{open:a,setOpen:s,toggleOpen:r}=g.exports.useContext(f);return o(h,{children:[e("div",{onClick:r,children:t}),a&&e("div",{className:"fixed inset-0 z-40",onClick:()=>s(!1)})]})},T=({align:t="right",width:a="48",contentClasses:s="py-0 bg-white",children:r})=>{const{open:n,setOpen:d}=g.exports.useContext(f);let l="origin-top";t==="left"?l="origin-top-left left-0":t==="right"&&(l="origin-top-right right-0");let m="";return a==="48"&&(m="w-48"),e(h,{children:e(M,{as:g.exports.Fragment,show:n,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e("div",{className:`absolute z-50 mt-2 shadow-lg ${l} ${m}`,onClick:()=>d(!1),children:e("div",{className:"ring-1 ring-black ring-opacity-5 "+s,children:r})})})})},j=({href:t,method:a="post",as:s="a",children:r})=>e(C,{href:t,method:a,as:s,className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gay-500 bg-none hover:bg-gray-300 focus:outline-none focus:bg-cyan-200 transition duration-150 ease-in-out",children:r});c.Trigger=S;c.Content=T;c.Link=j;v.extend(L);const z=({post:t})=>{const{auth:a}=k().props,[s,r]=g.exports.useState(!1),{data:n,setData:d,patch:l,processing:m,reset:x,errors:i}=b({title:t.title,body:t.body}),w=u=>{u.preventDefault(),l(route("posts.update",t.id),{onSuccess:()=>r(!1)})};return o("div",{className:"p-5 flex space-x-2",children:[e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-200 -scale-x-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),o("div",{className:"flex-1",children:[o("div",{className:"flex justify-between items-center",children:[o("div",{children:[e("span",{className:"text-white",children:t.user.name}),e("small",{className:"ml-2 text-sm text-white",children:v(t.created_at).fromNow()}),t.created_at!==t.updated_at&&e("small",{className:"text-sm text-gray-600",children:"· edited"})]}),t.user.id===a.user.id&&o(c,{children:[e(c.Trigger,{children:e("button",{children:e("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-white",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})})})}),o(c.Content,{children:[e("button",{className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-200 focus:bg-gray-100 transition duration-150 ease-in-out",onClick:()=>r(!0),children:"Edit"}),e(c.Link,{as:"button",href:route("posts.destroy",t.id),method:"delete",children:"Delete"})]})]})]}),s?o("form",{onSubmit:w,children:[e("input",{value:n.title,onChange:u=>d("title",u.target.value),type:"text",className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",autoFocus:!0}),e("textarea",{value:n.body,onChange:u=>d("body",u.target.value),className:"mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(p,{message:i.message,className:"mt-2"}),o("div",{className:"space-x-2",children:[e(y,{className:"mt-4",children:"Save"}),e("button",{className:"inline-flex items-center px-4 py-2 bg-gray-300 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest active:bg-gray-300 transition ease-in-out duration-150",onClick:()=>r(!1)&&x(),children:"Cancel"})]})]}):o(h,{children:[e("p",{className:"mt-4 text-lg text-white",children:t.title}),e("p",{className:"mt-4 text-white",children:t.body})]})]})]})},G=({auth:t,posts:a})=>{const{data:s,setData:r,post:n,processing:d,reset:l,errors:m}=b({title:"",body:""});return o(F,{auth:t,children:[e(D,{title:"Posts"}),o("div",{className:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8",children:[o("form",{onSubmit:i=>{i.preventDefault(),n(route("posts.store"),{onSuccess:()=>l()})},children:[e("input",{value:s.title,onChange:i=>r("title",i.target.value),type:"text",placeholder:"Title",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(p,{message:m.title,className:"mt-2"}),e("textarea",{value:s.body,onChange:i=>r("body",i.target.value),type:"text",placeholder:"Body",className:"block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(p,{message:m.body,className:"mt-2"}),e(y,{className:"mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",disabled:d,children:"Create"})]}),e("div",{className:"mt-6 bg-indigo-400 rounded-lg divide-y-4 shadow-lg",children:a.map(i=>e(z,{post:i},i.id))})]})]})};export{G as default};