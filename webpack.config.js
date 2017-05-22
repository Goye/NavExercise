const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * Using 3 plugins, ExtractTextPlugin, HtmlWebpackPlugin and
 * Webpack to generate a build folder copying HTML File too
 * Included SCSS Compiler, and JSON FIle loader (not used, replaced by Async load)
 * Babel included to implement ES6 Class and Imports
 * Web server with Hot Reload Includedweb
 */ 
const config = {
  context: path.resolve(__dirname, './app'),
  entry: {
    app: './main.js'
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './app')
  },
  devtool: "sourcemap",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
                loader: "css-loader",
                options: {
                    minimize: true
                }
            }, 'sass-loader'],
          publicPath:'/public'
        })
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
      test: /\.js$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['es2015']
          }
        }],
      }
    ]
  },
   plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Huge Nav Exercise',
      hash: false,
      template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'main.css',
      allChunks: true
    })
  ]
}

module.exports = config
