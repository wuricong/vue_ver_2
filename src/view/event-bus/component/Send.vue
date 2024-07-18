<template>
  <div>
    <el-button type="primary" @click="handleSend">发送</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleSend() {
      this.$bus.$emit('foo', '我是来自兄弟组件的信息')
    }
  }
}
</script>
