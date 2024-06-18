import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import JsppUI from '@/libs/jspp-ui'
import router from './router'
import './components' //组件全局注册
import Test from './view/test/index.vue'
import {Bus} from '@/utils/Bus'
// import { createProvider } from './vue-apollo'

Vue.config.productionTip = false //关闭开发模式下的环境提示
console.log('1111', process.env.BASE_URL, process.env)
setTimeout(() => {
  console.log('Test', Test)
})
Vue.use(JsppUI)
Vue.use(ElementUI)
Vue.prototype.$bus = new Bus()
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
