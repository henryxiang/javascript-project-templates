/* eslint-disable import/no-extraneous-dependencies */

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['./app/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/html/index.html',
      filename: './index.html'
    })
  ]
};

module.exports = config;
