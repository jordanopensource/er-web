<template>
    <div class="contact-card">
        <p>{{ cardText }}</p>
        <button ref="supportform" class="button">
            <font-awesome-icon class="fa-icon" :icon="iconClasses" />
            {{ arabicName }}
        </button>
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
            window.$(this.$refs.supportform).ZammadForm({
                messageTitle: 'Support Form',
                messageSubmit: 'Send',
                messageThankYou: 'Thank you for your contacting JOSA (#%s)! We\'ll contact you as soon as possible.',
                modal: true,
                attachmentSupport: true
            });
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

    .button:hover {
        color: rgba(255, 255, 255, 0.7)
    }

    @screen sm {
        p {
            @apply m-0;
        }
    }
</style>