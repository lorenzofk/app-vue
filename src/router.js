import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import UsersList from "./components/UsersList.vue";
import UsersForm from "./components/UsersForm.vue";
import Resume from "./components/Resume.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/users",
      name: "users-list",
      component: UsersList
    },
    {
      path: "/users/create",
      name: "users-create",
      component: UsersForm
    },
    {
      path: "/resume",
      name: "resume",
      component: Resume
    },
  ],
  linkExactActiveClass: "active"
});
