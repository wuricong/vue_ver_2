const compiler = require('vue-template-compiler')

// 示例：一个简单的模板字符串
const template = `<div id="app"><p>{{ msg }}</p></div>`

const compiled = compiler.compile(template)
console.log('compiled',compiled)

// log render function
const com = {
  ast: {
    type: 1,
    tag: 'div',
    attrsMap: {id: 'app'},
    rawAttrsMap: {},
    parent: undefined,
    plain: false,
    static: false,
    staticRoot: false
  },
  render: `with(this){return _c('div',{attrs:{"id":"app"}},[_c('p',[_v(_s(msg))])])}`,
  staticRenderFns: [],
  errors: [],
  tips: []
}
// 为什么打散组件实例 方便 render 函数执行时直接取值 with 关键字
