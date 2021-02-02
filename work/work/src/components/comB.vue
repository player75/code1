<template>
  <div class="comb">
    <p class="p1">我是comA的子组件</p>
    <p>插槽：功能是为了显示组件中间的内容</p>
    <p>1.匿名插槽；2.具名插槽；3.作用域插槽</p>
    <slot></slot>
  </div>  
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .p1 {
    color: brown;
    border: 1px solid blue;
  }
</style>