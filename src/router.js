import Kitchen from './views/Kitchen.vue'
import Vue from 'vue'
import Router from 'vue-router'
import Ordering from './views/Ordering.vue'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: 'Kraft Burgers',
      },
      name: 'ordering',
      component: Ordering
    },
    {
      path: '/kitchen',
      meta: {
        title: 'Kitchen',
      },
      name: 'kitchen',
      // route level code-splitting
      // this generates a separate chunk (read.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
<<<<<<< HEAD
      component: Kitchen
    }
=======
      component: () => import(/* webpackChunkName: "read" */ './views/Kitchen.vue')
    },
    // {
    //   path: '/test',
    //   meta: {
    //     title: 'test',
    //   },
    //   name: 'test',
    //   // route level code-splitting
    //   // this generates a separate chunk (read.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "read" */ './views/Test.vue')
    // },
>>>>>>> 7d7ed550c9be55840e563df9361b8492df517279
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
