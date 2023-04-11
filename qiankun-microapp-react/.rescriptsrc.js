const { name } = require('./package');
const path = require('path');

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    // config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    // 配置src别名
    config.resolve.alias = {
      "@": path.resolve(__dirname, './src'),
    }

    return config;
  },

  devServer: (_) => {
    const config = _;

    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    // config.watchContentBase = false;
    config.liveReload = false;

    config.proxy = {
      '/api': {
        target: 'https://proapi.azurewebsites.net/',
        secure: false,
        changeOrigin: true,
      },
    }

    return config;
  },
};