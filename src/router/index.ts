import Vue from 'vue'
import Router from 'vue-router'
// import Notfound from './views/Notfound'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home')
    },
    // {
    //   path: '*',
    //   name: '404',
    //   component: Notfound
    // }
  ]
})
