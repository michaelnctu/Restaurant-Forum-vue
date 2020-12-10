<template>
  <form 
  v-show="!isLoading"
  @submit.stop.prevent="handleSubmit">
    <div class="form-group">
      <label for="name">Name</label>
      <input
        v-model="restaurant.name"
        id="name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      />
    </div>

    <div class="form-group">
      <label for="categoryId">Category</label>
      <select id="categoryId" class="form-control" name="categoryId" required>
        <option value="" selected disabled>--請選擇--</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label for="tel">Tel</label>
      <input
        v-model="restaurant.tel"
        id="tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
      />
    </div>

    <div class="form-group">
      <label for="address">Address</label>
      <input
        v-model="restaurant.address"
        id="address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      />
    </div>

    <div class="form-group">
      <label for="opening-hours">Opening Hours</label>
      <input
        v-model="restaurant.opening_hours"
        id="opening-hours"
        type="time"
        class="form-control"
        name="opening_hours"
      />
    </div>

    <div class="form-group">
      <label for="description">Description</label>
      <textarea
        v-model="restaurant.description"
        id="description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group">
      <label for="image">Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        class="d-block img-thumbnail mb-3"
        width="200"
        height="200"
      />

      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control-file"
        @change="handleFileChange"
      />
    </div>

    <button 
    :disabled="isProcessing"
    type="submit" 
    class="btn btn-primary">
    {{ isProcessing ? '處理中':'送出'}}
    </button>
  </form>
</template>

<script>

import adminApi from './../apis/admin'
import {Toast} from './../utils/helpers'

export default {
  name: "adminRestaurantForm",
  props: {
    initialRestaurant: {
      type: Object,
      default: () => ({
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      }),
      },
      isProcessing:{
        type:Boolean,
        default: false
    },
  },
  data() {
    return {
      categories: [],
      isLoading:true,
      restaurant: {
        ...this.initialRestaurant,
      },
      
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const {data} = await adminApi.categories.get()
        this.categories = data.categories
        this.isLoading = false //get()完成後 轉換狀態
      }  catch(error) {
         this.isLoading = false
        Toast.fire({
          icon:'error',
          title:'無法取得餐廳類別'
        })

      }
    },
    handleFileChange(e) {
      const files = e.target.files;
      console.log("files", files); //若有files則console.log出來
      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.restaurant.image = "";
      } else {
        //產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]); //暫時產生圖片網址

        this.restaurant.image = imageURL;
        console.log("差別", this.restaurant.image);
      }
    },
    handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);
      this.$emit("after-submit", formData); //發送給父層
    },
  },
};
</script>