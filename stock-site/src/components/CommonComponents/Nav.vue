<template>
  <div class="nav-wrapper">
      <div class="logo">
          <h2>Stock - site</h2>
      </div>
      <div class="buttons">
          <el-menu router default-active='/'
                    class="el-menu-demo" 
                    mode="horizontal" 
                    @select="handleSelect"
                    active-text-color="#d00305"
                    >
            <el-menu-item index="/center" class="center"><i class="el-icon-s-custom"></i>个人中心</el-menu-item>
            <el-menu-item index="/" class="home">首页</el-menu-item>
            <el-menu-item index="/login" class="login">登录</el-menu-item>
            <el-menu-item index="/register" class="register">注册</el-menu-item>

          </el-menu>
      </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  props:['link'],
  data: function(){
      return{
          activeIndex: this.$router.path,

      }
  },
  mounted: function () {
      this.$router.path = this.link
    }

}
</script>

<style>

.nav-wrapper{
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgb(248, 248, 248);
    /* background: linear-gradient(to bottom right, #eee, #fff); */
    box-shadow: rgb(250, 250, 250) 10px 10px 10px ;
}
.logo{
    width: 350px;
    height: 90%;
    /* background: #aaa; */
    float: left;
    margin:  5px 20px 2px;
    margin-right: 40%;
}
.buttons{
    width: 350px;
    height: 90%;
    /* background: #aaa; */
    float: left;
    margin:  3.5px 50px;

}
@font-face {
        font-family:ZEROES ;
        src: url('../../font/ZEROES__.ttf');
    }
.logo h2{
    font-family: ZEROES;
    font-size: 40px;
    margin: 3%;
    color: rgb(184, 39, 39);
}

.el-menu-demo{
    width: 360px;
}

.el-menu-item{
    font-size: 16px !important;
    text-align: center;
    width: 70px;
}
.el-menu-demo .center{
    width: 140px;
}
</style>
