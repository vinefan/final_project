<template>
  <div id="app">
    <Nav></Nav>
    <BasePage/>

  </div>
</template>

<script>
import BasePage from "./components/BasePage";
import Nav from "./components/CommonComponents/Nav"

export default {
  name: 'App',
  components: {
    BasePage,
    Nav
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
