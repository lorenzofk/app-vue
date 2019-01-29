<template>
  <header>
    <nav class="navbar navbar-dark navbar-expand-lg bg-primary">
      <router-link :to="'/'" class="navbar-brand"> {{ brand }} </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li v-for="routes in links" class="nav-item" :class="routes.children ? 'dropdown' : ''">
              
              <div v-if="routes.children">
                  <a class="nav-link dropdown-toggle" href="#" v-bind:id="routes.id" data-toggle="dropdown">
                    {{ routes.text }}
                  </a>
                  <div class="dropdown-menu">
                    <router-link 
                        v-for="children in routes.children" 
                        :key="children.id"
                        :to="`${children.path}`"
                        class="dropdown-item"> 
                      {{ children.text }}
                    </router-link>
                  </div>
              </div>
              <div v-else>
                <router-link :key="routes.id" :to="`${routes.path}`" class="nav-link"> 
                  {{ routes.text }}
                </router-link>  
              </div>

          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    links: Array,
    brand: String,
  },
};
</script>

<style scoped>
  
</style>
