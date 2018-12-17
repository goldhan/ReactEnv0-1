# ReactEnv0-1

从0开始搭建React开发环境，笔记

## 目录

``` tree
├── README.md
├── bin
│   └── dev-server.js // webpack server 配置文件
├── node_modules // npm 安装的插件文件
├── package.json // npm 安装的插件后生成配置文件
├── .babelrc // babel 配置文件
├── .eslintignore // eslint 要忽略语法检查的配置文件
├── .eslintrc.js // eslint 配置文件
├── src
│   ├── App.js // 组件
│   ├── index.dev.js // dev 环境下的入口文件
│   ├── index.pro.js // pro 环境下的入口文件
│   └── index.template.html // 入口文件模板
└── webpack
    ├── webpack.dev.config.js // dev 环境webpack配置文件
    └── webpack.pro.config.js // pro 环境webpack配置文件

```

## NPM

### npm install -g xxx

全局安装插件

### npm install --save xxxx

dependencies表示我们要在生产环境下使用该依赖

### npm install --save-dev xxxx

devDependencies表示我们仅在开发环境使用该依赖

## package.json

``` json
{
  "scripts": { // npm run xxx
    "dev": "node bin/dev-server", // 运行 bin/dev-server js 文件，服务器
    "build": "npm run clean && webpack --config webpack/webpack.pro.config.js", // 清理并进行生产环境打包
    "devbuild": "npm run clean && webpack --config webpack/webpack.dev.config.js", // 清理并进行开发环境打包
    "clean": "rimraf dist" // 先清理之前的打包文件
  },
  "dependencies": { // 生产环境
    "@babel/polyfill": "^7.0.0", // 呃，我也不知道是啥，补丁？
    "react": "^16.6.3", // react 必备
    "react-dom": "^16.6.3", // react 必备
    "webpack-dev-server": "^3.1.10" // webpack server
  },
  "devDependencies": { // 开发环境
    "@babel/core": "^7.2.0",  // babel 必备
    "@babel/preset-env": "^7.2.0", // babel 必备
    "@babel/preset-react": "^7.0.0", // babel 必备
    "babel-eslint": "^10.0.1", // 语法检查
    "babel-loader": "^8.0.4", // babel 入口 webpack里用
    "eslint": "^5.10.0", // eslint 必备
    "eslint-config-airbnb": "^17.1.0", // eslint 使用airbnb的规范
    "eslint-loader": "^2.1.1", // 支持 eslint 检查的入口 webpack里用
    "eslint-plugin-babel": "^5.3.0", // eslint 必备
    "eslint-plugin-import": "^2.14.0", // eslint 插件
    "eslint-plugin-jsx-a11y": "^6.1.2", // eslint 插件
    "eslint-plugin-promise": "^4.0.1", // eslint 插件
    "eslint-plugin-react": "^7.11.1", // eslint 插件
    "html-webpack-plugin": "^3.2.0", // 通过模板来生成一些入口页面文件
    "react-hot-loader": "^4.6.0", // 开发环境中，启用热重载
    "style-loader": "^0.23.1", // 样式读取插件 webpack里用
    "uglifyjs-webpack-plugin": "^2.0.1", // 代码压缩
    "webpack": "^4.27.1", // webpack 打包。。。
    "webpack-cli": "^3.1.2" // webpack需要的工具链
  }
}
```