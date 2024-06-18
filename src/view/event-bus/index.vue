<template>
  <div>
    <Send/>
    <Reception/>
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
}
</script>
