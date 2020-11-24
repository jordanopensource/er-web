<template>
  <div>
    <!-- Banner -->
    <Banner />
    <!-- Get Help -->
    <Team />
    <!-- Trust -->
    <Trust />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
  import Banner from '~/components/Banner';
  import Team from '~/components/Team';
  import Footer from '~/components/Footer';
  import Trust from '~/components/Trust'

  export default {
    layout: "default",
    components: {
      Banner,
      Team,
      Footer,
      Trust
    }
  }

</script>
