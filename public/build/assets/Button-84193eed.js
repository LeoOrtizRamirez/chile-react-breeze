import{r as u,a as e,F as N,j as n}from"./app-879c811f.js";import{p as h}from"./paises-3204ede2.js";import{u as b,c as v}from"./createWithBsPrefix-ade58cce.js";import{u as g}from"./Nav-f0eb0a27.js";const C=c=>{const[t,o]=u.exports.useState(h),[l,f]=u.exports.useState(t),d=()=>{o(l);const s=document.getElementById("searchIndicador").value,a=new RegExp(s,"i"),m=l.filter(function(r){if(a.test(r.title)||a.test(r.indicative))return r});o(m)},i=s=>{c.addCountry(s),console.log(s.selected=!0),t.filter(function(a){if(a.selected)return a.selected=!1,a}),s.selected=!0};return e(N,{children:e("div",{className:"scrollable",children:n("div",{className:"modal-filter",children:[e("div",{className:"modal-filter__search",children:e("div",{className:"form-group",children:n("div",{className:"input-container",children:[e("span",{className:"icon-alert input-icono-lupa"}),e("input",{type:"text",name:"searchIndicador",id:"searchIndicador",placeholder:"Digita el nombre o código del país",autofocus:"autofocus",className:"form-group__input",onKeyUp:d}),e("span",{className:"icon-down input-icono-buscar"})]})})}),t[0]!=null?e("div",{className:"modal-filter__list scrollable-custom",children:t.map((s,a)=>e("div",{children:n("div",{className:`${s.selected?"result-selected":"result"} result--pinned dashed dashed`,onClick:()=>i(s),children:[e("img",{src:s.image,alt:"",className:"result__bandera-icono-listado"}),e("span",{className:"result__nombre",children:s.title}),e("span",{className:"result__ext",children:s.indicative}),s.fixed&&e("img",{src:"/images/banderas/listado_nombres/fijado.svg",alt:"Fijado",className:"pinned-icon"})]})}))}):n("div",{className:"modal-filter__no-results",children:[e("p",{className:"main-title",children:"Sin resultados."}),n("div",{className:"subtitle-content d-flex align-items-center",children:[e("span",{className:"icon-Bombillo"}),n("p",{className:"subtitle",children:[" ","No se obtuvieron resultados en su búsqueda, intente de nuevo, por favor."," "]})]}),e("img",{src:"/images/sin-resultados-busqueda.webp",alt:"Sin resultados"})]})]})})})},_={variant:"primary",active:!1,disabled:!1},p=u.exports.forwardRef(({as:c,bsPrefix:t,variant:o,size:l,active:f,className:d,...i},s)=>{const a=b(t,"btn"),[m,{tagName:r}]=g({tagName:c,...i});return e(r,{...m,...i,ref:s,className:v(d,a,f&&"active",o&&`${a}-${o}`,l&&`${a}-${l}`,i.href&&i.disabled&&"disabled")})});p.displayName="Button";p.defaultProps=_;const w=p;export{w as B,C as P};
