import Vue from 'vue'
import VueRouter from 'vue-router'
import notFound from '../views/notFound.vue'
import SignIn from '../views/Signin.vue'
import Restaurants from '../views/Restaurants.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurants'

  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn

  },
  {
    path: '/signup',
    name: 'sign-up',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/resturants/feeds',
    name: 'resturants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/resturants/top',
    name: 'resturants-top',
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: notFound
  }

]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes

})

export default router
