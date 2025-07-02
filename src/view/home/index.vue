<template>
  <div id="app">
    <PopupDown />
    <carousel>
      <carousel-item> 组件插槽 </carousel-item>
    </carousel>
    <el-button size="small" type="primary" @click="handleAsyncDialog">打开异步组件弹窗</el-button>
    <el-button size="small" type="primary" @click="handleFormDialog">打开表单组件弹窗</el-button>
    <form-dialog @change="handleChange" v-model="formValue" :visible.sync="formVisible" />
    <!-- 自定义输入框组件-->
    <customCheck :isSelect="isSelect" @getValue="getValue" v-model="isSelect" />
    <anchored-heading level="2">
      <div>111</div>
    </anchored-heading>
    <EventBus />
    <JsxTest data="1" />
    <div>{{ ob.c }}</div>
    <el-button size="small" type="primary" @click="handleReq">发请求</el-button>
    <router-view></router-view>
    <el-button type="primary" @click="handleToWallpaper" size="small">壁纸</el-button>
    <div>store-test</div>
    <div>{{ info }}</div>
    <el-button type="primary" size="small" @click="handleNumAdd">自增</el-button>
    <div>设置计算属性</div>
    <el-button type="primary" size="small" @click="handleSetComputed">设置计算属性</el-button>
    <div>{{ calcCount }}</div>
    <el-button @click="openDialog" size="mini">打开弹窗</el-button>
    <el-dialog append-to-body width="100%" title="弹窗" class="custom-dialog" :visible="visible"> 111 </el-dialog>
    <el-button size="mini" @click="handleFullNameChange">改变 fullName</el-button>
    <component :is="customH()" />
    <slot-component title="测试插槽组件">
      <template v-slot:test> </template>
    </slot-component>
  </div>
</template>
<script>
import formDialog from '@/components/form-dialog/index.vue'
import customCheck from '@/components/custom-check/index.vue'
import EventBus from '@/view/event-bus/index.vue'
import JsxTest from '@/view/jsx-test/index.vue'
import PopupDown from '@/layouts/popup-down.vue'
import SlotComponent from '@/components/slot-component/index.vue'
import createAsyncDialog from '@/utils/creatAsyncDialog'
import AsyncDialog from '@/components/async-dialog/index.vue'
import axios from 'axios'
import {mapState} from "vuex";
export default {
  components: {
    PopupDown,
    formDialog,
    customCheck,
    EventBus,
    JsxTest,
    SlotComponent,
  },
  data() {
    return {
      formVisible: false,
      formValue: false,
      isSelect: true,
      ob: {
        c: 1,
      },
      num1: 1,
      num2: 2,
      visible: false,
    }
  },
  computed: {
    ...mapState({
      info: state => state.num
    }),
    calcCount:{
      get(){
        return this.num1 + this.num2
      },
      set(val){
        console.log('val',val)
      }
    }
  },
  methods: {
    handleChange() {
      console.log(11)
    },
    getValue() {
      console.log(9999, this.isSelect)
    },
    customH() {
      return {
        render(h1) {
          console.log('h1', h1)
          return h1('div', { style: { color: 'red' } }, '999')
        },
      }
    },
    handleFullNameChange() {
      this.fullName = '1'
    },
    openDialog() {
      this.visible = true
    },
    async handleAsyncDialog() {
      try {
        const res = await createAsyncDialog(AsyncDialog)
        console.log('AsyncDialog', AsyncDialog)
      } catch (e) {
        console.log('e', e)
      }
    },
    handleNumAdd() {
      this.$store.commit('updateInfo', 1)
    },
    handleSetComputed() {
      this.calcCount = 9
    },
    handleFormDialog() {
      this.formVisible = true
    },
    handleReq() {
      axios('/api')
        .then((res) => {
          console.log('res', res)
        })
        .catch((e) => {
          console.log('e', e)
        })
    },
    handleToWallpaper() {
      this.$router.push('bg-video')
    },
  },
}
</script>
