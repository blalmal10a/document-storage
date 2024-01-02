import{u as ne,Q as j,a as I,b as le,c as ae,d as ie,e as re,C as se}from"./use-quasar.442f5c17.js";import{r as b,i as Y,o as $,c as q,a as H,n as Z,b as U,h as m,g as R,l as N,e as T,d as v,w as C,f as ue,j as ee,k as A,m as ce,p as te,q as de,s as fe,t as ve,u as he,v as B,x as V,y as ge,z as me,A as W,B as K,C as z,D as be,E as h,F as ye,G as k,H as pe,I as G,Q as F,J as we,K as ze,L as xe}from"./index.13b4843e.js";function Se(){const e=b(!Y.value);return e.value===!1&&$(()=>{e.value=!0}),e}const oe=typeof ResizeObserver!="undefined",J=oe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var D=q({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:y}){let l=null,t,o={width:-1,height:-1};function u(r){r===!0||e.debounce===0||e.debounce==="0"?s():l===null&&(l=setTimeout(s,e.debounce))}function s(){if(clearTimeout(l),l=null,t){const{offsetWidth:r,offsetHeight:a}=t;(r!==o.width||a!==o.height)&&(o={width:r,height:a},y("resize",o))}}const{proxy:d}=R();if(oe===!0){let r;const a=g=>{t=d.$el.parentNode,t?(r=new ResizeObserver(u),r.observe(t),s()):g!==!0&&U(()=>{a(!0)})};return $(()=>{a()}),H(()=>{clearTimeout(l),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),Z}else{let g=function(){clearTimeout(l),a!==void 0&&(a.removeEventListener!==void 0&&a.removeEventListener("resize",u,N.passive),a=void 0)},p=function(){g(),t&&t.contentDocument&&(a=t.contentDocument.defaultView,a.addEventListener("resize",u,N.passive),s())};const r=Se();let a;return $(()=>{U(()=>{t=d.$el,t&&p()})}),H(g),d.trigger=u,()=>{if(r.value===!0)return m("object",{style:J.style,tabindex:-1,type:"text/html",data:J.url,"aria-hidden":"true",onLoad:p})}}}}),Ce=q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:y,emit:l}){const{proxy:{$q:t}}=R(),o=ee(A,T);if(o===T)return console.error("QHeader needs to be child of QLayout"),T;const u=b(parseInt(e.heightHint,10)),s=b(!0),d=v(()=>e.reveal===!0||o.view.value.indexOf("H")>-1||t.platform.is.ios&&o.isContainer.value===!0),r=v(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return s.value===!0?u.value:0;const n=u.value-o.scroll.value.position;return n>0?n:0}),a=v(()=>e.modelValue!==!0||d.value===!0&&s.value!==!0),g=v(()=>e.modelValue===!0&&a.value===!0&&e.reveal===!0),p=v(()=>"q-header q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(a.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=v(()=>{const n=o.rows.value.top,w={};return n[0]==="l"&&o.left.space===!0&&(w[t.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),n[2]==="r"&&o.right.space===!0&&(w[t.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),w});function c(n,w){o.update("header",n,w)}function x(n,w){n.value!==w&&(n.value=w)}function O({height:n}){x(u,n),c("size",n)}function P(n){g.value===!0&&x(s,!0),l("focusin",n)}C(()=>e.modelValue,n=>{c("space",n),x(s,!0),o.animate()}),C(r,n=>{c("offset",n)}),C(()=>e.reveal,n=>{n===!1&&x(s,e.modelValue)}),C(s,n=>{o.animate(),l("reveal",n)}),C(o.scroll,n=>{e.reveal===!0&&x(s,n.direction==="up"||n.position<=e.revealOffset||n.position-n.inflectionPoint<100)});const _={};return o.instances.header=_,e.modelValue===!0&&c("size",u.value),c("space",e.modelValue),c("offset",r.value),H(()=>{o.instances.header===_&&(o.instances.header=void 0,c("size",0),c("offset",0),c("space",!1))}),()=>{const n=ue(y.default,[]);return e.elevated===!0&&n.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push(m(D,{debounce:0,onResize:O})),m("header",{class:p.value,style:S.value,onFocusin:P},n)}}}),Le=q({name:"QPageContainer",setup(e,{slots:y}){const{proxy:{$q:l}}=R(),t=ee(A,T);if(t===T)return console.error("QPageContainer needs to be child of QLayout"),T;te(de,!0);const o=v(()=>{const u={};return t.header.space===!0&&(u.paddingTop=`${t.header.size}px`),t.right.space===!0&&(u[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${t.right.size}px`),t.footer.space===!0&&(u.paddingBottom=`${t.footer.size}px`),t.left.space===!0&&(u[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${t.left.size}px`),u});return()=>m("div",{class:"q-page-container",style:o.value},ce(y.default))}});const{passive:X}=N,Te=["both","horizontal","vertical"];var _e=q({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Te.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:y}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let t=null,o,u;C(()=>e.scrollTarget,()=>{r(),d()});function s(){t!==null&&t();const p=Math.max(0,ve(o)),S=he(o),c={top:p-l.position.top,left:S-l.position.left};if(e.axis==="vertical"&&c.top===0||e.axis==="horizontal"&&c.left===0)return;const x=Math.abs(c.top)>=Math.abs(c.left)?c.top<0?"up":"down":c.left<0?"left":"right";l.position={top:p,left:S},l.directionChanged=l.direction!==x,l.delta=c,l.directionChanged===!0&&(l.direction=x,l.inflectionPoint=l.position),y("scroll",{...l})}function d(){o=fe(u,e.scrollTarget),o.addEventListener("scroll",a,X),a(!0)}function r(){o!==void 0&&(o.removeEventListener("scroll",a,X),o=void 0)}function a(p){if(p===!0||e.debounce===0||e.debounce==="0")s();else if(t===null){const[S,c]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];t=()=>{c(S),t=null}}}const{proxy:g}=R();return C(()=>g.$q.lang.rtl,s),$(()=>{u=g.$el.parentNode,d()}),H(()=>{t!==null&&t(),r()}),Object.assign(g,{trigger:a,getPosition:()=>l}),Z}}),Qe=q({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:y,emit:l}){const{proxy:{$q:t}}=R(),o=b(null),u=b(t.screen.height),s=b(e.container===!0?0:t.screen.width),d=b({position:0,direction:"down",inflectionPoint:0}),r=b(0),a=b(Y.value===!0?0:B()),g=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=v(()=>e.container===!1?{minHeight:t.screen.height+"px"}:null),S=v(()=>a.value!==0?{[t.lang.rtl===!0?"left":"right"]:`${a.value}px`}:null),c=v(()=>a.value!==0?{[t.lang.rtl===!0?"right":"left"]:0,[t.lang.rtl===!0?"left":"right"]:`-${a.value}px`,width:`calc(100% + ${a.value}px)`}:null);function x(i){if(e.container===!0||document.qScrollPrevented!==!0){const f={position:i.position.top,direction:i.direction,directionChanged:i.directionChanged,inflectionPoint:i.inflectionPoint.top,delta:i.delta.top};d.value=f,e.onScroll!==void 0&&l("scroll",f)}}function O(i){const{height:f,width:L}=i;let Q=!1;u.value!==f&&(Q=!0,u.value=f,e.onScrollHeight!==void 0&&l("scrollHeight",f),_()),s.value!==L&&(Q=!0,s.value=L),Q===!0&&e.onResize!==void 0&&l("resize",i)}function P({height:i}){r.value!==i&&(r.value=i,_())}function _(){if(e.container===!0){const i=u.value>r.value?B():0;a.value!==i&&(a.value=i)}}let n;const w={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:o,height:u,containerHeight:r,scrollbarWidth:a,totalWidth:v(()=>s.value+a.value),rows:v(()=>{const i=e.view.toLowerCase().split(" ");return{top:i[0].split(""),middle:i[1].split(""),bottom:i[2].split("")}}),header:V({size:0,offset:0,space:!1}),right:V({size:300,offset:0,space:!1}),footer:V({size:0,offset:0,space:!1}),left:V({size:300,offset:0,space:!1}),scroll:d,animate(){n!==void 0?clearTimeout(n):document.body.classList.add("q-body--layout-animate"),n=setTimeout(()=>{document.body.classList.remove("q-body--layout-animate"),n=void 0},155)},update(i,f,L){w[i][f]=L}};if(te(A,w),B()>0){let L=function(){i=null,f.classList.remove("hide-scrollbar")},Q=function(){if(i===null){if(f.scrollHeight>t.screen.height)return;f.classList.add("hide-scrollbar")}else clearTimeout(i);i=setTimeout(L,300)},E=function(M){i!==null&&M==="remove"&&(clearTimeout(i),L()),window[`${M}EventListener`]("resize",Q)},i=null;const f=document.body;C(()=>e.container!==!0?"add":"remove",E),e.container!==!0&&E("add"),ge(()=>{E("remove")})}return()=>{const i=me(y.default,[m(_e,{onScroll:x}),m(D,{onResize:O})]),f=m("div",{class:g.value,style:p.value,ref:e.container===!0?void 0:o,tabindex:-1},i);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:o},[m(D,{onResize:P}),m("div",{class:"absolute-full",style:S.value},[m("div",{class:"scroll",style:c.value},[f])])]):f}}});const $e={class:"q-pr-md row",style:{width:"min(500px, 100vw)"}},Ve={__name:"MainLayout",setup(e){const y=ne(),l=b(!1);b(!1);const t=b(!1);$(()=>{y.dark.set(!0)});async function o(){l.value=!0,await xe.post("logout"),G.value=!1,l.value=!1,t.value=!1,localStorage.removeItem("token")}return(u,s)=>{const d=be("router-view");return W(),K(Qe,{view:"lHh Lpr lFf"},{default:z(()=>[h(Ce,{class:"non-selectable"},{default:z(()=>[h(j,{class:"row justify-center"},{default:z(()=>[ye("div",$e,[h(I,{class:"",style:{cursor:"default"}},{default:z(()=>[k(" SIRUK STORAGE ")]),_:1}),pe(G)?(W(),K(F,{key:0,flat:"",dense:"",round:"",icon:"mdi-logout",onClick:s[0]||(s[0]=r=>t.value=!0)})):we("",!0)])]),_:1})]),_:1}),h(Le,null,{default:z(()=>[h(d),h(le,{modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=r=>t.value=r)},{default:z(()=>[h(ae,null,{default:z(()=>[h(j,{class:"bg-primary text-white"},{default:z(()=>[h(I,null,{default:z(()=>[k(" CONFIRM LOGOUT ")]),_:1})]),_:1}),h(ie,null,{default:z(()=>[k(" Are you sure you want to log out? ")]),_:1}),h(re,{align:"right"},{default:z(()=>[ze(h(F,{flat:"",dense:"",label:"cancel"},null,512),[[se]]),h(F,{color:"primary",label:"Confirm",onClick:o})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})}}};export{Ve as default};
