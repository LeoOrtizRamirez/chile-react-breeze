import{r as a,j as i,F as Z,a as r}from"./app-e03f33d7.js";import{O as j,P as k,a as R}from"./OverlayTrigger-892a3265.js";import{F as O}from"./Form-a69cdbb6.js";const T=(m,B)=>{const[t,c]=a.exports.useState("gray"),[v,o]=a.exports.useState("no ingresada"),[C,l]=a.exports.useState(!1),[_,u]=a.exports.useState(!1),[h,p]=a.exports.useState(!1),[g,d]=a.exports.useState(!1);let f=a.exports.useRef(),n=a.exports.useRef();const x=e=>{e=String(e).trim();const s={lower:/^[a-z?]+$/,upper:/^[A-Z]+$/,number:/^[0-9]+$/,upperLower:/^[A-Za-z]+$/,upperNumber:/^[A-Z0-9]+$/,lowerNumber:/^[a-z0-9]+$/,upperLowerNumber:/^[a-zA-Z0-9_~!@#$%^&*()-=/*-+.,:;]*$/};e.length>0&&e.length<6?s.lower.test(e)||s.upper.test(e)||s.number.test(e)?(c("red"),o("Mínima"),l(!0),u(!1),p(!1),d(!1)):s.upperLower.test(e)||s.upperNumber.test(e)||s.lowerNumber.test(e)?(c("yellow"),o("Media"),u(!0),l(!1),p(!1),d(!1)):s.upperLowerNumber.test(e)&&(c("green"),o("Fuerte"),p(!0),l(!1),u(!1),d(!1)):e.length==0?(c("gray"),o("no ingresada"),l(!1),u(!1),p(!1),d(!1)):s.lower.test(e)||s.upper.test(e)||s.number.test(e)?(c("yellow"),o("Media"),u(!0),l(!1),p(!1),d(!1)):s.upperLower.test(e)||s.upperNumber.test(e)||s.lowerNumber.test(e)?(c("green"),o("Fuerte"),p(!0),l(!1),u(!1),d(!1)):s.upperLowerNumber.test(e)&&(c("green-dark"),o("Muy fuerte"),d(!0),l(!1),u(!1),p(!1))},[S,b]=a.exports.useState(!1),w=e=>{e=String(e).trim();const s={lower:/(?=\w*[a-z])/,upper:/(?=\w*[A-Z])/,number:/(?=\w*\d)/,especial:/(?=\w*[\u0021-\u002b\u003c-\u0040])/};e.length>=6?(s.lower.test(e)||s.upper.test(e)||s.number.test(e)||s.especial.test(e))&&b("green"):b("gray")},[P,$]=a.exports.useState(!1),M=e=>{e=String(e).trim();const s={upper:/(?=\w*[A-Z])/};s.upper.test(e)?s.upper.test(e)&&$("green"):$("gray")},[F,y]=a.exports.useState(!1),q=e=>{e=String(e).trim();const s={lower:/(?=\w*[a-z])/};s.lower.test(e)?s.lower.test(e)&&y("green"):y("gray")},[z,N]=a.exports.useState(!1),L=e=>{e=String(e).trim();const s={number:/(?=\w*\d)/};s.number.test(e)?s.number.test(e)&&N("green"):N("gray")},H=e=>{x(e.target.value),m.onHandleChange(e),w(e.target.value),m.onHandleChange(e),M(e.target.value),m.onHandleChange(e),q(e.target.value),m.onHandleChange(e),L(e.target.value),m.onHandleChange(e)},I=e=>{f.current.className=="contenido__password-div-icon icon-show"?(f.current.className="contenido__password-div-icon icon-hide",n.current.type="text",n.current.placeholder="Ingresa tu contraseña"):f.current.className=="contenido__password-div-icon icon-hide"?(f.current.className="contenido__password-div-icon icon-show",n.current.type="password",n.current.placeholder="Contraseña1234"):n.current.type=="text"?(n.current.type="password",n.current.placeholder="Contraseña1234"):(n.current.type="text",n.current.placeholder="Ingresa tu contraseña")},A=r(k,{bsPrefix:"popover",id:"popover-trigger-hover-focus",title:"Popover top",children:r(R,{bsPrefix:"popover-body",children:r("div",{className:"contenido-popover-register",children:i("div",{className:"contenido__informacion-seguridad",children:[r("div",{className:"title",children:r("span",{children:"Requisito de contraseña"})}),i("div",{className:"espacio-opciones",children:[r("span",{className:`contenido__seguridad-icon icon-info c-${S}`}),r("p",{children:"Mínimo 6 caracteres"})]}),r("hr",{}),r("div",{className:"title",children:r("span",{children:"Puede ser más segura si contiene"})}),i("div",{className:"espacio-opciones",children:[r("span",{className:`contenido__seguridad-icon icon-info c-${P}`}),r("p",{children:"1 carácter en mayúscula"})]}),i("div",{className:"espacio-opciones",children:[r("span",{className:`contenido__seguridad-icon icon-info c-${F}`}),r("p",{children:"1 carácter en minúscula"})]}),i("div",{className:"espacio-opciones",children:[r("span",{className:`contenido__seguridad-icon icon-info c-${z}`}),r("p",{children:"1 carácter numérico"})]})]})})})});return i(Z,{children:[r("div",{className:"contenido__password",children:i("div",{className:"contenido__password-div",children:[r(O.Control,{placeholder:"Ingresa tu contraseña",type:"password",name:"password",className:"contenido__password-div-input",autoComplete:"new-password",onChange:H,required:!0,pattern:"^\\S{6,20}$",ref:n}),r("span",{className:"contenido__password-div-icon icon-show",onClick:I,ref:f})]})}),r("div",{className:"contenido__nivel",children:r(j,{trigger:["hover","focus"],placement:"top",overlay:A,children:r("div",{id:"tooltip-informacion",className:"contenido__nivel-iconos",children:i("div",{className:"contenido__iconos-seguridad",children:[i("div",{className:"contenido__circulo",children:[r("div",{className:`${C&&`bt-2-${t} br-2-${t} `} ${_&&`bt-2-${t} br-2-${t} `} ${h&&`bt-2-${t} br-2-${t} `}  ${g&&`bt-2-${t} br-2-${t} `} contenido__circulo-esquina__sup-der`}),r("div",{className:`${_&&`bb-2-${t} br-2-${t} `} ${h&&`bb-2-${t} br-2-${t} `} ${g&&`bb-2-${t} br-2-${t} `} contenido__circulo-esquina__inf-der`}),r("div",{className:`${h&&`bb-2-${t} bl-2-${t} `} ${g&&`bb-2-${t} bl-2-${t} `} contenido__circulo-esquina__inf-izq securityColor__gris-inf-izq`}),r("div",{className:`${g&&`bt-2-${t} bl-2-${t} `} contenido__circulo-esquina__sup-izq securityColor__gris-sup-izq `}),r("span",{className:`contenido__seguridad-icon icon-shield c-${t}`})]}),i("span",{className:"contenido__seguridad-text",children:[" ","Seguridad ",r("br",{}),r("span",{className:`contenido__seguridad-text--modifier c-${t}`,children:v})]})]})})})})]})},J=T;export{J as P};
