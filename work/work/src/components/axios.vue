<template>
    <div>
        <p>axios发送请求</p>
    <img :src="img">
        <!-- <button @click="getData">发送请求</button> -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            img:''
        }
    },
    created(){
        this.getData()
    },
    methods:{
        getData(){
            this.$http.get(`https://api.imjad.cn/cloudmusic/?type=detail&id=28012031`)
            .then(res=>{
                // console.log(res.data.songs[0].al.picUrl);
                this.img=res.data.songs[0].al.picUrl
            }).catch(err=>{
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>