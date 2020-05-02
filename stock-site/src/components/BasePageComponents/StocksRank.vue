<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="科创">
                <StocksTable :data="kc_data"/>
            </el-tab-pane>
            <el-tab-pane label="涨幅">
                <StocksTable :data="zf_data"/>
            </el-tab-pane>
            <el-tab-pane label="跌幅">
                <StocksTable :data="df_data"/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import StocksTable from "./StocksTable";
    export default {
        name: "StockRank",
        components:{
            StocksTable
        },
        props:{
            stocksUpDown:Array
        },
        data(){
            return{
                data:[],
                kc_data:[],
                zf_data:[],
                df_data:[]
            }
        },
        watch:{
            stocksUpDown:function (val) {
                this.data=val
                for(var index in this.data){
                    if(this.data[index].type=='kc'){
                        this.kc_data=this.data[index].stock
                    }
                    if(this.data[index].type=='zf'){
                        this.zf_data=this.data[index].stock
                    }
                    if(this.data[index].type=='df'){
                        this.df_data=this.data[index].stock
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>