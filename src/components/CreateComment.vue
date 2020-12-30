
<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>

      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button
        type="submit"
        class="btn btn-primary mr-0"
        @click.stop.prevent="handleSubmit"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import restaurantAPI from "./../apis/restaurants";
import { Toast } from "./../utils/helpers";
//v-model用在雙向綁定
export default {
  name: "createComment",
  data() {
    return {
      text: "",
      isProcessing: false,
    };
  },
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.text) {
          Toast.fire({
            icon: "warning",
            title: "您尚未填寫任何評論",
          });
          return;
        }
        this.isProcessing = true;

        const { data } = await restaurantAPI.createComment({
          restaurantId: this.restaurantId,
          text: this.text,
        });

        console.log("data", data);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.$emit("after-create-comment", {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text,
        });

        this.isProcessing = false;
        this.text = ""; //v-model畫面變回空
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法新增評論",
        });
      }
    },
  },
};
</script>