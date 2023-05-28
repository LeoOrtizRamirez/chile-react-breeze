import{f as d,e as u,s as X,t as Y,v as N,i as Z}from"./hasClass-af14eb6d.js";import{r as l,a as n,j,F as P}from"./app-e3fda34c.js";import{h as ee}from"./ElementChildren-3055daa0.js";function oe({as:e,bsPrefix:o,className:t,...s}){o=u(o,"col");const a=X(),r=Y(),c=[],m=[];return a.forEach(i=>{const p=s[i];delete s[i];let f,$,y;typeof p=="object"&&p!=null?{span:f,offset:$,order:y}=p:f=p;const h=i!==r?`-${i}`:"";f&&c.push(f===!0?`${o}${h}`:`${o}${h}-${f}`),y!=null&&m.push(`order${h}-${y}`),$!=null&&m.push(`offset${h}-${$}`)}),[{...s,className:d(t,...c,...m)},{as:e,bsPrefix:o,spans:c}]}const B=l.exports.forwardRef((e,o)=>{const[{className:t,...s},{as:a="div",bsPrefix:r,spans:c}]=oe(e);return n(a,{...s,ref:o,className:d(t,!c.length&&r)})});B.displayName="Col";const te=B,se={type:N.exports.string,tooltip:N.exports.bool,as:N.exports.elementType},w=l.exports.forwardRef(({as:e="div",className:o,type:t="valid",tooltip:s=!1,...a},r)=>n(e,{...a,ref:r,className:d(o,`${t}-${s?"tooltip":"feedback"}`)}));w.displayName="Feedback";w.propTypes=se;const O=w,ae=l.exports.createContext({}),F=ae,S=l.exports.forwardRef(({id:e,bsPrefix:o,className:t,type:s="checkbox",isValid:a=!1,isInvalid:r=!1,as:c="input",...m},i)=>{const{controlId:p}=l.exports.useContext(F);return o=u(o,"form-check-input"),n(c,{...m,ref:i,type:s,id:e||p,className:d(t,o,a&&"is-valid",r&&"is-invalid")})});S.displayName="FormCheckInput";const b=S,G=l.exports.forwardRef(({bsPrefix:e,className:o,htmlFor:t,...s},a)=>{const{controlId:r}=l.exports.useContext(F);return e=u(e,"form-check-label"),n("label",{...s,ref:a,htmlFor:t||r,className:d(o,e)})});G.displayName="FormCheckLabel";const k=G,M=l.exports.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:t,inline:s=!1,reverse:a=!1,disabled:r=!1,isValid:c=!1,isInvalid:m=!1,feedbackTooltip:i=!1,feedback:p,feedbackType:f,className:$,style:y,title:h="",type:C="checkbox",label:g,children:v,as:D="input",...J},K)=>{o=u(o,"form-check"),t=u(t,"form-switch");const{controlId:I}=l.exports.useContext(F),Q=l.exports.useMemo(()=>({controlId:e||I}),[I,e]),T=!v&&g!=null&&g!==!1||ee(v,k),U=n(b,{...J,type:C==="switch"?"checkbox":C,ref:K,isValid:c,isInvalid:m,disabled:r,as:D});return n(F.Provider,{value:Q,children:n("div",{style:y,className:d($,T&&o,s&&`${o}-inline`,a&&`${o}-reverse`,C==="switch"&&t),children:v||j(P,{children:[U,T&&n(k,{title:h,children:g}),p&&n(O,{type:f,tooltip:i,children:p})]})})})});M.displayName="FormCheck";const x=Object.assign(M,{Input:b,Label:k}),V=l.exports.forwardRef(({bsPrefix:e,type:o,size:t,htmlSize:s,id:a,className:r,isValid:c=!1,isInvalid:m=!1,plaintext:i,readOnly:p,as:f="input",...$},y)=>{const{controlId:h}=l.exports.useContext(F);e=u(e,"form-control");let C;return i?C={[`${e}-plaintext`]:!0}:C={[e]:!0,[`${e}-${t}`]:t},n(f,{...$,type:o,size:s,ref:y,readOnly:p,id:a||h,className:d(r,C,c&&"is-valid",m&&"is-invalid",o==="color"&&`${e}-color`)})});V.displayName="FormControl";const re=Object.assign(V,{Feedback:O}),le=Z("form-floating"),E=l.exports.forwardRef(({controlId:e,as:o="div",...t},s)=>{const a=l.exports.useMemo(()=>({controlId:e}),[e]);return n(F.Provider,{value:a,children:n(o,{...t,ref:s})})});E.displayName="FormGroup";const H=E,ne={column:!1,visuallyHidden:!1},R=l.exports.forwardRef(({as:e="label",bsPrefix:o,column:t,visuallyHidden:s,className:a,htmlFor:r,...c},m)=>{const{controlId:i}=l.exports.useContext(F);o=u(o,"form-label");let p="col-form-label";typeof t=="string"&&(p=`${p} ${p}-${t}`);const f=d(a,o,s&&"visually-hidden",t&&p);return r=r||i,t?n(te,{ref:m,as:"label",className:f,htmlFor:r,...c}):n(e,{ref:m,className:f,htmlFor:r,...c})});R.displayName="FormLabel";R.defaultProps=ne;const ce=R,W=l.exports.forwardRef(({bsPrefix:e,className:o,id:t,...s},a)=>{const{controlId:r}=l.exports.useContext(F);return e=u(e,"form-range"),n("input",{...s,type:"range",ref:a,className:d(o,e),id:t||r})});W.displayName="FormRange";const pe=W,_=l.exports.forwardRef(({bsPrefix:e,size:o,htmlSize:t,className:s,isValid:a=!1,isInvalid:r=!1,id:c,...m},i)=>{const{controlId:p}=l.exports.useContext(F);return e=u(e,"form-select"),n("select",{...m,size:t,ref:i,className:d(s,e,o&&`${e}-${o}`,a&&"is-valid",r&&"is-invalid"),id:c||p})});_.displayName="FormSelect";const me=_,q=l.exports.forwardRef(({bsPrefix:e,className:o,as:t="small",muted:s,...a},r)=>(e=u(e,"form-text"),n(t,{...a,ref:r,className:d(o,e,s&&"text-muted")})));q.displayName="FormText";const ie=q,z=l.exports.forwardRef((e,o)=>n(x,{...e,ref:o,type:"switch"}));z.displayName="Switch";const de=Object.assign(z,{Input:x.Input,Label:x.Label}),A=l.exports.forwardRef(({bsPrefix:e,className:o,children:t,controlId:s,label:a,...r},c)=>(e=u(e,"form-floating"),j(H,{ref:c,className:d(o,e),controlId:s,...r,children:[t,n("label",{htmlFor:s,children:a})]})));A.displayName="FloatingLabel";const fe=A,ue={_ref:N.exports.any,validated:N.exports.bool,as:N.exports.elementType},L=l.exports.forwardRef(({className:e,validated:o,as:t="form",...s},a)=>n(t,{...s,ref:a,className:d(e,o&&"was-validated")}));L.displayName="Form";L.propTypes=ue;const ye=Object.assign(L,{Group:H,Control:re,Floating:le,Check:x,Switch:de,Label:ce,Text:ie,Range:pe,Select:me,FloatingLabel:fe});export{te as C,ye as F};
