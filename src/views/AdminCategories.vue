<template>
  <div class="container py-5">
    <!-- 1. 使用先前寫好的 AdminNav -->
    <AdminNav />

    <form class="my-4">
      <div class="form-row">
        <div class="col-auto">
          <input
            v-model="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          />
        </div>
        <div class="col-auto">
          <button
            @click.stop.prevent="createCategory"
            type="button"
            class="btn btn-primary"
            :disabled="isProcessing"
          >
            {{ isProcessing ? "處理中" : "新增" }}
          </button>
        </div>
      </div>
    </form>

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col" width="60">#</th>
          <th scope="col">Category Name</th>
          <th scope="col" width="210">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories" :key="category.id">
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative"></td>

          <td class="position-relative">
            <div v-show="!category.isEditing" class="category-name">
              {{ category.name }}
            </div>

            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            />

            <span
              v-show="category.isEditing"
              class="cancel"
              @click.stop.prevent="handleCancel(category.id)"
            >
              ✕
            </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="
                updateCategory({ categoryId: category.id, name: category.name })
              "
            >
              Save
            </button>

            <button
              type="button"
              class="btn btn-link mr-2"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "../components/AdminNav";
import cateAPI from "./../apis/categories";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminCategories",
  components: {
    AdminNav,
  },
  data() {
    return {
      categories: [],
      newCategoryName: "",
      isProcessing: false,
      isEditing: false,
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      // 在每一個 category 中都添加一個 isEditing 屬性
      try {
        const { data } = await cateAPI.getCategories();
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.categories = data.categories.map((category) => ({
          ...category,
          isEditing: false,
          nameCached: "", //資料暫存
        }));
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得類別",
        });
      }
    },

    async createCategory() {
      try {
        this.isProcessing = true;

        const { data } = await cateAPI.postCategories({
          name: this.newCategoryName,
        });

        console.log("Id", data);

        if (data.status === "error") {
          throw new Error(data.message);
        } else {
          Toast.fire({
            icon: "success",
            title: "成功新增類別囉",
          });
        }

        this.categories.push({
          id: data.categoryId, //隨機產生id的模組
          name: this.newCategoryName,
        });
        this.newCategoryName = ""; //記得把框內輸入框空白

        this.isProcessing = false;
      } catch (error) {
        console.log("error", error);
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "無法新增類別",
        });
      }
    },

    async deleteCategory(categoryId) {
      try {
        const { data } = await cateAPI.deleteCategory({
          categoryId,
          name: this.categories,
        });
        console.log("data", data);

        // 將該餐廳類別從陣列中移除
        this.categories = this.categories.filter(
          (category) => category.id !== categoryId
        );

        if (data.status === "success") {
          Toast.fire({
            icon: "success",
            title: "成功刪除 ",
          });
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得類別",
        });
      }
    },

    async updateCategory({ categoryId, name }) {
      try {
        const { data } = await cateAPI.putCategories({ categoryId, name });
        console.log("data", data);

        if (data.status === "success") {
          Toast.fire({
            icon: "success",
            title: "成功更新 ",
          });
        } else {
          throw new Error(data.message);
        }
        this.toggleIsEditing(categoryId);

        // this.categories = this.categories.map((category) => {
        //   if (category.id === categoryId) {
        //     return {
        //       ...category,
        //       isEditing: !category.isEditing,
        //     };
        //   }
        //   return category;
        // });
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "更新失敗",
        });
      }
    },

    toggleIsEditing(categoryId) {
      //editing屬性更改function
      //map後接上一個function
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name, //暫存區存入先前的餐廳種類
          };
        }
        return category;
      });
    },

    handleCancel(categoryId) {
      this.categories = this.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            // 把原本的餐廳類別名稱還回去
            name: category.nameCached,
          };
        }
        return category;
      });

      this.toggleIsEditing(categoryId); //轉換狀態
    },
  },
};
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>