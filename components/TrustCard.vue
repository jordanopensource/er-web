<template>
  <div class="flex flex-col justify-start text-center bg-white mb-8">
    <img :src="image" alt="bot" />
    <h3 class="mt-6 mb-3">{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
    },
  }

</script>

<style scoped>
  img {
    height: 74px;
    width: 100%;
  }

</style>
