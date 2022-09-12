## 介绍

React SPA 应用模板，已引入常用 loader 和 plugin

使用 ESBuild 编译 TSX / JSX / TS 文件，速度快如闪电 🌩

支持 HMR 热更新

|  配置项   | 是否支持 |
| :-------: | :------: |
|    CSS    |    ✅    |
|  PostCSS  |    ✅    |
|  assets   |    ✅    |
|   Less    |    ✅    |
| JSX / TSX |    ✅    |
|    HMR    |    ✅    |
| Prettier  |    ✅    |

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

在浏览器中打开 http://localhost:9000
