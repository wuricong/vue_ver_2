import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


export const routes = [{path: '/router', name: '路由'}, {
  path: '/bg-video', component:
    () => import('@/view/bg-video')
  , name: '壁纸'
}]

export default new VueRouter({routes})
