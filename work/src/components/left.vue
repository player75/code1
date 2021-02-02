<template>
  <div>
    <ul class="left">
      <li v-for="(phone,index) in goodsList" :key="index">{{phone.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodsList: [
        {name: 'huawei P40', price: 5999},
        {name: 'vivo 10', price: 4999},
        {name: 'oppo Reno 2', price: 5699},
      ]
    }
  },
}
</script>

<style>
  .left {
    float: left;
    width: 200px;
    height: 600px;
    border-right: 1px solid #666;
  }
</style>