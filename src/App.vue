<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <carousel>
      <carousel-item>
        组件插槽
      </carousel-item>
    </carousel>
    <el-button type="primary" @click="handleAsyncDialog">打开异步组件弹窗</el-button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AsyncDialog from "@/components/async-dialog/index.vue";
import createAsyncDialog from "@/utils/creatAsyncDialog";

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    async handleAsyncDialog() {
      const res = createAsyncDialog(AsyncDialog, this)
      console.log('AsyncDialog', AsyncDialog)
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
