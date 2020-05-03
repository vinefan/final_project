<template>
    <div>
        <div class="g-card" v-if="GShow">
            <div v-for="(item,index) in recommendData" :key="index" class="i-card">
                <el-card :body-style="{ padding: '0px 15px' }">
                    <p class="s-text">{{item.text}}</p>
                    <div class="s-label">
                        <el-tag>建议{{item.type}}拥有</el-tag>
                    </div>
                    <div class="s-label">
                        <p>数据来源：{{item.source}}</p>
                    </div>
                </el-card>
            </div>
        </div>
        <div class="g-card" v-if="!GShow">
            <p style="font-size: 20px;color: grey">
                当前股票暂无评论数据
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
        props:{
            recommendData:Array
        },
        data(){
            return{
                GShow:false
            }
        }
    }
</script>

<style scoped>
    .g-card{
        /*height: 100%;*/
        display: flex;
        justify-content: center;
        align-items: stretch;
    }
    .i-card{
        padding: 0 15px;
    }
    .s-text{
        text-indent:2em;
        line-height: 1.75;
    }
    .s-label{
        /*padding: 3px 5px;*/
    }
    .s-label el-tag{
        width: 100%;
    }
    .s-label p{
        font-size: 12px;
        color:grey;
    }
</style>