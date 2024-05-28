import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import JsppUI from '@/libs/jspp-ui'

import './components' //组件全局注册

Vue.config.productionTip = false //关闭开发模式下的环境提示
console.log('1111', process.env.BASE_URL, process.env)
Vue.use(JsppUI)
Vue.use(ElementUI)
new Vue({
  render: (h) => h(App)
}).$mount('#app')
