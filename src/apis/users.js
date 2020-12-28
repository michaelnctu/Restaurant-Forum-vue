import { apiHelper } from './../utils/helpers'
const getToken = localStorage.getItem('token')

export default {
  getCurrentUser() {
    return apiHelper.get(`/get_current_user`, {
      headers: { Authorization: `Bearer ${getToken}` }
    })
  },

  get({ userId }) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken}` }
    })
  },

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
  getTopUsers() {
    return apiHelper.get('/users/top', {
      headers: { Authorization: `Bearer ${getToken}` }
    })
  },
  getUser({ userId }) {
    return apiHelper.get(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${getToken}` }
    })
  },
  FollowUsers({ userId }) {
    return apiHelper.post(`/following/${userId}`, null, { //參考axios 中間帶一個data
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })
  },
  unFollowUsers({ userId }) {
    return apiHelper.delete(`/following/${userId}`, { //參考axios 中間帶一個data
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })

  },


}