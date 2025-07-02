<template>
  <div class="flex" style="height: 100%">
    <el-menu style="width: 120px;text-align: center">
      <el-menu-item @click="handleClick(menu)" v-for="menu in menus" :key="menu.id">
        {{ menu.title }}
      </el-menu-item>
    </el-menu>
    <div class="right">
    <router-view></router-view>

    </div>
  </div>
</template>
<script>
import AsyncDialog from '@/components/async-dialog/index.vue'
import createAsyncDialog from '@/utils/creatAsyncDialog'
import axios from 'axios'
export default {
  data() {
    return {
      menus: [{title: '主页', id: 1,path:'/home'},{title: '其它', id: 2,path:'/other'},]
    }
  },
  methods: {
    handleClick(row) {
      this.$router.push(row.path)
    }
  }
}
</script>
<style lang="scss" scoped>
.right {
  padding: 12px 20px;
}
</style>
