<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <p>[{{ restaurant.Category.name }}]</p>
      </div>

      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image"
          style="width: 250px; margin-bottom: 25px"
        />
        <br />
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong> {{ restaurant.opening_hours }}
            </li>
            <li><strong>Tel:</strong> {{ restaurant.tel }}</li>
            <li><strong>Address:</strong> {{ restaurant.address }}</li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
      <hr />
    </div>

    <hr />

    <br />
    <br />
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  name: "adminrestaurant-id",
  data() {
    return {
      restaurant: {},
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },

  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId });
        console.log("data狀態", data);
        console.log("stauts", data.status);

        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.restaurant = data.restaurant;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法看表單",
        });
      }
    },
  },
};
</script>