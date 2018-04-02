import Vue from 'vue'
import Router from 'vue-router'
const Lodash=()=>import('@/components/Lodash')

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Lodash',
      component: Lodash
    }
  ]
})
