import { apiHelper } from './../utils/helpers'
const getToken = localStorage.getItem('token') //token是key name

export default {

  getCategories() {
    return apiHelper.get(`/admin/categories`, { //參考axios 中間帶一個data
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })
  },

  postCategories(category) {
    return apiHelper.post(`/admin/categories`, category, {
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })
  },

  putCategories(categoryId, category) {
    return apiHelper.put(`/admin/categories/${categoryId}`, category, {
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })
  },

  deleteCategories(categoryId) {
    return apiHelper.delete(`/admin/categories/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })
  }

}