<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'jobs' }">Jobs</router-link> |
    <router-link :to="{ name: 'login' }">Login</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* display: grid; */
}
* {
  color: #ececec;
  background: #272727;
  font-size: 12px;
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
</style>
