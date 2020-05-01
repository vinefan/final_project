<template>
    <div>
        <el-table
                :data="data"
                height="420"
                style="width: 100%">
            <el-table-column
                    fixed="left"
                    prop="stockid"
                    label="代码">
            </el-table-column>
            <el-table-column
                    fixed="left"
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
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "StocksTable",
        props:{
            data:Array
        }
    }
</script>

<style scoped>

</style>