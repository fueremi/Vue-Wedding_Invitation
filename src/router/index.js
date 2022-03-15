import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Undangan from "../views/Undangan.vue";

const routes = [
  {
    path: "/:nama?",
    name: "Home",
    component: Home,
  },
  {
    path: "/undangan",
    name: "Undangan",
    component: Undangan,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
