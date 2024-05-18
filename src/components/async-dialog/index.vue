<template>
  <el-dialog title="我是异步弹窗" :visible="visible">
    <div slot="footer">
      <el-button type="primary" @click="handleSave">保存</el-button>
      <el-button type="primary" @click="handleClose">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      visible: true
    }
  },
  methods: {
    handleSave() {
      this.visible = false
      this.$emit('save')
    },
    handleClose() {
      this.visible = false
      document.body.removeChild(this.$el)
      this.$emit('close')
    }
  }
}
</script>
