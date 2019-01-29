<template>
  <footer class="footer">
    <div class="container">
      <span class="text-muted">© 2018 Copyright <a :href="link"> {{ text }} </a> </span>
    </div>
  </footer>
</template>

<script>

export default {
  name: "Footer",
  props: [
      'link',
      'text'
  ]
}

</script>

<style scoped>
  
  .footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 60px;
      line-height: 60px;
      background-color: #007bff;
  }

  a, .text-muted {
    color: #fff !important;
  }

</style>