<template>
  <div class="coma">
    <p class="p1">这是我的第一个组件</p>
    <div>{{time}}</div>
    <comB></comB>
  </div>
</template>

<script>
import comB from './comB'
export default {
  data() {
    return {
      time: '2020-01-28'
    }
  },
  components: {
    comB
  }
}
</script>

<style>
  .coma .p1 {
    color: red;
  }
</style>