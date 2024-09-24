<template>
  <div id="app">
    <!--    <ApolloExample msg="Welcome to Your Vue.js App"/>-->
    <carousel>
      <carousel-item>
        组件插槽
      </carousel-item>
    </carousel>
    <el-button type="primary" @click="handleAsyncDialog">打开异步组件弹窗</el-button>
    <el-button type="primary" @click="handleFormDialog">打开表单组件弹窗</el-button>
    <form-dialog @change="handleChange" v-model="formValue" :visible.sync="formVisible"/>
    <!-- 自定义输入框组件-->
    <customCheck :isSelect="isSelect" @getValue="getValue" v-model="isSelect"/>
    <anchored-heading level="2">
      <div>111</div>
    </anchored-heading>
    <EventBus/>
    <JsxTest/>
    <div>{{ ob.c }}</div>
  </div>
</template>

<script>
import ApolloExample from './components/ApolloExample.vue'
import AsyncDialog from "@/components/async-dialog/index.vue";
import createAsyncDialog from "@/utils/creatAsyncDialog";
import formDialog from '@/components/form-dialog/index.vue'
import customCheck from "@/components/custom-check/index.vue";
import EventBus from "@/view/event-bus/index.vue";
import JsxTest from "@/view/jsx-test/index.vue";

export default {
  name: 'App',
  data() {
    return {
      formVisible: false,
      formValue: false,
      isSelect: true,
      ob: {
        c: 1
      }
    }
  },
  components: {
    formDialog,
    customCheck,
    EventBus,
    JsxTest
  },
  mounted() {
    console.log('this.ob', this.ob,)
    console.log('this.data', this.data)
  },
  methods: {
    async handleAsyncDialog() {
      try {
        const res = await createAsyncDialog(AsyncDialog)
        console.log('AsyncDialog', AsyncDialog)
      } catch (e) {
        console.log('e', e)
      }

    },
    handleFormDialog() {
      this.formVisible = true
    },
    handleChange() {
      console.log(11)
    },
    getValue() {
      console.log(9999, this.isSelect)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
