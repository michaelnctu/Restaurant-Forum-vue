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
          >
            新增
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
            <span v-show="category.isEditing" class="cancel"> ✕ </span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link mr-2"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link mr-2"
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
import { v4 as uuidv4 } from "uuid"; //先透過 uuid 產生一組隨機的 id，所以要記得引入 uuid 模組進來使用：

export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      categories: [],
      newCategoryName: "",
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

    async createCategory(newCategoryName) {
      console.log("this", newCategoryName);
      try {
        const { data } = await cateAPI.postCategories(newCategoryName);
        if (data.status === "error") {
          throw new Error(data.message);
        }
        console.log("data status", data.status);
        this.categories.push({
          id: uuidv4(), //隨機產生id的模組
          name: this.newCategoryName,
        });
        this.newCategoryName = ""; //記得把框內輸入框空白
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法新增類別",
        });
      }
    },
    deleteCategories(categoryId) {
      // 將該餐廳類別從陣列中移除
      this.categories = this.categories.filter(
        (category) => category.id !== categoryId
      );
    },
    // updateCategory({ categoryId, name }) {
    //   this.toggleisEditing(categoryId);
    // },
    updateCategory({ categoryId }) {
      this.toggleisEditing(categoryId);
    },

    // toggleIsEditing(categoryID) {
    //   //editing屬性更改function
    //   //map後接上一個function
    //   this.categories = dummyData.categories.map((category) => {
    //     if (category.id === categoryID) {
    //       return {
    //         ...category,
    //         isEditing: !category.isEditing,
    //         nameCached: category.name, //暫存區存入先前的餐廳種類
    //       };
    //     }
    //     return category;
    //   });
    // },

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