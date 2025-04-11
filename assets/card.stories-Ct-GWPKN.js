import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as n}from"./utils-DjqsqOe8.js";import{B as y}from"./button-LVZD36iI.js";import"./index-CkDMrSqW.js";import"./index-D4lIrffr.js";import"./index-3UDGtr2f.js";function a({className:r,...t}){return e.jsx("div",{"data-slot":"card",className:n("flex flex-col gap-6 rounded-[var(--radius-xl)] border border-color-border bg-color-card text-color-cardforeground] py-6 shadow-sm font-sans",r),...t})}function i({className:r,...t}){return e.jsx("div",{"data-slot":"card-header",className:n("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",r),...t})}function c({className:r,...t}){return e.jsx("div",{"data-slot":"card-title",className:n("font-semibold text-brand-400 leading-none",r),...t})}function l({className:r,...t}){return e.jsx("div",{"data-slot":"card-description",className:n("text-sm text-color-mutedforeground]",r),...t})}function N({className:r,...t}){return e.jsx("div",{"data-slot":"card-action",className:n("col-start-2 row-span-2 row-start-1 self-start justify-self-end",r),...t})}function m({className:r,...t}){return e.jsx("div",{"data-slot":"card-content",className:n("px-6 text-color-foreground",r),...t})}function _({className:r,...t}){return e.jsx("div",{"data-slot":"card-footer",className:n("flex items-center px-6 text-neutral-600 [.border-t]:pt-6",r),...t})}a.__docgenInfo={description:"",methods:[],displayName:"Card"};i.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};_.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};c.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};N.__docgenInfo={description:"",methods:[],displayName:"CardAction"};l.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};m.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const I={title:"PiggyUI/Components/Card",component:a,tags:["autodocs"]},s={render:()=>e.jsxs(a,{children:[e.jsxs(i,{children:[e.jsx(c,{children:"Card Title"}),e.jsx(l,{children:"This is a description."}),e.jsx(N,{children:e.jsx(y,{variant:"outline",size:"sm",children:"Action"})})]}),e.jsx(m,{children:e.jsx("p",{className:"text-sm text-[--neutral-700]",children:"This is the content of the card. You can add anything here."})}),e.jsx(_,{children:e.jsx("p",{className:"text-xs",children:"Footer text"})})]})},d={render:()=>e.jsxs(a,{className:"max-w-md",children:[e.jsxs(i,{children:[e.jsx(c,{children:"Long Content"}),e.jsx(l,{children:"With longer content inside the card."})]}),e.jsx(m,{children:e.jsx("p",{className:"text-sm text-neutral-700",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis."})})]})},o={render:()=>e.jsxs(a,{className:"bg-brand-50 text-brand-800 border-brand-200",children:[e.jsxs(i,{children:[e.jsx(c,{children:"Branded Card"}),e.jsx(l,{children:"Using brand variables manually"})]}),e.jsx(m,{children:e.jsx("p",{children:"Content with a light brand background and darker brand text."})})]})};var p,C,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a description.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-[--neutral-700]">
          This is the content of the card. You can add anything here.
        </p>
      </CardContent>
      <CardFooter>
        <p className="text-xs">Footer text</p>
      </CardFooter>
    </Card>
}`,...(u=(C=s.parameters)==null?void 0:C.docs)==null?void 0:u.source}}};var x,h,g;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Long Content</CardTitle>
        <CardDescription>With longer content inside the card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec
          justo eget felis facilisis fermentum. Aliquam porttitor mauris sit
          amet orci. Aenean dignissim pellentesque felis.
        </p>
      </CardContent>
    </Card>
}`,...(g=(h=d.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,j,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card className="bg-brand-50 text-brand-800 border-brand-200">
      <CardHeader>
        <CardTitle>Branded Card</CardTitle>
        <CardDescription>Using brand variables manually</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content with a light brand background and darker brand text.</p>
      </CardContent>
    </Card>
}`,...(b=(j=o.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const B=["Default","WithLongContent","WithCustomColors"];export{s as Default,o as WithCustomColors,d as WithLongContent,B as __namedExportsOrder,I as default};
