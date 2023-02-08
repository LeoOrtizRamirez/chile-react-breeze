import{c as m,u as i,a as U}from"./createWithBsPrefix-18db6ba8.js";import{p as y}from"./index-67732e07.js";import{r,a as n,j as b,F as X}from"./app-c9ca2fae.js";import{h as Y}from"./ElementChildren-95979702.js";import{C as Z}from"./Col-a3f870ad.js";const P={type:y.exports.string,tooltip:y.exports.bool,as:y.exports.elementType},w=r.exports.forwardRef(({as:e="div",className:o,type:t="valid",tooltip:s=!1,...a},l)=>n(e,{...a,ref:l,className:m(o,`${t}-${s?"tooltip":"feedback"}`)}));w.displayName="Feedback";w.propTypes=P;const j=w,u=r.exports.createContext({}),O=r.exports.forwardRef(({id:e,bsPrefix:o,className:t,type:s="checkbox",isValid:a=!1,isInvalid:l=!1,as:p="input",...d},f)=>{const{controlId:c}=r.exports.useContext(u);return o=i(o,"form-check-input"),n(p,{...d,ref:f,type:s,id:e||c,className:m(t,o,a&&"is-valid",l&&"is-invalid")})});O.displayName="FormCheckInput";const S=O,G=r.exports.forwardRef(({bsPrefix:e,className:o,htmlFor:t,...s},a)=>{const{controlId:l}=r.exports.useContext(u);return e=i(e,"form-check-label"),n("label",{...s,ref:a,htmlFor:t||l,className:m(o,e)})});G.displayName="FormCheckLabel";const v=G,B=r.exports.forwardRef(({id:e,bsPrefix:o,bsSwitchPrefix:t,inline:s=!1,reverse:a=!1,disabled:l=!1,isValid:p=!1,isInvalid:d=!1,feedbackTooltip:f=!1,feedback:c,feedbackType:h,className:C,style:$,title:N="",type:F="checkbox",label:g,children:k,as:D="input",...E},J)=>{o=i(o,"form-check"),t=i(t,"form-switch");const{controlId:I}=r.exports.useContext(u),K=r.exports.useMemo(()=>({controlId:e||I}),[I,e]),T=!k&&g!=null&&g!==!1||Y(k,v),Q=n(S,{...E,type:F==="switch"?"checkbox":F,ref:J,isValid:p,isInvalid:d,disabled:l,as:D});return n(u.Provider,{value:K,children:n("div",{style:$,className:m(C,T&&o,s&&`${o}-inline`,a&&`${o}-reverse`,F==="switch"&&t),children:k||b(X,{children:[Q,T&&n(v,{title:N,children:g}),c&&n(j,{type:h,tooltip:f,children:c})]})})})});B.displayName="FormCheck";const x=Object.assign(B,{Input:S,Label:v}),M=r.exports.forwardRef(({bsPrefix:e,type:o,size:t,htmlSize:s,id:a,className:l,isValid:p=!1,isInvalid:d=!1,plaintext:f,readOnly:c,as:h="input",...C},$)=>{const{controlId:N}=r.exports.useContext(u);e=i(e,"form-control");let F;return f?F={[`${e}-plaintext`]:!0}:F={[e]:!0,[`${e}-${t}`]:t},n(h,{...C,type:o,size:s,ref:$,readOnly:c,id:a||N,className:m(l,F,p&&"is-valid",d&&"is-invalid",o==="color"&&`${e}-color`)})});M.displayName="FormControl";const ee=Object.assign(M,{Feedback:j}),oe=U("form-floating"),H=r.exports.forwardRef(({controlId:e,as:o="div",...t},s)=>{const a=r.exports.useMemo(()=>({controlId:e}),[e]);return n(u.Provider,{value:a,children:n(o,{...t,ref:s})})});H.displayName="FormGroup";const V=H,te={column:!1,visuallyHidden:!1},R=r.exports.forwardRef(({as:e="label",bsPrefix:o,column:t,visuallyHidden:s,className:a,htmlFor:l,...p},d)=>{const{controlId:f}=r.exports.useContext(u);o=i(o,"form-label");let c="col-form-label";typeof t=="string"&&(c=`${c} ${c}-${t}`);const h=m(a,o,s&&"visually-hidden",t&&c);return l=l||f,t?n(Z,{ref:d,as:"label",className:h,htmlFor:l,...p}):n(e,{ref:d,className:h,htmlFor:l,...p})});R.displayName="FormLabel";R.defaultProps=te;const se=R,W=r.exports.forwardRef(({bsPrefix:e,className:o,id:t,...s},a)=>{const{controlId:l}=r.exports.useContext(u);return e=i(e,"form-range"),n("input",{...s,type:"range",ref:a,className:m(o,e),id:t||l})});W.displayName="FormRange";const ae=W,_=r.exports.forwardRef(({bsPrefix:e,size:o,htmlSize:t,className:s,isValid:a=!1,isInvalid:l=!1,id:p,...d},f)=>{const{controlId:c}=r.exports.useContext(u);return e=i(e,"form-select"),n("select",{...d,size:t,ref:f,className:m(s,e,o&&`${e}-${o}`,a&&"is-valid",l&&"is-invalid"),id:p||c})});_.displayName="FormSelect";const re=_,q=r.exports.forwardRef(({bsPrefix:e,className:o,as:t="small",muted:s,...a},l)=>(e=i(e,"form-text"),n(t,{...a,ref:l,className:m(o,e,s&&"text-muted")})));q.displayName="FormText";const le=q,z=r.exports.forwardRef((e,o)=>n(x,{...e,ref:o,type:"switch"}));z.displayName="Switch";const ne=Object.assign(z,{Input:x.Input,Label:x.Label}),A=r.exports.forwardRef(({bsPrefix:e,className:o,children:t,controlId:s,label:a,...l},p)=>(e=i(e,"form-floating"),b(V,{ref:p,className:m(o,e),controlId:s,...l,children:[t,n("label",{htmlFor:s,children:a})]})));A.displayName="FloatingLabel";const ce=A,pe={_ref:y.exports.any,validated:y.exports.bool,as:y.exports.elementType},L=r.exports.forwardRef(({className:e,validated:o,as:t="form",...s},a)=>n(t,{...s,ref:a,className:m(e,o&&"was-validated")}));L.displayName="Form";L.propTypes=pe;const Fe=Object.assign(L,{Group:V,Control:ee,Floating:oe,Check:x,Switch:ne,Label:se,Text:le,Range:ae,Select:re,FloatingLabel:ce});export{Fe as F};
