<template>
    <div>
        <p>商品列表</p>
        <router-link
            v-for="(item, index) in goodsList"
            :key="index"
            :to="`/goodsDetail/` + item.name"
            ><p>{{ item.name }}</p></router-link
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            goodsList: [
                { name: "mi 11", sku: "a5v746sca" },
                { name: "mi 10", sku: "ad6f8746" },
                { name: "mi 9", sku: "asd5f4gg78" },
            ],
        };
    },
};
</script>

<style>
</style>