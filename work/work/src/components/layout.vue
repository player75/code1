<template>
    <div>
        <vtop></vtop>
        <vleft></vleft>
        <router-view></router-view>
    </div>
</template>

<script>
import vtop from "./top";
import vleft from "./left";
export default {
    data() {
        return {};
    },
    components: {
        vtop,
        vleft,
    },
};
</script>

<style>
</style>