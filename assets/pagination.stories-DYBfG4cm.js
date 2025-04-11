import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as o}from"./utils-DjqsqOe8.js";import{b as f}from"./button-LVZD36iI.js";import{C as j,a as h}from"./chevron-right-BQQNYrIl.js";import{c as I}from"./createLucideIcon-DWdTuAPo.js";import"./index-CkDMrSqW.js";import"./index-D4lIrffr.js";import"./index-3UDGtr2f.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],y=I("ellipsis",N);function r({className:i,...a}){return n.jsx("nav",{role:"navigation","aria-label":"pagination","data-slot":"pagination",className:o("mx-auto flex w-full justify-center font-sans",i),...a})}function g({className:i,...a}){return n.jsx("ul",{"data-slot":"pagination-content",className:o("flex flex-row items-center gap-1",i),...a})}function e(i){return n.jsx("li",{"data-slot":"pagination-item",...i})}function t({className:i,isActive:a,size:x="icon",...P}){return n.jsx("a",{"aria-current":a?"page":void 0,"data-slot":"pagination-link","data-active":a,className:o(f({variant:a?"outline":"ghost",size:x}),"transition-colors duration-200",i),...P})}function m({className:i,...a}){return n.jsxs(t,{"aria-label":"Go to previous page",size:"default",className:o("gap-1 px-2.5 sm:pl-2.5 text-foreground",i),...a,children:[n.jsx(j,{className:"size-4"}),n.jsx("span",{className:"sr-only",children:"Previous"})]})}function p({className:i,...a}){return n.jsxs(t,{"aria-label":"Go to next page",size:"default",className:o("gap-1 px-2.5 sm:pr-2.5 text-foreground",i),...a,children:[n.jsx("span",{className:"sr-only",children:"Next"}),n.jsx(h,{className:"size-4"})]})}function u({className:i,...a}){return n.jsxs("span",{"aria-hidden":!0,"data-slot":"pagination-ellipsis",className:o("flex size-9 items-center justify-center rounded-md text-muted-foreground",i),...a,children:[n.jsx(y,{className:"size-4"}),n.jsx("span",{className:"sr-only",children:"More pages"})]})}r.__docgenInfo={description:"",methods:[],displayName:"Pagination"};g.__docgenInfo={description:"",methods:[],displayName:"PaginationContent"};t.__docgenInfo={description:"",methods:[],displayName:"PaginationLink",props:{isActive:{required:!1,tsType:{name:"boolean"},description:""},size:{defaultValue:{value:'"icon"',computed:!1},required:!1}}};e.__docgenInfo={description:"",methods:[],displayName:"PaginationItem"};m.__docgenInfo={description:"",methods:[],displayName:"PaginationPrevious"};p.__docgenInfo={description:"",methods:[],displayName:"PaginationNext"};u.__docgenInfo={description:"",methods:[],displayName:"PaginationEllipsis"};const w={title:"PiggyUI/Components/Pagination",component:r,tags:["autodocs"]},s={render:()=>n.jsx(r,{children:n.jsxs(g,{children:[n.jsx(e,{children:n.jsx(m,{})}),n.jsx(e,{children:n.jsx(t,{children:"1"})}),n.jsx(e,{children:n.jsx(t,{isActive:!0,children:"2"})}),n.jsx(e,{children:n.jsx(t,{children:"3"})}),n.jsx(e,{children:n.jsx(u,{})}),n.jsx(e,{children:n.jsx(t,{children:"10"})}),n.jsx(e,{children:n.jsx(p,{})})]})})};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink>3</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink>10</PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const q=["Default"];export{s as Default,q as __namedExportsOrder,w as default};
