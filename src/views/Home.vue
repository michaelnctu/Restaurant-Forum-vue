<template>
  <section>
    <div>
      <Banner />
    </div>

    <div class="container py-5">
      <NavTabs />
      <Categories />
      <RestaurantsTop />
      <!-- 餐廳類別標籤 RestaurantsNavPills -->
    </div>
  </section>
</template>

<script>
import Banner from "./../components/imageBanner";
import NavTabs from "./../components/NavTabs";
import Categories from "./../components/Categories";

import restaurantApi from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import RestaurantsTop from "./RestaurantsTop";

export default {
  name: "Restaurants",
  components: {
    RestaurantsTop,
    Banner,
    NavTabs,
    Categories,
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


