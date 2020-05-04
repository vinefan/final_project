<template>
    <div>
        <el-table
                :data="data"
                v-loading=loading
                height="400"
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
                    :formatter="formatterRate"
                    label="涨跌">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "StocksTable",
        props:{
            data:Array,
        },
        data(){
            return{
                loading:true
            }
        },
        watch:{
          data:function (val) {
            if(val.length>1){
                this.loading=false
            }
          },
        },
        methods:{
            formatterRate(row, column, cellValue){
                return cellValue+'%'
            },
        }

    }
</script>

<style scoped>

</style>