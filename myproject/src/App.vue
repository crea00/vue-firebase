<template>
  <div id="app">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "app",
  // data is function which returns an object
  // because data function protects our data
  data() {
    return {
      title: "My first Vue app, wooo :)"
    };
  }
};
</script>

<style>
h1 {
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>
