<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- 
      <router-view/>
      When we request a certain page, this is where that component is loaded in. For example when we request 'HelloWorld', then it's going to get loaded in right here 
      -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
