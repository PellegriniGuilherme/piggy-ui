import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{v as ne}from"./v4-CtRu48qb.js";import{r as s}from"./index-D4lIrffr.js";import{c as ie,b as le}from"./index-DnCBkV-5.js";import{u as b,a as se}from"./index-BCMVJkew.js";import{c as S,R as ce,T as de,W as ge,C as pe,b as ue,D as me,a as I,P as fe,O as _e}from"./index-mmA17i_l.js";import{c as d}from"./utils-DjqsqOe8.js";import{b as P,B as Ae}from"./button-LVZD36iI.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-BGEF5NTf.js";import"./index-Ch2pQEQW.js";import"./index-CkDMrSqW.js";import"./index-3UDGtr2f.js";const{addons:De}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:xe}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:R}=__STORYBOOK_MODULE_GLOBAL__;var ve=Object.defineProperty,Oe=(e,t)=>{for(var o in t)ve(e,o,{get:t[o],enumerable:!0})},ye="storybook/actions",he=`${ye}/action-event`,Ee={depth:10,clearOnStoryChange:!0,limit:50},w=(e,t)=>{let o=Object.getPrototypeOf(e);return!o||t(o)?o:w(o,t)},Re=e=>!!(typeof e=="object"&&e&&w(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),Te=e=>{if(Re(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let o=Object.getOwnPropertyDescriptor(t,"view"),r=o==null?void 0:o.value;return typeof r=="object"&&(r==null?void 0:r.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...o,value:Object.create(r.constructor.prototype)}),t}return e},je=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?ne():Date.now().toString(36)+Math.random().toString(36).substring(2);function _(e,t={}){let o={...Ee,...t},r=function(...n){var O,y;if(t.implicit){let h=(O="__STORYBOOK_PREVIEW__"in R?R.__STORYBOOK_PREVIEW__:void 0)==null?void 0:O.storyRenders.find(f=>f.phase==="playing"||f.phase==="rendering");if(h){let f=!((y=globalThis==null?void 0:globalThis.FEATURES)!=null&&y.disallowImplicitActionsInRenderV8),E=new xe({phase:h.phase,name:e,deprecated:f});if(f)console.warn(E);else throw E}}let i=De.getChannel(),l=je(),g=5,u=n.map(Te),p=n.length>1?u:u[0],A={id:l,count:0,data:{name:e,args:p},options:{...o,maxDepth:g+(o.depth||3),allowFunction:o.allowFunction||!1}};i.emit(he,A)};return r.isAction=!0,r.implicit=t.implicit,r}const{definePreview:pt}=__STORYBOOK_MODULE_PREVIEW_API__,{global:x}=__STORYBOOK_MODULE_GLOBAL__;var Ce={};Oe(Ce,{argsEnhancers:()=>Se,loaders:()=>Pe});var M=(e,t)=>typeof t[e]>"u"&&!(e in t),Ne=e=>{let{initialArgs:t,argTypes:o,id:r,parameters:{actions:n}}=e;if(!n||n.disable||!n.argTypesRegex||!o)return{};let i=new RegExp(n.argTypesRegex);return Object.entries(o).filter(([l])=>!!i.test(l)).reduce((l,[g,u])=>(M(g,t)&&(l[g]=_(g,{implicit:!0,id:r})),l),{})},be=e=>{let{initialArgs:t,argTypes:o,parameters:{actions:r}}=e;return r!=null&&r.disable||!o?{}:Object.entries(o).filter(([n,i])=>!!i.action).reduce((n,[i,l])=>(M(i,t)&&(n[i]=_(typeof l.action=="string"?l.action:i)),n),{})},Se=[be,Ne],T=!1,Ie=e=>{let{parameters:{actions:t}}=e;if(!(t!=null&&t.disable)&&!T&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in x&&typeof x.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let o=x.__STORYBOOK_TEST_ON_MOCK_CALL__;o((r,n)=>{let i=r.getMockName();i!=="spy"&&(!/^next\/.*::/.test(i)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(l=>i.startsWith(l)))&&_(i)(n)}),T=!0}},Pe=[Ie],L="AlertDialog",[we,ut]=ie(L,[S]),c=S(),B=e=>{const{__scopeAlertDialog:t,...o}=e,r=c(t);return a.jsx(ce,{...r,...o,modal:!0})};B.displayName=L;var Me="AlertDialogTrigger",$=s.forwardRef((e,t)=>{const{__scopeAlertDialog:o,...r}=e,n=c(o);return a.jsx(de,{...n,...r,ref:t})});$.displayName=Me;var Le="AlertDialogPortal",K=e=>{const{__scopeAlertDialog:t,...o}=e,r=c(t);return a.jsx(fe,{...r,...o})};K.displayName=Le;var Be="AlertDialogOverlay",V=s.forwardRef((e,t)=>{const{__scopeAlertDialog:o,...r}=e,n=c(o);return a.jsx(_e,{...n,...r,ref:t})});V.displayName=Be;var m="AlertDialogContent",[$e,Ke]=we(m),Ve=se("AlertDialogContent"),F=s.forwardRef((e,t)=>{const{__scopeAlertDialog:o,children:r,...n}=e,i=c(o),l=s.useRef(null),g=b(t,l),u=s.useRef(null);return a.jsx(ge,{contentName:m,titleName:Y,docsSlug:"alert-dialog",children:a.jsx($e,{scope:o,cancelRef:u,children:a.jsxs(pe,{role:"alertdialog",...i,...n,ref:g,onOpenAutoFocus:le(n.onOpenAutoFocus,p=>{var A;p.preventDefault(),(A=u.current)==null||A.focus({preventScroll:!0})}),onPointerDownOutside:p=>p.preventDefault(),onInteractOutside:p=>p.preventDefault(),children:[a.jsx(Ve,{children:r}),a.jsx(Ye,{contentRef:l})]})})})});F.displayName=m;var Y="AlertDialogTitle",k=s.forwardRef((e,t)=>{const{__scopeAlertDialog:o,...r}=e,n=c(o);return a.jsx(ue,{...n,...r,ref:t})});k.displayName=Y;var W="AlertDialogDescription",z=s.forwardRef((e,t)=>{const{__scopeAlertDialog:o,...r}=e,n=c(o);return a.jsx(me,{...n,...r,ref:t})});z.displayName=W;var Fe="AlertDialogAction",U=s.forwardRef((e,t)=>{const{__scopeAlertDialog:o,...r}=e,n=c(o);return a.jsx(I,{...n,...r,ref:t})});U.displayName=Fe;var G="AlertDialogCancel",H=s.forwardRef((e,t)=>{const{__scopeAlertDialog:o,...r}=e,{cancelRef:n}=Ke(G,o),i=c(o),l=b(t,n);return a.jsx(I,{...i,...r,ref:l})});H.displayName=G;var Ye=({contentRef:e})=>{const t=`\`${m}\` requires a description for the component to be accessible for screen reader users.

You can add a description to the \`${m}\` by passing a \`${W}\` component as a child, which also benefits sighted users by adding visible context to the dialog.

Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${m}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.

For more information, see https://radix-ui.com/primitives/docs/components/alert-dialog`;return s.useEffect(()=>{var r;document.getElementById((r=e.current)==null?void 0:r.getAttribute("aria-describedby"))||console.warn(t)},[t,e]),null},ke=B,We=$,ze=K,Ue=V,Ge=F,He=U,qe=H,Je=k,Qe=z;function v({...e}){return a.jsx(ke,{"data-slot":"alert-dialog",...e})}function q({...e}){return a.jsx(We,{"data-slot":"alert-dialog-trigger",...e})}function J({...e}){return a.jsx(ze,{"data-slot":"alert-dialog-portal",...e})}function Q({className:e,...t}){return a.jsx(Ue,{"data-slot":"alert-dialog-overlay",className:d("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...t})}function X({className:e,...t}){return a.jsxs(J,{children:[a.jsx(Q,{}),a.jsx(Ge,{"data-slot":"alert-dialog-content",className:d("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",e),...t})]})}function Z({className:e,...t}){return a.jsx("div",{"data-slot":"alert-dialog-header",className:d("flex flex-col gap-2 text-center sm:text-left",e),...t})}function ee({className:e,...t}){return a.jsx("div",{"data-slot":"alert-dialog-footer",className:d("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",e),...t})}function te({className:e,...t}){return a.jsx(Je,{"data-slot":"alert-dialog-title",className:d("text-lg font-semibold",e),...t})}function oe({className:e,...t}){return a.jsx(Qe,{"data-slot":"alert-dialog-description",className:d("text-muted-foreground text-sm",e),...t})}function re({className:e,...t}){return a.jsx(He,{className:d(P(),e),...t})}function ae({className:e,...t}){return a.jsx(qe,{className:d(P({variant:"outline"}),e),...t})}v.__docgenInfo={description:"",methods:[],displayName:"AlertDialog"};J.__docgenInfo={description:"",methods:[],displayName:"AlertDialogPortal"};Q.__docgenInfo={description:"",methods:[],displayName:"AlertDialogOverlay"};q.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger"};X.__docgenInfo={description:"",methods:[],displayName:"AlertDialogContent"};Z.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"};ee.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"};te.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTitle"};oe.__docgenInfo={description:"",methods:[],displayName:"AlertDialogDescription"};re.__docgenInfo={description:"",methods:[],displayName:"AlertDialogAction"};ae.__docgenInfo={description:"",methods:[],displayName:"AlertDialogCancel"};const mt={title:"PiggyUI/Components/AlertDialog",component:v,tags:["autodocs"],argTypes:{}},D={render:()=>a.jsxs(v,{children:[a.jsx(q,{asChild:!0,children:a.jsx(Ae,{children:"Deletar conta"})}),a.jsxs(X,{children:[a.jsxs(Z,{children:[a.jsx(te,{children:"Você tem certeza absoluta?"}),a.jsx(oe,{children:"Essa ação não pode ser desfeita. Isso excluirá sua conta permanentemente."})]}),a.jsxs(ee,{children:[a.jsx(ae,{onClick:_("cancelled"),children:"Cancelar"}),a.jsx(re,{onClick:_("confirmed"),children:"Confirmar"})]})]})]})};var j,C,N;D.parameters={...D.parameters,docs:{...(j=D.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>Deletar conta</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. Isso excluirá sua conta permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={action("cancelled")}>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={action("confirmed")}>Confirmar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
}`,...(N=(C=D.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const ft=["Default"];export{D as Default,ft as __namedExportsOrder,mt as default};
