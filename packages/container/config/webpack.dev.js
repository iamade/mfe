const { merge } = require('webpack-merge');
const ModuleFdertionPlugin = require('webpack/lib/container/ModuleFederationPlugin'); 

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
      
    ],
};

module.exports = merge(commonConfig, devConfig);