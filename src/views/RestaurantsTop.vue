  
<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template v-else>
      <h1 class="mt-5">人氣餐廳</h1>

      <hr />

      <VueSlickCarousel v-bind="settings">
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>

        <div
          v-for="restaurant in restaurants"
          :key="restaurant.id"
          class="row no-gutters slider-item"
        >
          <div class="col-md-4">
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >
              <img class="card-img" :src="restaurant.image | emptyImage" />
            </router-link>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                {{ restaurant.name }}
              </h5>
              <span class="badge badge-secondary"
                >收藏數：{{ restaurant.FavoriteCount }}</span
              >
              <p class="card-text">
                {{ restaurant.description }}
              </p>
              <router-link
                class="btn btn-primary mr-2"
                :to="{ name: 'restaurant', params: { id: restaurant.id } }"
              >
                Show
              </router-link>

              <button
                v-if="restaurant.isFavorited"
                type="button"
                class="btn btn-danger mr-2"
                @click.stop.prevent="deleteFavorite(restaurant.id)"
              >
                移除最愛
              </button>
              <button
                v-else
                type="button"
                class="btn btn-primary"
                @click.stop.prevent="addFavorite(restaurant.id)"
              >
                加到最愛
              </button>
            </div>
          </div>
        </div>
      </VueSlickCarousel>

      <!-- <div
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        class="card mb-3 auto-slider"
        style="max-width: 540px; margin: auto"
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <router-link
              :to="{ name: 'restaurant', params: { id: restaurant.id } }"
            >
              <img class="card-img" :src="restaurant.image | emptyImage" />
            </router-link>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                {{ restaurant.name }}
              </h5>
              <span class="badge badge-secondary"
                >收藏數：{{ restaurant.FavoriteCount }}</span
              >
              <p class="card-text">
                {{ restaurant.description }}
              </p>
              <router-link
                class="btn btn-primary mr-2"
                :to="{ name: 'restaurant', params: { id: restaurant.id } }"
              >
                Show
              </router-link>

              <button
                v-if="restaurant.isFavorited"
                type="button"
                class="btn btn-danger mr-2"
                @click.stop.prevent="deleteFavorite(restaurant.id)"
              >
                移除最愛
              </button>
              <button
                v-else
                type="button"
                class="btn btn-primary"
                @click.stop.prevent="addFavorite(restaurant.id)"
              >
                加到最愛
              </button>
            </div>
          </div>
        </div>
      </div> -->
    </template>
  </div>
</template>



<script>
import NavTabs from "./../components/NavTabs";
import restaurantsAPI from "./../apis/restaurants";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { Toast } from "./../utils/helpers";

const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 1000,
  cssEase: "linear",
};

export default {
  name: "toprestaurant",
  components: {
    NavTabs,
    VueSlickCarousel,
  },
  data() {
    return {
      restaurants: [],
      settings,
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    async fetchRestaurants() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants();

        console.log("data", data);
        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.restaurants = data.restaurants;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: " Wrong!",
        });
      }
    },

    async addFavorite(restaurantId) {
      try {
        const data = await restaurantsAPI.addFavorite({ restaurantId });
        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount + 1,
              image: restaurant.image,
              isFavorited: true,
            };
          }
          return restaurant;
        });
      } catch (message) {
        console.log("message", message);
        Toast.fire({
          icon: "error",
          title: "哪裡出錯了!不給你加!",
        });
      }
    },

    async deleteFavorite(restaurantId) {
      try {
        const data = await restaurantsAPI.deleteFavorite({ restaurantId });
        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.restaurants = this.restaurants.map((restaurant) => {
          if (restaurant.id === restaurantId) {
            return {
              ...restaurant,
              FavoriteCount: restaurant.FavoriteCount - 1,
              isFavorited: false,
            };
          }
          return restaurant;
        });
        console.log("this.restaurant", this.restaurant);
      } catch (message) {
        console.log("message", message);
        Toast.fire({
          icon: "error",
          title: "哪裡出錯了!",
        });
      }
    },
  },
};
</script>

<style >
button.slick-prev:before,
button.slick-next:before {
  background-color: grey !important;
  border-radius: 50%;
}

.auto-slider {
  border: solid red;
}

.slider-item {
  border: solid green;
}
</style>