// For this project development
import '@vue/runtime-core';

declare module '@vue/runtime-core' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    DViewer: typeof import('../packages/components/viewer/src');
  }

  interface ComponentCustomProperties {}
}

export {};
