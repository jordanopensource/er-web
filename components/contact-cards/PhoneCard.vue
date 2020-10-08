<template>
    <div class="contact-card phone m-0">
    <div class="bg-red-700 colorabove"></div>
    <div class="below">
        <h2 class="text-black title">{{ josaPlatform.title }}</h2>
         <p class=" text-gray-600 text-xs">{{ josaPlatform.description }}</p>
<!--
            {{ cardText }}
            <span class="tooltip">
                <font-awesome-icon @click="copy" class="copy-icon" :icon="['fas', 'copy']" />
                <div ref="copyTooltip" class="copy-tooltip-text invisible"></div>
            </span>
-->

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
            arabicName: {
                type: String,
                required: true
            },
            iconName: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            }
        },
        computed: {
            cardText() {
                return 'اتصل بنا على ' + this.arabicName
            },
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
        },
        data() {
          return {
                josaPlatform: {
                title: 'حالات الطوارئ',
                description: 'عندما تتواصل معنا عبر منصاتنا الخاصة سيبقى اسمك مجهولًا إلا إذا تم تزويدنا به. ولكن يمكن معرفة هوية المرسل عبر البريد الإلكتروني عن طريق البريد نفسه. بالإضافة إلى ذلك، يوفّر بريدنا الخاص خاصية التشفير'
                },
          }
        },

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
