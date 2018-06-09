import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// @/ means go to the root directory which is the source directory
import About from '@/components/About'
import ViewProfile from '@/components/ViewProfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/profile/:user_id',
      name: 'ViewProfile',
      component: ViewProfile
    }
  ]
})
