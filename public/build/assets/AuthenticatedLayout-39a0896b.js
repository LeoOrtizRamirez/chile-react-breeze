import{r as a,a as e,j as i,F as p,L as d}from"./app-fb352c22.js";import{A as x}from"./ApplicationLogo-5654e60e.js";import{J as b}from"./transition-a76faed2.js";const g=a.exports.createContext(),c=({children:t})=>{const[r,n]=a.exports.useState(!1),o=()=>{n(s=>!s)};return e(g.Provider,{value:{open:r,setOpen:n,toggleOpen:o},children:e("div",{className:"relative",children:t})})},v=({children:t})=>{const{open:r,setOpen:n,toggleOpen:o}=a.exports.useContext(g);return i(p,{children:[e("div",{onClick:o,children:t}),r&&e("div",{className:"fixed inset-0 z-40",onClick:()=>n(!1)})]})},y=({align:t="right",width:r="48",contentClasses:n="py-1 bg-white",children:o})=>{const{open:s,setOpen:m}=a.exports.useContext(g);let u="origin-top";t==="left"?u="origin-top-left left-0":t==="right"&&(u="origin-top-right right-0");let f="";return r==="48"&&(f="w-48"),e(p,{children:e(b,{as:a.exports.Fragment,show:s,enter:"transition ease-out duration-200",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:e("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${u} ${f}`,onClick:()=>m(!1),children:e("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+n,children:o})})})})},N=({href:t,method:r,as:n,children:o})=>e(d,{href:t,method:r,as:n,className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",children:o});c.Trigger=v;c.Content=y;c.Link=N;const l=c;function w({href:t,active:r,children:n}){return e(d,{href:t,className:r?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out",children:n})}function h({method:t="get",as:r="a",href:n,active:o=!1,children:s}){return e(d,{method:t,as:r,href:n,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${o?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out`,children:s})}function D({auth:t,header:r,children:n}){const[o,s]=a.exports.useState(!1);return i("div",{className:"min-h-screen bg-gray-100",children:[i("nav",{className:"bg-white border-b border-gray-100",children:[e("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:i("div",{className:"flex justify-between h-16",children:[i("div",{className:"flex",children:[e("div",{className:"shrink-0 flex items-center",children:e(d,{href:"/",children:e(x,{className:"block h-9 w-auto fill-current text-gray-800"})})}),e("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:e(w,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})})]}),e("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e("div",{className:"ml-3 relative",children:i(l,{children:[e(l.Trigger,{children:e("span",{className:"inline-flex rounded-md",children:i("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[t.user.name,e("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),i(l.Content,{children:[e(l.Link,{href:route("profile.edit"),children:"Profile"}),e(l.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e("div",{className:"-mr-2 flex items-center sm:hidden",children:e("button",{onClick:()=>s(m=>!m),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:i("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e("path",{className:o?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e("path",{className:o?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),i("div",{className:(o?"block":"hidden")+" sm:hidden",children:[e("div",{className:"pt-2 pb-3 space-y-1",children:e(h,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),i("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[i("div",{className:"px-4",children:[e("div",{className:"font-medium text-base text-gray-800",children:t.user.name}),e("div",{className:"font-medium text-sm text-gray-500",children:t.user.email})]}),i("div",{className:"mt-3 space-y-1",children:[e(h,{href:route("profile.edit"),children:"Profile"}),e(h,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),r&&e("header",{className:"bg-white shadow",children:e("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:r})}),e("main",{children:n})]})}export{D as A};
