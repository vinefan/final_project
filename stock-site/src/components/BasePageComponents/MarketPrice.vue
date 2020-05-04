<template>
    <div>
        <el-table
                :data="bigPanel"
                height="190"
                border
                style="width: 100%">
            <el-table-column
                    fixed="left"
                    prop="id"
                    label="代码">
            </el-table-column>
            <el-table-column
                    fixed="left"
                    prop="name"
                    label="名称">
            </el-table-column>
            <el-table-column
                    prop="rate"
                    :formatter="formatterRate"
                    label="涨幅">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="现价">
            </el-table-column>
            <el-table-column
                    prop="updown"
                    label="涨跌"
                    :formatter="formatterUpdown">
            </el-table-column>
            <el-table-column
                    prop="quantity"
                    label="总量"
                    :formatter="formatterQuantity">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>

    export default {
        name: "MarketPrice",
        props:{
            bigPanel:Array
        },
        data(){
            return{

            }
        },
        methods:{
            formatterRate(row, column, cellValue){
                return (cellValue*100).toFixed(2)+'%'
            },
            formatterQuantity(row, column, cellValue){
                return cellValue+'亿'
            },
            formatterUpdown(row, column, cellValue){
                return cellValue.toFixed(2)
            },


        }

    }
</script>

<style scoped>

</style>