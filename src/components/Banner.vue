<template>
  <div class="banner">
    <img :src="banner" alt="" class="banner-img" />
    <div class="search-block">
      <div class="mb-5">帶你深入探索有趣又獨特的旅遊體驗行程</div>
      <div class="search-bar">
        <input
          class="search-input"
          type="text"
          placeholder="輸入目的地、景點或行程名稱"
          v-model="searchInput"
          @keydown.enter="search"
        />
        <button class="search-btn" @click="search">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div class="keyword">
        <span>熱門關鍵字</span>
        <div class="keyword-content">
          <button
            v-for="(keyword, index) in keywords"
            :key="index"
            class="keyword-item"
            @click="searchKeyword(keyword)"
          >
            {{ keyword }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const bannerAll = [
  "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
];

const keywords = [
  "Xpark",
  "台北",
  "桃園",
  "台中",
  "101",
  "水族館",
  "樂園",
  "宜蘭",
  "花蓮",
];

export default {
  data() {
    return {
      banner: "",
      searchInput: "",
      keywords: [],
    };
  },
  created() {
    this.banner = bannerAll[Math.floor(Math.random() * bannerAll.length)];
    this.keywords = keywords;
  },
  methods: {
    search() {
      if (this.searchInput.trim().length !== 0) {
        this.$router.push({
          name: "ProductList",
          query: { q: this.searchInput },
        });
        this.searchInput = "";
      } else {
        return;
      }
    },
    searchKeyword(keyword) {
      this.$router.push({ name: "ProductList", query: { q: keyword } });
    },
  },
};
</script>

<style>
.banner {
  border: solid green;
  width: 100%;
  height: 450px;
  position: relative;
}

.banner-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.search-block {
  width: calc(100% - 30px);
  position: absolute;
  top: 150px;
  left: 30px;
  color: #fff;
}

.keyword {
  margin-top: 15px;
  display: flex;
  flex-direction: column;
}

.keyword-content {
  max-width: 300px;
}

.keyword-item {
  display: inline-block;
  border: 1px solid #fff;
  padding: 0 8px;
  margin: 0 10px 10px 0;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  text-shadow: 1px 1px 5px #333;
}
</style>