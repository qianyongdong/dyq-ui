import { shallowRef } from 'vue-demi';
import type { ComponentPublicInstance } from 'vue';

export type TemplateRef = {
  (target: Element | ComponentPublicInstance | null): void;
  value: HTMLElement | ComponentPublicInstance | null | undefined;
  readonly el: HTMLElement | undefined;
};
export function refElement(
  obj?: ComponentPublicInstance<any> | HTMLElement
): HTMLElement | undefined {
  if (obj && '$el' in obj) {
    const el = obj.$el as HTMLElement;
    if (el?.nodeType === Node.TEXT_NODE) {
      // Multi-root component, use the first element
      return el.nextElementSibling as HTMLElement;
    }
    return el;
  }
  return obj as HTMLElement;
}

export function templateRef() {
  const el = shallowRef<HTMLElement | ComponentPublicInstance | null>();
  const fn = (target: HTMLElement | ComponentPublicInstance | null) => {
    el.value = target;
  };
  Object.defineProperty(fn, 'value', {
    enumerable: true,
    get: () => el.value,
    set: (val) => (el.value = val),
  });
  Object.defineProperty(fn, 'el', {
    enumerable: true,
    get: () => refElement(el.value),
  });

  return fn as TemplateRef;
}
