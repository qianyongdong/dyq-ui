(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue"),require("vue-demi")):typeof define=="function"&&define.amd?define(["exports","vue","vue-demi"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.index={},e.Vue,e.VueDemi))})(this,function(e,t,u){"use strict";const i={modelValue:{type:Boolean},closeOnBack:{type:Boolean,default:()=>!1},closeOnContentClick:{type:Boolean,default:()=>!1},zIndex:{type:Number,default:2e3},opacity:{type:Number,default:.3}},l=u.defineComponent({name:"DOverlay",model:{prop:"modelValue",event:"update:modelValue"},props:i,setup(n,{slots:o}){const a={zIndex:n.zIndex,backgroundColor:`rgba(0,0,0,${n.opacity})`};return()=>{var d;return t.withDirectives(t.createVNode("div",{class:"d-overlay",style:a},[(d=o.default)==null?void 0:d.call(o)]),[[t.vShow,n.modelValue]])}}});e.DOverlay=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
