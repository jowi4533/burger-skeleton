//import Kitchen from './views/Kitchen.vue'
import Vue from 'vue'
import Router from 'vue-router'
import Ordering from './views/Ordering.vue'
import Kitchen from './views/Kitchen.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
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
      name: 'Ordering',
      component: Ordering
    },
    // {
    //   path: '/frontpage',
    //   meta: {
    //     title: 'RAW Sauce Burgers',
    //   },
    //   name: 'frontpage',
    //   component: () => import( './views/FrontPage.vue')
    //
    // },
    {
      path: '/kitchen',
      meta: {
        title: 'Kitchen',
      },
      name: 'kitchen',
      // route level code-splitting
      // this generates a separate chunk (read.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Kitchen
    },

  ]

})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
