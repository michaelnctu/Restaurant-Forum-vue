import { apiHelper } from './../utils/helpers'
const getToken = localStorage.getItem('token') //token是key name

export default {
  //帶入需要的參數
  signIn({ email, password }) {

    return apiHelper.post('/signin', {
      //這裡return的會是一個Promise
      email,
      password
    })
  },

  // signUp({ formData }) {
  //   return apiHelper.post(`/signup`, formData, { //參考axios 中間帶一個data
  //     headers: {
  //       Authorization: `Bearer ${getToken}`
  //     }
  //   })
  // },

  signUp({ formData }) {
    return apiHelper.post(`/signup`, formData, { //參考axios 中間帶一個data
      headers: {
        Authorization: `Bearer ${getToken}`
      }
    })
  },

}