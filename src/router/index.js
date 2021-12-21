import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: function () {
      return import(/* webpackChunkName: "Home" */ "../views/Home.vue");
    },
  },
  {
    path: "/destination",
    name: "destination",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Destination.vue");
    },
  },
  {
    path: "/crew",
    name: "crew",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Crew.vue");
    },
  },
  {
    path: "/technology",
    name: "technology",
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/Technology.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
