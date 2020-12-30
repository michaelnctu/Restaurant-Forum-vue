<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-7">最新動態</h1>
      <hr />
      <br />

      <div class="row">
        <div class="col-md-6">
          <h3>最新餐廳</h3>
          <br />
          <!-- 最新餐廳 NewestRestaurants -->
          <NewestRestaurants :restaurants="restaurants" />
        </div>
        <div class="col-md-6">
          <!-- 最新評論 NewestComments-->
          <h3>最新評論</h3>
          <br />
          <NewestComments :comments="comments" />
        </div>
      </div>
    </template>
  </div>
</template>


<script>
import NewestRestaurants from "./../components/NewestRestaurants";
import NewestComments from "./../components/NewestComments";
import restaurantsAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";

export default {
  name: "restaurantFeeds",
  components: {
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
        const { data } = await restaurantsAPI.getRestaurantsfeeds();
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
</script>