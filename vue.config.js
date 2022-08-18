const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist', //build输出目录
  publicPath: './', //相对路径
  productionSourceMap: false,
  assetsDir: 'assets', //静态资源目录
  lintOnSave: false, //是否开启eslint
  devServer: {
    port: 8300, //端口
  },

  chainWebpack(config) {
    config.plugin('html').tap((args) => { //标题
      args[0].title = '1';
      return args;
    })
  },
})
