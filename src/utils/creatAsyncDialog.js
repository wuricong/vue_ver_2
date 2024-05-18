import Vue from 'vue'
import AsyncDialog from '@/components/async-dialog/index.vue'

/**
 * @params c:传入的无状态组件
 * */
export default function createAsyncDialog(c) {
  return new Promise((resolve, reject) => {
    const newInstance = Vue.extend(c)
    const com = new newInstance()
    const vm = new Vue({
      render: (h) => h(AsyncDialog, {
        on: {
          save() {
            resolve(11)
          },
          close() {
            console.log('close')
            reject()
          }
        }
      }),
    })
    document.body.appendChild(vm.$mount().$el)
    vm.$nextTick(() => {
      const el = vm.$el.querySelector('.el-dialog__body')
      el.appendChild(com.$mount().$el)
    })
  })
}
