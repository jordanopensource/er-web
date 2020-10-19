<template>
  <div class="layout" style="direction:rtl">
    <header class="header bg-josa-blue-veryDark">
      <navbar />
      </header>
      <Nuxt />
  </div>
</template>


<script>
  import Navbar from '~/components/Navbar.vue';
  export default {
    components: {
      Navbar
    }
  }
</script>

<style>

</style>
