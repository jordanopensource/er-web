<template>
  <div class="email">
    <div class="bg-green-500 colorabove"></div>
    <div class="below">
      <h2 class="text-black title">{{ title }}</h2>
      <div class="description">
        <p class="text-gray-600 text-base" v-for="(text,index) in description" :key="index">{{text}}</p>
      </div>
      <button ref="supportform" class="button tooltip bg-green-500">
        <a :href="emailLink">
          <font-awesome-icon class="fa-icon" :icon="iconClasses" />
          {{ buttonText }}
        </a>
        <div class="tooltip-text invisible">
          <span>{{ email }}</span>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        emailLink: "mailto:" + this.email,
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
      email: {
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
      copyEmail() {
        const email = this.email
        const copyTooltip = this.$refs.copyTooltip
        this.$copyText(email).then((e) => {
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

  .copy-tooltip-text {
    @apply p-2 absolute z-10 bg-josa-black text-white text-left text-xs leading-4 rounded-md opacity-75;
    left: -24px;
    bottom: 26px;
    direction: ltr;
    font-family: 'lato';
  }

  .copy-icon {
    @apply z-10 text-josa-blue-oxfordBlue mr-2 cursor-pointer;
  }

  .copy-icon:hover {
    opacity: 0.7;
  }

</style>
