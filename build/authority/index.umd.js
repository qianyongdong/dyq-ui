(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue-demi"),require("vue")):typeof define=="function"&&define.amd?define(["exports","vue-demi","vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.index={},e.VueDemi))})(this,function(e,t){"use strict";function s(){const i=localStorage.getItem("auth");return i?i.split(",").filter(Boolean):[]}const r=["permission"],o=t.defineComponent({name:"DAuthority",props:r,setup(i,{slots:u}){const n=s(),f=t.computed(()=>i.permission?n?Array.isArray(i.permission)?i.permission.every(d=>n.includes(d)):n.includes(i.permission):!1:!0);return u.default&&u.default({userPermissions:n}),()=>f.value&&u.default?t.h(u.default):null}});e.DAuthority=o,e.authorityProps=r,e.default=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
