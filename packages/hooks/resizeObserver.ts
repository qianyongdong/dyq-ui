// Utilities
import { onBeforeUnmount, readonly, ref, watch } from 'vue-demi';
import { templateRef } from '@dyq-ui/utils/helper';
import type { TemplateRef } from '@dyq-ui/utils/helper';
// Types
import type { DeepReadonly, Ref } from 'vue-demi';

export type ContentRect = DeepReadonly<Ref<DOMRectReadOnly | undefined>>;

interface ResizeState {
  resizeRef: TemplateRef;
  contentRect: ContentRect;
}

export function useResizeObserver(
  callback?: ResizeObserverCallback,
  box: 'content' | 'border' = 'content'
): ResizeState {
  const resizeRef = templateRef();
  const contentRect = ref<DOMRectReadOnly>();

  const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
    callback?.(entries, observer);
    if (!entries.length) return;

    if (box === 'content') {
      contentRect.value = entries[0].contentRect;
    } else {
      contentRect.value = entries[0].target.getBoundingClientRect();
    }
  });

  onBeforeUnmount(() => {
    observer.disconnect();
  });

  watch(
    () => resizeRef.el,
    (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(oldValue);
        contentRect.value = undefined;
      }
      if (newValue) observer.observe(newValue);
    },
    {
      flush: 'post',
    }
  );

  return {
    resizeRef,
    contentRect: readonly(contentRect),
  };
}
