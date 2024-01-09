<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
    <h1>The following data is being fetched dynamically using json-server</h1>
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name: 'jobdetails', params: { id: job.id } }">
        <h2 class="link">{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
<style>
.link {
  width: 150px;
  margin: 10px auto;
  padding: 8px 16px;
  border: 2px solid black;
  border-radius: 8px;
  background: rgb(5, 26, 211);
  color: white;
}
.link:hover {
  opacity: 0.8;
  /* border: none; */
}
</style>
