<template>
  <div class="hello">
    <h2 @click="$store.commit('add')">change</h2>
    <div>{{$store.state.count}}</div>
    <router-link to="/">//////////////</router-link>
  </div>
</template>

<script>
import store from '@/vuex/store'
export default {
  store,
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
