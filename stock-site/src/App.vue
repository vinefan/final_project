<template>
  <div id="app">
<!--    <BasePage/>-->
    <UserPage/>


  </div>
</template>

<script>
import BasePage from "./components/BasePage";
import UserPage from "./components/UserPage";

export default {
  name: 'App',
  components: {
    BasePage,
    UserPage
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
