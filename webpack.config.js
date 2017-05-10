const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  context: path.resolve(__dirname, './app'),
  entry: {
    app: './main.js'
  },
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/public',
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
          use: ['css-loader', 'sass-loader'],
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
      title: 'Challenges',
      hash: true,
      template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'main.css',
      allChunks: true
    })
  ]
}

module.exports = config
