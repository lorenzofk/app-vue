<template>
  <div id="app">

    <Navigation 
        :brand="brand" 
        :links="links">
    </Navigation>

    <div class="container-fluid">
      <div class="row flex-xl-nowrap">
        <div class="col-md-12 col-xl-12 py-md-3 pl-md-5 bd-content">
          <router-view />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  },
  data() {
    return {
      brand: 'My App',
      links: [
        {
          id: 1,
          path: "/about",
          text: "Sobre"
        },
        {
          id: 2,
          path: "#",
          text: "Usuários",
          children: [
            {
              id: 2.1,
              path: "/users",
              text: "Listagem"
            },
            {
              id: 2.2,
              path: "/users/create",
              text: "Cadastrar"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss">
  @import './assets/custom-bootstrap.scss';
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>