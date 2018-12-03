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
      path: '/WelcomePage',
      meta: {
        title: 'Welcome',
      },
      name: 'WelcomePage',
      component: WelcomePage
    },

    {
      path: '/MenuPage',
      meta: {
        title: 'Menu for burger ordering',
      },
      name: 'MenuPage',
      component: MenuPage
    },

    {
      path: '/MenuPage/BuildYourBurger',
      meta: {
        title: 'This is where you create your burger',
      },
      name: 'BuildYourBurger',
      component: BuildYourBurger
    },

    {
      path: '/MenuPage/SidesAndDrinks',
      meta: {
        title: 'This is where you order Sides',
      },
      name: 'sidesAndDrinks',
      component: SidesAndDrinks
    },

    {
      path: '/MenuPage/OrderOverview',
      meta: {
        title: 'This is where you overview your order',
      },
      name: 'OrderOverview',
      component: OrderOverview
    },

    {
      path: '/MenuPage/BuildYourBurger',
      meta: {
        title: 'This is where you pay',
      },
      name: 'payment',
      component: Payment
    },

    {
      path: '/ordering',
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
      component: Kitchen
    },

  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
