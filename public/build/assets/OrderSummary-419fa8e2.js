import{q as a,j as t,a as e,d as l}from"./app-5671d959.js";function d(){const{orderSummary:s}=a().props;return t("section",{"aria-labelledby":"summary-heading",className:"mt-16 rounded-lg bg-slate-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8",children:[e("h2",{id:"summary-heading",className:"text-lg font-medium text-slate-900",children:"Order summary"}),t("dl",{className:"mt-6 space-y-4",children:[t("div",{className:"flex items-center justify-between",children:[e("dt",{className:"text-sm text-slate-600",children:"Subtotal"}),e("dd",{className:"font-mono text-sm font-medium text-slate-900",children:s.subtotal})]}),t("div",{className:"flex items-center justify-between border-t border-slate-200 pt-4",children:[e("dt",{className:"flex text-sm text-slate-600",children:e("span",{children:"PPN"})}),e("dd",{className:"font-mono text-sm font-medium text-slate-900",children:s.tax})]}),t("div",{className:"flex items-center justify-between border-t border-slate-200 pt-4",children:[e("dt",{className:"text-base font-medium text-slate-900",children:"Order total"}),t("dd",{className:"font-mono text-base font-medium text-slate-900",children:["Rp ",s.total]})]})]}),e("div",{className:"mt-6",children:e(l,{method:"post",as:"button",href:route("checkout.create"),className:"block w-full rounded-md border border-transparent bg-blue-600 px-4 py-3 text-center text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50",children:"Checkout"})})]})}export{d as default};