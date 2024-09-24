import Vue from 'vue'
import AsyncDialog from '@/components/async-dialog/index.vue'

/**
 * @params c:传入的无状态组件
 * */
export default function createAsyncDialog(c) {
  return new Promise((resolve, reject) => {
    //返回的是一个函数
    const newInstance = Vue.extend(c)
    const com = new newInstance()

    function handleDialog(vm, state) {
      const {$children} = vm
      $children[0][state]()
    }

    const vm = new Vue({
      render: (h) => h(AsyncDialog, {
        on: {
          save: () => {
            handleDialog(vm, 'close')
            resolve()
          },
          close() {
            handleDialog(vm, 'close')
            reject()
          }
        }
      }),
    })
    document.body.appendChild(vm.$mount().$el)
    handleDialog(vm, 'open')
    vm.$nextTick(() => {
      const el = vm.$el.querySelector('.el-dialog__body')
      el.appendChild(com.$mount().$el)
    })
  })
}
