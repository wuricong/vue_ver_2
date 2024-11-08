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
    console.log('this1111', this)
    return (
        <div>
          <div>我是jsx{this.text}</div>
          <button onClick={() => this.changeNum.call(this)}>改变状态</button>
          <el-input v-model={this.inputValue}/>
        </div>
    )
  }
}
</script>
