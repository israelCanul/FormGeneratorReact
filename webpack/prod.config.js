const webpack = require("webpack");

const merge = require("webpack-merge");
const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const baseConfig = require("./base.config.js");
var config = require("../config");

const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(baseConfig, {
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
  optimization: {
    splitChunks: {
      chunks: "async"
    },
    minimizer: [
      // we specify a custom UglifyJsPlugin here to get source maps in production
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 6,
          mangle: true
        },
        sourceMap: false
      })
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": config.build.env
    }),
    new CompressionPlugin({
      algorithm: "gzip"
    }),
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
