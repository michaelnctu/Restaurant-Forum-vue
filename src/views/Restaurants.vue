
<template>
  <div class="container py-5">
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :cate="categories" />

    <Navbar />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <!-- initial-restaurant是為了區分情況,因為之後有like favorite等會改變 -->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantPagination
      :currentPage="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import Navbar from "./../components/Navbar";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantPagination from "./../components/RestaurantPagination";
import restaurantApi from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    Navbar,
    RestaurantsNavPills,
    RestaurantPagination,
  },
  data() {
    //vue的資料物件
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: -1,
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    const { page = "", categoryId = "" } = this.$route.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      console.log("router", this.$route);
      try {
        const response = await restaurantApi.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });

        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = response.data;

        console.log("response", response);

        this.restaurants = restaurants; //this 指向 vm例項
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料稍後再試試看唄",
        });
      }
    },
  },
};
</script>
