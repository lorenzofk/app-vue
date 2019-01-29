import Vue from "vue";
import Router from "vue-router";
import About from "./views/About.vue";
import UsersForm from "./components/forms/UsersForm.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/users/create",
      name: "users-create",
      component: UsersForm
    }
  ],
  linkExactActiveClass: "active"
});
