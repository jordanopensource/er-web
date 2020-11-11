<template>
  <div class="phone">
    <div class="bg-red-700 colorabove"></div>
    <div class="below">
      <h2 class="text-black">{{ title }}</h2>
      <div class="description">
        <p class="text-gray-600 text-base" v-for="(text,index) in description" :key="index">{{text}}</p>
      </div>
      <button class="button tooltip block" @click="copy">
        <font-awesome-icon class="fa-icon" :icon="iconClasses" />
        <bdo dir="ltr">
          {{ phone }}
        </bdo>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
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
      phone: {
        type: String,
        required: true
      }
    },
    computed: {
      iconClasses() {
        return ['fas', this.iconName]
      }
    },
    methods: {
      copy() {
        const phone = this.phone
        const copyTooltip = this.$refs.copyTooltip
        this.$copyText(phone).then((e) => {
            copyTooltip.classList.toggle("invisible")
            copyTooltip.innerText = "Copied!"
            setTimeout(() => {
              copyTooltip.classList.toggle("invisible")
              copyTooltip.innerText = ""
            }, 2000)
          })
          .catch((e) => {
            copyTooltip.innerText = "Can not copy!"
          })
      }
    }
  }

</script>

<style scoped>
  p {
    @apply font-theMixArab self-center;
  }

  .button {
    @apply bg-red-700;
  }

  .copy-tooltip-text {
    direction: ltr;
    font-family: 'lato';
  }

</style>
