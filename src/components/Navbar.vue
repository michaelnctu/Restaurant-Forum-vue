<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <router-link class="navbar-brand" to="/"> MealFresh </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarSupportedContent" class="navbar-collapse collapse">
      <div class="ml-auto d-flex align-items-center">
        <!-- is user is admin -->
        <router-link
          v-if="currentUser.isAdmin"
          to="/admin"
          class="text-dark mr-3"
        >
          管理員後台
        </router-link>

        <!-- is user is login -->
        <router-link to="#" class="text-dark mr-3"> 使用者 您好 </router-link>
        <button
          type="button"
          class="btn btn-sm btn-outline-success my-2 my-sm-0"
        >
          登出
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
//mapstate的一個方法
import { mapState } from "vuex";

export default {
  // Vue 會在沒有資料時使用此預設值

  // Step4：新增 `mapState` 方法 ，這個方法可以選擇要把 Vuex 中的哪些資料，以 computed 的方式帶入 Vue 內

  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
};
</script>

<style>
.navbar-brand {
  font-family: "Langar", cursive;
  font-size: 2rem;
}
.navbar {
  background-color: #fffdf9;
}
</style>