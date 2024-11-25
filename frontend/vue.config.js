const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    watchFiles: {
      paths: ['src/**/*', 'public/**/*'],
      options: {
        usePolling: true,
        interval: 100,
      },
    },
  },
  configureWebpack: {
    cache: false,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 100,
    },
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      }),
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/styles/custom.scss";`, // Arquivo com variáveis globais
      },
    },
  },
});