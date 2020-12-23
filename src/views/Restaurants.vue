
<template>
  <div class="container py-5">
    <Banner />
    <NavTabs />

    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :cate="categories" />
    <!-- 餐廳 -->
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
import Banner from "./../components/Banner";
import NavTabs from "./../components/NavTabs";
import RestaurantCard from "./../components/RestaurantCard";
import RestaurantsNavPills from "./../components/RestaurantsNavPills";
import RestaurantPagination from "./../components/RestaurantPagination";
import restaurantApi from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  name: "Restaurants",
  components: {
    Banner,
    NavTabs,
    RestaurantCard,
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


<style >
.row {
  width: 100%;
}

/* activity */
.activity {
  width: 100%;
}

.banner-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 250px 250px;
  grid-gap: 0.5rem;
  grid-template-areas:
    " main main"
    "left right";
}

.main-banner {
  grid-area: main;
  background-image: url("https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1285&q=80");
}

.banner-title {
  color: #1a5366;
  margin-bottom: 0.4rem;
  margin-right: 1rem;
}

.banner-description {
  margin-bottom: 1rem;
  margin-right: 1rem;
}

.action {
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.sub-banner-right {
  grid-area: right;
  background-image: url("https://images.unsplash.com/photo-1535294435445-d7249524ef2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80");
}

.sub-banner-left {
  grid-area: left;
  background-image: url("https://images.unsplash.com/photo-1569809317138-8d2ff6060c4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80");
}

.main-banner,
.sub-banner {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>