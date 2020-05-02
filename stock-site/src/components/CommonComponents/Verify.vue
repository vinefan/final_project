<template>
    <div class="verify-wrapper">
        <div class="verify-box">
            <h2>人机验证</h2>
            <div class="verify">
                <slide-verify 
                    w=310
                    h=140   
                    slider-text="向右滑动"
                    @success="onSuccess"
                    @fail="onFail"
                    @refresh="onRefresh"
                    ></slide-verify>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: function(){
        return{
            msg: ''
        }
    } ,
    methods: {
            onSuccess(){
                this.msg = 'login success'
            },
            onFail(){
                this.msg = ''
            },
            onRefresh(){
                this.msg = ''
            }
        } 
}
</script>

<style  scoped>
.verify-wrapper{
    width:100%;
    height: 700px;
    /* background: #000; */
    background-image: url('../../assets/login_bg.jpg');
    background-size: 100%  ;
    padding-top: 60px;
    /* background-repeat: no-repeat; */
}
.verify-box{
    width: 500px;
    height: 400px;
    margin: auto;
    /* background: #eee; */
    border: solid 1px #eee;
    border-radius: 9px;
    /* box-shadow: rgb(218, 218, 218) 2px 5px 10px 5px; */
    background: #fff;
    opacity: 0.95;
}
@media screen and (min-width: 320px) and (max-width: 450px){
    .verify-box{
        width: 95%;
        margin-top: 70px;
    }
}

.verify{
    width: 315px;
    height: 500px;
    margin: 40px auto;
}

h2{
    width: 90%;
    margin: 20px auto;
    padding-bottom: 10px;
    text-align: center;
    color: #333;
    border-bottom: 1px #777 dashed;
}
</style>