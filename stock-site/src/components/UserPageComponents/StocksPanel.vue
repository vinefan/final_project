<template>
    <div class="stocksPanel">
        <el-table
                :data="stockList"
                style="width: 100%"
                height="280"
                highlight-current-row=true
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
                    label="涨跌"
                    :formatter="formatterUpdown">
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
            formatterUpdown(row, column, cellValue){
                return (cellValue*100).toFixed(2)+'%'
            },
            DoTimer:function (val) {
                var that=this
                that.startQuery=!that.startQuery
                var id=val.stockid

                if(that.startQuery==true){
                    //启动定时器
                    that.timerText="暂停"
                    that.timer = setInterval(() => {
                        // http://stocksite/currentdata
                        that.$axios.post('http://112.74.58.75:8010/realtimePoint',{
                            stockId:id,
                        }).then(function(res){
                            that.$emit('getCurrData', res.data.data);
                            console.log(res)
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
                var that=this
                rows.splice(index, 1);
                // this.deleteList.push(data.stockid)

                //发送删除请求
                that.$axios.post('http://112.74.58.75:8010/removeStock',{
                    stockid:data.stockid,
                }).then(res=>{
                    if(res.data.status==200){
                        that.$message({
                            type: 'success',
                            message: '删除成功'
                        })
                    }else if(res.data.status==400){
                        that.$message({
                            type: 'info',
                            message: '删除失败'
                        });
                    }
                })

                //清除定时器
                clearInterval(this.timer)
            },
            showText(val){
                if(val==this.selectId&&this.timer!=null){
                    return this.timerText
                }else{
                    return '实时'
                }
            }
        },
        beforeDestroy() {
            var that = this
            // http://stocksite/delete
            // that.$axios.post('http://112.74.58.75:8010/removeStock',{
            //     stockid:that.deleteList,
            // }).then(function(){
            //     console.log("删除成功！")
            //
            // })
            //删除定时器
            clearInterval(that.timer)
        },
        watch:{
            selectId(){
                if(this.timer!=null){
                    clearInterval(this.timer)
                    this.timerText='实时'
                }
            }
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