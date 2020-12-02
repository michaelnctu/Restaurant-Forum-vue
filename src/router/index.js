import Vue from 'vue'
import VueRouter from 'vue-router'
import notFound from '../views/notFound.vue'
import Signin from '../views/Signin.vue'
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
    component: Signin

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
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path: '/restaurants/feeds',
    name: 'resturants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/restaurants/top',
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
  linkExactActiveClass: 'active',  //如果完全匹配則加上active
  routes

})

export default router
