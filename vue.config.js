const {defineConfig} = require('@vue/cli-service')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true
    }
  },

  configureWebpack: {
    plugins: [
      new BundleAnalyzer({
        analyzerMode: process.env.VUE_APP_STAGE === 'LOCAL' ? 'disabled' : 'server', // 本地环境不启用
        openAnalyzer: true, // 是否自动打开报告页面
        analyzerPort: 9999 // 报告页面端口
      })
    ]
  }
})
