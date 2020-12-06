<template>
  <div class="container py-5">
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="currentUser.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>

        <img
          v-if="currentUser.image"
          :src="currentUser.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />

        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button
        @after-submit="handleAfterSubmit"
        type="submit"
        class="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
const dummyUser = {
  currentUser: {
    id: 1,
    name: "管理者",
    email: "root@example.com",
    image: "https://i.pravatar.cc/300",
    isAdmin: true,
  },
  isAuthenticated: true,
};

export default {
  name: "userEdit",
  data() {
    return {
      currentuser: {
        id: "",
        name: "",
        email: "",
        image: "",
        isAdmin: 1,
      },
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },

  methods: {
    fetchUser(currentUserId) {
      console.log("user的id是", currentUserId);
      const { currentUser } = dummyUser;
      const { image, name } = currentUser;

      this.currentUser = {
        ...this.currentUser,
        image,
        name,
      };
    },
    handleFileChange(e) {
      console.log("this", this);
      const { files } = e.target;
      console.log("files", files);
      if (files.length === 0) {
        this.currentUser.image = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.currentUser.image = imageURL;
      }
    },
    handleAfterSubmit(e) {
      //透過api將表單資料送到伺服器
      const form = e.target;
      const formData = new FormData(form);
      // TODO: 透過 API 向伺服器更新使用者
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>