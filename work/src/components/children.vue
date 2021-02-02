<template>
  <div class="children">
    <p>我是子组件</p>
    <p>infoa: {{infoa}}</p>
    <p>age: {{infob}}</p>
    <p>job: {{infoc}}</p>
    <p>sex: {{infod}}</p>
    <p>年龄: {{infoe}}</p>
    <hr>
    <p>兄弟组件之间传值</p>
    <p>1.事件总线eventbus</p>
    <button @click="post">兄弟传值</button>
  </div>
</template>

<script>
export default {
  props: {
    infoa: String,
    infob: {
      type: Number
    },
    infoc: {
      type: String,
      // 必填
      required: true
    },
    infod: {
      type: String,
      // 默认值
      default: 'male'
    },
    // 自定义校验规则，自由度较高
    infoe: {
      type: Object,
      validator: function(val) {
        // 根据当时的具体情况写，比较灵活
        return val.age > 1
      }
    }
  },
  data() {
    return {
      msg: '兄弟组件之前的数据'
    }
  },
  methods: {
    post() {
      // 事件总线。在main.js中加进来的，用来处理非父子组件传值
      this.eventbus.$emit('tran', this.msg);
    }
  },
}
</script>

<style scoped>
  .children {
    background: orange;
  }
</style>