import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{S as t}from"./separator-Bu_6NAN6.js";import{c as f}from"./utils-DjqsqOe8.js";import"./index-D4lIrffr.js";import"./index-DM0xKmRF.js";import"./index-CjI3c28F.js";import"./index-DsJinFGm.js";const b={title:"PiggyUI/Components/Separator",component:t,tags:["autodocs"],argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"select"}}}},r={render:e=>{const i=e.orientation==="vertical";return a.jsxs("div",{className:f("bg-neutral-100 p-4 w-full",i?"flex items-center space-x-4 h-24":"flex flex-col space-y-2"),children:[a.jsx("span",{children:i?"Esquerda":"Cima"}),a.jsx(t,{...e}),a.jsx("span",{children:i?"Direita":"Baixo"})]})},args:{orientation:"horizontal"}},s={render:e=>a.jsxs("div",{className:"flex flex-col space-y-2 bg-neutral-100 p-4 w-full",children:[a.jsx("span",{children:"Cima"}),a.jsx(t,{...e}),a.jsx("span",{children:"Baixo"})]}),args:{orientation:"horizontal"}},n={render:e=>a.jsxs("div",{className:"flex items-center space-x-4 h-24 bg-neutral-100 p-4",children:[a.jsx("span",{children:"Esquerda"}),a.jsx(t,{...e}),a.jsx("span",{children:"Direita"})]}),args:{orientation:"vertical"}};var o,c,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => {
    const isVertical = args.orientation === "vertical";
    return <div className={cn("bg-neutral-100 p-4 w-full", isVertical ? "flex items-center space-x-4 h-24" : "flex flex-col space-y-2")}>
        <span>{isVertical ? "Esquerda" : "Cima"}</span>
        <Separator {...args} />
        <span>{isVertical ? "Direita" : "Baixo"}</span>
      </div>;
  },
  args: {
    orientation: "horizontal"
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,d,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col space-y-2 bg-neutral-100 p-4 w-full">
      <span>Cima</span>
      <Separator {...args} />
      <span>Baixo</span>
    </div>,
  args: {
    orientation: "horizontal"
  }
}`,...(m=(d=s.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var x,u,g;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-4 h-24 bg-neutral-100 p-4">
      <span>Esquerda</span>
      <Separator {...args} />
      <span>Direita</span>
    </div>,
  args: {
    orientation: "vertical"
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const D=["Default","Horizontal","Vertical"];export{r as Default,s as Horizontal,n as Vertical,D as __namedExportsOrder,b as default};
