<template>
    <div>
        <p>{{ $route.params.name }}-商品详情</p>
        <p>名称:{{ $route.params.name }}</p>
        <hr />
        <router-link to="/goodsdetail/OPPO Rean Ace">OPPO Rean Ace</router-link>
        <p>点击OPPO Rean Ace时，原来的组件实例会被复用，因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更为高效</p>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {
        this.getDataByName();
    },
    watch: {
        $route(to, from) {
          console.log(to);
          console.log(from);
            this.getDataByName();
        },
    },
    methods:{
      getDataByName(){
        console.log('我正在获取'+this.$route.params.name+'的数据');
      }
    },
    //路由的钩子函数
    beforeRouteUpdate (to, from, next) {
        console.log(to);
        console.log(from);
        //中间件的执行权，继续向后执行
        next()
    },
};
</script>

<style>



</style>