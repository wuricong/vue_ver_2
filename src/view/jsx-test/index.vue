<!-- 当自定义 render 函数中有 template 模版时 会优先渲染template 模板 从而忽略渲染函数  -->

<!--<template>-->
<!--  <div>jsx-test</div>-->
<!--</template>-->
<script>
export default {
  name: 'jsx-component',
  props: {
    data: String
  },
  data() {
    return {
      text: '测试jsx',
      inputValue: ''
    }
  },
  methods: {
    changeNum() {
      this.text = '更改测试'
    }
  },
  render(h) {
    return (
        <div>
          <div>我是jsx{this.text}</div>
          <el-button style="margin-bottom:6px" type="primary" size="small"
                     onClick={() => this.changeNum.call(this)}>改变状态
          </el-button>
          <el-input size="small" v-model={this.inputValue}/>
        </div>
    )
  }
}
</script>
