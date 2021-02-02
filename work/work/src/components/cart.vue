<template>
    <div>
        <p>url中的数据：{{ $route.query.price }}，{{ $route.query.level }}</p>
        <table border="1">
            <thead>
                <tr>
                    <th colspan="4">购物车</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input
                            type="checkbox"
                            v-model="checkAll"
                            @change="allCheck"
                        />全选
                    </td>
                    <td>商品名称</td>
                    <td>商品数量</td>
                    <td>商品价格</td>
                </tr>
                <tr v-for="(phone, index) in goodsList" :key="index">
                    <td>
                        <input
                            type="checkbox"
                            v-model="phone.isChecked"
                            @change="itemCheck"
                        />
                    </td>
                    <td>{{ phone.name }}</td>
                    <td><input type="text" v-model.number="phone.num" /></td>
                    <!-- <td>{{phone.num}}</td> -->
                    <td>{{ phone.price }}</td>
                </tr>
                <tr>
                    <td>-</td>
                    <td>小结</td>
                    <td>99件</td>
                    <td>998元</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkAll: false,
            goodsList: [
                { name: "iphone 12", price: 5999, num: 10 },
                { name: "mi 11", price: 3999, num: 15 },
                { name: "huawei P40", price: 4999, num: 50 },
                { name: "1+ 7t", price: 4599, num: 8 },
            ],
        };
    },

    created() {
        document.title = this.$route.meta.title;
        this.changeData();
        console.log("url中的数据：", this.$route.query.price);
    },
    methods: {
        changeData() {
            this.goodsList.forEach((item) => {
                item.isChecked = false;
            });
        },
        // 全选
        allCheck() {
            this.goodsList.forEach((item) => {
                item.isChecked = this.checkAll;
            });
        },
        // 选择每一项
        itemCheck() {
            this.checkAll = this.goodsList.every((item) => {
                return item.isChecked;
            });
        },
    },
};
</script>

<style>
</style>