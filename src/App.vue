<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="tiao">跳转</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  watch: {
    $route(to, from) {
      // 监听路由变化
      console.log("路由变化", to, from);
    },
  },
  methods: {
    tiao() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
