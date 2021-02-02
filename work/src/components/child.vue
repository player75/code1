<template>
  <div class="child">
    <p>我是子组件</p>
    <p>父组件的数据：{{info1}}</p>
    <p>{{info2[0].name}}: {{info2[0].price}}</p>
    <p>我的年龄：{{ childAge + 1 }}</p>
    <p>我的收入：{{ myIncome }}</p>
    <hr>
    <p>子传父：数据在子组件中，父组件没有，传给他</p>
    <p>1.发射自定义事件，第一个参数是事件名。后面的参数是要携带的数据，可以有多条</p>
    <p>2.在父组件中监听对应的事件，目的是为了接收数据。</p>
    <button @click="post">传值！</button>
  </div>  
</template>

<script>
export default {
  props: ['info1', 'info2', 'info3', 'info4'],
  data() {
    return {
      childAge: this.info3,
      childInfo1: 'hello'
    }
  },
  computed: {
    myIncome() {
      return this.info4 + 100
    }
  },
  created() {
    // 开启监听，等待兄弟组件传值
    this.eventbus.$on('tran', (val)=> {
      console.log(val);
    })
  },
  methods: {
    post() {
      // 子传父,发射自定义事件，第一个参数是事件名
      this.$emit('tran', this.childInfo1);
    }
  },
}
</script>

<style scoped>
  .child {
    background-color: #56a5f1;
  }
</style>