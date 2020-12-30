<template>
  <div class="container py-5">
    <h1 class="mt-5">餐廳類別</h1>
    <hr />
    <div class="slider-wrapper">
      <div class="slider">
        <VueSlickCarousel v-bind="settings" v-if="categories.length !== 0">
          <div
            v-for="category in categories"
            :key="category.id"
            class="slider-item"
          >
            <router-link
              class="nav-link"
              :to="{ path: '/restaurants', query: { categoryId: category.id } }"
            >
              <img
                class="card-img-top slider-img"
                :src="category.image"
                alt="Card image cap"
              />

              <div class="slideritem-text">
                <h3 class="card-title category-text text-white">
                  {{ category.name }}
                </h3>
              </div>
            </router-link>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import cateAPI from "./../apis/categories";
import { Toast } from "./../utils/helpers";
const settings = {
  dots: true,
  infinite: true,
  initialSlide: 2,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  swipeToSlide: true,
};

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings,
      categories: [],
    };
  },

  created() {
    this.fetchCategories();
  },

  methods: {
    async fetchCategories() {
      // 在每一個 category 中都添加一個 isEditing 屬性
      try {
        const { data } = await cateAPI.getCategories();
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.categories = data.categories.map((category) => ({
          ...category,
          isEditing: false,
          nameCached: "", //資料暫存
        }));
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得類別",
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

.slider {
  width: 100%;
  height: 80%;
}

.slider-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.slider-title {
  font-weight: 700;
}

.slider-item {
  position: relative;
}
.slideritem-text {
  position: absolute;
  font-weight: 700;
  top: 50%;
  left: 25%;

  z-index: 99;
}
.slick-list {
  margin: 0 -3px;
}
.slick-slide > div {
  padding: 0 5px;
}
.slider-img {
  width: 100%;
  height: 180px;
  border-radius: 5%;
  object-fit: cover;
}

.nav-link {
  padding: 0 0;
}

.category-text {
  font-weight: 600;
  font-size: 1.5rem;
}

h1 {
  font-family: "Roboto";
}
</style>


