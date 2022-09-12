## 介绍

React SPA 应用模板，已引入常用 loader 和 plugin

使用 ESBuild 编译，速度快如闪电 🌩

支持 HMR 热更新

|  配置项  | 是否支持 |
| :------: | :------: |
|   CSS    |    ✅    |
| PostCSS  |    ✅    |
|  assets  |    ✅    |
|   Less   |    ✅    |
| jsx/tsx  |    ✅    |
|   HMR    |    ✅    |
| prettier |    ✅    |

### Loader

css loader \
style loader \
less loader \
PostCSS loader \
file loader \
url loader \
esbuild loader

### Plugin

html webpack plugin \
clean webpack plugin

## 运行

### 安装依赖

```shell
pnpm i
```

### 构建

以 src/index.js 作为入口打包，生成 dist

```shell
pnpm run build
```

### 启动

```shell
pnpm dev
```
