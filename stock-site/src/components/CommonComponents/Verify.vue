<template>
    <div class="verify-wrapper">
        <div class="verify-box">
            <h2>· 人机验证 ·</h2>
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
            msg: '',
            user: {},
            type: 0
        }
    } ,
    methods: {
            onSuccess(){
                this.msg = "验证成功"
                // alert(this.$route.query.user)
                this.timer = setTimeout(()=>{   //设置延迟执行
                    if(this.type == 0){
                        this.axios({
                            method: "post",
                            url:"http://112.74.58.75:8010/register",
                            data: this.user
                            })
                            .then((response)=> {
                                status = response.data.status
                                if(status == 0){
                                    this.$notify({
                                        title: '警告',
                                        message: '账户已存在',
                                        type: 'warning',
                                        showClose: false,
                                        duration: '2200',
                                    });
                                    this.$router.push('/register')
                                }
                                if(status == 400){
                                    this.$notify({
                                        title: '警告',
                                        message: '网络异常，请稍后再试',
                                        type: 'warning',
                                        showClose: false,
                                        duration: '2200',
                                    });
                                    this.$router.push('/register')
                                }
                                if(status == 200){
                                    this.$notify({
                                        title: '注册成功',
                                        message: '请查看邮箱并验证',
                                        type: 'success',
                                        showClose: false,
                                        duration: '2200',
                                    });
                                    this.$router.push('/center')
                                }

                            })
                            .catch(()=> {
                                this.isloading = false;
                                this.$notify({
                                    title: '警告',
                                    message: '网络异常，请稍后再试',
                                    type: 'warning',
                                    showClose: false,
                                    duration: '2200',
                                });
                            })
                    }else if(this.type ==1){
                        this.axios({
                            method: "post",
                            url:"http://112.74.58.75:8010/login",
                            data: this.user
                            })
                            .then((response)=> {
                                status = response.data.status
                                if(status == 408){
                                    this.$notify({
                                        title: '警告',
                                        message: '用户名或密码错误',
                                        type: 'warning',
                                        showClose: false,
                                        duration: '2200',
                                    });
                                    this.$router.push('/login')
                                }
                                if(status == 200){
                                    this.$notify({
                                        title: '登录成功',
                                        message: '可查看个人页面',
                                        type: 'success',
                                        showClose: false,
                                        duration: '2200',
                                    });
                                    this.$router.push('/center')
                                }

                                // 设置session, 还有设置session_time
                                // this.$cookies.set('superSession', response.data.session);
                                // 跳转到主页

                            })
                            .catch(()=> {
                                this.isloading = false;
                                this.$notify({
                                    title: '警告',
                                    message: '网络异常，请稍后再试',
                                    type: 'warning',
                                    showClose: false,
                                    duration: '2200',
                                });
                            })
                    }
                    
                },700);

            },
            onFail(){
                
            },
            onRefresh(){
                
            }
        },
    mounted: function(){
        this.user = this.$route.query.user
        this.type = this.$route.query.type
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
    width: 80%;
    margin: 20px auto;
    padding: 8px;
    text-align: center;
    color: #333;
    border-bottom: 1px #777 dashed;
    margin-bottom: 40px;    
}
</style>