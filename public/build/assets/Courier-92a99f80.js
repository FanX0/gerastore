import{r as c,R as V,q as Le,j as I,a as p,F as te}from"./app-5671d959.js";import{c as M}from"./clsx.m-1229b3e0.js";import{s as se,l as D,S as ne,D as A,y as Q,o as m,u as E,p as X,R as Se,X as j,a as Y}from"./use-flags-24a59ca7.js";import{h as Ie,T as Ne,c as Pe,p as $e,I as G,e as Te,o as R,r as ke,a as Ce}from"./keyboard-cf7c7369.js";import{c as De,d as q,C as Ee,t as oe}from"./transition-a2c1e9ed.js";import{L as Fe}from"./use-outside-click-60bef668.js";import{T as Me,e as Ae}from"./use-controllable-82a0d8d7.js";import{c as ue}from"./createReactComponent-b151f947.js";import{I as re}from"./IconCheck-acac9778.js";function de(e,o){let[n,r]=c.useState(e),a=se(e);return D(()=>r(a.current),[a,r,...o]),n}function ae(e){var o;if(e.type)return e.type;let n=(o=e.as)!=null?o:"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function Qe(e,o){let[n,r]=c.useState(()=>ae(e));return D(()=>{r(ae(e))},[e.type,e.as]),D(()=>{n||o.current&&o.current instanceof HTMLButtonElement&&!o.current.hasAttribute("type")&&r("button")},[n,o]),n}function je(e){throw new Error("Unexpected object: "+e)}var $=(e=>(e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing",e))($||{});function Be(e,o){let n=o.resolveItems();if(n.length<=0)return null;let r=o.resolveActiveIndex(),a=r??-1,s=(()=>{switch(e.focus){case 0:return n.findIndex(t=>!o.resolveDisabled(t));case 1:{let t=n.slice().reverse().findIndex((i,b,x)=>a!==-1&&x.length-b-1>=a?!1:!o.resolveDisabled(i));return t===-1?t:n.length-1-t}case 2:return n.findIndex((t,i)=>i<=a?!1:!o.resolveDisabled(t));case 3:{let t=n.slice().reverse().findIndex(i=>!o.resolveDisabled(i));return t===-1?t:n.length-1-t}case 4:return n.findIndex(t=>o.resolveId(t)===e.id);case 5:return null;default:je(e)}})();return s===-1?r:s}function ie(e){return[e.screenX,e.screenY]}function Ue(){let e=c.useRef([-1,-1]);return{wasMoved(o){let n=ie(o);return e.current[0]===n[0]&&e.current[1]===n[1]?!1:(e.current=n,!0)},update(o){e.current=ie(o)}}}var ze=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ze||{}),He=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(He||{}),Ke=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Ke||{}),Ve=(e=>(e[e.OpenListbox=0]="OpenListbox",e[e.CloseListbox=1]="CloseListbox",e[e.GoToOption=2]="GoToOption",e[e.Search=3]="Search",e[e.ClearSearch=4]="ClearSearch",e[e.RegisterOption=5]="RegisterOption",e[e.UnregisterOption=6]="UnregisterOption",e[e.RegisterLabel=7]="RegisterLabel",e))(Ve||{});function J(e,o=n=>n){let n=e.activeOptionIndex!==null?e.options[e.activeOptionIndex]:null,r=Ce(o(e.options.slice()),s=>s.dataRef.current.domRef.current),a=n?r.indexOf(n):null;return a===-1&&(a=null),{options:r,activeOptionIndex:a}}let Xe={[1](e){return e.dataRef.current.disabled||e.listboxState===1?e:{...e,activeOptionIndex:null,listboxState:1}},[0](e){if(e.dataRef.current.disabled||e.listboxState===0)return e;let o=e.activeOptionIndex,{isSelected:n}=e.dataRef.current,r=e.options.findIndex(a=>n(a.dataRef.current.value));return r!==-1&&(o=r),{...e,listboxState:0,activeOptionIndex:o}},[2](e,o){var n;if(e.dataRef.current.disabled||e.listboxState===1)return e;let r=J(e),a=Be(o,{resolveItems:()=>r.options,resolveActiveIndex:()=>r.activeOptionIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeOptionIndex:a,activationTrigger:(n=o.trigger)!=null?n:1}},[3]:(e,o)=>{if(e.dataRef.current.disabled||e.listboxState===1)return e;let n=e.searchQuery!==""?0:1,r=e.searchQuery+o.value.toLowerCase(),a=(e.activeOptionIndex!==null?e.options.slice(e.activeOptionIndex+n).concat(e.options.slice(0,e.activeOptionIndex+n)):e.options).find(t=>{var i;return!t.dataRef.current.disabled&&((i=t.dataRef.current.textValue)==null?void 0:i.startsWith(r))}),s=a?e.options.indexOf(a):-1;return s===-1||s===e.activeOptionIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeOptionIndex:s,activationTrigger:1}},[4](e){return e.dataRef.current.disabled||e.listboxState===1||e.searchQuery===""?e:{...e,searchQuery:""}},[5]:(e,o)=>{let n={id:o.id,dataRef:o.dataRef},r=J(e,a=>[...a,n]);return e.activeOptionIndex===null&&e.dataRef.current.isSelected(o.dataRef.current.value)&&(r.activeOptionIndex=r.options.indexOf(n)),{...e,...r}},[6]:(e,o)=>{let n=J(e,r=>{let a=r.findIndex(s=>s.id===o.id);return a!==-1&&r.splice(a,1),r});return{...e,...n,activationTrigger:1}},[7]:(e,o)=>({...e,labelId:o.id})},Z=c.createContext(null);Z.displayName="ListboxActionsContext";function B(e){let o=c.useContext(Z);if(o===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,B),n}return o}let _=c.createContext(null);_.displayName="ListboxDataContext";function U(e){let o=c.useContext(_);if(o===null){let n=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,U),n}return o}function qe(e,o){return E(o.type,Xe,e,o)}let Ge=c.Fragment;function We(e,o){let{value:n,defaultValue:r,form:a,name:s,onChange:t,by:i=(d,v)=>d===v,disabled:b=!1,horizontal:x=!1,multiple:y=!1,...N}=e;const T=x?"horizontal":"vertical";let w=Q(o),[u=y?[]:void 0,h]=Me(n,t,r),[f,l]=c.useReducer(qe,{dataRef:c.createRef(),listboxState:1,options:[],searchQuery:"",labelId:null,activeOptionIndex:null,activationTrigger:1}),g=c.useRef({static:!1,hold:!1}),C=c.useRef(null),W=c.useRef(null),L=c.useRef(null),P=m(typeof i=="string"?(d,v)=>{let S=i;return(d==null?void 0:d[S])===(v==null?void 0:v[S])}:i),z=c.useCallback(d=>E(O.mode,{[1]:()=>u.some(v=>P(v,d)),[0]:()=>P(u,d)}),[u]),O=c.useMemo(()=>({...f,value:u,disabled:b,mode:y?1:0,orientation:T,compare:P,isSelected:z,optionsPropsRef:g,labelRef:C,buttonRef:W,optionsRef:L}),[u,b,y,f]);D(()=>{f.dataRef.current=O},[O]),Fe([O.buttonRef,O.optionsRef],(d,v)=>{var S;l({type:1}),Ie(v,Ne.Loose)||(d.preventDefault(),(S=O.buttonRef.current)==null||S.focus())},O.listboxState===0);let ce=c.useMemo(()=>({open:O.listboxState===0,disabled:b,value:u}),[O,b,u]),pe=m(d=>{let v=O.options.find(S=>S.id===d);v&&F(v.dataRef.current.value)}),fe=m(()=>{if(O.activeOptionIndex!==null){let{dataRef:d,id:v}=O.options[O.activeOptionIndex];F(d.current.value),l({type:2,focus:$.Specific,id:v})}}),ve=m(()=>l({type:0})),be=m(()=>l({type:1})),xe=m((d,v,S)=>d===$.Specific?l({type:2,focus:$.Specific,id:v,trigger:S}):l({type:2,focus:d,trigger:S})),me=m((d,v)=>(l({type:5,id:d,dataRef:v}),()=>l({type:6,id:d}))),he=m(d=>(l({type:7,id:d}),()=>l({type:7,id:null}))),F=m(d=>E(O.mode,{[0](){return h==null?void 0:h(d)},[1](){let v=O.value.slice(),S=v.findIndex(K=>P(K,d));return S===-1?v.push(d):v.splice(S,1),h==null?void 0:h(v)}})),ge=m(d=>l({type:3,value:d})),ye=m(()=>l({type:4})),Oe=c.useMemo(()=>({onChange:F,registerOption:me,registerLabel:he,goToOption:xe,closeListbox:be,openListbox:ve,selectActiveOption:fe,selectOption:pe,search:ge,clearSearch:ye}),[]),Re={ref:w},H=c.useRef(null),we=X();return c.useEffect(()=>{H.current&&r!==void 0&&we.addEventListener(H.current,"reset",()=>{F(r)})},[H,F]),V.createElement(Z.Provider,{value:Oe},V.createElement(_.Provider,{value:O},V.createElement(De,{value:E(O.listboxState,{[0]:q.Open,[1]:q.Closed})},s!=null&&u!=null&&Ae({[s]:u}).map(([d,v],S)=>V.createElement(Pe,{features:$e.Hidden,ref:S===0?K=>{var ee;H.current=(ee=K==null?void 0:K.closest("form"))!=null?ee:null}:void 0,...Se({key:d,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:a,name:d,value:v})})),j({ourProps:Re,theirProps:N,slot:ce,defaultTag:Ge,name:"Listbox"}))))}let Je="button";function Ye(e,o){var n;let r=G(),{id:a=`headlessui-listbox-button-${r}`,...s}=e,t=U("Listbox.Button"),i=B("Listbox.Button"),b=Q(t.buttonRef,o),x=X(),y=m(f=>{switch(f.key){case R.Space:case R.Enter:case R.ArrowDown:f.preventDefault(),i.openListbox(),x.nextFrame(()=>{t.value||i.goToOption($.First)});break;case R.ArrowUp:f.preventDefault(),i.openListbox(),x.nextFrame(()=>{t.value||i.goToOption($.Last)});break}}),N=m(f=>{switch(f.key){case R.Space:f.preventDefault();break}}),T=m(f=>{if(ke(f.currentTarget))return f.preventDefault();t.listboxState===0?(i.closeListbox(),x.nextFrame(()=>{var l;return(l=t.buttonRef.current)==null?void 0:l.focus({preventScroll:!0})})):(f.preventDefault(),i.openListbox())}),w=de(()=>{if(t.labelId)return[t.labelId,a].join(" ")},[t.labelId,a]),u=c.useMemo(()=>({open:t.listboxState===0,disabled:t.disabled,value:t.value}),[t]),h={ref:b,id:a,type:Qe(e,t.buttonRef),"aria-haspopup":"listbox","aria-controls":(n=t.optionsRef.current)==null?void 0:n.id,"aria-expanded":t.disabled?void 0:t.listboxState===0,"aria-labelledby":w,disabled:t.disabled,onKeyDown:y,onKeyUp:N,onClick:T};return j({ourProps:h,theirProps:s,slot:u,defaultTag:Je,name:"Listbox.Button"})}let Ze="label";function _e(e,o){let n=G(),{id:r=`headlessui-listbox-label-${n}`,...a}=e,s=U("Listbox.Label"),t=B("Listbox.Label"),i=Q(s.labelRef,o);D(()=>t.registerLabel(r),[r]);let b=m(()=>{var y;return(y=s.buttonRef.current)==null?void 0:y.focus({preventScroll:!0})}),x=c.useMemo(()=>({open:s.listboxState===0,disabled:s.disabled}),[s]);return j({ourProps:{ref:i,id:r,onClick:b},theirProps:a,slot:x,defaultTag:Ze,name:"Listbox.Label"})}let et="ul",tt=ne.RenderStrategy|ne.Static;function nt(e,o){var n;let r=G(),{id:a=`headlessui-listbox-options-${r}`,...s}=e,t=U("Listbox.Options"),i=B("Listbox.Options"),b=Q(t.optionsRef,o),x=X(),y=X(),N=Ee(),T=(()=>N!==null?(N&q.Open)===q.Open:t.listboxState===0)();c.useEffect(()=>{var l;let g=t.optionsRef.current;g&&t.listboxState===0&&g!==((l=Te(g))==null?void 0:l.activeElement)&&g.focus({preventScroll:!0})},[t.listboxState,t.optionsRef]);let w=m(l=>{switch(y.dispose(),l.key){case R.Space:if(t.searchQuery!=="")return l.preventDefault(),l.stopPropagation(),i.search(l.key);case R.Enter:if(l.preventDefault(),l.stopPropagation(),t.activeOptionIndex!==null){let{dataRef:g}=t.options[t.activeOptionIndex];i.onChange(g.current.value)}t.mode===0&&(i.closeListbox(),Y().nextFrame(()=>{var g;return(g=t.buttonRef.current)==null?void 0:g.focus({preventScroll:!0})}));break;case E(t.orientation,{vertical:R.ArrowDown,horizontal:R.ArrowRight}):return l.preventDefault(),l.stopPropagation(),i.goToOption($.Next);case E(t.orientation,{vertical:R.ArrowUp,horizontal:R.ArrowLeft}):return l.preventDefault(),l.stopPropagation(),i.goToOption($.Previous);case R.Home:case R.PageUp:return l.preventDefault(),l.stopPropagation(),i.goToOption($.First);case R.End:case R.PageDown:return l.preventDefault(),l.stopPropagation(),i.goToOption($.Last);case R.Escape:return l.preventDefault(),l.stopPropagation(),i.closeListbox(),x.nextFrame(()=>{var g;return(g=t.buttonRef.current)==null?void 0:g.focus({preventScroll:!0})});case R.Tab:l.preventDefault(),l.stopPropagation();break;default:l.key.length===1&&(i.search(l.key),y.setTimeout(()=>i.clearSearch(),350));break}}),u=de(()=>{var l,g,C;return(C=(l=t.labelRef.current)==null?void 0:l.id)!=null?C:(g=t.buttonRef.current)==null?void 0:g.id},[t.labelRef.current,t.buttonRef.current]),h=c.useMemo(()=>({open:t.listboxState===0}),[t]),f={"aria-activedescendant":t.activeOptionIndex===null||(n=t.options[t.activeOptionIndex])==null?void 0:n.id,"aria-multiselectable":t.mode===1?!0:void 0,"aria-labelledby":u,"aria-orientation":t.orientation,id:a,onKeyDown:w,role:"listbox",tabIndex:0,ref:b};return j({ourProps:f,theirProps:s,slot:h,defaultTag:et,features:tt,visible:T,name:"Listbox.Options"})}let ot="li";function rt(e,o){let n=G(),{id:r=`headlessui-listbox-option-${n}`,disabled:a=!1,value:s,...t}=e,i=U("Listbox.Option"),b=B("Listbox.Option"),x=i.activeOptionIndex!==null?i.options[i.activeOptionIndex].id===r:!1,y=i.isSelected(s),N=c.useRef(null),T=se({disabled:a,value:s,domRef:N,get textValue(){var L,P;return(P=(L=N.current)==null?void 0:L.textContent)==null?void 0:P.toLowerCase()}}),w=Q(o,N);D(()=>{if(i.listboxState!==0||!x||i.activationTrigger===0)return;let L=Y();return L.requestAnimationFrame(()=>{var P,z;(z=(P=N.current)==null?void 0:P.scrollIntoView)==null||z.call(P,{block:"nearest"})}),L.dispose},[N,x,i.listboxState,i.activationTrigger,i.activeOptionIndex]),D(()=>b.registerOption(r,T),[T,r]);let u=m(L=>{if(a)return L.preventDefault();b.onChange(s),i.mode===0&&(b.closeListbox(),Y().nextFrame(()=>{var P;return(P=i.buttonRef.current)==null?void 0:P.focus({preventScroll:!0})}))}),h=m(()=>{if(a)return b.goToOption($.Nothing);b.goToOption($.Specific,r)}),f=Ue(),l=m(L=>f.update(L)),g=m(L=>{f.wasMoved(L)&&(a||x||b.goToOption($.Specific,r,0))}),C=m(L=>{f.wasMoved(L)&&(a||x&&b.goToOption($.Nothing))}),W=c.useMemo(()=>({active:x,selected:y,disabled:a}),[x,y,a]);return j({ourProps:{id:r,ref:w,role:"option",tabIndex:a===!0?void 0:-1,"aria-disabled":a===!0?!0:void 0,"aria-selected":y,disabled:void 0,onClick:u,onFocus:h,onPointerEnter:l,onMouseEnter:l,onPointerMove:g,onMouseMove:g,onPointerLeave:C,onMouseLeave:C},theirProps:t,slot:W,defaultTag:ot,name:"Listbox.Option"})}let at=A(We),it=A(Ye),lt=A(_e),st=A(nt),ut=A(rt),k=Object.assign(at,{Button:it,Label:lt,Options:st,Option:ut});var le=ue("chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]]),dt=ue("loader-2","IconLoader2",[["path",{d:"M12 3a9 9 0 1 0 9 9",key:"svg-0"}]]);function yt({services:e,setServices:o,selectedService:n,setSelectedService:r,selectedCourier:a,setSelectedCourier:s}){const{shipping_address:t,total_weight:i,couriers:b}=Le().props,[x,y]=c.useState(!1);async function N(w){s(w),y(!0);try{const{data:u}=await axios.post(route("check-postage"),{courier:w.id,destination:t!=null&&t.subdistrict_id?t==null?void 0:t.subdistrict_id:t==null?void 0:t.city_id,destination_type:t!=null&&t.subdistrict_id?"subdistrict":"city",weight:i});o(u),y(!1),r(u[0])}catch{y(!1)}}function T(w){r(w)}return I("div",{className:"mt-10 border-t border-slate-200 pt-10",children:[p("h2",{className:"text-lg font-medium text-slate-900",children:"Pilih Kurir"}),I("div",{className:"mt-4 grid grid-cols-2 items-center gap-2",children:[p(k,{value:a,onChange:N,children:({open:w})=>I(te,{children:[p(k.Label,{className:"sr-only",children:"Pilih layanan"}),I("div",{className:"relative",children:[I("div",{className:"flex w-full divide-x divide-slate-200 overflow-hidden rounded-md border",children:[p("div",{className:"inline-flex w-full items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-slate-900 shadow-sm",children:p("p",{className:"text-sm font-semibold",children:(a==null?void 0:a.name)||"Pilih layanan"})}),p(k.Button,{className:"inline-flex items-center bg-white px-2 py-2.5 hover:bg-slate-100 focus:outline-none",children:p(le,{className:"h-5 w-5 text-slate-900","aria-hidden":"true"})})]}),p(oe,{show:w,as:c.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:p(k.Options,{className:"absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-slate-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:b.map(u=>p(k.Option,{className:({active:h})=>M(h?"bg-blue-600 text-white":"text-slate-900","cursor-default select-none p-4 text-sm"),value:u,children:({selected:h,active:f})=>I("div",{className:"flex flex-col",children:[I("div",{className:"flex justify-between",children:[p("p",{className:M(h?"font-semibold":"font-normal","uppercase"),children:u.code}),h?p("span",{className:f?"text-white":"text-blue-600",children:p(re,{className:"h-5 w-5","aria-hidden":"true"})}):null]}),p("div",{className:M(f?"text-blue-200":"text-slate-500","mt-2"),children:p("div",{children:u.name})})]})},u.id))})})]})]})}),p(dt,{className:`h-6 w-6 animate-spin text-slate-400 ${x?"block":"hidden"}`}),e.length&&!x>0?p(k,{value:n,onChange:T,children:({open:w})=>I(te,{children:[p(k.Label,{className:"sr-only",children:"Pilih layanan"}),I("div",{className:"relative",children:[I("div",{className:"flex w-full divide-x divide-slate-200 overflow-hidden rounded-md border",children:[p("div",{className:"inline-flex w-full items-center gap-x-1.5 rounded-l-md bg-white px-3 py-2 text-slate-900 shadow-sm",children:p("p",{className:"text-sm font-semibold",children:(n==null?void 0:n.name)||"Pilih layanan"})}),p(k.Button,{className:"inline-flex items-center bg-white px-2 py-2.5 hover:bg-slate-100 focus:outline-none",children:p(le,{className:"h-5 w-5 text-slate-900","aria-hidden":"true"})})]}),p(oe,{show:w,as:c.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:p(k.Options,{className:"absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-slate-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:e.map(u=>p(k.Option,{className:({active:h})=>M(h?"bg-blue-600 text-white":"text-slate-900","cursor-default select-none p-4 text-sm"),value:u,children:({selected:h,active:f})=>I("div",{className:"flex flex-col",children:[I("div",{className:"flex justify-between",children:[I("p",{className:h?"font-semibold":"font-normal",children:["Kurir"," ",u.name]}),h?p("span",{className:f?"text-white":"text-blue-600",children:p(re,{className:"h-5 w-5","aria-hidden":"true"})}):null]}),I("div",{className:M(f?"text-blue-200":"text-slate-500","mt-2"),children:[p("div",{children:u.etd!==""&&`Perkiraan Waktu ${u.etd} hari`}),I("div",{children:["Rp"," ",u.cost]})]})]})},u.id))})})]})]})}):null]})]})}export{yt as default};