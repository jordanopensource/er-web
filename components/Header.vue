<template>
  <header class="header">
    <div class="container">
      <nuxt-link tag="div" to="/">
        <a>
          <img class="logo" src="~/static/logo/logo-colored-ar.svg" alt="الجمعية الأردنية للمصدر المفتوح">
        </a>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
  export default {}

</script>

<style scoped>
  .header {
    @apply bg-josa-grey py-8;
    border-bottom: 1px solid #979797;
  }

  .logo {
    width: 206px;
    height: 62px;
  }

</style>
