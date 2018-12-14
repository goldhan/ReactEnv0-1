const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    entry: {
        app: [ //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
            '@babel/polyfill',
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:9090',
            'webpack/hot/only-dev-server',
            path.resolve(__dirname, '../src/index.dev.js')
        ]
    },
    resolve: { // 指定第三方库目录，减少webpack寻找时间
        modules: [path.resolve(__dirname, '../node_modules')],
    },
    output: {
        path: path.resolve(__dirname, '../dist'), // 输出的路径
        filename: 'app/[name]_[hash:8].js' // 打包后文件
    },
    module: {
        rules: [{
                enforce: "pre",
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }],
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true,
                    },
                }],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.template.html'),
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: "initial",
                    minChunks: 2
                },
                //第三方组件
                vendor: {
                    test: /node_modules/,
                    chunks: "initial",
                    name: "vendor",
                    priority: 10,
                    enforce: true
                }
            },
        }
    }
}