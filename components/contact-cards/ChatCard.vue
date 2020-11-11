<template>

  <div class="chat">
    <div class="colorabove bg-yellow-400"></div>
    <div class="below">
      <h2 class="text-black title">{{ title }}</h2>
      <div class="description">
        <p class="text-gray-600 text-base" v-for="(text,index) in description" :key="index">{{text}}</p>
      </div>
      <button ref="chatbutton" class="open-zammad-chat button tooltip button-disabled bg-yellow-400" disabled>
        <font-awesome-icon class="fa-icon" :icon="iconClasses" />
        {{ buttonText }}
        <div ref="info" class="tooltip-text invisible">{{ tooltip }}</div>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tooltip: 'المحادثة الفورية غير متاحة في الوقت الحالي.',
        chatState: false,
      }
    },
    props: {
      name: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      iconName: {
        type: String,
        required: true
      },
      buttonText: {
        type: String,
        required: true
      },
      description: {
        type: Array,
        required: true
      },
    },
    computed: {
      iconClasses() {
        return ['fas', this.iconName]
      }
    },
    mounted() {
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
        if (!(chatbutton.classList.contains("button-disabled"))) {
          chatbutton.classList.add("button-disabled");
        }
        $(".tooltip-text").show();
        if ($(window).width() <= 640) {
          $(".info-icon").show();
        }
      },
      enableButton() {
        const chatbutton = this.$refs.chatbutton;
        chatbutton.disabled = false;
        if (chatbutton.classList.contains("button-disabled")) {
          chatbutton.classList.remove("button-disabled");
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
  p {
    @apply font-theMixArab self-center;
  }


  a:hover {
    color: rgba(255, 255, 255, 0.7)
  }

  .open-zammad-chat {
    @apply inline-block !important;
  }

  .info-icon {
    @apply z-10 text-josa-blue-oxfordBlue mr-2 cursor-pointer;
  }

  .info-icon:hover {
    opacity: 0.7;
  }

  @screen sm {
    p {
      @apply m-0;
    }

    .info-icon {
      @apply hidden;
    }
  }

</style>
