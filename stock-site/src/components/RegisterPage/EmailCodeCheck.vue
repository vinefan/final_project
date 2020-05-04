<template>
    <div class="emailcheck-wrapper">
        <div class="check-box">
            <h2>邮箱验证</h2>
            <div class="form">
                <p>请查看邮箱获取验证码并填写到下方输入框中：</p>
                <el-input v-model="emailcode" placeholder=''></el-input>
                <div class="login-buttons">
                    <el-button type="primary" @click="sendEmailCheck" icon='el-icon-s-promotion'>发送</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            emailcode: ''
        }
    },
    methods: {
        sendEmailCheck: function(){

            if(this.emailcode == ''){
                this.$message({
                    message: '请填写验证码',
                    type: 'warning',
                    offset: 60
                    });
                return
            }

            var user = this.$route.query.user
            var msg = {
                email: user.email,
                password: user.password,
                activeCode: this.emailcode
            }

            this.axios({
                method: "post",
                url:"http://112.74.58.75:8010/active",
                data: msg
                })
            .then((Response)=>{
                status = Response.data.status

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
                        title: '完成注册',
                        message: '可查看个人首页',
                        type: 'success',
                        showClose: false,
                        duration: '2200',
                    });
                    this.$router.push({
                        path: '/center',
                        query: {user: user}
                    })
                }

            })
            .catch(()=>{
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
    }
}
</script>

<style scoped>

.form{
    width: 80%;
    margin: auto;
}

.form p{
    margin-top: 40px;
    color: #999;
}
.form .el-input{
    width: 80%;
    margin-bottom: 20px;
}
.el-button{
    width: 100px;
}
.emailcheck-wrapper{
    width:100%;
    height: 670px;
    background-image: url('../../assets/login_bg.jpg');
    background-size: 100%  ;
    padding-top: 60px;
}
.check-box{
    width: 500px;
    height: 350px;
    margin: auto;
    border: solid 1px #eee;
    border-radius: 9px;
    background: #fff;
    opacity: 0.96;
    padding-top: 25px;
}

@media screen and (min-width: 320px) and (max-width: 450px){
    .check-box{
        width: 350px;
        margin-top: 70px;
    }
}
.check-box h2{
    width: 80%;
    margin: 15px auto 15px;
    text-align: center;
    font-size: 30px;
    color: #444;
    border-bottom: 1px #777 dashed;
    padding-bottom: 10px;
}   

</style>
