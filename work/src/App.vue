<template>
    <div id="app">
        <!-- 路由出口，可以变化的组件，变化规律写在router/index.js中 -->
        <router-view name="a"></router-view>
        <router-view name="b"></router-view>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {};
    },
    components: {

    },
};
</script>

<style>
</style>
