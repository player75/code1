<template>
  <div>
    <p>我是父组件</p>
    <p>父传子：数据在父组件中，子组件没有这个数据，传给他</p>
    <p>1.通过属性的方式传值</p>
    <p>2.在子组件中使用props接受</p>
    <p>3.不要在子组件中修改父组件的值：单向数据流</p>
    <p>3-1.解决方案：在data中新声明一个数据，用来接受prop。修改新的数据</p>
    <p>3-2.解决方案：通过计算属性，声明新的变量来接受父组件的数据</p>
    <p>4.数据类型的校验：可以检验数据类型、是否必填、设置默认值和自定义校验器。适用于共用组件或者非常严格的使用环境，降低出错的概率。</p>
    <child
      :info1="msg1"
      :info2="msg2"
      :info3="msg3"
      :info4="msg4"
      @tran="getData"
    ></child>
    <children
      :infoa="infoA"
      :infob="infoB"
      :infoc="infoC"
      :infod="infoD"
      :infoe="infoE"
    ></children>
  </div>  
</template>

<script>
import child from './child'
import children from './children'
export default {
  data() {
    return {
      msg1: '我是父组件的数据',
      msg2: [
        {name: 'mi 11', price: 3999},
        {name: 'iphone 12', price: 5999},
      ],
      msg3: 18,
      msg4: 1000,
      infoA: 'Jack',
      infoB: 18,
      infoC: 'student',
      infoD: 'female',
      infoE: {
        name: 'Jack',
        age: 19
      },
      infoChild: ''
    }
  },
    created(){
    document.title=this.$route.meta.title
  },
  components: {
    child,
    children
  },
  methods: {
    // 监听自定义事件，接受子组件传过来的值。
    getData(val1) {
      console.log(val1);
    }
  },
}
</script>

<style>

</style>