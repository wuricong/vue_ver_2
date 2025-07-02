<template>
  <div class="flex">
    <el-menu>
      <el-menu-item @click="handleClick(menu)" v-for="menu in menuList" :key="menu.id">
        {{ menu.title }}
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [{title: '路由', id: 1},]
    }
  },
  methods: {
    handleClick(m) {
      console.log()
    }
  }
}
</script>
