<template>
    <div>
        <el-table
                :data="stockList"
                style="width: 100%"
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
                    fixed="right">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" size="small">实时数据</el-button>
                    <el-button size="small">删除</el-button>
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
                selectId:''
            }
        },
        methods:{
            handleClick:function (val) {
                console.log(val)
            },
            clickItem:function (val) {
                this.selectId=val.stockid
                console.log(this.selectId)
            }
        }
    }
</script>

<style scoped>

</style>