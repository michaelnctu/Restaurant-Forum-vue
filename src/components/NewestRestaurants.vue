<template>
  <div class="card">
    <div class="card-header">最新餐廳</div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            {{ restaurant.name }}</router-link
          >
          &nbsp;
          <small>{{
            restaurant.Category ? restaurant.Category.name : "未分類"
          }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{ restaurant.createdAt | fromNow }}
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "newestRestaurants",
  filters: {
    fromNow(value) {
      if (!value) {
        return "-";
      }
      //使用moment 回傳 fromNow 的時間
      return moment(value).fromNow();
    },
  },
  props: {
    //定義好props 就可以在樣板裡使用從父層RestaurantFeeds傳進來的資料
    restaurants: {
      type: Array,
      required: true, //設定 為必填 意思是資料是必要的
    },
  },
};
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>

 