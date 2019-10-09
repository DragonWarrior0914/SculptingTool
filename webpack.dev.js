var path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
    proxy: {
      '/system/*': 'http://localhost:3000',
      '/api/v1/*': 'http://localhost:3000'
    }
  }
});