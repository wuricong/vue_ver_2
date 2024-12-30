<template>
  <div class="top-position">
    <div class="flex gap-6">
      <div class="bg-video" @click="handleVideo">视频</div>
      <div class="bg-video" @click="handleVideo">其他</div>
    </div>
    <i style="transform: rotate(270deg);" class="el-icon-d-arrow-left"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 1
    }
  },
  methods: {
    handleVideo() {
      this.$router.push('/bg-video')
    }
  }
}
</script>
<style scoped lang="scss">
.top-position {
  position: fixed;
  top: -26px;
  left: 50%;
  transform: translateX(-50%);
  transition: all .3s;
  //display: flex;
  align-items: center;

  &:hover {
    top: 3px;
  }

  .title {
    color: red;
  }
}

.bg-video {
  color: white;
  width: 50px;
  height: 30px;
  line-height: 30px;
  background-color: #007FFF;
  border-radius: 5px;
  cursor: pointer;
}
</style>
