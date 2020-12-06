//@ts-check

'use strict';

const path = require('path');

/**@type {import('webpack').Configuration}*/
const config = {
    // VS Code 插件运行于 Node.js 上下文中
    //   -> https://webpack.js.org/configuration/node/
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    // 插件的运行入口。
    //   -> https://webpack.js.org/configuration/entry-context/
    entry: './src/extension.ts',
    // 我们将打包后的文件保存于 'dist' 目录下
    //   -> https://webpack.js.org/configuration/output/
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'extension.js',
        libraryTarget: "commonjs2",
        devtoolModuleFilenameTemplate: "../[resource-path]",
    },
    externals: {
        // 'vscode'模块由 VS Code 运行时提供，可以将其排除避免打包文件过大
        //   -> https://webpack.js.org/configuration/externals/
        vscode: "commonjs vscode",
    },
    devtool: 'source-map',
    // 解析 TypeScript 和 JavaScript 文件
    //   -> https://github.com/TypeStrong/ts-loader
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [{
                loader: 'ts-loader',
            }]
        }]
    },
}
module.exports = config;