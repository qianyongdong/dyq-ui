import { join, dirname } from "path";
import { mergeConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    // "../stories/**/*.mdx",
    // "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/Introduction.mdx",
    "../stories/Installation.mdx",
    "../stories/Components.mdx",
    "../stories/List.stories.js",
    "../stories/Viewer.stories.js",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath('@storybook/addon-themes'),
  ],
  framework: {
    name: getAbsolutePath("@storybook/vue3-vite"),
    options: {
      docgen: 'vue-component-meta',
    },
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      plugins: [vue(), vueJsx()],
    });
  },
};
export default config;
