<template>
    <div class="hello">
        <p>我是helloworld</p>
        <h1>{{ msg }}</h1>
        <h2>hello</h2>
        <router-link to="cart">cart</router-link>
        <router-link to="/">返回首页</router-link>
        <button @click="goHome">返回首页</button>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
        };
    },
    created() {
        document.title = this.$route.meta.title;
    },
    methods: {
        goHome() {
            this.$router.push("/");
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
