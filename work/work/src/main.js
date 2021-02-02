// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 从node_modules中引入jq
import $ from 'jquery'
import axios from 'axios'


Vue.config.productionTip = false
// 声明一个空实例,添加到vue原型链上
Vue.prototype.eventbus = new Vue();
// 将jq添加到vue的原型链上，方便全局使用
Vue.prototype.$ = $;
//将原偶遇的http模块替换为axios
Vue.prototype.$http = axios;

//全局路由守卫
router.beforeEach((to, from, next) => {
  console.log('我是全局');
  document.title = to.meta.title;
  next()
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
