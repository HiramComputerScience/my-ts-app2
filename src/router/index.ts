import Vue from "vue";
import {
  default as Router,
  default as VueRouter,
  RouteConfig,
} from "vue-router";


Vue.use(VueRouter);

const originalPush: any = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch();
};
const routes: RouteConfig[] = [
  {
    path: "/",
    name: "welcomePage",
    component: () => import("@/views/welcomePage.vue"),
  },
  {
    path: "/newuser",
    name: "newuser",
    component: () => import("@/views/newuser.vue"),
  },
  {
    path: "/loginuser",
    name: "loginuser",
    component: () => import("@/views/loginuser.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;