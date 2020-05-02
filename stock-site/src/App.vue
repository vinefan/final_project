<template>
  <div id="app">
    <Nav></Nav>
    <!-- <BasePage/> -->
    <!-- <Login></Login> -->
    <!-- <Register></Register> -->
    <Verify></Verify>
  </div>
</template>

<script>
// import BasePage from "./components/BasePage";
import Nav from "./components/CommonComponents/Nav";
// import Login from "./components/LoginPage/Login"
// import Register from "./components/RegisterPage/Register"
import Verify from "./components/CommonComponents/Verify"

export default {
  name: 'App',
  components: {
    // BasePage,
    Nav,
    Verify
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
