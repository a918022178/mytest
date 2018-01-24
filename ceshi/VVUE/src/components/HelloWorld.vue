<template>
    <!-- <transition :name="name"> -->
      <div class="hello">
            <p>d54654654654654fdhsf</p>
            <p>7458785768574658758jfdghkmgf</p>
            <!-- <a href="www.ddd.com/index#/hhgsf">asbd</a> -->
            <router-link to="/a">aaaaa</router-link>
            <router-link to="/b">bbbbb</router-link>
            <button @click="bb">s</button>
            <div>{{$route.query.a}}</div>
            <div>{{$route.hash}}</div>
      </div>
    <!-- </transition> -->
</template>

<script>
import {getCookie,setCookie} from '../js/c.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      qq:0,
      name:'aa',
    }
  },
  created(){
    // alert(222222)
    //   console.log(111111111)
    // if(!getCookie('qqq')){
    //   location.reload()
    //   setCookie('qqq',123)
    // }
    // setTimeout(() => {
    //   setCookie('qqq','')
    // }, 2000);
  },
  mounted(){
    this.qq=1;
    this.name='bb';
  },
  methods:{
    bb(){
      // this.$router.push('/button')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
    position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    text-align: center;
}
.aa-enter-active,
.aa-leave-active{
    transition: all 2s;
}
.aa-enter,
.aa-leave-to{
    transform: translate(100%);
    opacity: 0;
}
.bb-enter-active,
.bb-leave-active{
    transition: all 2s;
}
.bb-enter,
.bb-leave-to{
    transform: translate(-100%);
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
