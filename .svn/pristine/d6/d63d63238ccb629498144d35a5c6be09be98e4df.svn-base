import { isVue3 } from 'vue-demi';

const directiveHooks = {
  mounted: (isVue3 ? 'mounted' : 'inserted') as 'mounted',
  unmounted: (isVue3 ? 'unmounted' : 'unbind') as 'unmounted',
};

const DISTANCE = 100;
const DURATION = 500;

const map = new WeakMap();
const ob = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 出现在视口中
        const animation = map.get(entry.target);
        animation && animation.play();
        ob.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: `-${DISTANCE}px 0px -${DISTANCE}px 0px`,
    threshold: 0,
    root: null,
  }
);

const isBelowViewport = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return rect.top - window.innerHeight > 0;
};

export const vSlideIn = {
  [directiveHooks.mounted](el: HTMLElement) {
    if (!isBelowViewport(el)) return;
    const animation = el.animate(
      [
        {
          transform: `translateY(${DISTANCE}px)`,
        },
        {
          transform: 'translateY(0)',
          opacity: 1,
        },
      ],
      {
        duration: DURATION,
        easing: 'ease-out',
        fill: 'forwards',
      }
    );
    animation.pause();
    map.set(el, animation);
    ob.observe(el);
  },
  [directiveHooks.unmounted](el: HTMLElement) {
    ob.unobserve(el);
  },
};
