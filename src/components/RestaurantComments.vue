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

        <h3>
          <a href="#"> {{ comment.User.name }}</a>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
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