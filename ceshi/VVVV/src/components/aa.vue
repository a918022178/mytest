<template>
  <div id="aa">
      {{name}}
      <button @touchstart="qq">sdgv</button>
      <router-link tag="div" to="/">
        <a>/foo</a>
        <a>ssss</a>
      </router-link>
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
