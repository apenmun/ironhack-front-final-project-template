import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes: [
    //Cuidado con las rutas que en App.vue habrá que modificarlas
    {
      path: "/",
      name: "Auth",
      component: () => import("../pages/Auth.vue"),
    },
    {
      path: "/home",
      name: "Home",
      component: () => import("../pages/Home.vue"),
    },
  ],
});

export default router;
