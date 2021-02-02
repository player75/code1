<template>
    <div>
        <p>登录</p>
        <input type="text" placeholder="请输入用户名" v-model="username"
        @keyup.enter="goLogin" />
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
        goLogin() {
            this.$router.push("/usercenter?username=" + this.username);
        },
    },
};
</script>

<style>
</style>