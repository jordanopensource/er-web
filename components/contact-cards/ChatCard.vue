<template>
    <div class="contact-card">
    <h2 class="text-black">{{ josaPlatform.title }}</h2>
     <p class=" text-gray-600 text-xs">{{ josaPlatform.description }}</p>

    <!--    <p>{{ cardText }}
            <font-awesome-icon @click="tooltipShow" class="info-icon" :icon="['fas', 'info-circle']" />
        </p>
-->
        <button ref="chatbutton" class="open-zammad-chat button tooltip button-disabled" disabled>
            <font-awesome-icon class="fa-icon" :icon="iconClasses" />
            {{ arabicName }}
            <div ref="info" class="tooltip-text invisible">{{ tooltip }}</div>
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tooltip: 'المحادثة الفورية غير متاحة في الوقت الحالي. الرجاء تعبئة نموذج مكتب المساعدة.',
                chatState: false,
                josaPlatform: {
                    title: 'مساعدة منتظمة',
                    description: 'عندما تتواصل معنا عبر منصاتنا الخاصة سيبقى اسمك مجهولًا إلا إذا تم تزويدنا به. ولكن يمكن معرفة هوية المرسل عبر البريد الإلكتروني عن طريق البريد نفسه. بالإضافة إلى ذلك، يوفّر بريدنا الخاص خاصية التشفير'
                },

            }
        },
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
        },
        computed: {
            cardText() {
                return 'أرسل لنا عبر ' + this.arabicName
            },
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
        @apply font-theMixArab self-center mb-4;
    }

    .button {
        @apply bg-josa-green;
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

    @screen lg {
        .tooltip-text {
            left: 102%;
            top: -20px;
            right: unset;
            margin: 0;
        }
    }
</style>
