<template>
  <div id="app">

    <!-- Header -->
    <Navigation 
        :brand="brand" 
        :links="links">
    </Navigation>
    
    <!-- Body -->
    <main class="container-fluid">
        <div class="row flex-xl-nowrap">
          <div class="col-md-12 col-xl-12 py-md-3 pl-md-5 bd-content">
            <router-view />
          </div>
        </div>
    </main>

    <!-- Footer -->
    <Footer 
        :link="'https://www.linkedin.com/in/lorenzokniss/'" 
        :text="'Lorenzo Kniss'">
    </Footer>

  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  },
  data() {
    return {
      brand: 'My App',
      links: [
        {
          id: 1,
          path: "#",
          text: "Users",
          children: [
            {
              id: 1.1,
              path: "/users",
              text: "List"
            },
            {
              id: 1.2,
              path: "/users/create",
              text: "Create"
            }
          ]
        },
        {
          id: 2,
          path: '/resume',
          text: 'Resume CV'
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

<style>
  
  .container-fluid {
    margin-bottom: 30px;
  }

</style>