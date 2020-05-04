<template>
    <div>
        <div class="UserPageContainer" v-if="!GShow">
            <p style="font-size: 25px">
                无权限查看个人页面，请先<a href="/login">去登陆</a>
            </p>
        </div>

        <div class="UserPageContainer" v-if="GShow">
            <div class="g-box1">
                <div class="m-part i-socketList">
                    <StocksPanel :stockList="stockList" @getStockId="getStockId" @getCurrData="getCurrData"/>
                </div>
                <div class="m-part i-comm">
                    <Recommend :recommendData="recommendData"/>
                </div>
            </div>
            <div class="g-box2">
                <div class="m-part">
                    <div class="m-title">
                        <p>上个交易日数据</p>
                        <p style="padding-left: 10px;color: grey;" v-if="HGraph">(当前股票暂无历史交易数据)</p>
                    </div>
                    <HistoryGraph :historyData="historyData"/>
                    <div class="m-title">
                        <p>实时数据</p>
                        <p style="padding-left: 10px;color: grey;" v-if="CGraph">(当前股票暂无实时交易数据)</p>
                    </div>
                    <CurrentGraph :currentData="currentData" />
                </div>
                <div class="m-part">
                    <UserRemarks :userData="noteData" :selectStockId="selectStockId"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // import data from "../mock/mock";
    import StocksPanel from "./UserPageComponents/StocksPanel";
    import HistoryGraph from "./UserPageComponents/HistoryGraph";
    import UserRemarks from "./UserPageComponents/UserRemarks";
    import CurrentGraph from "./UserPageComponents/CurrentGraph";
    import Recommend from "./UserPageComponents/Recommend";

    export default {
        name: "UserPage",
        components:{
            StocksPanel,
            HistoryGraph,
            CurrentGraph,
            UserRemarks,
            Recommend,
        },
        data(){
            return{
                userId:"",   //用户id请求个人页面数据
                GShow:false,
                HGraph:true,
                CGraph:true,

                stockList:[],   //个人自选股票
                selectStockId:'',    //选择单只股票id

                historyData:[],     //历史画图数据
                noteData:[],       //备注数据
                currentData:[],     //实时画图数据
                recommendData:[]    //投资推荐
            }
        },
        mounted() {
            var user = this.$route.query.user
            if(user == null){
                this.$router.push('./login')
            }else{
                this.userId = user.email
                this.GShow=true

                var that = this
                that.$axios.post('http://112.74.58.75:8010/user',{
                    userId:that.userId,
                    // userId:'1120911355@qq.com',
                }).then(function(res){
                    that.stockList=res.data.stock
                    console.log(that.stockList)
                    if(res.data.stock.length>0){
                        that.selectStockId=res.data.stock[0].stockid
                    }
                })
            }
        },
        methods:{
            getStockId(val){
                this.selectStockId=val
            },
            getCurrData(val){
                this.currentData=val
                // console.log(val)
            }
        },
        watch:{
            selectStockId(val){
                var that = this
                that.GShow=true
                //绘图请求 http://stocksite/graph
                that.$axios.post('http://112.74.58.75:8010/pointAndNote',{
                    userId:that.userId,
                    stockId:val,
                }).then(function(res){
                    that.historyData=res.data.data
                    that.noteData=res.data.note
                    if(that.historyData.length>0){
                        that.HGraph=false
                    }
                })

                //投资建议请求
                // http://stocksite/recommend
                that.$axios.post('http://112.74.58.75:8010//getRecommend',{
                        stockid:val,
                    }, {
                        headers:{
                            'Access-Control-Allow-Origin':'*'
                        }
                    }
                ).then(function(res){
                    that.recommendData=res.data.comments
                    // console.log(that.recommendData)
                })
            }
        }

    }
</script>

<style scoped>
    .UserPageContainer{
        height: 100%;
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        margin: 10px 30px;
    }
    .g-box1{
        width: 50%;
        min-width: 400px;
    }
    .g-box2{
        width: 50%;
        min-width: 400px;
    }
    .m-part{
        padding: 8px 30px;
    }
    .m-title{
        display: flex;
        align-items: center;
        text-align:center;
        margin-bottom: -10px;
    }
    .m-title p{
        padding-left: 10px;
        color: #002060;
        font-size: 1rem;
    }

    .i-comm{
        margin-top: 5%;;
    }
    /*.i-socketList{*/
    /*    height: 50%;*/
    /*}*/
</style>