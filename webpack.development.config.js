var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var loaders = require('./webpack/loaders');
var extensions = require('./webpack/extensions.js');

module.exports = {
    entry: ['eventsource-polyfill', 'webpack-hot-middleware/client', './src/index.tsx'],
    output: {
        path: __dirname + '/target',
        filename: 'bundle.js',
        hash: false
    },
    resolve: {
        extensions: extensions
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico'
        }),
        new ExtractTextPlugin('bundle.css'),
        new webpack.ProvidePlugin({
          'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        loaders: loaders
    },
    devtool: 'source-map',
};
