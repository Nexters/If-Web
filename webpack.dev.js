const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  entry: ['react-hot-loader/patch', './src/index.tsx'],
  devtool: 'inline-cheap-module-source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    overlay: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
});
