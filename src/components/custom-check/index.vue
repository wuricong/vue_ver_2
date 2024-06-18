<template>
  <div>
    <!--    <el-select v-model="value">-->
    <!--      <el-option v-for="i in list" :key="i.id" :value="i.name"/>-->
    <!--    </el-select>-->
    <div>
      <input @change="handleChange" checked :value="isSelect" name="scales" type="checkbox"/>
      <label for="scales">Scales</label>
      <div>{{ value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  // model: {
  //   prop: 'isSelect',
  //   event: 'handleChange'
  // },
  props: {
    value: String,
    isSelect: {
      type: [Boolean, String, Number],
      default: false
    },
  },
  created() {
    console.log('custom', this)
  },
  data() {
    return {
      list: [
        {name: '选项1', id: 1},
        {name: '选项2', id: 2},
        {name: '选项3', id: 3},
        {name: '选项4', id: 4}
      ],
      checkList: [
        {name: '选项5', id: 1},
      ]
    }
  },
  methods: {
    handleChange() {
      this.$emit('getValue')
      this.$emit('input', 111)
    }
  }
}
</script>
