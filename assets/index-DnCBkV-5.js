import{r as o,a as j}from"./index-D4lIrffr.js";import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{u as N,P as w,d as k}from"./index-BCMVJkew.js";import{h as U}from"./index-BQQLSK9g.js";function ce(e,t){const n=o.createContext(t),r=i=>{const{children:a,...c}=i,f=o.useMemo(()=>c,Object.values(c));return m.jsx(n.Provider,{value:f,children:a})};r.displayName=e+"Provider";function s(i){const a=o.useContext(n);if(a)return a;if(t!==void 0)return t;throw new Error(`\`${i}\` must be used within \`${e}\``)}return[r,s]}function ae(e,t=[]){let n=[];function r(i,a){const c=o.createContext(a),f=n.length;n=[...n,a];const u=E=>{var b;const{scope:v,children:y,...h}=E,p=((b=v==null?void 0:v[e])==null?void 0:b[f])||c,x=o.useMemo(()=>h,Object.values(h));return m.jsx(p.Provider,{value:x,children:y})};u.displayName=i+"Provider";function l(E,v){var p;const y=((p=v==null?void 0:v[e])==null?void 0:p[f])||c,h=o.useContext(y);if(h)return h;if(a!==void 0)return a;throw new Error(`\`${E}\` must be used within \`${i}\``)}return[u,l]}const s=()=>{const i=n.map(a=>o.createContext(a));return function(c){const f=(c==null?void 0:c[e])||i;return o.useMemo(()=>({[`__scope${e}`]:{...c,[e]:f}}),[c,f])}};return s.scopeName=e,[r,$(s,...t)]}function $(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const a=r.reduce((c,{useScope:f,scopeName:u})=>{const E=f(i)[`__scope${u}`];return{...c,...E}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function D(e,t,{checkForDefaultPrevented:n=!0}={}){return function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}var A=globalThis!=null&&globalThis.document?o.useLayoutEffect:()=>{},z=j[" useId ".trim().toString()]||(()=>{}),K=0;function ue(e){const[t,n]=o.useState(z());return A(()=>{n(r=>r??String(K++))},[e]),e||(t?`radix-${t}`:"")}function P(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function de({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,s]=X({defaultProp:t,onChange:n}),i=e!==void 0,a=i?e:r,c=P(n),f=o.useCallback(u=>{if(i){const E=typeof u=="function"?u(e):u;E!==e&&c(E)}else s(u)},[i,e,s,c]);return[a,f]}function X({defaultProp:e,onChange:t}){const n=o.useState(e),[r]=n,s=o.useRef(r),i=P(t);return o.useEffect(()=>{s.current!==r&&(i(r),s.current=r)},[r,s,i]),n}function Y(e,t=globalThis==null?void 0:globalThis.document){const n=P(e);o.useEffect(()=>{const r=s=>{s.key==="Escape"&&n(s)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var q="DismissableLayer",S="dismissableLayer.update",G="dismissableLayer.pointerDownOutside",J="dismissableLayer.focusOutside",B,I=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Q=o.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:s,onFocusOutside:i,onInteractOutside:a,onDismiss:c,...f}=e,u=o.useContext(I),[l,E]=o.useState(null),v=(l==null?void 0:l.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=o.useState({}),h=N(t,d=>E(d)),p=Array.from(u.layers),[x]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),b=p.indexOf(x),O=l?p.indexOf(l):-1,M=u.layersWithOutsidePointerEventsDisabled.size>0,R=O>=b,W=H(d=>{const C=d.target,T=[...u.branches].some(L=>L.contains(C));!R||T||(s==null||s(d),a==null||a(d),d.defaultPrevented||c==null||c())},v),g=ee(d=>{const C=d.target;[...u.branches].some(L=>L.contains(C))||(i==null||i(d),a==null||a(d),d.defaultPrevented||c==null||c())},v);return Y(d=>{O===u.layers.size-1&&(r==null||r(d),!d.defaultPrevented&&c&&(d.preventDefault(),c()))},v),o.useEffect(()=>{if(l)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(B=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(l)),u.layers.add(l),_(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=B)}},[l,v,n,u]),o.useEffect(()=>()=>{l&&(u.layers.delete(l),u.layersWithOutsidePointerEventsDisabled.delete(l),_())},[l,u]),o.useEffect(()=>{const d=()=>y({});return document.addEventListener(S,d),()=>document.removeEventListener(S,d)},[]),m.jsx(w.div,{...f,ref:h,style:{pointerEvents:M?R?"auto":"none":void 0,...e.style},onFocusCapture:D(e.onFocusCapture,g.onFocusCapture),onBlurCapture:D(e.onBlurCapture,g.onBlurCapture),onPointerDownCapture:D(e.onPointerDownCapture,W.onPointerDownCapture)})});Q.displayName=q;var Z="DismissableLayerBranch",V=o.forwardRef((e,t)=>{const n=o.useContext(I),r=o.useRef(null),s=N(t,r);return o.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),m.jsx(w.div,{...e,ref:s})});V.displayName=Z;function H(e,t=globalThis==null?void 0:globalThis.document){const n=P(e),r=o.useRef(!1),s=o.useRef(()=>{});return o.useEffect(()=>{const i=c=>{if(c.target&&!r.current){let f=function(){F(G,n,u,{discrete:!0})};const u={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",s.current),s.current=f,t.addEventListener("click",s.current,{once:!0})):f()}else t.removeEventListener("click",s.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",i),t.removeEventListener("click",s.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function ee(e,t=globalThis==null?void 0:globalThis.document){const n=P(e),r=o.useRef(!1);return o.useEffect(()=>{const s=i=>{i.target&&!r.current&&F(J,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",s),()=>t.removeEventListener("focusin",s)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function _(){const e=new CustomEvent(S);document.dispatchEvent(e)}function F(e,t,n,{discrete:r}){const s=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),r?k(s,i):s.dispatchEvent(i)}var te="Portal",ne=o.forwardRef((e,t)=>{var c;const{container:n,...r}=e,[s,i]=o.useState(!1);A(()=>i(!0),[]);const a=n||s&&((c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body);return a?U.createPortal(m.jsx(w.div,{...r,ref:t}),a):null});ne.displayName=te;export{Q as D,ne as P,ue as a,D as b,ae as c,ce as d,A as e,P as f,de as u};
