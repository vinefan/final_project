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
                    <el-button type="primary">登录</el-button>
                </div>
                <div class="login-buttons" id="button-re">
                    <el-button type="info" >注册</el-button>
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
export default {
    data: function(){
        return{
            login:{
                email: "",
                password: ''
            }
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