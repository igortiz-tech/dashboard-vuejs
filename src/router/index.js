import { createRouter, createWebHistory } from "vue-router";
import RestauranteIndex from "@/views/restaurantes/Index.vue";
import DashboardIndex from "@/views/dashboard/Index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      component: DashboardIndex,
      meta:{
        description: "Um novo dashboard",
      }
    },
    {
      path: "/restaurante",
      name: "Restaurante",
      component: RestauranteIndex,
      meta:{
        description: "",
      }
    }
  ],
});

export default router;
