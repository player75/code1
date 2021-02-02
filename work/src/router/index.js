// 引入共用的依赖
import Vue from 'vue'
import Router from 'vue-router'
// 引入需要展示的组件
// import HelloWorld from '@/components/HelloWorld'
// import father from '../components/father.vue'
// import cart from '../components/cart.vue'
// import error from '../components/error.vue'

//=================================================
const HelloWorld =()=>import('../components/HelloWorld.vue')
const father =()=>import('../components/father.vue')
const cart =()=> import('../components/cart.vue')
const error=()=> import('../components/error.vue')
const goodsList=()=> import('../components/goodsList.vue')
const goodsDetail=()=> import('../components/goodsDetail.vue')
const top=()=>import('../components/top.vue')
Vue.use(Router)

export default new Router({
  // 路由模式： vue默认使用hash模式（哈希） 
  mode: 'history',
  routes: [
    // 路由表:url和组件的对应关系,严格的字符串匹配
    {
      path: '/',
      alias:'/index',
      name: 'HelloWorld',
      component: HelloWorld, 
      //路由元信息
      meta:{
        title:'首页'
      }
    },
    {
      path: '/father',
      //路由别名，区别于重定向。重定向会修改页面url，但别名不会。
      alias:'/dad', 
      name: 'father',
      component: father,
      meta:{
        title:'父组件'
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components:{
        a:top,
        b:cart
      },
      meta:{
        title:'购物车'
      }
    },
    {
      path:'/goodsList',
      component:goodsList
    },
    {
      path:'/goodsdetail/:name',
      component:goodsDetail
    },



    // 地址输入错误的处理方式1
    // {
    //   path: '*',
    //   // 通配符，可以匹配所有的路径，但是优先级低，先匹配上面的准确的路径
    //   component: error
    // }
    // 地址输入错误的处理方式2
    {
      path: '/error',
      component: error,
      meta:{
        title:'404页面'
      }
    },
    {
      path: '*',
      // 重定向到指定页面
      redirect: '/error'
    }
  ]
})
