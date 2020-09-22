<template>
    <div class="contact-card">
        <span>
            <span class="sm:w-full lg:w-auto">
                <img v-if="anonymous" class="check" src="/check.svg" />
                <img v-else class="uncheck" src="/uncheck.svg" />
                <p v-if="anonymous">{{ anonymousId }}</p>
                <p v-else>{{ notAnonymousId }}</p>
            </span>
            <span class="sm:w-full lg:w-auto">
                <img v-if="encryption" class="check" src="/check.svg" />
                <img v-else class="uncheck" src="/uncheck.svg" />
                <p v-if="encryption">{{ encrypted }}</p>
                <p v-else>{{ notEncrypted }}</p>
            </span>
        </span>
        <a :href="link" target="_blank" class="button" :style="{ backgroundColor: color }">
            <span class="m-0">
                <font-awesome-icon class="fa-icon" :icon="iconClasses" />
                {{ arabicName }}
            </span>
        </a>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                anonymousId: 'الهوية مجهولة',
                notAnonymousId: 'الهوية غير مجهولة',
                encrypted: 'يوجد تشفير',
                notEncrypted: 'لا يوجد تشفير'
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
            link: {
                type: String,
                required: true
            },
            anonymous: {
                type: Boolean,
            },
            encryption: {
                type: Boolean,
            },
            iconName: {
                type: String,
                required: true
            },
            color: {
                type: String,
            }
        },
        computed: {
            iconClasses() {
                return ['fab', this.iconName]
            }
        }
    }
</script>

<style scoped>
    span {
        @apply inline-block text-right font-theMixArab self-center;
    }

    p {
        @apply ml-8 inline-block;
    }

    .check,
    .uncheck {
        display: inline;
        width: 14px;
        height: 11px;
        margin: 0 0 0 10px;
    }

    a.button {
        @apply mt-4;
    }

    a:hover {
        color: rgba(255, 255, 255, 0.7)
    }

    @screen sm {
        a.button {
            margin: 0;
        }
    }

</style>
