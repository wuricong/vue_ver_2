const {defineConfig} = require('@vue/cli-service')
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path');
console.log('path', __dirname)
//defineConfig :获取类型提示
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    open: true, //配置自动打开页面
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8085',
        changeOrigin: true,
        pathRewrite: {  //路径重写！
          '/api': ''
        }
      },
    },
  },

  pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true,
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      }
    },
    plugins: [
      new BundleAnalyzer({
        analyzerMode: process.env.VUE_APP_STAGE === 'LOCAL' ? 'disabled' : 'server', // 本地环境不启用
        openAnalyzer: false, // 是否自动打开报告页面
        // analyzerPort: 9999 // 报告页面端口
      }),
    ],
    optimization:{
      minimize:false
    }
  },
})
