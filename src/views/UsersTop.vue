<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <div v-for="user in users" :key="user.id" class="col-3">
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          <img :src="user.image | emptyImage" width="140px" height="140px" />
        </router-link>
        <h2>{{ user.name }}</h2>
        <span class="badge badge-secondary"
          >追蹤人數：{{ user.FollowerCount }}</span
        >
        <p class="mt-3">
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="unfollowUsers(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="followUsers(user.id)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "UsersTop",
  components: {
    NavTabs,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    //created:在模板渲染成html前呼叫，即通常初始化某些屬性值，然後再渲染成檢視。
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await usersAPI.getTopUsers();
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.users = data.users; //array

        console.log("我看", data);
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: " Wrong!",
        });
      }
    },

    async followUsers(userId) {
      try {
        const { data } = await usersAPI.FollowUsers({ userId });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        console.log(data);
        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isFollowed: true, //改變isFollowed屬性
            };
          }
          return user;
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "哪裡出錯了!不給你追蹤!",
        });
      }
    },

    async unfollowUsers(userId) {
      try {
        const { data } = await usersAPI.unFollowUsers({ userId });
        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id === userId) {
            return {
              ...user,
              isFollowed: false, //改變isFollowed屬性
            };
          }
          return user;
        });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "哪裡出錯了!不給你退追蹤!",
        });
      }
    },
  },
};
</script>
