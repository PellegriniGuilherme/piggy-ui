import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-D4lIrffr.js";import{c as he,P as me,D as xe,a as ge,u as ve,b as w}from"./index-DnCBkV-5.js";import{a as Ce,u as ne,P as ye}from"./index-BCMVJkew.js";import{c as re,a as be,C as je,R as Pe,A as we}from"./index-BXU8Rt5p.js";import{P as ie}from"./index-Ch2pQEQW.js";import{R as Ee}from"./index-C5Bd-cNa.js";import{c as Re}from"./utils-DjqsqOe8.js";import{B as P}from"./button-LVZD36iI.js";import{c as _e}from"./createLucideIcon-DWdTuAPo.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-CkDMrSqW.js";import"./index-3UDGtr2f.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Oe=_e("info",De);var[N,ut]=he("Tooltip",[re]),B=re(),se="TooltipProvider",Ie=700,H="tooltip.open",[ke,V]=N(se),ae=e=>{const{__scopeTooltip:o,delayDuration:t=Ie,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:l}=e,c=s.useRef(!0),T=s.useRef(!1),a=s.useRef(0);return s.useEffect(()=>{const u=a.current;return()=>window.clearTimeout(u)},[]),n.jsx(ke,{scope:o,isOpenDelayedRef:c,delayDuration:t,onOpen:s.useCallback(()=>{window.clearTimeout(a.current),c.current=!1},[]),onClose:s.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(()=>c.current=!0,r)},[r]),isPointerInTransitRef:T,onPointerInTransitChange:s.useCallback(u=>{T.current=u},[]),disableHoverableContent:i,children:l})};ae.displayName=se;var M="Tooltip",[Ae,O]=N(M),le=e=>{const{__scopeTooltip:o,children:t,open:r,defaultOpen:i=!1,onOpenChange:l,disableHoverableContent:c,delayDuration:T}=e,a=V(M,e.__scopeTooltip),u=B(o),[d,f]=s.useState(null),m=ge(),p=s.useRef(0),h=c??a.disableHoverableContent,g=T??a.delayDuration,x=s.useRef(!1),[y=!1,v]=ve({prop:r,defaultProp:i,onChange:W=>{W?(a.onOpen(),document.dispatchEvent(new CustomEvent(H))):a.onClose(),l==null||l(W)}}),R=s.useMemo(()=>y?x.current?"delayed-open":"instant-open":"closed",[y]),_=s.useCallback(()=>{window.clearTimeout(p.current),p.current=0,x.current=!1,v(!0)},[v]),D=s.useCallback(()=>{window.clearTimeout(p.current),p.current=0,v(!1)},[v]),F=s.useCallback(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(()=>{x.current=!0,v(!0),p.current=0},g)},[g,v]);return s.useEffect(()=>()=>{p.current&&(window.clearTimeout(p.current),p.current=0)},[]),n.jsx(Pe,{...u,children:n.jsx(Ae,{scope:o,contentId:m,open:y,stateAttribute:R,trigger:d,onTriggerChange:f,onTriggerEnter:s.useCallback(()=>{a.isOpenDelayedRef.current?F():_()},[a.isOpenDelayedRef,F,_]),onTriggerLeave:s.useCallback(()=>{h?D():(window.clearTimeout(p.current),p.current=0)},[D,h]),onOpen:_,onClose:D,disableHoverableContent:h,children:t})})};le.displayName=M;var G="TooltipTrigger",ce=s.forwardRef((e,o)=>{const{__scopeTooltip:t,...r}=e,i=O(G,t),l=V(G,t),c=B(t),T=s.useRef(null),a=ne(o,T,i.onTriggerChange),u=s.useRef(!1),d=s.useRef(!1),f=s.useCallback(()=>u.current=!1,[]);return s.useEffect(()=>()=>document.removeEventListener("pointerup",f),[f]),n.jsx(we,{asChild:!0,...c,children:n.jsx(ye.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:a,onPointerMove:w(e.onPointerMove,m=>{m.pointerType!=="touch"&&!d.current&&!l.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:w(e.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:w(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",f,{once:!0})}),onFocus:w(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:w(e.onBlur,i.onClose),onClick:w(e.onClick,i.onClose)})})});ce.displayName=G;var z="TooltipPortal",[Le,Ne]=N(z,{forceMount:void 0}),de=e=>{const{__scopeTooltip:o,forceMount:t,children:r,container:i}=e,l=O(z,o);return n.jsx(Le,{scope:o,forceMount:t,children:n.jsx(ie,{present:t||l.open,children:n.jsx(me,{asChild:!0,container:i,children:r})})})};de.displayName=z;var E="TooltipContent",pe=s.forwardRef((e,o)=>{const t=Ne(E,e.__scopeTooltip),{forceMount:r=t.forceMount,side:i="top",...l}=e,c=O(E,e.__scopeTooltip);return n.jsx(ie,{present:r||c.open,children:c.disableHoverableContent?n.jsx(ue,{side:i,...l,ref:o}):n.jsx(Be,{side:i,...l,ref:o})})}),Be=s.forwardRef((e,o)=>{const t=O(E,e.__scopeTooltip),r=V(E,e.__scopeTooltip),i=s.useRef(null),l=ne(o,i),[c,T]=s.useState(null),{trigger:a,onClose:u}=t,d=i.current,{onPointerInTransitChange:f}=r,m=s.useCallback(()=>{T(null),f(!1)},[f]),p=s.useCallback((h,g)=>{const x=h.currentTarget,y={x:h.clientX,y:h.clientY},v=Ge(y,x.getBoundingClientRect()),R=Ve(y,v),_=ze(g.getBoundingClientRect()),D=We([...R,..._]);T(D),f(!0)},[f]);return s.useEffect(()=>()=>m(),[m]),s.useEffect(()=>{if(a&&d){const h=x=>p(x,d),g=x=>p(x,a);return a.addEventListener("pointerleave",h),d.addEventListener("pointerleave",g),()=>{a.removeEventListener("pointerleave",h),d.removeEventListener("pointerleave",g)}}},[a,d,p,m]),s.useEffect(()=>{if(c){const h=g=>{const x=g.target,y={x:g.clientX,y:g.clientY},v=(a==null?void 0:a.contains(x))||(d==null?void 0:d.contains(x)),R=!Fe(y,c);v?m():R&&(m(),u())};return document.addEventListener("pointermove",h),()=>document.removeEventListener("pointermove",h)}},[a,d,c,u,m]),n.jsx(ue,{...e,ref:l})}),[Me,Se]=N(M,{isInside:!1}),He=Ce("TooltipContent"),ue=s.forwardRef((e,o)=>{const{__scopeTooltip:t,children:r,"aria-label":i,onEscapeKeyDown:l,onPointerDownOutside:c,...T}=e,a=O(E,t),u=B(t),{onClose:d}=a;return s.useEffect(()=>(document.addEventListener(H,d),()=>document.removeEventListener(H,d)),[d]),s.useEffect(()=>{if(a.trigger){const f=m=>{const p=m.target;p!=null&&p.contains(a.trigger)&&d()};return window.addEventListener("scroll",f,{capture:!0}),()=>window.removeEventListener("scroll",f,{capture:!0})}},[a.trigger,d]),n.jsx(xe,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:f=>f.preventDefault(),onDismiss:d,children:n.jsxs(je,{"data-state":a.stateAttribute,...u,...T,ref:o,style:{...T.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[n.jsx(He,{children:r}),n.jsx(Me,{scope:t,isInside:!0,children:n.jsx(Ee,{id:a.contentId,role:"tooltip",children:i||r})})]})})});pe.displayName=E;var fe="TooltipArrow",Te=s.forwardRef((e,o)=>{const{__scopeTooltip:t,...r}=e,i=B(t);return Se(fe,t).isInside?null:n.jsx(be,{...i,...r,ref:o})});Te.displayName=fe;function Ge(e,o){const t=Math.abs(o.top-e.y),r=Math.abs(o.bottom-e.y),i=Math.abs(o.right-e.x),l=Math.abs(o.left-e.x);switch(Math.min(t,r,i,l)){case l:return"left";case i:return"right";case t:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function Ve(e,o,t=5){const r=[];switch(o){case"top":r.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":r.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":r.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":r.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return r}function ze(e){const{top:o,right:t,bottom:r,left:i}=e;return[{x:i,y:o},{x:t,y:o},{x:t,y:r},{x:i,y:r}]}function Fe(e,o){const{x:t,y:r}=e;let i=!1;for(let l=0,c=o.length-1;l<o.length;c=l++){const T=o[l].x,a=o[l].y,u=o[c].x,d=o[c].y;a>r!=d>r&&t<(u-T)*(r-a)/(d-a)+T&&(i=!i)}return i}function We(e){const o=e.slice();return o.sort((t,r)=>t.x<r.x?-1:t.x>r.x?1:t.y<r.y?-1:t.y>r.y?1:0),$e(o)}function $e(e){if(e.length<=1)return e.slice();const o=[];for(let r=0;r<e.length;r++){const i=e[r];for(;o.length>=2;){const l=o[o.length-1],c=o[o.length-2];if((l.x-c.x)*(i.y-c.y)>=(l.y-c.y)*(i.x-c.x))o.pop();else break}o.push(i)}o.pop();const t=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;t.length>=2;){const l=t[t.length-1],c=t[t.length-2];if((l.x-c.x)*(i.y-c.y)>=(l.y-c.y)*(i.x-c.x))t.pop();else break}t.push(i)}return t.pop(),o.length===1&&t.length===1&&o[0].x===t[0].x&&o[0].y===t[0].y?o:o.concat(t)}var qe=ae,Ue=le,Ye=ce,Xe=de,Ke=pe,Je=Te;function S({delayDuration:e=0,...o}){return n.jsx(qe,{"data-slot":"tooltip-provider",delayDuration:e,...o})}function b({...e}){return n.jsx(S,{children:n.jsx(Ue,{"data-slot":"tooltip",...e})})}function j({...e}){return n.jsx(Ye,{"data-slot":"tooltip-trigger",...e})}function C({className:e,sideOffset:o=0,children:t,...r}){return n.jsx(Xe,{children:n.jsxs(Ke,{"data-slot":"tooltip-content",sideOffset:o,className:Re("z-50 w-fit rounded-md px-3 py-1.5 text-xs text-balance shadow-xs","bg-neutral-900 text-neutral-50","dark:bg-neutral-100 dark:text-neutral-900","animate-in fade-in-0 zoom-in-95","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95","data-[side=bottom]:slide-in-from-top-2","data-[side=left]:slide-in-from-right-2","data-[side=right]:slide-in-from-left-2","data-[side=top]:slide-in-from-bottom-2","origin-[--radix-tooltip-content-transform-origin]",e),...r,children:[t,n.jsx(Je,{className:"bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]"})]})})}b.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};j.__docgenInfo={description:"",methods:[],displayName:"TooltipTrigger"};C.__docgenInfo={description:"",methods:[],displayName:"TooltipContent",props:{sideOffset:{defaultValue:{value:"0",computed:!1},required:!1}}};S.__docgenInfo={description:"",methods:[],displayName:"TooltipProvider",props:{delayDuration:{defaultValue:{value:"0",computed:!1},required:!1}}};const ft={title:"PiggyUI/Components/Tooltip",component:C,tags:["autodocs"],argTypes:{side:{control:"select",options:["top","right","bottom","left"],description:"Position of the tooltip relative to the trigger",defaultValue:"top"},sideOffset:{control:"number",description:"Offset between trigger and tooltip",defaultValue:0},content:{control:"text",description:"Tooltip content",defaultValue:"Tooltip content"}}},I={args:{side:"top",sideOffset:0,content:"Tooltip content"},render:({side:e,sideOffset:o,content:t})=>n.jsx(S,{children:n.jsxs(b,{children:[n.jsx(j,{asChild:!0,children:n.jsx(P,{variant:"outline",children:"Hover me"})}),n.jsx(C,{side:e,sideOffset:o,children:t})]})})},k={render:()=>n.jsxs(b,{children:[n.jsx(j,{asChild:!0,children:n.jsx(P,{variant:"ghost",children:n.jsx(Oe,{className:"size-4"})})}),n.jsx(C,{children:"This is extra info"})]})},A={render:()=>n.jsx(S,{delayDuration:500,children:n.jsxs(b,{children:[n.jsx(j,{asChild:!0,children:n.jsx(P,{variant:"ghost",children:"Delayed tooltip"})}),n.jsx(C,{children:"Appears after 500ms"})]})})},L={render:()=>n.jsxs("div",{className:"grid grid-cols-2 gap-8 place-items-center py-10",children:[n.jsxs(b,{children:[n.jsx(j,{asChild:!0,children:n.jsx(P,{variant:"outline",children:"Top"})}),n.jsx(C,{side:"top",children:"Tooltip on top"})]}),n.jsxs(b,{children:[n.jsx(j,{asChild:!0,children:n.jsx(P,{variant:"outline",children:"Right"})}),n.jsx(C,{side:"right",children:"Tooltip on right"})]}),n.jsxs(b,{children:[n.jsx(j,{asChild:!0,children:n.jsx(P,{variant:"outline",children:"Bottom"})}),n.jsx(C,{side:"bottom",children:"Tooltip on bottom"})]}),n.jsxs(b,{children:[n.jsx(j,{asChild:!0,children:n.jsx(P,{variant:"outline",children:"Left"})}),n.jsx(C,{side:"left",children:"Tooltip on left"})]})]})};var $,q,U;I.parameters={...I.parameters,docs:{...($=I.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    side: "top",
    sideOffset: 0,
    content: "Tooltip content"
  },
  render: ({
    side,
    sideOffset,
    content
  }) => <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent side={side} sideOffset={sideOffset}>
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(U=(q=I.parameters)==null?void 0:q.docs)==null?void 0:U.source}}};var Y,X,K;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost">
          <InfoIcon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>This is extra info</TooltipContent>
    </Tooltip>
}`,...(K=(X=k.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var J,Q,Z;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <TooltipProvider delayDuration={500}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">Delayed tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>Appears after 500ms</TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(Z=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,oe;L.parameters={...L.parameters,docs:{...(ee=L.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-8 place-items-center py-10">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">Tooltip on top</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">Tooltip on right</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">Tooltip on left</TooltipContent>
      </Tooltip>
    </div>
}`,...(oe=(te=L.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const Tt=["Default","WithIcon","WithDelay","Positions"];export{I as Default,L as Positions,A as WithDelay,k as WithIcon,Tt as __namedExportsOrder,ft as default};
