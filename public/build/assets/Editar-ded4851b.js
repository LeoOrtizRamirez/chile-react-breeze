<<<<<<<< HEAD:public/build/assets/Editar-23c3fc5c.js
import{b as l,r as g,u as p,j as d,a as e,H as f}from"./app-7bc7aa84.js";import{d as b,r as h}from"./relativeTime-002fe702.js";import{A as y}from"./AuthenticatedLayout-f158ebc2.js";import{I as i}from"./InputError-e1e494c9.js";import{P as v}from"./PrimaryButton-ee594504.js";import"./ApplicationLogo-8df486ce.js";import"./ApplicationLogoLici-3cbde996.js";import"./AuthenticatedLayout-413f5a1b.js";import"./transition-5a2acc06.js";b.extend(h);const H=({plan:s})=>{const{auth:n}=l().props,[w,u]=g.exports.useState(!1),{data:r,setData:a,patch:c,post:x,processing:m,reset:N,errors:t}=p({id:s.id,nombre:s.nombre,dias:s.dias,tiempo:s.tiempo,valor:s.valor,descripcion:s.descripcion,estado:s.estado});return d(y,{auth:n,children:[e(f,{title:"Editar Plan"}),e("div",{className:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8",children:d("form",{onSubmit:o=>{console.log(r),o.preventDefault(),c(route("planes.update",r.id),{onSuccess:()=>u(!1)})},children:[e("input",{value:r.id,onChange:o=>a("id",o.target.value),type:"text",placeholder:"Id",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e("input",{value:r.nombre,onChange:o=>a("nombre",o.target.value),type:"text",placeholder:"Nombre",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.nombre,className:"mt-2"}),e("input",{value:r.dias,onChange:o=>a("dias",o.target.value),type:"number",placeholder:"Días",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.dias,className:"mt-2"}),e("input",{value:r.tiempo,onChange:o=>a("tiempo",o.target.value),type:"number",placeholder:"Tiempo",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.tiempo,className:"mt-2"}),e("input",{value:r.valor,onChange:o=>a("valor",o.target.value),type:"number",placeholder:"Valor",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.valor,className:"mt-2"}),e("input",{value:r.descripcion,onChange:o=>a("descripcion",o.target.value),type:"text",placeholder:"Descripción",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.descripcion,className:"mt-2"}),e("input",{value:r.estado,onChange:o=>a("estado",o.target.value),type:"text",placeholder:"Estado",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.estado,className:"mt-2"}),e(v,{className:"mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",disabled:m,onClick:()=>u(!0),children:"Editar"})]})})]})};export{H as default};
========
import{b as l,r as g,u as p,j as d,a as e,H as f}from"./app-a395f59d.js";import{d as b,r as h}from"./relativeTime-e5024a37.js";import{A as y}from"./AuthenticatedLayout-9dd5324a.js";import{I as i}from"./InputError-928b3956.js";import{P as v}from"./PrimaryButton-6502f309.js";import"./ApplicationLogo-82844bbc.js";import"./ApplicationLogoLici-44ea342d.js";import"./AuthenticatedLayout-30f9dc1b.js";import"./transition-d627f6da.js";b.extend(h);const H=({plan:s})=>{const{auth:n}=l().props,[w,u]=g.exports.useState(!1),{data:r,setData:a,patch:c,post:x,processing:m,reset:N,errors:t}=p({id:s.id,nombre:s.nombre,dias:s.dias,tiempo:s.tiempo,valor:s.valor,descripcion:s.descripcion,estado:s.estado});return d(y,{auth:n,children:[e(f,{title:"Editar Plan"}),e("div",{className:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8",children:d("form",{onSubmit:o=>{console.log(r),o.preventDefault(),c(route("planes.update",r.id),{onSuccess:()=>u(!1)})},children:[e("input",{value:r.id,onChange:o=>a("id",o.target.value),type:"text",placeholder:"Id",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e("input",{value:r.nombre,onChange:o=>a("nombre",o.target.value),type:"text",placeholder:"Nombre",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.nombre,className:"mt-2"}),e("input",{value:r.dias,onChange:o=>a("dias",o.target.value),type:"number",placeholder:"Días",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.dias,className:"mt-2"}),e("input",{value:r.tiempo,onChange:o=>a("tiempo",o.target.value),type:"number",placeholder:"Tiempo",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.tiempo,className:"mt-2"}),e("input",{value:r.valor,onChange:o=>a("valor",o.target.value),type:"number",placeholder:"Valor",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.valor,className:"mt-2"}),e("input",{value:r.descripcion,onChange:o=>a("descripcion",o.target.value),type:"text",placeholder:"Descripción",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.descripcion,className:"mt-2"}),e("input",{value:r.estado,onChange:o=>a("estado",o.target.value),type:"text",placeholder:"Estado",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.estado,className:"mt-2"}),e(v,{className:"mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",disabled:m,onClick:()=>u(!0),children:"Editar"})]})})]})};export{H as default};
>>>>>>>> 479cb1aee199c379a30a26461e7920d8a247747e:public/build/assets/Editar-ded4851b.js
