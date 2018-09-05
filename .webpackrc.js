const path = require('path');

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  ignoreMomentLocale: true,
  html: {
    template: './src/index.ejs',
    favicon: './public/favicon.ico'
  },
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
  proxy: {
    '/api': {
      target: 'http://yuzm.dev.vart.cc/api',
      // target: 'http://172.16.1.200:1234',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
};
