<template>
  <div class="layout" style="direction:rtl">
    <buildInfoBanner v-if="this.$config.TARGET_ENV==='development'"/>
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
