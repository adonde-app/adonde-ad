import Vue from "vue";
import VueRouter from "vue-router";
import Intro from "@/views/IntroView.vue";
import Main from "@/views/MainView.vue";
import Login from "@/views/LoginView.vue";
import Example from "@/views/ExampleView.vue";
import Mypage from "@/views/MypageView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "intro",
    component: Intro,
  },
  {
    path: "/main",
    name: "main",
    component: Main,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/example",
    name: "example",
    component: Example,
  },
  {
    path: "/mypage",
    name: "mypage",
    component: Mypage,
  },
];

export default new VueRouter({
  mode: "history",
  routes,
});
