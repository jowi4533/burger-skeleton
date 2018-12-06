import Kitchen from './views/Kitchen.vue'
import Vue from 'vue'
import Router from 'vue-router'
import Ordering from './views/Ordering.vue'
import Kitchen from './views/Kitchen.vue'
import BuildYourBurger from './views/BuildYourBurger.vue'
import MenuPage from './views/MenuPage.vue'
import OrderOverview from './views/OrderOverview.vue'
import Payment from './views/Payment.vue'
import SidesAndDrinks from './views/SidesAndDrinks.vue'
import WelcomePage from './views/WelcomePage.vue'

Vue.use(Router)

let router = new Router({
  routes: [

    {
      path: '/ordering',
      meta: {
        title: 'Kraft Burgers',
      },
      name: 'ordering',
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
      component: () => import(/* webpackChunkName: "read" */ './views/Kitchen.vue')
    },

  ]

})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
