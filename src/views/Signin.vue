
<template>
  <div class="container py-5">
    <form class="w-100" @submit.prevent.stop="handleSubmit">
      <div class="tex t-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="email">email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password">Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="current-password"
          required
        />
      </div>

      <button
        class="btn btn-lg btn-primary btn-block mb-3"
        type="submit"
        :disabled="isProcessing"
      >
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup"> Sign Up </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  data() {
    return {
      email: "",
      password: "",
      isProcessing: false,
    };
  },

  methods: {
    handleSubmit() {
      if (!this.email || !this.password) {
        Toast.fire({
          icon: "warning",
          title: "請輸入email還有密碼喔!",
        });
        return;
      }
      this.isProcessing = true; //點擊後立即鎖上submit

      authorizationAPI
        .signIn({
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          // 取得 API 請求後的資料
          const { data } = response;
          // 將 token 存放在 localStorage 內
          if (data.status !== "success") {
            throw new Error(data.message);
          }
          // 將伺服器回傳的 token 保存在 localStorage 中
          localStorage.setItem("token", data.token);
          // 成功登入後進行轉址
          this.$router.push("/restaurants");
        })
        .catch((error) => {
          console.log("error", error);
          this.isProcessing = false; //登入失敗後submit按鈕還原
          //密碼欄位清空
          this.password = "";
          //顯示錯誤提示使用的是toast模組
          Toast.fire({
            icon: "warning",
            title: "請輸入正確的帳號密碼!",
          });
        });
    },
  },
};
</script>