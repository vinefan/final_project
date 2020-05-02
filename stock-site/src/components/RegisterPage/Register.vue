<template>
    <div class="login-wrapper">
        <div class="login">
            <h2>注 册</h2>
            <div class="form">
                <h3>注册账号</h3>
                <el-input v-model="register.email" placeholder='仅支持邮箱号注册'></el-input>
                <h3>设置密码</h3>
                <el-input v-model="register.password" placeholder="密码" show-password></el-input>
               
                

                <div class="login-buttons">
                    <el-button type="primary">验证邮箱</el-button>
                </div>
                
             </div>
             <div class="description">
                 <h6>[说明]</h6>
                 <p>注册后您可获得以下功能: </p>
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
            register:{
                email: "",
                password: ''
            },
            msg: ''
        }
    }   

}
</script>

<style  scoped>

.login-wrapper{
    width:100%;
    height: 700px;
    /* background: #000; */
    background-image: url('../../assets/login_bg.jpg');
    background-size: 100%  ;
    padding-top: 60px;
    /* background-repeat: no-repeat; */
}
.login{
    width: 500px;
    /* height: 600px; */
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
    width: 100%; 
    margin: 30px auto 0;
}
.login-buttons .el-button{
    display: inline-block;
    width: 33%;
    margin: auto;
    min-width: 100px;
}
#button-re{
    text-align: right;
}

.description{
    width: 70%;
    margin: 0 auto;
    color: #666;
    margin-bottom: 30px;
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
.slide-verify-slider{
    width: 200px !important;
}

</style>
