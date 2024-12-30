<template>
  <div>
    <video autoplay muted :src="require('@/assets/bg-video.mp4')"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoUrl: ''
    }
  },
  mounted() {
  }
}
</script>
<style lang="scss" scoped>
video {
  width: 100%;
  height: 100%;
}

</style>
