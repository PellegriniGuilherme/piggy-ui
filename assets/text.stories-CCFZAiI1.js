import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as w}from"./utils-DjqsqOe8.js";const s=({children:x,className:g,as:f="span",size:T="md",weight:h="normal",align:v="left"})=>{const z={xs:"text-xs",sm:"text-sm",md:"text-base",lg:"text-lg"}[T],y={normal:"font-normal",medium:"font-medium",semibold:"font-semibold",bold:"font-bold"}[h],b={left:"text-left",center:"text-center",right:"text-right"}[v];return e.jsx(f,{className:w("font-sans",z,y,b,g),children:x})};s.__docgenInfo={description:"",methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"ElementType"},description:"",defaultValue:{value:"'span'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"",defaultValue:{value:"'normal'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}}}};const q={title:"PiggyUi/Typography/Text",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"]},weight:{control:"select",options:["normal","medium","semibold","bold"]},align:{control:"select",options:["left","center","right"]},as:{control:"select",options:["span","p","label","div"]}}},t={args:{children:"Texto padrão",size:"md",weight:"normal",align:"left",as:"span"}},a={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{size:"xs",children:"Texto XS"}),e.jsx(s,{size:"sm",children:"Texto SM"}),e.jsx(s,{size:"md",children:"Texto MD"}),e.jsx(s,{size:"lg",children:"Texto LG"})]})},l={args:{children:"Texto centralizado e médio",align:"center",weight:"medium",size:"md",as:"p"}};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'Texto padrão',
    size: 'md',
    weight: 'normal',
    align: 'left',
    as: 'span'
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var o,m,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Text size="xs">Texto XS</Text>
      <Text size="sm">Texto SM</Text>
      <Text size="md">Texto MD</Text>
      <Text size="lg">Texto LG</Text>
    </div>
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,u,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Texto centralizado e médio',
    align: 'center',
    weight: 'medium',
    size: 'md',
    as: 'p'
  }
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const M=["Default","AllSizes","CenteredMedium"];export{a as AllSizes,l as CenteredMedium,t as Default,M as __namedExportsOrder,q as default};
