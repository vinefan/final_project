<template>
  <div id="app">
    <Nav v-bind:link='link'></Nav>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from "./components/CommonComponents/Nav";
import Footer from  './components/CommonComponents/Footer'

export default {
  name: 'App',
  components: {
    // BasePage,
    Nav,
    Footer
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
