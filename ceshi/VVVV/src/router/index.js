import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bb from '@/components/bb'
import cc from '@/components/cc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/b',
      name: 'bb',
      component: bb,
      // beforeEnter(to,from,next){
      //   console.log(from)
      //   next()
      // }
    },
    {
      path: '/c',
      name: 'cc',
      component: cc
    },
    
  ]
})
