<template>
    <div class="UserPageContainer">
        <div class="g-box1">
            <div class="m-part i-socketList">
                <StocksPanel :stockList="stockList" @getStockId="getStockId" @getCurrData="getCurrData"/>
            </div>
        </div>
        <div class="g-box2">
            <div class="m-part">
                <HistoryGraph :historyData="historyData"/>
                <CurrentGraph :currentData="currentData" />
            </div>
            <div class="m-part">
                <UserRemarks :userData="noteData"/>
            </div>
        </div>
    </div>
</template>

<script>
    import data from "../mock/mock";
    import StocksPanel from "./UserPageComponents/StocksPanel";
    import HistoryGraph from "./UserPageComponents/HistoryGraph";
    import UserRemarks from "./UserPageComponents/UserRemarks";
    import CurrentGraph from "./UserPageComponents/CurrentGraph";

    export default {
        name: "UserPage",
        components:{
            StocksPanel,
            HistoryGraph,
            CurrentGraph,
            UserRemarks
        },
        data(){
            return{
                userId:"axksbkaihd:dnla",   //用户id请求个人页面数据
                stockList:[],   //个人自选股票
                selectStockId:'',    //选择单只股票id

                historyData:[],     //历史画图数据
                noteData:[],       //备注数据
                currentData:[],     //实时画图数据
            }
        },
        mounted() {
            var that = this
            that.$axios.post('http://stocksite/myfavourite',{
                userId:that.userId,
            }).then(function(res){
                that.stockList=res.data.stock
                if(res.data.stock.length>0){
                    that.selectStockId=res.data.stock[0].stockid
                }
            })
        },
        methods:{
            getStockId(val){
                this.selectStockId=val
            },
            getCurrData(val){
                this.currentData=val
                console.log(val)
            }
        },
        watch:{
            selectStockId(val){
                var that = this
                that.$axios.post('http://stocksite/graph',{
                    stockid:val,
                }).then(function(res){
                    that.historyData=res.data.data
                    that.noteData=res.data.note


                })
            }
        }

    }
</script>

<style scoped>
    .UserPageContainer{
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        margin: 5px 30px;
    }
    .g-box1{
        width: 50%;
        heigit:80%;
        min-width: 400px;
    }
    .g-box2{
        width: 50%;
        heigit:80%;
        min-width: 400px;
    }
    .m-part{
        padding: 10px 30px;
    }
    .i-socketList{
        height: 100%;
    }
</style>