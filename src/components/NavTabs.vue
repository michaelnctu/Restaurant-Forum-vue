<template>
  <!-- <ul class="nav nav-tabs mb-4">
    <li class="nav-item">
      <router-link to="/home" class="nav-link"> 首頁 </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/restaurants/feeds" class="nav-link">
        最新動態
      </router-link>
    </li>

    <li class="nav-item">
      <router-link to="/users/top" class="nav-link"> 美食達人 </router-link>
    </li>
  </ul> -->

  <div class="banner-tabs">
    <div class="tabs-item">
      <router-link to="/home" class="nav-link">
        <i class="fas fa-home"></i>
        <div class="tabs-text">首頁</div>
      </router-link>
    </div>

    <div class="tabs-item">
      <router-link to="/restaurants/feeds" class="nav-link">
        <i class="fab fa-readme"></i>
        <div class="tabs-text">最新動態</div>
      </router-link>
    </div>

    <div class="tabs-item">
      <router-link to="/users/top" class="nav-link">
        <i class="fas fa-user-friends"></i>
        <div class="tabs-text">美食達人</div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.nav-tabs {
  border-bottom: 1px solid #bd2333;
}

.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover,
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  border-color: #bd2333;
  background-color: #bd2333;
  color: white;
}

.banner-tabs {
  display: flex;
  justify-content: start;
  border: solid green;
}
.tabs-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  background-color: #bd2333;
  border-radius: 10%;
}
.tabs-text {
  color: white;
}
i {
  color: white;
}
</style>