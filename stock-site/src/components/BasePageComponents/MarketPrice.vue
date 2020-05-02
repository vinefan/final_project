<template>
    <div>
        <el-table
                :data="bigPanel"
                height="180"
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
                    label="涨幅">
            </el-table-column>
            <el-table-column
                    prop="price"
                    label="现价">
            </el-table-column>
            <el-table-column
                    prop="updown"
                    label="涨跌">
            </el-table-column>
            <el-table-column
                    prop="quantity"
                    label="总量">
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

    }
</script>

<style scoped>

</style>