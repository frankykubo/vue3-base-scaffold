const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      // host: 'localhost',
      // https: false,
      // port: '443',
    },
  },
  outputDir: 'build',
  publicPath: '/',
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.delete('type');
    svgRule.delete('generator');
    svgRule
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
    config
      .plugin('html')
      .tap(args => {
        args[0].template = './public/index.html';
        return args;
      });
  },
});
