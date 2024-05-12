import Vue from 'vue'
import App from './App.vue'
import JsppUI from "@/libs/jspp-ui";
Vue.config.productionTip = false

Vue.use(JsppUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
