import{R as r,r as E}from"./index-D4lIrffr.js";import{c as D}from"./index-Cb6iDKu7.js";import{u as S,c as M}from"./index-C7VReAOH.js";import{j as d}from"./jsx-runtime-D_zvdyIk.js";function h(l){const i=l+"CollectionProvider",[A,N]=D(i),[v,m]=A(i,{collectionRef:{current:null},itemMap:new Map}),p=c=>{const{scope:e,children:s}=c,t=r.useRef(null),o=r.useRef(new Map).current;return d.jsx(v,{scope:e,itemMap:o,collectionRef:t,children:s})};p.displayName=i;const u=l+"CollectionSlot",T=M(u),C=r.forwardRef((c,e)=>{const{scope:s,children:t}=c,o=m(u,s),n=S(e,o.collectionRef);return d.jsx(T,{ref:n,children:t})});C.displayName=u;const f=l+"CollectionItemSlot",x="data-radix-collection-item",O=M(f),R=r.forwardRef((c,e)=>{const{scope:s,children:t,...o}=c,n=r.useRef(null),I=S(e,n),a=m(f,s);return r.useEffect(()=>(a.itemMap.set(n,{ref:n,...o}),()=>void a.itemMap.delete(n))),d.jsx(O,{[x]:"",ref:I,children:t})});R.displayName=f;function _(c){const e=m(l+"CollectionConsumer",c);return r.useCallback(()=>{const t=e.collectionRef.current;if(!t)return[];const o=Array.from(t.querySelectorAll(`[${x}]`));return Array.from(e.itemMap.values()).sort((a,y)=>o.indexOf(a.ref.current)-o.indexOf(y.ref.current))},[e.collectionRef,e.itemMap])}return[{Provider:p,Slot:C,ItemSlot:R},_,N]}var j=E.createContext(void 0);function b(l){const i=E.useContext(j);return l||i||"ltr"}export{h as c,b as u};
