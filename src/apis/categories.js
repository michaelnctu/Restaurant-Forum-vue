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

  //name要跟傳到後端的資料裡key值一樣
  postCategories({ name }) {
    return apiHelper.post(`/admin/categories`, { name }, {
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })
  },


  putCategories({ categoryId, name }) {
    return apiHelper.put(`/admin/categories/${categoryId}`, { name }, {
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })
  },

  deleteCategory({ categoryId }) {
    return apiHelper.delete(`/admin/categories/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })
  }

}