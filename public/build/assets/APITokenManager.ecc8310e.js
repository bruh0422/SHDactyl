import{j as e,a as s,u as _,W as v,r as N,F as O}from"./app.8c5ac7b9.js";import{c as C}from"./index.0579b088.js";import{A as W}from"./ActionMessage.f8b3ade4.js";import{M as z,A as E,D as l}from"./DialogModal.6e9cc074.js";import{C as F}from"./Checkbox.d44c3fb1.js";import{D as R}from"./DangerButton.6d54e63b.js";import{F as Y}from"./FormSection.f2cf1cca.js";import{T as q,I as G}from"./TextInput.7e252fcf.js";import{I as D}from"./InputLabel.918fd58e.js";import{P as u}from"./PrimaryButton.7a747609.js";import{S as T}from"./SecondaryButton.3ef35199.js";import{S as H}from"./SectionBorder.8a872e59.js";import{u as J}from"./useTypedPage.2da195a6.js";import"./transition.01cd7a0f.js";import"./SectionTitle.b3941bec.js";c.Content=function({title:n,children:p}){return e("div",{className:"bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:s("div",{className:"sm:flex sm:items-start",children:[e("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10",children:e("svg",{className:"h-6 w-6 text-red-600 dark:text-red-400",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:e("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),s("div",{className:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",children:[e("h3",{className:"text-lg font-medium text-gray-900 dark:text-gray-100",children:n}),e("div",{className:"mt-4 text-sm text-gray-600 dark:text-gray-400",children:p})]})]})})};c.Footer=function({children:n}){return e("div",{className:"px-6 py-4 bg-gray-100 dark:bg-gray-800 text-right",children:n})};function c({children:o,...n}){return e(z,{...n,children:o})}function le({tokens:o,availablePermissions:n,defaultPermissions:p}){var A,b,S;const h=_(),r=v({name:"",permissions:p}),a=v({permissions:[]}),g=v({}),[P,f]=N.exports.useState(!1),[x,d]=N.exports.useState(null),[k,m]=N.exports.useState(null),w=J();function I(){r.post(h("api-tokens.store"),{preserveScroll:!0,onSuccess:()=>{f(!0),r.reset()}})}function M(t){a.setData("permissions",t.abilities),d(t)}function j(){!x||a.put(h("api-tokens.update",[x]),{preserveScroll:!0,preserveState:!0,onSuccess:()=>d(null)})}function B(t){m(t)}function L(){!k||g.delete(h("api-tokens.destroy",[k]),{preserveScroll:!0,preserveState:!0,onSuccess:()=>m(null)})}return s("div",{children:[s(Y,{onSubmit:I,title:"Create API Token",description:"API tokens allow third-party services to authenticate with our application on your behalf.",renderActions:()=>s(O,{children:[e(W,{on:r.recentlySuccessful,className:"mr-3",children:"Created."}),e(u,{className:C({"opacity-25":r.processing}),disabled:r.processing,children:"Create"})]}),children:[s("div",{className:"col-span-6 sm:col-span-4",children:[e(D,{htmlFor:"name",children:"Name"}),e(q,{id:"name",type:"text",className:"mt-1 block w-full",value:r.data.name,onChange:t=>r.setData("name",t.currentTarget.value),autoFocus:!0}),e(G,{message:r.errors.name,className:"mt-2"})]}),n.length>0&&s("div",{className:"col-span-6",children:[e(D,{htmlFor:"permissions",children:"Permissions"}),e("div",{className:"mt-2 grid grid-cols-1 md:grid-cols-2 gap-4",children:n.map(t=>e("div",{children:s("label",{className:"flex items-center",children:[e(F,{value:t,checked:r.data.permissions.includes(t),onChange:i=>{r.data.permissions.includes(i.currentTarget.value)?r.setData("permissions",r.data.permissions.filter(y=>y!==i.currentTarget.value)):r.setData("permissions",[i.currentTarget.value,...r.data.permissions])}}),e("span",{className:"ml-2 text-sm text-gray-600 dark:text-gray-400",children:t})]})},t))})]})]}),o.length>0?s("div",{children:[e(H,{}),e("div",{className:"mt-10 sm:mt-0",children:e(E,{title:"Manage API Tokens",description:"You may delete any of your existing tokens if they are no longer needed.",children:e("div",{className:"space-y-6",children:o.map(t=>s("div",{className:"flex items-center justify-between",children:[e("div",{className:"break-all dark:text-white",children:t.name}),s("div",{className:"flex items-center",children:[t.last_used_ago&&s("div",{className:"text-sm text-gray-400",children:["Last used ",t.last_used_ago]}),n.length>0?e(u,{className:"cursor-pointer ml-6 text-sm text-gray-400 underline",onClick:()=>M(t),children:"Permissions"}):null,e(u,{className:"cursor-pointer ml-6 text-sm text-red-500",onClick:()=>B(t),children:"Delete"})]})]},t.id))})})})]}):null,s(l,{isOpen:P,onClose:()=>f(!1),children:[s(l.Content,{title:"API Token",children:[e("div",{children:"Please copy your new API token. For your security, it won't be shown again."}),e("div",{className:"mt-4 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded font-mono text-sm text-gray-500",children:(S=(b=(A=w.props)==null?void 0:A.jetstream)==null?void 0:b.flash)==null?void 0:S.token})]}),e(l.Footer,{children:e(T,{onClick:()=>f(!1),children:"Close"})})]}),s(l,{isOpen:!!x,onClose:()=>d(null),children:[e(l.Content,{title:"API Token Permissions",children:e("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:n.map(t=>e("div",{children:s("label",{className:"flex items-center",children:[e(F,{value:t,checked:a.data.permissions.includes(t),onChange:i=>{a.data.permissions.includes(i.currentTarget.value)?a.setData("permissions",a.data.permissions.filter(y=>y!==i.currentTarget.value)):a.setData("permissions",[i.currentTarget.value,...a.data.permissions])}}),e("span",{className:"ml-2 text-sm text-gray-600 dark:text-gray-400",children:t})]})},t))})}),s(l.Footer,{children:[e(T,{onClick:()=>d(null),children:"Cancel"}),e(u,{onClick:j,className:C("ml-2",{"opacity-25":a.processing}),disabled:a.processing,children:"Save"})]})]}),s(c,{isOpen:!!k,onClose:()=>m(null),children:[e(c.Content,{title:"Delete API Token",children:"Are you sure you would like to delete this API token?"}),s(c.Footer,{children:[e(T,{onClick:()=>m(null),children:"Cancel"}),e(R,{onClick:L,className:C("ml-2",{"opacity-25":g.processing}),disabled:g.processing,children:"Delete"})]})]})]})}export{le as default};
