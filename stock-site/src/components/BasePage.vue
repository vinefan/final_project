<!--首页-->
<template>
    <div class="BasePageContainer">
        <div class="g-box1">
            <div class="m-part">
                <div class="m-title">
                    <img src="@/assets/u1.png">
                    <p>行情信息</p>
                </div>
                <MarketPrice :bigPanel="bigPanel"/>
            </div>
            <div class="m-part i-charts">
                <div class="m-title">
                    <img src="@/assets/u1.png">
                    <p>大盘异动</p>
                </div>
                <MarketChanges :bigPanelChange="bigPanelChange"/>
            </div>
        </div>
        <div class="g-box2">
            <div class="m-part">
                <div class="m-title">
                    <img src="@/assets/u1.png">
                    <p>涨跌排名</p>
                </div>
            <StockRank :stocksUpDown="stocksUpDown"/>
            </div>
        </div>
    </div>
</template>

<script>
    import data from "../mock/mock.js";
    import MarketPrice from "./BasePageComponents/MarketPrice";
    import MarketChanges from "./BasePageComponents/MarketChanges";
    import StockRank from "./BasePageComponents/StockRank";
    export default {
        name: "BasePage",
        components:{
            MarketPrice,
            MarketChanges,
            StockRank
        },
        data(){
            return{
                bigPanel:[], //大盘行情
                bigPanelChange:[],//大盘异动
                stocksUpDown:[],//涨跌排名

            }
        },
        created(){
            var that = this
            //get请求大盘行情数据
            this.$axios.get('http://stocksite/index')
                .then(res => {
                    that.bigPanel = res.data.bigPanel;
                    that.bigPanelChange = res.data.bigPanelChange
                    that.stocksUpDown = res.data.stocksUpDown
                })

        }
    }
</script>

<style scoped>
    .BasePageContainer{
        display: -webkit-flex; /* Safari */
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        margin: 5px 30px;
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
        padding: 10px 30px;
    }
    .i-charts{
        width: 100%;
        height: 100%;
    }
    .m-title{
        display: flex;
        align-items: center;
        text-align:center;
    }
    .m-title img{
        width: 35px;
        height: 35px;
    }
    .m-title p{
        padding-left: 10px;
        color: #002060;
        font-size: 1.15rem;

    }
</style>