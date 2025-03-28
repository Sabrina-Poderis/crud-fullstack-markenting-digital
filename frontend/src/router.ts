import { createRouter, createWebHistory } from "vue-router";
import AuthRouteMiddleware from "./middleware/AuthRouteMiddleware";

import Home from "./pages/Home.vue";
import Login from "./pages/auth/Login.vue";
import Register from "./pages/auth/Register.vue";
import Dashboard from "./pages/admin/Dashboard.vue";
import ClientsList from "./pages/admin/clients/ClientsList.vue";
import ClientsForm from "./pages/admin/clients/ClientsForm.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/dashboard", component: Dashboard, beforeEnter: AuthRouteMiddleware },
  { path: "/clients", component: ClientsList, beforeEnter: AuthRouteMiddleware },
  { path: "/clients/new", component: ClientsForm, beforeEnter: AuthRouteMiddleware },
  { path: "/clients/:id/edit", component: ClientsForm, beforeEnter: AuthRouteMiddleware },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
