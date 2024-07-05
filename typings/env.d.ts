import { VNode } from 'vue';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass {
      $props: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module '@vue/runtime-core' {
  const INSTALLED_KEY = Symbol('INSTALLED_KEY');
  export interface App {
    [INSTALLED_KEY]?: boolean;
  }
}
declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.bmp' {
  const value: string;
  export default value;
}
declare module '*.tif' {
  const value: string;
  export default value;
}
declare module '*.pdf' {
  const value: string;
  export default value;
}
export {};
