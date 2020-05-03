<template>
    <div>
        <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
                <span>备注</span>
                <el-button type="text" style="float:right" @click="open">添加备注</el-button>
            </div>
            <el-table
                    :data="userData"
                    style="width: 100%"
                    height="120"
                    :show-header=false
                    class="remark">
                <el-table-column
                        prop="time"
                        label="日期">
                </el-table-column>
                <el-table-column
                        prop="text"
                        label="备注">
                </el-table-column>
            </el-table>
        </el-card>

    </div>
</template>

<script>
    export default {
        name: "UserRemarks",
        props:{
            userData:Array,
            selectStockId:String
        },
        data(){
            return{
                addData:[]
            }
        },
        methods: {
            open() {
                var that=this
                that.$prompt('备注', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                }).then(({value}) => {

                    that.$axios.post('http://112.74.58.75:8010//addNote',
                        {
                            'stockid':that.selectStockId,
                            'text':value
                        })
                        .then(res=>{
                            if(res.data.status==200){
                                that.$message({
                                    type: 'success',
                                    message: '添加备注: ' + value
                                })
                            }else if(res.data.status==400){
                                that.$message({
                                    type: 'info',
                                    message: '添加失败'
                                });
                            }


                        })


                }).catch(() => {
                    that.$message({
                        type: 'info',
                        message: '取消输入'
                    });
                });
            }
        }

    }
</script>

<style scoped>
    .el-card {
        padding: 0px!important;
    }
</style>