<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div class="col-3">
        <a href="#">
          <img :src="user.image" width="140px" height="140px" />
        </a>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.Followers.length }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger btn-border favorite mr-2"
            @click.stop.prevent="unFollow"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary like mr-2"
            @click.stop.prevent="Follow"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialUser,
    };
  },
  methods: {
    Follow() {
      this.user = {
        ...this.user, // 保留餐廳內原有資料
        isFollowed: true,
      };
    },
    unFollow() {
      this.user = {
        ...this.user, // 保留餐廳內原有資料
        isFollowed: false,
      };
    },
  },
};
</script>