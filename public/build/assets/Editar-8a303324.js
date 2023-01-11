import{d as l,r as g,u as p,j as d,a as e,H as f}from"./app-44b2e9a4.js";import{d as b,r as h}from"./relativeTime-ee3dea94.js";import{A as y}from"./AuthenticatedLayout-0e6e86da.js";import{I as i}from"./InputError-bf790558.js";import{P as v}from"./PrimaryButton-6170d13e.js";import"./ApplicationLogo-456749ca.js";import"./ApplicationLogoLici-886bc8f2.js";import"./transition-bd52a2af.js";/* empty css                                     */b.extend(h);const H=({plan:s})=>{const{auth:n}=l().props,[w,u]=g.exports.useState(!1),{data:r,setData:a,patch:c,post:x,processing:m,reset:N,errors:t}=p({id:s.id,nombre:s.nombre,dias:s.dias,tiempo:s.tiempo,valor:s.valor,descripcion:s.descripcion,estado:s.estado});return d(y,{auth:n,children:[e(f,{title:"Editar Plan"}),e("div",{className:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8",children:d("form",{onSubmit:o=>{console.log(r),o.preventDefault(),c(route("planes.update",r.id),{onSuccess:()=>u(!1)})},children:[e("input",{value:r.id,onChange:o=>a("id",o.target.value),type:"text",placeholder:"Id",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e("input",{value:r.nombre,onChange:o=>a("nombre",o.target.value),type:"text",placeholder:"Nombre",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.nombre,className:"mt-2"}),e("input",{value:r.dias,onChange:o=>a("dias",o.target.value),type:"number",placeholder:"Días",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.dias,className:"mt-2"}),e("input",{value:r.tiempo,onChange:o=>a("tiempo",o.target.value),type:"number",placeholder:"Tiempo",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.tiempo,className:"mt-2"}),e("input",{value:r.valor,onChange:o=>a("valor",o.target.value),type:"number",placeholder:"Valor",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.valor,className:"mt-2"}),e("input",{value:r.descripcion,onChange:o=>a("descripcion",o.target.value),type:"text",placeholder:"Descripción",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.descripcion,className:"mt-2"}),e("input",{value:r.estado,onChange:o=>a("estado",o.target.value),type:"text",placeholder:"Estado",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),e(i,{message:t.estado,className:"mt-2"}),e(v,{className:"mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",disabled:m,onClick:()=>u(!0),children:"Editar"})]})})]})};export{H as default};
