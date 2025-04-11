import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{P as r,a as m,b as c}from"./popover-CRu_DXd5.js";import{B as n}from"./button-LVZD36iI.js";import{I as v}from"./input-wyKKcooF.js";import"./index-D4lIrffr.js";import"./index-DnCBkV-5.js";import"./index-BCMVJkew.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-BGEF5NTf.js";import"./index-BXU8Rt5p.js";import"./index-Ch2pQEQW.js";import"./utils-DjqsqOe8.js";import"./index-CkDMrSqW.js";import"./index-3UDGtr2f.js";const U={title:"PiggyUI/Components/Popover",component:r,tags:["autodocs"],argTypes:{align:{control:"select",options:["start","center","end"],description:"Alignment of the popover content",defaultValue:"center"},sideOffset:{control:"number",description:"Offset between trigger and popover",defaultValue:4},content:{control:"text",description:"Text inside the popover",defaultValue:"Popover content"}}},t={args:{align:"center",sideOffset:4,content:"Popover content"},render:({align:u,sideOffset:x,content:f})=>e.jsxs(m,{children:[e.jsx(c,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Open Popover"})}),e.jsx(r,{align:u,sideOffset:x,children:e.jsx("p",{className:"text-sm text-muted-foreground",children:f})})]})},o={render:()=>e.jsxs(m,{children:[e.jsx(c,{asChild:!0,children:e.jsx(n,{variant:"outline",children:"Edit Email"})}),e.jsx(r,{className:"w-80",children:e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-foreground",children:"Email"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Update your email address."})]}),e.jsx(v,{placeholder:"example@email.com"}),e.jsx("div",{className:"flex justify-end",children:e.jsx(n,{size:"sm",children:"Save"})})]})})]})};var s,a,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    align: "center",
    sideOffset: 4,
    content: "Popover content"
  },
  render: ({
    align,
    sideOffset,
    content
  }) => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent align={align} sideOffset={sideOffset}>
        <p className="text-sm text-muted-foreground">{content}</p>
      </PopoverContent>
    </Popover>
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var d,l,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Edit Email</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-sm font-medium text-foreground">Email</h3>
            <p className="text-sm text-muted-foreground">
              Update your email address.
            </p>
          </div>
          <Input placeholder="example@email.com" />
          <div className="flex justify-end">
            <Button size="sm">Save</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const V=["Default","WithForm"];export{t as Default,o as WithForm,V as __namedExportsOrder,U as default};
