import{j as n,a as o}from"./app-5671d959.js";function u({placeholder:e,options:r,...a}){return n("select",{className:"w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",...a,children:[o("option",{value:"",children:e||"Select an option"}),r.map((s,l)=>o("option",{value:s.id,children:s.name},l))]})}export{u as S};