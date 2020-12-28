
<template>
  <div class="row">
    <div class="col-12" position-relative>
      <img
        class="img-responsive"
        :src="restaurant.image"
        style="width: 100%; height: 200px; margin-bottom: 25px
        object-fit:cover"
      />
      <h1>{{ restaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.categoryName }} | rating: 5
      </p>
      <div class="row">
        <div class="contact-info-wrap col-6">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              <br />
              Fri 2020-12-25 1:00 PM - 6:00 PM
              <br />
              Thu 2020-12-31 1:00 PM - 6:00 PM
              <br />
              Thu 2020-12-31 1:00 PM - 6:00 PM

              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
        <div class="col-6">
          <div class="google-map" id="map"></div>
        </div>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ restaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{ name: 'restaurant-dashboard', params: { id: restaurant.id } }"
      >
        Dashboard
      </router-link>

      <button
        v-show="restaurant.isFavorited"
        type="button"
        class="btn btn-danger btn-border mr-2"
        @click.stop.prevent="deleteFavorite(restaurant.id)"
      >
        移除最愛
      </button>
      <button
        v-show="!restaurant.isFavorited"
        type="button"
        class="btn btn-primary btn-border mr-2"
        @click.stop.prevent="addFavorite(restaurant.id)"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        type="button"
        class="btn btn-danger like mr-2"
        @click.stop.prevent="deleteLike(restaurant.id)"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like mr-2"
        @click.stop.prevent="addLike(restaurant.id)"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "restaurantDetail",
  data() {
    return {
      restaurant: this.restdetailProp,
      map: null,
      // 預設經緯度在信義區附近
      lat: 25.0325917,
      lng: 121.5624999,
      markers: [],
    };
  },
  props: {
    restdetailProp: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    this.initMap();
    this.setMarker();
  },

  watch: {
    restdetailProp(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue,
      };
    },
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

    // 建立地圖
    initMap() {
      const google = window.google;
      // 透過 Map 物件建構子建立新地圖 map 物件實例，並將地圖呈現在 id 為 map 的元素中
      this.map = new google.maps.Map(document.getElementById("map"), {
        // 設定地圖的中心點經緯度位置
        center: { lat: this.lat, lng: this.lng },
        // 設定地圖縮放比例 0-20
        zoom: 15,
        // 限制使用者能縮放地圖的最大比例
        maxZoom: 20,
        // 限制使用者能縮放地圖的最小比例
        minZoom: 3,
        // 設定是否呈現右下角街景小人
        streetViewControl: false,
        // 設定是否讓使用者可以切換地圖樣式：一般、衛星圖等
        mapTypeControl: false,
      });
    },
    // 建立地標
    setMarker() {
      const google = window.google;
      // 建立一個新地標
      const marker = new google.maps.Marker({
        // 設定地標的座標
        position: { lat: this.lat, lng: this.lng },
        // 設定地標要放在哪一個地圖
        map: this.map,
      });

      // save markers
      this.markers.push(marker);
    },
  },
};
</script>


<style scoped>
.google-map {
  width: 100%;
  height: 200px;
}
</style>