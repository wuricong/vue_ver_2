<template>
<el-dialog :visible="visible">
  自定义弹窗测试
</el-dialog>
</template>
<script>
export default {
  model:{
    prop:'value',
    event:'input'
  },
  data(){
    return {
      visible:false,
    }
  }
}
</script>
