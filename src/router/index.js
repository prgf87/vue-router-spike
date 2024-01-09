import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Jobs from "@/views/jobs/Jobs.vue";
import JobDetails from "@/views/jobs/JobDetails.vue";
import Login from "@/views/Login.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "jobdetails",
    component: JobDetails,
    props: true
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  //redirect 
  {
    path: '/all-jobs',
    redirect: '/jobs'
  }
  // 404 page
  // {
  //   path: ''
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
