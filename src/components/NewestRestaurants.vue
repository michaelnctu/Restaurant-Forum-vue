<template>
  <div class="card">
    <div class="card-header">最新餐廳</div>
    <div class="card-body">
      <!-- v for 為一個迴圈 -->
      <div v-for="restaurant in restaurants" :key="restaurant.id"
      >
      <div>
        <h4>
          <a href="#">{{restaurant.name}}}</a>
          <small>{{restuarant.Category ? restaurant.Category.name: '未分類'
            }}</small>
        </h4>
        <p>
          {{restaurant.description}}
        </p>
        {{restaurant.createdAt | fromNow}}
        <hr />
      </div>

    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
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

 