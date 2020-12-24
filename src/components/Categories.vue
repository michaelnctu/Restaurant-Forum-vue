<template>
  <div class="slider-wrapper">
    <div class="slider-title">
      <h1>Restaurant Categories</h1>
    </div>

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
              class="card-img-top"
              src="https://images.unsplash.com/photo-1582169296194-e4d644c48063?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2103&q=80"
              alt="Card image cap"
              width="250px"
              height="210px"
            />
          </router-link>

          <div class="slideritem-text">
            <h3 class="card-title text-white">{{ category.name }}</h3>
          </div>
        </div>

        <div class="slider-item">
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1582169296194-e4d644c48063?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2103&q=80"
            alt="Card image cap"
            width="250px"
            height="210px"
          />

          <div class="slideritem-text">
            <h3 class="card-title text-white">墨西哥料理</h3>
          </div>
        </div>
        <div>
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1586540480250-e3a0717298b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Card image cap"
            width="250px"
            height="210px"
          />
        </div>
        <div class="slider-item">
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1565941072372-0f0f10c8b7dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80"
            alt="Card image cap"
            width="250px"
            height="210px"
          />
        </div>
        <div class="slider-item">
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Card image cap"
            width="250px"
            height="210px"
          />
        </div>
        <div class="slider-item">
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Card image cap"
            width="250px"
            height="210px"
          />
        </div>
      </VueSlickCarousel>
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

<style>
button.slick-prev:before,
button.slick-next:before {
  background-color: grey !important;
  border-radius: 50%;
}

.slider {
  width: 80%;
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
  left: 30%;

  z-index: 99;
}

.slick-list {
  margin: 0 -5px;
}
.slick-slide > div {
  padding: 0 5px;
}
</style>


