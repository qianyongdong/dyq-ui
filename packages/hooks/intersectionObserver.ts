import { onBeforeUnmount, ref, shallowRef, watch } from 'vue-demi';

export function useIntersectionObserver(
  callback?: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) {
  const intersectionRef = ref<HTMLElement>();
  const isIntersecting = shallowRef(false);

  const observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      callback?.(entries, observer);

      isIntersecting.value = !!entries.find((entry) => entry.isIntersecting);
    },
    options
  );

  onBeforeUnmount(() => {
    observer.disconnect();
  });

  watch(
    intersectionRef,
    (newValue, oldValue) => {
      if (oldValue) {
        observer.unobserve(oldValue);
        isIntersecting.value = false;
      }

      if (newValue) observer.observe(newValue);
    },
    {
      flush: 'post',
    }
  );

  return { intersectionRef, isIntersecting };
}
