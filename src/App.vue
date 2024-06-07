<template>
  <div id="app">
    <ApolloExample msg="Welcome to Your Vue.js App"/>
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
import ApolloExample from './components/ApolloExample.vue'
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
    ApolloExample,
    formDialog,
  },
  methods: {
    async handleAsyncDialog() {
      try {
        const res = await createAsyncDialog(ApolloExample)
        console.log('AsyncDialog', AsyncDialog)
      } catch (e) {
        console.log('e', e)
      }

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
