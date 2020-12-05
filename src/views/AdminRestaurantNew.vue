<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm />
  </div>
</template>


<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";

export default {
  components: {
    AdminRestaurantForm,
  },
  methods: {
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      //要取得表單的內容，需要透過 entries() 方法來逐條列出表單的欄位和值，現在我們先把內容印到 console 裡觀察
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>