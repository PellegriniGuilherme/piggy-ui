import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{C as o}from"./calendar-BejA60ch.js";import{r as c}from"./index-D4lIrffr.js";import"./utils-DjqsqOe8.js";import"./button-LVZD36iI.js";import"./index-CkDMrSqW.js";import"./index-3UDGtr2f.js";import"./chevron-right-BQQNYrIl.js";import"./createLucideIcon-DWdTuAPo.js";const h={title:"PiggyUI/Components/Calendar",component:o,tags:["autodocs"],argTypes:{mode:{control:"select",options:["single","multiple","range"]},selected:{control:!1},onSelect:{action:"onSelect"}}},M=({mode:t,...l})=>{const[S,x]=c.useState(new Date),[j,C]=c.useState([new Date,new Date(new Date().setDate(new Date().getDate()-1))]),[R,E]=c.useState({from:new Date(new Date().setDate(new Date().getDate()-3)),to:new Date});return t==="range"?s.jsx(o,{...l,mode:"range",selected:R,onSelect:e=>{E(e)}}):t==="multiple"?s.jsx(o,{...l,mode:"multiple",selected:j,onSelect:e=>{C(e)}}):s.jsx(o,{...l,mode:"single",selected:S,onSelect:e=>{x(e)}})},a={render:t=>s.jsx(M,{...t}),args:{mode:"single"}},n={args:{mode:"range",selected:{from:new Date(new Date().setDate(new Date().getDate()-3)),to:new Date}}},r={args:{mode:"multiple",selected:[new Date,new Date(new Date().setDate(new Date().getDate()-1))]}};var m,p,D;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => <CalendarWrapper {...args} />,
  args: {
    mode: "single"
  }
}`,...(D=(p=a.parameters)==null?void 0:p.docs)==null?void 0:D.source}}};var i,d,g;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    mode: "range",
    selected: {
      from: new Date(new Date().setDate(new Date().getDate() - 3)),
      to: new Date()
    }
  }
}`,...(g=(d=n.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,w,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    mode: "multiple",
    selected: [new Date(), new Date(new Date().setDate(new Date().getDate() - 1))]
  }
}`,...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const k=["Default","Range","Multiple"];export{a as Default,r as Multiple,n as Range,k as __namedExportsOrder,h as default};
