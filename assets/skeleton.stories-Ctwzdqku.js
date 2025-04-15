import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as h}from"./utils-DjqsqOe8.js";function a({className:e,...x}){return s.jsx("div",{"data-slot":"skeleton",className:h("bg-neutral-400 animate-pulse rounded-md",e),...x})}a.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};const f={title:"PiggyUI/Components/Skeleton",component:a,tags:["autodocs"],argTypes:{className:{control:"text"},style:{control:"object"}}},r={render:e=>s.jsx("div",{className:h("bg-neutral-50 p-4","w-full"),children:s.jsx(a,{...e})}),args:{className:"w-full h-4"}},n={render:e=>s.jsx("div",{className:"bg-neutral-50 p-4",children:s.jsx(a,{...e})}),args:{className:"w-1/2 h-8"}},t={render:e=>s.jsx("div",{className:"bg-neutral-100 p-4",children:s.jsx(a,{...e})}),args:{className:"mb-2",style:{width:"200px",height:"16px"}}};var o,l,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div className={cn("bg-neutral-50 p-4", "w-full")}>
      <Skeleton {...args} />
    </div>,
  args: {
    className: "w-full h-4"
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var m,d,i;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <div className="bg-neutral-50 p-4">
      <Skeleton {...args} />
    </div>,
  args: {
    className: "w-1/2 h-8"
  }
}`,...(i=(d=n.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div className="bg-neutral-100 p-4">
      <Skeleton {...args} />
    </div>,
  args: {
    className: "mb-2",
    style: {
      width: "200px",
      height: "16px"
    }
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const b=["Default","CustomSize","WithCustomStyle"];export{n as CustomSize,r as Default,t as WithCustomStyle,b as __namedExportsOrder,f as default};
