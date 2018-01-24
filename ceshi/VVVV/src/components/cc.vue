<template>
  <div id="aa">
      <router-link to="/">///////////////</router-link><br>
      <router-link to="/b">bbbbbbbbbbbbbbbbbb</router-link><br>
  </div>
</template>

<script>
export default {
  props: {
    name: {}
  },
  methods: {
    qq(e) {
      this.$emit("scroll", e);
    }
  }
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
