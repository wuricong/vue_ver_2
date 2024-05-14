import Vue from 'vue'

/**
 * @params c:传入的组件
 * */
export default function createAsyncDialog(c, t) {
    console.log('c', c, t)
    new Promise((resolve, reject) => {
        new Vue({
            render: function (createElement) {
                console.log('createElement', createElement)
                const VNode = createElement(c, {
                    props: {
                        visible: true
                    },
                    on: {
                        success(e) {
                            console.log('成功', e)
                            c.props.visible = false
                            resolve()
                        },
                        close(e) {
                            c.props.visible = false
                            resolve()
                        }
                    }
                })
                console.log('VNode', VNode)
                return VNode
            },
        }).$mount()
    })

}