<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from "./views/Home";
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {
  margin: 0px;
  padding: 0px;
}
</style>
