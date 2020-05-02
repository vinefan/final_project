<template>
    <div>
        <el-card class="box-card" shadow="never">
            <div slot="header" class="clearfix">
                <span>备注</span>
                <el-button style="float: right; padding: 3px 0" type="text">添加备注</el-button>
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
                        prop="note"
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
            userData:Array
        }
    }
</script>

<style scoped>
    .el-card {
        padding: 0px!important;
    }
</style>