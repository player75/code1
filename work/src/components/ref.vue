<template>
  <div>
    <h1>ref:vue版本的dom选择器</h1>
    <p>少数情况下，需要直接操作dom，因此需要选择dom，就使用ref</p>
    <p>this.$refs.xxxx.xxx是dom节点上ref的属性值</p>
    <input type="text" ref="input">
    <button @click="showValue">值</button>
    <hr>
    <button
      v-for="num in 5"
      :key="num"
      ref="num"
    >{{num}}</button>
    <button @click="showBtn">打印第三个按钮</button>
    <hr>
    <comB ref="comB">
      <mark>666</mark>
      <p>666</p>
    </comB>
    <button @click="showCom">打印组件</button>
    <hr>
    <hr>
    <p>加载第三步包：1.下载源码：npm install 包的名字 --save-dev</p>
    <p>--save的作用是将更新的内容同步到package.json中，让别人知道你更新了依赖</p>
    <p>2.添加到项目中，在main.js中引入包</p>
    <p>3.添加到原型链上或者加到vue实例中</p>
    <p>以下是示例：</p>
    <div id="div1" class="div1"></div>
    <button @click="fadeToggle">淡入淡出</button>
    <button @click="slideToggle">卷起放下</button>
  </div>
</template>

<script>
import comB from './comB'
export default {
  methods: {
    showValue() {
      console.log(this.$refs.input);
    },
    showBtn() {
      console.log(this.$refs.num[2]);
    },
    showCom() {
      console.log(this.$refs.comB.$data);
    },
    fadeToggle() {
      // 开始写jq
      this.$('#div1').fadeToggle(4000);
    },
    slideToggle() {
      // 开始写jq
      this.$('#div1').slideToggle(6000);
    }
  },
  components: {
    comB
  },
}
</script>

<style>
  .div1 {
    width: 100px;
    height: 100px;
    background-color: orange;
  }
</style>