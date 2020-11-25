<template>
  <div id="banner" class="bg-josa-grey">
    <div class="container">
      <div
        class="flex flex-col-reverse lg:flex-row justify-between flex-wrap lg:flex-no-wrap py-16 lg:pt-24 bg-josa-grey">
        <div class="lg:pl-20">
          <div class="mb-12">
            <h1>{{ title }}</h1>
            <p class="">
              {{ description }}
              <span class="font-bold">{{ hours }}</span>
            </p>
          </div>
          <div>
            <div>
              <button @click="copy" class="button button-red button-red-shadow tooltip">
                <img src="/icons/phone.svg" alt="phone" class="icon">
                <bdo dir="ltr" class="font-lato">{{ phone }}</bdo>
                <span class="copy-tooltip-text invisible"></span>
              </button>
            </div>
            <div class="mt-12">
              <p class="font-bold">{{ others }}</p>
              <div>
                <button ref="supportform" class="button button-light">
                  <img src="/icons/form.svg" alt="form" class="icon">
                  {{ form }}
                </button>
                <button class="button button-light tooltip button-email">
                  <a :href="'mailto:' + emailAddress">
                    <img src="/icons/envelop.svg" alt="envelop" class="icon">
                    {{ email }}
                  </a>
                  <div class="tooltip-text invisible font-lato">{{ emailAddress }}</div>
                </button>
                <button class="button button-light">
                  <a href="https://wa.me/962770700099" target="_blank">
                    <img src="/icons/chat.svg" alt="chat" class="icon">
                    {{ whatsapp }}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img class="bot lg:mt-6 mb-8 lg:mb-0 mx-auto" src="/bots/banner-bot.svg">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chatState: false,
        title: 'نحن هنا لمساعدتك',
        description: 'إذا تواجه أي مشكلة تتعلق بالأمان الرقمي تواصل معنا، سنحاول أن نحلّ المشكلة بالإضافة إلى أنّنا نقدّم الإرشادات حول أهم الممارسات الآمنة للمعلومات ونساعدك في استخدام التكنولوجيا بأمان.',
        hours: 'ساعات العمل لدينا من ٩ صباحًا إلى ٦ مساءً بتوقيت الأردن.',
        phone: '077 070 0099',
        others: 'طرق أخرى للتواصل:',
        form: 'نموذج  الكتروني',
        email: 'بريد الكتروني',
        emailAddress: 'er@jordanopensource.org',
        whatsapp: 'واتساب'
      }
    },
    mounted() {
      window.$(this.$refs.supportform).ZammadForm({
        messageTitle: 'Support Form',
        messageSubmit: 'Send',
        messageThankYou: 'Thank you for your contacting JOSA (#%s)! We\'ll contact you as soon as possible.',
        modal: true,
        attachmentSupport: true
      });
    },
    methods: {
      tooltipShow() {
        const info = this.$refs.info
        info.classList.toggle("invisible")
        setTimeout(() => {
          info.classList.toggle("invisible")
        }, 4000)
      },
      copy(event) {
        var button = $(event.target).closest('button');
        var copyTooltip = button.find('.copy-tooltip-text')[0];
        var text = button[0].innerText;
        // this.$copyText(text).then((e) => {
        //   copyTooltip.classList.toggle("invisible")
        //   copyTooltip.innerText = "Copied!"
        //   setTimeout(() => {
        //     copyTooltip.classList.toggle("invisible")
        //     copyTooltip.innerText = ""
        //   }, 2000)
        // })
      },
    }
  }

</script>

<style scoped>
  .bot {
    width: 430px;
    height: 387px;
  }

  .button {
    width: 196px;
    @apply inline-block mt-6 ml-4;
  }

  .button-email .tooltip-text {
    width: auto;
    right: -4px;
  }

  .copy-tooltip-text {
    @apply p-2 absolute z-10 bg-josa-black text-white text-left text-xs leading-4 rounded-md opacity-75;
    left: -75px;
    direction: ltr;
    font-family: 'lato';
  }

</style>

<style>
  .icon {
    width: 16px;
    height: 19.2px;
    object-fit: contain;
    display: inline;
    margin-left: 15px;
  }

</style>
