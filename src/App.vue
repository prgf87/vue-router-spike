<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link> |
    <router-link :to="{ name: 'login' }">Login</router-link>
  </nav>
  <button @click="redirect">Redirect</button>
  <button @click="back">Go Back</button>
  <button @click="forward">Go Forward</button>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      //
    };
  },
  methods: {
    redirect() {
      this.$router.push({ name: "home" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(+1);
    },
  },
};
</script>

<style>
* {
  color: #ececec;
  background: #272727;
  font-size: 12px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 75vw;
  margin-inline: auto;
}

nav {
  padding: 15px 0 15px 0;
}

nav a {
  font-weight: 500;
  color: #ececec;
}

nav a.router-link-exact-active {
  color: #42b983;
}
button {
  margin: 0 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 2px;
  background: white;
  color: black;
}
</style>
