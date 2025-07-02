<template>
    <router-view></router-view>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      tableData: [
        { name: '张三', age: 2 },
        { name: '张三1', age: 2 },
        { name: '张三2', age: 2 },
        { name: '张三3', age: 2 },
      ],
      formVisible: false,
      formValue: false,
      isSelect: true,
      ob: {
        c: 1,
      },
      num1: 1,
      num2: 2,
      visible: false,
    }
  },
  created() {
    console.log('this', this)
    //获取浏览器书签数据
    // chrome.bookmarks.getTree((bookmarks) => {
    //   console.log('bookmarks', bookmarks)
    // })
  },
  computed: {
    ...mapState({
      info: (state) => state.num,
    }),
    calcCount: {
      get() {
        return this.num1 + this.num2
      },
      set(val) {
        console.log('val', val)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
