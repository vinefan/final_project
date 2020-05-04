<template>
    <div class="search-wrapper">
        
        
    </div>
</template>

<script>
    export default {
        name: "Search",
        // data: function(){
        //     return{
        //         input: '',
        //         ls: []
        //     }
        // },
        // methods: {
        //     search: function(){
        //         var data = {
        //             text: this.input
        //         }

        //         if(data.text == ''){
        //             return
        //         }

        //         this.axios({
        //             method: "post",
        //             url: "http://112.74.58.75:8010/searchStock",
        //             data: data
        //         })
        //         .then((response)=>{
                    
        //         })
        //         .cathc(()=>{

        //         })
        //     },
        //     changedInput: function(){
                
        //     }
        // }
    }
</script>

<style scoped>
.result-ls{
    width: 70%;
    height: 5px;
    background: #eee;
    margin-left: 10%;
}
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
    margin: 0px 2% 0 10%;
}
.botton{
    width: 15%;
    /* margin-top: 5px; */
}

</style>