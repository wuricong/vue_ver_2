<template>
  <div id="app">
    <PopupDown/>
    <carousel>
      <carousel-item>
        组件插槽
      </carousel-item>
    </carousel>
    <el-button size="small" type="primary" @click="handleAsyncDialog">打开异步组件弹窗</el-button>
    <el-button size="small" type="primary" @click="handleFormDialog">打开表单组件弹窗</el-button>
    <form-dialog @change="handleChange" v-model="formValue" :visible.sync="formVisible"/>
    <!-- 自定义输入框组件-->
    <customCheck :isSelect="isSelect" @getValue="getValue" v-model="isSelect"/>
    <anchored-heading level="2">
      <div>111</div>
    </anchored-heading>
    <EventBus/>
    <JsxTest data="1"/>
    <div>{{ ob.c }}</div>
    <el-button size="small" type="primary" @click="handleReq">发请求</el-button>
    <router-view></router-view>
    <el-button type="primary" @click="handleToWallpaper" size="small">壁纸</el-button>
    <div>store-test</div>
    <div>{{ info }}</div>
    <el-button type="primary" size="small" @click="handleNumAdd">自增</el-button>
    <div>设置计算属性</div>
    <el-button type="primary" size="small" @click="handleSetComputed">设置计算属性</el-button>
    <div>{{ calcCount }}</div>
    <el-button @click="openDialog">打开弹窗</el-button>
    <el-dialog width="100%" title="弹窗" class="custom-dialog" :visible="visible">
      111
    </el-dialog>
    <div style="display: flex;flex-direction: column;flex-grow: 1">
      <el-table style="display: flex;flex-direction: column" :data="tableData">
        <el-table-column prop="name"/>
        <el-table-column prop="age"/>
      </el-table>
    </div>
    <el-popover
        placement="top-start"
        title="标题"
        width="200"
        trigger="hover"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
      <div>标签 content</div>
      <el-button slot="reference">hover 激活</el-button>
    </el-popover>

  </div>
</template>

<script>
import AsyncDialog from "@/components/async-dialog/index.vue";
import createAsyncDialog from "@/utils/creatAsyncDialog";
import formDialog from '@/components/form-dialog/index.vue'
import customCheck from "@/components/custom-check/index.vue";
import EventBus from "@/view/event-bus/index.vue";
import JsxTest from "@/view/jsx-test/index.vue";
import PopupDown from "@/layouts/popup-down.vue";
import axios from "axios";
import {mapState} from "vuex";

export default {
  name: 'App',
  data() {
    return {
      tableData:[{name:'张三',age:2},{name:'张三1',age:2},{name:'张三2',age:2},{name:'张三3',age:2}],
      formVisible: false,
      formValue: false,
      isSelect: true,
      ob: {
        c: 1
      },
      num1: 1,
      num2: 2,
      visible: false
    }
  },
  components: {
    PopupDown,
    formDialog,
    customCheck,
    EventBus,
    JsxTest
  },
  created() {
    //获取浏览器书签数据
    // chrome.bookmarks.getTree((bookmarks) => {
    //   console.log('bookmarks', bookmarks)
    // })
  },
  computed: {
    ...mapState({
      info: state => state.num
    }),
    calcCount() {
      return this.num1 + this.num2
    }
  },
  methods: {
    openDialog() {
      this.visible = true
    },
    async handleAsyncDialog() {
      try {
        const res = await createAsyncDialog(AsyncDialog)
        console.log('AsyncDialog', AsyncDialog)
      } catch (e) {
        console.log('e', e)
      }
    },
    handleNumAdd() {
      this.$store.commit('updateInfo', 1)
    },
    handleSetComputed() {
      this.calcCount = 9
    },
    handleFormDialog() {
      this.formVisible = true
    },
    handleChange() {
      console.log(11)
    },
    getValue() {
      console.log(9999, this.isSelect)
    },
    handleReq() {
      axios('/api').then((res) => {
        console.log('res', res)
      }).catch((e) => {
        console.log('e', e)
      })
    },
    handleToWallpaper() {
      this.$router.push('bg-video')
    }
  }
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

//.custom-dialog {
//
//}
</style>
