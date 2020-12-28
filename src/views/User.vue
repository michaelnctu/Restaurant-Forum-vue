<template>
  <div>
    <section class="container user-banner">
      <div class="userbanner-container">
        <img
          class="userbanner-img"
          src="https://images.unsplash.com/photo-1551889579-8acb3f14a917?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt=""
        />
        <div class="user-avatar-container">
          <img
            class="user-avatar"
            :src="user.image"
            alt=""
            style="width: 100px; height: 100px"
          />
          <div class="user-avatar-text">
            <h1 style="color: white">{{ user.name }}</h1>
            <p class="user-email" style="color: white">{{ user.email }}</p>
          </div>
        </div>

        <div class="user-number-container">
          <div class="number-container">
            <span class="unit-number"> {{ user.Comments.length }}</span>
            <span class="unit">Reviews</span>
          </div>
          <div class="number-container">
            <span class="unit-number">
              {{ user.FavoritedRestaurants.length }}</span
            >
            <span class="unit">收藏的餐廳</span>
          </div>
          <div class="number-container">
            <span class="unit-number">{{ user.Followers.length }}</span>
            <span class="unit">followers(追隨者)</span>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-5">
      <div class="row select-container">
        <div class="select-option col-4">
          <ul class="list-group">
            <li
              @click.stop.prevent="changeRestaurants"
              class="list-group-item"
              :class="{ active: isRestaurants }"
            >
              收藏的餐廳
            </li>
            <li
              @click.stop.prevent="changeFollowers"
              class="list-group-item"
              :class="{ active: isFollowers }"
            >
              Followers
            </li>
            <li
              @click.stop.prevent="changeReview"
              class="list-group-item"
              :class="{ active: isReview }"
            >
              已評論的餐廳
            </li>
          </ul>
        </div>

        <div v-if="isFollowers" class="select-detail col-8">
          <Followers :user="user" />
        </div>

        <div v-if="isRestaurants" class="select-detail col-8">
          <UserRestaurantCard :user="user" />
        </div>

        <div v-if="isReview" class="select-detail col-8">
          <RestaurantComments :user="user" />
        </div>
      </div>
    </div>
    <!-- <div class="card-body row">
      <div class="card">
        <div>
          <h5 class="card-header">{{ user.Comments.length }}間已評論餐廳</h5>

          <div
            v-for="comment in user.Comments"
            :key="comment.id"
            class="card-body"
          >
            <router-link
              :to="{
                name: 'restaurants',
                query: { restaurntId: comment.Restaurant.id },
              }"
            >
              <img
                :src="comment.Restaurant.image"
                alt="Card image cap"
                style="width: 150px"
              />
            </router-link>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import userAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import UserRestaurantCard from "./../components/UserRestaurantCard";
import RestaurantComments from "./../components/UserRestaurantComment";
import Followers from "./../components/Followers";

export default {
  name: "User",
  components: {
    Followers,
    UserRestaurantCard,
    RestaurantComments,
  },

  data() {
    return {
      user: {},
      isFollowers: true,
      isRestaurants: false,
      isReview: false,
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    fetch;
    this.fetchUser(userId);
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await userAPI.getUser({ userId });
        this.user = {
          ...this.user,
          ...data.user,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取得user資料 ",
        });
      }
    },
    changeFollowers() {
      this.isFollowers = true;
      this.isRestaurants = false;
      this.isReview = false;
    },

    changeRestaurants() {
      this.isFollowers = false;
      this.isRestaurants = true;
      this.isReview = false;
    },
    changeReview() {
      this.isFollowers = false;
      this.isRestaurants = false;
      this.isReview = true;
    },
  },
};
</script>

<style >
.userbanner-img {
  width: 100%;
  opacity: 2;
  height: 300px;
  object-fit: cover;
  object-position: 0 -230px;
}
.user-banner {
  position: relative;
}

.userbanner-container {
  position: relative;
}

.user-avatar-container {
  position: absolute;
  left: 2rem;
  bottom: 15px;
  display: flex;
  flex-direction: row;
}

.user-avatar {
  z-index: 99;
  object-fit: cover;
  border: solid white;
  object-position: 0 0px;
  border-radius: 50%;
}
.user-number-container {
  position: absolute;
  left: 50rem;
  bottom: 15px;
  position: absolute;
  display: flex;
  flex-direction: row;
}
.number-container {
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  align-items: center;
  border-right: solid white;
}
.unit {
  color: white;
}
.unit-number {
  color: white;
}

.select-detail {
  height: auto;
}
li:active {
  color: #fff;
  border: solid red;
  border-color: #bd2333;
}
</style>
