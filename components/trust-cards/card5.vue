<template>
<div class="trust-cards container">
    <img class="bot" src="~/assets/images/group-12.svg" alt="bot" />
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
                title: 'خدمة سرية',
                description:'لن يُفْصَحَ عن أي معلومة تُقدّمها عبر المنصة لإيماننا أن أهم مبادئ الأمن الرقمي هي السرية والخصوصية',

            }
        },

    }
</script>

<style scoped>
    p {
        @apply font-theMixArab self-center;
    }
</style>
