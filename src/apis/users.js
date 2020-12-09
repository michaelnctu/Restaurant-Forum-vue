import { apiHelper } from './../utils/helpers'
const getToken = localStorage.getItem('token')

export default {

  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null, { //參考axios 中間帶一個data
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })
  },

  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`, { //參考axios 中間不需要帶一個data
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })
  },

  addLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null, { //參考axios 中間帶一個data
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })
  },

  deleteLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`, { //參考axios 中間帶一個data
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })
  },



}