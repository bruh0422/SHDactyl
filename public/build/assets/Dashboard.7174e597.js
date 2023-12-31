import{A as Ze}from"./AppLayout.8f7c5bcc.js";import{j as e,r as n,B as Qe,A as Be,o as Q,C as $e,a as b,D as Je,K as Xe,L as ge,M as Re,x as Ye,N as ve,P as ea,Q as aa,S as ra,G as oa,z as sa,F as ta,T as la}from"./app.8c5ac7b9.js";import{c as Ae,m as ye,u as na,A as ia,b as ie}from"./chunk-NXTXE2B3.a58b25ad.js";import{t as ae,d as da,g as ca,$ as ua,h as De,_ as pa,i as ma,e as fa,c as O,a as C,f as H,m as Se,u as ee}from"./ThemeSwitcher.90187533.js";import{T as de,a as ba}from"./chunk-WUWNKKWR.3c4ac0c2.js";import{R as ha,l as we}from"./Combination.e8524913.js";import{$ as xa}from"./module.cacc372b.js";import{$ as Oe,a as ga,b as va,c as ya,w as Ce,s as wa,d as X,e as Y,f as Z,g as ce,h as Ca}from"./module.b0d91a26.js";import{c as ke}from"./chunk-OFH6WYRQ.a50d31f5.js";import"./index.0579b088.js";import"./useTypedPage.2da195a6.js";import"./transition.01cd7a0f.js";var Ne=ae({slots:{wrapper:"relative shadow-black/5",zoomedWrapper:"relative overflow-hidden rounded-inherit",img:"relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",blurredImg:["absolute","z-0","inset-0","w-full","h-full","object-cover","filter","blur-lg","scale-105","saturate-150","opacity-30","translate-y-1"]},variants:{radius:{none:{},sm:{},md:{},lg:{},full:{}},shadow:{none:{wrapper:"shadow-none",img:"shadow-none"},sm:{wrapper:"shadow-small",img:"shadow-small"},md:{wrapper:"shadow-medium",img:"shadow-medium"},lg:{wrapper:"shadow-large",img:"shadow-large"}},isZoomed:{true:{img:["object-cover","transform","hover:scale-125"]}},showSkeleton:{true:{wrapper:["group","relative","overflow-hidden","bg-content3 dark:bg-content2","before:opacity-100","before:absolute","before:inset-0","before:-translate-x-full","before:animate-[shimmer_2s_infinite]","before:border-t","before:border-content4/30","before:bg-gradient-to-r","before:from-transparent","before:via-content4","dark:before:via-default-700/10","before:to-transparent","after:opacity-100","after:absolute","after:inset-0","after:-z-10","after:bg-content3","dark:after:bg-content2"],img:"opacity-0"}},disableAnimation:{true:{img:"transition-none"},false:{img:"transition-transform-opacity motion-reduce:transition-none !duration-300"}}},defaultVariants:{radius:"lg",shadow:"none",isZoomed:!1,isBlurred:!1,showSkeleton:!1,disableAnimation:!1},compoundSlots:[{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"none",class:"rounded-none"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"full",class:"rounded-full"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"sm",class:"rounded-small"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"md",class:"rounded-md"},{slots:["wrapper","img","blurredImg","zoomedWrapper"],radius:"lg",class:"rounded-large"}]}),Pe=ae({slots:{wrapper:["flex","w-screen","h-[100dvh]","fixed","inset-0","z-50","overflow-x-auto","justify-center","[--scale-enter:100%]","[--scale-exit:100%]","[--slide-enter:0px]","[--slide-exit:80px]","sm:[--scale-enter:100%]","sm:[--scale-exit:103%]","sm:[--slide-enter:0px]","sm:[--slide-exit:0px]"],base:["flex","flex-col","relative","bg-white","z-50","w-full","box-border","bg-content1","outline-none","mx-1","my-1","sm:mx-6","sm:my-16"],backdrop:"z-50",header:"flex py-4 px-6 flex-initial text-large font-semibold",body:"flex flex-1 flex-col gap-3 px-6 py-2",footer:"flex flex-row gap-2 px-6 py-4 justify-end",closeButton:["absolute","appearance-none","outline-none","select-none","top-1","right-1","p-2","text-foreground-500","rounded-full","hover:bg-default-100","active:bg-default-200","tap-highlight-transparent",...da]},variants:{size:{xs:{base:"max-w-xs"},sm:{base:"max-w-sm"},md:{base:"max-w-md"},lg:{base:"max-w-lg"},xl:{base:"max-w-xl"},"2xl":{base:"max-w-2xl"},"3xl":{base:"max-w-3xl"},"4xl":{base:"max-w-4xl"},"5xl":{base:"max-w-5xl"},full:{base:"my-0 mx-0 sm:mx-0 sm:my-0 max-w-full h-[100dvh] !rounded-none"}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"}},placement:{auto:{wrapper:"items-end sm:items-center"},center:{wrapper:"items-center sm:items-center"},top:{wrapper:"items-start sm:items-start"},"top-center":{wrapper:"items-start sm:items-center"},bottom:{wrapper:"items-end sm:items-end"},"bottom-center":{wrapper:"items-end sm:items-center"}},shadow:{sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},backdrop:{transparent:{backdrop:"hidden"},opaque:{backdrop:"bg-overlay/50 backdrop-opacity-disabled"},blur:{backdrop:"backdrop-blur-md backdrop-saturate-150 bg-overlay/30"}},scrollBehavior:{normal:{base:"overflow-y-hidden"},inside:{base:"max-h-[calc(100%_-_7.5rem)]",body:"overflow-y-auto"},outside:{wrapper:"items-start sm:items-start overflow-y-auto",base:"my-16"}}},defaultVariants:{size:"md",radius:"lg",shadow:"sm",placement:"auto",backdrop:"opaque",scrollBehavior:"normal"},compoundVariants:[{backdrop:["opaque","blur"],class:{backdrop:"w-screen h-screen fixed inset-0"}}]}),ka=ae({slots:{base:"group relative max-w-fit inline-flex items-center justify-start cursor-pointer tap-highlight-transparent p-2 -m-2",wrapper:["relative","inline-flex","items-center","justify-center","flex-shrink-0","overflow-hidden","before:content-['']","before:absolute","before:inset-0","before:border-solid","before:border-2","before:box-border","before:border-default","after:content-['']","after:absolute","after:inset-0","after:scale-50","after:opacity-0","after:origin-center","group-data-[selected=true]:after:scale-100","group-data-[selected=true]:after:opacity-100","group-data-[hover=true]:before:bg-default-100",...ca],icon:"z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",label:"relative text-foreground select-none"},variants:{color:{default:{wrapper:"after:bg-default after:text-default-foreground text-default-foreground"},primary:{wrapper:"after:bg-primary after:text-primary-foreground text-primary-foreground"},secondary:{wrapper:"after:bg-secondary after:text-secondary-foreground text-secondary-foreground"},success:{wrapper:"after:bg-success after:text-success-foreground text-success-foreground"},warning:{wrapper:"after:bg-warning after:text-warning-foreground text-warning-foreground"},danger:{wrapper:"after:bg-danger after:text-danger-foreground text-danger-foreground"}},size:{sm:{wrapper:["w-4 h-4 mr-2","rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"],label:"text-small",icon:"w-3 h-2"},md:{wrapper:["w-5 h-5 mr-2","rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"],label:"text-medium",icon:"w-4 h-3"},lg:{wrapper:["w-6 h-6 mr-2","rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"],label:"text-large",icon:"w-5 h-4"}},radius:{none:{wrapper:"rounded-none before:rounded-none after:rounded-none"},sm:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.5)]","before:rounded-[calc(theme(borderRadius.medium)*0.5)]","after:rounded-[calc(theme(borderRadius.medium)*0.5)]"]},md:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.6)]","before:rounded-[calc(theme(borderRadius.medium)*0.6)]","after:rounded-[calc(theme(borderRadius.medium)*0.6)]"]},lg:{wrapper:["rounded-[calc(theme(borderRadius.medium)*0.7)]","before:rounded-[calc(theme(borderRadius.medium)*0.7)]","after:rounded-[calc(theme(borderRadius.medium)*0.7)]"]},full:{wrapper:"rounded-full before:rounded-full after:rounded-full"}},lineThrough:{true:{label:["inline-flex","items-center","justify-center","before:content-['']","before:absolute","before:bg-foreground","before:w-0","before:h-0.5","group-data-[selected=true]:opacity-60","group-data-[selected=true]:before:w-full"]}},isDisabled:{true:{base:"opacity-disabled pointer-events-none"}},isInvalid:{true:{wrapper:"before:border-danger",label:"text-danger"}},disableAnimation:{true:{wrapper:"transition-none",icon:"transition-none",label:"transition-none"},false:{wrapper:["before:transition-colors","group-data-[pressed=true]:scale-95","transition-transform","after:transition-transform-opacity","after:!ease-linear","after:!duration-200","motion-reduce:transition-none"],icon:"transition-opacity motion-reduce:transition-none",label:"transition-colors-opacity before:transition-width motion-reduce:transition-none"}}},defaultVariants:{color:"primary",size:"md",isDisabled:!1,lineThrough:!1,disableAnimation:!1}});ae({slots:{base:"relative flex flex-col gap-2",label:"relative text-medium text-foreground-500",wrapper:"flex flex-col flex-wrap gap-2 data-[orientation=horizontal]:flex-row",description:"text-small text-foreground-400",errorMessage:"text-small text-danger"},variants:{isRequired:{true:{label:"after:content-['*'] after:text-danger after:ml-0.5"}},isInvalid:{true:{description:"text-danger"}},disableAnimation:{true:{},false:{description:"transition-colors !duration-150 motion-reduce:transition-none"}}},defaultVariants:{isInvalid:!1,isRequired:!1,disableAnimation:!1}});var Na=r=>e("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:"1em",...r,children:e("path",{d:"M18 6L6 18M6 6l12 12"})}),_e=Boolean(globalThis==null?void 0:globalThis.document)?n.exports.useLayoutEffect:n.exports.useEffect;function Pa(r={}){const{loading:a,src:s,srcSet:t,onLoad:l,onError:i,crossOrigin:f,sizes:o,ignoreFallback:u}=r,[c,p]=n.exports.useState("pending");n.exports.useEffect(()=>{p(s?"loading":"pending")},[s]);const m=n.exports.useRef(),h=n.exports.useCallback(()=>{if(!s)return;x();const d=new Image;d.src=s,f&&(d.crossOrigin=f),t&&(d.srcset=t),o&&(d.sizes=o),a&&(d.loading=a),d.onload=g=>{x(),p("loaded"),l==null||l(g)},d.onerror=g=>{x(),p("failed"),i==null||i(g)},m.current=d},[s,f,t,o,l,i,a]),x=()=>{m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return _e(()=>{if(!u)return c==="loading"&&h(),()=>{x()}},[c,h,u]),u?"loaded":c}function Fe(r,a,s){let t=Oe({...r,value:a.isSelected}),{isInvalid:l,validationErrors:i,validationDetails:f}=t.displayValidation,{inputProps:o,isSelected:u,isPressed:c,isDisabled:p,isReadOnly:m}=ua({...r,isInvalid:l},a,s);ga(r,t,s);let{isIndeterminate:h,isRequired:x,validationBehavior:d="aria"}=r;return n.exports.useEffect(()=>{s.current&&(s.current.indeterminate=h)}),{inputProps:{...o,checked:u,"aria-required":x&&d==="aria"||void 0,required:x&&d==="native"},isSelected:u,isPressed:c,isDisabled:p,isReadOnly:m,isInvalid:l,validationErrors:i,validationDetails:f}}const Ia=new WeakMap;function Ba(r,a,s){const t=De({isReadOnly:r.isReadOnly||a.isReadOnly,isSelected:a.isSelected(r.value),onChange(y){y?a.addValue(r.value):a.removeValue(r.value),r.onChange&&r.onChange(y)}});let{name:l,descriptionId:i,errorMessageId:f,validationBehavior:o}=Ia.get(a);var u;o=(u=r.validationBehavior)!==null&&u!==void 0?u:o;let{realtimeValidation:c}=Oe({...r,value:t.isSelected,name:void 0,validationBehavior:"aria"}),p=n.exports.useRef(va),m=()=>{a.setInvalid(r.value,c.isInvalid?c:p.current)};n.exports.useEffect(m);let h=a.realtimeValidation.isInvalid?a.realtimeValidation:c,x=o==="native"?a.displayValidation:h;var d;let g=Fe({...r,isReadOnly:r.isReadOnly||a.isReadOnly,isDisabled:r.isDisabled||a.isDisabled,name:r.name||l,isRequired:(d=r.isRequired)!==null&&d!==void 0?d:a.isRequired,validationBehavior:o,[ya]:{realtimeValidation:h,displayValidation:x,resetValidation:a.resetValidation,commitValidation:a.commitValidation,updateValidation(y){p.current=y,m()}}},t,s);return{...g,inputProps:{...g.inputProps,"aria-describedby":[r["aria-describedby"],a.isInvalid?f:null,i].filter(Boolean).join(" ")||void 0}}}var[tr,$a]=Ae({name:"CheckboxGroupContext",strict:!1});function Ra(r){const{isSelected:a,disableAnimation:s,...t}=r;return e("svg",{"aria-hidden":"true",role:"presentation",viewBox:"0 0 17 18",...t,children:e("polyline",{fill:"none",points:"1 9 7 14 15 4",stroke:"currentColor",strokeDasharray:22,strokeDashoffset:a?44:66,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,style:!s&&a?{transition:"stroke-dashoffset 250ms linear 0.2s"}:{}})})}function Aa(r){const{isSelected:a,disableAnimation:s,...t}=r;return e("svg",{stroke:"currentColor",strokeWidth:3,viewBox:"0 0 24 24",...t,children:e("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function Da(r){const{isIndeterminate:a,...s}=r;return e(a?Aa:Ra,{...s})}function Sa(r={}){var a,s,t,l,i,f;const o=$a(),u=!!o,{as:c,ref:p,value:m="",children:h,icon:x,name:d,isRequired:g=!1,isReadOnly:y=!1,autoFocus:w=!1,isSelected:N,validationState:A,size:I=(a=o==null?void 0:o.size)!=null?a:"md",color:_=(s=o==null?void 0:o.color)!=null?s:"primary",radius:B=o==null?void 0:o.radius,lineThrough:z=(t=o==null?void 0:o.lineThrough)!=null?t:!1,isDisabled:F=(l=o==null?void 0:o.isDisabled)!=null?l:!1,disableAnimation:$=(i=o==null?void 0:o.disableAnimation)!=null?i:!1,isInvalid:k=A?A==="invalid":(f=o==null?void 0:o.isInvalid)!=null?f:!1,isIndeterminate:P=!1,defaultSelected:j,classNames:v,onChange:U,className:D,onValueChange:K,...R}=r;o&&pa&&(N&&Ce("The Checkbox.Group is being used, `isSelected` will be ignored. Use the `value` of the Checkbox.Group instead.","Checkbox"),j&&Ce("The Checkbox.Group is being used, `defaultSelected` will be ignored. Use the `defaultValue` of the Checkbox.Group instead.","Checkbox"));const T=c||"label",W=n.exports.useRef(null),oe=ma(p,W),J=n.exports.useId(),M=n.exports.useMemo(()=>({name:d,value:m,children:h,autoFocus:w,defaultSelected:j,isIndeterminate:P,isRequired:g,isInvalid:k,isSelected:N,isDisabled:F,isReadOnly:y,"aria-label":wa(R["aria-label"],h),"aria-labelledby":R["aria-labelledby"]||J,onChange:K}),[m,d,J,h,w,k,P,F,y,N,j,R["aria-label"],R["aria-labelledby"],K]),{inputProps:S,isSelected:L,isDisabled:E,isReadOnly:V,isPressed:se}=u?Ba({...M,isInvalid:k},o.groupState,W):Fe(M,De(M),W),ue=E||V,[Le,pe]=n.exports.useState(!1),{pressProps:me}=fa({isDisabled:ue,onPressStart(G){G.pointerType!=="keyboard"&&pe(!0)},onPressEnd(G){G.pointerType!=="keyboard"&&pe(!1)}}),fe=ue?!1:Le||se;g&&(S.required=!0);const{hoverProps:be,isHovered:te}=Qe({isDisabled:S.disabled}),{focusProps:he,isFocused:le,isFocusVisible:ne}=Be({autoFocus:S.autoFocus}),q=n.exports.useMemo(()=>ka({color:_,size:I,radius:B,isInvalid:k,lineThrough:z,isDisabled:E,disableAnimation:$}),[_,I,B,k,z,E,$]),xe=O(v==null?void 0:v.base,D),qe=n.exports.useCallback(()=>({ref:oe,className:q.base({class:xe}),"data-disabled":C(E),"data-selected":C(L||P),"data-invalid":C(k),"data-hover":C(te),"data-focus":C(le),"data-pressed":C(fe),"data-readonly":C(S.readOnly),"data-focus-visible":C(ne),"data-indeterminate":C(P),...Q(be,me,R)}),[q,xe,E,L,P,k,te,le,fe,S.readOnly,ne,be,me,R]),Ue=n.exports.useCallback((G={})=>({...G,"aria-hidden":!0,className:O(q.wrapper({class:O(v==null?void 0:v.wrapper,G==null?void 0:G.className)}))}),[q,v==null?void 0:v.wrapper]),Ge=n.exports.useCallback(()=>({ref:W,...Q(S,he),onChange:$e(S.onChange,U)}),[S,he,U]),He=n.exports.useCallback(()=>({id:J,className:q.label({class:v==null?void 0:v.label})}),[q,v==null?void 0:v.label,E,L,k]),Ke=n.exports.useCallback(()=>({isSelected:L,isIndeterminate:!!P,disableAnimation:!!$,className:q.icon({class:v==null?void 0:v.icon})}),[q,v==null?void 0:v.icon,L,P,$]);return{Component:T,icon:x,children:h,isSelected:L,isDisabled:E,isInvalid:k,isFocused:le,isHovered:te,isFocusVisible:ne,getBaseProps:qe,getWrapperProps:Ue,getInputProps:Ge,getLabelProps:He,getIconProps:Ke}}var Me=H((r,a)=>{const{Component:s,children:t,icon:l=e(Da,{}),getBaseProps:i,getWrapperProps:f,getInputProps:o,getIconProps:u,getLabelProps:c}=Sa({...r,ref:a}),p=typeof l=="function"?l(u()):n.exports.cloneElement(l,u());return b(s,{...i(),children:[e(Je,{children:e("input",{...o()})}),e("span",{...f(),children:p}),t&&e("span",{...c(),children:t})]})});Me.displayName="NextUI.Checkbox";var Oa=Me;function _a(r,a){let{role:s="dialog"}=r,t=Xe();t=r["aria-label"]?void 0:t;let l=n.exports.useRef(!1);return n.exports.useEffect(()=>{if(a.current&&!a.current.contains(document.activeElement)){ge(a.current);let i=setTimeout(()=>{document.activeElement===a.current&&(l.current=!0,a.current.blur(),ge(a.current),l.current=!1)},500);return()=>{clearTimeout(i)}}},[a]),Re(),{dialogProps:{...Ye(r,{labelable:!0}),role:s,tabIndex:-1,"aria-labelledby":r["aria-labelledby"]||t,onBlur:i=>{l.current&&i.stopPropagation()}},titleProps:{id:t}}}function Fa(r){const[a,s]=Se(r,Ne.variantKeys),{ref:t,as:l,src:i,className:f,classNames:o,loading:u,isBlurred:c,fallbackSrc:p,isLoading:m,disableSkeleton:h=!!p,removeWrapper:x=!1,onError:d,onLoad:g,srcSet:y,sizes:w,crossOrigin:N,...A}=a,I=Pa({src:i,loading:u,onError:d,onLoad:g,ignoreFallback:!1,srcSet:y,sizes:w,crossOrigin:N}),_=I==="loaded"&&!m,B=I==="loading"||m,z=r.isZoomed,F=l||"img",$=ee(t),{w:k}=n.exports.useMemo(()=>({w:a.width?typeof a.width=="number"?`${a.width}px`:a.width:"fit-content"}),[a==null?void 0:a.width]),P=(!i||!_)&&!!p,j=B&&!h,v=n.exports.useMemo(()=>Ne({...s,showSkeleton:j}),[...Object.values(s),j]),U=O(f,o==null?void 0:o.img),D=(T={})=>{const W=O(U,T==null?void 0:T.className);return{src:i,ref:$,"data-loaded":C(_),className:v.img({class:W}),loading:u,srcSet:y,sizes:w,crossOrigin:N,...A}},K=n.exports.useCallback(()=>{const T=P?{backgroundImage:`url(${p})`}:{};return{className:v.wrapper({class:o==null?void 0:o.wrapper}),style:{...T,maxWidth:k}}},[v,P,p,o==null?void 0:o.wrapper]),R=n.exports.useCallback(()=>({src:i,"aria-hidden":C(!0),className:v.blurredImg({class:o==null?void 0:o.blurredImg})}),[v,i,o==null?void 0:o.blurredImg]);return{Component:F,domRef:$,slots:v,classNames:o,isBlurred:c,disableSkeleton:h,fallbackSrc:p,removeWrapper:x,isZoomed:z,isLoading:B,getImgProps:D,getWrapperProps:K,getBlurredImgProps:R}}var Ee=H((r,a)=>{const{Component:s,domRef:t,slots:l,classNames:i,isBlurred:f,isZoomed:o,fallbackSrc:u,removeWrapper:c,disableSkeleton:p,getImgProps:m,getWrapperProps:h,getBlurredImgProps:x}=Fa({...r,ref:a}),d=e(s,{ref:t,...m()});if(c)return d;const g=e("div",{className:l.zoomedWrapper({class:i==null?void 0:i.zoomedWrapper}),children:d});return f?b("div",{...h(),children:[o?g:d,n.exports.cloneElement(d,x())]}):o||!p||u?b("div",{...h(),children:[" ",o?g:d]}):d});Ee.displayName="NextUI.Image";var Ma=Ee,[Ea,re]=Ae({name:"ModalContext",errorMessage:"useModalContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Modal />`"}),Ve=H((r,a)=>{const{as:s,children:t,className:l,...i}=r,{slots:f,classNames:o,bodyId:u,setBodyMounted:c}=re(),p=ee(a),m=s||"div";return n.exports.useEffect(()=>(c(!0),()=>c(!1)),[c]),e(m,{ref:p,className:f.body({class:O(o==null?void 0:o.body,l)}),id:u,...i,children:t})});Ve.displayName="NextUI.ModalBody";var Va=Ve,za={enter:{scale:"var(--scale-enter)",y:"var(--slide-enter))",opacity:1,transition:{scale:{duration:.4,ease:de.ease},opacity:{duration:.4,ease:de.ease},y:{type:"spring",bounce:0,duration:.6}}},exit:{scale:"var(--scale-exit)",y:"var(--slide-exit)",opacity:0,transition:{duration:.3,ease:de.ease}}},ze=H((r,a)=>{const{as:s,children:t,role:l="dialog",...i}=r,{Component:f,domRef:o,slots:u,isOpen:c,classNames:p,motionProps:m,backdrop:h,closeButton:x,hideCloseButton:d,disableAnimation:g,shouldBlockScroll:y,getDialogProps:w,getBackdropProps:N,getCloseButtonProps:A,onClose:I}=re(),_=s||f||"div",{dialogProps:B}=_a({role:l},o),z=n.exports.isValidElement(x)?n.exports.cloneElement(x,A()):e("button",{...A(),children:e(Na,{})}),F=b(_,{...w(Q(B,i)),children:[e(ve,{onDismiss:I}),!d&&z,typeof t=="function"?t(I):t,e(ve,{onDismiss:I})]}),$=n.exports.useMemo(()=>h==="transparent"?null:g?e("div",{...N()}):e(ye.div,{animate:"enter",exit:"exit",initial:"exit",variants:ba.fade,...N()}),[h,g,N]);return b("div",{tabIndex:-1,children:[$,e(ha,{forwardProps:!0,enabled:y&&c,removeScrollBar:!1,children:g?e("div",{className:u.wrapper({class:p==null?void 0:p.wrapper}),children:F}):e(ye.div,{animate:"enter",className:u.wrapper({class:p==null?void 0:p.wrapper}),exit:"exit",initial:"exit",variants:za,...m,children:F})})]})});ze.displayName="NextUI.ModalContent";var ja=ze,je=H((r,a)=>{const{as:s,children:t,className:l,...i}=r,{slots:f,classNames:o}=re(),u=ee(a);return e(s||"footer",{ref:u,className:f.footer({class:O(o==null?void 0:o.footer,l)}),...i,children:t})});je.displayName="NextUI.ModalFooter";var Ta=je,Te=H((r,a)=>{const{as:s,children:t,className:l,...i}=r,{slots:f,classNames:o,headerId:u,setHeaderMounted:c}=re(),p=ee(a),m=s||"header";return n.exports.useEffect(()=>(c(!0),()=>c(!1)),[c]),e(m,{ref:p,className:f.header({class:O(o==null?void 0:o.header,l)}),id:u,...i,children:t})});Te.displayName="NextUI.ModalHeader";var Wa=Te;function La(r={},a,s){let{overlayProps:t,underlayProps:l}=ea({...r,isOpen:a.isOpen,onClose:a.close},s);return Re(),n.exports.useEffect(()=>{if(a.isOpen&&s.current)return aa([s.current])},[a.isOpen,s]),{modalProps:Q(t),underlayProps:l}}function qa(r){var a;const[s,t]=Se(r,Pe.variantKeys),{ref:l,as:i,className:f,classNames:o,disableAnimation:u=!1,isOpen:c,defaultOpen:p,onOpenChange:m,motionProps:h,closeButton:x,isDismissable:d=!0,hideCloseButton:g=!1,shouldBlockScroll:y=!0,portalContainer:w,isKeyboardDismissDisabled:N=!1,onClose:A,...I}=s,_=i||"section",B=ee(l),z=n.exports.useRef(null),[F,$]=n.exports.useState(!1),[k,P]=n.exports.useState(!1),j=n.exports.useId(),v=n.exports.useId(),U=n.exports.useId(),D=xa({isOpen:c,defaultOpen:p,onOpenChange:V=>{m==null||m(V),V||A==null||A()}}),{modalProps:K,underlayProps:R}=La({isDismissable:d,isKeyboardDismissDisabled:N},D,B),{buttonProps:T}=na({onPress:D.close},z),{isFocusVisible:W,focusProps:oe}=Be(),J=O(o==null?void 0:o.base,f),M=n.exports.useMemo(()=>Pe({...t}),[...Object.values(t)]),S=(V={},se=null)=>({ref:ra(se,B),...Q(K,I,V),className:M.base({class:O(J,V.className)}),id:j,"data-open":C(D.isOpen),"data-dismissable":C(d),"aria-modal":C(!0),"aria-labelledby":F?v:void 0,"aria-describedby":k?U:void 0}),L=n.exports.useCallback((V={})=>({className:M.backdrop({class:o==null?void 0:o.backdrop}),onClick:()=>D.close(),...R,...V}),[M,o,R]),E=()=>({role:"button",tabIndex:0,"aria-label":"Close","data-focus-visible":C(W),className:M.closeButton({class:o==null?void 0:o.closeButton}),...Q(T,oe)});return{Component:_,slots:M,domRef:B,headerId:v,bodyId:U,motionProps:h,classNames:o,isDismissable:d,closeButton:x,hideCloseButton:g,portalContainer:w,shouldBlockScroll:y,backdrop:(a=r.backdrop)!=null?a:"opaque",isOpen:D.isOpen,onClose:D.close,disableAnimation:u,setBodyMounted:P,setHeaderMounted:$,getDialogProps:S,getBackdropProps:L,getCloseButtonProps:E}}var We=H((r,a)=>{const{children:s,...t}=r,l=qa({...t,ref:a}),i=e(oa,{portalContainer:l.portalContainer,children:s});return e(Ea,{value:l,children:l.disableAnimation&&l.isOpen?i:e(ia,{children:l.isOpen?i:null})})});We.displayName="NextUI.Modal";var Ua=We;function Ie(r,a=[]){const s=n.exports.useRef(r);return _e(()=>{s.current=r}),n.exports.useCallback((...t)=>{var l;return(l=s.current)==null?void 0:l.call(s,...t)},a)}function Ga(r={}){const{id:a,defaultOpen:s,isOpen:t,onClose:l,onOpen:i,onChange:f=()=>{}}=r,o=Ie(i),u=Ie(l),[c,p]=sa(t,s||!1,f),m=n.exports.useId(),h=a||m,x=t!==void 0,d=n.exports.useCallback(()=>{x||p(!1),u==null||u()},[x,u]),g=n.exports.useCallback(()=>{x||p(!0),o==null||o()},[x,o]),y=n.exports.useCallback(()=>{(c?d:g)()},[c,g,d]);return{isOpen:!!c,onOpen:g,onClose:d,onOpenChange:y,isControlled:x,getButtonProps:(w={})=>({...w,"aria-expanded":c,"aria-controls":h,onClick:$e(w.onClick,y)}),getDisclosureProps:(w={})=>({...w,hidden:!c,id:h})}}function lr(r){const{isOpen:a,onOpen:s,onOpenChange:t}=Ga();function l(i){i.preventDefault(),la.post("/reset/password")}return e(Ze,{title:"Dashboard",renderHeader:()=>e("h2",{className:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight",children:"\u4E3B\u9801"}),children:e("div",{className:"py-12",children:e("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:b("div",{className:"bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg flex justify-around p-5 flex-row flex-wrap",children:[b(X,{className:"py-4 pr-16 w-60 flex flex-row ml-7",children:[b(Y,{className:"pb-0 pt-2 px-4 flex-col items-start",children:[e("p",{className:"text-tiny uppercase font-bold",children:"\u4EE3\u5E63"}),e("small",{className:"text-default-500",children:"Coins"}),b("h4",{className:"font-bold text-large",children:["$ ",r.auth.user.coins," SDC"]})]}),e("div",{className:"flex justify-end items-center",children:e("i",{className:"fa-solid fa-coins fa-2xl"})}),e(Z,{className:"overflow-visible py-2"})]}),b(X,{className:"py-4 pr-16 w-60 flex flex-row",children:[b(Y,{className:"pb-0 pt-2 px-4 flex-col items-start",children:[e("p",{className:"text-tiny uppercase font-bold",children:"\u8655\u7406\u5668"}),e("small",{className:"text-default-500",children:"CPU"}),b("h4",{className:"font-bold text-large",children:["0 / ",r.auth.user.cpu," %"]})]}),e("div",{className:"flex justify-end items-center",children:e("i",{className:"fa-solid fa-microchip fa-2xl"})}),e(Z,{className:"overflow-visible py-2"})]}),b(X,{className:"py-4 pr-16 w-60 flex flex-row",children:[b(Y,{className:"pb-0 pt-2 px-4 flex-col items-start",children:[e("p",{className:"text-tiny uppercase font-bold",children:"\u8A18\u61B6\u9AD4"}),e("small",{className:"text-default-500",children:"Ram"}),b("h4",{className:"font-bold text-large",children:["0 / ",r.auth.user.ram," MB"]})]}),e("div",{className:"flex justify-end items-center",children:e("i",{className:"fa-solid fa-memory fa-2xl"})}),e(Z,{className:"overflow-visible py-2"})]}),b(X,{className:"py-4 pr-16 w-60 flex flex-row",children:[b(Y,{className:"pb-0 pt-2 px-4 flex-col items-start",children:[e("p",{className:"text-tiny uppercase font-bold",children:"\u5132\u5B58\u7A7A\u9593"}),e("small",{className:"text-default-500",children:"Disk"}),b("h4",{className:"font-bold text-large",children:["0 / ",r.auth.user.disk," MB"]})]}),e("div",{className:"flex justify-end items-center",children:e("i",{className:"fa-solid fa-hard-drive fa-2xl"})}),e(Z,{className:"overflow-visible py-2"})]}),e("br",{}),b(X,{className:"max-w-[400px] mt-10",children:[b(Y,{className:"flex gap-3",children:[e(Ma,{alt:"shdcloud logo",height:40,radius:"sm",src:"https://cdn.discordapp.com/attachments/1120284155578691676/1185889959710838875/shd-cloud-logo.png",width:40}),b("div",{className:"flex flex-col",children:[e("p",{className:"text-md",children:"\u5E33\u865F / \u9762\u677F\u8CC7\u8A0A"}),e(we,{href:"https://panel.shdcloud.xyz",children:e("p",{className:"text-small text-default-500",children:"panel.shdcloud.xyz"})})]})]}),e(ce,{}),b(Z,{children:[b("p",{children:["\u5E33\u865F\u540D\u7A31\uFF1A",r.auth.user.discord_id]}),e("p",{children:"\u5BC6\u78BC\uFF1A\u82E5\u9700\u8981\u767B\u5165\u8ACB\u91CD\u8A2D\u5BC6\u78BC"}),b("p",{children:["\u8EAB\u5206\uFF1A",e(ke,{startContent:e("i",{className:"fa-solid fa-check"}),variant:"faded",color:"success",children:"User"}),"\xA0",e(ke,{startContent:e("i",{className:"fa-solid fa-shield-halved"}),variant:"faded",color:"secondary",children:"Admin"})]})]}),e(ce,{}),e(Z,{children:b("div",{className:"flex justify-around",children:[e(ie,{color:"primary",variant:"shadow",children:"\u540C\u6B65\u8CC7\u6599"}),e(ie,{color:"danger",onPress:s,variant:"shadow",children:"\u91CD\u8A2D\u5BC6\u78BC"})]})}),e(ce,{}),e(Ca,{children:e(we,{isExternal:!0,showAnchorIcon:!0,href:"https://panel.shdcloud.xyz",children:"\u958B\u555F\u9762\u677F"})})]}),e(Ua,{backdrop:"opaque",isOpen:a,onOpenChange:t,radius:"2xl",classNames:{body:"py-6",backdrop:"bg-[#292f46]/50 backdrop-opacity-40",base:"border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",header:"border-b-[1px] border-[#292f46]",footer:"border-t-[1px] border-[#292f46]",closeButton:"hover:bg-white/5 active:bg-white/10"},children:e(ja,{children:i=>b(ta,{children:[e(Wa,{className:"flex flex-col gap-1",children:"\u78BA\u5B9A\u8981\u91CD\u8A2D\u5BC6\u78BC\uFF1F"}),e(Va,{children:e("p",{children:"\u7576\u60A8\u91CD\u8A2D\u5BC6\u78BC\u5F8C\uFF0C\u6211\u5011\u6703\u5148\u986F\u793A\u5BC6\u78BC\u7D66\u60A8\u5F8C\u5C07\u5BC6\u78BC\u52A0\u5BC6\u4E26\u4E14\u540C\u6B65\u81F3\u9762\u677F\u3002"})}),b(Ta,{children:[e(Oa,{children:"\u6211\u660E\u767D\u5BC6\u78BC\u50C5\u6703\u986F\u793A\u4E00\u6B21\uFF0C\u5FD8\u8A18\u5BC6\u78BC\u9700\u8981\u518D\u6B21\u91CD\u8A2D\u3002"}),e("form",{onSubmit:l,children:e(ie,{type:"submit",className:"bg-[#6f4ef2] shadow-lg shadow-indigo-500/20",onPress:i,children:"\u78BA\u8A8D"})})]})]})})})]})})})})}export{lr as default};
