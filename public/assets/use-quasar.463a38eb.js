import{c as x,d as m,h,m as C,I as Ve,J as Qe,g as M,a as N,K as re,L as ye,M as be,b as ne,w as I,N as ze,o as Ae,O as R,r as F,t as Oe,P as We,T as Ke,R as Re,S as je,U as ae,V as Ie,W as y,l as b,X as Ne,Y as Ue,Z as qe,_ as ue,$ as Xe,a0 as Ye,j as Ge,a1 as Je}from"./index.d319b4cd.js";var Bt=x({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const o=m(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:o.value},C(t.default))}}),Ht=x({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const o=m(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:o.value,role:"toolbar"},C(t.default))}}),$t=x({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const o=m(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>h(e.tag,{class:o.value},C(t.default))}}),Ft=x({name:"QCardActions",props:{...Ve,vertical:Boolean},setup(e,{slots:t}){const o=Qe(e),n=m(()=>`q-card__actions ${o.value} q-card__actions--${e.vertical===!0?"vert column":"horiz row"}`);return()=>h("div",{class:n.value},C(t.default))}});const Ze={dark:{type:Boolean,default:null}};function et(e,t){return m(()=>e.dark===null?t.dark.isActive:e.dark)}var Dt=x({name:"QCard",props:{...Ze,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:o}}=M(),n=et(e,o),i=m(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>h(e.tag,{class:i.value},C(t.default))}});function tt(e,t,o){let n;function i(){n!==void 0&&(re.remove(n),n=void 0)}return N(()=>{e.value===!0&&i()}),{removeFromHistory:i,addToHistory(){n={condition:()=>o.value===!0,handler:t},re.add(n)}}}function ot(){let e;const t=M();function o(){clearTimeout(e)}return ye(o),N(o),{removeTimeout:o,registerTimeout(n,i){clearTimeout(e),be(t)===!1&&(e=setTimeout(n,i))}}}function nt(){let e;const t=M();function o(){e=void 0}return ye(o),N(o),{removeTick:o,registerTick(n){e=n,ne(()=>{e===n&&(be(t)===!1&&e(),e=void 0)})}}}const it={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},lt=["beforeShow","show","beforeHide","hide"];function st({showing:e,canShow:t,hideOnRouteChange:o,handleShow:n,handleHide:i,processOnMount:u}){const r=M(),{props:a,emit:f,proxy:v}=r;let d;function p(s){e.value===!0?k(s):w(s)}function w(s){if(a.disable===!0||s!==void 0&&s.qAnchorHandled===!0||t!==void 0&&t(s)!==!0)return;const g=a["onUpdate:modelValue"]!==void 0;g===!0&&(f("update:modelValue",!0),d=s,ne(()=>{d===s&&(d=void 0)})),(a.modelValue===null||g===!1)&&P(s)}function P(s){e.value!==!0&&(e.value=!0,f("beforeShow",s),n!==void 0?n(s):f("show",s))}function k(s){if(a.disable===!0)return;const g=a["onUpdate:modelValue"]!==void 0;g===!0&&(f("update:modelValue",!1),d=s,ne(()=>{d===s&&(d=void 0)})),(a.modelValue===null||g===!1)&&V(s)}function V(s){e.value!==!1&&(e.value=!1,f("beforeHide",s),i!==void 0?i(s):f("hide",s))}function L(s){a.disable===!0&&s===!0?a["onUpdate:modelValue"]!==void 0&&f("update:modelValue",!1):s===!0!==e.value&&(s===!0?P:V)(d)}I(()=>a.modelValue,L),o!==void 0&&ze(r)===!0&&I(()=>v.$route.fullPath,()=>{o.value===!0&&e.value===!0&&k()}),u===!0&&Ae(()=>{L(a.modelValue)});const Q={show:w,hide:k,toggle:p};return Object.assign(v,Q),Q}const rt={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function at(e,t=()=>{},o=()=>{}){return{transitionProps:m(()=>{const n=`q-transition--${e.transitionShow||t()}`,i=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:m(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}let q=[],D=[];function Te(e){D=D.filter(t=>t!==e)}function ut(e){Te(e),D.push(e)}function ce(e){Te(e),D.length===0&&q.length>0&&(q[q.length-1](),q=[])}function ct(e){D.length===0?e():q.push(e)}function Mt(e){q=q.filter(t=>t!==e)}const j=[];function dt(e){return j.find(t=>t.contentEl!==null&&t.contentEl.contains(e))}function ft(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return R(e)}else if(e.__qPortal===!0){const o=R(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=R(e)}while(e!=null)}function mt(e,t,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=ft(e,t);continue}e.hide(t)}e=R(e)}}function vt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function ht(e,t,o,n){const i=F(!1),u=F(!1);let r=null;const a={},f=n===!0&&vt(e);function v(p){if(p===!0){ce(a),u.value=!0;return}u.value=!1,i.value===!1&&(f===!1&&r===null&&(r=Re()),i.value=!0,j.push(e.proxy),ut(a))}function d(p){if(u.value=!1,p!==!0)return;ce(a),i.value=!1;const w=j.indexOf(e.proxy);w!==-1&&j.splice(w,1),r!==null&&(je(r),r=null)}return Oe(()=>{d(!0)}),e.proxy.__qPortal=!0,We(e.proxy,"contentEl",()=>t.value),{showPortal:v,hidePortal:d,portalIsActive:i,portalIsAccessible:u,renderPortal:()=>f===!0?o():i.value===!0?[h(Ke,{to:r},o())]:void 0}}const pt=[null,document,document.body,document.scrollingElement,document.documentElement];function Vt(e,t){let o=Ie(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return pt.includes(o)?window:o}function gt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function wt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let O;function Qt(){if(O!==void 0)return O;const e=document.createElement("p"),t=document.createElement("div");ae(e,{width:"100%",height:"200px"}),ae(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=t.clientWidth),t.remove(),O=o-n,O}function yt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}let H=0,ee,te,$,oe=!1,de,fe,S;function bt(e){qt(e)&&Ne(e)}function qt(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=Ue(e),o=e.shiftKey&&!e.deltaX,n=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=o||n?e.deltaY:e.deltaX;for(let u=0;u<t.length;u++){const r=t[u];if(yt(r,n))return n?i<0&&r.scrollTop===0?!0:i>0&&r.scrollTop+r.clientHeight===r.scrollHeight:i<0&&r.scrollLeft===0?!0:i>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function me(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function W(e){oe!==!0&&(oe=!0,requestAnimationFrame(()=>{oe=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:n}=document.scrollingElement;($===void 0||t!==window.innerHeight)&&($=o-t,document.scrollingElement.scrollTop=n),n>$&&(document.scrollingElement.scrollTop-=Math.ceil((n-$)/8))}))}function ve(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:i}=window.getComputedStyle(t);ee=wt(window),te=gt(window),de=t.style.left,fe=t.style.top,t.style.left=`-${ee}px`,t.style.top=`-${te}px`,i!=="hidden"&&(i==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,y.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",W,b.passiveCapture),window.visualViewport.addEventListener("scroll",W,b.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",me,b.passiveCapture))}y.is.desktop===!0&&y.is.mac===!0&&window[`${e}EventListener`]("wheel",bt,b.notPassive),e==="remove"&&(y.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",W,b.passiveCapture),window.visualViewport.removeEventListener("scroll",W,b.passiveCapture)):window.removeEventListener("scroll",me,b.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=de,t.style.top=fe,window.scrollTo(ee,te),$=void 0)}function Tt(e){let t="add";if(e===!0){if(H++,S!==void 0){clearTimeout(S),S=void 0;return}if(H>1)return}else{if(H===0||(H--,H>0))return;if(t="remove",y.is.ios===!0&&y.is.nativeMobile===!0){clearTimeout(S),S=setTimeout(()=>{ve(t),S=void 0},100);return}}ve(t)}function Et(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,Tt(t))}}}const T=[];let _;function kt(e){_=e.keyCode===27}function St(){_===!0&&(_=!1)}function _t(e){_===!0&&(_=!1,qe(e,27)===!0&&T[T.length-1](e))}function Ee(e){window[e]("keydown",kt),window[e]("blur",St),window[e]("keyup",_t),_=!1}function xt(e){y.is.desktop===!0&&(T.push(e),T.length===1&&Ee("addEventListener"))}function he(e){const t=T.indexOf(e);t>-1&&(T.splice(t,1),T.length===0&&Ee("removeEventListener"))}const E=[];function ke(e){E[E.length-1](e)}function Ct(e){y.is.desktop===!0&&(E.push(e),E.length===1&&document.body.addEventListener("focusin",ke))}function pe(e){const t=E.indexOf(e);t>-1&&(E.splice(t,1),E.length===0&&document.body.removeEventListener("focusin",ke))}let K=0;const Pt={standard:"fixed-full flex-center",top:"fixed-top justify-center",bottom:"fixed-bottom justify-center",right:"fixed-right items-center",left:"fixed-left items-center"},ge={standard:["scale","scale"],top:["slide-down","slide-up"],bottom:["slide-up","slide-down"],right:["slide-left","slide-right"],left:["slide-right","slide-left"]};var zt=x({name:"QDialog",inheritAttrs:!1,props:{...it,...rt,transitionShow:String,transitionHide:String,persistent:Boolean,autoClose:Boolean,allowFocusOutside:Boolean,noEscDismiss:Boolean,noBackdropDismiss:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,noShake:Boolean,seamless:Boolean,maximized:Boolean,fullWidth:Boolean,fullHeight:Boolean,square:Boolean,position:{type:String,default:"standard",validator:e=>e==="standard"||["top","bottom","left","right"].includes(e)}},emits:[...lt,"shake","click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){const i=M(),u=F(null),r=F(!1),a=F(!1);let f,v=null,d,p;const w=m(()=>e.persistent!==!0&&e.noRouteDismiss!==!0&&e.seamless!==!0),{preventBodyScroll:P}=Et(),{registerTimeout:k}=ot(),{registerTick:V,removeTick:L}=nt(),{transitionProps:Q,transitionStyle:s}=at(e,()=>ge[e.position][0],()=>ge[e.position][1]),{showPortal:g,hidePortal:ie,portalIsAccessible:Se,renderPortal:_e}=ht(i,u,Me,!0),{hide:z}=st({showing:r,hideOnRouteChange:w,handleShow:He,handleHide:$e,processOnMount:!0}),{addToHistory:xe,removeFromHistory:Ce}=tt(r,z,w),Pe=m(()=>`q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized===!0?"maximized":"minimized"} q-dialog__inner--${e.position} ${Pt[e.position]}`+(a.value===!0?" q-dialog__inner--animating":"")+(e.fullWidth===!0?" q-dialog__inner--fullwidth":"")+(e.fullHeight===!0?" q-dialog__inner--fullheight":"")+(e.square===!0?" q-dialog__inner--square":"")),A=m(()=>r.value===!0&&e.seamless!==!0),Le=m(()=>e.autoClose===!0?{onClick:Fe}:{}),Be=m(()=>[`q-dialog fullscreen no-pointer-events q-dialog--${A.value===!0?"modal":"seamless"}`,n.class]);I(()=>e.maximized,l=>{r.value===!0&&Y(l)}),I(A,l=>{P(l),l===!0?(Ct(G),xt(X)):(pe(G),he(X))});function He(l){xe(),v=e.noRefocus===!1&&document.activeElement!==null?document.activeElement:null,Y(e.maximized),g(),a.value=!0,e.noFocus!==!0?(document.activeElement!==null&&document.activeElement.blur(),V(B)):L(),k(()=>{if(i.proxy.$q.platform.is.ios===!0){if(e.seamless!==!0&&document.activeElement){const{top:c,bottom:J}=document.activeElement.getBoundingClientRect(),{innerHeight:se}=window,Z=window.visualViewport!==void 0?window.visualViewport.height:se;c>0&&J>Z/2&&(document.scrollingElement.scrollTop=Math.min(document.scrollingElement.scrollHeight-Z,J>=se?1/0:Math.ceil(document.scrollingElement.scrollTop+J-Z/2))),document.activeElement.scrollIntoView()}p=!0,u.value.click(),p=!1}g(!0),a.value=!1,o("show",l)},e.transitionDuration)}function $e(l){L(),Ce(),le(!0),a.value=!0,ie(),v!==null&&(((l&&l.type.indexOf("key")===0?v.closest('[tabindex]:not([tabindex^="-"])'):void 0)||v).focus(),v=null),k(()=>{ie(!0),a.value=!1,o("hide",l)},e.transitionDuration)}function B(l){ct(()=>{let c=u.value;c===null||c.contains(document.activeElement)===!0||(c=(l!==""?c.querySelector(l):null)||c.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||c.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||c.querySelector("[autofocus], [data-autofocus]")||c,c.focus({preventScroll:!0}))})}function U(l){l&&typeof l.focus=="function"?l.focus({preventScroll:!0}):B(),o("shake");const c=u.value;c!==null&&(c.classList.remove("q-animate--scale"),c.classList.add("q-animate--scale"),clearTimeout(f),f=setTimeout(()=>{u.value!==null&&(c.classList.remove("q-animate--scale"),B())},170))}function X(){e.seamless!==!0&&(e.persistent===!0||e.noEscDismiss===!0?e.maximized!==!0&&e.noShake!==!0&&U():(o("escapeKey"),z()))}function le(l){clearTimeout(f),(l===!0||r.value===!0)&&(Y(!1),e.seamless!==!0&&(P(!1),pe(G),he(X))),l!==!0&&(v=null)}function Y(l){l===!0?d!==!0&&(K<1&&document.body.classList.add("q-body--dialog"),K++,d=!0):d===!0&&(K<2&&document.body.classList.remove("q-body--dialog"),K--,d=!1)}function Fe(l){p!==!0&&(z(l),o("click",l))}function De(l){e.persistent!==!0&&e.noBackdropDismiss!==!0?z(l):e.noShake!==!0&&U(l.relatedTarget)}function G(l){e.allowFocusOutside!==!0&&Se.value===!0&&Xe(u.value,l.target)!==!0&&B('[tabindex]:not([tabindex="-1"])')}Object.assign(i.proxy,{focus:B,shake:U,__updateRefocusTarget(l){v=l||null}}),N(le);function Me(){return h("div",{role:"dialog","aria-modal":A.value===!0?"true":"false",...n,class:Be.value},[h(ue,{name:"q-transition--fade",appear:!0},()=>A.value===!0?h("div",{class:"q-dialog__backdrop fixed-full",style:s.value,"aria-hidden":"true",tabindex:-1,onFocusin:De}):null),h(ue,Q.value,()=>r.value===!0?h("div",{ref:u,class:Pe.value,style:s.value,tabindex:-1,...Le.value},C(t.default)):null)])}return _e}});function we(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const t=parseInt(e,10);return isNaN(t)?0:t}var At=Ye({name:"close-popup",beforeMount(e,{value:t}){const o={depth:we(t),handler(n){o.depth!==0&&setTimeout(()=>{const i=dt(e);i!==void 0&&mt(i,n,o.depth)})},handlerKey(n){qe(n,13)===!0&&o.handler(n)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:t,oldValue:o}){t!==o&&(e.__qclosepopup.depth=we(t))},beforeUnmount(e){const t=e.__qclosepopup;e.removeEventListener("click",t.handler),e.removeEventListener("keyup",t.handlerKey),delete e.__qclosepopup}});function Ot(){return Ge(Je)}export{At as C,Ht as Q,gt as a,wt as b,Qt as c,Bt as d,zt as e,Dt as f,Vt as g,$t as h,Ft as i,Ze as j,et as k,ct as l,Mt as r,Ot as u};
