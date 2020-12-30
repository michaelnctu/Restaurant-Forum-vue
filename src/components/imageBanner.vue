<template>
  <section class="banner">
    <div class="banner-container">
      <img
        class="banner-img"
        src="https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80
"
        alt=""
      />

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
    </div>
  </section>
</template>

<style scoped>
.banner-container {
  width: 100%;
  height: 450px;
}
.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0 -550px;
}

.banner-tabs {
  position: relative;
  bottom: 10rem;
  left: 15rem;
  display: flex;
  justify-content: start;
}
.tabs-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;

  border-radius: 10%;
  border: solid white;
}
.tabs-text {
  color: white;
}
i {
  color: white;
}
</style>
