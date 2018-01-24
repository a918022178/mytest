<template>
    <!-- <transition :name="name"> -->
        <div class="hello">
            <p>dfgdsfgsdhsfdhsf</p>
            <p>zsdgsdhdfhjfdghkmgf</p>
            <router-link to="/">////////</router-link>
            <router-link to="/b">bbbbbbbb</router-link>
            <!-- <Bb></Bb> -->
        </div>
    <!-- </transition> -->
</template>

<script>
import Bb from './bb'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      qq:0,
      name:'aa'
    }
  },
  components:{
      Bb
  },
  mounted(){
    this.qq = 1;
    this.name = 'bb';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
div{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
}
.aa-enter-active,
.aa-leave-active{
    transition: all 2s;
}
.bb-enter,
.bb-leave-to{
    transform: translate(-100%);
    opacity: 0;
}
.bb-enter-active,
.bb-leave-active{
    transition: all 2s;
}
.aa-enter,
.aa-leave-to{
    transform: translate(100%);
    opacity: 0;
}

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
