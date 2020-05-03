<template>
    <div class="login-wrapper">
        <div class="login">
            <h2>登 录</h2>
            <div class="form">
                <h3>账户</h3>
                <el-input v-model="login.email" placeholder=注册邮箱号></el-input>
                <h3>密码</h3>
                <el-input v-model="login.password" placeholder="密码" show-password></el-input>
                <div class="login-buttons">
                    <el-button type="primary" @click="sendLoginMsg">登录</el-button>
                </div>
                <div class="login-buttons" id="button-re">
                    <el-button type="info" @click="jumpToRejist" >注册</el-button>
                </div>
             </div>
             <div class="description">
                 <h6>[说明]</h6>
                 <p>登录后您可获得以下功能: </p>
                 <ul>
                     <li>对自选股票进行操作.</li>
                     <li>为自选股票添加备注.</li>
                     <li>股票分析.</li>
                 </ul>
             </div>
             
        </div>
    </div>
</template>

<script>
import { JSEncrypt } from 'jsencrypt';

export default {
    data: function(){
        return{
            login:{
                email: "",
                password: '',
                pubKey: "-----BEGIN PUBLIC KEY----- MIGfMA0GCSqGSIb3 \
                    DQEBAQUAA4GNADCBiQKBgQDlOJu6TyygqxfWT7eLtGDwajtNFOb \
                    9I5XRb6khyfD1Yt3YiCgQWMNW649887VGJiGr/L5i2osbl8C9+WJTeu \
                    cF+S76xFxdU6jE0NQ+Z+zEdhUTooNRaY5nZiu5PgDB0ED/ZKBUSLKL7ei \
                    bMxZtMlUDHjm4gwQco1KRMDSmXSMkDwIDAQAB-----END PUBLIC KEY-----",
            }
        }
    },
    methods:{
        sendLoginMsg: function(){
            var login = this.login;
            // 判断表单
            if( login.email==''){
                this.$notify({
                        title: '警告',
                        message: '邮箱为空',
                        type: 'warning',
                        showClose: false,
                        duration: '2200',
                    });
                return
            }
            if(login.password==''){
                this.$notify({
                        title: '警告',
                        message: '密码为空',
                        type: 'warning',
                        showClose: false,
                        duration: '2200',
                    });
                return
            }

            this.$router.push({path: '/verify', query: {user: login, type: 1}})
            //加密
            // let encrypor = new JSEncrypt();
            // encrypor.setPublicKey(this.pubKey);            
            // return encrypor.encrypt(data)

            // 发送请求
            var that = this
            that.axios({
                method: "post",
                url:"http://112.74.58.75:8010/login",
                data: login
                })
                .then((response)=> {

                    // 设置session, 还有设置session_time
                    that.$cookies.set('superSession', response.data.session);
                    // 跳转到主页
                    // this.$router.push('/check/in')
                    that.$router.push('/center')

                })
                .catch(()=> {
                    that.isloading = false;
                    that.$notify({
                        title: '警告',
                        message: '网络异常，请稍后再试',
                        type: 'warning',
                        showClose: false,
                        duration: '2200',
                    });
                })
        },
        jumpToRejist: function(){
            
            this.$router.push('/register')
        }
    }
}
</script>

<style  scoped>
@media screen and (min-width: 320px) and (max-width: 450px){
    .login{
        width: 350px;
    }
}
.login-wrapper{
    width:100%;
    height: 670px;
    /* background: #000; */
    background-image: url('../../assets/login_bg.jpg');
    background-size: 100%  ;
    padding-top: 60px;
    /* background-repeat: no-repeat; */
}
.login{
    width: 500px;
    height: 600px;
    margin: auto;
    /* background: #eee; */
    border: solid 1px #eee;
    border-radius: 9px;
    /* box-shadow: rgb(218, 218, 218) 2px 5px 10px 5px; */
    background: #fff;
    opacity: 0.96;
}

@media screen and (min-width: 320px) and (max-width: 450px){
    .login{
        width: 350px;
        margin-top: 70px;
    }
}
.form{
    width: 70%;
    /* margin-top: 40px;
    margin-left: 20px; */
    margin: auto;
    margin-top: 50px;
}
.login h2{
    width: 90%;
    margin: 15px auto 15px;
    text-align: center;
    font-size: 30px;
    color: #333;
    border-bottom: 1px #777 dashed;
}
.form h3{
    margin-top: 30px;
    margin-bottom: 7px;
    color: #444;
}

.login-buttons{
    display: inline-block;
    width: 50%; 
    margin-top: 30px;
}
.login-buttons .el-button{
    width: 50%;
}
#button-re{
    text-align: right;
}

.description{
    width: 70%;
    margin: 0 auto;
    color: #666;
}
.description h6{
    font-size: 16px;
    margin-bottom: 0px;
}

.description ul{
    padding-left: 10px;
}
.description li{
    padding: 5px;
}


</style>