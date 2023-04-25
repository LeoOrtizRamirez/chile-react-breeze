import{e as p,f as u,j as O}from"./hasClass-008c2dd2.js";import{r,a as d}from"./app-3912c2f9.js";import{C as S}from"./Collapse-c4cae68c.js";function C(e,o){return Array.isArray(e)?e.includes(o):e===o}const N=r.exports.createContext({});N.displayName="AccordionContext";const x=N,v=r.exports.forwardRef(({as:e="div",bsPrefix:o,className:n,children:c,eventKey:s,...a},t)=>{const{activeEventKey:i}=r.exports.useContext(x);return o=p(o,"accordion-collapse"),d(S,{ref:t,in:C(i,s),...a,className:u(n,o),children:d(e,{children:r.exports.Children.only(c)})})});v.displayName="AccordionCollapse";const h=v,B=r.exports.createContext({eventKey:""});B.displayName="AccordionItemContext";const y=B,w=r.exports.forwardRef(({as:e="div",bsPrefix:o,className:n,onEnter:c,onEntering:s,onEntered:a,onExit:t,onExiting:i,onExited:l,...A},m)=>{o=p(o,"accordion-body");const{eventKey:f}=r.exports.useContext(y);return d(h,{eventKey:f,onEnter:c,onEntering:s,onEntered:a,onExit:t,onExiting:i,onExited:l,children:d(e,{ref:m,...A,className:u(n,o)})})});w.displayName="AccordionBody";const g=w;function j(e,o){const{activeEventKey:n,onSelect:c,alwaysOpen:s}=r.exports.useContext(x);return a=>{let t=e===n?null:e;s&&(Array.isArray(n)?n.includes(e)?t=n.filter(i=>i!==e):t=[...n,e]:t=[e]),c==null||c(t,a),o==null||o(a)}}const E=r.exports.forwardRef(({as:e="button",bsPrefix:o,className:n,onClick:c,...s},a)=>{o=p(o,"accordion-button");const{eventKey:t}=r.exports.useContext(y),i=j(t,c),{activeEventKey:l}=r.exports.useContext(x);return e==="button"&&(s.type="button"),d(e,{ref:a,onClick:i,...s,"aria-expanded":t===l,className:u(n,o,!C(l,t)&&"collapsed")})});E.displayName="AccordionButton";const $=E,I=r.exports.forwardRef(({as:e="h2",bsPrefix:o,className:n,children:c,onClick:s,...a},t)=>(o=p(o,"accordion-header"),d(e,{ref:t,...a,className:u(n,o),children:d($,{onClick:s,children:c})})));I.displayName="AccordionHeader";const k=I,R=r.exports.forwardRef(({as:e="div",bsPrefix:o,className:n,eventKey:c,...s},a)=>{o=p(o,"accordion-item");const t=r.exports.useMemo(()=>({eventKey:c}),[c]);return d(y.Provider,{value:t,children:d(e,{ref:a,...s,className:u(n,o)})})});R.displayName="AccordionItem";const K=R,H=r.exports.forwardRef((e,o)=>{const{as:n="div",activeKey:c,bsPrefix:s,className:a,onSelect:t,flush:i,alwaysOpen:l,...A}=O(e,{activeKey:"onSelect"}),m=p(s,"accordion"),f=r.exports.useMemo(()=>({activeEventKey:c,onSelect:t,alwaysOpen:l}),[c,t,l]);return d(x.Provider,{value:f,children:d(n,{ref:o,...A,className:u(a,m,i&&`${m}-flush`)})})});H.displayName="Accordion";const q=Object.assign(H,{Button:$,Collapse:h,Item:K,Header:k,Body:g});export{q as A};