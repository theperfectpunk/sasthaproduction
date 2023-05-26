const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "img", to: "img" },
        { from: "css", to: "css" },
        { from: "js/vendor", to: "js/vendor" },
        { from: "icon.svg", to: "icon.svg" },
        { from: "favicon.ico", to: "favicon.ico" },
        { from: "tile-wide.png", to: "tile-wide.png" },
        { from: "robots.txt", to: "robots.txt" },
        { from: "icon.png", to: "icon.png" },
        { from: "404.html", to: "404.html" },
        { from: "site.webmanifest", to: "site.webmanifest" },
        { from: "tile.png", to: "tile.png" },
      ],
    }),
  ],
});
