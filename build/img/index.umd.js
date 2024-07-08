(function(r,d){typeof exports=="object"&&typeof module<"u"?d(exports,require("vue"),require("vue-demi")):typeof define=="function"&&define.amd?define(["exports","vue","vue-demi"],d):(r=typeof globalThis<"u"?globalThis:r||self,d(r.index={},r.Vue,r.VueDemi))})(this,function(r,d,u){"use strict";function h(n){return n.replace(/-(\w)/g,(e,a)=>a?a.toUpperCase():"")}function R(n){return Object.keys(n).reduce((e,a)=>(typeof n[a]<"u"&&(e[h(a)]=n[a]),e),{})}const s=["rendered","error","loaded"],f=["src","aspectRatio","cover",...s.map(n=>`on${n.replace(/^\S/,e=>e.toUpperCase())}`)],S=u.defineComponent({name:"DImg",props:f,emits:[...s],setup(n,{slots:e,emit:a,expose:V,attrs:w}){const y=s.reduce((o,c)=>{const p=`on${c.replace(/^\S/,i=>i.toUpperCase())}`;return o[p]=(...i)=>a(c,...i),o},{}),t=u.computed(()=>{const{...o}=u.toRefs(n),c=Object.entries(o).reduce((p,[i,N])=>{const g=u.unref(N);return g!==void 0&&(p[i]=g),p},{});return{...y,...R({...w,...c})}});console.log(t);const C={},E=u.reactive({...C});V(E);const l=u.ref(null),m=u.ref(0),v=u.ref(!1),j=()=>{m.value=2,t.value.onLoaded(l.value),t.value.onRendered({pageNum:1})},I=o=>{v.value=!0,t.value.onError(o)};return()=>{var o,c;return d.createVNode(d.Fragment,null,[m.value<2?(o=e.placeholder)==null?void 0:o.call(e):v.value&&((c=e.error)==null?void 0:c.call(e)),d.createVNode("img",{ref:l,class:{"d-img":!0,cover:!!(t.value.cover||t.value.cover==="")},style:{"aspect-ratio":t.value.aspectRatio||"unset",width:t.value.width||"100%"},onload:j,onerror:I,src:t.value.src},null)])}}});r.DImg=S,r.imgEmits=s,r.imgProps=f,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
