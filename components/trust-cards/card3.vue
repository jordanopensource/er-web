<template>
<div class="trust-cards container">
    <img class="bot" src="~/assets/images/group-8.svg" alt="bot" />
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
                title: 'فريق تقني مختص',
                description:'فريق متعدد الاختصاصات ومؤهل في أمهر طرق للمساعدة الرقمية يُقدّم توصيات مختصة',

            }
        },

    }
</script>

<style scoped>
    p {
        @apply font-theMixArab self-center;
    }
</style>
