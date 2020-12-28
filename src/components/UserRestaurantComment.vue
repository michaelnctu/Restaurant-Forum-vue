<template>
  <div class="comment-container">
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in Comments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <div class="user">
          <div class="avatar">
            <img :src="user.image" class="user-img" alt="" />
          </div>
          <h3 class="username">
            <a href="#"> @ {{ comment.Restaurant.name }}</a>
            <span href="#"
              >-{{ comment.createdAt | fromNow }}
              <i class="fab fa-fort-awesome-alt"></i>
            </span>
          </h3>
        </div>
        <br />

        <p>{{ comment.text }}</p>
      </blockquote>
      <hr style="background-color: grey" />
    </div>
  </div>
</template>

<script>
import moment from "moment";
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
  filters: {
    fromNow(datetime) {
      if (!datetime) {
        return "-";
      }
      return moment(datetime).fromNow();
    },
  },
  name: "UserReview",
  //dummyData經過methods後傳到prop
  props: {
    user: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      currentUser: dummyUser.currentUser,
      Comments: this.user.Comments,
      User: this.user,
    };
  },
  methods: {
    handleDeleteButtonClick(commentId) {
      console.log("handleDeleteButtonClick", commentId);

      // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
      this.$emit("after-delete-comment", commentId);
    },
  },
};
</script>

<style scoped>
.user {
  width: 250px;
  height: auto;
  display: flex;
  justify-content: start;
}

.user-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  object-position: 0rem 0.5rem;
}

.username {
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
}
</style>