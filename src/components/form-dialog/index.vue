<template>
  <el-dialog title="表单弹窗" :visible="show" @close="handleClose">
    <el-form :model="form">
      <el-form-item label="表单1">
        <el-input placeholder="请输入内容" v-model="form.context"/>
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="handleClose" type="primary">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Boolean, String],
      default: undefined
    }
  },
  data() {
    return {
      form: {context: undefined},
      show: false
    }
  },
  created() {
    console.log('this11111111', this, this.value,)
  },
  watch: {
    show(val) {
      if (!val) {
        this.$emit('update:visible', false)
      }
    },
    visible(val) {
      this.show = val
    }
  },
  methods: {
    handleClose() {
      this.show = false
    }
  }
}
</script>
