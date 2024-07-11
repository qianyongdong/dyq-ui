import { DViewer } from './viewer';
import { DList } from './list';
import { App, isVue3 } from 'vue-demi'; // 使用 vue-demi

const components: any[] = [DViewer, DList];

const makeInstaller = (components: any[]) => {
  const install = (app: App) => {
    components.forEach((component) => {
      // Vue 3
      if (isVue3) {
        app.use(component);
      } else {
        // Vue 2
        (component as any).install(app);
      }
    });
  };

  return {
    install,
  };
};

export default makeInstaller([...components]);
