import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import aa from '@/components/aa'
import bb from '@/components/bb'
import cc from '@/components/cc'
import dd from '@/components/dd'
import ee from '@/components/ee'
import ff from '@/components/ff'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)

export default new Router({
// mode : 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/a',
      name: 'aa',
      component: aa
    },
    {
      path: '/b',
      name: 'bb',
      component: bb
    },
    {
      path: '/c',
      name: 'cc',
      component: cc,
    },
  ]
})
