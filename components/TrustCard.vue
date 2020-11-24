<template>
  <div class="flex flex-col justify-start items-start bg-white">
    <img :src="image" alt="bot" />
    <h2 class="mt-6 mb-3">{{ title }}</h2>
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
  }

</style>
