var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var loaders = require('./webpack/loaders.js');
var extensions = require('./webpack/extensions.js');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/target',
        filename: 'bundle.[hash].js',
        hash: true
    },
    resolve: {
        extensions: extensions
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/favicon.ico'
        }),
        new ExtractTextPlugin('bundle.[hash].css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        })
    ],
    module: {
        loaders: loaders
    }
};
