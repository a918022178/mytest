<template>
    <div>
        <transition :name="name">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import Bb from './bb'
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  components:{
      
  },
  mounted(){
    this.qq = 1;
    this.name = 'bb';
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>

</style>
