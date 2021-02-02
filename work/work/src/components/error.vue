<template>
    <div>
        <h1>您输入的地址有误，请重新检查！</h1>
        <!-- 通过内置组件（router-link）跳转，声明式导航 -->
        <!-- to: 必填属性，表示目标地址 -->
        <!-- active-class：选填，当页面地址和链接地址相等时，会带有这个class -->
        <!-- tag：选填，用什么标签渲染 -->
        <!-- replace:选填，添加这个属性后，再点击链接跳转时就不会新增历史记录，而是替换 -->
        <input type="text" v-model="username" />
        <router-link to="/" tag="mark" active-class="class111"
            >点击返回首页</router-link
        >
        <router-link to="/cart">购物车</router-link>
        <!-- name属性：命名路由，可以代替path进行跳转，当path过长时 -->
        <!-- ?后面的对应$route中的query，这是查询参数 -->
        <router-link :to="'/error?name=' + username">404页面</router-link>
        <router-link
            :to="{
                path: '/father',
                query: {
                    age: 18,
                    sex: 'male',
                },
            }"
            >father页面</router-link
        >
        <hr />
        <!-- 编程式导航 -->
        <button @click="changePage1">返回首页</button>
        <button @click="changePage2">购物车</button>
        <button @click="changePage3">father页面</button>
        <button @click="changePage4">返回</button>
        <hr />
        <p>
            $router和$route的区别：全局和局部的区别。$router负责全局的跳转、方法等；$route是当前的路由对象，用来获取路由信息。
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: "",
        };
    },
    methods: {
        changePage1() {
            // 逻辑判断
            // 也有replace方法，效果和声明式导航的replace相同
            this.$router.push("/");
        },
        created() {
            document.title = this.$route.meta.title;
        },
        changePage2() {
            this.$router.push({
                path: "/cart",
                query: {
                    price: 100,
                },
            });
        },
        changePage3() {
            this.$router.push("/father?age=" + this.username);
        },
        changePage4() {
            // go方法，接受的参数是整数。正数表示前进，负数表示后退
            // back()方法，表示后退
            this.$router.go(-1);
        },
    },
};
</script>

<style>
</style>