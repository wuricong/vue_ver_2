import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/custom-element.scss'
import JsppUI from '@/libs/jspp-ui'
import router from './router'
import './components' //组件全局注册
import Test from './view/test/index.vue'
import {Bus} from '@/utils/Bus'
import '@/styles/index.scss'

Vue.config.productionTip = false //关闭开发模式下的环境提示
//获取环境变量
console.log('process.env', process.env)
setTimeout(() => {
  console.log('Test', Test)
})
Vue.use(JsppUI)
Vue.use(ElementUI)
Vue.prototype.$bus = new Bus()
new Vue({
  router,
  store,
  render: (h) => {
    const app = h(App)
    console.log('app', app)
    return app
  }
}).$mount('#app')
