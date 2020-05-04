<template>
  <div class="nav-wrapper">
        <div class="logo">
            <h2>Stock - site</h2>
        </div>

        <div class="search-box">
            <div class="search">
                <el-input placeholder="搜索股票" v-model="input" class="input-with-select" size="large" @input="changedInput">
                </el-input>
            </div>
            <div class="result-ls">
                <transition-group name="list" tag="div" mode="out-in" v-cloak>
                <div class="stock" v-for="(stock,index) in ls" v-bind:key="index" v-bind:class="{selected: sel_stock==index}" @mouseover="selectStock(index)">
                    <p class="stock-id">{{ stock.stockid }}</p>
                    <p class="stock-price"> {{ stock.price }}</p>
                    <p class="stock-rate"> {{ stock.rate }}</p>
                    <div>
                        <el-button type="danger" icon="el-icon-plus" size="mini"  round></el-button>
                    </div>
                </div>
                </transition-group>
            </div>
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
            input: '',
            sel_stock: -1
      }
  },
  mounted: function () {
      this.$router.path = this.link
    },
    methods: {
        changedInput: function(){
            var data = {
                    text: this.input
                }
            if(data == '' || data == ' '){
                return
            }
    
            this.axios({
                method: "post",
                url: "http://112.74.58.75:8010/searchStock",
                data: data
            })
            .then((response)=>{
                this.ls = response.data.stocks
            })
            .cathc(()=>{

            })
        },
        selectStock: function(index){
            this.sel_stock = index
        }
    }

}
</script>

<style>
.selected{
    background: rgb(250, 250, 250);
}
.stock{
    width: 100%;
    border-bottom: solid 1px #eee;
    margin: auto;
    padding-bottom: 6px;
}
.stock-price,
.stock-rate,
.stock-id{
    width: 22%;
    /* margin-left: 10px; */
    display: inline-block;
}
.stock-id{
    width: 37%;
    margin-left: 10px;
    padding-left: 10px;
}

.stock div{
    display: inline-block;
    width: 10%;
}
.stock p{
    margin: 12px 0;
}
.search-box{
    width: 30%;
    min-width: 250px;
    float: left;
    margin-top: 15px;
    margin-right: 12%;
    border: 1px #aaa solid;
    border-radius: 4px;
}
.result-ls{
    width: 100%;
    /* height: 50px; */
    /* background: #ddd; */
    float: left;
}
.nav-wrapper{
    width: 100%;
    height: 70px;
    border-bottom: 1px solid rgb(248, 248, 248);
    /* background: linear-gradient(to bottom right, #eee, #fff); */
    box-shadow: rgb(250, 250, 250) 10px 10px 10px ;
    z-index: 100;
    /* float: left; */
}
.logo{
    width: 270px;
    height: 90%;
    /* background: #aaa; */
    float: left;
    margin:  5px 20px 2px;

}
.buttons{
    width: 350px;
    height: 90%;
    /* background: #aaa; */
    float: left;
    margin:  0px 50px;

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
