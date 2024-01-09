<template>
  <h1>Job page {{ id }}</h1>
  <br />
  <div v-if="job">
    <h1>Dynamic Data</h1>
    <h1>{{ job.title }}</h1>
    <p>Job ID: {{ id }}</p>
    <h2>{{ job.details }}</h2>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs?id=" + this.id)
      .then((res) => res.json())
      .then((data) => (this.job = data[0]))
      .catch((e) => {
        console.log(e);
      })
      .finally(console.log(this.job, "finally"));

    // console.log(this.job);
  },
};
</script>

<style></style>
