import{a as e,j as a}from"./app-5671d959.js";function c({transaction:l}){return e("div",{className:"space-y-4 lg:col-span-5",children:l.details.map(s=>a("div",{className:"flex",children:[e("div",{className:"aspect-h-1 aspect-w-1 sm:aspect-none w-full flex-shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-24",children:e("img",{src:s.image,alt:s.name,className:"h-full w-full object-cover object-center sm:h-full sm:w-full"})}),a("div",{className:"mt-6 flex flex-col sm:ml-6 sm:mt-0",children:[a("div",{className:"flex-1",children:[e("h3",{className:"text-base font-medium text-gray-900",children:s.name}),a("p",{className:"mt-1 flex gap-x-2 text-sm text-gray-500",children:[e("span",{children:s.variation.attribute_1}),e("span",{children:"/"}),e("span",{children:s.variation.attribute_2})]})]}),a("p",{className:"mt-3 text-sm font-medium text-gray-900",children:["$",s.price]})]})]}))})}export{c as default};