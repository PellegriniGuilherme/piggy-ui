import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as T}from"./utils-DjqsqOe8.js";const l=({children:x,className:p,as:h="h2",size:f="lg",weight:H="bold",align:v="left"})=>{const z={xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl"}[f],b={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold",extrabold:"font-extrabold"}[H],y={left:"text-left",center:"text-center",right:"text-right"}[v];return e.jsx(h,{className:T(z,b,y,"font-sans",p),children:x})};l.__docgenInfo={description:"",methods:[],displayName:"Heading",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"ElementType"},description:"",defaultValue:{value:"'h2'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"}]},description:"",defaultValue:{value:"'lg'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'extrabold'"}]},description:"",defaultValue:{value:"'bold'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}}}};const S={title:"PiggyUI/Typography/Heading",component:l,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl"]},weight:{control:"select",options:["normal","medium","semibold","bold","extrabold"]},align:{control:"select",options:["left","center","right"]},as:{control:"select",options:["h1","h2","h3","h4","h5","h6"]}}},a={args:{children:"Título padrão",size:"lg",weight:"bold",align:"left",as:"h2"}},n={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{size:"xs",children:"Heading XS"}),e.jsx(l,{size:"sm",children:"Heading SM"}),e.jsx(l,{size:"md",children:"Heading MD"}),e.jsx(l,{size:"lg",children:"Heading LG"}),e.jsx(l,{size:"xl",children:"Heading XL"}),e.jsx(l,{size:"2xl",children:"Heading 2XL"})]})},s={args:{children:"Centralizado e Bold",align:"center",weight:"bold",size:"xl",as:"h1"}};var t,i,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'Título padrão',
    size: 'lg',
    weight: 'bold',
    align: 'left',
    as: 'h2'
  }
}`,...(r=(i=a.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};var d,o,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Heading size="xs">Heading XS</Heading>
      <Heading size="sm">Heading SM</Heading>
      <Heading size="md">Heading MD</Heading>
      <Heading size="lg">Heading LG</Heading>
      <Heading size="xl">Heading XL</Heading>
      <Heading size="2xl">Heading 2XL</Heading>
    </div>
}`,...(m=(o=n.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var c,g,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Centralizado e Bold',
    align: 'center',
    weight: 'bold',
    size: 'xl',
    as: 'h1'
  }
}`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const C=["Default","AllSizes","CenteredBold"];export{n as AllSizes,s as CenteredBold,a as Default,C as __namedExportsOrder,S as default};
