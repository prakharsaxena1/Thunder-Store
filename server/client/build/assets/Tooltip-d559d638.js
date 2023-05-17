import{r as x,a as ce,z as ot,y as $,B as Ge,j as jt}from"./index-c532219d.js";import{b as tt,u as Tr,c as Rr,a as Er}from"./createSvgIcon-bfe4a7b4.js";import{a as Gt,o as Se,u as Wt}from"./ButtonBase-c29cbbf3.js";import{n as Jt,H as Kt,m as Qt,I as nt,u as Cr,J as Zt,j as er,M as tr}from"./Typography-cb50676a.js";import{u as Ar}from"./Paper-09fff5fc.js";import{C as $r,u as Mr,ak as Lr,k as Nt,al as Je}from"./TextField-4d23d510.js";function Ht(e){return e.substring(2).toLowerCase()}function Dr(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function mn(e){const{children:t,disableReactTree:r=!1,mouseEvent:o="onClick",onClickAway:n,touchEvent:i="onTouchEnd"}=e,l=x.useRef(!1),a=x.useRef(null),s=x.useRef(!1),c=x.useRef(!1);x.useEffect(()=>(setTimeout(()=>{s.current=!0},0),()=>{s.current=!1}),[]);const p=tt(t.ref,a),v=Gt(m=>{const u=c.current;c.current=!1;const d=Se(a.current);if(!s.current||!a.current||"clientX"in m&&Dr(m,d))return;if(l.current){l.current=!1;return}let b;m.composedPath?b=m.composedPath().indexOf(a.current)>-1:b=!d.documentElement.contains(m.target)||a.current.contains(m.target),!b&&(r||!u)&&n(m)}),y=m=>u=>{c.current=!0;const d=t.props[m];d&&d(u)},f={ref:p};return i!==!1&&(f[i]=y(i)),x.useEffect(()=>{if(i!==!1){const m=Ht(i),u=Se(a.current),d=()=>{l.current=!0};return u.addEventListener(m,v),u.addEventListener("touchmove",d),()=>{u.removeEventListener(m,v),u.removeEventListener("touchmove",d)}}},[v,i]),o!==!1&&(f[o]=y(o)),x.useEffect(()=>{if(o!==!1){const m=Ht(o),u=Se(a.current);return u.addEventListener(m,v),()=>{u.removeEventListener(m,v)}}},[v,o]),ce(x.Fragment,{children:x.cloneElement(t,f)})}var j="top",I="bottom",V="right",W="left",ht="auto",Fe=[j,I,V,W],xe="start",Ne="end",kr="clippingParents",rr="viewport",ke="popper",Br="reference",Ft=Fe.reduce(function(e,t){return e.concat([t+"-"+xe,t+"-"+Ne])},[]),or=[].concat(Fe,[ht]).reduce(function(e,t){return e.concat([t,t+"-"+xe,t+"-"+Ne])},[]),Sr="beforeRead",jr="read",Wr="afterRead",Nr="beforeMain",Hr="main",Fr="afterMain",Ir="beforeWrite",Vr="write",Ur="afterWrite",_r=[Sr,jr,Wr,Nr,Hr,Fr,Ir,Vr,Ur];function Z(e){return e?(e.nodeName||"").toLowerCase():null}function H(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function he(e){var t=H(e).Element;return e instanceof t||e instanceof Element}function F(e){var t=H(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function gt(e){if(typeof ShadowRoot>"u")return!1;var t=H(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function zr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!F(i)||!Z(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(l){var a=n[l];a===!1?i.removeAttribute(l):i.setAttribute(l,a===!0?"":a)}))})}function Xr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],i=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),a=l.reduce(function(s,c){return s[c]="",s},{});!F(n)||!Z(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(s){n.removeAttribute(s)}))})}}const qr={name:"applyStyles",enabled:!0,phase:"write",fn:zr,effect:Xr,requires:["computeStyles"]};function Q(e){return e.split("-")[0]}var me=Math.max,rt=Math.min,Pe=Math.round;function dt(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function nr(){return!/^((?!chrome|android).)*safari/i.test(dt())}function Oe(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,i=1;t&&F(e)&&(n=e.offsetWidth>0&&Pe(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Pe(o.height)/e.offsetHeight||1);var l=he(e)?H(e):window,a=l.visualViewport,s=!nr()&&r,c=(o.left+(s&&a?a.offsetLeft:0))/n,p=(o.top+(s&&a?a.offsetTop:0))/i,v=o.width/n,y=o.height/i;return{width:v,height:y,top:p,right:c+v,bottom:p+y,left:c,x:c,y:p}}function yt(e){var t=Oe(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function ir(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&gt(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ne(e){return H(e).getComputedStyle(e)}function Yr(e){return["table","td","th"].indexOf(Z(e))>=0}function ue(e){return((he(e)?e.ownerDocument:e.document)||window.document).documentElement}function it(e){return Z(e)==="html"?e:e.assignedSlot||e.parentNode||(gt(e)?e.host:null)||ue(e)}function It(e){return!F(e)||ne(e).position==="fixed"?null:e.offsetParent}function Gr(e){var t=/firefox/i.test(dt()),r=/Trident/i.test(dt());if(r&&F(e)){var o=ne(e);if(o.position==="fixed")return null}var n=it(e);for(gt(n)&&(n=n.host);F(n)&&["html","body"].indexOf(Z(n))<0;){var i=ne(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function Ie(e){for(var t=H(e),r=It(e);r&&Yr(r)&&ne(r).position==="static";)r=It(r);return r&&(Z(r)==="html"||Z(r)==="body"&&ne(r).position==="static")?t:r||Gr(e)||t}function bt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function je(e,t,r){return me(e,rt(t,r))}function Jr(e,t,r){var o=je(e,t,r);return o>r?r:o}function ar(){return{top:0,right:0,bottom:0,left:0}}function sr(e){return Object.assign({},ar(),e)}function pr(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var Kr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,sr(typeof t!="number"?t:pr(t,Fe))};function Qr(e){var t,r=e.state,o=e.name,n=e.options,i=r.elements.arrow,l=r.modifiersData.popperOffsets,a=Q(r.placement),s=bt(a),c=[W,V].indexOf(a)>=0,p=c?"height":"width";if(!(!i||!l)){var v=Kr(n.padding,r),y=yt(i),f=s==="y"?j:W,m=s==="y"?I:V,u=r.rects.reference[p]+r.rects.reference[s]-l[s]-r.rects.popper[p],d=l[s]-r.rects.reference[s],b=Ie(i),E=b?s==="y"?b.clientHeight||0:b.clientWidth||0:0,P=u/2-d/2,h=v[f],w=E-y[p]-v[m],g=E/2-y[p]/2+P,T=je(h,g,w),C=s;r.modifiersData[o]=(t={},t[C]=T,t.centerOffset=T-g,t)}}function Zr(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||ir(t.elements.popper,n)&&(t.elements.arrow=n))}const eo={name:"arrow",enabled:!0,phase:"main",fn:Qr,effect:Zr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Te(e){return e.split("-")[1]}var to={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ro(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:Pe(r*n)/n||0,y:Pe(o*n)/n||0}}function Vt(e){var t,r=e.popper,o=e.popperRect,n=e.placement,i=e.variation,l=e.offsets,a=e.position,s=e.gpuAcceleration,c=e.adaptive,p=e.roundOffsets,v=e.isFixed,y=l.x,f=y===void 0?0:y,m=l.y,u=m===void 0?0:m,d=typeof p=="function"?p({x:f,y:u}):{x:f,y:u};f=d.x,u=d.y;var b=l.hasOwnProperty("x"),E=l.hasOwnProperty("y"),P=W,h=j,w=window;if(c){var g=Ie(r),T="clientHeight",C="clientWidth";if(g===H(r)&&(g=ue(r),ne(g).position!=="static"&&a==="absolute"&&(T="scrollHeight",C="scrollWidth")),g=g,n===j||(n===W||n===V)&&i===Ne){h=I;var A=v&&g===w&&w.visualViewport?w.visualViewport.height:g[T];u-=A-o.height,u*=s?1:-1}if(n===W||(n===j||n===I)&&i===Ne){P=V;var R=v&&g===w&&w.visualViewport?w.visualViewport.width:g[C];f-=R-o.width,f*=s?1:-1}}var L=Object.assign({position:a},c&&to),B=p===!0?ro({x:f,y:u},H(r)):{x:f,y:u};if(f=B.x,u=B.y,s){var D;return Object.assign({},L,(D={},D[h]=E?"0":"",D[P]=b?"0":"",D.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+u+"px)":"translate3d("+f+"px, "+u+"px, 0)",D))}return Object.assign({},L,(t={},t[h]=E?u+"px":"",t[P]=b?f+"px":"",t.transform="",t))}function oo(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,l=i===void 0?!0:i,a=r.roundOffsets,s=a===void 0?!0:a,c={placement:Q(t.placement),variation:Te(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Vt(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Vt(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const no={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:oo,data:{}};var Ke={passive:!0};function io(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,i=n===void 0?!0:n,l=o.resize,a=l===void 0?!0:l,s=H(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach(function(p){p.addEventListener("scroll",r.update,Ke)}),a&&s.addEventListener("resize",r.update,Ke),function(){i&&c.forEach(function(p){p.removeEventListener("scroll",r.update,Ke)}),a&&s.removeEventListener("resize",r.update,Ke)}}const ao={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:io,data:{}};var so={left:"right",right:"left",bottom:"top",top:"bottom"};function et(e){return e.replace(/left|right|bottom|top/g,function(t){return so[t]})}var po={start:"end",end:"start"};function Ut(e){return e.replace(/start|end/g,function(t){return po[t]})}function wt(e){var t=H(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function xt(e){return Oe(ue(e)).left+wt(e).scrollLeft}function lo(e,t){var r=H(e),o=ue(e),n=r.visualViewport,i=o.clientWidth,l=o.clientHeight,a=0,s=0;if(n){i=n.width,l=n.height;var c=nr();(c||!c&&t==="fixed")&&(a=n.offsetLeft,s=n.offsetTop)}return{width:i,height:l,x:a+xt(e),y:s}}function co(e){var t,r=ue(e),o=wt(e),n=(t=e.ownerDocument)==null?void 0:t.body,i=me(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=me(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-o.scrollLeft+xt(e),s=-o.scrollTop;return ne(n||r).direction==="rtl"&&(a+=me(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:l,x:a,y:s}}function Pt(e){var t=ne(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function lr(e){return["html","body","#document"].indexOf(Z(e))>=0?e.ownerDocument.body:F(e)&&Pt(e)?e:lr(it(e))}function We(e,t){var r;t===void 0&&(t=[]);var o=lr(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),i=H(o),l=n?[i].concat(i.visualViewport||[],Pt(o)?o:[]):o,a=t.concat(l);return n?a:a.concat(We(it(l)))}function vt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function uo(e,t){var r=Oe(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function _t(e,t,r){return t===rr?vt(lo(e,r)):he(t)?uo(t,r):vt(co(ue(e)))}function fo(e){var t=We(it(e)),r=["absolute","fixed"].indexOf(ne(e).position)>=0,o=r&&F(e)?Ie(e):e;return he(o)?t.filter(function(n){return he(n)&&ir(n,o)&&Z(n)!=="body"}):[]}function vo(e,t,r,o){var n=t==="clippingParents"?fo(e):[].concat(t),i=[].concat(n,[r]),l=i[0],a=i.reduce(function(s,c){var p=_t(e,c,o);return s.top=me(p.top,s.top),s.right=rt(p.right,s.right),s.bottom=rt(p.bottom,s.bottom),s.left=me(p.left,s.left),s},_t(e,l,o));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function cr(e){var t=e.reference,r=e.element,o=e.placement,n=o?Q(o):null,i=o?Te(o):null,l=t.x+t.width/2-r.width/2,a=t.y+t.height/2-r.height/2,s;switch(n){case j:s={x:l,y:t.y-r.height};break;case I:s={x:l,y:t.y+t.height};break;case V:s={x:t.x+t.width,y:a};break;case W:s={x:t.x-r.width,y:a};break;default:s={x:t.x,y:t.y}}var c=n?bt(n):null;if(c!=null){var p=c==="y"?"height":"width";switch(i){case xe:s[c]=s[c]-(t[p]/2-r[p]/2);break;case Ne:s[c]=s[c]+(t[p]/2-r[p]/2);break}}return s}function He(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,i=r.strategy,l=i===void 0?e.strategy:i,a=r.boundary,s=a===void 0?kr:a,c=r.rootBoundary,p=c===void 0?rr:c,v=r.elementContext,y=v===void 0?ke:v,f=r.altBoundary,m=f===void 0?!1:f,u=r.padding,d=u===void 0?0:u,b=sr(typeof d!="number"?d:pr(d,Fe)),E=y===ke?Br:ke,P=e.rects.popper,h=e.elements[m?E:y],w=vo(he(h)?h:h.contextElement||ue(e.elements.popper),s,p,l),g=Oe(e.elements.reference),T=cr({reference:g,element:P,strategy:"absolute",placement:n}),C=vt(Object.assign({},P,T)),A=y===ke?C:g,R={top:w.top-A.top+b.top,bottom:A.bottom-w.bottom+b.bottom,left:w.left-A.left+b.left,right:A.right-w.right+b.right},L=e.modifiersData.offset;if(y===ke&&L){var B=L[n];Object.keys(R).forEach(function(D){var U=[V,I].indexOf(D)>=0?1:-1,_=[j,I].indexOf(D)>=0?"y":"x";R[D]+=B[_]*U})}return R}function mo(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,i=r.rootBoundary,l=r.padding,a=r.flipVariations,s=r.allowedAutoPlacements,c=s===void 0?or:s,p=Te(o),v=p?a?Ft:Ft.filter(function(m){return Te(m)===p}):Fe,y=v.filter(function(m){return c.indexOf(m)>=0});y.length===0&&(y=v);var f=y.reduce(function(m,u){return m[u]=He(e,{placement:u,boundary:n,rootBoundary:i,padding:l})[Q(u)],m},{});return Object.keys(f).sort(function(m,u){return f[m]-f[u]})}function ho(e){if(Q(e)===ht)return[];var t=et(e);return[Ut(e),t,Ut(t)]}function go(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,a=l===void 0?!0:l,s=r.fallbackPlacements,c=r.padding,p=r.boundary,v=r.rootBoundary,y=r.altBoundary,f=r.flipVariations,m=f===void 0?!0:f,u=r.allowedAutoPlacements,d=t.options.placement,b=Q(d),E=b===d,P=s||(E||!m?[et(d)]:ho(d)),h=[d].concat(P).reduce(function(ee,G){return ee.concat(Q(G)===ht?mo(t,{placement:G,boundary:p,rootBoundary:v,padding:c,flipVariations:m,allowedAutoPlacements:u}):G)},[]),w=t.rects.reference,g=t.rects.popper,T=new Map,C=!0,A=h[0],R=0;R<h.length;R++){var L=h[R],B=Q(L),D=Te(L)===xe,U=[j,I].indexOf(B)>=0,_=U?"width":"height",M=He(t,{placement:L,boundary:p,rootBoundary:v,altBoundary:y,padding:c}),k=U?D?V:W:D?I:j;w[_]>g[_]&&(k=et(k));var Y=et(k),z=[];if(i&&z.push(M[B]<=0),a&&z.push(M[k]<=0,M[Y]<=0),z.every(function(ee){return ee})){A=L,C=!1;break}T.set(L,z)}if(C)for(var ge=m?3:1,ye=function(G){var ie=h.find(function(ae){var S=T.get(ae);if(S)return S.slice(0,G).every(function(X){return X})});if(ie)return A=ie,"break"},fe=ge;fe>0;fe--){var de=ye(fe);if(de==="break")break}t.placement!==A&&(t.modifiersData[o]._skip=!0,t.placement=A,t.reset=!0)}}const yo={name:"flip",enabled:!0,phase:"main",fn:go,requiresIfExists:["offset"],data:{_skip:!1}};function zt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Xt(e){return[j,V,I,W].some(function(t){return e[t]>=0})}function bo(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,l=He(t,{elementContext:"reference"}),a=He(t,{altBoundary:!0}),s=zt(l,o),c=zt(a,n,i),p=Xt(s),v=Xt(c);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:c,isReferenceHidden:p,hasPopperEscaped:v},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":v})}const wo={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:bo};function xo(e,t,r){var o=Q(e),n=[W,j].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=i[0],a=i[1];return l=l||0,a=(a||0)*n,[W,V].indexOf(o)>=0?{x:a,y:l}:{x:l,y:a}}function Po(e){var t=e.state,r=e.options,o=e.name,n=r.offset,i=n===void 0?[0,0]:n,l=or.reduce(function(p,v){return p[v]=xo(v,t.rects,i),p},{}),a=l[t.placement],s=a.x,c=a.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=l}const Oo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Po};function To(e){var t=e.state,r=e.name;t.modifiersData[r]=cr({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Ro={name:"popperOffsets",enabled:!0,phase:"read",fn:To,data:{}};function Eo(e){return e==="x"?"y":"x"}function Co(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,i=n===void 0?!0:n,l=r.altAxis,a=l===void 0?!1:l,s=r.boundary,c=r.rootBoundary,p=r.altBoundary,v=r.padding,y=r.tether,f=y===void 0?!0:y,m=r.tetherOffset,u=m===void 0?0:m,d=He(t,{boundary:s,rootBoundary:c,padding:v,altBoundary:p}),b=Q(t.placement),E=Te(t.placement),P=!E,h=bt(b),w=Eo(h),g=t.modifiersData.popperOffsets,T=t.rects.reference,C=t.rects.popper,A=typeof u=="function"?u(Object.assign({},t.rects,{placement:t.placement})):u,R=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),L=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(g){if(i){var D,U=h==="y"?j:W,_=h==="y"?I:V,M=h==="y"?"height":"width",k=g[h],Y=k+d[U],z=k-d[_],ge=f?-C[M]/2:0,ye=E===xe?T[M]:C[M],fe=E===xe?-C[M]:-T[M],de=t.elements.arrow,ee=f&&de?yt(de):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ar(),ie=G[U],ae=G[_],S=je(0,T[M],ee[M]),X=P?T[M]/2-ge-S-ie-R.mainAxis:ye-S-ie-R.mainAxis,be=P?-T[M]/2+ge+S+ae+R.mainAxis:fe+S+ae+R.mainAxis,J=t.elements.arrow&&Ie(t.elements.arrow),at=J?h==="y"?J.clientTop||0:J.clientLeft||0:0,Ve=(D=L==null?void 0:L[h])!=null?D:0,Ue=k+X-Ve-at,Re=k+be-Ve,_e=je(f?rt(Y,Ue):Y,k,f?me(z,Re):z);g[h]=_e,B[h]=_e-k}if(a){var se,ze=h==="x"?j:W,Ee=h==="x"?I:V,te=g[w],re=w==="y"?"height":"width",we=te+d[ze],ve=te-d[Ee],pe=[j,W].indexOf(b)!==-1,K=(se=L==null?void 0:L[w])!=null?se:0,Ce=pe?we:te-T[re]-C[re]-K+R.altAxis,Xe=pe?te+T[re]+C[re]-K-R.altAxis:ve,Ae=f&&pe?Jr(Ce,te,Xe):je(f?Ce:we,te,f?Xe:ve);g[w]=Ae,B[w]=Ae-te}t.modifiersData[o]=B}}const Ao={name:"preventOverflow",enabled:!0,phase:"main",fn:Co,requiresIfExists:["offset"]};function $o(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Mo(e){return e===H(e)||!F(e)?wt(e):$o(e)}function Lo(e){var t=e.getBoundingClientRect(),r=Pe(t.width)/e.offsetWidth||1,o=Pe(t.height)/e.offsetHeight||1;return r!==1||o!==1}function Do(e,t,r){r===void 0&&(r=!1);var o=F(t),n=F(t)&&Lo(t),i=ue(t),l=Oe(e,n,r),a={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!r)&&((Z(t)!=="body"||Pt(i))&&(a=Mo(t)),F(t)?(s=Oe(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):i&&(s.x=xt(i))),{x:l.left+a.scrollLeft-s.x,y:l.top+a.scrollTop-s.y,width:l.width,height:l.height}}function ko(e){var t=new Map,r=new Set,o=[];e.forEach(function(i){t.set(i.name,i)});function n(i){r.add(i.name);var l=[].concat(i.requires||[],i.requiresIfExists||[]);l.forEach(function(a){if(!r.has(a)){var s=t.get(a);s&&n(s)}}),o.push(i)}return e.forEach(function(i){r.has(i.name)||n(i)}),o}function Bo(e){var t=ko(e);return _r.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function So(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function jo(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var qt={placement:"bottom",modifiers:[],strategy:"absolute"};function Yt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function Wo(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,i=n===void 0?qt:n;return function(a,s,c){c===void 0&&(c=i);var p={placement:"bottom",orderedModifiers:[],options:Object.assign({},qt,i),modifiersData:{},elements:{reference:a,popper:s},attributes:{},styles:{}},v=[],y=!1,f={state:p,setOptions:function(b){var E=typeof b=="function"?b(p.options):b;u(),p.options=Object.assign({},i,p.options,E),p.scrollParents={reference:he(a)?We(a):a.contextElement?We(a.contextElement):[],popper:We(s)};var P=Bo(jo([].concat(o,p.options.modifiers)));return p.orderedModifiers=P.filter(function(h){return h.enabled}),m(),f.update()},forceUpdate:function(){if(!y){var b=p.elements,E=b.reference,P=b.popper;if(Yt(E,P)){p.rects={reference:Do(E,Ie(P),p.options.strategy==="fixed"),popper:yt(P)},p.reset=!1,p.placement=p.options.placement,p.orderedModifiers.forEach(function(R){return p.modifiersData[R.name]=Object.assign({},R.data)});for(var h=0;h<p.orderedModifiers.length;h++){if(p.reset===!0){p.reset=!1,h=-1;continue}var w=p.orderedModifiers[h],g=w.fn,T=w.options,C=T===void 0?{}:T,A=w.name;typeof g=="function"&&(p=g({state:p,options:C,name:A,instance:f})||p)}}}},update:So(function(){return new Promise(function(d){f.forceUpdate(),d(p)})}),destroy:function(){u(),y=!0}};if(!Yt(a,s))return f;f.setOptions(c).then(function(d){!y&&c.onFirstUpdate&&c.onFirstUpdate(d)});function m(){p.orderedModifiers.forEach(function(d){var b=d.name,E=d.options,P=E===void 0?{}:E,h=d.effect;if(typeof h=="function"){var w=h({state:p,name:b,instance:f,options:P}),g=function(){};v.push(w||g)}})}function u(){v.forEach(function(d){return d()}),v=[]}return f}}var No=[ao,Ro,no,qr,Oo,yo,Ao,eo,wo],Ho=Wo({defaultModifiers:No});function Fo(e){return Jt("MuiPopper",e)}Kt("MuiPopper",["root"]);const Io=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],Vo=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Uo(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function mt(e){return typeof e=="function"?e():e}function _o(e){return e.nodeType!==void 0}const zo=()=>Qt({root:["root"]},Lr(Fo)),Xo={},qo=x.forwardRef(function(t,r){var o;const{anchorEl:n,children:i,direction:l,disablePortal:a,modifiers:s,open:c,placement:p,popperOptions:v,popperRef:y,slotProps:f={},slots:m={},TransitionProps:u}=t,d=ot(t,Io),b=x.useRef(null),E=tt(b,r),P=x.useRef(null),h=tt(P,y),w=x.useRef(h);Wt(()=>{w.current=h},[h]),x.useImperativeHandle(y,()=>P.current,[]);const g=Uo(p,l),[T,C]=x.useState(g),[A,R]=x.useState(mt(n));x.useEffect(()=>{P.current&&P.current.forceUpdate()}),x.useEffect(()=>{n&&R(mt(n))},[n]),Wt(()=>{if(!A||!c)return;const _=Y=>{C(Y.placement)};let M=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:Y})=>{_(Y)}}];s!=null&&(M=M.concat(s)),v&&v.modifiers!=null&&(M=M.concat(v.modifiers));const k=Ho(A,b.current,$({placement:g},v,{modifiers:M}));return w.current(k),()=>{k.destroy(),w.current(null)}},[A,a,s,c,v,g]);const L={placement:T};u!==null&&(L.TransitionProps=u);const B=zo(),D=(o=m.root)!=null?o:"div",U=Mr({elementType:D,externalSlotProps:f.root,externalForwardedProps:d,additionalProps:{role:"tooltip",ref:E},ownerState:t,className:B.root});return ce(D,$({},U,{children:typeof i=="function"?i(L):i}))}),Yo=x.forwardRef(function(t,r){const{anchorEl:o,children:n,container:i,direction:l="ltr",disablePortal:a=!1,keepMounted:s=!1,modifiers:c,open:p,placement:v="bottom",popperOptions:y=Xo,popperRef:f,style:m,transition:u=!1,slotProps:d={},slots:b={}}=t,E=ot(t,Vo),[P,h]=x.useState(!0),w=()=>{h(!1)},g=()=>{h(!0)};if(!s&&!p&&(!u||P))return null;let T;if(i)T=i;else if(o){const R=mt(o);T=R&&_o(R)?Se(R).body:Se(null).body}const C=!p&&s&&(!u||P)?"none":void 0,A=u?{in:p,onEnter:w,onExited:g}:void 0;return ce($r,{disablePortal:a,container:T,children:ce(qo,$({anchorEl:o,direction:l,disablePortal:a,modifiers:c,ref:r,open:u?!P:p,placement:v,popperOptions:y,popperRef:f,slotProps:d,slots:b},E,{style:$({position:"fixed",top:0,left:0,display:C},m),TransitionProps:A,children:n}))})}),Go=Yo,Jo=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Ko=nt(Go,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Qo=x.forwardRef(function(t,r){var o;const n=Cr(),i=Zt({props:t,name:"MuiPopper"}),{anchorEl:l,component:a,components:s,componentsProps:c,container:p,disablePortal:v,keepMounted:y,modifiers:f,open:m,placement:u,popperOptions:d,popperRef:b,transition:E,slots:P,slotProps:h}=i,w=ot(i,Jo),g=(o=P==null?void 0:P.root)!=null?o:s==null?void 0:s.Root,T=$({anchorEl:l,container:p,disablePortal:v,keepMounted:y,modifiers:f,open:m,placement:u,popperOptions:d,popperRef:b,transition:E},w);return ce(Ko,$({as:a,direction:n==null?void 0:n.direction,slots:{root:g},slotProps:h??c},T,{ref:r}))}),ur=Qo;function Zo(e){return Jt("MuiTooltip",e)}const en=Kt("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),le=en,tn=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function rn(e){return Math.round(e*1e5)/1e5}const on=e=>{const{classes:t,disableInteractive:r,arrow:o,touch:n,placement:i}=e,l={popper:["popper",!r&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",n&&"touch",`tooltipPlacement${er(i.split("-")[0])}`],arrow:["arrow"]};return Qt(l,Zo,t)},nn=nt(ur,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(({theme:e,ownerState:t,open:r})=>$({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${le.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${le.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${le.arrow}`]:$({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${le.arrow}`]:$({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),an=nt("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${er(r.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>$({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:tr(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${rn(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${le.popper}[data-popper-placement*="left"] &`]:$({transformOrigin:"right center"},t.isRtl?$({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):$({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${le.popper}[data-popper-placement*="right"] &`]:$({transformOrigin:"left center"},t.isRtl?$({marginRight:"14px"},t.touch&&{marginRight:"24px"}):$({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${le.popper}[data-popper-placement*="top"] &`]:$({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${le.popper}[data-popper-placement*="bottom"] &`]:$({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),sn=nt("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:tr(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let Qe=!1,ft=null,Be={x:0,y:0};function Ze(e,t){return r=>{t&&t(r),e(r)}}const pn=x.forwardRef(function(t,r){var o,n,i,l,a,s,c,p,v,y,f,m,u,d,b,E,P,h,w;const g=Zt({props:t,name:"MuiTooltip"}),{arrow:T=!1,children:C,components:A={},componentsProps:R={},describeChild:L=!1,disableFocusListener:B=!1,disableHoverListener:D=!1,disableInteractive:U=!1,disableTouchListener:_=!1,enterDelay:M=100,enterNextDelay:k=0,enterTouchDelay:Y=700,followCursor:z=!1,id:ge,leaveDelay:ye=0,leaveTouchDelay:fe=1500,onClose:de,onOpen:ee,open:G,placement:ie="bottom",PopperComponent:ae,PopperProps:S={},slotProps:X={},slots:be={},title:J,TransitionComponent:at=Nt,TransitionProps:Ve}=g,Ue=ot(g,tn),Re=Ar(),_e=Re.direction==="rtl",[se,ze]=x.useState(),[Ee,te]=x.useState(null),re=x.useRef(!1),we=U||z,ve=x.useRef(),pe=x.useRef(),K=x.useRef(),Ce=x.useRef(),[Xe,Ae]=Tr({controlled:G,default:!1,name:"Tooltip",state:"open"});let oe=Xe;const st=Rr(ge),$e=x.useRef(),qe=x.useCallback(()=>{$e.current!==void 0&&(document.body.style.WebkitUserSelect=$e.current,$e.current=void 0),clearTimeout(Ce.current)},[]);x.useEffect(()=>()=>{clearTimeout(ve.current),clearTimeout(pe.current),clearTimeout(K.current),qe()},[qe]);const Ot=O=>{clearTimeout(ft),Qe=!0,Ae(!0),ee&&!oe&&ee(O)},Ye=Gt(O=>{clearTimeout(ft),ft=setTimeout(()=>{Qe=!1},800+ye),Ae(!1),de&&oe&&de(O),clearTimeout(ve.current),ve.current=setTimeout(()=>{re.current=!1},Re.transitions.duration.shortest)}),pt=O=>{re.current&&O.type!=="touchstart"||(se&&se.removeAttribute("title"),clearTimeout(pe.current),clearTimeout(K.current),M||Qe&&k?pe.current=setTimeout(()=>{Ot(O)},Qe?k:M):Ot(O))},Tt=O=>{clearTimeout(pe.current),clearTimeout(K.current),K.current=setTimeout(()=>{Ye(O)},ye)},{isFocusVisibleRef:Rt,onBlur:fr,onFocus:dr,ref:vr}=Er(),[,Et]=x.useState(!1),Ct=O=>{fr(O),Rt.current===!1&&(Et(!1),Tt(O))},At=O=>{se||ze(O.currentTarget),dr(O),Rt.current===!0&&(Et(!0),pt(O))},$t=O=>{re.current=!0;const N=C.props;N.onTouchStart&&N.onTouchStart(O)},Mt=pt,Lt=Tt,mr=O=>{$t(O),clearTimeout(K.current),clearTimeout(ve.current),qe(),$e.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",Ce.current=setTimeout(()=>{document.body.style.WebkitUserSelect=$e.current,pt(O)},Y)},hr=O=>{C.props.onTouchEnd&&C.props.onTouchEnd(O),qe(),clearTimeout(K.current),K.current=setTimeout(()=>{Ye(O)},fe)};x.useEffect(()=>{if(!oe)return;function O(N){(N.key==="Escape"||N.key==="Esc")&&Ye(N)}return document.addEventListener("keydown",O),()=>{document.removeEventListener("keydown",O)}},[Ye,oe]);const gr=tt(C.ref,vr,ze,r);!J&&J!==0&&(oe=!1);const lt=x.useRef(),yr=O=>{const N=C.props;N.onMouseMove&&N.onMouseMove(O),Be={x:O.clientX,y:O.clientY},lt.current&&lt.current.update()},Me={},ct=typeof J=="string";L?(Me.title=!oe&&ct&&!D?J:null,Me["aria-describedby"]=oe?st:null):(Me["aria-label"]=ct?J:null,Me["aria-labelledby"]=oe&&!ct?st:null);const q=$({},Me,Ue,C.props,{className:Ge(Ue.className,C.props.className),onTouchStart:$t,ref:gr},z?{onMouseMove:yr}:{}),Le={};_||(q.onTouchStart=mr,q.onTouchEnd=hr),D||(q.onMouseOver=Ze(Mt,q.onMouseOver),q.onMouseLeave=Ze(Lt,q.onMouseLeave),we||(Le.onMouseOver=Mt,Le.onMouseLeave=Lt)),B||(q.onFocus=Ze(At,q.onFocus),q.onBlur=Ze(Ct,q.onBlur),we||(Le.onFocus=At,Le.onBlur=Ct));const br=x.useMemo(()=>{var O;let N=[{name:"arrow",enabled:!!Ee,options:{element:Ee,padding:4}}];return(O=S.popperOptions)!=null&&O.modifiers&&(N=N.concat(S.popperOptions.modifiers)),$({},S.popperOptions,{modifiers:N})},[Ee,S]),De=$({},g,{isRtl:_e,arrow:T,disableInteractive:we,placement:ie,PopperComponentProp:ae,touch:re.current}),ut=on(De),Dt=(o=(n=be.popper)!=null?n:A.Popper)!=null?o:nn,kt=(i=(l=(a=be.transition)!=null?a:A.Transition)!=null?l:at)!=null?i:Nt,Bt=(s=(c=be.tooltip)!=null?c:A.Tooltip)!=null?s:an,St=(p=(v=be.arrow)!=null?v:A.Arrow)!=null?p:sn,wr=Je(Dt,$({},S,(y=X.popper)!=null?y:R.popper,{className:Ge(ut.popper,S==null?void 0:S.className,(f=(m=X.popper)!=null?m:R.popper)==null?void 0:f.className)}),De),xr=Je(kt,$({},Ve,(u=X.transition)!=null?u:R.transition),De),Pr=Je(Bt,$({},(d=X.tooltip)!=null?d:R.tooltip,{className:Ge(ut.tooltip,(b=(E=X.tooltip)!=null?E:R.tooltip)==null?void 0:b.className)}),De),Or=Je(St,$({},(P=X.arrow)!=null?P:R.arrow,{className:Ge(ut.arrow,(h=(w=X.arrow)!=null?w:R.arrow)==null?void 0:h.className)}),De);return jt(x.Fragment,{children:[x.cloneElement(C,q),ce(Dt,$({as:ae??ur,placement:ie,anchorEl:z?{getBoundingClientRect:()=>({top:Be.y,left:Be.x,right:Be.x,bottom:Be.y,width:0,height:0})}:se,popperRef:lt,open:se?oe:!1,id:st,transition:!0},Le,wr,{popperOptions:br,children:({TransitionProps:O})=>ce(kt,$({timeout:Re.transitions.duration.shorter},O,xr,{children:jt(Bt,$({},Pr,{children:[J,T?ce(St,$({},Or,{ref:te})):null]}))}))}))]})}),hn=pn;export{mn as C,ur as P,hn as T,Zo as g,le as t};
