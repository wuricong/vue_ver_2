<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <carousel>
      <carousel-item>
        组件插槽
      </carousel-item>
    </carousel>
    <el-button type="primary" @click="handleAsyncDialog">打开异步组件弹窗</el-button>
    <el-button type="primary" @click="handleFormDialog">打开表单组件弹窗</el-button>
    <form-dialog :visible.sync="formVisible"/>
    <anchored-heading level="2">
      <div>111</div>
    </anchored-heading>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AsyncDialog from "@/components/async-dialog/index.vue";
import createAsyncDialog from "@/utils/creatAsyncDialog";
import formDialog from '@/components/form-dialog/index.vue'

export default {
  name: 'App',
  data() {
    return {
      formVisible: false
    }
  },
  components: {
    HelloWorld,
    formDialog,
  },
  methods: {
    async handleAsyncDialog() {
      const res = await createAsyncDialog(HelloWorld)
      console.log('AsyncDialog', AsyncDialog)
    },
    handleFormDialog() {
      this.formVisible = true
    },
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
