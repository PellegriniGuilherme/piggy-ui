import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{T as t,a as v,b as e,c as i}from"./tooltip-DDStQsbX.js";import{B as n}from"./button-LVZD36iI.js";import{c as P}from"./createLucideIcon-DWdTuAPo.js";import"./index-D4lIrffr.js";import"./index-Ba_7kIc8.js";import"./index-BYRCaeiI.js";import"./index-BJ-cGVAi.js";import"./index-DsJinFGm.js";import"./index-DnMi4mJV.js";import"./index--T1M_3rJ.js";import"./index-BpcxA3rX.js";import"./utils-DjqsqOe8.js";import"./index-CkDMrSqW.js";import"./index-3UDGtr2f.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],O=P("info",D),U={title:"PiggyUI/Components/Tooltip",component:t,tags:["autodocs"],argTypes:{side:{control:"select",options:["top","right","bottom","left"],description:"Position of the tooltip relative to the trigger",defaultValue:"top"},sideOffset:{control:"number",description:"Offset between trigger and tooltip",defaultValue:0},content:{control:"text",description:"Tooltip content",defaultValue:"Tooltip content"}}},r={args:{side:"top",sideOffset:0,content:"Tooltip content"},render:({side:B,sideOffset:y,content:b})=>o.jsx(v,{children:o.jsxs(e,{children:[o.jsx(i,{asChild:!0,children:o.jsx(n,{variant:"outline",children:"Hover me"})}),o.jsx(t,{side:B,sideOffset:y,children:b})]})})},s={render:()=>o.jsxs(e,{children:[o.jsx(i,{asChild:!0,children:o.jsx(n,{variant:"ghost",children:o.jsx(O,{className:"size-4"})})}),o.jsx(t,{children:"This is extra info"})]})},l={render:()=>o.jsx(v,{delayDuration:500,children:o.jsxs(e,{children:[o.jsx(i,{asChild:!0,children:o.jsx(n,{variant:"ghost",children:"Delayed tooltip"})}),o.jsx(t,{children:"Appears after 500ms"})]})})},a={render:()=>o.jsxs("div",{className:"grid grid-cols-2 gap-8 place-items-center py-10",children:[o.jsxs(e,{children:[o.jsx(i,{asChild:!0,children:o.jsx(n,{variant:"outline",children:"Top"})}),o.jsx(t,{side:"top",children:"Tooltip on top"})]}),o.jsxs(e,{children:[o.jsx(i,{asChild:!0,children:o.jsx(n,{variant:"outline",children:"Right"})}),o.jsx(t,{side:"right",children:"Tooltip on right"})]}),o.jsxs(e,{children:[o.jsx(i,{asChild:!0,children:o.jsx(n,{variant:"outline",children:"Bottom"})}),o.jsx(t,{side:"bottom",children:"Tooltip on bottom"})]}),o.jsxs(e,{children:[o.jsx(i,{asChild:!0,children:o.jsx(n,{variant:"outline",children:"Left"})}),o.jsx(t,{side:"left",children:"Tooltip on left"})]})]})};var p,d,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var T,h,g;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost">
          <InfoIcon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>This is extra info</TooltipContent>
    </Tooltip>
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,m,f;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <TooltipProvider delayDuration={500}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="ghost">Delayed tooltip</Button>
        </TooltipTrigger>
        <TooltipContent>Appears after 500ms</TooltipContent>
      </Tooltip>
    </TooltipProvider>
}`,...(f=(m=l.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var x,j,C;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(j=a.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const q=["Default","WithIcon","WithDelay","Positions"];export{r as Default,a as Positions,l as WithDelay,s as WithIcon,q as __namedExportsOrder,U as default};
