<template>
  <div>
    <!--    <video autoplay muted :src="require('@/assets/bg-video.mp4')"/>-->
    <div class="horizontal-timeline">
      <el-timeline>
        <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      videoUrl: '',
      activities: [
        {timestamp: '2023-10-01', content: '事件 1'},
        {timestamp: '2023-10-02', content: '事件 2'},
        {timestamp: '2023-10-03', content: '事件 3'},
        {timestamp: '2023-10-04', content: '事件 4'},
      ],
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

.horizontal-timeline {
  display: flex;
  flex-direction: row;
}

.horizontal-timeline .el-timeline {
  display: flex;
  flex-direction: row;
}

.horizontal-timeline .el-timeline-item {
  flex: 1;
  margin-right: 20px; /* 调整间距 */
}

</style>
