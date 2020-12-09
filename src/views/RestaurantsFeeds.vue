<template>
  <div class="container py-5">
    <Navbar />
    <NavTabs />

    <template>
      <h1 class="mt-5">最新動態</h1>
      <hr />
      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <!-- 最新餐廳 NewestRestaurants -->
          <NewestRestaurants :Restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <!-- 最新評論 NewestComments-->
          <h3>最新評論</h3>
          <NewestComments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import Navbar from "./../components/Navbar";
import NewestRestaurants from "./../components/NewestRestaurants";
import NewestComments from "./../components/NewestComments";
import feedsApi from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  name: "restaurantFeeds",
  components: {
    Navbar,
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    //created:在模板渲染成html前呼叫，即通常初始化某些屬性值，然後再渲染成檢視。
    this.fetchFeeds();
  },
  methods: {
    async fetchFeeds() {
      try {
        // const response = await feedsApi.getRestauratnsfeeds();
        // console.log("response", response);
        const { data } = await feedsApi.getRestauratnsfeeds();
        console.log("response", { data });
        const { restaurants, comments } = data;
        this.restaurants = restaurants;
        this.comments = comments.filter(
          (comment) => comment.Restaurant && comment.text
        );
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: error,
          title: "發生錯誤我看不到feeds耶!",
        });
      }
    },
  },
};
