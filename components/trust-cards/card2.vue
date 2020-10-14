<template>
<div class="trust-cards container">
    <img class="bot" src="~/assets/images/group-9.svg" alt="bot" />
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
                title: 'شركاءٌ معتمدون',
                description:'منها منظمة RARENET الدولية للاستجابة الرقمية ومنظمة AccessNow',

            }
        },

    }
</script>

<style scoped>
    p {
        @apply font-theMixArab self-center;
    }
</style>
