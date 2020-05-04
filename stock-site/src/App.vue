<template>
  <div id="app">
    <Nav v-bind:link='link'></Nav>
    <EmailCheck></EmailCheck>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "./components/CommonComponents/Nav";
import Footer from  './components/CommonComponents/Footer'
import Search from './components/CommonComponents/Search'
import EmailCheck from './components/RegisterPage/EmailCodeCheck'

export default {
  name: 'App',
  components: {
    // BasePage,
    Nav,
    Footer,
    Search,
    EmailCheck
  },
  data: function(){
    return{
      link: '/login'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/

}
</style>
