import Vue from 'vue'
import VueRouter from 'vue-router'
import notFound from '../views/notFound.vue'
import Signin from '../views/Signin.vue'
import Restaurants from '../views/Restaurants.vue'
import AdminRestaurant from '../views/AdminRestaurant.vue'
import AdminRestaurants from '../views/AdminRestaurants.vue'
import store from '../store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
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
    path: '/admin',
    exact: true, //路由需要完全對應對照
    redirect: '/admin/restaurants'
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue')
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: AdminRestaurants
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: AdminRestaurant
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
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue')
  },



  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue')

  },

  {
    path: '/admin/restaurants/new',
    name: 'admin-restaurants-new',
    component: () => import('../views/AdminRestaurantNew.vue')
  },

  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit.vue')
  },
  {
    path: '/users/:id/edit',
    name: 'users-edit',
    component: () => import('../views/UserEdit.vue')
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

router.beforeEach((to, from, next) => {
  //使用dispatch 呼叫Vuex的action
  store.dispatch('fetchCurrentUser')
  next()
})

export default router
