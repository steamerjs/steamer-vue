# steamer-vue
一个针对vue的脚手架

[![NPM Version](https://img.shields.io/npm/v/steamer-vue.svg?style=flat)](https://www.npmjs.com/package/steamer-vue)
[![Deps](https://david-dm.org/SteamerTeam/steamer-vue.svg)](https://david-dm.org/SteamerTeam/steamer-vue)

## 使用

```javascript
// 安装依赖
npm i

// 开发
npm start
// 打开链接
127.0.0.1:[端口号]/[config.route路径]/[html入口]
例如： 127.0.0.1:9000/steamer-vue/index.html

// 代码规范安装
npm i -g eslint
npm i -g stylelint
// 代码规范扫描
npm lint

// 生产代码生成
npm run dist

```


## 基本配置

打开 config/project.js进行以下基本配置:

```javascript
* `config.webserver`  html的链接
* `config.cdn`  cdn的链接
* `config.port`  开发环境服务器端口
* `config.route` 开发环境访问的路径
```


## 详细文档
* [Basic Configuration 基本配置](https://github.com/SteamerTeam/steamer-vue/wiki/Basic-Configuration-%08%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE)
* [Folder Structure 目录结构](https://github.com/SteamerTeam/steamer-vue/wiki/Folder-Structure-%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)
* [SPA Development 多页开发](https://github.com/SteamerTeam/steamer-vue/wiki/SPA-Development---%E5%A4%9A%E9%A1%B5%E5%BC%80%E5%8F%91)
* [Style & Sprites 样式与合图](https://github.com/SteamerTeam/steamer-vue/wiki/Style-&-Sprites---%E6%A0%B7%E5%BC%8F%E4%B8%8E%E5%90%88%E5%9B%BE)


## 文章参考
* [webpack使用优化（基本篇）](https://github.com/lcxfs1991/blog/issues/2)
* [webpack Performance: The Comprehensive Guide](https://github.com/lcxfs1991/blog/issues/15)
