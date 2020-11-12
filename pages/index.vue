<template>
  <div>
    <!-- Banner -->
    <Banner />
    <!-- Get Help -->
    <GetHelp />
    <!-- Team -->
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
  import GetHelp from '~/components/GetHelp';
  import Footer from '~/components/Footer';
  import Trust from '~/components/Trust'

  export default {
    layout: "default",
    components: {
      Banner,
      Team,
      GetHelp,
      Footer,
      Trust
    }
  }

</script>
