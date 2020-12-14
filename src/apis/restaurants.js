import { apiHelper } from './../utils/helpers'
const getToken = localStorage.getItem('token') //token是key name

export default {
  getRestaurants({ page, categoryId }) {

    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, { //透過 URLSearchParams.toString() 來產生 queryString
      headers: { Authorization: `Bearer ${getToken}` } //帶上token以通關
    })
  },

  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })
  },

  getTopRestaurants() {
    return apiHelper.get('/restaurants/top', {
      headers: { Authorization: `Bearer ${getToken}` }
    })
  },

  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, {
      headers: { Authorization: `Bearer ${getToken}` }
    })
  },

  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, {
      headers: { Authorization: `Bearer ${getToken}` }
    })
  }

}
