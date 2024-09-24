const {defineConfig} = require('@vue/cli-service')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
//defineConfig :获取类型提示
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
        openAnalyzer: false, // 是否自动打开报告页面
        analyzerPort: 9999 // 报告页面端口
      })
    ]
  }
})
