<template>
    <div>
        fdgbdfhfd
        <router-link to="/">///////////////////////</router-link>
        <div></div>
        <router-link to="/a">aaaaaaaaaaaaaaaaaaaaaaaaaa</router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      show: 0,
      name: "aa"
    };
  },
  mounted() {
    this.name = "bb";
  },
  methods:{
      cli(){
          this.show = 1;
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
// .bb-enter,
// .bb-leave-to{
//     transform: translate(-100%);
//     opacity: 0;
// }
// .bb-enter-active,
// .bb-leave-active{
//     transition: all 2s;
// }
h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
