<template>
  <button class="open-zammad-chat">
    <img v-if="icon" :src="icon" alt="envelop" class="icon" />
    {{ arabicName ? arabicName : name }}
  </button>
</template>

<script>
export default {
  mounted() {
    new ZammadChat({
      title: this.title,
      background: this.backgroundColor,
      fontSize: this.fontSize,
      chatId: this.$config.OTS_CHAT_ID,
      flat: true,
      show: false,
      debug: this.debug,
    });
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    arabicName: {
      type: String,
      default: null,
    },
    debug: {
      type: Boolean,
      default: false,
    },
    fontSize: {
      type: String,
      default: "14px",
    },
    backgroundColor: {
      type: String,
      default: "#3897c0",
    },
    title: {
      type: String,
      default: "Ask us for help",
    },
    icon: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="postcss" scoped>
.icon {
  width: 16px;
  height: 19.2px;
  object-fit: contain;
  display: inline;
  margin-left: 15px;
}
</style>
