<template>
  <el-dialog title="我是异步弹窗" :visible="visible">
    <div>我是弹窗内容</div>
    <div slot="footer">
      <el-button type="primary" @click="handleSave">保存</el-button>
      <el-button type="primary" @click="$emit('close')">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {}
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleSave() {
      this.$emit('success')
    }
  }
}
</script>