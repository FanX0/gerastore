import{W as w,r as v,j as s,a as e,b as F}from"./app-5671d959.js";import{A as _}from"./AppLayout-4723d86e.js";import{I as l}from"./InputLabel-0071d7eb.js";import{I as d}from"./InputError-08f64127.js";import{P as A}from"./PrimaryButton-1942541d.js";import{C as P}from"./Container-eb0ec0a9.js";import{S as u}from"./Select-1e40d041.js";import{C as k}from"./Checkbox-6a412a53.js";import{t as q}from"./transition-a2c1e9ed.js";import"./ApplicationLogo-009a746a.js";import"./createReactComponent-b151f947.js";import"./IconX-9b1a34b5.js";import"./use-flags-24a59ca7.js";function I({location:r,shipping_address:i,page_setting:m}){const{data:a,setData:o,processing:f,recentlySuccessful:b,post:g,errors:c}=w({address:i.address,province:i.province_id,city:i.city_id,subdistrict:i.subdistrict_id,is_default:i.is_default,_method:m.method}),[h,y]=v.useState(r.cities??[]),[p,x]=v.useState(r.subdistricts??[]),S=t=>{t.preventDefault(),g(m.url)},C=async t=>{o("province",t.target.value);const n=await axios.get(route("location.city",t.target.value));y(n.data)},N=async t=>{o("city",t.target.value);const n=await axios.get(route("location.subdistrict",t.target.value));x(n.data)};return s("div",{children:[e(F,{title:"Shipping Address"}),e(P,{children:e("div",{className:" py-8",children:e("div",{className:"max-w-xl rounded-lg bg-white p-6 shadow",children:s("form",{onSubmit:S,className:"space-y-6",children:[s("div",{children:[e(l,{htmlFor:"address",value:"Address"}),e("textarea",{id:"address",className:"mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",value:a.address,onChange:t=>o("address",t.target.value),required:!0}),e(d,{className:"mt-2",message:c.address})]}),s("div",{children:[e(l,{htmlFor:"province",value:"Province"}),e(u,{id:"province",placeholder:"Select Province",options:r.provinces,value:a.province,onChange:C,required:!0}),e(d,{className:"mt-2",message:c.province})]}),h.length>0&&s("div",{children:[e(l,{htmlFor:"city",value:"City"}),e(u,{placeholder:"Select city",options:h,value:a.city,onChange:N,required:!0}),e(d,{className:"mt-2",message:c.city})]}),p.length>0&&s("div",{children:[e(l,{htmlFor:"subdistrict",value:"Subdistrict"}),e(u,{placeholder:"Select subdistrict",options:p,value:a.subdistrict,onChange:t=>o("subdistrict",t.target.value),required:!0}),e(d,{className:"mt-2",message:c.subdistrict})]}),e("div",{children:s("label",{htmlFor:"is_default",className:"flex items-center gap-x-2",children:[e(k,{id:"is_default",name:"is_default",value:a.is_default,checked:a.is_default,onChange:t=>o("is_default",t.target.checked)}),e("span",{children:"Default Address"})]})}),s("div",{className:"flex items-center gap-4",children:[e(A,{disabled:f,children:"Save"}),e(q,{show:b,enterFrom:"opacity-0",leaveTo:"opacity-0",className:"transition ease-in-out",children:e("p",{className:"text-sm text-slate-600",children:"Saved."})})]})]})})})})]})}I.layout=r=>e(_,{header:e("h2",{className:"text-xl font-semibold leading-tight text-slate-800",children:"Shipping Address"}),children:r});export{I as default};