/* eslint-disable import/no-extraneous-dependencies */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (config, nconf) => {
  const srcDir = nconf.get('webpack.srcDir');
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: `./${srcDir}/html/index.html`,
      filename: './index.html',
    }),
  );
};
