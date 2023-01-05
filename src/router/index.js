import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes: [
    {
      path: "/",
      name: "Auth",
      component: () => import("../pages/Auth.vue"),
    },
    {
      path: "/Home",
      name: "Home",
      component: () => import("../pages/Home.vue"),
    },
  ],
});

export default router;
