import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as y,T as b,C as j,a as N,b as v,D as _,P as C,O as I}from"./index-aqJuTA-1.js";import{c as a}from"./utils-DjqsqOe8.js";import{X as w}from"./x-JxfTfcwW.js";import{B as r}from"./button-LVZD36iI.js";import{L as T}from"./label-BdIazeAU.js";import{I as F}from"./input-wyKKcooF.js";import"./index-D4lIrffr.js";import"./index-Ba_7kIc8.js";import"./index-BYRCaeiI.js";import"./index-BJ-cGVAi.js";import"./index-DsJinFGm.js";import"./index-DHD_Op9N.js";import"./index--T1M_3rJ.js";import"./createLucideIcon-DWdTuAPo.js";import"./index-CkDMrSqW.js";import"./index-3UDGtr2f.js";import"./index-BjQ-p7lo.js";function i(o){return e.jsx(y,{"data-slot":"dialog",...o})}function c(o){return e.jsx(b,{"data-slot":"dialog-trigger",...o})}function m(o){return e.jsx(C,{"data-slot":"dialog-portal",...o})}function g({className:o,...t}){return e.jsx(I,{"data-slot":"dialog-overlay",className:a("fixed inset-0 z-50 bg-neutral-900/60 backdrop-blur-sm","data-[state=open]:animate-in data-[state=closed]:animate-out","data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",o),...t})}function p({className:o,children:t,...D}){return e.jsxs(m,{children:[e.jsx(g,{}),e.jsxs(j,{"data-slot":"dialog-content",className:a("fixed left-1/2 top-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] sm:max-w-lg","translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 p-6 shadow-xl","bg-popover text-popover-foreground rounded-xl font-sans","data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95","data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",o),...D,children:[t,e.jsxs(N,{className:a("absolute right-4 top-4 rounded-sm opacity-70 transition-opacity cursor-pointer","hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring","text-muted-foreground","[&_svg]:size-4 [&_svg]:shrink-0"),children:[e.jsx(w,{}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function u({className:o,...t}){return e.jsx("div",{"data-slot":"dialog-header",className:a("flex flex-col gap-2 text-center sm:text-left",o),...t})}function f({className:o,...t}){return e.jsx("div",{"data-slot":"dialog-footer",className:a("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",o),...t})}function x({className:o,...t}){return e.jsx(v,{"data-slot":"dialog-title",className:a("text-lg font-semibold text-brand-400 leading-none",o),...t})}function h({className:o,...t}){return e.jsx(_,{"data-slot":"dialog-description",className:a("text-sm text-muted-foreground",o),...t})}i.__docgenInfo={description:"",methods:[],displayName:"Dialog"};c.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger"};m.__docgenInfo={description:"",methods:[],displayName:"DialogPortal"};g.__docgenInfo={description:"",methods:[],displayName:"DialogOverlay"};p.__docgenInfo={description:"",methods:[],displayName:"DialogContent"};u.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};f.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};x.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};h.__docgenInfo={description:"",methods:[],displayName:"DialogDescription"};const Q={title:"PiggyUI/Components/Dialog",component:i,tags:["autodocs"]},n={render:()=>e.jsxs(i,{children:[e.jsx(c,{asChild:!0,children:e.jsx(r,{variant:"outline",children:"Open Form"})}),e.jsxs(p,{children:[e.jsxs(u,{children:[e.jsx(x,{children:"New Category"}),e.jsx(h,{children:"Fill in the fields below to create a new category."})]}),e.jsx("form",{className:"flex flex-col gap-4 py-4",children:e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(T,{htmlFor:"name",className:"text-sm font-medium text-foreground",children:"Name"}),e.jsx(F,{id:"name",type:"text",placeholder:"Enter category name",className:"rounded-md border border-neutral-300 bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500"})]})}),e.jsxs(f,{children:[e.jsx(r,{variant:"ghost",type:"button",children:"Cancel"}),e.jsx(r,{type:"submit",children:"Save"})]})]})]})};var s,l,d;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Form</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Category</DialogTitle>
          <DialogDescription>
            Fill in the fields below to create a new category.
          </DialogDescription>
        </DialogHeader>

        <form className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">
              Name
            </Label>
            <Input id="name" type="text" placeholder="Enter category name" className="rounded-md border border-neutral-300 bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-brand-500" />
          </div>
        </form>

        <DialogFooter>
          <Button variant="ghost" type="button">
            Cancel
          </Button>
          <Button type="submit">
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(d=(l=n.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const V=["Default"];export{n as Default,V as __namedExportsOrder,Q as default};
