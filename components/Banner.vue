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
                <bdo dir="ltr" class="font-lato">{{ phone }}</bdo>
                <span class="copy-tooltip-text invisible"></span>
              </button>
            </div>
            <div class="mt-12">
              <p class="font-bold">{{ others }}</p>
              <div>
                <button ref="supportform" class="button button-light">
                  <!-- <img src="~/static/icons/form.svg" alt="envelop" class="icon"> -->
                  {{ form }}
                </button>
                <button class="button button-light tooltip button-email">
                  <a :href="emailLink">
                    <!-- <img src="~/static/icons/envelop.svg" alt="envelop" class="icon"> -->
                    {{ email }}
                  </a>
                  <div class="tooltip-text invisible font-lato">{{ emailAddress }}</div>
                </button>
                <button ref="chatbutton" class="button-light-disabled button button-light open-zammad-chat tooltip">
                  <!-- <img src="~/static/icons/form.svg" alt="form" class="icon"> -->
                  {{ chat }}
                  <div class="tooltip-text invisible">{{ chatNotAvailable }}</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <img class="bot lg:mt-6 mb-8 lg:mb-0 mx-auto" src="~/static/bots/banner-bot.svg">
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
        emailLink: "mailto:" + this.emailAddress,
        chat: 'المحادثة الفورية',
        chatNotAvailable: 'المحادثة الفورية غير متاحة في الوقت الحالي.',
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
      this.$nextTick(() => {
        this.chatInit();
      });
      this.$nextTick(() => {
        function setIntervalX(callback_1, callback_2, delay, repetitions) {
          var count = repetitions;
          var f = setInterval(() => {
            callback_1(callback_2)
            if (--count === 0) {
              clearInterval(f);
            }
          }, delay);
        }
        setIntervalX(this.setStatus, this.setButton, 300, 5);
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
      disableButton() {
        const chatbutton = this.$refs.chatbutton;
        chatbutton.disabled = true;
        if (!(chatbutton.classList.contains("button-light-disabled"))) {
          chatbutton.classList.add("button-light-disabled");
        }
        $(".tooltip-text").show();
        if ($(window).width() <= 640) {
          $(".info-icon").show();
        }
      },
      enableButton() {
        const chatbutton = this.$refs.chatbutton;
        chatbutton.disabled = false;
        if (chatbutton.classList.contains("button-light-disabled")) {
          chatbutton.classList.remove("button-light-disabled");
        }
        $(".tooltip-text").hide();
        $(".info-icon").hide();
      },
      setStatus(callback) {
        this.chatState = ($('.zammad-chat').length > 0) ? true : false;
        callback()
      },
      setButton() {
        const state = this.chatState;
        if (state == false) {
          this.disableButton();
        } else {
          this.enableButton();
        }
      },
      copy(event) {
        var button = $(event.target).closest('button');
        var copyTooltip = button.find('.copy-tooltip-text')[0];
        var text = button[0].innerText;
        this.$copyText(text).then((e) => {
          copyTooltip.classList.toggle("invisible")
          copyTooltip.innerText = "Copied!"
          setTimeout(() => {
            copyTooltip.classList.toggle("invisible")
            copyTooltip.innerText = ""
          }, 2000)
        })
      },
      chatInit() {
        var chat = new ZammadChat({
          title: 'Ask JOSA for help',
          background: '#3897c0',
          fontSize: '12px',
          chatId: 1,
          flat: true,
          target: window.$(this.$el),
          show: false
        });
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

  .icon {
    width: 16px;
    height: 19.2px;
    object-fit: contain;
    display: inline;
    margin-left: 15px;
  }

  .open-zammad-chat {
    @apply inline-block !important;
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
