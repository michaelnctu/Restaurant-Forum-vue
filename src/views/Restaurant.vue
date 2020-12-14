
<template>
  <div class="container py-5">
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <RestaurantDetail :restdetailProp="restaurant" />

    <hr />
    <!-- 餐廳評論 RestaurantComments -->

    <RestaurantComments
      :restcommentsProp="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />

    <CreateComment />
  </div>
</template>

<script>
import RestaurantComments from "./../components/RestaurantComments";
import RestaurantDetail from "./../components/RestaurantDetail";
import CreateComment from "./../components/CreateComment";
import restaurantAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "Restautant",
  components: {
    RestaurantComments,
    RestaurantDetail,
    CreateComment,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id: restaurantId } = this.$route.params; //拿params
    this.fetchRestaurant(restaurantId);
  },

  //當我更改網址上的id時可以同時向後端發送請求
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchRestaurant(id);
    next();
  },

  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        console.log("id", restaurantId);
        const { data } = await restaurantAPI.getRestaurant({ restaurantId });

        this.restaurant = {
          ...this.restaurant,
          ...data.restaurant,
          isFavorited: data.isLiked,
          isLiked: data.isFavorited,
          categoryName: data.restaurant.Category
            ? data.restaurant.Category.name
            : "未分類",
        };

        this.restaurantComments = data.restaurant.Comments;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
    afterDeleteComment(commentId) {
      console.log("afterDeleteComment", commentId);
    },
  },
};
</script>