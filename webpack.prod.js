const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    concatenateModules: true,
  },
  plugins: [new CompressionPlugin()],
});
