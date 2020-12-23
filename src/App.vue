<template>
  <div id="restaurant-forum">
    <v-app>
      <Navbar />

      <main role="main" class="mt-5 mb-5 bg-white">
        <router-view />
      </main>

      <Footer />
    </v-app>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  components: {
    Navbar: Navbar,
    Footer: Footer,
  },
};
</script>

<style>
#restaurant-forum {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  border: solid pink;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.main {
  border: solid pink;
}
</style>
