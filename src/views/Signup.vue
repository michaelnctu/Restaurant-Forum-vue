<template>
  <div class="container py-5">
    <form class="w-100" @submit.stop.prevent="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Sign Up</h1>
      </div>

      <div class="form-label-group mb-2">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          type="text"
          class="form-control"
          placeholder="name"
          autocomplete="username"
          required
          autofocus
        />
      </div>

      <div class="form-label-group mb-2">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          type="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
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
          autocomplete="new-password"
          required
        />
      </div>

      <div class="form-label-group mb-3">
        <label for="password-check">Password Check</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        />
      </div>

      <button class="btn btn-lg btn-primary btn-block mb-3" type="submit">
        Submit
      </button>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signin"> Sign In </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
    </form>
  </div>
</template>

<script>
import usersAPI from "./../apis/authorization";
import { Toast } from "./../utils/helpers";

export default {
  name: "signuppage",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    };
  },
  methods: {
    async handleSubmit(e) {
      try {
        console.log("e", e);
        const form = e.target;
        const formData = new FormData(form);
        for (let [name, value] of formData.entries()) {
          console.log(name + ": " + value);
        } //確認formDATA有東西

        //密碼二次輸入不符
        if (this.password !== this.passwordCheck) {
          Toast.fire({
            icon: "error",
            title: "兩次密碼輸入不符",
          });
          this.passwordCheck = ""; //洗白
          return;
        }
        //欄位都有被填到
        if (
          !this.password ||
          !this.passwordCheck ||
          !this.name ||
          !this.email
        ) {
          Toast.fire({
            icon: "error",
            title: "請你確認每個欄位都有被填寫到",
          });
        }

        const { data } = await usersAPI.signUp({
          formData,
          // name: this.name,
          // email: this.email,
          // password: this.password,
          // passwordCheck: this.passwordCheck,
        });
        console.log("data", data);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        Toast.fire({
          icon: "success",
          title: data.message,
        });

        this.$router.push("/signin");
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法註冊，請稍後再試",
        });
      }
    },
  },
};
</script>

