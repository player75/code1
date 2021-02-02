<template>
    <div>
        <ul class="left">
            <li v-for="(phone, index) in goodsList" :key="index">
                {{ phone.name }}
            </li>
            <li v-for="(phone, index) in goodsList" :key="index">
                <router-link :to="`/layout/` + phone.path">{{
                    phone.name
                }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goodsList: [
                { name: "huawei P40", price: 5999 },
                { name: "vivo 10", price: 4999 },
                { name: "oppo Reno 2", price: 5699 },
                { name: "center1", price: "center1", path: "" },
                { name: "center2", price: "center2", path: "center2" },
                { name: "center3", price: "center3", path: "center3" },
            ],
        };
    },
};
</script>

<style>
.left {
    float: left;
    width: 200px;
    height: 600px;
    border-right: 1px solid #666;
}
</style>