<template>
    <div>
        <StocksPanel :stockList="stockList"/>
    </div>
</template>

<script>
    import StocksPanel from "./UserPageComponents/StocksPanel";
    export default {
        name: "UserPage",
        components:{
            StocksPanel
        },
        data(){
            return{
                userId:"axksbkaihd:dnla",   //用户id请求个人页面数据
                stockList:[]
            }
        },
        mounted() {
            var that = this
            that.$axios.post('http://stocksite/myfavourite',{
                userId:that.userId,
            }).then(function(res){
                that.stockList=res.data.stock
                })
        }

    }
</script>

<style scoped>

</style>