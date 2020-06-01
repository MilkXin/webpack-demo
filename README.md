### webpack 环境配置 demo

- 安装依赖 `npm install webpack webpack-cli html-webpack-plugin webpack-dev-server @babel/core @babel/preset-env babel-loader -D`

- 配置.babelrc 文件

```
{
  "presets": ["@babel/preset-env"]
}
```

- 配置 webpack.config.js 文件

```
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ],
    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, 'dist')
    }
}
```

- 配置生产环境文件 webpack.prod.js

```
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        filename: 'bundle.[contenthash].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ]
}
```

- 配置启动命令 package.json

```
"scripts": {
    "dev": "webpack-dev-server",
    "build": "webpack --config webpack.prod.js"
  }
```
