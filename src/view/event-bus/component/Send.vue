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
  created() {
    this.$on('fo1', () => {
      console.log('122121')
    })
  },
  methods: {
    handleSend() {
      console.log(111, this)
      this.$bus.$emit('foo', '我是来自兄弟组件的信息')
      this.$emit('fo1')
    }
  }
}
</script>
