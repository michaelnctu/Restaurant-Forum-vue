<template>
  <div class="followers">
    <h1 class="ml-4">Followers</h1>

    <div class="followShown-button ml-4">
      <button
        @click.stop.prevent="isFollowing"
        type="button"
        class="btn btn-danger btn-border mr-2"
        :class="{ active: isFollwings }"
      >
        Followings
      </button>
      <button
        @click.stop.prevent="isFollower"
        type="button"
        class="btn btn-danger btn-border mr-2 { active: isFollwers }"
        :class="{ active: isFollowers }"
      >
        Followers
      </button>
    </div>
    <br />
    <!-- for迴圈在這 -->
    <div v-if="isFollwings" class="row ml-2">
      <div
        v-for="following in userfollowship.Followings"
        :key="following.id"
        class="followerShown-user col-5 mb-2"
      >
        <div class="user-info">
          <img class="user-avatar" :src="following.image" alt="" />
          <div class="user-name">
            <span>{{ following.name }}</span>
            <span>{{ following.email }}</span>
          </div>
        </div>
        <div class="userfollow-button">
          <i class="far fa-user-plus"></i>
        </div>
      </div>
    </div>

    <div v-else class="row ml-2">
      <div
        v-for="follower in userfollowship.Followers"
        :key="follower.id"
        class="followerShown-user col-5 mb-2"
      >
        <div class="user-info">
          <img class="user-avatar" :src="follower.image" alt="" />
          <div class="user-name">
            <span>{{ follower.name }}</span>
            <span>{{ follower.email }}</span>
          </div>
        </div>
        <div class="userfollow-button">
          <i class="far fa-user-plus"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FollowersTab",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isFollwings: true,
      isFollowers: false,
      userfollowship: this.user,
    };
  },
  methods: {
    isFollowing() {
      this.isFollwings = true;
      this.isFollowers = false;
    },
    isFollower() {
      this.isFollwings = false;
      this.isFollowers = true;
    },
  },
};
</script>

<style scoped>
.followers {
  height: auto;
  z-index: 99;
}

.followerShown-user {
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.user-info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.user-avatar {
  width: 50px;
  height: 50px;
}
.user-name {
  display: flex;
  flex-direction: column;
}
</style>