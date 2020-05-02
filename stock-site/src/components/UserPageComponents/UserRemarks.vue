<template>
    <div>
        <el-table
                :data="userData"
                style="width: 100%"
                height="200"
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

</style>