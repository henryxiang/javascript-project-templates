const HtmlWebpackPlugin = require('html-webpack-plugin');

const config =   {
  entry: ['./app/index.js'],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
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