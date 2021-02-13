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
      '/api': {
        target: 'http://52.79.196.61:6150',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
});
