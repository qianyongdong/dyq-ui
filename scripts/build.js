const path = require("path");
const fs = require("fs");
const fsExtra = require("fs-extra");
const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");
const vueJSX = require("@vitejs/plugin-vue-jsx");
// const { viteStaticCopy } = require('vite-plugin-static-copy');
const { version, name } = require("../package.json");
// 基础配置

// const getBaseConfigProxy = () => {
//     let baseConfig = null;
//     return async () => {
//         if (!baseConfig) {
//             const { viteStaticCopy } = await import('vite-plugin-static-copy');
//             baseConfig = defineConfig({
//                 publicDir: false,
//                 plugins: [vue(), vueJSX(),
//                 viteStaticCopy({
//                     targets: [
//                         {
//                             src: path.resolve(__dirname, "../packages/lang-data/*"), // 源路径
//                             dest: 'lang-data', // 输出路径
//                         },
//                     ],
//                 }),
//                 ],
//                 optimizeDeps: {
//                     exclude: ['vue-demi'],
//                 },
//                 build: {
//                     rollupOptions: {
//                         external: ['vue', 'vue-demi'],
//                         output: {
//                             globals: {
//                                 vue: 'Vue',
//                                 'vue-demi': 'VueDemi',
//                             },
//                         },
//                     },
//                 },
//             });
//         }
//         return baseConfig
//     }
// }

// const getBaseConfig = getBaseConfigProxy()

baseConfig = defineConfig({
    publicDir: false,
    plugins: [vue(), vueJSX(),
    ],
    optimizeDeps: {
        exclude: ['vue-demi'],
    },
    build: {
        rollupOptions: {
            external: ['vue', 'vue-demi'],
            output: {
                globals: {
                    vue: 'Vue',
                    'vue-demi': 'VueDemi',
                },
            },
        },
    },
});

const rollupOptions = defineConfig({
    // that shouldn't be bundled
    external: ["vue", 'vue-demi'],
    globals: {
        vue: "Vue",
        'vue-demi': 'VueDemi',
    }
});
// 组件库全局入口
const componentsDir = path.resolve(__dirname, "../packages/components");
// 输出目录
const outputDir = path.resolve(__dirname, `../${name}`);
// 生成 package.json
const createPackageJson = (name) => {
    const fileStr = `{
    "name": "${name ? name : "dyq-ui"}",
    "version": "${version}",
    "description": "兼容vue2和vue3的通用组件库",
    "main": "index.umd.js",
    "module": "index.mjs",
    "types": "index.d.ts",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/qianyongdong/dyq-ui.git"
    },
    "keywords": ["vue", "组件库", "UI"],
    "author": "qianyongdong",
    "license": "ISC",
    "dependencies": {
    "vue-demi": "latest"
    },
    "peerDependencies": {
        "@vue/composition-api": "latest",
        "vue": "^2.0.0 || >=3.0.0"
    },
    "peerDependenciesMeta": {
        "@vue/composition-api": {
            "optional": true
            }
    }
  }
  `;
    // 单个组件 or 全量
    const filePath = path.resolve(
        outputDir,
        name ? `${name}/package.json` : `package.json`
    );

    fsExtra.outputFile(filePath, fileStr, "utf-8");
};

/** 单组件按需构建 */
const buildSingle = async (name) => {
    // const baseConfig = await getBaseConfig()
    await build(
        defineConfig({
            ...baseConfig,
            build: {
                lib: {
                    entry: path.resolve(componentsDir, name),
                    name: "index",
                    fileName: "index",
                    formats: ["es", "umd"]
                },
                rollupOptions: {
                    ...rollupOptions,
                    input: {
                        style: path.resolve(componentsDir, name, 'style/index.ts')
                    },
                    output: {
                        name: 'index',
                    }
                },
                outDir: path.resolve(outputDir, name),
                emptyOutDir: true,
                cssCodeSplit: true,
            }
        })
    );

    createPackageJson(name);
};

/** 全量构建 */
const buildAll = async () => {
    // const baseConfig = await getBaseConfig()
    await build(
        defineConfig({
            ...baseConfig,
            publicDir: path.resolve(__dirname, "../packages/public"),
            build: {
                lib: {
                    entry: componentsDir,
                    name: "index",
                    fileName: "index",
                    formats: ["es", "umd"]
                },
                rollupOptions,
                outDir: outputDir,
            }
        })
    );

    createPackageJson();
};

// copy文件
// README.md
// 样式 index.css
const copyFiles = () => {
    const markdown = fs.createReadStream(path.resolve(__dirname, "../README.md"));
    const style = fs.createReadStream(
        path.resolve(__dirname, "../packages/theme-chalk/src/index.css")
    );
    markdown.pipe(
        fs.createWriteStream(path.resolve(outputDir, "./README.md"))
    );
    style.pipe(
        fs.createWriteStream(path.resolve(outputDir, "./index.css"))
    );
};

const buildLib = async () => {
    await buildAll();

    // 按需打包
    fsExtra
        .readdirSync(componentsDir)
        .filter(name => {
            // 获取组件的目录
            const componentDir = path.resolve(componentsDir, name);
            const isDir = fsExtra.lstatSync(componentDir).isDirectory();
            return isDir && fsExtra.readdirSync(componentDir).includes("index.ts");
        })
        .forEach(async name => {
            await buildSingle(name);
        });

    copyFiles();
};

buildLib();
