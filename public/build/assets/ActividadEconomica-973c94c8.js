import{r as l,j as f,a as t,F as A}from"./app-c470916d.js";const le=({subcategorias:q,id:J,nameBuscador:Q,onHandleSectores:U,tipo:v,checkeds:W,checkAllText:R})=>{const[z,X]=l.exports.useState([]);l.exports.useEffect(()=>{var i=document.querySelector('meta[name="csrf-token"]');axios.post("/cliente/get-licicodigos",{},{headers:{Authorization:`Bearer ${i.content}`}}).then(e=>{X(e.data)}).catch(e=>{console.log(e.response.data)})},[]);const[n,re]=l.exports.useState(q),[m,P]=l.exports.useState(q),[x,$]=l.exports.useState([]),[N,I]=l.exports.useState([]),[Y,Z]=l.exports.useState([]),[F,S]=l.exports.useState(!1);l.exports.useEffect(()=>{var i=[];n.forEach(e=>{if(e.childs.length>0){var s=[],a=[];e.id_padre_sub_categoria==null&&(e.childs.forEach(c=>{s.push(c.id);var r=n.filter(o=>o.id==c.id)[0];r.childs.length>0&&r.childs.forEach(o=>{a.push(o.id)})}),i[e.id]=["sectores"],i[e.id].segmentos=s,i[e.id].actividades_economicas=a)}}),Z(i)},[]);const[_,C]=l.exports.useState(W),[B,j]=l.exports.useState([]),[O,y]=l.exports.useState([]),ee=i=>{var e=document.getElementById("sector_"+i);e.classList.toggle("expanded"),x.includes(i)?$(x.filter(c=>c!=i)):$([...x,i]);const s=new RegExp(i,"i");m.filter(function(c){if(s.test(c.id_padre_sub_categoria))return c}).forEach(c=>{if(!B.includes(c))B.push(c);else{const r=B.filter(o=>o.id_padre_sub_categoria!=i);j(r)}})},ie=i=>{var e=document.getElementById("segmento_"+i);e.classList.toggle("expanded"),N.includes(i)?I(N.filter(c=>c!=i)):I([...N,i]);const s=new RegExp(i,"i");m.filter(function(c){if(s.test(c.id_padre_sub_categoria))return c}).forEach(c=>{if(!O.includes(c))O.push(c);else{const r=O.filter(o=>o.id_padre_sub_categoria!=i);y(r)}})},ae=()=>{if(_.length<m.length){var i=m.map(e=>e.id);i=[...new Set(i)],C(i)}else C([])},w=i=>{var e=[];_.forEach(c=>{e.push(c)});var s=n.filter(c=>c.id_padre_sub_categoria==i.id&&c.id_abuelo_sub_categoria==null);if(s.length>0)e.includes(i.id)?(e=p(e,i.id),e=E(e,s,"segmento","remove")):(e.push(i.id),e=E(e,s,"segmento","remove"),e=E(e,s,"segmento","add"));else{var a=n.filter(c=>c.id_padre_sub_categoria==i.id);a.length>0?e.includes(i.id)?(e=p(e,i.id),e=E(e,a,"actividad_economica","remove")):(e.push(i.id),e=E(e,a,"actividades_economicas","remove"),e=E(e,a,"actividad_economica","add")):e.includes(i.id)?e=p(e,i.id):e.push(i.id)}e=[...new Set(e)],C(e),se(e,i)},se=(i,e)=>{if(k(e.id,"actividades_economicas")){var s=K(i,"actividades_economicas"),a=T(s,e,"actividades_economicas"),c=a[0],r=a[1],o=!0,u=0,M=D(e.id_padre_sub_categoria,"actividades_economicas");M.forEach(g=>{s.includes(g)?u+=1:o=!1}),o?(i.push(e.id_padre_sub_categoria),h("segmento_check_"+e.id_padre_sub_categoria,"remove")):(i=p(i,e.id_padre_sub_categoria),i=p(i,e.id_abuelo_sub_categoria),C(i),u>0?h("segmento_check_"+e.id_padre_sub_categoria,"add"):h("segmento_check_"+e.id_padre_sub_categoria,"remove"),r>0?h("sector_check_"+e.id_abuelo_sub_categoria,"add"):h("sector_check_"+e.id_abuelo_sub_categoria,"remove")),c&&i.push(e.id_abuelo_sub_categoria)}if(k(e.id,"segmentos")){var d=K(i,"segmentos"),a=T(d,e,"segmentos"),c=a[0],r=a[1];c?i.push(e.id_padre_sub_categoria):(i=p(i,e.id_padre_sub_categoria),C(i),r>0?h("sector_check_"+e.id_padre_sub_categoria,"add"):(h("sector_check_"+e.id_padre_sub_categoria,"remove"),h("segmento_check_"+e.id,"remove")))}if(k(e.id,"sector")){h("sector_check_"+e.id,"remove");var b=D(e.id,"segmentos");b.forEach(g=>{h("segmento_check_"+g,"remove")})}},D=(i,e)=>{var s=[];return n.forEach(a=>{switch(e){case"actividades_economicas":a.id_padre_sub_categoria==i&&s.push(a.id);break;case"segmentos":a.id_padre_sub_categoria==i&&s.push(a.id);break}}),s},K=(i,e)=>{var s=[];return i.forEach(a=>{k(a,e)&&s.push(a)}),s},k=(i,e)=>{var s=n.filter(a=>a.id==i)[0];switch(e){case"actividades_economicas":return s.id_abuelo_sub_categoria!=null&&s.id_padre_sub_categoria!=null?s:!1;case"segmentos":return s.id_abuelo_sub_categoria==null&&s.id_padre_sub_categoria!=null?s:!1;case"sector":return s.id_abuelo_sub_categoria==null&&s.id_padre_sub_categoria==null?s:!1}},T=(i,e,s)=>{var a=!0,c=0;if(i.length>0){var r=n.filter(u=>u.id==e.id)[0],o=0;switch(s){case"actividades_economicas":o=r.id_abuelo_sub_categoria;break;case"segmentos":o=r.id_padre_sub_categoria;break;case"sector":o=r.id;break}Y[o][s].forEach(u=>{i.includes(u)?c+=1:a=!1})}else a=!1;return[a,c]},h=(i,e)=>{var s=document.getElementById(i);e=="add"?s&&s.classList.add("check-minus"):s&&s.classList.remove("check-minus")},p=(i,e)=>{const s=i.indexOf(e);return s>-1&&i.splice(s,1),i},E=(i,e,s=null,a)=>(e.forEach(c=>{switch(a){case"add":i.push(c.id),s=="segmento"&&n.filter(o=>o.id_padre_sub_categoria==c.id).forEach(o=>{i.push(o.id)});break;case"remove":i=p(i,c.id),s=="segmento"&&n.filter(o=>o.id_padre_sub_categoria==c.id).forEach(o=>{i=p(i,o.id)});break}}),i),G=i=>{var e=i[0].filtros.split(",").filter(a=>a!=="");e=e.map(a=>parseInt(a));var s=[];return s=n.filter(function(a){if(e.includes(a.id))return a}),s.sort((a,c)=>{const r=e.indexOf(a.id),o=e.indexOf(c.id);return r===-1?1:o===-1?-1:r-o}),s},ce=i=>{if(S(!1),i.target.value==""){P(n),j([]),y([]),$([]),I([]),S(!1);return}if(i.key==="Enter"){const M=new RegExp(i.target.value,"i");var e=[],s=[];if(!isNaN(i.target.value)&&i.target.value.length>=6){if(e=z.filter(function(d){if(i.target.value==(d==null?void 0:d.id))return d}),e.length==0){S(!0);return}s=G(e)}else if(!isNaN(i.target.value)&&i.target.value.length<6)S(!0);else if(e=z.filter(function(d){var b;if(i.target.value.toLowerCase()==((b=d==null?void 0:d.nombre)==null?void 0:b.toLowerCase()))return d}),e.length==0)s=n.filter(function(d){if(M.test(d.nombre))return d}),s.length==0&&S(!0);else{if(e.length==0)return;s=G(e)}var a=[],c=[],r=[],o=[],u=[];s.forEach(d=>{if(d.id_abuelo_sub_categoria!=null&&d.id_padre_sub_categoria!=null){r.push(d);var b=n.filter(V=>V.id==d.id_padre_sub_categoria)[0];c.includes(b)||c.push(b),o.includes(d.id_padre_sub_categoria)||o.push(d.id_padre_sub_categoria);var g=n.filter(V=>V.id==d.id_abuelo_sub_categoria)[0];a.includes(g)||a.push(g),u.includes(d.id_abuelo_sub_categoria)||u.push(d.id_abuelo_sub_categoria)}if(d.id_abuelo_sub_categoria==null&&d.id_padre_sub_categoria!=null){c.includes(d)||c.push(d),o.includes(d.id)||o.push(d.id);var g=n.filter(oe=>oe.id==d.id_padre_sub_categoria)[0];a.includes(g)||a.push(g),u.includes(d.id_padre_sub_categoria)||u.push(d.id_padre_sub_categoria)}d.id_abuelo_sub_categoria==null&&d.id_padre_sub_categoria==null&&(a.includes(d)||a.push(d),u.includes(d.id)||u.push(d.id))}),P(a),j(c),y(r),$(u),I(o)}};l.exports.useEffect(()=>{U(_,v)},[_]);const[H,de]=l.exports.useState([]);l.exports.useEffect(()=>{te()},[_]);const te=()=>{let i=[];_.forEach(e=>{if(k(e,"actividades_economicas")){var s=L(e);i.push(s.id);var a=L(s.id);i.push(a.id)}if(k(e,"segmentos")){var a=L(e);i.push(a.id)}}),i=[...new Set(i)],de(i)},L=i=>{var e=n.filter(a=>a.id==i)[0],s=n.filter(a=>a.id==e.id_padre_sub_categoria)[0];return s};return f("div",{id:"SubCategorias",children:[t("div",{class:"tree_categorias__busqueda mb-3 mb-md-4",children:f("div",{class:"mx-auto",children:[t("input",{type:"text",placeholder:Q,class:"form-control",onKeyDown:ce}),t("i",{class:"icon-Cancelar",style:{display:"none"}}),t("button",{type:"button",class:"icon-Buscar-click"})]})}),R!=""&&f("div",{class:"tree_categorias__check_personalizado",children:[t("input",{type:"checkbox",name:"check_all2",id:"check_all2",class:"form-check-input filled-in",onChange:ae,checked:_.length==m.length}),t("label",{for:"check_all2",children:R})]}),F?t("div",{class:"tree-filter-empty",children:"No hay resultados con esta búsqueda"}):t("ul",{className:`tree-root ${v}`,id:J,children:m.map(i=>t(A,{children:i.id_padre_sub_categoria==null&&f("li",{className:`tree-node has-child draggable ${x.includes(i.id)?"expanded":""}`,id:"sector_"+i.id,children:[f("div",{id:i.id,className:"tree-content sector",children:[t("i",{className:`${i.childs.length>0?"tree-arrow has-child ltr":""}`}),t("input",{id:"sector_check_"+i.id,class:`${H.includes(i.id)?"check-minus":""}`,type:"checkbox",name:"actividad_economica",onChange:()=>w(i),checked:_.includes(i.id)?"checked":""}),t("span",{className:"tree-anchor",children:i.childs.length>0?f("span",{className:"tree-division tree-division1",onClick:()=>ee(i.id),children:[v=="ActividadEconomica"&&t("div",{class:"tree-division__img",children:t("img",{src:`/public/images/subcategorias/${i.icon}`,width:"35px"})}),t("span",{className:"tree-division__title my-auto",children:i.nombre})]}):f("span",{className:"tree-division tree-division1",onClick:()=>w(i),children:[v=="ActividadEconomica"&&t("div",{class:"tree-division__img",children:t("img",{src:`/public/images/subcategorias/${i.icon}`,width:"35px"})}),t("span",{className:"tree-division__title my-auto",children:i.nombre})]})})]},i.id),x.includes(i.id)&&t("ul",{className:`tree-children ${v}`,children:B.map((e,s)=>t(A,{children:i.id==e.id_padre_sub_categoria&&f("li",{className:`tree-node has-child draggable segmento ${N.includes(e.id)?"expanded":""}`,id:"segmento_"+e.id,children:[f("div",{className:"tree-content segmento",children:[t("i",{className:"tree-arrow expanded has-child ltr"}),t("input",{id:"segmento_check_"+e.id,class:`${H.includes(e.id)?"check-minus":""}`,type:"checkbox",name:"actividad_economica",onChange:()=>w(e),checked:_.includes(e.id)?"checked":""}),t("span",{className:"tree-anchor",children:v=="ActividadEconomica"?t("span",{className:"tree-division tree-division1",onClick:()=>ie(e.id),children:t("span",{className:"tree-division__title my-auto",children:e.nombre})}):t("span",{className:"tree-division tree-division1",children:t(A,{children:s%2==0?t("span",{className:"tree-division__title my-auto",children:e.nombre}):t("span",{className:"tree-division__title-gray my-auto",children:e.nombre})})})})]}),v=="ActividadEconomica"&&N.includes(e.id)&&t("ul",{className:"tree-children actividad-economica",children:O.map((a,c)=>t(A,{children:e.id==a.id_padre_sub_categoria&&t("li",{className:"tree-node draggable",children:f("div",{className:"tree-content actividad-economica",onClick:()=>w(a),children:[t("input",{type:"checkbox",name:"actividad_economica",onChange:()=>w(a),checked:_.includes(a.id)?"checked":""}),t("span",{className:"tree-anchor children",children:t("span",{className:"tree-division tree-division1",children:t(A,{children:t("span",{className:"tree-division__title my-auto",children:a.id+" - "+a.nombre})})})})]})})}))})]})}))})]})}))})]})};export{le as A};