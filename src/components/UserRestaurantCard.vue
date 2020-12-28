<template>
  <div class="row">
    <div
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      class="card card-frame col-sm"
      style="width: 17rem; height: 25rem"
    >
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        style="width: 13rem; height: 13rem"
      />

      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >{{ restaurant.name }}</router-link
          >
        </p>

        <p class="card-text title-wrap">
          {{ restaurant.description }}
        </p>
      </div>

      <!-- <span class="badge badge-secondary">{{
          restaurant.Category.name
        }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div> -->
    </div>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  props: {
    //from 父層來的
    user: {
      type: Object,
      required: true,
    },
    isprocessing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      restaurants: this.user.FavoritedRestaurants,
    };
  },
  methods: {
    async addFavorite(restaurantId) {
      try {
        //這邊的操作大致可分開看, usersAPI負責後端資料庫的更新, this.restaurant負責更新view上
        this.isProcessing = true;
        const { data } = await usersAPI.addFavorite({ restaurantId });

        console.log("data", data); //回傳一個object

        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true,
        };
        this.isProcessing = false;
      } catch (error) {
        console.error(error.message);
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法將餐廳加入最愛，請稍後再試",
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: false,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法刪除最愛等一下再試試看!!",
        });
      }
    },

    async addLike(restaurantId) {
      try {
        const { data } = await usersAPI.addLike({ restaurantId });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "哪裡出錯了!不給你Like!",
        });
      }
    },
    async deleteLike(restaurantId) {
      try {
        const { data } = await usersAPI.deleteLike({ restaurantId });

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isLiked: false,
        };
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法刪除like等一下再試試看!!",
        });
      }
    },
  },
};
</script>


<style scoped >
.card-container {
  border: solid green;
}
</style>