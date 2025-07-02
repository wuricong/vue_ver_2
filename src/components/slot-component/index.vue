<template>
  <div>
    <slot name="test">
      <div>111{{ title }}</div>
    </slot>
  </div>
</template>
<script>
export default {
  props:{
    title:String,
  },
  data(){
    return {
    }
  }
}
</script>
