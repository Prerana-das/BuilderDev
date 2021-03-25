import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import heading from '@/components/heading'
import home from '@/components/home'
import dragDrop from '@/components/dragDrop'
import dragTest from '@/components/dragTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/heading',
      name: 'heading',
      component: heading
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/dragDrop',
      name: 'dragDrop',
      component: dragDrop
    },
    {
      path: '/dragTest',
      name: 'dragTest',
      component: dragTest
    },
  ]
})
