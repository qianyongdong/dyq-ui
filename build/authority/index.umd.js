(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue-demi")):typeof define=="function"&&define.amd?define(["exports","vue-demi"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.index={},e.VueDemi))})(this,function(e,t){"use strict";function s(){const i=localStorage.getItem("auth");return i?i.split(",").filter(Boolean):[]}const r=["permission"],o=t.defineComponent({name:"DAuthority",props:r,setup(i,{slots:n}){const u=s(),f=t.computed(()=>i.permission?u?Array.isArray(i.permission)?i.permission.every(d=>u.includes(d)):u.includes(i.permission):!1:!0);return n.default&&n.default({userPermissions:u}),()=>f.value&&n.default?t.h(n.default):null}});e.DAuthority=o,e.authorityProps=r,e.default=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});