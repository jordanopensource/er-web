<template>
  <div class="layout" style="direction:rtl">
    <appHeader />
    <Nuxt />
  </div>
</template>

<script>
  import appHeader from '~/components/Header';
  export default {
    components: {
      appHeader
    }
  }
</script>
