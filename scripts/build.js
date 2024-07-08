const path = require("path")
const fs = require("fs")
const fsExtra = require("fs-extra")
// 引入 vite 的 build 方法，进行编译构建
const { defineConfig, build } = require("vite")
const vue = require("@vitejs/plugin-vue")
const vueJSX = require("@vitejs/plugin-vue-jsx")
const version = require("../package.json").version

// 基础配置
const baseConfig = defineConfig({
    publicDir: false,
    plugins: [vue(), vueJSX()]
})
const rollupOptions = defineConfig({
    // that shouldn't be bundled
    external: ["vue"],
    globals: {
        vue: "Vue"
    }
})
// 组件库全局入口
const componentsDir = path.resolve(__dirname, "../packages/components")
// 输出目录
const outputDir = path.resolve(__dirname, "../build")
// 生成 package.json
const createPackageJson = name => {
    const fileStr = `{
    "name": "${name ? name : "dyq-ui"}",
    "version": "${version}",
    "description": "兼容vue2和vue3的通用组件库",
    "main": "index.umd.js",
    "module":"index.mjs",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/qianyongdong/dyq-ui.git"
    },
    "keywords": ["vue", "组件库", "UI"],
    "author": "qianyongdong",
    "license": "ISC"
  }
  `
    // 单个组件 or 全量
    const filePath = path.resolve(
        outputDir,
        name ? `${name}/package.json` : `package.json`
    )

    fsExtra.outputFile(filePath, fileStr, "utf-8")
}

/** 单组件按需构建 */
const buildSingle = async name => {
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
                rollupOptions,
                outDir: path.resolve(outputDir, name)
            }
        })
    )

    createPackageJson(name)
}

/** 全量构建 */
const buildAll = async () => {
    await build(
        defineConfig({
            ...baseConfig,
            build: {
                lib: {
                    entry: componentsDir,
                    name: "index",
                    fileName: "index",
                    formats: ["es", "umd"]
                },
                rollupOptions,
                outDir: outputDir
            }
        })
    )

    createPackageJson()
}

// copy文件
// README.md
// 样式 index.css
const copyFiles = () => {
    const markdown = fs.createReadStream(path.resolve(__dirname, "../README.md"))
    const style = fs.createReadStream(
        path.resolve(__dirname, "../packages/theme-chalk/src/index.css")
    )
    markdown.pipe(
        fs.createWriteStream(path.resolve(__dirname, "../build/README.md"))
    )
    style.pipe(
        fs.createWriteStream(path.resolve(__dirname, "../build/index.css"))
    )
}

const buildLib = async () => {
    await buildAll()

    // 按需打包
    fsExtra
        .readdirSync(componentsDir)
        .filter(name => {
            // 获取组件的目录
            const componentDir = path.resolve(componentsDir, name)
            const isDir = fsExtra.lstatSync(componentDir).isDirectory()
            return isDir && fsExtra.readdirSync(componentDir).includes("index.ts")
        })
        .forEach(async name => {
            await buildSingle(name)
        })

    copyFiles()
}

buildLib()
