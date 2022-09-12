## 介绍
React SPA应用模板，已引入常用loader和plugin

使用ESBuild编译，速度快如闪电🌩

支持HMR热更新

| 配置项  |  是否支持 |
|:-:|:-:|
| CSS  |  ✅  |
|  PostCSS |  ✅  |
| assets  | ✅  |
| Less  |  ✅  |
| jsx/tsx  |  ✅  |
| HMR |  ✅  |


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
以src/index.js作为入口打包，生成dist
```shell
pnpm run build
```

### 启动
```shell
pnpm dev
```
