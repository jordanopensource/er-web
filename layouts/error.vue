<template>
  <div>
    <div class="__nuxt-error-page">
      <div class="container flex flex-col-reverse md:flex-row justify-between align-middle flex-wrap sm:flex-no-wrap py-12 md:py-6">
        <div class="my-auto sm:max-w-1/2 lg:max-w-1/3">
          <h2>{{ errorMessage }}</h2>
          <p class="description">{{ errorDescription }}</p>
          <p>{{ suggestedLinks }}</p>
          <div>
            <a href="https://er.josa.ngo/">{{ goToHomePage }}</a>
          </div>
        </div>
        <img src="/images/lost.svg" alt="lost" class="bot mt-8 md:pr-8 md:py-8" />
      </div>
    </div>
    <Footer class="md:mt-28"/>
  </div>
</template>

<script>
  import Footer from '~/components/Footer';
  
  export default {
    name: 'NuxtError',
    data() {
      return {
        errorMessage: 'عفوًا!',
        errorDescription: 'يبدو أننا لا نستطيع العثور على الصفحة التي تبحث عنها.',
        suggestedLinks: 'إليك بعض الروابط المفيدة بدلاً من ذلك:',
        goToHomePage: 'العودة إلى الصفحة الرئيسية',
      }
    },
    head() {
      return {
        title: 'Error 404 - ER',
        meta: [{
          name: 'description',
          content: 'Error 404 page not found'
        }]
      }
    }
  }
</script>

<style>
  .__nuxt-error-page {
    background-color: #fff;
    color: #2e3436;
  }
  .__nuxt-error-page h2 {
    font-size: 5rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
  }
  .__nuxt-error-page p {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }
  .__nuxt-error-page .description {
    font-size: 1.25rem;
    line-height: 1;
    margin-bottom: 2rem;
    margin-top: 5rem;
  }
  .__nuxt-error-page a {
    font-weight: 500;
    display: block;
    margin-top: 1rem;
  }
  .__nuxt-error-page a:hover {
    color: #339af0;
  }
  @screen md {
    .__nuxt-error-page h2 {
      font-size: 7rem;
    }
  }
</style>
