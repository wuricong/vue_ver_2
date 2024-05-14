import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import JsppUI from "@/libs/jspp-ui";

Vue.config.productionTip = false

Vue.use(JsppUI)
Vue.use(ElementUI)
new Vue({
    render: h => {
        console.log('h', h)
        return h(App)
    },
}).$mount('#app')
