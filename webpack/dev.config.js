const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./base.config.js");
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var config = require("../config");

const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(baseConfig, {
  devServer: {
    contentBase: "dist",
    port: 3000,
    publicPath: "http://localhost:3000/",
    historyApiFallback: true,
    hotOnly: true
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
    chunkFilename: "[name].js",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": config.dev.env
    }),
    new CompressionPlugin({
      algorithm: "gzip"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "detail",
      filename: "index.html",
      template: "./public/index.html",
      // chunks: ['index'],
      // excludeChunks: ['0','1'],
      inject: "body"
    })
  ]
});
