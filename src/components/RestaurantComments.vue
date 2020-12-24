<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restcommentsProp" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
        ></button>
        <div class="user">
          <div class="avatar"></div>
          <h3 class="username">
            <a href="#"> {{ comment.User.name }}</a>
            <span href="#"
              >-{{ comment.createdAt | fromNow }}
              <i class="fab fa-fort-awesome-alt"></i>
            </span>
          </h3>
        </div>

        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
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

  //dummyData經過methods後傳到prop
  props: {
    restcommentsProp: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      currentUser: dummyUser.currentUser,
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

<style >
.user {
  border: solid green;
  width: 200px;
  height: auto;
  display: flex;
  justify-content: center;
}

.avatar {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: solid red;
}

.username {
  margin-top: 1rem;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
}
</style>