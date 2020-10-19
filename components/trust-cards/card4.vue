<template>
<div class="trust-cards container">
    <img class="bot" src="~/assets/images/group-11.svg" alt="bot" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
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
        },


        data() {
            return {
                title: 'استجابة سريعة',
                description:'رد سريع للمشاكل الرقمية خلال 24 ساعة من 9 صباحاً وحتى 9 مساءً',

            }
        },

    }
</script>

<style scoped>
    p {
        @apply font-theMixArab self-center;
    }
</style>
