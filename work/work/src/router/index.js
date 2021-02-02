// 引入共用的依赖
import Vue from 'vue'
import Router from 'vue-router'
// 引入需要展示的组件
// import HelloWorld from '@/components/HelloWorld'
// import father from '../components/father.vue'
// import cart from '../components/cart.vue'
// import error from '../components/error.vue'
// =============================
const HelloWorld = () => import('../components/HelloWorld.vue')
const father = () => import('../components/father.vue')
const cart = () => import('../components/cart.vue')
const error = () => import('../components/error.vue')
const goodsList = () => import('../components/goodsList.vue')
const goodsDetail = () => import('../components/goodsDetail.vue')
const login = () => import('../components/login.vue')
const userCenter = () => import('../components/userCenter.vue')
const layout = () => import('../components/layout.vue')
const center1 = () => import('../components/center1.vue')
const center2 = () => import('../components/center2.vue')
const center3 = () => import('../components/center3.vue')
const axios=()=>import('../components/axios.vue')
Vue.use(Router)
// 使用$router.push()方法导航到当前页面会报错，将它捕获
const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
const router = new Router({
  // 路由模式：vue默认使用hash模式（哈希） 
  mode: 'history',
  routes: [
    // 路由表:url和组件的对应关系,严格的字符串匹配
    {
      path: '/',
      alias: '/index',
      name: 'HelloWorld',
      component: HelloWorld,
      // 路由元信息
      meta: {
        title: '首页'
      }
    },
    {
      path:'/axios',
      meta:{
        title:'axios'
      },
      component:axios
    },
    {
      path: '/layout',
      meta: {
        title: '嵌套路由'
      },
      component: layout,
      // 子路由，里面是一个路由对象组成的数组
      children: [
        // 子路由的path，不建议写斜杠，如果写了斜杠，就要写完整的路径
        // 默认显示的子路由，他的path是空字符串
        {path: '', component: center1},
        {path: 'center2', component: center2},
        {path: 'center3', component: center3},
      ]
    },
    {
      path: '/login',
      meta: {
        title: '登录'
      },
      component: login
    },
    {
      path: '/usercenter',
      meta: {
        title: '个人中心'
      },
      component: userCenter,
      beforeEnter(to, from, next) {
        if(to.query.username == 'Jack') {
          next()
        }else {
          next('/error')
        }
      }
    },
    {
      path: '/father',
      // 路由别名，区别于重定向。重定向会修改页面url，但是别名不会。即可以叫盖伦，还可以叫德玛。
      alias: '/dad',
      name: 'father',
      component: father,
      meta: {
        title: '父组件'
      }
    },
    {
      path: '/cart',
      alias: '/goodscart',
      name: 'cart',
      // components: {
      //   a: top,
      //   b: cart
      // },
      component: cart,
      meta: {
        title: '购物车'
      }
    },
    {
      path: '/goodslist',
      component: goodsList,
      // 单个路由独享的守卫
      beforeEnter(to, from, next) {
        console.log('进入'+to.path+'这个页面');
        next()
      }
    },
    {
      // 动态路由：路由中有一部分是由变量组成的
      path: '/goodsdetail/:name',
      component: goodsDetail
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
      meta: {
        title: '404页面'
      }
    },
    {
      path: '*',
      // 重定向到指定页面
      redirect: '/error'
    }
  ]
})

export default router
