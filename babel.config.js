module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: {
          version: '3.8',
          proposals: false,
        },
        targets: {
          ie: 11,
        },
      },
    ],
    ['@babel/preset-react'],
  ],
  plugins: ['react-hot-loader/babel']
};
