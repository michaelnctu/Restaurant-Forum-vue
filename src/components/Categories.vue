<template>
  <div class="container py-5">
    <h1 class="mt-5">Restaurant Categories</h1>

    <hr />
    <div class="slider-wrapper">
      <div class="slider">
        <VueSlickCarousel v-bind="settings">
          <div
            v-for="category in categories"
            :key="category.id"
            class="slider-item"
          >
            <router-link
              class="nav-link"
              :to="{ name: 'restaurants', query: { categoryId: category.id } }"
            >
              <img
                class="card-img-top slider-img"
                src="https://images.unsplash.com/photo-1582169296194-e4d644c48063?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2103&q=80"
                alt="Card image cap"
              />
            </router-link>

            <div class="slideritem-text">
              <h3 class="card-title category-text text-white">
                {{ category.name }}
              </h3>
            </div>
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
const settings = {
  dots: true,
  infinite: true,
  initialSlide: 2,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  swipeToSlide: true,
};
const dummyCategories = {
  categories: [
    {
      id: 2,
      name: "日本料理",
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
    },
    {
      id: 3,
      name: "義大利料理",
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
    },
    {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
    },
    {
      id: 5,
      name: "素食料理",
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
    },
    {
      id: 6,
      name: "美式料理",
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
    },
    {
      id: 7,
      name: "複合式料理",
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
    },
  ],
};

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data() {
    return {
      settings,
      categories: dummyCategories.categories,
    };
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
  width: 70%;
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
</style>


