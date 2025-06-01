<template>
  <div>
    <Send/>
    <Reception/>
    <el-button size="mini" type="primary" @click="handleRemove">移除</el-button>
  </div>
</template>
<script>
import Send from "@/view/event-bus/component/Send.vue";
import Reception from "@/view/event-bus/component/Reception.vue";

export default {
  components: {
    Send,
    Reception
  },
  data() {
    return {}
  },
  methods: {
    handleRemove() {
      this.$bus.$remove('foo')
    }
  }
}
</script>
