<template>
    <div class="search-wrapper">
        <div class="search-box">
            <div class="search">
                <el-input placeholder="" v-model="input" class="input-with-select" size="large">
                </el-input>
            </div>
            <div class="button">
            <el-button icon="el-icon-search" type="primary" size="large" @click="search"  circle></el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data: function(){
            return{
                input: ''
            }
        },
        methods: {
            search: function(){
                var data = {
                    text: this.input
                }

                if(data.text == ''){
                    return
                }

                this.axios({
                    method: "post",
                    url: "http://112.74.58.75:8010/searchStock",
                    data: data
                })
                .then((response)=>{
                    
                })
                .cathc(()=>{

                })
            }
        }
    }
</script>

<style scoped>
.search-wrapper{
    width: 100%;
    height: 70px;
    /* background: #000; */
}
.search-box{
    margin-top: 15px;
    width: 50%;
    min-width: 400px;
    height: 90%;
    /* background: #eee; */
}
.botton,
.search{
    float: left;
}
.search{
    width: 70%;
    margin: 0px 5% 0 10%;
}
.botton{
    width: 15%;
    /* margin-top: 5px; */
}

</style>