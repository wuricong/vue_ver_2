import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    component: () => import('@/layouts/index.vue'),
    children: [{ path: 'home', component: () => import('@/view/home/index.vue') }],
  },
  { path: '/router', name: '路由' },
  {
    path: '/bg-video',
    component: () => import('@/view/bg-video'),
    name: '壁纸',
  },
]

export default new VueRouter({ routes })
