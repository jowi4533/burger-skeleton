import Vue from 'vue'
import Router from 'vue-router'
import OverView from './components/OverView.vue'
import Kitchen from './views/Kitchen.vue'

Vue.use(Router)

let router = new Router({
  routes: [

    {
      path: '/OverView',
      meta: {
        title: 'Raw Sauce',
      },
      name: 'HomePage',
      component: () => import(/* webpackChunkName: "read" */ './views/HomePage.vue')
    },
    {
      path: '/Ordering',
      meta: {
        title: 'Kraft Burgers',
      },
      name: 'overView',
      component: OverView
    },

    {
      path: '/kitchen',
      meta: {
        title: 'Kitchen',
      },
      name: 'kitchen',
      component: Kitchen
    },

  ]

})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
