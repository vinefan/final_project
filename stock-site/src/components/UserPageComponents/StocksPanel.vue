<template>
    <div class="stocksPanel">
        <el-table
                :data="stockList"
                style="width: 100%"
                height="280"
                @row-click="clickItem">
            <el-table-column
                    fixed
                    prop="stockid"
                    label="代码">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名称">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="现价">
            </el-table-column>
            <el-table-column
                    prop="rate"
                    label="涨跌">
            </el-table-column>
            <el-table-column
                    width="150">
                <template slot-scope="scope" >
                    <el-button @click="DoTimer(scope.row)" size="small">{{showText(scope.row.stockid)}}</el-button>
                    <el-button size="small" id="delete"  @click.native.prevent="deleteRow(scope.$index, stockList,scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "StocksPanel",
        props:{
            stockList:Array
        },
        data(){
            return{
                selectId:'',
                deleteList:[],
                currentData:[],
                timerText:'实时',
                startQuery:false,
                timer:null
            }
        },
        methods:{
            DoTimer:function (val) {
                var that=this
                that.startQuery=!that.startQuery
                var id=val.stockid

                if(that.startQuery==true){
                    //启动定时器
                    that.timerText="暂停"
                    that.timer = setInterval(() => {

                        that.$axios.post('http://stocksite/currentdata',{
                            stockid:id,
                        }).then(function(res){
                            that.$emit('getCurrData', res.data.data);
                        })
                    }, 1000);
                }else{
                    //清除定时器
                    that.timerText="实时"
                    clearInterval(that.timer)
                }

            },
            clickItem:function (val) {
                var that = this
                that.selectId=val.stockid
                this.$emit('getStockId', that.selectId);
            },
            deleteRow(index, rows,data) {
                rows.splice(index, 1);
                this.deleteList.push(data.stockid)
                clearInterval(this.timer)
            },
            showText(val){
                if(val==this.selectId){
                    return this.timerText
                }else{
                    return '实时'
                }
            }
        },
        beforeDestroy() {
            var that = this
            that.$axios.post('http://stocksite/delete',{
                stockid:that.deleteList,
            }).then(function(){
                console.log("删除成功！")

            })
            //删除定时器
            clearInterval(that.timer)
        }

    }
</script>

<style scoped>
    .stocksPanel{
        border: 1px solid #002060;
        position: relative;
        z-index: 100;
        border-radius: 14px;
        padding: 20px 5px 20px 15px;
    }
    .el-button{
        width: 45%;
    }
    .el-button{
        border-color: #990033;
        color: #002060!important;
    }
    .el-button:focus el-button:hover{
        border-color: #990033!important;
        background:#990033!important;
    }
    .el-button:focus, .el-button:hover {
        color: white!important;
        border-color: #990033!important;
        background-color: #990033!important;
    }
</style>