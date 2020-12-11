<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      :is-processing = "isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm"
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helpers'

export default {
  name: "AdminRestaurantEdit",
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        opening_hours: "",
      },
      isProcessing: false
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },

  beforeRouteUpdate (to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  
  methods: {

    async fetchRestaurant (restaurantId) {
       try {
         console.log (this.$route.params)
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId })
        console.log ('data', data.restaurant)


        if (data.status === 'error') {
          throw new Error(data.message)
        }

        console.log ('data', data.restaurant)


        const {
        id,
        name,
        tel,
        categoryId,
        address,
        opening_hours,
        description,
        image,
      } = data.restaurant;

      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        categoryId,
        tel,
        address,
        description,
        image,
        opening_hours,
      }

       } catch(error) {
         Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
       }
    },
    async  handleAfterSubmit (formData) {
    try{
      this.isProcessing = true
      const {data} = await adminAPI.restaurants.update({ 
        restaurantId: this.restaurant.id, 
        formData })
      if (data.status !== 'success') {
          throw new Error(data.message)
        }
      this.$router.push({name: 'admin-restaurants'})

    } catch (error) {
      this.isProcessing = false
      Toast.fire({
          icon: 'error',
          title: '無法送出表單'
        })

    }
   }
  }
}
</script>