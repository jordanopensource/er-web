<template>
  <div class="bg-josa-grey">
    <!--JOSA team-->
    <div id="service"
      class="container pt-20 pb-16 flex justify-between flex-wrap flex-col lg:flex-no-wrap lg:flex-row-reverse">
      <div class="px-8 lg:pl-0 lg:pr-12 lg:w-1/2 flex">
        <img class="bot lg:mt-6 mb-8 lg:mb-0 mx-auto" src="/bots/all-bots.svg" alt="bot" />
      </div>
      <div class="lg:w-1/2">
        <h1>{{ team.title }}</h1>
        <p>{{ team.description}}</p>
        <a href="https://josa.ngo" target="_blank" class="button button-blue-dark mt-8 px-6">{{ team.button }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        team: {
          title: 'فريق جوسا للأمن الرقمي',
          description: 'فريق تقني يتخصّص بالتدخل السريع في مشكلات السلامة الرقمية وبتقديم المساعدة التقنية والتصّدي للهجمات الإلكترونية، نهدف إلى رفع الوعي بأهم الممارسات الآمنة للمعلومات ومساعدتك في استعمال آمن للإنترنت، وإذا كنت بصدد التعرض لأي مشكلة فنحن هنا لمساعدتك فورًا.',
          button: 'اطلع على موقعنا الإلكتروني',
        },
      }
    }
  }

</script>
