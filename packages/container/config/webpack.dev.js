const { merge } = require('webpack-merge');
const ModuleFdertionPlugin = require('webpack/lib/container/ModuleFederationPlugin'); 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devServer:{
        port: 8080,
        historyApiFallback: {
            index: 'index.htnk'
        }
    },
    plugins: [
        new ModuleFdertionPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: packageJson.dependencies,
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
};

module.exports = merge(commonConfig, devConfig);