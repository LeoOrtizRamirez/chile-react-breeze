import{c as X,b as st,r as at,u as tt,j as O,a as c,F as ot,H as ut}from"./app-d73e3966.js";import{D as G,A as dt}from"./AuthenticatedLayout-66378163.js";import{I as K}from"./InputError-35f88abe.js";import{P as et}from"./PrimaryButton-52cad9b3.js";import"./ApplicationLogo-b70d0726.js";import"./transition-7052e466.js";var rt={exports:{}};(function(g,z){(function(b,p){g.exports=p()})(X,function(){var b=1e3,p=6e4,N=36e5,y="millisecond",D="second",S="minute",_="hour",o="day",v="week",l="month",F="quarter",T="year",k="date",j="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,P=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,U={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(n){var r=["th","st","nd","rd"],t=n%100;return"["+n+(r[(t-20)%10]||r[t]||r[0])+"]"}},E=function(n,r,t){var i=String(n);return!i||i.length>=r?n:""+Array(r+1-i.length).join(t)+n},W={s:E,z:function(n){var r=-n.utcOffset(),t=Math.abs(r),i=Math.floor(t/60),e=t%60;return(r<=0?"+":"-")+E(i,2,"0")+":"+E(e,2,"0")},m:function n(r,t){if(r.date()<t.date())return-n(t,r);var i=12*(t.year()-r.year())+(t.month()-r.month()),e=r.clone().add(i,l),a=t-e<0,s=r.clone().add(i+(a?-1:1),l);return+(-(i+(t-e)/(a?e-s:s-e))||0)},a:function(n){return n<0?Math.ceil(n)||0:Math.floor(n)},p:function(n){return{M:l,y:T,w:v,d:o,D:k,h:_,m:S,s:D,ms:y,Q:F}[n]||String(n||"").toLowerCase().replace(/s$/,"")},u:function(n){return n===void 0}},M="en",w={};w[M]=U;var A=function(n){return n instanceof V},H=function n(r,t,i){var e;if(!r)return M;if(typeof r=="string"){var a=r.toLowerCase();w[a]&&(e=a),t&&(w[a]=t,e=a);var s=r.split("-");if(!e&&s.length>1)return n(s[0])}else{var u=r.name;w[u]=r,e=u}return!i&&e&&(M=e),e||!i&&M},m=function(n,r){if(A(n))return n.clone();var t=typeof r=="object"?r:{};return t.date=n,t.args=arguments,new V(t)},d=W;d.l=H,d.i=A,d.w=function(n,r){return m(n,{locale:r.$L,utc:r.$u,x:r.$x,$offset:r.$offset})};var V=function(){function n(t){this.$L=H(t.locale,null,!0),this.parse(t)}var r=n.prototype;return r.parse=function(t){this.$d=function(i){var e=i.date,a=i.utc;if(e===null)return new Date(NaN);if(d.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var s=e.match(B);if(s){var u=s[2]-1||0,f=(s[7]||"0").substring(0,3);return a?new Date(Date.UTC(s[1],u,s[3]||1,s[4]||0,s[5]||0,s[6]||0,f)):new Date(s[1],u,s[3]||1,s[4]||0,s[5]||0,s[6]||0,f)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},r.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},r.$utils=function(){return d},r.isValid=function(){return this.$d.toString()!==j},r.isSame=function(t,i){var e=m(t);return this.startOf(i)<=e&&e<=this.endOf(i)},r.isAfter=function(t,i){return m(t)<this.startOf(i)},r.isBefore=function(t,i){return this.endOf(i)<m(t)},r.$g=function(t,i,e){return d.u(t)?this[i]:this.set(e,t)},r.unix=function(){return Math.floor(this.valueOf()/1e3)},r.valueOf=function(){return this.$d.getTime()},r.startOf=function(t,i){var e=this,a=!!d.u(i)||i,s=d.p(t),u=function(I,x){var Y=d.w(e.$u?Date.UTC(e.$y,x,I):new Date(e.$y,x,I),e);return a?Y:Y.endOf(o)},f=function(I,x){return d.w(e.toDate()[I].apply(e.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(x)),e)},h=this.$W,$=this.$M,L=this.$D,C="set"+(this.$u?"UTC":"");switch(s){case T:return a?u(1,0):u(31,11);case l:return a?u(1,$):u(0,$+1);case v:var J=this.$locale().weekStart||0,Z=(h<J?h+7:h)-J;return u(a?L-Z:L+(6-Z),$);case o:case k:return f(C+"Hours",0);case _:return f(C+"Minutes",1);case S:return f(C+"Seconds",2);case D:return f(C+"Milliseconds",3);default:return this.clone()}},r.endOf=function(t){return this.startOf(t,!1)},r.$set=function(t,i){var e,a=d.p(t),s="set"+(this.$u?"UTC":""),u=(e={},e[o]=s+"Date",e[k]=s+"Date",e[l]=s+"Month",e[T]=s+"FullYear",e[_]=s+"Hours",e[S]=s+"Minutes",e[D]=s+"Seconds",e[y]=s+"Milliseconds",e)[a],f=a===o?this.$D+(i-this.$W):i;if(a===l||a===T){var h=this.clone().set(k,1);h.$d[u](f),h.init(),this.$d=h.set(k,Math.min(this.$D,h.daysInMonth())).$d}else u&&this.$d[u](f);return this.init(),this},r.set=function(t,i){return this.clone().$set(t,i)},r.get=function(t){return this[d.p(t)]()},r.add=function(t,i){var e,a=this;t=Number(t);var s=d.p(i),u=function($){var L=m(a);return d.w(L.date(L.date()+Math.round($*t)),a)};if(s===l)return this.set(l,this.$M+t);if(s===T)return this.set(T,this.$y+t);if(s===o)return u(1);if(s===v)return u(7);var f=(e={},e[S]=p,e[_]=N,e[D]=b,e)[s]||1,h=this.$d.getTime()+t*f;return d.w(h,this)},r.subtract=function(t,i){return this.add(-1*t,i)},r.format=function(t){var i=this,e=this.$locale();if(!this.isValid())return e.invalidDate||j;var a=t||"YYYY-MM-DDTHH:mm:ssZ",s=d.z(this),u=this.$H,f=this.$m,h=this.$M,$=e.weekdays,L=e.months,C=function(x,Y,Q,q){return x&&(x[Y]||x(i,a))||Q[Y].slice(0,q)},J=function(x){return d.s(u%12||12,x,"0")},Z=e.meridiem||function(x,Y,Q){var q=x<12?"AM":"PM";return Q?q.toLowerCase():q},I={YY:String(this.$y).slice(-2),YYYY:this.$y,M:h+1,MM:d.s(h+1,2,"0"),MMM:C(e.monthsShort,h,L,3),MMMM:C(L,h),D:this.$D,DD:d.s(this.$D,2,"0"),d:String(this.$W),dd:C(e.weekdaysMin,this.$W,$,2),ddd:C(e.weekdaysShort,this.$W,$,3),dddd:$[this.$W],H:String(u),HH:d.s(u,2,"0"),h:J(1),hh:J(2),a:Z(u,f,!0),A:Z(u,f,!1),m:String(f),mm:d.s(f,2,"0"),s:String(this.$s),ss:d.s(this.$s,2,"0"),SSS:d.s(this.$ms,3,"0"),Z:s};return a.replace(P,function(x,Y){return Y||I[x]||s.replace(":","")})},r.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},r.diff=function(t,i,e){var a,s=d.p(i),u=m(t),f=(u.utcOffset()-this.utcOffset())*p,h=this-u,$=d.m(this,u);return $=(a={},a[T]=$/12,a[l]=$,a[F]=$/3,a[v]=(h-f)/6048e5,a[o]=(h-f)/864e5,a[_]=h/N,a[S]=h/p,a[D]=h/b,a)[s]||h,e?$:d.a($)},r.daysInMonth=function(){return this.endOf(l).$D},r.$locale=function(){return w[this.$L]},r.locale=function(t,i){if(!t)return this.$L;var e=this.clone(),a=H(t,i,!0);return a&&(e.$L=a),e},r.clone=function(){return d.w(this.$d,this)},r.toDate=function(){return new Date(this.valueOf())},r.toJSON=function(){return this.isValid()?this.toISOString():null},r.toISOString=function(){return this.$d.toISOString()},r.toString=function(){return this.$d.toUTCString()},n}(),R=V.prototype;return m.prototype=R,[["$ms",y],["$s",D],["$m",S],["$H",_],["$W",o],["$M",l],["$y",T],["$D",k]].forEach(function(n){R[n[1]]=function(r){return this.$g(r,n[0],n[1])}}),m.extend=function(n,r){return n.$i||(n(r,V,m),n.$i=!0),m},m.locale=H,m.isDayjs=A,m.unix=function(n){return m(1e3*n)},m.en=w[M],m.Ls=w,m.p={},m})})(rt);const nt=rt.exports;var it={exports:{}};(function(g,z){(function(b,p){g.exports=p()})(X,function(){return function(b,p,N){b=b||{};var y=p.prototype,D={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function S(o,v,l,F){return y.fromToBase(o,v,l,F)}N.en.relativeTime=D,y.fromToBase=function(o,v,l,F,T){for(var k,j,B,P=l.$locale().relativeTime||D,U=b.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],E=U.length,W=0;W<E;W+=1){var M=U[W];M.d&&(k=F?N(o).diff(l,M.d,!0):l.diff(o,M.d,!0));var w=(b.rounding||Math.round)(Math.abs(k));if(B=k>0,w<=M.r||!M.r){w<=1&&W>0&&(M=U[W-1]);var A=P[M.l];T&&(w=T(""+w)),j=typeof A=="string"?A.replace("%d",w):A(w,v,M.l,B);break}}if(v)return j;var H=B?P.future:P.past;return typeof H=="function"?H(j):H.replace("%s",j)},y.to=function(o,v){return S(o,v,this,!0)},y.from=function(o,v){return S(o,v,this)};var _=function(o){return o.$u?N.utc():N()};y.toNow=function(o){return this.to(_(this),o)},y.fromNow=function(o){return this.from(_(this),o)}}})})(it);const ct=it.exports;nt.extend(ct);const lt=({post:g})=>{const{auth:z}=st().props,[b,p]=at.exports.useState(!1),{data:N,setData:y,patch:D,processing:S,reset:_,errors:o}=tt({title:g.title,body:g.body}),v=l=>{l.preventDefault(),D(route("posts.update",g.id),{onSuccess:()=>p(!1)})};return O("div",{className:"p-5 flex space-x-2",children:[c("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-gray-200 -scale-x-100",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:c("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})}),O("div",{className:"flex-1",children:[O("div",{className:"flex justify-between items-center",children:[O("div",{children:[c("span",{className:"text-white",children:g.user.name}),c("small",{className:"ml-2 text-sm text-white",children:nt(g.created_at).fromNow()}),g.created_at!==g.updated_at&&c("small",{className:"text-sm text-gray-600",children:"· edited"})]}),g.user.id===z.user.id&&O(G,{children:[c(G.Trigger,{children:c("button",{children:c("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-white",viewBox:"0 0 20 20",fill:"currentColor",children:c("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})})})}),O(G.Content,{children:[c("button",{className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-200 focus:bg-gray-100 transition duration-150 ease-in-out",onClick:()=>p(!0),children:"Edit"}),c(G.Link,{as:"button",href:route("posts.destroy",g.id),method:"delete",children:"Delete"})]})]})]}),b?O("form",{onSubmit:v,children:[c("input",{value:N.title,onChange:l=>y("title",l.target.value),type:"text",className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",autoFocus:!0}),c("textarea",{value:N.body,onChange:l=>y("body",l.target.value),className:"mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),c(K,{message:o.message,className:"mt-2"}),O("div",{className:"space-x-2",children:[c(et,{className:"mt-4",children:"Save"}),c("button",{className:"inline-flex items-center px-4 py-2 bg-gray-300 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest active:bg-gray-300 transition ease-in-out duration-150",onClick:()=>p(!1)&&_(),children:"Cancel"})]})]}):O(ot,{children:[c("p",{className:"mt-4 text-lg text-white",children:g.title}),c("p",{className:"mt-4 text-white",children:g.body})]})]})]})},yt=({auth:g,posts:z})=>{const{data:b,setData:p,post:N,processing:y,reset:D,errors:S}=tt({title:"",body:""});return O(dt,{auth:g,children:[c(ut,{title:"Posts"}),O("div",{className:"max-w-2xl mx-auto p-4 sm:p-6 lg:p-8",children:[O("form",{onSubmit:o=>{o.preventDefault(),N(route("posts.store"),{onSuccess:()=>D()})},children:[c("input",{value:b.title,onChange:o=>p("title",o.target.value),type:"text",placeholder:"Title",autoFocus:!0,className:"mb-3 block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),c(K,{message:S.title,className:"mt-2"}),c("textarea",{value:b.body,onChange:o=>p("body",o.target.value),type:"text",placeholder:"Body",className:"block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"}),c(K,{message:S.body,className:"mt-2"}),c(et,{className:"mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2",disabled:y,children:"Create"})]}),c("div",{className:"mt-6 bg-indigo-400 rounded-lg divide-y-4 shadow-lg",children:z.map(o=>c(lt,{post:o},o.id))})]})]})};export{yt as default};
