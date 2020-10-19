<template>
    <div class="contact-card">
        <p>
            {{ cardText }}
            <span class="tooltip">
                <font-awesome-icon @click="copyEmail" class="copy-icon" :icon="['fas', 'copy']" />
                <div ref="copyTooltip" class="copy-tooltip-text invisible"></div>
            </span>
        </p>
        <button ref="supportform" class="button tooltip">
            <a :href="emailLink">
                <font-awesome-icon class="fa-icon" :icon="iconClasses" />
                {{ arabicName }}
            </a>
            <div class="tooltip-text invisible">
                <span>{{ email }}</span>
            </div>
        </button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                emailLink: "mailto:" + this.email
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
            email: {
                type: String,
                required: true
            }
        },
        computed: {
            cardText() {
                return 'أرسل لنا عبر ' + this.arabicName
            },
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
        @apply font-theMixArab self-center mb-4;
    }

    .button {
        @apply bg-josa-green;
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

    @screen sm {
        p {
            @apply m-0;
        }
    }

    @screen lg {
        .tooltip-text {
            left: 102%;
            top: 3px;
            right: unset;
            margin: 0;
        }
    }
</style>