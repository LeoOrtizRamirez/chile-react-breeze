import{r as u,j as d,F as w,a}from"./app-932219e2.js";import{T as v}from"./TextInput-9d668e64.js";const x=($,S)=>{const[s,r]=u.exports.useState("gray"),[b,i]=u.exports.useState("no ingresada"),[y,n]=u.exports.useState(!1),[m,o]=u.exports.useState(!1),[f,c]=u.exports.useState(!1),[p,l]=u.exports.useState(!1);let _=u.exports.useRef();const N=e=>{e=String(e).trim();const t={lower:/^[a-z?]+$/,upper:/^[A-Z]+$/,number:/^[0-9]+$/,upperLower:/^[A-Za-z]+$/,upperNumber:/^[A-Z0-9]+$/,lowerNumber:/^[a-z0-9]+$/,upperLowerNumber:/^[A-Za-z0-9]+$/};e.length>0&&e.length<6?t.lower.test(e)||t.upper.test(e)||t.number.test(e)?(r("red"),i("Mínima"),n(!0),o(!1),c(!1),l(!1)):t.upperLower.test(e)||t.upperNumber.test(e)||t.lowerNumber.test(e)?(r("yellow"),i("Media"),o(!0),n(!1),c(!1),l(!1)):t.upperLowerNumber.test(e)&&(r("green"),i("Fuerte"),c(!0),n(!1),o(!1),l(!1)):e.length==0?(r("gray"),i("no ingresada"),n(!1),o(!1),c(!1),l(!1)):t.lower.test(e)||t.upper.test(e)||t.number.test(e)?(r("yellow"),i("Media"),o(!0),n(!1),c(!1),l(!1)):t.upperLower.test(e)||t.upperNumber.test(e)||t.lowerNumber.test(e)?(r("green"),i("Fuerte"),c(!0),n(!1),o(!1),l(!1)):t.upperLowerNumber.test(e)&&(r("green-dark"),i("Muy fuerte"),l(!0),n(!1),o(!1),c(!1))},g=e=>{N(e.target.value),$.onHandleChange(e)},h=e=>{let t=document.querySelector(".contenido__password-div input[name='password']");_.current.className=="contenido__password-div-icon icon-show"?(_.current.className="contenido__password-div-icon icon-hide",t.type="text",t.placeholder="Ingresa tu contraseña"):(_.current.className="contenido__password-div-icon icon-show",t.type="password",t.placeholder="Contraseña1234")};return d(w,{children:[a("div",{className:"contenido__password",children:d("div",{className:"contenido__password-div",children:[a(v,{placeholder:"Ingresa tu contraseña",id:"passwordNueva",type:"password",name:"password",className:"contenido__password-div-input",autocomplete:"off",icon:"icon-lock",autoComplete:"new-password",handleChange:g,required:!0,style:{width:100+"%;"}}),a("span",{className:"contenido__password-div-icon icon-show",onClick:h,ref:_})]})}),a("div",{className:"contenido__nivel",children:a("div",{id:"tooltip-informacion",className:"contenido__nivel-iconos",children:d("div",{className:"contenido__iconos-seguridad",children:[d("div",{className:"contenido__circulo",children:[a("div",{className:`${y&&`bt-2-${s} br-2-${s} `} ${m&&`bt-2-${s} br-2-${s} `} ${f&&`bt-2-${s} br-2-${s} `}  ${p&&`bt-2-${s} br-2-${s} `} contenido__circulo-esquina__sup-der`}),a("div",{className:`${m&&`bb-2-${s} br-2-${s} `} ${f&&`bb-2-${s} br-2-${s} `} ${p&&`bb-2-${s} br-2-${s} `} contenido__circulo-esquina__inf-der`}),a("div",{className:`${f&&`bb-2-${s} bl-2-${s} `} ${p&&`bb-2-${s} bl-2-${s} `} contenido__circulo-esquina__inf-izq securityColor__gris-inf-izq`}),a("div",{className:`${p&&`bt-2-${s} bl-2-${s} `} contenido__circulo-esquina__sup-izq securityColor__gris-sup-izq `}),a("span",{className:`contenido__seguridad-icon icon-shield c-${s}`})]}),d("span",{className:"contenido__seguridad-text",children:[" Seguridad ",a("br",{}),a("span",{className:`contenido__seguridad-text--modifier c-${s}`,children:b})]})]})})})]})},M=x;export{M as P};
