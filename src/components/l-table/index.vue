<template>
  <el-table>
    <el-table-column v-for="(item,index) in sTable" :key="index" :prop="item.prop">{{ item.value }}</el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    sTable: {
      type: Object,
      default: undefined
    }
  },
  data() {
    return {}
  }
}
</script>
