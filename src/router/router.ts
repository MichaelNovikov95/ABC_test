import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import FinishView from "../views/FinishView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/test", component: TestView },
  { path: "/result", component: FinishView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
