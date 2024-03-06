import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ClassesView from "../views/ClassesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/classes",
      name: "classes",
      component: ClassesView,
    },
    {
      path: "/races",
      name: "races",
      component: () => import("../views/RacesView.vue"),
    },
    {
      path: "/backgrounds",
      name: "backgrounds",
      component: () => import("../views/BackgroundsView.vue"),
    },
    {
      path: "/spells",
      name: "spells",
      component: () => import("../views/SpellsView.vue"),
    },
  ],
});

export default router;
