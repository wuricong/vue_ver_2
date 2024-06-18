<template>
  <div>
    <el-button type="primary" @click="handleReception">接收</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleReception() {
      this.$bus.$on('foo', (val) => {
        console.log('val', val)
      })
    }
  }
}
</script>
