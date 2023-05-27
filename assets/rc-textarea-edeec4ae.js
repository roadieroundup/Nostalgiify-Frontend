import{h as pe,e as A,c as he,f as _,g as Se,b as de,d as Q}from"./@babel-1fba878f.js";import{c as ce}from"./classnames-4ba1ba1a.js";import{B as Ne,r as oe,f as Pe}from"./rc-input-a3d3fe8f.js";import{x as xe,b as ve,j as ge}from"./rc-util-a7560201.js";import{r as v,R}from"./react-4fd50329.js";import{R as Fe}from"./rc-resize-observer-72b9b1f8.js";var Me=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`,$e=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","font-variant","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing","word-break","white-space"],ie={},h;function _e(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=e.getAttribute("id")||e.getAttribute("data-reactid")||e.getAttribute("name");if(c&&ie[t])return ie[t];var n=window.getComputedStyle(e),i=n.getPropertyValue("box-sizing")||n.getPropertyValue("-moz-box-sizing")||n.getPropertyValue("-webkit-box-sizing"),f=parseFloat(n.getPropertyValue("padding-bottom"))+parseFloat(n.getPropertyValue("padding-top")),o=parseFloat(n.getPropertyValue("border-bottom-width"))+parseFloat(n.getPropertyValue("border-top-width")),s=$e.map(function(r){return"".concat(r,":").concat(n.getPropertyValue(r))}).join(";"),y={sizingStyle:s,paddingSize:f,borderSize:o,boxSizing:i};return c&&t&&(ie[t]=y),y}function Be(e){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;h||(h=document.createElement("textarea"),h.setAttribute("tab-index","-1"),h.setAttribute("aria-hidden","true"),document.body.appendChild(h)),e.getAttribute("wrap")?h.setAttribute("wrap",e.getAttribute("wrap")):h.removeAttribute("wrap");var i=_e(e,c),f=i.paddingSize,o=i.borderSize,s=i.boxSizing,y=i.sizingStyle;h.setAttribute("style","".concat(y,";").concat(Me)),h.value=e.value||e.placeholder||"";var r=void 0,l=void 0,z,g=h.scrollHeight;if(s==="border-box"?g+=o:s==="content-box"&&(g-=f),t!==null||n!==null){h.value=" ";var I=h.scrollHeight-f;t!==null&&(r=I*t,s==="border-box"&&(r=r+f+o),g=Math.max(r,g)),n!==null&&(l=I*n,s==="border-box"&&(l=l+f+o),z=g>l?"":"hidden",g=Math.min(l,g))}var m={height:g,overflowY:z,resize:"none"};return r&&(m.minHeight=r),l&&(m.maxHeight=l),m}var je=["prefixCls","onPressEnter","defaultValue","value","autoSize","onResize","className","style","disabled","onChange","onInternalAutoSize"],se=0,le=1,ue=2,He=v.forwardRef(function(e,c){var t=e,n=t.prefixCls;t.onPressEnter;var i=t.defaultValue,f=t.value,o=t.autoSize,s=t.onResize,y=t.className,r=t.style,l=t.disabled,z=t.onChange;t.onInternalAutoSize;var g=pe(t,je),I=xe(i,{value:f,postState:function(u){return u??""}}),m=A(I,2),B=m[0],F=m[1],ee=function(u){F(u.target.value),z==null||z(u)},p=v.useRef();v.useImperativeHandle(c,function(){return{textArea:p.current}});var M=v.useMemo(function(){return o&&he(o)==="object"?[o.minRows,o.maxRows]:[]},[o]),W=A(M,2),C=W[0],w=W[1],V=!!o,j=function(){try{if(document.activeElement===p.current){var u=p.current,U=u.selectionStart,D=u.selectionEnd,q=u.scrollTop;p.current.setSelectionRange(U,D),p.current.scrollTop=q}}catch{}},te=v.useState(ue),H=A(te,2),S=H[0],T=H[1],N=v.useState(),Z=A(N,2),k=Z[0],ae=Z[1],$=function(){T(se)};ve(function(){V&&$()},[f,C,w,V]),ve(function(){if(S===se)T(le);else if(S===le){var x=Be(p.current,!1,C,w);T(ue),ae(x)}else j()},[S]);var G=v.useRef(),L=function(){ge.cancel(G.current)},O=function(u){S===ue&&(s==null||s(u),o&&(L(),G.current=ge(function(){$()})))};v.useEffect(function(){return L},[]);var X=V?k:null,P=_(_({},r),X);return(S===se||S===le)&&(P.overflowY="hidden",P.overflowX="hidden"),v.createElement(Fe,{onResize:O,disabled:!(o||s)},v.createElement("textarea",Se({},g,{ref:p,style:P,className:ce(n,y,de({},"".concat(n,"-disabled"),l)),disabled:l,value:B,onChange:ee})))}),Le=["defaultValue","value","onFocus","onBlur","onChange","allowClear","maxLength","onCompositionStart","onCompositionEnd","suffix","prefixCls","classes","showCount","className","style","disabled","hidden","classNames","styles","onResize"];function be(e,c){return Q(e||"").slice(0,c).join("")}function me(e,c,t,n){var i=t;return e?i=be(t,n):Q(c||"").length<t.length&&Q(t||"").length>n&&(i=c),i}var Ge=R.forwardRef(function(e,c){var t,n=e.defaultValue,i=e.value,f=e.onFocus,o=e.onBlur,s=e.onChange,y=e.allowClear,r=e.maxLength,l=e.onCompositionStart,z=e.onCompositionEnd,g=e.suffix,I=e.prefixCls,m=I===void 0?"rc-textarea":I,B=e.classes,F=e.showCount,ee=e.className,p=e.style,M=e.disabled,W=e.hidden,C=e.classNames,w=e.styles,V=e.onResize,j=pe(e,Le),te=xe(n,{value:i,defaultValue:n}),H=A(te,2),S=H[0],T=H[1],N=v.useRef(null),Z=R.useState(!1),k=A(Z,2),ae=k[0],$=k[1],G=R.useState(!1),L=A(G,2),O=L[0],X=L[1],P=R.useRef(),x=R.useRef(0),u=R.useState(null),U=A(u,2),D=U[0],q=U[1],ne=function(){N.current.textArea.focus()};v.useImperativeHandle(c,function(){return{resizableTextArea:N.current,focus:ne,blur:function(){N.current.textArea.blur()}}}),v.useEffect(function(){$(function(b){return!M&&b})},[M]);var J=Number(r)>0,Re=function(a){X(!0),P.current=S,x.current=a.currentTarget.selectionStart,l==null||l(a)},ze=function(a){X(!1);var d=a.currentTarget.value;if(J){var E,Te=x.current>=r+1||x.current===((E=P.current)===null||E===void 0?void 0:E.length);d=me(Te,P.current,d,r)}d!==S&&(T(d),oe(a.currentTarget,a,s,d)),z==null||z(a)},ye=function(a){var d=a.target.value;if(!O&&J){var E=a.target.selectionStart>=r+1||a.target.selectionStart===d.length||!a.target.selectionStart;d=me(E,S,d,r)}T(d),oe(a.currentTarget,a,s,d)},Ce=function(a){var d=j.onPressEnter,E=j.onKeyDown;a.key==="Enter"&&d&&d(a),E==null||E(a)},we=function(a){$(!0),f==null||f(a)},Ee=function(a){$(!1),o==null||o(a)},Ae=function(a){T(""),ne(),oe(N.current.textArea,a,s)},K=Pe(S);!O&&J&&i==null&&(K=be(K,r));var re=g,Y;if(F){var fe=Q(K).length;he(F)==="object"?Y=F.formatter({value:K,count:fe,maxLength:r}):Y="".concat(fe).concat(J?" / ".concat(r):""),re=R.createElement(R.Fragment,null,re,R.createElement("span",{className:ce("".concat(m,"-data-count"),C==null?void 0:C.count),style:w==null?void 0:w.count},Y))}var Ie=function(a){V==null||V(a),D===null?q("mounted"):D==="mounted"&&q("resized")},Ve=R.createElement(Ne,{value:K,allowClear:y,handleReset:Ae,suffix:re,prefixCls:m,classes:{affixWrapper:ce(B==null?void 0:B.affixWrapper,(t={},de(t,"".concat(m,"-show-count"),F),de(t,"".concat(m,"-textarea-allow-clear"),y),t))},disabled:M,focused:ae,className:ee,style:_(_({},p),D==="resized"?{height:"auto"}:{}),dataAttrs:{affixWrapper:{"data-count":typeof Y=="string"?Y:void 0}},hidden:W,inputElement:R.createElement(He,Se({},j,{onKeyDown:Ce,onChange:ye,onFocus:we,onBlur:Ee,onCompositionStart:Re,onCompositionEnd:ze,className:C==null?void 0:C.textarea,style:_(_({},w==null?void 0:w.textarea),{},{resize:p==null?void 0:p.resize}),disabled:M,prefixCls:m,onResize:Ie,ref:N}))});return Ve});export{Ge as T};
