<template>
  <header class="header">
    <div class="container flex flex-col md:flex-row justify-between">
      <nuxt-link tag="div" to="/">
        <a>
          <img class="logo" src="~/static/logo/logo-colored-ar.svg" alt="الجمعية الأردنية للمصدر المفتوح">
        </a>
      </nuxt-link>
      <div class="flex flex-col md:flex-row md:items-center mt-8 md:mt-0">
        <p class="font-bold mb-4 md:mb-0">{{ erNumber }}</p>
      <button @click="copy" class="button button-red button-red-shadow tooltip">
        <img src="/icons/phone.svg" alt="phone" class="icon">
        <bdo dir="ltr" class="font-lato">{{ phone }}</bdo>
        <span class="copy-tooltip-text invisible"></span>
      </button>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        erNumber: 'رقم الطوارئ:',
        phone: '077 070 0099',
      }
    },
    methods: {
      copy(event) {
        var button = $(event.target).closest('button');
        var copyTooltip = button.find('.copy-tooltip-text')[0];
        var text = button[0];
        let e = this.$options.filters.copyString(text)
        if (e) {
          copyTooltip.classList.toggle("invisible")
          copyTooltip.innerText = "Copied!"
          setTimeout(() => {
            copyTooltip.classList.toggle("invisible")
            copyTooltip.innerText = ""
          }, 2000)
        }
      },
    }
  }

</script>

<style scoped>
  .header {
    @apply bg-josa-grey py-8;
    border-bottom: 1px solid #979797;
  }

  .logo {
    width: 206px;
    height: 62px;
  }

  .button {
    width: 196px;
    @apply inline-block mr-4;
  }

  .copy-tooltip-text {
    @apply p-2 absolute z-10 bg-josa-black text-white text-left text-xs leading-4 rounded-md opacity-75;
    right: 75px;
    bottom: -45px;
    direction: ltr;
    font-family: 'lato';
  }

</style>
