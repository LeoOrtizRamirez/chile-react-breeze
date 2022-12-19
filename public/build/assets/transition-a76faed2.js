import{r as i,T as g}from"./app-fb352c22.js";const be=typeof window>"u"||typeof document>"u";let k=be?i.exports.useEffect:i.exports.useLayoutEffect;function $(e){let t=i.exports.useRef(e);return k(()=>{t.current=e},[e]),t}function ge(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function A(){let e=[],t=[],n={enqueue(r){t.push(r)},addEventListener(r,o,c,f){return r.addEventListener(o,c,f),n.add(()=>r.removeEventListener(o,c,f))},requestAnimationFrame(...r){let o=requestAnimationFrame(...r);return n.add(()=>cancelAnimationFrame(o))},nextFrame(...r){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...r))},setTimeout(...r){let o=setTimeout(...r);return n.add(()=>clearTimeout(o))},microTask(...r){let o={current:!0};return ge(()=>{o.current&&r[0]()}),n.add(()=>{o.current=!1})},add(r){return e.push(r),()=>{let o=e.indexOf(r);if(o>=0){let[c]=e.splice(o,1);c()}}},dispose(){for(let r of e.splice(0))r()},async workQueue(){for(let r of t.splice(0))await r()}};return n}function te(){let[e]=i.exports.useState(A);return i.exports.useEffect(()=>()=>e.dispose(),[e]),e}let S=function(e){let t=$(e);return g.useCallback((...n)=>t.current(...n),[t])},G={serverHandoffComplete:!1};function re(){let[e,t]=i.exports.useState(G.serverHandoffComplete);return i.exports.useEffect(()=>{e!==!0&&t(!0)},[e]),i.exports.useEffect(()=>{G.serverHandoffComplete===!1&&(G.serverHandoffComplete=!0)},[]),e}function E(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,E),r}let ne=Symbol();function He(e,t=!0){return Object.assign(e,{[ne]:t})}function oe(...e){let t=i.exports.useRef(e);i.exports.useEffect(()=>{t.current=e},[e]);let n=S(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[ne]))?void 0:n}var ie=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ie||{}),w=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(w||{});function se({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:c=!0,name:f}){let u=ue(t,e);if(c)return N(u,n,r,f);let a=o??0;if(a&2){let{static:l=!1,...d}=u;if(l)return N(d,n,r,f)}if(a&1){let{unmount:l=!0,...d}=u;return E(l?0:1,{[0](){return null},[1](){return N({...d,hidden:!0,style:{display:"none"}},n,r,f)}})}return N(u,n,r,f)}function N(e,t={},n,r){let{as:o=n,children:c,refName:f="ref",...u}=K(e,["unmount","static"]),a=e.ref!==void 0?{[f]:e.ref}:{},l=typeof c=="function"?c(t):c;u.className&&typeof u.className=="function"&&(u.className=u.className(t));let d={};if(t){let v=!1,b=[];for(let[m,s]of Object.entries(t))typeof s=="boolean"&&(v=!0),s===!0&&b.push(m);v&&(d["data-headlessui-state"]=b.join(" "))}if(o===i.exports.Fragment&&Object.keys(Z(u)).length>0){if(!i.exports.isValidElement(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(u).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`));return i.exports.cloneElement(l,Object.assign({},ue(l.props,Z(K(u,["ref"]))),d,a,Ee(l.ref,a.ref)))}return i.exports.createElement(o,Object.assign({},K(u,["ref"]),o!==i.exports.Fragment&&a,o!==i.exports.Fragment&&d),l)}function Ee(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function ue(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...c){let f=n[r];for(let u of f){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;u(o,...c)}}});return t}function _(e){var t;return Object.assign(i.exports.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function Z(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function K(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let z=i.exports.createContext(null);z.displayName="OpenClosedContext";var R=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(R||{});function le(){return i.exports.useContext(z)}function ye({value:e,children:t}){return g.createElement(z.Provider,{value:e},t)}function ae(){let e=i.exports.useRef(!1);return k(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function we(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Q(e,...t){e&&t.length>0&&e.classList.add(...t)}function W(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Te(e,t){let n=A();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[c,f]=[r,o].map(u=>{let[a=0]=u.split(",").filter(Boolean).map(l=>l.includes("ms")?parseFloat(l):parseFloat(l)*1e3).sort((l,d)=>d-l);return a});if(c+f!==0){let u=n.addEventListener(e,"transitionend",a=>{a.target===a.currentTarget&&(t(),u())})}else t();return n.add(()=>t()),n.dispose}function Ce(e,t,n,r){let o=n?"enter":"leave",c=A(),f=r!==void 0?we(r):()=>{};o==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let u=E(o,{enter:()=>t.enter,leave:()=>t.leave}),a=E(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),l=E(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return W(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),Q(e,...u,...l),c.nextFrame(()=>{W(e,...l),Q(e,...a),Te(e,()=>(W(e,...u),Q(e,...t.entered),f()))}),c.dispose}function Fe({container:e,direction:t,classes:n,onStart:r,onStop:o}){let c=ae(),f=te(),u=$(t);k(()=>{let a=A();f.add(a.dispose);let l=e.current;if(l&&u.current!=="idle"&&c.current)return a.dispose(),r.current(u.current),a.add(Ce(l,n.current,u.current==="enter",()=>{a.dispose(),o.current(u.current)})),a.dispose},[t])}function Se(...e){return e.filter(Boolean).join(" ")}function F(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let H=i.exports.createContext(null);H.displayName="TransitionContext";var $e=(e=>(e.Visible="visible",e.Hidden="hidden",e))($e||{});function Re(){let e=i.exports.useContext(H);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function je(){let e=i.exports.useContext(q);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let q=i.exports.createContext(null);q.displayName="NestingContext";function M(e){return"children"in e?M(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function fe(e,t){let n=$(e),r=i.exports.useRef([]),o=ae(),c=te(),f=S((m,s=w.Hidden)=>{let h=r.current.findIndex(({el:p})=>p===m);h!==-1&&(E(s,{[w.Unmount](){r.current.splice(h,1)},[w.Hidden](){r.current[h].state="hidden"}}),c.microTask(()=>{var p;!M(r)&&o.current&&((p=n.current)==null||p.call(n))}))}),u=S(m=>{let s=r.current.find(({el:h})=>h===m);return s?s.state!=="visible"&&(s.state="visible"):r.current.push({el:m,state:"visible"}),()=>f(m,w.Unmount)}),a=i.exports.useRef([]),l=i.exports.useRef(Promise.resolve()),d=i.exports.useRef({enter:[],leave:[],idle:[]}),v=S((m,s,h)=>{a.current.splice(0),t&&(t.chains.current[s]=t.chains.current[s].filter(([p])=>p!==m)),t==null||t.chains.current[s].push([m,new Promise(p=>{a.current.push(p)})]),t==null||t.chains.current[s].push([m,new Promise(p=>{Promise.all(d.current[s].map(([x,y])=>y)).then(()=>p())})]),s==="enter"?l.current=l.current.then(()=>t==null?void 0:t.wait.current).then(()=>h(s)):h(s)}),b=S((m,s,h)=>{Promise.all(d.current[s].splice(0).map(([p,x])=>x)).then(()=>{var p;(p=a.current.shift())==null||p()}).then(()=>h(s))});return i.exports.useMemo(()=>({children:r,register:u,unregister:f,onStart:v,onStop:b,wait:l,chains:d}),[u,f,r,v,b,d,l])}function Oe(){}let Pe=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function ee(e){var t;let n={};for(let r of Pe)n[r]=(t=e[r])!=null?t:Oe;return n}function Le(e){let t=i.exports.useRef(ee(e));return i.exports.useEffect(()=>{t.current=ee(e)},[e]),t}let Ne="div",ce=ie.RenderStrategy,de=_(function(e,t){let{beforeEnter:n,afterEnter:r,beforeLeave:o,afterLeave:c,enter:f,enterFrom:u,enterTo:a,entered:l,leave:d,leaveFrom:v,leaveTo:b,...m}=e,s=i.exports.useRef(null),h=oe(s,t),p=m.unmount?w.Unmount:w.Hidden,{show:x,appear:y,initial:pe}=Re(),[T,D]=i.exports.useState(x?"visible":"hidden"),X=je(),{register:j,unregister:O}=X,U=i.exports.useRef(null);i.exports.useEffect(()=>j(s),[j,s]),i.exports.useEffect(()=>{if(p===w.Hidden&&s.current){if(x&&T!=="visible"){D("visible");return}return E(T,{hidden:()=>O(s),visible:()=>j(s)})}},[T,s,j,O,x,p]);let B=$({enter:F(f),enterFrom:F(u),enterTo:F(a),entered:F(l),leave:F(d),leaveFrom:F(v),leaveTo:F(b)}),P=Le({beforeEnter:n,afterEnter:r,beforeLeave:o,afterLeave:c}),J=re();i.exports.useEffect(()=>{if(J&&T==="visible"&&s.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[s,T,J]);let V=pe&&!y,me=(()=>!J||V||U.current===x?"idle":x?"enter":"leave")(),ve=S(C=>E(C,{enter:()=>P.current.beforeEnter(),leave:()=>P.current.beforeLeave(),idle:()=>{}})),he=S(C=>E(C,{enter:()=>P.current.afterEnter(),leave:()=>P.current.afterLeave(),idle:()=>{}})),L=fe(()=>{D("hidden"),O(s)},X);Fe({container:s,classes:B,direction:me,onStart:$(C=>{L.onStart(s,C,ve)}),onStop:$(C=>{L.onStop(s,C,he),C==="leave"&&!M(L)&&(D("hidden"),O(s))})}),i.exports.useEffect(()=>{!V||(p===w.Hidden?U.current=null:U.current=x)},[x,V,T]);let I=m,xe={ref:h};return y&&x&&(typeof window>"u"||typeof document>"u")&&(I={...I,className:Se(m.className,...B.current.enter,...B.current.enterFrom)}),g.createElement(q.Provider,{value:L},g.createElement(ye,{value:E(T,{visible:R.Open,hidden:R.Closed})},se({ourProps:xe,theirProps:I,defaultTag:Ne,features:ce,visible:T==="visible",name:"Transition.Child"})))}),Y=_(function(e,t){let{show:n,appear:r=!1,unmount:o,...c}=e,f=i.exports.useRef(null),u=oe(f,t);re();let a=le();if(n===void 0&&a!==null&&(n=E(a,{[R.Open]:!0,[R.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[l,d]=i.exports.useState(n?"visible":"hidden"),v=fe(()=>{d("hidden")}),[b,m]=i.exports.useState(!0),s=i.exports.useRef([n]);k(()=>{b!==!1&&s.current[s.current.length-1]!==n&&(s.current.push(n),m(!1))},[s,n]);let h=i.exports.useMemo(()=>({show:n,appear:r,initial:b}),[n,r,b]);i.exports.useEffect(()=>{if(n)d("visible");else if(!M(v))d("hidden");else{let x=f.current;if(!x)return;let y=x.getBoundingClientRect();y.x===0&&y.y===0&&y.width===0&&y.height===0&&d("hidden")}},[n,v]);let p={unmount:o};return g.createElement(q.Provider,{value:v},g.createElement(H.Provider,{value:h},se({ourProps:{...p,as:i.exports.Fragment,children:g.createElement(de,{ref:u,...p,...c})},theirProps:{},defaultTag:i.exports.Fragment,features:ce,visible:l==="visible",name:"Transition"})))}),ke=_(function(e,t){let n=i.exports.useContext(H)!==null,r=le()!==null;return g.createElement(g.Fragment,null,!n&&r?g.createElement(Y,{ref:t,...e}):g.createElement(de,{ref:t,...e}))}),qe=Object.assign(Y,{Child:ke,Root:Y});export{se as $,_ as C,qe as J,ie as S,He as T,re as a,$ as b,le as c,R as d,be as e,ae as f,A as m,S as o,te as p,k as s,ge as t,E as u,oe as y};
