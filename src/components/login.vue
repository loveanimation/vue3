<template>
  <div>
    login
    <button @click="back">返回</button>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("组件内", to, from);
    next();
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>