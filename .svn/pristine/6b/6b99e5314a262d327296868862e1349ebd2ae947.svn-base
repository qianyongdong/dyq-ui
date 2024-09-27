import { isVue3 } from 'vue-demi';

const map = new WeakMap();

const directiveHooks = {
  mounted: (isVue3 ? 'mounted' : 'inserted') as 'mounted',
  unmounted: (isVue3 ? 'unmounted' : 'unbind') as 'unmounted',
};

export const vResize = {
  [directiveHooks.mounted](el: HTMLElement) {},
  [directiveHooks.unmounted](el: HTMLElement) {},
};
