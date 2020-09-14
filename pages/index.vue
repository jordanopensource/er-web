<template>
  <Layout>

    <!-- Banner -->
    <Banner />

    <!-- Services -->
    <Services />

    <!-- Get Help -->
    <GetHelp />

    <!-- Footer -->
    <Footer />

  </Layout>
</template>

<script>
  import Banner from '~/components/Banner';
  import Services from '~/components/Services';
  import GetHelp from '~/components/GetHelp';
  import Footer from '~/components/Footer';

  export default {
    components: {
      Banner,
      Services,
      GetHelp,
      Footer
    }
  }
</script>