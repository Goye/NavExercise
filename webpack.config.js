const path = require("path");
const webpack = require('webpack');

module.exports = {
  entry: ["./app/main.js"],
  output: {
    path: path.resolve(__dirname, "./public/js"),
    filename: "bundle.js"
  },
  devtool: "sourcemap",
  module: {
    rules: [
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
  }
};