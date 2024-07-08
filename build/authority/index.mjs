import { defineComponent as u, computed as o, h as s } from "vue-demi";
function a() {
  const e = localStorage.getItem("auth");
  return e ? e.split(",").filter(Boolean) : [];
}
const l = ["permission"], m = u({
  name: "DAuthority",
  props: l,
  setup(e, { slots: t }) {
    const r = a(), i = o(() => e.permission ? r ? Array.isArray(e.permission) ? e.permission.every((n) => r.includes(n)) : r.includes(e.permission) : !1 : !0);
    return t.default && t.default({ userPermissions: r }), () => i.value && t.default ? s(t.default) : null;
  }
});
export {
  m as DAuthority,
  l as authorityProps,
  m as default
};
