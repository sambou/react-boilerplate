var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var loaders = require('./webpack/loaders');
var extensions = require('./webpack/extensions.js');

module.exports = {
    entry: './src/index.tsx',
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
        })
    ],
    module: {
        loaders: loaders
    },
    devtool: 'source-map',
};
