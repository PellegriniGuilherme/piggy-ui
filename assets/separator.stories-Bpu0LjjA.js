import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as V}from"./index-D4lIrffr.js";import{P as y}from"./index-BCMVJkew.js";import{c as N}from"./utils-DjqsqOe8.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";var b="Separator",p="horizontal",O=["horizontal","vertical"],z=V.forwardRef((r,e)=>{const{decorative:l,orientation:n=p,...S}=r,c=w(n)?n:p,E=l?{role:"none"}:{"aria-orientation":c==="vertical"?c:void 0,role:"separator"};return a.jsx(y.div,{"data-orientation":c,...E,...S,ref:e})});z.displayName=b;function w(r){return O.includes(r)}var D=z;function t({className:r,orientation:e="horizontal",decorative:l=!0,...n}){return a.jsx(D,{"data-slot":"separator-root",decorative:l,orientation:e,className:N("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",r),...n})}t.__docgenInfo={description:"",methods:[],displayName:"Separator",props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}};const A={title:"PiggyUI/Components/Separator",component:t,tags:["autodocs"],argTypes:{orientation:{options:["horizontal","vertical"],control:{type:"select"}}}},o={render:r=>{const e=r.orientation==="vertical";return a.jsxs("div",{className:N("bg-neutral-100 p-4 w-full",e?"flex items-center space-x-4 h-24":"flex flex-col space-y-2"),children:[a.jsx("span",{children:e?"Esquerda":"Cima"}),a.jsx(t,{...r}),a.jsx("span",{children:e?"Direita":"Baixo"})]})},args:{orientation:"horizontal"}},i={render:r=>a.jsxs("div",{className:"flex flex-col space-y-2 bg-neutral-100 p-4 w-full",children:[a.jsx("span",{children:"Cima"}),a.jsx(t,{...r}),a.jsx("span",{children:"Baixo"})]}),args:{orientation:"horizontal"}},s={render:r=>a.jsxs("div",{className:"flex items-center space-x-4 h-24 bg-neutral-100 p-4",children:[a.jsx("span",{children:"Esquerda"}),a.jsx(t,{...r}),a.jsx("span",{children:"Direita"})]}),args:{orientation:"vertical"}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,f,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col space-y-2 bg-neutral-100 p-4 w-full">
      <span>Cima</span>
      <Separator {...args} />
      <span>Baixo</span>
    </div>,
  args: {
    orientation: "horizontal"
  }
}`,...(v=(f=i.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var h,g,j;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <div className="flex items-center space-x-4 h-24 bg-neutral-100 p-4">
      <span>Esquerda</span>
      <Separator {...args} />
      <span>Direita</span>
    </div>,
  args: {
    orientation: "vertical"
  }
}`,...(j=(g=s.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};const B=["Default","Horizontal","Vertical"];export{o as Default,i as Horizontal,s as Vertical,B as __namedExportsOrder,A as default};
