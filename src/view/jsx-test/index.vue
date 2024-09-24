<script>
export default {
  name: 'jsx-component',
  data() {
    return {
      text: '测试jsx'
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
          <button onClick={() => this.changeNum.call(this)}>改变状态</button>
        </div>
    )
  }
}
</script>
