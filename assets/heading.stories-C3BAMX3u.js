import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as T}from"./utils-DjqsqOe8.js";const a=({children:p,className:x,as:h="h2",size:f="lg",weight:H="bold",align:z="left"})=>{const b={xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl"}[f],v={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold",extrabold:"font-extrabold"}[H],y={left:"text-left",center:"text-center",right:"text-right"}[z];return e.jsx(h,{className:T(b,v,y,"font-sans",x),children:p})};a.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"ElementType"},description:"",defaultValue:{value:"'h2'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'extrabold'"}]},description:"",defaultValue:{value:"'bold'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}}}};const S={title:"PiggyUI/Typography/Heading",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"]},weight:{control:"select",options:["normal","medium","semibold","bold","extrabold"]},align:{control:"select",options:["left","center","right"]},as:{control:"select",options:["h1","h2","h3","h4","h5","h6"]}}},l={args:{children:"Título padrão",size:"lg",weight:"bold",align:"left",as:"h2"}},s={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{size:"xs",children:"Heading XS"}),e.jsx(a,{size:"sm",children:"Heading SM"}),e.jsx(a,{size:"md",children:"Heading MD"}),e.jsx(a,{size:"lg",children:"Heading LG"}),e.jsx(a,{size:"xl",children:"Heading XL"}),e.jsx(a,{size:"2xl",children:"Heading 2XL"})]})},n={args:{children:"Centralizado e Bold",align:"center",weight:"bold",size:"xl",as:"h1"}};var t,i,r;l.parameters={...l.parameters,docs:{...(t=l.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'Título padrão',
    size: 'lg',
    weight: 'bold',
    align: 'left',
    as: 'h2'
  }
}`,...(r=(i=l.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var d,o,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Heading size="xs">Heading XS</Heading>
      <Heading size="sm">Heading SM</Heading>
      <Heading size="md">Heading MD</Heading>
      <Heading size="lg">Heading LG</Heading>
      <Heading size="xl">Heading XL</Heading>
      <Heading size="2xl">Heading 2XL</Heading>
    </div>
}`,...(m=(o=s.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var c,g,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Centralizado e Bold',
    align: 'center',
    weight: 'bold',
    size: 'xl',
    as: 'h1'
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const C=["Default","AllSizes","CenteredBold"];export{s as AllSizes,n as CenteredBold,l as Default,C as __namedExportsOrder,S as default};
